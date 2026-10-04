Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Música Brasileira** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Mas que Nada",
      "descricao": "Samba lançado em 1963, sucesso mundial com Sérgio Mendes & Brasil '66 em 1966."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Mas que Nada correu o mundo com Sérgio Mendes em 1966. Que cantor carioca a compôs e lançou três anos antes?",
    "resposta": "Jorge Ben Jor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mas_que_Nada",
      "https://pt.wikipedia.org/wiki/Mas_que_Nada"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mas_que_Nada",
        "situacao": "ok",
        "texto": "\"Mas que nada\" (Brazilian Portuguese pronunciation: [ma(j)s ki ˈnadɐ]) is a Brazilian song written by Jorge Ben (later known as Jorge Ben Jor) and originally recorded in 1962 by Carioca Bossa Nova musician & bandleader Zé Maria on the album Tudo Azul - Bossa E Balanço, with Jorge Ben singing lead vocals across the album. Jorge Ben recorded his own version the following year on his debut album Samb\n[…]\nIn 1958, Brazilian artist José Prates recorded a track called \"Nanã Imborô\" that appears on his album Tam... Tam... Tam...! (1958, Polydor Brasil – LPNG 4.016), which features the underlying melody and vocalizations later used by Jorge Ben in \"Mas que nada\"; these motifs would be further highlighted by Sergio Mendes’ arrangement in his version of the song in 1966.\n[…]\nSérgio Mendes covered the song with his band Brasil '66 on their debut album, Herb Alpert Presents Sergio Mendes & Brasil '66 (1966). In the United States, the single reached number 47 on the US Billboard Hot 100, and number four on the Billboard Easy Listening chart. In Canada it reached number 54. Outside of Brazil this 1966 version is better known than Jorge Ben's original and, to many, the definitive version of the song. In 1989, Mendes re-recorded the song on his album Arara.\n[…]\nIn 1998, Tamba Trio's 1963 recording of \"Mas que nada\" was featured as the soundtrack for Nike's prominent \"Airport '98\" television commercial, broadcast ahead of the 1998 FIFA World Cup. The success of the commercial prompted the group to re-release the song as a single. Despite the two versions having quite different arrangements (Tamba Trio's features a prominent saxophone solo), the track is often mistaken for Sérgio Mendes's version from 1966.\n[…]\n\"Mais que nada\" (original Sérgio Mendes & Brasil '66 version) – 2:41\n[…]\n\"Mas que nada\" (The Masters at Work remix) – 8:03\n[…]\n\"Mais que nada\" (original Sérgio Mendes & Brasil '66 version) – 2:41"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mas_que_Nada",
        "situacao": "ok",
        "texto": "\"Mas que Nada\" é uma canção composta pelo cantor brasileiro Jorge Ben Jor.\n[…]\nGravada em 1962, para seu primeiro álbum, Samba Esquema Novo a canção foi o primeiro grande sucesso de Jorge Ben (seu nome artístico na época). \"Mas Que Nada\" também é uma das canções brasileiras mais conhecidas no exterior, particularmente nos Estados Unidos, onde foi gravada pelo pianista e compositor brasileiro Sérgio Mendes.\n[…]\nO sucesso da canção nos Estados Unidos viria após uma excursão de três meses naquele país, no qual Jorge Ben se apresentou em universidades e clubes, em 1965. No ano seguinte, Sérgio Mendes lançou uma versão da canção, em seu álbum Herb Alpert presents Sergio Mendes & Brazil 66. Foi aí que se tornou grande sucesso nas paradas norte-americanas, alcançando a posição #4 na parada \"Adult Contemporary\" e #47 na parada \"Pop Singles\" - ambas da Billboard.\n[…]\nA importância da versão de Sérgio Mendes é traduzida por inúmeras versões feitas por artistas como Ella Fitzgerald, Al Jarreau, Trini Lopez e José Feliciano. Em 2013 ela foi incluída no Hall da Fama do Grammy Latino.\n[…]\nEm 2006, \"Mas que Nada\" foi remixada e regravada pelo grupo Black Eyed Peas com o próprio Sérgio Mendes, chegando a posição de #13 na parada Hot Dance Music/Club Play da Billboard.\n[…]\nEm 2006, Sérgio Mendes regravou a canção junto com os Black Eyed Peas e vocais adicionais por Gracinha Leporace (esposa de Mendes); uma versão que está incluída em seu álbum Timeless (2006).\n[…]\n«Mas Que Nada - Versão original deJorge Ben Jor.» 🔗\n[…]\n«Mas Que Nada - Versão do grupo Black Eyed Peas com Sérgio Mendes.» 🔗"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pelo Telefone",
      "descricao": "Samba registrado em 1916 e gravado em 1917, considerado o primeiro samba gravado."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Considerado o primeiro samba gravado, Pelo Telefone foi registrado em 1916 na Biblioteca Nacional por qual compositor carioca?",
    "resposta": "Donga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pelo_Telefone",
      "https://en.wikipedia.org/wiki/Pelo_Telefone"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pelo_Telefone",
        "situacao": "ok",
        "texto": "Pelo Telefone é considerado o primeiro samba a ser gravado no Brasil segundo a maioria dos autores, a partir dos registros existentes na Biblioteca Nacional, embora existam gravações de samba anteriores não tão bem sucedidas como \"Um Samba na Penha\" (Pepa Delgado), \"Samba - Em Casa da Bahiana\"(1912) e  \"Urubu Malandro\"(1914)\n[…]\nCriação coletiva de autoria controversa, a composição ganhou a assinatura de Ernesto dos Santos, mais conhecido como Donga, e do jornalista Mauro de Almeida. Foi registrada em 27 de novembro de 1916 como sendo de autoria apenas de Donga — que mais tarde incluiu Mauro como parceiro — e concebida em um famoso terreiro de candomblé daqueles tempos, a casa da Tia Ciata, frequentada por grandes músicos da época.\n[…]\nA canção foi composta em 1916, no quintal da casa da Tia Ciata, na Praça Onze. A melodia, originalmente, intitulava-se Roceiro  e foi uma criação coletiva, com participação de João da Baiana, Pixinguinha, Caninha, Hilário Jovino Ferreira  e Sinhô, entre outros. Sobre a paternidade da música, Donga a registrou antes, justificando a ação com a máxima atribuída a Sinhô: \"música é como passarinho, de quem pegar primeiro\".\n[…]\nA letra original da canção, que era “O chefe da folia/ Pelo telefone / Mandou me avisar / Que com alegria / Não se questione / Para se brincar”, foi alterada para a versão mais conhecida hoje em dia, \"O Chefe da Polícia / Pelo telefone/ Manda me avisar/ Que na Carioca / Tem uma roleta/ Para se jogar\". Segundo depoimento de Donga para o Museu da Imagem e do som (MIS), “O Chefe da Polícia… foi uma paródia feita pelos jornalistas de A Noite”.\n[…]\n«\"Pelo Telefone\"». no site da Biblioteca Nacional do Brasil\n[…]\n«O Samba completa cem anos»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pelo_Telefone",
        "situacao": "ok",
        "texto": "Pelo Telefone (English: On the Telephone) is a song attributed to the Brazilian guitarist and composer Donga and considered to be the first samba song to be recorded in Brazil, according to records at the National Library of Brazil, although earlier recordings exist, such as \"Samba - Em Casa da Bahiana\" (1913) and \"Urubu Malandro\" (1914).\n[…]\nA collective creation of controversial authorship, the composition is attributed to Ernesto dos Santos, better known as Donga, and to the journalist Mauro de Almeida. It was registered on the 27th of November, 1916 as being authored only by Donga — who later included de Almeida as a partner — and conceived in a famous Candomblé house, the house of Tia Ciata, which was frequented by popular musicians of the time.\n[…]\nBecause it was a huge success and because it was born in a samba circle from improvisations and joint creations, various musicians have claimed authorship.\n[…]\nThe song was composed in 1916, in the backyard of Tia Ciata, in Praça Onze (now Cidade Nova). The song was originally titled \"Roceiro\" and was a collaborative creation, with participation from João da Baiana, Pixinguinha, Caninha, Hilário Jovino Ferreira and Sinhô, and others. Donga was the first to register the song, which he justified with a maxim attributed to Sinhô: \"music is like a bird, it belongs to whoever catches it first\".\n[…]\nAccording to a statement by Donga to Brazil's Museum of Image and Sound, \"The chief of police... was a parody created by the journalists of A Noite. In 1913, newspaper reporters had placed a roulette wheel in Largo da Carioca to demonstrate the police's tolerance of gambling.\n[…]\n\"Pelo Telefone\" at the National Library of Brazil\n[…]\nO Samba completa cem anos (in Portuguese)"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Águas de Março",
      "descricao": "Canção brasileira de 1972 que lista imagens como pau, pedra e fim do caminho."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que compositor escreveu sozinho a letra e a música de Águas de Março, a canção do pau, da pedra e do fim do caminho?",
    "resposta": "Tom Jobim",
    "fonte": [
      "https://en.wikipedia.org/wiki/%C3%81guas_de_Mar%C3%A7o",
      "https://pt.wikipedia.org/wiki/%C3%81guas_de_Mar%C3%A7o"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/%C3%81guas_de_Mar%C3%A7o",
        "situacao": "ok",
        "texto": "\"Waters of March\" (Portuguese: \"Águas de Março\" [ˈaɡwɐz dʒi ˈmaʁsu]) is a Brazilian song composed by Antônio Carlos Jobim (1927–1994) in 1972. Jobim wrote both the original Portuguese and the English lyrics. The lyrics do not tell a story, but rather present a series of images that form a collage; nearly every line starts with \"É...\" (\"It is...\").\n[…]\nWhen writing the English lyrics, Jobim endeavored to avoid words with Latin roots, which resulted in the English version having more verses than the Portuguese. Nevertheless, the English version still contains some words from Latin origin, such as promise, dismay, plan, pain, mountain, distance and mule. Another way in which the English lyrics differ from the Portuguese is that the English version treats March from the perspective of an observer in the northern hemisphere.\n[…]\nComposer-guitarist Oscar Castro-Neves said that Jobim told him writing in this kind of stream of consciousness was his version of therapy and saved him thousands in psychoanalysis bills.\n[…]\nThe first recording of this song (Portuguese version) appeared on an EP released in May, 1972, named O Tom de Antonio Carlos Jobim e o Tal de João Bosco. This EP was released as a bonus included in the Brazilian periodical O Pasquim and was never reissued again.\n[…]\nIn 1974, Elis Regina and Antonio Carlos Jobim recorded a duet of the song as the opening track of the album Elis & Tom, which would later be called \"the definitive recording\".\n[…]\nGloria (2013) has a scene with \"Águas de Março\" performed by Hugo Moraga and other musicians.\n[…]\nThis song was also performed by Cibo Matto as \"Aguas De Marco\" on their album Super Relax from 1996.\n[…]\nOriginal hand-written score by Jobim[link removed] Archived on 2012-12-05\n[…]\nAs performed by Elis Regina and Jobim viMeo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81guas_de_Mar%C3%A7o",
        "situacao": "ok",
        "texto": "\"Águas de Março\" é uma canção brasileira do compositor Tom Jobim, de 1972. A canção foi lançada inicialmente no compacto simples Disco de Bolso, o Tom de Jobim e o Tal de João Bosco (1972), interpretada por Elis Regina em seu álbum Elis (1972), e posteriormente incluída também no álbum Matita Perê (1973) de Tom Jobim. Em 1974, uma versão em dueto com Elis Regina foi lançada no LP Elis & Tom.\n[…]\nPosteriormente, Tom Jobim compôs uma versão em língua inglesa, que manteve a estrutura e a metáfora central do significado da letra.\n[…]\nNo ano anterior à composição de \"Águas de Março\", Tom Jobim havia sofrido a única grande perseguição política em sua vida. Em um protesto contra a censura que vigorava durante a ditadura militar no Brasil,\n[…]\nTambém no período de gravação do álbum Matita Perê, Tom Jobim teve outros motivos para viver preocupado, que aludiam a problemas de saúde, términos de projeto de vida ou desinteresse pelos mesmos, algo que mencionaria em entrevistas posteriores. Para a revista Playboy, em 1988, Tom contou que, à época da criação de \"Águas de Março\", \"o médico disse que eu ia morrer de cirrose. 'É um resto de toco, é um pouco sozinho'(...)\".\n[…]\n\"Águas de março\" foi composta por Tom Jobim em março de 1972. O tema começou a ser trabalhado ao violão em seu sítio do Poço Fundo, em São José do Vale do Rio Preto, região Serrana do Rio de Janeiro.\n[…]\nO compositor escreveu originalmente duas versões da letra, uma língua portuguesa e outra em língua inglesa, esta chamada de Waters of March, e que manteve a estrutura e a metáfora central do significado da letra. Para o inglês, ele tentou evitar palavras com raízes latinas, disso resultou que a versão anglófona acabou por ter versos a mais que a da língua materna. A letra em inglês conserva a característica de enumeração de elementos presente na portuguesa."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Faroeste Caboclo",
      "descricao": "Canção da Legião Urbana lançada em 1987, que narra a saga de João de Santo Cristo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Com mais de nove minutos, a saga de João de Santo Cristo em Faroeste Caboclo foi escrita por qual compositor?",
    "resposta": "Renato Russo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Faroeste_Caboclo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Faroeste_Caboclo",
        "situacao": "ok",
        "texto": "\"Faroeste Caboclo\" é uma canção composta por Renato Russo em 1979 e lançada por seu grupo, Legião Urbana, no álbum Que País É Este, de 1987. Ganhou bastante atenção quando do lançamento do álbum e, por isso, foi lançada como o terceiro single promocional em 1988. Por motivo de censura, houve a necessidade de editar a canção para a aprovação pela censura federal.\n[…]\nA canção foi composta em 1979, na chamada fase \"Trovador Solitário\" de Renato Russo. Foi apresentada pela primeira vez em 1983, sob vaias, num show da banda no Morro da Urca.\n[…]\nEm entrevista para Leoni, Renato Russo revelou que escreveu a música em duas tardes e que o roteiro foi improvisado, escrevendo-se os versos seguintes tomando em consideração as rimas a serem feitas com os versos anteriores. O próprio compositor, porém, entende que o enredo tem falhas, como não explicar por que João aceita ir no lugar do boiadeiro para Brasília ou por que Maria Lúcia se casou com Jeremias.\n[…]\nFlávio Lemos, baixista da banda Capital Inicial e ex-colega de Renato Russo na banda Aborto Elétrico, em entrevista concedida em 2004, disse que a música se refere a uma situação acontecida entre ele e Russo:\n[…]\nAinda hoje, a canção é uma das mais bem lembradas da banda, estando em todas as coletâneas e álbuns ao vivo dela. Foi, ainda, regravada por Toni Platão no álbum Renato Russo - Uma Celebração, de 2006, e pela banda Tianastácia no álbum Tianastácia no País das Maravilhas de 2009.\n[…]\nEm 30 de maio de 2013, foi lançado Faroeste Caboclo, adaptação da canção, dirigida por René Sampaio e com roteiro de Victor Atherino e Marcos Bernstein a partir da letra original, e com distribuição da Europa Filmes. No elenco, atuaram Fabrício Boliveira (João de Santo-Cristo), Ísis Valverde (Maria Lúcia), Felipe Abib (Jeremias) e César Troncoso (Pablo)."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Tico-Tico no Fubá",
      "descricao": "Choro brasileiro composto em 1917, que se tornou conhecido internacionalmente nos anos 1940."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que compositor paulista criou o choro Tico-Tico no Fubá, que fez sucesso até em filmes de Hollywood nos anos quarenta?",
    "resposta": "Zequinha de Abreu",
    "distratores": [
      "Ernesto Nazareth",
      "Jacob do Bandolim",
      "Waldir Azevedo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tico-Tico_no_Fub%C3%A1",
      "https://pt.wikipedia.org/wiki/Tico-Tico_no_Fub%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tico-Tico_no_Fub%C3%A1",
        "situacao": "ok",
        "texto": "\"Tico-Tico no fubá\" (Brazilian Portuguese: [ˈtʃiku ˈtʃiku nu fuˈba]; \"rufous-collared sparrow in the cornmeal\") is a Brazilian choro written by Zequinha de Abreu in 1917. Its original title was \"Tico-Tico no farelo\" (\"sparrow in the bran\"), but since Brazilian guitarist Américo Jacomino \"Canhoto\" (1889–1928) had a work with the same title, Abreu's work was given its present name in 1931, and somet\n[…]\nA biographical movie about Zequinha de Abreu with the same title, Tico-Tico no Fubá was produced in 1952 by the Brazilian film studio Companhia Cinematográfica Vera Cruz, starring Anselmo Duarte as Abreu.\n[…]\nIn the M*A*S*H* episode \"Your Hit Parade\", Father Mulcahy mentions that he requested \"Tico Tico\", but got \"May the Good Lord\n[…]\n61 versions of Tico Tico at WFMU's blog"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tico-Tico_no_Fub%C3%A1",
        "situacao": "ok",
        "texto": "Tico-Tico no Fubá é um choro composto por Zequinha de Abreu. Ficou internacionalmente conhecida na voz de Carmen Miranda, e com o tempo, tornou-se uma das canções brasileiras mais famosas do mundo.\n[…]\n\"Tico-Tico no Fubá\" foi apresentada pela primeira vez em um baile na cidade de Santa Rita do Passa Quatro, em 1917, sob o título \"Tico-Tico no Farelo\". A canção recebeu seu nome atual em 1931, para evitar confusão com outra música de mesmo título, composta por Canhoto. No mesmo ano, foi gravada pela primeira vez em disco, pela Orquestra Colbaz.\n[…]\nA popularidade de \"Tico-Tico no Fubá\" atingiu seu ápice nos anos 1940, quando fez parte da trilha sonora de seis filmes de Hollywood, incluindo Bathing Beauty (1944) e It's a Pleasure (1945). A canção tem duas letras: uma escrita no Brasil e outra nos Estados Unidos, por Aloysio de Oliveira, para Carmen Miranda. Esta última a gravou pela Decca Records, em 1945, e a apresentou no filme Copacabana, em 1947, contracenando com Groucho Marx.\n[…]\nA seleção brasileira de nado sincronizado utilizou a canção como tema no XV Mundial de Esportes Aquáticos, realizado em Barcelona, em 2013. \"Tico-Tico no Fubá\" também foi executada na cerimônia de encerramento dos Jogos Olímpicos Rio 2016, interpretada por Roberta Sá, em homenagem a Carmen Miranda.\n[…]\nAo longo dos anos, \"Tico-Tico no Fubá\" foi reinterpretada por inúmeros artistas em diversos estilos musicais. Entre os arranjos e performances mais notáveis estão:\n[…]\nO tico-tico tá comendo meu fubá\n[…]\nO tico-tico tá comendo meu fubá\n[…]\nTira esse tico de cá, de cima do meu fubá\n[…]\nO tico-tico tá\n[…]\nO tico-tico tá comendo meu fubá\n[…]\nO tico-tico tá\n[…]\nO tico-tico tá comendo meu fubá\n[…]\n\"Zonotriko en la Faruno\", versão do Tico-Tico em Esperanto"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Como Nossos Pais",
      "descricao": "Canção de 1976 eternizada por Elis Regina no disco Falso Brilhante."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Como Nossos Pais, eternizada por Elis Regina em 1976, foi composta por qual cantor cearense?",
    "resposta": "Belchior",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Como_Nossos_Pais",
      "https://pt.wikipedia.org/wiki/Belchior"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Como_Nossos_Pais",
        "situacao": "ok",
        "texto": "\"Como Nossos Pais\" é uma canção composta por Belchior, lançada no álbum Alucinação, de 1976, mas que fez sucesso na voz de Elis Regina, que a gravou no aclamado álbum Falso Brilhante, também de 1976. Composta em meio à ditadura militar brasileira, a letra retrata a desilusão de uma juventude reprimida, mas também fala de esperança e luta por mudanças e também sobre os conflitos de gerações.\n[…]\nSegundo um levantamento feito pelo Escritório Central de Arrecadação e Distribuição (ECAD) sobre as obras musicais interpretadas por Elis Regina, \"Como Nossos Pais\" foi a música interpretada pela cantora mais tocada de 2010 a 2014.\n[…]\nEm 1976, o cantor Belchior passava por problemas financeiros e foi à casa de Elis para mostrar a canção. A cantora se identificou imediatamente com o caráter disruptivo da letra - que criticava toda uma geração que estava \"parada no mesmo lugar\". Ao gravar sua própria versão da música para o álbum Falso Brilhante marcou definitivamente uma transição em sua carreira.\n[…]\nAtualmente é a versão mais popular da música, sendo usada em um polêmico comercial da Volkswagen com imagem digital póstuma da cantora.\n[…]\nTambém há versões feitas por Maria Rita, filha caçula de Elis e pela cantora baiana Pitty."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Belchior",
        "situacao": "ok",
        "texto": "Antônio Carlos Belchior (Sobral, 26 de outubro de 1946 – Santa Cruz do Sul, 30 de abril de 2017), conhecido mononimamente como Belchior, foi um cantor, poeta, compositor, músico, produtor, professor de biologia, desenhista e artista plástico brasileiro. Após décadas de carreira, o cantor faleceu aos 70 anos vitimado pelo rompimento de um aneurisma na aorta.\n[…]\nAntônio Carlos Belchior foi um dos principais cantores e compositores da Música Popular Brasileira, alcançando grande projeção nacional e internacional, especialmente a partir do álbum Alucinação (1976).\n[…]\nO seu segundo álbum, Alucinação (Polygram, 1976), consolidou sua carreira, gravando canções de sucesso como \"Velha Roupa Colorida\" e \"Como Nossos Pais\", que haviam sido lançadas por Elis Regina, em 1975, em seu espetáculo \"Falso Brilhante\" e \"Apenas um Rapaz Latino-Americano\". Mais adiante, no segundo semestre de 1976, foi convidado para ser um dos artistas fundadores da WEA no Brasil, atualmente conhecida como a Warner Music Group.\n[…]\nBELCHIOR SETE ZERO - Projeto realizado em Fortaleza, nos meses de outubro e novembro de 2016, em celebração aos 70 anos do poeta, cantor e compositor cearense Belchior.\n[…]\nTambém em outubro de 2016, foi lançado o disco Alucinação - Marcelo Filho canta Belchior, onde o músico paulista Marcelo Filho regravou o disco de maior sucesso da carreira do compositor cearense, como forma de homenageá-lo ainda em vida, ainda que não se soubesse o paradeiro do cantor;\n[…]\nEm janeiro de 2017 (antes de sua morte, portanto), Belchior, foi homenageado virando nome de um bloco carnavalesco em Belo Horizonte. O \"Volta, Belchior\", com todos os foliões usando um bigode à la Zapata que nem o cantor, desfila no bairro Santa Tereza;\n[…]\nBelchior no Dicionário Cravo Albin da Música Popular Brasileira"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Evidências",
      "descricao": "Canção romântica que virou o maior sucesso da dupla Chitãozinho & Xororó, gravada por ela em 1990."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Evidências, hino na voz de Chitãozinho e Xororó, foi composta por Paulo Sérgio Valle e por qual cantor romântico?",
    "resposta": "José Augusto",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Evid%C3%AAncias_(can%C3%A7%C3%A3o)",
      "https://pt.wikipedia.org/wiki/Jos%C3%A9_Augusto_(cantor)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Evid%C3%AAncias_(can%C3%A7%C3%A3o)",
        "situacao": "ok",
        "texto": "\"Evidências\" é uma canção composta por José Augusto e Paulo Sérgio Valle em 1989, a qual se tornou famosa após ser gravada por Chitãozinho & Xororó no álbum Cowboy do Asfalto, em 1990, tornando-se a segunda música mais executada nas rádios naquele ano, bem como uma das mais tocadas no ano seguinte. A faixa é uma das mais reconhecidas da dupla, sendo executada até hoje em concertos por eles e regra\n[…]\nA canção foi composta por José Augusto e Paulo Sérgio Valle. Foi gravada pela primeira vez em maio de 1989, por Leonardo Sullivan, que a lançou em junho do mesmo ano em seu disco Veneno, Mel e Sabor Esta gravação teve lançamento apenas regional, não tendo sido bem sucedida nacionalmente.\n[…]\nJosé Augusto já havia colaborado com Chitãozinho e Xororó ao oferecer-lhes a canção \"Página Virada\", sucesso do álbum Os Meninos do Brasil, de 1989. Então, em 1990, ele enviou à dupla uma fita cassete com algumas canções novas, entre elas \"Evidências\" e um cover em português da canção \"Bridge over Troubled Water\" da dupla norte-americana Simon & Garfunkel.\n[…]\nChitãozinho e Xororó lembram de terem gostado muito da canção, tanto que, ao chegar ao estúdio para gravar o novo disco, em outubro de 1990, Evidências teria sido a primeira canção que eles mostraram ao maestro e arranjador Julinho Teixeira para ser gravada.\n[…]\nO cantor da banda Ratos de Porão, João Gordo, já declarou a canção como uma de suas favoritas, destacando os arranjos vocais da dupla.\n[…]\nChitãozinho & Xororó — voz\n[…]\n\"Evidências\" foi regravada pelo cantor Daniel em 2003, sendo lançada como primeiro single de seu segundo álbum ao vivo em carreira solo, intitulado ,20 Anos de Carreira - Ao Vivo. A nova versão não conteve mudanças musicais em relação à original, apesar do tom que ficou dois abaixo, e voltou a fazer grande sucesso como uma das mais tocadas nas rádios brasileiras naquele ano."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jos%C3%A9_Augusto_(cantor)",
        "situacao": "ok",
        "texto": "José Augusto Cougil (Rio de Janeiro, 16 de agosto de 1953) é um cantor e compositor brasileiro.\n[…]\nO produtor de discos Renato Correia, logo percebeu o talento de José Augusto, e imediatamente recomendou sua contratação. Em 1972 teve sua primeira composição gravada por Cauby Peixoto. No mesmo ano gravou um compacto simples como teste. Em 1973 gravou o seu primeiro disco oficial com a música \"De Que Vale Ter Tudo Na Vida\" com vendagem de um milhão de cópias.\n[…]\nConsagrado no mercado latino e no cenário nacional, José Augusto abriu a década com mais um hit, a música \"Aguenta Coração\" (tema da novela Barriga de Aluguel, da Rede Globo). Devido ao sucesso da trama também no exterior, o cantor grava a canção em espanhol e em italiano. O artista permaneceu durante meses na parada latino-americana da revista Billboard e recebe pela primeira vez o Prêmio \"Aplauso\" na categoria de melhor cantor latino.\n[…]\n\"José Augusto\" - (1995) Corpo e Coração\n[…]\n\"José Augusto\" - (1996) Nosso Amor é Assim\n[…]\n\"José Augusto\" - (1997) Eu Sem Você\n[…]\n\"José Augusto\" - (1998) Minha Vida (Acústico)\n[…]\n''José Augusto'' - (1999) José Augusto Todos Os Grandes Sucessos Ao Vivo\n[…]\n\"José Augusto\" - (2000) Prisioneiro\n[…]\n\"José Augusto\" - (2001) De Volta Pro Interior\n[…]\n''José Augusto'' - (2004) Fantasias\n[…]\n\"José Augusto\" - (2008) Aguenta Coração Ao Vivo (CD e DVD)\n[…]\n''José Augusto'' - (2012) Na Estrada Ao Vivo (CD e DVD)\n[…]\n\"José Augusto\" - (2013) Minha História (Box 3 CDs e 1 DVD)\n[…]\n\"José Augusto\" - (2014) Quantas Luas\n[…]\n\"José Augusto\" - (2016) Duetos\n[…]\n(1979) Lo Mejor de José Augusto\n[…]\n(1980) Éxitos de José Augusto\n[…]\n(1985) 12 Éxitos de José Augusto"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "II Festival de Música Popular Brasileira",
      "descricao": "Festival da TV Record realizado em 1966, em São Paulo, vencido por A Banda e Disparada."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No festival da TV Record de 1966, A Banda, de Chico Buarque, dividiu o primeiro lugar com qual canção cantada por Jair Rodrigues?",
    "resposta": "Disparada",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festival_de_M%C3%BAsica_Popular_Brasileira",
      "https://pt.wikipedia.org/wiki/Geraldo_Vandr%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festival_de_M%C3%BAsica_Popular_Brasileira",
        "situacao": "ok",
        "texto": "O Festival de Música Popular Brasileira foi um concurso anual de canções originais e inéditas criado em 1960 com base no Festival de Sanremo sendo realizado pelas emissoras Record e TV Excelsior. Realizado pela primeira vez em 1960, houve um grande espaçamento até 1965 e 1966 (pela TV Excelsior canal 9) e 1966 à 1969 (pela TV Record canal 7)\n[…]\nApós o sucesso dos primeiros programas de TV voltados para a música, em especial Brasil 60, exibido na TV Excelsior e produzido por Manoel Carlos, Solano Ribeiro achou que era o momento de criar um festival brasileiro de música semelhante ao Festival de Sanremo.\n[…]\nApós o sucesso do primeiro festival em 1966 a Tv Excelsior decidiu dar continuidade aos festivais. Como a maioria das estrelas do festival anterior foram contratadas por outras emissoras (como a TV Record) a Tv Excelsior decidiu mudar algumas coisas, agora seriam feitas cinco eliminatórias sendo elas:\n[…]\nNos Festivais da Record consolidaram dois importantes gêneros musicais brasileiros na década de 1960: as canções de protesto e o tropicalismo.\n[…]\nMelhor Intérprete: Jair Rodrigues - \"Disparada\"\n[…]\n\"Beto Bom de Bola\" (Sérgio Ricardo) – intérprete: Sérgio Ricardo (irritado com as vaias, Ricardo quebrou o violão e jogou-o na plateia). Após o ocorrido, o apresentador pediu a atenção do público para informar que a direção da TV Record pede ao júri para desconsiderar as notas dadas a música pois ela estava desclassificada do festival.\n[…]\nÚltimo festival antes da decretação do AI-5\n[…]\nJúri Especial e Júri Popular\n[…]\nFoi o único festival da Record realizado após a imposição do AI-5. Isso porque houve um declínio da qualidade do festival por causa dos compositores e interpretes que estavam sendo perseguidos e/ou exilados pela ditadura. Foi exatamente este declínio, notabilizado neste festival, que culminou no fim dos festivais da Record."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Geraldo_Vandr%C3%A9",
        "situacao": "ok",
        "texto": "Geraldo Vandré, nome artístico de Geraldo Pedrosa de Araújo Dias (João Pessoa, 12 de setembro de 1935), é um cantor, compositor, advogado e poeta brasileiro. Seu sobrenome artístico é uma abreviação do sobrenome de seu pai, o médico otorrinolaringologista José Vandregíselo.\n[…]\nEm 1966, chegou à final do Festival de Música Popular Brasileira da TV Record com o sucesso da música Disparada (parceria com Théo de Barros), interpretada por Jair Rodrigues. A canção arrebatou o primeiro lugar ao lado de A Banda, de Chico Buarque.\n[…]\nO sucesso maior veio com \"Disparada\", vencedora do Festival de Música Popular Brasileira da TV Record em 1966, junto com \"A Banda\", de Chico Buarque. No livro \"A era dos Festivais - Uma Parábola\", de 2003, Zuza Homem de Mello revela que Chico Buarque, ao saber que sua música havia ganhado, não concordou com o resultado, pois considerava \"Disparada\" melhor e não aceitaria o prêmio. A situação foi resolvida quando Chico foi informado que ele e Geraldo Vandré dividiriam o prêmio.\n[…]\nEm 1968, ao defender \"Pra não dizer que não falei de flores\" no Festival Internacional da Canção da TV Globo, criou o hino da resistência à ditadura militar que ficou conhecido pela primeira palavra: \"Caminhando\", além de estar em uma nova situação envolvendo ele e Chico Buarque. \"Sabiá\", de Tom Jobim e Chico Buarque, foi declarada vencedora, mas o público se revoltou, pois queriam Pra não dizer que não falei de flores, que acabou ficando em segundo lugar.\n[…]\nEm 1997, o Quinteto Violado lançou o CD Quinteto Violado canta Vandré (selo Atração), incluindo antigos sucessos e apenas uma música inédita: República brasileira. No mesmo ano, Elba Ramalho, Geraldo Azevedo e Zé Ramalho regravaram Disparada e Canção da despedida no CD Grande encontro 2.\n[…]\n1966: 5 Anos de Canção"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Trio elétrico",
      "descricao": "Caminhão com aparelhagem de som e músicos que puxa os foliões no carnaval da Bahia."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No carnaval de Salvador de 1950, que dupla saiu tocando instrumentos elétricos num velho Ford e deu origem ao trio elétrico?",
    "resposta": "Dodô e Osmar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Trio_el%C3%A9trico",
      "https://en.wikipedia.org/wiki/Trio_el%C3%A9trico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Trio_el%C3%A9trico",
        "situacao": "ok",
        "texto": "No entretenimento, o trio elétrico é um veículo adaptado com aparelhos de sonorização e alto-falantes, para a apresentação de música ao vivo ao ar livre, criado na cidade brasileira de Salvador (estado da Bahia) em 1950, pelos músicos Dodô e Osmar Macedo. Através das caixas amplificadoras com alto-falantes, normalmente montados em um caminhão/carreta, são normalmente emitidos as músicas dos gênero\n[…]\nVendo a animação com que o público reagira ao frevo e para suprir a frustração provocada pela interrupção do desfile, os músicos Dodô e Osmar Macedo, adaptaram um veículo Ford 1929, ligando à bateria do automóvel a um violão e um protótipo de guitarra, criando assim a \"fobica\", que mais tarde seria reconhecida como o primeiro trio elétrico do mundo. A dupla elétrica Dodô e Osmar saiu pelas ruas executando o ritmo recifense.\n[…]\nOs trios foram ampliando em tamanho, na década de 1960, pelo uso de caminhões cada vez maiores (época em que Dodô e Osmar deixaram de se apresentar). Ligados a blocos identificados por camisões coloridos - as mortalhas - os grupos passam a se isolar dos demais foliões por meio de cordas de separação. Destacava-se, desde então, o Trio Elétrico Tapajós, que era contratado pela Prefeitura do Recife para se apresentar naquela cidade.\n[…]\nEmbora o crescimento do trio tenha permitido a criação de uma nova indústria de relativa importância na Bahia, sua essência permanece na relação entre o artista e o folião; a este respeito Betinho, músico filho de Osmar Macedo, declarou: \"Quando a gente está tocando em cima do trio e vê aquele negão pulando lá embaixo... De repente, o negão pensa que você está tocando para ele dançar, mas não é. Ele é que está dançando para você tocar.\n[…]\n50 anos do trio elétrico - Fred de Góes, Editora Corrupio, 2000, ISBN 8586551082, 168 pág.\n[…]\nSonhos Elétricos - Moraes Moreira, Azougue Editorial, 2011."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Trio_el%C3%A9trico",
        "situacao": "ok",
        "texto": "Trio elétrico (Portuguese pronunciation: [ˈtɾiw eˈlɛtɾiku], electric trio) is a kind of truck or float equipped with a high-power sound system and a stage for music performance on the top, playing for the crowd as it drives through the cities. It was created in Bahia specifically for Carnival and it is now used in similar events in other districts and countries. This setup is used in Brazilian Car\n[…]\nThe idea was introduced in 1949 during a carnival in Bahia by the duo Dodô e Osmar (Adolfo Nascimento and Osmar Macedo).\n[…]\nThe trio elétrico arises from the \"dupla eletrica\" (\"Electric Duo\"), composed of the two friends Adolfo Antônio Nascimento (Dodô) and Osmar Álvares de Macêdo. In 1950, the two used a Ford Model T to perform their self-made electric instrument, known as pau eletrico (electric log), during Bahia carnival. They drove through the streets playing music powered by the car battery. The show took place in the city centre on carnival Sunday and attracted a large crowd.\n[…]\nThe name \"trio elétrico\" was coined in 1951 when Dodô and Osmar invited a friend to perform with them, the architect Temístocles Aragão, turning their dupla into a trio. They played through Salvador in a Chrysler pick-up. Though the name originally referred to the band, it became better known for their invention of a motorized band stage.\n[…]\nIn 1983, a trio built in Italy was inaugurated in Piazza Navona in the presence of 80 thousand people who danced to the electric sound of Dodô, Osmar and Armandinho. That was the first time a trio was featured out of Brazil.\n[…]\nIn 1985, invited by students of the University of Toulouse, in France, Armandinho, Dodô and Osmar traveled once more to Europe to take some of Carnival to more than 100 thousand people in Toulouse.\n[…]\n(in English) Trio Electrico at Europe.\n[…]\n(in English) The origins of the Trio Eletrico in Bahia.\n[…]\n(in Portuguese) - Brazilian Trio Elétrico for Carnival."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Jovem Guarda",
      "descricao": "Movimento e programa de TV dos anos 1960, liderado por Roberto Carlos, Erasmo Carlos e Wanderléa."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano estreou na TV Record o programa Jovem Guarda, comandado por Roberto Carlos, Erasmo Carlos e Wanderléa?",
    "resposta": "1965",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jovem_Guarda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jovem_Guarda",
        "situacao": "ok",
        "texto": "Jovem Guarda foi um movimento cultural brasileiro surgido em meados da década de 1960, que mesclava música, comportamento e moda, traduzindo-se, portanto, em um estilo ou gênero musical, em um modo de comportamento, e em um modo de vestir.\n[…]\nConsolidado com este nome em 22 de agosto de 1965, a partir da estreia do programa televisivo Jovem Guarda exibido pela TV Record, em São Paulo, apresentado pelo cantor e compositor Roberto Carlos, conjuntamente com o também cantor e compositor Erasmo Carlos e da cantora Wanderléa, deu origem a toda uma nova linguagem musical e comportamental no Brasil. Sua alegria e descontração transformaram-na em um dos maiores fenômenos nacionais do século XX.\n[…]\nOs idealizadores do programa inspiraram-se em uma frase do revolucionário russo Vladimir Lenin, onde dizia \"O futuro pertence à jovem guarda porque a velha está ultrapassada\". Eles vincularam a expressão com a imagem dos então emergentes cantores Roberto Carlos, Erasmo Carlos e Wanderléa.\n[…]\nNo final de 1968, Roberto Carlos deixou o programa de auditório. Sem seu principal ídolo, a TV Record retirou o programa do ar. Desta maneira, o movimento como um todo perdeu força, até que desapareceu no final da década de 1960.\n[…]\nForam os casos de Roberto Carlos, Wanderley Cardoso, Jerry Adriani, Ronnie Von e Reginaldo Rossi (líder, durante a Jovem Guarda, da banda The Silver Jets).\n[…]\nAntes disso, a Jovem Guarda foi a principal responsável pela introdução da guitarra elétrica e do órgão Hammond por Lafayette em gravações de Roberto Carlos, Erasmo Carlos, Wanderléa e a maioria dos artistas da Jovem Guarda, em seus discos com solo de Órgão e também nos bailes com seu conjunto. Na música do Brasil, que acabou incorporada definitivamente com a Tropicália."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Tropicália ou Panis et Circencis",
      "descricao": "Álbum coletivo que serviu de manifesto musical da Tropicália, com Caetano, Gil, Gal, Os Mutantes e outros."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano saiu o disco-manifesto Tropicália ou Panis et Circencis, reunindo Caetano, Gil, Gal Costa e Os Mutantes?",
    "resposta": "1968",
    "distratores": [
      "1965",
      "1971",
      "1974"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tropic%C3%A1lia:_ou_Panis_et_Circencis",
      "https://pt.wikipedia.org/wiki/Tropic%C3%A1lia_ou_Panis_et_Circencis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tropic%C3%A1lia:_ou_Panis_et_Circencis",
        "situacao": "ok",
        "texto": "Tropicália ou Panis et Circencis (Latin for Bread and circuses) is a 1968 collaboration album by artists including Gilberto Gil, Caetano Veloso, Tom Zé, Nara Leão, Os Mutantes and Gal Costa. Considered an important record in the Tropicália movement and in the history of Brazilian music, it features orchestral arrangements by Rogerio Duprat and lyrical contributions from Torquato Neto.\n[…]\nThe main contributors can be seen on the album cover, which is intended to be a tribute to influential Beatles album Sgt. Pepper's Lonely Hearts Club Band. Seated on the floor, Gilberto Gil holds the graduation photo of Capinan. To the left, holding a chamber pot, is Rogério Duprat. To the right, Gal Costa, wearing a yellow dress, is beside Torquato Neto, with a cap. Caetano Veloso is to the left of them, holding a picture of Nara Leão.\n[…]\nBehind them are Tom Zé, on the right, and Os Mutantes, on the left (more precisely, from left to right, Arnaldo Baptista, Rita Lee and Sérgio Dias).\n[…]\nIt is considered to be the manifesto of the Tropicalismo movement. It is number 2 on Rolling Stone's list of 100 greatest Brazilian albums of all time. The song \"Baby\" and the title track were voted by the Brazilian edition of Rolling Stone, respectively, as the 30th and the 7th greatest Brazilian song. In September 2012, it was elected by the audience of Radio Eldorado FM, of Estadao.com e of Caderno C2+Música (both the latter belong to newspaper O Estado de S."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tropic%C3%A1lia_ou_Panis_et_Circencis",
        "situacao": "ok",
        "texto": "Tropicalia ou Panis et Circencis (Latim para Pão e Circo) é um álbum de estúdio de Caetano Veloso, Gal Costa, Gilberto Gil, Nara Leão, Os Mutantes e Tom Zé lançado em julho de 1968 pela gravadora Philips Records. Considerado um marco importante da Tropicália, o álbum conta com contribuições líricas dos poetas José Capinam e Torquato Neto, e arranjos do maestro Rogério Duprat.\n[…]\nCaetano Veloso e Gilberto Gil causaram grande impacto em suas apresentações no III Festival de Música Popular da TV Record, no ano de 1967. Ali, foram lançadas as bases para o Tropicalismo em sua versão musical — um movimento que mesclou manifestações tradicionais da cultura brasileira a inovações estéticas radicais daquela época, como correntes artísticas de vanguarda e da cultura pop nacional e estrangeira (como o Rock e o Concretismo).\n[…]\nAntes de fins sociais e políticos, a Tropicália foi um movimento nitidamente estético e comportamental.\n[…]\nEm maio de 1968, começaram as gravações do álbum que seria o manifesto musical do movimento, do qual participaram artistas como Gal Costa, Nara Leão, Os Mutantes (trio então composto por Arnaldo Baptista, Rita Lee e Sérgio Dias), Tom Zé, além dos poetas José Capinam e Torquato Neto e do maestro Rogério Duprat (responsável pelos arranjos do LP).\n[…]\nA primeira música do álbum é \"Miserere Nobis\", de Gil e Capinam. Na sequência vem \"Coração Materno\"  — canção até então considerada de mau gosto. A faixa-título é interpretada pelo grupo paulista Os Mutantes, com sinais nítidos do conjunto: a psicodelia. \"Baby\", grande hit deste álbum, foi cantada por Gal Costa.\n[…]\nMariante da Silva, Bruno Sanches; Gonçalves, Jéssica Yohana (janeiro–junho de 2018). Contracultura e Transgressão: uma análise do álbum \"Tropicalia ou Panis et Circencis\" (1968). CLIO: Revista de Pesquisa Histórica. Recife: UFPE - Universidade Federal de Pernambuco. pp. 234–254. ISSN 2525-5649"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Raul Seixas",
      "descricao": "Cantor e compositor baiano, pioneiro do rock brasileiro, chamado de Maluco Beleza."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Raul Seixas morreu poucos dias depois de lançar A Panela do Diabo, disco gravado com Marcelo Nova. Em que ano?",
    "resposta": "1989",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Raul_Seixas",
      "https://en.wikipedia.org/wiki/Raul_Seixas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Raul_Seixas",
        "situacao": "ok",
        "texto": "Raul Santos Seixas OMC (Salvador, 28 de junho de 1945 – São Paulo, 21 de agosto de 1989) foi um cantor, compositor, produtor e multi-instrumentista brasileiro, frequentemente considerado um dos pioneiros do rock brasileiro. Também foi produtor musical da CBS, durante sua estadia na cidade do Rio de Janeiro e, por vezes, é chamado de Pai do Rock Brasileiro e Maluco Beleza. Sua obra musical é compos\n[…]\n(1987) e A Panela do Diabo (1989), esse último em parceria com o também baiano e amigo Marcelo Nova. Sua obra musical tem aumentado continuamente de tamanho, na medida em que seus discos (principalmente álbuns póstumos) continuam a ser vendidos, tornando-o um símbolo do rock do país e um dos artistas mais cultuados e queridos entre os fãs nos últimos anos.\n[…]\nUm ano mais tarde, 1988, já separado de Lena, faz seu último álbum solo, A Pedra do Gênesis, que não obtém grande vendagem. A convite de Marcelo Nova, faz alguns shows em Salvador, após três anos sem pisar num palco. No ano de 1989, faz uma turnê com Marcelo Nova, agora parceiro musical, totalizando 50 apresentações pelo Brasil. Durante os shows, Raul mostra-se debilitado. Tanto que só participa de metade do show, a primeira metade é feita somente por Marcelo Nova.\n[…]\nAs 50 apresentações pelo Brasil resultaram naquele que seria o último disco lançado em vida por Raul Seixas. O disco, intitulado A Panela do Diabo, foi lançado pela Warner Music Brasil no dia 19 de agosto de 1989.\n[…]\nDe acordo com Kiko Zambianchi, quase nenhum artista compareceu ao enterro de Raul: \"Contato com Raul Seixas? Não tive, não conheci pessoalmente, mas fui ao enterro dele. Foi estranho porque quase nenhum outro artista compareceu, só eu e mais dois, talvez o Marcelo Nova, que havia gravado um disco com o Raul. Os fãs acabaram me associando a ele por causa desse lance de eu ter ido ao enterro.\n[…]\nRaul Seixas (1983)\n[…]\nA Panela do Diabo (1989)\n[…]\nRaul Seixas no TikTok"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Raul_Seixas",
        "situacao": "ok",
        "texto": "Raul Santos Seixas (28 June 1945 – 21 August 1989) was a Brazilian singer, songwriter, producer, and multi-instrumentalist, considered the \"Father of Brazilian Rock\". His musical work consists of seventeen albums released during his 26-year career. His musical style is traditionally classified as rock and baião, and he did indeed manage to unite both genres in songs like \"Let me Sing, Let me Sing\"\n[…]\n(1987), and A Panela do Diabo (1989), the latter in partnership with his friend and fellow Bahian, Marcelo Nova. His musical output has continuously grown, as his records (especially posthumous albums) continue to sell, making him a symbol of Brazilian rock and one of the most revered and beloved artists among fans in recent years.\n[…]\nThe 50 performances across Brazil resulted in what would be the last album released during Raul Seixas' lifetime. The album, titled A Panela do Diabo, was released by Warner Music Brazil on August 19, 1989.\n[…]\nThe LP released two days prior, sold 150,000 copies, earning Raul a posthumous gold record, which was given to his family and also to Marcelo Nova, thus becoming one of the most successful albums of his career. Raul's wake was held at the Anhembi Convention Palace, amidst shouts, tears, and songs from fans who participated in the event. The following day, his body was flown to Salvador and buried in the Jardim da Saudade Cemetery.\n[…]\nThe show, recorded at Fundição Progresso and released on CD and DVD, featured artists such as Toni Garrido, CPM 22, Marcelo D2, Gabriel o Pensador, Arnaldo Brandão, Raimundos, Maurício Baia, Nasi, Caetano Veloso, Pitty, and Marcelo Nova (the last three from Bahia, like Raul).\n[…]\nRaul Rock Seixas (1977)\n[…]\nRaul Seixas (1983)\n[…]\nA Panela do Diabo (1989)\n[…]\n1994 – Raul Seixas, Musicalmente falando – Thais de Moraes – Nova Sampa Editora, SP\n[…]\nRaul Seixas discography at Discogs\n[…]\nRaul Seixas at IMDb\n[…]\nRaul Seixas discography at MusicBrainz"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Concerto de bossa nova no Carnegie Hall",
      "descricao": "Concerto em Nova York que apresentou a bossa nova ao público americano, com João Gilberto, Tom Jobim e outros."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Com João Gilberto e Tom Jobim no palco, em que ano a bossa nova fez seu célebre concerto no Carnegie Hall, em Nova York?",
    "resposta": "1962",
    "distratores": [
      "1958",
      "1966",
      "1970"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bossa_nova",
      "https://pt.wikipedia.org/wiki/Bossa_nova"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bossa_nova",
        "situacao": "ok",
        "texto": "Bossa nova (Portuguese pronunciation: [ˈbɔsɐ ˈnɔvɐ] ) is a relaxed style of samba developed in the late 1950s and early 1960s in Rio de Janeiro, Brazil. It is mainly characterized by a calm syncopated rhythm with chords and fingerstyle mimicking the beat of a samba groove, as if it were a simplification and stylization on the guitar of the rhythm produced by a samba school band.\n[…]\nOn 21 November 1962, the Consulate-General of Brazil presented Bossa Nova at Carnegie Hall. In the same year, Quincy Jones released the album Big Band Bossa Nova after visiting Rio de Janeiro and hearing about the success of bossa nova.\n[…]\nIn 1964, João Gilberto, Stan Getz and Tom Jobim released the Grammy Awards-winning album Getz/Gilberto. Bossa Nova emerged as an artistic movement around Gilberto and other professional artists such as Jobim, Moraes and Baden Powell, among others, which attracted young amateur musicians from the South Zone of Rio – such as Marcos Valle, Carlos Lyra, Roberto Menescal, Ronaldo Bôscoli and Nara Leão and Bahian Astrud Gilberto.\n[…]\nBossa nova is most commonly performed on the nylon-string classical guitar, played with the fingers rather than with a pick. Its purest form could be considered unaccompanied guitar with vocals, as created, pioneered, and exemplified by João Gilberto. Even in larger, jazz-influenced ensemble arrangements, a guitar is typically present to provide the foundational rhythm.\n[…]\nAside from the guitar style, João Gilberto's other innovation was the projection of the singing voice. Prior to bossa nova, Brazilian singers employed brassy, almost operatic styles. Now, the characteristic nasal vocal production of bossa nova is a peculiar trait of the caboclo folk tradition of northeastern Brazil.\n[…]\nMedia related to Bossa nova at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bossa_nova",
        "situacao": "ok",
        "texto": "Bossa nova é o gênero musical resultante de um movimento de transformação do samba irradiado a partir da Zona Sul da cidade do Rio de Janeiro no final da década de 1950 e que, por conseguinte, passou a dar nome ao estilo de interpretação e acompanhamento rítmico dele surgido, que ficou conhecido como “batida diferente”. De acordo com o musicólogo Gilberto Mendes, a vertente era uma das “três fases\n[…]\nAs figuras centrais do movimento Bossa Nova são Antônio Carlos Jobim, Vinicius de Moraes e João Gilberto. O único show (\"O Encontro\") que reuniu este trio aconteceu em 1962, na boate carioca Au Bon Gourmet que também teve a participação do quarteto vocal Os Cariocas e do baterista Milton Banana. A estreia foi em 2 de agosto de 1962 e a temporada durou seis semanas. Neste show aconteceu a primeira audição da música \"Garota de Ipanema\".\n[…]\nEm 1962, Tom Jobim e Vinícius de Moraes compuseram \"Garota de Ipanema\", talvez a mais representativa canção da bossa nova, que se tornou a canção brasileira mais conhecida em todo o mundo, junto com \"Aquarela do Brasil\" (Ary Barroso), com mais de 169 gravações, entre as quais de Sarah Vaughan, Stan Getz, Frank Sinatra (com Tom Jobim), Ella Fitzgerald entre outros.\n[…]\nA bossa nova experimentou uma projeção internacional em escala jamais vista com outra vertente da música popular brasileira. Em 1962, o saxofonista Stan Getz em conjunto com o guitarrista Charlie Byrd lançaram o LP Jazz Samba, o que chamou a atenção do meio musical nos Estados Unidos para a bossa nova. Naquele mesmo ano, um concerto no Carnegie Hall de Nova York, que reuniu Tom Jobim e João Gilberto, entre outros, abriu de vez as portas do mundo para o estilo.\n[…]\nObtendo outro êxito positivo,como na gravação de João Gilberto de \"Wave\" (Jobim), que fez parte da trilha sonora da novela Água Viva, exibida a partir de agosto de 1980 na TV Globo.\n[…]\n«Especial Estadão - 50 Anos de Bossa»"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Chico Science",
      "descricao": "Francisco de Assis França, cantor pernambucano, líder da Nação Zumbi e do movimento manguebeat."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Aos trinta anos, Chico Science, líder da Nação Zumbi, morreu num acidente de carro. Em que ano?",
    "resposta": "1997",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chico_Science",
      "https://en.wikipedia.org/wiki/Chico_Science"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chico_Science",
        "situacao": "ok",
        "texto": "Francisco de Assis França Caldas Brandão (Olinda, 13 de março de 1966 – Recife, 2 de fevereiro de 1997), mais conhecido pelo nome artístico Chico Science, foi um cantor e compositor brasileiro, um dos principais colaboradores do movimento manguebeat, surgido em meados da década de 1990. Líder da banda Chico Science & Nação Zumbi, deixou dois discos gravados: Da Lama ao Caos e Afrociberdelia. Sua c\n[…]\nA Nação Zumbi lançou um CD duplo em 1998, depois da morte do líder Chico Science, com músicas novas e versões ao vivo remixadas por DJs.\n[…]\nChico Science morreu no final da tarde de um domingo do dia 2 de fevereiro de 1997, em um acidente de automóvel quando dirigia o carro de sua irmã na rodovia PE-01, região do Complexo de Salgadinho, divisa de Recife e Olinda. Às 18h30, ele estava sozinho ao volante na estrada quando seu Fiat Uno se chocou com um poste depois que um outro veículo teria fechado a sua passagem.\n[…]\nScience ainda foi socorrido por um policial que estava passando num ônibus e o levou ao Hospital da Restauração, mas não resistiu e chegou ao hospital morto com múltiplas lesões. O enterro aconteceu na segunda-feira do dia 3 de fevereiro de 1997, no Cemitério de Santo Amaro, localizado no Recife.\n[…]\nA família de Chico Science recebeu indenização de cerca de 10 milhões de reais da montadora Fiat, responsabilizada pela morte do cantor e compositor no acidente, devido a falhas no cinto de segurança do carro que dirigia e que poderiam ter lhe poupado a vida. Chico era divorciado e deixou uma filha batizada de Louise Taynã mais conhecida como Lula Lira. Seu túmulo é visitado por fãs e admiradores da sua obra e de seu legado.\n[…]\nMaxximum: Chico Science & Nação Zumbi (2005) — Sony BMG.\n[…]\nGrandes Sucessos: Chico Science & Nação Zumbi (2001) — Sony Music.\n[…]\n21 Grandes Sucessos: Chico Science & Nação Zumbi (2000) — Chaos.\n[…]\n«Chico Science, Um Caranguejo Elétrico». Documentário Nação Zumbi no YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chico_Science",
        "situacao": "ok",
        "texto": "Francisco de Assis França (March 13, 1966 – February 2, 1997), known as Chico Science, was a Brazilian singer and composer and one of the founders of the manguebeat cultural movement. He died in a car accident in 1997 in Recife, Pernambuco, at the age of 30.\n[…]\nHe became the lead singer and major creative driving force of the Mangue Bit band called Chico Science & Nação Zumbi (CSNZ). Influenced by such musicians as James Brown, Grandmaster Flash and Kurtis Blow, their music fused rock, funk, and hip hop with maracatu and other traditional rhythms of Brazil's Northeast. World music critics found his music \"original and distinctive of his region.\" Chico had a powerful stage presence that was compared by some to that of Jimi Hendrix.\n[…]\nChico Science & Nação Zumbi toured several times in Europe and brought massive attention to the new generation of Brazilian artists in the 1990s. With only two full albums released during his lifetime, 'Da Lama Ao Caos' ('From Mud To Chaos) and 'Afrociberdelia', his influence and vision became the foundation to a whole new generation of musicians in Brazil.\n[…]\nIn 1996, Chico Science contributed Maracatu Atômico along with Nação Zumbi to the AIDS-Benefit Album Red Hot + Rio produced by the Red Hot Organization. Nação Zumbi have continued to record and tour internationally after Chico's death.\n[…]\nChico Science died in a car accident on February 2, 1997. He lost control of his Fiat Uno and hit a side light post after another car cut him off. He was rescued alive but he did not survive his injuries. He was buried on February 3 in Cemitério de Santo Amaro located in Recife. 10 years after his death, his family was compensated by Fiat due to a failure in the seatbelt that could have saved his life.\n[…]\nMemorial Chico Science"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Deixa Falar",
      "descricao": "Agremiação carnavalesca fundada por sambistas do Estácio, no Rio de Janeiro, tida como a primeira escola de samba."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano sambistas do Estácio, como Ismael Silva, fundaram a Deixa Falar, tida como a primeira escola de samba?",
    "resposta": "1928",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Deixa_Falar"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Deixa_Falar",
        "situacao": "ok",
        "texto": "Deixa Falar foi uma agremiação carnavalesca brasileira, com sede no Rio de Janeiro. É considerada a primeira escola de samba a existir, além de ter sido a entidade criadora do termo. Ainda que a Portela, por exemplo, tenha sido fundada anteriormente, a Deixa Falar é considerada a escola de samba pioneira por ter lançado as bases do que seria uma escola de samba.\n[…]\nFundada em 12 de agosto de 1928, na Rua do Estácio, nº 27 (esquina com Rua Maia de Lacerda), na casa de Chystalino, sargento da polícia e pai do sambista Biju, a escola tinha entre seus grandes nomes o sambista Ismael Silva, que foi quem lhe batizou.\n[…]\nNas imediações da sede da escola, no Largo do Estácio, funcionava a Escola Normal, daí, segundo Ismael, veio a analogia criada por ele, pois sua agremiação formaria professores de samba. Esta versão, entretanto, é contestada por pesquisadores contemporâneos que detectaram a utilização do termo \"escola de samba\" em data anterior a 1928.[carece de fontes]?\n[…]\nTrês grupos de sambistas - ou seja, as \"escolas de samba\" - se apresentaram: o Conjunto Oswaldo Cruz, o Bloco Carnavalesco Estação Primeira, e a Deixa Falar, que acabou desclassificada por apresentar instrumentos de sopro.\n[…]\nAinda em 1929, Bide, sambista da escola, participou da gravação de \"Na Pavuna\", a primeira gravação em disco em que foram usados os instrumentos típicos das escolas de samba - sem banda ou orquestra para fazer a base - usando a marcação típica de escola de samba. Foram membros do Deixa Falar que introduziram ao samba a cuíca e que inventaram o surdo.\n[…]\nEm 1980 a escola de samba Estácio de Sá, ainda com o nome de Unidos de São Carlos desfilou no grupo principal com o enredo \"Deixa Falar\", em homenagem à escola pioneira. Em 2010 a mesma escola de samba desfilou no grupo de acesso com o enredo \"Deixa Falar, a Estácio é isso aí. Eu visto esse manto e vou por aí\"."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Gilberto Gil",
      "descricao": "Cantor e compositor baiano, um dos líderes da Tropicália, que também foi ministro da Cultura."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Gilberto Gil trocou por um tempo os palcos pela política e virou ministro da Cultura. Em que ano tomou posse?",
    "resposta": "2003",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gilberto_Gil",
      "https://en.wikipedia.org/wiki/Gilberto_Gil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gilberto_Gil",
        "situacao": "ok",
        "texto": "Gilberto Passos Gil Moreira (Salvador, 26 de junho de 1942) é um cantor, compositor, músico, político e escritor brasileiro. Com uma carreira de mais de seis décadas, é conhecido por sua relevante contribuição na música brasileira e por ser vencedor de prêmios Grammy Awards, Grammy Latino e galardoado pelo governo francês com a Ordem Nacional do Mérito (1997). Em 1999, foi nomeado \"Artista pela Pa\n[…]\nAinda em dezembro, do cantor aceitou o convite do então presidente da república, Luiz Inácio Lula da Silva, e tornou-se Ministro da Cultura. Após o natal, o artista gravou um \"ao vivo\" do Kaya N'Gan Daya, no Teatro João Caetano. Esse, seria lançado em abril de 2003, com apresentações para divulgar o mesmo. Com licença de um mês do MinC, o artista foi à Europa, para diversas apresentações com Maria Bethânia.\n[…]\nEm janeiro de 2003, quando o presidente Luiz Inácio Lula da Silva tomou posse, nomeou-o para o cargo de ministro da Cultura, nomeação que originou severas críticas de personalidades como Paulo Autran e Marco Nanini em entrevistas à Folha de S.Paulo.\n[…]\nMinistro da Cultura: 1 de janeiro de 2003 a 30 de julho de 2008.\n[…]\nEm 11 de março de 2007, o jornal estadunidense The New York Times dedicou uma matéria aos esforços de Gilberto Gil em relação a \"flexibilizar direitos autorais\". A matéria, intitulada Gilberto Gil Hears the Future, Some Rights Reserved (Gil ouve o futuro, com alguns direitos reservados) elogia o trabalho do ministro da cultura quanto à aliança formada com a Creative Commons em 2003, uma de suas primeiras ações como ministro.\n[…]\nEm abril de 2003, já na condição de ministro da Cultura, é admitido ao Grande-Oficialato da Ordem do Mérito Militar do Brasil pelo presidente Luiz Inácio Lula da Silva.\n[…]\nGilberto Gil e Juca Ferreira. \"Cultura pela Palavra - Coletânea de artigos, entrevistas e discursos dos ministros da cultura 2003-2010\". Rio de Janeiro: Versal Editores, 2013"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gilberto_Gil",
        "situacao": "ok",
        "texto": "Gilberto Passos Gil Moreira (Brazilian Portuguese: [ʒiwˈbɛʁtu ˈʒiw]; born 26 June 1942) is a Brazilian singer-songwriter and politician, known for both his musical innovation and political activism. From 2003 to 2008, he served as Brazil's Minister of Culture in the administration of President Luiz Inácio Lula da Silva. Gil's musical style incorporates an eclectic range of influences, including ro\n[…]\nWhen President Luiz Inácio Lula da Silva took office in January 2003, he chose Gil as Brazil's new Minister of Culture, the second black person to serve in the country's cabinet. The appointment was controversial among political and artistic figures and the Brazilian press; a remark Gil made about difficulties with his salary received particular criticism. Gil had not been a member of Lula's Workers' Party and had not participated in creating its cultural program.\n[…]\nShortly after becoming Minister, Gil began a partnership between Brazil and Creative Commons. In 2003, he gave a concert in the UN General Assembly in honour of the victims of the bombing of the UN headquarters in Baghdad. In that concert, he played together with Secretary General Kofi Annan.\n[…]\nAs Minister, he sponsored a program called Culture Points, which gave grants to provide music technology and education to people living in poor areas of the country's cities. Gil asserted that \"You've now got young people who are becoming designers, who are making it into media and being used more and more by television and samba schools and revitalizing degraded neighborhoods.\n[…]\n2011: Gilberto + 10\n[…]\n2014: Gilbertos Samba\n[…]\n2015: Gilbertos Samba ao vivo\n[…]\nVeloso, Caetano (2003). Tropical Truth: A Story of Music and Revolution in Brazil. New York City: Da Capo Press. ISBN 978-0-306-81281-1.\n[…]\nMusic Is Pleasure: An Interview with Gilberto Gil Archived 10 February 2017 at the Wayback Machine\n[…]\nGilberto Gil discography on Slipcue.com"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Elis & Tom",
      "descricao": "Álbum de 1974 gravado por Elis Regina e Tom Jobim, que inclui Águas de Março."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O disco Elis e Tom, que Elis Regina e Tom Jobim lançaram em 1974, foi gravado em qual cidade?",
    "resposta": "Los Angeles",
    "distratores": [
      "Nova York",
      "Rio de Janeiro",
      "Londres"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Elis_%26_Tom",
      "https://pt.wikipedia.org/wiki/Elis_%26_Tom"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elis_%26_Tom",
        "situacao": "ok",
        "texto": "Elis & Tom is a bossa nova album that was released in 1974 and recorded by Brazilian singer Elis Regina and singer-songwriter Antônio Carlos Jobim.\n[…]\nRecorded over a 16-day period at MGM Studios in Los Angeles, California, the album was an old wish of Regina, who always wanted to record a full album of Jobim's songs with him. This finally came true in 1974, when Elis was celebrating her 10th anniversary as an artist of Philips Records. The label approved the project as a gift for her.\n[…]\nThe production and recording of this album are depicted in the 2022 documentary film Elis & Tom, Só Tinha de Ser com Você, by Roberto de Oliveira and Nelson Motta.\n[…]\nThe Allmusic review by Thom Jurek awards the album 4.5 stars and states that \"This beautiful — and now legendary — recording date between iconic Brazilian vocalist Elis Regina and composer, conductor, and arranger Tom Jobim is widely regarded as one of the greatest Brazilian pop recordings.\"\n[…]\nElis Regina - vocals\n[…]\nAntônio Carlos Jobim - vocals (1, 6, 12, 14), piano (4, 6–8, 11–14), arrangement (4), guitar (6)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Elis_%26_Tom",
        "situacao": "ok",
        "texto": "Elis & Tom é um álbum colaborativo dos artistas musicais brasileiros Elis Regina e Antonio Carlos Jobim, lançado em agosto de 1974 pela gravadora Polygram. Suas gravações foram realizadas entre 22 de fevereiro e 9 de março do mesmo ano no MGM Studios de Los Angeles, Califórnia. A possibilidade de gravar um disco com Tom Jobim foi dada como presente para Elis Regina por seus dez anos de contrato co\n[…]\nEm 20 de janeiro de 1974, Elis embarcou para Los Angeles, Califórnia, com o pianista e marido César Camargo Mariano, o produtor Aloísio de Oliveira, o guitarrista e violonista Hélio Delmiro, o baixista Luizão e o baterista Paulinho Braga. Apesar do contraste entre sua carreira, que ainda estava em busca de maior crítica e projeção, e a de Tom Jobim, que já havia experimentado grande repercussão tanto no Brasil quanto no exterior, quem se mostrou inseguro no começo do projeto foi justamente ele.\n[…]\nDias depois do embarque de Elis Regina, o empresário Roberto de Oliveira também partiu para Los Angeles a fim de registrar em filme os momentos das gravações para um documentário da TV Bandeirantes (o vídeo de Elis e Tom cantando \"Águas de Março\" em estúdio faz parte deste documentário e está disponível no Youtube). Segundo ele conta, \"A Elis estava meio esquisita. Acho que ela viu um pouco do Ronaldo Bôscoli em Tom Jobim. Ela me ligou dizendo que estava de malas prontas para voltar.\n[…]\nPaulo em 1974, ou seja, antes de ele ser lançado, o crítico Walter Silva já destacava a importância do dueto entre Tom e Elis, chamando-o de especial, surpreendendo-se com a segurança que os dois transmitem nas faixas e concluindo: \"A impressão que se tem ao ouvi-las, é que foram gravadas na própria sala de visitas da gente, tal a naturalidade encontrada.\" A expectativa em torno do disco era de ser o melhor da carreira de Elis Regina até então.\n[…]\nElis Regina - vocal\n[…]\nElis & Tom - site oficial do disco pela Trama"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Legião Urbana",
      "descricao": "Banda de rock brasileira formada em 1982, liderada por Renato Russo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A Legião Urbana surgiu na mesma cena de rock que revelou Capital Inicial e Plebe Rude. Em que cidade?",
    "resposta": "Brasília",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Legi%C3%A3o_Urbana",
      "https://en.wikipedia.org/wiki/Legi%C3%A3o_Urbana"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Legi%C3%A3o_Urbana",
        "situacao": "ok",
        "texto": "Legião Urbana foi uma banda brasileira de rock formada em 1982, em Brasília, por Renato Russo (vocais) e Marcelo Bonfá (bateria), que contou com Dado Villa-Lobos (guitarra) e Renato Rocha (baixo) em sua formação mais conhecida. O grupo encerrou suas atividades onze dias após o falecimento de Renato Russo, ocorrido em 11 de outubro de 1996.\n[…]\nQuinze dias após o desmentido, Dado Villa-Lobos e Marcelo Bonfá fizeram uma participação especial em um concerto do festival Porão do Rock, em Brasília. Em 2011, Dado e Bonfá conduziram, juntamente com a Orquestra Sinfônica Brasileira, um tributo à Legião Urbana durante o Rock in Rio 4.\n[…]\nAo recuperarem permanentemente seus direitos de dizer publicamente que participaram do Legião Urbana em 27 de março de 2015, o guitarrista Dado Villa-Lobos e o baterista Marcelo Bonfá usaram o nome Legião Urbana algumas vezes. A primeira vez foi na gravação do especial \"Rock In Rio 30 Anos\", uma compilação de vários artistas do rock brasileiro interpretando clássicos de colegas de cena e de influências brasileiras.\n[…]\nA turnê Legião Urbana XXX Anos, segundo o Facebook oficial da mesma, contou com um total de pouco menos de 100 shows feitos nas 5 regiões do Brasil. O último show da turnê foi em 30 de dezembro de 2016, na cidade de Caraguatatuba. Houve outros dois shows do projeto em 2018: o primeiro no dia 19 de maio, no Campus Festival em João Pessoa, e o segundo no dia 20 de maio, na Virada Cultural de São Paulo.\n[…]\nDevido ao grande sucesso de crítica e pedidos dos fãs, a Legião Urbana XXX Anos retornou em setembro de 2018 com uma nova turnê, desta vez para apresentar o segundo e terceiro álbuns de estúdio da banda. A turnê iniciou em 6 de setembro na cidade de Miami e depois voltou ao Brasil para uma série de shows pelo país inteiro.\n[…]\n«A banda». no Dicionário Cravo Albin da Música Popular Brasileira"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Legi%C3%A3o_Urbana",
        "situacao": "ok",
        "texto": "Legião Urbana (Portuguese for Urban Legion) was a Brazilian rock band formed in 1982 in Brasília, Distrito Federal. The band primarily consisted of Renato Russo (vocals, guitar, bass, keyboards), Dado Villa-Lobos (guitar), Renato Rocha (bass), and Marcelo Bonfá (drums, keyboards). Rocha left the band in 1989, and the band continued as a trio until their disbandment, with Russo becoming the band's \n[…]\nRenato Russo (born Renato Manfredini, Jr.) founded Legião Urbana in 1982 in Brasília, after leaving his previous band Aborto Elétrico (\"Electric Abortion\"). Aborto Elétrico broke up due to repeated disagreements between Russo and brothers Flávio and Fê Lemos, his bandmates. After Aborto Elétrico split and Russo created Legião Urbana, the two brothers would also go on to found Capital Inicial.\n[…]\nThe band released O Descobrimento do Brasil (\"The Discovery of Brazil\", alluding both to Cabral's discovery and to a new look at Brazil and its problems) in November 1993. \"Giz\" (\"Chalk\"), \"Perfeição\" (\"Perfection\"), \"Vinte e Nove\" (\"Twenty Nine\"), \"Vamos Fazer um Filme\" (\"Let's Make A Movie\") and \"La Nuova Gioventù\" (Italian for \"The New Youth\") are the main hits of the CD, though the album as a whole received a rather chilly critical reception.\n[…]\nUma Outra Estação was released in June 1997 and is the last album with previously unreleased songs, produced and finished by Villa-Lobos. In October 1999 EMI released a Live album, Acústico MTV, a concert which was presented on MTV Brasil in 1992. Another two albums, As Quatro Estações Ao Vivo and Como É Que Se Diz Eu Te Amo, are best-of compilations that achieved relative success among the fans and people whose interest in Legião Urbana grew after the death of Russo.\n[…]\n(1985) Legião Urbana\n[…]\n(1993) O Descobrimento do Brasil\n[…]\n(1999) Acústico MTV: Legião Urbana\n[…]\nLegião Urbana, Dicionário Cravo Albin da Música Popular Brasileira"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Manguebeat",
      "descricao": "Movimento musical dos anos 1990 que misturou maracatu, rock, hip hop e funk, liderado por Chico Science."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O manguebeat, que misturou maracatu com rock e hip hop nos anos noventa, nasceu em qual capital brasileira?",
    "resposta": "Recife",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manguebeat",
      "https://en.wikipedia.org/wiki/Manguebeat"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manguebeat",
        "situacao": "ok",
        "texto": "Manguebeat (também grafado como manguebit ou mangue beat) é um movimento de contracultura brasileiro. Surgiu a partir de 1991, na cidade de Recife, e se destaca pela combinação original de diversos gêneros musicais, unindo ritmos regionais, como o maracatu, o rock, o hip hop, o funk e a música eletrônica.\n[…]\nO termo “manguebeat” vem da junção da palavra \"mangue\", um ecossistema típico da costa do Nordeste brasileiro, com a palavra \"beat\", do inglês, que significa batida.\n[…]\nA base do Manguebeat começou no final da ditadura militar no Brasil, no início da década de 1980. O relaxamento da censura aumentou a disponibilidade de música importada, especialmente dos Estados Unidos e do Reino Unido, levando a um aumento do rock brasileiro. No Recife, universitários, entre eles alguns dos fundadores do movimento, DJ Renato L.\n[…]\nPor outro lado, o rótulo \"manguebeat\" passou a ser evitado por músicos recifenses, uma vez que várias bandas e projetos musicais de Recife, como Maquinado e 3namassa, estariam sendo erroneamente associadas ao movimento. O termo muitas vezes é utilizado para referir-se a um gênero musical caracterizado pela mescla de música pop com música regional pernambucana.\n[…]\nO mangue beat, movimento musical e estético que nasceu em Pernambuco nos anos 1990, mudou a visibilidade das periferias e das manifestações culturais da Região Metropolitana do Recife e colocou o estado na rota do mercado musical mundial, após o lançamento de bandas como Chico Science e Nação Zumbi e Mundo Livre S.A.\n[…]\nO formato do filme Manguebit é convencional, mas se revela satisfatório porque a multiplicidade de opiniões e imagens realça o caráter coletivo do movimento gerado por jovens insatisfeitos com a falta de perspectiva social em um Recife enlameado e esfacelado por bolsões de pobreza e injustiça social."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Manguebeat",
        "situacao": "ok",
        "texto": "Manguebeat, alternatively known as mangue beat or mangue bit, is a social and artistic movement with origins in northeastern Brazilian city Recife, Pernambuco in the early 1900s, in reaction to the economic and cultural stagnation of the capital.\n[…]\nThe basis for Mangue started towards the end of Brazil's military dictatorship at the beginning of the 1980s. The relaxation of censorship increased the availability of imported music, especially from the United States and the United Kingdom, leading to an increase of Brazilian-made rock music. In Recife, university students, including some of the founding characters of the movement, DJ Renato L.\n[…]\nIn the early 90s, Paulo Andre Pires, who would become Nação Zumbi's impresario, began producing shows in Recife and invited both local and international bands to perform.\n[…]\nHis influences came from music he heard while attending baile funk parties as a youth and included early rap, hip-hop, rock and soul such as, James Brown, Curtis Mayfield, Funkadelic, Sugar Hill Gang, Kurtis Blow, and Grand Master Flash. Having grown up being surrounded by regional folk music he also was heavily influenced by music of Recife such as maracatu, ciranda, embolada, and côco.\n[…]\nAs a result of the manifesto being published, in 1992 MTV visited Recife to interview both Chico Science and Fred 04. The resulting footage played on MTV in Brazil, in January 1993, causing Mangue to gain traction in the south of Brazil. That same year, Paulo Andre Pires launched the first Abril pro Rock festival in Recife featuring CSNZ and Mundo Livre S/A as well as Nacão Pernambuco, a maracatu band that was gaining attention and growing quickly in popularity."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Luiz Gonzaga",
      "descricao": "Sanfoneiro, cantor e compositor pernambucano, chamado de Rei do Baião."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que cidade do sertão pernambucano nasceu Luiz Gonzaga, o Rei do Baião?",
    "resposta": "Exu",
    "distratores": [
      "Caruaru",
      "Garanhuns",
      "Serra Talhada"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Luiz_Gonzaga",
      "https://en.wikipedia.org/wiki/Luiz_Gonzaga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Luiz_Gonzaga",
        "situacao": "ok",
        "texto": "Luiz Gonzaga do Nascimento (Exu, 13 de dezembro de 1912 – Recife, 2 de agosto de 1989) foi um cantor, compositor e multi-instrumentista brasileiro. Também conhecido como o Rei do Baião, foi considerado uma das mais completas, importantes e criativas figuras da música popular brasileira.\n[…]\nLuiz Gonzaga ganhou notoriedade com as antológicas canções \"Asa Branca\" (1947), \"Juazeiro\" (1948) e \"Baião de Dois\" (1950).\n[…]\nEm 2003, o então governador de Pernambuco, Jarbas Vasconcelos, sancionou lei que denomina “Rodovia Luiz Gonzaga” o trecho da BR-232 que liga o Recife a Caruaru. O trecho foi estadualizado e recebeu, à época, a importante obra de duplicação.[carece de fontes]?\n[…]\nA Usina Hidrelétrica Luiz Gonzaga, localizada no município de Petrolândia, no sertão pernambucano, foi assim denominada em homenagem ao cantor.\n[…]\nEm 2012, Luiz Gonzaga foi tema do carnaval da GRES Unidos da Tijuca, no Rio de Janeiro, com o enredo \"O Dia em Que Toda a Realeza Desembarcou na Avenida para Coroar o Rei Luiz do Sertão\", fazendo com que a escola ganhasse o carnaval carioca daquele ano.\n[…]\nEm homenagem ao centenário do artista  na cidade de Exu, no sertão pernambucano, Gilberto Gil e Dominguinhos entoaram o \"Asa branca\"  com Daniel (neto de Gonzaga e filho de Gonzaguinha) e Joquinha (sobrinho do Rei do Baião) encontro de gerações. No Plenário da Câmara, o Rei do Baião foi celebrado em sessão solene.\n[…]\nAguiar, Ronaldo Conde (2013). «Jackson do Pandeiro e Luiz Gonzaga - O Rei do Ritmo e o O  Rei do Baião». Os Reis da Voz. Rio de Janeiro: Casa da Palavra. ISBN 978-85-773-4398-0\n[…]\nGonzagão Online — A Vida, História e a Obra de Luiz Gonzaga, O Rei do Baião e Pernambucano do Século\n[…]\nLuiz \"Lua\" Gonzaga, BR\n[…]\nAlbin, Cravo, «Luiz Gonzaga», Dicionário de MPB (biografia), BR\n[…]\nMemorial Luiz Gonzaga - Prefeitura de Recife"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Luiz_Gonzaga",
        "situacao": "ok",
        "texto": "Luiz Gonzaga do Nascimento (standard orthography 'Luís'; Portuguese pronunciation: [luˈiz ɡõˈzaɡɐ]; December 13, 1912 – August 2, 1989) was a Brazilian singer, songwriter, musician and poet and one of the most influential figures of Brazilian popular music in the twentieth century. He has been credited with having presented the rich universe of Northeastern musical genres to all of Brazil, having \n[…]\nGonzaga's son, Luiz Gonzaga do Nascimento Jr, known as Gonzaguinha (1945–1991), was also a noted Brazilian singer and composer.\n[…]\nAfter noticing that the north-eastern people living in Rio de Janeiro missed the music from their home states, he started to integrate traditional (forró) music rhythms and instruments in his work. At Ary Barroso's talent show, Luiz Gonzaga played the Xamego \"Vira e Mexe\" and was acclaimed by the audience and by the host, who gave him the highest score. After discovering this niche in the market, Gonzaga became a regular at radio shows and started making records.\n[…]\nSome of his greatest hits are \"Vozes da Seca\" (\"Voices From Drought\"), \"Algodão\" (\"Cotton\"), \"A Dança da Moda\" (\"The Dance in Fashion\"), \"ABC do Sertão\" (\"The ABC of Sertão\"), \"Derramaro o Gai\" (\"They Spilt the Gas\"), \"A Letra I\" (\"The 'i' letter\"), \"Imbalança\" (\"Shake It\"), \"A Volta da Asa-Branca\" (\"The Return of The Picazuro Pigeon\"), \"Cintura Fina\" (\"Slender Waist\"), \"O Xote das Meninas\" (\"The Girls' Schottische\", written with Zé Dantas, and \"Juazeiro\", \"Paraíba\", \"Mangaratiba\", \"Baião-de-Dois\", \"No Meu Pé de Serra\" (\"There in My Homeland\"), \"Assum Preto\" (\"Blue-back Grassquit\"), \"Légua Tirana\" (\"Tyrannical league\"), \"Qui Nem Jiló\" (\"Like Solanum gilo\", written with Humberto Teixeira.\n[…]\nGonzaga died of natural causes around 8:00 BRT on August 2, 1989, at the age of 76.\n[…]\nGonzagao Online (Portuguese)\n[…]\nRei do Baião (Portuguese)"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Tom Jobim",
      "descricao": "Antônio Carlos Jobim, compositor, pianista e maestro carioca, um dos criadores da bossa nova."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em dezembro de 1994, Tom Jobim morreu de problemas cardíacos longe do Rio. Em qual cidade estrangeira?",
    "resposta": "Nova York",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tom_Jobim",
      "https://en.wikipedia.org/wiki/Ant%C3%B4nio_Carlos_Jobim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tom_Jobim",
        "situacao": "ok",
        "texto": "Antônio Carlos Brasileiro de Almeida \"Tom\" Jobim (Rio de Janeiro, 25 de janeiro de 1927 – Nova Iorque, 8 de dezembro de 1994) foi um compositor, pianista, violonista, arranjador e cantor brasileiro. Considerado um dos grandes expoentes da música brasileira, Jobim internacionalizou a bossa nova e, com a ajuda de importantes artistas estadunidenses, fundiu-a com o jazz nos anos 1960 para criar uma n\n[…]\nJobim e Elis Regina se conheceram em 1974 na cidade de Los Angeles, quando Regina tinha apenas 29 anos e ainda era uma cara nova na indústria musical brasileira. Regina era uma força a ser reconhecida, sendo referida como “furacão” por aqueles que trabalharam com ela e ao seu redor. Os dois artistas se uniram para criar o álbum “Elis & Tom” que inesperadamente se tornaria tremendamente popular nos Estados Unidos, assim como em todo o mundo.\n[…]\nNo início de 1994, após terminar seu álbum Antonio Brasileiro, Jobim queixou-se ao seu médico, Roberto Hugo Costa Lima, de problemas urinários. Ele foi submetido a uma operação no Hospital Mount Sinai, em Nova York, em 2 de dezembro de 1994. Em 8 de dezembro, enquanto se recuperava de uma cirurgia, teve uma parada cardíaca causada por uma embolia pulmonar, e duas horas depois, outra parada cardíaca, da qual veio a falecer. Ele deixou seus filhos e netos.\n[…]\nOs colaboradores e intérpretes brasileiros da música de Jobim incluem Vinicius de Moraes, João Gilberto (muitas vezes creditado como co-criador ou criador da bossa nova), Chico Buarque, Edu Lobo, Gal Costa, Elis Regina, Sérgio Mendes, Astrud Gilberto e Flora Purim. Arranjos significativos das composições de Jobim foram escritos por Eumir Deodato, Nelson Riddle e, principalmente, pelo maestro e compositor Claus Ogerman.\n[…]\nEscrita por Elliott Smith, a nona faixa do álbum de 1994 da banda de rock alternativo Heatmiser, Cop and Speeder, é intitulada \"Antonio Carlos Jobim\".\n[…]\nTom Jobim no IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ant%C3%B4nio_Carlos_Jobim",
        "situacao": "ok",
        "texto": "Antônio Carlos Brasileiro de Almeida Jobim (25 January 1927 – 8 December 1994), also known as Tom Jobim (Portuguese pronunciation: [tõ ʒoˈbĩ] ), was a Brazilian composer, pianist, guitarist, songwriter, arranger and singer. Jobim is considered a great exponent of Brazilian music and one of the fathers of bossa nova for having merged samba with cool jazz in the 1960s as a pioneer of the genre.\n[…]\nIn early 1994, after finishing his album Antonio Brasileiro, Jobim complained to his doctor, Roberto Hugo Costa Lima, of urinary problems. Jobim was diagnosed with bladder cancer and underwent treatment, although he postponed surgery. He underwent an operation at Mount Sinai Hospital in New York City on 2 December 1994. At 7:00 EST on 8 December, while recovering from surgery, he had a cardiac arrest caused by a pulmonary embolism, and two hours later, another cardiac arrest, from which he died.\n[…]\nThe Brazilian collaborators and interpreters of Jobim's music include Vinicius de Moraes, João Gilberto (often credited as a co-creator or creator of bossa nova), Chico Buarque, Edu Lobo, Gal Costa, Elis Regina, Sérgio Mendes, Astrud Gilberto and Flora Purim. Buarque said in 1999 he has a drawer full of tapes gifted to him by Jobim. Significant arrangements of Jobim's compositions were written by Eumir Deodato, Nelson Riddle, and especially the conductor/composer Claus Ogerman.\n[…]\nWritten by Elliott Smith, the ninth track on Oregon alternative rock band Heatmiser's 1994 album Cop and Speeder is entitled \"Antonio Carlos Jobim\".\n[…]\nAntônio Carlos Jobim – remembrance site\n[…]\nAntônio Carlos Jobim discography at Discogs\n[…]\nAntônio Carlos Jobim at IMDb\n[…]\nAntônio Carlos Jobim Archived 15 January 2020 at the Wayback Machine at The Brazilian Sound\n[…]\nAntônio Carlos Jobim – \"Clube do Tom\"\n[…]\nAntônio Carlos Jobim – behind the scenes of the legendary bossa nova concert at Carnegie Hall in 1962 (in Portuguese)"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Noel Rosa",
      "descricao": "Sambista e compositor carioca dos anos 1930, autor de Conversa de Botequim e Feitiço da Vila."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Que bairro da zona norte do Rio, com partituras de sambas desenhadas nas calçadas, foi o berço do sambista Noel Rosa?",
    "resposta": "Vila Isabel",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Noel_Rosa",
      "https://en.wikipedia.org/wiki/Noel_Rosa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Noel_Rosa",
        "situacao": "ok",
        "texto": "Noel de Medeiros Rosa (Rio de Janeiro, 11 de dezembro de 1910 – Rio de Janeiro, 4 de maio de 1937) foi um sambista, cantor, compositor, bandolinista e violonista brasileiro, considerado um dos mais importantes artistas da música no Brasil.\n[…]\nNascido na rua Teodoro da Silva n.º 130, no bairro carioca de Vila Isabel, era de família de classe média. Estudou no tradicional Colégio de São Bento.[carece de fontes]?\n[…]\nOs dois compositores atacaram-se mutuamente em sambas agressivos e bem-humorados, que renderam bons frutos para a música brasileira, incluindo clássicos de Noel como Feitiço da Vila e Palpite Infeliz.\n[…]\nFaleceu repentinamente em sua casa, no bairro de Vila Isabel, no ano de 1937, aos 26 anos. Deixou sua esposa viúva e desesperada. Lindaura, sua mulher, e Dona Martha, sua mãe, cuidaram de Noel até o fim. Seu corpo encontra-se sepultado no Cemitério do Caju, no Rio de Janeiro.\n[…]\nNoel Rosa já foi retratado como personagem no cinema e na televisão, interpretado por Chico Buarque no filme O Mandarim (1995) e por Rafael Raposo no filme Noel - Poeta da Vila (2006).\n[…]\nO próprio Ricardo Van Steen, realizador de Noel - Poeta da Vila, dirigiu um curta-metragem, Com Que Roupa? (1997), com Cacá Carvalho no papel do compositor.\n[…]\nEm 2010, cem anos depois do seu nascimento, o GRES Unidos de Vila Isabel, escola de samba sediada na Zona Norte do Rio de Janeiro, no bairro de Vila Isabel, levou Noel Rosa como seu enredo do carnaval de 2010. Fez-se um desfile em sua homenagem, com o samba intitulado Noel: A Presença do \"Poeta da Vila\", de autoria do compositor Martinho da Vila. O desfile realizado pela Unidos de Vila Isabel ocorreu na segunda-feira de carnaval, dia 15 de fevereiro de 2010.\n[…]\nNoel Rosa compôs 259 canções:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Noel_Rosa",
        "situacao": "ok",
        "texto": "Noel de Medeiros Rosa (December 11, 1910 – May 4, 1937) was a Brazilian singer-songwriter. One of the greatest names in Brazilian popular music, Noel gave a new twist to samba, combining its Afro-Brazilian roots with a more urban, witty language and making it a vehicle for ironic social commentary.\n[…]\nRosa was born in Rio de Janeiro into a middle-class family of the Vila Isabel neighbourhood. An accident with a forceps at his birth caused a disfigured chin. He learned to play the mandolin while still a teenager, and soon moved on to the guitar. Although Noel started medicine studies, he gave most of his attention to music and would spend whole nights in bars drinking and playing with other samba musicians.\n[…]\nSoon he started composing sambas, and he had his breakthrough with \"Com que roupa?\", one of the biggest hits of 1931 and the first in a string of memorable compositions. Noel was a good friend of Cartola, who took care of him several times at his house on the Mangueira slum after some nights of heavy drinking. In the early 1930s Noel Rosa started to show signs of tuberculosis. He would occasionally leave for treatment in mountain resorts, but always ended up coming back to Rio and the nightlife.\n[…]\nA tunnel in the Vila Isabel neighborhood in Rio de Janeiro is named in his honor.\n[…]\nNoel Rosa wrote around 250 compositions, including:\n[…]\n\"Feitiço da Vila\" (with Vadico, 1936)\n[…]\n\"Mama de farinha\" (with Hélio Rosa, 1943)\n[…]\nNo Tempo de Noel Rosa. (Almirante)\n[…]\nNoel Rosa: Uma Biografia. (João Máximo e Carlos Didier)\n[…]\nNoel Rosa: Língua e Estilo (Castellar de Carvalho e Antonio Martins de Araujo)\n[…]\nSongbook Noel Rosa 1, 2 e 3 (Almir Chediak)\n[…]\nNoel Rosa: Para Ler e Ouvir (Eduardo Alcantara de Vasconcellos)\n[…]\nO Jovem Noel Rosa (Guca Domenico)\n[…]\nA Geração do Ouro Solar, Noel Rosa, Alquimia e Tarot (Lui Morais)"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Banda Calypso",
      "descricao": "Banda de brega pop paraense formada em 1999 por Joelma e Chimbinha."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Banda Calypso, de Joelma e Chimbinha, surgiu em 1999 em qual capital da região Norte?",
    "resposta": "Belém",
    "distratores": [
      "Manaus",
      "São Luís",
      "Macapá"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Banda_Calypso"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Banda_Calypso",
        "situacao": "ok",
        "texto": "Banda Calypso foi uma banda brasileira de calypso, com influências de ritmos regionais do estado de origem. O conjunto foi formado em Belém no estado do Pará, em 1999, pela cantora e dançarina Joelma Mendes e pelo guitarrista e produtor musical, Cledivan Almeida Farias, mais conhecido como Chimbinha.\n[…]\nCledivan Almeida Farias, mais conhecido como Chimbinha, nasceu em Oeiras do Pará, no Pará. Começou a tocar guitarra ainda aos 12 anos, sendo influenciado por artistas do estado. Junto com eles, reinventou o ritmo calypso. Aos 18 anos já era o produtor musical mais conhecido de Belém. Joelma da Silva Mendes nasceu em Almeirim, no mesmo estado.\n[…]\nEmbora desejasse ingressar na profissão de advogada, por ser um sonho de infância, Joelma começou a cantar por intermédio de um colega de escola que a incitava a cantar com ele em pequenos bares e festivais locais. Aos 19 anos, tornou-se conhecida na região depois de se apresentar na Feira de Arte e Cultura de Almeirim (FEARCA). Por esta época, ela foi descoberta por uma proprietária da Banda Fazendo Arte que a convidou para ir à Belém realizar um teste que pudesse integrá-la aos vocais do grupo.\n[…]\nÀ vista disso, decidiram fundar, juntos, uma banda musical, batizada de Banda Calypso. O primeiro show do grupo ocorreu em junho do mesmo ano, em uma pequena casa noturna em Belém, conhecida como Xodó.\n[…]\nEm 3 de setembro de 2006, a banda se apresentou para um público de 1,5 milhão de pessoas em Nova Iorque, durante o festival Brazilian Day. Uma semana depois, lançaram seu quarto álbum ao vivo e terceiro de vídeo, Banda Calypso pelo Brasil, gravado em cinco capitais brasileiras, sendo elas Brasília, Rio de Janeiro, Recife, Salvador e Belém.\n[…]\nVolume 1 (1999)\n[…]\n«Banda Calypso Oficial» no YouTube"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Gilberto Gil",
      "descricao": "Cantor e compositor baiano, um dos líderes da Tropicália, que também foi ministro da Cultura."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Presos pela ditadura no fim de 1968, Gilberto Gil e Caetano Veloso passaram o exílio em qual cidade europeia?",
    "resposta": "Londres",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gilberto_Gil",
      "https://pt.wikipedia.org/wiki/Gilberto_Gil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gilberto_Gil",
        "situacao": "ok",
        "texto": "Gilberto Passos Gil Moreira (Brazilian Portuguese: [ʒiwˈbɛʁtu ˈʒiw]; born 26 June 1942) is a Brazilian singer-songwriter and politician, known for both his musical innovation and political activism. From 2003 to 2008, he served as Brazil's Minister of Culture in the administration of President Luiz Inácio Lula da Silva. Gil's musical style incorporates an eclectic range of influences, including ro\n[…]\nIn October 1968, Gilberto Gil and Caetano Veloso performed at Sucata club in Rio de Janeiro, with Hélio Oiticica's poem-flag Seja marginal, seja herói displayed on stage. The journalist Randal Juliano of RecordTV propagated a story that Caetano and Gil had sung the Brazilian National Anthem in subversive parody. The two musicians were arrested without trial 27 December 1968—shortly after the military state had passed on 13 December Institutional Act Number Five, which suspended habeas corpus.\n[…]\nAs one of the pioneers of tropicália, influences from genres such as rock and punk have been pervasive in his recordings, as they have been in those of other stars of the period, including Caetano Veloso and Tom Zé. Gil's interest in the blues-based music of rock pioneer Jimi Hendrix, in particular, has been described by Veloso as having \"extremely important consequences for Brazilian music\".\n[…]\n1968: Gilberto Gil (with Os Mutantes)\n[…]\n1968: Tropicália: ou Panis et Circencis (with Caetano Veloso, Gal Costa, Os Mutantes)\n[…]\n1976: Doces Bárbaros (with Gal Costa, Caetano Veloso and Maria Bethânia)\n[…]\n1981: Brasil (João Gilberto album featuring Caetano Veloso, Gilberto Gil and Maria Bethânia)\n[…]\n1994: Tropicália 2 (with Caetano Veloso)\n[…]\n2012: Especial Ivete Caetano Gilberto ao vivo\n[…]\n2014: Gilbertos Samba\n[…]\n2016: Dois Amigos (with Caetano Veloso)\n[…]\nVeloso, Caetano (2003). Tropical Truth: A Story of Music and Revolution in Brazil. New York City: Da Capo Press. ISBN 978-0-306-81281-1.\n[…]\nGilberto Gil discography on Slipcue.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gilberto_Gil",
        "situacao": "ok",
        "texto": "Gilberto Passos Gil Moreira (Salvador, 26 de junho de 1942) é um cantor, compositor, músico, político e escritor brasileiro. Com uma carreira de mais de seis décadas, é conhecido por sua relevante contribuição na música brasileira e por ser vencedor de prêmios Grammy Awards, Grammy Latino e galardoado pelo governo francês com a Ordem Nacional do Mérito (1997). Em 1999, foi nomeado \"Artista pela Pa\n[…]\nPosteriormente, partiram, Gil e Caetano, com suas respectivas esposas para o exílio, passaram por Lisboa e Paris, mas, fixaram-se em Chelsea, Londres. Gil disse que Guilherme, então empresário da dupla, \"foi à Europa antes de nós, para verificar onde iríamos ficar. Lisboa e Madrid estavam fora de questão, pois, Portugal e Espanha estavam sob uma ditadura pesada. Paris tinha um ambiente musical entediante. Londres, era o melhor lugar para ser músico\".\n[…]\nAinda em novembro, ao lado de Caetano, Gal Costa, Chico Buarque, Elza Soares e Virgínia Rodrigues, o artista realizou uma apresentação conhecida como \"Since Samba Has Been Samba\", no Royal Albert Hall, em Londres. Em 27 de fevereiro de 2000, a Conspiração Filmes lança o documentário Filhos de Gandhy, gravado parcialmente na Índia, e apresentado pela primeira vez no canal GNT. O documento foi dirigido por Lula Buarque de Hollanda, sob condução de Gil.\n[…]\nEm novembro de 1968, em meio à efervescência do movimento Tropicalista, fundado por Gil, ele passou a namorar Sandra Barreira Gadelha (\"Drão\"), ex-bancária em Salvador. Em dezembro ele e Caetano Veloso foram presos, devido ao Ato Institucional n.º 5, que cerceou a liberdade artística e dos cidadãos. Ali, Gil adotou uma dieta macrobiótica, e estudou o misticismo oriental. Foi solto em fevereiro, ficando até julho em regime de confinamento, até saírem do país.\n[…]\nGilberto Gil no TikTok\n[…]\nGilberto Gil no IMDb\n[…]\nGilberto Gilno Spotify\n[…]\nCanal de Gilberto Gil no YouTube\n[…]\nGilberto Gil na ABL"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "João Gilberto",
      "descricao": "Cantor e violonista baiano, considerado o pai da bossa nova."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "João Gilberto, o pai da bossa nova, nasceu na mesma cidade baiana, à beira do São Francisco, que Ivete Sangalo. Qual?",
    "resposta": "Juazeiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Gilberto",
      "https://pt.wikipedia.org/wiki/Ivete_Sangalo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Gilberto",
        "situacao": "ok",
        "texto": "João Gilberto Prado Pereira de Oliveira, mais conhecido como João Gilberto (Juazeiro, 10 de junho de 1931 – Rio de Janeiro, 6 de julho de 2019), foi um cantor, violonista e compositor brasileiro. Considerado um artista genial por musicólogos e jornalistas especializados, revolucionou a música brasileira ao criar uma nova batida de violão para tocar samba: a \"Bossa Nova\". O seu jeito suave de canta\n[…]\nFilho de Joviniano Domingos de Oliveira, um próspero comerciante, e Martinha do Prado Pereira de Oliveira, João, conhecido na época como Joãozinho da Patu, nasceu em Juazeiro, sertão da Bahia, nas margens do rio São Francisco. Lá, viveu até 1942, quando passou a estudar em Aracaju, Sergipe, sempre tocando na banda escolar.\n[…]\nNo Brasil, foi lançado o filme Seara Vermelha, que incluía, na trilha sonora, uma composição de João em parceria com Jorge Amado, composta nos anos 1950, de nome Lamento da Morte de Dalva na Beira do Rio São Francisco, em Juazeiro. Quando estavam compondo, João cantou infinitamente a melodia na casa de Jorge Amado. A mulher de Jorge, Zélia Gattai, diz que, de tanto ouvir, o sofrê do casal aprendeu a melodia e começou a cantar. João acabou fazendo um dueto com o pássaro.\n[…]\nEm 1980, João gravou um especial para a TV Globo chamado João Gilberto Prado Pereira de Oliveira, que virou disco mais tarde. Gravado ao vivo no Teatro Fênix, do Rio de Janeiro, para a Série Grandes Nomes, batizado sempre com o nome completo do artista. No repertório apresentado, de Ary Barroso e George Gershwin a clássicos da bossa nova, com a surpresa da participação especial de Rita Lee em Jou Jou Balangandãs, de Lamartine Babo.\n[…]\nJoão Gilberto Prado Pereira de Oliveira (WEA, 1980) LP\n[…]\nJoão Gilberto Prado Pereira de Oliveira (TV Globo, 1980)\n[…]\nEspecial João Gilberto (TV Cultura, 1994)\n[…]\nMAMMI, Lorenzo. João Gilberto e o projeto utópico da bossa nova. São Paulo: Novos Estudos, n° 72, 1992. pp. 63 – 70."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ivete_Sangalo",
        "situacao": "ok",
        "texto": "Ivete Maria Dias de Sangalo (Juazeiro, 27 de maio de 1972) é uma cantora, compositora, empresária, atriz e apresentadora de televisão brasileira. É uma das maiores e mais importantes figuras da música brasileira, tendo seu sucesso consolidado na história da indústria musical brasileira e sendo conhecida pelo apelido de \"Rainha do Brasil\" por seu impacto e influência na cultura nacional.\n[…]\nIvete Maria Dias de Sangalo é filha de mãe pernambucana, a dona de casa Maria Ivete Dias de Sangalo, e pai baiano, o joalheiro Alsus Almeida de Sangalo, filho de um imigrante espanhol com uma brasileira. Sangalo nasceu na cidade de Juazeiro, interior da Bahia, lugar onde passou parte de sua infância. É filha caçula de outros cinco irmãos: Mônica, Cynthia, Marcos (já falecido), Jesus (já falecido) e Ricardo.\n[…]\nEm seguida, realizou alguns shows em cidades do interior da Bahia, chegando a apresentar-se também em Pernambuco. Nesta época, na sua cidade natal, Sangalo e seu sobrinho Erlemilson Miguel receberam um convite para abrir o show de Geraldo Azevedo no Teatro do Centro de Cultura João Gilberto. O produtor Jonga Cunha percebeu seu potencial e decidiu montar um show em que ela dava ênfase ao som funk.\n[…]\nEm fevereiro de 2010, abriu os shows brasileiros da turnê I Am... Tour, da cantora estadunidense Beyoncé, que passou pelas cidades de São Paulo, Rio de Janeiro, Florianópolis e Salvador. No mesmo ano, Sangalo começa a trabalhar no projeto de seu terceiro álbum ao vivo; ela confirmou, por meio de sua conta oficial no Twitter, que a gravação iria ocorrer no Madison Square Garden, em Nova Iorque, Estados Unidos, em setembro de 2010.\n[…]\nNo mês seguinte, Sangalo estreou a turnê Tudo Colorido, promovendo Onda Boa com Ivete; o show da turnê realizado em Juazeiro, cidade natal da cantora, no seu aniversário de 50 anos completados em 27 de maio, foi transmitido como um especial pela Rede Globo."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Secos & Molhados",
      "descricao": "Grupo de rock brasileiro dos anos 1970 que revelou Ney Matogrosso, famoso pelos rostos pintados."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O grupo de rostos pintados Secos e Molhados tirou o nome da placa de que tipo de comércio?",
    "resposta": "Armazém",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Secos_%26_Molhados"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Secos_%26_Molhados",
        "situacao": "ok",
        "texto": "Secos & Molhados foi uma banda de rock brasileira da década de 1970, tendo como formação clássica João Ricardo (vocais, violão e harmônica), Ney Matogrosso (vocais) e Gérson Conrad (vocais e violão). O som da banda consiste em uma mistura de rock e balé com ritmos brasileiros, como MPB e o samba. João havia criado o nome da banda sozinho em 1970, até juntar-se com as diferentes formações nos anos \n[…]\nO nome foi criado por João Ricardo, quando se encontrava  nas proximidades de Ubatuba em um dia chuvoso e viu escrito numa placa de armazém balançando \"Secos e Molhados\". Isto lhe chamou a atenção, antes mesmo da banda, surgiu a ideia do nome, assim como outros conceitos foram se formando. Passaram uma grande temporada em Crixás.\n[…]\nJoão Ricardo adquiriu os direitos autorais sob o nome Secos & Molhados, após algumas brigas na justiça, e saiu à busca de novos músicos para que a banda tivesse novas formações.\n[…]\nA primeira formação após o fim do grupo em 1974 surgiu em maio de 1978, João Ricardo lançou o terceiro disco dos Secos & Molhados com Lili Rodrigues, Wander Taffo, Gel Fernandes e João Ascensão. O terceiro disco foi lançado, e mais um sucesso do grupo – o que seria o último de reconhecimento nacional, e único fora da formação original – \"Que Fim Levaram Todas as Flores?\", uma das canções mais executadas no Brasil naquele ano, o que trouxe o novo grupo de João Ricardo às apresentações televisivas.\n[…]\nNo mês de agosto de 1980, junto com os irmãos Lempé – César e Roberto – o Secos e Molhados lançaram o quarto disco, que não teve sucesso comercial. A quinta formação do grupo nasceu no dia 30 de junho de 1987, com o enigmático Totô Braxil (à vezes grafado Tôto), em um concerto no Palace, em São Paulo. Em maio de 1988, saiu o álbum A Volta do Gato Preto, que foi o último da década. Sozinho, em 1999, João Ricardo lançou Teatro? mostrando a marca do criador dos Secos e Molhados."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Engenheiros do Hawaii",
      "descricao": "Banda de rock gaúcha formada em 1985 em Porto Alegre, liderada por Humberto Gessinger."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Engenheiros do Hawaii zombava de estudantes de engenharia da universidade que se vestiam como o quê?",
    "resposta": "Surfistas",
    "distratores": [
      "Turistas",
      "Marinheiros",
      "Roqueiros"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Engenheiros_do_Hawaii",
      "https://en.wikipedia.org/wiki/Engenheiros_do_Hawaii"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Engenheiros_do_Hawaii",
        "situacao": "ok",
        "texto": "Engenheiros do Hawaii foi uma banda brasileira de rock formada no início de 1985 na cidade de Porto Alegre. Com a exceção de um pequeno hiato no final de 1996 e início de 1997, o grupo esteve na ativa até abril de 2008, quando foi anunciada uma \"pausa por tempo indeterminado\". Em todo esse período, foi liderado pelo multi-instrumentista Humberto Gessinger, único membro a permanecer em todas as for\n[…]\nEntretanto, a maioria da banda preferiu o nome Engenheiros do Hawaii, tirado de uma das canções que eles apresentariam e que tirava sarro dos estudantes de engenharia civil - com quem tinham uma certa rivalidade - e que visitavam o bar frequentado pelo pessoal da Arquitetura atrás das meninas, muito mais numerosas neste curso do que no outro naquela época.\n[…]\nO lançamento do disco também mostrou quais eram as bandas em quem a gravadora mais apostava: Engenheiros teve suas músicas escolhidas como a primeira do Lado A e a segunda do Lado B; Os Replicantes colocou \"Surfista Calhorda\" como segunda do primeiro lado; e, finalmente, os Garotos da Rua saíram com \"Tô de Saco Cheio\" abrindo a segunda parte. Junto com o lançamento, a banda produziu um videoclipe de modo praticamente artesanal para a música \"Sopa de Letrinhas\".\n[…]\nAssim, o próprio nome da banda pode ser visto desse modo — embora tivesse surgido de uma brincadeira com alunos de outro curso e com um estilo estético diferente: a união de duas palavras que não parecem ter nada em comum (\"Engenheiros\" e \"Hawaii\"), mas que, juntas, servia também como uma homenagem ao kitsch e uma desconstrução da própria ideia de mau-gosto.\n[…]\nLucchese, Alexandre (2016). Infinita Highway: Uma Carona com os Engenheiros do Hawaii. Caxias do Sul: Belas Letras. ISBN 978-8581742915\n[…]\n«pouca vogal». Página oficial da dupla gaúcha que tocava canções próprias e, também, dos Engenheiros do Hawaii e da banda Cidadão Quem."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Engenheiros_do_Hawaii",
        "situacao": "ok",
        "texto": "Engenheiros do Hawaii (English: \"Engineers from Hawaii\") was a Brazilian rock band formed in Porto Alegre in 1983 that achieved great popularity with their ironic, critically charged songs with heavily semantic lyrics often relying on wordplays. The vocalist and bassist Humberto Gessinger was the only member present since the original lineup.\n[…]\nThe year 1993 also marked the first tours to Japan and the United States. Unfortunately, towards the end of this year, an internal rift resulted in Augusto Licks leaving the band. There began a long legal dispute over the ownership of the name “Engenheiros do Hawaii,\" with Gessinger and Maltz finally winning control of the name. The next step was to rebuild the Engenheiros, with the addition of a guitarist, Ricardo Horn.\n[…]\nGessinger returned to Porto Alegre, and with two friends, Luciano Granja (guitar) and Adal Fonseca (drums), formed the band Gessinger Trio. Later, they produced the album Humberto Gessinger Trio in 1996. The key points of the disc cover Gessinger's early works, such as the songs \"Vida Real\", \"O Preço\" and \"A Ferro e Fogo\". In reality it is \"an album by Engenheiros without the name Engenheiros do Hawaii\", in Gessinger's words.\n[…]\nThey proved themselves the next year when Granja, Adal, and Gessinger re-assumed the name Engenheiros do Hawaii.\n[…]\nTo commemorate the twentieth anniversary of the band in 2004, Engenheiros do Hawaii released a disc from an MTV Unplugged session. Special guests on this session were Fernando Aranha (acoustic guitar), Humberto Barros (Hammond organ) and Carlos Maltz, Gessinger presented new versions of classics like \"Infinita Highway\" and \"O Papa é Pop\".\n[…]\nEngenheiros do Hawaii Channel\n[…]\nEngenheiros do Hawaii at IMDb\n[…]\nDicionário Cravo Albin de Música Popular Brasileira - Engenheiros do Hawaii"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Titãs",
      "descricao": "Banda de rock paulistana formada em 1982, autora de Sonífera Ilha e Comida."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de encurtar o nome, a banda paulistana Titãs, de Sonífera Ilha, se chamava Titãs do quê?",
    "resposta": "Do Iê-Iê",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tit%C3%A3s_(banda)",
      "https://en.wikipedia.org/wiki/Tit%C3%A3s"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tit%C3%A3s_(banda)",
        "situacao": "ok",
        "texto": "Titãs é uma banda de rock brasileira formada em São Paulo, em 1982. Embora originalmente tocassem pop rock e rock alternativo em seus primórdios, o grupo também já utilizou diversos outros gêneros ao longo dos mais de 40 anos de carreira, como new wave, punk rock, grunge, MPB e música eletrônica.\n[…]\nApós estas primeiras sessões no Sesc, o grupo partiu para apresentações no circuito alternativo de São Paulo, passando pelo Lira Paulistana, Hong Kong (de Júlio Barroso), Napalm e o bar gay Village Station. Ao mesmo tempo, distribuíam fitas demo, algumas das quais foram parar com Lulu Santos, Liminha, Billy Forghieri e o programa Fábrica do Som. Ao vivo e nas fitas, já constavam canções como \"Bichos Escrotos\", \"Marvin\", \"Sonho Com Você\" e \"Sonífera Ilha\".\n[…]\nNesse disco homônimo estão sucessos da banda como \"Sonífera Ilha\", que rendeu à banda diversas apresentações em programas do Raul Gil e Chacrinha. Nesse mesmo disco, os Titãs colocaram nas rádios a música \"Toda Cor\".\n[…]\nJá em 2020, o grupo anunciou que registrou o projeto em estúdio e o resultado seria dividido em três EPs, que receberam o nome Titãs Trio Acústico. Uma regravação da faixa \"Sonífera Ilha\" foi lançada como single e clipe no dia 20 daquele mês, quando foi também anunciado que os três EPs sairiam a partir de abril pela BMG, gravadora à qual retornaram no final de 2019.\n[…]\nA banda faz shows desde 1982 em São Paulo e no Rio de Janeiro, porém apenas no auge, quando foi lançado o álbum Cabeça Dinossauro, a banda começou a fazer shows a nível nacional, em todas as regiões do Brasil. A turnê do álbum MTV ao Vivo: Titãs, foi a de maior duração até hoje na história da banda e também a de maior público, começando em 2005 e terminando em 2009.\n[…]\nTurnê Titãs Trio Acústico (2019–2022)\n[…]\nTurnê Titãs Encontro: Pra Dizer Adeus (2023–2024)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tit%C3%A3s",
        "situacao": "ok",
        "texto": "Titãs (pronounced [t͡ʃiˈtɐ̃s]; lit. 'Titans') are a Brazilian rock band from São Paulo. Though they primarily are classified as a rock band, the band have also experimented with genres such as new wave, punk rock, ska, grunge, MPB and electronic music throughout their career.\n[…]\nAfter these initial performances at Sesc, the group embarked in a city tour around alternative venues such as Lira Paulistana, Hong Kong (by Júlio Barroso), Napalm and the gay bar Village Station. In the meantime, they would distribute some demo tapes, some of which ended up in the hands of Lulu Santos, Liminha, Billy Forghieri and the program Fábrica do Som. Both live and in studio, they were playing later hits such as \"Bichos Escrotos\", \"Marvin\", \"Sonho Com Você\" and \"Sonífera Ilha\".\n[…]\nAlthough poorly promoted and hardly a success, the band spawned their first hit: \"Sonífera Ilha\", later recorded by singer Moraes Moreira. Following the release, Reis briefly left the band, willing to focus on another group he played at (salsa act Sossega Leão, in which he was a percussionist and crooner), but two weeks later he changed his mind and was accepted back.\n[…]\nIn 2020, the band announced it had recorded a studio version of the project and that it would be released as three EPs, under the collective title Titãs Trio Acústico. A re-recording of \"Sonífera Ilha\" was released as a single and video on 20 March, when it was also announced that the EPs would be released starting in April via BMG, the label to which then returned by the end of 2019.\n[…]\nIn 2023, Titãs started the tour \"Encontro: Todos Ao Mesmo Tempo Agora\" which reunites the former members Arnaldo Antunes, Charles Gavin, Nando Reis and Paulo Miklos. The tour is allusive to the band's 40th Anniversary."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Axé music",
      "descricao": "Gênero musical surgido em Salvador nos anos 1980, ligado ao carnaval baiano."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra axé, que batizou o gênero baiano dos anos oitenta, vem do iorubá e significa o quê?",
    "resposta": "Força ou energia vital",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ax%C3%A9",
      "https://en.wikipedia.org/wiki/Ax%C3%A9_(music)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ax%C3%A9",
        "situacao": "desambiguacao",
        "texto": "Axé pode referir-se a:\n\nAxé (candomblé) — termo religioso\nAxé (gênero musical) — gênero musical brasileiro\nAxé (bebida) — bebida\n\n\n== Ver também ==\nTodas as páginas cujo título começa por \"Axé\"\nTodas as páginas que tenham \"Axé\" no título\nBusca por \"axé\"\nTodas as páginas cujo título começa por \"Dorotheus\"\nTodas as páginas que tenham \"Dorotheus\" no título\nBusca por \"dorotheus\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ax%C3%A9_(music)",
        "situacao": "ok",
        "texto": "Axé (Portuguese pronunciation: [aˈʃɛ] is a key concept in the regional Candomblé religion, as \"the imagined spiritual power and energy bestowed upon practitioners by the pantheon of orixás\". It also has ties with the Roman Catholic Church and the Lenten season, which represents the roots of Bahian Carnival.\n[…]\nAxé was a fusion of African and Caribbean styles such as merengue, salsa and reggae, as well as being influenced by other Afro-Brazilian musical styles such as frevo and forró. Axé music was labeled in 1980s, but it was already noticeable in the 50s with the incorporation of the \"guitarra baiana\" (guitar from Bahia). This genre was purely instrumental, and remained so until the 1970s, when Moraes Moreira (of the band Novos Baianos) went solo.\n[…]\nThese bands are still relevant in Brazilian music scene, and still spreads the axé genre across the country and throughout the world.\n[…]\nDuring his time in the city of Salvador, Bahia, Paul Simon encountered the music ensemble Grupo Cultural Olodum after hearing that they were rehearsing there. Simon was impressed with their playing and recorded the ensemble two days later for \"The Obvious Child\", which became the opening track to Rhythm of the Saints. On Rhythm of the Saints, Simon decided to build many of the tracks around polyrhythmic percussion patterns.\n[…]\nMichael Jackson recorded his 1996 hit They Don't Really Care About Us in Bahia. Spike Lee and directed the music video for this song, the music video was shot in the historic district of Pelourinho in Salvador and in a favela in Rio de Janeiro. Michael Jackson collaborated with Olodum in this video, which featured 200 members of the band playing their different types of drums to the sound of samba-reggae from Salvador.\n[…]\nA Short History Axé Music in Salvador, Bahia"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Cazuza",
      "descricao": "Agenor de Miranda Araújo Neto, cantor e compositor carioca, ex-vocalista do Barão Vermelho, morto em 1990."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Cazuza era só um apelido de infância. Qual era o primeiro nome de batismo do cantor, herdado do avô?",
    "resposta": "Agenor",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cazuza",
      "https://en.wikipedia.org/wiki/Cazuza"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cazuza",
        "situacao": "ok",
        "texto": "Agenor de Miranda Araújo Neto (Rio de Janeiro, 4 de abril de 1958 – Rio de Janeiro, 7 de julho de 1990), mais conhecido como Cazuza, foi um cantor, compositor e poeta brasileiro. Além do reconhecimento por sua aclamada carreira musical, tornou-se um símbolo da luta contra a síndrome da imunodeficiência adquirida (AIDS), que o acometeu e causou sua morte precoce em 1990.\n[…]\nFilho da filantropa Lucinha Araújo (n. 1936) e do produtor musical João Araújo (1935–2013), Cazuza recebeu o apelido mesmo antes do nascimento. Foi registrado como Agenor por insistência de sua avó paterna. Na infância, Cazuza nem sequer sabia seu nome verdadeiro, por isso não respondia à chamada na escola. Só mais tarde, quando descobriu que um de seus compositores prediletos, Cartola, também se chamava Agenor (oficialmente Angenor, por um erro do cartório), começou a aceitar o nome.\n[…]\nBurguesia foi gravado em clima de urgência para que fosse finalizado e lançado com Cazuza em vida, que estava cada vez mais debilitado pelas doenças oportunistas decorrentes da AIDS. O cantor gravou e produziu as canções ora sentado na cadeira de rodas, ora deitado numa maca, com a voz nitidamente enfraquecida. É um álbum duplo de conceito dual, sendo o primeiro disco com canções de rock brasileiro e o segundo com canções de MPB.\n[…]\nAinda em 2021, através do YouTube, foi publicada uma apresentação musical de Cazuza intitulada Uma Prova de Amor, em que trabalhava as músicas do álbum O Tempo Não Pára - Ao Vivo. No registro vários intérpretes e personalidades aparecem. No palco aparecem pra cantar Gal Costa, Sandra de Sá, Simone e Frejat, onde cantam juntos pela primeira vez \"Bete Balanço\". Na plateia, Lucinha Araújo, mãe de Cazuza, Malu Mader, Cláudia Abreu e Marina Lima.\n[…]\nSongbook Cazuza Vol. 2 (1990)\n[…]\n«Acervo Cazuza»\n[…]\n«Cazuza». no Dicionário Cravo Albin da Música Popular Brasileira\n[…]\n«Cazuza». no AllMusic"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cazuza",
        "situacao": "ok",
        "texto": "Agenor de Miranda Araújo Neto, better known as Cazuza (Portuguese pronunciation: [kaˈzuzɐ]; April 4, 1958 – July 7, 1990), was a Brazilian singer-songwriter, born in Rio de Janeiro. Along with Raul Seixas, Renato Russo and Os Mutantes, Cazuza, both while fronting Barão Vermelho and at solo career, is considered one of the best exponents of Brazilian rock music. In his 9-year career, he sold more t\n[…]\nSon of the record producer João Araújo and the amateur singer Maria Lúcia Araújo, Cazuza always had close contact with music. Influenced since early childhood by the strong values of Brazilian music, he had a special preference for the sad, dramatic overtones of Cartola, Lupicinio Rodrigues, Dolores Duran, and Maysa. He began to write lyrics and poems around 1965.\n[…]\nCazuza died in Rio de Janeiro on July 7, 1990, at the age of 32, due to a septic shock caused by AIDS. He was buried at the Cemitério São João Batista in Botafogo, Rio de Janeiro. Cazuza's mother set up the Viva Cazuza Society (Sociedade Viva Cazuza), a charity which sponsors AIDS prevention and provides a home for HIV-positive children.\n[…]\nA biopic starring Daniel de Oliveira and directed by Sandra Werneck called Cazuza: O Tempo não Para (\"Cazuza: Time Doesn't Stop\") was released in 2004.\n[…]\nIn 2014, the biographic musical Cazuza – Pro Dia Nascer Feliz opened in São Paulo. It featured songs from Cazuza's solo career as well as from his time as frontman of Barão Vermelho. The musical starring Emílio Dantas was directed by João Fonseca and toured Brazil for two years.\n[…]\nCazuza was portrayed by Jullio Reis in the 2025 Brazilian film Latin Blood: The Ballad of Ney Matogrosso, a biopic about Ney Matogrosso.\n[…]\nCazuza is also depicted in the 2025 Globoplay documentary series Cazuza Além da Música, directed by Patrícia Guimarães.\n[…]\nCazuza - O Tempo Não Pára, 2004 (biopic)\n[…]\nMedia related to Cazuza at Wikimedia Commons\n[…]\nCazuza at IMDb"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Cálice",
      "descricao": "Canção de Chico Buarque e Gilberto Gil de 1973, censurada pela ditadura militar."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Censurada pela ditadura, a canção Cálice, de Chico Buarque e Gilberto Gil, faz no título um trocadilho com qual ordem de silêncio?",
    "resposta": "Cale-se",
    "fonte": [
      "https://pt.wikipedia.org/wiki/C%C3%A1lice_(can%C3%A7%C3%A3o)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A1lice_(can%C3%A7%C3%A3o)",
        "situacao": "ok",
        "texto": "\"Cálice\" é uma canção composta em 1973 pelos músicos brasileiros Chico Buarque e Gilberto Gil, lançada oficialmente em 1978. Escrita durante a ditadura militar brasileira, a canção utiliza imagens bíblicas e jogos de palavras — principalmente um trocadilho com \"cálice\" e \"cale-se\" — para criticar a censura estatal e a repressão política, disfarçando-as sob um tema religioso.\n[…]\n\"Cálice\" foi escrita em 1973 pelos músicos brasileiros Chico Buarque e Gilberto Gil durante um período de intensa repressão política no Brasil sob a ditadura militar. A canção foi concebida durante a ditadura de Emílio Garrastazu Médici, época marcada por ampla censura, violência estatal e a implementação do Ato Institucional n.º 5 (AI-5), que restringiu as liberdades civis e aumentou o controle autoritário. Muitos artistas, incluindo Gil e Caetano Veloso , foram presos ou forçados ao exílio.\n[…]\nO título da canção carrega um duplo sentido, funcionando tanto como referência ao cálice bíblico quanto como homónimo do verbo imperativo cale-se, uma palavra com clara conexão com a censura que impõe silêncio e vitimização. A canção originou-se de uma ideia trazida por Gil, que havia escrito o refrão e um verso inicial logo após a Sexta-feira Santa, inspirando-se em imagens da Paixão de Cristo.\n[…]\nEle foi particularmente inspirado pelo apelo bíblico \"Pai, afasta de mim este cálice\", que faz um paralelo com o sofrimento experimentado sob o regime autoritário. Ao receber o rascunho de Gil, Buarque imediatamente percebeu a homofonia entre \"cálice\" e \"cale-se\" e a desenvolveu em uma metáfora política para a repressão e a censura sob a ditadura.\n[…]\nChico Buarque – compositor e vocais\n[…]\nGilberto Gil – compositor\n[…]\n«Cálice». Letras em português e espanhol no site oficial de Chico Buarque.\n[…]\n«Letra de \"Cálice\" censurada em maio de 1973»"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Adoniran Barbosa",
      "descricao": "Sambista paulista, autor de Trem das Onze e Saudosa Maloca."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Filho de imigrantes italianos, o autor de Saudosa Maloca adotou o nome artístico Adoniran Barbosa. Como ele se chamava de verdade?",
    "resposta": "João Rubinato",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Adoniran_Barbosa",
      "https://en.wikipedia.org/wiki/Adoniran_Barbosa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Adoniran_Barbosa",
        "situacao": "ok",
        "texto": "Adoniran Barbosa, nome artístico de João Rubinato (Valinhos, 6 de agosto de 1910 – São Paulo, 23 de novembro de 1982), foi um compositor, cantor, comediante e ator brasileiro. Conhecido como o \"Pai do samba paulista\" , destacou-se como uma das figuras mais relevantes da música popular brasileira ao criar uma identidade única do samba e como um dos principais difusores da cultura e da produção artí\n[…]\nAdoniran era filho de Francesco \"Fernando\" Rubinato e Emma Ricchini, imigrantes italianos da comuna de Cavarzere, província de Veneza. Seus avós paternos eram Angelo Rubinato e Anna Manfrinato, e os maternos, Francesco Ricchini e Antonia Freddo. Seus pais casaram-se em Cavarzere em 23 de maio de 1895, desembarcaram em Santos em 15 de setembro de 1895, passaram pela Hospedaria dos Imigrantes e foram trabalhar nas lavouras do município de Tietê. Sua mãe morreu em 1939 e seu pai em 1943.\n[…]\nJoão Rubinato nasceu em 6 de agosto de 1910 em Valinhos, localidade que foi distrito do município de Campinas até 1953. Numa entrevista em 1972 ao programa Ensaio Especial da TV Cultura, Adoniran disse que na verdade nascera em 1912, mas sua família teria adulterado os documentos para 1910, para que começasse a trabalhar mais cedo, pois a fábrica em que iria trabalhar não admitia quem tivesse menos de doze anos.\n[…]\nPorém no documentário “Meu Nome é João Rubinato”, o neto de Adoniran Barbosa, João Rubinato, afirma que conseguiu ter acesso a certidão de nascimento original do cartório Campinas, estando lá escrito que Adoniran nasceu mesmo em 1910, e não em 1912.\n[…]\nBusca conquistar seu espaço como cantor – tem boa voz, poderia tentar os diversos programas de calouro. Já com o nome de Adoniran Barbosa – tomado emprestado a um companheiro de boemia e de Luís Barbosa, cantor de sambas, que admira – João Rubinato estreia cantando um samba brejeiro de Ismael Silva e Nilton Bastos, o Se você jurar."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Adoniran_Barbosa",
        "situacao": "ok",
        "texto": "Adoniran Barbosa, artistic name of João Rubinato (6 August 1910 – 23 November 1982), was a noted Brazilian São Paulo style samba singer and composer.\n[…]\nJoão (John) Rubinato was the seventh child of Francesco (Francis) Rubinato and Emma Ricchini, Italian immigrants from Cavarzere (province of Venice). His parents had settled in Valinhos, a rural town in the state of São Paulo, about 70 km from the city of São Paulo. In 2010, two bridges were named after Rubinato: one located in Valinhos, Brazil, where the singer was born, and another in Cavarzere, Italy, where his parents came from.\n[…]\nIn 1933 João Rubinato moved to the city of São Paulo, where he started composing songs and tried his luck as a singer in Cruzeiro do Sul radio station, in a talent-scouting show directed by Jorge Amaral. After many failures, he finally succeeded with the Noel Rosa's samba Filosofia, and got a contract for a weekly 15-minute show.\n[…]\nFearful that a samba artist with an Italian surname would not be taken seriously by the public, João Rubinato then decided to adopt a more Brazilian-sounding name. So he borrowed the unusual \"Adoniran\" from one of his friends, and \"Barbosa\" from samba composer Luiz Barbosa, his idol.\n[…]\nAdoniran Barbosa was portrayed by Paulo Miklos in the 2023 Brazilian feature film Saudosa Maloca.\n[…]\nAdoniran Barbosa made good on the hardships of his youth by becoming the composer of the lower classes of São Paulo, particularly the poor Italian immigrants living in the quarters of Bexiga (Bela Vista) and Brás, and the poor who lived in the city's many malocas (the shanties of favelas) and cortiços (degraded multifamily row houses)."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Brasil (canção de Cazuza)",
      "descricao": "Canção de Cazuza, George Israel e Nilo Romero, de 1988, conhecida pelo verso Brasil, mostra tua cara."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na voz de Gal Costa, a canção Brasil, de Cazuza, foi tema de abertura de qual novela da Globo de 1988?",
    "resposta": "Vale Tudo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cazuza",
      "https://pt.wikipedia.org/wiki/Vale_Tudo_(telenovela)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cazuza",
        "situacao": "ok",
        "texto": "Agenor de Miranda Araújo Neto (Rio de Janeiro, 4 de abril de 1958 – Rio de Janeiro, 7 de julho de 1990), mais conhecido como Cazuza, foi um cantor, compositor e poeta brasileiro. Além do reconhecimento por sua aclamada carreira musical, tornou-se um símbolo da luta contra a síndrome da imunodeficiência adquirida (AIDS), que o acometeu e causou sua morte precoce em 1990.\n[…]\nEsta última, um samba-rock, tornou-se clássico em versão de Gal Costa e foi tema de abertura da telenovela Vale Tudo, da Rede Globo.\n[…]\nVisivelmente mais magro de com cabelos lisos e menores, seu estado de saúde era motivo de especulação por parte da mídia. Cazuza ainda não havia assumido sua doença ao público e sempre contornava o assunto, mas queria mostrar que estava bem e ativo. Seus shows se tornam mais elaborados e a turnê do disco Ideologia, dirigido por Ney Matogrosso, viajou por todo o Brasil.\n[…]\nCazuza: Uma Prova de Amor (1989; Globo vídeo VHS)\n[…]\nCazuza também é creditado por suas letras criticas e contundentes, que questionavam o sistema político brasileiro; Bruno Ribeiro do Portal do Partido Democrático Trabalhista comentou: \"músicas como ‘O Tempo Não Para’ mostravam com suas letras a realidade de um país preconceituoso, problemático e, ao mesmo tempo, revolucionário. Nas entrelinhas, muitas vezes, a mensagem virava discurso\".\n[…]\nNo ano seguinte, em 4 de abril de 2022, uma versão estendida do álbum O Tempo Não Pára foi lançada em versões físicas e nas plataformas digitais com o nome de \"O Tempo Não Para - O Show Completo\". Nesta, constam 7 músicas que foram cortadas do original: \"Completamente Blue\", \"Vida Fácil\", \"A Orelha de Eurídice\", \"Blues da Piedade\", \"Preciso Dizer que Te Amo\", \"Mal Nenhum\" e \"Brasil\". Mixado por Walter Costa e remasterizado por Ricardo Garcia, o show foi gravado em 1988 no Rio de Janeiro.\n[…]\n«Cazuza». no Dicionário Cravo Albin da Música Popular Brasileira"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vale_Tudo_(telenovela)",
        "situacao": "ok",
        "texto": "Vale Tudo é uma telenovela brasileira produzida e exibida pela TV Globo de 16 de maio de 1988 a 6 de janeiro de 1989, em 204 capítulos. Substituiu Mandala e foi substituída por O Salvador da Pátria, sendo a 39.ª \"novela das oito\" transmitida pela emissora.\n[…]\nTão situação obrigou aos autores a driblar o órgão censor, utilizando-se da cacofonia, mas o drible não passou despercebido por muito tempo e tais vícios de linguagem tiveram de ser evitados. Vale Tudo foi o último folhetim censurado pelo DCDP, que foi extinto em 1988 com o surgimento da Constituição cidadã.\n[…]\nVale Tudo foi exibida na faixa das 20 horas da TV Globo de 16 de maio de 1988 a 6 de janeiro de 1989 em 204 capítulos, sendo o último reprisado em 7 de janeiro. O primeiro e o segundo foram editados para veiculação única na noite da estreia, enquanto o de número 122 foi dividido em dois (122 e 122 A).\n[…]\nEm 26 de setembro de 2011, Vale Tudo estreou no horário das 17 horas na TV Globo Internacional da África. Terminou em 6 de abril de 2012, totalizando 136 capítulos.[carece de fontes]?\n[…]\nEm outubro de 2014 foi lançada em DVD pela Globo Marcas.\n[…]\nEm 2016, um júri convocado pela revista Veja elegeu Vale Tudo junto a Avenida Brasil (2012) as melhores de dezessete novelas da televisão brasileira.\n[…]\nSegundo o colunista Valmir Montarelli, da revista Veja, a TV Globo estaria planejando um reboot da telenovela para o ano de 2025, como base para as comemorações dos 60 anos da emissora e dos 75 anos da televisão brasileira. Além disso, Vale Tudo seria o terceiro remake do horário das nove e o quarto da década de 2020, depois de Pantanal (2022), Elas por Elas (2023) e Renascer (2024).\n[…]\n«Vale Tudo: a novela que ainda é a cara do Brasil - Jornal da Tarde»"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Maria Rita",
      "descricao": "Cantora brasileira de MPB e samba, filha de Elis Regina."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A cantora Maria Rita é filha de Elis Regina e de qual pianista e arranjador?",
    "resposta": "César Camargo Mariano",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maria_Rita",
      "https://en.wikipedia.org/wiki/Maria_Rita"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Rita",
        "situacao": "ok",
        "texto": "Maria Rita Camargo Mariano OMC (9 de setembro de 1977, São Paulo) é uma cantora, compositora, produtora musical e empresária brasileira. Ela é filha da cantora Elis Regina e do pianista e arranjador César Camargo Mariano.\n[…]\nFilha mais nova de Elis Regina e César Camargo Mariano, Maria Rita sofreu com muita exposição tanto pela prolífica e aclamada carreira musical dos pais quanto pela perda da mãe aos quatro anos de idade. Maria Rita foi constantemente bombardeada com a cobrança das pessoas de que cantasse, ao que ela revidava, rebeldemente, com negativas, apesar de ser esse, também, seu desejo.\n[…]\nQuando voltou ao Brasil, Maria Rita foi produtora musical do irmão Pedro Mariano. Em suas palavras, a partir desse momento, sentia-se \"no lugar certo fazendo a coisa errada\", e, em pouco tempo, adquiriu a certeza da necessidade de cantar. Maria Rita começou a cantar profissionalmente aos 24 anos. Não acha que foi tarde. Em suas palavras: \"Sempre quis cantar. Mas a questão não era querer. Era por quê. Não gosto de fazer nada sem ter um porquê.\n[…]\nO jornal declarou: \"A cantora brasileira Maria Rita veio com um modesto e requintado show, acompanhada somente pelo pianista Tiago Costa, que manteve os arranjos transparentes para fazer jus à sua voz delicada e potente\".\n[…]\nEm julho de 2016, a cantora foi convidada, pela terceira vez, a cantar no Montreux Jazz Festival. Lá, com Ivan Lins, Maria Rita interpretou “Madalena”, música consagrada na voz de sua mãe, Elis Regina. Além do sucesso, a cantora levou, ao público do festival, “Cara Valente”, \"É\", e “Beijo Sem”. O público a ovacionou ao fim da apresentação.\n[…]\n2003—2005: Turnê \"Maria Rita\"\n[…]\nMaria Rita no Facebook\n[…]\nMaria Rita no X\n[…]\nMaria Rita no Instagram\n[…]\nMaria Rita no YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Rita",
        "situacao": "ok",
        "texto": "Maria Rita (born 9 September 1977) is a Brazilian singer. Born Maria Rita Camargo Mariano, she is the daughter of famed pianist/arranger César Camargo Mariano and the late Brazilian singing legend Elis Regina and sister to Pedro Mariano and music producer João Marcelo Bôscoli. Her namesake is family friend and famed Brazilian rock legend Rita Lee. She studied at New York University, and worked as \n[…]\nMaria Rita began singing professionally at the age of 24, although she had wanted to sing since she was 14. Her first CD, Maria Rita, launched her career symbolically, with the first cut on her first album, A Festa (The Party), being written by Milton Nascimento, the legendary Brazilian singer-songwriter whose career was launched by Maria Rita's mother, Elis Regina, when she began to sing his songs to the national Brazilian audience.\n[…]\nShe won the 2004 Latin Grammy Awards for Best New Artist in the General Field, Best Song in Portuguese (\"A festa\") and her debut album Maria Rita won the Best MPB (Musica Popular Brasileira) Album award for that year.\n[…]\nMaria Rita was nominated for the BBC Radio 3 Awards for World Music in 2008. On 28 June 2008, she performed in London for the first time, with a production by Tuba Productions and JungleDrums Magazine.\n[…]\nMaria Rita – Official Website\n[…]\nReport on 2004 Latin Grammy awards – enter Maria Rita for search"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Miúcha",
      "descricao": "Heloísa Maria Buarque de Hollanda, cantora brasileira que gravou com Tom Jobim e João Gilberto."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A cantora Miúcha, mãe de Bebel Gilberto e parceira de Tom Jobim em discos, era irmã de qual compositor?",
    "resposta": "Chico Buarque",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mi%C3%BAcha",
      "https://en.wikipedia.org/wiki/Mi%C3%BAcha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mi%C3%BAcha",
        "situacao": "ok",
        "texto": "Heloísa Maria Buarque de Hollanda, mais conhecida como Miúcha (Rio de Janeiro, 30 de novembro de 1937 — Rio de Janeiro, 27 de dezembro de 2018), foi uma cantora e compositora brasileira.\n[…]\nNeta de Cristóvão Buarque de Hollanda e filha de Sérgio Buarque de Holanda e Maria Amélia Cesário Alvim, Miúcha é irmã do cantor e compositor Chico Buarque e das também cantoras Ana de Hollanda e Cristina Buarque, e mãe da cantora Bebel Gilberto, fruto de seu casamento com o compositor João Gilberto.\n[…]\nHeloísa Maria Buarque de Hollanda nasceu no Rio de Janeiro em 30 de novembro de 1937, mas sua família mudou-se para São Paulo quando ela tinha apenas 8 anos. Ainda criança formou um conjunto vocal com seus irmãos, incluindo Chico Buarque.\n[…]\nEm 1960, mudou-se para Paris onde estudou História da Arte na École du Louvre. Em viagem de férias fez uma excursão com amigos para a Grécia, Itália e França. Em Roma, no bar La Candelária, conheceu a cantora chilena Violeta Parra, através de quem conheceu o cantor baiano João Gilberto, tendo com ele se casado e tido uma filha, também cantora, Bebel Gilberto.\n[…]\nEm 1975, fez sua primeira gravação profissional como cantora no disco The Best of Two Worlds de parceria de João Gilberto e Stan Getz. Após este lançamento, Miúcha tornou-se parceira de Tom Jobim em dois discos, de 1977 e 1979, e fez parte do espetáculo organizado por Aloysio de Oliveira junto com Vinicius de Moraes, Tom Jobim e Toquinho.\n[…]\nMiúcha & Antônio Carlos Jobim (1977) RCA Victor LP\n[…]\nMiúcha & Tom Jobim (1979) RCA Victor LP\n[…]\nTom Jobim, Vinicius de Moraes, Toquinho e Miúcha - Musicalmente ao vivo na Itália (1979)\n[…]\nMiúcha (1989) Warner/Continental LP\n[…]\nMiúcha.compositores (2002) Biscoito Fino CD"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mi%C3%BAcha",
        "situacao": "ok",
        "texto": "Heloísa Maria Buarque de Hollanda (30 November 1937 – 27 December 2018), known professionally as Miúcha, was a Brazilian singer and composer.\n[…]\nShe belonged to a musical family. Her siblings included singer and composer Chico Buarque and two sisters, the singers Ana de Hollanda and Cristina Buarque. She was the second wife and creative partner of João Gilberto, and mother of singer Bebel Gilberto.\n[…]\nHeloísa Maria Buarque de Hollanda was born in Rio de Janeiro. When she was 8 years old her family moved to São Paulo. As a child she formed a vocal ensemble with her siblings.\n[…]\nIn 1975, she recorded professionally for the first time singing on the album The Best of Two Worlds in partnership with João Gilberto and Stan Getz. After this release, Miúcha partnered with Tom Jobim on two albums, in 1977 and 1979, and was part of the show organized by Aloysio de Oliveira along with Vinicius de Moraes, Tom Jobim and Toquinho.\n[…]\nIn 1963, Miúcha went on holiday with friends to Greece, Italy and France. In Paris, in the bar La Candelaria, she met the Chilean singer Violeta Parra, who introduced her to singer and future husband João Gilberto. Miúcha and Gilberto married in 1965 and had a daughter, Bebel Gilberto, in 1966.\n[…]\nMiúcha & Antônio Carlos Jobim (1977) RCA Victor LP\n[…]\nMiúcha & Tom Jobim (1979) RCA Victor LP\n[…]\nMiúcha (1989) Warner/Continental LP\n[…]\nVivendo Vinicius ao vivo Baden Powell, Carlos Lyra, Miúcha e Toquinho (1999) BMG Brasil CD\n[…]\nMiúcha.compositores (2002) Biscoito Fino CD\n[…]\nMiúcha canta Vinicius & Vinicius - Música e letra (2003) Biscoito Fino CD\n[…]\nMiúcha Outros Sonhos (2007) Biscoito Fino CD\n[…]\nMiucha com Vinicius/Tom/João (2008) Sony & BMG CD"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Aeroporto Internacional do Galeão",
      "descricao": "Principal aeroporto internacional do Rio de Janeiro, na Ilha do Governador."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que compositor carioca dá nome oficial ao Aeroporto Internacional do Galeão, no Rio de Janeiro?",
    "resposta": "Tom Jobim",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Aeroporto_Internacional_do_Rio_de_Janeiro",
      "https://en.wikipedia.org/wiki/Rio_de_Janeiro/Gale%C3%A3o_International_Airport"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Aeroporto_Internacional_do_Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Aeroporto Internacional Antônio Carlos Jobim, anteriormente chamado Aeroporto Internacional do Rio de Janeiro e também conhecido como Aeroporto do Galeão (IATA: GIG, ICAO: SBGL), é um aeroporto internacional no município do Rio de Janeiro, no estado homônimo. É o segundo maior aeroporto do Brasil em movimento internacional. Considerando também o movimento de passageiros domésticos, é o sétimo maio\n[…]\nAtualmente, 26 companhias aéreas operam no Aeroporto Internacional Tom Jobim com rotas ligando-o à cidades dos continentes da Europa, Oriente Médio e América do Norte, Central e do Sul, além das rotas domésticas.\n[…]\nO atual Aeroporto Internacional Tom Jobim tem suas origens na década de 1920 com advento das operações militares. Em 10 de maio de 1923, o Governo Federal desapropriou terrenos na Ilha do Governador para a construção do Centro de Aviação Naval do Rio de Janeiro. Já no ano seguinte a Escola de Aviação Naval, que funcionava desde 1916 no antigo Arsenal de Marinha, no Rio de Janeiro, foi transferida para a ponta do Galeão.\n[…]\nEsse novo terminal foi inaugurado em 20 de julho 1999 como um dos mais modernos da América Latina, com capacidade de atender a oito milhões de passageiros ao ano, mais que duplicando a capacidade do Aeroporto Internacional do Rio de Janeiro. No mesmo ano, o aeroporto recebeu um nome em uma homenagem ao compositor Tom Jobim.\n[…]\nO Aeroporto Internacional Tom Jobim possui duas pistas: A maior delas, cujas cabeceiras são 10/28, possui 4 mil metros de comprimento por 45 metros de largura, com pavimento de concreto; a menor, de cabeceiras 15/33, tem 3 180 metros de comprimento e 47 de largura, com pavimento de asfalto. As pistas estão equipadas com ILS de categoria 1 pelas cabeceiras 15 e 28, e ILS de categoria 2 pela cabeceira 10.\n[…]\n«RIOgaleão - Aeroporto Internacional Tom Jobim (site oficial)»\n[…]\n«Aeroporto Internacional do Rio de Janeiro-Galeão»  no Facebook"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rio_de_Janeiro/Gale%C3%A3o_International_Airport",
        "situacao": "ok",
        "texto": "Rio de Janeiro/Galeão–Antonio Carlos Jobim International Airport (IATA: GIG, ICAO: SBGL), popularly known by its original name Galeão International Airport, is the main international airport serving Rio de Janeiro, Brazil.\n[…]\nThe airport was originally named after the neighborhood of Galeão: Praia do Galeão (Galleon Beach) is located in front of the original passenger terminal (the present passenger terminal of the Brazilian Air Force). This beach is the location where the galleon Padre Eterno was built in 1663. On 5 January 1999 the name was changed adding a tribute to the Brazilian musician Antonio Carlos Jobim. Galeão Airport is explicitly mentioned in his composition Samba do Avião.\n[…]\nThe new concessionary has been using the brand name RIOgaleão–Aeroporto Internacional Tom Jobim.\n[…]\nIn order to control and revert this abnormal trend, on August 10, 2023 the Civil Aviation National Council issued an order to restrict Santos Dumont services to airports located within 400 km maximum from Rio de Janeiro and without international services. The resolution came into force on January 1, 2024, and is considered to be provisory, until a balance is reached. Airlines started cancelling and/or moving services to Galeão in September 2023.\n[…]\n26 July 1979: a Lufthansa cargo Boeing 707-330C registration D-ABUY operating flight 527 from Rio de Janeiro–Galeão to Frankfurt via Dakar collided with a mountain 5 minutes after take-off from Galeão. The crew of three died.\n[…]\nThe airport is located 20 km (12 mi) north of downtown Rio de Janeiro.\n[…]\nGaleão Air Force Base\n[…]\nMedia related to Rio de Janeiro (state)/Galeão - Antônio Carlos Jobim International Airport at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Dorival Caymmi",
      "descricao": "Cantor e compositor baiano, autor de canções sobre o mar e a Bahia, como O Que É Que a Baiana Tem."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os músicos Nana, Dori e Danilo são irmãos e filhos de qual compositor baiano?",
    "resposta": "Dorival Caymmi",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dorival_Caymmi",
      "https://en.wikipedia.org/wiki/Dorival_Caymmi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dorival_Caymmi",
        "situacao": "ok",
        "texto": "Dorival Caymmi (Salvador, 30 de abril de 1914 – Rio de Janeiro, 16 de agosto de 2008) foi um cantor, compositor, instrumentista, poeta, pintor e ator brasileiro.\n[…]\nFilho de Dorival Henrique Caymmi e Aurelina Soares Caymmi, era casado com Adelaide Tostes, com quem teve seus três filhos: Nana, Dori e Danilo, que também são cantores, assim como suas netas Juliana e Alice.\n[…]\nSeu corpo foi velado na Câmara Municipal do Rio de Janeiro, no Centro carioca. Caymmi foi enterrado no dia seguinte no Cemitério de São João Batista, no bairro de Botafogo, com a presença de seus filhos e personalidades como Othon Bastos, Gilberto Gil, Gilberto Braga, João Ubaldo Ribeiro, Daniela Mercury, Wagner Tiso, Glória Perez e o prefeito do Rio, Cesar Maia (DEM).\n[…]\nEm sua homenagem, o Governador da Bahia, Jaques Wagner (PT) e o Governador do Rio de Janeiro, Sérgio Cabral Filho (PMDB), decretaram luto oficial de três dias em seus estados. O então Presidente da República, Lula (PT), escreveu uma nota de pesar em homenagem ao músico: \"Dorival Caymmi é um dos fundadores da música popular brasileira, patriarca de uma linhagem de músicos de talento. Suas canções praieiras e seus sambas-canção são patrimônio da cultura nacional.\n[…]\nBrilhou e inovou como compositor, músico e cantor. Sua música é uma completa tradução da Bahia. Foi com tristeza que recebi a notícia de sua morte. Meus sinceros pêsames a sua esposa Stella Maris e a seus filhos - Nana, Dori e Danilo. Sua obra permanecerá sempre viva na memória dos brasileiros, iluminando a todos com a graça e a alegria de suas músicas\".\n[…]\nDorival Caymmi no IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dorival_Caymmi",
        "situacao": "ok",
        "texto": "Dorival Caymmi (Brazilian Portuguese: [doɾiˈvaw kaˈĩmi]; April 30, 1914 – August 16, 2008) was a Brazilian singer, songwriter, actor, and painter active for more than 70 years, beginning in 1933. He contributed to the birth of Brazil's bossa nova movement, and several of his samba pieces, such as \"Samba da Minha Terra\", \"Doralice\" and \"Saudade da Bahia\", have become staples of música popular brasi\n[…]\nIn Caymmi's case, the service was bringing pride and honor to Bahian people through the widespread dissemination of his music about life there. On Caymmi's 70th birthday, in 1984, French Minister of Culture Jack Lang presented him with the Ordre des Arts et des Lettres, a French order that recognizes significant contributors to the fields of art and literature, in Paris. The following year, a new street named Avenida Dorival Caymmi (Dorival Caymmi Avenue) opened in Salvador.\n[…]\nDorival Caymmi died at age 94 of kidney cancer and multiple organ failure on August 16, 2008, at his home in Copacabana, Rio de Janeiro. His granddaughter, Stella, who wrote a biography about him in 2001, said, \"He did not know that he had cancer, and he did not want to know. He did not ask much about this. He was first hospitalized in 1999. My grandfather went through with treatment, but he did not want to know anything about the illness.\n[…]\nBrazilian singer and composer Carlos Lyra praised Caymmi's style for its \"suave and romantic colloquialism\". In a 1994 anthology of Caymmi's work, Antônio Carlos Jobim wrote in the introduction, \"Dorival is a universal genius.\n[…]\nSeveral of Caymmi's contemporaries, including Gal Costa and Olivia Hime, have recorded tributes to him.\n[…]\nPrior to 1988, all of Caymmi's albums were released as LP records. His last four albums were released as CDs.\n[…]\nAll of Caymmi's singles were released as 78 rpm gramophone records.\n[…]\nDorival Caymmi at IMDb\n[…]\nCaymmi's obituary in The New York Times"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Francis Albert Sinatra & Antônio Carlos Jobim",
      "descricao": "Álbum de 1967 gravado em dupla por Frank Sinatra e Tom Jobim."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1967, Tom Jobim gravou um disco inteiro de bossa nova em dupla com qual cantor americano?",
    "resposta": "Frank Sinatra",
    "distratores": [
      "Tony Bennett",
      "Dean Martin",
      "Nat King Cole"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Francis_Albert_Sinatra_%26_Antonio_Carlos_Jobim"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Francis_Albert_Sinatra_%26_Antonio_Carlos_Jobim",
        "situacao": "ok",
        "texto": "Francis Albert Sinatra & Antonio Carlos Jobim is a 1967 album by Frank Sinatra and Antônio Carlos Jobim. The tracks were arranged and conducted by Claus Ogerman, accompanied by a studio orchestra. Along with Jobim's original compositions, the album features three standards from the Great American Songbook, (\"Change Partners\", \"I Concentrate on You\", and \"Baubles, Bangles and Beads\") arranged in th\n[…]\nSinatra and Jobim followed up this album with sessions for a second collaboration, titled Sinatra-Jobim. That album was briefly released on 8-track tape (Reprise 8FH 1028) in 1969 before being taken out of print at Sinatra's behest, due to concerns over its sales potential. Several of the Sinatra-Jobim tracks were subsequently incorporated in the Sinatra & Company album (1971) and the Sinatra–Jobim Sessions compilation (1979).\n[…]\nIn 2010 the Concord Records label issued a new, comprehensive compilation titled Sinatra/Jobim: The Complete Reprise Recordings.\n[…]\nAt the 10th Annual Grammy Awards in 1968, Francis Albert Sinatra & Antonio Carlos Jobim was nominated for the Grammy Award for Album of the Year, but lost to the Beatles' Sgt. Pepper's Lonely Hearts Club Band. Sinatra had won the previous two Grammy awards for album of the year, in 1967 and 1966, and Jobim 1965. It was also nominated in the category of Best Vocal Performance, Male, eventually losing to Glen Campbell's recording of \"By the Time I Get to Phoenix.\"\n[…]\nJobim had to wait for Sinatra to return from a holiday in Barbados where he was taking a mutually agreed break from his marriage to Mia Farrow.\n[…]\nThe album was recorded on January 30 and February 1, 1967, at United Western Recorders in Hollywood, Los Angeles. Later in the evening of February 1, Sinatra and his daughter, Nancy, recorded their single \"Somethin' Stupid\".\n[…]\nFrank Sinatra – vocal\n[…]\nAntônio Carlos Jobim – piano, acoustic guitar, backing vocals"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Francis_Albert_Sinatra_%26_Antonio_Carlos_Jobim",
        "situacao": "ok",
        "texto": "Francis Albert Sinatra & Antonio Carlos Jobim é um álbum de estúdio do cantor norte-americano Frank Sinatra em parceria com o cantor e compositor brasileiro Antônio Carlos Jobim, lançado em 1967. O álbum reúne canções conhecidas da bossa nova, além de três canções do \"Great American Songbook\" também com o arranjo da Bossa nova. Conta ainda com a participação e condução de Claus Ogerman e sua orque\n[…]\nSeguindo o sucesso comercial deste álbum, uma sequência intitulada Sinatra-Jobim chegou a ser lançada em 1970, porém foi retirada de mercado pouco tempo depois e teve suas canções reincorporadas em Sinatra & Company, de 1971. Em 1979, uma subsequência do projeto foi lançada, intitulada Sinatra-Jobim Sessions. Em 1968, Sinatra e Jobim foram indicados ao Grammy de álbum do ano, porém perderam para o também muito bem-sucedido Sgt. Pepper's Lonely Hearts Club Band dos Beatles.\n[…]\nFrank Sinatra – vocal\n[…]\nAntonio Carlos Jobim – piano, guitarra, backing vocals",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Dia Nacional do Samba",
      "descricao": "Data comemorativa celebrada em 2 de dezembro, criada em Salvador."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Dia Nacional do Samba, dois de dezembro, surgiu em Salvador para lembrar a primeira visita à Bahia de qual compositor?",
    "resposta": "Ary Barroso",
    "distratores": [
      "Noel Rosa",
      "Cartola",
      "Pixinguinha"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_Nacional_do_Samba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_Nacional_do_Samba",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Wilson Simonal",
      "descricao": "Cantor carioca de grande sucesso nos anos 1960, conhecido pelo estilo pilantragem."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No começo dos anos setenta, a carreira de Wilson Simonal desmoronou depois que ele foi acusado de ser informante de quem?",
    "resposta": "Da ditadura militar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Wilson_Simonal",
      "https://en.wikipedia.org/wiki/Wilson_Simonal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Wilson_Simonal",
        "situacao": "ok",
        "texto": "Wilson Simonal de Castro (Rio de Janeiro, 23 de fevereiro de 1938 — São Paulo, 25 de junho de 2000) foi um cantor e compositor brasileiro de muito sucesso nas décadas de 1960 e 1970, chegando a comandar um programa na TV Tupi, Spotlight, e dois programas na TV Record, Show em Si... Monal e Vamos S'imbora, e a assinar o que foi considerado na época o maior contrato de publicidade de um artista bras\n[…]\nO processo de reabilitação do cantor na memória coletiva já é longo e não sem alguns percalços. Começou no início dos anos 90 quando Simonal obteve documentos da Presidência da República que, após vasculhar os arquivos dos serviços de informação, informavam que nada fora encontrado sobre a associação do cantor com os denominados serviços. Assim, o cantor voltou a aparecer na mídia como uma vítima do clima da ditadura militar que provocava patrulhamentos.\n[…]\nEle mostra como vários artistas da MPB flertaram com a ditadura, dentre eles Elis Regina, Jair Rodrigues, Tom Jobim, João Nogueira, o grupo Os Originais do Samba, artistas como Tonico e Tinoco, os tropicalistas, Jorge Ben, e até Chico Buarque, dentre vários outros. O autor nega que o racismo tenha sido preponderante para o ostracismo de Simonal, que, junto da grande maioria da população, era um defensor da ideia vulgar da \"democracia racial\".\n[…]\nEm 5 de setembro de 2012, o Jornal do Brasil publicou matéria na qual divulgou documentos de 1971 considerados secretos pelos militares, nos quais constavam nomes de artistas tidos como simpatizantes da ditadura e que por isso estavam supostamente sendo perseguidos por publicações como O Pasquim e A Última Hora; dentre nomes como Agnaldo Timóteo, Antônio Marcos, Clara Nunes, Wanderley Cardoso e Roberto Carlos, entre outros, estava também Wilson Simonal.\n[…]\n2005 - A Arte de Wilson Simonal\n[…]\n2004 - Wilson Simonal na Odeon (1961-1971)\n[…]\n2018 - Simonal\n[…]\n«Discos, Músicas, Letras e Vídeos de Wilson Simonal»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wilson_Simonal",
        "situacao": "ok",
        "texto": "Wilson Simonal de Castro (February 23, 1938 – June 25, 2000) was a Brazilian singer. He was a singer with great success in the 1960s and in the first half of the 1970s. He was married two times and had two sons: Wilson Simoninha and Max de Castro, both are artists today. He also had a daughter, named Patricia.\n[…]\n1963 – Wilson Simonal Tem \"algo mais\"\n[…]\n1965 – Wilson Simonal\n[…]\n1967 – Wilson Simonal ao vivo\n[…]\n1967 – Show em Simonal\n[…]\n1970 – Simona\n[…]\n1981 – Wilson Simonal\n[…]\n1998 – Bem Brasil – Estilo Simonal\n[…]\n1997 – Meus momentos: Wilson Simonal\n[…]\n2002 – De A a Z: Wilson Simonal\n[…]\n2004 – Rewind – Simonal Remix\n[…]\n2004 – Wilson Simonal na Odeon (1961–1971)\n[…]\n2004 – Série Retratos: Wilson Simonal\n[…]\n2009 – Wilson Simonal – Um Sorriso Pra Você\n[…]\n2009 – Simonal – Ninguém Sabe o Duro Que Dei"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Vinicius de Moraes",
      "descricao": "Poeta, compositor e diplomata carioca, parceiro de Tom Jobim na bossa nova."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1969, Vinicius de Moraes foi afastado à força do Itamaraty com base em qual ato da ditadura militar?",
    "resposta": "O AI-5",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vinicius_de_Moraes",
      "https://en.wikipedia.org/wiki/Vinicius_de_Moraes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vinicius_de_Moraes",
        "situacao": "ok",
        "texto": "Marcus Vinícius da Cruz de Mello Moraes (Rio de Janeiro, 19 de outubro de 1913 – Rio de Janeiro, 9 de julho de 1980), mais conhecido como Vinicius de Moraes, foi um poeta, dramaturgo, jornalista, diplomata, cantor e compositor brasileiro.\n[…]\nNo final de 1968 foi afastado da carreira diplomática, tendo sido aposentado compulsoriamente pelo Ato Institucional Número Cinco. O poeta estava em Portugal, apresentando uma série de espetáculos, alguns com Chico Buarque e Nara Leão, quando o regime militar emitiu o AI-5. O motivo apontado para o afastamento foi o seu comportamento boêmio que o impedia de cumprir as suas funções. Vinícius foi anistiado (post-mortem) pela Justiça em 1998.\n[…]\nMas o ano de 1968 marcou o fim da carreira diplomática de Vinicius de Moraes. Após 26 anos de serviços prestados ao MRE, Vinicius foi aposentado pelo Ato Institucional Nº 5, criado pela ditadura militar brasileira, fato que o magoou profundamente. No dia em que o ato era editado, Vinicius encontrava-se em Portugal onde realizava um concerto com Baden Powell. Ele ficou sabendo da medida por meio de jornalistas que o procuraram para comentários após o almoço, quando Vinicius apreciava tirar sestas.\n[…]\nEm 1969, Vinicius de Moraes publicou o livro Obra Poética e se apresentou ao lado de Maria Creuza e Dorival Caymmi em Punta del Este. O poetinha também fez recital na Livraria Quadrante, em Lisboa, apresentando, entre outros, os poemas \"A Uma Mulher\", \"O Falso Mendigo\", \"Sob o Trópico de Câncer\" (no qual trabalhou durante nove anos) e \"Soneto da Intimidade\". O evento foi gravado ao vivo e lançado em LP pelo selo Festa.\n[…]\n«TODA A POESIA DE VINICIUS DE MORAES - Brasiliana/USP»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vinicius_de_Moraes",
        "situacao": "ok",
        "texto": "Marcus Vinícius da Cruz e Mello Moraes (19 October 1913 – 9 July 1980), better known as Vinícius de Moraes (Brazilian Portuguese: [viˈnisjuz dʒi moˈɾajs]) and nicknamed \"O Poetinha\" (\"The Little Poet\"), was a Brazilian poet, diplomat, lyricist, essayist, musician, singer, and playwright. With his frequent and diverse musical partners, including Antônio Carlos Jobim, his lyrics and compositions wer\n[…]\nHis most stable musical partnership, however, remained with Toquinho, with whom he released popular albums. Their live performances in Brazil and Europe were often conducted as intimate meetings with the public. Moraes sat onstage at a table with a checked tablecloth and a bottle of whiskey, chatting and telling amusing stories to the audience in French, English, Spanish, Italian, and Portuguese.\n[…]\nMoraes was a chain smoker and alcoholic who said, \"O uísque é o melhor amigo do homem—é o cão engarrafado\" (\"Whiskey is man's best friend, it's the dog in a bottle\"), After a long period of poor health, which included several visits to rehabilitation clinics, he died at his home in Rio de Janeiro on 9 July 1980, at the age of 66, in the company of his ninth wife, Gilda de Queirós Mattoso, and the faithful Toquinho. He is buried in Rio de Janeiro's Cemitério São João Batista.\n[…]\nIn 2006, Moraes was posthumously reinstated to the Brazilian diplomatic corps. In February 2010, Brazil's lower house, the Camara dos Deputados, approved his posthumous promotion to ambassador.\n[…]\nIn 2019, singer Mart'nália released an album paying tribute to Vinicius' work, which won the Latin Grammy for Best Samba/Pagode Album.\n[…]\nVinicius de Moraes at IMDb\n[…]\nVinícius de Moraes recorded for the literary archive in the Hispanic Division at the Library of Congress on August 22, 1974 at the Library of Congress Field Office in Rio de Janeiro."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Pra Frente, Brasil",
      "descricao": "Marcha composta por Miguel Gustavo que virou hino da torcida brasileira em 1970."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A marcha Pra Frente, Brasil, de Miguel Gustavo, a dos noventa milhões em ação, foi composta para embalar qual competição?",
    "resposta": "Copa do Mundo de 1970",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Miguel_Gustavo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Miguel_Gustavo",
        "situacao": "ok",
        "texto": "Miguel Gustavo Werneck de Sousa Martins (Rio de Janeiro, 24 de março de 1922 — Rio de Janeiro, 22 de janeiro de 1972) foi um compositor, jornalista, radialista e poeta brasileiro.\n[…]\nEm 1962 compôs, com Jorge Veiga, a peça Brigitte Bardot.\n[…]\nPara a Copa do Mundo de 1970, no México, ele compôs o hino Pra Frente Brasil ao participar de um concurso organizado pelos patrocinadores das transmissões dos jogos. Os versos \"Noventa milhões em ação, pra frente Brasil, do meu coração…\" e a melodia tornaram-se símbolo da seleção canarinho, encobrindo a intenção governista do slogan ufanista utilizado pela ditadura militar na época (a letra original dizia \"Setenta milhões em ação\".\n[…]\nDepois da publicação do Censo Demográfico, foi atualizada para \"Noventa milhões em ação\").\n[…]\nNo mesmo ano de 1970, compôs a canção A saia, inspirado em Miriam Batucada, que a gravou em um compacto para a Musidisc.\n[…]\nMiguel Gustavo faleceu de infarto com apenas 49 anos de idade e seu corpo foi sepultado no Cemitério do Caju, na cidade do Rio de Janeiro.\n[…]\n1952: Baião das Mulheres, Miguel Gustavo e João S. Guimarães\n[…]\n1953: Baião do Chofer, Miguel Gustavo\n[…]\n1956: A Dança Do Didu, Miguel Gustavo\n[…]\n1956: Boate Tra La Lá, Miguel Gustavo\n[…]\n1957: A Dança do Bidú, Miguel Gustavo\n[…]\n1957: A Fúria Louca de Jean Pouchard, Miguel Gustavo\n[…]\n1957: A Menina Canta, Miguel Gustavo\n[…]\n1957: Bem Vindo Seja, Miguel Gustavo\n[…]\n1958: Brabuletas de Brasília, Miguel Gustavo, Altamiro Carrilho e Carrapicho\n[…]\n1959: Baião Triste, Altamiro Carrilho e Miguel Gustavo\n[…]\n1962: Bacardy Chá-chá-chá, Miguel Gustavo\n[…]\n1970: Bloco Da Lua, Luiz Reis e Miguel Gustavo\n[…]\n1970: Brasil Eu Adoro Você, Miguel Gustavo"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Apesar de Você",
      "descricao": "Samba de Chico Buarque lançado em 1970 e depois proibido pela censura."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Liberado em 1970 e logo depois proibido, o samba Apesar de Você foi lido pelos censores como recado a qual presidente militar?",
    "resposta": "Emílio Garrastazu Médici",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Apesar_de_Voc%C3%AA"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Apesar_de_Voc%C3%AA",
        "situacao": "ok",
        "texto": "\"Apesar de Você\" é uma canção escrita e originalmente interpretada pelo cantor e compositor brasileiro Chico Buarque em 1970, lançada inicialmente como compacto simples naquele mesmo ano. A canção, por lidar implicitamente com a falta de liberdades durante a ditadura militar, foi proibida de ser executada pelas rádios brasileiras pelo governo do general Emílio Garrastazu Médici. No entanto, seria \n[…]\nA censura de \"Apesar de Você\" teve um impacto negativo no relacionamento entre Chico e os censores, que duraria até o final da ditadura. Chico seria implacavelmente marcado pelos censores, sofrendo suas letras as mais absurdas rejeições. A situação chegou ao ponto em que ele teve que se disfarçar sob os pseudônimos de Julinho da Adelaide e Leonel Paiva, para aprovar três composições, uma das quais, \"Acorda Amor\", foi incluída no LP Sinal Fechado de 1974.\n[…]\nJessen mantinha um ótimo relacionamento com os militares, o que possibilitou que ele fizesse um acordo com o governo para colocar um fim ao mal-entendido e provar que Clara não teve qualquer intenção político-partidária ao regravar \"Apesar de Você\": ficou combinado que a cantora gravaria, num compacto simples, o \"Hino das Olimpíadas do Exército\", composto por Miguel Gustavo, publicitário responsável por \"Pra frente, Brasil\".\n[…]\nAlém de Clara Nunes, a canção também seria regravada mais tarde por Maria Bethânia, Benito Di Paula e Beth Carvalho. A banda curitibana Borralheira regravou a canção 'Apesar de você' com nova roupagem e o estilo punk tradicional do grupo musical, a obra estreou em 31 de outubro de 2020. Os artistas fizeram reverência ao mestre Chico Buarque com a releitura de \"Apesar de você\" inclusive em clipe.\n[…]\n\"Apesar de Você\" no site oficial de Chico Buarque\n[…]\n'Apesar de Você' canção de Chico Buarque Clipe musical por banda Borralheira."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Secos & Molhados",
      "descricao": "Grupo de rock brasileiro dos anos 1970 que revelou Ney Matogrosso, famoso pelos rostos pintados."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que cantor de voz aguda e performance ousada formava o Secos e Molhados com João Ricardo e Gérson Conrad?",
    "resposta": "Ney Matogrosso",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Secos_%26_Molhados",
      "https://en.wikipedia.org/wiki/Secos_%26_Molhados"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Secos_%26_Molhados",
        "situacao": "ok",
        "texto": "Secos & Molhados foi uma banda de rock brasileira da década de 1970, tendo como formação clássica João Ricardo (vocais, violão e harmônica), Ney Matogrosso (vocais) e Gérson Conrad (vocais e violão). O som da banda consiste em uma mistura de rock e balé com ritmos brasileiros, como MPB e o samba. João havia criado o nome da banda sozinho em 1970, até juntar-se com as diferentes formações nos anos \n[…]\nSo álbum de estréia, Secos e Molhados I (1973), foi possível graças às tais performances que despertaram interesse nas gravadoras, e projetou o grupo no cenário nacional, vendendo mais de um milhão de cópias no país. Desentendimentos financeiros, entretanto, fizeram essa formação se desintegrar em 1974, ano do Secos & Molhados II, embora João Ricardo tenha prosseguido com a marca em Secos & Molhados III (1978), Secos e Molhados IV (1980), A Volta do Gato Preto (1988), Teatro?\n[…]\nFred e Pitoco, em julho de 1971, resolvem seguir carreira solo e João Ricardo sai à procura de um vocalista. Por indicação de Heloísa Orosco Borges da Fonseca (Luhli), conheceu Ney Matogrosso, que mudou-se do Rio de Janeiro para São Paulo. Depois de alguns meses, Gérson Conrad, vizinho de João Ricardo, foi incorporado ao grupo.\n[…]\nApós o fim do grupo Secos & Molhados, os três membros seguiram em carreira solo. Ney Matogrosso lançou no ano seguinte, em 1975, seu primeiro disco solo com o nome de Água do Céu - Pássaro (recheado de experimentalismos musicais) e com o sucesso \"América do Sul\". João Ricardo lançou também em 1975 seu disco homônimo, mais conhecido por Disco Rosa/Pink Record. Gérson Conrad juntou-se a Zezé Motta e lançou um disco também em 1975.\n[…]\nJoão Ricardo adquiriu os direitos autorais sob o nome Secos & Molhados, após algumas brigas na justiça, e saiu à busca de novos músicos para que a banda tivesse novas formações."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Secos_%26_Molhados",
        "situacao": "ok",
        "texto": "Secos & Molhados (English: Dry Ones & Wet Ones) was a Brazilian band formed in 1971 and best known for their first two studio albums that helped launch singer Ney Matogrosso's career. The other two members were João Ricardo, founder and main songwriter of the group, and pt:Gérson Conrad.\n[…]\nThe first line-up, consisting of João Ricardo, Gérson Conrad, and Ney Matogrosso, plus various musicians such as John Flavin (guitar), Willy Verdaguer (electric bass), Marcelo Frias (drums), Sergio Rosadas (flute), plus special participation of Zé Rodrix was short-lived - only two albums were released, one in 1973 and one in 1974, both self-titled. This line-up achieved success, appearing in several TV broadcasts, and remains highly influential today.\n[…]\nMatogrosso's unusual high-pitched voice helped create a distinct identity as well as the band's eccentric heavy make-up and outfits (developed by Matogrosso himself, with influences ranging from Brazilian indigenous peoples to kabuki theater). In typical Tropicália fashion, Secos & Molhados's style was one marked by a broad fusion of genres, including glam rock, MPB, fado, and experimental music, among others.\n[…]\nFrom 1974 onwards, the group remained active, with only João Ricardo as the only steady member. They have released several albums through the years. Their most recent release is an autobiographic album called \"Chato-boy\", featuring founding member João Ricardo with the addition of a new member - guitarist Daniel Iasbeck.\n[…]\nSecos & Molhados (1973)\n[…]\nSecos & Molhados II (1974)\n[…]\nSecos e Molhados III (1978)\n[…]\nSecos e Molhados IV (1980)\n[…]\n- Secos & Molhados Site Official (Portuguese)\n[…]\n- Secos & Molhados Official Channel\n[…]\n- Secos & Molhados (Portuguese)\n[…]\n- Secos e Molhados (Portuguese)\n[…]\n- Secos & Molhados Facebook Official (Portuguese)"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Novos Baianos",
      "descricao": "Grupo musical baiano dos anos 1970 que misturou samba, choro, frevo e rock."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que guitarrista, então casado com Baby Consuelo, integrava os Novos Baianos ao lado de Moraes Moreira?",
    "resposta": "Pepeu Gomes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Novos_Baianos",
      "https://en.wikipedia.org/wiki/Novos_Baianos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Novos_Baianos",
        "situacao": "ok",
        "texto": "Novos Baianos é uma banda  brasileira de Rock e MPB originário da Bahia, ativo em seu auge entre os anos de 1969 e 1979, que se reuniu em 1990, 1996, 2015 e 2023.\n[…]\nContava, em sua formação original, com Moraes Moreira (compositor, vocal e violão), Baby do Brasil (vocal), Pepeu Gomes (guitarra), Paulinho Boca de Cantor (vocal), Jorginho Gomes (bateria e bandolim), Bola e Baxinho (percussão), Dadi (baixo) e Luiz Galvão (letras).\n[…]\nBaby Consuelo conheceu os dois (Moraes e Galvão) em um bar, enquanto passava as férias em Salvador. Mais tarde, Paulinho Boca de Cantor conheceu os três, e se uniu a eles. Dos membros que formariam o grupo mais tarde, apenas Pepeu Gomes era músico profissional e havia passado por diversas bandas anteriormente.\n[…]\nPepeu Gomes foi incorporado definitivamente ao grupo após seu casamento com a vocalista da banda, Baby Consuelo, e, ao lado de Moraes Moreira, atua como arranjador musical do grupo.\n[…]\nDesfalcados de Moraes Moreira, compositor principal ao lado de Galvão, o grupo faz de Pepeu Gomes o exemplo instrumental. O disco seguinte, Vamos pro Mundo, foi lançado ainda em 1974 pela Som Livre e tinha como foco as faixas instrumentais em choro - Rock, baião e samba.\n[…]\nEm novembro de 2019, estreia o musical Novos Baianos, com direção sonora de Davi Moraes e Pedro Baby.\n[…]\nEm setembro de 2023, Baby do Brasil, Pepeu Gomes e Paulinho Boca de Cantor se apresentam 9ª edição do Coala Festival, no Memorial da América Latina, em São Paulo. O show deu início às comemorações dos 50 anos do álbum Acabou Chorare, lançado em 1972.\n[…]\nPepeu Gomes – guitarra (1969–1979, 1990, 1996–1999, 2015–2018, 2023–presente)\n[…]\nCanal de Novos Baianos no YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Novos_Baianos",
        "situacao": "ok",
        "texto": "Novos Baianos (Brazilian Portuguese: [ˈnɔvuz bajˈɐ̃nus]; English: 'New Bahians') are a Brazilian rock and MPB group founded in Salvador, Bahia in 1969. The group was active between 1969 and 1979, enjoying success throughout the 1970s. The group had reunions in 1997, 2015, and 2020. Together, the group recorded eight full-length studio albums, as well as two live albums.\n[…]\nThe group's original line-up consisted of Moraes Moreira (vocals and acoustic guitar), Paulinho Boca de Cantor (vocals), Pepeu Gomes (electric guitar), Baby Consuelo (vocals and percussion), and Luiz Galvão (lyrics).\n[…]\nThe group regularly collaborated with A Cor do Som, a sub-group within Novos Baianos, which consisted of Dadi Carvalho (bass), Jorginho Gomes (cavaquinho, drums and percussion), and José \"Baixinho\" Roberto (drums and percussion). Luís Bolacha (percussion) additionally contributed to the group early in their career.\n[…]\nOriginally, the group only played with Pepeu Gomes and Jorginho Gomes during their live performances. However, as time progressed, Gomes started to gain an increasingly important role in the group. After he married Consuelo, Gomes became a full-fledged member of the group and began arranging songs along with Moreira.\n[…]\nIn 1976, Carvalho left the group to begin recording and releasing original music with A Cor do Som. In his place, Novos Baianos substituted Didi, the brother of Pepeu Gomes, as the group's bassist. However, the group disbanded in 1979 due to various band members starting their own solo careers. Despite the band's dissolution, Novos Baianos' members reunited many times to celebrate special events (most notably in 1997 and 2015).\n[…]\nMoraes Moreira – vocals, acoustic guitar (died 2020)\n[…]\nPepeu Gomes  – electric guitar\n[…]\nJorginho Gomes – cavaquinho, drums, percussion\n[…]\n1974 – Novos Baianos (Continental)\n[…]\nNovos Baianos discography at Discogs\n[…]\nNovos Baianos at IMDb"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Bateria de escola de samba",
      "descricao": "Conjunto de percussionistas que dá o ritmo do desfile de uma escola de samba."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na bateria de uma escola de samba, qual é o tambor grande, de som grave, que marca o pulso do ritmo?",
    "resposta": "Surdo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Surdo",
      "https://en.wikipedia.org/wiki/Surdo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Surdo",
        "situacao": "ok",
        "texto": "Chama-se pessoa surda (ou surdo) aquela que possui algum grau de surdez, seja ele leve, moderado, severo ou profundo.\n[…]\nSegundo artigo: Vida associativa - mostra que todo o surdo tem o direito à participação na Vida Associativa, devendo ser o objectivo primário de toda a Associação de surdos a promoção da Vida da Comunidade Surda, a fim de que a cultura surda seja conservada e desenvolvida.\n[…]\nQuinto artigo: Educação - todo o surdo tem direito à igualdade de oportunidades na educação, devendo essa prosseguir o desenvolvimento da personalidade surda, motivando o conhecimento da cultura, história e língua da Comunidade Surda. À Comunidade Surda deve ser reconhecido o direito de criar e de gerir os seus próprios estabelecimentos de ensino e formação.\n[…]\nOitavo artigo: Formação Profissional e Emprego - o surdo tem direito a escolher o seu emprego e formação profissional. Ninguém pode ser privado do seu emprego em razão da sua Surdez.\n[…]\nNono artigo: Serviços de Interpretação - todo o surdo tem direito ao serviço gratuito de intérpretes de língua gestual.\n[…]\nDécimo primeiro artigo: Informação e Cultura - todo o surdo tem direito ao acesso à informação e à cultura, através da língua gestual.\n[…]\nDécimo terceiro artigo: Medicina - a pessoa surda tem direito de decidir submeter-se ou não a qualquer intervenção ou tratamento médico-cirúrgico. Nenhum tratamento da surdez, que possa afectar a sua integridade pessoal, pode ser imposto a um menor surdo.\n[…]\nDécimo quinto artigo: Actividades Culturais, Desportivas e de Lazer - mostra este artigo que todo o surdo tem direito a aceder às actividades culturais, desportivas e de lazer."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Surdo",
        "situacao": "ok",
        "texto": "The surdo is a bass drum or a large floor tom-like drum used in many kinds of Brazilian music, such as Axé/Samba-reggae and samba, where it plays the lower parts from a percussion section. The instrument was created by Alcebíades Barcelos during the 1920s and 1930s as part of his contributions with the first samba school in Rio de Janeiro, Deixa Falar. It is also notable for its association with t\n[…]\nA typical carnival samba bateria in Rio de Janeiro has three distinguishable surdo parts, each played by a drum that has a distinctive tuning due to its distinct size. The pattern of these three surdo parts is the rhythm that propels the samba.\n[…]\nThe surdo is the largest and deepest-pitched drum in the bateria—it plays the primeira (Portuguese: first) or marcação (Portuguese: marker) part. This surdo is typically between 22\" and 26\" in diameter. The primeira pulse is the entire bateria's rhythmic reference. It sounds on the second beat of the samba's basic \"one, two\" rhythm, and this surdo may also sound pick-up notes to start the music.\n[…]\nThe smallest, highest-pitched surdo, generally between 14\" and 18\" in diameter, plays the terceira (Portuguese: third) or cutador (Portuguese: cutter) part. The terceira \"cuts\" across the basic pulse of the other two surdo parts with a complex pattern of fills and syncopations. The feel of the bateria is driven by the terceira's \"swing\". The only surdo player with even limited room to improvise is the terceira player.\n[…]\nSurdos are used by samba-reggae and axé music groups of northeastern Brazil. Samba-reggae usually has two (or even 3) surdo tunings, the lowest tuning playing the pulse on 2 and the higher tuning playing the 1. Middle surdos, (tuned either as the 2 or slightly higher), playing any number of counterpatterns. The middle surdos are played with two mallets in samba-reggae to allow for more complex rhythms.\n[…]\nHow to build a Surdo"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Noel Rosa",
      "descricao": "Sambista e compositor carioca dos anos 1930, autor de Conversa de Botequim e Feitiço da Vila."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Mesmo deixando mais de duzentas canções, Noel Rosa morreu de tuberculose em 1937. Com quantos anos?",
    "resposta": "26 anos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Noel_Rosa",
      "https://en.wikipedia.org/wiki/Noel_Rosa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Noel_Rosa",
        "situacao": "ok",
        "texto": "Noel de Medeiros Rosa (Rio de Janeiro, 11 de dezembro de 1910 – Rio de Janeiro, 4 de maio de 1937) foi um sambista, cantor, compositor, bandolinista e violonista brasileiro, considerado um dos mais importantes artistas da música no Brasil.\n[…]\nMorto prematuramente aos 26 anos em decorrência de tuberculose, deixou um conjunto de canções que se tornaram clássicas dentro do cancioneiro popular brasileiro.\n[…]\nRevelou-se um talentoso cronista do cotidiano, com uma sequência de canções que primam pelo humor e pela veia crítica. Orestes Barbosa, exímio poeta da canção, seu parceiro em Positivismo, o considerava o \"rei das letras\". Também foi protagonista de uma curiosa polêmica — Noel Rosa X Wilson Batista — travada através de canções com seu rival Wilson Batista.\n[…]\nFaleceu repentinamente em sua casa, no bairro de Vila Isabel, no ano de 1937, aos 26 anos. Deixou sua esposa viúva e desesperada. Lindaura, sua mulher, e Dona Martha, sua mãe, cuidaram de Noel até o fim. Seu corpo encontra-se sepultado no Cemitério do Caju, no Rio de Janeiro.\n[…]\nNoel Rosa já foi retratado como personagem no cinema e na televisão, interpretado por Chico Buarque no filme O Mandarim (1995) e por Rafael Raposo no filme Noel - Poeta da Vila (2006).\n[…]\nEm 2010, cem anos depois do seu nascimento, o GRES Unidos de Vila Isabel, escola de samba sediada na Zona Norte do Rio de Janeiro, no bairro de Vila Isabel, levou Noel Rosa como seu enredo do carnaval de 2010. Fez-se um desfile em sua homenagem, com o samba intitulado Noel: A Presença do \"Poeta da Vila\", de autoria do compositor Martinho da Vila. O desfile realizado pela Unidos de Vila Isabel ocorreu na segunda-feira de carnaval, dia 15 de fevereiro de 2010.\n[…]\nNoel Rosa compôs 259 canções:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Noel_Rosa",
        "situacao": "ok",
        "texto": "Noel de Medeiros Rosa (December 11, 1910 – May 4, 1937) was a Brazilian singer-songwriter. One of the greatest names in Brazilian popular music, Noel gave a new twist to samba, combining its Afro-Brazilian roots with a more urban, witty language and making it a vehicle for ironic social commentary.\n[…]\nRosa was born in Rio de Janeiro into a middle-class family of the Vila Isabel neighbourhood. An accident with a forceps at his birth caused a disfigured chin. He learned to play the mandolin while still a teenager, and soon moved on to the guitar. Although Noel started medicine studies, he gave most of his attention to music and would spend whole nights in bars drinking and playing with other samba musicians.\n[…]\nSoon he started composing sambas, and he had his breakthrough with \"Com que roupa?\", one of the biggest hits of 1931 and the first in a string of memorable compositions. Noel was a good friend of Cartola, who took care of him several times at his house on the Mangueira slum after some nights of heavy drinking. In the early 1930s Noel Rosa started to show signs of tuberculosis. He would occasionally leave for treatment in mountain resorts, but always ended up coming back to Rio and the nightlife.\n[…]\nIn 1934, Rosa married Lindaura Martins, a seventeen-year-old neighbour, but that didn't keep him from having affairs with other women. Rosa was a heavy smoker, and most of his photographs show him with a cigarette hanging from his lower lip. By the later 1930s his health had seriously deteriorated, and he died of tuberculosis in 1937 at the age of 26.\n[…]\n\"Último desejo\" (1937)\n[…]\nSongbook Noel Rosa 1, 2 e 3 (Almir Chediak)\n[…]\nNoel Rosa: Para Ler e Ouvir (Eduardo Alcantara de Vasconcellos)\n[…]\nO Jovem Noel Rosa (Guca Domenico)\n[…]\nA Geração do Ouro Solar, Noel Rosa, Alquimia e Tarot (Lui Morais)"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Cavaquinho",
      "descricao": "Pequeno instrumento de cordas de origem portuguesa, essencial no samba e no choro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas cordas tem o cavaquinho, instrumento que sustenta a harmonia do choro e do samba?",
    "resposta": "Quatro",
    "distratores": [
      "Três",
      "Cinco",
      "Seis"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cavaquinho",
      "https://en.wikipedia.org/wiki/Cavaquinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cavaquinho",
        "situacao": "ok",
        "texto": "O cavaquinho (pai de outros modelos como a braguinha, braga, machete, machetinho ou machete-de-braga) é um instrumento musical de cordas (cordofone) originário da província portuguesa de Minho, que mais tarde foi amplamente introduzido na cultura popular de Braga pelos nobres biscainhos, de onde foi posteriormente levado à outras regiões, como: Brasil, Cabo Verde, Moçambique, Havaí e Madeira.\n[…]\nÉ formado por um corpo oco e chato, em forma de oito, tem um braço que possui trastes que o torna um instrumento temperado, composto de quatro cordas (de tripa ou com materiais sintéticos como nylon, nylgut, fluorocarbono),\n[…]\nCom 12 trastos na forma original o cavaquinho tem uma afinação própria da cidade de Braga que é ré-lá-si-mi. No entanto, as suas quatro cordas de tripa ou de metal, são também afinadas em sol-sol-si-ré, lá-lá-dó#-mi, dó-sol-lá-ré, no Brasil como ré-sol-si-ré ou, mais raramente, em ré-sol-si-mi conforme o país onde é utilizado e de acordo com os costumes etnográficos de cada região portuguesa.\n[…]\nJúlio Pereira, um dos músicos portugueses mais renomados da actualidade, tem ajudado na divulgação do cavaquinho como instrumento pleno de versatilidade e que tem dado frutos.\n[…]\nNo Brasil este instrumento é usado nas congadas e forma, junto com o bandolim, a flauta, o  violão de 7 cordas, o violão de 6 cordas e o pandeiro os conjuntos regionais para a execução de choros.\n[…]\nWaldir Azevedo foi possivelmente o mais conhecido músico deste instrumento no Brasil, nas décadas de 60 a 80, no domínio da música instrumental, o choro. Em décadas anteriores, um influente intérprete do cavaquinho foi Augusto Sardinha, popularmente conhecido como Garoto.\n[…]\nAs ilhas do Hawai têm um instrumento baseado no cavaquinho chamado ukulele, também com quatro cordas e um formato semelhante ao do cavaquinho, que se julga ser uma alteração do cavaquinho, levado por emigrantes portugueses em 1879."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cavaquinho",
        "situacao": "ok",
        "texto": "The cavaquinho (European Portuguese pronunciation: [kɐvɐˈkiɲu]) is a small Portuguese string instrument in the European guitar family, with four wires or gut strings.\n[…]\nThe cavaquinho is a very important instrument in Brazilian samba and choro music. It is played with a pick, with sophisticated percussive strumming beats that connect the rhythm and harmony by playing the rhythm “comping”. Some of the most important players and composers of the Brazilian instrument are Waldir Azevedo, Paulinho da Viola, and Mauro Diniz.\n[…]\nIn Cape Verde the cavaquinho was introduced in the 1930s from Brazil. The present-day Cape-Verdean cavaquinho is very similar to the Brazilian one in dimensions and tuning. It is generally used as a rhythmic instrument in Cape-Verdean music genres (such as morna, coladeira, mazurka) but it is occasionally used as a melodic instrument.\n[…]\nThe cuatro is a family of larger 4-stringed instruments derived from the cavaquinho that are popular in Latin-American countries in and around the Caribbean. Versions of the iconic Venezuelan cuatro are very similar to the Brazilian cavaquinho, with a neck laid level with the sound box, like a Portuguese cavaquinho.\n[…]\nThe origins of this Portuguese instrument are elusive. Author Gonçalo Sampaio holds that the cavaquinho and the guitar may have been brought to Braga by the Biscayans.\n[…]\nRichards, Tobe A. (2008). The Cavaquinho Chord Bible: DGBD Standard Tuning 1,728 Chords. United Kingdom: Cabot Books. ISBN 978-1-906207-09-0. – A comprehensive chord dictionary instructional guide for the Brazilian and Portuguese cavaquinho.\n[…]\n\"All the Cavaquinhos types\". Associação Cultural Museu Cavaquinho."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Luiz Gonzaga",
      "descricao": "Sanfoneiro, cantor e compositor pernambucano, chamado de Rei do Baião."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O chapéu de couro que Luiz Gonzaga usava nos shows foi inspirado no visual de qual cangaceiro?",
    "resposta": "Lampião",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Luiz_Gonzaga",
      "https://en.wikipedia.org/wiki/Luiz_Gonzaga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Luiz_Gonzaga",
        "situacao": "ok",
        "texto": "Luiz Gonzaga do Nascimento (Exu, 13 de dezembro de 1912 – Recife, 2 de agosto de 1989) foi um cantor, compositor e multi-instrumentista brasileiro. Também conhecido como o Rei do Baião, foi considerado uma das mais completas, importantes e criativas figuras da música popular brasileira.\n[…]\nLuiz Gonzaga ganhou notoriedade com as antológicas canções \"Asa Branca\" (1947), \"Juazeiro\" (1948) e \"Baião de Dois\" (1950).\n[…]\nLutou no sertão nordestino, combatendo cangaceiros, coiteiros e coronéis. Apesar disso, alimentou grande admiração pelo líder dos cangaceiros, Virgulino Ferreira (o \"Lampião\"), passando a adotar uma vestimenta inspirada nele ao se profissionalizar.\n[…]\nEm 1945 conheceu em uma casa de shows da área central do Rio uma cantora de coro e samba, chamada Odaléia Guedes dos Santos, conhecida por Léia. A moça estaria supostamente grávida de um filho ao conhecer Luiz. Foram morar em uma casa alugada, e Luiz assumiu a paternidade da criança, dando-lhe seu nome: Luiz Gonzaga do Nascimento Júnior, que acabaria também seguindo a carreira artística, tornando-se o cantor Gonzaguinha.\n[…]\nOs anos se passaram e Gonzaguinha jamais aceitou que Luiz não o tivesse criado. Luiz passou a visitar cada vez menos o rapaz, e, sempre que se encontravam, discutiam. Dina e Xavier tentavam aproximar os dois, mas Helena revelou que Luiz era estéril e não era o pai do rapaz. Isso acarretava brigas entre ele e Helena, que usava a filha Rosa, dizendo que se ele não parasse de visitar o filho, Luiz não veria mais a menina.\n[…]\nAguiar, Ronaldo Conde (2013). «Jackson do Pandeiro e Luiz Gonzaga - O Rei do Ritmo e o O  Rei do Baião». Os Reis da Voz. Rio de Janeiro: Casa da Palavra. ISBN 978-85-773-4398-0\n[…]\nGonzagão Online — A Vida, História e a Obra de Luiz Gonzaga, O Rei do Baião e Pernambucano do Século"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Luiz_Gonzaga",
        "situacao": "ok",
        "texto": "Luiz Gonzaga do Nascimento (standard orthography 'Luís'; Portuguese pronunciation: [luˈiz ɡõˈzaɡɐ]; December 13, 1912 – August 2, 1989) was a Brazilian singer, songwriter, musician and poet and one of the most influential figures of Brazilian popular music in the twentieth century. He has been credited with having presented the rich universe of Northeastern musical genres to all of Brazil, having \n[…]\nAccording to Caetano Veloso, he was the first significant cultural event with mass appeal in Brazil. Luiz Gonzaga received the Shell prize for Brazilian Popular Music in 1984 and was only the fourth artist to receive this prize after Pixinguinha, Antônio Carlos Jobim and Dorival Caymmi. The Luiz Gonzaga Dam was named in his honor.\n[…]\nGonzaga's son, Luiz Gonzaga do Nascimento Jr, known as Gonzaguinha (1945–1991), was also a noted Brazilian singer and composer.\n[…]\nAfter noticing that the north-eastern people living in Rio de Janeiro missed the music from their home states, he started to integrate traditional (forró) music rhythms and instruments in his work. At Ary Barroso's talent show, Luiz Gonzaga played the Xamego \"Vira e Mexe\" and was acclaimed by the audience and by the host, who gave him the highest score. After discovering this niche in the market, Gonzaga became a regular at radio shows and started making records.\n[…]\nIn the 1970s and 1980s, he slowly re-emerged, partly due to covers of his songs by famous artists like Geraldo Vandré, Caetano Veloso, Gilberto Gil, his son Gonzaguinha and Milton Nascimento.\n[…]\nGonzaga died of natural causes around 8:00 BRT on August 2, 1989, at the age of 76.\n[…]\nGonzagao Online (Portuguese)\n[…]\nRei do Baião (Portuguese)"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "O Fino da Bossa",
      "descricao": "Programa musical da TV Record dos anos 1960, apresentado por Elis Regina e Jair Rodrigues."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que programa musical da TV Record, apresentado por Elis Regina e Jair Rodrigues, estreou em 1965?",
    "resposta": "O Fino da Bossa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Fino_da_Bossa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Fino_da_Bossa",
        "situacao": "ok",
        "texto": "O Fino da Bossa foi um programa produzido e exibido pela TV Record São Paulo, apresentado por Elis Regina e Jair Rodrigues, e com a direção musical de Walter Silva. Ficou no ar entre 1965 e 1967, e teve tanto sucesso que gerou a gravação de três LPs ao vivo pela gravadora Philips: Um deles, Dois na Bossa, foi o primeiro disco brasileiro a vender um milhão de cópias. Antes, em 1964 o programa teve \n[…]\nDevido a uma queda de audiência, Ronaldo Bôscoli e Miele assumiram a direção do programa para tentar salva-lo.\n[…]\nEm 1994, foi lançado Elis Regina ‎– No Fino Da Bossa, um box contendo gravações de Elis gravadas no programa, por meio da gravadora Velas.\n[…]\nEm 2018, a Record exibiu um especial com o nome do programa que contou com importantes nomes da música brasileira como Alcione, Gilberto Gil, Elza Soares, Marcos Valle, dentre outros. A apresentação foi de Pedro Mariano, filho de Elis Regina, e Luciana Mello, filha de Jair Rodrigues. O especial foi reprisado no dia 24 de dezembro de 2020.\n[…]\nArtigo O Fino da Bossa na página da Rádio Cultura Brasil"
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
