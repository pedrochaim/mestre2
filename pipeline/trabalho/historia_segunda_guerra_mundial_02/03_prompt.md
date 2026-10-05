Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Segunda Guerra Mundial** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Anne Frank",
      "descricao": "Adolescente judia alemã que escreveu um diário enquanto se escondia dos nazistas em Amsterdã e morreu num campo de concentração em 1945."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Descoberta no esconderijo em Amsterdã, a adolescente Anne Frank morreu em 1945 em qual campo de concentração nazista?",
    "resposta": "Bergen-Belsen",
    "fonte": [
      "https://en.wikipedia.org/wiki/Anne_Frank",
      "https://pt.wikipedia.org/wiki/Anne_Frank"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anne_Frank",
        "situacao": "ok",
        "texto": "Annelies Marie Frank (12 June 1929 – c. February or March 1945) was a German-born Jewish diarist and Holocaust victim. She gained worldwide notability posthumously for keeping a diary documenting her life in hiding during the German occupation of the Netherlands. In the diary, she regularly described her family's everyday life in their hiding place in a secret annex in Amsterdam from 1942 until th\n[…]\nFollowing their arrest, the Franks were transported to Westerbork transit camp and on to Auschwitz-Birkenau. On 1 November 1944, Anne Frank and her sister Margot were transferred from Auschwitz to the Bergen-Belsen concentration camp, where they died (presumably of typhus) a few months later. The Red Cross estimated that they died in March 1945, with Dutch authorities setting 31 March as the official date.\n[…]\nAnne Frank died at the Bergen-Belsen concentration camp in February or March 1945. Although the specific cause is unknown, there is evidence to suggest that she died from a typhus epidemic that spread through the camp, killing 17,000 prisoners. Gena Turgel, a survivor of Bergen-Belsen who knew Anne at the camp, told the British newspaper The Sun: \"Her bed was around the corner from me. She was delirious, terrible, burning up.\" She also mentioned that she had brought Anne water with which to wash.\n[…]\nIn July 1945, after the sisters Janny and Lien Brilleslijper, who were with Anne and Margot Frank in Bergen-Belsen, confirmed the deaths of the sisters, Miep Gies gave Anne's father her notebooks (including the red-and-white checkered diary) and a bundle of loose notes that she and Bep Voskuijl had saved in the hope of returning them to Anne. Otto Frank later commented that he had not realized Anne had kept such an accurate and well-written record of their time in hiding.\n[…]\nSearching for Anne Frank: Letters from Amsterdam to Iowa (book)\n[…]\nAnne Frank Trust UK\n[…]\nAnne Frank Fonds (Foundation)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anne_Frank",
        "situacao": "ok",
        "texto": "Annelies Marie Frank (Frankfurt, 12 de junho de 1929 – Bergen-Belsen, c. fevereiro ou março de 1945) foi uma diarista judia de origem alemã e vítima do Holocausto. Ela ganhou notoriedade mundial postumamente por manter um diário que documentava sua vida escondida durante a ocupação alemã nos Países Baixos. No diário, ela descrevia regularmente o cotidiano de sua família em seu esconderijo, um anex\n[…]\nApós a prisão, os Frank foram transportados para campos de concentração. Em 1 de novembro de 1944, Anne Frank e sua irmã Margot foram transferidas de Auschwitz para o campo de concentração de Bergen-Belsen, onde morreram (presumivelmente de tifo) alguns meses depois. A Cruz Vermelha estimou que elas morreram em março de 1945, com as autoridades holandesas definindo 31 de março como a data oficial.\n[…]\nEntre outubro e novembro de 1944, começaram as seleções de mulheres para serem realocadas para o campo de concentração de Bergen-Belsen. Mais de 8 mil mulheres, incluindo Anne, Margot e Auguste van Pels, foram transportadas; Edith Frank, no entanto, ficou para trás e morreu de fome. Ao passo em que a população em Bergen-Belsen aumentava, foram erguidas tendas para acomodarem a abundância de prisioneiros; no mesmo período, as doenças no campo se tornavam cada vez mais frequentes.\n[…]\nDe acordo com testemunhas oculares do campo de concentração de Bergen-Belsen, elas começaram a exibir sintomas de tifo a partir de 7 de fevereiro; conforme levantado por autoridades de saúde, infectados pela doença que não se tratam podem falecer até doze dias após o início dos sintomas. Em 15 de abril de 1945, prisioneiros do campo foram libertados pelo Exército Britânico; posteriormente, o local foi queimado para impedir a propagação das doenças.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «Anne Frank»."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Campo de concentração de Auschwitz",
      "descricao": "Complexo de campos de concentração e extermínio construído pela Alemanha nazista na Polônia ocupada."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O campo de extermínio de Auschwitz, construído pelos nazistas durante a guerra, fica em qual país atual?",
    "resposta": "Polônia",
    "distratores": [
      "Alemanha",
      "Áustria",
      "Hungria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Auschwitz_concentration_camp"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Auschwitz_concentration_camp",
        "situacao": "ok",
        "texto": "Auschwitz (German: [ˈaʊ̯ʃvɪts]), also known as Oświęcim (Polish: [ɔˈɕfjɛɲ.t͡ɕim]), was a complex of over 40 concentration and extermination camps operated by Nazi Germany in occupied Poland (in a portion annexed into Germany in 1939) during World War II and the Holocaust.\n[…]\nIt consisted of Auschwitz I, the main camp (Stammlager) in Oświęcim; Auschwitz II-Birkenau, a concentration and extermination camp with gas chambers, Auschwitz III-Monowitz, a labour camp for the chemical conglomerate IG Farben, and dozens of subcamps.\n[…]\nAfter visiting Auschwitz I in March 1941, it appears that Himmler ordered that the camp be expanded, although Peter Hayes notes that, on 10 January 1941, the Polish underground told the Polish government-in-exile in London: \"the Auschwitz concentration camp ...can accommodate approximately 7,000 prisoners at present, and is to be rebuilt to hold approximately 30,000.\" Construction of Auschwitz II-Birkenau—called a Kriegsgefangenenlager (prisoner-of-war camp) on blueprints—began in October 1941 in Brzezinka, about three kilometers from Auschwitz I.\n[…]\nIn early 1942, mass exterminations were moved to two provisional gas chambers (the \"red house\" and \"white house\", known as bunkers 1 and 2) in Auschwitz II, while the larger crematoria (II, III, IV, and V) were under construction. Bunker 2 was temporarily reactivated from May to November 1944, when large numbers of Hungarian Jews were gassed. In summer 1944 the combined capacity of the crematoria and outdoor incineration pits was 20,000 bodies per day.\n[…]\nThe reports were first published in their entirety in November 1944 by the United States War Refugee Board as The Extermination Camps of Auschwitz (Oświęcim) and Birkenau in Upper Silesia.\n[…]\nAuschwitz-Birkenau photographs by Bill Hunt."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Auschwitz",
        "situacao": "ok",
        "texto": "O campo de concentração de Auschwitz (em alemão:  Konzentrationslager Auschwitz, pronunciado [kɔntsɛntʁaˈtsi̯oːnsˌlaːɡɐ ˈʔaʊʃvɪts] (), também KZ Auschwitz ou KL Auschwitz) foi uma rede de campos de concentração localizados no sul da Polônia operados pelo Terceiro Reich e colaboracionistas nas áreas polonesas anexadas pela Alemanha Nazista, maior símbolo do Holocausto perpetrado pelo nazismo durant\n[…]\nPor um longo tempo, Auschwitz era apenas o nome alemão dado a Oświęcim, na Baixa Polônia, a cidade em volta da qual os campos eram localizados. Ele tornou-se novamente oficial após a invasão da Polônia pela Alemanha em setembro de 1939. \"Birkenau\", a tradução alemã para Brzezinka (floresta de bétulas), referia-se originalmente a uma pequena vila polonesa que foi destruída para que o campo pudesse ser construído.\n[…]\nEm 27 de abril de 1940, Heinrich Himmler, o Reichsführer da SS, deu ordens para que a área dos antigos alojamentos da artilharia do exército, no local agora oficialmente nomeado Auschwitz, fosse transformado em campos de concentração. No complexo construído, Auschwitz II–Birkenau foi designado por ele como campo de extermínio e o lugar para a Solução Final dos judeus. Entre o começo de 1942 e o fim de 1944, trens transportaram judeus de toda a Europa ocupada para as câmaras de gás do campo.\n[…]\nElie Wiesel - sobreviveu a Auschwitz III-Monowitz e escreveu sobre suas experiências. Prêmio Nobel da Paz de 1986.\n[…]\nApós a guerra, partes de Auschwitz I e os alojamentos dos guardas SS no complexo serviram em princípio como hospital para os prisioneiros doentes libertados. Até 1947, parte dele foi usado pela NKVD e pelo Ministério da Segurança Pública da Polônia como campo de prisioneiros alemães. A fábrica Buna-Werke foi tomada pelo governo polonês e se tornou o polo inicial de uma indústria química criada na região.\n[…]\nPor que Auschwitz não foi bombardeada durante a guerra?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Campo de concentração de Auschwitz",
      "descricao": "Complexo de campos de concentração e extermínio construído pela Alemanha nazista na Polônia ocupada."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Dia Internacional em Memória das Vítimas do Holocausto lembra a data em que os soviéticos libertaram Auschwitz, em 1945. Que dia é esse?",
    "resposta": "27 de janeiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/International_Holocaust_Remembrance_Day",
      "https://en.wikipedia.org/wiki/Auschwitz_concentration_camp"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/International_Holocaust_Remembrance_Day",
        "situacao": "ok",
        "texto": "International Holocaust Remembrance Day, or the International Day in Memory of the Victims of the Holocaust, is an international memorial day on 27 January that commemorates the victims of the Holocaust, which resulted in the genocide of two-thirds of the European Jewish population along with  numerous  individuals of other minority groups, by Nazi Germany between 1933 and 1945: an attempt to impl\n[…]\nThe choice of 27 January for the annual commemoration aligns with the liberation of the Auschwitz concentration camp by the Red Army in 1945.\n[…]\nMany countries have instituted their own Holocaust memorial days. Many, such as the United Kingdom’s Holocaust Memorial Day, also fall on 27 January; others, such as Yom HaShoah (27 Nisan on the Hebrew calendar), the commemoration day observed by the State of Israel and much of the broader Jewish community, are observed at other times of the year.\n[…]\nResolution 60/7, adopted by the General Assembly on 1 November 2005, established 27 January as International Holocaust Remembrance Day. The resolution urges every member nation of the UN to honor the memory of Holocaust victims, six million Jews, \"one third of the Jewish people, along with countless members of other minorities,\" and encourages the development of educational programs about Holocaust history to help prevent future acts of genocide.\n[…]\nOn 27 January, the United Nations Department of Public Information held the first universal observance of International Holocaust Remembrance Day at United Nations Headquarters. In the General Assembly Hall, a memorial ceremony and lecture were held under the theme \"Remembrance and Beyond\".\n[…]\nInternational Holocaust Remembrance Day on the U.S. Holocaust Memorial Museum website\n[…]\nEvents and activities for the United Nations' International Day of Commemoration in memory of the victims of the Holocaust\n[…]\nOSCE \"Holocaust Memorial Days in the OSCE Region\" reports"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Auschwitz_concentration_camp",
        "situacao": "ok",
        "texto": "Auschwitz (German: [ˈaʊ̯ʃvɪts]), also known as Oświęcim (Polish: [ɔˈɕfjɛɲ.t͡ɕim]), was a complex of over 40 concentration and extermination camps operated by Nazi Germany in occupied Poland (in a portion annexed into Germany in 1939) during World War II and the Holocaust.\n[…]\nAs the Soviet Red Army approached Auschwitz in January 1945, toward the end of the war, the SS sent most of the camp's population west on a death march to camps inside Germany and Austria. Soviet troops liberated the camp on 27 January 1945, a day commemorated since 2005 as International Holocaust Remembrance Day.\n[…]\nFrom Gliwice, prisoners were taken by rail in open freight wagons to the Buchenwald and Mauthausen concentration camps. The 800 inmates who had been left behind in the Monowitz hospital were liberated along with the rest of the camp on 27 January 1945 by the 1st Ukrainian Front of the Red Army.\n[…]\nSnyder attributes this to the camp's high death toll and \"unusual combination of an industrial camp complex and a killing facility\", which left behind far more witnesses than single-purpose killing facilities such as Chełmno or Treblinka. In 2005 the United Nations General Assembly designated 27 January, the date of the camp's liberation, as International Holocaust Remembrance Day.\n[…]\nOn 4 September 2003, despite a protest from the museum, three Israeli Air Force F-15 Eagles performed a fly-over of Auschwitz II-Birkenau during a ceremony at the camp below. All three pilots were descendants of Holocaust survivors, including the man who led the flight, Major-General Amir Eshel. On 27 January 2015, some 300 Auschwitz survivors gathered with world leaders under a giant tent at the entrance to Auschwitz II to commemorate the 70th anniversary of the camp's liberation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_Internacional_da_Lembran%C3%A7a_do_Holocausto",
        "situacao": "ok",
        "texto": "Dia Internacional da Lembrança do Holocausto ou Dia Internacional em Memória das Vítimas do Holocausto é um dia internacional da lembrança das vítimas do Holocausto, o genocídio cometido pelos nazistas e seus adeptos que ceifou a vida de milhões de pessoas judias, ciganas, poloneses, homossexuais, pessoas com deficiência, comunistas e outras, durante a Segunda Guerra Mundial.\n[…]\nFoi designado ao dia 27 de janeiro, pela resolução 60/7 da Assembleia Geral das Nações Unidas em 1 de novembro de 2005, durante a 42ª sessão plenária desta organização.\n[…]\nA resolução veio após a sessão especial realizada em 24 de janeiro de 2005, durante a qual a Assembleia Geral marcou o 60º aniversário da libertação dos campos de concentração e do fim do Holocausto. 27 de janeiro é a data, em 1945, que marca a liberação do maior campo de extermínio nazista, Auschwitz-Birkenau, pelas tropas soviéticas.\n[…]\nAntes de resolução 60/7, existiam vários dias nacionais de comemoração, como o Dia da Lembrança das Vítimas do Nacional-Socialismo, na Alemanha, criado através de um decreto do presidente Roman Herzog em 3 de janeiro de 1996 e o Dia do Holocausto no Reino Unido, observado desde 2001 em 27 de janeiro. O Dia da Lembrança do Holocausto também é uma data comemorada a nível nacional na Itália.\n[…]\nCríticas ao Negacionismo do Holocausto\n[…]\nDia Europeu da Memória das Vítimas do Estalinismo e do Nazismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Conferência de Teerã",
      "descricao": "Encontro de Roosevelt, Churchill e Stálin realizado no Irã entre novembro e dezembro de 1943."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1943, Roosevelt, Churchill e Stálin se reuniram pela primeira vez, os três juntos, em qual capital do Oriente Médio?",
    "resposta": "Teerã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tehran_Conference"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tehran_Conference",
        "situacao": "ok",
        "texto": "The Tehran Conference (codenamed Eureka) was a strategy meeting of the Allies of World War II, held between Joseph Stalin, Franklin D. Roosevelt, and Winston Churchill from 28 November to 1 December 1943. It was the first of the Allied World War II conferences involving the \"Big Three\" (the Soviet Union, the United States, and the United Kingdom) and took place at the Soviet embassy in Tehran more\n[…]\nThe conference was to convene at 16:00 on 28 November 1943. Stalin had arrived well before, followed by Roosevelt, who was brought in his wheelchair from his accommodation adjacent to the venue. Roosevelt, who had traveled 11,000 kilometres (7,000 miles) to attend and whose health was already deteriorating, was met by Stalin. This was the first time that they had met. Churchill, walking with his general staff from their accommodations nearby, arrived half an hour later.\n[…]\nWhen housing accommodations for the meeting were originally discussed, both Stalin and Churchill had extended invitations to Roosevelt, asking him to stay with them during the meeting. However, Roosevelt wanted to avoid the appearance of choosing one ally over another and decided it was important to stay at the American legation to remain independent. Roosevelt arrived in Tehran on 27 November 1943 and settled into the American legation.\n[…]\nAfter the Tehran Conference ended, Harriman asked Molotov whether there was really ever an assassination threat in Tehran. Molotov said that they knew about German agents in Tehran, but did not know of a specific assassination plot. Molotov's response minimized their assertions of an assassination plot, instead emphasizing that Stalin thought President Roosevelt would be safer at the Soviet embassy.\n[…]\nThe Ministry of Foreign Affairs Iran, ed. (2021) [1943]. The Tehran Conference: The Three-Power Declaration Concerning Iran December 1943. epubli.de, Berlin. CMH Pub 70-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Confer%C3%AAncia_de_Teer%C3%A3",
        "situacao": "ok",
        "texto": "A Conferência de Teerã(pt-BR) ou Conferência de Teerão(pt-PT?) foi o primeiro dos acordos firmados entre as superpotências durante a Segunda Guerra Mundial. A ocasião reuniu pela primeira vez os três grandes estadistas do mundo da época: Josef Stalin, da União Soviética, Winston Churchill, do Reino Unido, e Franklin Delano Roosevelt, dos Estados Unidos. Esta conferência teve lugar em Teerã, entre \n[…]\nAlém de lançarem bases de definições de partilhas, decidiu-se que as forças anglo-americanas interviriam na França, completando o cerco de pressão à Alemanha, juntamente com as forças orientais soviéticas, o que concretizou-se com o desembarque dos Aliados na Normandia no Dia D. Deliberou-se ainda sobre a divisão da Alemanha e as fronteiras da Polônia ao terminar a guerra, além de se formularem propostas de paz com a colaboração de todas as nações.\n[…]\nLista de conferências da Segunda Guerra Mundial\n[…]\nOperação Long Jump - plano nazista, comandado por Otto Skorzeny, para assassinar os \"Três Grandes\" durante a conferência.\n[…]\nDeclaração das Três Potências na obra Em direção à paz no Wikisource.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Bombardeamentos de Hiroshima e Nagasaki",
      "descricao": "Ataques nucleares dos Estados Unidos contra duas cidades japonesas em agosto de 1945."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em agosto de 1945, o alvo da segunda bomba atômica era a cidade de Kokura, mas a visibilidade ruim desviou o avião para qual cidade?",
    "resposta": "Nagasaki",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki",
      "https://en.wikipedia.org/wiki/Kokura"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki",
        "situacao": "ok",
        "texto": "On 6 and 9 August 1945, the United States detonated two atomic bombs over the Japanese cities of Hiroshima and Nagasaki, respectively, during the final days of World War II. The aerial bombings killed 150,000 to 246,000 people, most of whom were civilians, and remain the first and only uses of nuclear weapons in an armed conflict.\n[…]\nHiroshima was the primary target of the first atomic bombing mission on 6 August, with Kokura and Nagasaki as alternative targets. The 393rd Bombardment Squadron B-29 Enola Gay, named after Tibbets's mother and piloted by Tibbets, took off from North Field, Tinian, about six hours' flight time from Japan, at 02:45 local time.\n[…]\nDuring the war, Japan brought as many as 670,000 Korean conscripts to Japan to work as forced labor. About 5,000–8,000 Koreans were killed in Hiroshima and 1,500–2,000 in Nagasaki. According to the South Korea Atomic Bomb Victims Association, about 70,000 Koreans were exposed to the bomb. By the end of 1945, some 40,000 (57.1%) had died. The overall rate was about 33.7%. According to a study by the Gyeonggi Welfare Foundation, some survivors were forced to clear rubble and recover bodies.\n[…]\nIn 1963 the bombings were subjected to judicial review in Ryuichi Shimoda v. The State. The District Court of Tokyo ruled the use of nuclear weapons in warfare was not illegal, but held in its obiter dictum that the atomic bombings of both Hiroshima and Nagasaki were illegal under international law of that time, as an indiscriminate bombardment of undefended cities.\n[…]\n\"Annotated bibliography for atomic bombings of Hiroshima and Nagasaki\". Alsos Digital Library for Nuclear Issues. Archived from the original on 5 March 2012. Retrieved 3 January 2012.\n[…]\nHiroshima and Nagasaki: A Look Back at the US Atomic Bombing 64 Years Later – video by Democracy Now!"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kokura",
        "situacao": "ok",
        "texto": "Kokura (小倉, Kokura) was an ancient castle town in Japan and the center of the city of Kitakyushu, which is the second most populous city on the island of Kyushu, after the city of Fukuoka. Kokura is also the name of the penultimate station on the southbound San'yō Shinkansen line, which is owned by JR West.\n[…]\nAfter the end of the Tokugawa Shogunate, Kokura was the seat of government for Kokura Prefecture. When the municipal system of cities, towns and villages was introduced, Kokura Town was one of 25 towns in the prefecture, which later merged with Fukuoka Prefecture. Kokura was elevated to city status as \"Kokura City\" (小倉市, Kokura-shi) in 1900.\n[…]\nKokura was the primary target for the \"Fat Man\" atomic bomb on August 9, 1945, but on the morning of the raid, the city was obscured by morning fog. Kokura had also been mistaken for the neighboring city of Yahata the day before by the reconnaissance missions. Since the mission commander Major Charles Sweeney had orders to drop the bomb visually and not by radar, he diverted to the secondary target, Nagasaki.\n[…]\nThe planes, however, did fly over Kokura and were extremely close to executing the mission drop.\n[…]\nKokura was merged with four other cities to form Kitakyushu in 1963. It constituted the Kokura ward of the new city until 1974, when it was divided into Kokura Kita ward in the north, and Kokura Minami ward in the south.\n[…]\nTetsuya Theodore Fujita – Meteorologist, lived in Kokura during World War II\n[…]\nThe Gion Festival of Kokura is called the \"Gion of Drums\" and celebrates the life of local folk-hero Muhomatsu.\n[…]\nKokura Kita-ku\n[…]\nKokura Minami-ku\n[…]\nKokura Prefecture\n[…]\nAtomic bombings of Hiroshima and Nagasaki"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bombardeamentos_at%C3%B4micos_de_Hiroshima_e_Nagasaki",
        "situacao": "ok",
        "texto": "Bombardeamentos atômicos (português brasileiro) ou atómicos (português europeu) das cidades de Hiroshima e Nagasaki foram dois bombardeios realizados pelos Estados Unidos contra o Império do Japão durante os estágios finais da Segunda Guerra Mundial, em agosto de 1945. Foi o primeiro e único momento na história em que armas nucleares foram usadas em guerra e contra alvos civis.\n[…]\nA bomba atômica de urânio (Little Boy) foi lançada sobre Hiroshima em 6 de agosto de 1945, seguido por uma explosão de uma bomba nuclear de plutônio (Fat Man) sobre a cidade de Nagasaki em 9 de agosto. Dentro dos primeiros 2-4 meses após os ataques atômicos, os efeitos agudos das explosões mataram entre 90 mil e 166 mil pessoas em Hiroshima e 60 mil e 80 mil seres humanos em Nagasaki; cerca de metade das mortes em cada cidade ocorreu no primeiro dia.\n[…]\nHiroshima era o alvo principal da primeira missão de bombardeio nuclear em 6 de agosto, sendo Kokura e Nagasaki como alvos alternativos. O B-29 Enola Gay, do 393º Esquadrão de Bombardeio, pilotado por Tibbets, decolou de North Field, em Tinian, há cerca de seis horas de voo do Japão. O Enola Gay (em homenagem a mãe de Tibbets) foi acompanhado por outros dois B-29.\n[…]\nÀs 03:49 da manhã de 9 de agosto de 1945 o Bockscar, pilotado pela equipe de Sweeney, foi carregado com a Fat Man, tendo Kokura como o alvo principal e Nagasaki como o alvo secundário. O plano da missão para o segundo ataque era quase idêntico ao da missão Hiroshima, com dois B-29 voando uma hora à frente e dois B-29 adicionais para instrumentação e suporte fotográfico da missão. Sweeney decolou com sua arma já armada, mas com as fichas de segurança elétrica ainda envolvidas.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «Atomic bombings of Hiroshima and Nagasaki».\n[…]\nNuclear Files.org - Hiroshima and Nagasaki",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Bombardeamentos de Hiroshima e Nagasaki",
      "descricao": "Ataques nucleares dos Estados Unidos contra duas cidades japonesas em agosto de 1945."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que presidente americano, no cargo havia poucos meses, autorizou o lançamento das bombas atômicas sobre o Japão?",
    "resposta": "Harry Truman",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki",
      "https://en.wikipedia.org/wiki/Harry_S._Truman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki",
        "situacao": "ok",
        "texto": "On 6 and 9 August 1945, the United States detonated two atomic bombs over the Japanese cities of Hiroshima and Nagasaki, respectively, during the final days of World War II. The aerial bombings killed 150,000 to 246,000 people, most of whom were civilians, and remain the first and only uses of nuclear weapons in an armed conflict.\n[…]\nExtant sources show that while Stimson was personally familiar with Kyoto, this was the result of a visit decades after his marriage when he was governor-general of the Philippines, not because he honeymooned there. On 30 May, Stimson asked Groves to remove Kyoto from the target list due to its historical, religious and cultural significance, but Groves pointed to its military and industrial significance. Stimson then approached President Harry S. Truman about the matter.\n[…]\nThat day, Truman noted in his diary that:\n[…]\nIn the spring of 1948, the ABCC was established in accordance with a presidential directive from Truman to the National Academy of Sciences–National Research Council to conduct investigations of the late effects of radiation among the survivors in Hiroshima and Nagasaki. In 1956, the ABCC published The Effect of Exposure to the Atomic Bombs on Pregnancy Termination in Hiroshima and Nagasaki. The ABCC became the Radiation Effects Research Foundation (RERF) on 1 April 1975.\n[…]\n\"Documents on the Decision to Drop the Atomic Bomb\". Harry S. Truman Presidential Library and Museum. Archived from the original on 5 October 2011. Retrieved 3 January 2012.\n[…]\n\"The Effects of the Atomic Bombings of Hiroshima and Nagasaki\". U.S. Strategic Bombing Survey. Harry S. Truman Presidential Library and Museum. 1946. Archived from the original on 16 November 2018. Retrieved 3 January 2012.\n[…]\nHiroshima and Nagasaki: A Look Back at the US Atomic Bombing 64 Years Later – video by Democracy Now!"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Harry_S._Truman",
        "situacao": "ok",
        "texto": "Harry S. Truman  (May 8, 1884 – December 26, 1972) was the 33rd president of the United States, serving from 1945 to 1953. As the 34th vice president in 1945, he assumed the presidency upon the death of Franklin D. Roosevelt in April. Truman  set up the Marshall Plan to rebuild the badly damaged economy of Western Europe. He established the Truman Doctrine and supported the founding of NATO to con\n[…]\nOshinsky, David M. (2004). \"Harry Truman\". In Brinkley, Alan; Dyer, Davis (eds.). The American Presidency. Boston: Houghton Mifflin. ISBN 978-0-618-38273-6.\n[…]\n\"Harry S. Truman Post-Presidential Papers\". Harry S. Truman Library & Museum. Retrieved July 28, 2012.\n[…]\nGilwee, William J. (2000). \"Capt. Harry Truman, Artilleryman and Future President\". Doughboy Center: The Story of the American Expeditionary Forces. Worldwar1.com. Archived from the original on June 14, 2008. Retrieved July 29, 2012.\n[…]\nHamby, Alonzo (July 8, 2002). \"Presidency: How Do Historians Evaluate the Administration of Harry Truman?\". History News Network. George Mason University. Retrieved September 8, 2012.\n[…]\n\"Executive Order 9981, Establishing the President's Committee on Equality of Treatment and Opportunity in the Armed Services, Harry S. Truman\". Federal Register. National Archives. 1948. Retrieved September 6, 2012.\n[…]\n\"Harry S. Truman: 2nd Confederate President\". The Missouri Partisan Ranger. 1995. Retrieved July 29, 2012.\n[…]\n\"Harry S. Truman (1884–1972) Thirty-third President (1945–1952)\". The Grand Lodge of Free and Accepted Masons of Pennsylvania. 2011. Archived from the original on July 17, 2012. Retrieved July 29, 2012.\n[…]\n\"Harry S. Truman, 34th Vice President (1945)\". United States Senate. 2012. Archived from the original on May 3, 2019. Retrieved July 30, 2012.\n[…]\n\"Life Portrait of Harry S. Truman\", from C-SPAN's American presidents: Life Portraits, October 18, 1999\n[…]\nWorks by Harry S. Truman at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bombardeamentos_at%C3%B4micos_de_Hiroshima_e_Nagasaki",
        "situacao": "ok",
        "texto": "Bombardeamentos atômicos (português brasileiro) ou atómicos (português europeu) das cidades de Hiroshima e Nagasaki foram dois bombardeios realizados pelos Estados Unidos contra o Império do Japão durante os estágios finais da Segunda Guerra Mundial, em agosto de 1945. Foi o primeiro e único momento na história em que armas nucleares foram usadas em guerra e contra alvos civis.\n[…]\nNo entanto, a notícia do bombardeio atômico foi recebida com entusiasmo nos Estados Unidos; uma pesquisa na revista Fortune no final de 1945 mostrou uma minoria significativa de norte-americanos (22,7%) que desejavam que mais bombas atômicas fossem lançadas sobre o Japão.\n[…]\nNa primavera de 1948, a \"Atomic Bomb Casualty Commission\" (ABCC) foi estabelecida em conformidade com um decreto presidencial de Truman para a Academia Nacional de Ciências — Conselho Nacional de Pesquisa dos Estados Unidos para realizar pesquisas sobre os efeitos tardios da radiação entre os sobreviventes de Hiroshima e Nagasaki.\n[…]\nTruman afirma em Memoirs, de 1955, que a bomba atômica provavelmente salvou meio milhão de mortes norte-americanas antecipadas em uma invasão do Japão pelos Aliados prevista para novembro. Stimson posteriormente falou que salvaram um milhão de vítimas norte-americanas e Churchill que as bombas salvaram um milhão de norte-americanos e metade desse número de vidas britânicas\".\n[…]\n... (b) que o lançamento de bombas atômicas como um ato de hostilidade era ilegal de acordo com as regras do direito internacional positivo (tendo em consideração o direito dos tratados e do direito consuetudinário), então em vigor ... (c) que o lançamento de bombas atômicas também constituiu um ato ilícito no plano da lei municipal, imputáveis aos Estados Unidos e ao seu Presidente, o Sr. Harry S. Truman; O ...\n[…]\nTruman's Motivations: Using the Atomic Bomb in the Second World War\n[…]\nThe Decision To Use the Atomic Bomb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Evacuação de Dunquerque",
      "descricao": "Retirada por mar de soldados aliados cercados no norte da França, entre maio e junho de 1940, de codinome Operação Dínamo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1940, mais de trezentos mil soldados aliados cercados pelos alemães foram resgatados por barcos a partir das praias de qual cidade francesa?",
    "resposta": "Dunquerque",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dunkirk_evacuation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dunkirk_evacuation",
        "situacao": "ok",
        "texto": "In the Dunkirk evacuation, codenamed Operation Dynamo and also known as the Miracle of Dunkirk, or just Dunkirk, more than 338,000 Allied soldiers were evacuated during the Second World War from the beaches and harbour of Dunkirk in northern France between 26 May and 4 June 1940.\n[…]\nFor many French soldiers, the Dunkirk evacuation represented only a few weeks' delay before being killed or captured by the German army after their return to France. Of the French soldiers evacuated from France in June 1940, about 3,000 joined Charles de Gaulle's Free French army in Britain.\n[…]\nConservative newspapers and journals in early 1940 tended to give more coverage to the battle of Calais, where Brigadier Claude Nicholson chose to fight on despite being informed that escape was impossible from Calais, rather than the Dunkirk evacuation.\n[…]\nThe triumph of the \"people's war\" interpretation, which completely obliviated the rival \"battle of the ports\" interpretation in the popular memory of 1940, was largely due to cinema, as filmmakers chose to focus on the evacuation at Dunkirk and ignored the other battles along the French coast.\n[…]\nDuring the entire campaign, from 10 May until the armistice with France on 22 June, the BEF suffered 68,000 casualties. This included 3,500 killed and 13,053 wounded. Most heavy equipment had to be abandoned during the various evacuations, resulting in the loss of 2,472 pieces of artillery, 20,000 motorcycles, nearly 65,000 other vehicles, 416,000 long tons (423,000 t) of stores, more than 75,000 long tons (76,000 t) of ammunition, and 162,000 long tons (165,000 t) of fuel.\n[…]\nDunkirk, Operation Dynamo – Battle of Britain 1940\n[…]\nNazis invade France—Video analysis on WW2History.com\n[…]\nBBC Archives – J. B. Priestley's 'Postscript' – radio broadcast from 5 June 1940"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Evacua%C3%A7%C3%A3o_de_Dunquerque",
        "situacao": "ok",
        "texto": "A Evacuação de Dunquerque, codinome Operação Dínamo e também conhecida como Milagre de Dunquerque, ou apenas Dunquerque, foi a evacuação de mais de 338 000 soldados Aliados durante a Segunda Guerra Mundial das praias e do porto de Dunquerque, no norte da França, entre 26 de maio à 4 de junho de 1940. A operação começou depois que um grande número de tropas belgas, britânicas e francesas foram isol\n[…]\nOs mais de 100 000 soldados franceses evacuados de Dunquerque foram rápida e eficientemente transportados para campos em várias partes do sudoeste do Reino Unido, onde foram temporariamente alojados antes de serem repatriados. Navios britânicos transportaram tropas francesas para Brest, Cherbourg e outros portos na Normandia e na Bretanha, embora apenas cerca de metade das tropas repatriadas tenham sido redistribuídas contra os alemães antes da rendição da França.\n[…]\nPara muitos soldados franceses, a evacuação de Dunquerque representou apenas um atraso de algumas semanas antes de serem mortos ou capturados pelo Exército Alemão após seu retorno à França. Dos soldados franceses evacuados da França em junho de 1940, cerca de 3 000 se juntaram ao Exército Francês Livre de Charles de Gaulle no Reino Unido.\n[…]\nA evacuação foi apresentada ao público alemão como uma vitória esmagadora e decisiva. Em 5 de junho de 1940, Adolf Hitler declarou: \"Dunquerque caiu! 40 000 soldados franceses e ingleses são tudo o que resta dos outrora grandes exércitos. Quantidades imensuráveis ​​de material foram capturadas. A maior batalha da história do mundo chegou ao fim.\" O Oberkommando der Wehrmacht (OKW, Alto Comando das Forças Armadas Alemãs) anunciou o evento como \"a maior batalha de aniquilação de todos os tempos\".\n[…]\nAqueles da BEF que morreram nos combates de 1940, ou como prisioneiros de guerra após a captura durante esta campanha, e não têm túmulo conhecido, são comemorados no Memorial de Dunquerque.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Alan Turing",
      "descricao": "Matemático britânico, pioneiro da computação, que ajudou a decifrar os códigos alemães na Segunda Guerra Mundial."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Durante a guerra, o matemático Alan Turing ajudou a decifrar os códigos alemães trabalhando em qual propriedade secreta inglesa?",
    "resposta": "Bletchley Park",
    "distratores": [
      "Chequers",
      "Palácio de Blenheim",
      "Castelo de Windsor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alan_Turing",
      "https://en.wikipedia.org/wiki/Bletchley_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alan_Turing",
        "situacao": "ok",
        "texto": "Alan Mathison Turing (; 23 June 1912 – 7 June 1954) was an English mathematician and logician widely regarded as the father of theoretical computer science. He formalised the concepts of algorithm and computation with the Turing machine, a model of a general-purpose computer, and his contributions to cryptanalysis helped the Allies of World War II decipher messages encrypted by the German Enigma m\n[…]\nAt the end of the war, a memo was sent to all those who had worked at Bletchley Park, reminding them that the code of silence dictated by the Official Secrets Act did not end with the war but would continue indefinitely. Thus, even though Turing was appointed an Officer of the Order of the British Empire (OBE) in 1946 by King George VI for his wartime services, his work remained secret for many years.\n[…]\nIn July 1942, Turing devised a technique termed Turingery (or jokingly Turingismus) for use against the Lorenz cipher messages produced by the Germans' new Geheimschreiber (secret writer) machine. This was a teleprinter rotor cipher attachment codenamed Tunny at Bletchley Park. Turingery was a method of wheel-breaking, i.e., a procedure for working out the cam settings of Tunny's wheels.\n[…]\nAlthough ACE was a feasible design, the effect of the Official Secrets Act surrounding the wartime work at Bletchley Park made it impossible for Turing to explain the basis of his analysis of how a computer installation involving human operators would work. This led to delays in starting the project and he became disillusioned. In late 1947 he returned to Cambridge for a sabbatical year during which he produced a seminal work on Intelligent Machinery that was not published in his lifetime.\n[…]\nSmith, Michael (1998). The Secrets of Station X: How the Bletchley Park codebreakers helped win the war. Boxtree. ISBN 978-0752221892.\n[…]\nAlan Turing OBE, PhD, FRS (1912–1954) (Old Shirburnian Society)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bletchley_Park",
        "situacao": "ok",
        "texto": "Bletchley Park is an English country house and estate in Bletchley, Milton Keynes (Buckinghamshire), that became the principal centre of Allied code-breaking during the Second World War. During World War II, the estate housed the Government Code and Cypher School (GC&CS), which regularly penetrated the secret communications of the Axis powers –  most importantly the German Enigma and Lorenz cipher\n[…]\nIn October 2005, American billionaire Sidney Frank donated £500,000 to Bletchley Park Trust to fund a new Science Centre dedicated to Alan Turing. Simon Greenish joined as Director in 2006 to lead the fund-raising effort in a post he held until 2012 when Iain Standen took over the leadership role. In July 2008, a letter to The Times from more than a hundred academics condemned the neglect of the site.\n[…]\nThe film The Imitation Game (2014), starring Benedict Cumberbatch as Alan Turing, is set in Bletchley Park, and was partially filmed there.\n[…]\nBletchley Park was featured in the sixth and final episode of the BBC TV documentary The Secret War (1977), presented and narrated by William Woodard. This episode featured interviews with Gordon Welchman, Harry Golombek, Peter Calvocoressi, F. W. Winterbotham, Max Newman, Jack Good, and Tommy Flowers.\n[…]\nA 2012 London Science Museum exhibit, \"Code Breaker: Alan Turing's Life and Legacy\", marking the centenary of his birth, included a short film of statements by half a dozen participants and historians of the World War II Bletchley Park Ultra operations.\n[…]\nBletchley Park: It's No Secret, Just an Enigma, The Telegraph, 29 August 2009\n[…]\nThe Bletchley Park Podcast on Audioboom\n[…]\nBletchley Park Paperwork at The ICL Computer Museum\n[…]\nMap of Bletchley Park site, as used during World War II\n[…]\nMap of Bletchley Park site, as used 1939-1945\n[…]\nBletchley Park - Interactive Map\n[…]\nMap of Bletchley Park site, as used in 2024\n[…]\nView of Bletchley Park site, in 2024"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alan_Turing",
        "situacao": "ok",
        "texto": "Alan Mathison Turing (Londres, 23 de junho de 1912 – Wilmslow, Cheshire, 7 de junho de 1954) foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente no desenvolvimento da moderna ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo e computação com a máquina de Turing, que pode ser\n[…]\nDurante a Segunda Guerra Mundial, Turing trabalhou para a Escola de Código e Cifras do Governo (GC&CS) em Bletchley Park, o centro britânico de criptoanálise que produzia ultra inteligência. Por um tempo ele liderou a Hut 8, a seção responsável pela análise criptográfica naval alemã.\n[…]\nDurante a Segunda Guerra Mundial, Turing foi um participante líder na quebra de cifras alemãs em Bletchley Park. O historiador e decifrador de código de guerra Asa Briggs disse: \"Precisávamos de talento excepcional, precisávamos de um gênio em Bletchley, e Turing foi esse gênio\".\n[…]\nPeter Hilton relatou sua experiência trabalhando com Turing na Hut 8 em suas \"Reminiscências de Bletchley Park\", de A Century of Mathematics in America:\n[…]\nWomersley, superintendente da Divisão de Matemática da NPL, \"continha várias ideias que são do próprio Turing\". Embora o ACE fosse um projeto viável, o sigilo em torno do trabalho de guerra em Bletchley Park levou a atrasos no início do projeto e Turing ficou desiludido. No final de 1947 ele voltou a Cambridge para um ano sabático, durante o qual produziu um trabalho seminal sobre Máquinas Inteligentes que não foi publicado em sua vida.\n[…]\nTuring nunca foi acusado de espionagem, mas, como todos os que haviam trabalhado em Bletchley Park, foi impedido pela Lei de Segredos Oficiais de discutir o seu trabalho durante os tempos de guerra.\n[…]\nAlan Turing (em inglês) no Mathematics Genealogy Project\n[…]\nComo Alan Turing decifrou o código Enigma Imperial War Museums\n[…]\nAlan Turing - New Scientist",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Força Expedicionária Brasileira",
      "descricao": "Força militar brasileira que lutou ao lado dos Aliados na campanha da Itália, entre 1944 e 1945."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em julho de 1944, o primeiro escalão da Força Expedicionária Brasileira desembarcou em qual cidade portuária italiana?",
    "resposta": "Nápoles",
    "fonte": [
      "https://pt.wikipedia.org/wiki/For%C3%A7a_Expedicion%C3%A1ria_Brasileira",
      "https://en.wikipedia.org/wiki/Brazilian_Expeditionary_Force"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/For%C3%A7a_Expedicion%C3%A1ria_Brasileira",
        "situacao": "ok",
        "texto": "Força Expedicionária Brasileira (FEB), identificada pelo distintivo da cobra fumante, foi uma divisão militar do Exército e da Força Aérea Brasileira que lutou como parte das Forças Aliadas no Teatro Mediterrâneo da Segunda Guerra Mundial. Contava com cerca de 25,9 mil homens, incluindo uma divisão de infantaria completa, esquadrilha de ligação e esquadrão de caças.\n[…]\nPorém, por diversas razões de ordem política e operacional (internas e com o governo americano), somente quase dois anos depois em 2 de julho de 1944, teve início o transporte rumo ao front do primeiro contingente da Força Expedicionária Brasileira, sob o comando do general Zenóbio da Costa. O General João Batista Mascarenhas de Morais assumiria oficial e posteriormente o comando da FEB, quando esta já estivesse em sua formação completa.\n[…]\nA 1ª etapa da campanha da FEB na Itália iniciou-se em 15 de setembro de 1944; com seu primeiro contingente a chegar à Itália (o 6º regimento) atuando junto com o 371º regimento afro-americano e outras unidades americanas menores (principalmente as de apoio da 1ª divisão blindada), formando a Task Force 45, liberando da ocupação alemã o Vale do rio Serchio (ao norte da cidade de Lucca, datando desta época suas primeiras vitórias ainda em setembro, com as tomadas de Massarosa, Camaiore e Monte Prano), e a maior parte da região de Gallicano-Barga, onde sofreu seus primeiros reveses.\n[…]\nAntes da rendição das forças alemãs ser oficializada a 2 de maio de 1945, a 148ª divisão foi a única divisão alemã capturada integralmente, incluindo seu comando, por uma força aliada (no caso, a 1ª Divisão Brasileira) durante toda a campanha da Itália. Pois desde a invasão da Sicília em julho de 1943 até a ofensiva na primavera de 1945, todas as demais divisões alemãs, independente das perdas sofridas, conseguiram se retirar ao norte sem se renderem."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Expeditionary_Force",
        "situacao": "ok",
        "texto": "The Brazilian Expeditionary Force (Portuguese: Força Expedicionária Brasileira, FEB), nicknamed Cobras Fumantes (lit. 'the Smoking Snakes'), was a military division of the Brazilian Army and Air Force that fought as part of Allied forces in the Mediterranean Theatre of World War II. It numbered around 25,900 men, including a full infantry division, liaison flight, and fighter squadron.\n[…]\nThe 1st Fighter Aviation Group (1oGAVCA, 1st Fighter Squadron/1º Grupo de Aviação de Caça) was formed on December 18, 1943. Its commanding Officer was Ten.-Cel.-Av. (Aviation Lieutenant Colonel) Nero Moura. The Squadron had 350 men, including 48 pilots. It was divided into four flights: Red (\"A\"), Yellow (\"B\"), Blue (\"C\"), and Green (\"D\"). Unlike the FEB's Army component, the 1oGAVCA had personnel who were experienced Brazilian Air Force (Portuguese: Força Aérea Brasileira, or FAB) pilots.\n[…]\nIn contrast to the 1st Fight Squadron, which was an Air Force unit that operated in support of the army, the 1st \"Liaison & Observer Flight\"  (Portuguese acronym: E.L.O.) was directly under the command of the FEB. Formed in late July 1944, the 1st E.L.O. consisted of reservist officers, namely Air Force pilots and Army artillery observers, who flew together aboard Piper L-4H Cubs. This air unit accompanied the Brazilian division throughout its Italian campaign.\n[…]\nThe FEB was one of about 30 Allied military formations (20 divisions and 10 brigades) on the Italian Front at that time. Although it played an important part in the sectors where it operated, Brazil's role was largely tactical, and it never had a major impact on a strategic level. Furthermore, the Italian Front became secondary for both sides after the Normandy landings in June 1944 and the invasion of southern France that August.\n[…]\nMexican Expeditionary Air Force"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Força Expedicionária Brasileira",
      "descricao": "Força militar brasileira que lutou ao lado dos Aliados na campanha da Itália, entre 1944 e 1945."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Cerca de quantos militares a Força Expedicionária Brasileira enviou para lutar na Itália?",
    "resposta": "Cerca de 25 mil",
    "fonte": [
      "https://pt.wikipedia.org/wiki/For%C3%A7a_Expedicion%C3%A1ria_Brasileira",
      "https://en.wikipedia.org/wiki/Brazilian_Expeditionary_Force"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/For%C3%A7a_Expedicion%C3%A1ria_Brasileira",
        "situacao": "ok",
        "texto": "Força Expedicionária Brasileira (FEB), identificada pelo distintivo da cobra fumante, foi uma divisão militar do Exército e da Força Aérea Brasileira que lutou como parte das Forças Aliadas no Teatro Mediterrâneo da Segunda Guerra Mundial. Contava com cerca de 25,9 mil homens, incluindo uma divisão de infantaria completa, esquadrilha de ligação e esquadrão de caças.\n[…]\nA 1ª Divisão de Infantaria Expedicionária brasileira destacou-se das demais unidades empregadas pelas forças aliadas por ser, ao final de 1944, a única força miscigenada não oficialmente segregacionista entre as tropas aliadas combatentes na Europa, o que chegou causar estranheza às forças inimigas.\n[…]\nO Brasil perdeu nesta campanha, mortos em ação, quatrocentos e cinquenta e quatro homens do exército, e cinco pilotos da força aérea. A divisão brasileira ainda teve cerca de duas mil mortes decorrentes dos ferimentos de combate, e mais de doze mil baixas em campanha por mutilação ou outras diversas causas incapacitantes para a continuidade no campo de batalha.\n[…]\nTendo assim, somadas as substituições, turnos e rodízios, dos cerca de vinte e cinco mil homens enviados, mais de vinte e dois mil participado das ações. O que, incluso mortos e incapacitados, deu uma média de 1,7 homens usados para cada posto de combate, um grau de aproveitamento apreciável se comparado ao de outras divisões que estiveram ao mesmo tempo em campanha em condições semelhantes.\n[…]\nA participação da Marinha do Brasil na Segunda Guerra Mundial não esteve diretamente ligada à FEB e à Campanha Italiana, pois esteve em grande parte engajada na Batalha do Atlântico. Os ataques navais do Eixo causaram quase 1,6 mil mortes, incluindo 500 civis, 470 marinheiros mercantes e 570 marinheiros da Marinha; cerca de um em cada sete marinheiros brasileiros morreria na campanha.\n[…]\nMuseu da Força Expedicionária Brasileira"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Expeditionary_Force",
        "situacao": "ok",
        "texto": "The Brazilian Expeditionary Force (Portuguese: Força Expedicionária Brasileira, FEB), nicknamed Cobras Fumantes (lit. 'the Smoking Snakes'), was a military division of the Brazilian Army and Air Force that fought as part of Allied forces in the Mediterranean Theatre of World War II. It numbered around 25,900 men, including a full infantry division, liaison flight, and fighter squadron.\n[…]\nIn the end, the Brazilian government gathered a force of one Army Division of 25,000 men (replacements included), compared with an initial declared goal of a whole Army Corps of 100,000, to join the Allies in the Italian Campaign.\n[…]\nOn 25 April the Italian resistance movement started a general partisan insurrection at the same time as Brazilian troops arrived at Parma and the Americans at Modena and Genoa. The British 8th Army advanced towards Venice and Trieste.\n[…]\nOn this day Brazilians flew the most sorties of the war; consequently, Brazil commemorates April 22 as 'Brazilian Fighter Arm' Day. The 1st Brazilian Fighter Squadron accomplished 445 missions, with a total of 2,546 flights and 5,465 hours of flight on active service. It destroyed 1,304 motor-vehicles, 13 railway wagons, 8 armoured cars, 25 railway and highway bridges and 31 fuel tanks and munition depots.\n[…]\nThe FEB was one of about 30 Allied military formations (20 divisions and 10 brigades) on the Italian Front at that time. Although it played an important part in the sectors where it operated, Brazil's role was largely tactical, and it never had a major impact on a strategic level. Furthermore, the Italian Front became secondary for both sides after the Normandy landings in June 1944 and the invasion of southern France that August.\n[…]\nMexican Expeditionary Air Force"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Monumento Nacional aos Mortos da Segunda Guerra Mundial",
      "descricao": "Monumento no Rio de Janeiro, inaugurado em 1960, que guarda os restos mortais dos pracinhas brasileiros mortos na Itália."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os restos dos pracinhas mortos na Itália, antes enterrados em Pistoia, foram trazidos para um monumento em qual parque do Rio de Janeiro?",
    "resposta": "Aterro do Flamengo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Monumento_Nacional_aos_Mortos_da_Segunda_Guerra_Mundial",
      "https://pt.wikipedia.org/wiki/Parque_do_Flamengo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Monumento_Nacional_aos_Mortos_da_Segunda_Guerra_Mundial",
        "situacao": "ok",
        "texto": "O Monumento Nacional aos Mortos da Segunda Guerra Mundial, popularmente conhecido como Monumento aos Pracinhas, localiza-se no parque Eduardo Gomes, na cidade do Rio de Janeiro, no Brasil.\n[…]\nIdealizado pelo marechal João Baptista Mascarenhas de Moraes, comandante da Força Expedicionária Brasileira (FEB), para receber os restos mortais dos soldados brasileiros mortos na Itália, foi concebido pelos arquitetos Marcos Konder Netto e Hélio Ribas Marinho, vencedores de um concurso público nacional. O projeto estrutural coube ao engenheiro Joaquim Cardozo.\n[…]\nEm 20 de junho de 1960, partiu para a Itália uma comissão presidida pelo marechal Oswaldo Cordeiro de Farias (que integrara a FEB como Comandante da Artilharia Divisionária), com a incumbência de proceder à exumação dos 462  corpos sepultados no cemitério brasileiro na cidade de Pistoia, e prepará-los para o translado para o Brasil. A comissão chegou ao Rio de Janeiro em 15 de dezembro de 1960, trazendo os corpos em caixas individuais de zinco, encerradas em urnas de madeira.\n[…]\nO Monumento foi concebido em três planos, que são:\n[…]\num painel de azulejos, de autoria de Anísio Medeiros, homenageando os mortos (civis e militares) no mar, datado de 1959.\n[…]\nO monumento é palco de diversos eventos e solenidades:\n[…]\nHomenagem aos mortos das Marinhas de Guerra e Mercante, anualmente, no dia 21 de julho.\n[…]\nVigília da Saudade, anualmente, no dia 2 de novembro, em memória dos soldados mortos no cumprimento do dever. Obedece a um programa estabelecido pela Associação Nacional dos Veteranos da Força Expedicionária Brasileira (ANVFEB).\n[…]\nLista de monumentos nacionais do Brasil\n[…]\nMonumento Nacional aos Mortos da II Guerra Mundial"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_do_Flamengo",
        "situacao": "ok",
        "texto": "Aterro do Flamengo é um complexo de lazer da cidade do Rio de Janeiro, no Brasil. Foi construído sobre aterros sucessivos na baía de Guanabara.\n[…]\nEm sua configuração atual, o parque foi inaugurado em 17 de outubro de 1965, com 1 200 000 metros quadrados.\n[…]\nA zona do Aterro do Flamengo deve ser vista como parte integrante de um plano maior cujo objetivo era articular e melhorar o tráfego entre as zonas sul, centro e norte, juntamente com o desmonte do Morro Santo Antônio, a Avenida Perimetral e o Túnel Rebouças. Estas ideias fundamentais para o urbanismo do Rio de Janeiro vinham sendo maturadas desde o Plano Agache (1927-1930).\n[…]\nAnos depois, foi executada a parte principal do aterro. O entulho retirado do morro foi sendo despejado no mar, formando, desde o pontal do Calabouço até o Morro da Viúva, uma comprida restinga de pedras dispostas de modo a formar uma laguna e a faixa de areia da praia do Flamengo que, a seguir, foi aterrada. O plano original previa a construção de pistas expressas entre o Centro e a Zona Sul da cidade.\n[…]\nO projeto do Parque Brigadeiro Eduardo Gomes incorporou a Praça Cuauhtémoc e os entornos do Monumento aos Mortos da Segunda Guerra Mundial e do Museu de Arte Moderna do Rio de Janeiro; foi seguido no Trevo Edson Luís, na Marina da Glória (inaugurada em 1982) e na Praia de Botafogo.\n[…]\nO Aterro do Flamengo conta com uma ciclovia, situada entre a pista dos carros e a praia do Flamengo, que o corta de norte a sul, fazendo a ligação da Zona Sul através da Ciclovia Mané Garrincha (em direção a Botafogo / Copacabana) com o Centro da Cidade.\n[…]\nMedia relacionados com Aterro do Flamengo no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Adolf Hitler",
      "descricao": "Líder do Partido Nazista e ditador da Alemanha de 1933 a 1945."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Antes de se tornar ditador da Alemanha, Adolf Hitler nasceu em 1889 em qual país vizinho?",
    "resposta": "Áustria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Adolf_Hitler"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adolf_Hitler",
        "situacao": "ok",
        "texto": "Adolf Hitler (20 April 1889 – 30 April 1945) was an Austrian-born  German politician who was dictator of Germany in the Nazi era from 1933 until his suicide in 1945. He rose to power as the leader of the Nazi Party, becoming the chancellor of Germany in 1933 and then taking the title of Führer und Reichskanzler in 1934. Germany's invasion of Poland on 1 September 1939 under his leadership marked t\n[…]\nAdolf Hitler was born on 20 April 1889 in Braunau am Inn, a town in Austria-Hungary (present-day Austria), close to the border with Germany. He was the fourth of six children born to Alois Hitler and his third wife, Klara Pölzl. Three of Hitler's siblings (Gustav, Ida, and Otto) died in infancy. Also living in the household were Alois's children from his second marriage: Alois Jr. (born 1882) and Angela (born 1883).\n[…]\nIn response, Hitler formally renounced his Austrian citizenship on 7 April 1925.\n[…]\nIn the event of his death, the conference minutes, recorded as the Hossbach Memorandum, were to be regarded as his \"political testament\". He felt that a severe decline in living standards in Germany as a result of the economic crisis could only be stopped by military aggression aimed at seizing Austria and Czechoslovakia. Hitler urged quick action before Britain and France gained a permanent lead in the arms race.\n[…]\nOn 12 March 1938, Hitler announced the unification of Austria with Germany in the Anschluss. Hitler then turned his attention to the ethnic German population of the Sudetenland region of Czechoslovakia. On 28–29 March 1938, Hitler held a series of secret meetings in Berlin with Konrad Henlein of the Sudeten German Party, the largest of the ethnic German parties of the Sudetenland.\n[…]\nWorks by Adolf Hitler at Open Library\n[…]\nWorks by or about Adolf Hitler at the Internet Archive\n[…]\nNewspaper clippings about Adolf Hitler in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adolf_Hitler",
        "situacao": "ok",
        "texto": "Adolf Hitler (por vezes em português Adolfo Hitler; alemão: [ˈadɔlf ˈhɪtlɐ] (); Braunau am Inn, 20 de abril de 1889 – Berlim, 30 de abril de 1945) foi um político alemão que serviu como líder do Partido Nazista (Nationalsozialistische Deutsche Arbeiterpartei; NSDAP), Chanceler do Reich (de 1933 a 1945) e Führer (\"líder\") da Alemanha Nazista de 1934 até 1945. Como ditador do Reich Alemão, foi o pri\n[…]\nHitler nasceu na Áustria, então parte do Império Austro-Húngaro, e foi criado na cidade de Linz. Mudou-se para a Alemanha em 1913 e serviu no exército alemão durante a Primeira Guerra Mundial. Juntou-se ao Partido Alemão dos Trabalhadores, precursor do Partido Nazista, em 1919, e tornou-se seu líder em 1921. Em 1923, organizou um golpe de Estado em Munique para tentar tomar o poder. O fracassado golpe resultou na prisão de Hitler.\n[…]\nAdolf Hitler nasceu em 20 de abril de 1889 em Braunau am Inn, uma cidade da Áustria-Hungria (hoje em dia localizada na Áustria), próximo à fronteira do Império Alemão. Ele era um dos seis filhos nascidos de Alois Hitler e Klara Pölzl (1860–1907). Três dos seus irmãos — Gustav, Ida e Otto — morreram ainda na infância. Quando Hitler tinha apenas três anos, sua família se mudou para Passau, na Alemanha. Lá ele adquiriu um dialeto bávaro, que trouxe uma marca reconhecível a sua voz.\n[…]\nEle acreditava que a queda no padrão de vida na Alemanha como resultado de uma crise econômica poderia apenas ser parada por uma agressão militar para anexar a Áustria e ocupar a Tchecoslováquia. Hitler exigiu ações rápidas antes que a França e o Reino Unido passassem à frente na corrida armamentista.\n[…]\nEm 12 de março de 1938, Hitler anunciou a unificação da Áustria com a Alemanha Nazista (o Anschluss). A anexação austríaca foi rápida e sem percalços. Ele então virou sua atenção para a população etnicamente alemã na região dos Sudetos na Tchecoslováquia.\n[…]\nAdolf Hitler no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Hasteamento da bandeira em Iwo Jima",
      "descricao": "Fotografia de Joe Rosenthal, de fevereiro de 1945, que mostra seis fuzileiros americanos erguendo a bandeira dos Estados Unidos no monte Suribachi."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A célebre foto de seis fuzileiros americanos erguendo a bandeira dos Estados Unidos, em fevereiro de 1945, foi tirada em qual ilha japonesa?",
    "resposta": "Iwo Jima",
    "fonte": [
      "https://en.wikipedia.org/wiki/Raising_the_Flag_on_Iwo_Jima"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Raising_the_Flag_on_Iwo_Jima",
        "situacao": "ok",
        "texto": "Raising the Flag on Iwo Jima (Japanese: 硫黄島の星条旗, Hepburn: Iōjima no Seijōki) is a photograph of six  United States Marines raising the U.S. flag atop Mount Suribachi during the Battle of Iwo Jima in the final stages of the Pacific War. Taken by Joe Rosenthal of the Associated Press on February 23, 1945, the photograph was published in Sunday newspapers two days later and reprinted in thousands of \n[…]\nOn February 19, 1945, the United States invaded Iwo Jima as part of its island-hopping strategy to defeat Japan. Iwo Jima originally was not a target, but the relatively quick liberation of the Philippines left the Americans with a longer-than-expected lull prior to the planned invasion of Okinawa.\n[…]\n† Died in combat on Iwo Jima.\n[…]\nflag, and a Silver Star Medal for a heroic action in March while in command of D Company, 2/28 Marines on Iwo Jima.\n[…]\nThe photograph taken by Rosenthal was the second flag-raising on top of Mount Suribachi, on February 23, 1945.\n[…]\nThe Iwo Jima flag-raising has been depicted in other films, including 1949's Sands of Iwo Jima (in which the three surviving flag raisers make a cameo appearance at the end of the film) and 1961's The Outsider, a biography of Ira Hayes starring Tony Curtis.\n[…]\nIn 2021 the Taliban posted a series of photos after the announcement that the Americans were withdrawing from Afghanistan. One of the photos posted shows Taliban soldiers raising a flag which has a notable similarity to Raising the Flag on Iwo Jima, although it is uncertain if this was their intent or merely a coincidental similarity.\n[…]\nShadow of Suribachi: Raising the Flags on Iwo Jima\n[…]\nRaising a Flag over the Reichstag\n[…]\nRaising the Flag on the Three-Country Cairn\n[…]\nRaising the Flag at Ground Zero\n[…]\nRaising the Flag on Iwo Jima: The most parodied photo in history?\n[…]\nCaptain Dave Severance talks about the Battle of Iwo Jima and raising the flag Archived March 9, 2016, at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Raising_the_Flag_on_Iwo_Jima",
        "situacao": "ok",
        "texto": "Raising the Flag on Iwo Jima é uma fotografia histórica tirada em 23 de fevereiro de 1945 por Joe Rosenthal. Ela mostra cinco fuzileiros navais americanos e um paramédico da Marinha dos Estados Unidos fincando a bandeira dos Estados Unidos no topo do Monte Suribachi no Japão, indicando a sua conquista durante a batalha de Iwo Jima na Segunda Guerra Mundial.\n[…]\nno mesmo ano de sua publicação e veio a ser lembrada nos Estados Unidos como uma das mais significantes e reconhecidas imagens de guerra, e possivelmente a fotografia mais reproduzida de todos os tempos.\n[…]\nDos seis homens que aparecem na fotografia, três morreram durante a  batalha (Franklin Sousley, Harlon Block e Michael Strank) e três sobreviveram a ela (John Bradley, Rene Gagnon e Ira Hayes). Os que sobreviveram acabaram virando celebridades depois que foram identificados na foto. A imagem foi usada depois por Felix de Weldn para esculpir o USMC War Memorial, no Cemitério Nacional de Arlington, na Virgínia.\n[…]\nBandeira da vitória\n[…]\n«História da fincada da bandeira Iwo Jima» (em inglês)\n[…]\nChlosta, SSgt Matthew, U.S. Army (6 de julho de 2007). «JPAC investigation team returns from Iwo Jima (re: William Genaust)». Joint POW/MIA Accounting Command (JPAC). Arquivado do original em 5 de novembro de 2011  (em inglês)\n[…]\n«Capitão Dave Severance fala sobre a batalha de Iwo Jima e a fincada da bandeira» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Julgamentos de Nuremberg",
      "descricao": "Tribunais militares internacionais que julgaram os principais líderes nazistas a partir de novembro de 1945."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A partir de novembro de 1945, os principais líderes nazistas foram julgados por um tribunal internacional em qual cidade alemã?",
    "resposta": "Nuremberg",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nuremberg_trials"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nuremberg_trials",
        "situacao": "ok",
        "texto": "The Nuremberg trials were international criminal trials held by France, the Soviet Union, the United Kingdom, and the United States against leaders of defeated Nazi Germany for plotting and carrying out invasions of several countries across Europe and committing atrocities against their citizens in the Second World War.\n[…]\nThe form that retribution would take was left unresolved at the Yalta Conference in February 1945.\n[…]\nThe International Military Tribunal for the Far East (Tokyo Trial) borrowed many of its ideas from the IMT, including all four charges, and was intended by the Truman Administration to shore up the IMT's legal legacy. On 11 December 1946, the United Nations General Assembly unanimously passed a resolution affirming \"the principles of international law recognized by the Charter of the Nuremberg Tribunal and the judgment of the Tribunal\".\n[…]\nIn 1950, the International Law Commission drafted the Nuremberg principles to codify international criminal law, although the Cold War prevented the adoption of these principles until the 1990s. The 1948 Genocide Convention was much more restricted than Lemkin's original concept and its effectiveness was further limited by Cold War politics.\n[…]\nIn the 1990s, a revival of international criminal law included the establishment of ad hoc international criminal tribunals for Yugoslavia (ICTY) and Rwanda (ICTR), which were widely viewed as part of the legacy of the Nuremberg and Tokyo trials. A permanent International Criminal Court (ICC), proposed in 1953, was established in 2002.\n[…]\nThe IMT is one of the most well-studied trials in history, and it has also been the subject of an abundance of books and scholarly publications, along with motion pictures such as Judgment at Nuremberg (1961), The Memory of Justice (1976), Nuremberg (2000) and Nuremberg (2025)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Julgamentos_de_Nuremberga",
        "situacao": "ok",
        "texto": "Os Julgamentos de Nuremberga (português europeu) ou Nurembergue (português brasileiro) foram conduzidos pelos Aliados contra representantes da derrotada Alemanha Nazista por planejarem e realizarem invasões a outros países da Europa e cometerem atrocidades contra seus cidadãos durante a Segunda Guerra Mundial.\n[…]\nEm meados de 1945, França, União Soviética, Reino Unido e Estados Unidos concordaram em realizar um tribunal conjunto em Nuremberg, Baviera, na Alemanha ocupada pelos Estados Unidos, utilizando a Carta de Nuremberg como base legal. Entre 20 de novembro de 1945 e 1 de outubro de 1946, o Tribunal Militar Internacional (TMI) julgou vinte e dois dos principais líderes sobreviventes da Alemanha de Hitler nos âmbitos político, militar e econômico, além de seis organizações alemãs.\n[…]\nOficialmente chamado de The United States of America vs. Otto Ohlendorf, et al., realizado de 15 de setembro de 1947 a 10 de abril de 1948, na Sala 600 do Palácio da Justiça de Nuremberg, a mesma sala onde ocorreram os Julgamentos de Nuremberg dos principais criminosos de guerra perante o Tribunal Militar Internacional.\n[…]\nAo contrário dos Julgamentos de Nuremberg, o Julgamento dos Einsatzgruppen foi realizado perante um tribunal militar americano (Tribunal Militar de Nuremberg, TMN); não houve supervisão das Quatro Potências. Oficialmente, o caso foi intitulado \"Os Estados Unidos da América contra Otto Ohlendorf e outros\".\n[…]\nTodavia, em Nuremberg, os vencedores ditaram todas  as regras e todo o funcionamento do tribunal, mesmo em detrimento dos direitos fundamentais dos réus, como o princípio do juízo natural conhecidos dos ingleses desde a Magna Carta de 1215.\n[…]\n«Julgamentos de Nuremberga»\n[…]\n«Nuremberg Trials 1945-1949» (em inglês)\n[…]\n«Trial Watch: The Nuremberg Trials» (em inglês)\n[…]\n«Nuremberg Trials» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Jogos Olímpicos de Verão de 1940",
      "descricao": "Edição dos Jogos Olímpicos prevista para 1940, que nunca foi realizada por causa das guerras na Ásia e na Europa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os Jogos Olímpicos de 1940 foram entregues primeiro a qual cidade asiática, que desistiu por causa da guerra com a China e só os sediou em 1964?",
    "resposta": "Tóquio",
    "fonte": [
      "https://en.wikipedia.org/wiki/1940_Summer_Olympics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1940_Summer_Olympics",
        "situacao": "ok",
        "texto": "The 1940 Summer Olympics, officially known as the Games of the XII Olympiad, was a planned international multi-sport event scheduled to have been held from 21 September to 6 October 1940, in Tokyo City, Japan, and later rescheduled for 20 July to 4 August 1940, in Helsinki, Finland following the outbreak of the Second Sino-Japanese War in 1937.\n[…]\nGliding was due to be an Olympic sport in the 1940 Games after a demonstration at the Berlin Games in 1936. The sport has not been featured in any Games since, though the glider designed for it, the DFS Olympia Meise, was produced in large numbers after the war.\n[…]\nMeanwhile, Japan hosted the 1940 East Asian Games in Tokyo, with six participating nations. Helsinki eventually held the 1952 Summer Olympics, while Tokyo held the 1964 Summer Olympics and the 2020 Summer Olympics, although the latter event was postponed to 2021 due to the COVID-19 pandemic.\n[…]\nDuring August 1940, prisoners of war celebrated a \"special Olympics\" called the International Prisoner-of-War Olympic Games at Stalag XIII-A in Langwasser, near Nuremberg, Germany. An Olympic flag, 29 by 46 cm in size, was made of a Polish prisoner's shirt and, drawn in crayon, it featured the Olympic rings and banners for Belgium, France, Great Britain, Norway, Poland, and the Netherlands.\n[…]\nA feature film, Olimpiada '40, produced by the director Andrzej Kotkowski in 1980 tells the story of these games and of one of the prisoners of war, Teodor Niewiadomski.\n[…]\n1940 Summer Olympics\n[…]\n1940 Winter Olympics\n[…]\n1964 Summer Olympics\n[…]\nInternational Journal of the History of Sport, vol. 24, 2007, No. 8, Special Issue: The Missing Olympics: The 1940 Tokyo Games, Japan, Asia and the Olympic Movement"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1940",
        "situacao": "ok",
        "texto": "Os Jogos da XII Olimpíada da Era Moderna nunca foram realizadas, devido à Segunda Guerra Mundial. Os jogos seriam realizados em Tóquio, Japão. Com o início da Segunda Guerra Sino-Japonesa, em 1937, os jogos foram transferidos para Helsinki, Finlândia, onde foram cancelados completamente em 1939, após o início da guerra. Helsinki sediaria os jogos de verão de 1952, e Tóquio, os jogos de verão de 19\n[…]\nDurante os Jogos do Extremo Oriente de 1930 em Tóquio, os participantes indianos foram vistos arvorando a bandeira do seu movimento de independência, em vez da bandeira da Índia Britânica. Isso causou uma reclamação da Associação Olímpica Britânica. Em 1934, o Japão tentou convidar colônias européias para os Jogos do Extremo Oriente.\n[…]\nLista dos jogos olímpicos da era moderna",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Invasão da Polônia",
      "descricao": "Ataque da Alemanha nazista à Polônia em setembro de 1939, seguido pela invasão soviética, que deu início à Segunda Guerra Mundial na Europa."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Segunda Guerra Mundial começou com a invasão alemã da Polônia. Em que dia e mês de 1939?",
    "resposta": "1º de setembro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Invasion_of_Poland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Invasion_of_Poland",
        "situacao": "ok",
        "texto": "The invasion of Poland, also known as the September Campaign, Polish Campaign, and Polish Defensive War of 1939 (1 September – 6 October 1939), was a joint attack on the Republic of Poland by Nazi Germany, the Slovak Republic, and the Soviet Union, which marked the beginning of World War II.\n[…]\nOn 29 August, prompted by the British, Germany issued one last diplomatic offer, with Fall Weiss yet to be rescheduled. That evening, the German government responded in a communication that it aimed not only for the restoration of Danzig but also the Polish Corridor (which had not previously been part of Hitler's demands) in addition to the safeguarding of the German minority in Poland.\n[…]\nHitler demanded that Poland be conquered in six weeks, but German planners thought that it would require three months. They intended to exploit their long border fully with the great enveloping manoeuver of Fall Weiss. German units were to invade Poland from three directions:\n[…]\nAll three assaults were to converge on Warsaw, and the main Polish army was to be encircled and destroyed west of the Vistula. Fall Weiss was initiated on 1 September 1939 and was the first operation of Second World War in Europe.\n[…]\nHeadline story on BBC: Germany invades Poland 1 September 1939. [1]\n[…]\nPolish Armoured Units 1939 Archived 30 April 2008 at the Wayback Machine\n[…]\nNazi invasion of Poland in 1939: Images and Documents from the Harrison Forman collection\n[…]\n\"The Polish Campaign of September 1939 in Perspective\" Polish News, 24 September 2008 Archived 26 September 2011 at the Wayback Machine\n[…]\nInvasion of Poland in 1939 by German Army (1943). Film Bulletin n. 48 US Department of the Army, Signal Corps Photographic Center. Internet Archive.\n[…]\nSpecial Release – Europe At War! (1939). Universal Studios. Internet Archive."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Invas%C3%A3o_da_Pol%C3%B4nia",
        "situacao": "ok",
        "texto": "Invasão da Polônia (Campanha de Setembro, em polonês/polaco:  Kampania wrześniowa; Guerra Defensiva de 1939, em polonês/polaco:  Wojna obronna 1939 roku; Campanha da Polônia, em alemão:  Überfall auf Polen) marcou o início da Segunda Guerra Mundial.\n[…]\nA invasão alemã começou em 1 de setembro de 1939, sem declaração formal de guerra, uma semana após a assinatura do Pacto Molotov-Ribbentrop entre a Alemanha Nazista e a União Soviética, e um dia após o Soviete Supremo da União Soviética ter aprovado o pacto. Os soviéticos invadiram a Polônia em 17 de setembro. A campanha terminou em 6 de outubro com a Alemanha e a União Soviética dividindo e anexando toda a Polônia sob os termos do Tratado Fronteiriço Alemão-Soviético.\n[…]\nTodos os três ataques deveriam convergir para Varsóvia, e o principal Exército Polonês deveria ser cercado e destruído a oeste do Rio Vístula. Fall Weiss foi iniciado em 1 de setembro de 1939 e foi a primeira operação da Segunda Guerra Mundial na Europa.\n[…]\nAssim, o que não foi visto pela maioria dos políticos e generais em 1939 fica claro do ponto de vista histórico: A Campanha Polonesa de Setembro marcou o início de uma guerra pan-europeia, que combinada com a invasão japonesa da China em 1937 e a Guerra do Pacífico em 1941 para formar o conflito global conhecido como Segunda Guerra Mundial.\n[…]\nA invasão da Polônia levou o Reino Unido e a França a declarar guerra à Alemanha em 3 de setembro. No entanto, eles fizeram pouco para afetar o resultado da Campanha de Setembro. Nenhuma declaração de guerra foi emitida pelo Reino Unido e França contra a União Soviética. Essa falta de ajuda direta levou muitos poloneses a acreditar que haviam sido traídos por seus Aliados Ocidentais.\n[…]\n«70 anos do iníco da segunda guerra»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Libertação de Paris",
      "descricao": "Expulsão das tropas alemãs de Paris pela Resistência Francesa e pelas forças aliadas, em agosto de 1944."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de quatro anos de ocupação alemã, Paris foi libertada pelos Aliados e pela Resistência em que mês e ano?",
    "resposta": "Agosto de 1944",
    "fonte": [
      "https://en.wikipedia.org/wiki/Liberation_of_Paris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Liberation_of_Paris",
        "situacao": "ok",
        "texto": "The Liberation of Paris (French: Libération de Paris) was a battle that took place during World War II from 19 August 1944 until the German garrison surrendered the French capital on 25 August 1944. Paris had been occupied by Nazi Germany since the signing of the Armistice of 22 June 1940, after which the Wehrmacht occupied northern and western France.\n[…]\nOn 25 August 2004, two military parades reminiscent of the parades of 26 and 29 August 1944, one in commemoration of the 2nd Armored Division, the other of the US 4th Infantry Division, and featuring armoured vehicles from the era, were held on the 60th anniversary of the Liberation of Paris. Under the auspices of the Senate, a jazz concert and popular dancing took place in the Jardin du Luxembourg. In the same event, homage was paid to the Spanish contribution – the first time in 60 years.\n[…]\nLa Libération de Paris, black-and-white film (1944), short historical documentary film shot in secret by small units of the French Resistance during the battle itself.\n[…]\nThe Liberation of Paris, colour film (1944) by George Stevens showing the final city shootouts, de Gaulle's triumphal arrival, arrested Germans in the streets of the city and victory parade.\n[…]\nCobb, Matthew (2014). Eleven days in August: the liberation of Paris in 1944.\n[…]\nKeegan, John (2011). Six Armies in Normandy: From D-Day to the Liberation of Paris, June 6 - Aug. 5, 1944. Random House.\n[…]\nZaloga, Steven J. (2011). Liberation of Paris 1944: Patton's race for the Seine. Bloomsbury.\n[…]\nLiberation of Paris – Official French website (in English)\n[…]\nBattle for Paris: August 16–26, Documentary shot by the French Resistance, 1 September 1944\n[…]\nPrimout, Gilles. \"19–25 août 1944... La Libération de Paris \" Archived 3 July 2013 at the Wayback Machine (in French)  – provides archival documents and a detailed timeline"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Libera%C3%A7%C3%A3o_de_Paris",
        "situacao": "ok",
        "texto": "A liberação (português brasileiro) ou libertação (português europeu) de Paris (também conhecida como Batalha por Paris) começou no dia 19 de agosto e encerrou com a rendição da última guarnição presente na cidade, em 25 de agosto de 1944. A capital da França era administrada pela Alemanha Nazista desde a assinatura do armistício de 22 de junho de 1940.\n[…]\nA libertação começou quando as Forças Francesas do Interior – a estrutura militar da Resistência Francesa – encenaram um levante contra a guarnição alemã com a aproximação do Terceiro Exército dos Estados Unidos, liderado pelo general George S. Patton. Na noite de 24 de agosto, elementos da 2ª Divisão Blindada Francesa do general Philippe Leclerc entraram em Paris e chegaram ao Hôtel de Ville pouco antes da meia-noite.\n[…]\nNa manhã seguinte, 25 de agosto, a maior parte da 2ª Divisão Blindada e da 4ª Divisão de Infantaria dos Estados Unidos e outras unidades aliadas entraram na cidade. Antes dos aliados alcançarem a cidade, Dietrich von Choltitz, comandante da guarnição alemã e governador militar de Paris, recebeu ordens de Adolf Hitler para destruir os principais pontos históricos da cidade, incluindo a Torre Eiffel.\n[…]\nAs previsões da Operação Overlord visavam principalmente a área do Ruhr, onde a indústria pesada alemã estava concentrada, com a liberação de Paris planejada para o final de outubro. A administração planejada pelos Chefes de Estado-Maior americanos foi aprovada pelo presidente dos Estados Unidos, Franklin Roosevelt, mas sofreu oposição de Eisenhower.\n[…]\nEle ameaçou destacar a 2ª Divisão Blindada Francesa (2e DB) e ordenar que atacasse sozinha as forças alemãs em Paris e contornasse a cadeia de comando do SHAEF se Eisenhower atrasasse indevidamente a aprovação.\n[…]\nLa Libération de Paris (1944)\n[…]\nIs Paris Burning? (1966)\n[…]\nDietrich von Choltitz — Governador de Paris",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Dia da Vitória na Europa",
      "descricao": "Data em que os Aliados celebraram a rendição incondicional da Alemanha nazista, em 1945."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os Aliados ocidentais comemoram a rendição da Alemanha nazista como o Dia da Vitória na Europa. Em que data de 1945?",
    "resposta": "8 de maio",
    "distratores": [
      "6 de junho",
      "2 de setembro",
      "11 de novembro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Victory_in_Europe_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Victory_in_Europe_Day",
        "situacao": "ok",
        "texto": "Victory in Europe Day is the day celebrating the formal acceptance by the Allies of World War II of Nazi Germany's unconditional surrender of its armed forces on Tuesday, 8 May 1945; it marked the official cessation of all German military operations.\n[…]\nA slightly modified document, considered the definitive German Instrument of Surrender, was signed on 8 May 1945 in Karlshorst, Berlin at 22:43 local time.\n[…]\nThe German High Command will at once issue orders to all German military, naval and air authorities and to all forces under German control to cease active operations at 23.01 hours Central European time on 8 May 1945...\n[…]\nFrance celebrates VE Day on 8 May, known as 8 mai 1945, being a national and public holiday.\n[…]\nAs of 3 September 2018, at least 523 street names \"Rue (du) 8-Mai-1945\" are recorded in the 18 regions, as well as in the 36,700 French communes (equivalent of civil parishes in England).\n[…]\n8 May 1945 was also the beginning of the Sétif and Guelma massacre in French Algeria, and it remains a point of contention in Algeria and France.\n[…]\nOn 8 May 1945, a meeting of the Council of Ministers was held, debating whether to establish the holiday on 8 May (proposed by Marshal Michał Rola-Żymierski) or 10 May (proposed by the government). Finally, the \"National Day of Victory and Freedom\" was established on 9 May by decree.\n[…]\nThe instrument of surrender signed 7 May 1945 stipulated that all hostilities must cease at 23:01 (CET), 8 May 1945. Since that point in time would be on 9 May in local time in the Soviet Union, most Soviet states including Russia celebrated Victory Day on 9 May.\n[…]\nZero hour (1945)\n[…]\nWWII: VE Day, May 8, 1945 — slideshow by Life magazine (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_da_Vit%C3%B3ria_na_Europa",
        "situacao": "ok",
        "texto": "Dia da Vitória na Europa (em inglês:  V-E Day) foi o dia 8 de maio de 1945, data formal da derrota da Alemanha Nazista em favor dos Aliados na Segunda Guerra Mundial.\n[…]\nA data foi motivo de grandes celebrações, especialmente em Londres, onde mais de um milhão de pessoas festejaram o fim da guerra na Europa, embora os racionamentos de comida e vestuário continuassem por mais uma série de anos. Em Londres, particularmente em Trafalgar Square e no Palácio de Buckingham, juntaram-se grandes massas de população, surgindo à varanda do palácio o Rei Jorge VI e a Rainha consorte Elisabete, acompanhados pelo primeiro-ministro, Winston Churchill, para saudar a população.\n[…]\nNos Estados Unidos, o Presidente Harry Truman, que celebrava 61 anos nesse mesmo dia, dedicou a vitória ao seu antecessor, Franklin D. Roosevelt, que morrera havia cerca de um mês, no dia 12 de abril.\n[…]\nOs Aliados haviam acordado que o dia 9 de maio de 1945 seria o da celebração, todavia os jornalistas ocidentais lançaram a notícia da rendição alemã mais cedo do que era previsto, precipitando as celebrações. A União Soviética manteve as celebrações para a data combinada, sendo por isso que o fim da Segunda Guerra Mundial, conhecida como a Grande Guerra Patriótica na Rússia e outras zonas da antiga URSS, é celebrado no dia 9 de maio.\n[…]\nA vitória aliada sobre o Japão é celebrada no Dia V-J, 15 de agosto de 1945.\n[…]\nMedia relacionados com Dia da Vitória na Europa no Wikimedia Commons\n[…]\nWWII: VE Day, May 8, 1945 – por Life magazine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Batalha da Inglaterra",
      "descricao": "Campanha aérea em que a Força Aérea Real britânica resistiu aos ataques da Luftwaffe alemã sobre o Reino Unido."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Força Aérea Real britânica resistiu aos ataques da aviação alemã na chamada Batalha da Inglaterra. Em que ano ela foi travada?",
    "resposta": "1940",
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Britain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Britain",
        "situacao": "ok",
        "texto": "The Battle of Britain (German: Luftschlacht um England, lit. 'air battle for England') was a military campaign of the Second World War, in which the Royal Air Force (RAF) and the Fleet Air Arm (FAA) of the Royal Navy defended the United Kingdom against large-scale attacks by Nazi Germany's air force, the Luftwaffe. It was the first major military campaign fought entirely by air forces.\n[…]\nList of Battle of Britain airfields – Airfields used by the Royal Air Force in 1940\n[…]\nBishop, Edward (1968). Their Finest Hour: The Story of the Battle of Britain, 1940. Ballantine] Books.\n[…]\nBishop, Patrick (2010). Battle of Britain : a day-by-day chronicle, 10 July 1940 to 31 October 1940. London: Quercus. ISBN 978-1-84916-224-1.\n[…]\nCollier, Richard. Eagle Day: The Battle of Britain, 6 August – 15 September 1940. London: Pan Books, 1968.\n[…]\nRobinson, Derek, Invasion, 1940: Did the Battle of Britain Alone Stop Hitler? New York: Carroll & Graf, 2005. ISBN 0-7867-1618-5.\n[…]\nMason, Francis K. Battle Over Britain: A History of the German Air Assaults on Great Britain, 1917–18 and July–December 1940, and the Development of Air Defences Between the World Wars. New York: Doubleday, 1969. ISBN 978-0-901928-00-9.\n[…]\nBishop, Patrick. Fighter Boys: The Battle of Britain, 1940. New York: Viking, 2003 (hardcover, ISBN 0-670-03230-1); Penguin Books, 2004. ISBN 0-14-200466-9. As Fighter Boys: Saving Britain 1940. London: Harper Perennial, 2004. ISBN 0-00-653204-7.\n[…]\nForeman, John (1988), Battle of Britain: The Forgotten Months, November And December 1940, New Malden: Air Research Publications, ISBN 1-871187-02-8\n[…]\nJames, T.C.G. Growth of Fighter Command, 1936–1940 (Air Defence of Great Britain; vol. 1). London; New York: Frank Cass Publishers, 2000. ISBN 0-7146-5118-4.\n[…]\nRay, John Philip (2003). The Battle of Britain: Dowding and the First Victory, 1940. Cassell. ISBN 978-0304356775.\n[…]\nKent Battle of Britain Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_da_Gr%C3%A3-Bretanha",
        "situacao": "ok",
        "texto": "A Batalha da Grã-Bretanha (em alemão: Luftschlacht um England, lit. 'batalha aérea pela Inglaterra') foi uma campanha militar da Segunda Guerra Mundial, na qual a Força Aérea Real Britânica (RAF) e a Aviação Naval Britânica (FAA) da Marinha Real Britânica defenderam o Reino Unido contra ataques em larga escala da força aérea da Alemanha Nazista, a Luftwaffe. Foi a primeira grande campanha militar \n[…]\nCerca de 20% dos pilotos que participaram da batalha eram de países não-britânicos. A lista de honra da Força Aérea Real Britânica (RAF) para a Batalha da Grã-Bretanha reconhece 595 pilotos não-britânicos (de um total de 2936) como tendo realizado pelo menos uma missão operacional autorizada com uma unidade elegível da RAF ou da Aviação Naval Britânica (FAA) entre 10 de julho e 31 de outubro de 1940.\n[…]\nA pedido do ditador italiano Benito Mussolini, um elemento da Força Aérea Real Italiana (Regia Aeronautica), chamado Corpo Aereo Italiano (CAI), participou das fases finais da Batalha da Grã-Bretanha. Sua primeira ação ocorreu em 24 de outubro de 1940, quando uma força de bombardeiros médios Fiat BR.20 atacou o porto de Harwich. O CAI obteve sucesso limitado durante este e outros ataques subsequentes.\n[…]\nNesse dia, em 1940, a Luftwaffe lançou o seu maior ataque aéreo até então, forçando o envolvimento de toda a Força Aérea Real Britânica (RAF) na defesa de Londres e do Sudeste do Reino Unido, o que resultou numa vitória britânica decisiva que se revelou um ponto de viragem a favor da Reino Unido. Na Commonwealth, o Dia da Batalha da Grã-Bretanha é geralmente celebrado no terceiro domingo de setembro e até mesmo na segunda quinta-feira de setembro em algumas áreas das Ilhas do Canal da Mancha.\n[…]\nLista de aeródromos da Batalha da Grã-Bretanha – Aeródromos usados ​​pela Força Aérea Real Britânica (RAF) em 1940\n[…]\nOperação Lucid – Plano britânico de navios incendiários anti-invasão de 1940",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Anschluss",
      "descricao": "Anexação da Áustria pela Alemanha nazista, em março de 1938."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Pouco antes da guerra, a Alemanha nazista anexou a Áustria no episódio conhecido como Anschluss. Em que ano?",
    "resposta": "1938",
    "fonte": [
      "https://en.wikipedia.org/wiki/Anschluss"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anschluss",
        "situacao": "ok",
        "texto": "The Anschluss (German: [ˈʔanʃlʊs] , or Anschluß, lit. 'joining' or 'connection'), also known as the Anschluß Österreichs (, English: Annexation of Austria), was the annexation of the Federal State of Austria into Nazi Germany on 12 March 1938.\n[…]\nThe word Anschluss is properly translated as \"joinder\", \"connection\", \"unification\", or \"political union\". In contrast, the German word Annektierung (military annexation) was not used, and is not commonly used now, to describe the union of Austria and Germany in 1938. The word Anschluss had been widespread before 1938 describing an incorporation of Austria into Germany.\n[…]\nCalling the incorporation of Austria into Germany an \"Anschluss,\" that is a \"unification\" or \"joinder\", was also part of the propaganda used in 1938 by Nazi Germany to create the impression that the union was not coerced. Hitler described the incorporation of Austria as a Heimkehr, a return to its original home. The word Anschluss has endured since 1938.\n[…]\nPrior to annexing Austria in 1938, Nazi Germany had remilitarized the Rhineland, and the Saar region was returned to Germany after 15 years of occupation through a plebiscite. After the Anschluss, Hitler targeted Czechoslovakia, provoking an international crisis which led to the Munich Agreement in September 1938, giving Nazi Germany control of the industrial Sudetenland, which had a predominantly ethnic German population.\n[…]\nThe occurrence of the Sudeten crisis in early 1938 led to the autumn Munich Agreement after which Nazi Germany occupied the Sudetenland. These events taken as a whole can be seen as a mimeograph of the Anschluss page in Hitler's playbook.\n[…]\nTime magazine coverage of the events of the Anschluss\n[…]\nMap of Europe at time of Anschluss at omniatlas.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anschluss",
        "situacao": "ok",
        "texto": "O Anschluss (alemão: [ˈʔanʃlʊs] (), ou Anschluß,; literalmente, \"junção\" ou \"conexão\"), também conhecido como Anschluß Österreichs (, \"anexação da Áustria\"), foi a anexação do Estado Federal da Áustria pela Alemanha Nazista em 12 de março de 1938.\n[…]\nEm 1938, a anexação da Áustria já provocava pouco descontentamento italiano, dada a preocupação da Itália com a Guerra Civil Espanhola e sua relativa reconciliação com a Alemanha, sobretudo com o ministro das Relações Exteriores pró-alemão, conde Galeazzo Ciano, cuja nomeação em 1936 foi descrita como o \"golpe de misericórdia na Áustria independente\".\n[…]\nChamar a incorporação da Áustria à Alemanha de Anschluss, isto é, de \"unificação\" ou \"junção\", também fez parte da propaganda usada pela Alemanha Nazista em 1938 para criar a impressão de que a união não havia sido imposta. Hitler descreveu a incorporação da Áustria como uma Heimkehr, um retorno ao lar original. A palavra Anschluss permaneceu em uso desde 1938.\n[…]\nAntes de anexar a Áustria em 1938, a Alemanha Nazista havia remilitarizado a Renânia, e a região do Sarre fora devolvida à Alemanha após quinze anos de ocupação por meio de um plebiscito. Após o Anschluss, Hitler voltou-se contra a Tchecoslováquia, provocando uma crise internacional que levou ao Acordo de Munique, em setembro de 1938, pelo qual a Alemanha Nazista obteve o controle da industrializada Região dos Sudetas, de população majoritariamente alemã.\n[…]\nÁreas anexadas pela Alemanha Nazista\n[…]\nRelações entre Alemanha e Áustria\n[…]\nÁustria Nazista\n[…]\nJogo da Vergonha, partida de futebol da Copa do Mundo FIFA de 1982 entre Alemanha Ocidental e Áustria, acusada de ter resultado combinado e posteriormente apelidada por torcedores de \"Anschluss\", em referência à anexação de 1938.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Batalha de Stalingrado",
      "descricao": "Batalha travada entre 1942 e 1943 na cidade soviética de Stalingrado, que terminou com a rendição do Sexto Exército alemão."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Cercado pelos soviéticos, o Sexto Exército alemão se rendeu em Stalingrado no inverno de qual ano?",
    "resposta": "1943",
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Stalingrad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Stalingrad",
        "situacao": "ok",
        "texto": "The Battle of Stalingrad was a major battle on the Eastern Front of World War II in which Nazi Germany and its Axis allies fought the Soviet Union for control of the city of Stalingrad (now Volgograd) in southern Russia. Marked by intense close-quarters combat and heavy civilian losses during aerial bombardment, the battle is considered the largest and deadliest urban battle in military history an\n[…]\nThe German defeat at Stalingrad, together with the Allied victories at the Second Battle of El Alamein in North Africa and the Guadalcanal campaign in the Pacific, dramatically altered the perception of reality of the balance of forces in the war. On 2 February 1943, American journalist Barnet Nover wrote in The Washington Post: \"Stalingrad's role in this war was that of the Battles of the Marne, Verdun and the Second Marne of the last war rolled into one\".\n[…]\nThe news of the battle echoed round the world, with many people now believing that Hitler's defeat was inevitable. The Turkish Consul in Moscow predicted, \"the lands which the Germans have destined for their living space will become their dying space\". Britain's conservative The Daily Telegraph proclaimed that the victory had saved European civilisation. The country celebrated \"Red Army Day\" on 23 February 1943. A ceremonial Sword of Stalingrad was forged to the order of King George VI.\n[…]\nAfter being put on public display in Britain, this was presented to Stalin by Winston Churchill at the Tehran Conference later in 1943. Soviet propaganda spared no effort and wasted no time in capitalising on the triumph, impressing a global audience. The prestige of Stalin, the Soviet Union, and the worldwide Communist movement was immense, and their political position greatly enhanced.\n[…]\nH-Museum: Stalingrad/Volgograd 1943–2003. Memory Archived 27 December 2010 at the Wayback Machine\n[…]\nStalingrad Battle Data documentary base"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_Stalingrado",
        "situacao": "ok",
        "texto": "A Batalha de Stalingrado (português brasileiro) ou Batalha de Estalinegrado (português europeu) foi um grande combate travado entre a Wehrmacht (o exército da Alemanha Nazista) e seus aliados do Eixo contra as tropas da União Soviética pela posse da cidade de Stalingrado (atual Volgogrado), às margens do rio Volga, entre 23 de agosto de 1942 e 2 de fevereiro de 1943, durante a Segunda Guerra Mundi\n[…]\nO general Friedrich Paulus pediu autorização para tentar furar o cerco e abandonar suas posições indefensáveis, mas Adolf Hitler desautorizou qualquer retirada e ordenou que o exército cercado fosse reabastecido pelo ar enquanto uma tropa era preparada para resgatar o 6º exército. Combates intensos se seguiram pelos próximos dois meses. No começo de 1943, as forças do Eixo em Stalingrado estavam exaustas e quase sem munição e comida.\n[…]\nAdolf Hitler promoveu Friedrich Paulus a marechal-de-campo em 30 de janeiro de 1943, o dia do décimo aniversário da sua ascensão ao poder na Alemanha. Como jamais um marechal alemão havia sido feito prisioneiro de guerra, Hitler supôs que com a promoção Von Paulus fosse lutar até a morte ou se suicidar, mas quando as forças soviéticas na cidade se aproximaram de seu quartel-general, num grande departamento de lojas, no dia seguinte, ele se rendeu.\n[…]\nDe acordo com o documentário alemão Stalingrad, cerca de 11 mil alemães e soldados do Eixo recusaram a rendição oficial, achando que lutar até a morte seria melhor que uma morte lenta no campos de concentração soviéticos. Estas forças continuaram a lutar em pequenas unidades até o começo de março de 1943, escondidos em porões e sótãos, com seu número diminuindo enquanto as tropas soviéticas iam fazendo a limpeza da cidade.\n[…]\n«Estado de Volgograd, museu - Batalha de Stalingrado» , site oficial (em Russo, Inglês, Alemão).\n[…]\nBombardeio de Stalingrado\n[…]\n«Museu Russo da Batalha de Stalingrado» (em alemão e inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Ataque a Pearl Harbor",
      "descricao": "Ataque aéreo surpresa do Japão à base naval americana de Pearl Harbor, no Havaí, que levou os Estados Unidos a entrar na guerra."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O ataque japonês a Pearl Harbor, que levou os Estados Unidos a entrar na guerra, aconteceu em dezembro de qual ano?",
    "resposta": "1941",
    "fonte": [
      "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor",
        "situacao": "ok",
        "texto": "The Empire of Japan launched a surprise military attack on the US Pacific Fleet at its naval base at Pearl Harbor in Oahu, Hawaii, on December 7, 1941. At the time, the US was a neutral country in World War II. The air raid on Pearl Harbor, which was launched from aircraft carriers, prompted the US to declare war on Japan the next day. The Japanese military leadership referred to the attack as the\n[…]\nThe attack was a shock to all the Allies in the Pacific Theater. Further losses compounded the alarming setback. Japan began the Philippines campaign (1941–1942) hours later (because of the time difference, it was December 8 in the Philippines). Only three days after the attack on Pearl Harbor, Prince of Wales and Repulse were sunk off Malaya. Churchill recollected \"In all the war I never received a more direct shock. As I turned and twisted in bed the full horror of the news sank in upon me.\n[…]\nBefore the Pearl Harbor attack, Japanese intelligence officer Kinoaki Matsuo and Japanese Commander Minuro Genda were both in favor of invading Hawaii, believing that such a move was necessary for forcing the US to the negotiating table and winning the war. However, in the wake of discussions following the war games drilling for the Pearl Harbor attack on September 5–17, 1941, Admiral Isoroku Yamamoto ultimately decided against attempting an invasion of Hawaii.\n[…]\n7 December 1941, The Air Force Story on ibiblio.org\n[…]\nLTC Jeffrey J. Gudmens; COL Timothy R. Reese (2009). Staff Ride Handbook for the Attack on Pearl Harbor, 7 December 1941: A Study of Defending America (PDF) (Report). Combat Studies Institute.\n[…]\nVideo of first Newsreel from December 23, 1941 attack on Pearl Harbor from British-Pathe\n[…]\nHistoric footage of Pearl Harbor during and immediately following attack on December 7, 1941 on CriticalPast\n[…]\nUS Navy Report of Japanese Raid on Pearl Harbor from World War II Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ataque_a_Pearl_Harbor",
        "situacao": "ok",
        "texto": "O Ataque a Pearl Harbor foi um ataque militar surpresa do Serviço Aéreo Imperial da Marinha Japonesa contra os Estados Unidos (um país neutro na época) na base naval de Pearl Harbor, em Honolulu, no Território do Havaí, pouco antes das 08h de 7 de dezembro de 1941, um domingo. O ataque levou à entrada formal dos Estados Unidos na Segunda Guerra Mundial no dia seguinte. A liderança militar japonesa\n[…]\nNo final de 1941, muitos observadores acreditavam que as hostilidades entre os Estados Unidos e o Japão eram iminentes. Uma pesquisa da Gallup pouco antes do ataque a Pearl Harbor descobriu que 52% dos americanos esperavam uma guerra com o Japão, 27% não e 21% não tinham opinião.\n[…]\nEm 26 de novembro de 1941, uma força-tarefa japonesa (a Força de Ataque) de seis porta-aviões, Akagi, Kaga, Sōryū, Hiryū, Shōkaku e Zuikaku, partiram da Baía Hittokapu na Ilha Kasatka (atual Iterup) nas Ilhas Curilas, a caminho para uma posição a noroeste do Havaí, com a intenção de lançar seus 408 aviões para atacar Pearl Harbor: 360 aviões para as duas ondas de ataque e 48 aviões para Patrulha Aérea de Combate, incluindo 9 caças da primeira onda.\n[…]\nA sobrevivência das estaleiros de reparos e depósitos de combustível permitiu a Pearl Harbor manter apoio logístico às operações da Marinha dos Estados Unidos, como o Ataque Doolittle e as batalhas do Mar de Coral e Midway.\n[…]\nVários escritores, incluindo o veterano e jornalista da Segunda Guerra Mundial Robert Stinnett, autor de Day of Deceit, e o ex-contra-almirante dos Estados Unidos Robert Alfred Theobald, autor de The Final Secret of Pearl Harbor: The Washington Background of the Pearl Harbor Attack, argumentaram que vários partidos do alto escalão dos governos dos Estados Unidos e do Reino Unido sabiam do ataque com antecedência e podem até deixá-lo acontecer ou encorajá-lo a forçar os Estados Unidos a entrar em guerra pela chamada \"porta dos fundos\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Brasil na Segunda Guerra Mundial",
      "descricao": "Participação do Brasil no conflito, desde a declaração de guerra ao Eixo em 1942 até o envio de tropas à Itália."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Brasil declarou guerra à Alemanha e à Itália em 1942. Em que ano declarou guerra também ao Japão?",
    "resposta": "1945",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazil_in_World_War_II",
      "https://pt.wikipedia.org/wiki/Brasil_na_Segunda_Guerra_Mundial"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazil_in_World_War_II",
        "situacao": "ok",
        "texto": "Brazil officially entered World War II on August 22, 1942, when it declared war against the Axis powers, including Germany and Italy. On February 8, 1943, Brazil formally joined the Allies upon signing the Declaration by United Nations. Although considered a secondary Allied power, Brazil was the largest contributor from South America,\n[…]\nBetween September 1944 and May 1945, Brazil deployed 25,700 troops to the Italian front. In the conflict, Brazil lost 1,889 soldiers and sailors, 31 merchant ships, three warships, and 22 fighter aircraft. Brazil's participation in the war enhanced its global prestige and marked its emergence as a significant international power.\n[…]\nWith the stabilization of the Italian front and the diminishing German submarine threat by late 1943, the US bases in Brazil were gradually deactivated in 1944 and 1945. However, the US maintained a presence on Fernando de Noronha until 1960.\n[…]\nOperations began on October 31, 1944, at the Tarquinia airfield and later relocated to Pisa, closer to action, closer to the front lines. There, the group operated under the 350th Fighter Group of the United States Army Air Forces (USAAF) and was designated \"Jambock\". On February 10, 1945, a squadron from the 1st G.Av.Ca. targeted a large concentration of trucks, destroying 80 vehicles and three buildings. On February 20, the group assisted the FEB in capturing Monte Castello.\n[…]\nBonalume Neto, Ricardo (1995). A Nossa Segunda Guerra: Os brasileiros em combate [Our Second War: Brazilians in combat] (in Portuguese). Rio de Janeiro: Expressão e Cultura.\n[…]\nMonteiro, Marcelo (2012). U-507 - O submarino que afundou o Brasil na Segunda Guerra Mundial [U-507 - The submarine that sank Brazil in World War II] (in Portuguese). Salto: Schoba."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brasil_na_Segunda_Guerra_Mundial",
        "situacao": "ok",
        "texto": "O Brasil, embora, na época, estivesse sendo comandado por um regime ditatorial simpático ao modelo fascista (o Estado Novo getulista) dos Países do Eixo, acabou participando da Segunda Guerra Mundial (1939-1945) junto aos adversários destes, os Países Aliados.\n[…]\nAlém do Vital de Oliveira, a Marinha do Brasil perderia, por outros motivos, mais dois navios militares na Segunda Guerra Mundial: A corveta Camaquã, virada pelo mar grosso, em 21 de julho de 1944, quando morreram 23 tripulantes; e o cruzador Bahia, que explodiu acidentalmente e afundou, no dia 4 de julho de 1945, matando 333 homens. Dentre todos, o Cabedelo e o Shangri-lá foram os dois casos em que não houve sobreviventes.\n[…]\nApesar de meses dos torpedeamento de navios mercantes brasileiros, somente após o povo ir as ruas exigir a declaração de guerra à Alemanha nazista e à Itália fascista o Governo Brasileiro, por meio do decreto Nº 10.358, de 31 de agosto de 1942, reconhece o estado de guerra entre o Brasil e as potências do Eixo em agosto de 1942.\n[…]\nAssim, embora mais vigorosa que a participação na Primeira Guerra Mundial, considerando o jogo político e diplomático travado entre americanos e alemães pelo apoio brasileiro e os números da real contribuição tática e estratégica que o país proporcionou comparados aos de outros países aliados (a FEB, por exemplo, era apenas uma entre 20 divisões aliadas na Itália, tendo atuado num setor, embora relativamente importante, secundário na frente italiana, num momento em que esta mesma frente se tinha tornado de menor importância para ambos os lados); a modesta participação brasileira na Segunda Guerra pode no geral ser equiparada à do Japão na Primeira Guerra Mundial.\n[…]\né enviado ao norte da Itália.\n[…]\nNa II Guerra Mundial - Exército Brasileiro"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Sangue, labuta, lágrimas e suor",
      "descricao": "Discurso feito por Winston Churchill à Câmara dos Comuns em 13 de maio de 1940, logo após assumir como primeiro-ministro."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em maio de 1940, que político britânico, recém-empossado, disse ao Parlamento que nada tinha a oferecer senão sangue, trabalho, lágrimas e suor?",
    "resposta": "Winston Churchill",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blood,_toil,_tears_and_sweat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blood,_toil,_tears_and_sweat",
        "situacao": "ok",
        "texto": "\"Blood, toil, tears and sweat\" was a phrase made famous in a speech given by Winston Churchill to the House of Commons of the Parliament of the United Kingdom on 13 May 1940; the speech itself is sometimes known by that name.\n[…]\nChurchill had used similar phrases earlier, such as \"Their sweat, their tears, their blood\" in 1931, and \"new structures of national life erected upon blood, sweat, and tears\" in 1939.\n[…]\nChurchill's sentence, \"I have nothing to offer but blood, toil, tears and sweat\", has been called a paraphrase of one uttered on 2 July 1849 by Giuseppe Garibaldi when rallying his revolutionary forces in Rome: \"I offer hunger, thirst, forced marches, battle, and death.\"  As a young man, Churchill had considered writing a biography of Garibaldi.\n[…]\nTheodore Roosevelt had uttered a phrase similar to Churchill's in an address to the United States Naval War College on 2 June 1897, following his appointment as federal Assistant Secretary of the Navy: \"Every man among us is more fit to meet the duties and responsibilities of citizenship because of the perils over which, in the past, the nation has triumphed; because of the blood and sweat and tears, the labor and the anguish, through which, in the days that have gone, our forefathers moved on to triumph.\" Churchill's line has been called a \"direct quotation\" from Roosevelt's speech.\n[…]\nOn 26 April 2013, the Bank of England announced that beneath a portrait of Churchill the phrase \"I have nothing to offer but blood, toil, tears and sweat\" was to adorn the new 5-pound note. It was issued in September 2016.\n[…]\nThe Churchill Centre: Blood, Toil, Tears and Sweat Archived 19 May 2021 at the Wayback Machine, with a short introduction"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sangue%2C_labuta%2C_l%C3%A1grimas_e_suor",
        "situacao": "ok",
        "texto": "A frase \"blood, toil, tears and sweat\" (pt:“sangue, labuta, lágrimas e suor”) tornou-se famosa num discurso proferido por Winston Churchill na Câmara dos Comuns do Parlamento do Reino Unido em 13 de maio de 1940. O discurso geralmente é conhecido por esse nome.\n[…]\nA frase de Churchill, “Não tenho nada a oferecer a não ser sangue, trabalho, lágrimas e suor”, foi chamada de paráfrase daquela proferida em 2 de julho de 1849 por Giuseppe Garibaldi ao reunir suas forças revolucionárias em Roma: “Ofereço a fome, a sede, a fome forçada, marchas, batalhas e morte\". Quando jovem, Churchill considerou escrever uma biografia de Garibaldi.\n[…]\npor causa dos perigos sobre os quais, no passado, a nação triunfou; por causa do sangue, do suor e das lágrimas, do trabalho e da angústia, através dos quais, nos dias que se passaram, nossos antepassados avançaram para o triunfo.\" A frase de Churchill foi chamada de \"citação direta\" do discurso de Roosevelt.\n[…]\nGostaria de dizer à Assembleia, tal como disse àqueles que aderiram a este governo: \"Não tenho nada para oferecer senão sangue, trabalho, lágrimas e suor\". Temos diante de nós uma provação do tipo mais doloroso. Temos diante de nós muitos e muitos longos meses de luta e sofrimento.\n[…]\nEm 26 de abril de 2013, o Banco da Inglaterra anunciou que, sob um retrato de Churchill, a frase \"Não tenho nada a oferecer além de sangue, trabalho, lágrimas e suor\". deveria adornar a nova nota de 5 libras. Foi emitido em setembro de 2016.\n[…]\nJohn Lukacs, Five Days in London: May 1940 (Yale University, New Haven, 2001) é uma boa visão da situação política no governo britânico quando Churchill fez este discurso\n[…]\nThe Churchill Centre: Sangue, Trabalho, Lágrimas e Suor Arquivado em 2021-05-19 no Wayback Machine, com uma breve introdução",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Projeto Manhattan",
      "descricao": "Programa secreto dos Estados Unidos, com apoio do Reino Unido e do Canadá, que desenvolveu as primeiras bombas atômicas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que físico americano dirigiu o laboratório de Los Alamos, onde o Projeto Manhattan desenvolveu a bomba atômica?",
    "resposta": "J. Robert Oppenheimer",
    "fonte": [
      "https://en.wikipedia.org/wiki/Manhattan_Project",
      "https://en.wikipedia.org/wiki/J._Robert_Oppenheimer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Manhattan_Project",
        "situacao": "ok",
        "texto": "The Manhattan Project was a research and development program undertaken during World War II to produce the first nuclear weapons. It was led by the United States in collaboration with the United Kingdom and Canada. The Manhattan Project employed nearly 130,000 people at its peak and cost nearly US$2 billion (equivalent to about $28 billion in 2024).\n[…]\nFrom 1942 to 1946, the project was directed by Major General Leslie Groves of the U.S. Army Corps of Engineers. Nuclear physicist J. Robert Oppenheimer was the director of the Los Alamos Laboratory that designed the bombs. The Army program was designated the Manhattan District, as its first headquarters were in Manhattan; the name superseded the initial codename, Development of Substitute Materials, for the entire project. The project absorbed its earlier British counterpart, Tube Alloys.\n[…]\nDuring the war, Los Alamos was referred to as \"Site Y\" or \"the Hill\". Initially it was to have been a military laboratory with Oppenheimer and other researchers commissioned into the Army, but Robert Bacher and Isidor Rabi balked at the idea and convinced Oppenheimer that other scientists would object. Conant, Groves, and Oppenheimer then devised a compromise whereby the laboratory was operated by the University of California under contract to the War Department.\n[…]\nAn accelerated effort on the implosion design, codenamed Fat Man, began in August 1944 when Oppenheimer implemented a sweeping reorganization of the Los Alamos laboratory to focus on implosion. Two new groups were created at Los Alamos to develop the implosion weapon, X (for explosives) Division headed by explosives expert George Kistiakowsky and G (for gadget) Division under Robert Bacher. The new design featured explosive lenses that focused the implosion into a spherical shape.\n[…]\nOppenheimer (TV series) – 1980 drama television serial"
      },
      {
        "url": "https://en.wikipedia.org/wiki/J._Robert_Oppenheimer",
        "situacao": "ok",
        "texto": "J. Robert Oppenheimer (born Julius Robert Oppenheimer  ; April 22, 1904 – February 18, 1967) was an American theoretical physicist who served as the director of the Manhattan Project's Los Alamos Laboratory during World War II. He is often called the \"Father of the Atomic Bomb\" for his role in overseeing the development of the first nuclear weapons.\n[…]\nIn 1941, Oppenheimer was briefed about nuclear weapon design by Australian physicist Mark Oliphant. In 1942, Oppenheimer was recruited to work on the Manhattan Project, and in 1943 was appointed director of the project's Los Alamos Laboratory in New Mexico, tasked with developing the first nuclear weapons. His leadership and scientific expertise were instrumental in the project's success, and on July 16, 1945, he was present at the first test of the atomic bomb, Trinity.\n[…]\nThe plan to commission scientists fell through when Rabi and Robert Bacher balked at the idea. James B. Conant, Groves, and Oppenheimer devised a compromise whereby the University of California operated the laboratory under contract to the War Department. It soon turned out that Oppenheimer had hugely underestimated the magnitude of the project: Los Alamos grew from a few hundred people in 1943 to over 6,000 in 1945.\n[…]\nConant, Jennet (2006). 109 East Palace: Robert Oppenheimer and the Secret City of Los Alamos. Simon & Schuster. ISBN 978-0-7432-5007-8. OCLC 57475908.\n[…]\nJ. Robert Oppenheimer – Berkeley Historical Plaque Project\n[…]\nJ. Robert Oppenheimer at the Atomic Heritage Foundation\n[…]\nJ. Robert Oppenheimer: An Unparalleled Legacy at the Los Alamos National Laboratory\n[…]\nThe Reith Lectures: Robert Oppenheimer – Science and the Common Understanding, on BBC Radio 4, 1953\n[…]\nLecture by Dr. Robert Oppenheimer: Freedom and Necessity in the Sciences at Dartmouth College, 1959\n[…]\nJ. Robert Oppenheimer at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Projeto_Manhattan",
        "situacao": "ok",
        "texto": "Projeto Manhattan foi um programa de pesquisa e desenvolvimento que produziu as primeiras bombas atômicas durante a Segunda Guerra Mundial. Foi liderado pelos Estados Unidos, com o apoio do Reino Unido e Canadá. De 1940 a 1946, o projeto esteve sob a direção do major-general Leslie Groves do Corpo de Engenharia do Exército dos Estados Unidos.\n[…]\nCompton convidou o físico teórico Robert Oppenheimer, da Universidade da Califórnia em Berkeley, para assumir a pesquisa sobre cálculos de nêutrons rápidos — a chave para cálculos de massa crítica e de detonação de armas — de Gregory Breit, que tinha sido interrompida em 18 de maio de 1942 por causa de preocupações sobre negligência na segurança operacional. John H.\n[…]\nManley, um físico do Laboratório Metalúrgico, foi designado para ajudar Oppenheimer no contato e coordenação de grupos de física experimental espalhados por todo o país. Oppenheimer e Robert Serber da Universidade de Illinois examinaram os problemas de difusão de nêutrons em uma cadeia de reação nuclear e hidrodinâmica — como a explosão produzida por uma reação em cadeia poderia se comportar.\n[…]\nOppenheimer chegou a encomendar para si um uniforme de tenente-coronel, mas dois físicos fundamentais, Robert Bacher e Isidor Isaac Rabi, rejeitaram a ideia. Conant, Groves e Oppenheimer, em seguida, conceberam um compromisso de que o laboratório seria operado pela Universidade da Califórnia, sob contrato com o Departamento de Guerra.\n[…]\nO Laboratório de Pesquisa Naval continuou a pesquisa sob a direção de Philip Abelson, mas houve pouco contato com o Projeto Manhattan até abril de 1944, quando o capitão William Sterling Parsons, o oficial naval que estava no comando do desenvolvimento de material bélico em Los Alamos, trouxe notícias a Oppenheimer sobre progressos encorajadores em experimentos da Marinha sobre difusão térmica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Carta Einstein–Szilárd",
      "descricao": "Carta de 1939 enviada ao presidente Franklin Roosevelt alertando para a possibilidade de a Alemanha desenvolver uma bomba atômica."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1939, que cientista famoso assinou uma carta ao presidente Roosevelt alertando que a Alemanha poderia desenvolver uma bomba atômica?",
    "resposta": "Albert Einstein",
    "fonte": [
      "https://en.wikipedia.org/wiki/Einstein%E2%80%93Szil%C3%A1rd_letter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Einstein%E2%80%93Szil%C3%A1rd_letter",
        "situacao": "ok",
        "texto": "A letter written by Leo Szilard and signed by Albert Einstein on August 2, 1939, was sent to President of the United States Franklin D. Roosevelt. Szilard consulted with fellow Hungarian physicists Edward Teller and Eugene Wigner, warning that Germany might develop atomic bombs and suggested that the United States start its own nuclear program.\n[…]\nEnding the letter with \"Yours truly, Albert Einstein\" did nothing to alter this impression. Both the English letter and a longer explanatory letter were then posted to Einstein for him to sign.\n[…]\nThe Einstein–Szilard letter was signed by Einstein and posted back to Szilard, who received it on August 9. Szilard gave both the short and long letters, along with a letter of his own, to Sachs on August 15. Sachs asked the White House staff for an appointment to see President Roosevelt, but before one could be set up, the administration became embroiled in a crisis due to Germany's invasion of Poland, which started World War II.\n[…]\nSachs presented the Einstein–Szilard letter and accompanying materials, including a memorandum of his own. He read the materials aloud to Roosevelt, but the president was not persuaded that the U.S. government should get involved. Sachs managed to get an invitation to breakfast the next morning, and spent a sleepless night trying to conceive how he might persuade the president to support the plan.\n[…]\nEinstein sent two more letters to Roosevelt, on March 7, 1940, and April 25, 1940, calling for action on nuclear research. Szilard drafted a fourth letter for Einstein's signature that urged the President to meet with Szilard to discuss policy on nuclear energy. Dated March 25, 1945, it did not reach Roosevelt before his death on April 12, 1945.\n[…]\nReproduction of 1939 Einstein–Szilárd letter\n[…]\nEinstein and Szilard re-enact their meeting for the film Atomic Power (1946)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carta_Einstein%E2%80%93Szil%C3%A1rd",
        "situacao": "ok",
        "texto": "Carta Einstein–Szilárd foi uma carta escrita por Leó Szilárd e assinada por Albert Einstein que foi enviada ao Presidente dos Estados Unidos Franklin D. Roosevelt em 2 de agosto de 1939. Escrita em consulta com os colegas e físicos húngaros Edward Teller e Eugene Wigner, a carta alertava que a Alemanha Nazista poderia desenvolver bombas atômicas e pedia por ação de Roosevelt, que por fim resultou \n[…]\nA carta foi assinada por Einstein em 2 de agosto, e entregue a Roosevelt pelo economista Alexander Sachs. Contudo, ela só chegou em 11 de outubro devido à preocupação do presidente com a invasão germânica da Polônia, que viria a iniciar a Segunda Guerra Mundial. Após ouvir um resumo de Sachs da carta Roosevelt autorizou a criação do Comitê Consultivo do Urânio (Advisory Committee on Uranium, no original).\n[…]\nA primeira reunião do comitê ocorreu em 21 de outubro, liderada por Lyman James Briggs, presidente do National Bureau of Standards. US$ 6 000 foram disponibilizados para experiências com o nêutron, feitas por Enrico Fermi na Universidade de Chicago.\n[…]\nA carta é frequentemente vista como uma das origens do Projeto Manhattan, o bem sucedido projeto nuclear que viria a produzir as bombas lançadas em Hiroshima e Nagasaki em 1945.\n[…]\nApesar de não ter trabalhado no projeto atômico, de acordo com Linus Pauling, Einstein mais tarde teria se arrependido de ter assinado a carta.\n[…]\nA carta afirmava que:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Canção do Expedicionário",
      "descricao": "Hino dos pracinhas da Força Expedicionária Brasileira, que começa com os versos Você sabe de onde eu venho."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que poeta modernista escreveu a letra da Canção do Expedicionário, o hino dos pracinhas que começa com Você sabe de onde eu venho?",
    "resposta": "Guilherme de Almeida",
    "distratores": [
      "Manuel Bandeira",
      "Carlos Drummond de Andrade",
      "Mário de Andrade"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Can%C3%A7%C3%A3o_do_Expedicion%C3%A1rio",
      "https://pt.wikipedia.org/wiki/Guilherme_de_Almeida"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Can%C3%A7%C3%A3o_do_Expedicion%C3%A1rio",
        "situacao": "ok",
        "texto": "Canção do Expedicionário é o título de uma música composta por Spartaco Rossi com letra de Guilherme de Almeida. Foi originalmente interpretada pelo cantor Francisco Alves, e se tornou mais conhecida que o próprio hino oficial da Força Expedicionária Brasileira (FEB), nome das tropas que lutaram na Europa durante a II Guerra Mundial.\n[…]\nGuilherme de Almeida escrevera os versos para um concurso promovido pelo jornal paulistano Diário da Noite, que escolheria uma canção para homenagear os \"pracinhas\" da FEB na Itália; a 26 de dezembro de 1960, Guilherme de Almeida escreveu um artigo pela inauguração do Monumento Nacional aos Mortos da Segunda Guerra Mundial, onde deu sua versão para a criação dos versos: \"Era já a madrugada de 8 de março de 1944 quando escrevi a última sextilha da 'Canção do Expedicionário'.\n[…]\n(...) Apenas uma rapsódia. Mapa lírico do Brasil: fragmentos de canções do povo, com que o 'pracinha' – o novo, desconhecido soldado dos Exércitos Aliados – havia de apresentar-se a gentes outras, terras de outrem, dizendo: Você sabe de onde eu venho? (...) Isso cantaram os 'pracinhas' lá longe, no estrangeiro. Isso, na Guerra, foi eco ao longo dos seus passos. Canto e eco que por lá então emudeceram à flor dos lábios e sob os pés de um punhado deles...\"\n[…]\nOs versos de Almeida, na versão completa do poema, trazem referências ao Hino Nacional Brasileiro, a versos do poeta Gonçalves Dias e da obra de José de Alencar, além de menções a canções bastante populares, como Meu Limão, Meu Limoeiro, Luar do Sertão, Feitio de Oração, Casinha Pequenina, Casa de Caboclo, etc.\n[…]\nAo contrário do que declarou em 1960 Guilherme de Almeida, o sucesso da canção foi maior no próprio Brasil do que na Europa; diversos relatos dão conta de que a canção não era por lá muito ouvida por ser de \"difícil execução\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guilherme_de_Almeida",
        "situacao": "ok",
        "texto": "Guilherme de Andrade de Almeida (Campinas, 24 de julho de 1890 — São Paulo, 11 de julho de 1969) foi um poeta, cronista, jornalista, crítico de cinema, ensaísta, escritor de livros infantis, conferencista e tradutor brasileiro. É considerado um verdadeiro comunicador, tendo utilizado, sem preconceitos, quase todos os meios de comunicação disponíveis em seu tempo: livro, jornal, revista, cinema, te\n[…]\nGuilherme de Almeida publicou, em 1916, duas peças de teatro que escreveu a quatro mãos com Oswald de Andrade. Em 1917 publica seu primeiro livro de versos, Nós, que alcançou grande sucesso, sobretudo entre o público feminino. O poeta passa então a colaborar ativamente em revistas, como A Cigarra.\n[…]\nOs livros propriamente modernistas de Guilherme de Almeida são Era Uma Vez... (1922), A Frauta que Eu Perdi (1923), Meu (1925), Raça (1925) e, em parte, Encantamento (1925). Depois deste período, nota-se um arrefecimento do experimentalismo na poesia de Guilherme de Almeida. Isto, porém, não o impede de produzir algumas obras-primas principalmente em seus últimos anos, quando escreve Rua (1961), Rosamor (1965) e Margem (1968, publicado póstumamente em 2010).\n[…]\nEm muitas delas, Guilherme de Almeida já usa o humor e a paródia como forma de composição, bem como metáforas e comparações inovadoras. As obras de caráter modernista e as de sua última fase merecem uma revisão crítica, pois Guilherme de Almeida é um poeta pouco estudado. Até hoje não há edição completa de sua poesia.\n[…]\nGuilherme de Almeida mudou-se para o local em 1946, um sobrado na rua Macapá, no Pacaembu, em São Paulo. Era chamado carinhosamente por ele como a \"Casa da Colina\". E ele a descreveu: \"A casa na colina é clara e nova. A estrada sobe, pára, olha um instante e desce\". Nela, o poeta viveu até 1969 e nela faleceu. Lá, os saraus eram bem animados, como lembra o poeta Paulo Bomfim.\n[…]\nIbrahim de Almeida Nobre"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Batalha de Monte Castelo",
      "descricao": "Série de combates nos Apeninos italianos em que a Força Expedicionária Brasileira conquistou o Monte Castelo."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que general comandava a Força Expedicionária Brasileira quando os pracinhas finalmente conquistaram Monte Castelo, na Itália?",
    "resposta": "Mascarenhas de Morais",
    "distratores": [
      "Eurico Gaspar Dutra",
      "Góis Monteiro",
      "Juarez Távora"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Batalha_de_Monte_Castelo",
      "https://pt.wikipedia.org/wiki/Mascarenhas_de_Morais"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_Monte_Castelo",
        "situacao": "ok",
        "texto": "A Batalha de Monte Castello foi travada ao final da Segunda Guerra Mundial, entre as tropas aliadas e as forças do Exército Alemão, que tentavam conter o seu avanço no Norte da Itália. A batalha marcou a presença da Força Expedicionária Brasileira (FEB) no conflito. A batalha arrastou-se por três meses, de 24 de novembro de 1944 a 21 de fevereiro de 1945, durante os quais se efetuaram seis ataques\n[…]\nEm 5 de dezembro, o general Mascarenhas recebe uma ordem do 4º Corpo de que \"caberia à DIE capturar e manter o cume do Monte Della Torracia — Monte Belvedere\". Ou seja, depois de duas tentativas frustradas, Monte Castello ainda era o objetivo principal da próxima ofensiva brasileira, a qual havia sido adiada por uma semana.\n[…]\nA lição serviu para reforçar a convicção de Mascarenhas de que o monte Castello só seria tomado dos alemães se toda a divisão fosse empregada no ataque — e não apenas alguns batalhões, como vinha ordenando o 5º Exército. Somente em 19 de fevereiro de 1945, após a melhora do inverno o comando do 5º Exército determinou o início de uma nova ofensiva para a conquista do monte. Tal ofensiva denominada de Operação Encore utilizaria as tropas da 10ª Divisão de Montanha americana e da 1ª DIE.\n[…]\nDesta vez a tática utilizada seria a mesma idealizada por Mascarenhas de Moraes em 19 de novembro, utilizando duas divisões. Assim, em 20 de fevereiro, as tropas da Força Expedicionária Brasileira apresentaram-se em posição de combate, com seus três regimentos prontos para partir rumo ao monte Castello.\n[…]\nGrande parte do sucesso da ofensiva foi creditada à Artilharia Divisionária, comandada pelo general Cordeiro de Farias, que entre 16h e 17h do dia 21, efetuou um fogo de barragem perfeito contra o cume do monte Castello, permitindo a movimentação das tropas brasileiras.\n[…]\nRelato de um Veterano da FEB sobre a Batalha, no site \"Grandes Guerras\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mascarenhas_de_Morais",
        "situacao": "ok",
        "texto": "João Batista Mascarenhas de Morais (São Gabriel, 13 de novembro de 1883 — Rio de Janeiro, 17 de setembro de 1968) foi um militar brasileiro. Foi o comandante da Força Expedicionária Brasileira, na Segunda Guerra Mundial durante a Campanha da Itália, entre 1944 e 1945. Em dezembro de 1943, o então General Mascarenhas de Morais foi designado para comandar a 1.ª DIE (Divisão de Infantaria Expedicioná\n[…]\nMascarenhas de Morais faleceu no dia 17 de setembro de 1968, aos 84 anos de idade. Sua morte causou bastante comoção entre os civis e militares da época. O jornal Correio da Manhã noticiou no dia seguinte, que foram depositadas sobre o seu caixão uma boina e uma braçadeira dos ex-pracinhas da Força Expedicionária Brasileira.\n[…]\nMascarenhas era o comandante da 2ª Região Militar em São Paulo, quando em uma reunião na casa do Major Reinaldo Ramos Saldanha da Gama, foi sondado sobre a possibilidade de comandar a Força Expedicionária Brasileira. Nesse primeiro momento o General respondeu com certa cautela, considerou o fato de já ser um homem de 60 anos de idade, dizendo que era preciso ainda se inteirar sobre o assunto.\n[…]\nPor todo o Brasil, centenas de ruas, avenidas e escolas levam o nome de \"Mascarenhas de Morais\" em sua homenagem.\n[…]\nEm 27 de setembro de 2020 foi inaugurado em Porretta Terme um monumento em homenagem ao Marechal Mascarenhas de Morais, em agradecimento pelos esforços da FEB na liberação da Itália do domínio nazi-fascista.\n[…]\nA Associação Nacional dos Veteranos da Força Expedicionária Brasileira (ANVFEB), instituiu em Sessão do dia 14 de agosto de 1969 a Medalha Marechal Mascarenhas de Morais, cuja finalidade é homenagear de forma permanente, objetiva e condigna, pessoas físicas ou jurídicas que tenham prestado significativos serviços à FEB, ou que venham a prestar relevantes serviços à Associação ou a classe por ela assistida.\n[…]\nForça Expedicionária Brasileira\n[…]\nPracinhas"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "O Grande Ditador",
      "descricao": "Filme de 1940 que satiriza Adolf Hitler por meio do ditador fictício Adenoid Hynkel."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que cineasta escreveu, dirigiu e estrelou O Grande Ditador, a sátira de Hitler lançada em 1940?",
    "resposta": "Charles Chaplin",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Great_Dictator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Great_Dictator",
        "situacao": "ok",
        "texto": "The Great Dictator is a 1940 American political satire black comedy film written, directed, produced by, and starring Charlie Chaplin. Having been the only major Hollywood filmmaker to continue to make silent films well into the period of sound films, Chaplin made this his first true sound film.\n[…]\nIn his memoir My Father, Charlie Chaplin, Chaplin's son Charles Chaplin Jr. described his father as being haunted by the similarities in background between him and Hitler; they were born four days apart in April 1889, and both had risen to their present heights from poverty. He wrote:\n[…]\nDespite the expressions of trepidation to The Great Dictator while it was in development and production, overall sociopolitical reactions to the released film in 1940 were much more positive and supportive. Chaplin was invited to read the film's concluding speech at a January 21, 1941 gala honoring the third inauguration of U.S. President Franklin D. Roosevelt.\n[…]\nAnnette Insdorf, in her book Indelible Shadows: Film and the Holocaust (2003), writes that \"There was something curiously appropriate about the little tramp impersonating the dictator, for by 1939 Hitler and Chaplin were perhaps the two most famous men in the world. The tyrant and the tramp reverse roles in The Great Dictator, permitting the eternal outsider to address the masses\".\n[…]\nChaplin also won best actor awards at National Board of Review awards and New York Film Critics Circle Awards.\n[…]\nIn 2005, the British Film institute in conjunction with the University of Southampton and the London College of Communication hosted \"The Charles Chaplin Conference\" in London to coincide with the institute's establishment of the Chaplin research programme.\n[…]\nChaplin and American Culture: The Evolution of a Star Image. Charles J. Maland. Princeton, 1989."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Grande_Ditador",
        "situacao": "ok",
        "texto": "The Great Dictator (prt/bra: O Grande Ditador) é um filme estadunidense de 1940, do gênero comédia dramática e sátira crítica, escrito, protagonizado e dirigido por Charles Chaplin.\n[…]\nFoi lançado em 15 de outubro de 1940 e satiriza o nazismo, o fascismo e seus maiores propagadores, Adolf Hitler e Benito Mussolini. Foi também o primeiro filme falado de Chaplin. Na ocasião de seu lançamento, os Estados Unidos ainda não tinham entrado na Segunda Guerra Mundial.\n[…]\nSchultz escapa das ferragens, e Chaplin passa seus próximos vinte anos no hospital, enquanto muitas mudanças acontecem em Tomânia: Adenoid Hynkel (também interpretado por Chaplin), agora o grande ditador da Tomânia, perseguia judeus com a ajuda dos ministros Garbitsch (Henry Daniell) e Herring (Billy Gilbert).\n[…]\nAdenóide Hynkel é uma paródia escrachada de Adolf Hitler, interpretada pelo próprio Chaplin Governa a Tomânia como um ditador. É líder do partido Dupla-Cruz, uma referência à suástica nazista, defendendo a causa militar e do antissemitismo.\n[…]\nCharles Chaplin -  Adenoid Hynkel / Barbeiro judeu\n[…]\nO Grande Ditador tornou-se um filme sucesso de público e crítica, rendendo a Chaplin um lucro de 1,5 milhão de dólares após seu investimento próprio de 2 milhões segundo dados da United Artists Internacionalmente o filme rendeu mais de 5 milhões de dólares.\n[…]\nA comédia Idiocracia de 2006 presta uma pequena homenagem a O Grande Ditador, quando os personagens principais montam uma atração com tema de viagem no tempo escrito erroneamente \"The Time Masheen\" apresentando representações ridiculamente imprecisas da história, incluindo uma com \"Charlie Chaplin e seu regime nazista maligno\".\n[…]\nO Grande Ditador no Rotten Tomatoes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Atentado de 20 de julho",
      "descricao": "Tentativa fracassada de oficiais alemães de matar Adolf Hitler com uma bomba, em 20 de julho de 1944, no quartel-general da Toca do Lobo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em julho de 1944, que coronel alemão deixou uma bomba escondida numa pasta na sala de reuniões de Hitler?",
    "resposta": "Claus von Stauffenberg",
    "fonte": [
      "https://en.wikipedia.org/wiki/20_July_plot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/20_July_plot",
        "situacao": "ok",
        "texto": "The 20 July plot, sometimes referred to as Operation Valkyrie (German: Unternehmen Walküre), was a failed attempt to assassinate Adolf Hitler, the dictator of Nazi Germany, and overthrow the Nazi government on 20 July 1944. The plotters were part of the German resistance, mainly composed of Wehrmacht officers. The principal mastermind of the conspiracy, Claus von Stauffenberg, tried to kill Hitler\n[…]\nBy mid-1943 the tide of war was turning decisively against Germany. The army plotters and their civilian allies became convinced that Hitler should be assassinated, so that a government acceptable to the western Allies could be formed, and a separate peace negotiated in time to prevent a Soviet invasion of Germany. In August 1943 Tresckow met, for the first time, a young staff officer named Lieutenant Colonel Claus von Stauffenberg.\n[…]\nThe plot was now fully prepared. On 7 July 1944 General Helmuth Stieff was to kill Hitler at a display of new uniforms at Klessheim castle near Salzburg. However, Stieff felt unable to kill Hitler. Stauffenberg now decided to do both, assassinate Hitler and to manage the plot in Berlin.\n[…]\nFromm's attempt to win favour by executing Stauffenberg and others on the night of 20 July had merely exposed his own previous lack of action and apparent failure to report the plot. Having been arrested on 21 July, Fromm was later convicted and sentenced to death by the People's Court. Despite his knowledge of the conspiracy, his formal sentence charged him with poor performance in his duties. He was executed in Brandenburg an der Havel.\n[…]\nNonetheless, a 1956 proposal to name a school after Claus Schenk Graf von Stauffenberg was opposed by a majority of citizens, and, according to Deutsche Welle (in 2014):\n[…]\nOperation Valkyrie: The Stauffenberg Plot to Kill Hitler (2008 documentary film)\n[…]\nOperation Valkyrie: the Stauffenberg Plot to Kill Hitler (80 min. documentary)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atentado_de_20_de_Julho",
        "situacao": "ok",
        "texto": "O Atentado de 20 de julho foi um atentado fracassado em 20 de julho de 1944 contra Adolf Hitler, líder da Alemanha Nazista, dentro de uma cabana na Toca do Lobo em Wolfsschanze, o Quartel General Secreto de Hitler na Prússia Oriental. O líder da conspiração, Claus von Stauffenberg, tentou matar Hitler detonando um explosivo escondido em uma maleta. No entanto, devido à localização da bomba no mome\n[…]\nO atentado fez parte de um golpe de estado baseado na chamada Operação Valquíria. O atentado mostrou o aumento significativo da resistência alemã contra o governo nazista. Stauffenberg levou uma bomba em uma pasta para uma reunião de lideranças e a deixou próxima de Hitler. Ao explodir, Stauffenberg pensava que Hitler havia morrido, e horas depois declarou aos oficiais que sua força de comando estava assumindo o controle da Alemanha.\n[…]\nNo dia 14 de julho, Stauffenberg compareceu a uma conferência de Hitler carregando uma bomba em sua pasta. Porém, como os conspiradores haviam decidido que Heinrich Himmler e Hermann Göring deveriam ser mortos simultaneamente para que a mobilização da Operação Valquíria tivesse chance de sucesso, ele hesitou no último momento ao perceber que Himmler não estava presente. De fato, era incomum que Himmler participasse das conferências militares.\n[…]\nNovamente, em 15 de julho, a tentativa foi cancelada no último momento. Himmler e Göring estavam presentes, mas Hitler foi chamado para fora da sala no instante final. Stauffenberg conseguiu recuperar a bomba e evitar que fosse descoberta.\n[…]\nO coronel Stauffenberg colocou a única bomba armada dentro de sua pasta e, com a assistência involuntária do major Ernst John von Freyend, entrou na sala de conferência, onde estavam Adolf Hitler e vinte oficiais, posicionando a pasta sob a mesa, perto de Hitler. Após alguns minutos, Stauffenberg recebeu uma ligação planejada e deixou a sala.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Fusca",
      "descricao": "Automóvel popular da Volkswagen, projetado na Alemanha nos anos 1930 e depois fabricado em vários países, inclusive no Brasil."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que engenheiro austríaco projetou o Fusca nos anos trinta, atendendo a um pedido de Hitler por um carro popular?",
    "resposta": "Ferdinand Porsche",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
      "https://en.wikipedia.org/wiki/Ferdinand_Porsche"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
        "situacao": "ok",
        "texto": "The Volkswagen Beetle, officially the Volkswagen Type 1, is a small family car produced by the German company Volkswagen from 1938 to 2003. A global cultural icon known for its bug-like design, the Beetle is widely regarded as one of the most influential cars of the 20th century. Its production period of 65 years is the longest for any single generation of automobile.\n[…]\nThe Beetle was conceived in the early 1930s, when the leader of Nazi Germany, Adolf Hitler, decided there was a need for a people's car—an inexpensive, simple, mass-produced car—to serve Germany's new road network, the Reichsautobahn. Engineer Ferdinand Porsche and his design team began developing and designing the car in the early 1930s, but the fundamental design concept can be attributed to Béla Barényi in 1925, predating Porsche's claims by almost ten years.\n[…]\nOn 22 June 1934, Ferdinand Porsche received a development contract from the Verband der Automobilindustrie (German Association of the Automotive Industry) for the prototype of an inexpensive and economical passenger car after Hitler decided there was a need for a people's car (in German, \"volkswagen\")—a car affordable and practical enough for lower-class people to own—to serve the country's new road network, the Reichsautobahn.\n[…]\nAlthough the Volkswagen car was primarily the conception of Porsche and Hitler, the idea of a \"people's car\" is much older than Nazism, and has existed since the introduction of automotive mass production.\n[…]\nGerman-Bohemian engineer Ferdinand Porsche and his team were generally known as the original designers of the Volkswagen. However, there has been debate over whether he was the original designer. Rumours circulated suggesting that other designers, such as Béla Barényi, Paul Jaray, Josef Ganz and Hans Ledwinka, may have influenced its design.\n[…]\nThe In-Depth History of the Volkswagen Super Beetle"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ferdinand_Porsche",
        "situacao": "ok",
        "texto": "Ferdinand Porsche (3 September 1875 – 30 January 1951) was an Austrian-German automotive engineer and founder of the Porsche AG. He is best known for creating the first gasoline-electric hybrid vehicle (Lohner-Porsche), the Volkswagen Beetle, the Auto Union racing cars, the Mercedes-Benz SS/SSK, and several other important developments and Porsche automobiles.\n[…]\nShortly after the beginning of the war on 1 September 1939, Ferdinand Porsche was appointed chairman of the Panzerkommission, an advisory group of engineers and industrialists created by Adolf Hitler. He was removed in 1943 after his tank designs were widely considered a failure.\n[…]\nThe legal basis of Piëch and Porsche's imprisonment was principally Ferdinand Porsche's contribution to his country's war effort and personal friendship with Hitler. In the Porsche family's own account, the affair was a thinly veiled attempt at extorting money and forcing them to collaborate with Renault; at the same time, the family was deceptive about the use of forced labor and the size of their wartime operation.\n[…]\nThe Volkswagen plant was completed in 1938 after workers from Italy were brought in. Volkswagen, under Ferdinand Porsche, used and profited from forced labour. That included a large number of Soviets. By early 1945, German nationals comprised only 10% of Volkswagen's workforce.\n[…]\nViews of Ferdinand Porsche have been polarised in the postwar years. Though he was recognised and honoured for his contributions to the automotive and engineering industries, with Volkswagen Group - which his heirs control - being the second-largest car manufacturer in the world, he was also criticised for his significant involvement in the Nazi regime, having contributed to the Nazi cause through his production of military vehicles and weapons systems used during World War II.\n[…]\nFerdinand Porsche at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volkswagen_Typ_1",
        "situacao": "ok",
        "texto": "O Volkswagen Typ 1, popularmente conhecido como Fusca (no Brasil) ou Carocha (em Portugal), foi o primeiro modelo de automóvel fabricado pela companhia alemã Volkswagen, sendo produzido entre 1938 e 2003. Foi o carro mais vendido no mundo, ultrapassando em 1972 o recorde que pertencia até então ao Ford Modelo T, de origem estadunidense. Foi produzido até 2003, no México, onde era chamado de VW Sed\n[…]\nA história do Fusca é uma das mais complexas e longas da história do automóvel. Em 22 junho de 1934, a União das Indústrias Automotivas (Verband der Automobilindustrie) firmou um contrato com o projetista Ferdinand Porsche para o desenvolvimento de um Volkswagen (\"carro do povo\"). Diferente da maioria dos outros carros, o projeto do Fusca envolveu várias empresas e até mesmo o governo de seu país, e levaria à fundação de uma fábrica inteira de automóveis no processo.\n[…]\nEm 2010 a Volkswagen anunciou que 2011 seria o último ano de fabricação do New Beetle, e que uma nova geração estava a caminho. Um dos objetivos estabelecidos pela fábrica era tornar o carro mais \"masculino\", e para tanto o carro seria mais baixo, largo e com formas menos arredondadas, mais próximas ao modelo original.\n[…]\nAinda dentro do objetivo de melhor identificar o carro com o original, a matriz alemã deu carta branca para que as filiais lançassem o carro nos seus mercados com o apelido que o primeiro modelo ganhou em cada um desses locais. Dessa forma, o carro foi lançado em setembro de 2012 como Fusca no Brasil, embora tenha mantido o nome Beetle em Portugal.\n[…]\nUm Buggy Baja ou Fusca Baja é um tipo de carro fora de estrada muito popular. É feito á partir de um fusca comum com peças de carros diferentes. É comum no nordeste brasileiro por causa de sua versatilidade em terrenos ruins como em areia ou estrada de terra.\n[…]\nVolkswagen Fusca (A5)\n[…]\nMotor1.com. Carros para sempre: Fusca \"Itamar\" marcou a volta dos populares",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Companhia Siderúrgica Nacional",
      "descricao": "Empresa siderúrgica brasileira criada em 1941, durante o governo Vargas, com usina em Volta Redonda."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Companhia Siderúrgica Nacional, em Volta Redonda, foi construída com financiamento americano. O que o governo Vargas ofereceu em troca?",
    "resposta": "Bases militares para os americanos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Companhia_Sider%C3%BArgica_Nacional",
      "https://en.wikipedia.org/wiki/Companhia_Sider%C3%BArgica_Nacional"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Companhia_Sider%C3%BArgica_Nacional",
        "situacao": "ok",
        "texto": "Companhia Siderúrgica Nacional (CSN) é a maior indústria siderúrgica do Brasil e da América Latina, e uma das maiores do mundo.\n[…]\nA CSN foi criada durante o Estado Novo por decreto do presidente Getúlio Vargas, após um acordo diplomático denominado Acordos de Washington, feito entre os governos brasileiro e estadunidense. Ele previa a construção de uma usina siderúrgica que pudesse fornecer aço para os aliados durante a Segunda Guerra Mundial e, na paz, ajudasse no desenvolvimento do Brasil.\n[…]\nO coronel Macedo Soares, futuro governador fluminense, que presidia a comissão responsável pelos estudos para instalação de uma grande siderúrgica no país, era engenheiro militar e defendia a instalação de uma usina na região do Vale do Paraíba, que se encontrava decadente com o declínio da cultura do café no estado do Rio de Janeiro. Tal situação também encontrava apoio em Amaral Peixoto, então interventor naquele estado e genro de Vargas.\n[…]\nNo final dos anos 1970, a Andrade e Gutierrez era responsável pelo abastecimento de minério de ferro para a Companhia Siderúrgica Nacional (CSN), em Volta Redonda, no Rio de Janeiro.\n[…]\nVerbete \"Companhia Siderúrgica Nacional\", no Centro de Pesquisa e Documentação de História Contemporânea do Brasil da Fundação Getulio Vargas\n[…]\n«Decreto-lei federal do Brasil n. 3 002 de 30 de janeiro de 1941» , que autorizou a constituição da Companhia Siderúrgica Nacional\n[…]\n«Decreto-lei federal do Brasil n. 3 173 de 3 de abril de 1941» , que autorizou empresas nacionais e a cidadãos brasileiros a subscreverem as ações preferenciais da Companhia Siderúrgica Nacional"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Companhia_Sider%C3%BArgica_Nacional",
        "situacao": "ok",
        "texto": "Companhia Siderúrgica Nacional (CSN) lit. 'National Siderurgy Company' or 'National Steel Company' is the largest fully integrated steel producer in Brazil and one of the largest in Latin America in terms of crude steel production. Its main plant is located in the city of Volta Redonda, in the state of Rio de Janeiro. Its current CEO is Benjamin Steinbruch.\n[…]\nCompanhia Siderúrgica Nacional's annual crude steel capacity and rolled product capacity are 5.6 million and 5.1 million tons, respectively. It produces a broad line of steel products, including slabs, hot- and cold-rolled, galvanized and tin mill products. Its products are used by the distribution, packaging, automotive, home appliance and construction industries.\n[…]\nCompanhia Siderúrgica Nacional was created as a state-owned company on April 9, 1941, during the \"Estado Novo era\", during the term of Brazilian president, Getúlio Vargas, after an agreement between the American and the Brazilian governments (see the Washington Accords) for the construction of a facility that would provide steel for the Allies during the Second World War and later be an aid for Brazil's development. It began its operations in 1946, under Eurico Gaspar Dutra's presidency.\n[…]\nThe company also offers tin mill products, including tin plate, tin free steel, low tin coated steel, and black plate products. CSN also mines iron ore, limestone, and dolomite, and maintains strategic investments in railroads and power supply companies. The company sells its steel products to customers in Brazil and 71 other countries in North America, Europe, and Asia through its sales force and distributors.\n[…]\nThe main competition of CSN in Brazil are Arcelor Brazil, Metallurgica Gerdau, Companhia Siderúrgica Paulista (COSIPA), Usiminas and CST-Brazil.\n[…]\nCompanhia Siderúrgica Nacional Official Site"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Gasogênio",
      "descricao": "Aparelho que produz gás combustível a partir da queima de carvão ou lenha, usado para mover automóveis na falta de gasolina."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos quarenta, muitos carros brasileiros rodavam com gasogênio, um aparelho que queimava carvão ou lenha. Por que essa adaptação se espalhou?",
    "resposta": "Racionamento de gasolina na guerra",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gasog%C3%AAnio",
      "https://en.wikipedia.org/wiki/Wood_gas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gasog%C3%AAnio",
        "situacao": "ok",
        "texto": "Gasogênio é um equipamento que produz gás combustível para alimentar motores de combustão interna. Converte matérias-primas sólidas  e líquidas em gás.\n[…]\nDurante a Segunda Guerra Mundial, a gasolina era racionada e escassa. Na Grã-Bretanha, França, Estados Unidos e Alemanha , um grande número de gasogênios foram construídos ou improvisados para converter madeira e carvão em combustível para veículos. Gasogênios comerciais estavam em produção antes e depois da guerra para uso em circunstâncias especiais ou em economias em dificuldades.\n[…]\nO veículo em que o gasogênio está instalado, deve estar equipado para operar com outro combustível (gasolina, álcool combustível, etc.). A válvula de mistura é aberta para criar o vácuo necessário para a ignição do gerador de gás com o motor ligado.\n[…]\nApresentam uma queima mais limpa do que a madeira a gasolina (sem controles de emissões), produzindo pouca ou nenhuma fuligem.\n[…]\nDurante a II Guerra Mundial, com as dificuldades nas importações, aconteceu um racionamento petróleo e derivados, obrigando o país a adotar alternativas energéticas.[carece de fontes]? Em 28 de Fevereiro de 1939, através de decreto-lei, o presidente Getúlio Vargas criou a CNG (Comissão Nacional do Gasogênio).\n[…]\nNo popular programa de rádio Car Talk, um entrevistado no episódio 1201 (que foi ao ar no dia 7 de Janeiro de 2012, e posteriormente foi nomeado \"20 Miles Per Woodchip\"), descreveu um veículo com gerador de gás de madeira em que ele andou na Alemanha, quando criança, durante a II Guerra Mundial. Os entrevistadores não estavam familiarizados com esta tecnologia, provavelmente porque nunca foi amplamente adotado nos EUA."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wood_gas",
        "situacao": "ok",
        "texto": "Wood gas is a fuel gas that can be used for furnaces, stoves, and vehicles. During the production process, biomass or related carbon-containing materials are gasified within the oxygen-limited environment of a wood gas generator to produce a combustible mixture. In some gasifiers this process is preceded by pyrolysis, where the biomass or coal is first converted to char, releasing methane and tar \n[…]\nMost of these engines have strict purity requirements of the wood gas, so the gas often has to pass through extensive gas cleaning in order to remove or convert, i.e., \"crack\", tars and particles. The removal of tar is often accomplished by using a water scrubber. Running wood gas in an unmodified gasoline-burning internal combustion engine may lead to problematic accumulation of unburned compounds.\n[…]\nreports that producer gas has a lower heat of combustion of 5.7 MJ/kg versus 55.9 MJ/kg for natural gas and 44.1 MJ/kg for gasoline. The heat of combustion of wood is typically 15–18 MJ/kg. Presumably, these values can vary somewhat from sample to sample. The same source reports the following chemical composition by volume which most likely is also variable:"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Soldados da borracha",
      "descricao": "Trabalhadores, em sua maioria nordestinos, recrutados durante a Segunda Guerra para extrair látex nos seringais da Amazônia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na guerra, milhares de nordestinos foram levados à Amazônia como soldados da borracha. Que fato tornou a borracha brasileira essencial para os Aliados?",
    "resposta": "O Japão ocupou os seringais asiáticos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Soldados_da_borracha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Soldados_da_borracha",
        "situacao": "ok",
        "texto": "Os soldados da borracha foram os brasileiros recrutados entre 1943 e 1945 e enviados para a Amazônia pelo Serviço Especial de Mobilização de Trabalhadores para a Amazônia (SEMTA), com o objetivo de extrair borracha para o esforço de guerra dos Estados Unidos, no âmbito dos Acordos de Washington, durante a Segunda Guerra Mundial.\n[…]\nEles constituíram a mão de obra principal do segundo ciclo da borracha e contribuíram significativamente para a expansão demográfica da Amazônia. O contingente é estimado entre 50 mil e 65 mil trabalhadores, em sua maioria nordestinos. A seleção priorizava jovens em boas condições físicas, reforçando a associação entre vigor corporal e identidade nacional promovida durante o Estado Novo.\n[…]\nFoi prometido aos recrutados que retornariam às suas terras de origem após o fim da guerra. Na realidade, milhares morreram de malária, outras doenças tropicais, acidentes ou condições extremas da selva. Os sobreviventes frequentemente permaneciam na região por falta de recursos para a viagem de volta ou por endividamento com os seringalistas (proprietários dos seringais).\n[…]\nDiferentemente dos pracinhas (soldados enviados à Europa), os soldados da borracha só foram reconhecidos oficialmente como participantes do esforço de guerra brasileiro com a promulgação da Constituição de 1988, passando então a ter direito a uma pensão vitalícia de dois salários mínimos.\n[…]\nEm 2013, a PEC 346 foi aprovada e transformada na Emenda Constitucional nº 78, que concedeu uma indenização única de 25 mil reais aos sobreviventes e elevou a pensão vitalícia dos dependentes para dois salários mínimos. Os pagamentos começaram em março de 2015, beneficiando cerca de doze mil pessoas (entre seringueiros, viúvas e dependentes). No total, o governo federal com desembolsou com os pagamentos 289 milhões de reais.\n[…]\nBatalha da Boracha"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Maquiagem para pernas",
      "descricao": "Prática difundida na Segunda Guerra em que mulheres pintavam as pernas e desenhavam a costura para simular meias."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Durante a guerra, muitas mulheres pintavam as pernas e desenhavam uma linha na parte de trás delas. Por que faziam isso?",
    "resposta": "Para imitar as meias de náilon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leg_makeup"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leg_makeup",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Sadako Sasaki",
      "descricao": "Menina japonesa exposta à radiação da bomba de Hiroshima, que morreu de leucemia em 1955 depois de dobrar centenas de grous de papel."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que dobradura de papel virou símbolo da paz por causa da história da menina Sadako Sasaki, vítima da radiação de Hiroshima?",
    "resposta": "Tsuru",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sadako_Sasaki"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sadako_Sasaki",
        "situacao": "ok",
        "texto": "Sadako Sasaki (佐々木 禎子, Sasaki Sadako; January 7, 1943 – October 25, 1955) was a Japanese girl who became a victim of the atomic bombing of Hiroshima by the United States. She was two years of age when the bombs were dropped and was severely irradiated. She survived for another ten years, becoming one of the most widely known hibakusha—a Japanese term meaning \"bomb-affected person\". She is remember\n[…]\nA popular version of the story is that Sasaki fell short of her goal of folding 1,000 cranes, having folded only 644 before her death and that her friends completed the 1,000 and buried them all with her. (This comes from the novelized version of her life Sadako and the Thousand Paper Cranes.) However, an exhibit that appeared in the Hiroshima Peace Memorial Museum stated that by the end of August 1955, Sasaki had achieved her goal and continued to fold 300 more cranes.\n[…]\nThe best known version of Sasaki's story is Sadako and the Thousand Paper Cranes, a children's historical novel written by Canadian-American author Eleanor Coerr and published in 1977.\n[…]\nHer story has become familiar to many schoolchildren around the world through the novels The Day of the Bomb (1961, in German, Sadako will leben) by the Austrian writer Karl Bruckner. Sadako is also briefly mentioned in Children of the Ashes, Robert Jungk's historical account of the lives of Hiroshima victims and survivors and about Japan World War II.\n[…]\nStory of Sadako Sasaki in Marathi\n[…]\nSadako and the Thousand Paper Cranes\n[…]\nSadako Sasaki—The Complete Story of Sadako Sasaki website\n[…]\n\"Cranes over Hiroshima\"—lyrics to a song by Fred Small inspired by Sadako Sasaki.\n[…]\n\"Daughter of Samurai\"—a song by Russian rock band Splean, inspired by Sadako Sasaki.\n[…]\nSadako e le mille gru di carta is an album by Italian progressive rock band LogoS; published in 2020, seventy-five years after atomic bombing of Hiroshima, it tells the story of Sadako Sasaki."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sadako_Sasaki",
        "situacao": "ok",
        "texto": "Sadako Sasaki (佐々木 禎子, Sasaki Sadako; 7 de Janeiro de 1943 – 25 de Outubro de 1955) foi uma garota japonesa de apenas 2 anos de idade quando a bomba atômica americana foi lançada em Hiroshima no dia 6 de Agosto de 1945, próxima a sua casa perto da Ponte Misasa. Sasaki se tornou um dos mais conhecidos hibakusha – um termo japonês significando \"pessoa afetada pela bomba\".\n[…]\n(Isso vem de uma versão novelizada de sua vida, \"Sadako and the Thousand Paper Cranes.) Entretanto, uma exibição na qual apareceu no Museu Memorial da Paz de Hiroshima afirmou que pelo fim de Agosto de 1955, Sasaki havia atingido seu objetivo e continuou a dobrar mais 300 Tsurus. O irmão mais velho dela, Masahiro Sadako, diz em seu livro The Complete Story of Sadako Sasaki de que ela atingiu seu objetivo.\n[…]\nDepois de sua morte, seus amigos e colegas da escola publicaram uma coleção de cartas com o objetivo de conseguir financiamento para construir um memorial à ela e para todas as crianças que morreram pelos efeitos da Bomba Atômica, tendo por exemplo a Japonesa Yoko Moriwaki. Em 1958, uma estátua com Sasaki segurando um Tsuru dourado foi revelada no Parque Memorial da Paz de Hiroshima. No pé da estátua se lê: \"Este é o nosso choro. Esta é a nossa oração. Paz no mundo.\"\n[…]\nTambém há uma estátua dela no Parque da Paz de Seattle. Sasaki se tornou o simbolo principal do impacto da guerra nuclear. Sasaki é também uma heroína para muitas garotas no Japão. Sua história é contada em escolas japonesas no aniversário do bombardeamento de Hiroshima. Dedicado à Sasaki, as pessoas em todo Japão celebram o dia 6 de Agosto com o dia anual da paz\n[…]\nHiroshima Witness\n[…]\n[1] – O website da História Completa de Sadako Sasaki.\n[…]\n\"Cranes over Hiroshima\" – letra de uma música feita por Fred Small inspirado por Sadako Sasaki\n[…]\nMúsica de um grupo russo \"Spleen – Daughter of samurai\", inspirado por Sadako Sasaki",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Volgogrado",
      "descricao": "Cidade russa às margens do rio Volga, chamada Stalingrado entre 1925 e 1961."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1961, durante a desestalinização, a cidade de Stalingrado recebeu um novo nome, inspirado no grande rio que a banha. Qual?",
    "resposta": "Volgogrado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volgograd",
      "https://pt.wikipedia.org/wiki/Volgogrado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volgograd",
        "situacao": "ok",
        "texto": "Volgograd, formerly Tsaritsyn (1589–1925) and Stalingrad (1925–1961), is the administrative centre and largest city of Volgograd Oblast, Russia. The city lies on the western bank of the Volga, covering an area of 859.4 square kilometres (331.8 square miles), with a population of slightly over one million residents. Volgograd is the 16th-largest city by population size in Russia, the third-largest \n[…]\nIn 1961, Nikita Khrushchev's administration renamed the city to Volgograd as part of de-Stalinization.\n[…]\nIn the aftermath of Stalin's death, Nikita Khrushchev announced the policy of de-Stalinization. The name was changed to Volgograd in 1961, derived from the name of the Volga river, on whose bank the city is situated.\n[…]\nOn 10 November 1961, Nikita Khrushchev's administration changed the name of the city to Volgograd (\"Volga City\") as part of his programme of de-Stalinization following Stalin's death. This action was and remains somewhat controversial, because Stalingrad has such importance as a symbol of resistance during World War II.\n[…]\nOn January 30, 2013, the Volgograd City Council passed a measure to use the title \"Hero City Stalingrad\" in city statements on nine specific dates annually. On the following dates, the title \"Hero City Stalingrad\" can officially be used in celebrations:\n[…]\nЦарицын – Сталинград – Волгоград\", #10, 2 февраля 2013 г. (Volgograd City Duma. Decision #72/2149 of January 30, 2013 On Using the Name of the \"Hero City Stalingrad\", as amended by the Decision #9/200 of December 23, 2013 On Amending Item 1 of the Procedures for Usage of the Name \"Hero City Stalingrad\", Adopted by the January 30, 2013 Decision #72/2149 of Volgograd City Duma \"On Using the Name of the \"Hero City Stalingrad\". Effective as of the day of adoption.).\n[…]\nMedia related to Volgograd at Wikimedia Commons\n[…]\nVolgograd travel guide from Wikivoyage\n[…]\n(in Russian) Official website of Volgograd"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volgogrado",
        "situacao": "ok",
        "texto": "Volgogrado (em russo: , transl. Volgográd) é uma cidade da Federação da Rússia, localizada no oblast homónimo. Anteriormente, entre 1589 e 1925, chamava-se Tsarítsin (no alfabeto cirílico: , transl. Tsaritsyn)  e, entre 1925 e 1961, Stalingrado(pt-BR) ou Estalinegrado(pt-PT?) (russo: , transl. Stalingrád). Em fevereiro de 2013, a cidade aprovou a alteração do seu nome para Stalingrado em feriados \n[…]\nVolgogrado estende-se por cerca de 80 quilômetros ao longo da margem ocidental do rio Volga, próximo à sua confluência com o Tsaritsa.\n[…]\nA população da Volgogrado era de 1 021 200 habitantes em 2010 (a décima segunda cidade mais populosa da Rússia) e a área metropolitana de Volgogrado, que também inclui as cidades de Volzhsky e Krasnoslobodsk, somou 1,51 milhões de habitantes em 2010.\n[…]\nA batalha de Stalingrado teve lugar nesta cidade no inverno de 1942, com êxito do exército soviético sobre as tropas alemãs nazistas, desgastadas pelo inverno rigoroso típico da região.\n[…]\nEm 1961, após o processo de desestalinização posto em prática no governo de Nikita Khruschov, passou a se chamar Volgogrado.\n[…]\nA cidade sempre foi reconhecida como um grande centro industrial russo, especializando na construção naval e de veículos, além da produção de petróleo, aço e alumínio. Várias grandes fabricas, como a Volgograd Tractor Plant, tem sua sede neste município.\n[…]\nA cidade possui um clima continental úmido, na Classificação climática de Köppen-Geiger (Dfa) com o subtipo de verão quente.\n[…]\nVolgograd está geminada com as seguintes cidades:\n[…]\nA cidade de Volgogrado é a sede do Estádio Central e do FC Rotor Volgogrado, que participa do Campeonato Russo de Futebol. Outro clube da cidade foi o FC Volgogrado, e o FC Olímpia Volgogrado, que era mandante no Estádio Olímpia. Volgogrado foi uma das sedes da Copa do Mundo de 2018, com os seguintes jogos, todos na 1a Fase:Copa do Mundo FIFA de 2018"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Noite dos Cristais",
      "descricao": "Onda de ataques organizados pelos nazistas contra judeus, suas lojas e sinagogas na Alemanha e na Áustria, em novembro de 1938."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os ataques nazistas a lojas e sinagogas judaicas em novembro de 1938 ganharam que nome, por causa dos cacos de vitrines espalhados nas ruas?",
    "resposta": "Noite dos Cristais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kristallnacht"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kristallnacht",
        "situacao": "ok",
        "texto": "Kristallnacht (German: [kʁɪsˈtalnaχt] ; lit. 'crystal night') or the Night of Broken Glass, also called the November pogrom(s) (German: Novemberpogrome [noˈvɛm.bɐ.poˌɡʁoːmə] ), was a pogrom against Jews carried out by the Nazi Party's Sturmabteilung (SA) and Schutzstaffel (SS) paramilitary forces along with some participation from the Hitler Youth and German civilians throughout Nazi Germany on 9–\n[…]\nWhile November 1938 predated the overt articulation of \"the Final Solution\", it foreshadowed the genocide to come. Around the time of Kristallnacht, the SS newspaper Das Schwarze Korps called for a \"destruction by swords and flames.\" At a conference on the day after the pogrom, Hermann Göring said: \"The Jewish problem will reach its solution if, in anytime soon, we will be drawn into war beyond our border—then it is obvious that we will have to manage a final account with the Jews.\"\n[…]\nOn 9 November 2024, the Kristallnacht anniversary, the only glatt kosher restaurant in Washington, D.C. had its windows smashed.\n[…]\nSteinweis, Alan E. (2009). Kristallnacht 1938. Cambridge, Mass: Belknap Press of Harvard University Press. ISBN 978-0-674-03623-9.\n[…]\nLevitt, Ruth, ed. (2015). Pogrom November 1938: testimonies from 'Kristallnacht'. London: Souvenir Press/Wiener Holocaust Library. ISBN 978-0-285-64307-9.\n[…]\nMedia related to Kristallnacht at Wikimedia Commons\n[…]\nThe November Pogrom (\"Kristallnacht\") Yad Vashem, World Holocaust Remembrance Center\n[…]\n\"Kristallnacht: A Nationwide Pogrom, November 9–10, 1938\". Holocaust Encyclopedia. US Holocaust Memorial Museum. Retrieved 20 May 2008.\n[…]\n\"Kristallnacht: The November 1938 Pogroms\". Online exhibitions, special topics. US Holocaust Memorial Museum. Archived from the original on 17 May 2008. Retrieved 20 May 2008.\n[…]\nUC San Diego, Holocaust Living History Collection: Kristallnacht on Film: From Reportage to Reenactments, 1938-1988 – with Lawrence Baron. 5 November 2020."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Noite_dos_Cristais",
        "situacao": "ok",
        "texto": "Kristallnacht (pronúncia em alemão: [kʁɪsˈtalnaχt]), Reichskristallnacht [ˌʁaɪçs.kʁɪsˈtalnaχt], Reichspogromnacht [ˌʁaɪçs.poˈɡʁoːmnaχt], Pogromnacht [poˈɡʁoːmnaχt] () ou Novemberpogrome [noˈvɛmbɐpoɡʁoːmə] (), designada em português por Noite dos Cristais, Noite de Cristal ou Noite de Cristal do Reich, foi um pogrom contra os judeus promovido pela Alemanha Nazi na noite de 9–10 de novembro de 1938,\n[…]\nAs autoridades alemãs olharam para o acontecimento sem, no entanto, intervir. O nome Kristallnacht deve-se aos milhões de pedaços de vidro partidos que encheram as ruas depois das janelas das lojas, edifícios e sinagogas judaicas terem sido partidas.\n[…]\nO pretexto para os ataques foi o assassinato do diplomata alemão Ernst vom Rath por Herschel Grynszpan, um polaco judeu nascido na Alemanha a viver em Paris. À Noite de Cristal seguiram-se perseguições económicas e políticas aos judeus, vistas pelos historiadores como uma parte da mais abrangente política racial da Alemanha nazi, e o início da Solução Final e do Holocausto.\n[…]\nNa chamada Polenaktion, mais de 12 000 judeus polacos, entre os quais o filósofo e teólogo rabi Abraham Joshua Heschel, e o futuro crítico literário Marcel Reich-Ranicki, foram expulsos da Alemanha em 28 de outubro de 1938, por ordem de Hitler. Receberam ordens para abandonar as suas casas nessa mesma noite, e apenas tinham direito a levar uma mala por pessoa para levar os seus pertences.\n[…]\nErnst vom Rath morreu dos ferimentos a 9 de novembro. As notícias da sua morte chegaram a Hitler nessa noite enquanto jantava com elementos-chave do Partido Nazi num jantar comemorativo do Putsch da Cervejaria em 1923. Após intensas discussões, Hitler deixou o jantar repentinamente sem efectuar o seu discurso habitual. O ministro da Propaganda Joseph Goebbels fez esse discurso, em seu lugar, e disse que \"o Führer decidiu que...",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Plano Marshall",
      "descricao": "Programa dos Estados Unidos, iniciado em 1948, que financiou a reconstrução econômica da Europa ocidental após a Segunda Guerra Mundial."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O programa americano que financiou a reconstrução da Europa depois da guerra levou o nome de qual secretário de Estado?",
    "resposta": "George Marshall",
    "distratores": [
      "Harry Truman",
      "Cordell Hull",
      "Dean Acheson"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Marshall_Plan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marshall_Plan",
        "situacao": "ok",
        "texto": "The Marshall Plan (officially the European Recovery Program, ERP) was an American initiative enacted in 1948 to provide foreign aid to Western Europe. The United States transferred US$13.3 billion to 17 European countries (equivalent to $137 billion in 2025) in economic recovery programs to Western European economies after the end of World War II in Europe.\n[…]\nIn 1947, two years after the end of the war, industrialist Lewis H. Brown wrote, at the request of General Lucius D. Clay, A Report on Germany, which served as a detailed recommendation for the reconstruction of post-war Germany and served as a basis for the Marshall Plan. The initiative was named after United States secretary of state George C. Marshall.\n[…]\nThe plan had bipartisan support in Washington, where the Republicans controlled Congress and the Democrats controlled the White House with Harry S. Truman as president. Some businessmen feared the Marshall Plan, unsure whether reconstructing European economies and encouraging foreign competition was in the US' best interests. The plan was largely the creation of State Department officials, especially William L. Clayton and George F.\n[…]\nIn January 1947, Truman appointed retired General George Marshall as Secretary of State.\n[…]\nAfter the adjournment of the Moscow conference following six weeks of failed discussions with the Soviets regarding a potential German reconstruction, the United States concluded that a solution could not wait any longer. To clarify the American position, a major address by Secretary of State George Marshall was planned. Marshall gave the address at Harvard University on June 5, 1947. He offered American aid to promote European recovery and reconstruction.\n[…]\nGeorge C. Marshall Foundation\n[…]\nSpeech by George Marshall on June 5, 1947 at Harvard University (original recording); archive of the Österreichische Mediathek."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Plano_Marshall",
        "situacao": "ok",
        "texto": "O Plano Marshall (conhecido oficialmente como Programa de Recuperação Europeia) foi o principal plano dos Estados Unidos para a reconstrução dos países aliados da Europa nos anos seguintes à Segunda Guerra Mundial. A iniciativa recebeu o nome do Secretário de Estado dos Estados Unidos, George Marshall.\n[…]\nApesar de ter sido prometida, durante a guerra, que receberia ajuda financeira, a União Soviética recusou-se a participar do programa por medo de perder sua independência econômica; além disso, também bloqueou a possível participação de países da Europa Oriental, como a Alemanha Oriental, Checoslováquia, Hungria e Polônia. Os Estados Unidos forneceram programas de ajuda similares na Ásia, mas não faziam parte do Plano Marshall.\n[…]\nA tabela abaixo, cujas informações foram tiradas do livro The Marshall Plan Fifty Years Later, mostra a ajuda do Plano Marshall por país e ano (em milhões de dólares). Não existe um consenso claro sobre os valores exatos, já que diferentes estudiosos diferem em exatamente quais elementos da ajuda americana durante este período faziam parte do Plano.\n[…]\nO Plano Marshall resultou em um incrível crescimento econômico para os países europeus envolvidos e uma grande influência, fazendo os beneficiados terem dívidas em dólares para depois pagá-las. De 1948 a 1952, a Europa experimentou o período de máximo crescimento econômico de sua história. A produção industrial cresceu 35%, e a produção agrícola havia superado níveis dos anos pré-guerra.\n[…]\nCOMECON (resposta soviética ao Plano Marshall)\n[…]\n1947: É anunciado o Plano Marshall\": artigo do jornal Deutsche Welle\n[…]\nIdealizador do Plano Marshall morreu em 1959: George Catlett Marshall ganhou o Nobel da Paz de 1953 pela criação do plano que ajudou a reconstruir a Europa no pós-guerra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Kamikaze",
      "descricao": "Pilotos japoneses que, no fim da Segunda Guerra, lançavam seus aviões carregados de explosivos contra navios aliados."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Kamikaze significa vento divino, uma referência aos tufões que, no século treze, destruíram as frotas de qual povo que tentou invadir o Japão?",
    "resposta": "Mongóis",
    "distratores": [
      "Russos",
      "Portugueses",
      "Holandeses"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kamikaze"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kamikaze",
        "situacao": "ok",
        "texto": "Kamikaze (神風; pronounced [kamiꜜkaze]; 'divine wind' or 'spirit wind'), officially Shinpū Tokubetsu Kōgekitai (神風特別攻撃隊; 'Divine Wind Special Attack Unit'), were a part of the Japanese Special Attack Units of military aviators who flew suicide attacks for the Empire of Japan against Allied naval vessels in the closing stages of the Pacific campaign of World War II, intending to destroy warships more\n[…]\nAs the end of the war approached, the Allies did not suffer more serious significant losses, despite having far more ships and facing a greater intensity of kamikaze attacks. Although causing some of the heaviest casualties on US carriers in 1945 (particularly as Bunker Hill was unlucky to be hit with fueled and armed aircraft on deck), the IJN had sacrificed 2,525 kamikaze pilots and the IJAAF 1,387 –  without successfully sinking any fleet carriers, cruisers, or battleships.\n[…]\nSaigo no Tokkōtai (最後の特攻隊, The Last Kamikaze in English), released in 1970, produced by Toei, directed by Junya Sato and starring Kōji Tsuruta, Ken Takakura and Shinichi Chiba\n[…]\nHoyt, Edwin P. (1993). The Last Kamikaze. Praeger. ISBN 0275940675.\n[…]\nOhnuki-Tierney, Emiko (2002). Kamikaze, Cherry Blossoms, and Nationalisms: The Militarization of Aesthetics in Japanese History. University of Chicago Press. ISBN 978-0226620916.\n[…]\nRielly, Robin L. (2010). Kamikaze Attacks of World War II: A Complete History of Japanese Suicide Strikes on American Ships, by Aircraft and Other Means. McFarland. ISBN 978-0786446544.\n[…]\nStern, Robert (2010). Fire from the Sky: Surviving the Kamikaze Threat. Naval Institute Press. ISBN 978-1591142676.\n[…]\nWragg, David (2011). \"10. Kamikaze\". The Pacific Naval War, 1941–1945. Pen & Sword Maritime. pp. 143–154. ISBN 978-1848842830.\n[…]\nKamikaze Images\n[…]\nExcerpt from Kamikaze Diaries\n[…]\nAn ex-kamikaze pilot creates a new world\n[…]\nWorld War II Database: Kamikaze Doctrine\n[…]\nWhat motivated the Kamikazes? on WW2History.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kamikaze",
        "situacao": "ok",
        "texto": "Kamikaze ou, em português, camicase (do japonês: 神風, kami significando \"deus\" e kaze, \"vento\", comumente traduzido como \"vento divino\") eram os pilotos de aviões japoneses carregados de explosivos cuja missão era realizar ataques suicidas contra navios dos Aliados nos momentos finais da campanha do Pacífico na Segunda Guerra Mundial.\n[…]\nDesde então, a palavra kamikaze (em português, camicase) passou a ser usada em diferentes línguas como metáfora para pessoas, ações ou práticas potencialmente suicidas, inclusive em sentido figurado.\n[…]\nO nome oficial dos camicases originais era Tokubetsu Kōgekitai (Unidade de Ataque Especial), também conhecidos pela abreviação Tokkōtai ou Tokkō. As unidades da marinha eram chamadas de Shinpu Tokubetsu Kõgekitai (Unidade de Ataque Especial Vento Divino), em alusão a tempestades que salvaram o Japão do ataque mongol em duas ocasiões (1247 e 1281), portanto os pilotos suicidas iriam salvar novamente o Japão de novos mongóis: os estadunidenses. O termo \"kamikaze\" já era usado pelos americanos.\n[…]\nMas não irei morrer pelo imperador ou pelo Império Japonês. Vou morrer por minha amada esposa. Se o Japão perder ela pode acabar estuprada pelos norte-americanos. Estou morrendo por quem mais amo, para protegê-la\". Os kamikazes foram considerados pela religião xintoísta oficial do Estado, espíritos guardiões da pátria.\n[…]\nA invasão não ocorreu, mas de fato o planejamento de ataque suicida poderia ter dado certo, pois os aviões partiriam de um distância mais próxima e os modelos Yokosuka MXY-7 Ohka movidos a jato em vez de foguete podiam decolar na terra e tinham maior autonomia. Os aliados por sua vez ameaçaram o Japão de \"completa e total destruição\" caso não se rendessem, conforme firmado na Declaração de Potsdam entre Estados Unidos, Grã-Bretanha e China.\n[…]\n«Sentai Kamikaze Brasil»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Little Boy",
      "descricao": "Bomba atômica de urânio lançada pelos Estados Unidos sobre Hiroshima em 6 de agosto de 1945."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Que apelido em inglês recebeu a bomba atômica lançada sobre Hiroshima?",
    "resposta": "Little Boy",
    "distratores": [
      "Fat Man",
      "Thin Man",
      "Gadget"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Little_Boy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Little_Boy",
        "situacao": "ok",
        "texto": "Little Boy was a type of atomic bomb created by the Manhattan Project during World War II. The name is also often used to describe the specific bomb (L-11) used in the bombing of the Japanese city of Hiroshima by the Boeing B-29 Superfortress Enola Gay on 6 August 1945, making it the first nuclear weapon used in warfare, and the second nuclear explosion in history, after the Trinity nuclear test.\n[…]\nAlthough all of its components had been individually tested, no full test of a gun-type nuclear weapon occurred before the Little Boy was dropped over Hiroshima. The only test explosion of a nuclear weapon concept had been of an implosion-type device employing plutonium as its fissile material, which took place on 16 July 1945 at the Trinity nuclear test. There were several reasons for not testing a Little Boy type of device. Primarily, there was the issue of fissile material availability.\n[…]\nAfter being selected in April 1945, Hiroshima was spared conventional bombing to serve as a pristine target, where the effects of a nuclear bomb on an undamaged city could be observed. While damage could be studied later, the energy yield of the untested Little Boy design could be determined only at the moment of detonation, using instruments dropped by parachute from a plane flying in formation with the one that dropped the bomb.\n[…]\nThe blast from a nuclear bomb is the result of X-ray-heated air (the fireball) sending a shock wave or pressure wave in all directions, initially at a velocity greater than the speed of sound, analogous to thunder generated by lightning. Knowledge about urban blast destruction is based largely on studies of Little Boy at Hiroshima.\n[…]\nLittle Boy 3D Model\n[…]\nHiroshima & Nagasaki Remembered information about preparation and dropping the Little Boy bomb\n[…]\nLittle boy Nuclear Bomb at Imperial War museum London UK (JPEG)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Little_Boy",
        "situacao": "ok",
        "texto": "Little Boy (\"menininho\", em português) é o código da bomba atômica lançada sobre Hiroshima, no Japão, em 6 de agosto de 1945, segunda-feira, ao término da Segunda Guerra Mundial.\n[…]\nA Little Boy tinha 3 metros em comprimento, 71 centímetros de largura e massa de aproximadamente 4 400 quilos. O projeto tinha um mecanismo igual ao de uma arma para explodir uma massa de urânio-235 e três anéis de U-235, iniciando uma reação nuclear em cadeia. Continha 65 quilos de U-235. O urânio foi enriquecido nas enormes fábricas de Oak Ridge, no Tennessee, durante o Projeto Manhattan.\n[…]\nCavidade para receber o cilindro de boro de segurança.\n[…]\nA bomba foi lançada sobre Hiroshima aproximadamente às 08:15 (horário local) em 6 de agosto de 1945, levando 44,4 segundos para cair, detonando a uma altitude de um pouco mais de 600 metros. Embora menos potente que a Fat Man, que foi lançada sobre Nagasaki, os danos e o número de vítimas em Hiroshima foram muito maiores, pois a cidade estava em um terreno plano, enquanto o hipocentro de Nagasaki ficava em um pequeno vale.\n[…]\nComo a bomba detonou no ar, a onda de choque foi orientada mais na vertical (de cima para baixo) do que na horizontal, fator largamente responsável pela sobrevivência do que é hoje conhecido por \"Cúpula Genbaku\", ou \"Cúpula da Bomba Atómica\", projectada e construída pelo arquiteto checo Jan Letzel, a qual estava a apenas a 150 m do hipocentro da explosão.\n[…]\nA ruína foi chamada de Memorial da Paz de Hiroshima e foi tornada Património Mundial pela UNESCO em 1996, decisão que enfrentou objecções por parte dos Estados Unidos e da China.\n[…]\nBombardeamentos atômicos de Hiroshima e Nagasaki",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Blitzkrieg",
      "descricao": "Tática militar alemã de ataques rápidos e concentrados com tanques e aviões, usada no início da Segunda Guerra Mundial."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A tática alemã de ataques rápidos com tanques e aviões ficou conhecida como Blitzkrieg. O que essa palavra significa?",
    "resposta": "Guerra-relâmpago",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blitzkrieg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blitzkrieg",
        "situacao": "ok",
        "texto": "Blitzkrieg (lit. 'Lightning Warfare') is a German term used to describe a combined arms surprise attack, using a rapid, overwhelming force concentration that may consist of armored and motorized or mechanized infantry formations, together with artillery, air assault, and close air support.\n[…]\nIt was Rommel who created the new archetype of Blitzkrieg by leading his division far ahead of flanking divisions. MacGregor and Williamson remark that Rommel's version of blitzkrieg displayed a significantly better understanding of combined-arms warfare than that of Guderian. General Hermann Hoth submitted an official report in July 1940 which declared that Rommel had \"explored new paths in the command of Panzer divisions\".\n[…]\nOvery presents that as evidence that a \"blitzkrieg economy\" did not exist.\n[…]\nHeinz Guderian is widely regarded as being highly influential in developing the military methods of warfare used by Germany's tank men at the start of the Second World War. That style of warfare brought the maneuver back to the fore and placed an emphasis on the offensive. Along with the shockingly-rapid collapse in the armies that opposed it, that came to be branded as blitzkrieg warfare.\n[…]\nAirLand Battle, blitzkrieg-like doctrine of US Army in 1980s\n[…]\nDeep Battle, Soviet Red Army Military Doctrine from the 1930s often confused with blitzkrieg.\n[…]\nFanning, William Jr. (April 1997). \"The Origin of the term \"Blitzkrieg\": Another View\". Journal of Military History. 61 (2): 283–302. doi:10.2307/2953968. ISSN 0899-3718. JSTOR 2953968.\n[…]\nHarris, John Paul (November 1995). \"The Myth of Blitzkrieg\". War in History. II: 335–352. doi:10.1177/096834459500200306. ISSN 0968-3445. S2CID 159933010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Blitzkrieg",
        "situacao": "ok",
        "texto": "A Blitzkrieg (ou \"guerra-relâmpago\") é uma palavra usada para descrever um ataque surpresa de armas combinadas, utilizando uma força concentrada e rápida, que pode consistir de formações blindadas e de infantaria motorizada ou mecanizada; juntamente com artilharia, assalto aéreo e apoio aéreo aproximado; com o objetivo de romper as linhas de defesa do oponente, desestabilizar os defensores, desequ\n[…]\nDurante o período entre guerras, as tecnologias de aeronaves e tanques amadureceram e foram combinadas com a aplicação sistemática da tradicional tática alemã de Bewegungskrieg (guerra de movimento): penetrações profundas e cerco de pontos fortes inimigos para cercar e destruir as forças inimigas em uma Kesselschlacht (batalha de caldeirão/batalha de cerco). Durante a invasão da Polônia, jornalistas ocidentais adotaram o termo blitzkrieg para descrever essa forma de guerra blindada.\n[…]\nO termo havia aparecido em 1935, na publicação militar alemã Deutsche Wehr (\"Defesa Alemã\"), em conexão com uma guerra rápida ou relâmpago.\n[…]\nNo entanto, essa táctica começou a mostrar seus limites a partir de 1942. Na realidade, a guerra-relâmpago só era aplicável com êxito em espaços de operação reduzidos e de curta duração.\n[…]\nDepois da Segunda Guerra Mundial, e particularmente durante o período da Guerra Fria, os comandos militares temiam uma invasão de tipo \"blitzkrieg\", quer pelo Pacto de Varsóvia quer por parte da OTAN (NATO).\n[…]\nA origem do termo \"blitzkrieg\" é controversa e debatível. Se realmente existiu como doutrina militar, foi parte da estratégia de guerra alemã desenvolvida entre os anos de 1933 e 1939. Mas, para muitos historiadores, há dúvidas contundentes de que se a blitzkrieg era de fato uma estratégia militar coerente empregada ou resultado de decisões táticas feitas no momento, trabalhadas em cima de táticas militares concebida antes mesmo da Segunda Grande Guerra começar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Foguete V-2",
      "descricao": "Míssil balístico desenvolvido pela Alemanha nazista e usado contra Londres e Antuérpia a partir de 1944."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O míssil nazista V-2 e o foguete Saturno V, que levou astronautas à Lua, foram desenvolvidos sob a liderança do mesmo engenheiro alemão. Quem?",
    "resposta": "Wernher von Braun",
    "fonte": [
      "https://en.wikipedia.org/wiki/V-2_rocket",
      "https://en.wikipedia.org/wiki/Wernher_von_Braun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/V-2_rocket",
        "situacao": "ok",
        "texto": "The V-2 rocket (German: Vergeltungswaffe 2, lit. 'Vengeance Weapon 2'), with the development name Aggregat-4 (A4), was the world's first practical, modern ballistic missile and suborbital launch vehicle. The missile, powered by a liquid-propellant rocket engine, was developed during the Second World War in Nazi Germany as a \"vengeance weapon\" and assigned to attack Allied cities as retaliation for\n[…]\nResearch of military use of long-range rockets began when the graduate studies of Wernher von Braun were noticed by the German Army. A series of prototypes culminated in the A4, which went to war as the V-2. Beginning in September 1944, more than 3,000 V-2s were launched by the Wehrmacht against Allied targets, first London and later Antwerp and Liège.\n[…]\nDuring the late 1920s, a young Wernher von Braun bought a copy of Hermann Oberth's book, Die Rakete zu den Planetenräumen (The Rocket into Interplanetary Spaces). In 1928 a Raketenrummel or \"Rocket Rumble\" fad in the popular media was initiated by Fritz von Opel and Max Valier, a collaborator of Oberth, by experimenting with rockets, including public demonstrations of manned rocket cars and rocket planes. The \"Rocket Rumble\" was highly influential on von Braun as a teenage space enthusiast.\n[…]\nOn 8 January 1943, Dornberger and von Braun met with Speer. Speer stated, \"As head of the Todt organisation I will take it on myself to start at once with the building of the launching site on the Channel coast,\" and established an A-4 production committee under Degenkolb.\n[…]\nAt the end of the war, a competition began between the United States and the USSR to retrieve as many V-2 rockets and staff as possible. Three hundred rail-car loads of V-2s and parts were captured and shipped to the United States and 126 of the principal designers, including Wernher von Braun and Walter Dornberger, were captives of the Americans.\n[…]\nComplete missiles"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wernher_von_Braun",
        "situacao": "ok",
        "texto": "Wernher Magnus Maximilian Freiherr von Braun (US:  VUR-nər von BROWN; German: [ˈvɛʁnheːɐ̯ fɔn ˈbʁaʊn]; 23 March 1912 – 16 June 1977) was a German American aerospace engineer and space architect. He led the development of German rocket technology in World War II, during which time he became a member of the Nazi Party and later the Allgemeine SS. Following the war, he relocated to the United States,\n[…]\nVon Braun and several members of the engineering team, including Dornberger, made it to Austria. On 2 May 1945, upon finding an American private from the U.S. 44th Infantry Division, von Braun's brother and fellow rocket engineer, Magnus, approached the soldier on a bicycle, calling out in broken English: \"My name is Magnus von Braun. My brother invented the V-2. We want to surrender.\" After the surrender, Wernher von Braun spoke to the press:\n[…]\nWernher von Braun – Rocket Man for War and Peace - A three-part (part1, part 2, part 3) documentary – in English – from the German International channel DW-TV. Original German version Wernher von Braun – Der Mann für die Wunderwaffen by the Mitteldeutscher Rundfunk. Played by Ludwig Blochberger.\n[…]\nA starship in System Shock 2 was named the Von Braun\n[…]\nWernher von Braun page – Marshall Space Flight Center (MSFC) History Office (archived)\n[…]\nCoat-of-arms of Wernher von Braun\n[…]\n\"The Conquest of Space : A Conversation Between Wernher von Braun and Willy Ley \" audio (86 minutes) recorded in 1959 (issued as vinyl records). National Space Centre Collections Online (UK)\n[…]\nCIA documents on Wernher von Braun at the Internet Archive\n[…]\nWernher von Braun at the Internet Speculative Fiction Database\n[…]\nWernher von Braun Collection, The University of Alabama in Huntsville Archives and Special Collections\n[…]\nDorette Schlidt Collection, The University of Alabama in Huntsville Archives and Special Collections Files of Dorette Schlidt, Wernher von Braun's first secretary."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/V-2",
        "situacao": "ok",
        "texto": "O foguete V2 (sigla em alemão para \"Vergeltungswaffe 2\", \"Arma de vingança 2\"), ou simplesmente V2 (cujo codinome alemão original era A4), foi o primeiro míssil balístico guiado de longo alcance da história, tendo sido usado pela Alemanha Nazista durante as últimas fases da Segunda Guerra Mundial principalmente contra alvos britânicos e belgas como uma \"arma de vingança\" e designado para atacar ci\n[…]\nA pesquisa sobre o uso militar de foguetes de longo alcance começou quando os estudos de pós-graduação de Wernher von Braun atraíram a atenção da Wehrmacht. Uma série de protótipos culminou no \"A-4\", que foi para a guerra identificado como \"V-2\". A partir de setembro de 1944, mais de 3 000 V-2 foram lançados pela Wehrmacht contra alvos aliados, primeiro Londres e depois Antuérpia e Liège.\n[…]\nO engenheiro mecânico alemão Wernher von Braun foi, ao lado de Arthur Rudolph, Kurt H. Debus e outros, um de seus principais desenvolvedores na estação experimental do exército alemão de Peenemünde. O verdadeiro nome do foguete era Aggregat-4 (A-4), mas ele ficou mais conhecido pelo nome Vergeltungswaffe 2 (Arma de Vingança 2, parte das Armas-V), dado pelo então ministro da propaganda Joseph Goebbels, já que as V2 eram lançadas como represália aos bombardeios aliados.\n[…]\nNo final da década de 1920, o jovem Wernher von Braun comprou uma cópia do livro de Hermann Oberth, \"Die Rakete zu den Planetenräumen\" (\"O Foguete nos Espaços Interplanetários\").\n[…]\nEm 1944, Wernher von Braun foi detido pelos nazistas por supostamente ter declarado que as V2 não haviam sido destinadas ao uso militar, mas sim para as futuras viagens espaciais. Tendo dito ou não, von Braun estava certo, e a V2 deixou sua influência permanente no desenvolvimento dos futuros foguetes que seriam usados na exploração espacial.\n[…]\nTracy Dungan: V-2: A Combat History of the First Ballistic Missile. Westholme Publishing 2005, ISBN 1-59416-012-0",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Charles de Gaulle",
      "descricao": "General francês que liderou a França Livre a partir de Londres na Segunda Guerra e depois presidiu a França."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que general, líder da França Livre que convocava a resistência pelo rádio de Londres, dá nome ao maior aeroporto de Paris?",
    "resposta": "Charles de Gaulle",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_de_Gaulle",
      "https://en.wikipedia.org/wiki/Charles_de_Gaulle_Airport"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_de_Gaulle",
        "situacao": "ok",
        "texto": "Charles André Joseph Marie de Gaulle (22 November 1890 – 9 November 1970) was a French general and statesman who led the Free French Forces against Nazi Germany and its puppet state of Vichy France in World War II and chaired the Provisional Government of the French Republic from 1944 to 1946 to restore democracy in France. Following the 1958 Algiers putsch, he came out of retirement at the reques\n[…]\nFrench political parties and leaders claim a Gaullist legacy; streets and monuments in France and other parts of the world were dedicated in honour of him after his death, such as the Paris Charles de Gaulle Airport in Paris, France.\n[…]\nMitterrand, who once wrote a vitriolic critique of him called the \"Permanent Coup d'État\", quoted a recent opinion poll, saying, \"As General de Gaulle, he has entered the pantheon of great national heroes, where he ranks ahead of Napoleon and behind only Charlemagne.\" Under the influence of Jean-Pierre Chevènement, the leader of CERES (the left-wing and sovereignist faction of the Socialist Party), Mitterrand had, except on certain economic and social policies, rallied to much of Gaullism.\n[…]\nA number of monuments have been built to commemorate de Gaulle. France's largest airport, located in Roissy, outside Paris, is named Charles de Gaulle Airport. France's flagship nuclear-powered aircraft carrier is also named after him.\n[…]\nFenby, Jonathan, The General: Charles de Gaulle and the France He Saved. (2011). Simon & Schuster. ISBN 9781847394101\n[…]\nWilliams, Charles. The Last Great Frenchman: A Life of General De Gaulle (1997), 560pp. excerpt and text search\n[…]\nCogan, Charles G. \"The Break-up: General de Gaulle's Separation from Power,\" Journal of Contemporary History Vol. 27, No. 1 (Jan. 1992), pp. 167–199, re: 1969 . JSTOR 260783.\n[…]\nMémorial Charles de Gaulle\n[…]\nNewspaper clippings about Charles de Gaulle in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Charles_de_Gaulle_Airport",
        "situacao": "ok",
        "texto": "Paris Charles de Gaulle Airport (IATA: CDG, ICAO: LFPG), also known as Roissy Airport, is the primary international airport serving Paris, the capital of France. The airport opened in 1974 and is located in Roissy-en-France, 23 km (14 mi) northeast of the city centre of Paris. It is named after World War II leader and French president Charles de Gaulle, whose initials form its IATA airport code. I\n[…]\nCharles de Gaulle Airport serves as the principal hub for Air France, as well as an operating base for easyJet. It is operated by Groupe ADP (Aéroports de Paris) under the brand Paris Aéroport.\n[…]\nManagement of the airport lies solely on the authority of Groupe ADP, which also manages Orly (south of Paris), Le Bourget (to the immediate southwest of Charles de Gaulle Airport, now used for general aviation and Paris Air Shows), several smaller airfields in the suburbs of Paris, and other airports directly or indirectly worldwide.\n[…]\nDuring most times, there are two types of services that operate on the RER B between Charles de Gaulle airport and Paris:\n[…]\nBlaBlaCar Bus and Flixbus all offer services to international and domestic destinations from the bus station outside of the Aéroport Charles de Gaulle 1 RER station.\n[…]\nCharles de Gaulle Airport is directly connected to Autoroute A1 which connects Paris and Lille.\n[…]\nOn 6 January 1993, Lufthansa Flight 5634 from Bremen to Paris, which was carried out under the Lufthansa CityLine brand using a Contact Air Dash 8–300 (registered D-BEAT), hit the ground 1,800 metres (5,900 ft) short of the runway of Charles de Gaulle Airport, resulting in the death of four out of the 23 passengers on board. The four crew members survived.\n[…]\nMedia related to Paris-Charles de Gaulle Airport at Wikimedia Commons\n[…]\nParis Charles de Gaulle Airport travel guide from Wikivoyage\n[…]\nParis-Charles de Gaulle Airport aviation weather (in Spanish, English, French, and Chinese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_de_Gaulle",
        "situacao": "ok",
        "texto": "Charles André Joseph Marie de Gaulle (francês: [ʃaʁl də ɡol] (), Lille, 22 de novembro de 1890 – Colombey-les-Deux-Églises, 9 de novembro de 1970) foi um general, político e estadista francês que liderou as Forças Francesas Livres durante a Segunda Guerra Mundial e presidiu o Governo Provisório da República Francesa de 1944 a 1946, a fim de restabelecer a democracia na França.\n[…]\nComo presidente, Charles de Gaulle pôs fim ao caos político que precedeu o seu regresso ao poder. Durante seu governo, promoveu o controle da inflação e instituiu uma nova moeda em janeiro de 1960. Também fomentou o crescimento industrial. Apesar de ter apoiado inicialmente o domínio francês sobre a Argélia, decidiu mais tarde conceder a independência àquele país, encerrando uma guerra cara e impopular.\n[…]\nCharles De Gaulle foi alvo de três atentados confirmados, todos falhados. O primeiro ocorreu em Paris, no ano de 1945, por atiradores furtivos alemães. Outro em 8 de setembro de 1961, organizado por Raoul Salan, uma bomba fabricada com explosivo plástico explodiu perto de seu carro.\n[…]\nDe acordo com uma pesquisa de 2005, realizada no contexto do décimo aniversário da morte de François Mitterrand, 35 por cento dos entrevistados disseram que Mitterrand foi o melhor presidente francês de todos os tempos, seguido por Charles de Gaulle (30 por cento) e Jacques Chirac (12 por cento). Outra pesquisa da BVA quatro anos depois mostrou que 87% dos franceses consideravam sua presidência positivamente.\n[…]\nVários monumentos foram construídos para comemorar de Gaulle. O maior aeroporto da França, localizado em Roissy, nos arredores de Paris, é chamado Aeroporto Charles de Gaulle. O porta-aviões de propulsão nuclear da França também leva seu nome.\n[…]\nHistória da França\n[…]\nPraça Charles de Gaulle\n[…]\nFundação Charles de Gaulle. (em francês)\n[…]\nCírculo de Estudos Charles de Gaulle. (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Humberto de Alencar Castelo Branco",
      "descricao": "Militar brasileiro, oficial da FEB na Itália, que foi o primeiro presidente do regime militar, de 1964 a 1967."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que militar, oficial da Força Expedicionária Brasileira na Itália, tornou-se em 1964 o primeiro presidente do regime militar brasileiro?",
    "resposta": "Castelo Branco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Humberto_de_Alencar_Castelo_Branco"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Humberto_de_Alencar_Castelo_Branco",
        "situacao": "ok",
        "texto": "Humberto de Alencar Castelo Branco (Fortaleza, 20 de setembro de 1897 – Fortaleza, 18 de julho de 1967) foi um militar e político brasileiro. Foi 26.º presidente do Brasil, entre 1964 e 1967.\n[…]\nFoi promovido a tenente-coronel em 1943 e cursou a Escola de Comando e Estado-maior dos Estados Unidos. Em seguida, foi chefe da 3a. Seção (Operações) da Força Expedicionária Brasileira (FEB) durante a Segunda Guerra Mundial, na Itália, permanecendo durante trezentos dias nos campos de batalha. Enviou sessenta cartas à sua esposa Argentina Viana Castelo Branco e a seus dois filhos.\n[…]\nCastelo Branco havia combatido o fascismo na Itália. O clima político, em 1964, no Brasil, era instável, representado pela alegada \"fraqueza\" (considerada pelos militares como \"inegável\") de João Goulart. O jornal carioca Correio da Manhã colocara, em sua primeira página, três editoriais seguidos, com os seguintes títulos: \"Chega!\", \"Basta!\", \"Fora!\", contra João Goulart, nos três dias que antecederam o golpe que instituiria a futura ditadura militar.\n[…]\nEm 1963, Castelo Branco foi nomeado chefe do Estado-Maior do Exército pelo então presidente da República João Goulart e foi o principal líder militar do Golpe Militar de 1964, que o deporia em 31 de março daquele ano.\n[…]\nEm 2025, a Universidade Federal do Espírito Santo (UFES) cassou os títulos de Doutor Honoris Causa concedidos aos ex-presidentes da ditadura militar Emílio Garrastazu Médici e Humberto de Alencar Castelo Branco, e ao ministro da Educação no governo João Batista Figueiredo, Rubem Carlos Ludwig.\n[…]\nHumberto De Alencar Castello Branco 1967. Mensagem ao Congresso Nacional em 1967. Visitado em 7 de dezembro de 2014."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Cerco de Leningrado",
      "descricao": "Bloqueio da cidade soviética de Leningrado pelas forças alemãs e finlandesas, de 1941 a 1944."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O cerco alemão a Leningrado, em que centenas de milhares de civis morreram de fome, durou cerca de quantos dias?",
    "resposta": "Cerca de 900 dias",
    "distratores": [
      "Cerca de 90 dias",
      "Cerca de 300 dias",
      "Cerca de 2000 dias"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Siege_of_Leningrad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Siege_of_Leningrad",
        "situacao": "ok",
        "texto": "The Siege of Leningrad was a military blockade undertaken by the Axis powers against the city of Leningrad (present-day Saint Petersburg) in the Soviet Union on the Eastern Front of World War II from 1941 to 1944. Leningrad, the country's second largest city, was besieged by Germany and Finland for 872 days, but never captured. The siege was the most destructive in history and possibly the most de\n[…]\nBy 8 September, German forces had largely surrounded the city, cutting off all supply routes to Leningrad and its suburbs. Unable to press home their offensive, and facing defences of the city organised by Marshal Zhukov, the Axis armies laid siege to the city for \"900 days and nights\".\n[…]\nThe exhibition soon turned into a full-scale State Memorial Museum of the Defence and Siege of Leningrad  (Государственный мемориальный музей обороны и блокады Ленинграда).\n[…]\nThe monument is a huge bronze ring with a gap in it, pointing toward the site where the Soviets eventually broke through the encircling German forces. In the centre a Russian mother cradles her dying soldier son. The monument has an inscription saying \"900 days 900 nights\". An exhibit underneath the monument contains artifacts from this period, such as journals.\n[…]\nClapperton, James. \"The siege of Leningrad as sacred narrative: conversations with survivors.\" Oral History (2007): 49–60. online Archived 6 November 2020 at the Wayback Machine, primary sources\n[…]\nJones, Michael. Leningrad: State of siege (Basic Books, 2008).\n[…]\nYarov, Sergey. Leningrad 1941–42: Morality in a City Under Siege (Polity Press, 2017) online review\n[…]\nDocumentary footage: Блокада / Siege of Leningrad (2006) on YouTube\n[…]\n\"In the vortex of congealed time\", by Oleg Yuriev. An overview of the literature of the siege of Leningrad.\n[…]\nRussian State Memorial Museum of Defence and Siege of Leningrad (in Russian)\n[…]\nThe Museum of the Siege of Leningrad at Google Arts & Culture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerco_a_Leninegrado",
        "situacao": "ok",
        "texto": "O Cerco a Leninegrado (português europeu) ou Cerco a Leningrado (português brasileiro) (em russo: блокада Ленинграда, blokada Leningrada) foi um cerco militar à então cidade de Leningrado (atualmente, São Petersburgo), na então União Soviética (atualmente, Rússia), pelas tropas da Alemanha Nazista, Itália e Finlândia durante a Segunda Guerra Mundial. Durou cerca de 872 dias, de 8 de Setembro de 19\n[…]\nA 2 de Setembro, as rações foram reduzidas: os trabalhadores tinham 600 gramas de pão por dia, crianças e dependentes 400 gramas. Um grande número de milho, farinha e açúcar foi eliminado a 8 de Setembro devido a falha de medidas de defesa aérea. Contudo, durante vários dias depois de o cerco começar, era possível comer em alguns restaurantes \"comerciais\" que utilizavam 10% de toda a carne que a cidade consumia.\n[…]\nMilho e farinha - para 35 dias;\n[…]\nMassa - para 30 dias;\n[…]\nCarne - para 33 dias;\n[…]\nGorduras - para 45 dias;\n[…]\nAçúcar - para 60 dias;\n[…]\nA 8 de setembro de 1941 a cidade já estava completamente cercada. Leningrado passou a ser bombardeada dia e noite, por artilharia e aviões. O alto comando alemão decidiu que a cidade seria vencida pela fome e cortou todos os acessos por terra. Os soviéticos fizeram poucas tentativas de romper o cerco por dentro, tendo que aguentar intensos bombardeios diários. Ainda assim, os russos não cederam.\n[…]\nNo geral, o cerco a Leningrado durou cerca de 872 dias e custou a vida de 1,5 milhão de pessoas (a maioria civis). A destruição e o número de fatalidades fez da batalha por Leningrado uma das mais sangrentas já travadas em uma cidade moderna. A fome foi uma das principais causas de mortes. Houve denúncias de que algumas pessoas praticaram canibalismo para sobreviver. O frio do inverno também era cruel. Em 1942, a temperatura chegou a −30 °C.\n[…]\nApesar de não terem rompido o cerco, conseguiram amenizar o bloqueio e fizeram passar suprimentos muito necessários.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Josephine Baker",
      "descricao": "Cantora e dançarina americana naturalizada francesa, estrela dos cabarés de Paris e agente da Resistência Francesa."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que cantora e dançarina nascida nos Estados Unidos, estrela dos cabarés de Paris, atuou como espiã da Resistência Francesa?",
    "resposta": "Josephine Baker",
    "fonte": [
      "https://en.wikipedia.org/wiki/Josephine_Baker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Josephine_Baker",
        "situacao": "ok",
        "texto": "Freda Josephine Baker (née McDonald; June 3, 1906 – April 12, 1975) was an American-born French dancer, singer, and actress, and a spy for the French Resistance. Her career was centered primarily in Europe, mostly in France. She was the first Black woman to star in a major motion picture, the 1927 French silent film Siren of the Tropics, directed by Mario Nalpas and Henri Étiévant.\n[…]\nIn 1926, Abatino established the first Chez Josephine cabaret at 40 Rue Fontaine, in Montmartre, Paris, as a gift to Baker.\n[…]\nIn 1936, she established a second \"Chez Josephine\" cabaret in New York City, the first of which Baker had invested her own money. \"Josephine Baker, the famous colored star who faintly shocked Paris with her daring stage appearances, is the owner of a supper-club in New York.\n[…]\nIt is called 'Chez Josephine Baker,' and on the opening night (25 February 1936), complete with paper snowballs, serpentine, and all the other weapons of all-night-club warfare, Josephine was handed a beribboned parcel that revealed a tiny snorting piglet in a crate\" (November 2, 1936). On December 17, 1948, a Chez Josephine cabaret opened in Paris. In 1986, Jean-Claude Baker opened Chez Josephine in New York City.\n[…]\nde la Cámara, Félix Achille; Abatino, Pepito; Baker, Josephine (1931). Mon sang dans tes veines: roman d'après une idée de Joséphine Baker (in French). Paris: Les editions Isis.\n[…]\nIn 1927, Alexander Calder created Josephine Baker (III), a wire sculpture of Baker, which is now displayed at the Museum of Modern Art. A nude portrait of Baker by Jean de Botton was the \"cynosure for all eyes\" when it was shown at the Salon d'Automne in Paris in 1931. When auctioned in Paris in 2021 the painting set a world record (EUR 179,200) for the artist. Henri Matisse created a mural-sized cut paper artwork titled La Négresse (1952–1953), possibly inspired by Baker.\n[…]\nJosephine Baker at AllMusic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Josephine_Baker",
        "situacao": "ok",
        "texto": "Josephine Baker, nome artístico de Freda Josephine McDonald, (Saint Louis, 3 de junho de 1906 — Paris, 12 de abril de 1975) foi uma cantora e dançarina norte-americana, naturalizada francesa em 1937, e conhecida pelos apelidos de Vênus Negra, Pérola Negra e ainda a Deusa Crioula. Vedete do teatro de revista, Josephine Baker é geralmente considerada como a primeira grande estrela negra das artes cê\n[…]\nFigura eminente da resistência francesa antinazista e da luta antirracista, Baker foi a primeira pessoa negra e a sexta mulher a ser sepultada no Panteão, em Paris.\n[…]\nJosephine Baker era filha de Carrie McDonald, e seu pai é incerto. Alguns biógrafos afirmam que seu pai seria Eddie Carson, que foi certamente amante de sua mãe, mas Josephine acreditava que seu pai teria sido um homem branco. O pai de Josephine, segundo a biografia oficial, era o ator Eddie Carson. Várias fontes, no entanto, afirmam que seu pai teria sido um vendedor ambulante de joias.\n[…]\nSuas apresentações ficaram memoráveis, dentre elas uma em que vestia uma saia feita de bananas. Por suas atuações no teatro de revista, foi contemporânea da grande vedete francesa Mistinguett. O charme de Mistinguett estava em sugerir nudez, exibindo as suas belíssimas pernas, ao passo que Josephine ia muito mais longe em matéria de nudez. Na verdade, eram duas formas de arte diferentes. Mistinguett era mais elitista enquanto Josephine era mais popular.\n[…]\nDurante a Segunda Guerra Mundial, teve um papel importante na resistência à ocupação, atuando como espiã. Depois da guerra, foi condecorada com a Cruz de Guerra das Forças Armadas Francesas e a Medalha da Resistência. Recebeu também, do presidente Charles de Gaulle, o grau de Cavaleiro da Legião de Honra.\n[…]\nChasing a Rainbow: The Life of Josephine Baker, um documentário britânico de 1986.\n[…]\nUOL Biografias: Josephine Baker\n[…]\nJosephine Baker no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Elizabeth II",
      "descricao": "Rainha do Reino Unido de 1952 a 2022, que serviu no Serviço Territorial Auxiliar no fim da Segunda Guerra."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que futura rainha britânica se alistou em 1945 e foi treinada como motorista e mecânica do exército?",
    "resposta": "Elizabeth II",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elizabeth_II"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elizabeth_II",
        "situacao": "ok",
        "texto": "Elizabeth II (Elizabeth Alexandra Mary; 21 April 1926 – 8 September 2022) was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states during her lifetime and was the monarch of 15 realms at her death. Her reign of 70 years and 214 days is the longest of any British monarch, the second-longest of any sovere\n[…]\nPhilip had retired from his official duties as Elizabeth's consort in August 2017.\n[…]\nOn 5 April, in a televised broadcast watched by an estimated 24 million viewers in the United Kingdom, Elizabeth asked people to \"take comfort that while we may have more still to endure, better days will return: we will be with our friends again; we will be with our families again; we will meet again.\" On 8 May, the 75th anniversary of VE Day, in a television broadcast at 9 pm—the exact time at which her father had broadcast to the nation on the same day in 1945—she asked people to \"never give up, never despair\".\n[…]\nPolls in Britain in 2006 and 2007 revealed strong support for the monarchy, and in 2012, Elizabeth's Diamond Jubilee year, her approval ratings hit 90 per cent.\n[…]\nElizabeth also possessed royal standards and personal flags for use in the United Kingdom, Canada, Australia, New Zealand, Jamaica, and elsewhere. Elizabeth approved her modified British arms on 26 May 1954.\n[…]\nDescendants of Elizabeth II\n[…]\nHousehold of Elizabeth II – Royal officials and supporting staff\n[…]\nList of jubilees of Elizabeth II\n[…]\nList of special addresses made by Elizabeth II\n[…]\nList of things named after Elizabeth II\n[…]\nQueen Elizabeth II at the Royal Family website\n[…]\nQueen Elizabeth II at the website of the Government of Canada\n[…]\nQueen Elizabeth II at the website of the Royal Collection Trust\n[…]\nPortraits of Queen Elizabeth II at the National Portrait Gallery, London\n[…]\nQueen Elizabeth II at IMDb\n[…]\nQueen Elizabeth II Digital Memorial"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Isabel_II_do_Reino_Unido",
        "situacao": "ok",
        "texto": "Isabel II (em inglês:  Elizabeth II), nascida Isabel Alexandra Maria (em inglês:  Elizabeth Alexandra Mary; Londres, 21 de abril de 1926 – Castelo de Balmoral, 8 de setembro de 2022) foi a Rainha do Reino Unido e dos Reinos da Comunidade de Nações de 6 de fevereiro de 1952 até a data de sua morte. Ela reinou em 32 Estados Soberanos Independentes durante a sua vida, 14 dos quais até à data da sua m\n[…]\nIsabel juntou-se ao Serviço Territorial Auxiliar em fevereiro de 1945 como segunda subalterna honorária, com o número de serviço 230 873. Treinou como motorista e mecânica, sendo promovida a comandante júnior honorária em julho.\n[…]\nA falta de um mecanismo formal dentro do Partido Conservador para escolher um líder significou que a rainha decidiria quem formaria um novo governo. Eden recomendou que ela consultasse lorde Robert Gascoyne-Cecil, 5.º Marquês de Salisbury e Lorde Presidente do Conselho. Lorde Salisbury e lorde David Maxwell Fyfe, 1.º Visconde Kilmuir e Lorde Chanceler, consultaram o gabinete britânico, Churchill e o presidente da oposição, fazendo com que Isabel nomeasse sua escolha: Harold Macmillan.\n[…]\nO príncipe Filipe morreu em 9 de abril de 2021, após 73 anos de casamento, tornando Isabel a primeira monarca britânica a reinar como viúva ou viúvo desde a rainha Vitória. Ela estaria ao lado da cama de seu marido quando ele morreu, e comentou em particular que sua morte \"deixou um enorme vazio\". Devido às restrições do COVID-19 em vigor na Inglaterra na época, Isabel sentou-se sozinha no funeral de Filipe, que evocou a simpatia de pessoas de todo o mundo.\n[…]\nO descontentamento com a monarquia alcançou o ponto mais alto com a morte de Diana, Princesa de Gales, embora a popularidade pessoal de Elizabeth — bem como o apoio geral à monarquia — tenha se recuperado após sua transmissão ao vivo pela televisão para o mundo cinco dias após a morte de Diana.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "1º Grupo de Aviação de Caça",
      "descricao": "Unidade de caça da Força Aérea Brasileira que combateu na Itália em 1944 e 1945, cujo grito de guerra era Senta a Pua."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que ave aparece no emblema do Primeiro Grupo de Aviação de Caça, os pilotos brasileiros que lutaram na Itália?",
    "resposta": "Avestruz",
    "distratores": [
      "Águia",
      "Gavião",
      "Falcão"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/1%C2%BA_Grupo_de_Avia%C3%A7%C3%A3o_de_Ca%C3%A7a"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/1%C2%BA_Grupo_de_Avia%C3%A7%C3%A3o_de_Ca%C3%A7a",
        "situacao": "ok",
        "texto": "O 1.º Grupo de Aviação de Caça (1.º GAvCa), ou simplesmente Jambock, muito conhecido na cultura popular pelo seu grito de guerra, Senta a Púa!, é o primeiro grupo de aviação de caça da Força Aérea Brasileira, notório por ter participado da Segunda Guerra Mundial na Campanha da Itália e na Campanha do Atlântico Sul. Foi criada pelo primeiro Ministro da Aeronáutica, Salgado Filho, pelo Major Nero Mo\n[…]\nNo ano de 1986 os feitos do 1.º Grupo de Aviação de Caça na Campanha da Itália foram reconhecidos mais uma vez, o 1.º GAvCa se tornou a terceira unidade que não pertence às Forças Armadas dos Estados Unidos a receber a Citação Presidencial de Unidade, em pedido do governo estadunidense por conta dos importantes avanços do grupo de caça brasileiro na Campanha da Itália; além da unidade brasileira, só outras duas unidades estrangeiras receberam tal honra, ambas da Real Força Aérea Australiana.\n[…]\nO emblemático símbolo do grupo foi criado pelo Capitão Fortunato Câmara de Oliveira no translado dos pilotos brasileiros dos Estados Unidos para a Itália a bordo do navio UST Colombie. O capitão criou o emblema pelos militares brasileiros comerem qualquer coisa no almoço durante a viagem, isso aconteceu por conta da maioria dos brasileiros não falarem inglês e sempre comerem a mesma coisa que os intérpretes.\n[…]\nAvestruz - velocidade e maneabilidade do avião de caça e o estômago dos pilotos, que aguentavam qualquer comida (referência à comida estrangeira norte-americana).\n[…]\nQuepe do avestruz - piloto da Força Aérea Brasileira\n[…]\nNero Moura - Comandante e fundador do 1.º Grupo de Aviação de Caça e patrono da aviação de caça no Brasil;\n[…]\nJosé Vicente Faria Lima - Membro fundador do 1.º Grupo de Aviação de Caça;\n[…]\nJoaquim Pedro Salgado Filho - Primeiro Ministro da Aeronáutica e membro fundador do 1.º Grupo de Aviação de Caça;\n[…]\n«O 1.º Grupo de Aviação de Caça na Campanha da Itália»"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Code talkers navajos",
      "descricao": "Fuzileiros navais americanos de origem navaja que transmitiam mensagens num código baseado em sua língua durante a guerra no Pacífico."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Imortalizados no filme Códigos de Guerra, os fuzileiros navais americanos no Pacífico enviavam mensagens num código baseado na língua de qual povo indígena?",
    "resposta": "Navajo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Code_talker",
      "https://en.wikipedia.org/wiki/Windtalkers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Code_talker",
        "situacao": "ok",
        "texto": "A code talker was a person employed by the military during wartime to use a little-known language as a means of secret communication. The term is most often used for United States service members during the World Wars who used their knowledge of Native American languages as a basis to transmit coded messages.\n[…]\nType two code was informal and directly translated from English into the Indigenous language. Code talkers used short, descriptive phrases if there was no corresponding word in the Indigenous language for the military word. For example, the Navajo did not have a word for submarine, so they translated it as iron fish.\n[…]\nDuring World War II, American soldiers used their native Tlingit as a code against Japanese forces. Their actions remained unknown, even after the declassification of code talkers and the publication of the Navajo code talkers. The memory of five deceased Tlingit code talkers was honored by the Alaska legislature in March 2019.\n[…]\nThe Code Talkers Recognition Act of 2008 (Public Law 110–420) was signed into law by President George W. Bush on November 15, 2008. The Act recognized every Native American code talker who served in the United States military during WWI or WWII (except the already-awarded Navajo) with a Congressional Gold Medal. Approximately 50 tribes were recognized. The act was designed to be distinct for each tribe, with silver duplicates awarded to the individual code talkers or their next-of-kin.\n[…]\nAaseng, Nathan. Navajo Code Talkers: America's Secret Weapon in World War II. New York: Walker & Company, 1992. ISBN 0802776272 OCLC 672012184\n[…]\nDurrett, Deanne. Unsung Heroes of World War II: The Story of the Navajo Code Talkers. Library of American Indian History, Facts on File, Inc., 1998. ISBN 0816036039 OCLC 38067688\n[…]\nOfficial website of the Navajo Code talkers"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Windtalkers",
        "situacao": "ok",
        "texto": "Windtalkers is a 2002 American war film directed and co-produced by John Woo, starring Nicolas Cage and Adam Beach, with Peter Stormare, Noah Emmerich, Mark Ruffalo, and Christian Slater in supporting roles. It is based on the real story of code talkers from the Navajo nation during World War II.\n[…]\nDuring World War II, US Marine corporal Joe Enders returns to active duty after surviving on the Solomon Islands against the Imperial Japanese Army that killed his entire squad and wounded his left ear. Enders and Sgt. Pete \"Ox\" Henderson receive new assignments to protect Navajo code talkers Pvt. Ben Yahzee and Pvt. Charlie Whitehorse in a JASCO.\n[…]\nYahzee and Whitehorse, childhood friends from the Navajo tribe, are trained to send and receive coded messages that direct artillery fire. Enders and Henderson are instructed to kill their code talkers if capture is imminent so the code cannot fall into enemy hands. Both Enders and Henderson resent their new assignments, and the Navajos also endure racial harassment by some of the white Marines, notably Private Chick.\n[…]\nThe film was criticized for featuring the Navajo characters only in supporting roles; they were not the primary focus of the film. The film was ranked number four on Careeraftermilitary.com's \"10 Most Inaccurate Military Movies Ever Made\" which also included The Patriot, The Hurt Locker, U-571, The Green Berets, Pearl Harbor, Battle of the Bulge, Red Tails, Enemy at the Gates and Flyboys on its list of falsified war movie productions.\n[…]\nCode talker\n[…]\n\"The Navajo Code Talkers\". The Natural American. Archived from the original on June 14, 2018. Retrieved March 18, 2014. (includes a dictionary of the code)\n[…]\n\"Navajo Code Talkers' Dictionary\". Naval History and Heritage Command. Archived from the original on July 3, 1998."
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
