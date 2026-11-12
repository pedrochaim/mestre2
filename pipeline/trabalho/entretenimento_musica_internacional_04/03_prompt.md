Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Música Internacional** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "David Bowie",
      "descricao": "Cantor, compositor e ator britânico, criador do personagem Ziggy Stardust, morto em 2016"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Dois dias depois de lançar o álbum Blackstar, David Bowie morreu de câncer. Em janeiro de que ano?",
    "resposta": "2016",
    "distratores": [
      "2014",
      "2015",
      "2017"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/David_Bowie",
      "https://en.wikipedia.org/wiki/Blackstar_(album)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/David_Bowie",
        "situacao": "ok",
        "texto": "David Robert Jones (8 January 1947 – 10 January 2016), known as David Bowie, was an English singer, songwriter and actor. Regarded as among the most influential musicians of the 20th century, he was known for his frequent reinvention and visual presentation, and is often referred to as the \"chameleon of rock\". His music, stagecraft and fashion have had a significant impact on popular culture.\n[…]\nHis final studio album, Blackstar, released two days before his death in 2016, was analysed as a powerful farewell to his fans.\n[…]\nBlackstar was released on 8 January 2016, Bowie's 69th birthday, and was met with critical acclaim. He died two days later, after which Visconti called the album a \"parting gift\" for his fans before his death. Several reporters and critics subsequently noted that most of the lyrics on the album seem to revolve around his impending death, with CNN noting that the album \"reveals a man who appears to be grappling with his own mortality\".\n[…]\nAfter his death, Newsweek reported that Bowie had left \"a long list of unscheduled musical releases planned\", divided into eras. Following Five Years (1969–1973), the second of these releases was Who Can I Be Now? (1974–1976) (2016), which was followed by A New Career in a New Town (1977–1982) in 2017, Loving the Alien (1983–1988) in 2018, Brilliant Adventure (1992–2001) in 2021, which saw the official release of the shelved album Toy, and I Can't Give Everything Away (2002–2016) in 2025.\n[…]\nBowie died of liver cancer in his New York City apartment on 10 January 2016. He had been diagnosed 18 months earlier, but he had not made his condition public.\n[…]\nIn 2016, Belgian amateur astronomers at MIRA Public Observatory created a \"Bowie asterism\" of seven stars which had been in the vicinity of Mars at the time of Bowie's death; the \"constellation\" forms the lightning bolt on Bowie's face from the cover of his Aladdin Sane album."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Blackstar_(album)",
        "situacao": "ok",
        "texto": "Blackstar (stylised as ★) is the twenty-sixth and final studio album by the English musician David Bowie. Released on 8 January 2016, Bowie's 69th birthday, the album was recorded in secret in New York City with his longtime co-producer Tony Visconti and a group of local jazz musicians: Donny McCaslin (saxophone), Jason Lindner (piano), Tim Lefebvre (bass) and Mark Guiliana (drums). Ben Monder and\n[…]\nBlackstar and No Plan were included on the last instalment of Bowie's era box set series, I Can't Give Everything Away (2002–2016), which was released on 12 September 2025.\n[…]\nBlackstar was already on course to debut at number one on the UK Albums Chart prior to the announcement of Bowie's death on 10 January 2016, according to the Official Charts Company. The album debuted at number one after selling 146,000 copies in the first week (a week that saw four other Bowie albums in the Top 10 and a further seven in the Top 40, the latter equalling Elvis Presley's chart record) and became his tenth number one album in the UK.\n[…]\nThe album remained three weeks at number one, falling to number two behind another Bowie album, the compilation Best of Bowie (2002), which became the first-ever album to get to number one in the UK because of streaming. As of January 2018, the album has sold 446,000 copies in the United Kingdom. Bowie was the biggest-selling vinyl artist of 2016 in the UK, with five albums in the vinyl Top 30, including Blackstar as the number one vinyl album of the year.\n[…]\nFollowing Blackstar, the McCaslin Quartet reunited for McCaslin's 2016 album Beyond Now, which was dedicated to and inspired by Bowie. The album includes covers of two Bowie songs: \"Warszawa\" from Low (1977) and \"A Small Plot of Land\" from Outside (1995). The band had begun performing \"Warszawa\" following Bowie's death as a tribute to him. Blackstar also inspired the sound of McCaslin's 2018 album Blow."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/David_Bowie",
        "situacao": "ok",
        "texto": "David Bowie, nome artístico de David Robert Jones (Londres, 8 de janeiro de 1947 — Nova Iorque, 10 de janeiro de 2016), foi um cantor, compositor, ator e produtor musical britânico.\n[…]\nEm agosto de 2015, foi anunciado que Bowie estaria compondo músicas para um musical da Broadway musical baseado no desenho animado SpongeBob SquarePants. David escreveu e gravou a faixa-título da série de televisão The Last Panthers, que foi ao ar em novembro do mesmo ano. Ainda em novembro, esta música foi lançada como single e videoclipe e faixa-título do álbum Blackstar, cujo lançamento foi programado para janeiro de 2016 e contendo influências do krautrock.\n[…]\nBlackstar foi lançado em 8 de janeiro de 2016, no sexagésimo nono aniversário de Bowie, e recebeu aclamação imediata da crítica. Após a morte de David em 10 de janeiro, o produtor Tony Visconti revelou que Bowie planejou o álbum para ser seu canto do cisne, e um \"presente de despedida\" para seus fãs antes de morrer. Posteriormente, jornalistas e críticos notaram a morte é tema iminente em várias das letras.\n[…]\nNa noite do dia 10 de janeiro de 2016, dois dias após o seu sexagésimo nono aniversário e o lançamento do álbum Blackstar, Bowie morreu em seu apartamento em Nova York, vítima de câncer de fígado. O músico foi diagnosticado com a doença dezoito meses antes, mas optou não anunciar seu estado de saúde para o público. O diretor de teatro belga Ivo van Hove, com quem trabalhou no musical Off-Broadway Lazarus, disse que Bowie evitou assistir aos ensaios pelo avanço da doença.\n[…]\n1967: David Bowie\n[…]\n1969: David Bowie\n[…]\n2016: Blackstar\n[…]\nDavid Bowie no Myspace\n[…]\nDavid Bowie (em inglês) no AllMusic\n[…]\nDavid Bowie no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "David Bowie",
      "descricao": "Cantor, compositor e ator britânico, criador do personagem Ziggy Stardust, morto em 2016"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1981, num estúdio na Suíça, David Bowie se juntou ao Queen para gravar que canção?",
    "resposta": "Under Pressure",
    "fonte": [
      "https://en.wikipedia.org/wiki/Under_Pressure"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Under_Pressure",
        "situacao": "ok",
        "texto": "\"Under Pressure\" is a song by the British rock band Queen and singer David Bowie. Released as a single in October 1981, it was later included on Queen's tenth studio album Hot Space (1982). The song reached number one on the UK Singles Chart, becoming Queen's second number-one hit in their home country and Bowie's third; it also charted in the top 10 in more than 10 other countries.\n[…]\n\"Under Pressure\" was recorded at Mountain Studios in Montreux, Switzerland, in September 1981. Queen, working on their 1982 album Hot Space, had been working on a song called \"Feel Like\", but were not satisfied with the result.\n[…]\nBowie sang backing vocals for Queen's song \"Cool Cat\", but his vocals were removed from the final song because he was not satisfied with his performance. Afterwards, they worked together for a while and wrote \"Under Pressure\". It was credited as being co-written by the five musicians. The scat singing that dominates much of the song is evidence of the jam-beginnings as improvisation.\n[…]\n\"Under Pressure\" has received critical acclaim since its release, with multiple publications ranking it among Queen and Bowie's best songs and among the greatest songs of all time. On release, Sandy Robertson of Sounds called \"Under Pressure\" the \"cornerstone\" of its parent album.\n[…]\nThe 2006 VH1 Rock Honors at the Mandalay Bay Events Center in Las Vegas, featured Queen + Paul Rodgers performing \"Under Pressure\" along with \"The Show Must Go On\", \"We Will Rock You\" and \"We Are the Champions\" as a live broadcast.\n[…]\n\"Under Pressure\" (Rah Mix)\n[…]\nIn the UK, \"Under Pressure\" was Queen's second number-one hit and Bowie's third. Queen's smash hit \"Bohemian Rhapsody\" reached number one in November 1975, just two weeks after Bowie's \"Space Oddity\" had done the same. Bowie also topped the British charts in August 1980 with \"Ashes to Ashes\", his answer song to \"Space Oddity\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Under_Pressure",
        "situacao": "ok",
        "texto": "\"Under Pressure\" é um single da banda britânica Queen juntamente com o cantor britânico David Bowie, lançado em outubro de 1981. Mais tarde, a canção foi incluída no álbum Hot Space, lançado em 1982, sendo o maior sucesso do disco. A música alcançou o primeiro lugar na UK Singles Chart, tornando-se a segunda música do Queen a atingir o primeiro lugar nas paradas britânicas (desde 1975, quando \"Boh\n[…]\nA música foi escrita durante a época em que Bowie foi convidado a atuar com vocais de apoio numa música que o Queen estava gravando que, mais tarde seria \"Cool Cat\". David não gostou de sua participação e pediu que o grupo não lançasse a faixa com seus vocais. Mais tarde, sugeriu que fizessem uma música em parceria. Então, \"Under Pressure\" surgiu através de um riff de John Deacon numa jam session do grupo com Bowie, que escreveu praticamente sozinho a letra.\n[…]\nDurante a mixagem da canção, a banda entrou em discussão com David Bowie, e o músico ameaçou impedir o lançamento da canção. Porém, foi lançada.\n[…]\n\"Under Pressure\" é encontrada em várias coletâneas de grandes sucessos do Queen e de David Bowie, e foi tocada durante o restante das turnês do grupo.\n[…]\nDavid Bowie - vocais, teclado, palmas, estalos de dedo\n[…]\nUnder Pressure (Rah Mix)\n[…]\nUnder Pressure (Rah Mix – Radio Edit)\n[…]\nUnder Pressure (Mike Spencer Mix)\n[…]\nUnder Pressure (Knebworth Mix)\n[…]\nUnder Pressure (Rah Mix)\n[…]\nControvérsia surgiu quando Vanilla Ice fez um sample da linha de baixo para seu single de 1990 \"Ice Ice Baby\". Inicialmente ele negou a acusação e disse que havia modificado  mas não pagou originalmente  créditos de composição ou royalties para Queen e Bowie. Uma ação judicial resultou em Bowie e todos os membros do Queen recebendo créditos de composição pelo sample. Vanilla Ice mais tarde afirmou ter comprado os direitos de publicação de \"Under Pressure\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Bob Marley",
      "descricao": "Cantor e compositor jamaicano de reggae, líder dos Wailers"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1974, Eric Clapton chegou ao primeiro lugar nos Estados Unidos regravando que canção de Bob Marley?",
    "resposta": "I Shot the Sheriff",
    "fonte": [
      "https://en.wikipedia.org/wiki/I_Shot_the_Sheriff"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/I_Shot_the_Sheriff",
        "situacao": "ok",
        "texto": "\"I Shot the Sheriff\" is a song written by Jamaican reggae musician Bob Marley and released in 1973 with his band the Wailers.\n[…]\nThe song was first released in 1973 on the Wailers' album Burnin'. Marley explained his intention as follows: \"I want to say 'I shot the police' but the government would have made a fuss so I said 'I shot the sheriff' instead... but it's the same idea: justice.\"\n[…]\nIn 2012, Marley's former girlfriend Esther Anderson claimed that the lyrics, \"Sheriff John Brown always hated me / For what, I don't know / Every time I plant a seed / He said, 'Kill it before it grow'\" are actually about Marley being very opposed to her use of birth control pills; Marley supposedly replaced the word \"doctor\" with sheriff.\n[…]\nEric Clapton recorded a cover version that was included on his 1974 album 461 Ocean Boulevard. His performance of the song adds soft rock to the reggae sound. Billboard described this version as being \"a catchy goof of a winner\" despite not containing a guitar solo. Cash Box called it a \"smooth bluesy rocker with lots of guitar, keyboards and strong background harmonies\". Record World said that Clapton is \"firing straight from the hip, both vocally and riff-wise\".\n[…]\nFaring better in the charts, it peaked at number one on the Billboard Hot 100, his only US number one to date. In 2003, Clapton's version was inducted into the Grammy Hall of Fame. In 2018, a longer version was released on the soundtrack to the documentary Eric Clapton: Life in 12 Bars. This version extends the instrumental bridge following the vocals.\n[…]\nList of number-one singles of 1974 (Canada)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/I_Shot_the_Sheriff",
        "situacao": "ok",
        "texto": "\"I Shot the Sheriff\" é uma canção do grupo de reggae The Wailers, escrita por Bob Marley e lançada em 1973, no álbum Burnin'. A canção é contada do ponto de vista de um narrador que admite ter atirado no xerife local, e afirma ser falsamente acusado de ter matado o vice-xerife. O narrador também afirma ter agido em legítima defesa quando o xerife tentou matá-lo.\n[…]\nEric Clapton gravou uma versão cover que foi incluída em seu álbum de 461 Ocean Boulevard de 1974. É a versão cover de maior sucesso da música, chegando ao número um na Billboard Hot 100, em 2003, a versão de Clapton foi introduzido no Grammy Hall of Fame.\n[…]\n\"I Shot the Sheriff\" foi o primeiro single lançado do segundo álbum de Warren G Take a Look Over Your Shoulder.O rapper fez modificações na letra da musica, Esse cover chegou ao número 20 na Billboard Hot 100 e foi certificado ouro pela RIAA em 02 de maio 1997, chegou ao número dois no Reino Unido e no número um na Nova Zelândia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Freddie Mercury",
      "descricao": "Cantor britânico, vocalista do Queen, nascido Farrokh Bulsara"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1987, Freddie Mercury gravou a canção Barcelona, depois usada nas Olimpíadas de 1992, em dueto com que soprano espanhola?",
    "resposta": "Montserrat Caballé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Barcelona_(Freddie_Mercury_and_Montserrat_Caball%C3%A9_song)",
      "https://en.wikipedia.org/wiki/Montserrat_Caball%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barcelona_(Freddie_Mercury_and_Montserrat_Caball%C3%A9_song)",
        "situacao": "ok",
        "texto": "\"Barcelona\" is a single released by Queen vocalist Freddie Mercury and operatic soprano Montserrat Caballé. A part of their collaborative album Barcelona, it also appeared on Queen's Greatest Hits III.\n[…]\nMercury had been a long-time fan of opera, and especially Montserrat Caballé. In 1986, he mentioned on Spanish television that he would like to meet her, and they met for the first time in Barcelona in February 1987. Later, when the city had been chosen for the 1992 Summer Olympics, Caballé, a native of the city, was asked to help produce a song for the games. She asked Mercury to collaborate.\n[…]\nHe would then send a tape to Caballé to prepare her for the joint studio sessions.\n[…]\nConsequently, she keeps her part melodic throughout all the song at the expense of the text, whereas Mercury has to resort from singing to nearly shouting at the crescendo part in order to deliver his words. Mercury was reportedly amazed by the legendary ability of Caballé to control her voice; for example, in the fadeout, Mercury moves away from the microphone to decrease his vocal dynamic, whereas Montserrat relies on her classical training to decrease the dynamic.\n[…]\nFreddie Mercury – vocals,  arrangements\n[…]\nMontserrat Caballé – vocals\n[…]\nThe 1992 version of the 7\" Spanish record had another version of \"Barcelona\" on the B-side, and the rare 1987 12\" Hong Kong record was one-sided and had a unique sleeve. Most 5\" CDs contained two or three versions of \"Barcelona\" and \"Exercises in Free Love\". Most 7\" record and 5\" CD covers featured Mercury and Caballé singing on a stage with an orchestra on the background, though the Portuguese version pictured them in a static studio photo."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Montserrat_Caball%C3%A9",
        "situacao": "ok",
        "texto": "María de Montserrat Bibiana Concepción Caballé i Folch or Folc (12 April 1933 – 6 October 2018), simply known as Montserrat Caballé (i Folch), was a Spanish (Catalan) operatic soprano. Widely considered to be one of the greatest sopranos of the 20th century, she won a variety of musical awards throughout her six-decade career, including three Grammy Awards.\n[…]\nCaballé is also known for her 1987 duet with Freddie Mercury, \"Barcelona\", later used for the 1992 Olympic Games. The two had mutual admiration for each other and developed a close friendship.\n[…]\nIn 1987, Caballé made a rare excursion into the world of pop music when she released a duet with Freddie Mercury, the lead singer of the rock band Queen, which was titled \"Barcelona\". The song was inspired by Caballé's home city and later used as one of the two official theme songs for the 1992 Olympic Games. Mercury was a great admirer of Caballé, considering her voice to be \"the best in the world\".\n[…]\nCaballé married Spanish tenor Bernabé Martí (1928–2022) on 14 August 1964 at Santa Maria de Montserrat Abbey. They had two children, including Montserrat Martí, who is also an operatic soprano.\n[…]\nBarcelona, Freddie Mercury and Montserrat Caballé, 1987\n[…]\nMontserrat Caballé at IMDb\n[…]\nMontserrat Caballé at Fundación Príncipe de Asturias\n[…]\nMontserrat Caballé unbeldi.com\n[…]\nMontserrat Caballé weberclaudia.de (in German)\n[…]\nFiammetta Rocco: When the ample Catalan sings: Callas is no more; Kiri Te Kanawa is making television commercials, but Montserrat Caballe, the 61-year-old soprano with the old-fashioned style, is still the people's diva of choice (Interview) The Independent, 1994\n[…]\nEl Liceu expressa el seu condol per la mort de Montserrat Caballé Archived 6 October 2018 at the Wayback Machine (in Catalan) Liceu 6 October 2018\n[…]\nMontserrat Caballé – a life in pictures The Guardian, 6 October 2018"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Bee Gees",
      "descricao": "Grupo pop formado pelos irmãos Barry, Robin e Maurice Gibb, astros da era disco"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1977, os Bee Gees compuseram boa parte da trilha sonora de que filme estrelado por John Travolta?",
    "resposta": "Os Embalos de Sábado à Noite",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saturday_Night_Fever_(soundtrack)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saturday_Night_Fever_(soundtrack)",
        "situacao": "ok",
        "texto": "Saturday Night Fever: The Original Movie Soundtrack is the soundtrack double album (in 2 Long Play records) from the 1977 film Saturday Night Fever starring John Travolta. The soundtrack was released on November 15, 1977, by RSO Records. Prior to the release of Thriller by Michael Jackson, Saturday Night Fever was the best-selling album in music history, and still ranks among the best-selling soun\n[…]\nThe Bee Gees' involvement in the film did not begin until post-production. As John Travolta asserted, \"The Bee Gees weren't even involved in the movie in the beginning ... I was dancing to Stevie Wonder and Boz Scaggs.\"\n[…]\nProducer Robert Stigwood commissioned the Bee Gees to create the songs for the film. Robin Gibb recalled:\n[…]\nThe Bee Gees had originally written and recorded five of the songs used in the film – \"Stayin' Alive\", \"Night Fever\", \"How Deep Is Your Love\", \"More Than a Woman\" (performed in the film in two different versions – one version by Tavares, and another by the Bee Gees) and \"If I Can't Have You\" (performed in the movie by Yvonne Elliman) as part of a regular album. They had no idea at the time they would be making a soundtrack and said that they basically lost an album in the process.\n[…]\nTwo previously released Bee Gees songs – \"Jive Talkin'\" and \"You Should Be Dancing\" – are also included on the soundtrack (the cassette version used a live version of \"Jive Talkin'\"). Other previously released songs from the disco era round out the music in the movie. Rick Dees' single \"Disco Duck\", and another song by Dees, \"Dr. Disco\", both appear in the film, but are not included on the soundtrack album.\n[…]\nIn all, there were seven top 40 soundtrack singles that were released from late 1977-March 1978.\n[…]\nAll tracks are performed by the Bee Gees, except where noted.\n[…]\nFrancesco Scavullo – Bee Gees photo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saturday_Night_Fever_%28trilha_sonora%29",
        "situacao": "ok",
        "texto": "Saturday Night Fever é a trilha sonora em álbum duplo (em dois discos de vinil) do filme Saturday Night Fever (1977), estrelado por John Travolta. A trilha sonora foi lançada em 15 de novembro de 1977 pela RSO Records. Antes do lançamento de Thriller (1982) de Michael Jackson, Saturday Night Fever era o álbum mais vendido na história da música e ainda está entre os álbuns de trilha sonora mais ven\n[…]\nO compositor David Shire, que fez a trilha sonora do filme, teve então que compor uma música que combinasse com os passos de dança demonstrados na cena e evitasse futuros problemas legais. Contudo, essa faixa não consta na trilha sonora do filme.\n[…]\nO envolvimento dos Bee Gees no filme só começou na pós-produção. Como John Travolta afirmou, \"Os Bee Gees nem estavam envolvidos no filme no início... Eu estava dançando ao som de Stevie Wonder e Boz Scaggs\".\n[…]\nO produtor Robert Stigwood encomendou aos Bee Gees a criação das músicas para o filme. Robin Gibb recordou:Estávamos gravando nosso novo álbum no norte da França. Tínhamos composto e gravado umas quatro ou cinco músicas para o novo álbum quando Stigwood ligou de Los Angeles e disse: \"Estamos produzindo um pequeno filme, de baixo orçamento, chamado Tribal Rites of a Saturday Night. Vocês teriam alguma música disponível?\".\n[…]\nOs irmãos Gibb então escreveram uma música chamada \"Saturday Night\", mas como Maurice explicou:Existiam tantas músicas chamadas \"Saturday Night\", até mesmo uma dos Bay City Rollers, então quando a reescrevemos para o filme, a chamamos de \"Stayin' Alive\".A faixa foi gravada no Criteria Studios, com Maurice tocando uma linha de baixo semelhante ao riff de guitarra, Barry e Alan Kendall nos riffs de guitarra e Blue Weaver nos sintetizadores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Queen",
      "descricao": "Banda de rock britânica formada em Londres em 1970, de Freddie Mercury e Brian May"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1980, o Queen compôs a trilha sonora de que filme de ficção científica, baseado num herói espacial dos quadrinhos?",
    "resposta": "Flash Gordon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flash_Gordon_(album)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flash_Gordon_(album)",
        "situacao": "ok",
        "texto": "Flash Gordon is the first soundtrack album and ninth studio album by the British rock band Queen, released on 8 December 1980 by EMI Records in the UK and on 27 January 1981 by Elektra Records in the US. It is one of two film soundtracks that they produced, along with Highlander, although technically Highlander has not been released as an album soundtrack.\n[…]\nIt is the soundtrack to the science fiction film Flash Gordon and features lyrics on only two tracks. \"Flash's Theme\" was the only single to be released from the album, under the title \"Flash\". The album reached number 10 on the UK charts and number 23 on the US Billboard 200.\n[…]\nPersonnel taken from Flash Gordon liner notes.\n[…]\nQueen\n[…]\nBrian May – lead guitar, vocals, synthesisers, piano on \"Flash's Theme\" and \"The Hero\", organ on \"The Wedding March\"\n[…]\nNeil Preston – Queen photos\n[…]\nQueen official website: Discography: Flash Gordon: includes lyrics of \"Flash's Theme\" (all versions) and \"The Hero\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Flash_Gordon_%28%C3%A1lbum%29",
        "situacao": "ok",
        "texto": "Flash Gordon é o nono álbum de estúdio da banda Queen, feito para a trilha sonora do filme homônimo lançado em 8 de dezembro de 1980. O lançamento da trilha sonora se deu justamente no assassinato de John Lennon. Foi a primeira vez que a banda entrou em estúdio para produzir toda a trilha sonora de um filme para o cinema. Com exceção da primeira e última faixa (Flash's Theme e The Hero) o disco é \n[…]\nA música tema foi o único single a ser lançado do álbum sob o título \"Flash\", que alcançou nas paradas americanas o 42º lugar no Billboard Hot 100. Chegou ao 39 ° lugar no Top 100 da Cash Box.\n[…]\n\"Flash's Theme\" (Brian May) - 3:22\n[…]\n\"Execution Of Flash\" (John Deacon) – 0:43\n[…]\n\"The Kiss (Aura Ressurrects Flash)\" – 2:11\n[…]\n\"Flash To The Rescue\" (Brian May) – 2:47\n[…]\n\"Marriage Of Dale And Ming (And Flash Approaching)\" (Brian May/Roger Taylor) – 2:04\n[…]\n\"Flash's Theme Reprise (Victory Celebration)\" (Brian May) – 1:39\n[…]\nhttp://comics.cro.net/e-flash.html\n[…]\nhttp://comics.cro.net/e-flash.html\n[…]\n«Flash Gordon (Flash Gordon, Inglaterra, 1980)»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pink Floyd",
      "descricao": "Banda britânica de rock progressivo formada em Londres em 1965"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No filme Pink Floyd The Wall, de 1982, o protagonista é vivido por que cantor irlandês, que depois organizou o Live Aid?",
    "resposta": "Bob Geldof",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pink_Floyd_%E2%80%93_The_Wall"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pink_Floyd_%E2%80%93_The_Wall",
        "situacao": "ok",
        "texto": "Pink Floyd – The Wall is a 1982 live-action/adult animated musical surrealist drama film directed by Alan Parker, based on Pink Floyd's 1979 studio album The Wall. The screenplay was written by Pink Floyd vocalist and bassist Roger Waters, with animation sequences directed by Gerald Scarfe.\n[…]\nThe Boomtown Rats' lead vocalist Bob Geldof made his film debut as rock star Pink, who, driven to neurosis by the pressures of stardom and traumatic events in his life, constructs an emotional and mental wall to protect himself. However, this coping mechanism eventually backfires, and Pink demands to be set free.\n[…]\nWhile the book depicted Waters in the role of Pink, after screen tests, he was removed from the starring role and replaced with new wave musician and frontman of the Boomtown Rats, Bob Geldof.\n[…]\nInteriors were shot at Pinewood Studios, and it was suggested that they suspend Geldof in Christopher Reeve's clear cast used for the Superman flying sequences, but his frame was too small by comparison; it was then decided to make a smaller rig that was a more acceptable fit, and he lay on his back. In Nicholas Schaffner's book Saucerful of Secrets: The Pink Floyd Odyssey (1991) it is claimed that the body cast from the film Supergirl (1984) was actually used instead.\n[…]\nThe film's official premiere was at the Empire, Leicester Square in London, on 14 July 1982. It was attended by Waters and fellow Pink Floyd members David Gilmour and Nick Mason, but not Richard Wright, who was no longer a member of the band. It was also attended by various celebrities including Geldof, Scarfe, Paula Yates, Pete Townshend, Sting, Roger Taylor, James Hunt, Lulu, and Andy Summers.\n[…]\nHowever, Bob Geldof, who plays Pink in the film, refused to shave his head for this part of the performance."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pink_Floyd_%E2%80%93_The_Wall",
        "situacao": "ok",
        "texto": "Pink Floyd – The Wall é um filme britânico de 1982 dos gêneros drama, musical e terror surrealista dirigido por Alan Parker, sendo baseado no álbum de estúdio de 1979 The Wall do grupo musical Pink Floyd. O roteiro foi escrito pelo vocalista e baixista da banda Roger Waters.\n[…]\nO filme é estrelado por Bob Geldof (vocalista da banda The Boomtown Rats) como o astro do rock Pink, que, levado à neurose pelas pressões do estrelato e eventos traumáticos em sua vida, constrói um muro emocional e mental para se proteger; no entanto, esse mecanismo de enfrentamento eventualmente tem efeitos colaterais para Pink, que exige ser libertado. O filme apresenta técnicas de animação adulta com live-action para retratar as alucinações e sonhos de Pink.\n[…]\nDurante a produção, enquanto filmava a cena de Pink surtando no quarto de hotel, Geldof sofreu um corte na mão ao puxar as venezianas; esta filmagem permaneceu no filme final. Durante as gravações na cena da piscina, foi descoberto que Geldof não sabia nadar. As cenas da guerra foram filmadas em Saunton Sands, em North Devon, local que também apareceu na capa do disco A Momentary Lapse of Reason do Pink Floyd, seis anos depois.\n[…]\nA estreia oficial do filme foi no cinema Empire, Leicester Square em Londres, em 14 de julho de 1982. Estiveram presentes Waters e outros membros do Pink Floyd: David Gilmour e Nick Mason; Richard Wright estava ausente pois havia saído da banda. O evento também contou com a presença de várias celebridades, incluindo Geldof, Scarfe, Paula Yates, Pete Townshend, Sting, Roger Taylor, James Hunt, Lulu e Andy Summers.\n[…]\nFoi planejado que Bob Geldof, que interpretou Pink no filme, raspasse completamente a cabeça durante a cena do colapso, mas o ator recusou-se a faze-lo.\n[…]\nPink Floyd – The Wall no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Michael Jackson",
      "descricao": "Cantor e dançarino americano conhecido como Rei do Pop"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1985, Michael Jackson comprou uma editora musical que detinha os direitos de grande parte das canções de que banda britânica?",
    "resposta": "The Beatles",
    "fonte": [
      "https://en.wikipedia.org/wiki/ATV_Music",
      "https://en.wikipedia.org/wiki/Michael_Jackson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/ATV_Music",
        "situacao": "ok",
        "texto": "Sony Music Publishing (US) LLC (formerly Sony/ATV Music Publishing) is an American music publisher. Responsible for publishing the largest quantity of music, with over six million songs owned or administered as of end March 2025, it is part of Sony Music Group, which is itself owned by Japanese conglomerate Sony Group Corporation.\n[…]\nAppearing on the Late Show with David Letterman shortly after Jackson died in 2009, McCartney spoke about Jackson's acquisition of the Beatles songs and the impact of it on their relationship:And which was, you know, that was cool, somebody had to get it, I suppose. What happened actually was then I started to ring him up. I thought, OK, here's the guy historically placed to give Lennon–McCartney a good deal at last. Cuz we got signed when we were 21 or something in a back alley in Liverpool.\n[…]\nAt least one Beatles song was covered by Jackson after acquiring publishing rights: \"Come Together\" from the album Abbey Road (primarily a Lennon composition) in 1986. The song was recorded for Jackson's 1987 album Bad but was scrapped and instead put on HIStory: Past, Present and Future, Book I eight years later. It was featured on the 1988 movie Moonwalker and also had an official video. It is not known if Jackson covered any other songs, as no bootlegs have been released.\n[…]\nIn 1995, Sony offered Jackson $110 million for a 50% stake in a combined ATV and Sony Music Publishing joint venture. Following hurriedly arranged meetings and disagreements over the selling price, a deal was sealed by Jackson during a concert in Tokyo. Jackson had essentially sold half ownership of the Beatles' and others' songs for a large profit. Jackson's own songs, grouped in the Mijac catalog, were not included in the deal; that catalog remained with Warner/Chappell Music until 2012."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Jackson",
        "situacao": "ok",
        "texto": "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. Dubbed the \"King of Pop\", he is widely regarded as one of the most culturally significant figures of the 20th century. His musical achievements broke American racial barriers and made him a dominant figure worldwide.\n[…]\nIn 1981, McCartney had been offered the catalog for £20 million ($40 million) (equivalent to $142 million in 2025). Jackson submitted a bid of $46 million (equivalent to $143 million in 2025) on November 20, 1984. When Jackson and McCartney were unable to make a joint purchase, McCartney did not want to be the sole owner of the Beatles's songs and did not pursue an offer on his own.\n[…]\nThe deal includes assets from his Mijac publishing catalog, but excludes royalties from several Jackson-related productions, such as the MJ Broadway musical and the 2026 Michael film. The transaction is possibly the largest for a single musician's work.\n[…]\nIn 1984, Time pop critic Jay Cocks wrote that Jackson was the biggest phenomenon since the Beatles and Elvis Presley, while possibly \"the most popular black singer ever\". Cocks declared him a \"star of records, radio, rock video\" and the \"dancer with the fanciest feet\". In 2003, The Daily Telegraph writer Tom Utley described Jackson as \"extremely important\" and a \"genius\".\n[…]\nForbes reported in August 2018 that Jackson's total career pretax earnings in life and death were $4.2 billion. Sales of his recordings through Sony's music unit earned him an estimated $300 million in royalties. He may have earned another $400 million from concerts, music publishing (including his share of the Beatles catalog), endorsements, merchandising and music videos.\n[…]\nHow Michael Jackson Changed Dance History – biography.com\n[…]\nMichael Jackson at the FBI's website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sony_Music_Publishing",
        "situacao": "ok",
        "texto": "Sony Music Publishing (anteriormente Sony/ATV Music Publishing) é a maior editora musical do mundo, tendo mais de cinco milhões de músicas possuídas ou administradas desde o final de março de 2021. Com sede nos Estados Unidos, faz parte do Sony Music Group, que é propriedade da Sony Entertainment. A empresa foi formada como Sony/ATV em 1995 pela fusão da versão original da Sony Music Publishing e \n[…]\nMichael Jackson passou a usar as canções dos Beatles em vários comerciais, sentindo que isso permitiria que uma nova geração de fãs apreciasse a música. Paul McCartney, que havia usado o catálogo de músicas de Buddy Holly em comerciais, ficou triste. Em particular, foi relatado que Michael Jackson expressou exasperação com a atitude de Paul McCartney; ele sentiu que o músico deveria ter pago pelas canções que havia escrito.\n[…]\nAparecendo no Late Show with David Letterman logo após a morte de Michael Jackson em 2009, Paul McCartney falou sobre a aquisição das canções dos Beatles por Michael e o impacto disso em seu relacionamento (sic):\n[…]\nPelo menos uma música dos Beatles foi regravada por Michael Jackson após adquirir os direitos editoriais: \"Come Together\" do álbum Abbey Road (composta principalmente por John Lennon) em 1986. A música foi gravada para o álbum Bad de Michael Jackson em 1987, mas foi descartada e lançada oito anos depois em HIStory: Past, Present and Future, Book I. Foi apresentada no filme Moonwalker de 1988 e também teve um vídeo oficial.\n[…]\nEm 1995, a Sony ofereceu a Michael Jackson 110 milhões de dólares por uma participação de 50% em um empreendimento conjunto combinando a ATV e a Sony Music Publishing. Após reuniões organizadas às pressas e desacordos sobre o preço de venda, um acordo foi fechado por Michael Jackson durante um show em Tóquio. Michael Jackson basicamente vendeu metade da propriedade das canções dos Beatles e de outros por um grande lucro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Kurt Cobain",
      "descricao": "Cantor, guitarrista e compositor americano, líder da banda Nirvana"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Kurt Cobain, do Nirvana, foi casado com a cantora Courtney Love, vocalista de que banda americana?",
    "resposta": "Hole",
    "fonte": [
      "https://en.wikipedia.org/wiki/Courtney_Love",
      "https://en.wikipedia.org/wiki/Hole_(band)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Courtney_Love",
        "situacao": "ok",
        "texto": "Courtney Michelle Love (née Harrison; born July 9, 1964) is an American singer, guitarist, songwriter, and actress. A figure in the alternative and grunge scenes of the 1990s, Love has had a career spanning four decades. She rose to prominence as the lead vocalist and rhythm guitarist of the alternative rock band Hole, which she formed in 1989.\n[…]\nHole performed a series of riotous concerts over the following year, with Love frequently appearing hysterical onstage, flashing crowds, stage diving, and getting into fights with audience members. One journalist reported that at the band's show in Boston in December 1994: \"Love interrupted the music and talked about her deceased husband Kurt Cobain, and also broke out into Tourette syndrome-like rants.\n[…]\nAfter the breakup of Hole, Love began composing material with songwriter Linda Perry, and in July 2003 signed a contract with Virgin Records. She began recording her debut solo album, America's Sweetheart, in France shortly after. Virgin Records released America's Sweetheart in February 2004; it received mixed reviews.\n[…]\nAfter dropping the Hole name and performing as a solo artist in late 2012, Love appeared in spring 2013 advertisements for Yves Saint Laurent alongside Kim Gordon and Ariel Pink. Love completed a solo tour of North America in mid-2013, which was purported to be in promotion of an upcoming solo album; however, it was ultimately dubbed a \"greatest hits\" tour, and featured songs from Love's and Hole's back catalogue. Love told Billboard at the time that she had recorded eight songs in the studio.\n[…]\n[but] when I heard Hole, I was amazed to hear a girl sing like that. Janis Joplin was her own thing; she was into Big Mama Thornton and Bessie Smith. But what Courtney Love does, I'd never heard a girl do that.\"\n[…]\nWorks by or about Courtney Love (library search via WorldCat)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hole_(band)",
        "situacao": "ok",
        "texto": "Hole was an American alternative rock band formed in Los Angeles, California, in 1989. It was founded by singer/guitarist Courtney Love and guitarist Eric Erlandson. It had several different bassists and drummers, the most notable being drummer Patty Schemel and bassists Kristen Pfaff (d. 1994) and Melissa Auf der Maur.\n[…]\nHole formed after Eric Erlandson responded to an advertisement placed by Courtney Love in The Recycler in the summer of 1989. The advertisement read: \"I want to start a band. My influences are Big Black, Sonic Youth, and Fleetwood Mac.\" Erlandson recalled of their first meeting: \"We met at this coffee shop, and I saw her and I thought 'Oh, God.\n[…]\nLove and Erlandson began writing new material for a second Hole album in 1992, in the midst of Love's pregnancy with Nirvana frontman Kurt Cobain. Love's desire to take the band in a more melodic and controlled rock format led bassist Emery to leave the band, and drummer Caroline Rue followed. In an advertisement to find a new bass player, Love wrote: \"[I want] someone who can play ok, and stand in front of 30,000 people, take off her shirt and have 'fuck you' written on her tits.\n[…]\nIn a 1991 interview, Love stated that lyrics were \"the most important\" element of songwriting for her. Her lyrics explored a variety of themes throughout Hole's career, including body image, rape, child abuse, addiction, celebrity, suicide, elitism, and inferiority complexes; all of which were addressed mainly from a female, and often feminist standpoint.\n[…]\nMusic journalist Maria Raha expressed a similar sentiment in regard to the band's significance to third-wave feminism, stating, \"Whether you love Courtney [Love] or hate her, Hole was the highest-profile female-fronted band of the '90s to openly and directly sing about feminism.\"\n[…]\nHole's channel on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Courtney_Love",
        "situacao": "ok",
        "texto": "Courtney Michelle Love (nascida Harrison, 9 de julho de 1964) é uma cantora, compositora, atriz e pintora norte-americana. Courtney ganhou notoriedade com sua banda Hole, que formou em 1989 junto a Eric Erlandson. O álbum de estreia da banda, Pretty on the Inside (1991), recebeu aclamação da crítica, e o Hole tornou-se mundialmente conhecido com seus álbuns seguintes, Live Through This (1994) e Ce\n[…]\nLove foi baixista da banda Babes in Toyland em 1987, mas foi expulsa um tempo depois.\n[…]\nNo fim de 1991, começou a namorar Kurt Cobain, e engravidou. Em 1992, Hole gravou os singles Beautiful Son e Over the Edge, um cover da banda Wipers.\n[…]\nHole gravou seu segundo álbum, Live Through This, em outubro de 1993 em Atlanta, Geórgia. A banda tinha novos membros: a baixista Kristen Pfaff e a baterista Patty Schemel. Live Through This foi lançado pela gravadora DCG em abril de 1994, em um trágico momento: apenas quatro dias após Kurt Cobain ter sido encontrado morto. Em junho, Kristen Pfaff morreu de uma overdose de heroína.\n[…]\nO álbum trata, em sua maior parte, da conturbada fase que Courtney viveu entre 2003 e 2007, e tem uma sonoridade folk rock e acústica, diferente dos álbuns anteriores do Hole. Love fez uma turnê na Europa, Japão e nos Estados Unidos, onde promoveu o álbum na primavera de 2010, que terminou em um show em Seattle no festival Bumbershoot em setembro. No verão de 2011, a banda tocou na Rússia, Austrália e Brasil.\n[…]\nCourtney também namorou Billy Corgan, da banda Smashing Pumpkins, no começo de 1991, mas a relação mais conhecida dela foi, sem dúvidas, com Kurt Cobain, do Nirvana. Não há certezas sobre a data em que eles se conheceram. Alguns dizem que os dois se conheceram em janeiro de 1989 em um clube noturno, mas Courtney disse que a primeira vez que estiveram juntos foi em janeiro de 1988, em um show do Dharma Bums.\n[…]\nListas de Músicas Hole/Courtney\n[…]\nCourtney Love no Myspace",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Paul McCartney",
      "descricao": "Músico e compositor inglês, baixista e vocalista dos Beatles."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Depois do fim dos Beatles, Paul McCartney formou que banda, com a mulher Linda nos teclados?",
    "resposta": "Wings",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wings_(band)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wings_(band)",
        "situacao": "ok",
        "texto": "Wings, sometimes billed as Paul McCartney and Wings, were a British rock band from 1971 to 1981, formed in London. The core members were Paul McCartney, a former member of the Beatles, on vocals and bass, his wife Linda McCartney on keyboards, and Moody Blues alumnus Denny Laine on guitar and vocals. They were noted for their commercial successes, musical eclecticism, and frequent personnel change\n[…]\nIn July 1971, Seiwell and Laine joined the McCartneys to record Paul's third post-Beatles album for Apple Records. The result was Wild Life, released in December. It was the first project to credit Wings as the artist. The band name is said to have come to Paul McCartney as he was praying in the hospital while Linda was giving birth to their second child, Stella, on 13 September 1971.\n[…]\nIn an interview, Juber, Wings' third lead guitarist, said, \"I was a sideman, but the job assignment very much included considering myself a part of the band ... In all its incarnations Wings sounded like a band, not like a solo McCartney project and I think that reflects well not only on Paul's ability to share in the creative process, but also on the importance of Denny and Linda's contributions, too. The other players brought their own personalities to the scene.\"\n[…]\nIn addition to its own output, Wings recorded several songs that were released through various outlets both before and after the band's break-up. Denny Laine's 1977 solo album Holly Days was a joint effort by Laine with Paul and Linda McCartney; three songs on Laine's 1980 solo album Japanese Tears were performed by Wings with Laine on lead vocals; Laine also contributed to several songs on Paul McCartney's 1982 and 1983 solo albums Tug of War and Pipes of Peace, respectively.\n[…]\nDuring its ten-year lifespan, Wings underwent numerous personnel changes, including twice being reduced to its core McCartney–McCartney–Laine trio."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wings_%28banda%29",
        "situacao": "ok",
        "texto": "Wings (também conhecida por Paul McCartney & Wings) foi uma banda de rock formada em 1971 pelo ex-beatle Paul McCartney, que permaneceu em atividade até 1981. A banda atingiu bastante sucesso, embora tenha mudado constantemente de integrantes. Somente três integrantes permaneceram do início ao fim: Paul McCartney, sua esposa Linda McCartney e Denny Laine.\n[…]\nEm 1972, lançou-se o álbum Red Rose Speedway com mais um integrante na banda, o guitarrista Henry McCullough, e o grupo se tornou um quinteto. O álbum trouxe ao Wings seu primeiro hit de grande sucesso, a balada \"My Love\", sendo o disco aclamado por críticos e pelo público, alcançando o primeiro lugar nas paradas americanas. No mesmo ano, os Wings lançaram a canção \"Live and Let Die\" tendo o ex-produtor dos álbuns dos Beatles à frente, George Martin.\n[…]\nApós a turnê mundial, os Wings fizeram uma pausa na carreira, influenciada também pela gravidez de Linda McCartney. A relação de Jimmy McCulloch com o resto da banda havia se deteriorado muito nos últimos meses, com diversas discussões entre os integrantes. No final de agosto, então, o grupo voltou à ativa. Certa noite, McCulloch decidiu usar uma arma ilegal que tinha escondido e chegou próximo ao quarto do casal Paul e Linda McCartney, ambos dormindo.\n[…]\nEm 1979, Paul McCartney organizou espetáculos em ajuda ao UNICEF e aos refugiados do Camboja (Concerts for the People of Kampuchea). Participaram dos espetáculos, em Londres, os Wings, Queen, The Who, Pretenders, The Clash e Elvis Costello entre outros. Logo após, o grupo partiu em uma turnê ao Japão, onde Paul McCartney foi preso ao desembarcar no aeroporto por porte de maconha. Ele ficou preso por nove dias antes de ser deportado do país. O incidente marcou o fim dos Wings.\n[…]\nWings Over America (1976)\n[…]\nWings Greatest (1978)\n[…]\nWings Over Brazil - Fan Site Brasileiro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Norah Jones",
      "descricao": "Cantora, pianista e compositora americana de jazz e pop, do sucesso Don't Know Why"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A cantora americana Norah Jones, do sucesso Don't Know Why, é filha de que músico indiano, mestre da cítara?",
    "resposta": "Ravi Shankar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Norah_Jones"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Norah_Jones",
        "situacao": "ok",
        "texto": "Norah Jones ( NOR-ə; born Geethali Norah Jones Shankar, March 30, 1979) is an American singer-songwriter and musician. She has won several awards for her music and, as of 2023, has sold more than 53 million albums worldwide. Billboard named her the top jazz artist of the 2000s decade. She has won ten Grammy Awards and was ranked 60th on Billboard magazine's Artists of the 2000s Decade chart.\n[…]\nJones was born Geethali Norah Jones Shankar on March 30, 1979, in Manhattan, New York City, to American concert producer Sue Jones and Indian Bengali musician Ravi Shankar.\n[…]\nJones collaborated with her half-sister, Anoushka Shankar, on Shankar's album Traces of You, released on October 22, 2013. She contributed vocals to three songs on the album.\n[…]\nFrom September 2022, Jones started a podcast called \"Norah Jones Is Playing Along\", where they played impromptu and improvised songs with a selection of guest artists including her half-sister Anoushka Shankar, as well as Dave Grohl, Marc Rebillet and more.\n[…]\nIn 2023, Jones was featured on the single \"Paradise II\" from rapper Logic's eighth studio album, College Park.\n[…]\nNorah Jones & The Handsome Band Tour (2004–2005)\n[…]\nNorth American Tour (2019)\n[…]\nJones was in a relationship with bassist Lee Alexander from 2000 to 2007. After a period of estrangement from her father, Ravi Shankar, Jones traveled to New Delhi to spend time with him and wrote some material that was later recorded for the album The Fall. Jones has two children with her husband, keyboardist Pete Remm, to whom she has been married since 2014.\n[…]\nList of American Grammy Award winners and nominees\n[…]\nFry Street Fire – Norah Jones was an honorary Chairwoman of \"Save Fry Street\".\n[…]\nIndians in the New York City metropolitan area\n[…]\nNorah Jones at AllMusic\n[…]\nNorah Jones discography at Discogs\n[…]\nNorah Jones at IMDb\n[…]\nNorah Jones discography at MusicBrainz"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Norah_Jones",
        "situacao": "ok",
        "texto": "Norah Jones (em bengali: নোরা জোনস; romaniz.: Nõrā Jõnasa; Brooklyn, 30 de março de 1979) é uma cantora, compositora, musicista e atriz norte-americana. Nascida Geetali Norah Jones Shankar (em bengali: গীতালি নোরা জোনস শঙ্কর; romaniz.: Gītāli Nõrā Jõnasa Śańkara), mudou oficialmente seu nome aos dezesseis anos. Ela é filha do citarista e compositor indiano-bengali Ravi Shankar e meia-irmã dos músi\n[…]\nNorah nasceu na cidade de Nova Iorque, filha do influente sitarista indiano Ravi Shankar, tendo vivido sua infância com sua mãe, Sue Jones, que se mudou para Dallas, Texas, quando Norah tinha quatro anos. É meia-irmã, por parte do pai, de Anoushka Shankar, citarista e compositora. Jones estudou no Booker T. Washington High School for the Performing and Visual Arts e na University of North Texas, onde se formou em jazz piano.\n[…]\nNorah Jones apresentou-se no Brasil em 2004 na turnê do primeiro álbum e retornou em 2010 para divulgar o álbum The Fall em São Paulo, Rio de Janeiro, Porto Alegre e Curitiba. Sua apresentação em São Paulo rendeu um público de 40 mil pessoas, sendo que 18 mil ficaram nas ruas e calçadas ao redor do Parque da Independência porque chegaram tarde demais e pela super lotação, segundo a Polícia Militar.\n[…]\nA cantora voltaria ao Brasil no final de 2012 para realizar shows em Porto Alegre, Rio de Janeiro e São Paulo, porém a morte de seu pai, o músico Ravi Shankar, fez com que ela cancelasse a viagem. As apresentações fariam parte da turnê \"Little Broken Hearts\", e contariam com a presença do músico novaiorquino Jesse Harris, que foi o autor da música \"Don't Know Why\".\n[…]\nMarian McPartland's piano jazz with Norah Jones (2003)\n[…]\nNorah Jones & The Handsome Band: Live In 2004\n[…]\nNorah Jones Austin City Limits - Live From Austin TX, 2007\n[…]\nO prêmio Grammy é realizado desde 1958. Norah Jones ganhou, no total, doze Grammys, e teve seis indicações.\n[…]\nLista de músicos recordistas de vendas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Elton John",
      "descricao": "Cantor, compositor e pianista britânico, nascido Reginald Dwight."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Ao trocar oficialmente o nome Reginald Dwight por Elton John, o cantor adotou como nome do meio o de que herói da mitologia grega?",
    "resposta": "Hércules",
    "distratores": [
      "Aquiles",
      "Ulisses",
      "Perseu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Elton_John"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elton_John",
        "situacao": "ok",
        "texto": "Sir Elton Hercules John (born Reginald Kenneth Dwight, 25 March 1947) is a British singer, composer and pianist. An influential figure in popular culture, he is known for his flamboyant fashion, showmanship and songwriting partnership with the lyricist Bernie Taupin. With over 300 million records sold worldwide, he is one of the best-selling music artists of all time.\n[…]\nSix months later, John began going by the name Elton John in homage to two members of Bluesology: the saxophonist Elton Dean and the vocalist Long John Baldry. He legally changed his name to Elton Hercules John on 7 January 1972. \"Hercules\" came from the name of a horse in British sitcom Steptoe and Son, of which John was a big fan.\n[…]\nJohn's paternal cousin Roy Dwight was a professional footballer, who scored for Nottingham Forest in the 1959 FA Cup Final before breaking his leg later in the same match.\n[…]\nIn 2023 Rolling Stone ranked Elton John at number 100 on its list of the 200 Greatest Singers of All Time.\n[…]\nElton John: Tantrums & Tiaras (1997) autobiography as himself\n[…]\nElton John: Me, Myself & I (2007) autobiography as himself\n[…]\nElton John: Never Too Late (2024) autobiography as himself\n[…]\nGoodall, Nigel. Elton John: A Visual Documentary, Omnibus Press, 1993. ISBN 0-7119-3078-3\n[…]\nBernardin, Claude; Stanton, Tom (1 January 1996). Rocket man: Elton John from A–Z (illustrated, revised ed.). Greenwood Publishing Group. ISBN 978-0-275-95698-1.\n[…]\nRosenthal, Elizabeth. His Song: The Musical Journey of Elton John, Billboard Books, 2001. ISBN 0-8230-8892-8\n[…]\nO'Neill, Terry. Elton John by Terry O'Neill: The definitive portrait, with unseen images. Hachette UK, 2019\n[…]\nJohn, Elton. Me: Elton John Official Autobiography, Pan MacMillan, 2019. ISBN 978-1-50-985331-1\n[…]\nElton John at IMDb\n[…]\nElton John at the Internet Broadway Database\n[…]\nCommentary by Elton John (The Guardian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Elton_John",
        "situacao": "ok",
        "texto": "Sir Elton Hercules John CH, CBE (nascido Reginald Kenneth Dwight; Londres, 25 de março de 1947) é um pianista, cantor, compositor, produtor e filantropo britânico. Em 1969, John lançou seu primeiro álbum, \"Empty Sky\", mas foi com seu segundo álbum, autointitulado, de 1970, que ele alcançou sucesso mundial com o single, \"Your Song\". Desde então, ele emplacou vários sucessos e vendeu mais de 300 mil\n[…]\nElton John nasceu Reginald Kenneth Dwight, em 25 de março de 1947, e cresceu em Pinner, em uma council house que pertencia aos seus avós maternos. Filho único de Sheila Eileen (nascida Harris; 1925–2017), e filho mais velho de Stanley Dwight (1925–1991). Foi educado na Pinner Wood Junior School, Reddiford School, e mais tarde na Pinner County Grammar School.\n[…]\nQuando os dois se conheceram em 1967, eles gravaram a primeira música de John, \"Scarecrow\". Seis meses depois, John começou a usar o nome artístico Elton John, em homenagem a dois membros do Bluesology, o saxofonista Elton Dean, e o vocalista Long John Baldry. ​​Ele mudou legalmente seu nome para Elton Hercules John, em 7 de janeiro de 1972.\n[…]\nEm 2020, Blauel processou John por escrever sobre seu relacionamento em sua autobiografia oficial de 2019, \"Me: Elton John\", que ela alegou ter quebrado os termos de seu acordo de divórcio. O caso foi resolvido fora da justiça no final do mesmo ano.\n[…]\nFoi dono do time Watford Football Club de 1976 a 1987, e de 1997 a 2002. Se tornou presidente honorário vitalício do clube, e em 2014, uma das arquibancadas do estádio do clube, com capacidade para 3.400 espectadores, recebeu oficialmente o nome \"The Sir Elton John\". Entusiasta de tênis de longa data, em 1975, ele lançou a música \"Philadelphia Freedom\" em homenagem ao time de tênis de sua amiga Billie Jean King.\n[…]\n2017 Elton John's Diamonds\n[…]\n1991 Two Rooms: Celebrating the Songs of Elton John & Bernie Taupin\n[…]\n«Página oficial do cantor» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Black Sabbath",
      "descricao": "Banda britânica de heavy metal formada em Birmingham em 1968, com Ozzy Osbourne e Tony Iommi"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de se chamar Black Sabbath, a banda de Ozzy Osbourne se chamava Earth. O novo nome veio de um filme de terror estrelado por quem?",
    "resposta": "Boris Karloff",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Sabbath",
      "https://en.wikipedia.org/wiki/Black_Sabbath_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Sabbath",
        "situacao": "ok",
        "texto": "Black Sabbath were an English heavy metal band formed in Birmingham in 1968 by guitarist Tony Iommi, drummer Bill Ward, bassist Geezer Butler and vocalist Ozzy Osbourne. After adopting the Black Sabbath name in 1969 (the band were previously named Polka Tulk Blues Band and then Earth), they distinguished themselves through occult themes with horror-inspired lyrics and down-tuned guitars.\n[…]\nWhile playing shows in England in 1969, the band discovered they were being mistaken for another English group named Earth, so they decided to change their name again (this name change would give rise to the well-known debate about the alleged aesthetic influence of Coven, which the British band always denied). A cinema across the street from the band's rehearsal room was showing the 1963 Italian horror film Black Sabbath, starring Boris Karloff and directed by Mario Bava.\n[…]\nDespite ruling out the possibility of another Black Sabbath reunion, Osbourne revealed in an episode of Ozzy Speaks on Ozzy's Boneyard that he was working with Iommi, who appeared as one of the guests for his thirteenth and final solo album, Patient Number 9 (2022).\n[…]\nAfter some delays, the film was released on 28 October 2026, while its soundtrack album, titled Ozzy Osbourne & Black Sabbath: Back to the Beginning, is due for release on 11 December 2026.\n[…]\nOsbourne died of a heart attack on 22 July 2025, seventeen days after his final performance. Eight days later, on 30 July, his funeral procession passed through Broad Street, stopping at Black Sabbath Bridge, for Sharon Osbourne and family to mourn and read messages left by supporters. A documentary, Ozzy Osbourne: No Escape from Now, was streamed on Paramount+ on 7 October 2025, covering the final six years of Osbourne's life including his final performance with Black Sabbath.\n[…]\nBlack Sabbath at AllMusic\n[…]\nBlack Sabbath discography at Discogs\n[…]\nBlack Sabbath at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Black_Sabbath_(film)",
        "situacao": "ok",
        "texto": "Black Sabbath (Italian: I tre volti della paura, lit. 'The Three Faces of Fear') is a 1963 horror anthology film directed by Mario Bava. The film consists of three separate tales that are introduced by Boris Karloff. The order in which the stories are presented varies among the different versions in which the film has been released.\n[…]\nThe casting and crewing of Black Sabbath was divided between the film's three main production partners: Galatea cast actress Susy Andersen while retaining Mario Bava, who had directed several of their films, including Black Sunday, American International Pictures secured Mark Damon and Boris Karloff, and Societé Cinématographique Lyre secured Michèle Mercier and Jacqueline Pierreux (the latter is credited under the pseudonym \"Jacqueline Soussard\" on American prints).\n[…]\nBava changed the ending to Boris Karloff's character of Gorca on horseback who cautions the audience to watch out for vampires. The camera then pans back revealing he is on a stuffed horse revealing the studio set and simulated effects.\n[…]\nAmerican International Pictures reshot the wraparounds with Boris Karloff in Los Angeles. It is unknown who directed these scenes.\n[…]\nBoris Karloff enjoyed working with Bava on Black Sabbath, and he praised his work to both Christopher Lee and Vincent Price who would later go on to work with Bava in The Whip and the Body and Dr. Goldfoot and the Girl Bombs respectively. Plans were made to reunite Bava with Karloff and Lee to work an adaptation of \"The Dunwich Horror\", provisionally titled Scarlet Friday. The project was later taken away from Bava after the critical and commercial failure of Dr.\n[…]\nGoldfoot and the Girl Bombs, and was released as The Dunwich Horror directed by Daniel Haller; the film was made without Karloff and Lee's involvement.\n[…]\nBoris Karloff filmography"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Black_Sabbath",
        "situacao": "ok",
        "texto": "Black Sabbath foi uma banda de heavy metal britânica formada no ano de 1968 em Birmingham pelo guitarrista e principal compositor Tony Iommi, o baixista e principal letrista Geezer Butler, o vocalista Ozzy Osbourne e o baterista Bill Ward. Desde a saída de Ozzy Osbourne, a banda passou por diversas mudanças na formação, com o guitarrista Iommi sendo o único presente em todas elas.\n[…]\nApós um curto período, o nome da banda foi mudado porque havia outro grupo denominado Earth. A escolha do nome, mais tarde, veio de uma ideia de Butler, um grande fã dos romances de \"magia negra\" e \"terror\" de autores como Dennis Wheatley. Butler tinha visto o filme de terror italiano do diretor Mario Bava, I Tre Volti Della Paura (As Três Máscaras do Terror) de 1963, mas exibido com o nome de Black Sabbath na Inglaterra e Estados Unidos, e escreveu uma canção que incorpora o título do filme.\n[…]\nDe acordo com Geezer Butler, não haveria reunião do Black Sabbath com Ozzy em 2011, porque Osbourne estava em turnê com sua banda solo.\n[…]\nUma nova polêmica surgiu em fevereiro de 2012, após o anúncio de que o Black Sabbath iria se reunir sem o baterista da formação original, Bill Ward. O anúncio foi feito por meio de uma nota divulgada no site oficial da banda, assinada por Ozzy Osbourne, Tony Iommi e Geezer Butler, os integrantes remanescentes da banda, que estavam no Reino Unido trabalhando em um disco novo. Segundo Ward, \"os termos do contrato são injustos\", o que o levou a recusá-lo.\n[…]\nEm 24 de setembro de 2014, o vocalista Ozzy Osbourne havia contado ao Metal Hammer que o Black Sabbath começaria a trabalhar em um novo álbum de estúdio no início de 2015 com o produtor Rick Rubin, e que iriam promovê-lo com uma turnê final. Contudo, um ano depois, o mesmo veio a confirmar que não gravariam outro álbum.\n[…]\nThe Black Sabbath Story Vol. 2 - 1978-1992 - Disco de Ouro (12 de novembro de 2002)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "The Doors",
      "descricao": "Banda de rock americana formada em Los Angeles em 1965, liderada pelo vocalista Jim Morrison"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da banda The Doors foi tirado do livro As Portas da Percepção, de que escritor inglês?",
    "resposta": "Aldous Huxley",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Doors",
      "https://en.wikipedia.org/wiki/The_Doors_of_Perception"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Doors",
        "situacao": "ok",
        "texto": "The Doors were an American rock band formed in Los Angeles in 1965, comprising vocalist Jim Morrison, keyboardist Ray Manzarek, guitarist Robby Krieger, and drummer John Densmore. They are considered one of the most innovative, influential, and eclectic rock bands in history, primarily due to their pioneering experimentation with a great variety of musical styles and techniques and Morrison's poet\n[…]\nThe band took its name from the title of the English writer Aldous Huxley's book The Doors of Perception, itself a reference to a quote by the English poet William Blake. After signing with Elektra Records in 1966, the Doors with Morrison recorded and released six studio albums in five years, some of which are generally considered among the greatest of all time, including their debut The Doors (1967), Strange Days (1967), Morrison Hotel (1970), and L.A. Woman (1971).\n[…]\nThe five, along with bass player Patty Sullivan, and now christened the Doors, recorded a six-song demo on September 2, 1965, at World Pacific Studios in Los Angeles. The band took their name from the title of Aldous Huxley's book The Doors of Perception, itself derived from a line in William Blake's The Marriage of Heaven and Hell: \"If the doors of perception were cleansed, everything would appear to man as it is: infinite\".\n[…]\nThe Doors (1967)\n[…]\nOutline of the Doors\n[…]\nThe Doors of Perception\n[…]\nShaw, Greg. The Doors on the Road. Omnibus Press, 1997. ISBN 978-0-7119-6546-1\n[…]\nSugerman, Danny. The Doors: The Complete Lyrics. Delta, October 10, 1992. ISBN 978-0-385-30840-3\n[…]\nThe Doors at IMDb\n[…]\nThe Doors discography at MusicBrainz\n[…]\nThe Doors discography at Discogs\n[…]\nThe Doors at AllMusic\n[…]\nTime Magazine's Life With the Lizard King: Photos of Jim and The Doors, 1968 Archived June 26, 2025, at the Wayback Machine\n[…]\n\"The Doors\". Rock and Roll Hall of Fame.\n[…]\nFederal Bureau of Investigation Record: The Vault – \"The Doors\" at fbi.gov"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Doors_of_Perception",
        "situacao": "ok",
        "texto": "The Doors of Perception is an autobiographical book written by Aldous Huxley. Published in 1954, it elaborates on his psychedelic experience under the influence of mescaline in May 1953. Huxley recalls the insights he experienced, ranging from the \"purely aesthetic\" to \"sacramental vision\", and reflects on their philosophical and psychological implications. In 1956, he published Heaven and Hell, a\n[…]\nOsmond arrived at Huxley's house in West Hollywood on Sunday, 3 May 1953, and recorded his impressions of the famous author as a tolerant and kind man, although he had expected otherwise. The psychiatrist had misgivings about giving the drug to Huxley, and wrote, \"I did not relish the possibility, however remote, of being the man who drove Aldous Huxley mad,\" but instead found him an ideal subject. Huxley was \"shrewd, matter-of-fact and to the point\" and his wife Maria \"eminently sensible\".\n[…]\nFor biographer David King Dunaway, The Doors of Perception, along with The Art of Seeing, can be seen as the closest Huxley ever came to autobiographical writing.\n[…]\nOther medical researchers questioned the validity of Huxley's account. According to Roland Fisher, the book contained \"99 percent Aldous Huxley and only one half gram mescaline\". Joost A.M. Meerloo found Huxley's reactions \"not necessarily the same as... other people's experiences.\"\n[…]\nA variety of influences have been claimed for the book. The psychedelic proselytiser Timothy Leary was given the book by a colleague soon after returning from Mexico where he had first taken psilocybin mushrooms in the summer of 1960. He found that The Doors of Perception corroborated what he had experienced 'and more too'. Leary soon set up a meeting with Huxley and the two became friendly.\n[…]\nThe Doors of Perception is usually published in a combined volume with Huxley's essay Heaven and Hell (1956)\n[…]\nThe Doors of Perception at Faded Page (Canada)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Doors",
        "situacao": "ok",
        "texto": "The Doors foi uma banda de rock estadunidense, fundada em 1965, em Los Angeles, Califórnia. O grupo era composto por Jim Morrison (voz), Ray Manzarek (teclados), Robby Krieger (guitarra) e John Densmore (bateria). A banda recebeu esse nome por sugestão de Morrison do título do livro de Aldous Huxley, The Doors of Perception.\n[…]\nA banda retirou o seu nome do título de um livro de Aldous Huxley, \"The Doors of Perception\", que, por seu turno, havia sido \"emprestado\" do verso de um poema do artista e poeta do século XIX, William Blake: \"If the doors of perception were cleansed, every thing would appear to man as it is: infinite\" (em pt: \"Se as portas da percepção fossem abertas, tudo apareceria como realmente é: infinito\").\n[…]\nBastante atividade foi anunciada em 2006 por ocasião do 40º aniversário do álbum homónimo de estreia da banda. Para comemorar a efeméride, saiu mais um box-set com os seis primeiros álbuns de estúdio, o livro \"The Doors by The Doors\" e foi anunciado o início da produção de um documentário oficial sobre o grupo.\n[…]\nEm 2007, o The Doors foram galardoados, juntamente com o Grateful Dead e Joan Baez, com o Grammy Lifetime Achievement Award nos Grammy Awards de 2007 e, a 28 de Fevereiro, receberam uma estrela no Passeio da Fama de Hollywood. Pelo meio, a 16 de Fevereiro, Ian Astbury abandona o Riders on the Storm para relançar a sua antiga banda The Cult, sendo substituído por Brett Scallions, antigo vocalista do Fuel.\n[…]\nThe Doors lançou nove álbuns de estúdio, sendo três destes após a morte de Jim Morrison. Além destes, a banda possui inúmeros singles, compilações e apresentações ao vivo.\n[…]\nThe Doors - Lifetime Achievement Award, Grammy Awards (2007) (vencedor)\n[…]\n«Página oficial» (em inglês)\n[…]\nThe Doors no Myspace\n[…]\n«The Doors» (em inglês). no All Music Guide\n[…]\n«The Doors» (em inglês). no Last.fm",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Rihanna",
      "descricao": "Cantora, compositora e empresária de Barbados, de Umbrella e Diamonds."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Rihanna é, na verdade, o nome do meio da cantora de Barbados. Qual é o seu primeiro nome?",
    "resposta": "Robyn",
    "distratores": [
      "Rachel",
      "Rebecca",
      "Roberta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rihanna"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rihanna",
        "situacao": "ok",
        "texto": "Robyn Rihanna Fenty (  ree-AN-ə; born February 20, 1988) is a Barbadian singer, songwriter, businesswoman, and actress. An influential figure in popular culture, she is known for her multifaceted career, artistic reinventions, and eclectic fashion style. With estimated sales exceeding 250 million records, Rihanna is one of the best-selling music artists of all time.\n[…]\nThe first female musician to achieve billionaire status, Rihanna founded the nonprofit Clara Lionel Foundation, the cosmetics brand Fenty Beauty, and the fashion brand Fenty under LVMH. She was named an ambassador by the Government of Barbados in 2018 and declared a National Hero of Barbados in 2021.\n[…]\nRobyn Rihanna Fenty was born in Saint Michael, Barbados, on February 20, 1988. She is the daughter of Monica (née Braithwaite), an Afro-Guyanese accountant, and Ronald Fenty, a Barbadian warehouse supervisor of African, Irish, English, and Scottish descent. Rihanna has two younger brothers, Rorrey and Rajad Fenty, as well as two half-sisters and a half-brother from her father's previous relationships.\n[…]\nAs a child, Rihanna sang Whitney Houston songs and \"A Whole New World\" (1992) into her hairbrush so frequently that her neighbours started calling her \"Robyn Redbreast\". She also mentioned that one of the earliest songs she developed an affection for was Houston's rendition of \"I Will Always Love You\" (1992). She credits that song with sparking her passion for music and partly attributes her presence in the industry to Houston.\n[…]\nHe highlighted her multifaceted career, \"from her business achievements through Fenty to her tremendous record as an activist and philanthropist\". Prime Minister Mia Mottley declared Rihanna a National Hero of Barbados during the Republic ceremony on November 30, 2021.\n[…]\nCulture of Barbados\n[…]\nMusic of Barbados\n[…]\nRihanna at AllMusic\n[…]\nRihanna at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rihanna",
        "situacao": "ok",
        "texto": "Robyn Rihanna Fenty (Bridgetown, 20 de fevereiro de 1988) é uma cantora, compositora, atriz e empresária barbadense. Considerada como uma das maiores artistas musicais da história, suas músicas já alcançaram as primeiras posições nas paradas de sucesso de todo o mundo, consagrando-a um ícone do pop. Rihanna ganhou destaque na indústria musical após o lançamento de seus dois primeiros álbuns de est\n[…]\nRobyn Rihanna Fenty nasceu no dia 20 de fevereiro de 1988 na pequena cidade de Bridgetown, paróquia de Saint Michael, capital da ilha caribenha Barbados, filha da contadora Monica Braithwaite e do supervisor de armazém Ronald Fenty. Rihanna tem dois irmãos, Rorrey e Rajad Fenty, e duas meias-irmãs e um meio-irmão por parte paterna, cada um nascido de mães diferentes, fruto de relacionamentos anteriores de Ronald. Rihanna tem ascendência irlandesa e afro-guianense herdada de seus progenitores.\n[…]\nDurante sua infância, ela andava por aí cantando canções de Whitney Houston como \"A Whole New World\" simulando um microfone com sua escova de cabelo, tanto que seus vizinhos começaram a chamá-la de \"Robyn Redbreast\". Ela também afirmou que uma das primeiras canções que ela lembra que a fez se apaixonar pela música foi: \"I Will Always Love You\". \"Foi muito inspirador e me fez desenvolver uma paixão pela música; na verdade, ela é parcialmente responsável por eu estar aqui nesta indústria\".\n[…]\nEm 22 de fevereiro de 2008, o ex-primeiro-ministro de Barbados, David Thompson, lançou o \"Dia Nacional de Rihanna\" em seu país. Embora não seja um feriado bancário, os barbadenses comemoram todos os anos em homenagem a cantora. Em fevereiro de 2017, Rihanna foi nomeada pela Universidade de Harvard a \"Humanitária do Ano\". O ex-presidente dos Estados Unidos, Barack Obama, elogiou o trabalho social da cantora e afirmou: \"Você se tornou uma força poderosa na luta para dar dignidade às pessoas\".\n[…]\nRihanna no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Despacito",
      "descricao": "Canção em espanhol de Luis Fonsi com Daddy Yankee, lançada em 2017"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título do sucesso Despacito, de Luis Fonsi e Daddy Yankee, quer dizer o quê em português?",
    "resposta": "Devagarinho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Despacito"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Despacito",
        "situacao": "ok",
        "texto": "\"Despacito\" (Latin American Spanish: [despaˈsito]; transl. \"Slowly\") is a Spanish-language song recorded by Puerto Rican singer Luis Fonsi, featuring Puerto Rican rapper Daddy Yankee. On January 13, 2017, it was released as the lead single from Vida, Fonsi's tenth studio album.\n[…]\nLuis Fonsi and Daddy Yankee performed \"Despacito\" live together for the first time at the 2017 Billboard Latin Music Awards on April 27, 2017, and later on The Voice season 12 finals on May 23, 2017. The only live performance by Justin Bieber and Luis Fonsi was at the José Miguel Agrelot Coliseum in Puerto Rico on April 18, 2017, during the former's Purpose World Tour.\n[…]\nBoth Luis Fonsi and Daddy Yankee included the song on their setlists for the 2017–18 Love + Dance World Tour and the 2017 Tamo En Vivo Europe Tour, respectively. On November 16, 2017, Luis Fonsi sang \"Despacito\" featuring Puerto Rican singer Victor Manuelle, Colombian band Bomba Estéreo and American disc jockey Diplo at the 18th Latin Grammy Awards.\n[…]\nOn January 28, 2018, Luis Fonsi and Daddy Yankee performed the song at the 60th Grammy Awards on the Madison Square Garden, becoming the 12th and 13th Latin artists ever to perform at the Grammy Awards. Fonsi also participated on United States President Joe Biden's inauguration by performing \"Despacito\" at the Celebrating America special on January 20, 2021.\n[…]\nLuis Fonsi, Daddy Yankee and Erika Ender showed their displeasure with the unauthorized use of the song for political purposes in Venezuela, criticizing Maduro's government use of the song as propaganda. On August 16, 2017, English television host James Corden remixed the song to comment on American President Donald Trump during his talk show The Late Late Show with James Corden."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Despacito",
        "situacao": "ok",
        "texto": "\"Despacito\" é uma canção do cantor porto-riquenho Luis Fonsi e do rapper compatriota Daddy Yankee, para o nono álbum de estúdio de Fonsi, Vida (2018). Em 12 de janeiro de 2017, a Universal Music Latin lançou \"Despacito\" e seu videoclipe, que mostra os dois artistas que interpretam a música no bairro La Perla de Old San Juan, Porto Rico e o bar local La Factoría. A música foi escrita por Fonsi, Eri\n[…]\nLuis Fonsi e Daddy Yankee tocaram \"Despacito\" ao vivo pela primeira vez no Billboard Latin Music Awards de 2017 em 27 de abril de 2017. Eles cantaram juntos novamente nas finais da temporada 12 do The Voice, com o candidato Mark Isaiah em 23 de maio de 2017. Em 12 de junho de 2017, Luis Fonsi tocou sozinho em Conan, um programa de entrevistas organizado por Conan, sendo sua primeira aparição na televisão de última hora nos Estados Unidos.\n[…]\nDaddy Yankee incluiu a música no set list para o seu Tour Europa de Tamo En Vivo, que durou de 2 de junho a 9 de julho de 2017. Fonsi também incluiu \"Despacito\" no seu Love + Dance World Tour, que começou em 1 de julho de 2017. Em 14 de setembro de 2017, Luis Fonsi performou o single no programa de entrevistas americano The Ellen DeGeneres Show. Erika Ender também cantou uma versão acústica da música durante uma sessão da Billboard, em 18 de setembro de 2017 para promover seu álbum Tatuajes.\n[…]\nFoi a primeira colaboração entre Luis Fonsi e Daddy Yankee com Bieber. O áudio do vídeo oficial do remix obteve 20 milhões de visualizações no YouTube nas suas primeiras 24 horas, tornando-se a terceira maior estreia de um vídeo relacionado à música em 2017 em setembro.\n[…]\n\"Despacito\" é uma das músicas incluídas no videojogo de dança da Ubisoft Just Dance 2018. Luis Fonsi e Daddy Yankee tiveram uma breve aparição no \"YouTube Rewind: The Shape of 2017\", um vídeo publicado em 6 de dezembro de 2017 com tendências na plataforma durante o ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Lucy in the Sky with Diamonds",
      "descricao": "Canção dos Beatles composta por John Lennon, do álbum Sgt. Pepper's Lonely Hearts Club Band, de 1967"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo John Lennon, de onde veio o título da canção Lucy in the Sky with Diamonds, dos Beatles?",
    "resposta": "De um desenho do filho Julian",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lucy_in_the_Sky_with_Diamonds"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lucy_in_the_Sky_with_Diamonds",
        "situacao": "ok",
        "texto": "\"Lucy in the Sky with Diamonds\" is a song by the English rock band the Beatles from their 1967 album Sgt. Pepper's Lonely Hearts Club Band. It was written primarily by John Lennon with assistance from Paul McCartney, and credited to the Lennon–McCartney songwriting partnership.\n[…]\nLennon's son Julian inspired the song with a nursery school drawing that he called \"Lucy – in the sky with diamonds\". Shortly before the album's release, speculation arose that the first letter of each of the nouns in the title intentionally spelled \"LSD\", the initialism commonly used for the hallucinogenic drug lysergic acid diethylamide.\n[…]\nThe Beatles recorded \"Lucy in the Sky with Diamonds\" in March 1967. Adding to the song's ethereal qualities, the musical arrangement includes a Lowrey organ part heavily treated with studio effects, and a drone provided by an Indian tambura. The song has been recognised as a key work in the psychedelic genre. Among its many cover versions, a 1974 recording by Elton John – with a guest appearance by Lennon – was a number one hit in the US and Canada.\n[…]\nLennon said that his inspiration for the song came when his three-year-old son Julian showed him a nursery school drawing that he called \"Lucy – in the Sky with Diamonds\", depicting his classmate Lucy Vodden. Julian later recalled: \"I don't know why I called it that or why it stood out from all my other drawings, but I obviously had an affection for Lucy at that age.\n[…]\nThe Beatles\n[…]\nIn 2009 Julian with James Scott Cook and Todd Meagher released \"Lucy\", a song that is a quasi-follow-up to the Beatles song. The cover of the EP showed four-year-old Julian's original drawing, that now is owned by David Gilmour from Pink Floyd.\n[…]\nElton John – Lucy in the Sky with Diamonds on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lucy_in_the_Sky_with_Diamonds",
        "situacao": "ok",
        "texto": "\"Lucy in the Sky with Diamonds\" é o título de uma canção composta e gravada pelos Beatles em 1967, como parte do oitavo álbum da banda, Sgt. Pepper's Lonely Hearts Club Band.\n[…]\nComposta por John Lennon (mas atribuída à dupla Lennon/McCartney), a canção gerou controvérsia por seu título, que foi interpretado como uma possível alusão ao LSD. Logo após o lançamento da canção, surgiu a especulação de que a junção da primeira letra de cada um dos substantivos do título formava, intencionalmente, \"LSD\". Apesar de Lennon negar isso veementemente, a British Broadcasting Corporation proibiu a canção.\n[…]\nJohn disse que a inspiração da música veio de um desenho que seu filho, Julian Lennon, trouxe de uma colega da escola e mostrou para o pai. A colega, chamada Lucy O'Donnell, apesar de ter sido a fonte de inspiração para uma das canções históricas dos Beatles, contou ao jornal The Guardian, em 2009, que não se relaciona com o tema: \"Esse tipo de música não tem muito a ver comigo\".\n[…]\nEm 1974, o professor e paleoantropologo Donald Johanson e seu aluno Tom Gray, ao descobrirem um fóssil de Australopithecus afarensis na Etiópia, atribuíram-lhe, inspirados pela música que tocava sem parar no acampamento da expedição, o nome de Lucy.\n[…]\nA canção foi regravada, posteriormente, por diversas bandas e artistas, como Elton John, em 1975. Também foi tema de abertura da telenovela Império, de 2014, desta vez interpretada pelo cantor Dan Torres, britânico radicado no Brasil. Em 1968, o cantor  Raulzito fez a versão brasileira \"Você Ainda Pode Sonhar\" e foi lançado no álbum Raulzito e os Panteras.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Taylor Swift",
      "descricao": "Cantora e compositora americana, autora de 1989 e Fearless."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os pais de Taylor Swift lhe deram esse nome em homenagem a que cantor e compositor americano de folk?",
    "resposta": "James Taylor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Taylor_Swift"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taylor_Swift",
        "situacao": "ok",
        "texto": "Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. An influential figure in popular culture, Swift is known for her autobiographical songwriting and artistic reinventions. She is the highest-grossing live music artist, the wealthiest female musician, and one of the best-selling music artists of all time.\n[…]\nTaylor Alison Swift was born on December 13, 1989, in West Reading, Pennsylvania. She is named after the singer-songwriter James Taylor; her parents chose a unisex name, hoping it would help her succeed in business. Her father, Scott Kingsley Swift, was a stockbroker for Merrill Lynch, and her mother, Andrea Gardner Swift (née Finlay), worked as a mutual fund marketing executive. Swift's younger brother, Austin, is an actor who manages her film projects.\n[…]\nFor the music videos of the 1989 and Reputation singles, she collaborated extensively with the director Joseph Kahn on eight videos; among them, she produced \"Bad Blood\", which won Best Music Video at the Grammy Awards in 2016. She worked with American Express for the \"Blank Space\" music video (which Kahn directed) and served as executive producer for the interactive app AMEX Unstaged: Taylor Swift Experience, for which she won a Primetime Emmy Award for Outstanding Interactive Program in 2015.\n[…]\nThrough her management company, TAS Rights Management, LLC, Swift has filed over 300 trademark applications in the US and holds more than 400 registrations worldwide, as of August 2025. Her filings include her name \"Taylor Swift\", her fanbase name \"Swifties\", album and tour titles, lyrics, slogans, artwork, and her cats' names.\n[…]\nList of American Grammy Award winners and nominees\n[…]\nTaylor Swift at AllMusic\n[…]\nTaylor Swift discography at Discogs\n[…]\nTaylor Swift at IMDb\n[…]\nTaylor Swift discography at MusicBrainz"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Taylor_Swift",
        "situacao": "ok",
        "texto": "Taylor Alison Swift (Reading, 13 de dezembro de 1989) é uma cantora, compositora, produtora musical, diretora e empresária americana. Conhecida por suas composições narrativas que geralmente concentram-se em sua vida pessoal, ao qual recebem ampla cobertura midiática. Nascida em West Reading, Pensilvânia, Swift mudou-se para Nashville, Tennessee, aos 14 anos, para seguir uma carreira na música cou\n[…]\nSwift explorou estilos folk nos álbuns Folklore e Evermore (ambos de 2020) e gêneros pop moderados em Midnights (2022) e The Tortured Poets Department (2024) — os dois que também debutaram com vendas acima de um milhão de cópias em seu país natal —, enquanto também regravou quatro de seus discos, sob o título (Taylor's Version) após uma disputa sobre a propriedade de suas masters com a Big Machine.\n[…]\nEm 2016, segundo a revista Forbes, a cantora é a famosa que mais dinheiro ganha no mundo. Taylor Swift teve em 2016, 170 milhões de dólares (154 milhões de euros) de proveitos.\n[…]\nEm homenagem aos dois shows consecutivos de Swift no U.S. Bank Stadium em Minneapolis, Minnesota, o governador Mark Dayton, declarou 31 de agosto de 2018 como o Taylor Swift Day no estado, elogiando-a como \"uma influência positiva para seus fãs por meio de seu exemplo de veracidade, graça, filantropia extensa e força de caráter\". Em 2019, Swift foi nomeada Mulher da Década pela Billboard por ser \"um dos artistas musicais mais talentosos de todos os tempos ao longo dos anos 2010\".\n[…]\nNa eleição presidencial americana de 2024, após o debate de 10 de setembro daquele ano, Swift endossou a candidatura de Kamala Harris e Tim Walz à presidência, ao qual Trump respondeu cinco dias depois com uma publicação na rede Truth Social, dizendo: \"I HATE TAYLOR SWIFT!\" (\"Eu odeio Taylor Swift\").\n[…]\nTaylor Swift: The End of an Era (2025)\n[…]\nTaylor Swift no Instagram\n[…]\nTaylor Swift no Facebook\n[…]\nTaylor Swift no Twitter\n[…]\nTaylor Swift no Threads",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Shakira",
      "descricao": "Cantora e compositora colombiana de pop latino, nascida Shakira Isabel Mebarak Ripoll"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Shakira, de origem árabe, herdado da família do pai, significa o quê?",
    "resposta": "Grata",
    "distratores": [
      "Rainha",
      "Estrela",
      "Bailarina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shakira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shakira",
        "situacao": "ok",
        "texto": "Shakira Isabel Mebarak Ripoll (  shə-KEER-ə, Spanish: [ʃaˈkiɾa isaˈβel meβaˈɾak riˈpol]; born 2 February 1977), known mononymously as Shakira, is a Colombian singer-songwriter, dancer, and record producer. Referred to as the \"Queen of Latin Music\", she has had a significant impact on the musical landscape of Latin America and has been credited with popularizing Hispanophone music globally, contrib\n[…]\nShakira Isabel Mebarak Ripoll was born on 2 February 1977 in Barranquilla, a city located on the northern Caribbean coast of Colombia. She is the only child of William Mebarak Chadid and Nidia Ripoll Torrado. Her parents are of Lebanese, Catalan, and Colombian descent, though she has distant Italian roots through an ancestor with the surname Pisciotti. She was raised Catholic and attended Catholic schools. Shakira has eight older half-siblings from her father's previous marriage.\n[…]\nIsabelia Herrera, a music editor, critic and curator, wrote of Shakira's \"fascinating, idiosyncratic songwriting\". Shakira is fluent in several languages, having written and recorded songs in English, Spanish, and Portuguese, among others.\n[…]\nIn April 2020, the World Literacy Foundation announced Shakira as the recipient of the 2020 Global Literacy Award for \"her significant contribution to the improvement of literacy for disadvantaged children around the world\". In May 2020, Shakira donated more than 50,000 face masks and ten respirators to combat the COVID-19 pandemic in her hometown of Barranquilla.\n[…]\nVH1 Driven: Shakira (article)\n[…]\nVH1 Driven: Shakira (video)\n[…]\nPareles, Jon (14 November 2005). \"Shakira, from lip to hip\". New Straits Times, p. L3.\n[…]\n\"Shakira pertahan orang Arab\". (8 November 2005). Berita Harian, p. 13.\n[…]\nNew York Times Magazine article on Shakira's philanthropic work on education.\n[…]\nShakira at AllMusic\n[…]\nShakira at IMDb\n[…]\nShakira's channel on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shakira",
        "situacao": "ok",
        "texto": "Shakira Isabel Mebarak Ripoll (Barranquilla, 2 de fevereiro de 1977) é uma cantora, compositora, empresária e filantropa colombiana. Conhecida como \"A Rainha da Música Latina\", ela teve um impacto significativo no cenário musical da América Latina e é reconhecida por popularizar a música hispanófona globalmente e por abrir as portas do mercado internacional para outros artistas latinos.\n[…]\nShakira Isabel Mebarak Ripoll nasceu em 2 de fevereiro de 1977 em Barranquilla, Atlântico, Colômbia. Ela é filha única de William Mebarak Chadid e Nidia Ripoll Torrado. Seus pais são de ascendência libanesa e espanhola, embora ela tenha raízes italianas distantes por meio de um ancestral com o sobrenome Pisciotti (de Canzo). Ela foi criada na fé católica e frequentou escolas dessa religião. Shakira tem oito meios-irmãos mais velhos do casamento anterior de seu pai.\n[…]\nDurante sua passagem pela cidade, ela visitou a Reserva dos Cedros, onde uma praça na floresta recebeu o nome dela, \"Shakira Isabel Mebarak\".\n[…]\nEm uma publicação intitulada Popular Culture in the Arab World: Arts, Politics, and the Media, o autor Andrew Hammond escreveu: \"Inspiradas pelo sucesso da cantora colombiana Shakira, que é extremamente popular no mundo árabe, onde sua origem libanesa é motivo de orgulho, cantoras como a libanesa Nawal Al Zoghbi e a marroquina Samira Said mudaram sua imagem e som na tentativa de seguir seus passos\".\n[…]\nShakira entrou em um relacionamento com o jogador de futebol espanhol Gerard Piqué, zagueiro do FC Barcelona e da seleção espanhola em 2010. Em 2013, nasceu o primeiro filho do casal, Milan Piqué Mebarak. Ela deu à luz seu segundo filho, Sasha Piqué Mebarak, em 2015. Em 2017 surgiram rumores de que ambos estariam se separando, mas o boato foi rapidamente desmentido pelo casal. Em junho de 2022 anunciaram a separação, após uma suposta traição por parte do atleta se tornar pública.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Abbey Road",
      "descricao": "Álbum dos Beatles lançado em 1969, com a capa da banda atravessando uma faixa de pedestres em Londres"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título do álbum Abbey Road, dos Beatles, é o nome de quê?",
    "resposta": "Da rua do estúdio de gravação",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abbey_Road",
      "https://en.wikipedia.org/wiki/Abbey_Road_Studios"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abbey_Road",
        "situacao": "ok",
        "texto": "Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969 by Apple Records. It is the last album the group recorded – although Let It Be had mostly been recorded earlier, its release was delayed due to production issues. Abbey Road was mostly recorded in April, July and August 1969, and topped the record charts in both the United States and the Uni\n[…]\nSeveral artists have covered some or all of the side-two medley, including Phil Collins (for the Martin/Beatles tribute album In My Life), The String Cheese Incident, Transatlantic and Tenacious D (who performed the medley with Phish keyboardist Page McConnell). Furthur, a jam band including former Grateful Dead members Bob Weir and Phil Lesh, played the entire Abbey Road album during its Spring Tour 2011.\n[…]\nIn June 1970, Allen Klein reported that Abbey Road was the Beatles' best-selling album in the US with sales of about five million. By 1992, Abbey Road had sold nine million copies. The album became the ninth-most downloaded on the iTunes Store a week after it was released there on 16 November 2010. A CNN report stated it was the best-selling vinyl album of 2011. It is the first album from the 1960s to sell more than five million albums since 1991 when Nielsen SoundScan began tracking sales.\n[…]\nIn 2001, Abbey Road was certified 12× platinum by the Recording Industry Association of America (RIAA). The album continues to be reissued on vinyl. It was included as part of the Beatles' Collector's Crate series in September 2009 and saw a remastered LP release on 180-gram vinyl in 2012.\n[…]\nThe Beatles timeline\n[…]\nThe Beatles albums discography\n[…]\nAbbey Road at Discogs (list of releases)\n[…]\nBeatles comments on each song\n[…]\nBeatles engineer Geoff Emerick on Abbey Road – A track-by-track walkthrough\n[…]\nLive webcam at the Abbey Road zebra crossing\n[…]\nThe Beatles y la foto de la portada de Abbey Road"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abbey_Road_Studios",
        "situacao": "ok",
        "texto": "Abbey Road Studios (formerly EMI Recording Studios) is a music recording studio at 3 Abbey Road, St John's Wood, City of Westminster, London. It was established in November 1931 by the Gramophone Company, a predecessor of British music company EMI, which owned it until Universal Music Group (UMG) took control of part of it in 2013. It is ultimately owned by UMG's subsidiary Virgin Records.\n[…]\nEMI is closely associated with the Beatles, who recorded almost all of their albums and hits there between 1962 and 1970 using the four-track REDD mixing console designed by Peter K. Burkowitz. The Beatles named their 1969 album Abbey Road after the road where the studios are situated. Iain Macmillan took the album's cover photograph outside the studios, with the result that the nearby zebra crossing has become a place of pilgrimage for Beatles fans.\n[…]\nFrom 18 July to 11 September 1983, the public had a rare opportunity to see inside the Studio Two room, where the Beatles made most of their records. While a new mixing console was being installed in the control room, the studio was used to host a video presentation called The Beatles at Abbey Road. The soundtrack to the video had a number of recordings that were not made commercially available until the release of The Beatles Anthology project over a decade later.\n[…]\nPaul McCartney, speaking to BBC Newsnight on 16 February 2010, said there had been efforts to save Abbey Road by \"a few people who have been associated with the studio for a long time,\" although he did not name them or include himself among them. \"I have so many memories there with the Beatles,\" McCartney said, \"It still is a great studio. So it would be lovely for someone to get a thing together to save it.\"\n[…]\nAbbey Road Studios – official site\n[…]\nGoogle presents Inside Abbey Road\n[…]\nAbbey Road Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abbey_Road",
        "situacao": "ok",
        "texto": "Abbey Road é o décimo primeiro álbum de estúdio da banda britânica de rock The Beatles, lançado em 26 de setembro de 1969 pela Apple Records. É o último álbum que o grupo gravou, embora Let It Be (1970) tenha sido o último álbum concluído antes da separação da banda em abril de 1970. Foi gravado principalmente em abril, julho e agosto de 1969, e liderou as paradas de discos nos Estados Unidos e no\n[…]\nDepois de uma pequena quantidade de trabalho naquele mês e uma sessão para \"You Never Give Me Your Money\" em 6 de maio, o grupo fez uma pausa de oito semanas antes de recomeçar em 2 de julho. A gravação continuou durante julho e agosto, e a última trilha de apoio, para \"Because\", foi gravada em 1.º de agosto. Os overdubs continuaram durante o mês, com a sequência final do álbum sendo reunida em 20 de agosto – a última vez que todos os quatro Beatles estavam presentes em um estúdio juntos.\n[…]\nOs Beatles fizeram pouca promoção de Abbey Road diretamente, e nenhum anúncio público foi feito sobre a separação da banda até que Paul anunciasse que estava deixando o grupo em abril de 1970. Nessa época, o projeto Get Back (agora renomeado Let It Be) havia sido reexaminado, com overdubs e sessões de mixagem continuando em 1970. Portanto, Let It Be se tornou o último álbum a ser finalizado e lançado pelos Beatles, embora sua gravação tenha começado antes de Abbey Road.\n[…]\nEm 2001, Abbey Road foi certificado 12 vezes como disco de platina pela Associação Americana da Indústria de Gravação. O álbum continua sendo relançado em vinil. Foi incluído como parte da série Collector's Crate dos Beatles, em setembro de 2009, e teve um lançamento LP remasterizado em vinil de 180 gramas em 2012. Uma versão Super Deluxe do álbum, que contou com novas mixagens por Giles Martin, foi lançada em setembro de 2019 para comemorar o 50.º aniversário do álbum original.\n[…]\nGeorge Martin – produção, mixagem (com os Beatles)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Salsa",
      "descricao": "Gênero de música dançante desenvolvido por músicos caribenhos, sobretudo cubanos e porto-riquenhos, em Nova York nos anos sessenta e setenta"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A salsa, gênero dançante criado por músicos caribenhos em Nova York, tem um nome que significa o quê em espanhol?",
    "resposta": "Molho",
    "distratores": [
      "Festa",
      "Fogo",
      "Dança"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Salsa_music"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Salsa_music",
        "situacao": "ok",
        "texto": "Salsa is a style of dance music mainly influenced by Caribbean traditions and music from Cuba, Puerto Rico, the Dominican Republic, and other countries such as Colombia and Venezuela, where African cultural syncretism in music and dance blends with European influences and indigenous instruments, along with contributions from the contiguous United States. Because most of the basic musical component\n[…]\nOn the other hand, even some New York based artists were originally against the commercialization of music under that name. Machito said: \"There's nothing new about salsa, it is just the same old music that was played in Cuba for over fifty years.\" Similarly, Tito Puente stated: \"The only salsa I know is sold in a bottle called ketchup. I play Cuban music.\" Cuban musicologist Mayra Martínez wrote that \"the term salsa obscured the Cuban base, the music's history or part of its history in Cuba.\n[…]\nThere are other common rhythms found in salsa music: the chord beat, the tumbao, and the Montuno rhythm.\n[…]\nDuring this period, Cuban musicians had more of an impact on jazz than salsa in the United States. Even though the Mariel boatlift took hundreds of Cuban musicians to the US, many of them were astonished to hear what sounded to them like Cuban music from the 1950s. Cuban conguero Daniel Ponce summarized this sentiment: \"When the Cubans arrived in New York, they all said 'Yuk!\n[…]\nCuban popular music played a major role in the development of many contemporary genres of African popular music. John Storm Roberts states: \"It was the Cuban connection, but increasingly also New York salsa, that provided the major and enduring influences—the ones that went deeper than earlier imitation or passing fashion.\n[…]\n1979 - Salsa: Latin Music in the Cities. Directed by Jeremy Marre.\n[…]\nWaxer, Lise 2002. Situating Salsa: Global Markets and Local Meanings in Latin Popular Music. Routledge. ISBN 0815340206"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salsa_%28m%C3%BAsica%29",
        "situacao": "ok",
        "texto": "A salsa é uma mescla de ritmos musicais tais como o son montuno, o mambo, cha-cha-chá e a rumba cubana. Recebeu, ainda, influências do merengue (da República Dominicana), do Calipso (de Trinidad e Tobago), da cúmbia colombiana, do rock norte-americano e do reggae jamaicano. Hoje, absorve influências de ritmos mais modernos como rap ou techno.\n[…]\nEm castelhano salsa significa \"tempero\" e a adoção do nome transmite a ideia de uma música com \"sabor\". Foi a banda La Sonora Matancera, quando saiu de Cuba durante a Revolução Cubana e se instalou no México, que criou o nome salsa. O movimento que originou este novo estilo de música latino-americana começou em Nova York, quando um grupo de jovens músicos começou a mesclar sons e ritmos visando a criar uma sonoridade que tivesse um \"sabor\" latino-americano.\n[…]\nA salsa surgiu em Cuba, antes da década de 40, do gênero musical cubano chamado son montuno. O termo \"salsa\" não existia na época e só passou a ser usado a partir da década de 70 em Nova Iorque, depois que a música já era popular na cidade.\n[…]\nO reavivamento comercial da salsa na década de 1990 deve-se, em parte, ao produtor e pianista Sergio George. George implementou uma mistura de salsa com gêneros musicais contemporâneos, como o Pop e a música romântica. A nova geração de salsa viu a ascensão de artistas como Tito Nieves, La India e Marc Anthony. George também produziu álbuns da banda de salsa japonesa Orquestra de la Luz. Brenda K.\n[…]\nEm 2000, surgiu a primeira companhia especializada em salsa no Brasil, a Conexión Caribe Companhia de Danças, que, em 2001, criou o Encontro Nacional de Salsa, evento anual que, a partir de 2003, se transformou no Congresso Mundial de Salsa do Brasil, um dos maiores eventos do gênero no mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Thriller",
      "descricao": "Álbum de Michael Jackson produzido por Quincy Jones"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Das nove faixas do álbum Thriller, de Michael Jackson, quantas foram lançadas como singles?",
    "resposta": "Sete",
    "distratores": [
      "Três",
      "Cinco",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Thriller_(album)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thriller_(album)",
        "situacao": "ok",
        "texto": "Thriller is the sixth studio album by the American singer Michael Jackson. It was released on November 29, 1982, through Epic Records. It was produced by Quincy Jones, who produced Jackson's previous album, Off the Wall (1979). Recording took place from April to November 1982 at Westlake Recording Studios in Los Angeles, California, with a budget of $750,000 (equivalent to $2,502,155 in 2025).\n[…]\nIn The New York Times, Holden highlighted the album's significance: \"Pop music will never be quite the same in the wake of Michael Jackson's ''Thriller,'' [...] Today echoes of Michael Jackson's quavering, exhilarated tenor resound across the pop spectrum, especially in the records of youthful pop- soul singers coming up the ladder.\" Jay Cocks of Time summed up the three main singles from the album, saying, \"The pulse of America and much of the rest of the world moves irregularly, beating in time to the tough strut of 'Billie Jean', the asphalt aria of 'Beat It', the supremely cool chills of 'Thriller'.\" Cocks also praised Thriller for being \"a thorough restoration of confidence, a rejuvenation\" and \"bringing black music back to mainstream radio\".\n[…]\nAuthor, music critic and journalist Nelson George wrote in 2004, \"It's difficult to hear the songs from Thriller and disengage them from the videos. For most of us the images define the songs. In fact it could be argued that Michael is the first artist of the MTV age to have an entire album so intimately connected in the public imagination with its imagery\". Short films like Thriller largely remained unique to Jackson, while the group dance sequence in \"Beat It\" has been frequently imitated.\n[…]\nBut especially in the album's seven hit singles (out of nine songs), the music stands on its own.\" Culture critic Nelson George wrote that Jackson \"has educated R. Kelly, Usher, Justin Timberlake and countless others with Thriller as a textbook\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thriller_%28%C3%A1lbum%29",
        "situacao": "ok",
        "texto": "Thriller é o sexto álbum de estúdio em carreira solo do artista estadunidense Michael Jackson, lançado em 30 de novembro de 1982, através da Epic Records. Assim como o álbum anterior do cantor, Off the Wall (1979), que foi aclamado e bem-sucedido comercialmente, Thriller foi inteiramente produzido por Quincy Jones e coproduzido por Jackson. As gravações do projeto ocorreram entre 14 de abril a 8 d\n[…]\nThriller foi lançado em 30 de novembro de 1982 nos Estados Unidos, no Canadá, no Reino Unido, na Austrália e no Japão. No dia seguinte, foi disponibilizado no resto do continente europeu, oceânico e asiático. Dois dias depois, foi disponibilizado no resto do mundo. Foram lançados sete singles do disco.\n[…]\nO primeiro, \"The Girl Is Mine\", conta com a participação de Paul McCartney e foi vista como uma má escolha para ser o primeiro single do disco, levando alguns a acreditar que o álbum seria uma decepção, bem como sugestões de que Jackson estaria se direcionando para um público de cor branca. Apesar disto, \"The Girl Is Mine\" foi seguida por \"Billie Jean\", que tornou-se o maior sucesso de Jackson nos Estados Unidos, liderando a tabela musical Billboard Hot 100 por sete semanas consecutivas.\n[…]\nMas, especialmente nos sete singles do álbum (de um total de nove canções), a música está no seu próprio caminho\".\n[…]\nThriller 25 foi lançado em CD, USB flash drive e em disco de vinil com uma nova capa (constituída de uma fotografia tirada nas gravações do vídeo musical da faixa homônima), sete faixas bônus, uma nova canção, chamada \"For All Time\", um trecho da voice-over de Vincent Price gravada para \"Thriller\", e cinco remixes que incluíram Fergie, will.i.am, Kanye West e Akon.\n[…]\n\"Who Do You Know?\" (Michael Jackson) (lançada no álbum Thriller 40)\n[…]\n\"Attitude\" (Michael Jackson, Kathy Wakefield, Michel Pierre)\n[…]\n\"Sunset Driver\" (Michael Jackson) (versão de 1982 lançada no álbum The Ultimate Collection)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Harpa",
      "descricao": "Instrumento de cordas dedilhadas, de formato triangular, com cordas em ângulo em relação à caixa de ressonância."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A harpa de concerto moderna muda a afinação das cordas com pedais acionados pelos pés. Quantos pedais ela tem?",
    "resposta": "Sete",
    "distratores": [
      "Dois",
      "Quatro",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pedal_harp"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pedal_harp",
        "situacao": "ok",
        "texto": "The pedal harp (also known as the concert harp) is a large and technologically modern harp, designed primarily for use in art music. It may be played solo, as part of a chamber ensemble, or in an orchestra. It typically has 47 strings with seven strings per octave, giving a range of six and a half octaves.\n[…]\nMadame de Genlis, for example, in her Méthode, published in Paris in the early 19th century, promotes the use of all fingers, while Roslyn Rensch suggests that Mlle de Guînes, the harpist for whom Mozart wrote his Concerto for Flute and Harp, might occasionally have used all five fingers when playing the harp. In more modern music, the little finger is used very rarely, for example in simultaneous cluster chords, such as in Daniel Kessner's Sonatina.\n[…]\nArt in America was the first known rock band featuring a pedal harp to appear on a major record label, released in 1983. The pedal harp was also present in the Michael Kamen and Metallica concert and album, S&M, as part of the San Francisco Symphony orchestra. R&B singer Maxwell featured harpist Gloria Agostini in 1997 on his cover of Kate Bush's \"This Woman's Work\".\n[…]\nLyon and Healy, Camac Harps, Salvi Harps, and other manufacturers also make electroacoustic pedal harps. The electroacoustic pedal harp is a modified concert harp, with piezoelectric pickups at the base of each string and an amplifier. Electroacoustic harps are a blend of electric and acoustic, with the option of using an amplifier or playing the harp just like a normal pedal harp."
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Piano de cauda",
      "descricao": "Piano de formato horizontal, com cordas dispostas em estrutura em forma de asa."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O teclado padrão de um piano de cauda moderno tem quantas teclas, somando as brancas e as pretas?",
    "resposta": "Oitenta e oito",
    "distratores": [
      "Setenta e seis",
      "Noventa e seis",
      "Cem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano",
      "https://en.wikipedia.org/wiki/Grand_piano"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano",
        "situacao": "ok",
        "texto": "A piano is a keyboard instrument that produces sound when its keys are pressed, activating an action mechanism where hammers strike strings. Modern pianos have a row of 88 black and white keys—with the exception of the Bosendörfer and Stuart & Sons pianos—and tuned to a chromatic scale in equal temperament. A musician who specializes in piano is called a pianist.\n[…]\nIn the period from about 1790 to 1860, the Mozart-era piano underwent significant changes that led to the modern structure of the instrument.\n[…]\nModern pianos have two basic configurations, the grand piano and the upright piano, with various styles of each. There are also specialized and novelty pianos, electric pianos based on electromechanical designs, electronic pianos that synthesize piano-like tones using oscillators, and digital pianos using digital samples of acoustic piano sounds.\n[…]\nModern Disklaviers typically include an array of electronic features, such as a built-in tone generator for playing back MIDI accompaniment tracks, speakers, MIDI connectivity that supports communication with computing devices and external MIDI instruments, additional ports for audio and SMPTE input/output (I/O), and Internet connectivity. Disklaviers have been manufactured in the form of upright, baby grand, and grand piano styles (including a nine-foot concert grand).\n[…]\nAt a 2023 auction in Sotheby's in London, Mercury's Yamaha baby grand piano, which he used to compose \"Bohemian Rhapsody\" among other Queen songs, sold for £1.7 million ($2.1 million), which Sotheby's state is a record for a composer's piano. Modernist styles of music have also appealed to composers writing for the modern grand piano, including John Cage and Philip Glass.\n[…]\nAgraffe – Internal part of a grand piano\n[…]\nList of piano composers\n[…]\nThe Piano in Polish Collections (historical instruments)\n[…]\nGallery of Piano Plates and Medallions"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Grand_piano",
        "situacao": "ok",
        "texto": "A piano is a keyboard instrument that produces sound when its keys are pressed, activating an action mechanism where hammers strike strings. Modern pianos have a row of 88 black and white keys—with the exception of the Bosendörfer and Stuart & Sons pianos—and tuned to a chromatic scale in equal temperament. A musician who specializes in piano is called a pianist.\n[…]\nIn the period from about 1790 to 1860, the Mozart-era piano underwent significant changes that led to the modern structure of the instrument.\n[…]\nModern pianos have two basic configurations, the grand piano and the upright piano, with various styles of each. There are also specialized and novelty pianos, electric pianos based on electromechanical designs, electronic pianos that synthesize piano-like tones using oscillators, and digital pianos using digital samples of acoustic piano sounds.\n[…]\nModern Disklaviers typically include an array of electronic features, such as a built-in tone generator for playing back MIDI accompaniment tracks, speakers, MIDI connectivity that supports communication with computing devices and external MIDI instruments, additional ports for audio and SMPTE input/output (I/O), and Internet connectivity. Disklaviers have been manufactured in the form of upright, baby grand, and grand piano styles (including a nine-foot concert grand).\n[…]\nAt a 2023 auction in Sotheby's in London, Mercury's Yamaha baby grand piano, which he used to compose \"Bohemian Rhapsody\" among other Queen songs, sold for £1.7 million ($2.1 million), which Sotheby's state is a record for a composer's piano. Modernist styles of music have also appealed to composers writing for the modern grand piano, including John Cage and Philip Glass.\n[…]\nAgraffe – Internal part of a grand piano\n[…]\nList of piano composers\n[…]\nThe Piano in Polish Collections (historical instruments)\n[…]\nGallery of Piano Plates and Medallions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Piano",
        "situacao": "ok",
        "texto": "Piano, apócope derivado do italiano pianoforte, é um instrumento musical de cordas percussivas, segundo o sistema de classificação de Hornbostel-Sachs.\n[…]\nOs pianos modernos, embora não se diferenciem dos mais antigos no que se refere aos tons, trazem novos formatos estéticos e de materiais que compõem o instrumento. Um piano comum tem, geralmente, oito lás, oito sis bemóis, oito sis, oito dós, sete dós sustenidos, sete rés, sete mis bemóis, sete mis, sete fás, sete fás sustenidos, sete sóis e sete sóis sustenidos, formando um total de 88 notas musicais.\n[…]\nHá ainda o piano digital que guarda em uma memória eletrônica os timbres (de piano, de cravo, de órgão, etc.) a serem reproduzidos. Difere dos teclados digitais por simular as teclas pesadas dos pianos acústicos e também por imitar o seu formato externo.\n[…]\nPraticamente todos os pianos modernos têm 88 teclas (sete oitavas mais uma terça menor, desde o Lá-2 (ou A0 científico) (27,5 Hz) ao Dó 7 (ou C8 científico) (4 186 Hz)). Muitos pianos mais antigos têm 84 teclas (exatamente sete oitavas, desde o Lá-2 (A0 científico) (27,5 Hz) ao Lá 6 (A7 científico) (3 520 Hz). Também existem pianos com oito oitavas, da marca austríaca Bösendorfer ou de marca francesa Stephen Paulello.\n[…]\nTradicionalmente, as teclas das notas naturais (dó, ré, mi, fá, sol, lá e si) são brancas, e as teclas dos acidentes (dó ♯, ré ♯, fá ♯, sol ♯ e lá ♯ na ordem dos sustenidos e as correspondentes ré ♭, mi ♭, sol ♭, lá ♭ e si ♭ na ordem dos bemóis) são da cor preta, feitas de madeira, sendo as pretas revestidas geralmente por ébano e as brancas de marfim (já em desuso e proibido no mundo) ou de material plástico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "The Beatles",
      "descricao": "Banda de rock britânica formada em Liverpool em 1960 por John Lennon, Paul McCartney, George Harrison e, depois, Ringo Starr"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em fevereiro de 1964, a estreia dos Beatles na TV americana, no programa de Ed Sullivan, foi vista por cerca de quantas pessoas?",
    "resposta": "Setenta e três milhões",
    "distratores": [
      "Sete milhões",
      "Vinte e cinco milhões",
      "Cento e cinquenta milhões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Ed_Sullivan_Show",
      "https://en.wikipedia.org/wiki/The_Beatles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Ed_Sullivan_Show",
        "situacao": "ok",
        "texto": "The Ed Sullivan Show is an American television variety show that ran on CBS from June 20, 1948, to March 28, 1971, and was hosted by New York entertainment columnist Ed Sullivan. It was replaced in September 1971 by the CBS Sunday Night Movie.\n[…]\nThe 1965–66 season premiere starred the Beatles in an episode airing on September 12, which was the last episode to air in black and white. This occurred because the episode was taped at the Beatles' convenience on August 14, the eve of their Shea Stadium performance and a two-week tour of North America, slightly before the program was ready for color transmission.\n[…]\nThe Supremes were a special act for The Ed Sullivan Show. In addition to 14 appearances, they were a personal favorite of Sullivan, who affectionately called them \"The Girls\". Over the five years they performed on the program, the Supremes performed 15 of their hit singles, and numerous Broadway showtunes and other non-Motown songs. The group featuring the most popular lineup of Diana Ross, Mary Wilson, and Florence Ballard appeared 7 times from December 1964 through May 1967.\n[…]\nSince moving to CBS from NBC, Letterman taped his show in the Ed Sullivan Theater, the studio where Sullivan also staged his program, until his 2015 retirement. This parody was reprised on May 21, 2026 for the final episode of The Late Show with Stephen Colbert, beginning with a clip of Sullivan before splicing together clips of many former and current American late night hosts.\n[…]\nIlson, Bernie. Sundays with Sullivan: How the Ed Sullivan Show brought Elvis, the Beatles and Culture to America. Lanham, Maryland: Taylor Trade Publishing, (2009). ISBN 978-1-58979-390-3 pp. 115–118 (entire chapter devoted to Marlo Lewis).\n[…]\nThe Ed Sullivan Show at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Beatles",
        "situacao": "ok",
        "texto": "The Beatles were an English rock band formed in Liverpool in 1960. The band comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band in popular music and were integral to the development of 1960s counterculture and the recognition of popular music as an art form. Rooted in skiffle, beat and 1950s rock 'n' roll, their sound incorporated \n[…]\nOn 7 February 1964, the Beatles departed from Heathrow with an estimated 4,000 fans waving and screaming as the aircraft took off. Upon landing at New York's John F. Kennedy International Airport, they were greeted by an uproarious crowd estimated at 3,000. They gave their first live US television performance two days later on The Ed Sullivan Show, watched by approximately 73 million viewers in over 23 million households, or 34% of the American population.\n[…]\nOn 26 January 2014, McCartney and Starr performed together at the 56th Annual Grammy Awards, held at the Staples Center in Los Angeles. The following day, The Night That Changed America: A Grammy Salute to the Beatles was taped in the Los Angeles Convention Center's West Hall. It aired on 9 February, the exact date of – and at the same time and on the same network as – the original broadcast of the Beatles' first US television appearance on The Ed Sullivan Show, 50 years earlier.\n[…]\nTheir musical innovations and commercial success inspired musicians worldwide. Many artists have acknowledged the Beatles' influence and enjoyed chart success with covers of their songs. On radio, their arrival marked the beginning of a new era; in 1968, the programme director of New York's WABC radio station forbade his DJs from playing any \"pre-Beatles\" music, marking the defining line of what would be considered oldies on American radio.\n[…]\nBeatles '64 (2024) (about the cultural impact of the Beatles' first US visit in 1964)\n[…]\nThe Beatles – FBI file"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Ed_Sullivan_Show",
        "situacao": "ok",
        "texto": "The Ed Sullivan Show foi um programa de televisão estadunidense de variedades, que foi exibido de 20 de junho de 1948 até 6 de junho de 1971 e apresentado por Ed Sullivan. O programa era exibido pela rede de televisão CBS aos domingos as 20h.\n[…]\nO programa exibia todo tipo de atrações, de apresentações de grupos de rock a óperas, de comediantes a espetáculos de ballet. O programa tinha a mesma essência dos vaudeville, inclusive Sullivan regularmente apresentava ex-participantes desses espetáculos.\n[…]\nNa noite de 9 de fevereiro de 1964, o The Ed Sullivan Show chegou ao auge da popularidade, com a apresentação do grupo britânico The Beatles, com uma audiência estimada em 70 milhões de norte-americanos. Até à chegada do homem à lua, em 20 de julho de 1969, esta fora até então a maior audiência da televisão americana.\n[…]\nNeste programa,apresentaram-se artistas como Judy Garland, Elvis Presley, The Beach Boys, The Rolling Stones, The Mamas and The Papas, The Jackson 5, The Supremes, The Doors, James Brown, Jefferson Airplane, Ray Charles, Stevie Wonder, Janis Joplin, Creedence Clearwater Revival, The Beatles, The Bee Gees, Carpenters, Carmen Miranda, Rosa Morena e até a famosa cantora francesa Edith Piaf, entre muitos outros, que se tornariam vídeos musicais clássicos.\n[…]\nO programa era produzido no CBS-TV Studio 50 em Nova Iorque, que passou a ter o nome de The Ed Sullivan Theater. Hoje o talk show The Late Show with Stephen Colbert é produzido lá.\n[…]\nThe Ed Sullivan Show no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Queen",
      "descricao": "Banda de rock britânica formada em Londres em 1970, de Freddie Mercury e Brian May"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No Live Aid, em 1985, a apresentação do Queen, considerada uma das maiores da história do rock, durou cerca de quanto tempo?",
    "resposta": "Vinte minutos",
    "distratores": [
      "Cinco minutos",
      "Uma hora",
      "Duas horas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Live_Aid",
      "https://en.wikipedia.org/wiki/Queen_(band)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Live_Aid",
        "situacao": "ok",
        "texto": "Live Aid was a two-venue benefit concert and music-based fund-raising initiative held on Saturday, 13 July 1985. The event was organised by Bob Geldof and Midge Ure to raise further funds for relief of the 1983–1985 famine in Ethiopia, a movement that started with the release of the successful charity single \"Do They Know It's Christmas?\" in December 1984. Billed as the \"global jukebox\", Live Aid \n[…]\nQueen's twenty-one-minute performance, which began at 6:41 pm, was voted the greatest live performance in the history of rock in a 2005 industry poll of more than 60 artists, journalists and music industry executives. Freddie Mercury at times led the crowd in unison refrains, and his sustained note – \"Aaaaaay-o\" – during the a cappella section came to be known as \"The Note Heard Round the World\".\n[…]\nOn 12 September 2018, YouTube launched the Official Live Aid channel with a total of 87 videos from the Live Aid 1985 concert. According to the channel, all earnings from viewings go to the Band Aid Trust. As with the digital download release, a few notable performances are not included for unknown reasons, although Queen's set was uploaded to the channel with its inclusion on the digital download.\n[…]\nMany artists and performers at Live Aid gained prominence and positive commercial influence. For all the cultural, charitable, and technological significance of 1985's Live Aid, its most immediate impact was on the charts. In the UK, for example, No Jacket Required by Phil Collins and Madonna's Like a Virgin leapt back into the top ten. Queen's three-year-old Greatest Hits rose fifty-five places into the top twenty, followed by Freddie Mercury's Mr. Bad Guy.\n[…]\nHow Live Aid was saved for history: BBC News\n[…]\nIndepth-interview between Hal Uplinger, producer of the \"Live Aid Concert\", the United States event, and the National Museum of American History (part of the Smithsonian Institution)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Queen_(band)",
        "situacao": "ok",
        "texto": "Queen  are  a British rock band formed in London in 1970 by Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), and Roger Taylor (drums, vocals), and later joined by John Deacon (bass). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, su\n[…]\n\"Another One Bites the Dust\" from The Game (1980) became their best-selling single, and their 1981 compilation album Greatest Hits is the best-selling album in the UK and has been certified 9× Platinum in the US by the Recording Industry Association of America (RIAA). Their performance at the 1985 Live Aid concert is ranked among the greatest in rock history by various publications. In August 1986, Mercury gave his last performance with Queen at Knebworth, England.\n[…]\nIn January 1985, Queen headlined two nights of the first Rock in Rio festival at Rio de Janeiro, Brazil, and played in front of over 300,000 people each night. The Boston Globe described it as a \"mesmerising performance\". Highlights from both nights were released on VHS as Queen: Live in Rio, which was broadcast on MTV in the US. In April and May 1985, Queen completed the Works Tour with sold-out shows in Australia and Japan.\n[…]\nThe band also played behind the Iron Curtain when they performed to a crowd of 80,000 at the Népstadion in Budapest (released in the concert film Hungarian Rhapsody: Queen Live in Budapest), in what was one of the biggest rock concerts ever held in Eastern Europe. More than one million people saw Queen on the tour—400,000 in the UK alone, a record at the time.\n[…]\nAcclaimed for their stadium rock, in 2005 an industry poll ranked Queen's performance at Live Aid in 1985 as the best live act in history. In 2007, they were also voted the greatest British band in history by BBC Radio 2 listeners."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Live_Aid",
        "situacao": "ok",
        "texto": "Live Aid foi um concerto realizado em 13 de julho de 1985. O evento foi organizado por Bob Geldof e Midge Ure com o objetivo de arrecadar fundos a fim de acabar com a fome na Etiópia. Os shows foram realizados no Wembley Stadium em Londres (com uma plateia de aproximadamente 82 000 pessoas) e no John F. Kennedy Stadium na Filadélfia (aproximadamente 99 000 pessoas). Alguns artistas apresentaram-se\n[…]\nDurante os concertos os telespectadores eram chamados a contribuir com a causa do Live Aid. Trezentas linhas telefônicas foram disponibilizadas pela BBC para permitir que doações fossem feitas por cartão de crédito. O número de telefone e o endereço para o envio de cheques eram repetidos a cada vinte minutos.\n[…]\nQueen (apresentada pelos comediantes Mel Smith e Griff Rhys Jones) - \"Bohemian Rhapsody\" (trecho), \"Radio Ga Ga\", \"Hammer to Fall\", \"Crazy Little Thing Called Love\", \"We Will Rock You\" (trecho), \"We Are the Champions\" (W 18:44);\n[…]\nEm um desses momentos, Paul McCartney teve de regravar seus vocais para \"Let It Be\" em estúdio, quase vinte anos depois da apresentação original, ou então tanto \"Let It Be\" quanto a conclusão do show em Wembley teriam de ser deixados de fora do DVD por razões de continuidade.\n[…]\nO Live Aid será adaptado e transformado em musical em Londres, em 2024 no Old Vic. Denominado “Just For One Day”, contará a história do concerto, estando programado para ser exibido, de 26 de janeiro a 30 de março de 2024. O musical irá apresentar músicas de Bob Dylan, David Bowie, The Who, U2, Queen, The Police, Elton John, Paul McCartney, The Pretenders, The Cars, Status Quo, Paul Weller, Sade, The Boomtown Rats, Bryan Adams, Diana Ross, Ultravox e muito mais.\n[…]\nLive Aid: World Wide Concert Book - Peter Hillmore, com introdução de Bob Geldof -ISBN 0-88101-024-3 - Copyright 1985 The Unicorn Publishing House, New Jersey.\n[…]\n«Site não-oficial com relatos dos bastidores do Live Aid»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "ABBA",
      "descricao": "Grupo pop sueco formado em 1972 por Agnetha, Björn, Benny e Anni-Frid"
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em 2021, o ABBA lançou Voyage, seu primeiro álbum de canções inéditas depois de um intervalo de quantas décadas?",
    "resposta": "Quatro décadas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Voyage_(ABBA_album)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Voyage_(ABBA_album)",
        "situacao": "ok",
        "texto": "Voyage is the ninth and final studio album by the Swedish pop group ABBA, released on 5 November 2021. With ten songs written by Benny Andersson and Björn Ulvaeus, it is the group's first album of new material in forty years, following The Visitors (1981). The album was supported by the dual single release of \"I Still Have Faith in You\" and \"Don't Shut Me Down\", released alongside the album announ\n[…]\n\"Just a Notion\" was issued as the third single on 22 October 2021, followed by the fourth single \"Little Things\" on 3 December. A digital concert residency in support of the album, ABBA Voyage, opened in London on 27 May 2022.\n[…]\nIn May 2022, after the premiere of the ABBA Voyage concert residency in London, Andersson stated in an interview with Variety that \"nothing is going to happen after this\", confirming the album and residency as ABBA's final group collaborations.\n[…]\nDuring the album announcement live stream, ABBA also announced a concert residency, known as ABBA Voyage, with concerts starting from 27 May 2022 in a custom-built venue at Queen Elizabeth Olympic Park in London.\n[…]\nIn contrast, The Guardian rated the album with two out of five and titled its 5 November 2021 article: \"Abba: Voyage review – no thank you for the music\".\n[…]\nVoyage became ABBA's highest-charting album in the United States, entering the Billboard 200 at number two on 20 November 2021, beating their previous high of number 14 with ABBA: The Album in 1978. It opened with 82,000 album-equivalent units, including 78,000 album sales (60,500 of which were physical), making it the highest-selling album of the week.\n[…]\nAccording to IFPI, Voyage was the eighth best-selling album worldwide (all formats) and the second in album sales list. The album sold 2,050,000 copies in 2021, and over 2.5 million by November 2022.\n[…]\nAdapted from the album's liner notes.\n[…]\nABBA\n[…]\nOfficial ABBA Voyage website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voyage_%28%C3%A1lbum%29",
        "situacao": "ok",
        "texto": "Voyage é o nono álbum de estúdio do grupo sueco ABBA, lançado no dia 5 de novembro de 2021. Com dez canções escritas por Benny Andersson e Björn Ulvaeus, é o primeiro álbum do grupo com material novo em 40 anos, desde The Visitors (1981) e a dissolução subsequente do grupo em 1982. O álbum foi anunciado em 2 de setembro de 2021 em uma transmissão ao vivo do YouTube.\n[…]\nEm 2018, o ABBA anunciou que havia gravado duas canções, \"I Still Have Faith in You\" e \"Don't Shut Me Down\", os quais foram anunciadas como os primeiros singles do álbum na transmissão ao vivo e foram lançadas as duas a 2 de setembro de 2021. \"Just A Notion\" foi lançado como terceiro single em 22 de outubro de 2021, seguido pelo quarto single \"Little Things\" em 3 de dezembro. Uma residência de concerto digital em apoio ao álbum, ABBA Voyage, foi inaugurada em Londres em 27 de maio de 2022.\n[…]\nO ABBA anunciou pela primeira vez que estava preparando avatares digitais em setembro de 2017, com Benny Andersson dizendo que demoraria para fazer seus rostos, e Ulvaeus dizendo que estava animado com como a tecnologia está avançando. Batizados de \"ABBAtars\", eles aparecem durante os shows do ABBA Voyage no lugar dos quatro membros reais da banda.\n[…]\nEd Potton, da revista The Times, avaliou-o com quatro estrelas de cinco e afirmou que \"Voyage é uma mistura tranquilizadora e familiar de sentimento claro, musicalidade ultrajante e total indiferença à moda\".\n[…]\nRob Sheffield da Rolling Stone deu ao álbum quatro de cinco estrelas e escreveu que é uma surpresa que o grupo tenha retornado com novo material e que \"é uma surpresa maior e mais doce que eles tenham retornado tão cheios de vitalidade musical. Todos esses anos depois de 'Waterloo', o ABBA ainda se recusa a se render\".\n[…]\nEm outubro de 2021, o álbum registrou 111.000 pré-encomendas. Os pedidos antecipados na Holanda totalizaram 40.000 cópias.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Hey Jude",
      "descricao": "Canção dos Beatles composta por Paul McCartney e lançada em 1968"
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Lançada como single em 1968, Hey Jude, dos Beatles, tinha uma duração rara para as rádios da época. Cerca de quantos minutos?",
    "resposta": "Cerca de sete minutos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hey_Jude"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hey_Jude",
        "situacao": "ok",
        "texto": "\"Hey Jude\" is a song by the English rock band the Beatles that was released as a non-album single in August 1968. It was written by Paul McCartney and credited to the Lennon–McCartney partnership. The single was the Beatles' first release on their Apple record label and one of the \"First Four\" singles by Apple's roster of artists, marking the label's public launch.\n[…]\nA failed early promotional attempt for the single took place after the Beatles' all-night recording session on 7–8 August 1968. With Apple Boutique having closed a week before, McCartney and Francie Schwartz painted Hey Jude/Revolution across its large, whitewashed shop windows. The words were mistaken for antisemitic graffiti (since Jude means \"Jew\" in German), leading to complaints from the local Jewish community, and the windows being smashed by a passer-by.\n[…]\nOn 30 November 1968, NME reported that sales had reached nearly six million copies worldwide. By 1999, \"Hey Jude\" had sold an estimated eight million copies worldwide. That year, it was certified 4× platinum by the RIAA, representing four million units shipped in the US. As of December 2018, \"Hey Jude\" was the 54th-best-selling single of all time in the UK – one of six Beatles songs included on the top sales rankings published by the Official Charts Company.\n[…]\nIn 2001, the 1968 release of \"Hey Jude\" on Apple Records was inducted into the Grammy Hall of Fame.\n[…]\nIn his 1996 article about the single's release, for Mojo, Paul Du Noyer said that the writing of \"Hey Jude\" had become \"one of the best-known stories in Beatles folklore\". In a 2005 interview, Ono said that for McCartney and for Julian and Cynthia Lennon, the scenario was akin to a drama, in that \"Each person has something to be totally miserable about, because of the way they were put into this play.\n[…]\nThe Beatles\n[…]\nThe Beatles - Hey Jude on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hey_Jude",
        "situacao": "ok",
        "texto": "\"Hey Jude\" é uma canção dos Beatles composta por Paul McCartney, creditada à dupla Lennon/McCartney, e lançada no Lado A do single Hey Jude/Revolution de 1968. Apesar da longa duração da canção (mais de sete minutos, o que era muito incomum na época), foi um dos singles mais vendidos dos Beatles. Foi eleita pela revista Rolling Stone como a 8.ª melhor música de todos os tempos.\n[…]\nSegundo Paul no “The Beatles Anthology”: \"Eu achei que como amigo da família eu poderia ir a casa deles dizer que tudo ficaria bem, tentar animá-los e ver como estavam. Eu dirigi cerca de uma hora. Eu costumava desligar o rádio nessas viagens e cantarolar, vendo se conseguia compor canções. Então comecei a cantar - 'Hey Jules - don't make it bad, take a sad song, and make it better...' – como uma mensagem de esperança para Julian.\n[…]\nOs Beatles começaram as gravações de “Hey Jude” em 29 de Julho de 1968. A primeira sessão era mais um ensaio do que gravação. Eles sabiam que a música teria uma boa repercussão como um single, então dedicaram o tempo para aperfeiçoar os arranjos. Gravaram seis takes naquele dia.\n[…]\nA canção de quase 7 minutos foi o single mais longo a atingir as paradas britânicas. Seu fade out tem propositalmente 1 segundo a mais do que o hit da parada de um ano antes de Richard Harris, “MacArthur Park.”\n[…]\nO manuscrito de Paul McCartney, usado durante a gravação em 1968 do \"Hey Jude\" foi vendido por 910 mil dólares (cerca de 832 mil euros) durante um leilão online em 10 de abril de 2020, data do 50.º aniversário da separação dos Beatles. O documento contém uma letra parcial juntamente com anotações que incluem a palavra \"break\" (\"pausa\", em inglês) usada para ajudar na gravação do tema.\n[…]\nCross, Craig. «US Singles». Beatles Discography (em inglês). Consultado em 8 de fevereiro de 2014. Cópia arquivada em 5 de fevereiro de 2005",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Festival de Woodstock",
      "descricao": "Festival de música realizado em agosto de 1969 numa fazenda em Bethel, no estado de Nova York"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em agosto de 1969, o Festival de Woodstock reuniu, segundo as estimativas, um público de cerca de quantas pessoas?",
    "resposta": "Quatrocentas mil",
    "distratores": [
      "Dez mil",
      "Quarenta mil",
      "Quatro milhões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Woodstock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Woodstock",
        "situacao": "ok",
        "texto": "The Woodstock Music and Art Fair, commonly referred to as Woodstock, was a music festival held from August 15 to 18, 1969, on Max Yasgur's dairy farm in Bethel, New York, 60 miles (95 km) southwest of the town of Woodstock. Billed as \"an Aquarian Exposition: 3 Days of Peace & Music\", it attracted an audience of more than 460,000. Thirty-two acts performed outdoors despite overcast skies and sporad\n[…]\nThe scheduled date for the \"Bethel Woods Music and Culture Festival: Celebrating the golden anniversary at the historic site of the 1969 Woodstock festival\" was August 16–18, 2019. Bethel Woods described the festival as a \"pan-generational music, culture and community event\" (including some live performances and talks by) \"leading futurists and retro-tech experts\".\n[…]\nOn March 19, 2019, the proposed lineup for Woodstock 50 was announced. This included some artists who performed at the original Woodstock festival in 1969: John Fogerty (from Creedence Clearwater Revival), Carlos Santana (as Santana), David Crosby (from Crosby, Stills & Nash), Melanie, John Sebastian, Country Joe McDonald, three Grateful Dead members (as Dead & Company), Canned Heat, and Hot Tuna (containing members of Jefferson Airplane).\n[…]\nTime magazine named \"The Who at Woodstock – 1969\" to the magazine's \"Top 10 Music-Festival Moments\" list on March 18, 2010.\n[…]\nHarlem Cultural Festival, sometimes called the \"Black Woodstock\", that ran concurrently over July and August 1969\n[…]\nWoodstock '99, a rebooted version of the festival held in Rome, New York\n[…]\nKirkpatrick, Rob (August 5, 2009). \"Pot, Skinny-Dipping, and Freedom Rock: Woodstock and the Year of the Outdoor Music Festival\". PopMatters.\n[…]\n\"Michael Lang. The man behind the most important Music Festival in the History, Woodstock 1969\". La Escuela Superior de Audio y Acústica.\n[…]\nWoodstock Festival Gallery\n[…]\nJim Shelley, woodstockwhisperer.info amateur photographer at Woodstock 1969"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Festival_de_Woodstock",
        "situacao": "ok",
        "texto": "Woodstock Music & Art Fair (conhecido informalmente como Woodstock ou Festival de Woodstock) foi um festival de música realizado entre os dias 15 e 18 de agosto de 1969 na fazenda de gado leiteiro de 600 acres de Max Yasgur, próximo à região de White Lake, na cidade de Bethel, no estado de Nova York, nos Estados Unidos. O local se localizava a setenta quilômetros a sudoeste da cidade de Woodstock.\n[…]\nLang e Kornfeld responderam o anúncio, e os quatro reuniram-se inicialmente para discutir a criação de um estúdio de gravação em Woodstock, mas a ideia evoluiu para um festival de música e artes ao ar livre.\n[…]\nEmbora o festival tenha sido reconhecidamente pacífico, dado o número de pessoas e as condições envolvidas, houve duas fatalidades registradas: a primeira resultado de uma provável overdose de heroína, e a outra após um atropelamento de trator. Houve também dois partos registrados (um dentro de um carro preso no congestionamento e outro em um helicóptero), e quatro abortos.\n[…]\nAinda assim, em sintonia com as esperanças idealísticas dos anos 1960, Woodstock satisfez a maioria das pessoas que compareceram. Mesmo contando com uma qualidade musical excepcional, o destaque do festival foi mesmo o retrato comportamental exibido pela harmonia social e a atitude de seu imenso público.\n[…]\nQuill — quarenta minutos para quatro músicas\n[…]\nEm 2009, Michael Lang e Holly George-Warren publicaram The Road to Woodstock, livro que mostra a participação de Lang na realização do festival.\n[…]\nA data programada para o \"Festival de música e cultura de Bethel Woods: celebrando o aniversário de ouro do local histórico do festival de Woodstock de 1969\" era 16-18 de agosto de 2019. Parceiros do evento são Live Nation Entertainment e INVNT.\n[…]\nEm 2005, o escritor argentino Edgar Brau publicou \"Woodstock\", um longo poema comemorando o festival.\n[…]\n«Woodstock Museum» (em inglês)\n[…]\n«The Woodstock Project (arquivado)». (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Amy Winehouse",
      "descricao": "Cantora e compositora britânica de soul e jazz, autora do álbum Back to Black"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Sem conseguir a tempo o visto americano, Amy Winehouse cantou de Londres, por satélite, no Grammy de 2008. Quantos prêmios ela levou naquela noite?",
    "resposta": "Cinco",
    "distratores": [
      "Um",
      "Três",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Amy_Winehouse",
      "https://en.wikipedia.org/wiki/50th_Annual_Grammy_Awards"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amy_Winehouse",
        "situacao": "ok",
        "texto": "Amy Jade Winehouse (14 September 1983 – 23 July 2011) was a British singer and songwriter. She is known for her distinctive contralto vocals, expressive and autobiographical songwriting, and eclectic blend of genres such as soul, rhythm and blues, and jazz. Her music, along with her fashion and highly publicised personal life, made her an influential figure in popular culture.\n[…]\nAt the 50th Annual Grammy Awards in 2008, Winehouse won five awards, tying the then-record for the most Grammys won by a female artist in a single night and becoming the first British woman to win five Grammys. Her wins included three of the \"Big Four\" categories—Best New Artist, Record of the Year, and Song of the Year for \"Rehab\"—along with Best Pop Vocal Album.\n[…]\nOn 10 February 2008, Winehouse received five Grammy Awards, winning in the following categories: Record of the Year, Song of the Year, Best Female Pop Vocal Performance for the single \"Rehab\", and Best Pop Vocal Album. The singer also earned a Grammy as Best New Artist, earning her an entry in the 2009 edition of the Guinness Book of Records for Most Grammy Awards won by a British Female Act. Additionally, Back to Black was nominated for Album of the Year.\n[…]\nAfter the Grammys, the album's sales increased, catapulting Back to Black to number two on the US Billboard 200, after it initially peaked in the seventh position. On 20 February 2008, Winehouse performed at the 2008 Brit Awards at Earls Court in London, performing \"Valerie\" with Mark Ronson, followed by \"Love Is a Losing Game\". She urged the crowd to \"make some noise for my Blake.\" A special deluxe edition of Back to Black topped the UK album charts on 2 March 2008.\n[…]\nWinehouse also reportedly confessed to having an affair in 2008.\n[…]\nNewkey-Burden, Chas (2008). Amy Winehouse: The Biography. John Blake Publishing. ISBN 978-1-84454-563-6.\n[…]\nAmy Winehouse at AllMusic"
      },
      {
        "url": "https://en.wikipedia.org/wiki/50th_Annual_Grammy_Awards",
        "situacao": "ok",
        "texto": "The 50th Annual Grammy Awards took place at the Staples Center in Los Angeles, on February 10, 2008. It was honoring musical achievement of 2007 in which albums were released between October 1, 2006, through September 30, 2007. The primary ceremonies were televised in the US on CBS; however, as has become the custom, most of the awards were handed out during a pre-telecast portion of the show held\n[…]\nThe year's big winner was Amy Winehouse: the 24-year-old singer had recently entered a drug rehabilitation program and did not come to Los Angeles. American officials initially refused her a work visa; they reversed the decision, but by then it was too late for her to make the trip from the UK. She became the fifth female solo artist to get five awards in one night, alongside Lauryn Hill, Norah Jones, Alicia Keys, Beyoncé and later, Alison Krauss, Adele and Billie Eilish.\n[…]\nAmy Winehouse (5/6)\n[…]\n\"Rehab\" – Amy Winehouse\n[…]\nBack to Black – Amy Winehouse\n[…]\nAmy Winehouse, songwriter (Amy Winehouse)\n[…]\nAmy Winehouse\n[…]\n\"Rehab\" – Amy Winehouse\n[…]\nBack to Black – Amy Winehouse\n[…]\nBest Mexican/Mexican–American Album\n[…]\nBest Native American Music Album\n[…]\nThe End of an American Dream – Lee \"Scratch\" Perry\n[…]\nFrom Mali to America – Cheick Hamala Diabat & Bob Carlin\n[…]\nThe Audacity of Hope : Thoughts on Reclaiming the American Dream – Barack Obama\n[…]\nAmerica's Mexican – George Lopez\n[…]\n\"Back to Black\" (Amy Winehouse) (T)\n[…]\n\"Rehab\" (Amy Winehouse) (T)\n[…]\n\"You Know I'm No Good\" (Amy Winehouse) (T)\n[…]\nAmerican Virtuosa: Tribute To Maud Powell (Rachel Barton Pine & Matthew Hagle)\n[…]\nTower: Made In America\n[…]\n\"Tower: Made in America\"\n[…]\n\"Made in America\"\n[…]\nTop 10 Grammy Performances\n[…]\nCBS GRAMMY Site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Amy_Winehouse",
        "situacao": "ok",
        "texto": "Amy Jade Winehouse (Londres, 14 de setembro de 1983 – Londres, 23 de julho de 2011) foi uma cantora, compositora e musicista britânica. Conhecida por seu poderoso e profundo contralto vocal e por sua mistura eclética de gêneros musicais, incluindo soul, jazz, R&B e ritmos caribenhos, como o ska. Oriunda de uma família com forte tradição musical ligada ao jazz, Winehouse ingressou na carreira artís\n[…]\nAmy Winehouse nasceu no Chase Farm Hospital, em Enfield, ao norte de Londres, em 14 de setembro de 1983. O seu pai, Mitchell Winehouse, trabalhava como instalador de painéis e, posteriormente, tornou-se motorista de táxi e cantor amador; a sua mãe, Janis, era farmacêutica. Descendente de judeus, ela tinha um irmão mais velho, Alex Winehouse, nascido em 1980. A jovem iniciou os estudos primários aos cinco anos, na Osidge Primary School, na qual o seu irmão também estudava.\n[…]\nBernie Wolfsdorf, vice-presidente da Associação Americana de Advogados de Imigração, revelou que os então recentes envolvimentos de Winehouse com substâncias psicoativas deixaram as autoridades relutantes em conceder-lhe a admissão. Quando as autoridades americanas permitiram a sua entrada no país, não o fizeram em tempo hábil e Amy Winehouse não pôde comparecer à cerimônia. Em vez disso, participou da premiação por meio de uma transmissão via satélite do Riverside Studios, em Londres.\n[…]\nA 50.ª edição do Grammy Awards ocorreu em 10 de fevereiro de 2008, no Staples Center, em Los Angeles, e consagrou a cantora como o artista mais premiado da cerimônia. Com cinco troféus — \"Canção do Ano\", \"Gravação do Ano\", \"Melhor Álbum Vocal pop\", \"Artista Revelação\" e \"Melhor Performance Vocal pop Feminina\" —, Winehouse converteu-se na britânica mais premiada pelo Grammy em apenas uma edição e, por conseguinte, entrou para o \"Guinness World Records\", em 2009.\n[…]\nAmy Winehouse no Facebook\n[…]\nAmy Winehouse no Twitter",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "AC/DC",
      "descricao": "Banda de hard rock fundada em 1973 pelos irmãos Malcolm e Angus Young"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A capa totalmente preta do álbum Back in Black, do AC/DC, lançado em 1980, foi uma forma de luto por quem?",
    "resposta": "Bon Scott",
    "fonte": [
      "https://en.wikipedia.org/wiki/Back_in_Black"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Back_in_Black",
        "situacao": "ok",
        "texto": "Back in Black is the seventh studio album by Australian rock band AC/DC, released on 25 July 1980, by Albert Productions and Atlantic Records. It was the band's first album to feature Brian Johnson as lead singer, following the death of their previous vocalist Bon Scott. After the commercial breakthrough of their 1979 album Highway to Hell, AC/DC was planning to record a follow-up, but in February\n[…]\nThe album was composed by Johnson and brothers Angus and Malcolm Young, and recorded over seven weeks in the Bahamas from April to May 1980 with producer Robert John \"Mutt\" Lange, who had also produced Highway to Hell. Following its completion, the group mixed Back in Black at Electric Lady Studios in New York City. The album's all-black cover was designed as a \"sign of mourning\" for Scott.\n[…]\nBon, or Brian, or both?\" Young replied, \"Bon wrote a little of the stuff.\" He also stated to Rolling Stone in 1998, \"We had songs that he had written and we wanted to finish the songs.\" However, in other interviews in 1981, 1996, 1998 and 2000, Young denied that any lyrics on the album were written by Scott. In 2005, he said, \"There was nothing [on Back in Black] from Bon's notebook.\"\n[…]\nThe official credits on the album were and remain \"Young/Young/Johnson\". In 2022, Johnson released his autobiography, The Lives of Brian, and denied Scott had written lyrics for Back in Black. He stated, \"The conspiracy theories are legion – usually started by people who think they know but weren't there... it was me at the end of the pen, writing every night and every morning, with only the title to work with. That's what happened.\n[…]\nFink, Jesse (2017), Bon: The Last Highway, The Untold Story of Bon Scott and AC/DC's Back In Black, Penguin Random House Australia, ISBN 978-0-85798-892-8.\n[…]\nBack in Black at Discogs (list of releases)\n[…]\nBack in Black at MusicBrainz (list of releases)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Back_in_Black",
        "situacao": "ok",
        "texto": "Back In Black é o sétimo álbum de estúdio da banda australiana de hard rock AC/DC, lançado em 25 de julho de 1980, cinco meses depois do falecimento do vocalista Bon Scott, o qual foi substituído por Brian Johnson. É o álbum de rock mais vendido de todos os tempos e encontra-se na lista dos álbuns mais vendidos do mundo, na segunda posição, ficando atrás apenas de Thriller, de Michael Jackson.\n[…]\nO álbum até hoje já vendeu cerca de 50 milhões de cópias em todo o mundo e 22 milhões nos Estados Unidos. Este álbum está na lista dos 200 álbuns definitivos no Rock and Roll Hall of Fame. Em 2024, a equipe da Loudwire o elegeu como melhor disco de hard rock de 1980.\n[…]\nDepois do sucesso de Highway to Hell, a banda começou a desenvolver o álbum, após a morte de seu vocalista, Bon Scott, cuja causa da morte foi de \"intoxicação alcoólica aguda\". Quando Scott foi substituído por Brian Johnson, o álbum foi totalmente refeito, com hits como \"Hells Bells\", \"You shook me All Night Long\" e a faixa que dá título ao álbum, \"Back in Black\". O álbum se tornou um enorme sucesso nos Estados Unidos e em outras partes do mundo.\n[…]\nO álbum foi remasterizado, e relançado duas vezes no box Bonfire de (1997), e em 2003, como parte da série de remasterizados da banda.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Prince",
      "descricao": "Cantor, compositor e multi-instrumentista americano, de Purple Rain, morto em 2016"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1993, o astro Prince trocou o nome artístico por um símbolo impronunciável. Era um protesto contra quem?",
    "resposta": "A gravadora Warner",
    "fonte": [
      "https://en.wikipedia.org/wiki/Prince_(musician)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Prince_(musician)",
        "situacao": "ok",
        "texto": "Prince Rogers Nelson (June 7, 1958 – April 21, 2016) was an American singer, songwriter, musician, dancer, actor, and filmmaker. Often credited as one of the greatest musicians of his generation, he pioneered the Minneapolis sound and was influential in the evolution of various other genres. With estimated sales exceeding 100 million records, Prince is one of the best-selling music artists of all \n[…]\nIn 1993, in the midst of a contractual dispute with Warner Bros., Prince changed his stage name to the unpronounceable symbol , known to fans as the \"Love Symbol\". Prince was often referred to as the Artist Formerly Known as Prince (TAFKAP), or simply the Artist. After signing a contract with Arista Records in 1999, Prince reverted to his original name in 2000 and continued releasing albums, including the double Grammy Award-winning Musicology (2004).\n[…]\nIn 1993, in rebellion against Warner Bros., which insisted upon releasing Prince's backlog of music at a steady pace, Prince formally adopted the symbol as his stage name. To use the symbol in print media, Warner Bros. organized a mass mailing of floppy disks with a custom font including the symbol. At this time, Prince was often referred to as \"the Artist Formerly Known as Prince\", or simply \"the Artist\". That year, Warner Bros. released the greatest hits compilation The Hits/The B-Sides.\n[…]\nFree of any further contractual obligations to Warner Bros., Prince attempted a major comeback later that year with the release of Emancipation, a 36-song, three-CD set, with each disc being exactly 60 minutes long. The album was released via his own label, named NPG Records, with distribution through EMI. Emancipation was certified platinum by the RIAA. It is the first Prince record featuring covers of other artists' songs.\n[…]\nList of bestselling music artists\n[…]\nUnreleased Prince projects\n[…]\nPrince at IMDb\n[…]\nPrince at AllMusic\n[…]\nPrince at Billboard"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prince",
        "situacao": "ok",
        "texto": "Prince Rogers Nelson (Minneapolis, 7 de junho de 1958 — Chanhassen, 21 de abril de 2016) foi um cantor, compositor, músico, dançarino e ator estadunidense. Muitas vezes creditado como uma influência na música, e um dos maiores músicos de sua época, ele foi pioneiro no som de Minneapolis e influente na evolução de vários outros gêneros musicais.\n[…]\nEm 1993, em meio a uma disputa contratual com a Warner Bros., Prince mudou seu nome artístico para o símbolo impronunciável , conhecido pelos fãs como o \"Love Symbol\". Após assinar contrato com a Arista Records em 1998, Prince voltou a usar seu nome artístico original em 2000 e continuou lançando álbuns, incluindo Musicology (2004), que venceu dois Grammy Awards. Ele foi um músico prolífico que lançou 39 álbuns durante sua vida, com uma vasta gama de material não lançado.\n[…]\nEm 1993, ele mudou seu nome para o mesmo símbolo impronunciável , que junta os símbolos masculino (♂) e feminino (♀) e o usou até 2000. Como o nome é impronunciável, ele preferia ser chamado \\\"o artista anteriormente conhecido como Prince\" ou simplesmente \"o Artista\". Prince tomou esta atitude por causa da briga judicial com sua gravadora Warner Bros. a respeito dos direitos sobre suas canções.\n[…]\nEm 1993, por requisição da Warner Bros., Prince lança uma caixa com 3 CDs chamada The Hits/The B-Sides. Lançado em 1994, Come foi um fracasso comercial.\n[…]\nEm 1994, a atitude do Prince com relação à sua produção artística passava por uma mudança notável. Começou a fazer álbuns sucessivamente como forma de escapar de suas obrigações contratuais com a Warner Bros. Ele acreditava que a gravadora tentava limitar sua liberdade artística, obrigando-o a lançar álbuns em grande velocidade. Ele também culpou a Warner Bros para o fraco desempenho comercial do Love Symbol Album, alegando que não foi promovido o suficiente pela Warner.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "The Beatles",
      "descricao": "Banda de rock britânica formada em Liverpool em 1960 por John Lennon, Paul McCartney, George Harrison e, depois, Ringo Starr"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1966, os Beatles pararam de fazer turnês. Um dos motivos é que, no palco, eles mal conseguiam se ouvir por causa de quê?",
    "resposta": "Os gritos dos fãs",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Beatles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Beatles",
        "situacao": "ok",
        "texto": "The Beatles were an English rock band formed in Liverpool in 1960. The band comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band in popular music and were integral to the development of 1960s counterculture and the recognition of popular music as an art form. Rooted in skiffle, beat and 1950s rock 'n' roll, their sound incorporated \n[…]\nThe Beatles continued to absorb influences long after their initial success, finding new musical and lyrical avenues from their contemporaries, including Bob Dylan, Smokey Robinson and the Miracles, the Who, Frank Zappa, the Lovin' Spoonful, the Byrds and the Beach Boys, whose 1966 album Pet Sounds amazed and inspired McCartney.\n[…]\nReferring to the Beach Boys' creative leader, Martin later stated: \"No one made a greater impact on the Beatles than Brian [Wilson].\" Ravi Shankar, with whom Harrison studied for six weeks in India in late 1966, had a significant effect on his musical development during the band's later years. McCartney said \"Bach was always one of our favourite composers\"; his influence can be heard in \"In My Life\", \"Penny Lane\" and \"Blackbird\".\n[…]\nThe band's stylistic range expanded in another direction with their 1966 B-side \"Rain\", described by Martin Strong as \"the first overtly psychedelic Beatles record\". Other psychedelic numbers followed, such as \"Tomorrow Never Knows\" (recorded before \"Rain\"), \"Strawberry Fields Forever\", \"Lucy in the Sky with Diamonds\" and \"I Am the Walrus\".\n[…]\nAccording to Peter Lavezzoli, after the \"more popular than Jesus\" controversy in 1966, the Beatles felt considerable pressure to say the right things and \"began a concerted effort to spread a message of wisdom and higher consciousness\".\n[…]\nThe Beatles at Shea Stadium (1966)\n[…]\nThe Beatles timeline\n[…]\nThe Beatles – FBI file\n[…]\nThe Hugo Keesing Collection on the Beatles, University of Maryland, hdl:1903.1/4593"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Beatles",
        "situacao": "ok",
        "texto": "The Beatles foi uma banda de rock britânica formada na cidade de Liverpool em 1960. A formação mais conhecida da banda contava com John Lennon, Paul McCartney, George Harrison e Ringo Starr. Amplamente reconhecida como a maior e mais influente banda da história da música popular, foi essencial para o desenvolvimento da contracultura da década de 1960 e para o reconhecimento da música popular como \n[…]\nEles adquiriram o apelido \"The Fab Four\", conforme a Beatlemania crescia em território britânico no ano seguinte, e ao final de 1964 tornaram-se astros internacionais, liderando a \"Invasão Britânica\" no mercado musical estadunidense. A partir de 1965, os Beatles produziam o que muitos consideram como seus melhores materiais, incluindo os inovadores e influentes álbuns Rubber Soul (1965), Revolver (1966), Sgt.\n[…]\nOs Beatles haviam realizado seu último concerto pago no Monster Park, São Francisco, em 29 de agosto de 1966.\n[…]\nOs Beatles continuaram absorvendo influências muito depois de seu sucesso inicial, muitas vezes encontrando novos caminhos musicais e líricos ao ouvir seus contemporâneos, incluindo Bob Dylan, The Who, Frank Zappa, The Lovin 'Spoonful, The Byrds e Beach Boys, cujo álbum Pet Sounds, de 1966, surpreendeu e inspirou McCartney. Referindo-se ao líder criativo dos Beach Boys, Martin afirmou mais tarde: \"Ninguém causou maior impacto nos Beatles do que Brian [Wilson]\".\n[…]\nComo ícones da contracultura dos anos 1960, Gould continua, eles se tornaram um catalisador do boêmio e do ativismo em várias arenas sociais e políticas, alimentando movimentos como a libertação das mulheres, a libertação dos gays e o ambientalismo. Segundo Peter Lavezzoli, após a controvérsia \"mais populares que Jesus\" em 1966, os Beatles sofreram uma pressão considerável para dizer as coisas certas e \"iniciaram um esforço conjunto para espalhar uma mensagem de sabedoria e consciência superior\".\n[…]\nQuinto Beatle",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "John Lennon",
      "descricao": "Músico e compositor inglês, cofundador dos Beatles, assassinado em Nova York"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1966, discos dos Beatles foram queimados no sul dos Estados Unidos depois que John Lennon disse que a banda era mais popular que quem?",
    "resposta": "Jesus Cristo",
    "fonte": [
      "https://en.wikipedia.org/wiki/More_popular_than_Jesus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/More_popular_than_Jesus",
        "situacao": "ok",
        "texto": "\"More popular than Jesus\" is a phrase taken from a 1966 interview in which John Lennon of The Beatles claimed that the public's infatuation with the band surpassed that of  Jesus Christ, and that Christian faith was declining to the point where it might be outlasted by rock music. His opinions drew no controversy when published in the Evening Standard in London, but ignited angry reactions from Ch\n[…]\nNewsweek made reference to Lennon's \"more popular than Jesus\" comments in an issue published in March, and the interview had appeared in Detroit magazine in May. On 3 July, Cleave's four Beatles interviews were published together in a five-page article in The New York Times Magazine, titled \"Old Beatles – A Study in Paradox\". None of these provoked a strong reaction.\n[…]\nAt the press conference, Lennon said: \"I suppose if I had said television was more popular than Jesus, I would have got away with it. I'm sorry I opened my mouth. I'm not anti-God, anti-Christ, or anti-religion. I was not knocking it. I was not saying we are greater or better.\" He stressed that he had been remarking on how other people viewed and popularised the Beatles. He described his own view of God by quoting the Bishop of Woolwich, \"not as an old man in the sky.\n[…]\nIn 2012, Nathan Smith of the Houston Press compared several aspects of popular media and concluded that Jesus was more popular than the Beatles. In 2015, Philippine Star contributor Edgar O. Cruz said that Lennon's statement proved to be at least half wrong, reporting that \"rock 'n roll is dead but Christianity expanded with Catholicism experiencing exceptional growth through Pope Francis' lead\".\n[…]\nIn April 2010, the Vatican newspaper L'Osservatore Romano published an article marking the 40th anniversary of the Beatles' self-titled album which included comments on Lennon's \"more popular than Jesus\" remark. Part of the response read: \"The remark ..."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mais_populares_que_Jesus",
        "situacao": "ok",
        "texto": "\"Mais populares que Jesus\" (do inglês \"More popular than Jesus\") foi parte de uma observação feita pelo músico John Lennon, dos Beatles, em uma entrevista de março de 1966, na qual ele argumentou que o público estava mais apaixonado pela banda do que por Jesus, e que a fé cristã estava declinando na medida em que era superada pelo rock.\n[…]\nLennon pediu desculpas e explicou que não estava se comparando a Cristo.\n[…]\nNa cobertura do incidente o Jornal do Brasil publicara na edição do domingo, dia 6 de agosto de 1966, uma chamada na primeira página para a matéria intitulada \"Começou o boicote aos 'Beatles'\" nos Estados Unidos, informando que Epstein havia chegado no dia anterior a Nova Iorque \"alarmado, para apresentar desculpas pela agitação que causara a declaração dada por um dos Beatles, John Lennon, de que o cristianismo está em decadência e que os cantores do grupo 'são agora mais populares do que o próprio Jesus'\"; por conta disso quinze emissoras daquele país haviam cessado a execução das músicas do grupo após a entrevista dada a Maureen Cleeve para um vespertino que havia sido reproduzia por uma revista feminina novaiorquina; em Illinois uma emissora transmitia um editorial contra os músicos de Liverpool de hora em hora e uma queima de discos estava programada.\n[…]\nNão há como negar, entretanto, a sua grande popularidade. Eu os adoro\". No dia 1º de setembro o jornal falava do fim da turnê, da qual os Beatles saíram \"mais ricos, mortos de cansados\" e que o único incidente na partida fora \"quando um grupo de jovens hasteou num edifício do aeroporto uma grande bandeira com a legenda 'Graças a Deus vocês regressaram sãos e salvos' — numa aparente alusão aos comentários de John Lennon acerca de Jesus Cristo e à reação mundial que provocaram.\"\n[…]\nReligião nos Estados Unidos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Freddie Mercury",
      "descricao": "Cantor britânico, vocalista do Queen, nascido Farrokh Bulsara"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Freddie Mercury tinha os dentes da frente salientes por ter quatro dentes a mais, mas nunca quis corrigi-los. Que medo o impedia?",
    "resposta": "Prejudicar a voz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Freddie_Mercury"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Freddie Mercury (born Farrokh Bulsara; 5 September 1946 – 24 November 1991) was a British singer and songwriter who achieved global fame as the lead vocalist and pianist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he is known for his flamboyant stage persona and four-octave vocal range. Mercury defied the conventions of a rock frontman with his the\n[…]\nMercury was born Farrokh Bulsara in Stone Town in the British protectorate of Zanzibar (now part of Tanzania), in East Africa on 5 September 1946. He was born with four extra incisors, to which some have attributed his enhanced vocal range. His parents, Bomi and Jer Bulsara, were Indian Gujarati Parsi, from western India. He had a younger sister, Kashmira (b. 1952).\n[…]\nThe sleeve of the album contains the words, \"Dedicated to the immortal spirit of Freddie Mercury.\"\n[…]\nSince 2021, one of the houses where Mercury lived in Stone Town has hosted a Freddie Mercury Museum, which features many photographs and dozens of handwritten song lyrics. In April 2022, a life-size statue of Mercury was unveiled in South Korea's resort island of Jeju. In May 2024, the crater Bulsara on the planet Mercury was named after his birth name.\n[…]\nMercury is one of the company's six \"British tail fin heroes\", alongside England's 1966 FIFA World Cup winning captain Bobby Moore, children's author Roald Dahl, novelist Jane Austen, pioneering pilot Amy Johnson, and aviation entrepreneur Sir Freddie Laker.\n[…]\nBlake, Mark (2016). Freddie Mercury: A Kind of Magic. Omnibus Press. ISBN 978-1-783-23778-4.\n[…]\nBret, David (1996), Living On the Edge: The Freddie Mercury Story, London: Robson Books, ISBN 978-1-86105-256-8\n[…]\nJones, Lesley-Ann (2011), Freddie Mercury: The Definitive Biography, London: Hachette UK, ISBN 9781444733709\n[…]\nFreddie Mercury discography at Discogs\n[…]\nFreddie Mercury at AllMusic\n[…]\nFreddie Mercury at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Farrokh Bulsara (Cidade de Pedra, 5 de setembro de 1946 – Londres, 24 de novembro de 1991), mais conhecido pelo nome artístico Freddie Mercury, foi um cantor, pianista e compositor britânico, conhecido pelo seu trabalho com a banda britânica de rock Queen, que integrou como vocalista de 1970 até o ano de sua morte, 1991. É considerado como um dos maiores cantores de todos os tempos.\n[…]\nA mais apreciada composição de Freddie é \"Bohemian Rhapsody\", uma canção revolucionária e complexa, dividida em várias partes e soando em diversos estilos, desde o hard rock até a ópera, possuindo uma letra trágica e rancorosa, e Freddie nunca explicou seu verdadeiro significado, se referindo a ela como sendo \"[...] uma daquelas músicas que possui um sentimento de fantasia. Eu acho que as pessoas deveriam apenas ouvi-la, pensar sobre ela, e então refletir sobre o que ela tenta lhes dizer [...]\".\n[…]\nFreddie também costumava permitir que o público cantasse partes de várias canções, principalmente a versão acústica de \"Love of my Life\", e também comandava acenos e palmas sincronizadas em canções como \"We Will Rock You\" e \"Radio Ga Ga\". Nos anos 70, Freddie tinha cabelo comprido e usava uma característica roupa quadriculada, mas a partir dos anos 80 passou a exibir um cabelo mais curto e deixou o bigode crescer, o que se tornou outro de seus símbolos.\n[…]\nEm 2009, uma estrela foi colocada em uma calçada de Londres no local em que a família de Freddie desembarcou na cidade em 1964, em uma cerimônia assistida por Brian May e pela mãe do cantor. A partir de 2009, uma compilação de vídeos em sua homenagem passou a ser exibida toda semana em um telão em frente ao Fremont Street Experience, um dos maiores cassinos de Las Vegas. No mesmo ano, foi inaugurada uma estátua de Mercury em frente ao Teatro Playhouse na cidade escocesa de Edimburgo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Freddie Mercury",
      "descricao": "Cantor britânico, vocalista do Queen, nascido Farrokh Bulsara"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em novembro de 1991, Freddie Mercury confirmou publicamente que tinha AIDS. Quanto tempo depois desse anúncio ele morreu?",
    "resposta": "Um dia",
    "distratores": [
      "Uma semana",
      "Um mês",
      "Um ano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Freddie_Mercury"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Freddie Mercury (born Farrokh Bulsara; 5 September 1946 – 24 November 1991) was a British singer and songwriter who achieved global fame as the lead vocalist and pianist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he is known for his flamboyant stage persona and four-octave vocal range. Mercury defied the conventions of a rock frontman with his the\n[…]\nMercury was diagnosed with AIDS in 1987. He continued to record with Queen, and was posthumously featured on their final album, Made in Heaven (1995). In 1991, the day after publicly announcing his diagnosis, he died from complications of the disease at the age of 45. In 1992, a concert in tribute to him was held at Wembley Stadium, in benefit of AIDS awareness.\n[…]\nOn 22 November 1991, Mercury called Queen's manager Jim Beach to his Kensington home to prepare a public statement, which was released the following day:\n[…]\nOn the evening of 24 November 1991, about 24 hours after issuing the statement, Mercury died at the age of 45 at his home in Kensington. The cause of death was bronchial pneumonia resulting from AIDS. His close friend Dave Clark of the Dave Clark Five was at the bedside vigil when Mercury died. Austin phoned Mercury's parents and sister to break the news, which reached newspaper and television crews in the early hours of 25 November.\n[…]\nIn November 1995, Mercury appeared posthumously on Queen's final studio album Made in Heaven. The album featured Mercury's previously unreleased final recordings from 1991, as well as outtakes from previous years and reworked versions of solo works by the other members. The album cover features the Freddie Mercury statue that overlooks Lake Geneva superimposed with Mercury's Duck House lake cabin that he had rented. This is where he had written and recorded his last songs at Mountain Studios.\n[…]\nFreddie Mercury at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Farrokh Bulsara (Cidade de Pedra, 5 de setembro de 1946 – Londres, 24 de novembro de 1991), mais conhecido pelo nome artístico Freddie Mercury, foi um cantor, pianista e compositor britânico, conhecido pelo seu trabalho com a banda britânica de rock Queen, que integrou como vocalista de 1970 até o ano de sua morte, 1991. É considerado como um dos maiores cantores de todos os tempos.\n[…]\nMercury morreu de broncopneumonia, acarretada pela AIDS, em 1991, um dia depois de ter assumido a doença publicamente.\n[…]\nEm 1991, o Queen lançou o álbum Innuendo, que foi um grande sucesso comercial, e mesmo estando com sua saúde extremamente debilitada, Freddie continuou a trabalhar exaustivamente, tanto que, após menos de um mês, ele já estava em estúdio gravando vocais para um disco novo do grupo. O cantor, que morreu nesse mesmo ano, já sabia que não sobreviveria por muito tempo, por isso gravou todos os vocais antecipadamente para que a banda concluísse o trabalho mais tarde.\n[…]\nPouco tempo depois, o cantor se envolveu com a atriz austríaca Barbara Valentin, que inclusive foi uma das figurantes no videoclipe da canção \"It's a Hard Life\", e em 1985 iniciou outro sério romance com o cabeleireiro Jim Hutton, com quem Freddie viveu até o fim de sua vida; Hutton não deixou Mercury durante sua doença e estava ao lado dele na cama quando o cantor morreu. Jim morreu vítima de câncer em 2010.\n[…]\nEm seus últimos dias, Freddie perdeu a visão e não conseguia sair da cama, por isso decidiu parar de tomar sua medicação em 10 de novembro de 1991, e passou a esperar pela morte. Em 22 de novembro, Freddie chamou o empresário do Queen, Jim Beach, e pediu que ele fizesse um comunicado à imprensa para divulgar sua doença, que foi lançado no dia seguinte. Cerca de vinte e quatro horas após o comunicado ser feito, durante a noite, Mercury morreu de broncopneumonia, acarretada pela AIDS.\n[…]\nInnuendo (1991)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Tango",
      "descricao": "Gênero musical e dança surgidos na região do Rio da Prata, entre Buenos Aires e Montevidéu"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O tango surgiu nos bairros pobres e portuários de Buenos Aires e Montevidéu no fim de que século?",
    "resposta": "Século dezenove",
    "distratores": [
      "Século dezessete",
      "Século dezoito",
      "Século vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tango"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tango",
        "situacao": "ok",
        "texto": "Tango is a partner and social dance that originated in the 1880s along the Río de la Plata, the natural border between Argentina and Uruguay. The tango was born in the impoverished port areas of these countries from a combination of Argentine Milonga, Spanish-Cuban Habanera, and Uruguayan Candombe celebrations. It was frequently practiced in the brothels and bars of ports, where business owners em\n[…]\nTango is a dance that has influences from African and European culture. Dances from the Candombe ceremonies of former African enslaved people helped shape the modern day tango. The dance originated in working-class districts of Buenos Aires and Montevideo. Tango music derived from the fusion of various forms of music from Europe.\n[…]\nIn the second half of the 1990s, a movement of new tango songs was born perner in Buenos Aires. It was mainly influenced by the old orchestra style rather than by Piazzolla's renewal and experiments with electronic music. The novelty lies in the new songs, with today's lyrics and language, which find inspiration in a wide variety of contemporary styles.\n[…]\nFinnish tango began to take on distinctive characteristics in the 1930s. It differs from other variants by being performed almost exclusively in minor keys and in themes that reflect conventions established in Finnish folklore. One of its highlights is the Tangomarkkinat, or tango festival, held annually since 1985 in Seinäjoki, considered by Finnish tango enthusiasts to be the second city of tango after Buenos Aires.\n[…]\nTango appears in different aspects of society: regular milongas and special festivals. A famous festival is the Tango Buenos Aires Festival y Mundial in Buenos Aires also known as World tango dance tournament. On a regional level there are also a number of festivals inside and outside of Argentina. One local festival outside Argentina is Buenos Aires in the Southern Highlands in Australia."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tango",
        "situacao": "ok",
        "texto": "O tango é um estilo musical e uma dança social a par e, uma dança esportiva do tipo standard (Federação Mundial de Dança Competitiva). O tango foi integrado pela Organização das Nações Unidas para a Educação, a Ciência e a Cultura (UNESCO) na lista representativa do Património Cultural Imaterial da Humanidade em 2009, sendo associado aos estados-membros Argentina e Uruguai.\n[…]\nSua origem encontra-se na área de Rio da Prata, na América do Sul, nas cidades de Buenos Aires e Montevidéu. A música do tango não tem uma origem muito clara. De acordo com estudos que não dispõem de numerosa documentação, o tango descenderia da habanera e se interpretava nos prostíbulos de Buenos Aires e Montevidéu, nas duas últimas décadas do século XIX, com violino, flauta e violão. Nessa época inicial, era dançado por dois homens, daí o fato dos rostos virados, sem se fitar.\n[…]\nO escritor argentino Jorge Luis Borges afirmou que, por suas características, o tango só poderia ter nascido em Montevidéu ou Buenos Aires. O bandoneon, que atualmente caracteriza o tango, chegou à região do Rio da Prata por volta do ano 1900, nas maletas de imigrantes alemães. Não existem muitas partituras da época, pois os músicos de tango não sabiam escrever a música e, provavelmente, interpretavam sobre a base de melodias já existentes, tanto de habaneras como de polcas.\n[…]\nO tango nasceu nos subúrbios de Buenos Aires, na Argentina, no final do século XIX (SZEGO, 2007, p. 62).\n[…]\nOs pesquisadores do gênero identificam duas fases de ouro do tango: a primeira, nos anos 1920, quando várias figuras do ambiente artístico de Buenos Aires e Montevidéu, inclusive muitos literatos como José Gonzalez Castillo e Fernán Silva Valdez, canalizaram seus esforços no fomento da música popular rio-platense e, em especial, do tango.\n[…]\nSylabus de passos principais e oficiais do tango:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Reggae",
      "descricao": "Gênero musical surgido na Jamaica, popularizado mundialmente por Bob Marley"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Herdeiro do ska e do rocksteady, o reggae surgiu na Jamaica no fim de que década?",
    "resposta": "Anos sessenta",
    "distratores": [
      "Anos quarenta",
      "Anos cinquenta",
      "Anos setenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Reggae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Reggae",
        "situacao": "ok",
        "texto": "Reggae ( ) is a music genre that originated in Jamaica in the late 1960s. The term also refers to the modern popular music of Jamaica and its diaspora. The 1968 single by Toots and the Maytals titled \"Do the Reggay\" was the first popular song to use the word reggae, effectively naming the genre and introducing it to a global audience.\n[…]\nReggae's direct origins are in the ska and rocksteady of 1960s Jamaica, strongly influenced by traditional mento (often referred to as calypso music due to conflation), as well as American jazz and rhythm and blues. Ska was originally a generic title for Jamaican music recorded between 1961 and 1967 and emerged from Jamaican R&B, which was based largely on American R&B and doo-wop.\n[…]\nThe shift from rocksteady to reggae was illustrated by the organ shuffle pioneered by Jamaican musicians like Jackie Mittoo and Winston Wright and featured in transitional singles \"Say What You're Saying\" (1968) by Eric \"Monty\" Morris and \"People Funny Boy\" (1968) by Lee \"Scratch\" Perry.\n[…]\nThe Wailers, a band started by Bob Marley, Peter Tosh and Bunny Wailer in 1963, is perhaps the most recognized band that made the transition through all three stages of early Jamaican popular music: ska, rocksteady and reggae. Over a dozen Wailers songs are based on or use a line from Jamaican mento songs.\n[…]\nNotable Jamaican producers influential in the development of ska into rocksteady and reggae include: Coxsone Dodd, Lee \"Scratch\" Perry, Leslie Kong, Duke Reid, Joe Gibbs and King Tubby. Reggae's early growth in the United Kingdom was initially driven by the country's Jamaican immigrant community, with records distributed through small import businesses and specialist shops before the music achieved mainstream commercial success.\n[…]\nReggae festivals\n[…]\nReggae genres\n[…]\nQuotations related to Reggae at Wikiquote"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Reggae",
        "situacao": "ok",
        "texto": "Reggae é um gênero musical criado na Jamaica do fim da década de 1960, a partir dos gêneros ska e rocksteady. Embora por vezes seja usado num sentido genérico para referir-se à maioria dos tipos de música jamaicana.\n[…]\nEmbora tenha sido influenciado fortemente pela música tradicional africana e caribenha, assim como pelo rhythm and blues americano, o reggae traça sua origem direta ao desenvolvimento progressivo do ska e do rocksteady na Jamaica da década de 1960.\n[…]\nEm meados da década diversos músicos já haviam começado a tocar o ska num andamento mais lento, enfatizando a linha de baixo e os tempos fracos. O som mais lento foi chamado de rocksteady, o nome de um single de Alton Ellis. Esta fase da música jamaicana durou apenas até 1968, quando os músicos começaram a deixar ainda mais lento os andamentos das músicas, e lhes acrescentaram ainda mais efeitos; isto levou à criação do reggae.\n[…]\nOs produtores jamaicanos foram influentes no desenvolvimento do ska para o rocksteady e o reggae na década de 1960. Alguns dos mais célebres produtores foram Coxsone Dodd, Lee \"Scratch\" Perry, Leslie Kong, Duke Reid, Joe Gibbs e King Tubby.\n[…]\nOriginal da década de 1960, o ritmo divide-se em dois subgêneros, o \"roots reggae\" (raízes do reggae) e o \"dancehall reggae\", que é originário da década de 1970. O reggae é constantemente associado ao movimento religioso rastafari, que, de fato, influenciou muitos dos músicos apologistas do estilo reggae nas décadas de 1970 e 1980. De qualquer maneira, o reggae trata de vários assuntos, não se restringindo à cultura rastafariana, como o amor, o sexo e principalmente a crítica social.\n[…]\nReggae Music no Open Directory Project\n[…]\nCríticas de livros e álbuns de reggae",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Metallica",
      "descricao": "Banda americana de heavy metal formada em 1981 por James Hetfield e Lars Ulrich"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A banda Metallica, que depois se mudou para São Francisco, foi formada em 1981 em que cidade americana?",
    "resposta": "Los Angeles",
    "distratores": [
      "Seattle",
      "Nova York",
      "Chicago"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Metallica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Metallica",
        "situacao": "ok",
        "texto": "Metallica is an American heavy metal band. It was formed in Los Angeles in 1981 by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career. The band's fast tempos, instrumentals and aggressive musicianship made them one of the founding \"big four\" bands of thrash metal, alongside Megadeth, Anthrax and Slayer.\n[…]\nMetallica was formed in Los Angeles in late 1981 when Danish drummer Lars Ulrich placed an advertisement in a Los Angeles newspaper, The Recycler, in which the advertisement read, \"Drummer looking for other metal musicians to jam with Tygers of Pan Tang, Diamond Head and Iron Maiden.\" Guitarists James Hetfield and Hugh Tanner of Leather Charm answered the advertisement.\n[…]\nOften clashing during the early 1980s, both bands were fighting for dominance in the Los Angeles rock scene during Metallica's early years prior to their relocation to the Bay Area. Both James Hetfield and Lars Ulrich expressed their hatred of the hair metal scene in Los Angeles during the time and frequently attacked multiple up-and-coming local bands in multiple interviews, including Mötley Crüe, who later became labelmates with Metallica at Elektra Records.\n[…]\nSeveral years later, Sixx and Ulrich reignited the feud after Ulrich accused Mötley Crüe of performing to a backing track at the 1997 American Music Awards. Sixx responded via an online forum in which he insulted numerous band members and also attacked Metallica's then-recent album Load. Despite this, Sixx praised Metallica's then-latest album St. Anger during a 2003 interview, contrary to the negative attention it received upon release.\n[…]\n1992: Best Metal Performance – Metallica\n[…]\nList of bands from the San Francisco Bay Area\n[…]\nMetallica at AllMusic\n[…]\nMetallica discography at Discogs\n[…]\nMetallica discography at MusicBrainz"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metallica",
        "situacao": "ok",
        "texto": "Metallica é uma banda americana de heavy metal formada em 1981, em Los Angeles, pelo vocalista e guitarrista James Hetfield e pelo baterista Lars Ulrich. É uma das bandas mais bem-sucedidas comercialmente de todos os tempos, e uma das maiores e mais influentes do heavy metal, com mais de 163 milhões de álbuns vendidos até 2023.\n[…]\nO Metallica foi formado em Los Angeles, Califórnia, no fim de 1981 quando o baterista Lars Ulrich colocou um anúncio num jornal de Los Angeles (The Recycler) que dizia \"Baterista à procura de outros músicos de metal para jam com Tygers of Pan Tang, Diamond Head e Iron Maiden\". Os guitarristas James Hetfield e Hugh Tanner de Leather Charm responderam ao anúncio.\n[…]\nEmbora Burton tenha inicialmente recusado o convite, no final daquele ano ele o aceitou com a condição da banda mudar-se para El Cerrito em San Francisco Bay Area. A primeira apresentação ao vivo do Metallica com Burton foi na casa noturna The Stone, em março de 1983, e a primeira gravação com Burton foi a fita demo Megaforce, de 1983.\n[…]\nEm 7 de março de 1999, a banda foi indicada à calçada da fama de San Francisco. O então prefeito da cidade, Willie Brown, proclamou aquele como sendo o \"Dia Oficial do Metallica\" em San Francisco. Um mês depois em 21 e 22 de abril, a banda gravou duas apresentações com a San Francisco Symphony Orchestra, na época conduzidas por Michael Kamen.\n[…]\nOs dois shows em São Paulo tiveram a abertura da banda brasileira Sepultura. Em Porto Alegre, o Metallica se apresentou pela segunda vez, mas o vocalista James Hetfield se enganou ao dizer aos porto-alegrenses que o Metallica estava pela primeira vez na cidade, mas logo o guitarrista Kirk Hammett corrigiu fazendo um sinal com as mãos mostrando que era a segunda apresentação naquele lugar.\n[…]\nMetallica no Twitter\n[…]\nMetallica no Instagram\n[…]\nMetallica no Spotify",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Bee Gees",
      "descricao": "Grupo pop formado pelos irmãos Barry, Robin e Maurice Gibb, astros da era disco"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Antes de a família se mudar para a Austrália, os irmãos Gibb, dos Bee Gees, nasceram em que ilha britânica do mar da Irlanda?",
    "resposta": "Ilha de Man",
    "distratores": [
      "Ilha de Wight",
      "Jersey",
      "Anglesey"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bee_Gees"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bee_Gees",
        "situacao": "ok",
        "texto": "The Bee Gees ( BEE jeez)\n[…]\nBefore their departure from Australia to England, Hugh Gibb sent demos to Brian Epstein, who managed the Beatles and directed NEMS, a British music store. Epstein passed the demo tapes to Robert Stigwood, who had recently joined NEMS. After an audition with Stigwood in February 1967, the Bee Gees signed a five-year contract whereby Polydor Records would release their records in the UK, and Atco Records would do so in the US.\n[…]\nIn 1985, Diana Ross released the album Eaten Alive, written by the Bee Gees, with the title track co-written with Michael Jackson (who also performed on the track). The album was again co-produced by Barry Gibb, and the single \"Chain Reaction\" gave Ross a UK and Australian No. 1 hit.\n[…]\nOn 14 February 2013, Barry Gibb unveiled a statue of the Bee Gees as well as unveiling \"Bee Gees Way\" (a walkway filled with photos and videos of the Bee Gees) in honour of the Bee Gees in Redcliffe, Queensland, Australia. On 27 June 2018, Barry Gibb, the last surviving member of the Bee Gees, was knighted by Prince Charles after being named on the Queen's New Year's Honours List. The statue of the Bee Gees in Douglas, Isle of Man, was installed in 2021.\n[…]\nBilyeu, Melinda; Cook, Hector; Hughes, Andrew Môn (2009) [2003]. The Bee Gees: Tales of The Brothers Gibb. Omnibus Press. ISBN 978-0-85712-004-5..\n[…]\nBee Gees at Rolling Stone\n[…]\nBee Gees at bmi.com\n[…]\nRobin Gibb sadly passes away after losing his battle with cancer[link removed]\n[…]\nBee Gees interviewed on the Pop Chronicles (1970)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bee_Gees",
        "situacao": "ok",
        "texto": "Bee Gees foi um grupo musical formado em 1958 pelos irmãos Barry, Robin e Maurice Gibb. O trio fez grande sucesso na música popular no final da década de 1960 e início da década de 1970, e posteriormente como artistas de destaque na era da música disco, em meados e no final da década de 1970.\n[…]\nNascidos na Ilha de Man, filhos de pais ingleses, os irmãos Gibb viveram em Chorlton, Manchester, Inglaterra, até o final da década de 1950. Lá, em 1955, formaram o grupo de skiffle/rock and roll The Rattlesnakes. A família mudou-se então para Redcliffe, na região de Moreton Bay, Queensland, Austrália, e mais tarde para Cribb Island.\n[…]\nO grupo foi formado por três irmãos, filhos de dois músicos regionais ingleses, Hugh Gibb e Barbara Pass, pais de mais duas crianças. Primeiro, o casal teve uma filha, Lesley Barbara Gibb, nascida em 12 de janeiro de 1945 em Manchester. Depois, a família mudou-se para Douglas, na Ilha de Man.\n[…]\nEm março de 1958, nasceu o último filho de Hugh e Barbara Gibb: Andrew Roy Gibb, ou simplesmente Andy Gibb que, futuramente, também iria ingressar no mundo da música, entretanto não como um \"Bee Gee\". Em maio do mesmo ano, os Rattlesnakes se separaram quando Frost e Horrocks deixaram o grupo; os irmãos Gibb então formaram outro grupo com o nome de Wee Johnny Hayes and the Blue Cats. Em agosto de 1958, a família emigrou para a Austrália, vivendo na cidade de Brisbane.\n[…]\nEm 1959, um DJ australiano chamado Bill Gates percebeu o talento dos irmãos e acabou sugerindo o nome de \"Bee Gees\", já que em sua opinião havia muitos \"BGs\" na vida deles (exemplo: Barbara Gibb, a mãe deles; Barry Gibb, esse DJ; Brothers Gibb...). Mais tarde, em 1966, adotaram o nome sugerido pelo DJ: Bee Gees.\n[…]\nFonte: Bee Gees World\n[…]\n«Hall da Fama de grupos vocais - The Bee Gees» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Gangnam Style",
      "descricao": "Canção do cantor sul-coreano Psy lançada em 2012, famosa por sua dança"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Gangnam, o distrito rico satirizado na canção Gangnam Style, do sul-coreano Psy, fica em que cidade?",
    "resposta": "Seul",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gangnam_Style",
      "https://en.wikipedia.org/wiki/Gangnam_District"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gangnam_Style",
        "situacao": "ok",
        "texto": "\"Gangnam Style\" (Korean: 강남스타일; pronounced [kaŋnam sɯtʰa.iɭ]) is a K-pop song by South Korean singer Psy, released on July 15, 2012, by YG Entertainment as the lead single of his sixth studio album, Psy 6 (Six Rules), Part 1. Gangnam District is a top global hub for fashion and trends and a wealthy neighborhood, home to countless luxury residences, high-end designer boutiques, and skyscrapers.\n[…]\n\"Gangnam Style\" is a South Korean neologism that refers to a lifestyle associated with the Gangnam region of Seoul, where people are trendy, hip, and exude a certain supposed class. The term was defined in Time's weekly vocabulary list as \"a manner associated with lavish lifestyles in Seoul's Gangnam district\".\n[…]\nOn October 9, the mayor of London Boris Johnson held a speech at the 2012 Conservative Party Conference where he told the audience that he and the British Prime Minister David Cameron have danced \"Gangnam Style.\" During a Google Earnings call, Larry Page, the CEO and co-founder of Google, hailed the song as a glimpse of the future of worldwide distribution through YouTube.\n[…]\nThis was mainly due to the growing influence and popularity of K-pop songs such as \"Gangnam Style.\" However, American journalist John Seabrook noted that by \"satirizing standard K-pop tropes in Gangnam Style\", Psy may have subverted the music genre's chances of making it big in the West.\n[…]\nIn 2015, a statue was placed in the Gangnam District in honor of the song.\n[…]\n\"Gangnam Style\" was officially re-released on August 14, 2012, as \"Oppa Is Just My Style\" (오빤 딱 내 스타일), featuring additional vocals provided by Korean singer and 4Minute member Hyuna.\n[…]\nGangnam Style in popular culture\n[…]\n\"GANGNAM STYLE (강남스타일)\" music video on YouTube\n[…]\n\"PSY – GANGNAM STYLE (강남스타일) M/V Making Film\" on YouTube\n[…]\nKirsten Acuna: Here's the English Translation of \"Gangnam Style\", Business Insider, September 19, 2012"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gangnam_District",
        "situacao": "ok",
        "texto": "Gangnam District (Korean: 강남구; pronounced [kaŋnam.ɡu]; lit. 'South of the [Han] River') is one of the 25 districts of Seoul, South Korea. It is a world-class fashion and trend center and affluent area, home to countless luxury homes, high-end brand stores, and skyscrapers. Gangnam District is the third-largest district in Seoul, with an area of 39.5 km2 (15.3 sq mi). As of the 2024 census, Gangnam\n[…]\nGangnam District is served by Seoul Subway Line 2, Seoul Subway Line 3, Seoul Subway Line 7, Seoul Subway Line 9, Suin–Bundang Line, and the Shinbundang Line, as well as high-speed rail services (SRT) and GTX-A at Suseo station.\n[…]\nThere are several festivals held in Gangnam District.\n[…]\nThe 2012 K-pop song \"Gangnam Style\" by South Korean entertainer Psy was inspired by the lifestyle of the Gangnam region and its music video was shot there as well. The song and video's popularity increased international awareness of the district. In the music video, Psy can be seen dancing on top of the ASEM Tower with the Trade Tower in the background. The two buildings are part of World Trade Center Seoul (WTC Seoul), also known as COEX.\n[…]\nThe webtoon My ID is Gangnam Beauty (내 ID는 강남미인!) by Gi Maeng-gi, which is about a girl who underwent plastic surgery due to being bullied because of her appearance, was released on Naver Webtoon in 2016. Its title referred to the namesake district being called the \"Mecca of plastic surgery\", with the term \"Gangnam beauty\" being used as a pejorative term to those who undergo the process.\n[…]\nGangnam District is twinned with:\n[…]\nList of districts of Seoul\n[…]\nAdministrative divisions of Gangnam District\n[…]\nGangnam District website (in Korean)\n[…]\nGangnam District website\n[…]\n(in Korean) Map, status quo and origin of dong names of Gangnam District\n[…]\n\"Tour The Ritzy Seoul District That Inspired Viral Hit 'Gangnam Style'\", photoessay at BusinessInsider.com, 20 September 2012\n[…]\nGangnam Street Videoclip"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gangnam_Style",
        "situacao": "ok",
        "texto": "\"Gangnam Style\" (coreano: 강남스타일; hanja: 江南스타일; RR: Gangnamseutail; MR: Kangnam sŭt'ail) é uma canção do cantor sul-coreano Psy. Foi composta e produzida pelo próprio juntamente com Yoo Gun-hyung e contou ainda com Yang Hyun-suk em sua produção. A canção foi lançada em 15 de julho de 2012, como o single principal de seu extended play Psy 6 (Six Rules), Part 1, e estreou em primeiro lugar na parada \n[…]\nA frase \"Gangnam Style\" é um neologismo coreano que se refere a um estilo de vida associado ao distrito de Gangnam de Seul. A canção e o vídeo musical se tornaram virais em agosto de 2012 e influenciaram a cultura popular em todo o mundo. \"Gangnam Style\" recebeu críticas mistas, com elogios por sua batida cativante e a dança divertida de Psy apresentada no vídeo musical - que se tornou um fenômeno - e durante apresentações ao vivo em vários locais ao redor do mundo.\n[…]\n\"Gangnam Style\" é um neologismo sul-coreano que se refere a um estilo de vida associado ao distrito de Gangnam em Seul, onde as pessoas estão na moda, são badaladas e exalam uma certa \"classe\". O termo foi listado na lista de vocabulário semanal da Time como uma maneira associada a estilos de vida luxuosos do distrito de Gangnam em Seul.\n[…]\nPsy comparou o distrito de Gangnam a cidade estadunidense de Beverly Hills na Califórnia, e disse em entrevista que pretendia, com um senso de humor distorcido, se declarar ele mesmo como sendo um \"Gangnam Style\", quando tudo sobre a canção, dança, visual e vídeo musical está longe de ser de classe alta:\n[…]\nNos Estados Unidos, a canção estreou em 74º lugar na Billboard Hot Digital Songs. A canção também estreou na 23ª posição na Heatseeker Songs na mesma semana. Até 31 de agosto de 2012, \"Gangnam Style\" tinha vendido 57.000 cópias nos Estados Unidos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Cesária Évora",
      "descricao": "Cantora cabo-verdiana de morna, conhecida como a diva dos pés descalços, morta em 2011"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A cantora Cesária Évora, a diva dos pés descalços, levou a morna para o mundo. De que país africano ela era?",
    "resposta": "Cabo Verde",
    "distratores": [
      "Angola",
      "Moçambique",
      "Guiné-Bissau"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ces%C3%A1ria_%C3%89vora"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ces%C3%A1ria_%C3%89vora",
        "situacao": "ok",
        "texto": "Cesária Évora GCIH (Portuguese pronunciation: [sɨˈzaɾiɐ ˈɛvuɾɐ]; 27 August 1941 – 17 December 2011) was a Cape Verdean singer known for singing morna, a genre of music from Cape Verde, in her native Cape Verdean Creole. Her songs were often devoted to themes of love, homesickness, nostalgia, and the history of the Cape Verdean people. She was known for performing barefoot and for her habit of smok\n[…]\nÉvora's music received many accolades, including a Grammy Award in 2004, and it has influenced many Cape Verde diaspora musicians as well as American pop singer Madonna. Évora is also known as Cize, the Barefoot Diva, and the Queen of Morna.\n[…]\nIn 1997, Évora won the KORA All African Music Awards for \"Best Artist of West Africa\" and \"Merit of the Jury\", and she won a third with Cabo Verde for \"Best Album\". Évora received a total of six Grammy Award nominations, and she won the Grammy Award for Best Contemporary World Music Album in 2004 for her album Voz dámor. The album also won the best world music album at the Victoires de la Musique. She won a second KORA \"Merit of the Jury\" award in 2010 for lifetime achievement.\n[…]\nÉvora was made an ambassador of the World Food Programme in 2004, and she was declared a cultural ambassador by the government of Cape Verde and granted a diplomatic passport. She received the Portuguese Grand-Cross of the Order of Prince Henry in 1999, and was awarded the French Legion of Honour in 2009.\n[…]\nÉvora is also an influence for music artists with no connection to Cape Verde: the American singer Madonna developed an interest in Portuguese and Cape Verdean music after meeting her, which influenced Madonna's studio album \"Madame X\" (2019) and the subsequent Madame X Tour. The Brazilian singer Caetano Veloso has cited her as an inspiration. Belgian musician Stromae admired Évora and released the song \"Ave Cesaria\" in her honor in 2014.\n[…]\nCabo Verde (1997)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ces%C3%A1ria_%C3%89vora",
        "situacao": "ok",
        "texto": "Cesária Évora (Mindelo, 27 de agosto de 1941 – Mindelo, 17 de dezembro de 2011) foi a cantora de maior reconhecimento internacional de toda a história da música popular cabo-verdiana. Apesar de ser bem-sucedida em diversos outros géneros musicais, Cesária Évora foi maioritariamente relacionada com a morna, por isso também apelidada de \"Rainha da Morna\". Era conhecida como \"A Diva dos pés descalços\n[…]\nAos 16 anos, Cesária começou a cantar em bares e hotéis e, com a ajuda de alguns músicos locais, ganhou maior notoriedade em Cabo Verde, sendo proclamada a \"Rainha da Morna\" pelos fãs.\n[…]\nAos vinte anos foi convidada a trabalhar como cantora para o Congelo - companhia de pesca criada por capital local e português -, recebendo conforme as actuações que fazia. Em 1975, ano em que Cabo Verde conquistou a independência, Cesária, frustrada por questões pessoais e financeiras, aliadas à dificuldade económica e política do jovem país, deixou de cantar para sustentar a família. Durante este período, que se prolongou por dez anos, Cesária teve de lutar contra o alcoolismo.\n[…]\nEncorajada por Bana (cantor e empresário cabo-verdiano radicado em Portugal), Cesária Évora voltou a cantar, atuando em Portugal. Em Cabo Verde foi convidada por José da Silva a ir para Paris onde acabou por gravar um novo álbum em 1988 \"La diva aux pieds nus\" (A diva dos pés descalços) - que é como se apresenta nos palcos. Este álbum foi aclamado pela crítica, levando-a a iniciar a gravação do álbum \"Miss Perfumado\" (1992). Desde então fixou residência na capital francesa.\n[…]\n1965 — Mornas de Cabo-Verde & Oriondino (vinil simple, 45 RPM, C. Évora & Conjunto)\n[…]\n1995 — Cesária\n[…]\n1997 — Cabo Verde (disco)\n[…]\nBlog de fãs em homenagem à Diva dos Pés Descalços - 1º site inteiramente dedicado a Cesária Évora em português, 2008.\n[…]\nRui Cidra, \"Migração, Performance e Produção de Fonogramas\": Cesária Évora e a (…) música popular de Cabo Verde",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Festival de Woodstock",
      "descricao": "Festival de música realizado em agosto de 1969 numa fazenda em Bethel, no estado de Nova York"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que guitarrista encerrou o Festival de Woodstock, na manhã de segunda-feira, com uma versão distorcida do hino americano?",
    "resposta": "Jimi Hendrix",
    "fonte": [
      "https://en.wikipedia.org/wiki/Woodstock",
      "https://en.wikipedia.org/wiki/Jimi_Hendrix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Woodstock",
        "situacao": "ok",
        "texto": "The Woodstock Music and Art Fair, commonly referred to as Woodstock, was a music festival held from August 15 to 18, 1969, on Max Yasgur's dairy farm in Bethel, New York, 60 miles (95 km) southwest of the town of Woodstock. Billed as \"an Aquarian Exposition: 3 Days of Peace & Music\", it attracted an audience of more than 460,000. Thirty-two acts performed outdoors despite overcast skies and sporad\n[…]\nJimi Hendrix: Live at Woodstock was produced in 2005 as two-disc set that included all available footage of Hendrix's Woodstock performance in two different edits. The release also included a mini-documentary with members of Hendrix's band, and footage of a September 1969 news conference where he discussed his Woodstock set.\n[…]\nAn album titled Jimi Hendrix: Woodstock was also released in August 1994, featuring only selected recordings of Jimi Hendrix at the festival.\n[…]\nOn August 2, 2019, the Rhino/Atlantic released Woodstock – Back to the Garden: The Definitive 50th Anniversary Archive, a massive 38 disc, 36-hour, 432-song completists' audio box set of nearly every note played at the original 1969 Woodstock festival (including 276 songs that were previously unreleased), a \"CD collection [co-produced for Rhino by archivist Andy Zax] that lays the '69 fest out in chronological order, from the first stage announcements to muddy farewells.\" The only things missing from this 38-CD edition were two Jimi Hendrix songs that his estate did not believe were up to the required standard and some of Sha Na Na's music that missed being captured on tape.\n[…]\nAttending the ceremony were Woodstock producers Michael Lang and Joel Rosenman. The ceremony began with a \"stirring\" electric guitar performance of The Star Spangled Banner by \"Captain\" Kirk Douglas of the Roots—\"reminiscent\" of Jimi Hendrix's performance at the original festival.\n[…]\nWoodstock Festival Gallery\n[…]\nWoodstock Vision media CD-ROM"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jimi_Hendrix",
        "situacao": "ok",
        "texto": "James Marshall \"Jimi\" Hendrix (born Johnny Allen Hendrix; November 27, 1942 – September 18, 1970) was an American guitarist and singer-songwriter. He is widely regarded as one of the greatest and most influential guitarists of all time. He was inducted into the Rock and Roll Hall of Fame in 1992 as a part of his band, the Jimi Hendrix Experience; the institution describes him as \"arguably the grea\n[…]\nWhen Jimi Hendrix set his guitar on fire at the 1967 Monterey Pop Festival he created one of rock's most perfect moments. Standing in the front row of that concert was a 17-year-old boy named Ed Caraeff. Caraeff had never seen Hendrix before nor heard his music, but he had a camera with him and there was one shot left in his roll of film. As Hendrix lit his guitar, Caraeff took a final photo. It would become one of the most famous images in rock and roll.\n[…]\nA star on the Hollywood Walk of Fame was dedicated to Hendrix on November 14, 1991, at 6627 Hollywood Boulevard. The Jimi Hendrix Experience was inducted into the Rock and Roll Hall of Fame in 1992, and the UK Music Hall of Fame in 2005. In 1998, Hendrix was inducted into the Native American Music Hall of Fame during its first year. In 1999, readers of Rolling Stone and Guitar World ranked Hendrix among the most important musicians of the 20th century.\n[…]\nThe Electric Lady Studio Guitar, a sculpture depicting Hendrix playing a Stratocaster, stands near the corner of Broadway and Pine Streets in Seattle. In May 2006, the city renamed a park near its Central District Jimi Hendrix Park, in his honor. In 2012, an official historic marker was erected on the site of the July 1970 Second Atlanta International Pop Festival near Byron, Georgia.\n[…]\nThe marker text reads, in part: \"Over thirty musical acts performed, including rock icon Jimi Hendrix playing to the largest American audience of his career.\"\n[…]\nJimi Hendrix discography at MusicBrainz"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Festival_de_Woodstock",
        "situacao": "ok",
        "texto": "Woodstock Music & Art Fair (conhecido informalmente como Woodstock ou Festival de Woodstock) foi um festival de música realizado entre os dias 15 e 18 de agosto de 1969 na fazenda de gado leiteiro de 600 acres de Max Yasgur, próximo à região de White Lake, na cidade de Bethel, no estado de Nova York, nos Estados Unidos. O local se localizava a setenta quilômetros a sudoeste da cidade de Woodstock.\n[…]\nJimi Hendrix foi o último a tocar no festival. Devido aos atrasos provocados pela chuva no domingo, Jimi subiu ao palco somente às 8h30 da manhã de segunda-feira. O público, que chegara a ser de 400 000 pessoas durante o festival, agora somava apenas 30 000. Muitos deles apenas esperavam ver um pouco de Jimi no palco para ir embora durante sua apresentação. Hendrix e sua nova banda, Gypsy Sun and Rainbows (apresentada como The Experience, o que foi corrigido por Jimi), tocou durante duas horas.\n[…]\nSua versão psicodélica para o hino nacional dos Estados Unidos ocupou 3/4 de sua apresentação (sendo seguida por Purple Haze). A canção se tornou \"parte do zeitgeist dos anos 1960\" por ter sido registrada para a posteridade pelo filme Woodstock. A imagem de Jimi tocando vestindo sua jaqueta de couro branca com contas azuis e franjas e um cachecol vermelho foi, desde então, considerada um momento definidor dos anos 1960.\n[…]\nJimi Hendrix / Gypsy Sun & Rainbows — tocaram para um público bem mais reduzido, de pouco mais de 200 000 pessoas.\n[…]\nThe Doors: considerado como uma alternativa, cancelou sua aparição no último momento; de acordo com o guitarrista Robbie Krieger, eles recusaram pois pensaram que aquela seria mais uma \"imitação de segunda categoria do Monterey Pop Festival\", mais tarde se arrependendo da decisão. Outro fator foi que o vocalista Jim Morrison estaria inseguro quanto a se apresentar frente a grandes plateias.\n[…]\n«The Woodstock Project (arquivado)». (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Guns N' Roses",
      "descricao": "Banda americana de hard rock formada em Los Angeles em 1985, com o vocalista Axl Rose"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que guitarrista do Guns N' Roses, de cartola e cachos sobre o rosto, tocou o solo de Sweet Child o' Mine?",
    "resposta": "Slash",
    "fonte": [
      "https://en.wikipedia.org/wiki/Slash_(musician)",
      "https://en.wikipedia.org/wiki/Sweet_Child_o%27_Mine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slash_(musician)",
        "situacao": "ok",
        "texto": "Saul Hudson (born 23 July 1965), known professionally as Slash, is a British and American musician, best known as the lead guitarist of the hard rock band Guns N' Roses, with whom he achieved worldwide success beginning in the late 1980s. He has received critical acclaim and is considered one of the greatest guitarists in history.\n[…]\nIn July 1987, Guns N' Roses released its debut album, Appetite for Destruction, which, as of September 2008, had sold over 28 million copies worldwide, 18 million of which were sold in the United States, making it the bestselling debut album of all time in the U.S. In the summer of 1988, the band achieved its only U.S. No. 1 hit with \"Sweet Child O' Mine\", a song spearheaded by Slash's guitar riff and solo.\n[…]\nIn 2004, Slash's introductory riff in \"Sweet Child o' Mine\" was voted No. 1 on a list of \"The 100 Greatest Riffs\" by the readers of Total Guitar; his riffs in \"Out ta Get Me\" (No. 51), \"Welcome to the Jungle\" (No. 21), and \"Paradise City\" (No. 19) also made the list. In 2006, his solo in \"Paradise City\" was voted No. 3 by Total Guitar's readers on a list of \"The 100 Hottest Guitar Solos\"; his solos in \"Sweet Child o' Mine\" and \"November Rain\" were ranked No. 30 and No. 82 respectively.\n[…]\nIn 2008, Guitar World placed Slash's solo in \"November Rain\" at No. 6 on their list of \"The 100 Greatest Guitar Solos\", while his solo in \"Sweet Child o' Mine\" was ranked No. 37 on the list. In 2010, the readers of Total Guitar voted his riff in \"Slither\" runner-up on the list of \"The 50 Greatest Riffs of the Decade\", while his riff in \"By the Sword\" was ranked No. 22. Slash received a Radio Contraband Rock Radio Award in 2012. In January 2015 Slash received the Les Paul award.\n[…]\nSlash; Bozza, Anthony (2008). Slash. HarperCollins. ISBN 978-0-00-725777-5.\n[…]\nSlash discography at Discogs\n[…]\nSlash at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sweet_Child_o%27_Mine",
        "situacao": "ok",
        "texto": "\"Sweet Child o' Mine\" is a song by American rock band Guns N' Roses, released on their debut studio album, Appetite for Destruction (1987). In the United States, the song was released in June 1988, topping the US Billboard Hot 100 chart and becoming the band's only US number-one single. In the United Kingdom, the song was released in August 1988, reaching number 24 on the UK Singles Chart the same\n[…]\nTo make \"Sweet Child o' Mine\" more marketable to MTV and radio stations, the song was edited down from 5:56 to 4:58, for the radio edit/remix, with much of Slash's guitar solo removed. This drew the ire of the band, including Rose, who commented on it in a 1989 interview with Rolling Stone: \"I hate the edit of 'Sweet Child o' Mine.' Radio stations said, 'Well, your vocals aren't cut.' My favorite part of the song is Slash's slow solo; it's the heaviest part for me.\n[…]\n\"Sweet Child o' Mine\" placed number 37 on Guitar World's list of the \"100 Greatest Guitar Solos.\" It also came in at number three on Blender's 500 Greatest Songs Since You Were Born, and at number 196 on Rolling Stone's The 500 Greatest Songs of All Time in 2004 and 88th in the 2021 list.\n[…]\nGuitarist Slash said in 1990, \"[The song] turned into a huge hit and now it makes me sick. I mean, I like it, but I hate what it represents.\"\n[…]\nAs of May 2015, this comment no longer appeared on the earlier article. The story went viral quickly, encouraging several comments on both the MAX article and the suggestion that \"Unpublished Critics\" had influenced \"Sweet Child o' Mine,\" including one from Duff McKagan, bass player with Guns N' Roses when \"Sweet Child o' Mine\" was written and recorded.\n[…]\nSlash performs his guitar solo as a guitarist auditioning for a band in a Capital One commercial in which the theme is \"easiest decision in the history of decisions.\"\n[…]\nSlash – lead guitar\n[…]\nGuns N' Roses discography"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Slash",
        "situacao": "ok",
        "texto": "Saul Hudson (Londres, 23 de julho de 1965), conhecido pelo seu nome artístico Slash, é um guitarrista anglo-americano mundialmente famoso como integrante da formação clássica da banda Guns N' Roses, com quem alcançou sucesso mundial no final da década de 1980 e início dos anos 90. Em sua carreira posterior, Slash integrou algumas outras bandas, bem sucedidas em sua maioria, e em 2011 iniciou uma c\n[…]\nTambém, a Guitar World classificou seu solo em November Rain em sexto lugar na sua lista de \"Os 100 Melhores Riffs de Guitarra\" em 2008, e a Total Guitar colocou seu riff de Sweet Child o' Mine em primeiro lugar na sua lista de \"100 Maiores Riffs\" em 2004. Em julho de 2012, Slash recebeu uma estrela na Calçada da Fama de Hollywood, em Los Angeles, onde o músico cresceu.\n[…]\nTambém desde o início do Guns N' Roses, Slash usa um Gibson Les Paul Standard 1988 ao vivo, esta guitarra já teve seu braço quebrado em dois lugares, mas Les Paul, criador do modelo, fez os reparos necessários e o músico continuou a usá-la.\n[…]\nPara sua carreira solo, tanto no palco quanto em estúdio, Slash passou a usar um Marshall AFD100-amp.\n[…]\nEm 2004, o Riff de Slash na canção Sweet Child O'Mine ficou no topo da lista da Total Guitar dos \"100 Maiores Riffs\", e seus solos nas canções Paradise City, Welcome to the Jungle e Out Ta Get Me também entraram na lista, na décima nona, vigésima primeira e quinquagésima primeira posição nessa ordem.\n[…]\nEm 2007, Slash ganhou uma estrela na Calçada da Fama do Rock, ao lado de Jimmy Page, Eddie Van Halen e Jimi Hendrix, e em 2010 ele foi homenageado no Sunset Strip Music Festival, quando o prefeito de Los Angeles declarou aquele 26 de agosto como o \"dia do Slash\". Em 2012, o guitarrista foi introduzido no Corredor da Fama do Rock and Roll como parte da formação clássica do Guns N' Roses, apresentando no evento as canções Paradise City, Sweet Child O'Mine e Mr.\n[…]\nSolo:\n[…]\n2010 - Slash",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Queen",
      "descricao": "Banda de rock britânica formada em Londres em 1970, de Freddie Mercury e Brian May"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Another One Bites the Dust, um dos maiores sucessos do Queen, foi composta por qual integrante da banda?",
    "resposta": "John Deacon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Another_One_Bites_the_Dust"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Another_One_Bites_the_Dust",
        "situacao": "ok",
        "texto": "\"Another One Bites the Dust\" is a song by the British rock band Queen. Written by bassist John Deacon, the song was featured on the group's eighth studio album, The Game (1980). It was a worldwide hit, charting at number one on the US Billboard Hot 100 for three weeks, from 4 October to 18 October (being their second and final number one single in the country).\n[…]\nJohn Deacon's bass line was inspired by \"Good Times\" by the disco group Chic. In an interview with NME, Chic co-founder Bernard Edwards stated, \"That Queen record came about because that Queen bass player ... spent some time hanging out with us at our studio.\"\n[…]\nAfter attending a Queen concert in Los Angeles, Michael Jackson suggested to Freddie Mercury backstage that \"Another One Bites the Dust\" be released as a single.\n[…]\nBillboard called it a \"snarling track\" with a \"spare, lean sound.\" Record World said that \"a brutal bass conspires with the sing-along hook on this thoroughly contagious [song].\" Classic Rock History critic Millie Zeiler rated it John Deacon's 2nd best Queen song.\n[…]\nJohn Deacon – bass guitar, electric guitar, piano, percussion\n[…]\nThe first official remix of \"Another One Bites The Dust\" was Phase 5's Long Dusted B-Boy version, which was released on the Hollywood BASIC compilation BASIC Beats Sampler in early 1992. The remix featured a new rap verse by Money-B of Raw Fusion and contained many samples from other records including, but not limited to, \"Flash\" by Queen themselves, \"The Breaks\" by Kurtis Blow, \"I Know You Got Soul\" by Eric B. & Rakim, \"Good Times\" by Chic and \"It's Too Funky in Here\" by James Brown.\n[…]\n\"Another One Bites the Dust\" (Soul Avengerz Remix)\n[…]\n\"Another One Bites the Dust\" (Radio Mix) – 3:48\n[…]\n\"Another One Bites the Dust\" (Club Mix) – 5:29\n[…]\n\"Another One Bites the Dust\" (DJs Extended Mix) – 6:23\n[…]\nAnother One Bites the Dust – The Story Behind the Song at Wow-Vinyl"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Another_One_Bites_the_Dust",
        "situacao": "ok",
        "texto": "\"Another One Bites the Dust\" é uma canção escrita pelo baixista John Deacon, da banda Queen e é a terceira faixa do álbum de 1980 \"The Game\".\n[…]\nÉ tido como um dos maiores sucessos dos Queen: foi uma canção  que estabeleceu a ligação entre o rock dos primeiros anos da banda e os novos sons que iriam usar nos tempos seguintes, como o funk rock. É reconhecida pela sua linha de baixo pulsante, na verdade há quem a compare à canção  \"Good Times\" da banda \"Chic\", uma das favoritas de Deacon. Fez um enorme sucesso principalmente nos EUA onde alcançou o topo das paradas de rock, soul e disco.\n[…]\nAnother One Bites The Dust inicialmente não seria um single, mas depois de uma sugestão de Michael Jackson, a banda decidiu lançá-la. Desde o seu lançamento em 1980 que esta canção foi tocada pela banda em quase todos os seus shows fazendo enorme furor entre o público. Em 2006 esta canção foi remixada pelo Miami Project voltando as paradas de sucesso.\n[…]\nContraditoriamente, as canções \"Another One Bites the Dust\" (Um outro bate as botas) e \"Stayin' Alive\" (Ficando vivo) foram usadas para treinar médicos profissionais para prover o número correto de compressões do peito por minuto enquanto faziam CPR. Ambas as músicas tem perto de 104 batidas por minuto, e 100-120 compressões peitorais são o recomendado pela British Heart Foundation.\n[…]\nBanda\n[…]\nJohn Deacon - baixo, guitarra rítmica, piano (gravação ao contrário), composição",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Hotel California",
      "descricao": "Canção de rock lançada em 1976 como faixa-título de um álbum da banda americana Eagles"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A canção Hotel California, de 1976, sobre um hotel do qual nunca se consegue sair, é de que banda americana?",
    "resposta": "Eagles",
    "distratores": [
      "Fleetwood Mac",
      "The Doors",
      "Creedence Clearwater Revival"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hotel_California_(Eagles_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hotel_California_(Eagles_song)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Imagine",
      "descricao": "Canção de John Lennon lançada no álbum homônimo de 1971"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 2017, quem passou a ser creditada oficialmente como coautora da canção Imagine, de John Lennon?",
    "resposta": "Yoko Ono",
    "distratores": [
      "Linda McCartney",
      "Cynthia Lennon",
      "May Pang"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Imagine_(John_Lennon_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Imagine_(John_Lennon_song)",
        "situacao": "ok",
        "texto": "\"Imagine\" is a song by the English musician John Lennon from his 1971 album of the same name. The lyrics encourage listeners to imagine a world of peace, beginning with living without religion and its concepts, without economic materialism, and without borders separating nations. Shortly before his death, Lennon said that much of the song's lyrics and content came from his wife, Yoko Ono; in 2017,\n[…]\nSeveral poems from Yoko Ono's 1964 book Grapefruit inspired Lennon to write the lyrics for \"Imagine\"—in particular, one which Capitol Records reproduced on the back cover of the original Imagine LP titled \"Cloud Piece\", reads: \"Imagine the clouds dripping, dig a hole in your garden to put them in.\" Lennon later said the composition \"should be credited as a Lennon/Ono song.\n[…]\nA lot of it—the lyric and the concept—came from Yoko, but in those days I was a bit more selfish, a bit more macho, and I sort of omitted her contribution, but it was right out of Grapefruit.\" When asked about the song's meaning during a December 1980 interview with David Sheff for Playboy magazine, Lennon told Sheff that Dick Gregory had given Ono and him a Christian prayer book, which inspired the concept behind \"Imagine\".\n[…]\nIn June 2017, the US National Music Publishers Association awarded \"Imagine\" a Centennial Song Award and recognised Lennon's desire to add Yoko Ono as a co-author of the song.\n[…]\nIn 2015, American singer and songwriter Lady Gaga performed the song at the 2015 European Games opening ceremony. The song was played for 70,000 people in Baku, Azerbaijan, that served as host of the event. In 2018, the song was performed at the 2018 Winter Olympics opening ceremony in Pyeongchang (South Korea). The same year Yoko Ono released a solo rendition of the song, the first since she received credit as co-writer.\n[…]\nJohn Lennon – vocals, piano\n[…]\n\"Imagine (Remastered 2010)\" on YouTube\n[…]\n\"Train - \"Imagine\"\" on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imagine_%28can%C3%A7%C3%A3o_de_John_Lennon%29",
        "situacao": "ok",
        "texto": "\"Imagine\" é uma canção do músico inglês John Lennon do seu álbum homônimo de 1971. O single mais vendido de sua carreira solo, a letra incentiva os ouvintes a imaginar um mundo de paz, sem materialismo, sem fronteiras separando nações e sem religião. Pouco antes de sua morte, Lennon disse que grande parte da letra e do conteúdo da música veio de sua esposa, Yoko Ono, e em 2017, ela recebeu um créd\n[…]\nVários poemas do livro de Yoko Ono de 1964, Grapefruit, inspiraram Lennon a escrever a letra de \"Imagine\"  — em particular, um que a Capitol Records reproduziu na contracapa do LP original de Imagine, intitulado \"Cloud Piece\", diz: \"Imagine as nuvens pingando, cave um buraco no seu jardim para colocá-las.\"  Lennon disse mais tarde que a composição \"deveria ser creditada como uma música de Lennon/Ono.\n[…]\nMuito disso — a letra e o conceito — veio de Yoko, mas naquela época eu era um pouco mais egoísta, um pouco mais machista, e meio que omiti sua contribuição, mas estava certo de Grapefruit .\"  Quando questionado sobre o significado da música durante uma entrevista em dezembro de 1980 com David Sheff para a revista Playboy, Lennon disse a Sheff que Dick Gregory havia dado a Ono e a ele um livro de orações cristão, que inspirou o conceito por trás de \"Imagine\".O conceito de oração positiva...\n[…]\nEm junho de 2017, a US National Music Publishers Association concedeu a \"Imagine\" o Centennial Song Award e reconheceu o desejo de Lennon de adicionar Yoko Ono como coautora da canção.\n[…]\nJohn Lennon – vocais, piano\n[…]\nd.↑ Yoko Ono dedicou a Imagine Peace Tower na Islândia em 2007.\n[…]\ne.↑ Elton John, que se tornou amigo de Lennon na década de 1970, parodiou a música em particular, cantando: \"Imagine six apartments / It isn't hard to do / One is full of fur coats / Another's full of shoes\".\n[…]\n\"Imagine - John Lennon & The Plastic Ono Band (w The Flux Fiddlers) (Ultimate Mix 2018) - 4K REMASTER\" no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Prince",
      "descricao": "Cantor, compositor e multi-instrumentista americano, de Purple Rain, morto em 2016"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Prince, Madonna e Michael Jackson nasceram todos em 1958. Qual dos três nasceu primeiro?",
    "resposta": "Prince",
    "fonte": [
      "https://en.wikipedia.org/wiki/Prince_(musician)",
      "https://en.wikipedia.org/wiki/Madonna",
      "https://en.wikipedia.org/wiki/Michael_Jackson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Prince_(musician)",
        "situacao": "ok",
        "texto": "Prince Rogers Nelson (June 7, 1958 – April 21, 2016) was an American singer, songwriter, musician, dancer, actor, and filmmaker. Often credited as one of the greatest musicians of his generation, he pioneered the Minneapolis sound and was influential in the evolution of various other genres. With estimated sales exceeding 100 million records, Prince is one of the best-selling music artists of all \n[…]\nPrince Rogers Nelson was born at Mount Sinai Hospital in Minneapolis, Minnesota, on June 7, 1958, to jazz singer Mattie Della (née Shaw) and pianist and songwriter John Lewis Nelson. All four of Prince's grandparents were from Louisiana. The jazz drummer Louis Hayes was his paternal cousin.\n[…]\nPrince's \"Little Red Corvette\" was one of the first two videos by Black artists—along with Michael Jackson's \"Billie Jean\"—played in heavy rotation on MTV, which had been perceived as against \"black music\" until CBS President Walter Yetnikoff threatened to pull all CBS videos. Prince and Jackson had a competitive rivalry which lasted for many years. The song \"Delirious\" also placed in the top ten on the Billboard Hot 100 chart.\n[…]\nFollowing an autopsy, Prince's remains were cremated. On April 26, 2016, Prince's sister Tyka Nelson filed court documents in Carver County to open a probate case, stating that no will had been found. As of his death, the twice-divorced Prince was neither married nor known to have fathered any surviving children.\n[…]\nPrince's half sister Lorna died in 2006. Another half-brother, Alfred Jackson, died in August 2019. On September 3, 2021, John R. Nelson, Prince's eldest half brother, died. On November 4, 2024, musician Tyka Nelson, who was Prince's only full sibling, died. In July 2021, Omarr Baker and late half brother Alfred Jackson's interest sold all of the shares they owned of Prince's estate to Primary Wave Music, while Tyka Nelson sold 90%.\n[…]\nPrince at Billboard"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Madonna",
        "situacao": "ok",
        "texto": "Madonna Louise Ciccone ( chih-KOH-nee, Italian: [tʃikˈkoːne]; born August 16, 1958) is an American singer, songwriter, record producer, and actress. Dubbed the \"Queen of Pop\", she is known for her continual reinvention and versatility in music production, songwriting, and visual presentation. Her works, which concern social, political, sexual, and religious themes, have drawn acclaim and controver\n[…]\n\"Like a Prayer\" was released as the lead single from her fourth studio album, also titled Like a Prayer. The song became her seventh number-one single on the Billboard Hot 100 and spent three weeks atop the chart. Madonna co-wrote and co-produced her album alongside Patrick Leonard, Stephen Bray, and Prince. In the US, Like a Prayer was released on March 21, 1989, to universal acclaim from critics. Rolling Stone's J. D.\n[…]\nMadonna concluded her contract with Warner Records with the release of her third greatest-hits album, Celebration, in September 2009. The compilation included two new tracks, along with thirty-four songs spanning her career with the label. The album reached number one in multiple countries, including Canada, Germany, Italy, and the UK. She appeared at the 2009 MTV Video Music Awards to deliver a tribute to the deceased singer Michael Jackson.\n[…]\nAccording to Taraborrelli, Madonna's concerts, which feature multimedia elements, advanced technology, and elaborate sound design, function as \"extravagant show piece[s]\" and \"walking art show[s]\". Chris Nelson of The New York Times observed that artists like Madonna redefined standards of live performance with concerts \"that included not only elaborate costumes and precision-timed pyrotechnics but also highly athletic dancing\"—often at the expense of live vocals.\n[…]\nMadonna at AllMusic\n[…]\nMadonna discography at Discogs\n[…]\n\"Madonna\". Rock and Roll Hall of Fame.\n[…]\nMadonna at the TCM Movie Database (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Jackson",
        "situacao": "ok",
        "texto": "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. Dubbed the \"King of Pop\", he is widely regarded as one of the most culturally significant figures of the 20th century. His musical achievements broke American racial barriers and made him a dominant figure worldwide.\n[…]\nMichael Joseph Jackson Jr. (commonly known as Prince) was born on February 13, 1997. His sister Paris-Michael Katherine Jackson was born on April 3, 1998. Jackson and Rowe divorced in 2000; Rowe conceded custody of the children and received an $8.5 million settlement (equivalent to $15.9 million in 2025). In 2004, after the second child abuse allegations against Jackson, she returned to court seeking to regain custody. The suit was settled in 2006.\n[…]\nLater that month, Jackson organized a series of \"Michael Jackson & Friends\" benefit concerts in Germany and South Korea. Other artists involved included Slash, The Scorpions, Boyz II Men, Luther Vandross, Mariah Carey, A. R. Rahman, Prabhu Deva Sundaram, Shobana, Andrea Bocelli and Luciano Pavarotti. The proceeds went to the Nelson Mandela Children's Fund, the Red Cross and UNESCO.\n[…]\nOn January 9, 2002, Jackson won his 22nd American Music Award for Artist of the Century. Later that year, an anonymous surrogate mother gave birth to his third child, Prince Michael Jackson II (nicknamed \"Blanket\"), who had been conceived by artificial insemination. On November 20, Jackson briefly held Blanket over the railing of his Berlin hotel room, four stories above ground level, prompting widespread criticism in the media.\n[…]\nMichael Jackson's This Is It (2009)\n[…]\nPersonal relationships of Michael Jackson\n[…]\nList of artists influenced by Michael Jackson\n[…]\nHow Michael Jackson Changed Dance History – biography.com\n[…]\nMichael Jackson at the FBI's website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prince",
        "situacao": "ok",
        "texto": "Prince Rogers Nelson (Minneapolis, 7 de junho de 1958 — Chanhassen, 21 de abril de 2016) foi um cantor, compositor, músico, dançarino e ator estadunidense. Muitas vezes creditado como uma influência na música, e um dos maiores músicos de sua época, ele foi pioneiro no som de Minneapolis e influente na evolução de vários outros gêneros musicais.\n[…]\nPrince Rogers Nelson era filho de John L. Nelson e Mattie Shaw. O pai tocou num trio de jazz chamado Prince Rogers Trio, daí a inspiração para o seu nome. Ambos os seus pais são afro-americanos. Após o nascimento da sua irmã, Tika Evene em 1960, os pais de Prince foram-se distanciando até se separarem. A mãe se casou novamente mas a convivência com seu padrasto não era boa, o que o fez morar temporariamente com o pai, que lhe comprou a primeira guitarra.\n[…]\nSign O´The Times, lançado em 1987 como álbum duplo recebe várias críticas positivas e entra para a lista dos 100 melhores álbuns de todos os tempos da Rolling Stone e da revista Time, sendo eleito ainda o melhor dos anos 1980. Tentando promover o álbum (que apesar de sucesso da crítica, falhava em vendas), Prince lança seu terceiro filme, homônimo ao disco. Em 1987 Michael Jackson convida Prince para um dueto em seu álbum Bad, mas diferenças artísticas puseram fim ao projeto.\n[…]\nEm 2005, a Rolling Stone também classificou Prince como o 27º melhor artista de todos os tempos.\n[…]\nSegundo a revista Veja, \"seja pela genialidade ou pela atitude na década de 1980, Prince construiu uma carreira comparável à de nomes como David Bowie, Michael Jackson, Madonna e Elvis Presley. Porém, ao contrário dos colegas, o músico manteve uma relação conturbada com sites de streaming e vídeos como Spotify e YouTube, o que o prejudicou e, na era da música online, ofuscou seu legado para novas gerações\".\n[…]\nPrince (em inglês) no AllMusic\n[…]\nPrince na Billboard.com...",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Ozzy Osbourne",
      "descricao": "Cantor britânico de heavy metal, vocalista do Black Sabbath e depois artista solo."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em 1982, num show em Iowa, Ozzy Osbourne mordeu a cabeça de um animal jogado no palco, achando que era de borracha. Que animal?",
    "resposta": "Morcego",
    "distratores": [
      "Rato",
      "Lagarto",
      "Sapo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ozzy_Osbourne"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ozzy_Osbourne",
        "situacao": "ok",
        "texto": "John Michael \"Ozzy\" Osbourne (3 December 1948 – 22 July 2025) was an English singer, songwriter, and media personality. Dubbed the \"Prince of Darkness\", he co-founded the heavy metal band Black Sabbath in 1968 and rose to prominence in the 1970s as their lead vocalist. Black Sabbath is widely credited as a pioneer of heavy metal music.\n[…]\nThe band replaced Osbourne with former Rainbow singer Ronnie James Dio. In a 21 August 1987 interview with Tommy Vance on BBC Radio 1's Friday Rock Show, Dio said, \"I was not, and never will be, Ozzy Osbourne. He was the vocalist and songwriter in that era who helped create that band and make it what it was, and what it is in its classic form.\"\n[…]\nOn 20 January 1982, Osbourne bit the head off a bat that he thought was rubber while performing at the Veterans Memorial Auditorium in Des Moines, Iowa. According to a 2004 Rolling Stone article, the bat was alive at the time; however, 17-year-old Mark Neal, who threw it onto the stage, said it was brought to the show dead.\n[…]\nOsbourne began to date his manager, Sharon Arden, in 1979. Guitarist Randy Rhoads predicted in 1981 that the couple would \"probably get married someday\" despite their constant bickering and the fact that Osbourne was still married to Thelma at the time. Ozzy and Sharon married on 4 July 1982. He later confessed that the Independence Day date was chosen so that he would never forget his anniversary.\n[…]\nIn 2025, Jack Osbourne stated on the podcast Hate To Break It To Ya Podcast with Jamie Kennedy that near Ozzy's death he had a Bible with him at all times and would show it to all his visitors. Jack also stated that his dad would identify with Christianity and that he was frustrated with the public's perception of himself and Satanism.\n[…]\nOzzy Osbourne discography at Discogs\n[…]\nOzzy Osbourne at IMDb\n[…]\nOzzy Osbourne Live Photo Gallery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ozzy_Osbourne",
        "situacao": "ok",
        "texto": "John Michael \"Ozzy\" Osbourne (Birmingham, 3 de dezembro de 1948 – Buckinghamshire , 22 de julho de 2025) foi um cantor e compositor britânico. Ganhou notoriedade na década de 1970 como vocalista da banda de heavy metal Black Sabbath, com a qual ajudou a definir o gênero. Durante esse período, passou a ser conhecido como \"Príncipe das Trevas\".\n[…]\nVale destacar que foi nessa época um dos acontecimentos que mais marcou a carreira do artista. Tudo aconteceu quando um fã, durante o show, atirou um morcego ao palco e Ozzy, acreditando se tratar de um artefato de plástico, mordeu a cabeça do animal e acabou tendo que tomar várias vacinas antirrábicas. O medicamento causou-lhe choques anafiláticos, entre outros problemas de saúde. Chegou-se até a ser divulgada a sua morte, que foi desmentida pelo próprio vocalista.\n[…]\nEm resposta, Ozzy Osbourne, de forma irônica, disse saber que pessoas podem morrer de raiva após serem mordidas por morcegos, mas que nunca ouviu falar que alguém pode morrer de raiva por ter mordido um morcego. Além disso, a grande repercussão por parte da imprensa sensacionalista levou entidades de proteção aos animais a protestarem contra os shows; alguns, inclusive, tiveram que ser cancelados. Mesmo com tantos incidentes, a turnê continuou.\n[…]\nLivre dos compromissos com a Jet Records, Ozzy assinou contrato com a Epic Records, e Sharon decidiu que seria interessante um pouco de publicidade. A ideia inicial era que Ozzy soltasse duas pombas durante um encontro com os executivos da gravadora, só que, a despeito dos acontecimentos com o morcego, Ozzy libertou uma das pombas e arrancou a cabeça da outra a dentadas.\n[…]\n2012 – Ozzy\n[…]\nThe Osbournes (série de televisão que mostra o cotidiano de Ozzy e sua família)\n[…]\nOzzy Osbourne no Instagram\n[…]\nOzzy Osbourne no Facebook\n[…]\nOzzy Osbourne no Twitter",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Abbey Road",
      "descricao": "Álbum dos Beatles lançado em 1969, com a capa da banda atravessando uma faixa de pedestres em Londres"
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Let It Be foi o último álbum lançado pelos Beatles. Mas qual foi o último que eles gravaram juntos?",
    "resposta": "Abbey Road",
    "distratores": [
      "Revolver",
      "Sgt. Pepper's",
      "Álbum Branco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Abbey_Road",
      "https://en.wikipedia.org/wiki/Let_It_Be_(album)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abbey_Road",
        "situacao": "ok",
        "texto": "Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969 by Apple Records. It is the last album the group recorded – although Let It Be had mostly been recorded earlier, its release was delayed due to production issues. Abbey Road was mostly recorded in April, July and August 1969, and topped the record charts in both the United States and the Uni\n[…]\nSeveral artists have covered some or all of the side-two medley, including Phil Collins (for the Martin/Beatles tribute album In My Life), The String Cheese Incident, Transatlantic and Tenacious D (who performed the medley with Phish keyboardist Page McConnell). Furthur, a jam band including former Grateful Dead members Bob Weir and Phil Lesh, played the entire Abbey Road album during its Spring Tour 2011.\n[…]\nIn June 1970, Allen Klein reported that Abbey Road was the Beatles' best-selling album in the US with sales of about five million. By 1992, Abbey Road had sold nine million copies. The album became the ninth-most downloaded on the iTunes Store a week after it was released there on 16 November 2010. A CNN report stated it was the best-selling vinyl album of 2011. It is the first album from the 1960s to sell more than five million albums since 1991 when Nielsen SoundScan began tracking sales.\n[…]\nIn 2001, Abbey Road was certified 12× platinum by the Recording Industry Association of America (RIAA). The album continues to be reissued on vinyl. It was included as part of the Beatles' Collector's Crate series in September 2009 and saw a remastered LP release on 180-gram vinyl in 2012.\n[…]\nThe Beatles timeline\n[…]\nThe Beatles albums discography\n[…]\nAbbey Road at Discogs (list of releases)\n[…]\nBeatles comments on each song\n[…]\nBeatles engineer Geoff Emerick on Abbey Road – A track-by-track walkthrough\n[…]\nLive webcam at the Abbey Road zebra crossing\n[…]\nThe Beatles y la foto de la portada de Abbey Road"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Let_It_Be_(album)",
        "situacao": "ok",
        "texto": "Let It Be is the twelfth and final studio album  by the English rock band the Beatles. It was released on 8 May 1970, nearly a month after the official announcement of the group's public break-up, in tandem with the documentary of the same name. Concerned about recent friction within the band, Paul McCartney had conceived the project as a deliberate attempt to return to the band's rock 'n' roll ro\n[…]\nIn April, the Beatles issued the lead single \"Get Back\", backed with \"Don't Let Me Down\", after which engineer Glyn Johns prepared and submitted mixes of the album, then titled Get Back, which the band rejected. As bootlegs of these mixes circulated widely among fans, the project remained in limbo, and the group moved on to recording the album Abbey Road, released in September of that year.\n[…]\nThe Get Back album was intended for release in July 1969, but its release was pushed back to September to coincide with the planned television special and the theatrical film about the making of the album. In September, the release was pushed back to December, because the Beatles had just recorded Abbey Road and wanted to issue that album instead.\n[…]\nOn 20 September, six days before Abbey Road was released, Lennon told McCartney, Starr, and business manager Allen Klein (Harrison was not present) that he \"wanted a divorce\" from the group. By December, the Get Back album had been shelved.\n[…]\nThe LP cover was designed by John Kosh and includes individual photos of the four band members, again taken by Russell. On the front cover, the photos are set in quadrants on a black surround. The album title appears in white text above the images but, as on Abbey Road, Rubber Soul, and Revolver, the cover does not include the band's name.\n[…]\nBilly Preston – electric piano on \"Dig a Pony\", \"I've Got a Feeling\", \"One After 909\", \"The Long and Winding Road\" and \"Get Back\", Hammond organ on \"Dig It\" and \"Let It Be\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abbey_Road",
        "situacao": "ok",
        "texto": "Abbey Road é o décimo primeiro álbum de estúdio da banda britânica de rock The Beatles, lançado em 26 de setembro de 1969 pela Apple Records. É o último álbum que o grupo gravou, embora Let It Be (1970) tenha sido o último álbum concluído antes da separação da banda em abril de 1970. Foi gravado principalmente em abril, julho e agosto de 1969, e liderou as paradas de discos nos Estados Unidos e no\n[…]\nAbbey Road foi gravado em máquinas de fita de rolo de oito pistas em vez das tradicionais máquinas de quatro pistas utilizadas nos álbuns anteriores dos Beatles, e foi o primeiro álbum do grupo a não ser lançado de forma autêntica no formato monofônico em nenhum lugar do mundo. O disco fez uso proeminente da guitarra tocada através de um alto-falante Leslie e do sintetizador Moog.\n[…]\nOs Beatles fizeram pouca promoção de Abbey Road diretamente, e nenhum anúncio público foi feito sobre a separação da banda até que Paul anunciasse que estava deixando o grupo em abril de 1970. Nessa época, o projeto Get Back (agora renomeado Let It Be) havia sido reexaminado, com overdubs e sessões de mixagem continuando em 1970. Portanto, Let It Be se tornou o último álbum a ser finalizado e lançado pelos Beatles, embora sua gravação tenha começado antes de Abbey Road.\n[…]\nAbbey Road recebeu inicialmente críticas mistas dos críticos musicais, que criticaram os sons artificiais da produção e consideraram sua música inautêntica.\n[…]\nEm 2001, Abbey Road foi certificado 12 vezes como disco de platina pela Associação Americana da Indústria de Gravação. O álbum continua sendo relançado em vinil. Foi incluído como parte da série Collector's Crate dos Beatles, em setembro de 2009, e teve um lançamento LP remasterizado em vinil de 180 gramas em 2012. Uma versão Super Deluxe do álbum, que contou com novas mixagens por Giles Martin, foi lançada em setembro de 2019 para comemorar o 50.º aniversário do álbum original.",
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
