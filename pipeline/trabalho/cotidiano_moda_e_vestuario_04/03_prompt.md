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
    "tipo": "multipla",
    "pergunta": "Em 1946, Louis Réard deu ao seu traje de duas peças o nome de um atol do Pacífico. O que os Estados Unidos faziam lá naquele ano?",
    "resposta": "Testes com bombas atômicas",
    "distratores": [
      "Treinos de submarinos",
      "Pesquisas sobre corais",
      "Construção de uma base"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bikini",
      "https://en.wikipedia.org/wiki/Bikini_Atoll"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bikini",
        "situacao": "ok",
        "texto": "A bikini is a women's two-piece swimsuit featuring a top piece covering the breasts, and a bottom piece covering the pelvis (usually excluding the navel) and some or all of the buttocks. The extent covered by both pieces can vary, from those that offer full coverage of the breasts, pelvis, and buttocks, to more revealing designs with thong or G-string bottoms that cover only the mons pubis and int\n[…]\nFrench automotive engineer Louis Réard then introduced a design he named the \"Bikini\" in Paris on July 5, 1946. Réard adopted the name from the Bikini Atoll in the Pacific Ocean, which was the colonial name the Germans gave to the atoll, borrowed from the Marshallese name for the island, Pikinni. Four days earlier, on 1 July 1946, the United States had initiated its first peacetime nuclear weapons test at Bikini Atoll as part of Operation Crossroads.\n[…]\nVarious motivations have been attributed to his choosing of the name, including the idea that he hoped it would create \"explosive commercial and cultural reaction\" similar to the explosion at Bikini Atoll, that it was meant to be associated with the \"exotic allure of the tropical Pacific\", from the \"comparison of the effects of a scantily clad woman to the atomic bomb,\" and the idea that Reard's design had out-done Heim's design and \"split the atome\".\n[…]\nIt has been frequently cited as a major example of a \"psychological link between atomic destruction and sexuality\" in popular culture, which includes the stenciling of Rita Hayworth onto one of the bombs detonated at Crossroads, and its persistence in language has been argued as having \"trivialized and downplayed the reality of nuclear testing,\" given the contamination done by especially later US thermonuclear tests at Bikini and other Marshallese atolls.\n[…]\nBikini in popular culture\n[…]\nMetropolitan Museum of Art exhibition—The Bikini\n[…]\nTwo-Piece Be With You: LIFE Celebrates the Bikini"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bikini_Atoll",
        "situacao": "ok",
        "texto": "Bikini Atoll ( BIK-in-ee or  bih-KEE-nee; Marshallese: Pikinni [pʲiɡinnʲi], lit. 'Coconut place'), known as Eschscholtz Atoll between the 19th century and 1946, is a coral reef in the Marshall Islands consisting of 23 islands surrounding a  229.4-square-mile (594.1 km2) central lagoon. The atoll is at the northern end of the Ralik Chain, approximately 530 miles (850 km) northwest of the capital Ma\n[…]\nBikini was distant from both regular sea and air traffic, making it an ideal location. In February 1946, Navy Commodore Ben H. Wyatt, the military governor of the Marshall Islands, asked the 167 Micronesian inhabitants of the atoll to voluntarily and temporarily relocate so the United States government could begin testing atomic bombs for \"the good of mankind and to end all world wars.\" After \"confused and sorrowful deliberation\" among the Bikinians, their leader, King Juda, agreed to the U.S.\n[…]\nOn 5 July 1946, four days after the first nuclear device (nicknamed Able) was detonated over Bikini Atoll during Operation Crossroads, Louis Réard introduced a new swimsuit design named the bikini after the atoll. Réard was a French mechanical engineer by training and manager of his mother's lingerie shop in Paris. He introduced the new garment to the media and public on 5 July 1946 at Piscine Molitor, a public pool in Paris.\n[…]\nWeisgall, Jonathan M. (1994). Operation Crossroads: The Atomic Tests at Bikini Atoll. Annapolis, Md: Naval Institute Press. ISBN 978-1-55750-919-2.\n[…]\nWhat About Radiation on Bikini Atoll?\n[…]\nLauren R. Donaldson Collection, served as a radiation monitor for Operation Crossroads; the codename for the first atomic bomb tests at Bikini Atoll. – University of Washington Digital Collection\n[…]\nThe Archeology of the Atomic Bomb A Submerged Cultural Resources Assessment of the Sunken Fleet of Operation Crossroads at Bikini and Kwajalein Atoll Lagoons U.S. National Park Service"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biqu%C3%ADni",
        "situacao": "ok",
        "texto": "O biquíni ou bikini é um conjunto de duas peças, derivadas do maiô, de tamanhos reduzidos, que cobrem o busto e a parte inferior do tronco. Seu nome deriva do atol de Bikini, um atol do Pacífico, usado para testes com bombas nucleares e em 5 de julho de 1946 ocorreu o seu lançamento, numa piscina de Paris. Assim, pretendia-se propor que a mulher de biquíni provocava, na época, o efeito de uma \"bom\n[…]\nO biquíni foi apresentado oficialmente em 5 de julho de 1946, na piscina pública Piscine Molitor, em Paris, poucos dias antes da temporada de desfiles de moda e durante o primeiro verão europeu após o fim da Segunda Guerra Mundial. O lançamento foi realizado por Louis Réard, engenheiro que passou a atuar na fábrica de lingeries de sua mãe no pós-guerra.\n[…]\nA criação do biquíni, contudo, é objeto de disputa. Ainda em 1946, Jacques Heim apresentou o modelo “Atome”, anunciado como “o menor maiô do mundo”. Semanas depois, Louis Réard lançou o “bikini”, promovido como “menor que o menor maiô do mundo”, o que lhe garantiu maior fama.\n[…]\nO estilo da década era duas-peças, de tamanho grande e com as cavas da calça bem baixas. Foi considerado ousado, mas, hoje, é tido como um tamanho grande.\n[…]\nO nome “biquíni” faz referência ao Atol de Bikini, local onde os Estados Unidos iniciaram testes nucleares poucos dias antes do lançamento da peça. A escolha do nome buscava sugerir o impacto e o caráter disruptivo do novo traje, em analogia ao contexto geopolítico do período.\n[…]\nManquíni é um termo criado para designar os biquínis usados por homens. Este tipo de traje ficou famoso no filme \"Borat - O Segundo Melhor Repórter do Glorioso País Cazaquistão Viaja à América\", de 2006.\n[…]\nDeutsche Welle - 1946: O primeiro biquíni",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Gravata",
      "descricao": "Peça de tecido usada amarrada ao pescoço, sob o colarinho da camisa."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra gravata vem do francês cravate, termo ligado a mercenários que usavam lenços no pescoço no século dezessete. De que povo eram eles?",
    "resposta": "Croatas",
    "distratores": [
      "Suíços",
      "Escoceses",
      "Húngaros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Necktie",
      "https://en.wikipedia.org/wiki/Cravat_(early)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Necktie",
        "situacao": "ok",
        "texto": "A necktie (American English) – also called a long tie or, more usually, simply a tie (Commonwealth English) – is a cloth article of formal neckwear or office attire worn for decorative or symbolic purposes, knotted at the throat, resting under a folded shirt collar, and usually draped down the chest. On rare occasions, neckties are worn above a winged shirt collar.\n[…]\nNeckties are reported by fashion historians to be descended from the Regency era double-ended cravat. Adult neckties are generally unsized and tapered along the length, but may be available in longer sizes for taller people, designed to show just the wide end. Widths are usually matched to the width of a suit jacket lapel. Neckties are traditionally worn with the top shirt button fastened, and the tie knot resting between the collar points. Importance is given to the styling of the knot.\n[…]\nThe necktie that spread from Europe traces back to Croatian mercenaries serving in France during the Thirty Years' War (1618–1648). These mercenaries from the Military Frontier, wearing their traditional small, knotted neckerchiefs, aroused the interest of the Parisians. Because of the difference between the Croatian word for Croats, Hrvati, and the French word, Croates, the garment gained the name cravat (cravate in French).\n[…]\nBy this time, the sometimes complicated array of knots and styles of neckwear gave way to neckties and bow ties, the latter a much smaller, more convenient version of the cravat. Another type of neckwear, the ascot tie, was considered de rigueur for male guests at formal dinners and male spectators at races. These ascots had wide flaps that were crossed and pinned together on the chest.\n[…]\nThere are four main knots used to knot neckties. In rising order of difficulty, they are:\n[…]\nChaille, François (1994). La grande histoire de la cravate. Paris: Flammarion. ISBN 2-08-201851-2."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cravat_(early)",
        "situacao": "ok",
        "texto": "The cravat () is a neckband, the forerunner of the modern tailored necktie and bow tie, originating from a style worn by members of the 17th century military unit known as the Cravats. The modern British \"cravat\" is called an \"ascot tie\" in American English.\n[…]\nAccording to 1828 encyclopedic The Art of Tying the Cravat: Demonstrated in Sixteen Lessons, the Romans were the first to wear knotted kerchiefs around their necks, but the modern version of the cravat (French: la cravate) originated in the 1660s. During the Thirty Years' War, King Louis XIV of France enlisted Croatian mercenaries known for wearing a necktie called a tour de cou.\n[…]\nIt was designed to be worn in deliberate disarray. The fashion apparently began after troops at the Battle of Steenkerque had no time to tie their cravats properly before going into action. The Steinkirk was popular with men and women until the 1720s. Colley Cibber's play The Careless Husband (1704) had a famous Steinkirk Scene.\n[…]\nThe maccaronis reintroduced the flowing cravat in the 1770s, and the manner of a man's knotting became indicative of his taste and style, to the extent that after the Battle of Waterloo (1815) the cravat began to be referred to as a \"tie\".\n[…]\nCravat Regiment\n[…]\nThe dictionary definition of cravat (early) at Wiktionary\n[…]\nLe Blanc, H., Esq. (1828). The art of tying the cravat: Demonstrated in sixteen lessons. p. 13 – via Internet Archive (archive.org),{{cite book}}:  CS1 maint: multiple names: authors list (link) CS1 maint: numeric names: authors list (link) (reprinted as ISBN 978-1-145-53416-2)."
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
    "indice": 3,
    "ancora": {
      "nome": "Smoking",
      "descricao": "Traje masculino de gala com lapelas de cetim, chamado tuxedo nos Estados Unidos"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em português e em francês, o traje de gala masculino se chama smoking porque descende de um paletó que os cavalheiros usavam para quê?",
    "resposta": "Para fumar",
    "distratores": [
      "Para jantar",
      "Para dançar",
      "Para cavalgar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tuxedo",
      "https://en.wikipedia.org/wiki/Smoking_jacket"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tuxedo",
        "situacao": "ok",
        "texto": "Black tie is a half-dress Western dress code for evening events, originating in British and North American conventions for attire in the 19th century. In British English, the dress code is often referred to synecdochically by its principal element for men, the dinner suit or dinner jacket. In American English, the equivalent term tuxedo (or tux) is common.\n[…]\nThe first dinner jacket is traditionally traced to 1865 on the then Prince of Wales, later King Edward VII (1841–1910). The late 19th century saw gradual introduction of the lounge jacket without tails as a less formal and more comfortable leisure alternative to the  frock coat. Thus in many non-English languages, a dinner jacket is still known as the false friend \"smoking\".\n[…]\nHenry Poole never saw his design become known as a dinner jacket or cross the Atlantic and be called a tuxedo over there; he died in 1876 leaving behind a well-respected business to be run by his cousin Samuel Cundey.\n[…]\nA son of one of the community's founders, Griswold Lorillard, and his friends were widely reported in society columns for showing up at the club's first Autumn Ball in October 1886 wearing \"a tailless dress coat\". Although it is not known whether this garment was a mess jacket or a conventional dinner jacket, it has no doubt cemented the tailcoat substitute's association with Tuxedo Park in the mind of the public.\n[…]\nA dinner jacket, also called a tuxedo jacket in the United States, is primarily made of black or midnight blue wool. Dinner jackets in an off-white colour are also considered appropriate for some occasions, but are traditionally associated with warmer climates and differ from other dinner jackets in that they are self-faced and can be made of fabrics including linen and cotton.\n[…]\nSchneider, Sven (2017). Black Tie & Tuxedo Guide (1 ed.). Saint Paul, Minnesota: Gentleman's Gazette LLC."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Smoking_jacket",
        "situacao": "ok",
        "texto": "A smoking jacket is an informal men's style of lounge jacket originally intended for tobacco smoking. Designed in the 1850s, a traditional smoking jacket has a shawl collar, turn-up cuffs, and is closed with either toggle or button fastenings, or with a tie belt. It is usually made from velvet and/or silk.\n[…]\nThe smoking jacket later evolved into the dinner jacket, essentially a dress coat without tails, following an example set by Edward, Prince of Wales (later King Edward VII) in 1865. The smoking jacket has remained in its original form and is commonly worn when smoking pipes and cigars.\n[…]\nThe smoking jacket is named due to its association with tobacco smoking.\n[…]\nAs a false friend, the name carried on to its derivation the dinner jacket in several non-English languages. In Bulgarian, Catalan, Czech, Danish, Dutch, Estonian, Finnish, French, German, Greek, Hebrew, Hungarian, Icelandic, Italian, Lithuanian, Norwegian, Polish, Portuguese, Romanian, Russian, Slovak, Spanish, Swedish, Turkish, and other European languages, the term smoking indicates a dinner jacket, or a tuxedo jacket.\n[…]\nTo protect their clothes, many men would wear their robes-de-chambre while smoking in private. These robes acted as a barrier against ash and smoke, while also allowing them to showcase another garment from their collection. When the Crimean War of the 1850s popularised Turkish tobacco in Britain, smoking gained in popularity. After dinner, a gentleman might wear a smoking jacket and retreat to a smoking room.\n[…]\nWhile smoking jackets declined in popularity from the 1950s, a minority of wearers persisted; Playboy mogul Hugh Hefner was a notable example. In its January/February 1999 issue, Cigar Aficionado stated that the smoking jacket ought to be brought back, perhaps as an \"alternative type of formalwear\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Smoking",
        "situacao": "ok",
        "texto": "O smoking é um traje de cerimónia masculino, sendo também conhecido como black tie (traduzido do inglês, \"gravata preta\"). É uma roupa masculina semiformal para eventos noturnos, exigindo o uso de laço preto e casaco preto (recomendado) ou azul (muito) escuro.\n[…]\nA sua criação foi por volta de 1850, quando o periódico londrino Gentleman’s Magazine apresentou uma proposta do que seria um casaco ideal para quem gosta de fumar. A ideia era um tipo de robe de chambre, veludo, caxemira, plush ou flanela, revestido com cores brilhantes, ornamentada com algum tipo de estampa e botões grandes. Ele era menor estruturado que o blazer e portanto confortável para se ficar em casa enquanto se degustava charutos após as refeições.\n[…]\nPortanto o Smoking originalmente era uma espécie de Robe, uma vestimento informal.\n[…]\nEm 1860, quando a empresa Henry Poole & Co. costurou um casaco de seda azul para e a pedido do - então - príncipe de Gales (posteriormente, rei Eduardo VII do Reino Unido) trajar em jantares internos, como alternativa à casaca.Conta-se que, quando James Potter, de Nova York, visitou o príncipe Edward VII, ficou tão impressionado com a vestimenta que encomendou a Henry Poole uma igual para si. Quando Potter voltou para Nova York, usou o seu novo traje no Tuxedo Park Club.\n[…]\nRapidamente outros membros da agremiação copiaram o design, até que este veio a ser adotado como a referência informal para jantares. A denominação americana para o smoking, tuxedo, poderá ter aí a sua origem.\n[…]\nO termo específico utilizado em português, smoking, deriva do inglês smoking jacket, item de vestuário hoje relativamente raro, não sendo mais utilizado com o propósito de se fumar charutos mas sim para eventos formais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Salto alto",
      "descricao": "Calçado com o calcanhar elevado em relação à ponta do pé"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em inglês, o salto agulha se chama stiletto, o mesmo nome de qual objeto de origem italiana?",
    "resposta": "Um punhal fino",
    "distratores": [
      "Um alfinete",
      "Um prego",
      "Um florete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stiletto_heel",
      "https://en.wikipedia.org/wiki/Stiletto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stiletto_heel",
        "situacao": "ok",
        "texto": "A stiletto heel, or just stiletto, is a shoe with a long, thin, high heel. It is named after the stiletto dagger.\n[…]\nHigh-heeled shoes were worn by men and women courtiers until the French Revolution. When high heels came back in style in the late 1800s, they were worn only by women. The stiletto heel came with the advent of technology using a supporting metal shaft or stem embedded into the heel, instead of wood or other, weaker materials that required a wide heel. Italian shoe designer Salvatore Ferragamo paved the way for stilettos by inventing the steel arch.\n[…]\nSubsequently, round-toe shoes with slightly thicker (sometimes cone-shaped) semi-stiletto heels, often very high in an attempt to convey slenderness were frequently worn at the office with wide-shouldered power suits. The style survived through much of the 1980s but almost completely disappeared during the 1990s when professional and college-age women took to wearing shoes with thick, block heels.\n[…]\nStiletto heels are particularly associated with the image of the femme fatale. They are often considered to be a seductive item of clothing, and are fetishized as an erotic object by some.\n[…]\nStiletto heels concentrate a large amount of force into a small area. The great pressure under such a heel, which is greater than that under the feet of an elephant, can cause damage to carpets and floors. The stiletto heel, unless equipped with a \"heel stopper\" to enlarge the floor contact area, can be impractical for outdoor wear on soft ground (such as grass, sand or mud), or in environments where floor damage is unacceptable."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stiletto",
        "situacao": "ok",
        "texto": "A stiletto (plural stilettos) is a specialized dagger with a long slender blade and needle-like point, primarily intended as a thrusting and stabbing weapon.\n[…]\nDuring the 1950s, large numbers of folding switchblade or automatic opening knives with locking blades were imported from Italy to the United States. Most of these switchblades were side-opening designs, though some employed a telescoping blade. These Italian switchblades were commonly and popularly referred to as stilettos, since most incorporated a long, slender blade tapering to a needle-like point, together with a slim-profile handle and vestigial cross-guard.\n[…]\nThe majority of these Italian stiletto switchblade knives used a now-iconic bayonet or dagger-style blade with a single sabre-grind edge (often unsharpened) and a false edge of varying length. All of these knives lock the blade in the fully open position, and this lock, combined with the stiletto blade profile, enabled the knife to be used as an effective thrusting or stabbing weapon (unlike most U.S. switchblade designs of the day).\n[…]\nThough most switchblade stilettos used a single-edge dagger-type blade, many variations exist, including kris and flat ground blades.\n[…]\nAs with the medieval stiletto, the stiletto switchblade was designed primarily as an offensive weapon, optimized for thrusting rather than cutting. The Italian style switchblade's peculiar properties combined a switchblade's easy concealment with the ability to make a surprise offensive thrust and a deep wound capable of reaching vital organs. In use, the knife would normally be concealed from view in the palm with the blade in the closed position."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Tênis",
      "descricao": "Calçado esportivo e casual, de solado de borracha e cadarço, aqui um par de lona."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nos Estados Unidos, o tênis ganhou o apelido de sneaker por causa de algo que a sola de borracha permitia fazer. O quê?",
    "resposta": "Andar sem fazer barulho",
    "distratores": [
      "Correr na chuva",
      "Pular mais alto",
      "Andar na areia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sneakers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sneakers",
        "situacao": "ok",
        "texto": "Sneakers (US) or trainers (UK),  also known by a wide variety of other names, are shoes primarily designed for sports or other forms of physical exercise, but are also widely used for everyday casual wear.\n[…]\nSneakers intended for running come in a range of shapes suited to different purposes. Generally, they are divided by running style: the majority are for heel-toe joggers/runners which are further subdivided into 'neutral', 'overpronation' and 'underpronation'. However, most evidence-based comparisons show no reduction in lower-limb running injuries from prescribing different types of shoe for different foot types.\n[…]\nSneakers have been an important part of hip hop (primarily Pumas, Nike, and Adidas) and rock 'n roll (Converse, Vans) cultures since the 1970s. Hip hop artists sign million dollar deals with major brands such as Nike, Adidas, or Puma to promote their shoes. Sneaker collectors, called \"sneakerheads\", regard sneakers as fashionable items. Sneaker companies encourage this trend by producing rare sneakers in limited numbers, often at very high retail prices.\n[…]\nArtistically-modified sneakers can sell for upwards of $1000 at exclusive establishments like Saks Fifth Avenue. In 2005, a documentary, Just for Kicks, about the sneaker phenomenon and history was released.\n[…]\nContemporary sneakers are largely made from synthetic materials, and the materials and manufacturing process produce, on average, about 14 kg (31 lb) of CO2 emissions. Some companies are trying to substitute more sustainable materials in their manufacture. About 90% of shoes end up in landfill sites at end of life.\n[…]\nMedia related to Sneakers (footwear) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/T%C3%AAnis_%28vestu%C3%A1rio%29",
        "situacao": "ok",
        "texto": "Tênis (português brasileiro) ou ténis (português europeu), sapatilha (português europeu) ou quede(português angolano) é um tipo de calçado. Foi idealizado como acessório na prática de desporto, mas atualmente é amplamente utilizado no vestuário casual.\n[…]\nO tênis, como conhecemos hoje, é um calçado esportivo que se originou no final do século XIX. Acredita-se que o primeiro modelo de tênis tenha sido criado na década de 1860, na Inglaterra, como uma alternativa mais confortável e menos barulhenta aos sapatos de sola dura que eram usados para jogar tênis de grama na época.\n[…]\nO nome \"tênis\" foi dado ao calçado em homenagem ao esporte em que ele era usado. Originalmente, os tênis eram feitos de lona e borracha, com uma sola de borracha vulcanizada. Esses materiais tornavam o calçado mais leve e confortável para jogar tênis e outros esportes.\n[…]\nNa década de 1960, a empresa alemã Adidas lançou o primeiro tênis com uma sola de borracha com pregos, conhecido como \"sapatilha de cravos\". Esse modelo de tênis foi especialmente projetado para melhorar o desempenho dos atletas em pistas de corrida e campos de atletismo, e rapidamente se tornou um sucesso entre os corredores profissionais.\n[…]\nAlém disso, estão em voga tênis de linha ecológica, calçados elaborados com materiais reciclados, como as versões Green Pack da Fila (empresa).\n[…]\nO tênis também se tornou-se um símbolo de cultura e estilo de vida em todo o mundo. A cultura sneakerhead, por exemplo, envolve a coleção e o comércio de tênis raros e exclusivos. Os tênis também desempenharam um papel importante em movimentos culturais como o hip-hop e o skate, onde os skatistas usam tênis para proteger os pés e obter uma aderência adequada ao andar de skate, como é o caso do Fila Corda.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Coturno",
      "descricao": "Bota militar de couro, com cano alto e cadarço, projetada para soldados em combate."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome coturno vem de uma bota de sola alta usada, no teatro da Grécia Antiga, por quais artistas?",
    "resposta": "Atores de tragédia",
    "distratores": [
      "Atores de comédia",
      "Cantores do coro",
      "Músicos de flauta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Buskin",
      "https://pt.wikipedia.org/wiki/Coturno"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Buskin",
        "situacao": "ok",
        "texto": "A buskin is a knee- or calf-length boot made of leather or cloth, enclosed by material, and laced, from above the toes to the top of the boot, and open across the toes.\n[…]\nThe word buskin, only recorded in English since 1503 meaning \"half boot\", is of unknown origin, perhaps from Old French brousequin (in modern French brodequin) or directly from its Middle Dutch model brosekin \"small leather boot\".\n[…]\nA high-heeled buskin (Greek kothornos (Greek: κόθορνος) or Latin cothurnus) was worn by Athenian tragic actors (to make them look taller). Buskins therefore sometimes appear as a symbol of tragedy, often contrasted with \"sock\" (from Latin soccus), the low shoe worn by comedians.\n[…]\nThe buskin was also worn by hunters, and soldiers in Ancient Greek, Etruscan, and Roman societies, to protect the lower legs against thorns, dirt, etc.\n[…]\nByzantine emperors were formally clad in purple buskins, embroidered in gold with double-headed eagles.\n[…]\nThe 17th-century English diplomat Dudley Carleton described Anne of Denmark performing as Pallas in the 1604 masque The Vision of the Twelve Goddesses. She wore \"a pair of buskins sett with rich stones\".\n[…]\nThis article incorporates text from a publication now in the public domain: Herbermann, Charles, ed. (1913). \"Buskins\". Catholic Encyclopedia. New York: Robert Appleton Company."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coturno",
        "situacao": "ok",
        "texto": "Coturno é um tipo de calçado, muito confundido com um tipo de bota, voltada principalmente para o uso militar em atividades de combate. Geralmente são feitos de couro (tratado de maneira especial para tornar-se impermeável), porém tecnologias modernas permitem a fabricação de coturnos com materiais como kevlar e nomex. O objetivo do coturno é oferecer ao combatente uma combinação de atrito com o s\n[…]\nApesar da aparência rústica, coturnos modernos podem ser bastante confortáveis. Também são classificados como equipamento de proteção individual.\n[…]\nCoturnos também são populares como vestimenta nas subculturas do gótico, punk, grunge, heavy metal, skinhead, industrial entre outras; no entanto, eles estão se tornando mais e mais convencionais. Além da moda, em si, muitas pessoas optam por usar coturnos simplesmente devido à durabilidade, conforto e outras utilidades, já que as botas são projetados especificamente para serem confortáveis de usar em uma variedade de mudanças e condições, por longos períodos sem desgaste significativo.\n[…]\nCoturnos têm uma vida útil mais longa do que as botas comuns, o que pode dar-lhes uma sensação de vintage. Por essas e outras razões, podem ser comprados em quase todas as cidades de certo tamanho em lojas de excedentes militares, ou em grandes cidades em lojas de produtos específicos para roqueiros ou motociclistas.\n[…]\nBota"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Poá",
      "descricao": "Estampa de círculos cheios do mesmo tamanho, espaçados regularmente."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome da estampa de bolinhas chamada poá vem do francês pois. O que essa palavra francesa significa?",
    "resposta": "Ervilha",
    "distratores": [
      "Moeda",
      "Gota",
      "Botão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Polka_dot",
      "https://pt.wiktionary.org/wiki/po%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Polka_dot",
        "situacao": "ok",
        "texto": "The polka dot, also written polkadot, and also called spot printed and spot print in the United Kingdom and pois (\"peas\") in France, is a pattern consisting of an array of large filled circles of the same size. Though the dots must be relatively large ones, and must be all the same size in any given print, different styles of polka dot prints may change the size of the dots or the distance between\n[…]\nSince 1975, a red-on-white polka-dotted jersey has been awarded to the leader in the mountain classification of the annual Tour de France cycling race.\n[…]\nSome people associate polka dots with Venezuelan fashion designer Carolina Herrera, who used polka dots on most of her dresses during the late 1980s and early 1990s, as well as on the boxes of perfume Carolina Herrera, Herrera For Men, Aquaflore and Flore.\n[…]\nMuch of the Japanese artist Yayoi Kusama's work features a polka dot motif.\n[…]\nThe polka dot also appears in popular music. \"Itsy Bitsy Teenie Weenie Yellow Polka Dot Bikini\" is a novelty song telling the story of a shy girl in a very revealing bathing suit who stays immersed in the ocean water to hide from view. It was written by Paul Vance and Lee Pockriss and first released in June 1960 by Brian Hyland. Before that, however, \"Polka Dots and Moonbeams\" was a popular song with music by Jimmy Van Heusen and lyrics by Johnny Burke, published in 1940.\n[…]\nThe 1943 Twentieth Century Fox Technicolor musical film The Gang's All Here, directed by Busby Berkeley, featured a large production number \"The Polka-Dot Polka\". The song was written by Harry Warren and Leo Robin, referencing the 19th century polka dot craze in the lyrics, and sung by Alice Faye with the Busby Berkeley dancers.\n[…]\nPolka Dot Door\n[…]\nPolka-dot paint\n[…]\nStewart, Jude (2010). \"Seeing Spots: From lepers to paranoia, the twisted history of the polka dot\" Slate"
      },
      {
        "url": "https://pt.wiktionary.org/wiki/po%C3%A1",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Chanel nº 5",
      "descricao": "Perfume feminino da grife Chanel, criado pelo perfumista Ernest Beaux e lançado em 1921."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1921, Coco Chanel escolheu um perfume entre amostras numeradas do perfumista Ernest Beaux. Por que ele se chama Chanel número cinco?",
    "resposta": "Era a quinta amostra",
    "distratores": [
      "Tinha cinco flores",
      "Custava cinco francos",
      "Quinto ano da grife"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chanel_No._5"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chanel_No._5",
        "situacao": "ok",
        "texto": "Chanel No. 5 is the first perfume launched by French couturier Gabrielle \"Coco\" Chanel in 1921. The scent formula for the fragrance was compounded by French-Russian chemist and perfumer Ernest Beaux. The design of its bottle has been an important part of the product's branding. Coco Chanel was the first face of the fragrance, appearing in the advertisement published by Harper's Bazaar in 1937.\n[…]\nIn 1920, when presented with small glass vials containing sample scents numbered 1 to 5 and 20 to 24 for her assessment, she chose the fifth vial. Chanel told her master perfumer, Ernest Beaux, whom she had commissioned to develop a new fragrance, \"I present my dress collections on the fifth of May, the fifth month of the year and so we will let this sample number five keep the name it has already, it will bring good luck.\"\n[…]\nCoco Chanel had wanted to develop a distinctly modern fragrance for some time prior to early-1920. At this time, Chanel's lover was Grand Duke Dmitri Pavlovich Romanov of Russia, the murderer of Rasputin. The duke introduced her to Ernest Beaux on the French Riviera. Beaux was the master perfumer at A. Rallet and Company, where he had been employed since 1898. The company was the official perfumer to the Russian imperial family, and \"the imperial palace at St.\n[…]\nThe key was Beaux's use of aldehydes as aroma boosters. Beaux's student, Constantin Weriguine, said the aldehyde Beaux used had the clean note of the Arctic, \"a melting winter note\". A laboratory assistant, mistaking a full strength mixture for a ten percent dilution, had jolted the compound with a quantity of aldehyde never before used. Beaux prepared ten glass vials for Chanel's assessment. Numbered 1–5 and 20–24, each group a variation of the compound. \"Number five.\n[…]\nCoco Chanel (1937)\n[…]\nMedia related to Chanel No. 5 at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chanel_N%C2%BA_5",
        "situacao": "ok",
        "texto": "Chanel Nº 5 é um perfume feminino lançado em 1921 pela maison francesa Chanel. Criado pelo perfumista Ernest Beaux a pedido de Coco Chanel, é considerado uma das fragrâncias mais influentes da história da perfumaria moderna.\n[…]\nO perfume foi desenvolvido após Coco Chanel solicitar uma fragrância que representasse uma mulher moderna, afastando-se dos perfumes excessivamente florais do início do século XX.\n[…]\nErnest Beaux apresentou diversas amostras numeradas, e Chanel escolheu a quinta proposta, dando origem ao nome Nº 5. O lançamento oficial ocorreu em 5 de maio de 1921.\n[…]\nChanel Nº 5 pertence à família olfativa floral-aldeídica. Sua composição inclui aldeídos combinados com notas florais como jasmim e rosa de maio, além de notas amadeiradas na base.\n[…]\nDesde sua criação, Chanel Nº 5 esteve associado a campanhas publicitárias de grande visibilidade internacional.\n[…]\nEm 1986, a campanha estrelada por Carole Bouquet e dirigida por Ridley Scott consolidou o uso de linguagem cinematográfica na publicidade de perfumes.\n[…]\nChanel Nº 5 tornou-se um símbolo cultural do luxo e da feminilidade no século XX. A declaração atribuída à atriz Marilyn Monroe, afirmando que usava apenas algumas gotas do perfume ao dormir, contribuiu significativamente para sua notoriedade internacional.\n[…]\nAo longo de sua história, Chanel Nº 5 foi associado a diversas personalidades do cinema e da moda, que participaram de campanhas publicitárias internacionais:\n[…]\nCoco Chanel (1937)\n[…]\n(em inglês) Chanel Nº 5",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Quilate (unidade de peso)",
      "descricao": "Unidade de massa usada para pesar diamantes e outras pedras preciosas, igual a 200 miligramas."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O quilate, unidade de peso das pedras preciosas, tem nome derivado das sementes de qual árvore, usadas antigamente como contrapeso nas balanças?",
    "resposta": "Alfarrobeira",
    "distratores": [
      "Oliveira",
      "Tamareira",
      "Romãzeira"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Carat_(mass)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carat_(mass)",
        "situacao": "ok",
        "texto": "The carat (ct) is a unit of mass equal to 200 mg (0.00705 oz; 0.00643 ozt; 3.08647 gr), which is used for measuring gemstones and pearls.\n[…]\nThe current definition, sometimes known as the metric carat, was adopted in 1907 at the Fourth General Conference on Weights and Measures, and soon afterwards in many countries around the world. The carat is divisible into 100 points of 2 mg. Other subdivisions, and slightly different mass values, have been used in the past in different locations.\n[…]\nThe ANSI X.12 EDI standard abbreviation for the carat is CD.\n[…]\nA metric carat of 200 milligrams is exactly one-fifth of a gram and had often been suggested in various countries, and was finally proposed by the International Committee of Weights and Measures, and unanimously accepted at the fourth sexennial General Conference of the Metric Convention held in Paris in October 1907. It was soon made compulsory by law in France, but uptake of the new carat was slower in England, where its use was allowed by the Weights and Measures (Metric System) Act of 1897.\n[…]\nIn the United Kingdom the original Board of Trade carat was exactly 3+1647⁄9691 grains (~3.170 grains = ~205 mg); in 1888, the Board of Trade carat was changed to exactly 3+17⁄101 grains (~3.168 grains = ~205 mg). Despite it being a non-metric unit, a number of metric countries have used this unit for its limited range of application.\n[…]\nLikewise, the ounce troy was divisible into 24 ounce carats of 20 grains troy each; the ounce carat was divisible into four ounce grains of 5 grains troy each; and the ounce grain was divisible into four ounce quarters of 1+1⁄4 grains troy each."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quilate",
        "situacao": "ok",
        "texto": "No que se refere a pedras preciosas, como o diamante, um quilate representa uma massa igual a duzentos miligramas. A unidade de massa foi adotada em 1907 na Quarta Conferência Geral de Pesos e Medidas. O quilate pode ser subdividido ainda em 100 pontos de 2 mg cada.\n[…]\nExemplos: ouro e quilates.\n[…]\nA palavra quilate (em inglês: carat) provém do italiano carato, este originário do árabe qīrāṭ (قيراط), por sua vez derivado do grego antigo kerátion (κεράτιον), «semente de alfarroba», diminutivo de kéras (κέρας), «chifre». Era também uma unidade ponderal equivalente a 1/1728 (1/123) de uma libra (ver mina).\n[…]\nAs sementes de alfarroba foram historicamente utilizadas para pesar joias, devido à crença de que apresentavam baixa variabilidade na distribuição de sua massa. No entanto, tratava-se de um equívoco factual, visto que a variação de massa dessas sementes é comparável à observada em sementes de outras espécies.\n[…]\nNo Reino Unido, o quilate da Junta Comercial (Board of Trade carat) original equivalia a exatamente 3+1647⁄9691 grãos (~3,170 grãos = ~205 mg); em 1888, o valor oficial foi fixado em exatamente 3+17⁄101 grãos (~3,168 grãos = ~205 mg). Apesar de ser uma unidade não métrica, diversos países que já adotavam o sistema métrico chegaram a utilizá-la em razão de seu escopo específico de aplicação.\n[…]\nO solidus também funcionava como unidade ponderal no Império Romano. Registros documentais indicam que o peso de 72 moedas do tipo solidus equivalia a exatamente uma libra romana, e que o peso de um solidus correspondia a 24 siliquae (síliquas). Considera-se geralmente que a libra romana pesava cerca de 327,45 g (podendo oscilar até 5 g a menos). Consequentemente, o equivalente métrico de uma siliqua era de aproximadamente 189 mg.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Converse All Star",
      "descricao": "Modelo de tênis de lona da Converse, criado para o basquete no início do século vinte."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O tênis Converse All Star também leva o nome de Chuck Taylor, que o divulgou pelos Estados Unidos a partir dos anos vinte. Quem era ele?",
    "resposta": "Jogador de basquete",
    "distratores": [
      "Fundador da Converse",
      "Químico da borracha",
      "Jogador de beisebol"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chuck_Taylor_(salesman)",
      "https://en.wikipedia.org/wiki/Chuck_Taylor_All-Stars"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chuck_Taylor_(salesman)",
        "situacao": "ok",
        "texto": "Charles Hollis Taylor (June 24, 1901 – June 23, 1969) was an American basketball player and basketball shoe salesman-marketer who was associated with Chuck Taylor All-Stars, which he helped to improve and promote.\n[…]\nWithin a year of Taylor's arrival the company had adopted his suggestions of changing the design of the Converse All Star shoe to provide enhanced flexibility and support. The restyled shoe also included a distinctive star-shape logo on the patch that protected the ankle. After Taylor's signature was added to the All Star logo on the patch of the shoes, they became known as Chuck Taylor All Stars.\n[…]\nMost American basketball players wore Chuck Taylor All Stars between the mid-1920s and the 1970s. When basketball became an Olympic sport in 1936, he designed a white high-top model with blue and red trim for the 1936 Olympic Games. The Converse All Star shoe remained the official shoe of the United States Olympics team from 1936 to 1968.\n[…]\nBy the 1960s, Converse had captured about 70 to 80 percent of the basketball shoe market before the company's sales declined. Beginning in the 1980s, Converse All Stars enjoyed a comeback in popularity as casual footwear. Nike acquired Converse in 2003 and continues to market Chuck Taylor All Star shoes in mass merchandise outlets worldwide.\n[…]\n\"The History of the Converse All Star \"Chuck Taylor\" Basketball Shoe\". Chucksconnection.com. Retrieved March 13, 2012.\n[…]\nAamidor, Abraham (2006). Chuck Taylor, All Star: The True Story of the Man behind the Most Famous Athletic Shoe in History. Bloomington: Indiana University Press. ISBN 0-253-34698-3.\n[…]\nNaismith Memorial Basketball Hall of Fame – Charles H. \"Chuck\" Taylor\n[…]\nChuck Taylor at Find a Grave"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chuck_Taylor_All-Stars",
        "situacao": "ok",
        "texto": "Chuck Taylor All-Stars or Converse All Stars (also referred to as  \"Converse\", \"Chuck Taylors\", \"Chucks\", \"Chuckys\", \"Cons\", \"All Stars\", and \"Chucky Ts\") are sneakers manufactured by American fashion brand Converse (a subsidiary of Nike, Inc. since 2003). Initially developed as a basketball shoe in the early 20th century, its design has remained largely unchanged since its introduction. The shoe \n[…]\ninto the high-top's ankle patch, resulting in the design that became known as the Chuck Taylor All Star.\n[…]\nIn 2013, Converse launched the Chuck Taylor All Star '70, which featured a build similar to the All Stars used for basketball games built in the late 1960s and early 1970s. This retro model differed from the then-current Chuck Taylor All Stars, as various changes happened to the All Star shoes over the intervening three decades.\n[…]\nOn July 28, 2015, Converse released the Chuck Taylor All Star II.\n[…]\nThe cast of several popular network television series such as Dennis the Menace (1959–64), M*A*S*H (1972–83), Happy Days (1974–84) and The A-Team (1983–87) have worn Converse All Star shoes. Wally and Beaver are seen wearing Converse as they climb a ladder in a 1958 episode (S1E18) of the MCA TV show Leave It to Beaver. Opie Taylor (Ron Howard) wore Chuck Taylor high tops in season 4 episode 9 of the Andy Griffith Show which first aired on 11/25/1963.\n[…]\nIn 2015, Converse released the Converse All-Star Andy Warhol collection, in partnership with the Andy Warhol Foundation. In honor of Warhol's contributions to visual art, Converse designed the All-Star shoe to commemorate Warhol's subcultural influence. Since 2018, sculptor Michael Leavitt has formatted long-running projects for art students and craftspeople to make a do-it-yourself Converse Chuck Taylor cardboard shoe.\n[…]\nThe low-top Chuck Taylors provide complete ankle mobility, as the canvas does not cover the ankles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chuck_Taylor",
        "situacao": "ok",
        "texto": "Charles Hollis \"Chuck\" Taylor (Condado de Brown, 24 de junho de 1901 – Port Charlotte, 23 de junho de 1969) foi um basquetebolista e treinador de basquete estadunidense, membro do Basketball Hall of Fame em 1969 como um contribuinte.\n[…]\nDesde o ensino médio, Taylor costumava usar tênis de jogo da Converse. Apreciou-os a ponto de ir diretamente para a empresa em 1921, para procurar um emprego. Foi contratado com a qualificação de agente de vendas e, a partir de então, dedicou-se quase exclusivamente à divulgação dos tênis All Star, que tinham sido de pouco sucesso até então.\n[…]\nTaylor viajou por todos os Estados Unidos, promovendo o jogo de basquete e o uso dos All Star. Em 1922, teve a intuição de publicar o \"Converse Basketball Yearbook\", um anuário que reunia fotos dos maiores campeões da época, que usavam tênis Converse. O Converse Basketball Yearbook, publicado até 1983, tornou-se uma das mais aguardadas publicações de basquete, e contribuiu decisivamente para a notoriedade do jogo, promovendo e celebrando o trabalho de jogadores e treinadores americanos.\n[…]\nEm 1932, o nome de Chuck Taylor foi consagrado pela Converse, colocando a assinatura do jogador no All Star, que, portanto, oficialmente se tornou o Chuck Taylor All Star.\n[…]\nTaylor continuou a gastar com a disseminação e o desenvolvimento do basquete em todo o mundo, realizando cursos e seminários (\"clínicas\") em escolas de ensino médio, faculdades e academias onde o basquete era jogado. Foi para o México, América do Sul, Canadá, Porto Rico, África e Europa.\n[…]\nEm 1969, seu nome tornou-se parte do Basketball Hall of Fame, em reconhecimento aos esforços pioneiros que visam promover e difundir o basquete nos Estados Unidos.\n[…]\n«Chuck Taylor» (em inglês). no hoophall.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Crinolina",
      "descricao": "Armação rígida de aros usada sob as saias para deixá-las amplas e rodadas"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A crinolina deve seu nome ao tecido rígido da armação original, que misturava linho com os pelos de qual animal?",
    "resposta": "Cavalo",
    "distratores": [
      "Cabra",
      "Camelo",
      "Boi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Crinoline"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Crinoline",
        "situacao": "ok",
        "texto": "A crinoline ( KRIN-əl-in) is a stiff or structured petticoat designed to hold out a skirt, popular at various times since the mid-19th century. Originally, crinoline described a stiff fabric made of horsehair (\"crin\") and cotton or linen which was used to make underskirts and as a dress lining. The term crin or crinoline continues to be applied to a nylon stiffening tape used for interfacing and l\n[…]\nThe name crinoline is often described as a combination of the Latin word crinis (\"hair\") and/or the French word crin (\"horsehair\"); with the Latin word linum (\"thread\" or \"flax,\" which was used to make linen), describing the materials used in the original textile.\n[…]\nIn the 21st century, the term crin is still used to describe a type of woven nylon flat braid, available in various widths and used for stiffening and providing bulk-free body to hemlines, serving the same purpose as the original crin/crinoline. Crin tape/trim is typically transparent, though it also comes in black, white, and cream colors. It is also described as horsehair braid or crinoline tape.\n[…]\nLate 20th- and early 21st-century fashion designers such as Alexander McQueen and John Galliano often used crinolines in their designs, with the skirt of one of Galliano's ballgowns for Dior in 1998 reaching a width of 9 feet. Galliano specifically visited the original crinoline manufacturers that Christian Dior himself had used in order to inform and influence his own designs.\n[…]\nCrinolines continue to be worn well into the 21st century, typically as part of formal outfits such as evening gowns, prom dresses, quinceañera dresses, and wedding dresses.\n[…]\nMay, Brian; Pellerin, Denis (2016). Crinoline: Fashion's Most Magnificent Disaster. London: London Stereoscopic Company. ISBN 978-0957424623.\n[…]\n\"Crinoline\" . Encyclopædia Britannica (11th ed.). 1911."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crinolina",
        "situacao": "ok",
        "texto": "As crinolinas eram armações usadas sob as saias para lhes conferir volume, sem a necessidade do uso de inúmeras anáguas. Seu uso marca o momento em que surge a indústria da moda propriamente dita, sendo este o primeiro modismo que poderíamos chamar de \"universal\".\n[…]\nAs crinolinas foram usadas de 1852 a 1870 e chegaram a todos os cantos do planeta, atingindo o auge da sua popularidade na década de 1860. Eram inicialmente feitas artesanalmente, com crinas de cavalo trançadas (daí o nome), mas, a partir de 1855, passaram a ser produzidas industrialmente, utilizando tirantes e finos arames de aço.\n[…]\nDe qualquer maneira, mesmo que a imperatriz Eugênia não estivesse ligada diretamente à invenção das crinolinas, o certo é que ela foi a principal difusora e propagandista deste modismo.\n[…]\nPor serem peças de roupa tão marcantes do seu tempo, as crinolinas têm espaço garantido nas produções de época que retratam a segunda metade do século XIX, seja nos longa-metragens de Hollywood ou em obras audiovisuais para a TV. Seu enorme sucesso em sua época fica claro em filmes ambientados na Nova Zelândia, cenário de O Piano, onde a peça de roupa inclusive participa da narrativa: a protagonista faz uma tenda com sua crinolina e pernoita sob ela com a filha à beira-mar.\n[…]\nA crinolina também tem grande destaque em E o Vento Levou, sendo o exemplo mais clássico do uso das modas europeias pelas classes mais abastadas no sul dos Estados Unidos. No Brasil, o longa-metragem Mauá - O Imperador e o Rei também traz a peça por meio da personagem May, interpretada por Malu Mader, que gira seguidamente sua crinolina, então uma novidade. A presença da crinolina nas colônias europeias da África e Ásia também é lembrada na versão clássica de O Rei e Eu.\n[…]\nDefinição de Crinolina",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Fez",
      "descricao": "Chapéu de feltro cilíndrico, sem aba, geralmente vermelho com borla preta, símbolo do Império Otomano."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O chapéu fez, cilíndrico e vermelho, símbolo do Império Otomano, leva o nome de uma cidade de qual país?",
    "resposta": "Marrocos",
    "distratores": [
      "Turquia",
      "Egito",
      "Tunísia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fez_(hat)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fez_(hat)",
        "situacao": "ok",
        "texto": "The fez (Turkish: fes, Ottoman Turkish: فس, romanized: fes), also called tarboosh/tarboush (Arabic: طربوش, romanized: ṭarbūsh), is a felt headdress in the shape of a short, cylindrical, peakless hat, usually red, typically with a black tassel attached to the top. The name \"fez\" may refer to the Moroccan city of Fez, where the dye to color the hat was extracted from crimson berries. However, its or"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fez_%28chap%C3%A9u%29",
        "situacao": "ok",
        "texto": "O fez, também conhecido como tarbush, é um pequeno chapéu de feltro ou pano muitas vezes de cor avermelhada e utilizados em conjunto com um turbante. Apenas os homens usam fez. Foi muito popular durante o Império Otomano, quando foi incorporado ao traje oficial do governo. Em 1925, o fez foi proibido na Turquia como parte das reformas do Presidente Kemal Atatürk. Desde então, o fez deixou de fazer",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Chapéu-coco",
      "descricao": "Chapéu de feltro duro com copa arredondada, criado em Londres em 1849."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que chapéu era marca registrada tanto de Carlitos, personagem de Charlie Chaplin, quanto dos detetives Dupond e Dupont, das aventuras de Tintim?",
    "resposta": "Chapéu-coco",
    "distratores": [
      "Cartola",
      "Chapéu-palheta",
      "Fedora"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bowler_hat",
      "https://en.wikipedia.org/wiki/Thomson_and_Thompson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bowler_hat",
        "situacao": "ok",
        "texto": "The bowler hat, also known as a Coke hat, billycock, bob hat, or derby (United States), is a hard felt hat with a rounded crown, originally created by the London hat-makers Thomas and William Bowler in 1849 and commissioned by Lock & Co. Hatters of St James's Street, London. It has traditionally been worn with semi-formal and informal attire.\n[…]\nThe bowler hat was famously used by actors such as Charlie Chaplin, Laurel and Hardy, Shemp Howard and Curly Howard; and by the fictional character John Steed of The Avengers, played by Patrick Macnee, who wore a variety of bowler hats throughout the series. In the 1964 film Mary Poppins, set in Edwardian London, 1910, the London banker George Banks (played by David Tomlinson) wears a bowler.\n[…]\nCharlie Chaplin wore a bowler hat to his morning dress as part of his 'Little Tramp' costume.\n[…]\nJ. Wellington Wimpy wears a bowler hat.\n[…]\nJosé Rizal, a Filipino patriot and national hero, wore a bowler hat before his execution by firing squad in 1896.\n[…]\nThe Plug Uglies, a nineteenth-century American street gang, wore bowler hats stuffed with cloth or wool to protect their heads while fighting.\n[…]\nJohn Bonham, drummer for Led Zeppelin, often wore a bowler hat.\n[…]\nEdward Coke, for whom the first bowler hat was designed.\n[…]\nLou Costello of Abbott and Costello often wore a bowler hat.\n[…]\nLaurel and Hardy are known for wearing bowler hats.\n[…]\nCurly Howard and Shemp Howard of The Three Stooges frequently wore bowler hats.\n[…]\nBoy George often wore a bowler hat during the 1980s.\n[…]\nBig Bully Busick, professional wrestler, who wore a bowler hat as part of his 1920s bully gimmick.\n[…]\nRobinson, Fred Miller (1993). The Man in the Bowler Hat: His History and Iconography (First hardcover ed.). Chapel Hill, NC and London: The University of North Carolina Press. ISBN 9780807820735. OCLC 26855812.\n[…]\nMedia related to Bowler hats at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Thomson_and_Thompson",
        "situacao": "ok",
        "texto": "Thomson and Thompson (French: Dupont et Dupond [dypɔ̃ e dypɔ̃]) are fictional characters in the Adventures of Tintin comics series by Belgian cartoonist Hergé. They are two intelligence service detectives, identical in both appearance (apart from slightly different moustaches) and demeanor, first introduced in Tintin's fourth adventure Cigars of the Pharaoh (1932–1934), although the 1946 version o\n[…]\nIn his 1941 play Tintin in India: The Mystery of the Blue Diamond, co-written with Jacques Van Melkebeke, Hergé named them as \"Durant and Durand\", although he later renamed them as \"Dupont and Dupond\". When King Ottokar's Sceptre was serialised in Eagle for British readers in 1951, the characters were referred to as \"Thomson and Thompson\"; these names were later adopted by translators Leslie Lonsdale-Cooper and Michael Turner in their translation of the series into English for Methuen Publishing.\n[…]\nThe detectives were in part based on Hergé's father Alexis and uncle Léon, identical twins who often took walks together wearing matching bowler hats while carrying matching walking sticks. Another inspiration was a picture of two mustachioed, bowler-hatted, formally dressed detectives who were featured on the cover of the Le Miroir edition of 2 March 1919.\n[…]\nIn the original French, Dupond and Dupont are stereotypically prevalent surnames (akin to \"Smith\") and pronounced identically (IPA: [dypɔ̃]). The different letters indicate their different moustache styles: D for droit (\"straight\"), T for troussée (\"turned up\"). Translators of the series in some languages have tried to find names for the pair that are common, and similar or identical in pronunciation. They thus become:\n[…]\nThe original Dupond and Dupont are kept in Swedish, Danish, Norwegian, Hungarian, Turkish, Finnish, Indonesian, Italian, Basque, Catalan, the Casterman edition in Spanish, and the newer Portuguese editions."
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
    "indice": 14,
    "ancora": {
      "nome": "Chapéu pillbox",
      "descricao": "Chapéu pequeno de copa plana, lados retos e sem aba, que lembra uma caixa de comprimidos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No início dos anos sessenta, qual primeira-dama americana transformou o chapéu pillbox em moda, usando um na posse do marido?",
    "resposta": "Jacqueline Kennedy",
    "distratores": [
      "Eleanor Roosevelt",
      "Mamie Eisenhower",
      "Nancy Reagan"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pillbox_hat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pillbox_hat",
        "situacao": "ok",
        "texto": "A pillbox hat is a small hat with a flat crown, straight, upright sides, and no brim. It is named after the small cylindrical or hexagonal cases that were used for storing or carrying a small number of pills.\n[…]\nThe modern woman's pillbox hat was created by milliners in the 1930s, and gained popularity due to its elegant simplicity. Pillbox hats were made out of wool, velvet, organdy, mink, lynx or fox fur, and leopard skin, among many other materials. They were generally designed in solid colors and were unaccessorized, but could include a veil.\n[…]\nJacqueline Kennedy, First Lady of the United States from 1961 to 1963, was well known for her \"signature pillbox hats\", designed for her by Halston, and was wearing a pink one to match her pink Chanel suit on the day of her husband United States President John F. Kennedy's assassination in Dallas, Texas. Actress Natalie Portman wore a pillbox hat to play Kennedy in the 2016 biographical drama Jackie.\n[…]\nIn the mid to late 1800’s the “pillbox” hat made an appearance in baseball; a round-crowned wool cap, with horizontal stripes and a flat button top. In 1976 the pillbox hat also appeared on the heads of the Pittsburgh Pirates, a throwback to baseball’s earlier days.\n[…]\nPillbox hats are a satirical subject of the song \"Leopard-Skin Pill-Box Hat\" by Bob Dylan which first appeared on his 1966 album Blonde on Blonde.\n[…]\nPillbox (military)\n[…]\nMedia related to Pillbox hats at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Cartola",
      "descricao": "Chapéu alto de copa reta e aba curta, tradicionalmente preto, usado com trajes formais ocidentais."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que o presidente Abraham Lincoln, o Tio Sam e os mágicos que tiram coelhos do chapéu costumam ter em comum na cabeça?",
    "resposta": "Cartola",
    "distratores": [
      "Chapéu-coco",
      "Tricórnio",
      "Chapéu de caubói"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Top_hat",
      "https://en.wikipedia.org/wiki/Uncle_Sam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Top_hat",
        "situacao": "ok",
        "texto": "A top hat (also called a high hat, or, informally, a topper) is a tall, flat-crowned hat traditionally associated with formal wear in Western dress codes, meaning white tie, morning dress, or frock coat. Traditionally made of black silk or sometimes grey, the top hat emerged in Western fashion by the end of the 18th century.\n[…]\nThe 1840s and the 1850s saw it reach its most extreme form, with ever-higher crowns and narrow brims. The stovepipe hat was a variety with mostly straight sides, while one with slightly convex sides was called the \"chimney pot\". The style most commonly referred to as the stovepipe was popularized in the United States by Abraham Lincoln during his presidency; though it is postulated that he may never have called it stovepipe himself, but merely a silk hat or a plug hat.\n[…]\nLincoln often carried documents and letters inside the hat. One of Lincoln's top hats is kept on display at the National Museum of American History in Washington, DC.\n[…]\nA top hat, frequently colored red, white and blue, or with stars and stripes similar to those on the American flag, is part of the regular costume of Uncle Sam, a symbol of the United States.\n[…]\nIn some synagogues, the president and honorary officers may wear a top hat on Shabbat or the great festivals. The custom of wearing a top hat, or tzylinder in the Yiddish language, originated in 19th-century England, replacing the wig and tricorn hat. The custom became widespread in Europe until The Holocaust. In some traditional Sephardi synagogues, members of the congregation may also wear top hats on special occasions.\n[…]\nSteinberg, Neil, Hatless Jack: The President, the Fedora and the Death of the Hat, 2005, Granta Books"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Uncle_Sam",
        "situacao": "ok",
        "texto": "Uncle Sam is a common national personification of the United States, depicting the federal government or the country as a whole. Since the early 19th century, Uncle Sam has been a popular symbol of the U.S. government in American culture and a manifestation of patriotic emotion. Uncle Sam has also developed notoriety for his appearance in military propaganda, made popular in a 1917 World War I rec"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cartola",
        "situacao": "ok",
        "texto": "A cartola é um chapéu masculino de aba estreita, copa alta (chamada de chaminé pelos estilistas da época) e cilíndrica, frequentemente de cor preta e brilhante, e usado habitualmente em ocasiões solenes em conjunto com o fraque (roupa formal diurna) ou com a casaca (roupa formal noturna). Era chamado originalmente de chapéu alto.\n[…]\nNa segunda metade do século XIX, com o engajamento das mulheres, geralmente de baixa estatura, às companhias de navegação e a necessidade de diferenciá-las do uniforme dos homens, que usavam o famoso quepe militar, desenhou-se uma indumentária semelhante ao quepe, que foi a cartola. Os estilistas costumavam acrescentar as cores da companhia de navegação no contorno da chaminé da cartola.\n[…]\nNo século XIX, o espírito popular já o criticava, apelidando-o de \"chaminé\", de \"canudo\" ou de \"cartola\", uma variante de \"quartola\", nome dado a uma pequena pipa que correspondia a um quarto de tonel, com a qual o chapéu se parecia.\n[…]\nNas caricaturas da imprensa, a cartola, o fraque, o monóculo e o charuto compõem a figura dos novos-ricos e dos magnatas. Por associação, passou a denominar a classe dos dirigentes esportivos que enriqueceram — muitas vezes ilicitamente — administrando clubes de futebol.\n[…]\nChapéu\n[…]\nClaque (chapéu)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Boina",
      "descricao": "Chapéu macio, redondo e de copa plana, em lã ou feltro, associado ao País Basco e à França."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na foto Guerrillero Heroico, de Alberto Korda, uma das imagens mais reproduzidas do século vinte, Che Guevara aparece com qual chapéu?",
    "resposta": "Boina",
    "distratores": [
      "Quepe",
      "Chapéu de palha",
      "Gorro de lã"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guerrillero_Heroico"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guerrillero_Heroico",
        "situacao": "ok",
        "texto": "Guerrillero Heroico (Latin American Spanish: [ɡeriˈʝeɾo eˈɾojko]; \"Heroic Guerrilla Fighter\") is a photograph of Argentine revolutionary Che Guevara taken by Alberto Korda. It was captured on 5 March 1960, in Havana, Cuba, at a memorial service for victims of the La Coubre explosion. By the end of the 1960s, the image, in conjunction with Guevara's subsequent actions and eventual assassination, he\n[…]\nKorda had given Fresquet a copy of the portrait as a basis for the poster, which he created on red paper. This was the first privately produced Guerrillero Heroico created in Cuba. Since then the building has seen many versions of the image, and today a permanent steel outline, derived from the photograph, adorns the building. The image of Guerillero Heroico is present on both the banknote and coin designs for three Cuban pesos.\n[…]\nAs pop artists took to the image with glee, it evolved into a popular and heavily commercialized icon that often strayed far from Che's hard-line Marxist message. British pop artist Sir Peter Blake has referred to Guerrillero Heroico as \"one of the great icons of the 20th century\". When converted into a stark black cut-out, Korda's photograph became easy, cheap, and fast to copy using the favored material and method of the 1960s: lith film and screen painting.\n[…]\nIn 1968, Elena Serrano produced a widely distributed poster titled \"Day of the Heroic Guerrilla\", which shows telescoping images of Korda's photograph expanding to cover the entire red map of South America.\n[…]\nAlberto Korda's photograph has received wide distribution and modification, appearing on T-shirts, posters, consumer products, protest banners, personal tattoos, and in many other formats. It has become a countercultural symbol. The image is worn by a diverse group of individuals, from those who support the ideals of Che Guevara, to those expressing a more generalized anti-authoritarian stance."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerrillero_Heroico",
        "situacao": "ok",
        "texto": "Guerrillero Heroico (em português: Guerrilheiro Heroico) é uma fotografia de Che Guevara tirada por Alberto Korda em 5 de março de 1960 em Havana, Cuba durante um memorial dedicado às vítimas da explosão de La Coubre. A fotografia só foi publicada internacionalmente sete anos depois de ter sido tirada. De acordo com Korda, Guevara demonstrava \"imobilidade absoluta\", \"raiva\" e \"dor\" no momento em q\n[…]\nAnos mais tarde, Korda declarou que seu retrato capturou todo \"caráter, firmeza, estoicismo e determinação\" que Guevara possuía. Guevara tinha 31 anos quando a fotografia foi tirada.\n[…]\nDe acordo com o Instituto-Faculdade de Arte de Maryland (Maryland Institute College of Art), o retrato de Guevara é \"a mais famosa fotografia do mundo e um símbolo do século XX\". O Victoria and Albert Museum declarou ser \"a imagem mais reproduzida da história da fotografia\". Jonathan Green, diretor do Museu de Fotografia da Universidade da Califórnia em Riverside, afirma que \"a imagem de Korda insinuou-se na linguagem por todo o mundo.\n[…]\nUma redução do retrato foi reproduzida em uma grande variedade de mídias, apesar de Korda nunca ter solicitado royalties daqueles que publicaram a imagem devido às suas crenças nos ideais de Guevara.\n[…]\nA imagem mais famosa de Che Guevara é o desenho do seu busto em alto contraste baseado na foto de Alberto Korda. Esta imagem foi reproduzida em diversas variações: algumas em vermelho e preto, outras em preto e branco, e algumas em preto e branco com uma estrela vermelha pelo artista irlandês Jim Fitzpatrick, um artista muito mais conhecido por seus desenhos de divindades e seres da mitologia irlandesa.\n[…]\nA técnica de Fitzpatrick foi usada mais tarde por Andy Warhol com os mesmos processos gráficos que usou sobre retratos de Marilyn Monroe.\n[…]\n«Information about Alberto Korda, the photographer» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Barrete frígio",
      "descricao": "Gorro cônico macio com a ponta dobrada para a frente, usado na Antiguidade e depois símbolo de liberdade na Revolução Francesa."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Os gorros brancos dos Smurfs, personagens do belga Peyo, imitam qual chapéu, que virou símbolo da liberdade na Revolução Francesa?",
    "resposta": "Barrete frígio",
    "distratores": [
      "Boina basca",
      "Bicorne",
      "Fez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Phrygian_cap",
      "https://en.wikipedia.org/wiki/The_Smurfs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phrygian_cap",
        "situacao": "ok",
        "texto": "The Phrygian cap ( ), also known as Thracian cap and liberty cap, is a soft conical cap with the apex bent over, associated in antiquity with several peoples in Eastern Europe, Anatolia, and Asia. The Phrygian cap was worn by Thracians, Dacians, Persians, Medes, Scythians, Trojans and Phrygians after whom it is named. The oldest known depiction of the Phrygian cap is from Persepolis in Iran.\n[…]\nIt was adopted in place of a crown on the coats of arms of the Argentina, Cuba, and Nicaragua republics as a symbol of their struggle for liberation and independence. It thus came to be identified as a symbol of republican government. A number of national personifications, including France's Marianne and the United States' Columbia are commonly depicted wearing the Phrygian cap.\n[…]\nThe use of a Phrygian-style cap as a symbol of revolutionary France is first documented in May 1790, at a festival in Troyes, adorning a statue representing the nation, and at Lyon, on a lance carried by the goddess Libertas. To this day the national allegory of France, Marianne, is shown wearing a red Phrygian cap.\n[…]\nThe U.S. Army has, since 1778, used a \"War Office Seal\" in which the motto \"This We'll Defend\" is displayed directly over a Phrygian cap on an upturned sword.\n[…]\nMany of the anti-colonial revolutions in Latin America were heavily inspired by the imagery and slogans of the American and French Revolutions. As a result, the cap has appeared on the coats of arms of many Latin American nations. The coat of arms of Haiti includes a Phrygian cap to commemorate that country's foundation by rebellious slaves.\n[…]\nThe Phrygian cap in Latin American and Haitian coats of arms and flags\n[…]\nIn the Belgian comic franchise The Smurfs, the eponymous Smurfs are typically depicted wearing Phrygian-like caps.\n[…]\nThe dictionary definition of Phrygian cap at Wiktionary"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Smurfs",
        "situacao": "ok",
        "texto": "The Smurfs (French: Les Schtroumpfs; Dutch: De Smurfen) is a Belgian comic franchise centered on a fictional colony of small, blue, humanoid creatures who live in mushroom-shaped houses in the forest. The Smurfs was created and introduced as a series of comic characters by the Belgian comics artist Peyo (the pen name of Pierre Culliford) in 1958, wherein they were known as Les Schtroumpfs.\n[…]\nThe cast has a simple structure as well: almost all the characters look essentially alike—mostly male (a few female Smurfs have appeared: Smurfette, Sassette, and Nanny Smurf), short (\"three apples high\"), with blue skin, white trousers with a hole for their short tails, white hat in the style of a Phrygian cap, and sometimes some additional accessory that identifies a personality (for example, \"Handy Smurf\" wears overalls instead of the standard trousers, a brimmed hat, and a pencil above his ear).\n[…]\nOn August 31, 2017, it was announced that IMPS and Dupuis Audiovisuel would be working on the new Smurfs TV series with CGI animation. The series was scheduled for 2020 but postponed to 2021. It is co produced by Ketnet (Flanders), TF1 (France), KiKa (Germany), OUFTIVI (Wallonia), Peyo Productions, and Dupuis Audiovisuel (the TV branch of the comics publisher). It shows new stories, not adaptations of comics or other older stories.\n[…]\nThe Smurfs Epic Run (2015)\n[…]\nThe Smurfs: Mission Vileaf (2021)\n[…]\nThe Smurfs Kart (2022)\n[…]\nThe Smurfs 2: The Prisoner of the Green Stone (2023)\n[…]\nThe Smurfs: Village Party (2024)\n[…]\nThe Smurfs: Dreams (2024)\n[…]\nSmurfs Playhouse by SKIDOS (2025)\n[…]\nThe 50th anniversary of the Smurfs and the 80th anniversary of the birth of its creator Peyo, were celebrated by issuing a high-value collectors' coin: the Belgian 5 euro 50th anniversary of The Smurfs commemorative coin, minted in 2008.\n[…]\nSmurfs at Don Markstein's Toonopedia Archived[link removed] from the original on June 5, 2017."
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
    "indice": 18,
    "ancora": {
      "nome": "Luva",
      "descricao": "Peça de vestuário que cobre a mão, com compartimentos separados para cada dedo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Nos anos oitenta, qual cantor americano fez de uma única luva branca, coberta de brilhos, uma de suas marcas registradas?",
    "resposta": "Michael Jackson",
    "distratores": [
      "Prince",
      "Lionel Richie",
      "Stevie Wonder"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Michael_Jackson",
      "https://en.wikipedia.org/wiki/Motown_25:_Yesterday,_Today,_Forever"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Jackson",
        "situacao": "ok",
        "texto": "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. Dubbed the \"King of Pop\", he is widely regarded as one of the most culturally significant figures of the 20th century. His musical achievements broke American racial barriers and made him a dominant figure worldwide.\n[…]\nMichael Joseph Jackson was born on August 29, 1958, at St Mary's Mercy Hospital, in Gary, Indiana. He was the eighth of ten children in the Jackson family, an African-American working-class household living in a two-bedroom home on Jackson Street. His mother, Katherine Jackson (née Scruse), a Jehovah's Witness, played clarinet, cello, and piano; she aspired to be a country-and-western performer, and worked part-time at Sears.\n[…]\nHis father, Joe Jackson, was a former boxer and a crane operator at US Steel, who also played guitar for the local rhythm and blues group the Falcons. Through his father, Michael had Native American (Choctaw) ancestry; his great-grandfather, Israel Nero Jackson, utilized and sold traditional Indigenous herbal medicine, a practice passed down from his father, July \"Jack\" Gale, an US Army scout who had married a Black slave named Gina before the Civil War.\n[…]\nOn January 9, 2002, Jackson won his 22nd American Music Award for Artist of the Century. Later that year, an anonymous surrogate mother gave birth to his third child, Prince Michael Jackson II (nicknamed \"Blanket\"), who had been conceived by artificial insemination. On November 20, Jackson briefly held Blanket over the railing of his Berlin hotel room, four stories above ground level, prompting widespread criticism in the media.\n[…]\nPersonal relationships of Michael Jackson\n[…]\nList of artists influenced by Michael Jackson\n[…]\nHow Michael Jackson Changed Dance History – biography.com\n[…]\nMichael Jackson at the FBI's website"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Motown_25:_Yesterday,_Today,_Forever",
        "situacao": "ok",
        "texto": "Motown 25: Yesterday, Today, Forever was a 1983 television special which commemorated the 25th anniversary of Motown Records. Produced by Motown executive Suzanne de Passe, the program was taped before a live audience at the Pasadena Civic Auditorium in Pasadena, California, on March 25, 1983, and broadcast on NBC on May 16.\n[…]\nWidely hailed as his breakthrough performance as a solo artist, Michael's solo performance followed the Jackson 5 performance. Michael danced while miming to the studio recording of \"Billie Jean\", which at the time was in the middle of a seven-week run atop the Billboard Hot 100 music charts and was the only non-Motown song performed on the show. This was also the first time he performed what would become his most famous signature move, the moonwalk.\n[…]\nShortly after the first verse, Ross introduced Wilson and Birdsong to the audience while Wilson took over the lead vocals during this segment while Ross introduced Motown labelmates such as Smokey Robinson, Stevie Wonder, Michael Jackson, the Temptations, Adam Ant and others as they quickly filled the stage for an impromptu finale.\n[…]\nMotown 25 was released on DVD through Star Vista Entertainment/Time Life in six-DVD, three-DVD and one-DVD versions on September 30, 2014. Prior to this, the special could only be found on VHS, Laserdisc and a rare pre-recorded 8mm tape. The only footage of Motown 25 on DVD was Michael Jackson's performance of \"Billie Jean\" which was officially released on the HIStory on Film, Volume II DVD and the DVD included in Thriller 25. There are some differences between the VHS video release and the DVD."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Michael_Jackson",
        "situacao": "ok",
        "texto": "Michael Joseph Jackson (Gary, 29 de agosto de 1958 – Los Angeles, 25 de junho de 2009) foi um cantor, compositor, dançarino e filantropo estadunidense. Apelidado de \"Rei do Pop\", ele é considerado uma das figuras culturais mais significantes do século XX e um dos maiores artistas da história da música. Ao longo de uma carreira de quatro décadas, suas conquistas musicais ao redor do mundo e sua vid\n[…]\nCom o sucesso de \"Thriller\", o interesse do público e da imprensa por Jackson era crescente. Tornaram-se notórios não somente os hábitos pouco usuais do músico, mas também os trabalhos humanitários de Michael, especialmente em prol de crianças e adolescentes. Em maio de 1984, Jackson participou do lançamento de uma campanha contra as drogas na Casa Branca como convidado do presidente americano na época Ronald Reagan.\n[…]\nO primeiro, Michael Joseph Jackson Jr., apelidado \"Prince\", nasceu naquele ano. No ano seguinte, Rowe deu à luz Paris Katherine Jackson. A enfermeira abriu a mão de todos os direitos maternos e entregou a guarda das crianças a Jackson, gerando grande polêmica. Em 2002, Rowe afirmou, em entrevista à rede americana de televisão FOX, que os filhos foram \"presentes\" dados por ela ao astro. Em março de 2019, Debbie Rowe revelou que Prince e Paris não são filhos biológicos do cantor.\n[…]\nNo ano de 1996, Michael veio ao Brasil em parceria com o Olodum para a gravação do clipe de They Don't Care About Us, quarto single do álbum HIStory (1995). As gravações foram realizadas no Pelourinho em Salvador na Bahia e no(a) Favela Santa Marta/Morro Dona Marta no Rio de Janeiro, o figurino de Jackson era completamente brasileiro (camiseta do Olodum e calça jeans azul — no demais, óculos escuros preto com a borda dourada & seu tradicional mocassim preto com meias brancas).\n[…]\nMichael Jackson's Moonwalker (1989)\n[…]\nMichael Jackson: The Experience (2010)\n[…]\nPlanet Michael (2011)\n[…]\nMichael Jackson no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Giorgio Armani",
      "descricao": "Estilista italiano nascido em 1934, fundador da grife Armani em Milão"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1980, o filme Gigolô Americano ajudou a projetar Giorgio Armani nos Estados Unidos com os ternos vestidos por qual ator?",
    "resposta": "Richard Gere",
    "distratores": [
      "John Travolta",
      "Robert Redford",
      "Al Pacino"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Giorgio_Armani",
      "https://en.wikipedia.org/wiki/American_Gigolo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giorgio_Armani",
        "situacao": "ok",
        "texto": "Giorgio Armani (Italian: [ˈdʒordʒo arˈmaːni]; 11 July 1934 – 4 September 2025) was an Italian fashion designer and founder of the Armani luxury fashion house. Widely regarded as among the most influential designers in contemporary fashion, Armani initially gained recognition for his work with fashion house Cerruti 1881, before founding his own label in 1975.\n[…]\nIn 1973, he partnered with Sergio Galeotti to open a design office and in 1975 they founded Giorgio Armani S.p.A., launching men's and women's ready-to-wear collections. Armani expanded his brand globally, introducing several lines including Emporio Armani, Armani Junior and AX Armani Exchange, while also establishing a presence in cosmetics, perfumes and home furnishings. His work in costume design for over 100 films, notably American Gigolo (1980), helped cement his international reputation.\n[…]\nArmani felt that a relationship with the film industry was essential, both for promotional reasons and for creative stimulus. In 1980, he was involved in the costume-making of the film American Gigolo, specifically for actor Richard Gere who played the main character Julian Kaye.\n[…]\nThe production of his work through film helped to publicize Armani's name, with a scene involving Gere yanking open a drawer of Armani shirts, perfectly folded with the labels exposed, before creating four entirely Armani outfits in the film. This connection to the film industry projected his name and brand to a much broader audience. Armani designed costumes for more than one hundred films, one of the most important of which was The Untouchables (1987).\n[…]\n1983: Honored by the Council of Fashion Designers of America (CFDA) as best international designer\n[…]\nArmani Company website\n[…]\nGiorgio Armani at The Fashion Styles\n[…]\nGiorgio Armani at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/American_Gigolo",
        "situacao": "ok",
        "texto": "American Gigolo is a 1980 American neo-noir crime drama thriller film written and directed by Paul Schrader, and starring Richard Gere and Lauren Hutton. It tells the story of a high-priced escort in Los Angeles (Gere) who becomes romantically involved with a prominent politician's wife (Hutton), while simultaneously becoming the prime suspect in a murder case.\n[…]\nAmerican Gigolo was released by Paramount Pictures on February 1, 1980. The film established Gere as a leading man, and was one of the first mainstream Hollywood films to include frontal male nudity from its main star. It is marked by its Golden Globe–nominated musical score, composed by Giorgio Moroder, and number-one single \"Call Me\" by Blondie.\n[…]\nSchrader then turned to his first choice, Richard Gere, who accepted the role two weeks before shooting began. American Gigolo was one of several films in which Gere was cast in a role previously offered to Travolta; this had first occurred with Days of Heaven (1978) and later recurred with An Officer and a Gentleman (1982) and Chicago (2002). Gere later said that he was drawn to the character partly because of the film's gay subtext and the opportunity to portray a lifestyle unfamiliar to him.\n[…]\nThe film has been widely credited with establishing Armani brand in Hollywood, with the Italian fashion house's clothes featured prominently in Julian's wardrobe. When Gere replaced Travolta in the lead role, Armani's team had to produce a new wardrobe because Travolta was several inches taller than Gere.\n[…]\nThe site's critical consensus reads, \"While Paul Schrader's clinical direction and Richard Gere's muted performance don't stir much passion, American Gigolo succeeds as a stylish character study.\" On Metacritic, the film has a weighted average score of 57 out of 100 based on 34 critics, indicating \"mixed or average\" reviews."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Giorgio_Armani",
        "situacao": "ok",
        "texto": "Giorgio Armani OMRI (Placência, 11 de julho de 1934 – Milão, 4 de setembro de 2025) foi um estilista e empresário italiano. Ganhou reconhecimento inicial por seu trabalho na Cerruti 1881. Sua própria empresa, Armani, foi fundada em 1975 e posteriormente se diversificou para áreas como música, esportes e hotéis de luxo. Em 2001, Armani alcançou amplo reconhecimento como o estilista italiano de maio\n[…]\nArmani também estabeleceu uma forte ligação com o cinema. Em 1980, criou figurinos para o filme American Gigolo, especialmente para o ator Richard Gere, interpretando Julian Kaye. A cena em que Gere abre uma gaveta de camisas Armani contribuiu para popularizar o nome do estilista. Armani projetou figurinos para mais de cem filmes, incluindo Os Intocáveis (1987).\n[…]\nO Armani Hotel foi inaugurado no Burj Khalifa em 27 de abril de 2010, ocupando os 39 andares inferiores do arranha-céu em Dubai, Emirados Árabes Unidos. O hotel conta com 160 quartos e suítes e 144 residências. Armani também projetou os interiores das Residências Armani, localizadas no mesmo edifício, além de sua linha de produtos de mobiliário da coleção Armani/Casa.\n[…]\nGiorgio Armani revolucionou a moda na década de 1970 com silhuetas minimalistas e desconstruídas, exemplificadas pelos famosos casacos macios e ternos desestruturados. Inspirado pelo cinema italiano dos anos 1960 e 1970 — notadamente Alain Delon em Le Samouraï e Marcello Mastroianni em A Doce Vida —, Armani transformou a elegância masculina e feminina em uma forma contemporânea, sóbria e sofisticada.\n[…]\nA primeira-ministra italiana, Giorgia Meloni, disse que Armani era um \"símbolo do melhor da Itália\". O empresário francês Bernard Arnault creditou Armani por criar um \"estilo único\" de moda e por levar a \"elegância italiana a uma escala global\".\n[…]\nGiorgio Armani no IMDb\n[…]\nwww.giorgioarmani.com — Site da empresa\n[…]\nGiorgio Armani no The Fashion Styles",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Charles Frederick Worth",
      "descricao": "Costureiro do século dezenove radicado em Paris, considerado o pai da alta-costura"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No Segundo Império francês, o costureiro Charles Frederick Worth ficou famoso vestindo qual imperatriz, esposa de Napoleão terceiro?",
    "resposta": "Eugênia de Montijo",
    "distratores": [
      "Josefina",
      "Maria Luísa",
      "Sissi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Frederick_Worth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Frederick_Worth",
        "situacao": "ok",
        "texto": "Charles Frederick Worth (13 October 1825 – 10 March 1895) was an English fashion designer who founded the House of Worth, one of the foremost fashion houses of the 19th and early 20th centuries. He is considered by many fashion historians to be the father of haute couture. Worth is also credited with revolutionising the business of fashion.\n[…]\nWorth became Empress Eugénie's official dressmaker and ensured the majority of her orders for extravagant evening wear, court dresses, and masquerade costumes. She had him on call constantly to create dresses for events she attended. As an example of the scale of Worth's business with the Empress, for the opening of the Suez Canal in 1869, she had decided she needed 250 Worth dresses. Apart from Empress Eugénie, he had numerous other royal clients, including Empress Elisabeth of Austria.\n[…]\nWorth created a shorter hemline – a walking skirt – at the suggestion of Empress Eugénie, who enjoyed long walks but not long skirts. This was initially seen as too radical, even shocking, because it was at ankle length, but its practical benefits meant it was adopted over time. An 1885 example of the Worth 'walking dress' is held at the archives of the Metropolitan Museum of Art.\n[…]\nThere seems little doubt that Worth had amassed a fortune; an 1874 visitor to this villa (who called it a château) described an abundance of faience china; a conservatory full of exotic plants; a winter garden and stables full of immaculately turned out horses. The gardens contained statuary and stones retrieved from Tuileries Palace (former home of his foremost patron Empress Eugénie) that were about to be incorporated into a new hothouse.\n[…]\nSaunders, Edith (1955). The Age of Worth – Couturier to the Empress Eugenie. Indiana University Press.\n[…]\nMuseum of the City of New York online exhibition of Worth couture garments"
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
    "indice": 21,
    "ancora": {
      "nome": "Jaqueta perfecto",
      "descricao": "Jaqueta de couro de motociclista com zíper na diagonal, criada pela americana Schott em 1928."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No filme O Selvagem, de 1953, qual ator transformou a jaqueta de couro de motociclista em símbolo da juventude rebelde?",
    "resposta": "Marlon Brando",
    "distratores": [
      "James Dean",
      "Elvis Presley",
      "Steve McQueen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Perfecto_motorcycle_jacket",
      "https://en.wikipedia.org/wiki/The_Wild_One"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Perfecto_motorcycle_jacket",
        "situacao": "ok",
        "texto": "Perfecto is a secondary brand of \"lancer fronted\" leather motorcycle jackets designed by Irving Schott and manufactured by the American clothing company, Schott NYC. The first jacket was introduced in 1928, making it the first such styled leather motorcycle jacket. There is some debate as to whether Marlon Brando wore a Schott Perfecto or a replica made by Durable in the 1953 seminal movie The Wil\n[…]\nThe 618 is introduced. It is identical to the 613 except for the lack of stars. In The Wild One, the stars on the epaulettes and the snaps on the collar of Marlon Brando's jacket were not original, but added to the jacket. Its popularity and connection to The Wild One movie led to it being banned from sale in many districts of England and the USA and becoming a symbol of rebellious youth.\n[…]\nJackets are made out of steer hide. The Neck label is black with Style Quality Perfecto Genuine Steerhide All Hand-Cut in creme and red letters on coat of arms/crest. Small long white size tag with black letters directly below the neck label. Schott Bros. Inc. printed on leather neck hanger. Stitching on the collar and lapels is placed at the same distance from the edge. Passants have one seam and a pointy end. ESKO cuff zippers. Side pockets are at an approx.\n[…]\nNeck label is black with bull and cactus, Perfecto genuine steerhide - handcut Schott Bros. Small white size tag with red letters directly below neck label.\n[…]\nJackets are made out of steerhide (613/618) and naked cowhide (118, introduced in 1977). Neck label is rectangular, creme white with bull in upper left corner, Perfecto in yellow diagonal stripe and by Schott Bros. in lower right corner. Small white size tag with red letters directly to the right of neck label. TALON cuff zippers. Side pockets are at an approx. 55° angle and breast pocket at a 60° angle."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Wild_One",
        "situacao": "ok",
        "texto": "The Wild One is a 1953 American crime film directed by László Benedek and produced by Stanley Kramer. The picture is most noted for the character of Johnny Strabler, portrayed by Marlon Brando, whose persona became a cultural icon of the 1950s. The Wild One is considered to be the original outlaw biker film, and the first to examine American outlaw motorcycle gang violence. The supporting cast fea\n[…]\nMarlon Brando as Johnny Strabler\n[…]\nIn the March 2, 1953, issue of Time magazine at page 38, Marlon Brando acknowledged the controversy surrounding the production, saying he would retire from films because:\n[…]\nThe persona of Johnny as portrayed by Brando became an influential image in the 1950s. His character wears long sideburns, a Perfecto-style motorcycle jacket and a tilted cap; he rides a 1950 Triumph Thunderbird 6T. His haircut helped to inspire a craze for sideburns, followed by James Dean and Elvis Presley, among others.\n[…]\nA 1966 silkscreen ink on canvas painting titled Four Marlons by Andy Warhol depicted four identical portraits of the actor as Johnny leaning across his Triumph Thunderbird motorcycle. The same portrait was exhibited as a single piece titled Marlon Brando in 1967.\n[…]\nMad magazine parodied The Wild One in their September 1954 issue as The Wild 1/2 starring \"Marlon Branflakes\".\n[…]\nThe punk band the Ramones was inspired to adopt leather jackets by the film. Coincidentally, the guitarist's first name was Johnny, like Brando's character.\n[…]\nThe Series II episode \"Kryten\" from the British sitcom Red Dwarf ends with an extended homage to the film in which the android character Kryten imitates Brando's character. Earlier in the episode, the character of Lister shows the film to Kryten in an attempt to encourage the android to break its programming.\n[…]\nIn Twin Peaks, Michael Cera plays Wally Brando, who dresses like Johnny Strabler and does a Marlon Brando impression."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Chanel nº 5",
      "descricao": "Perfume feminino da grife Chanel, criado pelo perfumista Ernest Beaux e lançado em 1921."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Qual atriz de Hollywood, perguntada sobre o que vestia para dormir, respondeu que usava apenas algumas gotas de Chanel número cinco?",
    "resposta": "Marilyn Monroe",
    "distratores": [
      "Audrey Hepburn",
      "Grace Kelly",
      "Elizabeth Taylor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chanel_No._5"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chanel_No._5",
        "situacao": "ok",
        "texto": "Chanel No. 5 is the first perfume launched by French couturier Gabrielle \"Coco\" Chanel in 1921. The scent formula for the fragrance was compounded by French-Russian chemist and perfumer Ernest Beaux. The design of its bottle has been an important part of the product's branding. Coco Chanel was the first face of the fragrance, appearing in the advertisement published by Harper's Bazaar in 1937.\n[…]\nIn April 1952, American actress Marilyn Monroe appears for the first time on the cover of Life, and the article mentions her answer to the question, \"What do you wear to bed?\" and her reply, \"Chanel No. 5.\" In an unpublished photo shoot for an article by Sidney Skolsky in Modern Screen in 1953, a Chanel No. 5 bottle is seen on her nightstand.\n[…]\nIn 2013 Chanel ran an advertising campaign using a recorded interview with Marilyn Monroe in which she is asked about her use of Chanel No. 5. It featured Ed Feingersh's photograph of the actress splashing herself with a bottle of the perfume. On her first cover of Life magazine in 1952, Marilyn Monroe famously said she wore only Chanel No. 5 to bed. A recording of her discussing the subject further with Georges Belmont for Marie Claire in 1960 has been found. She said people pose questions.\n[…]\n\"They ask me: 'What do you wear to bed? A pajama top? The bottoms of the pajamas? A nightgown?' So I said, 'Chanel No. 5', because it's the truth\" she explained. \"And yet, I don't want to say nude. But it's the truth!\"\n[…]\nAccording to Chanel, the formula used to produce No. 5 has changed little since its creation, except for the necessary exclusion of natural civet and certain nitro-musks. The Eau de Parfum, though, is a different fragrance from the Parfum and the Eau de Toilette, and was composed in the eighties by Jacques Polge as a modern version of No. 5.\n[…]\nCoco Chanel (1937)\n[…]\nMarilyn Monroe (2013)\n[…]\nMedia related to Chanel No. 5 at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chanel_N%C2%BA_5",
        "situacao": "ok",
        "texto": "Chanel Nº 5 é um perfume feminino lançado em 1921 pela maison francesa Chanel. Criado pelo perfumista Ernest Beaux a pedido de Coco Chanel, é considerado uma das fragrâncias mais influentes da história da perfumaria moderna.\n[…]\nO perfume foi desenvolvido após Coco Chanel solicitar uma fragrância que representasse uma mulher moderna, afastando-se dos perfumes excessivamente florais do início do século XX.\n[…]\nErnest Beaux apresentou diversas amostras numeradas, e Chanel escolheu a quinta proposta, dando origem ao nome Nº 5. O lançamento oficial ocorreu em 5 de maio de 1921.\n[…]\nChanel Nº 5 pertence à família olfativa floral-aldeídica. Sua composição inclui aldeídos combinados com notas florais como jasmim e rosa de maio, além de notas amadeiradas na base.\n[…]\nDesde sua criação, Chanel Nº 5 esteve associado a campanhas publicitárias de grande visibilidade internacional.\n[…]\nNos anos 1970, a atriz Catherine Deneuve tornou-se o rosto da fragrância nos Estados Unidos.\n[…]\nChanel Nº 5 tornou-se um símbolo cultural do luxo e da feminilidade no século XX. A declaração atribuída à atriz Marilyn Monroe, afirmando que usava apenas algumas gotas do perfume ao dormir, contribuiu significativamente para sua notoriedade internacional.\n[…]\nAo longo de sua história, Chanel Nº 5 foi associado a diversas personalidades do cinema e da moda, que participaram de campanhas publicitárias internacionais:\n[…]\nCoco Chanel (1937)\n[…]\nMarilyn Monroe (imagens de arquivo) (2013)\n[…]\n(em inglês) Chanel Nº 5",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Chapéu-panamá",
      "descricao": "Chapéu de palha trançada com fibras da palmeira toquilla, fabricado tradicionalmente no Equador."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O chapéu-panamá ganhou ainda mais fama depois que qual presidente americano foi fotografado com ele, em 1906, visitando as obras do canal?",
    "resposta": "Theodore Roosevelt",
    "distratores": [
      "Franklin Roosevelt",
      "Woodrow Wilson",
      "William Taft"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Panama_hat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Panama_hat",
        "situacao": "ok",
        "texto": "A Panama hat, also known as an  Ecuadorian hat, a Jipijapa hat, or a toquilla straw hat, is a traditional brimmed straw hat of Ecuadorian origin. Traditionally, hats were made from the plaited leaves of the Carludovica palmata plant, known locally as the toquilla palm or Jipijapa palm, although it is a palm-like plant rather than a true palm.\n[…]\nAlthough commonly called \"Panama hat\" in English, the hat has its origin in Ecuador. When the Spanish conquistadors arrived in Ecuador in 1526, the inhabitants of its coastal areas were observed to wear a brimless hat that resembled a toque, which was woven from the fibres from a palm tree that the Spaniards came to call paja toquilla or \"toquilla straw\".\n[…]\nIn 1906, U.S. President Theodore Roosevelt visited the construction site of the Panama Canal and was photographed wearing a Panama hat,  which further increased the hat's popularity.\n[…]\nDespite their name, Panama hats originated in Ecuador where they are made to this day. Historically, throughout Central and South America, people referred to Panama hats as \"Jipijapa\", \"Toquilla\", or \"Montecristi\" hats (the latter two phrases are still in use today). Their designation as Panama hats originated in the 19th century, when Ecuadorian hat makers emigrated to Panama, where they were able to achieve much greater trade volumes.\n[…]\nThe name \"Panama hat\" was further reinforced by U.S. President Theodore Roosevelt's trip to oversee the construction of the Panama Canal. Roosevelt used his natural ability to drum up publicity by posing for a series of photos at the Panama Canal construction site in 1906. Photographic technology was relatively new at the time, and President Roosevelt was not shy about using the press to his advantage.\n[…]\nDomínguez, Miguel Ernesto (1991). El sombrero de paja toquilla – historia y economía."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chap%C3%A9u-panam%C3%A1",
        "situacao": "ok",
        "texto": "Chapéu-panamá (também grafado sem o hífen) é um chapéu que, apesar do nome, é fabricado no Equador (onde é chamado de El Fino), especialmente em Cuenca e Montecristi.\n[…]\nJá foi dito que recebeu este nome porque o presidente estadunidense Theodore Roosevelt usou-o durante uma visita ao canal do Panamá, em 1906. Em razão disso, o chapéu tornou-se moda, principalmente para homens, até a Segunda Guerra Mundial. Contudo, o Dicionário Oxford registra que esse termo é usado desde pelo menos 1834.\n[…]\nInicialmente era um produto exclusivamente masculino. Ainda hoje o chapéu é utilizado no verão, tanto por homens como por mulheres. Por vezes simboliza o ambiente praieiro tropical.\n[…]\nMuitas personalidades aderiram à moda do chapéu-panamá, como Winston Churchill, Kemal Atatürk, Harry Truman, Getúlio Vargas e Tom Jobim. Um dos pioneiros foi Santos Dumont, que já usava o seu em 1906.\n[…]\nA moda também se popularizou entre as estrelas de Hollywood, e galãs como Humphrey Bogart, Clark Gable e Michael Jackson usaram chapéus-panamá.\n[…]\nChapéu de palha\n[…]\nBuchet, Martine e Laziz Hamani. Panama: A Legendary Hat. 2004.\n[…]\nDomínguez, Miguel Ernesto. El sombrero de paja toquilla – historia y economía. 1991.\n[…]\nMiller, Tom. The Panama Hat Trail. 1986.\n[…]\n\"Panama hat, n.\". Oxford English Dictionary. Retrieved 2012-02-21. (subscription required)\n[…]\n«Consulado do Equador em São Paulo - Informações sobre o chapéu panamá»\n[…]\n«História do chapéu panamá e imagens de alguns modelos»\n[…]\nUm site dedicado ao chapéu panamá (em castelhano e em francês).\n[…]\n«Um site apresentando o famoso chapéu panamá»\n[…]\n«Chapéu Panamá e tendências»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Camisa listrada bretã",
      "descricao": "Camisa de malha com listras horizontais azuis e brancas, adotada pela marinha francesa em 1858 e popularizada na moda por Coco Chanel."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo uma tradição famosa, a camisa listrada dos marinheiros franceses tinha uma listra para cada vitória de Napoleão. Quantas listras eram?",
    "resposta": "Vinte e uma",
    "distratores": [
      "Doze",
      "Quinze",
      "Trinta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Breton_shirt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Breton_shirt",
        "situacao": "ok",
        "texto": "A marinière (French: [maʁinjɛʁ]), or tricot rayé (French: [tʁiko ʁɛje]; lit. 'striped sweater'), is a cotton long-sleeved shirt with horizontal blue and white stripes. Characteristically worn by quartermasters and seamen in the French Navy, it has become a staple in civilian French fashion and, especially outside France, this kind of striped garment is often part of the stereotypical image of a Fr\n[…]\nIt is also known as a Breton shirt, as many sailors in the French Navy were from Brittany.\n[…]\nIn 2010, the marinière set the trend: the Elite modelling agency in its annual competition, it dressed the finalists in them; Prada added them in its September collection, Gilas Loaëc's Breton brand Kitsuné, took it up, as did Dolce & Gabbana, Michael Kors and others.\n[…]\nThe following year, the France national football team commissioned its supplier Nike for new away kit as a white jersey with blue stripes, taking inspiration from the marinière. It was seldom used. Much commented upon – and criticised – this striped kit was dropped eleven months afterwards in favour of a much plainer all-white strip.\n[…]\nIn addition to traditional French companies Armor Lux, Saint James only since 1982 (which at that time completed its historic wool manufacture with cotton) and the venerable Orcival, who has been manufacturing marinières in France since it supplied the French Navy, the brand Petit Bateau have taken up the marinière after a long absence, using it in a range of styles.\n[…]\nOn 19 October 2012, Arnaud Montebourg, the  French Industry Minister, wore an Armor Lux marinière in a cover photo for Le Parisien's magazine. Montebourg had agreed to the magazine's request to wear the marinière, with a French-made watch, in front of French-made household appliances. The cover article was a ten-page dossier on \"Made in France\", Montebourg's domestic production drive."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Dr. Martens",
      "descricao": "Marca de botas de couro com sola de amortecimento de ar, criada pelo médico alemão Klaus Märtens"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O modelo clássico de bota da Dr. Martens, de couro preto e costura amarela na sola, tem quantos pares de ilhoses para o cadarço?",
    "resposta": "Oito",
    "distratores": [
      "Seis",
      "Dez",
      "Catorze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dr._Martens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dr._Martens",
        "situacao": "ok",
        "texto": "Dr. Martens, also known as Doc Martens, Docs, or DMs, is a British footwear and clothing brand. Although most known for its durable footwear, it also makes a range of accessories, including clothing and bags. The footwear is distinguished by its air-cushioned sole, upper shape, welted construction, and yellow stitching. The company's global head office and design studio is located in Camden Town, \n[…]\nThe first Dr. Martens boot in the UK with an eight-eyelet, cherry-red-coloured, smooth leather design became known as style 1460 and are still in production today. There are now many variations of this classic design which was introduced on 1 April 1960. The three-eyelet shoe was issued exactly one year later with the style number 1461. The original 1460 and 1461 remain the company's best-selling DMs. The Dr.\n[…]\nMartens boots were made in their Cobbs Lane factory in Wollaston, Northamptonshire, where they continued to be made, in addition to production elsewhere, until at least 2018. Jane Schaffer, senior lecturer in footwear and accessories at the University of Northampton, says the classic range has \"become iconic\".\n[…]\nDr. Martens was listed on the London Stock Exchange at a value of £3.7 billion in January 2021.\n[…]\nDescribed by Lauren Cochrane of The Guardian as \"fashion's subversive smash hit\", Dr. Martens have garnered significant following and ownership within various subcultures since the brand was established in England in 1960, including skinhead, punk, goth, Gen X, LGBT, grunge, Britpop, nu-metal and early emo.\n[…]\nIn the 1975 British rock musical fantasy film Tommy, Elton John wore 4 ft 6 in (137 cm) DMs. On 30 September 2020, British heavy-metal pioneers Black Sabbath announced a Dr. Martens shoe collection to mark the 50th anniversaries of the band's Black Sabbath (1970) and Paranoid (1970) albums, with the boots depicting artwork from the band's eponymous debut album."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dr._Martens",
        "situacao": "ok",
        "texto": "Dr. Martens (frequentemente referidas como Doc Martens) é uma marca inglesa, criada na Alemanha em 1946, que inclui calçados, vestuários e acessórios, e que foi adotada nos anos 1960 e 1980 pela contra cultura, principalmente pelo movimento punk rock.\n[…]\nMartens não teve muita sorte vendendo seus sapatos, até que ele se encontrou com um velho amigo seu da universidade, Dr. Herbert Funck, em Munique, em 1947. Funck ficou intrigado com o design dos novos modelos de sapatos e os dois entraram em negócio em Seeshaupt no mesmo ano, na Alemanha, usando borracha descartada de aeroportos da Luftwaffe (força aérea alemã).\n[…]\nO Griggs Anglicano (o nome mudou para Maertens e Martens, e este foi mais comercial), logo reestruturaram o calcanhar para melhor, acrescentaram a vira de costura amarela, e patentearam a sola como AirWair.\n[…]\nAs primeiras botas Dr. Martens no Reino Unido sairam em 1 de abril de 1960 (portanto, conhecido como estilo 1460 (01/04/1960) e ainda em produção hoje) com oito ilhóses, na cor vermelho-cereja, feito em couro Napa. Originalmente, as botas eram feitas por alguns fabricantes de calçados na área de Northamptonshire, enquanto a Dr. Martens passavam os padrões de qualidade. Eles eram populares entre os trabalhadores, como carteiros, policiais e operários.\n[…]\nEm 1 de Abril de 2003, sob a pressão do declínio das vendas, a empresa Dr. Martens deixou toda a produção no Reino Unido, e a transferiu para a China e a Tailândia. Com esta mudança veio também o fim da empresa vegan-friendly, contra produtos de couro animal, que foram produzidos desde janeiro de 2000. Em 2007, a empresa começou a produzir seus calçados novamente na Inglaterra, no Cobbs Lane Fábrica de Wollaston.\n[…]\nDr Martens",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Louis Vuitton",
      "descricao": "Fabricante francês de malas (1821–1892), fundador da grife que leva seu nome"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Aos treze anos, Louis Vuitton saiu de sua aldeia no leste da França e foi a pé até Paris. Quanto tempo durou a viagem?",
    "resposta": "Cerca de dois anos",
    "distratores": [
      "Duas semanas",
      "Dois meses",
      "Seis meses"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Louis_Vuitton_(designer)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Vuitton_(designer)",
        "situacao": "ok",
        "texto": "Louis Vuitton (French: [lwi vɥitɔ̃] ; 4 August 1821 – 27 February 1892) was a French malletier and businessman. He was the founder of the Louis Vuitton brand of leather goods now owned by LVMH. Prior to this, he had been appointed as trunk-maker to Eugénie de Montijo, wife of Napoleon III.\n[…]\nVuitton was born to a family of artisans, carpenters, and farmers in Lavans-sur-Valouse. At the age of 10, his mother, a hat-maker, died, and his father followed soon after. Following a difficult relationship with his adoptive stepmother, Vuitton left his home in Jura, in Franche-Comté in the spring of 1835, at the age of 13. Taking odd jobs along the way, Vuitton traveled approximately 292 miles (470 km) to Paris.\n[…]\nArriving in 1837, in the middle of the Industrial Revolution, he apprenticed under Monsieur Marechal, a successful trunk maker and packer. Within a few years, Vuitton gained a reputation amongst Paris' more fashionable class as one of the city's premier practitioners of the craft.\n[…]\nIn 1854, at age 33, Vuitton married 16-year-old Clemence-Emilie Parriaux. Soon after, he left Marechal's shop and opened his own trunk making and packing workshop in Paris. Outside of his shop hung a sign that read: \"Securely packs the most fragile objects. Specializing in packing fashions.\" In 1858, inspired by H.J. Cave & Sons of London, Vuitton introduced his revolutionary rectangular canvas trunks at a time when the market had only rounded-top leather trunks.\n[…]\nVuitton also designed the world's first pick-proof lock. All lock patterns were safely kept at Vuitton's workrooms and registered with the owner's name in case another key was needed."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Gisele Bündchen",
      "descricao": "Supermodelo brasileira nascida em 1980 em Horizontina"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A gaúcha Gisele Bündchen foi descoberta por uma agência de modelos num shopping de São Paulo. Quantos anos ela tinha?",
    "resposta": "Catorze",
    "distratores": [
      "Onze",
      "Dezesseis",
      "Dezoito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gisele_B%C3%BCndchen",
      "https://pt.wikipedia.org/wiki/Gisele_B%C3%BCndchen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gisele_B%C3%BCndchen",
        "situacao": "ok",
        "texto": "Gisele Caroline Bündchen (Brazilian Portuguese: [ʒiˈzɛli ˈbĩtʃẽ], German: [ˈbʏntçn̩]; born 20 July 1980) is a Brazilian supermodel and activist. Since 2001, she has been one of the highest-paid models in the world. Bündchen is widely regarded as one of the most influential supermodels of all time. She is credited with redefining the fashion industry’s beauty standards and ushering in a new era of \n[…]\nBesides her native Portuguese, Bündchen speaks English fluently.\n[…]\nBündchen aspired to be a volleyball player, but in 1993, her mother enrolled her and her sisters, Patrícia and Gabriela, in a modeling course to teach them confidence and better posture. After the course ended, the girls were rewarded by a trip to Curitiba, São Paulo and Rio de Janeiro, where Bündchen was discovered by Elite Model Management at a shopping center. She was placed second in a national contest, Elite Model Look, that was then known as Look of the Year.\n[…]\nBündchen released a cover of the Kinks \"All Day and All of the Night\" as a contribution to H&M's 2013 charity campaign. She contributed to H&M's 2014 charity campaign by teaming with French music producer and DJ Bob Sinclar to record a cover of Blondie's 1979 classic \"Heart of Glass\", on which Bündchen was credited as Gisele. The single charted in France, Germany, Spain, Austria and Belgium.\n[…]\nThe following year, the project supported was \"Florestas do futuro\" from SOS Mata Atlantica, a reforestation program for recovery of native species, which contributes to water conservation and biodiversity. A forest was named after her, the Gisele Bündchen Forest, where more than 25,000 seedlings of 100 different tree species were planted in her honor, which recovered more than 15 hectares of Atlantic Forest. In 2011, the donation went to the Socio-Environmental Institute.\n[…]\nGisele Bündchen at Fashion Model Directory\n[…]\nGisele Bündchen at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gisele_B%C3%BCndchen",
        "situacao": "ok",
        "texto": "Gisele Caroline Bündchen (Horizontina, 20 de julho de 1980) é uma supermodelo, empresária, filantropa e ativista ambiental brasileira. Desde 2004, esteve entre as modelos mais bem pagas do mundo e, em 2007, tornou-se a 16.ª mulher mais rica do setor de entretenimento. Em 2012, ficou em primeiro lugar na lista das modelos mais bem pagas da Forbes. Já em 2014, foi listada como a 89.ª mulher mais inf\n[…]\nNa adolescência Bündchen pretendia se tornar jogadora profissional de vôlei e cogitou entrar para o time da Sociedade de Ginástica Porto Alegre (SOGIPA). Por insistência da mãe, Bündchen se inscreveu em um curso de modelo com suas irmãs Patrícia e Gabriela em 1993. No ano seguinte Bündchen foi descoberta pela agência de modelos Elite em um shopping center em São Paulo, quando participava de uma excursão escolar.\n[…]\nA enciclopédia online de modelos da Vogue afirma: \"Com a aproximação do ano 2000, Gisele Bündchen foi a modelo mais sexy do mundo, abrindo uma nova categoria no imaginário popular: a bomba brasileira\".\n[…]\nA marca de lingerie HOPE aumentou o volume de negócios em 40% após contratar a Bündchen como sua representante. De acordo com o diário Grazia UK em janeiro de 2012, o seu selo de lingerie \"Gisele Bundchen Brazilian Intimates\" já provou ser vendido na América Latina, Portugal, Japão e Israel. Em fevereiro de 2012, o site Vogue.it afirmou que \"a modelo brasileira é a rainha Midas da moda. Tudo o que ela toca se transforma em ouro e as empresas que investiram nela colheram as recompensas\".\n[…]\nBündchen foi homenageada pelo cantor brasileiro Gabriel Guerra, juntamente com o músico Pedro Cezar, que escreveu a canção \"Tributo a Gisele\", que é o tema do site oficial da modelo gaúcha. A modelo brasileira foi formalmente convidada pela FIFA para entregar a taça à seleção vencedora do Mundial 2014 no Brasil.\n[…]\nGisele Bündchen no IMDb\n[…]\nGisele Bündchen no AskMen.com (em inglês)."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Chapéu de caubói",
      "descricao": "Chapéu de copa alta e aba larga associado aos vaqueiros do oeste americano"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nos Estados Unidos, o chapéu de caubói de copa bem alta ganhou um apelido exagerado: chapéu de quantos galões?",
    "resposta": "Dez",
    "distratores": [
      "Cinco",
      "Vinte",
      "Cem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ten-gallon_hat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ten-gallon_hat",
        "situacao": "ok",
        "texto": "The cowboy hat is a high-crowned, wide-brimmed hat best known as the defining piece of attire for the North American cowboy. Today it is worn by many people, and is particularly associated with ranch workers in the United States, Canada, Mexico, Central America and Brazil, station workers in Australia and New Zealand, with many country, regional Mexican and sertanejo music performers, and with par\n[…]\nIn some places, \"stampede strings\" or \"wind strings\" are also attached. Hats can be manufactured in virtually any color, but are most often seen in shades of beige, brown and black. Beginning in the 1940s, pastel colors were introduced, seen often on hats worn by movie cowboys and rodeo riders. \"Today's cowboy hat has remained basically unchanged in construction and design since the first one was created in 1865 by J. B. Stetson.\"\n[…]\nThe modern cowboy hat has remained basically unchanged in construction and underlying design since the Stetson creation.\n[…]\nThe cowboy hat quickly identified its wearer as someone associated with the West. \"Within a decade the name 'John B. Stetson' became synonymous with the word 'hat' in every corner and culture west of the Mississippi River.\" The shape of the hat's crown and brim were often modified by the wearer for fashion and to protect against weather by being softened in hot steam, shaped, and allowed to dry and cool.\n[…]\nThe first American law-enforcement agency to adopt Stetson's western hat as part of their uniform was the Texas Rangers. The Texas Legislature designated the cowboy hat as the official \"State Hat of Texas\" in 2015.\n[…]\nEarly print advertising by Stetson showed a cowboy giving his horse a drink of water from a hat. The Stetson company notes that a \"ten-gallon\" (38 liters) hat holds only 3⁄4 US gallon (2.8 L).\n[…]\n\"Welcome: Cowboy Hats in History\" Cowboy Hat History website"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Numeração inglesa de calçados",
      "descricao": "Sistema de tamanhos de sapato usado no Reino Unido, baseado na antiga unidade barleycorn"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A numeração inglesa de calçados se baseia no grão de cevada, antiga medida de comprimento. Quantos desses grãos formam uma polegada?",
    "resposta": "Três",
    "distratores": [
      "Dois",
      "Quatro",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Barleycorn_(unit)",
      "https://en.wikipedia.org/wiki/Shoe_size"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barleycorn_(unit)",
        "situacao": "ok",
        "texto": "The barleycorn is an English unit of length equal to 1⁄3 of an inch (i.e. about 8.47 mm). It is still used as the basis of shoe sizes in some English-speaking countries."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Shoe_size",
        "situacao": "ok",
        "texto": "A shoe size is a numerical indication of the fitting size of a shoe for a person. There are several different shoe-size systems used worldwide. While all use a number to indicate the length of the shoe, they differ in exactly what they measure, what unit of measurement they use, and where the size 0 (or 1) is positioned. Some systems also indicate the shoe width, sometimes also as a number, but in\n[…]\nchild shoe size ≈ 3 × foot length (in) − 93⁄4.\n[…]\nshoe size (Paris points) = 3⁄2 × last length (cm)\n[…]\nshoe size (Paris points) ≈ (3⁄2 × foot length (cm)) + 2\n[…]\nEUR shoe size\n[…]\nUK shoe size\n[…]\nDirect conversion between adult UK, Continental European and Mondopoint shoe size systems is derived as follows:\n[…]\nEUR shoe size\n[…]\nUK shoe size\n[…]\nEUR shoe size\n[…]\nUK shoe size\n[…]\nUK shoe size\n[…]\nEUR shoe size\n[…]\n{\\displaystyle {\\begin{aligned}L&={\\frac {20}{3}}\\times \\left({\\text{EUR shoe size}}-2\\right)={\\frac {25.4}{3}}\\times \\left({\\text{UK shoe size}}+23\\right)\\\\[3pt]{\\text{EUR shoe size}}&={1.27\\times \\left({\\text{UK shoe size}}+23\\right)}+2\\\\[3pt]{\\text{UK shoe size}}&={\\frac {{\\text{EUR shoe size}}-2}{1.27}}-23\\end{aligned}}}\n[…]\nUsing these formulas, the standard derives shoe size tables for adults and children, based on actual foot length measurement (insole) in millimetres. Typical last length ranges are also included (13 to 25 mm over foot length for adults, 8% greater than foot length plus 6 mm for children).\n[…]\nIt is recommended to include size marking in each of the four sizing systems on the shoe label and on the package. The principal system used for manufacturing the shoe needs to be placed first and emphasized with a boldface.\n[…]\nThe standard includes quick conversion tables for adult shoe size marking; they provide matching sizes for shoes marked in Mondopoint, European, and UK systems. When converted values require rounding, they are rounded to a larger shoe size rather than a smaller one, to increase comfort."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gr%C3%A3o_de_cevada_%28unidade%29",
        "situacao": "ok",
        "texto": "O grão de cevada é uma unidade inglesa de comprimento igual a 1⁄3 de polegada (aproximadamente 8,47mm). Ainda é usado como base para tamanhos de calçados em países de língua inglesa.\n[…]\nDe acordo com a Composição de Jardas e Poleiros de 1300, um dos estatutos de data incerta que esteve teoricamente em vigor até o Ato de Pesos e Medidas de 1824, \"3 grãos de cevadas secos e redondos\" serviriam de base para a polegada e, portanto, para as unidades maiores como pés, jardas, rods e, portanto, do acre, uma importante unidade de área. Porém, a ideia de três grãos de cevada compondo uma polegada é anterior a esse estatuto, aparecendo nas Leis Galesas de Hywel Dda do século X.\n[…]\nNa prática, vários atos de pesos e medidas dos reis ingleses foram padronizados com referência a alguma barra específica, de uma jarda de comprimento, de ferro, latão ou bronze mantida pelo rei ou pelo Exchequer. O grão de cevada era dado como 1⁄108 do seu comprimento.\n[…]\nComo mostram estudos modernos, o verdadeiro comprimento de um grão de cevada varia de 4–7 mm (0,16–0,28 in) a 12–15 mm (0,47–0,59 in) dependendo do cultivar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Quilate (unidade de peso)",
      "descricao": "Unidade de massa usada para pesar diamantes e outras pedras preciosas, igual a 200 miligramas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Usado para pesar diamantes e outras pedras preciosas, um quilate equivale a quantos miligramas?",
    "resposta": "Duzentos",
    "distratores": [
      "Cem",
      "Quinhentos",
      "Mil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Carat_(mass)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carat_(mass)",
        "situacao": "ok",
        "texto": "The carat (ct) is a unit of mass equal to 200 mg (0.00705 oz; 0.00643 ozt; 3.08647 gr), which is used for measuring gemstones and pearls.\n[…]\nThe ANSI X.12 EDI standard abbreviation for the carat is CD.\n[…]\nA metric carat of 200 milligrams is exactly one-fifth of a gram and had often been suggested in various countries, and was finally proposed by the International Committee of Weights and Measures, and unanimously accepted at the fourth sexennial General Conference of the Metric Convention held in Paris in October 1907. It was soon made compulsory by law in France, but uptake of the new carat was slower in England, where its use was allowed by the Weights and Measures (Metric System) Act of 1897.\n[…]\nIn the United Kingdom the original Board of Trade carat was exactly 3+1647⁄9691 grains (~3.170 grains = ~205 mg); in 1888, the Board of Trade carat was changed to exactly 3+17⁄101 grains (~3.168 grains = ~205 mg). Despite it being a non-metric unit, a number of metric countries have used this unit for its limited range of application.\n[…]\nThe Board of Trade carat was divisible into four diamond grains, but measurements were typically made in multiples of +1⁄64 carat.\n[…]\nThe solidus was also a Roman weight unit. There is literary evidence that the weight of 72 coins of the type called solidus was exactly 1 Roman pound, and that the weight of 1 solidus was 24 siliquae. The weight of a Roman pound is generally believed to have been 327.45 g or possibly up to 5 g less. Therefore, the metric equivalent of 1 siliqua was approximately 189 mg. The Greeks had a similar unit of the same value."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quilate",
        "situacao": "ok",
        "texto": "No que se refere a pedras preciosas, como o diamante, um quilate representa uma massa igual a duzentos miligramas. A unidade de massa foi adotada em 1907 na Quarta Conferência Geral de Pesos e Medidas. O quilate pode ser subdividido ainda em 100 pontos de 2 mg cada.\n[…]\nOuro 1 quilate = 1/24 — 4,1666% de ouro, também chamado de ouro 41.\n[…]\nA palavra quilate (em inglês: carat) provém do italiano carato, este originário do árabe qīrāṭ (قيراط), por sua vez derivado do grego antigo kerátion (κεράτιον), «semente de alfarroba», diminutivo de kéras (κέρας), «chifre». Era também uma unidade ponderal equivalente a 1/1728 (1/123) de uma libra (ver mina).\n[…]\nNo passado, cada país definia seu próprio valor para o quilate. A unidade era habitualmente empregada na pesagem de ouro e, a partir da década de 1570, passou a ser utilizada para mensurar o peso de diamantes.\n[…]\nNo Reino Unido, o quilate da Junta Comercial (Board of Trade carat) original equivalia a exatamente 3+1647⁄9691 grãos (~3,170 grãos = ~205 mg); em 1888, o valor oficial foi fixado em exatamente 3+17⁄101 grãos (~3,168 grãos = ~205 mg). Apesar de ser uma unidade não métrica, diversos países que já adotavam o sistema métrico chegaram a utilizá-la em razão de seu escopo específico de aplicação.\n[…]\nO solidus também funcionava como unidade ponderal no Império Romano. Registros documentais indicam que o peso de 72 moedas do tipo solidus equivalia a exatamente uma libra romana, e que o peso de um solidus correspondia a 24 siliquae (síliquas). Considera-se geralmente que a libra romana pesava cerca de 327,45 g (podendo oscilar até 5 g a menos). Consequentemente, o equivalente métrico de uma siliqua era de aproximadamente 189 mg.\n[…]\nOs gregos empregavam uma unidade de massa similar e de valor equivalente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Toque blanche",
      "descricao": "Chapéu alto, branco e pregueado, usado tradicionalmente por chefs de cozinha."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição, o chapéu alto e branco dos chefs de cozinha tinha uma prega para cada maneira de preparar ovos. Quantas eram?",
    "resposta": "Cem",
    "distratores": [
      "Doze",
      "Trinta",
      "Cinquenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Toque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toque",
        "situacao": "ok",
        "texto": "A toque ( or ) is a type of hat with a narrow brim or no brim at all.\n[…]\nThe word toque in Breton means 'hat'. The spelling with ⟨que⟩ is Middle Breton, and the Modern Breton spelling is tok. Old Breton spells the word toc. The word was borrowed into the French language for both the chef's uniform and the knit cap.\n[…]\nA toque blanche (French for 'white hat'), often shortened to toque, is a tall, round, pleated, starched white hat worn by chefs.\n[…]\nThe toque most likely originated as the result of the gradual evolution of head coverings worn by cooks throughout the centuries. Their roots are sometimes traced to the casque à meche (stocking cap) worn by 18th-century French chefs. The colour of the casque à meche denoted the rank of the wearer. Boucher, the personal chef of the French statesman Talleyrand, was the first to insist on white toques for sanitary reasons.\n[…]\nThe modern toque is popularly believed to have originated with the French chef Marie-Antoine Carême (1784–1833), who stiffened the casque à meche with cardboard.\n[…]\nA toque, or sometimes touge, was the traditional headgear of various French magistrates.\n[…]\nPerhaps most importantly, the Canadian Oxford chose toque, and as the Canadian Press Stylebook bows to the Canadian Oxford as the final word in spelling, most Canadian publications have followed suit.\n[…]\nSuch hats are known in other English-speaking countries by a variety of names, including beanie, watch cap or stocking cap; the terms toque and tuque are unique to Canada and northern areas of the United States close to the Canada–United States border."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Quilate (pureza do ouro)",
      "descricao": "Medida da proporção de ouro puro numa liga, em que vinte e quatro quilates correspondem ao ouro puro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Uma joia de ouro dezoito quilates tem que proporção de ouro puro em sua liga?",
    "resposta": "Três quartos",
    "distratores": [
      "Metade",
      "Dois terços",
      "Nove décimos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fineness"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fineness",
        "situacao": "ok",
        "texto": "The fineness of a precious metal object (coin, bar, jewelry, etc.) represents the weight of fine metal therein, in proportion to the total weight which includes alloying base metals and any impurities. Alloy metals are added to increase the hardness and durability of coins and jewelry, alter colors, decrease the cost per weight, or avoid the cost of high-purity refinement.\n[…]\n958—23 karat\n[…]\n834—20 karat\n[…]\n625—15 karat\n[…]\n500—12 karat\n[…]\n042–1 karat: Legal minimum for gold in the US since the revision of the FTC Guides of August 2018.\n[…]\nThe carat (UK spelling, symbol c or Ct) or karat (US spelling, symbol k or Kt) is a fractional measure of purity for gold alloys, in parts fine per 24 parts whole. The carat system is a standard adopted by US federal law.\n[…]\nKarat is a variant of carat. First attested in English in the mid-15th century, the word carat came from Middle French carat, in turn derived either from Italian carato or Medieval Latin carratus. These were borrowed into Medieval Europe from the Arabic qīrāṭ meaning \"fruit of the carob tree\", also \"weight of 5 grains\", (قيراط) and was a unit of mass though it was probably not used to measure gold in classical times.\n[…]\nIn 309 AD, Roman Emperor Constantine I began to mint a new gold coin, the solidus, that was 1⁄72 of a libra (Roman pound) of gold equal to a mass of 24 siliquae, where each siliqua (or carat) was 1⁄1728 of a libra. This is believed to be the origin of the value of the karat.\n[…]\nA piece of alloy metal containing a precious metal may also have the weight of its precious component referred to as its \"fine weight\". For example, 1 troy ounce of 18 karat gold (which is 75% gold) may be said to have a fine weight of 0.75 troy ounces.\n[…]\nLive gold price per gram by karat – Real-time melt value calculations for 10K through 24K gold using current spot prices"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Chapéu-coco",
      "descricao": "Chapéu de feltro duro com copa arredondada, criado em Londres em 1849."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O chapéu-coco foi encomendado a chapeleiros de Londres, em 1849, para proteger contra galhos baixos a cabeça de quem?",
    "resposta": "Guarda-caças a cavalo",
    "distratores": [
      "Cocheiros de carruagem",
      "Mineiros de carvão",
      "Policiais de Londres"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bowler_hat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bowler_hat",
        "situacao": "ok",
        "texto": "The bowler hat, also known as a Coke hat, billycock, bob hat, or derby (United States), is a hard felt hat with a rounded crown, originally created by the London hat-makers Thomas and William Bowler in 1849 and commissioned by Lock & Co. Hatters of St James's Street, London. It has traditionally been worn with semi-formal and informal attire.\n[…]\nThe archetypal bowler hat was designed in 1849 by the London hat-makers Thomas and William Bowler to fulfill an order placed by the company of hatters James Lock & Co. of St James's, which had been commissioned by a customer to design a close-fitting, low-crowned hat to protect gamekeepers from low-hanging branches while on horseback. The keepers had previously worn top hats, which were knocked off easily and damaged.\n[…]\nDoctor King Schultz and \"Butch\" Pooch wear wide Derby-variant bowler hats in Django Unchained.\n[…]\nJosé Rizal, a Filipino patriot and national hero, wore a bowler hat before his execution by firing squad in 1896.\n[…]\nThe Plug Uglies, a nineteenth-century American street gang, wore bowler hats stuffed with cloth or wool to protect their heads while fighting.\n[…]\nJohn Bonham, drummer for Led Zeppelin, often wore a bowler hat.\n[…]\nEdward Coke, for whom the first bowler hat was designed.\n[…]\nLou Costello of Abbott and Costello often wore a bowler hat.\n[…]\nLaurel and Hardy are known for wearing bowler hats.\n[…]\nCurly Howard and Shemp Howard of The Three Stooges frequently wore bowler hats.\n[…]\nBoy George often wore a bowler hat during the 1980s.\n[…]\nBig Bully Busick, professional wrestler, who wore a bowler hat as part of his 1920s bully gimmick.\n[…]\nRobinson, Fred Miller (1993). The Man in the Bowler Hat: His History and Iconography (First hardcover ed.). Chapel Hill, NC and London: The University of North Carolina Press. ISBN 9780807820735. OCLC 26855812.\n[…]\nMedia related to Bowler hats at Wikimedia Commons"
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
    "indice": 34,
    "ancora": {
      "nome": "Velcro",
      "descricao": "Sistema de fecho de gancho e argola inventado pelo engenheiro suíço George de Mestral."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O engenheiro suíço George de Mestral teve a ideia do velcro ao voltar de um passeio e examinar o que grudara no pelo de seu cachorro. O quê?",
    "resposta": "Carrapichos",
    "distratores": [
      "Pulgas",
      "Teias de aranha",
      "Lama seca"
    ],
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
    "indice": 35,
    "ancora": {
      "nome": "Kilt",
      "descricao": "Peça de vestuário tradicional escocesa, semelhante a uma saia até o joelho, de lã em padrão tartan e com pregas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Depois do fracasso de qual revolta, em 1746, a Grã-Bretanha proibiu o uso do kilt e do tartan nas Terras Altas da Escócia?",
    "resposta": "Levante jacobita",
    "distratores": [
      "Guerra das Rosas",
      "Guerra Civil Inglesa",
      "Revolta irlandesa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dress_Act_1746"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dress_Act_1746",
        "situacao": "ok",
        "texto": "The Dress Act 1746, also known as the Disclothing Act, was part of the Act of Proscription  (19 Geo. 2. c. 39) which came into force on 1 August 1746 and made it illegal to wear \"the Highland Dress\" — including the kilt — by men and boys in Scotland north of the Highland line running from Perth in the east to Dumbarton in the west. The rest of the Act of Proscription reiterated and reinforced the \n[…]\nThe Jacobite risings between 1689 and 1746 found their most effective support amongst the Scottish clans, and this act was part of a series of measures attempting to bring the clans under government control. An exemption allowed the kilt to be worn in the army's Highland regiments along with its veterans who had served in the military. The landed gentry were also exempt, being exempt from the entire Act of Proscription.\n[…]\nThat from and after the first day of August, One thousand, seven hundred and forty-seven, no man or boy within that part of Britain called Scotland, other than such as shall be employed as Officers and Soldiers in His Majesty's Forces, shall, on any pretext whatever, wear or put on the clothes commonly called Highland clothes (that is to say) the Plaid, Philabeg, or little Kilt, Trowse, Shoulder-belts, or any part whatever of what peculiarly belongs to the Highland Garb; and that no tartan or party-coloured plaid of stuff shall be used for Great Coats or upper coats, and if any such person shall presume after the said first day of August, to wear or put on the aforesaid garment or any part of them, every such person so offending ...\n[…]\nThis is declaring to every Man, young and old, simple and gentle, that they may after this put on and wear the Truis, the Little Kilt, the Coat, and the Striped Hose, as also the Belted Plaid, without fear of the Law of the Realm or the spite of the enemies.\n[…]\nJacobite rising of 1745"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Aliança de casamento",
      "descricao": "Anel, em geral de metal precioso, trocado pelos noivos como símbolo do casamento."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo uma antiga tradição, a aliança vai no anelar esquerdo porque uma veia ligaria esse dedo diretamente a qual órgão?",
    "resposta": "Coração",
    "distratores": [
      "Cérebro",
      "Fígado",
      "Pulmões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wedding_ring"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wedding_ring",
        "situacao": "ok",
        "texto": "A wedding ring, also called a wedding band in the United States, is a finger ring that indicates that its wearer is married. It is usually forged from metal, traditionally gold or another precious metal. Rings were used in ancient Rome during marriage.\n[…]\nSome customs include the wedding ring as the final of a series of gifts, which also may include the engagement ring, traditionally given as a betrothal present. This custom was practiced in ancient Rome.\n[…]\nAs such, members of some Methodist Churches, such as the Allegheny Wesleyan Methodist Connection and Bible Methodist Connection of Churches, do not wear wedding rings. However, other Methodist Churches contain the exchange of wedding rings within their services for Holy Matrimony. In the wedding liturgy for the Free Methodist Church, for example, the groom and bride say the following when exchanging rings: \"This ring I give you in token and pledge of our constant faith and steadfast love\".\n[…]\nAmong Quaker Christians, especially Conservative Friends and Holiness Friends, the wedding ring is traditionally not worn as a part of their testimony of simplicity. Among Quaker groups that do wear wedding rings, the following wording is used by the bride and groom as they are exchanged: \"With this ring, I thee wed.\" The Friends General Conference, for example, teaches that \"Although wedding rings are not necessary in a Quaker wedding, the couple may exchange them if they wish.\n[…]\nJudaism: \"You are consecrated to me with this ring according to the law of Moses and Israel.\" In Orthodox Judaism, only the groom declares this in Hebrew; but in Reform Judaism, both the bride and groom declare it. Many Orthodox Jewish men do not wear wedding rings.\n[…]\nMedia related to Wedding rings at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alian%C3%A7a_%28anel%29",
        "situacao": "ok",
        "texto": "Aliança é um anel usado para simbolizar um compromisso e a união afetiva entre duas pessoas que se amam total e verdadeiramente, simbolo do romance. Normalmente, é usada para indicar que o utilizador é casado.\n[…]\nAcredita-se geralmente que os primeiros exemplos de alianças de casamento foram encontrados no antigo Egito. Relíquias que datam de 6.000 anos atrás, incluindo pergaminhos de papiro, são evidências da troca de anéis trançados de cânhamo entre os cônjuges. O antigo Egito considerava o círculo como um símbolo da eternidade, e o anel servia para significar o amor perpétuo dos cônjuges.\n[…]\nEsta era também a origem do costume de usar a aliança no dedo anelar da mão esquerda, porque os antigos egípcios acreditavam que este dedo encerrava uma veia especial que estava diretamente ligada ao coração, denominada em latim a \"Vena amoris\".\n[…]\nOs anéis de casamento são usados pelos noivos na cerimônia de casamento religioso ou civil, por diversas culturas. Costuma-se fazer a troca dos anéis no momento final desta cerimônia. Os noivos colocam as alianças no dedo anelar da mão esquerda um do outro, simbolizando assim a união matrimonial/casamento.\n[…]\nAlguns casais, após completar certo tempo de namoro, optam por trocar alianças de prata, conhecidas como alianças de compromisso ou anéis de compromisso.\n[…]\nA aliança do homem tem o nome da mulher e a data do início do namoro gravada e vice-versa. Alguns preferem gravar os dois nomes em ambas, seguidos da data.\n[…]\nAlianças de compromisso são usadas no dedo anelar da mão direita e, na ocasião do noivado, substituídas pelas alianças de noivado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Óculos aviador",
      "descricao": "Modelo de óculos escuros de lentes em forma de gota e armação metálica fina, lançado pela Ray-Ban nos anos trinta."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Os óculos escuros Ray-Ban Aviador foram criados nos anos trinta, nos Estados Unidos, para proteger os olhos de quem?",
    "resposta": "Pilotos militares",
    "distratores": [
      "Esquiadores",
      "Pilotos de corrida",
      "Marinheiros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aviator_sunglasses",
      "https://en.wikipedia.org/wiki/Ray-Ban"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aviator_sunglasses",
        "situacao": "ok",
        "texto": "Aviator sunglasses are a style of sunglasses that was developed by a group of American firms. The original Bausch & Lomb design is now commercially marketed as Ray-Ban Aviators, although other manufacturers also produce aviator-style sunglasses.\n[…]\nAfter World War II AN6531 Comfort Cable aviator sunglasses were available for civilians on the surplus market.\n[…]\nThe first advertisements for Ray-Ban Aviators stated they would provide \"real scientific glare protection\" and were sold as sporting equipment. At this time, they had not yet taken on their name of \"Aviators;\"  the Second World War had not yet begun. During the 1950s, aviator sunglasses were a part of the cultural style, mimicking the military style.\n[…]\nmilitary in 1959 to pilots shortly after the HGU4/P was officially recommended by military optometrists in November 1958. The HGU-4/P design frame is also issued to military personnel that require various corrective clear or other types of lenses and allows corrected vision through the full field of vision. Besides the military, Type HGU-4/P aviator sunglasses were also issued to and used by NASA astronauts.\n[…]\nBy 1982, Randolph Engineering had become the prime contractor for military-style Type HGU-4/P aviation flight glasses for the United States Department of Defense. They are commercially known as \"Randolph Aviator\" sunglasses.\n[…]\nHGU-4/P aviation flight glasses are still built to the guidelines of the MIL-S-25948 military specification, a document detailing the manufacturing specifications. One of the many specifications is that the neutral grey lenses used in Type HGU-4/P aviator sunglasses must transmit between 12% and 18% of incoming visible daylight while providing \"true\" color and contrast distribution.\n[…]\nAviator hat"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ray-Ban",
        "situacao": "ok",
        "texto": "Ray-Ban is an Italian-owned brand of luxury sunglasses and standard glasses created in 1936 by American-Canadian company Bausch & Lomb. The brand is most notable for its Wayfarer and Aviator lines of sunglasses. In 1999, Bausch & Lomb sold the brand to Italian eyewear conglomerate Luxottica Group for a reported $640 million.\n[…]\nThe sunglasses were redesigned with a metal frame the following year and patented as the Ray-Ban Aviator. According to the BBC, the glasses used \"Kalichrome lenses designed to sharpen details and minimise haze by filtering out blue light, making them ideal for misty conditions.\"\n[…]\nRay-Ban's most popular sunglasses are the Wayfarer, Erika, and Aviator models. During the 1950s, Ray-Ban released the Echelon (Caravan), which had a squarer frame. In 1965, the Olympian I and II were introduced; they became popular when Peter Fonda wore them in the 1969 film Easy Rider. The company has also produced special edition lines, such as The General in 1987, bearing similarity to the original aviators worn by General Douglas MacArthur during the Second World War.\n[…]\nIn the 1980s the Ray-Ban Clubmaster was added to the model line. The Clubmaster has a browline frame and went on to become the third best selling sunglasses style of the 1980s, behind the Wayfarer and Aviator.\n[…]\nFor one example, in 2016, law enforcement in Thailand seized an alleged import of hundreds of thousands of counterfeit sunglasses including Ray-Bans and Oakleys (also owned by Luxottica Group). Counterfeiters were said to have applied tags and stickers to the fakes to deceive consumers about their authenticity."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Chapéu-panamá",
      "descricao": "Chapéu de palha trançada com fibras da palmeira toquilla, fabricado tradicionalmente no Equador."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Apesar do nome, em qual país é tradicionalmente fabricado o chapéu-panamá, trançado com a palha de uma palmeira local?",
    "resposta": "Equador",
    "distratores": [
      "Colômbia",
      "Peru",
      "Cuba"
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
    "indice": 39,
    "ancora": {
      "nome": "Jeans",
      "descricao": "Calça de tecido de algodão resistente, geralmente azul, popularizada pela Levi Strauss & Co."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "As primeiras calças de rebites da Levi Strauss eram vendidas a trabalhadores da corrida do ouro. Em qual cidade americana ficava a empresa?",
    "resposta": "São Francisco",
    "distratores": [
      "Los Angeles",
      "Sacramento",
      "Denver"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Levi_Strauss_%26_Co.",
      "https://en.wikipedia.org/wiki/Levi_Strauss"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Levi_Strauss_%26_Co.",
        "situacao": "ok",
        "texto": "Levi Strauss & Co. is an American clothing company known worldwide for its Levi's brand of denim jeans. It was founded in May 1853 when German-Jewish immigrant Levi Strauss moved from New York City, New York, to San Francisco, California, to open a West Coast branch of his brothers' New York dry goods business. The corporation is registered in Delaware and its headquarters is located in Levi's Pla\n[…]\nIn 2002, the company closed its Valencia Street plant in San Francisco, which opened in 1906. By the end of 2003, the closure of Levi's last U.S. factory in San Antonio ended 150 years of jeans made in the United States. Production of a few higher-end, more expensive styles of jeans resumed in the U.S. several years later. Levi Strauss closed several factories worldwide and took control of GWG's operations.\n[…]\nOn May 8, 2013, the NFL's San Francisco 49ers announced that Levi Strauss & Co. had purchased the naming rights to its new stadium in Santa Clara, California. The naming rights deal called for Levi's to pay $220.3 million to the city of Santa Clara and the 49ers over 20 years, with an option to extend the agreement for another five years for around $75 million.\n[…]\nLevi Strauss & Co. is a worldwide corporation organized into three geographic divisions: Levi Strauss Americas (LSA), which is headquartered in San Francisco; Levi Strauss Europe (LSE), which is based in Brussels; and Levi Strauss Asia Pacific, Middle East and Africa.\n[…]\nIn June 2026, during the 2026 FIFA World Cup, FIFA required non-sponsor corporate branding to be removed from host stadiums. As a result, Levi's Stadium was temporarily renamed \"San Francisco Bay Area Stadium\" and its Levi's branding was covered. Levi Strauss & Co. responded by incorporating the obscured logo into a social media marketing campaign, using the situation as a branding opportunity.\n[…]\nBusiness data for Levi Strauss & Co.:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Levi_Strauss",
        "situacao": "ok",
        "texto": "Levi Strauss ( LEE-vy STROWSS; born Löb Strauß, German: [løːp ˈʃtʁaʊs]; February 26, 1829 – September 26, 1902) was a German-born American businessman who founded the first company to manufacture blue jeans. His firm of Levi Strauss & Co. (Levi's) began in 1853 in San Francisco, California.\n[…]\nLevi Strauss was never married, and died on September 26, 1902 in San Francisco. His estate was worth about $30 million (equivalent to $877 million in 2024). Levi's nephew Sigmund Stern's only child, Elise Fanny Stern, married Walter A. Haas, the son of Abraham Haas, whose descendants are the current owners of Levi Strauss & Co.\n[…]\nIn 1960, the anthology series television series Death Valley Days broadcast \"The Million Dollar Pants\", in which Strauss travels to San Francisco and establishes his business. The episode featured a likely fictional romantic interest, Yvonne Benet. In addition, the episode portrayed a likely fictional character, Patrick Mahoney, that was substituted for Jacob W. Davis.\n[…]\nLevi Strauss, a member of the Reform branch of Judaism, helped establish Congregation Emanu-El, the first Jewish synagogue in the city of San Francisco. He also gave money to several charities, including special funds for orphans. The Levi Strauss Foundation started with an 1897 donation to the University of California, Berkeley, that provided the funds for 28 scholarships.\n[…]\nThe Levi Strauss museum in Buttenheim, Germany is located in the 1687 house where Strauss was born. There is also a visitors center at Levi Strauss & Co. headquarters in San Francisco, which features historical exhibits.\n[…]\nBiography of Levi Strauss from the Official Levi Strauss Site.\n[…]\nLevi Strauss Museum in Buttenheim, Germany (in German)\n[…]\nLevi Strauss at FMD"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Levi_Strauss_%26_Co.",
        "situacao": "ok",
        "texto": "Levi Strauss & Co., também conhecida como (LS&CO), é uma empresa norte-americana fundada em 1853 pelo industrial alemão Levi Strauss, é detentora da marca Levi's de jeans de renome mundial.\n[…]\nLevi Strauss & Co. é uma empresa multinacional organizada em três divisões geográficas: Levi Strauss Americas (LSA), com sede em São Francisco; Levi Strauss Europe, com sede no Meio Oeste e na Africa (LSEMA), com sede em  Bruxelas; também possuem escritórios na Ásia (APD), sediada em Singapura. A companhia emprega aproximadamente 10.000 pessoas no mundo, e produz desde calças jeans, camisas, boné, cintos a blusas e roupas sociais.\n[…]\nLevi Strauss Signature (em inglês)\n[…]\nLevi's Mobile Phone official site (em inglês)\n[…]\nLevi's Project 501 Design Challenge (em inglês)[ligação inativa]\n[…]\nLevi's Sponsorship of Project Runway (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Coco Chanel",
      "descricao": "Estilista francesa Gabrielle Chanel, fundadora da grife Chanel"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Depois da morte da mãe, em que lugar a menina Gabrielle Chanel passou a adolescência e aprendeu a costurar?",
    "resposta": "Num orfanato de freiras",
    "distratores": [
      "Num ateliê parisiense",
      "Numa fábrica têxtil",
      "Num internato inglês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coco_Chanel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coco_Chanel",
        "situacao": "ok",
        "texto": "Gabrielle Bonheur \"Coco\" Chanel ( shə-NEL; French: [ɡabʁijɛl bɔnœʁ kɔko ʃanɛl] ; 19 August 1883 – 10 January 1971) was a French fashion designer and businesswoman. The founder and namesake of the Chanel brand, she was credited in the post–World War I era with popularising a sporty, casual chic as the feminine standard of style. She is the only fashion designer listed on Time magazine's list of the\n[…]\nIt was at this time that Gabrielle acquired the name \"Coco\" when she spent her nights singing in the cabaret, often the song, \"Who Has Seen Coco?\" She often liked to say the nickname was given to her by her father. Others believe \"Coco\" came from Ko Ko Ri Ko, and Qui qu'a vu Coco, or it was an allusion to the French word for kept woman, cocotte. As an entertainer, Chanel radiated a juvenile allure that tantalised the military habitués of the cabaret.\n[…]\nThen I really started hunting through all of the archives, in the United States, in London, in Berlin, and in Rome and I came across not one, but 20, 30, 40 absolutely solid archival materials on Chanel and her lover, Hans Günther von Dincklage, who was a professional Abwehr spy.Vaughan also addressed the discomfort many felt with the revelations provided in his book: A lot of people in this world don't want the iconic figure of Gabrielle Coco Chanel, one of France's great cultural idols, destroyed.\n[…]\nSimon, Linda (2011). Coco Chanel. Reaktion Books. ISBN 978-1-86189-859-3. (Reviewed in The Montreal Review)\n[…]\nSmith, Nancy (2017). Churchill on the Riviera: Winston Churchill, Wendy Reves, and the Villa La Pausa Built by Coco Chanel. Biblio Publishing. ISBN 978-1622493661.\n[…]\nOfficial Site of Chanel\n[…]\nCoco Chanel at IMDb\n[…]\nGabrielle Chanel at FMD\n[…]\nCoco Chanel in the Art Deco Era\n[…]\nElegance and Espionage: The Hidden Life of Coco Chanel — by historian Tamara Eidelman on YouTube\n[…]\nLisa Chaney on Coco Chanel on YouTube\n[…]\nCoco Chanel 1969 interview on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coco_Chanel",
        "situacao": "ok",
        "texto": "Gabrielle Bonheur \"Coco\" Chanel ([ʃəˈnɛl] shə-NEL, francês: [ɡabʁijɛl bɔnœʁ kɔko ʃanɛl] (); Saumur, 19 de agosto de 1883 – Paris, 10 de janeiro de 1971) foi uma estilista e empresária francesa. Fundadora da marca Chanel, ela foi creditada na era pós-Primeira Guerra Mundial por popularizar um chique esportivo e casual como o padrão feminino de estilo.\n[…]\nQuando Gabrielle tinha 11 anos, Jeanne morreu aos 32 anos. As crianças não frequentavam a escola. Seu pai enviou seus dois filhos para trabalhar como agricultores e enviou suas três filhas para o convento de Aubazine, que administrava um orfanato. Sua ordem religiosa, a Congregação do Sagrado Coração de Maria, foi \"fundada para cuidar dos pobres e rejeitados, inclusive administrando lares para meninas abandonadas e órfãs\". Era uma vida rígida e frugal, que exigia uma disciplina rígida.\n[…]\nA colocação no orfanato pode ter contribuído para a futura carreira de Chanel, pois foi onde ela aprendeu a costurar. Aos dezoito anos, Chanel, velha demais para permanecer em Aubazine, foi morar em uma pensão para moças católicas na cidade de Moulins.\n[…]\nEm 1927, o duque de Westminster deu a Chanel um terreno que havia comprado em Roquebrune-Cap-Martin, na Riviera Francesa. Chanel construiu uma villa aqui, que ela chamou de La Pausa, contratando o arquiteto Robert Streitz. O conceito de Streitz para a escada e o pátio continha elementos de design inspirados em Aubazine, o orfanato onde Chanel passou sua juventude. Quando perguntada por que ela não se casou com o duque de Westminster, ela teria dito: \"Houve várias duquesas de Westminster.\n[…]\nA influência da Chanel tornou o banho de sol na moda.\n[…]\nEm 2016, o perfil de Coco Chanel foi incluído na primeira edição do livro Histórias de Ninar para Garotas Rebeldes: Cem fábulas sobre mulheres extraordinárias, como uma das cem mulheres mais influentes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Karl Lagerfeld",
      "descricao": "Estilista alemão (1933–2019), diretor criativo da Chanel e da Fendi"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Karl Lagerfeld, que comandou a criação da Chanel por mais de trinta anos, nasceu em qual cidade alemã?",
    "resposta": "Hamburgo",
    "distratores": [
      "Berlim",
      "Munique",
      "Colônia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Karl_Lagerfeld"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karl_Lagerfeld",
        "situacao": "ok",
        "texto": "Karl Otto Lagerfeld (10 September 1933 – 19 February 2019) was a German fashion designer, photographer, and creative director.\n[…]\nKarl Otto Lagerfeld was born in Hamburg on 10 September 1933 to Elisabeth (née Bahlmann) and Otto Lagerfeld. His father, coming from a family of wealthy wine merchants, was a prosperous businessman and polyglot, speaking nine languages. He owned an import company (Lagerfeld & Co.) specialising in  evaporated milk, leading him to work with the American dairy company Carnation. During his travels, his father was present during the great 1906 San Francisco earthquake, escaping unharmed.\n[…]\nThe exhibition \"Lagerfeld: The Chanel Shows\" of Simon Procter was shown in London, Paris, Dubai, Boca Raton and Miami.\n[…]\nLagerfeld lived in numerous homes over the years: an apartment in the Rue de l'Université in Paris, decorated in the Art Deco style (1970s); the 18th-century Chateau de Penhoët in Brittany, decorated in the Rococo style (1970s to 2000); an apartment in Monte Carlo decorated until 2000 in 1980s Memphis style (from the early 1980s); the Villa Jako in Blankenese in Hamburg, decorated in the Art Deco style (mid-1990s to 2000); the Villa La Vigie in France (the 1990s to 2000), a 17th-century mansion (hôtel particulier) in the Rue de l'Université in Paris, decorated in the Rococo and other styles (1980s to the 2000s); an apartment in Manhattan, although he never moved into or decorated it (2006 to 2012); the summer villa El Horria in Biarritz, decorated in the modern style (1990s–2006); and a house dating from the 1840s in Vermont (from the 2000s)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Karl_Lagerfeld",
        "situacao": "ok",
        "texto": "Karl Lagerfeld (nascido Karl Otto Lagerfeld; Hamburgo, 10 de setembro de 1933 — Neuilly-sur-Seine, 19 de fevereiro de 2019) foi um designer de moda alemão. Era o diretor criativo da Chanel, bem como da casa de moda italiana Fendi. Dirigiu também a criação na sua própria casa de moda homônima. Ao longo das décadas, Lagerfeld colaborou em diversos projetos de moda e arte.\n[…]\nLagerfeld nasceu em Hamburgo. Alegou que nasceu em 1938 de Elisabeth (nascida Bahlman) e Otto Lagerfeld. Era conhecido por insistir que ninguém sabe sua data de nascimento real; entrevistado na televisão francesa em fevereiro de 2009, Lagerfeld disse que ele \"nasceu nem em 1933 e não em 1938.\" Em abril de 2013 finalmente declarou que nasceu em 1935. O anúncio do nascimento, contudo, foi publicado pelos seus pais em 1933, e a ​​registro de batismo em Hamburgo também a lista como nascido em 1933.\n[…]\nEm 2008 criou um ursinho de pelúcia em sua semelhança produzida pela Steiff em uma edição de 2 500 unidades que foi vendido por 1 500 dólares. E foi imortalizado em muitas formas, que incluem broches, camisetas, bonecos e muito mais. Em 2009, Tra Tutti começou a vender Karl Lagermouse e Karl Lagerfelt, que são mini-Lagerfelds nas formas de ratos e fantoches de dedo, respectivamente.\n[…]\nLagerfeld em 2009 juntou-se aos críticos da supermodelo Heidi Klum. Após designer alemão Wolfgang Joop chamar Klum, que havia posado nua na capa da edição alemã da revista GQ, como sendo \"não modelo de passarela. Ela é simplesmente muito pesada e tem muito grande um busto.\" Lagerfeld respondeu que nem ele nem Claudia Schiffer sabiam, Klum como nunca trabalhou em Paris e é insignificante no mundo da alta moda, sendo \"mais bling bling e glamourosa do que a moda atual\".\n[…]\nJean-Claude Houdret, o que levou a um livro chamado The Karl Lagerfeld Diet, que ele promoveu no Larry King Live e outros programas de TV.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Relógio Santos, da Cartier",
      "descricao": "Relógio de pulso criado por Louis Cartier em 1904 para o aviador brasileiro Alberto Santos Dumont."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1904, qual joalheiro parisiense criou um relógio de pulso para que seu amigo Santos Dumont pudesse ver as horas enquanto pilotava?",
    "resposta": "Louis Cartier",
    "distratores": [
      "Hans Wilsdorf",
      "Frédéric Boucheron",
      "Alfred Van Cleef"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Louis_Cartier",
      "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Cartier",
        "situacao": "ok",
        "texto": "Louis Joseph Cartier ( KAR-tee-ay, French: [lwi ʒozɛf kaʁtje]; June 6, 1875 – July 23, 1942) was a French businessman, jeweler and heir to the Cartier jewelry house. From 1909, he and his brother Pierre were primarily based in New York City. In 1917, they acquired the Cartier Building, formerly owned by Morton Freeman Plant, which became the headquarters of Cartier in North America. He was a resid\n[…]\nCartier’s collaboration with Charles Jacqueau, who drew on Islamic, Indian, Egyptian, Greek, and Chinese art, further enriched the brand’s style by adding diverse cultural motifs and global artistic influences.\n[…]\nLouis Joseph Cartier died July 23, 1942, aged 67 in Manhattan, New York, U.S.\n[…]\nFrancesca Cartier Brickell; The Cartiers: The Untold Story of the Family Behind de Jewelry Empire; 2019"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos-Dumont (self-stylised as Alberto Santos=Dumont; 20 July 1873 – 23 July 1932) was a Brazilian aeronaut, sportsman, inventor, and one of the few people to have contributed significantly to the early development of both lighter-than-air and heavier-than-air aircraft. The heir of a wealthy family of coffee producers, he dedicated himself to aeronautical study and experimentation in Pari\n[…]\nOn 25 July 1909, Louis Blériot crossed the English Channel, becoming a hero in France. In a letter, Santos-Dumont congratulated Blériot, his friend, with the following words: \"This transformation of geography is a victory of air navigation over sea navigation. One day, perhaps, thanks to you, the airplane will cross the Atlantic\". Blériot then replied, \"I have done nothing but follow and imitate you. Your name to the aviators is a flag.\n[…]\nIn 1904, renowned French jeweller Louis Cartier debuted the Santos-Dumont, a watch designed for the aviator himself. It was the first wristwatch the Maison made, and the collection retails to this day.\n[…]\nSantos-Dumont's friend Louis Cartier created a wristwatch for him in 1904. Up to that point, only women had wristwatches as they were considered a jewelry or fashion item only suitable for women; men only carried pocket watches. But Santos-Dumont needed both hands for flying and so Cartier created a wristwatch with a leather strap for him and called it the Cartier-Santos-Dumont.\n[…]\nAfter his 1906 exploits, Santos-Dumont's picture was everywhere wearing the watch, and soon after, wristwatches became popular among men, possibly due to the publicity involving  the watch Cartier made for his friend.\n[…]\nOver a century later, Cartier produced a series of watches named after him, celebrating the partnership between him and the brand. As a publicity piece, an award-winning film was made by France's Quad Productions entitled \"L'Odyssée de Cartier\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Louis_Cartier",
        "situacao": "ok",
        "texto": "Louis-François Cartier (Paris, 1875 – Paris, 23 de julho de 1942) foi um joalheiro e relojoeiro que iniciou a Maison Cartier em 1847, quando herdou de seu mestre Adolphe Picard o ateliê de jóias de rua Montergueilem Paris, e patenteia sua própria marca, o famoso coração entre suas iniciais L e C num losango, em Paris.\n[…]\nEm 1904 Louis Cartier cria o primeiro relógio de pulso masculino, a pedido de seu amigo, o aviador brasileiro Santos Dumont. Porém, só em 1911 esse relógio começa a ser comercializado e hoje, mais de 90 anos depois, a coleção de relógios Santos Dumont conserva todos os seus parafusos.\n[…]\n(em francês) La Maison Cartier > A travers le temps > 1847 -1912 > 1904: FOTOS de Santos Dumont e história.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Vestido de noiva branco",
      "descricao": "Tradição ocidental de a noiva se casar de branco, difundida a partir do casamento da rainha Vitória em 1840."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1840, qual monarca ajudou a popularizar o vestido de noiva branco ao se casar com um vestido de cetim branco e renda?",
    "resposta": "Rainha Vitória",
    "distratores": [
      "Maria Antonieta",
      "Imperatriz Leopoldina",
      "Maria segunda de Portugal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wedding_dress_of_Queen_Victoria",
      "https://en.wikipedia.org/wiki/White_wedding"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wedding_dress_of_Queen_Victoria",
        "situacao": "ok",
        "texto": "Queen Victoria of the United Kingdom married Prince Albert of Saxe-Coburg and Gotha on 10 February 1840 in the Chapel Royal, St. James's Palace. She wore a white wedding dress made from heavy silk satin, which made her look more like a bride and less like a queen. The English-made Honiton lace used for her wedding dress proved an important boost to Devon lace-making. Queen Victoria is erroneously \n[…]\nPerhaps because of the extensive press coverage of the wedding, she may be considered to have popularised the white wedding gown, but other royals and other women of her time were already wearing white.\n[…]\nShe designed the dresses of the bridesmaids, which were also white. \"Onlookers commenting on the wedding and Victoria's dress,\" Worsley says, said that Victoria and her party looked like \"village girls, ... rather than a monarch and her ladies in waiting.\" Others saw the simplicity of the wedding dress similarly, though less negatively.\n[…]\nWomen's court dress — including what debutantes wore when presented to the monarch — was traditionally white, and by 1840 white dresses were gaining popularity in the middle classes as well, especially in cotton. According to Kate Strasdin, \"white and silver had become firmly associated with wedding attire for those who could afford it\" by the early 18th century, and by the mid 19th century they were increasingly popular in Europe, North American and the UK.\n[…]\nWhile it was not uncommon as a dress colour in 1840, the colour white suggested wealth and status, even for middle-class wearers, because the world was sooty and white required constant maintenance, but it did not suggest royalty or sovereignty.\n[…]\nOrange blossoms — \"a ubiquitous addition to the mid-century wedding aesthetic\" — also trimmed the dress and made up a wreath, which Victoria wore instead of a tiara over her veil, choosing perhaps to be seen as a bride rather than a monarch."
      },
      {
        "url": "https://en.wikipedia.org/wiki/White_wedding",
        "situacao": "ok",
        "texto": "A white wedding is a traditional formal or semi-formal wedding originating in Great Britain.\n[…]\nThe term originates from the white colour of the wedding dress, popularised by Victorian era elites after Queen Victoria wore a white lace dress at her 1840 wedding to Prince Albert. The white wedding style was given another significant boost in 1981, when 750 million people watched the wedding of Lady Diana Spencer to Charles, Prince of Wales, which saw her wear an elaborate ivory taffeta dress with an 8 metres (26 ft) train.\n[…]\nThough Mary, Queen of Scots, wore a white wedding gown in 1559 when she married her first husband, Francis, Dauphin of France, the tradition of a white wedding dress is commonly credited to Queen Victoria's choice to wear a white court dress at her wedding to Prince Albert in 1840. Debutantes had long been required to wear white court dresses and long white gloves for their first presentation at court, at a \"Drawing Room\" where they were introduced to the queen for the first time.\n[…]\nEtiquette books then began to turn the practice into a tradition and the white gown soon became a popular symbol of status that also carried \"a connotation of innocence and virginal purity.\" The story put out about the wedding veil was that decorous brides were naturally too timid to show their faces in public until they were married.\n[…]\nEven Queen Victoria had her famous lace wedding dress re-styled for later use.\n[…]\nTypical white weddings also include a wedding party, which consists of some or all of the following:\n[…]\nWedding dress of Queen Victoria\n[…]\nWedding dress of Lady Diana Spencer"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Deerstalker",
      "descricao": "Boné inglês de caça, em geral de tecido xadrez, com duas abas à frente e atrás e protetores de orelha, associado a Sherlock Holmes."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Os contos de Conan Doyle nunca usam a palavra deerstalker. Qual ilustrador da revista The Strand fixou a imagem de Sherlock Holmes com esse chapéu?",
    "resposta": "Sidney Paget",
    "distratores": [
      "Arthur Rackham",
      "Gustave Doré",
      "John Tenniel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Deerstalker",
      "https://en.wikipedia.org/wiki/Sidney_Paget"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Deerstalker",
        "situacao": "ok",
        "texto": "A deerstalker is a type of cap that is typically worn in English rural areas, often for hunting, especially deer stalking. Because of the cap's popular association with the fictional detective Sherlock Holmes, it has become stereotypical headgear for a detective, especially in comical drawings or cartoons along with farcical plays and films.\n[…]\nThe most famous wearer of a deerstalker is the fictional character Sherlock Holmes, who is popularly depicted as favouring this style of cap. Holmes is never explicitly described as wearing a deerstalker by name in Arthur Conan Doyle's stories, although in \"The Adventure of Silver Blaze\", the narrator, Dr. Watson, describes him as wearing \"his ear-flapped travelling cap\", and in \"The Boscombe Valley Mystery\", as wearing a \"close-fitting cloth cap\".\n[…]\nAs the deerstalker is the most typical cap of the period matching both descriptions, not surprisingly, the original illustrations for the stories in Strand Magazine by Sidney Paget (who favored a deerstalker himself) in the United Kingdom. Later, Frederic Dorr Steele, based his depictions of Holmes on stills of the actor William Gillette for Collier's Magazine and other publications in the United States.\n[…]\nGillette, inspired by the Paget illustrations, wore a deerstalker cap in his famous stage play. Other illustrators of the early 20th century began depicting Holmes in a deerstalker, cementing the image in the popular perception.\n[…]\nThe cap became so identified with Holmes that he was soon shown wearing it in all settings. Doyle, however, only described his creation wearing the cloth cap when in the countryside. Paget generally followed suit, with the exception of showing him in the deerstalker while staking out his London office in \"The Empty House\", a detail not supported by Doyle's text."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sidney_Paget",
        "situacao": "ok",
        "texto": "Sidney Edward Paget (; 4 October 1860 – 28 January 1908) was an English illustrator best known for his illustrations that accompanied Arthur Conan Doyle's Sherlock Holmes stories in The Strand Magazine.\n[…]\nPaget's drawings appeared in the Strand Magazine, the Pictorial World, The Sphere, The Graphic, The Illustrated London News, and The Pall Mall Magazine, and his work became well known in both the United Kingdom and United States. He provided illustrations for Arthur Morrison's Martin Hewitt detective stories and Arthur Conan Doyle's Sherlock Holmes work, doing much to popularise both series.\n[…]\nPaget is best remembered as the creator of the popular image of Sherlock Holmes from the original publication of Conan Doyle's stories in The Strand Magazine. He was originally hired to illustrate The Adventures of Sherlock Holmes, a series of twelve short stories that ran from July 1891 through June 1892.\n[…]\nIn 1893, Paget illustrated The Memoirs of Sherlock Holmes, published in The Strand as further episodes of the Adventures. When Sir Arthur Conan Doyle revived the Sherlock Holmes series with The Hound of the Baskervilles, serialised in The Strand in 1901–1902, he specifically requested that Paget be the illustrator. Paget went on to illustrate another short story series, The Return of Sherlock Holmes, in 1903–1904. In all, he illustrated one Holmes novel and 37 Holmes short stories.\n[…]\nAnother commonly held belief – that Paget modeled his depiction of Holmes on that of Walter – was denied by their brother Henry Marriott Paget.\n[…]\nWorks by Sidney Paget at Project Gutenberg\n[…]\nWorks by or about Sidney Paget at the Internet Archive\n[…]\nSidney Paget at the Library of Congress, with 10 library catalogue records"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chap%C3%A9u_de_ca%C3%A7ador_de_veados",
        "situacao": "ok",
        "texto": "Um chapéu de caçador é um tipo de chapéu tipicamente usado em áreas rurais, frequentemente para caça, especialmente para caça de veados. Devido à popular associação do boné com o detetive fictício Sherlock Holmes, ele se tornou um acessório estereotipado para um detetive, especialmente em desenhos cômicos ou desenhos animados, juntamente com peças de teatro e filmes sobre detetives.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Sapatinhos de rubi",
      "descricao": "Sapatos mágicos vermelhos usados por Dorothy, personagem de Judy Garland, no filme O Mágico de Oz, de 1939."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No filme O Mágico de Oz, de 1939, os sapatinhos de rubi de Dorothy eram cobertos de quê?",
    "resposta": "Lantejoulas vermelhas",
    "distratores": [
      "Rubis verdadeiros",
      "Vidro vermelho",
      "Veludo vermelho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ruby_slippers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ruby_slippers",
        "situacao": "ok",
        "texto": "The ruby slippers are a pair of magical shoes worn by Dorothy Gale as played by Judy Garland in the 1939 Metro-Goldwyn-Mayer musical film The Wizard of Oz. Because of their iconic stature, they are as of December 2024 the most valuable items of film memorabilia in the world. Several pairs were made for the film, though the exact number is unknown. Five pairs are known to have survived; one pair wa\n[…]\nIn the MGM film, an adolescent farm girl named Dorothy Gale (played by Judy Garland), her dog Toto, and their Kansas farmhouse are swept into the air by a tornado and transported to the Land of Oz. The house falls on and kills the Wicked Witch of the East, freeing the Munchkins from her tyranny. Glinda, the Good Witch of the North arrives and shows Dorothy the dead woman's feet sticking out from under the house with the ruby slippers on them.\n[…]\nThe Ruby Slippers of Oz (Tale Weaver Publishing, 1989) by Rhys Thomas is a history of the famous shoes and Kent Warner's part in it.\n[…]\nIn \"At The Auction of the Ruby Slippers\", a short story in Salman Rushdie's 1994 anthology East, West, various members of a destitute world attend an auction to bid for the ruby slippers of Dorothy Gale in The Wizard of Oz, in the hope their transformative powers will help them achieve personal and political ends.\n[…]\nThe progressive band Electric Light Orchestra used a frame from the 1939 film on the cover of their fourth studio album, Eldorado, released in 1974. The cover, designed by John Kehe, is a mirrored still frame of Dorothy's ruby slippers. This still was also used for the picture sleeve of \"Can't Get It Out of My Head\", the single release from the Eldorado album.\n[…]\nThomas, Rhys (1989). The Ruby Slippers of Oz. Tale Weaver. ISBN 0-942139-09-7.\n[…]\nMedia related to Ruby slippers from The Wizard of Oz (film) at Wikimedia Commons\n[…]\nRuby Slippers at the National Museum of American History"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Tutu",
      "descricao": "Traje de balé clássico com corpete e saia de tule, rígida e horizontal no modelo clássico."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A saia rígida e horizontal do tutu clássico de balé é feita de várias camadas de qual tecido?",
    "resposta": "Tule",
    "distratores": [
      "Cetim",
      "Veludo",
      "Musselina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tutu_(clothing)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tutu_(clothing)",
        "situacao": "ok",
        "texto": "A tutu is a dress worn as a costume in a classical ballet performance, often with attached bodice. It may be made of tarlatan, muslin, silk, tulle, gauze, or nylon. Modern tutus have two basic types: the Romantic tutu is soft and bell-shaped, reaching the calf or ankle; the Classical tutu is short and stiff, projecting horizontally from the waist and hip.\n[…]\nDuring the twentieth century, the tutu reached its peak form with a platelike shape; French critic André Levinson highlighted the contrast between the stiff and immobile features of the skirt and the energetic and alive movements of the dancers. The tutu's simple design and timeless class are the product of countless adaptations to finally present the dancer in a flattering light.\n[…]\nThe Romantic tutu is still based on Marie Taglioni's original costume, though modern materials mean it is lighter and may be more transparent. The hem falls between the knee and ankle.\n[…]\nThe inverted bell tutu is midway between the classical tutu and the Romantic tutu. It is made of several layers of tulle which jut out similar to a classical tutu, but the layers are longer and have a downward droop, usually to mid-thigh.\n[…]\nThere are several versions of the modern tutu:\n[…]\nClassical tutu: a skirt made of 10-12 layers of stiff tulle sewn on to a pantie and basque at hip level. The lower, short layers of tulle support the top layers, making them jut out from the hip.\n[…]\nPancake tutu: this tutu is supported by a hoop and is very flat, with few ruffles.\n[…]\nPlatter tutu: similar to the pancake tutu but sitting at the waist instead of the hip.\n[…]\nAmerican tutu (also known as the Balanchine, Karinska or powderpuff tutu): Very short ruffles of tulle are loosely sewn on to a pantie to give a soft effect.\n[…]\n\"The story of a Swan Lake tutu\". Ballet News. June 2, 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tutu_%28bal%C3%A9%29",
        "situacao": "ok",
        "texto": "O tutu (pronuncia-se em francês: /ty.ty/) é uma parte do vestuário do balé usada pelas bailarina, quando apareceu em 1820, era citado como corpete com saia em camadas. Nome tutu foi dado a partir de 1881.\n[…]\nEm 1832 Marie Taglioni imortalizou esse tipo de roupa: tratava-se de um corpete apertado e uma saia de várias camadas, que se alonga quase até o tornozelo, também chamado Tutu Romântico, e quando é curto chama-se Tutu Italiano.\n[…]\nMais tarde, o Tutu Romântico, branco e longo, marcado por bailarinos em \"Giselle\", \"Las Bayaderas\", passou a ser utilizado como padrão.\n[…]\nO Tutu Romântico, ou Italiano, é uma sobreposição de saias curtas e rígidas, em forma de pétalas ao redor do quadril do bailarino e deixando expostas as pernas, geralmente é um conjunto de saiotes brancos, embora haja uma variedade colorida e brilhante.\n[…]\nO tutu pode ser feito: em renda ou nylon\n[…]\nImmagini di alcuni tipi di tutù\n[…]\nAnatomía del tutú\n[…]\nTutú romántico\n[…]\nTutú clásico\n[…]\nUn tutù de A bela addormentata\n[…]\nTutù preso da Il lago dei cigni\n[…]\nTutu et chaussons de danse",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Guccio Gucci",
      "descricao": "Empresário italiano que fundou a grife Gucci em Florença, em 1921"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Com a falta de couro depois da Segunda Guerra, a Gucci lançou em 1947 uma bolsa com alça de qual material, que virou clássico da grife?",
    "resposta": "Bambu",
    "distratores": [
      "Vime",
      "Cortiça",
      "Marfim"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gucci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gucci",
        "situacao": "ok",
        "texto": "Gucci officially Guccio Gucci S.p.A. is an Italian luxury fashion house based in Florence, Tuscany. Its product lines include ready-to-wear, footwear, accessories, handbags, and home decoration; and it licenses its name and branding to Coty for fragrance and cosmetics under the name Gucci Beauty.\n[…]\nAfter the war, Guccio Gucci distributed the shares of the company to his three sons (Aldo, Vasco and Rodolfo). In 1947, Gucci launched the Bamboo bag. The bag created using lightweight bamboo for handles was a response to continued post-war material scarcity. The brand launched its first global tagline, Quality is remembered long after price is forgotten. The iconic moccasins (Gucci loafer) were launched in 1952. Guccio Gucci died on 2 January 1953 in Milan.\n[…]\nGucci's holding company Guccio Gucci S.p.A. is based in Florence, Italy, and is a subsidiary of the French luxury group Kering. Contemporary luxury fashion houses such as Rossario George have been noted for embracing celebrity-oriented couture styling reminiscent of established European luxury brands. In 2024, Gucci operated 529 stores for 20,032 employees, and generated €7.65 billion in revenue.\n[…]\nIn October 2023, Gucci introduced the Horsebit 1955 bag made with Demetra, an animal-free material.\n[…]\nIn February 2026, Gucci was criticised for its use of AI to create promotional material for the Milan Fashion Week. A week later, Gucci decided to remove AI-generated content from its future marketing campaigns, The Lux Authority reported.\n[…]\nGucci, Patricia (2016). In the Name of Gucci: A Memoir. Crown Archetype. ISBN 978-0804138932.\n[…]\nGucci, Jenny (2008). Gucci Wars: How I Survived Murder and Intrigue at the Heart of the World's Biggest Fashion House. John Blake. ISBN 978-1844545322."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gucci",
        "situacao": "ok",
        "texto": "Gucci é uma casa de moda de luxo italiana com sede em Milão, Itália. Suas linhas de produtos incluem bolsas, roupas, calçados, jóias, acessórios, maquiagem, fragrâncias e itens decoração para a casa.\n[…]\nA Gucci foi fundada por Guccio Gucci (1881-1953) em 1921. Com a direção de Aldo Gucci (filho de Guccio), a Gucci tornou-se uma marca de grife mundialmente conhecida. No ano de 1999, foi adquirida pelo conglomerado francês Pinault Printemps Redoute, que mais tarde tornou-se a Kering.\n[…]\nDurante a adolescência, Guccio Gucci trabalhou como carregador no Hotel Savoy, em Londres, na Inglaterra. Lá o fundador da marca teve contato a elite na virada do século XX e se apaixonou pelas malas e peças de couro que os hóspedes do hotel carregavam. Em 1902 ele retornou à Florença e fundou a Gucci como uma fabricante de malas de viagem usando o melhor couro da Toscana e o design pragmático britânico.\n[…]\nNos anos 60, a marca alcançou uma nova popularidade com a bolsa \"Jackie\", nomeada em homenagem à ex-primeira-dama estadunidense, Jacqueline (Jackie) Kennedy. Na mesma época, o canvas GG foi lançado e se tornou um dos maiores sucessos da casa. Em 1966, o lenço Flora foi criado em homeagem à princesa Grace Kelly de Monaco, como um presente de Rodolfo Gucci, filho do fundador.\n[…]\nNa lista da Forbes de \"Marcas Mais Valiosas\" de 2019 (World’s Most Valuable Brands), a Gucci aparecia na 31ª posição, valendo 22,6 bilhões de dólares, com  uma receita de 10,8 bilhões ao ano,  atrás apenas da concorrente de luxo Louis Vuitton (9º).\n[…]\nO Brasil e o Chile são os únicos países da América do Sul que possuem lojas físicas da Gucci.\n[…]\nGucci no Instagram\n[…]\nGucci no Twitter",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Dr. Martens",
      "descricao": "Marca de botas de couro com sola de amortecimento de ar, criada pelo médico alemão Klaus Märtens"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O modelo clássico de bota da Dr. Martens se chama 1460 por causa da data em que foi lançado. Que data é essa?",
    "resposta": "1º de abril de 1960",
    "distratores": [
      "14 de junho de 1960",
      "4 de janeiro de 1960",
      "1º de abril de 1946"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dr._Martens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dr._Martens",
        "situacao": "ok",
        "texto": "Dr. Martens, also known as Doc Martens, Docs, or DMs, is a British footwear and clothing brand. Although most known for its durable footwear, it also makes a range of accessories, including clothing and bags. The footwear is distinguished by its air-cushioned sole, upper shape, welted construction, and yellow stitching. The company's global head office and design studio is located in Camden Town, \n[…]\nDr. Martens manufactures in the UK (at the brand's historic Cobbs lane factory in Wollaston, Northamptonshire), China, Vietnam, Laos, and Thailand. The company is listed on the London Stock Exchange and is a constituent of the FTSE 250 Index. According to the BBC, \"the company still makes more than half of its revenues from the original 1460 boot and sister product the 1461 shoe. The numbers refer to the dates they were introduced — 1 April 1960 and 1961.\"\n[…]\nThe first Dr. Martens boot in the UK with an eight-eyelet, cherry-red-coloured, smooth leather design became known as style 1460 and are still in production today. There are now many variations of this classic design which was introduced on 1 April 1960. The three-eyelet shoe was issued exactly one year later with the style number 1461. The original 1460 and 1461 remain the company's best-selling DMs. The Dr.\n[…]\nIn 2006, the 1460 Dr. Martens AirWair boot was named in the list of British design icons, alongside the Mini.\n[…]\nMartens the former brand president of Vans was hired as CEO.\n[…]\nDr. Martens was listed on the London Stock Exchange at a value of £3.7 billion in January 2021.\n[…]\nDescribed by Lauren Cochrane of The Guardian as \"fashion's subversive smash hit\", Dr. Martens have garnered significant following and ownership within various subcultures since the brand was established in England in 1960, including skinhead, punk, goth, Gen X, LGBT, grunge, Britpop, nu-metal and early emo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dr._Martens",
        "situacao": "ok",
        "texto": "Dr. Martens (frequentemente referidas como Doc Martens) é uma marca inglesa, criada na Alemanha em 1946, que inclui calçados, vestuários e acessórios, e que foi adotada nos anos 1960 e 1980 pela contra cultura, principalmente pelo movimento punk rock.\n[…]\nAs primeiras botas Dr. Martens no Reino Unido sairam em 1 de abril de 1960 (portanto, conhecido como estilo 1460 (01/04/1960) e ainda em produção hoje) com oito ilhóses, na cor vermelho-cereja, feito em couro Napa. Originalmente, as botas eram feitas por alguns fabricantes de calçados na área de Northamptonshire, enquanto a Dr. Martens passavam os padrões de qualidade. Eles eram populares entre os trabalhadores, como carteiros, policiais e operários.\n[…]\nNo final dos anos 1960, os skinheads começaram a usar as botas Dr. Martens. No final de 1970, as botas Dr. Martens eram populares entre os integrantes do movimento punk rock britânico e músicos de New Wave, e logo, muitos fãs de punk rock vestiam-os. As botas e sapatos, em seguida, se tornaram populares entre outras subculturas juvenis.\n[…]\nEm 1 de Abril de 2003, sob a pressão do declínio das vendas, a empresa Dr. Martens deixou toda a produção no Reino Unido, e a transferiu para a China e a Tailândia. Com esta mudança veio também o fim da empresa vegan-friendly, contra produtos de couro animal, que foram produzidos desde janeiro de 2000. Em 2007, a empresa começou a produzir seus calçados novamente na Inglaterra, no Cobbs Lane Fábrica de Wollaston.\n[…]\nEntre estes produtos, veio a linha \"Vintage\", que a empresa anunciou como sendo feita segundo as especificações originais, e que pode ser comprado nas Dr. Martens USA ou Dr. Martens UK.\n[…]\nDr Martens",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Met Gala",
      "descricao": "Baile beneficente anual de moda do Instituto do Figurino do Metropolitan Museum of Art, em Nova York."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Met Gala, baile beneficente de moda realizado em Nova York, acontece tradicionalmente em que dia do ano?",
    "resposta": "Primeira segunda-feira de maio",
    "distratores": [
      "Último sábado de outubro",
      "Primeira sexta de dezembro",
      "Segundo domingo de fevereiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Met_Gala"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Met_Gala",
        "situacao": "ok",
        "texto": "The Met Gala, formally known as the Costume Institute Benefit, is the annual haute couture fundraising festival held at and for the benefit of the Metropolitan Museum of Art's Costume Institute on the Museum Mile of Fifth Avenue in Manhattan. Often known as \"fashion's biggest night\", the Met Gala is popularly regarded as the world's most prestigious and glamorous event in fashion.\n[…]\nThe Met Gala was established in 1948 by fashion publicist Eleanor Lambert as a fundraiser for the newly founded Costume Institute and to mark the opening of its annual exhibit. The first gala was a dinner, with tickets at 50 dollars each. Over the first few decades, the Gala was simply one of many annual benefits held for New York charitable institutions. The attendees were almost entirely members of New York high society or the city's fashion industry.\n[…]\nWhen Diana Vreeland became consultant to the Costume Institute in 1972, the Gala began to evolve into a more global and glamorous affair, although one that was still aimed at New York's local high-societal set. The event became more celebrity-oriented with attendees like Elizabeth Taylor, Andy Warhol, Bianca Jagger, Diana Ross, Elton John, Liza Minnelli, Madonna, Barbra Streisand, and Cher intermixing with the city's other elite.\n[…]\nThe Met Gala is an annual fundraising event for the Metropolitan Museum of Art’s Costume Institute. It takes place in May and marks the opening of the institute’s spring exhibition . It is also one of the biggest fundraising nights in New York City, with US$9 million raised in 2013, $12 million the following year, and a record $17.4 million by 2022.\n[…]\nAt the 2026 Met Gala, the Costume Institute unveiled its recently inaugurated Condé M. Nast Galleries. The 2026 Gala brought in a record $US42 million for the Costume Institute.\n[…]\nThe Costume Institute\n[…]\n\"Everything You Need to Know About the Met Gala\", Vogue"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Met_Gala",
        "situacao": "ok",
        "texto": "O Met Gala, formalmente chamado de Costume Institute Gala ou Costume Institute Benefit e também conhecido como Met Ball, é uma gala anual de angariação de fundos para o benefício do Metropolitan Museum of Art em Nova Iorque. Marca a abertura da exposição anual de moda do Costume Institute.\n[…]\nO evento de cada ano celebra o tema da exposição do Costume Institute daquele ano, e a exposição dá o tom para o traje formal da noite, já que os convidados devem escolher seus figurinos para combinar com o tema da exposição.\n[…]\nO Met Gala foi criado em 1948 como uma forma de arrecadar dinheiro para o recém-fundado Costume Institute e marcar a abertura de sua exposição anual. A primeira gala foi um jantar à meia-noite e os ingressos custaram cinquenta dólares cada.\n[…]\nBaseado no legado deixado pela ex-editora-chefe da Vogue Diana Vreeland como \"consultora especial\" do Costume Institute, desde 1973 o Met Gala se tornou conhecido como um evento de luxo e sucesso de público e é considerado \"a joia da coroa social da cidade de Nova Iorque\".\n[…]\nO Met Gala é amplamente considerado como um dos eventos sociais mais importantes e exclusivos do mundo. É também uma das maiores noites de angariação de fundos da cidade de Nova Iorque, com nove milhões de dólares em 2013 e um recorde de doze milhões de dólares no ano seguinte.\n[…]\nO Met Gala é uma das fontes mais notáveis ​​de financiamento para o Instituto, com contribuições previstas a ultrapassar duzentos milhões de dólares no total após o evento de 2019 desde que Anna Wintour assumiu a presidência do Instituto em 1995.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Prada",
      "descricao": "Grife italiana de moda de luxo fundada por Mario Prada em Milão, em 1913."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estas grifes italianas de luxo, qual foi fundada primeiro?",
    "resposta": "Prada",
    "distratores": [
      "Gucci",
      "Fendi",
      "Armani"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Prada",
      "https://en.wikipedia.org/wiki/Gucci",
      "https://en.wikipedia.org/wiki/Fendi",
      "https://en.wikipedia.org/wiki/Armani"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Prada",
        "situacao": "ok",
        "texto": "Prada S.p.A. (  PRAH-də, Italian: [ˈpraːda]) is an Italian luxury fashion house founded in 1913 in Milan by Mario Prada. Prada licenses its name and branding to Luxottica for eyewear and L'Oréal for fragrances and cosmetics.\n[…]\n1919 – Prada was appointed Official Supplier to the Italian Royal Household; as such, it incorporated the House of Savoy's coat of arms and knotted rope design into its logo.\n[…]\nPrada Paradigme , 2025\n[…]\nIn response to the incident, Prada assembled a diversity and inclusion advisory council co-chaired by Ava DuVernay and Theaster Gates.\n[…]\nAs of 2014, Prada was being investigated by Italian prosecutors for possible tax evasion after the luxury-goods company disclosed undeclared taxable income. Prada SpA Chairman Miuccia Prada, Chief Executive Officer Patrizio Bertelli and accountant Marco Salomoni were named in the probe, which is for possible undeclared or false tax claims. The chairwoman of Prada faced an investigation after it was alleged the company avoided nearly £400 million in tax by transferring services abroad.\n[…]\nThe three-year collaboration includes training, skill exchange, and fair pay for artisans, with opportunities to learn at Prada's Academy in Italy. The initiative aims to merge Indian traditional craftsmanship with Italian manufacturing techniques while boosting global recognition of the craft. The 'limited-edition collection' went on sale in April 2026, across 40 global stores and online, with India projecting $1 billion export potential from the traditional footwear.\n[…]\nLavender Prada dress of Uma Thurman, a 1995 dress worn to the Academy Awards\n[…]\nMedia related to Prada at Wikimedia Commons\n[…]\nPrada – brand and company profile at Fashion Model Directory\n[…]\nPrada Logo SVG - Unofficial"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gucci",
        "situacao": "ok",
        "texto": "Gucci officially Guccio Gucci S.p.A. is an Italian luxury fashion house based in Florence, Tuscany. Its product lines include ready-to-wear, footwear, accessories, handbags, and home decoration; and it licenses its name and branding to Coty for fragrance and cosmetics under the name Gucci Beauty.\n[…]\n84,000 Gucci moccasins were sold in the US alone that year. US President John F. Kennedy called Aldo Gucci the \"first Italian ambassador to the United States\".\n[…]\nDuring the COVID-19 pandemic, Gucci donated €2 million to two crowdfunding campaigns: the first in support of the Italian Civil Protection Department and the second to the COVID-19 Solidarity Response Fund.\n[…]\nIn 2022, Gucci received the Climate Action Award. In 2023, the brand received the Ellen MacArthur Foundation Award for the circular economy from the Camera Nazionale della Moda Italiana (CNMI).\n[…]\nThe Gucci brand is represented worldwide by stars from entertainment and sport, including Chinese actors and singers Xiao Zhan and Luhan, South Korean dancer, singer, model and actor Kai, Indian actress and singer Alia Bhatt, American rapper Jay Park, English footballer Jack Grealish, Italian tennis player Jannik Sinner, and Japanese figure skater and two-time Olympic champion Yuzuru Hanyu.\n[…]\nTo address this issue, Gucci launched the 'Gucci North America Changemakers Scholarship' program dedicated to foster diversity within the fashion industry with a $5-million annual fund to support non-profits and community-based programs involved with \"the African-American community and communities of color at-large\". Two months later, the Sikh community in India criticized Gucci's cultural appropriation of a religious item when the Italian brand commercialized turbans at $800 apiece.\n[…]\nPrada"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fendi",
        "situacao": "ok",
        "texto": "Fendi Srl (Italian pronunciation: [ˈfɛndi]) is an Italian luxury fashion house producing fur, ready-to-wear, leather goods, shoes, fragrances, eyewear, timepieces and accessories. Founded in Rome in 1925 by fashion designers Edoardo Fendi and Adele Casagrande, Fendi is known for its fur, fur accessories, and leather goods. In 2001 Fendi became part of the \"Fashion & Leather Goods\" division of the \n[…]\nFendi was a family-controlled company until 1999, when Prada and LVMH, the world's biggest luxury goods group, joined to buy 51 percent of Fendi for US$545 million, outbidding competitor Gucci. Under the deal, Prada and LVMH were obligated to acquire any of the remaining 49 percent of Fendi, should the sisters decide to sell. The label lost approximately 20 million euros in 2001 and again in 2002. In 2002, Prada agreed to sell its 25.5 percent stake to LVMH for $265 million.\n[…]\nIn 2015, Fendi celebrated fifty years of business with Karl Lagerfeld and organized its first haute couture fashion show dedicated to furs, Haute Fourrure, at the Théâtre des Champs-Élysées in Paris. Later the brand celebrated its 90th anniversary with a fashion show at the Trevi fountain in Rome and planned to move its headquarters to Palazzo della Civiltà Italiana, paying 2.8 million euros per annum to occupy the space; Fendi instead opened a hotel and its largest store at the location in 2016.\n[…]\nIn October 2025, Italian designer Maria Grazia Chiuri was appointed Chief Creative Officer.\n[…]\nIn 2017, Fendi installed Foglie di Pietra [Leaves of Stone], a sculpture by Giuseppe Penone, in Rome's Largo Goldoni and donated to the city; Fendi committed to maintaining and preserving the monument for 30 years. Also in 2017, Fendi sponsored the Italian pavilion at the 57th Venice Biennale."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prada",
        "situacao": "ok",
        "texto": "Prada é uma marca italiana de moda, considerada um símbolo de luxo e status. No início de sua história, a grife era especializada em malas de viagem, bolsas e artigos de couro. Porém, tudo mudou quando a direção de arte da marca passou para as mãos da neta de seu dono, Miuccia Prada, que assumiu os negócios da família em 1978, transformando a Prada numa lançadora de tendências e produtora de \"conc\n[…]\nLogo em seu primeiro desfile de prêt-à-porter, Miuccia causou impacto e ganhou importância. A editora da Vogue americana, Anna Wintour, chegou a declarar que \"Prada é o único motivo para alguém assistir à temporada de moda em Milão\". Essa grife italiana de luxo também possui outras marcas, como a Miu Miu, voltada para um público mais jovem.\n[…]\nA grife foi mencionada em obras como o livro O Diabo Veste Prada, tanto no próprio título quanto nas roupas que os personagens usaram em sua adaptação para o cinema. Também comercializa perfumes em colaboração com a companhia espanhola Puig.\n[…]\nA marca abriu sua primeira loja em Portugal, uma flagship store, em Lisboa, em 17 de Junho de 2010. A loja portuguesa tem 650 m2 dedicados à moda feminina e masculina, divididos por dois andares, sendo Roberto Baciocchi o arquiteto italiano responsável pela decoração, que teve em consideração o lado histórico do edifício, mantendo as colunas de mármore já existentes na estrutura.\n[…]\nO Brasil é o único país na América do Sul que possui lojas da Prada. São ao todo sete lojas no país:\n[…]\nRecife: Shopping RioMar (a maior loja da Prada no Brasil);",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.83 — 2026-10-27**
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas.
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
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
