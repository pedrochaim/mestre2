Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Automobilismo** (tema **Esportes**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Emerson Fittipaldi",
      "descricao": "Piloto brasileiro bicampeão mundial de Fórmula 1, em 1972 e 1974, e bicampeão das 500 Milhas de Indianápolis."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1970, na sua quarta corrida de Fórmula 1, Emerson Fittipaldi venceu e garantiu o título póstumo de Jochen Rindt. Em que país foi essa vitória?",
    "resposta": "Estados Unidos",
    "fonte": [
      "https://en.wikipedia.org/wiki/1970_United_States_Grand_Prix",
      "https://en.wikipedia.org/wiki/Emerson_Fittipaldi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1970_United_States_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1970 United States Grand Prix was a Formula One motor race held on October 4, 1970 at the Watkins Glen Grand Prix Race Course in Watkins Glen, New York. It was race 12 of 13 in both the 1970 World Championship of Drivers and the 1970 International Cup for Formula One Manufacturers.\n[…]\nThe 108-lap race was won by Emerson Fittipaldi, driving a Lotus-Ford, after he started from third position. Fittipaldi achieved his first Formula One victory, and the first for a Brazilian driver, in only his fourth Grand Prix start. Mexican driver Pedro Rodríguez finished second in a BRM, having led before a late pit stop for fuel, while Fittipaldi's Swedish team-mate Reine Wisell, making his F1 debut, finished third, which would turn out to be his only podium finish.\n[…]\nBelgian driver Jacky Ickx finished fourth in his Ferrari, having started from pole position before pitting to repair a broken fuel line. This result meant that Jochen Rindt became the first and, to date, only posthumous Formula One World Champion.\n[…]\nEmerson Fittipaldi, who spent the first half of the season in European Formula Two, was just five hundredths behind Stewart in third.\n[…]\nIckx had needed to win to have a chance of overtaking Jochen Rindt in the Championship; his fourth-place finish would mean that Rindt would become the first posthumous Formula One World Champion.\n[…]\nHis victory was the seventh American win for Lotus. It clinched the Drivers' Championship for the team's dead leader, Jochen Rindt, and the Constructors' Championship for Lotus and Colin Chapman.\n[…]\nThis was the first Grand Prix win and podium finish for future World Champion Emerson Fittipaldi and for a Brazilian driver.\n[…]\nGordon Kirby (October, 1995). \"Emerson Who?\". RACER, 70-72."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Emerson_Fittipaldi",
        "situacao": "ok",
        "texto": "Emerson Fittipaldi (Brazilian Portuguese: [ˈɛmeʁsõ fitʃiˈpawdʒi]; born 12 December 1946) is a Brazilian former racing driver and motorsport executive, who competed in Formula One from 1970 to 1980. Fittipaldi won two Formula One World Drivers' Championship titles,  in 1972 and 1974 with Lotus and McLaren, respectively; he won 14 Grands Prix across 11 seasons.\n[…]\nMoving up from Formula Two, Fittipaldi made his race debut for Team Lotus as a third driver at the 1970 British Grand Prix. After Jochen Rindt was killed at the 1970 Italian Grand Prix, the Brazilian became Lotus's lead driver in only his fifth Grand Prix. He enjoyed considerable success with Lotus, winning the World Drivers' Championship in 1972 at the age of 25. At the time, he was the youngest ever F1 world champion, and he held the record for 33 years.\n[…]\nThe third seat was given to Alex Soler-Roig in early 1970, and then to Fittipaldi starting with the British GP in July, with Jochen Rindt and John Miles as the regular seat holders. Fittipaldi scored a fourth place as the No. 3 driver at the next German GP where the No. 1 Jochen Rindt won, and the No. 2 John Miles retired.\n[…]\nTeam Lotus plans for the season drastically changed when Jochen Rindt was killed at Monza in September and became the only driver to win the championship posthumously. John Miles also left the team, and Fittipaldi was promoted to be the Lotus No. 1 driver on his fifth F1 race at the United States GP with Reine Wisell and Pete Lovely as the teammates. Fittipaldi proved up to the task and won this first post-Rindt race for Lotus.\n[…]\nLudvigsen, Karl (2002). Emerson Fittipaldi Heart of a Racer. Osceola: Motorbooks International. ISBN 1-85960-837-X.\n[…]\nEmerson Fittipaldi at IMDb\n[…]\nEmerson Fittipaldi career summary at DriverDB.com\n[…]\nEmerson Fittipaldi driver statistics at Racing-Reference"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_dos_Estados_Unidos_de_1970",
        "situacao": "ok",
        "texto": "Resumo do Grande Prêmio dos Estados Unidos de Fórmula 1 realizado em Watkins Glen em 4 de outubro de 1970. Décima segunda etapa do campeonato, nela Emerson Fittipaldi, da Lotus-Ford, conseguiu a primeira vitória de sua carreira com Pedro Rodríguez em segundo pela BRM e Reine Wisell em terceiro pela Lotus-Ford. Graças a esse resultado, a equipe de Colin Chapman assegurou o título de Jochen Rindt, o\n[…]\nPresente na Fórmula 1 desde o Grande Prêmio de Mônaco de 1958, a Lotus somou 41 vitórias e três títulos mundiais de pilotos com Jim Clark e Graham Hill, além de igual número de títulos entre os construtores antes de chegar aos Estados Unidos para mais uma etapa do campeonato de 1970.\n[…]\nE tinha que ser assim. Ambos mereciam, o primeiro porque é um grande volante e Rindt porque era o melhor do mundo atualmente\", disse o proprietário da Lotus ao comentar o resultado do Grande Prêmio dos Estados Unidos, cuja imagem final tinha Emerson Fittipaldi no alto do pódio tendo ao seu lado o mexicano Pedro Rodriguez e o sueco Reine Wisell, este satisfeito com o melhor resultado de sua carreira. Um público estimado em 110 mil pessoas assistiu a corrida.\n[…]\nPrimeiro brasileiro a vencer na Fórmula 1, Emerson Fittipaldi deixa os Estados Unidos em décimo lugar no mundial de pilotos (12 pontos). O êxito em terras norte-americanas atestou o talento precoce do brasileiro, pois o mesmo venceu logo em sua quarta corrida na categoria e ainda foi alçado à história, pois tornou-se o primeiro sul-americano a triunfar desde o pentacampeão Juan Manuel Fangio no Grande Prêmio da Alemanha de 1957.\n[…]\nGanhei o Grande Prêmio dos Estados Unidos depois de sair de um fim de semana de tragédia\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Nelson Piquet",
      "descricao": "Piloto brasileiro tricampeão mundial de Fórmula 1, em 1981, 1983 e 1987."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1981, Nelson Piquet garantiu seu primeiro título mundial numa pista montada no estacionamento de um hotel-cassino. Em que cidade americana?",
    "resposta": "Las Vegas",
    "fonte": [
      "https://en.wikipedia.org/wiki/1981_Caesars_Palace_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1981_Caesars_Palace_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1981 Caesars Palace Grand Prix was a Formula One motor race held on October 17, 1981, in Las Vegas, Nevada, United States. It was the fifteenth and final race of the 1981 Formula One World Championship.\n[…]\nThe 75-lap race was won by Australian driver Alan Jones, driving a Williams-Ford, with Frenchman Alain Prost second in a Renault and Italian Bruno Giacomelli third in an Alfa Romeo. Brazilian Nelson Piquet finished fifth in his Brabham-Ford to take the Drivers' Championship by one point from Jones's Argentine teammate, Carlos Reutemann, who finished eighth having started from pole position.\n[…]\nGoing into this race, three drivers were in contention for the World Championship. Argentine Carlos Reutemann, driving a Williams-Ford, had 49 points having won two races, while Brazilian Nelson Piquet, driving a Brabham-Ford, had 48 having won three. Frenchman Jacques Laffite, driving a Ligier-Matra, had an outside chance on 43, having won two races including the previous race in Canada.\n[…]\nThis was the third year in succession that the United States hosted the final round of the World Championship. This time, however, it took place in Las Vegas, instead of Watkins Glen in upstate New York: after twenty years on the Grand Prix schedule, the organizers at Watkins Glen were unable to fulfill financial obligations for 1981.\n[…]\nEven in practice, Piquet suffered noticeably and became physically sick; he later got a 90-minute massage from Sugar Ray Leonard's masseur to help sort out his troubled back and \"Las Vegas neck\".\n[…]\nPiquet took fifteen minutes to recover from heat exhaustion after making it to the finish, but he had collected the two points for fifth place, and was the new World Champion."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_de_Caesars_Palace_de_1981",
        "situacao": "ok",
        "texto": "Resumo do Grande Prêmio de Caesars Palace de Fórmula 1 realizado em Las Vegas em 17 de outubro de 1981. Décima quinta etapa do campeonato, marcou a última vitória na carreira do australiano Alan Jones, da Williams-Ford, que subiu ao pódio junto com Alain Prost, da Renault, e Bruno Giacomelli, da Alfa Romeo. Neste dia, o brasileiro Nelson Piquet, da Brabham-Ford, conquistou o primeiro título mundia\n[…]\nImpossibilitado de cumprir suas obrigações financeiras, o circuito de Watkins Glen em Nova York não pôde ser o palco da quinta decisão de título que a Fórmula 1 reservou para os Estados Unidos. Por conta desse fato, uma nova pista foi improvisada na área do hotel Caesars Palace, e por ser no sentido anti-horário o físico dos pilotos foi abusivamente exigido durante todo o fim de semana, sobretudo na região do pescoço.\n[…]\nNaquele momento havia três postulantes ao título: Carlos Reutemann, com 49 pontos; Nelson Piquet, 48 pontos, e Jacques Laffite, 43 pontos.\n[…]\nNa corrida de sábado, Jones saltou à frente enquanto Reutemann e Piquet optaram pela cautela sendo que o brasileiro caiu da quarta para a nona posição no início da prova enquanto Alain Prost e Gilles Villeneuve estavam mais próximos ao australiano da Williams.\n[…]\nPrudente e sempre adiante de Reutemann, o brasileiro Nelson Piquet diminuiu o ritmo e foi ultrapassado por Bruno Giacomelli e Nigel Mansell conservando a quinta posição enquanto o argentino despencou para o oitavo lugar ao ser superado por Laffite e John Watson, sobretudo, diria depois, por problemas de câmbio.\n[…]\nMantidas as posições o brasileiro conquistou o título mundial, mas só pôde comemorar após quinze minutos, tempo necessário para se recompor do cansaço físico potencializado pelo forte calor.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Rubens Barrichello",
      "descricao": "Piloto brasileiro de Fórmula 1, que correu de 1993 a 2011 e foi companheiro de Michael Schumacher na Ferrari."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2000, largando apenas em décimo oitavo, Rubens Barrichello conquistou sua primeira vitória na Fórmula 1. Em que país?",
    "resposta": "Alemanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/2000_German_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2000_German_Grand_Prix",
        "situacao": "ok",
        "texto": "The 2000 German Grand Prix (formally the Grosser Mobil 1 Preis von Deutschland 2000) was a Formula One motor race contested on 30 July 2000, at the Hockenheimring in Baden-Württemberg, Germany, in front of 102,000 people. It was the 62nd German Grand Prix and the 11th round of the 2000 Formula One World Championship. Ferrari's Rubens Barrichello won the 45-lap race after starting 18th. McLaren's M\n[…]\nThe track became completely dry during the last practice session and lap times fell as drivers found more grip on it. Nearly every driver exited the pit lane in the first minutes, giving teams a final chance to significantly adjust their cars before qualifying. Häkkinen set the day's quickest time, a 1:41.658, with 15 minutes remaining; his teammate Coulthard finished third. Ferrari's Michael Schumacher and Rubens Barrichello were second and fourth, respectively.\n[…]\nOn lap six, Herbert lost fifth to Barrichello, while Frentzen gained more places, passing Ralf Schumacher and Wurz for 11th.\n[…]\nBy lap 20, Häkkinen had a 1.4-second advantage over Coulthard, who was nearly 22 seconds ahead of Trulli. De la Rosa was 2.1 seconds behind Trulli and was being caught by Barrichello, who set a new fastest lap of 1:44.300. At this stage, it appeared that McLaren would finish in first and second. Villeneuve passed Irvine for eighth on lap 22.\n[…]\nBy lap 44, it began raining more heavily, but Barrichello held on to win his maiden Formula One race and the first for a Brazilian driver since Ayrton Senna in the 1993 Australian Grand Prix on his 123rd entry, at an average speed of 215.340 km/h (133.806 mph). It was Barrichello's sole victory of the 2000 season. Häkkinen finished 7.4 seconds behind Barrichello, with his teammate Coulthard third."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Alemanha_de_2000",
        "situacao": "ok",
        "texto": "Resultados do Grande Prêmio da Alemanha de Fórmula 1 realizado em Hockenheim em 30 de julho de 2000. Décima primeira etapa do campeonato, foi vencido pelo brasileiro Rubens Barrichello, da Ferrari, o qual subiu ao pódio ladeado por Mika Häkkinen e David Coulthard, pilotos da McLaren-Mercedes.\n[…]\nPrimeira vitória de Rubens Barrichello que nas voltas finais optou por permanecer na pista a entrar no box e colocar pneus de pista molhada em virtude de uma chuva que começava. A estratégia foi sugerida pelo próprio piloto.\n[…]\nEsta foi a primeira vitória de um piloto brasileiro desde Ayrton Senna no Grande Prêmio da Austrália de 1993.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Alberto Ascari",
      "descricao": "Piloto italiano bicampeão mundial de Fórmula 1 pela Ferrari, em 1952 e 1953, morto em 1955."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No Grande Prêmio de Mônaco de 1955, o italiano Alberto Ascari errou a chicane e foi parar com o carro onde?",
    "resposta": "No mar, dentro do porto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alberto_Ascari",
      "https://en.wikipedia.org/wiki/1955_Monaco_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Ascari",
        "situacao": "ok",
        "texto": "Alberto Ascari (13 July 1918 – 26 May 1955) was an Italian racing driver, who competed in Formula One from 1950 to 1955. Ascari won two Formula One World Drivers' Championship titles, which he won in 1952 and 1953 with Ferrari, and won 13 Grands Prix across six seasons. In endurance racing, Ascari won the Mille Miglia in 1954 with Lancia.\n[…]\nDuring the 1955 Monaco Grand Prix on 22 May, Ascari crashed into the harbour through hay bales and sandbags late in the race after missing a chicane while leading, reportedly distracted by either the crowd's reaction to Stirling Moss' retirement or the close attentions of the lapped Cesare Perdisa behind. Whatever distracted him, he approached the chicane too quickly, and chose the only way out and took his D50 through the barriers into the sea, missing a substantial iron bollard by about 30 cm.\n[…]\nLater it was renamed in his honour, and was subsequently replaced with a chicane called Variante Ascari. The reasons and circumstances of the accident, including why Ascari, who was well known for his attention to safety, drove another driver's car, and without his own lucky blue helmet (he had left it at home, and apparently reasoned that, after his accident in Monaco four days earlier, getting back to race driving as soon as possible was the best way to recover), never came to light.\n[…]\nHis rivalry with Juan Manuel Fangio was one of the greatest in Formula One; from 31 starts each, they combined for 27 wins, 30 pole positions, and 27 fastest laps, some of which were shared with others. Either Ascari or Fangio held the lead for at least one lap, often times it was both leading races and for more than a lap, in all except for two of the 37 Grands Prix (from the 1950 British Grand Prix to the 1955 Monaco Grand Prix). In total, they led 66.6% of 2,508 laps.\n[…]\nAlberto Ascari at Find a Grave"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1955_Monaco_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1955 Monaco Grand Prix was a Formula One motor race held at Monaco on 22 May 1955. It was race 2 of 7 in the 1955 World Championship of Drivers and was given an honorary name, Grand Prix d'Europe. The 100-lap race was won by Ferrari driver Maurice Trintignant after he started from ninth position. Eugenio Castellotti finished second for the Lancia team and Maserati drivers Jean Behra and Cesare\n[…]\nThis race marked the Grand Prix debut for Cesare Perdisa. It was the only Grand Prix appearance for Ted Whiteaway. This was the last Grand Prix appearance for Alberto Ascari; he was killed four days later testing a Ferrari sports car at Monza.\n[…]\nAlberto Ascari matched Fangio's time in his Lancia D50 during the Saturday practice, though the order had been set on the first day of practice in a singular exception to the policy of the time of all practice laps counting towards grid position.\n[…]\nAscari never made it past the pits to see that, however: his Lancia didn't make the chicane (possibly losing traction on oil from Moss's engine failure) and he flipped over the barrier and into the harbour. His Lancia was craned out of 25 feet of water while he spent the night in the hospital.\n[…]\nThere are no definite explanations for either of Ascari's accidents, but the Monza incident was, apart from possible undetected brain injuries after the Monaco crash, probably caused by an improperly-sized tire – 7.00x16 rather than 6.50x16 – combined with an imperfect track surface.\n[…]\nMercedes also had not seen the last of their troubles – after all three cars left contention with mechanical problems at Monaco, the worst accident in racing history involved a Mercedes.\n[…]\nKettlewell, Mike. \"Monaco: Road Racing on the Riviera\", in Northey, Tom, editor. World of Automobiles, Volume 12, pp. 1381–4. London: Orbis, 1974."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alberto_Ascari",
        "situacao": "ok",
        "texto": "Alberto Antonio Ascari, mais conhecido como Alberto Ascari (Milão, 13 de julho de 1918 — Monza, 26 de maio de 1955) foi um automobilista de Fórmula 1 e uma das primeiras estrelas da Ferrari.\n[…]\nNascido em Milão, Itália, Ascari tinha a velocidade nas suas veias, seu pai Antonio Ascari foi um talentoso piloto nos anos 1920, correndo com Alfa Romeos. Antonio morreu enquanto liderava o Grande Prêmio da França em 1925 mas o jovem Ascari tinha interesse em corridas ao invés de ódio. Ele pilotou motocicletas no princípio de sua carreira; foi depois que ele entrou na prestigiada Mille Miglia num carro esporte da Ferrari que ele começou a pilotar veículos de quatro rodas.\n[…]\nSua carreira de piloto foi interrompida durante a Segunda Guerra Mundial, depois começou a correr Grandes Prêmios com a Maserati. Seu companheiro de equipe Luigi Villoresi, que foi mentor e amigo de Alberto. Ele venceu seu primeiro Grande Prêmio em San Remo, Itália em 1948 e venceu outra corrida no ano seguinte pela mesma equipe. Seu maior sucesso depois de se juntar a Villoresi na Ferrari; ele venceu mais três corridas.\n[…]\nSua temporada de 1955 começou de maneira similar, abandonando duas vezes, o último foi um espetacular acidente em Mônaco onde ele bateu dentro do porto depois de passar por uma chicane. Uma semana depois, em 26 de maio, ele foi a Monza para testar um carro esporte Ferrari e bateu em uma das curvas. Ele morreu no acidente, uma morte que ainda é um tanto misteriosa. A curva onde o acidente aconteceu ganhou seu nome, a Variante Ascari.\n[…]\nAlberto Ascari está enterrado próximo a seu pai no Cimitero Monumentale em Milão.\n[…]\n«Grand Prix History - Hall of Fame». , Alberto Ascari",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Niki Lauda",
      "descricao": "Piloto austríaco tricampeão mundial de Fórmula 1, em 1975, 1977 e 1984."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1976, Niki Lauda ficou gravemente queimado quando seu carro pegou fogo em qual circuito alemão, cercado por florestas?",
    "resposta": "Nürburgring",
    "fonte": [
      "https://en.wikipedia.org/wiki/1976_German_Grand_Prix",
      "https://en.wikipedia.org/wiki/Niki_Lauda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1976_German_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1976 German Grand Prix (formally the XXXVIII Großer Preis von Deutschland)  was a Formula One motor race held at the Nürburgring on 1 August 1976. It was the scene of reigning world champion Niki Lauda's near-fatal accident, and the last Formula One race to be held on the 22.835-kilometre (14.189 mi) Nordschleife section of the track. The 14-lap race was the tenth round of the 1976 Formula One\n[…]\nFor these reasons, it had been decided even before the 1976 race that after nearly half a century, it would be the last German Grand Prix held on the old Nürburgring and the last on the Nordschleife section.\n[…]\nThe 14-lap race was due to start at 1:30pm. but a 15-minute delay was announced as there were numerous Renault 5 saloons to sweep up after they had had a race. The race was delayed till 2:05pm as the weather turned to wet on the far side of the circuit. Most drivers started the race on wet tyres, except Jochen Mass, who, having much experience at the Nürburgring and expecting a change for better weather, decided to use dry weather tyres.\n[…]\nLauda's accident proved why the old Nürburgring had become too dangerous and too difficult to manage satisfactorily for Formula One. The organizers just did not have the resources to manage such a long circuit, even though the \"ONS-Staffel\" was equipped with a Porsche 911 rescue car.\n[…]\nAfter the new Nürburgring was rebuilt with the Nordschleife being bypassed, Formula One would return to the new 2.8 miles (4.5 km) circuit for multiple European Grands Prix beginning in 1984, the German Grand Prix from 1985 and in 2020, the inaugural Eifel Grand Prix.\n[…]\nChris Amon decided to end his career immediately after Lauda's accident, but returned for the 1976 Canadian Grand Prix, driving a Williams-Ford for Walter Wolf Racing."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Niki_Lauda",
        "situacao": "ok",
        "texto": "Andreas Nikolaus \"Niki\" Lauda (22 February 1949 – 20 May 2019) was an Austrian racing driver, motorsport executive, and aviation entrepreneur, who competed in Formula One from 1971 to 1979 and from 1982 to 1985. Lauda won three Formula One World Drivers' Championship titles and—at the time of his retirement—held the record for most podium finishes (54); he won 25 Grands Prix across 13 seasons, and\n[…]\nOutside of Formula One, Lauda won the Nürburgring 24 Hours in 1973 with Alpina, and the inaugural BMW M1 Procar Championship in 1979 with Project Four. In aviation, Lauda founded and managed three airlines: Lauda Air from 1985 to 1999, Niki from 2003 to 2011, and Lauda from 2016 onwards. He returned to Formula One in an advisory role at Ferrari in 1993, and was the team principal of Jaguar from 2001 to 2002.\n[…]\nA week before the 1976 German Grand Prix at the Nürburgring, even though he was the fastest driver on that circuit at the time, Lauda urged his fellow drivers to boycott the race, largely because of the 23-kilometre (14 mi) circuit's safety arrangements, citing the organisers' lack of resources to properly manage such a huge circuit, including lack of fire marshals, fire and safety equipment, and safety vehicles.\n[…]\nLauda is sometimes known by the nickname \"the Rat\", \"SuperRat\" or \"King Rat\" because of his prominent buck teeth. He was associated with both Parmalat and Viessmann, sponsoring the ever-present cap he wore from 1976 to hide the severe burns he sustained in his Nürburgring accident. Lauda said in a 2009 interview with the German newspaper Die Zeit that an advertiser was paying €1.2 million for the space on his red cap.\n[…]\nNürburgring 24 Hours: 1st, 1973\n[…]\nNurburgring Inaugural Saloon Car Race: 2nd, 1984\n[…]\nHunt–Lauda rivalry\n[…]\nLauda Air Italy\n[…]\nMedia related to Niki Lauda at Wikimedia Commons\n[…]\nNiki Lauda at IMDb\n[…]\nNiki Lauda discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Alemanha_de_1976",
        "situacao": "ok",
        "texto": "Resultados do Grande Prêmio da Alemanha de Fórmula 1 realizado em Nürburgring em 1º de agosto de 1976. Décima etapa da temporada, nesta corrida um terrível acidente quase custou a vida de Niki Lauda, ora piloto da Ferrari e também campeão mundial. Interrompida por cerca de uma hora, a prova foi reiniciada e teve o britânico James Hunt como vencedor pela McLaren-Ford.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Niki Lauda",
      "descricao": "Piloto austríaco tricampeão mundial de Fórmula 1, em 1975, 1977 e 1984."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois do acidente de 1976, Niki Lauda passou a aparecer quase sempre com um boné vermelho. Por quê?",
    "resposta": "Para esconder as cicatrizes das queimaduras",
    "fonte": [
      "https://en.wikipedia.org/wiki/Niki_Lauda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Niki_Lauda",
        "situacao": "ok",
        "texto": "Andreas Nikolaus \"Niki\" Lauda (22 February 1949 – 20 May 2019) was an Austrian racing driver, motorsport executive, and aviation entrepreneur, who competed in Formula One from 1971 to 1979 and from 1982 to 1985. Lauda won three Formula One World Drivers' Championship titles and—at the time of his retirement—held the record for most podium finishes (54); he won 25 Grands Prix across 13 seasons, and\n[…]\nLauda spoke fluent German, English, and Italian.\n[…]\nLauda, Niki (1977). The Art and Science of Grand Prix Driving (a.k.a. Formula 1: The Art and Technicalities of Grand Prix Driving). Translated by Irving, David. Osceola, Wis.: Motorbooks International. ISBN 9780879380496. OCLC 483675371.\n[…]\nLauda, Niki (1977). Protokoll: meine Jahre mit Ferrari. Stuttgard; Vienna: Stuttgart Motorbuch-Verlag; Orac. ISBN 9783853688434. OCLC 3869352.\n[…]\nLauda, Niki (1978). My Years with Ferrari. Osceola, Wis.: Motorbooks International. ISBN 9780879380595. OCLC 3842607. AKA For the Record: My Years with Ferrari (British edition).\n[…]\nLauda, Niki (1982). Die neue Formel 1. Stuttgart; Vienna: Stuttgart Motorbuch-Verlag; Orac. ISBN 9783853689103. OCLC 1072406853.\n[…]\nLauda, Niki (1984). The New Formula One: A Turbo Age. Osceola, Wis.: Motorbooks International. ISBN 9780879381790. OCLC 10456956.\n[…]\nLauda, Niki; Völker, Herbert (1985). Niki Lauda: Meine Story. Stuttgard; Vienna: Stuttgart Motorbuch-Verlag; Orac. ISBN 9783701500253. OCLC 38110109.\n[…]\nLauda, Niki; Völker, Herbert (1986). To Hell and Back: An Autobiography. Translated by Crockett, E. J. London: Stanley Paul. ISBN 9780091642402. OCLC 476752274.\n[…]\nLauda, Niki (1996). Das dritte Leben. Munich: Heyne. ISBN 9783453115729. OCLC 40286522.\n[…]\nHunt–Lauda rivalry\n[…]\nLauda Air Italy\n[…]\nLauda, Niki; Völker, Herbert (1986). To Hell and Back. London: Vintage. ISBN 978-0-09-164240-2.\n[…]\nMedia related to Niki Lauda at Wikimedia Commons\n[…]\nNiki Lauda at IMDb\n[…]\nNiki Lauda discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Niki_Lauda",
        "situacao": "ok",
        "texto": "Andreas Nikolaus \"Niki\" Lauda (Viena, 22 de fevereiro de 1949 – Zurique, 20 de maio de 2019), mais conhecido como Niki Lauda, foi um automobilista e piloto austríaco. Participou do Campeonato Mundial de Fórmula 1 entre 1971 a 1979 e de 1982 a 1985, disputando 177 Grandes Prêmios, obtendo 25 vitórias, 24 pole positions e 24 melhores voltas, totalizando 420,5\n[…]\nManteve o ritmo competitivo em 1976, mas um acidente em Nürburgring (onde seu carro se incendiou, e Lauda ficou preso nas ferragens por 55 segundos) quase lhe tirou a vida. Um padre chegou a ser chamado ao hospital para lhe dar a extrema unção. Mas apesar de todos os esforços, as graves queimaduras lhe custaram parte da orelha direita.\n[…]\nLauda ainda voltaria a correr no mesmo ano de 1976 e só perderia o título mundial na última corrida, o Grande Prêmio do Japão (estreia no calendário) para o inglês James Hunt. Em 1977, obteve 3 vitórias e recuperou o título mundial.\n[…]\nLauda ia para a defesa do título em 1985, mas sem motivação, obteve apenas 1 vitória (na Holanda) e abandonou 12 das 15 provas de que participou no ano. Sua última prova na carreira foi o Grande Prêmio da Austrália (estreia no calendário), porém abandonou-a após um acidente no final da reta Brabham. Encerrou sua carreira na categoria em 10º na classificação final.\n[…]\nEm 2013, o filme Rush contou a história do campeonato mundial de 1976 e a disputa do título entre Niki Lauda e James Hunt. Seu intérprete nessa produção foi o ator alemão Daniel Brühl.\n[…]\nLauda casou-se em 1976 com Marlene Knaus e tiveram dois filhos, Mathias Lauda e Lukas Lauda. Divorciaram-se em 1991.\n[…]\nLauda Air\n[…]\nDeutsche Welle - 1976: Piloto Niki Lauda sofre acidente em Nürburgring\n[…]\nNiki Lauda: A Lenda do Automobilismo e Seus Desafios",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Grande Prêmio do Japão de 1976",
      "descricao": "Última corrida da temporada de 1976 da Fórmula 1, disputada sob chuva forte, que deu o título a James Hunt sobre Niki Lauda."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1976, James Hunt e Niki Lauda decidiram o título debaixo de chuva forte, num circuito japonês aos pés de qual montanha?",
    "resposta": "Monte Fuji",
    "fonte": [
      "https://en.wikipedia.org/wiki/1976_Japanese_Grand_Prix",
      "https://en.wikipedia.org/wiki/Fuji_Speedway"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1976_Japanese_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1976 Japanese Grand Prix1 was a Formula One motor race held at Fuji Speedway on 24 October 1976. It was the 16th and final race of the 1976 Formula One World Championship.\n[…]\nThe 1976 World Championship was to be decided at the Mount Fuji circuit, with Niki Lauda just three points ahead of James Hunt after a season full of incidents including Lauda's near-fatal crash at the Nürburgring and subsequent missed races. Following Lauda's early retirement in the race, Hunt secured a third-place-finish and therefore enough points to overcome the three-point-deficit before the start of the final round, winning the championship by just one point over Lauda.\n[…]\nHeading into the final race of the season it was Niki Lauda who led the World Drivers' Championship by three points ahead of James Hunt. In the Constructors' Championship it was Ferrari who had an eleven point lead over McLaren. As this was the final race of the season with 9 points available for the win it meant that the Japanese Grand Prix would decide the Drivers' Championship although Ferrari had confirmed their Constructors' title win in the previous round.\n[…]\nto finish ahead of Hunt\n[…]\n2nd with Lauda 4th or lower\n[…]\n3rd with Lauda 6th or lower\n[…]\n4th with Lauda 7th or lower\n[…]\nDepailler overtook both drivers on lap 70 and on the next lap Hunt did the same and overtook both of them in order to win the World Drivers' Championship. There was brief confusion as the immediate unofficial finish marked him as fifth place, but with quick deliberation the official finish was third. Ferrari won the Constructors' Championship despite Lauda's retirement.\n[…]\nCompetitors in bold and marked with an asterisk are the 1976 World Champions."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fuji_Speedway",
        "situacao": "ok",
        "texto": "Fuji Speedway (富士スピードウェイ, Fuji Supīdowei) is a motorsport race track standing in the eastern foothills of Mount Fuji, in Oyama, Suntō District, Shizuoka Prefecture, Japan. Originally conceived as an American-style superspeedway, it was completed as a road course and opened in January 1966.\n[…]\nIn 1976, Fuji Speedway hosted the first-ever Formula One race in Japan. In the 1980s, the track was used for the FIA World Sportscar Championship and national racing. For decades, Fuji Speedway was owned by Mitsubishi Estate, until it was acquired by Toyota Motor in 2000. The circuit hosted the Formula One 2007 Japanese Grand Prix after an absence of nearly 30 years, replacing the Suzuka Circuit owned by Honda.\n[…]\nFuji Speedway has one of the longest straights in motorsport, at 1.475 km (0.917 mi) in length. The circuit has an FIA Grade 1 license at least until April 2026.\n[…]\nThe speedway brought the first Formula One race to Japan at the end of the 1976 season. The race had a dramatic World Championship battle between James Hunt and Niki Lauda, and in rainy conditions, Hunt earned enough points to win the title. Mario Andretti won the race, with Lauda withdrawing due to the dangerous conditions. In 1977, Gilles Villeneuve was involved in a crash that killed two spectators on the side of the track, leading to Formula One leaving the speedway.\n[…]\nIn 2003, the circuit was closed down to accommodate a major reprofiling of the track, using a new design from Hermann Tilke. The track was reopened on April 10, 2005, and hosted its first Formula One championship event in 29 years on September 30, 2007. In circumstances similar to Fuji's first Grand Prix in 1976, the race was run in heavy rain and mist and the first 19 laps were run under the safety car, in a race won by Lewis Hamilton."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_do_Jap%C3%A3o_de_1976",
        "situacao": "ok",
        "texto": "Resultados do Grande Prêmio do Japão de Fórmula 1 realizado em Monte Fuji em 24 de outubro de 1976. Décima sexta etapa do campeonato, foi vencido pelo norte-americano Mario Andretti, da Lotus-Ford, e ao seu lado no pódio estavam o francês Patrick Depailler, da Tyrrell, e o britânico James Hunt, da McLaren, cujo resultado assegurou-lhe o título de campeão mundial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Michael Schumacher",
      "descricao": "Piloto alemão heptacampeão mundial de Fórmula 1."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Michael Schumacher conquistou seu primeiro título, em 1994, depois de uma batida polêmica com Damon Hill na última corrida. Em que país foi essa prova?",
    "resposta": "Austrália",
    "fonte": [
      "https://en.wikipedia.org/wiki/1994_Australian_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1994_Australian_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1994 Australian Grand Prix (formally the LIX Adelaide Australian Grand Prix) was a Formula One motor race held on 13 November 1994 at the Adelaide Street Circuit. It was the sixteenth and final race of the 1994 Formula One World Championship. The 81-lap race was won by Nigel Mansell driving for the Williams team after starting from pole position.\n[…]\nThe race is remembered, besides being the closing of one of the most tragic seasons in the history of the category, also for an incident involving the two title contenders Damon Hill and Michael Schumacher which forced both to retire and resulted in Schumacher winning the World Drivers' Championship. Also notable was the last appearance in a Formula One Grand Prix of the first incarnation of Team Lotus, previously seven-time Constructors' Champions.\n[…]\nHeading into the final race of the season, Benetton driver Michael Schumacher was leading the Drivers' Championship with 92 points; Williams driver Damon Hill was second on 91 points, one point behind Schumacher. Williams led the Constructors' Championship with 108 points, while Benetton were 5 points behind with 103. Thus, both titles were still at stake, and they would be determined in the final round.\n[…]\nPatrick Head of the Williams team stated to F1 Racing magazine that in 1994 \"Williams were already 100% certain that Michael was guilty of foul play\" but did not protest Schumacher's title because the team was still dealing with the death of Ayrton Senna, to whom Schumacher dedicated his title after his death in the San Marino Grand Prix earlier in the year."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Austr%C3%A1lia_de_1994",
        "situacao": "ok",
        "texto": "Resultados do Grande Prêmio da Austrália de Fórmula 1 realizado em Adelaide em 13 de novembro de 1994. Décima sexta etapa do campeonato, foi vencido pelo britânico Nigel Mansell, da Williams-Renault, em seu derradeiro triunfo na categoria. Ao seu lado no pódio estavam Gerhard Berger, da Ferrari, e Martin Brundle, da McLaren-Peugeot.\n[…]\nO alemão Michael Schumacher causou o acidente que o fez campeão mundial de pilotos deste ano. Ao perceber que Damon Hill o ultrapassaria, o piloto da Benetton-Ford jogou seu carro contra a Williams-Renault do britânico, provocando o abandono de ambos e conquistou o título com um ponto de vantagem.\n[…]\nÚltima corrida das equipes Larrousse e Lotus - que seria absorvida pela Pacific Racing. A Lotus voltaria à F-1 em 2010, sendo comprada pela Caterham em 2011, regressando no ano seguinte.\n[…]\nÚltima pole e última vitória de Nigel Mansell.\n[…]\nÚltima corrida de: Christian Fittipaldi (se transferira para a CART em 1995), Paul Belmondo (não se classificou), Michele Alboreto, J. J. Lehto, David Brabham, Franck Lagorce e Hideki Noda.\n[…]\nÚltima corrida da McLaren com motores Peugeot, que daria lugar à Mercedes-Benz a partir de 1995 - parceria que perduraria até 2014.\n[…]\nÚltima corrida que a Sauber correu com motores Mercedes, que dariam lugar aos Ford.\n[…]\nÚltima corrida da Benetton com motores Ford, que dariam lugar aos Renault no ano seguinte.\n[…]\nÚltima corrida da Ligier com motores Renault, que receberiam os motores Mugen/Honda em 1995.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Fórmula E",
      "descricao": "Campeonato mundial de monopostos elétricos organizado pela FIA, disputado desde 2014."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2014, a Fórmula E, categoria de carros elétricos, fez sua primeira corrida num circuito de rua de qual capital asiática?",
    "resposta": "Pequim",
    "fonte": [
      "https://en.wikipedia.org/wiki/2014_Beijing_ePrix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2014_Beijing_ePrix",
        "situacao": "ok",
        "texto": "The 2014 Beijing ePrix, formally the 2014 FIA Formula E Evergrande Spring Beijing ePrix, was a Formula E motor race that was held on 13 September 2014 at the Beijing Olympic Green Circuit in Beijing, China. It was the first Championship race of the single-seater, electrically powered racing car series' inaugural season. The race was won by Lucas di Grassi for the Audi Sport ABT team, ahead of Fran\n[…]\nFIA Formula E Results Beijing ePrix"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/EPrix_de_Pequim_de_2014",
        "situacao": "ok",
        "texto": "O ePrix de Pequim de 2014 foi a primeira etapa da temporada de 2014–15 da Fórmula E. Após colisão entre Prost e Heidfeld, na última curva na última volta, o brasileiro Lucas Di Grassi, que estava em terceiro, conseguiu ultrapassá-los, vencendo a etapa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Fórmula E",
      "descricao": "Campeonato mundial de monopostos elétricos organizado pela FIA, disputado desde 2014."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Depois que Nicolas Prost e Nick Heidfeld bateram na última curva, que brasileiro venceu a primeira corrida da história da Fórmula E, em 2014?",
    "resposta": "Lucas di Grassi",
    "fonte": [
      "https://en.wikipedia.org/wiki/2014_Beijing_ePrix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2014_Beijing_ePrix",
        "situacao": "ok",
        "texto": "The 2014 Beijing ePrix, formally the 2014 FIA Formula E Evergrande Spring Beijing ePrix, was a Formula E motor race that was held on 13 September 2014 at the Beijing Olympic Green Circuit in Beijing, China. It was the first Championship race of the single-seater, electrically powered racing car series' inaugural season. The race was won by Lucas di Grassi for the Audi Sport ABT team, ahead of Fran\n[…]\nNicolas Prost claimed pole position for the race for the e.dams-Renault team and, with the exception of one lap during the pit stops, led the race up until the final corner. That was the moment when Nick Heidfeld had closed the gap to Prost and made an overtaking manoeuvre. Prost hit Heidfeld while they were side to side, sending the German driver into a spin. Heidfeld's car then hit the kerb sideways, and flipped into the barrier.\n[…]\nThe collision forced both drivers to retire from the race, and Lucas di Grassi went through to claim victory. Montagny finished second, while Daniel Abt was third on track, but was penalised 57 seconds for exceeding \"the maximum permitted electrical power during the race,\" relegating him to tenth position, which promoted Bird to the final place on the podium.\n[…]\nDespite his retirement, Prost collected three championship points for his pole position, and Takuma Sato, who was also unable to complete the race, gained two points for recording the fastest lap of the race. During the race, three drivers were able to gain benefit from a \"fan boost\" which gave them an extra 30 kilowatts of power for two five-second stints. The drivers voted to receive this were Bruno Senna, Legge, and Di Grassi.\n[…]\nFIA Formula E Results Beijing ePrix"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/EPrix_de_Pequim_de_2014",
        "situacao": "ok",
        "texto": "O ePrix de Pequim de 2014 foi a primeira etapa da temporada de 2014–15 da Fórmula E. Após colisão entre Prost e Heidfeld, na última curva na última volta, o brasileiro Lucas Di Grassi, que estava em terceiro, conseguiu ultrapassá-los, vencendo a etapa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Acidente de Romain Grosjean em 2020",
      "descricao": "Acidente em que o carro da Haas de Romain Grosjean se partiu ao meio e pegou fogo na primeira volta de um Grande Prêmio de 2020."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2020, Romain Grosjean escapou de um carro partido ao meio e em chamas, protegido em parte pelo halo. Em que país foi o acidente?",
    "resposta": "Bahrein",
    "fonte": [
      "https://en.wikipedia.org/wiki/2020_Bahrain_Grand_Prix",
      "https://en.wikipedia.org/wiki/Romain_Grosjean"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2020_Bahrain_Grand_Prix",
        "situacao": "ok",
        "texto": "The 2020 Bahrain Grand Prix (officially known as the Formula 1 Gulf Air Bahrain Grand Prix 2020) was a Formula One motor race that took place over 57 laps on 29 November 2020 on the 'Grand Prix Circuit' configuration at the Bahrain International Circuit in Sakhir, Bahrain. The race was the fifteenth round of the 2020 Formula One World Championship. It was the sixteenth time that the Bahrain Grand \n[…]\nSpeaking from his hospital bed, Grosjean said the halo was \"the greatest thing that we brought to Formula One, and without it, I wouldn't be able to speak to you today\".\n[…]\nFormula One managing director Ross Brawn said the crash would be investigated, and credited the halo cockpit protection device with protecting Grosjean. The most recent two crashes involving spearing a crash barrier in this way were in the 1973 and 1974 United States Grands Prix, where François Cevert and Helmut Koinigg respectively were killed. The most recent similar crash involving a fuel fire prior to this occurred when Gerhard Berger crashed at the 1989 San Marino Grand Prix.\n[…]\nRace director Michael Masi, while confirming the marshal acted contrary to instructions, defended the marshal's \"acting on instinct\" in light of the Grosjean fire earlier in the race. Following this a safety car period began which would last for the remainder of the race.\n[…]\nRomain Grosjean released a video message after the race while in hospital. He attributed his survival of the crash to the halo device, a safety device which he had criticised in the past. Haas confirmed that Grosjean would remain overnight at the Bahrain Defence Force Hospital for treatment, and later confirmed Pietro Fittipaldi would stand in for Grosjean at the Sakhir Grand Prix.\n[…]\nGrosjean attended the next race, the 2020 Sakhir Grand Prix, where he thanked his rescuers for saving his life.\n[…]\nBold text indicates the 2020 World Champions.\n[…]\n2020 Sakhir Formula 2 round"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Romain_Grosjean",
        "situacao": "ok",
        "texto": "Romain David Jeremie Grosjean (French pronunciation: [ʁɔmɛ̃ ɡʁoʒɑ̃]; born 17 April 1986) is a French and Swiss racing driver, who competes in the IndyCar Series for Dale Coyne. Grosjean competed under the French flag in Formula One between 2009 and 2020, and the IndyCar Series from 2021 to 2024 and in 2026.\n[…]\nIn 2020, Grosjean survived a crash during the opening lap of the Bahrain Grand Prix—his final race in Formula One—when his VF-20 split and caught fire after penetrating a metal crash barrier; he sustained second-degree burns and credited the halo device with saving his life.\n[…]\nGrosjean managed to rejoin, but lost time and finished twelfth.\n[…]\nOn 19 September 2019, Haas announced that Grosjean would remain with the team for the 2020 season alongside Magnussen.\n[…]\nThe halo head-protective device, introduced in Formula One in 2018, was credited with saving his life: it sheltered Grosjean's head and body from coming into contact with the barrier upon collision. Grosjean ultimately missed the last two races of the season, and was replaced by Haas reserve driver Pietro Fittipaldi. He underwent surgery for his injuries on 16 December.\n[…]\nGrosjean was due to test drive the Mercedes AMG F1 W10 EQ Power+, which won the 2019 Formula One World Championship, for a full day of testing with the team at the 2021 French Grand Prix. The test was delayed due to pandemic related travel restrictions. On 26 September 2025, Grosjean drove a Haas VF-23 in a test at Mugello, marking his return to Formula One machinery following his 2020 crash.\n[…]\nGrosjean also founded R8G eSports, a sim racing team.\n[…]\nGrosjean also has his own YouTube channel called Romain Grosjean Official with 253K subscribers which he launched in November 2017.\n[…]\n† As Grosjean was a guest driver, he was ineligible to score points.\n[…]\nRomain Grosjean at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_do_Bar%C3%A9m_de_2020",
        "situacao": "ok",
        "texto": "O Grande Prêmio do Barém de 2020 (formalmente denominado Formula 1 Gulf Air Bahrain Grand Prix 2020) foi a décima quinta etapa do campeonato de 2020 da Fórmula 1. Foi disputado em 29 de novembro de 2020 no Circuito Internacional do Barém, em Sakhir, Barém.\n[…]\nNa largada, Lewis Hamilton partiu na frente e Max Verstappen tracionou melhor ainda para assumir a segunda posição e Sergio Pérez em terceiro, Romain Grosjean escapou na saída da curva 3, perdeu o controle do carro após tocar na AlphaTauri de Daniil Kvyat e bateu forte no muro. Com o impacto, o bólido simplesmente explodiu em chamas.\n[…]\nSegundos depois do acidente assustador, veio a tensão pela falta de imagens da batida e de informações sobre Grosjean. O franco-suíço, contudo, nasceu de novo e conseguiu sair de um carro completamente destruído. Romain foi amparado mancando pelos membros da equipe médica da FIA antes de ser encaminhado para mais exames.\n[…]\nAs imagens depois do acidente foram ainda mais aterrorizantes e mostraram o quanto Grosjean levou sorte, muita sorte ao escapar da batida. O carro rachou no meio e se partiu em dois com o impacto no guard rail antes de pegar fogo, com a dianteira sendo esmagada pelas lâminas de aço. Romain foi salvo por milagre e também pelo halo e pela célula de segurança no cockpit.\n[…]\nRomain Grosjean gravou um vídeo em um dos seus perfis de redes sociais para tranquilizar os fãs sobre seu estado de saúde. O piloto francês aproveitou a oportunidade para exaltar o Halo, o dispositivo de proteção de cabeça na Fórmula 1 que parece ter sido fundamental para que o piloto saísse do carro sem ferimentos mais graves.\n[…]\nAcidente de Romain Grosjean no YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Targa Florio",
      "descricao": "Corrida de automóveis em estradas abertas criada em 1906 por Vincenzo Florio, disputada como prova de velocidade até 1977."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Targa Florio, uma das corridas de automóveis mais antigas do mundo, criada em 1906, era disputada nas estradas de montanha de qual ilha?",
    "resposta": "Sicília",
    "distratores": [
      "Sardenha",
      "Córsega",
      "Malta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Targa_Florio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Targa_Florio",
        "situacao": "ok",
        "texto": "The Targa Florio was a public road endurance automobile race held in the mountains of Sicily near the island's capital of Palermo. Founded in 1906, it was the oldest sports car racing event and was part of the World Sportscar Championship between 1955 and 1973. While the first races consisted of a whole tour of the island, the track length in the race's last decades was limited to the 72 km (45 mi\n[…]\nThe race was created in 1906 by the wealthy pioneer race driver and automobile enthusiast, Vincenzo Florio, who had started the Coppa Florio race in Brescia, Lombardy in 1900. The Targa also claimed to be a world event not to be missed. Renowned artists, such as Alexandre Charpentier and Leonardo Bistolfi, were commissioned to design medals.\n[…]\nEven within Italy, many events became more significant, like the Mille Miglia, or the Tripoli Grand Prix in Italian North Africa. Without the international contacts and influence of Florio, the Targa could not uphold an unchallenged slot in the calendars. The 20 May 1934 Moroccan Grand Prix was held on the same day. In 1935, the Automobile Club di Sicilia tried to erase the name of Florio and call it Targa Primavera Siciliana, but that failed.\n[…]\nStill no permissions for a mountain road race were given in 1950, thus it was yet another big lap around the island, 10° Giro di Sicilia, over 12 hours. In 1951, Giro and Targa were two separate events, as the 72 kilometer long or short Piccolo course could finally be used again, for a Targa that lasted only 7+ hours. Italian veteran racer Franco Cortese won in a British Frazer Nash Le Mans Replica. While the Targa was re-established, it was mostly a national event by and for Italians.\n[…]\nGiuseppe Valenza (2018), \"Targa Florio The Myth Anatomy of an Epic Race 1906-1973\". G.Valenza. (Italy). ISBN 978-88-908854-3-3.\n[…]\nTarga Florio memorabilia\n[…]\nLe Auto. Targa Florio, 1906 1977, Gallery of winners.\n[…]\na sicilian dream"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Targa_Florio",
        "situacao": "ok",
        "texto": "A Targa Florio é uma das mais antigas corridas automobilísticas da Itália. Junto com as Mille Miglia, é certamente a corrida italiana mais famosa no mundo.\n[…]\nA prova foi idealizada, criada, financiada e organizada  por Vincenzo Florio, um siciliano de rica família fascinado pelo novo meio de locomoção e já conhecido no ambiente das corridas por ter participado a algumas competições do início do século XX.\n[…]\nA Targa Florio foi disputado 61 vezes, praticamente sem interrupções, de 1906 a 1977 (excetuando-se os períodos bélicos mundiais).\n[…]\nLa Targa Florio - álbum de recordações\n[…]\nwww.targa-florio.net\n[…]\nTarga Florio 1906/1977\n[…]\nPublicacion:Targa Florio Il Mito - Autor : Giuseppe Valenza - Legenda Editore (Settimo Milanese - Italia)ISBN 978-88-88165-17-2",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Tourist Trophy da Ilha de Man",
      "descricao": "Corrida de motos disputada desde 1907 em estradas públicas da Ilha de Man."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Desde 1907, a perigosa corrida de motos chamada TT é disputada em estradas públicas de qual ilha, entre a Grã-Bretanha e a Irlanda?",
    "resposta": "Ilha de Man",
    "fonte": [
      "https://en.wikipedia.org/wiki/Isle_of_Man_TT"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Isle_of_Man_TT",
        "situacao": "ok",
        "texto": "The Isle of Man TT (Tourist Trophy) races are an annual motorcycle racing event held on the Isle of Man in May and June of mostly every year since its inaugural race in 1907. The two-week event is sanctioned by the Auto-Cycle Union, which also organises the event. The Manx government owns the rights to and promotes the event.\n[…]\nAt the Annual Auto Cycle Club dinner party on 17 January 1907, the editor of Motorcycle Magazine formally proposed this new race for motorcycles on the Isle of Man. This new race, named the Auto-Cycle Tourist Trophy, was to take inspiration from the earlier motorcycle trial race that was held in 1905, running on a shorter course with less elevation than the mountain course used by automobiles. This shorter course, named the St.\n[…]\nThe first Isle of Man TT race was held on Tuesday 28 May 1907. Charles Collier won the single cylinder class riding a Matchless machine at an average speed of 38.22 mph. Rem Fowler won the two cylinder class riding a Peugeot engined Norton at an average speed of 36.22 mph. Of the 25 race entrants, only 12 finished the race. Auto-Cycle Tourist Trophy Races continued for the next four years on the St John's Short Course.\n[…]\nList of Isle of Man TT Mountain Course fatalities\n[…]\nHarris, Nick (1 May 1990). Motocourse History of the Isle of Man Tourist Trophy Races 1907–1989. Hazelton Publishing. ISBN 0-905138-71-6.\n[…]\nSnelling, Bill (15 July 1998). The Tourist Trophy in Old Photographs Collected by Bill Snelling. Sutton Publishing. ISBN 1-84015-059-9.\n[…]\nDuckworth, Mick (2007). TT 100 – The Authorised History of the Isle of Man Tourist Trophy Racing. Lily Publications. ISBN 978-1-89960-267-4.\n[…]\nPidcock, Fred; Snelling, Bill (2007). History of the Isle of Man Clubman's TT Races 1947–1956. Amulree Publications. ISBN 1-901508-10-2.\n[…]\nRoute of Isle of Man TT (Google Maps)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/TT_da_Ilha_de_Man",
        "situacao": "ok",
        "texto": "A TT (Tourist Trophy) da Ilha de Man ou Isle of Man TT, é uma corrida de motocicleta realizada anualmente nas ruas da pequena Ilha de Man, uma comunidade autônoma situada no mar entre a Irlanda e Grã-Bretanha. Este evento acontece desde 1907 entre os meses de maio ou junho, e por ser uma das corridas mais perigosas do mundo é frequentemente chamada de \"A corrida da morte\".\n[…]\nA primeira corrida do TT ilha de Man foi realizada numa terça-feira, 28 de maio de 1907, com motocicletas convencionais de rua com silenciadores de escapamento, pedais e para-lamas.\n[…]\nEm 2013, o Isle of Man Classic TT foi desenvolvido pelo Departamento de Desenvolvimento Econômico da Ilha de Man e pela Auto-Cycle Union para motocicletas de corrida históricas e, junto com o Manx Grand Prix, agora faz parte do 'Festival de Motociclismo da Ilha de Man' realizada no final de agosto de cada ano.\n[…]\nCorridas de carros Gordon Bennett e Tourist Trophy\n[…]\nO esporte a motor começou na Ilha de Man em 1904 com o Gordon Bennett Eliminating Trial, restrito a carros de turismo. Como a legislação inglesa 1903 impôs uma restrição de velocidade de 20 mph (32 km / h) em automóveis no Reino Unido, Julian Orde, secretário do Automobile Car Club da Grã-Bretanha e da Irlanda, abordou as autoridades na Ilha de Man para obter permissão para corrida de automóveis nas vias públicas da ilha.\n[…]\nE com isso deu permissão na Ilha de Man para a corridas de estradas de 52,15 milhas (83,93 km) para o Gordon Bennett Eliminating Trial em 1904, sendo que a primeira corrida foi vencida por Clifford Earl (Napier) em 7 horas 26,5 minutos por cinco voltas (255,5 mi ou 411,2 km) da pista de Highroads Course. E no ano seguinte em 30 de maio de 1905 foi novamente vencido por Clifford Earl dirigindo um automóvel Napier em 6 horas e 6 minutos por seis voltas na pista de Highroads Course.\n[…]\n«Centenário da Tourist Trophy da Ilha de Man»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "José Carlos Pace",
      "descricao": "Piloto brasileiro de Fórmula 1 nos anos setenta, morto num acidente aéreo em 1977, que dá nome ao autódromo de Interlagos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano José Carlos Pace venceu sua única corrida de Fórmula 1, o Grande Prêmio do Brasil, com Emerson Fittipaldi em segundo lugar?",
    "resposta": "1975",
    "fonte": [
      "https://en.wikipedia.org/wiki/1975_Brazilian_Grand_Prix",
      "https://en.wikipedia.org/wiki/Carlos_Pace"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1975_Brazilian_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1975 Brazilian Grand Prix was a Formula One motor race held at Interlagos on 26 January 1975. It was race 2 of 14 in both the 1975 World Championship of Drivers and the 1975 International Cup for Formula One Manufacturers. It was the fourth Brazilian Grand Prix since its introduction in 1972. The race was won by São Paulo native Carlos Pace driving a Brabham BT44B. It was the only win of Pace'\n[…]\nFellow Brazilian Emerson Fittipaldi finished second in his McLaren M23 with his German teammate Jochen Mass finishing third.\n[…]\nJean-Pierre Jarier took pole position, after beating the 1973 pole record. He lined up ahead of local driver Emerson Fittipaldi. The race was delayed whilst the track was washed down to remove debris – punctures had played a critical part in the 1974 race and race organisers wanted to avoid a repeat of these problems.\n[…]\nThis was the 176th and last championship race start of Graham Hill's Formula One career.\n[…]\nBrazilian drivers finished 1–2 in the race (for first time in the history of the category), with Carlos Pace taking the only win of his career and Emerson Fittipaldi finishing second. A local 1–2 also occurred in the 1986 Brazilian Grand Prix with Nelson Piquet winning from Ayrton Senna."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carlos_Pace",
        "situacao": "ok",
        "texto": "José Carlos Pace (Brazilian Portuguese pronunciation: [ʒoˈzɛ ˈkaʁlus ˈpatʃi]; 6 October 1944 – 18 March 1977)  was a Brazilian racing driver, who competed in Formula One from 1972 to 1977. Pace won the 1975 Brazilian Grand Prix with Brabham.\n[…]\nBorn and raised in São Paulo, Pace competed in Formula One for Williams, Surtees and Brabham. He finished sixth in the World Drivers' Championship in 1975 with the latter.\n[…]\nJosé Carlos Pace was born in São Paulo, Brazil to Angelo Raphael Pace, a textiles businessman, and Amélia Pace. His father and his mother were Brazilians, both children of Italian immigrants. The family moved back to Italy for a part of Pace's childhood and upon returning to Brazil he was given the nickname 'Moco' because he could only speak Italian.After becoming fluent in Portuguese again, he was encouraged by friends Wilson and Emerson Fittipaldi to start karting.\n[…]\nPace was killed in a private light aircraft accident near São Paulo, Brazil on 18 March 1977, 13 days after fellow F1 driver Tom Pryce and marshal Frederik Jansen van Vuuren lost their lives during the 1977 South African Grand Prix. The Interlagos track, the scene of his only F1 win in 1975, was renamed Autódromo José Carlos Pace in his honour. He was buried in the Araçá cemetery in São Paulo.\n[…]\nThen, José Carlos Pace took one last lap around the track, where Rodrigo, “Moco's” son, drove a 1967 Karmann-Ghia racing car that was used by his father, from the old Dacon team, where José Carlos Pace formed a trio with none other than the Fittipaldi brothers of Emerson and Wilson Jr. at the time. Alongside Rodrigo was Maurício Marx, collector and current owner of the Karmann-Ghia, who took the urn with Pace's remains to his “final chequered flag”."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_do_Brasil_de_1975",
        "situacao": "ok",
        "texto": "Resultados do Grande Prêmio do Brasil de Fórmula 1 realizado em Interlagos em 26 de janeiro de 1975. Segunda etapa do campeonato, nele José Carlos Pace, da Brabham-Ford, obteve sua única vitória na categoria e fez uma inédita dobradinha brasileira ao lado de Emerson Fittipaldi, da McLaren-Ford.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Autódromo de Monza",
      "descricao": "Circuito italiano, perto de Milão, conhecido como Templo da Velocidade."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Autódromo de Monza, perto de Milão, chamado de Templo da Velocidade, foi inaugurado em que década?",
    "resposta": "Anos vinte (1922)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Monza_Circuit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monza_Circuit",
        "situacao": "ok",
        "texto": "The Monza Circuit, officially called the Autodromo Nazionale di Monza (Italian for 'Monza National Autodrome'), is a 5.793 km (3.600 mi) race track near the city of Monza, north of Milan, in Italy. Built in 1922, it was the world's fourth purpose-built motor racing circuit after Aspendale, Brooklands and Indianapolis, and the oldest in mainland Europe. The circuit's biggest event is the Italian Gr\n[…]\nThe first track was built from May to July 1922 by 3,500 workers, financed by the Milan Automobile Club – which created the Società Incremento Automobilismo e Sport (SIAS) (English: Society for the Promotion of Motor Racing and Sport) to run the track. The initial form was a 3.4 km2 (1.31 sq mi) site containing a paved 4.490 km (2.790 mi) oval and a 5.500 km (3.418 mi) road course which could be run as a combined 10.000 km (6.214 mi) course via their shared front straight.\n[…]\nThe track was officially opened on 3 September 1922, with the maiden race the second Italian Grand Prix held on 10 September 1922. Monza's close proximity to Milan, the center of Italy's economy, the largest metropolitan area in Italy and one of Europe's leading major cities made Monza a particularly convenient location for racing and other events.\n[…]\nThe official race lap record for the current circuit layout is 1:20.901, set by Lando Norris during the same Grand Prix at an average speed of 257.781 km/h (160.178 mph) – the fastest average lap speed recorded in a race for a World Championship event. As of September 2026, the fastest official race lap records of Autodromo Nazionale di Monza are listed as:\n[…]\n1922 Fritz Kuhn (Austro-Daimler), killed during practice for the 1922 Italian Grand Prix\n[…]\nMonza GP2 round (2005–2016)\n[…]\nMonza Grand Prix (1922, 1929–1933, 1948–1952, 1980)\n[…]\nRally Monza (2020–2021)\n[…]\nAutodromo Nazionale Monza official website\n[…]\nAutodromo Nazionale Monza on Google Maps (Current Formula 1 Tracks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aut%C3%B3dromo_Nacional_de_Monza",
        "situacao": "ok",
        "texto": "Autódromo Nacional de Monza (em italiano:  Autodromo Nazionale di Monza) é uma pista de automobilismo localizada próxima à cidade de Monza, na Itália, ao norte de Milão. É um dos circuitos mais tradicionais para a prática do automobilismo no mundo. É famoso principalmente por receber o Grande Prêmio da Itália de Fórmula 1 quase anualmente desde 3 de setembro de 1922, data da sua inauguração.\n[…]\nApenas em 1980, Monza não fez parte do calendário, porque estava em reforma no momento, retornando em 1981 em diante.\n[…]\nO Autódromo de Monza é atualmente o traçado mais veloz da Europa graças às suas retas muito longas, o que permite que os pilotos mantenham aceleração máxima por mais da metade da volta. É um circuito praticamente plano, com poucas elevações e conhecido como uma pista que testa mais a potência do motor que as habilidades dos pilotos.\n[…]\nO circuito oval possui 4,25 km (2.641 mi) de extensão com duas curvas de altíssimas velocidades inclinadas em 45 graus, chamadas \"Curva Alta Velocità Surd\" e \"Curva Alta Velocità Nord\".\n[…]\nO circuito Misto de Monza, com 5.793 km de extensão e em formato de uma bota, é onde são disputadas as corridas de Formula 1 atualmente.\n[…]\nO traçado do circuito completo de Monza - cuja extensão é de 10km - possui um fato curioso e impensável nos dias de hoje: para completar a volta, o piloto era obrigado a passar duas vezes pela reta principal.\n[…]\nO primeiro vencedor do circuito completo de Monza foi Pietro Bordino, em 1922. A bordo de um Fiat 804, ele completou os 800 km do primeiro Grand Prix da Itália em 5 horas 43 minutos e 13 segundos, com uma média de 139,8 km/h.\n[…]\nNa Formula 1, esse circuito foi usado em 55, 56, 60 e 61. Porém, ela ainda foi usada até 69, com as disputas dos 1000 Km de Monza\n[…]\n500 Milhas de Monza, também conhecido por Monzanapolis\n[…]\nSite Oficial do Circuito de Monza\n[…]\nDetalhes do Circuito de Monza (Site Oficial da Fórmula 1)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Halo",
      "descricao": "Arco de proteção de titânio instalado sobre o cockpit dos carros de Fórmula 1 para proteger a cabeça do piloto."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano a Fórmula 1 tornou obrigatório o halo, o arco de titânio que protege a cabeça do piloto?",
    "resposta": "2018",
    "fonte": [
      "https://en.wikipedia.org/wiki/Halo_(safety_device)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Halo_(safety_device)",
        "situacao": "ok",
        "texto": "The halo is a driver crash-protection system used in open-wheel racing series, which consists of a curved bar placed above the driver's head to protect it from injury.\n[…]\nThe first tests of the halo were carried out in 2016 and in July 2017. Since the 2018 season, the FIA has made the halo mandatory on every vehicle in Formula 1, Formula 2, Formula 3, Formula 4, Formula Regional, and Formula E as a safety measure. Other open-wheel racing series also utilize the halo, such as the IndyCar Series, Indy NXT, Super Formula, Super Formula Lights, Euroformula Open and Australian S5000. The IndyCar halo is used as a structural frame for the aeroscreen.\n[…]\nIn August 2017, the Dallara F2 2018 was presented and was the first to install the halo system. The SRT05e Formula E car presented in January 2018 had a halo. In November 2018, the 2019 FIA Formula 3 car, which was unveiled in Abu Dhabi, installed the halo as well. Beginning in 2021, the Indy Lights' IL-15 began using the halo.\n[…]\nA single halo can cost between €13,000 and €24,000. Both cars operated by a team must have a halo.\n[…]\nAt the 2018 Formula 2 race in Spain, Tadasuke Makino's halo was landed on by fellow Japanese driver Nirei Fukuzumi's car. In the 2018 Belgian Grand Prix, Charles Leclerc's halo was struck by Fernando Alonso's airborne McLaren, and both of their halos showed visible damage from the impact.\n[…]\n\"F1 Racing News – FIA outlines plans for next version of Halo\". Racer. 19 February 2018. Archived from the original on 19 February 2018.\n[…]\n\"FIA confirms Halo system for use in 2018 FIA Formula One world championship\". Race Tech Magazine. 21 July 2017. Archived from the original on 26 February 2021."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Halo_%28automobilismo%29",
        "situacao": "ok",
        "texto": "Halo é um sistema de proteção usado em carros de corrida, especialmente em fórmula, para proteger o piloto em caso de colisões. O halo consiste em uma barra curva colocada para proteger a cabeça do piloto.\n[…]\nOs primeiros testes do halo foram realizados em 2016 e em julho de 2017. Desde a temporada de 2018, a FIA tornou o halo obrigatório como uma nova medida de segurança em todos os veículos da Fórmula 1, Fórmula 2, Fórmula 3, Fórmula Regional, Fórmula E e também Fórmula 4. Algumas outras séries de corrida de roda aberta também utilizam o halo, como IndyCar Series, Indy Lights, Super Fórmula, Super Fórmula Lights, Eurofórmula Open e Australian S5000.\n[…]\nDurante o estudo do último caso, verificou-se que o halo foi capaz de desviar grandes objetos e fornecer maior proteção contra detritos menores.\n[…]\nSebastian Vettel foi o primeiro e único piloto a testar o Shield em um carro de Fórmula 1. Durante os treinos livres do Grande Prêmio da Grã-Bretanha de 2017, ele completou uma volta com o novo sistema antes de terminar o teste mais cedo. Ele reclamou da visão distorcida e embaçada que o impedia de dirigir. A introdução do Shield foi posteriormente descartada, pois não havia garantia de que os problemas com ele pudessem ser resolvidos a tempo para a temporada de 2018.\n[…]\nOutros ex-pilotos, incluindo Jackie Stewart, deram as boas-vindas ao sistema e o compararam à introdução dos cintos de segurança, que havia sido criticado da mesma forma, mas depois se tornou a norma também em carros de rua. Max Verstappen fez uma avaliação contundente do halo em 2018, dizendo que \"abusava do DNA da F1\" e que era \"mais perigoso andar de bicicleta em uma cidade grande do que correr em um carro de Fórmula 1\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Paris-Rouen de 1894",
      "descricao": "Prova entre Paris e Rouen, na França, considerada a primeira competição de automóveis da história."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A prova Paris-Rouen, apontada como a primeira competição de automóveis da história, foi disputada em que década?",
    "resposta": "Década de 1890",
    "distratores": [
      "Década de 1870",
      "Década de 1900",
      "Década de 1910"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Paris%E2%80%93Rouen_(motor_competition)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paris%E2%80%93Rouen_(motor_competition)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "24 Horas de Le Mans",
      "descricao": "Corrida de resistência de vinte e quatro horas disputada no Circuito de la Sarthe, em Le Mans, na França."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano foram disputadas as primeiras 24 Horas de Le Mans, na França?",
    "resposta": "1923",
    "distratores": [
      "1906",
      "1937",
      "1950"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/24_Hours_of_Le_Mans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/24_Hours_of_Le_Mans",
        "situacao": "ok",
        "texto": "The 24 Hours of Le Mans (French: 24 Heures du Mans; French pronunciation: [vɛ̃t.katʁ‿œʁ dy mɑ̃]) is an endurance sports car race held annually near the city of Le Mans, France. First run in 1923, it is the oldest active endurance racing event in the world and is widely considered one of the world's most prestigious races.\n[…]\nThe first race was held on 26–27 May 1923 and has since been run annually in June with exceptions in 1956, when the race was held in July; 1968, when it was held in September due to nationwide political turmoil in May; 2020, when it was moved to 19–20 September due to the COVID-19 outbreak; and 2021, when it was moved to 21–22 August. The race has been cancelled ten times: in 1936 (a labour strike during the Great Depression) and between 1940 and 1948 (World War II).\n[…]\nThe circuit on which the 24 Hours of Le Mans is run is named the Circuit de la Sarthe, after the department that Le Mans is within. It consists of both permanent track and public roads temporarily closed for the race. Since 1923, the track has been extensively modified, mostly for safety reasons, and now is 13.626 km (8.467 mi) in length. Although it initially entered the town of Le Mans, the track was cut short to better protect spectators.\n[…]\nThe 24 Hours of Le Mans was first run on 26 and 27 May 1923, through public roads around Le Mans. Originally planned to be a three-year event, as part of the Rudge-Whitworth Triennial Cup, with a winner being declared by the car which could go the farthest distance over three consecutive 24-hour races, this idea was abandoned in 1928. Overall winners were declared for every year depending on who covered the furthest distance by the time 24 hours were up.\n[…]\nMusée des 24 Heures du Mans\n[…]\nLe Mans Cup\n[…]\n\"24 heures du Mans 1973\" in Automobile Historique, no. 49, June/July 2005 (in French)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/24_Horas_de_Le_Mans",
        "situacao": "ok",
        "texto": "24 Horas de Le Mans é uma das mais tradicionais corridas automobilísticas do mundo e a principal prova do Campeonato Mundial de Endurance da FIA. É apontada como a maior corrida do planeta. A prova de resistência que dura 24 horas é disputada anualmente desde 1923, no Circuit de La Sarthe, em França.\n[…]\nA primeira edição, com 33 concorrentes, desenrolou-se nos dias 26 e 27 de Maio de 1923 num circuito perto da cidade de Le Mans, no departamento da Sarthe. Hoje, as 24 Horas de Le Mans têm lugar cada ano em Junho. É a mais antiga e a mais prestigiada corrida de resistência para carros desportivos e protótipos.\n[…]\nO recorde de vitórias individuais por piloto é detido pelo dinamarquês Tom Kristensen, com nove sucessos, e o recorde de vitórias por construtores é detido pela Porsche, com dezenove. O recorde da distância e a mais elevada velocidade média ao longo das 24 Horas pertencia desde 1971 ao Porsche 917K de Helmut Marko e Gijs Van Lennep, que percorreu 5 335 km à media de 222,304 km/h. Nessa altura o circuito não tinha chicanes.\n[…]\nHypercar - LMH (Le Mans Hypercars) e LMDh (Le Mans Daytona h);\n[…]\nLMP2 (Le Mans Protótipos 2);\n[…]\nLMGT3 (Le Mans Grand Touring 3 baseado no regulamento FIA GT3).\n[…]\nTragédia de Le Mans em 1955\n[…]\n24 Horas de Daytona\n[…]\n«Le Mans Portugal - Tudo (ou quase) sobre o Le Mans Series e as 24 Horas de Le Mans»\n[…]\n«Todos os carros dos vencedores das 24 Horas de Le Mans na escala 1/43»\n[…]\n«Le Mans Series» (em francês)\n[…]\n«Les 24 heures du Mans» (em francês)\n[…]\n«Lee Classements du Mans» (em francês)\n[…]\n«American Le Mans Series» (em inglês)\n[…]\n«F2 Register, Le Mans» (em inglês)\n[…]\nQuatro Rodas. Visitamos o incrível museu das 24h de Le Mans\n[…]\n«Tomada de Tempo - Cobertura 86ª Edição - 24 Horas de Le Mans - 2018»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Tony Kanaan",
      "descricao": "Piloto brasileiro da Fórmula Indy, campeão da categoria em 2004."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de muitos anos de azar no oval, em que ano o brasileiro Tony Kanaan finalmente venceu as 500 Milhas de Indianápolis?",
    "resposta": "2013",
    "distratores": [
      "2004",
      "2009",
      "2017"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/2013_Indianapolis_500",
      "https://en.wikipedia.org/wiki/Tony_Kanaan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2013_Indianapolis_500",
        "situacao": "ok",
        "texto": "The 97th Indianapolis 500 was held at the Indianapolis Motor Speedway in Speedway, Indiana on Sunday May 26, 2013. It was the premier event of the 2013 IZOD IndyCar Series season. Tony Kanaan, a native of Brazil, was victorious on a record-setting day. Kanaan became the fourth Brazilian driver to win the Indianapolis 500 joined by Emerson Fittipaldi, Helio Castroneves, and Gil de Ferran.\n[…]\nLotus, who fielded underpowered and uncompetitive engines in 2012, was released from its contract, and did not participate from 2013 onwards.\n[…]\nRyan Briscoe—who took pole position for the 2012 race—was unable to secure a full-time drive for the 2013 season, but participated in the race in a fourth car entered by Chip Ganassi Racing.\n[…]\nThe first caution flag flew when J. R. Hildebrand hit the wall in Turn 2 on the fourth lap of the race, just after posting the fastest time for a lap in the race. Hildebrand had almost won the 2011 Indianapolis 500 but lost due to a crash during the final lap, and then in the 2013 was out of contention after the early crash. On lap 36, driver Sebastián Saavedra was bumped between turns three and four and subsequently crashed into the wall outside of turn four.\n[…]\nW  Former Indianapolis 500 winner\n[…]\nR  Indianapolis 500 Rookie\n[…]\nUnknown to all at the time, this would be Dario Franchitti's final Indy 500. On October 6, 2013, Franchitti was involved in a serious crash in the Grand Prix of Houston, when his car flew into catch-fencing after contact with the cars of Takuma Sato and E. J. Viso. Franchitti suffered 2 fractured vertebrae, a broken ankle, and a concussion in the crash.\n[…]\nAustralian broadcasts moved to Foxtel for 2013.\n[…]\nFoyt and Bobby Unser recorded celebratory greetings. The commercial out-cues used in 2013 were the drivers (like 2010) during the pre-race coverage, and the historical chief announcers during the race (like 2011-2012)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tony_Kanaan",
        "situacao": "ok",
        "texto": "Antoine Rizkallah \"Tony\" Kanaan Filho (born 31 December 1974), nicknamed \"TK\", is a Brazilian retired racing driver who is the team principal of Arrow McLaren. He is best known for racing in Championship Auto Racing Teams (CART) from 1998 to 2002, and the IndyCar Series from 2002 to 2023. He is the 2004 IndyCar Series champion, and the 2013 Indianapolis 500 champion.\n[…]\nKanaan had his winningest season during 2007 in the No. 11 7-Eleven Dallara IR5-Honda Indy V8 HI7R for Andretti Green Racing. Kanaan won the Indy Japan 300 at Twin Ring Motegi. At the Indianapolis 500 Kanaan won the Scott Brayton Award for showing the spirit of the late Scott Brayton, who was killed while practicing for the 1996 Indianapolis 500.\n[…]\nIn 2013, Kanaan returned with KV Racing Technology in the No. 11 Hydroxycut Dallara DW12-Ilmor-Chevrolet Indy V6. At the Indianapolis 500 Kanaan qualified in 12th place. Kanaan moved up through the field and battled for the lead with Ed Carpenter, Ryan Hunter-Reay and Marco Andretti. On lap 197, Kanaan passed Hunter-Reay for the lead on a restart for a crash by Graham Rahal with Carlos Muñoz, Hunter-Reay and Andretti behind. The race finished under caution for the fourth consecutive year.\n[…]\nKanaan first competed in the Rolex Grand-Am Sports Car Series in 2013. Kanaan finished 58th in the DP standings with 22 points and 138th in the GT standings with 16 points.\n[…]\nIn 2010, Tony Stewart offered the driver who won the 2010 Indianapolis 500 a chance to drive in his charity race, the Prelude to the Dream at Eldora Speedway Kanaan participated after Indianapolis 500 winner Dario Franchitti opted out. Kanaan drove the No. 11 7-Eleven Cadillac for GRT Race Cars in a car based on his Andretti Autosport car from 2003 to 2010. The race had drivers competing on teams, each representing a different children's hospital. Kanaan represented the St."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/500_Milhas_de_Indian%C3%A1polis_de_2013",
        "situacao": "ok",
        "texto": "As 500 Milhas de Indianápolis de 2013 foi a 97.ª edição da prova e sexta corrida da temporada de 2013 da IndyCar Series. A corrida foi disputada no dia 26 de maio no Indianapolis Motor Speedway, localizado na cidade de Speedway, em Indiana. O vencedor foi o piloto brasileiro Tony Kanaan da equipe KV Racing. Carlos Muñoz, piloto colombiano da equipe Andretti Autosport, foi o melhor dos estreantes, \n[…]\n34 carros foram inscritos para corrida. Quatro deles eram novatos (Tristan Vautier, Conor Daly, Carlos Muñoz e A. J. Allmendinger). Destes, Allmendinger (que, embora viesse com status de ex-piloto da extinta Champ Car, foi considerado novato por nunca ter disputado a corrida), Daly e Muñoz disputariam apenas a Indy 500, enquanto Vautier foi o único dos rookies a disputar o campeonato completo.\n[…]\nBuddy Lazier, vencedor da Indy 500 em 1996, regressou à categoria somente para a disputa da prova. Ele foi inscrito pela Lazier Partners Racing, equipe dirigida por seu pai, Bob. Ryan Briscoe, piloto da Penske entre 2008 e 2012, foi outro que se inscreveu somente para correr a Indy 500, desta vez pela Chip Ganassi, equipe por qual competiu em 2005.\n[…]\n«Página oficial» (em inglês). das 500 Milhas de Indianápolis",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Daytona 500",
      "descricao": "Principal corrida da NASCAR, disputada anualmente no Daytona International Speedway, na Flórida."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Daytona 500, a corrida mais famosa da NASCAR, foi disputada pela primeira vez no oval da Flórida em que ano?",
    "resposta": "1959",
    "distratores": [
      "1936",
      "1948",
      "1972"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Daytona_500",
      "https://en.wikipedia.org/wiki/1959_Daytona_500"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Daytona_500",
        "situacao": "ok",
        "texto": "The Daytona 500 is a 500-mile-long (805 km) NASCAR Cup Series motor race held annually at Daytona International Speedway in Daytona Beach, Florida. It is the first of two Cup races held every year at Daytona, the second being the Coke Zero Sugar 400, and one of three held in Florida, with the annual Straight Talk Wireless 400 being held at Homestead south of Miami. From 1988 to 2019, it was one of\n[…]\nThe inaugural Daytona 500 was held in 1959 coinciding with the opening of the speedway and since 1982, it has been the season-opening race of the Cup Series.\n[…]\nThe race is the direct successor of shorter races held on the Daytona Beach Road Course. This long square was partially on the sand and also on the highway near the beach. Earlier events featured 200-mile (320 km) races with stock cars. A 500-mile (805 km) stock car race was held at Daytona International Speedway in 1959. It was the second 500-mile NASCAR race, following the annual Southern 500, and has been held every year since.\n[…]\nDaytona International Speedway is 2.5 miles (4 km) long and a 500-mile race requires 200 laps to complete. However, the race was considered official after halfway (100 laps/250 miles) had been completed from 1959 to 2016. From 2017 to 2019, the race was considered official after the conclusion of Stage 2 (120 laps/300 miles) when stage-racing was introduced.\n[…]\n1959: Lee Petty, patriarch of the racing family, won the inaugural 500 Mile NASCAR International Sweepstakes at Daytona on February 22, 1959, defeating Johnny Beauchamp.\n[…]\nFrom 2001 to 2006, the race alternated between Fox and NBC under the terms of a six–year, $2.48 billion NASCAR television contract, with Fox broadcasting the Daytona 500 in odd-numbered years (2001, 2003, 2005) and the Pepsi 400 in even-numbered years (2002, 2004, 2006) and NBC broadcasting the opposite race in that year.\n[…]\nDaytona 500 from NASCAR.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1959_Daytona_500",
        "situacao": "ok",
        "texto": "The 1959 First 500 Mile NASCAR International Sweepstakes at Daytona (now known as the 1959 Inaugural Daytona 500) was the second race of the 1959 NASCAR Grand National Series season. It was held on February 22, 1959, in front of 41,921 spectators. It was the first race held at the 2.5 miles (4.0 km) Daytona International Speedway.\n[…]\nDaytona International Speedway is a race track in Daytona Beach, Florida that was one of the first superspeedways to hold NASCAR races. The standard track at Daytona is a four-turn superspeedway that is 2.5 miles (4.0 km) long. The track also features two other layouts that utilize portions of the primary high speed tri-oval, such as a 3.56-mile (5.73 km) sports car course and a 2.95-mile (4.75 km) motorcycle course. The track's 180-acre (73 ha) infield includes the 29-acre (12 ha) Lake Lloyd.\n[…]\nThe track was built by NASCAR founder Bill France Sr. to host racing that was being held at the former Daytona Beach and Road Course and opened with the first Daytona 500 in 1959.\n[…]\nThe Daytona 500 is regarded as the most important and prestigious race on the NASCAR calendar. It is also the series' first race of the year; this phenomenon is virtually unique in sports, which tend to have championships or other major events at the end of the season rather than the start. Since 1995, U.S.\n[…]\nThere were no caution periods in the race; making it one of the few \"clean races\" in NASCAR history, though it would occur in three of the first four Daytona 500s, as the Daytona 500 also went caution-free in both 1961 and 1962. This would be repeated ten years later with the 1969 Motor Trend 500.\n[…]\nThe controversial finish helped the sport. The delayed results to determine the official winner kept NASCAR and the Daytona 500 on the front page of newspapers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Daytona_500",
        "situacao": "ok",
        "texto": "A Daytona 500 ou as 500 Milhas de Daytona é uma corrida automobilística da NASCAR Cup Series realizada anualmente no Daytona International Speedway, em Daytona Beach, na Flórida. A prova percorre 500 milhas (800 km) e é disputada desde 1959 percorrendo 200 voltas no circuito de Daytona International Speedway na cidade de Daytona Beach, na Flórida.\n[…]\nÉ a primeira de duas corridas da Copa realizadas todos os anos em Daytona, sendo a segunda a Coca Zero 400, e uma das três realizadas na Flórida, com o confronto anual de primavera Ford EcoBoost 400 que é realizado em Homestead, ao sul de Miami. A Daytona 500 inaugural foi realizado em 1959 coincidindo com a abertura da pista e desde 1982 é a corrida de abertura da temporada da NASCAR.\n[…]\nA corrida é a sucessora direta das corridas mais curtas realizadas no Circuito de Rua de Daytona Beach. Essa longa praça ficava parcialmente na areia e também na rodovia perto da praia. Eventos anteriores incluíram corridas de 200 milhas (320 km) com stock cars. Uma corrida de stock car de 500 milhas (805 km) foi realizada na Daytona International Speedway em 1959. Foi a segunda corrida de 500 milhas da NASCAR, após a Bojangles' Southern 500, e tem sido realizada todos os anos desde então.\n[…]\nForam necessárias duas tentativas para terminar a corrida em 2010, 2011 e 2020. A corrida de 2020 é a mais longa disputada do Daytona 500, com duração de 209 voltas/522,5 milhas.\n[…]\nLee Petty, patriarca de uma famosa família de corredores, cujo membro mais famoso é seu filho Richard Petty, ganhou a primeira Daytona 500 em 22 de fevereiro de 1959 ao derrotar Johnny Beauchamp de uma forma incomum. Petty e Beauchamp ultrapassaram Joe Weatherly na reta final, após o que os oficiais inicialmente concederam a Beauchamp a vitória depois que três carros cruzarem a linha de chegada lado a lado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Kart",
      "descricao": "Pequeno veículo de competição de chassi tubular e motor simples, usado no kartismo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O kart nasceu na Califórnia, quando um mecânico montou o primeiro com tubos e um motor pequeno. Em que década?",
    "resposta": "Anos cinquenta",
    "distratores": [
      "Anos trinta",
      "Anos quarenta",
      "Anos setenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kart_racing"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kart_racing",
        "situacao": "ok",
        "texto": "Kart racing, commonly known as karting, is a form of motorsport using small, open-wheel, four-wheeled vehicles known as go-karts or racing karts. Kart races are usually held on dedicated kart circuits, although some forms of karting, including superkart racing, also take place on full-size motor racing circuits. Karts vary widely in speed and specification, from recreational rental karts to high-p\n[…]\nModern karting originated in Southern California in the 1950s. American race-car builder Art Ingels, who worked for Kurtis Kraft, is widely credited as one of the creators of the first kart. FIA Karting records the first kart as the Caretta-West Bend, built in August 1956 in Glendale, California, by Ingels and Lou Borelli. The kart used a simple tubular frame and a small two-stroke West Bend engine.\n[…]\nEarly karting developed as a grassroots activity in California. Ingels' prototype and other early home-built karts were driven in car parks, including at the Rose Bowl Stadium in Pasadena, before organised kart racing began to emerge. The sport spread rapidly in the United States and then to Europe during the late 1950s and early 1960s.\n[…]\nKart drivers are required to wear appropriate personal protective equipment. Motorsport UK states that karting competitors require compliant safety items including a helmet, race suit, gloves and boots, and that helmets and overalls must meet recognised motorsport standards.\n[…]\nrib protector or kart body protector;\n[…]\nThe cost of competitive karting varies widely depending on the level of competition, country, class, equipment and whether the driver owns a kart or competes in arrive-and-drive events. Costs can include a chassis, engine, tyres, fuel, spares, safety equipment, licence fees, entry fees, testing, travel, mechanical support and coaching.\n[…]\nGo-kart\n[…]\nKart circuit\n[…]\nList of kart racing championships\n[…]\nKart manufacturers\n[…]\nKart racing game\n[…]\nMicro kart"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Karting",
        "situacao": "ok",
        "texto": "Karting (português europeu) ou cartismo, kartismo (português brasileiro), do inglês: karting, é uma variante de automobilismo sobre veículos simples, de quatro rodas, micromonopostos dotados de motores de dois ou quatro tempos, refrigerados a água ou a ar, conhecidos como karts. Têm chassis tubular e massa variando entre 70 e 150 quilos, dependendo do modelo.\n[…]\nOs karts foram originalmente criados nos Estados Unidos nos anos 50 após a Segunda Guerra Mundial por pilotos de aviões interessados em inventar um desporto para os tempos de folga. O norte-americano Art Ingels, construtor dos carros de corrida Kurt Kraft, é internacionalmente conhecido como o pai do kart. Mas o primeiro kartista da história foi o piloto Lou Borelli, que se tornou sócio de Ingels na primeira fábrica de kart do mundo, a Ingels-Borelli Kart, que produzia o chassis Caretta.\n[…]\nPara as primeiras corridas, Ingels e Borelli improvisaram, em 1956, o primeiro circuito de kart na história no estacionamento do Rose Bowl, em Pasadena, no sul da Califórnia. O desporto rapidamente se espalhou para outros países e atualmente é muito praticado em todos os continentes.\n[…]\nNo Brasil, o kart começou a tomar forma na no início da década de 60. A primeira prova de kart realizada no Brasil foi realizada em São Paulo no dia 13 de agosto de 1960, no loteamento que criou o bairro Jardim Marajoara.\n[…]\nFoi organizada por Claudio Daniel Rodrigues, construtor do primeiro modelo brasileiro, o Rois Kart. O vencedor dessa primeira corrida de kart no Brasil foi o piloto Maneco Combacau.\n[…]\nO Brasil conta com mais de 40 kartódromos homologados pela Confederação Brasileira de Automobilismo para provas oficiais, fator que os credencia a ser sede dos grandes eventos nacionais como Campeonato Brasileiro de Kart, Copa Brasil de Kart e Campeonato Sul-Brasileiro de Kart. São eles:\n[…]\nCampeonato Mundial de Kart",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Grande Prêmio de Mônaco de 1984",
      "descricao": "Corrida de Fórmula 1 disputada sob chuva em Monte Carlo e interrompida antes da metade, com Ayrton Senna em segundo pela Toleman."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Mônaco, em 1984, sob chuva, o novato Senna se aproximava do líder quando a corrida foi interrompida. Quem foi declarado vencedor?",
    "resposta": "Alain Prost",
    "fonte": [
      "https://en.wikipedia.org/wiki/1984_Monaco_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1984_Monaco_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1984 Monaco Grand Prix was a Formula One motor race held at Monaco on 3 June 1984. It was race 6 of 16 in the 1984 FIA Formula One World Championship. It was the only race of the 1984 championship that was run in wet weather.\n[…]\nAlain Prost won the rain-curtailed race from pole position. Ayrton Senna was second in his first podium in Formula One. René Arnoux was later promoted to third after the disqualification of Stefan Bellof.\n[…]\nAlain Prost took his first pole position for McLaren with a time of 1:22.661, just ahead of the Lotus-Renault of Nigel Mansell. Prost's pole was also the first pole for the McLaren MP4/2 as well as for the TAG-Porsche engine. Stefan Bellof was the only non-turbo qualifier in his Tyrrell-Cosworth. Bellof qualified 20th and last while Brundle's crash behind the pits at Tabac saw him as a spectator for the race. Bellof's time edged the Arrows-Ford of Marc Surer by just 0.156.\n[…]\nThe race, held amidst heavy rain, was one of the most contentious in Formula One history, and announced the emergence of at least two new stars. Alain Prost took the first of his four victories at the circuit.\n[…]\nMansell pulled away from Prost at around two seconds per lap, before going off six laps later on the run up to Casino Square after sliding on a painted white line, damaging his car and retiring from the race.\n[…]\nThe red flag to stop the race was shown at the end of the 32nd lap after clerk of the course Jacky Ickx decided that conditions were too poor for the race to continue. Senna passed Prost's slowing McLaren before the finish line, but according to the rules, the positions counted are those from the last lap completed by every driver – lap 31, at which point Prost was still leading."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_de_M%C3%B4naco_de_1984",
        "situacao": "ok",
        "texto": "Resultados do Grande Prêmio de Mônaco de Fórmula 1 realizado em Montecarlo em 3 de junho de 1984. Sexta etapa do campeonato, foi vencido pelo francês Alain Prost, da McLaren-TAG/Porsche, com Ayrton Senna em segundo pela Toleman-Hart e René Arnoux em terceiro Ferrari. Esta corrida foi encerrada com apenas trinta e uma de setenta e sete voltas previstas, devido a chuva.\n[…]\nRealizada sob uma forte chuva, a prova foi uma das mais controversas da história da Fórmula 1 e apresentou ao menos dois novos talentos: Ayrton Senna e Stefan Bellof, ao passo que Alain Prost conquistou a primeira de suas quatro vitórias no circuito.\n[…]\nA McLaren número 7 de Prost retomou a liderança, mas logo Ayrton Senna, que estreava em um circuito de rua, alcançou o francês em razão de uma condução ousada mesmo a bordo de um nada competitivo Toleman. Nas voltas 29 e 31, Prost solicitou a interrupção da prova por meio de acenos aos fiscais sendo atendido ao final da volta 32. Justificando sua decisão, o belga Jacky Ickx, o diretor da prova, alegou que as condições de pista eram inviáveis, daí o veredicto.\n[…]\nSenna ultrapassou Prost pouco antes de o piloto da McLaren alcançar a linha de chegada, mas em atenção ao regulamento a vitória foi concedida a Prost, líder da corrida antes da bandeira vermelha, já que a volta 31 foi a última completada por todos os competidores.\n[…]\nRessalte-se que além de Mansell e Senna, outro destaque da prova foi o alemão ocidental Stefan Bellof (também estreante na categoria), terceiro colocado na prova com o Tyrrell e que poderia mesmo ameaçar Prost e Senna, dos quais se aproximava.\n[…]\nCaso a prova tivesse prosseguido até 75% do percurso, Alain Prost teria recebido seis pontos pelo segundo lugar ao invés de 4,5 pela “meia vitória”, sendo que ao final do ano o francês perdeu o título para Niki Lauda por apenas meio ponto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Grande Prêmio da Hungria de 1986",
      "descricao": "Primeira corrida de Fórmula 1 disputada num país do bloco comunista, no Hungaroring, perto de Budapeste."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1986, a Fórmula 1 correu pela primeira vez atrás da Cortina de Ferro, na Hungria. Que brasileiro venceu, com uma ultrapassagem famosa sobre Senna?",
    "resposta": "Nelson Piquet",
    "fonte": [
      "https://en.wikipedia.org/wiki/1986_Hungarian_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1986_Hungarian_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1986 Hungarian Grand Prix was a Formula One motor race held at the newly constructed Hungaroring on 10 August 1986. It was the eleventh race of the 1986 Formula One World Championship.\n[…]\nIt was the first Hungarian Grand Prix since 1936, and the first-ever Formula One race to be held behind the Iron Curtain. The race was attended by 200,000 spectators from across the Eastern Bloc; this stood as a record for a Formula One race  for nearly a decade, until 210,000 attended the 1995 Australian Grand Prix in Adelaide.\n[…]\nThe race was notable for the battle between fierce Brazilian rivals Nelson Piquet in his Williams-Honda and Ayrton Senna in his Lotus-Renault. Piquet, after an unsuccessful attempt on the previous lap, managed to pass the Lotus driver around the outside as they went into the first corner, on opposite lock.\n[…]\nThe race was won by Piquet, ahead of Senna. Mansell finished 3rd and a lap down in his Williams with Stefan Johansson (Ferrari), Johnny Dumfries (Lotus) and Martin Brundle (Tyrrell-Renault) rounding out the points finishers. Defending World Champion Alain Prost qualified 3rd in his McLaren-TAG, an accident on lap 23 saw him as a non-finisher in what was his 100th Grand Prix start."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_Hungria_de_1986",
        "situacao": "ok",
        "texto": "Resultados do Grande Prêmio da Hungria de Fórmula 1 realizado em Hungaroring em 10 de agosto de 1986. Décima primeira etapa do campeonato, foi vencido pelo brasileiro Nelson Piquet, da Williams-Honda, com Ayrton Senna em segundo pela Lotus-Renault e Nigel Mansell em terceiro pela Williams-Honda.\n[…]\nA inclusão da Hungria no calendário da Fórmula 1 foi anunciada em 31 de janeiro de 1985.\n[…]\nNa primeira edição da corrida, um show brasileiro na pista húngara. Senna era pole position e manteve a ponta da largada até a 11ª volta, quando foi ultrapassado por Piquet. Próximo do momento da troca de pneus, Senna começa a se aproximar do compatriota e reassume a liderança na 36ª volta, quando Piquet faz seu \"pit stop\". Logo depois, Senna fez sua troca e o melhor trabalho da Lotus o manteve na ponta. O ritmo dos dois era tão forte que na volta 47 ambos deram uma volta em Mansell, o terceiro.\n[…]\nCom a troca, a Williams-Honda de Piquet ganhou rendimento e na volta 53, mais uma vez tentou ultrapassar Senna no final da reta, mas tomou um X e o brasileiro da Lotus-Renault continuou na liderança.\n[…]\nDuas voltas depois, Piquet fez uma nova investida: Senna deixou o lado de fora da curva para o rival que retardou a freada ao máximo, além do que sua sanidade mental e instinto de preservação permitiriam fazê-lo, colocando o carro de lado e derrapando nas quatro rodas, não deixando espaço para Senna reagir - tudo isso permeado por duas frenagens vigorosas que travaram as rodas e arrancaram fumaça dos pneus - completando uma da mais difíceis ultrapassagens da história da F1.\n[…]\nPiquet conseguiu abrir vantagem e administrar a corrida, cruzando a linha de chegada em primeiro lugar. Senna chegou em segundo, seguido por Mansel, também da Williams-Honda, em terceiro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "McLaren",
      "descricao": "Equipe britânica de Fórmula 1 fundada em 1963, pela qual Ayrton Senna conquistou seus três títulos mundiais."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que piloto neozelandês fundou, nos anos sessenta, a equipe inglesa pela qual Ayrton Senna foi tricampeão mundial?",
    "resposta": "Bruce McLaren",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bruce_McLaren",
      "https://en.wikipedia.org/wiki/McLaren"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bruce_McLaren",
        "situacao": "ok",
        "texto": "Bruce Leslie McLaren (30 August 1937 – 2 June 1970) was a New Zealand racing driver, automotive designer, engineer, and motorsport executive who competed in Formula One from 1958 to 1970. He won four Grands Prix across 13 seasons and was runner-up in the 1960 Formula One World Drivers' Championship with Cooper. He won the 1966 24 Hours of Le Mans with Chris Amon in a Ford GT40 and won the Canadian\n[…]\nIn 1963, McLaren founded Bruce McLaren Motor Racing, winning the team's first Formula One race at the 1968 Belgian Grand Prix. He became one of only three drivers, alongside Jack Brabham and Dan Gurney, to win a World Championship race in a car of their own construction. The team he founded has since won ten World Constructors' Championships and remains one of the most successful constructors in the history of the sport.\n[…]\nMcLaren's parents owned a service station and workshop in Remuera Road, Remuera, Auckland, which was first listed as a Category 1 historic place by Heritage New Zealand in 2006. Les McLaren had been a motorcycle racing enthusiast before Bruce's birth and raced cars at the club level. Bruce spent his free time in the workshop, developing his interest in engineering and motor vehicles.\n[…]\nIn 1963, McLaren founded Bruce McLaren Motor Racing Ltd., initially fielding modified Coopers in the Tasman Series and developing sports cars. The team entered Formula One as a constructor in 1966. Early chassis, including the McLaren M2B, struggled with heavy, underpowered engines (initially modified Ford Indianapolis V8s and Serenissima units) and limited financial resources.\n[…]\nA Ryman Healthcare village in Howick, Auckland is named as Bruce McLaren Retirement Village. The University of Auckland Formula SAE team use Bruce's racing number 47 as their car number in memory of Bruce.\n[…]\nBruce McLaren Biography\n[…]\nBruce McLaren at the New Zealand Sports Hall of Fame (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/McLaren",
        "situacao": "ok",
        "texto": "McLaren Racing Limited ( mə-KLARR-ən), currently competing in Formula One as McLaren Mastercard F1 Team, is a British motor racing team based at the McLaren Technology Centre in Woking, Surrey, England. The team is a subsidiary of the McLaren Group, wholly owned by Mumtalakat Holding Company.\n[…]\nBruce McLaren Motor Racing was founded in 1963 by New Zealander Bruce McLaren. Bruce was a works driver for the British Formula One team Cooper with whom he had won three Grands Prix and come second in the 1960 World Championship.\n[…]\nBruce won the 1964 series, but Mayer was killed in practice for the final race at the Longford Circuit in Tasmania. When Bruce McLaren approached Teddy Mayer to help him with the purchase of the Zerex sports car from Roger Penske, Teddy Mayer and Bruce McLaren began discussing a business partnership resulting in Teddy Mayer buying in to Bruce McLaren Motor Racing Limited (BMMR) and ultimately becoming its largest shareholder.\n[…]\nMcLaren's first racing car designed and built \"from the rubber up\" by Bruce McLaren Motor Racing was the M1. Bruce McLaren won races with the small-block Oldsmobile-powered car. The car was raced in North America and Europe in 1964 in various A sports and United States Road Racing Championship events. In 1965 the team car was the M1A prototype from which the production Elva M1As were based.\n[…]\nNeom was McLaren's title partner into their endeavour to electric motorsport as NEOM McLaren Electric Racing.\n[…]\nThe livery featured the numbers 0001 and 1000 adorning the sidepods along with details recognising the history of the team (such as the original Bruce McLaren Motor Racing logo on the base of the halo) and important milestones (such as the race dates of the first and 1,000th Grand Prix, respectively, above the numbers 0001 and 1000)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bruce_McLaren",
        "situacao": "ok",
        "texto": "Bruce Leslie McLaren (30 de agosto de 1937 – 2 de junho de 1970) foi um automobilista neozelandês. Disputou 104 provas do Campeonato Mundial de Fórmula 1 entre os anos de 1958 até 1970, obtendo 4 vitórias, 3 melhores voltas, e 188,5 pontos. Foi o fundador da McLaren.\n[…]\nEm 1963 Bruce e seu amigo Teddy Mayer fundaram a Bruce McLaren Motor Racing Ltd. para o desenvolvimento de carros para um campeonato na Tasmânia (o qual Bruce venceu com seu próprio carro no mesmo ano). Ao final de 1965, a Cooper deixava a Fórmula 1, e Bruce McLaren viu a oportunidade de construir seu próprio carro para o Campeonato Mundial. O McLaren M2B rendeu a Bruce 3 pontos e muitas quebras em sua temporada de estreia.\n[…]\nEm 1967, Bruce dispunha de apenas um chassi, e quando o danificou em um acidente no Grande Prêmio da Bélgica, se viu obrigado a correr as 3 provas seguintes pela equipe Eagle.\n[…]\nEm 1968, no grande prêmio belga, Bruce McLaren venceu com seu próprio carro, chegando em segundo lugar em outras duas ocasiões. A construção de carros tornara-se um negócio rentável ao passo que dezenas de pilotos financiavam sua participação pela equipe McLaren. Com isso Bruce pôde desenvolver seus chassis com mais eficiência, e em 1969 voltou a ter um desempenho regular.\n[…]\nDurante cinco anos, as McLaren dominaram o campeonato Can-Am entre 1967 e 1971, Bruce ganhou duas vezes neste campeonato, além de dois de Denny Hulme e a última do norte-americano Peter Revson. Desde o início ele estava interessado neste torneio, na verdade, o primeiro McLaren era quase um protótipo para disputar as 500 Milhas de Indianápolis; mas eles adaptaram com um motor Oldsmobile e pneus Firestone para a Fórmula 1.\n[…]\n«Bruce McLaren Trust» (em inglês). www.bruce-mclaren.com\n[…]\nMcLaren",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Temporada de Fórmula 1 de 1950",
      "descricao": "Primeira temporada do Campeonato Mundial de Fórmula 1, dominada pela Alfa Romeo."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1950, pilotando uma Alfa Romeo, qual italiano se tornou o primeiro campeão mundial de Fórmula 1?",
    "resposta": "Giuseppe Farina",
    "distratores": [
      "Alberto Ascari",
      "Luigi Fagioli",
      "Tazio Nuvolari"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1950_Formula_One_season",
      "https://en.wikipedia.org/wiki/Nino_Farina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1950_Formula_One_season",
        "situacao": "ok",
        "texto": "The 1950 Formula One season was the fourth season of the FIA Formula One motor racing. It featured the inaugural FIA World Championship of Drivers, which was contested over seven races between 13 May and 3 September 1950. The only one outside of Europe was the Indianapolis 500, which was run to AAA National Championship regulations. No Formula One drivers competed in the Indy 500 or vice versa. Fi\n[…]\nAlfa Romeo entered a supercharged 158, a well-developed pre-war design that debuted in 1938, and managed to win all six races they competed in. Italian Giuseppe \"Nino\" Farina and Argentine teammate Juan Manuel Fangio both won three races and set three fastest laps each. But Fangio did not score points in the other three races, while Farina finished fourth in Belgium, handing him the championship.\n[…]\n^8 – Did not attend on Italian Grand Prix\n[…]\nThe Alfa Romeo team dominated the British Grand Prix at the fast Silverstone circuit in England, locking out the four-car front row of the grid. With King George VI in attendance, Giuseppe Farina won the race from pole position, also setting the fastest lap. The podium was completed by his teammates Luigi Fagioli and Reg Parnell, while the remaining Alfa driver, Juan Manuel Fangio, was forced to retire after experiencing problems with his engine.\n[…]\nThe final championship round of the season was the Italian Grand Prix at the Monza Autodrome near Milan, and all three of the regular Alfa Romeo drivers were in contention for the title. If Fangio finished first or second, he would win the title, regardless of where his teammates finished. If Farina failed to score at least five points, he would be unable to take the title.\n[…]\nFagioli's only chance of becoming World Champion was if he won the race and set the fastest lap; even then, he would need Farina to finish no higher than third, and Fangio would have to score no points at all."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nino_Farina",
        "situacao": "ok",
        "texto": "Emilio Giuseppe \"Nino\" Farina (Italian pronunciation: [dʒuˈzɛppe ˈniːno faˈriːna]; 30 October 1906 – 30 June 1966) was an Italian racing driver, who competed in Formula One from 1950 to 1956. Farina won the Formula One World Drivers' Championship in its inaugural 1950 season with Alfa Romeo, and won five Grands Prix across seven seasons.\n[…]\nAfter the war, Farina returned to Alfa Corse, winning the Nations Grand Prix in 1946. Amongst four major victories in 1948, Farina won the Monaco Grand Prix. He signed for Alfa Romeo in 1950, making his Formula One debut at the series-opening British Grand Prix, which he won ahead of Luigi Fagioli. Amidst a title charge by teammate Juan Manuel Fangio, Farina took further wins at the Swiss and Italian Grands Prix, becoming the first World Drivers' Champion.\n[…]\nIn 1950, Farina returned to Alfa Romeo for the inaugural FIA World Championship of Drivers. The opening race of the season was held at Silverstone Circuit, in front of 150,000 spectators. Farina won, with teammates Luigi Fagioli and Reg Parnell, completing an Alfa Romeo 1–2–3 finish. The victory made Farina the first of only three drivers to win on their World Drivers' Championship début.\n[…]\nFarina continued with Alfa Romeo for the 1951 season but was beaten by Fangio, who secured the title for the Milanese marque. Farina finished the season in fourth place, with his only world championship victory coming in the 1951 Belgian Grand Prix at Spa-Francorchamps. Farina switched back to Ferrari in 1952, when Grand Prix racing switched to Formula 2 specification, but had to take second place to team leader Ascari. He won the non-championship Gran Premio di Napoli and Monza Grand Prix.\n[…]\nFormula One drivers from Italy\n[…]\n\"The World Champions: Giuseppe Farina to Jackie Stewart\", Anthony Pritchard, 1974"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campeonato_Mundial_de_F%C3%B3rmula_1_de_1950",
        "situacao": "ok",
        "texto": "A temporada de Fórmula 1 de 1950 foi a primeira temporada do Campeonato do Mundo de Fórmula 1 da FIA. Começou em 13 de maio de 1950 e terminou em 3 de setembro, após sete corridas. Teve como campeão o italiano Giuseppe Farina da Alfa Romeo e como vice-campeão o argentino Juan Manuel Fangio, da Alfa Romeo.\n[…]\nO Campeonato Mundial de Pilotos inaugural viu a Alfa Romeo dominar com o seu Alfa Romeo 159 F1, um modelo que estreou em 1938, no período pré-guerra; Esse carro ganhou todos os seis Grande Prêmios em 1950. Todas as corridas feitas dentro da regulação Formula Um nesse campeonato foram sediadas na Europa.\n[…]\nAs 500 Milhas de Indianápolis (evento que, ao contrário das outras provas, foi corrida em um oval) foi feita sob as regulações da AAA American, e nenhum dos pilotos habituais que competiram na Europa correram nas 500 milhas, e vice versa. Os pilotos da Alfa Romeo dominaram o campeonato com o italiano Giuseppe Farina vencendo seu companheiro Juan Manuel Fangio. Embora as 500 Milhas de Indianápolis fossem organizadas sob outro regulamento, a prova foi incluída no Campeonato Mundial de 1950 a 1960.\n[…]\nA equipe Alfa Romeo dominou o Grande Prêmio do Reino Unido sediado no rápido circuito de Silverstone na Inglaterra, Completando a primeira fila (de quatro carros) do grid. Com o comparecimento do Jorge VI do Reino Unido, Giuseppe Farina faz a Pole Position, ganha a corrida e a volta mais rápida da prova.\n[…]\nA última rodada do campeonato foi o Grande Prêmio da Itália, no Autódromo de Monza, perto de Milão. Todos os três pilotos da Alfa Romeo estavam na disputa do título. Se Fangio terminasse em primeiro ou segundo, ele era coroado campeão, independente de onde seus companheiros de equipe terminassem. Se Farina não conseguisse obter pelo menos cinco pontos, ele não conseguiria o título.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Senna",
      "descricao": "Documentário britânico de 2010 sobre a vida e a carreira de Ayrton Senna, montado com imagens de arquivo."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Quem dirigiu o premiado documentário Senna, de 2010, contado só com imagens de arquivo da carreira do piloto?",
    "resposta": "Asif Kapadia",
    "distratores": [
      "Ron Howard",
      "Fernando Meirelles",
      "Walter Salles"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Senna_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Senna_(film)",
        "situacao": "ok",
        "texto": "Senna is a 2010 documentary film that depicts the life and death of Brazilian motor-racing champion Ayrton Senna, directed by Asif Kapadia.\n[…]\nSenna was acclaimed by critics. At the 65th British Academy Film Awards, it won two BAFTAs for Best Documentary and Best Editing, and also received a nomination for Outstanding British Film.\n[…]\nKapadia was able to \"fashion Senna's story as a live action drama rather than a posthumous documentary.\" Although the movie was made 25 years after Senna's death, Kapadia was able to tell the story using the abundance of archival footage from Senna's life. Formula One's exploding wealth and popularity in the 1980s and 1990s generated immense media coverage. In addition, Senna's omnipresence on Brazilian and Japanese television provided additional material.\n[…]\nKapadia recalled that by the 1990s, \"Ayrton Senna has pretty much got 40 cameras on him everywhere he goes, so it became like cutting a drama. We could literally have a mid shot, a reverse, a two-shot profile and a high-angled helicopter shot if we wanted.\" With so much material to choose from, Kapadia prioritized events with compelling camera footage, at the cost of omitting some of the most famous moments of Senna's career.\n[…]\nKapadia sought to condense and stylize Senna's life story, \"paring the film down to the bare minimum so that somebody who doesn't like Formula One, or a person who has never heard of Ayrton Senna, will get the film, understand the character, and actually be moved by his story.\" Certain Formula One figures took issue with this approach.\n[…]\nSenna at IMDb\n[…]\nSenna at Box Office Mojo\n[…]\nSenna at Rotten Tomatoes\n[…]\nSenna at Metacritic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Senna_%28filme%29",
        "situacao": "ok",
        "texto": "Senna (bra: Senna: O Brasileiro, O Herói, O Campeão) é um documentário lançado em 2010 que conta a trajetória de Ayrton Senna na Fórmula 1. É uma co-produção de França, Brasil, Reino Unido e Estados Unidos. O longa foi produzido pela Working Title em parceria com a ESPN Films e foi distribuído pela Universal Pictures.\n[…]\nAté que o diretor Asif Kapadia aceitou fazer um documentário sobre o piloto brasileiro, conseguindo assim autorização da família para a realização do projeto. A primeira tentativa de se produzir uma cinebiografia sobre o brasileiro ocorreu logo após a sua morte, ainda em maio de 1994. O filme seria uma coprodução luso-brasileira sob o título de \"O Campeão das Sete Pátrias\". As sete pátrias a qual se refere o título são as sete nações de língua portuguesa.\n[…]\nO documentário foca na carreira de Senna na fórmula 1 entre 1984 e 1994 com principal atenção na rivalidade com o piloto francês Alain Prost, como também suas rusgas com dirigentes da FIA, notadamente o seu presidente na época o francês Jean-Marie Balestre.\n[…]\nA produção também conta com várias imagens inéditas dos bastidores da fórmula 1, como reuniões entre os pilotos e dirigentes. O lado pessoal também é mostrado, porém com pouco destaque. Com imagens de arquivo da família Senna e depoimentos da irmã, além de entrevistas do pai e mãe do piloto. O lado de \"superstar\" também é lembrado durante a obra.\n[…]\nA empresa Technicolor SA foi responsável pela conclusão do trabalho de pós-produção do documentário Senna. O diretor Asif Kapadia fez o filme inteiramente a partir de imagens de arquivo, com formatos que variam de 16mm a HDCAM.\n[…]\nRevista Isto É - Gente - O corte no filme de Senna - 10 de novembro de 2010 - Gisele Vitória\n[…]\nRevista Época - Senna contra o sistema - 5 de novembro de 2010 - André Fontenelle",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Efeito solo",
      "descricao": "Princípio aerodinâmico em que o formato do assoalho do carro cria uma sucção que o prende ao chão, explorado na Fórmula 1 a partir do fim dos anos setenta."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1977 e 1978, que equipe inglesa revolucionou a Fórmula 1 com o efeito solo, o chamado carro-asa, que gruda no chão?",
    "resposta": "Lotus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ground_effect_(cars)",
      "https://en.wikipedia.org/wiki/Lotus_79"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ground_effect_(cars)",
        "situacao": "ok",
        "texto": "In car design, ground effect is a series of effects that have been exploited in automotive aerodynamics to create downforce, particularly in racing cars, through underbody tunnels and floor design. This has been the successor to the earlier dominant aerodynamic focus on streamlining. The international Formula One series and American racing IndyCars employ ground effects in their engineering and de\n[…]\nFormula One was the next setting for ground effect in racing cars. Several Formula One designs came close to the ground-effect solution which would eventually be implemented by Lotus. In 1968 and 1969, Tony Rudd and Peter Wright at British Racing Motors (BRM) experimented on track and in the wind tunnel with long aerodynamic section side panniers to clean up the turbulent airflow between the front and rear wheels. Both left the team shortly after and the idea was not taken further.\n[…]\nIn 1977 Rudd and Wright, now at Lotus, developed the Lotus 78 'wing car', based on a concept from Lotus owner and designer Colin Chapman. Its sidepods, bulky constructions between front and rear wheels, were shaped as inverted aerofoils and sealed with flexible \"skirts\" to the ground. The design of the radiators, embedded into the sidepods, was partly based on that of the de Havilland Mosquito aircraft.\n[…]\nAfter a forty-year ban, ground effect returned to Formula 1 in 2022 under the latest set of regulation changes.\n[…]\n\"Porpoising\" is a term commonly used to describe a particular fault encountered in ground-effect racing cars. Racing cars had only been using their bodywork to generate downforce for just over a decade when Colin Chapman's Lotus 78 and 79 cars demonstrated that ground effect was the future in Formula One, so at this point under-car aerodynamics were still very poorly understood.\n[…]\nGround effect in aircraft\n[…]\nGround-effect train\n[…]\nDennis David: Lotus 79 Archived 2011-06-05 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lotus_79",
        "situacao": "ok",
        "texto": "The Lotus 79 is a Formula One car designed in late 1977 by Colin Chapman, Geoff Aldridge, Martin Ogilvie, Tony Rudd, Tony Southgate and Peter Wright of Lotus. The Lotus 79 was the first F1 car to take full advantage of ground effect aerodynamics.\n[…]\nThe car was powered by the Ford Cosworth DFV and constructed of sheet aluminium honeycomb, specially strengthened for the pressures exerted on the car by the ground effect. The fuel tank was one single cell behind the driver, as opposed to the separate fuel tanks on the previous Lotus 78. This had the advantage of increasing fire protection and returning the centre of gravity to the middle of the car, helping cornering and braking.\n[…]\nIn 1979, Lotus kept Andretti but recruited Carlos Reutemann as their second driver, Martini Racing replaced JPS as sponsor in that year, so the car appeared in British racing green after twelve years. The 79 was to be replaced by the Lotus 80, intended to be the next step in the evolution of ground effects. Unlike the two previous models, although, the 80 proved to be a total failure and Lotus was forced to go back to the 79, driven by Andretti and Carlos Reutemann.\n[…]\nSeveral podium places were scored and the 79 was in contention for victory in the early stage of the season, but the next generation of ground effects cars led first by the Ligier JS11, then the Ferrari 312T4 and then the Williams FW07 — a car heavily based on the 79 outclassed the Lotus.\n[…]\nTipler, John (2003). Lotus 78 and 79: The Ground Effect Cars. Crowood Press. p. 192. ISBN 978-1-86126-586-9.\n[…]\nCotton, Andrew (2016). Lotus 79: Ultimate Ground Effect F1 Car. Haynes Publishing. ISBN 978-0-85733-810-5."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "500 Milhas de Indianápolis de 1965",
      "descricao": "Edição de 1965 das 500 Milhas de Indianápolis, vencida por um carro da Lotus com motor traseiro."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1965, que piloto escocês da Lotus venceu as 500 Milhas de Indianápolis no mesmo ano em que foi campeão mundial de Fórmula 1?",
    "resposta": "Jim Clark",
    "fonte": [
      "https://en.wikipedia.org/wiki/1965_Indianapolis_500",
      "https://en.wikipedia.org/wiki/Jim_Clark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1965_Indianapolis_500",
        "situacao": "ok",
        "texto": "The 49th International 500-Mile Sweepstakes was held at the Indianapolis Motor Speedway in Speedway, Indiana on Monday, May 31, 1965.\n[…]\nThe five-year-old \"British Invasion\" of Indy racing by rear engine cars (actually mid engine), which preceded the 1964 British Invasion by the Beatles, finally broke through as Team Lotus, Jim Clark and Colin Chapman triumphed in dominating fashion with the first rear-engined Indy-winning car, a Lotus 38 powered by the DOHC Ford Indy V8 engine. With only six of the 33 cars in the field still having front engines, it was the first 500 in history to have a majority of cars as rear-engined machines.\n[…]\nClark, of Scotland, had won the pole position in 1964, again started from the front row, and led 190 laps, the most since Bill Vukovich (195) in 1953. He became the first foreign-born winner of the Indianapolis 500 since 1920 when French-born Gaston Chevrolet won. Clark would go on to win the 1965 World Championship (which Indianapolis was not part of any longer). He is the only driver in history to win the Indy 500 and Formula One World Championship in the same year.\n[…]\nClark actually chose to skip Monaco to compete at Indy.\n[…]\nAfter visiting the broadcast booth in 1964 for an interview, Donald Davidson returned, joining the crew full-time as race historian. Also new for 1965 was Ron Carrell, who reported from the backstretch. Other guests that visited the booth included Gus Grissom, Senator Birch Bayh, Assistant Postmaster General Tyler Able, Wally Parks, Peter DePaolo, J. C. Agajanian, 500 Festival Chairperson Margaret Clark and 500 Festival Queen Suzanne Devine Sams."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jim_Clark",
        "situacao": "ok",
        "texto": "James Clark (4 March 1936 – 7 April 1968) was a British racing driver from Scotland who competed in Formula One from 1960 to 1968. Clark won two Formula One World Drivers' Championship titles, which he won in 1963 and 1965 with Lotus, and—at the time of his death—held the records for most wins (25), pole positions (33), and fastest laps (28), among others.\n[…]\nIn American open-wheel racing, Clark won the Indianapolis 500 in 1965 with Lotus, becoming the first non-American winner of the race in 49 years.\n[…]\nClark's first Drivers' World Championship came driving the Lotus 25 in 1963, winning seven out of the ten races and Lotus its first Constructors' World Championship. The 1963 Indianapolis 500 saw Clark's debut in the series; he finished in second position behind Parnelli Jones and won Indianapolis 500 Rookie of the Year honours. The 1963 Indy 500 result remains controversial.\n[…]\nIn 1964, Clark came within just a few laps of retaining his World Championship crown. As in 1962, an oil leak from the engine cost him the title, conceding to John Surtees. Tyre failure damaging the Lotus's suspension put paid to that year's attempt at the 1964 Indianapolis 500. He made amends and won the Championship again in 1965, and also won the 1965 Indianapolis 500 in the Lotus 38.\n[…]\nIn his Indianapolis 500 win, Clark led for 190 of the 200 laps, with a then-record average speed of over 150 mph (240 km/h), to become the first non-American in almost half a century to win the race. In 1963 and 1965, Clark equalled Alberto Ascari's record for the highest percentage of possible championship points in a season (100%).\n[…]\n* Clark won the 1965 Indianapolis 500.\n[…]\nClark's 1965 win was the first win for a mid-engined car at the Indianapolis 500. No front-engined car has won the race since.\n[…]\n1 Innes Ireland took over Clark's car and finished in 9th place.\n[…]\nJim Clark Rally"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/500_Milhas_de_Indian%C3%A1polis_de_1965",
        "situacao": "ok",
        "texto": "Resultados das 500 Milhas de Indianápolis de 1965, no circuito de Indianapolis na segunda-feira, 31 de Maio de 1965.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Grande Prêmio do Brasil",
      "descricao": "Corrida de Fórmula 1 disputada no Brasil, em Interlagos e em Jacarepaguá, válida pelo Mundial desde 1973."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1973, o Grande Prêmio do Brasil valeu pela primeira vez para o Mundial de Fórmula 1. Que brasileiro venceu a prova, em Interlagos?",
    "resposta": "Emerson Fittipaldi",
    "fonte": [
      "https://en.wikipedia.org/wiki/1973_Brazilian_Grand_Prix",
      "https://en.wikipedia.org/wiki/Brazilian_Grand_Prix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1973_Brazilian_Grand_Prix",
        "situacao": "ok",
        "texto": "The 1973 Brazilian Grand Prix was a Formula One motor race held at Interlagos on 11 February 1973. It was race 2 of 15 in both the 1973 World Championship of Drivers and the 1973 International Cup for Formula One Manufacturers. It was also the first ever world championship race to be held in Brazil. The race was won by home town hero Emerson Fittipaldi after starting from first row beside Ronnie P\n[…]\nThis was the Formula One World Championship debut for Brazilian driver Luiz Bueno."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Grand_Prix",
        "situacao": "ok",
        "texto": "The Brazilian Grand Prix (Portuguese: Grande Prêmio do Brasil), currently held under the name São Paulo Grand Prix (Portuguese: Grande Prêmio de São Paulo), is a Formula One championship race which is currently held at the Autódromo José Carlos Pace in Interlagos neighborhood, Cidade Dutra, São Paulo. The inaugural Brazilian Grand Prix, held in 1972, was held as a non-championship event, with all \n[…]\nLike most major circuits used for Grands Prix in Latin America such as the Hermanos Rodríguez Autodrome in Mexico City, Interlagos was (and still is) located in the confines of a sprawling urban neighborhood in a very large city. The following year, however, the race was first included in the official calendar, and it was won by defending world champion and São Paulo native Emerson Fittipaldi.\n[…]\nIn 1974, Fittipaldi won again in rain soaked conditions, and the year after, another São Paulo native, Carlos Pace, won the race in his Brabham, followed by Fittipaldi. 1977 was won by Reutemann, but the drivers began complaining about Interlagos's very rough surface, and the event was then relocated for a year to the new Jacarepaguá circuit in Rio de Janeiro.\n[…]\nDriven by the Formula 1 success of São Paulo native Ayrton Senna, city officials undertook a $15 million investment of renovation of the Interlagos track to shorten and re-surface the track. In 1990, the Brazilian Grand Prix returned to the shortened, reconfigured Interlagos, where it has been held continually since.\n[…]\nFive Brazilian drivers have won the Brazilian Grand Prix, with Emerson Fittipaldi, Nelson Piquet, Ayrton Senna and Felipe Massa each winning twice, and Carlos Pace winning once. The most wins ever is by the Frenchman Alain Prost, who has won the race six times (including five times at Jacarepaguá). Argentine driver Carlos Reutemann and Michael Schumacher have both won four times."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_do_Brasil_de_1973",
        "situacao": "ok",
        "texto": "Resultados do Grande Prêmio do Brasil de Fórmula 1 realizado em Interlagos em 11 de fevereiro de 1973. Segunda etapa do campeonato, foi vencido pelo brasileiro Emerson Fittipaldi, da Lotus-Ford, com Jackie Stewart em segundo pela Tyrrell-Ford e Denny Hulme em terceiro pela McLaren-Ford.\n[…]\nPrimeira corrida oficial de Fórmula 1 no Brasil.\n[…]\nEstreia do piloto brasileiro Luiz Pereira Bueno.\n[…]\nNota: Somente as primeiras cinco posições estão listadas. Em 1973, os pilotos computariam sete resultados nas oito primeiras corridas do ano e seis nas últimas sete. Na tabela dos construtores figurava somente o melhor colocado dentre os carros do mesmo time.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Graham Hill",
      "descricao": "Piloto inglês bicampeão mundial de Fórmula 1, em 1962 e 1968, pai do também campeão Damon Hill."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por ter vencido cinco vezes nas ruas do principado nos anos sessenta, o inglês Graham Hill ganhou qual apelido?",
    "resposta": "Senhor Mônaco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Graham_Hill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Graham_Hill",
        "situacao": "ok",
        "texto": "Norman Graham Hill (15 February 1929 – 29 November 1975) was a British racing driver, rower and motorsport executive, who competed in Formula One from 1958 to 1975. Nicknamed \"Mr. Monaco\", Hill won two Formula One World Drivers' Championship titles and, at the time of his retirement, held the record for most podium finishes (36); he won 14 Grands Prix across 18 seasons. In American open-wheel raci\n[…]\nHill founded and competed for Embassy Hill from 1973 to 1975, retiring from motor racing after the Monaco Grand Prix to focus on team ownership and supporting his protégé Tony Brise. In addition to his two championships, Hill achieved 14 race wins, 13 pole positions, ten fastest laps and 36 podiums in Formula One.\n[…]\nHill joined Team Lotus as a mechanic soon after but quickly talked his way into the cockpit. The Lotus presence in Formula One (F1) allowed him to make his debut at the 1958 Monaco Grand Prix, retiring with a halfshaft failure.\n[…]\nthe Indianapolis 500 (won by Hill in 1966), the 24 Hours of Le Mans (1972) and the Monaco Grand Prix (1963–65, 1968, 1969), or\n[…]\nHill set up his own team in 1973: Embassy Hill with sponsorship from Imperial Tobacco. The team used chassis from Shadow and Lola before evolving the Lola into its own design in 1975. After failing to qualify for the 1975 Monaco Grand Prix, where he had won five times, Hill retired from driving to concentrate on running the team and supporting his protege Tony Brise.\n[…]\nHill's 1966 victory marked the first win by a rookie driver since George Souders' 1927 win and the last until Juan Pablo Montoya's visit to Victory Lane in 2000 (Montoya has also emulated Hill's feat of winning both the Indianapolis 500 and the Monaco Grand Prix).\n[…]\nGrand Prix History – Hall of Fame, Graham Hill Archived 10 October 2012 at the Wayback Machine\n[…]\nGraham Hill Statistics\n[…]\nGraham Hill Photos\n[…]\nGraham Hill at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Graham_Hill",
        "situacao": "ok",
        "texto": "Norman Graham Hill (Hampstead, 15 de fevereiro de 1929 – Arkley, 29 de novembro de 1975) foi um automobilista britânico, bicampeão mundial da Fórmula 1 em 1962 e 1968. Esteve na categoria por 18 temporadas entre 1958 e 1975, sendo também proprietário de uma equipe. Ele é o único piloto a vencer a Tríplice Coroa do Automobilismo — 24 horas de Le Mans (em 1972), 500 milhas de Indianápolis (em 1966) \n[…]\nEle recebeu o apelido de \"Mr. Mônaco\" em função das cinco vitórias em Monte Carlo na década de 1960: 1963, 1964, 1965, 1968 e 1969 — sua última vitória na categoria. A sua marca foi superada 24 anos depois pelo brasileiro Ayrton Senna, que obteve a sexta em 1993. O seu sobrenome Hill não tem nenhum grau de parentesco com Phil Hill, piloto norte-americano campeão da Fórmula 1 em 1961.\n[…]\nGraham sobreviveu a vários acidentes antes de se aposentar aos 46 anos e montar sua própria equipe, Embassy Hill na Fórmula 1.\n[…]\nO reconhecimento oficial foi feito através de sua ficha dentária. Os corpos, carbonizados, estavam irreconhecíveis. O avião vinha sob seu comando, de um voo que começara 10 minutos antes do acidente. Na Europa, 18 horas e 30 minutos em Marselha, França, Graham Hill tinha passado o dia no autódromo de Paul Ricard fazendo testes no novo carro de sua equipe.\n[…]\nGraham era casado com Bette Hill desde 1955 e deixou três filhos: Brigitte (mais velha), Damon Hill (do meio, que depois se tornaria campeão mundial de Fórmula 1 em 1996) e Samantha. Seu funeral foi na abadia de St. Albans, e ele está enterrado na igreja de St. Botolphs em Shenley. Em 1990, Graham foi introduzido ao International Motorsports Hall of Fame.\n[…]\nGP de Mônaco de 1962 (Monte Carlo)\n[…]\nGP de Mônaco de 1964 (Monte Carlo)\n[…]\nGP de Mônaco de 1965 (Monte Carlo)\n[…]\nGP de Mônaco de 1968 (Monte Carlo)\n[…]\nGP de Mônaco de 1969 (Monte Carlo)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Flechas de Prata",
      "descricao": "Apelido dos carros de corrida prateados da Mercedes-Benz e da Auto Union nos Grandes Prêmios dos anos trinta, depois estendido aos carros da Mercedes."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nos anos trinta, os carros de corrida alemães da Mercedes e da Auto Union, pintados de prateado, ganharam qual apelido?",
    "resposta": "Flechas de Prata",
    "fonte": [
      "https://en.wikipedia.org/wiki/Silver_Arrows"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Silver_Arrows",
        "situacao": "ok",
        "texto": "Silver Arrows (German: Silberpfeile) is a nickname typically given to silver racing cars with a significant connection to a German car manufacturer. Although the term was coined in 1932, it came into popular usage regarding Germany's dominant Mercedes-Benz and Auto Union Grand Prix motor racing cars between 1934 and 1939.\n[…]\nThere is however, controversy and doubt regarding this story. It did not appear until 1958, and no reference to it has been found in contemporary sources. It has since been established that von Brauchitsch had raced a streamlined silver SSKL on the AVUS in 1932, which was called a Silver Arrow in live radio coverage. Also, in 1934, both Mercedes and Auto Union had entered the Avusrennen with silver cars.\n[…]\nThe Silver Arrows of Mercedes and Auto Union cars reached speeds of well over 300 kilometres per hour (186 mph) in 1937, and well over 400 km/h (249 mph) during land speed record runs.\n[…]\nMercedes-Benz returned to Formula One Grand Prix racing in 1994 as an engine manufacturer, initially partnering the Sauber team before switching to McLaren in 1995. After Marlboro's sponsorship of McLaren ended at the conclusion of 1996, the team began using a silver livery and thus the McLaren-Mercedes cars were often referred to as \"Silver Arrows\".\n[…]\nIn 2010, after purchasing the Brawn GP outfit and rebranding it as Mercedes GP Petronas F1 Team, Mercedes-Benz became a constructor again. Mercedes' cars have been nicknamed \"Silver Arrows\" by the press and by the team itself. The modern cars race with the majority of their bodies painted in a traditional silver shade, trimmed in Petronas green.\n[…]\nNB: For sources specifically about Auto Union Silver Arrows, see Auto Union racing cars. For sources specifically about Mercedes-Benz Silver Arrows, see Mercedes-Benz in motorsport.\n[…]\nThe Silver Arrows"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Flechas_de_Prata",
        "situacao": "ok",
        "texto": "Flechas de Prata, ou ainda, Flechas Prateadas (Silberpfeil em alemão) eram as equipes de competições da Mercedes-Benz e Auto Union entre os anos de 1934 e 1939 pela imprensa alemã devido a sua dominância nas competições de automobilismo da época, deixando de ser utilizado durante um breve período após o início da Segunda Guerra Mundial, devido ao fato das empresas passarem a priorizar a construção\n[…]\nO motivo para a coloração prateada dos veículos da Mercedes é controverso, mas a versão mais conhecida da história, publicada nas memórias do então chefe da equipe, Alfred Neubauer, e do piloto Manfred von Brauchitsch, eles tiveram a ideia de remover a pintura, deixando os veículos apenas nas chapas de alumínio, após o Mercedes-Benz W25, o primeiro veículo construído após um investimento de 250 mil reichsmarks do governo alemão na empresa, ultrapassar em um quilograma os 750 quilogramas permitido pelos regulamentos das principais competições de fórmula da época.\n[…]\nCom o W25, Rudolf Caracciola, um dos mais famosos e importantes automobilistas do período anterior a Fórmula 1, venceu seu primeiro título do Campeonato Europeu de Automobilismo, em 1935. Caracciola ainda conquistaria os títulos de 1937 e 1938 com a Mercedes. A edição de 1936 ficou com Bernd Rosemeyer, pilotando pela Auto Union.\n[…]\nA Auto Union, que também recebera 250 mil reichsmarks do governo alemão, liderava a controversa edição de 1939 do campeonato europeu com Hermann Paul Müller quando o mesmo acabou sendo paralisado em virtude da eclosão da Segunda Guerra. Apesar da paralisação, Hermann Lang, da Mercedes, que se encontrava na segunda colocação no momento, foi considerado pelos responsáveis pelo automobilismo do governo alemão como o campeão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Kimi Räikkönen",
      "descricao": "Piloto finlandês de Fórmula 1, campeão mundial em 2007 pela Ferrari."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Famoso pelo jeito frio e por falar pouco, o finlandês Kimi Räikkönen, campeão de 2007, ganhou qual apelido em inglês?",
    "resposta": "Iceman, o Homem de Gelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
        "situacao": "ok",
        "texto": "Kimi-Matias Räikkönen (Finnish pronunciation: [ˈkimi ˈmɑtiɑs ˈræi̯kːønen]; born 17 October 1979) is a Finnish racing and rally driver who competed in Formula One between 2001 and 2021, and the World Rally Championship from 2009 to 2011. Nicknamed \"the Iceman\", Räikkönen won the Formula One World Drivers' Championship in 2007 with Ferrari, and won 21 Grands Prix across 19 seasons.\n[…]\nDuring his early years at McLaren, Ron Dennis gave him the nickname, \"Iceman\", with several layers of meaning; apart from its association with the cold climate of Finland, he is widely considered to have a cool temperament under pressure and also an 'icy' persona with most other drivers, team members and the media. He has said that he is \"not here to try to please people.\n[…]\nRäikkönen's helmet, designed by UffeDesigns, manufactured by Arai (2001–2006, 2012), Bell (2013, 2015–2021), and Schuberth (2007–2009, 2014), slightly changed during the years. His helmet has also always featured a V design running on the circle top (representing a flying bird) and the inscription \"Iceman\". The trident insignia was painted in white during his time racing for Sauber and McLaren until 2005, and red from 2006 with McLaren and during his time with Ferrari.\n[…]\nAs of 2025, Räikkönen is the latest Ferrari driver to win the World Championship.\n[…]\nThe Unknown Kimi Raikkonen\n[…]\nNevalainen, Petri (22 October 2008). Jäämies – Kimi Räikkösen henkilökuva [The Iceman – a portrait of Kimi Räikkönen] (in Finnish). Helsinki: Ajatus Kirjat. p. 224. ISBN 978-951-20-7805-9.\n[…]\nHotakainen, Kari (18 October 2018). The Unknown Kimi Raikkonen. Siltala Publishing. p. 320. ISBN 978-1471177668.\n[…]\nSingh, A (6 April 2017). \"Kimi Raikkonen: The Iceman Who Heats Up F1 Racing\". TrendMantra. IN. Retrieved 12 February 2021.\n[…]\nFormula One DataBase: Kimi Räikkönen\n[…]\nKimi Räikkönen at IMDb\n[…]\nKimi Räikkönen driver statistics at Racing-Reference"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
        "situacao": "ok",
        "texto": "Kimi-Matias Räikkönen (Espoo, 17 de outubro de 1979) é um automobilista finlandês que atuou na Fórmula 1 entre 2001 e 2021, sendo campeão mundial em 2007 e vice-campeão em 2003 e 2005, Campeonato Mundial de Rali e NASCAR.\n[…]\nEm 2007, Räikkönen foi o primeiro piloto desde Nigel Mansell, em 1989, a estrear pela Ferrari com uma vitória. Ele ganhou o Grande Prêmio da Austrália, que abriu a temporada de 2007. E, após dois vice-campeonatos, o finlandês sagrou-se campeão mundial em 21 de outubro de 2007, vencendo o Grande Prêmio do Brasil, no Autódromo de Interlagos.\n[…]\nPara se tornar campeão mundial de pilotos em 2007, Räikkönen contou com os erros cometidos pelo inglês Lewis Hamilton na corrida, que logo na segunda curva da corrida perdeu o controle do carro, chegando a ficar na décima oitava colocação, e pela estratégia adotada pela Ferrari, que fez com que o finlandês assumisse a liderança da prova, que era do brasileiro Felipe Massa na volta de número cinquenta e dois.\n[…]\nEm 2 de abril de 2011 o finlandês assinou um acordo com a equipe de Kyle Busch para disputar parte da temporada 2011 da NASCAR Truck Series, que é o terceiro campeonato em importância na NASCAR. Em sua estreia, Räikkönen terminou a prova de Charlotte na décima-quinta posição.\n[…]\nNo dia 1 de setembro de 2021, Kimi Räikkönen anunciou que se aposentaria da Fórmula 1 após o final da temporada de 2021.\n[…]\nEm comemoração ao seu 39º aniversário, em 17 de outubro de 2018, Kimi lançou sua autobiografia oficial intitulada de \"The unknown Kimi Räikkönen\", escrita por Kari Hotakaienen, em finlandês.\n[…]\n«Sítio oficial» (em inglês)\n[…]\n«Kimi Räikkönen» (em inglês). em Driverdatabase",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Valentino Rossi",
      "descricao": "Piloto italiano de motovelocidade, nove vezes campeão mundial de Grand Prix."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O italiano Valentino Rossi, nove vezes campeão mundial de motovelocidade, ficou conhecido no mundo inteiro por qual apelido?",
    "resposta": "O Doutor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Valentino_Rossi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Valentino_Rossi",
        "situacao": "ok",
        "texto": "Valentino Rossi ( ROSS-ee; Italian: [valenˈtiːno ˈrossi]; born 16 February 1979) is an Italian racing driver, former professional motorcycle road racer, and nine-time Grand Prix motorcycle racing World Champion. Nicknamed \"the Doctor\", he is widely considered one of the greatest motorcycle racers of all time. Rossi is also the only road racer to have competed in 400 or more Grands Prix. Of Rossi's\n[…]\nRossi managed to finish tenth at his final Italian GP race at the Mugello MotoGP circuit with a 10th-place finish. Eighth place at the Austria round turned out to be Rossi's best finish of the season. On 14 November 2021, Valentino Rossi ended his MotoGP racing career at the Valencian Grand Prix in Circuit Ricardo Tormo.\n[…]\nIn November 2021, Rossi was officially inducted into the MotoGP Hall of Fame at the FIM MotoGP awards ceremony. In December 2022, Valentino Rossi received the Lifetime Achievement Award for his great services to the world of motorcycle racing, given in a circle-shaped trophy with the words 'Grazie Vale' written on it. The award was given directly by FIM President Jorge Viegas to Valentino Rossi at the FIM Awards event held in Rimini, Italy.\n[…]\nRossi, Valentino (10 September 2009). What If I Had Never Tried It: The Autobiography. Motorbooks. ISBN 978-0760337561.\n[…]\nScott, Michael (1 January 2018). Valentino Rossi: Life of a Legend. Motorbooks. ISBN 978-0760357415.\n[…]\nBarker, Stuart (12 November 2020). Valentino Rossi: The Definitive Biography. John Blake Publishing. ISBN 978-1789462951.\n[…]\nOxley, Mat (13 January 2022). Valentino Rossi: All His Races. Evro Publishing. ISBN 978-1910505212.\n[…]\nValentino Rossi at DriverDB.com\n[…]\nValentino Rossi at eWRC-results.com\n[…]\nValentino Rossi at MotoGP.com\n[…]\nValentino Rossi at the CONI honored athlete website (in Italian)\n[…]\nValentino Rossi at AS.com (in Spanish)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Valentino_Rossi",
        "situacao": "ok",
        "texto": "Valentino Rossi (Urbino, 16 de fevereiro de 1979) é um ex-motociclista profissional e vencedor de vários títulos mundiais de MotoGP. Com 9 campeonatos mundiais de motociclismo, sendo 7 na principal categoria, estando atrás por 1 título, de Giacomo Agostini que tem 8 na principal categoria, no seu palmarés é considerado um dos mais bem sucedidos desportistas e pilotos de motociclismo de todos os te\n[…]\nRossi é conhecido pela sua excentricidade dentro e fora das pistas. No mundo do motociclismo é conhecido como \"Il Dottore\" (O Doutor). Desde o início, usa o número 46 em homenagem ao pai, Graziano Rossi. Viveu em Londres entre 2000 e 2008. Mas depois de solucionar o ajuste de pagamento do fisco italiano, voltou à sua cidade natal, Tavullia.\n[…]\nRossi começou pilotando uma Aprilia, onde foi campeão mundial pela 125cc, em 1997; e pela 250cc, em 1999. No ano 2000, assinou um contrato com a Honda e acabou sendo campeão do mundo três vezes: em 2001 pela 500cc, que hoje se chama MotoGP; em 2002, com motores de 990cc; e em 2003. Em 2004 fechou com a Yamaha, onde ficou até 2010. Nesse meio tempo, ele foi campeão em 2004 e 2005 ainda com os motores de 990cc; e em 2008 e 2009 foi campeão de novo, já com os novos motores de 800cc.\n[…]\nFoi mais do mesmo, em 2003, para os rivais de Rossi quando conseguiu nove poles, bem como nove vitórias para reivindicar seu terceiro Campeonato Mundial consecutivo, conquistando o título na Malásia. Este ano, Sete Gibernau se tornou seu adversário mais forte, batendo Rossi várias vezes, embora Rossi tenha levado a melhor sobre Gibernau na República Checa, por apenas 0,042 segundo.\n[…]\nRossi é o segundo piloto, na história, a vencer campeonatos mundiais de motovelocidade consecutivos com motos de equipes diferentes (2001-2003 com a Honda e 2004-2005 com a Yamaha) junto com Eddie Lawson (1988 com a Yamaha e 1989 com a Honda);\n[…]\nValentino Rossi no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Valentino Rossi",
      "descricao": "Piloto italiano de motovelocidade, nove vezes campeão mundial de Grand Prix."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Que número Valentino Rossi usou na moto durante toda a carreira, e que acabou virando a marca da sua empresa?",
    "resposta": "46",
    "fonte": [
      "https://en.wikipedia.org/wiki/Valentino_Rossi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Valentino_Rossi",
        "situacao": "ok",
        "texto": "Valentino Rossi ( ROSS-ee; Italian: [valenˈtiːno ˈrossi]; born 16 February 1979) is an Italian racing driver, former professional motorcycle road racer, and nine-time Grand Prix motorcycle racing World Champion. Nicknamed \"the Doctor\", he is widely considered one of the greatest motorcycle racers of all time. Rossi is also the only road racer to have competed in 400 or more Grands Prix. Of Rossi's\n[…]\nOn 5 August 2021, during the pre-event press conference of the Styria weekend, Rossi announced that he would retire from MotoGP after the 2021 season. His last race was the 2021 Valencian Grand Prix, and he was congratulated for a successful career by prominent racing figures such as Lewis Hamilton and Max Verstappen, as well as former rival Casey Stoner. Rossi's number 46 was retired with a ceremony in the 2022 Italian motorcycle Grand Prix.\n[…]\nHe has always raced with the number 46 in his motorcycle grand prix career, the number his father had raced with. Typically, a World Championship winner is awarded the No. 1 sticker for the next season. However, in a homage to Britain's Barry Sheene, who was the first rider of the modern era to keep the same number (#7), Rossi has stayed with the now-famous No. 46 throughout his career, though as the world champion he has worn the No. 1 on the shoulder of his racing leathers.\n[…]\nBesides having a racing team, Rossi also has other businesses such as merchandise, apparel, and many other things with the VR46 brand. In Tavullia he also has a place of business with the name Tavullia 46. Tavullia 46 owns various entities such as pizza restaurants and ice cream shops.\n[…]\nIn Tavullia, Italy, there is a private museum of Valentino Rossi, his hometown. The museum is called 'Route 46' and displays various historical collections from his racing career, including motorcycles, helmets, racing equipment, and trophies.\n[…]\nValentino Rossi at AS.com (in Spanish)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Valentino_Rossi",
        "situacao": "ok",
        "texto": "Valentino Rossi (Urbino, 16 de fevereiro de 1979) é um ex-motociclista profissional e vencedor de vários títulos mundiais de MotoGP. Com 9 campeonatos mundiais de motociclismo, sendo 7 na principal categoria, estando atrás por 1 título, de Giacomo Agostini que tem 8 na principal categoria, no seu palmarés é considerado um dos mais bem sucedidos desportistas e pilotos de motociclismo de todos os te\n[…]\nRossi é conhecido pela sua excentricidade dentro e fora das pistas. No mundo do motociclismo é conhecido como \"Il Dottore\" (O Doutor). Desde o início, usa o número 46 em homenagem ao pai, Graziano Rossi. Viveu em Londres entre 2000 e 2008. Mas depois de solucionar o ajuste de pagamento do fisco italiano, voltou à sua cidade natal, Tavullia.\n[…]\nEm 1994, a Aprilia, através da Sandroni, contratou Valentino Rossi, e passou a utilizá-lo para melhorar significativamente, a RS 125. Isto permitiu a Rossi aprender como lidar com uma rápida moto de 125cc do campeonato mundial. Primeiro correu, na Sandroni, no campeonato italiano de 1994; e continuou a correr nos campeonatos europeu e italiano de 1995.\n[…]\nPara a temporada de 1998, a Aprilia tinha como pilotos Valentino Rossi, Loris Capirossi e Tetsuya Harada, para pilotar a RS250. Mas, mesmo com uma moto rápida e experientes campeões mundiais como companheiros de equipe, Rossi esforçou-se na sua primeira temporada nas 250cc. Rossi considera 1998 o ano de maior resistência da sua carreira, pela enorme pressão que sofria cada vez que corria, como, aliás, já era esperado pela Aprilia, a mídia e, efetivamente, todos em seu redor.\n[…]\nValentino Rossi teve diversos designs nos seus capacetes, durante toda a sua carreira. A maioria com modificações do Sol e da Lua, significando (de acordo com o próprio Rossi) os dois lados de sua personalidade. O autor do design de cada capacete de Valentino Rossi é Aldo Drudi.\n[…]\nValentino Rossi no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Circuito de Mônaco",
      "descricao": "Circuito de rua de Monte Carlo, em Mônaco."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A primeira curva do circuito de rua de Mônaco tem o nome de uma pequena capela vizinha. A capela é dedicada a quem?",
    "resposta": "Santa Devota, padroeira de Mônaco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Circuit_de_Monaco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Circuit_de_Monaco",
        "situacao": "ok",
        "texto": "The Circuit de Monaco is a 3.337 km (2.074 mi) street circuit laid out on the city streets of Monte Carlo and La Condamine around the harbour of the Principality of Monaco. It is commonly, and even officially, referred to as \"Monte Carlo\" because it is largely inside the Monte Carlo neighbourhood of Monaco.\n[…]\nAfter the hairpin, the cars head downhill again to a double right-hander called Portier, named after the region of Monaco, before heading into the famous tunnel, a unique feature of a Formula One circuit.\n[…]\nOn 18 September 2014 it was announced the Formula E would be racing on a shorter 1.760 km (1.094 mi) version of the Monaco Grand Prix circuit, which was subsequently used for the 2014–15, 2016–17 and 2018–19 seasons.\n[…]\nThe second stage started in Monaco-Ville and followed the circuit throughe the start-finish straight, Sainte-Devote and to the casino, before leaving the circuit and the country.\n[…]\nAs of June 2026, the layout history and fastest official race lap records at the Circuit de Monaco are listed as:\n[…]\nAlthough the Mediterranean precipitation pattern leads to Monaco being quite dry by late May, due to the urban and narrow nature of the circuit, rainfall combined with the painted areas and the long tunnel makes wet racing extremely challenging. This was demonstrated by the 1984, 1996, 1997, 2008, 2016, 2022 and 2023 events. The 1984 event was red-flagged due to track conditions being deemed too dangerous with the race not being restarted.\n[…]\nThe Chatham – a former bar near the Beau Rivage corner on the Circuit de Monaco that was popular with motor racing personalities\n[…]\nCircuit de Monaco on Google Maps (Current Formula 1 Tracks)\n[…]\nCircuit de Monaco on Google Maps\n[…]\nCircuit de Monaco in PC games (Every car showcased around Circuit de Monaco)\n[…]\nCircuit de Monaco race results at Racing-Reference"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Circuito_de_M%C3%B4naco",
        "situacao": "ok",
        "texto": "Circuito de Mônaco (em francês: Circuit de Monaco) é um circuito de rua na cidade de Monte Carlo, no Principado de Mônaco, mais conhecido por sediar anualmente o Grande Prêmio de Mônaco de Fórmula 1. A ideia de um Grand Prix nas ruas inclinadas do Mônaco partiu de Anthony Noghes, presidente do Automóvel Clube Monegasco e amigo pessoal da Família Grimaldi. A corrida inaugural teve lugar em 1929 e f\n[…]\nDevido às características técnicas do circuito, o Grande Prêmio de Mônaco é considerado uma das provas mais exigentes do calendário da Fórmula 1, historicamente associada a elevado prestígio entre pilotos e público.\n[…]\nCuriosamente, com exceção do atual trecho da piscina, com suas quatro curvas, introduzido em 1973, o traçado de 3.337 metros é, basicamente, o mesmo que no dia 14 de abril de 1929 recebeu o I GP de Mônaco.\n[…]\nCom apenas 3,337km de perímetro, o Circuito de Montecarlo é o mais curto do calendário da Formula 1. Como consequência, é o que mais voltas tem, 78, pelo que a corrida tem 260.268km. Além disso, os 210 metros que separam a grelha de partida da primeira curva, representam a distância mais curta do calendário entre um grid e uma primeira curva.\n[…]\nDesde 1950, o vencedor do Grande Prêmio de Mônaco largou apenas 10 vezes de uma posição pior que o terceiro lugar da grelha de partida ;\n[…]\nVitória largando da posição mais distante da grelha de partida do Grande Prêmio de Mônaco -  Olivier Panis, em 1996, que largou na 14ª posição.\n[…]\n295km/h: É esta a velocidade máxima atingida por um monolugar nas ruas de Monte Carlo, na abordagem à curva 10.\n[…]\nA cor creme estão os Grande Prêmios de Mônaco que fizeram parte do Campeonato Europeu de Automobilismo anterior a 2ª Guerra Mundial.\n[…]\n↑1  (Última atualização: GP de Mônaco de 2026)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Carrera Panamericana",
      "descricao": "Corrida de estrada de longa distância disputada no México entre 1950 e 1954, depois revivida como prova de carros clássicos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Carrera, usado pela Porsche em vários modelos esportivos, homenageia uma corrida de estrada dos anos cinquenta disputada em qual país?",
    "resposta": "México",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carrera_Panamericana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carrera_Panamericana",
        "situacao": "ok",
        "texto": "The Carrera Panamericana was a border-to-border sedan (stock and touring and sports car) rally racing event on open roads in Mexico similar to the Mille Miglia and Targa Florio in Italy. Running for five consecutive years from 1950 to 1954, it was widely held by contemporaries to be the most dangerous race of any type in the world. It has since been resurrected along some of the original course as\n[…]\nThe race would prove to exact a heavy toll upon drivers. During the first stage, José Estrada and Miguel González died after their 1951 Packard left the road and fell 630 feet (190 m) into a ravine. Estrada was an experienced racer and car dealer, who had announced at the start of the race: \"I will win, or die trying.\" The next day Italian driver Carlos Panini also died after an accident. Panini was a pioneer of Mexican aviation who established Mexico's first scheduled airline in 1927.\n[…]\nThe deaths of Panini and Estrada resulted in denunciations of the race by Mexico City's El Universal newspaper, who called the race a \"crime\", and by a government official who stated the race was \"an imitation of North American customs not suited to Mexican characteristics.\" 4 people were killed during this edition of the Carrera Panamericana: in addition to Panini, Estrada and González's deaths, the mayor of Oaxaca, Lorenzo Mayoral Lemus, lost his life during a run of the first stage between the cities of Tuxtla Gutiérrez and Oaxaca.\n[…]\n'Only' one person was killed in this event, Santos Letona of Puebla, Mexico, who died in a crash near the town of Texmelucan on the third stage between there and Mexico City.\n[…]\nPorsche's Carrera, Panamera, and Panamericana\n[…]\nClark, R.M.; The Carrera Panamericana Mexico, Brooklands Books, Ltd. (no publishing date) ISBN 1-85520-412-6\n[…]\nCarrera Panamericana (1950-54) documentary trailer posted here by copyright holder."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Juan Manuel Fangio",
      "descricao": "Piloto argentino pentacampeão mundial de Fórmula 1 nos anos cinquenta."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nos anos cinquenta, o argentino Juan Manuel Fangio conquistou seus cinco títulos mundiais de Fórmula 1 defendendo quantas equipes diferentes?",
    "resposta": "Quatro",
    "distratores": [
      "Duas",
      "Três",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Juan_Manuel_Fangio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Juan_Manuel_Fangio",
        "situacao": "ok",
        "texto": "Juan Manuel Fangio (Spanish: [ˈxwan maˈnwel ˈfaŋxjo], Italian: [ˈfandʒo]; 24 June 1911 – 17 July 1995) was an Argentine racing driver, who competed in Formula One from 1950 to 1958. Nicknamed \"el Chueco\" and \"el Maestro\", Fangio won five Formula One World Drivers' Championship titles and—at the time of his retirement—held the record for most wins (24), pole positions (29), fastest laps (23), and p\n[…]\nEspinoza, who as a child and teenager lived alternating between Mar del Plata (where his parents visited him every time Fangio returned to Argentina) and Balcarce, where he usually spent most of his time with his paternal grandparents, Loreto and Herminia, would soon begin to develop an interest in motor racing, which caused the first frictions with his father, since Juan Manuel was against his son starting to compete.\n[…]\nEspinoza's first opportunity to try to obtain his real last name was in 1966. Due to his outstanding performance in Turismo Carretera, \"Cacho\" had the opportunity to compete in the European Formula Two Championship. Because he had to renew his passport to travel to Europe, and the renewal process was delayed, Juan Manuel told his son that the only chance to get his passport renewed as quickly as possible was to add the surname Fangio to his Identity Card, and that was how it was given.\n[…]\nThe genetic result between Rodriguez and Cacho Fangio was that they are brothers with a certainty of almost 98%, which would lead to the conclusion that Rodriguez would also be the son of Juan Manuel, although the next step was still missing, which was to perform the same study by matching the DNA samples of Rodriguez with those extracted from the remains of the “Chueco”.“\n[…]\nPierre Menard & Jacques Vassal. Juan-Manuel Fangio: The Race in the Blood. Chronosports. ISBN 978-2847070453\n[…]\nJuan Manuel Fangio Website\n[…]\nJuan Manuel Fangio Museum (in Spanish)\n[…]\nJuan Manuel Fangio at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Juan_Manuel_Fangio",
        "situacao": "ok",
        "texto": "Juan Manuel Fangio (Balcarce, 24 de junho de 1911 — Buenos Aires, 17 de julho de 1995) foi um automobilista argentino. Dominou a primeira década da Fórmula 1, ganhando o campeonato mundial cinco vezes.\n[…]\nFangio venceu o campeonato de pilotos, cinco vezes — um recorde que permaneceu durante 47 anos até ele ser batido por Michael Schumacher — por quatro equipes diferentes, uma façanha que não foi repetida. Um membro da Formula 1 Hall of Fame, ele é considerado por muitos como um dos maiores pilotos da Fórmula 1 de todos os tempos e detém a maior porcentagem de vitórias na Fórmula 1 — 46.15% — 24 de 52 corridas de Fórmula 1.\n[…]\nFangio é único piloto argentino que venceu a Grande Prêmio da Argentina, tendo ele vencido quatro vezes em sua carreira.\n[…]\nJuan Manuel Fangio correu 51 grandes prêmios, obteve 24 vitórias, 29 pole positions, 23 recordes de volta, cinco títulos mundiais (1951, 1954, 1955, 1956 e 1957) dos quais 4 foram consecutivos, e dois vice-campeonatos (1950 e 1953) em oito temporadas que disputou. Fangio correu em quatro escuderias: Alfa Romeo (1950-1951), Maserati (1953-1954), Mercedes (1954-1955), Ferrari (1956) e Maserati (1957-1958).\n[…]\nOscar 'Cacho' Fangio, quatro anos mais velho que Rubén, também foi comprovado que é filho do piloto. 'Cacho' foi corredor de automóveis de Fórmula 3, conviveu com o ex-campeão e também era chamado de Fangio nas pistas. Mas só agora também está mudando seu nome nos documentos. Hoje, os dois, Oscar e Rubén, se chamam de irmãos, mesmo tendo se conhecido depois dos 70 anos de idade.\n[…]\nFórmula 1\n[…]\n«Estatísticas de Juan Manuel Fangio» (em inglês)\n[…]\n«Números da carreira de Juan Manuel Fangio» (em inglês)\n[…]\n«Atletas do século - Juan Manuel Fangio» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Brabham BT46B",
      "descricao": "Carro de Fórmula 1 da Brabham, de 1978, projetado por Gordon Murray, conhecido como carro-ventilador."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que peça incomum, instalada na traseira, fazia o Brabham BT46B, de 1978, ficar grudado no chão?",
    "resposta": "Um grande ventilador",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brabham_BT46"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brabham_BT46",
        "situacao": "ok",
        "texto": "The Brabham BT46 is a Formula One racing car designed by Gordon Murray for the Brabham team, owned by Bernie Ecclestone, for the 1978 Formula One season. The car featured several radical design elements, one of which was the use of flat panel heat exchangers on the bodywork of the car to replace conventional water and oil radiators. It was removed before the car's race debut, never to be seen agai\n[…]\nThe BT46 debuted at the third race of the 1978 season, the South African Grand Prix on 4 March 1978, with the revised nose-mounted radiators. The cars were immediately competitive, although reliability was suspect. After the winning debut and subsequent withdrawal of the BT46B \"fan car\" at the Swedish Grand Prix, the Brabham team completed the season with the standard BT46s.\n[…]\nThere was uproar from rival teams, who saw the \"fan car\" as a threat to their competitiveness. Lotus immediately started design work on a fan version of the 79. Bernie Ecclestone, owner of the Brabham team, had also been secretary of the Formula One Constructors Association (FOCA) since 1972 and became its president during 1978.\n[…]\nAccording to Ecclestone's biographer Terry Lovell, the heads of the other FOCA teams, led by Colin Chapman threatened to withdraw their support for Ecclestone unless he withdrew the BT46B. Ecclestone negotiated a deal within FOCA whereby the car would have continued for another three races before Brabham would voluntarily withdraw it. However, the Commission Sportive Internationale intervened to declare that henceforth fan cars would not be allowed and the car never raced again in Formula One.\n[…]\n^1 This total includes points scored by the BT45C car Brabham used during the first two races. ^2 This total includes points scored by the BT48 & BT49 cars Brabham used for the rest of the season.\n[…]\nHenry, Alan (1985). Brabham. Richmond: Hazleton. ISBN 978-0-905138-36-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brabham_BT46",
        "situacao": "ok",
        "texto": "O  BT46  é o modelo da Brabham das temporadas de 1978 e 1979 da Fórmula 1. Condutores: Niki Lauda, John Watson e Nelson Piquet.\n[…]\nNo início de 1975, Bernie Ecclestone havia chegado a um acordo com a Alfa Romeo para o fornecimento de motores. Apesar de grandes, pesados e com alto consumo, eram também de elevada potência. Após 3 anos sem vitórias e de abandonos por falta de combustível, em 1978, Gordon Murray reformulou o BT46 com um projeto inovador.\n[…]\nEle reformulou o carro provendo-o de um sistema de refrigeração controvertido, utilizando um enorme ventilador na parte traseira do carro, acionado por uma caixa de engrenagens, para ar através de um radiador montado horizontalmente acima do motor. Sob a parte traseira do carro havia um conjunto de saias: quando o motor tinha seu giro aumentado, o efeito do ventilador era o de visivelmente sugar o carro para próximo do solo.\n[…]\nUma ofensiva de protestos foi apresentada contra o carro em sua primeira corrida. Todos foram rejeitados, e Niki Lauda venceu tranquilamente o GP da Suécia. Entretanto, como resultado de 'discussões', a 'Brabham com ventilador' BT46 jamais competiu novamente.\n[…]\n↑1  Lauda marcou 10 pontos no Brabham BT45C.\n[…]\n↑2  Lauda marcou 4 pontos e Piquet 3 num total de 7 pontos totais no Brabham BT48.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Brabham BT46B",
      "descricao": "Carro de Fórmula 1 da Brabham, de 1978, projetado por Gordon Murray, conhecido como carro-ventilador."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O polêmico Brabham BT46B venceu com Niki Lauda o Grande Prêmio da Suécia de 1978. Quantas corridas do Mundial ele disputou ao todo?",
    "resposta": "Uma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brabham_BT46"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brabham_BT46",
        "situacao": "ok",
        "texto": "The Brabham BT46 is a Formula One racing car designed by Gordon Murray for the Brabham team, owned by Bernie Ecclestone, for the 1978 Formula One season. The car featured several radical design elements, one of which was the use of flat panel heat exchangers on the bodywork of the car to replace conventional water and oil radiators. It was removed before the car's race debut, never to be seen agai\n[…]\nThe \"B\" variant of the car, also known as the \"fan car\", was introduced at the 1978 Swedish Grand Prix as a counter to the dominant ground effect Lotus 79. The BT46B generated an immense amount of downforce utilizing a fan, claimed to be for increased cooling, but which also extracted air from beneath the car. The car only raced once in this configuration in the Formula One World Championship—when Niki Lauda won the 1978 Swedish Grand Prix at Anderstorp.\n[…]\nThe cars were modified BT46s—chassis numbers BT46/4 and BT46/6. Modifications to implement the fan concept were quite extensive—involving sealing the engine bay as well as adding the clutch system and the fan. They were designed and tested in some secrecy. Brabham's lead driver, Niki Lauda, realised he had to adjust his driving style, mostly for cornering. He found that if he accelerated around corners, the car would \"stick\" to the road as if it were on rails.\n[…]\nThe two modified cars were prepared for the Swedish Grand Prix at Anderstorp on 17 June 1978, for Niki Lauda and John Watson. When not in use, the fan was covered by a dustbin lid, but it soon became clear what the modified Brabham was intended to achieve: when the drivers blipped the throttle, the car could be seen to squat down on its suspension as the downforce increased. Lotus driver Mario Andretti said: \"It is like a bloody great vacuum cleaner.\n[…]\nHenry, Alan (1985). Brabham. Richmond: Hazleton. ISBN 978-0-905138-36-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brabham_BT46",
        "situacao": "ok",
        "texto": "O  BT46  é o modelo da Brabham das temporadas de 1978 e 1979 da Fórmula 1. Condutores: Niki Lauda, John Watson e Nelson Piquet.\n[…]\nNo início de 1975, Bernie Ecclestone havia chegado a um acordo com a Alfa Romeo para o fornecimento de motores. Apesar de grandes, pesados e com alto consumo, eram também de elevada potência. Após 3 anos sem vitórias e de abandonos por falta de combustível, em 1978, Gordon Murray reformulou o BT46 com um projeto inovador.\n[…]\nEle reformulou o carro provendo-o de um sistema de refrigeração controvertido, utilizando um enorme ventilador na parte traseira do carro, acionado por uma caixa de engrenagens, para ar através de um radiador montado horizontalmente acima do motor. Sob a parte traseira do carro havia um conjunto de saias: quando o motor tinha seu giro aumentado, o efeito do ventilador era o de visivelmente sugar o carro para próximo do solo.\n[…]\nUma ofensiva de protestos foi apresentada contra o carro em sua primeira corrida. Todos foram rejeitados, e Niki Lauda venceu tranquilamente o GP da Suécia. Entretanto, como resultado de 'discussões', a 'Brabham com ventilador' BT46 jamais competiu novamente.\n[…]\n↑1  Lauda marcou 10 pontos no Brabham BT45C.\n[…]\n↑2  Lauda marcou 4 pontos e Piquet 3 num total de 7 pontos totais no Brabham BT48.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Equipe Fittipaldi",
      "descricao": "Equipe brasileira de Fórmula 1 criada pelos irmãos Wilson e Emerson Fittipaldi, que competiu de 1975 a 1982."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em oito temporadas na Fórmula 1, entre 1975 e 1982, quantas corridas a equipe brasileira dos irmãos Fittipaldi venceu?",
    "resposta": "Nenhuma",
    "distratores": [
      "Uma",
      "Duas",
      "Quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fittipaldi_Automotive"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fittipaldi_Automotive",
        "situacao": "ok",
        "texto": "Fittipaldi Automotive was a Formula One racing team and constructor that competed from 1975 to 1982. The cars were officially called Copersucar until the end of 1979 and Fittipaldi from the beginning of 1980 onwards. It was the only Formula One team to have been based in Brazil. The team was formed during 1974 by racing driver Wilson Fittipaldi and his younger brother, double world champion Emerso\n[…]\nAt the end of 1979 Copersucar decided to end their sponsorship. The team bought the remains of close neighbour Wolf Racing, becoming a two car operation for the first time. The team was renamed Skol Team Fittipaldi for the 1980 season to reflect new sponsorship from Skol Brasil (now an AmBev brand). Emerson and Wolf Racing driver Keke Rosberg raced the first part of the season with reworked Wolf chassis from the previous year.\n[…]\nRosberg reports that Emerson, who had not previously had a full-time teammate while at Fittipaldi Automotive, wanted another Brazilian driver but was persuaded by ex-Wolf employees Peter Warr and Harvey Postlethwaite to offer the number two drive to the Finn. Rosberg himself saw a full season in Formula One with Fittipaldi as a step \"towards victory\". He was competitive alongside Emerson during his first season, scoring a podium in his first race with the team, the 1980 Argentine Grand Prix.\n[…]\nOfficial Formula 1 Website. Archive: Results for 1972–1982 seasons www.formula1.com Archived 19 February 2015 at the Wayback Machine Retrieved 28 February 2006\n[…]\n\"A história da equipe Fittipaldi (também conhecida como Copersucar)\" (in Portuguese). Retrieved 7 March 2006.\n[…]\n\"The Official 2006 Season - Thoroughbred Grand Prix - World Championship Website\". Archived from the original on 23 February 2007. Retrieved 1 July 2006. -- A Fittipaldi Automotive F5A competes in the European Thoroughbred Grand Prix Championship. Brief details and pictures."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escuderia_Fittipaldi",
        "situacao": "ok",
        "texto": "Escuderia Fittipaldi, também conhecida como: Copersucar-Fittipaldi, Skol-Fittipaldi ou Fittipaldi Automotive, foi uma escuderia de Fórmula 1 brasileira fundada em 1975 pelos irmãos Emerson e Wilson Fittipaldi Jr. (não confundir com Wilson Fittipaldi, o \"Barão\", que chegou a cortar a ajuda financeira aos filhos para tentar desencorajá-los da ideia). Competiu num total de 104 grandes prêmios. Sua es\n[…]\nApós trinta anos de sua apresentação oficial em Brasília, em 16 de outubro de 1974, o modelo FD01, o Copersucar pilotado por Wilson Fittipaldi Jr. - primeiro carro brasileiro a disputar uma prova de Fórmula 1 - voltou em 10 de novembro de 2004 à pista do Autódromo de Interlagos, totalmente restaurado.\n[…]\nNo começo Wilson Fittipaldi Jr. queria fundar a primeira equipe sul-americana na Fórmula 1 e conseguiu após aproximadamente um ano de trabalho, tendo seu bólido projetado pelo brasileiro Ricardo Divila, o FD01. Em 1980 visando internacionalizar a equipe e após o fracasso do modelo F6/F6A, os Fittipaldi compram a Wolf, equipe que disputava o Campeonato de F1 e pertencia ao milionário canadense Walter Wolf.\n[…]\nAos que teimam em lembrar da Copersucar, depois Fittipaldi, como um capítulo risível da história da F-1, alguns números são esclarecedores.Na temporada de 1980, por exemplo, o time brasileiro terminou o campeonato em oitavo lugar com onze pontos, enquanto que a Ferrari ficou em decimo lugar com apenas oito pontos. Dois anos antes, a equipe ficou na frente de McLaren, Williams, Renault e Arrows no Mundial de Construtores.\n[…]\nNas oito temporadas que disputou, a Copersucar-Fittipaldi acumulou 44 pontos em 104 GPs. Foram três pódios, o mais comemorado deles em 1978, o segundo lugar de Emerson no Rio de Janeiro com o modelo F5A. Nenhuma vitória, mas dezenove presenças nos pontos, numa época em que apenas os seis primeiros pontuavam.\n[…]\nRecuperação dos carros da Equipe Fittipaldi",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Rali Dakar",
      "descricao": "Rali de longa distância criado em 1978, que nasceu ligando Paris a Dakar, no Senegal."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A edição de 2008 do Rali Dakar foi cancelada na véspera da largada, e a prova acabou mudando de continente. Qual foi o motivo do cancelamento?",
    "resposta": "Ameaças terroristas na Mauritânia",
    "fonte": [
      "https://en.wikipedia.org/wiki/2008_Dakar_Rally",
      "https://en.wikipedia.org/wiki/Dakar_Rally"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2008_Dakar_Rally",
        "situacao": "ok",
        "texto": "The 2008 Dakar Rally would have been the 30th running of the annual off-road race. The rally was to start in Lisbon, Portugal on 5 January 2008, running through Europe and Africa until the finish in Dakar, Senegal on 20 January. The event was cancelled one day before the intended start date, due to concerns over a possible terrorist attack aimed at the competitors.\n[…]\nThe rally was cancelled on 4 January 2008, due to safety concerns in Mauritania, following the killing of four French tourists there on Christmas Eve, December 2007. France-based Amaury Sport Organisation (ASO), in charge of the 6,000 km (3,730 mi) rally, said in a statement they had been advised by the French government to cancel the race. They said direct threats had also been made against the event by \"terrorist organizations\".\n[…]\nBefore the start of the race, rally director Étienne Lavigne had approved the Mauritanian legs only after two stages planned for Mali were scrapped. An Al-Qaeda affiliate organization was blamed for the cancellation.\n[…]\nOn 4 February 2008, the ASO organised the Central Europe Rally, with a Hungary to Romania route, to occupy the gap left by the cancellation of the event, as part of the new Dakar Series. The event only lasted one year. The Dakar Rally was relocated to South America from 2009 until 2019, and in 2020 the event moved to Saudi Arabia.\n[…]\nThe race would have begun in Lisbon, Portugal, and passed through Spain, Morocco, Western Sahara, Mauritania, and Senegal. The total race distance would have been 9,273 km (5,762 mi), of which 5,732 km (3,562 mi) was timed special stage. There would have been a rest day in Nouakchott on 13 January."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dakar_Rally",
        "situacao": "ok",
        "texto": "The Dakar Rally (French: Le Rallye Dakar) or simply \"The Dakar\" (Le Dakar), formerly known as the Paris–Dakar Rally (Le Rallye Paris-Dakar), is an annual rally organised by the Amaury Sport Organisation (ASO).\n[…]\nThe event began in 1978 as a rally from Paris, France, to Dakar, Senegal. Between 1992 and 2007 some editions did not start in Paris or did not arrive in Dakar, but the rally kept its name. Security threats in Mauritania led to the cancellation of the 2008 rally, and from 2009 to 2019 the rally was held in South America. Since 2020, the rally has been held in Saudi Arabia. The rally is open to amateurs and professionals, with professionals typically making up about eighty percent of participants.\n[…]\nThe 2008 event, due to start in Lisbon, was cancelled on 4 January 2008 amid fears of attacks in Mauritania following the 2007 killing of four French tourists. Chile and Argentina offered to host subsequent events, which were later accepted by the ASO for the 2009 event.\n[…]\nThe 2008 Dakar Rally was cancelled due to security concerns after al-Qaeda's murder of four French tourists on Christmas Eve in December 2007 in Mauritania (a country in which the rally spent eight days), various accusations against the rally calling it \"neo-colonialist\", and al-Qaeda's accusations against Mauritania calling it a supporter of \"crusaders, apostates and infidels\".\n[…]\nThe French-based Amaury Sport Organisation in charge of the 6,000-kilometre (3,700 mi) rally said in a statement that they had been advised by the French government to cancel the race, which had been due to begin on 5 January 2008 from Lisbon. They said direct threats had also been made against the event by al-Qaeda related organisations."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rali_Dakar_de_2008",
        "situacao": "ok",
        "texto": "O Rali Dakar de 2008 teria sido o dia 30ª edição do tradicional corrida anual off-road. O rali deveria iniciar em Lisboa, Portugal, em 5 de janeiro de 2008, atravessar a Europa e a África até a chegada em Dakar, Senegal, em 20 de janeiro. O evento foi cancelado um dia antes da data de início, devido a preocupações sobre um possível ataque terrorista que visava a competidores.\n[…]\nO rali foi cancelado em 4 de janeiro de 2008, devido a preocupações de segurança na Mauritânia, após a morte de turistas franceses lá na Véspera de Natal, em dezembro de 2007. A Amaury Sport Organisation (ASO), que se baseia na França, a cargo do rali 6 000 km (3 730 mi), disse em um comunicado que tinha sido avisada pelo governo francês para cancelar a corrida. Eles disseram que havia ameaças diretas feita contra o evento por \"organizações terroristas\".\n[…]\nAntes do início da prova, o diretor do rali, Etienne Lavigne, havia aprovado a Mauritânia, somente  duas etapas planejadas para o Mali haviam sido descartados. Uma célula filiada à Al-Qaeda foi considerada culpada pelo cancelamento.\n[…]\nEm 4 de fevereiro de 2008, o ASO organizou o Rali da Europa Central, com rota entre a Hungria e a Roménia. Esta corrida durou apenas um ano. Uma nova corrida, mantendo o Rally Dakar como nome, foi organizado na América do Sul em 2009 e tem continuado desde então.\n[…]\nTodas as inscrições foram deferidas para a Rali da Europa Central: 110 motos, 19 quadriláteros, 91 carros, e 40 caminhões estiveram presentes no início do Rali da Europa Central.\n[…]\nA corrida deveria ter começado em Lisboa, Portugal, e passado por Espanha, Marrocos, Saara Ocidental, Mauritânia e Senegal. O total da distância da corrida, teria sido 9 273 km (5 762 mi), dos quais 5 732 km (3 562 mi) cronometrados. Haveria também um dia de descanso em Nouakchott, em 13 de janeiro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Desastre de Le Mans de 1955",
      "descricao": "Acidente nas 24 Horas de Le Mans de 1955 em que um carro da Mercedes voou sobre o público, matando mais de oitenta pessoas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois da tragédia de Le Mans de 1955, que montadora alemã, dona do carro que voou sobre o público, abandonou as corridas no fim daquele ano?",
    "resposta": "Mercedes-Benz",
    "fonte": [
      "https://en.wikipedia.org/wiki/1955_Le_Mans_disaster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1955_Le_Mans_disaster",
        "situacao": "ok",
        "texto": "On 11 June 1955, a multi-vehicle collision occurred during the 1955 24 Hours of Le Mans in Sarthe, France, resulting in the deaths of an estimated 82 to 84 people. The disaster occurred at the Circuit de la Sarthe, when Mercedes driver Pierre Levegh collided with Austin-Healey driver Lance Macklin after a maneuvre by Jaguar Cars driver Mike Hawthorn. Levegh and his car were hurled into a spectator\n[…]\nThere was great anticipation for the 1955 24 Hours of Le Mans, as Ferrari, Jaguar, and Mercedes-Benz had all won the race previously and all three automakers had arrived with new and improved cars. The Ferraris, current champions at the time, were known to be fast but fragile and prone to mechanical failure. Jaguar concentrated their racing almost exclusively on Le Mans and had an experienced driver lineup including Formula 1 Ferrari driver Mike Hawthorn.\n[…]\nThe next round of the World Sportscar Championship at the Nürburgring was cancelled, as was the Carrera Panamericana. The rest of the 1955 World Sportscar Championship season was completed, with the remaining two races at the British RAC Tourist Trophy and the Italian Targa Florio, although they were not run until September and October, several months after the catastrophe. Mercedes-Benz won both of these events, and was able to secure the constructors championship for the season.\n[…]\nMercedes-Benz withdrew from motorsports until 1985, although the withdrawal had already been decided before the race and had not been caused by the accident. After returning to sports car racing in the mid-1980s, initially as an engine supplier, Mercedes went on to win the 1989 Le Mans race in partnership with Sauber Motorsport.\n[…]\nMercedes went on to compete in the championship during the 1990s as a works team before withdrawing for a second and final time in 1999, following a series of spectacular but non-fatal crashes of the Mercedes-Benz CLR."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Desastre_de_Le_Mans_em_1955",
        "situacao": "ok",
        "texto": "O desastre de Le Mans em 1955 foi um acidente durante a corrida automobilística 24 Horas de Le Mans, em 11 de junho de 1955. Os carros envolvidos no acidente atingiram vários espectadores, matando mais de 80 deles, além do piloto francês Pierre Levegh. Este acidente é considerado como o pior acidente da história do automobilismo.\n[…]\nQuando Mike Hawthorn se dirigia aos boxes com seu Jaguar, quase colide com o Austin-Healey de Lance Macklin, que para o evitar desviou para a esquerda sendo atingido pelo Mercedes do piloto francês Pierre Levegh, que vinha logo atrás.\n[…]\nOcorreu então, um grande estrondo, com o carro de Levegh passando por cima de Macklin, batendo na barreira e começando a pegar fogo. O francês morreu na hora e pedaços do carro dele voaram sobre o público. Entre as principais causas, foi constatado que várias partes do carro de Levegh eram feitas de magnésio, o que teria facilitado o incêndio. Entretanto, a direção de prova não interrompeu a prova, vencida por Hawthorn e Ivor Bueb.\n[…]\nA equipe Mercedes se retirou da corrida antes mesmo do término da mesma. No momento da retirada, os carros da Mercedes ocupavam a primeira e terceira posição.\n[…]\nA própria Mercedes retirou-se do automobilismo após o encerramento do Campeonato Mundial de Fórmula 1 de 1955, só retornando à modalidade em 1989, no Campeonato Mundial de Resistência daquele ano.\n[…]\n24 Horas de Le Mans de 1955\n[…]\nLe Mans Motor Racing Disaster (1955) no YouTube, British Pathé (em inglês)\n[…]\n«GPTotal – Le Mans 1955 – O pior dos erros I»\n[…]\n«GPTotal – Le Mans 1955 – O pior dos erros II»\n[…]\n«BBC – 1955: Le Mans disaster claims 77 lives» (em inglês)\n[…]\n«1955 Le Mans Disaster» (em inglês)\n[…]\n«La tragédie de 1955» (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Stock Car Pro Series",
      "descricao": "Principal categoria de turismo do automobilismo brasileiro, criada em 1979."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1979, a Stock Car brasileira estreou com todos os pilotos usando carros de qual modelo da Chevrolet?",
    "resposta": "Opala",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stock_Car_Pro_Series",
      "https://pt.wikipedia.org/wiki/Stock_Car_Pro_Series"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stock_Car_Pro_Series",
        "situacao": "ok",
        "texto": "The Bradesco Stock Car Pro Series, formerly known as Stock Car Brasil, is a touring car auto racing series based in Brazil organized by Vicar. It is considered the major Brazilian and South American motorsports series. Starting in 1979 with Chevrolet as the only constructor, the series has also seen other constructors joining in and leaving such as Peugeot and Volkswagen, currently the three manuf\n[…]\nThe series was created in 1979 as an alternative to the former Division 1 championship that competed with Chevrolet Opala and Ford Maverick. The dominance of Chevrolet over Ford models was causing a lack of public interest and sponsors. General Motors then created a new category, with a name reminiscent of the famous NASCAR with standardized performance and components for all competitors.\n[…]\nThe first major change in the Stock Car standard occurred in 1987. With the support of General Motors, a fairing designed and built by coachbuilder Caio was adopted, which was adapted to the Opala's chassis. The car exhibited improved aerodynamics and performance. Safety equipment become more sophisticated.\n[…]\nIn 1991 new rules were established and the races were disputed in double rounds on the weekends, with two drivers per car, but the series continued to lose ground with the public, sponsors and television networks to other championships with many manufacturers involved, such as Campeonato Brasileiro de Marcas e Pilotos that included the involvement of Chevrolet, Fiat, Ford and Volkswagen, as well as the always popular Formula racing championships.\n[…]\nIn 2003 the category replaced the Chevrolet 6-cylinder engine used with modifications since 1979 with a Chevrolet V8 imported from the United States by JL Racing, similar to the engines used by the NASCAR Busch Series. Despite not managing the series anymore, General Motors still participated in the series with the Vectra.\n[…]\nStock Series"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stock_Car_Pro_Series",
        "situacao": "ok",
        "texto": "A Stock Car Pro Series, anteriormente conhecida como Stock Car Brasil, é uma modalidade de automobilismo criada em 1979, no Brasil.\n[…]\nFoi criada em 1977 para ser uma alternativa à extinta Divisão 1 (D1), que corria com as marcas Chevrolet (Opala) e Ford (Maverick). Isso ocorreu pelo desinteresse do público e dos patrocinadores por se tornar uma categoria monomarca, dada a superioridade dos modelos Chevrolet. Para que isso não ocorresse, a General Motors criou uma nova categoria, que unia desempenho e sofisticação. O nome emulou a famosa categoria americana, a NASCAR, desviava a atenção da marca única.\n[…]\nA primeira prova ocorreu em 22 de abril de 1979, no Autódromo de Tarumã, no Rio Grande do Sul. O regulamento foi criado para limitar os custos, procurando equilíbrio, sem comprometer as performances das competições internacionais. A primeira edição contou com a presença de dezenove carros, todos do modelo Opala com motores de seis cilindros de 4 100cm3. A pole position da estreia foi do carioca José Carlos Palhares, o \"Capeta\", com o tempo de 1m23s. A prova foi vencida por Affonso Giaffone.\n[…]\nA Stock Car Pro Series é a principal categoria da Stock Car, presente desde a sua fundação em 1979. Os carros contam atualmente com motores de 500cv. Desde 2018 a categoria de acesso é a Stock Light.\n[…]\nAbaixo os recordes de velocidade máxima obtidos com carros da Stock Car Brasil, fora dos circuitos de corrida.\n[…]\nEm 2021 o simulador IRacing anunciou que incluiria carros da Stock Car Pro Series para 2022.\n[…]\nCampeonato Mundial de Carros de Turismo\n[…]\nStock Light\n[…]\nCampeonato Brasileiro de Marcas e Pilotos\n[…]\nCorrida de carros de turismo"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Marmon Wasp",
      "descricao": "Carro da Marmon pilotado por Ray Harroun na vitória da primeira edição das 500 Milhas de Indianápolis, em 1911."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na primeira Indy 500, em 1911, o vencedor Ray Harroun correu sem mecânico ao lado e usou qual acessório para ver os rivais atrás dele?",
    "resposta": "Espelho retrovisor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marmon_Wasp",
      "https://en.wikipedia.org/wiki/Ray_Harroun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marmon_Wasp",
        "situacao": "ok",
        "texto": "Marmon Motor Car Company was an American luxury automobile manufacturer founded by Howard Carpenter Marmon and owned by Nordyke Marmon & Company of Indianapolis, Indiana, U.S., and active from 1902 to 1933.\n[…]\nThe Model 32 of 1909 spawned the Wasp. It was driven by Marmon engineer and former racer Ray Harroun (who came out of retirement as a driver for just one race) to the championship of the first ever Indianapolis 500 motor race, in 1911. This car debuted the first known automobile rear-view mirror.\n[…]\nModel 41\n[…]\nThe 1916 Model 34 used an aluminum straight-six, and used aluminum in the body and chassis to reduce overall weight to just 3295 lb (1495 kg). The displacement of the six-cylinder engine is 5565 cc with a bore of 95.25 mm and a stroke of 130.175 mm. A Model 34 was driven coast to coast as a publicity stunt, beating Erwin \"Cannonball\" Baker's record to much fanfare. By the year 1920, over 11,000 Marmon 34 had already been produced. The wheelbase was 136 inches = 3454 mm.\n[…]\nNew models were introduced for 1924, replacing the long-lived Model 34, but the company was facing financial trouble, and in 1926 was reorganized as the Marmon Motor Car Co.\n[…]\nFor the 1993 Indianapolis 500, to commemorate the 40th anniversary of The Marmon Group of companies, Éric Bachelart drove a tribute to the Marmon Wasp, actually a year old Lola with Buick power, which was uncompetitive and failed to qualify. After qualifications ended, the sponsorship was transferred to the car of John Andretti, who was driving for A. J. Foyt Enterprises. Andretti started 23rd and briefly led before eventually finishing tenth.\n[…]\nAustralian Max Marmon trucks\n[…]\nMarmon Wasp 1911 page\n[…]\nMarmon Wasp 1993 page\n[…]\nMarmon-Herrington History page"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ray_Harroun",
        "situacao": "ok",
        "texto": "Ray Wade Harroun (January 12, 1879 – January 19, 1968) was an American racing driver and pioneering race car constructor. He is most famous for winning the inaugural Indianapolis 500 in 1911.\n[…]\nNicknamed the \"Little Professor\" for his pioneering work of creating, with Howard Marmon, the Marmon Wasp, which was a revolutionary design being the first open-wheel single-seater racecar. Harroun is best known for winning the first running of the Indianapolis 500 Mile Race on May 30, 1911.\n[…]\nHarroun's race wins included: a 1910 100-mile race at the Atlanta Motordrome; the 1910 200-mile Wheeler-Schebler Trophy Race (at the Indianapolis Motor Speedway); the May 1910, 50-mile Remy Grand Brassard Race (also at IMS); three races at Churchill Downs (home of the Kentucky Derby); three races at the original Latonia Race Track; and races at tracks in New Orleans, Los Angeles, Long Island and Memphis. He is best known for winning the first Indianapolis 500, driving a Marmon.\n[…]\nAt the inaugural Indianapolis 500 in 1911, Harroun's use of what would now be called a rear-view mirror, rather than the riding mechanic specified in the rules, created controversy, but was ultimately allowed. Harroun went on to win at an average speed of 74.602 miles per hour (120.060 km/h). Harroun, who came out of retirement to race in the first 500, would not race after 1911.\n[…]\nHarroun's historic Firestone-shod yellow #32 Marmon \"Wasp,\" in which he won the Indianapolis 500, is on display at the Indianapolis Motor Speedway Hall of Fame Museum.\n[…]\nAfter retiring from racing, Harroun continued engineering work for Marmon, and later for the Maxwell racing team.\n[…]\nRay Harroun at Find a Grave"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Bernie Ecclestone",
      "descricao": "Empresário britânico que comandou o negócio da Fórmula 1 por cerca de quarenta anos e foi dono da equipe Brabham."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Antes de mandar na Fórmula 1, Bernie Ecclestone foi empresário de qual piloto austríaco, campeão mundial depois de morto, em 1970?",
    "resposta": "Jochen Rindt",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bernie_Ecclestone",
      "https://en.wikipedia.org/wiki/Jochen_Rindt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bernie_Ecclestone",
        "situacao": "ok",
        "texto": "Bernard Charles Ecclestone (born 28 October 1930) is a British business magnate, motorsport executive and former racing driver. Widely known in journalism as the \"F1 Supremo\", Ecclestone founded the Formula One Group in 1987, controlling the commercial rights to Formula One until 2017.\n[…]\nHe then became a driver manager for Stuart Lewis-Evans and Jochen Rindt, the latter winning the World Drivers' Championship posthumously in 1970. Ecclestone purchased Brabham in 1972—which he operated for 15 years—leading the team to 22 victories, as well as two World Drivers' Championship titles with Nelson Piquet. He co-founded the Formula One Constructors' Association two years later, leading them through the FISA–FOCA war.\n[…]\nEcclestone's friendship with Salvadori led to his becoming manager of driver Jochen Rindt and a partial owner of Rindt's 1970 Lotus Formula 2 team, whose other driver was Graham Hill. Rindt, on his way to the 1970 World Championship, died in a crash at the Monza circuit, though he still won the championship posthumously.\n[…]\nIt was announced on 18 August 2011 that Ecclestone and Briatore had sold their entire shareholding in the club to Tony Fernandes, known for his ownership of the Caterham Formula 1 team.\n[…]\nIn response, Hamilton has countered Ecclestone, criticising him on Instagram for being \"ignorant and uneducated\", and that he has realised why nothing much has been done to address diversity and racism. Formula One Group also issued a statement, saying that they \"completely disagree with Bernie Ecclestone's comments that have no place in Formula 1 or society\", and had added that his title as a chairman emeritus had since expired in January 2020.\n[…]\nAustria\n[…]\nBernie Ecclestone, the man behind Formula One BBC News, 12 November 1997\n[…]\nBernie Ecclestone at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jochen_Rindt",
        "situacao": "ok",
        "texto": "Karl Jochen Rindt (German: [ˈjɔxn̩ ˈʁɪnt]; 18 April 1942 – 5 September 1970) was a racing driver who competed under the Austrian flag in Formula One from 1964 to 1970. Rindt won the Formula One World Drivers' Championship in 1970 with Lotus, and remains the only driver to have won the World Drivers' Championship posthumously, following his death at the Italian Grand Prix; he won six Grands Prix ac\n[…]\nJochen Rindt was born on 18 April 1942 in Mainz, Germany, to an Austrian mother and German father. His mother had been a successful tennis player in her youth and, like her father, studied law. Rindt's parents owned a spice mill in Mainz, which he later inherited. They were killed in a bombing raid in Hamburg during the Second World War when he was 15 months old, after which he was raised by his maternal grandparents in Graz, Austria.\n[…]\nRindt was commemorated in many ways. The early season BARC 200 Formula Two race was renamed the Jochen Rindt Memorial Trophy for as long as the series existed. In 2000, on the 30th anniversary of his death, the city of Graz unveiled a bronze plaque in remembrance of Rindt, with wife Nina and daughter Natasha present. The penultimate corner at the Red Bull Ring in Austria is named after Rindt.\n[…]\nThe Historic Sports Car Club in the United Kingdom hosts a historic Formula 2 championship, whose pre-1972 category is called the \"Class A Jochen Rindt Trophy\".\n[…]\nRindt's success popularised motorsport in Austria. Helmut Zwickl called him \"the driving instructor of the nation\". In 1965, Rindt put together the first exhibition of racing cars in Austria, the Jochen-Rindt-Show in Vienna. It was an immediate success, with 30,000 visitors on the first weekend alone. Using his connections, he brought in his friend Joakim Bonnier and former Mercedes Grand Prix manager Alfred Neubauer as opening speakers, with other drivers such as Jackie Stewart attending."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bernie_Ecclestone",
        "situacao": "ok",
        "texto": "Bernard Charles \"Bernie\" Ecclestone (Suffolk, 28 de outubro de 1930) é um empresário, dirigente esportivo e ex-piloto britânico. Foi presidente e CEO da Formula One Management (FOM) e da Formula One Administration (FOA).\n[…]\nNos anos 1970 e 1980, foi proprietário da Brabham Racing Organization e assim fundou a Formula One Constructor´s Association (FOCA) aumentando sua influência política na categoria. O bom desempenho da Brabham nas pistas, sobretudo com o brasileiro Nelson Piquet (campeão em 1981 e 1983), ajudou a consolidar seu prestígio como gestor do esporte. Bernie Ecclestone venderia a sua parte na equipe em 1987.\n[…]\nA amizade com Salvadori fez de Ecclestone o empresário de Jochen Rindt e co-proprietário da equipe dois da Lotus (cujo outro piloto era Graham Hill). Rindt morreu num acidente em Monza, embora sua pontuação tenha lhe garantido o título póstumo de campeão mundial.\n[…]\nMesmo após uma tripla intervenção coronariana em 1999, Ecclestone manteve o vigor na defesa de seus interesses comerciais, tanto que mesmo reduzindo sua participação na SLEC Holdings (conglomerado responsável pela gestão da Fórmula 1) para apenas 25% manteve o controle integral das empresas e da categoria. Também em 1999 Terry Lovell publicou uma biografia intitulada  Bernie's Game: Inside the Formula One World of Bernie Ecclestone (ISBN 1-84358-086-1).\n[…]\nNo dia 23 de janeiro de 2017, a Liberty Media, atual controladora dos diretor comerciais da Fórmula 1, anunciou a demissão de Bernie. Em seu lugar, foram anunciados Ross Brawn como o chefão esportivo e Sean Bratches, como o responsável pela área comercial, assim dividindo em duas responsabilidades o que Bernie Ecclestone comandava exclusivamente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Toleman",
      "descricao": "Equipe britânica de Fórmula 1 que competiu de 1981 a 1985, pela qual Ayrton Senna estreou em 1984."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A Toleman, equipe pela qual Senna estreou na Fórmula 1 em 1984, foi comprada no ano seguinte por qual grife italiana de roupas?",
    "resposta": "Benetton",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toleman",
      "https://en.wikipedia.org/wiki/Benetton_Formula"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toleman",
        "situacao": "ok",
        "texto": "Toleman Motorsport was a Formula One constructor based in the United Kingdom. It participated in Formula One between 1981 and 1985, competing in 70 Grands Prix. Today, it is best known for giving Ayrton Senna his Formula One debut.\n[…]\nThe team was generally uncompetitive during its short lifetime, prompting Senna to leave after just one year. However, several of its engineers, including Rory Byrne and Pat Symonds, stayed with the team after its sale to the Benetton Group and eventually built the organisation into the title-winning Benetton Formula. As such, Toleman is the progenitor of the racing lineage informally known as \"Team Enstone\".\n[…]\nFollowing Senna's departure, the Toleman team sought to maintain its momentum by retaining Johansson and signing John Watson for the 1985 season. In addition, that year's TG185 was the first carbon monocoque to be fabricated in-house at the Witney factory.\n[…]\nToleman returned in round 4 at Monaco, after Italian fashion label United Colors of Benetton bought the team in mid-season and acquired a Pirelli supply contract from the defunct Spirit team. Benetton kept the Toleman name until season's-end. The team initially lacked the funds to run multiple cars, so Teo Fabi was Toleman's sole driver for the first six races. Piercarlo Ghinzani joined Fabi for the final seven races.\n[…]\nWhen Ted Toleman sold the team to Benetton, the Italians promised to keep the staff together. Rory Byrne and Pat Symonds, in particular, remained with the newly rebranded Benetton Formula, which proceeded to hire a new crop of talent, including Flavio Briatore and Ross Brawn. Led by Michael Schumacher, the Benetton team won two Drivers' Championships and one Constructors' Championship in the 1990s."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Benetton_Formula",
        "situacao": "ok",
        "texto": "Benetton Formula Limited., commonly referred to simply as Benetton, was a Formula One constructor that participated from 1986 to 2001. The team was owned by the Benetton family who run a worldwide chain of clothing stores. In 2000, the team was purchased by Renault, but competed as Benetton for the 2000 and 2001 seasons. In 2002, the team became Renault. The Benetton Formula team was chaired by Al\n[…]\nThe Benetton Group entered Formula One as a sponsor company for constructor Tyrrell in 1983, then Alfa Romeo in 1984 and 1985 and finally Toleman in 1985. Toleman had struggled in 1985, missing the first three races of the season and being forced to only enter one car for the following six races, as a result of a dispute with tyre suppliers.\n[…]\nTragedy would befall the team late into the season after Nannini lost his right forearm in a helicopter crash. His arm was re-attached but the injuries ended his Formula One career. EuroBrun driver Roberto Moreno had become available after the backmarker team pulled out of the sport, and so he was hired as Nannini's replacement. The next race in Japan marked Benetton's first ever 1–2 finish, as well as Moreno's first and only career podium.\n[…]\nBenetton ended the season 3rd in the championship with 71 points.\n[…]\nBenetton Team had a British licence from 1986 to 1995 and an Italian licence from 1996 to 2001, thus becoming only the second constructor (after Shadow in 1976) to officially change its nationality. The Benetton family wanted this change of nationality to have their Formula One team flying the flag of their own country. At the 1997 German Grand Prix Benetton became the only constructor to have won races under more than one nationality.\n[…]\nBenetton family\n[…]\nBenetton Group\n[…]\nBenetton Rugby\n[…]\nBenetton Basket\n[…]\nBruno, Matteo (Director) (2025). Benetton Formula (Video) (in Italian and English). Slim Dogs.\n[…]\nUnited Colors of Benetton\n[…]\nBenetton Formula - At IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toleman",
        "situacao": "ok",
        "texto": "A Toleman Motorsport foi uma equipe de Fórmula 1 sediada no Reino Unido. Participou desta categoria entre 1981 e 1985, competindo em 70 Grandes Prêmios. Hoje, é mais conhecida por ter dado a Ayrton Senna sua estreia na Fórmula 1, que ocorreu em 1984. Na temporada de 1985, a equipe foi comprada pelo grupo italiano Benetton e passou a utilizar este nome até ser adquirida pela Renault e, renomeada em\n[…]\nEm 2010 a equipe foi adquirida pelo Grupo de investimentos Genii Capital, que manteve o nome Renault no time até o final de 2011. Durante o ano de 2011 o Grupo Lotus adquiriu parte da equipe e sendo assim, em 2012, a equipe passou a se chamar Lotus F1 Team.\n[…]\nFoi fundada por Ted Toleman, e pela equipe passou o projetista Rory Byrne.\n[…]\nTodos os chassis utilizados pela Toleman usava versão do motor Hart 415T 1.5 litros turbo comprimido de 4 cilindros.\n[…]\n↑1  Foi atribuído metade dos pontos, porque o número de voltas não alcançou 75% de sua realização.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Nigel Mansell",
      "descricao": "Piloto inglês, campeão mundial de Fórmula 1 em 1992 pela Williams."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Além de terem sido campeões mundiais de Fórmula 1, que outro título Emerson Fittipaldi e Nigel Mansell têm em comum?",
    "resposta": "Campeões da Fórmula Indy",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nigel_Mansell",
      "https://en.wikipedia.org/wiki/Emerson_Fittipaldi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nigel_Mansell",
        "situacao": "ok",
        "texto": "Nigel Ernest James Mansell (; born 8 August 1953) is a British former racing driver who competed in Formula One from 1980 to 1995. Mansell won the Formula One World Drivers' Championship in 1992 with Williams, and won 31 Grands Prix across 15 seasons. In American open-wheel racing, Mansell won the IndyCar World Series in 1993 with Newman/Haas Racing, and remains the only driver to have simultaneou\n[…]\nDriving a 79, the seat eventually went to Italian driver Elio de Angelis, but Mansell was selected to become a test driver for the Norfolk-based Formula One team.\n[…]\nDuring practice for the 1985 French Grand Prix, Mansell unwillingly broke the record for the highest speed crash in Formula One history. At the end of the Paul Ricard Circuit's 1.8 km long Mistral Straight, he went off at the fast Courbe de Signes at over 322 km/h (200 mph) in his Williams FW10. Mansell suffered a concussion, which kept him out of the race. Teammate Rosberg claimed the pole for the race and finished second behind the Brabham-BMW of Nelson Piquet.\n[…]\n1992 - Formula One World Champion\n[…]\nOn 16 July 2005, Mansell took part in a Race of Legends exhibition event at the Norisring round of the DTM. He competed against other Formula One World Champions Jody Scheckter, Alain Prost and Emerson Fittipaldi, as well as Motorcycle Grand Prix World Champions Mick Doohan and Johnny Cecotto (himself a former F1 driver), each driver having an opportunity to drive Audi, Mercedes and Opel cars. Prost was announced as the winner by the DTM organisers.\n[…]\nAfter his departure to CART in 1993 to drive for Newman/Haas, he again ran the red number 5 after Newman/Haas made a deal to acquire it from Penske (it had been Emerson Fittipaldi's race number since 1991). In addition, \"Red Five\" fitted well into the livery of his Indy car, as Newman/Haas' main sponsors Texaco and Kmart both shared corporate colors of black, white and red."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Emerson_Fittipaldi",
        "situacao": "ok",
        "texto": "Emerson Fittipaldi (Brazilian Portuguese: [ˈɛmeʁsõ fitʃiˈpawdʒi]; born 12 December 1946) is a Brazilian former racing driver and motorsport executive, who competed in Formula One from 1970 to 1980. Fittipaldi won two Formula One World Drivers' Championship titles,  in 1972 and 1974 with Lotus and McLaren, respectively; he won 14 Grands Prix across 11 seasons.\n[…]\nFollowing his Formula One career, Fittipaldi moved to the American CART series, achieving numerous successes, including the 1989 CART title and two wins at the Indianapolis 500 in 1989 and 1993. Since his retirement from Indy Car racing in 1996, Fittipaldi races only occasionally. In 2008, he became one of only three people in history to have a Corvette production car named in his honor. At age 67, he entered the 2014 6 Hours of São Paulo.\n[…]\nRoger Penske hired Fittipaldi for his racing team in 1990 and he continued to be among the top drivers in CART, winning at least one race with Penske for six straight years. But for bad luck he might have won three consecutive Indianapolis 500s, suffering blistered tires in 1990 and a gearbox failure in 1991, both while leading. In 1993 he added a second Indianapolis 500 victory by taking the lead from reigning Formula One World Champion Nigel Mansell on lap 185 and holding it for the remainder.\n[…]\nHis daughter Juliana had two sons: Pietro and Enzo. Pietro and Enzo are also racing drivers, with Enzo being announced as a member of the Red Bull Junior Team in November 2022. Pietro made his Formula 1 debut at the 2020 Sakhir Grand Prix driving for the Haas F1 Team. For 2024, he was signed to run a full IndyCar schedule with Rahal Letterman Lanigan Racing.\n[…]\nAyrton Senna and Nelson Piquet  Formula One world champions from Brazil\n[…]\nMario Andretti, Nigel Mansell, and Jacques Villeneuve – Formula One and CART champions\n[…]\nEmerson Fittipaldi at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nigel_Mansell",
        "situacao": "ok",
        "texto": "Nigel Ernest James Mansell, o Leão, CBE (Upton-upon-Severn, 8 de agosto de 1953) é um ex-piloto de automobilismo, tendo sido campeão mundial na Fórmula 1 em 1992 e na Fórmula Indy em 1993.\n[…]\nApós a conquista em 1992, sagrou-se campeão na Fórmula Indy no ano de 1993, e primeiro piloto a conquistar o título em sua estreia na categoria. Com isso, Mansel passou a integrar o seleto grupo de quatro pilotos que encerraram suas carreiras sendo campeões da Formula Indy e da Formula 1.\n[…]\nNo campeonato de 1986, a Williams contrata o brasileiro Nelson Piquet para o lugar de Rosberg, que se transferiu para a McLaren. Durante o ano, Mansell e Piquet disputaram bastante, dando início a uma das grandes rivalidades da Fórmula 1 moderna, sendo que naquela época a Williams tinha os melhores carros, o chassi FW11, equipado pelo potente motor Honda Turbo.\n[…]\nNa prova, tudo ia dando certo para o inglês, até que na volta 63, o pneu traseiro esquerdo de seu carro estoura danificando a suspensão, fazendo com que Mansell abandonasse a prova. Nesse momento só restava torcer para que um de seus concorrentes não vencesse, mas Prost conseguiu e tornando-se bicampeão, numa das maiores zebras da Fórmula 1. Ao \"Leão\", restou se contentar com o vice-campeonato mundial.\n[…]\nMansell dominou a temporada literalmente, fazendo 9 vitórias, 14 poles e 8 voltas mais rápidas, ganhando o primeiro, e único, campeonato com o 2º lugar na Hungria - faltando cinco corridas para o término do campeonato - e com 52 pontos de diferença para o vice-campeão, e companheiro de equipe, Riccardo Patrese. Aos 39 anos e com o título conquistado, Mansell anuncia sua aposentadoria da Fórmula 1 (que acabou sendo provisória).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Jack Brabham",
      "descricao": "Piloto australiano tricampeão mundial de Fórmula 1, em 1959, 1960 e 1966, cofundador da equipe Brabham."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que piloto australiano foi campeão mundial de Fórmula 1 em 1966 pilotando um carro da equipe que ele mesmo tinha fundado?",
    "resposta": "Jack Brabham",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jack_Brabham"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jack_Brabham",
        "situacao": "ok",
        "texto": "Sir John Arthur Brabham (2 April 1926 – 19 May 2014) was an Australian racing driver and motorsport executive, who competed in Formula One from 1955 to 1970. Brabham won three Formula One World Drivers' Championship titles, in 1959, 1960 and 1966, and 14 Grands Prix across 16 seasons. He co-founded Brabham in 1960, leading the team to two World Constructors' Championship titles, and remains the on\n[…]\nThe combination of the Repco-Brabham V8 engine, designed by Phil Irving, and the Brabham BT19 chassis designed by Tauranac worked. At the French Grand Prix at Reims-Gueux, Jack Brabham took his first Formula One world championship win since 1960 and became the first man to win such a race in a car of his own construction. Only his two former teammates, Bruce McLaren and Dan Gurney, have since matched this achievement. It was the first in a run of four straight wins for the Australian veteran.\n[…]\nin 1971 with John Judd, who had worked for Brabham on the Repco engine project in the mid-1960s. The company builds engines for racing applications. Brabham was also a shareholder in Jack Brabham Engines Pty Ltd., an Australian company marketing Jack Brabham memorabilia.\n[…]\nDespite his three titles, and although John Cooper considered him \"the greatest\", Formula One journalist Adam Cooper wrote in 1999 that Brabham is never listed among the Top 10 of all time, noting that \"Stirling Moss and Jim Clark dominated the headlines when Jack was racing, and they still do\". Brabham was the first post-war racing driver to be knighted when he received the honour in 1978 for services to motorsport.\n[…]\nAustralian of the Year (1966)\n[…]\nJack Brabham at IMDb\n[…]\nJack Brabham career summary at DriverDB.com\n[…]\nJack Brabham driver statistics at Racing-Reference\n[…]\nPortraits of Jack Brabham at the National Portrait Gallery, London\n[…]\nJack Brabham statistics\n[…]\nInteractive Jack Brabham Statistics – compare Jack with other F1 drivers"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jack_Brabham",
        "situacao": "ok",
        "texto": "John Arthur Brabham, conhecido como Jack Brabham (Hurstville, 2 de abril de 1926 — Gold Coast, 19 de maio de 2014), foi um automobilista australiano que venceu os campeonatos de Fórmula 1 em 1959, 1960 e 1966.\n[…]\nEm 1955, estreou no Grande Prêmio da Grã-Bretanha pilotando um Cooper. No campeonato de 1959, Brabham venceu o campeonato. Um fato curioso é que para ser campeão, ele teve de empurrar seu carro na reta final do GP dos Estados Unidos. Brabham liderava a última prova da temporada quando, a pouco mais de 300 metros da bandeira quadriculada, a gasolina acabou. Não vendo outra alternativa, ele saltou do cockpit e arrastou seu Cooper para um honroso quarto lugar.\n[…]\nBrabham levou o Cooper campeão de Fórmula 1 para o Indianapolis Motor Speedway para testes logo após a temporada de 1960 e competiu nas 500 Milhas de Indianápolis com uma versão modificada de um carro de Fórmula 1 em 1961. O carrinho engraçado da Europa foi ridicularizado pelas outras equipes, mas chegou a estar em terceiro e terminou a corrida em 9º lugar.\n[…]\nEm 1961, o piloto fundou a sua equipe Brabham com Ron Tauranac. Pouco antes, havia sido colocada uma limitação de 1500 cilindradas nos motores da Fórmula 1, o que não foi bom para Brabham, que não venceu nenhuma corrida com o novo carro no campeonato de 1962. A primeira vitória da equipe veio no Grande Prêmio da França de 1964 com Dan Gurney. 1966, a regra mudou para 3000 cilindradas e Brabham com um Brabham-Repco venceu o campeonato pela terceira vez e a primeira ostentando como dono de equipe.\n[…]\nJack Brabham tornou-se membro do International Motorsports Hall of Fame em 1990.\n[…]\n↑1  Nos descartes\n[…]\n↑3  carro de Fórmula 2\n[…]\nBrabham: 7\n[…]\nGrand Prix History - Hall of Fame, Jack Brabham",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Bandeira azul",
      "descricao": "Bandeira de sinalização do automobilismo mostrada a um piloto que está para ser alcançado por um carro mais rápido."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Durante uma corrida de Fórmula 1, quando um piloto recebe a bandeira azul, o que ele deve fazer?",
    "resposta": "Deixar passar um carro mais rápido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Racing_flags"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Racing_flags",
        "situacao": "ok",
        "texto": "Racing flags are traditionally used in auto racing and similar motorsports to indicate track conditions and to communicate important messages to drivers. Typically, the starter, sometimes the grand marshal of a race, waves the flags atop a flag stand near the start-finish line. Track marshals are also stationed at observation posts along the race track in order to communicate both local and course\n[…]\nAs such, it is often referred to as the \"courtesy flag\". In other series, drivers get severely penalized for not yielding or for interfering with the leaders, including getting sent to the pits for the rest of the race. In Formula One, if the driver about to be lapped ignores three waved blue flags in a row, he is required to serve a drive-through penalty. The blue flag may also be used to warn a driver that another car on the same lap is going to attempt to overtake them.\n[…]\nThe steady blue flag is displayed when a faster car is approaching, the blue flag is waved when the faster car is about to overtake.\n[…]\nIn Formula One, blue lights or flags may be shown at the end of pit lanes to warn of approaching cars on the track.\n[…]\nA dark, rather than light blue flag, indicating that a faster motorcycle is approaching.\n[…]\nModern F1 cars and other high-end formula racing cars have information displays on their steering wheels which can flash up the word flag to warn drivers when they are entering a sector with a local yellow.\n[…]\nMost new circuits and older ones used for F1 employ trackside flashing lights at regular intervals, as a clearer way to signal yellow, green, red, blue or SC flag status to drivers than relying on them to spot a marshal waving a flag, especially so on modern circuits where there are large run-off areas which put the marshals well away from the actual track.\n[…]\nFlags used in Formula 1 racing Archived 2016-09-08 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeiras_de_corrida",
        "situacao": "ok",
        "texto": "Bandeiras de corrida são tradicionalmente usadas em corridas de automóveis e desportos motorizados semelhantes para indicar as condições da pista e comunicar mensagens importantes aos pilotos. Normalmente, o responsável pela partida, agita as bandeiras no topo de um suporte próximo à linha de meta. Os comissários de pista também ficam posicionados em postos de observação ao longo da pista de corri\n[…]\nSe o piloto ainda não conseguir manter a velocidade mínima em relação aos líderes após as reparações, o piloto poderá ser obrigado a parar durante o resto da corrida. Por exemplo, a NASCAR exige que um piloto faça 115% ou menos do tempo de volta mais rápido de qualquer piloto no treino final.\n[…]\nAlgumas séries usam uma bandeira preta com uma cruz branca. Isso é exibido com o número de carro se um piloto ignora as outras bandeiras pretas por um longo período e também indica que aquele carro não está mais sendo pontuado. Na NASCAR, o carro não recebe pontuação novamente até que ele respeite a bandeira preta, parando nos boxes quando esta bandeira é exibida. Entretanto, na IndyCar, eles não são mais pontuados indefinidamente (desclassificados).\n[…]\nUma bandeira azul clara, às vezes com uma faixa diagonal amarela, laranja ou vermelha, informa o piloto que um carro mais rápido está se aproximando e que o piloto deve se afastar para permitir que um ou mais carros mais rápidos passem. Durante uma corrida, isso normalmente só seria mostrado ao piloto que está sendo ultrapassado, mas durante os treinos ou sessões de qualificação, poderia ser mostrado a qualquer piloto.\n[…]\nA bandeira azul fixa é exibida quando um carro mais rápido se aproxima, a bandeira azul é acenada quando o carro mais rápido está prestes a ultrapassar.\n[…]\nUma bandeira azul escura, em vez de azul claro, indicando que uma moto mais rápida está se aproximando.\n[…]\nBandeiras usadas em corridas de Fórmula 1",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Largada estilo Le Mans",
      "descricao": "Antigo tipo de largada, usado nas 24 Horas de Le Mans até 1969, em que os carros ficavam parados de um lado da pista e os pilotos do outro."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na antiga largada estilo Le Mans, usada até o fim dos anos sessenta, o que os pilotos faziam quando era dado o sinal?",
    "resposta": "Atravessavam a pista correndo até os carros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Le_Mans_start"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Le_Mans_start",
        "situacao": "ok",
        "texto": "A standing start is a type of start in auto racing events, in which cars are stationary when the race begins (different to the rolling start, where cars are paced). Some categories of land speed record also require a standing start, although the absolute land speed record uses a flying start, where the vehicle has reached its top speed by the starting point of the timer.\n[…]\nA Le Mans-style start was used for many years in various types of motor racing. When the start flag dropped, drivers had to run across the track to their cars which were parked on the other side, climb in, start the car, and drive away to begin the race.\n[…]\nA Le Mans start variation called a \"land rush start\" is used at short course off-road races at Crandon International Off-Road Raceway, where the vehicles start lined up side-by-side on a wide part of the track. The \"land rush start\" is based on the 1970 24 Hours of Le Mans start, and is used in historic races at Le Mans in some situations.\n[…]\nHowever, unlike the true Le Mans start, engines are already running and the drivers are already sitting behind the wheel, wearing their safety belts, when the starting signal is displayed.\n[…]\nA second variation is used in the endurance races at Highlands Motorsports Park in New Zealand that integrate the Le Mans start and the Land Rush start for multiple driver races. The primary drivers are in their cars at the start on pit lane, with the engines running, with each car having a flag attached to the rear of the cars. Co-drivers are positioned about 250 metres (820 ft) from their cars in uniform with a marshal next to them, lined up in qualifying order of their cars.\n[…]\nRolling start"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grelha_de_partida",
        "situacao": "ok",
        "texto": "Grelha de partida, Grid de largada ou Grelha de largada é a posição onde os competidores de diversas corridas automobilísticas posicionam-se antes de ser dada a largada.\n[…]\nA grelha estática é usada em oposição às largadas em movimento (como as usadas em ovais da NASCAR e à largada estilo Le Mans, em que os carros posicionavam-se próximo à mureta e os pilotos, do outro lado da pista, corriam em direção a ele para dar a partida e, assim, iniciar a corrida.",
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
