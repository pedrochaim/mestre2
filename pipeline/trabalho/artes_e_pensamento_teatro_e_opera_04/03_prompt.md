Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Teatro e Ópera** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Tosca",
      "descricao": "Ópera de Giacomo Puccini, estreada em Roma em 1900, sobre a cantora Floria Tosca, o pintor Cavaradossi e o chefe de polícia Scarpia."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "No final da ópera Tosca, de Puccini, a heroína se atira do alto de que monumento de Roma?",
    "resposta": "Castelo de Santo Ângelo",
    "distratores": [
      "Palácio Farnese",
      "Coliseu",
      "Monte Palatino"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tosca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tosca",
        "situacao": "ok",
        "texto": "Tosca is an opera in three acts by Giacomo Puccini to an Italian libretto by Luigi Illica and Giuseppe Giacosa. It premiered at the Teatro Costanzi in Rome on 14 January 1900. The work, based on Victorien Sardou's 1887 French-language dramatic play, La Tosca, is a melodramatic piece set in Rome in June 1800, with the Kingdom of Naples's control of Rome threatened by Napoleon's invasion of Italy.\n[…]\nThe upper parts of the Castel Sant'Angelo, early the following morning\n[…]\nPeter's Basilica, and was equally diligent when writing the music that opens act 3, in which Rome awakens to the sounds of church bells. He journeyed to Rome and went to the Castel Sant'Angelo to measure the sound of matins bells there, as they would be heard from its ramparts. Puccini had bells for the Roman dawn cast to order by four different foundries.\n[…]\nIn the second act of Tosca, according to Newman, Puccini rises to his greatest height as a master of the musical macabre. The act begins quietly, with Scarpia musing on the forthcoming downfall of Angelotti and Cavaradossi, while in the background a gavotte is played in a distant quarter of the Farnese Palace. For this music Puccini adapted a fifteen-year-old student exercise by his late brother, Michele, stating that in this way his brother could live again through him.\n[…]\nKerman mocked the final music, \"Tosca leaps, and the orchestra screams the first thing that comes into its head.\" Budden, however, argues that it is entirely logical to end this dark opera on its blackest theme. According to historian and former opera singer Susan Vandiver Nicassio: \"The conflict between the verbal and the musical clues gives the end of the opera a twist of controversy that, barring some unexpected discovery among Puccini's papers, can never truly be resolved.\"\n[…]\nSusan Vandiver Nicassio: \"Ten Things You Didn't Know about Tosca\", University of Chicago Press"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tosca",
        "situacao": "ok",
        "texto": "Tosca é uma ópera em três atos de Giacomo Puccini, com libreto de Luigi Illica e Giuseppe Giacosa, baseado na peça de 1887 do mesmo nome de Victorien Sardou. Estreou no Teatro Costanzi de Roma, em 14 de janeiro de 1900.\n[…]\nA história passa-se em Roma, em 1800.\n[…]\nNa Basílica de Sant'Andrea della Valle, em Roma:\n[…]\nO sacristão entra na igreja com um bando de padres, coroinhas e membros do coro, fazendo algazarra e em grande alegria: parece que Napoleão foi derrotado. Vai haver uma grande festa esta noite, com fogos de artifício e uma cantata no Palazzo Farnese com Floria Tosca. Chega Scarpia, acompanhado de Spoletta e vários policiais. Interroga o sacristão: \"Um prisioneiro de estado acaba de fugir do Castelo de Sant'Angelo.\n[…]\nNo Castelo de Sant'Angelo:\n[…]\nO dia amanhece em Roma. Do terraço do Castelo de Sant'Angelo vislumbra-se à luz cinzenta e vermelho-escura da manhã o Vaticano e a Basílica de São Pedro. A hora da execução se aproxima. Um carcereiro chega à cela de Cavaradossi e pergunta se ele quer ver um padre. O revolucionário esquerdista voltairiano responde que não. Ele tem, contudo, um último desejo: quer deixar uma última mensagem para uma pessoa amada. Em troca, oferece ao carcereiro seu anel, única coisa que lhe resta.\n[…]\nNo Palazzo Farnese, Tosca não compreende que estava sendo enganada por Scarpia. Ouvem-se gritos dos comparsas de Scarpia perseguindo Tosca. O assassinato de Scarpia foi descoberto e correm para capturá-la. Ela corre fugindo deles e se vê encurralada no parapeito do terraço do Castelo Sant'Angelo, ao que ela exclama: \"Perante Deus, Scarpia!\" e salta para a morte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Giacomo Puccini",
      "descricao": "Compositor italiano de óperas como La bohème, Tosca e Madama Butterfly."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Giacomo Puccini, autor de Tosca e Turandot, nasceu em que cidade da Toscana, cercada por muralhas renascentistas?",
    "resposta": "Lucca",
    "distratores": [
      "Florença",
      "Siena",
      "Pisa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Giacomo_Puccini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giacomo_Puccini",
        "situacao": "ok",
        "texto": "Giacomo Antonio Domenico Michele Secondo Maria Puccini (22 December 1858 – 29 November 1924) was an Italian composer known primarily for his operas. Widely regarded as the greatest and most successful proponent of Italian opera after Verdi, he was descended from a long line of composers, stemming from the late Baroque era.\n[…]\nBorn in Lucca in the Grand Duchy of Tuscany, in 1858; he was the sixth of nine children of Michele Puccini (1813–1864) and Albina Magi (1830–1884). The Puccini family was established in Lucca as a local musical dynasty by Puccini's great-great-grandfather – also named Giacomo (1712–1781). This first Giacomo Puccini, though often referred to as Jacopo, was maestro di cappella of the Cattedrale di San Martino in Lucca.\n[…]\nLater that year, Puccini composed his Mass, marking the culmination of his family's long association with liturgical music in his native Lucca.\n[…]\nIn the autumn of 1884, in Lucca, Puccini began a relationship with a married woman named Elvira Gemignani (née Bonturi; 1860–1930), a former piano student of his. Elvira's husband, Narciso Gemignani, was an \"unrepentant womanizer\", and Elvira's marriage was not a happy one. Elvira became pregnant by Puccini, and their son, Antonio (1886–1946), was born in Monza. Elvira left Lucca when the pregnancy began to show and gave birth elsewhere to avoid gossip.\n[…]\nFounded in 1996 in Lucca, the Centro di studi Giacomo Puccini embraces a wide range of approaches to the study of Puccini's work. In the US, the American Center for Puccini Studies specializes in the presentation of unusual performing editions of the composer's works and introduces neglected or unknown Puccini pieces. It was founded in 2004 by the singer and director Harry Dunstan.\n[…]\nFestival Puccini e la sua Lucca\n[…]\nWorks by or about Giacomo Puccini at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Giacomo_Puccini",
        "situacao": "ok",
        "texto": "Giacomo Puccini (Lucca, 22 de dezembro de 1858 – Bruxelas, 29 de novembro de 1924) foi um compositor de óperas italiano. Suas óperas estão entre as mais interpretadas atualmente, entre essas estão La bohème, Tosca, Madama Butterfly e Turandot. Algumas das árias das suas óperas, como \"O Mio Babbino Caro\" de Gianni Schicchi, \"Che gelida manina\" de La Bohème e \"Nessun dorma\" de Turandot tornaram-se p\n[…]\nGiacomo Antonio Domenico Michele Secondo Maria Puccini nasceu na cidade de Lucca na Toscana, em uma família de cinco gerações de história de música, incluindo o seu familiar Domenico Puccini. Seu pai, Michele Puccini, morreu quando Giacomo tinha apenas cinco anos de idade e ele foi enviado para estudar com seu tio materno Fortunato Magi, que o considerou como um estudante pobre e indisciplinado.\n[…]\nMagi sempre prejudicava seu sobrinho no seu contrato como maestro do coral de Lucca, pois Puccini iria substituir seu tio quando tivesse idade. Puccini nunca assumiu o lugar de seu tio como organista da igreja e maestro do coral de Lucca. Quando ele tinha dezessete anos ele assistiu uma apresentação da ópera Aida de Giuseppe Verdi e viu-se inspirado em compor óperas. Ele e seu irmão, Michele, caminharam 30 km para assistir a apresentação em Pisa.\n[…]\nA partir de 1891, Puccini passou a maior parte do seu tempo em Torre del Lago, uma pequena comunidade a quinze milhas de Lucca, situada entre o mar Lígure e o lago Massaciuccoli, ao sul de Viareggio. Enquanto alugava uma casa lá, ele passava seu tempo caçando, mas regularmente visitava Lucca.\n[…]\nPlaudite populi (Lucca, 1877)\n[…]\nCredo (Lucca, 1878)\n[…]\nMissa a Quatro Vozes com Orquestra (Lucca, 1880)\n[…]\nObras de Giacomo Puccini no International Music Score Library Project\n[…]\nPartituras gratuitas de Giacomo Puccini na CPDL, a Biblioteca Coral de Domínio Público\n[…]\n«Festival Puccini e la sua Lucca»\n[…]\nApresentação do Giacomo Puccini no Eurochannel",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Plácido Domingo",
      "descricao": "Cantor de ópera, regente e administrador espanhol nascido em 1941."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Nascido em Madri, Plácido Domingo se mudou criança com os pais, cantores de zarzuela, e começou a carreira em que país?",
    "resposta": "México",
    "distratores": [
      "Argentina",
      "Cuba",
      "Estados Unidos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pl%C3%A1cido_Domingo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pl%C3%A1cido_Domingo",
        "situacao": "ok",
        "texto": "José Plácido Domingo Embil (born 21 January 1941) is a Spanish opera singer, conductor, and arts administrator. He has recorded over a hundred complete operas and is well known for his versatility, regularly performing in Italian, French, German, Spanish, English, and Russian in the most prestigious opera houses in the world.\n[…]\nPlácido Domingo was born on 21 January 1941 in the Retiro district of Madrid, Spain, to Pepita Embil and Plácido Domingo Ferrer. His mother recalled that she and her husband knew he would be a musician from the age of five, due to his ability to hum complex music from a zarzuela after seeing a performance of it. In 1949, just days before his eighth birthday, he moved to Mexico with his family.\n[…]\nIn 1946 Moreno Torroba and Domingo's parents formed a zarzuela company and toured in Latin America. His parents later stayed permanently in Mexico and established their own zarzuela troupe, the Domingo-Embil Company. In addition to their son, they also had a daughter, Maria José \"Mari Pepa\" Domingo de Fernandez (1942–2015).\n[…]\nOn 29 August 1957 at age 16, Domingo married a fellow piano student, Ana María Guerra Cué (1938–2006). Their son, José Plácido Domingo Guerra (called \"Pepe\" as a boy and later \"Joe\"), now a photographer, was born on 16 June 1958. However, the marriage did not last long, with the couple separating shortly thereafter. On 1 August 1962, Domingo married Marta Ornelas (born 1935), a lyric soprano from Veracruz, Mexico, whom he met during his conservatory days.\n[…]\nSince the earthquake, Domingo has continued to do charitable work in Mexico and other countries. After Hurricane Pauline ravaged the Pacific coast of Southern Mexico in 1997, he gave two charity concerts in Acapulco to raise money to build 150 new houses for those made homeless by the storm.\n[…]\nBust of Plácido Domingo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pl%C3%A1cido_Domingo",
        "situacao": "ok",
        "texto": "José Plácido Domingo Embil (Madrid, 21 de janeiro de 1941) é um tenor lírico spinto, músico e maestro espanhol, conhecido por sua poderosa voz de grande flexibilidade, dono de uma técnica vocal impecável, que lhe permitiu cantar diversos papéis de tenor lirico até o dramático. Em março de 2008 ele cantou seu 128º papel operístico, fazendo-se assim o tenor que mais cantou papéis na história, em 201\n[…]\nPlácido Domingo nasceu perto de Barrio de Salamanca, em Madri, Espanha e mudou-se para o México com seus pais: Plácido Domingo e Pepita Embil, para trabalharem em uma companhia de Zarzuela. Ele estudou piano inicialmente com aulas particulares e passou a estudar no Conservatório de Música Nacional na Cidade do México.\n[…]\nEm 1959, Domingo participou de audições para a Ópera Nacional do México, como barítono, mas foi pedido a ele, para cantar algumas áreas em tenor. Finalmente, ele foi aceito na Ópera Nacional como tenor e como tutor para outros cantores. Ele estudou piano e condução, mas fez sua estreia em 12 de maio de 1959 em um papel pequeno, no Teatro Degollado em Guadalajara como Pascual em Marina.\n[…]\nNo dia 29 de agosto de 1957, aos dezesseis anos de idade, Plácido casou-se com a estudante de piano, Ana María Guerra Cué (1938-2006) e seu primeiro filho, José Plácido Domingo Guerra (Pepe) nasceu dia 16 de junho de 1958. Entretanto, o casamento não durou muito, o casal separou-se rapidamente. Em 1 de agosto de 1962, Domingo caou-se com Marta Ornelas, nascida em 1935, uma soprano lírica de Veracruz, México.\n[…]\nEles tiveram dois filhos: Plácido Francisco (21 de outubro de 1965) e Alvaro Maurizio (11 de outubro de 1968). Eles passam suas férias em Acapulco, México.\n[…]\nUniversidade Anáhuac no México (2001).\n[…]\n1984 - Melhor programa de música clássica por Great Performances: Placido Domingo Celebrates Seville.\n[…]\nPlacido Domingo (oficial)\n[…]\nPlacido Domingo, Tenor (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Os Três Tenores",
      "descricao": "Trio formado pelos tenores Luciano Pavarotti, Plácido Domingo e José Carreras, que se apresentou em grandes concertos a partir de 1990."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O primeiro concerto dos Três Tenores, em Roma, em 1990, aconteceu ao ar livre em que ruína da Antiguidade?",
    "resposta": "Termas de Caracala",
    "distratores": [
      "Coliseu",
      "Circo Máximo",
      "Fórum Romano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Three_Tenors"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Three_Tenors",
        "situacao": "ok",
        "texto": "The Three Tenors were an operatic singing trio, termed a supergroup (a title normally reserved for popular music genre groups), active between 1990 and 2003 and consisting of Italian Luciano Pavarotti and Spaniards Plácido Domingo and José Carreras. The trio began their collaboration with a performance at the ancient Baths of Caracalla in Rome, Italy, on 7 July 1990, the eve of the 1990 FIFA World\n[…]\nThe Three Tenors first performed in a concert for the 1990 FIFA World Cup. Zubin Mehta conducted the orchestra of Maggio Musicale Fiorentino and the orchestra of Teatro dell'Opera di Roma. According to the FIFA, the performance captivated audiences. A filmed version of the concert was produced by Herbert Chappell and Gian Carlo Bertelli for Decca and became the highest-selling classical disc in history.\n[…]\nFollowing the big success of the 1990 and 1994 concerts, The Three Tenors opened a world tour of concerts during 1996–1997. In 1996 they performed at Kasumigaoka Stadium in Tokyo, at Wembley Stadium in London, at Ernst Happel Stadion in Vienna, at Giants Stadium outside of New York City, at Ullevi Stadium in Gothenburg, Sweden, at Olympic Stadium in Munich, at Rheinstadion in Düsseldorf and at BC Place in Vancouver on New Year's Eve.\n[…]\n(A DVD of The Three Tenors in Bath was issued solely as a corporate gift.) Zubin Mehta conducted the performances in 1990 and 1994. The Paris concert was conducted by James Levine.\n[…]\nThe Three Tenors also encountered trouble with the German government. In 1999, two of the three singers paid an undisclosed fine to the German government as part of an out-of-court settlement for tax evasion. In addition, the German government accused the tenors of owing large back-taxes. Their concert organizer and promoter, Matthias Hoffmann, who was in charge of their taxes at the time, was sentenced to jail time for his role in the alleged tax evasion."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Tr%C3%AAs_Tenores",
        "situacao": "ok",
        "texto": "Os Três Tenores foi um trio de tenores eruditos formado por Plácido Domingo, José Carreras e Luciano Pavarotti, que cantaram juntos, em concertos, durante a década de 1990 e no início da década de 2000. A primeira performance do trio ocorreu nas Termas de Caracala, em Roma, Itália, em 7 de julho de 1990 - no encerramento da Copa do Mundo de Futebol de 1990. Zubin Mehta conduziu a Orquestra Maggio \n[…]\nOs três cantaram juntos em concertos produzidos pelo húngaro Tibor Rudas, no Estádio dos Dodgers, em Los Angeles no encerramento da Copa do Mundo de 1994, com Zubin Mehta conduzindo a Filarmônica de Los Angeles; sob a Torre Eiffel em Paris, durante a Copa do Mundo de 1998, com James Levine conduzindo e no encerramento da Copa do Mundo de 2002, em Yokohama. Eles também se apresentaram juntos em outros países do mundo, atraindo centenas de milhares de pessoas.\n[…]\nOs concertos foram um grande sucesso comercial e foram acompanhados por uma série de discos de sucessos, incluindo o The Three Tenors in Concert, gravado em 1990, entrando para o livro dos records, por ser o disco erudito mais vendido em toda a história. No concerto de 1994 e 1998, os três tenores lucraram 32 milhões de dólares.\n[…]\nO sucesso dos Três Tenores fez com que inúmeros cantores formassem um conjunto parecido, como os Tenores Israelenses, Tenores Australianos, Três Tenores Canadenses, os Dez Tenores, os Três Tenores e uma Soprano, as Três Sopranos, As Sopranos, os Três Mo' Sopranos, Os Três Contratenores, os Três Tenores Chineses, entre outros.\n[…]\nEm 1995, os sambistas brasileiros Bezerra da Silva, Moreira da Silva e Dicró gravaram o cd Bezerra, Moreira e Dicró - Os 3 Malandros in Concert, sendo uma clara paródia dos 3 tenores.\n[…]\n«Os Três Tenores cantam O Sole Mio, sob a regência de Zubin Mehta, em Roma, 1990.»\n[…]\n«Os Três Tenores interpretam um trecho da Aquarela do Brasil em Los Angeles, 1994.»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Auto da Compadecida",
      "descricao": "Peça teatral de Ariano Suassuna, de 1955, protagonizada por João Grilo e Chicó."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Auto da Compadecida, de Ariano Suassuna, se passa em que pequena cidade do sertão da Paraíba?",
    "resposta": "Taperoá",
    "distratores": [
      "Campina Grande",
      "Cabaceiras",
      "Sousa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Auto_da_Compadecida"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Auto_da_Compadecida",
        "situacao": "ok",
        "texto": "Auto da Compadecida é uma peça teatral em forma de auto, em três atos, escrita pelo autor brasileiro Ariano Suassuna em 1955. Sua primeira encenação aconteceu em 1956, no Recife, em Pernambuco. A peça também foi encenada em 1974, com direção de João Cândido. Em 2 de outubro de 1957 a peça foi publicada em forma de livro pela editora Agir no Rio de Janeiro.\n[…]\nO Auto da Compadecida projetou Suassuna em todo o país e foi considerada por Sábato Magaldi, em 1962, \"o texto mais popular do moderno teatro brasileiro\".\n[…]\nA peça foi adaptada para o cinema pela primeira vez em 1969, com o filme A Compadecida. A segunda adaptação veio em 1987, com o filme Os Trapalhões no Auto da Compadecida.\n[…]\nEm 1999, foi apresentada como uma minissérie pela Rede Globo de Televisão, que inclusive foi a responsável pela inclusão do artigo \"O\" antes do nome original. A adaptação de maior sucesso, foi editada em 2000 para exibição nos cinemas, contando com alguns personagens, como o Cabo Setenta, Rosinha e Vicentão, que não fazem parte da peça original. Esses personagens adicionais fazem parte da obra Torturas de um Coração, além de elementos de O Santo e a Porca, ambas de autoria de Ariano Suassuna.\n[…]\nAuto da Compadecida foi encenada pela primeira vez no dia 11 de setembro de 1956, no Teatro de Santa Isabel, pelo Teatro Adolescente do Recife, sob direção de Clênio Wanderley, figurino de Victor Moreira e cenários de Aloísio Magalhães, tendo como elenco os seguintes atores:\n[…]\nA Compadecida: Maria do Socorro Raposa Meira\n[…]\nA Compadecida: Córdula Reis\n[…]\nA Compadecida (filme de 1969)\n[…]\nOs Trapalhões no Auto da Compadecida (filme de 1987)\n[…]\nO Auto da Compadecida (minissérie de 1999)\n[…]\nO Auto da Compadecida (filme de 2000)\n[…]\nO Auto da Compadecida (teatro de 2017)\n[…]\nO Auto da Compadecida 2 (filme de 2024)\n[…]\nO Auto da Compadecida, montagem do Grupo Maria Cutia (2025)"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Carmen (ópera)",
      "descricao": "Ópera de Georges Bizet, estreada em Paris em 1875, sobre uma cigana sedutora."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Antes de virar ópera de Bizet, a cigana Carmen nasceu numa novela de 1845. Que escritor francês a escreveu?",
    "resposta": "Prosper Mérimée",
    "distratores": [
      "Victor Hugo",
      "Alexandre Dumas",
      "Gustave Flaubert"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Carmen",
      "https://en.wikipedia.org/wiki/Carmen_(novella)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carmen",
        "situacao": "ok",
        "texto": "Carmen (French: [kaʁmɛn] ) is an opera in four acts by the French composer Georges Bizet. The libretto was written by Henri Meilhac and Ludovic Halévy, based on the novella of the same title by Prosper Mérimée. The opera was first performed by the Opéra-Comique in Paris on 3 March 1875, where its breaking of conventions shocked and scandalised its first audiences.\n[…]\nBizet was delighted with the Opéra-Comique commission, and expressed to his friend Edmund Galabert his satisfaction in \"the absolute certainty of having found my path\". The subject of the projected work was a matter of discussion between composer, librettists and the Opéra-Comique management; Adolphe de Leuven, on behalf of the theatre, made several suggestions that were politely rejected. It was Bizet who first proposed an adaptation of Prosper Mérimée's novella Carmen.\n[…]\nIn the novella, Carmen and José are presented much less sympathetically than they are in the opera; Bizet's biographer Mina Curtiss comments that Mérimée's Carmen, on stage, would have seemed \"an unmitigated and unconvincing monster, had her character not been simplified and deepened\".\n[…]\nBizet also changed the libretto, reordering sequences and imposing his own verses where he felt the librettists had strayed too far from the character of Mérimée's original. Among other changes, he provided new words for Carmen's \"Habanera\", and rewrote the text of Carmen's solo in the act 3 card scene. He also provided a new opening line for the \"Seguidilla\" in act 1.\n[…]\nWhile each is presented quite differently from Mérimée's portrayals of a murderous brigand and a treacherous, amoral schemer, even in their relatively sanitised forms neither corresponds to the norms of opéra comique. They are more akin to the verismo style that would find fuller expression in the works of Puccini."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carmen_(novella)",
        "situacao": "ok",
        "texto": "Carmen is a novella by Prosper Mérimée, written and first published in 1845. It has been adapted into a number of dramatic works, including the famous opera of the same name by Georges Bizet.\n[…]\nAccording to a letter Mérimée wrote to the Countess of Montijo, Carmen was inspired by a story she told him on his visit to Spain in 1830. He said, \"It was about that ruffian from Málaga who had killed his mistress, who consecrated herself exclusively to the public. ... As I have been studying the Gypsies for some time, I have made my heroine a Gypsy.\"\n[…]\nAn important source for the material on the Romani people (Gypsies, Gitanos) was George Borrow's book The Zincali (1841). Another source may have been the narrative poem The Gypsies (1824) by Alexander Pushkin, which Mérimée would later translate into French prose.\n[…]\nThe novella comprises four parts. Only the first three appeared in the original publication in the October 1, 1845, issue of the Revue des deux Mondes (Review of the Two Worlds); the fourth first appeared in the book publication in 1846. Mérimée tells the story as if it had really happened to him on his trip to Spain in 1830.\n[…]\nThis part consists of scholarly remarks on the Romani: their appearance, their customs, their conjectured history, and their language. According to Henri Martineau, editor of a collection of Mérimée's fiction, the etymologies at the end are \"extremely suspect\".\n[…]\nThe opera's female singing roles other than Carmen—Micaëla, Frasquita, and Mercédès—have no counterparts in the novella.\n[…]\nCarmen public domain audiobook at LibriVox (English and French versions)\n[…]\nFrench Wikisource has original text related to this article: Carmen\n[…]\n(in French) Carmen, audio version"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carmen_%28%C3%B3pera%29",
        "situacao": "ok",
        "texto": "Carmen é uma ópera em quatro atos do compositor francês Georges Bizet, com libreto de Henri Meilhac e Ludovic Halévy, baseado na romance homônimo de Prosper Mérimée. Estreou em 1875, no Opéra-Comique de Paris.\n[…]\nFoi apresentada no Brasil pela primeira vez em 1881, no Teatro D. Pedro II do Rio de Janeiro. A Companhia Francesa de Maurice Grau, responsável pela montagem, tinha como estrela Paola Marié, irmã de Célestine Galli-Marié, que representara Carmen em Paris. Em 6 de setembro de 1913 houve a primeira apresentação da ópera no Theatro Municipal, cantada em idioma italiano. Tornou-se uma das óperas mais populares do Municipal carioca, somando quase 100 récitas em 30 temporadas até 2014.\n[…]\nEle aceita e sai com a aldeã, não sem prevenir Carmen, em tom ameaçador, de que voltará para vir buscar. A cigana não dá importância aos seus avisos, pensando no seu novo objeto de desejo.\n[…]\nEla responde-lhe que o seu amor por ele acabou. Do interior da praça, soam as vivas a Escamillo. O desertor tenta deter com violência a cigana, mas ela atira-lhe despeitadamente o anel que ele lhe tinha oferecido. Em fúria, Don José enfia uma faca na barriga de Carmen. A multidão que vai saindo da praça assiste à terrível cena. Don José, cheio de tristeza, cai de joelhos junto ao corpo de sua amada Carmen.\n[…]\nCarmen é, provavelmente, a ópera não italiana com maior número de árias famosas, dentre as quais, podemos destacar[carece de fontes]?:\n[…]\nFinale: \"Holà! Carmen! Holà!...\"\n[…]\nDueto de Escamillo e Carmen: \"Se tu m'aimes, Carmen...\"\n[…]\nDueto Final entre Don José e Carmen: \"C'est toi! C'est moi!...\"\n[…]\nProsper Mérimée\n[…]\nGeorges Bizet\n[…]\nNovela\n[…]\nÓpera\n[…]\n«Ópera completa em MP3 Creative Commons»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Maria Callas",
      "descricao": "Soprano greco-americana (1923–1977), uma das cantoras de ópera mais célebres do século vinte."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No fim dos anos 1960, Maria Callas foi trocada pelo amante, um magnata grego que se casou com Jacqueline Kennedy. Quem era ele?",
    "resposta": "Aristóteles Onassis",
    "distratores": [
      "Stavros Niarchos",
      "Giovanni Battista Meneghini",
      "Gianni Agnelli"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maria_Callas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Callas",
        "situacao": "ok",
        "texto": "Maria Callas (born Maria Anna Cecilia Sophia Kalogeropoulos; December 2, 1923 – September 16, 1977) was an American and Greek soprano, and one of the most renowned and influential opera singers of the 20th century. Critics praised her bel canto technique, wide-ranging voice, and dramatic interpretations.\n[…]\nThe press exulted in publicizing Callas's temperamental behavior, the alleged Callas–Tebaldi rivalry, and her love affair with Greek shipping tycoon Aristotle Onassis. Onassis's wife, Athina \"Tina\" Onassis Niarchos, divorced him when she discovered that he was having an affair with Callas.\n[…]\nIn 1957, while still married to husband Giovanni Battista Meneghini, Callas was introduced to Greek shipping magnate Aristotle Onassis at a party given in her honor by Elsa Maxwell after a performance in Donizetti's Anna Bolena. The affair that followed received much publicity in the popular press, and in November 1959, Callas left her husband.\n[…]\nAccording to one of her biographers, Nicholas Gage, Callas and Onassis had a child, a boy, who died hours after he was born on March 30, 1960. In his book about his wife, Meneghini states categorically that Maria Callas was unable to bear children. Various sources also dismiss Gage's claim, as they note that the birth certificates Gage used to prove this \"secret child\" were issued in 1998, twenty-one years after Callas's death.\n[…]\nStill other sources claim that Callas had at least one abortion while involved with Onassis.\n[…]\nHer relationship with Onassis ended two years later in 1968, when he left Callas for Jacqueline Kennedy. However, the Onassis family's private secretary Kiki writes in her memoir that even while Aristotle was with Jackie, he frequently met Maria in Paris, where they resumed what had now become a clandestine affair.\n[…]\nMaria Callas at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Callas",
        "situacao": "ok",
        "texto": "Maria Anna Cecilia Sofia Kalogerópulos (em grego: Μαρία Άννα Καικιλία Σοφία; romaniz.: Maria Anna Cecilia Sofia Kalogerópulos; Nova Iorque, 2 de dezembro de 1923 — Paris, 16 de setembro de 1977), mais conhecida pelo seu nome artístico Maria Callas (em grego: Μαρία Κάλλας; romaniz.: Maria Callas) foi uma soprano greco-americana.\n[…]\nEm 1959, devido a diversas crises conjugais e por estar apaixonada por outro homem, rompeu um casamento infeliz que já durava dez anos, com seu empresário, G. B. Meneghini, homem muito mais velho do que ela. Após o divórcio, manteve uma tórrida relação com o milionário grego Aristoteles Onassis. Com poucos meses de namoro foram viver juntos, mas com ele Maria também não foi feliz, e isto rendeu variado material ofensivo para tabloides sensacionalistas.\n[…]\nMaria vivia constantemente em discussões com sua enteada, Christina, que possuía muito ciúme do pai. A cantora teve, em 1960, um filho com Aristoteles Onassis, um menino, a quem batizou de Omero Lengrino. A criança veio ao mundo em um parto prematuro de oito meses, em uma cesariana de emergência na Itália, mas o bebê não resistiu e faleceu no dia seguinte. Seu filho foi enterrado em Milão, onde todo mês ela ia visitar o túmulo. A artista tentou engravidar novamente, mas não conseguiu.\n[…]\nEm 1968, após nove anos de humilhações e traições, o casamento com Aristoteles Onassis se desfez, quando ele a abandonou para casar-se com Jacqueline Bouvier Kennedy, viúva do presidente Kennedy. A separação abalou profundamente Maria, já que ainda gostava dele, e decidiu não mais casar-se; contudo, teve outros namorados, mas seus relacionamentos não deram certo.\n[…]\nMaria Meneghini Callas, de Michael Scott. ISBN 1555531466.\n[…]\nMaria Callas: A Mulher por trás do Mito, de Ariana Huffington.\n[…]\nMaria Callas: A Voice and a Legend That Still Fascinate",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Teatro Amazonas",
      "descricao": "Casa de ópera de Manaus inaugurada em 1896."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que filme de Werner Herzog, de 1982, sobre um aventureiro que sonha levar a ópera à selva, tem cenas no Teatro Amazonas?",
    "resposta": "Fitzcarraldo",
    "distratores": [
      "Aguirre",
      "Cobra Verde",
      "Nosferatu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fitzcarraldo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fitzcarraldo",
        "situacao": "ok",
        "texto": "Fitzcarraldo () is a 1982 epic adventure-drama film written, produced, and directed by Werner Herzog. The film stars Klaus Kinski as Brian Sweeney Fitzgerald, an Irish would-be rubber baron known in Peru as \"Fitzcarraldo\", who is determined to transport a steamship over a mountain in the Amazon rainforest and thereby access a rich rubber territory, with the ultimate goal of using the wealth to bui\n[…]\nHerzog has been accused of exploiting Indigenous people during the making of the film, and comparisons have been made between Herzog and Fitzcarraldo himself. In 1982, Michael F. Brown, now a professor of anthropology at Williams College, claimed in the magazine The Progressive that, while Herzog originally got along with the Aguaruna people, some of whom were hired as extras and laborers, relations deteriorated when Herzog began the construction of a village on Aguaruna land.\n[…]\nFitzcarraldo won the 1982 German Film Prize in Silver for Best Feature Film. It was nominated for the BAFTA Award for Best Foreign Film, the Palme d'Or award of the Cannes Film Festival, and the Golden Globe Award for Best Foreign Language Film. Herzog won the award for Best Director at the 1982 Cannes Film Festival. The film was selected as the West German entry for Best Foreign Language Film at the 55th Academy Awards, but did not make the final shortlist of five nominees.\n[…]\nLes Blank's documentary Burden of Dreams (1982), filmed during the production of Fitzcarraldo, documents its many hardships. Blank's work contains some of the only surviving footage of Robards' and Jagger's performances in the early filming of Fitzcarraldo. Herzog later used portions of this work in his documentaries: Portrait Werner Herzog (1986) and My Best Fiend (1999). Burden of Dreams has many scenes documenting the arduous transport of the ship over the mountain.\n[…]\nFitzcarraldo at Rotten Tomatoes\n[…]\nFitzcarraldo at filmportal.de/en"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fitzcarraldo",
        "situacao": "ok",
        "texto": "Fitzcarraldo é um filme teuto-peruano de 1982 dirigido por Werner Herzog.\n[…]\nBrian Sweeney Fitzgerald (\"Fitzcarraldo\", na pronúncia dos nativos), fã do tenor italiano Enrico Caruso, sonha em construir uma casa de ópera na remota cidade de Iquitos, no alto Amazonas. Fitzgerald já havia investido numa Estrada de Ferro, a Transandina, e falhara. Tentava conseguir os recursos com um novo empreendimento, uma fábrica de gelo. Graças a esses negócios improváveis, ele foi chamado de \"Conquistador do Inútil\".\n[…]\nKlaus Kinski\t … \tFitzcarraldo\n[…]\nPeter Berling\t … \tgerente da ópera\n[…]\nMilton Nascimento\t … \tnegro no teatro\n[…]\nFestival de Cannes (1982)\n[…]\nVencedor: melhor diretor (1982)\n[…]\nFestival de Cannes (1982)\n[…]\nPalma de Ouro (melhor filme)\n[…]\nIndicado na categoria melhor filme em língua estrangeira\n[…]\nIndicado na categoria melhor filme em língua estrangeira\n[…]\nFitzcarraldo no AdoroCinema\n[…]\nFitzcarraldo no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Theatro Municipal do Rio de Janeiro",
      "descricao": "Teatro de ópera, balé e concertos na Cinelândia, no centro do Rio de Janeiro, inaugurado em 1909."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Inaugurado em 1909, o Theatro Municipal do Rio de Janeiro teve a fachada inspirada em que teatro europeu?",
    "resposta": "Ópera Garnier",
    "distratores": [
      "Teatro alla Scala",
      "Ópera de Viena",
      "Teatro Bolshoi"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Theatro_Municipal_do_Rio_de_Janeiro",
      "https://en.wikipedia.org/wiki/Theatro_Municipal_(Rio_de_Janeiro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Theatro_Municipal_do_Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "O Theatro Municipal do Rio de Janeiro é um dos mais importantes teatros brasileiros. Localiza-se no bairro da Cinelândia, centro do Rio de Janeiro.\n[…]\nNesse contexto, realizou-se um concurso para a construção de um novo teatro, do qual saiu vitorioso o projeto de Francisco de Oliveira Passos (filho do então prefeito Pereira Passos), que contou com a colaboração do francês Albert Guilbert, com um desenho inspirado na Ópera de Paris, de Charles Garnier.\n[…]\nFinalmente, quatro anos e meio mais tarde — um tempo recorde para a obra, que teve o revezamento de 280 operários em dois turnos de trabalho —, no dia 14 de julho de 1909, foi inaugurado pelo então presidente da República, Nilo Peçanha, o Theatro Municipal do Rio de Janeiro. Francisco de Sousa Aguiar era o então prefeito da cidade.\n[…]\nEm seus primórdios, apresentavam-se no teatro apenas companhias e orquestras estrangeiras — especialmente as italianas e francesas —, até que, em 1931, foi criada a Orquestra Sinfônica do Theatro Municipal do Rio de Janeiro.\n[…]\nEm comemoração aos cem anos do Theatro Municipal do Rio de Janeiro, foram iniciadas extensas obras no teatro que, foi totalmente restaurado ao estilo original.\n[…]\nPara resgatar a beleza original ao teatro, construído no início do século anterior, foram investidos 70 milhões de reais nos trabalhos de restauro, que duraram mais de novecentos dias. Já para resgatar o dourado nos ornamentos do teatro, foram utilizadas milhares de folhas de ouro de 23 quilates compradas na Alemanha e que adornam os detalhes da fachada e da cúpula, como detalhou a Secretaria de Cultura do Rio de Janeiro, da qual depende a Fundação Theatro Municipal."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Theatro_Municipal_(Rio_de_Janeiro)",
        "situacao": "ok",
        "texto": "The Theatro Municipal (\"Municipal Theater\") is an opera house in the Centro district of  Rio de Janeiro, Brazil. Built in the early twentieth century, it is considered to be one of the most beautiful and important theaters in the country.\n[…]\nThe building is designed in an eclectic style, inspired by the Paris Opéra of Charles Garnier. The outside walls are inscribed with the names of classic European and Brazilian artists. It is located near the National Library and the National Fine Arts Museum, overlooking the spacious Cinelândia square.\n[…]\nFinally, four and a half years later — a record time for the work that took the relay from 280 workers in two shifts — on July 14, 1909, President Nilo Peçanha inaugurated the Theatro Municipal do Rio de Janeiro, which had the capacity for 1,739 viewers. Serzedelo Correa was then the mayor of the city. In 1934, upon the observation that the theater was small for the new size of the population of the city, auditory capacity was increased to 2,205 seats.\n[…]\nWith the inauguration of the annex, choir, orchestra and ballet crews gained new rehearsal rooms and greater space for artistic practices and rehearsal.\n[…]\nToday, the Theatro Municipal mostly shows productions of ballet and classical music. In its early heyday, it featured only foreign opera and symphonic orchestra shows, especially from Italian and French companies. In 1931, the Municipal Symphonic Orchestra of Rio de Janeiro was created and celebrities such as Arturo Toscanini, Sarah Bernhardt, Bidu Sayão, Eliane Coelho, Heitor Villa-Lobos, Igor Stravinsky, Paul Hindemith and Alexander Brailowsky highlighted the programs of the Theatro.\n[…]\nMedia related to Theatro Municipal (Rio de Janeiro) at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Hamlet",
      "descricao": "Tragédia de William Shakespeare sobre o príncipe da Dinamarca que vinga a morte do pai."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que animação da Disney, de 1994, leva para a savana africana a trama de Hamlet, com um tio que mata o rei para tomar o trono?",
    "resposta": "O Rei Leão",
    "distratores": [
      "Mogli",
      "Tarzan",
      "Pocahontas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Lion_King"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Lion_King",
        "situacao": "ok",
        "texto": "The Lion King is a 1994 American animated musical drama film directed by Roger Allers and Rob Minkoff and written by Irene Mecchi, Jonathan Roberts, and Linda Woolverton. Produced by Walt Disney Feature Animation, it features an ensemble voice cast consisting of Matthew Broderick, James Earl Jones, Jeremy Irons, Jonathan Taylor Thomas, Moira Kelly, Niketa Calame, Madge Sinclair, Nathan Lane, Ernie\n[…]\nFor The Lion King's first film trailer, Disney opted to feature a single scene, the entire opening sequence with the song \"Circle of Life\".\n[…]\nWhen first released in 1994, The Lion King numbered 28 versions overall in as many languages and dialects worldwide, including a special Zulu version made specifically for the film in South Africa, where a Disney USA team went to find the Zulu voice-actors. This was the first Zulu dubbing made by Disney, and also the only one made in any African language other than Arabic. The Zulu language version was released in South Africa on June 24, 1994.\n[…]\nElements of The Lion King bear some superficial resemblance to the 1960s Japanese anime television series Jungle Emperor (known as Kimba the White Lion in the United States). The 1994 release of The Lion King drew a protest in Japan, where Kimba and its creator, Osamu Tezuka, are cultural icons. 488 Japanese cartoonists and animators, led by the manga author Machiko Satonaka, signed a petition accusing Disney of plagiarism and demanding that they give due credit to Tezuka.\n[…]\nThe Lion King inspired two attractions retelling the story of the film at Walt Disney Parks and Resorts. The first, \"The Legend of the Lion King\", featured a recreation of the film through life-size puppets of its characters, and ran from 1994 to 2002 at Magic Kingdom in Walt Disney World.\n[…]\nA similar version under the name \"The Legend of the Lion King\" was featured in Disneyland Paris from 2004 to 2009.\n[…]\nThe Lion King at Disney A to Z"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Rei_Le%C3%A3o",
        "situacao": "ok",
        "texto": "The Lion King (bra/prt: O Rei Leão) é o 32.º longa-metragem animado produzido pela Walt Disney Feature Animation e pela Walt Disney Pictures e distribuído pela Buena Vista Pictures. Foi dirigido por Roger Allers e Rob Minkoff, com roteiro creditado a Linda Woolverton, Irene Mecchi e Jonathan Roberts, e música de Elton John com letras de Tim Rice.\n[…]\nO Rei Leão foi lançado em 15 de junho de 1994 e foi aclamado pela crítica e público, que elogiou o filme pela sua música, enredo e animação, ganhando dentre os vários prêmios, o Oscar de Melhor Trilha Sonora Original (Hans Zimmer) e Melhor Canção Original (\"Can You Feel the Love Tonight\", de Elton John e Tim Rice), e o Globo de Ouro de Melhor Filme Comédia ou Musical. O filme foi considerado a maior clássico da era do Renascimento da Disney e a maior animação de todos os tempos.\n[…]\nO Rei Leão foi o primeiro longa-metragem de animação da Disney criado a partir de uma história original, em oposição as obras anteriores que eram baseados em trabalhos já existente. Os cineastas disseram que a história de O Rei Leão foi inspirado pelas de José e Moisés da Bíblia, Hamlet de Shakespeare, e Bambi. Durante o verão de 1992, o roteirista Irene Mecchi entrou para equipe, e  Jonathan Roberts juntou-se poucos meses depois.\n[…]\nO Rei Leão também inspirou o álbum de 1995, Rhythm of Pride Lands, com oito canções de Zimmer, Mancina e Lebo M.\n[…]\nA Square Enix apresenta na série Kingdom Hearts Simba como uma invocação recorrente, bem como um jogável mundo de O Rei Leão, As Terras do Reino, em Kingdom Hearts II. A trama é vagamente relacionada com o filme original, com todos os personagens principais, exceto Zazu e Sarabi. O Rei Leão também fornece um dos mundos apresentados no jogo Disney Universe, e Simba foi destaque no jogo do Nintendo DS, Disney Friends (2008).\n[…]\nHamlet\n[…]\nSite Brasileiro do Rei Leão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Édipo Rei",
      "descricao": "Tragédia de Sófocles sobre o rei de Tebas que descobre ter matado o pai e se casado com a mãe."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que pai da psicanálise usou o herói de Sófocles para batizar o desejo infantil pela mãe e a rivalidade com o pai?",
    "resposta": "Sigmund Freud",
    "distratores": [
      "Carl Jung",
      "Jacques Lacan",
      "Alfred Adler"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Oedipus_complex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oedipus_complex",
        "situacao": "ok",
        "texto": "In classical psychoanalytic theory, the Oedipus complex is a son's sexual desire for his mother and concomitant hostility toward his father, first formed during the phallic stage of psychosexual development. A daughter's sexual desire for her father and hostility toward her mother is referred to as the feminine (or female) Oedipus complex.\n[…]\nModern productions of Sophocles' play were staged in Paris and Vienna in the 19th century and were phenomenally successful in the 1880s and 1890s. The Austrian neurologist Sigmund Freud (1856–1939) attended these productions. In his book The Interpretation of Dreams, first published in 1899, he proposes that an Oedipal desire is a universal psychological phenomenon innate (phylogenetic) to human beings, and the cause of much unconscious guilt.\n[…]\nIn 1920, Sigmund Freud wrote that \"with the progress of psychoanalytic studies the importance of the Oedipus complex has become, more and more, clearly evident; its recognition has become the shibboleth that distinguishes the adherents of psychoanalysis from its opponents\"; thereby it remained a theoretic cornerstone of psychoanalysis until about 1930, when psychoanalysts began investigating the pre-Oedipal son–mother relationship within the theory of psychosexual development.\n[…]\nA director of the Sigmund Freud Archives, Jeffrey Moussaieff Masson, adopted the view that Freud's work was a cover-up of sexual abuse of children after reading Freud's unpublished letters. In his book The Assault on Truth, Masson argues that Freud misattributed accounts of sexual abuse to fabrications and fantasies of children because, for personal reasons, he was unable to accept that the accounts were real.\n[…]\nThe Oedipus Complex - A Selection of Classic Articles on Sigmund Freud's Psychoanalytical Theory. N.p.: Read Books, 2011."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Complexo_de_%C3%89dipo",
        "situacao": "ok",
        "texto": "O complexo de Édipo, termo criado por Freud e inspirado na tragédia grega Édipo Rei, designa o conjunto de desejos amorosos e hostis que o menino enquanto ainda criança  experimenta com relação a sua mãe. O suposto fenômeno psíquico também ocorre nas meninas com relação ao pai, mas a este se dá o nome de Complexo de Electra.\n[…]\nFreud baseou-se na tragédia de Sófocles (496–406 a.C.), Édipo Rei, uma trilogia que trata, em partes, da vida eterna de Édipo.\n[…]\nProduções modernas da peça de Sófocles estavam sendo encenadas em Paris e Viena, no século XIX e tiveram um sucesso fenomenal na década de 1880 e 1890. O neurologista austríaco Sigmund Freud  em seu livro A Interpretação dos Sonhos publicado pela primeira vez em 1899, propôs que um desejo edipiano é um fenômeno universal psicológico inato (filogenético) dos seres humanos e a causa de grande culpa inconsciente.\n[…]\nFreud descreveu Édipo como segue:\n[…]\nÉ importante observar um grande equívoco de Freud em nomear o complexo de Édipo baseando-se no personagem clássico da obra de Sófocles. Freud em seu livro \"A Interpretação dos Sonhos\" deixa claro que aquele que sofre deste mal tem plena consciência de quem são seus pais. Mas o Édipo literário assassina o pai e tem filhos com sua própria mãe sem ter consciência de suas identidades. Podemos concluir então que o Édipo literário não sofria de complexo de Édipo.\n[…]\nNa teoria clássica da psicanálise, o complexo de Édipo ocorre durante o estágio fálico do desenvolvimento psicossexual (a idade de 3 até 6 anos), quando ocorre também a formação da libido e do ego; no entanto, pode se manifestar em idade mais precoce. É o primeiro estágio em que as crianças tornam-se conscientes das diferenças sexuais. Com suas observações, Freud concluiu que nessa fase, tanto homens como mulheres desenvolvem temores sobre questões sexuais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Samuel Beckett",
      "descricao": "Dramaturgo, romancista e poeta irlandês (1906–1989), autor de Esperando Godot e Nobel de Literatura de 1969."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No interior da França, Samuel Beckett levava de caminhonete à escola um menino gigante que viraria lutador famoso. Quem era ele?",
    "resposta": "André the Giant",
    "distratores": [
      "Hulk Hogan",
      "Big Show",
      "Giant Baba"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Andr%C3%A9_the_Giant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andr%C3%A9_the_Giant",
        "situacao": "ok",
        "texto": "André René Roussimoff (French: [ɑ̃dʁe ʁəne ʁusimɔf]; 19 May 1946 – 28 January 1993), known professionally as André the Giant, was a French professional wrestler and actor. Dubbed \"the Eighth Wonder of the World\", Roussimoff was known for his great size, which was a result of gigantism caused by excess human growth hormone.\n[…]\nAfter WrestleMania VI, Roussimoff spent the rest of his in-ring career in All Japan Pro Wrestling (AJPW) and Mexico's Universal Wrestling Association (UWA), where he performed under the name \"André el Gigante\". He toured with AJPW three times per year, from 1990 to 1992, usually teaming with Giant Baba in tag-team matches.\n[…]\nThe 2014 graphic novel André The Giant: The Life and The Legend (First Second Books), written and drawn by Box Brown, tells the story of his life and career. Research for the book included interviews with his fellow wrestlers and actors such as Christopher Guest, Mandy Patinkin and others.\n[…]\nIn 1999, Biography produced and aired a documentary called Andre The Giant: Larger Than Life.\n[…]\nOn 9 May 2016, it was announced that a movie based on the 2015 authorized graphic novel biography André the Giant: Closer to Heaven was in the plans made by Lion Forge Comics along with producers Scott Steindorff, Dylan Russell and consulted by Roussimoff's daughter, Robin Christensen-Roussimoff.\n[…]\nOn 10 April 2018, HBO aired a documentary film called André the Giant.\n[…]\nWorst Tag Team (1990, 1991) with Giant Baba\n[…]\nHébert, Bertrand; Laprade, Pat (2020). The Eighth Wonder of the World: The True Story of André the Giant. Toronto, Ontario: ECW Press. ISBN 978-1-77041-466-2.\n[…]\nKrugman, Michael (2009). André the Giant: A Legendary Life. Pocket Books. ISBN 978-1-4165-4112-7.\n[…]\nAndré the Giant at IMDb\n[…]\nAndré the Giant's profile at WWE , Cagematch , Wrestlingdata , Internet Wrestling Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andr%C3%A9_the_Giant",
        "situacao": "ok",
        "texto": "André René Roussimoff (francês:  [ɑ̃dʁe ʁəne ʁusimɔf]: Grenoble, 19 de maio de 1946 – Paris, 27 de janeiro de 1993), mais conhecido pelo seu ring name André the Giant, foi um lutador e ator profissional francês. Ficou conhecido por seu grande tamanho, que era resultado do gigantismo causado pelo excesso de hormônio do crescimento (acromegalia). Isso também o levou a ser chamado de \"A Oitava Maravi\n[…]\nSugeriram então que viajasse por todas as regiões e territórios ficando deste modo conhecido como André The Giant, para despertar a atenção do público americano.\n[…]\nA feud com Hulk Hogan continuou durante o verão de 1987, a rivalidade aqueceu ainda mais perto da 1° Survivor Series da história onde cada um foi nomeado capitão da sua equipe para o tradicional Survivor Series Elimination Match. A equipe de André the Giant era composta por One Man Gang, King Kong Bundy, \"The Natural\" Butch Reed e \"Ravishing\" Rick Rude, a de Hulk Hogan era composta por Bam Bam Bigelow, \"Mr. Wonderful\" Paul Orndorff, Don Muraco e Ken Patera.\n[…]\nA equipe de André The Giant levou a melhor, depois de Hogan ter sido desclassificado por contagem fora do ringue, ficando Bam Bam Bigelow em último no ringue sendo humilhado por The Giant. Por estas alturas \"The Million Dollar Man\" Ted DiBiase entra na disputa pelo  WWF World Championship tentando convencer Hogan a vender-lhe o título, sem nunca ter vencido em combate. Tendo rejeitado o seu dinheiro, \"The Million Dollar Man\" Ted DiBiase recorre  a Andre The Giant para enfrentar Hogan.\n[…]\nUma outra maior rivalidade viria a seguir com Jake \"The Snake\" Roberts, onde André indicava que tinha medo de cobras já que Roberts tinha as exposto no Saturday Night Main Event. Durante as próximas semanas Roberts custava-lhe combates em eventos da WWF aparecendo à sua frente com cobras, pois ele já sabia que iria meter medo e distrair The Giant.\n[…]\nAndré the Giant Memorial Trophy",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "O Pagador de Promessas",
      "descricao": "Peça de Dias Gomes, de 1960, sobre um homem que carrega uma cruz até uma igreja de Salvador."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O Pagador de Promessas, de Dias Gomes, virou filme de Anselmo Duarte em 1962. Que prêmio esse filme conquistou?",
    "resposta": "Palma de Ouro",
    "distratores": [
      "Leão de Ouro",
      "Urso de Ouro",
      "Oscar de filme estrangeiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/O_Pagador_de_Promessas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/O_Pagador_de_Promessas",
        "situacao": "ok",
        "texto": "O Pagador de Promessas (Brazilian Portuguese pronunciation: [u paɡaˈdoʁ dʒi pɾoˈmɛsɐs]; Keeper of Promises) is a 1962 Brazilian drama film written and directed by Anselmo Duarte, based on the stage play of the same name by Dias Gomes. Shot in Salvador, Bahia, it stars Leonardo Villar and Glória Menezes.\n[…]\nThe film won the Palme d'Or at the 1962 Cannes Film Festival, becoming the first and only Brazilian film to achieve that feat. A year later, it also became the first Brazilian and South American film to be nominated for Best Foreign Language Film at the 35th Academy Awards.\n[…]\n1962 Cannes Film Festival\n[…]\nPalme d'Or – Anselmo Duarte (won)\n[…]\nSpecial Jury Prize – Anselmo Duarte (won)\n[…]\nGolden Gate Award for Best Film – Anselmo Duarte (won)\n[…]\nO Pagador de Promessas at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Pagador_de_Promessas",
        "situacao": "ok",
        "texto": "O Pagador de Promessas é um filme brasileiro de 1962 do gênero drama, dirigido e escrito por Anselmo Duarte, baseado na peça teatral homônima do dramaturgo Dias Gomes. Em seu elenco principal, estão Leonardo Villar, Glória Menezes, Norma Bengell, Dionísio Azevedo e Geraldo Del Rey. A trama segue Zé do Burro que, após ter seu burro atingido por um raio, faz uma promessa em um terreiro de Candomblé.\n[…]\nTeve sua estreia mundial no Festival de Cinema de Cannes em 1962, em sua 15ª edição, onde ganhou a Palma de Ouro, prêmio de maior prestígio do Festival, tornando-se o primeiro e único filme brasileiro a receber o prêmio máximo. No mesmo ano, recebeu o Prêmio Especial do Júri no Festival Internacional de Cinema de Cartagena, na Colombia, e o Prêmio Golden Gate de Melhor Filme e Trilha Sonora, para Gabriel Migliori, no San Francisco International Film Festival, nos Estados Unidos.\n[…]\nO Pagador de Promessas foi rodado em Salvador, capital do estado da Bahia, entre agosto e setembro de 1961. Anselmo Duarte convidou Leonardo Villar para o papel principal, que protagonizou a encenação da peça de Dias Gomes em 1960. A direção de fotografia foi feita pelo inglês Chick Fowle, que trabalhou anteriormente na Companhia Cinematográfica Vera Cruz.\n[…]\nEm sua estreia mundial no Festival de Cinema de Cannes, recebeu o prêmio máximo do Festival, a Palma de Ouro, prêmio até então inédito para o Brasil. No mesmo ano, ainda recebeu o Prêmio Especial do Júri no Festival Internacional de Cinema de Cartagena, na Colombia, e o Prêmio Golden Gate de Melhor Filme e Trilha Sonora, para Gabriel Migliori, no San Francisco International Film Festival, nos Estados Unidos. Foi o primeiro filme brasileiro indicado ao Oscar de Melhor Filme Internacional, em 1963.\n[…]\nLista de representantes do Brasil para o Oscar de melhor filme internacional\n[…]\nO Pagador de Promessas no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Carlos Gomes",
      "descricao": "Compositor brasileiro de óperas (1836–1896), autor de O Guarani."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A abertura da ópera O Guarani, de Carlos Gomes, é tocada há décadas no início de que programa de rádio?",
    "resposta": "A Voz do Brasil",
    "distratores": [
      "Repórter Esso",
      "Jornal da Manhã",
      "Balança Mas Não Cai"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Voz_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Voz_do_Brasil",
        "situacao": "ok",
        "texto": "A Voz do Brasil é um noticiário radiofônico estatal da Empresa Brasil de Comunicação. É o programa de rádio mais antigo do país e do hemisfério sul ainda em difusão, tendo sido criado em 22 de julho de 1935 no governo de Getúlio Vargas com o nome de Programa Nacional. Em 1938, passou a ter transmissão obrigatória com horário fixo das 19 às 20h, mudando sua denominação para A Hora do Brasil. Em 196\n[…]\nDurante o regime militar, o segmento legislativo do programa era muitas vezes o único horário no controle da oposição. Em 1972, o tradicional tema de abertura O Guarani foi substituído pelos acordes do Hino da Independência do Brasil, composto pelo Imperador Dom Pedro I em 1822. Nesta época, o foco do noticiário deixou de se concentrar nos atos dos três poderes e passou a tratar de temas cotidianos, com ênfase nas notícias policiais e no esporte.\n[…]\nEm 1979, a Agência Nacional é substituída pela Empresa Brasileira de Notícias (EBN), que passa a ser responsável pela produção do programa até ser absorvida pela Radiobrás, em 1988. Com o governo de José Sarney em 1985, A Voz do Brasil volta a ter as características originais, incluindo a ópera O Guarani como tema de abertura. Em 1995, A Voz do Brasil entrou para o Guiness Book como o programa de rádio mais antigo do Brasil.\n[…]\nA Voz do Brasil tradicionalmente inicia-se com a frase \"Em Brasília, dezenove horas\", seguida dos acordes da ópera Il Guarany, de Carlos Gomes, seu tema de abertura. Com o passar dos anos, o tema recebeu versões em samba, choro, capoeira, e mais recentemente, uma versão em música clássica foi encomendada para o relançamento do programa em 2016. Atualmente, A Voz do Brasil é dividido nos blocos:\n[…]\nNa década de 1930, o governo criou na Rádio Clube do Brasil o embrião da Voz do Brasil, chamado de Hora Nacional, que era um programa de propaganda do governo de Getúlio Vargas disfarçado de programa educativo."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "A Flauta Mágica",
      "descricao": "Ópera de Mozart, com libreto de Emanuel Schikaneder, estreada em Viena em 1791."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Mozart e o libretista Schikaneder encheram A Flauta Mágica de símbolos de que sociedade secreta, da qual os dois faziam parte?",
    "resposta": "Maçonaria",
    "distratores": [
      "Rosa-Cruz",
      "Illuminati",
      "Templários"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Magic_Flute"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Magic_Flute",
        "situacao": "ok",
        "texto": "The Magic Flute (German: Die Zauberflöte, pronounced [diː ˈtsaʊbɐˌfløːtə] ), K. 620, is an opera in two acts by Wolfgang Amadeus Mozart to a German libretto by Emanuel Schikaneder. It is a Singspiel, a popular form that included both singing and spoken dialogue. The work premiered on 30 September 1791 at Schikaneder's theatre, the Freihaus-Theater auf der Wieden in Vienna, just two months before M\n[…]\nAlthough there were no reviews of the first performances, it was immediately evident that Mozart and Schikaneder had achieved a great success, the opera drawing immense crowds and reaching hundreds of performances during the 1790s.\n[…]\nAs Peter Branscombe documents, the earlier performances were often of highly altered, sometimes even mutilated, versions of the opera (see Ludwig Wenzel Lachnith). Productions of the past century have tended to be more faithful to Mozart's music, though faithful rendering of Mozart and Schikaneder's original (quite explicit) stage directions and dramatic vision continues to be rare; with isolated exceptions, modern productions strongly reflect the creative preferences of the stage director.\n[…]\nThe Magic Flute is noted for its prominent Masonic elements, although some scholars hold that the Masonic influence is exaggerated. Schikaneder and Mozart were Freemasons, as was Ignaz Alberti, engraver and printer of the first libretto. The opera is also influenced by Enlightenment philosophy and can be regarded as advocating enlightened absolutism.\n[…]\nDie Zauberflöte: Score and critical report (in German) in the Neue Mozart-Ausgabe\n[…]\nLibretto, critical editions, diplomatic editions, source evaluation (German only), links to online DME recordings; Digital Mozart Edition\n[…]\nDie Zauberflöte. Facsimile of Mozart's autograph\n[…]\n\"Frontispiece of the first edition libretto\", internetloge.de\n[…]\nSan Diego OperaTalk! with Nick Reveles: Mozart's The Magic Flute, UC-TV and San Diego Opera"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Flauta_M%C3%A1gica",
        "situacao": "ok",
        "texto": "A Flauta Mágica (original em alemão Die Zauberflöte  ) KV 620  é uma ópera (singspiel) em dois atos de Wolfgang Amadeus Mozart, com libreto alemão de Emanuel Schikaneder. Estreou no Theater auf der Wieden em Viena, no dia 30 de setembro de 1791.\n[…]\nSchikaneder era companheiro de loja maçônica de Mozart. À época, por influência da Revolução Francesa, a maçonaria adquiria simpatizantes ao mesmo tempo que era perseguida.\n[…]\nA ópera também apresenta influência dos ideais da sociedade maçônica (maçonaria, associação) – da qual se sabe que Mozart e Schikaneder faziam parte –, principalmente no que diz respeito ao ritual de iniciação pela qual passam Tamino e Pamina, composto de diversas provas (tal qual o ritual de iniciação maçônico) que testam o amor e a persistência do casal, recebido sob as bênçãos de toda a fraternidade do Templo da Sabedoria ao final da história.\n[…]\n625/592a), e acabou levando à composição da Flauta Mágica em 1791. Enquanto Schikaneder se propôs a escrever o libreto da peça, Mozart ficou responsável por sua melodia.\n[…]\nSabe-se que Schikaneder buscou inspiração para a história da Flauta Mágica em outras fontes, entre elas o conto de fadas Lulu oder Die Zauberflöte, escrito por Christoph Martin Wieland e publicado na coleção Dschinnistan entre 1786 e 1789. Já os elementos mágicos da peça teriam sua origem na peça Megära, de Philipp Hafner (1763).\n[…]\nApesar do tom solene, devido em grande parte à temática simbólica da peça, A Flauta Mágica também apresenta elementos do humor folclórico do Singspiel alemão, gênero musical típico da época, cuja maior característica era o diálogo falado, ao invés de cantado, e a presença de alguns personagens da comédia popular (Papageno e Papagena).\n[…]\n2 flautas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Henrik Ibsen",
      "descricao": "Dramaturgo norueguês (1828–1906), chamado de pai do drama moderno, autor de Casa de Bonecas e Peer Gynt."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Para a peça Peer Gynt, de Ibsen, que compositor norueguês criou a música de cena, incluindo Na Gruta do Rei da Montanha?",
    "resposta": "Edvard Grieg",
    "distratores": [
      "Jean Sibelius",
      "Carl Nielsen",
      "Johan Svendsen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peer_Gynt_(Grieg)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peer_Gynt_(Grieg)",
        "situacao": "ok",
        "texto": "Peer Gynt, Op. 23, is the incidental music to Henrik Ibsen's 1867 play Peer Gynt, written by the Norwegian composer Edvard Grieg in 1875. It premiered along with the play on 24 February 1876 in Christiania (now Oslo). Grieg later created two suites from his Peer Gynt music. Some of the music from these suites has received coverage in popular culture.\n[…]\nEdvard Grieg (1843–1907) was one of the definitive leaders of Scandinavian music. Although he composed many short piano pieces and chamber works, the work Grieg did for this play by Ibsen stood out. Originally composing 90 minutes of orchestral music for the play, he later went back and extracted certain sections for the suites. Peer Gynt's travels around the world and distant lands are represented by the instruments Grieg chooses to use.\n[…]\nWhen Ibsen asked Grieg to write music for the play in 1874, he reluctantly agreed. However, it was much more difficult for Grieg than he imagined, as he wrote to a friend: \"Peer Gynt\" progresses slowly, and there is no possibility of having it finished by autumn. It is a terribly unmanageable subject.\n[…]\nNina Grieg, his wife, wrote of Edvard and his music:\n[…]\nPeer Gynt and Anitra (Peer og Anitra)\n[…]\nPrelude: Peer Gynt's Homecoming (Peer Gynts heimfart)\n[…]\nOver a decade after composing the full incidental music for Peer Gynt, Grieg extracted eight movements to make two four-movement suites. The Peer Gynt suites are among his best-known works, although they began as incidental compositions. Suite No. 1, Op. 46 was published in 1888, and Suite No. 2, Op. 55 was published in 1893. A typical rendition of both suites lasts 20 to 35 minutes.\n[…]\nOriginally, the second suite had a fifth number, The Dance of the Mountain King's Daughter, but Grieg withdrew it.\n[…]\nEdvard Grieg: Peer Gynt, Op. 23, Suite No. 1, Suite No. 2: Scores at the International Music Score Library Project"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "As Bodas de Fígaro",
      "descricao": "Ópera cômica de Mozart, de 1786, com libreto de Lorenzo Da Ponte."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Cheia de intrigas e disfarces, a ação inteira de As Bodas de Fígaro, ópera de Mozart, se passa em quanto tempo?",
    "resposta": "Um único dia",
    "distratores": [
      "Uma semana",
      "Três dias",
      "Um mês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Marriage_of_Figaro",
      "https://en.wikipedia.org/wiki/The_Marriage_of_Figaro_(play)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Marriage_of_Figaro",
        "situacao": "ok",
        "texto": "The Marriage of Figaro (Italian: Le nozze di Figaro, pronounced [le ˈnɔttse di ˈfiːɡaro] ), K. 492, is a commedia per musica (opera buffa) in four acts composed in 1786 by Wolfgang Amadeus Mozart, with an Italian libretto written by Lorenzo Da Ponte. It premiered at the Burgtheater in Vienna on 1 May 1786. The opera's libretto is based on the 1784 stage comedy by Beaumarchais, La folle journée, ou\n[…]\nMozart reused the music of the \"Agnus Dei\" of his earlier Krönungsmesse (Coronation Mass) for the countess's \"Dove sono\", in C major instead of the original F major. Mozart also reused the motif that begins his early bassoon concerto in another aria sung by the countess, \"Porgi, amor\". Beethoven wrote Variations on 'Se vuol ballare', WoO 40, for violin and piano on Figaro's cavatina. Ferdinand Ries used music from the opera in his Fantasies on Themes from 'Le Nozze di Figaro', Op. 77.\n[…]\nMoscheles used the duettino \"Crudel! perchè finora\" in his Fantaisie dramatique sur des Airs favoris, Bijoux à la Malibran for piano, Op. 72/4. Johann Nepomuk Hummel quoted it in his Fantasia über 'Le nozze di Figaro', Op. 124. Franz Liszt quoted the opera in his Fantasy on Themes from Mozart's Figaro and Don Giovanni S. 697.\n[…]\nIn his 1991 opera, The Ghosts of Versailles, which includes elements of Beaumarchais's third Figaro play (La Mère coupable) and in which the main characters of The Marriage of Figaro also appear, John Corigliano quotes Mozart's opera, especially the overture, several times.\n[…]\nLe nozze di Figaro: Score and critical report (in German) in the Neue Mozart-Ausgabe\n[…]\n\"Work details\", Köchel Verzeichnis, International Mozarteum Foundation\n[…]\nLe nozze di Figaro: Scores at the International Music Score Library Project\n[…]\nMozart's Opera Marriage of Figaro, containing the Italian text, with an English translation, and the Music of all of the Principal Airs, Ditson (1888) – via Liberty Fund"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Marriage_of_Figaro_(play)",
        "situacao": "ok",
        "texto": "The Marriage of Figaro (French: La Folle Journée, ou Le Mariage de Figaro (\"The Mad Day, or The Marriage of Figaro\")) is a comedy in five acts, written in 1778 by Pierre-Augustin de Beaumarchais. This play is the second in the Figaro trilogy, preceded by The Barber of Seville and followed by The Guilty Mother.\n[…]\nThe play formed the basis for an opera with a libretto by Lorenzo Da Ponte and music by Mozart, also called The Marriage of Figaro (1786). In 1799, another opera based on the same play, La pazza giornata, ovvero Il matrimonio di Figaro, was produced in Venice with a libretto by Gaetano Rossi and music by Marcos Portugal.\n[…]\nMarceline herself is in love with Figaro, and hopes to discourage Suzanne from this.\n[…]\nBeaumarchais, Pierre. \"Preface to The Marriage of Figaro\", The Tulane Drama Review 2.2 (1958) (subscription required)\n[…]\nCoward, David (trans and intro) (2003). The Figaro Trilogy. Oxford: Oxford University Press. ISBN 0192804138. (online version contains no page numbering)\n[…]\nFisher, Burton D (2001). \"Introduction.\" The Marriage of Figaro. Baton Rouge, FL: Opera Classics Library. ISBN 1930841825.\n[…]\nHolden, Joan (2006). The Marriage of Figaro. New York: Dramatists Play Service. ISBN 0822221330.\n[…]\nJohn, Nicholas, ed. (1983). The Marriage of Figaro/Le Nozze di Figaro – Volume 17 of English National Opera Guides. London: John Calder. ISBN 0714537713.\n[…]\nWood, John (trans and intro) (1964). The Barber of Seville and The Marriage of Figaro. Harmondsworth: Penguin Classics. OCLC 58897211.\n[…]\nLa Folle Journée, ou Le Mariage de Figaro from Project Gutenberg. (in French)\n[…]\nLe Mariage de Figaro from Wikisource. (in French)\n[…]\nThe Marriage of Figaro public domain audiobook at LibriVox\n[…]\nChisholm, Hugh, ed. (1911). \"Figaro\" . Encyclopædia Britannica. Vol. 10 (11th ed.). Cambridge University Press. p. 334."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Le_nozze_di_Figaro",
        "situacao": "ok",
        "texto": "Le nozze di Figaro (em português As bodas de Fígaro) é uma ópera-bufa em quatro atos composta por Wolfgang Amadeus Mozart, sobre libreto de Lorenzo da Ponte, com base na peça homônima de Pierre-Augustin Caron de Beaumarchais (Le Mariage de Figaro). Composta entre 1785 e 1786, estreou em Viena, em 1 de maio de 1786. Diz-se que Mozart começou a ter problemas com sua reputação a partir desta ópera, q\n[…]\nHá, no entanto, quem considere Le Nozze di Figaro como a obra-prima do compositor.\n[…]\nA seguir Fígaro abandona a cena e entram Bartolo e Marcellina, que mostra ao médico um contrato em que Fígaro se compromete a devolver a soma de um empréstimo. A intenção da mulher é exigir o pagamento imediato dessa dívida com a finalidade de impedir a boda do criado, por quem está apaixonada. Bartolo decide apoiá-la, porque deseja vingar-se do criado; há algum tempo, Fígaro ajudou o Conde a raptar a sua amada pupila Rosina, que se transformaria na Condessa de Almaviva.\n[…]\nSai Fígaro e nesse momento entra Cherubino, que canta o seu amor à Condessa. A Condessa e Susanna disfarçam-no de mulher e pedem ao Conde uma conversa com Susanna, à qual assistirá Cherubino. Nesse momento aparece o Conde e Cherubino tem de se esconder numa divisão. A Condessa diz ao Conde que é Susanna quem ali está escondida e ele tenta derrubar a porta.\n[…]\nCherubino, que tinha ficado com Barbarina, vê a Condessa - que estava disfarçada de Susanna - e tenta beijá-la, mas nesse momento chega o Conde e é ele que recebe o beijo. Este responde-lhe com uma bofetada, mas atinge Fígaro que se tinha acercado para ver o que se passava.\n[…]\n\"Non più andrai\" - Figaro - final do Ato I\n[…]\n«Áudio da ópera As bodas de Fígaro para baixar»\n[…]\n«Mozart em Viena». video(en)\n[…]\nFígaro - Cesare Siepi;\n[…]\nFígaro - Bryn Terfel;\n[…]\nFígaro - Giuseppe Taddei;\n[…]\nFígaro - Anton Scharinger;\n[…]\nFígaro - Sesto Bruscantini\n[…]\nFígaro - Ferrucio Furlanetto;\n[…]\nFígaro - José Van Dam;\n[…]\nFígaro - Hermann Prey;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Gioachino Rossini",
      "descricao": "Compositor italiano de óperas (1792–1868), autor de O Barbeiro de Sevilha e Guilherme Tell."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Depois de Guilherme Tell, Rossini abandonou as óperas e viveu quase quarenta anos sem compor outra. Com que idade ele parou?",
    "resposta": "37 anos",
    "distratores": [
      "25 anos",
      "50 anos",
      "62 anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gioachino_Rossini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gioachino_Rossini",
        "situacao": "ok",
        "texto": "Gioachino Antonio Rossini (29 February 1792 – 13 November 1868) was an Italian composer and conductor of the late Classical and early Romantic eras. While he gained most of his fame for his 39 operas, he also wrote many pieces of chamber music, piano, and some sacred music. He set new standards for both comic and serious opera before retiring from large-scale composition while still in his thirtie\n[…]\nThe following year Rossini wrote his long-awaited French grand opera, Guillaume Tell, based on Friedrich Schiller's 1804 play which drew on the William Tell legend.\n[…]\nRossini's contract required him to provide five new works for the Opéra over 10 years. After the première of Tell he was already considering some opera subjects, including Goethe's Faust, but the only significant works he completed before abandoning Paris in 1836 were the Stabat Mater, written for a private commission in 1831 (later completed and published in 1841), and the collection of salon vocal music Soirées musicales published in 1835.\n[…]\nIn the 21st century, the Rossini repertoire of opera houses around the world remains dominated by Il barbiere, La Cenerentola being the second most popular. Several other operas are regularly produced, including Le comte Ory, La donna del lago, La gazza ladra, Guillaume Tell, L'italiana in Algeri, La scala di seta, Il turco in Italia and Il viaggio a Reims.\n[…]\nIn 2025, an opera buffa titled Casa Rossini was composed by Paolo Fradiani, featuring Gioachino Rossini in the role of himself. The opera was performed the same year at the Foyer of the Teatro Ventidio Basso in Ascoli Piceno.\n[…]\nFondazione Gioachino Rossini, Pesaro (in Italian)\n[…]\nFree scores by Gioachino Rossini in the Choral Public Domain Library (ChoralWiki)\n[…]\nPortraits of Gioachino Rossini at the National Portrait Gallery, London\n[…]\n\"Rossini, Gioachino Antonio\" . Encyclopædia Britannica. Vol. 23 (11th ed.). 1911. pp. 751–752."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gioachino_Rossini",
        "situacao": "ok",
        "texto": "Gioachino Antonio Rossini (Pésaro, 29 de fevereiro de 1792 – Passy, 13 de novembro de 1868) foi um compositor italiano que ganhou fama por suas 39 óperas, embora também tenha escrito muitas canções, algumas músicas de câmara e peças para piano, e algumas músicas sacras. Ele estabeleceu novos padrões para a ópera cômica e séria antes de se aposentar da composição em grande escala ainda na casa dos \n[…]\nNascido em Pésaro de pais que eram ambos músicos (seu pai trompetista; sua mãe, cantora), Rossini começou a compor aos doze anos e foi educado na escola de música em Bolonha. Sua primeira ópera foi apresentada em Veneza em 1810, quando ele tinha dezoito anos. Em 1815, foi contratado para escrever óperas e dirigir teatros em Nápoles.\n[…]\nGioachino Antonio Rossini nasceu numa família de músicos em Pésaro, cidade na costa do mar Adriático, na Itália. Seu pai, Giuseppe, era um trompista e inspector de matadouros, e sua mãe, Anna Guidarini, era uma cantora, filha de um padeiro. Os pais de Rossini começaram cedo sua educação musical, e aos seis anos de idade ele já tocava o triângulo na banda de seu pai.\n[…]\nEntre 1810 e 1813, em Bolonha, Roma, Veneza e Milão, Rossini seguiu produzindo óperas de sucesso variável. A memória destas obras foi suplantada pelo enorme sucesso de sua ópera Tancredi.\n[…]\nMas, apesar de tudo, a reputação de Rossini como autor de óperas cômicas permanece indestrutível. Suas óperas ainda hoje são uma das principais colunas de sustentação do repertório de teatros de ópera do mundo inteiro. Além de O Barbeiro de Sevilha, A Italiana em Argel, O Turco na Itália e La Cenerentola (adaptação operística feita por Rossini da imortal história da Cinderela) estão entre as mais populares.\n[…]\n«Fondazione Gioachino Rossini». , Pesaro (em italiano)\n[…]\nPartituras gratuitas de Gioachino Rossini na CPDL, a Biblioteca Coral de Domínio Público",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Luciano Pavarotti",
      "descricao": "Tenor lírico italiano (1935–2007), um dos Três Tenores."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A ária Ah, mes amis, da ópera A Filha do Regimento, exige uma sequência de dós agudos que deu fama a Pavarotti. Quantos são?",
    "resposta": "Nove",
    "distratores": [
      "Três",
      "Cinco",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Luciano_Pavarotti",
      "https://en.wikipedia.org/wiki/La_fille_du_r%C3%A9giment"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Luciano_Pavarotti",
        "situacao": "ok",
        "texto": "Luciano Pavarotti (12 October 1935 – 6 September 2007) was an Italian operatic tenor who during the late part of his career crossed over into popular music, eventually becoming one of the most acclaimed tenors of all time. He made numerous recordings of complete operas and individual arias, gaining worldwide fame for his tone and the nickname \"King of the High Cs\".\n[…]\nHis first appearance as Tonio in Donizetti's La fille du régiment took place at the Royal Opera House, Covent Garden, on 2 June 1966. In this performance, he was the first tenor to deliver nine natural high Cs in the aria \"Ah! mes amis\".\n[…]\nHis breakthrough in the United States came on 17 February 1972, in a production of La fille du régiment at New York's Metropolitan Opera, in which he hit nine high Cs in the signature aria and had seventeen curtain calls. This earned him the nickname \"King of the High Cs\".\n[…]\nIn 1985, Pavarotti sang Radames at La Scala opposite Maria Chiara in a Luca Ronconi production conducted by Maazel, recorded on video. His performance of the aria \"Celeste Aida\" received a two-minute ovation on the opening night. He was reunited with Mirella Freni for the San Francisco Opera production of La bohème in 1988, also recorded on video. In 1992, La Scala saw Pavarotti in a new Zeffirelli production of Don Carlos, conducted by Riccardo Muti.\n[…]\nTenor Arias from Italian Opera – Arias from Guglielmo Tell, I puritani, Il trovatore, L'arlesiana, La bohème, Mefistofele, Don Pasquale, La Gioconda and Giuseppe Pietri's Maristella. Luciano Pavarotti, tenor with Arleen Auger, soprano. Leone Magiera (piano) Wiener Opernorchester and choir. Ambrosian Singers New Philharmonia Orchestra Nicola Rescigno 1971\n[…]\n1998 – 22 November the Mayor of New York, Rudy Giuliani, proclaimed Luciano Pavarotti Day to celebrate his 30th anniversary at the Metropolitan Opera House."
      },
      {
        "url": "https://en.wikipedia.org/wiki/La_fille_du_r%C3%A9giment",
        "situacao": "ok",
        "texto": "La fille du régiment (French pronunciation: [la fij dy ʁeʒimɑ̃], The Daughter of the Regiment) is an opéra comique in two acts by Gaetano Donizetti, set to a French libretto by Jules-Henri Vernoy de Saint-Georges and Jean-François Bayard. It was first performed on 11 February 1840 by the Paris Opéra-Comique at the Salle de la Bourse.\n[…]\nLa fille du régiment quickly became a popular success partly because of the famous aria \"Ah! mes amis, quel jour de fête!\", which requires the tenor to sing no fewer than eight high Cs – a frequently sung ninth is not written. La figlia del reggimento, a slightly different Italian-language version (in translation by Calisto Bassi), was adapted to the tastes of the Italian public.\n[…]\nThis opera is famous for the aria \"Ah! mes amis, quel jour de fête ... Pour mon âme\", which has been called the \"Mount Everest\" for tenors. The cabaletta \"Pour mon âme\" features eight high Cs (a ninth, frequently inserted, is not written).\n[…]\nThe Marquise commands that Marie accompany her and learn to be a proper lady. Marie bids farewell to her beloved regiment just as Tonio enters announcing that he has enlisted in their ranks (aria: \"Ah! mes amis, quel jour de fête\" / \"Ah, my friends, what an exciting day\"). When he proclaims his love for Marie, the soldiers are horrified, but agree to his pleading for her hand. However, they tell him that she is about to leave with her aunt (Marie, aria: \"Il faut partir\" / \"I must leave you!\").\n[…]\nMelitz, Leo (2015) [1921]. The Opera Goer's Complete Guide. ISBN 978-1330999813 OCLC 982924886. (Source of synopsis)\n[…]\nLa fille du régiment: Scores at the International Music Score Library Project\n[…]\nLa fille du régiment : opéra comique en deux actes, 1840 publication, French and German, digitized by Brigham Young University, Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luciano_Pavarotti",
        "situacao": "ok",
        "texto": "Luciano Pavarotti OMRI (Módena, 12 de outubro de 1935 – Módena, 6 de setembro de 2007) foi um cantor (tenor lírico) italiano, grande intérprete das obras de Bellini, Donizetti, Verdi e Puccini, dentre outros em seu grande repertório. É reconhecido como o tenor que popularizou mundialmente a ópera.\n[…]\nApós abandonar o sonho de se tornar um goleiro de futebol, Pavarotti passou sete anos em treinamento vocal. As primeiras influências musicais de Pavarotti vieram das gravações de seu pai, muitas dessas sendo de Beniamino Gigli, Giovanni Martinelli, Tito Schipa e Enrico Caruso. O tenor favorito de Pavarotti e ídolo foi Giuseppe Di Stefano. Ele também foi muito influenciado por Mario Lanza. Aos nove anos de idade, ele começou a cantar com seu pai no pequeno coral local.\n[…]\nSeu maior sucesso nos Estados Unidos veio em 17 de fevereiro de 1972, em uma produção de La fille du régiment, no Metropolitan Opera House em Nova Iorque, quando ele levou o público ao delírio, alcançando nove dós na ária \"pour mon âme\". Ele bateu o recorde, sendo chamado dezessete vezes ao palco.\n[…]\nPara celebrar seus 25 anos de carreira, ele levou os vencedores da competição para a Itália para performances de gala de La Bohème em Modena e Gênova e posteriormente para China, com a performance em Pequim. Para concluir a visita a China, Pavarotti interpretou pela primeira vez no Grande Hall das Pessoas, para 10 mil pessoas, recebendo uma ovação em pé pelos seus nove dó tenor. A terceira competição aconteceu em 1989, novamente apresentando L'Elisir D'Amore e Un ballo in maschera.\n[…]\nPavarotti participou de apenas um filme, uma comédia romântica chamada Yes, Giorgio (1982), mas apareceu em mais de 20 performances de óperas televisionadas entre 1978 e 1994, a maioria no Metropolitan Opera House e todas disponíveis em DVD.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Rent (musical)",
      "descricao": "Musical da Broadway de Jonathan Larson, de 1996, sobre jovens artistas em Nova York na época da epidemia de aids."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na canção Seasons of Love, do musical Rent, um ano é medido em minutos. Quantos?",
    "resposta": "525 mil e seiscentos",
    "distratores": [
      "365 mil",
      "480 mil e duzentos",
      "600 mil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Seasons_of_Love"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Seasons_of_Love",
        "situacao": "ok",
        "texto": "\"Seasons of Love\", also known as \"525,600 Minutes\", is a song from the 1996 Broadway musical Rent, written and composed by Jonathan Larson. The song starts with an ostinato piano motif, which provides the harmonic framework for the cast to sing \"Five hundred twenty-five thousand, six hundred minutes\" (the number of minutes in a common year). The main instruments used throughout the song are piano,\n[…]\nIn the original Broadway production, the song is sung at the opening of the second act. The cast stands downstage in a straight line facing the audience. The entire cast performs the song, and the solos are normally performed by two cast members who play several minor roles each (namely Mr. and Mrs. Jefferson). \"Seasons of Love\" is performed in two parts, the first at the beginning of Act II with the reprise following a few numbers later, following \"Take Me or Leave Me\".\n[…]\nIn the 2005 film version of Rent, \"Seasons of Love\" and its reprise are performed. Only the eight principal characters perform the song, and the two solos are performed by Joanne (Tracie Thoms) and Tom Collins (Jesse L. Martin). \"Seasons of Love\" is first performed at the start of the film with the cast singing it on a theater stage. In the reprise the song plays as a backdrop to a documentary style film about New York life made by the character Mark.\n[…]\nSelections from \"Seasons of Love\" were also used in several of the film's trailers and other promotional material.\n[…]\nIn addition to the 1996 Original Cast Recording (OCR) a number of different versions have been recorded. Along with the OCR soundtrack is an alternative version of Seasons of Love featuring Stevie Wonder who sings (and improvises upon) the part usually sung by the soloists and also plays harmonica.\n[…]\nRent star Idina Menzel covered the song for her 2019 Christmas album Christmas: A Season of Love."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "William Shakespeare",
      "descricao": "Dramaturgo e poeta inglês (1564–1616), autor de Hamlet e Romeu e Julieta."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Além das peças, Shakespeare publicou em 1609 uma coletânea de sonetos. Quantos sonetos ela reúne?",
    "resposta": "154",
    "distratores": [
      "88",
      "100",
      "220"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shakespeare%27s_sonnets"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shakespeare%27s_sonnets",
        "situacao": "ok",
        "texto": "William Shakespeare (c. 23 April 1564 – 23 April 1616) wrote sonnets on a variety of themes. When discussing or referring to Shakespeare's sonnets, it is almost always a reference to the 154 sonnets that were first published all together in a quarto in 1609. However, there are six additional sonnets that Shakespeare wrote and included in the plays Romeo and Juliet, Henry V and Love's Labour's Lost\n[…]\nThe primary source of Shakespeare's sonnets is a quarto published in 1609 titled Shake-speare's Sonnets. It contains 154 sonnets, which are followed by the long poem \"A Lover's Complaint\". Thirteen copies of the quarto have survived in fairly good shape. There is evidence in a note on the title page of one of the extant copies that the great Elizabethan actor Edward Alleyn bought a copy in June 1609 for one shilling.\n[…]\nWilliam Hart, Shakespeare's nephew and male heir.\n[…]\n20 May 1609 – The entry in the Stationers' Register announces Shakespeare's Sonnets. The contents include a collection of 154 sonnets followed by the poem \"A Lover's Complaint\". This publication was greeted with near silence in the documentary record, especially when compared with the lively reception that followed the publication of Venus and Adonis.\n[…]\nThere are sonnets written by Shakespeare that occur in his plays, and these include his earliest sonnets. They differ from the 154 sonnets published in the 1609, because they may lack the deep introspection, for example, and they are written to serve the needs of a performance, exposition or narrative.\n[…]\nSonnet 1 to Sonnet 154 (full list)\n[…]\nShakespeare's Sonnets public domain audiobook at LibriVox\n[…]\nAll the sonnets of William Shakespeare in an easy-to-read format.\n[…]\nWilliam Shakespeare Sonnets facts Quick reference facts about The Sonnets\n[…]\nBanerjee, Subhrasleta. \"William Shakespeare's Sonnets: Relooking at the Characters\". Yearly Shakespeare ISSN 0976-9536, 17 (April 2019): 177–181."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sonetos_de_Shakespeare",
        "situacao": "ok",
        "texto": "Os Sonetos de Shakespeare perfazem um conjunto de 154 poemas publicados em 1609, embora as datas de composição sejam imprecisas. Eles tratam de assuntos como amor, beleza, política e mortalidade.\n[…]\nDos 154 sonetos, dois deles fogem do padrão do soneto:\n[…]\nO soneto 99 apresenta 15 versos;\n[…]\nJorge Wanderley traduziu integralmente os 154 sonetos em 1991, em publicação da Civilização Brasileira;\n[…]\nMilton Lins, em 2005, publicou no Recife a tradução dos 154 sonetos;\n[…]\nJosé Arantes Júnior concluiu, em 2007, os 154 sonetos, publicando-os em 2010;\n[…]\nBárbara Heliodora, especialista neste autor, traduziu 30 sonetos, que foram publicados pela Editora Nova Fronteira;\n[…]\nVasco Graça Moura traduziu os 154 sonetos de Shakespeare para o português.\n[…]\nMaria do Céu Saraiva Jorge também traduziu os 154 sonetos de Shakespeare para o português.\n[…]\nSHAKESPEARE, William. Os Sonetos de Shakespeare. Tradução de Vasco Graça Moura. 2002.\n[…]\nSHAKESPEARE, William. Sonetos de William Shakespeare. Tradução de Milton Lins. Recife: FacForm. 2005.\n[…]\nSHAKESPEARE, William. 44 Sonetos Escolhidos (Homenagem ao Bardo, aos 390 anos de sua morte. 1616 - 2006). Tradução de Thereza Christina Rocque da Motta. Rio de Janeiro: Ibis Libris. 2006.\n[…]\nSHAKESPEARE, William. Sonetos. Tradução de Péricles Eugênio da Silva Ramos. São Paulo: Editora Hedra. 2008\n[…]\nSHAKESPEARE, William. Sonetos Completos de William Shakespeare. Tradução de José Arantes Júnior. Porto Alegre: Real Academia de Letras, 2010.\n[…]\nSHAKESPEARE, William. 50 Sonetos William Shakespeare - Coleção 50 anos. Tradução de Ivo Barroso. Rio de Janeiro: Nova Fronteira. 2015.\n[…]\n«Os dez sonetos mais amados de Shakespeare»\n[…]\n«Os 154 sonetos traduzidos para o português por Thereza Christina Rocque da Motta»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Romeu e Julieta",
      "descricao": "Tragédia de William Shakespeare sobre dois jovens apaixonados de famílias rivais de Verona."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na tragédia de Shakespeare, quantos anos tem Julieta quando conhece Romeu?",
    "resposta": "Treze",
    "distratores": [
      "Quinze",
      "Dezesseis",
      "Dezoito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Juliet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Juliet",
        "situacao": "ok",
        "texto": "Juliet Capulet (Italian: Giulietta Capuleti [dʒuˈljetta kapuˈleːti]) is the female protagonist in William Shakespeare's romantic tragedy Romeo and Juliet. A 13-year-old girl, Juliet is the only daughter of the patriarch of the House of Capulet. She falls in love with the male protagonist Romeo, a member of the House of Montague, with which the Capulets have a blood feud. The story has a long histo\n[…]\nThat the parts of young women were played by pre-adolescent boys in Shakespeare's day also cannot be overlooked; it is possible that Shakespeare had the physique of a young boy in mind during composition, in addition to the fact that Romeo and Juliet are of wealthy families and would be more likely to marry earlier than commoners.\n[…]\nNiamh Cusack portrayed Juliet in 1986 with The Royal Shakespeare Company. Sean Bean was her Romeo.\n[…]\nJames Patrick Davis portrayed Juliet in an all-male 2008 production with Shakespeare Theatre Company, opposite actor Finn Wittrock as Romeo.\n[…]\nIn the sitcom Wizards of Waverly Place, actress Bridgit Mendler portrays Juliet (as a vampire) and the Romeo of the show was Justin Russo, portrayed by actor David Henrie. In this episode, their families' feud is a result of rival submarine sandwich shops).\n[…]\nThe internet franchise Epic Rap Battles of History features Grace Helbig as Juliet, alongside Nice Peter as Romeo rapping against a fictionalized depiction of Bonnie and Clyde.\n[…]\nBevington, David, Ed. Romeo and Juliet, The Bantam Shakespeare (New York, 1988)\n[…]\nLevenson, Jill L., Ed. Romeo and Juliet, The Oxford Shakespeare (Oxford, 2000)\n[…]\n\"Juliet's Taming of Romeo\" Carolyn E. Brown; SEL: Studies in English Literature 1500–1900, Vol. 36, 1996\n[…]\n\"A Psychological Profile of Shakespeare's Juliet: Or Was It Merely Hormones?\" Nancy Compton Warmbrod The English Journal, Vol. 69, No. 9 (Dec. 1980), p. 29\n[…]\nJuliet Character Analysis\n[…]\nWhy Did Shakespeare Make Juliet Thirteen Years Old?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Julieta_Capuleto_%28personagem%29",
        "situacao": "ok",
        "texto": "Julieta Capuleto é a protagonista feminina da obra romântica Romeu e Julieta, de William Shakespeare. Julieta é uma garota de 13 anos, a filha única do patriarca da Casa de Capuleto. Ela se apaixona pelo protagonista masculino Romeu, membro da Casa de Montéquio, com a qual os Capuletos têm uma rivalidade. A história tem uma longa trama que antecede o próprio criador, Shakespeare.\n[…]\nA Julieta de Shakespeare está próxima de seu 14º aniversário, tendo nascido na véspera do festival da colheita “Lammas” (1º de agosto), portanto, seu aniversário é 31 de julho. Julieta é doce e romântica, embora ingênua, pois ainda não teve nenhuma experiência romântica e se apaixona perdidamente por Romeu, filho da família rival: os Montéquios. Seus pais gostariam de casá-la com um nobre de alto escalão, mas a moça se recusa e, após alguns eventos adversos e inescrutáveis, ela comete suicídio.\n[…]\nKatharine Cornell teve um notável sucesso na Broadway como Julieta, contracenando com Basil Rathbone como Romeu em 1934, e reviveu a produção com Maurice Evans como Romeu e Ralph Richardson como Mercúcio no ano seguinte.\n[…]\nClaire Danes foi Julieta na versão modernizada de 1996, Romeu + Julieta, ao lado de Leonardo DiCaprio como Romeu.\n[…]\nGugu Mbatha-Raw interpretou Julieta em Royal Exchange Theatre's em 2005.\n[…]\nHailee Steinfeld como Julieta na adaptação de Carlo Carlei.\n[…]\nTeresa Palmer interpretou Julie Grigio, a versão análoga de Julieta na adaptação do filme de zumbis Warm Bodies, de 2013, ao lado de Nicholas Hoult como R, a versão análoga de Romeu zumbificada do filme.\n[…]\nLorna Courtney interpretou Julieta na versão da Broadway de 2022 de “& Juliet”.\n[…]\nFrancesca Amewudah-Rivers foi escalada para interpretar Julieta em uma produção de 2024 no West End, ao lado de Tom Holland como Romeu.\n[…]\nAnálise de personagem de Julieta\n[…]\nPor que Shakespeare fez Julieta ter treze anos?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Sófocles",
      "descricao": "Tragediógrafo grego de Atenas do século cinco antes de Cristo, autor de Édipo Rei e Antígona."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Sófocles escreveu mais de cem peças, mas quantas chegaram completas até os nossos dias?",
    "resposta": "Sete",
    "distratores": [
      "Três",
      "Doze",
      "Vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sophocles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sophocles",
        "situacao": "ok",
        "texto": "Sophocles (; Ancient Greek: Σοφοκλῆς, pronounced [so.pʰo.klɛ̂ːs], Sophoklễs; c. 497/496 – winter 406/405 BC) was an ancient Greek tragedian, one of three from whom at least two plays have survived in full. His first plays were written later than, or contemporary with, those of Aeschylus and earlier than, or contemporary with, those of Euripides.\n[…]\nSophocles wrote more than 120 plays, but only seven have survived in a complete form: Ajax, Antigone, Women of Trachis, Oedipus Rex, Electra, Philoctetes, and Oedipus at Colonus. For almost 50 years, Sophocles was the most celebrated playwright in the dramatic competitions of the city-state of Athens, which took place during the religious festivals of the Lenaea and the Dionysia. He competed in 30 competitions, won 24, and was never judged lower than second place.\n[…]\nHere Sophocles says that he has completed a stage of Aeschylus's work, meaning that he went through a phase of imitating Aeschylus's style but is finished with that. Sophocles's opinion of Aeschylus was mixed. He certainly respected him enough to imitate his work early on in his career, but he had reservations about Aeschylus's style, and thus did not keep his imitation up. Sophocles's first stage, in which he imitated Aeschylus, is marked by \"Aeschylean pomp in the language\".\n[…]\nSophocles (crater), a crater on Mercury.\n[…]\nSchultz, Ferdinand (1835). De vita Sophoclis poetae commentatio. Phil. Diss., Berlin.\n[…]\nWorks by Sophocles in eBook form at Standard Ebooks\n[…]\nWorks by Sophocles at Project Gutenberg\n[…]\nWorks by Sophocles at Faded Page (Canada)\n[…]\nWorks by or about Sophocles at the Internet Archive\n[…]\nWorks by Sophocles at LibriVox (public domain audiobooks)\n[…]\nWorks by Sophocles at the Perseus Digital Library (Greek and English)\n[…]\nSORGLL: Sophocles, Electra 1126–1170; read by Rachel Kitzinger Archived 19 October 2017 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%B3focles",
        "situacao": "ok",
        "texto": "Sófocles (em grego: Σοφοκλῆς, Sophoklês; 497 ou 496 a.C.- inverno de 406 ou 405 a.C ) foi um dramaturgo grego, um dos mais importantes escritores de tragédia ao lado de Ésquilo e Eurípedes, dentre aqueles cujo trabalho sobreviveu. Suas peças retratam personagens nobres e da realeza. Filho de um rico mercador, nasceu em Colono, perto de Atenas, na época do governo de Péricles, o apogeu da cultura h\n[…]\nSuas primeiras peças foram escritas depois que as de Ésquilo e antes que as de Eurípedes. De acordo com a Suda, uma enciclopédia do século X, Sófocles escreveu 123 peças durante sua vida, mas apenas sete sobreviveram em uma forma completa. Por quase 50 anos, Sófocles foi o mais celebrado dos dramaturgos nos concursos dramáticos da cidade-estado de Atenas, que aconteciam durante as festas religiosas Leneana e Dionísia.\n[…]\nSófocles, filho de Sófilos, era um rico membro do demo (pequena comunidade) rural da Colônia Hipius na Ática, que mais tarde se tornaria um cenário para suas peças, e provavelmente nasceu lá. Seu nascimento ocorreu alguns anos antes da Batalha de Maratona em 490 a.C.: o ano exato não é claro, embora 497 ou 496 seja talvez o mais provável.\n[…]\nAqui, Sófocles diz que completou um estágio do trabalho de Ésquilo, o que significa que ele teria passado por uma fase de imitação do estilo de Ésquilo, mas que ela teria terminado. A opinião de Sófocles sobre Ésquilo foi mista. Ele certamente o respeitava o suficiente para imitar seu trabalho no início da carreira, mas tinha reservas sobre o estilo de Ésquilo. e por isso não continuou sua imitação.\n[…]\n«Sófocles». no Portal Graecia Antiqua\n[…]\nObras de Sophocles (em inglês) no Projeto Gutenberg\n[…]\nObras de Sófocles no Internet Archive\n[…]\nObras de Sófocles na Perseus Digital Library (grego e inglês)\n[…]\nObras sobre Sófocles em bibliotecas (catálogo Worldcat)\n[…]\nFragmentary Tragedies of Sophocles Project\n[…]\nFilmes baseados em peças de Sófocles - IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Esperando Godot",
      "descricao": "Peça do escritor irlandês Samuel Beckett, estreada em Paris em 1953."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Esperando Godot, de Samuel Beckett, Vladimir e Estragon aguardam alguém que nunca chega. Quantos atos tem a peça?",
    "resposta": "Dois",
    "distratores": [
      "Um",
      "Três",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Waiting_for_Godot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Waiting_for_Godot",
        "situacao": "ok",
        "texto": "Waiting for Godot is a play by Irish playwright and author Samuel Beckett. It was written (1948–1949), first published (1952), and first performed (1953) in French as En attendant Godot. The play is Beckett's own English-language adaptation of the original. Subtitled as a \"tragicomedy in two acts\", it is his best-known literary work and regarded by critics as \"one of the most enigmatic plays of mo\n[…]\nMercier and Camier wander aimlessly about a boggy, rain-soaked island that, although not explicitly named, is Beckett's native Ireland. They speak convoluted dialogues similar to Vladimir and Estragon's, joke about the weather and chat in pubs, while the purpose of their odyssey is never made clear. The waiting in Godot is the wandering of the novel. \"There are large chunks of dialogue which he later transferred directly into Godot.\"\n[…]\nA radical transformation was written by Bernard Pautrat, performed at Théâtre National de Strasbourg in 1979–1980: Ils allaient obscurs sous la nuit solitaire (d'après 'En attendant Godot' de Samuel Beckett) (They Went Dark Under the Lonely Night (based on 'Waiting for Godot' by Samuel Beckett)). It features not four actors and the brief appearance of a fifth one (as in Beckett's play), but ten actors. Four of them bore the names of Gogo, Didi, Lucky and Pozzo.\n[…]\nThe fourteenth-season finale of It's Always Sunny in Philadelphia (2019), titled \"Waiting for Big Mo\", is based on the play, substituting Dennis Reynolds and Charlie Kelly for Vladimir and Estragon, Mac McDonald and Sweet Dee Reynolds for Pozzo and Lucky, Frank Reynolds for The Boy, and the titular \"Big Mo\" for Godot.\n[…]\nBeckett, Samuel (1988) [1956]. Waiting for Godot. London: Faber and Faber.\n[…]\nBeckett, Samuel (2015). Waiting for Godot. London: Faber and Faber.\n[…]\nBradby, David (2001). Beckett: Waiting for Godot. Cambridge: Cambridge University Press. ISBN 978-0-521-59429-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/En_attendant_Godot",
        "situacao": "ok",
        "texto": "En attendant Godot (no original em francês) ou Waiting for Godot, em inglês (À Espera de Godot em Portugal; Esperando Godot no Brasil), é uma peça de teatro escrita pelo dramaturgo irlandês Samuel Beckett (1906-1989). Escrita originalmente em francês, foi publicada pela primeira vez em 1952 e apresentada no pequeno Théâtre Babylone em Paris, com direção de Roger Blin (1907-1984). É considerado um \n[…]\nBeckett escreveu a peça em 1949 e só veio a publicá-la no ano de 1952, em francês. Em 1955, Beckett recriou sua obra em língua inglesa. A peça é dividida em dois atos. Nos dois atos, inicialmente contracenam dois personagens: Vladimir (Didi) e Estragon (Gogo). Durante cada um dos atos, que são bem semelhantes, surgem dois novos personagens: Pozzo e Lucky. Além destes, entra em cena no final de cada ato um garoto.\n[…]\nA rubrica inicial define: Estrada, árvore, à noite (Route à la campagne, avec arbre. Soir). Em cena Estragon e Vladimir. Aparentemente esperam um sujeito de nome Godot. Nada é esclarecido a respeito de quem é Godot ou o que eles desejam dele. Os dois iniciam longo diálogo, só interrompido quando da entrada de Pozzo e Lucky. Lucky carrega uma pesada mala que não larga um só instante. O segundo ato desenvolve a mesma dinâmica.\n[…]\nO cenário é o mesmo, apenas a árvore está um pouco diferente, agora com algumas folhas. Estragon e Vladimir iniciam sua jornada na espera de Godot. Surgem novamente Pozzo e Lucky. Pozzo está cego e Lucky mudo. Após a partida destes, aparece novamente um garoto anunciando novamente que Godot não virá, talvez amanhã. O diálogo final, que encerra o ato e a peça  é o seguinte:[carece de fontes]?\n[…]\nTexto em inglês de \"Waiting for Godot\" - ato 01\n[…]\nTexto em inglês de \"Waiting for Godot\" - ato 02\n[…]\nDeutsche Welle - 1953: Estreia a peça \"Esperando Godot\", de Samuel Beckett\n[…]\nMatéria na revista do SESC, sobre o I Centenário de Samuel Beckett, em 2006[ligação inativa]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "A Flauta Mágica",
      "descricao": "Ópera de Mozart, com libreto de Emanuel Schikaneder, estreada em Viena em 1791."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em A Flauta Mágica, que número se repete nas damas da rainha, nos meninos que guiam o herói e nos acordes solenes da abertura?",
    "resposta": "Três",
    "distratores": [
      "Quatro",
      "Sete",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Magic_Flute"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Magic_Flute",
        "situacao": "ok",
        "texto": "The Magic Flute (German: Die Zauberflöte, pronounced [diː ˈtsaʊbɐˌfløːtə] ), K. 620, is an opera in two acts by Wolfgang Amadeus Mozart to a German libretto by Emanuel Schikaneder. It is a Singspiel, a popular form that included both singing and spoken dialogue. The work premiered on 30 September 1791 at Schikaneder's theatre, the Freihaus-Theater auf der Wieden in Vienna, just two months before M\n[…]\nDie Zauberflöte has the greatest variety of orchestral color that the eighteenth century was to know; the very lavishness, however, is paradoxically also an economy as each effect is a concentrated one, each one—Papageno's whistle, the Queen of the Night's coloratura, the bells, Sarastro's trombones, even the farewell in scene 1 for clarinets and pizzicato strings—a single dramatic stroke.\"\n[…]\nTamino hears Papageno's pipes sounding offstage, and hurries off to find him (aria: \"Wie stark ist nicht dein Zauberton\" / How strong is thy magic tone).\n[…]\nDie Zauberflöte: Score and critical report (in German) in the Neue Mozart-Ausgabe\n[…]\nDie Zauberflöte. Facsimile of Mozart's autograph\n[…]\nDie Zauberflöte: Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Flauta_M%C3%A1gica",
        "situacao": "ok",
        "texto": "A Flauta Mágica (original em alemão Die Zauberflöte  ) KV 620  é uma ópera (singspiel) em dois atos de Wolfgang Amadeus Mozart, com libreto alemão de Emanuel Schikaneder. Estreou no Theater auf der Wieden em Viena, no dia 30 de setembro de 1791.\n[…]\nCai de cansaço e é salvo por três damas da Rainha da Noite. As mulheres ficam maravilhadas com a sua beleza e correm a dar a novidade à sua senhora, a Rainha da Noite. Enquanto isso, Papageno, um caçador de pássaros e servo da Rainha, entra em cena. Ele mente, dizendo que matou a serpente. As damas, ao voltarem, castigaram o mentiroso colocando na boca uma espécie de cadeado.\n[…]\nEm troca, as três damas entregam a ele uma oferta da rainha: uma flauta mágica em ouro, que é capaz de mudar o estado de espírito dos seres vivos que a escutam. Papageno, que irá acompanhar o príncipe em sua jornada, ganha um carrilhão mágico, também com poderes extraordinários.\n[…]\nNum bosque de palmeiras, Tamino e Papageno reúnem-se para serem iniciados pelos sacerdotes na presença do rei. Uma das provas a que ambos são submetidos é a de ficar em silêncio. Durante a prova, ambos passam por diversas tentações, que tem por objetivo desviá-los do caminho da virtude. Enquanto Tamino tem persistência para se manter calado, Papageno é facilmente distraído pelas três damas da Rainha da Noite, que aparecem para atormentar os dois e fazê-los quebrarem seu juramento.\n[…]\n2 flautas\n[…]\nNas artes, o escultor e artista escocês Eduardo Paolozzi produziu, em 1994, uma serigrafia que ilustra, com seu estilo moderno, a chegada da Rainha da Noite no segundo Ato da Flauta Mágica.\n[…]\nEm 1962, John Updike resolveu adaptar A Flauta Mágica em um livro infantil ilustrado.\n[…]\n«Discografia: versões gravadas de A Flauta Mágica»  - mozarteum.at",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Nabucco",
      "descricao": "Ópera de Giuseppe Verdi, estreada em Milão em 1842, sobre o rei babilônico Nabucodonosor e o exílio dos hebreus."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O título da ópera Nabucco, de Verdi, é a forma abreviada do nome de que rei da Babilônia?",
    "resposta": "Nabucodonosor",
    "distratores": [
      "Hamurabi",
      "Baltazar",
      "Sargão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nabucco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nabucco",
        "situacao": "ok",
        "texto": "Nabucco (Italian pronunciation: [naˈbukko]; short for Nabucodonosor [naˌbukoˈdɔːnozor, -donoˈzɔr], i.e. \"Nebuchadnezzar\") is an Italian-language opera in four acts composed in 1841 by Giuseppe Verdi to an Italian libretto by Temistocle Solera. The libretto is based on the biblical books of 2 Kings, Jeremiah, Lamentations, and Daniel, and on the 1836 play by Auguste Anicet-Bourgeois and Francis Cor\n[…]\nHowever, Antonio Cortese's ballet adaptation of the play (with its necessary simplifications), given at La Scala in 1836, was a more important source for Solera than the play itself. Under its original name of Nabucodonosor, the opera was first performed at La Scala in Milan on the 9th of March 1842.\n[…]\nMany other companies have also performed it, including San Francisco Opera in 1982, Sarasota Opera in 1995 and 2019, London's Royal Opera House in 1996, Lyric Opera of Chicago in 1997 and 2016, the New National Theatre Tokyo in 1998, Teatro Colón in 2000, Baltimore Opera in 2006, and the Teatro Regio di Parma in 2008 as part of their on-going \"Festival Verdi\". Nabucco was presented by the Michigan Opera Theatre and the San Diego Opera as part of their 2009–2010 seasons.\n[…]\nThe opera's Nabucco character is thus a composite of historical and biblical Nebuchadnezzar II, Nabonidus and Cyrus.\n[…]\nPropulsive energetic rhythms are a notable feature of much of the music, contrasted with more lyrical moments, providing dramatic pace. Both the bass Zaccaria in his prayer \"Vieni o Levita\", a quiet piece with the unusual accompaniment of six cellos, and the baritone Nabucco in his mad scene and other passages, are given music of great expressiveness, providing outstanding opportunities for the singers, but the tenor role of Ismaele is comparatively minor, unusual for a Verdi opera.\n[…]\nLibretto to Nabucco (in Italian)\n[…]\nNabucodonosor Archived 7 August 2020 at the Wayback Machine, giuseppeverdi.it (in Italian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nabucco",
        "situacao": "ok",
        "texto": "Nabucco é uma ópera em quatro atos de Giuseppe Verdi, com libreto de Temistocle Solera, escrita em 1842. A ação da ópera conta a história do rei Nabucodonosor II da Babilônia. Foi escrita durante a época da ocupação austríaca no norte da Itália e, por meio da várias analogias, suscitou o sentimento nacionalista italiano.\n[…]\nNabucco, rei da Babilônia, avança sobre Jerusalém, onde sua filha Fenena foi feita refém.\n[…]\nOs judeus oram diante do templo de Salomão. O sumo-sacerdote Zacarias entra com Ana, sua irmã, e Fenena, filha de Nabucco (Rei da Babilônia) que está sendo mantida como refém pelos judeus em Jerusalém.\n[…]\nPalácio de Nabucco, na Babilônia.\n[…]\nJardins Suspensos da Babilônia.\n[…]\nNabucco diz para Abigail que há um pergaminho dizendo que ela não é sua filha e sim uma escrava, mas ela já tem em mãos esse pergaminho e o rasga em pedaços. Nabucco chama os guardas, mas não é atendido. Sem saída, roga clemência a Abigail, que permanece irredutível.\n[…]\nZacarias profetiza  que eles estarão livres do cativeiro em breve, e Javé vai destruir a cidade de Babilônia.\n[…]\nNabucco está em seus aposentos e ouve o grito de  Fenena. Ao olhar pela janela, vê que Fenena será executada. Ao tentar abrir a porta, dá-se conta de que é prisioneiro. Neste momento, Nabucco implora perdão a Javé, rogando-lhe conversão, juntamente como a seu povo. Ao recuperar a razão, entra Abdalo e se certifica de que Nabucco é novamente ele próprio, e já está com todas as suas faculdades recuperadas. E tenta ajuda-lo a recuperar o trono.\n[…]\nNabucco acaba com a escravidão dos judeus e anuncia que ele próprio agora é um deles. A estátua de Baal, o falso Deus é destruída e Abigail se envenena suicidando, implorando a Ismael que se una novamente a Fenena.\n[…]\nO povo reconhece o milagre e direciona louvores a Javé sendo Nabucco proclamado Rei dos Reis!",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Giuseppe Verdi",
      "descricao": "Compositor italiano de óperas do século dezenove, autor de Aida, La Traviata e Nabucco."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na luta pela unificação italiana, a frase Viva Verdi, escrita nos muros, escondia uma sigla. Que rei ela saudava?",
    "resposta": "Vítor Emanuel segundo",
    "distratores": [
      "Umberto primeiro",
      "Carlos Alberto",
      "Fernando segundo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Giuseppe_Verdi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giuseppe_Verdi",
        "situacao": "ok",
        "texto": "Giuseppe Fortunino Francesco Verdi ( VAIR-dee; Italian: [dʒuˈzɛppe ˈverdi]; 9 or 10 October 1813 – 27 January 1901) was an Italian composer best known for his operas. He was born near Busseto, a small town in the modern province of Parma, to a family of moderate means, receiving a musical education with the help of a local patron named Antonio Barezzi.\n[…]\nIn April 1844, Verdi took on Emanuele Muzio, eight years his junior, as a pupil and amanuensis. He had known him since about 1828 as another of Barezzi's protégés. Muzio, who in fact was Verdi's only pupil, became indispensable to the composer. He reported to Barezzi that Verdi \"has a breadth of spirit, of generosity, a wisdom\". In November 1846, Muzio wrote of Verdi: \"If you could see us, I seem more like a friend, rather than his pupil.\n[…]\nIt was not until 1859 in Naples, and only then spreading throughout Italy, that the slogan \"Viva Verdi\" was used as an acronym for Viva Vittorio Emanuele Re D'Italia (\"Long live Victor Emmanuel II, King of Italy\"), in reference to the then king of Sardinia and future king of Italy.\n[…]\nIn 1859, Verdi was elected as a member of the new provincial council, and was appointed to head a group of five who would meet with King Vittorio Emanuele II in Turin. They were enthusiastically greeted along the way and in Turin Verdi himself received much of the publicity. On 17 October Verdi met with Cavour, the architect of the initial stages of Italian unification.\n[…]\nBeginning in Naples in 1859 and spreading throughout Italy, the slogan \"Viva VERDI\" was used as an acronym for Viva Vittorio Emanuele Re D'Italia (Long live Victor Emmanuel King of Italy), referring to Victor Emmanuel II. Marco Pizzo argues that after 1815, music became a political tool, and many songwriters expressed ideals of freedom and equality."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Giuseppe_Verdi",
        "situacao": "ok",
        "texto": "Giuseppe Fortunino Francesco Verdi (Italiano: [dʒuˈzɛppe ˈverdi]; Busseto, 9 ou 10 de outubro de 1813 – Milão, 27 de janeiro de 1901) foi um compositor italiano, mais conhecido por suas óperas.\n[…]\nNão foi até 1859 em Nápoles, e só então se espalhando por toda a Itália, que o slogan \"Viva Verdi\" foi usado como um acrônimo para Viva V'ittorio Emanuele Re D''Italia (\"Viva Vítor Emanuel II, Rei da Itália\"), em referência ao então rei da Sardenha e futuro rei da Itália.\n[…]\nEm 1859, Verdi foi eleito membro do novo conselho provincial, e foi nomeado para liderar um grupo de cinco que se encontraria com o Rei Vittorio Emanuele II em Turim. Eles foram entusiasticamente saudados ao longo do caminho e em Turim o próprio Verdi recebeu grande parte da publicidade. Em 17 de outubro, Verdi se encontrou com Cavour, o arquiteto das etapas iniciais da unificação italiana.\n[…]\nO primeiro estudo da música de Verdi, publicado em 1859 pelo crítico italiano Abramo Basevi, já distinguia quatro períodos na música de Verdi. O período inicial, 'grandioso', terminou segundo Basevi com La battaglia di Legnano (1849), e um estilo 'pessoal' começou com a próxima ópera Luisa Miller. Essas duas óperas são geralmente acordadas hoje pelos críticos como marcando a divisão entre os períodos 'inicial' e 'médio' de Verdi.\n[…]\nComeçando em Nápoles em 1859 e se espalhando por toda a Itália, o slogan \"Viva VERDI\" foi usado como um acrônimo para Viva' Vittorio Emanuele Re D''Italia (Viva Victor Emmanuel Rei da Itália), referindo-se a Vítor Emanuel II. Marco Pizzo argumenta que após 1815, a música se tornou uma ferramenta política, e muitos compositores expressaram ideais de liberdade e igualdade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "O Fantasma da Ópera (romance)",
      "descricao": "Romance francês de Gaston Leroux, publicado em 1909 e 1910, sobre um gênio mascarado que vive sob a Ópera de Paris."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No romance de Gaston Leroux, como se chama o gênio deformado conhecido como o Fantasma da Ópera?",
    "resposta": "Erik",
    "distratores": [
      "Raoul",
      "Gaston",
      "Christian"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Erik_(The_Phantom_of_the_Opera)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Erik_(The_Phantom_of_the_Opera)",
        "situacao": "ok",
        "texto": "Erik (additionally known as the Phantom of the Opera, commonly referred to as the Phantom) is the titular central character of Gaston Leroux's Le Fantôme de l'Opéra, best known to English speakers as The Phantom of the Opera. The character has been adapted to alternative media several times, including in the 1925 film adaptation starring Lon Chaney, the 1943 remake starring Claude Rains, the 1962 \n[…]\nLon Chaney's characterization of Erik in the silent film The Phantom of the Opera (1925) remains closest to the book in content, in that Erik's face resembles a skull with an elongated nose slit and protruding, crooked teeth. In this version, Erik is said to have been deformed at birth. Chaney was a masterful make-up artist and was considered avant-garde for creating and applying Erik's facial make-up design himself. It is said that he kept it secret until the first day of filming.\n[…]\nIn the 1990 television miniseries starring Charles Dance as Erik, the character, much like in the novel, is born with a deformed face (which is never seen by the audience, only hinted at by darkened skin around his eyes) covered by an almost-full-face mask exposing only a normal chin (much like the mask shown in the Lloyd Webber musical logo).\n[…]\nAlso, in a departure from the novel, it is specifically stated that Erik's mother was never repulsed by his deformity: \"She thought your face was absolutely and flawlessly beautiful.\"\n[…]\nThe 1998 film adaptation starring Julian Sands as Erik is notable in that the character is not deformed and has instead a classically handsome face.\n[…]\nOnscreen, Erik has often been cast as a tragic hero but also a tragic villain, depending on the film's point of view.\n[…]\nRobert Englund in the 1989 horror film version of The Phantom of the Opera. In this version, his full name was \"Erik Destler\".\n[…]\nCharles Dance as Erik/The Phantom of the Opera in the 1990 NBC two-part television miniseries."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erik_%28O_Fantasma_da_%C3%93pera%29",
        "situacao": "ok",
        "texto": "Erik (também conhecido como O Fantasma da Ópera, comummente referido como O Fantasma), é um personagem criado pelo escritor Gaston Leroux em seu livro de 1910, O Fantasma da Ópera. Também tornou-se personagem principal de inúmeras versões cinematográficas para a história, além de minisséries, musicais e montagens teatrais.\n[…]\nQuando seus serviços deixaram de ser necessários ao Xá, esse mandou matá-lo, pois Erik conhecia muitos segredos que poderiam por em risco a segurança dos palácios persas. Erik fugiu e retornou para Paris, com muito dinheiro. Ajudou a arquitetar o complexo Teatro da Ópera de Paris, conhecendo suas fundações e passagens secretas. Depois da obra concluída, foi nessas fundações subterrâneas que ele se refugiou, levando uma vida reclusa.\n[…]\nAssim, Erik frequentava a Ópera de Paris, onde tinha seu próprio camarote reservado, sendo sempre servido pela mesma camareira, com os requintes exigidos por ele.\n[…]\nErik, que se apresentara a Christine como o Anjo da Música, iniciou uma série de ações tencionado a conquistar o amor de Christine e manter-se com o status de fantasma na ópera de Paris. Aconteceram assassinatos e inúmeros acidentes, culminado na morte do irmão de Raoul e no desaparecimento de Raoul e Christine.\n[…]\nNo cinema, teve o primeiro filme produzido em 1916, ainda na era do cinema mudo. Das Phantom der Oper é uma produção alemã dirigida por Ernst Matray. Em seguida, Hollywood deu vida à história, realizando em 1925 a versão com Lon Chaney como o Fantasma. Em 1943 outra versão, com Claude Rains trouxe novamente Erik a Hollywood, dessa vez com um caráter diverso do apresentado no livro.\n[…]\nEm 2004, o próprio Andrew Lloyd Webber leva para os cinemas sua versão de O Fantasma da Ópera, com a direção de Joel Schumacher, tendo o ator Gerard Butler no papel título.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "William Shakespeare",
      "descricao": "Dramaturgo e poeta inglês (1564–1616), autor de Hamlet e Romeu e Julieta."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em referência ao rio que banha sua cidade natal, Shakespeare ganhou o apelido de Bardo de quê?",
    "resposta": "Avon",
    "distratores": [
      "Tâmisa",
      "Severn",
      "Mersey"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/William_Shakespeare"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_Shakespeare",
        "situacao": "ok",
        "texto": "William Shakespeare (c. 23 April 1564 – 23 April 1616) was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet and the \"Bard of Avon\" or simply \"the Bard\". His extant works, including collaborations, consist of some 39 plays, 154 sonnets, 3 long narrative poems \n[…]\nShakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna, and twins Hamnet and Judith. Sometime between 1585 and 1592 he began a successful career in London as an actor, writer, and part-owner (\"sharer\") of a playing company called the Lord Chamberlain's Men, later known as the King's Men after the ascension of King James VI of Scotland to the English throne.\n[…]\nWilliam Shakespeare was the son of John Shakespeare, an alderman and a successful glover (glove-maker) originally from Snitterfield in Warwickshire, and Mary Arden, the daughter of an affluent landowning family that was influential in the Recusant Catholic community. He was born in Stratford-upon-Avon, where he was baptised on 26 April 1564. His date of birth is unknown but is traditionally observed on 23 April, Saint George's Day.\n[…]\nBy 1800, he was firmly enshrined as the national poet, and described as the \"Bard of Avon\" (or simply \"the Bard\"). In the 18th and 19th centuries, his reputation also spread abroad. Among those who championed him were the writers Voltaire, Johann Wolfgang Von Goethe, Stendhal and Victor Hugo.\n[…]\nOutline of William Shakespeare\n[…]\nWorks by William Shakespeare set to music: Scores at the International Music Score Library Project\n[…]\nShakespeare at Home an online resource providing free educational resources on William Shakespeare and the Renaissance world. Activities are dyslexia friendly and suitable for all ages."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/William_Shakespeare",
        "situacao": "ok",
        "texto": "William Shakespeare (Stratford-upon-Avon, 23 de abril de 1564 – Stratford-upon-Avon, 23 de abril de 1616) foi um poeta, dramaturgo e ator inglês. Foi tido como o maior escritor do idioma inglês e considerado por muitos o maior dramaturgo da história. É chamado frequentemente de poeta nacional da Inglaterra e de \"Bardo de Avon\" (ou simplesmente The Bard, \"O Bardo\").\n[…]\nShakespeare nasceu e foi criado em Stratford-upon-Avon, na era elizabetana, época especialmente estimulante para os artistas. Aos 18 anos casou-se com Anne Hathaway, com quem teve três filhos: Susanna e os gêmeos Hamnet e Judith. Entre 1585 e 1592 William começou uma carreira bem-sucedida em Londres como ator, escritor e um dos proprietários da companhia de teatro chamada Lord Chamberlain's Men, mais tarde conhecida como King's Men.\n[…]\nShakespeare era filho de John Shakespeare, um vereador e um bem-sucedido glover (fabricante de luvas) originário de Snitterfield, em Warwickshire, e de Mary Arden, filha de uma abastada família de proprietários de terras. Ele nasceu em Stratford-upon-Avon, onde foi batizado em 26 de abril de 1564. Sua data de nascimento é desconhecida, mas é tradicionalmente comemorada no dia 23 de abril, dia de São Jorge.\n[…]\nEsta está envolta em grande polémica, muito continua ainda por saber sobre William Shakespeare - quem foi, por onde andou ou com quem se dava. Não faltam teorias — uns dizem que era Francis Bacon, a Rainha Isabel I disfarçada e até um francês chamado Jacques Pierre. Mas, se não o virmos como tendo uma vida própria, a mais credível é que seria um pseudónimo de Christopher Marlowe.\n[…]\nLista de filmes baseados nas peças de Shakespeare\n[…]\nSexualidade de Shakespeare\n[…]\nReligião de Shakespeare\n[…]\nQuestão da autoria de Shakespeare\n[…]\n«Open Source Shakespeare» (em inglês)\n[…]\n«The Complete Works of William Shakespeare» (em inglês)\n[…]\nWilliam Shakespeare no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Otelo",
      "descricao": "Tragédia de William Shakespeare sobre um general mouro a serviço de Veneza, levado ao ciúme contra a esposa Desdêmona."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em Otelo, Iago chama o ciúme de monstro de olhos de que cor, expressão que virou proverbial em inglês?",
    "resposta": "Verdes",
    "distratores": [
      "Vermelhos",
      "Amarelos",
      "Negros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Othello"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Othello",
        "situacao": "ok",
        "texto": "The Tragedy of Othello, the Moor of Venice, often shortened to Othello, is a tragedy written by William Shakespeare around 1603. Set in Venice and Cyprus, the play depicts the Moorish military commander Othello as he is manipulated by his ensign, Iago, into suspecting his wife Desdemona of infidelity. Othello is widely considered one of Shakespeare's greatest works and is usually classified among \n[…]\nThe character's own motives are never made clear, because Iago himself expresses too many motives:\n[…]\nIn 1947, Kenneth Tynan saw Frederick Valk and Donald Wolfit play Othello and Iago respectively, and described the experience as equivalent to witnessing the Chicago Fire, the Quetta Earthquake or the Hiroshima Bomb.\n[…]\nThe film was a financial success, and earned Oscar nominations for each of Olivier as Othello, Maggie Smith as Desdemona, Frank Finlay as Iago and Joyce Redman as Emilia. Subsequent critics have been less sympathetic to Olivier's performance than his contemporary audience had been, tending to read it as racist. As Barbara Hodgdon expresses it: \"Olivier's Othello confirms an absolute fidelity to white stereotypes of blackness.\"\n[…]\nRoysten Abel's Othello - A Play in Black and White is set among a group of Indian actors rehearsing a Kathakali version of Othello whose own story begins to mirror the play's plot: with Iago's seduction of Othello played as a guru-disciple relationship.\n[…]\nOne of the first full-length plays to be released on vinyl was the Broadway production starring Paul Robeson, José Ferrer and Uta Hagen, issued in 1944. The Caedmon Records production featured Frank Silvera as Othello, Cyril Cusack as Iago, Anna Massey as Desdemona and Celia Johnson as Emilia, directed by Howard Sackler. An abridged version for the Living Shakespeare series starred John Gielgud as Othello, Ralph Richardson as Iago, Barbara Jefford as Desdemona and Coral Browne as Emilia."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Otelo%2C_o_Mouro_de_Veneza",
        "situacao": "ok",
        "texto": "Otelo, o Mouro de Veneza (no original, Othello, the Moor of Venice) é uma peça de teatro de William Shakespeare escrita por volta do ano 1603. A história gira em torno de quatro personagens: Otelo (um general mouro que serve o reino de Veneza), sua esposa Desdêmona, seu tenente Cássio, e seu sub-oficial Iago. Por causa dos seus temas variados — racismo, amor, ciúme e traição - continua a desempenh\n[…]\nEm Chipre, Iago, que odiava Otelo e Cássio, começou a semear a discórdia entre o casal, ou seja, concebeu um terrível plano de vingança que tinha como objetivo arruinar os seus inimigos. Hábil e profundo conhecedor da natureza humana, e sempre fazendo reflexões sobre a humanidade, Iago sabia que, de todos os tormentos que afligem a alma, o ciúme é o mais intolerável e incontrolável.\n[…]\nDando continuidade a seu plano, Iago insinuou a Otelo que Cássio e sua esposa poderiam estar tendo um caso. Esse plano foi tão bem traçado que Otelo começou a desconfiar de Desdêmona.\n[…]\nDepois Otelo, totalmente descontrolado, foi a procura de sua esposa acreditando que ela o havia traído e a asfixia em seu quarto. Após isso, Emília, esposa de Iago, sabendo que sua senhora fora assassinada, revelou a Otelo, Ludovico (parente de Brabantio) e Montano (governador de Chipre antes de Otelo) que tudo isso foi tramado por seu marido e que Desdêmona jamais fora infiel.\n[…]\nIago então mata Emília e foge, mas logo é capturado. Otelo, desesperado ao saber que matara sua amada esposa injustamente, apunhalou-se, caindo sobre o corpo de sua mulher e morreu beijando a quem tanto amara.\n[…]\nAo finalizar a tragédia Cassio passou a ocupar o lugar de Otelo, Iago foi entregue às autoridades para ser julgado e Graciano, uma vez que seu irmão Brabantio morrera, ficou com os bens do mouro.\n[…]\nTradução de Lawrence Flores Pereira: Otelo, prosa e versos dodecassílabos, Penguin-Companhia das Letras, 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Polichinelo",
      "descricao": "Personagem clássico da commedia dell'arte, de origem napolitana, com meia-máscara negra, traje branco e chapéu cônico."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Polichinelo vem do italiano Pulcinella, nome ligado à palavra pulcino. O que pulcino significa?",
    "resposta": "Pintinho",
    "distratores": [
      "Palhaço",
      "Pulga",
      "Porquinho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pulcinella"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pulcinella",
        "situacao": "ok",
        "texto": "Pulcinella (Italian: [pultʃiˈnɛlla]; Neapolitan: Pulecenella) is a classical character that originated in commedia dell'arte of the 17th century and became a stock character in Neapolitan puppetry. Pulcinella's versatility in status and attitude have helped maintain the character's popularity in various forms since his introduction to commedia dell'arte by Silvio Fiorillo in 1620.\n[…]\nA plausible theory derives his name from the diminutive (or combination with pollastrello 'rooster')) of Italian pulcino ('chick'), on account of his long beaklike nose, as theorized by music historian Francesco Saverio Quadrio, or due to the squeaky nasal voice and \"timorous impotence\" in its demeanor, according to Giuseppe (Joseph) Baretti.\n[…]\nIn Germany, this kind of Pulcinella-based puppet character came to be known as Kasper. Kasper is a cunning servant who solves the problems of all the masters he serves. He was less extreme than Mr. Punch, but offered the same kind of slapstick puppetry that audiences loved. This character became wildly popular throughout Europe. In the Netherlands, he is known as Jan Klaassen. In Denmark he is Mester Jakel. In Romania, he is Vasilache.\n[…]\nIn Hungary he is Paprika Jancsi (or Paprikajancsi) and in the 20th century Vitéz László. In France he remained Polichinelle. Polichinelles were featured as the children of Mother Ginger (la mère Gigogne) in The Nutcracker by Tchaikovsky.\n[…]\nRussian composer Igor Stravinsky was commissioned to compose two different ballets for the Ballets Russes that were inspired by variations of this character. Stravinsky's ballets were entitled Petrushka (1911), based on Russian 19th-century puppetry traditions celebrated at Shrovetide, and Pulcinella (1920), based on 18th-century Italian music (thought to be by Pergolesi) associated with a commedia dell'arte version.\n[…]\nMedia related to Pulcinella at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polichinelo",
        "situacao": "ok",
        "texto": "Polichinelo (em italiano:  Pulcinella) é uma antiga personagem-tipo e burlesca da commedia dell'arte, cujas raízes remontam ao teatro da Roma Antiga. Se caracteriza pelo nariz longo, cifose, grande barriga, barrete, roupa multicolorida e fala tremida e esganiçada.\n[…]\nPolichinelo resume em si mesmo a unidade dos contrários, com algumas versões de sua estória colocando-o até mesmo como hermafrodita ou filho de plebeu e nobre.\n[…]\nSegredo de Polichinelo é uma informação que devia ser secreta, mas que é do conhecimento geral.\n[…]\nOs personagens da Commedia dell'Arte foram ainda transportados para o teatro de marionetas, como foi o caso de Polichinelo, que, em Portugal, também teve o nome de D. Roberto:Podemos, sem grande margem de erro, afirmar que na Europa, o século XVII vê o teatro de marionetas expandir-se, tornando-se um espectáculo de grande aceitação popular.\n[…]\nTornadas marionetas, as personagens da Commedia dell'Arte obtém enorme aprovação popular e, ainda que concebidos em locais e momentos diferentes, mantiveram, até aos nossos dias, a sua existência e identidade de base. É a história do Pulcinella italiano que se tornou Polichinelo e Guignol (França), Punch e Judy (Inglaterra), Polichinelo, Kasperl (Alemanha e Áustria) que substitui o Tradicional Hanswurst \"João Salsicha\", Petrouchka (Rússia), Kasparek (Praga), Don Cristobal (Espanha) e D.\n[…]\nA personagem feminina da Commedia dell'Arte era a Colombina, que associada a Don Cristobal, o Polichinelo espanhol, oferecia uma ligação direta a Don Cristobal Colon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Édipo Rei",
      "descricao": "Tragédia de Sófocles sobre o rei de Tebas que descobre ter matado o pai e se casado com a mãe."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Ainda bebê, Édipo foi abandonado com os tornozelos furados. Por isso, o que significa o nome dele em grego?",
    "resposta": "Pés inchados",
    "distratores": [
      "Olhos cegos",
      "Mãos atadas",
      "Filho do rei"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Oedipus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oedipus",
        "situacao": "ok",
        "texto": "Oedipus (UK: , also US:  ; Ancient Greek: Οἰδίπους Oidípous, lit. 'swollen foot') was a mythical Greek king of Thebes. A tragic hero in Greek mythology, Oedipus unwittingly fulfilled a prophecy that he would end up killing his father and marrying his mother, thereby bringing disaster to his city and family. The story of Oedipus is the subject of Sophocles's tragedy Oedipus Rex, which is followed i\n[…]\nOedipus was the son of Laius and Jocasta, king and queen of Thebes. Having been childless for some time, Laius consulted the Oracle of Apollo at Delphi. The Oracle prophesied that any son born to Laius would kill him. In an attempt to prevent this prophecy's fulfillment, when Jocasta indeed bore a son, Laius had his son's ankles pierced and tethered together so that he could not crawl; Jocasta then gave the boy to a servant to abandon (\"expose\") on the nearby mountain.\n[…]\nOedipus was a figure who was also used in the Latin literature of ancient Rome. Julius Caesar wrote a play on Oedipus, but it has not survived into modern times. Ovid included Oedipus in Metamorphoses, but only as the person who defeated the Sphinx. He makes no mention of Oedipus's troubled experiences with his father and mother. Seneca the Younger wrote his own play on the story of Oedipus in the first century AD. It differs in significant ways from the work of Sophocles.\n[…]\nDallas, Ian, Oedipus and Dionysus, Freiburg Press, Granada 1991. ISBN 1-874216-02-9.\n[…]\nLowell, Edmunds, Oedipus. (Gods and Heroes of the Ancient World), London/New York:  Routledge, 2006. ISBN 978-0-415-32935-4.\n[…]\nGaillard, T. Tony, Transgenerational Healing of Oedipus at Colonus, Genesis Editions (2020), Geneva, ISBN 9782940540358, Excerpt on academia.edu Archived 18 August 2022 at the Wayback Machine\n[…]\nLewis E 164 Oedipi et Sphingis dialogus (Dialogues between Oedipus and the Sphinx) at OPenn"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%89dipo",
        "situacao": "ok",
        "texto": "Édipo (em grego clássico: Οἰδίπους; romaniz.: Oidípous, \"pés inchados\") é um herói da mitologia grega que matou o pai, resolveu o enigma da esfinge que atacava a cidade grega de Tebas, e desposou a mãe. Em função deste incesto, foi ao mesmo tempo pai e irmão de Etéocles, Ismênia, Antígona e de Polinices.\n[…]\nÉdipo é a personagem central da tragédia grega Édipo Rei, escrita pelo dramaturgo Sófocles (496 a.C. - 406 a.C.), como parte de uma trilogia que contém ainda os dramas Antígona e Édipo em Colono.\n[…]\nAterrorizados e querendo frustrar a profecia, Laio e Jocasta resolveram encarregar um servo de deixar o filho na encosta da montanha de Cinterão, com os pés amarrados e trespaçados por uma correia na altura dos tornozelos, para ser devorado pelos lobos. O servo, no entanto, apiedou-se do bebê e o entregou a um pastor que levou a criança para a cidade de Corinto. Ao chegar, Édipo foi recebido e adotado pelo rei Pólibo, pois a rainha Mérope havia recentemente gerado um natimorto.\n[…]\nÉdipo cresce como príncipe em Corinto, acreditando ser um filho legítimo.\n[…]\nAo chegar a Tebas, Édipo soube que o rei da cidade havia sido morto recentemente e que a cidade estava à mercê da Esfinge, um monstro que devorava todos os que não resolvessem seu enigma. Édipo respondeu corretamente às duas questões propostas pela Esfinge e assim a derrotou. Por esse feito, conquistou o trono do rei morto, fazendo jus a casar-se com sua viúva.\n[…]\nEsta passagem do mito é o mais conhecido, mas a vida de Édipo segue em frente, com ele tornando-se um mendigo e esmolando por Tebas, guiado por sua filha Antígona. Mais tarde o cego assiste os filhos Etéocles e Polinices brigarem pelo trono das duas cidades, Tebas e Corinto.\n[…]\nComplexo de Édipo\n[…]\nKury, Mario da Gama (1999). «Édipo». Dicionário da Mitologia Grega e Romana. São Paulo: Zahar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Lisístrata",
      "descricao": "Comédia grega de 411 a.C. em que as mulheres fazem greve de sexo para acabar com a Guerra do Peloponeso."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Lisístrata, heroína de Aristófanes que lidera a greve das mulheres, significa em grego aquela que faz o quê?",
    "resposta": "Dissolve exércitos",
    "distratores": [
      "Conquista cidades",
      "Governa os homens",
      "Seduz soldados"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lysistrata"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lysistrata",
        "situacao": "ok",
        "texto": "Lysistrata ( or ; Attic Greek: Λυσιστράτη, Lysistrátē, lit. 'army disbander') is an ancient Greek comedy by Aristophanes, first staged in early 411 BCE at Lenaea festival in classical Athens. The play is a comic account of a woman's – Lysistrata's – mission to end the Peloponnesian War between Greek city states by denying sex to all the men of the warring parties and occupying the Acropolis of Ath\n[…]\nPeisander: An Athenian aristocrat and oligarch, he is mentioned here by Lysistrata as typical of a corrupt politician exploiting the war for personal gain. He was previously mentioned in Peace and The Birds\n[…]\nLysistrata belongs to the middle period of Aristophanes's career when he was beginning to diverge significantly from the conventions of Old Comedy. Such variations from convention include:\n[…]\nAgon: The plays of Aristophanes contain formal disputes or agons that are constructed for rhetorical effect. Lysistrata's debate with the proboulos (magistrate) is an unusual agon in that one character (Lysistrata) does a majority of the talking, while the antagonist's dialogue (the magistrate) is reserved for questions or expressions of emotion. The informality of the agon draws attention to the absurdity of a classical woman engaging in public debate.\n[…]\n1982: Utopia's album Swing to the Right featured an anti-war song entitled \"Lysistrata\" that loosely paraphrases the content of the drama as dialogue between the song's protagonist and his female significant other.\n[…]\n2016: Animator Richard Williams's Oscar-nominated short film, Prologue, is \"the first part of a feature film loosely based on Aristophanes's anti-war play Lysistrata.\"\n[…]\nAristophanes (1973). The Acharnians: And The Clouds and Lysistrata. Translated by Sommerstein, Alan H. Penguin. ISBN 978-0-14-044287-8.\n[…]\nLysistrata public domain audiobook at LibriVox\n[…]\nLysistrata audiobook – Listen to streaming audio online and download in MP3 format"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lis%C3%ADstrata",
        "situacao": "ok",
        "texto": "Lisístrata (em grego ático: Λυσιστράτη \"que dissolve o exército\") é uma comédia famosa de Aristófanes. Escrita e encenada na Atenas clássica em 411 a.C., provavelmente nas Lenéias, um dos festivais anuais atenienses sagrados em homenagem ao deus Dioníso. Nessas festas, além dos rituais de homenagem a Dioníso, havia também dias reservados para as competições de tragédias e comédias. As obras teatra\n[…]\nA peça Lisístrata é um relato cômico sobre as mulheres gregas, lideradas por Lisístrata, uma personagem feminina de caráter forte. Essas mulheres fartas da guerra entre Atenas e Esparta trancam-se num templo e decidem por votação deflagrar uma greve sexual para forçar uma negociação de paz, uma estratégia ousada para acabar com a Guerra do Peloponeso, mas que, no entanto, provoca uma batalha entre os sexos. Segundo Aristófanes, em sua obra, Lisístrata.\n[…]\nA peça se inicia com Lisístrata (Dissolvetropa), uma mulher ateniense, convocando outras mulheres Atenienses e de outras cidades, inclusive de Esparta para discutir uma questão importante. Devido a Guerra do Peloponeso os homens das cidades pólos estão completamente envolvidos no exército, não tendo mais tempo para suas famílias.\n[…]\nPressionados, os atenienses procuraram reconstruir seus exércitos com os fundos de reserva para guerra estocados na Acrópole, local ocupado por Lisístrata e as demais mulheres na peça. Dentro deste cenário de batalha e corrupção, Aristófanes foi o maior relator deste período através de suas comédias, Lisístrata e As Tesmoforiantes.\n[…]\nARISTÓFANES. Lísistrata: a greve do sexo,. Tradução de Millôr Fernandes. Porto Alegre: L&PM Pocket, 2003.\n[…]\nARISTÓFANES. Lisístrata ou a greve do sexo. Tradução de Antonio Medina Rodrigues. Adaptação de Anna Flora. São Paulo: Editora 34, 2002.\n[…]\nARISTÓFANES. A Greve do Sexo (Lisístrata) / A Revolução das Mulheres. Tradução de Mário da Gama Kury. Rio de Janeiro: Jorge Zahar, 1996.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Nelson Rodrigues",
      "descricao": "Dramaturgo, jornalista e cronista brasileiro (1912–1980), autor de Vestido de Noiva."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Que apelido de Nelson Rodrigues virou o título da biografia do dramaturgo escrita por Ruy Castro?",
    "resposta": "O Anjo Pornográfico",
    "distratores": [
      "O Velho Safado",
      "O Bruxo do Cosme Velho",
      "O Poeta da Vila"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Nelson_Rodrigues"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Nelson_Rodrigues",
        "situacao": "ok",
        "texto": "Nelson Falcão Rodrigues (Recife, 23 de agosto de 1912 – Rio de Janeiro, 21 de dezembro de 1980) foi um escritor, jornalista, romancista, teatrólogo, contista e cronista de costumes e de futebol brasileiro. É considerado o mais influente dramaturgo do Brasil.\n[…]\nEm fevereiro de 1946, o texto da peça foi submetido à Censura Federal e proibido. Álbum de família só seria liberada em 1965. Em abril de 1948 estreou Anjo negro, peça que possibilitou a Nelson adquirir uma casa no bairro do Andaraí e em 1949 Nelson lançou Doroteia.\n[…]\nSendo esteticamente realista em pleno Modernismo, Nelson não deixou de inovar tal como fizeram os modernos. O autor transpôs a tragédia grega para a sociedade carioca do início do século XX, e dessa transposição surgiu a \"tragédia carioca\", com as mesmas regras daquela, mas com um tom contemporâneo. O erotismo está muito presente na obra de Nelson Rodrigues, o que lhe garante o título de realista. Nelson não hesitou em denunciar a sordidez da sociedade tal como o fez Eça de Queirós em suas obras.\n[…]\nEsse erotismo realista de Nelson teve sua gênese em obras do século XIX, como \"O Primo Basílio\", e se desenvolveu grandemente na obra do autor pernambucano. Em síntese, Nelson foi um grande escritor, dramaturgo e cronista, e está imortalizado na literatura brasileira.\n[…]\nBoa parte dos registros fotográficos de peças do dramaturgo existentes no Cedoc foram feitos pelo Estúdio Foto Carlos nas décadas de 40 a 80 e foram digitalizados graças ao projeto Brasil Memória das Artes, incluindo registros de raridades, como uma participação de Nelson Rodrigues como ator. No Portal da Funarte ainda é possível ver vídeos produzidos sobre o dramaturgo e sua obra.\n[…]\nAnjo Negro - 1947 - Direção: Zbigniew Ziembiński\n[…]\nBiografia do autor."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "A Cantora Careca",
      "descricao": "Peça de Eugène Ionesco, estreada em Paris em 1950, marco do teatro do absurdo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O título A Cantora Careca, de Eugène Ionesco, nasceu por acaso. De onde ele veio?",
    "resposta": "De um erro num ensaio",
    "distratores": [
      "De um sonho",
      "De uma manchete",
      "De uma vizinha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Bald_Soprano"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Bald_Soprano",
        "situacao": "ok",
        "texto": "La Cantatrice chauve  – translated from French as The Bald Soprano or The Bald Prima Donna – is the first play written by Romanian-French playwright Eugène Ionesco.\n[…]\nThe idea for the play came to Ionesco while he was trying to learn English with the Assimil method. Impressed by the contents of the dialogues, often very sober and strange, he decided to write an absurd play named L'anglais sans peine (\"English without toil\"). Other possible titles which were considered included Il pleut des chiens et des chats, (\"It's raining cats and dogs\", translated in French literally); \"L'heure anglaise\" and \"Big Ben Follies\".\n[…]\nIts actual title was the result of an error in rehearsal by actor Henri-Jacques Huet: the fire chief's monologue initially included a mention of \"l'institutrice blonde\" (\"the blonde schoolteacher\"), but Huet said \"la cantatrice chauve\", and Ionesco, who was present, decided to re-use the phrase.\n[…]\nThere was speculation that it was parody around the time of its first performance, but Ionesco states in an essay written to his critics that he had no intention of parody, but if he were parodying anything, it would be everything.\n[…]\nAccording to Ionesco, he had several possible endings in mind, including a climax in which the \"author\" or \"manager\" antagonizes the audience, and even a version in which the audience is shot with machine guns. However, he ultimately settled for a cheaper solution, the cycle. Ionesco told Claude Bonnefoy in an interview, \"I wanted to give a meaning to the play by having it begin all over again with two characters."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Turandot",
      "descricao": "Última ópera de Giacomo Puccini, estreada no Teatro alla Scala em 1926."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Na estreia de Turandot, em 1926, o maestro Toscanini parou a orquestra no meio do terceiro ato. Por quê?",
    "resposta": "Puccini morreu sem concluí-la",
    "distratores": [
      "Houve tumulto na plateia",
      "A soprano desmaiou",
      "Faltou luz"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Turandot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Turandot",
        "situacao": "ok",
        "texto": "Turandot (Italian pronunciation: [turanˈdo] or [turanˈdɔt] ; see below) is an opera in three acts by Giacomo Puccini to a libretto in Italian by Giuseppe Adami and Renato Simoni. Puccini died in 1924, and his opera was left unfinished. The music was completed by Franco Alfano  and premiered on 25 April 1926, almost a year and a half after Puccini's death.\n[…]\nIt was Schiller's version that inspired Puccini to write the opera.\n[…]\nPuccini seems to have had some inkling of the seriousness of his condition: before leaving for Brussels for treatment, he visited Arturo Toscanini and begged him, \"Don't let my Turandot die.\" He died of a heart attack on 29 November 1924.\n[…]\nRicordi's real concern was not the quality of Alfano's work; he wanted the end of Turandot to sound as if it had been written by Puccini. Of this version, about three minutes were cut for performance by Toscanini, and it is this shortened version that is usually performed today.\n[…]\nTurandot premiered at the La Scala opera house in Milan, Italy, on 25 April 1926, a year and five months after Puccini's death. Rosa Raisa played Turandot. Tenors Miguel Fleta and Franco Lo Giudice alternated in the role of Prince Calaf, with Fleta singing the role on opening night. It was conducted by Arturo Toscanini. In the middle of act 3, the orchestra stopped playing. Toscanini turned to the audience and announced, \"Qui finisce l'opera, perché a questo punto il maestro è morto\" (transl.\n[…]\nOthers have reported that Toscanini said, \"Here, the Maestro laid down his pen.\" A newspaper report from 1926 states that Puccini asked Toscanini to stop the opera performance in the middle of act 3. The second and subsequent performances of the 1926 La Scala season included Alfano's ending.\n[…]\nMedia related to Turandot (Puccini) at Wikimedia Commons\n[…]\nTurandot: Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Turandot",
        "situacao": "ok",
        "texto": "Turandot, última ópera de Giacomo Puccini, composta em três atos, com libreto de Giuseppe Adami e Renato Simoni,  baseado numa peça (1762) de Carlo Gozzi com a adaptação de Friedrich von Schiller. Estreou no Teatro alla Scala em Milão em 25 de abril de 1926, sob a regência de Arturo Toscanini. Esta ópera ficou inacabada por causa da morte do autor, a 29 de novembro de 1924, sendo completada por Fr\n[…]\nArturo Toscanini não gostou do final que Franco Alfano deu à ópera de Puccini; por isso, na cena de morte de Liù, virou-se para a plateia e disse: \"Senhoras e Senhores, aqui parou Giacomo Puccini\".\n[…]\nHarold S. Powers, Le quattro tinte della Turandot, in: Virgilio Bernardoni (ed.), Puccini, Bologna (Il Mulino), 1996, pp. 245–286.\n[…]\nPeter Revers, Analytische Betrachtungen zu Puccinis Turandot, in: Österreichische Musikzeitschrift 34/1979, pp. 342–351.\n[…]\nMichael Saffle, 'Exotic' Harmony in La Fanciulla del West and Turandot, in: Jürgen Maehder (ed.), Esotismo e colore locale nell'opera di Puccini, Pisa (Giardini), 1985, pp. 119–130.\n[…]\nArman Schwarz, Mechanism and Tradition in Puccini's Turandot, in: The Opera Quarterly 25/2009, pp. 28–50.\n[…]\nLynn Snook, « In Search of the Riddle Princess Turandot », in: Jürgen Maehder (ed.), Esotismo e colore locale nell'opera di Puccini, Pisa (Giardini), 1985, pp. 131–142.\n[…]\nIvanka Stoïanova, Remarques sur l'actualité de »Turandot«, in: Jürgen Maehder (ed.), Esotismo e colore locale nell'opera di Puccini, Pisa (Giardini), 1985, pp. 199–210.\n[…]\nMarco Uvietta, »È l'ora della prova': un finale Puccini-Berio per Turandot, in: Studi musicali 31/2002, pp. 395–479 ; English translation: »È l'ora della prova«: Berio's finale for Puccini's »Turandot«, in: Cambridge Opera Journal 16/2004, pp. 187–238.\n[…]\nWolfgang Volpers, Giacomo Puccinis Turandot;  Publikationen der Hochschule für Musik und Theater Hannover, vol. 5, Laaber (Laaber), 1994.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Andrea Bocelli",
      "descricao": "Tenor italiano de ópera e música pop, famoso desde 1994."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Andrea Bocelli, que nasceu com glaucoma, ficou totalmente cego aos doze anos depois de quê?",
    "resposta": "Uma bolada no futebol",
    "distratores": [
      "Acidente de carro",
      "Queda de cavalo",
      "Uma cirurgia malsucedida"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Andrea_Bocelli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andrea_Bocelli",
        "situacao": "ok",
        "texto": "Andrea Bocelli (Italian: [anˈdrɛːa boˈtʃɛlli]; born 22 September 1958) is an Italian tenor. He rose to fame in 1994 after winning the newcomers' section of the 44th Sanremo Music Festival performing \"Il mare calmo della sera\".\n[…]\nAndrea Bocelli was born to Alessandro and Edi Bocelli on 22 September 1958. His sight was impaired from birth due to congenital glaucoma. He stated that his mother's decision to give birth to him and overrule the doctor's advice - to abort the pregnancy due to a high possibility of the child being born with a disability - was the inspiration for him to oppose abortion.\n[…]\n\"Art, Science and Peace Prize\" 2015 from PIER FRANCO MARCENARO founder of \"Man Center\" and \"School of Spirituality\" for Andrea Bocelli art which elevates the spirit.\n[…]\nOn 30 April 2000, Bocelli's father, Alessandro Bocelli, died. His mother encouraged him to honor his commitments, and so he sang for Pope John Paul II, in Rome, on 1 May, and immediately returned home for the funeral. At his 5 July performance, filmed for PBS as American Dream—Andrea Bocelli's Statue of Liberty Concert, Bocelli dedicated the encore Sogno (Dream), from his 1999 album Sogno, to the memory of his father.\n[…]\nAndrea (2004)\n[…]\nBocelli, A. (2002) [1999]. The music of silence: a memoir by Andrea Bocelli. New York: HarperCollins. OCLC 54699002. Braille edition, ISBN not available.\n[…]\nBocelli, A. (2007). Andrea Bocelli – Amore. Milwaukee, WI: Hal Leonard Corp. ISBN 978-88-507-0992-2.\n[…]\nBocelli, A. (2011). The Music of Silence; New Edition. Milwaukee, WI: Hal Leonard Corp. ISBN 978-1-57467-197-1.\n[…]\nFelix, Antonia. Andrea Bocelli: A Celebration. New York: St. Martin's Press, 2000. ISBN 0-3122-5309-5.\n[…]\nAndrea Bocelli discography at Discogs\n[…]\nAndrea Bocelli at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andrea_Bocelli",
        "situacao": "ok",
        "texto": "Andrea Bocelli OMRI  (Lajatico, 22 de setembro de 1958) é um tenor, compositor e produtor musical italiano. Vencedor de cinco BRIT Awards e três Grammys, Bocelli gravou nove óperas completas (entre as quais: La bohème, Il trovatore, Werther e Tosca), além de vários álbuns clássicos e populares, tendo vendido mais de 70 milhões de cópias em todo o mundo.\n[…]\nAndrea Bocelli nasceu na cidade de Lajatico em 1958. Filho de Alessandro e Edi Bocelli, Andrea cresceu na fazenda da família, a cerca de 40 km da cidade de Pisa.\n[…]\nAos seis anos de idade, iniciou aulas de piano e depois de flauta, saxofone, trompete, harpa, violão e bateria. Andrea Bocelli nasceu com glaucoma congênito que o deixou parcialmente cego. Com 12 anos, durante uma partida de futebol levou um golpe na cabeça que fez com que sua cegueira fosse total. Na infância, Andrea tocava órgão na igreja que se situava próxima à casa, onde ia todos os domingos com a avó.\n[…]\nO ídolo de infância era Eusébio da Silva Ferreira, jogador de futebol português. Quando Andrea Bocelli se tornou famoso, foi Eusébio que o quis conhecer e as posições trocaram-se.\n[…]\nEm 14 de setembro, em Munique, Bocelli recebeu o Prêmio ECHO de \"Álbum Mais Vendido do Ano\" por Viaggio Italiano.\n[…]\nNão se limitando só a cantar, Andrea contribuiu para vários trabalhos escritos, incluindo  pequeno texto sobre amizade em compilação feita por Doris S. Platt e o prefácio e um \"capítulo-entrevista\" para um livro italiano sobre guarda conjunta. Ele também escreveu uma autobiografia, La musica del silenzio (A música do silêncio), que foi publicada em 1999. A tradução inglesa do livro foi lançada no ano seguinte, com o nome Andrea Bocelli: The Autobiography (Andrea Bocelli: A Autobiografia).\n[…]\nSeção Bocelli em ClassicalX\n[…]\nPáginas Bocelli em Music City\n[…]\nEntrevista com Andrea Bocelli em um Podcast",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Molière",
      "descricao": "Dramaturgo e ator francês do século dezessete, autor de Tartufo e O Avarento."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Na França, muitos atores evitam usar certa cor no palco, porque Molière teria morrido vestido com ela. Que cor?",
    "resposta": "Verde",
    "distratores": [
      "Vermelho",
      "Preto",
      "Azul"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Moli%C3%A8re"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moli%C3%A8re",
        "situacao": "ok",
        "texto": "Jean-Baptiste Poquelin (French pronunciation: [ʒɑ̃ batist pɔklɛ̃]; 15 January 1622 (baptised) – 17 February 1673), known by his stage name Molière (UK: , US: ; French: [mɔljɛʁ] ), was a French playwright, actor, and poet, widely regarded as one of the great writers in the French language and world literature. His extant works include comedies, farces, tragicomedies, comédie-ballets, and more.\n[…]\nMolière was born in Paris shortly before his christening as Jean Poquelin on 15 January 1622. Known as Jean-Baptiste, he was the first son of Jean Poquelin and Marie Cressé, who had married on 27 April 1621. His mother was the daughter of a prosperous bourgeois family. Upon seeing him for the first time, a maid exclaimed, \"Le nez!\", a reference to the infant's large nose. Molière was called \"Le Nez\" by his family from that time.\n[…]\nMolière is often associated with the claim that comedy castigat ridendo mores or \"criticises customs through humour\" (a phrase in fact coined by his contemporary Jean de Santeuil and sometimes mistaken for a classical Latin proverb).\n[…]\nMolière's friendship with Jean-Baptiste Lully influenced him towards writing his Le Mariage forcé and La Princesse d'Élide (subtitled as Comédie galante mêlée de musique et d'entrées de ballet), written for Les Plaisirs de l'Isle enchantée, royal \"divertissements\", at the Palace of Versailles.\n[…]\nMolière also collaborated with Jean-Baptiste Lully. Lully was a dancer, choreographer, and composer, whose dominant reign at the Paris Opéra lasted 15 years. Under his command, ballet and opera rightly became professional arts unto themselves.\n[…]\nThe 2000 film Le Roi Danse (The King Dances), in which Molière is played by Tchéky Karyo, shows his collaborations with Jean-Baptiste Lully, as well as his illness and on-stage death.\n[…]\nThe Comédie Française Registers a database of over 34,000 performances from 1680 to 1791"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moli%C3%A8re",
        "situacao": "ok",
        "texto": "Jean-Baptiste Poquelin, mais conhecido como Molière (Paris, 15 de janeiro de 1622 — Paris, 17 de fevereiro de 1673), foi um dramaturgo, ator e encenador francês, considerado um dos mestres da comédia satírica.\n[…]\nO Rei, ainda assim, mantendo o seu apoio a Molière, torna-se o patrocinador oficial da companhia, concedendo-lhe £ 6 000,00 de pensão.\n[…]\nA amizade que estabelecera com Jean Baptiste Lully levou-o a escrever Le Mariage forcé (\"O Casamento Forçado\", de 1664) e La Princesse d'Élide (\"A Princesa Élida\", com o subtítulo \"Comédie galante mêlée de musique et d'entrées de ballet\" - \"Comédia galante com música e números de dança\"), apresentadas nos \"divertissements\" de Versalhes.\n[…]\nUm dos mais famosos momentos da biografia de Molière é a sua morte, que se tornou numa referência no meio teatral. É dito que morreu no palco, representando o papel principal da sua última peça. De facto, apenas desmaiou aí, tendo morrido horas mais tarde em sua casa, sem tomar os sacramentos já que dois padres se recusaram a dar-lhe a última visita, e o terceiro já chegou tarde. Diz-se que estava vestido de amarelo, o que gerou a superstição de que esta cor é fatídica para os actores.\n[…]\nEm 17 de janeiro de 1673, enquanto representava no palco o protagonista de sua última obra, Le Malade imaginaire (O doente imaginário), Molière sofreu uma repentina crise de tosse e morreu poucas horas depois, em sua casa de Paris. Como se assinalou com frequência, não é de estranhar que o mestre do duplo sentido e da dissimulação tenha encerrado a vida e a carreira no momento em que encarnava um falso doente.\n[…]\nObras de Molière\n[…]\nAs obras de Molière online\n[…]\nBiblioweb.org/-Molière-\n[…]\nMolière no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Ésquilo",
      "descricao": "Dramaturgo ateniense do século cinco a.C., considerado o pai da tragédia grega."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo uma lenda antiga, Ésquilo morreu atingido na cabeça por algo que uma águia deixou cair. O quê?",
    "resposta": "Uma tartaruga",
    "distratores": [
      "Uma pedra",
      "Um peixe",
      "Uma cobra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aeschylus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aeschylus",
        "situacao": "ok",
        "texto": "Aeschylus (UK: , US: ; Ancient Greek: Αἰσχύλος Aischýlos; c. 525/524 – c. 456/455 BC) was an ancient Greek tragedian, often described as the father of tragedy. Academic knowledge of the genre begins with his work, and understanding of earlier Greek tragedy is largely based on inferences made from reading his surviving plays. According to Aristotle, he expanded the number of characters in the theat\n[…]\nMurray, Gilbert (1978). Aeschylus: The Creator of Tragedy. Oxford: Clarendon Press.\n[…]\nZeitlin, Froma (1996). \"The politics of Eros in the Danaid trilogy of Aeschylus\", in Froma Zeitlin, Playing the Other: Gender and Society in Classical Greek Literature. Chicago: University of Chicago Press. pp. 123–171.\n[…]\nWorks by Aeschylus at Project Gutenberg\n[…]\nWorks by Aeschylus in eBook form at Standard Ebooks\n[…]\nWorks by Aeschylus (translated by George Gilbert Aimé) at Faded Page (Canada)\n[…]\nWorks by or about Aeschylus at the Internet Archive\n[…]\nWorks by Aeschylus at LibriVox (public domain audiobooks)\n[…]\nSelected Poems of Aeschylus\n[…]\nAeschylus-related materials at the Perseus Digital Library\n[…]\nOnline English Translations of Aeschylus\n[…]\nCrane, Gregory. \"Aeschylus (4)\". Perseus Encyclopedia.\n[…]\n\"Aeschylus, I: Persians\" from the Loeb Classical Library, Harvard University Press\n[…]\n\"Aeschylus, II: The Oresteia\" from the Loeb Classical Library, Harvard University Press\n[…]\n\"Aeschylus, III: Fragments\" from the Loeb Classical Library, Harvard University Press\n[…]\nAischylou Tragodiai 'epta, Prometheus desmotes, 'Epta epithebais, Persai, Agamemnon, Choephoroi, Eu menides, Iketides. Skolia eis tas autas tragodias = Aeschyli tragodiae VII. Quae cum omnes multo quam antea castigatiores eduntur, tum vero vna, quae mutila & decurtata prius erat, integra nunc profertur. Scholia in easdem, plurimis in locis locupletata, & in pene infinitis emendata. Petri Victorii cvra et diligentia, [Geneva], ex officina Henrici Stephani, MDLVII [1557],  [4] f., 395 p."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%89squilo",
        "situacao": "ok",
        "texto": "Ésquilo (em grego: Αἰσχύλος; romaniz.: Aiskhýlos; Elêusis, c. 525/524 a.C. – Gela, 456/455 a.C.) foi um dramaturgo da Grécia Antiga. É reconhecido frequentemente como o pai da tragédia, e é o mais antigo dos três trágicos gregos cujas peças ainda existem (os outros são Sófocles e Eurípedes). De acordo com Aristóteles, Ésquilo aumentou o número de personagens usados nas peças para permitir conflito\n[…]\nSobre sua morte, reza a lenda que, ao visitar Gela, na ilha da Sicília, uma ave de rapina (possivelmente uma águia ou um abutre-barbudo, também conhecido por quebra-ossos), confundindo sua careca com uma rocha, deixou cair um casco de tartaruga em sua cabeça, matando-o (o abutre-barbudo é conhecido por jogar ossos em cima de rochas para quebrá-los, e assim, retirar facilmente o tutano).\n[…]\nA mesma lenda conta ainda que este \"momento surreal\" tem um toque de ironia: Ésquilo estava passeando ao ar livre justamente porque havia ouvido, em uma profecia, que o teto de uma casa cairia em sua cabeça – e apostou que, do lado de fora, escaparia do destino trágico.\n[…]\nretornou à Sicília pela última vez, visitando a cidade de Gela, onde veio a morrer em 456 ou 455. Alega-se que teria sido morto por um casco de tartaruga, derrubado das alturas sobre sua cabeça por uma águia ou um abutre. Porém, a história é provavelmente apócrifa. A obra de Ésquilo era tão respeitada pelos atenienses que, após sua morte, suas tragédias passaram a ser as únicas a poderem ser reencenadas nas edições seguintes das competições teatrais da cidade.\n[…]\nA primeira competição da qual Ésquilo teria participado reuniu três autores que apresentaram três tragédias cada um, seguidas por uma pequena peça satírica. Seguia-se uma segunda competição de cinco dramaturgos cômicos, e os vencedores de ambas as competições eram escolhidos por um corpo de jurados.\n[…]\n«Ésquilo». no Portal Graecia Antiqua\n[…]\nObras de Ésquilo no Project Gutenberg USA",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "La Fenice",
      "descricao": "Teatro de ópera de Veneza, inaugurado em 1792 e reconstruído após incêndios, o último em 1996."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O incêndio que destruiu o teatro La Fenice, em Veneza, em 1996, foi criminoso. Quem pôs fogo no teatro?",
    "resposta": "Eletricistas da reforma",
    "distratores": [
      "A máfia siciliana",
      "Um tenor demitido",
      "Um fã ciumento"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Fenice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Fenice",
        "situacao": "ok",
        "texto": "Teatro La Fenice (pronounced [teˈaːtro la feˈniːtʃe]; \"The Phoenix Theatre\") is a historic opera house in Venice, Italy. It is one of \"the most famous and renowned landmarks in the history of Italian theatre\" and in the history of opera as a whole. Especially in the 19th century, La Fenice became the site of many famous operatic premieres at which several works by the four major bel canto era comp\n[…]\nAt the beginning of the 19th century, La Fenice acquired a European reputation. Rossini mounted two major productions there: Tancredi in  1813 and Semiramide in 1823. Two of Bellini's operas were given their premieres there: I Capuleti e i Montecchi in March 1830 and Beatrice di Tenda in March 1833. Donizetti, fresh from his triumphs at La Scala in Milan and at the Teatro di San Carlo in Naples, returned to Venice in 1836 with his Belisario, after an absence of seventeen years.\n[…]\nOn 29 January 1996, La Fenice was completely destroyed by fire. Only its acoustics were preserved, since Lamberto Tronchin, an Italian acoustician, had measured the acoustics two months earlier.\n[…]\n\"As it was, where it was\", the motto for reconstruction of La Fenice, called for the opera house to be rebuilt as it was before the 1996 fire.\n[…]\nBerendt, John, The City of Falling Angels, New York: The Penguin Press, 2005 ISBN 1-59420-058-0. The book centres on the fire that destroyed La Fenice for the second time and its aftermath.\n[…]\nRomanelli, Giandomenico et al (1997), Gran Teatro La Fenice, Cologne: Evergreen. ISBN 3-8228-7062-5\n[…]\nBellina, Annalaura; Girardi, Michele (2005). La Fenice 1792–1996: Theatre, Music and History. Marsilio. ISBN 978-8-83-178359-0.\n[…]\nLa Fenice website, teatrolafenice.it\n[…]\n\"Two jailed for La Fenice arson\" (BBC News)\n[…]\n\"Arsonist of La Fenice released after 16 months\", Corriere della Sera\n[…]\n\"Teatro la Fenice di Venezia: the long (and shamy) story of a reconstruction\", veniceword.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_La_Fenice",
        "situacao": "ok",
        "texto": "O Teatro La Fenice (em português \"A fênix\") é o principal teatro de ópera de Veneza, nordeste da Itália. Destruído várias vezes e reedificado, é sede de uma importante temporada operística e do festival internacional de música contemporânea.\n[…]\nFoi destruído em 13 de dezembro de 1836 por um incêndio, mas foi reconstruído logo em seguida, repetido o projeto original. Cem anos se passaram e em 1937 foi restaurado por Eugenio Miozzi.\n[…]\nA outra grande tragédia ocorreu em 29 de janeiro de 1996, quando o teatro foi completamente destruído por um incêndio provocado: as chamas foram induzidas por um eletricista, Enrico Carella, na tentativa de evitar punições contratuais por um atraso no serviço que lhe havia sido encomendado.\n[…]\nDepois de oito anos de obras, o teatro foi reinaugurado em 14 de dezembro de 2003 com um concerto dirigido por Riccardo Muti.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Don Giovanni",
      "descricao": "Ópera de Mozart, de 1787, sobre o sedutor Don Juan e seu criado Leporello."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No final de Don Giovanni, de Mozart, quem aceita o convite para jantar e arrasta o sedutor para o inferno?",
    "resposta": "A estátua do Comendador",
    "distratores": [
      "O diabo em pessoa",
      "O criado Leporello",
      "Dona Ana disfarçada"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Don_Giovanni"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Don_Giovanni",
        "situacao": "ok",
        "texto": "Don Giovanni (Italian pronunciation: [ˈdɔn dʒoˈvanni]; K. 527; full title: Il dissoluto punito, ossia il Don Giovanni, literally 'The Rake Punished, or Don Giovanni') is an opera in two acts with music by Wolfgang Amadeus Mozart to an Italian libretto by Lorenzo Da Ponte. Its subject is a centuries-old Spanish legend about a libertine, Don Juan, as told by playwright Tirso de Molina in his 1630 pl\n[…]\nDon Giovanni's chambers\n[…]\nSchneider, Magnus Tessing (2021). The Original Portrayal of Mozart's Don Giovanni. Routledge. doi:10.4324/9780429281709. ISBN 978-0-429-28170-9.\n[…]\nBaker, Even A. (1993): Alfred Roller's Production Of Mozart's Don Giovanni – A Break in the Scenic Traditions of the Vienna Court Opera. New York University.\n[…]\nDa Ponte, Lorenzo. Mozart's Don Giovanni. Dover Publications, New York, 1985. (reviewed in G. S. \"Untitled\". Music & Letters, vol 19, no. 2 (April 1938). pp. 216–218)\n[…]\nKaminsky, Peter (1996). \"How to Do things with Words and Music: Towards an Analysis of Selected ensembles in Mozart's Don Giovanni\". Theory and Practice. 21. Music Theory Society of New York State. ISSN 0741-6156. JSTOR 41054291.\n[…]\nNoske, F[rits] R[udolf] [in Dutch] (1970). \"Don Giovanni: Musical Affinities and Dramatic Structure\". Studia Musicologica Academiae Scientiarum Hungaricae. 12 (1/4). Akadémiai Kiadó: 167–203. doi:10.2307/901357. JSTOR 901357.; reprinted in Theatre Research viii (1973), 60–74 and in Noske, Frits (1977). The Signifier and the Signified: Studies in the Operas of Mozart and Verdi. Springer. pp. 39–75. ISBN 978-9024719952.\n[…]\nRushton, Julian G. (1981). W. A. Mozart: Don Giovanni\" Cambridge. (reviewed in Sternfeld, F. W. \"Untitled\". Music & Letters, vol. 65, no. 4 (October 1984) pp. 377–378)\n[…]\nDon Giovanni: Score and critical report (in German) in the Neue Mozart-Ausgabe\n[…]\n\"Work details of Don Giovanni and related arias K. 540a–c\", Köchel-Verzeichnis, International Mozarteum Foundation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Don_Giovanni",
        "situacao": "ok",
        "texto": "Don Giovanni (K. 527; título completo em italiano:  Il dissoluto punito, ossia il Don Giovanni, lit. O Libertino Punido, ou Don Giovanni) é uma ópera em dois atos com música do compositor austríaco Wolfgang Amadeus Mozart e libreto do autor italiano Lorenzo Da Ponte. Sua primeira apresentação foi realizada em Praga, no Teatro di Praga, especializado em ópera italiana (atualmente chamado de Teatro \n[…]\nSeu velho pai, o Comendador, sai também de dentro e bate-se com Don Giovanni; no duelo, o Comendador é morto de forma traiçoeira . Don Giovanni e Leporello fogem: Ana e seu noivo Don Otávio encontram o cadáver do Comendador.\n[…]\nDona Ana faz Don Otávio jurar . pelo seu amor por ela . que vingará a morte do comendador.\n[…]\nNo cemitério, para onde haviam fugido, Don Giovanni e Leporello contemplam a estátua do Comendador.\n[…]\nOuve-se de repente uma voz “do outro mundo”, a da estátua, que recrimina a conduta de Don Giovanni e promete vingança.\n[…]\nLeporello fica aterrorizado; mas Don Giovanni, impávido e audaz, convida a estátua a jantar com ele nessa noite. E o convite é aceito. Dona Ana roga ao seu prometido Otávio, que compreenda sua dor pela morte do pai e concorde em adiar a boda. Está Don Giovanni jantando alegremente em sua casa, enquanto uns músicos e algumas mulheres amenizam o ambiente.\n[…]\nE o mesmo sucede com Leporello quando sai a ver o que se passa: é a estátua do Comendador, disposta a cumprir o convite que lhe fez Don Giovanni.\n[…]\nO Comendador entra e diz a Don Giovanni que se arrependa, sem consegui-lo; então dá-lhe a mão e arrasta-o consigo até às chamas do inferno, enquanto se ouve um invisível coro de demónios.\n[…]\nEntram no castelo Dona Elvira, Dona Ana, Don Otávio, Zerlina e Masetto, todos com a ideia de vingança, mas Leporello diz-lhes que o Comendador se antecipou.\n[…]\nLibreto Bilíngue de Don Giovanni, na tradução de Irineu Franco Perpétuo\n[…]\nAula de Alexandre Innecco: para gostar de Don Giovanni.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Ópera Garnier",
      "descricao": "Teatro de ópera de Paris, projetado por Charles Garnier e inaugurado em 1875."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em 1964, que pintor modernista de origem russa pintou o novo teto da sala de espetáculos da Ópera Garnier, em Paris?",
    "resposta": "Marc Chagall",
    "distratores": [
      "Pablo Picasso",
      "Henri Matisse",
      "Wassily Kandinsky"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Palais_Garnier"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Palais_Garnier",
        "situacao": "ok",
        "texto": "The Palais Garnier (French: [palɛ ɡaʁnje] , \"Garnier Palace\"), also known as Opéra Garnier (French: [ɔpeʁa ɡaʁnje] , \"Garnier Opera\"), is a historic 1,979-seat opera house at the Place de l'Opéra in the 9th arrondissement of Paris, France. It was built for the Paris Opera from 1861 to 1875 at the behest of Emperor Napoleon III.\n[…]\nInitially referred to as le nouvel Opéra de Paris (the new Paris Opera), it soon became known as the Palais Garnier, \"in acknowledgment of its extraordinary opulence\" and the architect Charles Garnier's plans and designs, which are representative of the Napoleon III style. It was the primary theatre of the Paris Opera and its associated Paris Opera Ballet until 1989, when a new opera house, the Opéra Bastille, opened at the Place de la Bastille.\n[…]\nThe Palais Garnier has been called \"probably the most famous opera house in the world, a symbol of Paris like Notre Dame Cathedral, the Louvre, or the Sacré Coeur Basilica\". This is at least partly due to its use as the setting for Gaston Leroux's 1910 novel The Phantom of the Opera and, especially, the novel's subsequent adaptations in films and the popular 1986 musical.\n[…]\nThe Palais Garnier also houses the Bibliothèque-Musée de l'Opéra de Paris (Paris Opera Library-Museum), which is managed by the Bibliothèque Nationale de France and is included in unaccompanied tours of the Palais Garnier.\n[…]\nIn 1964 a new ceiling painted by Marc Chagall was installed on a removable frame over the original. It depicts scenes from operas by 14 composers – Mussorgsky, Mozart, Wagner, Berlioz, Rameau, Debussy, Ravel, Stravinsky, Tchaikovsky, Adam, Bizet, Verdi, Beethoven, and Gluck. Although praised by some, others feel Chagall's work creates \"a false note in Garnier's carefully orchestrated interior\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93pera_Garnier",
        "situacao": "ok",
        "texto": "A Ópera Garnier ou Palais Garnier é uma casa de ópera localizada no IX arrondissement de Paris, França. O edifício é considerado uma das obras-primas da arquitetura de seu tempo. Construído em estilo neobarroco, é o 13º teatro a hospedar a Ópera de Paris, desde sua fundação por Luís XIV, em 1669. Sua capacidade é de 1979 espectadores sentados.\n[…]\nO palácio era comumente chamado apenas de Ópera de Paris, mas, após a inauguração da Ópera da Bastilha, em 1989, passou a ser chamado Ópera Garnier.\n[…]\nA pedra angular da Ópera Garnier foi colocada em 1861 e a construção teve início no mesmo ano. Entretanto a obra foi interrompida por numerosos incidentes, incluindo a Guerra Franco-Prussiana, a queda do Império francês e a Comuna de Paris. Outro problema foi o próprio terreno, extremamente pantanoso, o que implicou contínuos bombeamentos de água durante oito meses, antes que as fundações pudessem ser lançadas.\n[…]\nO majestoso edifício tem área total de 11 mil m² (ou 118 404 ft²) e o imenso palco pode acomodar até 450 artistas. O estilo é monumental. O prédio é ornamentado e ricamente decorado, com frisos de mármore multicolorido, colunas e muitas estátuas. O interior é também muito rico, com veludos, superfícies folheadas a ouro, querubins e ninfas. O candelabro central do salão principal pesa mais de seis toneladas, e uma segunda pintura do teto foi feita em 1964 por Marc Chagall.\n[…]\nO Palácio Garnier é um dos dois teatros que abrigam a Ópera Nacional de Paris, sendo o outro a Ópera da Bastilha.\n[…]\nO palácio é servido pela estação de metrô Opéra.\n[…]\nÓpera Nacional de Paris\n[…]\nBalé da Ópera de Paris\n[…]\nBeauvert, Thierry, Opera Houses of the World, The Vendome Press, New York, 1995. [ISBN 0-86565-978-8]\n[…]\nPágina oficial da Ópera Garnier (em francês)\n[…]\nLocalização da Ópera Garnier em Paris (em francês)\n[…]\nPara mais informações sobre a ópera",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Cats (musical)",
      "descricao": "Musical de Andrew Lloyd Webber, estreado em Londres em 1981, sobre uma tribo de gatos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que canção do musical Cats, cantada pela velha gata Grizabella, se tornou o maior sucesso do espetáculo?",
    "resposta": "Memory",
    "distratores": [
      "Macavity",
      "Mr. Mistoffelees",
      "Skimbleshanks"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Memory_(Cats_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Memory_(Cats_song)",
        "situacao": "ok",
        "texto": "\"Memory\" is a show tune composed by Andrew Lloyd Webber, with lyrics by Trevor Nunn based on poems by T. S. Eliot. It was written for the 1981 musical Cats, where it is sung primarily by the character Grizabella as a melancholic remembrance of her glamorous past and as a plea for acceptance. \"Memory\" is the climax of the musical and by far its best-known song, having achieved mainstream success ou\n[…]\nElaine Paige originated the role of Grizabella in the West End production of Cats and was thus the first to perform the song publicly on stage. \"Memory\" was named the Best Song Musically and Lyrically at the 1982 Ivor Novello Awards. In 2020, Jessie Thompson and Zoe Paskett of the Evening Standard wrote: \"Paige's version set the standard and enabled Memory to become one of the most recognisable musical theatre songs of all time.\"\n[…]\nIn Cats, \"Memory\" is sung primarily by Grizabella, a one-time \"glamour cat\" who has fallen on hard times and is now only a shell of her former self. For most of the musical, Grizabella is ostracized by her fellow Jellicle cats. She sings a prelude version of \"Memory\" at the end of the first act, recalling the time before she became an outcast.\n[…]\nThe first commercial release of \"Memory\" was an instrumental single performed by guitarist Gary Moore. It was released in early 1981 by MCA Records to promote Cats while the musical was still in development. Paige heard this version driving home one evening and rushed into the house to record it from the radio, vowing to contact Lloyd Webber to insist on recording a vocal version of it.\n[…]\nBefore she was able to do so, the following morning he rang her to ask whether she would, at short notice, replace the injured Judi Dench as Grizabella in the London production of Cats. Paige later recalled that the opportunity to sing \"Memory\" was the principal reason for agreeing."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Memory_%28can%C3%A7%C3%A3o%29",
        "situacao": "ok",
        "texto": "\"Memory\", muitas vezes erradamente referido como \"Memorys\", é uma canção do musical Cats de Andrew Lloyd Webber cantada pelo personagem Grizabella, uma gata glamour que lembra de seus velhos tempos de glória quando era jovem. A canção é uma lembrança nostálgica de seu passado glorioso e uma declaração de seu desejo de começar uma nova vida.\n[…]\nÉ cantada brevemente no primeiro ato e completamente perto do final do show, \"Memory\" é o clímax do musical, e de longe a sua canção mais popular e bem conhecida. Os autores, Lloyd Webber e Nunn receberam o Ivo Novello Award em 1981 de Melhor Canção Musicalmente e Liricamente.\n[…]\nA letra, escrita pelo diretor Cats, Trevor Nunn, foi baseado nos poemas de T.S. Eliot \"Preludies\" 's e \"Rhapsody on a Windy Night\". Ex-parceiro de Lloyd Webber na escrita, Tim Rice e o colaborador contemporânep Don Black, apresentaram uma letra para os produtores do show, para apreciação, mas a versão de Nunn foi favorecida. Elaine Paige disse que ela cantou uma letra diferente para a melodia de Memory nas dez primeiras prévias de Cats.\n[…]\nAntes de sua inclusão em Cats, a melodia foi ouvido em projetos anteriores de Lloyd Webber, incluindo em uma balada de Perón em Evita e como uma música para Max em seu projeto original de Sunset Boulevard nos anos 70.\n[…]\nEm sua orquestração original o clímax da canção está na chave de D-flat major, favorita do compositor.\n[…]\nA canção foi cantada e regravada por Nicole Scherzinger , Barbra Streisand, Susan Boyle, Hayley Westenra, Celine Dion, Lea Salonga, Chris Colfer, Sarah Brightman, Michael Ball, Barry Manilow, Banda Epica e muitos outros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Vestido de Noiva",
      "descricao": "Peça de Nelson Rodrigues estreada em 1943, marco do teatro moderno brasileiro."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Vestido de Noiva, de Nelson Rodrigues, alterna em cena três planos: o da realidade, o da memória e qual outro?",
    "resposta": "O da alucinação",
    "distratores": [
      "O do futuro",
      "O da morte",
      "O do céu"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vestido_de_Noiva"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vestido_de_Noiva",
        "situacao": "ok",
        "texto": "O vestido de casamento ou vestido de noiva é o traje usado por uma noiva durante uma cerimônia de casamento. A cor, o estilo e a importância cerimonial do vestido podem depender da religião e da cultura dos participantes do casamento. Nas culturas ocidentais, as noivas geralmente escolhem o vestido de noiva branco, que foi popularizado pela Rainha Vitória no século XIX. Nos países do oriente é com\n[…]\nMuitos vestidos de noiva na China, na Índia (sári de casamento), no Paquistão (shalwar qameez ou lehngas) e no Vietnã (na forma tradicional do Áo dài) são vermelhos, a cor tradicional da boa sorte e prosperidade. Hoje em dia, muitas mulheres escolhem outras cores além do vermelho. Nos casamentos chineses modernos da China Continental, a noiva pode optar por vestidos ocidentais de qualquer cor e, mais tarde, usar um traje tradicional para a cerimônia oficial do chá.\n[…]\nEm casamentos modernos taiwaneses, a noiva geralmente escolhe vermelho (seguindo a tradição chinesa) ou seda branca (pendendo para a cutura ocidental) para o material do vestido de casamento, mas a maioria usará a roupa tradicional vermelha para seus banquetes de casamento formais.\n[…]\nUma noiva Pueblo usava um vestido longo de algodão amarrado acima do ombro direito, preso com um cinto ao redor da cintura.\n[…]\nNas tribos do norte da Califórnia (que incluem as Klamath, Modoc e Yurok) se usava um vestido de noiva tradicional tecido em cores simbólicas: branco para o leste, azul para o sul, amarelo (laranja) para o oeste; e preto para o norte. As joias de turquesa e prata eram usadas tanto pela noiva como pelo noivo, além de um cinto de conchos de prata. A joia era considerada um escudo contra males, incluindo fome, pobreza e má sorte.\n[…]\nVéu cotovelo: o comprimento vai até o cotovelo da noiva.\n[…]\nhttps://revista.icasei.com.br/15-vestidos-de-noiva-da-realeza-princesas-reais/"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Teatro Amazonas",
      "descricao": "Casa de ópera de Manaus inaugurada em 1896."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A cúpula do Teatro Amazonas, em Manaus, é revestida por milhares de peças de cerâmica nas cores de quê?",
    "resposta": "Da bandeira do Brasil",
    "distratores": [
      "Da bandeira portuguesa",
      "Do brasão de Manaus",
      "Da bandeira francesa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Teatro_Amazonas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_Amazonas",
        "situacao": "ok",
        "texto": "Teatro Amazonas é uma casa de ópera localizada em Manaus, no estado do Amazonas, sendo o principal cartão-postal da cidade. Situado no Largo de São Sebastião, no Centro Histórico, foi inaugurado em 1896 para atender ao desejo da elite amazonense da época, que idealizava a cidade à altura dos grandes centros culturais. É amplamente considerado como um dos mais belos teatros do mundo.\n[…]\nO Teatro do Amazonas é o principal monumento cultural arquitetônico do Estado e foi tombado como patrimônio histórico em 28 de novembro de 1966. O edifício, que tem capacidade para 701 pessoas, foi restaurado em 1975 pelo governo de Enoque da Silva Reis. Atualmente, o teatro abriga o Festival Amazonas de Ópera, um dos maiores e mais conceituados eventos no contexto da música erudita brasileira.\n[…]\nÉ composta de 36 mil peças de escamas em cerâmica esmaltada e telhas vitrificadas, vindas da Alsácia, na França. Foi adquirida na Casa Koch Frères, em Paris. A pintura ornamental é da autoria de Lourenço Machado. O colorido original, em verde, azul e amarelo é uma analogia à exuberância da bandeira brasileira.\n[…]\nTombado como Patrimônio Histórico Nacional em 1966, o Teatro Amazonas preserva parte da arquitetura e decoração originais. O estilo arquitetônico é renascentista, com detalhes ecléticos. Na área externa, a famosa cúpula chama a atenção pela imponência, composta por 36 mil peças nas cores da bandeira brasileira, importadas da Alsácia, na França.\n[…]\nO Manaus Futebol Clube faz menção ao Teatro Amazonas em seu hino \"O Teatro Amazonas rebrilha com a luz da chama do esplendor\". Também usou a cúpula do teatro para produzir o próprio escudo do clube.\n[…]\nNa minissérie da teledramaturgia brasileira “Amazônia, de Galvez a Chico Mendes” de 2007, o teatro serviu como plano de fundo na primeira parte da minissérie para o cenário de Manaus do século XIX.\n[…]\n«Teatro Amazonas no Youtube»\n[…]\n«Viva Manaus»"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "West Side Story",
      "descricao": "Musical da Broadway de 1957, com música de Leonard Bernstein, sobre gangues rivais em Nova York."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "As letras das canções de West Side Story foram a estreia na Broadway de um futuro mestre do musical americano. Quem?",
    "resposta": "Stephen Sondheim",
    "distratores": [
      "Oscar Hammerstein",
      "Cole Porter",
      "Andrew Lloyd Webber"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/West_Side_Story",
      "https://en.wikipedia.org/wiki/Stephen_Sondheim"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/West_Side_Story",
        "situacao": "ok",
        "texto": "West Side Story is a musical conceived by Jerome Robbins with music by Leonard Bernstein, lyrics by Stephen Sondheim, and a book by Arthur Laurents.\n[…]\nLaurents, however, was committed to Gabel, who introduced him to the young composer/lyricist Stephen Sondheim. Sondheim auditioned by playing the score for Saturday Night, his musical that was scheduled to open in the fall. Laurents liked the lyrics but was not impressed with the music. Sondheim did not care for Laurents' opinion. Serenade ultimately was shelved.\n[…]\nWhen a backers' audition failed to raise any money for West Side Story late in the spring of 1957, only two months before the show was to begin rehearsals, producer Cheryl Crawford pulled out of the project. Every other producer had already turned down the show, deeming it too dark and depressing. Bernstein was despondent, but Sondheim convinced his friend Hal Prince, who was in Boston overseeing the out-of-town tryout of the new George Abbott musical New Girl in Town, to read the script.\n[…]\nIt was rumored that while Bernstein was away trying to fix the musical Candide, Sondheim wrote some of the music for West Side Story, and that Bernstein's co-lyricist billing disappeared from the credits of West Side Story during the tryout as a trade-off. However, Steven Suskin writes in his book Show Tunes that \"as the writing progressed and the extent of Bernstein's lyric contributions became less, the composer agreed to rescind his credit. ...\n[…]\nPender, Rick (2021). The Stephen Sondheim Encyclopedia. Rowman & Littlefield. ISBN 9781538115879.\n[…]\n​West Side Story​ at the Internet Broadway Database\n[…]\nWest Side Story at the Sondheim Database"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stephen_Sondheim",
        "situacao": "ok",
        "texto": "Stephen Joshua Sondheim (; March 22, 1930 – November 26, 2021) was an American composer and lyricist. Considered one of the most important figures in 20th-century theater, he is credited with reinventing the American musical. He received numerous accolades, including eight Tony Awards, eight Grammy Awards and five Olivier Awards. He was inducted into the American Theater Hall of Fame in 1982 and a\n[…]\nAfter West Side Story opened, Shevelove lamented the lack of \"lowbrow comedy\" on Broadway and mentioned a possible musical based on Roman comedies. Sondheim was interested in the idea and called a friend, Larry Gelbart, to co-write the script. The show went through a number of drafts and was interrupted briefly by Sondheim's next project.\n[…]\nIn 1966, Sondheim semi-anonymously provided lyrics for \"The Boy From...\", a parody of \"The Girl from Ipanema\" in the off-Broadway revue The Mad Show. The song was credited to \"Esteban Río Nido\", Spanish for \"Stephen River Nest\", and in the show's playbill the lyrics were credited to \"Nom De Plume\". That year Goldman and Sondheim hit a creative wall on The Girls Upstairs, and Goldman asked Sondheim about writing a TV musical. The result was Evening Primrose, with Anthony Perkins and Charmian Carr.\n[…]\nThe two men took their discussion, dubbed \"A Little Night Conversation with Stephen Sondheim\", on a West Coast tour of different U.S. cities, including Santa Barbara, San Francisco, Los Angeles, and Portland, Oregon, in March 2008, then to Oberlin College in September. The Cleveland Jewish News reported on their Oberlin appearance: \"Sondheim said: 'Movies are photographs; the stage is larger than life.' What musicals does Sondheim admire the most?\n[…]\nStephen Sondheim at the Internet Broadway Database\n[…]\nStephen Sondheim at the Internet Off-Broadway Database (archived)\n[…]\nStephen Sondheim symposium held at Goldsmiths, University of London, in 2005"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/West_Side_Story_%28musical%29",
        "situacao": "ok",
        "texto": "West Side Story é um musical com libreto de Arthur Laurents, música de Leonard Bernstein e letras de Stephen Sondheim. É inspirado por Romeu e Julieta de William Shakespeare. Em 2021, estreará em São Paulo no Theatro São Pedro a nova montagem brasileira de West Side Story, estrelada por Beto Sargentelli e Giulia Ndruz. A direção será de Charles Möeller & Cláudio Botelho e a regência e direção musi\n[…]\nA produção original da Broadway de 1957, foi dirigida e coreografada por Jerome Robbins e produzida por Robert E. Griffith e Harold Prince, marcou a estréia de Sondheim na Broadway. Realizou 732 performances antes de sair em turnê. A produção foi indicada para seis Tony Award, incluindo Melhor Musical em 1957, mas o prêmio de Melhor Musical foi para The Music Man. Robbins ganhou o Tony por sua coreografia e Oliver Smith ganhou por suas criações cênicas.\n[…]\nEm 2008 em Portugal estreou no Teatro Politeama com encenação de Filipe La Féria uma versão do musical \"West Side Story - Amor Sem Barreiras\" com Bárbara Barradas, Rui Andrade, Carlos Quintas, Anabela, Lúcia Moniz, Pedro Bargado, Tiago Diogo, Alberto Villar, Cátia Garcia, etc. Ganhou o Globo de Ouro da revista Caras para Melhor Espectáculo do Ano e ainda recebeu mais nove Prémios atribuídos pelo Guia dos Teatros.\n[…]\nEm 2021, estreará no Theatro São Pedro em São Paulo, a nova montagem brasileira de West Side Story estrelada por Beto Sargentelli e Giulia Ndruz. A direção será de Charles Möeller & Cláudio Botelho e a regência e direção musical será de Cláudio Cruz.\n[…]\nWest Side Story (em inglês) no Internet Broadway Database\n[…]\nThe Official West Side Story 50th Anniversary World Tour website\n[…]\nThe Official West Side Story website\n[…]\nWest Side Story at sondheimguide.com\n[…]\n2002 Interview with Chita Rivera on the 1957 stage show of West Side Story\n[…]\nWest Side Story in the canon of Stephen Sondheim",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Ópera de Sydney",
      "descricao": "Casa de espetáculos com cobertura em forma de velas no porto de Sydney, na Austrália."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A Ópera de Sydney foi projetada por um arquiteto dinamarquês que abandonou a obra antes do fim e nunca a viu pronta. Quem?",
    "resposta": "Jørn Utzon",
    "distratores": [
      "Alvar Aalto",
      "Arne Jacobsen",
      "Frank Gehry"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sydney_Opera_House"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sydney_Opera_House",
        "situacao": "ok",
        "texto": "The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings, and a masterpiece of 20th-century architecture.\n[…]\nIn the late 1990s, the Sydney Opera House Trust resumed communication with Utzon in an attempt to effect a reconciliation and to secure his involvement in future changes to the building. In 1999, he was appointed by the trust as a design consultant for future work.\n[…]\nAfter the resignation of Utzon, the Minister for Public Works, Davis Hughes, and the Government Architect, Ted Farmer, organised a team to bring the Sydney Opera House to completion. The architectural work was divided between three appointees who became the Hall, Todd, Littlemore partnership. David Littlemore would manage construction supervision, Lionel Todd contract documentation, while the crucial role of design became the responsibility of Peter Hall.\n[…]\nHall agreed to accept the role on the condition there was no possibility of Utzon returning. Even so, his appointment did not go down well with many of his fellow architects who considered that no one but Utzon should complete the Sydney Opera House. Upon Utzon's dismissal, a rally of protest had marched to Bennelong Point. A petition was also circulated, including in the Government Architects office.\n[…]\nRAIA Commemorative Award, Jørn Utzon – Sydney Opera House, 1992\n[…]\nCompetition drawings submitted by Jørn Utzon to the Opera House Committee\n[…]\n\"Sydney Opera House\". Dictionary of Sydney. Retrieved 8 October 2015. [CC-By-SA]. Includes 'Sydney Opera House' by Laila Ellmoos, 2008 and 'Utzon's Opera House' by Eoghan Lewis, 2014.\n[…]\nSydney Opera House at Google Cultural Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93pera_de_Sydney",
        "situacao": "ok",
        "texto": "A casa da Ópera de Sydney (em inglês Sydney Opera House), também conhecida como Teatro de Sydney, é um dos edifícios de espetáculo mais marcantes em nível mundial, e um dos símbolos da Austrália, localizada na cidade de Sydney.\n[…]\nA construção, projetada por Jørn Utzon, começou em 1959 e está localizada sobre a Baía de Sydney. Apesar de o arquiteto ter abandonado o projeto em 1966, o edifício foi inaugurado em 20 de outubro de 1973.\n[…]\nUtzon ganhou o concurso internacional de arquitetura para a Ópera de Sydney em 1957, aos 38 anos. Havia 232 candidatos e terá sido o arquitecto finlandês Eero Saarinen, que fazia parte do júri, a apoiar o seu projeto. Fez a obra com o engenheiro anglo-dinamarquês Ove Arup e o edifício demorou anos a ser construído (de 1956 a 1973). A polemica instalou-se e, em 1966, quando Jorn Utzon abandonou a direção da obra e a Austrália, para onde se tinha mudado com a sua família.\n[…]\nAlguns pormenores da obra, nomeadamente no seu interior, não foram acabados segundo os seus planos. Utzon nunca chegou a visitar o edifício, mesmo depois de se ter reconciliado com a Fundação da Ópera de Sydney nos anos 1990 e mais tarde o seu filho Jan, também arquitecto, ter feito a renovação do interior do edifício, aproximando-o mais daquilo que o pai tinha projetado.\n[…]\nDuek-Cohen, Elias, Utzon and the Sydney Opera House, Morgan Publications, Sydney, 1967-1998.\n[…]\n\"Opera House an architectural 'tragedy\"', ABC News online, 28-4-2005.\n[…]\nWatson, Anne (editor): \"Building a Masterpiece: The Sydney Opera House\", 2006, Lund Humphries, ISBN 0-85331-941-3, ISBN 978-0-85331-941-2\n[…]\nThe Sydney Opera House mapygon\n[…]\nSitio web de arquitetura em Sydney\n[…]\nWebcamda Ópera de Sydney",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Anton Tchekhov",
      "descricao": "Dramaturgo, contista e médico russo, autor de A Gaivota e Tio Vânia."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O médico e dramaturgo Anton Tchekhov dizia que a medicina era sua esposa legítima. E o que era a literatura?",
    "resposta": "Sua amante",
    "distratores": [
      "Sua filha",
      "Sua mãe",
      "Sua religião"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Anton_Chekhov"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anton_Chekhov",
        "situacao": "ok",
        "texto": "Anton Pavlovich Chekhov (; Russian: Антон Павлович Чехов;\n[…]\nChekhov was a physician by profession. \"Medicine is my lawful wife,\" he once said, \"and literature is my mistress.\"\n[…]\nThis philosophy of approaching the art of acting has stood not only steadfast, but as the cornerstone of acting for much of the 20th century to this day. Mikhail Chekhov considered Ivanov a key moment in his brother's intellectual development and literary career. From this period comes an observation of Chekhov's that has become known as Chekhov's gun, a dramatic principle that requires that every element in a narrative be necessary and irreplaceable, and that everything else be removed.\n[…]\nPetri Liukkonen. \"Anton Chekhov\". Books and Writers.\n[…]\nThe International competition of philological, culture and film studies works dedicated to Anton Chekhov's life and creative work (in Russian)\n[…]\nWorks by Anton Chekhov in eBook form at Standard Ebooks\n[…]\nWorks by Anton Pavlovich Chekhov at Project Gutenberg. All Constance Garnett's translations of the short stories and letters are available, plus the edition of the Note-book translated by S. S. Koteliansky and Leonard Woolf – see the \"References\" section for print publication details of all of these. Site also has translations of all the plays.\n[…]\nWorks by or about Anton Chekhov at the Internet Archive\n[…]\nWorks by Anton Chekhov at LibriVox (public domain audiobooks)\n[…]\n201 Stories by Anton Chekhov, translated by Constance Garnett presented in chronological order of Russian publication with annotations.\n[…]\nWorks by Anton Chekhov at Open Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anton_Tchekhov",
        "situacao": "ok",
        "texto": "Anton Pavlovitch Tchekhov, em russo:  Анто́н Па́влович Че́хов (Taganrog, 29 de janeiro de 1860 — Badenweiler, 15 de julho de 1904), foi um médico, dramaturgo e escritor russo, considerado um dos maiores contistas de todos os tempos. Em sua carreira como dramaturgo criou quatro clássicos e seus contos têm sido aclamados por escritores e críticos.\n[…]\nTchekhov foi médico durante a maior parte de sua carreira literária, e em uma de suas cartas ele escreve a respeito: \"A medicina é a minha legítima esposa; a literatura é apenas minha amante\".\n[…]\nDiretor do coro de uma paróquia, devoto cristão ortodoxo e pai que agredia fisicamente seu filho, Pavel Tchekhov lhe deu uma educação rígida e muito religiosa, o que fez com que Tchekhov se tornasse um amante da liberdade e da independência, e foi visto por alguns historiadores como modelo para os muitos personagens hipócritas criados por seu filho.\n[…]\nDurante esta época, ele começou a ler frequentemente e analiticamente obras de autores que incluíam Cervantes, Turgueniev, Goncharov e Schopenhauer; e ele escreveu um longa-metragem no gênero comédia dramática, O Órfão, que seu irmão Aleksandr julgou como \"uma imperdoável, porém, inocente criação\". Tchekhov também se envolveu em uma série de casos amorosos, um deles com a esposa de um professor.\n[…]\nNo dia 25 de maio de 1901 casou-se com Olga Knipper — em segredo, dado o seu horror a casamentos —, uma ex-protegida e por vezes, amante de Nemirovich-Danchenko, que ele conheceu pela primeira vez nos ensaios da peça A Gaivota. Até então, Tchekhov havia sido descrito como \"o escritor solteiro mais elusivo da Rússia\". Ele preferia fazer visita aos bordéis a ter um relacionamento sério. Certa vez, ele escreveu a Suvorin:\n[…]\nMaria Tchékhov\n[…]\nMédico escritor\n[…]\n«Folha: Lapidador do dia a dia: Tchekhov retrata a gangrena social da Rússia»\n[…]\nAnton Tchekhov no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Aida",
      "descricao": "Ópera de Giuseppe Verdi, ambientada no Egito antigo, estreada em 1871."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na ópera de Verdi, Aida é uma princesa escravizada no Egito, apaixonada pelo general Radamés. De que reino ela vem?",
    "resposta": "Etiópia",
    "distratores": [
      "Núbia",
      "Babilônia",
      "Pérsia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aida"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aida",
        "situacao": "ok",
        "texto": "Aida (or Aïda, Italian: [aˈiːda]) is a tragic opera in four acts by Giuseppe Verdi to an Italian libretto by Antonio Ghislanzoni. Set in the Old Kingdom of Egypt, it was commissioned by Cairo's Khedivial Opera House and had its première there on 24 December 1871, in a performance conducted by Giovanni Bottesini. Today the work holds a central place in the operatic canon, receiving performances eve\n[…]\nGermany: 20 April 1874, Berlin State Opera, with Mathilde Mallinger as Aida, Albert Niemann as Radamès, and Franz Betz as Amonasro\n[…]\nUnited Kingdom: 22 June 1876, Royal Opera House, Covent Garden, with Adelina Patti as Aida, Ernesto Nicolini as Radamès, and Francesco Graziani as Amonasro\n[…]\nA complete concert version of the opera was given in New York City in 1949. Conducted by Toscanini with Herva Nelli as Aida and Richard Tucker as Radamès, it was televised on the NBC television network. Due to the length of the opera, it was divided into two telecasts, preserved on kinescopes, and later released on video by RCA and Testament. The audio portion of the broadcast, including some remakes in June 1954, was released on LP and CD by RCA Victor.\n[…]\nBackstory: The Egyptians have captured and enslaved Aida, an Ethiopian princess. An Egyptian military commander, Radamès, struggles to choose between his love for her and his loyalty to the King of Egypt. To complicate the story further, the King's daughter Amneris is in love with Radamès, although he does not return her feelings.\n[…]\nThe 1952 Broadway musical My Darlin' Aida, set on a plantation in Tennessee in the first year of the American Civil War, is based on the opera and uses Verdi's music.\n[…]\nBusch, Hans (1978). Verdi's Aida. The History of an Opera in Letters and Documents. Minneapolis: University of Minnesota Press. ISBN 978-0-8166-0798-3\n[…]\nAïda : an opera in four acts, 1900 publication, English, digitised by BYU on archive.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aida",
        "situacao": "ok",
        "texto": "Aida é uma ópera em quatro atos, com música de Giuseppe Verdi e libreto de Antonio Ghislanzoni. Sua estreia mundial aconteceu na Casa da Ópera,  no Cairo, em 24 de dezembro de 1871. Aida foi composta por encomenda do governo egípcio para comemorar a inauguração do canal de Suez, fato que ocorreu em 17 de novembro de 1869. Sua estreia, no entanto, ocorreu com 2 anos de atraso por atrasos na composi\n[…]\nRadamés comunica a Aida que rapidamente estará, outra vez, à frente dos seus exércitos, uma vez que a luta com os etíopes reacendeu. Certo da sua vitória, o militar declara a sua intenção de pedir como recompensa a liberdade e a mão de Aida. A escrava manifesta a sua desconfiança em que semelhante plano possa acontecer e convence o amado de que a fuga para a Etiópia é a melhor solução pros dois. Depois pergunta-lhe qual é o caminho que terão de tomar para evitar o exército egípcio.\n[…]\nO seu amante, confiante, revela-lhe que as tropas atacarão a Etiópia na garganta de Nápata. Subitamente, Amonasro abandona o seu esconderijo e aparece diante Radamés, que ele percebe que traiu a sua pátria involuntariamente, pelo amor de Aida. Amonasro e a sua filha tentam convencê-lo de que não é o culpado e tentam convencê-lo a fugir com eles. Sai então do templo Amneris, seguida por Ramfis e pelos guardas do templo, que acusa Radamés de traição.\n[…]\nNuma sala do palácio do faraó perto da cela de Radamés e da sala de julgamento: Amneris, ainda apaixonada por Radamés apesar de este ter tentado fugir com a escrava, ordena que o preso seja conduzido à sua presença. A filha do faraó tenta convencê-lo a pedir clemência das acusações que lhe são imputadas, mas o militar nega-se. A princesa egípcia comunica-lhe então que Aida ainda está viva, ao que Radamés responde que está confiante de que sua amada consiga voltar à sua pátria.\n[…]\n«Giuseppe Verdi - Aida em MP3 com licença Creative Commons»\n[…]\n«Verdi em Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Sonho de uma Noite de Verão",
      "descricao": "Comédia de William Shakespeare sobre amantes, fadas e artesãos atenienses perdidos num bosque."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "A famosa marcha nupcial de Mendelssohn, tocada na saída dos noivos, foi composta como música de cena para que comédia de Shakespeare?",
    "resposta": "Sonho de uma Noite de Verão",
    "distratores": [
      "A Tempestade",
      "Noite de Reis",
      "Muito Barulho por Nada"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/A_Midsummer_Night%27s_Dream_(Mendelssohn)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/A_Midsummer_Night%27s_Dream_(Mendelssohn)",
        "situacao": "ok",
        "texto": "On two occasions, Felix Mendelssohn composed music for William Shakespeare's play A Midsummer Night's Dream (in German Ein Sommernachtstraum). First in 1826, near the start of his career, he wrote a concert overture (Op. 21). Later, in 1842, five years before his death, he wrote incidental music (Op. 61) for a production of the play, into which he incorporated the existing overture. The incidental\n[…]\nMendelssohn wrote the incidental music, Op. 61, for A Midsummer Night's Dream in 1842, 16 years after he wrote the overture. It was written to a commission from King Frederick William IV of Prussia. Mendelssohn was by then the music director of the King's Academy of the Arts and of the Leipzig Gewandhaus Orchestra. A successful presentation of Sophocles' Antigone on 28 October 1841 at the New Palace in Potsdam, with music by Mendelssohn (Op.\n[…]\nThe A Midsummer Night's Dream overture, Op. 21, originally written as an independent piece 16 years earlier, was incorporated into the Op. 61 incidental music as its overture, and the first of its 14 numbers. There are also vocal sections and other purely instrumental movements, including the Scherzo, Nocturne and \"Wedding March\".\n[…]\nThe music was dedicated to a gifted amateur musician friend of Mendelssohn's, Dr Heinrich Conrad Schleinitz.\n[…]\nSections of the score were used in Woody Allen's 1982 film A Midsummer Night's Sex Comedy.\n[…]\nDirector Max Reinhardt asked Erich Wolfgang Korngold to re-orchestrate Mendelssohn's Midsummer Night's Dream music for his 1935 film, A Midsummer Night's Dream. Korngold added other works by Mendelssohn to the mix. Critic Leonard Maltin singles the music out for praise, as contemporary critics did.\n[…]\n\"A Midsummer Night's Dream\", overture, Op. 21: Scores at the International Music Score Library Project\n[…]\nA Midsummer Night's Dream, incidental music, Op. 61: Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sonho_de_uma_Noite_de_Ver%C3%A3o_%28Mendelssohn%29",
        "situacao": "ok",
        "texto": "Sonho de uma Noite de Verão (em alemão:  Ein Sommernachtstraum) é uma obra musical escrita pelo compositor Felix Mendelssohn, tendo por base a peça de teatro do mesmo nome escrita por William Shakespeare. Mendelssohn compôs esta obra em diferentes momentos da sua vida. Entre 8 de julho e 6 de agosto de 1826, quando a sua carreira estava no início, compôs uma abertura de concerto op. 21 e estreou-a\n[…]\nEm 1842, poucos anos antes da sua morte, escreveu música incidental (op. 61) para uma produção da obra de teatro, na qual incorporou a abertura existente. A música incidental, que inclui a famosa Marcha nupcial, foi escrita por uma ordem do rei Frederico Guilherme IV da Prússia.\n[…]\nA abertura, op. 21, foi terminada por Mendelssohn em 6 de agosto de 1826, quando tinha 17 anos e 6 meses de idade. Foi escrita como uma abertura de concerto, não associada a nenhuma representação teatral. A abertura foi escrita depois de o compositor ler a tradução para alemão da obra de Shakespeare em 1826. A tradução foi feita por August Wilhelm von Schlegel, com ajuda de Ludwig Tieck.\n[…]\nHavia uma ligação familiar entre eles: o irmão de Schlegel, Friedrich, era casado com Dorothea, tia de Felix Mendelssohn.",
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
