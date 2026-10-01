Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Moda e Vestuário** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Biquíni",
      "descricao": "Traje de banho feminino de duas peças lançado em Paris por Louis Réard em 1946"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O biquíni ganhou o nome de um atol do Pacífico que, na época do lançamento, era palco de quê?",
    "resposta": "Testes de bombas atômicas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bikini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bikini",
        "situacao": "ok",
        "texto": "A bikini is a women's two-piece swimsuit featuring a top piece covering the breasts, and a bottom piece covering the pelvis (usually excluding the navel) and some or all of the buttocks. The extent covered by both pieces can vary, from those that offer full coverage of the breasts, pelvis, and buttocks, to more revealing designs with thong or G-string bottoms that cover only the mons pubis and int\n[…]\nVarious motivations have been attributed to his choosing of the name, including the idea that he hoped it would create \"explosive commercial and cultural reaction\" similar to the explosion at Bikini Atoll, that it was meant to be associated with the \"exotic allure of the tropical Pacific\", from the \"comparison of the effects of a scantily clad woman to the atomic bomb,\" and the idea that Reard's design had out-done Heim's design and \"split the atome\".\n[…]\nIt has been frequently cited as a major example of a \"psychological link between atomic destruction and sexuality\" in popular culture, which includes the stenciling of Rita Hayworth onto one of the bombs detonated at Crossroads, and its persistence in language has been argued as having \"trivialized and downplayed the reality of nuclear testing,\" given the contamination done by especially later US thermonuclear tests at Bikini and other Marshallese atolls.\n[…]\nSoccer player and best selling author Mo Isom describes it as, \"We're flooded with Instagram bikini pics.\" It was estimated in 2016 that in 2019 the USA would be the largest swimwear market (US$10 billion), followed by Europe (US$5 billion), Asia–Pacific (US$4 billion) and Middle East and Africa (about 1 billion).\n[…]\nIn the 2007 South Pacific Games, the rules were adjusted to allow players to wear less revealing shorts and cropped sports tops instead of bikinis. At the 2006 Asian Games, organizers banned bikini-bottoms for female athletes and asked them to wear long shorts."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biqu%C3%ADni",
        "situacao": "ok",
        "texto": "O biquíni ou bikini é um conjunto de duas peças, derivadas do maiô, de tamanhos reduzidos, que cobrem o busto e a parte inferior do tronco. Seu nome deriva do atol de Bikini, um atol do Pacífico, usado para testes com bombas nucleares e em 5 de julho de 1946 ocorreu o seu lançamento, numa piscina de Paris. Assim, pretendia-se propor que a mulher de biquíni provocava, na época, o efeito de uma \"bom\n[…]\nA criação do biquíni, contudo, é objeto de disputa. Ainda em 1946, Jacques Heim apresentou o modelo “Atome”, anunciado como “o menor maiô do mundo”. Semanas depois, Louis Réard lançou o “bikini”, promovido como “menor que o menor maiô do mundo”, o que lhe garantiu maior fama.\n[…]\nNo início, as mulheres não estavam preparadas para usar peças de vestuário tão reduzidas, que mostravam o umbigo. Os biquínis foram, portanto, proibidos em vários países, incluindo França. No entanto, atrizes como Ava Gardner, Ursula Andress e Brigitte Bardot foram contra todos os preconceitos da época e aderiram ao biquíni, como instrumento de sedução em filmes e em fotos.\n[…]\nO primeiro biquíni moderno foi desfilado por Micheline Bernardini, então uma jovem dançarina do Cassino de Paris. A peça, confeccionada com cerca de 76 cm de tecido de algodão estampado com motivos que simulavam notícias de jornal, distinguia-se por suas dimensões reduzidas em relação aos trajes de banho da época. Sua escala era frequentemente destacada pela comparação com uma caixa de fósforos, utilizada como elemento cênico na apresentação.\n[…]\nO nome “biquíni” faz referência ao Atol de Bikini, local onde os Estados Unidos iniciaram testes nucleares poucos dias antes do lançamento da peça. A escolha do nome buscava sugerir o impacto e o caráter disruptivo do novo traje, em analogia ao contexto geopolítico do período.\n[…]\nDeutsche Welle - 1946: O primeiro biquíni",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Biquíni",
      "descricao": "Traje de banho feminino de duas peças lançado em Paris por Louis Réard em 1946"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O engenheiro Louis Réard apresentou o biquíni numa piscina de Paris pouco depois do fim de qual guerra?",
    "resposta": "Segunda Guerra Mundial",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bikini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bikini",
        "situacao": "ok",
        "texto": "A bikini is a women's two-piece swimsuit featuring a top piece covering the breasts, and a bottom piece covering the pelvis (usually excluding the navel) and some or all of the buttocks. The extent covered by both pieces can vary, from those that offer full coverage of the breasts, pelvis, and buttocks, to more revealing designs with thong or G-string bottoms that cover only the mons pubis and int\n[…]\nFrench automotive engineer Louis Réard then introduced a design he named the \"Bikini\" in Paris on July 5, 1946. Réard adopted the name from the Bikini Atoll in the Pacific Ocean, which was the colonial name the Germans gave to the atoll, borrowed from the Marshallese name for the island, Pikinni. Four days earlier, on 1 July 1946, the United States had initiated its first peacetime nuclear weapons test at Bikini Atoll as part of Operation Crossroads.\n[…]\nSoon after, Louis Réard created a competing two-piece swimsuit design, which he called the bikini. He noticed that women at the beach rolled up the edges of their swimsuit bottoms and tops to improve their tan. On 5 July, Réard introduced his design at a swimsuit review held at a popular Paris public pool, Piscine Molitor, four days after the first test of a US nuclear weapon at the Bikini Atoll. The newspapers were full of news about it and Réard hoped for the same with his design.\n[…]\nRéard's bikini undercut Heim's atome in its brevity. His design consisted of two side-by-side triangles of fabric forming a bra, and two front-and-back triangular pieces of fabric covering the mons pubis and the buttocks, respectively, connected by string. When he was unable to find a fashion model willing to showcase his revealing design, Réard hired Micheline Bernardini, an 18-year old nude dancer from the Casino de Paris.\n[…]\nBikini in popular culture\n[…]\nMetropolitan Museum of Art exhibition—The Bikini\n[…]\nTwo-Piece Be With You: LIFE Celebrates the Bikini"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biqu%C3%ADni",
        "situacao": "ok",
        "texto": "O biquíni ou bikini é um conjunto de duas peças, derivadas do maiô, de tamanhos reduzidos, que cobrem o busto e a parte inferior do tronco. Seu nome deriva do atol de Bikini, um atol do Pacífico, usado para testes com bombas nucleares e em 5 de julho de 1946 ocorreu o seu lançamento, numa piscina de Paris. Assim, pretendia-se propor que a mulher de biquíni provocava, na época, o efeito de uma \"bom\n[…]\nO biquíni foi apresentado oficialmente em 5 de julho de 1946, na piscina pública Piscine Molitor, em Paris, poucos dias antes da temporada de desfiles de moda e durante o primeiro verão europeu após o fim da Segunda Guerra Mundial. O lançamento foi realizado por Louis Réard, engenheiro que passou a atuar na fábrica de lingeries de sua mãe no pós-guerra.\n[…]\nA criação do biquíni, contudo, é objeto de disputa. Ainda em 1946, Jacques Heim apresentou o modelo “Atome”, anunciado como “o menor maiô do mundo”. Semanas depois, Louis Réard lançou o “bikini”, promovido como “menor que o menor maiô do mundo”, o que lhe garantiu maior fama.\n[…]\nO primeiro biquíni moderno foi desfilado por Micheline Bernardini, então uma jovem dançarina do Cassino de Paris. A peça, confeccionada com cerca de 76 cm de tecido de algodão estampado com motivos que simulavam notícias de jornal, distinguia-se por suas dimensões reduzidas em relação aos trajes de banho da época. Sua escala era frequentemente destacada pela comparação com uma caixa de fósforos, utilizada como elemento cênico na apresentação.\n[…]\nManquíni é um termo criado para designar os biquínis usados por homens. Este tipo de traje ficou famoso no filme \"Borat - O Segundo Melhor Repórter do Glorioso País Cazaquistão Viaja à América\", de 2006.\n[…]\nPiscina\n[…]\nDeutsche Welle - 1946: O primeiro biquíni",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Jeans",
      "descricao": "Calça de tecido de algodão resistente, geralmente azul, popularizada pela Levi Strauss & Co."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra jeans vem do nome em francês de qual cidade italiana, de onde saía um tecido resistente usado por marinheiros?",
    "resposta": "Gênova",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jeans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jeans",
        "situacao": "ok",
        "texto": "Jeans are a type of trousers made from denim or dungaree cloth. Often the term \"jeans\" refers to a particular style of trousers, called \"blue jeans\", with the addition of copper pocket rivets added by Jacob W. Davis in 1871 and patented by Davis and Levi Strauss on May 20, 1873. Prior to the patent, the term \"blue jeans\" had been long in use for various items of workwear (including trousers, overa\n[…]\nIn 1957, during the 6th World Festival of Youth and Students held in Moscow, Soviet Union (present-day Russia), Western-made jeans were first introduced to the communist state and sparked \"jeans fever\" at the time. People preferred to wear Western-made blue jeans rather than local-made black ones. In Soviet ideology, such an action challenged communist-made jeans and symbolized Western victory. In 1961, two ringleaders, Y. T. Rokotov and V. P.\n[…]\nFaibishenko, were caught with their group for smuggling currencies from other countries along with blue jeans and other contraband. Under the leadership of Nikita Khrushchev, the duo were executed.\n[…]\nAlthough not outright banned, jeans were hard to come by in the Soviet Union since they were seen as a symbol of rebellion by the Soviet youth, who wanted to emulate the style of film and rock stars of the West. The Soviet government resisted supplying the market with jeans as it would mean responding to the market, a capitalist principle. People went to great lengths, sometimes by resorting to violence and other illegal activities, to obtain real Western-made jeans.\n[…]\nBoyfriend: Often with a mid-low waist, boyfriend jeans have a baggy, \"borrowed from the boys\" fit.\n[…]\nMedia reported in 2017 that the trend of low-rise jeans, famous in the 1990s and 2000s, was coming back into fashion due to a sparked by an interest in Y2K style.\n[…]\nBaggy jeans\n[…]\nDesigner jeans\n[…]\nDrainpipe jeans\n[…]\nMom jeans\n[…]\nRiveted: The History of Jeans at PBS's American Experience"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jeans",
        "situacao": "ok",
        "texto": "Jeans ou calças de ganga [PT]  são um tipo de calças feitas de ganga, brim ou denim. Frequentemente, o termo \"jeans\" se refere a um estilo particular de calças, chamado \"jeans azul\", com bolsos rebitados em cobre que foram inventados por Jacob W. Davis em 1871 e patenteados por Jacob W. Davis e Levi Strauss em maio 20, 1873. Antes da patente, o termo \"jeans azul\" era muito usado para várias roupas\n[…]\n\"Jean\" também faz referência a um tipo (histórico) de tecido resistente comumente feito com urdidura de algodão e trama de lã (também conhecido como \"tecido da Virgínia\"). O tecido jeans também pode ser inteiramente de algodão, semelhante ao brim.\n[…]\nPesquisas sobre o comércio do tecido jeans mostram que ele surgiu nas cidades de Gênova, na Itália, e Nîmes, na França. Gênes, palavra francesa para Gênova, pode ser a origem da palavra “jeans”. Em Nîmes, os tecelões tentaram reproduzir o tecido jeans, mas em vez disso desenvolveram um tecido de sarja semelhante que ficou conhecido como brim ou denim, \"de Nîmes\".\n[…]\nO tecido jeans de Gênova era um tecido fustão de \"qualidade média e custo razoável\", muito semelhante ao veludo de algodão pelo qual Gênova era famosa, e era \"usado para roupas de trabalho em geral\". A marinha genovesa equipou seus marinheiros com jeans, pois eles precisavam de um tecido que pudesse ser usado molhado ou seco. O brim de Nîmes era mais grosseiro, considerado de qualidade superior, e era usado \"para peças de vestuário como batas ou macacões\".\n[…]\nNo século XVII, o jeans era um tecido crucial para a classe trabalhadora no norte da Itália. Isso é visto em uma série de pinturas de gênero por volta do século XVII atribuídas a um artista agora apelidado de The Master of Blue Jeans. As dez pinturas retratam cenas empobrecidas com figuras de classe baixa vestindo um tecido que parece jeans. O tecido seria jeans genovês, que era mais barato.\n[…]\nA Historia do Jeans",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Jeans",
      "descricao": "Calça de tecido de algodão resistente, geralmente azul, popularizada pela Levi Strauss & Co."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1873, o alfaiate Jacob Davis e qual comerciante patentearam a calça de trabalho reforçada com rebites de metal?",
    "resposta": "Levi Strauss",
    "fonte": [
      "https://en.wikipedia.org/wiki/Levi_Strauss",
      "https://en.wikipedia.org/wiki/Jeans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Levi_Strauss",
        "situacao": "ok",
        "texto": "Levi Strauss ( LEE-vy STROWSS; born Löb Strauß, German: [løːp ˈʃtʁaʊs]; February 26, 1829 – September 26, 1902) was a German-born American businessman who founded the first company to manufacture blue jeans. His firm of Levi Strauss & Co. (Levi's) began in 1853 in San Francisco, California.\n[…]\nStrauss opened his wholesale business as Levi Strauss & Co. and imported fine dry goods from his brothers in New York, including clothing, bedding, combs, purses, and handkerchiefs. He made tents and later jeans while he lived with Fanny's growing family. Tailor Jacob W. Davis of Reno, Nevada, was one of his customers; in 1871, having invented a way to strengthen work pants using rivets, he went into business with Strauss to mass-produce them.\n[…]\nThe next year, Davis asked Strauss to help him apply for a patent, and the patent (one-half assigned to Levi Strauss & Co.) was issued in 1873.\n[…]\nLevi Strauss, a member of the Reform branch of Judaism, helped establish Congregation Emanu-El, the first Jewish synagogue in the city of San Francisco. He also gave money to several charities, including special funds for orphans. The Levi Strauss Foundation started with an 1897 donation to the University of California, Berkeley, that provided the funds for 28 scholarships.\n[…]\nThe Levi Strauss museum in Buttenheim, Germany is located in the 1687 house where Strauss was born. There is also a visitors center at Levi Strauss & Co. headquarters in San Francisco, which features historical exhibits.\n[…]\nBiography of Levi Strauss from the Official Levi Strauss Site.\n[…]\nLevi Strauss Museum in Buttenheim, Germany (in German)\n[…]\nLevi Strauss at FMD"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jeans",
        "situacao": "ok",
        "texto": "Jeans are a type of trousers made from denim or dungaree cloth. Often the term \"jeans\" refers to a particular style of trousers, called \"blue jeans\", with the addition of copper pocket rivets added by Jacob W. Davis in 1871 and patented by Davis and Levi Strauss on May 20, 1873. Prior to the patent, the term \"blue jeans\" had been long in use for various items of workwear (including trousers, overa\n[…]\nLevi Strauss, as a young man in 1851, went from Germany to New York to join his older brothers who ran a goods store. In 1853, he moved to San Francisco to open his own dry goods business. Jacob Davis was a tailor who often bought bolts of cloth from the Levi Strauss & Co. wholesale house. In 1872, Davis wrote to Strauss asking to partner with him to patent and sell clothing reinforced with rivets.\n[…]\nA popular myth is that Strauss initially sold brown canvas pants to miners, later dyed them blue, turned to using denim, and only after Davis wrote to him, added rivets.\n[…]\nInitially, Strauss's jeans were simply sturdy trousers worn by factory workers, miners, farmers, and cattlemen throughout the North American West. During this period, men's jeans had the fly down the front, whereas women's jeans had the fly down the left side. When Levi Strauss & Co. patented the modern, mass-produced prototype in 1873, there were two pockets in the front and a patch pocket on the back right reinforced with copper rivets.\n[…]\nThe small riveted watch pocket was first added by Levi Strauss to their jeans in the late 1870s.\n[…]\nDespite most jeans being \"pre-shrunk\", they are still sensitive to slight further shrinkage and loss of color from being washed. The Levi Strauss company recommends avoiding washing jeans as much as possible. These and other suggestions to avoid washing jeans where possible have encountered criticism. Cory Warren, editor of LS&Co. Unzipped, clarifies in a response to such a criticism:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Levi_Strauss",
        "situacao": "ok",
        "texto": "Levi Strauss (Buttenheim, 26 de fevereiro de 1829 – San Francisco, 26 de setembro de 1902) foi um industrial teuto-americano, inventor da blue jeans (calça Levi's) e fundador da empresa Levi Strauss & Co..\n[…]\nEstes dois irmãos, Jonas e Louis Löb, já moravam há alguns anos em Nova Iorque como comerciantes para produtos têxteis.\n[…]\nLöb Strauß naturalizou-se americano em 1853, mudando seu nome para Levi Strauss.\n[…]\nSeus primeiros anos em Nova Iorque, ele passou trabalhando na loja dos seus irmãos mais velhos. Com as primeiras notícias sobre as descobertas de ouro na Califórnia, decidiu abrir em San Francisco uma loja de tecidos e roupas em 1853, junto com seu cunhado David Stern, fundando assim aquela que viria a se tornar a famosa empresa Levi Strauss & Company.\n[…]\nEm 1872 o costureiro Jacob Davis de Reno (Nevada) propõe a Levi Strauss a ideia de reforçar as costuras das calças usadas pelos mineiros com rebites. O sucesso de venda dessas calças foi tão grande que Strauss e Davis decidiram requerer a patente do produto. O dia 20 de maio de 1873 marca o início da história de sucesso da calça jeans, pois nesse dia foi concedido a United States patent no. 139121 para os assim chamados Waist-Overalls, reforçados com rebites de cobre.\n[…]\nLevi Strauss morreu em 26 de setembro de 1902, na sua casa em San Francisco, na qual morava com a família da sua irmã Fanny, deixando para seus sobrinhos Jacob, Louis, Abraham e Sigmund Stern a Levi Strauss & Company. Seu túmulo encontra-se no cemitério Hills of Eternity em Colma, ao sul de San Francisco.\n[…]\n«Levi Strauss Homepage» (em inglês)\n[…]\n«Biografia de Levi Strauss» (PDF) (em inglês)\n[…]\n«Museu Levi Strauss» (em alemão)  na sua vila natal, Buttenheim",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Gravata",
      "descricao": "Acessório masculino de tecido amarrado ao redor do pescoço, sob o colarinho da camisa"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra gravata vem do francês cravate, termo ligado a mercenários de qual povo, que usavam lenços amarrados no pescoço?",
    "resposta": "Croatas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Necktie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Necktie",
        "situacao": "ok",
        "texto": "A necktie (American English) – also called a long tie or, more usually, simply a tie (Commonwealth English) – is a cloth article of formal neckwear or office attire worn for decorative or symbolic purposes, knotted at the throat, resting under a folded shirt collar, and usually draped down the chest. On rare occasions, neckties are worn above a winged shirt collar.\n[…]\nNeckties are reported by fashion historians to be descended from the Regency era double-ended cravat. Adult neckties are generally unsized and tapered along the length, but may be available in longer sizes for taller people, designed to show just the wide end. Widths are usually matched to the width of a suit jacket lapel. Neckties are traditionally worn with the top shirt button fastened, and the tie knot resting between the collar points. Importance is given to the styling of the knot.\n[…]\nThe necktie that spread from Europe traces back to Croatian mercenaries serving in France during the Thirty Years' War (1618–1648). These mercenaries from the Military Frontier, wearing their traditional small, knotted neckerchiefs, aroused the interest of the Parisians. Because of the difference between the Croatian word for Croats, Hrvati, and the French word, Croates, the garment gained the name cravat (cravate in French).\n[…]\nBy this time, the sometimes complicated array of knots and styles of neckwear gave way to neckties and bow ties, the latter a much smaller, more convenient version of the cravat. Another type of neckwear, the ascot tie, was considered de rigueur for male guests at formal dinners and male spectators at races. These ascots had wide flaps that were crossed and pinned together on the chest.\n[…]\nThere are four main knots used to knot neckties. In rising order of difficulty, they are:\n[…]\nChaille, François (1994). La grande histoire de la cravate. Paris: Flammarion. ISBN 2-08-201851-2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gravata",
        "situacao": "ok",
        "texto": "A gravata é uma tira de tecido, estreita e longa, que se usa em torno do pescoço e que é presa por um laço ou nó na parte da frente. Peça predominantemente do vestuário masculino.\n[…]\nO termo \"gravata\" deriva do francês \"cravate\", que por sua vez é uma corruptela de \"croat\", em referência aos mercenários croatas, que primeiro apresentaram a indumentária à sociedade parisiense.\n[…]\nAtribui-se a introdução da gravata aos soldados mercenários croatas a serviço da França durante a Guerra dos Trinta Anos. Os pedaços de tecidos, atados ao pescoço dos soldados com distintivos laços, teriam causado enorme alvoroço em toda a sociedade parisiense. Tal acessório era usado como distintivo militar pelos croatas, sendo de tecido rústico para os soldados e de algodão ou seda para os superiores.\n[…]\n“Por volta do ano 1635, cerca de seis mil soldados e cavaleiros vieram a Paris para dar suporte ao rei Luis XIV e ao Cardeal Richelieu. Entre eles, estava um grande número de mercenários croatas. O traje tradicional destes soldados despertou interesse por causa dos cachecóis incomuns e pitorescos enlaçados em seu pescoço. Os cachecóis eram feitos de vários tecidos, variando de material grosseiro para soldados comuns a seda e algodão para oficiais”.\n[…]\nOs franceses logo se encantaram com esse adereço elegante e desconhecido, que chamaram de \"cravat\", numa adaptação da palavra \"croata\", (em croata, Hrvati e em francês, Croates). O próprio Rei Luis XIV ordenou que seu alfaiate particular criasse uma peça semelhante ao dos croatas e que a incorporasse aos trajes reais.\n[…]\nFrançois Chaille (1994). La grande histoire de la cravate (em francês). Paris: Flammarion. 180 páginas. ISBN 978-2082018517",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Gravata",
      "descricao": "Acessório masculino de tecido amarrado ao redor do pescoço, sob o colarinho da camisa"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O lenço de pescoço que deu origem à gravata virou moda em Paris durante a Guerra dos Trinta Anos. Em que século foi isso?",
    "resposta": "Século dezessete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Necktie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Necktie",
        "situacao": "ok",
        "texto": "A necktie (American English) – also called a long tie or, more usually, simply a tie (Commonwealth English) – is a cloth article of formal neckwear or office attire worn for decorative or symbolic purposes, knotted at the throat, resting under a folded shirt collar, and usually draped down the chest. On rare occasions, neckties are worn above a winged shirt collar.\n[…]\nNeckties are reported by fashion historians to be descended from the Regency era double-ended cravat. Adult neckties are generally unsized and tapered along the length, but may be available in longer sizes for taller people, designed to show just the wide end. Widths are usually matched to the width of a suit jacket lapel. Neckties are traditionally worn with the top shirt button fastened, and the tie knot resting between the collar points. Importance is given to the styling of the knot.\n[…]\nThe necktie that spread from Europe traces back to Croatian mercenaries serving in France during the Thirty Years' War (1618–1648). These mercenaries from the Military Frontier, wearing their traditional small, knotted neckerchiefs, aroused the interest of the Parisians. Because of the difference between the Croatian word for Croats, Hrvati, and the French word, Croates, the garment gained the name cravat (cravate in French).\n[…]\nBy this time, the sometimes complicated array of knots and styles of neckwear gave way to neckties and bow ties, the latter a much smaller, more convenient version of the cravat. Another type of neckwear, the ascot tie, was considered de rigueur for male guests at formal dinners and male spectators at races. These ascots had wide flaps that were crossed and pinned together on the chest.\n[…]\nThere are four main knots used to knot neckties. In rising order of difficulty, they are:\n[…]\nChaille, François (1994). La grande histoire de la cravate. Paris: Flammarion. ISBN 2-08-201851-2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gravata",
        "situacao": "ok",
        "texto": "A gravata é uma tira de tecido, estreita e longa, que se usa em torno do pescoço e que é presa por um laço ou nó na parte da frente. Peça predominantemente do vestuário masculino.\n[…]\nOutra possível origem da gravata remonta há milhares de anos, quando os guerreiros do imperador chinês Shih Huang Ti usavam um cachecol com um nó em volta do pescoço como símbolo de status e de elite entre as tropas, de forma semelhante à gravata hoje conhecida.\n[…]\nAtribui-se a introdução da gravata aos soldados mercenários croatas a serviço da França durante a Guerra dos Trinta Anos. Os pedaços de tecidos, atados ao pescoço dos soldados com distintivos laços, teriam causado enorme alvoroço em toda a sociedade parisiense. Tal acessório era usado como distintivo militar pelos croatas, sendo de tecido rústico para os soldados e de algodão ou seda para os superiores.\n[…]\nEsses acontecimentos encontram-se no livro francês “La Grande Histoire de la Cravate” (Flamarion, Paris, 1994), conforme a seguinte passagem:\n[…]\n“Por volta do ano 1635, cerca de seis mil soldados e cavaleiros vieram a Paris para dar suporte ao rei Luis XIV e ao Cardeal Richelieu. Entre eles, estava um grande número de mercenários croatas. O traje tradicional destes soldados despertou interesse por causa dos cachecóis incomuns e pitorescos enlaçados em seu pescoço. Os cachecóis eram feitos de vários tecidos, variando de material grosseiro para soldados comuns a seda e algodão para oficiais”.\n[…]\nGravata-borboleta\n[…]\nFrançois Chaille (1994). La grande histoire de la cravate (em francês). Paris: Flammarion. 180 páginas. ISBN 978-2082018517\n[…]\n«Nós de Gravata»\n[…]\n«Nó de gravata»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Trench coat",
      "descricao": "Casaco impermeável longo, com abotoamento duplo e cinto, de origem militar britânica"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O casaco trench coat ganhou esse nome por ser usado por oficiais britânicos nas trincheiras de qual guerra?",
    "resposta": "Primeira Guerra Mundial",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trench_coat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trench_coat",
        "situacao": "ok",
        "texto": "A trench coat is a variety of coat made of waterproof heavy-duty fabric. Originally developed for British Army officers before the First World War, they became popular while used in the trenches, hence the name.\n[…]\nOriginally made from gabardine, a worsted wool fabric waterproofed using lanolin before weaving, the traditional colour of a trench coat was khaki. Traditionally trench coats are double-breasted with 10 front buttons, wide lapels, a storm flap, and pockets that button-close. The coat is belted at the waist with a self-belt, with raglan sleeves ending in cuff straps around the wrists that also buckle, to keep water from running down the forearm when using binoculars in the rain.\n[…]\nThe trench coat was developed as an alternative to the heavy serge greatcoats worn by British and French soldiers in the First World War. Invention of the trench coat is claimed by two British luxury clothing manufacturers, Burberry and Aquascutum, with Aquascutum's claim dating back to the 1850s. Thomas Burberry had invented gabardine fabric in 1879 and submitted a design for a British Army officer's raincoat to the War Office in 1901.\n[…]\nWhile similar, the heavy metal and Goth fashion trend of black oilcloth dusters are incorrectly referred to as trench coats. Early media reports of the 1999 Columbine High School massacre initially associated the perpetrators (Eric Harris and Dylan Klebold) with the school's \"Trenchcoat Mafia\", a clique who allegedly wore conspicuous black Australian oilcloth dusters. In the copycat W. R. Myers High School shooting days later, it was rumoured the shooter had worn a trench coat.\n[…]\nCoat (clothing)\n[…]\nChesterfield coat\n[…]\nMedia related to Trenchcoats at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Quimono",
      "descricao": "Vestimenta tradicional japonesa em forma de T, com mangas largas e presa por uma faixa chamada obi"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em japonês, o que significa literalmente a palavra quimono?",
    "resposta": "Coisa de vestir",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kimono"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kimono",
        "situacao": "ok",
        "texto": "The kimono (着物; Japanese pronunciation: [kʲi.mo.no], lit. 'thing to wear') is a traditional Japanese garment and the national dress of Japan. The kimono is a wrapped-front garment with square sleeves and a rectangular body, and is worn left side wrapped over right, unless the wearer is deceased. The kimono is traditionally worn with a broad sash, called an obi, and is commonly worn with accessorie\n[…]\nFollowing the opening of Japan's borders in the early Meiji period to Western trade, new materials and techniques – such as wool and the use of synthetic dyestuffs – became popular, with casual wool kimonos being relatively common in pre-1960s Japan; the use of safflower dye (beni) for silk linings fabrics (known as momi; literally, \"red silk\") was also common in pre-1960s Japan, making kimonos from this era easily identifiable.\n[…]\nThe juban, also called the nagajuban (長襦袢), is an under-kimono worn by both men and women.\n[…]\nThe han'eri, visible at the neckline when worn underneath a kimono, is designed to be replaced and washed when needed.\n[…]\nKimonos are worn by Japanese Americans, and by other members of the Japanese diaspora overseas, such as Japanese in the Philippines. Kimonos are worn to Shinto ceremonies by Japanese Brazilians in Curitiba, Paraná.\n[…]\nKimonos are collected in the same way as Japanese hobbyists by some non-Japanese, and may be worn to events such as Kimono de Jack gatherings.\n[…]\nArticles on contemporary kimono artisans and production regions by Ginza Motoji\n[…]\nThe Canadian Museum of Civilization – Archive of the exhibition \"The Landscape Kimonos of Itchiku Kubota\"\n[…]\nArchived link to the Immortal Geisha Forums; comprehensive resource on kimono knowledge and culture\n[…]\nArticles on kimono from the V&A Collection\n[…]\nArticles on kimono\n[…]\nKimono: A Modern History 2014 exhibition at the Metropolitan Museum of Art; exhibition catalog by Terry Satsuki Milhaupt ISBN 978-1-780-23317-8"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quimono",
        "situacao": "ok",
        "texto": "O quimono ou kimono (着物, きもの)) é uma vestimenta tradicional japonesa utilizada por mulheres, homens e crianças. A palavra \"kimono\", que no seu sentido literal, traduzido diretamente do japonês, significa \"coisa para vestir\" (ki = \"vestir\" e mono = \"coisa\") é utilizada para denotar o nome destes longos roupões.\n[…]\nKimonos têm diferentes estilos e acessórios.\n[…]\nEmbora tenha sido anteriormente a roupa japonesa mais comum, o quimono nos dias atuais caiu fora de moda e raramente é usado como vestido cotidiano. Quimonos são agora mais vistos em festivais de verão, onde as pessoas frequentemente usam o yukata, o tipo mais informal de quimono; no entanto, tipos mais formais de quimono também são usados em funerais, casamentos, formaturas e outros eventos formais.\n[…]\nAs primeiras instâncias de roupas semelhantes a quimonos no Japão foram tradiste chinesa introduzidas no Japão através de enviados chineses no período Kofun (300-538 CE; a primeira parte do período Yamato), com a imigração entre os dois países e missões para a corte da dinastia Tangy levando a estilos chineses de vestimenta,  aparência e cultura tornando-se extremamente popular na sociedade judicial japonesa.\n[…]\nObi (帯): cinto japonês usado em volta do quimono ou yukata. São usados diferentemente dependendo da ocasião e são mais sofisticados quando usados por mulheres. Enquanto numa gueixa o obi é atado atrás, nas costas, numa prostituta é atado à frente, sendo que a sua posição varia conforme o estado social da mulher que o usa.\n[…]\nKeikogi - quimonos usados em artes marciais de origem japonesa.\n[…]\nCultura Japonesa- site em português com a história do Quimono e do vestuário no Japão\n[…]\nJapanese Kimono - Many photos\n[…]\nMuseu japonês do Traje: História do Traje no Japão\n[…]\nEnciclopédia do Quimono\n[…]\nKimono Fraise\n[…]\nVestido Kimono é tendência",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Coco Chanel",
      "descricao": "Estilista francesa Gabrielle Chanel, fundadora da grife Chanel"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes da moda, Gabrielle Chanel ganhou o apelido Coco quando trabalhava em que ofício, na cidade francesa de Moulins?",
    "resposta": "Cantora de cabaré",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coco_Chanel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coco_Chanel",
        "situacao": "ok",
        "texto": "Gabrielle Bonheur \"Coco\" Chanel ( shə-NEL; French: [ɡabʁijɛl bɔnœʁ kɔko ʃanɛl] ; 19 August 1883 – 10 January 1971) was a French fashion designer and businesswoman. The founder and namesake of the Chanel brand, she was credited in the post–World War I era with popularising a sporty, casual chic as the feminine standard of style. She is the only fashion designer listed on Time magazine's list of the\n[…]\nHaving learned to sew during her six years at Aubazine, Chanel found employment as a seamstress. When not sewing, she sang in a cabaret frequented by cavalry officers. Chanel made her stage debut singing at a cafe-concert (a popular entertainment venue of the era) in a Moulins pavilion, La Rotonde. She was a poseuse, a performer who entertained the crowd between star turns. The money earned was what the performers managed to collect  when the plate was passed.\n[…]\nIt was at this time that Gabrielle acquired the name \"Coco\" when she spent her nights singing in the cabaret, often the song, \"Who Has Seen Coco?\" She often liked to say the nickname was given to her by her father. Others believe \"Coco\" came from Ko Ko Ri Ko, and Qui qu'a vu Coco, or it was an allusion to the French word for kept woman, cocotte. As an entertainer, Chanel radiated a juvenile allure that tantalised the military habitués of the cabaret.\n[…]\nThen I really started hunting through all of the archives, in the United States, in London, in Berlin, and in Rome and I came across not one, but 20, 30, 40 absolutely solid archival materials on Chanel and her lover, Hans Günther von Dincklage, who was a professional Abwehr spy.Vaughan also addressed the discomfort many felt with the revelations provided in his book: A lot of people in this world don't want the iconic figure of Gabrielle Coco Chanel, one of France's great cultural idols, destroyed.\n[…]\nLisa Chaney on Coco Chanel on YouTube\n[…]\nCoco Chanel 1969 interview on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coco_Chanel",
        "situacao": "ok",
        "texto": "Gabrielle Bonheur \"Coco\" Chanel ([ʃəˈnɛl] shə-NEL, francês: [ɡabʁijɛl bɔnœʁ kɔko ʃanɛl] (); Saumur, 19 de agosto de 1883 – Paris, 10 de janeiro de 1971) foi uma estilista e empresária francesa. Fundadora da marca Chanel, ela foi creditada na era pós-Primeira Guerra Mundial por popularizar um chique esportivo e casual como o padrão feminino de estilo.\n[…]\nGabrielle Bonheur Chanel nasceu em 1883, filha de Eugénie Jeanne Devolle Chanel, conhecida como Jeanne, uma lavadeira, no hospital de caridade administrado pelas Irmãs da Providência (um asilo) em Saumur, Maine-et-Loire. Ela foi a segunda filha de Jeanne com Albert Chanel; a primeira, Julia, nascera menos de um ano antes. Albert Chanel era um vendedor ambulante itinerante que vendia roupas de trabalho e roupas íntimas, vivendo uma vida nômade, viajando de e para cidades mercantis.\n[…]\nTendo aprendido a costurar durante seus seis anos em Aubazine, Chanel encontrou um emprego como costureira. Quando não estava costurando, ela cantava em um cabaré frequentado por oficiais de cavalaria. Chanel fez sua estreia nos palcos cantando em um café-chantant (um popular local de entretenimento da época) em um pavilhão de Moulins, La Rotonde. Ela era uma poseuse, uma artista que entretinha a multidão entre as estrelas.\n[…]\nFoi nessa época que Gabrielle adquiriu o nome de \"Coco\" quando passava as noites cantando no cabaré, muitas vezes a música \"Who Has Seen Coco?\" Ela costumava dizer que o apelido foi dado a ela por seu pai. Outros acreditam que \"Coco\" veio de Ko Ko Ri Ko e Qui qu'a vu Coco, ou foi uma alusão à palavra francesa para mulher mantida, cocotte. Como artista, Chanel irradiava um fascínio juvenil que atormentava os habitués militares do cabaré.\n[…]\nChanel proclamou \"Eu impus o preto; ainda está forte hoje, pois o preto apaga tudo ao redor\".\n[…]\nA influência da Chanel tornou o banho de sol na moda.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Zíper",
      "descricao": "Fecho deslizante de dentes intercalados usado em roupas, bolsas e calçados"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1923, a fabricante de pneus Goodrich criou o nome zipper ao usar o fecho deslizante em que tipo de calçado?",
    "resposta": "Galochas de borracha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zipper"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zipper",
        "situacao": "ok",
        "texto": "A zipper (N. America), zip, zip fastener (UK), formerly known as a clasp locker, is a commonly used device for binding together two edges of fabric or other flexible material. Used in clothing (e.g., jackets and jeans), luggage and other bags, camping gear (e.g., tents and sleeping bags), and many other items, zippers come in a wide range of sizes, shapes, and colors. In 1892, Whitcomb L. Judson, \n[…]\nThe popular North American term zipper (UK zip, or occasionally zip-fastener) came from the B. F. Goodrich Company in 1923. The company used Gideon Sundbäck's fastener on a new type of rubber boots (or galoshes) and referred to it as the zipper, and the name stuck. The two chief uses of the zipper in its early years were for closing boots and tobacco pouches. Zippers began being used for clothing in 1925 by Schott NYC on leather jackets.\n[…]\nA regular invisible zipper uses a lighter lace-like fabric on the zipper tape, instead of the common heavier woven fabric on other zippers.\n[…]\nTop Tape Extension (the fabric part of the zipper, that extends beyond the teeth, at the top of the chain)\n[…]\nTape Width (refers to the width of the fabric on both sides of the zipper chain)\n[…]\nBottom Tape Extension (the fabric part of the zipper, that extends beyond the teeth, at the bottom of the chain)\n[…]\nSingle Tape Width (refers to the width of the fabric on one side of the zipper chain)\n[…]\nForbes reported in 2003 that although the zipper market in the 1960s was dominated by Talon Zipper (US) and Optilon (Germany), Japanese manufacturer YKK grew to become the industry giant by the 1980s. YKK held 45 percent of world market share, followed by Optilon (8 percent) and Talon Zipper (7 percent). YKK enters zipper historical records only following the significant contributions from Howe, Judson, Sundback and the B.F. Goodrich Company.\n[…]\nType of Zippers\n[…]\nPutting in a Zipper, ca. 1962, Archives of Ontario YouTube Channel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Z%C3%ADper",
        "situacao": "ok",
        "texto": "Um zíper, fecho éclair, fecho ecler, zíper ou fecho de correr [PT]   é um fecho utilizado em roupas e em artefatos de couro feito de dois cadarços com dentes plásticos ou metálicos, que se encaixam por ação de um cursor.\n[…]\nA história do zíper, fecho éclair ou simplesmente \"fecho\" começou em 1893 na Exposição Mundial de Chicago, nos EUA, onde este objeto deslizante para fechar e abrir roupas foi apresentado pela primeira vez. Tratava-se de uma versão primitiva do dispositivo, com minúsculos ganchos e argolas, desenvolvida pelo engenheiro americano Whitcomb L. Judson. Cansado de abrir e fechar todos os dias os cordões dos seus sapatos, ele teve a ideia de criar um artefato rudimentar, composto de ganchos e furos.\n[…]\nPorém, esse tipo de zíper não era muito eficiente: não fechava com facilidade e abria em horas impróprias.\n[…]\nEmbora Whitcomb L. Judson tenha sido o inventor e tenha montado uma fábrica para a criação desta nova invenção, ele também era obrigado a fabricar botões. O zíper só começou a se popularizar quando começou a ser usado em outras peças de roupa que não calçados, e quando foi inventada em 1912, pelo sueco-americano Gideon Sundbäck, a versão do zíper que é conhecida hoje, com dentes que se engancham, o que tornou o dispositivo mais prático.\n[…]\nO nome \"zíper\" vem da palavra zipper, em inglês. Este nome popularizou-se somente em 1923, vindo de um funcionário da empresa americana B. F. Goodrich, em que o termo foi usado para denominar o fecho da nova linha de galochas de borracha da fábrica, chamada Zipper Boots.\n[…]\nAtualmente, o maior produtor de zíperes do mundo está localizado no Japão, onde o grupo YKK tornou-se o mais famoso do mundo na fabricação destes fechos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Velcro",
      "descricao": "Fecho de contato formado por uma fita de ganchos e outra de laços, inventado por George de Mestral"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome velcro junta duas palavras francesas: velours, que significa veludo, e qual outra, que significa gancho?",
    "resposta": "Crochet",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hook-and-loop_fastener"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hook-and-loop_fastener",
        "situacao": "ok",
        "texto": "Velcro is a brand of versatile fastening devices, known as hook-and-loop fasteners, hook-and-pile fasteners, or touch fasteners, that allow two surfaces to be repeatedly attached and detached with ease. A trademark of Velcro Companies, the brand name is often used generically to refer to this type of fastener. Invented in the mid-20th century, it is widely used in clothing, accessories, and variou\n[…]\nThe original hook-and-loop fastener was conceived in 1941 by Swiss engineer George de Mestral, which he named velcro. The word Velcro is a portmanteau of two French words: \"velours\" meaning velvet, and \"crochet\" meaning hook. The idea came to him one day after he returned from a hunting trip with his dog in the Alps. He took a close look at the burs of burdock that kept sticking to his clothes and his dog's fur.\n[…]\nNASA makes significant use of hook-and-loop fasteners. Each Space Shuttle flew equipped with ten thousand inches of a special fastener made of Teflon loops, polyester hooks, and glass backing. Hook-and-loop fasteners are widely used, from the astronauts' suits, to anchoring equipment. In the near weightless conditions in orbit, hook-and-loop fasteners are used to temporarily hold objects and keep them from floating away.\n[…]\nThere is a silent version of hook-and-loop fasteners, sometimes called Quiet Closures.\n[…]\nASTM D5170-98 (2010) Standard Test Method for Peel Strength (\"T\" Method) of Hook and Loop Touch Fasteners\n[…]\nVelcro jumping is a game where people wearing hook-covered suits take a running jump and hurl themselves as high as possible at a loop-covered wall. The wall is inflated, and looks similar to other inflatable structures. It is not necessarily completely covered in the material—often there will be vertical strips of hooks. Sometimes, instead of a running jump, people use a small trampoline.\n[…]\nMedia related to Hook-and-loop fasteners at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Velcro",
      "descricao": "Fecho de contato formado por uma fita de ganchos e outra de laços, inventado por George de Mestral"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O engenheiro suíço George de Mestral teve a ideia do velcro depois de ver o que grudado no pelo do seu cachorro?",
    "resposta": "Carrapichos de bardana",
    "fonte": [
      "https://en.wikipedia.org/wiki/George_de_Mestral",
      "https://en.wikipedia.org/wiki/Hook-and-loop_fastener"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/George_de_Mestral",
        "situacao": "ok",
        "texto": "George de Mestral ((1907-06-19)19 June 1907 – (1990-02-08)8 February 1990) was a Swiss electrical engineer who invented the hook and loop fastener which he named Velcro.\n[…]\nDe Mestral died in Commugny, Switzerland, where he is buried. The municipality posthumously named an avenue, L'avenue George de Mestral, in his honour.\n[…]\nHe was inducted into the National Inventors Hall of Fame in 1999 for inventing hook and loop fasteners.\n[…]\nDe Mestral first conceptualised hook and loop after returning from a hunting trip with his dog in the Alps in 1941. After removing several of the burdock burrs (seeds) that kept sticking to his clothes and his dog's fur, he became curious as to how it worked. He examined them under a microscope, and noted hundreds of \"hooks\" that caught on anything with a loop, such as clothing, animal fur, or hair.\n[…]\nDe Mestral gave the name Velcro, a portmanteau of the French words velours (\"velvet\"), and crochet (\"hook\"), to his invention as well as his company, which continues to manufacture and market the fastening system.\n[…]\nHowever, hook and loop's integration into the textile industry took time, partly because of its appearance. Hook and loop in the early 1960s looked like it had been made from left-over bits of cheap fabric, an unappealing aspect for clothiers. The first notable use for Velcro® brand hook and loop came in the aerospace industry, where it helped astronauts manoeuvre in and out of bulky space suits. Eventually, skiers noted the similar advantages of a suit that was easier to get in and out of.\n[…]\n\"George de Mestral\" in  German, French and Italian in the online Historical Dictionary of Switzerland."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hook-and-loop_fastener",
        "situacao": "ok",
        "texto": "Velcro is a brand of versatile fastening devices, known as hook-and-loop fasteners, hook-and-pile fasteners, or touch fasteners, that allow two surfaces to be repeatedly attached and detached with ease. A trademark of Velcro Companies, the brand name is often used generically to refer to this type of fastener. Invented in the mid-20th century, it is widely used in clothing, accessories, and variou\n[…]\nThe original hook-and-loop fastener was conceived in 1941 by Swiss engineer George de Mestral, which he named velcro. The word Velcro is a portmanteau of two French words: \"velours\" meaning velvet, and \"crochet\" meaning hook. The idea came to him one day after he returned from a hunting trip with his dog in the Alps. He took a close look at the burs of burdock that kept sticking to his clothes and his dog's fur.\n[…]\nThe big breakthrough de Mestral made was to think about hook-and-eye closures on a greatly reduced scale. Hook-and-eye fasteners have been common for centuries, but what was new about hook-and-loop fasteners was the miniaturisation of the hooks and eyes. Shrinking the hooks led to the two other important differences. First, instead of a single-file line of hooks, hook-and-loop fasteners have a two-dimensional surface.\n[…]\nDe Mestral obtained patents in many countries right after inventing the fasteners, as he expected an immediate high demand. Owing partly to its cosmetic appearance, though, hook-and-loop's integration into the textile industry took time. At the time, the fasteners looked as though they had been made from leftover bits of cheap fabric, and thus were not sewn into clothing or used widely when it debuted in the early 1960s. It was also regarded as impractical.\n[…]\nASTM D5170-98 (2010) Standard Test Method for Peel Strength (\"T\" Method) of Hook and Loop Touch Fasteners\n[…]\nMedia related to Hook-and-loop fasteners at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Georges_de_Mestral",
        "situacao": "ok",
        "texto": "Georges de Mestral (Nyon, 19 de Junho de 1907 — Commugny, 8 de Fevereiro de 1990) foi um engenheiro eletrônico suíço.\n[…]\nInventou o Velcro.\n[…]\nNasceu em Nyon, entre Geneva e Lausanne, na Suíça. Quando tinha 12 anos construiu um avião de brincar em madeira que mais tarde patenteou. Frequentou a Escola Politécnica Federal de Lausana. Depois de ter completado o curso começou a trabalhar numa loja de máquinas de uma empresa de engenharia.\n[…]\nApesar da resistência da sociedade a esta ideia, De Mestral fundou a sua própria companhia e em 1951 patenteou o Velcro, vendendo 55.000 km por ano, tornou-se então um multimilionário.\n[…]\nQuando o seu pai morreu em 1966, De Mestral herda o castelo Suíço de Saint-Saphorin-sur-Morges. A 8 de Fevereiro de 1990 morre em Commugny, na Suíça.\n[…]\n1907 - Nasce o seu pai,Albert-Georges-Constantin de Mestral (1878-1966) um engenheiro agrónomo.\n[…]\nEstuda engenharia eléctrica na Escola Politécnica Federal de Lausana.\n[…]\n1941 - Inventa o Velcro.\n[…]\n1951 - Regista a patente do \"Velcro\" na Suíça.\n[…]\n1952 - Regista a patente do \"Velcro\" nos outros países.\n[…]\n1952 - Funda a Velcro SA com a ajuda da \"Gonet & Co\", Velcro torna-se assim uma marca conhecida.\n[…]\nO Velcro começa a ser utilizado pela NASA, nos fatos dos astronauta dentro das naves espaciais.\n[…]\n«Pequena biografia sobre George de mestral»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Musselina",
      "descricao": "Tecido de algodão leve e de trama fina, usado em vestidos, cortinas e fraldas"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O tecido leve chamado musselina deve seu nome a qual cidade do atual Iraque?",
    "resposta": "Mossul",
    "distratores": [
      "Bagdá",
      "Basra",
      "Kirkuk"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Muslin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Muslin",
        "situacao": "ok",
        "texto": "Muslin () is a cotton fabric of plain weave. It is made in a wide range of weights from delicate sheers to coarse sheeting.\n[…]\nMuslin can be used as a filter:\n[…]\nMuslin is a filter in traditional Fijian kava production.\n[…]\nThe Wizard of Oz (1939 film) features a sequence with a tornado constructed out of muslin, measuring 35-foot-high.\n[…]\nSurgeons use muslin gauze in cerebrovascular neurosurgery to wrap around aneurysms or intracranial vessels at risk for bleeding. The thought is that the gauze reinforces the artery and helps prevent rupture. It is often used for aneurysms that, due to their size or shape, cannot be microsurgically clipped or coiled.\n[…]\nMany travelers and merchants of the 13th and 14th centuries praised Bengal muslin, and claimed it as the best muslin. From the Mughal rulers to the European colonial rulers, Bengal's muslins were recognized for their superiority, with the muslins produced at Sonargaon being the best.\n[…]\nIn 2013, the traditional art of Jamdani weaving in Bangladesh was included in the list of Masterpieces of the Oral and Intangible Heritage of Humanity by UNESCO. In 2020, Dhakai Muslin was given a geographical indication status as a product of Bangladesh. In 2024, Banglar Muslin (or Bengal Muslin) was granted geographical indication status as a product of West Bengal, India.\n[…]\nMuslin trade in Bengal – Textile trade in Eastern India\n[…]\nTanzeb – Type of Muslin\n[…]\nIslam, Khademul (May–June 2016). \"Our Story of Dhaka Muslin\". Aramco World. Vol. 67, no. 3. pp. 26–32. OCLC 895830331.\n[…]\nMedia related to Muslin at Wikimedia Commons\n[…]\nThe dictionary definition of muslin at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Musselina",
        "situacao": "ok",
        "texto": "Musselina (português europeu) ou Musseline (português brasileiro) (do francês mousseline) é um tipo de tecido muito leve e transparente, usado na confecção de vestuário feminino.\n[…]\nApesar da origem do nome indicar o local onde comerciantes encontravam o tecido, na cidade de Mossul, Iraque, este tipo de fibra tem sua origem em outros locais: há quem afirme que vem de Masulipatão, na Índia. Outros afirmam que vem de Daca, Bangladexe.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Bolsa Kelly",
      "descricao": "Bolsa de couro da grife Hermès rebatizada em homenagem à atriz e princesa Grace Kelly"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A bolsa da Hermès rebatizada em homenagem a Grace Kelly ficou famosa porque a princesa a usava para esconder o quê dos fotógrafos?",
    "resposta": "A gravidez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kelly_bag"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kelly_bag",
        "situacao": "ok",
        "texto": "The Kelly bag is a leather handbag created in the 1930s by the company Hermès and named after American actress and Princess of Monaco Grace Kelly. It is one of the brand's iconic products, along with the Carré de soie and the Birkin bag.\n[…]\nAlfred Hitchcock has been credited with bringing the handbag into the limelight. In 1954, Hitchcock allowed the costume designer Edith Head to purchase Hermès accessories for the film To Catch a Thief, starring Grace Kelly. According to Head, Kelly \"fell in love\" with the bag.\n[…]\nIn the late 1950s, Hermès decided to rename it the Kelly bag.\n[…]\nThe handbag with which Princess Grace was photographed was loaned by the palace archives of Monaco and displayed in the Victoria and Albert Museum in April 2010, along with other notable wardrobe items owned by the princess. The \"star exhibit\" of the show has scuffs and marks, as the wardrobe-thrifty princess carried it for many years. As of 2010, Hermès made 32 styles of handbags, of which the Kelly was the best-seller.\n[…]\nHermès leather craftsmen are trained for an average of 18 months, with the Kelly bag being the main focus, as this model concentrates the majority of the know-how required to work in Hermès' workshops.\n[…]\nHermès is one of the few brands with iconic pieces, immediately identifiable by a first name, as would also later be the case with the Birkin bag, produced from 1984. The Kelly is nevertheless considered more formal and refined, while the Birkin is more sporty and casual.\n[…]\nWedding dress of Grace Kelly\n[…]\nGroat, Jon; Betker, Ally (5 September 2012). \"Watch the Making of an Hermès Kelly Bag\". New York. Retrieved 11 October 2019."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Sans-culottes",
      "descricao": "Revolucionários das camadas populares de Paris durante a Revolução Francesa"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os sans-culottes da Revolução Francesa tinham esse apelido porque, em vez dos calções até o joelho da nobreza, vestiam o quê?",
    "resposta": "Calças compridas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sans-culottes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sans-culottes",
        "situacao": "ok",
        "texto": "The sans-culottes (French: [sɑ̃kylɔt]; lit. 'without breeches') were the common people of the lower classes in late 18th-century France, a great many of whom became radical and militant partisans of the French Revolution in response to their poor quality of life under the Ancien Régime.\n[…]\nThe execution of radical leader Jacques Hébert spelled the decline of the sans-culottes, and with the successive rise of even more conservative governments, the Thermidorian Convention and the French Directory, they were definitively silenced as a political force. After the defeat of the 1795 popular revolt in Paris, the sans-culottes ceased to play any effective political role in France until the July Revolution of 1830.\n[…]\nOn 1 May, the crowds threatened armed insurrection if the emergency measures demanded (price control) were not adopted. On 8 and 12 May Robespierre repeated in the Jacobin club the necessity of founding a revolutionary army consisting of sans-culottes, paid by a tax on the rich, to beat the aristocrats inside France and the convention. Every public square should be used to produce arms and pikes.\n[…]\nThe working class was especially hurt by a hail storm which damaged grain crops in 1788, which caused bread prices to skyrocket. While the peasants of rural France could sustain themselves with their farms, and the wealthy aristocracy could still afford bread, the urban workers of France, the group that comprised the sans-culottes, suffered.\n[…]\nSonenscher, Michael. Sans-Culottes: An Eighteenth-Century Emblem in the French Revolution (Princeton University Press, 2008). Pp. 493.\n[…]\nWilliams, Gwyn A (1969), Artisans and Sans-culottes: Popular Movements in France and Britain during the French Revolution. Foundations of Modern History. New York: Norton."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sans-culottes",
        "situacao": "ok",
        "texto": "Sans-culotte foi a denominação dada pelos aristocratas aos artesãos, trabalhadores e até pequenos proprietários participantes da Revolução Francesa, principalmente em Paris. Livremente traduzido da língua francesa como \"sem calção\", o culote era uma espécie de calções justos que se apertavam na altura dos joelhos, vestimenta típica da nobreza naquele país à época da Revolução.\n[…]\nEm seu lugar, os sans-culottes vestiam uma calça comprida de algodão grosseiro, traje tipicamente utilizado pelos burgueses. Estes eram, normalmente, os líderes das manifestações nas ruas.\n[…]\nOs sans-culottes passaram a ser diferenciados por esse termo vindo da aristocracia francesa, cuja vestimenta marcava a distinção social. Desse modo, diferente da nobreza que possuía trajes de tecidos com alta qualidade, bordados a ouro e calças apertadas que seguiam a moda da época, os sans-culottes utilizavam um vestuário modesto: casacos curtos e estreitos, sapatos de madeira e suspensórios junto com suas calças largas — fato que os denominou como sans-culottes.\n[…]\nDurante a Revolução Francesa, existiu uma aliança entre os sans-culottes e a facção mais radicais da Revolução, os jacobinos. Não eram, contudo, grupos homogêneos,  Os dois grupos se alinhavam aos fundamentos de Rousseau, defendiam ideias de autonomia do povo e de democracia, mas tinham diferenças importantes quanto ao seu significado.\n[…]\nOs sans-culottes atuaram ativamente durante a Revolução Francesa, sendo parte indispensável da força bruta dos manifestantes. Em momentos de crises, os sans-culottes mobilizaram milhares de pessoas armadas, entoando canções e arrastando multidões pelas ruas de Paris.\n[…]\nHIGONNET, Patrice. Sans-Culottes. In: Dicionário Crítico da Revolução Francesa / François Furet e Mona Ozouf. Tradução de Henrique Mesquita. Rio de Janeiro: Nova Fronteira, 1989. ISBN 978-8520901496.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Christian Louboutin",
      "descricao": "Designer francês de sapatos conhecido pelas solas vermelhas"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1993, Christian Louboutin pintou de vermelho a sola de um protótipo de sapato usando o que pegou de uma assistente?",
    "resposta": "Esmalte de unha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christian_Louboutin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christian_Louboutin",
        "situacao": "ok",
        "texto": "Christian Louboutin (French: [kʁistjɑ̃ lubutɛ̃]; born 7 January 1964) is a French fashion designer. His stiletto footwear incorporates shiny, red-lacquered soles that have become his signature. Initially a freelance designer for fashion houses, he started his shoe salon in Paris, with his shoes finding favour with celebrity clientele. He has partnered with other organizations for projects includin\n[…]\nLouboutin is Léa Seydoux's godfather.\n[…]\nThe first pair of red-soled Louboutin shoes were created in either 1992 or 1993, when Louboutin used an assistant's red nail polish to add red to a pair with black soles.\n[…]\nChristian Louboutin invested in the hotel industry in Portugal, starting with Vermelho hotel (meaning Red hotel in Portuguese) like his iconic red soles, that opened on April 1, 2023. Christian Louboutin opened 2 new hotel villas in Portugal's Alentejo: La Salvada and La Maison des Bateaux, that are an extension of Vermelho hotel, in July 2025. Louboutin is now planning to open a second boutique hotel in the same region in 2026, that will be called Vermelho Lagoa (meaning Red Lagoon).\n[…]\nThe first Louboutin Men's Boutique, Christian Louboutin Boutique Homme on Rue Jean-Jacques Rousseau in Paris, opened in the summer of 2012.\n[…]\nBlake Lively often wears Christian Louboutin shoes, highlighting her close relationship with the designer, who even named a shoe after her, the \"Blake\". She has been photographed wearing Louboutins at various red carpet events, premieres and fashion galas around the world.\n[…]\nIggy Azalea prominently references Christian Louboutin shoes in the opening line of her song \"Work\" (\"Walk a mile in these Louboutins…\"), highlighting their cultural significance and status as symbols of luxury and fashion.\n[…]\nDenardo, Maria (18 January 2012). \"Christian Louboutin Hires Priya Mohindra\". Daily Front Row. Archived from the original on 22 January 2012.\n[…]\nChristian Louboutin at FMD"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Christian_Louboutin",
        "situacao": "ok",
        "texto": "Christian Louboutin (Paris, 7 de janeiro de 1963) é um designer francês de calçados que lançou sua linha de sapatos principalmente femininos na França, em 1991. Sua marca registrada é a sola vermelha.\n[…]\nFascinado por sapatos desde criança, o designer usou como base de suas primeiras coleções rascunhos de infância feitos em seus cadernos de escola. Aos 15 anos, começou a criar sapatos para dançarinas. Na década de 1980, criou modelos para Christian Dior, Chanel e Yves Saint Laurent, mas desistiu da carreira e decidiu se tornar paisagista e colaborador da Vogue. Ele sentiu falta de desenhar sapatos e, anos mais tarde, se associou a amigos e abriu a primeira loja em 1992, na França.\n[…]\nDesde 1992, seus projetos têm incorporado as solas vermelhas laqueadas, que se tornaram sua assinatura. Em 27 de março de 2013, apresentou um pedido para os EUA de proteção à marca registrada deste exclusivo design vermelho. Em 2008, Louboutin conquistou a patente do solado vermelho, mas não a sua exclusividade.\n[…]\nEm abril de 2011, Christian Louboutin moveu uma ação contra a Yves Saint Laurent. O modelo do verão 2011 da YSL, reclamado por Louboutin, fazia parte de uma linha na qual as solas são da mesma cor dos sapatos: a versão verde ganha sola verde, a roxa, sola roxa, e a vermelha, sola vermelha.\n[…]\nEm agosto de 2011 Christian Louboutin sofreu uma derrota na justiça americana. O tribunal federal de Nova York indeferiu a ação, “levando em consideração o facto segundo o qual, na indústria da moda, a cor possui funções estéticas e ornamentais decisivas para alimentar a competição, (…) sendo difícil para Louboutin provar que o solado vermelho goze da proteção de uma determinada marca”.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Zuzu Angel",
      "descricao": "Estilista brasileira nascida em Curvelo, Minas Gerais, que denunciou a ditadura militar por meio da moda"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A estilista mineira Zuzu Angel levou às passarelas um protesto contra a ditadura militar depois do desaparecimento de quem?",
    "resposta": "Seu filho Stuart Angel",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Zuzu_Angel",
      "https://en.wikipedia.org/wiki/Zuzu_Angel"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Zuzu_Angel",
        "situacao": "ok",
        "texto": "Zuleika de Souza Netto OMC (Curvelo, 5 de junho de 1921 — Rio de Janeiro, 14 de abril de 1976), mais conhecida como Zuzu Angel, foi uma estilista brasileira.\n[…]\nPersonagem notória do Brasil da época da ditadura militar, ficou conhecida nacional e internacionalmente não apenas por seu trabalho inovador como estilista, mas também por sua procura pelo filho, Stuart Angel, assassinado pelo governo ditatorial militar e transformado em desaparecido político, enfrentando as autoridades da época.\n[…]\nEm 1940, Zuzu conheceu o americano Norman Angel Jones, quando estava visitando a casa de seus pais em Belo Horizonte. A partir dessa amizade, iniciou um relacionamento amoroso com ele, e se casou em 1943, voltando a viver em Belo Horizonte. Após dois anos morando na capital mineira, Zuzu e o marido mudaram-se para o Rio de Janeiro, e após seis meses, foram viver em Salvador, onde Zuzu engravidou e deu à luz seu primeiro filho, chamado Stuart Angel Jones, nascido em 1947.\n[…]\nNa virada dos anos 60 para os anos 70, Stuart Jones, filho de Zuzu e então estudante de economia, passou a integrar as organizações de esquerda que combatiam a ditadura militar no Brasil, instaurada em 1964, filiando-se ao MR-8, grupo guerrilheiro de ideologia socialista do Rio de Janeiro. Preso em 14 de maio de 1971, Stuart foi torturado e morto pelo Centro de Informações da Aeronáutica (CISA) no aeroporto do Galeão e dado como desaparecido pelas autoridades.\n[…]\nEm 2006, o cineasta Sérgio Rezende dirigiu Zuzu Angel, filme que retrata a vida da estilista, protagonizada por Patrícia Pillar.\n[…]\n«Instituto Zuzu Angel»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Zuzu_Angel",
        "situacao": "ok",
        "texto": "Zuleika Angel Jones (June 5, 1921 – April 14, 1976), better known as Zuzu Angel, was a Brazilian fashion designer, who became famous for opposing the Brazilian military dictatorship after the forced disappearance of her son, Stuart. She was also the mother of journalist Hildegard Angel.\n[…]\nAngel married an American salesman, Norman Angel Jones, and on January 11, 1946, they had three children, Hildegard, Ana Cristina and a son, Stuart.\n[…]\nStuart Angel was an undergraduate student at Federal University of Rio de Janeiro's School of Economics when he joined the left-wing urban guerrilla group Revolutionary Movement 8th October (Movimento Revolucionário 8 de Outubro – MR-8). He was known by his fellow guerrillas by the codenames \"Paulo\" and \"Henrique\". He married fellow militant Sônia Maria Morais Angel Jones, who later died in the custody of the military dictatorship's political police.\n[…]\nStuart Angel is the patron of Juventude Revolucionária 8 de Outubro, MR-8's youth branch. MR-8 is now a faction of the Brazilian Democratic Movement.\n[…]\nStuart's probable death by asphyxiation and carbon monoxide poisoning was referred in the lyrics of the song \"Cálice\", written by Chico Buarque and Gilberto Gil. In homage to Zuzu Angel, and other mothers who were unable to bury their children, Buarque wrote the song \"Angélica\" in 1977.\n[…]\nIn 2006, the events surrounding Stuart's death were dramatised in the film Zuzu Angel, directed by Sérgio Rezende. The movie, in which Daniel de Oliveira plays Stuart, is about Zuzu's struggle to find out the truth of her son's death.\n[…]\nIn 2015, Angel was commemorated on her 94th birthday with a Google Doodle featuring a motif adapted from the prints she used in her designs.\n[…]\nZuzu Angel Institute (in Portuguese)"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Meia de náilon",
      "descricao": "Meia feminina de náilon lançada nos Estados Unidos em 1940, alvo dos chamados tumultos do náilon"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Durante a Segunda Guerra, as meias de náilon sumiram das lojas americanas porque o material foi desviado para fabricar o quê?",
    "resposta": "Paraquedas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nylon_riots"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nylon_riots",
        "situacao": "ok",
        "texto": "The nylon riots were a series of disturbances at American stores created by a nylon stocking shortage.\n[…]\nThe riots occurred between August 1945 and March 1946, when the War Production Board announced that the creation of DuPont's nylon would shift its manufacturing from wartime material to nylon stockings, at the same time launching a promotional campaign. In one of the worst disturbances, in Pittsburgh, 40,000 women queued up for 13,000 pairs of stockings, which led to fights breaking out.\n[…]\nDuring World War II, embargoes against Japan resulted in the United States having difficulty importing silk from Japan. Eventually, the U.S. was unable to import any silk. So, DuPont thought of an idea to convince the army that nylon is a much more effective material than silk. DuPont succeeded in convincing the army, and nylon fabric became increasingly popular because of its elasticity, shrink-proof, and moth-proof material properties.\n[…]\nBecause nylon stockings were so widely sought-after, they also became a target of theft. In Louisiana, one household was robbed of 18 pairs of nylons. Similarly, robbery was ruled out as the motive of a murder in Chicago because the nylons were untouched.\n[…]\nFind a salesman with stockings to sell\n[…]\nThe shortage persisted into 1946, but by March, DuPont was finally able to ramp up production and began churning out 30 million pairs of stockings a month. Widespread availability of the stockings ended the period of 'nylon riots'.\n[…]\nNdiaye, Pap A. (trans. 2007). Nylon and Bombs: DuPont and the March of Modern America. Baltimore: Johns Hopkins University Press."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Vestido de noiva branco",
      "descricao": "Tradição ocidental de a noiva se casar vestida de branco"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O costume de a noiva se casar de branco se espalhou pelo Ocidente depois do casamento de qual rainha, em 1840?",
    "resposta": "Rainha Vitória",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wedding_dress_of_Queen_Victoria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wedding_dress_of_Queen_Victoria",
        "situacao": "ok",
        "texto": "Queen Victoria of the United Kingdom married Prince Albert of Saxe-Coburg and Gotha on 10 February 1840 in the Chapel Royal, St. James's Palace. She wore a white wedding dress made from heavy silk satin, which made her look more like a bride and less like a queen. The English-made Honiton lace used for her wedding dress proved an important boost to Devon lace-making. Queen Victoria is erroneously \n[…]\nThe actual wedding dress is now cream coloured, although Victoria recorded in her journal that her gown was white, as did the newspapers. Silk cocoon fibres are naturally various shades of off white, so the silk fabric has to be bleached, but it yellows over time.\n[…]\nWomen's court dress — including what debutantes wore when presented to the monarch — was traditionally white, and by 1840 white dresses were gaining popularity in the middle classes as well, especially in cotton.\n[…]\nAccording to Kate Strasdin, \"white and silver had become firmly associated with wedding attire for those who could afford it\" by the early 18th century, and by the mid 19th century they were increasingly popular in Europe, North American and the UK For example, in the US upper-middle-class Frances Todd wore a cream-coloured satin wedding dress on 21 May 1839, the same dress her sister Mary Todd wore when she married Abraham Lincoln on 4 November 1842.\n[…]\nWhile it was not uncommon as a dress colour in 1840, the colour white suggested wealth and status, even for middle-class wearers, because the world was sooty and white required constant maintenance, but it did not suggest royalty or sovereignty.\n[…]\nWhen Victoria died, she was buried with her wedding veil over her face. In 2012 it was reported that while the dress itself had been conserved and displayed at Kensington Palace that year, the surviving lace was now too fragile to move from storage.\n[…]\nBBC audio slideshow featuring her wedding dress"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Salto alto",
      "descricao": "Calçado com o calcanhar elevado em relação à ponta do pé"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os saltos altos surgiram nas botas de cavaleiros persas. Para que servia o salto nesses calçados?",
    "resposta": "Firmar os pés nos estribos",
    "fonte": [
      "https://en.wikipedia.org/wiki/High-heeled_shoe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/High-heeled_shoe",
        "situacao": "ok",
        "texto": "High-heeled shoes, also known as high heels (colloquially shortened to heels), are a type of shoe with an upward-angled sole. The heel in such shoes is raised above the ball of the foot. High heels cause the legs to appear longer, make the wearer appear taller, and accentuate the calf muscle.\n[…]\nWearing high-heeled shoes is associated with developing bunions, a deformity of the foot.\n[…]\nThe Philippines forbade companies from mandating that female employees wear high heels at work in September 2017.\n[…]\nFew dress codes require women to wear high heels, and some medical organizations have called for a ban on such dress codes. There have been many protests by women workers against such policies. Laws regarding dress codes that require women to wear high heels in the workplace vary.\n[…]\nA Mile in Her Shoes is a series of marches in which men wear red high heels and walk a mile to protest domestic violence. Some academics have suggested that by wearing high heels for such a brief period and making a point of acting like they do not know how to walk properly, these men reinforce the stereotype that only women can or should wear high heels.\n[…]\nHigh heels are also sometimes marketed to children, and some schools encourage children to wear them. 18% of injuries from wearing high heels were in children, and 4% in under-tens, in a 2002–2012 US survey. A 2016 medical review on high-heeled shoes expressed concern about children's use of high heels.\n[…]\nA modern style of dance called heels choreography or stiletto dance specializes in choreography that blends the styles of jazz, hip-hop, and burlesque with the fusion of vogue movements and is performed using stilettos or high heels. Dancers such as Yanis Marshall specialize in dancing with high heels.\n[…]\n\"How to Wear High Heels\". Cosmopolitan. 20 July 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salto-alto",
        "situacao": "ok",
        "texto": "Sapatos de salto alto (frequentemente abreviado como salto-alto ou apenas salto) é calçado que deixa o calcanhar do usuário significativamente mais elevado do que os dedos. Quando tanto o calcanhar quanto os dedos dos pés são levantados igualmente, como em um sapato plataforma [en], não é considerado um \"salto-alto\". Saltos-altos tendem a dar a ilusão de pernas mais longas e mais finas.\n[…]\nHoje, os saltos altos são tipicamente usados ​​por mulheres, com alturas variando de um salto gatinho de 1 ½ polegadas (4 cm) para um salto agulha (ou saltos-agulha) de 4 polegadas (10 cm) ou mais. Extremamente sapatos de salto alto, como os superiores a 5 polegadas (13 cm), normalmente são usados ​​apenas por razões estéticas e não são considerados práticos.\n[…]\nTribunal sapatos são estilos conservadores e, muitas vezes utilizados para o trabalho e ocasiões formais, enquanto estilos mais aventureiros são comuns para usar à noite e dançar. Saltos altos viram controvérsia significativa no campo médico, ultimamente, com podólogos vendo muitos pacientes cujos graves problemas pé ter sido causado quase exclusivamente pelo desgaste de salto alto.\n[…]\nA autora Elizabeth Semmelhack, do Bata Shoe Museum (Museu dos Sapatos), em Toronto, Canadá, declarou que os primeiros sapatos de salto alto foram criados para cavaleiros persas, com intuito de garantir uma melhor posição dos pés nos estribos durante as montadas. Foi no fim do século XVI que a cultura persa disseminou-se pela Europa, o que fez com que os saltos fossem vistos como sinais de virilidade.\n[…]\nSaltos de largura não necessariamente oferecem mais estabilidade, e qualquer calcanhar levantado com largura demais, como o encontrado em sapatos \"lâmina\" ou \"bloco de salto alto\", induz torque lado-a-lado insalubre aos tornozelos a cada passo, ressaltando desnecessariamente, ao criar impacto adicional sobre as bolas dos pés.\n[…]\nFetichismo de botas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Peruca",
      "descricao": "Cabeleira postiça usada como adorno ou para cobrir a calvície, moda na corte europeia dos séculos dezessete e dezoito"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A moda das perucas masculinas ganhou força na corte francesa quando o rei Luís treze passou a sofrer de quê?",
    "resposta": "Calvície precoce",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wig"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wig",
        "situacao": "ok",
        "texto": "A wig is a head covering made from human or animal hair, or a synthetic imitation thereof. The word is short for \"periwig\", derived from the French word perruque. Wigs may be worn to disguise baldness, to alter the wearer's appearance, or as part of certain professional uniforms.\n[…]\nDue to the association with ruling classes in European monarchies, the wearing of wigs as a symbol of social status was largely abandoned in the newly created republics, the United States and France, by the start of the 19th century, though formal court dress of European monarchies still required a powdered wig or long powdered hair tied in a queue until the accession of Napoleon Bonaparte (1769–1821) to the throne as emperor in 1804.\n[…]\nIn some parts of the countryside the wearing of wigs lasted well into the 19th century. In Saint-Gaudens in Southern France wigs were worn until the 1840s, while the German scholar Ferdinand Justi noted in his work on Hessian traditional costumes that as a child he had known an elderly farmer who wore a pigtail in the old Prussian military style.\n[…]\nDuring the late nineteenth and early twentieth century hairdressers in England and France did a brisk business supplying postiches, or pre-made small wiglets, curls, and false buns to be incorporated into the hairstyle. The use of postiches did not diminish even as women's hair grew shorter in the decade between 1910 and 1920, but they seem to have gone out of fashion during the 1920s. In the 1960s a new type of synthetic wig was developed using a modacrylic fiber which made wigs more affordable."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peruca",
        "situacao": "ok",
        "texto": "Peruca é um acessório usado na cabeça para simular cabelo natural. Antes procurada por pessoas que possuíam poucos fios, a peruca se tornou uma opção de mudança de visual nos dias de hoje, principalmente entre as celebridades.\n[…]\nEssa moda foi amplamente promovida por seu filho e sucessor Luís XIV da França (1638-1715), o que contribuiu para sua disseminação na Europa e nos países de influência europeia a partir da década de 1660. As perucas para homens foram introduzidas na Inglaterra, junto com outros estilos franceses, quando Carlos II se tornou rei em 1660, após um longo exílio na França.\n[…]\nEssas perucas eram na altura dos ombros ou mais longas, imitando o cabelo comprido que se tornou moda entre os homens desde a década de 1620, e seu uso logo se tornou popular na corte inglesa.\n[…]\nAs perucas precisavam ser limpas periodicamente, e o pó usado para amacia-las era feito de farinha de baixa qualidade e perfumado com pomadas. Alguns reis absolutistas, como o francês Luís XV, contavam com uma equipe de cerca de 40 profissionais.\n[…]\nAs mulheres no século 18 geralmente não usavam perucas, ao invés disso, era costume entre as mulheres de classe alta, usar apliques de cabelo postiço para dar o efeito de uma cabeleira volumosa. Todo esse cabelo era untado com pomada feita de gordura animal ou vegetal e aromatizada com perfume e em seguida o cabelo era pulverizado com pó de arroz ou farinha para dar uma coloração esbranquiçada.\n[…]\nAcredita-se que o uso das perucas entrou em declínio com a Revolução Francesa, ocorrida em 1789, que rompeu com vários costumes da antiga nobreza, inclusive o uso de peruca. Hoje em dia, a peruca ainda é utilizada em ocasiões formais, como nos tribunais criminais da Inglaterra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Doença do chapeleiro louco",
      "descricao": "Intoxicação crônica por mercúrio que afetava fabricantes de chapéus de feltro, também chamada eretismo"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Muitos chapeleiros do século dezenove sofriam de tremores e alterações de humor por causa de qual metal usado no preparo do feltro?",
    "resposta": "Mercúrio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Erethism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Erethism",
        "situacao": "ok",
        "texto": "Erethism, also known as erethismus mercurialis, mad hatter disease, or mad hatter syndrome, is a neurological disorder which affects the whole central nervous system, as well as a symptom complex, derived from mercury poisoning. Erethism is characterized by behavioral changes such as irritability, low self-confidence, depression, apathy, shyness and timidity, and in some extreme cases with prolong\n[…]\nThe experience of hatmakers in New Jersey is well documented and has been reviewed by Richard Wedeen. In 1860, at a time when the hatmaking industry in towns such as Newark, Orange and Bloomfield was growing rapidly, a physician from Orange called J. Addison Freeman published an article titled \"Mercurial Disease Among Hatters\" in the Transactions of the Medical Society of New Jersey.\n[…]\nIn 1878, an inspection of 25 firms around Newark conducted by Dr L. Dennis on behalf of the Essex County Medical Society revealed \"mercurial disease\" in 25% of 1,589 hatters. Dennis recognized that this prevalence figure was probably an underestimate, given the workers' fear of being fired if they admitted to being diseased.\n[…]\nTwo-thirds of the recorded deaths of hatters in Newark and Orange between 1873 and 1876 were caused by pulmonary disease, most often in men under 30 years of age, and elevated death rates from tuberculosis persisted into the twentieth century. Consequently, public health campaigns to prevent tuberculosis spreading from the hatters into the wider community tended to eclipse the issue of mercury poisoning. For instance, in 1886 J. W.\n[…]\nStickler, working on behalf of the New Jersey Board of Health, promoted prevention of tuberculosis among hatters, but deemed mercurialism \"uncommon\", despite having reported tremors in 15–50% of the workers he had surveyed.\n[…]\nDanbury Hatters' case\n[…]\nMinamata disease"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Bolso relojoeiro",
      "descricao": "Bolsinho costurado dentro do bolso dianteiro direito das calças jeans"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O bolsinho que fica dentro do bolso dianteiro direito da calça jeans foi criado originalmente para guardar o quê?",
    "resposta": "Relógio de bolso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pocket",
      "https://en.wikipedia.org/wiki/Jeans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pocket",
        "situacao": "ok",
        "texto": "A pocket is a small bag- or envelope-shaped compartment that is either sewn into or attached to clothing, designed for carrying small items. Pockets are also found on luggage, backpacks, and similar containers. Historically, the term could also refer to a separate pouch or small bag.\n[…]\nA watch pocket or fob pocket is a small compartment, originally for holding a pocket watch.\n[…]\nFob pockets can feature in men's trousers, waistcoats, and traditional blue jeans. With the decline in pocket-watch use, people have often repurposed these pockets for other small items.\n[…]\nA besom pocket (or slit pocket) is set into the garment rather than sewn on top. The pocket opening is reinforced—often with an extra strip of fabric or decorative stitching—and may be secured with a flap or button. Besom pockets are common on tuxedo jackets and trousers.\n[…]\nCamp pockets (or cargo pockets) are sewn onto the outside of the garment; they are typically square or rectangular with visible seams. They are common on utilitarian clothing and outdoor gear.\n[…]\nA beer pocket is a small compartment within a jacket or vest – sized to hold a bottle of beer. It was popular in some areas of the American Midwest during the 1910s, before Prohibition (1920 to 1933) caused it to fade from fashion. The style saw minor revivals in the 1980s and early 2000s.\n[…]\nPocket square\n[…]\nCarlson, Hannah (2023). Pockets: An Intimate History of How We Keep Things Close. New York: Algonquin Books. ISBN 978-1643751542.\n[…]\n\"Pockets\". Fashion & Jewellery Features. Victoria and Albert Museum. Archived from the original on 2007-10-27. Retrieved 2009-11-17.\n[…]\nDifferent Types of Pocket\n[…]\nBBC - h2g2 - A Very Brief History of the Pocket\n[…]\n18th Century Women's Pockets\n[…]\nPockets at the V&A\n[…]\nA History of Pockets, Victoria and Albert Museum\n[…]\nPockets of History"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jeans",
        "situacao": "ok",
        "texto": "Jeans are a type of trousers made from denim or dungaree cloth. Often the term \"jeans\" refers to a particular style of trousers, called \"blue jeans\", with the addition of copper pocket rivets added by Jacob W. Davis in 1871 and patented by Davis and Levi Strauss on May 20, 1873. Prior to the patent, the term \"blue jeans\" had been long in use for various items of workwear (including trousers, overa\n[…]\nOriginally these trousers were designed as attire for manual workers such as miners for whom rivets were added to strengthen pocket seams in the United States, these modern riveted blues jeans as a fashion item were popularized as casual wear by Marlon Brando and James Dean in their 1950s films, particularly The Wild One and Rebel Without a Cause, leading to the fabric becoming a symbol of rebellion among teenagers, especially members of the greaser subculture.\n[…]\nThe small riveted watch pocket was first added by Levi Strauss to their jeans in the late 1870s.\n[…]\nIn 1901, Levi Strauss added the back left pocket to their 501 model. This created the now familiar and industry-standard five-pocket configuration with two large pockets and small watch pocket in front with two pockets on the rear.\n[…]\nAcceptance of jeans continued through the 1980s and 1990s. Originally a utilitarian garment, jeans became a common fashion choice in the second half of the 20th century.\n[…]\nIn 2001, Japanese fashion designer Chuck Roaste secured a United States utility patent for a reversible jeans construction concept he had been developing since 1998. Produced under the Chuck Roaste label, the design incorporated functional, fully reversible construction elements, including pockets, fly, seams, fasteners, and other structural details that enabled the garments to be worn inside out.\n[…]\nBaggy jeans\n[…]\nDesigner jeans\n[…]\nDrainpipe jeans\n[…]\nMom jeans\n[…]\nRiveted: The History of Jeans at PBS's American Experience"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bolso",
        "situacao": "ok",
        "texto": "Bolso é um compartimento costurado ou incorporado a uma peça de vestuário, destinado ao transporte e armazenamento de pequenos objetos pessoais, como moedas, documentos, chaves ou dispositivos portáteis. Pode ser embutido na estrutura da roupa ou aplicado externamente, exercendo funções utilitárias, estéticas e simbólicas no design do vestuário.\n[…]\nA palavra “bolso” deriva de “bolsa”, que tem origem no latim bursa, por sua vez proveniente do grego antigo βύρσα (byrsa), que significa “pele” ou “odre”. O termo inglês pocket deriva do francês antigo poke ou poque, diminutivo de saco.\n[…]\nA consolidação do vestuário utilitário industrial ampliou a variedade de bolsos especializados. O pequeno bolso frontal do jeans, conhecido como watch pocket, foi originalmente criado para relógios de bolso.\n[…]\nDiversos modelos de bolso foram desenvolvidos ao longo da história do vestuário, variando conforme função, contexto social e técnica de alfaiataria:\n[…]\nBolso aplicado (patch pocket) — costurado externamente sobre o tecido principal.\n[…]\nBolso embutido (welt pocket) — integrado à costura da peça, comum em alfaiataria formal.\n[…]\nBolso faca — abertura lateral inclinada, comum em calças sociais.\n[…]\nBolso cargo — bolso externo volumoso, frequentemente com aba e fechamento.\n[…]\nBolso canguru — bolso frontal único com duas aberturas laterais.\n[…]\nBolso relógio (watch pocket) — pequeno bolso adicional introduzido no século XIX.\n[…]\nBolso com aba (flap pocket) — bolso embutido protegido por aba externa.\n[…]\nBolso de remendo interno — aplicado na parte interna da peça.\n[…]\nBolso envelope — abertura simples sem reforço estrutural.\n[…]\nJeans",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Gibão de couro",
      "descricao": "Casaco de couro usado pelo vaqueiro do sertão nordestino, junto com perneiras e chapéu de couro"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que os vaqueiros do sertão nordestino vestem gibão, perneiras e chapéu, tudo de couro?",
    "resposta": "Proteger-se dos espinhos da caatinga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vaqueiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vaqueiro",
        "situacao": "ok",
        "texto": "Vaqueiro (em castelhano:  vaquero) ou peão (em castelhano:  peón) é um pastor de gado montado a cavalo de uma tradição que tem suas raízes na Península Ibérica e extensivamente desenvolvido no México a partir de uma metodologia trazida da Espanha para a América Latina. O vaqueiro tornou-se a base do cowboy estadunidense. Os vaqueiros das Américas eram os cavaleiros e pastores de gado da Nova Espan\n[…]\nA palavra vaqueiro deriva da palavra vaca, que por sua vez vem da palavra latina vacca.\n[…]\nA necessidade de percorrer distâncias maiores do que uma pessoa a pé poderia fazer deu origem ao desenvolvimento do vaqueiro montado a cavalo. Durante o século XVI, os conquistadores e outros colonos espanhóis trouxeram suas tradições de criação de gado, bem como cavalos e gado domesticado para as Américas, começando com sua chegada ao que hoje é o México e a Flórida.\n[…]\nNo Nordeste do Brasil, a criação de gado chega no governo de Tomé de Sousa durante o período colonial, primeiramente em Salvador, na Bahia. Até o século XVII o gado era criados dentro dos próprios engenhos de cana de açúcar, mas a pecuária extensiva logo se desenvolveu e o gado criado solto começou a se multiplicar e a destruir s plantações de cana-de-açúcar, o que faz com que a coroa portuguesa decida no século XVIII a proibir a criação de gado a menos de 70 quilômetros do litoral.\n[…]\nA partir da imposição dessa legislação que o processo de interiorização do gado começa a tomar forma rumo ao Agreste e Sertão nordestino, o que culmina na criação de fazendas administradas por vaqueiro, que geralmente eram índios e mestiços.\n[…]\nMedia relacionados com Vaqueiro no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Pretinho básico",
      "descricao": "Vestido preto curto e simples popularizado por Coco Chanel nos anos 1920"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1926, a revista Vogue comparou o vestido preto simples de Chanel a qual automóvel, por ser acessível a todos?",
    "resposta": "Ford Modelo T",
    "fonte": [
      "https://en.wikipedia.org/wiki/Little_black_dress"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Little_black_dress",
        "situacao": "ok",
        "texto": "The little black dress (LBD) is a black evening or cocktail dress, cut simply and often short. Fashion historians ascribe the origins of the little black dress to the 1920s designs of Coco Chanel. It is intended to be long-lasting, versatile, affordable, and widely accessible. Its ubiquity is such that it is often simply referred to as the \"LBD\".\n[…]\nIn 1926 Coco Chanel published a picture of a short, simple black dress in American Vogue. It was calf-length, straight and decorated only by a few diagonal lines. Vogue called it \"Chanel's Ford\". Like the Model T, the little black dress was simple and accessible for women of all social classes. Vogue also said that the LBD would become \"a sort of uniform for all women of taste\".\n[…]\nThe popularity of casual fabrics, especially knits, for dress and business wear during the 1980s brought the little black dress back into vogue. Coupled with the fitness craze, the new designs incorporated details already popular at the time such as broad shoulders or peplums: later in the decade and into the 1990s, simpler designs in a variety of lengths and fullness were popular.\n[…]\nThe grunge culture of the 1990s saw the combination of the little black dress with both sandals and combat boots, though the dress itself remained simple in cut and fabric.\n[…]\nBy 2014, a retrospective of Chanel's work at the Kunstmuseum in The Hague could say that the little black dress is \"part of today’s universal fashion vocabulary.\"\n[…]\nEdelman, Amy Holman (1998). The Little Black Dress. Aurum. ISBN 1-85410-604-X.\n[…]\n\"Little Black Dress Transcends Fashion\". About.com. May 2006.\n[…]\n\"The Little Black Dress\". Woman's Hour Radio. BBC Radio 4. May 2006.\n[…]\n\"The Myth of the Little Black Dress\". Jane Curtain. The Fashion Culte Magazine. November 2014.\n[…]\nMedia related to Little black dresses at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Balaclava",
      "descricao": "Gorro de lã que cobre a cabeça e o pescoço, deixando só o rosto ou os olhos de fora"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O casaco cardigã e o gorro balaclava têm nomes ligados a qual guerra do século dezenove?",
    "resposta": "Guerra da Crimeia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Balaclava_(clothing)",
      "https://en.wikipedia.org/wiki/Cardigan_(sweater)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Balaclava_(clothing)",
        "situacao": "ok",
        "texto": "A balaclava, also called a  ski mask  or a  racing mask, is a piece of cloth headgear designed to expose only part of the face, usually the eyes and mouth. Depending on style and how it is worn, only the eyes, mouth and nose, or just the front of the face are unprotected. Versions with enough of a full face opening may be rolled into a hat to cover the crown of the head or folded down as a collar \n[…]\nThin Balaclavas can be used under motorcycle, snowmobile, ski, and snowboard helmets for warmth in cool or winter conditions.\n[…]\nIn December 2006, the United States Marine Corps began issuing balaclavas with hinged face guards as part of the Flame Resistant Organizational Gear program.\n[…]\nIn the Soviet Union, the balaclava became a part of standard OMON (special police task force) uniform as early as the Perestroyka years of the late 1980s. The original intent was to protect the identity of the officers to avoid intimidation from Russian organized crime. Because of increased problems with organized crime of the 1990s, TV shots of armed men in black balaclavas became common.\n[…]\nArmed Russian police commonly conduct raids and searches of white-collar premises (typically in Moscow) while wearing balaclavas. Such raids have therefore come to be known in Russia as \"maski shows\", an allusion to a popular comic TV show of the 1990s.\n[…]\nBalaclavas are often used by police battling drug cartels and gangs in Latin America to conceal their identity and protect their families.\n[…]\nKnitted balaclavas were featured in some collections at the 2018 New York Fashion Week.\n[…]\nBalaclavas gained newfound popularity as a fashion accessory in the United States, and Europe, during the early 2020s.\n[…]\n\"Ski mask\" toque—Canadian English; also commonly worn when using snowmobiles; typically a three-hole balaclava with generous neck tube for maximal wind protection\n[…]\nMedia related to Balaclavas at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cardigan_(sweater)",
        "situacao": "ok",
        "texto": "A cardigan is a type of knitted garment that has an open front and is worn like a jacket.\n[…]\nThe cardigan was named after James Brudenell, 7th Earl of Cardigan, a British Army major general who led the Charge of the Light Brigade at the Battle of Balaclava during the Crimean War. It is modelled after the knitted wool waistcoat that British officers supposedly wore during the war.\n[…]\nThe term originally referred only to a knitted sleeveless vest, but later it expanded to include other types of garment. Coco Chanel is credited with popularizing cardigans for women because \"she hated how tight-necked men's sweaters messed up her hair when she pulled them over her head.\" The garment is mostly associated with the college culture of the Roaring Twenties and early 1930s, being also popular throughout the 1950s, 1970s, 1990s, 2000s and into the early 2010s.\n[…]\nPlain cardigans are often worn over shirts and inside suit jackets as a less formal version of the waistcoat or vest that restrains the necktie when the jacket has been removed. They are versatile and can be worn in casual or formal settings and in any season, but they are most often worn in cool weather.\n[…]\nThe monochromatic cardigan, in sleeved or vest form, is a conservative fashion staple. As an item of formal clothing for any gender, it may be worn over a dress shirt. Less formally, it may be worn over a T-shirt.\n[…]\nVarsity letters for college and high school sports teams have been applied to cardigans and letterman jackets.\n[…]\nMedia related to Cardigan (sweater) at Wikimedia Commons\n[…]\nMedia related to Cardigans at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Balaclava",
        "situacao": "ok",
        "texto": "Balaclava é um gorro confeccionado normalmente com malha de lã (misturada com tecidos elásticos) que se veste de forma ajustada na cabeça até o pescoço. Sua função tradicional é a proteção contra o frio.\n[…]\nA balaclava é também popularmente nomeada \"gorro ninja\" ou \"touca ninja\" no Brasil, \"passa-montanhas\" em Portugal, e ski mask (\"máscara de esqui\") na anglofonia.\n[…]\nO nome \"balaclava\" tem origem na localidade de Balaclava, na Crimeia (Ucrânia). Durante a Guerra da Crimeia, gorros tricotados eram enviados a tropas britânicas para protegê-las do frio extremo da região. Atualmente, esses gorros são usados por alpinistas, esquiadores e pilotos de corrida, como proteção, mas também são utilizados por  policiais com o fim de ocultação da identidade de seus portadores.\n[…]\nMedia relacionados com Balaclava no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Manga raglan",
      "descricao": "Manga que se estende em peça única até a gola, batizada em homenagem a Lorde Raglan"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A manga raglan e a bota wellington levam nomes de militares britânicos que lutaram em qual batalha famosa?",
    "resposta": "Batalha de Waterloo",
    "fonte": [
      "https://en.wikipedia.org/wiki/FitzRoy_Somerset,_1st_Baron_Raglan",
      "https://en.wikipedia.org/wiki/Wellington_boot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/FitzRoy_Somerset,_1st_Baron_Raglan",
        "situacao": "ok",
        "texto": "Field Marshal FitzRoy James Henry Somerset, 1st Baron Raglan (30 September 1788 – 28 June 1855), known before 1852 as Lord FitzRoy Somerset, was a British Army officer. When a junior officer, he served in the Peninsular War and the Waterloo campaign, latterly as military secretary to the Duke of Wellington. He also took part in politics as Tory Member of Parliament for Truro, before becoming Maste\n[…]\nSomerset also saw action during the Hundred Days: he served on Wellington's staff at the Battle of Quatre Bras on 16 June 1815 and at the Battle of Waterloo two days later where he had to have his right arm amputated (and then demanded his arm back so he could retrieve the ring that his wife had given him). Faced with the difficulties in dressing following the amputation, he invented the so-called Raglan sleeve, sewn from the collar rather than the shoulder.\n[…]\nSomerset was elected Tory Member of Parliament for Truro in 1818 and became Wellington's secretary in the latter's new capacity as Master-General of the Ordnance in 1819. Somerset lost his seat at the general election in 1820 but, having been promoted to major-general on 27 May 1825, regained his seat in Parliament in 1826. Following Wellington's appointment as Commander-in-Chief of the Forces in January 1827 Somerset became Military Secretary in August 1827.\n[…]\nRaglan was portrayed by John Gielgud in the film The Charge of the Light Brigade (1968). Lord Raglan is a character in George MacDonald Fraser's novel Flashman at the Charge, in which he is described as a kindly, but ineffectual man, and completely unsuited for his command.\n[…]\nRaglan sleeve\n[…]\nHibbert, Christopher (1999). The Destruction of Lord Raglan. Wordsworth Editions. ISBN 978-1840222098.\n[…]\nChisholm, Hugh, ed. (1911). \"Raglan, Fitzroy James Henry Somerset, 1st Baron\" . Encyclopædia Britannica (11th ed.). Cambridge University Press."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wellington_boot",
        "situacao": "ok",
        "texto": "A Wellington boot, gumboot, rubber boot, rain boot, rainboot, or welly for short, is a type of waterproof boot made of rubber.\n[…]\nOriginally a type of leather riding boot adapted from Hessian boots, a style of military footwear, Wellington boots were worn and popularised by the Anglo-Irish military officer and politician Arthur Wellesley, 1st Duke of Wellington. They became a staple of practical footwear for the British aristocracy and the British middle class in the early 19th century. The term was subsequently applied to waterproof rubber boots ubiquitously worn today in a range of agricultural and outdoors pursuits.\n[…]\nIn a country where 95% of the population were working on fields with wooden clogs as they had been for generations, the introduction of the wholly waterproof, Wellington-type rubber boot became an instant success: farmers would be able to come back home with clean, dry feet.\n[…]\nWellington boots in contemporary usage are waterproof and are most often made from rubber or polyvinyl chloride (PVC), a halogenated polymer. They are usually worn when walking on wet or muddy ground, or to protect the wearer from heavy showers and puddles.\n[…]\nGebhard Leberecht von Blücher was Wellington's colleague at the Battle of Waterloo and there is speculation that some early emigrants to Australia, remembering the battle, may have confused a different design the Blucher shoe developed by Blucher. The Australian poet Henry Lawson wrote a poem to a pair of Blucher Boots in 1890.\n[…]\nWilliam's Wish Wellingtons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/FitzRoy_Somerset%2C_1.%C2%BA_Bar%C3%A3o_Raglan",
        "situacao": "ok",
        "texto": "O marechal de campo FitzRoy James Henry Somerset, 1.º Barão Raglan, GCB, PC (Badminton, Inglaterra, 30 de setembro de 1788 - Crimeia, Império Russo, 28 de junho de 1855), conhecido antes de 1852 como Lord FitzRoy Somerset, foi um militar britânico. Foi ferido na Batalha de Waterloo, tendo-lhe sido amputado um braço. Foi o primeiro comandante-chefe britânico na Guerra da Crimeia (1854). Durante as \n[…]\nFoi duramente criticado pelas suas estratégias durante a Batalha de Balaclava.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Puma",
      "descricao": "Marca alemã de calçados e roupas esportivas fundada por Rudolf Dassler"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Os fundadores das marcas esportivas alemãs Adidas e Puma tinham que parentesco?",
    "resposta": "Eram irmãos",
    "distratores": [
      "Pai e filho",
      "Primos",
      "Tio e sobrinho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rudolf_Dassler",
      "https://en.wikipedia.org/wiki/Puma_(brand)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rudolf_Dassler",
        "situacao": "ok",
        "texto": "Rudolf \"Rudi\" Dassler (26 March 1898 – 27 October 1974) was a German cobbler, inventor and businessman who founded the sportswear company Puma.\n[…]\nBorn on 26 March 1898 in Herzogenaurach, Rudolf was the older brother of Adidas founder Adolf \"Adi\" Dassler. The brothers were partners in a shoe company Adolf started, Gebrüder Dassler Schuhfabrik (\"Dassler Brothers Shoe Factory\"). Rudolf joined in 1924. However, after a feud developed between them following World War II, the brothers went separate ways and started their respective companies in 1948.\n[…]\nInitially calling the new company \"Ruda\" (a portmanteau for Rudolf Dassler), it was soon changed to its present name of Puma. Puma is the Quechua word for cougar; from there, it went into German as well as other languages.\n[…]\nUnder his direction, Puma remained a small provincial company. Only under the direction of his son, Armin Dassler, did it become the worldwide known company it remains today."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Puma_(brand)",
        "situacao": "ok",
        "texto": "Puma SE is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear manufacturer in the world.\n[…]\nA few months before the 1970 FIFA World Cup, Armin Dassler (Rudolf's son) of Puma and his cousin Horst Dassler (Adi's son) of Adidas signed \"the Pelé Pact\", an agreement that neither company would contract with Pelé, the world's most famous athlete. The companies reasoned that a bidding war for Pelé would be too expensive. Puma soon broke the pact and signed him.\n[…]\nIn April 2025, Puma announced that CEO Arne Freundt would step down due to differing views on strategy with the supervisory board. He is to be succeeded by Arthur Hoeld, a former Adidas executive, effective 1 July 2025.\n[…]\nPuma ranks as one of the top shoe brands with Adidas and Nike, and employs more than 18,000 people worldwide. The company has corporate offices around the world, including four defined as \"central hubs\": Assembly Row, Somerville, Massachusetts; Hong Kong; Ho Chi Minh City, Vietnam; and global headquarters in Herzogenaurach, Germany.\n[…]\nAccording to a joint report from Labour Behind the Label and Community Legal Education Centre, 30 workers fainted in November 2012 while producing clothing for Puma in China. The faintings were caused by excessive heat and alleged forced overtime. In 2014, almost 120 workers fainted in two Cambodian clothing factories where sportswear was being produced for Puma and Adidas, due to temperatures above 100 degrees Fahrenheit (38 °C).\n[…]\nIn March 2017, 150 workers assembling Puma products in Cambodia fainted due to thick smoke.\n[…]\nSabel v Puma, a CJEU case on trade marks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rudolf_Dassler",
        "situacao": "ok",
        "texto": "Rudolf Dassler (Herzogenaurach, 26 de março de 1896 — Herzogenaurach, 27 de outubro de 1974) foi o fundador da marca esportiva Puma AG, irmão do fundador da marca Adidas, Adolf Dassler. Os dois tornaram-se rivais desde cedo, devido à competição entre suas indústrias.\n[…]\nTendo inicialmente nomeado a sua empresa como \"Ruda\" (Rudolf Dassler), depois mudou o nome da mesma para Puma, que se mantém até hoje.\n[…]\nSob a sua direção, a Puma permaneceu como uma companhia pequena, provincial. Foi sob a direção de seu filho, Armin Dassler, que a empresa tornou-se mundialmente conhecida na atualidade.\n[…]\nAté hoje Adidas e Puma são rivais.\n[…]\nPuma SE",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Lycra",
      "descricao": "Fibra sintética elástica, também chamada elastano ou spandex"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A fibra elástica lycra e o náilon foram criados nos laboratórios da mesma empresa química americana. Qual?",
    "resposta": "DuPont",
    "fonte": [
      "https://en.wikipedia.org/wiki/Spandex",
      "https://en.wikipedia.org/wiki/Nylon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spandex",
        "situacao": "ok",
        "texto": "Spandex, Lycra, or elastane is a synthetic fiber known for its exceptional elasticity. It is a polyether-polyurethane copolymer that was invented in 1958 by chemist Joseph Shivers at DuPont.\n[…]\nThe name spandex, which is an anagram of the word \"expands\", is the preferred name in North America. In continental Europe, it is referred to by variants of elastane. It is primarily known as Lycra in the UK, Ireland, Portugal, Spain, Latin America, Australia, and New Zealand.\n[…]\nBrand names for spandex include Lycra (made by The Lycra Company, previously a division of DuPont Textiles and Interiors), Elaspan (The Lycra Company), Acepora (Taekwang Group), Creora (Hyosung), INVIYA (Indorama Corporation), ROICA and Dorlastan (Asahi Kasei), Linel (Fillattice), and ESPA (Toyobo).\n[…]\nTo distinguish its brand of spandex fiber, DuPont chose the trade name Lycra (originally called Fiber K). DuPont launched an extensive publicity campaign for its Lycra brand, taking advertisements and full-page ads in top women's magazines. Audrey Hepburn helped catapult the brand on and off-screen during this time; models and actresses like Joan Collins and Ann-Margret followed Hepburn's aesthetic by posing in Lycra clothing for photo shoots and magazine covers.\n[…]\nBy the 1980s, the fitness trend had reached its height in popularity and fashionistas began wearing shorts on the street. Spandex proved such a popular fiber in the garment industry that, by 1987, DuPont had trouble meeting worldwide demand. In the 1990s a variety of other items made with spandex proved popular, including a successful line of body-shaping foundation garments sold under the trade name Bodyslimmers."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nylon",
        "situacao": "ok",
        "texto": "Nylon is a family of synthetic polymers characterized by amide linkages, typically connecting aliphatic or semi-aromatic groups.\n[…]\nIt had all the desired properties of elasticity and strength. However, it also required a complex manufacturing process that would become the basis of industrial production in the future. DuPont obtained a patent for the polymer in September 1938, and quickly achieved a monopoly of the fiber. Carothers died 16 months before the announcement of nylon, therefore he was never able to see his success.\n[…]\nDuPont's Fabric Development Department cleverly targeted French fashion designers, supplying them with fabric samples. In 1955, designers such as Coco Chanel, Jean Patou, and Christian Dior showed gowns created with DuPont fibers, and fashion photographer Horst P. Horst was hired to document their use of DuPont fabrics. American Fabrics credited blends with providing \"creative possibilities and new ideas for fashions which had been hitherto undreamed of.\"\n[…]\nWallace Carothers at DuPont patented nylon 66.\n[…]\nPA66 DuPont Zytel\n[…]\nPA6/66 DuPont Zytel\n[…]\nPA6I/6T DuPont Selar PA\n[…]\nPA66/6T DuPont Zytel HTN\n[…]\nCordura – Brand of high-performance fabrics developed by DuPont and now owned by Invista\n[…]\nJoseph X. Labovsky Collection of Nylon Photographs and Ephemera Science History Institute Digital Collections. (High-resolution scans of nylon-related photographs and ephemera collected by Joseph X. Labovsky, a lab assistant to Wallace Carothers, during the early stages of nylon development and production at DuPont)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Elastano",
        "situacao": "ok",
        "texto": "Elastano, licra ou laicra (da marca registada Lycra) é uma fibra sintética de elevada elasticidade, obtida através de etano. Trata-se uma fibra muito utilizada na confecção de calças, meias-calças,  maiôs(pt-BR) ou fato de banho(pt-PT?), sungas, cintas e biquínis.\n[…]\nHá a versão essencialmente pura, sem adição de poliamida, que é denominada de laicra comercial ou industrial. É mais forte e duradora que a borracha (o seu principal concorrente) e foi inventada em 1959 por Joseph Shivers, da DuPont.\n[…]\nElastano é uma fibra sintética formada no mínimo por 85% de poliuretano segmentado.\n[…]\nExistem dois processos básicos de produção de elastano: wet-spun (por coagulação do extrudado) e dry-spun (secagem do extrudado). Atualmente, produz-se mais de 90% do elastano pelo método dry-spun. Há também os elastanos base poliéster, onde o polietileno-glicol é substituído por um poliéster-poliol, mas hoje a sua participação não é significativa na capacidade total instalada. Depois adicionam-se extensores de cadeia para atingir o grau de polimerização desejado.\n[…]\nLeve (mesma força de retração com título mais baixo que a borracha);\n[…]\nMaior resistência a produtos químicos que a borracha\n[…]\nfitas elásticas para roupa íntima",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Havaianas",
      "descricao": "Marca brasileira de sandálias de borracha lançada em 1962"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "As sandálias Havaianas, lançadas em 1962, foram inspiradas em qual calçado tradicional japonês?",
    "resposta": "Zori",
    "fonte": [
      "https://en.wikipedia.org/wiki/Havaianas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Havaianas",
        "situacao": "ok",
        "texto": "Havaianas (stylized in all lowercase) is a Brazilian brand of flip-flop sandals created and patented in 1962. The brand was founded by Brazilian manufacturer Alpargatas S.A.\n[…]\nInspired by the hybrid Hawaiian and Japanese zori sandals popularized in Hawaii, there are claims that Havaianas were the first mass-produced flip-flops made out of rubber, but this claim is false, the first mass-produced flip-flops made of rubber, were produced in Hawaii in the late 1920’s or early 1930’s and is possibly where the creators of the Havaiana brand got the idea.\n[…]\nThe popularity of Havaianas is generalized in Brazil and the brand controls 80% of the Brazilian rubber slippers market. The brand was featured in promotional campaigns with celebrities such as Jennifer Aniston, Kelly Slater, and in  haute couture runways of fashion designers such as Jean Paul Gaultier, Saint Laurent, and Dion Lee. They are among the most sold rubber flip-flop sandals in the world, with about 200 million pairs sold every year in over 100 countries.\n[…]\nThe hallmark of Havaianas's success is innovation. Creative styles with various colors were manufactured in addition to closed-toed sandals for customers who live in cooler climates. Sandals with embellishments, like Swarovski crystals were also integrated in the new styles to be used for fashion shows and to be worn by models on runways. Another necessity was to invest greatly in sales and advertising of the shoes.\n[…]\nThe usage of these techniques has reached people from all classes and from different areas across the globe. Millions of people wear Havaianas, whether it be in the form of flip-flops, apparel, or accessories."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Havaianas",
        "situacao": "ok",
        "texto": "Havaianas é uma marca brasileira de sandálias de borracha produzidas pela Alpargatas, uma empresa da Itaúsa, proprietária de empresas como Itaú Unibanco e Dexco. A marca, que possui participação de 80% no mercado brasileiro de chinelos de borracha, comercializa cerca de 210 milhões de sandálias anualmente, dos quais 10% para mais de 100 países dos cinco continentes, podendo ser encontrada em mais \n[…]\nA ideia para o produto foi inspirada nas Zori, sandálias japonesas feitas de palha de arroz ou madeira lascada e que são usadas com os quimonos. Em 8 de junho de 1962, foram lançadas as sandálias brasileiras feitas de borracha. O primeiro modelo é o mais tradicional: branco com tiras e laterais da base azuis. Não possuíam um atrativo visual, porém, eram demasiado baratas. Com o fator preço favorecendo o mercado, em menos de um ano a Vespasiano produzia mais de 13 mil pares por dia.\n[…]\nApós o sucesso da Sky, foram criados novos modelos como, por exemplo, a Havaianas Olimpic, lançada durante as Olimpíadas de Atlanta. Desde a seu aparecimento, as Havaianas evoluíram dos modelos simples de chinelo de enfiar no dedo, que continuam a ser um sucesso de vendas, para designs mais elaborados com aplicações e formatos variados. Foi lançado um modelo que inclui um salto alto.\n[…]\nEm 1997, foi criado o departamento de comércio exterior das Havaianas com o objetivo de aumentar a exportação do produto. A primeira etapa foi a reorganização de toda a rede de distribuidores. Alguns eventos ocorreram para a divulgação da marca como na França, em 2004, em que as sandálias coloridas tipicamente brasileiras venderam três mil pares.\n[…]\nNos últimos anos, o lucro gerado pela exportação das Havaianas quadruplicou e os países que mais compram são Austrália e Filipinas.[carece de fontes]?\n[…]\nZōri\n[…]\nHavaianas no Facebook\n[…]\nHavaianas no X\n[…]\nHavaianas no YouTube\n[…]\nHavaianas no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Carmen Miranda",
      "descricao": "Cantora e atriz luso-brasileira famosa pelos turbantes de frutas em Hollywood"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O figurino de turbante, saia rodada e balangandãs que consagrou Carmen Miranda foi inspirado nas roupas de quem?",
    "resposta": "Das baianas quituteiras",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carmen_Miranda",
      "https://pt.wikipedia.org/wiki/Carmen_Miranda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carmen_Miranda",
        "situacao": "ok",
        "texto": "Maria do Carmo Miranda da Cunha (9 February 1909 – 5 August 1955), known professionally as Carmen Miranda (Portuguese pronunciation: [ˈkaʁmẽj miˈɾɐ̃dɐ]), was a Portuguese-born Brazilian singer, dancer, and actress. Nicknamed \"the Brazilian Bombshell,\" she was known for her signature fruit hat outfits that she wore in her American films.\n[…]\nAfter Copacabana, Joe Pasternak invited Miranda to make two Technicolor musicals for Metro-Goldwyn-Mayer: A Date with Judy (1948) and Nancy Goes to Rio (1950). In the first production MGM wanted to portray a different image, allowing her to remove her turban and reveal her own hair (styled by Sydney Guilaroff) and makeup (by Jack Dawn). Miranda's wardrobe for the film substituted elegant dresses and hats designed by Helen Rose for \"baiana\" outfits.\n[…]\nAlthough she was more popular abroad than in Brazil at the time of her death, Miranda contributed significantly to Brazilian music and culture. She was accused of commercializing Brazilian music and dance, but she can be credited with bringing the country's national music (samba) to a global audience. She introduced the baiana—a traditional style of dress from Bahia, with wide skirts and turbans—as a Brazilian showgirl look, both at home and abroad.\n[…]\nThe baiana became a central feature of Carnival for both women and men.\n[…]\nIn 2007, BBC Four produced Carmen Miranda – Beneath the Tutti Frutti Hat, a one-hour documentary which included interviews with biographer Ruy Castro, niece Carminha and Mickey Rooney. That year, singer Ivete Sangalo recorded a cover version of the song \"Chica Chica Boom Chic\" for the DVD MTV ao Vivo. For Miranda's centenary, Daniela Mercury recorded a \"duet\" with the singer on a cover of \"O Que É Que A Baiana Tem?\", which includes the original 1939 recording.\n[…]\nMuseu Carmen Miranda, Rio de Janeiro\n[…]\nCarmen Miranda at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carmen_Miranda",
        "situacao": "ok",
        "texto": "Maria do Carmo Miranda da Cunha (Marco de Canaveses, 9 de fevereiro de 1909 – Beverly Hills, 5 de agosto de 1955), mais conhecida como Carmen Miranda, foi uma cantora, dançarina, e atriz luso-brasileira. Sua carreira artística transcorreu no Brasil e nos Estados Unidos entre as décadas de 1930 e 1950. Trabalhou no rádio, no teatro de revista, no cinema e na televisão.\n[…]\nDe acordo com a letra da música, Carmen apareceria vestindo o traje de \"baiana\", e foi esta versão estilizada de seu figurino que instaurou o estilo que a consagrou no mundo todo.\n[…]\n1999 - \"Carmen Miranda - A Pequena Notável\"\n[…]\n2004 - \"O que é que a Baiana Tem? Remasterizado\"\n[…]\nA escolha de Miranda para representar a edição de 2009 refletiu seu simbolismo de alegria e seu papel na representação do espírito brasileiro na temática dos desfiles.Nesse mesmo ano, a gravação de \"O Que É que a Baiana Tem?\", interpretada por Carmen Miranda e composta por Dorival Caymmi, foi selecionada para preservação em um arquivo sonoro especial da Biblioteca do Congresso dos EUA, sublinhando sua importância histórica e cultural.\n[…]\nEmbora tenha sido mais popular no exterior do que no Brasil na época de sua morte, Carmen Miranda fez contribuições significativas para a música e a cultura brasileira. Ela foi a primeira intérprete do samba a divulgar o gênero em âmbito internacional. Além disso, a fantasia de baiana que ela popularizou tornou-se uma característica central do carnaval para homens e mulheres.\n[…]\nEm 2008, a gravação de O que é que a baiana tem? de Dorival Caymmi foi selecionada para preservação na lista do National Recording Registry da Biblioteca do Congresso dos Estados Unidos. Três anos depois, em 2011, Carmen Miranda, ao lado de ícones como Selena, Celia Cruz, Carlos Gardel e Tito Puente, foi imortalizada em uma série de selos comemorativos do Serviço Postal dos EUA, celebrando a música latina."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Vivienne Westwood",
      "descricao": "Estilista britânica ligada à origem da moda punk"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos anos setenta, Vivienne Westwood vestia qual banda punk, empresariada por seu companheiro Malcolm McLaren?",
    "resposta": "Sex Pistols",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vivienne_Westwood"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vivienne_Westwood",
        "situacao": "ok",
        "texto": "Dame Vivienne Isabel Westwood (née Swire; 8 April 1941 – 29 December 2022) was an English fashion designer and businesswoman, largely responsible for bringing modern punk and new wave fashions into the mainstream. In 2022, Sky Arts ranked her the 4th most influential artist in Britain of the past 50 years.\n[…]\nWestwood's marriage to Derek ended after she met Malcolm McLaren. Westwood and McLaren moved to Thurleigh Court in Clapham, where their son Joseph Corré was born in 1967. Westwood continued to teach until 1971 and also created clothes which McLaren designed. McLaren became manager of the punk band the Sex Pistols, and subsequently the two garnered attention as the band wore Westwood's and McLaren's designs.\n[…]\nIn 2018, a documentary film about Westwood, called Westwood: Punk, Icon, Activist, premiered. The next year, Isabel Sanches Vegara wrote and Laura Callaghan illustrated Vivienne Westwood, one of the series, Little People, Big Dreams, published by Frances Lincoln Publishing.\n[…]\nFormer Sex Pistols bass guitarist Glen Matlock paid tribute to Westwood on Twitter, stating that it was \"a privilege to have rubbed shoulders with her in the mid '70s at the birth of punk and the waves it created that still resound today for the disaffected.\" Chrissie Hynde, singer and guitarist of The Pretenders, who had previously been employed as a shop assistant by Westwood and McLaren at Sex during the 1970s, tweeted: \"Vivienne is gone and the world is already a less interesting place.\" Others who paid tribute to Westwood on social media included singer Simon Le Bon from Duran Duran, Boy George, comedian Russell Brand, former Frankie Goes to Hollywood singer Holly Johnson, pop band Bananarama, singer and multimedia artist Yoko Ono, singer Paul McCartney, and the fashion house Alexander McQueen."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vivienne_Westwood",
        "situacao": "ok",
        "texto": "Vivienne Westwood, nascida Vivienne Isabel Swire (Derbyshire, 8 de abril de 1941 – 29 de dezembro de 2022), foi uma estilista britânica responsável por trazer a moda punk e new wave modernas para o mainstream.\n[…]\nWestwood tornou-se conhecida do público quando fez roupas para a boutique que ela e Malcolm McLaren administravam na King's Road, que ficou conhecida como SEX. Sua capacidade de sintetizar roupas e música moldou a cena punk britânica dos anos 1970, dominada pela banda de McLaren, os Sex Pistols. Ela via o punk como uma forma de \"ver se alguém poderia colocar um raio no sistema\".\n[…]\nO casamento de Westwood com Derek terminou depois que ela conheceu Malcolm McLaren. Westwood e McLaren mudaram-se para Thurleigh Court, em Balham, em Wendsworth, no sul de Londres, onde seu filho, Joseph Corré, nasceu em 1967. Westwood continuou a ensinar até 1971 e também criou roupas que McLaren desenhou. McLaren tornou-se empresário da banda punk Sex Pistols e, posteriormente, os dois chamaram a atenção, pois a banda usava os designs de Westwood e McLaren.\n[…]\nDesde o início de sua trajetória, ainda nos anos 1970, Westwood associou suas criações ao questionamento de normas sociais e políticas, especialmente por meio da estética punk, que buscava desafiar convenções e provocar debate público. Ao lado de Malcolm McLaren, transformou sua boutique em Londres em um espaço de expressão política, onde peças com símbolos e slogans provocativos eram utilizadas para criticar instituições e valores estabelecidos.\n[…]\nSegundo o mesmo comunicado, Westwood continuou ativa até seus últimos dias, dedicando-se a atividades como design, trabalho em seu livro e criação artística.\n[…]\nSite oficial da marca \"Vivienne Westwood\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Elsa Schiaparelli",
      "descricao": "Estilista italiana radicada em Paris, conhecida pelas parcerias com artistas surrealistas"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1937, a estilista Elsa Schiaparelli criou um vestido estampado com uma lagosta em parceria com qual pintor?",
    "resposta": "Salvador Dalí",
    "distratores": [
      "René Magritte",
      "Joan Miró",
      "Max Ernst"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lobster_Dress",
      "https://en.wikipedia.org/wiki/Elsa_Schiaparelli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lobster_Dress",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Elsa_Schiaparelli",
        "situacao": "ok",
        "texto": "Elsa Luisa Giovanna Maria Schiaparelli ( SKAP-ə-REL-ee, SHAP-, US also  skee-AHP-, Italian: [ˈɛlsa skjapaˈrɛlli]; 10 September 1890 – 13 November 1973) was an Italian fashion designer from an aristocratic background. She created Maison Schiaparelli (the House of Schiaparelli) in Paris in 1927, which she managed from the 1930s to the 1950s. Starting with knitwear, Schiaparelli's designs celebrated \n[…]\nSchiaparelli collaborated with Salvador Dalí and Jean Cocteau. Along with Coco Chanel, her greatest rival, she is regarded as one of the most prominent European figures in fashion between the two World Wars. Her clients included the heiress Daisy Fellowes and actress Mae West.\n[…]\nSchiaparelli's jewelry in the 1930s showcased her penchant for bold material choices, such as glass stones, cabochons, dyed pearls, and iridescent seashells, often assembled in shapes and colors that had not been seen before. Her Surrealist influence was evident in pieces like lip-shaped brooches with pearls for teeth and lobster pins. Elsa Schiaperelli was a big fan of Salvador Dalí and the Surrealist movement, which noticeably influenced her own designs in the 1930s and 1940s.\n[…]\nSchiaparelli's fanciful imaginative powers coupled with involvement in the Dada/Surrealist art movements directed her into new creative territory. Her instinctive sensibilities soon came to distinguish her creations from her chief rival Coco Chanel, who referred to her as 'that Italian artist who makes clothes'. Schiaparelli collaborated with a number of contemporary artists, most famously with Salvador Dalí, to develop a number of her most notable designs.\n[…]\nThis hat was worn by Gala Dalí, Schiaparelli herself, and by the Franco-American editor of the French Harper's Bazaar, heiress Daisy Fellowes, who was one of Schiaparelli's best clients.\n[…]\nWorks by or about Elsa Schiaparelli at the Internet Archive\n[…]\nElsa Schiaparelli at FMD"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Chapéu-panamá",
      "descricao": "Chapéu de palha trançada à mão com fibra da palmeira toquilla"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Apesar do nome, em qual país é tradicionalmente tecido o chapéu-panamá?",
    "resposta": "Equador",
    "fonte": [
      "https://en.wikipedia.org/wiki/Panama_hat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panama_hat",
        "situacao": "ok",
        "texto": "A Panama hat, also known as an  Ecuadorian hat, a Jipijapa hat, or a toquilla straw hat, is a traditional brimmed straw hat of Ecuadorian origin. Traditionally, hats were made from the plaited leaves of the Carludovica palmata plant, known locally as the toquilla palm or Jipijapa palm, although it is a palm-like plant rather than a true palm.\n[…]\nAlthough commonly called \"Panama hat\" in English, the hat has its origin in Ecuador. When the Spanish conquistadors arrived in Ecuador in 1526, the inhabitants of its coastal areas were observed to wear a brimless hat that resembled a toque, which was woven from the fibres from a palm tree that the Spaniards came to call paja toquilla or \"toquilla straw\".\n[…]\nEven though Chinese companies have been producing Panama hats at a cheaper price, the quality of the product cannot be compared with the Ecuadorian toquilla palm hats.\n[…]\nAccording to popular lore, a \"superfino\" Panama hat can hold water, and, when rolled up, pass through a wedding ring.\n[…]\nDespite their name, Panama hats originated in Ecuador where they are made to this day. Historically, throughout Central and South America, people referred to Panama hats as \"Jipijapa\", \"Toquilla\", or \"Montecristi\" hats (the latter two phrases are still in use today). Their designation as Panama hats originated in the 19th century, when Ecuadorian hat makers emigrated to Panama, where they were able to achieve much greater trade volumes.\n[…]\nPhotos of his visit showed a strong, rugged leader dressed crisply in light-colored suits sporting Ecuadorian-made straw Panama hats.\n[…]\nBuntal hat or  \"East Indian Panama hat\", from the Philippines\n[…]\nBuchet, Martine; Hamani, Laziz (2004). Panama: A Legendary Hat.\n[…]\nDomínguez, Miguel Ernesto (1991). El sombrero de paja toquilla – historia y economía.\n[…]\nMiller, Tom. The Panama Hat Trail. University of Arizona Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chap%C3%A9u-panam%C3%A1",
        "situacao": "ok",
        "texto": "Chapéu-panamá (também grafado sem o hífen) é um chapéu que, apesar do nome, é fabricado no Equador (onde é chamado de El Fino), especialmente em Cuenca e Montecristi.\n[…]\nPossui cor clara e pode ter vários formatos. É fabricado com a palha da planta Carludovica palmata, conhecida como toquilla, encontrada no Equador e em países vizinhos, e tecida em trama fechada.\n[…]\nJá foi dito que recebeu este nome porque o presidente estadunidense Theodore Roosevelt usou-o durante uma visita ao canal do Panamá, em 1906. Em razão disso, o chapéu tornou-se moda, principalmente para homens, até a Segunda Guerra Mundial. Contudo, o Dicionário Oxford registra que esse termo é usado desde pelo menos 1834.\n[…]\nMuitas personalidades aderiram à moda do chapéu-panamá, como Winston Churchill, Kemal Atatürk, Harry Truman, Getúlio Vargas e Tom Jobim. Um dos pioneiros foi Santos Dumont, que já usava o seu em 1906.\n[…]\nA moda também se popularizou entre as estrelas de Hollywood, e galãs como Humphrey Bogart, Clark Gable e Michael Jackson usaram chapéus-panamá.\n[…]\nChapéu de palha\n[…]\nBuchet, Martine e Laziz Hamani. Panama: A Legendary Hat. 2004.\n[…]\nDomínguez, Miguel Ernesto. El sombrero de paja toquilla – historia y economía. 1991.\n[…]\nMiller, Tom. The Panama Hat Trail. 1986.\n[…]\n\"Panama hat, n.\". Oxford English Dictionary. Retrieved 2012-02-21. (subscription required)\n[…]\n«Consulado do Equador em São Paulo - Informações sobre o chapéu panamá»\n[…]\n«História do chapéu panamá e imagens de alguns modelos»\n[…]\nUm site dedicado ao chapéu panamá (em castelhano e em francês).\n[…]\n«Um site apresentando o famoso chapéu panamá»\n[…]\n«Chapéu Panamá e tendências»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Smoking",
      "descricao": "Traje masculino de gala com lapelas de cetim, chamado tuxedo nos Estados Unidos"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nos Estados Unidos, o smoking é chamado de tuxedo por causa de um clube de campo em qual estado americano?",
    "resposta": "Nova York",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tuxedo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tuxedo",
        "situacao": "ok",
        "texto": "Black tie is a half-dress Western dress code for evening events, originating in British and North American conventions for attire in the 19th century. In British English, the dress code is often referred to synecdochically by its principal element for men, the dinner suit or dinner jacket. In American English, the equivalent term tuxedo (or tux) is common.\n[…]\nTuxedo in the context of menswear originated in the United States around 1888. It was named after Tuxedo Park, a Hudson Valley enclave for New York's social elite where it was often seen in its early years. The term was capitalized until the 1930s and traditionally referred only to a white jacket. When the jacket was later paired with its own unique trousers and accessories in the 1900s the term began to be associated with the entire suit. Sometimes it is shortened to \"tux\".\n[…]\nThe earliest references to a dress coat substitute in America are from the summer and fall of 1886 and, like the British references from this time, vary between waist-length mess-jacket style and the conventional suit jacket style. The most famous reference originates from Tuxedo Park, an upstate New York countryside enclave for Manhattan's wealthiest citizens.\n[…]\nEmily Post, a resident of Tuxedo Park, New York, stated in 1909 that \"[Tuxedos] can have lapels or be shawl-shaped, in either case they are to have facings of silk, satin or grosgrain\". She later republished this statement in her 1922 book Etiquette, adding that only single-breasted jackets are appropriately called tuxedos. There is a fashion movement suggesting that a man's appearance when wearing the wider and higher peak lapel is superior to the narrower notch lapel.\n[…]\nBlack tie dinners and debates are held throughout the academic year by British university Conservative associations, such as those at Oxford, Cambridge, York Tories, and Nottingham."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Smoking",
        "situacao": "ok",
        "texto": "O smoking é um traje de cerimónia masculino, sendo também conhecido como black tie (traduzido do inglês, \"gravata preta\"). É uma roupa masculina semiformal para eventos noturnos, exigindo o uso de laço preto e casaco preto (recomendado) ou azul (muito) escuro.\n[…]\nPortanto o Smoking originalmente era uma espécie de Robe, uma vestimento informal.\n[…]\nEm 1860, quando a empresa Henry Poole & Co. costurou um casaco de seda azul para e a pedido do - então - príncipe de Gales (posteriormente, rei Eduardo VII do Reino Unido) trajar em jantares internos, como alternativa à casaca.Conta-se que, quando James Potter, de Nova York, visitou o príncipe Edward VII, ficou tão impressionado com a vestimenta que encomendou a Henry Poole uma igual para si. Quando Potter voltou para Nova York, usou o seu novo traje no Tuxedo Park Club.\n[…]\nRapidamente outros membros da agremiação copiaram o design, até que este veio a ser adotado como a referência informal para jantares. A denominação americana para o smoking, tuxedo, poderá ter aí a sua origem.\n[…]\nO termo específico utilizado em português, smoking, deriva do inglês smoking jacket, item de vestuário hoje relativamente raro, não sendo mais utilizado com o propósito de se fumar charutos mas sim para eventos formais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Guccio Gucci",
      "descricao": "Empresário italiano que fundou a grife Gucci em Florença, em 1921"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Guccio Gucci se inspirou nas malas de luxo dos hóspedes ricos de qual hotel de Londres, onde trabalhou na juventude?",
    "resposta": "Hotel Savoy",
    "distratores": [
      "Hotel Ritz",
      "Claridge's",
      "The Dorchester"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guccio_Gucci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guccio_Gucci",
        "situacao": "ok",
        "texto": "Guccio Giovanbattista Giacinto Dario Maria Gucci (pronounced [ˈɡuttʃo ˈɡuttʃi]; 26 March 1881 – 2 January 1953) was an Italian businessman and fashion designer and founder of the fashion house Gucci.\n[…]\nGuccio Gucci was born in Florence, Tuscany, on 26 March 1881. He was the son of Tuscan parents, Gabriello Gucci, a leather craftsman from San Miniato, and Elena Santini, from Lastra a Signa.\n[…]\nAs a teenager, in 1899, Guccio Gucci worked at the Savoy Hotel in London.\n[…]\nThe Gucci Museum (also called Gucci Garden) in Florence, is a fashion museum centered around the history of the company and Guccio Gucci.\n[…]\nGuccio Gucci; his eldest biological son, Aldo Gucci; Aldo Gucci's sons, Giorgio Gucci, Paolo Gucci, and Roberto Gucci; and grandson Uberto Gucci claimed the right to use an inherited, ancestral coat of arms after the Kingdom of Italy, which was ruled by the House of Savoy, transitioned to the Italian Republic in 1946.\n[…]\nGuccio Gucci adapted, or incorporated, the Gucci coat-of-arms, as recorded in the Archives of Florence, into the Gucci company's knight logo, which was trademarked by the Gucci company on 4 February 1955.\n[…]\nCourt documents, records, and subsequent rulings indicate that, because the Gucci family trademarked the coat-of-arms in 1955, the trademark transferred with the sale of the Gucci company by Maurizio Gucci to Investcorp, and subsequent company owners, in 1993. However, Uberto Gucci (b. 1960), the son of Roberto Gucci, and the grandson of Aldo Gucci, claims that the Gucci family still has the right to use the ancestral Gucci coat-of-arms.\n[…]\nGuccio Gucci at FMD\n[…]\nGuccio Gucci at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guccio_Gucci",
        "situacao": "ok",
        "texto": "Guccio Giovanbattista Giacinto Dario Maria Gucci, conhecido popularmente como Guccio Gucci (Florença, 26 de março de 1881 - 2 de janeiro de 1953), foi um empresário e designer de moda italiano, fundador da grife Gucci e filho de um comerciante da região de fabrico no norte da Itália.\n[…]\nGuccio Gucci era um artesão. Ele fundou a Gucci em Florença em 1921, como uma pequena loja de selaria de couro de propriedade familiar. Ele começou a vender bolsas de couro para cavaleiros na década de 1920. Quando jovem, ele rapidamente construiu uma reputação de qualidade, contratando os melhores artesãos que encontrou para trabalhar em seu ateliê.\n[…]\nEm 1938, Gucci expandiu seu negócio para Roma. Logo, sua empresa de apenas um homem se transformou em um negócio familiar, quando seus filhos Aldo, Vasco, Ugo e Rodolfo entraram na empresa.\n[…]\nEm 1951, abriu sua loja Gucci em Milão e dois anos depois, a empresa expandiu, com a abertura de uma loja em Manhattan.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Bolsa Birkin",
      "descricao": "Bolsa de couro da Hermès criada para a atriz e cantora Jane Birkin"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A bolsa Birkin nasceu de uma conversa entre a atriz Jane Birkin e o presidente da Hermès. Onde os dois estavam?",
    "resposta": "Num avião",
    "fonte": [
      "https://en.wikipedia.org/wiki/Birkin_bag"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Birkin_bag",
        "situacao": "ok",
        "texto": "The Birkin bag (or simply Birkin) is a handbag created by the French company Hermès in 1984, following a meeting between Jean-Louis Dumas, then CEO of the group, and the actress Jane Birkin. Handmade, usually in leather, it is distributed in several sizes and exclusively in Hermès stores.\n[…]\nThe Birkin bag was created in 1984, after a chance meeting between Jean-Louis Dumas, then CEO of Hermès, and Jane Birkin. At the time, the actress was known for carrying baskets that held more belongings than a conventional handbag. She inadvertently spilled the contents of her bag and complained about the impracticality of handbags in general, especially for a young mother, without knowing next to whom she stood.\n[…]\nIn 2020, retail prices started at US$11,400 for a Birkin 25 bag.\n[…]\nThe original prototype Hermès Birkin handbag, custom-made for Jane Birkin with a shoulder strap, brass fittings, and other differences from later production bags, was sold at auction for €8.6 million (approximately $10.1 million), setting a new record as the highest price for a Birkin bag and the most expensive fashion accessory sold at auction in Europe.\n[…]\nPublic demand for the Birkin is rising as a 2025 report by secondhand retailer ReBag suggested a 92% appreciation of its value over the last decade.\n[…]\nIn addition to the possible counterfeits that all well-known brands are subject to, fake Hermès bags—including the Birkin bag—are alleged to have been made by a group including seven former Hermès workers. Ten people were sentenced in France to sentences ranging from six months' imprisonment (suspended) to three years, plus fines, in September 2020 for making dozens of counterfeit bags that sold for tens of thousands of euros each, for a total profit of over €2 million.\n[…]\nHermès"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Cetim",
      "descricao": "Tecido de trama que deixa uma face lisa e brilhante, feito originalmente de seda"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O nome cetim vem de Zaitun, nome árabe de um antigo porto exportador de seda. Em que país fica esse porto?",
    "resposta": "China",
    "distratores": [
      "Índia",
      "Turquia",
      "Japão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Satin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Satin",
        "situacao": "ok",
        "texto": "A satin weave is a type of fabric weave that produces a characteristically glossy, smooth or lustrous material, typically with a glossy top surface and a dull back; it is not durable, as it tends to snag. It is one of three fundamental types of textile weaves alongside plain weave and twill weave.\n[…]\nSatin originated in ancient China and was originally made solely of silk. Various forms of satin fabrics existed, which came under several names, such as duan (缎), zhusi (紵丝), ling (绫), jin (锦), wusi (五丝) and basi (八丝). Chinese satin, in its original form, was supposed to be a five- or six-end warp satin. The six-end warp satin weave was mostly likely a derivative of the six-end warp twill weave during the Tang and Northern Song dynasty periods.\n[…]\nThe word \"satin\" derives its origin from the Chinese port city of Quanzhou (泉州), which was known as Zayton in Europe during the Yuan dynasty (13th–14th century), and Arab merchants referred to the silk material imported from that city as zaituni. During that period, Quanzhou was visited by Arab merchants and by Europeans. The Arabs referred to silk satin imported from Quanzhou as zaituni.\n[…]\nSultan – is a worsted fabric with a satin face.\n[…]\nDresses: Satin's drape and shiny texture make it a favorite for evening gowns and bridal gowns.\n[…]\nBed sheets: Satin is frequently used for bed linens because of its flexible and silky texture.\n[…]\nFootwear: Satin is a popular fabric for shoe makers, from ballerina slippers to high heels.\n[…]\nFashion accessories: Satin is commonly used for evening bags and clutches in the fashion industry.\n[…]\nCrafting: Satin in the form of ribbons is very common for crafting various products such as rosette leis, corsage, and even decorative flowers.\n[…]\nMedia related to Satin at Wikimedia Commons\n[…]\nThe dictionary definition of satin at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cetim",
        "situacao": "ok",
        "texto": "O cetim ou setim é um tecido formado de seda e lã. Foi assim denominado em homenagem a Zaitum (ou Tsenthung), China, de onde se origina. Era a princípio um tecido brilhante de seda em trama bem fechada.\n[…]\nNo século XX o raiom e outras fibras sintéticas tomaram o lugar da seda.\n[…]\nTecido luxuoso, o cetim é mais usado para roupas de noite e é altamente recomendado pelos alfaiates por sua classe e caimento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Le Smoking",
      "descricao": "Smoking feminino lançado por Yves Saint Laurent em 1966"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1966, qual estilista francês lançou o smoking feminino, batizado de Le Smoking?",
    "resposta": "Yves Saint Laurent",
    "fonte": [
      "https://en.wikipedia.org/wiki/Le_Smoking",
      "https://en.wikipedia.org/wiki/Yves_Saint_Laurent_(designer)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Le_Smoking",
        "situacao": "ok",
        "texto": "Le Smoking is a women's tuxedo suit created in 1966 by couturier Yves Saint Laurent. The first suit of its kind to earn attention in the fashion world and in popular culture, it was influenced by the androgynous personal style of Saint Laurent model and muse Danielle Luquet de Saint Germain, as well as the evening dress of artist Niki de Saint-Phalle. The designer took bits and pieces from both me\n[…]\nAs the tuxedo was designed for females, it was different from the normal male tuxedo. The collar was more feminine, as the shape and curve were more subtle. The waistline of the blouse was narrowed to show the body shape, and the pants were adjusted to help elongate the leg.\n[…]\nSaint Laurent was seen by many as having empowered women by giving them the option to wear clothes that were normally worn by men with influence and power.\n[…]\nIn French and many other languages, the pseudo-anglicism smoking refers to tuxedo/black tie clothing. It is a false friend deriving from the Victorian fashion of the smoking jacket."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yves_Saint_Laurent_(designer)",
        "situacao": "ok",
        "texto": "Yves Henri Donat Mathieu-Saint-Laurent (1 August 1936 – 1 June 2008), better known as Yves Saint Laurent (, also UK: , US: ; French: [iv sɛ̃ lɔʁɑ̃] ), was a French fashion designer who founded his eponymous fashion label in 1962. He was the last of the grand couturiers and is regarded as one of the foremost designers of the 20th century.\n[…]\n2019: Yves Saint Laurent: The Last Collections\n[…]\nBergé, Pierre (2014). Yves Saint Laurent: A Moroccan Passion. Illustrated by Lawrence Mynott. Abrams. ISBN 978-1-4197-1349-1.\n[…]\nPetkanas, Christopher (2018). Loulou & Yves: The Untold Story of Loulou de la Falaise and the House of Saint Laurent (First ed.). New York: St. Martin's Press. ISBN 978-1-250-05169-1.\n[…]\nMenkes, Suzy (2019). Yves Saint Laurent: The Complete Haute Couture Collections, 1962–2002. Thames&Hudson. ISBN 978-0-300-24365-9.\n[…]\nBenaïm, Laurence (2019). Yves Saint Laurent: A Biography. Rizzoli. ISBN 978-0-8478-6339-6.\n[…]\nBenaïm, Laurence (2020). Yves Saint Laurent: The Impossible Collection. Assouline. ISBN 978-1-61428-942-5.\n[…]\nBaxter-Wright, Emma (2021). Little Book of Yves Saint Laurent: The Story of the Iconic Fashion House. Welbeck Publishing. ISBN 978-1-78739-554-1.\n[…]\nNapias, Jean-Christophe; Mauriès, Patrick (2023). The World According to Yves Saint Laurent. Thames&Hudson. ISBN 978-0-500-02618-2.\n[…]\nReising, Kelly (2025). The Essence of Yves Saint Laurent: Unfolded. Helmin&Sorgenfri. ISBN 978-87-94190-60-2.\n[…]\n\"Yves Saint Laurent, legendary designer and Pied Piper of fashion, dies aged 71\", The Guardian: retrospective article\n[…]\n\"Yves Saint Laurent shuts its doors\" – BBC World 31 October 2002\n[…]\n\"Yves Saint Laurent announces retirement\" – CNN 7 January 2002\n[…]\n\"All About Yves: As the incomparable Yves Saint Laurent celebrates his 40th anniversary as a couturier, the world salutes his genius.\" – Julie K.L. Dam, Time magazine, 3 August 1998."
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "New Look",
      "descricao": "Estilo de cintura marcada e saias amplas lançado em Paris em 1947"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1947, qual estilista lançou em Paris a coleção de cintura fina e saias amplas apelidada de New Look?",
    "resposta": "Christian Dior",
    "fonte": [
      "https://en.wikipedia.org/wiki/New_Look_(fashion)",
      "https://en.wikipedia.org/wiki/Christian_Dior"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/New_Look_(fashion)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Christian_Dior",
        "situacao": "ok",
        "texto": "Christian Ernest Dior (French: [kʁistjɑ̃ djɔʁ]; 21 January 1905 – 24 October 1957) was a French fashion designer and founder of one of the world's top fashion houses, Christian Dior SE. He was one of the Big Four of 1950s haute couture, the others being Jacques Fath, Pierre Balmain and Jean Dessès. Dior believed that fashion was more than clothing; that it was an art form and a continuation of Fre\n[…]\nThe house opened on 8 October 1946, on 30 Avenue Montaigne, with 85 staff members, seven models, and a salon decorated, by Victor Grandpierre and Christian Bérard, in black, white and gray. His head of millinery was also his muse, Mitzah Bricard. On 12 February 1947, the House of Dior presented its first collection, \"Corolla\", which was 90 garments displayed in ensembles.\n[…]\nDior created his first fragrance, Miss Dior, in 1947. To manage Parfums Dior, he partnered with a friend from Granville, Serge Heftler-Louiche, who was the general manager of Parfums Coty. Miss Dior was followed by Diorama in 1948, Eau Fraiche in 1952, and Diorissimo in 1956. By then, the House of Dior in Paris had expanded to seven stories and 28 workrooms. Parfums Christian Dior and Christian Dior Hosiery were established in Paris and New York. In 1952, C.D.\n[…]\nChristian Dior owned two homes. In Paris, he lived in a townhouse at 7, boulevard Jules-Sandeau. He also satisfied his long-standing obsession with architecture by buying and renovating the 19th-century Château de La Colle Noire in Montauroux; the chateau now belongs to Parfums Christian Dior.\n[…]\nPochna, Marie-France (1994). Christian Dior. Paris: Flammarion ISBN 9782080668929\n[…]\nPochna, Marie-France (1996). Christian Dior: The Man Who Made the World Look New. New York: Arcade Publishing ISBN 9781559703406\n[…]\nChristian Dior Collection, Metropolitan Museum of Art\n[…]\nChristian Dior Collection, Pathé News\n[…]\nChristian Dior at IMDb\n[…]\nChristian Dior at the British Film Institute"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Vestido preto de Bonequinha de Luxo",
      "descricao": "Vestido preto longo usado por Audrey Hepburn na cena de abertura do filme Bonequinha de Luxo, de 1961"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No filme Bonequinha de Luxo, de 1961, qual estilista francês criou o vestido preto usado por Audrey Hepburn na cena de abertura?",
    "resposta": "Hubert de Givenchy",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Givenchy_dress_of_Audrey_Hepburn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Givenchy_dress_of_Audrey_Hepburn",
        "situacao": "ok",
        "texto": "Audrey Hepburn wore a \"little black dress\" in the 1961 romantic comedy film Breakfast at Tiffany's. The garment was originally designed by Hubert de Givenchy, with three existing copies preserved to date. A studio copy of this dress was worn during the opening scene of the film, while another during a social party held at the apartment of the main protagonist.\n[…]\nIn 1961, Givenchy designed a little black dress for the opening scene of Blake Edwards' romantic comedy, Breakfast at Tiffany's, in which Hepburn starred alongside actor George Peppard. Her necklace was made by Roger Scemama, a French jeweler and parure-maker who designed jewelry for Givenchy.\n[…]\nThe little black dress attained such iconic fame and status that it became an integral part of a woman's wardrobe. Givenchy not only chose the dress for the character in the film, but also added matching accessories, including a many-stranded pearl choker, a foot-long cigarette holder, a large black hat and opera gloves. These details \"visually defined the character\" and \"indelibly linked Audrey with her\".\n[…]\nHepburn, along with her designer friend Givenchy, created a dress to fit her physical features and her role in the film of a waif. The accessories alongside the black silk dress, which highlighted her lean shoulder blades, came to define Hepburn's style. The dark oversized sunglasses completed the ensemble of the little black dress (LBD), and the outfit was called \"the definitive LBD\".\n[…]\nAlthough the original design Givenchy created remains an exclusive luxury item, its popularity helped make the “little black dress” or “LBD” something all people across the globe can wear and enjoy. This raises ethical questions about the gap between the realities of modern garment industry and the high value of designer fashion pieces.\n[…]\nWhite floral Givenchy dress of Audrey Hepburn"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Gabardine",
      "descricao": "Tecido resistente e impermeável de trama diagonal, usado em casacos e capas de chuva"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Qual marca britânica criou, em 1879, o tecido impermeável chamado gabardine?",
    "resposta": "Burberry",
    "distratores": [
      "Aquascutum",
      "Barbour",
      "Mackintosh"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gabardine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gabardine",
        "situacao": "ok",
        "texto": "Gabardine is a durable twill worsted wool. It is a tightly woven waterproof fabric and is used to make outerwear and various other garments, such as suits, topcoats, trousers, uniforms, and windbreakers. Thomas Burberry created the fabric in the late 1870s and patented it in 1888. The name gabardine comes from \"gaberdine\", a type of long, cape-like dress worn during the Middle Ages.\n[…]\nThe modern use to describe a fabric rather than a garment dates to Thomas Burberry, founder of the Burberry fashion house in Basingstoke, Hampshire, England, who invented the fabric and revived the name gabardine in 1879. It was introduced by Burberry and patented in 1888.\n[…]\nPrior to Burberry's development of gabardine, rubberised cotton (as in the Mackintosh coat) was the most common fabric used for waterproofing, and the material's lack of breathability and heaviness frequently made waterproof clothes uncomfortable. Gabardine, by contrast, was a lightweight, durable, breathable material. Its ability to shed water and break the wind while preserving comfortable wearability helped revolutionise outerwear.\n[…]\nGabardine was quickly recognised for its military applications in the United Kingdom. In 1902, the British War Office commissioned Burberry to use the material in designing new coats for its soldiers that would better withstand demanding battlefield conditions. The original coat model produced by that commission was later updated, in 1914, in response to the harsh conditions of trench warfare during World War I.\n[…]\nBurberry clothing of gabardine was also worn by many polar explorers. The fabric's first arctic field test was performed by Fridtjof Nansen, a Norwegian scientist, explorer, diplomat, and eventual Nobel Peace Prize recipient who wore gabardine on his 1893 Fram expedition toward the North Pole."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gabardina",
        "situacao": "ok",
        "texto": "Gabardina é um tecido têxtil robusto com o seu fio muito junto, utilizado para o fabrico de fatos, sobretudos, calças, uniformes, quebra-ventos e outro vestuário.\n[…]\nA fibra utilizada para fazer o tecido é, tradicionalmente, fio têxtil de lã, mas também pode ser de algodão, polyester ou uma mistura. A gabardina é tecida em urdume, com uma pequena barra proeminente na face e uma superfície no reverso. A garbardina tem sempre mais fio de urdume do que fio de trama.\n[…]\nAs roupas feitas com gabardina estão, geralmente, indicadas para limpeza a seco.\n[…]\nO termo gabardina é também utilizado para designar uma peça de roupa impermeável, semelhante a um sobretudo.\n[…]\nA gabardina foi inventada em 1879 por Thomas Burberry, criador da casa de moda Burberry, em Basingstoke, e registou a sua patente em 1888. O tecido original era impermeabilizado antes de passar à fase de tecelagem e era feito de lã, ou lã e algodão, e fortemente confeccionado, mas era mais confortável que os tecidos de à base de borracha.\n[…]\nAs roupas de gabardina da Burberry eram usadas pelos exploradores polares como Roald Amundsen, o primeiro homem a chegar ao Polo Sul, em 1911, e Ernest Shackleton, que liderou uma expedição em 1914 para atravessar a Antártida. George Mallory também usou um casaco deste material na sua tentativa de subir o Monte Everest, em 1924.\n[…]\nA gabardina foi muito utilizada na década de 1950 para produzir casacos com padrões mais coloridos, assim como calças e fatos. Empresas como a Penneys, Sport Chief, Campus, Four Star e  California Trends produziam casacos curtos, algumas vezes reversíveis, chamados de \"casacos de fim-de-semana\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Vestido envelope",
      "descricao": "Vestido que se fecha cruzando a frente e se amarra na cintura"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1974, qual estilista lançou o famoso vestido envelope de malha, cruzado na frente e amarrado na cintura?",
    "resposta": "Diane von Fürstenberg",
    "distratores": [
      "Mary Quant",
      "Sonia Rykiel",
      "Halston"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wrap_dress",
      "https://en.wikipedia.org/wiki/Diane_von_F%C3%BCrstenberg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wrap_dress",
        "situacao": "ok",
        "texto": "\"Wrap dress\" is a generic term for a dress with a front closure formed by wrapping one side across the other, and is fastened at the side or tied at the back. This forms a V-shaped neckline. A faux wrap dress resembles this design, except that it comes already fastened together with no opening in front, but instead is slipped on over the head. A wrap top is a top cut and constructed in the same wa\n[…]\nAlthough it is often claimed that Diane von Fürstenberg 'invented' what is known as the wrap dress in 1972/73, Richard Martin, a former curator of the Costume Institute at the Metropolitan Museum of Art, noted that the form of Fürstenberg's design had already been \"deeply embedded into the American designer sportswear tradition,\" with her choice of elastic, synthetic fabrics distinguishing her work from earlier wrap dresses.\n[…]\nThe Fürstenberg interpretation of the wrap dress, which was consistently knee-length, in a clinging jersey, with long sleeves, was so popular and so distinctive that the style has generally become associated with her. She has stated that her divorce inspired the design, and also suggested it was created in the spirit of enabling women to enjoy sexual freedom. The wrap dress that she designed in 1974 was a design re-interpretation of the Kimono.\n[…]\nHowever, Fürstenberg acknowledged in 2024 that her notable wrap dress design in fact bore similarities to her previous skirt and wrap top dresses, with her idea of making her notable wrap dress figure developing after she noticed Julie Nixon Eisenhower opted to wear one of her skirt and wrap dresses while defending her father during a televised appearance she made as the Watergate scandal was progressing.\n[…]\nWrap (clothing)\n[…]\nA 1970s von Fürstenberg jersey wrap dress at the Metropolitan Museum of Art\n[…]\n\"Diane von Fürstenberg 'Journey of a Dress' exhibition opens in L.A.\" by Booth Moore, Los Angeles Times, January 10, 2014"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Diane_von_F%C3%BCrstenberg",
        "situacao": "ok",
        "texto": "Diane von Fürstenberg (born Diane Simone Michele Halfin; 31 December 1946) is a Belgian fashion designer best known for her wrap dress. She initially rose to prominence in 1969 when she married into the German princely House of Fürstenberg, as the wife of Prince Egon von Fürstenberg. Following their separation in 1972 and divorce in 1983, she has continued to use his family name.\n[…]\nIn 2009, a large-scale retrospective exhibition entitled \"Diane von Furstenberg: Journey of a Dress\" opened at the Manezh, one of Moscow's largest public exhibition spaces. Curated by Andre Leon Talley, it attracted  media attention. In 2010, the exhibition traveled to São Paulo; and in 2011, to the Pace Gallery in Beijing.\n[…]\nIn 2024, Disney+ released Diane von Furstenberg: Woman in Charge a feature-length biographical documentary of  von Furstenberg's life and business. The documentary features interviews with Oprah, Hillary Clinton, Marc Jacobs and other notable artists and designers. The documentary received positive reviews.\n[…]\nIn 2024, she released her documentary, Diane von Fürstenberg: Woman in Charge.\n[…]\nThe von Fürstenbergs' marriage, although unpopular with the groom's family because of her Jewish ethnicity, was considered dynastic, and on her marriage she became 'Her Serene Highness Princess Diane of Fürstenberg'. She lost any claim to the title following their separation in 1972 and divorce in 1983.\n[…]\nFurstenberg, Diane von (1976). Diane Von Furstenberg's Book of Beauty: How to Become a More Attractive, Confident, and Sensual Woman. Simon & Schuster. ISBN 978-0671219048.\n[…]\nFurstenberg, Diane von (1998). Diane: A Signature Life. Simon & Schuster. ISBN 978-0684843834.\n[…]\nFurstenberg, Diane von (2014). The Woman I Wanted to Be. Simon & Schuster. ISBN 978-1451651546.\n[…]\nFurstenberg, Diane von (2021). Own It: The Secret to Life. Phaidon Press. ISBN 978-1838662325.\n[…]\nDiane von Fürstenberg at FMD"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Colete",
      "descricao": "Peça sem mangas usada sobre a camisa e sob o paletó, parte do terno de três peças"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1666, qual rei inglês adotou na corte o colete, peça que daria origem ao terno de três peças?",
    "resposta": "Carlos II",
    "fonte": [
      "https://en.wikipedia.org/wiki/Waistcoat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Waistcoat",
        "situacao": "ok",
        "texto": "A waistcoat (UK and Commonwealth,  or ;  colloquially called a weskit) or vest (US and Canada) is a sleeveless upper-body garment. It is usually worn over a dress shirt and necktie and below a coat as a part of most men's formal wear. It is also sported as the third piece in the traditional three-piece male suit. Any given waistcoat can be simple or ornate, or for leisure or luxury.\n[…]\nThe garment – and Charles II's championing of it – is mentioned in a diary entry of October 8, 1666 by Samuel Pepys, the diarist and civil servant. He noted that \"the King hath yesterday in council declared his resolution of setting a fashion for clothes which he will never alter. It will be a vest, I know not well how; but it is to teach the nobility thrift.\" This royal decree provided the first documented mention of the vest or waistcoat.\n[…]\nJohn Evelyn wrote about waistcoats on October 18, 1666: \"To Court, it being the first time his Majesty put himself solemnly into the Eastern fashion of vest, changing doublet, stiff collar, bands and cloak, into a comely dress after the Persian mode, with girdles or straps, and shoestrings and garters into buckles ... resolving never to alter it, and to leave the French mode\". While Evelyn designated the costume Persian, it was more directly influenced by the Turkish.\n[…]\nFrench fashions were a dominant influence in the royal courts of Europe throughout the 18th century. From the late 17th century, Spanish royals and nobility were incorporating French garments such as the veste (as the \"chupa\" in Spanish) and justacorps into male dress, at least for wear at private occasions. Away from court, Carlos II (r. 1655–1700) dressed in the French style; outfits in the Spanish style continued to be worn by the king and his courtiers for official purposes and court events.\n[…]\nWaistcoats on the collections of the Victoria and Albert Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Colete",
        "situacao": "ok",
        "texto": "Colete é a peça de roupa, tanto masculina quanto feminina, que cobre somente o tórax e o abdome. Sem mangas ou gola, o colete deixa de fora os braços. Pode ter o objetivo de proteger seu usuário contra o frio. Há coletes de taquitel, couro, suéter, matelassê e muitos outros tecidos.\n[…]\nHoje, o colete é usado de várias maneiras: como parte integrante de um terno masculino clássico de três peças e pode servir como agasalho em vez de um suéter. Além disso, desde o século 20, o colete passou a ser muito utilizado como vestimenta especial ou até mesmo como uniforme. O colete transportadora é usado pelos militares. A armadura corporal faz parte do uniforme de um segurança ou policial, os velejadores na água usam colete salva-vidas.\n[…]\nO colete é uma vestimenta popular na subcultura steampunk.\n[…]\nOs coletes usados ​​com gravatas pretas e brancas diferem dos coletes padrão trespassado em um corte muito menor (três botões ou quatro botões onde tudo abotoa). O espaçamento muito maior da camisa em comparação com um colete diurno permite uma maior variedade de formas, e há uma grande variedade de formas de bico, de pontiagudas a planas ou arredondadas. Os coletes podem ter um decote em V ou um decote mais profundo (também conhecido como colete de ferradura).\n[…]\nAs formas em V são mais adequadas para a sala de estar e ternos de negócios. Coletes de ferradura são usados ​​​​com smokings ou smokings. O colete de ferradura não deve aparecer acima do botão superior da jaqueta. A cor geralmente combina com a gravata, então apenas lã preta barata, gorgorão ou cetim e marselha, gorgorão ou cetim branco são usados, embora nas primeiras formas de vestido fossem usados ​​coletes brancos com uma gravata preta.\n[…]\nColete salva-vidas\n[…]\nColete a prova de balas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Melindrosa",
      "descricao": "Jovem moderna de cabelo curto e vestido reto, símbolo da moda e dos costumes do pós-Primeira Guerra"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A melindrosa, de cabelo curtinho, vestido reto e colar comprido, foi símbolo de qual década?",
    "resposta": "Anos vinte",
    "distratores": [
      "Anos dez",
      "Anos trinta",
      "Anos cinquenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Flapper"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flapper",
        "situacao": "ok",
        "texto": "Flappers were a subculture of young Western women prominent after the First World War and through the 1920s who wore knee-length skirts (considered short during that period), bobbed their hair, listened to jazz, and flaunted their disdain for prevailing codes of decent behavior. Flappers have been seen as brash for wearing excessive makeup, drinking alcohol, smoking cigarettes in public, driving a\n[…]\nAt this early date, it seems that the style associated with a flapper already included the boyish physique and close-fitting hat, but a hobble skirt rather than one with a high hemline.\n[…]\nAn obituary for the \"Flapper\" ran in The New York Times Magazine in 1929, suggesting that she was being replaced by the \"Siren\", a mysterious, stylish, \"vaguely European\" ideal woman. The flapper lifestyle and look disappeared and the roaring '20s era of glitz and glamour came to an end in America after the Wall Street crash of 1929.\n[…]\nUnable to afford the latest trends and lifestyle, the once-vibrant flapper women returned to their dropped hemlines, and the flapper dress disappeared. A sudden serious tone washed over the public with the appearance of the Great Depression. The high-spirited attitude and hedonism were less acceptable during the economic hardships of the 1930s. The popular bobbed haircut was the cause for some women being fired from their jobs.\n[…]\nMackrell, Judith (2014) Flappers: Six Women of a Dangerous Generation. Clerkenwell, London, England: Pan MacMillan ISBN 978-0-330-52952-5 (Diana Cooper, Nancy Cunard, Tallulah Bankhead, Zelda Fitzgerald, Josephine Baker, Tamara de Lempicka)\n[…]\n\"1920s fashion & music\". 1920s Flapper: Young Women in a Modern World..\n[…]\n\"Flappers and fashion\". Rambova. Archived from the original on August 21, 2010. Retrieved December 11, 2005.\n[…]\n\"Thousands of photos of flappers can be viewed at Louise Brooks Fan Club on Facebook\". Facebook.."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Melindrosa",
        "situacao": "ok",
        "texto": "As melindrosas eram uma subcultura de jovens mulheres ocidentais proeminente após a Primeira Guerra Mundial e durante a década de 1920, que usavam saias na altura do joelho (consideradas curtas naquela época), cortavam o cabelo curto, ouviam jazz e ostentavam seu desprezo pelos códigos de comportamento decente vigentes.\n[…]\nNo entanto, pode derivar ou de um uso anterior no norte da Inglaterra que significa \"adolescente\", referindo-se as meninas cujas tranças batiam (flapped) em costas e que usavam saias ao redor dos joelhos até os quinze anos, quando teriam que usar vestidos e amarrar o cabelo em um coque, ou de uma palavra mais antiga que significa \"prostituta\". A gíria \"flap\" foi usada para designar jovens prostitutas já em 1631.\n[…]\nNa década de 1890, a palavra \"flapper\" estava emergindo na Inglaterra como gíria popular, tanto para uma jovem prostituta, quanto em um sentido mais geral - e menos depreciativo - para qualquer adolescente animada.\n[…]\nEm 1908, jornais tão sérios quanto The Times usaram o termo, embora com uma explicação cuidadosa: \"Uma 'melindrosa', podemos explicar, é uma jovem moça que ainda não foi promovida para longos vestidos e o uso de seus cabelos amarrados\". Em abril de 1908, a seção de moda de The Globe and Traveler de Londres continha um esboço intitulado \"The Dress of the Young Girl\" com a seguinte explicação:\"Americanos e esses afortunados ingleses cujo dinheiro e status lhes permitem usar livremente gírias...\n[…]\nEm meados da década de 1930, na Grã-Bretanha, embora ainda ocasionalmente usada, a palavra \"flapper\" se associara ao passado. Em 1936, um jornalista do Times agrupou-o, junto com termos como \"blotto\" (bêbado), como uma gíria desatualizada: \"(blotto) evoca um eco distante de alegria de rags e flappers ... Isto recorda um passado que ainda não é um 'período'\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Mary Phelps Jacob",
      "descricao": "Americana que patenteou um modelo de sutiã em 1914, mais tarde conhecida como Caresse Crosby"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1914, a americana Mary Phelps Jacob patenteou um sutiã que tinha improvisado com fita e com quais duas peças?",
    "resposta": "Dois lenços de seda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Caresse_Crosby"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caresse_Crosby",
        "situacao": "ok",
        "texto": "Caresse Crosby (born Mary Phelps Jacob; April 20, 1892 – January 24, 1970) was an American publisher and writer.\n[…]\nBorn on April 20, 1891, in New Rochelle, New York, she was the oldest child of Mary (née Phelps) Jacob and William Hearn Jacob, who were both descended from American colonial families—her mother from the William Phelps family, and her father from the Van Rensselaers. Her mother was the daughter of Civil War General Walter Phelps, and she had two brothers, Leonard and Walter \"Bud\" Phelps Jacob. She was nicknamed \"Polly\" to distinguish her from her mother.\n[…]\nWhile Crosby's design was the first granted a patent within its category, The U.S. Patent Office and foreign patent offices had issued patents for various bra-like undergarments as early as the 1860s. Other brassiere designs had previously been invented and popularized for use within the United States since about 1910. By 1912, American mass-market brassiere manufacturers included Bien Jolie Brassieres and DeBevoise Brassieres. The latter first advertised its bust supporter in Vogue in 1904.\n[…]\nCrosby decided to reclaim her birth name, Mary, and thus was known after her husband's death as \"Mary Caresse Crosby.\" She pursued ambitions as an actress that she had had since her 20s, and appeared as a dancer in two short experimental films directed by artist Emlen Etting, Poem 8 (1932) and Oramunde (1933).\n[…]\nCaresse Crosby at IMDb\n[…]\nMary Phelps Jacob (Caresse Crosby) at Phelps Family History\n[…]\nMary Phelps Jacob Inventor of the Week Archive November 2001 (March 2003)\n[…]\nMary Phelps Jacob, Inventor of the Modern Brassiere"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Viscose",
      "descricao": "Fibra têxtil artificial produzida a partir de celulose, também chamada raiom"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A viscose, tecido que já foi chamado de seda artificial, é fabricada a partir de quê?",
    "resposta": "Celulose de madeira",
    "distratores": [
      "Petróleo",
      "Carvão mineral",
      "Proteína do leite"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rayon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rayon",
        "situacao": "ok",
        "texto": "Rayon, also called viscose, is a semi-synthetic fiber made from natural sources of regenerated cellulose, such as wood and related agricultural products. It has the same molecular structure as cellulose. Many types and grades of rayon fibers and films exist. Some imitate the feel and texture of natural fibers such as silk, wool, cotton, and linen. It can be woven or knitted to make textiles for cl\n[…]\nThe most common rayon production method, the viscose process, uses carbon disulfide, which is highly toxic. It is well documented to have seriously harmed the health of rayon workers in developed countries, and emissions may also harm the health of people living near rayon plants and their livestock. Rates of disability in modern factories (mainly in China, Indonesia, and India) are unknown. This has raised ethical concerns over viscose rayon production.\n[…]\nIn the 1990s, viscose rayon producers faced lawsuits for negligent environmental pollution. Emissions abatement technologies had been consistently used. Carbon-bed recovery, for instance, which reduces emissions by about 90%, was used in Europe, but not in the US, by Courtaulds. Pollution control and worker safety started to become cost-limiting factors in production.\n[…]\nJapan has reduced carbon disulfide emissions per kilogram of viscose rayon produced (by about 16% per year), but in other rayon-producing countries, including China, emissions are uncontrolled. Rayon production is steady or decreasing except in China, where it is increasing, as of 2004.\n[…]\nCellulose acetate shares many traits with viscose rayon and was formerly considered the same textile. However, rayon resists heat, while acetate is prone to melting. Acetate must be laundered with care either by hand-washing or dry cleaning, and acetate garments disintegrate when heated in a tumble dryer. The two fabrics are now required to be listed distinctly on US garment labels."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Raiom",
        "situacao": "ok",
        "texto": "Raiom ou rayon é um tecido de fibra celulósica, um dos primeiros tecidos artificiais. Surgiu em 1885 quando ainda era chamado de \"seda artificial\". O nome \"raiom\" só se estabeleceu em 1924. Derivado da polpa da madeira, tem características parecidas com o algodão: é bastante resistente, modela-se facilmente e é macio; a fibra de raiom tem boa absorção, é confortável e é tingida com facilidade.\n[…]\nA palavra raiom pode ser definida como: \"um termo genérico para filamentos produzidos a partir de vários soluções de celulosa modificadas por prensagem ou através da disposição da solução de celusose por um orifício e então solidificando a solução na forma de filamentos\"\n[…]\nHá três tipos de raiom:\n[…]\nRaiom de acetato\n[…]\nRaiom de cupramônio\n[…]\nRaiom de viscose\n[…]\nLyocell é uma forma de rayon que consiste em fibra de celulose feita a partir de polpa de dissolução (polpa de madeira branqueada) usando fiação a jato seco. Foi desenvolvido em 1972 por uma equipe da agora extinta instalação de fibras American Enka na cidade de Enka, Carolina do Norte. Em 2003, esse desenvolvimento foi reconhecido pela Associação Americana de Químicos e Coloristas Têxteis (AATCC), pela concessão de seu prêmio Henry E. Millson Award for Invention.\n[…]\nModal é um tipo de raiom, uma fibra de celulose semissintética produzida por fiação de celulose reconstituída. O Modal é usado sozinho ou com outras fibras (geralmente algodão ou elastano) em roupas e utensílios domésticos, como pijamas, roupas íntimas, roupões de banho, toalhas e lençóis.\n[…]\nO Modal é processado sob diferentes condições para produzir uma fibra que é mais forte e mais estável quando está úmida do que o raiom padrão, mas apresenta uma sensação suave, semelhante ao algodão. Pode ser lavado na máquina sem danificar devido ao seu maior alinhamento molecular. Sabe-se que o tecido comprime menos que o algodão devido às propriedades das fibras e menor atrito superficial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Toga",
      "descricao": "Manto de lã enrolado ao corpo, traje característico dos cidadãos da Roma Antiga"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Roma Antiga, o uso da toga era um direito reservado a quem?",
    "resposta": "Cidadãos romanos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toga",
        "situacao": "ok",
        "texto": "The toga (, Classical Latin: [ˈt̪ɔ.ɡa]), a distinctive garment of Ancient Rome, was a roughly semicircular cloth, between 12 and 20 feet (3.7 and 6.1 m) in length, draped over the shoulders and around the body. It was usually woven from white wool, and was worn over a tunic. In Roman historical tradition, it is said to have been the favored dress of Romulus, Rome's founder; it was also thought to \n[…]\nAugustus was determined to bring back \"the traditional style\" (the toga). He ordered that any theater-goer in dark (or colored or dirty) clothing be sent to the back seats, traditionally reserved for those who had no toga; ordinary or common women, freedmen, low-class foreigners and slaves. He reserved the most honorable seats, front of house, for senators and equites; this was how it had always been, before the chaos of the civil wars; or rather, how it was supposed to have been.\n[…]\nInfuriated by the sight of a darkly clad throng of men at a public meeting, he sarcastically quoted Virgil at them: \"Romanos, rerum dominos, gentemque togatam\" (\"Romans, lords of the world and the toga-wearing people\"), then ordered that in future, the aediles ban anyone not wearing the toga from the Forum and its environs – Rome's \"civic heart\".\n[…]\nThe most complex togas appear on high-quality portrait busts and imperial reliefs of the mid-to-late Empire, probably reserved for emperors and the highest civil officials. The so-called \"banded\" or \"stacked\" toga (Latinised as toga contabulata) appeared in the late 2nd century AD and was distinguished by its broad, smooth, slab-like panels or swathes of pleated material, more or less correspondent with umbo, sinus and balteus, or applied over the same.\n[…]\nToga party\n[…]\nDoctor Toga\n[…]\nToga (Nova Roma) – How to make a toga\n[…]\nWilliam Smith's A Dictionary of Greek and Roman Antiquities on the toga"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toga",
        "situacao": "ok",
        "texto": "A toga uma vestimenta distinta da Roma antiga, era um tecido aproximadamente semicircular, entre 12 e 20 pés (3,7 e 6,1 m) de comprimento, drapeado sobre ombros e ao redor do corpo. Geralmente era tecido de lã branca e era usado sobre uma túnica. Na tradição histórica romana, diz-se que foi o vestido preferido de Rômulo, o fundador de Roma; também foi pensado para ter sido originalmente usado por \n[…]\nComo as mulheres romanas gradualmente adotaram a estola, a toga foi reconhecida como roupa formal para os cidadãos romanos do sexo masculino. Mulheres consideradas culpadas de adultério e mulheres envolvidas em prostituição podem ter fornecido as principais exceções a esta regra.\n[…]\nO tipo de toga usada refletia a posição de um cidadão na hierarquia civil. Várias leis e costumes restringiam seu uso aos cidadãos, que eram obrigados a usá-lo em festas públicas e deveres cívicos.\n[…]\nDesde seu provável início como uma roupa de trabalho simples e prática, a toga tornou-se mais volumosa, complexa e cara, cada vez mais inadequada para qualquer coisa que não fosse o uso formal e cerimonial. Foi e é considerado o \"traje nacional\" da Roma antiga; como tal, tinha grande valor simbólico; no entanto, mesmo entre os romanos, era difícil de vestir, desconfortável e difícil de usar corretamente e nunca verdadeiramente popular.\n[…]\nQuando as circunstâncias permitiam, aqueles que tinham direito ou eram obrigados a usá-lo optavam por roupas casuais mais confortáveis. Aos poucos, caiu em desuso, primeiro entre os cidadãos da classe baixa, depois entre os da classe média. Eventualmente, foi usado apenas pelas classes mais altas para ocasiões cerimoniais.\n[…]\nEstola (Roma Antiga)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Hermès",
      "descricao": "Grife francesa de artigos de luxo fundada em Paris em 1837 por Thierry Hermès"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Antes de virar grife de bolsas e lenços, a Hermès começou em Paris, em 1837, fabricando o quê?",
    "resposta": "Arreios para cavalos",
    "distratores": [
      "Baús de viagem",
      "Luvas de couro",
      "Relógios de bolso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Herm%C3%A8s"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Herm%C3%A8s",
        "situacao": "ok",
        "texto": "Hermès International S.C.A. (  air-MEHZ, French: [ɛʁmɛs] ), using the trade name Hermès Paris or simply Hermès, is a French luxury goods company that was founded in 1837 by Thierry Hermès in Paris, France. At that time, it specialized in the saddlery and harness making trade, producing equipment for horse riders and their horses.\n[…]\nBetween 1950 and 2000, this network expanded internationally. From the 2000s onwards, Hermès opened new “maisons”, flagship-style stores, in various countries. In September 2000, the second after 24 rue du Faubourg Saint-Honoré in Paris appeared in New York City, on Madison Avenue. Other Hermès “houses” would follow in 2001 in the Ginza district, in Tokyo, in 2006 in Seoul or in 2014 in Shanghai.\n[…]\nIt enables former craftsmen to give a second life to scraps of leather, fabric, silk or even buttons, buckles, Saint-Louis crystal and any other prestige material that has a defect and is destined to be used no more. Initially sold on an ad hoc basis, petit h productions have, since 2013, had their own dedicated space in the Hermès boutique at 17 rue de Sèvres in Paris.\n[…]\nSince it was founded in Paris in 1837 by Thierry Hermès, Hermès International has been run almost exclusively by him and his descendants. Today, Hermès is majority-owned by the family and has been headed since 2013 by Axel Dumas, a member of the sixth generation.\n[…]\nHermès International is listed on Euronext Paris and is a component of the CAC 40 :\n[…]\nHermès International is controlled, through Emile Hermès SAS, by the Hermès family group, which also holds, notably through H51 SAS, a majority stake in the company's share capital as an active partner. The Hermès family fortune was estimated in 2024 at 155 billion euros by the magazine Challenges.\n[…]\nOfficial Foundation Enterprise Hermès website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Herm%C3%A8s",
        "situacao": "ok",
        "texto": "Hermès é uma empresa francesa fundada em 1837 por Thierry Hermès como produtora de arreios para cavalos. Ao longo do tempo passou a produzir diversos produtos de luxo. A marca é a segunda mais valiosa do mundo, segundo o ranking BrandZ, avaliada em 19,8 milhões de dólares. Em 2017, sua avaliação de marca subiu para 25,951 bilhões de dólares, sendo considerada também a 2ª marca mais valiosa da Fran\n[…]\n1828 – A família Hermès se muda para Pont Audemer, ao norte de Paris, onde o Thierry Jr. aprende técnicas de fabricação de couro e passa a fazer couraças.\n[…]\n1837 – Thierry Hermes funda a marca francesa Hermès como oficina de arnês no bairro Grands Boulevards de Paris. Sua loja serve os nobres europeus da época. A oficina também produz arneses de ferro forjado e freios para comércio de carruagens.\n[…]\n1880 – O filho de Hermès, Charles-Emile Hermès, assume a gestão da oficina do pai e se muda para um local diferente, na 24 Rue du Faubourg Saint-Honore, onde a loja permanece até hoje. Aqui, ele continua com a manufatura de itens de montaria e passa a se concentrar nas vendas de varejo internacionais com linhas para a elite da Europa, Rússia, África do Norte, Ásia e as Américas.\n[…]\n1929 – A Hermès apresenta a primeira coleção feminina de vestuário de alta costura, que inclui roupas de banho e tem lançamento em Paris.\n[…]\n1978 – Jean Louis Dumas, filho do tataraneto de Thierry Hermès, assume a empresa e, no mesmo ano, a Hermès compra o prédio ao lado da loja na 24 Rue Faubourg Saint-Honoré, ampliando o seu carro-chefe em Paris.\n[…]\n2007 – Com a compra do edifício número 28 da Rue Faubourg Saint-Honore, a Hermès, mais uma vez, expande seu carro-chefe em Paris.\n[…]\n2010 - TheRealReal inicia venda online nos Estados Unidos de Bolsas Hermès usadas autenticadas\n[…]\n2013 - Etiqueta Única inicia venda online no Brasil de Bolsas Hermès usadas autenticadas\n[…]\nInstagram Oficial da Hermès\n[…]\nLinha do tempo da Hermès",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Minissaia",
      "descricao": "Saia muito curta, bem acima dos joelhos, popularizada na Londres dos anos 1960"
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Segundo a estilista britânica Mary Quant, que peça de roupa dos anos sessenta tirou o nome do seu carro favorito?",
    "resposta": "Minissaia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Miniskirt",
      "https://en.wikipedia.org/wiki/Mary_Quant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Miniskirt",
        "situacao": "ok",
        "texto": "A miniskirt (or mini-skirt, mini skirt, or mini) is a skirt with its hemline well above the knees, generally at mid-thigh level, normally no longer than 10 cm (4 in) below the buttocks; and a dress with such a hemline is called a minidress or a miniskirt dress. A micro-miniskirt or microskirt is a miniskirt with its hemline at the upper thigh, at or just below crotch or underwear level.\n[…]\nSeveral designers have been credited with the invention of the miniskirt, most significantly the London-based designer Mary Quant and the Parisian André Courrèges.\n[…]\nSeveral designers have been credited with the invention of the 1960s miniskirt, most significantly the London-based designer Mary Quant and the Parisian André Courrèges. Although Quant reportedly named the skirt after her favourite make of car, the Mini, there is no consensus as to who designed it first. Valerie Steele has noted that the claim that Quant was first is more convincingly supported by evidence than the equivalent Courrèges claim.\n[…]\nMary Quant\n[…]\nThe idea that John Bates, rather than Quant or Courrèges, innovated the miniskirt had an influential champion in Marit Allen, who as editor of the influential \"Young Ideas\" pages for UK Vogue, kept track of up-and-coming young designers. In 1966 she chose Bates to design her mini-length wedding outfit in white gabardine and silver PVC. In January 1965 Bates's \"skimp dress\" with its \"short-short skirt\" was featured in Vogue, and would later be chosen as the Dress of the Year.\n[…]\nEarly on, there was some opposition in the US to miniskirts as bad influences on the young, but this waned as people became more accustomed to them. Some European countries  banned mini-skirts from being worn in public, claiming they were an invitation to rapists. In response, Quant retorted that there was clearly no understanding of the tights worn underneath."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mary_Quant",
        "situacao": "ok",
        "texto": "Dame Barbara Mary Quant (11 February 1930 – 13 April 2023) was a British fashion designer and icon. She became an instrumental figure in the 1960s London-based Mod and youth fashion movements, and played a prominent role in London's Swinging Sixties culture. She was one of the designers who took credit for the miniskirt and hotpants. Ernestine Carter wrote: \"It is given to a fortunate few to be bo\n[…]\nIn recent fashion there are three: Chanel, Dior, and Mary Quant.\"\n[…]\nIn addition to the miniskirt, Quant is often credited with inventing the coloured and patterned tights that tended to accompany the garment, although their creation is also attributed to the Spanish couturier Cristóbal Balenciaga, who offered harlequin-patterned tights in 1962, or to John Bates or Jenny Elphinstone (nee Price) an art student at Guildford College of Art who also fashioned matching knickers for very short mini dresses.\n[…]\nIn 1988, Quant designed the interior of the Mini (1000) Designer (originally dubbed the Mini Quant, the name was changed when popularity charts were set against having Quant's name on the car). It featured black-and-white striped seats with red trimming. The seatbelts were red, and the driving and passenger seats had Quant's signature on the upper left quadrant. The steering-wheel had Quant's signature daisy and the bonnet badge had \"Mary Quant\" written over the signature name.\n[…]\nQuant, Mary (2011). Mary Quant Autobiography. Headline. ISBN 978-0-7553-6338-4.\n[…]\nLister, Jenny (2019). Mary Quant. Harry N. Abrams. ISBN 978-1-85177-995-6.\n[…]\nFelix, Rebecca (2018). Mary Quant: Miniskirt Maker. 1st in fashion. Abdo Publishing. ISBN 978-1-5321-1075-7.\n[…]\nMary Quant at FMD\n[…]\nMary Quant at IMDb\n[…]\nPortraits of Mary Quant at the National Portrait Gallery, London\n[…]\nMary Quant at the Victoria and Albert Museum, London Accessed 3 June 2010.\n[…]\nMary Quant – Miniskirt – Icons of England\n[…]\nOfficial website of Mary Quant Cosmetics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Minissaia",
        "situacao": "ok",
        "texto": "A minissaia (AO 1945: mini-saia) é um saia cuja bainha fica bem acima dos joelhos (geralmente 20 cm acima do joelho). A minissaia foi definida como o símbolo da moda \"Swinging London\" na década de 1960.\n[…]\nA mais antiga cultura conhecida em que as mulheres usavam minissaias era a Duan Qun Miao, que literalmente significa \"saia curta Miao\" em chinês. Isso foi em referência às saias curtas \"que mal cobrem as nádegas\" usada por mulheres da tribo e que eram \"provavelmente chocantes\" para os observadores do povo han durante a Idade Média e Idade Moderna.\n[…]\nO aspecto de saias, no ocidente, na década de 1960, foi geralmente creditados à estilista Mary Quant, que foi inspirado pelo Mini automóvel, embora o designer francês André Courrèges também é frequentemente citado como um pioneiro (os franceses referem-se à minissaia como la mini-jupe).\n[…]\nAs bainhas estavam logo acima do joelho em 1961 e gradualmente subiram nos anos seguintes. Em 1966, alguns designs tinham a bainha na parte superior da coxa. Meias com suspensórios (ligas) não eram consideradas práticas com minissaias e foram substituídas por meias coloridas. A aceitação popular das minissaias atingiu o pico na \"Swinging London\" da década de 1960 e continuou a ser comum, principalmente entre mulheres mais jovens e adolescentes.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «Miniskirt», especificamente desta versão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.34 — 2026-10-01**
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

- **A figura é a pergunta.** A resposta sai de **reconhecer o que a imagem mostra**: "Que cidade é esta?", "Que animal é este?", "Qual é este pokémon?", "Quem pintou este quadro?", "Em que museu fica este quadro?". Teste: se trocar "este animal" pelo nome dele deixasse a pergunta igualmente boa, a figura é só enfeite, e a pergunta está errada.
- **O enunciado é curto** e diz o que se deve reconhecer (cidade, animal, monumento). Pode trazer uma pista que ajude, desde que não entregue a resposta.
- **Âncora e ângulo:** a âncora é o que aparece na figura. Perguntar o que ela é dá o ângulo `identidade`; perguntar algo que só se sabe depois de reconhecê-la usa o ângulo correspondente (`autoria` para o pintor, `lugar` para o museu). As regras de variedade (§9), que limitam `identidade`, valem para os lotes do gerador e não para as perguntas com figura.
- **Tipos de figura:** lugares (cidades, monumentos, paisagens), animais, plantas, objetos e artesanato, festas populares, contornos de mapa, personagens de lendas e obras de arte em domínio público (pinturas, gravuras). Obras com direitos autorais, como as de Tarsila do Amaral, Portinari ou Dalí, ficam de fora.
- **Um único assunto por imagem:** nada de montagens nem pranchas com várias espécies. Vale foto; ilustração ou escultura só para o que não pode ser fotografado, como os personagens de lendas (Saci, Mula sem cabeça).
- **Pessoas:** figuras públicas, ou brincantes e participantes de festas públicas (Parintins, bumba meu boi, cavalhadas). Fotos de pessoas comuns em outros contextos continuam proibidas.
- **Recorte permitido:** uma placa ou legenda que entregue a resposta pode ser cortada da imagem, já que as licenças livres permitem obras derivadas.
- **Só imagens do Wikimedia Commons**, com licença livre (CC BY, CC BY-SA ou domínio público). Autor e licença são sempre registrados.
- **Exceção, Pokémon:** a arte oficial, com o crédito "© Nintendo / Creatures / GAME FREAK", e a Bulbapedia como fonte da âncora e da pergunta. A imagem vem do Bulbagarden Archives ou, como a Bulbapedia bloqueia acesso automatizado, da mesma arte oficial no repositório público do PokéAPI (`raw.githubusercontent.com/PokeAPI/sprites`), que fica registrado em `origem`. É uso privado, num jogo entre amigos, e não licença livre.
- **Proibido:** capas de álbuns, pôsteres, logotipos e fotos de imprensa.

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
- num lote de figuras de um tema, **pelo menos três famílias** e **pelo menos três catálogos**;
- nenhum catálogo passa de **40%** das perguntas com figura do seu tema;
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
