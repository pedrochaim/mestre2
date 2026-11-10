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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Biquíni",
      "descricao": "Traje de banho feminino de duas peças lançado pelo francês Louis Réard em 1946."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O biquíni, lançado em 1946, leva o nome de um atol do Pacífico que, dias antes, tinha sido palco de quê?",
    "resposta": "Testes de bombas atômicas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bikini",
      "https://pt.wikipedia.org/wiki/Biquíni"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bikini",
        "situacao": "ok",
        "texto": "A bikini is a women's two-piece swimsuit featuring a top piece covering the breasts, and a bottom piece covering the pelvis (usually excluding the navel) and some or all of the buttocks. The extent covered by both pieces can vary, from those that offer full coverage of the breasts, pelvis, and buttocks, to more revealing designs with thong or G-string bottoms that cover only the mons pubis and int\n[…]\nFrench automotive engineer Louis Réard then introduced a design he named the \"Bikini\" in Paris on July 5, 1946. Réard adopted the name from the Bikini Atoll in the Pacific Ocean, which was the colonial name the Germans gave to the atoll, borrowed from the Marshallese name for the island, Pikinni. Four days earlier, on 1 July 1946, the United States had initiated its first peacetime nuclear weapons test at Bikini Atoll as part of Operation Crossroads.\n[…]\nVarious motivations have been attributed to his choosing of the name, including the idea that he hoped it would create \"explosive commercial and cultural reaction\" similar to the explosion at Bikini Atoll, that it was meant to be associated with the \"exotic allure of the tropical Pacific\", from the \"comparison of the effects of a scantily clad woman to the atomic bomb,\" and the idea that Reard's design had out-done Heim's design and \"split the atome\".\n[…]\nIt has been frequently cited as a major example of a \"psychological link between atomic destruction and sexuality\" in popular culture, which includes the stenciling of Rita Hayworth onto one of the bombs detonated at Crossroads, and its persistence in language has been argued as having \"trivialized and downplayed the reality of nuclear testing,\" given the contamination done by especially later US thermonuclear tests at Bikini and other Marshallese atolls.\n[…]\nBikini in popular culture\n[…]\nMetropolitan Museum of Art exhibition—The Bikini\n[…]\nTwo-Piece Be With You: LIFE Celebrates the Bikini"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biquíni",
        "situacao": "ok",
        "texto": "O biquíni ou bikini é um conjunto de duas peças, derivadas do maiô, de tamanhos reduzidos, que cobrem o busto e a parte inferior do tronco. Seu nome deriva do atol de Bikini, um atol do Pacífico, usado para testes com bombas nucleares e em 5 de julho de 1946 ocorreu o seu lançamento, numa piscina de Paris. Assim, pretendia-se propor que a mulher de biquíni provocava, na época, o efeito de uma \"bom\n[…]\nO biquíni foi apresentado oficialmente em 5 de julho de 1946, na piscina pública Piscine Molitor, em Paris, poucos dias antes da temporada de desfiles de moda e durante o primeiro verão europeu após o fim da Segunda Guerra Mundial. O lançamento foi realizado por Louis Réard, engenheiro que passou a atuar na fábrica de lingeries de sua mãe no pós-guerra.\n[…]\nA criação do biquíni, contudo, é objeto de disputa. Ainda em 1946, Jacques Heim apresentou o modelo “Atome”, anunciado como “o menor maiô do mundo”. Semanas depois, Louis Réard lançou o “bikini”, promovido como “menor que o menor maiô do mundo”, o que lhe garantiu maior fama.\n[…]\nNuma mania de enrolar as laterais para ficar mais cavado, a parte de baixo do biquíni, esta atitude ficou conhecida de enroladinho e foi muito comum nas praias do Brasil nos anos de 1980, sendo o estopim para que estilistas criassem  o modelo de biquíni chamado de \"asa-delta\". O biquíni fio dental foi uma evolução do asa-delta, sendo lançado no Brasil e somente no Brasil, foi largamente usado.\n[…]\nO nome “biquíni” faz referência ao Atol de Bikini, local onde os Estados Unidos iniciaram testes nucleares poucos dias antes do lançamento da peça. A escolha do nome buscava sugerir o impacto e o caráter disruptivo do novo traje, em analogia ao contexto geopolítico do período.\n[…]\nDeutsche Welle - 1946: O primeiro biquíni"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Biquíni",
      "descricao": "Traje de banho feminino de duas peças lançado pelo francês Louis Réard em 1946."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Para apresentar o biquíni em 1946, Louis Réard contratou uma dançarina de cassino, porque as modelos profissionais fizeram o quê?",
    "resposta": "Recusaram-se a usá-lo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bikini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bikini",
        "situacao": "ok",
        "texto": "A bikini is a women's two-piece swimsuit featuring a top piece covering the breasts, and a bottom piece covering the pelvis (usually excluding the navel) and some or all of the buttocks. The extent covered by both pieces can vary, from those that offer full coverage of the breasts, pelvis, and buttocks, to more revealing designs with thong or G-string bottoms that cover only the mons pubis and int\n[…]\nThe modern bikini swimsuit was introduced by French clothing designer Louis Réard in July 1946, and was named after the Bikini Atoll, where the first public test of a nuclear bomb had taken place four days before.\n[…]\nFrench automotive engineer Louis Réard then introduced a design he named the \"Bikini\" in Paris on July 5, 1946. Réard adopted the name from the Bikini Atoll in the Pacific Ocean, which was the colonial name the Germans gave to the atoll, borrowed from the Marshallese name for the island, Pikinni. Four days earlier, on 1 July 1946, the United States had initiated its first peacetime nuclear weapons test at Bikini Atoll as part of Operation Crossroads.\n[…]\nSoon after, Louis Réard created a competing two-piece swimsuit design, which he called the bikini. He noticed that women at the beach rolled up the edges of their swimsuit bottoms and tops to improve their tan. On 5 July, Réard introduced his design at a swimsuit review held at a popular Paris public pool, Piscine Molitor, four days after the first test of a US nuclear weapon at the Bikini Atoll. The newspapers were full of news about it and Réard hoped for the same with his design.\n[…]\nHe announced that his swimsuit, was \"smaller than the world's smallest bathing suit\". Réard said that \"like the [atom] bomb, the bikini is small and devastating\". Fashion writer Diana Vreeland described the bikini as the \"atom bomb of fashion\". Bernardini received 50,000 fan letters, many of them from men.\n[…]\nBikini in popular culture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biqu%C3%ADni",
        "situacao": "ok",
        "texto": "O biquíni ou bikini é um conjunto de duas peças, derivadas do maiô, de tamanhos reduzidos, que cobrem o busto e a parte inferior do tronco. Seu nome deriva do atol de Bikini, um atol do Pacífico, usado para testes com bombas nucleares e em 5 de julho de 1946 ocorreu o seu lançamento, numa piscina de Paris. Assim, pretendia-se propor que a mulher de biquíni provocava, na época, o efeito de uma \"bom\n[…]\nO biquíni foi apresentado oficialmente em 5 de julho de 1946, na piscina pública Piscine Molitor, em Paris, poucos dias antes da temporada de desfiles de moda e durante o primeiro verão europeu após o fim da Segunda Guerra Mundial. O lançamento foi realizado por Louis Réard, engenheiro que passou a atuar na fábrica de lingeries de sua mãe no pós-guerra.\n[…]\nA criação do biquíni, contudo, é objeto de disputa. Ainda em 1946, Jacques Heim apresentou o modelo “Atome”, anunciado como “o menor maiô do mundo”. Semanas depois, Louis Réard lançou o “bikini”, promovido como “menor que o menor maiô do mundo”, o que lhe garantiu maior fama.\n[…]\nO primeiro biquíni moderno foi desfilado por Micheline Bernardini, então uma jovem dançarina do Cassino de Paris. A peça, confeccionada com cerca de 76 cm de tecido de algodão estampado com motivos que simulavam notícias de jornal, distinguia-se por suas dimensões reduzidas em relação aos trajes de banho da época. Sua escala era frequentemente destacada pela comparação com uma caixa de fósforos, utilizada como elemento cênico na apresentação.\n[…]\nO nome “biquíni” faz referência ao Atol de Bikini, local onde os Estados Unidos iniciaram testes nucleares poucos dias antes do lançamento da peça. A escolha do nome buscava sugerir o impacto e o caráter disruptivo do novo traje, em analogia ao contexto geopolítico do período.\n[…]\nDeutsche Welle - 1946: O primeiro biquíni",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Gravata",
      "descricao": "Peça de tecido usada amarrada ao pescoço, sob o colarinho da camisa."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra gravata vem do francês cravate, ligada aos lenços de pescoço de mercenários de qual povo, no século dezessete?",
    "resposta": "Croatas",
    "distratores": [
      "Húngaros",
      "Sérvios",
      "Poloneses"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Necktie",
      "https://pt.wikipedia.org/wiki/Gravata"
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
        "texto": "A gravata é uma tira de tecido, estreita e longa, que se usa em torno do pescoço e que é presa por um laço ou nó na parte da frente. Peça predominantemente do vestuário masculino.\n[…]\nO termo \"gravata\" deriva do francês \"cravate\", que por sua vez é uma corruptela de \"croat\", em referência aos mercenários croatas, que primeiro apresentaram a indumentária à sociedade parisiense.\n[…]\nAtribui-se a introdução da gravata aos soldados mercenários croatas a serviço da França durante a Guerra dos Trinta Anos. Os pedaços de tecidos, atados ao pescoço dos soldados com distintivos laços, teriam causado enorme alvoroço em toda a sociedade parisiense. Tal acessório era usado como distintivo militar pelos croatas, sendo de tecido rústico para os soldados e de algodão ou seda para os superiores.\n[…]\n“Por volta do ano 1635, cerca de seis mil soldados e cavaleiros vieram a Paris para dar suporte ao rei Luis XIV e ao Cardeal Richelieu. Entre eles, estava um grande número de mercenários croatas. O traje tradicional destes soldados despertou interesse por causa dos cachecóis incomuns e pitorescos enlaçados em seu pescoço. Os cachecóis eram feitos de vários tecidos, variando de material grosseiro para soldados comuns a seda e algodão para oficiais”.\n[…]\nOs franceses logo se encantaram com esse adereço elegante e desconhecido, que chamaram de \"cravat\", numa adaptação da palavra \"croata\", (em croata, Hrvati e em francês, Croates). O próprio Rei Luis XIV ordenou que seu alfaiate particular criasse uma peça semelhante ao dos croatas e que a incorporasse aos trajes reais.\n[…]\nFrançois Chaille (1994). La grande histoire de la cravate (em francês). Paris: Flammarion. 180 páginas. ISBN 978-2082018517"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Cardigã",
      "descricao": "Casaco de malha de lã, sem gola e abotoado na frente, batizado em homenagem ao sétimo conde de Cardigan."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O cardigã leva o nome de um conde britânico que comandou qual ataque desastroso de cavalaria na Guerra da Crimeia?",
    "resposta": "A Carga da Brigada Ligeira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cardigan_(sweater)",
      "https://en.wikipedia.org/wiki/James_Brudenell,_7th_Earl_of_Cardigan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cardigan_(sweater)",
        "situacao": "ok",
        "texto": "A cardigan is a type of knitted garment that has an open front and is worn like a jacket.\n[…]\nThe cardigan was named after James Brudenell, 7th Earl of Cardigan, a British Army major general who led the Charge of the Light Brigade at the Battle of Balaclava during the Crimean War. It is modelled after the knitted wool waistcoat that British officers supposedly wore during the war.\n[…]\nThe term originally referred only to a knitted sleeveless vest, but later it expanded to include other types of garment. Coco Chanel is credited with popularizing cardigans for women because \"she hated how tight-necked men's sweaters messed up her hair when she pulled them over her head.\" The garment is mostly associated with the college culture of the Roaring Twenties and early 1930s, being also popular throughout the 1950s, 1970s, 1990s, 2000s and into the early 2010s.\n[…]\nPlain cardigans are often worn over shirts and inside suit jackets as a less formal version of the waistcoat or vest that restrains the necktie when the jacket has been removed. They are versatile and can be worn in casual or formal settings and in any season, but they are most often worn in cool weather.\n[…]\nThe monochromatic cardigan, in sleeved or vest form, is a conservative fashion staple. As an item of formal clothing for any gender, it may be worn over a dress shirt. Less formally, it may be worn over a T-shirt.\n[…]\nVarsity letters for college and high school sports teams have been applied to cardigans and letterman jackets.\n[…]\nMedia related to Cardigan (sweater) at Wikimedia Commons\n[…]\nMedia related to Cardigans at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/James_Brudenell,_7th_Earl_of_Cardigan",
        "situacao": "ok",
        "texto": "Lieutenant-General James Thomas Brudenell, 7th Earl of Cardigan (16 October 1797 – 28 March 1868) was a British Army officer who commanded the Light Brigade during the Crimean War, leading its disastrous charge at the Battle of Balaclava. Throughout his life in politics and his long military career, Cardigan epitomized the arrogant and extravagant aristocrat of the period.\n[…]\nWhatever Cardigan's faults, he had always tried to ensure that the troops under his command were well-equipped. However, as the Crimean winter fell over the Light Brigade's exposed position, food, fodder, clothing and shelter were all in short supply. Beyond writing letters pointing out the deficiencies, Cardigan did nothing.\n[…]\nAssessments of Lord Cardigan have varied significantly over time.\n[…]\nTerry Brighton's 2005 book Hell Riders: The Truth about the Charge of the Light Brigade provides a critical account of Cardigan as a brigade commander but finds him in no way to blame for the charge.\n[…]\nThe Charge of the Light Brigade, a 1968 film based on Woodham-Smith's research, made Cardigan (played by Trevor Howard) its primary antagonist. The movie depicts Cardigan as a harsh disciplinarian, womaniser and military incompetent. It shows the \"black bottle\" affair, though it incorrectly makes Louis Nolan Cardigan's antagonist, and heavily features his rivalry with Lord Lucan. It also fictitiously shows Cardigan pursuing an affair with Fanny Duberly.\n[…]\nGeorge MacDonald Fraser's The Flashman Papers novels feature Cardigan as a recurring villain. In the first instalment he commands Flashman in the 11th Hussars and transfers him to India after he marries Elspeth, on the grounds that she is the daughter of a tradesman. Cardigan reappears in Flashman at the Charge, where Flashman catches Cardigan trying to seduce Elspeth. Flashman later reluctantly joins Cardigan for the Charge of the Light Brigade."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cardig%C3%A3",
        "situacao": "ok",
        "texto": "Cardigã é uma peça de vestuário em lã abotoada na parte frontal.\n[…]\nEsta peça de roupa foi criada durante a primeira metade do século XIX por James Thomas Brudenell, no País de Gales. Militar na Guerra da Crimeia, sentia-se pouco à-vontade dentro do seu pulôver regulamentar, e costurou o seu próprio cardigã. Mais tarde, o cardigã viria a ser aperfeiçoado, passando pela adição de botões na parte frontal da peça de vestuário.\n[…]\nCardigan Sweater.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Jaqueta perfecto",
      "descricao": "Jaqueta de couro de motociclista com zíper na diagonal, criada pela americana Schott em 1928."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A jaqueta de couro de motociclista perfecto, lançada pela americana Schott em 1928, tirou o nome de quê?",
    "resposta": "Charuto favorito do fundador",
    "distratores": [
      "Uma motocicleta Harley-Davidson",
      "Um filme de Hollywood",
      "Um clube de motociclistas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Perfecto_motorcycle_jacket"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Perfecto_motorcycle_jacket",
        "situacao": "ok",
        "texto": "Perfecto is a secondary brand of \"lancer fronted\" leather motorcycle jackets designed by Irving Schott and manufactured by the American clothing company, Schott NYC. The first jacket was introduced in 1928, making it the first such styled leather motorcycle jacket. There is some debate as to whether Marlon Brando wore a Schott Perfecto or a replica made by Durable in the 1953 seminal movie The Wil\n[…]\nEstablished as a manufacturer of motorcycle clothing in 1913, Schott, a Russian immigrant, named the brand after his favorite cigar, as he did not think his Jewish family name would sell the garments. It is said to be the first such jacket with zippers and has since come to define the look of motorcycle jackets.\n[…]\nNeck label is black with bull and cactus, Perfecto genuine steerhide - handcut Schott Bros. Small white size tag with red letters directly below neck label.\n[…]\nSchott NYC appears on neck label, small white size tag with black letters directly to the right of neck label, tag with an American flag and Made in the U.S.A. directly to the right of neck label (under small white size tag). Nothing printed on leather neck hanger. Schott (YKK) main zipper, EMAR cuff zippers, and rectangular belt buckle with oval sides. Pocket zippers now close down. The lining goes all the way down inside of jackets leather sleeve plackets.\n[…]\nSchott stops producing the 613 One Star. Underarm footballs, two piece underside sleeves, oval lower back panel, inside pocket and snaps on collar are introduced. Snaps for attaching fur collar are removed (no fur collar produced). Snaps have Schott stamped on them. Motorcycle rider instead of bull appears on neck label, size is printed on the American flag tag. Leather inner lower facing. Side pockets are at an approx.\n[…]\nOne for the History Books Schott NYC"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Paisley",
      "descricao": "Estampa de motivos em forma de gota curvada, de origem persa, batizada com o nome de uma cidade têxtil escocesa"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No Brasil, a estampa paisley, de gotas curvadas, também é chamada pelo nome de qual região asiática, famosa por seus xales?",
    "resposta": "Caxemira",
    "distratores": [
      "Tibete",
      "Bengala",
      "Punjab"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Paisley_(design)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paisley_(design)",
        "situacao": "ok",
        "texto": "Paisley or paisley pattern is an ornamental textile design using the boteh (Persian: بته) or buta, a teardrop-shaped motif with a curved upper end. Of Iranian/Persian origin, paisley designs became popular in the West in the 18th and 19th centuries, following imports of post-Mughal Empire versions of the design from India, especially in the form of Kashmir shawls, and were then replicated locally.\n[…]\nThe Fender Musical Instruments Corporation made a pink paisley version of their Telecaster guitar by putting paisley wallpaper onto the guitar bodies.\n[…]\nPrince paid tribute to the rock and roll history of paisley when he created the Paisley Park Records recording label and established Paisley Park Studios, both named after his 1985 song \"Paisley Park\". The Paisley Underground was a music scene active around the same time.\n[…]\nPaisley was a favorite design element of British-Indian architect Laurie Baker. He has made numerous drawings and collages of what he called \"mango designs\". He used to include the shape in the buildings he designed also.\n[…]\nThe modern French words for paisley are boteh (meaning bush, cluster of leaves or a flower bud) in Persian as well as cachemire (Cachemire (tissu)) and palme (\"palm\", which – along with the pine and the cypress – is one of the traditional botanical motifs thought to have influenced the shape of the paisley element as it is now known).\n[…]\nIn Chinese, paisley is known as the \"ham hock pattern\" (Chinese: 火腿纹; pinyin: huǒtuǐwén) in mainland China, or \"amoeba pattern\" in Taiwan (Chinese: 變形蟲; pinyin: biànxíngchóng). In Russia, this ornament is known as \"cucumbers\" (огурцы).\n[…]\nReilly, Valerie (1987). The Paisley Pattern: The Official Illustrated History. Glasgow: Richard Drew. ISBN 978-0-87905-317-8..\n[…]\nMedia related to Paisley pattern at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caxemira_%28estampa%29",
        "situacao": "ok",
        "texto": "Caxemira é um padrão de estampa de folhas estilizadas e curvadas que era muito reproduzida em lenços, xales e túnicas coloridas em tecido de tramas intercaladas com pelos de cabra da região da Caxemira (fronteira da Índia com o Paquistão).\n[…]\nAcredita-se também que a forma semelhante a sementes represente a fertilidade, tenha conexões com o hinduísmo e também tenha uma semelhança intrigante com o famoso símbolo yin-yang. Ainda é um motivo extremamente popular no Irã e países da Ásia Central e do Sul e é tecido usando fios de prata e ouro para sedas e lãs finas para casamentos e outras celebrações.\n[…]\nImportado da rota da seda nos séculos XVIII e XIX, a caxemira era um tecido muito caro que passou por diversas adaptações até se tornar acessível em 1808, em uma cidade escocesa chamada Paisley, e em virtude deste fato a estampa também é conhecida como paisley.\n[…]\nHá um retrato da imperatriz Josefina, consorte de Napoleão, pintado por Antoine-Jean Gros, intitulado L'Impératrice Josephine, no qual ela não apenas tem um xale de caxemira sobre o ombro, mas também um vestido feito de xales. Outros xales representados em pinturas de época incluem o Retrato da Marquesa de Sorcy de Thélusson de 1790 por Jacques Louis David e da Madame Rivière de 1805 por Jean Auguste Dominique Ingres.\n[…]\nNos anos 1960 e 1970, o caxemira tornou-se para uma geração de jovens insatisfeitos um símbolo de protesto à Guerra do Vietnã, foi popularizado pelos Beatles, inaugurando a era hippie e tornou-se um emblema do rock'n'roll.\n[…]\nReilly, Valerie (1987), The Paisley Pattern: The Official Illustrated History, ISBN 0-87905-317-8, Glasgow: Richard Drew .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Chapéu-coco",
      "descricao": "Chapéu de feltro duro com copa arredondada, criado em Londres em 1849."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em inglês, o chapéu-coco se chama bowler. De onde vem esse nome?",
    "resposta": "Chapeleiros que o fabricaram",
    "distratores": [
      "Jogadores de boliche",
      "Jogadores de críquete",
      "Formato de tigela"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bowler_hat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bowler_hat",
        "situacao": "ok",
        "texto": "The bowler hat, also known as a Coke hat, billycock, bob hat, or derby (United States), is a hard felt hat with a rounded crown, originally created by the London hat-makers Thomas and William Bowler in 1849 and commissioned by Lock & Co. Hatters of St James's Street, London. It has traditionally been worn with semi-formal and informal attire.\n[…]\nJ. Wellington Wimpy wears a bowler hat.\n[…]\nDoctor King Schultz and \"Butch\" Pooch wear wide Derby-variant bowler hats in Django Unchained.\n[…]\nUb Iwerks character Horace Horsecollar is seen wearing an orange bowler hat complementing his outfit with an orange horse collar.\n[…]\nJosé Rizal, a Filipino patriot and national hero, wore a bowler hat before his execution by firing squad in 1896.\n[…]\nThe Plug Uglies, a nineteenth-century American street gang, wore bowler hats stuffed with cloth or wool to protect their heads while fighting.\n[…]\nJohn Bonham, drummer for Led Zeppelin, often wore a bowler hat.\n[…]\nEdward Coke, for whom the first bowler hat was designed.\n[…]\nLou Costello of Abbott and Costello often wore a bowler hat.\n[…]\nLaurel and Hardy are known for wearing bowler hats.\n[…]\nCurly Howard and Shemp Howard of The Three Stooges frequently wore bowler hats.\n[…]\nBoy George often wore a bowler hat during the 1980s.\n[…]\nBig Bully Busick, professional wrestler, who wore a bowler hat as part of his 1920s bully gimmick.\n[…]\nBeebe, Lucius (1967). \"Whatever Became of the Derby Hat?\". In Clegg, Charles; Emrich, Duncan (eds.). The Lucius Beebe Reader. Garden City, N.Y.: Doubleday & Company. pp. 368–371. LCCN 67-90214. OCLC 1036554388. Originally published in the May 1966 issue of Gourmet.\n[…]\nRobinson, Fred Miller (1993). The Man in the Bowler Hat: His History and Iconography (First hardcover ed.). Chapel Hill, NC and London: The University of North Carolina Press. ISBN 9780807820735. OCLC 26855812.\n[…]\nMedia related to Bowler hats at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chap%C3%A9u-coco",
        "situacao": "ok",
        "texto": "O chapéu-coco (português brasileiro) ou chapéu de coco (português europeu) (chamado de Bowler hat em inglês) é um chapéu duro, de copa redonda e aba bem curvada dos lados, usado pelos homens no fim do século XIX. Na Inglaterra, após a Primeira Guerra Mundial, passou a ser aceito em ocasiões formais, substituindo a cartola. Feito de feltro de lã ou pêlo, era muito popular e, até aos anos 50 e 60, e",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Suéter",
      "descricao": "Peça de vestuário de malha de tricô, em geral de mangas compridas, que cobre a parte superior do corpo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome suéter vem do inglês sweater. O que essa palavra inglesa significa literalmente?",
    "resposta": "Aquilo que faz suar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sweater",
      "https://www.etymonline.com/word/sweater"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sweater",
        "situacao": "ok",
        "texto": "A sweater (North American English) or pullover, also called a jersey or jumper (British English, Hiberno-English and Australian English), is a piece of clothing, typically with long sleeves, made of knitted or crocheted material that covers the upper part of the body. When sleeveless, the garment is often called a slipover,  tank top, or sweater vest.\n[…]\nThe term \"sweater\" is a catch-all for a variety of knit garments. Although the term often refers to a pullover, it can also refer to a cardigan, a garment that opens and fastens down the front. Within either group, there is a great variety of designs. Various necklines are found, although the V-neck, turtleneck, and crew neck are the most popular. The hemline is typically at hip height or slightly longer, just overlapping the waist of one's pants or skirt, but can vary significantly.\n[…]\nSweaters are often maintained by washing or dry cleaning and the use of a lint roller or pill razor. But airing (and rinsing in pure water if necessary) wool sweaters is considered better than washing with soap or another detergent, especially when not all of the natural oil (lanolin) has been removed from the wool. The use of detergent is in fact detrimental because it removes the lanolin, which helps the wool to repel and shed dirt as well as water.\n[…]\nIn fact, sweaters made from unscoured wool, such as some Irish Aran jumpers, remain wearable even when wet.\n[…]\nThe uniforms that present-day ice hockey players wear are referred to as \"sweaters\". This is because original uniforms were simply sweaters with the team's crest stitched on the front. However, as technology changed, so did the uniforms as actual sweaters absorbed too much moisture and became weighed down and cumbersome throughout the course of a game.\n[…]\nSweater curse\n[…]\nSweater design"
      },
      {
        "url": "https://www.etymonline.com/word/sweater",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Su%C3%A9ter",
        "situacao": "ok",
        "texto": "Suéter ou camisola é uma peça de roupa fechada destinada a cobrir o torso e os braços. Tende a ser feita de malha de lã, embora sejam encontrados modelos de algodão, fibras sintéticas ou fabricados a partir da combinação de diversas matérias-primas.\n[…]\nUm suéter sem mangas é chamado de pulôver que é colocado sob uma camisa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Poulaine",
      "descricao": "Sapato medieval europeu de bico longo e pontudo, moda nos séculos quatorze e quinze"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na França medieval, os sapatos de bico longuíssimo se chamavam poulaines porque se acreditava que a moda vinha de qual país?",
    "resposta": "Polônia",
    "distratores": [
      "Hungria",
      "Boêmia",
      "Lituânia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Crakow_(shoe)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Crakow_(shoe)",
        "situacao": "ok",
        "texto": "Poulaines, also known by other names, were a style of unisex footwear with extremely long toes that were fashionable in Europe at various times in the Middle Ages. The poulaine proper was a shoe or boot of soft material whose elongated toe (also known as a poulaine or pike) frequently required filling to maintain its shape.\n[…]\nThe usual English name poulaine () is a borrowing and clipping of earlier Middle French soulers a la poulaine (\"shoes in the Polish fashion\") from the style's supposed origin in medieval Poland. They have also been known as pikes from the common weapon of the era; as piked, peaked, or copped shoes; as cracows, crakows, and krakows from the former Polish capital; or simply as pointed shoes, pointy shoes, or long toed shoes.\n[…]\nPoulaine toes were packed with stuffing to provide rigidity and help them hold their shape. Surviving examples from medieval London have the points stuffed with moss. An Italian chronicler noted in 1388 that they were also sometimes stuffed with horsehair.\n[…]\nPattens were protective overshoes frequently worn in the late medieval and early modern period to protect footwear from mud and filth while outdoors. They were typically made from wood and fitted to the shoe with leather straps. The name poulaine was sometimes used for the elongated pattens necessary to protect the full length of the long-toed shoes of the period.\n[…]\nSabatons were the protective footwear used with medieval European armor. During the period that poulaines were in fashion, the sabatons sometimes became similarly awkwardly long or pointed and interfered with soldiers' ability to walk or run. At the 1386 Battle of Sempach, it became necessary for the knights of Leopold III, Duke of Austria, to quickly dismount and fight on foot."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "New Look",
      "descricao": "Primeira coleção de Christian Dior, de 1947, com cintura marcada e saias amplas"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome New Look nasceu da exclamação de uma editora ao ver a primeira coleção de Christian Dior, em 1947. De qual revista?",
    "resposta": "Harper's Bazaar",
    "distratores": [
      "Vogue",
      "Vanity Fair",
      "Life"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/New_Look_(fashion)",
      "https://en.wikipedia.org/wiki/Carmel_Snow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/New_Look_(fashion)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carmel_Snow",
        "situacao": "ok",
        "texto": "Carmel Snow (born Carmel White; 21 August 1887 – 7 May 1961) was the editor-in-chief of the American edition of Harper's Bazaar from 1934 to 1958; and the chair of the magazine's editorial board. She was famously quoted as saying, \"Elegance is good taste, plus a dash of daring\".\n[…]\nIn 1929 her brother Tom White became general manager of the Hearst publishing organization. Though Carmel had promised Condé Nast she would not take a job there, she ultimately did take a job at Harper's Bazaar. In 1932 Carmel became the fashion editor of Harper's Bazaar. She famously described her goal at Harper's Bazaar as creating a magazine for \"well-dressed women with well-dressed minds\".\n[…]\nShe discovered Martin Munkacsi, and in 1933 persuaded him to photograph the Harper's Bazaar December edition's 'Palm Beach' bathing suit editorial. For this editorial, he had the model Lucille Brokaw run toward the camera while he photographed, which was the first instance of a fashion model being photographed in motion.\n[…]\nShe became editor-in-chief of Harper's Bazaar in 1934.\n[…]\nShe hired her art director Alexey Brodovitch based on a 1934 exhibition of his work in graphic design at the Art Directors Club of New York. She described his exhibit as a revelation, mentioning \"pages that bled beautifully, cropped photographs, typography and design that were bold and interesting\". She found her fashion editor, Diana Vreeland, after noticing her dancing across a crowded room.\n[…]\nIn 1947 she exclaimed, \"It's such a new look!\" or \"Your dresses have such a new look!\", thus coining that phrase regarding Christian Dior's 1947 collection.\n[…]\nShe was portrayed by Glenn Close in the television series The New Look."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "New Look",
      "descricao": "Primeira coleção de Christian Dior, de 1947, com cintura marcada e saias amplas"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1947, com a Europa ainda sob racionamento, o New Look de Dior foi alvo de protestos por causa de quê?",
    "resposta": "O excesso de tecido",
    "fonte": [
      "https://en.wikipedia.org/wiki/New_Look_(fashion)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/New_Look_(fashion)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Carmen Miranda",
      "descricao": "Cantora e atriz luso-brasileira famosa pelos turbantes de frutas em Hollywood"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa do talento e da baixa estatura, a cantora Carmen Miranda ganhou no Brasil qual apelido?",
    "resposta": "A Pequena Notável",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carmen_Miranda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carmen_Miranda",
        "situacao": "ok",
        "texto": "Maria do Carmo Miranda da Cunha (Marco de Canaveses, 9 de fevereiro de 1909 – Beverly Hills, 5 de agosto de 1955), mais conhecida como Carmen Miranda, foi uma cantora, dançarina, e atriz luso-brasileira. Sua carreira artística transcorreu no Brasil e nos Estados Unidos entre as décadas de 1930 e 1950. Trabalhou no rádio, no teatro de revista, no cinema e na televisão.\n[…]\nEra a segunda filha do barbeiro José Maria Pinto da Cunha (Marco de Canaveses, Várzea da Ovelha e Aliviada, 17 de fevereiro de 1887 – Rio de Janeiro, 20 de junho de 1938) e de sua mulher, Maria Emília de Miranda (Marco de Canaveses, Várzea da Ovelha e Aliviada, 3 de março de 1886 – Rio de Janeiro, 9 de novembro de 1971). Ganhou o apelido de Carmen no Brasil, graças ao gosto que seu tio Amaro tinha por óperas.\n[…]\nO êxito do filme levou a Cinédia a chamá-la para um novo musical, Bonequinha de Seda. Esta, por algum motivo não elucidado, provavelmente devido a uma viagem à Argentina, não aceitou o papel, que foi dado a Gilda de Abreu. Miranda logo passou a ser chamada de \"A Pequena Notável\" — devido à sua estatura baixa, apelido dado, na época, pelo radialista César Ladeira. Em seu filme seguinte, Estudantes (1935), Carmen Miranda foi, pela primeira vez, escalada para um papel narrativo.\n[…]\nRichard Brody, do The New Yorker, escreveu que o filme é um exemplo notável de como a arte cinematográfica pode expandir os limites do gênero musical e permanecer relevante décadas depois. Durante as filmagens, Carmen Miranda estava lidando com uma pequena falha no nariz, resultado de uma plástica mal-sucedida, mas conseguiu escondê-la com maquiagem. Após o término das gravações, ela passou por outra cirurgia, que quase lhe custou a vida devido a uma infecção no fígado.\n[…]\n1999 - \"Carmen Miranda - A Pequena Notável\"\n[…]\nCarmen Miranda no IMDb\n[…]\nCarmen Miranda no Dicionário Cravo Albin da Música Popular Brasileira"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Carmen Miranda",
      "descricao": "Cantora e atriz luso-brasileira famosa pelos turbantes de frutas em Hollywood"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Símbolo do Brasil em Hollywood, com seus turbantes de frutas, a cantora Carmen Miranda nasceu em qual país?",
    "resposta": "Portugal",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carmen_Miranda",
      "https://en.wikipedia.org/wiki/Carmen_Miranda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carmen_Miranda",
        "situacao": "ok",
        "texto": "Maria do Carmo Miranda da Cunha (Marco de Canaveses, 9 de fevereiro de 1909 – Beverly Hills, 5 de agosto de 1955), mais conhecida como Carmen Miranda, foi uma cantora, dançarina, e atriz luso-brasileira. Sua carreira artística transcorreu no Brasil e nos Estados Unidos entre as décadas de 1930 e 1950. Trabalhou no rádio, no teatro de revista, no cinema e na televisão.\n[…]\nNasceu a 9 de fevereiro de 1909 no lugar da Obra Nova, freguesia da Aliviada (posteriormente, Várzea da Ovelha e Aliviada), no concelho de Marco de Canaveses, em Portugal. Foi batizada com o nome de Maria do Carmo na igreja de São Martinho da Aliviada (posteriormente, Várzea da Ovelha e Aliviada), anexa à igreja de Várzea da Ovelha, a 14 de fevereiro de 1909.\n[…]\nEra a segunda filha do barbeiro José Maria Pinto da Cunha (Marco de Canaveses, Várzea da Ovelha e Aliviada, 17 de fevereiro de 1887 – Rio de Janeiro, 20 de junho de 1938) e de sua mulher, Maria Emília de Miranda (Marco de Canaveses, Várzea da Ovelha e Aliviada, 3 de março de 1886 – Rio de Janeiro, 9 de novembro de 1971). Ganhou o apelido de Carmen no Brasil, graças ao gosto que seu tio Amaro tinha por óperas.\n[…]\nEm 2015, o grupo português Real Combo Lisbonense lançou o álbum Saudade De Você, pela Pataca Discos, que apresenta interpretações de algumas das canções mais conhecidas de Carmen Miranda, celebrando sua música e legado.\n[…]\nOs direitos autorais de Carmen Miranda, segundo as leis brasileiras, estiveram em posse dos seus herdeiros até 2025, quando se completaram setenta anos da sua morte. Em 2008, Carmem Guimarães e Maria Paula (sobrinhas de Carmen) se juntaram com outros dois herdeiros, Gabriel (irmão de Maria Paula) e Suely (filha adotiva de Mário, irmão de Carmen) e criaram a Carmen Miranda Administração e Licenciamento, com o objetivo de gerir a imagem da artista e aumentar a sua receita.\n[…]\nCarmen Miranda no IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carmen_Miranda",
        "situacao": "ok",
        "texto": "Maria do Carmo Miranda da Cunha (9 February 1909 – 5 August 1955), known professionally as Carmen Miranda (Portuguese pronunciation: [ˈkaʁmẽj miˈɾɐ̃dɐ]), was a Portuguese-born Brazilian singer, dancer, and actress. Nicknamed \"the Brazilian Bombshell,\" she was known for her signature fruit hat outfits that she wore in her American films.\n[…]\nMiranda was born Maria do Carmo Miranda da Cunha in 1909 in Várzea da Ovelha e Aliviada, a village in the northern Portuguese municipality of Marco de Canaveses. She was the second daughter of José Maria Pinto da Cunha (17 February 1887 – 21 June 1938) and Maria Emília Miranda (10 March 1886, Rio de Janeiro – 9 November 1971).\n[…]\nThe family's emigration to Brazil was already scheduled; however, upon finding herself pregnant, Carmen Miranda's mother preferred to wait for her daughter's birth. In 1909, her father emigrated to Brazil and settled in Rio de Janeiro, where he opened a barber shop. Her mother followed in 1910 with their daughters, Olinda (1907–1931) and Carmen, who was less than a year old. Although Carmen never returned to Portugal, she retained her Portuguese nationality.\n[…]\nMiranda's older sister, Olinda, developed tuberculosis and was sent to Portugal for treatment; the singer worked in a tie shop at age 14 to help pay her sister's medical bills. She then worked in a boutique (where she learned to make hats) and opened a successful hat business.\n[…]\nMiranda's Hollywood image was that of a generic Latina, blurring distinctions between Brazil, Portugal, Argentina, and Mexico and samba, tango and habanera music. It was stylized and flamboyant; she often wore platform sandals and towering headdresses made of fruit, becoming known as \"the lady in the tutti-frutti hat\".\n[…]\nCardoso, Abel. Carmen Miranda, a Cantora do Brasil. Sorocaba. 1978. (Portuguese)\n[…]\nCarmen Miranda at IMDb"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Crinolina",
      "descricao": "Armação rígida de aros usada sob as saias para deixá-las amplas e rodadas"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Entre os anos 1850 e 1860, milhares de mulheres morreram por causa das enormes saias armadas com crinolina. Como?",
    "resposta": "As saias pegavam fogo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Crinoline"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Crinoline",
        "situacao": "ok",
        "texto": "A crinoline ( KRIN-əl-in) is a stiff or structured petticoat designed to hold out a skirt, popular at various times since the mid-19th century. Originally, crinoline described a stiff fabric made of horsehair (\"crin\") and cotton or linen which was used to make underskirts and as a dress lining. The term crin or crinoline continues to be applied to a nylon stiffening tape used for interfacing and l\n[…]\nThe French sociologist and economist Frédéric le Play carried out surveys of French working-class families' wardrobes from 1850 to 1875, in which he found that two women had crinolines in their wardrobe, both wives of skilled workers. One, the fashion-conscious wife of a glove-maker, owned two crinolines and eleven dresses, although her usual everyday clothing consisted of wooden shoes and printed aprons.\n[…]\nThe crinoline was worn by some factory workers, leading to the textiles firm Courtaulds instructing female employees in 1860 to leave their hoops and crinolines at home. Cecil Willett Cunnington described seeing a photograph of female employees in the Bryant and May match factories wearing crinolines while at work.\n[…]\nCrinolines continue to be worn well into the 21st century, typically as part of formal outfits such as evening gowns, prom dresses, quinceañera dresses, and wedding dresses.\n[…]\nIt was noted that hoop skirts and crinolines had been worn by both black and white women of all classes and social standings during the historical period in question, and that despite popular associations, they were not exclusive to the image of the Southern Belle.\n[…]\nMay, Brian; Pellerin, Denis (2016). Crinoline: Fashion's Most Magnificent Disaster. London: London Stereoscopic Company. ISBN 978-0957424623.\n[…]\n\"Crinoline\" . Encyclopædia Britannica (11th ed.). 1911."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crinolina",
        "situacao": "ok",
        "texto": "As crinolinas eram armações usadas sob as saias para lhes conferir volume, sem a necessidade do uso de inúmeras anáguas. Seu uso marca o momento em que surge a indústria da moda propriamente dita, sendo este o primeiro modismo que poderíamos chamar de \"universal\".\n[…]\nEra casado com a belíssima nobre espanhola Eugênia de Montijo, mulher refinada e de grande inteligência, que detestava o desconforto produzido pelas 9 anáguas engomadas que eram usadas para armar as saias na corte.\n[…]\nApós a Guerra Franco-Prussiana, com o final do 2.º Império e o exílio de Napoleão III e Eugênia, as crinolinas caíram em descrédito, sendo substituídas pelas tournures (\"anquinhas\") que armavam apenas a parte traseira das saias e vestidos e assumiram protagonismo no final da década de 1880.\n[…]\nAs crinolinas ofereciam riscos às mulheres, entre eles a vulnerabilidade a ventanias pelo seu formato de balão: há relatos de mulheres à beira de píeres em zonas portuárias que foram carregadas pelo vento até o mar, onde se afogaram. Outras milhares — incluindo a segunda esposa do poeta Henry Wadsworth Longfellow — morreram queimadas quando as saias, muito rodadas (na sua parte mais larga uma crinolina podia chegar a 5,5 metros de circunferência), eram incendiadas por velas e lareiras acesas.\n[…]\nAlém do fogo, havia o risco de as saias ficarem presas ao maquinário e às rodas das carruagens. Há também relatos de mortes por eletrocussão, em ambientes já servidos por energia elétrica.\n[…]\nTambém consta que no ano de 1863 em Santiago, Chile, entre 2.000 e 3.000 pessoas morreram em um incêndio em uma igreja quando um lampião ateou fogo a um tecido na parede. As pessoas tentaram escapar das chamas pela saída, mas várias mulheres com esta peça de vestuário acabaram por bloquear a porta.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Sapatinhos de rubi",
      "descricao": "Sapatos mágicos vermelhos usados por Dorothy, personagem de Judy Garland, no filme O Mágico de Oz, de 1939."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No filme O Mágico de Oz, de 1939, os sapatos de Dorothy trocaram a cor do livro pelo vermelho para valorizar qual novidade?",
    "resposta": "O Technicolor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ruby_slippers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ruby_slippers",
        "situacao": "ok",
        "texto": "The ruby slippers are a pair of magical shoes worn by Dorothy Gale as played by Judy Garland in the 1939 Metro-Goldwyn-Mayer musical film The Wizard of Oz. Because of their iconic stature, they are as of December 2024 the most valuable items of film memorabilia in the world. Several pairs were made for the film, though the exact number is unknown. Five pairs are known to have survived; one pair wa\n[…]\nIn L. Frank Baum's original 1900 novel, The Wonderful Wizard of Oz, on which the film is based, Dorothy wears Silver Shoes. However, the color of the shoes was changed to red to take advantage of the three-strip Technicolor film process used in some big-budget prestigious Hollywood films of the era. Screenwriter Noel Langley is credited with the idea.\n[…]\nThe shoes were dyed red, and burgundy sequined organza overlays were attached to each shoe's upper and heel. The three-strip Technicolor film process required the sequins to be darker than most modern red sequins; bright red sequins would have looked orange on screen. Two weeks before the start of shooting, Adrian added butterfly-shaped red strap leather bows.\n[…]\nIn \"At The Auction of the Ruby Slippers\", a short story in Salman Rushdie's 1994 anthology East, West, various members of a destitute world attend an auction to bid for the ruby slippers of Dorothy Gale in The Wizard of Oz, in the hope their transformative powers will help them achieve personal and political ends.\n[…]\nThe progressive band Electric Light Orchestra used a frame from the 1939 film on the cover of their fourth studio album, Eldorado, released in 1974. The cover, designed by John Kehe, is a mirrored still frame of Dorothy's ruby slippers. This still was also used for the picture sleeve of \"Can't Get It Out of My Head\", the single release from the Eldorado album.\n[…]\nRuby Slippers at the National Museum of American History"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Velcro",
      "descricao": "Sistema de fecho de gancho e argola inventado pelo engenheiro suíço George de Mestral."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois de um passeio com o cachorro, o suíço George de Mestral criou o velcro inspirado no que viu grudado no pelo do animal. O quê?",
    "resposta": "Carrapichos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hook-and-loop_fastener",
      "https://en.wikipedia.org/wiki/George_de_Mestral"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hook-and-loop_fastener",
        "situacao": "ok",
        "texto": "Velcro is a brand of versatile fastening devices, known as hook-and-loop fasteners, hook-and-pile fasteners, or touch fasteners, that allow two surfaces to be repeatedly attached and detached with ease. A trademark of Velcro Companies, the brand name is often used generically to refer to this type of fastener. Invented in the mid-20th century, it is widely used in clothing, accessories, and variou\n[…]\nThe original hook-and-loop fastener was conceived in 1941 by Swiss engineer George de Mestral, which he named velcro. The word Velcro is a portmanteau of two French words: \"velours\" meaning velvet, and \"crochet\" meaning hook. The idea came to him one day after he returned from a hunting trip with his dog in the Alps. He took a close look at the burs of burdock that kept sticking to his clothes and his dog's fur.\n[…]\nThe big breakthrough de Mestral made was to think about hook-and-eye closures on a greatly reduced scale. Hook-and-eye fasteners have been common for centuries, but what was new about hook-and-loop fasteners was the miniaturisation of the hooks and eyes. Shrinking the hooks led to the two other important differences. First, instead of a single-file line of hooks, hook-and-loop fasteners have a two-dimensional surface.\n[…]\nDe Mestral obtained patents in many countries right after inventing the fasteners, as he expected an immediate high demand. Owing partly to its cosmetic appearance, though, hook-and-loop's integration into the textile industry took time. At the time, the fasteners looked as though they had been made from leftover bits of cheap fabric, and thus were not sewn into clothing or used widely when it debuted in the early 1960s. It was also regarded as impractical.\n[…]\nASTM D5170-98 (2010) Standard Test Method for Peel Strength (\"T\" Method) of Hook and Loop Touch Fasteners\n[…]\nMedia related to Hook-and-loop fasteners at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/George_de_Mestral",
        "situacao": "ok",
        "texto": "George de Mestral ((1907-06-19)19 June 1907 – (1990-02-08)8 February 1990) was a Swiss electrical engineer who invented the hook and loop fastener which he named Velcro.\n[…]\nDe Mestral died in Commugny, Switzerland, where he is buried. The municipality posthumously named an avenue, L'avenue George de Mestral, in his honour.\n[…]\nHe was inducted into the National Inventors Hall of Fame in 1999 for inventing hook and loop fasteners.\n[…]\nDe Mestral first conceptualised hook and loop after returning from a hunting trip with his dog in the Alps in 1941. After removing several of the burdock burrs (seeds) that kept sticking to his clothes and his dog's fur, he became curious as to how it worked. He examined them under a microscope, and noted hundreds of \"hooks\" that caught on anything with a loop, such as clothing, animal fur, or hair.\n[…]\nDe Mestral gave the name Velcro, a portmanteau of the French words velours (\"velvet\"), and crochet (\"hook\"), to his invention as well as his company, which continues to manufacture and market the fastening system.\n[…]\nHowever, hook and loop's integration into the textile industry took time, partly because of its appearance. Hook and loop in the early 1960s looked like it had been made from left-over bits of cheap fabric, an unappealing aspect for clothiers. The first notable use for Velcro® brand hook and loop came in the aerospace industry, where it helped astronauts manoeuvre in and out of bulky space suits. Eventually, skiers noted the similar advantages of a suit that was easier to get in and out of.\n[…]\n\"George de Mestral\" in  German, French and Italian in the online Historical Dictionary of Switzerland."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Meia de náilon",
      "descricao": "Meia feminina fina feita de náilon, lançada pela DuPont nos Estados Unidos"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Quando as meias de náilon voltaram às lojas americanas, logo após a Segunda Guerra, o que a enorme procura provocou?",
    "resposta": "Tumultos nas filas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nylon_riots"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nylon_riots",
        "situacao": "ok",
        "texto": "The nylon riots were a series of disturbances at American stores created by a nylon stocking shortage.\n[…]\nGeorge Marion Jr. and Fats Waller's song \"When the Nylons Bloom Again\" described this situation in poetic terms:\n[…]\nNylons a dozen of those\n[…]\nI'll be happy when the nylons bloom again\n[…]\nI'll be happy when the nylons bloom again\n[…]\nStepping back into their nylons of DuPont\n[…]\nKeep on smiling to the nylons bloom again\n[…]\nIn August 1945, eight days after Japan's surrender, DuPont announced that it would resume producing stockings and newspaper headlines cheered \"Peace, It's Here! Nylons on Sale!\" DuPont's announcement indicated that nylons would be available in September and the motto \"Nylons by Christmas\" was sung everywhere. DuPont originally forecast that it would be able to produce 360 million pairs per year.\n[…]\nMeikle, Jeffrey L. (1995). \"American Plastic: A Cultural History\". New Brunswick: Rutgers University Press.\n[…]\nPeterson, Amy T. ed., Valerie Hewitt, Heather Vaughan, Ann T. Kellogg, and Lynn W. Payne (2008). \"The Greenwood Encyclopedia of Clothing Through American History: 1900 to the Present\". Westport, Connecticut: Greenwood Press.\n[…]\nNdiaye, Pap A. (trans. 2007). Nylon and Bombs: DuPont and the March of Modern America. Baltimore: Johns Hopkins University Press.\n[…]\nChandler, Alfred D. (1969). Strategy and Structure: Chapters in the History of the American Industrial Enterprise."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Jaqueta bomber",
      "descricao": "Jaqueta curta de couro com gola de pelo e punhos e barra de malha, criada para pilotos e depois popularizada como moda."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A jaqueta de aviador MA-1, modelo clássico de bomber, tem forro laranja-vivo. Para que ele servia, numa queda do avião?",
    "resposta": "Facilitar o resgate do piloto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flight_jacket"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flight_jacket",
        "situacao": "ok",
        "texto": "A flight jacket is a casual jacket that was originally created for pilots and eventually became part of popular culture and apparel. It has evolved into various styles and silhouettes, including the letterman jacket and the fashionable bomber jacket that is known today.\n[…]\nHollywood films like Top Gun boosted sales of the G-1 tremendously, making bomber jackets collector and fashion items.\n[…]\nIn addition to the A-2 and G-1 jackets, shearling jackets, originally lined with fur, are recognized for being the warmest flight jackets. Even when the fur was replaced with wool, this coat was warm enough to keep Lt. John A. Macready warm when he set a world record in April 1921, reaching an altitude of 40,000 feet in his open-cockpit airplane. Styles range from the US Air Force B-3 \"bomber jacket\", to the US Navy M-445. Also popular in the military were, and still are, synthetic jackets.\n[…]\nG-1 military flight jacket\n[…]\nMA-1 bomber jacket\n[…]\nThe bomber jacket originates from military clothing which trickled down into subcultures such as punk. In 2001 the bomber jacket found its way into high fashion with Raf Simon's \"Riot, Riot, Riot\" MA-1 jacket. The jacket also featured prominently in Prada's men's fall 2023 collection. The military bomber jacket was made to be versatile for functionality as it was a lightweight jacket that kept aircrews warm.\n[…]\nBomber jackets became popular in the non-military audience in the late 1960s to 1980s, especially when the English punks and skinheads started taking over the trend and changed the color into burgundy in order to distinguish themselves and their bomber jackets from the original military flight jackets. Brown is also a classic colour for leather flight jackets.\n[…]\nG-1 military flight jacket\n[…]\nMA-1 bomber jacket\n[…]\nMA-2 bomber jacket"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Versace",
      "descricao": "Grife italiana de moda de luxo fundada por Gianni Versace em Milão"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 2000, um vestido verde da Versace usado por Jennifer Lopez no Grammy foi tão procurado na internet que inspirou qual serviço?",
    "resposta": "Google Imagens",
    "distratores": [
      "Google Maps",
      "YouTube",
      "Google Notícias"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Green_Versace_dress_of_Jennifer_Lopez"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Green_Versace_dress_of_Jennifer_Lopez",
        "situacao": "ok",
        "texto": "American entertainer Jennifer Lopez wore a green Versace silk chiffon dress designed by Donatella Versace to the 42nd Grammy Awards ceremony on February 23, 2000. The sheer fabric was printed with a tropical leaf and bamboo pattern, and cut with a plunging neckline that extended well past Lopez's navel, while the waist of the dress was studded with citrines.\n[…]\nBefore it became famous on the red carpet of the Grammy Awards, the dress was presented on the catwalk by model Amber Valletta, and was featured in Versace's main advertising campaign that year. Steven Meisel also photographed it on Valletta. Andrea Lieberman, Lopez's stylist at the time, remarked, \"Versace and Jennifer [Lopez] belonged together. It was really natural.\"\n[…]\nLopez was surprised by the enormous media coverage, declaring in an interview: \"It was a nice dress. I had no idea it was going to become such a big deal.\" Donatella Versace later revealed that the dress was the turning point of her career, saying that the media now had confidence in her own work, after the death of Gianni Versace. She declared to the Canadian press, \"It was an unexpected success. The next day she [Jennifer Lopez] was everywhere and people were talking about her in that dress.\n[…]\nOn October 15, 2002, at the Radio City Music Hall in New York City, Lopez was awarded the VH1 Vogue Fashion Award as the most influential star of the year. The award was presented by Versace herself.\n[…]\nIn January 2015, Google's president Eric Schmidt cited the massive attention to this dress as the motivation for the creation of Google Images search in 2001. In 2000, Google Search results were limited to simple pages of text with links, but the developers worked on developing this further, realizing that an image search was required to answer \"the most popular search query\" they had seen to date: Jennifer Lopez's green dress."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vestido_verde_Versace_de_Jennifer_Lopez",
        "situacao": "ok",
        "texto": "O vestido verde Versace de Jennifer Lopez, também chamado Jungle Dress, é um vestido verde de chiffon de seda da Versace usado pela artista americana Jennifer Lopez na 42.ª cerimônia do Grammy Awards, em 23 de fevereiro de 2000. O tecido transparente tinha uma estampa de folhas tropicais e bambu, com um decote profundo que ultrapassava bastante o umbigo de Lopez, enquanto a cintura do vestido era \n[…]\nO vestido foi discutido por semanas nas áreas da moda e entretenimento após o evento, com especiais dedicados na televisão e capas de revistas apresentando-a. Imagens de Lopez no vestido verde foram baixadas do site dos Grammys 642.917 vezes em apenas 24 horas após o evento. O vestido foi citado, com o vestido preto Versace de Elizabeth Hurley, como sendo os vestidos mais icônicos que tornaram a Versace um nome conhecido mundialmente.\n[…]\nEmbora Armstrong tenha inicialmente considerado escolher o vestido de mesa de Hussein Chalayan, ela acabou optando pelo vestido Versace, argumentando que, devido à atenção da mídia que ele recebeu ao ser usado por Lopez, Geri Halliwell e outros, o vestido representava \"uma espécie de auge na atual simbiose entre moda e celebridade\". Versace posteriormente doou uma réplica do vestido para o museu. Outra réplica está exibida no Grammy Museum em Los Angeles.\n[…]\nEm janeiro de 2015, o presidente do Google, Eric Schmidt, citou a enorme atenção dada a esse vestido como uma motivação para a criação da pesquisa no Google Imagens.\n[…]\nEm 2000, os resultados de pesquisa do Google eram limitados a páginas simples de texto com links, mas os desenvolvedores trabalharam no aprimoramento disso, percebendo que uma pesquisa por imagens era necessária para responder à \"consulta de pesquisa mais popular\" que haviam visto até aquele momento: o vestido verde de Jennifer Lopez. Como resultado disto, nasceu o Google Imagens.\n[…]\nVestido da Union Jack\n[…]\nVestido de carne de Lady Gaga",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Beau Brummell",
      "descricao": "George Bryan Brummell, inglês que ditou a moda masculina de Londres e virou modelo do dândi"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1816, o dândi Beau Brummell, que ditava a moda de Londres, fugiu para a França. Do que ele escapava?",
    "resposta": "Das dívidas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beau_Brummell"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beau_Brummell",
        "situacao": "ok",
        "texto": "George Bryan \"Beau\" Brummell (7 June 1778 – 30 March 1840) was an English socialite who influenced British men's fashion during the Regency era. He was a close friend of the Prince Regent, the future King George IV, but after the two quarrelled and Brummell got into debt, he had to take refuge in France. Eventually, he died from complications of neurosyphilis in Caen.\n[…]\nThere were also two television dramas: the sixty-minute German So war Herr Brummell (Süddeutscher Rundfunk, 1967) and the UK's Beau Brummell: This Charming Man (2006).\n[…]\nBrummell's name became associated with style and good looks, and was therefore borrowed for a variety of products or alluded to in songs and poetry. One example was the paint colour Beau Brummel Brown, used exclusively on the 1931 Oldsmobile. In 1934, a rhododendron hybridised by Lionel de Rothschild was named after the dandy.\n[…]\nIn 1928, there were several Beau Brummel styles from the Illinois Watch Company and in 1948, LeCoultre marketed a Beau Brummel watch with a minimalist design and no numbers.\n[…]\nVarious bands also adopted Brummell's name, beginning with Zack Whyte and His Chocolate Beau Brummels, a jazz-style dance band that toured between 1924 and 1935. During the 1960s, there were the rock bands such as The Beau Brummels from San Francisco and Beau Brummell Esquire and His Noble Men, the name used by South African born Michael Bush for his English group.\n[…]\nBarbey d'Aurevilly, Jules. On Dandyism and George Brummell, 1845\n[…]\nCampbell, Kathleen. Beau Brummell. London: Hammond, 1948\n[…]\nJesse, Captain William. The Life of Beau Brummell. Published in two volumes. Available at Google Books, vol. 1 and vol. 2\n[…]\nKelly, Ian. Beau Brummell: The Ultimate Dandy. Hodder & Stoughton, 2005\n[…]\nLewis, Melville. Beau Brummell: His Life and Letters. New York: Doran, 1925\n[…]\n\"Brummel, George Bryan\" . The American Cyclopædia. 1879."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Beau_Brummell",
        "situacao": "ok",
        "texto": "George Bryan \"Beau\" Brummell (7 de junho de 1778 - 30 de março de 1840)  foi uma figura icónica na Inglaterra da Regência e, durante muitos anos, um arquétipo da moda masculina. Foi amigo íntimo do príncipe regente, o futuro rei George IV, mas as suas relações azedaram e Brummell endividou-se, tendo se refugiar em França. Acabou por morrer em Caen, na pobreza.\n[…]\nBrummell é recordado como o exemplo supremo do dândi e muita literatura se inspirou nos seus modos e ditos espirituosos. O seu nome continua a ser associado ao estilo e à beleza, e utilizado por uma grande variedade de marcas modernas para sugerir elevada qualidade.\n[…]\nRipley, George; Dana, Charles A., eds. (1879). «Brummel, George Bryan». The American Cyclopædia (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Vestido de noiva branco",
      "descricao": "Costume ocidental de a noiva se casar de vestido branco, popularizado no século dezenove."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O costume do vestido de noiva branco se espalhou pelo Ocidente depois do casamento de qual rainha, em 1840?",
    "resposta": "Rainha Vitória",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wedding_dress",
      "https://en.wikipedia.org/wiki/Wedding_dress_of_Queen_Victoria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wedding_dress",
        "situacao": "ok",
        "texto": "A wedding dress or bridal gown is the dress worn by the bride during a wedding ceremony.\n[…]\nIn Western culture, the wedding dress is most commonly white, a tradition popularised by elites in the Victorian era after Queen Victoria wore a white dress at her wedding to Prince Albert.\n[…]\nThe first documented instance of a royal bride wearing a white wedding dress was that of Philippa of England. She wore a tunic with a cloak in white silk bordered with squirrel and ermine in 1406, when she married Eric of Pomerania.\n[…]\nSimilarly, Mary, Queen of Scots, wore a white wedding dress in 1559 when she married her first husband, Francis, the Dauphin of France.\n[…]\nIn the Empire period, white did become a popular color for wedding dresses in the European upper class. In 1816 the British dressmaker Eliza Gill published a white ball gown for wedding use and in 1818 the dressmaker Euphemia Macdonald pulished a white wedding dress in Ackermann’s, which has been referred to as the first white wedding dress designed specifically as a weddingdress.\n[…]\nHowever, the popularity of the white wedding dress in the Empire period was mainly because white was the most popular color in Empire fashion rather than it having become a specific wedding color.\n[…]\nThe white wedding dress gained popularity after the Queen Victoria's wedding in 1840 to Albert of Saxe-Coburg and Gotha, when Victoria wore a white gown trimmed with Honiton lace. Illustrations of the wedding were widely published, and many elite Victorian brides donned white dresses at their weddings."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wedding_dress_of_Queen_Victoria",
        "situacao": "ok",
        "texto": "Queen Victoria of the United Kingdom married Prince Albert of Saxe-Coburg and Gotha on 10 February 1840 in the Chapel Royal, St. James's Palace. She wore a white wedding dress made from heavy silk satin, which made her look more like a bride and less like a queen. The English-made Honiton lace used for her wedding dress proved an important boost to Devon lace-making. Queen Victoria is erroneously \n[…]\nThe actual wedding dress is now cream coloured, although Victoria recorded in her journal that her gown was white, as did the newspapers. Silk cocoon fibres are naturally various shades of off white, so the silk fabric has to be bleached, but it yellows over time.\n[…]\nWomen's court dress — including what debutantes wore when presented to the monarch — was traditionally white, and by 1840 white dresses were gaining popularity in the middle classes as well, especially in cotton. According to Kate Strasdin, \"white and silver had become firmly associated with wedding attire for those who could afford it\" by the early 18th century, and by the mid 19th century they were increasingly popular in Europe, North America and the UK.\n[…]\nFor example, in the US upper-middle-class Frances Todd wore a cream-coloured satin wedding dress on 21 May 1839, the same dress her sister Mary Todd wore when she married Abraham Lincoln on 4 November 1842. Sophie of Württembert, Queen of the Netherlands wore white for her wedding on 18 June 1839. The Metropolitan Museum of Art holds several English, European and U.S. white wedding dresses made from silk, wool or cotton in the late 1830s. All of these dresses predate Victoria's.\n[…]\nWhile it was not uncommon as a dress colour in 1840, the colour white suggested wealth and status, even for middle-class wearers, because the world was sooty and white required constant maintenance, but it did not suggest royalty or sovereignty.\n[…]\nBBC audio slideshow featuring her wedding dress"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vestido_de_casamento",
        "situacao": "ok",
        "texto": "O vestido de casamento ou vestido de noiva é o traje usado por uma noiva durante uma cerimônia de casamento. A cor, o estilo e a importância cerimonial do vestido podem depender da religião e da cultura dos participantes do casamento. Nas culturas ocidentais, as noivas geralmente escolhem o vestido de noiva branco, que foi popularizado pela Rainha Vitória no século XIX. Nos países do oriente é com\n[…]\nA primeira ocorrência documentada de uma princesa que usou um vestido de casamento branco para uma cerimônia de casamento real é a de Philippa da Inglaterra, que usou uma túnica com uma capa de seda branca, cercada com pele de esquilo cinza e arminho em 1406. Maria da Escócia vestiu um vestido de noiva branco em 1559, quando se casou com o seu primeiro marido, Francis Dauphin da França, porque era a sua cor favorita, embora o branco fosse a cor do luto para as rainhas francesas.\n[…]\nO branco tornou-se uma opção popular em 1840, após o casamento da Rainha Vitória com o Príncipe Albert, quando Vitória usou um vestido branco ornado com renda Honiton. As ilustrações do casamento foram amplamente publicadas e muitas noivas optaram pelo branco de acordo com a escolha da rainha.\n[…]\nHoje, os vestidos de casamento ocidentais são geralmente brancos, embora o \"casamento branco\" inclua tons como off-white, nude, marfim, champagne e dusty rose.\n[…]\nPor vestidos de casamento contemporâneos da cultura ocidental, entende-se os modelos que seguem as tendências populares de moda nupcial no ocidente a partir do ano 2000. Os vestidos são geralmente brancos – podendo variar em colorações sutis como off-white, nude, marfim, champagne e dusty rose – e seguem um padrão para silhuetas, decotes e comprimentos populares. A moda nupcial moderna também é caracterizada por estilos específicos de arranjos para a cabeça, lingerie, véus e sapatos.\n[…]\nVéu cotovelo: o comprimento vai até o cotovelo da noiva.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Chinelo de dedo",
      "descricao": "Calçado leve e aberto, preso ao pé por uma tira em Y que passa entre o primeiro e o segundo dedos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "As sandálias Havaianas, lançadas em 1962, têm no solado uma textura de grãos de arroz herdada de qual calçado japonês?",
    "resposta": "Zori",
    "distratores": [
      "Geta",
      "Waraji",
      "Tabi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Havaianas",
      "https://pt.wikipedia.org/wiki/Havaianas"
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
        "texto": "Havaianas é uma marca brasileira de sandálias de borracha produzidas pela Alpargatas, uma empresa da Itaúsa, proprietária de empresas como Itaú Unibanco e Dexco. A marca, que possui participação de 80% no mercado brasileiro de chinelos de borracha, comercializa cerca de 210 milhões de sandálias anualmente, dos quais 10% para mais de 100 países dos cinco continentes, podendo ser encontrada em mais \n[…]\nA ideia para o produto foi inspirada nas Zori, sandálias japonesas feitas de palha de arroz ou madeira lascada e que são usadas com os quimonos. Em 8 de junho de 1962, foram lançadas as sandálias brasileiras feitas de borracha. O primeiro modelo é o mais tradicional: branco com tiras e laterais da base azuis. Não possuíam um atrativo visual, porém, eram demasiado baratas. Com o fator preço favorecendo o mercado, em menos de um ano a Vespasiano produzia mais de 13 mil pares por dia.\n[…]\nApós o sucesso da Sky, foram criados novos modelos como, por exemplo, a Havaianas Olimpic, lançada durante as Olimpíadas de Atlanta. Desde a seu aparecimento, as Havaianas evoluíram dos modelos simples de chinelo de enfiar no dedo, que continuam a ser um sucesso de vendas, para designs mais elaborados com aplicações e formatos variados. Foi lançado um modelo que inclui um salto alto.\n[…]\nEm 1997, foi criado o departamento de comércio exterior das Havaianas com o objetivo de aumentar a exportação do produto. A primeira etapa foi a reorganização de toda a rede de distribuidores. Alguns eventos ocorreram para a divulgação da marca como na França, em 2004, em que as sandálias coloridas tipicamente brasileiras venderam três mil pares.\n[…]\nNos últimos anos, o lucro gerado pela exportação das Havaianas quadruplicou e os países que mais compram são Austrália e Filipinas.[carece de fontes]?\n[…]\nZōri\n[…]\nHavaianas no Facebook\n[…]\nHavaianas no Twitter\n[…]\nHavaianas no YouTube\n[…]\nHavaianas no Instagram"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Smoking",
      "descricao": "Traje masculino de gala com lapelas de cetim, chamado tuxedo nos Estados Unidos"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O smoking nasceu de um paletó curto de noite que o alfaiate londrino Henry Poole fez para qual futuro rei britânico?",
    "resposta": "Eduardo sétimo",
    "distratores": [
      "Jorge quinto",
      "Jorge quarto",
      "Guilherme quarto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tuxedo",
      "https://en.wikipedia.org/wiki/Henry_Poole_%26_Co"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tuxedo",
        "situacao": "ok",
        "texto": "Black tie is a half-dress Western dress code for evening events, originating in British and North American conventions for attire in the 19th century. In British English, the dress code is often referred to synecdochically by its principal element for men, the dinner suit or dinner jacket. In American English, the equivalent term tuxedo (or tux) is common.\n[…]\nThe earliest record of a tailless coat being worn with evening wear is an 1865 midnight blue smoking jacket in silk with matching trousers ordered by the Prince of Wales, later Edward VII of the United Kingdom, from Savile Row tailors Henry Poole & Co. The smoking jacket was tailored for use at Sandringham, the British royal family's informal country estate.\n[…]\nHenry Poole never saw his design become known as a dinner jacket or cross the Atlantic and be called a tuxedo over there; he died in 1876 leaving behind a well-respected business to be run by his cousin Samuel Cundey.\n[…]\nA son of one of the community's founders, Griswold Lorillard, and his friends were widely reported in society columns for showing up at the club's first Autumn Ball in October 1886 wearing \"a tailless dress coat\". Although it is not known whether this garment was a mess jacket or a conventional dinner jacket, it has no doubt cemented the tailcoat substitute's association with Tuxedo Park in the mind of the public.\n[…]\nA dinner jacket, also called a tuxedo jacket in the United States, is primarily made of black or midnight blue wool. Dinner jackets in an off-white colour are also considered appropriate for some occasions, but are traditionally associated with warmer climates and differ from other dinner jackets in that they are self-faced and can be made of fabrics including linen and cotton.\n[…]\nAs a general rule, boys do not wear dinner jackets much before they are 15 or dress coats before they are about 18."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Henry_Poole_%26_Co",
        "situacao": "ok",
        "texto": "Henry Poole & Co. is a British bespoke tailor located at 15 Savile Row in London, England. It is widely believed to have designed the first modern-style dinner jacket during the 1860s, according to specifications provided by the Prince of Wales (later Edward VII). The company has been called \"the founding father of Savile Row\".\n[…]\nThe business first opened in 1806 at Brunswick Square, originally specializing in military tailoring during the Napoleonic Wars. After the death of founder James Poole, it relocated to Savile Row in 1846. Henry Poole ran the business until his death in 1876, after which his cousin, Samuel Cundey (1823-1883), took over. Both are buried in Highgate Cemetery.\n[…]\nIn 1860, Henry Poole made a short evening or smoking jacket for the Prince of Wales to wear at informal dinner parties at Sandringham. In 1886, during a visit to London, the Prince invited James Potter of Tuxedo Park, New York, to spend a weekend at Sandringham House. He was advised that he could have a smoking jacket made by the Prince's tailor, Henry Poole & Co.\n[…]\nWhen Potter returned to New York, he wore this new smoking jacket at the Tuxedo Club. Fellow members quickly began having copies made for themselves, adopting the jacket as their informal uniform for club \"stag\" dinners. As a result, the jacket became known as a tuxedo (or tux) in the United States.\n[…]\nStephen Howarth: Henry Poole: Founders of Savile Row – The Making of a Legend. Godalming: Bene Factum, 2003. ISBN 978-1-903071-06-9\n[…]\nMedia related to Henry Poole & Co at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Smoking",
        "situacao": "ok",
        "texto": "O smoking é um traje de cerimónia masculino, sendo também conhecido como black tie (traduzido do inglês, \"gravata preta\"). É uma roupa masculina semiformal para eventos noturnos, exigindo o uso de laço preto e casaco preto (recomendado) ou azul (muito) escuro.\n[…]\nA sua criação foi por volta de 1850, quando o periódico londrino Gentleman’s Magazine apresentou uma proposta do que seria um casaco ideal para quem gosta de fumar. A ideia era um tipo de robe de chambre, veludo, caxemira, plush ou flanela, revestido com cores brilhantes, ornamentada com algum tipo de estampa e botões grandes. Ele era menor estruturado que o blazer e portanto confortável para se ficar em casa enquanto se degustava charutos após as refeições.\n[…]\nPortanto o Smoking originalmente era uma espécie de Robe, uma vestimento informal.\n[…]\nEm 1860, quando a empresa Henry Poole & Co. costurou um casaco de seda azul para e a pedido do - então - príncipe de Gales (posteriormente, rei Eduardo VII do Reino Unido) trajar em jantares internos, como alternativa à casaca.Conta-se que, quando James Potter, de Nova York, visitou o príncipe Edward VII, ficou tão impressionado com a vestimenta que encomendou a Henry Poole uma igual para si. Quando Potter voltou para Nova York, usou o seu novo traje no Tuxedo Park Club.\n[…]\nRapidamente outros membros da agremiação copiaram o design, até que este veio a ser adotado como a referência informal para jantares. A denominação americana para o smoking, tuxedo, poderá ter aí a sua origem.\n[…]\nO termo específico utilizado em português, smoking, deriva do inglês smoking jacket, item de vestuário hoje relativamente raro, não sendo mais utilizado com o propósito de se fumar charutos mas sim para eventos formais.\n[…]\nCasaco curto com lapelas em seda ou cetim;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Vogue",
      "descricao": "Revista de moda e estilo fundada em 1892, publicada pela Condé Nast"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A autora do livro O Diabo Veste Prada trabalhou como assistente de qual famosa editora da Vogue americana?",
    "resposta": "Anna Wintour",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lauren_Weisberger",
      "https://en.wikipedia.org/wiki/The_Devil_Wears_Prada_(novel)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lauren_Weisberger",
        "situacao": "ok",
        "texto": "Lauren Weisberger (born March 28, 1977) is an American writer. She is author of the 2003 bestseller The Devil Wears Prada, a roman à clef of her experience as an assistant to Vogue editor-in-chief Anna Wintour. Weisberger worked as a writer and editor for Vogue and Departures magazines prior to writing The Devil Wears Prada, which was adapted into a film of the same name in 2006. She has since pub\n[…]\nAfter returning to the United States following her travel expedition, Weisberger settled in Manhattan, where she was hired as assistant to Vogue editor Anna Wintour. After ten months, she and Vogue features editor Richard Story left the magazine. Weisberger said she felt out of place at the magazine, although Vogue managing editor Laurie Jones later said, \"She seemed to be a perfectly happy, lovely woman\".\n[…]\nWeisberger and Story began working for Departures, an American Express publication, where she wrote 100-word reviews and became an assistant editor. She also published a 2004 article in Playboy magazine.\n[…]\nThe Devil Wears Prada is a semi-fictional but highly critical book on the Manhattan elite, and is largely based on Weisberger's experience at Vogue magazine. The book's primary character Miranda Priestly is believed to represent Wintour and the fictional Elias-Clark publishing company in the book is believed to be modeled on Condé Nast. The book focuses on many comical aspects of a first job in the world of elite fashion.\n[…]\nWhile commercially successful, the book was not well received at Vogue. Kate Betts, a Vogue editor, criticized Weisberger and the book in The New York Times, writing that Weisberger and Wintour are actually the direct counterparts of their fictional characters. \"Andrea is just as much a snob as the snobs she is thrown in with,\" Betts wrote in April 2003.\n[…]\nThe Devil Wears Prada (2003)\n[…]\nRevenge Wears Prada: The Devil Returns (2013)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Devil_Wears_Prada_(novel)",
        "situacao": "ok",
        "texto": "The Devil Wears Prada is a 2003 novel by Lauren Weisberger about a young woman hired as a personal assistant to a powerful fashion magazine editor, a job that becomes nightmarish as she struggles to keep up with her boss's grueling schedule and demeaning demands. It spent six months on New York Times's bestseller list and was adapted for film in 2006 with Meryl Streep, Anne Hathaway, and Emily Blu\n[…]\nUpon its publication The Devil Wears Prada attracted attention because of its author's background. Before writing the novel, Weisberger had worked as a personal assistant to American Vogue editor Anna Wintour, much like the novel's protagonist works for a powerful fashion magazine editor, who also happens to be British like Wintour. Reviewers considered the book a roman à clef, offering insider perspectives on Wintour and other Vogue staff.\n[…]\nWeisberger stated in publicity materials that Priestly's demands are partial fiction and a composite of actual experiences she and her friends had in their first jobs. Some reviewers state that Anna Wintour, editor-in-chief of Vogue, was the inspiration for Priestly. After the film was released, another one of Wintour's assistants, Leslie Fremar was identified as the model for Emily. In April 2026, Fremar confirmed that she was the inspiration behind Emily for the first time.\n[…]\nKate Betts, a former editor of Harper's Bazaar who also worked for Wintour at one point in her career, objected to the main character's lack of gratitude for the unique opportunity to work at Vogue: \"[I]f Andrea doesn't ever realize why she should care about Miranda Priestly, why should we care about Andrea, or prize the text for anything more than the cheap frisson of the context?\" Janet Maslin of The New York Times described the novel as \"a mean-spirited Gotcha!"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lauren_Weisberger",
        "situacao": "ok",
        "texto": "Lauren Weisberger (Scranton, 28 de março de 1977) é uma jornalista e escritora norte-americana. Ela é autora do best-seller O Diabo Veste Prada, de 2003. Seus livros abordam temas como o universo da moda e os desafios do mercado de trabalho para jovens mulheres.\n[…]\nWeisberger formou-se em inglês em 1999. Iniciou a vida profissional como assistente de Anna Wintour, que era editora-chefe da revista Vogue. Como jornalista, trabalhou para revistas como Departures e Playboy no início dos anos 2000 antes de migrar para a ficção.\n[…]\nEm 2003, publicou seu livro de estreia, O Diabo Veste Prada, um romance crítico inspirado na experiência de atuar como assistente de Wintour. Apesar do êxito comercial, o livro não foi unanimidade na visão da imprensa especializada e recebeu críticas ao jeito reclamante da personagem principal.\n[…]\nO Diabo Veste Prada também foi adaptado como musical da Broadway em 2024 e ganhou uma continuação chamada A Vingança Veste Prada. Atualmente, uma sequência do filme de 2006 está sendo desenvolvida.\n[…]\nLauren também é autora de outros romances como O Diabo Ataca em Wimbledon, também focado no ambiente profissional, mas abordando o universo das jogadoras de tênis,\n[…]\nO Diabo veste Prada - no original The Devil Wears Prada (2003)\n[…]\nA vingança veste Prada: o diabo está de volta - no original Revenge Wears Prada (2013)\n[…]\nO Diabo Ataca em Wimbledon - no original: The Singles Game (2016)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Christian Dior",
      "descricao": "Estilista francês (1905–1957), fundador da maison que leva seu nome e criador do New Look"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Com a morte súbita de Christian Dior, em 1957, qual assistente de vinte e um anos assumiu a criação da maison?",
    "resposta": "Yves Saint Laurent",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christian_Dior",
      "https://en.wikipedia.org/wiki/Yves_Saint_Laurent_(designer)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christian_Dior",
        "situacao": "ok",
        "texto": "Christian Ernest Dior (French: [kʁistjɑ̃ djɔʁ]; 21 January 1905 – 24 October 1957) was a French fashion designer and founder of one of the world's top fashion houses, Christian Dior SE. He was one of the Big Four of 1950s haute couture, the others being Jacques Fath, Pierre Balmain and Jean Dessès. Dior believed that fashion was more than clothing; that it was an art form and a continuation of Fre\n[…]\nBy the mid-1950s, the Dior empire included eight companies and 16 affiliates, and employed 1,700 people on five continents. By the time the house celebrated its tenth anniversary in 1957, it had sold 100,000 garments. Though only 52, Dior, who was a workaholic and fond of eating, was succumbing to the effects of his life's frenetic pace and had suffered a heart attack. He was planning his retirement and named his 21-year-old assistant Yves Saint Laurent as his successor.\n[…]\nWhile on vacation in Montecatini Terme, Italy, where he was recuperating from his second heart attack, Dior died of a third attack, on 24 October 1957. He was in the company of his lover, a 23 year-old singer named Jacques Benita, aka Tony Sandro. An estimated 9,000 people attended his funeral at the Église Saint-Honoré d'Eylau. It was a national event.\n[…]\nDior, Christian (1957, original, transl Fraser, Antonia). Dior by Dior. London: Penguin Books, Internet Archive\n[…]\nDior, Christian (1957). Christian Dior and I. New York: Dutton, Internet Archive\n[…]\nPochna, Marie-France (1994). Christian Dior. Paris: Flammarion ISBN 9782080668929\n[…]\nDocumentary film Christian Dior, The Man Behind The Myth (archived 6 October 2008)\n[…]\nChristian Dior at Chicago History Museum\n[…]\nChristian Dior: Designer of Dreams, Victoria and Albert Museum\n[…]\nChristian Dior Collection, Victoria and Albert Museum\n[…]\nChristian Dior Collection, Metropolitan Museum of Art\n[…]\nChristian Dior Collection, Pathé News\n[…]\nChristian Dior at IMDb\n[…]\nChristian Dior at the British Film Institute"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yves_Saint_Laurent_(designer)",
        "situacao": "ok",
        "texto": "Yves Henri Donat Mathieu-Saint-Laurent (1 August 1936 – 1 June 2008), better known as Yves Saint Laurent (, also UK: , US: ; French: [iv sɛ̃ lɔʁɑ̃] ), was a French fashion designer who founded his eponymous fashion label in 1962. He was the last of the grand couturiers and is regarded as one of the foremost designers of the 20th century.\n[…]\nAfter a show in New York City, which featured US$100,000 jeweled casual jackets only days after the \"Black Monday\" stock market crash in 1987, he turned over the responsibility of the prêt-à-porter line to his assistants. In 1993, the Yves Saint Laurent business was sold to Sanofi. He became increasingly reclusive, but continued to design the couture collection until he retired 2002.\n[…]\nPetkanas, Christopher (2018). Loulou & Yves: The Untold Story of Loulou de la Falaise and the House of Saint Laurent (First ed.). New York: St. Martin's Press. ISBN 978-1-250-05169-1.\n[…]\nBenaïm, Laurence (2020). Yves Saint Laurent: The Impossible Collection. Assouline. ISBN 978-1-61428-942-5.\n[…]\nBaxter-Wright, Emma (2021). Little Book of Yves Saint Laurent: The Story of the Iconic Fashion House. Welbeck Publishing. ISBN 978-1-78739-554-1.\n[…]\nNapias, Jean-Christophe; Mauriès, Patrick (2023). The World According to Yves Saint Laurent. Thames&Hudson. ISBN 978-0-500-02618-2.\n[…]\nReising, Kelly (2025). The Essence of Yves Saint Laurent: Unfolded. Helmin&Sorgenfri. ISBN 978-87-94190-60-2.\n[…]\n\"Yves Saint Laurent, legendary designer and Pied Piper of fashion, dies aged 71\", The Guardian: retrospective article\n[…]\n\"Yves Saint Laurent shuts its doors\" – BBC World 31 October 2002\n[…]\n\"Yves Saint Laurent announces retirement\" – CNN 7 January 2002\n[…]\n\"All About Yves: As the incomparable Yves Saint Laurent celebrates his 40th anniversary as a couturier, the world salutes his genius.\" – Julie K.L. Dam, Time magazine, 3 August 1998."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Christian_Dior",
        "situacao": "ok",
        "texto": "Christian Dior (Granville, 21 de janeiro de 1905 – Montecatini Terme, 24 de outubro de 1957) foi um estilista francês, fundador da casa de alta-costura Christian Dior, uma das mais influentes da moda do século XX. Ficou sobretudo conhecido pela coleção que apresentou em 1947, apelidada de New Look, que redefiniu a silhueta feminina do pós-guerra e recolocou Paris no centro da moda internacional.\n[…]\nFoi neste período que Dior conheceu o industrial têxtil Marcel Boussac, que aceitou financiar a criação de uma casa de costura própria. A maison Christian Dior foi fundada a 16 de dezembro de 1946, com sede no número 30 da avenida Montaigne, em Paris, iniciando atividade com três ateliers e cerca de 85 funcionários.\n[…]\nAinda em 1947 foi criada a Parfums Christian Dior, dirigida por Serge Heftler-Louiche, amigo de infância do estilista, que lançou nesse ano o perfume Miss Dior. A casa expandiu-se rapidamente para os mercados internacionais e Dior foi pioneiro na concessão de licenças de fabrico, a partir de 1948, para produtos como peles, meias e perfumes, um modelo de negócio que se tornaria comum na indústria da moda.\n[…]\nChristian Dior morreu a 24 de outubro de 1957, durante uma estadia em Montecatini Terme, na Toscana, Itália, vítima de um ataque cardíaco, aos 52 anos. A direção artística da casa foi então assumida por Yves Saint Laurent, que era seu assistente desde 1955 e tinha apenas 21 anos.\n[…]\nChristian Dior é considerado um dos estilistas mais influentes do século XX, tendo devolvido a Paris o estatuto de capital da moda no imediato pós-guerra. A casa que fundou manteve-se como uma das mais prestigiadas do setor, sendo dirigida ao longo das décadas por nomes como Yves Saint Laurent, Marc Bohan, Gianfranco Ferré, John Galliano, Raf Simons e Maria Grazia Chiuri.\n[…]\nPágina oficial da Christian Dior",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Christian Dior",
      "descricao": "Estilista francês (1905–1957), fundador da maison que leva seu nome e criador do New Look"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de se tornar estilista, Christian Dior teve em Paris um negócio onde vendia obras de artistas como Picasso. Que negócio era esse?",
    "resposta": "Uma galeria de arte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christian_Dior",
      "https://pt.wikipedia.org/wiki/Christian_Dior"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christian_Dior",
        "situacao": "ok",
        "texto": "Christian Ernest Dior (French: [kʁistjɑ̃ djɔʁ]; 21 January 1905 – 24 October 1957) was a French fashion designer and founder of one of the world's top fashion houses, Christian Dior SE. He was one of the Big Four of 1950s haute couture, the others being Jacques Fath, Pierre Balmain and Jean Dessès. Dior believed that fashion was more than clothing; that it was an art form and a continuation of Fre\n[…]\nIn 1928, with his friend Jacques Bonjean, and funding from his father, Dior opened an art gallery at 34 rue La Boétie, the Galerie Jacques Bonjean, which exhibited works by, among others, Pablo Picasso, Georges Braque, and Henri Matisse. During the Depression, Dior's father lost his business; with no funding, the gallery closed in 1931.\n[…]\nOne of the gallery's employees, Pierre Colle, had opened a gallery at nearby 29, rue Cambacérès; Dior joined him at Galerie Pierre Colle, where they became the dealers of Alexander Calder, Alberto Giacometti and Salvador Dali. At the end of 1933, the pair ran out of money and had to close the gallery. By now, Dior had contracted tuberculosis; he went to his family's smaller country home in Callian, where it took him a year to recover.\n[…]\nChristian Dior owned two homes. In Paris, he lived in a townhouse at 7, boulevard Jules-Sandeau. He also satisfied his long-standing obsession with architecture by buying and renovating the 19th-century Château de La Colle Noire in Montauroux; the chateau now belongs to Parfums Christian Dior.\n[…]\nPochna, Marie-France (1994). Christian Dior. Paris: Flammarion ISBN 9782080668929\n[…]\nChristian Dior at Chicago History Museum\n[…]\nChristian Dior: Designer of Dreams, Victoria and Albert Museum\n[…]\nChristian Dior Collection, Victoria and Albert Museum\n[…]\nChristian Dior Collection, Metropolitan Museum of Art\n[…]\nChristian Dior Collection, Pathé News\n[…]\nChristian Dior at IMDb\n[…]\nChristian Dior at the British Film Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Christian_Dior",
        "situacao": "ok",
        "texto": "Christian Dior (Granville, 21 de janeiro de 1905 – Montecatini Terme, 24 de outubro de 1957) foi um estilista francês, fundador da casa de alta-costura Christian Dior, uma das mais influentes da moda do século XX. Ficou sobretudo conhecido pela coleção que apresentou em 1947, apelidada de New Look, que redefiniu a silhueta feminina do pós-guerra e recolocou Paris no centro da moda internacional.\n[…]\nEmbora tivesse aspirações artísticas e desejasse ligar-se ao mundo da arte, Dior foi encaminhado pelo pai para uma carreira diplomática. Em 1925 matriculou-se na Escola Livre de Ciências Políticas de Paris (Sciences Po), onde estudou ciências políticas, concluindo os estudos em 1928.\n[…]\nDepois de terminar os estudos, e com financiamento do pai — que impôs a condição de o nome da família não figurar na fachada —, Dior abriu uma pequena galeria de arte em Paris. Nela expôs e vendeu obras de artistas como Pablo Picasso, Georges Braque, Jean Cocteau e Max Jacob. Com a Grande Depressão, iniciada em 1929, o pai arruinou-se financeiramente; a estes reveses juntaram-se a morte de um irmão e o falecimento da mãe, em 1931, o que levou ao encerramento da galeria.\n[…]\nAinda em 1947 foi criada a Parfums Christian Dior, dirigida por Serge Heftler-Louiche, amigo de infância do estilista, que lançou nesse ano o perfume Miss Dior. A casa expandiu-se rapidamente para os mercados internacionais e Dior foi pioneiro na concessão de licenças de fabrico, a partir de 1948, para produtos como peles, meias e perfumes, um modelo de negócio que se tornaria comum na indústria da moda.\n[…]\nChristian Dior morreu a 24 de outubro de 1957, durante uma estadia em Montecatini Terme, na Toscana, Itália, vítima de um ataque cardíaco, aos 52 anos. A direção artística da casa foi então assumida por Yves Saint Laurent, que era seu assistente desde 1955 e tinha apenas 21 anos.\n[…]\nPágina oficial da Christian Dior"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Pierre Cardin",
      "descricao": "Estilista francês (1922–2020), conhecido pela moda futurista da era espacial"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Os ternos sem gola que os Beatles usaram no início dos anos sessenta foram inspirados em criações de qual estilista?",
    "resposta": "Pierre Cardin",
    "distratores": [
      "Yves Saint Laurent",
      "André Courrèges",
      "Hubert de Givenchy"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pierre_Cardin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pierre_Cardin",
        "situacao": "ok",
        "texto": "Pietro Costante Cardin (2 July 1922 – 29 December 2020), known as Pierre Cardin, was an Italian-French fashion designer. He is known for what were his avant-garde style and Space Age designs. He preferred geometric shapes and motifs, often ignoring the female form. He advanced into unisex fashions, sometimes experimental, and not always practical. He founded his fashion house in 1950 and introduce\n[…]\nalbum that may have been inspired by Cardin.\n[…]\nPierre Cardin used his name as a brand, initially a prestigious fashion brand that he extended successfully in the 1960s into perfumes and cosmetics, adding furniture and home decor in 1968. He acquired new products for licensure rapidly during the 1970s, his name found on over 2,000 products by the end of the decade, items ranging from bicycle accessories to wine to cookware to home furnishings to heaters to blow dryers.\n[…]\nA 2005 article in the Harvard Business Review commented that the extension into perfumes and cosmetics was successful as the premium nature of the Pierre Cardin brand transferred well into these new, adjacent categories, but that the owners of the brand mistakenly attributed this to the brand's strength rather than to its fit with the new product categories.\n[…]\nIn 1995, quotes from WWD included \"Pierre Cardin—he has sold his name for toilet paper. At what point do you lose your identity?\" and \"Cardin's cachet crashed when his name appeared on everything from key chains to pencil holders\". However, the Cardin name was still very profitable, although the indiscriminate licensing approach was considered a failure.\n[…]\nLorenz, Sylvana (2006). Biographie de Pierre Cardin (in French). Paris: Calmann-Lévy.\n[…]\nThiollet, Jean-Pierre (2021). \"Pierre Cardin\", in Hallier L'Edernel retour. Paris: Neva Editions. pp. 253–270. ISBN 978-2-35055-295-8.\n[…]\nPierre Cardin Museum\n[…]\nPierre Cardin discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pierre_Cardin",
        "situacao": "ok",
        "texto": "Pierre Cardin, nascido Pietro Costante Cardin (2 de julho de 1922 – 29 de dezembro de 2020), foi um estilista italiano, naturalizado francês. É considerado como um dos inventores da moda futurista dos anos 1960 - juntamente com Paco Rabanne e André Courrèges.\n[…]\nCardin fundou sua própria casa em 1950 e começou com alta costura três anos depois. Ficou conhecido por seu estilo de vanguarda e por seus trabalhos inspirados na \"era espacial\", com formatos e motivos geométricos, frequentemente ignorando a forma feminina. Cardin investiu também nas roupas unissex, algumas vezes experimentais. Em 1954, introduziu o \"vestido bolha\". Ao lado de Paco Rabanne e André Courrèges, Cardin formou a \"tríplice aliança\" do futurismo na moda.\n[…]\nPierre Cardin foi um membro da Chambre Syndicale entre 1953 e 1993.Como muitos designers de moda da atualidade, em 1994, Cardin decidiu  mostrar sua coleção apenas para um pequeno círculo de clientes e jornalistas selecionados.\n[…]\nEm 1981, Cardin adquiriu os restaurantes Maxim's e logo abriu unidades em Nova York, Londres, Beijing (1983) e Rio de Janeiro.\n[…]\nCardin também tem produtos de comida sob o nome Maxim's.\n[…]\nEm 2003, Cardin convidou o conjunto de dança Lovzar, composto por crianças chechenas, para dançar em seu show musical Tristão e Isolda, apresentado em Moscou.\n[…]\nCardin possui as ruínas do castelo em Lacoste, Vaucluse, antigamente habitado pelo Marquês de Sade. Ele renovou parcialmente o lugar e regularmente organiza festivais de teatro por lá.\n[…]\nPierre Cardin é mencionado na canção \"Everyday Clothes\" de Jonathan Richman.\n[…]\n«Website oficial de Pierre Cardin» (em inglês). (em francês) ou\n[…]\n«Artigo sobre Pierre Cardin» (em inglês)\n[…]\n«Artigo sobre Cardin e Lovzar» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Fedora",
      "descricao": "Chapéu de feltro macio com aba e copa vincada no centro"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Qual arqueólogo do cinema, vivido por Harrison Ford, fez do chapéu fedora e do chicote sua marca registrada?",
    "resposta": "Indiana Jones",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fedora",
      "https://en.wikipedia.org/wiki/Indiana_Jones_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fedora",
        "situacao": "ok",
        "texto": "A fedora () is a hat with a soft brim and indented crown. It is typically creased lengthwise down the crown and pinched near the front on both sides. Fedoras can also be creased with teardrop crowns, diamond crowns, center dents, and others, and the positioning of pinches can vary. The typical crown height is 4.5 inches (11 cm). The term fedora was in use as early as 1891. Its popularity soared, a\n[…]\nIndiana Jones re-popularized the fedora in the Indiana Jones franchise. The backstory of how he obtains the hat is told in the prologue of Indiana Jones and the Last Crusade, the third film of the series, and the character who gives him the hat is credited as \"Fedora\".\n[…]\nIn the movie of the same name, the Blues Brothers (who are blues musicians rather than jazzmen) wear black scant-brim fedoras as part of their black suit \"uniform\".\n[…]\nThe association of the fedora with the zoot suit and gangster culture has caused the general public to view it according to this limited connotation.\n[…]\nTom Baker wore a fedora when playing the Fourth Doctor in the science fiction series Doctor Who.\n[…]\nDevout Orthodox Jewish men fulfil their religious obligation of head-covering with the hats similar to the fedora, a Western-invented headgear. Lithuanian yeshiva students in the first half of 20th century wore light hats during prayer and sometimes even while studying, as evident in a rare footage of the Ponevezh Yeshiva and a photo of the Lomza Yeshiva, both in Eastern Europe. Both the footage and the photo show students studying in their hats.\n[…]\nHasidic Jews wore black hats, albeit not fedoras, and in the later half of the 20th century, non-Hasidic (Lithuanian style) yeshiva students began to wear black fedoras (or dark blue or gray). Today, many yeshiva students and Orthodox men wear black fedoras for prayer and many even while walking outside.\n[…]\nMedia related to Fedoras at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Indiana_Jones_(character)",
        "situacao": "ok",
        "texto": "Dr. Henry Walton \"Indiana\" Jones, Jr., often called \"Indy\" for short, is the title character and protagonist of the Indiana Jones franchise. George Lucas created the character in homage to the action heroes of 1930s film serials.\n[…]\nJones is most famously portrayed by Harrison Ford and has also been portrayed by River Phoenix (as the young Jones in The Last Crusade), and by Corey Carrier, Sean Patrick Flanery, and George Hall in the television series The Young Indiana Jones Chronicles.\n[…]\nThe show initially featured the formula of an elderly (93 to 94 years of age) Indiana Jones played by George Hall introducing a story from his youth by way of an anecdote: the main part of the episode then featured an adventure with either a young adult Indy (16 to 21 years of age) played by Sean Patrick Flanery or a child Indy (8 to 10 years) played by Corey Carrier. One episode, \"Young Indiana Jones and the Mystery of the Blues\", is bookended by Harrison Ford as Indiana Jones, rather than Hall.\n[…]\nIndiana Jones and the Army of the Dead, September 2009.\n[…]\nOriginally, Spielberg suggested Harrison Ford; Lucas resisted the idea, since he had already cast the actor in American Graffiti, Star Wars and The Empire Strikes Back, and did not want Ford to become known as his \"Bobby De Niro\" (in reference to Martin Scorsese frequently casting Robert De Niro in his films). During an intensive casting process, Lucas and Spielberg auditioned many actors, and finally cast actor Tom Selleck as Indiana Jones.\n[…]\nThe producer of the Prince of Persia (2008) video game, Ben Mattes, explained that its \"inspiration was anything Harrison Ford has ever done: Indiana Jones, Han Solo.\"\n[…]\nIndianaJones.com – the official Indiana Jones site\n[…]\nIndiana Jones on IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fedora_%28chap%C3%A9u%29",
        "situacao": "ok",
        "texto": "Fedora, também chamado Borsalino (vide seção abaixo), é um tipo de chapéu, ordinariamente em feltro, fabricado no formato do chapéu Panamá, e que fez grande sucesso no século XX, a partir dos anos 20, embora se diga que tenha sido inventado em meados da década anterior (algo que não é preciso).\n[…]\nChapéus com a copa em formato de C, denominada de coroa (pois há uma depressão na parte central), também são comumente chamados fedora.\n[…]\nFedora é um nome feminino russo, versão local para Teodora — e que foi tornado popular na peça teatral Fédora, de Victorien Sardou, feita para Sarah Bernhardt — e depois vertida em ópera por Umberto Giordano, em 1898 — grande sucesso no começo do século XX, tendo Enrico Caruso no papel de amante da personagem-título. Embora não haja ligação aparente entre o chapéu e a peça, o nome foi popularizado por esta.\n[…]\nA fábrica italiana de chapéus e acessórios masculinos Borsalino reivindica a criação do modelo de chapéu, que era produzido em feltro, cuja matéria-prima era pêlo de coelho. Em alguns países, como a França (vide os interwikis, ao lado) e até mesmo no Brasil, o fedora é comumente chamado borsalino.\n[…]\nNo Reino Unido, o chapéu fedora é também chamado de trilby.\n[…]\nNo filme Moonwalker (1988) de Michael Jackson, Jackson usa um fedora branco no clipe da trilha sonora do filme Smooth Criminal e um fedora preto na maioria das cenas.\n[…]\nÉ também o chapéu utilizado nas séries dos filmes A Hora do Pesadelo com Robert Englund.\n[…]\nO fedora é usado, em combinação com o sobretudo e luvas, principalmente por super-heróis sem poderes, vingadores encapuçados que patrulham a noite, vivendo histórias de detectives.\n[…]\nIndiana Jones\n[…]\n«Etiqueta e uso do Fedora». - imagens como: Chico Buarque, Indiana Jones e outros adeptos do Fedora. (em português)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Cartola",
      "descricao": "Chapéu alto de copa reta e aba curta, tradicionalmente preto, usado com trajes formais ocidentais."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Qual presidente americano do século dezenove, muito alto, ficou famoso por usar uma cartola de copa altíssima, do tipo chaminé?",
    "resposta": "Abraham Lincoln",
    "fonte": [
      "https://en.wikipedia.org/wiki/Top_hat",
      "https://en.wikipedia.org/wiki/Abraham_Lincoln"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Top_hat",
        "situacao": "ok",
        "texto": "A top hat (also called a high hat, or, informally, a topper) is a tall, flat-crowned hat traditionally associated with formal wear in Western dress codes, meaning white tie, morning dress, or frock coat. Traditionally made of black silk or sometimes grey, the top hat emerged in Western fashion by the end of the 18th century.\n[…]\nIt also remains part of the formal dress of those occupying prominent positions in certain traditional British institutions, such as officers at the Bank of England, certain City stock exchange officials, occasionally members of Lincoln's Inn and those working at the Law Courts, judges of the Chancery Division and King's Counsel, boy-choristers of King's College Choir, dressage horseback riders, and servants or doormen attired in livery.\n[…]\nThe 1840s and the 1850s saw it reach its most extreme form, with ever-higher crowns and narrow brims. The stovepipe hat was a variety with mostly straight sides, while one with slightly convex sides was called the \"chimney pot\". The style most commonly referred to as the stovepipe was popularized in the United States by Abraham Lincoln during his presidency; though it is postulated that he may never have called it stovepipe himself, but merely a silk hat or a plug hat.\n[…]\nLincoln often carried documents and letters inside the hat. One of Lincoln's top hats is kept on display at the National Museum of American History in Washington, DC.\n[…]\nA top hat, frequently colored red, white and blue, or with stars and stripes similar to those on the American flag, is part of the regular costume of Uncle Sam, a symbol of the United States.\n[…]\nSteinberg, Neil, Hatless Jack: The President, the Fedora and the Death of the Hat, 2005, Granta Books"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abraham_Lincoln",
        "situacao": "ok",
        "texto": "Abraham Lincoln (February 12, 1809 – April 15, 1865) was the 16th president of the United States, from 1861 until his assassination in 1865. He led the United States through the American Civil War, defeating the Confederacy and playing a major role in the abolition of slavery.\n[…]\nThe second child of Thomas Lincoln and Nancy Hanks Lincoln, he was a descendant of Samuel Lincoln, an Englishman who emigrated to Massachusetts in 1637 (Abraham Lincoln said that Samuel Lincoln \"came from Norwich, England, in 1638\".) His paternal grandfather and namesake, Captain Abraham Lincoln, moved the family from Virginia to Kentucky. The captain was killed in a Native American raid in 1786. The family settled in Hardin County, Kentucky, in the early 1800s.\n[…]\nMemorials in Springfield, Illinois, include the Abraham Lincoln Presidential Library and Museum, Lincoln's home, and his tomb. A carving of Lincoln appears with those of three other presidents on Mount Rushmore, which receives about 3 million visitors a year. A statue of Lincoln completed by Augustus Saint-Gaudens stands in Lincoln Park, Chicago, with recastings given as diplomatic gifts standing in Parliament Square, London, and Parque Lincoln, Mexico City.\n[…]\nWorks by Abraham Lincoln at Project Gutenberg\n[…]\nAbraham Lincoln Presidential Library and Museum\n[…]\nAbraham Lincoln Association\n[…]\nAbraham Lincoln: A Resource Guide from the Library of Congress\n[…]\nPapers of Abraham Lincoln Digital Library from Abraham Lincoln Presidential Library — A digitization of all documents written by or to Abraham Lincoln during his lifetime\n[…]\nLincoln/Net: Abraham Lincoln Historical Digitization Project – Northern Illinois University Digital Library\n[…]\n\"Writings of Abraham Lincoln\" from C-SPAN's American Writers: A Journey Through History, June 18, 2001"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cartola",
        "situacao": "ok",
        "texto": "A cartola é um chapéu masculino de aba estreita, copa alta (chamada de chaminé pelos estilistas da época) e cilíndrica, frequentemente de cor preta e brilhante, e usado habitualmente em ocasiões solenes em conjunto com o fraque (roupa formal diurna) ou com a casaca (roupa formal noturna). Era chamado originalmente de chapéu alto.\n[…]\nNa segunda metade do século XIX, com o engajamento das mulheres, geralmente de baixa estatura, às companhias de navegação e a necessidade de diferenciá-las do uniforme dos homens, que usavam o famoso quepe militar, desenhou-se uma indumentária semelhante ao quepe, que foi a cartola. Os estilistas costumavam acrescentar as cores da companhia de navegação no contorno da chaminé da cartola.\n[…]\nNo século XIX, o espírito popular já o criticava, apelidando-o de \"chaminé\", de \"canudo\" ou de \"cartola\", uma variante de \"quartola\", nome dado a uma pequena pipa que correspondia a um quarto de tonel, com a qual o chapéu se parecia.\n[…]\nNas caricaturas da imprensa, a cartola, o fraque, o monóculo e o charuto compõem a figura dos novos-ricos e dos magnatas. Por associação, passou a denominar a classe dos dirigentes esportivos que enriqueceram — muitas vezes ilicitamente — administrando clubes de futebol.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Camisa listrada bretã",
      "descricao": "Camisa de malha com listras horizontais azuis e brancas, adotada pela marinha francesa em 1858 e popularizada na moda por Coco Chanel."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Qual pintor espanhol foi fotografado muitas vezes usando a camisa listrada de marinheiro bretã, que virou parte de sua imagem?",
    "resposta": "Pablo Picasso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Breton_shirt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Breton_shirt",
        "situacao": "ok",
        "texto": "A marinière (French: [maʁinjɛʁ]), or tricot rayé (French: [tʁiko ʁɛje]; lit. 'striped sweater'), is a cotton long-sleeved shirt with horizontal blue and white stripes. Characteristically worn by quartermasters and seamen in the French Navy, it has become a staple in civilian French fashion and, especially outside France, this kind of striped garment is often part of the stereotypical image of a Fr\n[…]\nIt is also known as a Breton shirt, as many sailors in the French Navy were from Brittany.\n[…]\nIn the 1940s the marinière was worn by John Wayne, then Jean Cocteau, Pablo Picasso, Brigitte Bardot, Marcel Marceau. Much later, Sting modelled for photographs wearing one.\n[…]\nIn 2006, the marinière was rediscovered as an item of eveningwear.\n[…]\nIn the 2000s, Kenzo Takada started selling marinières, with polka dots, Sonia Rykiel having previously used differently coloured stripes, most often black, before returning to white on blue.\n[…]\nIn 2010, the marinière set the trend: the Elite modelling agency in its annual competition, it dressed the finalists in them; Prada added them in its September collection, Gilas Loaëc's Breton brand Kitsuné, took it up, as did Dolce & Gabbana, Michael Kors and others.\n[…]\nIn 2017, the Museum of Modern Art (MOMA) has chosen the Orcival Breton top to epitomize the genuine Breton top for its exhibition \"Is Fashion Modern?\"\n[…]\nOn 19 October 2012, Arnaud Montebourg, the  French Industry Minister, wore an Armor Lux marinière in a cover photo for Le Parisien's magazine. Montebourg had agreed to the magazine's request to wear the marinière, with a French-made watch, in front of French-made household appliances. The cover article was a ten-page dossier on \"Made in France\", Montebourg's domestic production drive.\n[…]\nTelnyashka – An undershirt used with military uniforms in Russia inspired by the marinière\n[…]\nMedia related to Marinière shirts at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Gibão de couro",
      "descricao": "Casaco de couro do vaqueiro nordestino, usado com chapéu e perneiras do mesmo material"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Qual sanfoneiro pernambucano adotou como figurino de palco o chapéu e o gibão de couro do vaqueiro nordestino?",
    "resposta": "Luiz Gonzaga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Luiz_Gonzaga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Luiz_Gonzaga",
        "situacao": "ok",
        "texto": "Luiz Gonzaga do Nascimento (Exu, 13 de dezembro de 1912 – Recife, 2 de agosto de 1989) foi um cantor, compositor e multi-instrumentista brasileiro. Também conhecido como o Rei do Baião, é tido como um dos mais destacados nomes do forró.\n[…]\nNos dias em que não dava aula para crianças do primário, cuidava das finanças de Luiz em um escritório que ele montara. Eles noivaram em 1947 e casaram-se em 1948, permanecendo juntos até o fim da vida de Luiz. Helena não conseguia engravidar e o casal adotou uma criança, uma menina recém-nascida, a quem batizaram de Rosa Cavalcanti Gonzaga do Nascimento.\n[…]\nLuiz Gonzaga sofreu de osteoporose por anos. Em 2 de agosto de 1989, morreu vítima de parada cardiorrespiratória no Hospital Santa Joana, na capital pernambucana. Outra fonte diz que ele foi vítima de um câncer de próstata. Seu corpo foi velado na Assembleia Legislativa de Pernambuco, no Recife e posteriormente sepultado em seu município natal.\n[…]\nEm 2003, o então governador de Pernambuco, Jarbas Vasconcelos, sancionou lei que denomina “Rodovia Luiz Gonzaga” o trecho da BR-232 que liga o Recife a Caruaru. O trecho foi estadualizado e recebeu, à época, a importante obra de duplicação.[carece de fontes]?\n[…]\nA Usina Hidrelétrica Luiz Gonzaga, localizada no município de Petrolândia, no sertão pernambucano, foi assim denominada em homenagem ao cantor.\n[…]\nEm 2020, pesquisadores da Unicamp homenagearam Luiz Gonzaga no nome da nova espécie de rã \"Pithecopus gonzagai\", um anfíbio que habita os estados ao norte do Rio São Francisco e é endêmica da Caatinga nordestina.\n[…]\nCentro Luiz Gonzaga de Tradições Nordestinas\n[…]\nMuseu de Gonzagão\n[…]\nGonzagão Online — A Vida, História e a Obra de Luiz Gonzaga, O Rei do Baião e Pernambucano do Século\n[…]\nLuiz \"Lua\" Gonzaga, BR"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Gabardine",
      "descricao": "Tecido resistente e impermeável de trama diagonal, usado em casacos e capas de chuva"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Qual explorador norueguês vestia roupas de gabardine Burberry na expedição que chegou primeiro ao Polo Sul, em 1911?",
    "resposta": "Roald Amundsen",
    "distratores": [
      "Fridtjof Nansen",
      "Ernest Shackleton",
      "Robert Falcon Scott"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Burberry",
      "https://en.wikipedia.org/wiki/Gabardine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Burberry",
        "situacao": "ok",
        "texto": "Burberry Group plc is a British luxury fashion house established in 1856 by Thomas Burberry and headquartered in London, England. It designs and distributes ready to wear, including trench coats, leather accessories, and footwear. It is listed on the London Stock Exchange and is a constituent of the FTSE 100 Index.\n[…]\nIn 1901, the Burberry Equestrian Knight logo was developed containing the Latin word \"Prorsum\", meaning \"forwards\", and it was registered as a trademark in 1909. In 1911, the company became the outfitters for Roald Amundsen, the first man to reach the South Pole, and Ernest Shackleton, who led a 1914 expedition to cross Antarctica. A Burberry gabardine jacket was worn by George Mallory on his attempt on Mount Everest in 1924.\n[…]\nShe wore a reversible coat with waterproof gabardine outside for flying and with a tweed inner side which could be turned outside to create a smart look for disembarking under the glare of the publicity her exploits attracted. In 1937, A. E. Clouston and Betty Kirby-Green broke the world record for the fastest return flight from London to Cape Town in The Burberry airplane that was sponsored by the brand.\n[…]\nIn October 2023, Burberry collaborated with Vestiaire Collective on a new circular style project. This partnership would allow customers to exchange their second-hand Burberry clothing and handbags for a Burberry gift card, which they could reinvest in the brand, with the aim of promoting resale and reducing clothing waste.\n[…]\nBurberry also revealed plans for job cuts, primarily in its UK corporate office.\n[…]\nBurberry's shares rose 16% following the announcement.\n[…]\nOfficial Burberry Group plc corporate website\n[…]\nOfficial Burberry consumer website\n[…]\nDocuments and clippings about Burberry in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gabardine",
        "situacao": "ok",
        "texto": "Gabardine is a durable twill worsted wool. It is a tightly woven waterproof fabric and is used to make outerwear and various other garments, such as suits, topcoats, trousers, uniforms, and windbreakers. Thomas Burberry created the fabric in the late 1870s and patented it in 1888. The name gabardine comes from \"gaberdine\", a type of long, cape-like dress worn during the Middle Ages.\n[…]\nThe modern use to describe a fabric rather than a garment dates to Thomas Burberry, founder of the Burberry fashion house in Basingstoke, Hampshire, England, who invented the fabric and revived the name gabardine in 1879. It was introduced by Burberry and patented in 1888.\n[…]\nGabardine was quickly recognised for its military applications in the United Kingdom. In 1902, the British War Office commissioned Burberry to use the material in designing new coats for its soldiers that would better withstand demanding battlefield conditions. The original coat model produced by that commission was later updated, in 1914, in response to the harsh conditions of trench warfare during World War I.\n[…]\nBurberry clothing of gabardine was also worn by many polar explorers. The fabric's first arctic field test was performed by Fridtjof Nansen, a Norwegian scientist, explorer, diplomat, and eventual Nobel Peace Prize recipient who wore gabardine on his 1893 Fram expedition toward the North Pole.\n[…]\nSubsequent polar explorers donned gabardine after Nansen's expedition, including Roald Amundsen, the first man to reach the South Pole, in 1911, and Ernest Shackleton, who used the material for clothing, tents, and even engine covers during a 1914 expedition to cross Antarctica. A jacket and plus-fours of this material were worn by George Mallory in his attempt on Mount Everest in 1924.\n[…]\nClothing made from authentic wool gabardine generally requires dry cleaning, as wool likes to shrink in the wash."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Burberry",
        "situacao": "ok",
        "texto": "Burberry é uma casa de moda britânica, especializada em roupa, acessórios de luxo, perfume, óculos de sol e cosméticos. A sua imagem de marca é constituída por um padrão em quadrados (Tartan). A Burberry é uma das marcas de moda mais famosas do mundo, tendo casas próprias, franchise, venda por catálogo, e uma linha de perfumes. A Burberry é mais conhecida pelos seus casacos, originalmente desenhad\n[…]\nA Burberry foi fundada em 1856, por um jovem de 21 anos, chamado Thomas Burberry, em Basingstoke, Hampshire, na Inglaterra. Ele tinha trabalhado como aprendiz de negociante de panos. Em 1870, o negócio tinha conseguido se estabelecer através do seu foco em roupas para o frio, ao ar livre. Anos mais tarde, em 1880, Thomas Burberry inventa a gabardine, um vestuário resistente, à prova-de-água mas do qual o material ainda deixava respirar.\n[…]\nEm 1901, o logotipo do cavaleiro equestre com a palavra 'Prorsum'('avante' em Latim) foi desenvolvido e registrado como marca registrada. Em 1911 eles se tornaram os fornecedores do Roald Amundsen, o primeiro homem a chegar ao pólo sul, e  Ernest Shackleton, que em 1914 liderou uma expedição para atravessar a Antártica. Uma jaqueta gabardina da Burberry foi vestida pelo George Mallory na sua expedição presumidamente fracassada no Monte Everest em 1924.\n[…]\nBurberry começou a vender on-line primeiro nos EUA, seguido pelo Reino Unido em outubro de 2006, e o resto da UE em 2007. Bailey se tornou Chief Creative Officer, em novembro de 2009, enquanto em 2012 Ahrendts foi a CEO mais bem paga do Reino Unido, fazendo £16.9m, foi a primeira vez que uma mulher esteve no topo da lista.\n[…]\nEmbora a Burberry promove sua conexão britânica, de acordo com The Guardian, um jornal diário nacional britânico, desde Julho de 2012 a Burberry mantém apenas duas unidades de produção na Grã-Bretanha, um em Castleford aonde produzem gabardinas, e um menor em Keighley.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Relógio Cartier Santos",
      "descricao": "Relógio de pulso criado pelo joalheiro Louis Cartier para o aviador Alberto Santos-Dumont, no início do século vinte."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O joalheiro Louis Cartier criou um relógio de pulso para que qual aviador brasileiro pudesse ver as horas sem soltar os comandos?",
    "resposta": "Santos-Dumont",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cartier_(jeweler)",
      "https://pt.wikipedia.org/wiki/Alberto_Santos-Dumont"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cartier_(jeweler)",
        "situacao": "ok",
        "texto": "Cartier ( KAR-tee-ay, French: [kaʁtje] ) is a French luxury goods conglomerate that designs, manufactures, distributes and sells jewelry, watches, leather goods, sunglasses and eyeglasses. Founded in 1847 by Louis-François Cartier (1819–1904) in Paris, France, the company remained under family control until 1964. The company is headquartered in Paris and is currently a subsidiary of the Swiss Rich\n[…]\nIn 1904, Brazilian pioneer aviator Alberto Santos-Dumont complained to his friend Louis Cartier of the unreliability and impracticality of using pocket watches while flying. Cartier designed a flat wristwatch with a distinctive square bezel that was favored by Santos-Dumont and many other customers. This was the first and only time the brand would name a watch after its original wearer. The \"Santos\" watch was Cartier's first men's wristwatch.\n[…]\nAfter the death of Pierre in 1964, Jean-Jacques Cartier (Jacques's son), Claude Cartier (Louis's son), and Marion Cartier Claudel (Pierre's daughter)—who respectively headed the Cartier affiliates in London, New York, and Paris—sold the businesses.\n[…]\n1911: Santos de Cartier wristwatch.\n[…]\n1922: Tank Louis Cartier and Tank Chinoise watches\n[…]\n1978: Santos de Cartier watch with a gold and steel bracelet\n[…]\n1981: Santos de Cartier\n[…]\nFrom its inception, Empress Eugénie was a valued client of Louis-François Cartier and Alfred Cartier, which solidified the reputation of the jeweler. Princess Mathilde, a relative of Napoleon and cousin of Emperor Napoleon III, made her initial purchase in 1856 and maintained her loyalty as a customer. The diamond tiara adorned with olive leaf motifs that Princess Marie Bonaparte wore highlighted the splendor of the Bonaparte family.\n[…]\nIn the 1988 film Wall Street, Michael Douglas, a symbol of the yuppie style, proudly wore a gold \"Santos\" watch.\n[…]\nCartier Racing Award\n[…]\nCartier Tank\n[…]\nFondation Cartier pour l'Art Contemporain"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alberto_Santos-Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos Dumont (Palmira, 20 de julho de 1873 – Guarujá, 23 de julho de 1932) foi um aeronauta, esportista, autodidata e inventor brasileiro. Santos Dumont projetou, construiu e voou os primeiros balões dirigíveis com motor a gasolina. Esse mérito lhe é garantido internacionalmente pela conquista do Prêmio Deutsch em 1901, quando em um voo contornou a Torre Eiffel com o seu dirigível Nº 6, t\n[…]\nEm 1924 Tarsila do Amaral pintou \"Carnaval em Madureira\", onde representava a réplica torre com o dirigível construída em Madureira para o carnaval daquele ano, e a presença de afro-brasileiros durante a festa. Em 2004 a Unidos da Tijuca relembrou o aviador, com diversos cientistas — entre eles o ganhador do Prêmio Nobel Roald Hoffmann — vestidos como Santos Dumont.\n[…]\nEm 2012, a Cartier produziu uma série de relógios com o nome do piloto brasileiro, celebrando a parceria entre a marca e Santos Dumont, responsável pelo desenho que até hoje é característico da empresa; como peça publicitária foi realizado um premiado filme pela francesa Quad Productions France com animação digital a mesclar-se em locações reais, em que aparece o piloto brasileiro interagindo com um leopardo, figura central da peça — intitulada L'Odyssée de Cartier.\n[…]\nA controvérsia sobre a sexualidade de Santos Dumont é há muito discutida, inclusive pelos seus biógrafos, uma vez que o aviador brasileiro nunca se casou e, além disso, mantinha uma aparência sempre bem cuidada, modos refinados e era bastante tímido.\n[…]\nMas recentemente, Santos Dumont foi elencado na lista dos \"100 homossexuais vips do Brasil\", formulada pelo antropólogo Luiz Mott, reacendendo a discussão em relação à vida sexual do aviador brasileiro. A família de Santos Dumont tem repudiado as alegações de homossexualidade do aviador. Santos Dumont teria tido um caso homoafetivo com Georges Goursat em 1901.\n[…]\n«Histórias do Brasil - Santos Dumont»  — TV Senado"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Chapéu-panamá",
      "descricao": "Chapéu de aba trançado à mão com fibras da palha toquilla."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Apesar do nome, o tradicional chapéu-panamá, trançado com palha toquilla, é fabricado em qual país?",
    "resposta": "Equador",
    "distratores": [
      "Panamá",
      "Colômbia",
      "Peru"
    ],
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
      "nome": "Barrete frígio",
      "descricao": "Gorro cônico macio com a ponta dobrada para a frente, usado na Antiguidade e depois símbolo de liberdade na Revolução Francesa."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Frígia, região antiga que deu nome ao barrete usado como símbolo da Revolução Francesa, fica em qual país atual?",
    "resposta": "Turquia",
    "distratores": [
      "Grécia",
      "Armênia",
      "Síria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Phrygian_cap",
      "https://en.wikipedia.org/wiki/Phrygia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phrygian_cap",
        "situacao": "ok",
        "texto": "The Phrygian cap ( ), also known as Thracian cap and liberty cap, is a soft conical cap with the apex bent over, associated in antiquity with several peoples in Eastern Europe, Anatolia, and Asia. The Phrygian cap was worn by Thracians, Dacians, Medes, Scythians, Sakas, Trojans and Phrygians after whom it is named. The oldest known depiction of the Phrygian cap is from Persepolis in Iran.\n[…]\nIt was adopted in place of a crown on the coats of arms of the Argentina, Cuba, and Nicaragua republics as a symbol of their struggle for liberation and independence. It thus came to be identified as a symbol of republican government. A number of national personifications, including France's Marianne and the United States' Columbia are commonly depicted wearing the Phrygian cap.\n[…]\nThe use of a Phrygian-style cap as a symbol of revolutionary France is first documented in May 1790, at a festival in Troyes, adorning a statue representing the nation, and at Lyon, on a lance carried by the goddess Libertas. To this day the national allegory of France, Marianne, is shown wearing a red Phrygian cap.\n[…]\nThe anti-tax associations with the bonnet rouge were revived in October 2013, when a French tax-protest movement called the Bonnets Rouges used the red revolution-era Phrygian cap as a protest symbol. By means of large demonstrations and direct action, which included the destruction of many highway trucking tax portals, the movement successfully forced the French government to rescind the tax.\n[…]\nMany of the anti-colonial revolutions in Latin America were heavily inspired by the imagery and slogans of the American and French Revolutions. As a result, the cap has appeared on the coats of arms of many Latin American nations. The coat of arms of Haiti includes a Phrygian cap to commemorate that country's foundation by rebellious slaves.\n[…]\nThe dictionary definition of Phrygian cap at Wiktionary"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Phrygia",
        "situacao": "ok",
        "texto": "In classical antiquity, Phrygia ( FRIJ-ee-ə; Ancient Greek: Φρυγία, Phrygía) was a civilization and kingdom in the west-central part of Anatolia, in what is now Asian Turkey, centered on the Sangarios River.\n[…]\nClassical Greek iconography identifies the Trojan Paris as non-Greek by his Phrygian cap, which was worn by Mithras and survived into modern imagery as the \"liberty cap\" of the American and French revolutionaries.\n[…]\nIn one of the so-called Homeric Hymns, Phrygia is said to be \"rich in fortresses\" and ruled by \"famous Otreus\".\n[…]\nVisitors from Phrygia were reported to have been among the crowds present in Jerusalem on the occasion of Pentecost as recorded in Acts 2:10. In Acts 16:6 the Apostle Paul and his companion Silas travelled through Phrygia and the region of Galatia proclaiming the Christian gospel.\n[…]\nThe Christian heresy known as Montanism, and still known in Orthodoxy as \"the Phrygian heresy\", arose in the unidentified village of Ardabau in the 2nd century AD, and was distinguished by ecstatic spirituality and women priests. Originally described as a rural movement, it is now thought to have been of urban origin like other Christian developments. The new Jerusalem its adherents founded in the village of Pepouza has now been identified in a remote valley that later held a monastery.\n[…]\n\"Phrygia\". Ancient History Encyclopedia. Archived from the original on 19 November 2010. Retrieved 10 June 2010.\n[…]\n\"Phrygian Period in Anatolia\". Ancient Anatolia. Archived from the original on 6 December 2006.\n[…]\nRamsay, William Mitchell (1911). \"Phrygia\" . Encyclopædia Britannica. Vol. 21 (11th ed.). pp. 541–544.\n[…]\n\"King Midas and Phrygia Cultural Center\". Archived from the original on 20 July 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barrete_fr%C3%ADgio",
        "situacao": "ok",
        "texto": "O barrete frígio ou barrete da liberdade é uma espécie de touca ou carapuça, originariamente utilizada pelos moradores da Frígia (antiga região da Ásia Menor, onde hoje está situada a Turquia). Foi adotado, na cor vermelha, pelos republicanos franceses que lutaram pela tomada da Bastilha em 1789, que culminou com a instalação da primeira república francesa em 1792. Por essa razão, tornou-se um for\n[…]\nO barrete frígio era utilizado pelos sincretistas helenistas e romanos para representar o deus salvador de origem persa Mitra. Ele era usado durante o Império Romano pelos antigos escravos que tinham conseguido emancipação de seus mestres e cujos descendentes eram, por esta razão, considerados cidadãos do império. Este uso é frequentemente considerado a origem de seu significado como um símbolo de liberdade.\n[…]\nDurante o século XVIII, o barrete frígio vermelho ganhou a significação de símbolo da liberdade, segurado acima do mastro da liberdade durante a guerra da independência dos Estados Unidos da América. Ele também foi adotada durante a Revolução Francesa e faz parte, atualmente, do emblema nacional da França: Marianne usando um barrete frígio.\n[…]\nNo Brasil, o barrete frígio surge no desenho da bandeira dos estados do Rio Grande do Sul e de Santa Catarina (lei n.º 975, de 23 de outubro de 1953); nos brasões dos estados do Acre, do Amazonas, da Bahia, da Paraíba, das cidades do Rio de Janeiro, Viamão (Rio Grande do Sul), Maceió (Alagoas) e Rio Claro (São Paulo).\n[…]\nO barrete frígio é também mostrado em certas moedas mexicanas (mais notadamente na antiga moeda de oito reales) durante o fim do século XIX até meados do século XX e escudos portugueses da primeira metade do século XX. Também é uma denominação utilizada na medicina para uma variação anatômica da vesícula biliar, devido à semelhança da sua forma.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Seda",
      "descricao": "Fibra natural produzida a partir do casulo do bicho-da-seda, originária da China"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Por volta do ano 550, monges levaram ovos de bicho-da-seda escondidos em bastões ocos para o imperador de qual império?",
    "resposta": "Império Bizantino",
    "distratores": [
      "Império Persa",
      "Império Carolíngio",
      "Império Gupta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Byzantine_silk",
      "https://en.wikipedia.org/wiki/Silk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Byzantine_silk",
        "situacao": "ok",
        "texto": "Byzantine silk is silk woven in the Byzantine Empire (Byzantium) from about the fourth century until the Fall of Constantinople in 1453.\n[…]\nThese regulations were incited under imperial decrees, which led to an imperial monopoly over the usage of silk within the Byzantine Empire. The purple dyes in particular were monopolized. Due to the high costs and labor involved, the imperials were the only ones able to produce the purple silk as well. The Empire had a cooperative body called a collegia oversee the production of purple dyes with silk making.\n[…]\nIn the 10th century, non-imperial guilds maintained some of the silk production in the Byzantine Empire, especially in Constantinople. There were regulations these guilds had to follow, which were documented in the Book of the Perfect. For example, purples and certain blues and reds could only be sold and produced for people in the imperial court or of a high social standing. There were also types of petticoats and garments reserved for these groups as well under this book.\n[…]\nHoloblattia refers to silk used in more important goods or the goods themselves. Some examples of this are ceremonial attire for church singers and ceremonial attire for imperial guards.\n[…]\nA unique special arrangement had to be made whereby the English crown paid directly a sum to Pavia in lieu of the customs duty on silk, which the Pavians found too difficult or dangerous to collect from English merchants. Diplomatic gifts also cascaded down from the Imperial court in Constantinople, with the rulers who received them passing many on to other rulers, and churches both in and outside their territory."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Silk",
        "situacao": "ok",
        "texto": "Silk is a natural protein fiber, some forms of which can be woven or knitted into textiles. The protein fiber of silk is composed mainly of fibroin (75-80%) and a smaller coating of sericin (20-25%). It is most commonly produced from the cocoons of certain insect larvae. The best-known silk is obtained from the cocoons of the larvae of the mulberry silkworm Bombyx mori, which are reared in captivi\n[…]\nDespite the popularity of silk, the secret of silk-making only reached Europe around AD 550, via the Byzantine Empire. Contemporary accounts state that monks working for the emperor Justinian I smuggled silkworm eggs to Constantinople from China inside hollow canes. All top-quality looms and weavers were located inside the Great Palace complex in Constantinople, and the cloth produced was used in imperial robes or in diplomacy, as gifts to foreign dignitaries.\n[…]\nFeltwell, John (1990). The Story of Silk. Alan Sutton Publishing. ISBN 0-86299-611-2.\n[…]\nGood, Irene (December 1995). \"On the Question of Silk in Pre-Han Eurasia\". Antiquity. Vol. 69, Number 266. pp. 959–968.\n[…]\nKuhn, Dieter (1995). \"Silk Weaving in Ancient China: From Geometric Figures to Patterns of Pictorial Likeness\". Chinese Science. 12. pp. 77–114.\n[…]\nRayner, Hollins (1903). Silk throwing and waste silk spinning. Scott, Greenwood, Van Nostrand. OL 7174062M.\n[…]\nRicci, G.; et al. (2004). \"Clinical Effectiveness of a Silk Fabric in the Treatment of Atopic Dermatitis\". British Journal of Dermatology. Issue 150. pp. 127–131.\n[…]\nLiu, Xinru (1996). Silk and Religion: An Exploration of Material Life and the Thought of People, AD 600–1200. Oxford University Press.\n[…]\nLiu, Xinru (2010). The Silk Road in World History. Oxford University Press. ISBN 978-0-19-516174-8; ISBN 978-0-19-533810-2 (pbk).\n[…]\nReferences to silk by Roman and Byzantine writers\n[…]\nA series of maps depicting the global trade in silk\n[…]\nHistory of traditional silk in martial arts uniforms"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Seda_bizantina",
        "situacao": "ok",
        "texto": "Seda bizantina é a designação dada à seda produzida no Império Bizantino desde o século IV até à queda de Constantinopla em 1453.\n[…]\nDepois do reino de Justiniano (r. 525–567), a manufatura e venda de seda tornou-se um monopólio imperial, sendo a seda produzida em fábricas imperiais e só era vendida a compradores autorizados.\n[…]\nEstas ricas sedas — que valiam literalmente o seu peso em ouro — foram armas políticas poderosas no Império Bizantino entre os séculos IV e XII. Os presentes diplomáticos de sedas bizantinas cimentaram alianças com os Francos. Bizâncio atribuiu concessões de comércio de seda às potências marítimas de Veneza, Pisa, Génova, Amalfi para assegurar a ajuda militar e naval aos territórios bizantinos.\n[…]\nDevido aos Pavianos acharem difícil ou perigoso cobrarem as taxas alfandegárias dos mercadores de seda ingleses, foi estabelecido um acordo especial pelo qual a coroa inglesa pagava diretamente uma quantia a Pavia em vez das taxas alfandegárias usuais. Os presentes diplomáticos oferecidos pela corte imperial bizantina a governantes estrangeiros eram frequentemente depois oferecidos pelos seus destinatários a outros governantes e a igreja, tanto dentro como fora dos seus territórios.\n[…]\nDepois da conquista de Constantinopla em 1204 pelas tropas da Quarta Cruzada e a fundação do Império Latino (1204–1261) e da constituição de outros \"estados latinos\" nos territórios bizantinos, a indústria bizantina de seda declinou, passando a abastecer apenas o mercado de luxo doméstico, e a liderança da tecelagem de seda passou para a Sicília e os centros emergentes italianos de Luca e Veneza.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Jeans",
      "descricao": "Calça de tecido de algodão resistente, geralmente azul, popularizada pela Levi Strauss & Co."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Os rebites que reforçam os cantos dos bolsos da calça jeans tradicional, desde a patente de 1873, são de qual metal?",
    "resposta": "Cobre",
    "distratores": [
      "Ferro",
      "Alumínio",
      "Prata"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jeans",
      "https://en.wikipedia.org/wiki/Levi_Strauss_%26_Co."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jeans",
        "situacao": "ok",
        "texto": "Jeans are a type of trousers made from denim or dungaree cloth. Often the term \"jeans\" refers to a particular style of trousers, called \"blue jeans\", with the addition of copper pocket rivets added by Jacob W. Davis in 1871 and patented by Davis and Levi Strauss on May 20, 1873. Prior to the patent, the term \"blue jeans\" had been long in use for various items of workwear (including trousers, overa\n[…]\nInitially, Strauss's jeans were simply sturdy trousers worn by factory workers, miners, farmers, and cattlemen throughout the North American West. During this period, men's jeans had the fly down the front, whereas women's jeans had the fly down the left side. When Levi Strauss & Co. patented the modern, mass-produced prototype in 1873, there were two pockets in the front and a patch pocket on the back right reinforced with copper rivets.\n[…]\nTraditionally, jeans were dyed to a blue color using natural indigo dye. Most denim is now dyed using synthetic indigo. Approximately 20 thousand tons of indigo are produced annually for this purpose, though only a few grams of the dye are required for each pair. For other colors of denim other dyes must be used. Currently, jeans are produced in any color that can be achieved with cotton.\n[…]\nIn 1957, during the 6th World Festival of Youth and Students held in Moscow, Soviet Union (present-day Russia), Western-made jeans were first introduced to the communist state and sparked \"jeans fever\" at the time. People preferred to wear Western-made blue jeans rather than local-made black ones. In Soviet ideology, such an action challenged communist-made jeans and symbolized Western victory. In 1961, two ringleaders, Y. T. Rokotov and V. P.\n[…]\nFaibishenko, were caught with their group for smuggling currencies from other countries along with blue jeans and other contraband. Under the leadership of Nikita Khrushchev, the duo were executed.\n[…]\nDesigner jeans\n[…]\nMom jeans"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Levi_Strauss_%26_Co.",
        "situacao": "ok",
        "texto": "Levi Strauss & Co. is an American clothing company known worldwide for its Levi's brand of denim jeans. It was founded in May 1853 when German-Jewish immigrant Levi Strauss moved from New York City, New York, to San Francisco, California, to open a West Coast branch of his brothers' New York dry goods business. The corporation is registered in Delaware and its headquarters is located in Levi's Pla\n[…]\nBetween the 1950s and 1980s, Levi's jeans became popular among a wide range of youth subcultures, including greasers, mods, rockers, and hippies. Levi's popular shrink-to-fit 501s were sold as labeled, sized as manufactured, and had substantial shrinkage upon laundering. The crotch rivet, watch pocket rivets, and waist cinch were removed during World War II to conform with War Production Board metal conservation rules and only the watch pocket rivets restored after.\n[…]\nLevi's is aggressive in advertising, marketing, and trademark protection. It has used its signature arched stitching on the back pockets of its jeans since 1873. In 1943, the firm trademarked the design in the U.S. and has done so in more than 100 total jurisdictions as of 2019. It has also trademarked various word marks, including \"Levi's\", \"Red Tab\", \"Orange Tab\", \"Silvertab\", \"501\", \"505\", \"517\", \"550\", \"569\", and \"Dockers\".\n[…]\nContinued demand for the jeans resulted in both genuine articles and bootlegs becoming commonplace in Soviet black markets, and in 1979, the Soviet government struck deals with Levi's and the VF Corporation to manufacture jeans for consumers in the region; however, this deal fell through due to the 1980 Summer Olympics boycott following the onset of the Soviet–Afghan War.\n[…]\nFord, Carin T. (2004). Levi Strauss: The Man Behind Blue Jeans (Famous Inventors). Enslow Publishers. ISBN 0-7660-2249-8.\n[…]\nVan Steenwyk, Elizabeth (1988). Levi Strauss: The Blue Jeans Man. Walker. ISBN 0-8027-6795-8."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jeans",
        "situacao": "ok",
        "texto": "Jeans ou calças de ganga [PT]  são um tipo de calças feitas de ganga, brim ou denim. Frequentemente, o termo \"jeans\" se refere a um estilo particular de calças, chamado \"jeans azul\", com bolsos rebitados em cobre que foram inventados por Jacob W. Davis em 1871 e patenteados por Jacob W. Davis e Levi Strauss em maio 20, 1873. Antes da patente, o termo \"jeans azul\" era muito usado para várias roupas\n[…]\nPesquisas sobre o comércio do tecido jeans mostram que ele surgiu nas cidades de Gênova, na Itália, e Nîmes, na França. Gênes, palavra francesa para Gênova, pode ser a origem da palavra “jeans”. Em Nîmes, os tecelões tentaram reproduzir o tecido jeans, mas em vez disso desenvolveram um tecido de sarja semelhante que ficou conhecido como brim ou denim, \"de Nîmes\".\n[…]\nO tecido jeans de Gênova era um tecido fustão de \"qualidade média e custo razoável\", muito semelhante ao veludo de algodão pelo qual Gênova era famosa, e era \"usado para roupas de trabalho em geral\". A marinha genovesa equipou seus marinheiros com jeans, pois eles precisavam de um tecido que pudesse ser usado molhado ou seco. O brim de Nîmes era mais grosseiro, considerado de qualidade superior, e era usado \"para peças de vestuário como batas ou macacões\".\n[…]\nNo século XVII, o jeans era um tecido crucial para a classe trabalhadora no norte da Itália. Isso é visto em uma série de pinturas de gênero por volta do século XVII atribuídas a um artista agora apelidado de The Master of Blue Jeans. As dez pinturas retratam cenas empobrecidas com figuras de classe baixa vestindo um tecido que parece jeans. O tecido seria jeans genovês, que era mais barato.\n[…]\nA Historia do Jeans\n[…]\nBreve história do Blue Jeans. Crítica “calças azuis rebitadas”.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Denim",
      "descricao": "Tecido de algodão resistente em sarja, geralmente azul, usado na confecção de jeans"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O azul tradicional do tecido denim vem de qual corante, extraído originalmente de plantas?",
    "resposta": "Índigo (anil)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Denim"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Denim",
        "situacao": "ok",
        "texto": "Denim is a sturdy, cotton, warp-faced textile in which the weft passes under two or more warp threads. This twill weave produces a diagonal ribbing that distinguishes it from cotton duck. Denim, as it is recognised today, was first produced in Nîmes, France.\n[…]\nDenim originated as a contraction of the French phrase sergé de Nîmes ('serge from Nîmes').\n[…]\nDenim fabric\n[…]\nDenim was originally dyed with indigo dye extracted from plants, often from the genus Indigofera. In South Asia, indigo dye was extracted from the dried and fermented leaves of Indigofera tinctoria; this is the plant that is now known as \"true indigo\" or \"natural indigo\". In Europe, the use of Isatis tinctoria, or woad, can be traced back to the 8th century BC, although it was eventually replaced by Indigofera tinctoria as the superior dye product.\n[…]\nHowever, most denim today is dyed with synthetic indigo dye. In all cases, the yarn undergoes a repeated sequence of dipping and oxidation—the more dips, the stronger the color of the indigo.\n[…]\nIndigo dyeing behaved differently from many other textile dyeing methods. Unlike many other dyes that fully penetrate the fibers of the material, indigo primarily adheres to the outer surface of the cotton yarns. This is what gives denim its distinctive aging characteristics. This happens because indigo is soluble in water and must be chemically reduced before dyeing; it is then rapidly oxidized when exposed to air.\n[…]\nAlong with this, the method in which the indigo dye is applied to the cotton affects the appearance of the denim. Rope dyeing and slasher dyeing are two of the most common industrial techniques that are used. Each of which influences the color and consistency, as well as the production efficiency."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brim",
        "situacao": "ok",
        "texto": "Ganga, brim ou denim é um tipo de tecido resistente, feito de algodão, linho ou fibra sintética, em que somente os fios do urdume (longitudinal) são tingidos com corante anil, normalmente com ligamento sarja. É um tecido muito apropriado para artesanato, como confecção de bolsas e fuxicos, confecção de roupas resistentes, forros para sofá (só para cobri-los), entre outros.\n[…]\nA palavra \"denim\" surgiu na França no século XVII a partir da expressão serge de Nîmes, em referência a um tecido produzido na cidade de Nîmes, mescla de seda e lã . No século XIX passou a designar um tecido de algodão bastante rústico, produzido nos Estados Unidos, usado pelos trabalhadores da época.\n[…]\nUma característica marcante desse tipo de tecido é o tingimento com anil (também conhecido como índigo). Este corante não tem muita afinidade com o algodão, por isso o tingimento fica apenas superficial nos fios de urdume, formando em cada fio um anel azul e deixando o núcleo branco. Com isso a solidez da cor é muito baixa ao atrito, onde o tecido sofre atrito perde a sua camada superficial de fibras e com isso perde a sua cor.\n[…]\nAtualmente estima-se o consumo mundial desse tecido acima de 3 bilhões de metros lineares por ano. Sendo os principais consumidores os Estados Unidos, a Europa e o Japão, representando juntos mais de 65% do consumo mundial.\n[…]\nO Brasil é um dos principais produtores desse tipo de tecido do mundo, com uma capacidade instalada de produção acima de 600 milhões de metros lineares por ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Kilt",
      "descricao": "Peça de vestuário tradicional escocesa, semelhante a uma saia até o joelho, de lã em padrão tartan e com pregas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No traje escocês completo com kilt, que objeto o homem leva tradicionalmente enfiado no alto da meia?",
    "resposta": "Uma pequena faca (sgian-dubh)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sgian-dubh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sgian-dubh",
        "situacao": "ok",
        "texto": "A sgian dubh ( skee-ən-DOO; Scottish Gaelic pronunciation: [s̪kʲənˈt̪u]) is a small, single-edged knife worn as part of traditional Scottish Highland dress. It is worn tucked into the top of the kilt hose with the hilt visible.\n[…]\nThe name comes from the Scottish Gaelic sgian-dubh, from sgian ('knife') and dubh ('black', also with the secondary meaning of 'hidden'.).\n[…]\nSince the modern sgian-dubh is worn mainly as a ceremonial item of dress and is usually not employed for cutting food or self-defence, blades are often of a simple construction. These are typically made from stainless steel. The hilts used on many modern sgian-dubhs are made of plastic that has been molded to resemble carved wood and fitted with cast metal mounts and synthetic decorative stones. Some are not even knives at all, but a plastic handle and sheath cast as one piece.\n[…]\nIn Scotland, England and Wales, carrying an offensive weapon is illegal, but can be permitted as part of wearing national costume. Carrying a sgian dubh has sometimes been banned in Britain; for example, they were banned from a school dance in Scotland, and initially banned for the 2014 celebration of the Battle of Bannockburn.\n[…]\nWhen travelling by air with a sgian dubh, it is prohibited in some countries from having it in the cabin, but it is allowed in checked baggage.\n[…]\nPiper Jeff McCarthy was fined CA$221 on 2 November 2016 for wearing a sgian dubh in his kilt hose while performing in Montreal, Canada. McCarthy contested the fine, which was cancelled, and his knife was returned.\n[…]\n[2]Labhran photographic archive of vintage and antique Scottish sgian dubh\n[…]\nMedia related to Sgian dubh at Wikimedia Commons\n[…]\nThe dictionary definition of sgian dubh at Wiktionary"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Camisa havaiana",
      "descricao": "Camisa social de manga curta e tecido estampado, originária do Havaí, também chamada aloha shirt."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As primeiras camisas havaianas foram costuradas com tecidos estampados de qual traje, trazidos por imigrantes japoneses?",
    "resposta": "Quimono",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aloha_shirt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aloha_shirt",
        "situacao": "ok",
        "texto": "The aloha shirt (Hawaiian: palaka aloha), also referred to as a Hawaiian shirt, is a style of dress shirt originating in Hawaii. They are collared and buttoned dress shirts, usually short-sleeved and made from printed fabric. They are traditionally worn untucked, but can be worn tucked into the waist of trousers. They are worn casually or as informal business attire in Hawaii.\n[…]\nWithin years, major designer labels sprang up all over Hawaii and began manufacturing and selling aloha shirts en masse. By the end of the 1930s, 450 people were employed in an industry worth $600,000 annually. Two notable manufacturers of this period are Kamehameha and Branfleet (later Kahala), both founded in 1936. Retail chains in Hawaii, including some based on the mainland, may mass-produce a single aloha shirt design for employee uniforms.\n[…]\nGarments manufactured in Hawaii could bear \"Made in Hawaii\" labels before statehood (1959), and even afterwards, their sales to mainland United States continued to be referred to as \"exports\". Aloha shirts tend to be referred to as \"Hawaiian shirts\" by the populace from the mainland United States, and are often brilliantly colored with floral patterns or generic Polynesian motifs. The aloha shirt is currently the premier textile export of the Hawaii manufacturing industry.\n[…]\nThe related concept of \"aloha attire\" stems from the aloha shirt. Semi-formal functions such as weddings, birthday parties, and dinners are often designated as \"aloha attire\", meaning that men wear aloha shirts and women wear muumuu or other tropical prints.\n[…]\nJams – Aloha shirt brand\n[…]\nKahala – Aloha shirt brand based in Hawaii\n[…]\nReyn Spooner – Aloha shirt brand based in California\n[…]\nKente cloth – African traditional clothing pattern similar to the Aloha shirt in style\n[…]\nKariyushi shirt - The garment that evolved after the Aloha shirt was introduced to Okinawa Prefecture."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Camisa_havaiana",
        "situacao": "ok",
        "texto": "A camisa Aloha, comumente conhecida como camisa havaiana, é um estilo de camisa de vestir originária do Havaí. É atualmente a principal exportação têxtil da indústria manufactureira das ilhas.\n[…]\nAs camisas tradicionais Aloha para homem, fabricadas para os residentes locais do Havaí, geralmente estão enfeitadas com desenhos de colchas tradicionais havaianas, desenhos de tampa e padrões florais simples em cores mais apagadas.\n[…]\nAs camisas Aloha contemporâneas podem ter estampados que não têm nenhum desenho floral ou de colcha havaiana tradicional, senão que podem incorporar bebidas, palmeiras, tábuas de surf ou outros elementos tropicais da ilha organizados no mesmo padrão que uma camisa tradicional Aloha.\n[…]\nSegundo um anúncio publicitário do Honolulu Advertiser de 28 de junho de 1935, a camisa Aloha vendeu-se pela primeira vez em \"Musashi-ya shoten\" em Honolulu, e foi precedida da \"Musashi-ya\", estabelecida pelo imigrante japonês Chōtarō Miyamoto (宮本 長 太郎) em 1904.\n[…]\nApós a morte de Miyamoto, em 1915, a loja foi rebaptizada como \"Musashiya shoten\" (em japonês: 武 蔵 屋 呉 呉 服 店; Musashi-ya-gofukuten) por seu filho Kōichirō Miyamoto, quem costurou uma camisa Aloha usando telas de kimono japonês e foi o primeiro que a vendeu.\n[…]\nEconomicamente, o evento de uma semana de duração, atraiu visitantes pela primeira vez em outubro, tradicionalmente um mês baixo para o turismo, o que beneficiou à indústria da moda havaiana, já que proporcionou as camisas muʻumuʻou e aloha usadas para a celebração. Na semana de Aloha expandiu-se em 1974 a seis ilhas e estendeu-se a um mês. Em 1991, Aloha Week passou a chamar-se Aloha Festivals .\n[…]\nCamisas Aloha do Museu da Universidade de Havaí",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Mohair",
      "descricao": "Fibra têxtil macia e brilhante obtida do pelo da cabra angorá, usada em suéteres e casacos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A lã mohair, macia e brilhante, usada em suéteres e casacos, vem do pelo de qual animal?",
    "resposta": "Cabra angorá",
    "distratores": [
      "Coelho angorá",
      "Lhama",
      "Ovelha merino"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mohair"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mohair",
        "situacao": "ok",
        "texto": "Mohair (pronounced ) is a fabric or yarn made from the hair of the Angora goat (not Angora wool, which comes from the fur of the Angora rabbit). Both durable and resilient, mohair is lustrous with high sheen, and is often blended to add these qualities to a textile. Mohair takes dye exceptionally well. It feels warm in winter due to excellent insulating properties, while moisture-wicking keeps it \n[…]\nMohair is composed mostly of keratin, a protein in the hair, wool, horns and skin of all mammals, but mohair's special properties are unique to the Angora goat. While it has scales like wool, they are not fully developed; thus, mohair feels different from common or standard wool.\n[…]\nAngora goats are sheared twice a year, in the spring and in the fall. One goat will produce 5 to 7.5 kilograms (11–17 lb) of mohair a year. Shearing is done on a cleanly-swept floor and extra care is taken to keep the hair clean and free of debris. The hair is then processed to remove natural grease, dirt, and vegetable matter. Mohair grows in uniform locks.\n[…]\nThe Angora goat is a single-coat breed, and unlike pygora or cashmere, there is no need to dehair a mohair fleece to separate the coarse hair from the down hair.\n[…]\nUntil 1849, the Turkish province of Ankara was the sole producer of Angora goats. Charles V is believed to be the first to bring Angora goats to Europe. Due to the great demand for mohair fiber, throughout the 1800s there was a great deal of crossbreeding between Angora goats and common goats.\n[…]\nThe growing demand for mohair further resulted in attempts on a commercial scale to introduce the goat into South Africa (where it was crossed with the native goat) in 1838, the United States in 1849, Australia from 1856 to 1875, and later still New Zealand. In 1849, Angora goats made their way to America as a gift from Turkey.\n[…]\nOklahoma State University, Breeds of Livestock – Angora goats"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mohair",
        "situacao": "ok",
        "texto": "O mohair ou angorá é um fio semelhante à lã, produzido a partir do pelo da cabra angorá. A palavra \"mohair\" deriva do Arábico mukhayyar. O tecido feito com esse fio, industrial ou artesanalmente, também é chamado de mohair e é utilizado para vestuário ou mobiliário.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Salto alto",
      "descricao": "Calçado com o calcanhar elevado em relação à ponta do pé"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os saltos altos, herança de cavaleiros persas, viraram moda entre os nobres europeus em qual século?",
    "resposta": "Século dezessete",
    "distratores": [
      "Século quinze",
      "Século dezesseis",
      "Século dezoito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/High-heeled_shoe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/High-heeled_shoe",
        "situacao": "ok",
        "texto": "High-heeled shoes, also known as high heels (colloquially shortened to heels), are a type of shoe with an upward-angled sole. The heel in such shoes is raised above the ball of the foot. High heels cause the legs to appear longer, make the wearer appear taller, and accentuate the calf muscle.\n[…]\nHigh heels spread from equestrian origins with the 10th century Persian galesh to wider fashion use. In early 17th-century Europe, high heels were a sign of masculinity and high social status. Towards the end of the century, the trend began to spread to women's fashion. By the 18th century, high-heeled shoes had split along gender lines.\n[…]\nModern high heels were brought to Europe by Persian emissaries of Abbas the Great in the early 17th century. Men wore them to imply their upper-class status; only someone who did not have to work could afford, both financially and practically, to wear such extravagant shoes. Royalty such as King Louis XIV wore heels, and his predecessor King Louis XIII introduced the red heel to the court of French nobility.\n[…]\nWearing high-heeled shoes is associated with developing bunions, a deformity of the foot.\n[…]\nHigh heels are also sometimes marketed to children, and some schools encourage children to wear them. 18% of injuries from wearing high heels were in children, and 4% in under-tens, in a 2002–2012 US survey. A 2016 medical review on high-heeled shoes expressed concern about children's use of high heels.\n[…]\nA modern style of dance called heels choreography or stiletto dance specializes in choreography that blends the styles of jazz, hip-hop, and burlesque with the fusion of vogue movements and is performed using stilettos or high heels. Dancers such as Yanis Marshall specialize in dancing with high heels.\n[…]\n\"How to Wear High Heels\". Cosmopolitan. 20 July 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salto-alto",
        "situacao": "ok",
        "texto": "Sapatos de salto alto (frequentemente abreviado como salto-alto ou apenas salto) é calçado que deixa o calcanhar do usuário significativamente mais elevado do que os dedos. Quando tanto o calcanhar quanto os dedos dos pés são levantados igualmente, como em um sapato plataforma [en], não é considerado um \"salto-alto\". Saltos-altos tendem a dar a ilusão de pernas mais longas e mais finas.\n[…]\nDesde a Segunda Guerra Mundial, os sapatos de salto alto caíram dentro e fora de moda várias vezes, principalmente no final de 1990, quando saltos mais baixos e até mesmo apartamentos predominaram. Saltos mais baixos foram preferidas durante o final dos anos 1960 e início de 1970 também, mas saltos mais altos retornaram no final de 1980 e início de 1990. A forma do calcanhar moda também mudou de bloco (1970) para cônico (1990), e stiletto (1950, 1980, e pós-2000).\n[…]\nTribunal sapatos são estilos conservadores e, muitas vezes utilizados para o trabalho e ocasiões formais, enquanto estilos mais aventureiros são comuns para usar à noite e dançar. Saltos altos viram controvérsia significativa no campo médico, ultimamente, com podólogos vendo muitos pacientes cujos graves problemas pé ter sido causado quase exclusivamente pelo desgaste de salto alto.\n[…]\nOs tipos de saltos encontrados em calçado de salto alto são:\n[…]\nA autora Elizabeth Semmelhack, do Bata Shoe Museum (Museu dos Sapatos), em Toronto, Canadá, declarou que os primeiros sapatos de salto alto foram criados para cavaleiros persas, com intuito de garantir uma melhor posição dos pés nos estribos durante as montadas. Foi no fim do século XVI que a cultura persa disseminou-se pela Europa, o que fez com que os saltos fossem vistos como sinais de virilidade.\n[…]\nAlgumas feministas da segunda onda, como Judy Grahn, têm ligado os saltos altos a rituais de menstruação que várias culturas têm utilizado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Guarda Suíça",
      "descricao": "Corpo militar que protege o papa e o Vaticano, formado por soldados suíços"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Guarda Suíça, que protege o papa no Vaticano, foi criada no início de qual século?",
    "resposta": "Século dezesseis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Swiss_Guard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swiss_Guard",
        "situacao": "ok",
        "texto": "The Pontifical Swiss Guard, also known as the Papal Swiss Guard or simply Swiss Guard, is an armed force, guard of honour, and protective security unit, maintained by the Holy See to protect the Pope and the Apostolic Palace within the territory of the Vatican City State. Established in 1506 under Pope Julius II, it is among the oldest military units in continuous operation and is sometimes called\n[…]\nThe Swiss Guard's security mission extends to the Pope's apostolic travels, the pontifical palace of Castel Gandolfo, and the College of Cardinals when the papal throne is vacant. Though the Guard serve as watchmen of Vatican City, the overall security and law enforcement of the city-state is conducted by the Corps of Gendarmerie of Vatican City, which is a separate body.\n[…]\nQualified candidates must apply to serve. Those who are accepted serve for a minimum of 26 months. Regular guardsmen (halberdiers) were paid a tax-free salary of €1,300 per month plus overtime in 2006. They also receive Vatican citizenship for the duration of their service. Accommodation and board are provided. Members of the guard are eligible for pontifical decorations. The Benemerenti medal is usually awarded after three years of faithful service.\n[…]\nThe official banner is carried out during ceremonies of state and organizational events of the Swiss Guards. In the past the ceremonial banner was present during the Urbi et Orbi address and blessing twice a year. During the pontificate of Pope Francis, only the Flag of Vatican City was used instead of the banner during ceremonial occasions, as a sort of national color whenever the Pope was present.\n[…]\nInsignia of Rank (officers and other ranks) Pontifical Swiss Guard (uniforminsignia.com)\n[…]\n\"Päpstliche Schweizergarde Vatikan\": Vatican Papal Swiss Guard in German (SchweizerGarde.ch)\n[…]\nThe firearms used by the Pontifical Swiss Guard, the smallest army in the world"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guarda_Su%C3%AD%C3%A7a",
        "situacao": "ok",
        "texto": "Guarda Suíça Pontifícia (em latim: Custodes Helvetici; em italiano:  Guardie Svizzere) é o corpo militar responsável, desde 22 de janeiro de 1506, pela proteção pessoal do Papa e pela segurança da Cidade do Vaticano. Além de ser considerada a menor força armada do mundo, é também o exército mais antigo em funcionamento contínuo. Atualmente, a Guarda é composta por nove oficiais, 41 sargentos e cab\n[…]\nFundada durante o pontificado do Papa Júlio II, a unidade nasceu da tradição de bravura e disciplina dos soldados suíços, frequentemente contratados como mercenários por diversas cortes europeias. Desde então, a Guarda Suíça consolidou-se como símbolo de fidelidade ao sucessor de São Pedro.\n[…]\nA Guarda Suíça do Vaticano foi oficialmente formada em 1506, atendendo a uma solicitação feita em 1503 pelo Papa Júlio II aos nobres suíços. O financiamento decisivo para o estabelecimento da Guarda foi providenciado por Jakob Függer, influente banqueiro dos papas, cuja contribuição foi fundamental para tornar a iniciativa possível.\n[…]\nEmbora as tropas alemãs patrulhassem o território italiano até à Praça de São Pedro, não houve qualquer tentativa de invasão pela fronteira do Vaticano nem qualquer confronto entre a Guarda Suíça e tropas alemãs. Nessa altura a Guarda tinha apenas 60 homens, pelo que poderia apenas ter feito uma resistência simbólica a qualquer ataque. No próprio dia em que os alemães ocuparam Roma o Papa Pio XII deu ordens que proibiam a Guarda Suíça de derramar sangue em sua defesa.\n[…]\nEm 2024, os 135 membros da Guarda Suíça Pontifícia eram divididos em:\n[…]\nIndicam-se seguidamente os comandantes da Guarda Suíça, o seu cantão de origem e o período em que lideraram a Guarda:\n[…]\nForças Armadas do Vaticano\n[…]\nGuarda Palatina\n[…]\n«Página do Vaticano sobre a Guarda Suíça» (em alemão, inglês, e francês)\n[…]\nOrigens da Guarda Suíça Pontifícia\n[…]\nPágina da Santa Sé sobre a Guarda Suíça Pontifícia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Guarda Suíça",
      "descricao": "Corpo militar que protege o papa e o Vaticano, formado por soldados suíços"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O uniforme listrado da Guarda Suíça costuma ser atribuído a Michelangelo, mas foi desenhado no século vinte. Por quem?",
    "resposta": "O comandante da guarda",
    "distratores": [
      "O alfaiate do papa",
      "Um estilista de Paris",
      "O próprio papa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Swiss_Guard"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swiss_Guard",
        "situacao": "ok",
        "texto": "The Pontifical Swiss Guard, also known as the Papal Swiss Guard or simply Swiss Guard, is an armed force, guard of honour, and protective security unit, maintained by the Holy See to protect the Pope and the Apostolic Palace within the territory of the Vatican City State. Established in 1506 under Pope Julius II, it is among the oldest military units in continuous operation and is sometimes called\n[…]\nIn his project to restore the Swiss Guard to its former prestige, Repond dedicated himself to the study of historical costume, with the aim of designing a new uniform that would be both reflective of the historical Swiss costume of the 16th century and suited for military exercise. The result of his studies was published in 1917 as Le costume de la Garde suisse pontificale et la Renaissance italienne. Repond designed the distinctive Renaissance-style uniforms worn by the modern Swiss Guard.\n[…]\nAn early precursor of the modern Pontifical Swiss Guard uniform can be seen in a 1577 fresco by Jacopo Coppi of the Empress Eudoxia conversing with Pope Sixtus III. The bearded figure in the center left is wearing clothing similar to today's recognisable three-colored uniform, with boot covers, white gloves, a high or ruff collar, and either a black beret or comb morion, usually black but silver-coloured for high occasions. Sergeants wear a black top with crimson leggings.\n[…]\nOther officers wear an all-crimson uniform.\n[…]\nAs of 2024 the 135 members of the Pontifical Swiss Guard were:\n[…]\nList of commanders of the Pontifical Swiss Guard\n[…]\nRichard, Christian-Roland Marcel (2005). La Guardia Svizzera Pontificia nel corso dei secoli. Leonardo International.\n[…]\nPontifical Swiss Guard, Commission or Committee of the Roman (CuriaGCatholic.org)\n[…]\nInsignia of Rank (officers and other ranks) Pontifical Swiss Guard (uniforminsignia.com)\n[…]\nThe firearms used by the Pontifical Swiss Guard, the smallest army in the world"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guarda_Su%C3%AD%C3%A7a",
        "situacao": "ok",
        "texto": "Guarda Suíça Pontifícia (em latim: Custodes Helvetici; em italiano:  Guardie Svizzere) é o corpo militar responsável, desde 22 de janeiro de 1506, pela proteção pessoal do Papa e pela segurança da Cidade do Vaticano. Além de ser considerada a menor força armada do mundo, é também o exército mais antigo em funcionamento contínuo. Atualmente, a Guarda é composta por nove oficiais, 41 sargentos e cab\n[…]\nEm 2024, os 135 membros da Guarda Suíça Pontifícia eram divididos em:\n[…]\n1 Oberst (coronel — o comandante da Guarda)\n[…]\nAs patentes de capitão a coronel são também denominadas de Oficiais do Staff, sendo que as patentes inferiores a de comandante (coronel) atuam como colaboradores e conselheiros imediatos deste, além de o apoiarem no gerenciamento da Guarda. Os tenentes são chamados de Oficiais Subalternos, cada um deles responsável pelo comando de um esquadrão, sendo que a eles também é atribuído o dever de conduzir o desempenho diário do serviço de guarda.\n[…]\nO uniforme que hoje a Guarda usa foi desenhado por Jules Répond (comandante no período 1910–1921) a partir do modelo que se atribui a Michelangelo por volta de 1505, pelo que é considerado um dos uniformes militares mais antigos do mundo, e muito mais vistoso, alegre e colorido que o do século XIX: o capacete é decorado com uma pluma vermelha, as luvas são brancas e a couraça tem reminiscências medievais.\n[…]\nA Guarda Suíça não utiliza botas, sendo calçadas meias aderentes às pernas e presas à altura dos joelhos por uma liga dourada, sendo eventualmente cobertas por polainas. Em geral, o uniforme recorda o esplendor das cortes do Antigo Regime, e o orgulho de ser soldado, combater e servir o Papa.\n[…]\nIndicam-se seguidamente os comandantes da Guarda Suíça, o seu cantão de origem e o período em que lideraram a Guarda:\n[…]\nGuarda Palatina\n[…]\nOrigens da Guarda Suíça Pontifícia\n[…]\nPágina da Santa Sé sobre a Guarda Suíça Pontifícia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Lycra",
      "descricao": "Fibra sintética elástica, também chamada elastano ou spandex"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em qual década os laboratórios da DuPont criaram a fibra elástica lycra?",
    "resposta": "Anos cinquenta",
    "distratores": [
      "Anos trinta",
      "Anos quarenta",
      "Anos sessenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Spandex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spandex",
        "situacao": "ok",
        "texto": "Spandex, Lycra, or elastane is a synthetic fiber known for its exceptional elasticity. It is a polyether-polyurethane copolymer that was invented in 1958 by chemist Joseph Shivers at DuPont.\n[…]\nThe name spandex, which is an anagram of the word \"expands\", is the preferred name in North America. In continental Europe, it is referred to by variants of elastane. It is primarily known as Lycra in the UK, Ireland, Portugal, Spain, Latin America, Australia, and New Zealand.\n[…]\nBrand names for spandex include Lycra (made by The Lycra Company, previously a division of DuPont Textiles and Interiors), Elaspan (The Lycra Company), Acepora (Taekwang Group), Creora (Hyosung), INVIYA (Indorama Corporation), ROICA and Dorlastan (Asahi Kasei), Linel (Fillattice), and ESPA (Toyobo).\n[…]\nTo distinguish its brand of spandex fiber, DuPont chose the trade name Lycra (originally called Fiber K). DuPont launched an extensive publicity campaign for its Lycra brand, taking advertisements and full-page ads in top women's magazines. Audrey Hepburn helped catapult the brand on and off-screen during this time; models and actresses like Joan Collins and Ann-Margret followed Hepburn's aesthetic by posing in Lycra clothing for photo shoots and magazine covers.\n[…]\nBy the 1980s, the fitness trend had reached its height in popularity and fashionistas began wearing shorts on the street. Spandex proved such a popular fiber in the garment industry that, by 1987, DuPont had trouble meeting worldwide demand. In the 1990s a variety of other items made with spandex proved popular, including a successful line of body-shaping foundation garments sold under the trade name Bodyslimmers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Elastano",
        "situacao": "ok",
        "texto": "Elastano, licra ou laicra (da marca registada Lycra) é uma fibra sintética de elevada elasticidade, obtida através de etano. Trata-se uma fibra muito utilizada na confecção de calças, meias-calças,  maiôs(pt-BR) ou fato de banho(pt-PT?), sungas, cintas e biquínis.\n[…]\nHá a versão essencialmente pura, sem adição de poliamida, que é denominada de laicra comercial ou industrial. É mais forte e duradora que a borracha (o seu principal concorrente) e foi inventada em 1959 por Joseph Shivers, da DuPont.\n[…]\nElastano é uma fibra sintética formada no mínimo por 85% de poliuretano segmentado.\n[…]\nExistem dois processos básicos de produção de elastano: wet-spun (por coagulação do extrudado) e dry-spun (secagem do extrudado). Atualmente, produz-se mais de 90% do elastano pelo método dry-spun. Há também os elastanos base poliéster, onde o polietileno-glicol é substituído por um poliéster-poliol, mas hoje a sua participação não é significativa na capacidade total instalada. Depois adicionam-se extensores de cadeia para atingir o grau de polimerização desejado.\n[…]\nfitas elásticas para roupa íntima",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Charles Frederick Worth",
      "descricao": "Costureiro do século dezenove radicado em Paris, considerado o pai da alta-costura"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O costureiro Charles Frederick Worth passou a costurar algo em suas roupas, como um pintor que assina um quadro. O quê?",
    "resposta": "Etiquetas com seu nome",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Frederick_Worth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Frederick_Worth",
        "situacao": "ok",
        "texto": "Charles Frederick Worth (13 October 1825 – 10 March 1895) was an English fashion designer who founded the House of Worth, one of the foremost fashion houses of the 19th and early 20th centuries. He is considered by many fashion historians to be the father of haute couture. Worth is also credited with revolutionising the business of fashion.\n[…]\nThe most famous surviving portrait of Charles Frederick Worth shows him wearing a hat, fur-trimmed cape and cravat. It appears that he had adopted this distinctive dress from the 1870s.\n[…]\nCharles Frederick Worth's funeral was held at the Protestant Church in the Avenue de la Grande Armée. He was buried in the grounds of his villa at Suresnes, according to the rites of the Church of England. Marie Vernet Worth died three years later.\n[…]\nThe Victoria and Albert Museum in London has an archive of Charles Worth designs, including both sketches and garments. In 1956, the House of Worth (by then amalgamated with the fashion house of Paquin) donated 23,000 drawings of dresses to the museum. Two years later, the V&A held a major retrospective to mark the centenary of the foundation of Charles Frederick Worth's business.\n[…]\nKrick, Jessa. \"Charles Frederick Worth (1825–1895) and The House of Worth.\" In Heilbrunn Timeline of Art History. New York: The Metropolitan Museum of Art, 2000–. (October 2004)\n[…]\nThis article incorporates text from a publication now in the public domain: Alger, John Goldworth (1900). \"Worth, Charles Frederick\". In Lee, Sidney (ed.). Dictionary of National Biography. Vol. 63. London: Smith, Elder & Co.\n[…]\nCostumes designed by Charles Frédérick Worth at Chicago History Museum Digital Collections Archived 24 February 2014 at the Wayback Machine\n[…]\nMuseum of the City of New York online exhibition of Worth couture garments"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Frederick_Worth",
        "situacao": "ok",
        "texto": "Charles Frederick Worth (Bourne, 13 de outubro de 1825 – Paris, 10 de março de 1895) foi um costureiro inglês do século XIX. É considerado o \"Pai da alta-costura\".\n[…]\nEm 1858 começou a trabalhar como costureiro em sociedade com um sueco chamado Otto Bobergh, abrindo a casa Worth et Bobergh. Seu talento como estilista chamou a atenção da imperatriz Eugénia, esposa de Napoleão III, e, através dela, de toda a alta sociedade parisiense.\n[…]\nA casa de alta-costura de mais prestígio em Paris no início do século era a Casa Worth (nessa época nas mãos do filho do fundador, Jean-Phillipe e Gaston). A Worth vestia uma elite rica, que incluía a realeza européia (como a imperatriz Eugénia da França e Isabel, imperatriz da Áustria), herdeiras estadunidenses e atrizes famosas.\n[…]\nCharles Worth implantou uma série de inovações no ramo da moda, como a afixação de etiquetas nas peças, para identificação da Casa Worth, a criação de coleções sazonais e a utilizações de modelos reais para demonstração de suas peças. Também foi o idealizador da haute couture (alta costura).\n[…]\nApesar de ainda ativo na criação e negócios, em 1895 Charles Worth falece após sucessivos problemas de saúde.\n[…]\nA grande dinastia da moda finalmente chegou ao fim em 1952, quando o bisneto de Charles Frederick Worth, Jean-Charles (1881-1962), se aposentou dos negócios da família.\n[…]\nNo Brasil existe um acervo com peças originais da Casa Worth, que pertenceu à financista Eufrásia Teixeira Leite. Estas peças foram preservadas como herança e mantidas em sua casa, hoje Museu Casa da Hera, situado no interior do estado do Rio de Janeiro.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Moda grunge",
      "descricao": "Estilo de vestir dos anos noventa, de camisas de flanela xadrez e jeans rasgado, ligado ao rock grunge"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1992, qual estilista americano levou a moda grunge à passarela da grife Perry Ellis e acabou demitido?",
    "resposta": "Marc Jacobs",
    "distratores": [
      "Tom Ford",
      "Calvin Klein",
      "Michael Kors"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Marc_Jacobs",
      "https://en.wikipedia.org/wiki/Grunge_fashion"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marc_Jacobs",
        "situacao": "ok",
        "texto": "Marc Jacobs (born April 9, 1963) is an American fashion designer. He is the head designer for his own fashion label, Marc Jacobs, and formerly Marc by Marc Jacobs, a diffusion line, which was produced for approximately fifteen years, before it was discontinued after the 2015 fall/winter collection. At its peak, it had over 200 retail stores in 80 countries. He was the creative director of the Fren\n[…]\nJacobs grew up in Teaneck, New Jersey, and attended Teaneck High School.\n[…]\nIn 1986, backed by Onward Kashiyama USA, Inc., Jacobs designed his first collection bearing the Marc Jacobs label. In 1987, he was the youngest designer to have ever been awarded the fashion industry's highest tribute, the Council of Fashion Designers of America's Perry Ellis Award for \"New Fashion Talent\".\n[…]\nIn 1988, Jacobs and Duffy joined the women's design unit of Perry Ellis as creative director/vice president and president, respectively, following the death of its namesake and founder. In addition, Jacobs oversaw the design of the various women's licensees. In 1992, the Council of Fashion Designers of America awarded Jacobs with The Women's Designer of the Year Award.\n[…]\nIn fall 1993, Jacobs Duffy Designs Inc. launched their own licensing and design company, Marc Jacobs International Company, L.P. In exchange for a percentage of future licensing income, Perry Ellis invested startup capital. In 1994, Jacobs produced his first full collection of menswear.\n[…]\nCollectively, they embody and celebrate the spirit and beauty of equality.\" The New York Observer called it \"the best campaign of the Spring 2016 season,\" and that \"the designer [Marc Jacobs] has handpicked a star-studded cast of his family members [people who are key to the Marc Jacobs brand] to model the Americana gear from this collection,\" thus making the collection notable.\n[…]\nList of fashion designers\n[…]\nMarc Jacobs, 16 years with Louis Vuitton – Photo-Gallery"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Grunge_fashion",
        "situacao": "ok",
        "texto": "Grunge fashion refers to the clothing, accessories and hairstyles of the grunge music genre. This subculture emerged in mid-1980s Seattle, and had reached wide popularity by the mid 1990s. Grunge fashion is characterized by durable or hardy thrift store clothing, often worn in a loose, androgynous manner to de-emphasize the silhouette. The style was popularized by music bands Alice in Chains, Nirv\n[…]\nThe term grunge was adopted by the music industry for a style of music that had become wildly popular in the American Northwest during the early 1990s. The term first appeared in 1972, but it did not become a popular term in widespread media until the late 1980s, influenced by the surge and decline of punk. This view made its mark on the youth of the time and translated into their choice of fashion.\n[…]\nWhen grunge started to be a popular trend in the early 1990s, fashion designer Marc Jacobs was the first designer who brought grunge to the luxury platform. In 1993, Jacobs as the creative director of women's design at Perry Ellis, debuted a spring collection inspired by grunge. The collection included some iconic grunge items such as flannel shirts, printed granny dresses, Dr. Martens boots, and knitted skullcaps.\n[…]\nFashion critic Suzy Menkes declared \"Grunge is ghastly.\" New York magazine said, \"Grunge: 1992–1993, R.I.P.\" A few years later, Jacobs and his business partner would join the French luxury brand Louis Vuitton.\n[…]\nIn 2022, Nylon magazine wrote that 1990s Grunge \"is one of Fall 2022's biggest fashion trends\", with brands and designers such as Marc Jacobs, Molly Goddard, Dsquared2, and Givenchy having collections inspired by grunge fashion.\n[…]\nIn June 2025, GQ wrote that grunge style was trending again thanks to TikTok, British singer Charli XCX, and Italian fashion house Magliano's fall-winter 2025 collection inspired by grunge fashion."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marc_Jacobs",
        "situacao": "ok",
        "texto": "Marc Jacobs (Nova Iorque, 9 de abril de 1963) é um estilista de moda norte-americano.\n[…]\nFormado pela High School of Art and Design (1981) e pela Parsons School of Design (1984), ambas em Nova York, Marc Jacobs, aos 24 anos, tornou-se o mais jovem estilista a ganhar o prêmio do Council of Fashion Designers of America Perry Ellis para novos talentos, um ano após sua primeira coleção para a própria grife. Outros doze prêmios do CFDA  se seguiram, entre 1991 e 2019.\n[…]\nTornou-se conhecido no mundo da moda no fim dos anos 1980, ao desenhar e apresentar uma coleção em estilo \"grunge\" – baseada no novo tipo de som e indumentária que vinha da cidade de Seattle, na Costa Oeste dos Estados Unidos, onde grupos de rock, como Nirvana e Soundgarden, e meninos com bermudas até o meio dos joelhos revolucionavam os costumes locais e os difundiram por todo o país - para a tradicional marca Perry Ellis, da qual era diretor de estilo, sendo imediatamente demitido por sua ousadia.\n[…]\nApoiado por nomes importantes da moda, como Anna Wintour, a editora-chefe da revista Vogue, que abriu suas páginas para suas criações, Jacobs recebeu diversos prêmios de conselhos de moda, no começo dos anos 1990.\n[…]\nMarc Jacobs é conhecido como um estilista que não segue as tendências universais da moda a cada estação. Na sua coleção de 2004/2005, por exemplo, ignorou o estilo safári, seguido por outros grandes nomes da moda, e apresentou um estilo eminentemente feminino, com suas modelos desfilando em meio a 450 000 rosas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Melindrosa",
      "descricao": "Jovem moderna de cabelo curto e vestido reto, símbolo da moda e dos costumes do pós-Primeira Guerra"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Qual cartunista carioca popularizou a figura da melindrosa nas revistas ilustradas dos anos vinte?",
    "resposta": "J. Carlos",
    "distratores": [
      "Belmonte",
      "Raul Pederneiras",
      "Di Cavalcanti"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/J._Carlos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/J._Carlos",
        "situacao": "ok",
        "texto": "José Carlos de Brito e Cunha, conhecido como J. Carlos, (Rio de Janeiro, 18 de junho de 1884 — Rio de Janeiro, 2 de outubro de 1950) foi um chargista, ilustrador e designer gráfico brasileiro. J. Carlos também fez esculturas, foi autor de teatro de revista, letrista de samba, e é considerado um dos maiores representantes do estilo art déco no design gráfico brasileiro.\n[…]\nEm 1941, Walt Disney visitou o Brasil, Disney ficou impressionado com o estilo de J. Carlos e o convidou para trabalhar em Hollywood, o ilustrador recusou o convite, porém enviou para Disney um desenho de um papagaio que, segundo alguns pesquisadores, serviu de inspiração para a criação de Zé Carioca.\n[…]\nDurante o período da Primeira Guerra Mundial e da Segunda Guerra Mundial, J. Carlos produziu um número grande de charges e desenhos para capas de revistas com alto teor crítico aos conflitos. A visão política aguçada do artista chegou a preconizar o revanchismo nacionalista alemão, que seria um dos fatores para a eclosão da Segunda Guerra Mundial. Neste período, produziu obras em que figuravam como personagens Franklin D.\n[…]\nSegundo Isabel Lustosa, \"A caricatura brasileira das primeiras décadas do século (XX) é principalmente política. A figura do presidente, ou do grande líder político que lidera a cena nacional no momento, é o seu maior alvo\". J. Carlos irá privilegiar suas charges e seus desenhos com a figura de presidentes e líderes políticos da época.\n[…]\nJ. Carlos sofreu uma hemorragia cerebral enquanto estava reunido com o compositor João de Barro, o Braguinha, discutindo a ilustração para a capa de seu próximo disco, e faleceu dois dias depois.\n[…]\nPesquisas recentes têm discutido a presença de estereótipos racistas na personagem Lamparina, criada por J. Carlos para a revista infantil O Tico-Tico entre 1928 e 1944.\n[…]\n«J. Carlos - Instituto Moreira Salles»"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Coco Chanel",
      "descricao": "Estilista francesa Gabrielle Chanel, fundadora da grife Chanel"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1954, depois de quinze anos com a casa de moda fechada, Coco Chanel voltou a lançar coleções. Que idade ela tinha, aproximadamente?",
    "resposta": "Setenta anos",
    "distratores": [
      "Cinquenta anos",
      "Sessenta anos",
      "Oitenta anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coco_Chanel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coco_Chanel",
        "situacao": "ok",
        "texto": "Gabrielle Bonheur \"Coco\" Chanel ( shə-NEL; French: [ɡabʁijɛl bɔnœʁ kɔko ʃanɛl] ; 19 August 1883 – 10 January 1971) was a French fashion designer and businesswoman. The founder and namesake of the Chanel brand, she was credited in the post–World War I era with popularising a sporty, casual chic as the feminine standard of style. She is the only fashion designer listed on Time magazine's list of the\n[…]\nIt was at this time that Gabrielle acquired the name \"Coco\" when she spent her nights singing in the cabaret, often the song, \"Who Has Seen Coco?\" She often liked to say the nickname was given to her by her father. Others believe \"Coco\" came from Ko Ko Ri Ko, and Qui qu'a vu Coco, or it was an allusion to the French word for kept woman, cocotte. As an entertainer, Chanel radiated a juvenile allure that tantalised the military habitués of the cabaret.\n[…]\nThen I really started hunting through all of the archives, in the United States, in London, in Berlin, and in Rome and I came across not one, but 20, 30, 40 absolutely solid archival materials on Chanel and her lover, Hans Günther von Dincklage, who was a professional Abwehr spy.Vaughan also addressed the discomfort many felt with the revelations provided in his book: A lot of people in this world don't want the iconic figure of Gabrielle Coco Chanel, one of France's great cultural idols, destroyed.\n[…]\nThe Broadway production Coco, with music by André Previn, book and lyrics by Alan Jay Lerner, opened 18 December 1969 and closed 3 October 1970. It is set in 1953–1954 at the time that Chanel was reestablishing her couture house. Chanel was played by Katharine Hepburn for the first eight months, and by Danielle Darrieux for the rest of its run.\n[…]\nGabrielle Chanel at FMD\n[…]\nElegance and Espionage: The Hidden Life of Coco Chanel — by historian Tamara Eidelman on YouTube\n[…]\nLisa Chaney on Coco Chanel on YouTube\n[…]\nCoco Chanel 1969 interview on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coco_Chanel",
        "situacao": "ok",
        "texto": "Gabrielle Bonheur \"Coco\" Chanel ([ʃəˈnɛl] shə-NEL, francês: [ɡabʁijɛl bɔnœʁ kɔko ʃanɛl] (); Saumur, 19 de agosto de 1883 – Paris, 10 de janeiro de 1971) foi uma estilista e empresária francesa. Fundadora da marca Chanel, ela foi creditada na era pós-Primeira Guerra Mundial por popularizar um chique esportivo e casual como o padrão feminino de estilo.\n[…]\nHá apenas uma Chanel\".\n[…]\nEm setembro de 1944, Chanel foi interrogada pelo Comitê de Expurgo da França Livre, a épuration. O comitê não tinha nenhuma evidência documentada de suas atividades colaborativas e foi obrigado a liberá-la. De acordo com a sobrinha-neta de Chanel, Gabrielle Palasse Labrunie, quando Chanel voltou para casa, ela disse: \"Churchill me libertou\".\n[…]\nCom mais de 70 anos, depois de ter encerrado a sua casa de alta-costura durante quinze anos, sentiu que era o momento certo para regressar ao mundo da moda. O renascimento de sua casa de alta costura em 1954 foi totalmente financiado pelo oponente de Chanel na batalha do perfume, Pierre Wertheimer. Quando Chanel lançou sua coleção de retorno em 1954, a imprensa francesa foi cautelosa devido à sua colaboração durante a guerra e à controvérsia da coleção.\n[…]\nA influência da Chanel tornou o banho de sol na moda.\n[…]\nA produção da Broadway Coco, com música de André Previn, livro e letras de Alan Jay Lerner, estreou em 18 de dezembro de 1969 e encerrou em 3 de outubro de 1970. É ambientado em 1953–1954, época em que Chanel estava restabelecendo sua casa de alta-costura. Chanel foi interpretada por Katharine Hepburn nos primeiros oito meses e por Danielle Darrieux no resto de sua carreira.\n[…]\nCoco Chanel (2008) foi um filme de televisão estrelado por Shirley MacLaine como a Chanel de setenta anos. Dirigido por Christian Duguay, o filme também estrelou Barbora Bobuľová como a jovem Chanel e Olivier Sitruk como Boy Capel.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cetim",
      "descricao": "Tecido de trama que deixa uma face lisa e brilhante, feito originalmente de seda"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes tecidos, qual tem uma face lisa e brilhante e a outra fosca?",
    "resposta": "Cetim",
    "distratores": [
      "Tafetá",
      "Chiffon",
      "Organza"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Satin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Satin",
        "situacao": "ok",
        "texto": "A satin weave is a type of fabric weave that produces a characteristically glossy, smooth or lustrous material, typically with a glossy top surface and a dull back; it is not durable, as it tends to snag. It is one of three fundamental types of textile weaves alongside plain weave and twill weave.\n[…]\nDouble face(d) satin is woven with a glossy surface on both sides. It is possible for both sides to have a different pattern, albeit using the same colours.\n[…]\nFaconne is jacquard woven satin.\n[…]\nFarmer's satin or Venetian cloth is made from mercerised cotton.\n[…]\nGattar is satin made with a silk warp and a cotton weft.\n[…]\nPolysatin or poly-satin is an abbreviated term for polyester satin.\n[…]\nSlipper satin is woven from stiff and medium- to heavy-weight fabric.\n[…]\nSultan is a worsted fabric with a satin face.\n[…]\nSurf satin was a 1910s American trademark for a taffeta fabric used for swimsuits.\n[…]\nBecause of the different ways the weave is employed, satin has a range of functions from interior décor to fashion.\n[…]\nDresses: Satin's drape and shiny texture make it a favorite for evening gowns and bridal gowns.\n[…]\nUpholstery: Satin was first used for ornamental furniture in Europe at the Palace of Versailles, and it is still used for pillow covers, chairs, and other forms of cushioned furniture today.\n[…]\nBed sheets: Satin is frequently used for bed linens because of its flexible and silky texture.\n[…]\nFootwear: Satin is a popular fabric for shoe makers, from ballerina slippers to high heels.\n[…]\nFashion accessories: Satin is commonly used for evening bags and clutches in the fashion industry.\n[…]\nCrafting: Satin in the form of ribbons is very common for crafting various products such as rosette leis, corsage, and even decorative flowers.\n[…]\nMedia related to Satin at Wikimedia Commons\n[…]\nThe dictionary definition of satin at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cetim",
        "situacao": "ok",
        "texto": "O cetim ou setim é um tecido formado de seda e lã. Foi assim denominado em homenagem a Zaitum (ou Tsenthung), China, de onde se origina. Era a princípio um tecido brilhante de seda em trama bem fechada.\n[…]\nÉ nome também de ligamento de tecidos de cala que pela distribuição de seus pontos tomados o torna brilhante tendo avesso e direito diferentes. Sendo que para proveito da característica mais marcante o mais brilhante é o direito. Obedece via de regra (raso turco e raso do Reino) ao deslocamento constante numa matriz quadrada previamente calculada.\n[…]\nTecido luxuoso, o cetim é mais usado para roupas de noite e é altamente recomendado pelos alfaiates por sua classe e caimento.",
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
