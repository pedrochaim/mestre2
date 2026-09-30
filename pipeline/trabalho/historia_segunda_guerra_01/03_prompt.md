Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Segunda Guerra Mundial** (tema **História**). Avalie **cada uma**, independentemente, e decida:

- **aprovar:** passa em todos os critérios.
- **reescrever:** tem um problema corrigível. Devolva em `reescrita` a versão corrigida **completa** (`angulo`, `tipo`, `pergunta`, `resposta`, `fonte` e, se o tipo for `multipla`, exatamente 3 `distratores`). **Toda decisão `reescrever` precisa vir com `reescrita` preenchida**, mesmo quando a correção é pequena, como trocar um distrator ou encurtar a resposta: sem ela, a pergunta se perde. Nas decisões `aprovar` e `descartar`, `reescrita` é `null`.
- **descartar:** o problema não tem conserto, ou o fato é fraco demais para valer uma pergunta.

Em `motivo`, explique a decisão em uma frase curta. Na dúvida entre reescrever e descartar, descarte: o MANIFESTO diz "menos e melhor".

# O que verificar

1. **Precisão literal (obrigatório):** leia o enunciado palavra por palavra. Cada verbo, adjetivo e afirmação precisa ser **literalmente** verdadeiro, e não só a resposta. Desconfie especialmente de verbos como *batizou*, *inventou*, *descobriu*, *fundou*, *criou*, e de palavras como *único*, *primeiro*, *maior*, *sempre*, *nunca*. Exemplo: dizer que Colombo *batizou* a Colômbia é falso, porque o país recebeu o nome *em homenagem* a ele. Se houver qualquer imprecisão, reescreva.
2. **Fato e fonte (obrigatório):** você não tem acesso à internet. Cada pergunta traz em `trechos` o que o pipeline baixou das URLs de `fonte`: a abertura de cada página e as passagens mais ligadas à pergunta, separadas por `[…]`. Confira o fato nesses trechos e informe em `apoio`:
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
      "nome": "Operação Barbarossa",
      "descricao": "Invasão da União Soviética pela Alemanha nazista e seus aliados, iniciada em junho de 1941."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A invasão alemã da União Soviética, em 1941, recebeu como codinome o apelido de qual imperador medieval?",
    "resposta": "Frederico Barbarossa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Operation_Barbarossa",
      "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Barbarossa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Operation_Barbarossa",
        "situacao": "ok",
        "texto": "Operation Barbarossa was the invasion of the Soviet Union by Nazi Germany and several of its European Axis allies starting on Sunday, 22 June 1941, during World War II. More than 3.8 million Axis troops invaded the western Soviet Union along a 2,900-kilometer (1,800 mi) front, with the main goal of capturing territory up to a line between Arkhangelsk and Astrakhan, known as the A–A line.\n[…]\nThe operation, code-named after the Holy Roman Emperor Frederick Barbarossa (\"red beard\"), put into action Nazi Germany's ideological goals of eradicating communism and conquering the western Soviet Union to repopulate it with Germans under Generalplan Ost, which planned for the removal of the native Slavic peoples by mass deportation to Siberia, Germanisation, enslavement, and genocide.\n[…]\nAccording to a Germanic medieval legend, revived in the 19th century by the nationalistic tropes of German Romanticism, the Holy Roman Emperor Frederick Barbarossa—who drowned in Asia Minor while leading the Third Crusade—was not dead but asleep, along with his knights, in a cave in the Kyffhäuser mountains in Thuringia, and would awaken in the hour of Germany's greatest need and restore the nation to its former glory.\n[…]\nHitler also renamed the operation to Barbarossa in honor of medieval Emperor Friedrich I of the Holy Roman Empire, a leader of the Third Crusade in the 12th century. The Barbarossa Decree, issued by Hitler on 30 March 1941, supplemented the Directive by decreeing that the war against the Soviet Union would be one of annihilation and legally sanctioned the eradication of all Communist political leaders and intellectual elites in Eastern Europe. The invasion was tentatively set for May 1941.\n[…]\n\"Operation Barbarossa\": Video on YouTube, lecture by David Stahel, author of Operation Barbarossa and Germany's Defeat in the East (2009); via the official channel of Muskegon Community College"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Barbarossa",
        "situacao": "ok",
        "texto": "Operação Barbarossa (em alemão:  Unternehmen Barbarossa) foi o nome de código para a invasão da União Soviética pelas Potências do Eixo, iniciada em 22 de junho de 1941, durante a Segunda Guerra Mundial.\n[…]\nEm 5 de dezembro de 1940, Hitler recebeu os planos militares finais para a invasão, a qual o Alto Comando alemão trabalhava desde julho de 1940 sob o codinome \"Operação Otto\". Hitler, no entanto, estava insatisfeito com esses planos e, em 18 de dezembro, emitiu a Diretriz 21 do Führer, que pedia um novo plano de batalha, agora codificado como \"Operação Barbarossa\".\n[…]\nA operação recebeu o nome do imperador medieval Frederico Barbarossa do Sacro Império Romano, um líder da Terceira Cruzada no século XII. A invasão foi estabelecida para 15 de maio de 1941, embora tenha sido adiada por cerca de 7 semanas por um tempo adicional de preparação por causa da guerra nos Bálcãs e clima ruim.\n[…]\nA Operação Barbarossa foi a maior operação militar na história humana — nunca tantos soldados, tanques, armas e aeronaves foram usados ​​em uma única ofensiva. A invasão abriu a Frente Oriental da Segunda Guerra Mundial, o maior teatro de guerra durante esse conflito, e testemunhou confrontos violentos e destruição sem precedentes por quatro anos, que resultaram na morte de mais de 26 milhões de soviéticos.\n[…]\nPara os historiadores David Glantz e Jonathan House, a influência da Operação Barbarossa não atingiu apenas Stalin, mas os líderes soviéticos subsequentes, alegando que \"coloriu\" suas mentalidades estratégicas pelas \"próximas quatro décadas\" e instigou a criação de \"um elaborado sistema de Estados tampões e fantoches, projetados para isolar a União Soviética de qualquer possível ataque futuro\"."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Força Expedicionária Brasileira",
      "descricao": "Força militar brasileira que lutou ao lado dos Aliados na campanha da Itália, entre 1944 e 1945."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Diziam que era mais fácil certa cena acontecer do que o Brasil entrar na guerra. Essa cena virou o símbolo da Força Expedicionária Brasileira. Qual era?",
    "resposta": "Uma cobra fumando",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_Expeditionary_Force",
      "https://pt.wikipedia.org/wiki/For%C3%A7a_Expedicion%C3%A1ria_Brasileira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Expeditionary_Force",
        "situacao": "ok",
        "texto": "The Brazilian Expeditionary Force (Portuguese: Força Expedicionária Brasileira, FEB), nicknamed Cobras Fumantes (lit. 'the Smoking Snakes'), was a military division of the Brazilian Army and Air Force that fought as part of Allied forces in the Mediterranean Theatre of World War II. It numbered around 25,900 men, including a full infantry division, liaison flight, and fighter squadron.\n[…]\nSeveral reasons contributed to the delay: political distrust between the Brazilian and American authorities, disagreements over the target size of the Brazilian Expeditionary Force, differences between Brazilian aspirations and American preferences for controlling the force, and disagreements on whether it should be fully trained and armed before boarding or get stationed behind the Italian Front and train there.\n[…]\nDue to the Brazilian regime's unwillingness to get more deeply involved in the Allied war effort, by early 1943 a popular saying was: \"Mais provável uma cobra fumar um cachimbo, do que a FEB ir para a frente da luta\" (literally: \"It's more likely for a snake to smoke a pipe than for the FEB to go the front and fight\").\n[…]\nBefore the FEB entered combat, the expression \"a cobra vai fumar\" (\"the snake will smoke\") was often used in Brazil in a context similar to \"when pigs fly\"; soldiers in the division subsequently called themselves Cobras Fumantes (literally, Smoking Snakes) and wore a shoulder patch depicting a green snake smoking a pipe. It was also common for Brazilian soldiers to write on their mortars, \"A Cobra Está Fumando...\" (literally: \"The Snake Is Smoking...\").\n[…]\nAfter the war the meaning was reversed, signifying that something will definitively happen in a furious and worse way. With that second meaning the use of the expression \"A Cobra Vai Fumar!\" (literally: \"The Snake Will Smoke!\") has been retained in Brazilian Portuguese until the present."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/For%C3%A7a_Expedicion%C3%A1ria_Brasileira",
        "situacao": "ok",
        "texto": "Força Expedicionária Brasileira (FEB), identificada pelo distintivo da cobra fumante, foi uma divisão militar do Exército e da Força Aérea Brasileira que lutou como parte das Forças Aliadas no Teatro Mediterrâneo da Segunda Guerra Mundial. Contava com cerca de 25,9 mil homens, incluindo uma divisão de infantaria completa, esquadrilha de ligação e esquadrão de caças.\n[…]\nA participação feminina brasileira na Força Expedicionária Brasileira durante a Segunda Guerra Mundial foi essencial, embora limitada principalmente ao campo da saúde. 73 enfermeiras integraram o Serviço de Saúde da FEB, sendo 67 atuando em hospitais e 6 no transporte aéreo, cuidando dos soldados feridos e doentes. Dentre as enfermeiras presentes no teatro de operações destacou-se a então tenente Elza Cansanção Medeiros que atuou como Oficial de Ligação e Enfermeira-chefe no 7th.\n[…]\nDurante a Segunda Guerra Mundial, as tropas alemãs ficaram surpresas ao encontrar soldados negros entre as fileiras da Força Expedicionária Brasileira, uma realidade incomum para os padrões raciais da época nas forças armadas europeias. A FEB foi reconhecida por sua diversidade racial, o que contrastava com a segregação racial vigente em muitos exércitos, incluindo o alemão nazista.\n[…]\nO Brasil perdeu nesta campanha, mortos em ação, quatrocentos e cinquenta e quatro homens do exército, e cinco pilotos da força aérea. A divisão brasileira ainda teve cerca de duas mil mortes decorrentes dos ferimentos de combate, e mais de doze mil baixas em campanha por mutilação ou outras diversas causas incapacitantes para a continuidade no campo de batalha.\n[…]\nA Cobra Fumou - documentário de 2003 sobre a FEB\n[…]\nO Lapa Azul - documentário brasileiro de 2007 que relata as experiências dos pracinhas brasileiros, do III Batalhão do 11º Regimento de Infantaria da FEB durante a II Guerra.\n[…]\nMuseu da Força Expedicionária Brasileira"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Enola Gay",
      "descricao": "Bombardeiro B-29 americano que lançou a bomba atômica sobre Hiroshima em 6 de agosto de 1945."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O bombardeiro americano que lançou a bomba atômica sobre Hiroshima foi batizado em homenagem a quem?",
    "resposta": "A mãe do piloto",
    "distratores": [
      "A esposa do piloto",
      "A filha do piloto",
      "Uma atriz de Hollywood"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Enola_Gay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Enola_Gay",
        "situacao": "ok",
        "texto": "The Enola Gay  () is a Boeing B-29 Superfortress bomber, named after Enola Gay Tibbets, the mother of the pilot, Colonel Paul Tibbets. On 6 August 1945, during the final stages of World War II, it became the first aircraft to drop an atomic bomb in warfare. The bomb, code-named \"Little Boy\", was targeted at the city of Hiroshima, Japan, and destroyed about three-quarters of the city.\n[…]\nThe Hiroshima mission was followed by another atomic strike. Originally scheduled for 11 August, it was brought forward by two days to 9 August owing to a forecast of bad weather. This time, a nuclear bomb code-named \"Fat Man\" was carried by B-29 Bockscar, piloted by Major Charles W. Sweeney. Enola Gay, flown by Captain George Marquardt's Crew B-10, was the weather reconnaissance aircraft for Kokura, the primary target.\n[…]\nCaptain James W. Strudwick – bombardier\n[…]\nThe Enola Gay became the center of a controversy at the Smithsonian Institution when the museum planned to put its fuselage on public display in 1995 as part of an exhibit commemorating the 50th anniversary of the atomic bombing of Hiroshima. The exhibit, The Crossroads: The End of World War II, the Atomic Bomb and the Cold War, was drafted by the Smithsonian's National Air and Space Museum staff, and arranged around the restored Enola Gay.\n[…]\nOn 6 August 1945, this Martin-built B-29-45-MO dropped the first atomic weapon used in combat on Hiroshima, Japan. Three days later, Bockscar (on display at the U.S. Air Force Museum near Dayton, Ohio) dropped a second atomic bomb on Nagasaki, Japan. Enola Gay flew as the advance weather reconnaissance aircraft that day. A third B-29, The Great Artiste, flew as an observation aircraft on both missions.\n[…]\nCrew: 12 (Hiroshima mission)\n[…]\nOrdnance: Little Boy atomic bomb\n[…]\nEyewitnesses to Hiroshima, Time magazine, 1 August 2005\n[…]\n\"Inside the Enola Gay\", Air & Space, 18 May 2010"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Natal",
      "descricao": "Capital do Rio Grande do Norte, que abrigou uma grande base aérea aliada na Segunda Guerra Mundial."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Natal abrigou a base aérea americana que servia de ponte entre as Américas e a África. Por isso, a cidade ganhou que apelido na guerra?",
    "resposta": "Trampolim da Vitória",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Natal_(Rio_Grande_do_Norte)",
      "https://pt.wikipedia.org/wiki/Base_A%C3%A9rea_de_Natal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Natal_(Rio_Grande_do_Norte)",
        "situacao": "ok",
        "texto": "Natal é a capital do estado brasileiro do Rio Grande do Norte, na Região Nordeste do país. Com aproximadamente 167 km², é a segunda menor capital brasileira em área territorial e dista 2 227 quilômetros de Brasília, capital federal. Com pouco mais de 750 mil habitantes em 2022, é o município mais populoso de seu estado, o oitavo do Nordeste e o 24° do Brasil.\n[…]\nEm 1856, Natal ganhou o Cemitério do Alecrim, o primeiro da cidade. Em 1862 é concluída a construção da torre da Igreja Matriz de Nossa Senhora da Apresentação. Em 4 de agosto de 1878, foi inaugurado o serviço telegráfico. Em 28 de setembro de 1881, foi inaugurada a Estação da Ribeira, a estação ferroviária mais antiga do Rio Grande do Norte, hoje administrada pela Companhia Brasileira de Trens Urbanos (CBTU).\n[…]\nA localização de Natal próxima da \"esquina da América do Sul\" fez com que o Departamento de Guerra dos Estados Unidos considerasse a cidade como \"um dos quatro pontos mais estratégicos do mundo\", ao lado do Canal de Suez, no Egito, e dos estreitos de Bósforo, na Turquia, e Gibraltar, entre a África e a Europa.\n[…]\nOficialmente, Natal possui as seguintes cidades-irmãs:\n[…]\nA modernização do comércio em Natal começou sobretudo a partir da década de 1940, quando norte-americanos visitaram a cidade, durante a época da Segunda Guerra Mundial. Hoje, Natal tem expandido suas atividades de comércio e serviços de informação, apresentando grande quantidade de supermercados e de hipermercados, o que fez com que a cidade passasse a ser chamada pelos empresários de \"Paraíso dos supermercados\".\n[…]\nNatal é tido como a porta de entrada para o turismo no Rio Grande do Norte, recebendo anualmente um fluxo de mais de dois milhões de turistas, tanto nacionais quanto internacionais.\n[…]\nMunicípios do Rio Grande do Norte\n[…]\n«Página da prefeitura do Natal»\n[…]\n«Página da câmara do Natal»\n[…]\n«Natal no WikiMapia»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Base_A%C3%A9rea_de_Natal",
        "situacao": "ok",
        "texto": "A Base Aérea de Natal (BANT) é uma base da Força Aérea Brasileira localizada na cidade de Parnamirim a menos de 20 km da capital do Rio Grande do Norte. Hoje é a Ala 10.\n[…]\nEm 2014, operavam na Base Aérea de Natal as seguintes unidades da FAB:\n[…]\nA base contava ainda com um C-98 (Cessna 208 Caravan) para missões administrativas.\n[…]\nHistória da Base Aérea de Natal"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Erwin Rommel",
      "descricao": "Marechal de campo alemão que comandou as forças do Eixo no norte da África na Segunda Guerra Mundial."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por sua astúcia nos desertos do norte da África, como os próprios inimigos britânicos chamavam o marechal alemão Erwin Rommel?",
    "resposta": "Raposa do Deserto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Erwin_Rommel",
      "https://pt.wikipedia.org/wiki/Erwin_Rommel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Erwin_Rommel",
        "situacao": "ok",
        "texto": "Johannes Erwin Eugen Rommel (pronounced [ˈɛɐviːn ˈʁɔməl] ; 15 November 1891 – 14 October 1944), known as The Desert Fox (German: Der Wüstenfuchs, pronounced [ˈvyːstn̩ˌfʊks] ), was a German Generalfeldmarschall (field marshal) during World War II. He served in the Wehrmacht of Nazi Germany, as well as in the Reichswehr of the Weimar Republic, and Imperial German Army of the German Empire.\n[…]\nAlbert Kesselring complained that Rommel \"cruised about the battlefield\" like a divisional or corps commander rather than an army leader, but his staff officers Gause and Westphal argued that in the African desert this methods was often the only way to command effectively. His staff admired his dedication but complained about his austere, almost Spartan lifestyle, which they felt made their tasks harder and reduced his effectiveness.\n[…]\nNevertheless, there are many officers who admire his methods, like Norman Schwarzkopf who described Rommel as a genius at battles of movement saying \"Look at Rommel. Look at North Africa, the Arab-Israeli wars, and all the rest of them. A war in the desert is a war of mobility and lethality. It's not a war where straight lines are drawn in the sand and [you] say, 'I will defend here or die.\" Ariel Sharon deemed the military model used by Rommel superior that used by Montgomery.\n[…]\nRommel was among the few Axis commanders targeted for assassination by Allied planners. Two attempts were made, the first was Operation Flipper in North Africa in 1941, and the second was Operation Gaff in Normandy in 1944. Research by Norman Ohler claims Rommel's behaviour was heavily influenced by Pervitin which he took in heavy doses. Ohler refers to him as \"the Crystal Fox\"—playing off the nickname \"Desert Fox\".\n[…]\nJames Mason (1951) (The Desert Fox: The Story of Rommel)\n[…]\nJames Mason (1953) (The Desert Rats)\n[…]\nUlrich Tukur (2012) (Rommel)\n[…]\nErwin Rommel. Biography.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erwin_Rommel",
        "situacao": "ok",
        "texto": "Johannes Erwin Eugen Rommel (Heidenheim, 15 de novembro de 1891 — Herrlingen, 14 de outubro de 1944), apelidado de \"A Raposa do Deserto\", foi um militar alemão que serviu como general marechal de campo da Wehrmacht, as forças armadas da Alemanha Nazista durante a Segunda Guerra Mundial.\n[…]\nSua liderança das forças alemãs e italianas durante a Campanha Norte-Africana sedimentou sua reputação como um dos maiores comandantes e estrategistas com tanques durante o conflito. Foi no comando do Afrika Korps que ele recebeu a alcunha de der Wüstenfuchs, \"a Raposa do Deserto\". Rommel era respeitado até mesmo por seus adversários – os britânicos o reconheceram por seu cavalheirismo – e os combates na África eram frequentemente referidos como \"guerra sem ódio\".\n[…]\nDurante este tempo em que esteve lutando em Tobruk, a outra parte da Afrika Korps havia capturado a passagem de Halfaya. Este fronte era muito importante para Rommel, pois era nesta passagem e em Sollum onde os tanques podiam facilmente alcançar o deserto e chegar até à Líbia, deixando-o vulnerável a um ataque britânico vindo do Egito.\n[…]\nDurante o período de comando no Norte da África, tornou-se mundialmente conhecido como \"A Raposa do Deserto\" devido à sua reconhecida astúcia como líder militar.\n[…]\nMuitas lendas foram criadas a partir do mito Rommel, porém nunca questionado do ponto de vista militar e da conduta no campo de batalha. Histórias como \"fazer um Rommel\", que para os soldados do 8º Exército Britânico, significava fazer algo de forma impecável. Sua astúcia e faculdade de improvisação granjearam-lhe o apelido de Raposa do Deserto. Certa vez encontrando-se sob violenta pressão Britânica, o general conseguiu inverter a situação dando-lhes impressão de comandar grandes destacamentos.\n[…]\nRommel (D 187)"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Erwin Rommel",
      "descricao": "Marechal de campo alemão que comandou as forças do Eixo no norte da África na Segunda Guerra Mundial."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1944, o marechal Rommel foi forçado a se suicidar por suspeita de ligação com qual conspiração?",
    "resposta": "Atentado de 20 de julho contra Hitler",
    "fonte": [
      "https://en.wikipedia.org/wiki/Erwin_Rommel",
      "https://en.wikipedia.org/wiki/20_July_plot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Erwin_Rommel",
        "situacao": "ok",
        "texto": "Johannes Erwin Eugen Rommel (pronounced [ˈɛɐviːn ˈʁɔməl] ; 15 November 1891 – 14 October 1944), known as The Desert Fox (German: Der Wüstenfuchs, pronounced [ˈvyːstn̩ˌfʊks] ), was a German Generalfeldmarschall (field marshal) during World War II. He served in the Wehrmacht of Nazi Germany, as well as in the Reichswehr of the Weimar Republic, and Imperial German Army of the German Empire.\n[…]\nAfter the Nazis gained power, Rommel pledged allegiance to the new regime. However, historians have given different accounts of the specific period and his motivations. At least until near the war's end, he was a loyal supporter of Adolf Hitler, but not of the Nazi party and the SS. In 1944, Rommel was implicated in the 20 July plot (or Operation Valkyrie) to assassinate Hitler.\n[…]\nThe extent of Rommel’s involvement in the military resistance against Hitler and the 20 July plot is disputed, as most conspirators were killed and documentation is fragmentary. One important piece of evidence is a conversation recorded by British intelligence in which Heinrich Eberbach, in captivity, recalled Rommel telling him that Hitler and his closest associates had to be killed as the only way out for Germany, a month before Rommel’s forced suicide.\n[…]\nOn 17 July 1944, Rommel was gravely wounded in an Allied air attack, removing him from command just days before the bomb attempt on Hitler. Many authors consider this a crucial blow to the conspirators, who had hoped to rely on him in the West. After the failure of the 20 July plot, mass arrests followed. Rommel was first implicated when the badly injured Stülpnagel repeatedly muttered his name before attempting suicide; under torture, Caesar von Hofacker also named Rommel as involved.\n[…]\nRommel was one of the few senior officers who declined the large landed estates and cash gifts with which Hitler rewarded many of his generals.\n[…]\nErwin Rommel. Biography.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/20_July_plot",
        "situacao": "ok",
        "texto": "The 20 July plot, sometimes referred to as Operation Valkyrie (German: Unternehmen Walküre), was a failed attempt to assassinate Adolf Hitler, the dictator of Nazi Germany, and overthrow the Nazi government on 20 July 1944. The plotters were part of the German resistance, mainly composed of Wehrmacht officers. The principal mastermind of the conspiracy, Claus von Stauffenberg, tried to kill Hitler\n[…]\nEvidence indicates that the 20 July plotters Colonel Wessel von Freytag-Loringhoven, Colonel Erwin von Lahousen, and Admiral Wilhelm Canaris were involved in the foiling of Hitler's alleged plot to kidnap or murder Pope Pius XII in 1943, when Canaris reported the plot to Italian counterintelligence officer General Cesare Amè, who passed on the information.\n[…]\nHitler took his survival to be a \"divine moment in history\", and commissioned a special decoration to be made for each person wounded or killed in the blast. The result was the Wound Badge of 20 July 1944. The badges were struck in three values: gold, silver, and black. (The colours denoted the severity of the wounds received by each recipient.) A total of 100 badges were manufactured, and 47 are believed to have actually been awarded.\n[…]\nThe extent of Generalfeldmarschall Erwin Rommel's involvement in the military's resistance against Hitler or the 20 July plot is difficult to ascertain, as most of the leaders who were directly involved did not survive and limited documentation on the conspirators' plans and preparations exists. Historians' opinions on this matter vary greatly. According to Peter Hoffmann, he had turned into Hitler's resolute opponent and in the end supported the coup (though not the assassination itself).\n[…]\nConspiracy theories about Adolf Hitler's death\n[…]\nGerman Opposition to Hitler and the Assassination Attempt of July 20, 1944\n[…]\nOperation Valkyrie: the Stauffenberg Plot to Kill Hitler (80 min. documentary)"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Coquetel molotov",
      "descricao": "Bomba incendiária improvisada, feita com uma garrafa de líquido inflamável e um pavio."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O pacto de não agressão entre Alemanha e União Soviética, de 1939, e uma bomba incendiária caseira levam o nome de qual político?",
    "resposta": "Viatcheslav Molotov",
    "fonte": [
      "https://en.wikipedia.org/wiki/Molotov_cocktail",
      "https://en.wikipedia.org/wiki/Molotov%E2%80%93Ribbentrop_Pact"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Molotov_cocktail",
        "situacao": "ok",
        "texto": "A Molotov cocktail (among several other names – see § Etymology) is a hand-thrown incendiary weapon consisting of a frangible container filled with flammable substances and equipped with a fuse. It is typically a glass bottle filled with flammable liquids sealed with a cloth wick. In use, the fuse attached to the container is lit and the weapon is thrown, shattering on impact. This ignites the fla\n[…]\nThe name \"Molotov cocktail\" (Finnish: Molotovin cocktail) was coined by the Finns during the Winter War in 1939. The name was a pejorative reference to Soviet foreign minister Vyacheslav Molotov, who was one of the architects of the Molotov–Ribbentrop Pact on the eve of World War II.\n[…]\nWhen the hand-held bottle firebomb was developed to attack and destroy Soviet tanks, the Finns called it the \"Molotov cocktail\", as \"a drink to go with his food parcels\".\n[…]\nImprovised incendiary devices of this type were used in warfare for the first time in the Spanish Civil War between July 1936 and April 1939, before they became known as \"Molotov cocktails\". In 1936, General Francisco Franco ordered Spanish Nationalist forces to use the weapon against Soviet T-26 tanks supporting the Spanish Republicans in a failed assault on the Nationalist stronghold of Seseña, near Toledo, 40 km (25 mi) south of Madrid.\n[…]\nOn 30 November 1939, the Soviet Union attacked Finland, starting what came to be known as the Winter War. The Finnish perfected the design and tactical use of the petrol bomb. The fuel for the Molotov cocktail was refined to a slightly sticky mixture of alcohol, kerosene, tar, and potassium chlorate.\n[…]\nAs incendiary devices, Molotov cocktails are illegal to manufacture or possess in many regions.\n[…]\nHistory of the Molotov cocktail by William R. Trotter\n[…]\nA Thousand Lakes of Red Blood on White Snow, a brief history of the subarctic origins of the Molotov cocktail in the Russo-Finnish Winter War of 1939–40"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Molotov%E2%80%93Ribbentrop_Pact",
        "situacao": "ok",
        "texto": "The Molotov–Ribbentrop Pact, officially the Treaty of Non-Aggression between Germany and the Union of Soviet Socialist Republics, was a non-aggression pact between Nazi Germany and the Soviet Union, with a secret protocol establishing Soviet and German spheres of influence across Eastern Europe. The pact was signed in Moscow on 24 August 1939 (backdated 23 August 1939) by Soviet Premier and Foreig\n[…]\nOn 3 October, Friedrich Werner von der Schulenburg, the German ambassador in Moscow, informed Joachim Ribbentrop that the Soviet government was willing to cede the city of Vilnius and its environs. On 8 October 1939, a new German–Soviet agreement was reached by an exchange of letters between Vyacheslav Molotov and the German ambassador.\n[…]\nDuring the early months of the Pact, Soviet foreign policy became critical of the Allies and more pro-German in turn. During the Fifth Session of the Supreme Soviet on 31 October 1939, Molotov analysed the international situation, thus giving the direction for communist propaganda. According to Molotov, Germany had a legitimate interest in regaining its position as a great power, and the Allies had started an aggressive war in order to maintain the Versailles system.\n[…]\nOne British official wrote that Litvinov's termination also meant the loss of an admirable technician or shock-absorber but that Molotov's \"modus operandi\" was \"more truly Bolshevik than diplomatic or cosmopolitan.\" Carr argued that the Soviet Union's replacement of Litvinov with Molotov on 3 May 1939 indicated not an irrevocable shift towards alignment with Germany but rather was Stalin's way of engaging in hard bargaining with the British and the French by appointing a proverbial hard man to the Foreign Commissariat.\n[…]\nThe Meaning of the Soviet–German Non-Aggression Pact Molotov speech to the Supreme Soviet on August 31, 1939\n[…]\nItaly and the Nazi–Soviet Pact of August 23, 1939"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Winston Churchill",
      "descricao": "Primeiro-ministro do Reino Unido durante a maior parte da Segunda Guerra Mundial."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que prêmio o primeiro-ministro britânico da guerra, Winston Churchill, tem em comum com os escritores Ernest Hemingway e José Saramago?",
    "resposta": "Nobel de Literatura",
    "fonte": [
      "https://www.nobelprize.org/prizes/literature/1953/summary/",
      "https://en.wikipedia.org/wiki/Winston_Churchill"
    ],
    "trechos": [
      {
        "url": "https://www.nobelprize.org/prizes/literature/1953/summary/",
        "situacao": "ok",
        "texto": "The Nobel Prize in Literature 1953 - NobelPrize.org\n[…]\nSummary - Winston Churchill Presentation Speech Award ceremony video\n[…]\nThe Nobel Prize in Literature 1953 was awarded to Sir Winston Leonard Spencer Churchill \"for his mastery of historical and biographical description as well as for brilliant oratory in defending exalted human values\"\n[…]\nDon't miss the Nobel Prize announcements on 5–12 October. All announcements will be streamed live here on nobelprize.org. See the full schedule."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Winston_Churchill",
        "situacao": "ok",
        "texto": "Sir Winston Leonard Spencer Churchill (30 November 1874 – 24 January 1965) was a British statesman, military officer, and writer who was Prime Minister of the United Kingdom from 1940 to 1945, during the Second World War, and again from 1951 to 1955. For some 62 of the years between 1900 and 1964, he was a member of Parliament (MP) and represented a total of five constituencies over that time.\n[…]\nAfter the Conservatives' defeat in the 1945 general election, he became Leader of the Opposition. Amid the developing Cold War with the Soviet Union, he publicly warned of an \"iron curtain\" of Soviet influence in Europe and promoted European unity. Between his terms, he wrote several books recounting his experience during the war. He was awarded the Nobel Prize in Literature in 1953. He lost the 1950 election but was returned to office in 1951.\n[…]\nWinston Leonard Spencer Churchill was born on 30 November 1874 at his family's ancestral home, Blenheim Palace in Oxfordshire. On his father's side, he was a member of the aristocracy as a descendant of John Churchill, 1st Duke of Marlborough. His father, Lord Randolph Churchill, representing the Conservative Party, had been elected member of parliament (MP) for Woodstock in February 1874. His mother was Jennie, Lady Randolph Churchill, a daughter of Leonard Jerome, an American businessman.\n[…]\nChurchill was a prolific writer. His output included a novel (Savrola), two biographies, memoirs, histories, and press articles. Two of his most famous works were his six-volume memoir, The Second World War, and the four-volume A History of the English-Speaking Peoples. Churchill received the Nobel Prize in Literature in 1953.\n[…]\nLiterature portal\n[…]\nWorks by Winston S. (Spencer) Churchill at Faded Page (Canada)\n[…]\nNewspaper clippings about Winston Churchill in the 20th Century Press Archives of the ZBW\n[…]\n191 artworks by or after Winston Churchill at the Art UK site"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Batalha de Midway",
      "descricao": "Batalha naval de junho de 1942 no Pacífico, em que os Estados Unidos afundaram quatro porta-aviões japoneses."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O ataque a Pearl Harbor e a Batalha de Midway foram planejados pelo mesmo comandante naval japonês. Quem era ele?",
    "resposta": "Almirante Isoroku Yamamoto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Isoroku_Yamamoto",
      "https://en.wikipedia.org/wiki/Battle_of_Midway"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Isoroku_Yamamoto",
        "situacao": "ok",
        "texto": "Isoroku Yamamoto (山本 五十六, Yamamoto Isoroku; April 4, 1884 – April 18, 1943) was an admiral of the Imperial Japanese Navy (IJN) and the commander of the Combined Fleet during World War II. He commanded the fleet from 1939 until his death in 1943, overseeing the start of the Pacific War in 1941 and Japan's initial successes and defeats before his plane was shot down by U.S. fighter aircraft over New\n[…]\nNevertheless, Yamamoto accepted the reality of impending war and planned for a quick victory by destroying the United States Pacific Fleet at Pearl Harbor in a preventive strike, while simultaneously thrusting into the oil- and rubber-rich areas of Southeast Asia, especially the Dutch East Indies, Borneo, and Malaya. In naval matters, Yamamoto opposed the building of the  battleships Yamato and Musashi as an unwise investment of resources.\n[…]\nIn the 1993 OVA series Konpeki no Kantai (lit. Deep Blue Fleet), right after his plane is shot down, Yamamoto suddenly wakes up as his younger self, Isoroku Takano, after the Battle of Tsushima in 1905. His memory from the original timeline intact, Yamamoto uses his knowledge of the future to help Japan become a stronger military power, eventually launching a coup d'état against Hideki Tōjō's government.\n[…]\nIn Toei's 2011 war film Rengō Kantai Shirei Chōkan: Yamamoto Isoroku (Blu-Ray titles:- English \"The Admiral\"; German \"Der Admiral\"), Yamamoto was portrayed by Kōji Yakusho. The film portrays his career from Pearl Harbor to his death in Operation Vengeance.\n[…]\n\"Isoroku Yamamoto\" Encyclopædia Britannica\n[…]\nAdmiral Isoroku Yamamoto, Japanese Navy Archived March 1, 2005, at the Wayback Machine US Naval Historical Center\n[…]\nPacific Wrecks. Place where Yamamoto Type 1 bomber crash\n[…]\nThe Assassination of Yamamoto in 1943 (in Japanese)\n[…]\nCombinedFleet.com, Isoroku Yamamoto\n[…]\nNewspaper clippings about Isoroku Yamamoto in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Midway",
        "situacao": "ok",
        "texto": "The Battle of Midway was a major naval battle in the Pacific Theater of World War II that took place on 4–7 June 1942, six months after Japan's attack on Pearl Harbor and one month after the Battle of the Coral Sea. The Japanese Combined Fleet under the command of Isoroku Yamamoto suffered a decisive defeat by two carrier strike groups of the U.S. Pacific Fleet near Midway Atoll, about 1,300 mi (1\n[…]\nYamamoto had intended to capture Midway and lure out and destroy the U.S. Pacific Fleet, especially the aircraft carriers which had escaped damage at Pearl Harbor.\n[…]\nThis, along with other successful hit-and-run raids by American carriers in the South Pacific, showed that they were still a threat, although seemingly reluctant to be drawn into all-out battle. Yamamoto reasoned that another air attack on Naval Station Pearl Harbor would induce all of the American fleet to sail out to fight, including the carriers.\n[…]\nInstead, Yamamoto selected Midway, a tiny atoll at the extreme northwest end of the Hawaiian Island chain, approximately 1,300 mi (1,100 nmi; 2,100 km) from Oahu. Midway was outside the effective range of almost all the American aircraft stationed on the main Hawaiian Islands. It was not especially important in the larger scheme of Japan's intentions, but the Japanese felt the Americans would consider Midway a vital outpost of Pearl Harbor and would be compelled to defend it vigorously. The U.S.\n[…]\nTypical of Japanese naval planning during World War II, Yamamoto's battle plan for taking Midway (named Operation MI) was exceedingly complex. It required the careful coordination of multiple battle groups over hundreds of miles of open sea. His design was also predicated on optimistic intelligence suggesting that USS Enterprise and USS Hornet, forming Task Force 16, were the only carriers available to the Pacific Fleet.\n[…]\nBattle of Leyte Gulf\n[…]\nThe Battle of Midway (1942) at IMDb"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Hasteando a bandeira sobre o Reichstag",
      "descricao": "Fotografia de Yevgeny Khaldei que mostra soldados soviéticos no alto do Reichstag, em Berlim, em maio de 1945."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Duas das fotos mais famosas da guerra, uma tirada em Iwo Jima e outra no Reichstag, em Berlim, mostram soldados fazendo o quê?",
    "resposta": "Hasteando uma bandeira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Raising_a_Flag_over_the_Reichstag",
      "https://en.wikipedia.org/wiki/Raising_the_Flag_on_Iwo_Jima"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Raising_a_Flag_over_the_Reichstag",
        "situacao": "ok",
        "texto": "Raising a Flag over the Reichstag (Russian: Знамя Победы над Рейхстагом, romanized: Znamya Pobedy nad Reykhstagom) is a World War II photograph that symbolizes the Soviet Union's victory over Nazi Germany during the Battle in Berlin. Taken on 2 May 1945, it shows two Soviet soldiers planting a Soviet flag atop the Reichstag building, which was home to the Nazi pseudo-parliament.\n[…]\nDespite the fact that the Reichstag was not used by the Nazis for the vast majority of their rule, the Soviet Union saw the building as symbolic of, and at the heart of, Nazi Germany. For them, it was arguably the most symbolic target in Berlin. The events surrounding the flag-raising are mired in controversy due to the confusion of the fight at the building. Initially, two planes dropped several large red banners on the roof that appeared to have caught on the bombed-out dome.\n[…]\nThe official story would later be told that two hand-picked soldiers, the Georgian Meliton Kantaria and the Russian Mikhail Yegorov, were the first to raise the official Soviet flag known as the Victory Banner over the Reichstag, and this photograph was used as depicting the event. Some authors state that for political reasons the subjects of the photograph were changed and the actual man to hoist the flag was Aleksei Kovalev.\n[…]\nBecause Khaldei took the photo as part of his work for TASS, the copyright of the photo belongs to TASS, not Khaldei. According to Russian copyright law, works created by legal entities have a copyright term of 70 years after publication (or creation, if the work was not published before 3 August 1993). Since Raising a Flag over the Reichstag was published in 1945, its Russian copyright expired on 1 January 2016.\n[…]\nRaising the Flag on Iwo Jima (23 February 1945, United States)\n[…]\nRaising the Flag at Ground Zero (11 September 2001, United States)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Raising_the_Flag_on_Iwo_Jima",
        "situacao": "ok",
        "texto": "Raising the Flag on Iwo Jima (Japanese: 硫黄島の星条旗, Hepburn: Iōjima no Seijōki) is a photograph of six  United States Marines raising the U.S. flag atop Mount Suribachi during the Battle of Iwo Jima in the final stages of the Pacific War. Taken by Joe Rosenthal of the Associated Press on February 23, 1945, the photograph was published in Sunday newspapers two days later and reprinted in thousands of \n[…]\n† Died in combat on Iwo Jima.\n[…]\nIt was terrible\" (because of all the recognition and publicity directed to the replacement flag-raisers and that flag-raising); and Raymond Jacobs, photographed with the patrol commander around the base of the first flag flying over Mt. Suribachi, who complained until he died in 2008 that he was still not recognized by the Marine Corps by name as being the radioman in the photo.\n[…]\nThe Iwo Jima flag-raising has been depicted in other films, including 1949's Sands of Iwo Jima (in which the three surviving flag raisers make a cameo appearance at the end of the film) and 1961's The Outsider, a biography of Ira Hayes starring Tony Curtis.\n[…]\nIt illustrates rescue workers raising a flag at Ground Zero. Other iconic photographs frequently compared include V-J Day in Times Square, Into the Jaws of Death, Raising a Flag over the Reichstag, and the Raising of the Ink Flag.\n[…]\nIn 2021 the Taliban posted a series of photos after the announcement that the Americans were withdrawing from Afghanistan. One of the photos posted shows Taliban soldiers raising a flag which has a notable similarity to Raising the Flag on Iwo Jima, although it is uncertain if this was their intent or merely a coincidental similarity.\n[…]\nThe Ink Flag\n[…]\nRaising a Flag over the Reichstag\n[…]\nRaising the Flag at Ground Zero\n[…]\nRaising the Flag on Iwo Jima: The most parodied photo in history?\n[…]\nCaptain Dave Severance talks about the Battle of Iwo Jima and raising the flag Archived March 9, 2016, at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Fanta",
      "descricao": "Refrigerante criado na Alemanha em 1940 pela filial alemã da Coca-Cola."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Fanta foi criada na Alemanha durante a guerra porque a filial local de uma empresa americana ficou sem qual ingrediente importado?",
    "resposta": "Xarope da Coca-Cola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fanta",
      "https://pt.wikipedia.org/wiki/Fanta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fanta",
        "situacao": "ok",
        "texto": "Fanta () is a German-founded, American-owned brand of carbonated, fruit-flavored soft drinks created by Coca-Cola Deutschland under the leadership of German businessman Max Keith. Today, the brand features over 200 flavors worldwide.\n[…]\nFanta originated as a Coca-Cola alternative after an American trade embargo against Nazi Germany disrupted the availability of standard Coca-Cola ingredients. The beverage quickly dominated the German market, selling three million cases by 1943. Fanta's current orange-flavored formulation was later developed in Italy in 1955. Real orange juice is used in the orange-flavored recipe in all markets except for the United States.\n[…]\nDuring the war, the Dutch Coca-Cola plant in Amsterdam (N.V. Nederlandse Coca-Cola Maatschappij) suffered the same difficulties as the German Coca-Cola plant. Keith put the Fanta brand at the disposal of the Dutch Coca-Cola plant, of which he had been appointed the official caretaker. Dutch Fanta had a different recipe from German Fanta, using elderberries as a main ingredient.\n[…]\nFollowing the launch of several drinks by Pepsi-Cola in the 1950s, Società Napoletana Imbottigliamento Bevande Gassate (SNIBEG) relaunched Fanta in 1955 with a different formulation. In 1960 Coca-Cola bought the brand, distributing it worldwide. The drink was heavily marketed in Europe, Asia, Africa, and South America, although it did not become widely available in the United States until the 1960s because the company feared it would undermine the strong market position of their flagship cola.\n[…]\nFanta cake\n[…]\n\"Why Coca-Cola Invented Fanta In Nazi Germany\". Business Insider. November 8, 2019. Archived from the original on December 21, 2021.\n[…]\n\"Coca Cola and the war\". Digger History."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fanta",
        "situacao": "ok",
        "texto": "Fanta é uma marca de refrigerantes que detém uma linha variada de produtos e que pertence à The Coca-Cola Company. Criada e lançada na Alemanha durante a Segunda Guerra Mundial,  atualmente é comercializada em 188 países.\n[…]\nNessa ocasião, Max Keith, chefe de operações da Coca-Cola alemã, permitiu a criação de um novo produto, na tentativa de evitar a suspensão das atividades da fábrica, nascendo assim uma bebida que foi comercializada exclusivamente no mercado alemão durante a Segunda Guerra Mundial.\n[…]\nFoi a partir de um concurso realizado entre os funcionários da fábrica alemã coordenada por Max Keith que surgiu o nome Fanta. Keith pediu aos empregados que usassem a “imaginação\" (Fantasie em alemão). Ao ouvir isso, o vendedor veterano Joe Knipp imediatamente deixou escapar “Fanta” que passou a ser adotado como marca. Os trabalhadores da Coca-Cola em Essen antes da guerra não podiam mudar de emprego ou protestar além de produzirem em um ritmo frenético.\n[…]\nA Coca-Cola criou novas filiais em áreas ocupadas por nazistas. A Fanta usou trabalho escravo na Alemanha Nazi, limitou a rotatividade de emprego e pagava abaixo da inflação.. Apesar de todos estes fatos, a Coca-cola afirma que \"nem Max Keith nem a empresa engarrafadora estavam ligados ao regime\".\n[…]\nFanta Uva\n[…]\nAconteceu também a retirada por sobreposição de produtos, isto é, a mesma empresa (Coca-Cola) comercializando itens similares, foi o que ocorreu com a Fanta Limão (lançada em 1978 e descontinuada em 1984, ano de lançamento do Sprite limão), e com a Fanta Guaraná (lançada no final da década de 70 e substituída pelo Guaraná Taí no início da década de 80, e este, por sua vez, substituído em boa parte do país pela marca Kuat, e relançada em 2017)."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Zé Carioca",
      "descricao": "Papagaio brasileiro criado pelos estúdios Disney em 1942."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O papagaio Zé Carioca, da Disney, surgiu em 1942 como parte de qual política americana de aproximação com a América Latina durante a guerra?",
    "resposta": "Política da Boa Vizinhança",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jos%C3%A9_Carioca",
      "https://pt.wikipedia.org/wiki/Z%C3%A9_Carioca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jos%C3%A9_Carioca",
        "situacao": "ok",
        "texto": "José \"Zé\" Carioca ( zhoh-ZAY KARR-ee-OH-kə; Portuguese: [ʒuˈzɛ kaˈɾjɔkɐ]) is a cartoon anthropomorphic parrot created by American cartoonist and animator Walt Disney during a trip to Rio de Janeiro in 1941 as a resource to support the relations between Latin America and the US during World War II (as part of the Good Neighbor Policy). It is alleged by some journalists that Disney presented the cha\n[…]\nThe Walt Disney Company then incorporated the idea, being introduced in the 1942 film Saludos Amigos as a friend of Donald Duck, described by Time as \"a dapper Brazilian parrot, who is as superior to Donald Duck as the Duck was to Mickey Mouse.\" He speaks Portuguese. He returned in the 1944 film The Three Caballeros along with Donald and a Mexican rooster named Panchito Pistoles. José is from Rio de Janeiro, Brazil (thus the name \"Carioca\", which is a term used for a person born in Rio).\n[…]\nIn April 2007, Disney re-introduced José Carioca (along with the third Caballero, Panchito) in the newly revamped ride at Epcot's Mexico Pavilion with entirely new animation and a new storyline. It has been dubbed \"The Gran Fiesta Tour\". After being reunited, The Three Caballeros are set to play a show in Mexico City. But Donald goes missing. José and Panchito must search throughout Mexico for Donald as he takes in various sights around Mexico.\n[…]\nIn 2002, José Carioca appears in the games of the Disney Sports series produced by Konami for Nintendo's GameCube and Game Boy Advance platforms, José is part of The TinyRockets teams alongside Huey, Dewey, and Louie, the games are Disney Sports Soccer (Association football), Disney Sports Basketball (basketball) and Disney Sports Football (American football).\n[…]\nJosé Carioca at Don Markstein's Toonopedia. Archived[link removed] from the original on October 22, 2016.\n[…]\nJosé \"Joe\" Carioca in the HooZoo\n[…]\nJosé \"Joe\" Carioca in a Who's who in Duckburg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Z%C3%A9_Carioca",
        "situacao": "ok",
        "texto": "Zé Carioca é o apelido (alcunha em português europeu) do papagaio José Carioca (nos Estados Unidos e nos Países Baixos, também chamado de Joe Carioca), personagem fictício desenvolvido no começo da década de 1940 pelos estúdios Walt Disney. Ele é retratado como o típico malandro carioca, sempre escapando dos problemas com o jeitinho característico. Sua primeira aparição foi no filme Saludos Amigos\n[…]\nO personagem brasileiro foi criado durante a Segunda Guerra Mundial, na verdade fez parte de uma estratégia chamada de política de boa vizinhança dirigida pelo governo dos Estados Unidos para melhorar as relações e obter apoio político dos países latino-americanos.\n[…]\nO papagaio José Carioca (vulgo Zé Carioca) foi criado para o filme Alô, amigos (Saludos Amigos), de 1942, lançado nos EUA no ano seguinte pela Disney. Antes do lançamento americano, tiras de jornal foram publicadas com as aventuras do Zé Carioca.\n[…]\nA primeira história do Zé Carioca produzida para uma revista em quadrinhos foi O Rei Do Carnaval (The Carnival King, no original), a história foi produzida por Carl Buettner para a revista Walt Disney's Comics and Stories nº 27, publicada em 1942 e publicada no Brasil em O Pato Donald nº 8 (1951), nela, o papagaio tenta conquista uma jovem sambista inspirada em Carmen Miranda.\n[…]\nZé Carioca e Panchito - Silly Simphonies 1942-1945\n[…]\nMorcego Verde (1975) - Super-herói encarnado pelo papagaio, que luta contra o crime com seus métodos nada convencionais, e faz uso da morcegocleta (popularmente conhecida como “a bicicleta do vizinho”). Embora desconverse, todos sabem se tratar do Zé Carioca – paródia do Batman.\n[…]\nJoão - Amigo do Zé Carioca, surgiu nas tiras junto com o Nestor, esteve presente em quadrinhos brasileiros dos anos 60, 70 e 80 e é bastante recorrente na produção neerlandesa, retornou em 2020 na história Para O Papagaio Que Tem Tudo! na edição 21 da revista Aventuras Disney."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Brasil na Segunda Guerra Mundial",
      "descricao": "Participação do Brasil no conflito, desde a declaração de guerra ao Eixo em 1942 até o envio de tropas à Itália."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em agosto de 1942, o Brasil declarou guerra à Alemanha e à Itália. Que ataques motivaram a decisão?",
    "resposta": "Submarinos alemães afundando navios brasileiros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_in_World_War_II",
      "https://pt.wikipedia.org/wiki/Brasil_na_Segunda_Guerra_Mundial"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_in_World_War_II",
        "situacao": "ok",
        "texto": "Brazil officially entered World War II on August 22, 1942, when it declared war against the Axis powers, including Germany and Italy. On February 8, 1943, Brazil formally joined the Allies upon signing the Declaration by United Nations. Although considered a secondary Allied power, Brazil was the largest contributor from South America,\n[…]\nIn 1943, despite significant enhancements in patrolling and anti-submarine warfare measures through joint Brazilian and US operations, Axis submarines continued their assaults in the South Atlantic, particularly off the coasts of São Paulo and Rio de Janeiro. The majority of the targeted vessels were merchant or mixed cargo and passenger ships, primarily belonging to major shipping companies such as Lloyd Brasileiro, Lloyd Nacional, and Costeira.\n[…]\nIn World War II, German and Italian immigrant groups in Brazil circulated false rumors suggesting that US submarines were responsible for the attacks on Brazilian ships, in an attempt to provoke Brazil’s entry into the war. Historians have identified these claims as part of Axis propaganda efforts, orchestrated by collaborators known as the \"Fifth Columns\", who sought to influence public perception and decision-making in Brazil.\n[…]\nSander, Roberto (2007). O Brasil na mira de Hitler: a história do afundamento de navios brasileiros pelos nazistas [Brazil in Hitler's sights: the story of the sinking of Brazilian ships by the Nazis] (in Portuguese). Rio de Janeiro: Objetiva.\n[…]\nBonalume Neto, Ricardo (1995). A Nossa Segunda Guerra: Os brasileiros em combate [Our Second War: Brazilians in combat] (in Portuguese). Rio de Janeiro: Expressão e Cultura.\n[…]\nMonteiro, Marcelo (2012). U-507 - O submarino que afundou o Brasil na Segunda Guerra Mundial [U-507 - The submarine that sank Brazil in World War II] (in Portuguese). Salto: Schoba."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brasil_na_Segunda_Guerra_Mundial",
        "situacao": "ok",
        "texto": "O Brasil, embora, na época, estivesse sendo comandado por um regime ditatorial simpático ao modelo fascista (o Estado Novo getulista) dos Países do Eixo, acabou participando da Segunda Guerra Mundial (1939-1945) junto aos adversários destes, os Países Aliados.\n[…]\nApós meses de torpedeamento de navios mercantes brasileiros (21 submarinos alemães e dois italianos foram responsáveis pelo afundamento de 36 navios mercantes brasileiros, causando 1 691 náufragos e 1 074 mortes, o que foi o principal motivo que conduziu à declaração de guerra do Brasil à Alemanha e Itália) a população foi às ruas e o Governo Brasileiro declarou guerra à Alemanha nazista e à Itália fascista, em agosto de 1942.\n[…]\nForam 35 navios atacados (32 afundados), nas águas dos Oceanos Atlântico (incluindo o Mar Mediterrâneo), e Índico; desde a Filadélfia, nos Estados Unidos, até a região do Cabo da Boa Esperança, extremo sul da África, sendo que, com exceção do ataque aéreo ao navio Taubaté - o primeiro a ser atacado, em 22 de março de 1941, no Mediterrâneo –, todos os demais foram cometidos por submarinos alemães e italianos, e ocorreram depois de o Brasil romper relações diplomáticas com o Eixo, em 28 de janeiro de 1942.\n[…]\nExiste farta documentação comprovando que foram mesmo submarinos alemães os responsáveis pelo torpedeamento da grande maioria dos navios brasileiros durante a Segunda Guerra Mundial. As matérias-primas transportadas pelos mercantes brasileiros eram de vital importância para os Aliados, portanto, só interessaria aos países do Eixo atacar esses navios.\n[…]\nOs submarinos alemães afundados ao largo do litoral brasileiro foram U-590; U-662; U-507; U-164; U-598; U-591; U-128; U-161; U-199; U-513 e Archimede.\n[…]\nNa II Guerra Mundial - Exército Brasileiro"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Admiral Graf Spee",
      "descricao": "Navio de guerra alemão da classe Deutschland, afundado pela própria tripulação no Rio da Prata em dezembro de 1939."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em dezembro de 1939, o navio de guerra alemão Graf Spee foi afundado pela própria tripulação diante de qual capital sul-americana?",
    "resposta": "Montevidéu",
    "fonte": [
      "https://en.wikipedia.org/wiki/German_cruiser_Admiral_Graf_Spee",
      "https://pt.wikipedia.org/wiki/Admiral_Graf_Spee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/German_cruiser_Admiral_Graf_Spee",
        "situacao": "ok",
        "texto": "Admiral Graf Spee (German pronunciation: [admiˈʁaːl ɡʁäːf ʃpeː]) was a Deutschland-class Panzerschiff (armored ship, nicknamed \"pocket battleships\" by the British) which served with the Kriegsmarine of Nazi Germany during World War II. The vessel was named after World War I Admiral Maximilian von Spee, commander of the East Asia Squadron who fought the battles of Coronel and the Falkland Islands, \n[…]\nBetween September and December 1939, the warship sank nine vessels totaling 50,089 gross register tons (GRT), before being confronted by three British cruisers at the Battle of the River Plate on 13 December. Admiral Graf Spee inflicted heavy damage on the British ships, but she too was damaged and was forced to put into port at Montevideo, Uruguay. Convinced by false reports of superior British naval forces gathering, Hans Langsdorff, commander of the ship, ordered the vessel to be scuttled.\n[…]\nUnder Article 17 of the Hague Convention of 1907, neutrality restrictions limited Admiral Graf Spee to a period of 72 hours for repairs in Montevideo, before she would be interned for the duration of the war. On 17 December 1939, Langsdorff ordered the destruction of all important equipment aboard the ship. The ship's remaining ammunition supply was dispersed throughout the ship, in preparation for scuttling.\n[…]\nOn 20 December, in his room in a Buenos Aires hotel, Langsdorff shot himself in full dress uniform while lying on the ship's battle ensign. In late January 1940, the neutral American cruiser USS Helena arrived in Montevideo and the crew was permitted to visit the wreck of Admiral Graf Spee. The Americans met the German crewmen, who were still in Montevideo. In the aftermath of the scuttling, the ship's crew were taken to Argentina, where they were interned for the remainder of the war.\n[…]\n\"Graf Spee and the Battle of the River Plate (Audio recordings, 1960s)\". Nga Taonga (NZ). 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Admiral_Graf_Spee",
        "situacao": "ok",
        "texto": "O Admiral Graf Spee foi um cruzador pesado operado pela Kriegsmarine e a terceira e última embarcação da Classe Deutschland, depois do Deutschland e Admiral Scheer. Sua construção começou no início de outubro de 1932 nos estaleiros da Reichsmarinewerft Wilhelmshaven e foi lançado ao mar no final de junho de 1934, sendo comissionado na frota alemã no início de janeiro de 1936.\n[…]\nO Admiral Graf Spee foi seriamente danificado e precisou atracar em Montevidéu no Uruguai, sendo deliberadamente afundado quatro dias depois. Seus destroços foram parcialmente desmontados no local.\n[…]\nEncontrou-se com o Altmark no dia 6 e transferiu 140 prisioneiros do Doric Star e Tairoa. O Admiral Graf Spee encontrou sua última vítima em 7 de dezembro, o cargueiro SS Streonshalh. Os alemães recuperaram a bordo documentos sobre rotas mercantes. Langsdorff, a partir dessas informações, resolveu ir para próximo de Montevidéu, no Uruguai. Seu hidroavião quebrou no dia 12 e não pode ser concertado, privando o Admiral Graf Spee de reconhecimento aéreo.\n[…]\nLangsdorff não queria arriscar a vida de sua tripulação e decidiu afundar seu navio. Ele sabia que apesar do Uruguai ser neutro, o governo tinha relações amigáveis com o Reino Unido, então a Armada Nacional do Uruguai permitiria que oficiais de inteligência britânicos inspecionassem a embarcação caso fosse internada em Montevidéu.\n[…]\nLangsborff se suicidou em 20 de dezembro dentro de seu quarto de hotel em Buenos Aires usando um uniforme formal completo em cima do estandarte de batalha do Admiral Graf Spee. O cruzador rápido norte-americano USS Helena chegou em Montevidéu no final de janeiro de 1940 e sua tripulação pode visitar os destroços. Os tripulantes alemães e norte-americanos também se encontraram. Depois disso os alemães foram levados para a Argentina, onde permaneceram pelo restante da guerra."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Segunda Batalha de El Alamein",
      "descricao": "Batalha de outubro e novembro de 1942 em que os britânicos derrotaram as forças de Rommel no norte da África."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Batalha de El Alamein, virada decisiva dos Aliados no norte da África em 1942, foi travada em qual país atual?",
    "resposta": "Egito",
    "distratores": [
      "Líbia",
      "Tunísia",
      "Argélia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Second_Battle_of_El_Alamein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Second_Battle_of_El_Alamein",
        "situacao": "ok",
        "texto": "The Second Battle of El Alamein (23 October – 4 November 1942) was a battle of the Second World War that took place near the Egyptian railway halt of El Alamein. The First Battle of El Alamein and the Battle of Alam el Halfa had prevented the Axis from advancing further into Egypt.\n[…]\nAccording to Maurice Remy (2002), Hitler and Mussolini put pressure on Rommel to advance, the importance to them being the need to capture the Suez Canal and seize the Middle East and Persian oil fields. Rommel had been very pessimistic, especially after the First Battle of El Alamein and knew that as US supplies were en route to Africa and Axis ships were being sunk in the Mediterranean, the Axis was losing a race against time.\n[…]\nThe Highland Division made a slow and costly advance and 7th Armoured Division met stiff resistance from the Combat Group \"Ariete\" (the remains of the 132nd Armoured Division \"Ariete\"). The Panzerarmee had lost roughly 75,000 men, 1,000 guns and 500 tanks since the Second Battle of Alamein and withdrew.\n[…]\nMaughan, Barton (1966). \"14 Launching the Battle and 15 The Dog Fight\". Tobruk and El Alamein. Official History of Australia in the Second World War Series 1 (Army). Vol. III (online ed.). Canberra: Australian War Memorial. pp. 639–754. OCLC 954993. Retrieved 23 February 2018.\n[…]\nStumpf, R. (2001). \"Part V: The War in the Mediterranean Area 1942–1943: Operations in North Africa and the Central Mediterranean\". The Global War: Widening of the Conflict into a World War and the Shift of the Initiative 1941–1943. Germany and the Second World War. Vol. VI. Translated by Brownjohn, J. (Eng. trans. Clarendon Press, Oxford ed.). Potsdam: Militärgeschichtliches Forschungsamt (Research Institute for Military History). pp. 631–821. ISBN 0-19-822888-0."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Batalha de Monte Castelo",
      "descricao": "Série de combates nos Apeninos italianos em que a Força Expedicionária Brasileira conquistou o Monte Castelo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de várias tentativas fracassadas, em que ano os pracinhas brasileiros finalmente conquistaram Monte Castelo, na Itália?",
    "resposta": "1945",
    "distratores": [
      "1943",
      "1944",
      "1942"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Batalha_de_Monte_Castelo",
      "https://en.wikipedia.org/wiki/Battle_of_Monte_Castello"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_Monte_Castelo",
        "situacao": "ok",
        "texto": "A Batalha de Monte Castello foi travada ao final da Segunda Guerra Mundial, entre as tropas aliadas e as forças do Exército Alemão, que tentavam conter o seu avanço no Norte da Itália. A batalha marcou a presença da Força Expedicionária Brasileira (FEB) no conflito. A batalha arrastou-se por três meses, de 24 de novembro de 1944 a 21 de fevereiro de 1945, durante os quais se efetuaram seis ataques\n[…]\nQuatro dos ataques não tiveram êxito, por falhas de estratégia, mas a batalha chegou a seu fim em 21 de fevereiro de 1945 com a vitória dos aliados, a derrota dos alemães e a tomada de Monte Castello por tropas brasileiras.\n[…]\nA lição serviu para reforçar a convicção de Mascarenhas de que o monte Castello só seria tomado dos alemães se toda a divisão fosse empregada no ataque — e não apenas alguns batalhões, como vinha ordenando o 5º Exército. Somente em 19 de fevereiro de 1945, após a melhora do inverno o comando do 5º Exército determinou o início de uma nova ofensiva para a conquista do monte. Tal ofensiva denominada de Operação Encore utilizaria as tropas da 10ª Divisão de Montanha americana e da 1ª DIE.\n[…]\nConforme descrito no plano Encore, os brasileiros deveriam chegar ao topo do monte Castello no máximo ao entardecer, após a tomada do Monte Della Torracia ser executada pela 10ª Divisão de Montanha, de tal modo o comando do IV Corpo estava certo de que o Castello não seria tomado antes do Della Torracia.\n[…]\nEntretanto, às 17h30, quando os primeiros soldados do Batalhão Franklin do 1º Regimento conquistaram o cume do monte Castello, os americanos ainda não haviam vencido a resistência alemã, só o fazendo noite adentro, quando com a ajuda de alguns elementos brasileiros que já haviam completado sua missão.\n[…]\nO Lapa Azul, documentário brasileiro de 2007 que relata as experiências dos pracinhas brasileiros, do III Batalhão do 11º Regimento de Infantaria durante a II Guerra Mundial."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Monte_Castello",
        "situacao": "ok",
        "texto": "The Battle of Monte Castello (Italian: Battaglia del Monte Castello; German: Schlacht von Monte Castello; Portuguese: Batalha de Monte Castello) was a major engagement fought between 25 November 1944 and 21 February 1945 during the Italian campaign of World War II.\n[…]\nAfter four preliminary assaults between November and December 1944 were halted by severe winter conditions, heavy artillery fire, and steep terrain, the Allied forces launched a coordinated joint offensive (Operation Encore) in February 1945, resulting in the Brazilian 1st Division successfully capturing the summit on 21 February 1945.\n[…]\nOn 18 February 1945, Fifth Army command initiated Operation Encore, a joint offensive designed to clear German positions at Monte Castello, Belvedere, Della Torraccia, Castelnuovo, Torre di Nerone, and Castel d'Aiano. The assault was assigned to the 1st Brazilian Division operating alongside the US 10th Mountain Division.\n[…]\nThe final assault on Monte Castello was incorporated into Operation Encore, employing the same divisional attack plan previously proposed by General Mascarenhas de Morais. By 20 February 1945, the 1st Infantry Division of the Brazilian Expeditionary Force (FEB) had deployed its three infantry regiments into position. Operating on the left flank, the US 10th Mountain Division was tasked with capturing Monte della Torraccia to secure the sector's western approach.\n[…]\nBatalha do Monte Castelo, Jornal O Globo.\n[…]\nBöhmler, Rudolf (1964). Monte Cassino: A German View. London: Cassell. ASIN B000MMKAYM.\n[…]\nBrooks, Thomas R. (2003). The War North of Rome (June 1944 – May 1945). Da Capo Press. ISBN 9780306812569.\n[…]\nDonato, Hernâni. Dicionário das Batalhas Brasileiras ('Dictionary of Brazilian Battles') (in Portuguese) IBRASA, 1987 ISBN 8534800340"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Hiroo Onoda",
      "descricao": "Oficial do exército japonês que continuou lutando nas Filipinas por décadas após o fim da Segunda Guerra Mundial."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Sem acreditar que a guerra tinha acabado, o oficial japonês Hiroo Onoda seguiu escondido na selva das Filipinas. Por quantos anos?",
    "resposta": "29 anos, até 1974",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hiroo_Onoda",
      "https://pt.wikipedia.org/wiki/Hiroo_Onoda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hiroo_Onoda",
        "situacao": "ok",
        "texto": "Hiroo Onoda (Japanese: 小野田 寛郎, Hepburn: Onoda Hiroo; IPA: [o̞no̞da̠ çiɾo̞ː]) 19 March 1922 – 16 January 2014) was a Japanese soldier who served as a second lieutenant in the Imperial Japanese Army during World War II. One of the last Japanese holdouts, Onoda continued fighting for nearly 29 years after the war's end in 1945, carrying out guerrilla warfare on Lubang Island in the Philippines until \n[…]\nOnoda surrendered on 10 March 1974 and received a hero's welcome when he returned to Japan. That year, he wrote and published an autobiography and later moved to Brazil, where he became a cattle rancher. In 1984, Onoda returned to Japan, where he died in 2014 at the age of 91.\n[…]\nOnoda turned over his sword, a functioning Type 99 rifle, 500 rounds of ammunition, and several hand grenades, as well as a dagger his mother had given him in 1944 to kill himself if captured. He had held out for 28 years, 6 months, and 8 days (10,416 days) after Japan's surrender in 1945. Only Private Teruo Nakamura, arrested on 18 December 1974 in Indonesia, held out longer.\n[…]\nOnoda, who had been declared dead by the Japanese government in 1959, was the subject of widespread attention from the press and public upon his return to Japan in 1974. He was reportedly unhappy at receiving such attention and at what he saw as the withering of traditional Japanese values. He wrote No Surrender: My Thirty-Year War, an autobiography published in 1974.\n[…]\nOnoda, Hiroo (1974). わがルバン島の30年戦争 [The Thirty Years' War on Our Island of Lubang] (in Japanese). Tokyo: Kodansha. OCLC 976947108.\n[…]\nOnoda, Hiroo (1974). No Surrender: My Thirty-Year War. Translated by Terry, Charles S. New York: Kodansha International. ISBN 978-0-87011-240-9.\n[…]\n\"Hiroo Onoda fought WWII for 30 Additional Years\" (video)\n[…]\nHiroo Onoda (middle): The Imperial Japanese soldier who hid in the Philippine jungle for 30 years after WWII. March 11, 1974 (photo), Imgur"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hiroo_Onoda",
        "situacao": "ok",
        "texto": "Hiroo Onoda (japonês: 小野田 寛郎, Hepburn: Onoda Hiroo; AFI: [o̞no̞da̠ çiɾo̞ː]) (Kamekawa, 19 de março de 1922 – 16 de janeiro de 2014) foi um soldado japonês que serviu como segundo-tenente no Exército Imperial Japonês durante a Segunda Guerra Mundial. Um dos últimos resistentes japoneses, Onoda continuou lutando por 29 anos após o fim da guerra em 1945, realizando guerrilha na ilha de Lubang, Filipi\n[…]\nOnoda foi localizado na selva de Lubang pelo aventureiro japonês Norio Suzuki em 1974, mas ainda assim se recusou a se render até receber a ordem formal de seu antigo comandante, o major Yoshimi Taniguchi, que voou do Japão para a ilha para entregá-la pessoalmente.\n[…]\nOnoda foi então exonerado do serviço e, em 10 de março de 1974, rendeu-se às forças filipinas na base de radar de Lubang. Em 11 de março, uma cerimônia formal de rendição foi realizada pelo presidente filipino Ferdinando Marcos no Palácio de Malacañang, em Manila, causando repercussão na mídia internacional. Marcos concedeu a Onoda perdão total por quaisquer crimes cometidos enquanto estava escondido.\n[…]\nSegundo relatos, Onoda estava descontente com a atenção recebida e com o que considerava o enfraquecimento dos valores tradicionais japoneses. Em 1974, publicou a autobiografia best-seller Sem Rendição: Minha Guerra de Trinta Anos. Em abril de 1975, seguiu o exemplo de seu irmão mais velho, Tadao, e mudou-se para o Brasil, tornando-se pecuarista. Casou-se em 1976 e assumiu papel de liderança na Colônia Jamic, uma comunidade nipo-brasileira em Terenos, Mato Grosso do Sul.\n[…]\nOnoda, Hiroo (1974). Os Trinta Anos de Minha Guerra. [S.l.: s.n.]\n[…]\n\"Onoda Shizen Juku\" (em japonês)\n[…]\nHiroo Onoda obituary The Daily Telegraph\n[…]\n\"Hiroo Onoda fought WWII for 30 Additional Years\" (vídeo)\n[…]\nHiroo Onoda (middle): The Imperial Japanese soldier who hid in the Philippine jungle for 30 years after WWII. 11 de março de 1974 (foto), Imgur"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Dia D",
      "descricao": "Desembarque aliado na Normandia, na França, em 6 de junho de 1944."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No Dia D, os Aliados desembarcaram em cinco praias com codinomes. Quatro eram Utah, Omaha, Gold e Juno. Qual era a quinta?",
    "resposta": "Sword",
    "distratores": [
      "Mulberry",
      "Neptune",
      "Overlord"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Normandy_landings",
      "https://pt.wikipedia.org/wiki/Desembarque_na_Normandia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Normandy_landings",
        "situacao": "ok",
        "texto": "The Normandy landings were the landing operations and associated airborne operations on 6 June 1944 of the Allied invasion of Normandy in Operation Overlord during the Second World War. Codenamed Operation Neptune and often referred to as D-Day (after the military term), it is the largest seaborne invasion in history. The operation began the liberation of France and the rest of Western Europe, and\n[…]\nThe invasion began shortly after midnight on the morning of 6 June with extensive aerial and naval bombardment as well as an airborne assault—the landing of 24,000 American, British, and Canadian airborne troops. The early morning aerial assault was soon followed by Allied amphibious landings on the coast of France c. 06:30. The target 80-kilometre (50 mi) stretch of the Normandy coast was divided into five sectors: Utah, Omaha, Gold, Juno, and Sword.\n[…]\nThe men landed under heavy fire from gun emplacements overlooking the beaches, and the shore was mined and covered with obstacles such as wooden stakes, metal tripods, and barbed wire, making the work of the beach-clearing teams difficult and dangerous. The highest number of casualties was at Omaha, with its high cliffs. At Gold, Juno, and Sword, several fortified towns were cleared in house-to-house fighting, and two major gun emplacements at Gold were disabled using specialised tanks.\n[…]\nThe British at Sword and Gold Beaches and the Canadians at Juno Beach would protect the US flank and attempt to establish airfields near Caen on the first day. (A sixth beach, code-named \"Band\", was considered to the east of the Orne). A secure lodgement would be established with all invading forces linked together, with an attempt to hold all territory north of the Avranches-Falaise line within the first three weeks.\n[…]\nAllied forces attacking Gold, Juno, and Sword Beaches faced the following German units:\n[…]\nOmaha Beach\n[…]\nGold Beach\n[…]\nJuno Beach\n[…]\nSword Beach"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Desembarque_na_Normandia",
        "situacao": "ok",
        "texto": "Operação Overlord foi o codinome para a Batalha da Normandia, uma operação dos Aliados que iniciou a invasão bem-sucedida da Europa Ocidental ocupada pelos alemães durante a Segunda Guerra Mundial. A operação teve início em 6 de junho de 1944, com os desembarques da Normandia (Operação Netuno, vulgarmente conhecido como Dia D). Um ataque aéreo de 1 200 aviões precedeu um desembarque anfíbio, envol\n[…]\nA costa da Normandia foi escolhida como o local da invasão, e os estadunidenses foram designados para desembarcar nas praias Utah e Omaha, os britânicos em Sword e Gold, enquanto os canadenses desembarcariam em Juno.\n[…]\nO litoral da Normandia foi dividido em 17 setores, com codinomes usando um alfabeto radiotelefônico a partir de Able, oeste de Praia de Omaha, a Roger no flanco leste de Praia de Sword. Oito novos setores foram acrescentados quando a invasão foi estendida para incluir a Praia de Utah, na Península do Cotentin. Setores foram subdivididos em praias identificadas pelas cores verde, vermelha e branca.\n[…]\nOs britânicos nas praias de Sword e Gold, e os canadenses em Juno, deveriam capturar Caen e formar uma linha de frente em Caumont-l'Éventé ao sudeste de Caen, a fim de proteger o flanco americano e estabelecer campos de pouso perto de Caen. A posse de Caen e seu entorno daria aos anglo-canadenses uma área de preparação adequada para um avanço ao sul e possibilitar a captura da cidade de Falaise.\n[…]\nDo lado britânico, o tenente-general Miles Dempsey estava no comando do Segundo Exército, sob o qual  o XXX Corps foi designado para Gold e o I Corps para Juno e Sword. As forças terrestres estavam sob o comando de Montgomery e o comando aéreo foi atribuído ao marechal sir Trafford Leigh-Mallory. O Primeiro Exército canadense incluía soldados e unidades da Polônia, Bélgica e Países Baixos. Outras nações aliadas também participaram."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Batalha do Atlântico",
      "descricao": "Campanha naval de 1939 a 1945 entre os comboios aliados e os submarinos e navios alemães no Oceano Atlântico."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Travada de 1939 a 1945 entre comboios aliados e submarinos alemães, qual foi a campanha militar contínua mais longa da Segunda Guerra?",
    "resposta": "Batalha do Atlântico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_the_Atlantic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_the_Atlantic",
        "situacao": "ok",
        "texto": "The Battle of the Atlantic, the longest continuous military campaign in World War II, ran from 1939 to the defeat of Nazi Germany in 1945, covering a major part of the naval history of World War II. At its core was the Allied naval blockade of Germany, announced the day after the declaration of war, and Germany's subsequent counterblockade. The campaign peaked from mid-1940 to the end of 1943.\n[…]\nBy late 1943, the decreasing number of Allied shipping losses in the South Atlantic coincided with the increasing elimination of Axis submarines operating there. From then on, the battle in the region was lost by Germany, even though most of the remaining submarines in the region received an official order of withdrawal only in August 1944, and with the last Allied merchant ship, Baron Jedburgh, sunk by U-532 on 10 March 1945.\n[…]\nThe last actions in American waters took place on 5–6 May 1945, which saw the sinking of the steamer Black Point and the destruction of U-853 and U-881 in separate incidents. The last actions of the Battle of the Atlantic were on 7–8 May. U-320 was the last U-boat sunk in action, by an RAF Catalina; while the Norwegian minesweeper NYMS 382 and the freighters Sneland I and Avondale Park were torpedoed in separate incidents, hours before the German surrender.\n[…]\nThe adversaries of U-boats were mostly small anti-submarine ships like destroyers, destroyer escorts, frigates and corvettes, but on a few occasions U-boats could sink capital ships in the Atlantic: the battleship Royal Oak was sunk in harbour, the aircraft carrier Courageous was sunk while on anti-submarine patrol, the escort carriers Audacity, Avenger and Block Island were sunk while escorting convoys, and the light cruiser Dunedin was sunk searching for German raiders.\n[…]\n\"Turning point in Battle of the Atlantic\".\n[…]\nU-Boat histories & Fates 1945\n[…]\nBattle of the Atlantic 70th Anniversary Commemorations"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Eu voltarei",
      "descricao": "Promessa feita em 1942 pelo general americano Douglas MacArthur ao deixar as Filipinas, ocupadas pelo Japão."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Ao deixar as Filipinas em 1942, que general americano fez a famosa promessa de que voltaria, e a cumpriu em 1944?",
    "resposta": "Douglas MacArthur",
    "fonte": [
      "https://en.wikipedia.org/wiki/Douglas_MacArthur",
      "https://pt.wikipedia.org/wiki/Douglas_MacArthur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Douglas_MacArthur",
        "situacao": "ok",
        "texto": "Douglas MacArthur (26 January 1880 – 5 April 1964) was an American general. He served with distinction in World War I; as chief of staff of the United States Army from 1930 to 1935; as Supreme Commander, Southwest Pacific Area, from 1942 to 1945; as Supreme Commander for the Allied Powers overseeing the occupation of Japan from 1945 to 1951; and as head of the United Nations Command in the Korean \n[…]\nA military brat, Douglas MacArthur was born 26 January 1880, at Little Rock Barracks in Arkansas, to Arthur MacArthur Jr., a U.S. Army captain, and Mary Pinkney Hardy MacArthur (nicknamed \"Pinky\"). Arthur Jr. received the Medal of Honor for his actions with the Union Army in the Battle of Missionary Ridge during the American Civil War, and was promoted to lieutenant general. Arthur and Pinky had three sons, of whom Douglas was the youngest, following Arthur III and Malcolm.\n[…]\nMacArthur has a contested legacy. In the Philippines in 1942, he suffered a defeat that Gavin Long described as \"the greatest in the history of American foreign wars\". However, according to Walter R. Borneman:in a fragile period of the American psyche when the general American public, still stunned by the shock of Pearl Harbor and uncertain what lay ahead in Europe, desperately needed a hero, they wholeheartedly embraced Douglas MacArthur—good press copy that he was.\n[…]\nWorks by or about Douglas MacArthur at the Internet Archive\n[…]\n\"Douglas MacArthur\". Hall of Valor. Military Times.\n[…]\nThe short film Big Picture: The Douglas MacArthur Story is available for free viewing and download at the Internet Archive.\n[…]\nDouglas MacArthur at IMDb\n[…]\nFBI file on General Douglas MacArthur at vault.fbi.gov\n[…]\nNewspaper clippings about Douglas MacArthur in the 20th Century Press Archives of the ZBW\n[…]\nSenate joint resolution to authorize the appointment of General of the Army Douglas MacArthur as General of the Armies of the United States"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Douglas_MacArthur",
        "situacao": "ok",
        "texto": "Douglas MacArthur (Little Rock, 26 de janeiro de 1880 – Washington, D.C., 5 de abril de 1964) foi um líder militar americano que serviu como General do Exército dos Estados Unidos, bem como Marechal de Campo do Exército Filipino. Serviu com distinção na Primeira Guerra Mundial, foi Chefe do Estado-Maior do Exército dos Estados Unidos durante a década de 1930 e desempenhou um papel proeminente no T\n[…]\nEm março de 1942, MacArthur, sua família e sua equipe deixaram a vizinha Ilha Corregidor e fugiram para a Austrália, onde MacArthur se tornou Comandante Supremo da Área Sudoeste do Pacífico. Ao chegar, MacArthur fez um discurso no qual prometeu que \"voltaria\" às Filipinas. Depois de mais de dois anos de luta, ele cumpriu essa promessa. Por sua defesa das Filipinas, MacArthur recebeu a Medalha de Honra.\n[…]\nPor um tempo, MacArthur, que há muito se via como um presidente em potencial, esteve, nas palavras do historiador norte-americano Gerhard Weinberg, \"muito interessado\" em concorrer como candidato republicano em 1944. No entanto, a promessa de MacArthur de \"retornar\" às Filipinas não foi cumprida no início de 1944 e ele decidiu não concorrer à presidência até libertar as Filipinas.\n[…]\nMacArthur tem um legado contestado. Nas Filipinas, em 1942, sofreu uma derrota que Gavin Long descreveu como \"a maior da história das guerras estrangeiras americanas\". Apesar disso:...num período frágil da psique americana, quando o público americano em geral, ainda atordoado pelo choque de Pearl Harbor e incerto do que estava por vir na Europa, precisava desesperadamente de um herói, eles abraçaram de todo o coração Douglas MacArthur – bom exemplar de imprensa que ele era.\n[…]\nFuga de Douglas MacArthur das Filipinas\n[…]\nFBI file on General Douglas MacArthur at vault.fbi.gov\n[…]\nSenate joint resolution to authorize the appointment of General of the Army Douglas MacArthur as General of the Armies of the United States"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.19 — 2026-09-30**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §17):** esquemas, fluxo de produção, decisões, pendências, o jogo e o app. É a referência de quem mantém o projeto.
>
> Arquivos relacionados:
> - [`pergunta.schema.json`](pergunta.schema.json) e [`ancora.schema.json`](ancora.schema.json): esquemas
> - [`temas_subtemas.json`](temas_subtemas.json): lista canônica de temas e subtemas
> - [`exemplos_perguntas.json`](exemplos_perguntas.json) · [`exemplos_ancoras.json`](exemplos_ancoras.json)
> - [`proposta_temas_subtemas.md`](proposta_temas_subtemas.md): histórico da revisão da lista canônica
> - [`../pipeline/README.md`](../pipeline/README.md): o pipeline que produz as perguntas
> - [`../app/`](../app/): o app que usa as perguntas numa partida (§16)

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

A lista canônica tem **8 temas e 69 subtemas** e fica em [`temas_subtemas.json`](temas_subtemas.json):

| Tema | Subtemas |
|---|---|
| Geografia | Países e Capitais · Cidades e Monumentos · Relevo e Maravilhas Naturais · Rios e Lagos · Oceanos, Mares e Ilhas · Clima e Biomas · Povos e Idiomas · Bandeiras e Símbolos |
| História | Pré-História e Idade do Bronze · Egito Antigo · Grécia Antiga · Roma Antiga · Antigas Civilizações do Oriente · Américas Pré-Colombianas · Idade Média · Idade Moderna · Idade Contemporânea · Primeira Guerra Mundial · Segunda Guerra Mundial · História do Brasil |
| Natureza | Mamíferos · Aves, Répteis e Anfíbios · Vida Marinha · Insetos e Invertebrados · Plantas e Fungos · Dinossauros e Fósseis · Evolução Humana · Ecossistemas e Ambientes Extremos · Geologia e História da Terra |
| Ciências | Astronomia e Espaço · Física · Química · Matemática · Corpo Humano e Medicina · Tecnologia e Computação · Invenções e História da Ciência |
| Artes e Pensamento | Literatura Brasileira · Literatura Mundial · Pintura · Escultura e Arquitetura · Música Clássica · Teatro e Ópera · Mitologia · Religiões · Filosofia |
| Entretenimento | Cinema · Séries e TV · Música Brasileira · Música Internacional · Jogos Eletrônicos · Anime e Mangá · Quadrinhos · Jogos de Tabuleiro e Cartas |
| Esportes | Futebol · Vôlei · Basquete · Tênis · Automobilismo · Olimpíadas · Lutas e Artes Marciais · Outras Modalidades |
| Cotidiano | Culinária e Bebidas · Língua Portuguesa e Expressões · Marcas e Produtos · Folclore e Tradições Brasileiras · Costumes pelo Mundo · Objetos do Dia a Dia · Moda e Vestuário · Transportes |

- Cada pergunta tem **um tema e um subtema**, escritos **exatamente** como na lista, com acentos e maiúsculas.
- Uma **pequena sobreposição** entre subtemas é tolerada.
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
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro.

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

> **Por enquanto, o gerador automático não cria perguntas com figura.** Elas só são escritas por quem tem a imagem em mãos e a examinou. Uma pergunta sem o campo `imagem` nunca se refere a uma foto ou figura.

- **O enunciado aponta para a figura e é curto:** "Que cidade aparece nesta foto?", "Esta igreja fica em qual capital?". Ele pode trazer um fato que ajude, desde que não entregue a resposta.
- **O ângulo segue a regra de sempre (§5).** Foto de um monumento e pergunta pela cidade: a âncora é o monumento, e o ângulo é `lugar`.
- **Tipos de figura, por ordem de prioridade:** lugares (cidades, monumentos, paisagens) e contornos de mapa. Obras de arte, animais e plantas ficam para depois.
- **Só imagens do Wikimedia Commons**, com licença livre (CC BY, CC BY-SA ou domínio público). Autor e licença são sempre registrados.
- **Proibido:** capas de álbuns, pôsteres, logotipos, fotos de imprensa e fotos de pessoas que não sejam figuras públicas.

**Critérios da figura**, além dos de §8:
- [ ] **Nada na imagem entrega a resposta:** placas, legendas, letreiros, marcas d'água, bandeiras.
- [ ] **Resposta única diante da imagem:** atenção a réplicas, paisagens parecidas e monumentos que ficam entre duas cidades. A Ponte Luís I liga o Porto a Vila Nova de Gaia, por isso a pergunta é pela cidade "do outro lado da ponte".
- [ ] **Legível num celular** a um braço de distância.
- [ ] **O enunciado é verdadeiro para esta foto específica**, e não só para o assunto: o ponto de vista, o lado e o que aparece nela.
- [ ] **Não é óbvia demais:** a Torre Eiffel de frente não ensina nada. Prefira um ângulo menos visto, um detalhe ou um fato no enunciado que torne a pergunta interessante (princípio 4).

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
