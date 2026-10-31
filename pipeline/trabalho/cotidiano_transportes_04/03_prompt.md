Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Transportes** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "RMS Titanic",
      "descricao": "Transatlântico britânico da White Star Line que afundou em 1912 após colidir com um iceberg."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Titanic tinha quatro chaminés, mas nem todas eram ligadas às caldeiras. Quantas serviam só de enfeite e ventilação?",
    "resposta": "Uma",
    "distratores": [
      "Duas",
      "Três",
      "Nenhuma"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Titanic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Titanic",
        "situacao": "ok",
        "texto": "RMS Titanic was a British ocean liner that sank in the early hours of 15 April 1912 after striking an iceberg on her maiden voyage from Southampton, England, to New York City. Of the 2,208 passengers and crew aboard, approximately 1,500 died (estimates vary), making the incident one of the deadliest peacetime sinkings of a single ship.\n[…]\nThe table below gives figures from Encyclopedia Titanica.\n[…]\nRoyal Mail (whose mail was carried by RMS (Royal Mail Ship) Titanic) issued ten 1st class UK postage stamps, each with the \"crown seal\", to mark the centenary of the disaster.\n[…]\nThere have been several proposals and studies for a project to build a replica ship based on the Titanic.\n[…]\nA Chinese shipbuilding company known as Wuchang Shipbuilding Industry Group Co., Ltd commenced construction in November 2016 to build a replica ship of the Titanic for use in a resort. The vessel was to house many features of the original, such as a ballroom, dining hall, theatre, first-class cabins, economy cabins and swimming pool. Tourists were to be able to reside inside the Titanic during their time at the resort.\n[…]\nLegends and myths regarding the Titanic\n[…]\nTitanic conspiracy theories\n[…]\nTitanic in popular culture\n[…]\nSS Atlantic – White Star Line ship lost in 1873 with the greatest loss of life for the company before Titanic\n[…]\n\"\"TITANIC\" DISASTER: REPORT OF THE COMMITTEE ON COMMERCE UNITED STATES SENATE\". Washington Government Printing Office. May 1912 – via Titanic Inquiry Project.\n[…]\n\"REPORT OF THE COURT: On the Loss of the \"Titanic.\" (s.s.)\". His Majesty's Stationery Office. 30 July 1912 – via Titanic Inquiry Project.\n[…]\nEncyclopedia Titanica\n[…]\nTitanic Historical Society\n[…]\nRMS Titanic Inc. - the salvor-in-possession of the Titanic wreck site\n[…]\nTitanic Footage and Survivors Interviews on YouTube\n[…]\nTitanic Footage: Leaving Belfast – British Pathé on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/RMS_Titanic",
        "situacao": "ok",
        "texto": "RMS Titanic foi um navio de passageiros britânico operado pela White Star Line e construído pelos estaleiros da Harland and Wolff, em Belfast. Segunda embarcação da Classe Olympic de transatlânticos, depois do RMS Olympic e seguido pelo HMHS Britannic, foi projetado pelos engenheiros navais Alexander Carlisle e Thomas Andrews. Sua construção começou em março de 1909 e seu lançamento ao mar ocorreu\n[…]\nAlém disso, o Titanic também tinha um fundo duplo e oito bombas d'água capazes de extrair quatrocentas toneladas de água por hora. Todas essas medidas de segurança levaram aos rumores por parte da imprensa de que a embarcação era supostamente \"inafundável\". No entanto, esses rumores não surgiram pela primeira vez com o Titanic, já que a própria White Star Line havia descrito o RMS Cedric como \"praticamente inafundável\" nove anos antes.\n[…]\nO Titanic já estava começando a inclinar apenas minutos depois da colisão. Smith e Andrews foram para os conveses inferiores investigar os danos, descobrindo que os depósitos de carga, sala dos correios e quadra de squash já estavam inundadas, enquanto a sala das caldeiras n.º 6 já tinha mais de quatro metros de água e a sala n.º 5 também já estava começando a ser inundada.\n[…]\nO impacto do iceberg havia entortado as placas de aço do casco e causado seis pequenas aberturas, com todas juntas equivalendo a uma área de pouco mais de um metro quadrado de todo o navio. A maior abertura tinha por volta de doze metros de comprimento e aparentemente seguiu a linhas das placas de aço.\n[…]\nAté sua descoberta, acreditava-se que o Titanic tinha afundando inteiro e, através dos anos, vários planos surgiram para levantá-lo do fundo do mar. Nenhum virou realidade. O problema fundamental era a extrema dificuldade de se encontrar e alcançar destroços que estão a quase quatro quilômetros da superfície em um local onde a pressão da água pode matar em menos de um segundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Concorde",
      "descricao": "Avião comercial supersônico franco-britânico que operou de 1976 a 2003."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em velocidade de cruzeiro, o Concorde voava a cerca de quantas vezes a velocidade do som?",
    "resposta": "Duas vezes",
    "distratores": [
      "Uma vez e meia",
      "Três vezes",
      "Cinco vezes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Concorde"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Concorde",
        "situacao": "ok",
        "texto": "Concorde ( KONG-kord, French: [kɔ̃kɔʁd] ) is a retired Anglo-French supersonic airliner jointly developed and manufactured by Sud Aviation and the British Aircraft Corporation (BAC).\n[…]\nMuseo del Concorde, a former museum in Mexico dedicated to the airliner\n[…]\nOrlebar, Christopher (2004). The Concorde Story. Oxford, UK: Osprey Publishing. ISBN 978-1-85532-667-5.\n[…]\nRoss, Douglas (March 1978). \"The Concorde Compromise: the politics of decision-making\". Bulletin of the Atomic Scientists. 34 (3): 46–53. Bibcode:1978BuAtS..34c..46R. doi:10.1080/00963402.1978.11458481.\n[…]\nSchrader, Richard K (1989). Concorde: The Full Story of the Anglo-French SST. Kent, UK: Pictorial Histories Pub. Co. ISBN 978-0-929521-16-9.\n[…]\nTalbot, Ted (2013), Concorde: A Designer's Life: The Journey to Mach 2, The History Press, ISBN 978-0-7524-8928-5\n[…]\nSkinner S., Concorde, Midland Counties Publ., 2009\n[…]\nBritish Airways Concorde page\n[…]\nBAC Concorde at BAE Systems site\n[…]\nDesign Museum (UK) Concorde page\n[…]\nHeritage Concorde preservation group site\n[…]\nConcorde Aircrew Manual Part 1\n[…]\nConcorde Aircrew Manual Part 2\n[…]\nConcorde Lecture Notes. Volume 1, Instruments\n[…]\nFlight Engineers Supplementary Information: Concorde Lecture Notes\n[…]\nConcorde Operations Navigation Manual\n[…]\nDonald Fink (10 March 1969). \"Concorde Enters Flight Test Phase\" (PDF). Aviation Week & Space Technology. Archived from the original (PDF) on 16 March 2015.\n[…]\n\"First Concorde Supersonic Transport Flies\" (PDF). Aviation Week & Space Technology. 17 March 1969. Archived from the original (PDF) on 16 March 2015.\n[…]\nCapt R. E. Gillman (24 January 1976). \"Concorde as viewed from the flightdeck\". Flight International.\n[…]\n\"The day Concorde flew into the history books\". Airbus. 2 March 2019."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Concorde",
        "situacao": "ok",
        "texto": "O Concorde foi um avião comercial supersônico de passageiros, que foi produzido de abril de 1965 até o final de 1978 pelo consórcio formado pela britânica British Aircraft Corporation (BAC) e a francesa Aérospatiale.\n[…]\nEm 21 de janeiro de 1976, o Concorde iniciou voos comerciais ligando Paris ao Rio de Janeiro, com uma escala em Dacar, e Londres a Bahrein. Voar no Concorde era uma experiência única. Tendo uma velocidade de cruzeiro em torno de 2,5 vezes a de qualquer aeronave de passageiros - 1 150 kn (2 130 km/h), contra 450 kn (833 km/h) de então, sendo 1 292 kn (2 390 km/h) o recorde em 19 de dezembro de 1985.\n[…]\nTurbulência era uma coisa que raramente o Concorde enfrentava, devido à sua grande altitude de voo. Olhando pela janela podia-se ver claramente a curvatura do globo terrestre. A aeronave era mais rápida que a velocidade de rotação da Terra, e isso se fazia notar quando a decolagem em Londres era após o pôr do sol, chegando em Nova Iorque ainda de dia.\n[…]\nO serviço de passageiros no Concorde permaneceu sem acidentes por cerca de 24 anos, atendendo regularmente, além de Nova Iorque e Washington, as cidades de Miami, Bridgetown (Barbados), Caracas, Ilha de Santa Maria, Dacar, Bahrein, Singapura, Cidade do México e Rio de Janeiro. Ao longo destes anos, o avião rodou o mundo nas duas direções, visitando todos os continentes, exceto a Antártica.\n[…]\nDois protótipos (001 e 002) foram produzidos para aperfeiçoamentos no projeto inicial. Mais duas aeronaves foram construídas (101 e 102), como aeronaves de pré-produção, e também serviram para refinar o projeto, de forma a aproximá-lo da configuração ideal para o serviço comercial.\n[…]\nVelocidade Normal de Cruzeiro: Mach 2,00",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Concorde",
      "descricao": "Avião comercial supersônico franco-britânico que operou de 1976 a 2003."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 2000, um Concorde da Air France caiu logo depois de decolar de Paris. O que, na pista, deu início ao desastre?",
    "resposta": "Peça metálica de outro avião",
    "distratores": [
      "Bando de pássaros",
      "Óleo derramado",
      "Gelo acumulado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Air_France_Flight_4590"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Air_France_Flight_4590",
        "situacao": "ok",
        "texto": "Air France Flight 4590 was an international charter flight from Paris to New York. On 25 July 2000, a Concorde passenger jet operating the flight crashed shortly after takeoff, killing all 109 people on board and four on the ground. It was the only fatal Concorde accident during its 27-year operational history.\n[…]\nFirst officer Jean Marcot (50), who had been with Air France since 1971 and had 10,035 flight hours, with 2,698 of them on the Concorde. He had also flown the Aérospatiale N 262, Morane-Saulnier MS.760 Paris, Sud Aviation Caravelle and Airbus A300 aircraft.\n[…]\nFlorence Eyquem-Fournel (27), had four years with Air France, including 1 year on Concorde.\n[…]\nA few days after the crash, all Air France Concordes were grounded, pending an investigation into the cause of the crash and possible remedies. British Airways grounded their Concordes three weeks later for the same reason.\n[…]\nAir France's Concorde operation had been a money-losing venture, and it is claimed that the aeroplane had been kept in service as a matter of national pride; British Airways claimed to make a profit on its Concorde operations. According to Jock Lowe, a Concorde pilot, until the crash of Air France Flight 4590 at Paris, the British Airways Concorde operation made a net average profit of about £30M (equivalent to £54M in 2024) a year.\n[…]\n\"Accident on 25 July 2000 at La Patte d'Oie in Gonesse (95) to the Concorde registered F-BTSC operated by Air France (REPORT translation f-sc000725a)\" (PDF). BEA. 16 January 2002. Archived (PDF) from the original on 11 November 2023.\n[…]\nAll 109 \"Aboard Dead in Concorde Crash into Hotel Near Paris; 4 On Ground Dead\" Archived 16 October 2009 at the Wayback Machine – CNN\n[…]\n\"Air France Flight 4590 at Paris, France\". Lessons Learned. Federal Aviation Administration."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voo_Air_France_4590",
        "situacao": "ok",
        "texto": "O Voo Air France 4590 foi um voo charter internacional de Paris para Nova Iorque. Em 25 de julho de 2000, um jato de passageiros Concorde que operava o voo caiu logo após a decolagem, matando todas as 109 pessoas a bordo e 4 em solo. Foi o primeiro e único acidente fatal do Concorde durante seus 27 anos de história operacional.\n[…]\npassagem em alta velocidade de um dos pneus sobre uma peça que se desprendeu de uma outra aeronave que havia decolado antes do Concorde.\n[…]\nDurante as investigações apurou-se que, cinco minutos antes do Concorde, um DC-10 da companhia Continental, de prefixo N13067 havia também decolado na mesma pista e sentido. Na decolagem do DC-10, uma peça de titânio de 43 cm de comprimento se soltou da carcaça de proteção do reversor de seu motor direito (motor nº 3) e caiu na pista.\n[…]\nA Air France encerrou as operações comerciais com o Concorde em 31 de maio de 2003 e a British Airways em 24 de outubro do mesmo ano.\n[…]\nO mecânico-soldador John Taylor foi condenado a 15 meses de prisão e a Continental ao pagamento de multa de 200 mil euros às famílias das vítimas. A Continental qualificou de absurda a decisão e anunciou que iria entrar com recurso. Os promotores franceses responsabilizaram a companhia aérea pela queda na pista da peça metálica de sua aeronave, que decolara minutos antes do Concorde e que, segundo o relatório final do BEA, teria sido a causa inicial do acidente.\n[…]\nUm monumento em homenagem às vítimas do acidente foi estabelecido em Gonesse. Ele consiste em um pedaço de vidro transparente com um pedaço de uma asa de avião que se projeta. Outro monumento, um memorial de 6 000 metros quadrados (65 000 pés quadrados) cercado com topiaria plantada em forma de Concorde, foi estabelecido em 2006 em Mitry-Mory, ao sul do Aeroporto Charles de Gaulle.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "14-bis",
      "descricao": "Avião de Alberto Santos-Dumont que voou em Paris em 1906."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em novembro de 1906, em Paris, o voo mais longo do 14-bis cobriu cerca de que distância?",
    "resposta": "220 metros",
    "distratores": [
      "20 metros",
      "2 quilômetros",
      "10 quilômetros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Santos-Dumont_14-bis",
      "https://pt.wikipedia.org/wiki/14-bis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santos-Dumont_14-bis",
        "situacao": "ok",
        "texto": "The 14-bis (French: Quatorze-bis; (Portuguese: Quatorze-bis; English: Fourteen-again, approximating \"14B\"), also known as Oiseau de proie (\"bird of prey\" in French), was a pioneer era, canard-style biplane designed and built by Brazilian aviation pioneer Alberto Santos-Dumont. In 1906, near Paris, the 14-bis made a manned powered flight that was the first to be publicly witnessed by a crowd and al\n[…]\nAs the sun set, Santos-Dumont attempted one more flight. In order to ensure he would not hit the spectators, who by this time were all over the field, he pulled up while flying over them. After 22 seconds, he cut the engine and glided in to land. He had flown for 220 meters (over 700 ft), qualifying for the second aviation prize offered for heavier-than-air-aircraft, 1,000 francs for a flight of 100 meters or more.\n[…]\nThe Santos-Dumont 14-bis did not use a catapult and ran on wheels located at the back of the aircraft – said to have been adopted by Santos-Dumont for his 14-bis after personally witnessing Traian Vuia's contemporary, four-wheeled aircraft's flight attempts earlier in 1906 in the western suburbs of Paris, not far from the Château de Bagatelle's grounds – with a \"nose-skid\" under the front of the 14-bis' fuselage.\n[…]\nThe Wright design used wing-warping for lateral control, something which they had been using since 1899 in their gliders. Without lateral control, the aircraft merely hops, or lifts off the ground and returns to it in a straight line – although rudder input, coupled with the very generous dihedral of the 14-bis' wings, would in fact give a fair degree of roll control. Dumont added octagonal ailerons to the 14-bis for lateral control in November 1906 (see media pictures below).\n[…]\nGray, Carroll F. (November 2006). \"The 1906 Santos-Dumont No. 14bis\". WWI Aero: The Journal of the Early Aeroplane (194): 4–21. ISSN 0736-198X."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/14-bis",
        "situacao": "ok",
        "texto": "14-bis, também conhecido como Oiseau de Proie (francês para “ave de rapina”), foi um avião construído pelo inventor brasileiro Alberto Santos Dumont que em 12 de novembro de 1906 conquistou o Prêmio Archdeacon e o Prêmio do Aeroclube da França ao realizar um voo de 220 metros em Paris.\n[…]\nO peso total da aeronave vazia era de aproximadamente 160 kg, um feito notável para uma máquina com mais de 11 metros de envergadura.\n[…]\nPrimeiros Saltos (Agosto-Setembro de 1906): Após abandonar o balão Nº 14, Santos Dumont realizou os primeiros testes no solo em Bagatelle. Em 13 de setembro, com o motor de 24 hp, conseguiu um \"salto\" de 7 a 11 metros, que terminou com o trem de pouso danificado. Ele então instalou o motor mais potente de 50 hp e rebatizou a aeronave de Oiseau de Proie.\n[…]\n23 de Outubro de 1906: O Prêmio Archdeacon: Perante uma multidão e a comissão oficial do Aéro-Club de France, Santos Dumont fez várias tentativas. Após alguns saltos curtos, ele finalmente conseguiu um voo sustentado de 60 metros a uma altura de 2 a 3 metros. O voo durou 7 segundos e foi suficiente para vencer a Taça Archdeacon, destinada ao primeiro voo de mais de 25 metros.\n[…]\n12 de Novembro de 1906: O Prêmio do Aéro-Club: Insatisfeito e buscando maior controle e distância, Santos Dumont fez modificações cruciais, incluindo a adição dos ailerons interplanares. No dia 12 de novembro, novamente em Bagatelle, ele realizou uma série de voos cada vez mais longos. O clímax foi um voo de 220 metros que durou 21,5 segundos.\n[…]\nCom este feito, ele não apenas quebrou seu próprio recorde, mas também venceu o prêmio de 1.500 francos do Aéro-Club de France para o primeiro voo de mais de 100 metros. Este voo foi a consagração definitiva do 14-bis e de seu inventor."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Ford Modelo T",
      "descricao": "Automóvel da Ford fabricado de 1908 a 1927, o primeiro carro produzido em massa em linha de montagem."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Entre 1908 e 1927, a Ford fabricou cerca de quantas unidades do Modelo T?",
    "resposta": "15 milhões",
    "distratores": [
      "1 milhão",
      "5 milhões",
      "40 milhões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ford_Model_T"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ford_Model_T",
        "situacao": "ok",
        "texto": "The Ford Model T is an automobile that was produced by the Ford Motor Company from October 1, 1908, to May 26, 1927. It is generally regarded as the first mass-affordable automobile, which made car travel available to middle-class Americans. The relatively low price was partly the result of Ford's efficient fabrication, including assembly line production instead of individual handcrafting.\n[…]\nThe first production Model T was built on August 12, 1908, and left the factory on September 27, 1908, at the Ford Piquette Avenue Plant in Detroit, Michigan. On May 26, 1927, Henry Ford watched the 15 millionth Model T Ford roll off the assembly line at his factory in Highland Park, Michigan.\n[…]\nThe Model T has a front-mounted 177-cubic-inch (2.9 L) inline four-cylinder engine, producing 20 hp (15 kW), for a top speed of 42 mph (68 km/h). According to Ford Motor Company, the Model T had fuel economy of 13–21 mpg‑US (16–25 mpg‑imp; 18–11 L/100 km). The engine was designed to run on gasoline, although it was able to run on kerosene or ethanol, although the decreasing cost of gasoline and the later introduction of Prohibition made ethanol an impractical fuel for most users.\n[…]\nIt was so successful Ford did not purchase any advertising between 1917 and 1923; instead, the Model T became so famous, people considered it a norm. More than 15 million Model Ts were manufactured in all, reaching a rate of 9,000 to 10,000 cars a day in 1925, or 2 million annually, more than any other model of its day, at a price of just $260 ($4,773 today).\n[…]\nOn May 26, 1927, Henry Ford and his son Edsel drove the 15-millionth Model T out of the factory. This marked the famous automobile's official last day of production at the main factory.\n[…]\nThe above tally includes a total of 14,689,525 vehicles. Ford said the last Model T was the 15 millionth vehicle produced.\n[…]\nFord Model T at the Internet Movie Cars Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ford_Model_T",
        "situacao": "ok",
        "texto": "Ford Modelo T é um automóvel que foi desenvolvido e fabricado pela empresa norte-americana Ford Motor Company, de 1908 a 1927. Vigésimo modelo da marca, popularizou e revolucionou a indústria automobilística.\n[…]\nEm 1° outubro de 1908, a Ford lançou no mercado dos Estados Unidos o seu Modelo T, um veículo confiável, robusto, seguro, simples de dirigir e, principalmente, barato.\n[…]\nComo consequência o custo unitário caiu em relação aos concorrentes. E a queda de preço foi constante: em 1908, ano de seu lançamento, cada modelo custava US$ 850, em 1927, último ano de sua fabricação, o preço despencou para US$ 290.\n[…]\nDurante a Primeira Guerra Mundial, o Modelo T foi empregado amplamente, inclusive como ambulância, e correspondeu nas condições mais adversas.\n[…]\nA produção do Modelo T foi mantida até 1927. Alguns meses depois de realizar uma cerimônia para apresentação do carro nº 15 000 000, Henry Ford concluiu que era hora dele ceder o lugar a uma nova geração de produtos. O recorde de quase vinte anos de produção e mais de quinze milhões de unidades produzidas só foi superado em 1972, pelo Fusca.\n[…]\nComo parte das comemorações de seu centenário, em 2003, a Ford restaurou seis unidades. Uma versão de 2003, denominada Modelo T-100, foi fabricada totalmente à mão, sendo idêntica à original de 1914.\n[…]\nAinda não era com o sistema de pedal, mas com uma alavanca junto ao volante, que formava par com outra, para ajustar o avanço de ignição. As duas alavancas, opostas, formavam a figura de um bigode, o que levou o \"T\" a ser chamado, no Brasil, de \"Ford Bigode\". Quando o nome pegou, os modelos fabricados no Brasil passaram a mostrar no ornamento do capô a figura de um bigode.\n[…]\nCronologia do modelo T\n[…]\nFord Hemp Body Car",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Guia Michelin",
      "descricao": "Guia de viagem francês publicado desde 1900 pela fabricante de pneus Michelin, famoso por dar estrelas a restaurantes."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Criado por uma fabricante de pneus, o Guia Michelin dá estrelas a restaurantes. Quantas estrelas, no máximo, um restaurante pode receber?",
    "resposta": "Três",
    "distratores": [
      "Quatro",
      "Cinco",
      "Dez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Michelin_Guide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michelin_Guide",
        "situacao": "ok",
        "texto": "The Michelin Guide ( MISH-əl-in, MITCH-əl-in; French: Guide Michelin [ɡid miʃlɛ̃]) is a restaurant and hotel guide that has been published by the French tyre company Michelin since 1900. Originally created as a guide for French motorists, it later developed into an international reference for dining and travel. It awards up to three Michelin stars for excellence to a select few restaurants in cert\n[…]\n: \"A very good restaurant in its category\" (Une très bonne table dans sa catégorie)\n[…]\nThe Michelin Guide also awards \"Rising Stars\", an indication that a restaurant has the potential to qualify for a star, or an additional star.\n[…]\nThe Michelin Guide New York 2007 included 526 restaurants, compared to 2,014 in Zagat New York 2007; after The Four Seasons Restaurant received no stars in that edition, co-owner Julian Niccolini said Michelin \"should stay in France, and they should keep their guide there\".\n[…]\nIn 2007, Tokyo's restaurants were awarded the most stars and in 2010 other Japanese cities like Kyoto and Osaka also received many stars. At the time this sparked questions from some over whether these high ratings were merited for Japanese restaurants, or whether the Michelin Guide was too generous in giving out stars to gain an acceptance with Japanese customers and to enable the tyre-selling parent company to market itself in Japan.\n[…]\n't Huis van Lede (Belgium). After receiving a star in 2014, chef Frederick Dhooge said he did not want his Michelin star or his points in the Gault-Millau restaurant guide, stating: \"We noticed that this is not always understood by a group of customers that expect a spectacle of stars and points kitchen\" from a Michelin-starred restaurant rather than simple food.\n[…]\nLists of Michelin-starred restaurants\n[…]\nMichelin Guide to the Battlefields of the World War, Milltown, N.J.: Michelin, 1919, OL 24432211M\n[…]\n1900 Michelin Guide Archived 23 May 2025 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guia_Michelin",
        "situacao": "ok",
        "texto": "Guia Michelin é um guia turístico publicado pela primeira vez em 1900 por André Michelin, um industrial francês fundador da Compagnie Générale des Établissements Michelin, fabricante de pneus mais conhecida como Michelin. O objetivo de André era o de promover o turismo para o crescente mercado automobilístico.\n[…]\nÉ o guia de referência de hotéis e restaurantes. Impresso com o máximo sigilo e com tiragem desconhecida, este guia é o mais respeitado do mundo e premia os melhores restaurantes, classificando-os com estrelas (de 1 a 3) e que representam o sonho ou o pesadelo de qualquer chef.\n[…]\nGanhar uma estrela do guia significa a ascensão do restaurante e dos seus chefs ao passo que perder uma delas pode levar até a uma tragédia como a do chef Bernard Loiseau que se suicidou em Fevereiro de 2003, aos 52 anos, desesperado com o rumor de que o seu estabelecimento perderia a classificação de \"três estrelas\" no Guia Michelin.\n[…]\nUm novo guia vermelho é dedicado à cidade de Tóquio em 2008 e já conta com 8 restaurantes \"três estrelas\" entre mais de 150 \"estrelados\".\n[…]\nDesde 1929, data de introdução das estrelas no Guia Michelin, que Portugal tem restaurantes premiados com Estrelas Michelin. A lista dos restaurantes premiados com estrelas no Guia Michelin 2024 inclui 39 restaurantes, 8 com duas estrelas (1 novo) e 31 com uma estrela (4 novos).\n[…]\nDesde 1997 foi introduzida a distinção de Bib Gourmand. Esta categoria, inferior às estrelas, inclui restaurantes com a melhor relação qualidade-preço. A lista dos restaurantes distinguidos como Bib Gourmand no Guia Michelin 2024 inclui 30 restaurantes em Portugal (7 novos).\n[…]\nSegue-se uma lista dos restaurantes que receberam estrelas Michelin ao longo dos anos.\n[…]\nLista dos restaurantes estrelados do Guia Michelin\n[…]\nLista de restaurantes com três estrelas Michelin",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Mayday",
      "descricao": "Palavra usada internacionalmente no rádio como pedido de socorro por aviões e navios."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pela regra internacional, quantas vezes seguidas o piloto ou o comandante deve repetir a palavra mayday ao pedir socorro pelo rádio?",
    "resposta": "Três",
    "distratores": [
      "Duas",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mayday"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mayday",
        "situacao": "ok",
        "texto": "Mayday is an emergency procedure word used internationally as a distress signal in voice-procedure radio communications.\n[…]\nThe \"mayday\" procedure word was conceived as a distress call in the early 1920s by Frederick Stanley Mockford, officer-in-charge of radio at Croydon Airport, England. He had been asked to think of a word that would indicate distress and would easily be understood by all pilots and ground staff in an emergency. Since much of the air traffic at the time was between Croydon and Le Bourget Airport in Paris, he proposed the term \"mayday\", the phonetic equivalent of the French m'aider.\n[…]\nFollowing tests, the new procedure word was introduced for cross-Channel flights in February 1923. The previous distress call had been the Morse code signal SOS, but this was not considered suitable for voice communication, \"[o]wing to the difficulty of distinguishing the letter 'S' by telephone\". In 1927, the International Radiotelegraph Convention of Washington, D.C., adopted the voice call \"mayday\" as the radiotelephone distress call in addition to the SOS radiotelegraph (Morse code) signal.\n[…]\nIf a mayday call cannot be sent because a radio is not available, a variety of other distress signals and calls for help can be used. Additionally, a mayday call can be sent on behalf of one vessel by another; this is known as a mayday relay.\n[…]\nHowever, the International Civil Aviation Organization recommends the use of the standard \"pan-pan\" and \"mayday\" calls instead of \"declaring an emergency\". Cases of pilots using phrases other than \"pan-pan\" and \"mayday\" have caused confusion and errors in aircraft handling."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mayday",
        "situacao": "ok",
        "texto": "Mayday é uma palavra de procedimento de emergência utilizada internacionalmente como sinal de socorro em comunicações de rádio por voz.\n[…]\nÉ empregada para sinalizar emergências com risco de morte, principalmente por aviadores e marinheiros, embora, em alguns países, organizações locais como bombeiros, forças policiais e empresas de transporte também utilizem o termo. Por convenção, a palavra deve ser repetida três vezes seguidas durante a declaração inicial de emergência (\"Mayday, mayday, mayday\").\n[…]\nA palavra de procedimento \"mayday\" foi concebida como um sinal de socorro no início da década de 1920 por Frederick Stanley Mockford, oficial encarregado do rádio no Aeroporto de Croydon, em Londres. Ele foi solicitado a criar um termo que indicasse perigo e fosse facilmente compreendido por pilotos e equipes de solo em emergências.\n[…]\nComo grande parte do tráfego aéreo na época ocorria na rota entre Croydon e o Aeroporto de Le Bourget, em Paris, ele propôs \"mayday\", o equivalente fonético do francês m'aider.\n[…]\nApós testes, o sinal foi introduzido em fevereiro de 1923 para voos através do Canal da Mancha, substituindo gradualmente o código Morse SOS nas comunicações por voz, devido à dificuldade de distinguir a letra \"S\" via telefone. Por convenção, a palavra deve ser repetida três vezes (\"mayday, mayday, mayday\") para evitar confusão com termos de sonoridade similar. Em 1927, a Convenção Internacional de Radiotelegrafia de Washington, D.C.\n[…]\noficializou o \"mayday\" como o padrão radiotelefônico mundial para situações de emergência com risco de vida.==Referências==\n[…]\nVídeos da National Geographic Mayday! Desastres Aéreos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Ônibus espacial",
      "descricao": "Sistema espacial parcialmente reutilizável da NASA, operado de 1981 a 2011."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Entre 1981 e 2011, quantos ônibus espaciais diferentes da NASA chegaram a ir ao espaço?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Quatro",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Space_Shuttle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Space_Shuttle",
        "situacao": "ok",
        "texto": "The Space Shuttle is a retired, partially reusable low Earth orbital spacecraft system that went to the ISS and performed other orbital missions. Operated from 1981 to 2011 by the U.S. National Aeronautics and Space Administration (NASA) as part of the Space Shuttle program. Its official program name was the Space Transportation System (STS), taken from the 1969 plan led by U.S. vice president Spi\n[…]\nThe first (STS-1) of four orbital test flights occurred in 1981, leading to operational flights (STS-5) beginning in 1982. Five complete Space Shuttle orbiter vehicles were built and flown on a total of 135 missions from 1981 to 2011. They launched from the Kennedy Space Center (KSC) in Florida.\n[…]\nOn November 24, 1980, Columbia was mated with its external tank and solid-rocket boosters, and was moved to LC-39 on December 29. The first Space Shuttle mission, STS-1, would be the first time NASA performed a crewed first-flight of a spacecraft. On April 12, 1981, the Space Shuttle launched for the first time, and was piloted by John Young and Robert Crippen.\n[…]\nThe Space Shuttle flew from April 12, 1981, until July 21, 2011. Throughout the program, the Space Shuttle had 135 missions, of which 133 returned safely. Throughout its lifetime, the Space Shuttle was used to conduct scientific research, deploy commercial, military, and scientific payloads, and was involved in the construction and operation of Mir and the ISS. During its tenure, the Space Shuttle served as the only U.S.\n[…]\nHowever, the actual costs of a Space Shuttle launch were higher than initially predicted, and the Space Shuttle did not fly the intended 24 missions per year as initially predicted by NASA.\n[…]\nHow The Space Shuttle Works\n[…]\nThe Space Shuttle Era: 1981–2011; interactive multimedia on the Space Shuttle orbiters\n[…]\nWhen We Were Shuttle, explores the Space Shuttle program through the eyes of those who worked to make it fly (PBS)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%94nibus_espacial",
        "situacao": "ok",
        "texto": "O ônibus espacial (português brasileiro) ou vaivém espacial (português europeu) (em inglês: Space Shuttle) foi um sofisticado veículo parcialmente reutilizável usado pela NASA como veículo lançador de satélites, nave para suas missões tripuladas de reparos de aparelhos em órbita no espaço e reabastecimento da Estação Espacial Internacional. Ele tornou-se o sucessor da nave Apollo usada durante o P\n[…]\nEmbora todos os cinco veículos que compuseram a frota de ônibus espaciais da NASA sejam incomparáveis em conquistas, a Discovery é a única entre elas com um total de 38 viagens ao espaço. A Discovery passou 352 dias em órbita, ou quase um ano inteiro e, contando todas as suas missões, ela circundou a Terra 5 628 vezes com uma velocidade em torno de 28 000 km/h. Já percorreu quase 230 milhões de quilômetros. Esta distância equivale, em quilômetros, a 288 idas à Lua.\n[…]\nA órbita do ônibus espacial podia variar entre 185 quilômetros de altitude até 643 quilômetros de altitude. Nessa faixa de altitudes ele podia chegar a quase 29 000 km/h.\n[…]\nOs sistemas de manobras orbitais encarregam-se de colocar o ônibus espacial em órbita. No espaço, o veículo está apto a realizar diversas missões: o transporte de satélites e sondas espaciais, a reparação ou resgate de artefatos que estão em órbita e a realização de pesquisas científicas são as principais funções do space shuttle, o ônibus espacial.\n[…]\nA Nasa anunciou em 12 de abril de 2011 os locais e as instalações onde as quatro naves de transporte estão sendo exibidas permanentemente, após a conclusão do Programa de Ônibus Espaciais dos Estados Unidos. Depois de 30 anos de missões no espaço, com 130 missões realizadas com tecnologia de ponta, a frota dos ônibus espaciais da NASA foi aposentada e está em exibição em instituições e museus dos Estados Unidos, segundo a NASA para inspirar a próxima geração de exploradores e engenheiros.\n[…]\nAvião espacial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Jipe lunar",
      "descricao": "Veículo elétrico de quatro rodas usado pelos astronautas das missões Apollo 15, 16 e 17."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nas últimas missões Apollo, os astronautas passearam pela Lua num jipe elétrico. Quantos desses jipes ficaram abandonados por lá?",
    "resposta": "Três",
    "distratores": [
      "Um",
      "Dois",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lunar_Roving_Vehicle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lunar_Roving_Vehicle",
        "situacao": "ok",
        "texto": "The Lunar Roving Vehicle (LRV) is a battery-powered four-wheeled rover used on the Moon in the last three missions of the American Apollo program (15, 16, and 17) during 1971 and 1972. It is popularly called the Moon buggy, a play on the term \"dune buggy\".\n[…]\nWith pressure from Congress to hold down Apollo costs, Saturn V production was reduced, allowing only a single launch per mission. Any roving vehicle would have to fit on the same lunar module as the astronauts. In November 1964, two-rocket models were put on indefinite hold, but Bendix and Boeing were given study contracts for small rovers.\n[…]\nThe Apollo Lunar Roving Vehicle is a battery electric vehicle designed to operate in the low-gravity vacuum of the Moon and to be capable of traversing the lunar surface, allowing the Apollo astronauts to extend the range of their surface extravehicular activities. Three LRVs were used on the Moon: one on Apollo 15 by astronauts David Scott and Jim Irwin, one on Apollo 16 by John Young and Charles Duke, and one on Apollo 17 by Eugene Cernan and Harrison Schmitt.\n[…]\nThe rover used on Apollo 17 was left at Taurus-Littrow (20.16°N 30.76°E﻿ / 20.16; 30.76﻿ (Apollo 17 Lunar Roving Vehicle at Taurus-Littrow)) and was seen by the Lunar Reconnaissance Orbiter during passes in 2009 and 2011. In 2020, the State of Washington designated the flown rovers as historic landmarks.\n[…]\nMobility Performance of the Lunar Roving Vehicle:  Terrestrial Studies – Apollo 15 Results\n[…]\nApollo Lunar Roving Vehicle Documentation – Apollo Lunar Surface Journal\n[…]\nLunar Roving Vehicle at the Smithsonian National Air and Space Museum Archived 8 February 2022 at the Wayback Machine\n[…]\nLunar Roving Vehicle Collection, The University of Alabama in Huntsville Archives and Special Collections"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lunar_Roving_Vehicle",
        "situacao": "ok",
        "texto": "O veículo explorador da Lua, ou em inglês, o Lunar Roving Vehicle, é um pequeno veículo elétrico (astromóvel), que permitiu aos astronautas das missões Apollo dirigir nas vizinhanças do local de pouso do módulo lunar, para realizar observações da geologia lunar, coletar amostras de rochas e de solos, para fazer o uso de instrumentos científicos, em vários pontos da Lua, além de poderem se deslocar\n[…]\nPosteriormente, contudo, o Centro Espacial Marshall passou a examinar um projeto de exploração da superfície lunar menos ambicioso e complexo (sobretudo quando foi escolhido o esquema para o envio de astronautas à Lua, no qual ficava claro que apenas dois tripulantes – e não três, como havia sido considerado no início, pousariam na superfície da Lua). Num primeiro momento, se considerou a ideia de criar um veículo capaz de transportar dois astronautas, e que fosse remotamente controlado.\n[…]\nCom a pressão do Congresso para baixar os custos do Projeto Apollo, a produção do Saturno V foi reduzida, de modo que um único foguete seria lançado em cada missão. Assim, qualquer veículo de exploração lunar que viesse a ser concebido, necessitaria ser levado à Lua na mesma espaçonave que os astronautas.\n[…]\nEm novembro de 1964, o modelo a utilizar dois foguetes foi abandonado e a Bendix e a Boeing passaram a ser responsáveis pela criação de um veículo de exploração lunar leve e de fácil manobrabilidade. O nome do módulo de excursão lunar foi mudado, passando a se chamar, simplesmente, Módulo Lunar Apollo, indicando que a possibilidade de grandes “excursões” lunares ainda não existiria.\n[…]\nMaior distância do Módulo Lunar: 4,5 km\n[…]\nMaior distância do Módulo Lunar: 7,6 km\n[…]\nO veículo lunar foi utilizado em três passeios lunares pelo vale de Taurus-Littrow, que duraram 7,2; 7,6 e 7,3 horas. Durante a partida da Lua pelo módulo lunar, o veículo lunar também filmou a sua decolagem.\n[…]\nProjeto Apollo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Linha de montagem de Henry Ford",
      "descricao": "Linha de montagem móvel adotada pela Ford em 1913 para produzir o Modelo T em massa."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Com a linha de montagem móvel, adotada em 1913, o tempo para montar um Ford Modelo T caiu de mais de doze horas para cerca de quanto?",
    "resposta": "Uma hora e meia",
    "distratores": [
      "Dez minutos",
      "Três horas",
      "Seis horas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Assembly_line",
      "https://en.wikipedia.org/wiki/Ford_Model_T"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Assembly_line",
        "situacao": "ok",
        "texto": "An assembly line, often called progressive assembly, is a manufacturing process where the unfinished product moves in a direct line from workstation to workstation, with parts added in sequence until the final product is completed. By mechanically moving parts to workstations and transferring the unfinished product from one workstation to another, a finished product can be assembled faster and wit\n[…]\nAccording to Henry Ford:\n[…]\nIn 1922, Ford (through his ghostwriter Crowther) said of his 1913 assembly line:\n[…]\nWhat was worked out at Ford was the practice of moving the work from one worker to another until it became a complete unit, then arranging the flow of these units at the right time and the right place to a moving final assembly line from which came a finished product. Regardless of earlier uses of some of these principles, the direct line of succession of mass production and its intensification into automation stems directly from what we worked out at Ford Motor Company between 1908 and 1913.\n[…]\nHenry Ford is generally regarded as the father of mass production. He was not. He was the sponsor of it.\n[…]\nIn his 1922 autobiography, Henry Ford mentions several benefits of the assembly line including:\n[…]\nThese goals appear altruistic; however, it has been argued that they were implemented by Ford in order to reduce high employee turnover: when the assembly line was introduced in 1913, it was discovered that \"every time the company wanted to add 100 men to its factory personnel, it was necessary to hire 963\" in order to counteract the natural distaste the assembly line seems to have inspired.\n[…]\nWilson, J. M. \"Henry Ford vs. assembly line balancing.\" International Journal of Production Research (2014). 52(3), 757–765. https://doi.org/10.1080/00207543.2013.836616"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ford_Model_T",
        "situacao": "ok",
        "texto": "The Ford Model T is an automobile that was produced by the Ford Motor Company from October 1, 1908, to May 26, 1927. It is generally regarded as the first mass-affordable automobile, which made car travel available to middle-class Americans. The relatively low price was partly the result of Ford's efficient fabrication, including assembly line production instead of individual handcrafting.\n[…]\nThe figures below are US production numbers compiled by R. E. Houston, Ford Production Department, August 3, 1927. The figures between 1909 and 1920 are for Ford's fiscal year. From 1909 to 1913, the fiscal year was from October 1 to September 30 the following calendar year with the year number being the year in which it ended. For the 1914 fiscal year, the year was October 1, 1913, through July 31, 1914.\n[…]\nHenry Ford used wood scraps from the production of Model Ts to make charcoal briquettes. Originally named Ford Charcoal, the name was changed to Kingsford Charcoal after the Iron Mountain Ford Plant closed in 1951 and the Kingsford Chemical Company was formed and continued the wood distillation process. Edward G. Kingsford, Ford's cousin-in-law, brokered the selection of the new sawmill and wood distillation plant site.\n[…]\nFord, Henry; Crowther, Samuel (1922), My Life and Work, Garden City, New York, USA: Garden City Publishing Company, Inc. Various republications, including ISBN 9781406500189. Original is public domain in U.S. Also available at Google Books.\n[…]\nLewis, David (1976). The Public Image of Henry Ford: An American Folk Hero and His Company. Detroit, MI, U.S.: Wayne State University Press. ISBN 978-0-8143-1553-8.\n[…]\nWik, Reynold M. (1972). Henry Ford and grass-roots America. Ann Arbor, MI, U.S.: University of Michigan Press. ISBN 978-0-472-97200-5.\n[…]\nModel T Ford Club of America (USA)\n[…]\nModel T Ford Club International\n[…]\nFord Model T at the Internet Movie Cars Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Linha_de_produ%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Linha de produção ou linha de montagem pode ser entendida como uma forma de produção em série, onde vários operários, com ajuda de máquinas, especializados em diversas funções específicas e repetitivas, trabalhando de forma sequencial, chega-se a um produto semi-acabado ou acabado; ocorre quando um estabelecimento industrial com o auxílio de máquinas transformam as matérias-primas e produtos semi-\n[…]\nA forma mais característica, a da montagem em série, foi inventada por Henry Ford, empresário estadunidense do setor automobilístico. Graças a ela, Ford conseguiu produzir em massa seu famoso carro Ford T.\n[…]\nFoi concebida por Henry Ford inicialmente para a fabricação dos automóveis Ford no ano de 1913 sendo desde essa data considerada uma das maiores inovações tecnológicas da era industrial, pois graças a ela o tempo de produção de peças sofreu um decréscimo significativo (Chase et al., 1995, p. 21), permitindo que dessa maneira se produzisse em maior quantidade, o que mais tarde acabou por se reflectir no preço dos produtos, tornando assim os mesmos mais acessíveis a outras classes sociais.\n[…]\nSegundo o livro no Sec XV, “O Arsenal Venziano “ já produzia galeras em esteiras rolantes e as montagens eram feitas em estágios.\n[…]\nO processo desenvolvido por Ford foi iniciado no dia 7 de outubro de 1913 em sua fábrica em Highland Park. Este sistema foi idealizado após Henry Ford ter analisado experiências bem sucedidas como: o moinho automatizado desenvolvido por Oliver Evans, a montagem de espingardas desenvolvida por Eli Withney ou a a produção de revólver de Samuel Colt, entre outras experiências.\n[…]\nA dimensão do produto influencia a concepção de uma linha de montagem pois vai restringir o número de produtos que podem existir em cada posto de trabalho afectando por sua vez o desempenho do trabalhador.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "DeLorean DMC-12",
      "descricao": "Carro esportivo de carroceria de aço inoxidável e portas que abrem para cima, fabricado de 1981 a 1983 e famoso como máquina do tempo no cinema."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No filme De Volta para o Futuro, o DeLorean precisa atingir quantas milhas por hora para viajar no tempo?",
    "resposta": "88 milhas por hora",
    "distratores": [
      "55 milhas por hora",
      "100 milhas por hora",
      "121 milhas por hora"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/DeLorean_time_machine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/DeLorean_time_machine",
        "situacao": "ok",
        "texto": "In the Back to the Future franchise, the DeLorean time machine is a time travel vehicle constructed from a retrofitted DMC DeLorean. Its time travel ability is derived from the \"flux capacitor\", a component that allows the car to travel to the past or future. This occurs when the car accelerates to 88 miles per hour and requires 1.21 gigawatts of electricity.\n[…]\nDoc installs a cable leading from the top of the clock down to the street to harness the lightning, and attaches a long pole and hook to the DeLorean to channel the energy into the flux capacitor once the hook makes contact with the cable while the DeLorean is accelerating at 88 mph. Despite setbacks, such as the cable being disconnected by a fallen branch and the DeLorean having starter problems again, the plan succeeds and Marty returns home.\n[…]\nAfter meeting up with the 1885 Doc, the fuel line is repaired, but their experiments with creating modern fuel from whiskey destroys the fuel injection manifold, leaving the car unable to travel under its own power. After trying a few ideas (such as pulling it with horses), they resolve to use a steam locomotive to push the DeLorean up to 88 mph.\n[…]\nFusion unit will provide the power required to activate the flux capacitor and make the jump through time once the stolen locomotive and the DeLorean reach 88 mph. Doc also added \"Presto Logs\" into the locomotive's boiler to make the fire burn hotter, and used the whitewalls from earlier and a wooden support to cushion the DeLorean and locomotive.\n[…]\nOnce Marty finishes this task, he returns to Doc's DeLorean as they begin their return to 1931, activating the flux capacitor on Edna's DeLorean and making it speed up to 88 mph with its time circuits set to 1931. After they all return to 1931, Edna crashes in front of the police station and is then arrested by Officer Parker for her crimes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%A1quina_do_tempo_DeLorean",
        "situacao": "ok",
        "texto": "A Máquina do Tempo DeLorean (em inglês: DeLorean Time Machine) é o dispositivo usado para viajar no tempo na trilogia de filmes Back to the Future. A máquina está baseada em um automóvel DMC DeLorean de 1981; é pilotada pelo Doutor Emmett Brown, seu inventor, ou Marty McFly, seu amigo. Doutor Brown a classifica como sua invenção mais bem-sucedida. No segundo filme o carro possui a capacidade de vo\n[…]\nO capacitor de fluxo (em Portugal: condensador de fluxo) é a principal parte da máquina do tempo. É descrito pelo Dr. Emmett Brown como \"o que faz a viagem no tempo possível\". Com ele conectado aos circuitos de tempo e energizado com 1,21 gigawatts, ao chegar a 88 milhas por hora (141 km/h), o objeto conectado a ele viaja no tempo.\n[…]\nFusion pode fornecer energia suficiente para o capacitor de fluxo e os circuitos de tempo, mas não é usado para propelir o DeLorean; para isso, faz uso de um motor de combustão interna a gasolina comum para atingir a velocidade de 88 mph necessária para viajar no tempo.\n[…]\nPara o primeiro teste da máquina do tempo com Einstein dentro dela, Doc construiu um controlo remoto especial que ele conectou à máquina. Este controlo remoto é semelhante ao de um carrinho telecomandado e também possui um velocímetro digital que é sincronizado com o do DeLorean. Doc o usa para afastar o carro alguns metros e fazê-lo acelerar a 88 milhas por hora com o travão acionado.\n[…]\nEm 12 de novembro de 1955, Doc colocou um despertador de latão no painel de bordo do DeLorean, que ele acionou para que tocasse quando chegasse a hora de Marty dirigir o carro em direção ao raio na torre do relógio. Após o retorno de Marty a 1985, o despertador ainda permanece no painel do DeLorean em Back to the Future Part II, mas não desempenha mais nenhuma função.\n[…]\nAté abril de 2021, aproximadamente 115 carros DeLorean foram convertidos em réplicas da máquina do tempo de Back to the Future.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Volkswagen Fusca",
      "descricao": "Carro compacto de motor traseiro da Volkswagen, projetado na Alemanha nos anos trinta e conhecido mundialmente como Beetle."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na Alemanha, o Fusca ganhou o apelido de Käfer. Que bicho essa palavra alemã quer dizer?",
    "resposta": "Besouro",
    "distratores": [
      "Tartaruga",
      "Joaninha",
      "Formiga"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volkswagen_Beetle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
        "situacao": "ok",
        "texto": "The Volkswagen Beetle, officially the Volkswagen Type 1, is a small family car produced by the German company Volkswagen from 1938 to 2003. A global cultural icon known for its bug-like design, the Beetle is widely regarded as one of the most influential cars of the 20th century. Its production period of 65 years is the longest for any single generation of automobile.\n[…]\nOn 1 July 1974, the final Beetle was produced at the Wolfsburg plant after 11,916,519 units were made there. Following its discontinuation, Volkswagen ceased ongoing development of the Beetle in Germany. On 19 January 1978, the last Beetle sedan manufactured in Europe rolled off the production line at the Emden plant with the chassis number 1182034030. Despite its discontinuation in Germany, production of the Beetle continued in Brazil, Mexico, and Nigeria.\n[…]\nIn the 1960s and 1970s, Volkswagen augmented its product portfolio with several models to supplement the Beetle: the Type 3, the Type 4, and the NSU-based K70 sedan. None of these models achieved the level of success of the Beetle. The overdependence on a single model, which was experiencing a decline in popularity, meant that Volkswagen was in a financial crisis and needed government funding to produce the Beetle's replacement.\n[…]\nOfficial exportation of the Beetle to the Brazilian market began on 23 March 1953, with its parts imported from Germany. For the local market, the Type 1 was officially known \"Volkswagen Fusca\". In January 1959, Volkswagen shifted assembly to the new São Bernardo do Campo plant, initially maintaining 60 per cent of its German parts. However, by the mid-1960s, the cars had about 99.93 per cent Brazilian-made components.\n[…]\nBeetle – A brief history of a well-loved icon, published by Volkswagen Group, archived from the original on 14 January 2024.\n[…]\nThe In-Depth History of the Volkswagen Super Beetle"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volkswagen_Typ_1",
        "situacao": "ok",
        "texto": "O Volkswagen Typ 1, popularmente conhecido como Fusca (no Brasil), Carocha (em Portugal) ou VW Käfer (em linguagem coloquial na Alemanha), foi o primeiro modelo de automóvel fabricado pela companhia alemã Volkswagen, sendo produzido entre 1938 e 2003. Foi o carro mais vendido no mundo, ultrapassando em 1972 o recorde que pertencia até então ao Ford Modelo T, de origem estadunidense. Foi produzido \n[…]\nAinda dentro do objetivo de melhor identificar o carro com o original, a matriz alemã deu carta branca para que as filiais lançassem o carro nos seus mercados com o apelido que o primeiro modelo ganhou em cada um desses locais. Dessa forma, o carro foi lançado em setembro de 2012 como Fusca no Brasil, embora tenha mantido o nome Beetle em Portugal.\n[…]\nO Volkswagen Sedan recebeu alcunhas em quase todos os países em que foi vendido, normalmente versões locais para o nome do escaravelho (besouro), como em Portugal.\n[…]\nJá no Brasil, o nome Fusca é um pouco mais peculiar: a origem do nome no Brasil está relacionada com a pronúncia alemã da palavra Volkswagen, que significa \"carro(s) do povo\". O fonema da letra V em alemão é algo como \"fau\" e o W é \"vê\". Ao abreviar a palavra Volkswagen para VW, os alemães falavam \"fauvê\". Logo que o Fusca foi lançado na Alemanha, ficou comum a frase \"Isto é um VW\" (\"Das ist ein VW\"). A abreviação alemã \"fauvê\" logo se transformaria em \"fulque\" e \"fulca\"[carece de fontes]?.\n[…]\nSegundo o especialista Alexander Gromow, \"Desde que começaram a circular os primeiros Volkswagens, em 1950, também apareceu a corruptela da palavra Volkswagen passando pela influência da colônia alemã. (...)\n[…]\nEm Curitiba se fala 'fuqui' ou 'fuque', no Rio Grande do Sul é 'fuca'. Mas em São Paulo, talvez por uma questão de fonética, acrescentaram o 'S' na palavra e o Volkswagen virou Fusca.\"\n[…]\nVolkswagen New Beetle\n[…]\nVolkswagen Fusca (A5)\n[…]\nVolkswagen\n[…]\nQuatro Rodas. Grandes Brasileiros: VW Fusca 1500",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Volkswagen Fusca",
      "descricao": "Carro compacto de motor traseiro da Volkswagen, projetado na Alemanha nos anos trinta e conhecido mundialmente como Beetle."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 2003, depois de mais de vinte milhões de unidades, o último Fusca original saiu de uma fábrica em qual país?",
    "resposta": "México",
    "distratores": [
      "Brasil",
      "Alemanha",
      "Nigéria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volkswagen_Beetle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
        "situacao": "ok",
        "texto": "The Volkswagen Beetle, officially the Volkswagen Type 1, is a small family car produced by the German company Volkswagen from 1938 to 2003. A global cultural icon known for its bug-like design, the Beetle is widely regarded as one of the most influential cars of the 20th century. Its production period of 65 years is the longest for any single generation of automobile.\n[…]\nOn 30 July 2003 at 9:05 a.m., at the Puebla plant in Mexico, Volkswagen produced the final Type 1, after 21,529,464 examples were produced globally during its tenure. Its production span of 65 years is the longest of any single generation of automobile, and its total production of over 21.5 million is the most of any car of a single platform. To celebrate the occasion, Volkswagen marketed a series of 3,000 Beetles as \"Última Edición\" (Final Edition).\n[…]\nDespite production ending worldwide by 2003, the Beetle continues to have an enduring impact on society. In Mexico, the Beetle remained in production for 25 years after European manufacturing ceased, and has become an essential part of the country's culture. Nostalgia for the model led Volkswagen to introduce the New Beetle and a follow-up model, redesigned Golf-based versions that were in production from 1997 to 2019.\n[…]\nThe production of the Beetle was possible through agreements with companies like Chrysler in Mexico and the Studebaker-Packard Corporation, which assembled cars imported in complete knock-down form. The Beetle was introduced to the Mexican market in 1954, and began official production ten years later. The local market referred to the Beetle as the \"Vocho\".\n[…]\nThe introduction of a new taxi regulation in Mexico City, requiring only four-door vehicles to be permitted to prevent robberies, influenced Volkswagen's decision to end the production of the Beetle in 2003.\n[…]\nThe In-Depth History of the Volkswagen Super Beetle"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volkswagen_Typ_1",
        "situacao": "ok",
        "texto": "O Volkswagen Typ 1, popularmente conhecido como Fusca (no Brasil), Carocha (em Portugal) ou VW Käfer (em linguagem coloquial na Alemanha), foi o primeiro modelo de automóvel fabricado pela companhia alemã Volkswagen, sendo produzido entre 1938 e 2003. Foi o carro mais vendido no mundo, ultrapassando em 1972 o recorde que pertencia até então ao Ford Modelo T, de origem estadunidense. Foi produzido \n[…]\nEle era parte de uma edição comemorativa chamada Última Edición, limitada a 3000 carros. O último exemplar marcou o fim da longa produção de 65 anos do Fusca, durante a qual foram fabricados 21 529 464 unidades, números que fazem dele o modelo único mais produzido do mundo em todos os tempos.\n[…]\nA história do Fusca é uma das mais complexas e longas da história do automóvel. Em 22 junho de 1934, a União das Indústrias Automotivas (Verband der Automobilindustrie) firmou um contrato com o projetista Ferdinand Porsche para o desenvolvimento de um Volkswagen (\"carro do povo\"). Diferente da maioria dos outros carros, o projeto do Fusca envolveu várias empresas e até mesmo o governo de seu país, e levaria à fundação de uma fábrica inteira de automóveis no processo.\n[…]\nEm 2010 a Volkswagen anunciou que 2011 seria o último ano de fabricação do New Beetle, e que uma nova geração estava a caminho. Um dos objetivos estabelecidos pela fábrica era tornar o carro mais \"masculino\", e para tanto o carro seria mais baixo, largo e com formas menos arredondadas, mais próximas ao modelo original.\n[…]\nMais longo que seu antecessor, agora com 4 278 mm de comprimento, e 12 mm mais baixo, o carro é agora baseado na plataforma A5 (PQ35), a mesma do Volkswagen Jetta e do Golf de sexta geração. É fabricado junto com o Jetta, Golf Variant e o Jetta \"Clásico\" na fábrica da Volkswagen em Puebla, México.\n[…]\nVolkswagen New Beetle\n[…]\nVolkswagen Fusca (A5)\n[…]\n«Deutsche Welle – 1955: Fabricado o milionésimo Fusca». www.dw-world.de",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Volkswagen Fusca",
      "descricao": "Carro compacto de motor traseiro da Volkswagen, projetado na Alemanha nos anos trinta e conhecido mundialmente como Beetle."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1993, anos depois de sair de linha, o Fusca voltou a ser fabricado no Brasil a pedido de qual presidente?",
    "resposta": "Itamar Franco",
    "distratores": [
      "Fernando Collor",
      "José Sarney",
      "Fernando Henrique Cardoso"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Volkswagen_Fusca",
      "https://en.wikipedia.org/wiki/Volkswagen_Beetle"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Volkswagen_Fusca",
        "situacao": "ok",
        "texto": "O Volkswagen Typ 1, popularmente conhecido como Fusca (no Brasil), Carocha (em Portugal) ou VW Käfer (em linguagem coloquial na Alemanha), foi o primeiro modelo de automóvel fabricado pela companhia alemã Volkswagen, sendo produzido entre 1938 e 2003. Foi o carro mais vendido no mundo, ultrapassando em 1972 o recorde que pertencia até então ao Ford Modelo T, de origem estadunidense. Foi produzido \n[…]\nEm 2010 a Volkswagen anunciou que 2011 seria o último ano de fabricação do New Beetle, e que uma nova geração estava a caminho. Um dos objetivos estabelecidos pela fábrica era tornar o carro mais \"masculino\", e para tanto o carro seria mais baixo, largo e com formas menos arredondadas, mais próximas ao modelo original.\n[…]\nAinda dentro do objetivo de melhor identificar o carro com o original, a matriz alemã deu carta branca para que as filiais lançassem o carro nos seus mercados com o apelido que o primeiro modelo ganhou em cada um desses locais. Dessa forma, o carro foi lançado em setembro de 2012 como Fusca no Brasil, embora tenha mantido o nome Beetle em Portugal.\n[…]\nJá no Brasil, o nome Fusca é um pouco mais peculiar: a origem do nome no Brasil está relacionada com a pronúncia alemã da palavra Volkswagen, que significa \"carro(s) do povo\". O fonema da letra V em alemão é algo como \"fau\" e o W é \"vê\". Ao abreviar a palavra Volkswagen para VW, os alemães falavam \"fauvê\". Logo que o Fusca foi lançado na Alemanha, ficou comum a frase \"Isto é um VW\" (\"Das ist ein VW\"). A abreviação alemã \"fauvê\" logo se transformaria em \"fulque\" e \"fulca\"[carece de fontes]?.\n[…]\nVolkswagen New Beetle\n[…]\nVolkswagen Fusca (A5)\n[…]\n«Site da Volkswagen (Brasil)». www.volkswagen.com.br\n[…]\n«Deutsche Welle – 1955: Fabricado o milionésimo Fusca». www.dw-world.de\n[…]\nQuatro Rodas. Grandes Brasileiros: VW Fusca\n[…]\nQuatro Rodas. Grandes Brasileiros: VW Fusca 1500\n[…]\nMotor1.com. Carros para sempre: Fusca \"Itamar\" marcou a volta dos populares"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
        "situacao": "ok",
        "texto": "The Volkswagen Beetle, officially the Volkswagen Type 1, is a small family car produced by the German company Volkswagen from 1938 to 2003. A global cultural icon known for its bug-like design, the Beetle is widely regarded as one of the most influential cars of the 20th century. Its production period of 65 years is the longest for any single generation of automobile.\n[…]\nIn the 1960s and 1970s, Volkswagen augmented its product portfolio with several models to supplement the Beetle: the Type 3, the Type 4, and the NSU-based K70 sedan. None of these models achieved the level of success of the Beetle. The overdependence on a single model, which was experiencing a decline in popularity, meant that Volkswagen was in a financial crisis and needed government funding to produce the Beetle's replacement.\n[…]\nIn 1993, the brand stated that the Chico was intended to begin production in 1995. However, this plan was abandoned when the company realised that the project was commercially infeasible. Mays and Thomas recognised the difficulties faced by Volkswagen, and suggested the need for a vehicle that included the recognisable design of the Beetle as a potential solution to improve customer appeal. During development, this car was known as the \"Concept One\" project.\n[…]\nOfficial exportation of the Beetle to the Brazilian market began on 23 March 1953, with its parts imported from Germany. For the local market, the Type 1 was officially known \"Volkswagen Fusca\". In January 1959, Volkswagen shifted assembly to the new São Bernardo do Campo plant, initially maintaining 60 per cent of its German parts. However, by the mid-1960s, the cars had about 99.93 per cent Brazilian-made components.\n[…]\nBeetle – A brief history of a well-loved icon, published by Volkswagen Group, archived from the original on 14 January 2024.\n[…]\nThe In-Depth History of the Volkswagen Super Beetle"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Chevrolet Opala",
      "descricao": "Automóvel médio produzido pela General Motors do Brasil de 1968 a 1992, derivado do Opel Rekord."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a explicação mais difundida, o nome Opala junta o da marca alemã Opel com o de qual modelo americano da Chevrolet?",
    "resposta": "Impala",
    "distratores": [
      "Camaro",
      "Bel Air",
      "Malibu"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chevrolet_Opala"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chevrolet_Opala",
        "situacao": "ok",
        "texto": "O Chevrolet Opala é o primeiro automóvel de passeio desenvolvido e fabricado pela General Motors do Brasil, de 1968 a 1992.\n[…]\nLançado como concorrente do Ford Galaxie e do Dodge Dart, o Opala foi apresentado ao público brasileiro na edição de 1968 do Salão do Automóvel de São Paulo. Sua carroceria foi inspirada no alemão Opel Rekord, mas com estilo e mecânica do norte-americano Chevrolet Impala, o que fez a montadora batizá-lo com o acrônimo Opala (Opel+Impala). De forma rápida foi aceito pelo público, tornando-se um modelo consagrado.\n[…]\nPara aproveitar o conjunto mecânico e motorização existentes no país, a fábrica adotou uma configuração incomum no novo modelo, com a metade traseira baseada no Rekord, com peças construídas no sistema métrico, enquanto a metade dianteira aproveitou projetos do Chevrolet Impala americano,  feito no sistema imperial.\n[…]\nA motorização escolhida foi uma adaptação do Chevrolet Stovebolt, utilizado inicialmente em 1929 e obsoleto à época. Algumas versões do Opala passaram a oferecer como opcional o novo motor Chevrolet Turbo-Thrift. Os motores de seis cilindros foram adaptados na carroceria do Rekord, com peças do Impala. Durante toda sua vida útil, o motor sofreu um problema crônico de vazamento de óleo.\n[…]\nO motor de seis cilindros de 3.8L (230 pol³) utilizado no Opala deriva da 3a geração do veterano Stovebolt. Tinha por características um bloco leve, e sete mancais no eixo virabrequim. Originalmente destinava-se a alguns modelos da GM Americana, dentre eles: Chevrolet Nova, Impala, Chevelle, Camaro e alguns utilitários leves.\n[…]\nChevrolet Impala\n[…]\nOpala, um clássico brasileiro"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Lamborghini",
      "descricao": "Fabricante italiana de carros esportivos fundada por Ferruccio Lamborghini em 1963."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Miura, Diablo e Murciélago são carros da Lamborghini. Esses nomes homenageiam o quê?",
    "resposta": "Touros de tourada",
    "distratores": [
      "Ventos da Itália",
      "Cavalos de corrida",
      "Personagens de ópera"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lamborghini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lamborghini",
        "situacao": "ok",
        "texto": "Automobili Lamborghini S.p.A. (colloquially Lambo) is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.\n[…]\nTwo racing versions of the Diablo were built for the Diablo Supertrophy, a single-model racing series held annually from 1996 to 1999. In the first year, the model used in the series was the Diablo SVR, while the Diablo 6.0 GTR was used for the remaining three years. Lamborghini developed the Murciélago R-GT as a production racing car to compete in the FIA GT Championship, the Super GT Championship and the American Le Mans Series in 2004.\n[…]\nAutomóviles Lamborghini has produced two rebodied versions of the Diablo called the Eros and the Coatl. In 2015, Automóviles Lamborghini transferred the IP-rights to the Coatl foundation (chamber of commerce no. 63393700) in The Netherlands in order to secure these rights and to make them more marketable. The company has announced the production of a speedboat called the Lamborghini Glamour.\n[…]\n\"Principales cláusulas de los contratos con USA e Italia\" [Main Contract Terms between USA and Italy]. lamborghini-latinoamerica.com (in Spanish). Automóviles Lamborghini Latinoamérica S.A. de C.V. 5 August 1995. Archived from the original (JPG) on 2 October 2013. Retrieved 2 August 2012.\n[…]\n\"Volkswagen Aktiengesellschaft Facts and Figures 2012\" (PDF). Volkswagen AG. 11 June 2012. 1058.809.453.20. Archived from the original (PDF) on 2 October 2013. Retrieved 10 August 2012. Automobili Lamborghini S.p.A. (867 employees, founded in 1963, wholly owned by Audi AG since 1998)\n[…]\nLamborghini Car Register Archived 17 April 2021 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lamborghini",
        "situacao": "ok",
        "texto": "A Automobili Lamborghini (pronúncia italiana: [autoˈmɔːbili lamborˈɡiːni]), usualmente chamada de Lamborghini ou coloquialmente Lambo, é uma fabricante italiana de automóveis esportivos de luxo e de alto desempenho, criada originalmente para competir com a Ferrari. Desde 1998, faz parte do Grupo Volkswagen por meio de sua subsidiária Audi, onde intercambia tecnologias entre Audi R8 e os modelos ma\n[…]\nFerrucio era grande apreciador de touradas, por isso muitos dos seus carros tem nomes de touros famosos.\n[…]\nEm 1972 o Lamborghini Urraco permitiu à marca italiana entrar no segmento dos pequenos supercarros. Ainda nesse ano a Lamborghini vendeu 51% das suas ações a um empresário suíço, com os restantes 49% a serem entregues a outro suíço em 1974. Pelo meio, em 1973 o Miura foi substituído por um outro modelo que também fez história no mundo dos carros de características desportivas, o Countach.\n[…]\nEm 1987, a marca norte-americana Chrysler comprou a Lamborghini e, além do substituto do Countach, começou a preparar um motor para equipar carros de Fórmula 1. A estreia nesta competição automobilística ocorreu em 1989, mas nunca teve sucesso. Desde 1998 a Lamborghini pertence ao grupo Volkswagen. Já o substituto do Countach, o Diablo, foi apresentado em 1990 e obteve grande sucesso, mantendo-se em produção para além do ano 2000.\n[…]\nMuseo Lamborghini\n[…]\nDavid Jolliffe; Tony Willard (2004). Lamborghini: Forty Years (em inglês) Hardcover ed. St. Paul, Minnesota: Motorbooks International. ISBN 978-0-7603-1945-1. Consultado em 11 de outubro de 2012\n[…]\nJoe Sackey (2008). The Lamborghini Miura Bible (em inglês) Hardcover ed. Dorchester, Inglaterra: Veloce Publishing. ISBN 978-1-84584-196-6. Consultado em 11 de outubro de 2012\n[…]\n«Página oficial da Lamborghini» (em inglês)\n[…]\n«Lamborghini by KLD Concept (fotos, videos)» (em inglês)\n[…]\nRevista Classic Show. Na crise da década de 70, surge o Lamborghini Bravo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Mercedes-Benz",
      "descricao": "Marca alemã de automóveis criada em 1926 com a fusão da Daimler e da Benz, famosa pela estrela de três pontas."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Mercedes, que virou marca de carros, veio da família do empresário austríaco Emil Jellinek, que vendia os carros da Daimler. Quem era Mercedes?",
    "resposta": "A filha dele",
    "distratores": [
      "A esposa dele",
      "A mãe dele",
      "A irmã dele"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Merc%C3%A9d%C3%A8s_Jellinek",
      "https://en.wikipedia.org/wiki/Mercedes-Benz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Merc%C3%A9d%C3%A8s_Jellinek",
        "situacao": "ok",
        "texto": "Mercédès Adrienne Ramona Manuela Jellinek (16 September 1889 – 23 February 1929) was the daughter of Austrian automobile entrepreneur Emil Jellinek and his first wife Rachel Goggmann Cenrobert. She was born in Vienna. She is best known for her father having Daimler-Motoren-Gesellschaft's line of Mercedes cars named after her, beginning with the Mercedes 35 hp model of 1901.\n[…]\nIn addition, her father hung a large picture of her at the 1902 Paris Automobile exhibition. He even legally changed his name to Jellinek-Mercedes in 1903 after Daimler-Motoren-Gesellschaft registered Mercedes as a trademark in 1902. Mercedes is a Spanish female name meaning 'mercies' (Spanish: merced 'mercy', mercedes 'mercies').\n[…]\nBaron von Schlosser was ruined financially after the collapse and dissolution of Austro-Hungarian Monarchy and during the political and economic instabilities of short-lived Republic of German-Austria (1918–1919). Mercédès was begging on the streets for food. She eventually divorced her husband and left her children to marry Baron Rudolf von Weigl, a talented, but poor, sculptor. She played music and had a good soprano voice.\n[…]\nJellinek died in Vienna, from bone cancer, in 1929, at the age of 39, and was buried at the Vienna Central Cemetery in the family grave near her grandfather, the former chief rabbi of Vienna, Adolf Jellinek. In 1926, Daimler merged with Benz & Cie; although the company traded as Daimler-Benz, it gave the name \"Mercedes-Benz\" to its cars to preserve the respected Mercedes brand.\n[…]\nMedia related to Mercédès Jellinek at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mercedes-Benz",
        "situacao": "ok",
        "texto": "Mercedes-Benz (German pronunciation: [mɛʁˌtseːdəs ˈbɛnts, -dɛs -] ), commonly referred to simply as Mercedes and occasionally as Benz, is a German luxury automotive brand that was founded in 1926. Mercedes-Benz AG (a subsidiary of the Mercedes-Benz Group, established in 2019) is based in Stuttgart, Baden-Württemberg, Germany. Mercedes-Benz AG manufactures luxury vehicles and light commercial vehic\n[…]\nEmil Jellinek, an Austrian automobile entrepreneur who worked with DMG, registered the trademark in 1902, naming the 1901 Mercedes 35 hp after his daughter Mercédès Jellinek. Jellinek was a businessman and marketing strategist who promoted \"horseless\" Daimler automobiles among the highest circles of society. At the time, it was a meeting place for the haute volée of France and Europe, especially in winter.\n[…]\nSince December 2021, the Mercedes-Benz Trucks division is part of the Daimler Truck company and includes other sub-companies that were part of the DaimlerChrysler merger. Gottlieb Daimler sold the world's first truck in 1886. Their first factory to be built outside Germany after World War II was in Argentina. They originally built trucks, many of which were modified by third parties to be used as buses, popularly named Colectivo.\n[…]\nMercedes-Benz has been producing buses since 1895 in Mannheim, Germany. Since 1995, the brands of Mercedes-Benz's buses and coaches are under the umbrella of EvoBus GmbH, since December 2021 belonging to Daimler Truck AG. EvoBus, through its regional subsidiaries, markets them in European countries, while in other regions of the world marketing and sales duties are passed to regional subsidiaries of Daimler Truck.\n[…]\n2022 will be the year in which Daimler has said that the company will have invested $11 billion to ensure that every Mercedes-Benz has a fully electric or hybrid version available on the market.\n[…]\nBertha Benz\n[…]\nMercedes-AMG"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Merc%C3%A9d%C3%A8s_Jellinek",
        "situacao": "ok",
        "texto": "Mercédès Adrienne Manuela Ramona von Weigl, conhecida como Mercédès, nascida Jellinek, divorciada Schlosser (Viena, 16 de setembro de 1889 – 23 de fevereiro de 1929) foi filha do diplomata e empresário austríaco Emil Jellinek e de sua esposa Rachel Goggmann Cenrobert. A ela se deve o nome da marca de automóveis Mercedes, que, em 1926, quando a Daimler-Motoren-Gesellschaft fundiu-se com a Benz & Ci\n[…]\nSeu nome de batismo, inspirado na princesa homónima de Astúrias, Espanha, María de las Mercedes de Borbón y Habsburgo-Lorena, significa em espanhol \"graças\".\n[…]\nEmil Jellinek também quis se decorar com o nome de sua filha e pediu a mudança de seu sobrenome em Jellinek-Mercédès. Em junho de 1903, seu pedido foi concedido. Emil Jellinek-Mercédès comentou a decisão de que \"provavelmente a primeira vez que um pai carregou o nome de sua filha\".\n[…]\nGuy Jellinek-Mercédès: Mon père, Monsieur Mercédès. Editions France-Empire, Paris 1961.\n[…]\nGuy Jellinek-Mercédès: Mein Vater, der Herr Mercedes. P. Neff, Wien 1962. (Aus dem Französischen vom Verfasser übersetzt.)\n[…]\nMercedes-Benz Museum – Mythos 2\n[…]\nAutomobilmuseum Dr. Carl Benz, Ladenburg: Meilensteine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Metrô de Londres",
      "descricao": "Sistema de metrô de Londres, aberto em 1863 com a Metropolitan Railway."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os londrinos chamam o metrô da cidade de Tube, que quer dizer tubo. De onde vem esse apelido?",
    "resposta": "Túneis redondos e estreitos",
    "distratores": [
      "Antigos tubos de correio",
      "Canos das locomotivas",
      "Esgotos da cidade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/London_Underground"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/London_Underground",
        "situacao": "ok",
        "texto": "The London Underground (also known simply as the Underground or as the Tube) is a rapid transit system serving Greater London and parts of the adjacent home counties of Buckinghamshire, Essex, and Hertfordshire in England. Managed by Transport for London (TfL), the network spans 11 lines and 250 miles (400 km) of track, serving 272 stations.\n[…]\nLondon Underground's eleven lines total 250 miles (402 km) in length, making it the thirteenth longest metro system in the world. These are made up of the sub-surface network and the deep-tube lines.\n[…]\nArt on the Underground was launched in 2000 to revive London Underground as a patron of the arts. Today, commissions range from the pocket Tube map cover, to temporary artworks, to large-scale permanent installations in stations.\n[…]\nThe Underground (including several fictitious stations) has appeared in many movies and television shows, including Skyfall, Death Line, Die Another Day, Sliding Doors, An American Werewolf in London, Creep, Tube Tales, Sherlock and Neverwhere. The London Underground Film Office received more than 200 requests to film in 2000. The Underground has also featured in music such as the Jam's \"Down in the Tube Station at Midnight\" and in literature such as the graphic novel V for Vendetta.\n[…]\nPopular legends about the Underground being haunted persist to this day. In 2016, British composer Daniel Liam Glyn released his concept album Changing Stations based on the 11 main tube lines of the London Underground network.\n[…]\nCharles Yerkes (1837–1905) was an American who founded the Underground Electric Railways Company of London (UERL) in 1902, which opened three tube lines and electrified the District Railway.\n[…]\nCarto.metro Track Map Archived 9 June 2021 at the Wayback Machine (more detailed; shows Underground, Overground, Crossrail, DLR, and mainline railway tracks as well)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metropolitano_de_Londres",
        "situacao": "ok",
        "texto": "Metropolitano de Londres, também conhecido como Metro de Londres (português europeu) ou Metrô de Londres (português brasileiro), ou no seu nome original London Underground, conhecido ainda por The Tube, Tube, The Underground ou Underground, é um sistema de metropolitano que serve grande parte da Grande Londres e as áreas vizinhas de Essex, Hertfordshire e Buckinghamshire, no Reino Unido, e constit\n[…]\nFoi também a primeira rede de metropolitano a operar com trens ou comboios elétricos. É geralmente referido como the Underground ou the Tube — um termo mais recente, devido à forma dos túneis do metrô, em forma de tubo — porém, cerca de 55% da rede do metropolitano é à superfície (apesar de o próprio nome do metropolitano ser Underground, que significa subterrâneo).\n[…]\nA 30 de Julho de 1900 a Central London Railway (agora conhecida como Central line) foi aberta, realizando viagens de Bank para Shepherd's Bush, e vice-versa. Esta linha recebeu a alcunha de \"Twopenny Tube\" (\"Metropolitano de Dois Centavos\"), pela sua tarifa e pelos seus túneis cilíndricos; a alcunha de \"Tube\" foi eventualmente transferida para o sistema de metropolitano completo, o Metropolitano de Londres. Uma interface foi construída no C&SLR, estação de Bank.\n[…]\nO Metropolitano de Londres utiliza carruagens e outro material circulante construídos entre 1972 e 2005. O material circulante nas linhas de pouca profundidade e de superfície é identificado por uma letra (tal como o Material A, usado nas linhas de metropolitano), enquanto que o material que circula nos túneis mais profundos (os túneis mais pequenos, em forma de tubo) é identificado pelo ano em que foi desenhado (por exemplo as carruagens de 1996 usadas na Jubilee line).\n[…]\nWolmar, Christian (15 de novembro de 2002). Down the Tube: the Battle for London's Underground. [S.l.]: Aurum Press. 192 páginas. ISBN 1854108727\n[…]\nArtigo do mayor da cidade de Londres no PPP",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Cutty Sark",
      "descricao": "Clíper britânico construído em 1869, preservado em Greenwich, Londres."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O veleiro Cutty Sark leva o nome de uma camisola curta usada por uma bruxa num poema de qual escritor escocês?",
    "resposta": "Robert Burns",
    "distratores": [
      "Walter Scott",
      "Robert Louis Stevenson",
      "Arthur Conan Doyle"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cutty_Sark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cutty_Sark",
        "situacao": "ok",
        "texto": "Cutty Sark is a British clipper ship. Built on the River Leven, Dumbarton, Scotland in 1869 for the Jock Willis Shipping Line, she was one of the last tea clippers to be built and one of the fastest, at the end of a long period of design development for this type of vessel, which ended as steamships took over their routes. She was named after the fictional witch who wore only a short shift (a \"cut\n[…]\nThe ship was named after Cutty-sark, the nickname of the witch Nannie Dee in Robert Burns's 1791 poem Tam o' Shanter. The ship's figurehead, the original of which has been attributed to carver Fredrick Hellyer of Blackwall, is a stark white carving of a bare-breasted Nannie Dee with long black hair holding a grey horse's tail in her hand.\n[…]\nEventually steamships began to dominate the wool trade too and it ceased to be profitable for a sailing ship. In 1895 Jock Willis sold Cutty Sark to the Portuguese firm Joaquim Antunes Ferreira for £1,250. She was renamed Ferreira after the firm. Her crews referred to her as Pequena Camisola (little shirt, a straight translation of the Scots cutty sark).\n[…]\nDowman died in 1936 and the ship was given by Catharine Dowman, his widow, along with £5,000 for maintenance, to the Incorporated Thames Nautical Training College, HMS Worcester at Greenhithe. She was towed to Greenhithe by tug. The ship was crewed by cadets, 15-year-old Robert Wyld steering the ship during the voyage.\n[…]\n\"Cutty Sark\"\n[…]\nLubbock, Basil (1924). The Log of the Cutty Sark. Glasgow, Scotland: James Brown and Son.\n[…]\nBrettle, Robert E. (1969). The Cutty Sark, Her Designer and Builder, Hercules Linton, 1836–1900. Cambridge, England: W. Heffer & Sons.\n[…]\nVilliers, Alan (1953). The Cutty Sark – Last of a Glorious Era. Hodder & Stoughton. p. 96.\n[…]\nMaritimeQuest Cutty Sark Pages\n[…]\nHNSA Web Page: Cutty Sark Archived 4 October 2015 at the Wayback Machine\n[…]\nBelarusian memorial coins with Cutty Sark on reverse side"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cutty_Sark",
        "situacao": "ok",
        "texto": "O Cutty Sark é um clipper (veleiro) britânico. Da classe \"extreme clipper\", é a última das embarcações de transporte de chá, preservada como símbolo de uma era.\n[…]\nFoi construído em 1869 em Dumbarton, no rio Clyde (Escócia), nos estaleiros Scott & Linton, com projeto do engenheiro naval Hercules Linton. Foi lançado ao mar em 23 de Novembro desse mesmo ano, tendo efetuado a sua primeira viagem em Fevereiro de 1870. Deve o seu nome  à indumentária da personagem \"Nannie\", uma bruxa dançarina, do poema  \"Tam o'Shanter\", de Robert Burns, publicado em 1791.\n[…]\nEm 22 de Julho de 1895, foi vendido à empresa portuguesa Joaquim Antunes Ferreira & C.ª, por 1 250 libras esterlinas, sendo rebaptizado como \"Ferreira\". A sua tripulação portuguesa, não obstante, referia-se ao clipper como \"Pequena Camisola\" que é a tradução da expressão escocesa \"Cutty Sark\".\n[…]\nO Cutty Sark tem também seu eco na literatura graças ao poema de Hart Crane, \"The Bridge\", publicado em 1930.\n[…]\nA embarcação arvora uma bandeira com a legenda \"JKWS\", o código que representa Cutty Sark no Código internacional de sinais, introduzido em 1857.\n[…]\nA embarcação inspirou a marca de whisky com o mesmo nome. Uma imagem do veleiro figura no rótulo e antigamente, a marca patrocinava uma corrida de clipper conhecida como \"Cutty Sark Tall Ships' Race\".\n[…]\nO Cutty Sark é um das três últimas embarcações sobreviventes da era dos clippers. Possui estrutura metálica e coberta em pranchas de madeira.\n[…]\n«Site oficial do Cutty Sark.» (em inglês)\n[…]\n«Cutty Sark: a lenda e o mito. in: Revista da Armada.»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Estrada de Ferro Mauá",
      "descricao": "Primeira ferrovia do Brasil, construída por Irineu Evangelista de Sousa entre o porto de Mauá e Fragoso, no Rio de Janeiro."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1854, a primeira locomotiva a rodar no Brasil ganhou um nome em homenagem à esposa do futuro Barão de Mauá. Que nome era esse?",
    "resposta": "Baroneza",
    "distratores": [
      "Imperatriz",
      "Leopoldina",
      "Marquesa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Estrada_de_Ferro_Mau%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Estrada_de_Ferro_Mau%C3%A1",
        "situacao": "ok",
        "texto": "A Estrada de Ferro Mauá, como é conhecida hoje em dia, e oficialmente denominada Imperial Companhia de Navegação a Vapor e Estrada de Ferro de Petropolis, foi a primeira ferrovia a ser estabelecida no Brasil, a terceira da América do Sul.\n[…]\nA ferrovia foi construída para conectar o Porto de Mauá, na Baía de Guanabara, ao sopé da Serra da Estrela, na região de Petrópolis, no estado do Rio de Janeiro. O objetivo principal era facilitar o transporte de cargas e passageiros do interior do estado para o Rio de Janeiro, especialmente para o transporte de café, um dos principais produtos de exportação do Brasil na época.\n[…]\nMais tarde foi prolongada, chegando a 15,19 km. Foi construída pelo empresário brasileiro Irineu Evangelista de Sousa, o Barão de Mauá.\n[…]\nO trecho ferroviário seguia da Estação Guia de Pacobaíba (antiga Estação Mauá, a estação recebeu esse nome após ser arrendada pela Estrada de Ferro Príncipe do Grão Pará), no atual município de Magé, até Fragoso, e posteriormente à localidade de Inhomirim, também conhecida como Raiz da Serra.\n[…]\nApesar do sucesso inicial e da importância histórica, a Estrada de Ferro Mauá enfrentou diversos desafios, incluindo dificuldades financeiras e concorrência com outras modalidades de transporte. Com o passar do tempo, a linha foi sendo ampliada e modernizada, integrando-se a outras ferrovias e continuando a desempenhar um papel vital na infraestrutura de transporte do Brasil.\n[…]\nEntretanto, ainda resta um pequeno trecho da primeira ferrovia do Brasil com tráfego de trens (Linha Vila Inhomirim, da SuperVia) entre as estações Piabetá e Vila Inhomirim.\n[…]\nBaroneza\n[…]\n«Breve História da Estrada de Ferro Mauá»\n[…]\n«Estrada de Ferro Mauá e outras no site Estações Ferroviárias do Brasil»"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "SOS",
      "descricao": "Sinal internacional de socorro em código Morse, formado por três pontos, três traços e três pontos, adotado em 1906."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Muita gente acha que o sinal de socorro SOS, usado por navios, é a abreviação de uma frase. Por que ele foi escolhido, na verdade?",
    "resposta": "Simples em código Morse",
    "distratores": [
      "Sigla de Save Our Souls",
      "Sigla de Save Our Ship",
      "Iniciais de um inventor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/SOS"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/SOS",
        "situacao": "ok",
        "texto": "SOS is a Morse code distress signal ( ▄ ▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄ ▄ ▄ ), used internationally, originally established for maritime use. In formal notation SOS is written with an overscore line (SOS), to indicate that the Morse code equivalents for the individual letters of \"SOS\" are transmitted as an unbroken sequence of three dots / three dashes / three dots, with no spaces between the letters.\n[…]\nIn International Morse Code three dots form the letter \"S\" and three dashes make the letter \"O\", so \"S O S\" became a common way to remember the order of the dots and dashes.\n[…]\nIn both the 1 April 1905 German law and the 1906 international regulations, the distress signal is specified as a continuous Morse code sequence of three dots / three dashes / three dots, with no mention of any alphabetic equivalents.\n[…]\nAdditional warning and distress signals followed the introduction of SOS. On 20 January 1914, the London International Convention on Safety of Life at Sea adopted as the \"Safety Signal\" the Morse code sequence \"TTT\"  ▄▄▄  ▄▄▄  ▄▄▄  (three \"T's\" ( ▄▄▄ ))—spaced normally as three letters so as not to be confused with the three dashes of the letter O ( ▄▄▄ ▄▄▄ ▄▄▄ )—and used for messages to ships \"involving safety of navigation and being of an urgent character\" but short of an emergency.\n[…]\nWith the development of audio radio transmitters, there was a need for a spoken distress phrase, and \"Mayday\" (from French m'aider \"help me\") was adopted by the 1927 International Radio Convention as the spoken equivalent of SOS. For \"TTT\", the equivalent spoken signal is \"Sécurité\" (from French sécurité \"safety\") for navigational safety, while \"Pan-pan\" (from French panne \"breakdown\"; Morse \"XXX\") signals an urgent but not immediately dangerous situation.\n[…]\nProsigns for Morse code"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/SOS",
        "situacao": "ok",
        "texto": "A palavra SOS é um sinal informativo de telecomunicações utilizado para solicitar auxílio em situações de necessidade de socorro. Quando no formato de código Morse, esse sinal é grafado (▄ ▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄ ▄ ▄) e transmitido segundo esse padrão.\n[…]\nSOS, quando foi acordado pela primeira vez pela Convenção Internacional de Radiotelegrafia em 1906, era apenas uma sequência distinta de código Morse e inicialmente não era uma abreviação. Mais tarde, no uso popular, tornou-se associado a frases mnemônicas como \"Save Our Souls\" e \"Save Our Ship\". Além disso, devido ao seu alto uso em emergências, a frase \"SOS\" entrou no uso geral para indicar informalmente uma crise ou a necessidade de ação.\n[…]\nAssim como ocorria na telegrafia usada em terra, o código Morse também era o método usado pelos operadores de comunicações das embarcações para a transmissão sem fio de informações diversas. Mas qual sinal de socorro era universalmente entendido?\n[…]\nFoi inclusive por esta razão que em 15 de abril de 1912 uma enorme embarcação transmitiu o sinal CQD-MGY em modo broadcast: o grupo de letras \"MGY\" era o código de identificação do navio Titanic.\n[…]\nOu seja: ao invés de letras, na verdade esse sinal é apenas um grupo de pontos e traços em formato de código Morse, e isso foi escolhido porque é um padrão gráfico bastante simples e inconfundível. No entanto, pelo fato de esse sinal codificado poder ser descodificado e lido como \"SOS\", essa palavra passou a ser tratada como um mnemônico para aquele sinal codificado.\n[…]\nPorém, o uso do sinal \"SOS\" foi oficialmente descontinuado em 1 de janeiro de 1998: ele foi substituído por modernos sistemas de comunicações via satélite e uso de mensagens de voz, ao invés de código Morse.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "USS Constitution",
      "descricao": "Fragata de madeira de três mastros da Marinha dos Estados Unidos, lançada em 1797 e apelidada de Old Ironsides."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A fragata americana USS Constitution é de madeira, mas ganhou o apelido de Old Ironsides, lados de ferro. Por quê?",
    "resposta": "Balas de canhão ricocheteavam",
    "distratores": [
      "Casco forrado de ferro",
      "Canhões de ferro fundido",
      "Âncoras de ferro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/USS_Constitution"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/USS_Constitution",
        "situacao": "ok",
        "texto": "USS Constitution, also known as Old Ironsides, is a three-masted wooden-hulled heavy frigate of the United States Navy. She is the second oldest naval vessel still in commission, and the oldest still afloat. She was launched in 1797, one of six original frigates authorized for construction by the Naval Act of 1794 and the third constructed.\n[…]\nHull had surprised the crew of Guerriere with his ship's heavier broadsides and sailing ability. Adding to their astonishment, many of Guerriere's shots had rebounded harmlessly off Constitution's hull. An American sailor reportedly exclaimed \"Huzzah! Her sides are made of iron!\" and Constitution acquired the nickname \"Old Ironsides\".\n[…]\nThe surviving crew members were carried back to America, where Constitution was put in ordinary once again, this time at the Brooklyn Navy Yard, in January 1851.\n[…]\nThe restoration continued the focus toward keeping her appearance of 1812 by replacing her upper sides so that she now resembles what she looked like after her triumph over Guerriere, when she gained her nickname \"Old Ironsides\". The crew of Constitution under Commander Matt Bonner sailed Constitution under her own power on 19 August 2012, the anniversary of her victory over Guerriere. Bonner was Constitution's 72nd commanding officer.\n[…]\nFitz-Enz, David G. (2004). Old Ironsides: Eagle of the Sea: The Story of the USS Constitution. Lanham: Taylor Trade Publishing. ISBN 978-1-58979-160-2. OCLC 54778453.\n[…]\nJennings, John (1966). Tattered Ensign The Story of America's Most Famous Fighting Frigate, U.S.S. Constitution. Thomas Y. Crowell. OCLC 1291484.\n[…]\nScientific American, 7 January 1882, \"Old Ironsides\" Retired. pp 5.\n[…]\nConstitution and Grebe in Houston, 1932 Archived 3 November 2012 at the Wayback Machine\n[…]\nMaritimequest Constitution Photo Gallery\n[…]\nUss Constitution Museum, World Tour Article"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/USS_Constitution",
        "situacao": "ok",
        "texto": "USS Constitution é uma fragata da Marinha dos Estados Unidos, sendo o mais antigo navio de guerra ainda em serviço. O Constitution, batizado pelo presidente George Washington, foi lançado ao mar em 1797 com a missão de proteger os navios cargueiros norte-americanos que temiam a Quase-guerra, mas só ganhou destaque durante a Guerra de 1812, quando afundou cinco navios da poderosa Marinha Real Britâ\n[…]\nFoi lançado em 1797, uma das seis fragatas originais autorizadas para construção pelo Ato Naval de 1794 e a terceira construída. O nome \"Constituição\" estava entre os dez nomes apresentados ao presidente George Washington pelo secretário de guerra Timothy Pickering em março de 1795 para as fragatas que seriam construídas.\n[…]\nJoshua Humphreys projetou as fragatas para serem os navios capitais da jovem Marinha, e assim os navios irmãos eram maiores e mais fortemente armados e construídos do que as fragatas padrão do período. Foi construído no estaleiro de Edmund Hartt, no North End de Boston, Massachusetts. Seus primeiros deveres foram fornecer proteção para a marinha mercante americana durante a Quase-Guerra com a França e derrotar os piratas bárbaros na Primeira Guerra Bárbara.\n[…]\nConstitution é mais conhecido por suas ações durante a Guerra de 1812 contra o Reino Unido, quando capturou numerosos navios mercantes e derrotou cinco navios de guerra britânicos: HMS Guerriere, Java, Pictou, Cyane e Levant. A batalha com Guerriere lhe rendeu o apelido de \"Old Ironsides\" e a adoração pública que repetidamente a salvou do sucateamento. Continuou a servir como capitânia nos esquadrões do Mediterrâneo e da África, e circulou pelo mundo na década de 1840.\n[…]\nConstitution and Grebe em Houston, 1932\n[…]\nGaleria de fotos da Constitution",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Módulo lunar Apollo",
      "descricao": "Nave de pouso de dois estágios do programa Apollo, que levou astronautas da órbita lunar à superfície da Lua."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1969, o módulo lunar da Apollo 11, que pousou com Armstrong e Aldrin, foi batizado com o nome de uma ave. Qual?",
    "resposta": "Eagle, a águia",
    "distratores": [
      "Falcon, o falcão",
      "Hawk, o gavião",
      "Raven, o corvo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Apollo_11"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Apollo_11",
        "situacao": "ok",
        "texto": "Apollo 11 (July 16–24, 1969) was the American spaceflight that first landed humans on the Moon, and the fifth crewed mission of NASA's Apollo program. The mission was crewed by Commander Neil Armstrong, Command Module Pilot Michael Collins, and Lunar Module Pilot Edwin \"Buzz\" Aldrin, all of whom were on their second and final spaceflight.\n[…]\nAldrin, Armstrong and Collins decided the Eagle and the Moon would be in their natural colors, and decided on a blue and gold border. Armstrong was concerned that \"eleven\" would not be understood by non-English speakers, so they went with \"Apollo 11\", and they decided not to put their names on the patch, so it would \"be representative of everyone who had worked toward a lunar landing\".\n[…]\nRoughly two hours later, at 17:54:00 UTC, the Apollo 11 crew on the surface safely lifted off in Eagle's ascent stage to rejoin Collins aboard Columbia in lunar orbit. Film taken from the LM ascent stage upon liftoff from the Moon reveals the American flag, planted some 25 feet (8 m) from the descent stage, whipping violently in the exhaust of the ascent stage engine. Aldrin looked up in time to witness the flag topple: \"The ascent stage of the LM separated ...\n[…]\nIn 2015, after Armstrong died in 2012, his widow contacted the National Air and Space Museum to inform them she had found a white cloth bag in one of Armstrong's closets. The bag contained various items, which should have been left behind in the Lunar Module Eagle, including the 16mm Data Acquisition Camera that had been used to capture images of the first Moon landing. The camera is currently on display at the National Air and Space Museum.\n[…]\nApollo 11 in real time\n[…]\nApollo 11, 12, and 14 Traverses, at the Lunar and Planetary Institute\n[…]\nThe Eagle Has Landed: The Flight of Apollo 11 (1969) (transcript) from US National Archives (via YouTube)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Apollo_11",
        "situacao": "ok",
        "texto": "Apollo 11 foi um voo espacial tripulado norte-americano responsável pelo primeiro pouso na Lua. Os astronautas Neil Armstrong e Buzz Aldrin alunissaram o módulo lunar Eagle em 20 de julho de 1969 às 20h17min UTC. Armstrong tornou-se o primeiro humano a pisar na superfície lunar seis horas depois já no dia 21, seguido por Aldrin vinte minutos depois. Os dois passaram por volta de duas horas e quinz\n[…]\nOs nomes Snowcone para o Módulo de Comando e Haystack para o Módulo Lunar foram usados em comunicações internas e externas durante os estágios iniciais de planejamento. O Módulo Lunar foi oficialmente nomeado de Eagle seguindo o tema de águia muito presente no emblema. Scheer sugeriu que o Módulo de Comando fosse nomeado Columbia devido o Columbiad, o canhão gigante que lançou a nave espacial do romance De la Terre à la Lune de Júlio Verne.\n[…]\nO módulo lunar da Apollo 10 voou a quinze quilômetros de distância do local em maio de 1969 e relatou que era aceitável.\n[…]\nArmstrong confirmou a finalização das checagens pós-alunissagem realizadas por Aldrin dizendo \"Braço do motor está desligado\"; em seguida ele respondeu a Charles Duke, o CAPCOM, informando que \"Houston, aqui é Base da Tranquilidade. O Eagle pousou\". A mudança inesperada da chamada de Armstrong de \"Eagle\" para \"Base da Tranquilidade\" enfatizou aos ouvintes que a alunissagem da Apollo 11 fora bem-sucedida.\n[…]\nAldrin adicionou:\n[…]\nArmstrong concluiu:\n[…]\nA Casa da Moeda revelou em janeiro de 2019 o desenho final das moedas, feito pelo designer Gary Cooper e pelo escultor Joseph Menna: um lado mostra uma pegada na superfície lunar junto com os nomes dos três programas espaciais que levaram à primeira alunissagem (Mercury, Gemini e Apollo), do outro lado está uma representação do reflexo do visor do capacete de Aldrin tirada de uma das fotos da missão em que é possível ver sua sombra, a bandeira dos Estados Unidos, Armstrong e o Eagle.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Tuk-tuk",
      "descricao": "Veículo motorizado de três rodas, em geral semiaberto, usado como táxi em países tropicais, sobretudo no sul da Ásia."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em vários países da Ásia, o triciclo motorizado usado como táxi é chamado de tuk-tuk. O que esse nome imita?",
    "resposta": "O barulho do motor",
    "distratores": [
      "Uma dança tailandesa",
      "O grito dos motoristas",
      "Um deus hindu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Auto_rickshaw"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Auto_rickshaw",
        "situacao": "ok",
        "texto": "An auto rickshaw is a motorized version of the pulled rickshaw or cycle rickshaw. Often called a tuk tuk, it is usually a three-wheeled vehicle, powered by an engine. They use a variety of fuels, with the most common being petrol, compressed natural gas, liquefied petroleum gas, and electricity. They are known by many names in many countries.\n[…]\nIn the 1930s Japan, which was the most industrialized country in Asia at the time, encouraged the development of motorized vehicles including less expensive three-wheeled vehicles based on motorcycles. The Mazda-Go, a 3-wheel open \"truck\" released in 1931, is often considered the first of what became auto rickshaws.\n[…]\nMost three-wheelers are available as hired vehicles, with some being used for hauling goods, as advertising vehicles, or for private company usage. Bajaj enjoys a virtual monopoly in the island, with its agent being David Pieries Motor Co, Ltd. A few three-wheelers in Sri Lanka have distance meters, with it becoming more and more common in the capital city. However, the vast majority of fares are negotiated between the passenger and driver.\n[…]\nA number of tuk-tuks (250 in 2013 according to the Paris Prefecture) are used as an alternative tourist transport system in Paris, some of them being pedal-operated with electric motor assist. They are not yet fully licensed to operate and await customers on the streets. Vélotaxis were common during the Occupation years in Paris due to fuel restrictions.\n[…]\nUber allows auto rickshaws to be used by drivers.\n[…]\nA company using auto rickshaws called Tuk Tuk Taxi operates in Wānaka in the South Island.\n[…]\nA company using auto rickshaws called Kiwi Tuk Tuk used to operate in Auckland.\n[…]\nCNG auto rickshaws have started to appear in huge numbers in many Pakistani cities.\n[…]\nElectric rickshaw\n[…]\nThe India 1000 –  an article in Wired about auto rickshaw racing"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Autorriquix%C3%A1",
        "situacao": "ok",
        "texto": "O autorriquixá (português brasileiro) ou autorriquexó (português europeu) (em Moçambique: txopela),[carece de fontes]? também conhecido como mototriciclo, tricarro, tuk-tuk ou tuque-tuque, é um meio de transporte, um modelo de riquixá ou de triciclo motorizado, com cabine para transporte de passageiros ou mercadorias, muito utilizado em países em desenvolvimento, sobretudo no sul e no Sudeste Asiá\n[…]\nTriciclo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Volkswagen Passat",
      "descricao": "Sedã médio da Volkswagen lançado em 1973, também fabricado no Brasil entre 1974 e 1988."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Passat, Jetta e Scirocco, modelos da Volkswagen, têm nomes inspirados no mesmo tipo de fenômeno. Qual?",
    "resposta": "Ventos",
    "distratores": [
      "Rios",
      "Estrelas",
      "Terremotos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volkswagen_Passat",
      "https://en.wikipedia.org/wiki/Volkswagen_Jetta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Passat",
        "situacao": "ok",
        "texto": "The Volkswagen Passat is a nameplate of large family cars (D-segment) manufactured and marketed by the German automobile manufacturer Volkswagen since 1973 and also marketed variously as the Dasher, Santana, Quantum, Magotan, Corsar and Carat — in saloon, estate, and hatchback body styles. With sales of 34 million units worldwide, the Passat is the fourth best-selling automobile of all time.\n[…]\nThe B3 Passat was heavily facelifted in 1993, and despite being designated B4, it was not an all-new model. The facelift revised external body panels except for the roof and glasshouse, with the most obvious exterior change seeing the reintroduction of a grille to match the style of the other same-generation Volkswagen models of the era, such as the Mk3 Golf and Jetta.\n[…]\nVolkswagen built 20 examples of a fuel-cell Passat Lingyu in mid-2008 to be presented at the 2008 Beijing Olympics.\n[…]\nFollowing the 2022 model year, Volkswagen discontinued the Passat in North America due to slow sales.\n[…]\nThe Passat nameplate was first used in China in 2011, when SAIC Volkswagen began selling the North American Passat NMS.\n[…]\nIn October 2018, the Chinese market 2019 Passat was unveiled, using the same Volkswagen Group MQB platform as the European Passat and VW Magotan, but it is not directly based on them. As a result, despite the high physical resemblance between the Chinese and North American Passats (and both being called Passat NMS), they have now diverged and are no longer using the same platform.\n[…]\nThe Volkswagen Magotan (China) produced by FAW-VW and Volkswagen Passat NMS (China) produced by SAIC-VW are considered to be near-equivalents, using the same MQB platform and an identical wheelbase of 2871mm, but with slightly different dimensions and different styling. The latest generation based on the B9 version of the European Passat will be launched in 2024."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Jetta",
        "situacao": "ok",
        "texto": "The Volkswagen Jetta () is a compact car/small family car manufactured and marketed by Volkswagen since 1979. Positioned to fill a sedan niche slightly above the Golf hatchback, it has been marketed over seven generations, variously as the Atlantic, Vento, Bora, City Jetta, Jetta City, GLI, Jetta, Clasico, and Sagitar (in China).\n[…]\nNumerous sources note that the Jetta nameplate derives from the Atlantic \"jet stream\" during a period when Volkswagen named its vehicles after prominent winds and currents (e.g. the Passat after the German word for trade wind, the Bora after bora, and the Scirocco after sirocco).\n[…]\nThe Volkswagen Lavida has been produced by SAIC-VW since 2008. It was based on a heavily modified FAW-VW first generation Bora (which itself was a rebadged Mk4 Jetta). In 2018, it also switched to the MQB A1 platform, similar to the 2018 Bora and global Mk7 Jetta.\n[…]\nAccording to Carsalesbase.com, FAW-Volkswagen's Jetta A2 model has sold over 2.4 million cars.\n[…]\nThe third known Jetta in China is known as the Sagitar, and has been produced since April 2006. The Sagitar name was used for the fifth, sixth, and seventh generation Jetta in China, as FAW-Volkswagen already used the Jetta name on one of its models.\n[…]\nThe Volkswagen New Jetta was introduced in March 2013, replacing the Chinese-built A2 model, and is a China-built exclusive. The New Jetta was paired with two new Volkswagen engines under the codename EA211, with displacements of 1.4 and 1.6 litres, respectively. The EA211 firstly made its debut in the fifth-generation Volkswagen Santana in 2012. For horsepower ratings, the 1.4-litre unit produced 66 kilowatts (88 horsepower), while the latter produced 81 kilowatts (108 horsepower).\n[…]\nVolkswagen Jetta (China)\n[…]\nTest Drive: VOLKSWAGEN Jetta 1.4 TSI (122 HP) - 2009 by Autoevolution.com\n[…]\nVW JETTA (USA)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volkswagen_Passat",
        "situacao": "ok",
        "texto": "O Passat é um automóvel de segmento D fabricado pela Volkswagen AG. Produzido em várias gerações desde 1973, ele se situa entre o Volkswagen Golf/Jetta e o Phaeton na atual linha de produção da VW. Atualmente produzido na fábrica da VW em Emden, Alemanha, é normalmente chamado de Passat nos mercados europeus, mas recebeu vários outros nomes tais como Dasher, Santana e Quantum, particularmente em m\n[…]\nA Royale, equivalente a Quantum/Passat SW, possuía apenas 3 portas, diferente da versão Volkswagen, disponível apenas com 5 portas no Brasil. Embora modelos 3 portas fossem populares no país naquela época, conta-se que o real motivo era que a Volks não queria que a Royale competisse com a Quantum no segmento 5 portas.\n[…]\nO Passat Geração 4 foi na verdade um Geração 3 restilizado, mas a Volkswagen renomeou a plataforma para B4. O carro tinha mecânica praticamente idêntica ao Geração 3, com a mudança mais óbvia na reintrodução de uma grade frontal, para acompanhar o estilo de modelos contemporâneos tais quais o Polo. O interior foi melhorado e equipamentos de segurança tais como um air bag duplo foram também adicionados.\n[…]\nO Passat de quinta geração foi lançado em 1997, e era um carro inteiramente novo, ao contrário da geração anterior. Um fato marcante é perceber que a Volkswagen voltou a adotar a base Audi para este modelo, com motor em posição longitudinal.\n[…]\nEsta geração marcou a ida da Volkswagen para o segmento de carros mais sofisticados (deixando o segmento de baixo custo para suas marcas SEAT ou Skoda), e pondo o Passat novamente entre os antigos rivais como o Ford Mondeo e o Opel Vectra, e até mesmo carros mais luxuosos como os BMW Série 3 e os Mercedes Classe C. Na verdade ele indubitavelmente tomou parte do mercado de seu \"irmão\" Audi A4.\n[…]\nEm 2001, surgiu uma versão da Volkswagen Passat com oito cilindros em W que seria o único carro de produção com este tipo de motor.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Toyota Corolla",
      "descricao": "Série de carros compactos da Toyota, produzida desde 1966."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na Toyota, os nomes Crown, Corona, Corolla e Camry remetem à mesma palavra, em línguas diferentes. Que palavra?",
    "resposta": "Coroa",
    "distratores": [
      "Sol",
      "Estrela",
      "Montanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Toyota_Corolla",
      "https://en.wikipedia.org/wiki/Toyota_Camry"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toyota_Corolla",
        "situacao": "ok",
        "texto": "The Toyota Corolla (Japanese: トヨタ・カローラ, Hepburn: Toyota Karōra) is a series of compact cars (formerly subcompact) manufactured and marketed globally by the Japanese automaker Toyota Motor Corporation since 1966. Since 1997, the Corolla has remained the best-selling automobile nameplate of all time, surpassing the Volkswagen Beetle. Toyota reached the milestone of 50 million Corollas sold over twel\n[…]\nThe name Corolla is part of Toyota's naming tradition of using names derived from the Toyota Crown for sedans, with \"corolla\" meaning \"small crown\" in Latin. The Corolla has always been exclusive in Japan to Toyota Corolla Store locations, and manufactured in Japan with a twin, called the Toyota Sprinter until 2000. From 2006 to 2018 in Japan and much of the world, and from 2018 to 2020 in Taiwan, the hatchback companion had been called the Toyota Auris.\n[…]\nToyota Sprinter, the Corolla's twin for Japanese market with slightly different body panels\n[…]\nToyota Corolla Levin and Sprinter Trueno, a sports-oriented model of the Corolla and Sprinter\n[…]\nToyota AE86\n[…]\nToyota Corolla Ceres and Sprinter Marino, a hardtop variation of the E100 Corolla/Sprinter sedan\n[…]\nToyota GR Corolla, a high-performance variant of the E210 Corolla hatchback\n[…]\nToyota Corolla Rumion, a tall hatchback variation of the E150 series Corolla\n[…]\nToyota Matrix (Corolla Matrix), a hatchback/wagon based on the Corolla for the North American market\n[…]\nToyota Corolla Spacio, a mini MPV with the Corolla nameplate for the Japanese market\n[…]\nToyota Corolla Verso, a mini MPV with the Corolla nameplate for the European market\n[…]\nToyota Corolla Cross, a crossover SUV counterpart of the E210 series Corolla\n[…]\nToyota Corolla WRC, a World Rally Car based on the E110 Corolla hatchback\n[…]\nToyota Global Site | Vehicle Heritage · Corolla\n[…]\nblog.toyota.co.uk : Vehicles : Corolla History Archived 19 June 2013 at the Wayback Machine (official site)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Toyota_Camry",
        "situacao": "ok",
        "texto": "The Toyota Camry (; Japanese: トヨタ・カムリ Toyota Kamuri) is an automobile sold internationally by the Japanese auto manufacturer Toyota since 1982, spanning multiple generations. Originally compact in size (narrow-body), the Camry has grown since the 1990s to fit the mid-size classification (wide-body)—although the two widths co-existed in that decade. Since the release of the wide-bodied versions, Ca\n[…]\nAs of 2022, the Camry is positioned above the Corolla and below the Avalon or Crown in several markets.\n[…]\nThe name \"Camry\" derives from the Japanese word kanmuri (冠, かんむり, \"crown\"). This follows Toyota's naming tradition of using the crown name for primary models, starting with the Toyota Crown (1955). The tradition continued with the Toyota Corona (1957) and Corolla (1966), the Latin words for \"crown\" and \"small crown\" respectively. Further maintaining this theme was the Toyota Tiara (1960), named after the \"tiara\" form of crown.\n[…]\nParticularly in the United States, this narrower model was seen as compromised, thus limiting its sales potential. As a result, the \"wide-body\" mid-size Camry (XV10) released to North America in 1991 was developed from early 1988 and the final design frozen later that year. It was with the XV10 that Toyota upgraded the Camry's status to its second \"world car\" after the Corolla, with exports starting from Australia to Southeast Asia.\n[…]\nJapan also received the wider XV10  model, although it was sold under the Toyota Scepter name there. Toyota chose the name \"Scepter\" as a reference to the Camry/Crown naming tradition, as a \"scepter\" is a symbolic ornamental staff held by a ruling monarch, a prominent item of royal regalia.\n[…]\nThe US-built Toyota Camry took the top spot in 2015 and 2016 as the most American-made car with over 75 percent of its parts and manufacturing coming from the United States.\n[…]\nMcCarthy, Mike (May 1987). \"Camry: quietly classy\". Wheels. Sydney."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toyota_Corolla",
        "situacao": "ok",
        "texto": "Toyota Corolla (トヨタ・カローラ, Toyota Karōra) é um modelo de segmento C (\"médio\" no Brasil) da Toyota oferecido em versões sedã, hatchback e perua. Também é o modelo mais vendido da história dos automóveis, com produção nos cinco continentes e vendas totais superiores a 50 milhões de automóveis desde seu lançamento, em 1966.\n[…]\nSeu nome provém do Latim e o significado é “Coroa de Flores”, que por sua vez significam felicidade e triunfo. Ao adotar este nome, a Toyota manteve uma tradição da época em que muitos dos nomes dos seus carros começavam por “C” – Crown, Corona, Carina, Century, Celica, Camry etc. – Apesar da Toyota já não utilizar esta estratégia para dar nomes aos carros, nomes como o Yaris, Auris, Avalon, Etios e Avensis, todos eles derivam ainda do Latim.\n[…]\nEm 2009, a Toyota lançou uma nova versão intermediária, a GLi e o Corolla foi o grande campeão da pesquisa Os Eleitos, feita pela revista Quatro Rodas.\n[…]\nEm 2010, o Toyota Corolla foi alvo do maior recall da história da montadora japonesa, afetando milhões de carros no mundo todo. O motivo seria que os tapetes do carro escorregam com facilidade, fazendo com que o motorista acelere ou freie bruscamente, causando acidentes. No estado brasileiro de Minas Gerais o modelo chegou a ter suas vendas proibidas por determinação do Procon, através do Ministério Público.\n[…]\nA Toyota do Brasil anunciou, no domingo (27 de fevereiro de 2011), mais um recall para os Corollas fabricados entre março de 2008 e dezembro de 2010. Os modelos envolvidos no chamamento são as versões XLi, GLi, XEi, SE-G e Altis. Segundo a companhia, trata-se de uma medida preventiva. O atendimento começa em 1º de março.\n[…]\nToyota Fielder\n[…]\nToyota Yaris\n[…]\nToyota Corona\n[…]\nToyota Camry\n[…]\nToyota Avalon\n[…]\nBest Cars Web Site. Toyota Corolla, confiança que já dura 50 anos\n[…]\nToyota Corolla: 50 anos de história",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Shinkansen",
      "descricao": "Rede japonesa de trens de alta velocidade, inaugurada em 1964 e conhecida como trem-bala."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Para reduzir o estrondo na saída dos túneis, o nariz de uma série de trens-bala japoneses imitou o bico de qual ave?",
    "resposta": "Martim-pescador",
    "distratores": [
      "Garça",
      "Pelicano",
      "Tucano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/500_Series_Shinkansen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/500_Series_Shinkansen",
        "situacao": "ok",
        "texto": "The 500 series (500系, Go-hyaku-kei) is a Shinkansen high-speed train type operated by West Japan Railway Company (JR-West) in Japan on the Tōkaidō Shinkansen line from 1997 until 2010, and the San'yō Shinkansen line since 1997. They were designed to be capable of 320 km/h (199 mph) but operated at 300 km/h (186 mph), until they were retired from the primary Nozomi service in 2010. The trainsets we\n[…]\nOn 7 November 2015, set V2 began operating in a special \"500 Type Eva\" livery as part of the \"Shinkansen:Evangelion Project\" tie-up project to mark the 40th anniversary of the Sanyo Shinkansen and the 20th anniversary of Neon Genesis Evangelion. Initially planned to operate until March 2017, this livery was extended until 13 May 2018. Set V2 was then transformed to the Hello Kitty Shinkansen in June 2018.\n[…]\nIn March 2018, JR West announced the launch of a special \"Hello Kitty\" themed 500 series train on Sanyo Shinkansen Kodama services. The train, set V2 which formerly ran in the \"500 Type Eva\" livery, entered service on 30 June 2018. It is scheduled to operate until the middle of 2026. On 16 January 2026, JR West announced that the last day of the \"Hello Kitty\" Shinkansen will take place on 17 May of that year.\n[…]\nThe 500 Series Shinkansen served as basis for Liner Gao in Japanese mecha anime series The King of Braves GaoGaiGar.\n[…]\nThe Shinkansen Henkei Robo Shinkalion franchise would feature the 500 series as one of its many titular mecha. In addition to the standard livery, the Evangelion and Hello Kitty-wrapped versions also appeared in both the toyline and anime.\n[…]\nThe anime Transformers: Robots in Disguise features the Autobot character Railspike, who transforms into a 500 Series Shinkansen."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A9ries_500_-_Shinkansen",
        "situacao": "ok",
        "texto": "Os comboios Shinkansen da série 500 são os mais rápidos, mais potentes e mais caros comboios a circular na rede de alta velocidade japonesa. São desenhados para serem capazes de viajar a 320 km/h, apesar de actualmente circularem a um máximo de 300 km/h em serviço regular. As rodas motrizes usam uma suspensão activa controlada por computador para uma viagem mais suave e segura.\n[…]\nVisualmente são impactantes, com o nariz longo e pontiagudo, fazendo lembrar mais um avião supersónico do que um convencional comboio de alta velocidade. Em 1990, a Hitachi encomendou à Neumeister Design da Alemanha que criasse um desenho para o novo Shinkansen, que veio a se tornar a base para o desenvolvimento da série 500.\n[…]\nQuando a nova frota da série N700 estiver completa por 2009, espera-se que os comboios da série 500 sejam realocados para outros deveres, ainda não decididos, e restrinjam-se à linha Sanyo Shinkansen. Existe a possibilidade de que venham a ser reformados e encurtados.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Canal do Panamá",
      "descricao": "Canal artificial que atravessa o istmo do Panamá e liga o oceano Atlântico ao Pacífico."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Nos anos 1880, a primeira tentativa de abrir o Canal do Panamá foi liderada por um francês que já tinha construído qual outro canal famoso?",
    "resposta": "Canal de Suez",
    "distratores": [
      "Canal de Corinto",
      "Canal de Kiel",
      "Canal do Midi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Panama_Canal",
      "https://en.wikipedia.org/wiki/Ferdinand_de_Lesseps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panama_Canal",
        "situacao": "ok",
        "texto": "The Panama Canal (Spanish: Canal de Panamá) is an artificial 82-kilometer (51-mile) waterway in Panama that connects the Caribbean Sea in the Atlantic Ocean with the Pacific Ocean. It cuts across the narrowest point of the Isthmus of Panama and is a conduit for maritime trade between the Atlantic Ocean and the Pacific Ocean.\n[…]\nThe French diplomat and entrepreneur Ferdinand de Lesseps and engineer Philippe Bunau-Varilla were the driving forces behind the French attempts to construct the Panama Canal (1881–1889). De Lesseps had made his reputation by successfully constructing the Suez Canal (1859–1869), a route that had soon proved its value in international commerce. After this success, he actively sought new projects.\n[…]\nThe company bought the Wyse Concession from the Türr Syndicate and raised considerable funds from small French investors on the basis of the huge profits generated by the Suez Canal.\n[…]\nDemands for the United States to hand over the canal to Panama increased after the Suez Crisis in 1956, when the United States used financial and diplomatic pressure to force France and the UK to abandon their attempt to retake control of the Suez Canal, previously nationalized by the Nasser regime in Egypt. Panamanian unrest culminated in riots on Martyr's Day, 9 January 1964, when about 20 Panamanians and 3–5 US soldiers were killed.\n[…]\nThe canal faces increasing competition from other quarters. Because canal tolls have risen as ships have become larger, some critics have suggested that the Suez Canal is now a viable alternative for cargo between Asia and the US East Coast. The Panama Canal, however, continues to serve more than 144 of the world's trade routes and the majority of canal traffic comes from the \"all-water route\" from Asia to the US East and Gulf Coasts.\n[…]\nSuez Canal\n[…]\nPanama Canal at nationsonline.org"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ferdinand_de_Lesseps",
        "situacao": "ok",
        "texto": "Ferdinand Marie de Lesseps (French: [lesɛps]; 19 November 1805 – 7 December 1894) was a French Orientalist diplomat and later developer of the Suez Canal, which in 1869, joined the Mediterranean and Red Seas, substantially reducing sailing distances and times between Europe and East Asia.\n[…]\nOn 7 November 1854 he landed at Alexandria; on the 30th of the same month Said Pasha signed the concession authorizing him to oversee the French portion of the Suez Canal's construction.\n[…]\nFinally, on 17 November 1869, the canal was officially opened by the Khedive, Ismail Pasha.\n[…]\nWhile in the interests of his canal, Lesseps resisted British government opposition to an enterprise which threatened to give France control of the shortest route to India, he acted favourably towards Britain's interests after Benjamin Disraeli acquired the Suez shares belonging to the Khedive, by admitting to the board of directors of the company three representatives from the government of Britain.\n[…]\nIn May 1879, a congress of 136 delegates (including Lesseps) assembled in the rooms of the Société de géographie in Paris, under the presidency of Admiral de la Roncire le Noury, and voted in favor of the creation of a Panama Canal, which was to be without locks, like the Suez Canal. Lesseps was appointed President of the Panama Canal Company, despite the fact that he had reached the age of 74. It was on this occasion that Gambetta bestowed upon him the title of \"Le Grand Français\".\n[…]\nIn addition, Manuel Soto played the part in a 1944 Spanish feature film, Eugenia de Montijo. On television, Guy Marchand played Lesseps in the 1983 French/German mini-series L'homme de Suez, and John Walters portrayed him in \"The Panama Canal\", an episode of the 2003 BBC docu-drama series Seven Wonders of the Industrial World."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canal_do_Panam%C3%A1",
        "situacao": "ok",
        "texto": "O Canal do Panamá é uma via navegável artificial de cerca de 80 quilômetros que atravessa o istmo do Panamá e liga o mar do Caribe, no oceano Atlântico, ao oceano Pacífico. A passagem permite que os navios cruzem entre os dois oceanos sem contornar a América do Sul pela passagem de Drake, pelo estreito de Magalhães ou pelo estreito de Beagle, encurtando as viagens marítimas.\n[…]\nO diplomata e empresário francês Ferdinand de Lesseps e o engenheiro Philippe Bunau-Varilla lideraram as tentativas francesas de construir o Canal do Panamá entre 1881 e 1889. Ferdinand havia adquirido reputação com a construção bem-sucedida do Canal de Suez, entre 1859 e 1869, uma rota que logo se mostrou útil para o comércio internacional. Depois desse êxito, ele passou a buscar novos projetos.\n[…]\nFerdinand obteve a aprovação da maioria dos delegados, apesar das ressalvas de alguns que preferiam um canal na Nicarágua ou apontavam as prováveis dificuldades de engenharia e os riscos à saúde. Após o congresso, ele organizou uma empresa para construir o canal, a Compagnie Universelle du Canal Interocéanique de Panama. A empresa comprou a Concessão Wyse do Consórcio Türr e captou recursos consideráveis de pequenos investidores franceses, atraídos pelos lucros elevados do Canal de Suez.\n[…]\nAs exigências de transferência do canal ao Panamá cresceram após a Crise de Suez, em 1956, quando os Estados Unidos usaram pressão financeira e diplomática para obrigar França e Reino Unido a abandonar a tentativa de retomar o Canal de Suez, anteriormente nacionalizado pelo governo de Gamal Abdel Nasser no Egito. A agitação no Panamá culminou nos distúrbios do Dia dos Mártires, em 9 de janeiro de 1964, quando morreram cerca de 20 panamenhos e de três a cinco soldados norte-americanos.\n[…]\nCanal de Suez, passagem marítima entre o Mediterrâneo e o mar Vermelho",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Canal do Panamá",
      "descricao": "Canal artificial que atravessa o istmo do Panamá e liga o oceano Atlântico ao Pacífico."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Canal do Panamá foi inaugurado em agosto do mesmo ano em que começou qual grande conflito?",
    "resposta": "Primeira Guerra Mundial",
    "distratores": [
      "Segunda Guerra Mundial",
      "Guerra Hispano-Americana",
      "Guerra Russo-Japonesa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Panama_Canal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panama_Canal",
        "situacao": "ok",
        "texto": "The Panama Canal (Spanish: Canal de Panamá) is an artificial 82-kilometer (51-mile) waterway in Panama that connects the Caribbean Sea in the Atlantic Ocean with the Pacific Ocean. It cuts across the narrowest point of the Isthmus of Panama and is a conduit for maritime trade between the Atlantic Ocean and the Pacific Ocean.\n[…]\nThe Canal began operations on 15 August, 1914. A few months later the inauguration ceremonies of the exposition occurred in San Francisco in what was called the Panama-Pacific International Exposition. The start of the ceremony of the day was described:At precisely noon, President Wilson pressed a gold telegraph key in Washington D.C. sending a signal three thousand miles from New Jersey to an antenna atop the Tower of Jewels.\n[…]\nThe city’s return from the devastation of 1906 was complete and her grandest celebration had begun!Speaking on the successful opening and operation of the Panama Canal, a Canal first theorized by the Conquistedors of the 16th century, Theodore Roosevelt said:The Panama Canal was built because Colonel Goethals and the men under him, from the highest to the lowest, combined the three qualities; and it is earned on now because the administrative and judicial system represents the centralization of power in a single responsible head, who can be removed if he does wrong, but who as long as he does well has power sufficient to enable him to do the work.\n[…]\nIn a 7 January 2025 press conference, Trump vowed to gain control of the Panama Canal. He refused to rule out economic and military action against Panama to seize control of the canal, to secure what he called US \"economic security.\" He reiterated his intent to take back control of the canal in his inaugural address on 20 January.\n[…]\nNaval Base Panama Canal Zone\n[…]\nPanama Canal Zone\n[…]\nPanama Canal at nationsonline.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canal_do_Panam%C3%A1",
        "situacao": "ok",
        "texto": "O Canal do Panamá é uma via navegável artificial de cerca de 80 quilômetros que atravessa o istmo do Panamá e liga o mar do Caribe, no oceano Atlântico, ao oceano Pacífico. A passagem permite que os navios cruzem entre os dois oceanos sem contornar a América do Sul pela passagem de Drake, pelo estreito de Magalhães ou pelo estreito de Beagle, encurtando as viagens marítimas.\n[…]\nEm 1939, começou a construção de um novo conjunto de eclusas com dimensões suficientes para receber os navios de guerra maiores que os Estados Unidos construíam na época e planejavam continuar construindo. Os trabalhos prosseguiram por vários anos, com extensas escavações nos novos canais de acesso, mas o projeto foi cancelado após a Segunda Guerra Mundial.\n[…]\nApós a Segunda Guerra Mundial, o controle norte-americano do canal e da Zona do Canal que o cercava passou a ser contestado, e as relações entre Panamá e Estados Unidos ficaram cada vez mais tensas. Muitos panamenhos entendiam que a Zona pertencia de direito ao Panamá. Em resposta aos protestos estudantis, a Zona foi cercada, e a presença militar aumentou.\n[…]\nEm janeiro de 2014, uma disputa contratual ameaçou o andamento do projeto. O atraso foi inferior a dois meses, e em junho de 2014 os trabalhos das empresas do consórcio já cumpriam as metas. Em junho de 2015, começou o enchimento das novas eclusas, primeiro no lado do Atlântico e depois no do Pacífico. Naquele momento, a reinauguração do canal estava prevista para abril de 2016. Em 23 de março de 2016, a inauguração da ampliação foi marcada para 26 de junho daquele ano.\n[…]\nA construção, a ampliação e o funcionamento do Canal do Panamá, um dos principais pontos de estrangulamento do comércio mundial, estão associados a questões ambientais e ecológicas como desmatamento, disseminação de espécies invasoras, poluição da água e do ar e escassez de água.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Irmãos Wright",
      "descricao": "Orville e Wilbur Wright, americanos pioneiros da aviação com o Wright Flyer em 1903."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1969, pedaços de madeira e de tecido do avião de 1903 dos irmãos Wright foram levados até a Lua. Que astronauta os carregou?",
    "resposta": "Neil Armstrong",
    "distratores": [
      "John Glenn",
      "Alan Shepard",
      "Yuri Gagarin"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wright_Flyer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "The Wright Flyer (also known as the Kitty Hawk, Flyer I or the 1903 Flyer) made the first sustained flight by a manned heavier-than-air powered and controlled aircraft on December 17, 1903. Invented and flown by brothers Orville and Wilbur Wright, it marked the beginning of the pioneer era of aviation.\n[…]\nOn December 12, the brothers installed the new shafts on the Wright Flyer and tested it on their 60-foot (18 m) launching rail system that included a wheeled launching dolly. According to Orville:\n[…]\nIn 1910 the Wrights offered the Flyer as an exhibit at the Smithsonian Institution, but the Smithsonian declined, saying it would be willing to display other aeronautical artifacts from the brothers. Wilbur died in 1912, and in 1916 Orville brought the Flyer out of storage and prepared it for display at the Massachusetts Institute of Technology. He replaced parts of the wing covering, the props, and the engine's crankcase, crankshaft, and flywheel.\n[…]\nThe Los Angeles Section of the American Institute of Aeronautics and Astronautics (AIAA) built a full-scale replica of the 1903 Wright Flyer between 1979 and 1993 using plans from the original Wright Flyer published by the Smithsonian Institution in 1950. Constructed in advance of the 100th anniversary of the Wright Brothers' first flight, the replica was intended for wind tunnel testing to provide a historically accurate aerodynamic database of the Wright Flyer design.\n[…]\nIn 1969, portions of the original fabric and wood from the Wright Flyer traveled to the Moon and its surface in Neil Armstrong's personal preference kit aboard the Apollo 11 Lunar Module Eagle, and then back to Earth in the Command module Columbia.\n[…]\nThe Wright Brothers and their airplane have been commemorated on a U.S. Quarter and on several U. S. Postage stamps.\n[…]\nWright Model B"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wright_Flyer",
        "situacao": "ok",
        "texto": "O Wright Flyer (também frequentemente referenciado como Flyer I ou 1903 Flyer) foi a primeira aeronave construída pelos Irmãos Wright. Eles voaram com ele por quatro vezes em 17 de Dezembro de 1903, próximo à Kill Devil Hills, Carolina do Norte, cerca de 6,4 km ao Sul de Kitty Hawk, Estados Unidos. Hoje a aeronave está em exibição no Museu do Ar e Espaço em Washington, D.C.\n[…]\nO então secretário da Smithsonian Institution, Charles Walcott, se recusava a dar o crédito desse primeiro voo aos irmãos Wright. Em vez disso, ele concedeu a honra ao secretário anterior (seu amigo) Samuel Langley, que em 1903 testou o seu Langley Aerodrome no rio Potomac sem sucesso.\n[…]\nEssa mudança de atitude da Smithsonian também foi alvo de controvérsia – o Flyer foi vendido à Smithsonian sob várias condições contratuais, numa das quais se lê:\"Nem a Smithsonian Institution ou seus sucessores nem qualquer museu ou outra agência, birô ou instalação, administrada pelos Estados Unidos da América, pela Smithsonian Institution ou seus sucessores, podem publicar ou permitir ser exibida uma declaração ou identificação ligada à ou a respeito de qualquer modelo de aeronave ou desenho de data anterior ao da aeronave Wright de 1903, afirmando que tal aeronave era capaz de carregar um homem por seus próprios meios em um voo controlado.\"Os autores: O'Dwyer e Randolph afirmam que essa cláusula fornece um forte incentivo para que a Smithsonian se abstenha de reconhecer qualquer voo de aeronave tripulada, motorizada e controlada de antes do voo dos Wright de 17 de dezembro de 1903.\n[…]\nIrmãos Wright\n[…]\nHallion, Richard P. The Wright Brothers: Heirs of Prometheus. Washington, D.C.: Smithsonian, 1978. ISBN 0-87474-504-7.\n[…]\nHoward, Fred. Orville and Wilbur: The Story of the Wright Brothers. London: Hale, 1988. ISBN 0-7090-3244-7.\n[…]\nWrightexperience.com\n[…]\nUnder The Hood of A Wright Flyer  Air & Space Magazine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Estação da Luz",
      "descricao": "Estação ferroviária no bairro da Luz, em São Paulo, construída entre 1895 e 1901 para a São Paulo Railway."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Além de estação de trens, o prédio histórico da Estação da Luz, em São Paulo, abriga desde 2006 qual museu?",
    "resposta": "Museu da Língua Portuguesa",
    "distratores": [
      "Pinacoteca do Estado",
      "Museu do Futebol",
      "Museu do Ipiranga"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Museu_da_L%C3%ADngua_Portuguesa",
      "https://pt.wikipedia.org/wiki/Esta%C3%A7%C3%A3o_da_Luz"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Museu_da_L%C3%ADngua_Portuguesa",
        "situacao": "ok",
        "texto": "Museu da Língua Portuguesa ou Estação Luz da Nossa Língua MHCa é um museu interativo sobre a língua portuguesa localizado no histórico edifício da Estação da Luz, no bairro da Luz, na região central do município brasileiro de São Paulo. Foi concebido pela Secretaria Estadual de Cultura e Economia Criativa de São Paulo em conjunto com a Fundação Roberto Marinho, tendo um investimento de cerca de 37\n[…]\nO projeto foi iniciado em 2002, quando se começou a restaurar o prédio da Estação da Luz, sendo concluído em 2006. Teve como aliada no projeto a Lei de Incentivo à Cultura, que demonstra a contemporaneidade em que vivemos. São Paulo ainda possui um fator simbólico para o local do museu, sendo a maior cidade de falantes do português no mundo.\n[…]\nO Museu da Língua Portuguesa fez exposições itinerantes do seu acervo no estado de São Paulo em 2016, durante o processo de restauração do incêndio. A mostra de \"Estação da Língua\" foi aberta no dia 4 de março, em Araraquara, interior paulista, e passou por outras cidades durante o ano.\n[…]\nSegundo a Secretaria da Cultura do Estado de São Paulo, a exposição itinerante seguiu o conceito central do Museu da Língua Portuguesa, propondo interatividade e tecnologia como veículos para apresentar o idioma ao público, nos seus mais variados sotaques e evoluções. Como o acervo do museu é digital, ele pode ser aplicado e adaptado para outros espaços.\n[…]\nO museu possui um acervo inovador e predominantemente virtual, combinando arte, tecnologia e interatividade, lembrando que o museu está localizado num prédio histórico. Composto das mais diversificadas exposições nas quais são utilizados objetos, vídeos, sons e imagens projetadas em grandes telas sobre a língua portuguesa, considerada do ponto de vista de patrimônio cultural dos povos lusófonos. Ocupa três andares da Estação da Luz, com 4 333 metros quadrados.\n[…]\nMuseu da Língua Portuguesa no TripAdvisor"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esta%C3%A7%C3%A3o_da_Luz",
        "situacao": "ok",
        "texto": "Estação da Luz é uma das mais importantes estações ferroviárias da cidade de São Paulo, no Brasil. Possui um grande hall de entrada, uma plataforma central e duas laterais e atende às linhas 10-Turquesa, 11-Coral e 13-Jade (expresso aeroporto) do sistema de trens metropolitanos de São Paulo. Também possui conexão com as linhas 1–Azul e 4–Amarela do Metrô de São Paulo, através de uma ligação subter\n[…]\nO edifício abriga ainda o Museu da Língua Portuguesa e, em seus arredores, estão a Pinacoteca do Estado de São Paulo, o Jardim da Luz e a Sala São Paulo, na Estação Júlio Prestes. É também a estação mais próxima da Rua José Paulino, conhecida por contar com cerca de 400 lojas, boa parte delas, dedicadas à venda de roupas femininas.\n[…]\nNas décadas de 1990 e 2000 passou por uma série de reformas, uma das quais encabeçada pelo arquiteto Paulo Mendes da Rocha e seu filho Pedro Mendes da Rocha — que teve como intenção adaptá-la a receber o Museu da Língua Portuguesa. Em dezembro de 2015, um outro incêndio de grandes proporções ocorreu na estação, destruindo as instalações deste museu, e causando grandes danos ao patrimônio arquitetônico do prédio.\n[…]\nO Museu da Língua Portuguesa é um museu interativo sobre a língua portuguesa localizado no edifício da estação. Foi concebido pela Secretaria da Cultura do Estado de São Paulo em conjunto com a Fundação Roberto Marinho. O objetivo da instituição é criar um espaço vivo sobre a língua portuguesa, considerada como base da cultura do Brasil, onde seja possível causar surpresa nos visitantes com os aspectos inusitados e, muitas vezes, desconhecidos de sua língua materna.\n[…]\nSegundo os organizadores do museu, \"deseja-se que, no museu, esse público tenha acesso a novos conhecimentos e reflexões, de maneira intensa e prazerosa\".\n[…]\nEstação Júlio Prestes\n[…]\n«Página oficial do projeto Estação da Luz»\n[…]\n«Página oficial da Companhia Paulista de Trens Metropolitanos»"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Jangada",
      "descricao": "Embarcação de pesca de madeira, com vela triangular, típica do litoral do Nordeste do Brasil."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1941, quatro jangadeiros cearenses navegaram de jangada até o Rio para levar reivindicações a Getúlio Vargas. Que cineasta americano foi filmar a história deles?",
    "resposta": "Orson Welles",
    "distratores": [
      "Walt Disney",
      "Alfred Hitchcock",
      "John Ford"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/It%27s_All_True_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/It%27s_All_True_(film)",
        "situacao": "ok",
        "texto": "It's All True is an unfinished Orson Welles feature film comprising three stories about Latin America. \"My Friend Bonito\" was supervised by Welles and directed by Norman Foster in Mexico in 1941. \"Carnaval\" (also known as \"The Story of Samba\") and \"Jangadeiros\" (also known as \"Four Men on a Raft\") were directed by Welles in Brazil in 1942. It was to have been Welles's third film for RKO Radio Pict\n[…]\nI knew there was about a million feet of film Orson Welles had shot in Brazil which had never been seen.\" The American Film Institute later became interested in locating the footage after learning that Arnaz, a good friend of Welles, had made inquiries in the mid-1960s about printing some of the negative.\n[…]\nIn 1981 Fred Chandler, Paramount's director of technical services, was looking for storage space in the studio's Hollywood vault when he happened across the long-forgotten footage from It's All True. He found 250 metal film cans labeled \"Bonito\" and \"Brazil\", each holding held eight to ten rolls of black-and-white nitrate negative. Seeing a few shots of the \"Jangadeiros\" sequence, Chandler recognized it immediately. Orson Welles was told of the discovery but he refused to look at it.\n[…]\nThe six-part 1987 BBC-TV series, The RKO Story, devoted its fourth episode—titled \"It's All True\"—to Orson Welles's time at RKO. The last 20 minutes of the hour-long episode recount the troubled production of It's All True. Music, sound effects and an excerpt from the first episode of Welles's subsequent CBS Radio series, Hello Americans, were added to the silent recovered footage, nearly all from the \"Carnaval\" episode.\n[…]\nIn her book, It's All True: Orson Welles's Pan-American Odyssey (2007), Catherine L. Benamou presents an inventory of the surviving It's All True footage stored in the UCLA Film and Television Archive nitrate vaults. These materials were present in a June 2000 inventory."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/It%27s_All_True",
        "situacao": "ok",
        "texto": "It's All True é um filme estadunidense não finalizado de 1942 dirigido por Orson Welles. Era para ter sido o terceiro trabalho de Welles para a RKO Pictures, depois de Cidadão Kane (1941) e Soberba (1942). O projeto foi uma coprodução da RKO e do Escritório do Coordenador de Assuntos Interamericanos que foi posteriormente extinto pela RKO.\n[…]\nEm 1941, Orson Welles concebeu It's All True como um filme antológico que mistura documentários e docuficção. Era para ser o terceiro filme feito pelo diretor para a RKO Pictures, com a qual ele rodou Cidadão Kane (1941) e Soberba (1942). Composto de três episódios, tem uma parte filmada no México, chamada My friend Bonito, e duas no Brasil, Carnaval (ou The story of samba) e Jangadeiros (Four men on a raft).\n[…]\nDuas semanas depois do ataque a Pearl Harbor em dezembro de 1941, Nelson Rockefeller (então coordenador de Assuntos Interamericanos) solicitou a Welles que fizesse um filme não comercial sem salário para apoiar o esforço de guerra como parte da Política da Boa Vizinhança.\n[…]\nNa América do Sul, Welles solicitou recursos para acabar com It's All True, ele conseguiu terminar de filmar o episódio sobre os jangadeiros, mas a RKO se recusou a apoiar mais a produção do filme.\n[…]\nElliot Paul, que estava sob contrato com Welles para escrever \"The Story of Jazz\", é creditado como roteirista do filme.\n[…]\nEm 1956, RKO lançou Arenas Sangrentas, um filme sobre a amizade entre um jovem mexicano e um touro que está destinado a morrer na arena, mas é poupado pela multidão. Muita controvérsia cercou o filme quando seu roteirista, \"Robert Rich\", recebeu um Oscar de Melhor História Original. Orson Welles disse mais tarde que como não tinha permissão para trabalhar por ter seu nome incluído na lista negra de Hollywood, Dalton Trumbo escreveu o roteiro de Arenas Sangrentas sob o pseudônimo Robert Rich.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Helicóptero",
      "descricao": "Aeronave de asas rotativas em que a sustentação e a propulsão vêm de rotores que giram na horizontal."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que gênio do Renascimento desenhou um parafuso aéreo, máquina de voar considerada uma das precursoras do helicóptero?",
    "resposta": "Leonardo da Vinci",
    "distratores": [
      "Michelangelo",
      "Galileu Galilei",
      "Rafael Sanzio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Helicopter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Helicopter",
        "situacao": "ok",
        "texto": "A helicopter is a type of rotorcraft in which lift and thrust are supplied by horizontally spinning rotors. This allows the helicopter to take off and land vertically, to hover, and to fly forward, backward and laterally. These attributes allow helicopters to be used in congested or isolated areas where fixed-wing aircraft and many forms of short take-off and landing (STOL) or short take-off and v\n[…]\nIn 2017, 926 civil helicopters were shipped for $3.68 billion, led by Airbus Helicopters with $1.87 billion for 369 rotorcraft, Leonardo Helicopters with $806 million for 102 (first three-quarters only), Bell Helicopter with $696 million for 132, then Robinson Helicopter with $161 million for 305.\n[…]\nBy October 2018, the in-service and stored helicopter fleet of 38,570 with civil or government operators was led by Robinson Helicopter with 24.7% followed by Airbus Helicopters with 24.4%, then Bell with 20.5 and Leonardo with 8.4%, Russian Helicopters with 7.7%, Sikorsky Aircraft with 7.2%, MD Helicopters with 3.4% and other with 2.2%.\n[…]\nIt was not until the early 1480s, when Italian polymath Leonardo da Vinci created a design for a machine that could be described as an \"aerial screw\", that any recorded advancement was made towards vertical flight. His notes suggested that he built small flying models, but there were no indications for any provision to stop the rotor from making the craft rotate. As scientific knowledge increased and became more accepted, people continued to pursue the idea of vertical flight.\n[…]\n1 proved to be extremely unsteady and required a man at each corner of the airframe to hold it steady. For this reason, the flights of the Gyroplane No. 1 are considered to be the first manned flight of a helicopter, but not a free or untethered flight.\n[…]\nMast bumping in some helicopters\n[…]\nAmerican Helicopter Society\n[…]\nU.S. Helicopter Safety Team\n[…]\nHelicopter Safety Enhancements"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Helic%C3%B3ptero",
        "situacao": "ok",
        "texto": "Helicóptero (do grego ἔλιξ hélix = espiral e πτέρυξ ptéryks = asa) é um tipo de aeronave de asas diagonais, mais pesada que o ar (aeródino), propulsada por um ou mais rotores horizontais maiores (propulsores) que, quando girados pelo motor, criam sustentação e propulsão necessárias para o voo. Devido ao fato de as pás do rotor girarem em torno de um mastro, são classificados como aeronave de asa r\n[…]\nA primeira ideia pouco prática de um helicóptero foi concebida por Leonardo da Vinci no século XV, mas esquecida até a invenção do avião no século XX.\n[…]\nOs helicópteros têm utilizações militares e civis, como transporte de tropas, apoio de infantaria, apoio no combate a incêndios, resgate de acidentados nas metrópoles, operações entre navios, transporte de equipes para plataformas petrolíferas, transporte de empresários, evacuação sanitária, guindaste aéreo, polícia e vigilância de civis, transportes de bens (alguns helicópteros podem levar cargas que podem ser lançadas de paraquedas) etc.\n[…]\nA estabilidade é inerente às aeronaves de asa fixa. No caso de uma rajada de vento, ou uma perturbação nos comandos de voo causar alguma variação na atitude da aeronave, seu desenho aerodinâmico tenderá a corrigir o movimento, voltando ao equilíbrio. Vários modelos de avião permitem ao piloto soltar os comandos em pleno voo, mantendo-se no curso sem a ajuda de piloto automático. Em contraste, os helicópteros são muito instáveis. Um simples voo pairado constantemente requer correções do piloto.\n[…]\nJoffily, Kleber Sampaio. Aerodinâmica do Helicóptero. Editora Kleber Sampaio Joffily, 2000. ISBN 8590121119\n[…]\n«História do helicóptero» (em inglês). Cópia arquivada em 26 de maio de 2026\n[…]\n«Dá para voar de helicóptero na Lua?». Cópia arquivada em 15 de outubro de 2022\n[…]\n«Museu da Aviação Ligeira do Exército francês e do helicóptero». Cópia arquivada em 6 de novembro de 2016",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Vespa",
      "descricao": "Marca italiana de scooters fabricados pela Piaggio, criada em 1946."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em que filme de 1953 Audrey Hepburn e Gregory Peck passeiam pelas ruas de Roma numa Vespa?",
    "resposta": "A Princesa e o Plebeu",
    "distratores": [
      "Bonequinha de Luxo",
      "Sabrina",
      "A Doce Vida"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Roman_Holiday",
      "https://en.wikipedia.org/wiki/Vespa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roman_Holiday",
        "situacao": "ok",
        "texto": "Roman Holiday is a 1953 American romantic comedy film directed and produced by William Wyler. It stars Audrey Hepburn as a princess out to see Rome on her own and Gregory Peck as a reporter. Hepburn won an Academy Award for Best Actress for her performance; the film also won the Academy Award for Best Story and the Academy Award for Best Costume Design.\n[…]\nWyler first offered the role to Hollywood favorite Cary Grant. Grant declined, believing he was too old to play Hepburn's character's love interest, though he would do so ten years later in Charade. Other sources say Grant declined because he knew all of the attention would be centered on the princess. Peck's contract gave him solo star billing, with newcomer Hepburn listed much less prominently in the credits.\n[…]\nWyler had initially considered Elizabeth Taylor and Jean Simmons for the princess role, but both were unavailable. On 18 September 1951, director Thorold Dickinson made a screen test with Hepburn and sent it to director William Wyler, who was in Rome preparing Roman Holiday.\n[…]\nVia Margutta 51, the location of Joe's apartment where he hosts Princess Ann\n[…]\nPalazzo Colonna Gallery, shown in the final scenes of the princess's press appearance\n[…]\nPalazzo Brancaccio, the princess' ornate Roman bedroom.\n[…]\nWhile the domestic box office disappointed Paramount, it was very successful elsewhere, including the UK, where the film benefited from both the current romance between Princess Margaret and commoner Peter Townsend—\"No film studio could have bought such publicity\", Alexander Walker wrote—and a fad for Italian culture. It earned around $12 million in the overseas market.\n[…]\nDue to the film's popularity, both Peck and Hepburn were approached about filming a sequel, but this project never got off the ground."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vespa",
        "situacao": "ok",
        "texto": "Vespa (Italian pronunciation: [ˈvɛspa]; Italian for 'wasp') is an Italian brand of scooters  and mopeds manufactured by Piaggio. The Vespa has evolved from a single model motor scooter manufactured in 1946 by Piaggio & Co. S.p.A. of Pontedera, Italy, to a full line of scooters and one of seven companies today owned by Piaggio.\n[…]\nThe biggest sales promotion ever came courtesy of Hollywood. In 1952, Audrey Hepburn side-saddled Gregory Peck's Vespa in the feature film Roman Holiday for a ride through Rome, resulting in over 100,000 sales. In 1956, John Wayne dismounted from his horse in favor of the two-wheeler to get between takes on sets, and Marlon Brando, Dean Martin, and the entertainer Abbe Lane had become Vespa owners.\n[…]\nImprovements were made to the original design and new models were introduced. The 1948 Vespa 125 had rear suspension and a bigger engine. The headlamp was moved up to the handlebars in 1953 and had more engine power and a restyled rear fairing. A cheaper spartan version was also available. One of the best-loved models was the Vespa 150 GS introduced in 1955 with a 150 cc engine, a long saddle, and the faired handlebar-headlamp unit.\n[…]\nVespa 50 (3 spd)\n[…]\nVespa 946 Horse (May 2026)\n[…]\nVespa 400 – a car also made by Piaggio\n[…]\nBrockway, Eric. Vespa: An Illustrated History. Pub: Haynes Manuals Inc, 16 August 1999. ISBN 1-85960-443-9\n[…]\nGiorgio Sarti, Giorgio. 1946–2006: 60 Years of the Vespa. Pub: J H Haynes & Co Ltd, 29 June 2006. ISBN 1-84425-313-9\n[…]\nOfficial Vespa 946 website\n[…]\nVespa Vin Decoder—guide to decoding frame and engine numbers on older Vespas\n[…]\nVespa manuals— A nice collection of manuals for older Vespas\n[…]\nVespa at the Piaggio Museum the official factory museum\n[…]\nDolce vita on a Vespa—summary of Peter Moore's travels in Italy on a Vespa (from The Guardian)\n[…]\nPiaggio Vespa at the Internet Movie Cars Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roman_Holiday",
        "situacao": "ok",
        "texto": "Roman Holiday (prt: Férias em Roma; bra: A Princesa e o Plebeu) é um filme norte-americano de comédia romântica de 1953 dirigido e produzido por William Wyler. É estrelado por Gregory Peck como repórter e Audrey Hepburn como uma princesa real que visita Roma por conta própria. Hepburn ganhou um Oscar de melhor atriz por sua atuação; o roteiro e o figurino também ganharam. Foi filmado nos estúdios \n[…]\nUma princesa entediada resolve se divertir anonimamente em Roma. Lá, ela acaba se envolvendo com um repórter que, inicialmente, pretende se aproveitar da situação para dar um \"furo\". Diversas situações inesperadas acontecem, fazendo com que eles se aproximem e criando nele a dúvida se deve ou não publicar a história.\n[…]\nAudrey Hepburn como Princesa Ann\n[…]\nGregory Peck como Joe Bradley\n[…]\nWyler primeiro ofereceu o papel a Cary Grant, mas ele recusou, acreditando que ele era velho demais para interpretar o interesse amoroso de Hepburn (embora ambos participassem juntos dez anos depois em Charade). Outras fontes dizem que Grant recusou porque sabia que toda a atenção seria focada no papel da princesa. O contrato de Peck deu a ele a chance de participar e aparecer nos créditos como a única estrela, com a novata Hepburn com um crédito muito menos proeminente.\n[…]\nPara o papel da princesa Anna, Wyler tinha inicialmente considerado Elizabeth Taylor e Jean Simmons, mas ambas não estavam disponíveis. Wyler estava muito animado para encontrar Hepburn, mas ele não escolheu até depois de um teste. Wyler não pôde ficar e filmá-lo, pedindo à diretora-assistente que pedisse ao cameraman e ao técnico de som que continuasse gravando depois que o diretor assistente lhe dissesse para \"cortar\" para que ela a relaxasse depois de ter interpretado o teste.\n[…]\nEm 1953 no New York Film Critics Circle Awards (NYFCC), Hepburn ganhou na categoria de melhor atriz.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Isetta",
      "descricao": "Microcarro em formato de ovo com porta frontal, projetado na Itália pela Iso e produzido sob licença em vários países."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que montadora alemã, hoje famosa por carros de luxo, fabricou o microcarro Isetta e se apoiou nele para se recuperar no pós-guerra?",
    "resposta": "BMW",
    "distratores": [
      "Audi",
      "Porsche",
      "Opel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Isetta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Isetta",
        "situacao": "ok",
        "texto": "The Isetta (Italian pronunciation: [iˈzetta]) is an Italian-designed microcar initially manufactured in 1953 by the Italian firm Iso SpA, and subsequently built under license in a number of different countries, including Argentina, Spain, Belgium, France, Brazil, Germany, and the United Kingdom. The name Isetta is the Italian diminutive form of Iso, meaning \"little Iso\". Because of its egg shape a\n[…]\nIn 1955, Iso licensed the Isetta to Indústrias Romi S.A., a machine-tool manufacturer headquartered in the city of Santa Bárbara d'Oeste, in the state of São Paulo. The Isetta was chosen, because it was considered an ideal vehicle for use in the cities by virtue of its size and economy. Released on September 5, 1956, it was one of the first cars produced in Brazil, after Ford do Brasil and General Motors do Brasil.\n[…]\nSome 3,000 of the Romi-Isettas were manufactured from 1956 to 1961. They kept the Iso design and used Iso engines until 1958, in 1959 they switched to the BMW 300 cc engines.\n[…]\nAt the 2013 Tokyo Motor Show, Gifu based company D Art revealed the Durax D-Face, a front entry, rear engine bubble car taking inspiration from the Isetta. The microcar was powered by a 7 kW electric motor coupled with a 3 kW petrol generator, giving a range of around 190 miles. A top speed of around 45 mph likely limited the car to city driving.\n[…]\nAt the 2016 Geneva Motor Show, Swiss entrepreneur Wim Ouboter of Micro Mobility Systems revealed the Microlino, a small electric microcar inspired by the Isetta. After being postponed, production of the vehicle commenced in 2022 with pre-orders for over 8,000 vehicles, costing EUR 12,000 each.\n[…]\nEvetta – German electric microcar\n[…]\nMicrolino – Battery electric microcar\n[…]\nIso Isetta Millennium official site\n[…]\n1959 BMW Isetta/Hot Wheels WHATTADRAG\n[…]\nBMW Isetta as built at Brighton’s (former) Locomotive Works"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Isetta",
        "situacao": "ok",
        "texto": "O Isetta foi um dos microcarros produzido nos anos posteriores à Segunda Guerra Mundial. Embora o desenho seja originário da Itália, construíram-se noutros países como Espanha, Bélgica, França, Brasil, Alemanha e Reino Unido.\n[…]\nAs características apresentadas correspondem ao modelo Romi Isetta 300 de Luxe, fabricado entre 1959 e 1961, equipado com um motor de quatro tempos fabricado pela BMW.\n[…]\nO Romi-Isetta foi um automóvel produzido no Brasil entre 1956 e 1961, pelas Indústrias Romi S.A., com sede em Santa Bárbara d'Oeste, no interior de São Paulo.\n[…]\nEm 1955, a Iso concedeu os direitos de produção do Isetta para a empresa brasileira Indústrias Romi S.A., fabricante de máquinas industriais e agrícolas fundada em 1930 pelo comendador Américo Emílio Romi e seu enteado Carlos Chiti, com sede em Santa Bárbara d'Oeste (São Paulo).\n[…]\nEm 28 de agosto de 1955, foi publicada a notícia no jornal Diário de São Paulo informando que as indústrias Romi produziriam o Romi-Isetta no país. Lançado em 5 de setembro de 1956, o Romi-Isetta, equipado com um motor de dois tempos e uma única porta frontal, se consistiu no primeiro automóvel de passeio de fato fabricado em território brasileiro.\n[…]\nA estratégia de publicidade adotada pelo fabricante visava a expor o modelo a diferentes públicos: de segundo carro para a família ao estudante universitário. Algumas peças publicitárias foram criadas visando o público feminino, como por exemplo o anúncio que exibia uma mulher saindo de uma gaiola para entrar em um Romi-Isetta, com os dizeres \"agora sou livre\".\n[…]\nEm 1959, o Romi-Isetta passou a ser equipado com um motor de quatro tempos de fabricação BMW.\n[…]\nMicrocarro\n[…]\nBest Cars Web Site. Romi-Isetta: curiosidades do primeiro carro brasileiro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Isetta",
      "descricao": "Microcarro em formato de ovo com porta frontal, projetado na Itália pela Iso e produzido sob licença em vários países."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Nos anos cinquenta, o microcarro Isetta também foi fabricado no Brasil, em Santa Bárbara d'Oeste. Que empresa o produziu?",
    "resposta": "Indústrias Romi",
    "distratores": [
      "Vemag",
      "Willys-Overland",
      "Gurgel"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Romi-Isetta",
      "https://en.wikipedia.org/wiki/Isetta"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Romi-Isetta",
        "situacao": "ok",
        "texto": "O Isetta foi um dos microcarros produzido nos anos posteriores à Segunda Guerra Mundial. Embora o desenho seja originário da Itália, construíram-se noutros países como Espanha, Bélgica, França, Brasil, Alemanha e Reino Unido.\n[…]\nO Romi-Isetta foi um automóvel produzido no Brasil entre 1956 e 1961, pelas Indústrias Romi S.A., com sede em Santa Bárbara d'Oeste, no interior de São Paulo.\n[…]\nEm 1955, a Iso concedeu os direitos de produção do Isetta para a empresa brasileira Indústrias Romi S.A., fabricante de máquinas industriais e agrícolas fundada em 1930 pelo comendador Américo Emílio Romi e seu enteado Carlos Chiti, com sede em Santa Bárbara d'Oeste (São Paulo).\n[…]\nEm 28 de agosto de 1955, foi publicada a notícia no jornal Diário de São Paulo informando que as indústrias Romi produziriam o Romi-Isetta no país. Lançado em 5 de setembro de 1956, o Romi-Isetta, equipado com um motor de dois tempos e uma única porta frontal, se consistiu no primeiro automóvel de passeio de fato fabricado em território brasileiro.\n[…]\nEm 1959, o Romi-Isetta passou a ser equipado com um motor de quatro tempos de fabricação BMW.\n[…]\nAté 13 de abril de 1961, dia em que foi encerrada a produção no Brasil, haviam sido fabricadas cerca de três mil unidades em Santa Bárbara d'Oeste, muitas das quais ainda hoje permanecem nas mãos de colecionadores.\n[…]\nIndústria automobilística no Brasil\n[…]\nBest Cars Web Site. Romi-Isetta: o charme peculiar do pioneiro nacional. Informações sobre a Romi Isetta e sobre outras versões, estrangeiras, da Isetta. Segundo o artigo, \"um sucesso na Europa que fracassou no Brasil por oferecer vantagens que ninguém precisava\". Acesso em 18 de maio de 2011.\n[…]\nBest Cars Web Site. Romi-Isetta: curiosidades do primeiro carro brasileiro"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Isetta",
        "situacao": "ok",
        "texto": "The Isetta (Italian pronunciation: [iˈzetta]) is an Italian-designed microcar initially manufactured in 1953 by the Italian firm Iso SpA, and subsequently built under license in a number of different countries, including Argentina, Spain, Belgium, France, Brazil, Germany, and the United Kingdom. The name Isetta is the Italian diminutive form of Iso, meaning \"little Iso\". Because of its egg shape a\n[…]\nIn 1955, Iso licensed the Isetta to Indústrias Romi S.A., a machine-tool manufacturer headquartered in the city of Santa Bárbara d'Oeste, in the state of São Paulo. The Isetta was chosen, because it was considered an ideal vehicle for use in the cities by virtue of its size and economy. Released on September 5, 1956, it was one of the first cars produced in Brazil, after Ford do Brasil and General Motors do Brasil.\n[…]\nThe car had received government approval as a part of a state-supported drive to establish an automotive industry in Brazil, but ended up being built without government backing.\n[…]\nSome 3,000 of the Romi-Isettas were manufactured from 1956 to 1961. They kept the Iso design and used Iso engines until 1958, in 1959 they switched to the BMW 300 cc engines.\n[…]\nAt the 2013 Tokyo Motor Show, Gifu based company D Art revealed the Durax D-Face, a front entry, rear engine bubble car taking inspiration from the Isetta. The microcar was powered by a 7 kW electric motor coupled with a 3 kW petrol generator, giving a range of around 190 miles. A top speed of around 45 mph likely limited the car to city driving.\n[…]\nAt the 2016 Geneva Motor Show, Swiss entrepreneur Wim Ouboter of Micro Mobility Systems revealed the Microlino, a small electric microcar inspired by the Isetta. After being postponed, production of the vehicle commenced in 2022 with pre-orders for over 8,000 vehicles, costing EUR 12,000 each.\n[…]\nPaul Arzens – French industrial designer (1903–1990), \"L'oeuf\""
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Aston Martin DB5",
      "descricao": "Carro esportivo grã-turismo britânico fabricado pela Aston Martin de 1963 a 1965 e famoso por aparecer nos filmes de James Bond."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em que filme o Aston Martin DB5, com metralhadoras e assento ejetor, apareceu pela primeira vez como carro de James Bond?",
    "resposta": "007 Contra Goldfinger",
    "distratores": [
      "007 Contra o Satânico Dr. No",
      "Moscou Contra 007",
      "Com 007 Só Se Vive Duas Vezes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aston_Martin_DB5"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aston_Martin_DB5",
        "situacao": "ok",
        "texto": "The Aston Martin DB5 is a British grand tourer (GT) produced by Aston Martin and designed by Italian coachbuilder Carrozzeria Touring Superleggera. Originally produced from 1963 to 1965, the DB5 was an evolution of the final series of DB4. The \"DB\" designation is from the initials of David Brown, who built up the company from 1947 onwards.\n[…]\nThe Aston Martin DB5 became widely known after special effects expert John Stears modified a DB5 for use by James Bond in the 1964 film Goldfinger. Author Ian Fleming had placed Bond in a DB Mark III in the novel, but Stears persuaded the company to make its DB5 prototype available.\n[…]\nAfter Goldfinger, the Aston Martin DB5 became closely associated with the James Bond franchise. The same car (registration BMT 216A) was used again in the next film, Thunderball, a year later. The DB5 is considered to be the quintessential vehicle associated with the Bond character, and it has reappeared in subsequent Bond films.\n[…]\nIn 2020, as the next phase of the Continuation programme which had started in 2017 with the reborn DB4GT, Aston Martin began construction of 25 new DB5 Goldfinger-themed cars at the factory in Newport Pagnell, north Buckinghamshire, where the first DB5s were built. The cars were authentic reproductions of Bond's Goldfinger DB5 and were fitted with most of the spy gadgets seen in the film.\n[…]\nWith Goldfinger, Corgi began its decades-long relationship with the Bond franchise. They produced a model of the car which became the biggest selling toy of 1964. A detailed 1:24 scale plastic kit of the James Bond DB5 was produced by Airfix between 1966 and 1970.\n[…]\nIn 2015, Hot Wheels Elite released their Cult Classics Goldfinger Aston Martin DB5 in 1/18 and 1/43 scale, the 1/18 model featuring many of the gadgets from the original film.\n[…]\n\"Aston Martin DB5\". Internet Movie Cars Database."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aston_Martin_DB5",
        "situacao": "ok",
        "texto": "O Aston Martin DB5 é um gran turismo (GT) britânico de luxo que foi fabricado pela Aston Martin e projetado pelo construtor de carrocerias italiano Carrozzeria Touring Superleggera. Lançado em 1963, foi uma evolução da série final do DB4.\n[…]\nEmbora não seja o primeiro da série DB, o DB5 é o carro cinematográfico mais conhecido de James Bond, aparecendo pela primeira vez no filme Goldfinger (1964).\n[…]\nO Aston Martin DB5 está entre os carros mais conhecidos do mundo, graças ao especialista em efeitos especiais John Stears, que modificou o DB5 para ser usado por James Bond no filme Goldfinger (1964). Embora Ian Fleming tenha colocado Bond em um DB Mark III no romance, Stears convenceu a empresa a disponibilizar seu protótipo DB5.\n[…]\nO primeiro protótipo DB5 usado no Goldfingercom o número do chassi DP/216/1 foi posteriormente despojado de seu armamento e gadget pela Aston Martin e depois revendido. Foi então adaptado pelos proprietários subseqüentes com armamento não original. Mais tarde, apareceu no filme The Cannonball Run (1981), o qual foi dirigido por Roger Moore. O chassi DP/216/1 DB5 foi roubado em 1997 de seu último proprietário na Flórida e ainda está desaparecido.\n[…]\nEm 2015, a Hotwheels Elite lançou seu Cult Classics Goldfinger Aston Martin DB5 nas escalas 1/18 e 1/43, o modelo 1/18 apresentava muitos dos gadgets do filme original.\n[…]\nO DB5 aparece em vários jogos eletrônicos, como 007 Racing, Driver San Francisco (Deluxe Edition), James Bond 007: Agent Under Fire, Da Rússia com Amor e James Bond 007: Blood Stone. O filme From Russia with Love foi lançado em 1963, um ano antes de Goldfinger (no qual o DB5 foi usado pela primeira vez), mas o videojogo usou o carro.\n[…]\n«Aston Martin DB5». Internet Movie Cars Database",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Porsche 911",
      "descricao": "Carro esportivo da fabricante alemã Porsche, produzido desde 1964, com motor traseiro."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Porsche 911 seria lançado como 901, mas mudou de nome porque outra montadora reivindicava os números de três algarismos com zero no meio. Qual?",
    "resposta": "Peugeot",
    "distratores": [
      "Renault",
      "Citroën",
      "Fiat"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Porsche_911"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Porsche_911",
        "situacao": "ok",
        "texto": "The Porsche 911 model series (pronounced Nine Eleven or in German: Neunhundertelf, or colloquially Neunelfer) is a family of two-door, high performance rear-engine sports cars, introduced in September 1964 by Porsche of Stuttgart, Germany, and now in its eighth generation. All 911s have a rear-mounted flat-six engine, and usually 2+2 seating, except for special 2-seater variants.\n[…]\nOriginally marketed as the Porsche 901 (referring to its internal project number, 901), 82 examples carried the 901 nameplate before French automobile manufacturer Peugeot protested, claiming it held exclusive rights in France to car names formed by three numbers with a zero in the middle. Rather than selling the new model with a different name in France, Porsche marketed the model instead as '911'. Internally, the part numbers for the model carried the prefix 901 for years.\n[…]\nThe first models of the 911 used a rear-mounted 130 PS (96 kW; 128 hp)[1] Type 901/01 flat-6 engine, in the \"boxer\" configuration like the 356. The engine is air-cooled and displaces 1,991 cc (2.0 L) as compared to the 356's four-cylinder, 1,582 cc (1.6 L). As a 2+2 body style, rear seating was provisional. A four or five-speed \"Type 901\" manual transmission was available. The styling was largely penned by Ferdinand \"Butzi\" Porsche, son of Ferdinand \"Ferry\" Porsche.\n[…]\nAt the 2018 Paris Motor Show held in October on the occasion of the 70th-anniversary celebration of the marque, Porsche unveiled the Speedster variant of the 991 generation for the 911, as a concept.\n[…]\nIn 2015, Car and Driver named the Porsche 911 \"the best premium sports car on the market\".\n[…]\nOfficial Porsche 911 microsite\n[…]\nOfficial USA Porsche 911 page\n[…]\nProduction videos: How Porsche 911 is made. Auto News. 5 December 2015. Retrieved 18 May 2017.\n[…]\n2015 Porsche 911 Engine Plant Assembly Line. Auto News. 6 May 2015. Retrieved 18 May 2017."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Porsche_911",
        "situacao": "ok",
        "texto": "Porsche 911 (por vezes denominado Porsche 911 Carrera) é um automóvel esportivo produzido pela fabricante alemã Porsche AG, de Stuttgart, desde 1964. O modelo foi apresentado originalmente em 1963, no Salão do Automóvel de Frankfurt, com o nome de 901, sendo posteriormente renomeado para 911 por questões de direitos de nomenclatura. Desde então, o veículo tem passado por constantes atualizações té\n[…]\nAo ser apresentado no Salão do Automóvel de Frankfurt de 1963, o carro foi um sucesso imediato. Porém, numa história amplamente conhecida no meio automobilístico, a Peugeot conseguiu fazer a Porsche mudar o nome do carro, alegando que possuía os direitos dos nomes de veículos compostos de três algarismos e um zero no meio. Assim, mudando apenas um número, a Porsche criava uma marca que a acompanharia até hoje.\n[…]\nEle foi designado \"Porsche 901\" (901 sendo o número interno do projeto). A Peugeot protestou baseada no fato de que eles tinham o registro de todos os nomes de carros consistindo de dois números com um zero entre eles. Logo, antes do início da produção, o novo Porsche teve seu nome alterado para 911. Começou a ser vendido em 1964.\n[…]\nUma versão turbo do 993 foi lançada em 1995, tornando-se o primeiro Porsche de série com turbochargers duplos, e o primeiro 911 Turbo a possuir tração nas quarto rodas. A semelhança nas especificações e performance inspiraram vários testes de comparação frente ao Porsche 959 (ex. Car and Driver, julho de 1997, p. 63).\n[…]\nA potência do motor aspirado de 3,6-litros é de 409 cv @ 7600rpm. A potência específica é de 115 cv/l. Esses números são os mesmos do recém-lançado 911 GT3, mas o RS conta com um trem de força exclusivo, que lhe permite uma performance ainda melhor. O câmbio curto de seis marchas leva o carro, que é 20 kg mais leve, a acelerar de zero a 100 km/h em 4,2s e de zero a 200 km/h em 13,3s, com máxima de 310 km/h.\n[…]\n«Porsche Official Website»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Vasa",
      "descricao": "Navio de guerra sueco que afundou na viagem inaugural em 1628 e foi recuperado em 1961, hoje no Museu Vasa, em Estocolmo."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1628, o navio de guerra sueco Vasa afundou logo depois de zarpar, ainda dentro do porto de Estocolmo. Qual foi a causa?",
    "resposta": "Era instável demais",
    "distratores": [
      "Bateu num rochedo",
      "Foi atacado",
      "Incêndio a bordo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Vasa_(ship)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vasa_(ship)",
        "situacao": "ok",
        "texto": "Vasa (previously Wasa) (Swedish pronunciation: [²vɑːsa] ) is a Swedish warship built between 1626 and 1628. The ship sank after sailing roughly 1,300 m (1,400 yd) into her maiden voyage on 10 August 1628. She fell into obscurity after most of her valuable bronze cannons were salvaged in the 17th century, until she was located again in the late 1950s in a busy shipping area in Stockholm harbor. The\n[…]\nFour more heavy guns were intended for the stern, but the cannon foundry could not cast guns as fast as the navy yard could build ships, and Vasa waited nearly a year after construction was finished for her armament. When the ship sailed in August 1628, eight of the planned armament of 72 guns had still not been delivered.\n[…]\nOn 10 August 1628, Captain Söfring Hansson ordered Vasa to depart on her maiden voyage to the naval station at Älvsnabben. The day was calm, and the only wind was a light breeze from the southwest. The ship was warped along the eastern waterfront of the city to the southern side of the harbor, where four sails were set, and the ship made way to the east. The gun ports were open, and the guns were out to fire a salute as the ship left Stockholm.\n[…]\nVasa had four preserved decks: the upper and lower gundecks, the hold and the orlop. Because of the constraints of preparing the ship for conservation, the archaeologists had to work quickly, in 13-hour shifts during the first week of excavation. The upper gundeck was greatly disturbed by the various salvage projects between 1628 and 1961, and it contained not only material that had fallen down from the rigging and upper deck, but also more than three centuries of harbor refuse.\n[…]\nVasa Museum\n[…]\nOfficial website of the Vasa Museum\n[…]\nSVT Play Video clips of the recovery of Vasa (in Swedish).\n[…]\nA tour of the inside of the ship first episode of five produced by the Vasa Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vasa_%28navio%29",
        "situacao": "ok",
        "texto": "O Vasa ou Vasen foi um navio de guerra da Marinha Sueca. Ele afundou durante sua viagem inaugural em 10 de agosto de 1628 depois de viajar apenas 1,3 quilômetro. Ele foi praticamente esquecido depois da maioria dos seus valiosos canhões de bronze terem sido recuperados, porém foi redescoberto no final da década de 1950 no meio de uma área movimentada do porto de Estocolmo.\n[…]\nEsta falha subjacente não era possível de ser corrigida apenas ao adicionar mais lastro e talvez teria precisado de grandes alterações de projeto para ser consertada. As margens de segurança no século XVII eram muito abaixo de qualquer coisa que seria aceitável hoje. Além disso, navios de guerra da época era construídos com superestruturas intencionalmente altas para serem usadas como plataformas de disparo, deixando o Vasa ainda mais instável.\n[…]\nHansson ordenou em 10 de agosto de 1628 que o Vasa partisse em sua viagem inaugural para a base naval em Älvsnabben, no Arquipélago de Estocolmo. O dia estava calmo e o único vento era uma leve brisa do sudoeste. O navio foi puxado por uma âncora pelo litoral leste da cidade para o lado sul do porto, onde quatro velas foram desfraldadas e a embarcação partiu para o leste.\n[…]\nEsta água rapidamente excedeu a capacidade de endireitamento do navio, continuando a entrar até correr para os porões. O Vasa afundou rapidamente a uma profundidade de 32 metros e a apenas 120 metros do litoral, tendo viajado 1,3 quilômetro. Sobreviventes se agarraram a destroços ou aos mastros, que ainda estavam acima da superfície. Barcos próximos correram para prestar auxílio, mas apesar disto e a proximidade do litoral, foi relatado que trinta pessoas morreram.\n[…]\nO último objeto recuperado foi um escaler, encontrado paralelo ao navio e que acredita-se que estava sendo rebocado pelo Vasa quando este afundou.\n[…]\nPágina oficial do Museu Vasa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Hindenburg",
      "descricao": "Dirigível alemão de passageiros destruído por um incêndio em Lakehurst, nos Estados Unidos, em 1937."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O incêndio do Hindenburg, em 1937, foi filmado e transmitido pelo rádio. Que consequência ele teve para o transporte aéreo?",
    "resposta": "Fim dos dirigíveis de passageiros",
    "distratores": [
      "Proibição de voos noturnos",
      "Fim dos balões meteorológicos",
      "Criação dos paraquedas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hindenburg_disaster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hindenburg_disaster",
        "situacao": "ok",
        "texto": "The Hindenburg disaster was an airship accident that occurred on May 6, 1937, in Manchester Township, New Jersey, United States. The LZ 129 Hindenburg (Luftschiff Zeppelin #129; Registration: D-LZ 129) was a Nazi German commercial passenger-carrying rigid airship, the lead ship of the Hindenburg class, the longest class of flying machine and the largest airship by envelope volume.\n[…]\nAfter opening its 1937 season by completing a single round-trip passage to Rio de Janeiro, Brazil, in late March, the Hindenburg departed from Frankfurt, Germany, on the evening of May 3, on the first of ten round trips between Europe and the United States that were scheduled for its second year of commercial service.\n[…]\nAnother proponent of the sabotage hypothesis was Max Pruss, captain of the Hindenburg throughout the airship's career. Pruss flew on nearly every flight of the Graf Zeppelin since 1928 until the Hindenburg was launched in 1936. In a 1960 interview conducted by Kenneth Leish for Columbia University's Oral History Research Office, Pruss said early dirigible travel was safe, and therefore he strongly believed that sabotage was to blame.\n[…]\nThe inquiry reported that rivets connecting the aft end of the axial passageway to the hull had pulled out and that all radial wires in the frame closest to the stern had broken under tension. Although the Hindenburg had been recertified for passenger service in 1937, it had completed a full year of operations totalling around 170,000 miles, during which undetected lateral or torsional stress may have accumulated in its structure.\n[…]\nRadio Gives Fast Zeppelin Coverage – Broadcasting Magazine. p. 14. (May 15, 1937) article on how radio reported the Hindenburg disaster\n[…]\nUnder Fire! – WLS Stand By magazine (May 15, 1937) article on Herb Morrison and his engineer Charlie Nehlsen reporting the Hindenburg disaster"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Desastre_do_Hindenburg",
        "situacao": "ok",
        "texto": "O desastre do Hindenburg ocorreu em 6 de maio de 1937, em Lakehurst, Nova Jersey, Estados Unidos. O dirigível alemão de passageiros LZ 129 Hindenburg pegou fogo e foi destruído durante a sua tentativa de atracar com o seu mastro de amarração na Estação Aérea Naval de Lakehurst. A bordo estavam 97 pessoas (36 passageiros e 61 tripulantes); houve 36 mortes (13 passageiros e 22 tripulantes, 1 trabalh\n[…]\nO desastre foi o tema da cobertura de noticiários, fotografias e relatos do jornalista Herbert Morrison no campo de pouso, que foram transmitidos no dia seguinte. Uma variedade de hipóteses foi apresentada para as causas do incêndio. O evento abalou a confiança do público na gigantesca aeronave rígida que transportava passageiros e marcou o fim abrupto da era dos dirigíveis.\n[…]\nInvestigações posteriores, mais detalhadas, realmente atrelaram a origem das chamas a faíscas elétricas que se desencadearam ao se lançar as amarras ao solo no processo de pouso, geradas pela descarga de energia eletrostática acumulada no dirigível.\n[…]\nO hidrogênio, que também contribuiu de forma indireta para o incêndio, queima com chama azulada, quase invisível. Uma aeronave de dimensões idênticas, o LZ-130 Graf Zeppelin II, que substituiria o veterano LZ-127, chegou a ser construída por completo, mas foi desmontada em 1940, sem nunca ter operado regularmente.\n[…]\nUma outra hipótese aventada, chamada de \"Incendiary Paint Theory\" (IPT), culpava não o gás hidrogênio mas sim a própria estrutura do balão, construído com tecido de algodão impermeabilizado com acetato de celulose e recoberto com pó aglutinado de alumínio (a fim de conferir-lhe uma cor prateada permitindo o destaque da suástica) ligeiramente inflamáveis — pelo início e pela veloz propagação das chamas após iniciadas, essas vermelhas e amarelas, conforme relatos.\n[…]\nAcidente aéreo\n[…]\nAs 63 viagens do Hindenburg",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Hindenburg",
      "descricao": "Dirigível alemão de passageiros destruído por um incêndio em Lakehurst, nos Estados Unidos, em 1937."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1936, além de cruzar o Atlântico Norte rumo aos Estados Unidos, o dirigível Hindenburg fez viagens até qual cidade brasileira?",
    "resposta": "Rio de Janeiro",
    "distratores": [
      "Salvador",
      "Santos",
      "Belém"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/LZ_129_Hindenburg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/LZ_129_Hindenburg",
        "situacao": "ok",
        "texto": "LZ 129 Hindenburg (Luftschiff Zeppelin #129; registration: D-LZ 129) was a German commercial passenger-carrying rigid airship, the lead ship of its class, the longest class of flying machine and the largest airship by envelope volume. It was designed and built by the Zeppelin Company (Luftschiffbau Zeppelin GmbH) on the shores of Lake Constance in Friedrichshafen, Germany,  and was operated by the\n[…]\nThis was to be followed by its first commercial passenger flight, a four-day transatlantic voyage to Rio de Janeiro that departed from the Friedrichshafen Airport in nearby Löwenthal on March 31. After again departing from Löwenthal on 6 May on its first of ten round trips to North America made in 1936, all Hindenburg's subsequent transatlantic flights to both North and South America originated at the airport at Frankfurt am Main.\n[…]\nWith the completion of voting on the referendum (which the German Government claimed had been approved by a \"98.79% 'Yes' vote\"), Hindenburg returned to Löwenthal on March 29 to prepare for its first commercial passenger flight, a transatlantic passage to Rio de Janeiro scheduled to depart from there on March 31.\n[…]\nIn July 1936, Hindenburg completed a record Atlantic round trip between Frankfurt and Lakehurst in 98 hours and 28 minutes of flight time (52:49 westbound, 45:39 eastbound). Many prominent people were passengers on the Hindenburg, including boxer Max Schmeling making his triumphant return to Germany in June 1936 after his world heavyweight title knockout of Joe Louis at Yankee Stadium.\n[…]\nDetailed Technical Drawing of the LZ 129 Hindenburg\n[…]\n\"The Air Liners Of The Future.\" Popular Mechanics, February 1930, the future of dirigibles as aviation experts predicted in 1930, drawings on pages 220 and 221 shows how aviation experts saw the Hindenburg then under construction, including an overhead glass covered dance floor"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/LZ_129_Hindenburg",
        "situacao": "ok",
        "texto": "LZ 129 Hindenburg, ou simplesmente Hindenburg, foi um dirigível construído pela empresa Luftschiffbau-Zeppelin GmbH, na Alemanha. O dirigível, até os dias atuais, retém o título de a maior aeronave a voar. Foi um ícone da indústria alemã amplamente empregado como tal na propaganda nazista. Seu primeiro voo foi em 1936 e foi usado em 63 voos durante 14 meses até o seu fim trágico em 6 de maio de 19\n[…]\nO dirigível era inflado com hidrogênio, ao invés de hélio, principalmente devido ao preço, que era mais barato, também o uso do hidrogênio diminuía a dependência do hélio que era em sua maior parte importado dos Estados Unidos.\n[…]\nO primeiro voo comercial se deu em 31 de março de 1936 em uma viagem de quatro dias de Friedrichshafen para o Rio de Janeiro, um dos quatro motores quebrou e o dirigível teve de fazer um pouso em Recife (ver: Torre do Zeppelin). Na viagem de volta, outro motor quebrou no Deserto do Saara forçando aterrisagens não programadas em Marrocos e em França.\n[…]\nNo total, o Hindenburg cruzou 17 vezes o oceano Atlântico, sendo 10 viagens para os Estados Unidos e 7 para o Brasil. Uma viagem da Alemanha para os Estados Unidos custava 400 dólares.\n[…]\nEm sua última viagem saiu de Hamburgo e cruzou o Atlântico a 110 km/h, chegando à Costa Leste dos Estados Unidos em 6 de maio de 1937.\n[…]\nEm 6 de maio de 1937 ao preparar-se para aportar no campo de pouso da base naval de Lakehurst (Lakehurst Naval Air Station), em Nova Jersey, nos Estados Unidos, o gigantesco dirigível Hindenburg contava com 97 ocupantes a bordo, sendo 36 passageiros e 61 tripulantes, vindos da Alemanha. Durante as manobras de pouso, às 19 horas e 30 minutos, um incêndio tomou conta da aeronave e o saldo de mortos foi de 13 passageiros, 22 tripulantes a bordo e 1 técnico em solo, totalizando 36 fatalidades.\n[…]\nHindenburg em Portugal\n[…]\nAs 63 viagens do Hindenburg",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Motim do Bounty",
      "descricao": "Rebelião de 1789 a bordo do navio britânico HMS Bounty, no Pacífico, liderada por Fletcher Christian contra o capitão William Bligh."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O navio britânico Bounty, palco de um famoso motim, foi ao Taiti em missão de buscar mudas de qual planta para levar ao Caribe?",
    "resposta": "Fruta-pão",
    "distratores": [
      "Cana-de-açúcar",
      "Baunilha",
      "Café"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mutiny_on_the_Bounty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mutiny_on_the_Bounty",
        "situacao": "ok",
        "texto": "The Mutiny on the Bounty occurred in the Pacific Ocean on 28 April 1789. Disaffected crewmen, led by acting-Lieutenant Fletcher Christian, seized control of the Royal Navy merchant ship HMS Bounty from its captain, Lieutenant William Bligh, and set him and 18 loyalists adrift in the ship's open launch. The reasons behind the mutiny are still debated.\n[…]\nAfter a period of idleness, Bligh took temporary employment in the mercantile service and in 1785 was captain of the Britannia, a vessel owned by his wife's uncle, Duncan Campbell. Bligh assumed the prestigious Bounty appointment on 16 August 1787, at a considerable financial cost. His lieutenant's pay of four shillings a day (£70 a year) contrasted with the £500 a year he had earned as captain of Britannia.\n[…]\nBounty would thus complete a circumnavigation of the Earth in the Southern Hemisphere.\n[…]\nMost of Bounty's crew were chosen by Bligh or were recommended to him by influential patrons. The gunner, William Peckover, and the armourer, Joseph Coleman, had been with Cook and Bligh on Resolution; several others had sailed under Bligh more recently on Britannia. Among these was the 23-year-old Fletcher Christian, who came from a wealthy Cumberland family descended from Manx gentry. Christian had chosen a life at sea rather than the legal career envisaged by his family.\n[…]\nOverall, Bounty's crew was relatively youthful, the majority being under age 30; at the time of departure, Bligh was 33 years old. Among the older crewmembers were the 39-year-old Peckover, who had sailed on all three of Cook's voyages, and Lawrence Lebogue, formerly sailmaker on Britannia. The youngest aboard were Hallett and Heywood, both aged 15 when they left England.\n[…]\nBoth Pitcairn Island Museum and Bounty Museum on Norfolk Island use objects and memorabilia to interpret the history of the mutineers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Motim_do_HMS_Bounty",
        "situacao": "ok",
        "texto": "O motim do HMS Bounty ocorreu a bordo do navio HMS Bounty da Marinha Real Britânica em 28 de abril de 1789 no meio do Oceano Pacífico. Tripulantes insatisfeitos liderados pelo mestre assistente Fletcher Christian tomaram o controle da embarcação das mãos de seu comandante, o tenente William Bligh, deixando-o à deriva abordo de um bote com poucos suprimentos junto com outros dezoito marinheiros.\n[…]\nBligh conseguiu voltar para a Grã-Bretanha em abril de 1790 e o Almirantado Britânico enviou o HMS Pandora para prender os amotinados. Catorze foram capturados no Taiti e aprisionados no navio, que então procurou sem sucesso por Christian e o resto dos homens que haviam ficado em Pitcairn. O Pandora encalhou na Grande Barreira de Coral no caminho de volta, perdendo 31 tripulantes e quatro prisioneiros do Bounty.\n[…]\nO Bounty foi adquirido para transportar frutas-pão do Taiti (então chamada de \"Otaheite\"), uma ilha polinésia no sul do Oceano Pacífico, até as colônias britânicas nas Índias Ocidentais. A expedição foi patrocinada pela Royal Society e organizada por seu presidente sir Joseph Banks, que compartilhava a visão dos donos de plantações caribenhos de que frutas-pão poderiam ser cultivadas lá e servir como comida barata para os escravos.\n[…]\nBligh passou por um período de ociosidade e então conseguiu trabalho temporário na marinha mercante, sendo comandante em 1785 do Britannia, navio propriedade do tio de sua esposa Duncan Campbell. Bligh assumiu em 16 de agosto de 1787 a nomeação no Bounty, com um considerável custo financeiro: seu pagamento de quatro xelins por dia (totalizando setenta libras por ano) contrastava com as quinhentas libras anuais que recebeu como comandante do Britannia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "de Havilland Comet",
      "descricao": "Avião britânico da de Havilland, primeiro jato comercial de passageiros a entrar em serviço, em 1952."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1954, dois jatos Comet se partiram em pleno voo. Que problema, revelado pela investigação, mudou o projeto dos aviões a jato?",
    "resposta": "Fadiga do metal",
    "distratores": [
      "Bombas a bordo",
      "Gelo nas asas",
      "Raios em tempestades"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/De_Havilland_Comet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/De_Havilland_Comet",
        "situacao": "ok",
        "texto": "The de Havilland DH.106 Comet is a four-engine narrow body aircraft developed and manufactured by de Havilland in the United Kingdom. The world's first commercial jet airliner, the Comet 1 prototype first flew in 1949. It features an aerodynamically clean design with four de Havilland Ghost turbojet engines located in the wing roots, a pressurised cabin, and large windows. For the era, it offered \n[…]\nThe Comet was an all-metal low-wing cantilever monoplane powered by four jet engines; it had a four-place cockpit occupied by two pilots, a flight engineer, and a navigator. The clean, low-drag design of the aircraft featured many design elements that were fairly uncommon at the time, including a swept-wing leading edge, integral wing fuel tanks, and four-wheel bogie main undercarriage units designed by de Havilland.\n[…]\nThe fuselage skins on the Comet were fastened together using modified Erco automatic riveting machines, which punched holes through, dimpled, and then riveted sheet metal parts together. While some contemporary sources and discussions claim punch riveting negatively affected the Comet’s fatigue life, there is no evidence of punched rivet holes having an appreciably different fatigue strength than drilled rivet holes.\n[…]\nIn spite of the Comet being subjected to what was then the most rigorous testing of any contemporary airliner, pressurisation and the dynamic stresses involved were not thoroughly understood at the time of the aircraft's development, nor was the concept of metal fatigue. Though these lessons could be implemented on the drawing board for future aircraft, corrections could only be retroactively applied to the Comet.\n[…]\nFilm of BOAC De Havilland Comet 3 G-ANLO at Vancouver International Airport in December 1955\n[…]\nThe de Havilland Comet in RCAF Service\n[…]\n\"The Comet Accidents: History of Events\"—A 1954 Flight article of Sir Lionel Heald's summary of the enquiry"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/De_Havilland_Comet",
        "situacao": "ok",
        "texto": "O de Havilland DH 106 Comet, ou simplesmente Comet, é um avião comercial construído pela indústria aeronáutica inglesa de Havilland, que fez história por ser a primeira aeronave comercial propulsionada por motores a jato.\n[…]\nComo os jatos voam em altitudes superiores, as oscilações de temperatura e o sistema de pressurização causavam fadiga no material, problema desconhecido na época. As janelas quadradas e as entradas das antenas do rádio, sofriam pressão maior, ocasionando micro-rachaduras, que se agravavam durante o voo, causando a desintegração em voo de duas aeronaves, uma da BOAC e outra da South African Airlines, na época subsidiaria da BOAC.\n[…]\nAssim, o magnata das aeronaves britânicas Geoffrey de Havilland viu nesse projeto uma maneira de ganhar a confiança das companhias aéreas, já que a empresa era apenas conhecida por diversos turbo-hélices e aviões militares. A ideia inicial era um jato pequeno, semelhantes aos jatos monomotores atuais da Cirrus, mas, com cada vez mais \"pitacos\" das companhias aéreas, o jato ficou cada vez maior e mais ambicioso. Assim, foi planejado o Comet 1.\n[…]\nTambém as janelas dos primeiros Comet eram quadradas, o que criava pontos de tensão nas extremidades. É por isso que, a partir dessas tragédias, os aviões passaram a ter janelas redondas e ovais, com o propósito de descentralizar a tensão e, consequentemente, a fadiga metálica.\n[…]\nNo caso do Comet, a falha só foi exposta durante o investigação que mostrou como o processo de montagem das janelas influenciava na aparição das rachaduras derivadas da variação de pressão e da força aplicada sobre o frágil material (alumínio), com a aplicação dos pregos.\n[…]\nMedia relacionados com De Havilland Comet no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Mini Mark I",
      "descricao": "Primeira versão do carro compacto Mini da British Motor Corporation, produzida a partir de 1959."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Mini, lançado em 1959, foi encomendado como carro econômico depois de um racionamento de combustível causado por qual crise de 1956?",
    "resposta": "Crise de Suez",
    "distratores": [
      "Crise dos mísseis",
      "Crise do petróleo",
      "Crise de Berlim"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mini",
        "situacao": "ok",
        "texto": "The Mini is a two-door, four-seat small car produced for four decades over a single generation, with many names and variants, by the British Motor Corporation (BMC) and its successors British Leyland and the Rover Group, and finally (briefly) under BMW ownership. Minis were built as saloons, estates, convertibles, and various other body styles. Minus a brief 1990s hiatus, from 1959 into 2000, an e\n[…]\nThe Mini came about because of a fuel shortage caused by the 1956 Suez Crisis. Petrol was once again rationed in the UK, sales of large cars slumped, and the market for German bubble cars boomed, even in countries such as the United Kingdom, where imported cars were still a rarity.\n[…]\nThe first example, a Morris Mini-Minor with the registration 621 AOK, is on display at the Heritage Motor Centre in Warwickshire. Another early example from 1959 is on display at the National Motor Museum in Hampshire.\n[…]\nAugust 1959: Introduction of the Austin Seven, Morris Mini-Minor and Morris Mini-Minor DL 2-door saloons, all with transversely mounted 848 cc engine and 4-speed manual gearbox\n[…]\n1960: Introduction of the Austin Seven Countryman and Morris Mini-Minor Traveller 3-door estates, both with 848 cc engine from the saloon models. 116,667 cars built in the first full year of production.\n[…]\n1961: Introduction of the Austin Seven Super and Morris Mini-Minor Super 2-door saloons\n[…]\nOctober 1967: Mark 2 range launched with facelift and upgraded equipment. Austin Mini range as follows: 850, 1000, Cooper 998 and Cooper 1275 S 2-door saloons and 1000 Countryman 3-door estate. Morris Mini range as follows: 850, 850 SDL, 1000 SDL, Cooper 998 and Cooper 1275 S 2-door saloons and 1000 Traveller 3-door estate. Optional automatic transmission available on all Austin models (except 850) and Morris Mini 1000 SDL saloon.\n[…]\n1980: The Mini becomes the Austin Mini.\n[…]\nMini (Mark I)\n[…]\nMini Hatch\n[…]\nInternational Mini Meet"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mini_%281959-2000%29",
        "situacao": "ok",
        "texto": "Este artigo é sobre o antigo modelo. Para o novo modelo, veja MINI (2001-2006)\n[…]\nO Mini é um carro subcompacto produzido pela British Motor Corporation (BMC) e seus sucessores, de 1959 até 2000. O original é considerado um ícone britânico da década de 1960 tendo sido concebido pelo engenheiro inglês Sir Alec Issigonis.\n[…]\nO veículo é, em alguns aspectos considerados o equivalente britânico do seu contemporâneo alemão, o Fusca, que apreciou a popularidade similar na América do Norte. Em 1999, o Mini foi votado o segundo mais influente carro do século XX, atrás apenas do Ford Model T.\n[…]\nA sua capacidade de tração assim como uma maneabilidade ímpar permitiu ao Mini impor-se entre carros mais potentes e de maiores dimensões nos mais importantes eventos mundiais. Em 1964 o irlandês Paddy Hopkirk venceu aos comandos de um Mini Cooper o Rali de Monte Carlo. Esta proeza foi repetida por mais dois pilotos finlandeses Timo Makinen e Rauno Aaltonen em 1965 e 1967 respetivamente.\n[…]\nNa série de humor Mr. Bean, o protagonista frequentemente se envolve em alguma confusão com seu Mini amarelo.\n[…]\nMini celebra 55 anos e está cada vez mais jovem\n[…]\nAustin Memories Tudo sobre a história de Longbridge e modelos produzidos\n[…]\nBest Cars Web Site. Mini: A pequena grande obra\n[…]\nQuatro Rodas. Clássicos: o máximo do Mini",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Airbus A380",
      "descricao": "Avião de passageiros de grande porte e dois conveses completos, fabricado pela Airbus de 2003 a 2021."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O gigante Airbus A380 tinha peças feitas em vários países europeus. Em que cidade francesa ficava a sua montagem final?",
    "resposta": "Toulouse",
    "distratores": [
      "Paris",
      "Lyon",
      "Marselha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Airbus_A380"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Airbus_A380",
        "situacao": "ok",
        "texto": "The Airbus A380 is a large wide-body airliner, developed and produced by Airbus from 2003 to 2021. It is the world's largest passenger airliner and the only full-length double-deck jet airliner.\n[…]\nAirbus studies started in 1988, and the project was announced in 1990 to challenge the dominance of the Boeing 747 in the long-haul market. The then-designated A3XX project was presented in 1994 and Airbus launched the €9.5 billion (US$10.7 billion) A380 programme on 19 December 2000. The first prototype was unveiled in Toulouse, France, on 18 January 2005, commencing its first flight on 27 April 2005.\n[…]\nOn 25 September 2020, Airbus completed assembly of the final A380 fuselage. Nine aircraft remained to be delivered (eight for Emirates, one for All Nippon Airways) and production operations continued to finish those aircraft. On 17 March 2021, the final Airbus A380 (manufacturing serial number 272) made its maiden flight from Toulouse to Hamburg for cabin outfitting, before being delivered to Emirates on 16 December 2021.\n[…]\nThe wings of the A380 were designed in Filton, England and Wichita, US, with its manufacturing in Broughton in the United Kingdom. The wings were then transported to the harbour of Mostyn, where they were transported by barge to Toulouse, France, for integration and final assembly with the rest of the aircraft and its components.\n[…]\nDonated by Airbus at the same time as A380 MSN4, the second test A380 (MSN2), was donated to the Aeroscopia museum at Toulouse-Blagnac Airport, Toulouse, along with the first Airbus A320 and an Airbus A340, that had also previously been used by the company for test flights.\n[…]\n\"Airbus A380 Aircraft Profile\". FlightGlobal. 27 February 2007."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Airbus_A380",
        "situacao": "ok",
        "texto": "O Airbus A380 é uma aeronave widebody quadrimotor a jato para o transporte de passageiros, fabricada pela Airbus. É o maior avião comercial do mundo. Os aeroportos em que opera tiveram suas instalações adaptadas para acomodá-lo com segurança. Inicialmente foi chamado de Airbus A3XX e projetado para desafiar o monopólio da Boeing no mercado de grandes aeronaves. O A380 fez seu primeiro voo em 27 de\n[…]\nAs principais seções estruturais do A380 são construídas na França, Alemanha, Espanha e Reino Unido. Devido ao grande tamanho dos componentes, métodos de transporte tradicionais foram inviáveis, para que eles fossem levados para a fábrica em Toulouse, embora algumas partes são movidas pelo Airbus Beluga, aeronave utilizada no transporte de outros modelos da Airbus. Os componentes do A380 são fornecidos por empresas de todo o mundo.\n[…]\nEm Saint-Nazaire, no oeste da França, os navios carregam as seções da fuselagem que vieram de Hamburgo para maiores, montadas em seções, alguns dos quais incluem o nariz. O navio descarrega em Bordeaux. O navio então pega as seções da barriga e da cauda em Cádiz no sul da Espanha, e distribui para Bordeaux. De lá, as partes do A380 são transportados por barcaças para Langon, e, por comboios rodoviários, para Toulouse.\n[…]\nApós a montagem, a aeronave voa para Hamburgo, onde é feita a pintura. A Airbus produz, em média, uma quantidade de quatro A380 por semana.\n[…]\nCinco aeronaves A380 foram construídas para testes e demonstrações. O primeiro A380, registrado F-WWOW, foi inaugurado em Toulouse em 18 de janeiro de 2005. Seu primeiro voo ocorreu às 10h29 da manhã (08h29 UTC), em 27 de abril de 2005. Este avião, equipado com o Rolls-Royce Trent 900, voou do Aeroporto de Toulouse-Blagnac com uma tripulação de seis tripulantes, chefiada pelo piloto chefe Jacques Rosay. Após o desembarque, Rosay disse voar com o A380 tinha sido \"como pilotar uma bicicleta\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Blériot XI",
      "descricao": "Monoplano francês pioneiro, usado por Louis Blériot na travessia do Canal da Mancha em 1909."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1909, Louis Blériot cruzou de avião o Canal da Mancha, partindo da França. Perto de qual cidade inglesa ele pousou?",
    "resposta": "Dover",
    "distratores": [
      "Brighton",
      "Portsmouth",
      "Southampton"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bl%C3%A9riot_XI"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bl%C3%A9riot_XI",
        "situacao": "ok",
        "texto": "The Blériot XI is a French aircraft from the pioneer era of aviation. The first example was used by Louis Blériot to make the first flight across the English Channel in a heavier-than-air aircraft, on 25 July 1909. This is one of the most famous accomplishments of the pioneer era of aviation, and not only won Blériot a lasting place in history but also assured the future of his aircraft manufactur\n[…]\nThe Blériot XI gained lasting fame on 25 July 1909, when Blériot crossed the English Channel from Calais to Dover, winning a £1,000 (equivalent to £115,000 in 2018) prize awarded by the Daily Mail. For several days, high winds had grounded Blériot and his rivals: Hubert Latham, who flew an Antoinette monoplane, and Count de Lambert, who brought two Wright biplanes. On 25 July, when the wind had dropped in the morning and the skies had cleared, Blériot took off at sunrise.\n[…]\nBlériot XI-3 Concours Militaire\n[…]\nIn addition to the aircraft used by Louis Blériot to make his cross-channel flight in 1909, on display in the Musée des Arts et Métiers in Paris, a number of examples have been preserved. Both the British and American restored-to-airworthiness examples, each now over a century old and believed to be the two oldest flyable aircraft anywhere on Earth, are usually only \"hopped\" for short distances due to their uniqueness.\n[…]\nUnknown ID – Bleriot XI on static display at the Musée des Arts et Métiers in Paris. This is the original Type XI aircraft that Louis Blériot flew across the English Channel on 25 July 1909.\n[…]\nVillard, Henry Serrano. Contact! The Story of the Early Aviators. Boston: Dover Publications, 2002. ISBN 978-0-486-42327-2.\n[…]\nOld Rhinebeck Aerodrome's 1909–10 Blériot XI page\n[…]\nLouis Blériot – Developer of Commercial and Military Aircraft US Centennial of Flight Commission.\n[…]\nBlériot XI at Musée des transports de Lucerne, Switzerland\n[…]\nBleriot Type XI N° 225 at MAPICA La Baule, France"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bl%C3%A9riot_XI",
        "situacao": "ok",
        "texto": "O Blériot XI foi o avião utilizado por Louis Blériot em 25 de Julho de 1909 para fazer o primeiro voo de um \"mais pesado que o ar\" cruzando o Canal da Mancha. Essa primazia é uma das mais famosas da \"Era Pioneira\" da aviação, não apenas colocou o nome de Blériot na história como também assegurou o futuro do seu negócio na fabricação de aviões.\n[…]\nO Blériot XI adquiriu grande fama após cruzar  o Canal da Mancha, de Calais até Dover, em 25 de Julho de 1909, ganhando um prêmio de £ 1 000 oferecido pelo jornal Daily Mail (ver Prêmios de aviação Daily Mail).\n[…]\nDepois de um acidente no encontro de aviação de Istanbul em Dezembro de 1909, Blériot desistiu das competições de aviação, e as inscrições da companhia em competições foram voadas por outros pilotos, incluindo Alfred Leblanc, que gerenciou a logística do voo da travessia do canal, que logo em seguida comprou o primeiro Tipo XI que saiu da linha de produção, viando a se tornar instrutor chefe na escola de pilotagem criada por Blériot.\n[…]\nLouis Blériot criou sua primeira escola de aviação em Étampes perto de Rouen em 1909. Uma outra foi criada em Pau, no início de 1910, onde as condições climáticas tornavam os voos durante todo o ano muito mais viáveis. Já em Setembro de 1910, uma terceira foi criada no Aeroporto de Hendon, perto de Londres.\n[…]\nOs primeiros Blériot XI entraram no serviço militar na Itália e na França em 1910. Um ano depois alguns deles foram usados pela Itália no Norte da África (o primeiro uso de um avião numa guerra) e no México. O Royal Flying Corps recebeu seus primeiros Blériot em 1912.\n[…]\nLeon Delagrange, uma das primeiras pessoas a voar um avião na França, morreu em 4 de Janeiro de 1910 voando um Blériot XI quando uma das asas falhou.\n[…]\nFrança\n[…]\nVillard, Henry. Contact! The Story of the Early Aviators. Boston: Dover Publications, 2002. ISBN 978-0-486-42327-2.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Rede Integrada de Transporte",
      "descricao": "Sistema de ônibus de Curitiba com canaletas exclusivas e estações-tubo, referência mundial em corredores expressos."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que arquiteto, prefeito de Curitiba em três mandatos, ficou ligado à criação das canaletas exclusivas e das estações-tubo de ônibus da cidade?",
    "resposta": "Jaime Lerner",
    "distratores": [
      "Rafael Greca",
      "Oscar Niemeyer",
      "Lúcio Costa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jaime_Lerner",
      "https://pt.wikipedia.org/wiki/Rede_Integrada_de_Transporte"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jaime_Lerner",
        "situacao": "ok",
        "texto": "Jaime Lerner (17 December 1937 – 27 May 2021) was a Brazilian politician. He was the governor of the state of Paraná, in southern Brazil. He is renowned as an architect and urban planner, having been mayor of Curitiba, capital of Paraná, three times (1971–1974, 1979–1983 and 1989–1992). In 1994, Lerner was elected governor of Paraná, and was re-elected in 1998.\n[…]\nIn 1988, Jaime Lerner announced his candidacy for mayor of Curitiba with only 12 days remaining before the election. During his first term, Lerner implemented the Rede Integrada de Transporte (also called bus rapid transit), and continued to implement a host of social, ecological, and urban reforms during his ensuing terms as mayor.\n[…]\nPerhaps the crown jewel of Curitiba's achievements is its Rede Integrada de Transporte Bus Rapid Transit system (called \"Speedybus\"). Originally, the city was given federal money to build a subway (Curitiba is not a small town), but Lerner discovered that \"heavy rail\" like a subway costs ten times the amount of \"light rail\" (trolleys), which, in turn, costs ten times the amount of a bus system, even with dedicated bus ways.\n[…]\nIn 2011, Lerner was sentenced to three-and-a-half years in prison for the illegal layoff of a public tender during his mandate as governor. He wasn't arrested due to his age.\n[…]\nIn April 2005, Jaime Lerner participated in the Symposium of China Bus Rapid Transit Initiative (Shanghai) to promote the BRT project in some larger cities. He was specially interviewed  which made an impact on mayors and urban planners across China.\n[…]\nLerner has won a variety of Brazilian and international prizes:\n[…]\nJaime Lerner at TED\n[…]\nThe Sustainable City, Jaime Lerner - Royal Institute of British Architects 2009 International Dialogues Talk\n[…]\n04.14.2010 Sustainable City, Jaime Lerner - Columbia University\n[…]\nJaime Lerner- IaaC Lecture Series 2015"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rede_Integrada_de_Transporte",
        "situacao": "ok",
        "texto": "Rede Integrada de Transporte (RIT) foi um sistema de transporte público baseado em ônibus construído a partir do conceito de Bus Rapid Transit (BRT), criado em Curitiba na década de 1970. A RIT conta com 81 quilômetros de corredores de ônibus, geralmente operados por carros biarticulados, que conectam os terminais integrados nas várias regiões da cidade e transportam cerca de 2 milhões de passagei\n[…]\nO sistema de transporte público curitibano inspirou diversas cidades no Brasil e em outros países a adotarem estratégias semelhantes. Nacionalmente, Rio de Janeiro, Belo Horizonte e Brasília começaram a implantar canaletas exclusivas para ônibus. Em 1998, Enrique Peñalosa, o então prefeito de Bogotá, capital da Colômbia, decidiu criar um sistema BRT em sua cidade depois que visitou Curitiba.\n[…]\nO Plano Diretor de Curitiba, foi adotado em 1966 e modificado em 1972 (Lei No. 4199/72). Lerner fechou a Rua XV de Novembro para veículos, porque era muito utilizada por pedestres. O plano teve um novo desenho para minimizar o tráfego rodoviário: o Sistema Trinário de Transporte. Este sistema utiliza três ruas paralelas: na rua central existe uma faixa exclusiva de ônibus e nas bordas uma via lenta que usufruem do comércio local.\n[…]\nNa década de 1990 surge a linha direta, comumente chamada de ligeirinho e as estações tubo, em 1992 começou a circular os biarticulados vermelhos com capacidade de 220 passageiros e em 1996 ocorre a integração entre a rede de transporte de Curitiba com a Rede Metropolitana chamada de RIT-M.\n[…]\nExistem terminais e pontos de concentração de linhas de transporte não integrados. Eles englobam as linhas de ônibus que fazem conexão direta entre o centro da cidade e os bairros da capital, além de servirem algumas cidades da região metropolitana. São estes:\n[…]\nTambém existem na RMC terminais ligados, direta ou indiretamente, à Rede integrada de Transporte (formando a ligação RIT)."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Canal de Suez",
      "descricao": "Canal artificial no Egito que liga o mar Mediterrâneo ao mar Vermelho."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Por ligar dois mares praticamente no mesmo nível, o Canal de Suez dispensa que estruturas, indispensáveis no Canal do Panamá para subir e descer navios?",
    "resposta": "Eclusas",
    "distratores": [
      "Faróis",
      "Pontes levadiças",
      "Quebra-mares"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Suez_Canal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Suez_Canal",
        "situacao": "ok",
        "texto": "The Suez Canal (; Egyptian Arabic: قناة السويس, Qanāt as-Suwais) is an artificial sea-level waterway in Egypt, connecting the Mediterranean Sea to the Red Sea through the Isthmus of Suez and dividing Africa and Asia (and by extension, the Sinai Peninsula from the rest of Egypt). The 193.3-kilometre-long (120.1-mile) canal is a key trade route between Europe and Asia.\n[…]\nThe Suez Canal set a new record with annual revenue of $9.4 billion in USD for the fiscal year that ended 30 June 2023. Attacks by Houthi rebels on shipping vessels off the coast of Yemen caused monthly losses of $800 million, according to Egypt's President Sisi.\n[…]\nThe Suez Canal Economic Zone, sometimes shortened to SCZONE, describes the set of locations neighbouring the canal where customs rates have been reduced to zero in order to attract investment. The zone comprises over 461 km2 (178 sq mi) within the governorates of Port Said, Ismailia and Suez. Projects in the zone are collectively described as the Suez Canal Area Development Project (SCADP).\n[…]\nNew Suez Canal\n[…]\nPanama Canal\n[…]\nSuez Canal Authority\n[…]\nDarius the Great's Suez Inscriptions\n[…]\nSuez Canal on OpenStreetMap\n[…]\nEncyclopedia of the Orient: Suez Canal Archived 25 September 2018 at the Wayback Machine\n[…]\nEntrance of the Suez Canal – 1882\n[…]\nSuez Canal Container Terminal at Port Said Archived 11 January 2010 at the Wayback Machine\n[…]\nAmerican Society of Civil Engineers – Suez Canal\n[…]\nSuez Canal map by Strommer, 19th century. Archived 22 November 2018 at the Wayback Machine Eran Laor Cartographic Collection, The National Library of Israel. Historic Cities Research Project. Archived 25 March 2022 at the Wayback Machine\n[…]\nImages of container ship Ever Given aground in Suez Canal BBC News\n[…]\nExplained: The Whole Scenario Of Suez Canal. How Would It Have Impacted The Trade If It Persisted Longer? Archived 16 July 2021 at the Wayback Machine – Inventiva"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canal_de_Suez",
        "situacao": "ok",
        "texto": "O canal de Suez (قناة السويس, Qanāt as-Suwais) é uma via navegável artificial ao nível do mar, no Egito, que liga o mar Mediterrâneo ao mar Vermelho através do istmo de Suez. Separa a África da Ásia e a península do Sinai do restante do território egípcio. Com 193,3 km de extensão, permite a navegação entre a Europa e a Ásia sem contornar a África.\n[…]\nA suposta diferença entre os níveis dos dois mares não impediu a busca de uma rota mais curta para o Oriente. Em 1830, o general Francis Chesney enviou ao governo britânico um relatório no qual afirmava que não havia diferença de nível e que era possível construir o canal de Suez, mas o relatório teve pouca repercussão, embora tenha sido examinado por uma comissão da Câmara dos Comuns.\n[…]\nEm 1846, a Société d'Études du Canal de Suez, de Prosper Enfantin, convidou especialistas como Robert Stephenson, Alois Negrelli e Paul-Adrien Bourdaloue para estudar a viabilidade do canal de Suez com a ajuda de Linant de Bellefonds. O levantamento do istmo feito por Bourdaloue foi a primeira comprovação amplamente aceita de que não havia diferença prática de nível entre os mares.\n[…]\nOs navios que se aproximam pelo mar devem comunicar-se por rádio com o porto quando chegam a cerca de 28 quilômetros da boia de águas seguras próxima de Porto Saíde. O canal não tem eclusas, pois o terreno é plano, e a pequena diferença de nível entre as extremidades não interfere na navegação. Sem comportas de proteção, os portos das duas extremidades poderiam ser atingidos por tsunamis vindos do Mediterrâneo ou do mar Vermelho.\n[…]\nEm 2014, havia planos de construir seis novos túneis rodoviários e ferroviários sob o canal. O Ahmed Hamdi era então o único túnel que ligava Suez ao Sinai. Depois foram construídos outros túneis, entre eles dois em Ismaília, inaugurados em maio de 2019, e o Ahmed Hamdi 2, inaugurado em 2021.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Cinto de segurança de três pontos",
      "descricao": "Cinto de segurança que prende o tronco e o quadril, introduzido pela Volvo em 1959."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "A Volvo patenteou o cinto de segurança de três pontos, criado em 1959. O que a empresa decidiu fazer com essa patente?",
    "resposta": "Liberou o uso gratuito",
    "distratores": [
      "Vendeu à Ford",
      "Manteve a exclusividade",
      "Doou ao governo sueco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nils_Bohlin",
      "https://en.wikipedia.org/wiki/Seat_belt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nils_Bohlin",
        "situacao": "ok",
        "texto": "Nils Ivar Bohlin (17 July 1920 – 21 September 2002) was a Swedish mechanical engineer and inventor who invented the three-point safety belt while working at Volvo.\n[…]\nBorn in Härnösand, Sweden, Bohlin received a diploma in mechanical engineering from Härnösand Läroverk in 1939. In 1942 he started working for the aircraft maker Saab as an aircraft designer and helped develop ejection seats. In 1958 he joined Volvo as a safety engineer. He is credited with the invention of the modern three-point safety belt, now a standard safety feature in all cars.\n[…]\nBohlin worked on the seat belt for about a year, using skills in developing ejection seats for SAAB; he concentrated on keeping the driver safe in a car accident. After testing the three-point safety belt, he introduced his invention to the Volvo company in 1959 and received his first patent (number 3,043,625). Ten years later, he led the Central Research and Development Department for Volvo in 1969.\n[…]\nIn 1974, he was awarded the Ralph Isbrandt Automotive Safety Engineering Award, and in 1989 he was inducted into the Hall of Fame for Safety and Health. He received a gold medal from Royal Swedish Academy of Engineering Sciences in 1995 and in 1999, was inducted into the Automotive Hall of Fame. He retired from Volvo as Senior Engineer in 1985 and was posthumously inducted into the National Inventors Hall of Fame.\n[…]\nDredge, Richard. Volvo. Haynes Publishing: Sparkford, UK, November 2003\n[…]\nU.S. patent 3,043,625 Safety Belt, filed August 1959, issued July 1962."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Seat_belt",
        "situacao": "ok",
        "texto": "A seat belt or seatbelt, also known as a safety belt, is a vehicle safety device designed to secure the driver or a passenger of a vehicle against harmful movement that may result during a collision or a sudden stop.\n[…]\nThe three-point seat belt was developed to its modern form by Swedish inventor Nils Bohlin for Volvo, which introduced it in 1959 as standard equipment. In addition to designing an effective three-point belt, Bohlin demonstrated its effectiveness in a study of 28,000 accidents in Sweden. Unbelted occupants sustained fatal injuries throughout the whole speed scale, whereas none of the belted occupants was fatally injured at accident speeds below 60 mph.\n[…]\nA three-point belt is a Y-shaped arrangement, similar to the separate lap and sash belts, but unified. Like the separate lap-and-sash belt, in a collision, the three-point belt spreads out the energy of the moving body over the chest, pelvis, and shoulders. Volvo introduced the first production three-point belt in 1959. The first car with a three-point belt was a Volvo PV 544 that was delivered to a dealer in Kristianstad on August 13, 1959.\n[…]\nThe first car model to have the three-point seat belt as a standard item was the 1959 Volvo 122, first outfitted with a two-point belt at initial delivery in 1958, replaced with the three-point seat belt the following year. The three-point belt was developed by Nils Bohlin, who had earlier also worked on ejection seats at Saab. Volvo then made the new seat belt design patent open in the interest of safety and made it available to other car manufacturers for free.\n[…]\nCriss-cross: Experimental safety belt presented in the Volvo SCC. It forms a cross-brace across the chest."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nils_Bohlin",
        "situacao": "ok",
        "texto": "Nils Ivar Bohlin (Hernosândia, 17 de julho de 1920 — Ramfall, 21 de setembro de 2002) foi um engenheiro mecânico e inventor sueco.\n[…]\nInventou o cinto de segurança de três pontos, quando trabalhava na Volvo. Em 1999 foi incluído no Automotive Hall of Fame.\n[…]\nNascido em Härnösand, na Suécia, em 1920, Bohlin obteve um diploma em engenharia mecânica no Ginásio de Härnösand, em 1939. Em 1942, começou a trabalhar para a fabricante de aviões Saab AB como projetista de aeronaves e ajudou a desenvolver assentos ejetáveis. Em 1958, ingressou na Volvo como engenheiro de segurança. A ele é creditada a invenção do moderno cinto de segurança de três pontos, hoje um recurso de segurança padrão em todos os automóveis.\n[…]\nBohlin trabalhou no cinto de segurança por cerca de um ano, utilizando habilidades que usou no desenvolvimento de assentos ejetáveis para SAAB; ele se concentrou em manter o motorista seguro em um acidente de carro. Depois de testar o cinto de segurança de três pontos, ele apresentou sua invenção à empresa Volvo em 1959 e recebeu sua primeira patente (número 3.043.625). Dez anos depois, ele chefiou o Departamento Central de Pesquisa e Desenvolvimento da Volvo em 1969.\n[…]\nEm 1974, recebeu o Prêmio Ralph Isbrandt de Engenharia de Segurança Automotiva e, em 1989, foi incluído no Hall da Fama de Segurança e Saúde. Recebeu uma medalha de ouro da Academia Real Sueca de Ciências de Engenharia em 1995 e, em 1999, foi incluído no Automotive Hall of Fame. Aposentou-se da Volvo como engenheiro sênior em 1985 e foi postumamente incluído no Hall da Fama dos Inventores Nacionais. Bohlin se aposentou em 1995.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Motor a diesel",
      "descricao": "Motor de combustão interna em que o combustível se inflama pela compressão do ar, sem vela de ignição."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Exposição Universal de Paris, em 1900, um motor a diesel foi exibido funcionando com óleo extraído de qual alimento?",
    "resposta": "Amendoim",
    "distratores": [
      "Oliva",
      "Soja",
      "Coco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Diesel_engine",
      "https://en.wikipedia.org/wiki/Rudolf_Diesel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diesel_engine",
        "situacao": "ok",
        "texto": "A diesel engine is an internal combustion engine in which ignition of diesel fuel is caused by the elevated temperature of the air in the cylinder due to mechanical compression; thus, the diesel engine is also called a compression-ignition engine (or CI engine). This contrasts with engines using spark plug-ignition of the air-fuel mixture, such as a petrol engine (gasoline engine) or a gas engine \n[…]\n1927: Bosch introduces the first inline injection pump for motor vehicle diesel engines.\n[…]\nThe power output of medium-speed diesel engines can be as high as 21,870 kW, with the effective efficiency being around 47-48% (1982). Most larger medium-speed engines are started with compressed air direct on pistons, using an air distributor, as opposed to a pneumatic starting motor acting on the flywheel, which tends to be used for smaller engines.\n[…]\nIn warmer climates, diesel engines do not require any starting aid (aside from the starter motor). However, many diesel engines include some form of preheating for the combustion chamber, to assist starting in cold conditions. Engines with a displacement of less than 1 litre per cylinder usually have glowplugs, whilst larger heavy-duty engines have flame-start systems.\n[…]\nIn his 1893 work Theory and Construction of a Rational Heat Motor, Rudolf Diesel considers using coal dust as fuel for the diesel engine. However, Diesel just considered using coal dust (as well as liquid fuels and gas); his actual engine was designed to operate on petroleum, which was soon replaced with regular petrol and kerosene for further testing purposes, as petroleum proved to be too viscous. In addition to kerosene and petrol, Diesel's engine could also operate on ligroin.\n[…]\nSee diesel engine runaway.\n[…]\nIn 1929, in the United States, the Packard Motor Company developed America's first aircraft diesel engine, the Packard DR-980—an air-cooled, 9-cylinder radial engine."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rudolf_Diesel",
        "situacao": "ok",
        "texto": "Rudolf Christian Karl Diesel (English: , German: [ˈʁuːdɔlf ˈkʀɪsti̯an kaʁl ˈdiːzl̩] ; 18 March 1858 – 29 September 1913) was a German inventor and mechanical engineer. He is best known for inventing the diesel engine, which burns diesel fuel. Both are named for him.\n[…]\nDiesel graduated in January 1880 with highest academic honours and returned to Paris, where he assisted Linde with the design and construction of a modern refrigeration and ice plant. Diesel became the director of the plant a year afterwards.\n[…]\nThe first successful diesel engine Motor 250/400 was officially tested in 1897, featuring a 25 horsepower four-stroke, single vertical cylinder compression. Having just revolutionised the engine manufacturing industry, it became an immediate success, with royalties amassing great wealth for Diesel. The engine is currently on display at the German Technical Museum in Munich.\n[…]\nIn a book titled Diesel Engines for Land and Marine Work, Diesel wrote: In 1900 a small Diesel engine was exhibited by the Otto company which, on the suggestion of the French Government, was run on arachide [peanut] oil, and operated so well that very few people were aware of the fact. The motor was built for ordinary oils, and without any modification was run on vegetable oil.\n[…]\nSince 1955, the VdM diesel ring has been awarded annually by the  Association of Motor Journalists to recognize contributions to motor vehicle safety.\n[…]\nRudolf Diesel at ThoughtCo\n[…]\nHistorical background of R Diesel mystery\n[…]\n\"Rudolf Diesel\". Hemp Car. Archived from the original on 3 August 2005. Retrieved 3 August 2005.\n[…]\n\"Diesel, Rudolf\". Encyclopedia Americana. 1920.\n[…]\n\"Diesel, Rudolf\". Collier's New Encyclopedia. 1921.\n[…]\n\"Diesel, Rudolf\". Encyclopædia Britannica (12th ed.). 1922."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Motor_a_diesel",
        "situacao": "ok",
        "texto": "O motor diesel (e não motor a diesel) é um dispositivo mecânico de combustão interna, no qual a ignição do combustível é gerada pela elevação da temperatura do ar no cilindro, devido à compressão mecânica; por isso é chamado de motor de ignição por compressão. Isso contrasta com os motores que usam vela de ignição da mistura ar-combustível, como os motores a gasolina, etanol ou gás.\n[…]\nGraças à sua considerável preparação teórica matemática e física, ele conseguiu projetar um motor com maior eficiência do que o motor a vapor e o motor de combustão interna que Nikolaus August Otto havia inventado antes dele. O motor de Diesel foi patenteado em 1892, mas apenas em 1897 foram feitos quaisquer exemplos que funcionassem satisfatoriamente.\n[…]\nO primeiro protótipo de motor diesel foi alimentado com óleo vegetal (óleo de amendoim), porém o combustível utilizado desde então pelos motores diesel é o óleo diesel (gasóleo em Portugal), um hidrocarboneto obtido a partir da refinação do petróleo a temperaturas de 250°C e 350 °C.\n[…]\nRecentemente no Brasil, por lei, o diesel de petróleo é vendido após receber uma adição percentual de biodiesel, pois esse é produzido de óleo vegetal e/ou animal (fontes de energia renovável) através do processo de transesterificação sendo, portanto, um éster e não um hidrocarboneto como o diesel de origem fóssil.\n[…]\nA produção em série de automóveis leves dotados de motor a diesel, só teve início na década de 1930, por iniciativa de fabricantes da França e Alemanha.\n[…]\n(em alemão) Die Entstehung des Dieselmotors. Rudolf Diesel, Steiger August, 1984. ISBN 9783921564707\n[…]\nMecanica Diesel. Rache A. M. (Marco), Editora Hemus, 2004. ISBN 9788528903874\n[…]\nMotor Diesel\n[…]\nAnimação do ciclo termodinâmico Diesel\n[…]\nMotor Diesel - Inglês\n[…]\nBest Cars Web Site. Diesel, um motor de muitas peculiaridades\n[…]\nBest Cars Web Site. Diesel: a evolução de um motor que ganha importância no mundo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.93 — 2026-10-30**
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
