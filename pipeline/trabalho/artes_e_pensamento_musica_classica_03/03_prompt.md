Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Música Clássica** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Tuba",
      "descricao": "Instrumento de sopro de metal de grande porte, o de registro mais grave da família dos metais na orquestra."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre os instrumentos de metal da orquestra, qual tem o som mais grave?",
    "resposta": "Tuba",
    "distratores": [
      "Trombone",
      "Trompa",
      "Trompete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tuba"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tuba",
        "situacao": "ok",
        "texto": "The tuba (Latin, \"trumpet\"; UK: ; US: ) is a large brass instrument in the bass-to-contrabass range. It is a member of the valved bugles, a large and diverse family of instruments characterized by their wide conical bore and use of valves to alter pitch. The tuba usually has four or five valves, although some models have three or six.\n[…]\nE♭ tuba\n[…]\nC tuba\n[…]\nB♭ tuba\n[…]\nThe California-based manufacturer Kanstul closed in 2019, and Conn-Selmer closed its manufacturing plant in Eastlake, Ohio in June 2026, moving its remaining tuba and band instrument manufacturing to China.\n[…]\nThe written range of the tuba is large, partly because different-sized instruments have been used at different times and in different regions. The C or B♭ contrabass tubas called for by Wagner and later German composers could scarcely reach middle C, while the range of the euphonium-like French C tuba built an octave higher reaches the C5 above middle C.\n[…]\nHigher notes are possible, since the upper range is limited only by the fitness of the player's embouchure, although notes above the bell cutoff frequency around the tenth harmonic are difficult to center; continuous glissandi are possible, making valve fingering largely redundant. The wide bore profile of the tuba means that pedal tones are easily produced, compared to other brass instruments.\n[…]\nOften in the form of polka and trio, they follow the same structure as contemporaneous pieces for solo cornet and other instruments. Arrangements for tuba of Jean-Baptiste Arban's Variations on the Carnival of Venice (1864), a popular example of this type of piece, are still commonly performed and recorded. Other solo works, such as the Concertino (1860) by Otto Rosenberg and Concert (1860) by Louis Hässler, made considerable melodic and technical demands on the performer.\n[…]\nInternational Tuba Day — first Friday in May"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tuba",
        "situacao": "ok",
        "texto": "Tuba é um instrumento musical da família dos Metais e também é um Aerofone. Surgiu para suprir a necessidade de um instrumento que fosse consistente em preencher a região grave, em sonoridade e extensão. A configuração da tuba só foi possível graças à invenção de um sistema de válvulas em 1812. A primeira tuba tinha 5 válvulas e também era afinada em Fá.\n[…]\nA primeira patente de  tuba surgiu em 12 de Setembro de 1835 por Johann Moritz e Wilhelm Wieprecht. É o membro mais jovem da família dos Metais e também o mais grave. É constituída por um tubo cônico recurvado sobre si mesmo que termina numa campânula em forma de sino, dispondo de três a seis pistões ou válvulas.\n[…]\nA tuba tem como um de seus instrumentos precursores, o “oficleide”, utilizado por volta de 1800 (século XIX), ainda antes da invenção do sistema de pistões. Este instrumento começou a ganhar popularidade nas pequenas bandas de metais da Grã-Bretanha, onde um antecessor do atual Sousafone, chamado Helicon, era usado devido à sua portabilidade (mais fácil de transportar).\n[…]\nMais tarde, Richard Wagner utilizaria uma variante deste instrumento (basicamente uma tuba baixo mas com um bocal de trompa), razão pela qual surgiu a chamada Tuba Wagneriana. Em 1860, John Philip Sousa patenteou um novo tipo de tuba baseado no Helicon, dando origem ao atualmente chamado Sousafone.\n[…]\nPor esta altura, os alemães Johann Moritz e Wilhelm Wieprecht, construiram o modelo de tuba que seria o precursor do modelo mais utilizado hoje em dia. Desde esta altura, o design e conceito geral da tuba permaneceram inalteráveis, mas diversas variantes foram sendo introduzidas, incluindo instrumentos com 4, 5 e 6 pistões, pistões com válvulas rotativas, Sousafones em fibra de vidro (para serem usados em desfiles).\n[…]\nOs tipos de tubas mais conhecidos são: tuba de marcha, helicon e sousafone.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Flautim",
      "descricao": "Pequena flauta transversal que soa uma oitava acima da flauta comum, usada na orquestra e em bandas."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na família das madeiras da orquestra, qual instrumento alcança as notas mais agudas?",
    "resposta": "Flautim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Piccolo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piccolo",
        "situacao": "ok",
        "texto": "The piccolo ( PIK-ə-loh; Italian for 'small') is a smaller version of the western concert flute and a member of the woodwind family of musical instruments. Sometimes referred to as a \"baby flute\" or piccolo flute, the modern piccolo has the same type of fingering as the standard transverse flute, but the sound it produces is an octave higher.\n[…]\nSince the Middle Ages, evidence indicates the use of octave transverse flutes as military instruments, as their penetrating sound was audible above battles. In cultured music, however, the first piccolos were used in some of Jean Philippe Rameau's works in the first half of the 18th century. Still, the instrument began to spread, and therefore to have a stable place in the orchestra, only at the beginning of 1800 A.D.\n[…]\nDuring the Baroque period, the indication \"flautino\" or also \"flauto piccolo\" usually denoted a recorder of small size (soprano or sopranino). In particular, this is the case of the concertos that Antonio Vivaldi wrote for flautino.\n[…]\nUnlike other woodwind instruments, in most wooden piccolos, the tenon joint that connects the head to the body has two interference fit points surrounding the cork and metal side of the piccolo body joint.\n[…]\nPiccolo specialist Peter Verhoyen has commissioned, inspired and premiered a large number of works for the piccolo: list of compositions written for Peter Verhoyen.\n[…]\nList of piccolo players\n[…]\nGippo, Jan (ed.). The Complete Piccolo: A Comprehensive Guide to Fingerings, Repertoire, and History, second edition, foreword by Laurie Sokoloff; contributing editors, Therese Wacker, Morgan Williams, and Tammy Sue Kirk. Bryn Mawr: Theodore Presser Company, 2008. ISBN 978-1-59806-111-6\n[…]\nThe Woodwind Fingering Guide, with piccolo fingerings\n[…]\nThe International Piccolo Festival's website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Flautim",
        "situacao": "ok",
        "texto": "O flautim ou piccolo (pequeno em italiano) é um instrumento musical da família da flauta, soando uma oitava acima da flauta soprano, da qual possui igual digitação. É constituído por um pequeno tubo de cerca de 33 cm de comprimento e um bocal. Este instrumento foi introduzido na orquestra no século XIX, sendo usado na música erudita moderna. Produz o som mais agudo da orquestra.\n[…]\nÉ um instrumento de execução difícil, já que a dimensão pequena do tubo exigem uma embocadura e um sopro precisos. Além disso, suas chaves se encontram a uma distância extremamente pequena umas das outras.\n[…]\nFlauta\n[…]\nOrquestra",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Viola",
      "descricao": "Instrumento de cordas friccionadas com arco, um pouco maior e mais grave que o violino, tocado apoiado no ombro."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Também apoiado no ombro do músico, qual instrumento de cordas da orquestra é um pouco maior que o violino e soa mais grave?",
    "resposta": "Viola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Viola"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Viola",
        "situacao": "ok",
        "texto": "The viola ( vee-OH-lə, () Italian: [ˈvjɔːla, viˈɔːla]) is a string instrument of the violin family, and is usually bowed when played. The viola is slightly larger than the violin and has a lower sound. Since the 18th century, it has been the middle or alto voice of the violin family, between the violin (which is tuned a perfect fifth higher) and the cello (which is tuned an octave lower). The stri\n[…]\nThe viola is held in the same manner as the violin; however, due to its larger size, some adjustments must be made to accommodate. The viola, just like the violin, is placed on top of the left shoulder between the shoulder and the left side of the face (chin). Because of the viola's size, violists with short arms tend to use smaller-sized instruments for easier playing.\n[…]\nBrahms also wrote \"Two Songs for Voice, Viola and Piano\", Op. 91, \"Gestillte Sehnsucht\" (\"Satisfied Longing\") and \"Geistliches Wiegenlied\" (\"Spiritual Lullaby\") as presents for the famous violinist Joseph Joachim and his wife, Amalie. Dvořák played the viola and apparently said that it was his favorite instrument: his chamber music is rich in important parts for the viola.\n[…]\nElectric violas are mostly violin-sized, as they use the amp and speaker to create a big sound, so they do not need a large soundbox. Indeed, some electric violas have little or no soundbox, and thus rely entirely on amplification. Fewer electric violas are available than electric violins. It can be hard for violists who prefer a physical size or familiar touch references of a viola-sized instrument, when they must use an electric viola that uses a smaller violin-sized body.\n[…]\nNelson, Sheila M. (2003). The Violin and Viola: History, Structure, Techniques. New York: Dover Publications. ISBN 978-04864-2-853-6.\n[…]\nHistory of the Viola\n[…]\nDr. Lindsay Aitkenhead's folk viola research page Archived 2009-07-19 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Viola",
        "situacao": "ok",
        "texto": "A viola erudita (também chamada viola de arco, violeta ou alto) é um instrumento musical da família do violino (de arco e quatro cordas), assemelhando-se visualmente a este, inclusive na maneira de se tocar. No entanto, possui um som mais encorpado, doce, menos estridente e mais grave, sendo o seu registo intermédio entre o violino e o violoncelo. Além destes três instrumentos, a família dos instr\n[…]\nA viola de arco é o instrumento que mais se assemelha com a voz humana, seu timbre faz a voz contralto, enquanto o violino faz a voz soprano, o violoncelo a voz tenor e o contrabaixo a voz baixo. Com suas quatro cordas afinadas em lá, ré, sol e dó, a viola possui um poder expressivo de acento suave, recolhido e melancólico.\n[…]\nTem tamanho pouco maior que o violino e também arco com tamanho e peso diferente do violino. Porém, para se tocar o instrumento adota-se técnica praticamente idêntica.\n[…]\nA palavra viola foi utilizada por muito tempo (antes do século XVI) para identificar genericamente qualquer instrumento de arco. Até fins do século XVl, havia mais de dez instrumentos com o nome de viola: viola da braccio, viola da bastarda, viola d'amore, viola da gamba, etc.\n[…]\nA viola como é conhecida hoje evoluiu da viola da gamba (do italiano: \"viola de perna\") para a viola da braccio (\"viola de braço\"). Na lingua alemã, por exemplo, a viola é conhecida como Bratsche, que é uma corruptela de braccio, que era tocada apoiada pouco abaixo do ombro, no peito.\n[…]\nA execução mais comum é a fricção do arco nas cordas. A técnica é a mesma do violino, por isso os dois instrumentos podem ser confundidos por leigos, porém a viola é ligeiramente maior, além de mais grave. Antes de tocar o instrumento, o violista passa sobre a crina do arco uma resina chamada breu, que tem o efeito de produzir o atrito entre os fios da crina e as cordas, gerando o som.\n[…]\nPassacaglia Concerto Viola e Violino (Händel)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Contralto",
      "descricao": "Tipo de voz feminina de registro mais grave na classificação vocal do canto lírico."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No canto lírico, as vozes femininas são classificadas do agudo ao grave. Qual delas fica no extremo mais grave?",
    "resposta": "Contralto",
    "distratores": [
      "Soprano",
      "Mezzo-soprano",
      "Contratenor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Contralto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Contralto",
        "situacao": "ok",
        "texto": "A contralto (Italian pronunciation: [konˈtralto]) (sometimes alto) is a classical female singing voice whose vocal range is the lowest of such voice types.\n[…]\n\"Contralto\" is primarily meaningful only in reference to classical and operatic singing, as other traditions lack a comparable system of vocal categorization. The term \"contralto\" is only applied to female singers; men singing in a similar range are called \"countertenors\". The Italian terms \"contralto\" and \"alto\" are not synonymous, \"alto\" technically denoting a specific vocal range in choral singing without regard to factors like tessitura, vocal timbre, vocal facility, and vocal weight.\n[…]\nHowever, there exists some French choral writing (including that of Ravel and Poulenc) with a part labelled \"contralto\", despite the tessitura and function being that of a classical alto part. The Saracen princess Clorinde in André Campra's 1702 opera Tancrède was written for Julie d'Aubigny and is considered the earliest major role for bas-dessus or contralto voice.\n[…]\nTrue operatic contraltos are rare, and the operatic literature contains few roles written specifically for them with most of those roles singing notes outside of their defined range. Contraltos sometimes are assigned feminine roles like Teodata in Flavio, Angelina in La Cenerentola, Rosina in The Barber of Seville, Isabella in L'italiana in Algeri, and Olga in Eugene Onegin, but more frequently they play female villains or trouser roles.\n[…]\nCategory of contraltos\n[…]\nList of contraltos in non-classical music\n[…]\nList of operatic contraltos\n[…]\nMedia related to Contraltos at Wikimedia Commons\n[…]\nThe dictionary definition of Contralto at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Contralto",
        "situacao": "ok",
        "texto": "Contralto é o tipo de voz feminina mais baixo e pesado, com a mais grave tessitura e também a mais rara. O alcance vocal da contralto cai entre tenor e mezzo-soprano, normalmente do F3 para o Fá5, embora nos extremos algumas vozes podem chegar de um Lá2 para um Dó6, um ótimo exemplo legitimo dessa voz  é a contralto Polonesa Ewa Podleś que emite do  Lá2 para um Ré#6. Tem um timbre robusto e vigoro\n[…]\nContralto lírico: É mais leve do que um contralto dramático, mas não é capaz da ornamentação e dos saltos de um contralto coloratura. Esta classe de contralto, mais leve no timbre do que os outros, é o mais comum hoje em dia e, geralmente, sua tessitura varia do F3 ou F#3 para o F5 ou F#5. Possui um timbre mais aveludado, mais rico e menos metalico, se comparado com a contralto dramático, além de uma maior facilidade nas notas altas.[carece de fontes]?\n[…]\nContralto dramático: A voz mais dramática, profunda, escura e pesada de contralto, tendo geralmente mais poder do que os outros. Cantoras nesta classe, como as contraltos de coloratura, são raras. Normalmente sua tessitura abrange desde o D3 ou E3 para o D5 ou E5.[carece de fontes]?\n[…]\nO termo contralto foi desenvolvido em relação as vozes clássicas e operísticas, em que a classificação se baseia não apenas na escala vocal da cantora, mas também sobre a tessitura e timbre da voz. Para cantores clássicos e de ópera, seu tipo de voz determina os papéis que irão cantar e é o principal método de categorização. Na música não-clássica, os cantores são principalmente definidos por seu gênero e não o seu alcance vocal.\n[…]\nQuando a termos soprano, mezzo-soprano, contralto, contratenor, tenor, barítono e baixo são usados ​​como descritores de vozes não-clássicas, eles são aplicados mais livremente do que seriam para aqueles de cantores clássicos e geralmente referem-se apenas ao alcance vocal percebida do cantor.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Joseph Haydn",
      "descricao": "Compositor austríaco do período clássico (1732–1809), chamado de pai da sinfonia."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Haydn, Mozart e Beethoven são os três grandes nomes do Classicismo vienense. Qual deles nasceu primeiro?",
    "resposta": "Joseph Haydn",
    "fonte": [
      "https://en.wikipedia.org/wiki/Joseph_Haydn",
      "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
      "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joseph_Haydn",
        "situacao": "ok",
        "texto": "Franz Joseph Haydn ( HY-dən; German: [ˈfʁants ˈjoːzɛf ˈhaɪdn̩] ; 31 March 1732 – 31 May 1809) was an Austrian composer of the Classical period. He was pivotal in the evolution of chamber music forms such as the string quartet and piano trio. His contributions to musical form have led him to be called \"Father of the Symphony\", \"Father of the String quartet\" and \"Father of Sonata Form\".\n[…]\nHaydn also differs from Mozart and Beethoven in his recapitulation sections, where he often rearranges the order of themes compared to the exposition and uses extensive thematic development. Of these \"rearranged recapitulations\", Rosemary Hughes writes\n[…]\nSeveral of the operas were Haydn's own work (see List of operas by Joseph Haydn); these are seldom performed today. Haydn sometimes recycled his opera music in symphonic works, which helped him continue his career as a symphonist during this hectic decade.\n[…]\nThe change in Haydn's approach was important in the history of classical music, as other composers soon followed his lead. When Beethoven left Bonn for Vienna in 1792, his patron, Count Ferdinand Ernst Gabriel von Waldstein, wrote \"You will receive the spirit of Mozart from the hands of Haydn.\" In 1814 E. T. A.\n[…]\nList of compositions by Joseph Haydn\n[…]\nList of concertos by Joseph Haydn\n[…]\nList of masses by Joseph Haydn\n[…]\nList of operas by Joseph Haydn\n[…]\nList of piano trios by Joseph Haydn\n[…]\nList of solo piano compositions by Joseph Haydn\n[…]\nList of string quartets by Joseph Haydn\n[…]\nList of symphonies by Joseph Haydn\n[…]\nJoseph Haydn's ethnicity\n[…]\n\"Joseph Haydn\" by Karl Geiringer, Raymond L. Knapp, H. C. Robbins Landon, Encyclopædia Britannica\n[…]\nFree scores by Joseph Haydn at the International Music Score Library Project (IMSLP)\n[…]\nFree scores by Joseph Haydn in the Choral Public Domain Library (ChoralWiki)\n[…]\nJoseph Haydn-Institut (in German)\n[…]\nThe Haydn Society of North America\n[…]\n\"Discovering Haydn\". BBC Radio 3."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
        "situacao": "ok",
        "texto": "Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791) was a Classical composer and musician. He completed more than 800 works in his life—including outstanding examples of most of the genres of his time: symphonies, concertos, chamber music, opera and choral music—and is regarded as one of the greatest composers in the history of Western music.\n[…]\nFranz Xaver Wolfgang Mozart (26 July 1791 – 29 July 1844)\n[…]\nMozart met Joseph Haydn in Vienna around 1784, and the two composers became friends. When Haydn visited Vienna, they sometimes played chamber music together with other friends. Mozart's six quartets dedicated to Haydn (K. 387, K. 421, K. 428, K. 458, K. 464 and K. 465) date from the period 1782 to 1785, and are judged to be a response to Haydn's Opus 33 set from 1781, and are today considered key works of the string quartet literature.\n[…]\nCourt records show that Joseph aimed to keep the esteemed composer from leaving Vienna in pursuit of better prospects.\n[…]\nMozart lived at the centre of the Viennese musical world and knew a significant number and variety of people: fellow musicians, theatrical performers, fellow Salzburgers and aristocrats, including some acquaintance with Emperor Joseph II. Solomon considers his three closest friends to have been Gottfried von Jacquin, Count August Hatzfeld and Sigmund Barisani; others included his elder colleague Joseph Haydn, the singers Franz Xaver Gerl and Benedikt Schack and the horn player Joseph Leutgeb.\n[…]\nMozart's music, with Haydn's, stands as an archetype of the Classical style. At the time he began composing, European music was dominated by the style galant, a reaction against the highly evolved intricacy of the Baroque.\n[…]\nWolfgang Amadeus Mozart at IMDb\n[…]\nAnthony Tommasini, Greatest Composers Part Two: Haydn and Mozart. The New York Times.\n[…]\nWolfgang Amadeus Mozart at the Musopen project"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven",
        "situacao": "ok",
        "texto": "Ludwig van Beethoven (baptised 17 December 1770 – 26 March 1827) was a German composer, conductor, and pianist. Regarded as one of the greatest composers in the history of Western music, he was mentored during the Classical period, and his musical style was a key driver of the transition to Romantic music, and the expansion of instrumental forms such as the symphony, the piano sonata and the strin\n[…]\nBorn in Bonn, Beethoven was a musical prodigy. He was initially taught intensively by his father, Johann van Beethoven, and later by Christian Gottlob Neefe. He found relief from a dysfunctional home life with the family of Helene von Breuning, whose children he loved, befriended, and taught piano. At age 21, he moved to Vienna, which became his base, and studied composition with Joseph Haydn.\n[…]\nHis career is divided into three periods. In the first, he composed in the classical style of Haydn and Wolfgang Amadeus Mozart. Beethoven's First Symphony premiered in 1800, and his first set of string quartets was published in 1801. The Moonlight Sonata, dedicated to his pupil Julie Guicciardi, is one of his most popular works. In the middle period (1802–1812), he developed a distinctive style. His Third (Eroica) and Fifth Symphonies premiered in 1805 and 1808, respectively.\n[…]\nBeethoven was probably first introduced to Joseph Haydn in December 1790, when Haydn was travelling to London and made a brief stop in Bonn around Christmastime. In July 1792, they met again in Bonn on Haydn's return trip from London to Vienna, when Beethoven played in the orchestra at the Redoute in Godesberg. Arrangements were likely made at that time for Beethoven to study with Haydn.\n[…]\nWaldstein wrote to Beethoven before his departure: \"You are going to Vienna in fulfilment of your long-frustrated wishes ... With the help of assiduous labour you shall receive Mozart's spirit from Haydn's hands.\"\n[…]\nBeethoven-Haus Bonn"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joseph_Haydn",
        "situacao": "ok",
        "texto": "Franz Joseph Haydn (Rohrau, 31 de março de 1732 – Viena, 31 de maio de 1809) foi um dos mais importantes compositores do período clássico. Personifica o chamado \"classicismo vienense\" ao lado de Wolfgang Amadeus Mozart e Ludwig van Beethoven. A posteridade apelidou este grupo como \"Trindade Clássica Vienense\".\n[…]\nEra irmão do igualmente ilustre compositor Michael Haydn, colega de Mozart em Salzburgo, e do tenor Johann Evangelist Haydn, que mais tarde Joseph fará vir para Eszterhaza em 1763. Tendo vivido a maior parte da sua vida na Áustria, Haydn passou a maior parte de sua carreira como músico de corte para a rica família dos Eszterházy. Isolado de outros compositores, foi, segundo ele próprio, “forçado a ser original”. A sua genialidade foi amplamente reconhecida durante a sua vida.\n[…]\nDescoberto desta forma, Joseph Haydn foi enviado a Viena, onde trabalhou durante os nove anos seguintes como cantor, os últimos quatro já na companhia de seu irmão mais novo Michael.\n[…]\nEsses eram Joseph Carl Rosenbaum, um ex-secretário da família Esterházy (empregadores de Haydn), e Johann Nepomuk Peter, governador da prisão provincial da Baixa Áustria.\n[…]\nAlan Curtis. Joseph Haydn. Keyboard Sonatas. Fortepian Walter da década de 1796, Schantz 1790\n[…]\nRonald Brautigam com Concerto Copenhagen sob Lars Ulrik Mortensen. Joseph Haydn Concertos. Walter (Paul McNulty)\n[…]\nAndreas Staier. Joseph Haydn. Sonatas and Variations. Walter (Christopher Clarke)\n[…]\nJos van Immerseel. Wolfgang Amadeus Mozart, Joseph Haydn. Fortepiano Sonatas. Walter (Christopher Clarke)\n[…]\nRobert Levin com Vera Beths e Anner Bylsma. Joseph Haydn. The Last 4 Piano Trios: H 15 no 27-30 . Walter (Paul McNulty)\n[…]\nObras de Joseph Haydn no International Music Score Library Project\n[…]\nPartituras gratuitas de Joseph Haydn na CPDL, a Biblioteca Coral de Domínio Público",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Franz Schubert",
      "descricao": "Compositor austríaco do Classicismo tardio e início do Romantismo, famoso por seus Lieder."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Todos estes compositores morreram antes dos quarenta anos. Qual deles morreu mais jovem?",
    "resposta": "Franz Schubert",
    "distratores": [
      "Wolfgang Amadeus Mozart",
      "Felix Mendelssohn",
      "Frédéric Chopin"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Franz_Schubert",
      "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
      "https://en.wikipedia.org/wiki/Felix_Mendelssohn",
      "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Franz_Schubert",
        "situacao": "ok",
        "texto": "Franz Peter Schubert (; German: [fʁants ˈpeːtɐ ˈʃuːbɐt]; 31 January 1797 – 19 November 1828) was an Austrian composer of the late Classical and early Romantic eras. He was immensely prolific despite living a short life, leaving behind a vast oeuvre of more than 1,000 compositions, including over 600 Lieder (art song in German) and other vocal works, seven complete symphonies, sacred music, operas,\n[…]\nAppreciation of Schubert's music while he was alive was limited to a relatively small circle of admirers in Vienna, but interest in his work increased greatly in the decades following his death. Felix Mendelssohn, Robert Schumann, Franz Liszt, Johannes Brahms and other 19th-century composers discovered and championed his works. Today, Schubert is considered one of the greatest composers in the history of Western classical music and his music continues to be widely performed.\n[…]\nOne of Schubert's most prolific years was 1815. He composed over 20,000 bars of music, more than half of which were for orchestra, including nine church works, a symphony, and about 140 Lieder. In that year, he was also introduced to Anselm Hüttenbrenner and Franz von Schober, who would become his lifelong friends. Another friend, Johann Mayrhofer, was introduced to him by Spaun in 1815.\n[…]\nIn the 20th century, composers including Richard Strauss, Anton Webern, Benjamin Britten, George Crumb, and Hans Zender championed or paid homage to Schubert in some of their works. Britten, an accomplished pianist, accompanied many of Schubert's Lieder and performed many piano solo and duet works. The German electronic music group Kraftwerk has a track titled \"Franz Schubert\" on their 1977 album Trans-Europe Express.\n[…]\nFranz Schubert at the Internet Broadway Database\n[…]\nFree scores by Franz Schubert in the Choral Public Domain Library (ChoralWiki)\n[…]\nFree digital scores by Franz Schubert in the OpenScore Lieder Corpus"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
        "situacao": "ok",
        "texto": "Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791) was a Classical composer and musician. He completed more than 800 works in his life—including outstanding examples of most of the genres of his time: symphonies, concertos, chamber music, opera and choral music—and is regarded as one of the greatest composers in the history of Western music.\n[…]\nMozart's modest funeral did not reflect his standing with the public as a composer, but memorial services and concerts in Vienna and Prague were well attended. In the period immediately after his death, his reputation rose substantially. Solomon describes an \"unprecedented wave of enthusiasm\" for his work; biographies were written first by Friedrich Schlichtegroll, Franz Xaver Niemetschek and Georg Nikolaus von Nissen, and publishers vied to produce complete editions of his works.\n[…]\nMozart lived at the centre of the Viennese musical world and knew a significant number and variety of people: fellow musicians, theatrical performers, fellow Salzburgers and aristocrats, including some acquaintance with Emperor Joseph II. Solomon considers his three closest friends to have been Gottfried von Jacquin, Count August Hatzfeld and Sigmund Barisani; others included his elder colleague Joseph Haydn, the singers Franz Xaver Gerl and Benedikt Schack and the horn player Joseph Leutgeb.\n[…]\nMozart's keyboard works up to a certain point (not easy to determine) were written with the harpsichord in mind. An early opportunity for Mozart to encounter pianos may have been his Munich journey of 1774–1775, when he may have encountered pianos made by the Regensburg builder Franz Jakob Späth. In 1777, when Mozart was visiting Augsburg on his long job-hunting tour, he was deeply impressed by Johann Andreas Stein's pianos and shared his admiration in detailed letter to his father."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Felix_Mendelssohn",
        "situacao": "ok",
        "texto": "Jakob Ludwig Felix Mendelssohn Bartholdy (3 February 1809 – 4 November 1847), simply known as Felix Mendelssohn, was a German composer, pianist, organist and conductor of the early Romantic era. Mendelssohn's compositions include symphonies, concertos, piano music, organ music and chamber music. His best-known works include the String Octet, the overture and incidental music for A Midsummer Night'\n[…]\nHe was deluged by offers of music from rising and would-be composers; among these was Richard Wagner, who submitted his early Symphony, the score of which, to Wagner's disgust, Mendelssohn lost or mislaid. Mendelssohn also revived interest in the music of Franz Schubert. Robert Schumann discovered the manuscript of Schubert's Ninth Symphony and sent it to Mendelssohn, who promptly premiered it in Leipzig on 21 March 1839, more than a decade after Schubert's death.\n[…]\nThe scholar Susan Youens comments \"If [Mendelssohn]'s emotional range in lied was narrower than Schubert's, that is hardly surprising: Schubert composed many more songs than Mendelssohn across a wider spectrum\", and whilst Schubert had a declared intent to modernize the song style of his day, \"[t]his was not Mendelssohn's mission.\"\n[…]\nA number of songs written by Mendelssohn's sister Fanny originally appeared under her brother's name; this may have been partly due to the prejudice of the family, and partly to her own retiring nature. In 1842, this resulted in an embarrassing moment when Queen Victoria, receiving Felix at Buckingham Palace, expressed her intention of singing to the composer her favourite of his songs, Italien (to words by Franz Grillparzer), which Felix confessed was by Fanny.\n[…]\nAt the Leipzig Conservatoire Mendelssohn taught classes in composition and ensemble playing.\n[…]\nThe Mutopia Project has compositions by Felix Mendelssohn"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Franz_Schubert",
        "situacao": "ok",
        "texto": "Franz Peter Schubert (Himmelpfortgrund, 31 de Janeiro de 1797 – Viena, 19 de Novembro de 1828) foi um compositor austríaco do fim do classicismo, com um estilo marcante, inovador e poético do romanticismo. Escreveu cerca de seiscentas peças musicais (o \"lied\" alemão), bem como óperas, sinfonias, incluindo a \"Sinfonia Incompleta\", sonatas entre outros trabalhos. Viveu apenas trinta e um anos e para\n[…]\nMas o interesse pela sua música aumentou significativamente nas décadas que se seguiram à sua morte. O contributo para colocar Schubert no panteão dos grandes compositores da história da música europeia foi dado por outros grandes compositores do século XIX que foram seus admiradores, como Felix Mendelssohn, Robert Schumann, Franz Liszt ou Johannes Brahms.\n[…]\nAntes do final da Primavera, já Schubert se estava a instalar em casa de Franz von Schober, onde permaneceu por oito meses. Por algum tempo ainda tentou contribuir com alguns rendimentos para a sua família, dando aulas de música, mas rapidamente as abandonou, devotando-se inteiramente à composição. \"Escrevo todo o dia\", disse um dia a alguém que o visitava, \"e quando acabo uma peça, começo outra\".\n[…]\nMuitos concordam com a frase de Franz Liszt, que se refere a Schubert como \"le musicien le plus poète qui fut jamais.\" — \"o músico mais poeta que já existiu\". Em clareza de estilo, é dito que é inferior a Mozart; no poder da construção musical, está bem longe de Beethoven, mas, em termos de impulso e sugestão poética, é dificilmente comparável. Escreveu a sua música sempre de forma precipitada e raramente mudava algo que já estava escrito.\n[…]\nMcKay, Elizabeth Norman (1996). Franz Schubert: A Biography (em inglês). [S.l.]: Oxford University Press. ISBN 9780198166818\n[…]\n«Catalog of Works by Franz Schubert»\n[…]\n«Franz Peter Schubert: Master of Song» (em inglês)\n[…]\n«Notes sobre Franz Schubert» (em inglês)  pelo pianista Bart Berman\n[…]\nFranz Schubert no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Georg Friedrich Händel",
      "descricao": "Compositor barroco alemão naturalizado inglês (1685–1759), autor do Messias."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes grandes compositores do Barroco, qual foi o último a morrer?",
    "resposta": "Georg Friedrich Händel",
    "distratores": [
      "Johann Sebastian Bach",
      "Antonio Vivaldi",
      "Arcangelo Corelli"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/George_Frideric_Handel",
      "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach",
      "https://en.wikipedia.org/wiki/Antonio_Vivaldi",
      "https://en.wikipedia.org/wiki/Arcangelo_Corelli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/George_Frideric_Handel",
        "situacao": "ok",
        "texto": "George Frideric (or Frederick) Handel ( HAN-dəl; baptised Georg Fried[e]rich Händel, German: [ˈɡeːɔʁk ˈfʁiːdʁɪç ˈhɛndl̩] ; 5 March 1685 [O.S. 23 February 1684]  – 14 April 1759) was a German-British Baroque composer well-known for his operas, oratorios, anthems, concerti grossi, and organ concerti.\n[…]\nOverhearing this performance and noting the youth of the performer caused the Duke, whose suggestions were not to be disregarded, to recommend to Georg Händel that Handel be given musical instruction. Handel's father engaged the organist at the Halle parish church, the young Friedrich Wilhelm Zachow, to instruct Handel. Zachow would be the only teacher that Handel ever had. Because of his church employment, Zachow was an organist \"of the old school\", revelling in fugues, canons, and counterpoint.\n[…]\nSummarising the field in 2005, the musicologist Richard Taruskin wrote that Handel \"seems to have been the champion of all parodists, adapting both his own works and those of other composers in unparalleled numbers and with unparalleled exactitude.\" Among the composers whose music Handel apparently reused are Alessandro Stradella, Gottlieb Muffat, Alessandro Scarlatti, Domenico Scarlatti Giacomo Carissimi, Georg Philipp Telemann, Carl Heinrich Graun, Leonardo Vinci, Jacobus Gallus, Francesco Antonio Urio, Reinhard Keiser, Francesco Gasparini, Giovanni Bononcini, William Boyce, Henry Lawes, Michael Wise, Agostino Steffani, Franz Johann Habermann, and numerous others.\n[…]\nWorks by George Frideric Handel at Project Gutenberg\n[…]\nFree scores by George Frideric Handel in the Choral Public Domain Library (ChoralWiki)\n[…]\n\"George Frideric Handel cylinder recordings\", Cylinder Audio Archive, University of California, Santa Barbara Library.\n[…]\nKunstDerFuge .mid files: George Frideric Handel – MIDI files"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach",
        "situacao": "ok",
        "texto": "Johann Sebastian Bach (31 March [O.S. 21 March] 1685 – 28 July 1750) was a German composer and musician of the late Baroque period.\n[…]\nJohann Christoph exposed him to the works of composers of the day, including South Germans such as Johann Caspar Kerll, Johann Jakob Froberger, and Johann Pachelbel (under whom Johann Christoph had studied); North Germans such as Georg Böhm, Johann Reincken and Friedrich Nicolaus Bruhns from Hamburg, and Dieterich Buxtehude; Frenchmen such as Jean-Baptiste Lully, Louis Marchand, and Marin Marais; and the Italian Girolamo Frescobaldi. He learned theology, Latin, and Greek at the local Gymnasium.\n[…]\nHis eyesight failing, Bach underwent eye surgery in March 1750 and again in April by the British eye surgeon John Taylor, a man widely understood today as a charlatan and believed to have blinded hundreds of people, including Bach's contemporary George Frideric Handel.\n[…]\nBach also gives as later influences the Germans Reinhard Keiser, Johann Adolph Hasse, Carl Heinrich Graun, Johann Gottlieb Graun, and Georg Philipp Telemann; the Bohemians active in Germany Jan Dismas Zelenka, and Franz Benda; and the British-German George Frideric Handel. Throughout his life, Bach was deeply interested in Italian and French music, seeking to unite the two traditions—particularly the Italian sonata and the French suite—into a \"mixed style\" (vermischte Geschmack).\n[…]\nIn England, Bach was coupled with a revival of religious and Baroque music. By the end of the century, Bach was firmly established as one of the greatest composers, recognised for both his instrumental and his vocal music."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Antonio_Vivaldi",
        "situacao": "ok",
        "texto": "Antonio Lucio Vivaldi (4 March 1678 – 28 July 1741) was an Italian composer, virtuoso violinist, and impresario of Baroque music. Regarded as one of the greatest Baroque composers, Vivaldi's influence during his lifetime was widespread across Europe, giving origin to many imitators and admirers. He pioneered many developments in orchestration, violin technique and programmatic music.\n[…]\nThe German architect Johann Friedrich Armand von Uffenbach referred to Vivaldi as \"the famous composer and violinist\", and noted in his diary: \"Vivaldi played a solo accompaniment excellently, and at the conclusion he added a free fantasy [an improvised cadenza] which absolutely astounded me, for it is hardly possible that anyone has ever played, nor ever will play, in such a fashion.\"  In September 1703, Vivaldi (24) became maestro di violino (master of violin) at the Ospedale della Pietà; although his talents as a violinist probably secured him the job, he soon became a successful teacher of music there.\n[…]\nA real breakthrough as a composer came with his first collection of 12 concerti for one, two, and four violins with strings, L'estro armonico (Opus 3), which was published in Amsterdam in 1711 by Estienne Roger, and dedicated to Grand Prince Ferdinand of Tuscany. The prince sponsored many musicians, including Alessandro Scarlatti and George Frideric Handel. He was a musician himself, and Vivaldi probably met him in Venice. L'estro armonico was a resounding success all over Europe.\n[…]\nAlthough Vivaldi certainly composed many operas in his time, he never attained the prominence of other great composers such as George Frederic Handel, Alessandro Scarlatti, Johann Adolph Hasse, Leonardo Leo, and Baldassare Galuppi, as evidenced by his inability to keep a production running for an extended period of time in any major opera house.\n[…]\nThe Mutopia Project has compositions by Antonio Vivaldi"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Georg_Friedrich_H%C3%A4ndel",
        "situacao": "ok",
        "texto": "Georg Friedrich Händel ou Haendel (Halle an der Saale, 23 de fevereiro de 1685/ 5 de março de 1685 no calendário gregoriano — Londres, 14 de abril de 1759) foi um compositor alemão, naturalizado cidadão britânico em 1726.\n[…]\nque estes plágios que logo vou elencar sejam chamados de roubos musicais, quando passagens inteiras, sujeitos de fugas, e outras partes importantes de uma composição são apropriados por homens a quem, talvez por seu anterior bom caráter, estejamos inclinados a perdoar; mesmo assim, como um aviso a outros, eles absolutamente devem ser levados às barras do Tribunal da Música, onde receberão o pagamento por seus crimes através do veredicto de um júri de críticos... Sr. George Frederick Handel!!\n[…]\nMas sua recuperação pelo resto do público europeu e mesmo entre muitos conhecedores foi lenta, a despeito da publicação de uma biografia muito popular por William Rockstro em 1883 e de uma segunda versão de suas obras completas entre 1858 e 1902 pela Händel-Gesellschaft, um trabalho monumental conduzido em grande parte por Friedrich Chrysander.\n[…]\nEm 1948 sua casa em Halle foi transformada no museu Casa de Händel, e a partir de 1955 a Georg-Friedrich-Händel-Gesellschaft financiou a publicação da edição da Hallische-Händel-Ausgabe, anunciando também a produção de uma outra edição completa, de cunho mais crítico. No mesmo ano Otto Deutsch publicou seu importante trabalho Handel: a Documentary Biography e Edward Dent propiciou a fundação da Handel Opera Society, a fim de divulgar sua obra operística.\n[…]\nObras de George Friedrich Händel no International Music Score Library Project\n[…]\nPartituras gratuitas de Georg Friedrich Händel na CPDL, a Biblioteca Coral de Domínio Público\n[…]\nThe American Handel Society",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Violino",
      "descricao": "Instrumento de quatro cordas friccionadas com arco, o menor e mais agudo da família das cordas da orquestra."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "O violino tem quatro cordas afinadas em intervalos de quinta. Qual delas tem o som mais agudo?",
    "resposta": "A corda mi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Violin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Violin",
        "situacao": "ok",
        "texto": "The violin, sometimes referred to as a fiddle, is a wooden chordophone, and is the smallest, and thus highest-pitched instrument (soprano) in regular use in the violin family. Smaller violin-type instruments exist, including the violino piccolo and the pochette, but these are virtually unused.\n[…]\nThe oboe is generally the instrument used to tune orchestras where violins are present since its sound is penetrating and can be heard over the other woodwinds.) The other strings are then tuned against each other in intervals of perfect fifths by bowing them in pairs. A minutely higher tuning is sometimes employed for solo playing to give the instrument a brighter sound; conversely, Baroque music is sometimes played using lower tunings to make the violin's sound more gentle.\n[…]\nIn Indian classical music and Indian light music, the violin is likely to be tuned to D♯–A♯–D♯–A♯ in the South Indian style. As there is no concept of absolute pitch in Indian classical music, musicians can use any convenient tuning to maintain these relative pitch intervals between the strings. Another prevalent tuning with these intervals is B♭–F–B♭–F, which corresponds to Sa–Pa–Sa–Pa in the Indian carnatic classical music style.\n[…]\nThe Swiss-Cuban violinist Yilian Cañizares mixes jazz with Cuban music.\n[…]\nAs well as the Arabic rababah, the violin has been used in Arabic music.\n[…]\nYoung, Diana. A Methodology for Investigation of Bowed String Performance Through Measurement of Violin Bowing Technique. PhD Thesis. M.I.T., 2007.\n[…]\nEnglish-speaking violin organizations\n[…]\nViolin Society of America Archived 2024-11-10 at the Wayback Machine\n[…]\nBeare's International Violin Society\n[…]\nHarrison, Robert William Frederick (1911). \"Violin\" . Encyclopædia Britannica. Vol. 28 (11th ed.). pp. 102–107.\n[…]\nThe violin: provenance, value and appraisal"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Violino",
        "situacao": "ok",
        "texto": "O violino é um instrumento musical, classificado como Instrumento de cordas ou cordofone. Foi inventado por Gasparo de Salò, um italiano que viveu entre os anos 1540 e 1609. O termo \"violino\" foi introduzido na língua portuguesa no século XX. Até então, a designação do instrumento era rabeca, palavra que ainda se utiliza em muitos lugares.\n[…]\nCravelhas são as peças de madeira (quatro, uma para cada corda), onde se fixam as cordas, e são usadas para afinar o instrumento girando-as em sentido horário ou anti-horário, a fim de retesar ou afrouxar as cordas. Elas são mantidas no lugar pela fricção da madeira contra a madeira, porém ainda assim os violinos desafinam com facilidade, especialmente com mudanças de temperatura, ou em viagens longas. Um violino precisa ser afinado muitas vezes até que as cordas novas se acomodem.\n[…]\nO polegar deve estar apoiado ao de leve no braço do violino, na direção entre os dois primeiros dedos (indicador e médio). O polegar deve estar assim para que os 4 dedos restantes se apoiem com a mesma força nas cordas. Se alguém tiver o polegar maior, este sobressairá para cima do braço do violino junto à corda sol.\n[…]\nCorda dupla [técnica de arco]: Significa tocar, ao mesmo tempo, em duas, três cordas ou até mesmo quatro cordas, e consequentemente duas, três ou quatro notas (sob a forma de acordes), de uma só vez. É possível tocar três ou quatro cordas simultaneamente, sob a forma de acordes, porém pode-se sustentar apenas duas adjacentes.\n[…]\nGlissando (deslizando)[produzido pela mão esquerda]: O violinista escorrega o dedo sobre a corda, tocando todas as notas dentro do intervalo tocado, o que permite que todos os sons interpostos sejam ouvidos. Os glissandi aparecem quase exclusivamente nas músicas do século XX.\n[…]\nLista de violinistas por país\n[…]\nHistória do violino\n[…]\n«Partes do violino em detalhes»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Orquestra sinfônica",
      "descricao": "Grande conjunto instrumental de música erudita, organizado em famílias de cordas, madeiras, metais e percussão."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Numa orquestra sinfônica, qual família de instrumentos costuma reunir o maior número de músicos?",
    "resposta": "Cordas",
    "fonte": [
      "https://en.wikipedia.org/wiki/String_section",
      "https://en.wikipedia.org/wiki/Orchestra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/String_section",
        "situacao": "ok",
        "texto": "The string section of an orchestra is composed of bowed instruments belonging to the violin family. It normally consists of first and second violins, violas, cellos, and double basses. It is the most numerous group in the standard orchestra. In discussions of the instrumentation of a musical work, the phrase \"the strings\" or \"and strings\" is used to indicate a string section as just defined. An or\n[…]\nThere are more variations of set-up with the double bass section, depending on the size of the section and the size of the stage. The basses are commonly arranged in an arc behind the cellos, either standing or sitting on high stools, usually with two players sharing a stand; though occasionally, due to the large width of the instrument, it is found easier for each player to have their own stand.\n[…]\nThe role of the double bass section evolved considerably during the 19th century. In orchestral works from the classical era, the bass and cello would typically play from the same part, labelled \"Bassi\". Given the pitch range of the instruments, this means that if a double bassist and a cellist read the same part, the double bass player would be doubling the cello part an octave lower.\n[…]\nWhile passages for cellos alone (marked senza bassi) are common in Mozart and Haydn, independent parts for both instruments become frequent in Beethoven and Rossini and common in later works of Verdi and Wagner.\n[…]\n\"String section\" is also used to describe a group of bowed string instruments used in rock, pop, jazz and commercial music. In this context the size and composition of the string section is less standardised, and usually smaller, than a classical complement. It usually will not include double basses."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Orchestra",
        "situacao": "ok",
        "texto": "An orchestra ( ; OR-ki-strə) is a large instrumental ensemble typical of classical music or jazz, which combines instruments from different families. There are typically four main sections of instruments:\n[…]\nExamples include the Australian Chamber Orchestra, Amsterdam Sinfonietta & Candida Thompson and the New Century Chamber Orchestra. As well, as part of the early music movement, some 20th and 21st century orchestras have revived the Baroque practice of having no conductor on the podium for Baroque pieces, using the concertmaster or a chord-playing basso continuo performer (e.g., harpsichord or organ) to lead the group.\n[…]\nSome orchestral works specify that an offstage trumpet should be used or that other instruments from the orchestra should be positioned off-stage or behind the stage, to create a haunted, mystical effect. To ensure that the offstage instrumentalist(s) play in time, sometimes a sub-conductor will be stationed offstage with a clear view of the principal conductor. Examples include the ending of \"Neptune\" from Gustav Holst's The Planets.\n[…]\nThe principal conductor leads the large orchestra, and the sub-conductor relays the principal conductor's tempo and gestures to the offstage musician (or musicians). One of the challenges with using two conductors is that the second conductor may get out of synchronization with the main conductor, or may mis-convey (or misunderstand) the principal conductor's gestures, which can lead to the offstage instruments being out of time.\n[…]\nShorthand for orchestra instrumentation\n[…]\nSingleton, Esther (1917). The orchestra and its instruments, New York: The Symphony society of New York"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Sinfonia Pastoral",
      "descricao": "Sexta Sinfonia de Ludwig van Beethoven, de 1808, inspirada na vida no campo."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Das nove sinfonias de Beethoven, qual se diferencia por ter cinco movimentos, e não quatro?",
    "resposta": "A Sexta, Pastoral",
    "fonte": [
      "https://en.wikipedia.org/wiki/Symphony_No._6_(Beethoven)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Symphony_No._6_(Beethoven)",
        "situacao": "ok",
        "texto": "The Symphony No. 6 in F major, Op. 68, also known as the Pastoral Symphony (German: Pastorale), is a symphony composed by Ludwig van Beethoven and completed in 1808. One of Beethoven's few works containing explicitly programmatic content, the symphony was first performed alongside his Fifth Symphony in the Theater an der Wien on 22 December 1808 in a four-hour concert.\n[…]\nHe adds, \"Much more important for an understanding of Beethoven’s view than the headings of the movements is the note that Beethoven caused to be printed in the program of the first performance: 'Pastoral Symphony, more an expression of feeling than painting.'\"\n[…]\nAntony Hopkins, The Nine Symphonies of Beethoven (Scolar Press, 1981, ISBN 1-85928-246-6).\n[…]\nDavid Wyn Jones, Beethoven: Pastoral Symphony (Cambridge University Press, 1995, ISBN 0-521-45684-3).\n[…]\nFrogley, Alain (1995). \"Beethoven's Struggle for Simplicity in the Sketches for the Third Movement of the Pastoral.\" Beethoven Forum, vol. 4, no. 1, pp. 99–134.\n[…]\nKirby, F. E. (October 1970). \"Beethoven's Pastoral Symphony as a Sinfonia caracteristica\". The Musical Quarterly. 56 (4): 605–623. doi:10.1093/mq/LVI.4.605.\n[…]\nLorenz, Christoph L. (1985). \"Beethovens Skizzen zur 'Pastoralen.'\" Die Musikforschung, vol. 38, no. 2, pp. 95–108.\n[…]\nRussell, Tilden (Spring 2003). \"Unification in the Sixth Symphony: The Pastoral Mode.\" Beethoven Forum, vol. 10, no. 1, pp. 1–17.\n[…]\nWill, Richard (Fall 2002). \"The Nature of the Pastoral Symphony.\" Beethoven Forum, vol. 9, no. 2, pp. 205–215.\n[…]\nWill, Richard (July 1977). \"Time, Morality, and Humanity in Beethoven's 'Pastoral' Symphony\". Journal of the American Musicological Society. 50 (2–3): 271–329. doi:10.2307/831836. JSTOR 831836.\n[…]\nBeethoven's Symphony No. 6 (\"Pastoral\") – A Beginners' Guide – Overview, analysis and the best recordings – The Classic Review"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sinfonia_n.%C2%BA_6_%28Beethoven%29",
        "situacao": "ok",
        "texto": "A sinfonia nº 6 em Fá Maior, opus 68 de Ludwig van Beethoven, também chamada Sinfonia Pastoral, é uma obra musical precursora da música programática. Esta sinfonia foi completada em 1808 e teve a sua primeira apresentação no \"Theater an der Wien\" em 22 de dezembro de 18081.\n[…]\nDividida em cinco movimentos, tem por propósito descrever a sensação experimentada nos ambientes rurais. Beethoven insistia que essas obras não deveriam ser interpretadas como um \"quadro sonoro\", mas como uma expressão de sentimentos. É uma das mais conhecidas obras da fase romântica de Beethoven.\n[…]\nAllegretto - \"Hino de ação de graças dos pastores, após a tempestade\"\n[…]\nAnálise da relação música/imagem em fantasia A sinfonia pastoral de Beethoven (em português)\n[…]\nJones, David W. (1996). Beethoven: Symphony No. 9 (Cambridge Music Handbooks). Cambridge University Press. p. 1. ISBN 978-0-521-45684-5.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Sinfonia Fantástica",
      "descricao": "Sinfonia programática do compositor francês Hector Berlioz, de 1830, sobre os delírios de um artista apaixonado."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No último movimento da Sinfonia Fantástica, de Berlioz, um sabá de bruxas cita qual melodia gregoriana sobre o Juízo Final?",
    "resposta": "Dies irae",
    "fonte": [
      "https://en.wikipedia.org/wiki/Symphonie_fantastique"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Symphonie_fantastique",
        "situacao": "ok",
        "texto": "Symphonie fantastique: Épisode de la vie d'un artiste … en cinq parties (Fantastic Symphony: Episode in the Life of an Artist … in Five Sections) Op. 14, is a programmatic symphony written by Hector Berlioz in 1830. The first performance was at the Paris Conservatoire on 5 December 1830, conducted by François-Antoine Habeneck.\n[…]\nShe joins in the diabolical orgy. Funeral knell, burlesque parody of the Dies irae, witches' round dance. The round and the Dies irae together.\n[…]\nThe \"Dies irae\" begins at bar 127, the motif derived from the 13th-century Latin sequence. It is initially stated in unison between the unusual combination of four bassoons and two ophicleides. The key, C minor, allows the bassoons to render the theme at the bottom of their range.\n[…]\nThe Dies irae et Ronde du Sabbat Ensemble section is at bar 414.\n[…]\nThere are a host of effects, including trilling in the woodwinds and col legno in the strings. The climactic finale combines the somber Dies Irae melody, now in A minor, with the fugue of the Ronde du Sabbat, building to a modulation into E♭ major, then chromatically into C major, ending on a C chord.\n[…]\nThe main title sequence from Stanley Kubrick's film The Shining released in 1980, was scored by Wendy Carlos and Rachel Elkind. Within the title track is a reworking of the \"Dies irae\" section of Symphonie fantastique's fifth movement 'Songe D'une Nuit De Sabbat (Dreams of a Witches' Sabbath)'. Later, Zootopia 2 used this theme in a scene imitating The Shining.\n[…]\nThe “Dies irae”  traditional melody is translated from Latin as “day of wrath”. It is a somber chant dating back to the Middle Ages. The melody was originally used as part of funeral church services, usually as a sung mass for the dead. It has been used by composers to symbolise death, perhaps most prominently in Symphonie fantastique."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sinfonia_Fant%C3%A1stica",
        "situacao": "ok",
        "texto": "A Sinfonia Fantástica Opus 14, nome oficial Episódio da Vida de um Artista, Sinfonia Fantástica em Cinco Partes (em francês Épisode de la vie d’un artiste, symphonie fantastique en cinq parties), foi a primeira sinfonia do grande compositor e músico Hector Berlioz, composta no ano de 1830, é o verdadeiro nome da obra, apresentada no dia 5 dezembro de 1830 no Conservatório de Paris, sob a batuta do\n[…]\nA obra é um marco na música francesa, pois inaugura o sinfonismo na França. Berlioz quebra a estrutura formal da sinfonia, formada de quatro movimentos, quando a apresenta com um movimento a mais.\n[…]\nBerlioz redigiu um roteiro impresso em 1831 em que indicava o que o protagonista imaginava em cada movimento da obra. Para o autor, o artista, sob efeito do ópio, tem alucinações e estas são traduzidas em cinco situações indicadas através dos cinco movimentos.\n[…]\nAlguns dias antes da estreia da Sinfonia Fantástica, surgiu na imprensa um texto do próprio Berlioz, descrevendo o 'plano do drama musical' que também estaria impresso no programa de concerto.\n[…]\nsua fantasia. Mas a sua amada aparece de novo, espasmos contraem o seu coração\n[…]\nApenas um dos pastores recomeça a sua melodia rústica. O sol está se pondo. Da\n[…]\nSonho de uma Noite de Sabá - Larghetto; Allegro Assai.\n[…]\nresponder! A melodia da amada soa de novo, mas perdeu o seu caráter de nobreza\n[…]\ne sobriedade. É agora uma ignóbil melodia de dança, trivial e grotesca. Ela vem\n[…]\norgia diabólica. O dobre funéreo e burlesco do Dies Irae. Dança das Feiticeiras. A dança e o Dies Irae se combinam.\n[…]\nSinfonia Fantástica foi executada pela primeira vez em 5 de dezembro de 1830 com a Orquestra formada por membros do Conservatório de Paris, tendo como condutor François-Antoine Habeneck.\n[…]\nSinfonie Fantastique - Descrição da obra em inglês, com links para assuntos correlatos\n[…]\nSinfonia Fantástica - Partituras da Obra",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Orquestra sinfônica",
      "descricao": "Grande conjunto instrumental de música erudita, organizado em famílias de cordas, madeiras, metais e percussão."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As orquestras costumam agrupar seus instrumentos em quatro famílias: cordas, madeiras, percussão e qual outra?",
    "resposta": "Metais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Orchestra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Orchestra",
        "situacao": "ok",
        "texto": "An orchestra ( ; OR-ki-strə) is a large instrumental ensemble typical of classical music or jazz, which combines instruments from different families. There are typically four main sections of instruments:\n[…]\nThe percussion section, including the timpani, snare drum, bass drum, cymbals, triangle, tambourine, tam-tam and mallet percussion instruments\n[…]\nThe typical symphony orchestra consists of four groups of related musical instruments called the woodwinds, brass, percussion, and strings. Other instruments such as the piano, accordion, and celesta may sometimes be grouped into a fifth section such as a keyboard section or may stand alone, as may the concert harp and electric and electronic instruments. The orchestra, depending on the size, contains almost all of the standard instruments in each group.\n[…]\nondes martenot, or trautonium, as well as other non-Western instruments, or other instruments not traditionally used in orchestras including the: bandoneon, free bass accordion, harmonica, jews harp, mandola and water percussion.\n[…]\nSection percussionists play parts assigned to them by the principal percussionist.\n[…]\nThese orchestras consist of students from elementary or secondary school. They may be students from a music class or program or they may be drawn from the entire school body. School orchestras are typically led by a music teacher. In some cases, school orchestras are string orchestras, consisting only of students playing string instruments, with students playing woodwinds, brass and percussion grouped together as a concert band.\n[…]\nShorthand for orchestra instrumentation\n[…]\nSingleton, Esther (1917). The orchestra and its instruments, New York: The Symphony society of New York"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Orquestra",
        "situacao": "ok",
        "texto": "Uma orquestra (do grego antigo ὀρχήστρα, \"lugar de dança\",  por alusão ao espaço semicircular situado em frente ao palco do teatro grego, onde dançava o coro) é um agrupamento  instrumental utilizado geralmente (mas nem sempre) para a execução de música de concerto.\n[…]\nos metais (trompetes, trombones, trompas, tubas)\n[…]\nO principal dos primeiros violinos é designado como chefe não só de toda a secção de cordas mas de toda a orquestra, subordinado unicamente ao maestro, esse violinista é denominado spalla ou maestrino. Nos metais, o trompetista é o líder, enquanto que nas madeiras esse papel cabe ao primeiro flautista.\n[…]\nNo século XIX, a orquestra seguiu uma tendência de aumento na participação dos instrumentos de sopro. Acredita-se que isso foi decorrência direta da Revolução Francesa, e da consequente popularidade das fanfarras ou bandas militares. Assim, à orquestra sinfônica incorporaram-se permanentemente os instrumentos do naipe dos metais, com tendência a aumentar seu uso ao longo do século.\n[…]\nComo são instrumentos de grande potência sonora, o aumento no uso de instrumentos do naipe dos metais levou ao aumento do tamanho da orquestra. Para manter o equilíbrio sonoro com um crescente naipe de metais, as madeiras tiveram de sofrer considerável aumento, chegando a ser comum o uso de madeiras a quatro. Neste caso, para não ficar com a mesmice de quatro instrumentos iguais, cada um desenvolveu-se em uma família própria.\n[…]\nEste aumento em ambos os naipes de sopro levou à necessidade de uma quantidade gigantesca de músicos no naipe das cordas, para que seu volume pudesse ser equilibrado aos demais naipes da orquestra, posto que cada instrumento da família das cordas possui individualmente volume muito inferior aos instrumentos das madeiras e dos metais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Violino",
      "descricao": "Instrumento de quatro cordas friccionadas com arco, o menor e mais agudo da família das cordas da orquestra."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Dentro do violino, uma pequena vareta de madeira entre o tampo e o fundo transmite a vibração. Que nome poético ela recebe em português?",
    "resposta": "Alma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sound_post",
      "https://pt.wikipedia.org/wiki/Violino"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sound_post",
        "situacao": "ok",
        "texto": "In a string instrument, the sound post or soundpost is a dowel inside the instrument under the treble end of the bridge, spanning the space between the top and back plates and held in place by friction. It serves as a structural support for an archtop instrument, transfers sound from the top plate to the back plate and alters the tone of the instrument by changing the vibrational modes of the plat\n[…]\nIn all members of the violin family\n[…]\nThe position of the sound post inside a violin is critical, and moving it by very small amounts (as little as 0.25 – 0.50 mm, or less) can make a big difference in the sound quality and loudness of an instrument. Specialized tools for standing up or moving a sound post are commercially available. Often the pointed end of an S-shaped setter is sharpened with a file and left rough, to grip the post a bit better.\n[…]\nViolin Discussion Forum Section on building and maintaining violins"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Violino",
        "situacao": "ok",
        "texto": "O violino é um instrumento musical, classificado como Instrumento de cordas ou cordofone. Foi inventado por Gasparo de Salò, um italiano que viveu entre os anos 1540 e 1609. O termo \"violino\" foi introduzido na língua portuguesa no século XX. Até então, a designação do instrumento era rabeca, palavra que ainda se utiliza em muitos lugares.\n[…]\nTradicionalmente são instrumentos puramente acústicos, cujo som é amplificado naturalmente pela caixa de ressonância de madeira. A \"voz\" ou som de um violino depende de sua forma, da madeira de que é feito, da graduação (o perfil de espessura) tanto do tampo quanto do fundo, do verniz que reveste sua superfície externa e da habilidade do luthier em realizar todas essas etapas.\n[…]\nCavalete é a peça na qual se apoiam as 4 cordas distendidas. A parte inferior do cavalete - dois pequenos pés - fica apoiada no plano harmônico do violino (tampo superior - o inferior chama-se fundo). Sua curvatura superior mantém as cordas à altura adequada, permitindo que cada uma seja tocada separadamente pelo arco. Pequenas ranhuras no cavalete mantêm as cordas no lugar.\n[…]\nO cavalete transforma as vibrações horizontais em verticais e depois transmite as vibrações das cordas para o corpo do violino.\n[…]\nA execução mais comum é a fricção do arco nas cordas. Antes de tocar o instrumento, o violinista passa sobre as cerdas uma resina chamada breu, que tem o efeito de produzir o atrito entre as cerdas e as cordas, gerando o som. O som produzido pelas cordas é transmitido ao corpo oco do violino, denominado caixa de ressonância, pela alma, um cilindro de madeira que fica dentro do corpo do violino, mais ou menos abaixo do lado direito do cavalete.\n[…]\nA alma liga, mecânica e acusticamente, o tampo superior ao inferior do violino, fazendo com que o som vibre por todo o seu corpo.\n[…]\n«Partes do violino em detalhes»"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Arco (instrumento musical)",
      "descricao": "Vara de madeira com fios esticados usada para friccionar as cordas do violino, da viola, do violoncelo e do contrabaixo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O arco usado para tocar violino e violoncelo tem, tradicionalmente, fios de qual material de origem animal?",
    "resposta": "Crina de cavalo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bow_(music)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bow_(music)",
        "situacao": "ok",
        "texto": "In music, a bow () is a tensioned stick which has hair (usually horse-tail hair) coated in rosin (to facilitate friction) affixed to it. It is moved across some part (generally some type of strings) of a musical instrument to cause vibration, which the instrument emits as sound. The vast majority of bows are used with string instruments, such as the violin, viola, cello, and bass, although some bo\n[…]\nA bow consists of a specially shaped stick with other material forming a ribbon stretched between its ends, which is used to stroke the string and create sound. Different musical cultures have adopted various designs for the bow. For instance, in some bows a single cord is stretched between the ends of the stick. In the Western tradition of bow making—bows for the instruments of the violin and viol families—a hank of horsehair is normally employed.\n[…]\nThe characteristic long, sustained, and singing sound produced by the violin, viola, violoncello, and double bass is due to the drawing of the bow against their strings. This sustaining of musical sound with a bow is comparable to a singer using breath to sustain sounds and sing long, smooth, or legato melodies.\n[…]\nGenerally, the player uses down-bow for strong musical beats and up-bow for weak beats. However, this is reversed in the viola da gamba—players of violin family instruments look like they are \"pulling\" on the strong beats, where gamba players look like they are \"stabbing\" on the strong beats.\n[…]\nIn vernacular speech, the bow is occasionally called a fiddlestick. Bows for particular instruments are often designated as such: violin bow, cello bow, and so on.\n[…]\nRoda, Joseph H. (1959). Bows for Musical Instruments. Chicago: W. Lewis. OCLC 906667.\n[…]\nMastering New Materials: Commissioning an Amber Bow, no.65\n[…]\nThe violin bow: a brief depiction of its history\n[…]\nBows used in traditional music (Polish folk musical instruments)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arco_%28m%C3%BAsica%29",
        "situacao": "ok",
        "texto": "O arco é um dispositivo utilizado para produção de som em idiofones ou cordas a partir da fricção destes com um feixe de crina.\n[…]\nO arco é feito de madeira (especialmente de pau-brasil) e fios de crina de cavalo (ou de plástico tipo nylon), que são ajustados às duas extremidades da peça de madeira, longa e curva. A crina tem ajuste de tensão feito por um parafuso colocado no talão, extremidade que é segurada pela mão direita do músico (a outra extremidade do arco denomina-se ponta).\n[…]\nA crina deve ser afrouxada quando o arco não está sendo usado para preservar a flexibilidade da madeira.Dentre os instrumentos mais comuns que utilizam o arco estão as cordas, como é caso do violino, a viola, o violoncelo e o contrabaixo. É também utilizado em outros instrumentos, como vibrafones (friccionando a borda da tecla) e serrote.\n[…]\nUm fabricante de arcos, ou archetier, geralmente utiliza entre 150 e 200 crinas da cauda de um cavalo para um arco de violino. Arcos para outros membros da família do violino normalmente têm uma faixa de crina mais larga, utilizando mais fios.\n[…]\nExiste uma crença amplamente difundida entre instrumentistas de cordas — ainda não comprovada ou refutada cientificamente — de que a crina branca produz um som mais “suave”, enquanto a crina preta (usada principalmente em arcos de contrabaixo) é mais grossa e, portanto, produz um som mais “áspero”. Arcos de qualidade inferior (baratos) muitas vezes utilizam nylon ou crina sintética, e alguns usam crina de cavalo descolorida para simular maior qualidade.\n[…]\nGuitarra com arco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Bachianas Brasileiras nº 5",
      "descricao": "Quinta suíte do ciclo Bachianas Brasileiras, de Heitor Villa-Lobos, famosa pela Ária para voz de soprano."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Bachianas Brasileiras número cinco, de Villa-Lobos, com sua célebre Ária, foi escrita para soprano e um conjunto de qual instrumento?",
    "resposta": "Violoncelos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bachianas_Brasileiras"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bachianas_Brasileiras",
        "situacao": "ok",
        "texto": "The Bachianas Brasileiras (Portuguese pronunciation: [bakiˈɐ̃nɐz bɾaziˈlejɾɐs]) (an approximate English translation might be Bach-inspired Brazilian pieces) are a series of nine suites by the Brazilian composer Heitor Villa-Lobos, written for various combinations of instruments and voices between 1930 and 1945.\n[…]\nScored for soprano and orchestra of eight cellos and dedicated to Arminda Villa-Lobos, Bachianas Brasileiras No. 5 (1938/45) consists of two movements:\n[…]\nBecause Villa-Lobos dashed off compositions in feverish haste and preferred writing new pieces to revising and correcting already completed ones, numerous slips of the pen, miscalculations, impracticalities or even impossibilities, imprecise notations, uncertainty in specification of instruments, and other problems inescapably remain in the printed scores of the Bachianas, and require performers to take unusual care to decipher what the composer actually intended.\n[…]\nVilla-Lobos made a number of recordings of the Bachianas Brasileiras, including a complete recording of all nine compositions made in Paris for EMI in the 1950s, with the French National Orchestra and Victoria de los Ángeles as the soprano soloist in No. 5. These landmark recordings were issued in several configurations on LP and were later reissued on CD.\n[…]\nArcanjo, Loque. 2008. O ritmo da mistura e o compasso da história: o modernismo musical nas Bachianas Brasileiras de Heitor Villa-Lobos. Rio de Janeiro: E-papers. ISBN 978-85-7650-164-0.\n[…]\nNóbrega, Adhemar. 1976. As Bachianas brasileiras de Villa-Lobos, second edition. Rio de Janeiro: Museu Villa-Lobos.\n[…]\nPalma, Enos da Costa, and Edgard de Brito Chaves Júnior. 1971. As Bachianas brasileiras de Villa-Lobos. Rio de Janeiro: Companhia Editôra Americana."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bachianas_brasileiras",
        "situacao": "ok",
        "texto": "As Bachianas brasileiras são uma série de nove composições por Heitor Villa-Lobos, escritas entre 1930 e 1945.\n[…]\nNessas suítes, escritas para formações diversas, Villa-Lobos fundiu material folclórico brasileiro (em especial a música caipira) às formas pré-clássicas de Bach, cuja influência é sentida até mesmo no título da série - o sufixo \"-ana\" é frequentemente usado nos títulos de obras musicais como uma forma de prestar homenagem a um compositor anterior -  e nos movimentos, que receberam dois títulos: um inspirado na tradição barroca e outro brasileiro.\n[…]\nNas Bachianas, Villa-Lobos emprega o contraponto e a complexidade harmônica típicos da música de Bach e os combina com a qualidade lírica do canto operático e da canção brasileira.\n[…]\nAssim como a nº 1, foi composta em 1930. Foi estreada no II Festival Internacional de Veneza, em setembro de 1934, pelo compositor e regente italiano Alfredo Casella. Esta obra é dedicada a Arminda Villa-Lobos, a Mindinha (1912-1985), segunda esposa do compositor. Existem quatro movimentos, cada um reexplorando alguma peça mais antiga para piano ou para violoncelo e piano.\n[…]\nEstreou em 1947, tendo como pianista José Vieira Brandão e como regente o próprio Villa-Lobos. Contém quatro movimentos:\n[…]\nAria (Cantilena) — Adagio\n[…]\nDedicada a Arminda Villa-Lobos. A letra deste movimento é de Ruth Valadares Corrêa, e a composição possui semelhanças com obras como a \"Ária\" de Bach e o \"Vocalise\" de Rachmaninov.\n[…]\nÁria (Choro) — Largo\n[…]\nÁria (Modinha) — Largo\n[…]\nFabio Gomes (2004). «Bachianas brasileiras: Villa-Lobos e a Influência de Bach». Consultado em 16 de dezembro de 2007",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Quadros de uma Exposição",
      "descricao": "Suíte para piano de Modest Mussorgsky, de 1874, inspirada em obras do artista Viktor Hartmann."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que monumento ucraniano dá nome ao grandioso movimento final de Quadros de uma Exposição, de Mussorgsky?",
    "resposta": "A Grande Porta de Kiev",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition",
        "situacao": "ok",
        "texto": "Pictures at an Exhibition is a piano suite in ten movements, plus a recurring and varied Promenade theme, written in 1874, by Russian composer Modest Mussorgsky. It is a musical depiction of a tour of an exhibition of works by architect and painter Viktor Hartmann put on at the Imperial Academy of Arts in Saint Petersburg, following his sudden death in the previous year. Each movement of the suite\n[…]\nThe first section's alternating loud and soft chords evoke the grandeur, stillness, and echo of the catacombs. The second section suggests a merging of observer and scene as the observer descends into the catacombs. Mussorgsky's manuscript of \"Catacombs\" (shown right) displays two pencilled notes, in Russian: \"NB – Latin text: With the dead in a dead language\" and, along the right margin, \"Well may it be in Latin!\n[…]\nStasov's comment: \"Hartmann's sketch was his design for city gates at Kiev in the ancient Russian massive style with a cupola shaped like a slavonic helmet.\"\n[…]\nThe same thing can be heard in the Michael Jackson: 30th Anniversary Celebration, which during the Jacksons's ultimate medley, after Can You Feel It, the song starts and then ABC starts. A section of \"The Great Gate of Kiev\" has also served as the long-standing entrance music for pro wrestler Jerry \"The King\" Lawler.\n[…]\nMussorgsky, M., Pictures from an Exhibition (score), edited by P. Lamm. Moscow: Muzgiz, 1931\n[…]\nMussorgsky, M., Pictures from an Exhibition (manuscript facsimile). Moscow: Muzïka, 1975\n[…]\nMussorgsky, M., Pictures from an Exhibition (score), edited by N. Rimsky-Korsakov. Saint-Petersburg: V. Bessel & Co., 1886\n[…]\nOrga, Ates, \"Mussorgsky's Pictures at an Exhibition on record\". International Piano Quarterly 2, no. 5 (Autumn 1998): 32–47.\n[…]\nPictures at an Exhibition: Scores at the International Music Score Library Project\n[…]\nListening guide to Pictures at an Exhibition based on Simon Tedeschi's recording on ABC Classics."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quadros_de_uma_Exposi%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Quadros de uma Exposição (russo:  Картинки с выставки – Воспоминание о Викторе Гартмане, Kartínki s výstavki – Vospominániye o Víktore Gártmane, tradução literal \"Quadros de uma Exposição – Uma Lembrança de Viktor Hartmann\"; em francês:  Tableaux d'une exposition) é uma peça (suíte) escrita para piano por Modest Mussorgsky em junho de 1874. Viktor Hartmann, arquiteto e pintor, grande amigo de Muss\n[…]\nComposta em uma época em que o piano era instrumento de brilho virtuosístico, a suíte foi durante algum tempo ignorada. Claude Debussy, grande compositor francês, era admirador confesso de Mussorgsky e estudou bastante esta suíte, pelo seu caráter singular.\n[…]\nQuadros de uma Exposição descreve, em metáforas, através das notas do piano, um passeio em  uma  exposição de quadros, tendo os temas como guia. As músicas isoladas dos quadros  são unidas por um tema inicial e por quatro “intermezzo” da mesma melodia,  interpretada com diferentes harmonias através da obra.\n[…]\n”La Grande Porte de Kiev” (A Grande Porta de Kiev) – Allegro alla breve. Maestoso. Con grandezza.\n[…]\nNo verão europeu de 1922, atendendo a um pedido de Serge Koussevitzky, Maurice Ravel, compositor francês, orquestrou em Lyons-la-Forêt, França o original pianístico da peça. Ao fazê-lo, Ravel prestou um grande serviço a Mussorgsky. Grande parte da posterior popularidade da obra se deve ao excelente serviço por ele realizado. Porém, Ravel realizou a instrumentação de “Quadros de uma Exposição” à sua própria maneira, já que não conhecia as orquestrações realizadas por Mussorgsky.\n[…]\nCalvocoressi, M.D., Abraham, G., Mussorgsky, 'Master Musicians' Series, London: J.M.Dent & Sons, Ltd., 1946\n[…]\nCalvocoressi, M.D., Modest Mussorgsky: His Life and Works, London: Rockliff, 1956\n[…]\nRuss, Michael. Mussorgsky: Pictures at an Exhibition (Cambridge University Press, Cambridge, UK; 1992). ISBN 0-521-38607-1 (paperback), ISBN 0-521-38442-7 (hardback).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Quinteto A Truta",
      "descricao": "Quinteto com piano em lá maior de Franz Schubert, de 1819, cujo quarto movimento varia sua canção A Truta."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Quinteto A Truta, de Schubert, o piano se junta a violino, viola, violoncelo e qual instrumento pouco comum nesse tipo de formação?",
    "resposta": "Contrabaixo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trout_Quintet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trout_Quintet",
        "situacao": "ok",
        "texto": "The Trout Quintet (Forellenquintett) is the popular name for the Piano Quintet in A major, D. 667, by Franz Schubert. The piano quintet was composed in 1819, when he was 22 years old; it was not published, however, until 1829, a year after his death.\n[…]\nRather than the usual piano quintet ensemble of piano and string quartet, the Trout Quintet is written for piano, violin, viola, cello and double bass.\n[…]\nAccording to Schubert's friend Albert Stadler, it was modelled on an arrangement of Johann Nepomuk Hummel's then-popular Septet in D Minor for Flute, Oboe, Horn, Viola, Cello, Bass and Piano, Op. 74. That arrangement, using the same, somewhat unusual instrumentation chosen by Schubert, had been published in Vienna in about 1817, only a few years before the composition of the Trout Quintet. It may also have been influenced by Hummel's Quintet in E flat minor, Op. 87 .\n[…]\nThe fourth movement is a theme and variations on Schubert's Lied \"Die Forelle\". As typical of some other variation movements by Schubert (in contrast to Beethoven's style), the variations do not transform the original theme into new thematic material; rather, they concentrate on melodic decoration and changes of mood. In each of the first few variations, the main theme is played by a different instrument or group.\n[…]\nThe Trout Quintet has a unique sonority among chamber works for piano and strings, due mainly to the piano part, which for substantial sections of the piece concentrates on the highest register of the instrument, with both hands playing the same melodic line an octave apart (having been freed to do so by the inclusion of both cello and bass in the ensemble).\n[…]\nTrout Quintet: Scores at the International Music Score Library Project"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "O Carnaval dos Animais",
      "descricao": "Suíte musical humorística de Camille Saint-Saëns, de 1886, com movimentos sobre animais."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em O Carnaval dos Animais, de Saint-Saëns, entre leões, cangurus e tartarugas, um movimento zomba de que tipo de músico?",
    "resposta": "Pianistas",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Carnival_of_the_Animals"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Carnival_of_the_Animals",
        "situacao": "ok",
        "texto": "The Carnival of the Animals (French: Le Carnaval des animaux) is a humorous musical suite of 14 movements, including \"The Swan\", by the French composer Camille Saint-Saëns. About 25 minutes long, it was written for private performance by two pianos and chamber ensemble; Saint-Saëns prohibited public performance of the work during his lifetime, feeling that its frivolity would damage his standing a\n[…]\nPianistes depicts piano students labouring over their scales in Hanon- and Czerny-style exercises.\n[…]\nReaders included Arte Johnson (Introduction and Finale), Charlton Heston (Royal March of The Lion), James Earl Jones (Hens and Roosters), Betty White (Wild Donkeys), Lynn Redgrave (Tortoises), William Shatner (The Elephant), Joan Rivers (Kangaroos), Ted Danson (Aquarium), Lily Tomlin (Characters with Long Ears), Deborah Raffin (The Cuckoo), Audrey Hepburn (Aviary), Dudley Moore (Pianists), Walter Matthau (Fossils) and Jaclyn Smith (The Swan).\n[…]\nThe finale for the suite was used as music for one of the segments in the 1999 Disney film, Fantasia 2000, performed by the Chicago Symphony Orchestra. In it, a slapstick flamingo plays with a yo-yo, much to the chagrin of the other flamingoes, who attempt to entice him into doing the same \"dull\" routine as them. Gail Niwa and Philip Sabransky are the featured pianists in this recording.\n[…]\nRatner, Sabina Teller (2002). Camille Saint-Saëns, 1835–1921: A Thematic Catalogue of his Complete Works, Volume I: The Instrumental Works. Oxford: Oxford University Press. ISBN 978-0-19-816320-6.\n[…]\nSaint-Saëns, Camille (1957) [1922]. Le Carnaval des animaux: grande fantaisie zoologique. Paris: Durand. OCLC 31227464.\n[…]\nStegemann, Michael (1991). Camille Saint-Saëns and the French solo concerto from 1850 to 1920. Lanham: Amadeus Press. ISBN 978-0-93-134035-2.."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Carnaval_dos_Animais",
        "situacao": "ok",
        "texto": "O Carnaval dos Animais, em francês, Le Carnaval des Animaux, é uma peça para dois pianos e orquestra do compositor francês Camille Saint-Saëns composta em fevereiro de 1886, quando o compositor passava férias em uma pequena aldeia na Áustria, após ter chegado de uma turnê sem muito sucesso na Alemanha.\n[…]\nTema original de Saint-Saëns, os dois pianos trinam e arpejam; as cordas abrem a marcha do soberbo animal, imitando seus rugidos.\n[…]\nTema original de Saint-Saëns, em um presto furioso, os dois pianos lançam-se em escalas em clima de loucura, e nunca se se alcançam.\n[…]\nVI - Cangurus (Kangourous)\n[…]\nTema original de Saint-Saëns, os pianistas 'saltitam', hesitam, param.\n[…]\nNesse tema original de Saint-Saëns, atuam a flauta, a celesta, os dois pianos e as cordas. As flautas dão um sentido de ondas, os pianos um sentido de nadar, a celesta faz parecer gotas de água.\n[…]\nTema original de Saint-Saëns, uma flauta chilreia com acompanhamento dos pianos e das cordas com a intenção de nos lembrar passarinhos em revoada.\n[…]\nXI - Pianistas (Pianistes)\n[…]\nInspirada em pianistas iniciantes que incomodavam Saint-Saëns, e que era, segundo o compositor, 'verdadeiros animais, e não dos menos barulhentos'. Nesse movimento, os pianistas devem imitar o toque de um aluno de piano iniciante, alternado em escalas e terças duplas, com notas desafinadas. As cordas rangem, irritam-se e interrompem o insuportável duo.\n[…]\nAs antiguidades – uma série de citações que se encadeiam vivamente. A Danse Macabre do próprio Saint-Saëns surge como um leitmotiv do movimento, com o xilofone imitando ossos batendo uns nos outros.\n[…]\nTema original de Saint-Saëns, o violoncelo toca sobre as harmonia dos pianos. No final ele \"adormece\".\n[…]\nUm desfile de toda a bicharada, onde desfilam os principais temas ouvidos durante a obra, inclusive a dos pianistas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Lo Schiavo",
      "descricao": "Ópera de Carlos Gomes sobre a escravidão no Brasil colonial, estreada em 1889 e dedicada à Princesa Isabel."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na ópera Lo Schiavo, de Carlos Gomes, o escravo protagonista é um indígena. Qual é o nome dele?",
    "resposta": "Iberê",
    "distratores": [
      "Peri",
      "Ubirajara",
      "Poti"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lo_schiavo",
      "https://pt.wikipedia.org/wiki/Lo_Schiavo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lo_schiavo",
        "situacao": "ok",
        "texto": "Lo schiavo (O escravo in Portuguese, The Slave in English) is an opera in four acts by the Brazilian composer Antônio Carlos Gomes. The Italian libretto was by Rodolfo Paravicini (1828–1900), after a 1876 play, Les Danicheff, by Alexandre Dumas fils and the travel experiences of Alfredo Taunay. The opera deals with the subject of slavery, a major concern in Brazil at the time (the institution had \n[…]\nBeing fed up with his son's love interest, the Count sends Americo to Rio de Janeiro to fight against the native uprising and promises to ratify his marriage to Illara when he returns. But the Count instead marries Illara and Ibere and sells them on a slave market in Guanabara.\n[…]\nA French garrison has been created to help the natives fight against the Portuguese conquerors. Countess of Boissy, known for her abolitionist sympathies, invites Americo to her home. She begins to fall in love with him but he refuses due to his devotion to Ilara. Later, she organizes the liberation of her slaves and to Americo's surprise, Ilara and Ibere are among them. He begins to feel anger and vows to kill Ibere.\n[…]\nNow free, Ibere tries hard to win the eye of Ilara who refuses because of her faithfulness to Americo. Reluctantly, Ibere accepts the situation and joins the anti-Portuguese force.\n[…]\nLeading various tribes, Ibere charges the Portuguese forces, although at the same time internally dealing with the loss of his former love and realization of her love to Americo. The orchestra depicts the battle and the sounds of the animals, environment, and the forces battling each other. Americo is eventually imprisoned and brought to Ibere but is freed by him. Americo and Ilara try to escape but are caught. However, Ibere kills himself in their place out his respect for the couple's love.\n[…]\nLo schiavo (Gomes): Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lo_Schiavo",
        "situacao": "ok",
        "texto": "Lo schiavo (O Escravo) é uma ópera do compositor brasileiro, Antônio Carlos Gomes (1836 - 1896). O tema é baseado na obra original do escritor brasileiro Alfredo d'Escragnolle Taunay (1843 - 1889). Foi reproduzida no Brasil em 2004, em Campinas, com a orquestra sinfônica Municipal, com os corais PUC-Campinas e Zíper na Boca. A regência de Claudio Cruz e a preparação vocal de Ana Yara Campos.\n[…]\n«O Acervo Oficial de Antônio Carlos Gomes no \"Centro de Ciências, Letras e Artes\",Campinas» 🔗\n[…]\n«ES&DF, Die aufgeführten Komponisten, Antônio Carlos Gomes» (em alemão)"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Prelúdio à Tarde de um Fauno",
      "descricao": "Poema sinfônico de Claude Debussy, de 1894, inspirado num poema de Stéphane Mallarmé."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Prelúdio à Tarde de um Fauno, de Debussy, começa com um solo sinuoso de qual instrumento de sopro?",
    "resposta": "Flauta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Prélude_à_l'après-midi_d'un_faune"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Prélude_à_l'après-midi_d'un_faune",
        "situacao": "ok",
        "texto": "Prélude à l'Après-midi d'un faune (L. 86), known in English as Prelude to the Afternoon of a Faun, is a symphonic poem for orchestra by Claude Debussy, approximately 10 minutes in duration. It was composed in 1894 and first performed in Paris on 22 December 1894, conducted by Gustave Doret. The flute solo was played by Georges Barrère.\n[…]\nThe composition was inspired by the poem L'après-midi d'un faune by Stéphane Mallarmé. It is one of Debussy's most famous works and is considered a turning point in the history of Western art music, as well as a masterpiece of Impressionist composition. Pierre Boulez considered the score to be the beginning of modern music, observing that \"the flute of the faun brought new breath to the art of music.\" The work is dedicated to the composer Raymond Bonheur, son of the painter Auguste Bonheur.\n[…]\nAlthough many refer to the Prélude à l'Après-midi d'un faune as a tone poem, it lacks the musically programmatic form of the style; instead, the slow and mediated melody and layered orchestration as a whole evoke the eroticism of Mallarmé's poem.\n[…]\nClaude Debussy himself transcribed the piece for performance on two pianos in 1895.\n[…]\nWilliam W. Austin, ed. (1970). Debussy – Prelude to \"The Afternoon of a Faun\". An Authoritative Score – Mallarmé's Poem – Background and Sources – Criticism and Analysis. Norton Critical Scores. New York, London: W. W. Norton. ISBN 9780393021455 – via Internet Archive.\n[…]\nHendrik Lücke: \"Mallarmé – Debussy. Eine vergleichende Studie zur Kunstanschauung am Beispiel von L'Après-midi d'un Faune\". (Studien zur Musikwissenschaft, vol. 4). Dr. Kovac, Hamburg 2005, ISBN 3-8300-1685-9.\n[…]\nPrélude à l'après-midi d'un faune: Scores at the International Music Score Library Project\n[…]\nPrélude à l'après-midi d'un faune, score, patachonf.free.fr"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pr%C3%A9lude_%C3%A0_l%27apr%C3%A8s-midi_d%27un_Faune",
        "situacao": "ok",
        "texto": "Prélude à l'après-midi d'un Faune (Prelúdio à Tarde de um Fauno) é um poema sinfônico composto por Claude Debussy, músico clássico francês, entre 1892 e  1894, baseado em um poema de Stéphane Mallarmé. Sua estréia se deu em Paris na  Société Nationale de Musique, no dia 22 de dezembro de 1894 sob a direção de Gustave Doret. Alguns críticos consideram sua apresentação como marco inicial da música m\n[…]\nA música é baseada no poema L'Après-midi d'un faune de Stéphane Mallarmé, escrito em 1865 e publicado em 1876,  com ilustrações do pintor impressionista francês, Édouard Manet. O  poema conta a história, em um clima sensual,  de um fauno que toca sua flauta  nos bosques e fica excitado com a passagem de ninfas e náiades, tentando alcançá-las em vão.\n[…]\nDebussy procurou considerar  \"a impressão geral do poema\"  ilustrada por instrumentos que realçam e colorem as emoções e as impressões das passagens invocadas. Segundo o autor \"…São na verdade sucessivos cenários por onde se movem os desejos e os sonhos do fauno no calor da tarde\". Debussy denominou a esta peça de \"Prelúdio\" porque tencionava escrever uma suíte (prelúdio, interlúdio e parafrase final). Porém, nunca o fez, ficando só a primeira parte.\n[…]\nPrélude à l'après-midi d'un Faune (Prelúdio à Tarde de um Fauno) - très modéré - duração: 10 minutos  (aproximadamente).\n[…]\n«Prélude à l'après-midi d'un Faune em mp3  -  Columbia University Orchestra.»\n[…]\n«Partitura de Prélude à l'après-midi d'un Faune no  IMSLP»\n[…]\n«Outro site com a partitura de Prélude à l'après-midi d'un Faune de Claude Debussy»\n[…]\nJean-Michel Nectoux: L'Après-midi d'un Faune : Mallarmé, Debussy, Nijinsky. Les Dossiers du Musée d'Orsay, N°29 (Ausstellungskatalog), Paris 1989.\n[…]\nHendrik Lücke: Mallarmé - Debussy. Eine vergleichende Studie zur Kunstanschauung am Beispiel von \"L'Après-midi d'un Faune\". Studien zur Musikwissenschaft, Bd. 4. Hamburg 2005, ISBN 3-8300-1685-9.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Trombone",
      "descricao": "Instrumento de sopro de metal da orquestra em que a altura das notas é alterada por uma vara deslizante."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Qual instrumento de metal da orquestra muda as notas deslizando uma vara, em vez de apertar pistos?",
    "resposta": "Trombone",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trombone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trombone",
        "situacao": "ok",
        "texto": "The trombone is a musical instrument in the brass family. As with all brass instruments, sound is produced when the player's lips vibrate inside a mouthpiece, causing the air column inside the instrument to vibrate. Nearly all trombones use a telescoping slide mechanism to alter the pitch instead of the valves used by other brass instruments. The valve trombone is an exception, using three valves \n[…]\nThe smallest sizes are found on jazz trombones and older narrow-bore instruments, while the larger sizes are common on orchestral models. Bass trombone bells can be 10+1⁄2 in (27 cm) or more, with most being between 9+1⁄2 and 10 in (24 and 25 cm). The bell may be made from two separate brass sheets or from one single piece of metal, hammered on a mandrel to shape it.\n[…]\nGerman trombones have been built in a wide variety of bore and bell sizes. The traditional German Konzertposaune can differ substantially from American designs in many aspects. The mouthpiece is typically rather small and is placed into a slide section with a very long leadpipe of at least 12 to 24 inches (30–60 cm). The whole instrument is typically made of gold brass. They are constructed using very thin metal (especially in the bell section), and many have a metal ring called a Kranz (lit.\n[…]\nA similar marching trombone is the \"trombonium\" first produced by King Musical Instruments, wrapped and held vertically like a euphonium.\n[…]\nTrombones in slide and valve configuration have been made by a vast array of musical instrument manufacturers. For the brass bands of the late 19th and early 20th century, prominent American manufacturers included Graves and Sons, E. G. Wright and Company, Boston Musical Instrument Company, E. A. Couturier, H. N. White Company/King Musical Instruments, J. W. York, and C.G. Conn.\n[…]\nNPR story about trombone bands (2003)\n[…]\nOverview of trombones on the MIMO (Musical Instrument Museums Online) portal"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trombone",
        "situacao": "ok",
        "texto": "O trombone é um aerofone da família dos metais cuja invenção remonta ao século XV. Seu nome deriva do italiano e significa trompete grande. É mais grave que o trompete e mais agudo que a tuba e, não sendo um instrumento transpositor, tem sua notação na clave de fá - para as regiões grave e média da tessitura - e clave de dó na quarta ou terceira linha - para os médios e agudos. Eventualmente, espe\n[…]\nPor isso, à época, foi considerado o mais perfeito instrumento de bocal.\n[…]\nChegamos hoje ao atual trombone de vara tenor em sib usado em diversos países, tendo preferências nas Jazz-bands, bandas sinfônicas, orquestras de estações de rádios, orquestras de salão, orquestras sinfônicas e filarmônicas, o qual, pela exata proporção das medidas entre suas várias partes e a ótima qualidade do metal empregado em sua fabricação, permite obter afinação precisa e formosa qualidade de som, realizando assim todas as exigências da orquestração moderna.\n[…]\nOs calibres acima podem variar de acordo com o fabricante. Apesar dos três modelos acima serem em Bb, eles são bem diferentes por causa do seu calibre. O calibre muda muito o timbre do instrumento. O Trombone Baixo hoje em dia é fabricado em Bb, porém com um calibre maior que o Tenor Sinfônico, e com dois rotores que afinam em F, Gb e quando os dois acionados juntos afinam em D.\n[…]\nOutro fato é que apesar do trombone ser conhecido por ter a afinação em Bb, a sua escrita é realizada em C, portanto o trombone não é um instrumento transpositor, como o trompete é por exemplo.\n[…]\nAlguns trombones têm válvulas (pistos) em vez de uma vara (ver trombone de válvula). Estes podem ser válvulas rotativas, válvulas de pistão, ou válvulas de disco. Válvulas de discos são versões modernas de uma válvula inventado na década de 1820, que foi descartado em favor do rotativo e a válvula Périnet (pistão).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Tocata e Fuga em ré menor",
      "descricao": "Obra catalogada como BWV 565, atribuída a Johann Sebastian Bach, muito associada a filmes de terror."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A Tocata e Fuga em ré menor, atribuída a Bach e associada a filmes de terror, foi escrita para qual instrumento?",
    "resposta": "Órgão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toccata_and_Fugue_in_D_minor,_BWV_565"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toccata_and_Fugue_in_D_minor,_BWV_565",
        "situacao": "ok",
        "texto": "The Toccata and Fugue in D minor, BWV 565, is a composition for organ from the Baroque period which was long attributed to the German composer Johann Sebastian Bach, but whose authorship has been questioned by a minority of scholars since 1981. It is one of the most widely recognisable works in the organ repertoire. It was written between 1704 and the 1750s.\n[…]\nThe title page of Ringk's manuscript writes the title of the work in Italian as Toccata con Fuga, names J. S. Bach, and indicates its tonality as \"ex. d. #.\", which is usually seen as the key signature being D minor. However, in Ringk's manuscript the staves have no ♭ symbol at the key (which would later become the standard way to write down a piece in D minor). Most modern score editions of BWV 565 use the D minor key signature, unlike Ringk's manuscript.\n[…]\nAnother piece listed as Bach's was also known as Toccata and Fugue in D minor, which received the \"Dorian\" nickname, that qualifier being effectively used to distinguish it from BWV 565.\n[…]\nIn 1833, BWV 565 was published for the first time, in the third of three bundles of \"little-known\" organ compositions by Bach. The edition was conceived and partly prepared by Felix Mendelssohn, who already had BWV 565 in his repertoire by 1830. In 1846, C. F. Peters published the Toccata con Fuga as No. 4 in their fourth volume of organ compositions by Bach. In 1867, the Bach Gesellschaft included it in Band 15 of its complete edition of Bach's works. Novello published the work in 1886 as No.\n[…]\n1 in their sixth volume of Bach's organ works.\n[…]\nAlbrecht, Timothy E. (1980). \"Musical Rhetoric in J.S. Bach's Organ Toccata BWV 565\" pp. 84–94 in Organ Yearbook Vol. 11\n[…]\nToccata en fuga voor orgel BWV.565 in d kl.t. at Muziekweb website\n[…]\nBach, Johann Sebastian – Toccata and Fugue in D minor, BWV 565, wikipiano.wikidot.com – Accessed 3 April 2016"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tocata_e_Fuga_em_R%C3%A9_Menor%2C_BWV_565",
        "situacao": "ok",
        "texto": "Tocata e Fuga em Ré Menor, BWV 565 é uma peça de música de órgão escrita por Johann Sebastian Bach entre 1703 e 1707. A sua autoria e instrumentação são objeto de controvérsia, já que alguns estudiosos afirmaram que foi escrita de origem para violino por um outro compositor. É um dos trabalhos mais famosos do repertório de órgão e é usada em muitos filmes, videojogos e como tema para música rock.\n[…]\nA peça começa com uma Tocata (peça que exige habilidade do instrumentista) e é seguida por uma fuga, que termina em um coda. A música é considerada como uma das mais famosas do repertório para o Órgão.\n[…]\nA fuga está escrita a quatro vozes sobre um tema feito inteiramente de semicolcheias. O tema afasta-se sucessivamente de um tom pedal implícito.\n[…]\nNão é difícil encontrar a fonte desse tratamento rapsódico evidente nos primeiros trabalhos para órgão de Bach: este era um grande admirador de Dieterich Buxtehude na sua juventude. Em 1706 chegou mesmo a ausentar-se vários meses do seu trabalho e deslocar-se 300 km a pé para escutar Buxtehude em Lübeck.\n[…]\nOs trabalhos de órgão de Buxtehude, como os dos seus contemporâneos, são caracterizados pela presença do stylus phantasticus, um estilo de interpretação derivado da improvisação. O stylus phantasticus incluía elementos de excitação e bravura, com harmonias ousadas e mudanças bruscas de registo. Os trabalhos para órgão de Buxtehude fazem grande uso destes elementos.\n[…]\nEstes trabalhos costumam iniciar-se com uma secção livre, seguida por uma secção imitativa (às vezes uma fuga completa), depois outra secção livre, depois outra secção imitativa (normalmente baseada em material do motivo da primeira secção imitativa) e finalmente outra secção livre. A BWV 565 usa vários desses elementos estilísticos a partir desta primeira forma de música de órgão, em particular do stylus phantasticus.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Cravo",
      "descricao": "Instrumento de teclado de cordas pinçadas, muito usado no período barroco, antecessor do piano."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No cravo, instrumento de teclado do Barroco, as cordas não são golpeadas por martelos como no piano. O que acontece com elas?",
    "resposta": "São beliscadas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Harpsichord"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Harpsichord",
        "situacao": "ok",
        "texto": "A harpsichord is a keyboard instrument that makes its sound by plucking a set of strings. In a harpsichord, depressing a key raises its back end within the instrument, which in turn lifts one or more jacks, each a thin strip of wood holding a small plectrum made from quill or plastic; each plectrum plucks a single string. The strings are under tension on a soundboard, which is mounted in a wooden \n[…]\nTwo of the most prominent composers of the Classical era, Joseph Haydn (1732–1809) and Wolfgang Amadeus Mozart (1756–1791), wrote harpsichord music. For both, the instrument featured in the earlier period of their careers, and was largely supplanted by the piano starting roughly in the late 1770s.\n[…]\nThrough the 19th century, the harpsichord was almost completely supplanted by the piano. In the 20th century, composers returned to the instrument, as they sought out variation in the sounds available to them. Under the influence of Arnold Dolmetsch, the harpsichordists Violet Gordon-Woodhouse (1872–1951) and in France, Wanda Landowska (1879–1959), were at the forefront of the instrument's renaissance.\n[…]\nConcertos for the instrument were written by Francis Poulenc (the Concert champêtre, 1927–28), and Manuel de Falla. Elliott Carter's Double Concerto is scored for harpsichord, piano and two chamber orchestras. For a detailed account of music composed for the revived harpsichord, see Contemporary harpsichord.\n[…]\nClavichord\n[…]\nHarpsichordist\n[…]\nBoalch-Mould Online A searchable database of 2000+ harpsichord and clavichord makers, 2500 instruments, and 4300 instrument photos.\n[…]\nBoalch, Donald H. (1995) Makers of the Harpsichord and Clavichord, 1440–1840, 3rd ed., with updates by Andreas H. Roth and Charles Mould, Oxford University Press, ISBN 0-19-318429-X. A catalogue, originating with work by Boalch in the 1950s, of all extant historical instruments.\n[…]\nInterview with harpsichord builder Craig Tomlinson"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cravo_%28instrumento_musical%29",
        "situacao": "ok",
        "texto": "Cravo é a designação dada a qualquer dos membros de uma família europeia de instrumentos musicais de tecla, incluindo os grandes instrumentos comumente chamados de cravos, que são o clavecino também chamado de clavicêmbalo, mas também os menores: virginal, o virginal muselar e a espineta. Todos esses instrumentos pertencem ao grupo das cordas pinçadas, ou seja, geram o som tangendo ou beliscando u\n[…]\nManuais simples ou teclados, são comuns, especialmente nos cravos italianos. Manuais duplos, que permitem maior controle sobre que cordas são beliscadas são encontrados em instrumentos mais elaborados. Há uns poucos exemplos de manuais triplos em cravos alemães.\n[…]\nNa espineta virginal o teclado é colocado do lado esquerdo e as cordas são beliscadas numa das extremidades, como nos demais membros da família cravo. Este é o arranjo mais comum e um instrumento descrito simplesmente como um \"virginal\" é uma espineta virginal.\n[…]\nNum virginal muselar (em flamengo, muselaar), o teclado é colocado á direita ou no meio da caixa, de modo que as cordas são beliscadas no centro de seu comprimento sonoro. Isto produz um som quente e rico, mas a um preço, o funcionamento para a mão esquerda é colocado no meio da placa de som do instrumento, resultando que qualquer ruído originário deste tipo de funcionamento é amplificado. Um comentarista do século XVIII  disse que os muselares \"grunhem nos baixos como leitões\".\n[…]\nFinalmente, um cravo com o conjunto de cordas inclinado de um ângulo (geralmente cerca de 30º) em relação ao teclado é chamado espineta. Neste instrumentos as cordas estão muito próximas para se colocar os saltadores entre elas do modo normal, em vez disso, as cordas são dispostas aos pares e os saltadores são colocados no espaço maior entre os pares de cordas e são instalados com suas faces voltadas para direções opostas, beliscando as cordas adjacentes a esse espaço.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Trompa",
      "descricao": "Instrumento de sopro de metal da orquestra, com tubo enrolado e campana larga."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao tocar trompa na orquestra, onde o músico costuma apoiar a mão direita?",
    "resposta": "Dentro da campana",
    "fonte": [
      "https://en.wikipedia.org/wiki/French_horn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/French_horn",
        "situacao": "ok",
        "texto": "The horn is a brass instrument in the horn family, made of tubing wrapped into a coil with a large flared bell and rotary valves. The term French horn refers to horns with piston valves, seldom used today; the double horn in F/B♭, a variety of German horn, is the horn most often used by players in professional orchestras and bands, although the descant and triple horn have become increasingly popu\n[…]\nHis father, Aubrey Brain, also a celebrated horn player and lifelong champion of the French style of instrument, declared that his son had given up the horn altogether.\n[…]\nA classical orchestra usually has at least two French horn players. Typically, the first horn played a high part and the second horn played a low part. Composers from Beethoven (early 1800s) onwards commonly used four horns. Here, the first and second horns played as a pair (first horn being high, second horn being low), and the third and fourth horns played as another pair (third horn being high, fourth horn being low).\n[…]\nThe French horn was at first rarely used in jazz music. (Note that colloquially in jazz, the word \"horn\" refers to any wind instrument.) Notable exponents, however, began including French horn in jazz pieces and ensembles.\n[…]\nThese include composer/arranger Gil Evans who included the French horn as an ensemble instrument from the 1940s, first in Claude Thornhill's groups, and later with the pioneering cool jazz nonet (nine-piece group) led by trumpeter Miles Davis, and in many other projects that sometimes also featured Davis, as well as Don Ellis, a trumpet player from Stan Kenton's jazz band. Notable works of Ellis' jazz French horn include \"Strawberry Soup\" and other songs on the album Tears of Joy.\n[…]\nAubrey Brain – celebrated British horn player, father of Dennis Brain and a champion of the French style of instrument\n[…]\nRichard Dunbar – a player of the French horn, playing in the free jazz scene"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trompa",
        "situacao": "ok",
        "texto": "A trompa é um instrumento de sopro , ou seja, um aerofone, da família dos metais (ou instrumentos de bocal), metálico e curvo, maior que a trombeta, considerado essencial na orquestra sinfônica moderna. Consiste num tubo metálico de 3,7 metros de comprimento, ligeiramente cônico, com um bocal numa das extremidades e uma campana, (ou pavilhão) na outra, enrolado várias vezes sobre si mesmo, e munid\n[…]\nO trompista prime as chaves com a mão esquerda e, com a mão direita dentro da campana, consegue controlar a afinação, timbre e mesmo ajudar à pega do próprio instrumento.\n[…]\nO som da trompa é rico em parciais harmônicos. A mão dentro da campana (técnica bouché) permite a mudança na afinação e uma enorme variedade de timbres. O tom pode ser controlado pela alteração da posição da mão na campana.\n[…]\nA trompa moderna é capaz tocar todas as notas da escala cromática dentro de sua extensão.\n[…]\nComparada com os outros metais da orquestra, tem um bocal muito diferente, mas tem a maior extensão útil, aproximadamente 4 oitavas, dependendo do trompista. Para se produzirem diferentes notas numa trompa, deve-se fazer muitas coisas — as 4 mais importantes são: apertar as válvulas, aplicar a tensão labial apropriada, soprar e colocar a mão na campana. Mais tensão labial e alta velocidade do ar produz as notas agudas. Menos tensão labial e baixa velocidade do ar produz notas graves.\n[…]\nA mão direita, normalmente colocada dentro da campana (pavilhão) numa posição de \"ponteiros de relógio às 3 horas\", consegue abaixar a afinação em até um semitom na extensão do instrumento, dependendo de quão mais fundo o trompista a põe. A trompa toca numa porção mais aguda da série harmônica, em relação à maioria dos instrumentos de metal.\n[…]\nBarry Tuckwell – ex-trompista principal da Orquestra Sinfônica de Londres e autor de vários livros sobre como tocar trompa\n[…]\nOrquestras",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Canto gregoriano",
      "descricao": "Canto litúrgico monofônico da Igreja Católica, desenvolvido na Idade Média."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Tradicional da liturgia católica desde a Idade Média, o canto gregoriano é cantado em qual língua?",
    "resposta": "Latim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gregorian_chant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gregorian_chant",
        "situacao": "ok",
        "texto": "Gregorian chant is the central tradition of Western plainchant, a form of monophonic, unaccompanied sacred song in Latin (and occasionally Greek) of the Roman Catholic Church. Gregorian chant developed mainly in western and central Europe during the 9th and 10th centuries, with later additions and redactions.\n[…]\nIn 885, Pope Stephen V banned the Slavonic liturgy, leading to the ascendancy of Gregorian chant in Eastern Catholic lands including Poland, Moravia and Slovakia.\n[…]\nGregorian chant is sung in the Office during the canonical hours and in the liturgy of the Mass. Texts known as accentus are intoned by bishops, priests, and deacons, mostly on a single reciting tone with simple melodic formulae at certain places in each sentence. More complex chants are sung by trained soloists and choirs.\n[…]\nSequences are sung poems based on couplets. Although many sequences are not part of the liturgy and thus not part of the Gregorian repertory proper, Gregorian sequences include such well-known chants as Victimae paschali laudes and Veni Sancte Spiritus. According to Notker Balbulus, an early sequence writer, their origins lie in the addition of words to the long melismata of the jubilus of Alleluia chants.\n[…]\nGregorian melodies provided musical material and served as models for tropes and liturgical dramas. Vernacular hymns such as \"Christ ist erstanden\" and \"Nun bitten wir den Heiligen Geist\" adapted original Gregorian melodies to translated texts. Secular tunes such as the popular Renaissance \"In Nomine\" were based on Gregorian melodies. Beginning with the improvised harmonizations of Gregorian chant known as organum, Gregorian chants became a driving force in medieval and Renaissance polyphony.\n[…]\n\"The Graduale Project\". gregoriana.sk. Archived from the original on 1 August 2013."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canto_gregoriano",
        "situacao": "ok",
        "texto": "Canto gregoriano é a tradição central do cantochão ocidental, uma forma de canto sacro monofônico, sem acompanhamento, em latim (e ocasionalmente em grego) da Igreja Católica. O canto gregoriano desenvolveu-se principalmente na Europa Ocidental e Central durante os séculos IX e X, com adições e redações posteriores.\n[…]\nO canto gregoriano era tradicionalmente cantado por coros de homens e meninos nas igrejas, ou por mulheres e homens de ordens religiosas em suas capelas. É a música do Rito Romano, executada na missa e no ofício monástico.\n[…]\nEmbora o canto gregoriano tenha suplantado ou marginalizado as outras tradições de canto gregoriano indígenas do Ocidente cristão para se tornar a música oficial da liturgia cristã, o canto ambrosiano ainda continua em uso em Milão, e há musicólogos explorando tanto esse quanto o canto moçárabe da Espanha cristã. Embora o canto gregoriano não seja mais obrigatório, a Igreja Católica ainda o considera oficialmente a música mais adequada para o culto.\n[…]\nCom o surgimento da polifonia no fim da Idade Média, o Canto gregoriano foi caindo em desuso e, consequentemente, no esquecimento. Foi o abade beneditino Prosper Guéranger (1805–1875) da Abadia de Solesmes, quem teve a iniciativa de, através do estudo de antigos manuscritos, iniciar o processo de restauração do canto gregoriano.\n[…]\nA notação moderna do Canto gregoriano incorporou alguns sinais semelhantes aos encontrados numa partitura comum, como a barra de pontuação (que em muito se assemelha à barra de compasso) e um pequeno ponto (em latim, punctum-mora) sobre o neuma para indicar sílabas mais longas (o qual guarda estreita semelhança com o ponto de aumento).\n[…]\nO canto gregoriano é reconhecido pelo Concílio Vaticano II como a música própria dos ritos da Igreja Católica.\n[…]\n«Partituras de Canto Gregoriano» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Marcha Turca",
      "descricao": "Rondó alla Turca, terceiro movimento da Sonata para piano número onze, de Wolfgang Amadeus Mozart."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O Rondó alla Turca, a famosa Marcha Turca de Mozart, imita o som de quê?",
    "resposta": "Bandas militares otomanas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano_Sonata_No._11_(Mozart)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano_Sonata_No._11_(Mozart)",
        "situacao": "ok",
        "texto": "The Piano Sonata No. 11 in A major, K. 331 / 300i, by Wolfgang Amadeus Mozart is a piano sonata in three movements.\n[…]\nThe third movement of this sonata, the \"Rondo alla Turca\", or \"Turkish March\", is often heard on its own and regarded as one of Mozart's best-known piano pieces.\n[…]\nThe last movement, marked Alla turca, is popularly known as the \"Turkish Rondo\" or \"Turkish March\".\n[…]\nMozart himself titled the rondo \"Alla turca\". The form of this movement is an irregular rondo, structured as A–B–C–B–A–B followed by a coda, with B serving as the refrain in which the sounds of Turkish Janissary band instruments are imitated, in a cartoonish and mocking manner.\n[…]\nMozart later incorporated this \"Alla turca\" style in a few other works, including in K. 539 which glorified Emperor Joseph II during the Austro-Turkish War (1788–1791) and portrayed him as so powerful that \"even the Turks tremble with fear\". Mozart also used the \"Alla turca\" style in K. 620, in which he portrays Blackness, \"Moorishness\" and Turkishness in a very negative way and as difficult to separate.\n[…]\nThe theme of the first movement was used by Max Reger in his Variations and Fugue on a Theme by Mozart (1914) for orchestra. The Israeli composer Ron Weidberg (b. 1953) used the same theme for a set of variations. Dave Brubeck's \"Blue Rondo à la Turk\" (1959) is not based on or related to the last movement.\n[…]\nPages from Mozart's autograph manuscript: pages from first and middle movements and last page of the rondo movement\n[…]\nPiano sonata in A major, K. 331(300i) (interactive score) on Verovio Humdrum Viewer (Alte Mozart-Ausgabe version)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sonata_para_piano_n.%C2%BA_11_%28Mozart%29",
        "situacao": "ok",
        "texto": "A Sonata para piano n.º 11 em lá maior, K. 331 composta por Wolfgang Amadeus Mozart é uma sonata em 3 (três) movimentos:\n[…]\nAlla Turca: Allegretto\n[…]\nNão se sabe ao certo onde e quando Mozart compôs essa sonata - provavelmente em Viena ou Salzburgo, por volta de 1783.\n[…]\nO último movimento, Alla Turca ou popularmente conhecido como Marcha Turca é também ouvido separadamente, e é um dos trabalhos mais conhecidos de Mozart. Ela imita o som das bandas Janízaras Turcas, a música que estava em moda naquele tempo. Vários outros trabalhos tentavam imitar essa música, incluindo a própria ópera de Mozart O Rapto do Serralho.\n[…]\nO tema do primeiro movimento foi usado por Max Reger em um de seus trabalhos mais conhecidos, Variations and Fugue on a theme of Mozart (1914) para orquestra;\n[…]\nO músico de Jazz Dave Brubeck nomeou seu próprio trabalho influencidado pela música turca com um título parecido, Blue Rondo à la Turk em Time Out (1959);\n[…]\nArcadi Volodos gravou sua própria adaptação virtuosa para piano da Marcha Turca em seu primeiro álbum em Piano Transcriptions (1997);\n[…]\nA Alla Turca é destaca em guitarra elétrica na introdução da música Play With Me da banda Extreme;\n[…]\nMC Plus+ usou a Marcha Turca em sua música Computer Science for Life.\n[…]\nA música \"Rondó Alla Turca\" (o terceiro movimento, Alla Turca, desta sonata para piano de Mozart, conhecida também como \"Marcha Turca\"), foi usada no filme \"As Férias do Mr. Bean\".\n[…]\n«Partituras gratuitas da Sonata No. 11 de Mozart». em Mutopia Project",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Aleksandr Borodin",
      "descricao": "Compositor russo do século dezenove (1833–1887), membro do Grupo dos Cinco e autor das Danças Polovtsianas."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Além de compor as Danças Polovtsianas, o russo Aleksandr Borodin teve carreira de destaque em qual outra área?",
    "resposta": "Química",
    "distratores": [
      "Marinha",
      "Direito",
      "Arquitetura"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alexander_Borodin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Borodin",
        "situacao": "ok",
        "texto": "Alexander Porfiryevich Borodin (12 November 1833 – 27 February 1887) was a Russian Romantic composer and chemist of Georgian–Russian parentage. He was one of the prominent 19th-century composers known as \"The Five\", a group dedicated to producing a \"uniquely Russian\" kind of classical music. Borodin is known best for his symphonies, his two string quartets, the symphonic poem In the Steppes of Cen\n[…]\nHe married Ekaterina Protopopova, a pianist, during 1863, with whom he adopted several daughters. Music remained a secondary vocation for Borodin besides his main career as a chemist and physician. He suffered poor health, having overcome cholera and several minor heart attacks. He died suddenly during a ball and was interred in the Tikhvin Cemetery at the Alexander Nevsky Monastery in Saint Petersburg.\n[…]\nThe Borodin Quartet was named in his honour.\n[…]\nThe chemist Alexander Shulgin uses the name \"Alexander Borodin\" as a fictional persona in the books PiHKAL and TiHKAL.\n[…]\nThe asteroid previously known by its provisional designation 1990 ES3 was assigned the permanent name (6780) Borodin, in honor of Alexander Borodin. (6780) Borodin is a main-belt asteroid with an estimated diameter of 4 km and an orbital period of 3.37 years.\n[…]\nGeorge B. Kauffman, Kathryn Bumpass (1988). \"An Apparent Conflict between Art and Science: The Case of Aleksandr Porfir'evich Borodin (1833–1887)\". Leonardo. 21 (4): 429–436. doi:10.2307/1578707. JSTOR 1578707. S2CID 191376702.\n[…]\nWillem G. Vijvers, Alexander Borodin; Composer, Scientist, Educator (Amsterdam: The American Book Center, 2013). ISBN 978-90-812269-0-5.\n[…]\nFree scores by Alexander Borodin at the International Music Score Library Project (IMSLP)\n[…]\nAlexander Borodin at the Musopen project\n[…]\nChisholm, Hugh, ed. (1911). \"Borodin, Alexander Porfyrievich\" . Encyclopædia Britannica. Vol. 4 (11th ed.). Cambridge University Press. p. 266.\n[…]\nBorodin's tomb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alexandr_Borodin",
        "situacao": "ok",
        "texto": "Alexandr Porfirevich Borodin (cirílico: Александр Порфирьевич Бородин) (São Petersburgo, 12 de novembro de 1833 — 27 de fevereiro de 1887) foi um compositor e químico russo de origem georgiana. Foi membro do Grupo dos Cinco, ao lado de Mily Balakirev, César Cui, Modest Mussorgsky e Nikolai Rimsky-Korsakov. Os cinco estão sepultados no Cemitério Tikhvin.\n[…]\nFilho ilegítimo do Príncipe georgiano Luka Gedevanishvili (ou Gedianov, em russo), teve sua paternidade atribuída a um servo do nobre, Porfiry Borodin. Apesar de ter recebido lições de piano quando criança, sua educação foi direcionada às ciências. Formado em medicina, interessado pela química, aperfeiçoou-se em Heidelberg, Alemanha (1859-1862).\n[…]\nSua carreira na medicina não deu certo; na primeira ocasião em que teve de tratar feridos, desmaiou ao ver sangue.\n[…]\nEm toda sua vida, Borodin dedicou-se quase inteiramente à química, escrevendo muitos tratados científicos e fazendo muitas descobertas, notadamente no campo do benzol e aldeídos. Também foi professor de química orgânica na Academia Militar de São Petersburgo (1864-1887) e fundou uma escola de medicina para mulheres. Considerava-se apenas \"um compositor aos domingos\".\n[…]\nNo mesmo ano, começou a compor a segunda sinfonia, que não foi bem recebida na estreia, em 1877, sob a batuta de Eduard Naprávník. Após uma pequena re-orquestração, foi elogiada pelo público em sua nova apresentação, desta vez conduzida por Rimsky-Korsakov, em 1879. Em 1880, na Alemanha, Franz Liszt regeu esta mesma sinfonia, dando a Borodin fama fora da Rússia.\n[…]\nEm 1869 começou a compor sua obra mais importante: a ópera O Príncipe Igor. Trabalhou nela por 18 anos até sua morte, deixando-a incompleta, e foi terminada por Nikolai Rimsky-Korsakov e Alexandr Glazunov em 1890.\n[…]\nBiografia de Borodin\n[…]\nAlexander P. Borodin: Surgeon, chemist, and great musician[1]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Órgão de tubos",
      "descricao": "Instrumento de teclado em que o som é produzido pela passagem de ar por tubos, tradicional em igrejas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Numa carta de 1777, Mozart deu ao órgão de tubos um título de nobreza que pegou como apelido. Qual?",
    "resposta": "Rei dos instrumentos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Organ_(music)",
      "https://en.wikipedia.org/wiki/Pipe_organ"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Organ_(music)",
        "situacao": "ok",
        "texto": "In music, the organ is a keyboard instrument of one or more pipe divisions or other means (generally woodwind or electric) for producing tones. The organs have usually two or three, sometimes up to five or more, manuals for playing with the hands and a pedalboard for playing with the feet. With the use of registers, several groups of pipes can be connected to one manual.\n[…]\nWolfgang Amadeus Mozart called the organ the \"King of instruments\". Some of the biggest instruments have 64-foot pipes (a foot here means \"sonic-foot\", a measure quite close to the English measurement unit)  and it sounds to an 8 Hz frequency fundamental tone. Perhaps the most distinctive feature is the ability to range from the slightest sound to the most powerful, plein-jeu impressive sonic discharge, which can be sustained in time indefinitely by the organist.\n[…]\nOrganette: small, accordion-like instrument manufactured in New York in the late 1800s\n[…]\nDespite this intended role as a sacred music instrument, electronic and electromechanical organs' distinctive tone – often modified with electronic effects such as vibrato, rotating Leslie speakers, and overdrive – became an important part of the sound of popular music.\n[…]\nThe electric organ, especially the Hammond B-3, has occupied a significant role in jazz ever since Jimmy Smith made it popular in the 1950s. It can function as a replacement for both piano and bass in the standard jazz combo. The Hammond organ is the centrepiece of the organ trio, a small ensemble which typically includes an organist (playing melodies, chords and basslines), a drummer and a third instrumentalist (either jazz guitar or saxophone).\n[…]\nnpor.org.uk – Homepage of the National Pipe Organ Register of the British Institute of Organ Studies, with extensive information on and many audio samples of original instruments"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pipe_organ",
        "situacao": "ok",
        "texto": "The pipe organ is a musical instrument that produces sound by driving pressurised air (called wind) through the organ pipes selected from a keyboard. Because each pipe produces a single tone and pitch, the pipes are provided in sets called ranks, each of which has a common timbre, loudness (volume), and construction throughout the keyboard compass. In other words, a rank is a set of pipes all havi\n[…]\nOrgan cases occasionally feature a few ranks of pipes protruding horizontally from the case in the manner of a row of trumpets. These are referred to as pipes en chamade and are particularly common in organs of the Iberian peninsula and large 20th-century instruments.\n[…]\nIn the 19th and 20th centuries, organ builders began to build instruments in concert halls and other large secular venues, allowing the organ to be used as part of an orchestra, as in Saint-Saëns' Symphony No. 3 (sometimes known as the Organ Symphony). Frequently the organ is given a soloistic part, such as in Joseph Jongen's Symphonie Concertante for Organ & Orchestra, Francis Poulenc's Concerto for Organ, Strings and Tympani, and Frigyes Hidas' Organ Concerto.\n[…]\nOther composers who have used the organ prominently in orchestral music include Gustav Holst, Richard Strauss, Ottorino Respighi, Gustav Mahler, Anton Bruckner, and Ralph Vaughan Williams. Because these concert hall instruments could approximate the sounds of symphony orchestras, transcriptions of orchestral works found a place in the organ repertoire. As silent films became popular, theatre organs were installed in theatres to provide accompaniment for the films.\n[…]\n\"TourBus to the King of Instruments\" – video series with Carol Williams (organist) about the large & small, famous & unique pipe organs of the world. American Video & Audio Production Company"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Allegro",
      "descricao": "Indicação italiana de andamento usada nas partituras para pedir um tempo rápido e animado."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nas partituras, a indicação italiana allegro pede um andamento rápido. O que essa palavra significa literalmente?",
    "resposta": "Alegre",
    "fonte": [
      "https://en.wiktionary.org/wiki/allegro",
      "https://en.wikipedia.org/wiki/Tempo"
    ],
    "trechos": [
      {
        "url": "https://en.wiktionary.org/wiki/allegro",
        "situacao": "ok",
        "texto": "allegro - Wiktionary, the free dictionary\n[…]\nInflection of allegro ( Kotus type 1/ valo , no gradation)\n[…]\nPossessive forms of allegro ( Kotus type 1/ valo , no gradation)\n[…]\n( music ) allegro ( in a quick and lively manner )\n[…]\nBorrowed from Italian allegro , itself borrowed from French allègre . Doublet of allègre .\n[…]\n“ allegro ”, in Trésor de la langue française informatisé [ Digitized Treasury of the French Language ], 2012\n[…]\nBorrowed from French allègre , from Latin alacer ( “ lively; happy, cheerful ” ) . Compare the doublet alacre .\n[…]\nallegro ( feminine allegra , masculine plural allegri , feminine plural allegre , superlative allegrissimo )\n[…]\n→ French: allegro , allégro ( post-1990 spelling )\n[…]\nfirst-person singular present indicative of allegrare\n[…]\n^ “ allegro ” in Luciano Canepari , Dizionario di Pronuncia Italiana (DiPI)\n[…]\nallegro   m ( definite singular allegroen , indefinite plural allegroar , definite plural allegroane )\n[…]\nUnadapted borrowing from Italian allegro . Doublet of alegre .\n[…]\n“ allegro ”, in Dicionário Aulete Digital (in Portuguese), Rio de Janeiro: Lexikon Editora Digital, 2008– 2026\n[…]\n“ allegro ”, in Dicionário Priberam da Língua Portuguesa (in Portuguese), Lisbon: Priberam, 2008– 2026\n[…]\nUnadapted borrowing from Italian allegro .\n[…]\nRetrieved from \" https://en.wiktionary.org/w/index.php?title=allegro&oldid=93056915 \"\n[…]\nCategories : English terms borrowed from Italian\n[…]\nNorwegian Nynorsk terms borrowed from Italian\n[…]\nNorwegian Nynorsk terms derived from Italian\n[…]\nPortuguese unadapted borrowings from Italian\n[…]\nRomanian unadapted borrowings from Italian"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tempo",
        "situacao": "ok",
        "texto": "In musical terminology, tempo (from Italian for 'time'; plural 'tempos', or tempi from the Italian plural), measured in beats per minute, is the speed or pace of a given composition, and is often also an indication of the composition's character or atmosphere. In classical music, tempo is typically indicated with an instruction at the start of a piece (often using conventional Italian terms) and, \n[…]\nIn classical music, it is customary to describe the tempo of a piece by one or more words, most commonly in Italian, in addition to or instead of a metronome mark in beats per minute. Italian is typically used because it was the language of most composers during the time these descriptions became commonplace in the Western musical lexicon. Some well-known Italian tempo indications include \"Allegro\" (English \"Cheerful\"), \"Andante\" (\"Walking-pace\") and \"Presto\" (\"Quickly\").\n[…]\nMany tempo markings also indicate mood and expression. For example, presto and allegro both indicate a speedy execution (presto being faster), but allegro also connotes joy (from its original meaning in Italian). Presto, on the other hand, simply indicates speed. Additional Italian words also indicate tempo and mood.\n[…]\n9 is marked Im Tempo eines gemächlichen Ländlers, etwas täppisch und sehr derb, indicating a slowish folk-dance-like movement, with some awkwardness and much vulgarity in the execution. Mahler would also sometimes combine German tempo markings with traditional Italian markings, as in the first movement of his sixth symphony, marked Allegro energico, ma non troppo. Heftig, aber markig (Energetically quick, but not too much. Violent, but vigorous.)\n[…]\nStringendo – pressing on faster, literally \"tightening\"\n[…]\nThese terms also indicate an immediate, not a gradual, tempo change. Although they are Italian, composers tend to employ them even if they have written their initial tempo marking in another language."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andamento",
        "situacao": "ok",
        "texto": "Na música, o andamento ou movimento, é a velocidade em que um compasso deve ser executado. O italiano é o idioma tradicionalmente utilizado na música ocidental para indicar a velocidade (alguns compositores escrevem em sua língua materna), andamento se traduz como tempo rítmico musical, frequentemente usado como uma marca em partituras.\n[…]\nTodas as músicas possuem uma velocidade - que normalmente é indicada no início da composição, e algumas vezes no decurso desta - que é medida em BPM (batidas por minuto), normalmente comparada com passos de uma pessoa caminhando e, que conta quantos passos são dados em 1 minuto. O BPM e o andamento podem ser medidas com auxílio do aparelho metrônomo, um relógio especialmente construído para definir uma pulsação constante. Os valores associados a cada andamento são apenas de referência.\n[…]\nCom o tempo, foi-se deixando de lado a ideia tradicional da escrita musical, e, com isso, muitos termos musicais começaram a receber interpretações em outros idiomas, e termos que eram usados tradicionalmente em italiano foram ficando muito populares em outras línguas, como o termo slide, que tradicionalmente é descrito por \"glissando\". No Brasil, os andamentos também receberam descrições similares aos do italiano.\n[…]\nDevagar; Tristonho; Dolente; Molengamente; Dengoso; Sentido; Saudoso; Sem Pressa; Depressa; Rápido; Gingando, e; Saltitante.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Sonata ao Luar",
      "descricao": "Sonata para piano número catorze, em dó sustenido menor, de Ludwig van Beethoven, de 1801."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Sonata ao Luar ganhou o apelido depois da morte de Beethoven, quando um crítico comparou o primeiro movimento ao luar sobre qual lago?",
    "resposta": "Lago de Lucerna",
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano_Sonata_No._14_(Beethoven)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano_Sonata_No._14_(Beethoven)",
        "situacao": "ok",
        "texto": "The Piano Sonata No. 14 in C♯ minor, marked Quasi una fantasia, Op. 27, No. 2, is a piano sonata by Ludwig van Beethoven, completed in 1801 and dedicated in 1802 to his pupil Countess Julie \"Giulietta\" Guicciardi. Although known throughout the world as the Moonlight Sonata (German: Mondscheinsonate), it was not Beethoven who named it so. The title \"Moonlight Sonata'\" arose via imagery later propos\n[…]\nMany sources say that the nickname Moonlight Sonata arose after the German music critic and poet Ludwig Rellstab likened the effect of the first movement to that of moonlight shining upon Lake Lucerne. This comes from the musicologist Wilhelm von Lenz, who wrote in 1852: \"Rellstab compares this work to a boat, visiting, by moonlight, the remote parts of Lake Lucerne in Switzerland.\n[…]\nIn fact, as musicologist Sarah Waltz determined in a 2007 analysis of the title, Rellstab made his comment about the sonata's first movement in a story called Theodor that he published in 1824: \"The lake reposes in twilit moon-shimmer [Mondenschimmer], muffled waves strike the dark shore; gloomy wooded mountains rise and close off the holy place from the world; ghostly swans glide with whispering rustles on the tide, and an Aeolian harp sends down mysterious tones of lovelorn yearning from the ruins.\" Rellstab made no mention of Lake Lucerne, which seems to have been Lenz's own addition.\n[…]\nIn his analysis, German critic Paul Bekker states: \"The opening sonata-allegro movement gave the work a definite character from the beginning ... which succeeding movements could supplement but not change. Beethoven rebelled against this determinative quality in the first movement. He wanted a prelude, an introduction, not a proposition\".\n[…]\nIn his book Beethoven's pianoforte sonatas,\n[…]\nAnalysis and recordings review of Beethoven's Moonlight Sonata, Roni's Journal, September 2007, Classical Music Blog"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sonata_para_piano_n.%C2%BA_14_%28Beethoven%29",
        "situacao": "ok",
        "texto": "A Sonata para piano n.º 14, Op. 27 n.º 2 é uma sonata de Beethoven. Essa sonata foi muito tocada na época de Beethoven, que chegou a dizer que tinha feito músicas melhores. A \"Sonata ao Luar\", que serviu de tema para inúmeros filmes e romances, só recebeu seu apelido em 1832, cinco anos depois da morte de Beethoven. Foi o crítico Rellstab que comparou a música a um luar ao lago Lucerna. Tal compar\n[…]\nAssim como na sonata anterior, o primeiro movimento vem com a indicação \"quasi una fantasia\". Uma melodia melancólica é apresentada acompanhada por um ostinato que dura o movimento inteiro. Beethoven coloca no início da partitura uma indicação de \"senza surdina\". Os desavisados pensam que a \"surdina\" se refere ao pedal esquerdo do piano, o \"una corda\", mas na verdade a \"surdina\" a que Beethoven se refere é o pedal direito.\n[…]\nComo os pianos modernos não permitem isso - o nível de projeção é muito maior do que o piano da época de Beethoven, criando dissonâncias indesejadas - essa indicação serve como parâmetro para interpretação e não deve ser levada à risca (a não ser que o pianista toque num piano de época). O movimento tem uma forma-sonata um pouco escondida, onde há uma exposição, desenvolvimento e recapitulação, mas a forma fica bem diluída no contexto geral.\n[…]\nAssim como na sonata anterior, Beethoven coloca um \"attacca subito\" no final do movimento para dar continuidade à música.\n[…]\nNo final do movimento, Beethoven apresenta uma coda estendida (o que começa a se tornar uma constante na sua obra para piano). Nesta coda, ele usa acordes \"quebrados\" (arpejos velozes que soam como se alguém tocasse um acorde sem tocar as notas todas juntas), o que Beethoven usaria mais tarde na Appassionata. Além disso, na coda, Beethoven traz um pouco do caráter de uma cadência, onde o pianista \"improvisa\" com as harmonias até voltar ao tema principal para concluir o movimento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Oitava Sinfonia de Mahler",
      "descricao": "Sinfonia número oito de Gustav Mahler, para orquestra, coros e solistas, estreada em Munique em 1910."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa do elenco gigantesco reunido na estreia, em 1910, qual apelido ganhou a Oitava Sinfonia de Mahler?",
    "resposta": "Sinfonia dos Mil",
    "fonte": [
      "https://en.wikipedia.org/wiki/Symphony_No._8_(Mahler)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Symphony_No._8_(Mahler)",
        "situacao": "ok",
        "texto": "The Symphony No. 8 in E-flat major by Gustav Mahler is one of the largest-scale choral works in the classical concert repertoire. As it requires huge instrumental and vocal forces it is frequently called the \"Symphony of a Thousand\", although the work is normally presented with far fewer than a thousand performers and Mahler greatly disapproved of the name. The work was composed in a single inspir\n[…]\nThe last of Mahler's works that was premiered in his lifetime, the symphony was a critical and popular success when he conducted the Munich Philharmonic in its first performance, in Munich, on 12 September 1910.\n[…]\nMahler made arrangements with the impresario Emil Gutmann for the symphony to be premiered in Munich in the autumn of 1910. He soon regretted this involvement, writing of his fears that Gutmann would turn the performance into \"a catastrophic Barnum and Bailey show\". Preparations began early in the year, with the selection of choirs from the choral societies of Munich, Leipzig and Vienna. The Munich Zentral-Singschule provided 350 students for the children's choir.\n[…]\nMahler recommended that in very large halls, the first player in each of the woodwind sections should be doubled and that numbers in the strings should also be augmented. In addition, the piccolos, E-flat clarinet, harps and mandolin, and the first offstage trumpet, should have \"several to the part\" (\"mehrfach besetzt\").\n[…]\nOnly one autograph score of Symphony No. 8 is known to exist. Once the property of Alma Mahler, it is held by the Bayerische Staatsbibliothek in Munich. In 1906 Mahler signed a contract with the Viennese publishing firm Universal Edition (UE), which thus became the main publisher of all his works. The full orchestral score of the Symphony was published by UE in 1912.\n[…]\nSymphony No. 8 (Mahler, Gustav): Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sinfonia_n.%C2%BA_8_%28Mahler%29",
        "situacao": "ok",
        "texto": "A Sinfonia n.º 8 em mi bemol maior de Gustav Mahler é uma das obras corais de maior escala do repertório orquestral clássico. Como exige uma enorme quantidade de instrumentistas e membros do coro, é frequentemente chamada «Sinfonia dos mil», embora a obra se interprete muitas vezes com menos de mil intérpretes e o próprio Mahler não tenha aprovado esse epíteto. A peça foi composta num único períod\n[…]\nAté esse momento, as receções das novas sinfonias de Mahler tinham sido geralmente dececionantes. No entanto, a estreia em Munique da Oitava Sinfonia foi um triunfo sem precedentes, quando os acordes finais se extinguiram houve uma breve pausa antes do enorme esttrondo de aplausos que se prolongou durante vinte minutos.\n[…]\nDurante os três anos seguintes, segundo os cálculos do amigo de Mahler Guido Adler, a Oitava Sinfonia teve um total de vinte atuações adicionais em toda a Europa. Entre estas incluem-se a estreia nos Países Baixos, em Amesterdão, sob a batuta de Willem Mengelberg em 12 de março de 1912, e a primeira interpretação em Praga, realizada em 20 de março de 1912 com direção do antigo colega de Mahler na Hofoper de Viena, Alexander Zemlinsky.\n[…]\nHoje só se sabe que existiu uma partitura autografada da Oitava Sinfonia de Mahler. Esteve em poder de Alma Mahler e presentemente é conservada nos arquivos da Biblioteca Estatal da Baviera, em Munique. Em 1906, Mahler assinou um contrato com a companhia editora vienense Universal Edition (UE), que, portanto, se converteu na principal editora de todas as suas obras. A UE publicou em 1912 a partitura orquestral da Oitava Sinfonia.\n[…]\nPara uma discografia completa, ver Discografia da Sinfonia n.º 8 (Mahler).\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em castelhano cujo título é «Sinfonía n.º 8 (Mahler)».\n[…]\nSinfonia n.º 8: partituras livres no International Music Score Library Project.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Canto gregoriano",
      "descricao": "Canto litúrgico monofônico da Igreja Católica, desenvolvido na Idade Média."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Pela tradição, o canto litúrgico medieval chamado gregoriano deve seu nome a qual personagem histórico?",
    "resposta": "Papa Gregório Magno",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gregorian_chant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gregorian_chant",
        "situacao": "ok",
        "texto": "Gregorian chant is the central tradition of Western plainchant, a form of monophonic, unaccompanied sacred song in Latin (and occasionally Greek) of the Roman Catholic Church. Gregorian chant developed mainly in western and central Europe during the 9th and 10th centuries, with later additions and redactions.\n[…]\nIn 885, Pope Stephen V banned the Slavonic liturgy, leading to the ascendancy of Gregorian chant in Eastern Catholic lands including Poland, Moravia and Slovakia.\n[…]\nSequences are sung poems based on couplets. Although many sequences are not part of the liturgy and thus not part of the Gregorian repertory proper, Gregorian sequences include such well-known chants as Victimae paschali laudes and Veni Sancte Spiritus. According to Notker Balbulus, an early sequence writer, their origins lie in the addition of words to the long melismata of the jubilus of Alleluia chants.\n[…]\nGregorian chant had a significant impact on the development of medieval and Renaissance music. Modern staff notation developed directly from Gregorian neumes. The square notation that had been devised for plainchant was borrowed and adapted for other kinds of music. Certain groupings of neumes were used to indicate repeating rhythms called rhythmic modes.\n[…]\nGregorian melodies provided musical material and served as models for tropes and liturgical dramas. Vernacular hymns such as \"Christ ist erstanden\" and \"Nun bitten wir den Heiligen Geist\" adapted original Gregorian melodies to translated texts. Secular tunes such as the popular Renaissance \"In Nomine\" were based on Gregorian melodies. Beginning with the improvised harmonizations of Gregorian chant known as organum, Gregorian chants became a driving force in medieval and Renaissance polyphony.\n[…]\n\"\"The living textbook\" on the choral notation of the Gregorian chant\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canto_gregoriano",
        "situacao": "ok",
        "texto": "Canto gregoriano é a tradição central do cantochão ocidental, uma forma de canto sacro monofônico, sem acompanhamento, em latim (e ocasionalmente em grego) da Igreja Católica. O canto gregoriano desenvolveu-se principalmente na Europa Ocidental e Central durante os séculos IX e X, com adições e redações posteriores.\n[…]\nTudo indica que no final do século VI, especificamente em 590 quando o Papa Gregório I é eleito, o corpo melódico romano já estava todo composto.\n[…]\nPor volta do século VI, Gregório Magno selecionou, compilou e sistematizou os cânticos eclesiásticos e diferentes liturgias ocidentais espalhados pela Europa com o objetivo de unificá-los para serem utilizados nas celebrações religiosas da Igreja Católica. É de seu nome que deriva o termo gregoriano.\n[…]\nAlém da compilação e sistematização dos cânticos, o Papa Gregório fundou a Schola Cantorum, instituição cuja finalidade era ensinar e aprimorar o canto litúrgico. Mosteiros e abadias de toda a Europa enviavam religiosos para Roma no intuito de adquirir a necessária formação musical para, posteriormente, levar tais ensinamentos para a comunidade local.\n[…]\nCom a unificação e padronização realizada pelo Papa Gregório I, o canto gregoriano não apenas se propagou pelas Igrejas e Mosteiros da Europa, tendo seu auge na alta Idade Média, como também deixou de ser apenas recitações dos Salmos e trechos bíblicos, monges de mosteiros por toda Europa começaram a compor músicas e poesias com o canto gregoriano. Um dos nomes que mais se destacou no que diz respeito à composição do canto gregoriano é o da freira beneditina Hildegarda de Bingen (1098-1179).\n[…]\n«Acervo de Canto Gregoriano». (Áudio e Partituras) [ligação inativa]\n[…]\n«Partituras de Canto Gregoriano» (em inglês)\n[…]\nCurso de Gregoriano em Brasília\n[…]\nGregorian Chant Music - ClassicalRadio.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Cavalgada das Valquírias",
      "descricao": "Trecho do início do terceiro ato da ópera A Valquíria, de Richard Wagner."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que filme de guerra de Francis Ford Coppola, de 1979, tem um ataque de helicópteros ao som da Cavalgada das Valquírias, de Wagner?",
    "resposta": "Apocalypse Now",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ride_of_the_Valkyries"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ride_of_the_Valkyries",
        "situacao": "ok",
        "texto": "The Ride of the Valkyries (German: Walkürenritt or Ritt der Walküren) is the popular name of the prelude to the first scene of the third and last act of Die Walküre, the second of the four epic music dramas that constitute the operatic cycle Der Ring des Nibelungen (English: The Ring of the Nibelung), composed by Richard Wagner.\n[…]\nThe complete opera Die Walküre was first performed on 26 June 1870 in the National Theatre Munich against the composer's intent. By January of the next year, Wagner was receiving requests for the \"Ride\" to be performed separately, but wrote that such a performance should be considered \"an utter indiscretion\" and forbade \"any such thing\". However, the piece was still printed and sold in Leipzig, and Wagner wrote a complaint to the publisher Schott.\n[…]\nIn the period up to the first performance of the complete Ring cycle, Wagner continued to receive requests for separate performances, his second wife Cosima noting \"Unsavoury letters arrive for R. – requests for the Ride of the Valkyries and I don't know what else.\" Once the Ring had been performed in Bayreuth in 1876, Wagner lifted the embargo. He himself conducted it in London on 12 May 1877, repeating it as an encore.\n[…]\nThe 1941 Battle of Crete saw German airborne operations with paratroopers. Die Deutsche Wochenschau newsreel of 1941-06-04 used Walkürenritt as soundtrack to Junkers Ju 52 airplanes approaching the island at dawn in low flight over the Mediterranean Sea. In similar style, in Apocalypse Now (1979), helicopters attack a Vietnamese village with \"Ride of the Valkyries\" playing on loudspeakers.\n[…]\n\"Ride of the Valkyries\" (act 3): Scores at the International Music Score Library Project\n[…]\nRide of the Valkyries at Project Gutenberg (in MP3 format)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cavalgada_das_Valqu%C3%ADrias",
        "situacao": "ok",
        "texto": "Cavalgada das Valquírias (em alemão: Walkürenritt ou Ritt der Walküren) é a denominação popular para o início do ato III da ópera Die Walküre (A Valquíria), a segunda das quatro óperas compostas por Richard Wagner que compõem Der Ring des Nibelungen. O tema principal da cavalgada, o leitmotiv Walkürenritt, foi escrito originalmente em 23 de julho de 1851. Um esboço preliminar da composição foi com\n[…]\nSeparadamente, a Cavalgada costuma ser ouvida em uma versão puramente instrumental, já tendo sido limitada a um mínimo de três minutos. Junto com o coro nupcial de Lohengrin, a Cavalgada das Valquírias é uma das obras mais conhecidas de Wagner.\n[…]\nA Cavalgada das Valquírias tem sido frequentemente usada como tema musical em produções cinematográficas e televisivas, desde 1915 com O Nascimento de uma Nação de D. W. Griffith. Durante a Segunda Guerra Mundial foi utilizada em dois noticiários semanais alemães (Die Deutsche Wochenschau), tematizando a Batalha de Creta e o bombardeamento da linha ferroviária Moscou-São Petersburgo .\n[…]\nMais recentemente, fez parte da trilha sonora no filme Apocalypse Now (1979), na cena em que uma esquadrilha de helicópteros ataca uma vila vietnamita. Desde então, tem sido usada em diversos filmes, jogos eletrônicos e comerciais. Exemplos de uso incluem Valkyrie (2008), Lord of War (2005), Casper (1995), 8½ (1963), Watchmen (2009), Hearts of Iron (2002) e Hearts of Iron III (2009).\n[…]\nEm 24 de fevereiro de 2012 a Lew'Lara\\TBWA produziu uma continuação da propaganda Pôneis Malditos para a Nissan - promovendo a linha 2012/2013 da Nissan Frontier e satirizando a Cavalgada -, com o título Cavalgada dos Pôneis Malditos.\n[…]\nDie Walküre",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "O Barbeiro de Sevilha",
      "descricao": "Ópera cômica de Gioachino Rossini, estreada em Roma em 1816."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A ópera O Barbeiro de Sevilha, de Rossini, e As Bodas de Fígaro, de Mozart, adaptam peças do mesmo dramaturgo francês. Quem?",
    "resposta": "Beaumarchais",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Barber_of_Seville",
      "https://en.wikipedia.org/wiki/The_Marriage_of_Figaro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Barber_of_Seville",
        "situacao": "ok",
        "texto": "The Barber of Seville, or The Useless Precaution (Italian: Il barbiere di Siviglia, ossia L'inutile precauzione [il barˈbjɛːre di siˈviʎʎa osˈsiːa liˈnuːtile prekautˈtsjoːne]) is an opera buffa (comic opera) in two acts composed by Gioachino Rossini with an Italian libretto by Cesare Sterbini. The libretto was based on Pierre Beaumarchais's French comedy The Barber of Seville (1775).\n[…]\nRossini's opera recounts the events of the first of the three plays by French playwright Pierre Beaumarchais that revolve around the clever and enterprising character named Figaro, the barber of the title. Mozart's opera The Marriage of Figaro, composed 30 years earlier in 1786, is based on the second part of the Beaumarchais trilogy.\n[…]\nLuigi Zamboni, for whom Rossini wrote the role of Figaro, had urged Rossini and Francesco Sforza-Cesarini, the cash-strapped impresario of the Teatro Argentina, to engage his sister-in-law, Elisabetta Gafforini, as Rosina. However, her fee was too high and in the end they settled on Geltrude Righetti. The premiere of Rossini's opera, held on 20 February 1816 at the Teatro Argentina in Rome, was a disaster: the audience hissed and jeered throughout, and several on-stage accidents occurred.\n[…]\nCordier, Henri (1883). Bibliographie des oeuvres de Beaumarchais. Paris: A. Quantin.\n[…]\n2009 lecture \"Ornamenting an Early Nineteenth-Century Opera\" on YouTube, by Philip Gossett of the University of Chicago, Division of the Humanities, on the occasion of the publication of the new critical edition of Il barbiere di Siviglia Archived 25 March 2016 at the Wayback Machine\n[…]\nSommer, Susan T. (1992). \"New York\". In Stanley Sadie (ed.). The New Grove Dictionary of Opera. Vol. 3. London: Macmillan. pp. 585–592.\n[…]\nDer Barbier von Sevilla, Article with photos of a 2009 production at the Zürich Opera House (in German)\n[…]\nIl barbiere di Siviglia: online opera guide and synopsis"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Marriage_of_Figaro",
        "situacao": "ok",
        "texto": "The Marriage of Figaro (Italian: Le nozze di Figaro, pronounced [le ˈnɔttse di ˈfiːɡaro] ), K. 492, is a commedia per musica (opera buffa) in four acts composed in 1786 by Wolfgang Amadeus Mozart, with an Italian libretto written by Lorenzo Da Ponte. It premiered at the Burgtheater in Vienna on 1 May 1786. The opera's libretto is based on the 1784 stage comedy by Beaumarchais, La folle journée, ou\n[…]\nBeaumarchais's earlier play The Barber of Seville had already made a successful transition to opera in a version by Paisiello.\n[…]\nThe opera was the first of three collaborations between Mozart and Da Ponte, followed by Don Giovanni and Così fan tutte. It was Mozart who originally selected Beaumarchais's play and brought it to Da Ponte, who turned it into a libretto in six weeks, rewriting it in poetic Italian and removing all of the original's political references. In particular, Da Ponte replaced Figaro's climactic speech against inherited nobility with an equally angry aria against unfaithful wives.\n[…]\nThe synthesis of accelerating complexity and symmetrical resolution which was at the heart of Mozart's style enabled him to find a musical equivalent for the great stage works which were his dramatic models. The Marriage of Figaro in Mozart's version is the dramatic equal, and in many respects the superior, of Beaumarchais's work.\n[…]\nIn 1819, Henry R. Bishop wrote an adaptation of the opera in English, translating from Beaumarchais's play and re-using some of Mozart's music, while adding some of his own.\n[…]\nIn his 1991 opera, The Ghosts of Versailles, which includes elements of Beaumarchais's third Figaro play (La Mère coupable) and in which the main characters of The Marriage of Figaro also appear, John Corigliano quotes Mozart's opera, especially the overture, several times.\n[…]\nList of operas by Mozart\n[…]\nLe nozze di Figaro: Score and critical report (in German) in the Neue Mozart-Ausgabe"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Il_barbiere_di_Siviglia",
        "situacao": "ok",
        "texto": "Il barbiere di Siviglia, Alma Viva o sia l'inutile precauzione (O barbeiro de Sevilha, Alma Viva ou a inútil precaução) é uma ópera-bufa em dois atos do compositor italiano Gioachino Rossini, com um libreto de Cesare Sterbini, baseado na comédia Le Barbier de Séville, do dramaturgo francês Pierre Beaumarchais.\n[…]\nUma ópera, Il barbiere di Siviglia, baseada na mesma peça, já havia sido composta por Giovanni Paisiello, e outra ainda foi composta em 1796, por Nicolas Isouard. Embora a obra de Paisiello tenha feito sucesso por algum tempo, a versão de Rossini é a única a perdurar no repertório operático.\n[…]\nA ópera de Rossini segue a primeira das peças da \"trilogia de Figaro\" do dramaturgo francês Pierre-Augustin Caron de Beaumarchais, enquanto Mozart, em sua ópera Le nozze di Figaro (As bodas de Fígaro), composta 30 anos mais cedo, em 1786, baseou-se na segunda parte da trilogia. A versão original de Beaumarchais foi encenada pela primeira vez em Paris no ano de 1775, na Comédie-Française, no Palácio das Tulherias.\n[…]\nAmanhece. O Conde Almaviva faz uma serenata diante da janela da jovem Rosina, mesmo desconhecendo o nome da donzela a quem canta. Rosina não lhe responde. O Conde ouve ao longe a voz de um homem a cantar: é o barbeiro Fígaro, seu amigo, que estranha vê-lo longe de casa àquela hora. Almaviva explica ao Fígaro o seu intento de cortejar a \"filha do médico\" que ali mora (embora Rosina seja tutelada e não filha do médico). Prestativo, Fígaro coloca-se à disposição do conde, para ajudá-lo.\n[…]\nTalvez a ária mais famosa desta ópera seja \"Largo al factotum (Abram caminho para o factotum da cidade.)\", cantada por Fígaro, logo no 1º ato - onde, a um certo ponto, ele começa a repetir seu próprio nome de forma rápida e exaustivamente (\"Figaro, Figaro, Figaro…\")",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "O Voo do Besouro",
      "descricao": "Interlúdio orquestral de Nikolai Rimsky-Korsakov, da ópera O Conto do Czar Saltan, famoso pela velocidade."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que herói mascarado da TV, com Bruce Lee no papel do ajudante Kato, tinha como tema um arranjo de uma peça de Rimsky-Korsakov?",
    "resposta": "Besouro Verde",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flight_of_the_Bumblebee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flight_of_the_Bumblebee",
        "situacao": "ok",
        "texto": "\"Flight of the Bumblebee\" (Russian: Полёт шмеля) is an orchestral interlude written by Nikolai Rimsky-Korsakov for his opera The Tale of Tsar Saltan, composed in 1899–1900. This perpetuum mobile is intended to musically evoke the seemingly chaotic and rapidly changing flying pattern of a bumblebee. Despite the piece's being a rather incidental part of the opera, it is today one of the more familia\n[…]\nThe piece is recognizable for its frantic pace when played up to tempo, with nearly uninterrupted runs of chromatic sixteenth notes. This rapidity, measured at 144 beats per minute, evokes the skittish and frenetic activity of a bumblebee.\n[…]\n\"Flight of the Bumblebee\" (act 3): Scores at the International Music Score Library Project\n[…]\nRobert Cummings. The Flight of the Bumble Bee, musical picture for orchestra (from The Tale of Tsar Saltan) at AllMusic"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "O Lago dos Cisnes",
      "descricao": "Balé de Piotr Ilitch Tchaikovsky, estreado em Moscou em 1877."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Natalie Portman ganhou o Oscar como uma bailarina que ensaia o papel duplo de Odette e Odile. Que balé de Tchaikovsky é esse?",
    "resposta": "O Lago dos Cisnes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Swan_(film)",
      "https://en.wikipedia.org/wiki/Swan_Lake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Swan_(film)",
        "situacao": "ok",
        "texto": "Black Swan is a 2010 American psychological horror thriller film directed by Darren Aronofsky, from a screenplay by Mark Heyman, John McLaughlin, and Andres Heinz, and based on a story by Heinz. Starring Natalie Portman, Vincent Cassel, Mila Kunis, Barbara Hershey, and Winona Ryder, the film follows a production of Tchaikovsky's Swan Lake by the company of New York City Ballet, led by Artistic Dir\n[…]\nNina Sayers, a young dancer with the New York City Ballet, lives with her overprotective mother, Erica, a former ballerina. The company is opening the season with Tchaikovsky's Swan Lake. After forcing the current prima ballerina, Beth, into retirement, artistic director Thomas Leroy announces he is looking for a new dancer for the dual roles of the innocent and fragile White Swan, Odette, and the sensual and dark Black Swan, Odile.\n[…]\nNatalie Portman as Nina Sayers/White Swan/Black Swan, a ballerina for the NYC ballet who strives for perfection while struggling with stress and various traumatic issues\n[…]\nKunis contrasted Lily with Nina, \"My character is very loose ... She's not as technically good as Natalie's character, but she has more passion, naturally. That's what [Nina] lacks.\" The female characters are directed in the Swan Lake production by Thomas Leroy, played by Cassel. He compared his character to George Balanchine, who co-founded New York City Ballet and was \"a control freak, a true artist using sexuality to direct his dancers\".\n[…]\nThe website's critical consensus reads, \"Bracingly intense, passionate, and wildly melodramatic, Black Swan glides on Darren Aronofsky's bold direction—and a bravura, tour-de-force performance from Natalie Portman.\" At Metacritic, which assigns a weighted average score out to reviews, the film received an average score of 79 out of 100, based on 42 critics, indicating \"generally positive reviews\".\n[…]\nBlack Swan at the AFI Catalog of Feature Films"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Swan_Lake",
        "situacao": "ok",
        "texto": "Swan Lake (Russian: Лебединое озеро) is a ballet composed by Russian composer Pyotr Ilyich Tchaikovsky in 1875–76. Despite its initial failure, it is now one of the most popular ballets of all time.\n[…]\nIn 2010, Black Swan, a film starring Natalie Portman and Mila Kunis, contained sequences from Swan Lake.\n[…]\nEl lago de los cisnes (1953) is a short film directed by Francisco Rovira Beleta and shot at the Gran Teatre del Liceu in Barcelona, featuring the participation of the International London Ballet. It is a screen adaptation of only the first two acts of the ballet.\n[…]\nSwan Lake (1981) is a feature-length anime produced by the Japanese company Toei Animation and directed by Koro Yabuki. The adaptation uses Tchaikovsky's score and remains relatively faithful to the story. Two separate English dubs were made, one featuring regular voice actors, and one using celebrities as the main principals (Pam Dawber as Odette, Christopher Atkins as Siegfried, David Hemmings as Rothbart, and Kay Lenz as Odile).\n[…]\nBarbie of Swan Lake (2003) is a direct-to-video children's movie featuring Tchaikovsky's music and motion capture from the New York City Ballet and based on the Swan Lake story. In this version, Odette is not a princess by birth, but a baker's daughter; instead of being kidnapped by Rothbart and taken to the lake against her will, she discovers the Enchanted Forest when she willingly follows a unicorn there.\n[…]\nIn the second season of the anime Kaleido Star, a circus adaptation of Swan Lake becomes one of the Kaleido Stage's most important and successful shows. Main character Sora Naegino plays Princess Odette, with characters Leon Oswald as Prince Siegfried and May Wong as Odile."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cisne_Negro",
        "situacao": "ok",
        "texto": "Cisne Negro (em inglês:  Black Swan) é um filme americano de 2010, dos gêneros suspense e terror psicológico, dirigido por Darren Aronofsky e estrelado por Natalie Portman, Vincent Cassel, Mila Kunis, Barbara Hershey e Winona Ryder. O enredo gira em torno de uma produção do balé dramático O Lago dos Cisnes, de Piotr Ilitch Tchaikovsky, por uma companhia de prestígio da cidade de Nova Iorque.\n[…]\nNina Sayers (Natalie Portman) é uma perfeccionista bailarina profissional de uma companhia de balé de Nova Iorque. Ela mora em um apartamento com sua mãe super protetora, Erica (Barbara Hershey), bailarina aposentada que incentiva a ambição profissional da filha. A companhia está se preparando para abrir a temporada com O Lago dos Cisnes, de Tchaikovsky.\n[…]\nAronofsky levou muito tempo para compreender o mundo do balé e O Lago dos Cisnes e descobrir uma maneira de transmitir esse mundo a um público que, em geral, não entende sobre ele. Com relação sua escolha para a atriz no papel principal, declarou que Portman é uma atriz realmente interessante, e quando a conheceu, adorou a ideia de contratá-la e afastá-la de sua [imagem de garota] inocente. Posteriormente, ela comentou que o fato de ter-se passado dez anos permitiu-lhe amadurecer um pouco mais.\n[…]\nAs coisas de O Lago dos Cisnes estão escondidas lá. É uma montagem louca\". O website Cracked.com afirmou que só essa cena já conta o filme inteiro.\n[…]\nCisne Negro é representado como um paralelo ao Lago dos Cisnes, e existem várias semelhanças entre o filme e peça de balé. No balé, Odette é transformada em um cisne quando está apaixonada por um príncipe. Porém, seu amante, acidentalmente, jura amor eterno a outra garota, Odile, que, naturalmente, é o Cisne Negro. Desesperada e confusa, Odette comete suicídio, atirando-se no mar.\n[…]\nA bailarina Sarah Lane, solista do American Ballet Theatre, foi \"dublê de dança\" de Portman.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Danças Húngaras",
      "descricao": "Conjunto de vinte e uma danças de Johannes Brahms baseadas em temas húngaros, publicadas a partir de 1869."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No filme O Grande Ditador, de 1940, Chaplin faz a barba de um cliente no ritmo de qual peça de Brahms?",
    "resposta": "Dança Húngara número cinco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hungarian_Dances_(Brahms)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hungarian_Dances_(Brahms)",
        "situacao": "ok",
        "texto": "The Hungarian Dances (German: Ungarische Tänze) by Johannes Brahms (WoO 1), are a set of 21 dance tunes based mostly on Hungarian themes, completed in 1879. They vary from about a minute to five minutes in length. They are among Brahms's most popular works and were the most profitable for him. Each dance has been arranged for a wide variety of instruments and ensembles. Brahms originally wrote the\n[…]\nBrahms' Hungarian Dances should be placed in the context of interest in folk music. Both Haydn and Boccherini refer frequently to gypsy music, but in Brahms' day it was Franz Liszt with his Hungarian Rhapsodies who was an inspiration to Brahms, both artistically and financially (despite their differences in musical philosophy). In 1850 Brahms met the Hungarian violinist Ede Reményi and accompanied him in a number of recitals over the next few years.\n[…]\nOnly numbers 11, 14 and 16 are entirely original compositions. The better-known Hungarian Dances include Nos. 1 and 5, the latter of which was based on the csárdás \"Bártfai emlék\" (Memories of Bártfa) by Hungarian composer Béla Kéler, which Brahms mistakenly thought was a traditional folksong. A footnote on the Ludwig-Masters edition of a modern orchestration of Hungarian Dance No. 1 states: \"The material for this dance is believed to have come from the Divine Csárdás (ca.\n[…]\nThe earliest known recording of any movement of Hungarian Dances was a condensed piano-based rendition of Hungarian Dance No. 1, from 1889, played by Brahms himself, and was known to have been recorded by Theo Wangemann, an assistant to Thomas Edison. The following dialogue can be heard in the recording itself, before the music starts:\n[…]\nJoseph Joachim, a close friend of Brahms, in collaboration with an unnamed accompanying pianist, recorded their own renditions of Hungarian Dances Nos. 1 and 2.\n[…]\nHungarian Dance No. 5 on YouTube, Chenyin Li and Iago Núñez"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dan%C3%A7as_H%C3%BAngaras_%28Brahms%29",
        "situacao": "ok",
        "texto": "As Danças Húngaras (em alemão: Ungarische Tänze) por Johannes Brahms, são um conjunto de 21 melodias de dança animadas baseadas principalmente em temas húngaros, concluídas em 1879. Cada dança foi arranjada para uma grande variedade de instrumentos e conjuntos. Brahms escreveu originalmente a versão para piano a quatro mãos e mais tarde arranjou as primeiras dez danças para piano solo.\n[…]\nEstas composições estão entre as obras mais populares de Brahms e foram as mais lucrativas para ele.\n[…]\nApenas os números 11, 14 e 16 são composições inteiramente originais. As danças húngaras mais conhecidas são a 1 e 5, esta última baseada nos csárdás \"Bártfai emlék\" (Memórias de Bártfa) do compositor húngaro Béla Kéler, que Brahms pensou, erroneamente, ser uma canção folclórica tradicional.\n[…]\nem Lá maior (Fá maior no arranjo para piano solo de Brahms): Allegretto – Vivo\n[…]\nBrahms escreveu arranjos orquestrais para os números 1, 3 e 10. Outros compositores orquestraram as outras danças. Esses compositores incluem Antonín Dvořák (nºs 17 a 21), Andreas Hallén (nºs 2, 4 e 7), Paul Juon (nº 4), Martin Schmeling (1864–1943) (nºs 5 a 7), Hans Gál (nºs 8 e 9), Albert Parlow (n.ºs 5, 6 em 1876 e 11 a 16 em 1885) e Robert Schollum (n.ºs 4, 8 e 9). Mais recentemente, Iván Fischer orquestrou o conjunto completo.\n[…]\nAs Danças Húngaras também foram arranjadas para violino e piano, principalmente por Paul Klengel (nºs 1-3, 5-8, 13, 17, 19-21) e Fritz Kreisler (nº 17).\n[…]\nA Dança Húngara nº 4 foi usada pelo compositor John Morris como tema principal em sua trilha sonora para o filme de comédia de Mel Brooks, As Doze Cadeiras (1970), ambientado na União Soviética na década de 1920. Isso incluiu a trilha sonora instrumental do filme e uma música, Hope for the Best, Expect the Worst, com letras de Mel Brooks, todas baseadas na composição de Johannes Brahms.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Niccolò Paganini",
      "descricao": "Violinista virtuose e compositor italiano (1782–1840), autor dos 24 Caprichos para violino solo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O virtuosismo assombroso do violinista italiano Niccolò Paganini alimentou, em sua época, qual boato sobre ele?",
    "resposta": "Que fez pacto com o diabo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Niccol%C3%B2_Paganini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Niccol%C3%B2_Paganini",
        "situacao": "ok",
        "texto": "Niccolò (or Nicolò) Paganini (; Italian: [ni(k)koˈlɔ ppaɡaˈniːni] ; 27 October 1782 – 27 May 1840) was an Italian violinist, guitarist and composer. He was the most celebrated violin virtuoso of his time, and left his mark as one of the pillars of modern violin technique. His 24 Caprices for Solo Violin Op. 1 are among the best known of his compositions.\n[…]\nEugène Ysaÿe – Paganini Variations for violin and piano\n[…]\nOne memorable scene shows Paganini's adversaries sabotaging his violin before a high-profile performance, causing all strings but one to break during the concert. An undeterred Paganini continues to perform on three, two, and finally on a single string. In actuality, Paganini himself occasionally broke strings during his performances on purpose so he could further display his virtuosity. He did this by carefully filing notches into them to weaken them, so that they would break when in use.\n[…]\nThe musical CROSS ROAD ~The Devil's Violinist Paganini~, premiered 2022 and revived 2024, features Niccolo Paganini as a main character, played by Hiroki Aiba (2022 and 2024), Kenta Mizue (2022), and Kento Kinouchi (2024). The story is about his making a contract with the Devil of Music, Amduscias, played by Akinori Nakagawa in both productions. The musical is by Bun-O Fujisawa, composed by Toshiyuki Muranaka. It was performed at Theater Creation in Tokyo, Japan, with a national tour in 2024.\n[…]\nBorer, Philippe (2004). \"Some Reflections on Paganini's Violin Strings\" (PDF). Proceedings of the International Conference on Violin Making (in English and Italian): 85–98. Retrieved 11 August 2023.\n[…]\nBoscassi, Angelo (1909). Il Violino di Niccolò Paganini conservato nel Palazzo Municipale di Genova (in Italian). Napoli: Fratelli Pagano.\n[…]\nViola in music – Niccolò Paganini\n[…]\nThe Mutopia Project has compositions by Niccolò Paganini\n[…]\nImages of Paganini (Gallica)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Niccol%C3%B2_Paganini",
        "situacao": "ok",
        "texto": "Niccolò Paganini (Gênova, 27 de outubro de 1782 – Nice, 27 de maio de 1840) foi um compositor, guitarrista e violinista italiano. É considerado o maior violinista da história, e um dos mais importantes expoentes da música do romantismo.\n[…]\nAinda hoje, sua figura é cercada de lendas relacionadas ao seu prodigioso gênio (algumas também alimentado pelo ambiente do romantismo do século XIX) e ao suposto \"pacto com o diabo\" assinado por ele para obter a fama e habilidades necessárias para tocar violino, contribuindo, assim, para mitificar sua figura.\n[…]\nEm seus primeiros concertos públicos, Niccolò Paganini rapidamente foi considerado uma criança prodígio. Após libertar-se da custodia de seu pai, começou carreira como virtuoso do violino em toda a Itália. Ele também ficou famoso por seu estilo da vida rebelde, frequentemente gastando todo o seu dinheiro em jogos e diversões noturnas. Durante os anos de 1800 a 1805, ele desapareceu completamente da vida pública.\n[…]\nEmbora no início de sua vida profissional Paganini tenha dado seus concertos apenas na Itália, sua fama como violinista-virtuoso logo se espalhou por toda a Europa.\n[…]\nO estilo de vida de Niccolò Paganini e sua aparência mefistofélica deram origem a histórias de que seu virtuosismo era devido a um pacto com o Demônio. No entanto, é mais provável que ele fosse portador de uma doença chamada Síndrome de Marfan, cujos sintomas típicos incluem dedos particularmente compridos e magros.\n[…]\nNo. 13 em Si bemol maior (Riso do Diabo)\n[…]\nEugène Ysaÿe − Paganini variations for violin and piano\n[…]\nBoscassi Angelo, Il Violino di Niccolò Paganini conservato nel Palazzo Municipale di Genova, Fratelli Pagano, 1909.\n[…]\nJohn Sugden, Paganini, Omnibus Press, 1980.\n[…]\nViola in music - Niccolò Paganini",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Réquiem de Mozart",
      "descricao": "Missa de réquiem em ré menor deixada inacabada por Wolfgang Amadeus Mozart ao morrer, em 1791."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O conde que encomendou anonimamente o Réquiem de Mozart, em memória da esposa, tinha um plano para a obra. Qual?",
    "resposta": "Apresentá-la como sua",
    "fonte": [
      "https://en.wikipedia.org/wiki/Requiem_(Mozart)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Requiem_(Mozart)",
        "situacao": "ok",
        "texto": "The Requiem in D minor, K. 626, is a Requiem Mass by Wolfgang Amadeus Mozart. Mozart composed part of the Requiem in Vienna in late 1791, but it was unfinished at his death on 5 December the same year. A completed version was delivered to Count Franz von Walsegg, who had commissioned the piece for a requiem service on 14 February 1792 to commemorate the first anniversary of the death of his wife A\n[…]\nThe eccentric count Franz von Walsegg commissioned the Requiem from Mozart anonymously through intermediaries. The count, an amateur chamber musician who routinely commissioned works by composers and passed them off as his own, wanted a Requiem Mass he could claim he composed to memorialize the recent passing of his wife.\n[…]\nFelicia Hemans' poem \"Mozart's Requiem\" was first published in The New Monthly Magazine in 1828.\n[…]\nMoseley, Paul (1989). \"Mozart's Requiem: A Revaluation of the Evidence\". Journal of the Royal Musical Association. 114 (2). doi:10.1093/jrma/114.2.203. JSTOR 766531.\n[…]\nWolff, Christoph (1994). Mozart's Requiem: Historical and Analytical Studies, Documents, Score. Translated by Mary Whittal. Berkeley: University of California Press. ISBN 978-0520213890.\n[…]\nBrendan Cormican (1991). Mozart's Death – Mozart's Requiem: An Investigation. Belfast, Northern Ireland: Amadeus Press. ISBN 0-9510357-0-3.\n[…]\nHeinz Gärtner (1991). Constanze Mozart: after the Requiem. Portland, Oregon: Amadeus Press. ISBN 0-931340-39-X.\n[…]\nC. R. F. Maunder (1988). Mozart's Requiem: On Preparing a New Edition. Oxford: Clarendon Press. ISBN 0-19-316413-2.\n[…]\nRequiem: Score and critical report (in German) in the Neue Mozart-Ausgabe\n[…]\nFree scores of Requiem, K. 626 in the Choral Public Domain Library (ChoralWiki)\n[…]\nRequiem in D minor, K. 626: Scores at the International Music Score Library Project\n[…]\nArticle on the Requiem at h2g2\n[…]\nMozart's Requiem, new completion of the score by musicologist Robert D. Levin, live concert"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Requiem_%28Mozart%29",
        "situacao": "ok",
        "texto": "Réquiem em ré menor (K. 626) é uma missa fúnebre composta por Wolfgang Amadeus Mozart em 1791. A obra foi encomendada pelo conde Franz von Walsegg, mas não pôde ser concluída pelo compositor em razão de sua morte no mesmo ano. Posteriormente, foi completada por seus amigos e discípulos: Franz Xaver Süßmayr, Joseph Leopold Eybler e, possivelmente, Franz Jacob Freystädtler.\n[…]\nEm 14 de fevereiro de 1791, Anna Walsegg, esposa do conde Franz von Walsegg faleceu aos 20 anos. Em julho do mesmo ano, um mensageiro desconhecido (possivelmente Franz Anton Leitgeb ou Johann Nepomuk Sortschan) chegou à residência de Mozart, enviado por Walsegg. O conde desejava uma missa de réquiem em memória de sua esposa, com a intenção de apresentar a obra  como sendo de sua própria autoria, motivo pelo qual manteve o anonimato.\n[…]\nEm 21 de dezembro de 1791, Constanze Mozart encarregou o jovem Joseph Eybler de concluir o Réquiem. A decisão foi motivada pelas consideráveis dívidas deixadas por Mozart, que levaram sua esposa a buscar o pagamento do valor restante da encomenda. Eybler trabalhou na orquestração da obra, completando todas as partes dos instrumentos de cordas da Sequentia, além da instrumentação do Dies Irae e do Confutatis. Também acrescentou dois compassos à linha do soprano no Lacrimosa.\n[…]\nPesquisas posteriores conduzidas por Alan Tyson analisaram o tipo de papel utilizado e concluíram que se tratava de um papel de tipo II, que Mozart só passou a empregar em setembro de 1771, não sendo, portanto, do Kyrie (K. 341). Além disso, a fuga apresenta a inversão do tema principal do Réquiem, e segue um padrão estrutural coerente com o restante da obra: todas as grandes seções (Intoitus, Sequentia, Offertorium, Sanctus e Agnus Dei), com exceção da Sequentia, terminam em fugas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Dieterich Buxtehude",
      "descricao": "Organista e compositor barroco dano-alemão (c. 1637–1707), organista da Igreja de Santa Maria de Lübeck."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1705, o jovem Bach caminhou cerca de quatrocentos quilômetros até a cidade de Lübeck. Qual era o motivo da viagem?",
    "resposta": "Ouvir o organista Buxtehude",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dieterich_Buxtehude"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dieterich_Buxtehude",
        "situacao": "ok",
        "texto": "Dieterich Buxtehude (German: [ˈdiːtəʁɪç bʊkstəˈhuːdə]; born Diderich Hansen Buxtehude, Danish: [ˈtiðˀəʁek ˈhænˀsn̩ pukstəˈhuːðə]; c. 1637 – 9 May 1707) was a Danish composer and organist of the middle Baroque era, whose works are typical of the North German organ school. As a composer who worked in various vocal and instrumental idioms, Buxtehude's style greatly influenced other composers, such as\n[…]\nBuxtehude and Anna Margarethe had seven daughters who were baptized at the Marienkirche; however, his first daughter died as an infant. After his retirement as organist at St Olaf's Church, his father joined the family in Lübeck in 1673. Johannes died a year later, and Dieterich composed his funeral music. Dieterich's brother Peter, a barber, joined them in 1677.\n[…]\nIn 1703, Handel and Mattheson both traveled to meet Buxtehude, who was by then elderly and ready to retire. He offered his position in Lübeck to Handel and Mattheson but stipulated that the organist who ascended to it must marry his eldest daughter, Anna Margareta. Both Handel and Mattheson turned the offer down and left the day after their arrival. In 1705, J.S.\n[…]\nBach, then a young man of twenty, walked from Arnstadt to Lübeck, a distance of more than 400 kilometres (250 mi), and stayed nearly three months to hear the Abendmusik, meet the pre-eminent Lübeck organist, hear him play, and, as Bach explained, \"to comprehend one thing and another about his art\". In addition to his musical duties, Buxtehude, like his predecessor Tunder, served as church treasurer.\n[…]\nHans Davidsson (complete organ works – Volume 1: Dieterich Buxtehude and the Mean-Tone Organ, Volume 2: The Bach Perspective, and Volume 3: Dieterich Buxtehude and the Schnitger Organ)\n[…]\nSnyder, Kerala (1987). Dieterich Buxtehude: Organist in Lübeck. New York: Schirmer Books. ISBN 0-02-873080-1.\n[…]\nActivities Buxtehudeyear, organized by The Netherlands Bach Society"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dieterich_Buxtehude",
        "situacao": "ok",
        "texto": "Dieterich Buxtehude (de; nascido Diderich Hansen Buxtehude, da; c. 1637 – 9 de maio de 1707) foi um compositor e organista dinamarquês do período Barroco médio, cujas obras são típicas da Escola de Órgão do Norte da Alemanha. Como um compositor que trabalhou em diversos idiomas vocais e instrumentais, o estilo de Buxtehude influenciou grandemente outros compositores, como Johann Sebastian Bach e G\n[…]\nBuxtehude e Anna Margarethe tiveram sete filhas, batizadas na Marienkirche; no entanto, sua primeira filha morreu na infância. Após se aposentar como organista na Igreja de Santo Olavo, seu pai juntou-se à família em Lübeck em 1673. Johannes morreu um ano depois, e Dieterich compôs a música para seu funeral. O irmão de Dieterich, Peter, um barbeiro, juntou-se a eles em 1677.\n[…]\nEm 1673, ele reorganizou uma série de apresentações musicais noturnas, iniciadas por Tunder, conhecidas como Abendmusik, que atraíam músicos de diversos lugares e permaneceram como uma tradição da igreja até 1810. Em 1703, Händel e Mattheson viajaram para conhecer Buxtehude, que já estava idoso e pronto para se aposentar. Ele ofereceu seu cargo em Lübeck a Händel e Mattheson, mas estipulou que o organista que o assumisse deveria se casar com sua filha mais velha, Anna Margareta.\n[…]\nAmbos recusaram a oferta e partiram no dia seguinte à chegada. Em 1705, J.S. Bach, então um jovem de vinte anos, caminhou de Arnstadt até Lübeck, uma distância de mais de 400 km, e permaneceu quase três meses para ouvir a Abendmusik, conhecer o eminente organista de Lübeck, ouvi-lo tocar e, como Bach explicou, \"para compreender uma coisa e outra sobre sua arte\". Além de seus deveres musicais, Buxtehude, como seu predecessor Tunder, serviu como tesoureiro da igreja.\n[…]\nSnyder, Kerala (1987). Dieterich Buxtehude: Organist in Lübeck. New York: Schirmer Books. ISBN 0-02-873080-1\n[…]\nSociedade Internacional Dieterich Buxtehude.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "L'Orfeo",
      "descricao": "Ópera de Claudio Monteverdi sobre o mito de Orfeu, estreada em Mântua em 1607."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "L'Orfeo, de Monteverdi, uma das óperas mais antigas ainda encenadas regularmente, estreou na corte de Mântua em que século?",
    "resposta": "Século dezessete",
    "fonte": [
      "https://en.wikipedia.org/wiki/L%27Orfeo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/L%27Orfeo",
        "situacao": "ok",
        "texto": "L'Orfeo (SV 318) (Italian pronunciation: [lorˈfɛːo]), or La favola d'Orfeo [la ˈfaːvola dorˈfɛːo], is a late Renaissance/early Baroque favola in musica, or opera, by Claudio Monteverdi, with a libretto by Alessandro Striggio. It is based on the Greek legend of Orpheus, and tells the story of his descent to Hades and his fruitless attempt to bring his dead bride Eurydice back to the living world. I\n[…]\nA clue about who played Euridice is contained in a 1608 letter to Duke Vincenzo. It refers to \"that little priest who performed the role of Euridice in the Most Serene Prince's Orfeo\". This priest was possibly Padre Girolamo Bacchini, a castrato known to have had connections to the Mantuan court in the early 17th century. The Monteverdi scholar Tim Carter speculates that two prominent Mantuan tenors, Pandolfo Grande and Francesco Campagnola may have sung minor roles in the premiere.\n[…]\nDespite the reluctance of some major opera houses to stage L'Orfeo, it is a popular work with the leading Baroque ensembles. From 2008 to 2010, the French-based Les Arts Florissants, under its director William Christie, presented the Monteverdi trilogy of operas (L'Orfeo, Il ritorno d'Ulisse and L'incoronazione di Poppea) in a series of performances at the Teatro Real in Madrid.\n[…]\nFenlon, Ian (1986a). \"The Mantuan Orfeo\" in Whenham, John (ed.): Claudio Monteverdi: Orfeo. Cambridge, England: Cambridge University Press. ISBN 0-521-24148-0.\n[…]\nFenlon, Ian (1986b). \"Correspondence relating to the early Mantuan performances\" in Whenham, John (ed.): Claudio Monteverdi: Orfeo. Cambridge, England: Cambridge University Press. ISBN 0-521-24148-0.\n[…]\nWhenham, John (1986). \"Five acts, one action\" in Claudio Monteverdi: Orfeo. London: Cambridge University Press. ISBN 0-521-24148-0.\n[…]\nGolomb, Uri (April 2007). \"Ars Polemica: Monteverdi's Orfeo as artistic creed\". Goldberg: Early Music Magazine (45): 44–57."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%27Orfeo",
        "situacao": "ok",
        "texto": "L'Orfeo, favola in musica, uma das primeiras obras catalogadas como ópera, foi composta por Claudio Monteverdi (1567-1643) sobre libreto de Alessandro Striggio, por ocasião do aniversário de Francesco Gonzaga. É estruturada em cinco atos precedidos de um  prólogo.\n[…]\nA sua ante-estreia foi na Academia degl'Invaghiti, em Mântua, em 22 de fevereiro de 1607, e a estreia foi no Teatro da Corte de Mântua, em 24 de de fevereiro de 1607. Foi publicada em Veneza, em 1609. Esta obra teve um papel cimeiro no desenvolvimento do gênero ópera visto que é a que mais se aproxima do modelo que se consagraria depois. É justamente considerada a primeira obra prima do gênero operático.\n[…]\nAlterna árias, recitativos e arioso (invenção de Monteverdi que fica entre o recitativo e a ária). Uma obra que mostra a passagem do modalismo para a tonalidade, onde o baixo-contínuo é usado constantemente e o texto é soberano da música.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Guido d'Arezzo",
      "descricao": "Monge e teórico musical italiano da Idade Média, criador de um sistema de notação e da solmização a partir do hino Ut queant laxis."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O monge italiano Guido d'Arezzo, que usou um hino a São João para ensinar as notas musicais, viveu em que século?",
    "resposta": "Século onze",
    "distratores": [
      "Século nove",
      "Século treze",
      "Século quinze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guido_of_Arezzo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guido_of_Arezzo",
        "situacao": "ok",
        "texto": "Guido of Arezzo (Italian: Guido d'Arezzo; c. 991–992 – after 1033) was an Italian music theorist and pedagogue of High medieval music. A monk from the Order of Saint Benedict, he is regarded as the inventor—or by some, developer—of the modern staff notation that had a massive influence on the development of Western musical notation and practice.\n[…]\nArezzo was without a monastery; Bishop Tedald of Arezzo (Bishop from 1023 to 1036) appointed Guido to oversee the training of singers for the Arezzo Cathedral. It was at this time that Guido began work on the Micrologus, or in full Micrologus de disciplina artis musicae. The work was both commissioned by and dedicated to Tedald.\n[…]\nGuido of Arezzo and his work are frequent namesakes. The controversial mass Missa Scala Aretina (1702) by Francisco Valls takes its name from Guido's hexachord. Lorenzo Nencini sculpted a statue of Guido in 1847 that is included in the Loggiato of the Uffizi, Florence. A statue to him was erected 1882 in his native Arezzo; it was sculpted by Salvino Salvini.\n[…]\nIn 1950, the Comitato Nazionale per le Onoranze a Guido Monaco (National Committee for Honors to Guido Monaco) held various events for the ninth centenary of Guido's death. Among these was a monograph competition; Jos Smits van Waesberghe won with the Latin work De musico-paedagogico et theoretico Guidone Aretino eiusque vita et moribus (The Musical-Pedagogy of Theoretician Guido of Arezzo Both His Life and Morals).\n[…]\nGuido of Arezzo (1955). van Waesberghe, Jos Smits [in Dutch] (ed.). Micrologus. Corpus Scriptorum de Musica. Vol. 4. Rome: American Institute of Musicology. OCLC 1229808694.\n[…]\nManuscripts of works by Guido at The British Library\n[…]\nDigitized 12th-century manuscript of four works by Guido of Arezzo (bound with a copy of Boethius' De Musica) at Alexander Turnbull Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guido_de_Arezzo",
        "situacao": "ok",
        "texto": "Guido d'Arezzo (992 — 1050) foi um monge italiano e regente do coro da Catedral de Arezzo (Toscana), província de seu nascimento.\n[…]\nAssim, mudou-se para Arezzo em 1025 e, sob o patrocínio do bispo Tedaldo de Arezzo, ensinou cantores na Catedral de Arezzo. Usando a notação da pauta, ele foi capaz de ensinar grandes quantidades de música rapidamente e ele escreveu o multifacetado Micrologus, atraindo a atenção de toda a Itália. Interessado em suas inovações, o Papa João XIX o chamou a Roma. Depois de chegar e começar a explicar seus métodos ao clero, a doença o mandou embora no verão.\n[…]\nFoi o criador da notação moderna, com a criação do tetragrama, encerrando com o uso de neumas na História da Música, e batizou as notas musicais com os nomes que conhecemos hoje: dó, ré, mi, fá, sol, lá e si (antes, ut, re, mi, fa, sol, la e san), e é por ele que os países de origem ibérica têm uma fala das notas musicais diferente dos povos Anglo-Saxônicos. baseando-se em um texto sagrado em latim do hino a São João Batista:\n[…]\nVertendo-se livremente para o português, reza mais ou menos assim:“Para que os servos possam, com suas vozes soltas, ressoar as maravilhas de vossos atos, limpa a culpa do lábio manchado, ó São João!”A Guido d'Arezzo é também atribuído a invenção da \"Mão Guidoniana\", um sistema mnemônico usado para o ensino da leitura musical, em que os nomes das notas correspondiam a partes da mão humana.\n[…]\nGuido of Arezzo (1955). van Waesberghe, Jos Smits, ed. Micrologus. Col: Corpus Scriptorum de Musica. 4. Roma: American Institute of Musicology. OCLC 1229808694\n[…]\nManuscritos de obras de Guido - The British Library",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "O Anel do Nibelungo",
      "descricao": "Ciclo de óperas de Richard Wagner baseado na mitologia nórdica e germânica, apresentado completo em Bayreuth em 1876."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O ciclo O Anel do Nibelungo, de Richard Wagner, inspirado na mitologia nórdica, é formado por quantas óperas?",
    "resposta": "Quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Der_Ring_des_Nibelungen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Der_Ring_des_Nibelungen",
        "situacao": "ok",
        "texto": "Der Ring des Nibelungen (The Ring of the Nibelung), WWV 86, is a cycle of four German-language epic music dramas composed by Richard Wagner. The works are based loosely on characters from Germanic heroic legend, namely Norse legendary sagas and the Nibelungenlied. The composer termed the cycle a \"Bühnenfestspiel\" (stage festival play), structured in three days preceded by a Vorabend (\"preliminary \n[…]\nWagner developed the story of the Ring by fusing elements from many  Germanic and  Scandinavian myths and folk-tales. The Old Norse Edda texts supplied much of the material for Das Rheingold, while Die Walküre was largely based on the Völsunga saga. Siegfried contains elements from the Eddur, the Völsunga saga and Thidrekssaga. The final Götterdämmerung draws from the 12th-century German poem, the Nibelungenlied, which appears to have been the original inspiration for the Ring.\n[…]\nFinally Wagner announces:\n[…]\nThe German two-part television movie Dark Kingdom: The Dragon King (2004, also known as Ring of the Nibelungs, Die Nibelungen, Curse of the Ring and Sword of Xanten), is based in some of the same material Richard Wagner used for his music dramas Siegfried and Götterdämmerung.\n[…]\nMillington, Barry (2008). \"Der Ring des Nibelungen: conception and interpretation\". In Grey, Thomas S. (ed.). The Cambridge Companion to Wagner. Cambridge Companions to Music. Cambridge University Press. pp. 74–84. ISBN 978-0-521-64439-6.\n[…]\nBesack, Michael, The Esoteric Wagner: An Introduction to Der Ring des Nibelungen, Berkeley: Regent Press, 2004 ISBN 978-1-58790-074-7.\n[…]\nLee, M. Owen, (1994) Wagner's Ring: Turning the Sky Round. Amadeus Press, ISBN 978-0-87910-186-2.\n[…]\nSabor, Rudolph, (1997) Richard Wagner: Der Ring des Nibelungen: a companion volume. Phaidon Press, ISBN 0-7148-3650-8.\n[…]\nScruton, Sir Roger, (2016) The Ring of Truth: The Wisdom of Wagner's Ring of the Nibelung. Penguin UK. ISBN 1-4683-1549-8."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Der_Ring_des_Nibelungen",
        "situacao": "ok",
        "texto": "Der Ring des Nibelungen (O Anel do Nibelungo) é um ciclo de quatro óperas épicas do compositor alemão Richard Wagner. Elas são adaptações dos personagens mitológicos das sagas nórdicas e do Nibelungenlied.\n[…]\nWagner criou a história do anel ao fundir elementos de diversas histórias e mitos das mitologias germânica e escandinava. Os Eddas forneceram material para Das Rheingold, enquanto Die Walküre é amplamente baseada na Saga dos Volsungos. Siegfried contém elementos dos Eddas, da Saga dos Volsungos e da Saga Thidreks. A ópera final, Götterdämmerung, é baseada no poema do século XII Nibelungenlied, que foi a inspiração original para o Anel.\n[…]\nRichard Wagner compôs para a tetralogia O Anel de Nibelungo uma orquestra excepcionalmente grande, mas era muito específico sobre quantos instrumentos deveria fazer cada papel.\n[…]\nA obra é um enorme comprometimento para qualquer companhia de ópera, a apresentação das quatro óperas interligadas requer grande esforço tanto do ponto artístico quanto do financeiro. Na maioria das casas de ópera, a produção ocorre por diversos anos, de forma que uma ou duas óperas são adicionadas ao repertório a cada ano; Bayreuth é uma exceção nesse aspecto. As primeiras produções tentavam manter a visão original de Wagner.\n[…]\nDe J. R. R. Tolkien, a série de livros O Senhor dos Anéis aparenta referenciar alguns elementos do ciclo do Anel; entretanto, o próprio autor negou ter se inspirado no trabalho de Wagner. Algumas das similaridades se devem ao fato de ambos terem referenciado as mesmas fontes mitológicas para suas respectivas obras, incluindo a Saga dos Volsungos e o Edda em verso.\n[…]\nElizabeth Magee, Richard Wagner and the Nibelungs, Oxford (Clarendon Press) 1991.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Fidelio",
      "descricao": "Ópera de Ludwig van Beethoven sobre uma mulher que se disfarça de homem para libertar o marido preso, em versão final de 1814."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Beethoven compôs nove sinfonias e trinta e duas sonatas para piano. E quantas óperas ele completou?",
    "resposta": "Apenas uma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fidelio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fidelio",
        "situacao": "ok",
        "texto": "Fidelio (; German: [fiˈdeːlio]), originally titled Leonore, oder Der Triumph der ehelichen Liebe (Leonore, or The Triumph of Marital Love), Op. 72, is the sole opera by German composer Ludwig van Beethoven. The libretto was originally prepared by Joseph Sonnleithner from the French of Jean-Nicolas Bouilly. The opera premiered at Vienna's Theater an der Wien on 20 November 1805.\n[…]\nIn its time, Fidelio was Beethoven's contribution to an ongoing and successful tradition of operatic composition; a tradition harder to discern today because none of the operas involved, other than Beethoven's, has survived into the modern repertory. The tradition was imported to Beethoven's Vienna from Revolutionary France and involved work of many composers, most notably Luigi Cherubini, whose work Beethoven (unusually) strongly admired.\n[…]\nFidelio itself, which Beethoven began in 1804 immediately after giving up on Vestas Feuer, was first performed in 1805 and was extensively revised by the composer for subsequent performances in 1806 and 1814. Although Beethoven used the title Leonore, oder Der Triumph der ehelichen Liebe (\"Leonore, or The Triumph of Married Love\"), the 1805 performances were billed as Fidelio at the theatre's insistence, to avoid confusion with the operas by Gaveaux and Paer.\n[…]\nBeethoven published the 1806 libretto and, in 1810, a vocal score under the title Leonore. The current convention is to use the name Leonore for both the 1805 (three-act) and 1806 (two-act) versions and Fidelio only for the final 1814 revision.\n[…]\nBeethoven struggled to produce an appropriate overture for Fidelio, and ultimately went through four versions. His first attempt, for the 1805 premiere, is believed to have been the overture now known as \"Leonore No. 2\" in C major. Beethoven then wrote a different version for the performances of 1806, creating \"Leonore No. 3\", also in C major."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fidelio",
        "situacao": "ok",
        "texto": "Fidelio (em português Fidélio), Op. 72b, é um Singspiel em dois atos, de Ludwig van Beethoven, com libretto de Joseph Sonnleithner e Georg Friedrich Treitschke baseado no libreto de Léonore ou  L’Amour Conjugal (1798), peça em  \"prosa entremeada de canto\", de Jean-Nicolas Bouilly, baseada nas memórias do autor sobre os acontecimentos da França durante o Terror, quando ele era  promotor público do \n[…]\nFidelio é a única obra teatral de Beethoven,  que a compôs no ápice da sua maturidade artística. Mas a primeira versão, apresentada em 20 de novembro de  1805 no Theater an der Wien (Viena), com o título Fidelio, oder die eheliche Liebe (Op. 72), não teve recepção favorável do público, e  Beethoven foi obrigado a suspender as  apresentações.\n[…]\nBeethoven foi acusado de não saber escrever para as vozes, de tratá-las indistintamente como instrumentos e de ser pouco familiarizado com o gênero teatral. Apesar das duras críticas recebidas, o compositor arranjou uma nova versão em apenas dois atos, utilizando-se de um libretto revisto por seu amigo Stephan von Breuning. A obra foi de novo apresentada no ano seguinte (26 de março de 1806) com o título de Leonore (Op. 72a), mas não teve melhor sorte, sendo novamente retirada.\n[…]\nO sinal mais evidente do longo trabalho de composição são as quatro aberturas escritas por Beethoven para o Singspiel: duas compostas em 1804, uma em 1805 e a definitiva, feita em 1814.\n[…]\nNum quarteto, os quatro personagens expressam os seus diferentes sentimentos: Marzelline e Rocco, manifestam o seu desejo de um futuro casamento entre a jovem e Fidelio; Leonore declara a sua angústia pelo marido e a sua preocupação perante a paixão que despertou em Marzelline; Jaquino, por sua vez, apercebe-se que o coração da sua namorada se encontra cada vez mais longe de si e sai de cena.\n[…]\nFidelio: partituras livres no International Music Score Library Project.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Catálogo Köchel",
      "descricao": "Catálogo cronológico das obras de Mozart, publicado por Ludwig von Köchel em 1862, que numera as peças com a letra K."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No catálogo Köchel, que numera as obras de Mozart em ordem cronológica, que número recebeu o Réquiem, a última obra da lista?",
    "resposta": "626",
    "distratores": [
      "525",
      "551",
      "492"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/K%C3%B6chel_catalogue",
      "https://en.wikipedia.org/wiki/Requiem_(Mozart)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/K%C3%B6chel_catalogue",
        "situacao": "ok",
        "texto": "The Köchel catalogue (German: Köchel-Verzeichnis) is a catalogue of compositions by Wolfgang Amadeus Mozart, originally created by Ludwig Ritter von Köchel, in which the entries are abbreviated K. or KV. Its numbers reflect the ongoing task of compiling the chronology of Mozart's works, and provide a shorthand reference to the compositions. For example, according to Köchel's counting, Requiem in D\n[…]\nIn the decades after Mozart's death in 1791 there were several attempts to catalogue his compositions, for example by Franz Gleißner and Johann Anton André (published in 1833), but it was not until 1862 that Ludwig von Köchel succeeded in producing a comprehensive listing. Köchel's 551-page catalogue was titled Chronologisch-thematisches Verzeichniss sämmtlicher Tonwerke W. A. Mozart's (Chronological-thematic Catalogue of the Complete Musical Works of W. A. Mozart).\n[…]\nKöchel divided the corpus into a main chronology of 626 works, and five appendices (Anhänge in German), abbreviated Anh. I–V which comprise:\n[…]\nFrom the time Köchel published his original catalogue in 1863 (now referred to as K1), the dating of Mozart's compositions has been subject to constant revision. Many more pieces have since been discovered, re-dated, or re-attributed, necessitating multiple revised editions of the catalogue.\n[…]\nWorks newly included in the ninth edition's main catalogue were given numbers past 626, up to 721.\n[…]\n\"Köchel Catalogue Online – Explore Mozart's Work\", work details, score incipits, audio files, International Mozarteum Foundation\n[…]\nChronologisch-Thematisches Verzeichniss sämmtlicher Tonwerke Wolfgang Amade Mozarts: Complete text at the International Music Score Library Project\n[…]\nKöchel Catalogue, All About Mozart\n[…]\nMozartForum's Köchel Catalogue\n[…]\nClassical Net's Köchel Catalogue\n[…]\nAbout Franz Gleißner who compiled a catalogue of Mozart's works in Constanze Mozart's estate (in German)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Requiem_(Mozart)",
        "situacao": "ok",
        "texto": "The Requiem in D minor, K. 626, is a Requiem Mass by Wolfgang Amadeus Mozart. Mozart composed part of the Requiem in Vienna in late 1791, but it was unfinished at his death on 5 December the same year. A completed version was delivered to Count Franz von Walsegg, who had commissioned the piece for a requiem service on 14 February 1792 to commemorate the first anniversary of the death of his wife A\n[…]\nFelicia Hemans' poem \"Mozart's Requiem\" was first published in The New Monthly Magazine in 1828.\n[…]\nKeefe, Simon P. (2012). Mozart's Requiem: Reception, Work, Completion. Cambridge University Press. ISBN 978-0-521-19837-0. OCLC 804845569.\n[…]\nMoseley, Paul (1989). \"Mozart's Requiem: A Revaluation of the Evidence\". Journal of the Royal Musical Association. 114 (2). doi:10.1093/jrma/114.2.203. JSTOR 766531.\n[…]\nWolff, Christoph (1994). Mozart's Requiem: Historical and Analytical Studies, Documents, Score. Translated by Mary Whittal. Berkeley: University of California Press. ISBN 978-0520213890.\n[…]\nBrendan Cormican (1991). Mozart's Death – Mozart's Requiem: An Investigation. Belfast, Northern Ireland: Amadeus Press. ISBN 0-9510357-0-3.\n[…]\nHeinz Gärtner (1991). Constanze Mozart: after the Requiem. Portland, Oregon: Amadeus Press. ISBN 0-931340-39-X.\n[…]\nC. R. F. Maunder (1988). Mozart's Requiem: On Preparing a New Edition. Oxford: Clarendon Press. ISBN 0-19-316413-2.\n[…]\nRequiem: Score and critical report (in German) in the Neue Mozart-Ausgabe\n[…]\n\"Work details, sound sample\", Köchel-Verzeichnis, International Mozarteum Foundation\n[…]\nFree scores of Requiem, K. 626 in the Choral Public Domain Library (ChoralWiki)\n[…]\nRequiem in D minor, K. 626: Scores at the International Music Score Library Project\n[…]\nMichael Lorenz: \"Freystädtler's Supposed Copying in the Autograph of K. 626: A Case of Mistaken Identity\", Vienna 2013\n[…]\nMozart's Requiem, new completion of the score by musicologist Robert D. Levin, live concert"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cat%C3%A1logo_K%C3%B6chel",
        "situacao": "ok",
        "texto": "O catálogo Köchel é um inventário das obras de Wolfgang Amadeus Mozart, organizado em ordem cronológica (ou quase), pelo musicólogo austríaco Ludwig von Köchel e publicado originalmente em 1862. Trata-se de uma tentativa de estabelecer não apenas uma cronologia mas também facilitar as referências às obras de Mozart. A cada obra corresponde um índice Köchel, ou seja, um número precedido da letra K \n[…]\nAssim, a 433.ª obra do compositor (Männer suchen stets zu naschen\". Arie für Baß und Orchester) é identificada simplesmente pelo índice K 433 ou KV 433. O catálogo começa com um pequeno Minueto em Sol (K.1) e termina no célebre Requiem (K. 626).\n[…]\nDesde a morte de Mozart, foram feitas diversas tentativas de catalogar as suas composições, até que, em 1862, Köchel publicou o seu  Chronologisch - thematisches Verzeichnis sämtlicher Tonwerke Wolfgang Amadé Mozarts (\"Catálogo cronológico-temático completo da obra musical de Amadeus Mozart\"), com  551 páginas. O catálogo também incluía as notas de abertura de cada obra (o chamado incipit).\n[…]\nKöchel tentou organizar as composições em ordem cronológica, porém as obras escritas antes de 1784 têm datação apenas aproximada. Desde a primeira publicação do catálogo de Köchel, muitas outras peças foram encontradas. Houve também muitas correções quanto à atribuição de autoria ou datas, o que demandou três revisões do catálogo. As correções foram feitas principalmente nas edições de 1937 e de 1964.\n[…]\n«Catálogo Köchel»\n[…]\n«Composições de Mozart, segundo o gênero.»\n[…]\n«Edição digital das partituras de Mozart» (em inglês) .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Aida",
      "descricao": "Ópera de Giuseppe Verdi, estreada no Cairo em 1871, sobre o amor de uma princesa etíope escravizada por um general."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A ópera Aida, de Verdi, conta o amor entre um general e uma princesa etíope escravizada. Em que país antigo se passa a história?",
    "resposta": "Egito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aida"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aida",
        "situacao": "ok",
        "texto": "Aida (or Aïda, Italian: [aˈiːda]) is a tragic opera in four acts by Giuseppe Verdi to an Italian libretto by Antonio Ghislanzoni. Set in the Old Kingdom of Egypt, it was commissioned by Cairo's Khedivial Opera House and had its première there on 24 December 1871, in a performance conducted by Giovanni Bottesini. Today the work holds a central place in the operatic canon, receiving performances eve\n[…]\nAt New York's Metropolitan Opera alone, Aida has been sung more than 1,100 times since 1886. Ghislanzoni's scheme follows a scenario often attributed to the French Egyptologist Auguste Mariette, but Verdi biographer Mary Jane Phillips-Matz argues that the source is actually Temistocle Solera.\n[…]\nBecause the scenery and costumes were stuck in the French capital during the Siege of Paris (1870–71) of the ongoing Franco-Prussian War,  the premiere was delayed and Verdi's Rigoletto was performed instead. The first opera performed at the Khedivial Opera House, Aida eventually premiered in Cairo on 24 December 1871.\n[…]\nThe 1952 Broadway musical My Darlin' Aida, set on a plantation in Tennessee in the first year of the American Civil War, is based on the opera and uses Verdi's music.\n[…]\nBusch, Hans (1978). Verdi's Aida. The History of an Opera in Letters and Documents. Minneapolis: University of Minnesota Press. ISBN 978-0-8166-0798-3\n[…]\nParker, Roger (1998). \"Aida\". In Sadie, Stanley (ed.). The New Grove Dictionary of Opera. Vol. 1. London: Macmillan. ISBN 0-333-73432-7.\n[…]\nRous, Samual Holland (1917). \"Aida\". The Victrola Book of the Opera: Stories of One Hundred and Twenty Operas with Seven-Hundred Illustrations and Descriptions of Twelve-Hundred Victor Opera Records (4th rev. ed.). Camden, New Jersey: Victor Talking Machine Co. pp. 16–29.\n[…]\nAïda : an opera in four acts, 1900 publication, English, digitised by BYU on archive.org\n[…]\nSynopsis, commentary, music analysis, anecdotes, opera-inside.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aida",
        "situacao": "ok",
        "texto": "Aida é uma ópera em quatro atos, com música de Giuseppe Verdi e libreto de Antonio Ghislanzoni. Sua estreia mundial aconteceu na Casa da Ópera,  no Cairo, em 24 de dezembro de 1871. Aida foi composta por encomenda do governo egípcio para comemorar a inauguração do canal de Suez, fato que ocorreu em 17 de novembro de 1869. Sua estreia, no entanto, ocorreu com 2 anos de atraso por atrasos na composi\n[…]\nO sumo-sacerdote Ramfis faz saber a Radamés, capitão da guarda egípcia, que os etíopes cobiçam o Egito. Depois acrescenta que a deusa Ísis decidiu que deve comandar os exércitos egípcios para defender o seu território e vai ter com o faraó para informar do divino desígnio. Radamés sonha ser o escolhido e idealiza uma volta vitoriosa da batalha para oferecer o seu triunfo à sua amada Aida, escrava da filha do faraó e filha do rei etíope Amonasro.\n[…]\nAo saber da “terrível notícia”, Aida é incapaz de esconder o seu luto e manifesta na frente de sua patroa o seu amor por Radamés. A princesa egípcia então diz a verdade que Radamés continua vivo e que ela também o ama. Além disso, Aida jamais poderá desfrutar do amor do jovem guerreiro porque não passa de uma simples escrava. A princesa etíope consegue dominar-se depois de sentir a tentação de revelar a sua verdadeira linhagem e reconhece que só vive para esse amor.\n[…]\nNuma sala do palácio do faraó perto da cela de Radamés e da sala de julgamento: Amneris, ainda apaixonada por Radamés apesar de este ter tentado fugir com a escrava, ordena que o preso seja conduzido à sua presença. A filha do faraó tenta convencê-lo a pedir clemência das acusações que lhe são imputadas, mas o militar nega-se. A princesa egípcia comunica-lhe então que Aida ainda está viva, ao que Radamés responde que está confiante de que sua amada consiga voltar à sua pátria.\n[…]\n{os diários de dom Pedro II no Egito,Júlio gralha}\n[…]\n«Giuseppe Verdi Official Site»\n[…]\n«Verdi em Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Música Aquática",
      "descricao": "Coleção de suítes orquestrais de Georg Friedrich Händel, estreada em 1717 num passeio de barco do rei Jorge I."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A Música Aquática, de Händel, estreou em 1717, tocada numa barcaça que acompanhava o rei Jorge I por qual rio?",
    "resposta": "Tâmisa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Water_Music"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Water_Music",
        "situacao": "ok",
        "texto": "The Water Music (German: Wassermusik) is a collection of orchestral movements, often published as three suites, composed by George Frideric Handel. It premiered on 17 July 1717, in response to King George I's request for a concert on the River Thames.\n[…]\nThe first performance of the Water Music is recorded in The Daily Courant, the first British daily newspaper. At about 8 p.m. on Wednesday, 17 July 1717, King George I and several aristocrats boarded a royal barge at Whitehall Palace, for an excursion up the Thames toward Chelsea. The rising tide propelled the barge upstream without rowing. Another barge, provided by the City of London, transported about 50 musicians who performed Handel's music.\n[…]\nThere are many recordings. The Music for the Royal Fireworks (1749), composed 32 years later for another outdoor performance (this time, for George II of Great Britain for the fireworks in London's Green Park, on 27 April 1749), has often been paired with the Water Music on recordings.\n[…]\nHamilton Harty's re-orchestration was used in some earlier recordings of the Water Music. In 1956 the conductor Charles Mackerras recorded this version, but he later changed his approach to Handel turning to the composer's original orchestration (his 1959 recording of the Music for the Royal Fireworks being seen as something of a watershed).\n[…]\nThere is a chamber version of the score known as the Oxford Water Music. The title comes from the location of the manuscript rather than the assumed place of performance: the arrangement was possibly intended by Handel for performance at Cannons by the band of his patron the Duke of Chandos. It has been recorded on the Avie label.\n[…]\nWater Music: Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%BAsica_Aqu%C3%A1tica",
        "situacao": "ok",
        "texto": "Música Aquática (em inglês: Water Music) é uma coleção de movimentos orquestrais, frequentemente divididos em três suítes, compostas por George Frideric Handel. Sua estreia se deu em 17 de julho de 1717, após o rei Jorge I encomendar um concerto para ser executado sobre o rio Tâmisa.\n[…]\nO rei Jorge teria gostando tanto das suítes que pediu a seus músicos, já esgotados, que tocassem-na por três vezes durante o tempo do percurso.\n[…]\nWater Music: partituras livres no International Music Score Library Project.\n[…]\nMedia relacionados com Georg Friedrich Händel no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Quadros de uma Exposição",
      "descricao": "Suíte para piano de Modest Mussorgsky, de 1874, inspirada em obras do artista Viktor Hartmann."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Quadros de uma Exposição foi escrito para piano pelo russo Mussorgsky. Que compositor francês fez, em 1922, sua orquestração mais famosa?",
    "resposta": "Maurice Ravel",
    "distratores": [
      "Claude Debussy",
      "Camille Saint-Saëns",
      "Paul Dukas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition",
        "situacao": "ok",
        "texto": "Pictures at an Exhibition is a piano suite in ten movements, plus a recurring and varied Promenade theme, written in 1874, by Russian composer Modest Mussorgsky. It is a musical depiction of a tour of an exhibition of works by architect and painter Viktor Hartmann put on at the Imperial Academy of Arts in Saint Petersburg, following his sudden death in the previous year. Each movement of the suite\n[…]\nThe composition has become a showpiece for virtuoso pianists, and became widely known from orchestrations and arrangements produced by other composers and contemporary musicians, with Maurice Ravel's 1922 adaptation for orchestra being the most recorded and performed. The suite, particularly the final movement, \"The Bogatyr Gates\", is widely considered one of Mussorgsky's greatest works.\n[…]\nThe version by Maurice Ravel, produced in 1922 on a commission by Serge Koussevitzky, represents a virtuoso effort by a master colourist. The orchestration has proved the most popular in the concert hall and on record.\n[…]\nMany other orchestrations and arrangements of Pictures have been made. Most show debts to Ravel; the original piano composition is, of course, frequently performed and recorded. A version for chamber orchestra exists, made by Taiwanese composer Chao Ching-Wen. Lawrence Leonard produced a version for piano and orchestra, thus combining aspects of the original piece and subsequent orchestrations.\n[…]\nMaurice Ravel (1922; the fifth Promenade omitted.)\n[…]\nGiuseppe Becce (1930; for piano trio.)\n[…]\nIn a hall on Attisholz-Areal, Switzerland, Gen Atem and S213 had a premiere performance on the basis of Ravel's orchestration of Mussorgsky's piano cycle in August 2021. Kaspar Zehnder and the Theatre Orchester Biel Solothurn provided the acoustical background in its entirety.\n[…]\nOrga, Ates, \"Mussorgsky's Pictures at an Exhibition on record\". International Piano Quarterly 2, no. 5 (Autumn 1998): 32–47."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quadros_de_uma_Exposi%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Quadros de uma Exposição (russo:  Картинки с выставки – Воспоминание о Викторе Гартмане, Kartínki s výstavki – Vospominániye o Víktore Gártmane, tradução literal \"Quadros de uma Exposição – Uma Lembrança de Viktor Hartmann\"; em francês:  Tableaux d'une exposition) é uma peça (suíte) escrita para piano por Modest Mussorgsky em junho de 1874. Viktor Hartmann, arquiteto e pintor, grande amigo de Muss\n[…]\nEm março de 1874, estava acontecendo uma exposição de seus quadros em uma galeria de São Petersburgo. Após visitá-la, o compositor resolveu prestar uma homenagem ao amigo. Escolheu dez dentre os quadros expostos e compôs uma música para cada um deles. Uniu através de um tema comum (“Promenade”) as várias partes da peça. As músicas exploram a corrente folclórica russa e o estilo de piano é inovador em sua austeridade e ausência de tessitura.\n[…]\nComposta em uma época em que o piano era instrumento de brilho virtuosístico, a suíte foi durante algum tempo ignorada. Claude Debussy, grande compositor francês, era admirador confesso de Mussorgsky e estudou bastante esta suíte, pelo seu caráter singular.\n[…]\nNo verão europeu de 1922, atendendo a um pedido de Serge Koussevitzky, Maurice Ravel, compositor francês, orquestrou em Lyons-la-Forêt, França o original pianístico da peça. Ao fazê-lo, Ravel prestou um grande serviço a Mussorgsky. Grande parte da posterior popularidade da obra se deve ao excelente serviço por ele realizado. Porém, Ravel realizou a instrumentação de “Quadros de uma Exposição” à sua própria maneira, já que não conhecia as orquestrações realizadas por Mussorgsky.\n[…]\n«Partituras em Domínio Público de Mussorgsky  no IMSLP»\n[…]\nCalvocoressi, M.D., Modest Mussorgsky: His Life and Works, London: Rockliff, 1956\n[…]\nRuss, Michael. Mussorgsky: Pictures at an Exhibition (Cambridge University Press, Cambridge, UK; 1992). ISBN 0-521-38607-1 (paperback), ISBN 0-521-38442-7 (hardback).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Dança do Sabre",
      "descricao": "Movimento do balé Gayane, de 1942, famoso pelo ritmo frenético."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A frenética Dança do Sabre, do balé Gayane, foi composta por qual compositor soviético de origem armênia?",
    "resposta": "Aram Khachaturian",
    "distratores": [
      "Sergei Prokofiev",
      "Dmitri Shostakovich",
      "Dmitri Kabalevsky"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sabre_Dance"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sabre_Dance",
        "situacao": "ok",
        "texto": "\"Sabre Dance\" is an orchestral movement from the final act of the Aram Khachaturian 1942 ballet Gayane, in which dancers display their skill with sabres. It is Khachaturian's most recognizable work worldwide and is considered one of the signature pieces of twentieth-century popular music. The composition is a fast-paced work, lasting about two and a half minutes, and incorporates elements of Armen\n[…]\n\"Sabre Dance\" appears in Act IV of Gayane, a ballet written by Khachaturian that is based on his first ballet, Happiness (1939). With a libretto by Konstantin Derzhavin. Gayane premiered on December 9, 1942 at the Perm Opera and Ballet Theatre. Set on a collective farm (kolkhoz) in Soviet Armenia, it centers on a patriotic young woman, Gayane, and her husband, Giko. The drama unfolds when Giko betrays the Soviet regime by joining a band of smugglers and setting fire to the family farm.\n[…]\nFilmmaker Yusup Razykov, who directed a 2019 film about the creation of the piece, dubbed it as \"a kind of ringtone of the 20th century\". Sportswriter Bob Ryan called it \"one of the great uplifting pieces of music ever written\". The piece is considered a children's favorite. Jonathan McCollum and Andy Nercessian wrote that \"Sabre Dance\" (and Gayane in general), along with Khachaturian's other ballet, Spartacus, are \"perhaps the only works through which the world really knows Armenian music\".\n[…]\nIn 1943, Khachaturian arranged three orchestral suites from the ballet Gayane, with \"Sabre Dance\" included in Suite No. 3, published in the Soviet Union in 1947 by Muzgiz (State Music Publishing House) and in the West by Schirmer and Le Chant du Monde. By 1948, Leeds Music Corporation in the U.S. offered eleven different transcriptions and arrangements of the piece.\n[…]\ncoincided with the Soviet denunciation of Khachaturian (along with Shostakovich and Prokofiev)."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Gymnopédies",
      "descricao": "Três peças lentas para piano publicadas em 1888 pelo compositor francês Erik Satie."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "As três Gymnopédies, peças lentas e hipnóticas para piano publicadas em 1888, são de qual compositor francês?",
    "resposta": "Erik Satie",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gymnop%C3%A9dies"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gymnop%C3%A9dies",
        "situacao": "ok",
        "texto": "The Gymnopédies (French pronunciation: [ʒim.nɔ.pe.di]), or Trois Gymnopédies ('Three Nude Dances\"), are three piano compositions written by French composer and pianist Erik Satie. He completed the whole set by 2 April 1888, but they were at first published individually: the first and the third compositions were published in 1888, while the second would not be published until 1895.\n[…]\nIt remains uncertain, however, whether the poem was composed before or after the music. Satie could have picked up the term from a dictionary such as Peter Lichtenthal's Dictionnaire de Musique (1839), where gymnopédie is defined as a \"nude dance, accompanied by song, which youthful Spartan maidens danced on certain occasions\", following a similar definition from Jean-Jacques Rousseau's Dictionnaire de Musique.\n[…]\nBy the end of 1896, Satie's popularity was waning and his financial situation deteriorating. Claude Debussy, a friend of Satie's whose popularity was on the rise, helped draw public attention to Satie's work. In February 1897, Debussy orchestrated the third and first Gymnopédies; when Debussy published the scores two years later, he reversed the numbering, with Satie's first becoming Debussy's third, and vice versa.\n[…]\nThe first and second Gymnopédies were arranged by Dick Halligan for the group Blood, Sweat & Tears under the title \"Variations on a Theme by Erik Satie\" on the group's eponymous album, released in 1968. The recording received a Grammy Award the following year for Best Contemporary Instrumental Performance.\n[…]\nThe Japanese animated drama film The Disappearance of Haruhi Suzumiya (2010) prominently features all three Gymnopédies, and they are included in the film's soundtrack release as a bonus disc, including Satie's Gnossiennes and his composition \"Je te veux\".\n[…]\n3 Gymnopédies (Satie, Erik): Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gymnop%C3%A9dies",
        "situacao": "ok",
        "texto": "As Gymnopédies são três composições para piano escritas pelo francês Erik Satie, publicadas em Paris em 1888.\n[…]\nMêlaient leur sarabande à la gymnopédie\n[…]\nAs Gymnopédies são as primeiras composições em que Satie tentou se desvencilhar do ambiente da música de salão de seu pai e de sua madrasta. Em setembro de 1887 ele compôs três sarabandas (Trois Sarabandes), referenciando La Perdition de Contamine, que conhecia pessoalmente. Aparentemente, o compositor já usava o termo gymnopédiste antes de escrever a obra.\n[…]\nA composição das Gymnopédies começou dois meses após, completadas em abril de 1888. Em agosto, Gymnopédie nº 1 foi publicada, acompanhada dos versos de Contamine supracitados. Entretanto, é incerto se o poema foi escrito antes da música. Num momento posterior do mesmo ano foi publicada Gymnopédie nº 3. Entretanto, a publicação de Gymnopédie nº 2 aconteceu somente sete anos depois.\n[…]\nAo fim de 1896, a popularidade de Satie estava em declínio, assim como sua situação financeira. Claude Debussy, cuja popularidade estava em alta na época, ajudou a popularizar o trabalho do seu amigo. Ele acreditava que Gymnopédie nº 2 não deveria ser orquestrada, e portanto orquestrou em fevereiro de 1897 somente a primeira e a terceira, em ordem inversa:\n[…]\nGymnopédie nº 1 (para piano, por Satie) → Gymnopédie nº 3 (para orquestra, por Debussy)\n[…]\nGymnopédie nº 3 (para piano, por Satie) → Gymnopédie nº 1 (para orquestra, por Debussy)\n[…]\nA partitura foi então publicada em 1898.\n[…]\nGymnopédies: partituras livres no International Music Score Library Project.",
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
