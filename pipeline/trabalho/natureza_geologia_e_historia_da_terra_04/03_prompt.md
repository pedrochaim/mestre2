Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Geologia e História da Terra** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Escala Richter",
      "descricao": "Escala logarítmica de magnitude de terremotos, apresentada em 1935."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na escala Richter, cada ponto a mais de magnitude indica ondas sísmicas com amplitude quantas vezes maior?",
    "resposta": "Dez vezes",
    "distratores": [
      "Duas vezes",
      "Cem vezes",
      "Mil vezes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Richter_scale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Richter_scale",
        "situacao": "ok",
        "texto": "The Richter scale (), also called the Richter magnitude scale, Richter's magnitude scale, and the Gutenberg–Richter scale, is a measure of the strength of earthquakes, developed by Charles Richter in collaboration with Beno Gutenberg, and presented in Richter's landmark 1935 paper, where he called it the \"magnitude scale\". This was later revised and renamed the local magnitude scale, denoted as ML\n[…]\nseismic-wave amplitude.).\n[…]\nThe Richter magnitude of an earthquake is determined from the logarithm of the amplitude of waves recorded by seismographs. Adjustments are included to compensate for the variation in the distance between the various seismographs and the epicenter of the earthquake. The original formula is:\n[…]\nThe Richter scale measures earthquake magnitude based on the amplitude of seismic waves, while the moment magnitude scale (MMS, symbol Mw) measures magnitude based on seismic moment, which depends on the rigidity of the rocks, the area of the fault rupture, and the average amount of slip. Neither scale directly measures the seismic energy radiated by an earthquake, although magnitude and energy release are related.\n[…]\nThe energy release of an earthquake, which closely correlates to its destructive power, scales with the 3⁄2 power of the shaking amplitude (see Moment magnitude scale for an explanation). Thus, a difference in magnitude of 1.0 is equivalent to a factor of 31.6 (=(101.0)(3/2)) in the energy released; a difference in magnitude of 2.0 is equivalent to a factor of 1000 (=(102.0)(3/2)) in the energy released.\n[…]\nThese formulae for Richter magnitude ML are alternatives to using Richter correlation tables based on Richter standard seismic event ( M𝖫=0 ,  A=0.001 𝗆𝗆 ,  D=100 𝗄𝗆 ) . In the formulas below,  Δ  is the epicentral distance in kilometers, and  Δ∘  is the same distance represented as sea level great circle degrees.\n[…]\nwhere  A  is the amplitude in μm."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escala_de_Richter",
        "situacao": "ok",
        "texto": "Este artigo trata da escala de magnitude sísmica introduzida por Charles Richter em 1935. Para uma visão geral das escalas de magnitude sísmica, veja Magnitude sísmica.\n[…]\nPor causa das limitações da escala ML original, outras escalas são usadas conforme o tamanho e a distância do sismo. A escala de magnitude de momento (Mw) é preferida para grandes sismos, enquanto ML ainda é usada para muitos eventos pequenos registrados localmente. A imprensa, porém, muitas vezes chama valores obtidos por outras escalas de magnitudes \"Richter\".\n[…]\nComo a escala tem base logarítmica decimal, cada aumento de uma unidade na magnitude corresponde a uma amplitude registrada dez vezes maior. A relação entre magnitude e energia sísmica radiada é empírica. Como aproximação, um aumento de uma unidade corresponde a cerca de 30 vezes mais energia, e um aumento de 0,2 corresponde aproximadamente ao dobro da energia.\n[…]\nPara grandes sismos, a magnitude de momento tornou-se a medida preferida porque se baseia no momento sísmico e não sofre a mesma saturação das escalas que dependem das amplitudes de ondas de períodos mais curtos. ML não deixou de ser usada. Ela permanece apropriada para muitos sismos pequenos e locais.\n[…]\nA energia sísmica radiada não é a mesma grandeza que o momento sísmico. Relações entre magnitude e energia são empíricas e variam conforme a definição de magnitude e o intervalo considerado. A regra aproximada de que uma unidade de magnitude representa cerca de 30 a 32 vezes mais energia é útil para comparações gerais, mas não constitui uma identidade exata aplicável a todas as escalas e magnitudes.\n[…]\nEscala de magnitude de momento, escala baseada no momento sísmico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Escala de Mercalli",
      "descricao": "Escala que mede a intensidade de um terremoto pelos efeitos sentidos e pelos estragos causados."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A escala de Mercalli modificada, que mede os terremotos pelos estragos, vai do grau um até qual grau, o da destruição total?",
    "resposta": "Doze",
    "distratores": [
      "Dez",
      "Nove",
      "Vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Modified_Mercalli_intensity_scale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Modified_Mercalli_intensity_scale",
        "situacao": "ok",
        "texto": "The Modified Mercalli intensity scale (MM, MMI, or MCS) measures the effects of an earthquake at a given location. This is in contrast with the seismic magnitude usually reported for an earthquake.\n[…]\nWhen Harry O. Wood and Frank Neumann translated this into English in 1931 (along with modification and condensation of the descriptions, and removal of the acceleration criterion), they named it the \"modified Mercalli intensity scale of 1931\" (MM31). Some seismologists refer to this version as the \"Wood–Neumann scale\". Wood and Neumann also had an abridged version, with fewer criteria for assessing the degree of intensity.\n[…]\nThe Wood–Neumann scale was revised in 1956 by Charles Francis Richter and published in his influential textbook Elementary Seismology. Not wanting to have this intensity scale confused with the Richter scale he had developed, he proposed calling it the \"modified Mercalli scale of 1956\" (MM56).\n[…]\nThe basis by which the United States Geological Survey (and other agencies) assigns intensities is nominally Wood and Neumann's MM31. However, this is generally interpreted with the modifications summarised by Stover and Coffman because in the decades since 1931, \"some criteria are more reliable than others as indicators of the level of ground shaking\".\n[…]\nJones, Richard (2012). \"Investigating the Mercalli Intensity Scale Through 'Lived Experience'\" (PDF). Science Scope. 36 (4): 54–60. ISSN 0887-2376. JSTOR 43183283. ERIC EJ1000835.\n[…]\nModified Mercalli Intensity Scale – United States Geological Survey"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escala_de_Mercalli",
        "situacao": "ok",
        "texto": "A escala de Mercalli, na actualidade em rigor a Escala de Mercalli Modificada, é uma escala qualitativa usada para determinar a intensidade de um sismo a partir dos seus efeitos sobre as pessoas e sobre as estruturas construídas e naturais. Foi elaborada pelo vulcanólogo e sismólogo italiano Giuseppe Mercalli, em 1902, daí o nome que ostenta.\n[…]\nA escala teve largo uso, em especial nos países do sueste europeu, onde se manteve em uso até finais do século XX, sendo então substituída pela Escala Mercalli Modificada. Uma versão da escala está disponível na página da Protecção Civil Italiana.\n[…]\nApesar de aprovada num congresso internacional de sismologia, caiu rapidamente em desuso, substituída a partir de meados da década de 1960 pela escala de Mercalli Modificada. A escala, apesar de pouco utilizada, é frequentemente referida em cartas de risco e em textos técnicos das últimas décadas. Uma versão completa da escala está disponível na página da United States Geological Survey (USGS).\n[…]\nA \"Escala Mercalli Modificada\" (versão de 1956), em geral designada \"Escala MM\" ou \"MMS\", é a escala de intensidade sísmica mais utilizada no Mundo, tendo versões oficiais em múltiplas línguas. A versão corrente da escala data de 1956 e resultou dos melhoramentos introduzidos por Charles Richter, o criador da escala de Richter, na \"escala Mercalli-Wood-Neumann\" (MWN) que havia sido publicada em 1931.\n[…]\nEscala de Mercalli Modificada (1956) — versão simplificadaGraus de intensidade sísmica\n[…]\nEscala de Mercalli Modificada (1956) — versão completaGraus de intensidade sísmica\n[…]\nEscala de Mercalli Modificada (MMS) - versão simplificada\n[…]\nEscala de Mercalli Modificada (MMS) - versão completa\n[…]\nAs escalas sísmicas\n[…]\nTexto oficial da Escala Mercali-Wood-Neumann de 1931",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Escala de Mohs",
      "descricao": "Escala de dureza de minerais de um a dez, criada pelo mineralogista alemão Friedrich Mohs em 1812."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na escala de Mohs, que vai de um a dez, qual é aproximadamente a dureza da unha humana?",
    "resposta": "Dois e meio",
    "distratores": [
      "Cinco e meio",
      "Sete",
      "Um"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mohs_scale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mohs_scale",
        "situacao": "ok",
        "texto": "The Mohs scale (  MOHZ) of mineral hardness is a qualitative ordinal scale, from 1 to 10, characterizing scratch resistance of minerals through the ability of harder material to scratch softer material.\n[…]\nThe Mohs scale is an ordinal scale. For example, corundum (9) is twice as hard as topaz (8), but diamond (10) is about four times as hard as corundum, for absolute hardness. The table below shows the comparison with the absolute hardness measured by a sclerometer, with images of the reference minerals in the rightmost column.\n[…]\nBelow is a table of more materials by Mohs scale. Some of them have a hardness between two of the Mohs scale reference minerals. Some solid substances that are not minerals have been assigned a hardness on the Mohs scale. Hardness may be difficult to determine, or may be misleading or meaningless, if a material is a mixture of multiple substances.\n[…]\nFor example, granite has been assigned by some sources a Mohs hardness between 6 and 7, but it is a rock made of several minerals, each with its own Mohs hardness. Topaz-rich granite is mainly composed of topaz (Mohs 8), quartz (Mohs 7), orthoclase (Mohs 6), plagioclase (Mohs 6–6.5), and mica (Mohs 2–4).\n[…]\nDespite its lack of precision, the Mohs scale is relevant for field geologists, who use it to roughly identify minerals using scratch kits. The Mohs scale hardness of minerals can be commonly found in reference sheets.\n[…]\nMohs hardness is useful in milling. It allows the assessment of which type of mill and grinding medium will best reduce a given product whose hardness is known.\n[…]\nComparison between Mohs hardness and Vickers hardness:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escala_de_Mohs",
        "situacao": "ok",
        "texto": "Escala de Mohs quantifica a dureza dos minerais, isto é, a resistência que um determinado mineral oferece ao risco, ou seja, à retirada de partículas da sua superfície.\n[…]\nO diamante risca o vidro, portanto, é mais duro que o vidro. Esta escala foi criada em 1812 pelo mineralogista alemão Friedrich Vilar Mohs com dez minerais de diferentes durezas existentes na crosta terrestre.\n[…]\nAtribuiu valores de 1 a 10. O valor de dureza 1 foi dado ao material menos duro da escala, que é o talco, e o valor 10 dado ao diamante que é a substância mais dura conhecida na natureza.\n[…]\nEsta escala não corresponde à dureza absoluta de um material. Por exemplo, o diamante tem dureza absoluta 1 500 vezes superior à do talco. Entre 1 e 9, a dureza aumenta de modo mais ou menos uniforme, mas de 9 para 10 há uma diferença muito acentuada, pois o diamante é muito mais duro que o coríndon (ou seja, que o rubi e a safira).\n[…]\nA escala de dureza Mohs é usada em mineralogia; no entanto, existem outras escalas de dureza utilizadas em ciência dos materiais, tais como:\n[…]\nDureza Brinell\n[…]\nDureza Rockwell\n[…]\nDureza Rockwell superficial\n[…]\nDureza Webster\n[…]\nDureza Vickers",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Erupção do Krakatoa de 1883",
      "descricao": "Erupção catastrófica do vulcão Krakatoa, na Indonésia, em agosto de 1883."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1883, o estrondo da erupção do Krakatoa foi ouvido a cerca de quantos quilômetros de distância?",
    "resposta": "Quase cinco mil quilômetros",
    "distratores": [
      "Cerca de cem quilômetros",
      "Cerca de quinhentos quilômetros",
      "Cerca de mil quilômetros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1883_eruption_of_Krakatoa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1883_eruption_of_Krakatoa",
        "situacao": "ok",
        "texto": "Between 19 May and 21 October 1883, the volcanic island of Krakatoa (located in the Sunda Strait, then part of the Dutch East Indies—modern-day Indonesia) began erupting, lasting more than five months. On 27 August, the island had its most significant eruption, which destroyed over 70% of the island and its surrounding archipelago, the island collapsing into a caldera.\n[…]\nVerbeek discounted any claims of Krakatoa still erupting after mid-October due to steaming of hot material, landslides due to heavy monsoon rains that season, and \"hallucinations due to electrical activity\" seen from a distance.\n[…]\nThe explosion has been theorized to be a source of inspiration for Edvard Munch's 1893 painting The Scream. The reddish sky in the background is the artist's memory of the effects of the powerful volcanic eruption of Krakatoa, which deeply tinted sunset skies red in parts of the Western hemisphere for months during 1883 and 1884, about a decade before Munch painted The Scream.\n[…]\nThe 1883 eruption is a key plot device in the 1947 fiction novel The Twenty-One Balloons. In the book, Krakatoa is portrayed as an island of great diamond wealth populated by a utopian society.\n[…]\nKrakatit\n[…]\nKrakatoa, East of Java\n[…]\nSelf, Stephen; Rampino, Michael R. (1981). \"The 1883 eruption of Krakatau\". Nature. 294 (5843): 699–704. Bibcode:1981Natur.294..699S. doi:10.1038/294699a0. S2CID 4340524.\n[…]\nSimkin, Tom, and Richard S. Fiske (editors); Krakatau, 1883 – the volcanic eruption and its effects (1983) Washington, D.C. : Smithsonian Institution Press. ISBN 0-87474-841-0\n[…]\nWinchester, Simon. Krakatoa: The Day the World Exploded: August 27, 1883, New York: HarperCollins (2003), ISBN 978-0-06-083859-1\n[…]\nWorks about the 1883 eruption of Krakatoa at Open Library\n[…]\nKrakatau, Indonesia (1883) Archived 16 December 2014 at the Wayback Machine information from San Diego State University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erup%C3%A7%C3%A3o_do_Krakatoa_em_1883",
        "situacao": "ok",
        "texto": "A erupção do Krakatoa em 1883 ocorreu em 27 de agosto daquele ano na ilha de Krakatoa, localizada no estreito de Sunda, entre as ilhas de Sumatra e Java, nas Índias Orientais Holandesas (atual Indonésia). A ilha desapareceu quando o vulcão homônimo, no monte Perboewatan — supostamente extinto — entrou em erupção.\n[…]\nEsta é considerada a segunda erupção vulcânica mais fatal da história, a sexta maior erupção do mundo, além de o som mais alto já ouvido na História (o barulho do estrondo pôde ser ouvido a 5 mil quilômetros de distância).\n[…]\nAtualmente, na região da cratera, há uma nova formação rochosa em andamento chamada Anak Krakatau (Anak Krakatoa, filho de Krakatoa ou de Krakatau), que já possui mais de 324 metros de altura, sendo que a cada ano aumenta cinco metros aproximadamente, podendo haver mudanças.\n[…]\nA sucessão de erupções e explosões durou 22 horas e causou mais de 36 mil mortes. Sua explosão atirou pedras a aproximadamente 27 km de altitude e o som da grande última explosão foi ouvida a cinco mil quilômetros, na ilha de Rodrigues, tendo os habitantes ficado surpresos com o estrondo, supondo significar uma batalha naval. Houve muitos relatos de pessoas em um raio de 15 km de distância que tiveram seus tímpanos rompidos. O barulho chegou também até Austrália, Filipinas e Índia.\n[…]\nO escritor Simon Winchester descreveu o evento no seu livro: Krakatoa: The Day the World Exploded (Krakatoa: O dia em que o mundo explodiu). Um navio que se encontrava na área, de nome Berouw, foi arrastado terra adentro, tendo toda a tripulação morrido. De acordo com Winchester, corpos apareceram em Zanzibar e o som da destruição da ilha foi ouvido na Austrália e na Índia.\n[…]\nErupção do Vesúvio em 79\n[…]\nErupção freática\n[…]\nKrakatoa, o Inferno de Java\n[…]\nThe Java Disaster (1883), Capt. W. J. Watson",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Terremoto de Valdivia de 1960",
      "descricao": "Terremoto de magnitude 9,5 que atingiu o sul do Chile em 22 de maio de 1960."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Medido pelos sismógrafos, o terremoto de Valdivia, que atingiu o sul do Chile em 1960, teve qual magnitude?",
    "resposta": "Nove e meio",
    "distratores": [
      "Sete e meio",
      "Oito e meio",
      "Dez e meio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1960_Valdivia_earthquake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1960_Valdivia_earthquake",
        "situacao": "ok",
        "texto": "On 22 May 1960, an earthquake and tsunami occurred in Chile, devastating the city of Valdivia. Most studies have placed it at 9.4–9.6 on the moment magnitude scale, making it the strongest earthquake ever recorded, while some studies have placed the magnitude lower than 9.4. It occurred in the afternoon (19:11:14 UTC, 15:11:14 local time), and lasted 10 minutes.\n[…]\nThe 1960 Chilean earthquakes were a sequence of strong earthquakes that affected Chile between 21 May and 6 June 1960, centered in the Cautín, Malleco, Aysén, and Biobío provinces of the country. The first three quakes, all registering in the planet's top 10 by magnitude for 1960, are grouped together as the 1960 Concepción earthquakes. The first of these was the 8.1 Mw Concepción earthquake at 06:02 UTC-4 on 21 May 1960. Its epicenter was near Curanilahue.\n[…]\nAfter the earthquake a myth related the unusually warm and clear weather conditions prior to the earthquake to its triggering. When compared with the years that followed in the 1960s the autumn of 1960 in southern Chile was not particularly dry nor warm.\n[…]\nOn 27 February 2010 at 03:34 local time, an 8.8 magnitude earthquake occurred just to the north (off the coast of the Maule region of Chile, between Concepción and Santiago). This quake was reported to be centered approximately 35 kilometres (22 mi) deep and several miles off shore. It may have been related or consequential to the 1960 Valdivia quake, the strongest as recorded using modern technology. This 2010 earthquake was the largest to affect Valdivia since the 1960 event.\n[…]\nRojas Hoppe, Carlos Fernando (2010), Valdivia 1960: Entre aguas y escombros (in Spanish), Valdivia, Chile: Ediciones Universidad Austral de Chile\n[…]\nTsunami of 1960 – George Pararas-Carayannis\n[…]\n22 May 1960 South Central Chile Tsunami Amplitudes – National Oceanic and Atmospheric Administration"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sismo_de_Valdivia_de_1960",
        "situacao": "ok",
        "texto": "Sismo de Valdivia de 1960, ou Grande Sismo do Chile (designado oficialmente Grande Terremoto de Valdivia de 1960), foi um sismo de magnitude de 9,5 MW com epicentro próximo a Lumaco, província de Malleco, Região de Araucanía, ocorrido às 19h11 UTC (15h11 no horário local) do dia 22 de maio de 1960. O epicentro foi 160km de Valdivia e a 570 km ao sul de Santiago com o hipocentro situado a uma profu\n[…]\nOs terremotos chilenos de 1960 foram uma sequência de fortes terremotos que afetaram o Chile entre 21 de maio e 6 de junho do mesmo ano. O primeiro foi o terremoto de Concepción, que alcançou uma magnitude de 8,1MW, seguido pelo mais forte o terremoto de Valdivia.\n[…]\nÀs 06h02 de 21 de maio de 1960, um forte terremoto sacudiu grande parte do Chile. 12 epicentros foram registrados na costa da península de Arauco, atual região de Biobio. O movimento teve uma magnitude de 7,3 -7,5Ms e alcançou a intensidade máxima de X na escala de Mercalli, atingindo todo centro-sul do país afetando principalmente as cidades de Concepción, Talcahuano, Lebu, Chillán, Los Ángeles e Angol, e foi sentido em Norte Chico e na província de Llanquihue.\n[…]\nNo Rio Valdivia e na Baía do Corral vários navios naufragaram devido ao terremoto, entre eles Argentina, Canelos, Carlos Haverbeck, Melita e os restos recuperados de Penco. Canelos que havia ancorado em Corral, estava cheio de carga de madeira e outros produtos destinados ao norte do Chile quando o terremoto o atingiu. Após horas de ronda ao redor na baía do Corral e do rio de Valdivia o navio foi destruído e subsequentemente abandonado por sua equipe às 18h00.\n[…]\nEm 22 de maio, ocorreu um seiche no lago argentino Nahuel Huapi a mais de 200 km de Valdivia. A onda, provavelmente produzida por um deslizamento de sedimento provocado pelo terremoto, matou duas pessoas e destruiu um píer na cidade de San Carlos de Bariloche.\n[…]\nSismo do Chile de 2010",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cratera de Chicxulub",
      "descricao": "Cratera de impacto enterrada sob a península de Iucatã, no México, ligada à extinção em massa do fim do Cretáceo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O asteroide que abriu a cratera de Chicxulub e ajudou a extinguir os dinossauros tinha cerca de quantos quilômetros de diâmetro?",
    "resposta": "Cerca de dez quilômetros",
    "distratores": [
      "Cerca de cem metros",
      "Cerca de cem quilômetros",
      "Cerca de mil quilômetros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chicxulub_impactor",
      "https://en.wikipedia.org/wiki/Chicxulub_crater"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chicxulub_impactor",
        "situacao": "ok",
        "texto": "The Chicxulub crater is an impact crater buried underneath the Yucatán Peninsula in Mexico. The crater is named after the onshore inland community of Chicxulub Pueblo. It was formed slightly over 66 million years ago when an asteroid, about ten kilometers (six miles) in diameter, struck Earth. The crater is estimated to be two hundred kilometers (120 mi) in diameter and is buried to a depth of abo\n[…]\nA 2007 Nature report proposed a specific astronomical origin for the Chicxulub asteroid. The authors, William F. Bottke, David Vokrouhlický, and David Nesvorný, argued that a collision in the asteroid belt 160 million years ago between a 170 km (110 mi) diameter parent body and another 60 km (37 mi) diameter body resulted in the Baptistina family of asteroids, the largest surviving member of which is 298 Baptistina. They proposed that the Chicxulub asteroid was also a member of this group.\n[…]\nhad ignored that the amount of iridium deposited around the globe, 2.0×108 to 2.8×108 kg (4.4×108 to 6.2×108 lb), was too large for a comet of the size implied by the crater, and that they had overestimated likely comet impact rates. They concluded that all available evidence strongly favors an asteroid impactor, effectively ruling out a comet. Ruthenium isotope ratios in impact layers also strongly support an asteroid rather than a comet nature for the impactor.\n[…]\nNadir crater\n[…]\nKornel, Katherine (September 10, 2019). \"A New Timeline of the Day the Dinosaurs Began to Die Out – By drilling into the Chicxulub crater, scientists assembled a record of what happened just after the asteroid impact\". The New York Times. Archived from the original on September 25, 2019. Retrieved September 25, 2019.\n[…]\nChicxulub Crater Archived July 22, 2018, at the Wayback Machine\n[…]\nPapers and presentations resulting from the 2016 Chicxulub drilling project"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chicxulub_crater",
        "situacao": "ok",
        "texto": "The Chicxulub crater is an impact crater buried underneath the Yucatán Peninsula in Mexico. The crater is named after the onshore inland community of Chicxulub Pueblo. It was formed slightly over 66 million years ago when an asteroid, about ten kilometers (six miles) in diameter, struck Earth. The crater is estimated to be two hundred kilometers (120 mi) in diameter and is buried to a depth of abo\n[…]\nA 2007 Nature report proposed a specific astronomical origin for the Chicxulub asteroid. The authors, William F. Bottke, David Vokrouhlický, and David Nesvorný, argued that a collision in the asteroid belt 160 million years ago between a 170 km (110 mi) diameter parent body and another 60 km (37 mi) diameter body resulted in the Baptistina family of asteroids, the largest surviving member of which is 298 Baptistina. They proposed that the Chicxulub asteroid was also a member of this group.\n[…]\nhad ignored that the amount of iridium deposited around the globe, 2.0×108 to 2.8×108 kg (4.4×108 to 6.2×108 lb), was too large for a comet of the size implied by the crater, and that they had overestimated likely comet impact rates. They concluded that all available evidence strongly favors an asteroid impactor, effectively ruling out a comet. Ruthenium isotope ratios in impact layers also strongly support an asteroid rather than a comet nature for the impactor.\n[…]\nNadir crater\n[…]\nKornel, Katherine (September 10, 2019). \"A New Timeline of the Day the Dinosaurs Began to Die Out – By drilling into the Chicxulub crater, scientists assembled a record of what happened just after the asteroid impact\". The New York Times. Archived from the original on September 25, 2019. Retrieved September 25, 2019.\n[…]\nChicxulub Crater Archived July 22, 2018, at the Wayback Machine\n[…]\nPapers and presentations resulting from the 2016 Chicxulub drilling project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cratera_de_Chicxulub",
        "situacao": "ok",
        "texto": "Cratera Chicxulub (pronuncia-se AFI: /tʃikʃuˈlub/) é uma antiga cratera de impacto soterrada embaixo da península de Iucatã, no México. O seu centro está localizado próximo à localidade de Chicxulub, que deu origem ao nome da cratera. A cratera tem mais de 180 km de diâmetro, tornando-a uma das maiores estruturas de impacto conhecidas no mundo; o bólide que formou a cratera tinha pelo menos 10 km \n[…]\nProvas mais recentes sugerem que a verdadeira cratera tem 300 quilômetros de diâmetro, e que o anel de 180 km é uma parede interior.\n[…]\nO bólide tinha uma dimensão estimada em cerca de 10 km de diâmetro, e o impacto terá liberado uns 400 ZJ (4,0 × 1023 J) de energia, equivalentes a 96 teratoneladas de TNT. Como comparação, o mais potente artefato explosivo criado pelo homem, a Tsar Bomba, tinha um rendimento de apenas 50 megatoneladas de TNT, ou seja, o impacto de Chicxulub foi dois milhões de vezes mais potente.\n[…]\nEstas rochas ígneas andesíticas foram encontradas unicamente no interior da suposta estrutura de impacto; de maneira similar, encontram-se quantidades de feldspato e augite, normalmente apenas presentes em rochas fundidas por impacto, bem como quartzo de impacto. No interior da estrutura, o nível K-T está deprimido entre 600 e 1100 metros em relação à profundidade normal de cerca de 500 metros à qual se encontra a cinco quilômetros da estrutura do impacto.\n[…]\nPropuseram que o \"asteroide de Chicxulub\" também era membro deste grupo, fundamentando-se na grande quantidade de material carbonáceo presente nos fragmentos microscópicos do bólide, que indicam que o bólide pertencia à rara classe de asteroides chamados condritos carbonáceos, tal como Baptistina. Segundo Bottke, o bólide de Chicxulub era um fragmento de cerca de 60 km de diâmetro, cindido de um corpo-pai muito maior, com cerca de 170 km de diâmetro.\n[…]\nCratera da Terra de Wilkes\n[…]\nCratera de Vredefort",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Serra Pelada",
      "descricao": "Local de garimpo no sudeste do Pará, palco de uma grande corrida de garimpeiros nos anos 1980."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Achada em Serra Pelada em 1983, a Pepita Canaã, uma enorme pepita de ouro, pesa cerca de quantos quilos?",
    "resposta": "Cerca de sessenta quilos",
    "distratores": [
      "Cerca de um quilo",
      "Cerca de seis quilos",
      "Cerca de duzentos quilos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pepita_Canaã",
      "https://pt.wikipedia.org/wiki/Serra_Pelada"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pepita_Canaã",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Serra_Pelada",
        "situacao": "ok",
        "texto": "A Serra Pelada é uma localidade brasileira, vila e distrito do município de Curionópolis, no sudeste do Pará.\n[…]\nEm janeiro de 1980 um comprador de ouro espalhou a notícia da área de lavra em Marabá, de onde a até então Grota Rica era jurisdicionada. Rapidamente chegaram ao local cerca de mil garimpeiros. Essa chegada repentina de tantas pessoas tornou difícil para alocar todos nos barrancos do rio, muitos sendo obrigados a garimpar numa colina sem vegetação nas proximidades, apelidada de \"Serra Pelada\".\n[…]\nCabe ressaltar que o ano de 1983 alcançou uma produção estimada de mais de 17 toneladas de ouro, o recorde da Serra Pelada.\n[…]\nEm 2007 a Phoenix anuncia que vendeu sua participação para a mineradora canadense Colossus Minerals Inc., que anuncia oficialmente o interesse em reativar a mina de ouro da Serra Pelada.\n[…]\nEm 2010 a Vale anuncia que conseguiu a licença ambiental para o início da operação comercial do projeto Serra Leste (lançado ainda na década de 1990), de exploração de hematita dura (minério de ferro). O projeto foi construído nas proximidades da vila de Serra Pelada, a cerca de 4 quilômetros do centro desta em linha reta. A implantação deste começou a partir de 2006, indo até 2010.\n[…]\nO principal acesso ao distrito é feito pela vicinal PA Serra Grande Sereno, que, a partir da PA-275, na vila Gurita da Serra (km 16), dista cerca de 30 quilômetros da Serra Pelada. Em linha reta, a distância entre a Serra Pelada e a cidade de Curionópolis é de cerca de 20 quilômetros.\n[…]\nOutras festividades populares importantes são as Festas Juninas e a Cavalgada da Serra Pelada."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Manto terrestre",
      "descricao": "Camada da Terra situada entre a crosta e o núcleo, formada por rocha quente e lentamente deformável."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Logo abaixo da crosta, o manto terrestre tem cerca de quantos quilômetros de espessura?",
    "resposta": "Quase três mil quilômetros",
    "distratores": [
      "Cerca de trinta quilômetros",
      "Cerca de trezentos quilômetros",
      "Quase dez mil quilômetros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mantle_(geology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mantle_(geology)",
        "situacao": "ok",
        "texto": "A mantle is a layer inside a planetary body bounded below by a core and above by a crust. Mantles are made of rock or ices, and are generally the largest and most massive layer of the planetary body. Mantles are characteristic of planetary bodies that have undergone differentiation by density. All terrestrial planets (including Earth), half of the giant planets, specifically ice giants, a number o"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Calçada dos Gigantes",
      "descricao": "Formação de milhares de colunas de basalto no litoral do condado de Antrim, na Irlanda do Norte."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "A maioria das colunas de basalto da Calçada dos Gigantes, na Irlanda do Norte, tem quantos lados?",
    "resposta": "Seis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giant%27s_Causeway"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giant%27s_Causeway",
        "situacao": "ok",
        "texto": "The Giant's Causeway (Irish: Clochán an Aifir or Clochán na bhFomhórach) is an area of approximately 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption, part of the North Atlantic Igneous Province active in the region during the Paleogene period. It is located in County Antrim on the north coast of Northern Ireland, about three miles (five kilometres) northeast \n[…]\nIn respect of its key role in the development of volcanology as a geoscience discipline, and notably the origin of basalt, the Palaeocene rocks of the Giant's Causeway and Causeway Coast were included by the International Union of Geological Sciences (IUGS) in its assemblage of 100 \"geological heritage sites\" around the world in a listing published in October 2022.\n[…]\nThe area is a haven for seabirds, such as fulmar, petrel, cormorant, shag, redshank, guillemot, and razorbill, while the weathered rock formations host numerous plant types, including sea spleenwort, hare's-foot trefoil, vernal squill, sea fescue, and frog orchid. A stromatolite colony was reportedly found at the Giant's Causeway in October 2011 – an unusual find, as stromatolites are more commonly found in warmer waters with higher saline content than that found at the causeway.\n[…]\nThe Belfast-Derry railway line run by Northern Ireland Railways connects to Coleraine and along the Coleraine-Portrush branch line to Portrush. Locally, Ulsterbus provides connections to the railway stations. There is a scenic walk of seven miles (eleven kilometres) from Portrush alongside Dunluce Castle and the Giant's Causeway and Bushmills Railway.\n[…]\nWatson, Philip S. (2000). The Giant's Causeway and the North Antrim coast. Dublin: O'Brien Press. ISBN 0-86278-675-4. OCLC 45829602.\n[…]\nGiant's Causeway information at the National Trust\n[…]\nWebsite and video of the Causeway Coast and Glens Heritage Trust"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cal%C3%A7ada_dos_Gigantes",
        "situacao": "ok",
        "texto": "A Calçada do Gigante (em inglês Giant's Causeway) é a designação dada a um conjunto de cerca de 40 000 colunas prismáticas de basalto, encaixadas como se formassem uma enorme calçada de pedras gigantescas, formadas pela disjunção prismática de uma grande massa de lava basáltica resultante de uma erupção vulcânica ocorrida há cerca de 60 milhões de anos.\n[…]\nSegundo uma lenda irlandesa um gigante chamado Finn MacCool queria enfrentar numa luta um gigante escocês chamado Benandonner, mas havia um problema: não existia uma embarcação com tamanho suficiente para atravessar o mar e levar um ao encontro do outro. A lenda diz que MacCool resolveu o problema construindo uma calçada que ligava os dois lados, usando enormes colunas de pedra. Benandonner aceitou o desafio e viajou pela calçada ate à Irlanda. Ele era mais forte e maior do que MacCool.\n[…]\nMilhares de colunas verticais de pedras de até 6 metros de altura, cada uma de 38 cm a 51 cm de largura, com topos planos e seis lados. Por serem tão uniformes, seus topos parecem se encaixar como favos. Cerca de um quarto das colunas tem cinco lados e também há algumas com quatro, sete, oito e até nove lados.\n[…]\nA \"Calçada\" é composta por três partes. A grande calçada, a maior, começa na praia ao sopé dos rochedos. Parece-se mais com um conjunto desordenado de enormes degraus, alguns com seis metros de altura. À medida que se estende em direção ao mar, dá para entender facilmente por que razão tem o seu nome: é devido aos seus topos, parecidos com favos de mel, que logo se nivelam, lembrando uma rua pavimentada com pedras arredondadas, que varia de vinte a trinta metros de largura.\n[…]\n«Guia oficial da Calçada do Gigante» (em inglês)\n[…]\n«Informação sobre o Giant's Causeway no National Trust» (em inglês)\n[…]\n«Formação das colunas de basalto» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Período Cretáceo",
      "descricao": "Último período da Era Mesozoica, de cerca de 145 a 66 milhões de anos atrás, encerrado pela extinção dos grandes dinossauros."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do período Cretáceo, o último dos dinossauros, vem do latim e se refere a qual material branco, abundante nas rochas dessa época?",
    "resposta": "Giz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cretaceous"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cretaceous",
        "situacao": "ok",
        "texto": "The Cretaceous (IPA:  krih-TAY-shəss) is a geological period that lasted from about 143.1 to 66 Ma (million years ago). It is the third and final period of the Mesozoic Era, as well as the longest. At around 77.1 million years, it is the ninth and longest geological period of the entire Phanerozoic. The name is derived from the Latin creta, 'chalk', which is abundant in deposits from the latter ha\n[…]\nFrom youngest to oldest, the subdivisions of the Cretaceous Period are:\n[…]\nPterosaurs were common in the early and middle Cretaceous, but as the Cretaceous proceeded they declined for poorly understood reasons (once thought to be due to competition with early birds, but now it is understood avian adaptive radiation is not consistent with pterosaur decline). By the end of the period only three highly specialized families remained; Pteranodontidae, Nyctosauridae, and Azhdarchidae.\n[…]\nIn the seas, rays, modern sharks and teleosts became common. Marine reptiles included ichthyosaurs in the early and mid-Cretaceous (becoming extinct during the late Cretaceous Cenomanian-Turonian anoxic event), plesiosaurs throughout the entire period, and mosasaurs appearing in the Late Cretaceous. Sea turtles in the form of Cheloniidae and Panchelonioidea lived during the period and survived the extinction event.\n[…]\nOstracods were abundant in Cretaceous marine settings; ostracod species characterised by high male sexual investment had the highest rates of extinction and turnover. Thylacocephala, a class of crustaceans, went extinct in the Late Cretaceous. The first radiation of the diatoms (generally siliceous shelled, rather than calcareous) in the oceans occurred during the Cretaceous; freshwater diatoms did not appear until the Miocene.\n[…]\nUCMP Berkeley Cretaceous page\n[…]\nCretaceous (chronostratigraphy scale)\n[…]\n\"Cretaceous System\" . Encyclopædia Britannica. Vol. 7 (11th ed.). 1911. pp. 414–418."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cret%C3%A1ceo",
        "situacao": "ok",
        "texto": "Na escala de tempo geológico, o Cretáceo ou Cretácico é o período da era Mesozoica do éon Fanerozoico que está compreendido entre há 143,1 milhões e 66 milhões de anos, aproximadamente. O Período Cretáceo sucede o Período Jurássico de sua era e precede o Período Paleogeno da Era Cenozoica de seu éon. Divide-se nas épocas Cretáceo Inferior e Cretáceo Superior, da mais antiga para a mais recente.\n[…]\nO Cretácico Superior está compreendido entre 100,5 milhões e 66 milhões de anos, aproximadamente. A época Cretácea Superior sucede a época Cretácea Inferior de seu período e precede a época Paleocena do período Paleogeno da era Cenozoica de seu éon. Divide-se nas idades Cenomaniana, Turoniana, Coniaciana, Santoniana, Campaniana e Maastrichtiana, da mais antiga para a mais recente.\n[…]\nO Cretáceo como um período separado foi definido pela primeira vez pelo geólogo belga Jean d'Omalius d'Halloy em 1822 como o Terrain Crétacé, usando estratos na Bacia de Paris e nomeado pelos extensos leitos de giz (carbonato de cálcio depositado pelas conchas de invertebrados marinhos, principalmente cocolitos), encontrados no Cretáceo Superior da Europa Ocidental. O nome 'Cretáceo' deriva do latim creta, que significa 'giz'.\n[…]\nDo mais recente para o mais antigo, as subdivisões do Período Cretáceo são:\n[…]\nO alto nível do mar e o clima quente do Cretáceo significaram que grandes áreas dos continentes foram cobertas por mares quentes e rasos. O Cretáceo recebeu o seu nome devido aos extensos depósitos de giz desta época na Europa, um tipo de rocha que se forma sob condições marinhas rasas. Devido à idade relativamente jovem e à grande espessura do sistema, as rochas do Cretáceo são evidentes em muitas áreas do mundo.\n[…]\nO Cretáceo também foi um intervalo importante na evolução da bioerosão, a produção de perfurações e raspagens em rochas, fundos endurecidos (hardgrounds) e conchas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Era Cenozoica",
      "descricao": "Era geológica atual, iniciada há cerca de 66 milhões de anos, após a extinção do fim do Cretáceo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A era Cenozoica, a dos mamíferos, que dura até hoje, tem um nome de origem grega que significa o quê?",
    "resposta": "Vida recente",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cenozoic",
      "https://pt.wikipedia.org/wiki/Cenozoico"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cenozoic",
        "situacao": "ok",
        "texto": "The Cenozoic Era (also known as the Caenozoic, Kainozoic, or Neozoic Era; ; SEE-nə-ZOH-ik, SEN-ə-; lit. 'new life') is Earth's current geological era, representing the last 66 million years of Earth's history. It is characterized by the dominance of  mammals, insects, birds and angiosperms (flowering plants). It is the latest of three geological eras of the Phanerozoic Eon, preceded by the Mesozoi\n[…]\nThe common use of epochs during the Cenozoic helps palaeontologists better organise and group the many significant events that occurred during this comparatively short interval of time. Knowledge of this era is more detailed than any other era because of the relatively young, well-preserved rocks associated with it.\n[…]\nThe break-up of Gondwana in Late Cretaceous and Cenozoic times led to a shift in the river courses of various large African rivers including the Congo, Niger, Nile, Orange, Limpopo and Zambezi.\n[…]\nRecent analysis of the geomagnetic reversal frequency, oxygen isotope record, and tectonic plate subduction rate, which are indicators of the changes in the heat flux at the core mantle boundary, climate and plate tectonic activity, shows that all these changes indicate similar rhythms on million years' timescale in the Cenozoic Era occurring with the common fundamental periodicity of ~13 Myr during most of the time. The levels of carbonate ions in the ocean fell over the course of the Cenozoic.\n[…]\nOne group that diversified significantly in the Cenozoic as well were the snakes. Evolving in the Cenozoic, the variety of snakes increased tremendously, resulting in many colubrids, following the evolution of their current primary prey source, the rodents.\n[…]\nMammal evolution in the Cenozoic was predominantly shaped by climatic and geological processes.\n[…]\nLate Cenozoic Ice Age\n[…]\nCenozoic (chronostratigraphy scale)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cenozoico",
        "situacao": "ok",
        "texto": "Cenozoico (pré-AO 1990: Cenozóico), na divisão da escala de tempo geológico, é uma era geológica que se iniciou há aproximadamente 65,5 milhões de anos e se estende até a atualidade. Cenozoico significa \"vida nova\", do grego καινός/kainos \"novo\" e ζωή/zoe \"vida\". É a terceira e mais recente era do éon Fanerozoico, e sucede a era Mesozoica. A era Cenozoica está dividida em três períodos: Paleogeno,\n[…]\nEntretanto, alguns seres sobreviveram ao período de escassez de comida que se estendeu até o início da Era Cenozoica, e foram evoluindo ao longo do tempo até ficar como os conhecemos hoje. A principal Classe a evoluir foi a dos mamíferos. Tanto é, que a Era Cenozoica às vezes é chamada de “Era dos mamíferos”, tal qual a Era Mesozoica com relação aos dinossauros. Mas a diversidade biológica deste período e a rápida evolução das espécies tornam injusta tal denominação.\n[…]\nO princípio da Era Cenozoica marca a abertura do capítulo mais recente da história da Terra. Durante a Era Cenozoica, a face da Terra assumiu sua forma atual. Houve muita atividade vulcânica e formaram-se os grandes maciços montanhosos do mundo, como os Andes, os Alpes e o Himalaia. A vida animal transformou-se lentamente no que hoje se conhece. Resumindo, as principais características que apareceram foi:\n[…]\nDiversificação das formas de vida na flora e fauna\n[…]\nFoi na era Cenozoica que surgiram os primeiros onívoros. Formaram também as cadeias de montanhas, e ocorreram as grandes glaciações, surgindo novas espécies de vida. Já no fundo dos oceanos, houve o aparecimento de dorsais (cadeias de montanhas que são formadas nas zonas aonde as placas dos continentes se separam).\n[…]\nM.B. ALLEN y H.A. ARMSTRONGA (2007) Arabia–Eurasia collision and the forcing of mid-Cenozoic global cooling, Palaeogeography, Palaeoclimatology, Palaeoecology, Volume 265, Issues 1-2, Pages 52–58, doi:10.1016/j.palaeo.2008.04.021."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Erupção do Vesúvio em 79",
      "descricao": "Erupção do vulcão Vesúvio, no ano 79, que soterrou cidades romanas da baía de Nápoles."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "As erupções muito explosivas, como a do Vesúvio no ano setenta e nove, levam o nome de qual escritor romano, que a testemunhou e descreveu?",
    "resposta": "Plínio, o Jovem",
    "distratores": [
      "Sêneca",
      "Tácito",
      "Suetônio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Plinian_eruption"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Plinian_eruption",
        "situacao": "ok",
        "texto": "Plinian eruptions or Vesuvian eruptions are volcanic eruptions characterized by their similarity to the eruption of Mount Vesuvius in 79 AD, which destroyed the ancient Roman cities of Herculaneum and Pompeii. The eruption was described in a letter written by Pliny the Younger, after the death of his uncle Pliny the Elder.\n[…]\nPliny the Younger described the initial observations of his uncle, Pliny the Elder, of the 79 AD eruption of Mount Vesuvius:\n[…]\nA cloud, from which mountain was uncertain, at this distance (but it was found afterwards to come from Mount Vesuvius), was ascending, the appearance of which I cannot give you a more exact description of than by likening it to that of a pine tree, for it shot up to a great height in the form of a very tall trunk, which spread itself out at the top into a sort of branches; occasioned, I imagine, either by a sudden gust of air that impelled it, the force of which decreased as it advanced upwards, or the cloud itself being pressed back again by its own weight, expanded in the manner I have mentioned; it appeared sometimes bright and sometimes dark and spotted, according as it was either more or less impregnated with earth and cinders.\n[…]\nThe 79 AD eruption of Mount Vesuvius in Pompeii, Italy. It was the prototypical Plinian eruption.\n[…]\nIn 1980, the volcanologist George P. L. Walker proposed the Hatepe eruption as the representative of a new class called ultra-Plinian deposits, based on its exceptional dispersive power and eruptive column height. A dispersal index of 50,000 square kilometres (19,000 sq mi) has been proposed as a cutoff for an ultra-Plinian eruption. In the criteria of Volcanic Explosivity Index, recognizing an eruption as ultra-Plinian would make it at least VEI-5.\n[…]\nPeléan eruption, related to the explosive eruptions of the Mount Pelée"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erup%C3%A7%C3%A3o_pliniana",
        "situacao": "ok",
        "texto": "Erupções plinianas ou erupções vesuvianas são erupções vulcânicas caracterizadas por sua semelhança com a erupção do Monte Vesúvio em 79 d.C., que destruiu as antigas cidades romanas de Herculano e Pompeia. A erupção foi descrita em uma carta escrita por Plínio, o Jovem, após a morte de seu tio Plínio, o Velho.\n[…]\nPlínio, o Jovem descreveu as observações iniciais de seu tio, Plínio, o Velho, da erupção de 79 d.C. do Monte Vesúvio:Citação: Em 24 de agosto, por volta da uma hora da tarde, minha mãe pediu-lhe para observar uma nuvem que aparecia de tamanho e forma muito incomuns.\n[…]\nEste fenômeno pareceu a um homem de tal erudição e pesquisa como meu tio extraordinário e digno de investigação mais aprofundada. escreveu: «Sexto Livro de Cartas, Carta 16»Plínio, o Velho, partiu para resgatar as vítimas de sua posição perigosa na costa da Baía de Nápoles, e lançou suas galeras, cruzando a baía para Stabiae (perto da atual cidade de Castellammare di Stabia).\n[…]\nPlínio, o Jovem, forneceu um relato de sua morte e sugeriu que ele desabou e morreu por inalar gases venenosos emitidos pelo vulcão. Seu corpo foi encontrado enterrado sob as cinzas da erupção sem ferimentos aparentes em 26 de agosto, depois que a pluma se dispersou, o que seria consistente com asfixia ou envenenamento, mas também com ataque cardíaco, ataque de asma ou derrame.\n[…]\nA erupção de 79 d.C. do Monte Vesúvio em Pompeia, Itália. Foi a erupção pliniana prototípica.\n[…]\nA erupção de 2014 do vulcão Tungurahua na Cordilheira Oriental do Equador.\n[…]\nA erupção de 2020 do vulcão Taal nas Filipinas.\n[…]\nA erupção de 2022 de Hunga Tonga–Hunga Ha'apai em Tonga.\n[…]\nErupção peleana, relacionada às erupções explosivas do Monte Pelée\n[…]\nTipos de erupções vulcânicas\n[…]\nLista das maiores erupções vulcânicas\n[…]\nEntrada do Glossário Fotográfico do USGS para Erupções Plinianas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Falha de San Andreas",
      "descricao": "Falha geológica transformante onde as placas do Pacífico e da América do Norte deslizam lado a lado."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A falha de San Andreas, na Califórnia, recebeu esse nome em 1895 por causa de quê?",
    "resposta": "Um pequeno lago",
    "distratores": [
      "Uma missão franciscana",
      "Um navio espanhol",
      "Uma cidade mexicana"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/San_Andreas_Fault"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/San_Andreas_Fault",
        "situacao": "ok",
        "texto": "The San Andreas Fault is a continental right-lateral strike-slip transform fault that extends roughly 750 mi (1,210 km) through the U.S. state of California. It forms part of the tectonic boundary between the Pacific plate and the North American plate. Traditionally, for scientific purposes, the fault has been classified into three main segments (northern, central, and southern), each with differe\n[…]\nThe fault was first identified in Northern California by UC Berkeley geology professor Andrew Lawson in 1895 and named by him after the surrounding San Andreas valley. Eleven years later, Lawson discovered that the San Andreas Fault stretched southward into southern California after reviewing the effects of the 1906 San Francisco earthquake. Large-scale (hundreds of miles) lateral movement along the fault was first proposed in a 1953 paper by geologists Mason Hill and Thomas Dibblee.\n[…]\nA different USGS study in 2008 tried to assess the physical, social and economic consequences of a major earthquake in Southern California. That study predicted that a magnitude 7.8 earthquake along the southern San Andreas Fault could cause about 1,800 deaths and $213 billion in damage.\n[…]\n1812 San Juan Capistrano earthquake: At least 25 kilometers (16 mi) were ruptured in Southern California. Several of the Roman Catholic missions in the area experienced heavy damage. Early studies indicated the earthquake was on the Newport-Inglewood fault due to the proximity of the damage, but a later study in 2002 indicated the San Andreas fault was the cause.\n[…]\nStoffer, Philip W. (2005). The San Andreas Fault in the San Francisco Bay Area, California: A Geology Fieldtrip Guidebook To Selected Stops on Public Lands. United States Geological Survey. General Interest Publication 16.\n[…]\nThe Parkfield, California, Earthquake Experiment, USGS\n[…]\nThe San Andreas Fault by Sandra S. Schulz and Robert E. Wallace"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Falha_de_Santo_Andr%C3%A9",
        "situacao": "ok",
        "texto": "A Falha de Santo André (em inglês:  San Andreas Fault) é uma falha geológica tangencial que se prolonga por cerca de 1.290 km através da Califórnia. A falha de Santo André marca um limite transformante, encontro de placas tectônicas que se transformam, ocorre entre a placa do Pacífico e a placa Norte-americana. É uma falha famosa por produzir grandes e devastadores sismos, como o sismo de São Fran\n[…]\nExiste a crença popular de que um grande abalo sísmico poderá dividir o estado da Califórnia em dois. Nesta crença, uma parte do estado \"desprender-se-ia\" do continente e formaria uma ilha. Tal evento é cientificamente possível, e poderia ocorrer naturalmente em milhões de anos, um sismo em grande escala aceleraria este processo.\n[…]\nA Falha de Santo André segue numa linha de noroeste a sudeste ao longo da costa da Califórnia. Os números na falha indicam quantos pés o solo cedeu naquele local com o resultado do Sismo de São Francisco de 1906.\n[…]\nA Falha de Santo André tem um histórico de notáveis abalos sísmicos:\n[…]\nSan Andreas (filme)\n[…]\nLago San Andreas\n[…]\n«Califórnia tem 99% de chances de sofrer forte terremoto em 30 anos, diz estudo»\n[…]\n«San Andreas Fault Observatory at Depth» (em inglês)\n[…]\n«Southern California Earthquake Data Center: San Andreas Fault» (em inglês)\n[…]\n«USGS: The San Andreas Fault» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Rochedo de Gibraltar",
      "descricao": "Montanha monolítica de calcário de 426 metros, na entrada do Mediterrâneo, no território britânico de Gibraltar."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Gibraltar vem do árabe e homenageia qual comandante muçulmano, que desembarcou ali em 711 para conquistar a Península Ibérica?",
    "resposta": "Tárique (Tariq ibn Ziyad)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rock_of_Gibraltar",
      "https://en.wikipedia.org/wiki/Tariq_ibn_Ziyad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rock_of_Gibraltar",
        "situacao": "ok",
        "texto": "The Rock of Gibraltar is a monolithic limestone mountain 426 m (1,398 ft) high dominating the western entrance to the Mediterranean Sea at the Strait of Gibraltar. It is situated near the end of a narrow 9-kilometre-long (5.6 mi) promontory stretching due south into the Mediterranean Sea and is located within the British territory of Gibraltar. The rock is 27 km northeast of Tarifa, Spain, the sou\n[…]\nThe Rock of Gibraltar forms a peninsula jutting out into the Strait of Gibraltar from the southern coast of Spain. The promontory is linked to the continent by means of a sandy tombolo with a maximum elevation of 3 m (9.8 ft). To the north, the Rock rises vertically from sea level up to 411.5 m (1,350 ft) at Rock Gun Battery. The Rock's highest point stands 426 m (1,398 ft) near the south end above the strait at O'Hara's Battery.\n[…]\nThe Moorish Castle is a relic of Moorish rule over Gibraltar, which lasted for 710 years. It was built in the year AD 711, when the Berber chieftain Tariq ibn-Ziyad first landed on the rock that still bears his name. The 17th-century Muslim historian Al-Maqqari wrote that upon landing, Tariq burned his ships.\n[…]\nThe saying \"solid as the Rock of Gibraltar\" is used to describe an entity that is very safe or firm.\n[…]\nThe Rock of Gibraltar, at the head of the Strait, is a prominent headland, which accumulates migrating birds during the passage periods. The vegetation on the Rock, unique in southern Iberia, provides a temporary home for many species of migratory birds that stop to rest and feed before continuing migration for their crossing over the sea and desert. In spring, they return to replenish before continuing their journeys to Western Europe, journeys which may take them as far as Greenland or Russia.\n[…]\nGovernment of Gibraltar (1931). \"Gibraltar\". Gibraltar: The Travel Key to the Mediterranean: 5–12.\n[…]\nMedia related to Rock of Gibraltar at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tariq_ibn_Ziyad",
        "situacao": "ok",
        "texto": "Tariq ibn Ziyad (Arabic: طارق إبن زياد Ṭāriq ibn Ziyād; c. 670 – c. 720), also known simply as Tarik in English, was an Umayyad commander who initiated the Muslim conquest of the Iberian Peninsula (present-day Spain and Portugal) against the Visigothic Kingdom in 711–718 AD.\n[…]\nHe led an army and crossed the Strait of Gibraltar from the North African coast, consolidating his troops at what is today known as the Rock of Gibraltar (named after him, from Arabic Jabal Ṭāriq (جبل طارق), literally 'mountain of Tariq').\n[…]\nAccording to David Nicolle, Tariq Ibn Ziyad was from a Berber tribe in what is now Algeria, from a tribe native to the Tafna. It currently inhabits the Béni Saf region in Algeria. Nicolle also notes that Tariq first appears in the historical record as governor of Tangier and was traditionally believed to have been born in Wadi Tafna, in present-day Tlemcen. He had also lived there with his wife prior to his governance of Tangier.\n[…]\nOn or about April 26, 711, the army of Tariq Bin Ziyad, composed of recent Berber converts to Islam, was landed on the Iberian peninsula (in what is now Spain) by Julian. They debarked at the foothills of a mountain which was henceforth named after him, Gibraltar (Jabal Tariq).\n[…]\nTariq Bin Ziyad split his army into four divisions, which went on to capture Córdoba under Mughith al-Rumi, Granada, and other places, while he remained at the head of the division which captured Toledo. Afterwards, he continued advancing towards the north, reaching Guadalajara and Astorga. Tariq was de facto governor of Hispania until the arrival of Musa a year later. Tariq's success led Musa to assemble 12,000 (mostly Arab) troops to plan a second invasion."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rochedo_de_Gibraltar",
        "situacao": "ok",
        "texto": "O Rochedo de Gibraltar (em inglês Rock of Gibraltar) ou Coluna de Hércules é um rochedo com 427 metros de altitude, localizado no território britânico ultramarino de Gibraltar, no extremo sul da Península Ibérica, dominando o Estreito de Gibraltar.\n[…]\nA maior parte do rochedo é área abrangida por uma reserva natural, onde vivem cerca de 250 macacos-de-gibraltar, os únicos macacos selvagens da Europa.\n[…]\nO Rochedo de Gibraltar é um monolito promontório de calcário. Esta curiosa formação geológica formou-se quando a placa tectónica africana colidiu com a da Europa.\n[…]\nO Rochedo é um ponto turístico muito visitado não só devido aos macacos que aí vivem como também pelas fortificações que são mantidas realisticamente como eram no século XVIII (e que resistiram sempre ao longo dos séculos, mesmo durante o Grande Cerco de Gibraltar), pelas grutas de São Miguel (Saint Michael caves) e pela esplêndida vista sobre o estreito e costas europeia e africana.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Uluru",
      "descricao": "Grande monólito de arenito no centro da Austrália, sagrado para o povo aborígene Anangu."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Durante mais de um século, os australianos chamaram o Uluru por qual nome inglês, dado em homenagem a um político?",
    "resposta": "Ayers Rock",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uluru"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uluru",
        "situacao": "ok",
        "texto": "Uluru (; Pitjantjatjara: Uluṟu [ˈʊlʊɻʊ]), also known as Ayers Rock ( AIRS) and officially gazetted as Uluru / Ayers Rock, is a large sandstone monolith. It crops out near the centre of Australia in the southern part of the Northern Territory, 335 km (208 mi) south-west of Alice Springs.\n[…]\nThe order of the dual names was officially reversed to \"Uluru / Ayers Rock\" on 6 November 2002 following a request from the Regional Tourism Association in Alice Springs.\n[…]\nWhile exploring the area in 1872, Giles sighted Kata Tjuta from a location near Kings Canyon and called it Mount Olga, while the following year Gosse observed Uluru and named it Ayers' Rock, in honour of the Chief Secretary of South Australia, Sir Henry Ayers.\n[…]\nIn 1958, the area that would become the Uluṟu-Kata Tjuṯa National Park was excised from the Petermann Reserve; it was placed under the management of the Northern Territory Reserves Board and named the Ayers Rock–Mount Olga National Park. The first ranger was Bill Harney, a well-recognised central Australian figure. By 1959, the first motel leases had been granted and Eddie Connellan had constructed an airstrip close to the northern side of Uluru.\n[…]\nThere are a number of differing accounts given, by outsiders, of Aboriginal ancestral stories for the origins of Uluru and its many cracks and fissures. One such account, taken from Robert Layton's (1989) Uluru: An Aboriginal history of Ayers Rock, reads as follows:\n[…]\nThe mulgara is mostly restricted to the transitional sand plain area, a narrow band of country that stretches from the vicinity of Uluru to the northern boundary of the park and into Ayers Rock Resort. This area also contains the marsupial mole, woma python and great desert skink.\n[…]\nIndigenous Australian art\n[…]\nUluru Statement from the Heart"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uluru",
        "situacao": "ok",
        "texto": "Uluru (também conhecido como Ayers Rock ou The Rock - \"a rocha\") é um monólito situado no norte da área central da Austrália, no Parque Nacional de Uluru-Kata Tjuta perto da pequena cidade de Yulara, 400 km a sudoeste de Alice Springs (25° 20′ 41″ S, 131° 02′ 07″ L).\n[…]\nÉ sagrada aos aborígenes e tem inúmeras fendas, cisternas (poços com água), cavernas rochosas e pinturas antigas. Ayers Rock era o nome dado a ela por colonos europeus, em homenagem ao primeiro-ministro da Austrália Meridional Henry Ayers. Uluru é o nome aborígene, e desde a década de 1980 foi o nome oficialmente escolhido, embora muitas pessoas, especialmente os não-australianos, ainda chamem de Ayers Rock.\n[…]\nEm 1985 o governo australiano devolveu a propriedade de Uluru aos aborígenes locais, os Anangu (aborígenes) arrendaram então de volta ao Governo Australiano pelo período de 99 anos como Parque Nacional.Escalar a pedra é uma atração popular para uma grande fração dos muitos turistas que visitam Ayers Rock a cada ano. Uma corda com alça torna a subida mais fácil, mas ainda é uma subida realmente longa e íngreme e muitos escaladores experientes desistem.\n[…]\nEm 1980 ocorreu o desaparecimento do bebê Azaria Chamberlain enquanto ela e os pais acampavam perto de Uluru. A mãe, Lindy Chamberlain, informou que Azaria tinha sido levada por um dingo (espécie de cachorro selvagem do deserto australiano), dando início ao julgamento mais famoso da história australiana, originando até mesmo um filme estrelado pela atriz Meryl Streep.\n[…]\nMedia relacionados com Uluru no Wikimedia Commons\n[…]\nParque Nacional Uluṟu - Kata Tjuṯa - Departamento Australiano de Ambiente e Recursos Hídricos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Baía de Ha Long",
      "descricao": "Baía do norte do Vietnã com milhares de ilhotas e torres de calcário que saem do mar."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome da Baía de Ha Long, no Vietnã, com milhares de ilhotas de calcário, significa o quê?",
    "resposta": "Dragão que desce",
    "distratores": [
      "Mil ilhas de pedra",
      "Mar das tartarugas",
      "Porta do céu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ha_Long_Bay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ha_Long_Bay",
        "situacao": "ok",
        "texto": "Hạ Long Bay or Halong Bay (Vietnamese: Vịnh Hạ Long, pronounced [vînˀ hâːˀ lawŋm] ) is a bay located in Northeastern Vietnam, administered by the city of Quảng Ninh. The name Hạ Long means \"descending dragon\". It features thousands of limestone karsts and islets in various shapes and sizes, for which it is listed as a UNESCO World Heritage Site and a popular travel destination.\n[…]\nHạ Long Bay was the site of the first ever raising of the new national flag of the Provisional Central Government of Vietnam on 5 June 1948 during the signing of the Halong Bay Agreements (Accords de la baie d’Along) by High Commissioner Emile Bollaert and President Nguyễn Văn Xuân.\n[…]\nIn writings about Hạ Long Bay, the following Vietnamese writers wrote:\n[…]\nHa Long, Hai Phong, and Hanoi are significant urban centers driving the economic development in northern Vietnam. The economic growth in these urban areas, coupled with the rapid rise of the southern regions in China, including Hong Kong, have led to increasing human pressures on Ha Long Bay. The coastal areas of Quang Ninh province and Hai Phong City have experienced rapid growth in infrastructure development, particularly in transportation, shipping, coal mining, and tourism-related industries.\n[…]\nSome experts suggest considering the expansion of the conservation area, not only limiting it to the small area of Ha Long Bay but also encompassing the surrounding sea area, including the areas close to the Vietnam–China border. With a length of about 300 km and a width of about 60 km, the entire area can be seen and conserved as a unique marine ecosystem of Vietnam.\n[…]\nHalong Bay entrance tickets 2026\n[…]\nThe Emerald Isles of Hạ Long Bay at NASA Earth Observatory, May 7, 2022\n[…]\nEnvironmental capacity Hạ Long Bay – Bai Tu Long. Publisher: Natural Science and Technology. Hanoi. Editor: Nguyen Khoa Son, ISBN 978-604-913-063-2 – in Vietnamese"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ba%C3%ADa_de_Ha_Long",
        "situacao": "ok",
        "texto": "A Baía de Ha Long ou Baía de Alongues (em português:\"Onde o Dragão entra no Oceano\"), com cerca de 1.969 ilhotas de calcário que se elevam das águas, é a mais conhecida baía do Vietname. A maior parte das ilhas não está habitada nem afectada pela presença humana. A beleza cénica do sítio é complementada pelo seu interesse biológico. As ilhas tem inúmeras praias, grutas e cavernas.\n[…]\nDe acordo com a lenda, quando um grande dragão que vivia nas montanhas correu até ao mar, a sua cauda cavou vales que mais tarde foram enchidos com água, deixando apenas pedaços de terra à superfície, ou seja, as inúmeras ilhas que se avistam na baía. A Baía de Ha Long foi declarada Património Mundial da UNESCO em 1993.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Amonite",
      "descricao": "Grupo extinto de moluscos cefalópodes marinhos de concha em espiral, muito comuns como fósseis."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os moluscos extintos de concha em espiral, tão comuns como fósseis, devem seu nome a qual deus egípcio, retratado com chifres de carneiro?",
    "resposta": "Amon",
    "distratores": [
      "Rá",
      "Osíris",
      "Anúbis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ammonoidea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ammonoidea",
        "situacao": "ok",
        "texto": "Ammonoids are extinct, typically coiled-shelled cephalopods composing the subclass Ammonoidea. They are more closely related to living octopuses, squid, and cuttlefish (which compose the clade Coleoidea) than they are to nautiluses (family Nautilidae), which their shells resemble.\n[…]\nGoniatitic – numerous undivided lobes and saddles. This pattern is characteristic of the Paleozoic ammonoids (orders Agoniatitida, Clymeniida, Goniatitida, and Prolecanitida).\n[…]\nAmmonoids with a shell shape diverging from the typical planispiral form are known as heteromorphs, instead forming a conch with detached whorls (open coiling) or non-planispiral coiling. These types of shells evolved four times in ammonoids, with the first forms appearing already in the Devonian period. In late Norian age in Triassic the first heteromorph ammonoid fossils belongs to the genus Rhabdoceras. The three other heteromorphic genera were Hannaoceras, Cochloceras and Choristoceras.\n[…]\nMany ammonoids probably lived in the open water of ancient seas, rather than at the sea bottom, because their fossils are often found in rocks laid down under conditions where no bottom-dwelling life is found. In general, they appear to have inhabited the upper 250 metres (820 ft) of the water column.\n[…]\nMany of them (such as Oxynoticeras) are thought to have been good swimmers, with flattened, discus-shaped, streamlined shells, although some ammonoids were less effective swimmers and were likely to have been slow-swimming bottom-dwellers. Synchrotron analysis of an aptychophoran ammonite revealed remains of isopod and mollusc larvae in its buccal cavity, indicating at least this kind of ammonite fed on plankton.\n[…]\nCretaceous Fossils Taxonomic Index for Order Ammonoitida\n[…]\ngoniat.org, a palaezoic ammonoid database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ammonoidea",
        "situacao": "ok",
        "texto": "Os amonoides (do latim científico Ammonoidea), também chamados de amonites ou amonitas, constituem um grupo extinto de moluscos cefalópodes surgido no período Devónico e que desapareceu na extinção K-T, no final do Cretáceo que também vitimou os dinossauros.\n[…]\nA concha das amonites apresenta geralmente a forma de uma espiral enrolada num plano (embora algumas espécies, denominadas heteromórficas , apresentem um enrolamento mais complexo e tridimensional) e é precisamente esta característica que determinou o seu nome. A aparência desses animais, na verdade, lembra vagamente a de um chifre enrolado, como o de um carneiro (o deus egípcio Amon , nos tempos helenístico e romano, era comumente representado como um homem com chifres de carneiro).\n[…]\nO famoso estudioso romano Plínio, o Velho (autor do tratado Naturalis Historia) definiu os fósseis destes animais como Ammonis cornua, \"chifres de Amon\". Muitas vezes o nome das espécies de amonitas termina em ceras, uma palavra grega (κέρας) cujo significado é, na verdade, \"chifre\" (por exemplo, Pleuroceras que etimologicamente significa chifre com costelas). As amonites são consideradas os fósseis por excelência, tanto que são frequentemente utilizadas como símbolo gráfico da paleontologia.\n[…]\nProvavelmente apenas uma linha filética do Ammonoidea sobreviveu à crise biológica, encontrada dentro da Phylloceratina : o género Psiloceras, que apareceu no final do Triássico. No Jurássico Inferior os amonóides voltam a espalhar-se com bastante rapidez, com formas, suturas e tipos de ornamentação cada vez mais complexos, e caracterizam-se por uma evolução iterativa, em que os tipos morfológicos são recorrentes e as formas extintas tendem a ser substituídas por outras semelhantes. .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Geysir",
      "descricao": "Gêiser no vale de Haukadalur, no sudoeste da Islândia, cujo nome deu origem à palavra gêiser."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra gêiser, usada para fontes que jorram água fervente, vem do nome de uma dessas fontes em qual país?",
    "resposta": "Islândia",
    "distratores": [
      "Nova Zelândia",
      "Estados Unidos",
      "Chile"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Geysir",
      "https://en.wikipedia.org/wiki/Geyser"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Geysir",
        "situacao": "ok",
        "texto": "Geysir (Icelandic pronunciation: [ˈceiːsɪr̥] ), sometimes known as The Great Geysir, is a geyser in south-western Iceland that geological studies suggest started forming about 1150 CE. The English word geyser (a periodically spouting hot spring) derives from Geysir. The name itself comes from the Icelandic verb geysa (\"to gush\"). Geysir lies in the Haukadalur valley on the slopes of Laugarfjall la\n[…]\nGeysir was officially protected by the Ministry for the Environment and Natural Resources on 17 June 2020.\n[…]\nJones, B.; Renaut, R.W.; Torfason, H.; Owen, R.B. (2007). \"The geological history of Geysir, Iceland: a tephrochronological approach to the dating of sinter\". Journal of the Geological Society. 164 (6): 1241–1252. doi:10.1144/0016-76492006-178.\n[…]\nJones, B.; Renaut, R.W. (2021). \"Multifaceted incremental growth of a geyser discharge apron – Evidence from Geysir, Haukadalur, Iceland\". Sedimentary Geology. 419 105905. doi:10.1016/j.sedgeo.2021.105905. ISSN 0037-0738.\n[…]\nStefánsson, R.; Guðmundsson, G.B.; Halldórsson, P. (2000). The two large earthquakes in the South Iceland seismic zone on June 17 and 21, 2000. Veðurstofa Íslands (PDF) (Report). Archived from the original (PDF) on 25 January 2022. Retrieved 3 February 2024.\n[…]\nWalter, T.R.; Jousset, P.; Allahbakhshi, M.; Witt, T.; Gudmundsson, M.T.; Hersir, G.P. (2020). \"Underwater and drone based photogrammetry reveals structural control at Geysir geothermal field in Iceland\". Journal of Volcanology and Geothermal Research. 391: 106282. Bibcode:2020JVGR..39106282W. doi:10.1016/j.jvolgeores.2018.01.010.\n[…]\nThe Great Geysir, Helgi Torfason of the Icelandic National Energy Authority, 1985 (no ISBN, but book available from the Geysir tourist center).\n[…]\nMedia related to Great Geysir at Wikimedia Commons\n[…]\nInformation and photos of Geysir and the geothermal area\n[…]\n\"Geysir\". Global Volcanism Program. Smithsonian Institution. Retrieved 25 June 2021."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Geyser",
        "situacao": "ok",
        "texto": "A geyser (, UK: ) is a spring with an intermittent water discharge ejected turbulently and accompanied by steam. The formation of geysers is fairly rare and is caused by particular hydrogeological conditions that exist only in a few places on Earth.\n[…]\nGeysers are fragile, and if conditions change, they may go dormant or extinct. Many have been destroyed simply by people throwing debris into them, while others have ceased to erupt due to dewatering by geothermal power plants. However, the Geysir in Iceland has had periods of activity and dormancy. During its long dormant periods, eruptions were sometimes artificially induced—often on special occasions—by the addition of surfactant soaps to the water.\n[…]\nThe Taupō Volcanic Zone is located on New Zealand's North Island. It is 350 kilometres (217 mi) long by 50 km wide (31 mi) and lies over a subduction zone in the Earth's crust. Mount Ruapehu marks its southwestern end, while the submarine Whakatāne seamount (85 km or 53 mi beyond Whakaari / White Island) is considered its northeastern limit. Many geysers in this zone were destroyed due to geothermal developments and a hydroelectric reservoir: only one geyser basin at Whakarewarewa remains.\n[…]\nTwo most prominent geysers of Iceland are located in Haukadalur. The Great Geysir, which first erupted in the 14th century, gave rise to the word geyser. By 1896, Geysir was almost dormant before an earthquake that year caused eruptions to begin again, occurring several times a day; but in 1916, eruptions all but ceased. Throughout much of the 20th century, eruptions did happen from time to time, usually following earthquakes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Geysir",
        "situacao": "ok",
        "texto": "Geysir (pronúncia em islandês: ​[ˈceiːsɪr̥] ()) é uma nascente vulcânica que ocasionalmente lança jatos intermitentes de água quente seguidos de colunas de vapor de água, situada a 85 km a leste de Reiquiavique, e localizada no vale de Haukadalur, no Círculo Dourado no sudoeste da Islândia. O nome desta fonte – Geysir – deriva da palavra islandesa geysa (”jorrar”) e deu origem ao termo português g\n[…]\nA 50 metros do Geysir, está um outro gêiser, muito mais ativo, o Strokkur.\n[…]\nIslândia\n[…]\nTurismo na Islândia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Alfred Wegener",
      "descricao": "Meteorologista e geofísico alemão, autor da teoria da deriva continental, morto em 1930."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Alfred Wegener, pai da deriva continental, era genro de qual climatologista, criador de uma famosa classificação dos climas da Terra?",
    "resposta": "Wladimir Köppen",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alfred_Wegener",
      "https://en.wikipedia.org/wiki/Wladimir_K%C3%B6ppen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alfred_Wegener",
        "situacao": "ok",
        "texto": "Alfred Lothar Wegener (; German: [ˈʔalfʁeːt ˈveːɡənɐ]; 1 November 1880 – November 1930) was a German climatologist, geologist, geophysicist, meteorologist, and polar researcher.\n[…]\nLater in 1913, after his return Wegener married Else Köppen, the daughter of his former teacher and mentor, the meteorologist Wladimir Köppen. The young pair lived in Marburg, where Wegener resumed his university lectureship. There his two older daughters were born, Hilde (1914–1936) and Sophie (\"Käte\", 1918–2012). Their third daughter Hanna Charlotte (\"Lotte\", 1920–1989) was born in Hamburg.\n[…]\nIn 1919, Wegener replaced Köppen as head of the Meteorological Department at the German Maritime Observatory (Deutsche Seewarte) and moved to Hamburg with his wife and their two daughters. In 1921 he was moreover appointed senior lecturer at the new University of Hamburg.\n[…]\nFrom 1919 to 1923 Wegener did pioneering work on reconstructing the climate of past eras (now known as \"paleoclimatology\"), closely in collaboration with Milutin Milanković, publishing Die Klimate der geologischen Vorzeit (\"The Climates of the Geological Past\") together with his father-in-law, Wladimir Köppen, in 1924.\n[…]\nEnglish language edition: Wegener, Alfred (1966). The Origin of Continents and Oceans. Translated by John Biram, from the fourth revised German edition. New York: Dover. ISBN 0-486-61708-4. British edition: Methuen, London (1968).\n[…]\nKöppen, W. &  Wegener, A. (1924): Die Klimate der geologischen Vorzeit,  Borntraeger Science Publishers. English language edition: The Climates of the Geological Past 2015.\n[…]\nWegener Institute website\n[…]\nNewspaper clippings about Alfred Wegener in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wladimir_K%C3%B6ppen",
        "situacao": "ok",
        "texto": "Wladimir Petrovich Köppen ( KUH-pən; German: [ˈkœpn̩]; Russian: Влади́мир Петро́вич Кёппен, romanized: Vladímir Petróvich Kyoppen, IPA: [vlɐˈdʲimʲɪr pʲɪˈtrovʲɪtɕ ˈkʲɵp(ː)ʲɪn]; 25 September 1846 – 22 June 1940) was a Russian–German geographer, meteorologist, climatologist and botanist. After studies in St. Petersburg, he spent the bulk of his life and professional career in Germany and Austria.\n[…]\nSnowy and cold climate\n[…]\nPolar climate\n[…]\nTowards the end of his life, Köppen cooperated with the German climatologist Rudolf Geiger to produce a five-volume work, Handbuch der Klimatologie (Handbook of Climatology). It was never completed, but several parts, three of them by Köppen, were published. After Köppen's death in 1940, Geiger continued to work on modifications to the climate classification system.\n[…]\nHe had a wife, Marie, and five children including his daughter Else, who married Köppen's student Alfred Wegener. Marie's sister Sophie and her children moved in with the Köppens in 1888.\n[…]\nKöppen, Wladimir and Wegener, Alfred (1924): The Climates of the Geological Past Facsimile of the German original and English translation of Die Klimate der Geologischen Vorzeit. Berlin; Stuttgart: Gebr. Borntraeger. ISBN 978-3-443-01088-1.\n[…]\nKöppen, Wladimir; Jörn Thiede (2018): Wladimir Köppen: Scholar for Life (Ein Gelehrtenleben für die Meteorologie). Borntraeger Science Publishers. ISBN 978-3-443-01100-0, 316pp. English and German language biography of Wladimir Köppen, highlighting his research with an updated bibliography.\n[…]\nWille, Robert-Jan Wille (2017): Colonizing the Free Atmosphere:  Wladimir Köppen’s ‘Aerology’, the German Maritime Observatory, and the Emergence of a Trans-Imperial Network of Weather Balloons and Kites, 1873–1906 Archived 2021-01-18 at the Wayback Machine, History of Meteorology 8 (2017).\n[…]\nNewspaper clippings about Wladimir Köppen in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfred_Wegener",
        "situacao": "ok",
        "texto": "Alfred Lothar Wegener (Berlim, 1 de novembro de 1880 – Groenlândia, cerca 5 de novembro de 1930) foi um geólogo, geofísico e meteorologista alemão.\n[…]\nOs alunos e funcionários de Wegener em Marburgo apreciaram particularmente seu talento para transmitir questões complicadas e resultados de pesquisas atuais de maneira clara e compreensível, sem sacrificar a precisão. Esses anos estão entre os períodos criativos mais importantes de Wegener. Em 6 de janeiro de 1912, ele apresentou ao público seus primeiros pensamentos sobre a deriva continental. Em 1911, ele ficou noivo de Else Köppen (1892–1992), que se tornou sua esposa dois anos depois.\n[…]\nApós seu retorno, Wegener se casou com Else Köppen. Ela era filha do professor e mentor anterior de Wegener, o meteorologista Wladimir Köppen. O jovem casal mudou-se para Marburg, onde Wegener retomou suas aulas particulares. O casamento gerou três filhas: Hilde (1914–1936) e Sophie Käte (1918-2012) nasceram em Marburg, e Hanna Charlotte (1920–1989) em Hamburgo.\n[…]\nEm 1915, a primeira edição de A Origem dos Continentes e Oceanos foi publicada, na qual Wegener explicava a sua teoria. Foi sucedida por outras edições em 1920, 1922 e 1929. Wegener afirmava que há cerca de 300 milhões de anos os continentes formavam uma única massa, Pangeia (do grego \"toda a Terra\"). A Pangeia fragmentou-se e os seus fragmentos andaram \"à deriva\" desde então.\n[…]\nKöppen, W. & Wegener, A. (1924): Die Klimate der geologischen Vorzeit, Borntraeger Science Publishers. (em alemão) Edição em inglês: The Climates of the Geological Past 2015.\n[…]\n«Instituto Alfred Wegener» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Gruta de Fingal",
      "descricao": "Caverna marinha de colunas de basalto na ilha desabitada de Staffa, nas Hébridas Interiores, na Escócia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A Gruta de Fingal, numa ilha escocesa, inspirou a abertura As Hébridas, de qual compositor alemão do século dezenove?",
    "resposta": "Felix Mendelssohn",
    "distratores": [
      "Robert Schumann",
      "Johannes Brahms",
      "Richard Wagner"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fingal%27s_Cave",
      "https://en.wikipedia.org/wiki/The_Hebrides_(overture)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fingal%27s_Cave",
        "situacao": "ok",
        "texto": "Fingal's Cave is a sea cave on the uninhabited island of Staffa, in the Inner Hebrides of Scotland, known for its natural acoustics. The National Trust for Scotland owns the cave as part of a national nature reserve. It became known as Fingal's Cave after the eponymous hero of an epic poem by 18th-century Scots poet-historian James Macpherson.\n[…]\nRomantic composer Felix Mendelssohn visited in 1829 and wrote an overture, The Hebrides, Op. 26, (also known as Fingal's Cave Overture), and was said to be inspired by the weird echoes in the cave. Mendelssohn's overture popularized the cave as a tourist destination. Other famous 19th-century visitors included author Jules Verne, who used it in his book Le Rayon Vert (The Green Ray), and mentions it in the novels Journey to the Center of the Earth and The Mysterious Island.\n[…]\nThe playwright August Strindberg also set scenes from his play A Dream Play in a place called \"Fingal's Grotta\". Scots novelist Sir Walter Scott described Fingal's Cave as \"one of the most extraordinary places I ever beheld.\n[…]\nArtist Matthew Barney used the cave along with the Giant's Causeway for the opening and closing scenes of his art film, Cremaster 3. In 2008, the video artist Richard Ashrowan spent several days recording the interior of Fingal's Cave for an exhibition at the Foksal Gallery in Poland.\n[…]\nLloyd House at Caltech has a hallway (\"alley\") named Fingal's Cave.\n[…]\nIt is likely that the township of Fingal, Tasmania was named after Macpherson's poetry rather than the cave itself.\n[…]\nEngraving of Fingal's cave by James Fittler in the digitised copy of Scotia Depicta, or the antiquities, castles, public buildings, noblemen and gentlemen's seats, cities, towns and picturesque scenery of Scotland Archived 13 June 2019 at the Wayback Machine, 1804 at National Library of Scotland"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Hebrides_(overture)",
        "situacao": "ok",
        "texto": "The Hebrides (; German: Die Hebriden) is a concert overture that was composed by Felix Mendelssohn in 1830, revised in 1832, and published the next year as Mendelssohn's Op. 26. Some consider it an early tone poem.\n[…]\nIt was inspired by one of Mendelssohn's trips to the British Isles, specifically an 1829 excursion to the Scottish island of Staffa, with its basalt sea cave known as Fingal's Cave. It was reported that the composer immediately jotted down the opening theme for his composition after seeing the island. He at first called the work To the Lonely Island or Zur einsamen Insel, but then settled on the present title.\n[…]\nAs an indication of the esteem in which it is held by musicians, Johannes Brahms once said \"I would gladly give all I have written, to have composed something like the Hebrides Overture\".\n[…]\nThe work was completed on 16 December 1830 and was originally entitled Die einsame Insel (The Lonely Island). However, Mendelssohn later revised the score and renamed the piece Die Hebriden (The Hebrides). Despite this, the title of Fingal's Cave was also used: on the orchestral parts he labelled the music The Hebrides, but on the score Mendelssohn labelled the music Fingal's Cave.\n[…]\nThe music, though labelled as an overture, is intended to stand as a complete work. Although programme music, it does not tell a specific story and is not \"about\" anything; instead, the piece depicts a mood and \"sets a scene\", making it an early example of such musical tone poems. The overture consists of two primary themes; the opening notes of the overture state the theme Mendelssohn wrote while visiting the cave, and is played initially by the violas, cellos, and bassoons.\n[…]\nMendelssohn on Mull Festival"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gruta_de_Fingal",
        "situacao": "ok",
        "texto": "A Gruta de Fingal é uma caverna marinha na ilha desabitada de Staffa, nas Hébridas Interiores, Escócia, que faz parte de um reserva nacional. É formada por basalto hexagonal, similar em estrutura - por causa da mesma origem num fluxo de lava - da Giant's Causeway, a Calçada dos Gigantes, na Irlanda do Norte. O seu tamanho e tecto de arcos naturais, juntamente com os arrepiantes ecos produzidos pel\n[…]\nO nome gaélico da gruta, Uamh-Binn, significa \"Gruta da melodia\".\n[…]\nA caverna foi \"descoberta\" no século XVIII pelo naturalista Sir Joseph Banks, em 1772. O nome Gruta de Fingal ficou conhecido com a composição de Mendelssohn da abertura Die Hebriden (\"As Hébridas\" op. 26), inspirada nos ecos da gruta (Fingal, Fionn mac Cumhail, foi o herói epónimo de um poema escrito pelo poeta e historiador escocês James Macpherson).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Monte Roraima",
      "descricao": "Tepui de topo plano na tríplice fronteira entre Brasil, Venezuela e Guiana."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Monte Roraima é apontado como inspiração de qual romance de Arthur Conan Doyle, com dinossauros vivendo num planalto isolado?",
    "resposta": "O Mundo Perdido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Roraima",
      "https://en.wikipedia.org/wiki/The_Lost_World_(Conan_Doyle_novel)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Roraima",
        "situacao": "ok",
        "texto": "Mount Roraima (Spanish: Monte Roraima; Tepuy Roraima; Cerro Roraima; Portuguese: Monte Roraima) is the highest of the Pacaraima chain of tepuis (table-top mountain) or plateaux in South America. It is located at the junction of Brazil, Guyana and Venezuela. A characteristic, large, flat-topped mountain surrounded by cliffs 400–1,000 m (1,300–3,300 ft) high, its highest point is located on the sout\n[…]\nSubsequently, teams of botanists, zoologists, and geologists mounted numerous expeditions to Mount Roraima to study its largely unknown flora and fauna and distinctive geological conditions.\n[…]\nMount Roraima and Mount Aoyan are the only flat-topped mountains in the Canaima National Park that can be climbed by hikers, with a monthly quota of 200 people. Its ascent takes three to five days in total, the summit route is on a natural slope on the southwestern cliffs of Mount Roraima, it does not require any special equipment or training, so it is chosen by almost all hikers, the only difficulty is that some streams and small waterfalls may become difficult to pass under heavy rain.\n[…]\nHowever, the length of the trail requires climbers to spend one night at the base camp at the foot of the cliff at an elevation of about 2,000 meters, and another night at the summit, taking several days to explore the plateau and two days to descend. The best time to climb Mount Roraima is in the dry season, however, when the sun is very strong and the temperature is high, it can make the road to the mountain difficult.\n[…]\n\"Mount Roraima information\". mountroraima.net.\n[…]\n\"Mount Roraima\". SummitPost.org.\n[…]\nBrazilian climber Eliseu Frechou and his team (2010). Dias de Tempestade [Days of Storm]. Vimeo (28m short documentary) (in Portuguese). 15300288. — shows a 2010 climb of Mount Roraima from the Guyana side\n[…]\n\"Mount Roraima guide\". explorationjunkie.com.\n[…]\n\"Mount Roraima interesting facts\". ospreyexpeditions.com. 2022."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Lost_World_(Conan_Doyle_novel)",
        "situacao": "ok",
        "texto": "The Lost World is an adventure and science fiction novel by British writer Sir Arthur Conan Doyle recounting an expedition to a remote plateau in the Amazon basin of South America where dinosaurs and other prehistoric animals still survive, along with a tribe of vicious ape-like creatures that are in conflict with a group of indigenous Indians.\n[…]\nThe Lost World is widely considered one of Conan Doyle’s best novels for its exciting narrative, imaginative setting, and vivid characters, setting a standard for similar later adventure stories. It has never been out of print.\n[…]\nGreg Bear's 1998 novel Dinosaur Summer is a sequel to The Lost World, set in an alternate history 1947. In the context of Bear's novel, The Lost World was a nonfiction work published by Doyle as recounted to him by Professor Challenger.\n[…]\nFawcett wrote in his posthumously published memoirs: \"Monsters from the dawn of Man's existence might still roam these heights unchallenged, imprisoned and protected by unscalable cliffs. So thought Conan Doyle when later in London I spoke of these hills and showed photographs of them. He mentioned an idea for a novel on Central South America and asked for information, which I told him I should be glad to supply.\n[…]\nA 1996 Science Fiction Studies review of an annotated edition of the novel suggested that another inspiration for the story may have been the 1890s contested political history of the Pacaraima Mountains plateaux, and Mount Roraima in particular.\n[…]\nSir Arthur Conan Doyle's The Lost World (1999–2002; TV series)\n[…]\nAdventures in Sir Arthur Conan Doyle's The Lost World (2002) (Canadian-French-Luxembourger animated series)\n[…]\nDinosaurs! (1966, an audio dramatic version of The Lost World adapted and directed by Ronald Liss and recorded by permission of the Estate of Sir Arthur Conan Doyle; MGM/Leo the Lion Records C/CH-1016)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Roraima",
        "situacao": "ok",
        "texto": "Monte Roraima é uma montanha localizada na América do Sul, na tríplice fronteira entre Brasil, Venezuela e Guiana. Constitui um tepui, um tipo de monte em formato de mesa bastante característico do planalto das Guianas. Delimitado por escarpas de cerca de 1 000 metros de altura, seu planalto apresenta um ambiente totalmente diferente da floresta tropical e da savana que se estende a seus pés.\n[…]\nConhecido pelos ocidentais apenas no século XIX, o monte Roraima foi escalado pela primeira vez em 1884, por uma expedição britânica chefiada por Everard Ferdinand im Thurn. Entretanto, apesar das diversas expedições posteriores, sua fauna, flora e geologia permanecem largamente desconhecidas. A história de uma dessas incursões inspirou sir Arthur Conan Doyle a escrever o livro O Mundo Perdido, em 1912.\n[…]\nO monte Roraima é um tepui, um tipo de platô cercado por falésias, típico do planalto das Guianas. A montanha tem formato de arco no sentido norte-sul-leste-oeste com um estreitamento central causado pela presença de um grande circo natural em seu flanco noroeste.\n[…]\nNo interior do planalto, inúmeras cavernas e sumidouros conferem ao monte Roraima uma estrutura pseudocárstica. Essas cavernas formam uma verdadeira rede, denominada \"Monte Roraima Sur\" (\"Monte Roraima Sul\") Com 10 820 metros de extensão e um desnível de setenta e dois metros, é a maior caverna de quartzo do mundo.\n[…]\nApesar de suas paredes verticais tornarem o acesso muito difícil, este foi o primeiro grande tepui a ser escalado. Everard im Thurn e Harry Perkins lideraram uma expedição, patrocinada pela Royal Geographical Society, que atingiu o pico em 18 de dezembro de 1884 – graças, em parte, às sugestões e comentários fornecidos por Henry Whitely. A equipe localizou uma passagem até então desconhecida mesmo pelos Pemons, que diziam que o topo das falésias permaneciam desconhecidos desde o início do mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Parque Florestal Nacional de Zhangjiajie",
      "descricao": "Parque na província de Hunan, na China, com milhares de pilares de arenito cobertos de vegetação."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os pilares de arenito do parque de Zhangjiajie, na China, inspiraram as montanhas flutuantes de qual filme de ficção científica de 2009?",
    "resposta": "Avatar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park",
        "situacao": "ok",
        "texto": "Zhangjiajie National Forest Park (Chinese: 湖南张家界国家森林公园; pinyin: Húnán Zhāngjiājiè Guójiā Sēnlín Gōngyuán; lit. 'Hunan Zhangjiajie National Forest Park') is a national forest park located in Zhangjiajie, Hunan Province, China. It is one of several national parks within the Wulingyuan Scenic Area.\n[…]\nIn 1982, the park was recognized as China's first national forest park with an area of 4,810 ha (11,900 acres). Zhangjiajie National Forest Park is part of a much larger 397.5 km2 (153.5 sq mi) Wulingyuan Scenic Area. In 1992, Wulingyuan was officially recognized as a UNESCO World Heritage Site. It was then approved by the Ministry of Land and Resources as Zhangjiajie Sandstone Peak Forest National Geopark (3,600 km2 (1,400 sq mi)) in 2001.\n[…]\nOne of the park's quartz-sandstone pillars, the 1,080-metre (3,540 ft)  Southern Sky Column, was officially renamed \"Avatar Hallelujah Mountain\" (Chinese: 阿凡达-哈利路亚山; pinyin: Āfándá hālìlùyà shān) in honor of the movie Avatar in January 2010. The film's director and production designers said that they drew inspiration for the floating rocks from mountains from around the world, but mainly from Guilin, Huangshan, and Zhangjiajie in Hunan province.\n[…]\nIn August 2016, Zhangjiajie Grand Canyon opened the Zhangjiajie Grand Canyon Glass Bridge, the longest (430 m (1,410 ft)) and highest (300 m (980 ft)) pedestrian glass bridge in the world. Thirteen days after opening, the bridge was closed due to the sheer number of visitors. On 30 September 2016, the bridge reopened after adjustments to its logistics and safety measures for handling a large number of tourists.\n[…]\nAvatar Hallelujah Mountain, the inspiration for the floating mountains in the movie “Avatar.” Atlas Obscura article with photos."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Torre do Diabo",
      "descricao": "Grande rochedo de colunas de rocha ígnea no nordeste do Wyoming, nos Estados Unidos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A Torre do Diabo, rochedo de colunas vulcânicas no Wyoming, é o cenário do encontro com alienígenas em qual filme de Steven Spielberg?",
    "resposta": "Contatos Imediatos do Terceiro Grau",
    "fonte": [
      "https://en.wikipedia.org/wiki/Devils_Tower"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Devils_Tower",
        "situacao": "ok",
        "texto": "Devils Tower (also known as Matȟó Thípila or Bear Lodge) is a laccolithic butte, composed of igneous rock in the Bear Lodge Ranger District of the Black Hills, near Hulett and Sundance in Crook County, northeastern Wyoming, above the Belle Fourche River. It rises 1,267 feet (386 m) above the river, standing 867 ft (264 m) from summit to base. The summit is 5,112 ft (1,558 m) above sea level.\n[…]\nDevils Tower inspired many geomyths.\n[…]\nIn 1941, George Hopkins parachuted onto Devils Tower, without permission, as a publicity stunt resulting from a bet. He had intended to descend by a 1,000-foot (300 m) rope dropped to him after successfully landing on the butte, but the package containing the rope, a sledgehammer, and a car axle to be driven into the rock as an anchor point, slid over the edge.\n[…]\nToday, hundreds of climbers scale the sheer rock walls of Devils Tower each summer. Most common is the Durrance Route, which was the second free-climbing route, established in 1938. Many established and documented climbing routes cover every side of the tower, ascending the various vertical cracks and columns of the rock. The difficulty of these routes ranges from relatively easy to some of the most challenging in the world.\n[…]\nSeven people have died climbing Devils Tower in the park's 119-year history. Rescues of stranded and underequipped climbers on the formation are common. The most recent fatality was in September 2024, when a climber fell to his death while descending, leaving his climbing partner stranded without a rope on the face of the tower until help arrived.\n[…]\nDevils Tower National Monument protects many species of wildlife, such as white-tailed deer, prairie dogs, and bald eagles.\n[…]\nFour areas of Devils Tower National Monument are on the National Register of Historic Places:\n[…]\nDevils Tower National Monument – National Park Service\n[…]\n450 megapixel high-resolution photo of Devils Tower"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torre_do_Diabo",
        "situacao": "ok",
        "texto": "A Devils Tower (em português Torre do Diabo) é um lacólito colunar, com topo relativamente plano, que possui 275 metros de altura. Localiza-se na região nordeste do estado de Wyoming, nos Estados Unidos e se destaca do relevo ao seu redor. É composicionalmente similar à rocha fonólito.\n[…]\nNa cultura popular, o monólito é famoso por ter aparecido no filme de ficção científica Contatos Imediatos do Terceiro Grau (1977), de Steven Spielberg.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Erupção do Monte Santa Helena de 1980",
      "descricao": "Erupção explosiva do vulcão Monte Santa Helena, no estado de Washington, nos Estados Unidos, em 18 de maio de 1980."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na erupção do Monte Santa Helena, em 1980, morreu um idoso que se recusou a deixar a montanha. Que nome ele tinha em comum com um presidente americano?",
    "resposta": "Harry Truman",
    "fonte": [
      "https://en.wikipedia.org/wiki/Harry_R._Truman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Harry_R._Truman",
        "situacao": "ok",
        "texto": "Harry R. Truman (October 30, 1896 – May 18, 1980) was an American businessman, bootlegger, and prospector. He lived near Mount St. Helens, a volcano in the Cascade Range in the state of Washington, and was the owner and caretaker of Mount St. Helens Lodge at Spirit Lake near the base of the mountain. After Mount St.\n[…]\nTruman was the subject of the books Truman of St. Helens: The Man and His Mountain, written by his niece Shirley Rosen, and The Legend of Harry Truman, written by his sister, Geri Whiting. He was portrayed by Art Carney, his favorite actor, in the 1981 docudrama St. Helens. Memorabilia were sold in the area surrounding Mount St. Helens, including Harry R. Truman hats, pictures, posters, and postcards.\n[…]\nAccording to The Washington Star, more than 100 songs had been composed in Truman's honor by 1981, in addition to a commemorative album entitled The Musical Legend Of Harry Truman — A Very Special Collection Of Mount St. Helens' Volcano Songs. Lula Belle Garland wrote \"The Legend of Harry And The Mountain,\" which was recorded in 1980 by Ron Shaw & The Desert Wind Band. Musicians Ron Allen and Steve Asplund wrote a country rock song in 1980 called \"Harry Truman, Your Spirit Still Lives On\".\n[…]\nOne of the major characters from the first two seasons of TV show Twin Peaks (1990–91) was named Sheriff Harry S. Truman in his honor. Billy Jonas included Truman's narrative in his song \"Old St. Helen\" in 1993. He is the subject of the 2007 song \"Harry Truman\" written and recorded by Irish band Headgear.\n[…]\nTruman Trail and Harry's Ridge in the Mount St. Helens region are named after him. The Harry R. Truman Memorial Park was named in his honor in Castle Rock, Washington, though it later was renamed Castle Rock Lions Club Volunteer Park.\n[…]\n\"Harry (Of Mount Saint Helens)\" Recorded in 1982 by Penny Lew"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Grafite",
      "descricao": "Mineral formado por carbono puro disposto em camadas, macio e escuro, usado na ponta dos lápis."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o grafite da ponta do lápis e o diamante têm em comum?",
    "resposta": "São feitos só de carbono",
    "fonte": [
      "https://en.wikipedia.org/wiki/Graphite",
      "https://en.wikipedia.org/wiki/Diamond"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Graphite",
        "situacao": "ok",
        "texto": "Graphite () is a crystalline allotrope (form) of the element carbon. It consists of many stacked layers of graphene, typically in excess of hundreds of layers. Graphite occurs naturally and is the most stable form of carbon under standard conditions.\n[…]\nHigh-purity monolithics are often used as a continuous furnace lining instead of carbon-magnesite bricks.\n[…]\nElectrolytic aluminium smelting also uses graphitic carbon electrodes. On a much smaller scale, synthetic graphite electrodes are used in electrical discharge machining (EDM), commonly to make injection molds for plastics.\n[…]\nThe mechanical properties of carbon fiber graphite-reinforced plastic composites and grey cast iron are strongly influenced by the role of graphite in these materials. In this context, the term \"(100%) graphite\" is often loosely used to refer to a pure mixture of carbon reinforcement and resin, while the term \"composite\" is used for composite materials with additional ingredients.\n[…]\nThe exfoliation process for bulk graphite, which involves separating the carbon layers within graphite, has been extensively studied between 2012 and 2021. Specifically, ultrasonic and thermal exfoliation have been the two most popular approaches worldwide, with 4,267 and 2,579 patent families, respectively, significantly more than for either the chemical or electrochemical alternatives.\n[…]\nCarbon brushes represent a long-explored graphite application area. There have been few inventions in this area over the last decade, with less than 300 patent families filed from 2012 to 2021, very significantly less than between 1992 and 2011.\n[…]\nLipson, H.; Stokes, A. R. (1942). \"A New Structure of Carbon\". Nature. 149 (3777): 328. Bibcode:1942Natur.149Q.328L. doi:10.1038/149328a0. S2CID 36502694."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Diamond",
        "situacao": "ok",
        "texto": "Diamond is a mineral form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. Diamond is a tasteless, odorless, strong, brittle solid, a poor conductor of electricity, colorless in pure form, and insoluble in water. Another solid form of carbon known as graphite is the chemically stable form of carbon at room temperature and pressure, but diamond is metastabl\n[…]\nUsing probes such as polarized light, photoluminescence, and cathodoluminescence, a series of growth zones can be identified in diamonds. The characteristic pattern in diamonds from the lithosphere involves a nearly concentric series of zones with very thin oscillations in luminescence and alternating episodes where the carbon is resorbed by the fluid and then grown again.\n[…]\nDiamonds may exist in carbon-rich stars, particularly white dwarfs. One theory for the origin of carbonado, the toughest form of diamond, is that it originated in a white dwarf or supernova. Diamonds formed in stars may have been the first minerals.\n[…]\nLess expensive industrial-grade diamonds (bort) with more flaws and poorer color than gems, are used for such purposes. Diamond is not suitable for machining ferrous alloys at high speeds, as carbon is soluble in iron at the high temperatures created by high-speed machining, leading to greatly increased wear on diamond tools compared to alternatives.\n[…]\nCoatings are increasingly used to give a diamond simulant such as cubic zirconia a more \"diamond-like\" appearance. One such substance is diamond-like carbon—an amorphous carbonaceous material that has some physical properties similar to those of the diamond. Advertising suggests that such a coating would transfer some of these diamond-like properties to the coated stone, hence enhancing the diamond simulant. Techniques such as Raman spectroscopy should easily identify such a treatment.\n[…]\nDeep carbon cycle"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grafite",
        "situacao": "ok",
        "texto": "Grafite (ou, raramente, grafita) é um mineral, um dos alótropos do carbono. Ao contrário do diamante, a grafite é um condutor elétrico. Por isso possui aplicações em eletrônica, como em eletrodos e baterias. Em razão do seu alto ponto de fusão, também possui aplicações como material refratário, como em cadinhos de fundição de aço. A grafite pode ser dissolvida em ácido clorossulfúrico.\n[…]\nA grafite corresponde a uma das quatro formas alotrópicas do carbono. As outras são o diamante, o fulereno e o grafeno.\n[…]\nEm 1565, na Grã-Bretanha, é localizado o primeiro registro do uso do grafite nas minas dos lápis, feitos como um sanduíche de dois pedaços de madeira com a grafite no meio. O primeiro registro do uso do Lápis na Alemanha ocorre em 1644 . Em 1761 na aldeia de Stein, perto de Nuremberg, o marceneiro Kaspar Faber (1730 - 1784) começa a produzir lápis na sua oficina, que seu filho Anton Wilhelm Faber (1758-1819) transformaria mais tarde em uma próspera fábrica.\n[…]\nA condutividade e outras características físicas da grafite, como plano de clivagem e características lubrificantes se devem ao arranjo dos átomos no material, formando estruturas em forma de folhas, atraídas por ligações fracas (forças de Van der Waals). Nas \"folhas\", os átomos estão organizados como hexágonos, à semelhança dos favos de uma colmeia, onde cada átomo de carbono ocupa um vértice. Como nesta estrutura cada carbono se liga a outros três átomos, \"sobra\" uma ligação para cada átomo.\n[…]\nA grafite pode ser natural ou sintética. A grafite natural é umas das formas alotrópicas do carbono encontradas na natureza, enquanto a sintética é produzida industrialmente com o uso de altas temperaturas e pressão, empregando-se matérias primas tais como o coque da hulha ou o antracito.\n[…]\nFibra de carbono\n[…]\nDiamante\n[…]\nalótropo do carbono\n[…]\nTimcal Graphite & Carbon",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Núcleo da Terra",
      "descricao": "Parte mais interna do planeta, formada por um núcleo externo líquido e um núcleo interno sólido."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo as estimativas dos cientistas, o centro da Terra é mais ou menos tão quente quanto qual lugar do Sistema Solar?",
    "resposta": "A superfície do Sol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Earth%27s_inner_core"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Earth%27s_inner_core",
        "situacao": "ok",
        "texto": "Earth's inner core is the innermost geologic layer of the planet Earth. It is primarily a solid ball with a radius of about 1,230 km (760 mi), which is about 20% of Earth's radius or 70% of the Moon's radius. As recently as February 2025 there are indications that the previously believed solid iron-nickel sphere is partially deformable and undergoing viscous changes.\n[…]\nThe heat flux at the core–mantle boundary at present time can be reliably estimated because it is related to the measured heat flux at Earth's surface and to the measured rate of mantle convection.\n[…]\nIn 2001, S. Labrosse and others, assuming that there were no radioactive elements in the core, gave an estimate of 1±0.5 billion years for the age of the inner core — considerably less than the estimated age of the Earth and of its liquid core (about 4.5 billion years) In 2003, the same group concluded that, if the core contained a reasonable amount of radioactive elements, the inner core's age could be a few hundred million years older.\n[…]\nThe higher values for electrical conductivity led to increased estimates of the thermal conductivity, to 90 W/m·K; which, in turn, lowered estimates of its age to less than 700 million years old.\n[…]\nAnother way to estimate the age of the Earth is to analyze changes in the magnetic field of Earth during its history, as trapped in rocks that formed at various times (the \"paleomagnetic record\"). The presence or absence of the solid inner core could result in different dynamic processes in the core that could lead to noticeable changes in the magnetic field.\n[…]\nFrom their age estimate they derived a rather modest value for the thermal conductivity of the outer core, that allowed for simpler models of the Earth's thermal evolution."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/N%C3%BAcleo_interno",
        "situacao": "ok",
        "texto": "O núcleo interno é  a parte mais interna da Terra, formado principalmente por ferro e níquel. Experimentos revelaram a estimativa do núcleo interno sólido do planeta, colocando-o entre 1 bilhão e 1,3 bilhão de anos. A temperatura do núcleo é de  cerca de 5 mil graus Celsius. Mesmo com as altas temperaturas, o núcleo interno é sólido. O núcleo interno da Terra parece ter outro núcleo ainda mais int\n[…]\nA sismóloga dinamarquesa Inge Lehmann descobriu que a Terra tinha um núcleo interno sólido distinto de seu núcleo externo derretido em 1936.\n[…]\nAs teorias sobre a idade do núcleo fazem necessariamente parte das teorias da história da Terra como um todo. Este tem sido um tópico muito debatido e ainda está sendo discutido hoje. É amplamente aceito que o núcleo interno sólido da Terra se formou a partir de um núcleo inicialmente totalmente líquido à medida que a Terra esfriava. No entanto, ainda não há evidências firmes de quando esse processo começou.\n[…]\nNão há evidências diretas ainda sobre a composição do núcleo interno. No entanto, com base na prevalência relativa de vários elementos químicos no Sistema Solar, a teoria da formação planetária e as restrições impostas ou implícitas pela química do resto do volume da Terra, acredita-se que o núcleo interno consiste principalmente de uma liga ferro-níquel.\n[…]\nMuitos cientistas inicialmente esperavam que o núcleo interno fosse homogêneo, porque o mesmo processo deveria ter continuado uniformemente ao longo de sua formação. Foi até sugerido que o núcleo interno da Terra poderia ser um único cristal de ferro.\n[…]\nAcredita-se que o núcleo interno da Terra cresça lentamente à medida que o núcleo externo líquido na fronteira com o núcleo interno esfria e se solidifica devido ao resfriamento gradual do interior da Terra (aproximadamente 100 graus Celsius por trilhão de anos).\n[…]\nNúcleo (geologia)\n[…]\nNúcleo externo\n[…]\nO núcleo terrestre (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Serra Pelada",
      "descricao": "Local de garimpo no sudeste do Pará, palco de uma grande corrida de garimpeiros nos anos 1980."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que fotógrafo brasileiro registrou em preto e branco os milhares de garimpeiros enlameados de Serra Pelada, em imagens famosas no mundo todo?",
    "resposta": "Sebastião Salgado",
    "distratores": [
      "Pierre Verger",
      "Evandro Teixeira",
      "Marc Ferrez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Serra_Pelada",
      "https://en.wikipedia.org/wiki/Sebasti%C3%A3o_Salgado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Serra_Pelada",
        "situacao": "ok",
        "texto": "Serra Pelada (English: \"Bald Ridge\") is a Brazilian village and district of the Municipality of Curionópolis, in the southeast of Pará State. A former boomtown, it is best known for its open-pit mine, which operated from 1980 until the early 90s and is now a polluted lake.\n[…]\nSerra Pelada lies 430 kilometres (270 mi) south of the mouth of the Amazon River, and was rainforest until its initial settlement in the late 1970s. Its mine was made infamous by the still images taken by Alfredo Jaar and later by Sebastião Salgado and the first section of Godfrey Reggio's 1988 documentary Powaqqatsi, showing an anthill of workers moving vast amounts of ore by hand.\n[…]\nSebastião Salgado's 1986 photographs of the mine recount that successful miners were entitled to wear striped shirts if they found a lode. The mine was patrolled by armed soldiers to prevent smuggling and clashes between prospectors.\n[…]\nIn 1986, during the waning years of artisanal mining at Serra Pelada, Sebastião Salgado visited the mine to photograph for his Workers series, which aimed to document manual labor around the globe. While Salgado was hardly the first photographer or photojournalist to visit the mine, most previous photographers had shot in color and only visited for a day, whereas Salgado stayed on site for four weeks and shot in black-and-white.\n[…]\nImages from the series were first published in the Sunday Times Magazine. They went on to be some of Salgado's most famous, and were published several times in their own dedicated book by Taschen.\n[…]\nSerra Pelada, 2013 Brazilian action film\n[…]\nThe Salt of the Earth, a 2014 documentary film about Brazilian photographer Sebastião Salgado, whose most iconic works featured the miners of Serra Pelada"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sebasti%C3%A3o_Salgado",
        "situacao": "ok",
        "texto": "Sebastião Ribeiro Salgado Júnior (8 February 1944 – 23 May 2025) was a Brazilian social documentary photographer and photojournalist.\n[…]\nSalgado, Sebastião; Galeano, Eduardo; Ritchin, Fred (2004). Sebastião Salgado: An uncertain grace. London: Thames & Hudson. ISBN 978-0-500-28489-6. OCLC 56457689.\n[…]\nSebastião Salgado: Workers: an archaeology of the industrial age. London: Phaidon. 1993. ISBN 978-0-7148-2931-9. OCLC 471602337.\n[…]\nSalgado, Sebastião (2009). Trabalhadores : uma arqueologia da era industrial. São Paulo: Companhia das Letras. ISBN 978-85-7164-588-2. OCLC 859535737.\n[…]\nSalgado, Sebastião; Buarque de Holanda, Francisco; Saramago, José; Landers, Clifford (1997). Terra: struggle of the landless. London: Phaidon Press. ISBN 0-7148-3636-2. OCLC 610974180.\n[…]\nSalgado, Sebastião (2000). Migrations: humanity in transition. New York: Aperture. ISBN 978-0-89381-891-3. OCLC 914864396.\n[…]\nSalgado, Sebastião; Wanick Salgado, Lélia (2016). Exodus. Cologne: Taschen. ISBN 978-3-8365-6130-3. OCLC 959255065.\n[…]\nIn 2025, Fotografiska Shanghai presented Retrospective, the first major posthumous retrospective of Sebastião Salgado, bringing together works from across his career including Other Americas, Sahel, Workers, Migrations, and Genesis.\n[…]\nBiography: Sebastião Salgado at The Guardian\n[…]\n\"Sebastião Salgado: The silent drama of photography\" TED Talk (17 minute video)\n[…]\n\"Genesis by Sebastião Salgado: Exhibition Review\", Huffington Post UK, 2013\n[…]\n\"Timeless Tales by Sebastião Salgado\", Light and Life Academy – Photography College, 2001\n[…]\nSebastião Salgado at Encyclopædia Britannica\n[…]\nSebastião Salgado at IMDb\n[…]\nSebastião Salgado discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Serra_Pelada",
        "situacao": "ok",
        "texto": "A Serra Pelada é uma localidade brasileira, vila e distrito do município de Curionópolis, no sudeste do Pará.\n[…]\nAo final do primeiro semestre de 1980, cerca de 30 mil garimpeiros já se haviam deslocado para a área, fato que motivou o governo João Figueiredo a indicar o major Sebastião Curió para capitanear o garimpo.\n[…]\nEntre 1982 e 1983 a DOCEGEO concluiu as prospecções na Serra Pelada, enviando o relatório ao Departamento Nacional de Produção Mineral (DNPM), onde neste informava que o garimpo seria fechado em 15 de novembro de 1983. A partir de então, o Sindicato dos Garimpeiros, com o recém eleito deputado federal pelo PDS Sebastião Curió, iniciam as pressões para a prorrogação da atividade mineral no local, conseguindo algumas vitórias nesse sentido, como a lei federal nº 7194, de 11 de junho de 1984.\n[…]\nEm 1984 Serra Pelada chegou ao seu ápice em relação ao número de pessoas, com oitenta mil residentes, que a efeito de comparação, superavam os quase sessenta mil habitantes registrados no município de Marabá no censo de 1980. Porém, neste mesmo ano, a produção despenca para 3,9 toneladas e a cava atinge 200 metros de profundidade, impossibilitando a atividade manual. Desde o ano anterior já se registravam vários distúrbios dos garimpeiros temerosos dos rumores da fechada do garimpo.\n[…]\nNo aspecto socioeconômico, Serra Pelada registra índices de pobreza muito altos, sendo um dos locais com maior desigualdade econômica e com menor desenvolvimento humano do Brasil.\n[…]\nOutras festividades populares importantes são as Festas Juninas e a Cavalgada da Serra Pelada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Monte Everest",
      "descricao": "Montanha do Himalaia, na fronteira entre Nepal e China, o ponto mais alto da Terra acima do nível do mar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Himalaia, onde fica o Everest, se ergueu e continua subindo por causa da colisão da Ásia com qual placa tectônica?",
    "resposta": "Placa Indiana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Geology_of_the_Himalayas",
      "https://en.wikipedia.org/wiki/Mount_Everest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Geology_of_the_Himalayas",
        "situacao": "ok",
        "texto": "The geology of the Himalayas is one of the most dramatic and visible creations of the immense mountain range formed by plate tectonic forces and sculpted by weathering and erosion. The Himalayas, which stretch over 2400 km between the Namcha Barwa syntaxis at the eastern end of the mountain range and the Nanga Parbat syntaxis at the western end, are the result of an ongoing orogeny — the collision\n[…]\nIn the Late Cretaceous (84 Ma), the Indian plate began its very rapid northward drift covering a distance of about 6000 km, with the oceanic-oceanic subduction continuing until the final closure of the oceanic basin and the obduction of oceanic ophiolite onto India and the beginning of continent-continent tectonic interaction starting at about 65 Ma in the Central Himalaya.\n[…]\nThe Himalayan tectonics result in long term deformation. This includes shortening across the Himalayas that range from 900 to 1,500 km. Said shortening is a product of the significant ongoing seismic activity. The continued convergence of the Indian plate with the Eurasian plate results in mega earthquakes. These seismic events can reach greater than MW 8 and result in intense damage to infrastructure.\n[…]\nStratigraphic analysis of these sediments yields important indications on the geological history of the northern continental margin of the Indian sub-continent from its Gondwanian evolution to its continental collision with Eurasia. The transition between the generally low-grade sediments of the \"Tethys Himalaya\" and the underlying low- to high-grade rocks of the \"High Himalayan Crystalline Sequence\" is usually progressive.\n[…]\nThe modern day rate of convergence between the Indian and Eurasian plates is measured to be approximately 17 mm/yr. This convergence is accommodated through seismic activity in active fault zones. As a result, the Himalayan range is one of the most seismically active regions in the world."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Everest",
        "situacao": "ok",
        "texto": "Mount Everest (known in Nepali as Sagarmāthā, in Sherpa as Chamolangma, and in Tibetan  as Jomolangma/Čhomolangma) is the highest mountain on Earth above sea level. It lies in the Mahalangur Himal sub-range of the Himalayas and marks part of the China–Nepal border at its summit. Its height was most recently measured in 2020 through a joint survey by Nepalese and Chinese authorities as 8,848.86 m (\n[…]\nIt is thought that the plate tectonics of the Main Himalayan Thrust and related faults, which form the convergent boundary between the Eurasian Plate and Indian Plate, are adding to the height and moving the summit northeastwards. Two accounts suggest the rates of change are 4 mm (0.16 in) per year vertically and 3 to 6 mm (0.12 to 0.24 in) per year horizontally, but another account mentions more lateral movement (27 mm or 1.1 in), and even shrinkage has been suggested.\n[…]\nMount Everest consists of sedimentary and metamorphic rocks that have been faulted southward over continental crust composed of Archean granulites of the Indian Plate during the Cenozoic collision of India with Asia. Current interpretations argue that the Qomolangma and North Col formations consist of marine sediments that accumulated within the continental shelf of the northern passive continental margin of India before it collided with Asia.\n[…]\nOn 21 May 2011, Nepalis Lakpa Tsheri Sherpa and Sano Babu Sunuwar paraglided from Everest's summit to Namche Bazaar in 42 minutes. After the flight they hiked, biked, and kayaked to the Indian Ocean, reaching the Bay of Bengal by 27 June 2011, thereby becoming the first people to complete a continuous summit-to-sea descent from Everest. They accomplished the ground-breaking feat despite Babu having never previously climbed, and Lakpa having never kayaked and not even knowing how to swim.\n[…]\nHimalayan Database: Data Visualization of Mount Everest Summit, Attempt, and Death"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Deriva continental",
      "descricao": "Teoria segundo a qual os continentes já estiveram unidos e se deslocaram lentamente ao longo do tempo geológico."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A teoria de Wegener sobre os continentes foi rejeitada por décadas principalmente porque ele não conseguia explicar o quê?",
    "resposta": "Que força movia os continentes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Continental_drift"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Continental_drift",
        "situacao": "ok",
        "texto": "Continental drift is the movement of Earth's continents relative to each other over geologic time. When initially proposed as a scientific theory in the early 20th century, the idea that continents could move was widely rejected. However, continental drift has subsequently been extensively validated and is incorporated into the science of plate tectonics, which studies the movement of the continen\n[…]\nHolmes's views were particularly influential: in his bestselling textbook, Principles of Physical Geology, he included a chapter on continental drift, proposing that Earth's mantle contained convection cells which dissipated radioactive heat and moved the crust at the surface. Holmes's proposal resolved the phase disequilibrium objection (the underlying fluid was kept from solidifying by radioactive heating from the core).\n[…]\nThe geophysicists Jack Oliver, Bryan Isacks and Lynn Sykes provided seismologic evidence for plate tectonics with the 1968 article \"Seismology and the New Global Tectonics\", using data from seismologic stations including those he set up in the South Pacific. The modern theory of plate tectonics, refining Wegener, explains that there are two kinds of crust of different composition, continental and oceanic, both floating on a much deeper \"plastic\" mantle. Continental crust is inherently lighter.\n[…]\nThe complementary arrangement of the facing sides of South America and Africa is an obvious and temporary coincidence. In millions of years, slab pull, ridge-push, and other forces of tectonophysics will further separate and rotate those two continents. It was that temporary feature that inspired Wegener to propose continental drift.\n[…]\nFrankel, Henry R. (2012). The Continental Drift Controversy. Vol. I: Wegener and the Early Debate. Cambridge.\n[…]\nAnimation of continental drift for last 1 billion years\n[…]\nMaps of continental drift, from the Precambrian to the future"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deriva_continental",
        "situacao": "ok",
        "texto": "A teoria da deriva continental foi apresentada pelo geólogo e meteorologista alemão Alfred Wegener em 1913, com a publicação de sua obra clássica \"A Origem dos Continentes e Oceanos\" (Die Entstehung der Kontinente und Ozeane). Wegener defendia que os continentes, hoje separados por oceanos, já estiveram unidos numa única massa de terra no passado, denominada por ele de Pangeia (do grego \"Terra úni\n[…]\nA hipótese da deriva continental tornou-se parte de uma teoria maior, a teoria da tectônica de placas. Este artigo trata do desenvolvimento da teoria da deriva continental antes de 1959.\n[…]\nA ação contínua dessas forças também rompeu completamente a crosta terrestre e formou o oceano Atlântico. Porém, ele não parecia o vasto mar que é hoje: a fragmentação de Gondwana formou apenas um pequeno oceano, que só cresceu quando Brasil e África começaram a afastar-se de forma gradual há, aproximadamente, 135 milhões de anos. Tal ideia está presente na teoria da deriva continental, que foi apresentada em 1912 pelo cientista meteorologista alemão Alfred Lothar Wegener.\n[…]\nEstudos históricos mostram que a Teoria da Deriva Continental, proposta por Alfred Wegener em 1912, representou o primeiro modelo coerente para explicar o movimento dos continentes, embora tenha sido inicialmente rejeitada pela comunidade científica por carecer de um mecanismo físico satisfatório.\n[…]\nA partir da década de 1940, entretanto, avanços na geofisíca, na geologia marinha e no paleomagnetismo revelaram evidências decisivas, como a expansão dos fundos oceânicos e a distribuição global de terremotos, que permitiram integrar o mobilismo continental a um modelo mais amplo. Esse conjunto de descobertas culminou, na década de 1960, na formulação da Teoria da Tectônica de Placas, que forneceu o mecanismo dinâmico antes ausente e consolidou a ideia do movimento contínuo da litosfera.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Poço Superprofundo de Kola",
      "descricao": "Perfuração científica soviética na península de Kola, no noroeste da Rússia, iniciada em 1970."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A perfuração do Poço Superprofundo de Kola, na Rússia, não conseguiu ir mais fundo por causa de qual problema inesperado lá embaixo?",
    "resposta": "Calor muito acima do esperado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kola_Superdeep_Borehole"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kola_Superdeep_Borehole",
        "situacao": "ok",
        "texto": "The Kola Superdeep Borehole SG-3 (Russian: Кольская сверхглубокая скважина СГ-3, romanized: Kol'skaya sverkhglubokaya skvazhina SG-3) has been the deepest human-made hole on Earth since 1979, attaining a maximum true vertical depth of 12,262 metres (40,230 ft) in 1989. It is the result of a scientific drilling effort to penetrate as deeply as possible into the Earth's crust conducted by the Soviet\n[…]\nSG (СГ) is a Russian designation for a set of superdeep (Russian: сверхглубокая) boreholes conceived as part of a Soviet scientific research programme in the 1960s, 1970s, and 1980s. Aralsor SG-1 (in the Pre-Caspian Basin of west Kazakhstan) and Biyikzhal SG-2 (in Krasnodar Krai), both less than 6,810 metres (22,340 ft) deep, preceded Kola SG-3, which was originally intended to reach 7,000 metres (23,000 ft) deep.\n[…]\nThe stated areas of study of the Kola Superdeep Borehole were the deep structure of the Baltic Shield, seismic discontinuities and the thermal regime in the Earth's crust, the physical and chemical composition of the deep crust and the transition from upper to lower crust, lithospheric geophysics, and to create and develop technologies for deep geophysical study.\n[…]\nThe 12,262-metre (40,230 ft) deep Kola Superdeep Borehole has been the world's deepest borehole since 1979. It was also the longest borehole in the world from 1979 to 2008. Its record length was surpassed in May 2008 by the curved extended reach drilling bore of well BD-04A in the Al Shaheen Oil Field in Qatar, which attained a total length of 12,289 metres (40,318 ft) but depth of just 1,387 metres (4,551 ft).\n[…]\nKozlovsky, Ye.A (1987). The Superdeep Well of the Kola Peninsula. Berlin: Springer Verlag. ISBN 978-3-540-16416-6.\n[…]\nOfficial Kola Superdeep Borehole website (in Russian)\n[…]\nKola Superdeep – Scientific research results and experiences by PhD A. Osadchikh 1984 (in Russian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Po%C3%A7o_superprofundo_de_Kola",
        "situacao": "ok",
        "texto": "O poço superprofundo de Kola (em russo:  Кольская сверхглубокая скважина) é o resultado de um projeto de prospecção científica da extinta União Soviética. O projeto tentava perfurar a crosta terrestre o mais profundamente possível. A prospecção teve início em 24 de maio de 1970, na península de Kola, em princípio com o equipamento de perfuração Uralmash-4E, e mais tarde com a série Uralmash-15000.\n[…]\nO mais profundo, o SG-3, atingiu 12 262 metros em 1989, tornando-se o mais profundo poço já perfurado e o ponto artificial mais profundo da Terra.\n[…]\nNo início do projeto, o objetivo inicial da perfuração era chegar até quinze mil metros. Em 6 de junho de 1979, o recorde de profundidade que pertencia ao poço de 'Bertha Rogers', em Oklahoma, Estados Unidos (9 583 metros) foi quebrado. Em 1982, as brocas passaram da profundidade de doze mil metros e a perfuração foi interrompida por cerca de um ano para a comemoração do evento.\n[…]\nEste período de parada total pode ter colaborado para a quebra dos ânimos em setembro de 1984: após atingir 12 066 metros, uma seção de cinco quilômetros da coluna de perfuração quebrou e ficou no buraco, impedindo os trabalhos. Em 1989, a profundidade atingiu 12 262 metros. Naquele ano, os técnicos esperavam chegar aos 13,5 mil metros de profundidade no fim do ano seguinte e aos quinze mil metros em 1993.\n[…]\nPorém, devido às inesperadas altas temperaturas na profundidade alcançada, cerca de 180°C, ao invés dos 100°C previstos, uma perfuração mais profunda foi considerada inviável e os trabalhos interrompidos em 1992. Com o esperado aumento da temperatura à medida que profundidades maiores fossem atingidas, a perfuração a 15 mil metros foi calculada como tendo que ser feita a 300°C, o que tornaria impossível o trabalho das brocas e a exploração foi definitivamente interrompida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Terremoto de Lisboa de 1755",
      "descricao": "Terremoto seguido de tsunami e incêndios que destruiu grande parte de Lisboa em 1º de novembro de 1755."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O terremoto de Lisboa de 1755 abalou a crença de que tudo vai bem no mundo e levou qual filósofo francês a escrever um poema e o romance Cândido?",
    "resposta": "Voltaire",
    "distratores": [
      "Rousseau",
      "Diderot",
      "Montesquieu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake",
      "https://en.wikipedia.org/wiki/Poem_on_the_Lisbon_Disaster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake",
        "situacao": "ok",
        "texto": "The 1755 Lisbon earthquake, also known as the Great Lisbon earthquake, occurred in the Iberian Peninsula and Northwest Africa area on the morning of Saturday, 1 November, 1755 (on the Christian Feast of All Saints); it took place at approximately 09:40 local time. In combination with subsequent fires and a tsunami, the earthquake almost completely destroyed Lisbon and adjoining areas.\n[…]\nThe earthquake and its aftermath strongly influenced the intelligentsia of the European Age of Enlightenment. The noted writer-philosopher Voltaire used the earthquake in Candide and in his Poème sur le désastre de Lisbonne (\"Poem on the Lisbon disaster\"). Voltaire's Candide attacks the notion that all is for the best in this, \"the best of all possible worlds\", a world closely supervised by a benevolent deity. The Lisbon disaster provided a counterexample for Voltaire. Theodor W.\n[…]\nVoltaire's Candide includes a depiction of the main character during the devastation of the earthquake and its aftermath.\n[…]\n1755 Cape Ann earthquake\n[…]\nBraun, Theodore E. D., and John B. Radner, eds. The Lisbon Earthquake of 1755: Representations and Reactions (SVEC 2005:02). Oxford: Voltaire Foundation, 2005. ISBN 978-0-7294-0857-8. Recent scholarly essays on the earthquake and its representations in art, with a focus on Voltaire. (In English and French.)\n[…]\nDynes, Russell Rowe. \"The dialogue between Voltaire and Rousseau on the Lisbon earthquake: The emergence of a social science view.\" University of Delaware, Disaster Research Center, 1999.\n[…]\nFonseca, J. D. 1755, O Terramoto de Lisboa, The Lisbon Earthquake. Argumentum, Lisbon, 2004.\n[…]\nImages and historical depictions of the 1755 Lisbon earthquake from the University of California\n[…]\nTsunami Forecast Model Animation: Lisbon 1755 from the Pacific Tsunami Warning Center's official YouTube channel\n[…]\nThe Lisbon Earthquake (1755) from European History Online"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Poem_on_the_Lisbon_Disaster",
        "situacao": "ok",
        "texto": "The \"Poème sur le désastre de Lisbonne\" (English title: Poem on the Lisbon Disaster) is a poem in French composed by Voltaire as a response to the 1755 Lisbon earthquake. It is widely regarded as an introduction to Voltaire's 1759 acclaimed novel Candide and his view on the problem of evil. The 180-line poem was composed in December 1755 and published in 1756. It is considered one of the most sava\n[…]\nThe earthquake of 1 November 1755 completely devastated the Portuguese capital Lisbon. The city was reduced to ruins, and between 30,000 and 50,000 people were killed. One of the most destructive earthquakes in history, the event had a major effect on the cultural consciousness of much of Europe. Voltaire was one of many philosophers, theologians and intellectuals to be deeply affected by the disaster.\n[…]\nIn his preface, Voltaire makes several objections to philosophical optimism:\n[…]\nThrough his work, Voltaire criticized religious figures and philosophers such as the optimists Pope and Leibniz but endorsed the views of the skeptic Pierre Bayle and the empiricist John Locke. Voltaire was, in turn, criticized by the philosopher Jean-Jacques Rousseau, who had been mailed a copy of the poem by Voltaire, who received a letter carrying Rousseau's criticism on 18 August 1756.\n[…]\nRousseau criticised Voltaire for seeking to apply science to spiritual questions and argued that evil is necessary to the existence of the universe and that particular evils form the general good. Rousseau implied that Voltaire  had to renounce the concept of Providence or to conclude that it is, in the last analysis, beneficial. Rousseau was convinced that Voltaire had written Candide as a rebuttal to the argument that the former had made.\n[…]\nVoltaire. \"The Lisbon Earthquake\" in Candide, or Optimism. Translator Tobias Smollett. London: Penguin Books, 2005. ISBN 978-0-140-45510-6"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sismo_de_Lisboa_de_1755",
        "situacao": "ok",
        "texto": "O Sismo de Lisboa de 1755, também conhecido como o Grande Terramoto de Lisboa de 1755 (português europeu) ou Grande Terremoto de Lisboa de 1755 (português brasileiro), atingiu a Península Ibérica e o noroeste de África na manhã de sábado, de 1 de novembro de 1755, Dia de Todos-os-Santos, por volta das 9h40, hora local.\n[…]\nO terramoto acentuou as tensões políticas em Portugal, teve um enorme impacto socioeconómico no século XVIII e perturbou profundamente o Império Português. Foi um dos sismos mais mortíferos da História, marcando o que alguns historiadores designam de pré-história da Época Moderna. O evento foi amplamente discutido e analisado pelos filósofos do Iluminismo europeu, como Voltaire, e inspirou importantes desenvolvimentos na teodiceia e na filosofia do sublime.\n[…]\nNa vila da Praia ainda mais notável porque chegou com muita força ao paul, onde deixou enxurrado algum barco, e com grande admiração levou um de carregação por detrás da fortaleza, por cima daqueles grandes calhaus, e sempre direito, com três homens dentro, sem prejuízo atendível.\n[…]\nO sismo de Lisboa abalou muito mais que a cidade e os seus edifícios. Lisboa era a capital de um país católico, com grande tradição de edificação de conventos e igrejas e empenhado na evangelização das suas colónias. O facto de o sismo ocorrer em dia santo e destruir várias igrejas importantes, dentro das quais muitos fiéis reuniam-se para celebrar a data, levantou muitas questões religiosas por toda a Europa.\n[…]\nO conceito do sublime, embora já tivesse sido formulado antes de 1755, foi desenvolvido na Filosofia e elevado a tema de maior importância por Immanuel Kant, em parte como resultado das suas tentativas para compreender a enormidade do sismo de Lisboa e do tsunâmi. Kant publicou três textos distintos sobre o sismo.\n[…]\nTsunâmi no Brasil em 1755",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Formação ferrífera bandada",
      "descricao": "Rocha sedimentar pré-cambriana de camadas alternadas de óxidos de ferro e sílex."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As rochas de ferro em faixas que formam minas como as de Carajás surgiram quando o ferro dissolvido no mar antigo reagiu com qual gás?",
    "resposta": "Oxigênio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Banded_iron_formation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Banded_iron_formation",
        "situacao": "ok",
        "texto": "Banded iron formations (BIFs; also called banded ironstone formations) are distinctive units of sedimentary rock consisting of alternating layers of iron oxides and iron-poor chert. They can be up to several hundred meters in thickness and extend laterally for several hundred kilometers. Almost all of these formations are of Precambrian age and are theorized to record the oxygenation of the Earth'\n[…]\nBanded iron formations are theorized to have formed in sea water as the result of oxygen production by photosynthetic cyanobacteria. The oxygen combined with dissolved iron in Earth's oceans to form insoluble iron oxides, which precipitated out, forming a thin layer on the ocean floor. Each band is similar to a varve, resulting from cyclic variations in oxygen production.\n[…]\nSimilar BIFs are found in the Carajás Formation of the Amazon craton, the Cauê Itabirite of the São Francisco craton, the Kuruman Iron Formation and Penge Iron Formation of South Africa, and the Mulaingiri Formation of India.\n[…]\nIn a Snowball Earth state the continents, and possibly seas at low latitudes, were subject to a severe ice age circa 750 to 580 Ma that nearly or totally depleted free oxygen. Dissolved iron then accumulated in the oxygen-poor oceans (possibly from seafloor hydrothermal vents). Following the thawing of the Earth, the seas became oxygenated once more causing the precipitation of the iron. Banded iron formations of this period are predominantly associated with the Sturtian glaciation.\n[…]\nThe Itabarite banded iron formations of Brazil cover at least 80,000 square kilometers (31,000 square miles) and are up to 600 meters (2,000 feet) thick. These form the Quadrilatero Ferrifero or Iron Quadrangle, which resembles the Iron Range mines of United States in that the favored ore is hematite weathered out of the BIFs.\n[…]\nBanded-iron formation at the Encyclopædia Britannica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Forma%C3%A7%C3%B5es_ferr%C3%ADferas_bandadas",
        "situacao": "ok",
        "texto": "Formações ferríferas bandadas (também conhecidas como itabirito, jaspilito, taconito, ironstone bandado ou BIFs) são rochas sedimentares químicas de idade pré-cambriana compostas por bandas alternadas de óxido de ferro (hematita, Fe2O3, ou magnetita, Fe3O4) e camadas pobres em ferro, ricas em sílica (SiO2), conhecidas como chert.\n[…]\nNo Quadrilátero Ferrífero, no flanco oeste do Sinclinal Moeda, a formação ferrífera bandada é classificada por teor de ferro em hematita (≥ 64% de Fe), itabirito rico (58–64%), itabirito intermediário (45–58%) e itabirito pobre (20–45%), além de variantes limoníticas. Estudos de difração de raios X e microscopia óptica indicam composição de quartzo, hematita granular, goethita e uma mistura muito fina de óxidos e hidróxidos de ferro (material limonítico).\n[…]\nA abundância das formações ferríferas no registro pré-cambriano foi usada historicamente como argumento para um oceano e uma atmosfera anóxicos e o período de maior deposição coincide com o Grande Evento de Oxigenação, há cerca de 2,4 Ga.\n[…]\nPela hipótese proposta por Kirschvink (1992), um oceano selado por gelo marinho ficaria anóxico e rico em ferro ferroso dissolvido e, com o fim da glaciação, o contato com o oxigênio atmosférico permitiria a retomada da deposição de ferro bandado.\n[…]\nNo Quadrilátero Ferrífero, os corpos de minério vão do minério de alto teor, compacto a friável, até itabiritos enriquecidos, todos hospedados na Formação Cauê, do Supergrupo Minas. Como exemplos de escala, a Mina Casa de Pedra (CSN), em Congonhas, tem capacidade de 21,0 Mt/ano de minério bruto e 20,0 Mt/ano de minério beneficiado. As minas de Pau Branco (Brumadinho) e Mina 3 (Nova Lima), da V&M Mineração, somam 5,0 Mt/ano.\n[…]\nGrande Evento de Oxigenação\n[…]\nCiclo do Ferro\n[…]\nQuadrilátero Ferrífero\n[…]\nCarajás (Geologia)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Grand Canyon",
      "descricao": "Grande desfiladeiro no estado do Arizona, nos Estados Unidos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que rio passou milhões de anos escavando as rochas do Grand Canyon, no Arizona?",
    "resposta": "Rio Colorado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Canyon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Canyon",
        "situacao": "ok",
        "texto": "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of over a mile (6,093 feet or 1,857 meters).\n[…]\nThe Sinagua were a cultural group occupying an area to the southeast of the Grand Canyon, between the Little Colorado River and the Salt River, between approximately 500 and 1425 CE. The Sinagua may have been ancestors of several Hopi clans.\n[…]\nAccording to the San Francisco Herald, in a series of articles run in 1853, Captain Joseph R. Walker in January 1851 with his nephew James T. Walker and six men, traveled up the Colorado River to a point where it joined the Virgin River and continued east into Arizona, traveling along the Grand Canyon and making short exploratory side trips along the way. Walker is reported to have said he wanted to visit the \"Moqui\" (Hopi) Indians.\n[…]\nWeather in the Grand Canyon varies according to elevation. The forested rims are high enough to receive winter snowfall, but along the Colorado River in the Inner Gorge, temperatures are similar to those found in Tucson and other low elevation desert locations in Arizona.\n[…]\nThe three most common amphibians in these riparian communities are the canyon tree frog, red-spotted toad, and Woodhouse's Rocky Mountain toad. Leopard frogs are very rare in the Colorado River corridor; they have undergone major declines and have not been seen in the Canyon in several years. There are 33 crustacean species found in the Colorado River and its tributaries within Grand Canyon National Park. Of these 33, 16 are considered true zooplankton organisms.\n[…]\nGrand Canyon Backcountry Use Areas – Map\n[…]\nGrand Canyon – Street View – Google Maps"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grand_Canyon",
        "situacao": "ok",
        "texto": "O Grand Canyon (Grande Cânion em inglês) é um desfiladeiro íngreme esculpido pelo rio Colorado, no estado do Arizona, nos Estados Unidos. A formação faz parte do Parque Nacional do Grand Canyon. O ex-presidente estadunidense Theodore Roosevelt foi um grande defensor da preservação da área do Grand Canyon e visitou-o em várias ocasiões para caçar e apreciar a paisagem.\n[…]\nO Grand Canyon tem 446 km de comprimento, até 29 km de largura e atinge uma profundidade de mais de 1,8 km. Por 2 bilhões de anos de história geológica da Terra o rio Colorado e seus afluentes cortaram seus canais através das camadas de rocha enquanto o planalto do Colorado era erguido.\n[…]\nApesar de alguns aspectos sobre a história da incisão do canyon serem debatidos por geólogos, vários estudos recentes apoiam a hipótese de que o rio Colorado estabeleceu seu curso através da região há cerca de 5 ou 6 milhões de anos. Desde essa época, o rio tem aprofundado e alargado o desfiladeiro.\n[…]\nO Grand Canyon é um vale fluvial no Planalto do Colorado que expõe estratos Proterozóicos e Paleozoicos elevados, e também é uma das seis seções fisiográficas distintas da província do Planalto do Colorado. Mesmo que não seja o cânion mais profundo do mundo (Kali Gandaki Gorge no Nepal é muito mais profundo), o Grand Canyon é conhecido por seu tamanho visualmente esmagador e sua paisagem intrincada e colorida.\n[…]\nA elevação associada à formação de montanhas mais tarde moveu esses sedimentos milhares de metros para cima e criou o Planalto do Colorado. A maior elevação também resultou em maior precipitação na área de drenagem do rio Colorado, mas não o suficiente para mudar a área do Grand Canyon de semiárida. A elevação do Planalto do Colorado é desigual, e o Planalto Kaibab que o Grand Canyon corta é mais de mil pés (300 m) mais alto na Borda Norte do que na Borda Sul.\n[…]\nParque Nacional do Grand Canyon",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Grande Vale do Rift",
      "descricao": "Sistema de fendas tectônicas que corta o leste da África, onde o continente está se partindo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Se o Grande Vale do Rift continuar se abrindo por milhões de anos, o que deve surgir entre o leste da África e o resto do continente?",
    "resposta": "Um novo oceano",
    "fonte": [
      "https://en.wikipedia.org/wiki/East_African_Rift"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/East_African_Rift",
        "situacao": "ok",
        "texto": "The East African Rift (EAR) or East African Rift System (EARS) is an active continental rift zone in East Africa. The EAR began developing around the onset of the Miocene, 22–25 million years ago. It is considered to be part of a larger system, formerly known as the Great Rift Valley, that extends north to Asia Minor, also known as Anatolia.\n[…]\nAccording to marine geologist Kathleen Crane, the rift could eventually cause eastern Africa to separate from the mainland, although this potential event could take tens of millions of years.\n[…]\nPrior to the rift's formation, enormous continental flood basalts erupted, uplifting the Ethiopian, Somali, and East African plateaus. The first stage of rifting of the EAR was characterized by rift localization and magmatism along the entire rift zone. Periods of extension alternated with relative inactivity.\n[…]\nToday, the narrow rift segments of the East African Rift system form zones of localized strain. These rifts are the result of the actions of numerous normal faults which are typical of all tectonic rift zones. As aforementioned, voluminous magmatism and continental flood basalts characterize some of the rift segments, while other segments, such as the Western branch, have only very small volumes of volcanic rock.\n[…]\nThe East African Rift system affects regional, continental and even global climate. Regions of higher elevation, including the Ethiopian Highlands and the Kenya Highlands are hotspots of higher rainfall amid the semi-arid to arid lowlands of East Africa. Lakes which form within the rift, including Lake Victoria, have a large effect on regional climate. They are a source of water vapour, and also lead to the formation of lake breeze systems, which affect weather across large areas of East Africa.\n[…]\nBaikal Rift Zone\n[…]\nWest Antarctic Rift System\n[…]\nWest and Central African Rift System"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rifte_da_%C3%81frica_Oriental",
        "situacao": "ok",
        "texto": "O Rifte Africano Oriental é um rifte na África Oriental, desenvolvendo-se desde o Miocénico há 22-25 milhões de anos. Antigamente era considerado como fazendo parte do maior Vale do Rifte que se estende até à Ásia Menor.\n[…]\nO rifte é uma estreita zona de divergência de placas tectónicas, na qual a placa africana está em processo de divisão em duas, designadas placa somali e placa núbia, a um ritmo de cerca de 6–7 mm por ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Monte Everest",
      "descricao": "Montanha do Himalaia, na fronteira entre Nepal e China, o ponto mais alto da Terra acima do nível do mar."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nas rochas do cume do Monte Everest, a mais de oito mil metros de altitude, há fósseis de que tipo de animal?",
    "resposta": "Animais marinhos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Everest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Everest",
        "situacao": "ok",
        "texto": "Mount Everest (known in Nepali as Sagarmāthā, in Sherpa as Chamolangma, and in Tibetan  as Jomolangma/Čhomolangma) is the highest mountain on Earth above sea level. It lies in the Mahalangur Himal sub-range of the Himalayas and marks part of the China–Nepal border at its summit. Its height was most recently measured in 2020 through a joint survey by Nepalese and Chinese authorities as 8,848.86 m (\n[…]\nHigh winds at these altitudes on Everest are also a potential threat to climbers.\n[…]\nSome climbers have reported life-threatening thefts from supply caches. In May 2006, Vitor Negrete, the first Brazilian to climb Everest without oxygen and part of David Sharp's party, died during his descent, and theft of gear and food from his high-altitude camp may have contributed.\n[…]\nIn 1991, four men in two balloons achieved the first hot-air balloon flight over Mount Everest. In one balloon were Andy Elson and Eric Jones (cameraman), and in the other balloon Chris Dewhirst and Leo Dickinson (cameraman). Dickinson went on to write a book about the adventure called Ballooning Over Everest. The hot-air balloons were modified to function at up to 12,000 m (40,000 ft) altitude.\n[…]\nAfter many Nepalis died in the icefall in 2014, the government had wanted helicopters to handle more transportation to Camp 1 but this was not possible because of the 2015 earthquake closing the mountain, so this was then implemented in 2016 (helicopters did prove instrumental in rescuing many people in 2015 though). That summer Bell tested the 412EPI, which conducted a series of tests including hovering at 5,500 m (18,000 ft) and flying as high as 6,100 m (20,000 ft) altitude near Mount Everest.\n[…]\nThe outline of Mount Everest and its Nepali name, Sagarmatha (सगरमाथा), are also featured on standard Nepalese coins, such as the 1-rupee and 2-rupee coins, as well as on special coins made to mark important events or occasions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Evereste",
        "situacao": "ok",
        "texto": "Monte Everest ou, na sua forma portuguesa, Evereste, também conhecido no Nepal como Sagarmāthā (सगरमाथा), no Tibete como Chomolungma (ཇོ་མོ་གླང་མ) e Zhūmùlǎngmǎ Fēng em chinês (珠穆朗玛峰), é a montanha de maior altitude da Terra. Seu pico está a 8 848,86 metros acima do nível do mar, na subcordilheira Mahalangur Himal dos Himalaias. A fronteira internacional entre o distrito nepalês do Solukhumbu e o \n[…]\nNo que respeita ao reconhecimento das \"rochas mais altas do planeta\" como calcário marinho fossilífero, as Rochas Ordovicianas do Monte Everest foram incluídas pela União Internacional de Ciências Geológicas (IUGS) na sua lista de 100 sítios de património geológico em todo o mundo, publicada em outubro de 2022.\n[…]\nNas regiões mais altas do Monte Everest, os alpinistas que buscam o cume costumam passar um tempo substancial dentro da zona da morte (altitudes superiores a 8 000 metros (26 000 ft)), e enfrentam desafios significativos à sobrevivência. As temperaturas podem cair para níveis muito baixos, resultando em geladuras em qualquer parte do corpo exposta ao ar. Como as temperaturas são tão baixas, a neve fica bem congelada em certas áreas, podendo ocorrer morte ou ferimentos por escorregões e quedas.\n[…]\nUm estudo de 2008 observou que a \"zona da morte\" é, de fato, onde ocorre a maioria das mortes no Everest, mas também notou que a maioria dessas mortes acontece durante a descida do cume. Um artigo de 2014 na revista The Atlantic sobre as fatalidades no Everest pontuou que, embora as quedas sejam um dos maiores perigos que a zona da morte apresenta para todas as montanhas com mais de oito mil metros (os 8000ers), as avalanches são uma causa mais comum de morte em altitudes mais baixas.\n[…]\nNesse verão, a Bell testou o 412EPI, que realizou uma série de testes, incluindo pairar a 18 000 pés (5 500 m) e voar até 20 000 pés (6 100 m) de altitude perto do Monte Everest.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Pangeia",
      "descricao": "Supercontinente que reuniu quase todas as terras emersas no fim da Era Paleozoica e no início da Mesozoica."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Ao se partir, a Pangeia deu origem ao Gondwana, no sul, e a qual supercontinente, no norte?",
    "resposta": "Laurásia",
    "distratores": [
      "Rodínia",
      "Panótia",
      "Pantalassa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Laurasia",
      "https://en.wikipedia.org/wiki/Pangaea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Laurasia",
        "situacao": "ok",
        "texto": "Laurasia () historically known as the old red sandstone continent, Euramerica, or Laurussia, or the old red continent was the more northern of the two large landmasses that formed part of the Pangaea supercontinent from around 335 to 175 million years ago (Mya), the other being Gondwana.\n[…]\nIn 1904–1909, Austrian geologist Eduard Suess proposed that the continents in the Southern Hemisphere were once merged into a larger continent called Gondwana. In 1915, German meteorologist Alfred Wegener proposed the existence of a supercontinent that he called Pangaea. In 1937, South African geologist Alexander du Toit proposed that Pangaea was divided into two larger landmasses, Laurasia in the Northern Hemisphere and Gondwana in the Southern Hemisphere, separated by the Tethys Ocean.\n[…]\nLaurasia and Gondwana were equal in size but had distinct geological histories. Gondwana was assembled before the formation of Pangaea, but the assembly of Laurasia occurred during and after the formation of the supercontinent. These differences resulted in different patterns of basin formation and transport of sediments. East Antarctica was the highest ground within Pangaea and produced sediments that were transported across eastern Gondwana but never reached Laurasia. During the Palaeozoic, c.\n[…]\nMeanwhile, mammals slowly settled in Laurasia from Gondwana in the Triassic, the latter of which was the living area of their Permian ancestors. They split in two groups, with one returning to Gondwana (and stayed there after Pangaea split) while the other staying in Laurasia (until further descendants switched to Gondwana starting from the Jurassic). The placental mammal group of Laurasiatheria is named after Laurasia.\n[…]\nLaurasiatheria\n[…]\nLaurasiformes"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pangaea",
        "situacao": "ok",
        "texto": "Pangaea or Pangea ( pan-JEE-ə) was a supercontinent that existed during the late Paleozoic and early Mesozoic eras. It assembled from the earlier continental units of Gondwana, Euramerica and Siberia during the Carboniferous period approximately 335 million years ago, and began to break apart about 175 million years ago, at the beginning of the Jurassic.\n[…]\nBy the Early Permian, the Cimmerian plate split from Gondwana and moved towards Laurasia, thus closing the Paleo-Tethys Ocean and forming the Tethys Ocean in its southern end. Most of the landmasses were all in one. By the Triassic, Pangaea rotated a little, and the Cimmerian plate was still travelling across the shrinking Paleo-Tethys until the Middle Jurassic. By the Late Triassic, the Paleo-Tethys had closed from west to east, creating the Cimmerian Orogeny.\n[…]\nA number of authors have argued based on paleomagnetic data, that Pangaea originally exhibited a different configuration than the classic Wegnerian configuration, known as \"Pangea B\", where Gondwana was shifted over 3,500 kilometres (2,200 mi) northeastwards relative to Laurasia than in the Wegnerian configuration (\"Pangea A\"), with South America adjacent to eastern North America and western Europe, and that over the course of the Permian, Gondwana moved southwest towards the classic Wegnerian/\"Pangea A\" configuration along a massive 6,000 kilometres (3,700 mi) long transform megashear.\n[…]\nBy the Early Jurassic, Pangaea began to rift and break-up into northern Laurasia and southern Gondwana with the Central Pangean Mountains having practically disintegrated. The supercontinent finally broke up by the Middle Jurassic period.\n[…]\nDuring the Jurassic, the megamonsoon declined and the regions of Gondwana and southern Laurasia experienced dry conditions.\n[…]\nPotential future supercontinents: Amasia, Aurica, Pangaea Proxima, Novopangaea"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Laur%C3%A1sia",
        "situacao": "ok",
        "texto": "O supercontinente do norte Laurásia incluía os continentes que hoje constituem o Hemisfério Norte, incluindo a América do Norte, Europa , Ásia do Norte e Japão.\n[…]\nA Laurásia surgiu logo após a divisão da Pangeia. Antes disso, todos os continentes que conhecemos hoje se encontravam em um só; após a modificação, foi dividido em dois: Laurásia e Gondwana. A teoria de que os continentes não estiveram sempre nas suas posições atuais foi sugerido pela primeira vez em 1596 pelo holandês Abraham Ortelius, conhecido como pai do Atlas Moderno.\n[…]\nEle se fragmentou há 130 milhões de anos em Laurásia (América do Norte e Eurásia) e Gondwana (América do Sul, África, Índia, Austrália e Antártica) e, há 84 milhões de anos, houve a separação entre a América do Norte e Eurásia e entre a América do Sul, África, Oceania e Índia, que se tornou uma ilha no oceano Índico.\n[…]\nEle argumentou que há cerca de 200 milhões de anos, nos primórdios da Era mesozoica, havia um supercontinente \"mãe\" - Pangeia - e um gigantesco oceano chamado Pantalassa.\n[…]\nO Pangéia começou a fraturar-se, primeiro se dividiu em dois grandes continentes (Laurásia e Gondwana). Entre os dois, formou-se um mar relativamente raso: o Mar de Tétis.\n[…]\nLaurásia e Gondwana continuaram então a fraturar-se ao longo dos tempos, dando origem aos atuais continentes. A Índia, por exemplo, soltou-se de Gondwana, formando uma ilha. Na Era cenozóica, as formas dos continentes começaram a assemelhar-se às formas atuais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Pirita",
      "descricao": "Mineral de sulfeto de ferro, de brilho metálico dourado."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A pirita, o famoso ouro de tolo de brilho dourado, é um mineral formado por enxofre e qual metal?",
    "resposta": "Ferro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pyrite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pyrite",
        "situacao": "ok",
        "texto": "The mineral pyrite ( PY-ryte), or iron pyrite, also known as fool's gold, is an iron sulfide with the chemical formula FeS2 (iron (II) disulfide). Pyrite is the most abundant sulfide mineral.\n[…]\nBravoite is a nickel-cobalt bearing variety of pyrite, with > 50% substitution of Ni2+ for Fe2+ within pyrite. Bravoite is not a formally recognised mineral, and is named after the Peruvian scientist Jose J. Bravo (1874–1928).\n[…]\nPyrite is the most common of sulfide minerals and is widespread in igneous, metamorphic, and sedimentary rocks. It is a common accessory mineral in igneous rocks, where it also occasionally occurs as larger masses arising from an immiscible sulfide phase in the original magma. It is found in metamorphic rocks as a product of contact metamorphism. It also forms as a high-temperature hydrothermal mineral, though it occasionally forms at lower temperatures.\n[…]\nPyrite occurs both as a primary mineral, present in the original sediments, and as a secondary mineral, deposited during diagenesis. Pyrite and marcasite commonly occur as replacement pseudomorphs after fossils in black shale and other sedimentary rocks formed under reducing environmental conditions. Pyrite is common as an accessory mineral in shale, where it is formed by precipitation from anoxic seawater, and coal beds often contain significant pyrite.\n[…]\nAmerican Geological Institute, 2003, Dictionary of Mining, Mineral, and Related Terms, second ed., Springer, New York, ISBN 978-3-540-01271-9.\n[…]\nPyrite.Virtual Museum of Mineralogy. Universidad de Zaragoza, Spain\n[…]\nHow Minerals Form and Change \"Pyrite oxidation under room conditions\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pirita",
        "situacao": "ok",
        "texto": "Pirita (português brasileiro) ou pirite (português europeu), também pirite de ferro ou pirita de ferro é um dissulfeto de ferro, FeS2. Tem os cristais isométricos que aparecem geralmente como cubos, mas também frequentemente como octaedros ou piritoedros (dodecaedros com faces pentagonais). Tem uma fratura ligeiramente desigual e conchoidal, uma dureza de 6-6.5 na escala de Mohs, e uma densidade d\n[…]\nDevido ao seu brilho metálico e à cor amarelo-dourada, recebeu também o apelido de ouro-dos-tolos (ou ouro-dos-parvos); ironicamente, contudo, pequenas quantidades de ouro podem às vezes ser encontradas disseminadas nas piritas. Com efeito, dependendo da quantidade de ouro, a pirita aurífera pode mesmo ser uma fonte valiosa deste metal precioso. Em piritas podem ocorrer também arsênio, níquel, cobalto e cobre.\n[…]\nA marcassita é um polimorfo da pirita, o que significa que, embora ambas tenham a mesma fórmula química, possuem estruturas cristalinas diferentes. O par polimorfo marcassita/pirita é provavelmente o mais famoso ao lado do par diamante/grafita (que são também alótropos).\n[…]\nA pirita é usada frequentemente em joias tal como colares e braceletes, mas, embora os dois minerais sejam similares, a marcassita não pode ser usada em joalherias (ourivesaria) porque tem uma tendência a se desintegrar e virar pó.\n[…]\nCalcopirita (CuFeS2) é também chamado de \"pirita de cobre\". Ao ser minerado, o mineral tende a apresentar-se inicialmente com uma coloração amarelo-dourada, mas ao ser exposto ao ar, pode tornar-se iridescente. A calcopirita é tratada às vezes com um ácido para revelar as cores vívidas. A ocorrência de cristais na calcopirita é muito rara, e ela encontra-se geralmente maciça. Ocorre em todas as partes do mundo.\n[…]\nPirrotita é um sulfeto de ferro e níquel. Tem cor semelhante à da pirita, mas, ao contrário desta, é magnético.\n[…]\nLista de minerais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Capadócia",
      "descricao": "Região histórica no centro da Turquia, famosa pelas chaminés de fada e pelas cidades subterrâneas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As casas e cidades subterrâneas da Capadócia, na Turquia, foram escavadas numa rocha macia formada pelo acúmulo de quê?",
    "resposta": "Cinzas vulcânicas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cappadocia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cappadocia",
        "situacao": "ok",
        "texto": "Cappadocia (; Turkish: Kapadokya) is a historical region in Central Anatolia region, Turkey. It is largely in the provinces of Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde. Today, the touristic Cappadocia Region is located in Nevşehir province.\n[…]\nHot-air ballooning is especially popular in Cappadocia, particularly around Göreme, offering sunrise flights over the region's fairy chimneys and valleys.\n[…]\nSince 2012, a multiday track running ultramarathon of desert concept, called Runfire Cappadocia Ultramarathon, is held annually in July. The race tours 244 km (152 mi) in six days through several places across Cappadocia reaching out to Lake Tuz. In September 2016, for the first time, the Turkish Presidential Bike Tour took place in Cappadocia, with more than 300 cyclists from around the globe participating.\n[…]\nThis article incorporates text from a publication now in the public domain: Bunbury, Edward Herbert; Hogarth, David George (1911). \"Cappadocia\". In Chisholm, Hugh (ed.). Encyclopædia Britannica. Vol. 5 (11th ed.). Cambridge University Press. pp. 286–288.\n[…]\nCooper, Eric; Decker, Michael J. (24 July 2012). Life and Society in Byzantine Cappadocia. Springer. ISBN 978-1-137-02964-5. Retrieved 6 February 2025.\n[…]\nMitchell, Stephen (2018). \"Cappadocia\". In Nicholson, Oliver (ed.). The Oxford Dictionary of Late Antiquity. Oxford University Press. ISBN 978-0192562463.\n[…]\nWeiskopf, Michael (1990). \"Cappadocia\". Encyclopaedia Iranica, Vol. IV, Fasc. 7–8. pp. 780–86.\n[…]\nEne Drăghici-Vasilescu, Elena, book \"Byzantine and Medieval Cappadocia', Scientific Research Publishing |2024|978–1649979582|and Ene Drăghici-Vasilescu, Elena, \"Shrines and Schools in Byzantine Cappadocia\", Journal of Early Christian History, volume 9, Issue 1, 2019, pp. 1–29"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capad%C3%B3cia",
        "situacao": "ok",
        "texto": "A Capadócia (em turco: Kapadokya, em grego: Καππαδοκία; romaniz.: Kappadokía) é uma região histórica e turística da Anatólia central, na Turquia.\n[…]\nAs características mais distintivas da região são as formações geológicas únicas, resultado de fenómenos vulcânicos e da erosão, e o seu rico património histórico e cultural, nomeadamente cidades subterrâneas e inúmeras habitações e igrejas escavadas em rocha, muitas destas com admiráveis frescos. Em 1985, o Parque Nacional de Göreme, uma das áreas mais famosas da região, com 9 576 ha, foi declarada Património Mundial pela UNESCO.\n[…]\nA situação geográfica da Capadócia, tornou-a encruzilhada de rotas comerciais importantes ao longo dos séculos e tornou-a alvo de contínuas invasões. Para se refugiarem durante as invasões e razias, os habitantes construíram refúgios subterrâneos, por vezes verdadeiras cidades, supondo-se que as mais antigas podem remontar ao tempo dos Hititas, há mais de 3 000 anos, e que muitas ainda estarão por descobrir. Algumas podem ser visitadas, como é o caso das de Derinkuyu, Kaymakli, Özkonak e Mazi.\n[…]\nSão Paulo efetuou três viagens à Capadócia entre 44 e 58. Muitos dos primeiros cristãos habitavam a região, tendo as cidades subterrâneas sido usadas como refúgio pelos primeiros cristãos durante as perseguições de que foram alvo. durante os séculos II, III e IV. Aí nasceram nessa época pelo menos os seguintes santos e teólogos:\n[…]\nAs obras seguintes não foram utilizadas diretamente, mas faziam parte do artigo «Capadocia» na Wikipédia em castelhano (acessado nesta versão), no qual grandes partes do texto foram baseadas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Dorsal Mesoatlântica",
      "descricao": "Cadeia de montanhas submarinas no meio do oceano Atlântico, onde placas tectônicas se afastam."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que pequeno arquipélago brasileiro, perto da linha do Equador e formado por rochas do manto, é um pedaço da Dorsal Mesoatlântica acima do mar?",
    "resposta": "São Pedro e São Paulo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint_Peter_and_Saint_Paul_Archipelago"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Peter_and_Saint_Paul_Archipelago",
        "situacao": "ok",
        "texto": "The Saint Peter and Saint Paul Archipelago (Portuguese: Arquipélago de São Pedro e São Paulo [ɐʁkiˈpɛlɐgu dʒi sɐ̃w ˈpedɾwi sɐ̃w ˈpawlu]) is a group of 15 small islets and rocks in the central equatorial Atlantic Ocean. It lies in the Intertropical Convergence Zone, a region of the Atlantic characterized by low average winds punctuated with local thunderstorms.\n[…]\nAndrade, F.G.G., Simões, L.S.A., Campos, T.F.C., Silva, A.J.C.A. 2007. Padrão estrutural da foliação milonígica do Arquipélago de São Pedro e São Paulo. Anais do 11º Simpósio Nacional de Estudos Tectônicos, 5th International Symposium of Tectonics of the SBG. Natal, 233. (in Portuguese)\n[…]\nCampos, T.F.C., Virgens Neto, J., Amorim, V.A., Hartmann, L.A., Petta, R.A. 2003. Modificações metassomáticas das rochas milonitizadas do complexo ultramáfico do Arquipélago de São Pedro e São Paulo, Atlântico Equatorial. Geochimica Brasiliensis, 17–2, 81–90. (in Portuguese)\n[…]\nMoraes, J.F.S., Linden, E.M., Moraes, F.A.B. 1997. Planta topográfica do Arquipélago de São Pedro e São Paulo, escala 1:500. CPRM – Serviço Geológico do Brasil.\n[…]\nMotoki, A., Sichel, S.E., Campos, T.F.C., Srivastava, N.K., Soares, R.S. 2009. Taxa de soerguimento atual do Arquipélago de São Pedro e São Paulo, Oceano Atlântico Equatorial. Revista Escola de Minas, 62–3. 331–342. (in Portuguese)\n[…]\nSouza, José Eduardo Borges de: O arquipélago de São Pedro e São Paulo, Rio de Janeiro, Revista do Clube Naval, Ano 115, N° 340, Out/Nov/Dez 2006. p. 70-72, ISSN 0102-0382.\n[…]\nVirgens Neto, J., Campos, T.F.C. 2007. A influência da zona de fratura São Paulo no contexto estrutural do Arquipélago de São Pedro e São Paulo – Atlântico Equatorial. Anais do 11º. Simpósio Nacional de Estudos Tectônicos, 5th International Symposium of Tectonics of the SBG. Natal, 294–295. (in Portuguese)\n[…]\nPenedos de Sao Pedro e São Paulo (in Spanish)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arquip%C3%A9lago_de_S%C3%A3o_Pedro_e_S%C3%A3o_Paulo",
        "situacao": "ok",
        "texto": "Arquipélago de São Pedro e São Paulo é um conjunto de pequenos ilhéus rochosos que fazem parte do estado brasileiro de Pernambuco. O conjunto de ilhéus fica situado na parte central do oceano Atlântico equatorial, distando 627 km do arquipélago de Fernando de Noronha, 986 km do ponto mais próximo do continente sul-americano e 987 km a partir de Natal, no estado do Rio Grande do Norte. Apesar de pe\n[…]\nO conjunto de ilhéus era chamado popularmente de \"Penedo de São Pedro e São Paulo\" ou \"Rochedo de São Pedro e São Paulo\". Porém, hoje em dia é chamado oficialmente de \"Arquipélago de São Pedro e São Paulo\". A rocha exposta é peridotito e peridotito serpentinizado, provavelmente originada de uma característica geológica do fundo do mar que forma uma longa cordilheira perpendicular a uma dorsal oceânica, sendo a única exposição mundial do manto abissal acima do nível do mar.\n[…]\nOs rochedos de São Pedro e São Paulo estão localizados no Oceano Atlântico, a cerca de 100 km ao norte do Equador e são o único grupo de ilhotas oceânicas brasileiras no Hemisfério Norte. O ponto mais próximo na costa brasileira é o Cabo do Calcanhar, no Rio Grande do Norte, a cerca de 1 010 quilômetros (630 mi) . do arquipélago. A área total emersa é de aproximadamente 1,7 hectares e a elevação máxima do terreno é 18 metros, na Ilha Nordeste.\n[…]\nOs artigos científicos revelam que as rochas ultramáficas do manto abissal expostas no Arquipélago de São Pedro e São Paulo (ASPSP) são, provavelmente, originadas a partir de megamullion. Entretanto, comparando-se com outros magamullions existentes no oceano Atlântico, a cadeia peridotítica de São Pedro e São Paulo é demasiado grande. Este fato é devido ao soerguimento tectônico ativo que ocorre há 10 milhões de anos.\n[…]\n«Arquipélago de São Pedro e São Paulo Soerguimento tectônico de rochas infracrustais no Oceano Atlântico.» (PDF)\n[…]\nPenedos de Sâo Pedro e Sâo Paulo (espanhol)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Erupção do Krakatoa de 1883",
      "descricao": "Erupção catastrófica do vulcão Krakatoa, na Indonésia, em agosto de 1883."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O vulcão Krakatoa, que explodiu em 1883, fica entre as ilhas de Java e Sumatra, em qual estreito?",
    "resposta": "Estreito de Sunda",
    "distratores": [
      "Estreito de Malaca",
      "Estreito de Lombok",
      "Estreito de Makassar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Krakatoa",
      "https://en.wikipedia.org/wiki/1883_eruption_of_Krakatoa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Krakatoa",
        "situacao": "ok",
        "texto": "Krakatoa (), also transcribed Krakatau (), is a caldera in the Sunda Strait between the islands of Java and Sumatra in the Indonesian province of Lampung. The caldera is part of a volcanic island group (Krakatoa archipelago) comprising four islands. Two of them are known as Lang and Verlaten; another, Rakata, is the only remnant of an island, also called Krakatoa, mostly destroyed by an eruption i\n[…]\nIn 1927, a fourth island, Anak Krakatoa (\"Child of Krakatoa\"), emerged from the caldera formed in 1883. There has been new eruptive activity since the late 20th century, with a large collapse causing the 2018 Sunda Strait tsunami. In the 2020s, a new cinder cone grew out of its collapse scar from eruptions.\n[…]\nIndonesia has over 130 active volcanoes, the most of any nation. They make up the axis of the Indonesian island arc system produced by northeastward subduction of the Indo-Australian Plate. Most of them are on Indonesia's two largest islands, Java and Sumatra. These two islands are separated by the Sunda Strait, at a bend in the axis of the island arc.\n[…]\nA thundering sound was heard from the mountain Batuwara [now called Pulosari, an extinct volcano in Bantam, the nearest to the Sunda Strait] which was answered by a similar noise from Kapi, lying westward of the modern Bantam [(Banten) is the westernmost province in Java, so this seems to indicate that Krakatoa is meant].\n[…]\nThe water of the sea rose and inundated the land, the country to the east of the mountain Batuwara, to the mountain Rajabasa [the most southerly volcano in Sumatra], was inundated by the sea; the inhabitants of the northern part of the Sunda country to the mountain Rajabasa were drowned and swept away with all property ... The water subsided but the land on which Kapi stood became sea, and Java and Sumatra were divided into two parts.\n[…]\nKrakatoa – The Great Volcanic Eruption on YouTube – \"Naked Science\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/1883_eruption_of_Krakatoa",
        "situacao": "ok",
        "texto": "Between 19 May and 21 October 1883, the volcanic island of Krakatoa (located in the Sunda Strait, then part of the Dutch East Indies—modern-day Indonesia) began erupting, lasting more than five months. On 27 August, the island had its most significant eruption, which destroyed over 70% of the island and its surrounding archipelago, the island collapsing into a caldera.\n[…]\nA large area of the Sunda Strait and places on the Sumatran coast were affected by pyroclastic flows from the volcano. Verbeek and others believe that the final major Krakatau eruption was a lateral blast, or pyroclastic surge. Material shot out of the volcano at 2,575 km/h (1,600 mph).\n[…]\nPyroclastic deposits thought to be from the flows have been found on Southeast Sumatra, and northwest of the volcano on the islands of Sebesi, Sebuku and Lagoendi, while on Southwest Sumatra the flows burnt victims. They travelled 40 km (25 mi) across the Sunda Strait. Once they hit Southern Sumatra, they incinerated entire villages and burned all vegetation. Two thousand of the corpses in Southern Sumatra appear to have been scorched to death, presumably by the pyroclastic flows.\n[…]\nAlthough the violent phase of the 1883 eruption was over by the late afternoon of 27 August, after light returned by 29 August, reports continued for months that Krakatoa was still in eruption. Verbeek's committee's earliest duties were to determine if this was true and verify reports of other volcanoes erupting on Java and Sumatra. In general, these were found to be false. Small eruptions, mostly of mud, continued into October 1883.\n[…]\nKrakatit\n[…]\nKrakatoa, East of Java\n[…]\nWinchester, Simon. Krakatoa: The Day the World Exploded: August 27, 1883, New York: HarperCollins (2003), ISBN 978-0-06-083859-1\n[…]\nKrakatau, Indonesia (1883) Archived 16 December 2014 at the Wayback Machine information from San Diego State University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Krakatoa",
        "situacao": "ok",
        "texto": "Krakatoa ou Cracatoa (em indonésio:  Krakatau) é uma ilha vulcânica situada no estreito de Sunda entre as ilhas de Java e Sumatra, na província indonésia de Lampungue. O nome também é usado para o grupo da ilha circundante que compreende os restos de uma ilha muito maior de três picos vulcânicos que foi destruída em uma erupção catastrófica de 1883.\n[…]\nEm 1927, uma nova ilha, Anak Krakatau, ou \"Criança de Krakatoa\", emergiu da caldeira formada em 1883 e é a localização atual da atividade eruptiva. A formação chegou a ter mais de 324 metros de altura, sendo que a cada ano aumenta 5 m aproximadamente, podendo haver mudanças. Contudo, após a erupção e consequente explosão de 22 de dezembro de 2018, cerca de 2/3 do vulcão colapsaram, criando um tsunami e tendo a altura do pico do vulcão diminuído para 110 metros.\n[…]\nEmbora existam descrições anteriores de uma ilha no estreito de Sunda com uma \"montanha pontiaguda\", a primeira menção do nome \"Krakatoa\" no mundo ocidental foi em um mapa de 1611 feito por Lucas Janszoon Waghenaer, que rotulava a ilha \"Pulo Carcata\" (pulo é a palavra sundanesa para \"ilha\"). Cerca de duas dúzias de variantes foram encontradas, incluindo Crackatouw, Cracatoa e Krakatao (em uma antiga ortografia baseada no português).\n[…]\nNo dia 22 de dezembro de 2018, o colapso e deslizamento de 2/3 do vulcão Anak Krakatoa no mar causou um tsunami no estreito de Sunda, na Indonésia. Foram contabilizados 429 vítimas, 128 desaparecidos e 1.459 feridos causados pelas ondas gigantes. O evento não foi precedido por terremoto.\n[…]\nSimkin, Tom and Richard S. Fiske (editors); Krakatau, 1883—the volcanic eruption and its effects Smithsonian Institution Press, Washington, D.C. ISBN 0-87474-841-0 (1983)\n[…]\nWinchester, Simon (2003). Krakatoa: The Day the World Exploded, August 27, 1883. New York: HarperCollins. ISBN 0-06-621285-5",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Cratera de Chicxulub",
      "descricao": "Cratera de impacto enterrada sob a península de Iucatã, no México, ligada à extinção em massa do fim do Cretáceo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A cratera do asteroide que extinguiu os grandes dinossauros está enterrada sob qual península do México?",
    "resposta": "Iucatã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chicxulub_crater"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chicxulub_crater",
        "situacao": "ok",
        "texto": "The Chicxulub crater is an impact crater buried underneath the Yucatán Peninsula in Mexico. The crater is named after the onshore inland community of Chicxulub Pueblo. It was formed slightly over 66 million years ago when an asteroid, about ten kilometers (six miles) in diameter, struck Earth. The crater is estimated to be two hundred kilometers (120 mi) in diameter and is buried to a depth of abo\n[…]\nThere is broad consensus that the Chicxulub impactor was a C-type asteroid with a carbonaceous chondrite-like composition, rather than a comet. This type of asteroid originally formed in the outer Solar System, beyond the orbit of Jupiter.\n[…]\nSubsequent evidence has disproven this theory. A 2009 spectrographic analysis revealed that 298 Baptistina has a different composition more typical of an S-type asteroid than the presumed carbonaceous chondrite composition of the Chicxulub impactor.\n[…]\nhad ignored that the amount of iridium deposited around the globe, 2.0×108 to 2.8×108 kg (4.4×108 to 6.2×108 lb), was too large for a comet of the size implied by the crater, and that they had overestimated likely comet impact rates. They concluded that all available evidence strongly favors an asteroid impactor, effectively ruling out a comet. Ruthenium isotope ratios in impact layers also strongly support an asteroid rather than a comet nature for the impactor.\n[…]\nNadir crater\n[…]\nKornel, Katherine (September 10, 2019). \"A New Timeline of the Day the Dinosaurs Began to Die Out – By drilling into the Chicxulub crater, scientists assembled a record of what happened just after the asteroid impact\". The New York Times. Archived from the original on September 25, 2019. Retrieved September 25, 2019.\n[…]\nChicxulub Crater Archived July 22, 2018, at the Wayback Machine\n[…]\nPapers and presentations resulting from the 2016 Chicxulub drilling project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cratera_de_Chicxulub",
        "situacao": "ok",
        "texto": "Cratera Chicxulub (pronuncia-se AFI: /tʃikʃuˈlub/) é uma antiga cratera de impacto soterrada embaixo da península de Iucatã, no México. O seu centro está localizado próximo à localidade de Chicxulub, que deu origem ao nome da cratera. A cratera tem mais de 180 km de diâmetro, tornando-a uma das maiores estruturas de impacto conhecidas no mundo; o bólide que formou a cratera tinha pelo menos 10 km \n[…]\nEm 1978 os geofísicos Glen Penfield e Antonio Camargo trabalhavam para a companhia petrolífera estatal mexicana Pemex, como parte de um levantamento aeromagnético do golfo do México, a norte da península do Iucatã. O seu trabalho era utilizar dados geofísicos para estudar possíveis localizações para extrair petróleo. Entre os dados, Penfiel encontrou um enorme arco subaquático com uma \"simetria extraordinária\" na forma de um anel que media em redor de 70 km de diâmetro.\n[…]\nEntão teve acesso a um mapa gravitacional do Iucatã feito na década de 1960. Uma década antes, o mesmo mapa sugerira uma estrutura de impacto ao contratista Robert Baltosser, mas a política corporativa de Pemex daquela época proibia-o de tornar pública a sua conclusão. Penfield descobriu outro arco na península propriamente dita, cujas extremidades apontavam para norte.\n[…]\nComparando os dois mapas, descobriu que os dois arcos separados formavam um círculo de 180 km de diâmetro, centrado perto da povoação de Chicxulub, no Iucatã; era dez vezes maior do que qualquer vulcão conhecido, com uma elevação no seu centro, como as conhecidas em crateras de impacto. Penfield e Camargo concluíram que não podia tratar-se de um vulcão, tratando-se mais provavelmente de uma cratera de impacto.\n[…]\nCratera da Terra de Wilkes\n[…]\nCratera de Vredefort\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em castelhano cujo título é «Cráter de Chicxulub».",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Diamante",
      "descricao": "Mineral formado por carbono puro cristalizado, o mais duro da natureza, usado como gema."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Por mais de um século, entre o esgotamento das minas da Índia e as descobertas na África do Sul, qual país foi o maior produtor de diamantes do mundo?",
    "resposta": "Brasil",
    "distratores": [
      "Rússia",
      "Austrália",
      "Congo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Diamond"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diamond",
        "situacao": "ok",
        "texto": "Diamond is a mineral form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. Diamond is a tasteless, odorless, strong, brittle solid, a poor conductor of electricity, colorless in pure form, and insoluble in water. Another solid form of carbon known as graphite is the chemically stable form of carbon at room temperature and pressure, but diamond is metastabl\n[…]\nA large trade in gem-grade diamonds exists. Although most gem-grade diamonds are sold newly polished, there is a well-established market for resale of polished diamonds (e.g. pawnbroking, auctions, second-hand jewelry stores, diamantaires, bourses, etc.). One hallmark of the trade in gem-quality diamonds is its remarkable concentration: wholesale trade and diamond cutting is limited to just a few locations; in 2003, 92% of the world's diamonds were cut and polished in Surat, India.\n[…]\nRoughly 49% of diamonds originate from Central and Southern Africa, although significant sources of the mineral have been discovered in Canada, India, Russia, Brazil, and Australia. They are mined from kimberlite and lamproite volcanic pipes, which can bring diamond crystals, originating from deep within the Earth where high pressures and temperatures enable them to form, to the surface.\n[…]\nTwo major flaws still hinder the effectiveness of the Kimberley Process: (1) the relative ease of smuggling diamonds across African borders, and (2) the violent nature of diamond mining in nations that are not in a technical state of war and whose diamonds are therefore considered \"clean\".\n[…]\nA diamond simulant is a non-diamond material that is used to simulate the appearance of a diamond, and may be referred to as diamante. Cubic zirconia is the most common. The gemstone moissanite (silicon carbide) can be treated as a diamond simulant, though more costly to produce than cubic zirconia. Both are produced synthetically."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diamante",
        "situacao": "ok",
        "texto": "O diamante é um cristal sob uma forma alotrópica do carbono, de fórmula química C. É a forma triangular estável do carbono em pressões acima de 6 GPa (60 kbar). Comercializados como pedras preciosas, os diamantes possuem um alto valor agregado. Normalmente, o diamante cristaliza com estrutura cúbica e pode ser sintetizado industrialmente. Outra forma de cristalização do diamante é a hexagonal, men\n[…]\nEm outubro de 2019, um dos diamantes mais raros do mundo foi descoberto na República de Sakha da Sibéria; ele foi designado de “diamante Matryoshka”, em homenagem às icônicas bonecas russas. O diamante mede apenas 4,8 mm x 4,9 mm x 2,8 mm, e dentro dele existe uma cavidade interna que contém outro diamante medindo apenas 1,6 milímetro cúbico. Ainda não foi estimado o valor da pedra, mas a empresa que a descobriu (ALROSA) disse que suas características a tornará uma das mais valiosas do mundo.\n[…]\nA Mina de diamantes Argyle na Austrália, o maior produtor de diamantes em peso no mundo, está localizada num cinturão móvel, também conhecido como cinturão orogénico, uma zona mais fraca que rodeia o cratão central e que sofreu tectónica compressiva. Em vez de kimberlito, a rocha hospedeira é o lamproíto. Lamproítos com diamantes que não são economicamente viáveis também são encontrados nos Estados Unidos, Índia e Austrália.\n[…]\nEncontrado a 16 de novembro de 2015 na mina de Karowe, no Botsuana, o ‘Lesedi la Rona’ (Nossa luz) foi a leilão dia 29 de junho de 2016 em Londres pela Sotheby’s. Esperava-se que pudesse atingir um valor superior a 60 milhões de euros. Tem 1 109 quilates (222 gramas) é quase do tamanho de uma bola de ténis e é o maior diamante descoberto em mais de cem anos. Não foi vendido, pois não apareceram interessados.\n[…]\nDiamante Hope\n[…]\nDiamante Taylor-Burton\n[…]\n(em inglês) O maior diamante da galáxia\n[…]\nBPM3093 - O Maior Diamante do Universo\n[…]\nEl diamante\n[…]\n«Ferramentas Diamantadas»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Âmbar",
      "descricao": "Material fóssil translúcido que às vezes preserva insetos e outros pequenos organismos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A maior parte do âmbar do mundo, a resina fóssil que às vezes guarda insetos, vem do litoral de qual mar europeu?",
    "resposta": "Mar Báltico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amber",
      "https://en.wikipedia.org/wiki/Baltic_amber"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amber",
        "situacao": "ok",
        "texto": "Amber is fossilized tree resin. It has been appreciated for its color (orange, brown and, sometimes, red) and natural beauty since Neolithic times, and worked as a gemstone since classical antiquity. Amber is used in jewelry and as a healing agent in folk medicine.\n[…]\nIn the Romance languages, the sense of the word was extended to Baltic amber (fossil resin) from as early as the late 13th century. At first called white or yellow amber (ambre jaune), this meaning was adopted in English by the early 15th century. As the use of ambergris waned, this became the main sense of the word.\n[…]\nThe Romans traded for amber from the shores of the southern Baltic at least as far back as the time of Nero.\n[…]\nExposure to sunlight, rain, microorganisms, and extreme temperatures tends to disintegrate the resin. For the resin to survive long enough to become amber, it must be resistant to such forces or be produced under conditions that exclude them. Fossil resins from Europe fall into two categories, the Baltic ambers and another that resembles the Agathis group.\n[…]\nFossil resins from the Americas and Africa are closely related to the modern genus Hymenaea, while Baltic ambers are thought to be fossil resins from plants of the family Sciadopityaceae that once lived in north Europe.\n[…]\nFound along the southern shore of the Baltic Sea, yellow amber reached the Middle East and western Europe via trade. Its coastal acquisition may have been one reason yellow amber came to be designated by the same term as ambergris. Moreover, like ambergris, the resin could be burned as an incense. The resin's most popular use was, however, for ornamentation—easily cut and polished, it could be transformed into beautiful jewelry."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Baltic_amber",
        "situacao": "ok",
        "texto": "Baltic amber or succinite is amber from the Baltic region, home of its largest known deposits. It was produced sometime during the Eocene epoch, but exactly when is controversial. It has been estimated that this forested region provided the resin for more than 100,000 tons of amber. Today, more than 90% of the world's amber comes from Kaliningrad Oblast of Russia.\n[…]\nBecause Baltic amber contains 3–8% succinic acid, it is also termed succinite.\n[…]\nIn situ Baltic amber is derived from the sediments of the geological formation termed the Prussian Formation, formerly called the \"Amber Formation\", with the main amber bearing horizon being referred to as \"Blue Earth\", so named due to its glauconite content. The formation is exposed in the northern part of the Sambia Peninsula in Kaliningrad. Much of the Baltic amber has been secondarily redeposited in Pleistocene glacial till deposits across the North European Plain.\n[…]\nWhile the Bitterfeld amber found near Bitterfeld in Saxony-Anhalt, Germany, was historically considered redeposited Baltic amber, it has been found to be chemically distinct.\n[…]\nBaltic amber has been traded since the Neolithic period in Europe, with Baltic amber being found as trade goods from 3634–3363 BC in Spain. Initially Baltic amber was extracted from redeposited amber in Holocene deposits, like sandbars, with large scale industrial extraction beginning in the 19th century.\n[…]\nNumerous extinct genera and species of plants and animals have been discovered and scientifically described from inclusions in Baltic amber. Inclusions of insects make up over 98% of the animals preserved in the amber, while all other arthropods, annelids, molluscs, nematodes, and protozoans contribute less than 0.5% of the animals. Vertebrates are another 0.5% of the animals included and mostly are represented by mammal fur, feathers, and reptiles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%82mbar",
        "situacao": "ok",
        "texto": "Âmbar é resina de árvore fossilizada. É um material orgânico amorfo, usado como gema. É apreciado por sua cor, geralmente amarela, laranja ou marrom e, às vezes, vermelha, e por sua beleza natural desde a pré-história, e foi trabalhado como gema na Antiguidade Clássica. O âmbar é usado em joalheria e aparece há séculos em remédios da medicina popular.\n[…]\nOs romanos comerciavam âmbar vindo das praias do sul do Báltico pelo menos desde a época de Nero.\n[…]\nO âmbar é imitado com frequência por outras resinas, como copal e resina kauri, além de celuloide e vidro. O âmbar do Báltico também pode receber coloração artificial.\n[…]\nA classe Ia inclui a succinita, principal componente do âmbar do Báltico. \"Succinita\" e \"âmbar do Báltico\" são usados às vezes como sinônimos, mas não são equivalentes em sentido estrito, pois o termo geográfico pode abranger outras resinas fósseis. A classe Ia contém ácido succínico, do qual deriva o nome succinita. Esse componente está principalmente ligado à estrutura da resina na forma de ésteres, enquanto a quantidade de ácido livre é muito menor.\n[…]\nO âmbar báltico também ocorre em formações posteriores, como depósitos de deriva glacial. Restos de uma flora abundante ficaram presos como inclusões quando a resina ainda estava fresca, com afinidades com a flora do leste da Ásia e do sul da América do Norte. Heinrich Göppert chamou de Pinites succiniter um suposto pinheiro produtor de âmbar das antigas florestas bálticas. Também foi empregado o nome Pinus succinifera.\n[…]\nResinas fósseis como a burmite de Myanmar, a rumanita da Romênia e a simetita da Sicília são variedades genuínas de âmbar. Sua comercialização como substitutas de âmbar báltico não as transforma em resinas artificiais.\n[…]\nÂmbar do Báltico, grupo regional de resinas fósseis que inclui a succinita\n[…]\nCopal, resina menos maturada que pode ser confundida com âmbar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Paricutín",
      "descricao": "Vulcão no estado de Michoacán, no México, que surgiu em 1943 no meio de um milharal."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1943, um vulcão nasceu do chão, diante dos olhos de um agricultor, no meio de uma plantação de milho. Em que país isso aconteceu?",
    "resposta": "México",
    "fonte": [
      "https://en.wikipedia.org/wiki/Par%C3%ADcutin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Par%C3%ADcutin",
        "situacao": "ok",
        "texto": "Parícutin (or Volcán de Parícutin, also accented Paricutín) is a cinder cone volcano located in the Mexican state of Michoacán, near the city of Uruapan and about 322 kilometers (200 mi) west of Mexico City. The volcano surged suddenly from the cornfield of local farmer Dionisio Pulido in 1943, attracting both popular and scientific attention.\n[…]\nIt has also created fertile soils by the widespread deposition of ash and thereby some of Mexico's most productive farmland. The volcanic activity here is a result of the subduction of the Rivera and Cocos plates along the Middle America Trench.\n[…]\nMore specifically, the volcano is the youngest of the approximately 1,400 volcanic vents of the Michoacán-Guanajuato volcanic field, a 40,000 square kilometers (15,000 mi2) basalt plateau filled with scoria cones like Parícutin, along with small shield volcanoes, maars, tuff rings and lava domes. Scoria cones are the most common type of volcano in Mexico, appearing suddenly and building a cone-shaped mountain with steep slopes before becoming extinct.\n[…]\nThe evacuations of Parícutin and San Juan were accomplished without loss of life due to the slow movement of the lava. These two phases lasted just over a year and account for more than 90% of the total material ejected from the cone, as well as almost four-fifths (330 meters) of the final height of 424 meters from the valley floor. It also sent ash as far as Mexico City.\n[…]\nThe economy of the area was then and is now mostly agricultural, with a mostly Purépecha population, rural and poor. However, the eruption did cause a number of changes both social and economic to the affected areas, both to adapt to the changed landscape but also because the fame of the eruption has brought greater contact from the rest of Mexico and beyond.\n[…]\nList of volcanoes in Mexico\n[…]\n1943–1952 The eruption of Parícutin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paricut%C3%ADn",
        "situacao": "ok",
        "texto": "O Paricutín é um vulcão muito recente situado no estado de Michoacán, no México (19°29'35.70\"N, 102°15'3.93\"O), entre as povoações de San Juan Parangaricutiro (El Nuevo) e Angahuan. Está incluído em algumas listas das sete maravilhas naturais do mundo. A cidade mais próxima deste vulcão é Uruapan.\n[…]\nA maior parte do desenvolvimento deste vulcão ocorreu durante o seu primeiro ano de existência (1943), enquanto se encontrava na sua fase piroclástica explosiva. Durante diversas semanas desse ano, um grande número de ruídos estranhos foram ouvidos pelos habitantes em torno da pequena aldeia de Paricutín, apesar das condições meteorológicas serem normais.\n[…]\nA atividade sísmica intensificou-se até 20 de fevereiro de 1943, quando o fazendeiro local Dioniso Pulido testemunhou a abertura de uma fissura vulcânica no meio de seu campo de milho. De acordo com alguns testemunhos, os aldeões tentaram fechar as fissuras enchendo-as com as rochas e o solo, antes que pequenas explosões e tremores violentos começassem a agitar a área.\n[…]\nOs residentes das vilas próximas fugiram e 24 horas após o aparecimento da fissura inicial, o vulcão já tinha construído um cone com 50 metros de altura. No espaço de uma semana esta altura tinha já duplicado.\n[…]\nA atividade do vulcão declinaria lentamente durante este período até os últimos seis meses da erupção, durante a qual a atividade violenta e explosiva foi frequente. Em 1952, a erupção terminou, e o Paricutín parou de crescer, alcançando uma altura final de 424 metros acima do terreno em que \"nasceu\" (elevação 3170 metros acima do nível do mar, uma vez que se situa em um platô vulcânico elevado).\n[…]\nComo a maioria dos cones de cinza, o Paricutín é um vulcão monogenético, o que significa que nunca voltará a ocorrer sua erupção.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Monte Fuji",
      "descricao": "Vulcão de forma cônica na ilha de Honshu, o ponto mais alto do Japão."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que século aconteceu a última erupção do Monte Fuji, o vulcão símbolo do Japão?",
    "resposta": "Século dezoito",
    "distratores": [
      "Século doze",
      "Século quinze",
      "Século vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Fuji",
      "https://en.wikipedia.org/wiki/H%C5%8Dei_eruption"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Fuji",
        "situacao": "ok",
        "texto": "Mount Fuji (富士山・富士の山, Fujisan, Fuji no Yama) is an active stratovolcano located on the Japanese island of Honshu, with a summit elevation of 3,776.24 m (12,389 ft 3 in). It is the highest mountain in Japan, the second-highest volcano on any Asian island (after Mount Kerinci on the Indonesian island of Sumatra), and the seventh-highest peak of an island on Earth. Mount Fuji last erupted from 1707 t\n[…]\nThese 25 locations include Mount Fuji and the Shinto shrine, Fujisan Hongū Sengen Taisha.\n[…]\nIn Shinto mythology, Kuninotokotachi (国之常立神 Kuninotokotachi-no-Kami in Kojiki, or 国常立尊 Kuninotokotachi-no-Mikoto in Nihon Shoki) is one of the two gods born from \"something like a reed that arose from the soil\" when the earth was chaotic. According to the Nihon Shoki, Konohanasakuya-hime, wife of Ninigi, is the goddess of Mount Fuji, where Fujisan Hongū Sengen Taisha is dedicated to her.\n[…]\nAs a national symbol of the country, the mountain has been depicted in media such as paintings, woodblock prints (such as Hokusai's Thirty-six Views of Mount Fuji and One Hundred Views of Mount Fuji from the 1830s), poetry, music, theater, film, manga, anime, pottery, and even Kawaii subculture.\n[…]\nBefore its explosive eruption in 1980, Mount St. Helens was once known as \"The Fuji of America\", for its striking resemblance to Mount Fuji. Mount Taranaki in New Zealand is also said to bear a resemblance to Mount Fuji, and for this reason has been used as a stand-in for the mountain in films television, and games such as the Civilization games, like Civilization V (2010), Civilization VI (2016), and Civilization VII (2025).\n[…]\nMount Rainier - a 'sister mountain' of Mount Fuji\n[…]\n\"Fujisan (Mount Fuji)\" (PDF). Japan Meteorological Agency. Archived (PDF) from the original on September 24, 2015.\n[…]\nFujisan (Mount Fuji) – Smithsonian Institution: Global Volcanism Program\n[…]\nMount Fuji Tours"
      },
      {
        "url": "https://en.wikipedia.org/wiki/H%C5%8Dei_eruption",
        "situacao": "ok",
        "texto": "The Hōei eruption (Japanese: 宝永大噴火, Hōei daifunka) of Mount Fuji started on December 16, 1707 (during the Hōei era, 23rd day of the 11th month of the 4th year) and ended on February 24, 1708. It was the last confirmed eruption of Mount Fuji, with three unconfirmed eruptions reported from 1708 to 1854. The eruption took place during the reign of Emperor Higashiyama and the Shogun was Tokugawa Tsuna\n[…]\nThe Hōei quake caused stress and compression of the magma chambers underneath Mount Fuji, leading to the eruption.\n[…]\nJapan is located in the most geologically active region of Earth, called the Ring of Fire. This region is known for its many volcanic eruptions and earthquakes. Mount Fuji is located in the middle of three colliding tectonic plates, the Eurasian Plate, Okhotsk microplate, and Philippine Sea plate, resulting in the history of high geologic activity.\n[…]\nA repeat of the 1707 Hōei eruption may impact over 30 million people in the highly populated areas of eastern Tokyo, Kanagawa, Chiba and parts of Yamanashi, Saitama, and Shizuoka. The volcano would most heavily affect Tokyo and would likely cause power outages, water shortages, and malfunctions in the highly technical city. Mount Fuji has more than 20 seismic activity stations monitoring any movement in the ground.\n[…]\nHistoric eruptions of Mount Fuji\n[…]\n富士山火山防災協議会 (Council for Fuji volcano disaster reduction)\n[…]\n富士山宝永噴火（1707）後の土砂災害(PDF) Archived September 27, 2007, at the Wayback Machine (Distribution of sediment disasters after the 1707 Hoei eruption of Fuji Volcano in central Japan, based on historical documents)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Fuji",
        "situacao": "ok",
        "texto": "O monte Fuji (em japonês 富士山 Fuji-san) é a mais alta montanha da ilha de Honshu e de todo o arquipélago japonês. É um vulcão ativo, porém de baixo risco de erupção.\n[…]\nO monte Fuji é um dos símbolos mais conhecidos do Japão, sendo frequentemente retratado em obras de arte e fotografias e recebendo muitas visitas de alpinistas turistas.\n[…]\nO Fuji-san alberga ainda uma tradição guerreira, visto os samurais utilizarem o sopé da montanha, um sítio próximo de onde atualmente se situa a cidade de Gotemba, como local de treino, devido ao seu isolamento. O shogun Minamoto no Yoritomo tinha yabusame nesta área no início do Período Kamakura. A partir de 2005, as forças de defesa do Japão e os marines dos Estados Unidos passaram a ter atividade militar em bases perto do monte Fuji.\n[…]\nO vulcão está classificado como activo com baixo risco de erupção. A última erupção registada ocorreu no princípio do século XVIII, em 1707 durante o período Edo, com esta erupção formou-se uma nova cratera e um segundo pico, a meio de um dos lados, tendo sido atribuído o nome de Hōei-zan ao segundo pico.\n[…]\nO Monte Fuji localiza-se num ponto de encontro da placa Euroasiática  a Placa de Okhotsk e da Placa das Filipinas, sendo estas placas que formam, as partes ocidental e oriental do Japão e a península de Izu, respetivamente.\n[…]\n«Sítio dedicado ao Fuji-san» (em inglês)\n[…]\n«Webcams em directo do Monte Fuji» (em inglês)\n[…]\n«Informações sobre o Monte Fuji no sítio da província de Shizuoka» (em inglês)\n[…]\n«Imagens do Monte Fuji no sítio PDMZ.com» (em inglês)\n[…]\n«Informações sobre a ascensão ao Monte Fuji» (em inglês)\n[…]\n«Fotos e informações para ir ao Japão no sítio Nippon-tabi.com» (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Pangeia",
      "descricao": "Supercontinente que reuniu quase todas as terras emersas no fim da Era Paleozoica e no início da Mesozoica."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que era geológica a Pangeia começou a se partir, dando início ao desenho dos continentes atuais?",
    "resposta": "Era Mesozoica",
    "distratores": [
      "Era Paleozoica",
      "Era Cenozoica",
      "Era Proterozoica"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pangaea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pangaea",
        "situacao": "ok",
        "texto": "Pangaea or Pangea ( pan-JEE-ə) was a supercontinent that existed during the late Paleozoic and early Mesozoic eras. It assembled from the earlier continental units of Gondwana, Euramerica and Siberia during the Carboniferous period approximately 335 million years ago, and began to break apart about 175 million years ago, at the beginning of the Jurassic.\n[…]\nThe largest delta plain in Earth's geological history — the Triassic Boreal Ocean Delta Plain formed in Northern Pangaea during this period.\n[…]\nWhen Pangaea finally broke apart by the middle Mesozoic era, the megamonsoon fell apart completely. The breakup could have contributed to an increase in polar temperatures as colder waters mixed with warmer waters, also accompanied by outgassing of large quantities of carbon dioxide from continental rifts. This produced a Mesozoic CO2 high that contributed to the very warm climate of the Early Cretaceous. The opening of the Tethys Ocean also contributed to the warming of the climate.\n[…]\nThe very active mid-ocean ridges associated with the breakup of Pangaea raised sea levels to the highest in the geological record, flooding much of the continents.\n[…]\nThe tectonics and geography of Pangaea may have worsened the Permian–Triassic extinction event or other mass extinctions. For example, the reduced area of continental shelf environments may have left marine species vulnerable to extinction. However, no evidence for a species-area effect has been found in more recent and better characterized portions of the geologic record.\n[…]\nThe third major and final phase of the break-up of Pangaea occurred in the early Cenozoic (Paleocene to Oligocene). Laurasia split when Laurentia broke from Eurasia, opening the Norwegian Sea about 60–55 Ma. The Atlantic and Indian Oceans continued to expand, closing the Tethys Ocean.\n[…]\nMap of Triassic Pangaea at Paleomaps"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pangeia",
        "situacao": "ok",
        "texto": "Designa-se por Pangeia ou Pangea o continente que, descrito pela deriva continental, existiu entre 200 a 540 milhões de anos, durante a era Paleozoica, segundo estudos.\n[…]\nA palavra origina-se do fato de todos os continentes estarem juntos (pan do grego = todo, inteiro) e exprime a noção de totalidade, universalidade, formando um único bloco de terra (Gea) ou  Geia, Gaia ou Ge como a Titã grega que personificava a terra com todos os seus elementos.\n[…]\nPassaram-se milhões de anos até que a Pangea se fragmentou, dando origem a dois megacontinentes: Gondwana e Laurásia. Esta separação ocorreu lentamente e ocorreu deslocando sobre um subsolo oceânico de basalto.\n[…]\nO resto do continente, onde estava a América do Norte, Europa, Ásia e o Ártico se denomina Laurásia. A Pangeia era cercada por um único oceano, Pantalassa.\n[…]\nA existência de Pangea foi sugerida pela primeira vez no início do século XX pelo meteorologista alemão Alfred Wegener, o que criou uma gigante polêmica entre a classe científica da época. Wegener teve como ponto de partida para a sua teoria os contornos semelhantes das costas da América e de África, os quais formariam um encaixe quase perfeito.\n[…]\nDeriva continental\n[…]\nPangeia Próxima\n[…]\n«Vídeo-Pangeia e a deriva dos continentes (vídeo em extensão .mov)» (em inglês)\n[…]\n«Video animation Pangeia» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Calçada dos Gigantes",
      "descricao": "Formação de milhares de colunas de basalto no litoral do condado de Antrim, na Irlanda do Norte."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda irlandesa, qual gigante construiu a Calçada dos Gigantes para atravessar o mar e enfrentar um rival na Escócia?",
    "resposta": "Finn McCool (Fionn mac Cumhaill)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giant%27s_Causeway",
      "https://en.wikipedia.org/wiki/Fionn_mac_Cumhaill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giant%27s_Causeway",
        "situacao": "ok",
        "texto": "The Giant's Causeway (Irish: Clochán an Aifir or Clochán na bhFomhórach) is an area of approximately 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption, part of the North Atlantic Igneous Province active in the region during the Paleogene period. It is located in County Antrim on the north coast of Northern Ireland, about three miles (five kilometres) northeast \n[…]\nAccording to legend, a form of geomyth, the columns are the remains of a causeway built by a giant. The story goes that the Irish giant Fionn mac Cumhaill (Finn MacCool), from the Fenian Cycle of Gaelic mythology, was challenged to a fight by the Scottish giant Benandonner. Fionn accepted the challenge and built the causeway across the North Channel so that the two could meet. In one version of the story, Fionn defeats Benandonner.\n[…]\nAnother common telling of the story has Fionn hide from Benandonner when he realises that his foe is much bigger than he is. Fionn's wife, Sadhbh, disguises Fionn as a baby and tucks him in a cradle. When Benandonner sees the size of the \"baby\", he imagines that its father, Fionn, must be a giant among giants. He flees back to Scotland in fright, destroying the causeway behind him so that Fionn would be unable to chase him down.\n[…]\nOverall, in Irish mythology, Fionn mac Cumhaill is not a giant, but a hero with supernatural abilities, contrary to what this particular legend may suggest. In Fairy and Folk Tales of the Irish Peasantry (1888), it is noted that, over time, \"the pagan gods of Ireland [...] grew smaller and smaller in the popular imagination until they turned into the fairies; the pagan heroes grew bigger and bigger until they turned into the giants\".\n[…]\nWatson, Philip S. (2000). The Giant's Causeway and the North Antrim coast. Dublin: O'Brien Press. ISBN 0-86278-675-4. OCLC 45829602.\n[…]\nGiant's Causeway information at the National Trust"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fionn_mac_Cumhaill",
        "situacao": "ok",
        "texto": "Fionn mac Cumhaill (alternatively spelled Finn mac Cumhaill), sometimes anglicised Finn McCool or MacCool, is a hero in Irish mythology, as well as in later Scottish and Manx folklore. He is the leader of the Fianna bands of young roving hunter-warriors, as well as being a seer, druid, and poet. He is said to have a magic thumb that bestows him with great wisdom. He is often depicted hunting with \n[…]\nIn both Irish and Manx popular folklore, Fionn mac Cumhail (known as \"Finn McCool\" or \"Finn MacCooill\", respectively) is portrayed as a magical, benevolent giant. The most famous story attached to this version of Fionn tells of how one day, while making a pathway in the sea towards Scotland—The Giant's Causeway—Fionn is told that the giant Benandonner (or, in the Manx version, a buggane) is coming to fight him.\n[…]\nFionn mac Cumhaill features heavily in modern Irish literature. Most notably he makes several appearances in James Joyce's Finnegans Wake (1939) and some have posited that the title, taken from the street ballad \"Finnegan's Wake\", may also be a blend of \"Finn again is awake\", referring to his eventual awakening to defend Ireland.\n[…]\nFionn mac Cumhaill is a recurring character in Jason Savin's \"Kings of Munster\" trilogy. First published in 2022, it retells some of the hero's lesser-known stories.\n[…]\nIn 1987 Harvey Holton (1949–2010) published Finn with the Three Tygers Press, Cambridge. This was a dramatic cycle of poems in Scots for the stage and with music by Hamish Moore, based on the legends of Finn McCool and first performed at The Edinburgh Festival in 1986 before going on tour around Scotland.\n[…]\nIn 2010, Washington, D.C.'s Dizzie Miss Lizzie's Roadside Revue debuted their rock musical Finn McCool at the Capitol Fringe Festival. The show retells the legend of Fionn mac Cumhaill through punk-inspired rock and was performed at the Woolly Mammoth Theater in March 2011."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cal%C3%A7ada_dos_Gigantes",
        "situacao": "ok",
        "texto": "A Calçada do Gigante (em inglês Giant's Causeway) é a designação dada a um conjunto de cerca de 40 000 colunas prismáticas de basalto, encaixadas como se formassem uma enorme calçada de pedras gigantescas, formadas pela disjunção prismática de uma grande massa de lava basáltica resultante de uma erupção vulcânica ocorrida há cerca de 60 milhões de anos.\n[…]\nSegundo uma lenda irlandesa um gigante chamado Finn MacCool queria enfrentar numa luta um gigante escocês chamado Benandonner, mas havia um problema: não existia uma embarcação com tamanho suficiente para atravessar o mar e levar um ao encontro do outro. A lenda diz que MacCool resolveu o problema construindo uma calçada que ligava os dois lados, usando enormes colunas de pedra. Benandonner aceitou o desafio e viajou pela calçada ate à Irlanda. Ele era mais forte e maior do que MacCool.\n[…]\nPercebendo isso a esposa de Finn MacCool, de forma muito perspicaz decidiu vestir seu marido gigante como um bebé. Quando Benandonner chegou à casa dos dois e viu o bebé, pensou: “Se o bebê deste tamanho, imagine-se o pai!”, e fugiu correndo de volta para a Escócia. Para ter certeza de que não seria perseguido por Finn MacCool destruiu a estrada enquanto corria, restando apenas as pedras que agora formam a Calçada do Gigante.\n[…]\nComo supostamente a Calçada do Gigante foi construída para ligar a Irlanda com a Escócia, a sua outra extremidade pode ser vista a 130 km a nordeste, na pequenina ilha desabitada de Staffa, que fica perto da costa oeste de Escócia. O nome Staffa significa \"ilha dos pilares\". BenanDonner, que fugiu de Finn MacCool, também era chamado de Fingal. Em sua homenagem, a principal atração da ilha dos pilares recebeu o nome de Gruta de Fingal.\n[…]\n«Guia oficial da Calçada do Gigante» (em inglês)\n[…]\n«Informação sobre o Giant's Causeway no National Trust» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Limite Cretáceo-Paleogeno",
      "descricao": "Fina camada de rocha que marca a extinção em massa de cerca de 66 milhões de anos atrás, que eliminou os grandes dinossauros."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1980, estudando a camada de rocha do fim do Cretáceo, que dupla americana de pai e filho propôs que um asteroide extinguiu os dinossauros?",
    "resposta": "Luis e Walter Alvarez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alvarez_hypothesis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alvarez_hypothesis",
        "situacao": "ok",
        "texto": "The Alvarez hypothesis posits that the mass extinction of the non-avian dinosaurs and many other living things during the Cretaceous–Paleogene extinction event was caused by the impact of a large asteroid on the Earth. Prior to 2013, it was commonly cited as having happened about 65 million years ago, but Renne and colleagues (2013) gave an updated value of 66 million years. Evidence indicates tha\n[…]\nThe hypothesis is named after the father-and-son team of scientists Luis and Walter Alvarez, who first suggested it in 1980. Shortly afterwards, and independently, the same was suggested by Dutch paleontologist Jan Smit.\n[…]\nIn 1980, a team of researchers led by Nobel prize-winning physicist Luis Alvarez, his son geologist Walter Alvarez, and chemists Frank Asaro and Helen Vaughn Michel, discovered that sedimentary layers found all over the world at the Cretaceous–Paleogene boundary (K–Pg boundary, formerly called Cretaceous–Tertiary or K–T boundary) contain a concentration of iridium hundreds of times greater than normal.\n[…]\nThe authors – who include Walter Alvarez – postulate that shock of the impact, equivalent to an earthquake of magnitude 10 or 11, may have led to seiches, oscillating movements of water in lakes, bays, or gulfs, that would have reached the site in North Dakota within minutes or hours of the impact. This would have led to the rapid burial of organisms under a thick layer of sediment.\n[…]\nVerbal accusations have been thrown both by and toward many prominent researchers including Gerta Keller and Luis Alvarez, discouraging civil debate and in some cases threatening careers. Walter Alvarez is an active member of the UC Berkeley team researching the connection between Deccan volcanism and the Chicxulub impact."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Quartzo",
      "descricao": "Mineral de dióxido de silício (SiO2), o segundo mais comum da litosfera terrestre."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos relógios a quartzo, um pequeno cristal desse mineral, sob corrente elétrica, faz o quê para marcar o tempo?",
    "resposta": "Vibra numa frequência constante",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quartz_clock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quartz_clock",
        "situacao": "ok",
        "texto": "Quartz clocks and quartz watches are timepieces that use an electronic oscillator regulated by a quartz crystal to keep time. The crystal oscillator, controlled by the resonant mechanical vibrations of the quartz crystal, creates a signal with very precise frequency, so that quartz clocks and watches are at least an order of magnitude more accurate than mechanical clocks.\n[…]\nThough quartz has a very low coefficient of thermal expansion, temperature changes are the major cause of frequency variation in crystal oscillators. The most obvious way of reducing the effect of temperature on the oscillation rate is to keep the crystal at a constant temperature. For laboratory-grade oscillators, an oven-controlled crystal oscillator is used, in which the crystal is kept in a very small oven that is held at a constant temperature.\n[…]\nThe next three decades saw the development of quartz clocks as precision time standards in laboratory settings; the bulky delicate counting electronics, built with vacuum tubes, limited their use elsewhere. In 1932 a quartz clock was able to measure tiny variations in the rotation rate of the Earth over periods as short as a few weeks. In Japan in 1932, Issac Koga developed a crystal cut that gave an oscillation frequency with greatly reduced temperature dependence.\n[…]\nGirard-Perregaux introduced the Caliber 350 in 1971, with an advertised accuracy within about 0.164 seconds per day, which had a quartz oscillator with a frequency of 32,768 Hz, which was faster than previous quartz watch movements and has since become the oscillation frequency used by most quartz clocks.\n[…]\nIn laboratory settings atomic clocks had replaced quartz clocks as the basis for precision measurements of time and frequency, resulting in International Atomic Time.\n[…]\nIntroduction to Quartz Frequency Standards by John R. Vig Archived 2021-07-10 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rel%C3%B3gio_de_quartzo",
        "situacao": "ok",
        "texto": "Relógio de quartzo - O quartzo quando estimulado por energia elétrica alternada, por ser um material piezoelétrico vibra em uma frequência fixa (ressonância), definida pelo seu corte e lapidação, variando muito pouco com a temperatura ou mesmo com a oscilação da energia. Esta vibração é amplificada por meio eletrônico e isso vai acionar um contador de tempo (motor síncrono) onde se obtém relógios \n[…]\nA aferição da variação diária do tempo chegou-se a uma precisão de um milionésimo de segundo.\n[…]\nO relógio de quartzo surgiu em 1933.\n[…]\nRelógio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Calcita",
      "descricao": "Mineral de carbonato de cálcio (CaCO3), componente do calcário, de dureza 3 na escala de Mohs."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Para reconhecer a calcita, mineral do calcário e do mármore, os geólogos pingam nela um pouco de ácido. O que acontece?",
    "resposta": "Ela solta bolhas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Calcite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Calcite",
        "situacao": "ok",
        "texto": "Calcite (English: /ˈkælˌsaɪt/) is a carbonate mineral and the most stable polymorph of calcium carbonate (CaCO3). It is a very common mineral, particularly as a component of limestone. Calcite defines hardness 3 on the Mohs scale of mineral hardness, based on scratch hardness comparison. Large calcite crystals are used in optical equipment, and limestone composed mostly of calcite has numerous use\n[…]\nWhen applied by archaeologists and stone trade professionals, the term alabaster is used not just as in geology and mineralogy, where it is reserved for a variety of gypsum; but also for a similar-looking, translucent variety of fine-grained banded deposit of calcite.\n[…]\nThe diagnostic properties of calcite include a defining Mohs hardness of 3, a specific gravity of 2.71 and, in crystalline varieties, a vitreous luster. Color is white or none, though shades of gray, red, orange, yellow, green, blue, violet, brown, or even black can occur when the mineral is charged with impurities.\n[…]\nLineages evolved to use whichever morph of calcium carbonate was favourable in the ocean at the time they became mineralised, and retained this mineralogy for the remainder of their evolutionary history. Petrographic evidence for these calcite sea conditions consists of calcitic ooids, lmc cements, hardgrounds, and rapid early seafloor aragonite dissolution. The evolution of marine organisms with calcium carbonate shells may have been affected by the calcite and aragonite sea cycle.\n[…]\nCalcite is one of the minerals that has been shown to catalyze an important biological reaction, the formose reaction, and may have had a role in the origin of life. Interaction of its chiral surfaces (see Form) with aspartic acid molecules results in a slight bias in chirality; this is one possible mechanism for the origin of homochirality in living cells.\n[…]\nList of minerals\n[…]\nManganoan calcite, (Ca,Mn)CO3"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calcita",
        "situacao": "ok",
        "texto": "A Calcita (português brasileiro) ou Calcite (português europeu), é um mineral com composição química CaCO3, com clivagem perfeita e romboédrica.\n[…]\nCristaliza em uma grande variedade de formas. É fonte de cálcio e cal, sendo importante também como pedra decorativa (mármore-ônix) e em instrumentos óticos (quando límpida e incolor). É o principal constituinte dos calcários e mármores, ocorrendo também em conchas, bem como cimento em rochas sedimentares e em carbonatos.\n[…]\nA calcita ou calcite é o mineral constituinte do calcário. Normalmente, nas grutas de calcário, as estalagmites e estalactites são feitas de calcita.\n[…]\nA calcita também possui grande importância científica por participar ativamente do ciclo do carbono na natureza e dos processos de formação de rochas sedimentares carbonáticas. Em ambientes marinhos, muitos organismos como corais, moluscos e foraminíferos utilizam carbonato de cálcio para formar conchas e esqueletos, contribuindo para a formação de calcários ao longo do tempo geológico.\n[…]\nAlém disso, a calcita é amplamente utilizada em atividades industriais, especialmente na fabricação de cimento, cal, corretivos agrícolas e materiais de construção. Devido à sua capacidade de reagir facilmente com ácidos, esse mineral também é frequentemente utilizado na identificação de rochas carbonáticas em estudos geológicos e mineralógicos.\n[…]\nA palavra \"calcita\" é derivada do vocábulo alemão \"calcita\", um termo do século XIX que veio da palavra latina para cal, \"calx\" (genitivo \"calcis\"), com o sufixo -ita, utilizado para nomear minerais.\n[…]\nReage fortemente com ácido clorídrico, mesmo diluído e a frio.",
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
