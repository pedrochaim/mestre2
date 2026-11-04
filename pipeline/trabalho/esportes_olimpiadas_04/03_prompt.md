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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Michael Phelps",
      "descricao": "Nadador americano, maior medalhista da história dos Jogos Olímpicos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Pequim 2008, a caminho dos oito ouros, Michael Phelps venceu os cem metros borboleta com que diferença para o segundo colocado?",
    "resposta": "Um centésimo de segundo",
    "distratores": [
      "Cinco centésimos",
      "Um décimo de segundo",
      "Meio segundo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Michael_Phelps",
      "https://pt.wikipedia.org/wiki/Michael_Phelps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Phelps",
        "situacao": "ok",
        "texto": "Michael Fred Phelps II (born June 30, 1985) is an American former competitive swimmer. He won more Olympic medals than any other athlete, a total of 28 medals across four Olympic Games. Phelps also holds the all-time records for Olympic gold medals (23), Olympic gold medals in individual events (13), and Olympic medals in individual events (16).\n[…]\nPhelps was born in Baltimore, Maryland, and raised in the Rodgers Forge neighborhood of nearby Towson. Phelps is the youngest of three children. His mother, Deborah Sue \"Debbie\" Phelps (née Davisson), is a middle school principal. His father, Michael Fred Phelps, was a retired Maryland State Trooper who played football in high school and college and tried out for the Washington Redskins in the 1970s. His parents divorced in 1994 when he was nine years old, and his father remarried in 2000.\n[…]\nAfter the 2008 Olympics, Phelps used his $1 million Speedo bonus to set up the Michael Phelps Foundation. His foundation focuses on growing the sport of swimming and promoting healthier lifestyles.\n[…]\nPhelps was a USA Olympic team member in 2000, 2004, 2008, 2012 and 2016, and holds the records for most Olympic gold medals (23), most such medals in individual events (13), and most such medals at a single games (8, in Beijing 2008). A street in his hometown of Baltimore was renamed The Michael Phelps Way in 2004. On April 9, 2009, Phelps was invited to appear before the Maryland House of Delegates and the Maryland Senate, to be honored for his Olympic accomplishments.\n[…]\nMichael Phelps at SwimRankings.net\n[…]\nMichael Phelps at Olympics.com\n[…]\nMichael Phelps at Olympedia\n[…]\nMichael Phelps at InterSportStats\n[…]\nMichael Phelps at USA Swimming (archived June 2, 2021)\n[…]\nMichael Phelps at Team USA (archive June 25, 2023)\n[…]\nOfficial website of the Michael Phelps Foundation at the Wayback Machine (archived March 10, 2010)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Michael_Phelps",
        "situacao": "ok",
        "texto": "Michael Fred Phelps II (Baltimore, 30 de junho de 1985) é um ex-nadador estadunidense, conquistou trinta e sete recordes mundiais e conquistou o maior número de medalhas de ouro (oito) olímpicas em uma única edição, feito este realizado nos Jogos de Pequim, na China, em agosto de 2008. Diante dos seus resultados, Michael superou as sete medalhas de ouro do compatriota Mark Spitz conquistadas nos J\n[…]\nEm 11 de agosto, Phelps foi o primeiro a nadar da equipe americana na prova de 4x100m livre, e chegou em segundo com o tempo de 47,51 segundos, 27 centésimos atrás da equipe australiana, colocando assim mais responsabilidade nos outros nadadores de sua equipe (Garrett Weber-Gale, Cullen Jones e Jason Lezak). O final da prova foi dramático, pois os EUA estavam atrás da equipe francesa.\n[…]\nOs últimos 50m foram decididos com o americano Jason Lezak, que chegou 0.87 segundos (87 centésimos) a frente do francês Alain Bernard, assim também a equipe americana bateu o recorde mundial.\n[…]\nEm 16 de agosto, Phelps conquistou sua sétima medalha de ouro nos Jogos Olímpicos de Pequim na prova dos 100m Borboleta, vencendo o americano naturalizado sérvio Milorad Čavić por 1 / 100 segundos (1 centésimo), estabelecendo um novo recorde olímpico de 50,58 segundos. A vitória de Phelps levou a delegação sérvia a um protesto. No entanto, a análise do vídeo feito pela FINA, confirmou a vitória de Phelps por 1 centésimo.\n[…]\nEm 30 de julho de 2009, Phelps quebrou o recorde mundial dos 200m borboleta, estabelecido por ele mesmo em Pequim 2008, com o tempo de 1m51s51, no Campeonato Mundial de Esportes Aquáticos disputado em Roma, Itália.\n[…]\n400 metros medley – entre agosto de 2002 e o presente (4:03.84 - Pequim 2008)\n[…]\n200 metros medley - 1:54.23 Pequim 2008 (Olimpíada)\n[…]\n200 metros borboleta - 1:51.51 Roma 2009 (Camp. Mundial)/ 1:52.03 (Olimpíada Pequim 2008)\n[…]\n100 metros borboleta - 50.58 Pequim 2008 (Olimpíada)"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Usain Bolt",
      "descricao": "Velocista jamaicano, recordista mundial dos 100 e 200 metros."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas vezes Usain Bolt conseguiu vencer os cem e os duzentos metros rasos numa mesma edição dos Jogos Olímpicos?",
    "resposta": "Três",
    "distratores": [
      "Duas",
      "Quatro",
      "Uma"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Usain_Bolt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Usain_Bolt",
        "situacao": "ok",
        "texto": "Usain St. Leo Bolt ( YOO-sayn; born 21 August 1986) is a Jamaican retired sprinter. Widely regarded as the greatest sprinter of all time, he is an eight-time Olympic gold medalist and the world record holder in the 100 metres, 200 metres, and 4 × 100 metres relay.\n[…]\nAfter retirement, Bolt is still a brand ambassador for Puma.\n[…]\nAllen, Matt; Bolt, Usain (2013). Faster Than Lightning: My Autobiography. London: HarperSport. ISBN 978-0-00-752364-1.\n[…]\nBolt, Usain; Custis, Shaun (2010). Usain Bolt: 9.58. London: HarperSport. ISBN 978-0-00-737139-6.\n[…]\nBolt, Usain; Custis, Shaun (2012). The Fastest Man Alive: The True Story of Usain Bolt. New York: Sports Publishing. ISBN 978-1-61321-067-3.\n[…]\nMedia related to Usain Bolt at Wikimedia Commons\n[…]\nUsain Bolt at Wikinews\n[…]\nQuotations related to Usain Bolt at Wikiquote\n[…]\nUsain Bolt at World Athletics\n[…]\nUsain Bolt timeline via The Daily Telegraph\n[…]\nUsain Bolt wins the 2009 IAAF World Championships in Athletics men's 100 metres final in 9.58 seconds via IAAF on YouTube\n[…]\nUsain Bolt wins the 2009 Great CityGames Manchester men's 150 metres final in 14.35 seconds via Athletics Weekly on YouTube\n[…]\nUsain Bolt wins the 2009 IAAF World Championships in Athletics men's 200 metres final in 19.19 seconds via IAAF on YouTube\n[…]\nUsain Bolt wins the 2012 Olympic Games men's 100 metres final in 9.63 seconds via the Olympic Channel on YouTube\n[…]\nUsain Bolt wins the 2012 Olympic Games men's 200 metres final in 19.32 seconds via the Olympic Channel on YouTube\n[…]\nUsain Bolt wins the 2016 Olympic Games men's 100 metres final in 9.81 seconds via the Olympic Channel on YouTube\n[…]\nUsain Bolt wins the 2016 Olympic Games men's 200 metres final in 19.79 seconds via the Olympic Channel on YouTube\n[…]\nAll of Usain Bolt's Olympic Games finals via the Olympic Channel on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Usain_Bolt",
        "situacao": "ok",
        "texto": "Usain St. Leo Bolt OJ, OD, OLY (Trelawny, 21 de agosto de 1986) é um ex-velocista jamaicano multicampeão olímpico e mundial nessa modalidade. É o único atleta na história a tornar-se tricampeão em duas modalidades de pista em Jogos Olímpicos de forma consecutiva (100 metros rasos e 200 metros rasos) e bicampeão também de forma consecutiva na modalidade revezamento 4 x 100 metros. É também o único \n[…]\nNeste último dia em Berlim, numa pequena cerimônia, também recebeu do prefeito da cidade, Klaus Wowereit, um pedaço do Muro de Berlim pintado com sua efígie, dizendo que ele tinha mostrado que \"as pessoas podem derrubar muros que antes eram considerados intransponíveis\"; a peça, de quase três metros de comprimento e duas toneladas, foi enviada para a Jamaica para ser instalada no centro de treinamento de Bolt em Kingston.\n[…]\nEm 2015 voltou para seu sexto Campeonato Mundial de Atletismo, em Pequim, na China, no mesmo Ninho do Pássaro onde tinha aparecido para o mundo sete anos antes; repetindo os feitos de Berlim 2009 e Moscou 2013, ganhou três medalhas de ouro nos 100 m e 200 m (novamente derrotando o norte-americano Justin Gatlin, que era o favorito pelos tempos conseguidos ao longo do ano) e 4x100 m — em Daegu 2011 deixou de ganhar apenas nos 100 m por ter queimado a largada na final — somando um total geral de 11 medalhas de ouro, o maior campeão mundial de atletismo da história.\n[…]\nChegou ao Rio de Janeiro como o maior vendedor de ingressos para o atletismo em seus dias de competição, disputou os 100 m rasos, os 200 m rasos e o revezamento 4x100 m com a equipe jamaicana e venceu em todas as três modalidades como nos dois Jogos anteriores, levando ouro nos 100 m — 9s81 — ouro nos 200 m — 19s78 — e ouro no 4x100 m — 37s27 — sem conseguir quebrar novamente nenhum de seus recordes mas fazendo história ao se tornar o primeiro tricampeão olímpico consecutivo nas três modalidades.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Paavo Nurmi",
      "descricao": "Fundista finlandês, nove vezes campeão olímpico nos Jogos de 1920, 1924 e 1928."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nos Jogos de Paris 1924, o fundista finlandês Paavo Nurmi ganhou quantas medalhas de ouro?",
    "resposta": "Cinco",
    "distratores": [
      "Duas",
      "Três",
      "Sete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Paavo_Nurmi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paavo_Nurmi",
        "situacao": "ok",
        "texto": "Paavo Johannes Nurmi (Finnish pronunciation: [ˈpɑːʋo ˈnurmi] ; 13 June 1897 – 2 October 1973) was a Finnish middle-distance and long-distance runner. He was called the \"Flying Finn\" because he dominated distance running in the 1920s. Nurmi set 22 official world records at distances between 1,500 metres and 20 kilometres, and won nine gold and three silver medals in his 12 events in the Summer Olym\n[…]\nBoken om Nurmi (The Book about Nurmi), released in Sweden in 1925, was the first biographical book on a Finnish sportsman. Finnish astronomer Yrjö Väisälä named the main belt asteroid 1740 Paavo Nurmi after Nurmi in 1939, while Finnair named its first DC-8 Paavo Nurmi in 1969. Nurmi's former rival Ville Ritola boarded the plane when he moved back to Finland in 1970.\n[…]\nPaavo Nurmi Marathon, held annually since 1969, is the oldest marathon in Wisconsin and the second-oldest in the American Midwest. In Finland, another marathon bearing the name has been held in Nurmi's hometown of Turku since 1992, along with the athletics competition Paavo Nurmi Games that was started in 1957. Finlandia University, an American college with Finnish roots, named their athletic center after Nurmi.\n[…]\nA ten-mark bill featuring a portrait of Nurmi was issued by the Bank of Finland in 1987. The other revised bills honored architect Alvar Aalto, composer Jean Sibelius, Enlightenment thinker Anders Chydenius and author Elias Lönnrot, respectively. The Nurmi bill was replaced by a new 20-mark note featuring Väinö Linna in 1993. In 1997, a historic stadium in Turku was renamed the Paavo Nurmi Stadium.\n[…]\nRaevuori, Antero (1997). Paavo Nurmi, juoksijoiden kuningas (in Finnish) (2nd ed.). WSOY. ISBN 978-9510218501.\n[…]\nMedia related to Paavo Nurmi at Wikimedia Commons\n[…]\nPaavo Nurmi at World Athletics\n[…]\nPaavo Nurmi at Olympics.com\n[…]\nPaavo Nurmi at Olympedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paavo_Nurmi",
        "situacao": "ok",
        "texto": "Paavo Nurmi (Turku, 13 de junho de 1897 — Helsinque, 2 de outubro de 1973) foi um corredor finlandês e um dos maiores atletas de todos os tempos. Em 2012, foi imortalizado no Hall da Fama do Atletismo, criado no mesmo ano como parte das celebrações pelo centenário da IAAF.\n[…]\nNurmi, também conhecido como Homem Relógio– por sua mania de correr com um relógio na mão controlando seu ritmo –  fez parte dos chamados Finlandeses Voadores, termo com que ele e seus compatriotas Hannes Kolehmainen, Ville Ritola e outros, eram designados nos anos 1920, pelas suas conquistas no atletismo, quando dominaram todas as provas de meio-fundo e de longa distância nos Jogos Olímpicos e torneios da época.\n[…]\nDurante este período, Paavo Nurmi foi o maior corredor de meia e longa distância do mundo, quebrando diversos recordes mundiais entre os 1500 m e os 20 quilômetros, conquistando nove medalhas de ouro em Jogos Olímpicos, o que o coloca – ao lado dos americanos Michael Phelps, Carl Lewis e Mark Spitz, do Jamaicano Usain Bolt e da russa Larissa Latynina – como um dos maiores ganhadores de medalhas de ouro da história olímpica.\n[…]\nDepois de participar com brilhantismo dos Jogos de Antuérpia 1920, Paris 1924 e Amsterdã 1928, Paavo tentava, aos 35 anos, encerrar sua carreira em Los Angeles 1932, mas acusado de profissionalismo – por receber reembolso de despesas e viagem, numa época de rigor absoluto e conservador sobre os conceitos do amadorismo dos diretores do Comitê Olímpico Internacional – foi impedido de participar e obrigado a assistir àqueles Jogos da arquibancada do estádio.\n[…]\nMaila Nurmi\n[…]\nBiografia em urheilumuseo.org:PAAVO NURMI'S HOME[ligação inativa] (inglês e finlandês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Carl Lewis",
      "descricao": "Atleta americano, campeão de quatro provas nos Jogos de Los Angeles 1984."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Carl Lewis começou a ganhar o salto em distância olímpico em Los Angeles 1984. Em quantas edições seguidas ele venceu essa prova?",
    "resposta": "Quatro",
    "distratores": [
      "Duas",
      "Três",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Carl_Lewis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carl_Lewis",
        "situacao": "ok",
        "texto": "Frederick Carlton Lewis (born July 1, 1961) is an American former track and field athlete who won nine Olympic gold medals, one Olympic silver medal, and 10 World Championships medals, including eight gold. Lewis was a dominant sprinter and long jumper whose career spanned from 1979 to 1996, when he last won the Olympic long jump.\n[…]\nFrederick Carlton Lewis was born in Birmingham, Alabama, on July 1, 1961, the son of William Lewis (1927–1987) and Evelyn née Lawler Lewis. His mother was a hurdler on the 1951 Pan-Am team. His elder brother Cleveland Lewis played professional soccer for the Memphis Rogues. His parents ran a local athletics club that provided a crucial influence on both him and his sister, Carol.\n[…]\nAt the 1984 Olympic Games in Los Angeles, Lewis was entered into four events with realistic prospects of winning each of them and thereby matching the achievement of Jesse Owens at the 1936 Games in Berlin.\n[…]\nIn response to the accusations, Johnson replied \"When Carl Lewis was winning everything, I never said a word against him. And when the next guy comes along and beats me, I won't complain about that either\".\n[…]\n7× U.S. Athlete of the Year: 1981, 1982, 1983, 1984, 1987, 1988, 1991\n[…]\nLewis also appeared in the film The Last Adam (2006).\n[…]\nIn the 2025 documentary I'm Carl Lewis, Lewis revealed that he had never been in a long-term relationship out of fear that it would have affected his professional aspirations. He has a son named Bakim aka Blew, who is a Director/Videographer and lives in Houston, Texas.\n[…]\nCarl Lewis Athletics 2000, a video game\n[…]\nCarl Lewis at World Athletics\n[…]\nCarl Lewis at www.USATF.org\n[…]\nCarl Lewis at the USATF Hall of Fame (archived)\n[…]\nCarl Lewis at the Team USA Hall of Fame  (archive July 20, 2023)\n[…]\nCarl Lewis at Olympics.com Carl Lewis at Olympic.org (archived)\n[…]\nCarl Lewis at Olympedia\n[…]\nCarl Lewis at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carl_Lewis",
        "situacao": "ok",
        "texto": "Willian Frederick Carlton 'Carl' Lewis Embaixador(a) da boa vontade da FAO (Birmingham, 1 de julho de 1961), é um ex-atleta dos Estados Unidos que ganhou dez medalhas olímpicas, nove das quais de ouro, e dez medalhas nos campeonatos mundiais de atletismo, oito das quais de ouro, em uma carreira que se estendeu de 1979, quando ele alcançou uma posição na classificação mundial, até 1996, quando ele \n[…]\nAo lado do dinamarquês Paul Elvstrøm (Vela), do americano Al Oerter (Lançamento de disco), do americano Michael Phelps (natação), e do britânico Ben Ainslie (Vela), são os únicos tetracampeões olímpicos de uma prova individual em quatro edições consecutivas.\n[…]\nLewis foi um velocista que liderou o ranking mundial nos 100 e 200 metros rasos, e eventos de salto em distância de 1981 ao início de 1990. Foi nomeado Atleta do Ano pela Track and Field News em 1982, 1983 e 1984. Estabeleceu recordes mundiais nos 100m, 4 por 100 metros, e 4 por 200 metros. Suas 65 vitórias no salto em distância, durante 10 anos consecutivos, são um dos maiores períodos de invencibilidade do atletismo mundial.\n[…]\nNuma prova histórica do salto em distância contra Mike Powell em Tóquio, no Campeonato Mundial de Atletismo de 1991,  chegou a saltar a marca de 8,91m, que não valeria como recorde mundial apenas por causa do vento acima de 2,0 m/s (logo depois deste salto, Mike Powell bateu o recorde mundial com 8,95 m). Ainda assim, Carl Lewis detém até hoje a 3ª melhor marca da história da prova, 8,87 m.\n[…]\nEm 2003, o jornal \"The Orange County Register\" noticiou que Carl Lewis não poderia ter disputado os Jogos de Seul 1988, por ter sido flagrado no exame antidoping feito numa seletiva dois meses antes. Seu exame apontou um estimulante achado em antigripais, proibido pelo Comitê Olímpico Internacional. O jornal publicou uma carta em que Lewis recebeu só uma advertência do Comitê Olímpico dos Estados Unidos (USOC).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Tiro com arco",
      "descricao": "Esporte de precisão em que atletas disparam flechas com arcos contra um alvo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No tiro com arco olímpico, os atletas disparam as flechas contra um alvo colocado a quantos metros de distância?",
    "resposta": "Setenta metros",
    "distratores": [
      "Trinta metros",
      "Cinquenta metros",
      "Cem metros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Archery_at_the_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Archery_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Archery had its debut at the 1900 Summer Olympics and has been contested in 18 Olympics. 105 nations have competed in the Olympic archery events, with France appearing the most often at 15 times. The most noticeable trend has been the excellence of South Korean archers, who have won 32 out of 44 gold medals in archery events since 1984. Olympic archery is governed by the World Archery Federation (\n[…]\nThe second Olympic Games, Paris 1900, saw the first appearance of archery. Seven men's disciplines in varying distances were contested. At the 1904 Summer Olympics in St. Louis, six archery events were contested, of which three were men's and three were women's competitions. Team archery was introduced, as was women's archery. At the 1908 Summer Olympics, three archery events were held.\n[…]\nFrom 1988 through 2016, Olympic archery consisted of four medal events: men's individual, women's individual, men's team, and women's team. The mixed team event was added in 2020. In all five events, the distance from the archer to the target is 70 meters."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tiro_com_arco_nos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "O tiro com arco estreou nos Jogos Olímpicos na edição de Paris 1900, sendo disputado em 16 Olimpíadas. Oitenta e quatro nações diferentes já competiram no tiro com arco olímpico. A modalidade é regulamentada pela Federação Mundial de Tiro com Arco (WA, antes FITA).\n[…]\nOs Jogos da II Olimpíada, Paris 1900, marcou a primeira aparição do tiro com arco com sete eventos disputados. Nos Jogos seguintes em 1904 foram cinco os eventos, mas apenas atletas dos Estados Unidos participaram da modalidade. Em Londres 1908 foram três eventos realizados. A última aparição do tiro com arco com as regras antigas foi em Antuérpia 1920.\n[…]\nJá sob regulamentação da FITA, o esporte retornou ao programa olímpico nos Jogos Olímpicos de 1972 em Munique, com dois eventos – individual masculino e individual feminino. Em 1988 foram adicionadas as provas por equipes em ambos os naipes, e em 2020 a prova por equipes mistas.\n[…]\nTiro com arco paralímpico\n[…]\n«Página da Federação Mundial de Tiro com arco» (em inglês)\n[…]\n«Informações do tiro com arco no site do COI» (em inglês)\n[…]\n«Informações do tiro com arco na Olympedia» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Arremesso de peso",
      "descricao": "Prova do atletismo em que o atleta arremessa uma bola metálica pesada o mais longe possível, a partir de um círculo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No arremesso de peso masculino, a bola de metal que os atletas lançam pesa quanto?",
    "resposta": "7,26 quilos",
    "distratores": [
      "4 quilos",
      "10 quilos",
      "12 quilos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shot_put"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shot_put",
        "situacao": "ok",
        "texto": "The shot put is a track and field event involving \"putting\" (or throwing) a heavy spherical ball—the shot—as far as possible. For men, the sport has been a part of the modern Olympics since their revival in 1896, and women's competition began in 1948. The shot put is part of the most common combined events: the men's decathlon, the women's and men's heptathlon and the women's pentathlon.\n[…]\nCompetitors take their throw from inside a marked circle 2.135 metres (7 ft) in diameter, with a \"toe board\" or \"stop board\" 10 centimetres (4 in) high at the front of the circle. The distance thrown is measured from the inside of the circumference of the circle to the nearest mark made on the ground by the falling shot, with distances rounded down to the nearest centimetre under IAAF and WMA rules.\n[…]\nIn open competitions the men's shot weighs 7.26 kilograms (16 lb), and the women's shot weighs 4 kilograms (8.82 lb). Junior, school, and masters competitions often use different weights of shots, typically below the weights of those used in open competitions; the individual rules for each competition should be consulted in order to determine the correct weights to be used.\n[…]\nThe world record and the next six best male results (23.37, 23.30, 23.15, and 23.12 by Ryan Crouser, 23.23 by Joe Kovacs, and 23.12 and 23.10 by Randy Barnes) were completed with the spin technique, while the eighth-best all-time put of 23.06 m (75 ft 7+3⁄4 in) by Ulf Timmermann was completed with the glide technique."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arremesso_de_peso",
        "situacao": "ok",
        "texto": "Arremesso de peso é uma modalidade olímpica de atletismo, onde os atletas competem para arremessar uma bola de metal o mais longe possível. As qualidades principais do atleta campeão são a força e a aceleração. Ao contrário do lançamento de dardo, lançamento de martelo e lançamento de disco, este esporte é chamado oficialmente de arremesso devido ao fato do peso ser empurrado e os demais serem pro\n[…]\nA bola oficial masculina tem uma massa de 7,26 kg e é geralmente feita de bronze ou ferro fundido e chumbo, possuindo cerca de 12 cm de diâmetro. Na categoria feminina ela pesa  4 kg e o seu diâmetro é de 9 cm aproximadamente.\n[…]\nO arremessador tem uma área restrita circular de diâmetro 2,135 m (7 pés) para se locomover, com um anteparo semicircular de concreto ou madeira de 10 cm de altura no limite frontal dela; no início do lançamento, o peso deve estar colocado entre o ombro e o pescoço do atleta e arremessado com as pontas dos dedos, e não com a palma da mão. Durante o lançamento, o atleta deve rodar sobre si mesmo e arremessar (técnica com giro).\n[…]\nA marca obtida em cada arremesso é medida a partir do primeiro lugar onde o peso bate no chão, dentro de um setor pré-determinado com 35° de abertura; o atleta não pode tocar no anteparo do chão, nem ultrapassá-lo com o pé e o arremesso deve ser sempre feito numa linha acima do ombro. Caso ele deixe o círculo antes do peso tocar o solo ou se retirar dele pela frente ou pelo lado, o arremesso é invalidado.\n[…]\nEm competições oficiais, se houver até oito competidores participando, cada atleta tem direito a seis lançamentos. Quando há mais de oito, cada um tem direito a três lançamentos e somente os oito primeiros fazem mais três lançamentos. A posição na classificação é determinada pela distância obtida no maior arremesso válido; em, caso de empate, vale a segunda maior marca do atleta.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Daniel Dias",
      "descricao": "Nadador paralímpico brasileiro, multimedalhista entre 2008 e 2020."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O nadador Daniel Dias se despediu das Paralimpíadas em Tóquio. Quantas medalhas paralímpicas ele somou na carreira?",
    "resposta": "Vinte e sete",
    "distratores": [
      "Dezoito",
      "Vinte e duas",
      "Trinta e três"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Daniel_Dias",
      "https://en.wikipedia.org/wiki/Daniel_Dias"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Daniel_Dias",
        "situacao": "ok",
        "texto": "Daniel de Faria Dias (Campinas, 24 de maio de 1988) é um nadador paralímpico brasileiro e recordista mundial.\n[…]\nCom 14 medalhas de ouro (27 no total) nos Jogos Paralímpicos, ele é o 14º atleta mais medalhado da história deste evento multidesportivo, e figura na 6ª posição entre os nadadores paralímpicos.\n[…]\nDaniel conquistou nove medalhas nos Jogos Paralímpicos de Pequim 2008 (4 de ouro, 4 de prata e 1 de bronze), se tornando o atleta com mais medalhas em uma única edição dos Jogos, superando  também o nadador brasileiro Clodoaldo Silva, que havia conquistado sete medalhas (seis de ouro e uma de prata) nos Jogos Paralímpicos de Atenas 2004.\n[…]\nNos Jogos Paralímpicos de Verão de 2020 Daniel garantiu três bronzes (nos 100m livre da classe S5, no revezamento 4x50m livre misto até 20 pontos e nos 200m livre da classe S5), se consagrando como o maior medalhista paralímpico brasileiro, com 27 medalhas no total. Ele se despediu das piscinas no primeiro dia de setembro de 2021, aos 33 anos, terminando a prova dos 50m livres da classe S5 em quarto lugar, com o tempo de 32s12, encerrando a sua gloriosa carreira.\n[…]\nEm 15 de junho de 2009, Daniel recebeu o troféu no Prêmio Laureus do Esporte Mundial como melhor atleta paralímpico de 2008. Sua indicação teve como motivo as suas nove medalhas conquistadas durante os Jogos Paralímpicos de Pequim. Ele venceu novamente a premiação em 2012 e em 2016, se sagrando como o único brasileiro a atingir esse feito.\n[…]\n«Entrevista exclusiva com Daniel Dias». www.memoriaolimpica.com\n[…]\n«Nadador Daniel Dias ganha ouro e já soma 16 medalhas em Paralimpíadas»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Daniel_Dias",
        "situacao": "ok",
        "texto": "Daniel de Faria Dias (born 24 May 1988) is a Brazilian Paralympic swimmer. Having learnt to swim in 2004 after being inspired by Clodoaldo Silva at the 2004 Summer Paralympics, he entered his first international competition two years later winning five medals. He competed in a wide range of swimming events at the 2008, 2012, 2016 and 2020 Paralympics and won 27 medals, including 14 gold medals.\n[…]\nHis first major event was the 2006 IPC Swimming World Championships in Durban, South Africa. He won the gold medal in three events, and a silver medal in a further two. At the age of 20, he competed in his first Paralympic Games at Beijing in 2008. The Games proved highly successful for Dias, who won more medals than any other athlete. He received a total of nine medals including four golds, four silvers, and one bronze across a range of different distances and disciplines.\n[…]\nDias won the Laureus Award in 2009 for Sportsperson of the Year with a Disability, being awarded it by British athlete Sebastian Coe at a ceremony in London. Dias was an ambassador for his country's bid for the 2016 Summer Olympics and Paralympics, and was present for the presentation of the Candidature File to the International Olympic Committee.\n[…]\nDias won the Sportsperson of the Year with a Disability for the second time in 2012 after winning 6 gold medals all in world record time at the 2012 Paralympic Games.\n[…]\nIn 2016 he was compared to Michael Phelps, a retired non-Paralympic American competitive swimmer. Despite such an honorable comparison Daniel Dias said that he is Daniel Dias.\n[…]\nDaniel Dias at the International Paralympic Committee Daniel Dias at IPC.InfostradaSports.com (archived)"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Estádio Olímpico de Montreal",
      "descricao": "Estádio com torre inclinada em Montreal, Canadá, principal sede dos Jogos Olímpicos de 1976."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Apelidado de Big Owe, a grande dívida, o Estádio Olímpico de Montreal custou tanto que a conta levou quantos anos para ser quitada?",
    "resposta": "Cerca de trinta anos",
    "distratores": [
      "Cinco anos",
      "Dez anos",
      "Cinquenta anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_Stadium_(Montreal)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_Stadium_(Montreal)",
        "situacao": "ok",
        "texto": "Olympic Stadium (French: Stade olympique, pronounced [stad ɔlɛ̃pik]) is a multi-purpose stadium in Montreal, Canada, located at Olympic Park in the Hochelaga-Maisonneuve district of the city. Built in the mid-1970s as the main venue for the 1976 Summer Olympics, it is nicknamed \"The Big O\", a reference to both its name and to the doughnut-shape of the permanent component of the stadium's roof.\n[…]\nOn July 25, 2009, Olympic Stadium became the first stadium outside France to host Ligue 1's Trophée des Champions, a super cup played by the winner of Ligue 1 and the Coupe de France. Over 34,000 attended the game as Bordeaux defeated Guingamp, 2–0. The game was held in Montreal to help Ligue 1 break into the growing North America soccer market.\n[…]\nOn March 17, 2012, a record crowd of 58,912 packed Olympic Stadium to cheer on the current version of the Montreal Impact for their MLS debut on home soil, in a 1–1 draw with the Chicago Fire, setting a new attendance record for professional soccer in Quebec. That record was later broken months later on May 12, with 60,860 people for a match against the LA Galaxy, also setting a new attendance record for professional soccer in Canada.\n[…]\nIn June 2026, Major League Soccer commissioner Don Garber stated that Montréal’s Olympic Stadium “can be one of the great stadiums in the entire world” if the province completes its full renovation plan, following his tour of the facility during ongoing roof replacement work.\n[…]\nThe Montreal games of the 2007 FIFA U-20 World Cup were held at Olympic Stadium on a removable Team Pro EF RD surface that was purchased specifically for the tournament.\n[…]\nFor the first time since the Olympic Games in 1976, a natural grass field was installed in the stadium for the Montreal Impact match versus A.C. Milan on June 2, 2010.\n[…]\nOlympic Stadium\n[…]\nOfficial Website – Montreal Tower\n[…]\nOlympic Stadium disaster timeline"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dio_Ol%C3%ADmpico_de_Montreal",
        "situacao": "ok",
        "texto": "O Estádio Olímpico de Montreal (em francês: Le Stade Olympique; em inglês: Montreal Olympic Stadium) é um estádio olímpico, localizado em Montreal, na província de Quebec, no Canadá. Foi construído para abrigar os Jogos Olímpicos de Verão de 1976, também foi a casa do time de beisebol Montreal Expos (atual Washington Nationals) da MLB durante 33 anos (1977–2004) e do time de futebol canadense Mont\n[…]\nA construção do Estádio Olímpico iniciou em abril de 1973, e a inauguração ocorreu em 17 de julho de 1976, com a cerimônia de abertura dos Jogos Olímpicos de 1976, que contou com a presença da Rainha Elizabeth II. Durante os jogos, embaixo da torre, também abrigou as competições de natação.\n[…]\nApós os jogos, o estádio foi remodelado para receber jogos de beisebol. Em 15 de abril de 1977, o primeiro jogo após a reforma, o Philadelphia Phillies bateu o Montreal Expos por 7 a 2. O estádio recebeu o All-star game da MLB de 1982.\n[…]\nApesar de concluído, o observatório chamado de Torre de Montreal só ficou pronto em abril de 1987, junto com a estrutura de cabos de sustentação do teto retrátil do estádio.\n[…]\nEm 29 de setembro de 2004, ocorreu o último jogo dos Expos no Estádio Olímpico. Foi a derrota para o Florida Marlins, por 9 a 1.\n[…]\nEstádio Percival-Molson\n[…]\nTorre de Montreal\n[…]\nBiodomo de Montreal\n[…]\nLista de estádios do Canadá",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Brasil nos Jogos Olímpicos de Verão de 2024",
      "descricao": "Participação brasileira nos Jogos Olímpicos de Paris 2024."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Paris 2024, o Brasil somou vinte medalhas olímpicas. Quantas delas foram de ouro?",
    "resposta": "Três",
    "distratores": [
      "Uma",
      "Cinco",
      "Sete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_at_the_2024_Summer_Olympics",
      "https://pt.wikipedia.org/wiki/Brasil_nos_Jogos_Olímpicos_de_Verão_de_2024"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_at_the_2024_Summer_Olympics",
        "situacao": "ok",
        "texto": "Brazil competed at the 2024 Summer Olympics in Paris from 26 July to 11 August 2024. Brazilian athletes have appeared in every edition of the Summer Olympic Games from 1920 onwards, except for Amsterdam 1928.\n[…]\nBrazilian modern pentathletes confirmed a single quota place for Paris 2024. Isabela Abreu secured one of two available South American berth in the women's event at the 2023 Pan American Games in Santiago, Chile.\n[…]\nBrazilian swimmers achieved the entry standards in the following events for Paris 2024 (a maximum of two swimmers under the Olympic Qualifying Time (OST) and potentially at the Olympic Consideration Time (OCT)): To secure their nomination to the Olympic team, swimmers must finish in the top two of each individual pool event under the World Aquatics A-cut at the Brazilian Olympic Trials.\n[…]\nBrazil qualified four athletes to compete at the 2024 Olympic Games. Caroline Santos qualified for Paris 2024 by virtue of finishing sixth in the Olympic rankings in her division and receiving a re-allocated spot. Edival Pontes, Maria Clara Pacheco and Henrique Marques secured their spots through the 2024 Pan American Qualification Tournament, in Santo Domingo, Dominican Republic.\n[…]\nBrazilian two female beach volleyball teams qualified directly for the Olympics by virtue of the FIVB Olympic Ranking. The first male pair to guarantee a place, Stein/Wanderley, confirmed their classification via ranking due to the withdrawal of Pedro Solberg/Guto from the Elite 16 in Brasília, Brazil, a stage of the 2024 world circuit. Arthur/Evandro guaranteed classification with the title campaign in the Elite 16 of Brasília.\n[…]\nThe roster was announced on 4 July 2024.\n[…]\nBrazil at the 2024 Summer Paralympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brasil_nos_Jogos_Olímpicos_de_Verão_de_2024",
        "situacao": "ok",
        "texto": "Brasil, representado pelo Comitê Olímpico do Brasil (COB), competiu nos Jogos Olímpicos de Verão de 2024 em Paris de 26 de julho a 11 de agosto. Atletas brasileiros participaram de todas as edições dos Jogos Olímpicos de Verão de 1920 em diante, com exceção de Amsterdã 1928.\n[…]\nA seleção masculina do Brasil conquistou o direito de enviar um ginasta individual aos Jogos ao terminar como uma das três nações não classificadas mais fortes no Campeonato Mundial de Ginástica Artística de 2023. Diogo Soares também reservou oficialmente o seu bilhete olímpico no mesmo campeonato como um dos oito ginastas do individual geral com melhor classificação que não teve acesso a Paris como parte de uma equipe qualificada.\n[…]\nA Confederação Brasileira de Hipismo convocou nove cavaleiros para as Olimpíadas de 2024.\n[…]\nPenalber garantiu vaga após vencer três lutas no Pré-Olímpico Mundial.\n[…]\nThiago Wild garantiu vaga pelo ranking da ATP. Thiago Monteiro, por ter sido bronze no Pan de 2023 e pelo fato do medalhista de ouro não ter podido ir aos Jogos. Beatriz Haddad Maia se qualificou pelo ranking da WTA. Laura Pigossi, por ter obtido o ouro nos Jogos Pan-Americanos de 2023. Luisa Stefani e Bia Haddad Maia obtiveram a vaga olímpica nas duplas a partir da soma dos rankings. Wild e Monteiro jogam duplas através de vagas exclusivas aos simplistas, a partir da soma dos rankings.\n[…]\nOs atiradores brasileiros alcançaram cotas para os seguintes eventos com base em seus resultados nos Campeonatos Mundiais ISSF de 2022 e 2023, Campeonatos das Américas de 2022 e 2024, Jogos Pan-Americanos de 2023 e Torneio de Qualificação Olímpica Mundial da ISSF de 2024, se obtiverem uma pontuação mínima de qualificação (MQS) de 14 de agosto de 2022 a 9 de junho de 2024.\n[…]\nBrasil nos Jogos Olímpicos de Verão"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Medalha olímpica",
      "descricao": "Medalha de ouro, prata ou bronze entregue aos três primeiros colocados de cada prova olímpica."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pelas regras olímpicas, a medalha de ouro é quase toda de prata, mas precisa ter um mínimo de ouro. Quantos gramas?",
    "resposta": "Seis gramas",
    "distratores": [
      "Dois gramas",
      "Vinte gramas",
      "Cinquenta gramas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_medal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_medal",
        "situacao": "ok",
        "texto": "An Olympic medal is an honorary medal that is awarded to successful competitors at one of the Olympic Games. There are three classes of medal to be won: gold, silver, and bronze, awarded to first, second, and third place, respectively. The granting of awards is laid out in detail in the Olympic protocols.\n[…]\nAt the 1960 Summer Olympics, competitors in the Stadio Olimpico received their medals immediately after each event for the first time; competitors at other venues came to the Stadio Olimpico the next day to receive their medals. Later Games have had a victory podium at each competition venue."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Estádio Panatenaico",
      "descricao": "Estádio de mármore em Atenas, Grécia, sede dos Jogos Olímpicos de 1896."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O Estádio Panatenaico, palco dos Jogos de 1896 em Atenas, é apelidado pelos gregos de Kalimármaro. O que esse nome significa?",
    "resposta": "Mármore bonito",
    "distratores": [
      "Casa dos atletas",
      "Pista de Atena",
      "Grande ferradura"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Panathenaic_Stadium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panathenaic_Stadium",
        "situacao": "ok",
        "texto": "The Panathenaic Stadium (Greek: Παναθηναϊκό Στάδιο, romanized: Panathinaïkó Stádio, [panaθinai̯ˈko ˈstaðio]) or Kallimarmaro (Καλλιμάρμαρο [kaliˈmaɾmaɾo], lit. 'beautiful marble') is a multi-purpose stadium in Athens, Greece. One of the main historic attractions of Athens, it is the only stadium in the world built entirely of marble.\n[…]\nDarling writes that \"He duplicated the dimensions and design of the second-century structure, arranging the tiers of seats around the U-shaped track.\" It was rebuilt in Pentelic marble and is \"distinguished by its high degree of fidelity to the ancient monument of Herodes.\" Averoff donated 920,000 drachmas to this project. As a tribute to his generosity, a statue of Averoff was constructed and unveiled on 5 April 1896 outside the stadium. It stands there to this day.\n[…]\nThe stadium held the opening and closing ceremonies of the 1896 Olympics. On 6 April (25 March according to the Julian calendar then in use in Greece), the games of the First Olympiad were officially opened; it was Easter Monday for both the Western and Eastern Christian Churches and the anniversary of Greece's independence. The stadium was filled with an estimated 60,000 spectators, including King George I of Greece, his wife Olga, and their sons.\n[…]\nGasparri, Carlo (1975). \"Lo stadio panatenaico. Documenti e testimonianze per una riconsiderazione dell'edificio di Erode Attico\". ASAtene (in Italian). 36–37: 313–392.\n[…]\nCecconi, Niccolò (2020). \"Lo Stadio Panatenaico\". Annuario della Scuola Archeologica di Atene e delle Missioni Italiane in Oriente. 98: 417–455.\n[…]\nPolites, N. G. (1896). \"The Panathenaic Stadion\". In Lambros, S. P.; Polites, N. G. (eds.). The Olympic Games: B.C. 776 – A.D. 1896 (PDF). London: H. Grevel and Co. pp. 31–48. Archived from the original (PDF) on 2015-11-02. Retrieved 2016-06-26."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dio_Panatenaico",
        "situacao": "ok",
        "texto": "O Estádio Panatenaico (em grego: Παναθηναϊκό στάδιο), também chamado Calimármaro (em grego: Καλλιμάρμαρο; romaniz.: Kallimarmaron; lit. \"beleza em mármore\"), é um estádio de atletismo situado em Atenas, construído inteiramente em mármore branco do Monte Pentélico, é um dos estádios mais antigos do mundo.\n[…]\nNos tempos antigos, foi utilizado para alojar a parte atlética dos Jogos das Panateneias, em homenagem à deusa grega Atena. Durante a época clássica, o estádio tinha assentos de madeira. Foi reconstruído em mármore, por Arconte Licurgo, no ano 329 a.C. e foi ampliado e renovado por Herodes Ático, no ano 140 d.C., com uma capacidade de 50.000 assentos.\n[…]\nO estádio foi renovado pela segunda vez em 1895 para os Jogos Olímpicos de 1896, com financiamento proporcionado pela finalização do benfeitor grego George Averoff (cuja estátua de mármore agora está na entrada), com base nos desenhos dos arquitetos Anastasios Metaxas e Ernst Ziller. Sua pista tem forma de U e suas arquibancadas tem capacidade para 80 000 espectadores sentados.\n[…]\nO estádio está localizado no centro de Atenas, a leste dos Jardins Nacionais e da Mansão Zappeion, a oeste do distrito residencial Pankrati e junto a colina de Ardettos. Situa-se no local exato onde se encontrava o estádio da Atenas antiga, onde celebraram-se as competições atléticas dos antigos Jogos Panatenaicos.\n[…]\nRecentemente o estádio é usado para glorificar conquistas importantes dos esportistas da Grécia, como o título do Campeonato Europeu de Futebol de 2004 pela seleção grega ou de eventos importantes como a cerimônia de abertura do Campeonato Mundial de Atletismo de 1997.\n[…]\nEm 2004 os Jogos Olímpicos voltaram a ser sediados na cidade de Atenas e o Estádio Panatenaico hospedou as competições de tiro com arco e a chegada da maratona masculina e feminina.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Misha (mascote)",
      "descricao": "Urso mascote dos Jogos Olímpicos de Moscou 1980."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O urso Misha, mascote dos Jogos de Moscou 1980, tem um nome que é o apelido carinhoso, em russo, de qual nome próprio?",
    "resposta": "Mikhail",
    "distratores": [
      "Nikolai",
      "Vladimir",
      "Aleksandr"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Misha_(mascot)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Misha_(mascot)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Bobsled",
      "descricao": "Esporte de inverno em que equipes descem uma pista de gelo num trenó."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome bobsled vem de um hábito das primeiras equipes, que tentavam ganhar velocidade na descida. O que elas faziam?",
    "resposta": "Balançavam o corpo",
    "distratores": [
      "Batiam os pés",
      "Gritavam em coro",
      "Remavam com bastões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bobsleigh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bobsleigh",
        "situacao": "ok",
        "texto": "Bobsleigh or bobsled is a winter sport in which individual athletes or teams of two to four athletes make timed speed runs down narrow, twisting, banked, iced tracks in a gravity-powered sleigh. International bobsleigh competitions are governed by the International Bobsleigh and Skeleton Federation (formerly the FIBT).\n[…]\nAfter the 2018 Winter Olympics, the International Olympic Committee and the IBSF agreed to add women's monobob as an Olympic sport for the 2022 Winter Olympics, so that there would be an equal number of women's and men's events in bobsleigh.\n[…]\nBobsledders who train frequently have reported issues such as chronic headaches, a heightened sensitivity to bright lights and loud noises, forgetfulness, a \"mental fog\", and psychological problems. Repeated mild brain trauma has caused issues for boxers, rugby players, and football players with chronic traumatic encephalopathy, and fears have arisen that bobsledding carries a similar danger, at least with the steeper and faster courses used in competitions.\n[…]\nA brain scan of one bobsledder, Christina Smith, revealed damage to the rear and frontal lobes, consistent with micro-tears in the brain's white matter.\n[…]\nA significant number of athletes have either died by suicide or died of drug overdoses. Examples include medal-winning bobsledders Eugenio Monti and Pavle Jovanovic, who died by suicide; Steven Holcomb died of an overdose.\n[…]\nSince 2013, three North American former bobsledders have taken their lives, another attempted it, and two others died of overdoses; this is far over expectation of the group from chance, as only a few hundred athletes participate seriously in bobsled and other sliding sports such as luge and skeleton at any one time.\n[…]\nList of Bobsleigh World Cup champions\n[…]\nMedia related to Bobsleigh at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bobsleigh",
        "situacao": "ok",
        "texto": "O bobsleigh, bobsled ou bobsledge é um esporte de inverno no qual equipes de duas ou quatro pessoas realizam, por meio de um trenó, descidas cronometradas em uma pista de gelo sinuosa e estreita especialmente construída para a competição. O trenó é movido pela força da gravidade, e pode atingir velocidades de até 150 km/h.\n[…]\nDesde 1924, o bobsleigh faz parte dos Jogos Olímpicos de Inverno, como uma competição para equipes masculinas de quatro pessoas. Em 1932, foi adicionada uma segunda modalidade, para equipes compostas de dois homens.\n[…]\nEm 2002, foi pela primeira vez admitida a participação de mulheres entre os membros das equipes. Em 2006, foi introduzida modalidade para times de duas mulheres.\n[…]\nCriado na Suíça, as primeiras corridas de bobsleigh foram disputadas em estradas cobertas por neve. A primeira pista feita especialmente para a competição foi inaugurada em 1902.\n[…]\nO bobsleigh era praticado no final do século XIX em duas regiões distintas: Albany, nos Estados Unidos (1882) e St. Moritz, na Suíça (1897) onde o esporte se desenvolveu primeiramente, e fundou o seu primeiro Clube de Bobsled em 1897. Já em 1914, as competições de bobsled eram organizadas em várias pistas pela Europa, principalmente na região dos alpes europeus.\n[…]\nBobsled de 4 pessoas / 4-man (masculino).\n[…]\nCapacete de skeleton, uniforme de competição, luvas, sapatilha de bobsleigh, ombreira, cotoveleira e joelheira.\n[…]\nDependendo da pista uma descida dura entre 50 e 60 segundos, aonde os trenós chegam a 140 km/h.\n[…]\nAs primeiras 30 equipes ganham pontos conforme tabela da Federação Internacional de Bobsleigh. No final da temporada as equipes com o maior número de pontos acumulados, é declarada campeã mundial.\n[…]\nFederação Internacional de Bobsleigh e de Tobogganing\n[…]\nCampeonato Mundial de Bobsleigh\n[…]\nCopa do Mundo de Bobsleigh\n[…]\nBobsleigh nos Jogos Olímpicos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Nado crawl",
      "descricao": "Estilo de natação de braçadas alternadas e pernas batendo, o mais rápido e o mais usado nas provas de nado livre."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O crawl, estilo mais rápido da natação, tem um nome que vem de um verbo inglês. O que esse verbo significa?",
    "resposta": "Rastejar",
    "distratores": [
      "Voar",
      "Remar",
      "Deslizar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Front_crawl",
      "https://en.wiktionary.org/wiki/crawl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Front_crawl",
        "situacao": "ok",
        "texto": "The front crawl or forward crawl, also known as the Australian crawl or American crawl, is a swimming stroke usually regarded as the fastest of the four front primary strokes. As such, the front crawl stroke is almost universally used during a freestyle swimming competition, and hence freestyle is used metonymically for the front crawl. It is one of two long axis strokes, the other one being the b\n[…]\nThere are several kicks that can be used with the upper body action of the front crawl. Because the front crawl is most commonly used in freestyle competitions, all of these kicks are legal.\n[…]\nThe front crawl swimmer uses a tumble turn (also known as a flip turn) to reverse directions in minimal time. The swimmer swims close to the wall as quickly as possible. In the swimming position with one arm forward and one arm to the back, the swimmer does not recover one arm, but rather uses the pull/push of the other arm to initialize a somersault with the knees straight to the body.\n[…]\nA variation of front crawl often used in training involves only one arm moving at any one time, while the other arm rests and is stretched out at the front. This style is called a \"catch up\" stroke because the moving hand touches, or \"catches up\" to the stationary one before the stationary hand begins its motion. Catch up requires more strength for swimming because the hand is beginning the pull from a stationary position rather than a dynamic one.\n[…]\nThis style is slower than the regular front crawl and is rarely used competitively; however, it is often used for training purposes by swimmers, as it increases the body's awareness of being streamlined in the water. Total Immersion is a similar technique.\n[…]\nThis drill supports rotation and breathing, single arm training, and streamlining in front crawl.\n[…]\nSwimnews.ch: Front crawl technique page"
      },
      {
        "url": "https://en.wiktionary.org/wiki/crawl",
        "situacao": "ok",
        "texto": "English Wikipedia has an article on: crawl\n[…]\n( intransitive ) Followed by with : see crawl with .\n[…]\nYahoo Search has updated its Slurp Crawler to crawl websites faster and more efficiently.\n[…]\nPortuguese: engatinhar   (pt) ( on hands and knees ) ; rastejar   (pt) , arrastar - se ( dragging body along the ground ) ; reptar   (pt)\n[…]\nThe act of sequentially visiting a series of similar establishments (i.e., a bar crawl ).\n[…]\nMy computer has slowed down to a crawl since I installed that software package.\n[…]\nThe opening crawl (and a stirring propaganda movie) informs us that “The Hunger Games” are an annual event in Panem, a North American nation divided into 12 different districts, each in service to the Capitol, a wealthy metropolis that owes its creature comforts to an oppressive dictatorship.\n[…]\nPortuguese: crol   (pt)   m , crawl   (pt)   m\n[…]\nSpanish: crol   (es)   m , estilo crol   m\n[…]\nDanish Wikipedia has an article on: crawl\n[…]\n“ crawl ”, in Trésor de la langue française informatisé [ Digitized Treasury of the French Language ], 2012\n[…]\n“ crawl ”, in Dicionário Aulete Digital (in Portuguese), Rio de Janeiro: Lexikon Editora Digital, 2008– 2026\n[…]\n“ crawl ”, in Dicionário Priberam da Língua Portuguesa (in Portuguese), Lisbon: Priberam, 2008– 2026\n[…]\nSwedish Wikipedia has an article on: crawl\n[…]\n“ crawl ”, in Svensk ordbok [ Dictionary of Swedish ] (in Swedish)\n[…]\n“ crawl ”, in Svenska Akademiens ordlista [ Wordlist of the Swedish Academy ] (in Swedish)\n[…]\nRetrieved from \" https://en.wiktionary.org/w/index.php?title=crawl&oldid=93687141 \""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crawl",
        "situacao": "ok",
        "texto": "O nado de crawl (português brasileiro) ou crol (português europeu) é uma técnica de natação e também uma disciplina olímpica.\n[…]\nO crawl já era praticado bem antes do aparecimento da nossa civilização. Ele é, sem dúvida, o estilo mais utilizado e mais rápido, porém, na verdade ele não pode ser considerado como um estilo verdadeiro. Na verdade, o que existe é a prova de nado livre, quando o atleta pode nadar como quiser, até inventar um estilo próprio. Tanto, que a Federação Internacional de Natação (FINA) não menciona o crawl pelo nome em seu livro.\n[…]\nNo estilo crawl, os braços do nadador  realizam uma espécie de s alongado. Durante o tempo todo, o nadador se mantém com a barriga para baixo. Depois de ter mergulhado, o nadador necessita de seguir todos os passos para realizar o nado crawl corretamente. Nesse estilo, os braços respondem por 75% da propulsão e as pernas por 25% em média. Os braços são responsáveis pela velocidade. Na fase de propulsão, debaixo da água o braço faz um movimento parecido com um ponto de interrogação “?” ou um “S”.\n[…]\nCom isso, o nadador consegue “empurrar” mais água e aumentar a sua propulsão verdadeira. Depois segue-se a fase fora da água, em que os braços devem ser projetados à frente, com os cotovelos dobrados e a ponta dos dedos ficando na diagonal, isto é, o polegar virado para baixo. A principal diferença entre o tronco do nado crawl e a remada na prancha é a postura dos cotovelos no movimento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Judô",
      "descricao": "Arte marcial e esporte olímpico japonês criado por Jigoro Kano no fim do século dezenove."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do judô, arte marcial criada por Jigoro Kano e hoje esporte olímpico, significa o que em japonês?",
    "resposta": "Caminho suave",
    "distratores": [
      "Mão vazia",
      "Caminho da espada",
      "Força interior"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Judo",
      "https://pt.wikipedia.org/wiki/Judô"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Judo",
        "situacao": "ok",
        "texto": "Judo (Japanese: 柔道, Hepburn: Jūdō; lit. 'gentle way') is an unarmed modern Japanese martial art, combat sport, Olympic sport (since 1964), Paralympic sport (since 1988) and Commonwealth Games sport (since 1990). Judo is the most prominent form of Samurai throws and self-defense competed internationally.\n[…]\nJigoro Kano for a long time wished to see judo as an Olympic discipline. The first time judo was seen in the Olympic Games was in an informal demonstration hosted by Kano at the 1932 Games. However, Kano was ambivalent about judo's potential inclusion as an Olympic sport:\n[…]\nKano Jigoro's Kodokan judo is the most popular and well-known style of judo, but is not the only one. The terms judo and jujutsu were quite interchangeable in the early years, so some of these forms of judo are still known as jujutsu or jiu-jitsu either for that reason, or simply to differentiate them from mainstream judo. From Kano's original style of judo, several related forms have evolved—some now widely considered to be distinct arts.\n[…]\nJudo is a hierarchical art, where seniority of judoka is designated by what is known as the kyū (級, kyū) -dan (段, dan) ranking system. This system was developed by Jigoro Kano and was based on the ranking system in the board game Go.\n[…]\nOn October 28 of every year, the judo community celebrates the World Judo Day in the honor of the birth of Judo's founder, Jigoro Kano. The theme of the World Judo Day changes from year to year, but the goal is always to highlight the moral values of Judo. The first celebration was held in 2011. Past themes for the celebration have included:\n[…]\nJudo by country\n[…]\nList of World Champions in Judo\n[…]\nInternational Judo Federation (IJF)—The worldwide governing body for judo\n[…]\nKodokan Judo Institute—Headquarters of judo (Kano Jigoro's school)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Judô",
        "situacao": "ok",
        "texto": "Judô(pt-BR) ou judo(pt-PT?) (柔道, Jūdō; caminho suave, ou caminho da suavidade) é uma arte marcial japonesa, praticada como esporte de combate e fundada por Jigoro Kano em 1882. Os seus principais objetivos são fortalecer o físico, a mente e o espírito de forma integrada, além de desenvolver técnicas de defesa pessoal.\n[…]\nO Judô é uma arte marcial esportiva. Foi criado no Japão, em 1882, pelo professor Jigoro Kano. Ao criar esta arte marcial, Kano tinha como objetivo criar uma técnica de defesa pessoal, além de desenvolver o físico, espírito e mente. Esta arte marcial chegou ao Brasil no ano de 1922, em pleno período da imigração japonesa no país. O judô foi incluído nas Olimpíadas em 1972, após ter sido disputado em 1964, em Tóquio, por ser o esporte mais popular do país-sede.\n[…]\nChamando o seu novo sistema de Judo, ele pretendeu elevar o termo \"jutsu\" (arte ou prática) para \"do\", ou seja, para caminho ou via, dando a entender que não se tratava apenas de mudança de nomes, mas que o seu novo sistema repousava sobre uma fundamentação filosófica.\n[…]\nEm fevereiro de 1882, no templo de Eishoji de Kita Inaritcho, bairro de Shimoya em Tóquio, Jigoro Kano inaugura sua primeira escola de Judo, denominada Kodokan (Instituto do Caminho da Fraternidade), já que \"Ko\" significa fraternidade, irmandade; \"Do\" significa caminho, via; e \"Kan\", instituto.\n[…]\nPortanto, ensinava um estilo que não era exatamente o Kodokan Judo, o que não diminui sua enorme contribuição ao começo do Judô no Brasil. Daí por diante disseminaram-se a cultura e os ensinamentos do mestre Jigoro Kano e em 18 de março de 1969 era fundada a Confederação Brasileira de Judô, sendo reconhecida por decreto em 1972. Hoje em dia o judô é ensinado em academias desportivas e clubes e reconhecido como um esporte saudável que não está relacionado à violência."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Carl Lewis",
      "descricao": "Atleta americano, campeão de quatro provas nos Jogos de Los Angeles 1984."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nove vezes campeão olímpico entre a velocidade e o salto em distância, o americano Carl Lewis ganhou que apelido?",
    "resposta": "Filho do Vento",
    "distratores": [
      "Bala de Prata",
      "Rei da Pista",
      "Foguete Americano"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carl_Lewis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carl_Lewis",
        "situacao": "ok",
        "texto": "Willian Frederick Carlton 'Carl' Lewis Embaixador(a) da boa vontade da FAO (Birmingham, 1 de julho de 1961), é um ex-atleta dos Estados Unidos que ganhou dez medalhas olímpicas, nove das quais de ouro, e dez medalhas nos campeonatos mundiais de atletismo, oito das quais de ouro, em uma carreira que se estendeu de 1979, quando ele alcançou uma posição na classificação mundial, até 1996, quando ele \n[…]\nLewis foi um velocista que liderou o ranking mundial nos 100 e 200 metros rasos, e eventos de salto em distância de 1981 ao início de 1990. Foi nomeado Atleta do Ano pela Track and Field News em 1982, 1983 e 1984. Estabeleceu recordes mundiais nos 100m, 4 por 100 metros, e 4 por 200 metros. Suas 65 vitórias no salto em distância, durante 10 anos consecutivos, são um dos maiores períodos de invencibilidade do atletismo mundial.\n[…]\nNuma prova histórica do salto em distância contra Mike Powell em Tóquio, no Campeonato Mundial de Atletismo de 1991,  chegou a saltar a marca de 8,91m, que não valeria como recorde mundial apenas por causa do vento acima de 2,0 m/s (logo depois deste salto, Mike Powell bateu o recorde mundial com 8,95 m). Ainda assim, Carl Lewis detém até hoje a 3ª melhor marca da história da prova, 8,87 m.\n[…]\nAs realizações de sua vida renderam-lhe inúmeros prêmios, sendo inclusive eleito o \"Esportista do Século\" pelo Comitê Olímpico Internacional e nomeado \"Olympian of the Century\" pela revista esportiva americana Sports Illustrated.\n[…]\nEm 2003, o jornal \"The Orange County Register\" noticiou que Carl Lewis não poderia ter disputado os Jogos de Seul 1988, por ter sido flagrado no exame antidoping feito numa seletiva dois meses antes. Seu exame apontou um estimulante achado em antigripais, proibido pelo Comitê Olímpico Internacional. O jornal publicou uma carta em que Lewis recebeu só uma advertência do Comitê Olímpico dos Estados Unidos (USOC).\n[…]\nCarl Lewis na IAAF"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Isaquias Queiroz",
      "descricao": "Canoísta brasileiro de velocidade, medalhista olímpico com três medalhas numa mesma edição."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na infância, na Bahia, o canoísta Isaquias Queiroz caiu de uma árvore e perdeu um órgão. Que apelido isso lhe rendeu?",
    "resposta": "Sem Rim",
    "distratores": [
      "Sem Baço",
      "Menino de Ferro",
      "Mão de Pedra"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Isaquias_Queiroz"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
        "situacao": "ok",
        "texto": "Isaquias Queiroz dos Santos (Ubaitaba, 3 de janeiro de 1994) é um canoísta brasileiro, campeão olímpico nos Jogos Olímpicos de Verão de 2020, na Canoa Individual C1 1.000m, chegando aos 4:04:408 minutos. Em Nos Jogos Olímpicos de Verão de 2016, Isaquias se tornou o primeiro atleta brasileiro a conquistar três medalhas em uma única edição dos Jogos Olímpicos.\n[…]\nIsaquias Queiroz era atleta do Clube de Regatas do Flamengo quando conquistou as medalhas de ouro no C1 200m e a prata no C1 500m. Ele voltou ao clube em 2019 e como atleta do Flamengo conquistou o ouro em Tóquio 2020.\n[…]\nO pai de Isaquias morreu quando ele tinha apenas dois anos, e a mãe, Dilma, cuidava dele e de outros nove irmãos e irmãs (cinco biológicos e quatro adotados). Ao trabalhar, ela às vezes deixava as crianças trancadas em casa.\n[…]\nEm 1997, aos três anos, sentia dor de barriga, esbarrou na cuidadora enquanto esta esquentava água para o tratar, e a água quente queimou boa parte de seu corpo. Isaquias passou um mês no hospital, com um médico chegando a pensar que o menino iria morrer. Aos cinco anos, foi sequestrado. Aos dez, enquanto escalava uma árvore para ver uma cobra morta, caiu em cima de uma pedra, teve hemorragia interna e perdeu um rim.\n[…]\nA confederação atribuiu o atraso a questões burocráticas e disse que os atletas não ficaram sem assistência no período. No mesmo mês, Isaquias sofreu um acidente na BR-101 após buscar o irmão no aeroporto em Ilhéus. Ele estava no volante, cochilou e perdeu o controle do veículo, que caiu em uma ribanceira. Isaquias, o irmão e um amigo saíram sem ferimentos. O acidente só não teve consequências mais graves porque Isaquias dirigia em baixa velocidade por causa da neblina.\n[…]\nJesus Morlán - Treinador de canoagem que lapidou o talento do Isaquias Queiroz.\n[…]\nIsaquias Queiroz em Olympics.com"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Mondo Duplantis",
      "descricao": "Atleta sueco-americano do salto com vara, bicampeão olímpico (2020 e 2024) e recordista mundial."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Mondo é só o apelido do sueco Duplantis, bicampeão olímpico do salto com vara. Qual é o primeiro nome de batismo dele?",
    "resposta": "Armand",
    "distratores": [
      "Erik",
      "Lars",
      "Anton"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Armand_Duplantis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Armand_Duplantis",
        "situacao": "ok",
        "texto": "Armand Gustav Duplantis (Swedish pronunciation: [ˈɑ̌rman(d) ˈɡɵ̂sːtav dɵˈplânːtɪs]; born 10 November 1999), nicknamed \"Mondo\", is a Swedish and American pole vaulter who competes for Sweden. Duplantis holds the pole vaulting world record (6.31 m; 20 ft 8 in) and is the winner of ten senior global titles.\n[…]\nArmand Gustav Duplantis was born on 10 November 1999 into an athletic family in Lafayette, Louisiana, United States. His American father, Greg Duplantis, is a former pole vaulter with a personal best of 5.80 m (19 ft 1⁄2 in), while his Swedish mother, Helena (née Hedlund), is a former heptathlete and volleyball player. He is of Cajun ancestry through his father. Duplantis grew up primarily speaking English, but also learned Swedish as a second language.\n[…]\nDuplantis released his first single, \"Bop\", under the name Mondo on 28 February 2025, which he wrote with Emil Berg and Rasmus Wahlberg. The three have written around 30 songs together, with two or three additional singles planned for release later in the year. \"Bop\" charted at number 31 on the singles chart in Sweden. He released numerous other singles following his debut including \"4L\" in June 2025, \"Feelin' Myself\" in February 2026 and \"Location\" in April 2026.\n[…]\nIn March 2026, World Athletics appointed Duplantis to create an official anthem for the inaugural 2026 World Athletics Ultimate Championship.\n[…]\nArmand Duplantis at World Athletics\n[…]\nArmand Duplantis at European Athletics\n[…]\nArmand Duplantis at Diamond League\n[…]\nArmand Duplantis at Tilastopaja (registration required)\n[…]\nArmand Duplantis at Athletics Podium\n[…]\nArmand Duplantis at Olympics.com\n[…]\nArmand Duplantis at the Swedish Olympic Committee (in Swedish)\n[…]\nArmand Duplantis at Olympedia\n[…]\nArmand Duplantis at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Armand_Duplantis",
        "situacao": "ok",
        "texto": "Armand Gustav \"Mondo\" Duplantis (Lafayette, Estados Unidos, 10 de novembro de 1999) é um atleta sueco-americano, campeão olímpico, mundial e recordista mundial do salto com vara.\n[…]\nCampeão Mundial Juvenil em Cali 2015, na Colômbia, no ano seguinte foi medalha de bronze no Campeonato Mundial Junior de Atletismo de 2016 em Bydgoszcz na Polônia. Em abril de 2017, durante o torneio Nike Clyde Littlefield Texas Relays, em Austin, Texas, \"Mondo\" alcançou a marca de 5,90 m, estabelecendo novo recorde mundial júnior para o salto com vara, marca essa também 3 cm maior que o recorde sueco adulto.\n[…]\nEm 2021, nos Jogos de Tóquio 2020, adiados do ano anterior graças à pandemia de COVID-19, tornou-se campeão olímpico com um salto de 6,02 m. Ignorando a hipótese de primeiro garantir uma nova marca olímpica — 6,03 m — apenas um centímetro acima de seu salto, pertencente ao brasileiro Thiago Braz na Rio 2016, Duplantis tentou quebrar novamente seu recorde mundial, colocando a barra diretamente em 6,19 m, mas depois das três tentativas não foi bem-sucedido.\n[…]\nEm agosto de 2024, durante os Jogos de Paris 2024, quebrou o recorde olímpico do brasileiro Thiago Braz (6,03 m) e, mais uma vez, o recorde mundial, saltando a marca de 6,25 m. Com o salto, garantiu o bicampeonato olímpico. Três semanas depois no meeting da Silésia, etapa da Diamond League logo após os Jogos Olímpicos, ele quebrou o recorde mundial pela décima vez e pela terceira vez no ano, saltando 6,26 m.\n[…]\nLista dos campeões olímpicos de atletismo\n[…]\nArmand Duplantis no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Shelly-Ann Fraser-Pryce",
      "descricao": "Velocista jamaicana, bicampeã olímpica dos 100 metros (Pequim 2008 e Londres 2012)."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Baixinha e explosiva na largada, a velocista jamaicana Shelly-Ann Fraser-Pryce ganhou um apelido em inglês. O que ele significa?",
    "resposta": "Foguete de bolso",
    "distratores": [
      "Bala jamaicana",
      "Raio de Kingston",
      "Furacão caribenho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shelly-Ann_Fraser-Pryce"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shelly-Ann_Fraser-Pryce",
        "situacao": "ok",
        "texto": "Shelly-Ann Fraser-Pryce (née Fraser; born December 27, 1986) is a retired Jamaican track and field sprinter who competed in the 60 metres, 100 m and 200 m. She is widely regarded as one of the greatest sprinters of all time.\n[…]\nFraser-Pryce's trademark is her explosive starts, which earned her the nickname \"Pocket Rocket.\" Her style involves \"bolting to the lead\" within her first few strides, then \"maintaining her position through to the finish.” Jon Mulkeen of World Athletics described her starting technique as \"devastating...her best weapon,\" while sports writer Steve Landells declared, \"her ability to shift her legs over the first five metres remains the envy of the world.\" In a biomechanical analysis of her performance in the 2009 world 100 m final (when she ran 10.73 s), sports scientists Rolf Graubner and Eberhard Nixdorf calculated her 30 m split at 4.02 s, a level of acceleration consistent with a male 10.40 s runner.\n[…]\nFraser-Pryce has supported many causes throughout her career. She was named as the first UNICEF National Goodwill Ambassador for Jamaica in February 2010. That year, she was also named Grace Goodwill Ambassador for Peace in a partnership with Grace Foods and not-for-profit organisation PALS (Peace and Love in Society). She also created the Pocket Rocket Foundation, which supports high school athletes in financial need. She was named as the Laureus ambassador in April 2026.\n[…]\nShelly-Ann Fraser-Pryce at the Paris 2024 Summer Olympics (archived)\n[…]\nShelly-Ann Fraser-Pryce wins the women's 100 m final at the 2019 Doha World Championships in 10.71 s via World Athletics on YouTube\n[…]\nShelly-Ann Fraser-Pryce running 10.63 s at the JAAA/JOA Olympic Destiny Series via Television Jamaica on YouTube."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shelly-Ann_Fraser-Pryce",
        "situacao": "ok",
        "texto": "Shelly-Ann Fraser-Pryce OD (Kingston, 27 de dezembro de 1986) é uma velocista jamaicana, bicampeã olímpica e pentacampeã mundial dos 100 metros rasos. Entre Jogos Olímpicos, campeonatos mundiais e campeonatos mundiais em pista coberta, ela tem um total de vinte e cinco medalhas, quatorze delas de ouro.\n[…]\nChegou aos Jogos Olímpicos da Rio 2016 para a tentativa de igualar seu feito em Mundiais e tornar-se a primeira mulher a ser tricampeã olímpica olímpica nos 100 metros; entretanto, uma contusão intermitente que já tinha afetado seu desempenho nas seletivas olímpicas olímpicas da Jamaica, onde perdeu os 100 m para Elaine Thompson, impediu a terceira vitória, e Fraser-Pryce ficou apenas com a medalha de bronze. Conquistou mais uma medalha de prata integrando o revezamento 4x100 m jamaicano.\n[…]\nFraser-Pryce cumpriu uma suspensão de seis meses do atletismo após uma amostra de urina coletada no encontro da Liga de Diamante de Xangai em 2010 conter Oxicodona, um analgésico que não é considerado como melhorador de desempenho, nem o Código da WADA considerá-lo um agente de mascaramento para outras drogas.\n[…]\nConhecida na Jamaica e no meio do atletismo internacional pelo apelido \"Pocket Rocket\" (Foguete de Bolso), dado pelo comentarista e narrador jamaicano  Hubert Lawrence após seu primeiro ouro em Pequim pela sua baixa estatura e velocidade, ela gosta tanto dele que assim batizou a fundação sem fins lucrativos que mantém em Kingston, a Pocket Rocket Foundation, que financia os estudos para jovens e promissores atletas que, assim como ela, não puderam arcar com as despesas escolares.\n[…]\nCasada desde 2011 com o namorado da adolescência Jason Pryce – que a fez adicionar este sobrenome ao seu nome profissional no atletismo – em agosto de 2017 ela deu a luz ao primeiro filho, Zyon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Jogos Olímpicos da Antiguidade",
      "descricao": "Festival esportivo e religioso realizado no santuário de Olímpia, na Grécia Antiga."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na Grécia antiga, stadion, palavra que deu origem a estádio, era uma medida de comprimento e também o nome de quê, nos Jogos de Olímpia?",
    "resposta": "Uma corrida a pé",
    "distratores": [
      "Uma luta livre",
      "Uma corrida de bigas",
      "Um lançamento de disco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stadion_(running_race)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stadion_(running_race)",
        "situacao": "ok",
        "texto": "Stadion or stade (Ancient Greek: στάδιον) was an ancient running event and also the facility in which it took place, as part of Panhellenic Games including the Ancient Olympic Games. The event was one of the five major Pentathlon events and the premier event of the gymnikos agon (γυμνικὸς ἀγών \"nude competition\").\n[…]\nFrom the years 776 to 724 BC, the stadion was the only event at the Olympic Games. The victor (the first of whom was Coroebus of Elis) gave his name to the entire four-year Olympiad, allowing modern knowledge of nearly all of them.\n[…]\nThe stadion was named after the facility in which it took place. This word became stadium in Latin, which became the English \"stadium\". The race also gave its name to the unit of length, the stadion. There were other types of running events, but the stadion was the most prestigious; the winner was often considered to be the winner of an entire Games. Though a separate event, the stadion was also part of the ancient Pentathlon.\n[…]\nAt the Olympic Games, the stadion (facility) was big enough for 20 competitors, and the race was a sprint about 200 yards (180 m) long. The race began with a trumpet blow, with officials (the ἀγωνοθέται agonothetai) at the start to make sure there were no false starts. There were also officials at the end to decide on a winner and to make sure no one had cheated. If the officials decided there was a tie, the race would be re-run.\n[…]\nOlympic winners of the Stadion race"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dio_%28competi%C3%A7%C3%A3o%29",
        "situacao": "ok",
        "texto": "Estádio (em latim: Stadium; em grego: Σταδίων; romaniz.: Stadion) era a principal competição esportiva nos Jogos Olímpicos da Antiguidade. Era a única competição desde a primeira olimpíada até a décima terceira; na décima quarta olimpíada foi introduzida a corrida dupla. O vencedor da primeira corrida foi Corebo de Élis.\n[…]\nA distância percorrida pelos corredores era marcada por duas pedras, distantes entre si de 192,27 metros; esta distância tornou-se o padrão, no mundo grego, de medir distâncias, o estádio.\n[…]\nNas corridas de mulheres em Olímpia, na Heraia, a distância percorrida era reduzida em cerca de um sexto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Rebeca Andrade",
      "descricao": "Ginasta artística brasileira, campeã olímpica no salto em Tóquio 2020 e no solo em Paris 2024."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em Paris 2024, Rebeca Andrade virou a maior medalhista olímpica do Brasil, superando dois velejadores. Um era Torben Grael. Quem era o outro?",
    "resposta": "Robert Scheidt",
    "distratores": [
      "Lars Grael",
      "Bruno Prada",
      "Kahena Kunze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rebeca_Andrade",
      "https://pt.wikipedia.org/wiki/Rebeca_Andrade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Brazilian Portuguese pronunciation: [ʁeˈbɛkɐ ʁoˈdɾiɡiz dʒ(i)ɐ̃ˈdɾadʒ(i)]; born 8 May 1999) is a Brazilian artistic gymnast. Having won a total of six Olympic and ten World medals, she is the most decorated Brazilian and Latin American gymnast of all time, as well as the most decorated Brazilian Olympian in any discipline.\n[…]\nAt the 2024 Paris Olympics, Andrade and the Brazilian team won the bronze medal in the team all-around final, the first ever for the country. She also won the silver medal in the individual all-around final. On the first day of apparatus finals, Andrade won the silver medal on vault. Andrade then competed during the third day of apparatus finals on beam and floor, placing fourth on beam and winning gold on floor.\n[…]\nAndrade's collective six medals from the 2020 and 2024 Olympics make her the most decorated Brazilian Olympian in any discipline, a record previously held by sailors Robert Scheidt and Torben Grael.\n[…]\nAndrade achieved celebrity status in Brazil after her success at the 2020 Summer Olympic Games. Three months after the Games in October 2021, she appeared on the cover of Vogue Brasil. She was also awarded the Brazil Olympic Prize which recognized her as the best Brazilian female athlete of the year from 2021 to 2024.\n[…]\nIn December 2024, Rebeca Andrade was included on the BBC's 100 Women list.\n[…]\nIn April 2025, Andrade won the Laureus World Sports Award for Comeback of the Year, for her resilience in overcoming multiple injuries, including three ACL tears, to become Brazil's most decorated Olympian in history at Paris 2024.\n[…]\nRebeca Andrade at World Gymnastics\n[…]\nRebeca Andrade at Olympics.com\n[…]\nRebeca Andrade at the Brazilian Olympic Committee (in Portuguese)\n[…]\nRebeca Andrade at Olympedia\n[…]\nRebeca Andrade at InterSportStats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        "situacao": "ok",
        "texto": "Rebeca Rodrigues de Andrade (Guarulhos, 8 de maio de 1999) é uma ginasta artística brasileira, bicampeã olímpica e a maior medalhista da história do Brasil nos Jogos Olímpicos, com 6 medalhas (2 ouros, 3 pratas e 1 bronze). Também foi bicampeã mundial no salto (2021 e 2023) e campeã mundial individual geral de 2022.\n[…]\nApós as Olimpíadas, Andrade competiu no Campeonato Brasileiro em novembro. A atleta ajudou a equipe do Flamengo na conquista do ouro por equipes. Nas disputas individuais, conquistou a medalha de ouro no individual geral, barras assimétricas e trave de equilíbrio, e a medalha de prata no solo, ficando atrás de Thais Fidelis.\n[…]\nOutro feito histórico foi garantido na final do salto, disputa na qual Rebeca foi medalhista de ouro, tornando-se a primeira mulher ginasta campeã olímpica do Brasil e a primeira atleta brasileira com duas medalhas em uma mesma Olímpiada. Rebeca foi confirmada como porta-bandeira da delegação brasileira na cerimônia de encerramento dos Jogos de Tóquio.\n[…]\nDurante os Jogos Olímpicos de Verão de 2024, juntamente com as atletas Flávia Saraiva, Jade Barbosa, Lorrane Oliveira e Júlia Soares, Rebeca fez parte da equipe que conquistou pela primeira vez para o Brasil uma medalha na categoria por equipes femininas nos Jogos Olímpicos, além de ter conquistado a medalha de prata na categoria individual geral feminino em uma disputa acirrada com Simone Biles, que ficou com o ouro.\n[…]\nTambém conquistou uma medalha de prata no Salto. A quarta medalha olímpica fez Andrade superar Mayra Aguiar e Hélia Souza como a atleta brasileira feminina com mais pódios olímpicos. Após um quarto lugar na trave, Andrade conquistou a medalha de ouro na categoria Solo, e o sexto pódio a tornou a maior medalhista brasileira da história.\n[…]\nRebeca Andrade no Instagram\n[…]\nRebeca Andrade em Olympics.com"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Abebe Bikila",
      "descricao": "Maratonista etíope, campeão olímpico da maratona em Roma 1960 e Tóquio 1964."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Antes da glória olímpica, o maratonista Abebe Bikila era soldado da guarda imperial de qual imperador da Etiópia?",
    "resposta": "Haile Selassie",
    "distratores": [
      "Menelik II",
      "Tewodros II",
      "Yohannes IV"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Abebe_Bikila"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abebe_Bikila",
        "situacao": "ok",
        "texto": "Shambel Abebe Bikila (Amharic: ሻምበል አበበ ቢቂላ; August 7, 1932 – October 25, 1973) was an Ethiopian marathon runner who was a back-to-back Olympic marathon champion. He was the first Ethiopian Olympic gold medalist, winning his first gold medal at the 1960 Summer Olympics in Rome while running barefoot. At the 1964 Tokyo Olympics, he won his second gold medal, making him the first athlete to successf\n[…]\nAbebe returned to his homeland as a hero. He was greeted by a large crowd, many dignitaries and the commander of the Imperial Guard, Brigadier-General Mengistu Neway. Abebe was paraded through the streets of Addis Ababa along a procession route lined with thousands of people and presented to Emperor Haile Selassie. The Emperor awarded him the Star of Ethiopia and promoted him to the rank of asiraleqa (corporal).\n[…]\nOn December 13, 1960, while Haile Selassie was on a state visit to Brazil, Imperial Guard forces led by Mengistu Neway began an unsuccessful coup and briefly proclaimed Selassie's eldest son Asfaw Wossen Taffari emperor. Fighting took place in the heart of Addis Ababa, shells detonated in the Jubilee Palace, and many of those closest to the Emperor were killed. Although Abebe was not directly involved, he was briefly arrested and questioned.\n[…]\nOn April 21, 1965, as part of the opening ceremonies for the second season of the 1964–1965 New York World's Fair, Abebe and fellow athlete and Imperial Guardsman Mamo Wolde, ran a ceremonial half-marathon from the Arsenal in Central Park (at 64th Street and Fifth Avenue in Manhattan) to the Singer Bowl at the fair. They carried a parchment scroll with greetings from Haile Selassie.\n[…]\nAbebe Bikila at Olympics.comAbebe Bikila at Olympic.org (archived)\n[…]\nAbebe Bikila at Olympedia\n[…]\nVideo tribute to Abebe Bikila on YouTube\n[…]\nVideo footage of Abebe Bikila on YouTube at the 1960 Summer Olympics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abebe_Bikila",
        "situacao": "ok",
        "texto": "Abebe Bikila (Jato, 7 de agosto de 1932 – Adis Abeba, 25 de outubro de 1973) foi um maratonista etíope, filho de um pastor de ovelhas do interior da Etiópia e capitão da guarda real do imperador Hailé Selassié. Foi o primeiro homem a vencer duas maratonas olímpicas e é considerado por muitos especialistas como o maior maratonista de todos os tempos. Em 2012, foi imortalizado no Hall da Fama do atl\n[…]\nAbebe Bikila nasceu no mesmo dia da abertura dos Jogos Olímpicos de Los Angeles de 1932, na pequena vila de Jato, cerca de oito quilômetros distante da cidade de Mendida e a três horas de viagem de automóvel de Adis Abeba, capital da Etiópia. Filho de um humilde pastor, resolveu entrar para a guarda imperial etíope, para ajudar a melhorar as condições de vida da família e deixou sua vila para andar até a capital do país para alistamento.\n[…]\nEm 1960, Bikila foi incluído na equipe de atletismo apenas no último momento, quando o avião já se preparava para partir para Roma, no lugar de outro atleta, Wami Biratu, que havia quebrado o tornozelo durante uma partida de futebol. Niskanen resolveu inscrever Bikila e Abebe Wakgira na disputa da maratona.\n[…]\nBikila voltou à Etiópia como herói nacional. No ditado popular, a frase mais falada na época era que 'foram necessários um milhão de soldados italianos para invadir a Etiópia, mas apenas um soldado etíope para conquistar Roma\". Foi promovido a cabo e condecorado pelo imperador Haile Selassie.\n[…]\nBikila retornou novamente como herói nacional à Etiópia e foi novamente promovido pelo imperador, ganhando de presente um carro próprio, um fusca.\n[…]\nAbebe Bikila morreu aos 41 anos, em 25 de outubro de 1973, de hemorragia cerebral, complicação neurológica decorrente de seu acidente quatro anos antes. Uma multidão de 75 mil pessoas acompanhou o enterro de seu herói nacional e o imperador Selassie declarou um dia de luto oficial na Etiópia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Jim Thorpe",
      "descricao": "Atleta americano, campeão do pentatlo e do decatlo nos Jogos de Estocolmo 1912."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Depois do ouro no atletismo em 1912, Jim Thorpe jogou como profissional no beisebol e virou astro de que outro esporte?",
    "resposta": "Futebol americano",
    "distratores": [
      "Basquete",
      "Hóquei no gelo",
      "Boxe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jim_Thorpe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jim_Thorpe",
        "situacao": "ok",
        "texto": "James Francis Thorpe (Meskwaki: Wa-Tho-Huk; May 22 or 28, 1887 – March 28, 1953) was an American athlete who won Olympic gold medals and played professional football, baseball, and basketball. A citizen of the Sac and Fox Nation, he was the first Native American to win a gold medal for the United States in the Olympics.\n[…]\nAfter his victories at the Olympic Games in Sweden, on September 2, 1912, Thorpe returned to Celtic Park, the home of the Irish American Athletic Club, in Queens, New York (where he had qualified four months earlier for the Olympic Games), to compete in the Amateur Athletic Union's All-Around Championship. Competing against Bruno Brodd of the Irish American Athletic Club and John L.\n[…]\nIn 1910, Thorpe had the unusual status of a sought-after free agent at the major league level during the era of the reserve clause, because the minor league team that last held his contract had disbanded that year, so he was free to choose which baseball team to play for. In January 1913, he turned down a starting position with the St. Louis Browns, then at the bottom of the American League. Thorpe signed with the New York Giants baseball club in 1913, the defending 1912 National League champion.\n[…]\nMDJ first-team All-American (1912)\n[…]\nIn July 2020, a petition from Bright Path Strong began circulating that called upon the IOC to reinstate Thorpe as the sole winner in his events in the 1912 Olympics. It was backed by Pictureworks Entertainment, which is making a film about Thorpe. The petition was supported by another Native American Olympian, Billy Mills, who won a gold medal in the 10,000 meters at the 1964 Tokyo Games.\n[…]\nBuford, Kate (2012). Native American Son: the life and sporting legend of Jim Thorpe . Lincoln, Nebraska: University of Nebraska Press. ISBN 978-0-8032-4089-6. OCLC 756837088."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jim_Thorpe",
        "situacao": "ok",
        "texto": "Jacobus Franciscus Thorpe, conhecido como Jim Thorpe (Prague, 28 de maio de 1887 – Lomita, 28 de março de 1953), foi um atleta norte-americano da primeira metade do Século XX.\n[…]\nFoi um dos atletas mais versáteis do século XX; praticava basquete, handebol, hóquei, arco e flecha, tiro, natação, canoagem, tênis, squash, hipismo, futebol americano e beisebol, tendo sido considerado um dos maiores desportistas do século.\n[…]\nEm 1904, volta a morar com seu pai e dá início aos estudos em uma escola no estado da Pensilvânia na localidade de Carlisle, onde começa a praticar o futebol americano. Nesse mesmo ano, devido a morte de seu pai, abandona a escola e começa a trabalhar em uma granja durante um período, para depois regressar a Carlisle no ano de 1907 onde começa sua carreira de atleta.\n[…]\nEm 1911 passou a disputar campeonatos de futebol americano onde consegue projeção nacional ao vencer por sua escola o \"campeonato nacional colegial\" de futebol americano.\n[…]\nEntre os anos de 1915 e 1920 consagrou-se como um dos maiores atletas do futebol americano atuando pelo \"Canton Bulldogs\", onde se sagraria \"campeão mundial\" em 1916, 1917 e 1919. Em 1920, quando ainda defendia as cores dos \"Bulldogs\", foi eleito o primeiro presidente da \"Associação de Profissionais de Futebol Americano\" dos EUA. Até 1928, defendeu várias equipes, decidindo-se finalmente pela aposentadoria quando atuava pelos \"Chicago Cardinals\" (atual Arizona Cardinals).\n[…]\nExiste uma localidade denominada Jim Thorpe no estado da Pensilvânia em homenagem ao atleta.\n[…]\nLista dos campeões olímpicos de atletismo\n[…]\n«Jim Thorpe Association» (em inglês) (em inglês)\n[…]\nJim Thorpe's U.S. Olympic Team bio(em inglês)\n[…]\nJim Thorpe no IMDB",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Muhammad Ali",
      "descricao": "Boxeador americano, campeão olímpico em Roma 1960 como Cassius Clay e depois campeão mundial dos pesos-pesados."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Campeão olímpico de boxe em Roma 1960, ainda com o nome Cassius Clay, Muhammad Ali voltou aos Jogos em Atlanta 1996 para fazer o quê?",
    "resposta": "Acender a pira olímpica",
    "distratores": [
      "Lutar uma exibição",
      "Carregar a bandeira olímpica",
      "Fazer o juramento"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Muhammad_Ali"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Muhammad_Ali",
        "situacao": "ok",
        "texto": "Muhammad Ali ( ah-LEE; born Cassius Marcellus Clay Jr.; January 17, 1942 – June 3, 2016) was an American professional boxer and activist. A global cultural icon, widely known by the nickname \"the Greatest\", he is often regarded as the greatest heavyweight boxer of all time. He held the Ring magazine heavyweight title from 1964 to 1970, was the undisputed champion from 1974 to 1978, and was the WBA\n[…]\nSoon after the Liston fight, Clay changed his name to Cassius X, and then later to Muhammad Ali upon converting to the Nation of Islam.\n[…]\nThis led to a story in The Miami Herald just before the fight disclosing that Clay had joined the Nation of Islam, which nearly caused the bout to be canceled. The article quoted Cassius Clay Sr. as saying that his son had joined the Black Muslims when he was 18.\n[…]\nIn 1996, he lit the flame at the 1996 Summer Olympics in Atlanta, Georgia. It was watched by an estimated 3.5 billion viewers worldwide. During halftime at the Men's Gold Medal Basketball tournament, the International Olympic Committee presented Ali with a new gold medal to replace the medal he had received at the 1960 Summer Olympic Games in Rome. Although it was rumored that Ali had thrown it into the Ohio River years prior, Ali confirmed to TV executive Dick Ebersol that \"he'd simply lost\" it.\n[…]\nAs a world champion boxer, activist and pop culture icon, Ali was the subject of numerous creative works including books, films, music, video games, TV shows, and other. Muhammad Ali was often dubbed the world's \"most famous\" person in the media. Several of his fights were watched by an estimated 1–2 billion viewers between 1974 and 1980, and his lighting of the torch at the 1996 Atlanta Olympics was watched by an estimated 3.5 billion viewers.\n[…]\nCassius Clay Guilty (1967), Texas Archive of the Moving Image\n[…]\n\"Cassius Clay: Before He Was Ali\". Life. Archived from the original on October 21, 2009."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Muhammad_Ali",
        "situacao": "ok",
        "texto": "Muhammad Ali-Haj, nascido Cassius Marcellus Clay Jr. (Louisville, 17 de janeiro de 1942 – Scottsdale, 3 de junho de 2016), foi um desportista pugilista estadunidense. É considerado um dos melhores da história do esporte, eleito \"O Desportista do Século\" pela revista estadunidense Sports Illustrated em 1999.\n[…]\nClay ganhou seis títulos Golden Gloves de Kentucky, dois títulos Golden Gloves nacionais e o título nacional do Amateur Athletic Union, e a medalha de ouro do Meio-Pesado nas Olimpíadas de Verão de 1960, em Roma. Conquistou o título mundial de campeão dos pesos-pesados, ao derrotar Sonny Liston em 1964. Perdeu o título mundial em 1967 e foi proibido de atuar por três anos e meio por ter se recusado a lutar no Vietnã. Recuperou o posto ao ser reabilitado, mas logo perdeu para Joe Frazier.\n[…]\nO retorno de Muhammad Ali aos ringues ocorreu no dia 25 de outubro de 1970, após 43 meses de afastamento imposto pela sua recusa em integrar o exército dos Estados Unidos e por sua subsequente suspensão pela New York State Athletic Commission (NYSAC). A luta, promovida sob o nome de \"Return of the Champion\" (O Retorno do Campeão), foi realizada em Atlanta, Geórgia, e viabilizada graças à influência do senador estadual Leroy Johnson, que conseguiu garantir a licença esportiva para o pugilista.\n[…]\nAo sair vitorioso, Ali provou que ainda era um boxeador de elite e que estava pronto para desafiar o campeão Joe Frazier, enquanto Atlanta consolidou sua imagem perante o mundo como a cidade que permitiu a volta de \"The Greatest\"\n[…]\nPor diversas vezes, anunciou-se a luta entre Ali, o campeão mundial dos profissionais, contra o cubano Teófilo Stevenson, campeão mundial dos amadores e campeão olímpico, mas, devido a problemas técnicos e políticos, essa luta jamais ocorreu.\n[…]\nWLRN: Muhammad Ali: Made in Miami",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Johnny Weissmuller",
      "descricao": "Nadador americano, cinco vezes campeão olímpico em 1924 e 1928, depois ator de cinema."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Cinco vezes campeão olímpico de natação nos anos vinte, o americano Johnny Weissmuller ficou famoso no cinema interpretando que personagem?",
    "resposta": "Tarzan",
    "distratores": [
      "Zorro",
      "Hércules",
      "Flash Gordon"
    ],
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
    "indice": 26,
    "ancora": {
      "nome": "Pierre de Coubertin",
      "descricao": "Pedagogo francês, fundador do Comitê Olímpico Internacional e idealizador dos Jogos Olímpicos modernos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Sob pseudônimo, Pierre de Coubertin ganhou uma medalha de ouro nos Jogos de Estocolmo 1912 com o poema Ode ao Esporte. Em que competição?",
    "resposta": "Literatura",
    "distratores": [
      "Música",
      "Pintura",
      "Escultura"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pierre_de_Coubertin",
      "https://en.wikipedia.org/wiki/Art_competitions_at_the_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pierre_de_Coubertin",
        "situacao": "ok",
        "texto": "Charles Pierre de Frédy, Baron de Coubertin (French: [ʃaʁl pjɛʁ də fʁedi baʁɔ̃ də kubɛʁtɛ̃]; born Pierre de Frédy; 1 January 1863 – 2 September 1937), also known as Pierre de Coubertin and Baron de Coubertin, was a French educator and historian, co-founder of the International Olympic Committee (IOC), and its second president. He is known as the father of the modern Olympic Games. He was particula\n[…]\nAs an aristocrat, Coubertin had a number of career paths from which to choose, including potentially prominent roles in the military or politics but he chose instead to pursue a career as an intellectual, studying and later writing on a broad range of topics, including education, history, literature and sociology.\n[…]\nCoubertin created the modern pentathlon for the 1912 Olympics, and subsequently stepped down from his IOC presidency after the 1924 Olympics in Paris, which proved much more successful than the first attempt in that city in 1900. He was succeeded as president, in 1925, by Belgian Henri de Baillet-Latour. During his tenure as president, Coubertin finally succeeded in having art competitions included as part of the Olympic Games, something he had advocated for since the founding of the IOC.\n[…]\nCoubertin won the gold medal for literature at the 1912 Summer Olympics for his poem \"Ode to Sport,\" which was the first time the arts competitions were included at the Games. Coubertin entered the poem under the pseudonym of Georges Hohrod and M. Eschbach which were the names of villages close to his wife's place of birth. Below is an excerpt:  O Sport, delight of the Gods, distillation of life!\n[…]\nThe Pierre de Coubertin World Trophy given by the International Fair Play Committee has been awarded since 1965 for gestures of fair play in which an athlete impedes their performance to aid a fellow competitor.\n[…]\nPierre de Coubertin at the World Rugby Hall of Fame"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Art_competitions_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Art competitions formed part of the modern Olympic Games during its early years, from 1912 to 1948. The competitions were part of the original intention of the Olympic Movement's founder, Pierre de Frédy, Baron de Coubertin. Medals were awarded for works of art inspired by sport, divided into five categories: architecture, literature, music, painting, and sculpture, which led to the events' initia\n[…]\nSupport for the art competitions grew, and in May 1906, Baron de Coubertin organised a meeting in Paris for both IOC members and representatives of artists' organisations. The meeting ended with a proposal to the IOC to organise artistic competitions at the Olympic Games in five areas (architecture, literature, music, painting, and sculpture). The works of art entered had to be inspired by sports.\n[…]\nBecause of the requirement that literary entries had to be about sport, the competition failed to attract most of the leading poets and writers of the time. Coubertin later wrote that most writers were “wholly unfamiliar with the joys of violent muscular effort” and that they were thus “incapable of describing them for a public that was not very familiar with them either”.\n[…]\nAt the final Olympic art competition, the three categories were applied arts and crafts, engravings/etchings, and oils/water colours.\n[…]\nTwo presidents of the International Olympic Committee have also been among the entrants in the Olympic art competitions. In 1912 Pierre de Coubertin, under the pseudonym \"Georges Hohrod and Martin Eschbach\", entered Ode to sport, which won a gold medal in literature. Avery Brundage, who competed as an athlete at the 1912 Games, entered literary works at the 1932 and 1936 Olympics, earning an honorary mention in 1932. He later served as the IOC's president from 1952 to 1972.\n[…]\nStockholm 1912 (5)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pierre_de_Coubertin",
        "situacao": "ok",
        "texto": "Charles Pierre Fredy de Coubertin (Paris, 1 de janeiro de 1863 — Genebra, 2 de setembro de 1937), mais conhecido pelo seu título nobiliárquico de Barão de Coubertin, foi um pedagogo e historiador francês, que ficou para a história como o fundador dos Jogos Olímpicos da era moderna.\n[…]\nA certo ponto, após ter idealizado uma competição internacional para promover o atletismo, e tirando partido de um crescente interesse internacional nos Jogos Olímpicos da Antiguidade, alimentado por descobertas arqueológicas nas ruínas de Olímpia, o barão de Coubertin concebeu um plano para fazer reviver os Jogos Olímpicos.\n[…]\nApós os Jogos de 1896, Demetrius Vikelas abandonou o posto de presidente do COI e Pierre de Coubertin tomou o seu lugar na frente da organização. Apesar do sucesso dos primeiros jogos, o Movimento Olímpico enfrentaria tempos difíceis, com os Jogos Olímpicos de 1900 e de 1904 a serem completamente obscurecidos pelas exposições mundiais em que foram integrados, e passando completamente despercebidos.\n[…]\nPierre de Coubertin abandonou a presidência do COI após os Jogos Olímpicos de Verão de 1924, realizados em Paris, a sua cidade natal, e com um sucesso muito maior que a anterior edição de 1900. Foi sucedido no cargo por Henri de Baillet-Latour.\n[…]\nO que Coubertin viu nos campos de jogos das escolas inglesas que visitou foi como \"o esporte organizado pode criar força moral e social\". Os jogos organizados não só ajudaram a equilibrar a mente e o corpo, como também evitaram que o tempo fosse desperdiçado de outras maneiras. Desenvolvida pela primeira vez pelos gregos antigos, era uma abordagem à educação que ele achava que o resto do mundo havia esquecido e a cujo renascimento ele deveria dedicar o resto de sua vida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Estádio Olímpico de Helsinque",
      "descricao": "Estádio com torre, na Finlândia, palco central dos Jogos Olímpicos de 1952."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A torre do Estádio Olímpico de Helsinque mede setenta e dois metros e setenta e um centímetros, a marca de um ouro finlandês em 1932. Em que prova?",
    "resposta": "Lançamento de dardo",
    "distratores": [
      "Lançamento de disco",
      "Lançamento de martelo",
      "Arremesso de peso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Helsinki_Olympic_Stadium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Helsinki_Olympic_Stadium",
        "situacao": "ok",
        "texto": "The Helsinki Olympic Stadium (Finnish: Helsingin Olympiastadion; Swedish: Helsingfors Olympiastadion), located in the Töölö district about 2.3 kilometres (1.4 mi) from the centre of the Finnish capital Helsinki, is the largest stadium in the country. The stadium is best known for being the centre of activities in the 1952 Summer Olympics. During those games, it hosted athletics, equestrian show ju\n[…]\nIn 2006, an American TV series, The Amazing Race 10, had one of its episodes ending at The Olympic Stadium Tower. As a task, teams had to do a face-first rappel (known as the Angel Dive) down the Helsinki Olympic Tower.\n[…]\nSince March 2007, a Eurasian eagle-owl has been spotted living in and around the stadium. On 6 June 2007, during a Euro 2008 qualifying match, the owl delayed play by ten minutes after perching on a goalpost. Due to strict conservation laws, no physical attempt to persuade the bird to leave were allowed. The owl was later christened Bubi and was named as Helsinki's Resident of the Year. The Belgians quite unexpectedly lost the match to Finland by 2–0.\n[…]\nThe 50th anniversary of the Helsinki Olympic Games hosted in the Helsinki Olympic Stadium was the main motif for one of the first Finnish euro silver commemorative coins, the 50th anniversary of the Helsinki Olympic Games commemorative coin, minted in 2002. On the reverse, a view of the Helsinki Olympic Stadium can be seen. On the right, the 500 markka commemorative coin minted in 1952 celebrating the occasion is depicted.\n[…]\nThe tower of the stadium, a distinct landmark with a height of 72.71 metres (238.5 ft), a measurement of the length of the gold-medal win by Matti Järvinen in javelin throw of 1932 Summer Olympics.\n[…]\n1952 Summer Olympics\n[…]\nMedia related to Helsingin olympiastadion at Wikimedia Commons\n[…]\n1952 Summer Olympics official report. pp. 44–7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dio_Ol%C3%ADmpico_de_Helsinque",
        "situacao": "ok",
        "texto": "O Estádio Olímpico de Helsinque (Helsingin Olympiastadion em finlandês) é um estádio localizado a dois quilometros do centro de Helsinque, Finlândia. É o maior estádio do país, com 40 000 lugares.\n[…]\nEm frente ao estádio encontra-se uma estátua em homenagem ao corredor Paavo Nurmi, que conquistou 12 medalhas (9 de ouro) em Olimpíadas. Essa estátua inspirou o cartaz oficial dos Jogos. Nurmi também foi um dos que trouxeram a tocha olímpica para a Cerimônia de Abertura dos Jogos de 1952.\n[…]\nA torre do estádio tem 72 metros de altura e é aberta aos visitantes, oferecendo uma bela visão da cidade de Helsinque.\n[…]\nA Fundação Stadium, estabelecido 1927, começou a implementar esse sonho, e sua primeira e principal tarefa era conseguir um estádio construído, o que permitiria que Helsinki para sediar os Jogos Olímpicos de Verão. A construção começou em 12 de fevereiro de 1934, e do Estádio foi inaugurado em 12 de junho de 1938. Desde a sua conclusão o Estádio passou por oito fases importantes do desenvolvimento. O mais importante foi a modernização total de 1990-1994.\n[…]\nA arena Stadium, que tem sido descrito como o mais bonito do mundo, é o produto de um concurso de arquitectura. Arhcitects Sr. Yrjö Lindegren e Mr. Toivo Jäntti venceu a competição com o seu design claramente alinhado estilo funcionalista. Os eventos mais importantes na vida do Estádio Olímpico de Helsínquia foram os Jogos Olímpicos XV, 19. Julho-3. De agosto de 1952.\n[…]\nNa abertura dos Jogos Olímpicos o recorde espectador do estádio foi atingido 70 435 espectadores e no ano olímpico ainda é um evento que reuniu a maioria dos espectadores. Ano todo 1952 um total de 850 000 espectadores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Cubo d'Água",
      "descricao": "Centro Nacional de Natação de Pequim, com fachada de bolhas azuis, construído para os Jogos Olímpicos de 2008."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O Cubo d'Água, palco da natação em Pequim 2008, foi adaptado para os Jogos de Inverno de 2022 e recebeu qual esporte?",
    "resposta": "Curling",
    "distratores": [
      "Hóquei no gelo",
      "Patinação artística",
      "Patinação de velocidade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beijing_National_Aquatics_Center"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beijing_National_Aquatics_Center",
        "situacao": "ok",
        "texto": "The Water Cube (水立方), fully a.k.a. the National Aquatics Centre (国家游泳中心), is a swimming center at the Olympic Green in Chaoyang, Beijing, China.\n[…]\nThe Water Cube was originally constructed to host the aquatics competitions at the 2008 Summer Olympics and Paralympics. During the 2008 Olympics—where it hosted diving, swimming and synchronized swimming events—25 world records were broken in this facility. In July 2010, a renovation of the facility was completed, which included the addition of a 12,000 m2 (130,000 sq ft) public water park.\n[…]\nThe structure had a capacity of 17,000 during the games. It also has a total land surface of 65,000 square meters and covers a total of 32,000 m2 (7.9 acres). Although called the Water Cube, the aquatic center is really a rectangular box (cuboid) 178 meters (584 ft) square and 31 meters (102 ft) high. The building's popularity has spawned many copycat structures throughout China.\n[…]\nThe Water Cube hosted the curling events during the 2022 Winter Olympics and Paralympics, a configuration nicknamed the \"Ice Cube\". After Beijing was awarded the Games, work began on renovations to the facility to allow it to be converted to a curling rink, including the addition of ice-making equipment and other necessary climate control and monitoring systems.\n[…]\nIt hosted its first event in this configuration, the China Junior Curling Open, in December 2019, just two years prior to the 2022 Winter Olympics.\n[…]\nCurling at the 2022 Winter Olympics\n[…]\nWheelchair curling at the 2022 Winter Paralympics\n[…]\nNational Aquatics Center (Water Cube) Archived March 6, 2016, at the Wayback Machine\n[…]\nThe Water Cube's creation process"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Centro_Aqu%C3%A1tico_Nacional_de_Pequim",
        "situacao": "ok",
        "texto": "O Centro Aquático Nacional de Pequim (popularmente conhecido como Cubo d'Água) é um centro aquático projetado pelo arquiteto John Pauline, que foi construído próximo ao Estádio Nacional de Pequim, no Olympic Green (parque que concentrou as principais sedes dos jogos) para os Jogos Olímpicos de Verão de 2008. A construção foi iniciada em 24 de dezembro de 2003.\n[…]\nAo olhar para cima, a sensação de quem entra no Centro Aquático Nacional é de estar debaixo d'água. Revestido de três mil gigantescas bolhas de plástico translúcidos e ultra-resistente, o estileno tetrafluoretileno, o centro foi construído para sediar competições da Olimpíada de Pequim. À noite, seu sistema de iluminação capaz de emitir 16 milhões de tonalidades de cores, faz com que ele, sozinho, vire um espetáculo.\n[…]\nO Cubo D'Água foi reformado após a realização dos Jogos Olimpicos para virar um moderno parque aquático. A mesma foi reinaugurada em Agosto de 2010 e se tornou o maior parque aquático da Ásia.\n[…]\nO Centro Aquático recebeu as competições de natação, saltos ornamentais e nado sincronizado durante os Jogos. As competições de pólo aquático, que seriam realizadas neste local, foram transferidas para o Parque Aquático Yingdong. Serviu para as competições de curling nos Jogos Olímpicos de Inverno de 2022, que também aconteceram em Pequim. Para receber o evento, as piscinas foram esvaziadas e substituídas por pisos de gelo, com o local sendo conhecido como Arena Cubo de Gelo.\n[…]\nNatação nos Jogos Olímpicos de Verão de 2008\n[…]\nSaltos ornamentais nos Jogos Olímpicos de Verão de 2008\n[…]\nNado sincronizado nos Jogos Olímpicos de Verão de 2008\n[…]\nCurling nos Jogos Olímpicos de Inverno de 2022\n[…]\nPágina do Centro no portal oficial dos Jogos (em inglês)\n[…]\nCubo d'Água no Google Maps",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Grand Palais",
      "descricao": "Salão de exposições e museu de Paris, com grande cúpula de vidro e ferro, construído para a Exposição Universal de 1900."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em Paris 2024, sob a cúpula de vidro do Grand Palais, foram disputadas a esgrima e qual outra modalidade de combate?",
    "resposta": "Taekwondo",
    "distratores": [
      "Judô",
      "Boxe",
      "Luta olímpica"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Palais",
      "https://en.wikipedia.org/wiki/Venues_of_the_2024_Summer_Olympics_and_Paralympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Palais",
        "situacao": "ok",
        "texto": "The Grand Palais des Champs-Élysées (French pronunciation: [ɡʁɑ̃ palɛ de ʃɑ̃z‿elize]; English: Great Palace of the Champs-Élysées), commonly known as the Grand Palais, is a historic site, exhibition hall and museum complex located in the 8th arrondissement of Paris between the Champs-Élysées and the Seine, France, on Avenue Winston-Churchill.\n[…]\nIt was used during the final stage of the Tour de France in 2017, as part of the promotion for Paris' 2024 Summer Olympics bid. The riders rode through the Palais en route to the Champs Élysées.\n[…]\nThe Grand Palais temporarily closed to the public in March 2021 for significant renovation works. It reopened in time for the Paris 2024 Olympic Games, where it hosted the fencing and taekwondo events. While it was closed, exhibitions that would otherwise be held there were hosted by other locations, such as the Grand Palais Éphémère and the Musée du Luxembourg in Paris and the Palais de la Bourse in Marseille.\n[…]\nIn October 2024, after four years of closure, the Grand Palais reopened its doors to the public, once again hosting art fairs, including Art Basel.\n[…]\nThe use of the nave was interrupted for twelve years. Six years during which the Ministry of Culture and Paris City Council were unable to agree on the division of responsibilities for saving the Grand Palais, which continued to deteriorate. This procrastination is linked not only to the relocation and rehousing of the administrations occupying the premises, but also to the substantial sums required for its restoration and upkeep.\n[…]\nFélix Charpentier, maker of a Grand Palais sculpture.\n[…]\nRéunion des Musées Nationaux et du Grand Palais des Champs Elysées (Rmn-GP), Official Grand Palais website\n[…]\nThe Grand Palais, current photographs and photographs from the 1900s.\n[…]\nPhotos from the rooftops of the Grand Palais\n[…]\nGrand Palais, The Parisian Guide"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Venues_of_the_2024_Summer_Olympics_and_Paralympics",
        "situacao": "ok",
        "texto": "The 2024 Summer Olympics (French: Les Jeux Olympiques d'été de 2024), officially the Games of the XXXIII Olympiad (French: Jeux de la XXXIIIe olympiade de l'ère moderne) and branded as Paris 2024, were an international multi-sport event held in France from 26 July to 11 August 2024, with several events starting from 24 July.\n[…]\nParis 2024 was the first Olympics in history to reach full gender parity on the field of play, with equal numbers of male and female athletes.\n[…]\nThe emblem for Paris 2024 was considered the biggest new logo release of 2019 by many design magazines. An Opinion Way survey showed that 83 per cent of French people say they liked the new Paris 2024 Games emblem. Approval ratings were high, with 82 per cent of those surveyed finding it aesthetically appealing and 78 per cent finding it to be creative. It was met with some mockery on social media, one user commenting that the logo \"would be better suited to a dating site or a hair salon\".\n[…]\nIn April 2024, the official Olympic video game titled Olympics Go! Paris 2024 was announced for release in June by Animoca Brands on Android, iOS, and Microsoft Windows devices. The 2024 Summer Olympics became the first Summer Olympics in over 30 years to not have an official console video game.\n[…]\nA portion of the opening ceremony of the Paris 2024 Olympics sparked significant controversy worldwide for its inclusion of a reenactment of the feast of the Gods, which depicts various Greek gods partaking in a banquet at Mount Olympus. The performance faced heavy backlash from Christian and conservative groups, who accused the performance representing the feast of Dionysus as mocking Leonardo da Vinci's The Last Supper.\n[…]\nDoping suspensions at Paris 2024\n[…]\nList of LGBTQ Summer Olympians (2024–present)\n[…]\n\"Paris 2024\". Olympics.com. International Olympic Committee."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grand_Palais",
        "situacao": "ok",
        "texto": "O Grand Palais des Beaux-Arts, também chamado de Grand Palais des Champs-Elysées e popularmente conhecido apenas como Grand Palais, é um edifício singular da cidade de Paris situado no 8.º arrondissement. Localiza-se na Avenue Winston Churchill, nas proximidades dos Campos Elísios. Faz parte integrante do conjunto arquitectónico formado pelo Petit Palais e Ponte Alexandre III.\n[…]\nEm 12 de fevereiro de 2018, a Ministra da Cultura Françoise Nyssen anunciou o próximo fechamento do Grand Palais, de dezembro de 2020 até a primavera de 2023, para realizar uma reforma mais extensa antes de 2024, data em que as provas de esgrima dos Jogos Olímpicos de Verão de 2024 ocorreriam no local.\n[…]\nDurante a Semana de Moda de Paris em 2024, a Chanel realizou novamente seu desfile sob o teto de vidro do Grand Palais. Este desfile não pôde ser apresentado nos anos anteriores devido a obras. Em outubro de 2024, após quatro anos de fechamento, o Grand Palais reabriu suas portas ao público, sediando novamente feiras de arte, incluindo Art Basel.\n[…]\nO Grand Palais é servido nas proximidades pelas linhas 1 e 13 do metrô na estação Champs-Élysées - Clemenceau, as linhas 1 e 9 do metrô na estação Franklin D. Roosevelt, e as linhas de ônibus RATP 42 e 73.\n[…]\nGilles Plum, (1993) Le Grand Palais, l'aventure du Palais des Beaux-Arts, Paris: ed. Réunion des Musées Nationaux, distribuição Le Seuil\n[…]\n\"Grand Palais : les sommets de la restauration\", in Atrium construction, nº11, Paris, Junho/Julho 2004 ISSN 1636-3434\n[…]\nJean Monneret, (2006) Le Grand Palais, regard de Jean Monneret, Paris: ed. Réunion des musées nationaux. ISBN 2-7118-5191-5\n[…]\nBernard Marrey, (2006) Le Grand Palais. Sa construction, son histoire, Paris: ed. Picard. ISBN 2-7084-0776-7\n[…]\n«Grand Palais»\n[…]\n«O Grand Palais Fotografias do Grand Palais»\n[…]\n«Página oficial das Galerias Nacionais do Grand Palais»\n[…]\n«Vídeo do Grand Palais de Cuatrosfera»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Estádio Olímpico de Berlim",
      "descricao": "Estádio construído para os Jogos Olímpicos de 1936, em Berlim, hoje casa do Hertha BSC."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Construído para os Jogos de 1936, o Estádio Olímpico de Berlim recebeu a final da Copa do Mundo de 2006. Que seleção saiu campeã?",
    "resposta": "Itália",
    "distratores": [
      "França",
      "Alemanha",
      "Brasil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympiastadion_(Berlin)",
      "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_final"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympiastadion_(Berlin)",
        "situacao": "ok",
        "texto": "Olympiastadion (German pronunciation: [oˈlʏmpi̯aˌʃtaːdi̯ɔn] ), also known in English as the Berlin Olympic Stadium or simply the Olympic Stadium, is a sports stadium at Olympiapark Berlin in Berlin, Germany. It was originally designed by Werner March for the 1936 Summer Olympics. During the Olympics, the record attendance was thought to be over 100,000.\n[…]\nBesides its use as an athletics stadium, the arena has built a footballing tradition. Since 1963, it has been the home of the Hertha BSC. It hosted three matches in the 1974 FIFA World Cup. It was renovated for the 2006 FIFA World Cup, when it hosted six matches, including the final. The DFB-Pokal final match is held each year there since 1985. The Olympiastadion Berlin served as a host for the 2011 FIFA Women's World Cup as well as the 2015 UEFA Champions League final.\n[…]\nWhen the Nazi Party won the election in Germany in 1933, they decided to use the Olympic Games to build a new stadium and Olympic Complex for Berlin in 1936. Führer and Reich Chancellor Adolf Hitler ordered the construction of a great sports complex in Grunewald named the \"Reichssportfeld\" with a new Olympiastadion. Architect Werner March remained in charge of the project, assisted by his brother Walter.\n[…]\nWhile the Olympic flame had been used for the first time in Amsterdam in 1928, in Berlin 1936 a marathon-like tour of the Olympic torch was introduced, from Olympia in Greece, crossing six frontiers with a journey of 3,000 kilometres (1,900 mi) to Berlin, through Greece, Bulgaria, Yugoslavia, Hungary, Czechoslovakia, Austria and Germany.\n[…]\nBerlin\n[…]\nSport in Berlin\n[…]\n\"Olympiastadion Berlin\" by Andreas Janowski. Published by Andreas Janowski Verlag under the label \"sights-on-audio\"\n[…]\n1936 Summer Olympics official report. Archived 25 June 2008 at the Wayback Machine Volume 1. pp. 141–9, 154–62.\n[…]\nOfficial Olympiastadion Site"
      },
      {
        "url": "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_final",
        "situacao": "ok",
        "texto": "The final match of the 2006 FIFA World Cup, the 18th edition of FIFA's competition for national football teams, was played at the Olympiastadion in Berlin, Germany, on 9 July 2006, and was contested between Italy and France. The event comprised hosts Germany and 31 other teams who emerged from the qualification phase, organised by the six FIFA confederations. The 32 teams competed in a group stage\n[…]\nOf the 28 players who took to the pitch that night, 8 were under contract with the Italian club Juventus; in doing so, the Bianconeri equalled the record established 72 years earlier by the Czechoslovaks of Slavia Prague.\n[…]\nAt the conclusion of the match, Italian midfielder Andrea Pirlo was named Man of the Match; he had been previously named the Man of the Match against Ghana in the group stage and against Germany in the semi-final. Overall, France performed well (Zidane was awarded the FIFA World Cup Golden Ball as the best player of the tournament), occupying the pitch effectively and maintaining width.\n[…]\nThe Italy team celebrated its victory with a parade in Rome the day after the final on 10 July. It was attended by 500,000 people as the team traveled to the Circus Maximus. The team also met with President Giorgio Napolitano and Prime Minister Romano Prodi, where all members of the World Cup-winning squad were awarded the Order of Merit of the Italian Republic.\n[…]\nOn 10 July, despite his violent gesture during the final and his verbal confrontation with referee Jorge Larrionda during the semi-final against Portugal, Zidane was nevertheless elected the best player of the World Cup tournament; this sparked controversy regarding an award that for critics seemed to have been \"won from the start\" for sponsorship reasons, particularly because Italian midfielder Andrea Pirlo had been named Man of the Match three times (two more than Zidane) during the tournament."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dio_Ol%C3%ADmpico_de_Berlim",
        "situacao": "ok",
        "texto": "O Estádio Olímpico (Alemão: Olympiastadion) em Charlottenburg, distrito de Berlim, desenhado pelo arquiteto alemão Werner March, foi construído entre 1934 e 1936 para os Jogos Olímpicos de Verão de 1936.\n[…]\nSubstituiu o Estádio Alemão (Deutsche Stadion) desenhado pelo pai de Werner, Otto March, construído entre 1912 e 1913 para ser sede dos Jogos Olímpicos de Verão de 1916 que acabariam por ser cancelados devido à Primeira Guerra Mundial. Foi restaurado para a Copa do Mundo de 2006 até meados de 2004.\n[…]\nFoi palco de 6 Jogos, incluindo a estreia do Brasil contra a Croácia, vencida pelos brasileiros por 1 a 0 e a grande final entre Itália e a França, com a vitória italiana nos pênaltis por 5 a 3. Em 2009 sediou o Campeonato do Mundo de Atletismo. Em 6 de Junho de 2015 recebeu a Final da Liga dos Campeões da UEFA de 2014–15. Desde a temporada 1984-85, é a sede da final da Copa da Alemanha.\n[…]\nEm 9 de Janeiro de 2002, trabalhadores encontraram durante a reforma do estádio uma bomba da Segunda Guerra Mundial não detonada enterrada abaixo do setor da arquibancada. A bomba foi detonada no exterior pela polícia.\n[…]\nEntre 1951 e 2005, havia na Olympischer Platz (A Praça Olímpica localizada em frente ao estádio) uma grande antena que transmitia para todos os rádios portáteis de Berlim.\n[…]\nO estádio sediou os seguintes jogos da Campeonato Europeu de Futebol de 2024.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Massacre de Munique",
      "descricao": "Ataque a atletas israelenses durante os Jogos Olímpicos de Munique 1972."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O ataque aos atletas israelenses em Munique 1972 e a vingança que se seguiu viraram o filme Munique, de 2005. Quem o dirigiu?",
    "resposta": "Steven Spielberg",
    "distratores": [
      "Martin Scorsese",
      "Oliver Stone",
      "Ridley Scott"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Munich_(2005_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Munich_(2005_film)",
        "situacao": "ok",
        "texto": "Munich is a 2005 historical drama film produced and directed by Steven Spielberg, co-written by Tony Kushner and Eric Roth. It is based on the 1984 book Vengeance by George Jonas, an account of Mossad assassinations following the Munich massacre during the 1972 Summer Olympics.\n[…]\nFormer Mossad operatives criticized the film for inaccurately portraying Mossad operations. David Kimche, the former deputy director of the Mossad, said \"I think it is a tragedy that a person of the stature of Steven Spielberg, who has made such fantastic films, should have based this film on a book that is a falsehood.\" Former Mossad operatives Gad Shimron and Victor Ostrovsky also dismissed the scene in which Prime Minister Golda Meir personally recruits Avner to lead the team as fiction.\n[…]\na lumpy and overlong morality play on a failed thriller template.\" To succeed, McCarthy states that Spielberg would have needed to engage the viewer in the assassin squad leader's growing crisis of conscience and create a more \"sustain(ed) intellectual interest\" for the viewer. Writing in Empire, Ian Nathan wrote \"Munich is Steven Spielberg's most difficult film. It arrives already inflamed by controversy. ...\n[…]\nIlana Romano, widow of Yossef Romano, an Israeli weightlifter who was killed in the Munich massacre, said that Spielberg overlooked the Lillehammer affair, although Spielberg seems to have been conscious of the omission; the film's opening title frame shows Lillehammer in a montage of city names, with Munich standing out from the rest. The Jewish Journal said that \"the revenge squad obsess about making sure only their targets are hit – and meticulous care is taken to avoid collateral damage.\n[…]\nSeptember 5 – 2024 film also about the massacre, from the perspective of ABC Sports"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Munique_%28filme%29",
        "situacao": "ok",
        "texto": "Munich (Munique, no Brasil e em Portugal) é um filme de 2005 dirigido por Steven Spielberg sobre os eventos que se seguiram ao Massacre de Munique nos Jogos Olímpicos de Verão de 1972 por um grupo terrorista palestino. Ele segue um esquadrão do Mossad (liderado por Eric Bana) que é requisitado para caçar e matar os terroristas do Setembro Negro (Operação Cólera de Deus) responsáveis pelo assassina\n[…]\nSpielberg praticamente não fez pré-estreias do filme, lançado em dezembro de 2005. A expectativa só seria superada pela polêmica que se seguiu às primeiras exibições: tanto judeus quanto muçulmanos acusaram o conteúdo de racial.\n[…]\nIllano Romano, esposa de um levantador de peso israelense morto no massacre de Munique, disse que Spielberg ignorou o caso Lillehammer, embora Spielberg pareça estar consciente da omissão; o quadro de abertura do filme mostra Lillehammer em uma montagem de nomes de cidades com Munique se destacando do resto. O Jewish Journal disse que \"o esquadrão de vingança é obcecado em garantir que apenas seus alvos sejam atingidos e cuidadosos cuidados são tomados para evitar danos colaterais.\n[…]\nEmbora Munique seja uma obra de ficção, ela descreve muitos eventos e números reais do início dos anos 1970. Do lado israelense, a primeira-ministra Golda Meir é retratado no filme, e outros líderes políticos e militares, como o procurador-geral Meir Shamgar, o chefe do Mossad, Zvi Zamir, e o chefe do Aman, Aharon Yariv. Spielberg tentou fazer a representação da tomada de reféns e da morte dos atletas israelenses historicamente autêntica.\n[…]\nDiferentemente de um filme anterior, Pânico em Munique, o filme de Spielberg retrata o massacre de todos os atletas israelenses, que segundo as autópsias era preciso. Além disso, o filme usa clipes de notícias reais gravados durante a situação dos reféns.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "João do Pulo",
      "descricao": "João Carlos de Oliveira, saltador brasileiro, recordista mundial do salto triplo em 1975 e bronze olímpico em 1976 e 1980."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Ex-recordista mundial do salto triplo e duas vezes bronze olímpico, João do Pulo teve a carreira encerrada no fim de 1981. Por quê?",
    "resposta": "Amputação após acidente de carro",
    "distratores": [
      "Suspensão por doping",
      "Rompeu o tendão",
      "Doença cardíaca"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/João_do_Pulo",
      "https://en.wikipedia.org/wiki/João_Carlos_de_Oliveira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/João_do_Pulo",
        "situacao": "ok",
        "texto": "João Carlos de Oliveira, conhecido como João do Pulo (Pindamonhangaba, 28 de maio de 1954 — São Paulo, 29 de maio de 1999), foi um atleta, político e militar brasileiro, especializado em saltos, sendo ex-recordista mundial do salto triplo, medalhista olímpico e tetracampeão panamericano no triplo e no salto em distância, militar e político brasileiro.\n[…]\nA disputa do salto triplo em Moscou 1980 foi coberta de controvérsias com relação ao favorecimento aos atletas da casa pelos juízes soviéticos. O tricampeão olímpico Viktor Saneyev e seu compatriota Jaak Uudmae eram os atletas do país na prova. João, recordista mundial com a marca até então inatingível de 17,89 m, conquistada em 1975 nos Jogos Panamericanos da Cidade do México, era o maior adversário dos dois atletas da casa.\n[…]\nEm contraponto à falta de sorte em Olimpíadas, na era pré-Campeonato Mundial de Atletismo, João do Pulo foi tricampeão mundial do salto triplo em 1977 (em Düsseldorf), 1979 (em Montreal) e 1981 (em Roma, com 17,37 m, vencendo Jack Uudmae, um ano depois dos Jogos Olímpicos, e o futuro recordista mundial Willie Banks, dos Estados Unidos).\n[…]\nJoão Carlos de Oliveira teve a carreira de atleta brutalmente interrompida em 22 de dezembro de 1981, quando sofreu um grave acidente automobilístico na Via Anhanguera, na altura do quilômetro 86, no sentido Campinas-São Paulo. O veículo Passat no qual estava com seu irmão, Francisco, e um amigo foi atingido por uma Variant.\n[…]\nApós quase um ano de internação na UTI do Hospital Irmãos Penteado, em Campinas, ter passado por 16 cirurgias e quatro paradas cardiorrespiratórias, sua perna direita teve de ser amputada no final de 1982, no que significou o encerramento de sua carreira de atleta. O então presidente da República, João Figueiredo, chegou a visitá-lo no hospital."
      },
      {
        "url": "https://en.wikipedia.org/wiki/João_Carlos_de_Oliveira",
        "situacao": "ok",
        "texto": "João Carlos de Oliveira, also known as \"João do Pulo\" (May 28, 1954 – May 29, 1999) was a Brazilian athlete who competed in the triple jump and the long jump.\n[…]\nBorn in Pindamonhangaba, São Paulo De Oliveira won two Olympic bronze medals. His personal best of 17.89 metres, set on October 15, 1975, in Pan American Games, stood as the world record until 1985. As of today, it is still in the top twenty of all-time best results in the event.\n[…]\nThere exists some doubt on the judging of the 1980 Olympic men's triple jump final. Several jumps of winning distance by both Oliveira and Ian Campbell of Australia were adjudged as fouls by the all-Soviet judging panel, despite video replays showing this was not the case. One of Oliveira's jumps was estimated to be a new world record beyond eighteen metres.\n[…]\nIn contrast to the lack of luck in the Olympics, in the pre-World Championships in Athletics, João do Pulo was three-time world champion in the triple jump in 1977 (in Düsseldorf), 1979 (in Montreal) and 1981 (in Rome, with 17.37 m, beating Jaak Uudmäe, a year after the Olympics, and future world record holder Willie Banks of the United States). Flag bearer of Brazil in the opening parade in Montreal 1976 and in Moscow 1980, João was the main idol of the Brazilian sport between 1975 and 1981.\n[…]\nHis world record was only broken almost ten years later, by the North American Willie Banks, with 17.97 m, in Indianapolis, on June 16, 1985. His Brazilian and South American record was only broken more than twenty-one years later, by Jadel Gregório, with 17.90 m, in Belém, on May 20, 2007 (who coincidentally was also an athlete of João do Pulo's former coach)."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Ben Johnson",
      "descricao": "Velocista canadense que venceu os 100 metros dos Jogos de Seul 1988 e perdeu a medalha."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O canadense Ben Johnson venceu os cem metros de Seul 1988 diante de Carl Lewis, mas perdeu a medalha de ouro dias depois. Por quê?",
    "resposta": "Doping com esteroide",
    "distratores": [
      "Largada queimada",
      "Saiu da raia",
      "Atrapalhou um rival"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ben_Johnson_(sprinter)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ben_Johnson_(sprinter)",
        "situacao": "desambiguacao",
        "texto": "Ben, Benjamin or Benny Johnson may refer to:\n\n\n== People ==\n\n\n=== In sports ===\n\n\n==== American football ====\nBen Johnson (offensive tackle) (born 1980)\nBen Johnson (tight end) (born 1994)\nBen Johnson (American football coach) (born 1986)\nBenny Johnson (American football) (1948–1988)\n\n\n==== Association football ====\nBen Johnson (soccer, born 1977), American soccer player\nBen Johnson (footballer, b"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ben_Johnson_%28desambigua%C3%A7%C3%A3o%29",
        "situacao": "desambiguacao",
        "texto": "Ben Johnson pode referir-se a:\n\nBen Johnson — desportista canadense\nBen Johnson (ator)\nBen Patrick Johnson \n\n\n== Ver também ==\nTodas as páginas cujo título começa por \"Ben Johnson\"\nTodas as páginas que tenham \"Ben Johnson\" no título\nBusca por \"ben johnson\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Rodrigo Pessoa",
      "descricao": "Cavaleiro brasileiro de saltos, campeão olímpico individual dos Jogos de Atenas 2004."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo colocado nos saltos do hipismo em Atenas 2004, o brasileiro Rodrigo Pessoa recebeu depois a medalha de ouro. O que causou a troca?",
    "resposta": "Doping do cavalo vencedor",
    "distratores": [
      "Queda do vencedor",
      "Erro na cronometragem",
      "Obstáculo mal montado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rodrigo_Pessoa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rodrigo_Pessoa",
        "situacao": "ok",
        "texto": "Rodrigo de Paula Pessoa (born 29 November 1972 in Paris, France) is a Brazilian equestrian specialized in show jumping. The son of fellow equestrian Nelson Pessoa, Pessoa is considered one of the most talented of his generation, being an Olympic Games gold medalist in individual jumping and having over 70 Grand Prix wins. He has represented Brazil at 8 Olympic Games second most appearances behind \n[…]\nIn 2000, he again won the bronze team medal at the Olympic Games in Sydney, and in spite of being a favorite to win the individual tournament, wound up disqualified once Baloubet twice refused to jump. In the 2004 Olympics in Athens, he won the individual silver medal, but after the disqualification of the Irish rider Cian O'Connor and his horse Waterford Crystal for doping, he was awarded the gold medal in an award ceremony in Rio de Janeiro.\n[…]\nPessoa attracted controversy in 2008 when he was suspended by the FEI after his horse Rufus failed a doping test at the 2008 Olympic games. Pessoa was fined 2,000 Swiss francs and was suspended from international competitions for four and a half months.\n[…]\nIn 2017, Horse Sport Ireland announced Pessoa as the new Irish showjumping team manager. As chief for Team Ireland, they won the 2017 European title in Gothenburg, and in 2019 got Ireland qualified for the 2020 Tokyo Olympics by winning the FEI Nation's Cup final. At the end of 2019, he ended his cooperation with Horse Sport Ireland to dedicate time to his family and riding career. He rides for James H. Clark and Artemis Farms in Wellington and Greenwich.\n[…]\nRodrigo Pessoa at FEI (alternate link)\n[…]\nRodrigo Pessoa at Olympics.com\n[…]\nRodrigo Pessoa at the Paris 2024 Summer Olympics (archived)\n[…]\nRodrigo Pessoa at Olympedia\n[…]\nRodrigo Pessoa at InterSportStats\n[…]\nRodrigo Pessoa at the Comitê Olímpico do Brasil  (in Portuguese)\n[…]\nRodrigo Pessoa on Instagram"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rodrigo_Pessoa",
        "situacao": "ok",
        "texto": "Rodrigo de Paula Pessoa (Paris, 29 de novembro de 1972) é um cavaleiro brasileiro, campeão olímpico nos Jogos Olímpicos de Atenas 2004, e tricampeão mundial de hipismo.\n[…]\nFez parte da equipe que conquistou a medalha de bronze nos Jogos Olímpicos de Atlanta, em 1996,  e com a mesma equipe repetiram o feito nos Jogos Olímpicos de Sydney em 2000. Seu resultado individual, no entanto, ficou comprometido pelo desempenho do cavalo Baloubet du Rouet, que refugou três vezes durante o percurso na prova final.\n[…]\nEm 2004, nos Jogos Olímpicos de Atenas, tornou-se campeão olímpico de saltos individual após a desclassificação por doping do cavalo do então primeiro colocado, o irlandês Cian O'Connor.\n[…]\nNos Jogos Olímpicos de Pequim 2008 obteve o 5.º lugar no salto individual. Quase herdou um lugar no pódio pela desclassificação de adversários cujos cavalos foram flagrados por doping. Mas seu cavalo, Rufus, também foi testado positivo para a substância analgésica proibida em animais nonivamida. Foi desqualificado da prova, suspenso por 135 dias e multado em 1285 euros.\n[…]\nNos Jogos Olímpicos de Tóquio, adiados para 2021 após a pandemia de COVID-19, Pessoa participou apenas da eliminatória por equipe, desistindo de participar da final após seu cavalo refugar duas vezes no percurso.\n[…]\nNa Paris 2024, sua terra natal, Rodrigo disputou sua oitava Olimpíada como o atleta brasileiro mais velho da delegação, aos 51 anos. A equipe de saltos foi desclassificada da prova, mas Pessoa se qualificou para a final individual, mas abandonou a disputa após cometer duas faltas no início do percurso.\n[…]\nConfederação Brasileira de Hipismo\n[…]\nPágina de Rodrigo Pessoa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Jogos Olímpicos de Verão de 1976",
      "descricao": "Edição dos Jogos Olímpicos realizada em Montreal, no Canadá, em 1976."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Dezenas de países africanos boicotaram Montreal 1976 porque um país participante tinha mandado sua seleção de rúgbi à África do Sul do apartheid. Que país?",
    "resposta": "Nova Zelândia",
    "distratores": [
      "Austrália",
      "Inglaterra",
      "Argentina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1976_Summer_Olympics_boycott",
      "https://en.wikipedia.org/wiki/1976_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1976_Summer_Olympics_boycott",
        "situacao": "ok",
        "texto": "The 1976 Summer Olympics (French: Jeux olympiques d'été de 1976), officially known as the Games of the XXI Olympiad (Jeux de la XXIe Olympiade) and officially branded as Montreal 1976 (Montréal 1976), were an international multi-sport event held from July 17 to August 1, 1976, in Montreal, Canada. Montreal was awarded the rights to the 1976 Games at the 69th IOC Session in Amsterdam on May 12, 197\n[…]\nTwenty-nine countries, mostly African, boycotted the Montreal Games when the International Olympic Committee (IOC) refused to ban New Zealand, after the New Zealand national rugby union team had toured South Africa earlier in 1976 in defiance of the United Nations' calls for a sporting embargo due to their racist apartheid policies. The Soviet Union won the most gold and overall medals, with the Eastern Bloc having seven countries in the top 10 of the medal table.\n[…]\nTwenty-nine countries boycotted the Games due to the refusal of the IOC to ban New Zealand, after the New Zealand national rugby union team had toured South Africa earlier in 1976. The boycott was led by Congolese official Jean-Claude Ganga. Some of the boycotting nations (including Morocco, Cameroon and Egypt) had already participated, however, and withdrew after the first few days. Senegal and Ivory Coast were the only African countries that competed throughout the duration of the Games.\n[…]\nElsewhere, Afghanistan, Albania, Burma, Iraq, Guyana, Sri Lanka and Syria also opted to join the Congolese-led boycott. South Africa had been banned from the Olympics since 1964 due to its apartheid policies. Other countries, such as El Salvador and Zaire, did not participate in Montreal for purely economic reasons.\n[…]\n1976 Summer Olympics – Montreal – African boycott\n[…]\nMontreal 1976 Official Olympic Film – Part 4 | Olympic History– The Olympic Channel\n[…]\nMontreal 1976 Official Olympic Film – Part 5 | Olympic History– The Olympic Channel"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1976_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1976 Summer Olympics (French: Jeux olympiques d'été de 1976), officially known as the Games of the XXI Olympiad (Jeux de la XXIe Olympiade) and officially branded as Montreal 1976 (Montréal 1976), were an international multi-sport event held from July 17 to August 1, 1976, in Montreal, Canada. Montreal was awarded the rights to the 1976 Games at the 69th IOC Session in Amsterdam on May 12, 197\n[…]\nTwenty-nine countries, mostly African, boycotted the Montreal Games when the International Olympic Committee (IOC) refused to ban New Zealand, after the New Zealand national rugby union team had toured South Africa earlier in 1976 in defiance of the United Nations' calls for a sporting embargo due to their racist apartheid policies. The Soviet Union won the most gold and overall medals, with the Eastern Bloc having seven countries in the top 10 of the medal table.\n[…]\nTwenty-nine countries boycotted the Games due to the refusal of the IOC to ban New Zealand, after the New Zealand national rugby union team had toured South Africa earlier in 1976. The boycott was led by Congolese official Jean-Claude Ganga. Some of the boycotting nations (including Morocco, Cameroon and Egypt) had already participated, however, and withdrew after the first few days. Senegal and Ivory Coast were the only African countries that competed throughout the duration of the Games.\n[…]\nElsewhere, Afghanistan, Albania, Burma, Iraq, Guyana, Sri Lanka and Syria also opted to join the Congolese-led boycott. South Africa had been banned from the Olympics since 1964 due to its apartheid policies. Other countries, such as El Salvador and Zaire, did not participate in Montreal for purely economic reasons.\n[…]\n1976 Summer Olympics – Montreal – African boycott\n[…]\nMontreal 1976 Official Olympic Film – Part 4 | Olympic History– The Olympic Channel\n[…]\nMontreal 1976 Official Olympic Film – Part 5 | Olympic History– The Olympic Channel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1976",
        "situacao": "ok",
        "texto": "Jogos Olímpicos de Verão de 1976 (em francês: Jeux olympiques d'été de 1976), conhecidos oficialmente como os Jogos da XXI Olimpíada, foram os Jogos Olímpicos realizados em Montreal, a maior cidade da província de Quebec, no Canadá, entre 17 de julho e 1 de agosto de 1976. Montreal é a segunda cidade francófona a sediar os Jogos de Verão depois de Paris. Com a participação de 6 804 atletas de  92 \n[…]\nLideradas pela República do Congo, 26 nações africanas, o Iraque e a Guiana se recusaram a participar deles, em protesto pelo Comitê Olímpico Internacional não suspender a Nova Zelândia, que havia autorizado sua seleção nacional de rugby a excursionar pela África do Sul, que se encontrava suspensa da comunidade  internacional por causa da política racista do Apartheid.\n[…]\nPela primeira e única vez na história dos Jogos de Verão, o país anfitrião terminou a competição sem conseguir conquistar uma única medalha de ouro.\n[…]\nO Canadá é, até hoje, o único país-sede dos Jogos Olímpicos que não ganhou nenhuma medalha de ouro em seus próprios Jogos. Fato igual viera a se repetir nos Jogos Olímpicos de Verão da Juventude de 2010, já que o país anfitrião também terminou os jogos sem a conquista de uma única medalha de ouro.\n[…]\nAtletas de 92 Comitês Olímpicos Nacionais foram representadas nos Jogos de 1976, número menor que o de 1972 muito por conta do boicote africano liderado pela República do Congo. Guiana (ao lado do Iraque os únicos países de fora da África a aderirem ao boicote), Mali e Suazilândia chegaram a participar da cerimônia de abertura, mas desistiram dos Jogos; Camarões, Egito, Marrocos e Tunísia ainda competiram nos primeiros dias, mas logo aderiram ao boicote.\n[…]\nTrês CONs fizeram sua primeira aparição olímpica: Antígua e Barbuda (como \"Antígua\"), Ilhas Cayman e Papua-Nova Guiné. Andorra também estreou nos Jogos de Verão após competir nos Jogos de Inverno de Innsbruck, meses antes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Chama olímpica",
      "descricao": "Fogo símbolo dos Jogos Olímpicos, aceso em Olímpia e mantido aceso durante toda a competição."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Antes mesmo de existir o revezamento da tocha, a chama olímpica ardeu pela primeira vez numa torre do estádio. Em que edição dos Jogos?",
    "resposta": "Amsterdã 1928",
    "distratores": [
      "Paris 1924",
      "Los Angeles 1932",
      "Antuérpia 1920"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_flame"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_flame",
        "situacao": "ok",
        "texto": "The Olympic flame is a symbol used in the Olympic movement. It is also a symbol of continuity between ancient and modern games. The Olympic flame is lit at Olympia, Greece. This ceremony starts the Olympic torch relay, which formally ends with the lighting of the Olympic cauldron during the opening ceremony of the Olympic Games. The flame then continues to burn in the cauldron (or in a lantern as \n[…]\nThe first time that a symbolic flame made its appearance in the Summer Olympic Games was for the 1928 Summer Olympics in Amsterdam. The main purpose of this fire, placed in a large bowl on top of a slender tower, named \"Marathon Tower\", was to indicate for miles around where in Amsterdam the Olympic Games were being held. This tower was associated with the marathon race and all its elements, including the fire, were an idea of the architect Jan Wils who also had designed the stadium.\n[…]\nWhen the idea of a symbolic fire was introduced during the 1928 Summer Olympics, an employee of the Electric Utility of Amsterdam lit the first symbolic flame in the Marathon Tower of the Olympic Stadium in Amsterdam. The Olympic flame and the Olympic torch relay was first introduced to the Summer Olympics at the 1936 Summer Olympics in Berlin by Carl Diem. The first ever torch-lighting ceremony was held in Olympia, Greece on July 20, 1936."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chama_Ol%C3%ADmpica",
        "situacao": "ok",
        "texto": "A Chama Olímpica ou Tocha Olímpica é um dos símbolos dos Jogos Olímpicos, e evoca a lenda de Prometeu que teria roubado o fogo da forja de Hefesto para o entregar aos mortais. Durante a celebração dos Jogos Olímpicos antigos, em Olímpia, mantinha-se aceso um fogo que ardia enquanto durassem as competições. Esta tradição foi reintroduzida nos Jogos Olímpicos de Verão de 1928.\n[…]\nNos Jogos Olímpicos de Verão de 1928, em Amsterdã, o arquiteto neerlandês Jan Wils incluiu no desenho do estádio olímpico uma torre e teve a ideia de acender nela uma chama durante os jogos. Na cerimónia de abertura, em 28 de Julho de 1928, um empregado da empresa de electricidade de Amesterdão acendeu a primeira pira olímpica, na torre chamada Marathontower.\n[…]\nTambém nos Jogos Olímpicos de Inverno, a chama Olímpica ardeu nos Jogos de Inverno de 1936 e de 1948, mas a primeira estafeta da tocha teve lugar no Jogos de 1952. Nessa ocasião, o fogo não foi ateado em Olímpia mas sim em Morgedal, na Noruega, na lareira da casa de Sondre Norheim, que foi o pioneiro do desporto de esqui. Foi também aí que foi ateado o fogo nos Jogos Olímpicos de Inverno de 1960 e 1994.\n[…]\nEm seguida, a chama é transferida para uma urna que é levada até ao local do antigo estádio. Aí a chama é usada para acender a tocha olímpica, transportada pelo atleta que fará o primeiro percurso da estafeta, que conduzirá a chama ao longo do percurso até ao estádio onde se realizam os Jogos.\n[…]\nO ritual do acendimento da pira olímpica na Cerimônia de Abertura se tornou um ritual original e espetacular a cada edição. Nos Jogos de Barcelona 1992, o arqueiro paraolímpico Antonio Rebollo atirou uma flecha com fogo na Pira Olímpica. Dois anos mais tarde, em Lillehammer 1994, a tocha Olímpica entrou no estádio transportada por um saltador de esqui, e o Príncipe Haakon da Noruega acendeu a Pira Olímpica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Medalha olímpica",
      "descricao": "Medalha de ouro, prata ou bronze entregue aos três primeiros colocados de cada prova olímpica."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em Atenas 1896, o campeão recebia uma medalha de prata. Em que edição os Jogos adotaram pela primeira vez o trio ouro, prata e bronze?",
    "resposta": "Saint Louis 1904",
    "distratores": [
      "Paris 1900",
      "Londres 1908",
      "Estocolmo 1912"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_medal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_medal",
        "situacao": "ok",
        "texto": "An Olympic medal is an honorary medal that is awarded to successful competitors at one of the Olympic Games. There are three classes of medal to be won: gold, silver, and bronze, awarded to first, second, and third place, respectively. The granting of awards is laid out in detail in the Olympic protocols.\n[…]\nWhen the modern Olympic Games began in 1896 medals started to be given to successful olympian competitors. However, gold medals were not awarded at the inaugural Olympics in 1896 in Athens, Greece. The winners were instead given a silver medal and an olive branch, whilst runners-up received a laurel branch and a copper or bronze medal.\n[…]\nThe custom of the sequence of gold, silver, and bronze for the first three places in all events dates from the 1904 Summer Olympics in St. Louis, Missouri in the United States. The International Olympic Committee (IOC) has retroactively assigned gold, silver and bronze medals to the three best-placed athletes in each event of the 1896 and 1900 Games. If there is a tie for any of the top three places all competitors are entitled to receive the appropriate medal according to IOC rules.\n[…]\nThird place (the bronze medal): In 2010 it was 97% copper with 0.5% tin and 2.5% zinc; the metal value was about US$3 in 2010. At the Tokyo games it was 95% copper and 5% zinc with a metal value of about $5.\n[…]\n1904 to 1912 the gold medals were made of solid gold.\n[…]\nAt the 1960 Summer Olympics, competitors in the Stadio Olimpico received their medals immediately after each event for the first time; competitors at other venues came to the Stadio Olimpico the next day to receive their medals. Later Games have had a victory podium at each competition venue."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Jogos Paralímpicos",
      "descricao": "Principal evento multiesportivo para atletas com deficiência, realizado logo após os Jogos Olímpicos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Desde que edição os Jogos Paralímpicos de Verão acontecem sempre na mesma cidade e nas mesmas instalações dos Jogos Olímpicos?",
    "resposta": "Seul 1988",
    "distratores": [
      "Moscou 1980",
      "Los Angeles 1984",
      "Barcelona 1992"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Paralympic_Games"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paralympic_Games",
        "situacao": "ok",
        "texto": "The Paralympic Games or Paralympics is a periodic series of international multisport events involving athletes with a range of disabilities. There are Winter and Summer Paralympic Games, which since the 1988 Summer Olympics in Seoul, South Korea, have been held shortly after the corresponding Olympic Games. All Paralympic Games are governed by the International Paralympic Committee (IPC).\n[…]\nThe Summer Games of 1988 held in Seoul was the first time the term Paralympic came into official use.\n[…]\nThe Paralympic flag is taken down. Since the 1988 Winter Paralympics, with some exceptions, the national flag of the country hosting the next Summer or Winter Paralympic Games is hoisted while the corresponding national anthem is played. The games are officially closed, and the Paralympic flame is extinguished. After these compulsory elements, the next host nation briefly introduces itself with artistic displays of dance and theater representative of its culture.\n[…]\nCompeting in a variety of events between 1988 and 2002, she won a total of 22 medals, of which 17 were gold. After winning five gold medals at the 2002 Games she retired at the age of 58. Neroli Fairhall, a paraplegic archer from New Zealand, was the first paraplegic competitor, and the third Paralympian, to participate in the Olympic Games, when she competed in the 1984 Summer Olympics in Los Angeles.\n[…]\n1988 Summer Paralympics and 1988 Winter Paralympics was the first time the term Paralympic was used officially."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Paraol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Jogos Paralímpicos ou Paraolímpicos é o maior evento esportivo mundial envolvendo pessoas com deficiência. Incluem atletas com deficiências físicas (de mobilidade, amputações, ou paralisia cerebral), deficiências visuais (cegueira), além de deficientes mentais.\n[…]\nO apoio do Comitê Olímpico Internacional após os Jogos de Seul, em 1988 proporcionou a fundação, em 1989, do Comitê Paralímpico Internacional. Desde então os dois órgãos desenvolvem ações conjuntas visando ao desenvolvimento do esporte para deficientes.\n[…]\nSzekeres já participou de cinco Jogos Paralímpicos.\n[…]\nTalvez o maior avanço para o movimento Paralímpico tenha ocorrido em Seul, durante os Jogos Paralímpicos de Verão de 1988. Essa edição que foi, até então, a maior e melhor organizada é considerada um ponto crucial na história dos Jogos, já que, pela primeira vez em 24 anos, os atletas paralímpicos puderam usar os modernos locais de competição dos Jogos Olímpicos.\n[…]\nO ICC foi encarregado de defender os direitos dos atletas com deficiência frente ao COI. Após o sucesso do esforço de cooperação entre o ICC e o COI, o que resultou nos Jogos Paralímpicos de Verão de 1988 em Seul, o ICC determinou a necessidade de se expandir e incluir representantes de todas as nações que tinham programas desportivos para deficientes. Também considerou necessário incluir atletas nas decisões do órgão regulador paralímpico.\n[…]\nAlém dos exemplos de deficientes que participaram de Jogos Olímpicos, há um caso de atleta que competia regularmente e, após um acidente, passou a competir em esportes paralímpicos. Pál Szekeres, esgrimista húngaro, conquistou uma medalha de bronze nos Jogos Olímpicos de Seul 1988 e, após os Jogos, sofreu um acidente de trânsito que o obrigou a usar cadeira de rodas.\n[…]\nJogos Olímpicos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Maratona",
      "descricao": "Corrida de longa distância do atletismo, com percurso oficial de 42,195 quilômetros."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A maratona feminina demorou a entrar no programa olímpico. Em que edição ela estreou, com vitória da americana Joan Benoit?",
    "resposta": "Los Angeles 1984",
    "distratores": [
      "Montreal 1976",
      "Moscou 1980",
      "Seul 1988"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Joan_Benoit",
      "https://en.wikipedia.org/wiki/Marathons_at_the_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joan_Benoit",
        "situacao": "ok",
        "texto": "Joan Benoit Samuelson (née Benoit; born May 16, 1957) is an American marathon runner who was the first women's Olympic Games marathon champion, winning the gold medal at the 1984 Summer Olympics in Los Angeles. She held the fastest time for an American woman at the Chicago Marathon for 32 years after winning the race in 1985. Her time at the Boston Marathon was the fastest time by an American woma\n[…]\nIn March 1984, Benoit injured her knee during a 20-mile training run, forcing her to undergo arthroscopic knee surgery just 17 days before the United States Olympic Women's Marathon Trials were scheduled. However, she recovered from the surgery much more quickly than expected and was the favorite in the trials at Olympia, Washington. She beat runner-up Julie Brown by 30 seconds, winning in 2:31:04.\n[…]\nThree months later, she competed in the 1984 Summer Olympics in Los Angeles, winning the first Olympic Women's Marathon in 2:24:52, several hundred meters ahead of Grete Waitz, Rosa Mota, and Ingrid Kristiansen.\n[…]\nBenoit was inducted into the National Distance Running Hall of Fame in 1998, the Maine Women's Hall of Fame in 2000, the National Track and Field Hall of Fame in 2004 and the USATF Masters Hall of Fame in 2014. In 2017, a plaque honoring her was unveiled in the L.A. Memorial Coliseum's Court of Honor.\n[…]\nIn 2019, on the eve of the 40th anniversary of her first Boston Marathon win, Benoit and her daughter Abby ran together as they had done in previous marathons. Joan recorded a run time of 3:04:00, which was within 40 minutes of her original time which was a promise she had made prior to competing in that year's edition of the Boston Marathon.\n[…]\nJoan Benoit-Samuelson at World Athletics\n[…]\nJoan Benoit Samuelson at www.USATF.org\n[…]\nJoan Benoit at the Team USA Hall of Fame (archive July 20, 2023)\n[…]\nJoan Benoit at Olympics.comJoan Benoit at Olympic.org (archived)\n[…]\nJoan Benoit at Olympedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Marathons_at_the_Olympics",
        "situacao": "ok",
        "texto": "The marathon at the Summer Olympics is the only road running event held at the multi-sport event. The men's marathon has been present on the Olympic athletics programme since the first modern Olympics in 1896. Nearly ninety years later, the women's event was added to the programme at the 1984 Olympics in Los Angeles.\n[…]\nUntil the 2016 Summer Olympics, it was tradition for the men's marathon to be held on the last day of the Games. However, due to changes to the Olympic program in 2020 and 2024, the women's marathon was held on the last day. The first time the marathon finish line took place inside the Olympic Stadium was at the 1908 Summer Olympics.\n[…]\nAt this event a men's marathon was held over 41.86 km and Canada's Billy Sherring won the competition. John Svanberg, the runner-up in the 1906 5-mile race, was also runner-up in the marathon. American William Frank was the bronze medalist."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joan_Benoit",
        "situacao": "ok",
        "texto": "Joan Benoit Samuelson (Cape Elizabeth, 16 de maio de 1957) é uma ex-atleta norte-americana, primeira campeã olímpica da maratona nos Jogos Olímpicos de Los Angeles em 1984.\n[…]\nNo início dos anos 1980 teve alguns problemas de lesão, tendo inclusive que operar o tendão de Aquiles. Já recuperada, venceu em 1982 a maratona de Eugene, no Oregon, com 2:26:11, melhor marca daquele ano. Disputando a Maratona de Boston de 1983, causou frisson ao quebrar o recorde mundial com um tempo de 2:22:43. Ainda em 1983 participou dos Jogos Pan-americanos de Caracas, ganhando a medalha de ouro nos 3000 metros.\n[…]\nEm Los Angeles 1984, a maratona feminina foi incorporada ao programa pela primeira vez. Durante a prova, Benoit surpreendeu quando se desgarrou do primeiro pelotão desde o início, impondo um forte ritmo que muitos acreditaram parecer suicida devido ao forte calor e umidade. Porém ela superou as adversidades e venceu a prova com mais de um minuto de vantagem sobre a segunda colocada, a favorita norueguesa Grete Waitz, tornando-se um dos destaques dos Jogos.\n[…]\nEm 1985 conseguiu a melhor marca de sua carreira, 2h 21min 21, na Maratona de Chicago, que só não se tornou recorde mundial porque pouco antes a norueguesa Ingrid Kristiansen tinha marcado 2h21min06s na Maratona de Londres. Após 1985 as lesões atormentaram a vida de Benoit, mas isso não a impediu de seguir competindo: em 1991 foi quarta na Maratona de Boston, em 1992 ganhou a maratona de Columbus e em 1996 participou da prova de classificação para os Jogos Olímpicos de Atlanta.\n[…]\nLista dos campeões olímpicos de atletismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Jogos Olímpicos de Inverno de 2026",
      "descricao": "Edição dos Jogos Olímpicos de Inverno realizada na Itália em 2026, dividida entre Milão e Cortina d'Ampezzo."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os Jogos de Inverno de 2026, na Itália, levaram no nome Milão e qual famosa estação de esqui nos Dolomitas?",
    "resposta": "Cortina d'Ampezzo",
    "distratores": [
      "Courmayeur",
      "Sestriere",
      "Madonna di Campiglio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2026_Winter_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2026_Winter_Olympics",
        "situacao": "ok",
        "texto": "The 2026 Winter Olympics (Italian: Olimpiadi invernali del 2026), officially the XXV Olympic Winter Games and commonly known as Milano Cortina 2026, were an international winter multi-sport event held from 6 to 22 February 2026, at multiple sites across Lombardy, Veneto and Trentino-Alto Adige/Südtirol, with competition in selected events beginning on 4 February 2026.\n[…]\nA joint bid by Milan and Cortina d'Ampezzo was awarded on 24 June 2019, at the 134th IOC Session in Lausanne, Switzerland, in preference to another joint bid made by Stockholm and Åre, Sweden. The 2026 Olympic Games were the first to be officially co-hosted by two cities. Milan primarily hosted the ice events, while the remaining events were hosted in clusters around Cortina, Livigno, and Fiemme.\n[…]\nThese were the third Winter Olympics, and the fourth Olympics overall, to be hosted by Italy, as Cortina d'Ampezzo had previously hosted the 1956 Winter Olympics and Torino hosted the 2006 Winter Olympics.\n[…]\nMilan and Cortina d'Ampezzo were selected as the host cities on 24 June 2019, at the 134th IOC Session in Lausanne, Switzerland. The three Italian International Olympic Committee (IOC) members (Franco Carraro, Ivo Ferriani, and Giovanni Malagò) and two Swedish IOC members (Gunilla Lindberg and Stefan Holm) were ineligible to vote as stated in the Olympic Charter.\n[…]\nMarco Balich, Creative Lead of the Opening Ceremony, explained that the word harmony derives from Ancient Greek: \"It means 'bringing together' in musical terms, different elements.\" The opening ceremony also featured special performances from American singer Mariah Carey, as well as Italian artists Laura Pausini and Andrea Bocelli. Two Olympic cauldrons were lit in both Milan and Cortina d'Ampezzo, a first in Games' history.\n[…]\n1956 Winter Olympics – Cortina D'Ampezzo\n[…]\n2026 Winter Olympics – Milan and Cortina D'Ampezzo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Inverno_de_2026",
        "situacao": "ok",
        "texto": "Jogos Olímpicos de Inverno de 2026 (em italiano: XXV Giochi olimpici invernali), oficialmente denominados XXV Jogos Olímpicos de Inverno, e comumente conhecidos por Milão-Cortina 2026, foi um evento multiesportivo realizado nas cidades  italianas de Milão e de Cortina d'Ampezzo, ambas no nordeste do país. Essa é a quarta edição dos Jogos Olímpicos a serem realizados na Itália.\n[…]\nCom isso, Cortina d'Ampezzo é a oitava cidade na história a sediar os Jogos por duas vezes, enquanto que esta é a primeira vez em que Milão sediará os Jogos Olímpicos, os quais foram realizados entre 6 e 22 de fevereiro de 2026.\n[…]\nEstádio Olímpico de Cortina d'Ampezzo – Curling\n[…]\nEm 18 de junho de 2021, o Comitê Olímpico Internacional propôs que o esqui de montanha fosse incluído como esporte nos Jogos Olímpicos de Inverno de 2026. A proposta foi aprovada em 20 de julho.\n[…]\nA abertura dos Jogos Olímpicos de Inverno de 2026 foi realizada na noite do dia 6 de fevereiro de 2026 no San Siro, em Milão, além de um momento protocolar na Piazza Dibona, em Cortina d'Ampezzo, no Estádio \"Giuseppe Dal Ben\", na cidade de Predazzo, e no Parque de Neve, em Livigno, sendo a primeira vez na história dos jogos convencionais que a cerimônia inaugural ocorreu em quatro cidades ao mesmo tempo, com Milão recebendo a maioria dos momentos protocolares.\n[…]\nA festa se encerrou com a extinção da pira olímpica localizada no Arco della Pace, em Milão, e na Piazza Angelo Dibona, em Cortina d'Ampezzo. Entre as apresentações musicais, houve os números de Achille Lauro, Gabry Ponte, Meduza, Major Lazer e MØ. Outra apresentação é a do bailarino Roberto Bolle, líder do grupo La Scala Theatre Ballet, e da atriz italiana Benedetta Porcaroli.\n[…]\nJogos Olímpicos de Inverno de 1956 – Cortina d'Ampezzo\n[…]\nMilan–Cortina d'Ampezzo 2026 Arquivado em 26 de junho de  2019, no Wayback Machine.\n[…]\nMilan–Cortina d'Ampezzo 2026 (IOC)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Vela",
      "descricao": "Esporte de competição em que barcos movidos pelo vento disputam regatas, modalidade olímpica."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Com o Pão de Açúcar como cenário, as regatas de vela da Rio 2016 foram disputadas em que baía?",
    "resposta": "Baía de Guanabara",
    "distratores": [
      "Baía de Sepetiba",
      "Baía de Todos os Santos",
      "Baía da Ilha Grande"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sailing_at_the_2016_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sailing_at_the_2016_Summer_Olympics",
        "situacao": "ok",
        "texto": "Sailing at the 2016 Summer Olympics in Rio de Janeiro was held from 8–18 August at Marina da Gloria in Guanabara Bay. The sailing classes had two changes from the 2012 Summer Olympics events. There were 10 events.\n[…]\nThe RS:X, Laser, Laser Radial, Finn, 470, and 49er all return for 2016.\n[…]\nThe German sailor Erik Heil was also infected by multi-resistant germs during an Olympic test event in Rio. The location for sailing events was a source of concern for athletes since scientists had found drug-resistant super bacteria in Guanabara Bay due to the daily dumping of hospital waste and household raw sewage into the rivers and ocean. The Brazilian federal government's Oswaldo Cruz Foundation lab also found the genes of super bacteria in a river that empties into Guanabara Bay.\n[…]\nRacing at the 2016 Olympics was fleet racing where all competitors started and sailed the course together. They were scored according to the low-point system, where first place is scored 1, second place is scored 2, etc. There was a series of preliminary races followed by the final Medal Race. The RS:X, 49er, 49erFX, and Nacra 17 classes had 12 preliminary races, other classes have 10.\n[…]\n\"Sailing at the 2016 Summer Olympics (Rio2016.com)\". Archived from the original on 26 August 2016. Retrieved 23 July 2018.{{cite web}}:  CS1 maint: bot: original URL status unknown (link)\n[…]\nSailing at the 2016 Summer Olympics at SR/Olympics (archived)\n[…]\nISAF: Official Site: Events: 2016 Rio Olympic Sailing Competition (Sailing.org)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vela_nos_Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_2016",
        "situacao": "ok",
        "texto": "As competições da vela nos Jogos Olímpicos de Verão de 2016 foram disputadas entre os dias 8 e 18 de agosto na Marina da Glória, na Baía de Guanabara. Dez medalhas de ouro foram concedidas e 380 velejadores participaram das competições.\n[…]\nDez conjuntos de medalhas foram concedidos. As classes RS:X, Laser, Laser Radial, Finn, 470 e 49er retornam em 2016. Com relação aos Jogos de Londres, em 2012, os eventos a barcos de quilha foram retirados, tanto para as mulheres (Elliott 6m) quanto para os homens (Star), sendo a primeira vez que nenhuma prova à quilha foi disputada nas Olimpíadas.\n[…]\nForam substituídas pela classe Nacra 17, disputada primeira vez como olímpica, sendo esta designada como sendo mista e composta necessariamente por um casal, e pela 49erFX, uma prova de esquife feminino que utiliza o mesmo equipamento da versão masculina (49er), mas com uma vela ligeiramente reduzida.\n[…]\nTodas as classes olímpicas foram disputadas no formato de corrida de frota, onde todos os competidores começam e velejam juntos. Eles são pontuados de acordo com o sistema de pontos baixos, onde o primeiro lugar recebe 1 ponto, o segundo 2 pontos, e assim por diante. Houve uma série de regatas preliminares seguidas pela regata final, ou Medal Race. As classes RS:X, 49er, 49erFX e Nacra 17 tiveram 12 regatas preliminares e as demais classes 10.\n[…]\nEstes foram os medalhistas da vela nos Jogos Olímpicos de 2016:\n[…]\n«Pagina oficial da Federação Internacional de Vela» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Remo",
      "descricao": "Esporte de corrida de barcos impulsionados por remos presos ao casco por forquetas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Cercada pelos prédios da zona sul carioca, que lagoa recebeu as provas de remo dos Jogos do Rio, em 2016?",
    "resposta": "Lagoa Rodrigo de Freitas",
    "distratores": [
      "Lagoa de Jacarepaguá",
      "Lagoa da Tijuca",
      "Lagoa de Marapendi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lagoa_Stadium",
      "https://pt.wikipedia.org/wiki/Lagoa_Rodrigo_de_Freitas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lagoa_Stadium",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lagoa_Rodrigo_de_Freitas",
        "situacao": "ok",
        "texto": "Rodrigo de Freitas é uma lagoa localizada na Zona Sul do município do Rio de Janeiro, no Brasil.\n[…]\nEm 1702, a sua bisneta, Petronilha Fagundes, então com 35 anos de idade, casou-se com o jovem oficial de cavalaria português, Rodrigo de Freitas de Carvalho, então com apenas 18 anos de idade, que deu o seu nome à lagoa. Viúvo, Rodrigo de Freitas retornou a Portugal em 1717, onde veio a falecer em 1748.\n[…]\nA lagoa representa, atualmente, uma das principais atrações turísticas do município do Rio de Janeiro. É conhecida como \"O Coração do Rio de Janeiro\", devido a seu formato semelhante a um coração. A região administrativa e o bairro homônimo de Lagoa recebe sua denominação devido à Lagoa Rodrigo de Freitas. É uma região de classes média-alta e alta, com um dos mais altos índices de desenvolvimento humano do país.\n[…]\nA Lagoa Rodrigo de Freitas sediou competições de canoagem e remo dos Jogos Olímpicos de Verão de 2016 e dos Jogos Paralímpicos de Verão de 2016. Havia uma grande preocupação quanto à saúde dos atletas durante a competição. Em 2015, treze remadores dos Estados Unidos apresentaram problemas estomacais depois de uma competição na lagoa, que foi considerada evento-teste dos Jogos Olímpicos. Na ocasião, os atletas sofreram de vômito e diarreia.\n[…]\nAlém disso, foi reconhecido pelo governo do estado que não havia tempo disponível para limpar efetivamente a lagoa para as competições Olímpicas.\n[…]\nÁrvore de Natal da Lagoa Rodrigo de Freitas\n[…]\nAlma Carioca\n[…]\nLagoa Rodrigo de Freitas no Google Maps\n[…]\nPalestra/Aula sobre a Renovação das Águas da Lagoa Rodrigo de Freitas"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Lema olímpico",
      "descricao": "Divisa em latim do movimento olímpico, conhecida como Citius, Altius, Fortius."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O lema mais rápido, mais alto, mais forte foi criado por Henri Didon, um amigo de Coubertin. Qual era a profissão dele?",
    "resposta": "Padre dominicano",
    "distratores": [
      "Médico militar",
      "Advogado",
      "General"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_motto",
      "https://en.wikipedia.org/wiki/Henri_Didon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_motto",
        "situacao": "ok",
        "texto": "The International Olympic Committee (IOC) uses icons, flags, and symbols to represent and enhance the Olympic Games. These symbols include those commonly used during Olympic competitions such as the flame, fanfare, and theme as well as those used both during and outside competition, such as the Olympic flag.\n[…]\nThe original Olympic motto is the hendiatris \"Citius, Altius, Fortius,\" Latin for \"Faster, Higher, Stronger\" (also \"Swifter, Higher, Stronger.\") The motto was proposed by Pierre de Coubertin upon the creation of the IOC. Coubertin borrowed it from his friend Henri Didon, a Dominican priest who was an athletics enthusiast. Coubertin said that \"these three words represent a programme of moral beauty. The aesthetics of sport are intangible\".\n[…]\nIn 2021, the IOC approved the addition of the word \"together\", after an en dash, to the motto. It now reads \"Citius, Altius, Fortius – Communiter\", Latin for \"Faster, Higher, Stronger – Together\" (French: \"Plus vite, Plus haut, Plus fort – Ensemble\"). According to some Italian Latinists, such as professor Mario De Nonno and professor Giorgio Piras, the concept of acting together is not properly conveyed by communis nor communiter. De Nonno suggested an adverb such as Una meaning \"as one\".\n[…]\nThe 1949–50 edition of the IOC's \"Green Booklet\" stated that each colour corresponded to a particular continent except for Antarctica: \"blue for Europe, yellow for Asia, black for Africa, green for Australia, and red for North America and South America. This assertion was reversed in 1951 because there was no evidence that Coubertin had intended it: \"at the very most he might perhaps have admitted it afterwards\".\n[…]\nPierre de Coubertin created the Olympic flag in 1913.\n[…]\nPierre de Coubertin Medal"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Henri_Didon",
        "situacao": "ok",
        "texto": "Henri Louis Rémy Didon, OP (17 March 1840, in Le Touvet – 13 March 1900, in Toulouse) was a French Dominican friar. He was also a writer, educator, and a promoter of youth sports. His outsize personality often put him in conflict with his religious hierarchy.\n[…]\nHe coined the term Citius, Altius, Fortius for an 1891 youth sports competition he organized in Arcueil and that his friend Pierre de Coubertin was assisting. The latter proposed it as the official motto of the IOC in 1894.\n[…]\nAt the age of nine, Didon entered the petit séminaire du Rondeau, a religious school in Grenoble. There he studied under the French Dominican Jean-Baptiste Henri Lacordaire. Henri was successful in both academics and sports; at the age of 15, he won three titles during the \"Olympic Games of Rondeau\", a sports tournament held in the school every 4 years.\n[…]\nDidon left the seminary of Grenoble at the age of eighteen, and subsequently entered the Dominican Order. He studied at the Pontifical University of St. Thomas Aquinas Angelicum in Rome, graduating in 1862.\n[…]\nHe coined the term Citius, Altius, Fortius for an 1891 youth sports competition he organized in Arcueil and that his friend Pierre de Coubertin was assisting. The latter proposed it as the official motto of the IOC in 1894.\n[…]\nThe Germans, 1884), which is a study of the German universities with application to France; others may be found developed at length in his college addresses published in pamphlet form. The deeply religious character of Father Didon is especially manifest in his \"Lettres à Mlle Th. V.\" (Paris, 1900), which quickly went through thirty editions and appeared in English, in his \"Lettres à un ami\" (Paris, 1902); and \"Lettres a Mère Samuel\" (Année Dominicaine, 1907-8)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An%C3%A9is_ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "Os anéis olímpicos são um símbolo dos Jogos Olímpicos composto por cinco arcos entrelaçados, com as cores azul, amarelo, preto, verde e vermelho sobre um fundo branco. Este foi originalmente concebido em 1913 pelo Barão Pierre de Coubertin, fundador dos Jogos Olímpicos modernos.\n[…]\nO emblema foi escolhido para ilustrar e representar o Congresso mundial de 1914: cinco anéis entrelaçados com cores diferentes - azul, amarelo, preto, verde e vermelho - são colocados no campo em branco do papel. Esses cinco anéis representam as cinco partes do mundo, que agora são conquistados para Olimpismo e dispostas a aceitar uma concorrência saudável.\n[…]\nAs cores utilizadas nos cinco anéis da bandeira foram escolhidas e representadas por Pierre de Coubertin devido à frequência em que aparecem nas bandeiras das diversas nações no mundo. Pelo menos uma das demais cores está presente em cada bandeira, dessa forma, integra todos os países, fornecendo um sentido universal para as Olimpíadas.\n[…]\nO desenho foi feito em 1913 por Pierre de Coubertin recorrendo a grafite e guache em papel, medindo 21 por 27,5 centímetros.\n[…]\nO projeto foi entregue por Pierre de Coubertin a um homem suíço, tendo ficado na família ao longo dos tempos até que um colecionador o comprou e colocou-o à venda em 2020.\n[…]\nEm 26 de Julho de 2020 o desenho foi vendido a um colecionador brasileiro por 185 mil euros, mais custos, ou 234 950 euros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Estádio Nacional do Japão",
      "descricao": "Estádio de Tóquio inaugurado em 2019, palco da abertura dos Jogos Olímpicos de 2020."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Depois que o projeto de Zaha Hadid foi abandonado, que arquiteto japonês desenhou o Estádio Nacional de Tóquio, cheio de madeira?",
    "resposta": "Kengo Kuma",
    "distratores": [
      "Tadao Ando",
      "Kenzo Tange",
      "Shigeru Ban"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Japan_National_Stadium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Japan_National_Stadium",
        "situacao": "ok",
        "texto": "The National Stadium (国立競技場, Kokuritsu Kyōgijō), alternatively Olympic Stadium (オリンピックスタジアム, Orinpikku Sutajiamu; during 2020 Summer Olympics and Paralympics), currently known as MUFG Stadium (MUFGスタジアム, MUFG Sutajiamu) for sponsorship reasons, and formerly known as New National Stadium (新国立競技場, Shin Kokuritsu Kyōgijō), is a multipurpose stadium in Tokyo, Japan.\n[…]\nThe construction of a new National Stadium for Tokyo 2020 was first announced in February 2012; the new stadium was originally set to use a design by British architect Zaha Hadid, which featured an arch-based appearance and a retractable roof. Following criticism of its design and expected costs, the Japanese government scrapped the original plans and began soliciting new bids. In December 2015, the Japan Sport Council accepted a bid by Taisei Corporation and Japanese architect Kengo Kuma.\n[…]\nAs of 18 September 2015, two contractors submitted bids for the process: the Taisei Corporation working with architect Kengo Kuma, and a consortium of several major Japanese contractors including the Takenaka, Shimizu, and Obayashi corporations working with architect Toyo Ito. Former winning architect Zaha Hadid was unable to find a (Japanese) contractor willing to work with her design, and was therefore forced to abandon efforts to resubmit her revised design in the new competition.\n[…]\nOn 21 December 2015, the Japan Sport Council announced that Kuma and the Taisei Corporation had been selected to design and construct the National Olympic Stadium. The stadium began construction in December 2016, and was set to conclude on 30 November 2019 when the stadium would be handed over to the International Olympic Committee (IOC) for necessary games and ceremony preparations, including test events.\n[…]\nJapan National Stadium — Architecture | Kengo Kuma and Associates"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dio_Nacional_do_Jap%C3%A3o",
        "situacao": "ok",
        "texto": "O Estádio Nacional do Japão (新国立競技場, Kokuritsu Kyōgijō) é um estádio multiúso localizado em Kasumigaoka, Shinjuku, Tóquio, no Japão. O estádio foi o palco para a abertura e encerramento dos Jogos Olímpicos de Verão de 2020, e também sediou os Jogos Paralímpicos de Verão de 2020. Foi inaugurado no final de 2019 depois da demolição do antigo Estádio Olímpico de Tóquio, em 2015.\n[…]\nAs obras oficiais começaram em 11 de dezembro de 2016. Os planos originais para o novo estádio foram descartados em julho de 2015 pelo primeiro-ministro japonês, Shinzō Abe, que anunciou uma nova onda após protestos públicos por causa do aumento dos custos da construção. Como resultado, o novo design não esteve pronto para a Copa do Mundo de Rugby de 2019, como inicialmente previsto.\n[…]\nUm novo design criado pelo arquiteto Kengo Kuma foi escolhido em dezembro de 2015 para substituir o projeto original e foi concluído em novembro de 2019.\n[…]\nDepois de Tóquio ser escolhida para sediar os Jogos Olímpicos de Verão de 2020, houve rumores de possivelmente renovar ou reconstruir o Estádio Olímpico Nacional. O estádio abrigaria as cerimônias de abertura e encerramento, bem como eventos de pista e campo.\n[…]\nFoi confirmado em fevereiro de 2012 que o estádio seria demolido e reconstruído, e recebido £1 bilhão para a reforma. Em novembro de 2012, as renderizações do novo estádio nacional foram reveladas com base em um projeto da arquiteta Zaha Hadid. O estádio foi demolido em 2015 e o novo foi inaugurado em 16 de dezembro de 2019. O novo estádio é palco de atletismo e da final do futebol feminino, bem como as cerimônias de abertura e encerramento das Olimpíadas.\n[…]\nEstádio de Tóquio\n[…]\nEstádio Nacional de Tóquio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Brasil nos Jogos Olímpicos de Verão de 2016",
      "descricao": "Participação brasileira, como país-sede, nos Jogos Olímpicos do Rio de Janeiro."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Criada na Cidade de Deus, que judoca conquistou a primeira medalha de ouro do Brasil nos Jogos do Rio, em 2016?",
    "resposta": "Rafaela Silva",
    "distratores": [
      "Mayra Aguiar",
      "Sarah Menezes",
      "Érika Miranda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rafaela_Silva",
      "https://en.wikipedia.org/wiki/Brazil_at_the_2016_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rafaela_Silva",
        "situacao": "ok",
        "texto": "Rafaela Lopes Silva (born 24 April 1992) is a Brazilian judoka. She won gold medals at the World Judo Championships of 2013 and 2022 and at the 2016 Summer Olympics in the –57 kg weight division. Currently, she occupies the rank of graduation third sergeant in the Navy of Brazil and integrates the Center of Physical Education Admiral Nunes (CEFAN), the Military Sports Department.\n[…]\nRafaela Silva grew up in the Rio de Janeiro slum known as Cidade de Deus. The first sport she liked was football, practicing against other children in a dirt field near her home in Jacarepagua. Because they were concerned about fights and violence in the streets, when Rafaela was 7 years old her parents Luiz Carlos and Zenilda Silva signed her up, together with her sister, Raquel, for judo classes at the Institute Reaction, newly established at Cidade de Deus by the former athlete Flávio Canto.\n[…]\nSilva won her first major medal by claiming silver at the 2011 World Judo Championships in Paris. During the 2013 World Judo Championships in Rio de Janeiro, Silva became the first woman to win a gold medal for Brazil in a World Judo Championship after defeating American Marti Malloy in the final. She repeated the feat at the 2016 Summer Olympics by defeating Mongolian Sumiya Dorjsuren in the final.\n[…]\nIn an interview with Globo Esporte, Rafaela came out as lesbian. She spoke about her girlfriend Thamara Cezar, whom she met via judo.\n[…]\nMedia related to Rafaela Silva at Wikimedia Commons\n[…]\nRafaela Silva at the International Judo Federation\n[…]\nRafaela Silva at JudoInside.com\n[…]\nRafaela Silva at Olympics.com\n[…]\nRafaela Silva at the Brazilian Olympic Committee (in Portuguese)\n[…]\nRafaela Silva at Olympedia\n[…]\nRafaela Silva at InterSportStats\n[…]\nRafaela Silva at the Paris 2024 Summer Olympics (archived, alternate link)\n[…]\nRafaela Silva at the Lima 2019 Pan American Games (archived)\n[…]\nRafaela Silva on Instagram"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_at_the_2016_Summer_Olympics",
        "situacao": "ok",
        "texto": "Brazil was the host nation of the 2016 Summer Olympics in Rio de Janeiro from 5 to 21 August 2016. This was the nation's twenty-second appearance at the Summer Olympics, having competed in all editions in the modern era from 1920 onwards, except the 1928 Summer Olympics in Amsterdam. Setting a milestone in Olympic history, Brazil became the first South American country to host the Summer Olympics,\n[…]\nThe first Brazilian gold medal was won by the judoka Rafaela Silva in the women's 57 kg . Rafaela Silva beat Wazari the Mongolian Sumiya Dorjsuren, the incumbent leader of the world ranking, in the final. The other 2 medals in judo were bronze. Mayra Aguiar and Rafael Silva repeated the same results obtained in London / 2012 achieved third places respectively in women's 78 kg and men's +100 kg events.\n[…]\nThiago Braz da Silva won the gold medal with an Olympic record and surpassing his personal best performance in 10 cm, despite never having won a medal in a senior global competition.\n[…]\nBrazilian judoka secured one place in each of the 14 weight divisions by virtue of hosting the Olympic tournament. The host nation's judo team for the Games was announced on 1 June 2016. Among these judokas featured reigning Olympic champion Sarah Menezes and London 2012 bronze medalists Felipe Kitadai, Rafael Silva, and Mayra Aguiar.\n[…]\nBrazil has entered seven tennis players (five men and two women) into the Olympic tournament. Two-time Olympian Thomaz Bellucci (world no. 62) qualified directly for the men's singles as one of the top 56 eligible players in the ATP World Rankings as of 6 June 2016. Rogério Dutra Silva and Teliana Pereira had claimed one of six Olympic places each in their respective singles events, as Brazil's top-ranked tennis players outside of direct qualifying position.\n[…]\nCOB: Rio 2016 Brazil's places\n[…]\nBrazil at the 2016 Summer Olympics at SR/Olympics (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rafaela_Silva",
        "situacao": "ok",
        "texto": "Rafaela Lopes Silva (Rio de Janeiro, 24 de abril de 1992) é uma judoca campeã olímpica e mundial brasileira.\n[…]\nEm agosto de 2013 tornou-se a primeira brasileira a se sagrar campeã mundial de Judô. Três anos depois, em agosto de 2016, conquistou a medalha de ouro da categoria até 57 kg nas Olimpíadas Rio 2016, após derrotar a judoca da Mongólia, Dorjsürengiin Sumiyaa, então líder do ranking mundial em 28 de outubro de 2023, ela conquistou o ouro, em final contra a argentina Brisa Candela, nos Jogos Pan-Americanos de Santiago.\n[…]\nRafaela Silva cresceu na favela carioca da Cidade de Deus. O primeiro esporte de que gostou foi o futebol, praticando contra outros meninos em um campo de terra próximo a sua casa, em Jacarepaguá. Preocupados com o tempo gasto brincando na rua, quando Rafaela tinha sete anos seus pais, Luiz Carlos e Zenilda Silva, a inscreveram junto da irmã, Raquel, para aulas de judô no Instituto Reação, recém montado na Cidade de Deus pelo ex-atleta Flávio Canto.\n[…]\n2013 foi um ano de glórias para a judoca. Em abril, conseguiu a medalha de ouro no Pan Americano de Judô. Em agosto, Rafaela entrou para a história do Judô brasileiro ao tornar-se a primeira brasileira a se sagrar campeã Mundial de Judô,\n[…]\nNo final de abril de 2017, Rafaela conquistou, com a Seleção Brasileira de judô feminino, a medalha de ouro no Pan-Americano realizado no Panamá.\n[…]\nEm outubro de 2023, Rafaela conquistou a medalha de ouro nos Jogos Pan-americanos de Santiago na categoria até 57 quilos. Com esse título, ela se tornou a primeira judoca a conquistar os Jogos Pan-americanos, o campeonato mundial e Olimpíadas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Decatlo",
      "descricao": "Prova combinada do atletismo masculino com dez provas disputadas em dois dias."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Depois de dois dias e nove provas, o decatlo olímpico termina sempre com qual corrida?",
    "resposta": "1500 metros",
    "distratores": [
      "400 metros",
      "800 metros",
      "5000 metros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Decathlon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Decathlon",
        "situacao": "ok",
        "texto": "The decathlon is a combined event in athletics consisting of 10 track and field events. The word was formed in analogy to the word \"pentathlon\", from Greek δέκα (déka 'ten') and ἆθλον (áthlon 'contest, prize'). Events are held over two consecutive days and the winners are determined by the combined performance in all. Performance is judged not by the position achieved but rather on a points system\n[…]\nIn modern athletics, the 10 events are: 100 metres, long jump, shot put, high jump, 400 metres, 110 metres hurdles, discus throw, pole vault, javelin throw, and 1500 metres. The current official decathlon world record holder is French athlete Kevin Mayer, who scored a total of 9126 points at the 2018 Décastar in France.\n[…]\nWomen's decathlon reversed field event order (optional)\n[…]\nThe one-hour decathlon is a special type of decathlon in which the athletes have to start the last of ten events (1500 m) within sixty minutes of the start of the first event. The world record holder is Czech decathlete Robert Změlík, who achieved 7897 points at a meeting in Ostrava, Czechoslovakia, in 1992.\n[…]\nThe world decathlon under-20 record is held by Hubert Trościanka, of Poland, who scored 8514 points at the European U20 Championships in Tampere, Finland, from 7-8th August 2025. This score was also the first over the 8500 point mark.\n[…]\nThe world decathlon under-20 record using senior implements is held by Torsten Voss, of East Germany, who scored 8397 points in Erfurt, East Germany, from 6–7 July 1982. This was the last record to be ratified because it is no longer a World Athletics under-20 record event.\n[…]\n(Within a completed decathlon scoring more than 7000 points)\n[…]\nIcosathlon or double decathlon\n[…]\nDecathlon world record progression\n[…]\nList of decathlon national champions (men)\n[…]\nIAAF decathlon homepage\n[…]\nIAAF list of decathlon records in XML\n[…]\nTeam Decathlon website\n[…]\nDecathlon splits of Olympic, World and European medalists"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Decatlo",
        "situacao": "ok",
        "texto": "Decatlo é uma competição de atletismo composta por dez provas. Nos Jogos Olímpicos, é exclusivamente praticada por homens. O equivalente feminino desta prova é o heptatlo, com sete provas. Os atletas inscritos competem num programa de dois dias, que inclui as seguintes modalidades: 100 metros rasos; salto em distância, arremesso de peso, salto em altura, 400 metros rasos (1.º dia); 110 metros com \n[…]\nA palavra decatlo tem origem grega e vem de δέκα (déka, significando \"dez\") e ἄθλος (áthlos, ou ἄθλον, áthlon, que significa \"façanha\"). Ele tem a sua origem no pentatlo dos Jogos Olímpicos da Antiguidade, que incluía salto em distância, lançamento do disco, do dardo, uma corrida e uma luta. A modalidade foi introduzida nos Jogos de 708 a.C. e se tornou popular por vários séculos. No sexto século a.C. pentatlos se tornaram parte de eventos religiosos.\n[…]\nUm evento com dez modalidades chamado \"All-around\", similar ao decatlo moderno, foi disputado no Campeonato de Atletismo Amador dos Estados Unidos em 1884 e tomou uma forma consistente a partir de 1890. Várias versões de decatlo foram disputadas durante o século XIX e ele foi passou a fazer parte do programa olímpico em St. Louis 1904, como um \"All-Around Championship\". O evento foi disputado por sete atletas de duas nações e, segundo as regras da época, durava três dias.\n[…]\nO primeiro campeão olímpico da Era Moderna foi o britânico Thomas Kiely. Nesta primeira participação, o decatlo era composto por:\n[…]\nEm Londres 1948 o decatlo foi vencido por Bob Mathias, de apenas dezessete anos, que persiste como o mais jovem campeão olímpico na história. Os Estados Unidos são o mais bem sucedido país nesta modalidade, em Jogos Olímpicos e campeonatos mundiais, conquistando a grande maioria das medalhas de ouro nestes eventos globais através dos anos. O norte-americano Ashton Eaton é o atual campeão e recordista olímpico do decatlo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Olímpia (sítio arqueológico)",
      "descricao": "Santuário de Zeus no Peloponeso, na Grécia, onde eram disputados os Jogos Olímpicos da Antiguidade."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Uma das sete maravilhas do mundo antigo ficava no santuário de Olímpia, onde aconteciam os Jogos da Antiguidade. Qual era ela?",
    "resposta": "Estátua de Zeus",
    "distratores": [
      "Colosso de Rodes",
      "Farol de Alexandria",
      "Templo de Ártemis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Statue_of_Zeus_at_Olympia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Statue_of_Zeus_at_Olympia",
        "situacao": "ok",
        "texto": "The Statue of Zeus at Olympia was a giant seated figure, about 12.4 m (41 ft) tall, made by the Greek sculptor Phidias around 435 BC at the sanctuary of Olympia, Greece, and erected in the Temple of Zeus there. Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods on Mount Olympus.\n[…]\nThe statue of Zeus was commissioned by the Eleans, custodians of the Olympic Games, in the latter half of the fifth century BC for their newly constructed Temple of Zeus. Seeking to outdo their Athenian rivals, the Eleans employed sculptor Phidias, who had previously made the massive statue of Athena Parthenos in the Parthenon.\n[…]\nThe sculptor also was reputed to have immortalized Pantarkes, the winner of the boys' wrestling event at the eighty-sixth Olympiad who was said to have been his \"beloved\" (eromenos), by carving Pantarkes kalos (\"Pantarkes is beautiful\") into Zeus's little finger, and by placing a relief of the boy crowning himself at the feet of the statue.\n[…]\nGreat Buddha of Kyoto Lost giant statue of Japan, like Zeus at Olympia\n[…]\nBarringer, Judith M. 2010. \"Zeus at Olympia.\" In The gods of ancient Greece: Identities and transformations. Edited by Jan Bremmer and Andrew Erskine, 155–77. Edinburgh: Edinburgh Univ. Press.\n[…]\nMcWilliam, Janette (2011). \"The statue of Zeus at Olympia in Western imagination via the Internet\". In McWilliam, Janette; Puttock, Sonia; Stevenson, Tom (eds.). The Statue of Zeus at Olympia: New Approaches. Cambridge Scholars Publishing. pp. 209–222. ISBN 978-1-4438-3032-4.\n[…]\nWorld History Encyclopedia – Statue of Zeus at Olympia\n[…]\nColin Delaney, \"A Wonder to Behold: The Statue of Olympian Zeus\"\n[…]\n(Ellen Papakyriakou) Olympia: Art: the chryselephantine statue of Zeus\n[…]\nMichael Lahanas, \"The colossal Zeus statue of Pheidias\" Archived 2013-04-03 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1tua_de_Zeus_em_Ol%C3%ADmpia",
        "situacao": "ok",
        "texto": "Estátua de Zeus em Olímpia era uma figura sentada gigante, com cerca de 13 metros de altura, feita pelo escultor grego Fídias por volta de 435 a.C. no santuário de Olímpia, Grécia, e erguida no Templo de Zeus. A escultura tinha placas de marfim e painéis de ouro sobre uma estrutura de madeira, que representava o deus Zeus sentado em um trono de madeira de cedro ornamentado com ébano, marfim, ouro \n[…]\nUma das Sete Maravilhas do Mundo Antigo, ela foi perdida e destruída durante o século V sem nenhuma cópia, sendo que seus detalhes e forma são conhecidos apenas através de antigas descrições e representações gregas em moedas.\n[…]\nA lenda dizia que quando Zeus franzia a fronte o Olimpo todo tremia. Quando a estátua foi construída, a rivalidade entre Atenas e Esparta pela hegemonia no Mediterrâneo e na Grécia continental mergulhou os gregos numa sucessão de guerras. Os combates, no entanto, não prejudicaram as realizações culturais e artísticas da época. Ao contrário, o século V a.C. ficou conhecido como o século de ouro na história grega devido ao extraordinário florescimento da arquitetura, escultura e outras artes.\n[…]\nDe acordo com Suetônio, o imperador romano Calígula \"deu ordens que tais estátuas dos deuses que eram especialmente famosos por sua santidade ou por seu mérito artístico, incluindo a de Zeus em Olímpia, deveriam ser trazidos da Grécia, a fim de remover suas cabeças e colocar a sua própria no lugar.\" Antes que isto pudesse acontecer, o imperador foi assassinado (no ano 41); sua morte iminente foi supostamente predita pela estátua, que \"de repente soltou uma tal risada que o andaime caiu e os operários caíram em seus calcanhares.\"\n[…]\nFrancis popozan M.A.. 1950. super zeus (New Haven: Yale University Press)\n[…]\nNate Whirt 1965. zeus, a estátua (Princeton: D. Van Nostrand Company)\n[…]\nMedia relacionados com Estátua de Zeus em Olímpia no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Mark Spitz",
      "descricao": "Nadador americano, nove vezes campeão olímpico, sete delas em Munique 1972."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Munique 1972, Mark Spitz ganhou sete ouros exibindo algo raro entre nadadores, que virou sua marca registrada. O quê?",
    "resposta": "Bigode",
    "distratores": [
      "Cabeça raspada",
      "Touca dourada",
      "Tatuagem no peito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mark_Spitz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mark_Spitz",
        "situacao": "ok",
        "texto": "Mark Andrew Spitz (born February 10, 1950) is an American former competitive swimmer and nine-time Olympic champion. He was the most successful athlete at the 1972 Summer Olympics in Munich, winning seven gold medals, each in world-record time. This achievement set a record that lasted for 36 years, until it was surpassed by fellow American Michael Phelps, who won eight golds at the 2008 Summer Ol\n[…]\nSpitz also set a number of world records during the U.S. Olympic Swim Trials held in Chicago's Portage Park in 1972.\n[…]\nIn 1982, bestselling author Clive Cussler, mentioned Mark Spitz in the novel \"Pacific Vortex!\", the origin-story of Dirk Pitt.\n[…]\nSpitz and his wife reside in Los Angeles, California.\n[…]\nI did some television and speaking engagements, and things just went from there.\" Spitz graduated from Indiana University in 1972.\n[…]\nAfter Spitz's return to the United States following the 1972 Olympics, he landed several lucrative corporate endorsement contracts. He earned about $7 million in a two-year period. \"A million dollars in 1972 would be equivalent to more than $10 million today,\" Spitz said in 2007. \"I did very well, thank you very much.\" Spitz added, \"I would say I was a pioneer. There wasn't anyone who'd gone to the Olympics before me who capitalized the same way on opportunity.\n[…]\nIn 1972, Spitz was accused of product placement during the medal ceremony. Following his victory in the 200-meter freestyle, Spitz carried his shoes and arrived barefoot to obtain his gold medal. He put them down as the American national anthem, \"The Star-Spangled Banner\" was played. After the anthem, he picked up his shoes and waved them to the crowd.\n[…]\nMarkSpitzUSA.com – Official website of Mark Spitz\n[…]\nMark Spitz Official Bio\n[…]\nMark Spitz ESPN Classic biography\n[…]\nMark Spitz at the Team USA Hall of Fame (archive July 20, 2023)\n[…]\nMark Spitz at Olympics.com\n[…]\nMark Spitz at Olympedia\n[…]\nMark Spitz at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mark_Spitz",
        "situacao": "ok",
        "texto": "Mark Andrew Spitz (Modesto, 10 de fevereiro de 1950) é o segundo maior nadador olímpico e também o segundo maior nadador em medalhas de ouro numa mesma Olimpíada de todos os tempos.\n[…]\nDurante os Jogos Olímpicos de Munique, em 1972, ele conquistou 7 medalhas de ouro em diversas modalidades, quebrando o recorde mundial em todas elas. Este recorde (mais medalhas de ouro conquistadas numa mesma olimpíada), que parecia imbatível, foi superado apenas por Michael Phelps, que conquistou 8 vitórias e quebrou sete recordes mundiais nos Jogos Olímpicos de Pequim, em 2008.\n[…]\nNo período de 1968 a 1972, sob a guarda  de Counsilman, Mark venceu todos os campeonatos norte-americanos de natação e tornou-se o Nadador do Ano de 1969, 1971 e 1972 em todo o mundo e Atleta Amador dos Estados Unidos, em qualquer esporte, em 1971.\n[…]\nDe volta aos Jogos Olímpicos, em Munique 1972, Spitz entrou para a história ao conquistar sete medalhas de ouro nas provas da natação, quebrando o recorde mundial de todas elas, e tornando-se o grande nome da natação norte-americana e mundial em todos os tempos. Spitz disputou e venceu os 100m livre, 200m livre, 100m borboleta, 200m borboleta, 4x100m livre, 4x200m livre e 4X100m estilos (medley).\n[…]\nSeus feitos, entretanto, foram obscurecidos pelo famoso Massacre de Munique, que custou a vida de 11 atletas israelenses, seqüestrados na vila olímpica e mortos por terroristas palestinos durante os Jogos. Spitz, americano de origem judaica, foi retirado às pressas do país por forças de segurança dos Estados Unidos.\n[…]\nBiografia de Mark Spitz no ESPN Classic (ingles)\n[…]\nMark Spitz no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Chama olímpica",
      "descricao": "Fogo símbolo dos Jogos Olímpicos, aceso em Olímpia e mantido aceso durante toda a competição."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Olímpia, meses antes de cada edição dos Jogos, de que maneira a chama olímpica é acesa na cerimônia?",
    "resposta": "Com raios de sol e espelho",
    "distratores": [
      "Com pedras de sílex",
      "Com fósforo cerimonial",
      "Com brasa de templo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olympic_flame"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olympic_flame",
        "situacao": "ok",
        "texto": "The Olympic flame is a symbol used in the Olympic movement. It is also a symbol of continuity between ancient and modern games. The Olympic flame is lit at Olympia, Greece. This ceremony starts the Olympic torch relay, which formally ends with the lighting of the Olympic cauldron during the opening ceremony of the Olympic Games. The flame then continues to burn in the cauldron (or in a lantern as "
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chama_Ol%C3%ADmpica",
        "situacao": "ok",
        "texto": "A Chama Olímpica ou Tocha Olímpica é um dos símbolos dos Jogos Olímpicos, e evoca a lenda de Prometeu que teria roubado o fogo da forja de Hefesto para o entregar aos mortais. Durante a celebração dos Jogos Olímpicos antigos, em Olímpia, mantinha-se aceso um fogo que ardia enquanto durassem as competições. Esta tradição foi reintroduzida nos Jogos Olímpicos de Verão de 1928.\n[…]\nExcepto esses anos e em 1956, ano em que foi acesa em Roma, em todos os outros Jogos de Inverno a chama foi acesa em Olímpia.\n[…]\nPoucos meses antes de cada realização dos Jogos Olímpicos (a data exata varia de acordo com a duração do percurso até ao Estádio Olímpico), a chama é ateada em Olímpia, frente às ruínas do templo de Hera, numa cerimónia que pretende recriar o método usado na antiguidade e que se destinava a garantir a pureza da chama: actrizes representando sacerdotisas de Héstia colocam uma tocha na concavidade de um espelho que concentra os raios da luz do Sol que, agora como na antiguidade, acende a chama que marcará o início de mais uma realização dos Jogos.\n[…]\nComo prevenção, uns dias antes acende-se uma chama, usando o mesmo método, que é então mantida acesa para ser usada caso o céu esteja nublado no dia da cerimónia. Para os Jogos Olímpicos de Inverno o procedimento é semelhante, excepto que a passagem da chama para o primeiro estafeta é feita em frente ao monumento em homenagem a Pierre de Coubertin.\n[…]\nO ritual do acendimento da pira olímpica na Cerimônia de Abertura se tornou um ritual original e espetacular a cada edição. Nos Jogos de Barcelona 1992, o arqueiro paraolímpico Antonio Rebollo atirou uma flecha com fogo na Pira Olímpica. Dois anos mais tarde, em Lillehammer 1994, a tocha Olímpica entrou no estádio transportada por um saltador de esqui, e o Príncipe Haakon da Noruega acendeu a Pira Olímpica.\n[…]\nDocumento do COI com a história da chama Olímpica (PDF com 1MB)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Natação",
      "descricao": "Esporte aquático em que atletas competem nadando em piscina ou águas abertas, com os estilos crawl, costas, peito e borboleta."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre as provas individuais de natação olímpica disputadas em piscina, qual é a mais longa?",
    "resposta": "1500 metros livre",
    "distratores": [
      "800 metros livre",
      "400 metros medley",
      "200 metros borboleta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Swimming_at_the_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swimming_at_the_Summer_Olympics",
        "situacao": "ok",
        "texto": "Swimming has been contested at every modern Summer Olympics. It has been open to women since 1912. The discipline of swimming is part of the Olympic sport of aquatics alongside artistic swimming, diving, marathon swimming and water polo. At the Olympics, swimming has the second-highest number of medal-contested events after athletics.\n[…]\nThe 800 m event was added to the women's programme in 1968; whilst longer, this event was not as far as the men's 1500 m event. This discrepancy was evened out in 2020: that year, the 1500 metres was included in the women's programme for the first time and the 800 metres freestyle was added to the men's programme."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nata%C3%A7%C3%A3o_nos_Jogos_Ol%C3%ADmpicos",
        "situacao": "ok",
        "texto": "A natação é um dos esportes mais tradicionais dos Jogos Olímpicos, disputado em todas as edições. A partir dos Jogos de 1912 foi aberto para as mulheres. Depois do atletismo, a natação é o esporte que distribui o maior número de medalhas.\n[…]\n«Informações da natação no site do COI» (em inglês)\n[…]\n«Informações da natação na Olympedia» (em inglês)",
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
