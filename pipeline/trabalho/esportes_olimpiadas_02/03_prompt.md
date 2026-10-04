Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Olimpíadas** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Jogos Olímpicos de Inverno de 1924",
      "descricao": "Primeira edição dos Jogos Olímpicos de Inverno, realizada em 1924 nos Alpes franceses."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os primeiros Jogos Olímpicos de Inverno, em 1924, foram disputados em que cidade dos Alpes franceses?",
    "resposta": "Chamonix",
    "distratores": [
      "Grenoble",
      "Albertville",
      "Courchevel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1924_Winter_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1924_Winter_Olympics",
        "situacao": "ok",
        "texto": "The 1924 Winter Olympics, officially known as the I Olympic Winter Games (French: Iers Jeux olympiques d'hiver) and commonly known as Chamonix 1924 (Arpitan: Chamôni 1924), were a winter multi-sport event which was held in 1924 in Chamonix, France. Organized by the French Olympic Committee and held as part of an \"International Winter Sports Week\", the competitions took place in Chamonix and Haute-\n[…]\nAlthough figure skating had been an Olympic event in both London and Antwerp and ice hockey had been an event in Antwerp, winter sports had always been limited by the season. At the 1921 IOC convention in Lausanne, there was a call for equality for winter sports. After much discussion, it was decided that France, host nation for the 1924 Summer Olympics, would hold an \"international week of winter sport\" in Chamonix.\n[…]\nWhile not one of the official 16 events (nor one of the six sports) during the \"International Winter Sports Week\", the closing ceremony included Pierre de Coubertin presenting gold medals in \"Alpinism\" (mountaineering) to the members of the 1922 British Mount Everest expedition, represented in Chamonix by Lt Col Edward Strutt, deputy expedition leader.\n[…]\nThe final individual medal of Chamonix 1924 was presented in 1974. The ski jumping event was unusual because the bronze medalist was not determined for fifty years. Norway's Thorleif Haug was awarded third place at the event's conclusion, but a clerical error in calculating Haug's score was discovered in 1974 by skiing historian Jakob Vaage, who further determined that Anders Haugen of the United States, who had finished fourth, had actually scored 0.095 points more than Haug.\n[…]\n*   Host nation (France)\n[…]\nList of 1924 Winter Olympics medal winners\n[…]\n1924 Summer Olympics\n[…]\nOlympic Games held in France\n[…]\n1924 Summer Olympics – Paris\n[…]\n1924 Winter Olympics – Chamonix\n[…]\n\"Chamonix 1924\". Olympics.com. International Olympic Committee."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Inverno_de_1924",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos de Inverno de 1924  (em francês: Iers Jeux olympiques d'hiver), conhecidos oficialmente como Jogos da I Olimpíada de Inverno, foram os primeiros Jogos Olímpicos de Inverno. Realizados em Chamonix-Mont-Blanc, criados para abrigar competições disputadas na neve e no gelo e que seriam disputados na Berlim 1916, cancelada por causa da Primeira Guerra Mundial.\n[…]\nOriginalmente chamado Semaine Internationale des Sports d'Hiver (Semana Internacional de Esportes de Inverno), o evento foi organizado pelo Comitê Olímpico Francês e mais tarde designado pelo Comitê Olímpico Internacional como a primeira edição dos Jogos Olímpicos de Inverno.\n[…]\nAlém do projeto para 1916, alguns esportes típicos de inverno já haviam sido disputados em outros Jogos Olímpicos de Verão: a patinação artística foi disputada em Londres 1908 e em Antuérpia 1920, e o hóquei sobre o gelo foi disputado em Antuérpia 1920.\n[…]\nEntretanto, o clima na maioria das cidades impedia a continuidade dessas disputas durante os Jogos de Verão. Em 1921, uma convenção do COI em Lausanne decidiu apoiar a realização pelo Comitê Francês de uma \"Semana Internacional de Esportes de Inverno\".\n[…]\nA cidade francesa de Chamonix foi escolhida para sediar o evento. A ideia deu tão certo que o COI decidiu renomear como Jogos de Inverno e a partir dali as edições tradicionais passaram a ser renomeadas como \"de Verão\", inclusive retroativamente, ficando \"Chamonix 1924\" como a primeira edição do evento.\n[…]\nStade Olympique de Chamonix\n[…]\nUm total de 16 nações enviaram delegação para competir nos primeiros Jogos de Inverno. A Alemanha foi impedida de participar ainda devido ao seu envolvimento na Primeira Guerra Mundial.\n[…]\nNa lista abaixo, o número entre parênteses indica o número de atletas por cada nação nos Jogos:\n[…]\nChamonix 1924 na página do COI",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Jogos Paralímpicos de Verão de 1960",
      "descricao": "Primeira edição dos Jogos Paralímpicos, realizada em 1960 na mesma cidade dos Jogos Olímpicos daquele ano."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os primeiros Jogos Paralímpicos, em 1960, aconteceram na mesma cidade que sediou os Jogos Olímpicos naquele ano. Que cidade foi essa?",
    "resposta": "Roma",
    "fonte": [
      "https://en.wikipedia.org/wiki/1960_Summer_Paralympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1960_Summer_Paralympics",
        "situacao": "ok",
        "texto": "The 9th Annual International Stoke Mandeville Games, retroactively designated as the 1960 Summer Paralympics, were the first international Paralympic Games, following on from the Stoke Mandeville Games of 1948 and 1952. They were organised under the aegis of the International Stoke Mandeville Games Federation. The term \"Paralympic Games\" was approved by the International Olympic Committee (IOC) fi\n[…]\nThe Games were held in Rome, Italy from September 18 to 25, 1960, with the 1960 Summer Olympics. The only disability included in these Paralympics was spinal cord injury. There were 400 athletes from 23 countries.\n[…]\nThe information from the International Paralympic Committee (IPC) website is based on sources which does not present all information from earlier paralympic games (1960–1984), such as relay and team members.[1] (Per Apr.17, 2011)\n[…]\nVideo clip from the 1960 Summer Paralympics on YouTube on ParalympicSport.tv's Official site on YouTube\n[…]\nVideo clip Australian team at the 1960 Summer Paralympics on YouTube on Australian Paralympic Committee's Official site on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Paral%C3%ADmpicos_de_Ver%C3%A3o_de_1960",
        "situacao": "ok",
        "texto": "Os Jogos Paralímpicos de Verão de 1960, aconteceram pela primeira vez, em Roma, na Itália, entre os dias 18 e 25 de Setembro de 1960.\n[…]\nComo sendo os primeiros jogos, a lesão na medula espinhal foi única deficiência presente nesses jogos. Participaram cerca de 400 atletas de 23 países. Chamado primeiramente de \"Olimpíadas dos Portadores de Deficiência\", o termo \"Jogos Paralímpicos\" só foi aprovado pelo Comitê Olímpico Internacional (COI) mais tarde, em 1984.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Jogos Olímpicos da Juventude de Verão de 2010",
      "descricao": "Primeira edição dos Jogos Olímpicos da Juventude, competição olímpica para atletas adolescentes, realizada em 2010."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os Jogos Olímpicos da Juventude, disputados por atletas adolescentes, tiveram sua primeira edição em 2010. Em que cidade-estado asiática?",
    "resposta": "Singapura",
    "fonte": [
      "https://en.wikipedia.org/wiki/2010_Summer_Youth_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2010_Summer_Youth_Olympics",
        "situacao": "ok",
        "texto": "The 2010 Summer Youth Olympics, officially known as the I Summer Youth Olympic Games, and commonly known as Singapore 2010, were the inaugural edition of the Youth Olympic Games (YOG), an Olympic Games-based event for young athletes. Held in Singapore from 14 to 26 August 2010, it was the first International Olympic Committee–sanctioned event held in Southeast Asia. The Games featured about 3,600 \n[…]\nThe flag of Singapore entered the stage with the Deyi Military Band, who had won the Display Band of the Year Award and Best Drum Major of the Year Award in the Singapore Youth Festival Central Judging Display Band Competition 2010, performing \"Five Stars Arising\", and the national anthem while the flag was raised.\n[…]\nIn the next segment \"Blazing the Trail\", 5 young singers performed an upbeat song while students dressed to resemble the \"Spirit of Youth\", the Singapore 2010 emblem, performed a mass display item. Following the item, the athletes and the flags representing all competing nations made their way onto the floating platform.\n[…]\n*   Host nation (Singapore)\n[…]\nThe SYOGOC launched an international emblem design competition on 29 July 2008 through 29 August 2008 through its official website, requiring that the emblem incorporate the three themes of the Singapore identity, the Olympic ideals, and a youthful spirit. The emblem competition for the Games attracted 1,500 participants, and the winning design entitled \"Spirit of Youth\" was unveiled on 10 January 2010.\n[…]\nThe International Herald Tribune claimed in a 16 August 2010 article that ticket sales to events had been \"sluggish\" despite an expensive government campaign featuring billboards around Singapore to encourage neighbourhoods to celebrate the event, and that there had been reports that children had been \"forced\" to attend pre-Games events.\n[…]\nSingapore 2010's channel on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_da_Juventude_de_2010",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos Verão da Juventude de 2010, oficialmente conhecidos como Jogos da I Olimpíada de Verão da Juventude, foram um evento multiesportivo realizado pela primeira vez e celebrado na tradição dos Jogos Olímpicos, exclusivamente para jovens, entre 14 e 26 de agosto, na Área Central de Singapura, Singapura. O país obteve o direito de sediar os Jogos, numa decisão anunciada em 21 de fevere\n[…]\nSingapura foi sede da 117ª Sessão do Comitê Olímpico Internacional, em 2005, e fez a sua primeira candidatura formal para um evento multiesportivo deste porte. A cidade-estado contou com uma grande campanha publicitária, que incluiu o lançamento do site oficial, o logotipo da candidatura  e um slogan, \"Blazing the Trail\", em 16 de outubro de 2007. A candidatura ainda contou com forte apoio popular, mobilizando os estudantes a colecionar um milhão de assinaturas em apoio aos Jogos.\n[…]\nA bandeira de Singapura entrou no palco com a Banda Militar Dey.\n[…]\nA bandeira de cada um dos Comités Olímpicos Nacionais representados entrou no palco na mão de um atleta representante. Seguindo a tradição Olímpica, foi a Grécia a entrar primeiro, e Singapura entrou em último. A cerimónia das bandeiras foi seguida pela canção que foi o tema oficial dos Jogos, pelas considerações de Ng Ser Miang, Presidente do Comité Organizador dos Jogos Olímpicos da Juventude de Singapura, e de Jacques Rogge, Presidente do Comité Olímpico Internacional.\n[…]\nDepois da chegada do Presidente do COI, Jacques Rogge, e do Primeiro-ministro de Singapura, Lee Hsien Loong, Nathania Ong, de 12 anos, liderou o coro e a audiência na entoação do hino nacional de Singapura. No segmento seguinte, \"Blazing the Trail\" (\"Acendendo a trilha\"), cinco jovens cantores cantaram, enquanto estudantes estavam vestidos para fazer lembrar o \"Espírito da Juventude\", o emblema dos Jogos de Singapura 2010.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Maratona",
      "descricao": "Corrida de longa distância do atletismo, com percurso oficial de 42,195 quilômetros."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda que inspirou a maratona, o mensageiro grego Fidípides correu da planície de Maratona até que cidade para anunciar a vitória?",
    "resposta": "Atenas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pheidippides",
      "https://en.wikipedia.org/wiki/Marathon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pheidippides",
        "situacao": "ok",
        "texto": "Pheidippides (; fy-DIP-ə-deez; Ancient Greek: Φειδιππίδης, Ancient Greek pronunciation: [pʰeː.dip.pí.dɛːs], Modern Greek: [fi.ðiˈpi.ðis] lit. 'Son of Pheídippos') or Philippides (Φιλιππίδης) was a 5th-century-BC Athenian running courier who was the central figure in the story that inspired the marathon race.\n[…]\nPheidippides's legendary Marathon–Athens run was the inspiration for the modern 42-kilometre (26 mi) marathon race. Pheidippides's Athens–Sparta run inspired two ultramarathon races, the 246-kilometre (153 mi) Spartathlon and 490-kilometre (300 mi) Authentic Pheidippides Run.\n[…]\nThe idea of the modern marathon race came from Michel Bréal, who wanted the event to feature in the first modern Olympic Games in 1896 in Athens. Bréal was inspired by Robert Browning's poem Pheidippides. The idea of a marathon race was strongly supported by Pierre de Coubertin, the founder of the modern Olympics, and by the Greeks.\n[…]\nAnother run inspired by Herodotus's account, the Authentic Pheidippides Run, makes a round trip from Athens to Sparta and back."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Marathon",
        "situacao": "ok",
        "texto": "The marathon is a long-distance foot race with a distance of 42.195 kilometres (c. 26.22 mi), usually run as a road race, but the distance can be covered on trail routes. The marathon can be completed by running or with a run/walk strategy. There are also wheelchair divisions. More than 800 marathons are held worldwide each year, with the vast majority of competitors being recreational athletes, a\n[…]\nA creation of the French philologist Michel Bréal inspired by a story from Ancient Greece, the marathon was one of the original modern Olympic events in 1896 in Athens. The distance did not become standardized until 1921. The distance is also included in the World Athletics Championships, which began in 1983. It is the only running road race included in both championship competitions (walking races on roads are also contested in both).\n[…]\nThe Boston Marathon began on 19 April 1897 and was inspired by the success of the first marathon competition in the 1896 Summer Olympics. It is the world's oldest annual marathon and ranks as one of the world's most prestigious road racing events. Its course runs from Hopkinton in southern Middlesex County to Boylston Street in Boston. Johnny Hayes' victory at the 1908 Summer Olympics also contributed to the early growth of long-distance running and marathoning in the United States.\n[…]\nThe Boston Marathon is the world's oldest annual marathon, inspired by the success of the 1896 Olympic marathon and held every year since 1897 to celebrate Patriots' Day, a holiday marking the beginning of the American Revolution, thereby purposely linking Athenian and American struggle for democracy. The oldest annual marathon in Europe is the Košice Peace Marathon, held since 1924 in Košice, Slovakia. The historic Polytechnic Marathon was discontinued in 1996."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fid%C3%ADpides",
        "situacao": "ok",
        "texto": "Fidípides (em grego: Φειδιππίδης), foi um soldado ateniense que, segundo Heródoto, foi enviado para buscar ajuda em Esparta antes da batalha de Maratona, em 490 a.C.\n[…]\nA prova da maratona baseia-se em que Fidípides teria corrido os 42 km separando Atenas de Maratona a fim de participar da batalha de mesmo nome contra os persas, na primeira das guerras médicas. Os atenienses acabaram vencendo a batalha, e os persas recuando para os seus navios e partindo em direção a Atenas.\n[…]\nCom medo de que os persas se vingassem contra a cidade desprotegida e desavisada sobre o destino da batalha de Maratona, Fidípides teria retornado, sempre correndo, a Atenas para avisar do êxito na batalha. Após ter anunciado a vitória «nenikekamen!», caiu morto, devido à enorme exaustão. Devido ao seu gigantesco esforço, Atenas teve tempo de se organizar, fechar a cidade e passar ilesa ao ataque persa.\n[…]\nChegando a Esparta no dia seguinte ao da sua partida de Atenas, Fidípides, desincumbindo-se da missão que lhe confiaram os generais, apresentou-se diante dos magistrados, dizendo-lhes: “Lacedemônios, os atenienses solicitam o vosso auxílio, impedindo, assim, que a mais antiga cidade da Grécia caia sob o domínio dos bárbaros. A Erétria já foi subjugada, e a Grécia se acha enfraquecida pela perda dessa cidade célebre”.\n[…]\nDe acordo com relatos, Heródoto escreveu o relato 30 a 40 anos depois do acontecimento, e é provável que Fidípides seja uma figura histórica. Correr os 246 km que separavam a Atenas de Esparta em 2 dias, por terreno acidentado, seria uma façanha digna de recordar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Jogos Olímpicos de Verão de 1904",
      "descricao": "Edição dos Jogos Olímpicos realizada em 1904 nos Estados Unidos, a primeira fora da Europa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os Jogos Olímpicos de 1904 tinham sido concedidos a Chicago, mas acabaram transferidos para outra cidade americana. Qual?",
    "resposta": "Saint Louis",
    "fonte": [
      "https://en.wikipedia.org/wiki/1904_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1904_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1904 Summer Olympics (officially the Games of the III Olympiad and also known as St. Louis 1904) were an international multi-sport event held in St. Louis, Missouri, United States, from 1 July to 23 November 1904. Many events were conducted at what is now known as Francis Field on the campus of Washington University in St. Louis. This was the first time that the Olympic Games were held outside\n[…]\nLouis, which was then preparing to host the Louisiana Purchase Exposition, a World's Fair in 1903. At the session, representatives of Chicago offered to put $100,000 (equivalent to $3,870,000 in 2025) toward the games. Unable to compete with this, all other countries withdrew their bids before the IOC voted; cities which had previously expressed interest in the 1904 games included Berlin, Copenhagen, and Stockholm. The IOC delegates then voted between the choices of Chicago and St.\n[…]\nLouis, with Chicago winning unanimously on May 21.\n[…]\nHowever, after St. Louis was forced to postpone its World's Fair from 1903 to 1904, it began planning athletic events that would compete directly with the Olympics in Chicago. The Amateur Athletic Union favored St. Louis and planned to hold its national championships at the World's Fair.\n[…]\nIn the meantime, Chicago's plans for a new stadium on the shore of Lake Michigan seating 75,000 met considerable opposition from local leaders, including Aaron Montgomery Ward, putting the centerpiece of Chicago's Olympic bid into question. On December 23, 1902, fearing that the dispute would permanently damage the Olympic movement, the IOC asked its members to approve, by a postal vote, the transfer of the Olympic Games to St. Louis.\n[…]\nAthletes from twelve nations competed in St. Louis. Numbers in parentheses indicate the number of known competitors for each nation.\n[…]\n1904 Summer Olympics – St. Louis\n[…]\n\"St Louis 1904\". Olympics.com. International Olympic Committee."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1904",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos de 1904 (em inglês: 1904 Olympic Games), conhecidos oficialmente como Jogos da III Olimpíada, foram os terceiros Jogos Olímpicos da era moderna. Realizados na cidade de Saint Louis, no estado do Missouri, Estados Unidos. Semelhante aos Jogos Olímpicos de Verão de 1900, em Paris, essa edição foi novamente integrada a uma grande exposição e feira de negócios, dessa vez a Louisiana\n[…]\nTambém como em Paris, os Jogos foram alongados para uma duração de cinco meses, sendo inaugurados em 1 de julho e concluídos em 23 de novembro de 1904.\n[…]\nComo exemplo das instalações precárias dos Jogos de Saint Louis, as provas de natação foram disputadas num grande tanque de águas turvas, habitado por peixes e batráquios.\n[…]\nTalvez o mais pitoresco de todos os participantes desses Jogos tenha sido o cubano Félix Carvajal, um carteiro de Havana, também na maratona. Carvajal, um homem magro de 1,50 m de altura e grandes bigodes, depois de uma verdadeira odisseia para ir de Cuba até Saint Louis, apareceu na largada da prova trajando boina, camisa, calças compridas e calçando coturnos.\n[…]\nOs organizadores obviamente tentaram impedir sua participação, mas atletas americanos, simpatizando e apiedados com o atleta, lhe ajudaram a transformar sua vestimenta em algo parecido com um equipamento esportivo, cortando a calça até os joelhos, encurtando a camisa e lhe emprestando uma sapatilha de corrida.\n[…]\nCarvajal virou o pequeno herói e mascote de seus adversários, que se cotizaram para lhe pagar a passagem de volta a Havana e lhe deram de presente uma placa de prata, com a inscrição: \"A Felix, o IV, o mais glorioso vencido da história dos Jogos\".\n[…]\nO ginasta George Eyser, dos Estados Unidos, foi um dos mais incríveis atletas dos Jogos de Saint Louis conquistando seis medalhas, três delas de ouro, mesmo usando uma prótese de pau na perna esquerda, devido a uma amputação na infância.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Parque Olímpico da Barra",
      "descricao": "Conjunto de arenas no Rio de Janeiro que foi o principal polo de competições dos Jogos Olímpicos de 2016."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na Rio 2016, o principal parque olímpico, com arenas de basquete, natação e tênis, ficava em que bairro da zona oeste carioca?",
    "resposta": "Barra da Tijuca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Barra_Olympic_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barra_Olympic_Park",
        "situacao": "ok",
        "texto": "The Barra Olympic Park (Brazilian Portuguese: Parque Olímpico da Barra), originally the City of Sports Complex, is a cluster of nine sporting venues in Barra da Tijuca, in the west zone of Rio de Janeiro, Brazil. The park, which served as the Olympic Park for the 2016 Summer Olympics and the 2016 Summer Paralympics, was originally built for the 2007 Pan American Games, consisting of three venues.\n[…]\nIn 2009, Rio de Janeiro successfully bid to host the 2016 Summer Olympics and Paralympics. Plans for a new array of venues at the City of Sports, rebranded the Barra Olympic Park, along with the complete demolition of the Jacarepaguá, was in the works. The Barra Velodrome, however, was not approved by the International Cycling Union as an appropriate venue for track cycling events at the Olympics.\n[…]\nIt was decided that costs to upgrade the velodrome would be equally as expensive as building a new venue, thus the Rio Olympic Velodrome, built immediately west of the Rio Olympic Arena, was conceived, with the Barra Velodrome being demolished in 2013. Other new venues constructed for the Olympics include the Carioca Arenas, the Olympic Tennis Center, and the temporary Olympic Aquatics Stadium, built on the site of the former Barra Velodrome, and Future Arena venues.\n[…]\nDomestic broadcaster Rede Globo constructed a studio for its coverage of the Games in Barra Olympic Park.\n[…]\nRio Olympic Velodrome: track cycling (capacity: 5,000)\n[…]\nBarra Velodrome (capacity 5,000)\n[…]\nIn 2017, it was announced that the Olympic Park will be the permanent site of the Rock in Rio traditional international music festival.\n[…]\nDuring the games, the Olympic Way was used to connect pedestrians to major venues in Barra Olympic Park. In 2024, the walkthrough was revitalized as the Rita Lee Park.\n[…]\nOlympic Green\n[…]\nQueen Elizabeth Olympic Park\n[…]\nAthens Olympic Sports Complex\n[…]\nSeoul Olympic Park\n[…]\nSydney Olympic Park\n[…]\nCentennial Olympic Park"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Ol%C3%ADmpico_do_Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Parque Olímpico do Rio de Janeiro é um complexo esportivo e de lazer, construído para os Jogos Olímpicos e Paralímpicos de Verão de 2016, localizado na Barra Olímpica, na Zona Oeste do Rio de Janeiro.\n[…]\nFuturamente, o lado leste do parque abrigará o Centro Olímpico de Treinamento, formado por algumas das arenas e também um alojamento e uma pista de atletismo, que ainda serão construídos. No lado oeste, serão erguidos prédios comerciais e residenciais, transformando a região do parque num mini-bairro.\n[…]\nO Parque Olímpico está localizado no Cabo Pombeba, uma formação geográfica triangular que avança sobre a Lagoa de Jacarepaguá, no bairro da Barra Olímpica, Zona Oeste do Rio de Janeiro. Ao norte, o único lado não banhado pela lagoa, o parque é margeado pela Avenida Embaixador Abelardo Bueno. Sua extremidade noroeste é cortada pelo Rio dos Passarinhos, que separa o Terminal Centro Olímpico do restante do parque.\n[…]\nA oeste, ele faz divisa com a comunidade da Vila Autódromo, a leste, ele faz divisa com a Vila Residencial Aeronáutica da Barra da Tijuca, a única área do Cabo Pombeba alheia ao parque. A extremidade sul do parque fica a apenas 3 300 metros de distância do Oceano Atlântico.\n[…]\nTrês décadas após a abertura do autódromo, foram feitas as primeiras grandes intervenções em seu terreno. Para sediar os Jogos Pan-Americanos de 2007, a Prefeitura do Rio construiu 3 arenas dentro ou ao lado do circuito, dando origem à Cidade dos Esportes: a Arena Olímpica do Rio, o Parque Aquático Maria Lenk e o Velódromo da Barra. A pista original do autódromo sofreu apenas uma pequena alteração, com a remoção de uma curva para contornar a Arena Olímpica.\n[…]\nParque Olímpico de Sydney\n[…]\nCentennial Olympic Park",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Rebeca Andrade",
      "descricao": "Ginasta artística brasileira, campeã olímpica no salto em Tóquio 2020 e no solo em Paris 2024."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A ginasta Rebeca Andrade, campeã olímpica no salto e no solo, nasceu em que cidade da Grande São Paulo?",
    "resposta": "Guarulhos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rebeca_Andrade",
      "https://pt.wikipedia.org/wiki/Rebeca_Andrade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Brazilian Portuguese pronunciation: [ʁeˈbɛkɐ ʁoˈdɾiɡiz dʒ(i)ɐ̃ˈdɾadʒ(i)]; born 8 May 1999) is a Brazilian artistic gymnast. Having won a total of six Olympic and nine World medals, she is the most decorated Brazilian and Latin American gymnast of all time, as well as the most decorated Brazilian Olympian in any discipline.\n[…]\nAndrade was born on 8 May 1999 in Guarulhos. She is one of eight children of a single mother, Rosa. Her mother cleaned houses and walked to work in order to pay for her gymnastics training. She began gymnastics when she was four years old after her aunt took her to the gym where she worked. When she was nine years old, she moved to train in Curitiba, and a year later she moved to Rio de Janeiro to train at Flamengo. She speaks both Portuguese and English, and she is Afro-Brazilian.\n[…]\nAndrade became age-eligible for senior international competitions in 2015. She recovered from her toe injury and made her senior international debut at the Ljubljana World Cup, where she won the bronze medal on the uneven bars behind Isabela Onyshko and Jonna Adlerteg. She then went to the São Paulo World Cup and won the silver medal on vault behind Deng Yalan; she placed seventh on the uneven bars.\n[…]\nIn December 2024, Rebeca Andrade was included on the BBC's 100 Women list.\n[…]\nIn late 2025, Rebeca Andrade was honored with a mural at CEU Butantã, in the western part of São Paulo. The artwork, titled “Rebeca Andrade: Body that Flies, Root that Remains,” is part of the MAR 2025 program of the São Paulo City Hall, which aims to promote urban art in public spaces.\n[…]\nRebeca Andrade at World Gymnastics\n[…]\nRebeca Andrade at Olympics.com\n[…]\nRebeca Andrade at the Brazilian Olympic Committee (in Portuguese)\n[…]\nRebeca Andrade at Olympedia\n[…]\nRebeca Andrade at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Guarulhos, 8 de maio de 1999) é uma ginasta artística brasileira, bicampeã olímpica e a maior medalhista da história do Brasil nos Jogos Olímpicos, com 6 medalhas (2 ouros, 3 pratas e 1 bronze). Também foi bicampeã mundial no salto (2021 e 2023) e campeã mundial individual geral de 2022.\n[…]\nNos Jogos Olímpicos de 2020, Rebeca conquistou a primeira medalha feminina da ginástica brasileira e também latino-americana com a prata no individual geral, e com o ouro no salto, sendo a primeira atleta brasileira a ganhar duas medalhas numa mesma edição das Olimpíadas. Nos Jogos Olímpicos de 2024, Rebeca se tornou a atleta olímpica nacional com mais medalhas nos Jogos, após conquistar o bronze por equipes, a prata no individual geral e no salto, e o ouro no solo.\n[…]\nRebeca começou a treinar aos quatro anos no Ginásio Bonifácio Cardoso, em um projeto social de iniciação ao esporte da prefeitura de Guarulhos, na Região Metropolitana de São Paulo, após incentivo de sua tia, por conta da disposição natural da jovem em treinar truques em casa. Ainda criança, ficou conhecida como a \"Daianinha de Guarulhos\" em alusão a Daiane dos Santos, uma de suas ídolos na ginástica, com quem chegou a treinar em 2009.\n[…]\nOutro feito histórico foi garantido na final do salto, disputa na qual Rebeca foi medalhista de ouro, tornando-se a primeira mulher ginasta campeã olímpica do Brasil e a primeira atleta brasileira com duas medalhas em uma mesma Olímpiada. Rebeca foi confirmada como porta-bandeira da delegação brasileira na cerimônia de encerramento dos Jogos de Tóquio.\n[…]\nEm 06 de fevereiro de 2026, Rebeca participou da Cerimônia de abertura dos Jogos Olímpicos de Inverno de 2026 como portadora da Bandeira Olímpica.\n[…]\nRebeca Andrade no Instagram\n[…]\nRebeca Andrade em Olympics.com"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Pierre de Coubertin",
      "descricao": "Pedagogo francês, fundador do Comitê Olímpico Internacional e idealizador dos Jogos Olímpicos modernos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Pierre de Coubertin foi sepultado na Suíça, mas seu coração foi levado para a Grécia e enterrado num monumento. Em que lugar?",
    "resposta": "Em Olímpia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pierre_de_Coubertin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pierre_de_Coubertin",
        "situacao": "ok",
        "texto": "Charles Pierre de Frédy, Baron de Coubertin (French: [ʃaʁl pjɛʁ də fʁedi baʁɔ̃ də kubɛʁtɛ̃]; born Pierre de Frédy; 1 January 1863 – 2 September 1937), also known as Pierre de Coubertin and Baron de Coubertin, was a French educator and historian, co-founder of the International Olympic Committee (IOC), and its second president. He is known as the father of the modern Olympic Games. He was particula\n[…]\nPierre de Frédy was born in Paris on 1 January 1863, into an aristocratic family. He was the fourth child of Charles Louis de Frédy, Baron de Coubertin, and Marie-Marcelle Gigault de Crisenoy.\n[…]\nMacAloon, John J. (1981). This Great Symbol: Pierre de Coubertin and the Origins of the Modern Olympic Games. Chicago: University of Chicago Press. ISBN 978-0-226-50000-3.\n[…]\nPierre de Coubertin, Olympism: selected writings, edited by Norbert Müller, Lausanne, IOC, 2000\n[…]\nMacaloon, John J (2007) [1981]. This Great Symbol. Pierre de Coubertin and the Origins of the Modern Olympic Games (New ed.). University of Chicago Press. Routledge. ISBN 978-0-415-49494-6.\n[…]\n\"This Great Symbol: Pierre de Coubertin and the Origins of the Modern Olympic Games\". International Journal of the History of Sport. 23 (3 & 4). 2006. Retrieved 19 October 2016 – via Taylor & Francis.\n[…]\nStephan Wassong, Pierre de Coubertin's American studies and their importance for the analysis of his early educational campaign. Web publishing on LA84 Foundation. 2004.\n[…]\nWesseling, H. L. \"Pierre de Coubertin: sport and ideology in the Third Republic, 1870–1914.\" European Review 8.2 (2000): 167–171.\n[…]\nThe International Pierre De Coubertin Committee (CIPC) – Lausanne (archived)\n[…]\nDiscourse of Pierre de Coubertin at Sorbonne announcing the restoring of the Olympic games (in French), audio)\n[…]\nNewspaper clippings about Pierre de Coubertin in the 20th Century Press Archives of the ZBW\n[…]\nPierre de Coubertin at the World Rugby Hall of Fame"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pierre_de_Coubertin",
        "situacao": "ok",
        "texto": "Charles Pierre Fredy de Coubertin (Paris, 1 de janeiro de 1863 — Genebra, 2 de setembro de 1937), mais conhecido pelo seu título nobiliárquico de Barão de Coubertin, foi um pedagogo e historiador francês, que ficou para a história como o fundador dos Jogos Olímpicos da era moderna.\n[…]\nPara publicar os seus planos, organizou um congresso internacional em 23 de Junho de 1894 na Sorbonne em Paris. Então, propôs que fosse reinstituída a tradição de realizar um evento desportivo internacional periódico, inspirado no que se fazia na Grécia antiga. Este congresso levou à constituição do Comitê Olímpico Internacional (COI), do qual o barão de Coubertin seria secretário-geral entre (1896-1925).\n[…]\nApós os Jogos de 1896, Demetrius Vikelas abandonou o posto de presidente do COI e Pierre de Coubertin tomou o seu lugar na frente da organização. Apesar do sucesso dos primeiros jogos, o Movimento Olímpico enfrentaria tempos difíceis, com os Jogos Olímpicos de 1900 e de 1904 a serem completamente obscurecidos pelas exposições mundiais em que foram integrados, e passando completamente despercebidos.\n[…]\nCoubertin morreu em 2 de setembro de 1937, em Genebra. Foi enterrado em Lausanne (local da sede do COI), mas o seu coração foi sepultado separadamente, num monumento perto das ruínas da antiga Olímpia.\n[…]\nEmbora Coubertin fosse certamente um romântico, e embora sua visão idealizada da Grécia antiga o levasse mais tarde à ideia de reviver os Jogos Olímpicos, sua defesa da educação física também se baseava em preocupações práticas. Ele acreditava que os homens que recebiam educação física estariam mais bem preparados para lutar em guerras e mais capazes de vencer conflitos como a Guerra Franco-Prussiana, na qual a França havia sido humilhada.\n[…]\nseleção de escritos do barão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Comitê Olímpico Internacional",
      "descricao": "Organização que comanda o movimento olímpico e escolhe as sedes dos Jogos Olímpicos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Fundado em Paris, o Comitê Olímpico Internacional transferiu sua sede em 1915, durante a Primeira Guerra, para que cidade suíça?",
    "resposta": "Lausanne",
    "fonte": [
      "https://en.wikipedia.org/wiki/International_Olympic_Committee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/International_Olympic_Committee",
        "situacao": "ok",
        "texto": "The International Olympic Committee (IOC) is the international, non-governmental, sports governing body of the modern Olympic Games. Founded in 1894 by Pierre de Coubertin and Demetrios Vikelas, it is based in Lausanne, Switzerland. The IOC is the authority responsible for organising the Summer, Winter, and Youth Olympics.\n[…]\nThe IOC received approval in November 2015 to construct a new headquarters in Vidy, Lausanne. The cost of the project was estimated to stand at $156m. The IOC announced on 11 February 2019 that the \"Olympic House\" would be inaugurated on 23 June 2019 to coincide with its 125th anniversary. The Olympic Museum remains in Ouchy, Lausanne.\n[…]\nOlympic Foundation (Lausanne, Switzerland)\n[…]\nOlympic Refuge Foundation (Lausanne, Switzerland)\n[…]\nThe Olympic Partner Programme (Lausanne, Switzerland)\n[…]\nOlympic Broadcasting Services S.A. (Lausanne, Switzerland)\n[…]\nOlympic Channel Services S.A. (Lausanne, Switzerland)\n[…]\nOlympic Foundation for Culture and Heritage (Lausanne, Switzerland)\n[…]\nOlympic Museum (Lausanne, Switzerland)\n[…]\nOlympic Solidarity (Lausanne, Switzerland)\n[…]\nOn 12 October 2023, the International Olympic Committee issued a statement stating that after Russia began its full-scale invasion of Ukraine in 2022, the Russian Olympic Committee unilaterally transferred four regions that were originally under the jurisdiction of the National Olympic Committee of Ukraine: Donetsk Oblast, Luhansk Oblast, Kherson Oblast, Zaporizhzhia Oblast were included as members of their own, so the International Olympic Committee announced the suspension of the membership of the Russian Olympic Committee with immediate effect.\n[…]\nOlympic Congress\n[…]\nChappelet, Jean-Loup; Brenda Kübler-Mabbott (2008). International Olympic Committee and the Olympic system: the governance of world sport. New York: Routledge. ISBN 978-0-415-43167-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Comit%C3%A9_Ol%C3%ADmpico_Internacional",
        "situacao": "ok",
        "texto": "O Comitê(pt-BR) ou Comité(pt-PT?) Olímpico Internacional (COI, do inglês International Olympic Committee) é uma organização não governamental criada em 23 de junho de 1894, por iniciativa do francês Pierre de Coubertin, com a finalidade de reinstituir os Jogos Olímpicos realizados na antiga Grécia e organizar e promover a sua realização de quatro em quatro anos.\n[…]\nPromover um legado positivo dos Jogos Olímpicos para as cidades, regiões e países-sede;\n[…]\n\"Honrado por ser escolhido como membro do Comitê Olímpico Internacional, aceito plenamente todas as responsabilidades que este cargo traz: prometo servir o Movimento Olímpico da melhor maneira possível. Respeitarei a Carta Olímpica e aceitarei as decisões do o COI. Sempre agirei independentemente de interesses comerciais e políticos, bem como de qualquer consideração racial ou religiosa. Cumprirei integralmente o Código de Ética do COI.\n[…]\nPrometo lutar contra todas as formas de discriminação e me dedicar em todas as circunstâncias para promover os interesses do Comitê Olímpico Internacional e do Movimento Olímpico\".\n[…]\nO COI recebeu aprovação em novembro de 2015 para construir uma nova sede em Vidy, Lausanne. O custo do projeto foi estimado em US$ 156 milhões. O COI anunciou em 11 de fevereiro de 2019 que a \"Casa Olímpica\" seria inaugurada em 23 de junho de 2019 para coincidir com seu 125º aniversário. O Museu Olímpico permanece em Ouchy, Lausanne.\n[…]\nEleger a cidade-sede dos Jogos Olímpicos.\n[…]\nFundação Olímpica (Lausanne, Suíça)\n[…]\nIOC Television and Marketing Services SA (Lausanne, Suíça)\n[…]\nPrograma Parceiro Olímpico (Lausanne, Suíça)\n[…]\nOlympic Broadcasting Services SA (Lausanne, Suíça)\n[…]\nOlympic Channel Services SA (Lausanne, Suíça)\n[…]\nFundação Olímpica para Cultura e Patrimônio (Lausanne, Suíça)\n[…]\nCentro de Estudos Olímpicos\n[…]\nMuseu Olímpico\n[…]\nSolidariedade Olímpica (Lausanne, Suíça)\n[…]\nComité Paralímpico Internacional",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Cerimônia de abertura dos Jogos Olímpicos de 2024",
      "descricao": "Cerimônia que abriu os Jogos Olímpicos de Paris, em julho de 2024, realizada fora de um estádio."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na cerimônia de abertura de Paris 2024, em vez de entrar num estádio, as delegações desfilaram em barcos ao longo de que rio?",
    "resposta": "Sena",
    "fonte": [
      "https://en.wikipedia.org/wiki/2024_Summer_Olympics_opening_ceremony"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2024_Summer_Olympics_opening_ceremony",
        "situacao": "ok",
        "texto": "The opening ceremony of the 2024 Summer Olympics took place on 26 July 2024 across Paris, beginning at 19:30 CEST (17:30 UTC). As mandated by the Olympic Charter, the proceedings included an artistic program showcasing the culture of the host country and city, the parade of athletes and the lighting of the Olympic cauldron. The Games were formally opened by the president of France, Emmanuel Macron\n[…]\nCertain elements and sequences were not able to be implemented such as having performers lean out of the Hôtel-Dieu, Paris decommissioned hospital building due to asbestos. Other plans that did not go through included a performance that would take place near a fish hatchery by the Béthune Quay on the bank of the Seine, which was not to be disturbed, a mass of dancers on a bridge that would have caused its collapse, and an undisclosed scene that had been reworked 73 times by May 2024.\n[…]\nIn October 2023, following security concerns caused by the Russian invasion of Ukraine, the Gaza war and the Arras school stabbing, both the French government and the Paris Organising Committee for the 2024 Olympic and Paralympic Games (COJOP2024) stated there were no official plans to relocate, stating that \"Plan A takes into account all of the threats\".\n[…]\nThe Festivité segment contained a scene of drag queens and other dancers (such as child krump dancer, Adeline Cruz), arranged in a row along a catwalk. A statement from Paris 2024 said that it was inspired by Leonardo da Vinci's fresco The Last Supper (housed in Santa Maria delle Grazie in Milan, one of the host cities of the 2026 Winter Olympics), which depicts Jesus and the Twelve Apostles.\n[…]\nIn response to the criticism, the Paris 2024 producers stated that director Thomas Jolly \"took inspiration from Leonardo da Vinci's famous painting to create the setting\", and argued that the painting had already been frequently parodied in popular culture."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerim%C3%B4nia_de_abertura_dos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "A cerimônia de abertura dos Jogos Olímpicos de Verão de 2024 aconteceram na noite do dia 26 de julho às margens do Rio Sena, se encerrando nos Jardins du Trocadéro, em Paris na França.\n[…]\nEm 13 de dezembro de 2021, foi anunciado que a cerimônia de abertura contaria com os atletas sendo transportados de barco da Pont d'Austerlitz para Pont d'Iéna ao longo do rio Sena. A rota de 6 km (3,7 milhas) passaria por pontos de referência como o Louvre, Notre-Dame de Paris e Place de la Concorde, e contaria com apresentações culturais. O protocolo oficial aconteceria em um \"mini-estádio\" de 30 000 lugares no Trocadéro.\n[…]\nTerminado o desfile das delegações, o Sena agora é tomado com um show colorido e novas embarcações com mais apresentações concluindo a primeira parte da cerimônia. No Trocadero, a Torre Eiffel é iluminada com as cores da União Europeia, recebendo também as estrelas que representam os países europeus, assim como um dos barcos no Sena que reproduzem a bandeira enquanto dançarinos se apresentam pedindo a paz.\n[…]\nOs atletas desfilaram em uma ordem ditada pela tradição olímpica, ás margens do Rio Sena em grandes embarcações. Como o país de origem das Olimpíadas, a Grécia entra primeiro. As outras delegações entraram de acordo com o alfabeto francês, com exceção dos Estados Unidos e da Austrália, que são os penúltimos a entrar por serem a sede dos Jogos Olímpicos de Verão de 2028 e Jogos Olímpicos de Verão de 2032. Seguindo a tradição, a delegação do país-sede, França, entrou por último.\n[…]\nJibril Rajoub, Chefe do Comitê Olímpico Palestino\n[…]\nCerimônia de encerramento dos Jogos Olímpicos de Verão de 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Maratona olímpica de 1896",
      "descricao": "Primeira maratona da história dos Jogos Olímpicos, disputada em Atenas em 1896."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na primeira maratona olímpica, em Atenas 1896, a vitória ficou com um grego que trabalhava como carregador de água. Qual era o nome dele?",
    "resposta": "Spyridon Louis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Spyridon_Louis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spyridon_Louis",
        "situacao": "ok",
        "texto": "Spyridon Louis (Greek: Σπυρίδων Λούης [spiˈriðon ˈluis], sometimes transliterated Spiridon Loues; 12 January 1873 – 26 March 1940), commonly known as Spyros Louis (Σπύρος Λούης), was a Greek water carrier who won the first modern-day Olympic marathon at the 1896 Summer Olympics. Following his victory, he was celebrated as a national hero.\n[…]\nSpyridon Louis was born in the town of Marousi, north of Athens, into a poor family. Louis's father sold mineral water in Athens, which at the time lacked a central water supply, and Spyridon helped him by transporting it.\n[…]\n(Louis's grandson, also Spyridon Louis, has stated that this is incorrect; that his grandfather's girlfriend gave him half an orange and shortly afterwards he \"got a glass of cognac from his future father-in-law.\") After asking for the advantage of the other runners, he confidently declared he would overtake them all before the end.\n[…]\nSeveral months before the Italian invasion of Greece, Louis died. In Greece, various sports establishments are named after him. These include the Olympic Stadium of Athens where the 2004 Summer Olympics were held, as well as the road outside the stadium.\n[…]\nThe silver cup given to Louis at the first modern Olympic Games staged in Athens in 1896, was sold for £541,250 ($860,000) in London during a Christie's auction on 18 April 2012. The trophy, with a height of six inches, broke the auction record for Olympic memorabilia. The item was sold on the day Britain marked the 100 days' countdown to the 2012 London Olympics. Christie's called the auction \"heated\" and involved six bidders.\n[…]\nSpyridon Louis at World Athletics\n[…]\nSpyridon Louis at Tilastopaja (registration required)\n[…]\nSpyridon Louis at Athletics Podium\n[…]\nSpyridon Louis at Olympics.com\n[…]\nSpyridon Louis at Olympedia\n[…]\nSpyridon Louis at the Hellenic Olympic Committee"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Spiridon_Louis",
        "situacao": "ok",
        "texto": "Spiridon Louis (grego: Σπυρίδων \"Σπύρος\" Λούης; Marousi, 12 de janeiro de 1873 — Atenas, 26 de março de 1940) foi um corredor de longa distância e campeão olímpico grego, o primeiro homem a vencer uma maratona olímpica, nos I Jogos Olímpicos da Era Moderna, em Atenas 1896.\n[…]\nA maratona olímpica seria realizada em 10 de abril, apenas uma semana depois da corrida seletiva de Louis. O público grego até aquele momento vinha sendo entusiástico com o desenrolar dos Jogos, mas estava desapontado porque no atletismo até então o país não tinha conseguido nenhuma vitória. A vitória do norte-americano  Robert Garrett no lançamento do disco, um esporte clássico grego, havia sido especialmente dolorosa para o povo.\n[…]\nQuando Spiridon Louis finalmente entrou no estádio sob os gritos de milhares de gregos, dois príncipes - Constantino e George - o acompanharam correndo a última volta na pista, servindo-lhe vinho, água, leite, cerveja, suco de laranja e até pedaços de um ovo de páscoa. Louis cruzou a faixa a linha de chegada em 2h58m50s, estabelecendo a primeira marca mundial para a maratona. A vitória iniciou uma série de comemorações selvagens, como descritas no relatório oficial dos Jogos:\n[…]\nVoula Patoulidou, a primeira campeã olímpica grega de atletismo, ouro nos 100 m c/ barreiras em Barcelona 1992, quase cem anos após a vitória de Louis, liderou uma campanha de fundos para que o troféu - com valor previsto em leilão de cerca de € 200 mil euros - ficasse no país e no Museu Olímpico Grego. Vendido em abril de 2012 por cerca de US$ 800 mil (£ 541 250), muito acima do previsto, tornou-se o mais caro e valioso item olímpico de todos os tempos.\n[…]\nLista de campeões olímpicos da maratona\n[…]\nLista dos campeões olímpicos de atletismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Hino olímpico",
      "descricao": "Composição grega tocada pela primeira vez nos Jogos de Atenas 1896 e adotada como hino oficial do movimento olímpico."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O hino olímpico, tocado pela primeira vez nos Jogos de Atenas 1896, teve a música composta por que compositor grego?",
    "resposta": "Spyros Samaras",
    "distratores": [
      "Mikis Theodorakis",
      "Vangelis",
      "Manos Hadjidakis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_Hymn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_Hymn",
        "situacao": "ok",
        "texto": "The Olympic Hymn (Greek: Ολυμπιακός Ύμνος, pronounced [oli(m)bi̯aˈkos ˈimnos]), also known as the Olympic Anthem, is a choral cantata by opera composer Spyridon Samaras (1861–1917), with Demotic Greek lyrics by Greek poet Kostis Palamas. Both poet and composer were the choice of the Greek Demetrius Vikelas, who was the first President of the International Olympic Committee.\n[…]\nThe anthem was performed for the first time for the ceremony of opening of the first edition at the 1896 Summer Olympics in Athens, Greece. In the following years, every hosting nation commissioned to various musicians the composition of a specific Olympic hymn for their own edition of the games.\n[…]\nThe anthem by Samaras and Palamas was declared the official Olympic Anthem by the International Olympic Committee in 1958 at the 54th Session of the IOC in Tokyo, Japan. The anthem was performed in English at the 1960 Winter Olympics in Squaw Valley and since then it has been played at each Olympic Games: during the opening ceremony when the Olympic flag is hoisted, and during the closing ceremony when the Olympic flag is lowered.\n[…]\nThe hymn was also sung during the Olympic flame lighting ceremony before the national anthems were sung.\n[…]\nThe Olympic Hymn was also used, along with the Olympic flag, to represent the Unified Team of former Soviet states at the 1992 Winter Olympics and the 1992 Summer Olympics.\n[…]\nOlympian flame immortal\n[…]\nAll hail our brave Olympians\n[…]\nOlympic light burn on and on\n[…]\nSince 2018, the IOC requires that the anthem be performed in either English, Greek or instrumentally (although this is optional depending on the organizer of an Olympics).\n[…]\nOlympic symbols\n[…]\nList of Olympic songs and anthems\n[…]\nThe original score of the Olympic Hymn, transcribed at Wikisource\n[…]\nPhilip Barker. The Anthem – Olympism's Oldest Symbol\n[…]\nA collection of recordings of the Olympic Hymn in various languages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_Ol%C3%ADmpico",
        "situacao": "ok",
        "texto": "O Hino Olímpico (Grego: Ολυμπιακός Ύμνος) foi composto pelo grego Spyridon Samaras, com letra do poeta romano  Kostís Palamás em 1800. O hino foi adotado pelo Comitê Olímpico Internacional (COI) em 1958. É executado durante a Cerimônia de Abertura de cada edição, quando a Bandeira Olímpica é hasteada, e na Cerimônia de Encerramento, quando ela é arriada.\n[…]\nO hino começou a ser cantado em grego, mas em várias edições foi traduzido para o idioma do país anfitrião. Em Sydney 2000, o hino voltou a ser cantado em grego na Cerimônia de Abertura, o que foi repetido em  Pequim 2008.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Torneio olímpico de futebol masculino de 2016",
      "descricao": "Competição de futebol masculino dos Jogos Olímpicos do Rio de Janeiro, vencida pelo Brasil."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na final olímpica da Rio 2016, contra a Alemanha, quem bateu o pênalti que deu à seleção masculina de futebol o inédito ouro olímpico?",
    "resposta": "Neymar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Football_at_the_2016_Summer_Olympics_–_Men's_tournament",
      "https://en.wikipedia.org/wiki/Neymar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Football_at_the_2016_Summer_Olympics_–_Men's_tournament",
        "situacao": "ok",
        "texto": "The men's football tournament at the 2016 Summer Olympics was held in Rio de Janeiro and five other cities in Brazil from 4 to 20 August 2016. It was the 26th edition of the men's Olympic football tournament. Together with the women's competition, the 2016 Summer Olympics football tournament was held in six cities in Brazil, including Olympic host city Rio de Janeiro, which hosted the final at Est\n[…]\nIn March 2016, it was agreed that the competition would be part of IFAB's trial to allow a fourth substitute to be made during extra time.\n[…]\nOn 2 May 2016, FIFA released the list of match referees that would officiate at the Olympics.\n[…]\nThe draw for the tournament was held on 14 April 2016, 10:30 BRT (UTC−3), at the Maracanã Stadium in Rio de Janeiro. The 16 teams in the men's tournament were drawn into four groups of four teams. The teams were seeded into four pots based on their performances in the five previous Olympics (with more recent tournaments weighted higher), plus bonus points awarded to the six confederation qualifying champions (Japan, Nigeria, Mexico, Argentina, Fiji, Sweden).\n[…]\nIn the knockout stage, if a match was level at the end of normal playing time, extra time was played (two periods of fifteen minutes each) and followed, if necessary, by a penalty shoot-out to determine the winner.\n[…]\nOn 18 March 2016, the FIFA Executive Committee agreed that the competition would be part of the International Football Association Board's trial to allow a fourth substitute to be made during extra time.\n[…]\nAs per statistical convention in football, matches decided in extra time are counted as wins and losses, while matches decided by penalty shoot-outs are counted as draws.\n[…]\nFootball at the 2016 Summer Olympics – Women's tournament\n[…]\nMen's Olympic Football Tournament, Rio 2016, FIFA.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Neymar",
        "situacao": "ok",
        "texto": "Neymar da Silva Santos Júnior (born 5 February 1992), known mononymously as Neymar, is a Brazilian professional footballer who plays as an attacking midfielder or a forward for and captains Campeonato Brasileiro Série A club Santos. A goalscorer and playmaker, he is known for his dribbling, technical ability, agility, passing, and finishing.\n[…]\nIn the quarter-final of the Copa del Rey in January 2016, Neymar scored twice in Barcelona's 5–2 aggregate win over Athletic Bilbao. On 12 March, in a 6–0 win, he scored twice against Getafe in the league. Neymar had another successful La Liga campaign, being directly involved in 40 goals (24 goals and 16 assists) as Barcelona won the title, finishing just one point ahead of Real Madrid. He also won eight penalties for Barcelona, more than any other player in the league.\n[…]\nOn 12 September of the 2016–17 season, Neymar registered a goal and four assists in Barcelona's 7–0 win against Celtic in the group stage of the Champions League. In an away fixture in La Liga against Sporting Gijón on 24 September, he scored twice in a 5–0 win. On 19 January 2017, he scored his club's only goal in a 1–0 win in the first leg of the Copa del Rey quarter-final against Real Sociedad, converting from the penalty spot.\n[…]\nOn 6 January 2026, Neymar extended his contract with Santos until the end of the year. On 26 February, he led Santos to a 2–1 victory over Vasco da Gama, scoring both goals. On 26 July, he scored twice against Chapecoense in a 2–2 draw, scoring the equaliser from the penalty spot in the final minutes of the game.\n[…]\nOn 10 July, Brazil were defeated 1–0 by Argentina in the final. Despite the loss, Neymar received the Golden Ball alongside Argentina's Messi for his performances throughout the competition.\n[…]\nNeymar at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nNeymar at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Futebol_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2016_-_Masculino",
        "situacao": "ok",
        "texto": "O torneio masculino de futebol nos Jogos Olímpicos de Verão de 2016 ocorreu entre 4 e 20 de agosto. Foi a vigésima sexta edição do futebol nos Jogos Olímpicos. As partidas foram realizadas em sete estádios de seis cidades espalhadas por várias regiões do Brasil.\n[…]\nO Brasil ganhou pela primeira vez a medalha de ouro olímpica ao derrotar a Alemanha na final por pênaltis por 5 a 4 e a Nigéria superou Honduras por 3 a 2 e ficou com a medalha de bronze.\n[…]\nComo anfitrião do evento, o Brasil é o quarto país a conquistar a medalha de ouro no futebol, o mesmo com o Reino Unido em 1908, Bélgica em 1920 e a Espanha em 1992.\n[…]\nO sorteio dos grupos foi realizado em 14 de abril de 2016. Brasil, México, Argentina e Japão foram escolhidas como cabeças de chave e colocadas nos grupos A, B, C e D respectivamente. As equipes restantes foram divididas em 4 potes, de acordo com a classificação dos últimos 5 Jogos Olímpicos.\n[…]\nAlém disso, diferentemente de Londres 2012, desta vez o torneio não fez parte da chamada Data FIFA, muito por conta da Eurocopa de 2016 e da Copa América Centenário, que haviam sido disputadas recentemente. Assim, os clubes não foram obrigados a liberar para a disputa dos Jogos os jogadores com idade acima de 23 anos.\n[…]\nEm 2 de maio de 2016, a FIFA divulgou os dezesseis trios de arbitragem masculinos que atuaram nas Olímpiadas:\n[…]\nNa primeira fase as seleções foram divididas em quatro grupos de quatro equipas, que deram classificação às quartas de final para as duas primeiras classificadas.\n[…]\nEstes jogadores marcaram pelo menos um gol no torneio Olímpico de futebol masculino.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Brasil nos Jogos Olímpicos de Verão de 1920",
      "descricao": "Participação brasileira nos Jogos de Antuérpia 1920, a primeira do país em Jogos Olímpicos."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O primeiro ouro olímpico do Brasil veio no tiro esportivo, nos Jogos de Antuérpia 1920. Quem foi o campeão?",
    "resposta": "Guilherme Paraense",
    "distratores": [
      "Afrânio da Costa",
      "Adhemar Ferreira da Silva",
      "Tetsuo Okamoto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_at_the_1920_Summer_Olympics",
      "https://en.wikipedia.org/wiki/Guilherme_Paraense"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_at_the_1920_Summer_Olympics",
        "situacao": "ok",
        "texto": "Brazil competed at the modern Olympic Games for the first time at the 1920 Summer Olympics in Antwerp, Belgium. 19 competitors, all men, took part in 10 events in 5 sports.\n[…]\nOn August 2, Brazil had already started the men's 50 metre team free pistol, with Fernando Soledade. As his weapon was very bad, the head of the American shooting team, Colonel Snyders, lent the Brazilians two weapons manufactured by Colt especially for the competition. The shooters Sebastião Wolf, Dario Barbosa, Guilherme Paraense and Afrânio da Costa exchanged the weapons among themselves and won the bronze medal for men's 50 metre team free pistol.\n[…]\nThe next day, Guilherme Paraense, a Lieutenant of the Army, became the first ever gold medalist from Brazil, when he won the 30 metre military pistol event.\n[…]\nFive rowers represented Brazil in 1920. It was the nation's debut in the sport. Brazil sent one boat, in the coxed fours. It was unable to advance past the semifinals, taking second place to the United States in the three-boat heat.\n[…]\nFive shooters represented Brazil in 1920. It was the nation's debut in the sport as well as the Olympics. All three of Brazil's medals at the Antwerp Games came in shooting events, with one of each type.\n[…]\nTwo swimmers, both male, represented Brazil in 1920. It was the nation's debut in the sport as well as the Olympics. Neither swimmer advanced past the quarterfinals.\n[…]\nBrazil competed in the Olympic water polo tournament for the first time in 1920. A modified version of the Bergvall System was in use at the time. Brazil won its first match, against France, before being defeated by Sweden in the quarterfinals."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Guilherme_Paraense",
        "situacao": "ok",
        "texto": "Guilherme Paraense (25 June 1884 – 18 April 1968) was a Brazilian sport shooter and Olympic Champion. He was the first Brazilian to win an Olympic gold medal.\n[…]\nParaense was born in Belém. He won a gold medal at the 1920 Summer Olympics in Antwerp, in the Rapid-Fire Pistol event. He was also part of the Brazilian team which earned a bronze medal in Military Revolver.\n[…]\nParaense died in Rio de Janeiro, aged 83.\n[…]\nGuilherme Paraense at Olympics.com\n[…]\nGuilherme Paraense at the International Shooting Sport Federation\n[…]\nGuilherme Paraense at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brasil_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1920",
        "situacao": "ok",
        "texto": "Nos Jogos Olímpicos de Verão de 1920, o Brasil participaria de sua  primeira Olimpíada, em Antuérpia (Bélgica). Os 21 atletas brasileiros - apenas homens - chegaram à Europa e conquistaram três medalhas: uma de ouro, uma de prata e uma de bronze. A modalidade que trouxe essas medalhas para o Brasil foi o tiro ao alvo.\n[…]\nChefiada por Roberto Trompowsky Júnior, a delegação brasileira embarcou a bordo do navio a vapor Curvello em 1º de julho de 1920 rumo à Antuérpia. Os sete atiradores tiveram grandes dificuldades para chegar às provas. Tiveram que descer em Portugal quando souberam que a embarcação não chegaria a tempo para a prova de tiro. Eles então pegaram um trem de Lisboa a Paris, sendo que boa parte da viagem foi num vagão descoberto, com os atletas pegando chuva e sol.\n[…]\nO Brasil já começou a participar na prova de pistola livre, com Fernando Soledade. Como sua arma era muito ruim, o chefe da equipe americana de tiro, Coronel Snyders, ficou sensibilizado e cedeu duas armas fabricadas pela Colt especialmente para a competição.\n[…]\nOs atiradores Sebastião Wolf, Dario Barbosa, Guilherme Paraense e Afrânio da Costa fizeram um \"rodízio\" com as armas e conquistaram a medalha de bronze por equipes. Afrânio também conseguiu a medalha de prata individual.\n[…]\nO ouro chegou no dia seguinte, na prova de revólver (hoje chamada de tiro rápido). Guilherme Paraense, primeiro-tenente do Exército, acertou 274 pontos em 300, ficando dois pontos à frente do americano Bracken (exatamente o mesmo que emprestou os cartuchos e alvos).\n[…]\nParaense, com 36 anos, foi o primeiro medalhista de ouro do Brasil.\n[…]\nO país participou de 3 esportes: esportes aquáticos (natação, pólo aquático e saltos ornamentais), remo e tiro esportivo.\n[…]\nBrasil nos Jogos Olímpicos de Verão\n[…]\nComitê Olímpico Brasileiro\n[…]\n«Site oficial do Comitê Olímpico Brasileiro»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Cobi",
      "descricao": "Mascote dos Jogos Olímpicos de Barcelona 1992, um cão pastor-catalão desenhado em estilo cubista."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Cobi, o cão pastor de traço cubista que foi mascote dos Jogos de Barcelona 1992, foi criado por que artista espanhol?",
    "resposta": "Javier Mariscal",
    "distratores": [
      "Joan Miró",
      "Salvador Dalí",
      "Antoni Tàpies"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cobi",
      "https://en.wikipedia.org/wiki/Javier_Mariscal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cobi",
        "situacao": "desambiguacao",
        "texto": "Cobi or COBI may refer to:\n\n\n== People ==\nCobi (musician) (Jacob Michael Schmidt, born 1986), an American musician\nCobi Crispin (born 1988), an Australian wheelchair basketball player\nCobi Hamilton (born 1990), an American football player\nCobi Jones (born 1970), an American soccer player\n\n\n== Other uses ==\nCobi (mascot), the official mascot of the 1992 Summer Olympics in Barcelona\nCobi (building b"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Javier_Mariscal",
        "situacao": "ok",
        "texto": "Francisco Javier Errando Mariscal, better known as Javier Mariscal (born 9 February 1950), is a Spanish artist and designer whose work has spanned a wide range of mediums, ranging from painting and sculpture to interior design and landscaping. He is best known for creating Cobi, the official mascot for the 1992 Barcelona Summer Olympics. Cobi was a stylized dog and became one of the most recogniza\n[…]\nMariscal's artistic language is synthetic, with few strokes and a great deal of expressiveness. He started studying at Colegio El Pilar in Valencia. After that he studied design at the Elisava School in Barcelona, but he soon left to learn directly in his environment and follow his own creative impulses. His first steps were in underground comics, a task that he soon combined with illustration, sculpture, graphic design and interior design.\n[…]\nThroughout the 1980s, he designed several textile collections for Marieta and Tráfico de Modas and exhibited at the Vinçon salon in Barcelona. In 1989, Cobi was chosen as the official mascot for the 1992 Summer Olympics to be held in Barcelona. The mascot was the centre of great controversy because of its vanguard style, but Cobi is now recognised as the most profitable mascot in the history of the modern games. He also created Petra, the official mascot of the 1992 Summer Paralympics.\n[…]\nAnother sample of his interdisciplinary vocation is the audiovisual show Colors, which premiered in Barcelona in 1999 and starred the robot Dimitri, another of Mariscal's creatures. The script of Colors has been adapted for the frequent conferences on design he gives all over the world which, rather than conferences are entertaining pocket shows marked with humour and tenderness.\n[…]\nMariscal Sketches\n[…]\nJavier Mariscal Profile on IDFX Magazine\n[…]\nJavier Mariscal: the artist\n[…]\nJavier Mariscal portraits @ Design Museum Archived 19 February 2012 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Pira olímpica de Paris 2024",
      "descricao": "Pira em forma de balão dos Jogos Olímpicos de Paris 2024, instalada no Jardim das Tulherias."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Paris 2024, a pira em forma de balão foi acesa por um judoca e uma velocista, ambos campeões olímpicos franceses. Quem eram eles?",
    "resposta": "Teddy Riner e Marie-José Pérec",
    "fonte": [
      "https://en.wikipedia.org/wiki/2024_Summer_Olympics_opening_ceremony",
      "https://en.wikipedia.org/wiki/Teddy_Riner"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2024_Summer_Olympics_opening_ceremony",
        "situacao": "ok",
        "texto": "The opening ceremony of the 2024 Summer Olympics took place on 26 July 2024 across Paris, beginning at 19:30 CEST (17:30 UTC). As mandated by the Olympic Charter, the proceedings included an artistic program showcasing the culture of the host country and city, the parade of athletes and the lighting of the Olympic cauldron. The Games were formally opened by the president of France, Emmanuel Macron\n[…]\nActors Yuming Hey, Léa Luce Busato, and Elan Ben Ali performed a pre-recorded seduction scene at the salle ovale of the Richelieu site of the Bibliothèque nationale de France to French literature titles including: Romances Sans Parole (Romances Without Words) by Paul-Marie Verlaine, 1874; Bel-Ami (Nice Friend) by Guy de Maupassant, 1885; On Ne Badine Pas Avec L'amour (No Trifling with Love) by Alfred de Musset, 1834; Passion Simple (Simple Passion) by Annie Ernaux, 1992; Sexe Et Mensonges (Sex and Lies) by Leila Slimani, 2021; Le Diable Au Corps (The Devil in the Body) by Raymond Radiguet, 1923; Les Liaisons Dangereuses (Dangerous Relationships) by Pierre Choderlos de Laclos, 1782; Les Amants Magnifiques (The Magnificent Lovers) by Molière, 1670; and Le Triomphe De L'amour (The Triumph of Love) by Pierre de Marivaux, 1732.\n[…]\nThey were joined by Paralympic champions Nantenin Keïta, Alexis Hanquinquant, and Marie-Amélie Le Fur, officially opening the twelfth and final sequence, Éternité (eternity).\n[…]\nThe final leg culminated with Coste lighting the torches of Teddy Riner and Marie-José Pérec, who then lit the Olympic cauldron, a ring of 40 computerized LEDs and 200 high-pressure water aerosol spray dispensers which was topped by a 30-metre-tall helium sphere resembling a hot air balloon, rising in the air, reminiscent of the Montgolfier brothers' experiments leading to the first hot air balloon flight in 1783.\n[…]\n2024 Summer Olympics\n[…]\n2024 France railway arson attacks"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Teddy_Riner",
        "situacao": "ok",
        "texto": "Teddy Pierre-Marie Riner (, French: [tedi pjɛʁ maʁi ʁinœʁ]; born 7 April 1989) is a French heavyweight judoka. A nine-time world champion in the heavyweight (+100 kg) division, two-time openweight world champion, and one-time world champion with the French men's team, he is the first and only judoka in history to win twelve gold medals at the World Judo Championships.\n[…]\nRiner was born on 7 April 1989 in Les Abymes, in Guadeloupe, an insular region of France in the Caribbean. The son of Moise and Marie-Pierre Riner, Teddy, his brother Moise Jr., and his parents left the island for France in the early '90s, before his second birthday. He was raised in Paris. He was enrolled at a local sports club by his parents and played football, tennis, and basketball, but says he preferred judo \"because it is an individual sport and it's me, only me.\"\n[…]\nHe also competed in the 2024 Summer Olympics, where he, along with Marie-José Pérec, was one of the two individuals to light the Olympic cauldron in the Tuileries Garden. He won the gold medal in the over 100-kilogram class, defeating the world champion Kim Min-jong from South Korea. With that, he equaled the record of Japan's Tadahiro Nomura, becoming one of the only judokas to have won three individual Olympic golds in judo.\n[…]\n2024: Along with Marie-José Pérec, one of the two final torchbearers of the Olympic torch relay who lit the Olympic cauldron in the Tuileries Garden at the opening ceremony of the 2024 Summer Olympics in Paris\n[…]\nMedia related to Teddy Riner at Wikimedia Commons\n[…]\nTeddy Riner at the International Judo Federation\n[…]\nTeddy Riner at the European Judo Union\n[…]\nTeddy Riner at JudoInside.com\n[…]\nTeddy Riner at Olympics.com\n[…]\nTeddy Riner at Team France (in French)\n[…]\nTeddy Riner at the French Olympic Committee (archived) (in French)\n[…]\nTeddy Riner at Olympedia\n[…]\nTeddy Riner at The-Sports.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerim%C3%B4nia_de_abertura_dos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "A cerimônia de abertura dos Jogos Olímpicos de Verão de 2024 aconteceram na noite do dia 26 de julho às margens do Rio Sena, se encerrando nos Jardins du Trocadéro, em Paris na França.\n[…]\nJamel Debbouze chega ao Stade de France com a pira olímpica e se surpreende ao ver o estádio vazio. De lá, Zinédine Zidane avisa ao ator que a cerimônia não é no estádio e se oferece para levar a tocha ao Trocadero. Zidane corre pelas ruas de Paris para chegar ao Rio Sena, mas enfrenta momentos caóticos como lotação e engarrafamento.\n[…]\nO mascarado continua a sua saga com a pira olímpica caminhando pelos prédios de Paris e pousa agora em um dos cenários da Revolução Francesa. Do lado de fora, a banda de metal Gojira e a cantora de ópera Marina Viotti, junto com um grupo de bailarinos, reproduzem as cenas desse importante movimento francês.\n[…]\nO mascarado cumpre sua missão ao chegar no Trocadero e entrega a pira ao jogador Zinédine Zidane, que repassa ao tenista Rafael Nadal, iniciando a última etapa do revezamento da tocha. Nadal, entrega a tocha a Serena Williams, que repassa para Nádia Comaneci e Carl Lewis, com os quatro embarcando em direção aos Jardins das Tulherias. Ao chegarem lá, eles passam a chama olímpica para Amélie Mauresmo, que corre pelas ruas de Paris até os Jardins.\n[…]\nDe lá, passa a chama para Tony Parker no local, que repassa para outros nomes da história do esporte francês. Por fim, o casal Teddy Riner e Marie-José Pérec recebem a chama e caminham em direção a pira, que é representada por um balão, que simboliza o primeiro voo do mundo. O balão é aceso pela chama olímpica e voa sob Paris, onde permanecerá no alto até a cerimônia de encerramento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Cerimônia de abertura dos Jogos Olímpicos de 2016",
      "descricao": "Cerimônia que abriu os Jogos Olímpicos do Rio de Janeiro, em agosto de 2016, no Maracanã."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Pelé foi convidado, mas não pôde ir por questões de saúde. Na abertura da Rio 2016, que atleta brasileiro acendeu a pira olímpica?",
    "resposta": "Vanderlei Cordeiro de Lima",
    "fonte": [
      "https://en.wikipedia.org/wiki/2016_Summer_Olympics_opening_ceremony",
      "https://pt.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2016_Summer_Olympics_opening_ceremony",
        "situacao": "ok",
        "texto": "The opening ceremony of the 2016 Summer Olympics took place on the evening of Friday 5 August 2016 in the Maracanã Stadium, Rio de Janeiro, starting at 20:00 BRT (23:00 UTC).\n[…]\nAfter the speeches by Rio 2016 Organizing Committee President Carlos Arthur Nuzman and by IOC President Thomas Bach,\n[…]\n\"Após este maravilhoso espetáculo, declaro abertos os Jogos Olímpicos do Rio, celebrando a XXXI Olimpíada da Era Moderna!\" - \"After this wonderful spectacle, I declare open the Rio Olympic Games, celebrating the XXXI Olympiad of the modern era!\"\n[…]\nEnding the Olympic torch relay at the end of the Opening Ceremony, Gustavo Kuerten brought the Olympic torch into the stadium, relayed the Olympic flame to Hortência Marcari, who relayed to Vanderlei Cordeiro de Lima, who then lit the Olympic cauldron.\n[…]\nThe cauldron was lit by Vanderlei Cordeiro de Lima, a marathon bronze medallist at the 2004 Summer Olympics and recipient of a Pierre de Coubertin medal who was nearly attacked by an Irish priest during the last kilometers of the men's marathon. It had been speculated that Brazilian footballer Pelé would light the cauldron, but he was unable to attend the ceremony because of health problems.\n[…]\n2016 Summer Paralympics opening ceremony\n[…]\nMedia related to 2016 Summer Olympics opening ceremony at Wikimedia Commons\n[…]\nRio 2016 Olympic Games Opening Ceremony Media Guide (found on Olympic Library)\n[…]\nRio 2016 Opening Ceremony Full Replay on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
        "situacao": "ok",
        "texto": "Vanderlei Cordeiro de Lima (Cruzeiro do Oeste, 4 de julho de 1969) é um ex-maratonista brasileiro, bicampeão dos Jogos Pan-Americanos, medalha de bronze nos Jogos Olímpicos de Atenas 2004 e o único latino-americano outorgado com a Medalha Pierre de Coubertin, a maior condecoração de cunho humanitário-esportivo concedida pelo Comitê Olímpico Internacional (COI).\n[…]\nVanderlei nasceu na cidade de Cruzeiro do Oeste, no interior do estado do Paraná, um entre sete filhos de humildes lavradores, um casal de retirantes nordestinos fugidos anos antes da seca do Nordeste para a lavoura do sul do país, Seu \"Zé Pequeno\" – como era conhecido seu pai, José Cordeiro de Lima – e Dona Aurora Maria da Conceição Lima,.\n[…]\nDurante o encerramento dos Jogos, foi anunciado que por seu feito, seu espírito esportivo em continuar na disputa mesmo sendo atacado e a humildade demonstrada após a prova, Vanderlei seria agraciado com a Medalha Pierre de Coubertin, concedida pelo COI para atletas que valorizam a competição olímpica mais do que a vitória e que é considerada uma honra elevadíssima atribuída pela entidade.\n[…]\nVanderlei, com humildade, agradeceu o presente mas recusou emocionado, dizendo que \"Não poderia ficar com a medalha do Emanuel. Estou feliz com a minha, que é de bronze mas vale ouro\".\n[…]\nPor seu exemplo e por sua contribuição ao esporte brasileiro, Vanderlei foi o atleta escolhido para acender a Chama Olímpica durante a cerimônia de abertura das Jogos Olímpicos do Rio de Janeiro em 2016.\n[…]\nTenho muito orgulho de minhas origens e de minhas escolhas, pois elas me levaram à conquista do maior sonho: a medalha olímpica. Descobri que ela não é só minha, pois carrega a alegria, o sofrimento e a torcida de todo brasileiro. Nada veio fácil para mim. Vanderlei Cordeiro de Lima\n[…]\n«Perfil de Vanderlei Cordeiro» (em inglês). arquivado do sítio Sports-Reference.com"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Olympia (filme de 1938)",
      "descricao": "Documentário alemão em duas partes sobre os Jogos Olímpicos de Berlim 1936, famoso por suas inovações de filmagem."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O documentário Olympia, que registrou os Jogos de Berlim 1936 e revolucionou a filmagem esportiva, foi dirigido por que cineasta alemã?",
    "resposta": "Leni Riefenstahl",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympia_(1938_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympia_(1938_film)",
        "situacao": "ok",
        "texto": "Olympia is a 1938 German propaganda and documentary film written, directed and produced by Leni Riefenstahl, which documented the 1936 Summer Olympics, held in the Olympic Stadium in Berlin during the Nazi period. The film was released in two parts: Olympia 1. Teil — Fest der Völker (Festival of Nations) (126 minutes) and Olympia 2. Teil — Fest der Schönheit (Festival of Beauty) (100 minutes).\n[…]\nJoseph Goebbels discussed making the film with Leni Riefenstahl on 28 June 1935, after she received an award for Triumph of the Will. They discussed it further in August and October. Goebbels, Adolf Hitler, and Carl Diem were in agreement that Riefenstahl was the best person to direct the film. She was initially given 1.5 million ℛ︁ℳ︁, but this grew to 2.35 million ℛ︁ℳ︁.\n[…]\nRiefenstahl edited the film over the course of two years.\n[…]\nThe premiere had to be postponed due to the Anschluss. Riefenstahl proposed releasing the film on Hitler's birthday. Olympia was approved by the censors on 14 April 1938, and released on 20 April, Adolf Hitler's 49th birthday. It had a profit of RM 114,066.45 by 1943.\n[…]\nAmerican film critic Richard Corliss observed in Time that \"the matter of Riefenstahl 'the Nazi director' is worth raising so it can be dismissed. [I]n the hallucinatory documentary Triumph of the Will ... [she] painted Adolf Hitler as a Wagnerian deity ... But that was in 1934–35. In [Olympia] Riefenstahl gave the same heroic treatment to Jesse Owens.\"\n[…]\nGreek Sports Prize (1938)\n[…]\nMcFee, Graham and Alan Tomlinson. \"Riefenstahl's 'Olympia:' Ideology and Aesthetics in the Shaping of the Aryan Athletic Body,\" International Journal of the History of Sport, Feb 1999, Vol. 16 Issue 2, pp 86–106\n[…]\nMackenzie, Michael, “From Athens to Berlin: The 1936 Olympics and Leni Riefenstahl’s Olympia,” in: Critical Inquiry, Vol. 29 (Winter 2003)\n[…]\nRippon, Anton. Hitler's Olympics: The Story of the 1936 Nazi Games 2006"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Olympia_%28filme_de_1938%29",
        "situacao": "ok",
        "texto": "Olympia 1. Teil - Fest der Völker (bra: Olympia) é um filme de propaganda de 1938 de Leni Riefenstahl documentando os Jogos Olímpicos de Verão de 1936.\n[…]\nHá muita discussão se este filme deve ser considerado um filme de propaganda política para o Partido Nazista, como o seu O Triunfo da Vontade.\n[…]\nApesar de todo Jogos Olímpicos de Verão em Berlim de 1936 serem chamados de \"Olimpíada de Hitler\" e ser inquestionvalmente dirigido aos feitos do Terceiro Reich, o que por si só já daria um bom filme de propaganda política, os defensores de Riefenstahl lembram da aproximação que faz ao filmar o rosto de Hitler diante da vitória de Jesse Owens, um afro-americano, ganhando uma medalha de ouro, diferenciando-se da doutrina de supremacia racial nazista.\n[…]\nOlympia (ou Olimpíadas) é um filme documentando os Jogos Olímpicos de 1936, realizados no Estádio Olímpico de Berlim, Alemanha. Olympia é um marco do documentário esportivo mundial onde são registradas as competições da Olimpíada de Berlin. Apesar do destaque dado à presença de Adolf Hitler e o excesso das bandeiras com o símbolo nazista. Olympia destaca as conquistas do velocista americano Jesse Owens.\n[…]\nOs jogos Olímpicos de Verão em Berlim de 1936, no governo nazista. A maioria das imagens são de glória em vitórias alemãs. Mas, há destaque também para os vencedores não arianos, em destaque, as conquistas de Jesse Owens um negro, ganhando uma medalha de ouro na presença do Adolfo Hitler, diferenciando-se da doutrina de supremacia racial nazista. Owens é destacado em todas as competições que participou, mesmo antes na concentração, já que é o favorito.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Argolas",
      "descricao": "Aparelho da ginástica artística masculina com dois anéis suspensos por cabos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Londres 2012, quem deu à ginástica artística brasileira seu primeiro ouro olímpico, com uma série nas argolas?",
    "resposta": "Arthur Zanetti",
    "fonte": [
      "https://en.wikipedia.org/wiki/Arthur_Zanetti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arthur_Zanetti",
        "situacao": "ok",
        "texto": "Arthur Nabarrete Zanetti (born 16 April 1990) is a Brazilian retired artistic gymnast. He won the gold medal on the rings exercise at the 2012 Olympic Games in London, becoming the first Brazilian and Latin American gymnast to win an Olympic medal in history. He also won the gold medal at the 2013 World Championships in Antwerp.\n[…]\nZanetti won the gold medal on rings at the 2011 Summer Universiade, in Shenzhen, China, with a score of 15.600. It was the first medal for a Brazilian male artistic gymnast in this competition.\n[…]\nHe won the silver medal on rings at the 2011 World Championships in Tokyo, Japan. He scored 15.600, finishing behind Chen Yibing of China. With this result, Zanetti qualified to compete at the 2012 Summer Olympics. He was also the first Brazilian to win a medal on rings at a World Gymnastics Championships.\n[…]\nAt the 2012 Olympic Test Event Zanetti won the gold medal on rings. At the Cottbus World Cup, Zanetti won the silver medal once again behind Chen. At the Osijek Grand Prix and the Maribor World Cup, he won gold.\n[…]\nZanetti competed at the 2012 Olympic Games in London. He qualified to the rings final in fourth place with a score of 15.616. During the event final, he won the gold medal with a score of 15.900. His gold medal was the first medal for a Brazilian gymnast, and also the first for a Latin American gymnast  in any event at the Olympic Games.\n[…]\nAt the 2017 World Championships Zanetti finished seventh on rings.\n[…]\nZanetti competed at the 2020 Olympic Games, held in 2021. He finished eighth on rings during the final.\n[…]\nArthur Zanetti at World Gymnastics\n[…]\nArthur Zanetti at Olympics.com\n[…]\nArthur Zanetti at the Brazilian Olympic Committee (in Portuguese)\n[…]\nArthur Zanetti at Olympedia\n[…]\nArthur Zanetti at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arthur_Zanetti",
        "situacao": "ok",
        "texto": "Arthur Nabarrete Zanetti (São Caetano do Sul, 16 de abril de 1990) é um ginasta brasileiro que compete em provas de ginástica artística, campeão olímpico e mundial na modalidade de argolas. Nos Jogos Olímpicos de Londres 2012,\n[…]\ntornou-se o primeiro brasileiro e latino-americano a conquistar uma medalha olímpica de ouro em qualquer das categorias de seu esporte. Também é um militar e atualmente ocupa a graduação de terceiro sargento da Aeronáutica.\n[…]\nDescendente paterno de italianos e materno de espanhóis, começou a praticar ginástica aos 7 anos de idade no SERC Santa Maria, de sua cidade natal. Conquistou vários títulos brasileiros e internacionais nas categorias infantil e juvenil. Em 2007, foi convocado pela primeira vez para a seleção adulta para a disputa do Mundial de Stuttgart, na Alemanha. Na edição seguinte, em 2009, em Londres, ficou em quarto nas argolas.\n[…]\nParticipou da Universíada de 2011, na China, quando conquistou a medalha de ouro nas argolas. Meses adiante, no Mundial da modalidade encerrou como vice-campeão, superado pelo chinês Chen Yibing. Nos Jogos Pan-americanos de Guadalajara, foi novamente segundo colocado em sua especialidade, além de conquistar a inédita medalha de ouro por equipes. Em Londres 2012 conquistou a medalha de ouro nas argolas, tornando-se campeão olímpico.\n[…]\nEm outubro de 2013, Zanetti conquistou a medalha de ouro na modalidade de argolas no campeonato mundial de ginástica, disputado na cidade de Antuérpia, Bélgica, quando se tornou o maior atleta brasileiro da história da ginástica artística, campeão mundial e olímpico desta modalidade. Na mesma temporada conquistou o ouro na Universíade de Kazã, na Rússia.\n[…]\nFederação Internacional de Ginástica\n[…]\nLista de ginastas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Bandeira olímpica",
      "descricao": "Bandeira branca com os cinco anéis olímpicos entrelaçados, hasteada nas cerimônias dos Jogos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A bandeira branca com os cinco anéis só foi hasteada num estádio olímpico depois da Primeira Guerra Mundial. Em que edição dos Jogos?",
    "resposta": "Antuérpia 1920",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_symbols"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_symbols",
        "situacao": "ok",
        "texto": "The International Olympic Committee (IOC) uses icons, flags, and symbols to represent and enhance the Olympic Games. These symbols include those commonly used during Olympic competitions such as the flame, fanfare, and theme as well as those used both during and outside competition, such as the Olympic flag.\n[…]\nThe 1914 Olympic Congress was suspended due to the outbreak of World War I, so the symbol and flag officially debuted at the 1920 Summer Olympics in Antwerp, Belgium.\n[…]\nDuring the opening ceremony of the 1920 Summer Olympics in Antwerp, Belgium, the Olympic flag with the five rings signifying the universality of the Olympic Games was raised for the first time at an Olympic Games. At the end of the Games, the flag could not be found and a new Olympic flag had to be made for the handover ceremony to the officials of the 1924 Summer Olympics in Paris. Despite it being a replacement, the IOC officially calls this the \"Antwerp Flag\" instead of the \"Paris Flag\".\n[…]\nIn 1997, at a banquet hosted by the U.S. Olympic Committee, a reporter was interviewing Hal Haig Prieste who had won a bronze medal in platform diving as a member of the 1920 U.S. Olympic team. The reporter mentioned that the IOC had not been able to find out what had happened to the original Olympic flag. \"I can help you with that,\" Prieste said, \"It's in my suitcase.\" At the end of the Antwerp Olympics, spurred on by teammate Duke Kahanamoku, he climbed a flagpole and stole the Olympic flag.\n[…]\nWhile the flag is recognized by the IOC, critics and historians note that the returned flag is not the one that was used in the 1920 opening ceremony, as the original flag was much larger than the one returned by Prieste."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An%C3%A9is_ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Os anéis olímpicos são um símbolo dos Jogos Olímpicos composto por cinco arcos entrelaçados, com as cores azul, amarelo, preto, verde e vermelho sobre um fundo branco. Este foi originalmente concebido em 1913 pelo Barão Pierre de Coubertin, fundador dos Jogos Olímpicos modernos.\n[…]\nO emblema foi escolhido para ilustrar e representar o Congresso mundial de 1914: cinco anéis entrelaçados com cores diferentes - azul, amarelo, preto, verde e vermelho - são colocados no campo em branco do papel. Esses cinco anéis representam as cinco partes do mundo, que agora são conquistados para Olimpismo e dispostas a aceitar uma concorrência saudável.\n[…]\nAs cores utilizadas nos cinco anéis da bandeira foram escolhidas e representadas por Pierre de Coubertin devido à frequência em que aparecem nas bandeiras das diversas nações no mundo. Pelo menos uma das demais cores está presente em cada bandeira, dessa forma, integra todos os países, fornecendo um sentido universal para as Olimpíadas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Joaquim Cruz",
      "descricao": "Meio-fundista brasileiro, campeão olímpico dos 800 metros."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O brasileiro Joaquim Cruz conquistou o ouro olímpico nos oitocentos metros, superando o britânico Sebastian Coe. Em que edição dos Jogos?",
    "resposta": "Los Angeles 1984",
    "fonte": [
      "https://en.wikipedia.org/wiki/Joaquim_Cruz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joaquim_Cruz",
        "situacao": "ok",
        "texto": "Joaquim Carvalho Cruz (born 12 March 1963) is a Brazilian former middle-distance runner, winner of the 800 meters at the 1984 Summer Olympics. He is one of only ten men, and in August 1984 became the second man, to run the 800 metres in less than 1 minute 42 seconds.\n[…]\nThe following year at the 1984 NCAA Track and Field Championships, Cruz became one of only a handful of people to win the 800/1500 m double (a feat that would not be repeated until Andrew Wheating achieved it in 2010). Cruz is the co-holder of University of Oregon 1,500 m school record of 3:36.48 along with A.J. Acosta. Later that summer, he ran a time of 2:14.09 min over 1000 m in Nice which is still the current South American record over that distance.\n[…]\nThe 1984 Summer Olympic Games were held in Los Angeles, and Cruz was considered to be one of the 800 m favorites, along with world record holder Sebastian Coe of Great Britain. In the last turn of the 800 meter final, Cruz started a sprint from second place and took the lead, never losing it.\n[…]\nBy the end of the year, he was the NCAA champion, the Olympic champion, undefeated in all seven of his 800-meter finals, had run the 2nd, 4th, 5th, and 6th fastest 800 meter times in history, and easily ranked as #1 in the world for 800 meters in 1984 by Track & Field News magazine.\n[…]\nCruz competed at the 2001 Masters West Region Track and Field Championship winning the 5000 meter run at age 38.\n[…]\nJoaquim Cruz at Sporting Heroes at the Wayback Machine (archived 11 March 2007)\n[…]\nJoaquim Cruz at Olympedia\n[…]\nJoaquim Cruz at Olympics.com\n[…]\nJoaquim Cruz at the Comitê Olímpico do Brasil  (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joaquim_Cruz",
        "situacao": "ok",
        "texto": "Joaquim Carvalho Cruz (Taguatinga, 12 de março de 1963) é um ex-meio-fundista brasileiro, campeão olímpico dos 800 metros em Los Angeles 1984, medalha de prata na mesma prova nas Seul 1988 e por duas vezes campeão pan-americano, em Indianápolis, 1987 e Mar del Plata, 1995.\n[…]\nNo ano seguinte, os Jogos Olímpicos foram realizados em Los Angeles e Cruz era considerado um dos favoritos, juntamente com os britânicos Sebastian Coe, recordista mundial e o campeão olímpico de  Moscou 1980, Steve Ovett.\n[…]\nJoaquim correu em segundo a prova toda e na entrada da reta final deu uma arrancada  que os outros adversários não conseguiram acompanhar; cruzou a linha de chegada em 1:43.00, novo recorde olímpico (que vigorou por 12 anos), a frente de Sebastian Coe e do marroquino Said Aouita, se tornando o primeiro brasileiro no atletismo a conseguir o título olímpico desde Adhemar Ferreira da Silva, medalhista de ouro em Helsinque 1952 e Melbourne 1956.\n[…]\nCom problemas no tendão de Aquiles, Joaquim teve dificuldades para conseguir continuar em nível internacional e não participou dos Jogos Olímpicos de Barcelona 1992. Em 1993, tentou sua volta nos 1500 metros em várias corridas de Grand Prix na Europa, mas não obteve o desempenho esperado. Em 1995 conquistou a medalha de ouro nos 1500 metros nos Jogos Pan-americanos de 1995 em Mar del Plata.\n[…]\nSua carreira e suas vitórias foram homenageadas pelo COB em 2007, quando Joaquim foi designado para acender a pira olímpica dos Jogos Pan-americanos do Rio de Janeiro.\n[…]\nCampeão olímpico (800 m) - 1984\n[…]\nCampeão da NCAA (800 m) - 1983, 1984\n[…]\nCampeão da NCAA (1500 m) - 1984\n[…]\n800 metros rasos: 1'41\"77 ( Koln, 26 de agosto de 1984)\n[…]\n1 000 metros rasos: 2'14\"09 ( Nizza, 20 de agosto de 1984)\n[…]\n«Instituto Joaquim Cruz»\n[…]\n«História de Joaquim Cruz» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Breaking",
      "descricao": "Dança de rua surgida no hip-hop do Bronx, em Nova York, disputada como modalidade olímpica."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O breaking, dança nascida nas festas de hip-hop do Bronx, em Nova York, estreou como modalidade olímpica em que edição dos Jogos?",
    "resposta": "Paris 2024",
    "fonte": [
      "https://en.wikipedia.org/wiki/Breaking_at_the_2024_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Breaking_at_the_2024_Summer_Olympics",
        "situacao": "ok",
        "texto": "Breakdancing competitions at the 2024 Summer Olympics ran from 9 to 10 August at Place de la Concorde, making it the first dancesport discipline to appear in a Summer Olympics. Men's and women's events saw 16 b-boys and 17 b-girls compete in face-to-face single battles.\n[…]\nObviously, breaking fit very clearly with Paris's vision of a very youth-focused urban engagement.\"\n[…]\nOver eighty percent of the total quota was attributed to a large number of breakers through a tripartite qualification route. First, the 2023 WDSF World Championships, scheduled for 23 to 24 September in Leuven, Belgium, awarded the B-Boy and B-Girl champion with a direct quota place for Paris 2024.\n[…]\nSecond, a quintet of spots were assigned to the highest-ranked eligible breakers (one B-Boy and one B-Girl) competing in each of the designated continental meets (Africa, Americas, Asia, Europe, and Oceania), respecting the two-member NOC limit. The remaining breakers were provided the final opportunity to book their slots for Paris 2024 through a four-month-long Olympic Qualifier Series, held between March and June 2024 in various locations worldwide.\n[…]\nThe host nation France reserved a spot each for a B-Boy and a B-Girl in their respective breaking events, while four more places (two per gender) were entitled to the eligible NOCs interested to have their breakers compete for Paris 2024 through a Universality invitation. To be registered for a spot according to the criteria of the universality principle, breakers must have finished within the top 32 of their respective events in the final rankings of the four-month-long Olympic Qualifier Series.\n[…]\nBreaking at the 2023 Pan American Games"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Breaking_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "As competições de breaking nos Jogos Olímpicos de Verão de 2024 ocorreram entre 9 e 10 de agosto na Praça da Concórdia, marcando a estreia oficial do esporte no programa e a primeira modalidade de dança esportiva a aparecer na história dos Jogos Olímpicos de Verão.\n[…]\nApós sua estreia bem-sucedida nos Jogos Olímpicos de Verão da Juventude de 2018 em Buenos Aires, o breaking foi confirmado como um dos quatro esportes adicionais aprovados para Paris 2024, junto com skate, escalada esportiva e surfe. Por não ser um esporte permanente, o breaking não foi incluído no programa dos Jogos Olímpicos de Verão de 2028, em Los Angeles, sendo esta sua única aparição olímpica.\n[…]\nMais de oitenta por cento das vagas totais foram atribuídas através de um processo de qualificação tripartido. Primeiro, o Campeonato Mundial da WDSF de 2023, entre 23 a 24 de setembro em Leuven, Bélgica, premiou os campeões de cada gênero com uma vaga direta para Paris 2024.\n[…]\nEm segundo lugar, um quinteto de vagas foi atribuído ao breakdancer elegível de melhor classificação (um b-boy e uma b-girl) competindo em cada um dos encontros continentais designados (África, Américas, Ásia, Europa e Oceania), respeitando o limite de dois competidores por CON. Os breakdancers restantes tiveram a oportunidade final de reservar suas vagas por meio de uma série de qualificação olímpica de quatro meses, realizada entre março e junho de 2024 em vários locais do mundo.\n[…]\nUma vaga extra no evento feminino foi outorgada para a Equipe Olímpica de Refugiados, totalizando 33 competidores em Paris.\n[…]\nBreaking nos Jogos Pan-Americanos de 2023\n[…]\n«Livro oficial de resultados do breaking» (PDF) (em inglês)\n[…]\n«Pagina oficial da Federação Mundial de Dança Esportiva» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Golfe nos Jogos Olímpicos",
      "descricao": "Presença do golfe no programa olímpico, com edições no início do século vinte e retorno na Rio 2016."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O golfe voltou ao programa olímpico na Rio 2016, depois de mais de um século de ausência. Em que ano tinha sido disputado pela última vez?",
    "resposta": "1904",
    "distratores": [
      "1912",
      "1924",
      "1936"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Golf_at_the_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golf_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Golf is officially recognized as first featuring in the Summer Olympic Games programme in 1900 and was also contested at the 1904 Summer Olympics. A golf tournament was to have been held in 1908, but it was cancelled less than two days before it was scheduled to start. Two golf tournaments were also to have been held in 1920, but were cancelled due to a lack of entries.\n[…]\nAt the IOC session in Copenhagen in October 2009, the International Olympic Committee (IOC) decided to reinstate the sport for the 2016 Summer Olympics. The International Golf Federation is the governing body for golf at the Olympic Games.\n[…]\n1904\n[…]\nA men's individual tournament was planned for the 1908 London Games, but a dispute amongst representatives of England and Scotland over the format led to British golfers boycotting, leaving 1904 gold medallist George Lyon of Canada as the only remaining entrant. He was entitled to claim the gold medal but declined.\n[…]\n2016\n[…]\n22 golfers competed in 1900. The 1904 tournament featured 77 golfers. Albert Lambert was the only golfer who competed both times; a total of 98 different golfers competed throughout the brief history of Olympic golf before it was brought back in 2016."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Golfe_nos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "O golfe fez parte do programa dos Jogos Olímpicos nas edições de 1900 e 1904, e retornou ao programa olímpico em 2016.\n[…]\n«Informações do golfe no site do COI» (em inglês)\n[…]\n«Informações do golfe na Olympedia» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Competições de arte nos Jogos Olímpicos",
      "descricao": "Disputas de pintura, escultura, literatura, música e arquitetura que deram medalhas olímpicas na primeira metade do século vinte."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Pintura, escultura, literatura, música e arquitetura já deram medalhas olímpicas. Em que edição dos Jogos essas competições de arte aconteceram pela última vez?",
    "resposta": "Londres 1948",
    "fonte": [
      "https://en.wikipedia.org/wiki/Art_competitions_at_the_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Art_competitions_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Art competitions formed part of the modern Olympic Games during its early years, from 1912 to 1948. The competitions were part of the original intention of the Olympic Movement's founder, Pierre de Frédy, Baron de Coubertin. Medals were awarded for works of art inspired by sport, divided into five categories: architecture, literature, music, painting, and sculpture, which led to the events' initia\n[…]\nThe literature competitions were divided into a varied number of categories. Until 1924 and again in 1932, there was only a single literature category. In 1928, separate categories were introduced for dramatic, epic, and lyric literature. Awards in these categories were also presented in 1948, while the drama category was dropped in 1936.\n[…]\nA single event for music was held until 1936, when three categories were introduced: one for orchestral music, one for instrumental music, and one for both solo and choral music. In 1948, these categories were slightly modified into choral/orchestral, instrumental/chamber, and vocal music.\n[…]\n1936 marked the only occasion when the winning musical works were actually played before an audience.\n[…]\nJosef Suk and John Weinzweig are two of the best-known musicians to have competed, winning silver medals in 1932 and 1948 respectively. Polish composer Grażyna Bacewicz only earned an honourable mention at the London Olympics in 1948, but she went on to become one of her nation's most celebrated musicians with a statue of her being one of the seven artists depicted at the Philharmonic Hall is Bydgoszcz.\n[…]\nBritain's John Copley, winner of a silver medal in the 1948 engravings and etchings competition, was 73 years of age, making him the oldest Olympic medallist in history. The oldest Olympic medallist outside the art competitions is Swedish shooter Oscar Swahn, who won his last medal at age 72 during the 1920 Summer Olympics.\n[…]\nLondon 1948 (14)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Competi%C3%A7%C3%B5es_art%C3%ADsticas_nos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "As competições artísticas fizeram parte dos modernos Jogos Olímpicos durante seus primeiros anos, de 1912 a 1948. As competições fazem parte da intenção original do fundador do Movimento Olímpico, Pierre de Fredy, o barão de Coubertin. Medalhas foram atribuídos a obras de arte inspiradas pelo esporte, divididos em cinco categorias: arquitetura, literatura, música, pintura e escultura.\n[…]\nAs competições de artes foram abandonadas em 1954 porque os artistas eram considerados profissionais, enquanto os atletas olímpicos eram obrigados a serem amadores. Desde 1956, o programa cultural olímpico tomou o seu lugar.\n[…]\nJogos Píticos\n[…]\nJogos délficos da era moderna",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Comitê Olímpico Internacional",
      "descricao": "Organização que comanda o movimento olímpico e escolhe as sedes dos Jogos Olímpicos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Comitê Olímpico Internacional foi criado num congresso convocado por Pierre de Coubertin na Universidade Sorbonne, em Paris. Em que ano?",
    "resposta": "1894",
    "fonte": [
      "https://en.wikipedia.org/wiki/International_Olympic_Committee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/International_Olympic_Committee",
        "situacao": "ok",
        "texto": "The International Olympic Committee (IOC) is the international, non-governmental, sports governing body of the modern Olympic Games. Founded in 1894 by Pierre de Coubertin and Demetrios Vikelas, it is based in Lausanne, Switzerland. The IOC is the authority responsible for organising the Summer, Winter, and Youth Olympics.\n[…]\n\"Honoured to be chosen as a member of the International Olympic Committee,\n[…]\nThe IOC was created by Pierre de Coubertin on 23 June 1894 with Demetrios Vikelas as its first president. The IOC is one of the earliest and is still one of the most powerful international NGOs. As of February 2022, its membership consists of 105 active members and 45 honorary members. The IOC is the supreme authority of the worldwide modern Olympic Movement.\n[…]\nOlympic Studies Centre\n[…]\nThe IOC's response was internationally criticised as complicit in assisting the Chinese government to silence Peng's sexual assault allegations. Zhang Gaoli previously led the Beijing bidding committee to host the 2022 Winter Olympics.\n[…]\nOn 12 October 2023, the International Olympic Committee issued a statement stating that after Russia began its full-scale invasion of Ukraine in 2022, the Russian Olympic Committee unilaterally transferred four regions that were originally under the jurisdiction of the National Olympic Committee of Ukraine: Donetsk Oblast, Luhansk Oblast, Kherson Oblast, Zaporizhzhia Oblast were included as members of their own, so the International Olympic Committee announced the suspension of the membership of the Russian Olympic Committee with immediate effect.\n[…]\nOlympic Congress\n[…]\nList of International Olympic Committee competitions\n[…]\nChappelet, Jean-Loup; Brenda Kübler-Mabbott (2008). International Olympic Committee and the Olympic system: the governance of world sport. New York: Routledge. ISBN 978-0-415-43167-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Comit%C3%A9_Ol%C3%ADmpico_Internacional",
        "situacao": "ok",
        "texto": "O Comitê(pt-BR) ou Comité(pt-PT?) Olímpico Internacional (COI, do inglês International Olympic Committee) é uma organização não governamental criada em 23 de junho de 1894, por iniciativa do francês Pierre de Coubertin, com a finalidade de reinstituir os Jogos Olímpicos realizados na antiga Grécia e organizar e promover a sua realização de quatro em quatro anos.\n[…]\n\"Honrado por ser escolhido como membro do Comitê Olímpico Internacional, aceito plenamente todas as responsabilidades que este cargo traz: prometo servir o Movimento Olímpico da melhor maneira possível. Respeitarei a Carta Olímpica e aceitarei as decisões do o COI. Sempre agirei independentemente de interesses comerciais e políticos, bem como de qualquer consideração racial ou religiosa. Cumprirei integralmente o Código de Ética do COI.\n[…]\nPrometo lutar contra todas as formas de discriminação e me dedicar em todas as circunstâncias para promover os interesses do Comitê Olímpico Internacional e do Movimento Olímpico\".\n[…]\nO COI foi criado por Pierre de Coubertin, em 23 de junho de 1894, com Demetrios Vikelas como seu primeiro presidente. Em fevereiro de 2022, seus membros consistiam em 105 membros ativos. O COI é a autoridade suprema do Movimento Olímpico moderno em todo o mundo.\n[…]\nSolidariedade Olímpica (Lausanne, Suíça)\n[…]\nOs 7 membros da Associação das Federações Olímpicas Internacionais de Esportes de Inverno (AIOWF).\n[…]\nO presidente do COI é responsável por representar o COI como um todo e tomar decisões por ele quando o Conselho Executivo não está apto a se reunir. Desde 1894 o COI teve dez presidentes, sendo o primeiro o grego Dimítrios Vikélas (1894–1896), o anfitrião da primeira edição dos Jogos Olímpicos da Era Moderna. A atual presidente é a zimbabuana Kirsty Coventry, que ocupa a posição desde 2025, sendo a primeiro mulher a assumir o cargo.\n[…]\nComité Paralímpico Internacional",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Jogos Olímpicos de Verão de 1948",
      "descricao": "Edição dos Jogos Olímpicos realizada em Londres em 1948, a primeira de verão após a Segunda Guerra Mundial."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os Jogos de Londres 1948, os primeiros de verão após a Segunda Guerra, sem novas construções e com comida racionada, ganharam que apelido?",
    "resposta": "Jogos da Austeridade",
    "fonte": [
      "https://en.wikipedia.org/wiki/1948_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1948_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1948 Summer Olympics, officially the Games of the XIV Olympiad and officially branded as London 1948, were an international multi-sport event held from 29 July to 14 August 1948 in London, United Kingdom. Following a twelve-year hiatus caused by the outbreak of World War II, these were the first Summer Olympics held since the 1936 Games in Berlin. The 1940 Olympic Games had been scheduled for \n[…]\nThe 1948 Olympics came to be known as the \"Austerity Games\" due to the difficult economic climate and the rationing imposed in the aftermath of World War II. No new venues were built for the games (with events taking place mainly at Wembley Stadium, also known as Empire Stadium, and the Empire Pool at Wembley Park), and athletes were housed in existing accommodation at the Wembley area instead of an Olympic Village, as were the 1936 Games and the subsequent 1952 Games in Helsinki.\n[…]\nAt the time of the Games, food, petrol and building were still subject to the rationing imposed during the war in Britain; because of this the 1948 Olympics came to be known as the \"Austerity Games\". Athletes were given the same increased rations as dockers and miners, 5,467 calories a day instead of the normal 2,600. Building an Olympic Village was deemed too expensive, and athletes were housed in existing accommodation.\n[…]\nParliament & the 1948 London Olympics - UK Parliament Living Heritage\n[…]\nOrganising Committee for the XIV Olympiad London 1948 (1951). The Official Report of the Organising Committee for the XIV Olympiad London 1948 (PDF). Organising Committee for the XIV Olympiad London 1948. Archived from the original (PDF) on 6 May 2010. Retrieved 27 April 2010.{{cite book}}:  CS1 maint: numeric names: authors list (link)\n[…]\nExploring 20th century London – 1948 Olympics Objects and photographs from the collections of the Museum of London, London Transport Museum, Jewish Museum and Museum of Croydon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1948",
        "situacao": "ok",
        "texto": "Jogos Olímpicos de Verão de 1948 (em inglês: 1948 Summer Olympic Games), conhecidos oficialmente como Jogos da XIV Olimpíada, foram os Jogos Olímpicos realizados pela segunda vez em Londres de 29 de julho a 14 de agosto daquele ano, doze anos depois da última edição devido à Segunda Guerra Mundial.\n[…]\nAssim como os Jogos de 1920 tinham acontecido em Antuérpia, como uma homenagem do Comitê Olímpico Internacional ao sofrimento do povo belga durante a Primeira Guerra Mundial, Londres teve a honraria de sediá-los pela segunda vez em virtude do martírio que a cidade havia sofrido durante a guerra, especialmente com os bombardeios perpetrados pela Luftwaffe entre 1940–41 que devastaram a capital inglesa.\n[…]\nA escolha de Londres como sede dos Jogos Olímpicos de Verão de 1948 iniciou-se na 38ª sessão do COI, realizada na própria cidade de Londres em 9 de junho de 1939. Na oportunidade ficou decidido que as Olimpíadas de 1944 seriam em Londres, em uma votação que também concorreram as cidades de Roma, Detroit e Lausana. Com o advento da Segunda Guerra Mundial e a destruição de toda a infraestrutura do Reino Unido e de muitos outros países europeus, foi inevitável o cancelamento dos Jogos de 1944.\n[…]\nCom o final da Guerra, o COI decidiu, em setembro de 1946, realizar a próxima Olimpíada em 1948, mantendo a escolha de Londres, que manifestou o interesse em realizar os Jogos Olímpicos postergados.\n[…]\nLondres, que já havia anteriormente sediado as Olimpíadas de 1908, tornou-se a segunda cidade a ser a anfitriã olímpica por duas vezes. Paris já havia sido duas vezes sede dos Jogos Olímpicos, em 1900 e em 1924.\n[…]\nOs Jogos de Londres foram os primeiros a serem transmitidos por televisão para residências particulares e foram vistos por cerca de 500 mil telespectadores no Reino Unido.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Fanny Blankers-Koen",
      "descricao": "Velocista holandesa, vencedora de quatro provas de atletismo nos Jogos de Londres 1948."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Mãe de dois filhos, a holandesa Fanny Blankers-Koen venceu quatro provas de atletismo em Londres 1948. Como a imprensa a apelidou?",
    "resposta": "Dona de Casa Voadora",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fanny_Blankers-Koen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fanny_Blankers-Koen",
        "situacao": "ok",
        "texto": "Francina Elsje \"Fanny\" Blankers-Koen (pronounced [frɑnˈsinaː ˈʔɛlɕə ˈfɑni ˈblɑŋkərs ˈkun] ; née Koen, 26 April 1918 – 25 January 2004) was a Dutch track and field athlete, best known for winning four gold medals at the 1948 Summer Olympics in London. She competed there as a 30-year-old mother of two, earning her the nickname \"the Flying Housewife\", and was the most successful athlete at the event.\n[…]\nFanny Blankers-Koen won four of the nine women's events at the 1948 Olympics, competing in eleven heats and finals in eight days. She was the first woman to win four Olympic gold medals, and achieved the feat in a single Olympics. Dubbed \"the flying housewife\", \"the flying Dutchmam\", and \"amazing Fanny\" by the international press, she was welcomed back home in Amsterdam by an immense crowd. After a ride through the city, pulled by four white horses, she received a lot of praise and gifts.\n[…]\nOn 7 August 1955, Fanny Blankers-Koen was victorious for the last time, winning the national title in the shot put, her 58th Dutch title.\n[…]\nSeveral locations have been named in her honour, including Blankers-Koen Park in Newington, New South Wales, the location of the Sydney 2000 Olympic Village, a fire station in Amsterdam (Fanny Blankers-Koenkazerne), a multisport stadium in Hengelo (Fanny Blankers-Koen Stadium), a sports park in Almere (FBK-sportpark), and a sports hall in Hoofddorp where she lived (Fanny Blankers-Koen hal).\n[…]\nBlankers-Koen was honoured with a Google Doodle on 26 April 2018, on her 100th birthday.\n[…]\nBijkerk, Ton (May 2004). \"Fanny Blankers-Koen: A Biography\". Journal of Olympic History. 12–2: 56–60.\n[…]\nFanny Blankers-Koen at World Athletics\n[…]\nFanny Blankers-Koen at Tilastopaja (registration required)\n[…]\nFanny Blankers-Koen at Athletics Podium\n[…]\nFanny Blankers-Koen at Olympics.com\n[…]\nFanny Blankers-Koen at NOC*NSF (in Dutch)\n[…]\nFanny Blankers-Koen at Olympedia\n[…]\nFanny Blankers-Koen at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fanny_Blankers-Koen",
        "situacao": "ok",
        "texto": "Francina \"Fanny\" Elsje Blankers-Koen (Baarn, 26 de abril de 1918 — Hoofddorp, 25 de janeiro de 2004) foi uma atleta e campeã olímpica holandesa, vencedora, aos 30 anos de idade, de quatro provas do atletismo nos Jogos Olímpicos de 1948 em Londres, sendo na ocasião, já mãe de dois filhos. Foi considerada a \"Atleta Feminina do Século\", pela Associação Internacional de Federações de Atletismo (IAAF).\n[…]\nEm 2012, foi imortalizada no Hall da Fama do atletismo, criado no mesmo ano como parte das celebrações pelo centenário da IAAF.\n[…]\nFrancina Elsje Koen, nome de solteira, nasceu em Lage Vuursche, cidade localizada no centro dos Países Baixos. Iniciou-se nos esportes praticando natação e apenas aos 17 anos começou a praticar o atletismo.\n[…]\nUm ano depois, seu treinador, Jan Blankers, a convenceu a integrar a equipe olímpica neerlandesa que participaria dos Jogos Olímpicos de Berlim em 1936. Blankers-Koen obteve dois quintos lugares, um no salto em altura e outro no 4x100 metros rasos.\n[…]\nMas seu feito mais notável ficou guardado para os Jogos de Londres, em 1948, quando ganhou suas quatro medalhas de ouro olímpicas nos 100 e 200 metros, nos 80 metros com obstáculos e no revezamento 4x100 metros rasos e se tornou o maior nome nos anais daqueles Jogos.\n[…]\nDurante sua vida esportiva, Fanny bateu vinte recorde mundiais em provas de velocidade, com obstáculos, nos saltos em altura e distância e no heptatlo.\n[…]\nFanny Blankers-Koen morreu aos 85 anos em decorrência do mal de Alzheimer em sua casa em Hoofddorp, Holanda.\n[…]\nLista dos campeões olímpicos de atletismo\n[…]\nFanny Blankers-Koen Games\n[…]\n«Fanny Blankers-Koen» (em inglês). na página do Movimento Olímpico\n[…]\n«Perfil de Fanny Blankers-Koen» (em inglês). arquivado do sítio Sports-Reference.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Jogos Paralímpicos",
      "descricao": "Principal evento multiesportivo para atletas com deficiência, realizado logo após os Jogos Olímpicos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No nome Jogos Paralímpicos, o prefixo para é explicado hoje como uma preposição grega. Com que significado?",
    "resposta": "Ao lado, em paralelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paralympic_Games"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paralympic_Games",
        "situacao": "ok",
        "texto": "The Paralympic Games or Paralympics is a periodic series of international multisport events involving athletes with a range of disabilities. There are Winter and Summer Paralympic Games, which since the 1988 Summer Olympics in Seoul, South Korea, have been held shortly after the corresponding Olympic Games. All Paralympic Games are governed by the International Paralympic Committee (IPC).\n[…]\nThe 2000 Paralympics represented a significant increase in global media exposure for the Paralympic Games. A deal was reached between the Sydney Paralympic Organizing Committee (SPOC) and All Media Sports (AMS) to broadcast the Games internationally. Deals were reached with Asian, South American, and European broadcast companies to distribute coverage to as many markets as possible. The Games were also webcast for the first time.\n[…]\nBecause of these efforts, the Sydney Paralympics reached a global audience estimated at 300 million people. Also significant was that the organizers did not have to pay networks to televise the Games as had been done at the 1992 and 1996 Games.\n[…]\nLeg-length difference – Significant bone shortening occurs in one leg due to congenital deficiency or trauma.\n[…]\nIntellectual disability – Athletes with a significant intellectual impairment and associated limitations in adaptive behaviour. The IPC primarily serves athletes with physical disabilities, but the disability group Intellectual Disability has been added to some Paralympic Games. This includes only elite athletes with intellectual disabilities diagnosed before the age of 18. However, the IOC-recognized Special Olympics World Games are open to all people with intellectual disabilities."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Paraol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Jogos Paralímpicos ou Paraolímpicos é o maior evento esportivo mundial envolvendo pessoas com deficiência. Incluem atletas com deficiências físicas (de mobilidade, amputações, ou paralisia cerebral), deficiências visuais (cegueira), além de deficientes mentais.\n[…]\nSzekeres já participou de cinco Jogos Paralímpicos.\n[…]\nNos Jogos Olímpicos de 1964 em Tóquio, no Japão, os Jogos Internacionais de Stoke Mandeville aconteceram alguns dias após o encerramento dos Jogos Olímpicos. Nesta época já era comum — principalmente para a imprensa — o uso do nome \"Paralimpíadas\" (contração de \"paraplegia\" e \"olimpíadas\") para designar o evento, principalmente quando este ocorria em paralelo com os Jogos Olímpicos, mesmo que por vezes em locais diferentes por motivos de inacessibilidade.\n[…]\nCom o objetivo duplo de ampliar o apelo dos Jogos e traçar paralelos entre a excelência no esporte e nas artes, uma Paralimpíada Cultural foi incluída no evento. Ele mostrou o trabalho de artistas com deficiência em várias disciplinas criativas, incluindo dança, música, artes visuais, cinema e teatro.\n[…]\nA origem do termo \"Paralimpíada\" é obscura. O nome foi originalmente criado numa contração combinando \"Paraplegia\" e  \"Olimpíada\". A inclusão de outros grupos de deficiência tornaram esta explicação inadequada. A explicação formal atual para o nome é que ele deriva da preposição grega παρά, pará (\"junto a\" ou  \"ao lado de\") e, portanto, refere-se a uma competição realizada em paralelo com os Jogos Olímpicos.\n[…]\nDaniel Dias do Brasil é o maior medalhista brasileiro em Jogos Paralímpicos. Em Londres 2012 o atleta quebrou cinco recordes na natação, o atleta já recebeu três prêmios Laureus. A natação foi uma das modalidades que mais rendeu medalhas para o Brasil.\n[…]\nJogos Olímpicos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Estádio (unidade de medida)",
      "descricao": "Antiga unidade grega de comprimento que deu nome à corrida de velocidade de Olímpia e à palavra estádio."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra estádio vem do grego stádion. Antes de nomear o local das provas, o que essa palavra designava na Grécia Antiga?",
    "resposta": "Uma medida de comprimento",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stadion_(unit)",
      "https://en.wikipedia.org/wiki/Stadion_(running_race)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stadion_(unit)",
        "situacao": "ok",
        "texto": "The stadion (plural stadia, Ancient Greek: στάδιον; latinized as stadium; also anglicized as stade) was an ancient Greek unit of length consisting of 600 ancient Greek feet (podes). There are a range of varieties or understandings of what a stadion was and is; these have been calculated by various historians, and those calculations have varied dramatically (as did perhaps the use and meaning of th\n[…]\nThus, the exact length of one stadion is not universally agreed upon today: historians estimate it at between 150 and 210 m (490 and 690 ft), with perhaps something of a convergence around the 185 metres (607 ft) length of an Attic stade.\n[…]\nAccording to Herodotus, one stadium was equal to 600 Greek feet (podes). However, the length of the foot varied in different parts of the Greek world, and the length of the stadion has been the subject of argument and hypothesis for hundreds of years.\n[…]\nAn empirical determination of the length of the stadion was made by Lev Vasilevich Firsov, who compared 81 possibly inaccurate, non-straight-line distances given by Eratosthenes and Strabo with the straight-line distances measured by modern methods, and averaged the results. He obtained a result of about 157.7 metres (172.5 yd). Various comparator lengths, translating the length of a stadion into modern units of length, have been proposed, and some have been named. Among them are:\n[…]\nWhich measure of the stadion is used can affect the interpretation of ancient texts. For example, the error in the calculation of Earth's circumference by Eratosthenes or Posidonius is dependent on which stadion is chosen to be appropriate."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stadion_(running_race)",
        "situacao": "ok",
        "texto": "Stadion or stade (Ancient Greek: στάδιον) was an ancient running event and also the facility in which it took place, as part of Panhellenic Games including the Ancient Olympic Games. The event was one of the five major Pentathlon events and the premier event of the gymnikos agon (γυμνικὸς ἀγών \"nude competition\").\n[…]\nFrom the years 776 to 724 BC, the stadion was the only event at the Olympic Games. The victor (the first of whom was Coroebus of Elis) gave his name to the entire four-year Olympiad, allowing modern knowledge of nearly all of them.\n[…]\nThe stadion was named after the facility in which it took place. This word became stadium in Latin, which became the English \"stadium\". The race also gave its name to the unit of length, the stadion. There were other types of running events, but the stadion was the most prestigious; the winner was often considered to be the winner of an entire Games. Though a separate event, the stadion was also part of the ancient Pentathlon.\n[…]\nAt the Olympic Games, the stadion (facility) was big enough for 20 competitors, and the race was a sprint about 200 yards (180 m) long. The race began with a trumpet blow, with officials (the ἀγωνοθέται agonothetai) at the start to make sure there were no false starts. There were also officials at the end to decide on a winner and to make sure no one had cheated. If the officials decided there was a tie, the race would be re-run.\n[…]\nThe design of these grooves were intended to give the runner leverage for his start.\n[…]\nOlympic winners of the Stadion race"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dio_%28unidade%29",
        "situacao": "ok",
        "texto": "O estádio (em latim: stadium) era uma unidade de medida de comprimento usada na Grécia Clássica. O padrão desta medida era a pista de corrida de Olímpia, onde era disputada a prova do estádio.\n[…]\nHeródoto menciona a distância entre Olímpia e Atenas como de 1485 estádios, e Pausânias, 600 anos depois, a distância entre Olímpia e Esparta como de 660 estádios. Plutarco também menciona o estádio, para dizer que a milha romana era um pouco menor que oito estádios. Estas medidas são consistentes para um estádio valendo 185 metros.\n[…]\nO estádio adotado por escritores do Império Romano varia conforme o autor. Alguns adotam um estádio de 600 pés, porém usam o pé romano, que era 1/25 menor que o pé grego. Segundo Donald Engels, o estádio romano media 185 m.\n[…]\nNo império romano do ocidente não havia grande preocupação com padronizações, e o estádio variava entre as cidades da época. O estádio usado por Eratóstenes, segundo conta Plínio em sua Historia Natural, media 1/40 do esqueno egípcio. Sabe-se que um esqueno media 12.000 \"côvados reais egípcios\" e que, em museus, é  possível ver que esse covado equivale a 0,525 metros, então o estádio de Eratóstenes media 157,5 metros.\n[…]\nDo ponto de vista da ciência oficial, todas as medidas ainda são consideradas especulativas.\n[…]\nA medida dos estádios afeta a interpretação dos textos antigos. Por exemplo, o erro no cálculo do tamanho da Terra de Eratóstenes  ou de Posidónio depende do estádio escolhido na medição.\n[…]\nUnidades de medida da Roma Antiga",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Fuwa",
      "descricao": "Os cinco mascotes dos Jogos Olímpicos de Pequim 2008."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os cinco mascotes de Pequim 2008 se chamavam Beibei, Jingjing, Huanhuan, Yingying e Nini. Juntando uma sílaba de cada, que frase em chinês se forma?",
    "resposta": "Pequim te dá as boas-vindas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fuwa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fuwa",
        "situacao": "ok",
        "texto": "The Fuwa (Chinese: 福娃; pinyin: Fúwá; literally \"good-luck dolls\", also known as \"Friendlies\") were the mascots of the 2008 Summer Olympics in Beijing. The designs were created by Han Meilin, a Chinese artist. The designs were publicly announced by the National Society of Chinese Classic Literature Studies on 11 November 2005 at an event marking the 1000th day before the opening of the games.\n[…]\nThere are five Fuwas: Beibei, Jingjing, Huanhuan, Yingying and Nini. Together, the names form the sentence \"北京欢迎你\", or \"Beijing huanying ni,\" which means \"Beijing welcomes you\". Originally named 'The Friendlies', they were promoted as 'Fuwa' when concerns arose that the name could be misinterpreted.\n[…]\nA 100-episode Olympic-themed animated television series featuring the Fuwa was released in China, primarily on BTV (Beijing's municipal television network), on 8 August 2007. Titled The Olympic Adventures of Fuwa (Chinese: 福娃奥运漫游记; pinyin: Fúwá Àoyùn Mànyóujì), it was jointly produced by BTV and Kaku Cartoon. It ran from 8 August to 1 October 2007. There are also two sequels created by CCTV, Beibei's Promise and The Five Rings.\n[…]\nBeibei (Chinese: 贝贝) is one of the two female Fuwa who represents the blue Olympic ring of Europe.\n[…]\nJingjing (Chinese: 晶晶) is one of the three male Fuwa who represents the black Olympic ring of Africa.\n[…]\nHuanhuan (Chinese: 欢欢) is one of the three male Fuwa who represents the red Olympic ring of the Americas.\n[…]\nYingying (Chinese: 迎迎) is one of the three male Fuwa who represents the yellow Olympic ring of Asia.\n[…]\nNini (Chinese: 妮妮) is one of the two female Fuwa who represents the green Olympic ring of Oceania.\n[…]\nGroups seeking to raise political issues in tandem with China's hosting of the Olympic Games used the Fuwa or have created similar mascots.\n[…]\nThe Official Mascots of the Beijing 2008 Olympic Games (English)\n[…]\nThe Official Mascots of the Beijing 2008 Olympic Games (Chinese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fuwa",
        "situacao": "ok",
        "texto": "Fuwa é o grupo dos mascotes olímpicos das olimpíadas de Beijing 2008.\n[…]\nBeibei, Jingjing, Huanhuan, Yingying e Nini são as mascotes que simbolizam os Jogos Olímpicos de Verão de 2008, em Pequim. Em inglês, são chamados The Friendlies (Os Amistosos) e em chinês usa-se o termo 福娃 (Fúwá, que quer dizer \"Crianças de boa sorte\"). Foram apresentados publicamente em 11 de Novembro de 2005, a 1.000 dias exactos do início dos Jogos.\n[…]\nO nome das mascotes corresponde a uma repetição das sílabas da frase \"Běijīng huānyíng nǐ\" (Pequim dá-vos as boas-vindas). Houve acesa polémica em relação a que animal deveria representar o país (consideravam-se as opções do panda, macaco, tigre e dragão, entre outras) e foram escolhidos cinco animais característicos do país.\n[…]\nA eleição destes animais tem muito simbolismo já que representam as cinco cores dos anéis olímpicos e os cinco elementos tradicionais chineses (metal, madeira, água, fogo e terra).\n[…]\nCada mascote representa um continente diferente, de acordo com sua cor, que são as mesmas utilizadas nos Arcos Olímpicos. Beibei representa a Europa; Jingjing representa a África; Huanhuan representa a América; Yingying representa a Ásia; e Nini representa a Oceania.\n[…]\nSite oficial das Mascotes de Pequim 2008 ((em inglês)).\n[…]\nSite oficial dos Mascotes das Olimpíadas de Beijing 2008 traduzido em português[ligação inativa]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Phryges",
      "descricao": "Mascotes olímpico e paralímpico dos Jogos de Paris 2024, em forma de gorro vermelho."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os mascotes de Paris 2024, chamados Phryges, têm o formato e o nome de um gorro vermelho, símbolo da liberdade na Revolução Francesa. Que gorro?",
    "resposta": "Barrete frígio",
    "fonte": [
      "https://en.wikipedia.org/wiki/2024_Summer_Olympics",
      "https://en.wikipedia.org/wiki/Phrygian_cap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2024_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 2024 Summer Olympics (French: Les Jeux Olympiques d'été de 2024), officially the Games of the XXXIII Olympiad (French: Jeux de la XXXIIIe olympiade de l'ère moderne) and branded as Paris 2024, were an international multi-sport event held in France from 26 July to 11 August 2024, with several events starting from 24 July.\n[…]\nParis 2024 marked the centennial of the 1924 Summer Games and the 1924 Winter Olympics in Chamonix (the first Winter Olympics), as well as the sixth Olympic Games hosted by France (three Summer Olympics and three Winter Olympics). The Summer Games returned to the traditional four-year Olympiad cycle, after the 2020 edition was postponed to 2021 due to the COVID-19 pandemic.\n[…]\nThe podiums used at the 2024 games were ecological, manufactured in France by Le Pavé, Global Concept and Giffard, using French wood and 100% recycled plastic. They were painted in gray color as a homage to the roofs of Paris and were inspired by the design of the Eiffel Tower.\n[…]\nIn the 2024 Paris Olympics, several new events and formats have been introduced. Formula Kite made its debut, described as the \"Formula One of the Olympics\", featuring high-speed foil racing with separate events for men and women. Kayak cross also debuted, where four athletes race against each other on a course with multiple gates, marking the first head-to-head race in Olympic canoe slalom history.\n[…]\nOn 14 November 2022, the Phryges were unveiled as the mascots of the 2024 Summer Olympics and Paralympics; they are a pair of anthropomorphic Phrygian caps, a historic French symbol of freedom and liberty. Marianne is commonly depicted wearing the Phrygian cap, including in the Eugène Delacroix painting, Liberty Leading the People. The two mascots share a motto of \"Alone we go faster, but together we go further\".\n[…]\n2024 Summer Paralympics"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Phrygian_cap",
        "situacao": "ok",
        "texto": "The Phrygian cap ( ), also known as Thracian cap and liberty cap, is a soft conical cap with the apex bent over, associated in antiquity with several peoples in Eastern Europe, Anatolia, and Asia. The Phrygian cap was worn by Thracians, Dacians, Persians, Medes, Scythians, Trojans and Phrygians after whom it is named. The oldest known depiction of the Phrygian cap is from Persepolis in Iran.\n[…]\nThe use of a Phrygian-style cap as a symbol of revolutionary France is first documented in May 1790, at a festival in Troyes, adorning a statue representing the nation, and at Lyon, on a lance carried by the goddess Libertas. To this day the national allegory of France, Marianne, is shown wearing a red Phrygian cap.\n[…]\nThe republican associations with the bonnet rouge were adopted as the name and emblem of a French satirical republican and anarchist periodical published between 1913 and 1922 by Miguel Almereyda that targeted the Action française, a royalist, counter-revolutionary movement on the extreme right.\n[…]\nIn the years just prior to the Revolutionary War, Americans copied or emulated some of those prints in an attempt to visually defend their \"rights as Englishmen\". Later, the symbol of republicanism and anti-monarchical sentiment appeared in the United States as the headgear of Columbia, who in turn was visualized as a goddess-like female national personification of the United States and of Liberty herself.\n[…]\nMany of the anti-colonial revolutions in Latin America were heavily inspired by the imagery and slogans of the American and French Revolutions. As a result, the cap has appeared on the coats of arms of many Latin American nations. The coat of arms of Haiti includes a Phrygian cap to commemorate that country's foundation by rebellious slaves.\n[…]\nThe official mascots of the Paris 2024 Olympic and Paralympic Games, named the Phryges, were based on the cap."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "Jogos Olímpicos de Verão de 2024 (em francês: Les Jeux olympiques d'été de 2024), oficialmente denominados Jogos da XXXIII Olimpíada (em francês: Jeux de la XXXIIIe Olympiade) e comumente conhecidos como Paris 2024, foi um evento multiesportivo internacional realizado de 26 de julho (data da cerimônia de abertura) a 11 de agosto de 2024 na França, com Paris como principal cidade anfitriã e 16 outr\n[…]\nTendo anteriormente sediado os Jogos de 1900 e de 1924, Paris se tornará a segunda cidade, depois de Londres (que foi a anfitriã em 1908, 1948 e 2012), a sediar três vezes os Jogos Olímpicos de Verão. Paris 2024 também marca o centenário de Paris 1924, e estes Jogos Olímpicos são os sextos organizados pela França (três de verão e três de inverno), e os primeiros Jogos Olímpicos franceses desde os Jogos Olímpicos de Inverno de 1992 em Albertville.\n[…]\nEm 8 de fevereiro de 2024, o Comitê Olímpico Internacional apresentou ao mundo o design das medalhas olímpicas e paralímpicas. Cada uma das 5 084 peças apresentam uma peça central de ferro com 18 gramas, retirada de fragmentos da Torre Eiffel, que permanecem conservados após a remoção nas reformas do século XX. Dentro do hexágono feito com o tal material, há a logo dos Jogos Olímpicos, uma vez que a forma geométrica lembra à França uma nação que às vezes é chamada de \"L'hexagone\".\n[…]\nO programa dos Jogos Olímpicos de Verão de 2024 conta com 329 eventos em 32 esportes.\n[…]\nFoi revelado em 14 de novembro de 2022, ás 11h30min do horário de Paris. As Phryges (pronuncia-se fri-jehs) são pequenos barretes (gorros) frígios, que representam um forte símbolo de liberdade, inclusão e a habilidade das pessoas de apoiarem causas grandes e significativas. Elas são bordadas nas cores vermelha, branca e azul, com o logo de Paris 2024 estampado na frente.\n[…]\n«Página do COI sobre os Jogos Olímpicos de Paris 2024»\n[…]\n«Página oficial de Paris 2024» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Parque Aquático Maria Lenk",
      "descricao": "Centro aquático no Rio de Janeiro, sede dos saltos ornamentais, do nado artístico e de jogos de polo aquático na Rio 2016."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Rio 2016, os saltos ornamentais foram disputados num parque aquático batizado em homenagem a que nadadora, a primeira brasileira a competir nos Jogos?",
    "resposta": "Maria Lenk",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maria_Lenk_Aquatics_Centre",
      "https://en.wikipedia.org/wiki/Maria_Lenk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Lenk_Aquatics_Centre",
        "situacao": "ok",
        "texto": "The Maria Lenk Aquatics Centre (Portuguese: Parque Aquático Maria Lenk) is an aquatics centre that is part of the City of Sports Complex in the Barra da Tijuca district of Rio de Janeiro, Brazil. It is part of the investments made by the city to host the swimming, synchronized swimming and diving competitions of the 2007 Pan American Games. During the 2016 Summer Olympics, it hosted group matches \n[…]\nThe name of the water park is a tribute to the Brazilian swimmer, Maria Lenk, who died less than three months before its inauguration.\n[…]\nThe complex has the capacity to receive about 8,000 people. The construction area is 42,000 square metres (450,000 ft2). The facility has also been designed according to the specifications required to achieve the Parapan American Games of 2007, as well as environments and equipment ready to receive people with disabilities. The park, as well as other facilities built for the achievement of the Pan American Games, was one of the major assets of the city's bid for the 2016 Summer Olympics.\n[…]\nIn 2011, the facility received the Centro de Treinamento Time Brasil (Team Brazil Training Center), which comprises a gym, a laboratory, and a room for combat sports training, designed by judoka turned architect Daniela Polzin. In 2018, COB moved its headquarters onto the aquatics centre in a cost-cutting measure, while also planning to add two beach volleyball courts in the area to offer more services in the facility. It also started receiving the Brazil Swimming Trophy starting in 2017.\n[…]\nIn 2022, as COB moved into a building closer to the centre, it also renewed its concession of the Maria Lenk Aquatics Centre until 2048, while also planning to add an archery range nearby.\n[…]\nJúlio Delamare Aquatics Centre\n[…]\nSwimming Olympic Centre of Bahia\n[…]\nRio 2016 website"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Lenk",
        "situacao": "ok",
        "texto": "Maria Emma Hulga Lenk (January 15, 1915 – April 16, 2007) was a Brazilian swimmer, the first South American woman to participate in the Summer Olympic Games, in 1932 (Los Angeles).\n[…]\nBorn in São Paulo, Maria Lenk was the first Brazilian in history to set a world record in swimming. On November 8, 1939, in Rio de Janeiro with a time of 2:56.0, she beat Jopie Waalberg's previous record of 2:56.9, for the 200m breaststroke event. This record lasted almost 5 years, until Nel van Vliet, from the Netherlands broke it on August 17, 1946, with a time of 2:52.6.\n[…]\nLenk's goal of winning an Olympic medal was cut short when World War II caused the cancellation of the Games of 1940 and 1944, which would have corresponded to her peak in competitive swimming.\n[…]\nBefore her death, Maria Lenk still swam 1½ kilometres every day, even in her 90s.\n[…]\nAt the time of her death, Maria Lenk still held five Master World Records:\n[…]\nOn February 12, 2007, the mayor of Rio de Janeiro, César Maia, officially gave her name to the Maria Lenk Aquatics Centre that held swimming, diving and synchronized swimming events at the 2007 Pan American Games, in Rio de Janeiro. It also hosted aquatic events at  the 2016 Olympics.\n[…]\nOn April 17, 2007, one day after her death, the president of the Confederação Brasileira de Desportos Aquáticos (Brazilian Aquatic Sports Confederation), Coaracy Nunes, announced that the name of the Troféu Brasil de Natação (Brazilian Swimming Trophy) had been changed to the Maria Lenk Trophy in Lenk's honour.\n[…]\nMaria Emma Lenk-Zigler at Olympics.comMaria Lenk at Olympic.org (archived)\n[…]\nMaria Lenk at Olympedia\n[…]\nMaria Lenk  at World Aquatics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Aqu%C3%A1tico_Maria_Lenk",
        "situacao": "ok",
        "texto": "O Parque Aquático Maria Lenk integra o Complexo Esportivo Cidade dos Esportes, na Barra Olímpica, parte dos investimentos da prefeitura do Rio de Janeiro para receber as competições de natação, nado sincronizado e saltos ornamentais dos Jogos Pan-americanos de 2007. O nome do parque aquático é uma homenagem à nadadora brasileira Maria Lenk, falecida pouco menos de três meses antes de sua inauguraç\n[…]\nNos Jogos Olímpicos de Verão de 2016, além de nado sincronizado e saltos ornamentais foi sede do polo aquático.\n[…]\nO Parque Aquático, projetado de acordo com os parâmetros e especificações estabelecidos da Federação Internacional de Natação (FINA), é parcialmente coberto e composto por uma piscina olímpica, uma piscina de aquecimento e um tanque para saltos ornamentais.\n[…]\nPassou a ser, a partir de março de 2008, a ser administrada pelo Comitê Olímpico Brasileiro, que a partir de 2009 passou a executar projetos de treinamentos para atletas olímpicos e paraolímpicos, técnicos e árbitros, além de cursos, congressos, workshops, academia de ginástica e escolinhas de natação, pólo aquático, saltos ornamentais e nado sincronizado.\n[…]\nEm 2022, enquanto o COB se mudava para uma nova sede, também renovou sua concessão do Parque Aquático Maria Lenk até 2048, e planejava um estande de tiro com arco. Em 2023,  529 atletas, 156 comissões técnicas atendidas e 33 Confederações foram atendidas no Centro de Treinamento, que incluía uma sala para treinar ginástica e uso da piscina para canoagem slalom.\n[…]\nNatação nos Jogos Pan-americanos de 2007\n[…]\nNado sincronizado nos Jogos Pan-americanos de 2007\n[…]\nSaltos ornamentais nos Jogos Pan-americanos de 2007\n[…]\nPolo aquático nos Jogos Olímpicos de Verão de 2016\n[…]\nParque Aquático Júlio Delamare\n[…]\nMedia relacionados com Parque Aquático Maria Lenk no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Jogos Olímpicos da Antiguidade",
      "descricao": "Festival esportivo e religioso realizado no santuário de Olímpia, na Grécia Antiga."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição, os Jogos de Olímpia acabaram no fim do século quatro, por causa dos decretos contra cultos pagãos de que imperador romano?",
    "resposta": "Teodósio I",
    "distratores": [
      "Constantino",
      "Nero",
      "Justiniano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ancient_Olympic_Games"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ancient_Olympic_Games",
        "situacao": "ok",
        "texto": "The ancient Olympic Games (Ancient Greek: τὰ Ὀλύμπια, ta Olympia), or the ancient Olympics, were a series of athletic competitions among representatives of city-states and one of the Panhellenic Games of ancient Greece. They were held at the Panhellenic religious sanctuary of Olympia, in honor of Zeus, and the Greeks gave them a mythological origin. The originating Olympic Games are traditionally "
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_da_Antiguidade",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos da Antiguidade eram um festival religioso e atlético da Grécia Antiga, que se realizava de quatro em quatro anos no santuário de Olímpia, em honra de Zeus. A data tradicional atribuída à primeira edição dos Jogos Olímpicos é 776 a.C..\n[…]\nOs Jogos Olímpicos eram os mais importantes Jogos Pan-Helênicos, tendo sido proibidos pelo imperador cristão Teodósio I em 393, por serem uma manifestação de rituais do paganismo. Uma importante fonte sobre os jogos é Pausânias (século II d.C.), autor do livro Descrição da Grécia, um guia da Grécia baseado nas suas viagens pelo território. Outra importante fonte é um tratado sobre a ginástica de Filóstrato de Lemnos (século II-III d.C.).\n[…]\nEm 146 a.C. a Grécia foi conquistada pelos romanos. Para financiar a sua guerra contra Mitrídates VI do Ponto, o general romano Sula saqueou o Áltis (bem como os santuários de Delfos e do Epidauro). Em 80 a.C., como forma de celebrar o sucesso da sua guerra, Sula transferiu os jogos para Roma, mas depois da sua morte em 78 a.C. os jogos regressaram a Olímpia. Durante um breve período da era romana os jogos retomaram a sua vitalidade.\n[…]\nEste tipo de prova incluía as corridas de bigas ou de cavalo de sela. Nas primeiras poderiam usar-se dois cavalos (bigas) ou quatro cavalos (quadrigas). As quadrigas teriam sido introduzidas nos Jogos Olímpicos pela primeira vez em 680 a.C. e as corridas de cavalo de sela em 648 a.C.. Uma corrida de carros consistia em doze voltas ao hipódromo, tendo cada volta entre 823 e 914 metros; a corrida de cavalo era uma volta do hipódromo.\n[…]\nCerimônias dos Jogos Olímpicos\n[…]\nJogos Ístmicos\n[…]\nJogos Nemeus\n[…]\nMuseu Arqueológico de Olímpia\n[…]\nOs Jogos Olímpicos na Grécia Antiga\n[…]\n«A verdadeira história dos Jogos Olímpicos» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Jogos Olímpicos de Inverno de 1994",
      "descricao": "Edição dos Jogos Olímpicos de Inverno realizada em Lillehammer, na Noruega."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os Jogos de Inverno de Lillehammer foram disputados em 1994, apenas dois anos depois dos de Albertville. Por que esse intervalo menor?",
    "resposta": "Para não coincidir com os Jogos de Verão",
    "fonte": [
      "https://en.wikipedia.org/wiki/1994_Winter_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1994_Winter_Olympics",
        "situacao": "ok",
        "texto": "The 1994 Winter Olympics, officially known as the XVII Olympic Winter Games (Norwegian: De 17. olympiske vinterleker; Nynorsk: Dei 17. olympiske vinterleikane) and commonly known as Lillehammer '94, were an international winter multi-sport event held from 12 to 27 February 1994 in and around Lillehammer, Norway.\n[…]\nHaving lost the bid for the 1992 Winter Olympics to Albertville in France, Lillehammer was awarded the 1994 Winter Games on 15 September 1988, two days before the 1988 Summer Olympics opening ceremonies at the 94th IOC Session in Seoul, South Korea. Due to the calendar changes made in 1986, this was the only time that the Winter Olympics took place two years after the previous Winter Games, and the first to be held in a different year from the Summer Olympics.\n[…]\nThe Oxford Olympics Study established the outturn cost of the Lillehammer 1994 Winter Olympics at US$2.2 billion in 2015-dollars and cost overrun at 277% in real terms.\n[…]\n\"Lillehammer 1994\". Olympics.com. International Olympic Committee.\n[…]\nThe program of the 1994 Lillehammer Winter Olympics\n[…]\nLillehammer Olympic Organizing Committee. \"1994 Winter Olympics Report, volume I\" (PDF). Archived (PDF) from the original on 2 December 2010. Retrieved 10 December 2010.\n[…]\nLillehammer Olympic Organizing Committee. \"1994 Winter Olympics Report, volume II\" (PDF). Archived (PDF) from the original on 2 December 2010. Retrieved 10 December 2010.\n[…]\nLillehammer Olympic Organizing Committee. \"1994 Winter Olympics Report, volume III\" (PDF). Archived from the original (PDF) on 2 December 2010. Retrieved 10 December 2010.\n[…]\nLillehammer Olympic Organizing Committee. \"1994 Winter Olympics Report, volume IV\" (PDF). Archived from the original (PDF) on 2 December 2010. Retrieved 10 December 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Inverno_de_1994",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos de Inverno de 1994 (em norueguês: De 17. olympiske vinterleker; em novo norueguês: Dei 17. olympiske vinterleikane), oficialmente XVII Jogos Olímpicos de Inverno, foram um evento multiesportivo celebrados em Lillehammer, na Noruega, com 1737 atletas de 67 países. Os jogos se realizaram de 12 a 27 de fevereiro.\n[…]\nEm 1986 o Comitê Olímpico Internacional votou por realizar os Jogos Olímpicos de Verão e de Inverno em anos separados, sendo que eram disputados no mesmo ano desde a introdução dos Jogos de Inverno em 1924, passando a ser realizados a cada dois anos alternados iniciando com a edição de 1994. Desta forma estas foram as primeiras Olimpíadas de Inverno não disputadas no mesmo ano das Olimpíadas de Verão e única realizada oficialmente dois anos após a edição anterior.\n[…]\nCom esta alteração no ciclo, a próxima edição dos Jogos de Inverno foi realizada em 1998.\n[…]\nLillehammer ganhou o direito de sediar os Jogos em setembro de 1988 em Seul, antes da cerimônia de abertura dos Jogos Olímpicos de Verão daquele ano, superando as candidaturas de Anchorage (Estados Unidos), Sófia (Bulgária) e a conjunta Östersund/Åre (Suécia).\n[…]\nAbaixo a lista de modalidades que foram disputadas nos Jogos. Em parênteses o número de eventos em cada modalidade:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Vanderlei Cordeiro de Lima",
      "descricao": "Maratonista brasileiro, medalha de bronze na maratona dos Jogos de Atenas 2004."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Atacado por um espectador quando liderava a maratona de Atenas 2004, Vanderlei Cordeiro de Lima terminou em terceiro e recebeu depois que homenagem especial?",
    "resposta": "Medalha Pierre de Coubertin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
      "https://en.wikipedia.org/wiki/Pierre_de_Coubertin_Medal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
        "situacao": "ok",
        "texto": "Vanderlei Cordeiro de Lima  (born 4 July 1969) is a retired Brazilian long-distance runner. He was born in Cruzeiro do Oeste, Paraná. While leading the marathon after 35 km (22 mi) at the 2004 Summer Olympics, he was attacked on the course by Irish former priest Cornelius \"Neil\" Horan. Following the incident, Lima fell from first to third place, eventually winning the bronze medal. He was later aw\n[…]\nLima was a two-time Pan American champion, running 2:17:20 at the 1999 Games and 2:19:08 for the second victory at the 2003 Games. He began the 2004 season with a win (2:09:39) at the Hamburg Marathon.\n[…]\nAt the closing of the event, the International Olympic Committee awarded Lima the Pierre de Coubertin Medal for the spirit of sportsmanship. The medal was officially presented to Lima on 7 December in Rio de Janeiro, during a formal ceremony organized on a yearly basis by the Brazilian Olympic Committee (COB) during the Prêmio Brasil Olímpico. Lima was also named Brazilian Athlete of the Year in 2004, receiving the trophy presented by the COB at the same time as the Pierre de Coubertin Medal.\n[…]\nLima's biography was written by Renata Adrião D'Angelo, Vanderlei de Lima - A Maratona de uma Vida (A Marathon of Life), printed in Brazil by Casa da Palavra, in 2007. Lima took part in the 2016 Summer Olympics torch relay in Brasília. In August 2016, he received the honor of lighting the Olympic Flame at the 2016 Summer Olympics in Rio de Janeiro during the Opening Ceremonies.\n[…]\nA documentary shows De Lima returning to Athens at age 54 to participate in the Athens Classic Marathon. The documentary chronicles his relationship with the city and his experience with the attack at the 2004 Summer Olympics.\n[…]\nVanderlei de Lima at World Athletics\n[…]\nVanderlei de Lima - the story of a man that goes beyond one strange incident - Article from IAAF\n[…]\nVanderlei de Lima at Olympics.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pierre_de_Coubertin_Medal",
        "situacao": "ok",
        "texto": "The Pierre de Coubertin Medal is a special decoration awarded by the International Olympic Committee that \"pays tribute to institutions with a pedagogical and educational role and to people who, through their research and the creation of intellectual works in the spirit of Pierre de Coubertin, contribute to the promotion of Olympism.\" It was designed by André Ricard Sala, with one face featuring a\n[…]\nThe medal is not the same award as the Pierre de Coubertin World Trophy, which was inaugurated in 1965 and is awarded by the International Fair Play Committee, although the two are often confused. For example, some news media reported on 22 August 2016 that Nikki Hamblin and Abbey D'Agostino had received the medal after colliding with each other on the track during the 5000 m event and assisting each other to continue the race.\n[…]\nThe New Zealand Olympic Committee said that no such award had yet been made, and The Guardian later corrected their report confirming \"the award was the International Fair Play Committee Award rather than the Pierre de Coubertin award\". It is also regularly mentioned that the first winner of the Pierre de Coubertin Medal was the Italian bobsledder Eugenio Monti in 1964, although in fact he became the first winner of the Pierre de Coubertin World Trophy.\n[…]\nA medal awarded since 1969 \"for outstanding merits in the Olympic Movement\" by the Austrian Olympic Committee (ÖOC) called the Pierre de Coubertin-Medaille, 'Pierre de Coubertin Medal' has given rise to further confusion."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vanderlei_Cordeiro",
        "situacao": "ok",
        "texto": "Vanderlei Cordeiro de Lima (Cruzeiro do Oeste, 4 de julho de 1969) é um ex-maratonista brasileiro, bicampeão dos Jogos Pan-Americanos, medalha de bronze nos Jogos Olímpicos de Atenas 2004 e o único latino-americano outorgado com a Medalha Pierre de Coubertin, a maior condecoração de cunho humanitário-esportivo concedida pelo Comitê Olímpico Internacional (COI).\n[…]\nNa altura do km 35, a pouco mais de sete quilômetros da chegada no estádio Panatenaico, quando ainda tinha cerca de 25 a 30s de diferença – cerca de 150 m – sobre os demais corredores e a medalha de ouro parecia eventualmente ganha, ele foi atacado no meio da rua por um espectador, o ex-padre irlandês Neil Horan, que o jogou fora da pista.\n[…]\nDurante o encerramento dos Jogos, foi anunciado que por seu feito, seu espírito esportivo em continuar na disputa mesmo sendo atacado e a humildade demonstrada após a prova, Vanderlei seria agraciado com a Medalha Pierre de Coubertin, concedida pelo COI para atletas que valorizam a competição olímpica mais do que a vitória e que é considerada uma honra elevadíssima atribuída pela entidade.\n[…]\nEntre as várias homenagens recebidas por Vanderlei após a conquista, inclusive na Europa, uma das mais tocantes aconteceu no Brasil, pouco dias depois de seu retorno. O jogador de voleibol de praia Emanuel, da dupla Ricardo e Emanuel, que conquistou a medalha de ouro da modalidade nos mesmos Jogos, ao se encontrar publicamente com o maratonista em um programa de televisão, retirou do pescoço e lhe deu sua própria medalha de ouro de presente.\n[…]\nTenho muito orgulho de minhas origens e de minhas escolhas, pois elas me levaram à conquista do maior sonho: a medalha olímpica. Descobri que ela não é só minha, pois carrega a alegria, o sofrimento e a torcida de todo brasileiro. Nada veio fácil para mim. Vanderlei Cordeiro de Lima",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Fred Lorz",
      "descricao": "Corredor americano que cruzou a chegada em primeiro na maratona olímpica de Saint Louis 1904 e foi desclassificado."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na maratona olímpica de Saint Louis 1904, o americano Fred Lorz cruzou a chegada em primeiro, mas foi desclassificado. Por quê?",
    "resposta": "Fez parte do percurso de carro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fred_Lorz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fred_Lorz",
        "situacao": "ok",
        "texto": "Frederick Lorz (June 5, 1884 – February 4, 1914) was an American long-distance runner who won the 1905 Boston Marathon. Lorz is also known for his \"finish\" in the marathon at the 1904 Summer Olympics, where he did not cross the halfway mark of the race, and crossed the line to be hailed as the winner.\n[…]\nBorn in New York City, Lorz was reported to have done all his training at night due to his profession as a bricklayer.\n[…]\nAn announcement in the August 6, 1904, issue of The New York Times indicated that the Metropolitan Association of the Amateur Athletic Union would hold a \"special seven-mile race\" at Celtic Park on August 13, 1904, with the eight top finishers receiving a paid trip to compete in the marathon at the Olympic Games in St. Louis on August 30, 1904. Lorz, listed as representing the Mohawk Athletic Club, was named as one of 19 \"probable competitors\" in the event.\n[…]\nIn the marathon at the 1904 Olympic Games, Lorz stopped running because of exhaustion after nine miles (14 km). His manager gave him a lift in his car and drove the next eleven miles (18 km) before the car broke down, after which Lorz continued on foot back to the Olympic stadium, where he broke the finishing line tape and was greeted as the winner.\n[…]\nLorz traveled to London for the 1908 Summer Olympics but ultimately did not participate. Frederick Lorz died in 1914 of pneumonia.\n[…]\nMedia related to Frederick Lorz at Wikimedia Commons\n[…]\nEvans, Hilary; Gjerde, Arild; Heijmans, Jeroen; Mallon, Bill; et al. \"Fred Lorz\". Olympics at Sports-Reference.com. Sports Reference LLC. Archived from the original on 2011-07-16.\n[…]\nFrederick Lorz at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fred_Lorz",
        "situacao": "ok",
        "texto": "Frederick Lorz (Nova Iorque, 5 de junho de 1884 – Nova Iorque, 4 de fevereiro de 1914) foi um corredor norte-americano de longa distância.\n[…]\nLorz ficou conhecido nos anais dos Jogos Olímpicos por ter sido o corredor que 'não-venceu' a maratona do Jogos de Saint Louis em 1904. Durante a prova, disputada sob calor numa estrada poeirenta, Lorz sucumbiu à exaustão após quinze quilômetros de percurso e aceitou uma carona no carro de seu empresário durante cerca de dezesseis quilômetros.\n[…]\nDescansado e reanimado com líquidos, ele desceu do carro e completou a prova correndo, entrando no estádio olímpico e cruzando a fita de chegada comemorando como vencedor.\n[…]\nApós as comemorações, Lorz admitiu aos fiscais da prova que tinha pegado uma carona e que tudo não passava de uma brincadeira, depois que um espectador fez a denúncia de que ele não tinha completado todo o percurso correndo. O vencedor acabou sendo o segundo a cruzar a linha de chegada, Thomas Hicks, que teve de ser reanimado várias vezes à base de conhaque e ovos crus, fez a prova em péssimas condições físicas e próximo a um colapso, correndo risco de morte.\n[…]\nLorz acabou sendo banido do esporte pela União Atlética Amadora dos Estados Unidos, mas poucos meses depois foi perdoado, vencendo então legitimamente a Maratona de Boston de 1905. Morreu em fevereiro de 1914, vitimado por uma pneumonia, com apenas 29 anos de idade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Pentatlo moderno",
      "descricao": "Modalidade olímpica criada por Pierre de Coubertin que reúne provas de esgrima, natação, tiro, corrida e, originalmente, hipismo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Criado por Coubertin, o pentatlo moderno reunia esgrima, tiro, natação, hipismo e corrida para simular a aventura de quem?",
    "resposta": "Um soldado de cavalaria atrás das linhas inimigas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Modern_pentathlon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Modern_pentathlon",
        "situacao": "ok",
        "texto": "The modern pentathlon is an Olympic multisport that consists of five events: fencing (one-touch épée followed by direct elimination), freestyle swimming, obstacle course racing, laser pistol shooting, and cross country running.\n[…]\nMost sources state that the creator of the modern pentathlon was Baron Pierre de Coubertin, the founder of the modern Olympic Games. One alternative view is provided by researcher Sandra Heck, who concluded that Viktor Balck, the President of the Organizing Committee for the 1912 Games, made use of the long tradition of Swedish military multi-sports events to create the modern pentathlon.\n[…]\nAs the events of the ancient pentathlon were modelled on the skills of the ideal soldier to defend a fortification of that time, Coubertin created the contest to simulate the experience of a 19th-century cavalry soldier behind enemy lines: he must ride an unfamiliar horse, fight enemies with pistol and sword, swim, and run to return to his own soldiers.\n[…]\nIn October 2023, during the 141st IOC Session in Mumbai, the IOC voted to reinstate modern pentathlon with its new format for the 2028 Summer Olympics.\n[…]\nA 2021 study by Quartz concluded that modern pentathlon (in the form that included equestrian) was the most expensive Olympic sport for entry-level costs. It found that to start modern pentathlon cost US$13,580 for equipment and facilities. Most other Olympic sports examined cost less than $500 to start in.\n[…]\nList of Olympic medalists in modern pentathlon\n[…]\nModern pentathlon at the Summer Olympics\n[…]\nWorld Modern Pentathlon Championships – International modern pentathlon competition\n[…]\nMedia related to Modern pentathlon at Wikimedia Commons\n[…]\nLasers make modern pentathlon more modern"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pentatlo_moderno",
        "situacao": "ok",
        "texto": "Pentatlo moderno é um desporto olímpico praticado por homens e por mulheres, individualmente ou em equipes. Compõe-se de cinco modalidades diferentes: hipismo, esgrima, natação, tiro esportivo e corrida. É proclamado vencedor aquele que obtiver o melhor desempenho geral ao somar mais pontos. Por essa variedade de esportes, o vencedor do pentatlo é considerado o atleta mais completo.\n[…]\nNo início do século XX, o Barão de Coubertin, fundador dos Jogos Olímpicos da Era Moderna,  decidiu estimular a realização do pentatlo moderno. O pentatlo estreou nas Olimpíadas de 1912, em Estocolmo, Suécia.\n[…]\nO pentatlo moderno é uma prova criada pelo Barão Pierre de Coubertin, fundador dos Jogos Olímpicos da era moderna, baseada na filosofia por detrás do pentatlo disputado nos Jogos Olímpicos antigos. Na Grécia Antigamente, o pentatlo era constituído por provas que pretendiam demonstrar todas as aptidões físicas. Aquando da invenção da versão moderna, Coubertin inspirou-se nos soldados da cavalaria do século XIX, que deveriam saber montar um cavalo desconhecido, disparar, esgrimir, correr e nadar.\n[…]\nNatação: 200 metros livres\n[…]\nLaser-Run (Evento Combinado): O evento combinado é a última prova do pentatlo moderno e consiste na junção do tiro esportivo com a corrida. O atleta parte da linha de chegada e corre cerca de 30 metros até o estande de tiro onde terá que executar 5 tiros certeiros no alvo correspondente ao \"7\" no tiro esportivo de pistola de ar a 10 metros (atualmente o tiro é praticado com pistolas laser).\n[…]\nA China e o Brasil obtiveram suas primeiras medalhas olímpicas do pentatlo moderno nas Olimpíadas de 2012, e a Austrália e o México nas Olimpíadas de 2016.\n[…]\nPentatlo moderno nos Jogos Olímpicos\n[…]\nCampeonato Mundial de Pentatlo Moderno\n[…]\n«Federação Internacional de Pentatlo Moderno»\n[…]\n«Confederação Brasileira de Pentatlo Moderno»\n[…]\n«COI Pentatlo Moderno»\n[…]\n«COI Pentatlo Moderno»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Kotinos",
      "descricao": "Coroa vegetal dada como prêmio aos vencedores dos Jogos de Olímpia na Grécia Antiga."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nos Jogos de Olímpia da Antiguidade, os vencedores não ganhavam medalhas, mas uma coroa feita com ramos de que árvore?",
    "resposta": "Oliveira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olive_wreath",
      "https://en.wikipedia.org/wiki/Ancient_Olympic_Games"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olive_wreath",
        "situacao": "ok",
        "texto": "The olive wreath, also known as kotinos (Greek: κότινος), was the prize for the winner at the ancient Olympic Games. It was a branch of the wild olive tree Elaia Kallistephanos that grew at Olympia, entwined to form a circle or a horse-shoe. The branches of the sacred wild-olive tree near the temple of Zeus were cut by a pais amphithales (Ancient Greek: παῖς ἀμφιθαλής, a boy whose parents were bot"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ancient_Olympic_Games",
        "situacao": "ok",
        "texto": "The ancient Olympic Games (Ancient Greek: τὰ Ὀλύμπια, ta Olympia), or the ancient Olympics, were a series of athletic competitions among representatives of city-states and one of the Panhellenic Games of ancient Greece. They were held at the Panhellenic religious sanctuary of Olympia, in honor of Zeus, and the Greeks gave them a mythological origin. The originating Olympic Games are traditionally "
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coroa_de_oliveira",
        "situacao": "ok",
        "texto": "A coroa de oliveira (em grego:  κότινος, kótinos) era o prémio atribuído ao vencedor dos Antigos Jogos Olímpicos.\n[…]\nEra um ramo da oliveira selvagem que crescia em Olímpia, interligado para formar um círculo. Os ramos da oliveira-selvagem sagrada, perto do templo de Zeus, eram cortados por um \"pais amfithalis\" (um menino cujos pais eram ambos vivos) com um par de tesouras de ouro. Em seguida, ele levava-os para o templo de Hera e colocava-os sobre uma mesa de ouro e marfim. A partir daí, o Hellanodikai (o júri dos Jogos Olímpicos) levava-os, fazia as coroas e coroava os vencedores dos Jogos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Lema olímpico",
      "descricao": "Divisa em latim do movimento olímpico, conhecida como Citius, Altius, Fortius."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 2021, o lema olímpico mais rápido, mais alto, mais forte ganhou uma quarta palavra latina. O que ela significa?",
    "resposta": "Juntos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Citius,_Altius,_Fortius"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Citius,_Altius,_Fortius",
        "situacao": "desambiguacao",
        "texto": "Citius, Altius, Fortius (Latin for \"Faster, Higher, Stronger\") may refer to: \n\nCitius, Altius, Fortius (Olympic motto)\nJournal of Olympic History, formerly Citius, Altius, Fortius\nCitius, Altius, Fortius, an artwork by Jordi Bonet in a metro station in Montreal, Canada"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Medalhas dos Jogos Olímpicos de 2024",
      "descricao": "Medalhas de ouro, prata e bronze entregues nos Jogos Olímpicos de Paris 2024."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As medalhas dos Jogos de Paris 2024 trazem, no centro, um hexágono de ferro original retirado de que monumento?",
    "resposta": "Torre Eiffel",
    "fonte": [
      "https://en.wikipedia.org/wiki/2024_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2024_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 2024 Summer Olympics (French: Les Jeux Olympiques d'été de 2024), officially the Games of the XXXIII Olympiad (French: Jeux de la XXXIIIe olympiade de l'ère moderne) and branded as Paris 2024, were an international multi-sport event held in France from 26 July to 11 August 2024, with several events starting from 24 July.\n[…]\nThe president of the Paris 2024 Olympic Organizing Committee, Tony Estanguet, unveiled the Olympic and Paralympic medals for the Games in February 2024, which on the obverse featured embedded hexagon-shaped tokens of scrap iron that had been taken from the original construction of the Eiffel Tower, with the logo of the Games engraved into it. Approximately 5,084 medals would be produced by the French mint Monnaie de Paris, and were designed by Chaumet, a luxury jewellery firm based in Paris.\n[…]\nThe podiums used at the 2024 games were ecological, manufactured in France by Le Pavé, Global Concept and Giffard, using French wood and 100% recycled plastic. They were painted in gray color as a homage to the roofs of Paris and were inspired by the design of the Eiffel Tower.\n[…]\nThe podiums were two-toned. The front was white with the Olympic rings and the Paralympic agitos. The top was gray to reflect the zinc of the Parisian rooftops. The inscription \"Paris 2024\" was on the sides of the steps. The Paralympic modules had ramps for accessibility.\n[…]\nJolly stated that the ceremony would highlight notable moments in the history of France, with an overall theme of love and \"shared humanity\". The French Assassin Arno Dorian appeared to carry the olympic torch through the streets of parkour. The athletes then attended the official protocol at Jardins du Trocadéro, in front of the Eiffel Tower.\n[…]\nDoping suspensions at Paris 2024\n[…]\n\"Paris 2024\". Olympics.com. International Olympic Committee."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2024",
        "situacao": "ok",
        "texto": "Jogos Olímpicos de Verão de 2024 (em francês: Les Jeux olympiques d'été de 2024), oficialmente denominados Jogos da XXXIII Olimpíada (em francês: Jeux de la XXXIIIe Olympiade) e comumente conhecidos como Paris 2024, foi um evento multiesportivo internacional realizado de 26 de julho (data da cerimônia de abertura) a 11 de agosto de 2024 na França, com Paris como principal cidade anfitriã e 16 outr\n[…]\nEm 8 de fevereiro de 2024, o Comitê Olímpico Internacional apresentou ao mundo o design das medalhas olímpicas e paralímpicas. Cada uma das 5 084 peças apresentam uma peça central de ferro com 18 gramas, retirada de fragmentos da Torre Eiffel, que permanecem conservados após a remoção nas reformas do século XX. Dentro do hexágono feito com o tal material, há a logo dos Jogos Olímpicos, uma vez que a forma geométrica lembra à França uma nação que às vezes é chamada de \"L'hexagone\".\n[…]\nNas costas, estão imagens tradicionais como a Nike, deusa da vitória, o Estádio Panatenaico e a Acrópole. Em frente à Acrópole, foi inclusa a Torre Eiffel.\n[…]\nAlém disso, nove locais serão temporários e apenas três foram construídos para o evento. Entre os locais temporários está o Campo de Marte, que recebe uma arena para o judô e as lutas, além da Torre Eiffel, que recebe uma arena para o voleibol de Praia.\n[…]\nO programa dos Jogos Olímpicos de Verão de 2024 conta com 329 eventos em 32 esportes.\n[…]\nO emblema dos Jogos Olímpicos e Paralímpicos de Verão de 2024 foi revelado em 21 de outubro de 2019 no Grand Rex. É uma representação de Marianne, a personificação nacional da França, com uma chama formada no espaço negativo por seus cabelos. O emblema também se assemelha a uma medalha de ouro, o mapa da cidade e os locais de competição e também lembra que a cidade foi a primeira na história em que mulheres puderam competir nos Jogos de 1900.\n[…]\n«Página do COI sobre os Jogos Olímpicos de Paris 2024»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Rebeca Andrade",
      "descricao": "Ginasta artística brasileira, campeã olímpica no salto em Tóquio 2020 e no solo em Paris 2024."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Tóquio 2020, Rebeca Andrade empolgou o Brasil com uma série de solo ao som de que funk de MC João?",
    "resposta": "Baile de Favela",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rebeca_Andrade",
      "https://pt.wikipedia.org/wiki/Rebeca_Andrade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Brazilian Portuguese pronunciation: [ʁeˈbɛkɐ ʁoˈdɾiɡiz dʒ(i)ɐ̃ˈdɾadʒ(i)]; born 8 May 1999) is a Brazilian artistic gymnast. Having won a total of six Olympic and nine World medals, she is the most decorated Brazilian and Latin American gymnast of all time, as well as the most decorated Brazilian Olympian in any discipline.\n[…]\nIn July, Andrade and numerous other Brazilian Olympic hopefuls traveled to Portugal as they were unable to resume training due to the pandemic in Brazil remaining unstable and gyms remaining closed. In December 2020, she tested positive for COVID-19 but was asymptomatic.\n[…]\nAndrade's collective six medals from the 2020 and 2024 Olympics make her the most decorated Brazilian Olympian in any discipline, a record previously held by sailors Robert Scheidt and Torben Grael.\n[…]\nAndrade achieved celebrity status in Brazil after her success at the 2020 Summer Olympic Games. Three months after the Games in October 2021, she appeared on the cover of Vogue Brasil. She was also awarded the Brazil Olympic Prize which recognized her as the best Brazilian female athlete of the year from 2021 to 2024.\n[…]\nAndrade underwent three ACL reconstruction surgeries, all on her right knee. Her main idol in gymnastics is the Brazilian world champion Daiane dos Santos.\n[…]\nIn December 2024, Rebeca Andrade was included on the BBC's 100 Women list.\n[…]\nIn late 2025, Rebeca Andrade was honored with a mural at CEU Butantã, in the western part of São Paulo. The artwork, titled “Rebeca Andrade: Body that Flies, Root that Remains,” is part of the MAR 2025 program of the São Paulo City Hall, which aims to promote urban art in public spaces.\n[…]\nRebeca Andrade at World Gymnastics\n[…]\nRebeca Andrade at Olympics.com\n[…]\nRebeca Andrade at the Brazilian Olympic Committee (in Portuguese)\n[…]\nRebeca Andrade at Olympedia\n[…]\nRebeca Andrade at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Guarulhos, 8 de maio de 1999) é uma ginasta artística brasileira, bicampeã olímpica e a maior medalhista da história do Brasil nos Jogos Olímpicos, com 6 medalhas (2 ouros, 3 pratas e 1 bronze). Também foi bicampeã mundial no salto (2021 e 2023) e campeã mundial individual geral de 2022.\n[…]\nNos Jogos Olímpicos de 2020, Rebeca conquistou a primeira medalha feminina da ginástica brasileira e também latino-americana com a prata no individual geral, e com o ouro no salto, sendo a primeira atleta brasileira a ganhar duas medalhas numa mesma edição das Olimpíadas. Nos Jogos Olímpicos de 2024, Rebeca se tornou a atleta olímpica nacional com mais medalhas nos Jogos, após conquistar o bronze por equipes, a prata no individual geral e no salto, e o ouro no solo.\n[…]\nNa final por equipes, contudo, Andrade teve uma queda na prova de solo, e a equipe brasileira terminou em oitavo lugar. No individual geral, terminou em décimo primeiro lugar, com uma pontuação total de 56,965.\n[…]\nRebeca mais uma vez começou sua temporada no Trofeo di Jesolo, onde a equipe brasileira conquistou a medalha de prata, ficando atrás apenas dos Estados Unidos. Andrade ganhou a medalha de prata no individual geral, atrás da ginasta americana Riley McCusker. Nas finais por aparelhos, ela terminou em quinto lugar nas barras assimétricas, sexto na trave de equilíbrio e quarto no exercício de solo.\n[…]\nTambém conquistou uma medalha de prata no Salto. A quarta medalha olímpica fez Andrade superar Mayra Aguiar e Hélia Souza como a atleta brasileira feminina com mais pódios olímpicos. Após um quarto lugar na trave, Andrade conquistou a medalha de ouro na categoria Solo, e o sexto pódio a tornou a maior medalhista brasileira da história.\n[…]\nRebeca Andrade no Instagram\n[…]\nRebeca Andrade em Olympics.com"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Jogos Olímpicos de Verão de 1900",
      "descricao": "Edição dos Jogos Olímpicos realizada em Paris em 1900, espalhada por vários meses."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os Jogos de Paris 1900 se espalharam por cerca de cinco meses porque foram disputados como parte de que grande evento?",
    "resposta": "Exposição Universal de 1900",
    "fonte": [
      "https://en.wikipedia.org/wiki/1900_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1900_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1900 Summer Olympics (French: Jeux olympiques d'été de 1900), today officially known as the Games of the II Olympiad (Jeux de la IIe olympiade) and also known as Paris 1900, were an international multi-sport event that took place in Paris, France, from 14 May to 28 October 1900. No opening or closing ceremonies were held. It was the first and only Summer Olympics to take place in a common year\n[…]\nThe 1900 Games were held as part of the 1900 Exposition Universelle. The Baron de Coubertin believed this would help public awareness of the Olympics and submitted elaborate plans to rebuild the ancient site of Olympia, complete with statues, temples, stadia, and gymnasia. The director of the Exposition Universelle, Alfred Picard, thought holding an ancient sport event at the Exposition Universelle was an \"absurd anachronism\".\n[…]\nThe IOC ceded control of the Games to a new committee to oversee every sporting activity connected to the 1900 Exposition Universelle. Alfred Picard appointed Daniel Mérillon, the head of the French Shooting Association, as president of this organization in February 1899. Mérillon published an entirely different schedule of events, which resulted in many of those who had made plans to compete with the original program withdrawing and refusing to deal with the new committee.\n[…]\nBetween May and October 1900, the new organizing committee held many sporting activities alongside the Paris Exposition. The term \"Olympic\" was rarely used in these events; indeed, the term \"Olympic Games\" was replaced by \"Concours internationaux d'exercices physiques et de sport\" (\"International contests of physical exercises and of sport\" in English) in the official report of the sporting events of the 1900 Exposition Universelle.\n[…]\nThese are the top ten nations that won medals at the 1900 Games.\n[…]\n1900 Summer Olympics – Paris\n[…]\n\"Paris 1900\". Olympics.com. International Olympic Committee."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1900",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos de 1900 (em francês: Jeux olympiques de 1900), oficialmente conhecidos como Jogos da II Olimpíada, foram os segundos Jogos Olímpicos da era moderna. Realizados em Paris, França, terra natal de seu criador, o Barão Pierre de Coubertin.\n[…]\nPor questões políticas, os Jogos foram integrados à Exposição Universal de Paris 1900, uma grande feira mundial de comércio realizada pela França na época, e por terem sido diluídos ao longo de mais de cinco meses, entre 14 de maio e 28 de outubro, não tiveram qualquer relevância, sendo considerados um fracasso.\n[…]\nO Comitê Olímpico Internacional teve pouca influência na condução destes Jogos, cabendo à organização da Exposição Universal a organização dos eventos. Como a organização considerava o desporto uma atividade secundária, as diferentes modalidades foram dispersas pelos diversos locais da exposição e muitas vezes com classificações no mínimo curiosas.\n[…]\nAté julho de 2021, o COI não determinava de maneira concreta quais dos eventos esportivos realizados em 1900 eram \"olímpicos\" e quais não eram. De fato, Pierre de Coubertin delegou toda essa determinação aos organizadores. A página do COI para os Jogos Olímpicos de Verão de 1900 confirma um total de 96 eventos de medalhas. O levantamento de peso e a luta olímpica não foram disputados como nos Jogos Olímpicos de 1896, enquanto 13 novos esportes foram adicionados.\n[…]\nAlém dos eventos olímpicos considerados oficiais, as seguintes modalidades foram realizadas durante a Exposição Universal de 1900:\n[…]\nKlingelhoeffer não é reconhecido pelo COB porque em 1900 ainda não existiam os Comitês Olímpicos Nacionais e ele é retratado na maioria das publicações como sendo atleta francês representando o Racing Club de France.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Johnny Weissmuller",
      "descricao": "Nadador americano, cinco vezes campeão olímpico nos Jogos de 1924 e 1928, que depois virou ator de cinema."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Cinco vezes campeão olímpico de natação nos anos vinte, o americano Johnny Weissmuller ficou famoso no cinema interpretando que personagem?",
    "resposta": "Tarzan",
    "fonte": [
      "https://en.wikipedia.org/wiki/Johnny_Weissmuller"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Johnny_Weissmuller",
        "situacao": "ok",
        "texto": "Johnny Weissmuller ( WYSSE-mul-ər; born Johann Peter Weißmüller, German: [ˈjoːhan ˈpeːtɐ ˈvaɪsmʏlɐ]; June 2, 1904 – January 20, 1984) was an American Olympic swimmer, water polo player and actor. He set world records alongside winning five gold medals in the Olympics. He won the 100m freestyle and the 4 × 200 m relay team event in the 1924 Summer Olympics in Paris and the 1928 Summer Olympics in A\n[…]\nDuring the 1930s, before he acted as Tarzan, Weissmuller was a swimming instructor at the Miami Biltmore Hotel. He broke a world record at the Biltmore pool.\n[…]\nWeissmuller's first film was the non-speaking role of Adonis in the movie Glorifying the American Girl. He appeared wearing only a fig leaf while hoisting actress Mary Eaton on his shoulders. He was noticed by the writer Cyril Hume, which led to his big break playing Tarzan in Tarzan the Ape Man in 1932.\n[…]\nOn January 20, 1984, Weissmuller died of pulmonary edema at the age of 79. He was buried just outside Acapulco, Valle de La Luz, at the Valley of the Light Cemetery. As his coffin was lowered into the ground, a recording of the Tarzan yell he invented was played three times, at his request. He was honored with a 21-gun salute, befitting a head of state, which was arranged by Senator Ted Kennedy and President Ronald Reagan.\n[…]\nEdgar Rice Burroughs himself paid tribute to Weissmuller's powerful screen persona in the last Tarzan novel that he completed\n[…]\nSuddenly recognition lighted the eyes of Jerry Lucas. \"John Clayton,\" he said, \"Lord Greystoke—Tarzan of the Apes!\" Shrimp's jaw dropped. \"Is dat Johnny Weismuller? [sic]\" he demanded. Tarzan shook his head as though to clear his brain of an obsession. His thin veneer of civilization had been consumed by the fires of battle. ...\n[…]\nJohnny Weissmuller at IMDb\n[…]\n\"Serbia: Monument to Tarzan\", The New York Times, February 17, 2007. The article states that Johnny Weissmuller was born in Serbia."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Johnny_Weissmuller",
        "situacao": "ok",
        "texto": "Johnny Weissmuller, nascido János Weißmüller (Timișoara, 2 de junho de 1904 — Acapulco, México, 20 de janeiro de 1984) foi um atleta e ator estadunidense, famoso por interpretar Tarzan, o personagem de ficção criado pelo escritor estadunidense Edgar Rice Burroughs.\n[…]\nAntes de entrar para o cinema, Weissmuller teve uma carreira excepcional como desportista, tendo conquistado cinco medalhas de ouro nos Jogos Olímpicos de 1924 e 1928. Ele estabeleceu 67 recordes mundiais de natação e ganhou 52 campeonatos nacionais, sendo considerado um dos melhores nadadores de todos os tempos.\n[…]\nEm 1934 imortalizou no cinema a famosa personagem Tarzan. O cinema transformou Tarzan, já conhecido através dos romances de Edgar Rice Burroughs, em mito universal e Weissmuller fez doze filmes como o homem macaco, celebrizando o famoso e estilizado grito da personagem.\n[…]\nDepois de Tarzan, ele interpretou com sucesso a personagem Jim das Selvas na série do mesmo nome, feita para a Columbia entre 1948 e 1955. Foram dezesseis filmes ao todo, com duração média de setenta minutos cada. Em 1955, a série transferiu-se para a TV, tendo sido feitos vinte e seis episódios de meia hora cada. Já envelhecido e obeso, Weissmuller tentava dar vida a uma personagem atlética e aventureira, calcada na legendária figura de Tarzan.\n[…]\nNo final dos anos 1950, Weissmuller mudou-se para Chicago, onde fundou uma empresa de piscinas. Seguiram-se outros empreendimentos, a maioria envolvendo Tarzan ou a natação de uma forma ou de outra, mas sem grandes resultados. Aposentou-se em 1965 e no ano seguinte juntou-se aos ex-Tarzans Jock Mahoney e James Pierce para a campanha publicitária de lançamento da série de TV Tarzan, estrelada por Ron Ely. Em 1967 sua imagem foi imortalizada na capa do LP Sgt.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Zara Tindall",
      "descricao": "Amazona britânica, neta da rainha Elizabeth II, medalha de prata no concurso completo de equipes em Londres 2012."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A amazona Zara Phillips ganhou prata no hipismo em Londres 2012. A mãe dela, integrante da família real, competiu em Montreal 1976. Quem é?",
    "resposta": "Princesa Anne",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zara_Tindall",
      "https://en.wikipedia.org/wiki/Anne,_Princess_Royal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zara_Tindall",
        "situacao": "ok",
        "texto": "Zara Anne Elizabeth Tindall (née Phillips; born 15 May 1981) is a British equestrian, Olympian, and member of the British royal family. She is the daughter of Anne, Princess Royal, and Captain Mark Phillips, and the eldest niece of King Charles III. At birth she was sixth in the line of succession to the British throne during the reign of her maternal grandmother, Queen Elizabeth II, and as of 202\n[…]\nZara Anne Elizabeth Phillips was born at 8:15 pm on 15 May 1981 at St Mary's Hospital, London. She was baptised on 27 July in the private chapel at Windsor Castle. Her first name was suggested by her uncle, Charles, the then Prince of Wales. Her godparents are her maternal uncle, Andrew Mountbatten-Windsor; the Countess of Lichfield; Helen, Lady Stewart, the wife of Sir Jackie Stewart; Andrew Parker Bowles; and Hugh Thomas.\n[…]\nPhillips competed at the 2012 London Olympic Games on High Kingdom, winning silver in the team event. She finished second at the 2013 Luhmühlen Horse Trials on High Kingdom, and at the 2014 World Equestrian Games she was part of the British team that won team silver. She stopped using her maiden name in March 2016 and competed as Zara Tindall for the first time during her unsuccessful attempt to qualify for the 2016 Rio Olympic Games.\n[…]\nIn June 2015, Tindall launched an equestrian-themed jewellery collection, named \"Zara Phillips Collection\", in collaboration with Australian designer John Calleija.\n[…]\nTheir third child, a son, Lucas Philip, was born on 21 March 2021 at their home and was 22nd, later 26th, in the line of succession. Tindall is a godmother to Prince George of Wales, the son of her cousin, William, Prince of Wales.\n[…]\nZara Tindall at FEI (alternative link)\n[…]\nZara Tindall at Olympics.com\n[…]\nZara Tindall at Team GB\n[…]\nZara Tindall at Olympedia\n[…]\nZara Tindall at InterSportStats\n[…]\nPortraits of Zara Phillips at the National Portrait Gallery, London\n[…]\nZara Tindall at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Anne,_Princess_Royal",
        "situacao": "ok",
        "texto": "Anne, Princess Royal (Anne Elizabeth Alice Louise; born 15 August 1950), is a member of the British royal family. She is the second child and only daughter of Queen Elizabeth II and Prince Philip, Duke of Edinburgh, and the sister of King Charles III. Born third in the line of succession to the British throne, she is 19th in line as of 2026. She has held the title of Princess Royal since 1987.\n[…]\nFor more than five years, Anne competed with the British eventing team, winning silver medals in both the individual and team disciplines at the 1975 European Eventing Championship. The following year, she took part in the 1976 Olympic Games in Montreal as a member of the British team, riding the Queen's horse Goodwill in Eventing.\n[…]\nShe is a Royal Fellow of both the Royal Society and the Academy of Medical Sciences, becoming the latter's first Royal Fellow. As of 2022, the Royal Society has four Royal Fellows: Anne; William, Prince of Wales; Edward, Duke of Kent; and King Charles.\n[…]\nBritish Vogue editor Edward Enninful has said that \"Princess Anne is a true style icon and was all about sustainable fashion before the rest of us really knew what that meant\". Her style has been noted for its timelessness; she relies largely on British fashion brands, with tweed and tailored suits as her hallmarks. She is known for recycling outfits, including a floral-print dress worn both to the wedding of the Prince of Wales in 1981 and the wedding of Lady Rose Windsor in 2008.\n[…]\nAnne is the seventh Princess Royal, an appellation granted only to the eldest daughter of the Sovereign. The previous holder was Princess Mary, Countess of Harewood, the daughter of King George V and Anne's great-aunt.\n[…]\nThe Princess Royal at the website of the Government of Canada\n[…]\nPortraits of Princess Anne at the National Portrait Gallery, London\n[…]\nAnne, Princess Royal at Olympics.com\n[…]\nPrincess Anne at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zara_Tindall",
        "situacao": "ok",
        "texto": "Zara Tindall MBE, nascida Zara Ana Isabel Phillips (em inglês:  Zara Anne Elizabeth Phillips) (Londres, 15 de maio de 1981), é uma equestre e atleta olímpica britânica, e filha de Ana, Princesa Real, e do capitão Mark Phillips, neta da rainha Isabel II, sobrinha do rei Charles III, quando nasceu era a sexta na linha de sucessão ao trono britânico, hoje é a vigésima terceira. Ela tem uma longa carr\n[…]\nZara nasceu no Hospital de St. Mary, localizado em Paddington, na cidade de Londres, como a segunda criança, única filha mulher, da princesa Anne, Princesa Real do Reino Unido, e do seu primeiro marido, o capitão Mark Phillips. Sendo assim, Zara foi a primeira neta mulher da rainha Isabel II do Reino Unido.\n[…]\nDepois deste relacionamento, segundo a revista Hello, ela \"embarcou em um relacionamento estável\" com Mike Tindall, que ela havia conhecido na Copa do Mundo em Sydney em 2003. Segundo a revista também, foi ele o grande incentivador de sua carreira no hipismo.\n[…]\nZara a Mike se casaram em 30 de julho de 2011 em Canongate Kirk, na Royal Mile, em Edimburgo, na Escócia, e ela passou a assinar o nome como Zara Tindall.\n[…]\nEm 17 de janeiro de 2014 o casal teve a primeira filha, Mia Grace Tindall. Em novembro de 2016 a segunda gravidez de Zara  foi anunciada, mas em dezembro seguinte o casal comunicou que a gestação havia terminado num aborto espontâneo. Zara engravidou novamente e em junho de 2018 teve outra menina, chamada Lena Elizabeth.\n[…]\nEm 2006 Zara se tornou Campeã Mundial; em 2007 recebeu um MBE (Medalha do Império Britânico) por serviços ao hipismo; em 2012, nos Jogos Olímpicos de Londres, conquistou a medalha de prata na prova do concurso completo de equitação por equipas, tendo recebido a medalha das mãos da própria mãe, tornando-se na primeira pessoa da família real britânica a conquistar uma medalha olímpica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Waldi",
      "descricao": "Mascote dos Jogos Olímpicos de Munique 1972, o primeiro mascote olímpico oficial."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Waldi, mascote dos Jogos de Munique 1972, foi o primeiro mascote olímpico oficial. Que animal ele era?",
    "resposta": "Um cão dachshund",
    "distratores": [
      "Um urso",
      "Um castor",
      "Uma águia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_Olympic_mascots",
      "https://en.wikipedia.org/wiki/1972_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Olympic_mascots",
        "situacao": "ok",
        "texto": "The Olympic mascots are fictional characters who represent the cultural heritage of the location where the Olympic Games are taking place. They are often an animal native to the area or human figures.\n[…]\nOne of the first Olympic mascots was created for the 1968 Winter Olympics in Grenoble; a stylized cartoon character on skis named Schuss. The first official Olympic mascot appeared in the 1972 Summer Olympics in Munich, and was a rainbow-colored Dachshund dog named Waldi.\n[…]\nSince the 2010 Winter Olympics in Vancouver, the Olympic and Paralympic mascots have always been presented together, which was first done in the 1992 Summer Olympics in Barcelona. The Youth Olympic Games, which are run by the International Olympic Committee, have had mascots as well.\n[…]\nList of mascots\n[…]\nParalympic mascots\n[…]\nOlympicHistory.info: Mascots (in Russian)\n[…]\nCanadian Olympic Mascots 1976–2010"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1972_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1972 Summer Olympics (German: Olympische Sommerspiele 1972), officially known as the Games of the XX Olympiad (German: Spiele der XX. Olympiade) and officially branded as Munich 1972 (German: München 1972; Bavarian: Minga 1972), were an international multi-sport event held in Munich, West Germany, from 26 August to 11 September 1972. It was the second Summer Olympics to be held in Germany, aft\n[…]\nThe Olympic mascot, the dachshund \"Waldi\", was the first officially named Olympic mascot. The Olympic Fanfare was composed by Herbert Rehbein. The Soviet Union won the most gold and overall medals.\n[…]\n(Rhodesia did, however, compete in the 1972 Summer Paralympics, held a little earlier in Heidelberg.) The People's Republic of China last competed at the 1952 Summer Games but had since withdrawn from the IOC due to a dispute with the Republic of China over the right to represent China.\n[…]\nThese are the top ten nations that won medals at the 1972 Games.\n[…]\nThe report, titled \"Doping in Germany from 1950 to today\", details how the West German government helped fund a wide-scale doping program. Doping of East German athletes also, by the GDR government, was systematic and prevalent at the Munich Games of 1972.\n[…]\n1972 Summer Paralympics\n[…]\n1972 Winter Olympics\n[…]\n1972 Summer Olympics – Munich\n[…]\n1972 Summer Olympics – Munich, Bavaria, West Germany — Munich massacre\n[…]\n1972 Summer Olympics medal table\n[…]\n\"Munich 1972\". Olympics.com. International Olympic Committee.\n[…]\nThe main theme of the 1972 Summer Olympics by Gunther Noris and the Big Band of Bundeswehr \"Munich Fanfare March-Swinging Olympia Video on YouTube\n[…]\nSchiller, Kay, and Christopher Young. The 1972 Munich Olympics and the Making of Modern Germany (University of California Press; 2010) 348 pages\n[…]\nPreuss, Holger. The Economics of Staging the Olympics: A Comparison of the Games, 1972–2008 (2006)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mascotes_ol%C3%ADmpicas",
        "situacao": "ok",
        "texto": "As mascotes olímpicas são personagens (geralmente animais nativos) que representam a cultura do país anfitrião dos Jogos Olímpicos. Desde os Jogos Olímpicos de Inverno de 1968, em Grenoble, toda edição dos Jogos possui pelo menos uma mascote.\n[…]\nA mascote mais conhecida dos Jogos Olímpicos foi o urso Misha, dos Jogos Olímpicos de Verão de 1980, em Moscou. Misha foi usado extensivamente durante as cerimônias de abertura e encerramento, virou desenho animado e apareceu em diversos produtos. Atualmente, uma boa parte do merchandising dos Jogos é voltado para o uso das mascotes, focando principalmente o público jovem.\n[…]\nAs primeiras mascotes das Olimpíadas da Juventude foram Lyo e Merly.\n[…]\n«Página oficial do Comitê Olímpico Internacional» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Cerimônia de abertura dos Jogos Olímpicos de 1992",
      "descricao": "Cerimônia que abriu os Jogos Olímpicos de Barcelona, em julho de 1992, no Estádio de Montjuïc."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na abertura de Barcelona 1992, numa das cenas mais lembradas dos Jogos, o atleta paralímpico Antonio Rebollo disparou que objeto em chamas em direção à pira?",
    "resposta": "Uma flecha",
    "fonte": [
      "https://en.wikipedia.org/wiki/1992_Summer_Olympics",
      "https://en.wikipedia.org/wiki/Antonio_Rebollo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1992_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1992 Summer Olympics (Spanish: Juegos Olímpicos de Verano de 1992, Catalan: Jocs Olímpics d'estiu de 1992), officially the Games of the XXV Olympiad (Spanish: Juegos de la XXV Olimpiada, Catalan: Jocs de la XXV Olimpíada) and officially branded as Barcelona '92, were an international multi-sport event held from 25 July to 9 August 1992 in Barcelona, Catalonia, Spain.\n[…]\nThe Oxford Olympics Study estimates the direct costs of the Barcelona 1992 Summer Olympics to be US$9.7 billion (expressed in 2015 U.S. dollars) with a cost overrun of 266%.\n[…]\nThe costs for Barcelona 1992 may be compared with those of London 2012, which cost US$15 billion with a cost overrun of 76%, and those of Rio 2016 which cost US$4.6 billion with a cost overrun of 51%. The average cost for the Summer Olympics since 1960 is US$5.2 billion, with an average cost overrun of 176%.\n[…]\nThere were two main musical themes for the 1992 Games. The first one was \"Barcelona\", a classical crossover song composed five years earlier by Freddie Mercury and Mike Moran; Mercury was an admirer of lyric soprano Montserrat Caballé, both recorded the official theme as a duet. Due to Mercury's death eight months earlier, the duo was unable to perform the song together during the opening ceremony.\n[…]\nA renewal in Barcelona's image and corporate identity could be seen in the publication of posters, commemorative coins, stamps minted by the FNMT in Madrid, and the Barcelona 1992 Olympic Official Commemorative Medals, designed and struck in Barcelona.\n[…]\nBarcelona Gold – compilation album released for the 1992 Games\n[…]\n\"Barcelona 1992\". Olympics.com. International Olympic Committee.\n[…]\nBarcelona Olympic Stadium\n[…]\nPostage stamps of the Republic of Moldova, celebrating the Barcelona Summer Olympics in 1992\n[…]\nPostage stamps of the Republic of Moldova, celebrating medal winners at the Barcelona Summer Olympics in 1992"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Antonio_Rebollo",
        "situacao": "ok",
        "texto": "Antonio Rebollo Liñán (born 19 June 1955) is a Spanish Paralympic archer. During the opening ceremony of the 1992 Summer Olympics in Barcelona, he lit the Olympic Cauldron by shooting a flaming arrow over it, igniting the gases.\n[…]\nWhen Rebollo was eight months old, he contracted polio with both legs affected, the right one severely. He competed in archery, representing Spain at the 1984, 1988, and 1992 Summer Paralympics. He won a silver in 1984, bronze in 1988, and a second silver in 1992.\n[…]\nThe opening ceremony of the 1992 Barcelona Olympics featured the Olympic Flame being ignited from afar by a flaming arrow. Rebollo was one of 200 archers considered for the position of firing the arrow. There were sunrise practices, along with wind machines to simulate various weather conditions, and flaming arrows that would often singe fingers. He was among four finalists, and was chosen two hours before the event.\n[…]\nAntonio Rebollo at the International Paralympic Committee"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1992",
        "situacao": "ok",
        "texto": "Jogos Olímpicos de Verão de 1992 (em espanhol: Juegos Olímpicos de Verano de 1992; em catalão: Jocs Olímpics d'estiu de 1992), oficialmente conhecido como os Jogos da XXV Olimpíada, foram realizados em Barcelona, na Catalunha, Espanha, cidade do então presidente do Comitê Olímpico Internacional, Juan Antonio Samaranch, entre 25 de julho e 9 de agosto daquele ano.\n[…]\nPoucos meses antes dos Jogos, em 1936, nasceu a ideia de uma contra olimpíada de Barcelona, a \"Olimpiada Popular\" em contrapartida ao abuso cometido pelos nazistas. Cerca de 6.000 atletas viajaram para Barcelona, mas por causa do golpe liderado por Francisco Franco realizado no dia previsto para a cerimônia de abertura e o começo da Guerra Civil Espanhola no dia seguinte, os jogos foram cancelados.\n[…]\nCobi foi o mascote oficial das Olimpíadas de 1992 em Barcelona. Ele é um Pastor Catalão em estilo cubista inspirado na interpretação de Picasso da obra Las Meninas, de Velázquez. Cobi foi desenhado por Javier Mariscal. O mascote foi apresentado ao público em 1987. Seu nome foi derivado do Comité Organizador dos Jogos Olímpicos de Barcelona (Coob).\n[…]\nEstadi Olímpic de Montjuïc - Cerimônias de abertura e encerramento, atletismo\n[…]\nNa área metropolitana de Barcelona:\n[…]\nA cerimônia de abertura dos Jogos é considerada uma das mais marcantes da história. O contexto cívico da cerimônia também foi marcante.\n[…]\nJuntamente, com a declaração de abertura feita pelo rei João Carlos I, a pira olímpica, num grande  efeito visual, foi acesa por uma flecha em fogo disparada pelo arqueiro paraolímpico Antonio Rebollo.\n[…]\nNa cerimónia de encerramento em 9 de agosto no Estádio Olímpico, o então presidente do Comitê Olímpico Internacional Juan Antonio Samaranch, declarou que o Barcelona tinha sido os melhores Jogos Olímpicos da história.\n[…]\nBeisebol, judô feminino e badminton passaram a fazer parte do programa olímpico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Bob Beamon",
      "descricao": "Atleta americano, campeão olímpico do salto em distância nos Jogos da Cidade do México 1968."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na Cidade do México 1968, o salto em distância de Bob Beamon passou do alcance do aparelho óptico de medição. Que marca ele atingiu?",
    "resposta": "Oito metros e noventa",
    "distratores": [
      "Oito metros e trinta",
      "Oito metros e sessenta",
      "Nove metros e vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bob_Beamon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bob_Beamon",
        "situacao": "ok",
        "texto": "Robert Beamon (born August 29, 1946) is an American former track and field athlete, best known for his world record in the long jump at the Mexico City Olympics in 1968. By jumping 8.90 m (29 ft 2+1⁄4 in), he broke the existing record by a margin of 55 cm (21+3⁄4 in) and his world record stood for almost 23 years until it was broken in 1991 by Mike Powell. The jump is still the Olympic record and \n[…]\nBeamon along with eleven other Black athletes were dropped from the University of Texas at El Paso (UTEP) track and field team the week following the assassination of Martin Luther King Jr. for participating in a boycott of competition with Brigham Young University because of The Church of Jesus Christ of Latter-day Saints' then-current racist policies. Despite losing his athletic scholarship, Beamon returned to UTEP to continue his studies after the Mexico City Olympics.\n[…]\nBeamon entered the 1968 Summer Olympics in Mexico City as the favorite to win the gold medal, having won 22 of the 23 meets he had competed in that year, including a career-best of 8.33 m (27 ft 3+3⁄4 in) and a world's best of 8.39 m (27 ft 6+1⁄4 in) that was ineligible for the record books due to excessive wind assistance. That year, he won the AAU and NCAA indoor long jump and triple jump titles and the AAU outdoor long jump title.\n[…]\nOn October 18, Beamon set a world record for the long jump with a first jump of 8.90 m (29 ft 2+1⁄4 in), bettering the existing record by 55 cm (21+3⁄4 in). When the announcer called out the distance for the jump, Beamon—unfamiliar with metric measurements—still did not realize what he had done.\n[…]\nShortly after the Mexico City Olympics, Beamon was drafted by the Phoenix Suns in the 15th round of the 1969 NBA draft but never played in an NBA game. In 1972, he graduated from Adelphi University with a degree in sociology.\n[…]\nBob Beamon at Olympics.com\n[…]\nBob Beamon at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bob_Beamon",
        "situacao": "ok",
        "texto": "Robert \"Bob\" Beamon (Nova Iorque, 29 de agosto de 1946) é um ex-atleta norte-americano.\n[…]\nEle venceu o salto em distância nos Jogos Olímpicos de Verão de 1968, batendo o recorde mundial com a expressiva marca de 8,90 m. O recorde mundial anterior era de 8,35 m. Como a Cidade do México fica na altitude, onde existe menos resistência do ar já que o mesmo é rarefeito, este fato colaborou para a obtenção da marca.\n[…]\nBob Beamon tinha apenas 22 anos quando conseguiu o recorde, às 16 horas do dia 18 de outubro de 1968.\n[…]\nSeu recorde mundial durou por longos 23 anos, só sendo batido por Mike Powell em 1991, que obteve a marca de 8,95 m. No entanto, sua marca de 8,90 m ainda continua sendo o recorde olímpico (2024).\n[…]\n«Perfil de Bob Beamon» (em inglês). no site da World Athletics\n[…]\n«Perfil de Bob Beamon» (em inglês). arquivado do sítio Sports-Reference.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Triatlo",
      "descricao": "Esporte olímpico que combina natação, ciclismo e corrida, disputados em sequência."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na distância olímpica do triatlo, depois de um quilômetro e meio de natação, quantos quilômetros os atletas percorrem de bicicleta?",
    "resposta": "Quarenta",
    "distratores": [
      "Vinte",
      "Sessenta",
      "Noventa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Triathlon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Triathlon",
        "situacao": "ok",
        "texto": "A triathlon is an endurance multisport race consisting of swimming, cycling, and running over various distances. Triathletes compete for fastest overall completion time, racing each segment sequentially with the time transitioning between the disciplines included. The word is of Greek origin, from τρεῖς (treîs), 'three', and ἆθλος (âthlos), 'competition'.\n[…]\nTriathlons longer than full distance are classed as ultra-triathlons.\n[…]\nWorld Triathlon Long Distance Championships\n[…]\nWildflower is a half-iron distance race held on the first weekend of May at Lake San Antonio on the Central Coast of California since 1983. Known for a particularly hilly course, it has expanded now to include three races of different lengths and is one of the largest triathlon events in the world, with over 8,000 athletes attending each year.\n[…]\nLife Time Fitness Triathlon Series. Life Time Tri Series is a series of 5 Olympic distance races: The Lifetime Fitness in Minneapolis, the NYC Triathlon in New York City, the Chicago Triathlon, the LA Triathlon in Los Angeles, and the U.S. Open in Dallas. There is a combined $1.5 Million prize purse at stake for the professionals who come from around the world to take part in the series.\n[…]\nNorseman Xtreme Triathlon, Hardangerfjord, Norway. Norseman is an Ironman-distance triathlon that starts with a swim in the Hardangerfjord and finishes on top of a Gaustatoppen mountain at 1,850 m (6,070 ft) above sea level. Famous for its lower temperatures and 5,000 m (16,000 ft) total ascent, this race accepts only 200 competitors each year.\n[…]\nTriathlon EDF Alpe d'Huez, established in 2006 by the 2002 Long Distance World Champion Cyrille Neveu, is one of the best known single triathlons in France.\n[…]\nUltraman triathlon, an Ultra-long-distance three-day triathlon covering 510 kilometres (320 mi) in separate stages.\n[…]\nWorld Triathlon\n[…]\nXterra Triathlon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Triatlo",
        "situacao": "ok",
        "texto": "Triatlo é uma palavra grega que designa um evento atlético composto por três modalidades. Atualmente, o nome triatlo é em geral aplicado a uma combinação de natação, ciclismo e corrida, nessa ordem e sem interrupção entre as modalidades. Exceto o Ultraman que é feito em três dias.\n[…]\nPode-se dizer que o triatlo moderno surgiu no San Diego Track Club na década de 1970. A primeira grande competição de triatlo, entretanto, foi o Ironman Triathlon, organizado em 1978 no Havaí. Naquela ocasião, a competição foi organizada com o intuito de esclarecer qual dos atletas (nadador, ciclista ou corredor) tinha o melhor condicionamento físico, que possuía a maior resistência.\n[…]\nAlgumas das alterações mais importantes para que o triatlo se tornasse um esporte olímpico dizem respeito aos uniformes e a exposição de logo de patrocinadores nos uniformes dos atletas. Além disso, nos Jogos Olímpicos os países podem, de acordo com critérios de desempenho, enviar no máximo três atletas tanto no masculino, quanto no feminino, que farão parte de uma mesma seleção de seus países.\n[…]\nPode-se classificar as provas de Triatlo de acordo com as distâncias percorridas e com os locais onde as provas são disputadas. As principais são as seguintes:\n[…]\nTriatlo Olímpico: 1,5 km de natação / 40 km de ciclismo / 10 km de corrida\n[…]\nQuintuplo Ultra Triatlo: 19 km de natação / 900 km de ciclismo / 211 km de corrida\n[…]\nDeca Ultra Triatlo: 38 km de natação / 1800 km de ciclismo / 422 km de corrida\n[…]\nOutras variantes populares são os chamados triatlos de aventura ou off Plicou, que consistem de natação, ciclismo de montanha e corrida cross copri e o Triatlo Rápido, que consiste em provas menos longas, totalizando menos de vinte minutos por bateria, em baterias subsequentes com intervalos pré-determinados.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Brasil nos Jogos Olímpicos de Verão de 2016",
      "descricao": "Participação brasileira, como país-sede, nos Jogos Olímpicos do Rio de Janeiro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Como país-sede da Rio 2016, com títulos no judô, no salto com vara, no boxe e no futebol, quantas medalhas de ouro o Brasil conquistou?",
    "resposta": "Sete",
    "distratores": [
      "Quatro",
      "Cinco",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_at_the_2016_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_at_the_2016_Summer_Olympics",
        "situacao": "ok",
        "texto": "Brazil was the host nation of the 2016 Summer Olympics in Rio de Janeiro from 5 to 21 August 2016. This was the nation's twenty-second appearance at the Summer Olympics, having competed in all editions in the modern era from 1920 onwards, except the 1928 Summer Olympics in Amsterdam. Setting a milestone in Olympic history, Brazil became the first South American country to host the Summer Olympics,\n[…]\nBrazilian judoka secured one place in each of the 14 weight divisions by virtue of hosting the Olympic tournament. The host nation's judo team for the Games was announced on 1 June 2016. Among these judokas featured reigning Olympic champion Sarah Menezes and London 2012 bronze medalists Felipe Kitadai, Rafael Silva, and Mayra Aguiar.\n[…]\nThe following is the  Brazil roster in the men's volleyball tournament of the 2016 Summer Olympics.\n[…]\nThe following is the Brazilian roster in the women's volleyball tournament of the 2016 Summer Olympics.\n[…]\nThe following is the Brazilian roster in the men's water polo tournament of the 2016 Summer Olympics.\n[…]\nThe following is the Brazilian roster in the women's water polo tournament of the 2016 Summer Olympics.\n[…]\nAs the hosts, Brazilian weightlifters have already received three men's and two women's quota places for the Rio Olympics. The team must allocate these places to individual athletes by 20 June 2016. The weightlifting team was named to the Olympic roster on 19 June 2016.\n[…]\nOne of them had claimed the Olympic spot in the women's freestyle 75 kg at the 2015 World Championships, while four more places were awarded to the Brazilian wrestlers, who progressed to the top two finals at the 2016 Pan American Qualification Tournament.\n[…]\nBrazil at the 2016 Winter Youth Olympics\n[…]\nBrazil at the 2016 Summer Paralympics\n[…]\nCOB: Rio 2016 Brazil's places\n[…]\nBrazil at the 2016 Summer Olympics at SR/Olympics (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brasil_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2016",
        "situacao": "ok",
        "texto": "O Brasil competiu como anfitrião nos Jogos Olímpicos de Verão de 2016 no Rio de Janeiro, de 5 a 21 de agosto de 2016. Esta foi a vigésima segunda participação do país nos Jogos Olímpicos, que não participou apenas dos Jogos Olímpicos de Verão de 1928 em Amsterdam. O Brasil foi o primeiro país a sediar os Jogos Olímpicos de Verão na América do Sul e o segundo na América Latina, após a edição da Cid\n[…]\nAo final do evento, o Brasil bateu tanto o seu recorde de ouros em uma edição das Olimpíadas (cinco ouros em Atenas 2004) quanto o seu recorde de medalhas obtidas em uma edição dos Jogos (17 medalhas em Londres 2012). Duas modalidades ganharam pela primeira vez o ouro para o Brasil: o boxe, com Robson Conceição, e o futebol, com a seleção olímpica masculina.\n[…]\nO Brasil terá dois representantes de cada gênero na competição de Estrada por ser o país sede. O Brasil confirmou sua equipe no dia 9 de junho. Para a convocação, a CBC levou em conta o ranking mundial e as características técnicas mais adequadas para o percurso da prova de Estrada nos Jogos Olímpicos.\n[…]\nAs equipes masculina e feminina de Rugby Sevens do Brasil estão classificadas para os Jogos Olímpicos de Verão de 2016 por serem país sede.\n[…]\nComo representantes do país anfitrião, os atletas brasileiros receberam quatro vagas automáticas, duas masculinas e duas femininas, a serem decididas pela Confederação Brasileira. Iris Sing, já estava garantida nos Jogos Olímpicos pelo ranking mundial. Os outros três competidores foram conhecidos através de seletiva, realizada em 18 de Março de 2016 na cidade de Vitória - ES.\n[…]\nComo os Jogos Pan-Americanos serviam como classificatória para as Olimpíadas, o Brasil abriu mão das cotas por ser país-sede das modalidades carabina deitado 50m masculino e pistola de ar 10m, que deverão ser ocupadas por Cassio Rippel e Felipe Wu, respectivamente, medalhas de ouro nos Jogos Pan-Americanos de 2015.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Jogos Olímpicos de Inverno de 2022",
      "descricao": "Edição dos Jogos Olímpicos de Inverno realizada em Pequim, na China."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Em 2022, que cidade se tornou a primeira a ter sediado tanto os Jogos Olímpicos de Verão quanto os de Inverno?",
    "resposta": "Pequim",
    "fonte": [
      "https://en.wikipedia.org/wiki/2022_Winter_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2022_Winter_Olympics",
        "situacao": "ok",
        "texto": "The 2022 Winter Olympics, officially called the XXIV Olympic Winter Games (Chinese: 第二十四届冬季奥林匹克运动会; pinyin: Dì Èrshísì Jiè Dōngjì Àolínpǐkè Yùndònghuì) and commonly known as Beijing 2022 (北京2022), were an international winter multi-sport event held from 4 to 20 February 2022, in Beijing, China, and surrounding areas with competition in selected events beginning 2 February 2022. It was the 24th edi\n[…]\nBeijing 2022 Winter Olympic Village – new\n[…]\nThe opening ceremony of the 2022 Winter Olympics was held on 4 February 2022, at Beijing National Stadium.\n[…]\nIn November 2021, President Biden proposed \"a diplomatic boycott of the 2022 Beijing Winter Olympics.\" The U.S. was aware of the prospective harsh punishment of being suspended by the National Olympic Committee and was careful regarding the scale and severity of the boycott.\n[…]\nIn December 2021, the Biden administration officially initiated a diplomatic boycott of the Beijing 2022 Winter Olympics, restricting U.S. government officials' presence at the games. The attendance of Team USA athletes was not affected by the diplomatic boycott.\n[…]\nFrom China's perspective, the U.S.was \"politicizing sports\" with the Biden administration's boycott of the 2022 Beijing Winter Olympics. The Chinese Ministry of Foreign Affairs spokesperson, Zhao Lijian, accused the U.S. of violating the spirit of political neutrality endorsed in the Olympic Charter, emphasising that an Olympic game should not be a place for political posturing and manipulation. China announced that the U.S. was not yet officially invited by the host committee; thus, the U.S.\n[…]\nAccording to Jules Boykoff in February 2022, Beijing's electricity came largely from coal and this coal power was what supported the construction of some Olympic venues. To offset emissions from construction and air travel, China had planted roughly 60M trees.\n[…]\n2022 Winter Paralympics\n[…]\nBeijing 2022 on the IOC Website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Inverno_de_2022",
        "situacao": "ok",
        "texto": "Os Jogos Olímpicos de Inverno de 2022 (em chinês: 第二十四届冬季奥林匹克运动会; pinyin: Dì Èrshísì Jiè Dōngjì Àolínpǐkè Yùndònghuì), conhecidos oficialmente como Jogos da XXIV Olimpíada de Inverno e mais comumente Pequim 2022, foi um evento multiesportivo realizado entre 4 e 20 de fevereiro na capital da China, Pequim, como sede principal, juntamente com a subsede de Yanqing, na província vizinha de Hebei.\n[…]\nFoi a terceira edição consecutiva dos Jogos Olímpicos realizada na Ásia, depois de Pyeongchang 2018 e Tóquio 2020. Pequim foi a sexta cidade na história a sediar os Jogos duas vezes, mas a primeira em sediar tanto os Jogos de Verão (2008) quanto os de Inverno. Além disso, foi a maior cidade a sediar os Jogos Olímpicos de Inverno, título que anteriormente pertencia a Vancouver pelos Jogos Olímpicos de Inverno de 2010.\n[…]\nO processo de candidatura para os Jogos Olímpicos de Inverno de 2022 foi aberto pelo Comitê Olímpico Internacional (COI) em outubro de 2012, com a data limite de 14 de novembro de 2013. Em um processo tumultuado, o quadro executivo da entidade recebeu todas as propostas em 14 de julho de 2014, e escolheu Oslo, na Noruega, Almaty, no Cazaquistão, e Pequim como as cidades candidatas. Oslo retirou sua candidatura em outubro, deixando Pequim e Almaty como candidatas restantes.\n[…]\nEm 31 de julho de 2015, o Comitê de Candidatura de Pequim 2022 revelou seus planos relacionados aos Jogos: a cidade iria reutilizar a área do Olympic Green construída para os Jogos Olímpicos de Verão de 2008, com o Estádio Nacional de Pequim novamente sediando as cerimônias de abertura e encerramento, o Estádio Nacional Indoor de Pequim sendo o local principal dos jogos dos torneios de hóquei no gelo, o Centro Aquático Nacional de Pequim sediando o curling e o Centro de Convenções Nacional da China novamente a função de centro de transmissão e mídia (IBC/MBC).\n[…]\nJogos Olímpicos de Verão de 2008",
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
