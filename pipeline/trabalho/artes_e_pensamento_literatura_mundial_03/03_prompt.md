Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Literatura Mundial** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Irmãs Brontë",
      "descricao": "Charlotte, Emily e Anne Brontë, escritoras inglesas do século dezenove, autoras de Jane Eyre e O Morro dos Ventos Uivantes."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Das irmãs Brontë que publicaram romances, qual delas nasceu por último?",
    "resposta": "Anne",
    "distratores": [
      "Charlotte",
      "Emily",
      "Elizabeth"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Anne_Bront%C3%AB",
      "https://en.wikipedia.org/wiki/Bront%C3%AB_family"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anne_Bront%C3%AB",
        "situacao": "ok",
        "texto": "Anne Brontë (, commonly ; 17 January 1820 – 28 May 1849) was an English novelist and poet. A member of the Brontë literary family, she was the younger sister of Charlotte, Emily, and Branwell. Anne is known for her 1847 novel Agnes Grey and for her 1848 novel The Tenant of Wildfell Hall, which is considered to be one of the first feminist novels.\n[…]\nIn 1845, the Brontës were at home with their father. None of the siblings had any immediate prospect of employment. Charlotte found Emily's poems, which had been shared only with Anne, and insisted that they should be published. Emily was angry at the invasion of her privacy, and refused to contemplate publication, but Anne revealed that she too had been writing poems in secret, poems which Charlotte \"thought ... had a sweet sincere pathos of their own\".\n[…]\nEncouraged by Charlotte, the sisters agreed to have the poems published. They told nobody what they were doing. With the money left by Elizabeth Branwell, they paid for the publication of a collection of poems, 21 from Anne, 21 from Emily, and 19 from Charlotte.\n[…]\nSally McDonald of the Brontë Society said in 2013 that in some ways Anne \"is now viewed as the most radical of the sisters, writing about tough subjects such as women's need to maintain independence and how alcoholism can tear a family apart.\" In 2016 Lucy Mangan championed Anne Brontë in the BBC's Being the Brontës.\n[…]\nAnne Brontë papers, circa 1840s–1895, held by the Henry W. and Albert A. Berg Collection of English and American Literature, New York Public Library\n[…]\nAnne Brontë eText Archive\n[…]\nWorks by Anne Brontë in the online library ARHEVE.org and in the free ARHEVE app\n[…]\nWorks by Anne Brontë at Project Gutenberg\n[…]\nWorks by Anne Brontë at LibriVox (public domain audiobooks)\n[…]\nWorks by Anne Brontë in eBook form at Standard Ebooks\n[…]\nWorks by or about Anne Brontë at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bront%C3%AB_family",
        "situacao": "ok",
        "texto": "The Brontës () were a 19th-century literary family, born in the village of Thornton and later associated with the village of Haworth in the West Riding of Yorkshire, England. Born to Patrick Brontë, a curate, and his wife, Maria, the sisters Charlotte (1816–1855), Emily (1818–1848) and Anne (1820–1849) were all poets and novelists who published their work under male pseudonyms: Currer, Ellis, and \n[…]\nOne year before her death in May 1849, Anne published a second novel. Far more ambitious than her previous novel, The Tenant of Wildfell Hall was a great success and rapidly outsold Emily's Wuthering Heights. However, the critical reception was mixed—praise for the novel's \"power\" and \"effect\" and sharp criticism for being \"coarse\". Charlotte Brontë herself, Anne's sister, wrote to her publisher that it \"hardly seems to me desirable to preserve ...\n[…]\nIn 1850, a little over a year after the deaths of Emily and Anne, Charlotte wrote a preface for the re-print of the combined edition of Wuthering Heights and Agnes Grey, in which she publicly revealed the real identities of all three sisters.\n[…]\nThe Anne Stone has a poem by Jackie Kay and stands in a wildflower meadow behind the Haworth Parsonage; the Charlotte Stone, with a poem by Carol Ann Duffy, is set in the wall of the Brontë Birthplace in Thornton; Emily is remembered in a poem by Kate Bush, known for her 1978 song \"Wuthering Heights\", which is carved into a rock outcrop of Ogden Kirk on wild moorland above Ogden Water; and a fourth stone, the Brontë Stone, commemorates all three sisters with a poem by Jeanette Winterson and stands in Thornton Cemetery.\n[…]\nIn the American film Devotion (1946) by Curtis Bernhardt, which constitutes a biography of the Brontë sisters, Ida Lupino portrays Emily, Olivia de Havilland portrays Charlotte, and Nancy Coleman portrays Anne.\n[…]\nBrontë Society\n[…]\nThe Brontës"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anne_Bront%C3%AB",
        "situacao": "ok",
        "texto": "Anne Brontë (Thornton, Inglaterra, 17 de janeiro de 1820 – Scarborough, Inglaterra, 28 de maio de 1849) foi uma poetisa e romancista britânica, a mais jovem da família literária Brontë.\n[…]\nAs irmãs Brontë começaram a escrever os seus primeiros romances antes de o fracasso do seu primeiro livro se tornar evidente. Charlotte escreveu The Professor, Emily escreveu Wuthering Heights e Anne escreveu Agnes Grey. Em julho de 1846, um conjunto que continha os três romances começou a ser distribuído pelas editoras de Londres.\n[…]\nApós várias rejeições, Wuthering Heights de Emily e Agnes Grey de Anne foram adquiridos por uma editora, mas o romance de Charlotte foi rejeitado por todas as editoras que o receberam. Charlotte não demorou muito a terminar o seu segundo romance, Jane Eyre e este foi imediatamente adquirido pela editora Smith, Elder & Co e foi o primeiro romance das irmãs a ser publicado. Enquanto os romances de Anne e Emily aguardavam publicação, o romance de Charlotte foi um sucesso imediato e enorme.\n[…]\nAnne e Emily foram obrigadas a pagar cinquenta libras cada uma para cobrir os custos de publicação dos seus romances. O sucesso do romance de Charlotte levou a editora das suas irmãs a publicar os seus romances ao mesmo tempo em dezembro de 1847. Apesar de ambos terem vendido bem, Anges Grey de Anne foi ofuscado pelo mais dramático Wuthering Heights de Emily.\n[…]\nO segundo romance de Anne, The Tenant of Wildfell Hall, foi publicado em junho de 1848 e foi um sucesso fenomenal, tendo esgotado em apenas seis semanas.\n[…]\nLivros completos de Anne Brontë no Project Gutenberg (em inglês)\n[…]\nLivros áudio e leitura de poemas de Anne Brontë no LibriVox (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Hamlet",
      "descricao": "Tragédia de William Shakespeare sobre o príncipe da Dinamarca que vinga a morte do pai."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Com cerca de quatro mil versos, qual é a peça mais longa de William Shakespeare?",
    "resposta": "Hamlet",
    "distratores": [
      "Rei Lear",
      "Otelo",
      "Ricardo Terceiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hamlet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hamlet",
        "situacao": "ok",
        "texto": "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (), is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play. Set in Denmark, the play depicts Prince Hamlet and his attempts to exact revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother.\n[…]\nFirst Folio (F1): In 1623 Edward Blount and William and Isaac Jaggard published The Tragedie of Hamlet, Prince of Denmarke in the First Folio, the first edition of Shakespeare's Complete Works.\n[…]\nShakespeare almost certainly wrote the role of Hamlet for Richard Burbage. He was the chief tragedian of the Lord Chamberlain's Men, with a capacious memory for lines and a wide emotional range. Judging by the number of reprints, Hamlet appears to have been Shakespeare's fourth most popular play during his lifetime—only Henry IV Part 1, Richard III and Pericles eclipsed it.\n[…]\nThe play was revived early in the Restoration. When the existing stock of pre-civil war plays was divided between the two newly created patent theatre companies, Hamlet was the only Shakespearean favourite that Sir William Davenant's Duke's Company secured. It became the first of Shakespeare's plays to be presented with movable flats painted with generic scenery behind the proscenium arch of Lincoln's Inn Fields Theatre.\n[…]\nFrom around 1810 to 1840, the best-known Shakespearean performances in the United States were tours by leading London actors—including George Frederick Cooke, Junius Brutus Booth, Edmund Kean, William Charles Macready, and Charles Kemble. Of these, Booth remained to make his career in the States, fathering the nation's most notorious actor, John Wilkes Booth (who later assassinated Abraham Lincoln), and its most famous Hamlet, Edwin Booth.\n[…]\nHamlet on the Ramparts at MIT's Shakespeare Electronic Archive."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hamlet",
        "situacao": "ok",
        "texto": "A tragédia de Hamlet, príncipe da Dinamarca (The Tragedie of Hamlet, Prince of Denmarke na primeira edição em inglês), geralmente abreviada apenas como Hamlet, é uma tragédia de William Shakespeare, escrita entre 1599 e 1601. A peça, passada na Dinamarca, reconta a história de como o Príncipe Hamlet tenta vingar a morte de seu pai, Hamlet, o rei, executado por Cláudio, seu irmão, que o envenenou e\n[…]\nHamlet é a peça mais longa de Shakespeare, e provavelmente a que mais trabalho lhe deu, mas encontrou nos tempos um espaço que a consagrou como uma das mais poderosas e influentes tragédias em língua inglesa: durante o tempo de vida de Shakespeare, a peça estava entre uma das mais populares da Inglaterra e ainda figura entre os textos mais realizados do mundo, no topo, inclusive, da lista da Royal Shakespeare Company desde 1879.\n[…]\nEm um período onde muitas peças eram apresentadas com duas horas de duração ou menos, o texto integral de Hamlet possui 4.042 linhas, totalizando 29.551 palavras engendradas em cinco atos (é a peça mais longa de Shakespeare) — ou seja, leva-se mais de quatro horas para encená-la fielmente. Hamlet também contém um dos dispositivos mais favoritos de Shakespeare: o teatro no teatro, recurso também usado em Trabalhos de Amores Perdidos e em Sonhos de Uma Noite de Verão.\n[…]\nCom efeito, Hamlet é a peça mais produzida de Shakespeare: somente em Nova Iorque, ela possui sessenta e quatro produções encenadas na Broadway e um número incontável na Off-Broadway.\n[…]\nA Tragédia de Hamlet, Príncipe da Dinamarca/ Shakespeare; trad. e pref. José Blanc de Portugal, [Lisboa : Editorial Presença, 1967] ( Porto : -- Tip. Nunes)\n[…]\nTradução de F. C. Cunha Medeiros e Oscar Mendes: Hamlet, príncipe da Dinamarca, prosa:\n[…]\nInterpretando Hamlet — Ensaio de Voltaire Schilling acerca da escrita, da linguagem e de alguns fatos históricos da peça de William Shakespeare.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Divina Comédia",
      "descricao": "Poema épico de Dante Alighieri, do início do século quatorze, dividido em Inferno, Purgatório e Paraíso."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "A Divina Comédia, de Dante, tem três partes. Qual delas tem um canto a mais que as outras duas?",
    "resposta": "Inferno",
    "distratores": [
      "Purgatório",
      "Paraíso",
      "Nenhuma, são iguais"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Inferno_(Dante)",
      "https://en.wikipedia.org/wiki/Divine_Comedy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inferno_(Dante)",
        "situacao": "ok",
        "texto": "Inferno (Italian: [iɱˈfɛrno]; Italian for 'Hell') is the first part of the Italian writer Dante Alighieri's 14th-century narrative poem the Divine Comedy, followed by Purgatorio and Paradiso. The Inferno describes the journey of a fictionalised version of Dante himself through Hell, guided by the ancient Roman poet Virgil.\n[…]\nIn this circle, Dante sees Semiramis, Dido, Cleopatra, Helen of Troy, Paris, Achilles, Tristan, and many others who were overcome by sexual love during their lives. Due to the presence of so many rulers among the lustful, the fifth Canto of Inferno has been called the \"canto of the queens\".\n[…]\nIn the first of several political prophecies in the Inferno, Ciacco \"predicts\" the expulsion of the White Guelphs (Dante's party) from Florence by the Black Guelphs, aided by Pope Boniface VIII, which marked the start of Dante's long exile from the city. These events occurred in 1302, prior to when the poem was written but in the future at Easter time of 1300, the time in which the poem is set.\n[…]\nProtected by the powers of the boiling rivulet, Dante and Virgil progress across the burning plain. They pass a roving group of Sodomites, and Dante, to his surprise, recognizes Brunetto Latini. Dante addresses Brunetto with deep and sorrowful affection, \"paying him the highest tribute offered to any sinner in the Inferno\", thus refuting suggestions that Dante only placed his enemies in Hell.\n[…]\nA 72-piece art collection featured in Dante's Hell Animated and Inferno by Dante films\n[…]\nSee more Dante's Inferno images by selecting the \"Heaven & Hell\" subject at the Persuasive Cartography, The PJ Mode Collection, Cornell University Library\n[…]\n\"Mapping Dante's Inferno, One Circle of Hell at a Time\", article by Anika Burgess, Atlas Obscura, July 13, 2017\n[…]\nDante's Inferno on In Our Time at the BBC"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Divine_Comedy",
        "situacao": "ok",
        "texto": "The Divine Comedy (Italian: Divina Commedia) is an Italian narrative poem by Dante Alighieri, begun c. 1308 and completed c. 1321, shortly before the author's death. It is widely considered the pre-eminent work in Italian literature and one of the greatest works of Western literature. The poem's imaginative vision of the afterlife is representative of the medieval worldview as it existed in the La\n[…]\nDante's use of real characters, according to Dorothy Sayers in her introduction to her translation of the Inferno, allows Dante the freedom of not having to involve the reader in description, and allows him to \"[make] room in his poem for the discussion of a great many subjects of the utmost importance, thus widening its range and increasing its variety.\"\n[…]\nDante travels through the centre of the Earth in the Inferno, and comments on the resulting change in the direction of gravity in Canto XXXIV (lines 76–120). A little earlier (XXXIII, 102–105), he queries the existence of wind in the frozen inner circle of hell, since it has no temperature differentials.\n[…]\nDante even acknowledges Aristotle's influence explicitly in the poem, specifically when Virgil justifies the Inferno's structure by citing the Nicomachean Ethics. In the same canto, Virgil draws on Cicero's De Officiis to explain why sins of the intellect are worse than sins of violence, a key point that would be explored from canto XVIII to the end of the Inferno.\n[…]\nDante lived in a Europe of substantial literary and philosophical contact with the Muslim world, encouraged by such factors as Averroism (\"Averoìs, che'l gran comento feo\" Commedia, Inferno, IV, 144, meaning \"Averroes, who wrote the great comment\") and the patronage of Alfonso X of Castile. Of the twelve wise men Dante meets in Canto X of the Paradiso, Thomas Aquinas and, even more so, Siger of Brabant were strongly influenced by Arabic commentators on Aristotle."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Inferno_%28Divina_Com%C3%A9dia%29",
        "situacao": "ok",
        "texto": "O Inferno é a primeira parte da \"Divina Comédia\" de Dante Alighieri, sendo as outras duas o Purgatório e o Paraíso. Está dividido em trinta e quatro cantos (uma divisão de longas poesias), possuindo um canto a mais que as outras duas partes, que serve de introdução ao poema. A viagem de Dante é uma alegoria através do que é essencialmente o conceito medieval de Inferno, guiada pelo poeta romano Vi\n[…]\nDante a subiu e logo apareceram três feras (Pantera, Leão e a Loba), provavelmente os animais representam três tipos de pecados (que são discutidos no Canto 11) e também três divisões do inferno, é uma representação alegórica dos pecados de acordo com Tomás de Aquino, que influenciou Dante. A Pantera (incontinência), o leão (violência) e a loba (fraude) refletem níveis de gravidade de acordo com os conhecimentos do homem (quanto mais se sabe, mais grave é o pecado).\n[…]\nO Inferno conforme descrito por Dante na sua Divina Comédia no século XIV ficou profundamente marcado na cultura popular, e auxiliou a criar a visão de um inferno relacionado à paixão, desejo, pecado e condenação. Muitas vezes, em filmes e séries ou mesmo desenhos animados ele é citado. Por exemplo, o inferno da Saga de Hades, em Os Cavaleiros do Zodíaco de Masami Kurumada, um dos mais famosos animes japoneses, foi baseado no inferno de Dante.\n[…]\nEm 2010, foi criado o videogame \"Dante's Inferno\" relacionado à Divina Comédia, fiel às descrições de Dante Aliguieri sobre o inferno.\n[…]\nO álbum Underworld, da banda estadunidense Symphony X, foi inspirado por Inferno. A banda brasileira de heavy metal Sepultura lançou em 2006 o intitulado Dante XXI, disco onde nele é contido uma grande homenagem a Divina Comédia, a música Convicted In Life possui um vídeo clip onde nele os músicos se encontram no inferno descrito por Dante.\n[…]\nDivina Comédia, a obra formada de Inferno, Purgatório e Paraíso de Dante Alighieri",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Os Irmãos Karamázov",
      "descricao": "Último romance de Fiódor Dostoiévski, publicado em 1880, sobre os filhos de Fiódor Karamázov e o assassinato do pai."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em Os Irmãos Karamázov, de Dostoiévski, qual é o primogênito entre os filhos legítimos de Fiódor Karamázov?",
    "resposta": "Dmitri",
    "distratores": [
      "Ivan",
      "Aliócha",
      "Smerdiakóv"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Brothers_Karamazov"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
        "situacao": "ok",
        "texto": "The Brothers Karamazov (Russian: Братья Карамазовы, romanized: Brat'ya Karamazovy, IPA: [ˈbratʲjə kərɐˈmazəvɨ]), also translated as The Karamazov Brothers, is the sixteenth and final novel by Russian author Fyodor Dostoevsky. Dostoevsky spent nearly two years writing The Brothers Karamazov, which was published as a serial in The Russian Messenger from January 1879 to November 1880. Dostoevsky died\n[…]\nAgrafena Alexandrovna Svetlova, usually referred to as 'Grushenka', is a beautiful and fiery 22-year-old woman with an uncanny charm for men. In her youth she was jilted by a Polish officer and subsequently came under the protection of a tyrannical miser. The episode leaves Grushenka with an urge for independence and control of her life. Grushenka inspires complete admiration and lust in both Fyodor and Dmitri Karamazov.\n[…]\nFyodor Pavlovich Karamazov, a wealthy and dissolute landowner in a Russian provincial town, has neglected all three of his sons. Dmitri, the eldest, is an impulsive former army officer who has returned to press a claim on his late mother’s inheritance, which he believes his father is withholding. Ivan, the second son, is an intellectual and religious sceptic. Alyosha, the youngest, is a novice at the local monastery under the elder Zosima.\n[…]\nHe sees this quality as essential to the human being, to being human, and in his most fiercely independent characters, such as Ivan and Dmitri in The Brothers Karamazov, Raskolnikov in Crime and Punishment, Nastasya Filippovna and Ippolit in The Idiot, or the Underground man in Notes From Underground, it is actively expressed in virtually all their words and deeds. According to Bakhtin, for Dostoevsky:A man never coincides with himself. One cannot apply the formula of identity A≡A.\n[…]\nThe Brothers Karamazov at Standard Ebooks\n[…]\nThe Brothers Karamazov at Project Gutenberg\n[…]\nThe Brothers Karamazov public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Irm%C3%A3os_Karamazov",
        "situacao": "ok",
        "texto": "Os Irmãos Karamázov (em russo Братья Карамазовы, Brat'ya Karamazovy, AFI ['bratʲjə karə'mazəvɨ]) é um romance de Fiódor Dostoiévski, escrito em 1879, uma das mais importantes obras das literaturas russa e mundial, ou, conforme afirmou Freud: \"a maior obra da história\". Freud considera esse romance, juntamente com Édipo Rei e Hamlet, três importantes livros a respeito do embate pai e filho, e retra\n[…]\nLivro II: Uma reunião inoportuna O livro dois começa quando a família Karamázov chega no mosteiro local para que o stárietz Zossima possa agir como mediador entre Dmitri e seu pai Fiódor em seu conflito em torno da herança de Dmitri. Aparentemente foi ideia do pai, como um gracejo, fazer a reunião num local tão sagrado na presença do stárietz. Dmitri chega atrasado, e a reunião logo degenera e apenas exacerba a briga entre Dmitri e Fiódor.\n[…]\nLivro IX: Investigação preliminar O Livro Nove apresenta os detalhes do assassinato de Fiódor e descreve o interrogatório de Dmitri ao ser interrogado pelo crime que sustenta que não cometeu. O suposto motivo do crime é roubo. Dmitri sabidamente estava sem dinheiro nenhum no início daquela noite, mas subitamente foi visto na rua com milhares de rublos logo após o assassinato do pai. Enquanto isso, os 3 mil rublos que Fiódor Karamázov havia reservado para Grúchenka despareceram.\n[…]\nEste livro detalha o julgamento de Dmitri Karamázov pelo assassinato de seu pai Fiódor. O drama na sala do tribunal é fortemente satirizado por Dostoiévski. Os homens na multidão são apresentados como ressentidos e vingativos, e as mulheres sentem-se irracionalmente atraídas pelo romantismo do triângulo amoroso entre Dmitri, Catierina e Grúchenka. A loucura toma conta de Ivan e ele é carregado para fora da sala do tribunal após narrar seu encontro final com Smierdiakóv e a mencionada confissão.\n[…]\nSobre Irmãos Karamazov - o filme\n[…]\nBrothers Karamazov (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Orgulho e Preconceito",
      "descricao": "Romance de Jane Austen, publicado em 1813, sobre Elizabeth Bennet e o senhor Darcy."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em Orgulho e Preconceito, Elizabeth é uma das cinco irmãs Bennet. Qual delas é a caçula?",
    "resposta": "Lydia",
    "distratores": [
      "Jane",
      "Mary",
      "Kitty"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lydia_Bennet",
      "https://en.wikipedia.org/wiki/Pride_and_Prejudice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lydia_Bennet",
        "situacao": "ok",
        "texto": "The Bennet family is a fictional family created by the English novelist Jane Austen in her 1813 novel Pride and Prejudice. The family consists of Mr and Mrs Bennet and their five daughters: Jane, Mary, Catherine, Lydia, and Elizabeth, who is the novel's protagonist.\n[…]\nElizabeth and Mr Bennet have a close bond, which is apparent to everyone in the family. Mrs Bennet, in one of her many quasi-hysterical moments, turns on her husband and exclaims: \"I desire you will do no such thing. Lizzy is not a bit better than the others, and I am sure she is not half so handsome as Jane, nor half so good-humoured as Lydia. But you are always giving her the preference,\" to which he replies; \"They have none of them much to recommend them ...\n[…]\nIt is mentioned in volume 2, chapter 37, that whilst her oldest sisters, Jane and Elizabeth, have tried over the years (prior to the events of Pride and Prejudice) to educate Kitty and Lydia in order to stop their wild and ill-bred behaviours, their efforts were seen as 'interfering' by Kitty and Lydia, were undermined by their mother, and were unsupported by their father.\n[…]\nOf the three youngest Bennet sisters, Lydia is mentioned the most. In volume 3, chapter 19, Lydia, now married, is not living the \"high life\", but did not seem to notice: \"It had always been evident to [Elizabeth] that such an income as theirs ... must be insufficient to their support; and whenever they changed their quarters, either Jane or [Elizabeth], were sure to be applied to, for some little assistance towards discharging their bills. Their manner of living ... was unsettled in the extreme.\n[…]\nMartin, Lydia (2006). Pride and Prejudice, Joe Wright (in French). Liège: CEFAL. ISBN 978-2-871-30247-6."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
        "situacao": "ok",
        "texto": "Pride and Prejudice is a novel by English author Jane Austen. Written when she was aged 20–21, it was her third novel written and became the second to see print when it was published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between \n[…]\nMr Edward Gardiner and Mrs Gardiner – Edward Gardiner is Mrs Bennet's brother and a successful, sensible London tradesman. Aunt Gardiner is wise and insightful and is close to her nieces Jane and Elizabeth. The Gardiners are the parents of four children. They host the marriage of Lydia with Wickham from their home in Gracechurch Street, and are instrumental in bringing about the marriage between Darcy and Elizabeth.\n[…]\nA theme in much of Austen's work is the importance of environment and upbringing in developing young people's character and morality. Social standing and wealth are not necessarily advantages in her works, and a further theme common to Austen's work is ineffectual parents. In Pride and Prejudice, the failure of Mr and Mrs Bennet as parents is blamed for Lydia's lack of moral judgment. Darcy has been taught to be principled and scrupulously honourable, but he is also proud and overbearing.\n[…]\nThe Bennets' failing marriage is an example that the youngest Bennet, Lydia, re-enacts with Wickham, and the results are far from felicitous. Indeed, the married Lydia rapidly adopts her mother's mercenary attitudes. Although the central characters, Elizabeth and Darcy, begin the novel as hostile acquaintances and unlikely friends, they eventually work toward a better understanding of themselves and each other, which frees them to truly fall in love.\n[…]\nPride and Prejudice (Chapman edition) at Project Gutenberg\n[…]\nPride and Prejudice public domain audiobook at LibriVox"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Agatha Christie",
      "descricao": "Escritora inglesa de romances policiais, criadora dos detetives Hercule Poirot e Miss Marple."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual romance de Agatha Christie é o mais vendido de toda a sua obra?",
    "resposta": "E Não Sobrou Nenhum",
    "distratores": [
      "Morte no Nilo",
      "Um Corpo na Biblioteca",
      "Cai o Pano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/And_Then_There_Were_None"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/And_Then_There_Were_None",
        "situacao": "ok",
        "texto": "And Then There Were None is a 1939 mystery novel by the English writer Agatha Christie. It is the world's best-selling mystery novel and one of the best-selling books of all time, with more than 100 million copies sold by 2007. It has been adapted for film, television, radio, theatre, and other media more often than any other of Christie's works. In 2015, it was named the \"World's Favourite Christ\n[…]\nChristie, Agatha (1986). Ten Little Indians. New York: Pocket Books. ISBN 0-671-55222-8. Last publication of the novel under the title Ten Little Indians.\n[…]\nThe estate of Agatha Christie now promotes the novel internationally under the English title And Then There Were None, and newer translations increasingly adopt local equivalents of that title.\n[…]\nAnd Then There Were None has had more adaptations than any other work by Agatha Christie. Christie herself changed the bleak ending to a more palatable one for theatre audiences when she adapted the novel for the stage in 1943. Many adaptations incorporate changes to the story, such as using Christie's alternative ending from her stage play or changing the setting to locations other than an island.\n[…]\nDesyat' Negrityat (1987, Десять негритят, translation: Ten Little Negroes) a Russian adaptation produced/directed by Stanislav Govorukhin. The film concludes with the grim finale from Agatha Christie's original novel, rather than the upbeat ending from the 1943 stage version that most other adaptations chose to follow.\n[…]\nThe novel was the inspiration for several video games. For the Apple II, Online Systems released Mystery House in 1980. On the PC, The Adventure Company released Agatha Christie: And Then There Were None in 2005, the first in a series of PC games based on Christie novels. In February 2008, it was ported to the Wii console.\n[…]\nAnd Then There Were None at the official Agatha Christie website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/And_Then_There_Were_None",
        "situacao": "ok",
        "texto": "And Then There Were None é um romance de mistério da escritora inglesa Agatha Christie, descrito por ela como o livro mais difícil de escrever. Foi publicado pela primeira vez no Reino Unido pelo Collins Crime Club a 6 de novembro de 1939, como Ten Little Niggers, provindo da canção de menestrel Ten Little Indians, que serve como um ponto de enredo maior.\n[…]\nO livro é o mistério melhor vendido do mundo, e com mais de 100 milhões de cópias vendidas é um dos livros mais vendidos de todos os tempos. A Publications International lista o romance como o sexto título mais vendido.\n[…]\nNo Brasil foi publicado como O Caso dos Dez Negrinhos e atualmente como E Não Sobrou Nenhum, e em Portugal foi publicado como Convite para a Morte em 1948, As Dez Figuras Negras em 2003, e No Início, Eram Dez... em 2020.\n[…]\nOito pessoas, aparentemente sem conexão entre si, dirigem-se à intrigante \"Ilha do Soldado\", na costa de Devon, após serem convidadas por correspondência por alguém chamado U. N. (Ulick Norman) Owen e sua esposa, sob diferentes pretextos. Nenhum deles se lembra de conhecer tais pessoas, porém a atração de serem convidados para um lugar tão badalado pela mídia é mais forte que a desconfiança.\n[…]\nEle se enforcou, e não sobrou nenhum.\n[…]\nIdentity – filme estadunidense de 2003, inspirado no livro de Agatha Christie, dirigido por James Mangold\n[…]\nO primeiro e segundo episódio da 9a. temporada de Family Guy foi inspirado no livro de Agatha.\n[…]\nO jogo japonês Umineko no Naku Koro ni foi inspirado e visto por algumas pessoas como uma certa adaptação da obra, mas seu enredo é diferente.\n[…]\nHarper's Island – Seriado de suspense/mistério norte-americano lançado 2009 pelo canal CBS. Grande parte da série foi inspirado na obra de Agatha e também na franquia Pânico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "J. K. Rowling",
      "descricao": "Autora britânica da série Harry Potter."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dos sete livros da série Harry Potter, de J. K. Rowling, qual é o mais longo?",
    "resposta": "A Ordem da Fênix",
    "distratores": [
      "O Cálice de Fogo",
      "As Relíquias da Morte",
      "O Enigma do Príncipe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix",
        "situacao": "ok",
        "texto": "Harry Potter and the Order of the Phoenix is a fantasy novel by British author J. K. Rowling. It is the fifth and longest novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic.\n[…]\nHarry, Ron, and Hermione form a secret student group called Dumbledore's Army, which meets in the Room of Requirement to practice defensive magic under Harry's instruction.\n[…]\nThe fifth novel, Harry Potter and the Order of the Phoenix, is the longest book in the series, yet it is the second-shortest film at 2 hours 18 minutes.\n[…]\nIn 2007, Harry Potter and the Order of the Phoenix was released in a film version directed by David Yates and written by Michael Goldenberg. The film was produced by David Heyman's company, Heyday Films, alongside David Barron. The budget was reportedly between £75 and 100 million (US$150–200 million), and it became the unadjusted eleventh-highest-grossing film of all time and a critical and commercial success.\n[…]\nA video game adaptation of the book and film versions of Harry Potter and the Order of the Phoenix was made for Windows, PS2, PS3, Xbox 360, PSP, Nintendo DS, Wii, Game Boy Advance, and Mac OS X. It was released on 25 June 2007 in the U.S., 28 June 2007 in Australia, and 29 June 2007 in the UK and Europe for PlayStation 3, PSP, PlayStation 2, Windows, and 3 July 2007 for most other platforms. The games were published by Electronic Arts.\n[…]\nThe book is also depicted in the 2011 video game Lego Harry Potter: Years 5–7.\n[…]\nReligious debates over the Harry Potter series\n[…]\nHarry Potter and the Order of the Phoenix on Harry Potter Wiki, an external wiki\n[…]\nHarry Potter and the Order of the Phoenix title listing at the Internet Speculative Fiction Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix",
        "situacao": "ok",
        "texto": "Harry Potter and the Order of the Phoenix (Brasil: Harry Potter e a Ordem da Fênix / Portugal: Harry Potter e a Ordem da Fénix) é o quinto livro dos sete volumes da série de fantasia Harry Potter, tanto em termos cronológicos como em ordem de publicação, da autora inglesa J. K. Rowling.\n[…]\nParravano deu uma crítica positiva, afirmando que \"[o romance] é o melhor da série desde Azkaban, e de longe melhor que o turgido Cálice de Fogo.\" Ela diz que este é um dos mais agressivos, porém acrescenta que \"A Ordem da Fênix não pode ser batido.\" Uma avaliação da Publishers Weekly alegou que \"Rowling favorece o desenvolvimento psicológico dos personagens\", principalmente do protagonista, quando \"explora os efeitos da queda de Harry da popularidade.\" Cida Azevedo, do Plano Crítico, afirma que o livro é \"um pouco decepcionante para quem esperava muita ação após o retorno d’Aquele-Que-Não-Deve-Ser-Nomeado.\n[…]\nPorém, eles diferenciam as obras de Rowling com as Tolkien e Lewis, dizendo que os livros de Harry Potter contém explicações para muitas perguntas que vem a surgir, enquanto os outros \"tiveram que conviver no desmantelamento de seus próprios mundos mágicos.\" Na mesma crítica, o livro é classificado como \"não tão extraordinário\". Todd Leopold, o CNN, classifica A Ordem da Fênix como mais denso, por conter mais personagens e por ser mais complexo.\n[…]\nLana Whited diz que o tema de discriminação é ampliado em Harry Potter e a Ordem da Fênix no contexto da campanha de Hermione a favor dos elfos domésticos. Ela afirma que a forma que Rowling apresenta a escravidão dos elfos é complexa, e que \"sua atitude sobre a situação deles é ambígua,\" e acrescenta que \"Dumbledore não parece incomodado com a escravidão\" das criaturas.\n[…]\nHarry Potter e a Ordem da Fénix na Editorial Presença",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Prêmio Nobel de Literatura",
      "descricao": "Prêmio anual concedido pela Academia Sueca desde 1901 a escritores de destaque."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes escritores latino-americanos recebeu o Nobel de Literatura antes dos outros?",
    "resposta": "Gabriela Mistral",
    "distratores": [
      "Pablo Neruda",
      "Gabriel García Márquez",
      "Octavio Paz"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gabriela_Mistral",
      "https://en.wikipedia.org/wiki/List_of_Nobel_laureates_in_Literature"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gabriela_Mistral",
        "situacao": "ok",
        "texto": "Lucila Godoy Alcayaga (Latin American Spanish: [luˈsila ɣoˈðoj alkaˈʝaɣa]; 7 April 1889 – 10 January 1957), known by her pseudonym Gabriela Mistral (Spanish: [ɡaˈβɾjela misˈtɾal]), was a Chilean poet-diplomat, journalist and educator. She read widely in theosophy, became a member of the secular or Third Franciscan order in 1925, but rarely attended mass.\n[…]\nAfter winning the Juegos Florales, she rarely used her given name, Lucila Godoy, for her publications. She constructed her pseudonym from the names of two of her favorite poets, Gabriele D'Annunzio and Frédéric Mistral, the French winner of the 1904 Nobel Prize in Literature, or, according to another account, as a combination of the Archangel Gabriel and the mistral wind of Provence.\n[…]\nGabriela Mistral has greatly influenced Latin American poetry. In a powerful speech by Swedish writer Hjalmar Gullberg, a member of the Swedish Academy, he provided insights into the perspective and emotions of Gabriela Mistral. Gullberg discussed how the language of troubadours, once unintelligible to Frédéric Mistral's own mother, became the language of poetry.\n[…]\nGullberg noted that after experiencing the suicide of her first love, Gabriela Mistral emerged as a poet whose words spread across South America and beyond. While little is known about her first love, his death influenced Mistral's poems, which often explored themes of death, despair, and possibly a resentment towards God. Her collection of poems titled Desolación, inspired by the loss of her first love and later the death of a beloved nephew, impacted many others.\n[…]\nGabriela Mistral at IMDb\n[…]\nGabriela Mistral Poems\n[…]\nGabriela Mistral (1889–1957) – Memoria Chilena\n[…]\nNewspaper clippings about Gabriela Mistral in the 20th Century Press Archives of the ZBW\n[…]\nGabriela Mistral Papers, 1911–1949\n[…]\nWorks by Gabriela Mistral at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Nobel_laureates_in_Literature",
        "situacao": "ok",
        "texto": "The Nobel Prize in Literature (Swedish: Nobelpriset i litteratur) is awarded annually by the Swedish Academy to authors for outstanding contributions in the field of literature. It is one of the five Nobel Prizes established by the 1895 will of Alfred Nobel, which are awarded for outstanding contributions in chemistry, physics, literature, peace, and physiology or medicine. As dictated by Nobel's \n[…]\nEach recipient receives a medal, a diploma and a monetary award prize that has varied throughout the years. In 1901, the first laureate Sully Prudhomme received 150,782 SEK, which was equivalent to 8,824,000 SEK in January 2018. The award is presented in Stockholm at an annual ceremony on December 10, the anniversary of Nobel's death.\n[…]\nAs of 2026, the Nobel Prize in Literature has been awarded to 123 individuals. 19 women have been awarded the Nobel Prize in Literature, the second highest number of any of the Nobel Prizes behind the Nobel Peace Prize. As of 2026, there have been 30 English-speaking laureates of the Nobel Prize in Literature, followed by French with 16 laureates and German with 14 laureates. France has the highest number of Nobel laureates.\n[…]\nThe 122 Nobel laureates in literature from 1901 to 2026 came from the following countries:\n[…]\nThe 122 Nobel laureates in literature from 1901 to 2025 wrote in the following languages:\n[…]\nThe 123 Nobel laureates in literature from 1901 to 2026 were from the following genders:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gabriela_Mistral",
        "situacao": "ok",
        "texto": "Gabriela Mistral, pseudônimo escolhido de Lucila de María del Perpetuo Socorro Godoy Alcayaga (Vicuña, 7 de abril de 1889 — Nova Iorque, 10 de janeiro de 1957), foi uma poetisa, educadora e diplomata chilena, agraciada com o Nobel de Literatura de 1945 \"por sua poesia lírica, inspirada por fortes emoções, que fez de seu nome um símbolo das aspirações idealistas de todo o mundo latino-americano\", s\n[…]\nEnquanto trabalhava em Temuco, onde foi nomeada diretora do Liceo de Niñas (escola para meninas patrocinada pelo Estado), já sob o pseudónimo de Gabriela Mistral conheceu o futuro Nobel de Literatura de 1971 e conterrâneo, Pablo Neruda (1904-1973), à época com dezesseis anos, apresentando-o à obra de poetas europeus e escritores russos.\n[…]\nEm 1945, torna-se a primeira escritora latino-americana a receber o prêmio Nobel de Literatura \"por sua poesia lírica, inspirada por fortes emoções, que fez de seu nome um símbolo das aspirações idealistas de todo o mundo latino-americano\".\n[…]\nNo seu discurso de aceitação, Mistral disse: “Neste momento, por um golpe de sorte imerecido, sou a voz direta dos poetas da minha raça e a voz indireta das nobres línguas espanhola e portuguesa.\" Gabriela residia no Brasil, na cidade de Petropólis, quando recebeu a notícia da honraria.\n[…]\nQuase meio século após a morte de Gabriela Mistral, sua presença ainda é bastante viva em seu país natal, o Chile. Com inúmeras ruas, praças e escolas com seu nome, a primeira latino-americana a receber o Prêmio Nobel de Literatura.\n[…]\nDoris Dana, 31 anos mais nova que Mistral, negou explicitamente em sua última entrevista que seu relacionamento com a escritora fosse romântico ou erótico, e o descreveu como o relacionamento entre uma madrasta e sua enteada. Dana negou ser lésbica e, em sua opinião, é improvável que Gabriela Mistral fosse lésbica.\n[…]\nLivreiro de Gabriela Mistral (tribunadasilhas.pt)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Ilíada",
      "descricao": "Poema épico grego atribuído a Homero, sobre a ira de Aquiles durante a Guerra de Troia."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes poemas épicos é o mais longo, em número de versos?",
    "resposta": "Ilíada",
    "distratores": [
      "Odisseia",
      "Eneida",
      "Os Lusíadas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Iliad",
      "https://en.wikipedia.org/wiki/Odyssey",
      "https://en.wikipedia.org/wiki/Aeneid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iliad",
        "situacao": "ok",
        "texto": "The Iliad (  ILL-ee-əd; Ancient Greek: Ἰλιάς, romanized: Iliás [iːliás]; lit. '[a poem] about Ilion (Troy)') is one of two major surviving ancient Greek epic poems, along with the Odyssey, attributed to Homer. It is one of the oldest extant works of literature still widely read by modern readers. Like the Odyssey, the poem is divided into 24 books and was written in dactylic hexameter. It contains\n[…]\nPublius Baebius Italicus, a Roman Senator, is credited with a shortened Latin version of the Iliad in c. 54–65 CE. The work is known as the Ilias Latina or Homerus Latinus and was formerly attributed to Pindarus Thebaeus. While the original Greek text of the Iliad itself was not commonly perused in the West during the Middle Ages, the Ilias Latina was very widely studied and read as a basic school text.\n[…]\nThe Iliad public domain audiobook at LibriVox\n[…]\nThe Iliad of Homer, by Alexander Pope, at Project Gutenberg\n[…]\nThe Iliad of Homer, by William Cowper, at Project Gutenberg\n[…]\nThe Iliad of Homer, by Theodore Alois Buckley, at Project Gutenberg\n[…]\nThe Iliad of Homer, by Edward, Earl of Derby, at Project Gutenberg\n[…]\nThe Iliad of Homer, by Andrew Lang, Walter Leaf and Ernest Meyers, at Project Gutenberg\n[…]\nThe Iliad of Homer, by Samuel Butler, at Project Gutenberg\n[…]\nIliad, Perseus Digital Library, with the Murray and Butler translations and hyperlinks to mythological and grammatical commentary\n[…]\nIliad: the Greek text presented with the translation by Buckley and vocabulary, notes, and analysis of difficult grammatical forms\n[…]\nGods, Achaeans and Troyans. An interactive visualization of The Iliad's characters flow and relations\n[…]\nFlaxman illustrations of the Iliad\n[…]\nThe Iliad Archived 15 August 2014 at the Wayback Machine study guide, themes, quotes, teacher resources\n[…]\nDigital facsimile of the first printed publication (editio princeps) of the Iliad in Homeric Greek by Demetrios Chalkokondyles, Bayerische Staatsbibliothek"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Odyssey",
        "situacao": "ok",
        "texto": "The Odyssey (, ODD-iss-ee; Ancient Greek: Ὀδύσσεια, romanized: Odýsseia [odyˈsːeːˌja]) is one of two major epics of ancient Greek literature attributed to Homer. It is one of the oldest surviving works of literature and remains popular with modern audiences. Like the Iliad, the Odyssey is divided into 24 books. It follows the heroic king of Ithaca, Odysseus (also known by the Latin variant Ulysses\n[…]\nAntoine Houdar de La Motte, who could not read Greek, used Dacier's Iliad to produce his own contracted version of the Iliad and criticised Homer in the preface. Dacier's translation of the Odyssey profoundly influenced the 1720s translation by Alexander Pope, which he produced for financial reasons years after his Iliad. He translated twelve books himself and divided the other twelve between Elijah Fenton and William Broome; the latter also provided annotations.\n[…]\nThis information eventually leaked, harming his reputation and profits. The first Odyssey in the Russian language may have been Vasily Zhukovsky's 1849 translation in hexameter. Luo Niansheng began translating the first Chinese language Iliad in the late 1980s, but he died in 1990 before completing it; his student Wang Huansheng finished the project, which was published in 1994. Huansheng's Odyssey followed three years later.\n[…]\nRobert W. Smith's second symphony for concert band, The Odyssey, tells four of the main highlights of the story in the piece's four movements: \"The Iliad\", \"The Winds of Poseidon\", \"The Isle of Calypso\", and \"Ithaca\".\n[…]\nPsychiatrist Jonathan Shay wrote two books, Achilles in Vietnam: Combat Trauma and the Undoing of Character (1994) and Odysseus in America: Combat Trauma and the Trials of Homecoming (2002), which relate the Iliad and the Odyssey to posttraumatic stress disorder and moral injury as seen in the rehabilitation histories of combat veteran patients."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Aeneid",
        "situacao": "ok",
        "texto": "The Aeneid (, ih-NEE-id; Latin: Aeneis [ae̯ˈneːɪs]) is a Latin epic poem that tells the legendary story of Aeneas, a Trojan who fled the fall of Troy and travelled to Italy, where he became the ancestor of the Romans. Written by the Roman poet Virgil between 29 and 19 BC, the Aeneid comprises 9,896 lines in dactylic hexameter.\n[…]\nThe hero Aeneas was already known to Graeco-Roman legend and myth, having been a character in the Iliad.\n[…]\nThe Aeneid can be divided into halves based on the disparate subject matter of Books 1–6 (Aeneas' journey to Latium in Italy), commonly associated with Homer's Odyssey, and Books 7–12 (the war in Latium), mirroring the Iliad. These two halves are commonly regarded as reflecting Virgil's ambition to rival Homer by treating both the Odyssey's wandering theme and the Iliad's warfare themes. This is, however, a rough correspondence.\n[…]\nSome claim that Virgil meant to change them before he died, while others find that the location of the two passages, at the very end of the so-called Volume I (Books 1–6, the Odyssey), and Volume II (Books 7–12, the Iliad), and their short length, which contrasts with the lengthy nature of the poem, are evidence that Virgil placed them purposefully there.\n[…]\nIn Latin-Christian culture, the Aeneid was one of the canonical texts, subjected to commentary as a philological and educational study, with the most complete commentary having been written by the 4th-century grammarian Maurus Servius Honoratus. It was widely held to be the pinnacle of Latin literature, much in the same way that the Iliad was seen to be supreme in Greek literature.\n[…]\nKarl Gransden, Virgil's Iliad, Cambridge, 1984."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Il%C3%ADada",
        "situacao": "ok",
        "texto": "A Ilíada (em grego antigo: Ἰλιάς, AFI: [iːliás]) é um dos dois principais poemas épicos da Grécia Antiga, de autoria atribuída ao poeta Homero, que narra os acontecimentos decorridos no período de 51 dias durante o nono e penúltimo ano dos dez anos da Guerra de Troia, conflito empreendido para a conquista de Troia, cuja gênese radica na ira (μῆνις, mênis) de Aquiles.\n[…]\nA Ilíada é atribuída a Homero, que se julga ter vivido por volta do século VIII a.C., na Jônia (atualmente, região da Turquia) e constitui o mais antigo e extenso documento literário grego e ocidental existente. Ainda hoje, contudo, se discute a verdadeira autoria e a existência real de Homero.\n[…]\nA Ilíada é constituída por 15 693 versos em hexâmetro datílico, a forma tradicional da poesia épica grega. Foi composta por uma mistura de dialetos, resultando numa língua literária artificial, nunca de fato falada na Grécia.\n[…]\nCassandra: princesa troiana. Em mitos posteriores é descrita como grande profetisa, mas na Ilíada seus dons proféticos não são mencionados. Considerada a mais bela das filhas de Priamo.\n[…]\nA história da Guerra de Troia em geral e da Ilíada em particular foi amplamente adaptada ao longo dos séculos, tanto na literatura quanto em outras artes. Uma das adaptações mais recentes que ganharam notoriedade é a do filme norte-americano Troia (veja IMDB) de 2004, que narra basicamente os eventos da Ilíada acrescidos de uma introdução e do desfecho da guerra. Embora tenha sido baseado na Ilíada, o filme toma uma série de liberdades em relação à história de Homero.\n[…]\nAnálise e resumo da Ilíada (em inglês)\n[…]\nA Ilíada em narrativa por Fernando C. de Araújo Gomes (em português)\n[…]\nIlíada no Perseus Project (em grego clássico). O site, além de conter diversas traduções paralelas para o inglês, permite que o usuário confira a tradução de palavra por palavra, apenas clicando sobre elas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "As Viagens de Gulliver",
      "descricao": "Romance satírico de Jonathan Swift, publicado em 1726, sobre as viagens do cirurgião Lemuel Gulliver a terras imaginárias."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre as terras visitadas por Gulliver, no livro de Jonathan Swift, em qual vivem os habitantes mais altos?",
    "resposta": "Brobdingnag",
    "distratores": [
      "Liliput",
      "Laputa",
      "Blefuscu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brobdingnag",
      "https://en.wikipedia.org/wiki/Gulliver%27s_Travels"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brobdingnag",
        "situacao": "ok",
        "texto": "Brobdingnag is a fictional land that is occupied by giants, in Jonathan Swift's 1726 satirical novel Gulliver's Travels. The story's main character, Lemuel Gulliver, visits the land after the ship on which he is travelling is blown off course. As a result, he becomes separated from a party exploring the unknown land. In the second preface to the book, in 1727, Gulliver laments that the publisher m\n[…]\nBrobdingnag is placed by Swift into the real world, he describes its location and geography in Part II of Gullivers Travels and provides a map showing where it is. However, the accounts are somewhat contradictory.\n[…]\nIn each of the Gulliver journeys, Swift dismisses a particular aspect of high opinion that humanity holds about itself. The travel to Brobdingnag exposes the lack of maturity: Gulliver has to be saved by Brobdingnagians  not just from the danger of the oversized world around him, but from his own follies: quarreling with a \"dwarf\", suggesting the King to use gunpowder on his subjects, seeing his own smallness, but overlooking narrowmindedness.\n[…]\nBrobdingnag can be interpreted as an outsider's view of England (the farther he goes away, the closer he comes to the own country, seen from a different perspective), while Gulliver's travel is similar to a life story of an English gentlemen of the time.\n[…]\nThe land is the subject of James Gillray's satirical hand-coloured etching and aquatint print, titled The King of Brobdingnag and Gulliver.–Vide. Swift's Gulliver: Voyage to Brobdingnag. Produced in 1803, it shows a profile of George III of the United Kingdom, representing the Brobdingnagian king, holding a miniature Napoleon, representing Gulliver, while observing him through a spyglass.\n[…]\nLee, Brian S. (1998). \"Gulliver in Brobdingnag: a journey back to infancy\". English Academy Review. 15 (1): 116–129. doi:10.1080/10131759885310121. ISSN 1013-1752.\n[…]\nImaginary countries: Brobdingnag"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
        "situacao": "ok",
        "texto": "Gulliver's Travels, originally titled Travels into Several Remote Nations of the World. In Four Parts. By Lemuel Gulliver, First a Surgeon, and then a Captain of Several Ships, is a 1726 satirical prose novel by the Anglo-Irish writer and clergyman Jonathan Swift. It is one of the most famous classics of both English and world literature, and popularised the fictional island of Lilliput.\n[…]\nAlthough Swift is often accused of misogyny in this work, many scholars believe Gulliver's blatant misogyny to be intentional, and that Swift uses satire to mock misogyny throughout the book. One of the most cited examples of this comes from Gulliver's description of a Brobdingnagian woman:\n[…]\nA criticism of Swift's use of misogyny by Felicity A. Nussbaum proposes the idea that \"Gulliver himself is a gendered object of satire, and his antifeminist sentiments may be among those mocked\". Gulliver's own masculinity is often mocked, seen in how he is made to be a coward among the Brobdingnag people, repressed by the people of Lilliput, and viewed as an inferior Yahoo among the Houyhnhnms.\n[…]\nAnother criticism of Swift's use of misogyny delves into Gulliver's repeated use of the word 'nauseous', and the way that Gulliver is fighting his emasculation by commenting on how he thinks the women of Brobdingnag are disgusting,\n[…]\nSwift has Gulliver frequently invoke the sensory (as opposed to reflective) word \"nauseous\" to describe this and other magnified images in Brobdingnag not only to reveal the neurotic depths of Gulliver's misogyny, but also to show how male nausea can be used as a pathetic countermeasure against the perceived threat of female consumption.\n[…]\nThis is similar to the progression of Gulliver's time in Brobdingnag, from man of science to women's plaything.\n[…]\nConversely, Brobdingnagian appears in the Oxford English Dictionary as a synonym for very large or gigantic."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brobdingnag",
        "situacao": "ok",
        "texto": "Brobdingnag é uma terra fictícia do livro As Viagens de Gulliver, de Jonathan Swift, escrito em 1726. O personagem principal da história, Lemuel Gulliver, visita a terra depois que o navio em que ele está viajando sai do curso. Como resultado, ele se separa de um grupo que explora a terra desconhecida. No segundo prefácio do livro, Gulliver lamenta que a editora tenha escrito incorretamente o nome\n[…]\nSwift descreve a localização de Brobdingnag e sua geografia na Parte II de As Viagens de Gulliver e fornece um mapa mostrando onde ela está. No entanto, os relatos são um tanto contraditórios.\n[…]\nDe lá, uma tempestade impulsiona o navio \"cerca de quinhentas léguas para o leste\" (isso colocaria o navio ainda na Micronésia), após o que a tripulação determina \"manter o mesmo curso em vez de virar mais para o norte, o que poderia ter trazido nós para as partes noroeste da Grande Tartária \". Eles avistaram terras, que Gulliver mais tarde descobre ser Brobdingnag, em 16 de junho de 1703.\n[…]\nBrobdingnag é considerada uma península do tamanho de um continente de 6.000 milhas (9.700 km) de comprimento e 3.000–5.000 milhas (4.800-8.000 km) de largura, o que, com base na localização fornecida por Gulliver, sugere que cobre a maior parte do Pacífico Norte. Ao contrário, seu mapa mostra Brobdingnag de tamanho e extensão semelhantes aos da atual Washington, e sua descrição da viagem o coloca em uma viagem de seis semanas das Molucas.\n[…]\nSwift era altamente cético sobre a confiabilidade dos escritos de viagem e as improváveis ​​descrições geográficas parodiam muitos livros de viagens não confiáveis ​​publicados na época que Percy Adams descreve como \"mentiras de viagem\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Divina Comédia",
      "descricao": "Poema épico de Dante Alighieri, do início do século quatorze, dividido em Inferno, Purgatório e Paraíso."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Divina Comédia, Virgílio guia Dante até o alto do Purgatório. Que mulher amada pelo poeta o conduz pelo Paraíso?",
    "resposta": "Beatriz",
    "distratores": [
      "Laura",
      "Francesca",
      "Fiammetta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beatrice_Portinari",
      "https://en.wikipedia.org/wiki/Divine_Comedy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beatrice_Portinari",
        "situacao": "ok",
        "texto": "Beatrice \"Bice\" di Folco Portinari (Italian: [beaˈtriːtʃe portiˈnaːri]; 1265 – 8 or 19 June 1290) was an Italian woman who has been commonly identified  as the principal inspiration for Dante Alighieri's Vita Nuova, and is also identified with the Beatrice who acts as his guide in the last book of his narrative poem the Divine Comedy (La Divina Commedia), Paradiso, and during the conclusion of the\n[…]\nDante's portrayal of Beatrice in the Vita Nuova is unambiguously positive, but at this early stage resembles the more generic attitude of the courtly lady, rather than the sharply defined personality for which Beatrice is famous in the Commedia.\n[…]\nAt the beginning of the Inferno, when Virgil appears to guide Dante through the afterlife, he explains that he was sent by Beatrice. She herself was moved to intercede by the Virgin Mary and Saint Lucia. She is referenced frequently throughout his journey through hell and purgatory as a source of inspiration and comfort.\n[…]\nBeatrice personally appears near the end of the Purgatorio to take over as guide from the Latin poet Virgil because, as a pagan, Virgil cannot enter Paradise. Moreover, Beatrice, being the incarnation of beatific love (as her name implies), is uniquely suited to lead the pilgrim into the realm of divine bliss. Naturally, then, it is Beatrice who must lead the pilgrim into heaven.\n[…]\nDespite representing divine love, Beatrice's appearance to Dante in the Garden of Eden in Purgatorio is not a joyous reunion. She berates him for weeping when Virgil disappears, and then for abandoning her memory after her death and indulging in sin to such a degree that she had to intercede on his behalf to save him. As Beatrice guides Dante through the spheres of Heaven, she grows increasingly beautiful and indescribable, representing Dante's progress towards God.\n[…]\nDante and Beatrice (disambiguation)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Divine_Comedy",
        "situacao": "ok",
        "texto": "The Divine Comedy (Italian: Divina Commedia) is an Italian narrative poem by Dante Alighieri, begun c. 1308 and completed c. 1321, shortly before the author's death. It is widely considered the pre-eminent work in Italian literature and one of the greatest works of Western literature. The poem's imaginative vision of the afterlife is representative of the medieval worldview as it existed in the La\n[…]\nIn the poem, the pilgrim Dante is accompanied by three guides: Virgil, who represents human reason and who guides him for all of Inferno and most of Purgatorio; Beatrice, who represents divine revelation, in addition to theology, grace, and faith, and who guides him from the end of Purgatorio onwards; and Saint Bernard of Clairvaux, who represents contemplative mysticism and devotion to Mary the Mother, guiding him in the final cantos of Paradiso.\n[…]\nWritten in the first person, the poem tells of Dante's journey through the three realms of the dead, lasting from the night before Good Friday to the Wednesday after Easter in the spring of 1300. The Roman poet Virgil guides him through Hell and Purgatory; Beatrice, Dante's ideal woman, guides him through Heaven.\n[…]\nBeatrice was a Florentine woman he had met in childhood and admired from afar in the mode of the then-fashionable courtly love tradition, which is highlighted in Dante's earlier work La Vita Nuova. The Cistercian abbot Bernard of Clairvaux guides Dante through the last three cantos.\n[…]\nDante meets and converses with several great saints of the Church, including Thomas Aquinas, Bonaventure, Saint Peter, and St. John. Near the end, Beatrice departs and Bernard of Clairvaux takes over as the guide. The Paradiso is more theological in nature than the Inferno and the Purgatorio. However, Dante admits that the vision of heaven he receives is merely the one his human eyes permit him to see, and thus Dante's personal vision."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Beatriz_Portinari",
        "situacao": "ok",
        "texto": "Beatriz Portinari, em italiano Beatrice (Bice) Portinari, (1266 — 8 de junho de 1290) foi, segundo alguns críticos literários, a figura histórica que inspirou o personagem Beatriz, de Dante.\n[…]\nBeatriz aparece pessoalmente perto do final do Purgatório para assumir como guia do poeta latino Virgílio porque, como pagão, Virgílio não pode entrar no Paraíso. Além disso, Beatriz, sendo a encarnação do amor beatífico (como seu nome indica), é especialmente adequada para conduzir o peregrino ao reino da felicidade divina. Naturalmente, então, é Beatriz quem deve conduzir o peregrino ao céu.\n[…]\nApesar de representar o amor divino, a aparição de Beatriz a Dante no Jardim do Éden em Purgatorio XXX não é um reencontro alegre. Ela o repreende por chorar quando Virgílio desaparece, e depois por abandonar sua memória após sua morte e se entregar ao pecado a tal ponto que ela teve que interceder em seu favor para salvá-lo. À medida que Beatriz guia Dante pelas esferas do Céu, ela se torna cada vez mais bela e indescritível, representando o progresso de Dante em direção a Deus.\n[…]\nEla frequentemente corrige Dante durante sua jornada, agindo como um guia espiritual e fonte de sabedoria. Ao contrário de seu tratamento inicial duro, ao longo de Paradiso Beatriz é encorajadora e paciente para com Dante, tendo alegria em seu progresso gradual. Quando eles chegam ao Empiriano, ela o deixa para tomar seu devido lugar lá. São Bernardo guia Dante para a parte final de sua jornada. Ele aponta o lugar de Beatriz no Empiriano entre várias mulheres glorificadas da Bíblia.\n[…]\nMedia relacionados com Beatriz Portinari no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Hamlet",
      "descricao": "Tragédia de William Shakespeare sobre o príncipe da Dinamarca que vinga a morte do pai."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Hamlet, no cemitério, o príncipe segura a caveira de um antigo bobo da corte que conhecera na infância. Como ele se chamava?",
    "resposta": "Yorick",
    "distratores": [
      "Polônio",
      "Horácio",
      "Osric"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Yorick"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yorick",
        "situacao": "ok",
        "texto": "Yorick is an unseen character in William Shakespeare's play Hamlet. He is the court jester whose skull is exhumed by the First Gravedigger in Act 5, Scene 1, of the play. The sight of Yorick's skull evokes a reminiscence by Prince Hamlet of the man, who apparently played a role during Hamlet's upbringing:\n[…]\nA bronze statue depicting Hamlet with the skull of Yorick is located in Stratford-upon-Avon, the birth town of William Shakespeare, and skull imagery is commonly used in souvenirs and artwork throughout the town. In theatrical productions of Hamlet, Yorick is typically portrayed with a fake skull. Skulls of Yorick have been made from materials such as wood, plaster, papier-mâché, fibreglass, and plastic. However, real human skulls have also been used for the role.\n[…]\nThe skulls of other individuals have been used to represent Yorick in productions of Hamlet. Examples include a horse thief named Fontaine, whose skull was used by Junius Brutus Booth and Edwin Booth; John \"Pop\" Reed, a stagehand whose skull was donated to the Walnut Street Theatre; and George Frederick Cooke, whose skull was used, without his consent, for a production of Hamlet.\n[…]\nThe symbol of Yorick's skull has become so iconic in theatre that it has occasionally been regarded as cliché, and some directors have sought to alter the scene. The production of Hamlet directed by Thomas Ostermeier, first performed at the Schaubühne in 2008, removed the scene with the gravediggers, instead alluding to Yorick with an image of a skull projected onto Hamlet's face. The Royal Exchange production starring Maxine Peake kept the scene, but replaced Yorick's skull with a sweater.\n[…]\nIn Kenneth Branagh's 1996 film adaptation, Yorick is seen alive, in flashbacks to Hamlet's youth, played by actor and comedian Ken Dodd."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yorick",
        "situacao": "ok",
        "texto": "Yorick é um personagem shakespeariano, citado pela primeira vez na Cena I do Quinto Ato da peça teatral  Hamlet.\n[…]\nYorick é um falecido bobo da corte. Não são dadas informações biográficas sobre ele. Seria um personagem ligado à infância de Hamlet. Ao ver o crânio de Yorick, Hamlet fala sobre os efeitos da morte sobre o corpo.\n[…]\n\"- Helás, pobre Yorick! Eu o conheci, Horácio, um companheiro de inúmeras brincadeiras, de notável fantasia, que carregou-me às costas umas mil vezes, e agora, quão abominável me parece! Causa-me um nó na garganta vê-lo agora. Aqui ficavam os lábios que beijei tantas vezes. Onde estão suas brincadeiras agora?\"\n[…]\nO contraste entre Yorick, o companheiro de brincadeiras e a cruel visão dos seus restos mortais constitui uma variação sobre o tema da vaidade terrena, a transitoriedade da vida e a morte inevitável.\n[…]\nNo imaginário popular, o célebre monólogo de Hamlet \"ser ou não ser\", pronunciado na Cena I do Terceiro Ato, é frequentemente confundido com o momento em que Hamlet descobre o crânio de Yorick. Tal confusão deu origem a várias interpretações, nas quais o príncipe Hamlet segura um crânio na mão enquanto recita o monólogo. De fato, na peça, as duas cenas estão distantes.\n[…]\nO tema do Memento mori (literalmente: \"Recorda-te que deves morrer\") era comum na pintura europeia dos séculos XVI e XVII. A imagem de Hamlet meditando diante da caveira de Yorick tornou-se a mais popular expressão dessa ideia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Os Lusíadas",
      "descricao": "Poema épico de Luís de Camões, publicado em 1572, sobre a viagem de Vasco da Gama à Índia."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Os Lusíadas, que gigante, personificação do Cabo das Tormentas, surge para ameaçar a frota de Vasco da Gama?",
    "resposta": "Adamastor",
    "distratores": [
      "Polifemo",
      "Briareu",
      "Golias"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Adamastor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adamastor",
        "situacao": "ok",
        "texto": "Adamastor is a mythological character created by the Portuguese poet Luís de Camões in his epic poem Os Lusíadas (first printed in 1572), as a personification of the Cape of Good Hope, symbolizing the dangers of the sea and the formidable forces of nature challenged and ultimately overcome by the Portuguese during the Age of Discovery. Adamastor manifests itself out of a storm.\n[…]\nVasco da Gama, ahead of the Portuguese expedition, confronts the creature by asking \"Who are you?\", prompting Adamastor to tell his story.\n[…]\nAdamastor represented the dangers Portuguese sailors faced when trying to round the Cape of Storms – Cabo das Tormentas – henceforth called the Cape of Good Hope.\n[…]\nAdamastor has figured in much poetry of the Cape. In The First Life of Adamastor, a novella by André Brink, the writer refashioned the Adamastor story from a 20th-century perspective.\n[…]\nAdamastor is also mentioned in the opera L'Africaine (1865) about Vasco da Gama by the composer Giacomo Meyerbeer. The slave Nelusko sings a song about Adamastor while he deliberately steers the ship into a storm and it sinks.\n[…]\nGaston Leroux also mentions it in The Phantom of the Opera (chap. VII). Herman Melville mentions Adamastor in his Billy Budd in Chapter VIII as \"Camoen's Spirit of the Cape\".\n[…]\nAdamastor is also the name of a sauropod dinosaur, Angolatitan adamastor, found in Angola, named by the paleontologist Octávio Mateus.\n[…]\nThe name Adamastor is an adaptation for the Portuguese language from the Greek word for \"Untamed\" or \"Untameable\" (Adamastos) (which the Portuguese did tame).\n[…]\nCyril Coetzee, \"Myth of Adamastor revisited\"\n[…]\nFerreira, Ockert Jacobus Olivier (1940- ), \"Adamastor, Spirit of the Cape of Storms\"/ \"Adamastor, Espírito do Cabo das Tormentas\"/ \"Adamastor, Gees van die Stormkaap\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adamastor_%28mitologia%29",
        "situacao": "ok",
        "texto": "Adamastor é um gigante mitológico. Sidónio Apolinário cita este gigante pela primeira vez como um dos filhos de Gaia, que se rebelaram contra Zeus e por isso foram fulminados, ficaram dispersos e reduzidos a promontórios, ilhas e fraguedos. Também é citado por Fernando Pessoa no poema O Mostrengo e por Rabelais, em Gargantua e Pantagruel.\n[…]\nSua menção mais memorável, no entanto é feita por Luís de Camões no Canto V da epopeia portuguesa Os Lusíadas, como o gigante do Cabo das Tormentas, que afundava as naus. Como ele foi \"jogado ao fundo dos mares\", desfazia-se em lágrimas, as águas salgadas que banhavam a confluência dos oceanos Atlântico e Índico, e revoltava-se sob a forma de uma tempestade ameaçando a ruína daquele que tentasse dobrar o Cabo das Tormentas, os alegados domínios de Adamastor.\n[…]\nO episódio do Adamastor representa, assim, em figuração grandiosa e comovente, as forças da natureza, a sua oposição à audácia dos navegadores portugueses comandados por Vasco da Gama e a predição da história trágico-marítima que se lhe seguiria. Os Lusíadas ilustra a superação do povo português sobre o medo de navegar em mares desconhecidos, onde este medo é sintetizado pela figura do gigante.\n[…]\nÀ custa de uma experimentação contínua, os marinheiros portugueses aprenderam a recusar esses mitos e chegaram com Bartolomeu Dias ao Cabo das Tormentas, conhecido pela impossibilidade de se navegar, e que, passando a se chamar Cabo da Boa Esperança, lhes abria as portas da Índia. Os mares desse cabo serviram muitas vezes de sepultura a navios carregados de riquezas e de desilusões, como que comprovando as profecias do Adamastor.\n[…]\nBem te vingaste em nós do afouto Gama!Pelos nossos desastres és famoso:Maldito Adamastor! Maldita fama!",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Fernando Pessoa",
      "descricao": "Poeta português (1888–1935), criador de heterônimos como Alberto Caeiro, Álvaro de Campos e Ricardo Reis."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Entre os heterônimos de Fernando Pessoa, qual era tratado como mestre pelos outros e pelo próprio Pessoa?",
    "resposta": "Alberto Caeiro",
    "distratores": [
      "Álvaro de Campos",
      "Ricardo Reis",
      "Bernardo Soares"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alberto_Caeiro",
      "https://pt.wikipedia.org/wiki/Alberto_Caeiro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Caeiro",
        "situacao": "ok",
        "texto": "Alberto José Caeiro (European Portuguese pronunciation: [alˈβɛɾtu ʒuˈsɛ kɐˈɐjɾu]) is a heteronym of the Portuguese poet Fernando Pessoa, first used in 1914 and introduced in print in 1925. In his fictional biography, Caeiro was born in Lisbon on 16 April 1889, lived most of his life in a village in Ribatejo and died in 1915. He was the leader and teacher of a group of neopagan poets and intellectu\n[…]\nFernando Pessoa (1888–1935) was a Portuguese poet who posthumously became highly regarded in European literature. Alberto Caeiro was the first of his major heteronyms, a term he used for what was a mixture of pen names, author personas and fictional characters. According to a letter Pessoa wrote to the literary critic Adolfo Casais Monteiro, he created Caeiro on 8 March 1914, when he wrote a first series of poems for what would become The Keeper of Sheep.\n[…]\nAlberto Caeiro appeared.\n[…]\nPessoa wrote 104 poems under the Caeiro heteronym.\n[…]\nIvo Castro wrote a work on Caeiro in 1986 and published the first critical edition of his poems in 2015. Shearsman Books published Caeiro's poems in full in English interpretations by Chris Daniels in 2007 as The Collected Poems of Alberto Caeiro. Patricio Ferrari and Jerónimo Pizarro edited a Portuguese critical edition of Caeiro's collected poems and selected texts about Caeiro from Pessoa's other heteronyms that was published in 2016.\n[…]\nPessoa, Fernando (2007). The Collected Poems of Alberto Caeiro. Translated by Daniels, Chris. Exeter: Shearsman Books. ISBN 978-1-905700-24-0.\n[…]\nPessoa, Fernando (2020). Pizarro, Jerónimo; Ferrari, Patricio (eds.). The Complete Works of Alberto Caeiro. Translated by Jull Costa, Margaret; Ferrari, Patricio. New York City: New Directions. ISBN 978-0-8112-2780-3.\n[…]\nSheets, Jane M. (1969). \"Fernando Pessoa as Anti-Poet: Alberto Caeiro\". Bulletin of Hispanic Studies. 46 (1): 39–47. doi:10.1080/1475382692000346039."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alberto_Caeiro",
        "situacao": "ok",
        "texto": "Alberto Caeiro da Silva foi um heterónimo criado por Fernando Pessoa, sendo considerado o Mestre Ingénuo dos heterónimos Álvaro de Campos e Ricardo Reis e também de seu próprio autor, Fernando Pessoa, apesar de apenas ter feito a instrução primária. Caeiro foi o primeiro dos principais heterónimos de Pessoa. A primeira e mais famosa obra que Pessoa compôs sob este nome foi O Guardador de Rebanhos,\n[…]\nComo as obras de Pessoa em geral, os poemas de Caeiro começaram a receber grande aclamação da crítica décadas após a morte do escritor. A primeira coleção dos poemas foi publicada em Portugal em 1946.\n[…]\nMestre dos outros heterónimos e do próprio Fernando Pessoa Ortónimo porque, ao contrário destes, consegue submeter o pensar ao sentir, o que lhe permite: viver sem dor; envelhecer sem angústia e morrer sem desespero; não procurar encontrar sentido para a vida e para as coisas que o rodeiam; sentir sem pensar; e ser um ser uno (não fragmentado).\n[…]\nFernando Pessoa (2009). Poesia de Alberto Caeiro. [S.l.]: Assírio & Alvim. ISBN 978-972-37-0654-3\n[…]\nLopes, Teresa Rita (1991). Pessoa por Conhecer. [S.l.]: Ed. Estampa. ISBN 978-972-33-0768-9\n[…]\nLourenço, Eduardo (1993). Fernando, Rei da Nossa Baviera. [S.l.]: I.N - C.M. ISBN 978-972-27-0655-1\n[…]\nPadrão, Maria da Glória (1981). A Metáfora em Fernando Pessoa. [S.l.]: Ed. Limiar\n[…]\nPizarro, Jerónimo (2017). «How to Construct a Master: Pessoa and Caeiro». Portuguese Studies. 33 (1): 56–69. ISSN 0267-5315. JSTOR 10.5699/portstudies.33.1.0056. doi:10.5699/portstudies.33.1.0056\n[…]\nPizarro, Jerónimo; Ferrari, Patricio (2020a). «Introduction». In:  Pizarro, Jerónimo; Ferrari, Patricio. The Complete Works of Alberto Caeiro. New York City: New Directions. ISBN 978-0-8112-2780-3\n[…]\nBernardo Soares (semi-heterónimo)\n[…]\n«Casa Fernando Pessoa»\n[…]\n«Obra completa de Alberto Caeiro»\n[…]\n«Diversas análises acerca Alberto Caeiro»"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Dom Quixote",
      "descricao": "Romance de Miguel de Cervantes, publicado em duas partes, em 1605 e 1615, sobre um fidalgo que se julga cavaleiro andante."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Como se chama o cavalo velho e magro que Dom Quixote monta em suas aventuras?",
    "resposta": "Rocinante",
    "distratores": [
      "Babieca",
      "Bucéfalo",
      "Rucio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rocinante"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rocinante",
        "situacao": "ok",
        "texto": "Rocinante (Rozinante) (Spanish pronunciation: [roθiˈnante]) is Don Quixote's horse in the 1605/1615 novel Don Quixote by Miguel de Cervantes. In many ways, Rozinante is not only Don Quixote's horse, but also his double; like Don Quixote, he is awkward, past his prime, and engaged in a task beyond his capacities.\n[…]\nRocinante's name, then, signifies his change in status from the \"old nag\" of before to the \"foremost\" steed.\n[…]\nRocinante is the name of Monsignor Quixote's car in Graham Greene's 1982 novel Monsignor Quixote.\n[…]\nIn the television series Once Upon a Time, which is based upon retellings of literary classics, Rocinante is the name of the horse belonging to a young Regina/Evil Queen.\n[…]\nFinnish actor Jukka Leisti created a children's TV programme around his knight character Tuttiritari (The Pacifier Knight). Tuttiritari rides \"a horse\" called Rusinante. The name of the horse is a word play—a blend word or a portmanteau—a combination of Rosinante (Rocinante) and the Finnish word for raisin, rusina.\n[…]\nIn the manga One Piece there is a character named Donquixote Rocinante, he is the little brother of Donquixote Doflamingo.\n[…]\nIn the television series Psych, Season 3 Episode 10 \"Six Feet Under The Sea\", a smuggler's plane is named \"Rocinante\".\n[…]\nIn the video game Limbus Company, a character named Don Quixote has \"ROCINANTE\" written on the sides of her running shoes. The shoes are actually a manifestation of Rocinante itself, and appears to have some form of sentience, acting as a cover of her true identity.\n[…]\nIn the anime Legend of the Galactic Heroes, a smuggler's merchant spaceship is named Rocinante.\n[…]\nIn the 2026 game Fire Emblem: Fortune's Weave, the recruitable character Io rides a horse named \"Rocinan\".\n[…]\nHipparion rocinantis, an extinct equine found in La Mancha and named after Rocinante."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rocinante",
        "situacao": "ok",
        "texto": "Rocinante era o famoso cavalo de Dom Quixote de La Mancha, personagem do romance de Miguel de Cervantes. Vem de rocim, que na Idade Média significava cavalo fraco e pequeno, \"pileca\" na gíria. Sofreu muito durante as aventuras de Dom Quixote. Era um cavalo branco, desengonçado, magricelo, que o acompanhava em suas aventuras.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Moby Dick",
      "descricao": "Romance de Herman Melville, de 1851, sobre a caça do capitão Ahab a uma baleia branca."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O romance Moby Dick começa com o narrador pedindo ao leitor que o chame por um certo nome. Qual?",
    "resposta": "Ismael",
    "distratores": [
      "Ahab",
      "Queequeg",
      "Starbuck"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ishmael_(Moby-Dick)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ishmael_(Moby-Dick)",
        "situacao": "ok",
        "texto": "Ishmael is a character in Herman Melville's Moby-Dick (1851), which opens with the line \"Call me Ishmael.\" He is the first-person narrator of the book. Because Ishmael plays a minor role in the plot, early critics of Moby-Dick assumed that Captain Ahab was the protagonist. Many either confused Ishmael with Melville or overlooked the role he played.\n[…]\nRichard Basehart in Moby Dick, a 1956 film adaptation in which Gregory Peck plays Ahab.\n[…]\nHenry Thomas in Moby Dick, a 1998 television miniseries adaptation in which Patrick Stewart plays Ahab.\n[…]\nTim Guinee in Animated Epics: Moby Dick, a 2000 animated movie in which Rod Steiger provides the voice of Ahab.\n[…]\nRenee O'Connor plays Michelle Herman, a female counterpart of Ishmael in Moby Dick, a 2010 modern-day film adaptation in which Barry Bostwick plays Ahab.\n[…]\nCharlie Cox in Moby Dick, a 2011 television miniseries adaptation in which William Hurt plays Ahab.\n[…]\nBezanson, Walter E. (2002). \"Moby-Dick: Work of Art\". In Parker, Hershel; Hayford, Harrison (eds.). Moby-Dick, or the Whale. New York City: W. W. Norton. ISBN 9780393972832.\n[…]\nBryant, John (1998). \"Moby-Dick as Revolution\". In Levine, Robert S. (ed.). The Cambridge Companion to Herman Melville. Cambridge, England: Cambridge University Press. ISBN 0-521-55571-X.\n[…]\nMansfield, Luther S.; Vincent, Howard P. (1952). \"Introduction\", \"Explanatory Notes\". Moby-Dick; or, The Whale. New York City: Hendricks House. ASIN B000KT6EXS.\n[…]\nQuick, Tom (1994) [1851]. \"Explanatory Notes\". Moby-Dick; or, The Whale. New York City: Penguin Books. ASIN B00BR5GVAK.\n[…]\nMoby-Dick Chapter 1: Loomings — First (numbered) chapter of Moby-Dick, introducing Ishmael.\n[…]\nLibrivox: Moby Dick Audiobook - Public Domain Audiobook"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Guerra e Paz",
      "descricao": "Romance de Liev Tolstói, publicado na década de 1860, sobre famílias aristocráticas russas durante as guerras napoleônicas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Guerra e Paz, de Tolstói, muitos diálogos da aristocracia russa aparecem escritos em que outra língua?",
    "resposta": "Francês",
    "distratores": [
      "Alemão",
      "Inglês",
      "Polonês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/War_and_Peace"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/War_and_Peace",
        "situacao": "ok",
        "texto": "War and Peace (Russian: Война и мир, romanized: Voyna i mir; pre-reform Russian: Война и миръ; IPA: [vɐjˈna i ˈmʲir]) is an epic novel by the Russian author Leo Tolstoy. Set during the Napoleonic Wars, the work comprises both a fictional narrative and chapters in which Tolstoy discusses history and philosophy. An early version was published serially beginning in 1865, after which the entire book w\n[…]\nWar and Peace has been translated into many languages. It has been translated into English on several occasions, starting with Clara Bell working from a French translation. The translators Constance Garnett and Aylmer and Louise Maude knew Tolstoy personally. Translations have to deal with Tolstoy's often peculiar syntax and his fondness for repetitions. Only about 2% of War and Peace is in French; Tolstoy removed the French in a revised 1873 edition, only to restore it later.\n[…]\nWar and Peace (1972): The BBC (British Broadcasting Corporation) made a television serial based on the novel, broadcast in 1972–73. Anthony Hopkins played the lead role of Pierre. Other lead characters were played by Rupert Davies, Faith Brook, Morag Hood, Alan Dobie, Angela Down and Sylvester Morand. This version faithfully included many of Tolstoy's minor characters, including Platon Karataev (Harry Locke).\n[…]\nWar and Peace (2007): produced by the Italian Lux Vide, a TV mini-series in Russian & English co-produced in Russia, France, Germany, Poland and Italy. Directed by Robert Dornhelm, with screenplay written by Lorenzo Favella, Enrico Medioli and Gavin Scott. It features an international cast with Alexander Beyer playing the lead role of Pierre supported by Malcolm McDowell, Clémence Poésy as Natasha Rostova, Alessio Boni, Pilar Abella, Valentina Cervi, J.\n[…]\nHomage to War and Peace Searchable map, compiled by Nicholas Jenkins, of places named in Tolstoy's novel (2008).\n[…]\nChapter Summaries for War and Peace"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_e_Paz",
        "situacao": "ok",
        "texto": "Guerra e Paz (em russo:  Война и мир) é um romance histórico escrito pelo autor russo Liev Tolstói e publicado entre 1865 e 1869 no Russkii Vestnik, um periódico da época. É uma das obras mais volumosas da história da literatura universal. O livro narra a história da Rússia à época de Napoleão Bonaparte (notadamente as guerras napoleônicas na Rússia).\n[…]\nUma lenda urbana afirma que o sentido real do título do livro seria A Guerra e o Mundo. As palavras \"paz\" (antes de 1918: \"миръ\") e \"mundo\" (antes de 1918: \"мiръ\", incluindo também o sentido de vida em sociedade) eram efetivamente homônimas em russo, escrevendo-se de maneira idêntica desde a reforma ortográfica russa de 1918. No entanto, o próprio Tolstói traduzia o título em francês da obra como La Guerre et la Paix (A Guerra e a Paz).\n[…]\nApesar de Tolstói ter escrito a maior parte do livro, incluindo toda a narrativa, em russo, partes significativas dos diálogos em todo o livro (incluindo a sentença inicial) são escritas em francês. Isso meramente reflete a realidade da época, já que toda a aristocracia russa do século XIX falava o francês e empregava a língua entre si em vez do russo. Tolstói chega a fazer referência a um aristocrata russo já adulto que tem lições de russo para tentar dominar a língua nacional.\n[…]\nDe forma menos realista, os franceses retratados na novela, incluindo o próprio Bonaparte, às vezes falam em francês, às vezes em russo.\n[…]\nKarataev é o oposto da aristocracia de São Petersburgo e um notável membro da classe trabalhadora, com quem Pierre descobre o sentido na vida simples apenas por conviver e interagir com ele. Depois de testemunhar soldados franceses saqueando Moscou e atirando em civis arbitrariamente, Pierre é forçado a marchar com o Grande Exército durante sua desastrosa retirada de Moscou devido ao inverno rigoroso.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "O Pequeno Príncipe",
      "descricao": "Novela ilustrada de Antoine de Saint-Exupéry, publicada em 1943, sobre um principezinho vindo de um asteroide."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Ao chegar à Terra, no meio do deserto, qual é o primeiro ser que o Pequeno Príncipe encontra?",
    "resposta": "A serpente",
    "distratores": [
      "A raposa",
      "O manobreiro",
      "Um jardim de rosas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Little_Prince"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Little_Prince",
        "situacao": "ok",
        "texto": "The Little Prince (French: Le Petit Prince, pronounced [lə p(ə)ti pʁãs]) is a novella written and illustrated by French writer and aviator Antoine de Saint-Exupéry. It was first published in English and French in the United States by Reynal & Hitchcock in April 1943 and was published posthumously in France following liberation; Saint-Exupéry's works had been banned by the Vichy Regime.\n[…]\nThe prince then met two people from Earth:\n[…]\nAfter being translated by Bonifacio del Carril, The Little Prince was first published in Spanish as El principito in September 1951 by the Argentine publisher Emecé Editores. Other Spanish editions have also been created; in 1956 the Mexican publisher Diana released its first edition of the book, El pequeño príncipe, a Spanish translation by José María Francés.\n[…]\nIn southern Brazil, in the city of Florianópolis, there is the Avenida Pequeno Príncipe (Little Prince Avenue in Portuguese), whose name is a tribute to Saint-Exupéry, who passed through the city during his aviator career, an event that became part of the local culture.\n[…]\nFrench professional wrestler Daniel Dubail was billed as Le Petit Prince.\n[…]\nThe Montblanc Luxury Writing Instrument Company created three series of luxury fountain pens based on the Little Prince series, including the Le Petit Prince, the Le Petit Prince Aviator and the Le Petit Prince and Planet pens  in various models.\n[…]\nde Galembert, Laurent (26 November 2002). La grandeur du Petit Prince (in French). Dissertation. Éditions Le Manuscrit. ISBN 2-7481-1916-9.\n[…]\nLe Petit Prince at Project Gutenberg Australia\n[…]\nPetit Prince Collection Website dedicated to the largest collection of Little Prince books in the world. This impressive collection (over seven thousand different editions of the full text in more than 600 different languages and dialects) belongs to the Jean-Marc Probst Foundation for the Little Prince in Lausanne."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Le_Petit_Prince",
        "situacao": "ok",
        "texto": "Le Petit Prince (pronúncia em francês: ​[lə.pə.tiˈpʁɛ̃s]) (prt: O Principezinho; bra: O Pequeno Príncipe) é uma novela do escritor francês Antoine de Saint-Exupéry, originalmente publicada em inglês e francês em abril de 1943 nos Estados Unidos.\n[…]\nDurante a Segunda Guerra Mundial, Saint-Exupéry foi exilado para a América do Norte. Em meio a turbulências pessoais e sua saúde falhando, ele produziu quase metade das obras no qual ele seria lembrado, incluindo o conto de solidão, amizade, amor e perda, em forma de um jovem príncipe que caiu na Terra. Um livro de memórias feito pelo autor que contava suas experiências de aviação no deserto do Saara, e é pensado que ele usou estas experiências como base para a novela.\n[…]\nO Pequeno Príncipe retoma o esquema do conto filosófico criado por Voltaire. Especificamente, guarda certa semelhança com Micromégas, um gigante de Sirius que decide aventurar-se pelo Universo, visita o Sistema Solar e vem parar na Terra, discutindo filosofia com os seres humanos. Também o principezinho visita vários asteroides/planetas e discute filosofia.\n[…]\nNa década de 1980 foi lançada uma série de desenhos animados chamada As Aventuras do Pequeno Príncipe. A série foi feita pelo estúdio de animação \"Vóvó Chantre\" e foi ao ar pela primeira vez no Japão em 1978 sob o título Hoshi no Ōjisama Puchi Purinsu (星の王子さま　プチ・プリンス; Prince of the Stars: Petit Prince).\n[…]\nEm dezembro de 2016, o Departamento de Livro, Leitura, Literatura e Bibliotecas (DLLLB) do Ministério da Cultura do Brasil (Minc) lança o primeiro livro com acessibilidade e em múltiplos formatos, O Pequeno Príncipe, com um kit seguindo os protocolos internacionais de acessibilidade, durante o seminário Autonomia e Direito para Todos em Brasília.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Marcel Proust",
      "descricao": "Romancista francês, autor de Em Busca do Tempo Perdido."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No grande romance de Marcel Proust, que bolinho, molhado no chá, desperta de repente as lembranças de infância do narrador?",
    "resposta": "Madeleine",
    "distratores": [
      "Croissant",
      "Macaron",
      "Brioche"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Madeleine_(cake)",
      "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Madeleine_(cake)",
        "situacao": "ok",
        "texto": "The madeleine (English:   MAD-əl-in,  MAD-əl-ayn or  MAD-əl-AYN, French: [madlɛn] ) is a small traditional cake that originated in Commercy and Liverdun, two communes of the Lorraine region in northeastern France.\n[…]\nMarcel Proust's description of his experience as an adult of the taste of a madeleine dipped in tea triggering memories of childhood in his early 20th century Remembrance of Things Past caused the term 'Proustian' to become synonymous with something that \"evok(es) the recall of a forgotten memory\".\n[…]\nMadeleines are characterized both by the shell pattern with well-defined ridges on one side and by the typical bump or hump on the other side. The interior is tender and the exterior is crisp.\n[…]\nIn In Search of Lost Time (also known as Remembrance of Things Past), author Marcel Proust uses madeleines to contrast involuntary memory with voluntary memory. The latter designates memories retrieved by \"intelligence\", that is, memories produced by putting conscious effort into remembering events, people, and places. Proust's narrator laments that such memories are inevitably partial, and do not bear the \"essence\" of the past.\n[…]\nThe most famous instance of involuntary memory by Proust is known as the \"episode of the madeleine\", yet there are at least half a dozen other examples in In Search of Lost Time.\n[…]\nAnd all from my cup of tea.The \"episode of the madeleines\" is considered one of the most important moments in the work and to \"encapsulat(e) its theme of involuntary memory\". The terms 'Proustian' and 'memoires de Proust' are often used to refer to something that \"evok(es) the recall of a forgotten memory\".\n[…]\nBahulu, a Malaysian version of madeleines, inspired by European influence"
      },
      {
        "url": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time",
        "situacao": "ok",
        "texto": "In Search of Lost Time (French: À la recherche du temps perdu), first translated into English as Remembrance of Things Past, and sometimes referred to in French as La Recherche (IPA: [la ʁə.ʃɛʁʃ]; lit. 'The Search'), is a novel in seven volumes by French author Marcel Proust. This early twentieth-century work is his most prominent, known for both its length and its theme of involuntary memory.\n[…]\nDue to Swann's visit, the Narrator is deprived of his mother's goodnight kiss, but he gets her to spend the night reading to him. This memory is the only one he has of Combray until years later the taste of a madeleine cake dipped in tea inspires a nostalgic incident of involuntary memory. He remembers having a similar snack as a child with his invalid aunt Léonie, and it leads to more memories of Combray.\n[…]\nThe role of memory is central to the novel, introduced with the famous madeleine episode in the first section of the novel, and in the last volume, Time Regained, a flashback similar to that caused by the madeleine is the beginning of the resolution of the story.\n[…]\nThe madeleine episode reads:\n[…]\nThe taste was that of the little piece of madeleine which on Sunday mornings at Combray (because on those mornings I did not go out before mass), when I went to say good morning to her in her bedroom, my aunt Léonie used to give me, dipping it first in her own cup of tea or tisane. The sight of the little madeleine had recalled nothing to my mind before I tasted it. And all from my cup of tea.\n[…]\nThe 1998 television series Serial Experiments Lain concludes with an allusion to the madeleine episode of Lost Time.\n[…]\nIn the third episode of the third season of The Sopranos, \"Fortunate Son\" (2001), Tony Soprano has a breakthrough about the role the smell of meat plays in triggering his panic attacks, which his therapist, Dr. Jennifer Melfi, likens to Proust's madeleines."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Madalena_%28bolo%29",
        "situacao": "ok",
        "texto": "As madalenas, ou madeleines, como são ainda hoje chamadas no Brasil, são bolos de pequenas dimensões, caracterizados pela sua massa leve e fofa, preparada com ovos, açúcar, manteiga e farinha, tradicionalmente cozidos em moldes estriados, a fim de ficaram com o característico formato de concha de vieira. São originários da comuna de Commercy, na região da Lorena (em francês: Lorraine; em alemão: L\n[…]\nA origem desse doce, no entanto, é bastante controversa, mas, para os estudiosos do assunto, uma coisa é certa: as madeleines surgiram para agradar Stanisław Leszczyński (1677-1766), soberano deposto da Polônia.\n[…]\nSegundo outras versões, o bolinho tornou-se conhecido em 1755, depois de oferecido num jantar da corte do rei polaco, Stanislaw Leszczyński. Como os bolinhos que agradaram tanto a Stanislaw ainda não possuíam nome, o genro, Luís XV de França, casado com a filha deste, Maria Leszczyńska, baptizou os bolinhos com o nome da assistente do chefe-pasteleiro do rei polaco, que os produzira: Madeleine Paulmier.\n[…]\nIndependentemente da versão original da história, as madeleines foram imortalizadas na obra de Marcel Proust — Em busca do tempo perdido. O autor utiliza os bolinhos para contrastar a memória involuntária com a voluntária, que designa aquelas recuperadas pela \"inteligência\". O mais famoso exemplo de memória involuntária por Proust é conhecido como o \"episódio da madeleine\":\n[…]\nE, uma vez que as vicissitudes da vida haviam se tornado indiferentes para mim, seus desastres inócuos, sua brevidade ilusória — esta nova sensação de ter tido em mim o efeito que o amor tem de me encher com uma essência preciosa; ou melhor, essa essência não estava em mim que era eu. […] De onde ele veio? O que isso significa? Como eu poderia apreender e apreendê-lo? […] E de repente, a memória se revelou. O sabor foi a do pequeno pedaço de madeleine das manhãs de domingo em Combray.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "As Viagens de Gulliver",
      "descricao": "Romance satírico de Jonathan Swift, publicado em 1726, sobre as viagens do cirurgião Lemuel Gulliver a terras imaginárias."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na última viagem de Gulliver, ele chega a uma terra governada por animais sábios e racionais. Que animais são esses?",
    "resposta": "Cavalos",
    "distratores": [
      "Macacos",
      "Elefantes",
      "Corujas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Houyhnhnm"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Houyhnhnm",
        "situacao": "ok",
        "texto": "Houyhnhnms are a fictional race of intelligent horses described in the last part of Jonathan Swift's satirical 1726 novel Gulliver's Travels. The name is pronounced either  or . Swift apparently intended all words of the Houyhnhnm language to echo the neighing of horses.\n[…]\nGulliver's visit to the Land of the Houyhnhnms is described in Part IV of his Travels, and its location illustrated on the map at the start of Part IV.\n[…]\nIn a modern context the story might be seen as presenting an early example of animal rights concerns, especially in Gulliver's account of how horses are cruelly treated in his society and the reversal of roles. The story is a possible inspiration for Pierre Boulle's novel Planet of the Apes.\n[…]\nOutside Gulliver's Travels, Swift had expressed longstanding concern over the corruption of the English language, and he had proposed language reform. He had also, in Battle of the Books and in general in A Tale of a Tub, expressed a preference for the Ancients (Classical authors) because their art was based directly upon nature, and not upon other art.\n[…]\nOn the other hand, Swift was profoundly mistrustful of attempts at reason that resulted in either hubris (for example, the Projectors satirised in A Tale of a Tub or in Book III of Gulliver's Travels) or immorality (such as the speaker of A Modest Proposal, who offers an seemingly entirely logical and wholly immoral and amoral proposal for cannibalism).\n[…]\nGulliver is returned to his home and family, finds their smell and look intolerable and all his countrymen no better than \"Yahoos\", purchases and converses with two stabled horses, tolerating the stable boy, and assures the reader of his account's utter veracity.\n[…]\nYahoo (Gulliver's Travels)"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pinóquio",
      "descricao": "Boneco de madeira cujo nariz cresce quando mente, criado pelo italiano Carlo Collodi em 1883."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No livro de Collodi, Pinóquio e Gepeto são engolidos por um animal que a Disney trocou por uma baleia. Que animal é esse no original?",
    "resposta": "Um tubarão gigante",
    "distratores": [
      "Uma lula gigante",
      "Um polvo",
      "Uma serpente marinha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Adventures_of_Pinocchio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Adventures_of_Pinocchio",
        "situacao": "ok",
        "texto": "The Adventures of Pinocchio, commonly shortened to Pinocchio, is an 1883 children's fantasy novel by Italian author Carlo Collodi. It is about the mischievous adventures of an animated marionette named Pinocchio. He faces many perils and temptations, meets characters who teach him about life, and learns goodness before he achieves his heart's desire to become a real boy.\n[…]\nCarlo Collodi, who died in 1890, was respected during his lifetime as a talented writer and social commentator. His fame continued to grow when Pinocchio was first translated into English by Mary Alice Murray in 1892 as The Story of a Puppet: or The Adventures of Pinocchio, published in London by T. Fisher Unwin with Mazzanti’s original illustrations; this translation was later included in the widely read Everyman’s Library in 1911.\n[…]\nPinocchio (2008), a British-Italian TV film starring Bob Hoskins as Geppetto, Robbie Kay as Pinocchio, Luciana Littizzetto as the Talking Cricket, Violante Placido as the Blue Fairy, Toni Bertorelli as the Fox, Francesco Pannofino as the Cat, Maurizio Donadoni as Mangiafuoco, and Alessandro Gassman as the original author Carlo Collodi.\n[…]\nPinocchio paradox\n[…]\nThe Adventures of Pinocchio, Carol Della Chiesa, transl.; Attilio Mussino, illustr., Illuminated books, 1926, archived from the original on 2 May 2006{{citation}}:  CS1 maint: others (link).\n[…]\nCollodi, The Adventures of Pinocchio (in Italian), Italy: Liber Liber, archived from the original on 9 May 2006.\n[…]\nCollodi, The Adventures of Pinocchio (in English and Italian), Italy: Libero\n[…]\nItalian Wikisource has original text related to this article: Le avventure di Pinocchio\n[…]\nPinocchio (in Italian), Carlo Collodi National Foundation\n[…]\nCollodi, C (1904). The Adventures of Pinocchio. The Athenaum Press. ISBN 9781590172896 – via the Internet Archive. {{cite book}}: ISBN / Date incompatibility (help)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Le_avventure_di_Pinocchio._Storia_di_un_burattino",
        "situacao": "ok",
        "texto": "Le avventure di Pinocchio. Storia di un burattino é um romance escrito pelo italiano Carlo Collodi em Florença no ano de 1883 e publicado dois anos depois com ilustrações de Enrico Mazzanti. Trata-se de um clássico da literatura infanto-juvenil.\n[…]\nApós nadar por toda a noite, na manhã seguinte avista terra. É uma ilha que, informado por um \"peixe\" (um golfinho, em verdade), tem aldeias. O \"peixe\" também conjectura que Gepeto deve ter naufragado, e sido engolido por um grande tubarão que ronda aquela área. Pinóquio encontra a \"Aldeia das Abelhas Laboriosas\". Pinóquio pede esmolas e recusa trabalho, mas acaba por ajudar uma mulher que carregava vasos de água, recebendo comida em pagamento. Na casa dela, reconhece a fadinha de cabelos azuis.\n[…]\nNa praia nenhum tubarão havia, e Pinóquio luta com os moleques. Um caranguejo adverte-os, sem sucesso. Um dos moleques alveja o boneco com um livro, mas, desviando-se, quem é atingido foi outro menino, Eugênio, que cai feito morto. Ao socorrer o garoto, soldados prendem Pinóquio. Este foge correndo, e os soldados soltam um cachorro para o capturar.\n[…]\nQuando puxa de volta a corda, o coureiro dá de cara com um boneco! Os peixes haviam comido sua \"casca\" animal. Salta na água e foge a nado. Avista, depois de algum tempo, um rochedo sobre o qual vê uma linda cabritinha, que lembra a menina dos cabelos azuis. Mas surge o gigantesco Tubarão, o \"Átila dos peixes\", e o boneco é engolido. Na escuridão da barriga monstruosa, uma voz grossa dialoga com ele: é um Atum, que espera resignado a digestão.\n[…]\nVê então o boneco uma luz ao fundo já que, sem a cauda, mede o Tubarão 1 quilômetro.\n[…]\nPinóquio, filme de animação da Disney, de 1940.\n[…]\nLe avventure di Pinocchio Audiolivro do texto original italiano",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Divina Comédia",
      "descricao": "Poema épico de Dante Alighieri, do início do século quatorze, dividido em Inferno, Purgatório e Paraíso."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Dante escreveu a Divina Comédia numa forma de estrofe com rimas encadeadas, que ficou ligada ao seu nome. Como ela se chama?",
    "resposta": "Terça rima",
    "distratores": [
      "Oitava rima",
      "Soneto",
      "Redondilha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Terza_rima"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Terza_rima",
        "situacao": "ok",
        "texto": "Terza rima  (, also US: , Italian: [ˈtɛrtsa ˈriːma]; lit. 'third rhyme') is a rhyming verse form, in which the poem, or each poem-section, consists of tercets (three-line stanzas) with an interlocking three-line rhyme scheme: The last word of the second line in one tercet provides the rhyme for the first and third lines in the tercet that follows (\n[…]\nThe first use of terza rima is in Dante's Divine Comedy, completed in 1320. In creating the form, Dante may have been influenced by the sirventes, a lyric poetry form used by the Provençal troubadours. Inspired by Dante, other Italian poets, including Petrarch and Boccaccio, began using the form.\n[…]\nTranslators and poets who write in English and use terza rima are often interested in exploring modifications and variations of the rhyme. The first occurrence of Dante’s terza rima rhyme scheme in English is found in parts II and III of Geoffrey Chaucer's short poem \"Complaint to His Lady\". Terza rima has been used by Thomas Wyatt, John Milton, Lord Byron (in The Prophecy of Dante) and Percy Bysshe Shelley (in his \"Ode to the West Wind\" and The Triumph of Life).\n[…]\nA 21st-century example that adhere's closely to Dante's terza rima is David Ives' The Phobia Clinic, which the author describes as a \"philosophical horror novelette in verse using Dante's Inferno as its model\". Edward Lowbury's adaptation of the form to six-syllable lines has been named piccola terza rima.\n[…]\nEnglish versions of the Divine Comedy are often set in iambic pentameter. Examples of English translations in the terza rima form include Robert Pinsky's version of the first book, Inferno, and Laurence Binyon's, Dorothy L. Sayers's and Peter Dale's versions of the entire work.\n[…]\nGosse, Edmund William (1911). \"Terza Rima\" . In Chisholm, Hugh (ed.). Encyclopædia Britannica. Vol. 26 (11th ed.). Cambridge University Press. p. 664."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Terceira_%28poesia%29",
        "situacao": "ok",
        "texto": "Terceira rima ou Terça rima (em italiano:  Terza rima) é uma forma de estrofe verso rimado que consiste em um esquema de rima entrelaçado de três linhas. Foi usado pela primeira vez pelo poeta italiano Dante Alighieri.\n[…]\nA tradução literal de terza rima do italiano é \"terceira rima\", uma estrofe de três linhas usando a rima da cadeia no padrão a-b-a, b-c-b, c-d-c, d-e-d. Não há limite para o número de linhas, mas poemas ou seções de poemas escritos em terza rima terminam com uma única linha ou dístico repetindo a rima da linha média do terceto final. Os dois finais possíveis para o exemplo acima são d-e-d, e ou d-e-d, e-e.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Sherlock Holmes",
      "descricao": "Detetive londrino criado pelo escritor escocês Arthur Conan Doyle em 1887."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Nas horas de folga e de reflexão, que instrumento musical o detetive Sherlock Holmes costuma tocar?",
    "resposta": "Violino",
    "distratores": [
      "Piano",
      "Violoncelo",
      "Flauta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sherlock_Holmes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sherlock_Holmes",
        "situacao": "ok",
        "texto": "Sherlock Holmes () is a fictional detective created by British author Arthur Conan Doyle. Referring to himself as a \"consulting detective\" in his stories, Holmes is known for his proficiency with observation, deduction, forensic science and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.\n[…]\nAt times, Holmes relaxes with music, either playing the violin or enjoying the works of composers such as Wagner and Pablo de Sarasate.\n[…]\nPlays the violin well.\n[…]\nIn 2022, a second attraction also named The Sherlock Holmes Experience opened at Knockhatch Adventure Park in Hailsham, East Sussex.\n[…]\nThe Adventures of Sherlock Holmes (stories published 1891–1892 in The Strand)\n[…]\nThe Memoirs of Sherlock Holmes (stories published 1892–1893 in The Strand)\n[…]\nThe Return of Sherlock Holmes (stories published 1903–1904 in The Strand)\n[…]\nHis Last Bow: Some Later Reminiscences of Sherlock Holmes (stories published 1908–1917)\n[…]\nThe Case-Book of Sherlock Holmes (stories published 1921–1927)\n[…]\nList of Holmesian studies\n[…]\nSherlock Holmes fandom\n[…]\nKlinger, Leslie (ed.). The New Annotated Sherlock Holmes, Volume I (New York: W. W. Norton, 2005). ISBN 0-393-05916-2 (\"Klinger I\")\n[…]\nKlinger, Leslie (ed.). The New Annotated Sherlock Holmes, Volume II (New York: W. W. Norton, 2005). ISBN 0-393-05916-2 (\"Klinger II\")\n[…]\nKlinger, Leslie (ed.). The New Annotated Sherlock Holmes, Volume III (New York: W. W. Norton, 2006). ISBN 978-0393058000 (\"Klinger III\")\n[…]\nA collection of Sherlock Holmes eBooks at Standard Ebooks\n[…]\nThe Sherlock Holmes Museum 221b Baker Street London NW1 6XE England.\n[…]\n\"Sherlock Holmes\". Internet Archive. 8 July 1930.\n[…]\nSherlock Holmes plaques on openplaques.org\n[…]\nDiscovering Sherlock Holmes at Stanford University\n[…]\nChess and Sherlock Holmes essay by Edward Winter\n[…]\n\"The Burden of Holmes\" – 23.12.09 article in The Wall Street Journal"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sherlock_Holmes",
        "situacao": "ok",
        "texto": "Sherlock Holmes é um personagem de ficção da literatura britânica criado pelo médico e escritor Sir Arthur Conan Doyle. Holmes é um investigador do final do século XIX e início do século XX. Sua primeira aparição foi em 1887 na revista Beeton's Christmas Annual na história Um Estudo em Vermelho. Em fevereiro de 1891, o romance O Sinal dos Quatro foi publicado em outra revista, a Lippincott’s Magaz\n[…]\nHolmes relaxa com música em \"A Liga dos Ruivos\", tirando a noite de folga de um caso para ouvir o violinista de Pablo de Sarasate. Sua diversão de música vocal, particularmente a de Wagner, é evidente em \"O Caso do Círculo Vermelho\".\n[…]\nMúsica: Toca bem o violino;\n[…]\nOutro personagem inspirado em Sherlock é Gregory House, da série de TV estado-unidense House M.D., chefe da ala de diagnósticos, que utiliza lógica dedutiva para desvendar as mentiras de seus pacientes; House costuma sempre dizer \"Todo mundo mente\". As similitudes entre Holmes e House são muitas: o homem que atirou em House se chama Moriarty, maior inimigo de Holmes; House também é viciado, também tem gosto pela música; e mora no número 221B da Baker Street.\n[…]\nNos quadrinhos, a Disney criou o personagem Sir Lock Holmes, visivelmente inspirado em Sherlock pois, além do nome parecido, possui o mesmo porte físico, está sempre com o cachimbo e gosta de tocar violino. Diferente de Sherlock, porém, é totalmente desafinado no violino e erra todas as deduções (estando mais para Inspetor Clouseau).\n[…]\nEm 1901, Doyle escreveu o que viria a ser um dos mais famosos dos livros do detetive, \"O Cão dos Baskervilles\", um ano antes de sua ressurreição no conto \"A Casa Vazia\", o primeiro do livro \"A Volta de Sherlock Holmes\".\n[…]\nSherlock Holmes (em inglês) no IMDb\n[…]\nMuseu Sherlock Holmes (em inglês)\n[…]\nPágina da BBC com histórias de Sherlock Holmes escritas por outros autores (em inglês)\n[…]\nDownload dos filmes de Sherlock Holmes em domínio público",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Moby Dick",
      "descricao": "Romance de Herman Melville, de 1851, sobre a caça do capitão Ahab a uma baleia branca."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O capitão Ahab persegue a baleia branca por vingança. Que parte do corpo ele perdeu num encontro anterior com ela?",
    "resposta": "Uma perna",
    "distratores": [
      "Um braço",
      "Um olho",
      "Uma mão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Captain_Ahab"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Captain_Ahab",
        "situacao": "ok",
        "texto": "Captain Ahab is a fictional character and one of the protagonists in Herman Melville's Moby-Dick (1851). He is the monomaniacal captain of the whaling ship Pequod. On a previous voyage, the white whale Moby Dick bit off Ahab's leg and he now wears a prosthetic leg made out of ivory. The whaling voyage of the Pequod ends up as a hunt for revenge on the whale, as Ahab forces the crew members to supp\n[…]\nThere have been two French film versions of Moby-Dick: Capitaine Achab (2004), starring Frédéric Bonpart and Capitaine Achabin (2007) starring Denis Lavant.\n[…]\nIn Star Trek II: The Wrath of Khan (1982), Khan's pursuit of Captain Kirk focuses on the theme of vengeance, and The Wrath of Khan borrows heavily from Moby-Dick. To make the parallels clear, there is a copy of Moby-Dick in Khan's dwelling. Khan liberally paraphrases Ahab, with \"I'll chase him round the moons of Nibia and round the Antares maelstrom and round perdition's flames before I give him up!\".\n[…]\nIn the light novel series Fate/strange Fake and its later manga and anime adaptations, Ahab appears as \"The Captain\" as one of the manifestations of the Watcher, an entity that floats high above the ground and relays information to their master, and whose real form in turn resembles an ethereal Moby Dick.\n[…]\nAn acclaimed version of Moby-Dick and Ahab was made by the trio of Argentine artists consisting of Enrique Breccia, Leopoldo Durañona and Guillermo Saccomanno, which was released in a completed and collected graphic novel format in 1979.\n[…]\nThe second song on Leviathan, a Moby-Dick-based concept album by the American rock band Mastodon, is called \"I am Ahab\".\n[…]\nStone, Edward. (1975). \"Ahab Gets Girl, or Herman Melville Goes to the Movies.\" Reprinted: The Critical Response to Herman Melville's Moby-Dick. Ed. Kevin J. Hayes. Westport, Connecticut and London: Greenwood Press, 1994."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Alice no País das Maravilhas",
      "descricao": "Livro de Lewis Carroll, de 1865, sobre uma menina que cai numa toca de coelho e chega a um mundo fantástico."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Alice no País das Maravilhas, o Gato de Cheshire desaparece aos poucos. Que parte dele fica por último no ar?",
    "resposta": "O sorriso",
    "distratores": [
      "O rabo",
      "Os olhos",
      "As orelhas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cheshire_Cat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cheshire_Cat",
        "situacao": "ok",
        "texto": "The Cheshire Cat ( CHESH-ər, -⁠eer) is a fictional cat popularized by Lewis Carroll in Alice's Adventures in Wonderland. While now most often used in Alice-related contexts, the association of a \"Cheshire cat\" with grinning predates the 1865 book. He is known for his distinctive mischievous grin.\n[…]\nThe Cheshire Cat is now largely identified with the character of the same name in Lewis Carroll's 1865 novel Alice's Adventures in Wonderland. Alice first encounters the Cheshire Cat at the Duchess's house in her kitchen, and later on the branches of a tree, where he appears and disappears at will, and engages Alice in amusing but sometimes perplexing conversation.\n[…]\nThe Cheshire Cat appears in the video games American McGee's Alice (2000); and the sequel Alice: Madness Returns (2011), voiced by Roger L. Jackson. He is portrayed as an enigmatic and snarky, yet wise guide for Alice in the corrupted Wonderland.\n[…]\nThe Cheshire Cat appears in Alice in the Country of Hearts, a dating sim game and its related media, as a young man named \"Boris Airay\", with cat-like attributes such as a tail and cat ears, and is one of the many love interests for Alice in Wonderland.\n[…]\nThe Cheshire Cat is one of the Alice's Adventures in Wonderland characters reinterpreted in the 2018 indie game Black Souls II.\n[…]\n[T]aken from Lewis Carroll, we liken this theory to the strategy used by the Cheshire Cat in Alice's Adventures in Wonderland of making its body invisible to make the sentence \"off with his head\" pronounced by the Queen of Hearts impossible to execute ... C.C. dynamics, which rely to some extent on separation of the sexual processes of meiosis and fusion in time and / or space, release the host from short-term pathogen pressure, thus widening the scope for the host to evolve in other directions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gato_de_Cheshire",
        "situacao": "ok",
        "texto": "O Gato de Cheshire, Gato Risonho, Gato Listrado ou Gato Que Ri é um gato fictício famoso  através do livro Alice no País das Maravilhas de Lewis Carroll.\n[…]\nA personagem é principalmente caracterizada pelo seu sorriso pronunciado. Embora mais celebrado relacionando-se a Alice no País das Maravilhas, o Gato de Cheshire antecede o romance de 1865 e transcende o contexto de literatura. Evidencia-se também na cultura popular e na mídia -  da propaganda política à televisão - , sendo alvo de diversos estudos.\n[…]\nDepois de sair da casa, encontra-se num bosque, onde o Gato de Cheshire aparece e Alice pergunta-lhe se há algum lugar em que não haja gente louca e como ir até lá. O Gato argumenta que todos são loucos, inclusive ele e Alice, acabando por lhe indicar a hipótese de visitar o Chapeleiro Maluco ou a Lebre de Março antes de desaparecer lentamente, deixando apenas o seu icônico sorriso pendente.\n[…]\nA imagem de perfil da Cat Fanciers` Association diz: \"When gracelessness is observed, the British Shorthair is duly embarrassed, quickly recovering with a 'Cheshire cat smile'\" (o que pode ser traduzido como: \"Quando a falta de graciosidade é observada, o gato de pelo curto inglês fica devidamente envergonhado, recuperando-se rapidamente com um \"sorriso de gato de Cheshire\").\n[…]\nO Gato de Cheshire aparece na versão de 2010 de Alice no País das Maravilhas, dirigida por Tim Burton. O ator britânico Stephen Fry dubla o personagem. No filme, Cheshire (ou \"Chess\",como é frequentemente tratado) liga a ferida de Capturandam e guia Alice até o Chapeleiro Maluco e para a Lebre de Março.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "O Grande Gatsby",
      "descricao": "Romance de F. Scott Fitzgerald, de 1925, sobre o milionário misterioso Jay Gatsby em Long Island."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em O Grande Gatsby, Jay Gatsby contempla à noite uma luz no fim do cais da casa de Daisy. De que cor é essa luz?",
    "resposta": "Verde",
    "distratores": [
      "Vermelha",
      "Azul",
      "Amarela"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Great_Gatsby"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Great_Gatsby",
        "situacao": "ok",
        "texto": "The Great Gatsby ( ) is a 1925 tragedy novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with Jay Gatsby, a mysterious millionaire obsessed with reuniting with his former lover, Daisy Buchanan.\n[…]\nBesides exploring the difficulties of achieving the American dream, The Great Gatsby explores societal gender expectations during the Jazz Age. The character of Daisy Buchanan has been identified specifically as personifying the emerging cultural archetype of the flapper. Flappers were typically young, modern women who bobbed their hair and wore short skirts. They also drank alcohol and had premarital sex.\n[…]\nFollowing the 1926 film was 1949's The Great Gatsby, directed by Elliott Nugent and starring Alan Ladd, Betty Field and Macdonald Carey. Twenty-five years later in 1974, The Great Gatsby appeared onscreen again. It was directed by Jack Clayton and starred Robert Redford as Gatsby, Mia Farrow as Daisy, and Sam Waterston as Nick Carraway. Most recently, The Great Gatsby was directed by Baz Luhrmann in 2013 and starred Leonardo DiCaprio as Gatsby, Carey Mulligan as Daisy, and Tobey Maguire as Nick.\n[…]\nMost recently, the novel was adapted as an A&E movie in 2000. The Great Gatsby was directed by Robert Markowitz and starred Toby Stephens as Gatsby, Mira Sorvino as Daisy, and Paul Rudd as Nick.\n[…]\nThe Great Gatsby public domain audiobook at LibriVox\n[…]\nThe Great Gatsby at Faded Page (Canada)\n[…]\n\"An Index to The Great Gatsby\"\n[…]\nThe Great Gatsby – \"A Book by Its Covers\" at T: The New York Times Style Magazine.\n[…]\nGatsby at 100 Archived September 19, 2025, at the Wayback Machine Minneapolis Institute of Art 2025 exhibition examining \"The Great Gatsby shaped—and was shaped by—the visual art of his time.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Grande_Gatsby_%28romance%29",
        "situacao": "ok",
        "texto": "O Grande Gatsby (The Great Gatsby) é um romance escrito pelo autor americano F. Scott Fitzgerald. Publicado pela primeira vez em 10 de abril de 1925, a história passa-se em Nova Iorque e na cidade de Long Island durante o verão de 1922, e é uma crítica ao \"Sonho Americano\".\n[…]\nAo decorrer do livro nos é apresentado o farol verde que ficava do outro lado do cais, ao qual, Gatsby ficava admirando aquela luz esverdeada, simbolizando a esperança de reencontrar Daisy e reviverem juntos os anos de glória que tiveram. Daisy e Gatsby começam a ter um caso após um encontro arranjado através de Nick, a pedido de Gatsby.\n[…]\nDaisy diz o que Gatsby lhe pediu para dizer, mas hesitantemente. Tom, observando inconformado esta ligação entre Daisy e Gatsby, ordena que eles se dirijam juntos de volta para a casa de Tom em Long Island, ridicularizando Gatsby, dizendo que ele não sabe o que pode acontecer entre ele e Daisy. Tom vai para casa com Nick e Jordan.\n[…]\nEle encontra-se na casa de Tom com uma arma e Tom (enquanto arruma a mala para uma viagem com Daisy) dá o nome de Gatsby para Wilson. Enquanto isso, Gatsby está nadando em sua piscina oprimido pela depressão (da perda de sua amada), pensando que Daisy não o ama mais. Enquanto ele ainda espera uma ligação dela, Wilson vem e atira em Gatsby. E depois comete suicídio no gramado, não muito longe.\n[…]\nApenas três pessoas foram ao funeral de Gatsby — Nick, Mr. Gatz, e \"Owl Eyes\" (olhos de coruja), um homem que certa vez Nick encontrou, em uma festa do Gatsby, admirando a grande biblioteca da mansão. Depois da permanentemente difícil conexão entre ele e Jordan, Tom, e Daisy, Nick deixou Nova Iorque e foi embora para o Centro-Oeste.\n[…]\nO Grande Gatsby (2013), com  Leonardo DiCaprio e Carey Mulligan",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "A Metamorfose",
      "descricao": "Novela de Franz Kafka, publicada em 1915, em que Gregor Samsa acorda transformado num inseto monstruoso."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em A Metamorfose, de Kafka, Gregor Samsa acorda certa manhã transformado num inseto. Qual era a profissão dele?",
    "resposta": "Caixeiro-viajante",
    "distratores": [
      "Bancário",
      "Professor",
      "Alfaiate"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Metamorphosis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Metamorphosis",
        "situacao": "ok",
        "texto": "The Metamorphosis (German: Die Verwandlung, pronounced [dɪ fɛɐ̯ˈvantlʊŋ]), also translated as The Transformation, is a novella by Franz Kafka published in 1915. One of Kafka's best-known works, The Metamorphosis tells the story of salesman Gregor Samsa, who wakes to find himself inexplicably transformed into a huge insect (German: ungeheueres Ungeziefer, lit. 'monstrous vermin') and struggles to a\n[…]\nGregor Samsa wakes up one morning to find himself transformed into a \"monstrous vermin\". He initially considers the transformation to be temporary and slowly ponders the consequences of his metamorphosis. Stuck on his back and unable to get up and leave the bed, Gregor reflects on his job as a traveling salesman and cloth merchant, which he characterizes as being \"plagued with ... the always changing, never enduring human exchanges that don't ever become intimate\".\n[…]\nMr. Samsa is Gregor's father. After the metamorphosis, he is forced to return to work in order to support the family financially. His attitude towards his son is harsh. He regards the transformed Gregor with disgust and possibly even fear and attacks Gregor on several occasions. Even when Gregor was human, Mr. Samsa regarded him mostly as a source of income for the family. Gregor's relationship with his father is modelled after Kafka's own relationship with his father.\n[…]\nThe Metamorphosis has been translated into English more than twenty times. In Kafka's original, the opening sentence is \"Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt\". In their 1933 translation of the story – the first into English – Willa Muir and Edwin Muir rendered it as \"As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect\".\n[…]\nLecture on The Metamorphosis by Vladimir Nabokov"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Metamorfose",
        "situacao": "ok",
        "texto": "A Metamorfose (em alemão: Die Verwandlung) é uma novela de literatura fantástica, ficção e temática existencialista escrita por Franz Kafka entre 1912 e publicada pela primeira vez em 1915. Considerada uma das obras mais importantes da literatura do século XX, a narrativa tornou-se um marco do chamado estilo “kafkiano”, caracterizado pela presença do absurdo, da alienação, da opressão psicológica \n[…]\nA obra narra a história de Gregor Samsa, um caixeiro-viajante que sustenta financeiramente a família e vive preso a uma rotina exaustiva de trabalho e responsabilidades. Certo dia, Gregor acorda inexplicavelmente transformado em um inseto monstruoso, fato que desencadeia uma profunda mudança em sua relação com a família e com a sociedade. Enquanto perde gradualmente sua condição humana aos olhos das pessoas ao redor, Gregor enfrenta isolamento, rejeição e crescente desumanização.\n[…]\nNesta obra, Kafka descreve um caixeiro viajante de nome Gregor Samsa, que abandona as suas vontades e desejos para sustentar a família e pagar a dívida dos pais. Numa certa manhã, Gregor acorda metamorfoseado num inseto monstruoso. Kafka descreve este inseto como algo parecido com uma barata gigante. Nos primeiros momentos, o livro descreve as dificuldades iniciais de Gregor na nova forma.\n[…]\nGregor Samsa o protagonista principal da obra. É um caixeiro-viajante responsável por sustentar toda a família. Acorda transformado em um inseto gigante (semelhante a uma barata colossal). Ao longo da história, Gregor passa por um processo de alienação e perda gradual de sua identidade humana.\n[…]\nSr. Samsa (pai de Gregor) o antagonista principal. Antes da metamorfose, vivia ocioso e dependente do filho. Após a transformação de Gregor, torna-se agressivo, autoritário e violento, especialmente na cena em que ataca o filho com maçãs.\n[…]\nA Metamorfose (em PDF, ePub e Mobi) no site Biblioteca Mundial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "José Saramago",
      "descricao": "Escritor português (1922–2010), autor de Ensaio sobre a Cegueira e Memorial do Convento."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Nos romances de José Saramago, as falas dos personagens não levam travessão nem aspas. Que sinal de pontuação as separa?",
    "resposta": "Vírgula",
    "distratores": [
      "Ponto e vírgula",
      "Dois-pontos",
      "Reticências"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jos%C3%A9_Saramago",
      "https://pt.wikipedia.org/wiki/Jos%C3%A9_Saramago"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jos%C3%A9_Saramago",
        "situacao": "ok",
        "texto": "José de Sousa Saramago (European Portuguese: [ʒuˈzɛ ðɨ ˈso(w)zɐ sɐɾɐˈmaɣu]; 16 November 1922 – 18 June 2010) was a Portuguese writer. He was the recipient of the 1998 Nobel Prize in Literature for his \"parables sustained by imagination, compassion and irony [with which he] continually enables us once again to apprehend an elusory reality.\" His works, some of which can be seen as allegories, common\n[…]\nJosé Saramago Foundation\n[…]\nJosé Saramago Prize\n[…]\nBaptista Bastos, José Saramago: Aproximação a um retrato, Dom Quixote, 1996\n[…]\nMaria da Conceição Madruga, A paixão segundo José Saramago: a paixão do verbo e o verbo da paixão, Campos das Letras, Porto, 1998\n[…]\nHorácio Costa, José Saramago: O Período Formativo, Ed. Caminho, 1998\n[…]\nCarlos Reis, Diálogos com José Saramago, Ed. Caminho, Lisboa, 1998\n[…]\nM. Maria Seixo, O essential sobre José Saramago, Imprensa Nacional, 1987\n[…]\n\"Saramago, José (1922–2010)\". Encyclopedia of World Biography. Ed. Tracie Ratiner. Vol. 25. 2nd ed. Detroit: Thomson Gale, 2005. Discovering Collection. Thomson Gale. University of Guelph. 25 September 2007.\n[…]\nSereno, M.H.S., 2005. Proverbial style in novelistic José Saramago. Estudos em Homenagem ao Professor Doutor Mário Vilela, vol. 2 p.657-665. Universidade do Porto. (accessible as part of larger volume)\n[…]\nDonzelina Barroso (Winter 1998). \"Jose Saramago, The Art of Fiction No. 155\". The Paris Review. Winter 1998 (149).\n[…]\nJosé Saramago Foundation (in Portuguese)\n[…]\nJosé Saramago at IMDb\n[…]\nJosé Saramago, the Unexpected Fantasist, by Fernanda Eberstadt, published August 26, 2007, in The New York Times Magazine\n[…]\nPetri Liukkonen. \"José Saramago\". Books and Writers.\n[…]\nJosé Saramago on Nobelprize.org\n[…]\n\"The Year of the Death of Jose Saramago\" in memoriam from n+1\n[…]\nJose Saramago's blog\n[…]\n\"Raised from the Ground by José Saramago – review\", Ursula K. Le Guin, The Guardian, 26 December 2012\n[…]\nJosé Saramago Foundation official website\n[…]\nA Casa José Saramago in Lanzarote"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jos%C3%A9_Saramago",
        "situacao": "ok",
        "texto": "José de Sousa Saramago (Azinhaga, 16 de novembro de 1922 – Tías, 18 de junho de 2010) foi um escritor português premiado com o Nobel de Literatura de 1998. Também ganhou, em 1995, o Prémio Camões, o mais importante prémio literário da língua portuguesa. Saramago foi considerado o responsável pelo efetivo reconhecimento internacional da prosa em língua portuguesa.\n[…]\nNos anos seguintes, entre 1995 e 2005, Saramago publicou mais seis romances, dando início a uma nova fase onde os enredos não se desenrolam mais em locais ou épocas determinadas, e personagens dos anais da história se ausentam: Ensaio Sobre a Cegueira (1995); Todos os Nomes (1997); A Caverna (2001); O Homem Duplicado (2002); Ensaio sobre a Lucidez (2004); e As Intermitências da Morte (2005).\n[…]\nAssim, utiliza frases e períodos compridos, usando a pontuação de uma maneira não-convencional; os diálogos das personagens são inseridos nos próprios parágrafos que os antecedem, de forma que não existem travessões nos seus livros. Este tipo de marcação das falas propicia uma forte sensação de fluxo de consciência, a ponto do leitor chegar a confundir se um certo diálogo foi real ou apenas um pensamento. Muitas das suas frases (i.e.\n[…]\norações) ocupam mais de uma página, usando vírgulas onde a maioria dos escritores usaria pontos finais. Da mesma forma, muitos dos seus parágrafos ocupariam capítulos inteiros de outros autores.\n[…]\nEstas características tornam o estilo de Saramago único na literatura contemporânea, sendo considerado por muitos críticos um mestre no tratamento da língua portuguesa. Em 2003, o crítico norte-americano Harold Bloom, no seu livro Genius: A Mosaic of One Hundred Exemplary Creative Minds (\"Génio: Um Mosaico de Cem Exemplares Mentes Criativas\", tradução livre), considerou José Saramago \"o mais talentoso romancista vivo nos dias de hoje\", referindo-se a ele como \"o Mestre\"."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Fiódor Dostoiévski",
      "descricao": "Escritor russo (1821–1881), autor de Crime e Castigo e Os Irmãos Karamázov."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Que doença neurológica Dostoiévski tinha e deu a personagens como o príncipe Míchkin, de O Idiota?",
    "resposta": "Epilepsia",
    "distratores": [
      "Enxaqueca",
      "Mal de Parkinson",
      "Esclerose múltipla"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fyodor_Dostoevsky",
      "https://en.wikipedia.org/wiki/The_Idiot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fyodor_Dostoevsky",
        "situacao": "ok",
        "texto": "Fyodor Mikhailovich Dostoevsky (11 November [O.S. 30 October] 1821 – 9 February [O.S. 28 January] 1881) was a Russian philosopher, novelist, short-story writer, essayist, and journalist. He is regarded as one of the greatest novelists in both Russian and world literature, and many of his works are considered highly influential masterpieces.\n[…]\nSigns of Dostoevsky's epilepsy may have first appeared at 17 years old on learning of the death of his father on 16 June 1839, although the reports of a seizure originated from accounts written by his daughter (later expanded by Sigmund Freud) which are now considered to be unreliable. His father's official cause of death was an apoplectic stroke, but a neighbour, Pavel Khotiaintsev, accused the father's serfs of murder.\n[…]\nDostoevsky's health declined further, and in March 1877, he had four epileptic seizures. Rather than returning to Ems, he visited Maly Prikol, a manor near Kursk. While returning to St Petersburg to finalise his Diary, he visited Darovoye, where he had spent much of his childhood. In December, he attended Nekrasov's funeral and gave a speech. He was appointed an honorary member of the Russian Academy of Sciences, from which he received an honorary certificate in February 1879.\n[…]\nHe declined an invitation to an international congress on copyright in Paris after his son Alyosha had a severe epileptic seizure and died on 16 May.\n[…]\nJoseph Frank describes The Idiot as \"the most personal of all Dostoevsky's major works, the book in which he embodies his most intimate, cherished, and sacred convictions.\" It includes descriptions of some of his most intense personal ordeals, such as epilepsy and mock execution, and explores moral, spiritual and philosophical themes consequent upon them.\n[…]\nNewspaper clippings about Fyodor Dostoevsky in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Idiot",
        "situacao": "ok",
        "texto": "The Idiot (pre-reform Russian: Идіотъ; post-reform Russian: Идиот, romanized: Idiót) is a novel by the 19th-century Russian author Fyodor Dostoevsky. It was first published serially in the journal The Russian Messenger in 1868–1869.\n[…]\nJoseph Frank describes The Idiot as \"the most personal of all Dostoevsky's major works, the book in which he embodies his most intimate, cherished, and sacred convictions.\" It includes descriptions of some of his most intense personal ordeals, such as epilepsy and mock execution, and explores moral, spiritual, and philosophical themes consequent upon them.\n[…]\nDuring this time Dostoevsky periodically fell into the grip of his gambling addiction and lost what little money they had on the roulette tables. He was subject to regular and severe epileptic seizures, including one while Anna was going into labor with their daughter Sofia, delaying their ability to go for a midwife. The baby died aged only three months, and Dostoevsky blamed himself for the loss.\n[…]\nPrince Myshkin, the novel's central character, is a young man who has returned to Russia after a long period abroad where he was receiving treatment for epilepsy. The lingering effects of the illness, combined with his innocence and lack of social experience, sometimes create the superficial and completely false impression of mental or psychological deficiency.\n[…]\nFor much of his adult life Dostoevsky suffered from an unusual and at times extremely debilitating form of temporal lobe epilepsy. In 1867 (the same year he began work on The Idiot) he wrote to his doctor: \"this epilepsy will end up by carrying me off... My memory has grown completely dim. I don't recognize people anymore... I'm afraid of going mad or falling into idiocy\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fi%C3%B3dor_Dostoi%C3%A9vski",
        "situacao": "ok",
        "texto": "Fiódor Mikhailovitch Dostoiévski (em russo: Фёдор Миха́йлович Достое́вский; Moscou, 11 de novembro de 1821 – São Petersburgo, 9 de fevereiro de 1881) foi um escritor, filósofo e jornalista russo. É considerado por muitos um dos maiores romancistas e pensadores da história, bem como um dos maiores psicólogos que já existiu, ao considerar a designação e etimologia mais ampla do termo, como investiga\n[…]\nFoi na prisão da Sibéria que Dostoiévski sofreu seu primeiro ataque de epilepsia, doença que o acompanharia pelo resto da vida e que também atinge vários de seus personagens, como o Príncipe Míchkin de O Idiota, Kiríllov de Os Demônios e Smerdiákov de Os Irmãos Karamazov. As cartas que Dostoiévski enviou ao irmão deixam claro que os ataques epilépticos iniciaram na Sibéria, em que pese ele já ter apresentado problemas nervosos antes disso.\n[…]\nDostoiévski tinha por tema, diferentemente dos outros escritores que descreviam o círculo da família moldados na tradição e nas \"belas formas\", o caos familiar, a humilhação, o sadismo, o masoquismo, a ganância, a doença, etc.\n[…]\nPickwick e Pangloss, entretanto, Dostoiévski não utiliza a comédia para conseguir a identificação do leitor com seu personagem, ele utiliza a idiotia ou inocência: o Príncipe Michkin é um inocente idiota.\n[…]\nO Papa Francisco ressaltou que as pessoas devem \"ler e reler Dostoiévski\", e a encíclica papal Lumen fidei, de 2013, incorpora trechos de O Idiota escolhidos pelo Papa Bento XVI, a saber: \"Na sua obra O Idiota, Fiódor Mikhailovich Dostoiévski faz o protagonista - o príncipe Michkin - dizer, à vista do quadro de Cristo morto no sepulcro, pintado por Hans Holbein, o Jovem: 'Aquele quadro poderia mesmo fazer perder a fé a alguém.'.\" O quadro de que trata o Papa Francisco é aquele intitulado Cristo morto no sepulcro de Hans Holbein, trata-se de imagem de Cristo morto, morto como um mortal, apodrecendo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Ernest Hemingway",
      "descricao": "Romancista americano, Nobel de Literatura em 1954, autor de O Velho e o Mar."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na Primeira Guerra Mundial, antes da fama, Hemingway foi ferido na Itália. Em que função ele servia lá?",
    "resposta": "Motorista de ambulância",
    "distratores": [
      "Piloto de caça",
      "Correspondente de guerra",
      "Soldado de infantaria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ernest_Hemingway"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ernest_Hemingway",
        "situacao": "ok",
        "texto": "Ernest Miller Hemingway ( HEM-ing-way; July 21, 1899 – July 2, 1961) was an American novelist, short-story writer, and journalist. Known for an economical, understated style that influenced later 20th-century writers, he has been romanticized for his adventurous lifestyle and outspoken, blunt public image. Some of his seven novels, six short-story collections and two non-fiction works have become \n[…]\nHemingway was raised in Oak Park, Illinois. After high school, he spent six months as a reporter for The Kansas City Star before enlisting in the Red Cross. He served as an ambulance driver on the Italian Front in World War I and was seriously wounded by shrapnel in 1918. In 1921, Hemingway moved to Paris, where he worked as a foreign correspondent for the Toronto Star and was influenced by the modernist writers and artists of the \"Lost Generation\" expatriate community.\n[…]\nHemingway wanted to go to war and tried to enlist in the U.S. Army but was not accepted because he had poor eyesight. Instead he volunteered to a Red Cross recruitment effort in December 1917 and signed on to be an ambulance driver with the American Red Cross Motor Corps in Italy. In May 1918, he sailed from New York, and arrived in Paris as the city was under bombardment from German artillery. That June he arrived at the Italian Front as a volunteer with the A.R.C..\n[…]\nOne of Hemingway's closest friendships from his Red Cross service was with William \"Bill\" Dodge Horne Jr., a fellow ambulance driver in Italy. Horne was later a groomsman at Hemingway's first wedding and an honorary pallbearer at his funeral. Horne preserved a personal archive of their correspondence, photographs, and recollections—materials now housed at Princeton University Library.\n[…]\nErnest Hemingway's journalism at The Archive of American Journalism\n[…]\nErnest Hemingway on Nobelprize.org\n[…]\nFBI Records: The Vault, Subject: Ernest Hemingway"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ernest_Hemingway",
        "situacao": "ok",
        "texto": "Ernest Miller Hemingway (21 de julho de 1899 – 2 de julho de 1961) foi um romancista, contista e jornalista norte-americano. Conhecido por um estilo econômico e discreto que influenciou escritores posteriores do século XX, foi romantizado por seu estilo de vida aventureiro e sua imagem pública franca e direta.\n[…]\nHemingway foi criado em Oak Park, Illinois. Depois do ensino médio, passou seis meses como repórter do The Kansas City Star antes de se alistar na Cruz Vermelha. Serviu como motorista de ambulância na Frente Italiana na Primeira Guerra Mundial e foi gravemente ferido por estilhaços em 1918.\n[…]\nHemingway queria ir para a guerra e tentou se alistar no Exército dos EUA, mas não foi aceito porque tinha problemas de visão. Em vez disso, voluntariou-se para um esforço de recrutamento da Cruz Vermelha em dezembro de 1917 e se inscreveu para ser motorista de ambulância no Corpo de Motociclistas da Cruz Vermelha Americana na Itália. Em maio de 1918, partiu de navio de Nova York e chegou a Paris enquanto a cidade estava sob bombardeio da artilharia alemã.\n[…]\nUma das amizades mais próximas de Hemingway de seu serviço na Cruz Vermelha foi com William \"Bill\" Dodge Horne Jr., um colega motorista de ambulância na Itália. Horne foi posteriormente padrinho de casamento no primeiro casamento de Hemingway e um dos carregadores do caixão honorários em seu funeral. Horne preservou um arquivo pessoal de sua correspondência, fotografias e recordações – materiais agora guardados na Biblioteca da Universidade de Princeton.\n[…]\nYoung, Philip. (1964). Ernest Hemingway. St. Paul, MN: University of Minnesota. ISBN 978-0-8166-0191-2\n[…]\n«Hemingway Society» (em inglês)\n[…]\nObras de Ernest Hemingway, em inglês\n[…]\nObras de Ernest Hemingway (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Ernest Hemingway no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Emily Dickinson",
      "descricao": "Poeta americana do século dezenove, de Amherst, Massachusetts."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Nos últimos anos de vida, quase sem sair de casa, a poeta Emily Dickinson ficou conhecida por se vestir de que cor?",
    "resposta": "Branco",
    "distratores": [
      "Preto",
      "Cinza",
      "Azul"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Emily_Dickinson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emily_Dickinson",
        "situacao": "ok",
        "texto": "Emily Elizabeth Dickinson (December 10, 1830 – May 15, 1886) was an American poet. Largely unpublished and unknown during her lifetime, her work is now widely regarded as canonical. The Poetry Foundation describes her as having \"created in her writing a distinctively elliptical language for expressing what was possible but not yet realized.\"\n[…]\nList of Emily Dickinson poems\n[…]\nMiller, Cristanne; Mitchell, Domhnall, eds. (2024). The Letters of Emily Dickinson. Cambridge, Mass.: The Belknap Press of Harvard University Press. ISBN 978-0-674-98297-0. OCLC 1393248736.\n[…]\nSánchez-Eppler, Karen; Miller, Cristanne, eds. (2022). The Oxford Handbook of Emily Dickinson. Oxford University Press. doi:10.1093/oxfordhb/9780198833932.001.0001. ISBN 978-0-19-187227-3.\n[…]\nEmily Dickinson Papers, 1844–1891 (three microfilm reels) are housed at the Sterling Memorial Library at Yale University. OCLC 145079275.\n[…]\nTammaro, Thomas; Coghill, Sheila, eds. (2001). Visiting Emily: Poems Inspired by the Life and Works of Emily Dickinson. Illustrator: Barry Moser. Iowa City: University of Iowa Press. ISBN 978-0-87745-734-3. OCLC 44467681. 2001 Minnesota Book Awards winner.\n[…]\nWorks by Emily Dickinson at Project Gutenberg\n[…]\nWorks by or about Emily Dickinson at the Internet Archive\n[…]\nWorks by Emily Dickinson at LibriVox (public domain audiobooks)\n[…]\nDickinson Electronic Archives\n[…]\nEmily Dickinson Archive\n[…]\nEmily Dickinson poems and texts at the Academy of American Poets\n[…]\nProfile and poems of Emily Dickinson, including audio files, at the Poetry Foundation.\n[…]\nEmily Dickinson at Modern American Poetry Archived June 25, 2010, at the Wayback Machine\n[…]\nEmily Dickinson International Society\n[…]\nEmily Dickinson Museum The Homestead and the Evergreens, Amherst, Massachusetts\n[…]\nEmily Dickinson Collection at the Amherst College Archives and Special Collections"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emily_Dickinson",
        "situacao": "ok",
        "texto": "Emily Elizabeth Dickinson (Amherst, 10 de dezembro de 1830 - Amherst, 15 de maio de 1886) foi uma poeta norte-americana. Pouco conhecida durante sua vida, é considerada uma das figuras mais importantes da poesia americana.\n[…]\nAs evidências sugerem que Dickinson viveu grande parte de sua vida isolada. Considerada uma excêntrica pelos moradores locais, desenvolveu uma preferência por roupas brancas e era conhecida por sua relutância em receber convidados ou, mais tarde na vida, até mesmo em sair do quarto. Dickinson nunca se casou, e a maioria das amizades entre ela e outras pessoas dependia inteiramente de correspondência.\n[…]\nEm torno de Emily, construiu-se o mito acerca de sua personalidade solitária. Tanto que a denominavam de a “Grande Reclusa”. Dickinson vivia semienclausurada na casa refinada de seu pai em Amherst. Emily, em raros momentos, deixou sua vida reclusa, tanto que em toda sua vida, apenas fez viagens para a Filadélfia para tratar de problemas de visão, uma para Washington e Boston.\n[…]\nFoi numa destas viagens que Emily conheceu dois homens que teriam marcada influência em sua vida e inspiração poética: Charles Wadsworth e Thomas Wentworth Higginson.\n[…]\nApós seu falecimento, a família encontrou 1750 poemas, escritos a partir de 1850. Quase tudo que se sabe sobre a vida de Emily Dickinson tem como fonte as correspondências que ela manteve com algumas pessoas. Entre elas: Susan Dickinson, que era sua cunhada e vizinha, colegas de escola, familiares e alguns intelectuais como Samuel Bowles, o Dr. e a Mrs. J. G. Holland, T. W. Higginson e Helen Hunt Jackson. Nestas cartas, além de tecer comentários sobre o seu cotidiano, havia também alguns poemas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Odisseia",
      "descricao": "Poema épico grego atribuído a Homero, sobre o retorno de Ulisses a Ítaca."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na Odisseia, para enganar o ciclope Polifemo, Ulisses diz ter um nome que depois confunde os outros ciclopes. Que nome falso é esse?",
    "resposta": "Ninguém",
    "distratores": [
      "Telêmaco",
      "Estrangeiro",
      "Todos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Polyphemus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Polyphemus",
        "situacao": "ok",
        "texto": "Polyphemus ( ; Ancient Greek: Πολύφημος, romanized: Polúphēmos, Epic Greek: [polypʰɛːmos]; Latin: Polyphēmus [pɔlʏˈpʰeːmʊs]) is the one-eyed giant son of Poseidon and Thoosa in Greek mythology, one of the Cyclopes described in Homer's Odyssey. His name can mean either \"abounding in songs and legends\", \"many-voiced\", or \"very famous\".\n[…]\nHandel's rival for a while on the London scene, Nicola Porpora, also made the story the subject of his opera Polifemo (1735).\n[…]\nLater in the century Joseph Haydn composed Acide e Galatea (1763) as his first opera while in Vienna. Designed for an imperial wedding, it was given a happy ending centred on the transformation scene after the murder of Acis as the pair declare their undying love. Johann Gottlieb Naumann was to turn the story into a comic opera, Aci e Galatea, with the subtitle i ciclopi amanti (the amorous cyclops).\n[…]\nThe work was first performed in Dresden in 1801 and its plot was made more complicated by giving Polifemo a companion, Orgonte. There were also two other lovers, Dorinda and Lisia, with Orgonte Lisia's rival for Dorinda's love.\n[…]\nThere have also been two Spanish musical items that reference Polyphemus's name. Reginald Smith Brindle's four fragments for guitar, El Polifemo de Oro (1956), takes its title from Federico García Lorca's poem, \"The riddle of the guitar\". That speaks of six dancing maidens (the guitar strings) entranced by 'a golden Polyphemus' (the one-eyed sound-hole). The Spanish composer Andres Valero Castells takes the inspiration for his Polifemo i Galatea from Gongora's work.\n[…]\n\"Odysseus Deriding Polyphemus\", J.M.W. Turner, 1829, at Wikipaintings\n[…]\nGalatea Acis e Polifemo, Pietro Dandini, c. 1630, at Art Value Archived 2 February 2014 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polifemo",
        "situacao": "ok",
        "texto": "Polifemo, na mitologia grega, era um ciclope, filho de Poseídon (também são aceitas as grafias Poseidon, Posidão, Posêidon ou Possêidon), e da ninfa Teosa, vivia uma existência solitária em uma caverna próxima à Sicília (junto ao Etna), cuidando de ovelhas.\n[…]\nTexto baseado em Homero, Odisseia, Livro IX\n[…]\nOdisseu então arranja um plano para todos escaparem e oferece vinho a Polifemo, que pergunta quem lhe oferece a bebida, ao que Odisseu responde: \"foi Ninguém\".\n[…]\nQuando Polifemo adormece devido à bebida, Odisseu e seus homens afiam uma vara e a espetam no olho do cíclope, cegando-o.\n[…]\nNo dia seguinte, Polifemo abre a caverna para deixar sair as ovelhas, verificando com o tacto se são realmente ovelhas ou os prisioneiros. Porém estes escondem-se, segurando-se por baixo das ovelhas, conseguindo escapar. Polifemo, ao aperceber-se da fuga, grita que \"Ninguém tinha-o cegado\" aos seus companheiros ciclopes, mas estes ignoram-no.\n[…]\nJá em seu navio Odisseu zomba de Polifemo e revela seu nome (grita que não tinha sido \"Ninguém\" a feri-lo, mas sim Odisseu). Polifemo, furioso, atira grandes rochas ao acaso para o mar, que quase atingem a embarcação.\n[…]\nO ciclope pede a seu pai Posídon que se vingue de Odisseu, amaldiçoando os gregos. Posídon atende, atormentando Odisseu durante o resto da viagem.\n[…]\nSegundo uma rápida passagem da Eneida, de Virgílio, os troianos passaram pela ilha dos ciclopes aparentemente poucas semanas depois de Odisseu. E lá encontraram Aquemênides, um soldado de Odisseu que foi deixado para trás enquanto os outros fugiam. Ele narra aos troianos o que se passou entre seu rei e Polifemo, mas interrompe a narrativa quando vê que o próprio Polifemo, agora cego, vem caminhando na direção da praia para lavar seu olho ferido.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Frankenstein",
      "descricao": "Romance de Mary Shelley, publicado em 1818, sobre um cientista que dá vida a uma criatura."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No romance de Mary Shelley, Frankenstein é o sobrenome do cientista. Que nome a criatura dele recebe no livro?",
    "resposta": "Nenhum",
    "distratores": [
      "Igor",
      "Lázaro",
      "Prometeu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Frankenstein%27s_monster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frankenstein%27s_monster",
        "situacao": "ok",
        "texto": "Frankenstein's monster, commonly referred to as Frankenstein, is a fictional character that first appeared in Mary Shelley's 1818 novel Frankenstein; or, The Modern Prometheus as its main antagonist. Shelley's title compares the monster's creator, Victor Frankenstein, who later became the monster's namesake, to the mythological character Prometheus, who fashioned humans out of clay and gave them f\n[…]\nModern practice varies somewhat. For example, in Dean Koontz's Frankenstein, first published in 2004, the creature is named \"Deucalion\", after the character from Greek mythology, who is the son of the Titan Prometheus, a reference to the original novel's title. Another example is the 2014 film I, Frankenstein, where the Queen of the Gargoyles Leonore gives him the name \"Adam\" after understanding Victor never gave him one.\n[…]\nIn the 1994 film Mary Shelley's Frankenstein, the creature is played by Robert De Niro and has an appearance closer to that described in the original novel, though this version of the creature possesses balding grey hair and a body covered in bloody stitches. He is, as in the novel, motivated by pain and loneliness. In this version, Frankenstein gives the monster the brain of his mentor, Doctor Waldman, while his body is made from a man who killed Waldman while resisting a vaccination.\n[…]\nAnother proposal is that Victor Frankenstein was based on a real scientist who had a similar name, and who had been called a modern Prometheus – Benjamin Franklin. Accordingly, the monster would represent the new nation that Franklin helped to create out of remnants left by England. Victor Frankenstein's father \"made also a kite, with a wire and string, which drew down that fluid from the clouds,\" wrote Shelley, similar to Franklin's famous kite experiment.\n[…]\nFrankenstein in popular culture\n[…]\nFrankenstein's Promethean dimension\n[…]\nLiterary discussion of the argument of Frankenstein"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monstro_de_Frankenstein",
        "situacao": "ok",
        "texto": "O monstro de Frankenstein (também chamado de Adam, Monstro, Criatura de Frankenstein ou apenas Frankenstein) é um personagem fictício que apareceu pela primeira vez em 1818 no romance Frankenstein; or, The Modern Prometheus de Mary Shelley. Na cultura popular, a criatura é muitas vezes referida como \"Frankenstein\" devido ao seu criador Victor Frankenstein, porém na novela a criatura não tem nome.\n[…]\nTambém é variadamente referido como \"criatura\", \"demônio\", \"espectro\", \"desgraçado\", \"diabo\", \"coisa\", \"ser\" e \"ogro\" no romance.\n[…]\nO filme da Universal tratou a identidade do monstro em uma maneira similar ao romance de Shelley: o nome do ator, não o personagem, está escondido por um ponto de interrogação. No entanto, a criatura logo tornou-se mais conhecida no imaginário popular como \"Frankenstein\". Esse uso é, por vezes, considerado errôneo, mas comentaristas de uso consideram o sentido do monstro de \"Frankenstein\", como bem estabelecido e não um erro.\n[…]\nOutro elemento marcante do filme foi o personagem Fritz, assistente corcunda de Victor Frankenstein. Fritz é originário da peça teatral Presumption; or, The Fate of Frankenstein (1823), não do livro. Embora não tenha sido criado por Mary Shelley, esse personagem foi incorporado ao filme da Universal, onde ganhou popularidade graças à interpretação de Dwight Frye.\n[…]\nA criatura, ao saber da morte de seu criador, foi tomada por uma tristeza profunda. Reconhecendo que sua existência havia sido marcada por sofrimento, isolamento e violência, decidiu pôr fim à própria vida. Desapareceu entre os gelos do norte, com a intenção de se destruir por completo — queimando seu próprio corpo — para que nenhum vestígio de sua anatomia ou do método de sua criação pudesse jamais ser descoberto ou repetido.\n[…]\n13 Ways of Looking at Frankenstein - slideshow by Life magazine\n[…]\nLiterary discussion of the argument of Frankenstein",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Robinson Crusoé",
      "descricao": "Romance inglês de 1719 sobre um náufrago que passa anos sozinho numa ilha."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Por que o companheiro nativo de Robinson Crusoé recebe dele o nome de Sexta-Feira?",
    "resposta": "Dia em que foi salvo",
    "distratores": [
      "Dia em que nasceu",
      "Dia do naufrágio",
      "Dia do descanso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Man_Friday",
      "https://en.wikipedia.org/wiki/Robinson_Crusoe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Man_Friday",
        "situacao": "ok",
        "texto": "Friday is one of the main characters of Daniel Defoe's 1719 novel Robinson Crusoe and its sequel The Farther Adventures of Robinson Crusoe. Robinson Crusoe names the man Friday, with whom he cannot at first communicate, because they first meet on that day. The character is the source of the expression \"Man Friday\", used to describe a male personal assistant or servant, especially one who is partic\n[…]\nRobinson Crusoe spends twenty-eight years on an island off the coast of Venezuela with his talking parrot Poll, his pet dog, and a tame goat as his only companions. In his twenty-fifth year, he discovers that Carib cannibals occasionally use a desolate beach on the island to kill and eat their captives.\n[…]\nFriday accompanies Crusoe home to England and is his companion in the sequel The Farther Adventures of Robinson Crusoe, in which Friday is killed in a sea battle.\n[…]\nThe 1964 film Robinson Crusoe on Mars recasts the Robinson Crusoe story as a space adventure. Victor Lundin played the rescued companion of Crusoe figure Commander Christopher Draper (Paul Mantee), who dubs him \"Friday\" in reference to the novel.\n[…]\nIn the 1970 Mexican film Robinson Crusoe and its 1973 sequel Robinson y Viernes en la Isla Encantada (Robinson and Friday on the Enchanted Island), Ahui Camacho played Friday to Hugo Stiglitz' Crusoe. This is the second time a child actor portrays the character and is shown fully nude (only in the first film).\n[…]\nOne of the first season episodes of the 1996 Spanish animated series The Triplets is an adaptation of Robinson Crusoe. In this episode, The Bored Witch disguises herself as a native, playing the role of Friday to get closer to Robinson and the triplets.\n[…]\nIn the 1997 film version of Robinson Crusoe, William Takaku played Friday to Pierce Brosnan's Crusoe.\n[…]\nFriday's relationship with Robinson Crusoe has been the subject of academic analysis."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Robinson_Crusoe",
        "situacao": "ok",
        "texto": "Robinson Crusoe (, KROO-soh, zoh) is an English adventure novel by Daniel Defoe, first published on 25 April 1719. It is often credited as marking the beginning of realistic fiction as a literary genre, and has been described as the first novel, or at least the first English novel – although these labels are disputed.\n[…]\nDefoe, Daniel. Robinson Crusoe. Dover Publications, 1998.\n[…]\nLife and Adventures of Robinson Crusoe Rand McNally & Company. The Windermere Series 1916. No ISBN. Includes 7 illustrations by Milo Winter\n[…]\nCrusoe\n[…]\nMiss Robinson Crusoe\n[…]\nRoss, Angus, ed. (1965), Robinson Crusoe. Penguin.\n[…]\nShinagel, Michael, ed. (1994). Robinson Crusoe. Norton Critical Edition. ISBN 0-393-96452-3. Includes textual annotations, contemporary and modern criticisms, bibliography.\n[…]\nSeverin, Tim (2002). In search of Robinson Crusoe, New York: Basic Books. ISBN 0-465-07698-X\n[…]\nHymer, Stephen (September 1971). \"Robinson Crusoe and the secret of primitive accumulation\". Monthly Review. 23 (4): 11. doi:10.14452/MR-023-04-1971-08_2.\n[…]\nShinagel, Michael, ed. (1994), Robinson Crusoe. Norton Critical Edition (ISBN 0-393-96452-3). By Kogul, Mariapan.\n[…]\nEwers, Chris Mobility in the English Novel from Defoe to Austen. (Woodbridge: Boydell and Brewer, 2018). ISBN 978-1787442726. Includes a chapter on Robinson Crusoe.\n[…]\nRogers, Pat Robinson Crusoe (London: Allen and Unwin, 1979). ISBN 0048000027.\n[…]\nRobinson Crusoe at Standard Ebooks\n[…]\nRobinson Crusoe at Project Gutenberg\n[…]\nRobinson Crusoe at Editions Marteau (annotated text of the first edition)\n[…]\nRobinson Crusoe public domain audiobook at LibriVox\n[…]\nRobinson Crusoe in Words of One Syllable by Mary Godolphin (1723–1764), hosted at Project Gutenberg\n[…]\n\"Robinson Crusoe & the Robinsonades\", a free online collection of editions of Robinson Crusoe from the Baldwin Library of Historical Children's Literature"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Miguel de Cervantes",
      "descricao": "Escritor espanhol, autor de Dom Quixote, que lutou como soldado na Batalha de Lepanto."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Ferido numa batalha naval contra os turcos em 1571, Cervantes perdeu o movimento da mão esquerda. Que apelido ganhou por isso?",
    "resposta": "Manco de Lepanto",
    "distratores": [
      "Cavaleiro da Triste Figura",
      "Herói de Argel",
      "Maneta de Castela"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Miguel_de_Cervantes",
      "https://en.wikipedia.org/wiki/Miguel_de_Cervantes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Miguel_de_Cervantes",
        "situacao": "ok",
        "texto": "Miguel de Cervantes Saavedra ([sɜrˈvæntiːz,_ʔtɪz] sur-VAN-teez-,_--tiz; es; 29 de setembro de 1547 (presumido) – 22 de abril de 1616) foi um escritor espanhol amplamente considerado como o maior escritor da língua espanhola e um dos romancistas proeminentes do mundo. Ele é mais conhecido por seu romance em duas partes Dom Quixote, uma obra considerada o primeiro romance moderno.\n[…]\nEm 1569, Cervantes foi forçado a deixar a Espanha e mudar-se para Roma, onde trabalhou na casa de um cardeal. Em 1570, alistou-se em um regimento de infantaria da Marinha Espanhola, foi gravemente ferido na Batalha de Lepanto em outubro de 1571 e perdeu o uso do braço e da mão esquerda. Serviu como soldado até 1575, quando foi capturado por piratas berberes; após cinco anos em cativeiro, foi resgatado e retornou a Madrid.\n[…]\nEm setembro de 1571, Cervantes navegou a bordo da Marquesa, parte da frota da Liga Santa sob o comando de Dom João de Áustria, meio-irmão ilegítimo de Filipe II de Espanha; em 7 de outubro, eles derrotaram a frota do Império Otomano na Batalha de Lepanto. De acordo com seu próprio relato, embora sofresse de malária, Cervantes recebeu o comando de um esquife de 12 homens, um pequeno barco usado para assaltar galés inimigas.\n[…]\nA Marquesa perdeu 40 mortos e 120 feridos, incluindo Cervantes, que recebeu três ferimentos distintos, dois no peito e outro que deixou seu braço esquerdo inútil. Esse último ferimento é a razão pela qual ele mais tarde foi chamado de \"El manco de Lepanto\" (O maneta de Lepanto), um título que o acompanhou pelo resto da vida. Suas ações em Lepanto foram motivo de orgulho até o fim de seus dias, enquanto Dom João aprovou nada menos que quatro aumentos salariais separados para ele.\n[…]\nInstituto Cervantes\n[…]\nInformações sobre Miguel de Cervantes\n[…]\nMiguel de Cervantes Collection Da Divisão de Livros Raros e Coleções Especiais da Biblioteca do Congresso"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Miguel_de_Cervantes",
        "situacao": "ok",
        "texto": "Miguel de Cervantes Saavedra ( sur-VAN-teez, -⁠tiz; Spanish: [miˈɣel de θeɾˈβantes sa(.a)ˈβeðɾa]; 29 September 1547 (assumed) – 22 April 1616) was a Spanish writer widely regarded as the greatest writer in the Spanish language and one of the world's pre-eminent novelists. He is best known for his two-part novel Don Quixote, a work considered to be the first modern novel.\n[…]\nIn 1569, Cervantes was forced to leave Spain and move to Rome, where he worked in the household of a cardinal. In 1570, he enlisted in a Spanish Navy infantry regiment, and was badly wounded at the Battle of Lepanto in October 1571 and lost the use of his left arm and hand. He served as a soldier until 1575, when he was captured by Barbary pirates; after five years in captivity, he was ransomed, and returned to Madrid.\n[…]\nIn September 1571, Cervantes sailed on board the Marquesa, part of the Holy League fleet under Don John of Austria, illegitimate half brother of Phillip II of Spain; on 7 October, they defeated the Ottoman fleet at the Battle of Lepanto. According to his own account, although suffering from malaria, Cervantes was given command of a 12-man skiff, a small boat used for assaulting enemy galleys.\n[…]\nThe Marquesa lost 40 dead, and 120 wounded, including Cervantes, who received three separate wounds, two in the chest, and another that rendered his left arm useless. This last wound is the reason why he later was called \"El manco de Lepanto\" (English: \"The one-handed man of Lepanto\", \"The one-armed man of Lepanto\"), a title that followed him for the rest of his life.\n[…]\nHis actions at Lepanto were a source of pride to the end of his life, while Don John approved no less than four separate pay increases for him.\n[…]\nMiguel de Cervantes Prize\n[…]\nInformation about Miguel de Cervantes\n[…]\nMiguel de Cervantes Collection From the Rare Book and Special Collection Division at the Library of Congress"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Macbeth",
      "descricao": "Tragédia de William Shakespeare sobre um general escocês que mata o rei para tomar o trono."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Por superstição, muitos atores evitam dizer no teatro o nome de que tragédia de Shakespeare, chamando-a de a peça escocesa?",
    "resposta": "Macbeth",
    "distratores": [
      "Rei Lear",
      "Otelo",
      "Hamlet"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Scottish_play"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Scottish_play",
        "situacao": "ok",
        "texto": "The Scottish Play and the Bard's play are euphemisms for the William Shakespeare play Macbeth. The first is a reference to the play's Scottish setting, and the second is a reference to Shakespeare's popular nickname. According to a theatrical superstition, called the Scottish curse, speaking the name Macbeth inside a theatre, other than as called for in the script while rehearsing or performing, w\n[…]\nBecause of this superstition, the title character is often referred to as the Scottish King or Scottish Lord. Lady Macbeth is often referred to as the Scottish Lady or Lady M. However, one of the most popular traditions among Shakespeare-specific actors allows \"Macbeth\" as a reference to the character. Nonetheless, many call the pair \"Macb\" and \"Lady Macb\".\n[…]\nThe traditional origin is said to be a curse set upon the play by a coven of witches, angry at Shakespeare for using a real spell. One hypothesis for the origin of this superstition is that Macbeth, being a popular play, was commonly put on by theatres in financial trouble, or that the high production costs of Macbeth put theatres in financial trouble. Hence, an association was made between productions of Macbeth and theatres going out of business.\n[…]\nIn 2022, at the 94th Academy Awards, Chris Rock congratulated Denzel Washington on his performance in The Tragedy of Macbeth, saying the name of the Scottish play aloud in the Dolby Theatre. Moments later, Rock was slapped by Will Smith after making a joke implied to be about the alopecia that Smith's wife, Jada Pinkett Smith, was struggling with at the time. Viewers, including playwright Lynn Nottage, quickly took to social media to joke that Rock had suffered the curse of the Scottish play.\n[…]\nReview: Curse of the Play[link removed] Review of a newspaper article on the superstitions about Macbeth.\n[…]\nSupernatural on Stage: Ghosts and Superstitions of the Theater\n[…]\nMacbeth: The Male Medusa"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "A Revolução dos Bichos",
      "descricao": "Fábula satírica de George Orwell, de 1945, em que os animais de uma fazenda expulsam o dono e acabam dominados pelos porcos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em A Revolução dos Bichos, de Orwell, o porco Napoleão vira o ditador da fazenda. Que líder da história ele representa?",
    "resposta": "Josef Stálin",
    "distratores": [
      "Vladimir Lênin",
      "Leon Trótski",
      "Nikita Khruschóv"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Napoleon_(Animal_Farm)",
      "https://en.wikipedia.org/wiki/Animal_Farm"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Napoleon_(Animal_Farm)",
        "situacao": "ok",
        "texto": "Napoleon is a fictional character and the main antagonist of George Orwell's 1945 novella Animal Farm. While he is at first a common farm pig, he exiles Snowball, another pig, who is his rival for power. He then takes advantage of the animals' uprising against their masters to eventually become the tyrannical \"President\" of Animal Farm, which he turns into a dictatorship.\n[…]\nHe is presumed to be named after the French emperor Napoleon. Napoleon and Snowball mirror the relationship between Stalin and Leon Trotsky. Trotsky supported Permanent Revolution (just as Snowball advocated overthrowing other farm owners), while Stalin supported socialism in one country (similar to Napoleon's idea of teaching the animals to use firearms, instead). When it seems Snowball will win the election for his plans, Napoleon calls in the dogs he has raised to chase Snowball from the farm.\n[…]\nLater on, after ostracising Snowball, Napoleon orders the construction of the windmill, which had been designed by Snowball and which Napoleon had opposed vigorously (just as Stalin opposed Trotsky's push for large scale industrialisation, then adopted it as a policy when Trotsky was in exile), so as to show the animals that he could be just as inventive as Snowball. The other animals are told it was Napoleon's ideas and that Snowball had stolen it.\n[…]\nWhen the primitive windmill collapses after a storm, due to Napoleon's poor planning (a reference to Stalin's backward approach to the Five-Year Plans), Napoleon blames Snowball and starts a wave of terror (a reference to the Great Purge). During this period, he orders the execution of several of the animals after coercing their \"confessions\" of wrongdoing.\n[…]\nNapoleon declares the farm a republic, and a president is elected; as the only candidate, Napoleon is elected unanimously."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Animal_Farm",
        "situacao": "ok",
        "texto": "Animal Farm (originally Animal Farm: A Fairy Story) is a satirical, allegorical, dystopian novella and beast fable  by George Orwell, first published in England on 17 August 1945. It follows the mistreated, anthropomorphized farm animals of Manor Farm as they rebel against their human master and endeavor to create a utopian society.\n[…]\nHis preaching to the animals heartens them, and Napoleon allows Moses to reside at the farm \"with an allowance of a gill of beer daily\", akin to how Stalin brought back the Russian Orthodox Church during the Second World War.\n[…]\nThe revolt of the animals against Farmer Jones is Orwell's analogy with the October 1917 Bolshevik Revolution. The Battle of the Cowshed has been said to represent the allied invasion of Soviet Russia in 1918, and the defeat of the White Russians in the Russian Civil War. The pigs' rise to preeminence mirrors the rise of a Stalinist bureaucracy in the USSR, just as Napoleon's emergence as the farm's sole leader reflects Stalin's emergence.\n[…]\nThe puppies controlled by Napoleon parallel the nurture of the secret police in the Stalinist structure, and the pigs' treatment of the other animals on the farm recalls the internal terror faced by the populace in the 1930s. In chapter seven, when the animals confess their non-existent crimes and are killed, Orwell directly alludes to the purges, confessions and show trials of the late 1930s.\n[…]\nPeter Edgerly Firchow and Peter Davison contend that the Battle of the Windmill, specifically referencing the Battle of Stalingrad and the Battle of Moscow, represents World War II. During the battle, Orwell first wrote, \"All the animals, including Napoleon\" took cover. Orwell had the publisher alter this to \"All the animals except Napoleon\" in recognition of Stalin's decision to remain in Moscow during the German advance."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Napole%C3%A3o_%28personagem_de_Orwell%29",
        "situacao": "ok",
        "texto": "Napoleão é uma personagem e o principal antagonista do livro Animal Farm (​O Triunfo dos Porcos (título em Portugal) ou A Revolução dos Bichos (título no Brasil)) do escritor inglês George Orwell. A personagem é baseada no líder da União Soviética Josef Stalin e deve o seu nome ao imperador francês Napoleão Bonaparte.\n[…]\nNapoleão é o único porco da raça Berkshire na quinta. Depois de todos os animais afugentarem o senhor Jones da quinta, Napoleão expulsa Snowball (que simboliza Leon Trotsky) e torna-se o líder da Quinta dos Animais, acabando por voltar a fazer da Quinta dos Animais uma ditadura.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Mark Twain",
      "descricao": "Escritor americano (1835–1910), autor de As Aventuras de Tom Sawyer e Huckleberry Finn."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Mark Twain nasceu em 1835 e morreu em 1910, como ele mesmo previra, em anos de passagem de que astro?",
    "resposta": "Cometa Halley",
    "distratores": [
      "Cometa Hale-Bopp",
      "Trânsito de Vênus",
      "Cometa Encke"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mark_Twain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mark_Twain",
        "situacao": "ok",
        "texto": "Samuel Langhorne Clemens (November 30, 1835 – April 21, 1910), known by the pen name Mark Twain, was an American writer, humorist, and essayist. He has been praised as the \"greatest humorist the United States has produced\", with William Faulkner calling him \"the father of American literature\". Twain's novels include The Adventures of Tom Sawyer (1876) and its sequel, Adventures of Huckleberry Finn\n[…]\nTwain was born shortly after an appearance of Halley's Comet and predicted that his death would accompany it as well, writing in 1909: \"I came in with Halley's Comet in 1835; it's coming again next year, and I expect to go out with it. It would be a great disappointment in my life if I don't.\n[…]\nTwain was born two weeks after Halley's Comet's closest approach in 1835; he said in 1909:\n[…]\nI came in with Halley's Comet in 1835. It is coming again next year, and I expect to go out with it. It will be the greatest disappointment of my life if I don't go out with Halley's Comet. The Almighty has said, no doubt: \"Now here are these two unaccountable freaks; they came in together, they must go out together\".\n[…]\nMcDowell's cave—now known as Mark Twain Cave in Hannibal, Missouri, and frequently mentioned in Twain's book The Adventures of Tom Sawyer—has \"Sam Clemens\", Twain's real name, engraved on the wall by Twain himself.\n[…]\nTwain's story about his pen name has been questioned by some, with the suggestion that \"mark twain\" refers to a running bar tab that Twain would regularly incur while drinking at John Piper's saloon in Virginia City, Nevada. Samuel Clemens himself responded to this suggestion by saying, \"Mark Twain was the nom de plume of one Captain Isaiah Sellers, who used to write river news over it for the New Orleans Picayune.\n[…]\nWorks by or about Mark Twain at the Internet Archive\n[…]\nWorks by Mark Twain at LibriVox (public domain audiobooks)\n[…]\nMark Twain Room at Buffalo & Erie County Public Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mark_Twain",
        "situacao": "ok",
        "texto": "Samuel Langhorne Clemens (Florida, Missouri, 30 de novembro de 1835 - Redding, Connecticut, 21 de abril de 1910), mais conhecido pelo pseudônimo Mark Twain, foi um escritor e humorista estadunidense crítico do racismo. É mais conhecido pelos romances As Aventuras de Tom Sawyer (1876) e sua sequência Aventuras de Huckleberry Finn (1885), este último frequentemente chamado de \"O Maior Romance Americ\n[…]\nNascido durante uma das passagens do Cometa Halley, Twain morreu 74 anos depois, pouco depois do astro voltar a se aproximar da Terra. \"Será a maior decepção da minha vida se eu não for embora com o cometa\", escrevera ele em 1909. \"O Todo-Poderoso disse, indubitavelmente: 'cá estão esses dois inexplicáveis fenômenos; eles chegaram juntos, e devem partir juntos'\".\n[…]\nSamuel Langhorne Clemens nasceu em Florida, Missouri, filho de Jane Lampton Clemens e do mercador John Marshall Clemens. Foi o sexto de sete irmãos, dos quais apenas mais três sobreviveram à infância: Orion, Henry e Pamela. Margaret morreu quando Twain tinha três anos; Benjamin, três anos depois; e Pleasant, aos seis meses de vida.\n[…]\nEm 20 de maio de 1909, seu amigo Henry Rogers morreu repentinamente. No mesmo ano, Twain teria escrito: \"Eu cheguei com o Cometa Halley em 1835. Ele vai passar de novo ano que vem, e espero ir embora com ele. Seria a maior decepção da minha vida se eu não fosse com o cometa. O Todo-Poderoso disse, indubitavelmente: 'cá estão esses dois inexplicáveis fenômenos; eles chegaram juntos, e devem partir juntos'\".\n[…]\nSua predição estava correta – Twain morreu em decorrência de um ataque cardíaco em Redding em 21 de abril de 1910, um dia após o Halley passar mais próximo da Terra. Encontra-se sepultado no Woodlawn Cemetery, Elmira, Condado de Chemung, Nova Iorque nos Estados Unidos.\n[…]\n«As Obras de Mark Twain» (em inglês)\n[…]\n«A casa de Mark Twain em Hartford, CT» 🔗 (em inglês)\n[…]\nObras de Mark Twain na Open Library",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Gustave Flaubert",
      "descricao": "Romancista francês do realismo, autor de Madame Bovary."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1857, Madame Bovary, de Flaubert, e As Flores do Mal, de Baudelaire, tiveram o mesmo destino na França. Qual?",
    "resposta": "Processados por imoralidade",
    "distratores": [
      "Premiados pela Academia",
      "Queimados em praça pública",
      "Escritos na prisão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Madame_Bovary",
      "https://en.wikipedia.org/wiki/Les_Fleurs_du_mal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Madame_Bovary",
        "situacao": "ok",
        "texto": "Madame Bovary: Provincial Manners (French: Madame Bovary : Mœurs de province, pronounced [madam bɔvaʁi mœʁ(s) də pʁɔvɛ̃s]), commonly known as simply Madame Bovary,  is the debut novel of French writer Gustave Flaubert, originally published in 1856 and 1857. The eponymous character, Emma Bovary, lives beyond her means in order to escape the ennui of provincial life.\n[…]\nWhen the novel was first serialised in Revue de Paris between 1 October and 15 December 1856, public prosecutors attacked it on the grounds that it was obscene. The resulting trial in January 1857 rendered it notorious. Following Flaubert's acquittal on 7 February 1857, Madame Bovary became a bestseller in April 1857 when it was published in two volumes. The novel was translated into English by Eleanor Marx in 1886.\n[…]\nThe realist movement was, in part, a reaction against romanticism. Emma may be said to be the embodiment of a romantic: in her mental and emotional process, she has no relation to the realities of her world. Although in some ways he may seem to identify with Emma, Flaubert frequently mocks her romantic daydreaming and taste in literature. The accuracy of Flaubert's supposed assertion that \"Madame Bovary, c'est moi\" (\"Madame Bovary is me\") has been questioned.\n[…]\nMadame Bovary has been seen as a commentary on the bourgeoisie, the folly of aspirations that can never be realized or a belief in the validity of a self-satisfied, deluded personal culture, associated with Flaubert's period, especially during the reign of Louis Philippe, when the middle class grew to become more identifiable in contrast to the working class and the nobility. Flaubert despised the bourgeoisie.\n[…]\nLes manuscrits de Madame Bovary (in French) – Site with images and transcriptions of Flaubert's original manuscripts, plus 4500 pages deleted/censored material\n[…]\nBooks Like Madame Bovary by Gustave Flaubert"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Les_Fleurs_du_mal",
        "situacao": "ok",
        "texto": "Les Fleurs du mal (French pronunciation: [le flœʁ dy mal]; English: The Flowers of Evil) is a volume of French poetry by Charles Baudelaire.\n[…]\nLes Fleurs du mal includes nearly all of Baudelaire's poetry, written from 1840 until his death in August 1867. First published in 1857, it was important in the symbolist—including painting—and modernist movements. Though it was extremely controversial upon publication, with six of its poems censored due to their immorality, it is now considered a major work of French poetry. The poems in Les Fleurs du mal frequently break with tradition, using suggestive images and unusual forms.\n[…]\nBaudelaire dedicated the book to his contemporary poet Théophile Gautier thus: Au parfait magicien des lettres françaises (\"To the perfect magician of French letters\").\n[…]\nA 2005 episode of the animated television show The Batman was named \"Fleurs du Mal\" in reference to the poem. In addition to this, a florist's shop in the episode is named Baudelaire's.\n[…]\nIn episode 13 of the TV series Saving Hope's first season (2012), a copy of The Flowers of Evil is among the personal effects of a patient. Later in the episode a doctor briefly discusses Baudelaire and a phrase from the book with that patient.\n[…]\nChicago-based artistic collective Theater Oobleck produced a series of cantastoria using Baudelaire's Les Fleurs du Mal as text.\n[…]\nMarder, Elissa (May 2016). \"Inhuman beauty: Baudelaire's bad sex\". differences: A Journal of Feminist Cultural Studies. 27 (1). Duke University Press: 1–24. doi:10.1215/10407391-3522733.\n[…]\nThe Poems of Baudelaire, incl. Les Fleurs du Mal at Faded Page (Canada)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Madame_Bovary",
        "situacao": "ok",
        "texto": "Madame Bovary é um romance de Gustave Flaubert. Chamado de \"romance dos romances\", Madame Bovary é considerado pioneiro dentre os romances realistas, tornando-se famoso por sua originalidade. Posteriormente, levou à cunhagem do termo \"bovarismo\" na psicologia, em referência às características psicológicas da protagonista. Quando foi lançado, Flaubert foi levado a julgamento pela obra, despertando \n[…]\nFlaubert criou uma cena muito peculiar para sua época tendo em vista os meios foi levado aos tribunais, onde utilizou a famosa frase \"Emma Bovary c'est moi\" (Emma Bovary sou eu) para se defender das acusações. Acusado de ofensa à moral e à religião, num processo contra o autor e também contra Laurent Pichat, diretor da revista Revue de Paris, em que a história foi publicada pela primeira vez, em episódios e com alguns pequenos cortes.\n[…]\nComo crítica social, nesta obra é perceptível o direcionamento claro do autor à classe burguesa, a qual ele mesmo fazia parte. Esta “involuntária” participação na sociedade de consumo que se formava no sec. XIX impulsionada pela Revolução Industrial que produzia, produzia, produzia... “criando” necessidades pessoais de consumo leva Flaubert a criticar sua dependência econômica e social neste meio.\n[…]\nEmma, além de sonhadora, é uma mulher insatisfeita, mesmo não lhe faltando nada e tendo a possibilidade de comprar o que achasse necessário, ela afoga a família em dívidas feitas ao longo da trama. É exatamente neste comportamento que percebemos a crítica de Flaubert, ao declarar ser Emma Bovary, ou seja, assim como a personagem ele se viu escravo do consumo. Na verdade, esta personagem representa a rejeição do autor aos burgueses materialistas de sua época.\n[…]\nA histeria em Freud e Flaubert\n[…]\nFilme de 1949. Direção de Vincente Minnelli e com a atriz Jennifer Jones no papel de Madame Bovary.\n[…]\nHarmonias em Madame Bovary",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "O Mundo se Despedaça",
      "descricao": "Romance nigeriano de 1958 sobre a chegada da colonização britânica ao povo igbo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O título do romance O Mundo se Despedaça, de Chinua Achebe, foi tirado de um verso de que poeta irlandês?",
    "resposta": "W. B. Yeats",
    "distratores": [
      "Oscar Wilde",
      "Seamus Heaney",
      "James Joyce"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Things_Fall_Apart"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
        "situacao": "ok",
        "texto": "Things Fall Apart is the 1958 debut novel by Nigerian author Chinua Achebe. Set in Colonial Nigeria, it portrays the story of Okonkwo, a traditional and influential leader of the fictional Ibo clan (inspired by the real life Igbo clan) of Umuofia, who opposes colonialism and early Christianity. Written when Achebe was working at the Nigerian Broadcasting Corporation, it was first published in Lond\n[…]\nThings Fall Apart depicts the Igbo culture as a way to revive the lost dignity of the Igbo people during colonisation. In talking about race, Achebe said: Africans are people in the same way that Americans, Europeans, Asians, and others are people. Although the action of Things Fall Apart takes place in a setting with which most Americans are unfamiliar, the characters are normal people who undergo real life experiences.\n[…]\nThings Fall Apart is regarded as a milestone in Anglophone African literature, and for the perception of African literature in the West. It has been translated into over 50 languages. While not the first major African novelist, Achebe self-consciously defined the political role of African writers and established a model for the continent's postcolonial literature.\n[…]\nAchebe's fiction and criticism continue to inspire and influence writers around the world. Hilary Mantel, the Booker Prize-winning novelist in a 7 May 2012 article in Newsweek lists Things Fall Apart as one of her five favourite novels in this genre. Caine Prize winners Binyavanga Wainaina and Helon Habila, Uzodinma Iweala, and Okey Ndibe have cited Achebe as an influence.\n[…]\nThings Fall Apart has influenced subsequent African authors' style, language, and themes, as Chimamanda Ngozi Adichie observes in a CNN interview. Simon Gikandi describes Things Fall Apart as seminal, recognizing Achebe as \"one of Africa's most important and influential writers.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Things_Fall_Apart",
        "situacao": "ok",
        "texto": "Things Fall Apart (Brasil: O mundo se despedaça / Portugal: Quando tudo se desmorona) é um romance de Chinua Achebe, publicado em 1958 no Reino Unido.\n[…]\nPrimeiro romance de Achebe, a obra foi lançada dois anos antes da independência da Nigéria e seria considerado um dos livros mais importantes da literatura africana do século XX e tido como fundador da moderna literatura nigeriana. Foi traduzido em mais de quarenta línguas e vendeu milhões de cópias mundialmente.\n[…]\nDurante séculos, o continente africano teve obscurecida a sua história e saqueados os seus recursos naturais. Em Things Fall Apart — o primeiro de uma série de romances sobre a vida nigeriana a partir de meados do século XIX — Achebe iniciou, em ficção, a sua versão dessa história.\n[…]\nNesta trilogia, Achebe explora três períodos que ocorreram num século de encontros Anglo-Ibos: a chegada dos britânicos em Things Fall Apart; o período de estabelecimentos de regras coloniais, por volta da altura do nascimento do escritor, em Arrow of God; e os últimos dias do império em No Longer at Ease. Em todas estas obras, trata-se da perspectiva do protagonista Ibo.\n[…]\nEscrito em inglês, floreado com padrões de fala e provérbios nigerianos, o romance, cujo título imita um verso do poema The Second Coming, de William Butler Yeats.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Luís de Camões",
      "descricao": "Poeta português do século dezesseis, autor de Os Lusíadas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Portugal comemora o seu dia nacional em dez de junho, data tradicional da morte de que escritor?",
    "resposta": "Luís de Camões",
    "distratores": [
      "Fernando Pessoa",
      "Eça de Queirós",
      "Gil Vicente"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Portugal_Day",
      "https://en.wikipedia.org/wiki/Lu%C3%ADs_de_Cam%C3%B5es"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Portugal_Day",
        "situacao": "ok",
        "texto": "Portugal Day, officially Portugal, Camões, and Portuguese Communities Day (Portuguese: Dia de Portugal, de Camões e das Comunidades Portuguesas), is the national day of Portugal celebrated annually on 10 June. It is one of the public holidays in Portugal and celebrated by Portuguese people throughout the world. It commemorates the death on 10 June 1580 of Luís de Camões, a poet and national litera\n[…]\nAlthough Camões became a symbol of Portuguese nationalism, his death coincided with the Portuguese succession crisis of 1580 that eventually resulted in Philip II of Spain claiming the Portuguese throne. Portugal was then ruled by three generations of Spanish kings during the Iberian Union (1580–1640). On 1 December 1640, the country regained its independence once again by expelling the Spanish during the Portuguese Restoration War and making John of Bragança, King John IV of Portugal.\n[…]\nDuring the authoritarian Estado Novo regime in the 20th century, Camões was used as a symbol for the Portuguese nation. In 1944, at the dedication ceremony of the National Stadium in Oeiras (near Lisbon), Prime Minister António de Oliveira Salazar referred to 10 June as Dia da Raça (Day of the Portuguese Race). The notion of a Portuguese \"race\" served his nationalist purposes.\n[…]\nIn 2017, the official celebrations of Portugal Day, Camões Day, and Portuguese Communities Day took place in Porto, Portugal, and in the Brazilian cities of Rio de Janeiro and São Paulo, as announced by the President of the Republic. After Paris in 2016, this was the second time that the official celebrations took place in two or more different cities, one of which was outside Portugal.\n[…]\nDay of Portugal in London 2013, England\n[…]\nDay of Portugal in Rhode Island, United States\n[…]\nDay of Portugal in California, United States\n[…]\nDay of Portugal in New York, United States\n[…]\nPortugal Day Celebration in Nassau County, United States[link removed]"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lu%C3%ADs_de_Cam%C3%B5es",
        "situacao": "ok",
        "texto": "Luís Vaz de Camões (European Portuguese: [luˈiʒ ˈvaʒ ðɨ kaˈmõjʃ]; c. 1524 or 1525 – 10 June 1580), sometimes rendered in English as Camoens or Camoëns ( KAM-oh-ənz), was a Portuguese poet, considered Portugal's and the Portuguese language's greatest poet. His mastery of verse has been compared to that of Shakespeare, Milton, Vondel, Homer, Virgil and Dante. He wrote a considerable amount of lyrica\n[…]\nHis collection of poetry The Parnasum of Luís de Camões was lost during his life. The influence of his masterpiece Os Lusíadas is so profound that Portuguese is sometimes called the \"language of Camões\".\n[…]\nThe ancestral home of the Camões family had its origins in the Kingdom of Galicia, not far from Cape Finisterre. On his paternal side, Luís de Camões was descended from Vasco Pires de Camões, Galician troubadour, warrior and fidalgo, who moved to Portugal in 1370 and received great benefits from the king in positions, honours and lands, and whose poetry, of a nationalist nature, contributed to ward off Breton and Italian influence and to shape a national troubadour style.\n[…]\nOver the centuries the image of Camões was represented numerous times in engraving, painting and sculpture, by Portuguese and foreign artists, and several monuments were erected in his honor, notably the great Monument to Camões installed in 1867 in Praça de Luís de Camões, in Lisbon, by Victor Bastos, which is the center of official public ceremonies and popular demonstrations.\n[…]\nCamões' fame began to spread across Spain, where he had several admirers since the 16th century, with two translations of Os Lusíadas appearing in 1580, the year of the poet's death, possibly printed at the behest of Philip II of Spain, who at the time was also the king of Portugal. In Luis Gómez de Tápia's edition, Camões is already mentioned as \"famous\", and in Benito Caldera's he was compared to Virgil.\n[…]\nThe Parnasum of Luís Vaz (lost)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_de_Portugal%2C_de_Cam%C3%B5es_e_das_Comunidades_Portuguesas",
        "situacao": "ok",
        "texto": "O Dia de Portugal, de Camões e das Comunidades Portuguesas celebra a data de 10 de Junho de 1580, data da morte de Camões, sendo também este o dia dedicado ao Anjo Custódio de Portugal. Este é também o dia da Língua Portuguesa, dos cidadãos e das Forças Armadas.\n[…]\nA primeira referência ao caráter festivo do dia 10 de Junho é no ano 1880 por um decreto real de D. Luís I que declara \"Dia de Festa Nacional e de Grande Gala\" para comemorar apenas nesse ano os 300 anos da hipotética data da morte de Luís de Camões, 10 de junho de 1580. A data foi comemorada nesse ano em grande parte devido à iniciativa de Teófilo Braga, destacado intelectual republicano.\n[…]\nA 2 de Fevereiro de 1924 é publicada a Lei n.º 1.540, que determina que o dia 5 de Fevereiro de 1924 seja considerado feriado nacional em honra do imortal poeta Luís de Camões.\n[…]\nA 4 de Janeiro de 1952 procede-se à revisão dos feriados nacionais através do Decreto n.º 38.596. Este institui o dia 10 de Junho como \"Dia de Portugal\", consagrado à Festa Nacional, comemorativo de Camões, pelo alto valor nacional e pela projecção universal da obra do nosso grande épico, na qual se consubstanciam as maiores glórias dos Descobrimentos.\n[…]\nAté ao 25 de Abril de 1974, o 10 de Junho era conhecido como o Dia de Camões, de Portugal e da Raça, este último epíteto criado por Salazar na inauguração do Estádio Nacional do Jamor em 1944. A partir de 1963, o 10 de Junho tornou-se numa homenagem às Forças Armadas Portuguesas, numa exaltação da guerra e do poder colonial. Com uma filosofia diferente, a Terceira República converteu-o no Dia de Portugal, de Camões e das Comunidades Portuguesas em 1978.\n[…]\nEm 2015 o evento foi realizado no domingo, 14 de Junho, em Streatham Common Park, Londres.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Os Miseráveis",
      "descricao": "Romance de Victor Hugo, publicado em 1862, sobre o ex-presidiário Jean Valjean na França do século dezenove."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No início de Os Miseráveis, Jean Valjean sai de dezenove anos na prisão. Que crime o levou à cadeia?",
    "resposta": "Roubar um pão",
    "distratores": [
      "Furtar um cavalo",
      "Agredir um padre",
      "Caçar ilegalmente"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jean_Valjean"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jean_Valjean",
        "situacao": "ok",
        "texto": "Jean Valjean (French: [ʒɑ̃ val.ʒɑ̃]) is the protagonist of Victor Hugo's 1862 novel Les Misérables. The story depicts the character's struggle to lead a normal life and redeem himself after serving a 19-year-long prison sentence for stealing bread to feed his sister's starving children and attempting to escape from prison. Valjean is also known in the novel as Monsieur Madeleine, Ultime Faucheleve\n[…]\nGiven the high range of the role, particularly in parts of Bring Him Home, Valjean is most often played by a tenor.\n[…]\nSince the original publication of Les Misérables in 1862, the character of Jean Valjean has been in a large number of adaptations in numerous types of media based on the novel, such as books, films, musicals, plays and games.\n[…]\nMany notable actors have portrayed the role on screen, including Fredric March, Jean Gabin, Frank Finlay, Georges Géret, Richard Jordan, Lino Ventura, Liam Neeson, Gérard Depardieu, Dominic West and Hugh Jackman, the last of whom received his first nomination for the Academy Award for Best Actor and won the Golden Globe Award for Best Actor – Motion Picture Musical or Comedy for playing Valjean in the 2012 film adaptation of the musical.\n[…]\nWilliam A Quayle. A Hero: Jean Valjean. Jennings & Pye. Cincinnati. Eaton & Mains. New York. 1902. Internet Archive.\n[…]\nGordon Leah, \"Providence, Duty, Love: The Regeneration of Jean Valjean in Victor Hugo's Les Misérables\" (2017) 59 The Heythrop Journal 24 Wiley Online Library\n[…]\nJoy VanBuskirk, \"Social Construction in Les Miserables: A Look at Jean Valjean's Identity Formation in the Context of Symbolic Interactionism's Labeling Theory\" (2005) English Seminar Capstone Research Papers 8 Cedarville University\n[…]\nFatma Dore, \"Jean Valjean's Dilemma and Utilitarian Ethics\" (2017) 90 Folklor / Edebiyat 147 ProQuest Cyprus International University\n[…]\nSearch for Jean Valjean at the Internet Broadway Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jean_Valjean",
        "situacao": "ok",
        "texto": "Jean Valjean é o protagonista do romance de Victor Hugo, Os Miseráveis, de 1862. A história retrata a luta de 19 anos do personagem para levar uma vida normal depois de cumprir uma pena de prisão por roubar pão para alimentar os filhos de sua irmã durante um período de depressão econômica e várias tentativas de escapar da prisão. Valjean também é conhecido no romance como Monsieur Madeleine, Ultim\n[…]\nMadeleine, fica chocado que Valjean, ao mencionar uma data que outro condenado tatuou em si mesmo (para provar que M. Madeleine era na verdade Jean Valjean) chamou Napoleão Bonaparte de \"o Imperador\" em vez de \"Bonaparte\" e ordena que Valjean seja preso por roubar Petit Gervais. Javert vem prendê-lo no dia seguinte enquanto Valjean está no quarto de Fantine.\n[…]\nValjean reconhece Javert e, levando Cosette, sai do casebre e vai embora. Eles mal conseguem fugir de Javert, que permitiu que Valjean saísse de casa, acreditando que Valjean o levaria para conhecer outros criminosos. Valjean conseguiu roubar uma corda de um poste de luz, escalar uma parede para um convento e puxar Cosette atrás dele. Eles então desceram um telhado de galpão em um jardim.\n[…]\nÉ nesse momento que Javert entra em cena. Valjean consegue escapar antes que este o reconheça.\n[…]\nJavert frequentemente se refere a Jean Valjean como \"Prisioneiro 24601\", o que nunca acontece no livro. O número aparece apenas duas vezes no romance e nunca é falado por Javert. É apenas o primeiro código de prisão de Valjean no romance, mas seu único código no musical. Foi escolhido por Victor Hugo quando acreditou ter sido concebido em 24 de junho de 1801 (ou seja, 24-6-01).\n[…]\nDesde a publicação original de Os Miseráveis em 1862, o personagem de Jean Valjean tem estado em um grande número de adaptações em vários tipos de mídia baseados no romance, como livros, filmes, musicais, peças de teatro e jogos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Irmãos Grimm",
      "descricao": "Jacob e Wilhelm Grimm, estudiosos e escritores alemães que reuniram contos populares."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Na versão dos irmãos Grimm para Cinderela, as meias-irmãs cortam partes dos próprios pés. Por que fazem isso?",
    "resposta": "Para caber no sapato",
    "distratores": [
      "Por castigo do príncipe",
      "Para enganar a madrasta",
      "Para dançar melhor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cinderella"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cinderella",
        "situacao": "ok",
        "texto": "Cinderella (or The Little Glass Slipper) is a folk tale with thousands of variants that are told throughout the world. The protagonist is a young girl living in unfortunate circumstances who is suddenly blessed with remarkable fortune, ultimately ascending to the throne through marriage.\n[…]\nThe Brothers Grimm do not tell a rags to riches story, the \"Cinderella\" fairy tale is a riches to rags to riches story of social mobility, reflecting the Brothers Grimm own experience. Following their father's death, the two had worked their way back.\n[…]\nThe glass slipper is unique to Charles Perrault's version and its derivatives; in other versions of the tale it may be made of other materials (in the version recorded by the Brothers Grimm, German: Aschenbroedel and Aschenputtel, for instance, it is gold) and in still other tellings, it is not a slipper but an anklet, a ring, or a bracelet that gives the prince the key to Cinderella's identity. What matters to the story is that the identifying item will fit only one woman.\n[…]\nInto the Woods, a musical with music and lyrics written by Stephen Sondheim and book by James Lapine. Cinderella, in this adaptation is partly based on the Grimm Brothers' version of Cinderella, including the enchanted birds, mother's grave, three balls, and mutilation and blinding of the stepsisters. It opened on Broadway in 1987, and has won many awards, such as Best Score and Book of a Musical in the 1988 Tony Awards.\n[…]\nThe Grimm Variations (2024), a Japanese anime Netflix anthology, features an episode retells the story, with the Cinderella character portrayed as a sinister girl called Kiyoko, who likes to treat those around her as dolls.\n[…]\nCinderella complex\n[…]\nCinderella effect\n[…]\nParallel German-English text of brothers Grimm's version in ParallelBook format"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cinderela",
        "situacao": "ok",
        "texto": "Cinderela é um dos contos de fadas mais populares da Humanidade.\n[…]\nNeste caso, Cinderela sabe palavras mágicas, usadas no imperativo, que auxiliam na transformação de seu pedido em realidade. No final, as irmãs malvadas ficam cegas quando são atacadas por pombos que lhes furam os olhos. Segundo outras versões a figura da fada madrinha na verdade é o espírito da falecida mãe da própria protagonista que trazia um vestido do céu para Cinderela usar no baile.\n[…]\nInto the Woods de Stephen Sondheim (1988), onde Cinderela é um de vários personagens de contos de fadas que participam do enredo. Isso é parcialmente baseado na versão dos Irmãos Grimm de \"Cinderela,\" incluindo os pássaros encantados, túmulo da mãe, e mutilação e cegando as irmãs.\n[…]\nYear of the Fish (2008), filme baseado na versão chinesa da história da Cinderela.\n[…]\nRags (2012) Um filme original da Nickelodeon estrelado por Keke Palmer.o menino chamado Charlie é o \"gato borralheiro\", seu padrasto e dois meio-irmãos são a família adotiva, sua mãe está morta como na história, seu transporte é uma bicicleta, seu fada madrinha é um homem e é engenheiro de música, o rei e a princesa são pai e filha, que são famosos por serem uma popstar e um produtor musical de uma grande empresa, e o sapato perdido é um CD.\n[…]\nO episódio A Doméstica de Vitória do seriado As Brasileiras (2012) retrata a vida da diarista Cleonice (Dira Paes) que sofre nas mãos na patroa, mas depois de uma noite de luxo, chegando até a perder o sapato na escada, envolve-se com um homem rico.\n[…]\n« Ler história da Cinderela para dormir »",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Charles Dickens",
      "descricao": "Romancista inglês da era vitoriana, autor de Oliver Twist e David Copperfield."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Aos doze anos, Charles Dickens foi trabalhar numa fábrica de graxa para sapatos. O que levou a família a essa situação?",
    "resposta": "Prisão do pai por dívidas",
    "distratores": [
      "Morte do pai",
      "Incêndio na casa",
      "Doença da mãe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Dickens"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Dickens",
        "situacao": "ok",
        "texto": "Charles John Huffam Dickens ( ; 7 February 1812 – 9 June 1870) was an English writer and journalist. He created some of literature's best-known fictional characters, and is regarded by many as the greatest novelist of the Victorian era. His works enjoyed unprecedented popularity during his lifetime and, by the 20th century, critics and scholars had recognised him as a literary genius. His novels a\n[…]\nCharles Dickens bibliography\n[…]\nRacism in the work of Charles Dickens\n[…]\n\"Dickens, Charles\" . Dictionary of National Biography. London: Smith, Elder & Co. 1885–1900.\n[…]\nCharles Dickens's works on Bookwise\n[…]\nWorks by Charles Dickens in eBook form at Standard Ebooks\n[…]\nWorks by Charles Dickens at Project Gutenberg\n[…]\nWorks by Charles Dickens at Faded Page (Canada)\n[…]\nWorks by or about Charles Dickens at the Internet Archive\n[…]\nWorks by Charles Dickens at LibriVox (public domain audiobooks)\n[…]\nOnline books, and library resources in your library and in other libraries by Charles Dickens\n[…]\nCharles Dickens at the British Library. Archived 24 June 2021 at the Wayback Machine.\n[…]\n\"Archival material relating to Charles Dickens\". UK National Archives.\n[…]\nPortraits of Charles Dickens at the National Portrait Gallery, London\n[…]\nCharles Dickens on the Archives Hub\n[…]\nCorrespondence of Charles Dickens, with related papers, ca. 1834–1955\n[…]\nFinding aid to Charles Dickens papers at Columbia University. Rare Book & Manuscript Library.\n[…]\nDickens on In Our Time at the BBC\n[…]\nCharles Dickens's Traveling Kit From the John Davis Batchelder Collection at the Library of Congress\n[…]\nCharles Dickens's Walking Stick From the John Davis Batchelder Collection at the Library of Congress\n[…]\nCharles Dickens Collection: First editions of Charles Dickens's works included in the Leonard Kebler gift (dispersed in the Division's collection). From the Rare Book and Special Collections Division at the Library of Congress\n[…]\nCharles Dickens at IMDb\n[…]\nCharles Dickens at LibraryThing"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Dickens",
        "situacao": "ok",
        "texto": "Charles John Huffam Dickens (Portsmouth, 7 de fevereiro de 1812 – Higham, 9 de junho de 1870) foi o mais popular dos romancistas ingleses da era vitoriana. No início de sua atividade literária também adotou o apelido Boz. As suas obras gozaram de uma popularidade sem precedentes ainda durante a sua vida e, durante o século XX, críticos e académicos reconheceram-no como um génio literário. Os seus \n[…]\nNascido em Portsmouth, Dickens saiu da escola aos 12 anos para ir trabalhar numa fábrica de graxa para sapatos. Na altura, o seu pai encontrava-se preso numa prisão civil. Após três anos de trabalho, ele voltou a estudar, tendo depois iniciado uma carreira como jornalista. Dickens foi editor de um jornal semanal durante 20 anos, escreveu 15 romances, cinco livros curtos, centenas de contos e artigos de não-ficção, para além de ter dado seminários e feito leituras ao vivo.\n[…]\nCom doze anos, Dickens já tinha a idade considerada necessária para trabalhar na empresa Warren’s onde se produzia graxa para os sapatos com betume, junto à atual Estação ferroviária de Charing Cross. O seu trabalho consistia em colar rótulos nos frascos de graxa, ganhando, por isso, seis xelins por semana. Durante esta época, Charles viveu com Elizabeth Roylance, uma amiga da família, no número 112 da rua College Place em Camden Town. A Sra.\n[…]\nAlguns meses depois de ser preso, a mãe de John Dickens, Elizabeth Dickens, morreu e deixou-lhe 450 libras, uma quantia que permitiu que a família saísse da prisão e fosse viver para a casa de Elizabeth Roylance. No entanto, a mãe de Charles não o retirou logo da fábrica, que pertencia a um amigo. Dickens jamais perdoaria à mãe por essa injustiça.\n[…]\nCharles Culliford Boz Dickens (6 de Janeiro de 1837 – 1896);\n[…]\nForster, John (2006). Life of Charles Dickens (em inglês). [S.l.]: Diderot Publishing. 629 páginas. ISBN 9789077932032. Consultado em 15 de janeiro de 2012",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Alexandre Pushkin",
      "descricao": "Poeta e romancista russo do Romantismo, autor de Eugênio Onêguin."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O bisavô materno do poeta russo Pushkin, levado ainda criança para a corte de Pedro, o Grande, nasceu em que continente?",
    "resposta": "África",
    "distratores": [
      "Ásia",
      "América do Sul",
      "Oceania"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Abram_Petrovich_Gannibal",
      "https://en.wikipedia.org/wiki/Alexander_Pushkin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abram_Petrovich_Gannibal",
        "situacao": "ok",
        "texto": "Abram Petrovich Gannibal, also Hannibal or Ganibal, or Abram Hannibal or Abram Petrov (Russian: Абра́м Петро́вич Ганниба́л; c. 1696 – 14 May 1781), was a Russian Chief Military Engineer, General-in-Chief, and nobleman of African origin. As a child, Gannibal was captured by Ottomans and brought to Russia as a gift for Peter the Great. He was then raised in the emperor's court, with the emperor beco\n[…]\nThe governments of Ethiopia and Eritrea each claim that Gannibal was born in their respective territories. Under this belief, the Ethiopian government named a street in Addis Ababa after Alexander Pushkin, Gannibal's great-grandson. It also placed a bust of him near the African Union headquarters in 2002, and arranged for a statue of Pushkin to be transferred from Moscow to Addis Ababa in 2014.\n[…]\nThe Beninese historian Dieudonné Gnammankou, an expert on Russia, studied Russian, French and African sources and argued that Gannibal was indeed from Logone-Birni and was most likely the son of a chief in the ancient sultanate. In 1995, Gnammankou asserted that the \"Logon\" Gannibal wrote about was actually Logone, capital of the old Kotoko kingdom of Logone-Birni, now located in northern Cameroon.\n[…]\nGnammankou's findings were in turn buttressed by the field work of Hugh Barnes. After consulting with the Sultan of Logone-Birni, Barnes found that an inscription on Gannibal's crest, which was hitherto undecipherable, corresponded with the term for \"homeland\" in the local Kotoko language of central Africa. However, Frances Somers-Cocks, author of The Moor of St Petersburg: In the Footsteps of a Black Russian, met the same sultan and received a different translation for FVMMO.\n[…]\nЖизнь Ганнибала – прадеда Пушкина [The Life of Hannibal, Pushkin's Great Grandfather] by Наталья Константиновна Телетова [Natalja Konstantinovna Teletova], hardback, St. Petersburg 2004. ISBN 5-94921-004-2."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Pushkin",
        "situacao": "ok",
        "texto": "Alexander Sergeyevich Pushkin (6 June [O.S. 26 May] 1799 – 10 February [O.S. 29 January] 1837) was a Russian poet, playwright, and novelist of the Romantic era. He is considered by many to be the greatest Russian poet, as well as the founder of modern Russian literature.\n[…]\nPushkin was born into the Russian nobility in Moscow. His father, Sergey Lvovich Pushkin, belonged to an old noble family. One of his maternal great-grandfathers was Abram Petrovich Gannibal, a nobleman and military general of African origin who was kidnapped from his homeland by the Ottomans, then freed by Peter the Great and raised in the Emperor's court household as his godson.\n[…]\nOssip Abramovich Gannibal's father, Pushkin's great-grandfather, was Abram Petrovich Gannibal (1696–1781), an African page kidnapped and taken to Constantinople as a gift for the Ottoman Sultan and later transferred to Russia as a gift for Peter the Great. Abram wrote in a letter to Empress Elizabeth, Peter the Great's daughter, that he was from the town of \"Lagon\", largely on the basis of a mythical biography by Gannibal's son-in-law Rotkirch.\n[…]\nAuthorities summoned Pushkin to Moscow after his poem Ode to Liberty was found among the belongings of the rebels from the Decembrist Uprising (1825). After his exile in 1820 Pushkin's friends and family continually petitioned for his release, sending letters and meeting Emperor Alexander I and then Emperor Nicholas I on the heels of the Decembrist Uprising.\n[…]\nThe Serbian poet and ruler Petar II Petrović-Njegoš included a poetic ode to Pushkin, titled Sjeni Aleksandra Puškina (To the Shadow of Alexander Pushkin), in his 1846 poetry collection Ogledalo srpsko (The Serbian Mirror).\n[…]\nAlexander Pushkin poetry(rus)\n[…]\n(in Russian) Alexander Pushkin Fairy Tales: Russian Text"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abram_Petrovich_Gannibal",
        "situacao": "ok",
        "texto": "Abram Petrovich Gannibal ou  Hannibal (Etiópia, 1696 - Rússia, 1781) foi o primeiro intelectual negro da Europa.\n[…]\nAbram permaneceu no Império Otomano durante cerca de um ano ao serviço da casa do sultão Ahmed III. Na época, o embaixador russo, Sava Vladislavich-Raguzinsky, representando o czar Pedro o Grande, procurava \"alguns escravos africanos espertos\" para o palácio do czar em Moscou, como era costume naqueles dias, nas grandes cortes da Europa.\n[…]\nPor ordem dos superiores de Vladislavich (um dos quais era Pyotr Andreyevich Tolstoi, bisavô do célebre escritor Leon Tolstoi), Abram foi seleccionado para este fim e logo resgatado dos vizires do sultão, provavelmente mediante suborno. Em 1704, o embaixador despachou-o imediatamente, por terra, para Moscou, a fim de ser apresentado a Pedro, o Grande.\n[…]\nGannibal foi casado por duas vezes. Do primeiro casamento, não teve filhos. Do segundo, com a aristocrata Cristina Regina Siöberg, filha de Mattias Johann Siöberg (filho de Gustaf, conde de Estrup e de Clara Maria Lauritsdatter Galtung) e de Cristina Elisabeth d' Albedyll, teve dez filhos, incluindo  Ossip Abramovich Gannibal. Este, por sua vez, teve uma filha, Nadejda Ossipovna Hanniballa, que viria a ser a mãe de Alexander Pushkin.\n[…]\nAlguns aristocratas britânicos descendem de Gannibal, incluindo Natalia Grosvenor, Duquesa de Westminster e sua irmã, Alexandra Hamilton, Duquesa de Abercorn. George Mountbatten, 4º Marquês de Milford Haven, primo da rainha Elizabeth II, é também seu descendente direto, já que é neto de Nadejda Mountbatten, Marquesa de Milford Haven.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Arthur Rimbaud",
      "descricao": "Poeta francês do século dezenove, autor de Iluminações e Uma Temporada no Inferno."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Depois de abandonar a poesia ainda jovem, Arthur Rimbaud virou comerciante na cidade de Harar. Em que país africano ela fica?",
    "resposta": "Etiópia",
    "distratores": [
      "Egito",
      "Sudão",
      "Somália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Arthur_Rimbaud"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arthur_Rimbaud",
        "situacao": "ok",
        "texto": "Jean Nicolas Arthur Rimbaud (UK: , US: ; French: [ʒɑ̃ nikɔla aʁtyʁ ʁɛ̃bo] ; 20 October 1854 – 10 November 1891) was a French poet known for his transgressive and surreal themes and for his influence on modern literature and arts, prefiguring surrealism.\n[…]\nRimbaud was a prolific correspondent and his letters provide vivid accounts of his life and relationships. \"Rimbaud's letters concerning his literary life were first published by various periodicals. In 1931 they were collected and published by Jean-Marie Carré. Many errors were corrected in the [1946] Pléiade edition. The letters written in Africa were first published by Paterne Berrichon, the poet's brother-in-law, who took the liberty of making many changes in the texts.\"\n[…]\nProses \"évangeliques\" (1872–1873) – three prose texts, one published in La revue blanche, September 1897, the two others in Le Mercure de France, January 1948 (no title was given by Arthur Rimbaud)\n[…]\nLettres de Jean-Arthur Rimbaud – Égypte, Arabie, Éthiopie (1880–1891) – published by Paterne Berrichon in 1899 (with many contentious edits)\n[…]\n1979: David Wojnarowicz's photographic series \"Arthur Rimbaud in New York\", which contrasts Rimbaud's face with life in New York City in the late 1970s.\n[…]\nHans Krása, Three Songs to texts of Arthur Rimbaud, 1943 (Sensation, Les Amis, L’étoile a pleuré rose), recorded by Christian Gerhaher\n[…]\nDenise Roger: 3 Poèmes d'Arthur Rimbaud (1966)\n[…]\nWorks by Arthur Rimbaud at Project Gutenberg\n[…]\nWorks by or about Arthur Rimbaud at the Internet Archive\n[…]\nWorks by Arthur Rimbaud at LibriVox (public domain audiobooks)\n[…]\nArthur Rimbaud – Poets.org\n[…]\nArthur Rimbaud's Life and Poetry – French and English\n[…]\n(in French) Arthur Rimbaud, his work in audio version Archived 24 April 2021 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arthur_Rimbaud",
        "situacao": "ok",
        "texto": "Jean-Nicolas Arthur Rimbaud (pronúncia em francês: ​[aʁtyʁ ʁɛ̃bo] (); Charleville, 20 de outubro de 1854 – Marselha, 10 de novembro de 1891) foi um poeta francês considerado um dos principais expoentes do decadentismo. Sua obra poética, produzida entre os seus quinze e vinte anos, influenciou significativamente o simbolismo e a poesia moderna.\n[…]\nEm 1880, Rimbaud finalmente adaptou-se em Adem, no Iêmem, como um empregado principal na agência de Bardey. Em 1884, ele deixou o trabalho na Bardey para se tornar um mercador por conta própria em Harar, Etiópia. Notavelmente, as vendas de Rimbaud incluíam café e armas. Nesse período, fez uma grande amizade com o governador de Harare, Ras Makonnen, pai do futuro imperador da Etiópia, Haile Selassie.\n[…]\nLá, após algum tempo de sofrimento e eventuais visitas de sua irmã Isabelle, Rimbaud morreu a 10 de novembro de 1891, com apenas 37 anos, e seu corpo foi enterrado no jazigo da família na cidade de Charleville.\n[…]\nRimbaud que partiu para traficar armas de fogo no norte da África de um lado e deu cor às vogais (revista em Alquimia do Verbo) por outro, tornou-se uma referência para a poesia no século seguinte: servindo como argumento à tese que nascia sobre a impossibilidade de ser considerada a dissociação entre o poeta e sua poesia.[carece de fontes]?\n[…]\nO norte-americano Henry Miller, um dos grandes admiradores da poesia simbolista de Rimbaud, diz, diante disso, que Rimbaud chegará a superar clássicos comportamentos; como o introspectivo e inquieto jovem estampado pelo personagem Hamlet, de Shakespeare. \"Acho que existem muitos Rimbauds neste mundo afora e que esse número aumentará com o passar dos anos. Também acho que Rimbaud vai eliminar, do mundo futuro, Hamlet e Fausto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Os Lusíadas",
      "descricao": "Poema épico de Luís de Camões, publicado em 1572, sobre a viagem de Vasco da Gama à Índia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em quantos cantos se divide o poema épico Os Lusíadas, de Camões?",
    "resposta": "Dez",
    "distratores": [
      "Doze",
      "Oito",
      "Vinte e quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Os_Lus%C3%ADadas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Os_Lus%C3%ADadas",
        "situacao": "ok",
        "texto": "Os Lusíadas (Portuguese pronunciation: [uʒ luˈzi.ɐðɐʃ]), usually translated as The Lusiads, is a Portuguese epic poem written by Luís Vaz de Camões (c. 1524/5 – 1580) and first published in 1572. It is widely regarded as the most important work of Portuguese-language literature and is frequently compared to Virgil's Aeneid (1st c. BC). The work celebrates the discovery of a sea route to India by t\n[…]\nWritten in Homeric fashion, the poem focuses mainly on a fantastic interpretation of the Portuguese voyages of discovery during the 15th and 16th centuries. Os Lusíadas is often regarded as Portugal's national epic, much as Virgil's Aeneid was for the Ancient Romans, or Homer's Iliad and Odyssey for the Ancient Greeks. It was written when Camões was an exile in Macau and was first printed in 1572, three years after the author returned from the Indies.\n[…]\nThe narration concludes with an epilogue, starting in stanza 145 of canto X. The most important part of Os Lusíadas, the arrival in India, was placed at the point in the poem that divides the work according to the golden section at the beginning of Canto VII.\n[…]\nThe Adamastor episode is divided into three segments. The first, a theophany, goes from stanza 37 to 40; the second, which in chronological-narrative terms is a prolepsis, occupies strophes 41 to 48; finally, the third part, a marine eclogue with some points of contact with Écloga III of Camões, ends in stanza 59.\n[…]\nOs Lusíadas at Project Gutenberg\n[…]\nThe Lusiads of Camoens (in English), translated by John James Aubertin, first part.\n[…]\nThe Lusiads of Camoens (in English), translated by John James Aubertin, second part.\n[…]\nO Primeiro Canto dos Lusíadas em Inglez, trans. James Edwin Hewitt.\n[…]\nOs Lusíadas (in Portuguese), online edition stanza by stanza\n[…]\nOs Lusíadas (in Portuguese), full text provided by Project Gutenberg\n[…]\nOs Lusíadas From the Collections at the Library of Congress"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Lus%C3%ADadas",
        "situacao": "ok",
        "texto": "Os Lusíadas é uma obra de poesia épica do escritor português Luís Vaz de Camões, a primeira epopeia portuguesa publicada em versão impressa. Provavelmente iniciada em 1556 e concluída em 1571, foi publicada em Lisboa a 12 de março de 1572, no período literário do Classicismo, ou Renascimento tardio, três anos após o regresso do autor do Oriente, via Moçambique.\n[…]\nO poema épico mais genuíno é o canto da construção duma nação com a ajuda de Deus ou dos deuses. Os Lusíadas, como já a Eneida, é uma epopeia moderna, em que o maravilhoso não passa dum artifício necessário, mas só literário. A fé única no Deus cristão é defendida por toda a obra.\n[…]\n“Aemulatio” é uma prática onde o autor da obra procura não somente imitar, como superar os modelos antigos. Em Eneida, é traçada a história heroica de Eneias e em Lusíadas, temos Vasco da Gama em suas grandes navegações. Além dos heróis viajantes, Camões também traz para sua epopeia temas virgilianos como a intervenção dos Deuses e a exaltação patriótica, tanto em Eneida com a exaltação de Roma e Augusto, quanto em Lusíadas e sua glorificação da nação portuguesa.\n[…]\nEm 2006 foi publicada outra BD (HQ) com o nome de Lusíadas 2500, uma nova leitura da obra de Camões, desta vez num ambiente futurístico de ficção científica, por Lailson de Holanda Cavalcanti (ISBN 85-04-01037-6)\n[…]\nAmbos Os Lusíadas de Camões e a banda desenhada de José Ruy foram traduzidos para o mirandês, língua minoritária do nordeste de Portugal, por Amadeu Ferreira e Fracisco Niebro, respetivamente.\n[…]\n\"Os Lusíadas\", de Luís de Camões, Grandes Livros, Companhia de Ideias, 2009\n[…]\nOs Lusíadas: um poema épico e crítico, por Paula Moura Pinheiro, Câmara Clara (Extrato de Programa Cultural), RTP, 2007\n[…]\nCamões e Os Lusíadas, Português - Camões e Os Lusíadas - 10.º ano- aula 1, Secretaria Regional de Educação da Madeira, 2020",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Ebenezer Scrooge",
      "descricao": "Velho avarento protagonista de Um Conto de Natal, de Charles Dickens, publicado em 1843."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Um Conto de Natal, depois da visita do fantasma do sócio Marley, quantos espíritos aparecem para Scrooge?",
    "resposta": "Três",
    "distratores": [
      "Dois",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/A_Christmas_Carol"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/A_Christmas_Carol",
        "situacao": "ok",
        "texto": "A Christmas Carol. In Prose. Being a Ghost Story of Christmas, commonly known as A Christmas Carol, is a novella by Charles Dickens, first published in London by Chapman & Hall in 1843 and illustrated by John Leech. It recounts the story of Ebenezer Scrooge, an elderly miser who is visited by the ghost of his former business partner Jacob Marley and the spirits of Christmas Past, Present and Yet t\n[…]\nA Christmas Carol opens on a bleak, cold Christmas Eve in London, seven years after the death of Ebenezer Scrooge's business partner, Jacob Marley. Scrooge, an ageing miser, dislikes Christmas and refuses a dinner invitation from his nephew Fred. He turns away two men seeking a donation to provide food and heating for the poor and only grudgingly allows his overworked, underpaid clerk, Bob Cratchit, Christmas Day off with pay to conform to the social custom.\n[…]\nWhen Dickens was young he lived near a tradesman's premises with the sign \"Goodge and Marney\", which may have provided the name for Scrooge's former business partner. For the chained Marley, Dickens drew on his memory of a visit to the Western Penitentiary in Pittsburgh, Pennsylvania, in March 1842, where he saw—and was affected by seeing—fettered prisoners. For the character Tiny Tim, Dickens used his nephew Henry, a disabled boy who was five at the time A Christmas Carol was written.\n[…]\nIn 1901 it was produced as Scrooge, or, Marley's Ghost, a silent black-and-white British film; it was one of the first known adaptations of a Dickens work on film, but it is now largely lost. The story was adapted in 1923 for BBC radio. It has been adapted to other media, including opera, ballet, animation, stage musicals and a BBC mime production starring Marcel Marceau.\n[…]\nIn the 1960s, Scrooge was sometimes portrayed as a Freudian figure wrestling with his past. By the 1980s he was again set in a world of depression and economic uncertainty."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Christmas_Carol",
        "situacao": "ok",
        "texto": "A Christmas Carol é um livro da autoria de Charles Dickens. Com várias traduções em Português, sendo uma delas Um Conto de Natal, o livro foi escrito em menos de um mês originalmente para pagar dívidas, mas tornou-se um dos maiores clássicos natalinos de todos os tempos e uma das mais célebres obras de Dickens. O autor descreveu-o como o seu \"livrinho de Natal\", e foi primeiramente publicado em 18\n[…]\nNuma véspera de Natal Scrooge recebe a visita do seu ex-sócio Jacob Marley, morto há sete anos naquele mesmo dia. Marley diz que o seu espírito não pode descansar em paz, já que não foi bom nem generoso em vida, mas que Scrooge tem uma chance, e que três espíritos o visitarão.\n[…]\nApós a visita dos três espíritos, Scrooge amanhece como um outro homem. Passa a amar o espírito de Natal, e a ser generoso com os que precisam, e a ajudar o seu empregado Bob Cratchit, tornando-se um segundo pai para Pequeno Tim. Diz-se que ninguém celebrava o Natal com mais entusiasmo que ele.\n[…]\nOutra referência feita é no filme O Expresso Polar, com Tom Hanks. Nele o protagonista que não acredita em Natal passa por um vagão no trem atulhado de bonecos. Uma marionete de nariz aquilino apresenta-se como Ebenezer Scrooge e o chama de cético.\n[…]\nHouve também em 1988 uma releitura moderna em Scrooged, onde Bill Murray interpreta o presidente arrogante e sádico, de uma grande empresa de comunicação que é visitado na véspera de natal pelos três fantasmas do natal.\n[…]\nO filme Barbie em a Canção de Natal é considerada a versão feminina de A Christmas Carol. A história fala de Eden Starling, uma cantora famosa (porém egoísta) que odeia o Natal. Há personagens que são análogos: Eden Starling (Ebenezer Scrooge), Catherine Britto (Bob Cratchit) e Marie (Jacob Marley).\n[…]\nEm 2009, a Disney lança o filme em 3D, Os Fantasmas de Scrooge, no qual Jim Carrey interpreta Scrooge e todos os fantasmas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Salman Rushdie",
      "descricao": "Escritor britânico de origem indiana, nascido em 1947, autor de Os Filhos da Meia-Noite."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em Os Filhos da Meia-Noite, de Salman Rushdie, o narrador nasce exatamente na meia-noite que marca que acontecimento?",
    "resposta": "Independência da Índia",
    "distratores": [
      "Assassinato de Gandhi",
      "Fim da Segunda Guerra",
      "Coroação de Jorge Sexto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Midnight%27s_Children"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Midnight%27s_Children",
        "situacao": "ok",
        "texto": "Midnight's Children is the second novel by Indian-British writer Salman Rushdie, published in 1981 by Jonathan Cape with cover design by Bill Botten, about India's transition from British colonial rule to independence and partition. It is a postcolonial, postmodern and magical realist story told by its chief protagonist, Saleem Sinai, set in the context of historical events. The style of preservin\n[…]\nMidnight's Children is a loose allegory for events in 1947 British Raj India and after the partition of India. The protagonist and narrator of the story is Saleem Sinai, born at the exact moment when India became an independent country. The novel is divided into three books.\n[…]\nThe first book begins with the story of the Sinai family, particularly with events leading up to the fall of British Colonial India and the partition. Saleem is born precisely at midnight, 15 August 1947, therefore, exactly as old as independent India. He later discovers that all children born in India between 12 a.m. and 1 a.m. on that date are imbued with special powers.\n[…]\nHe also notes that, \"the narrative comprises and compresses Indian cultural history.\" \"'Once upon a time,' Saleem muses, 'there were Radha and Krishna, and Rama and Sita, and Laila and Majnun; also (because we are not unaffected by the West) Romeo and Juliet, and Spencer Tracy and Katharine Hepburn' (259).\" Stewart (citing Hutcheon) suggests that Midnight's Children chronologically entwines characters from both India and the West, \"with post-colonial Indian history to examine both the effect of these indigenous and non-indigenous cultures on the Indian mind and in the light of Indian independence.\"\n[…]\nAs Rushdie writes, “I once took part in a conference on modern writing at New College, Oxford.\n[…]\nBBC Radio 4 broadcast a dramatic adaptation in 2017 at the 70th anniversary of Indian independence, repeated in five parts in 2021."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "As Mil e Uma Noites",
      "descricao": "Coletânea de contos do mundo árabe e persa, reunidos ao longo de séculos, narrados numa moldura em que uma jovem conta histórias a um rei."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Aladim e Ali Babá não aparecem nos manuscritos árabes antigos das Mil e Uma Noites. Que tradutor francês os incluiu no século dezoito?",
    "resposta": "Antoine Galland",
    "distratores": [
      "Charles Perrault",
      "Voltaire",
      "Jean de La Fontaine"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Antoine_Galland",
      "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antoine_Galland",
        "situacao": "ok",
        "texto": "Antoine Galland (French: [ɑ̃twan ɡalɑ̃]; 4 April 1646 – 17 February 1715) was a French orientalist and archaeologist, most famous as the first European translator of One Thousand and One Nights, which he called Les mille et une nuits. His version of the tales appeared in twelve volumes between 1704 and 1717 and exerted a significant influence on subsequent European literature and attitudes to the \n[…]\nGalland had come across a manuscript of The Tale of Sindbad the Sailor in Constantinople during the 1690s and, in 1701, he published his translation of it into French. Its success encouraged him to embark on a translation of a fourteenth- or fifteenth-century Syrian manuscript (now known as the Galland Manuscript) of The Thousand and One Nights. The first two volumes of this work, under the title Mille et Une Nuits, appeared in 1704.\n[…]\nMystery surrounds the origins of some of the most famous tales. For instance, there are no Arabic versions of Aladdin and Ali Baba (the so-called \"orphan tales\") which pre-date Galland's edition. Galland wrote down these tales from the words of Hanna Diyab.\n[…]\nThe most famous and eloquent encomiums of The Thousand and One Nights – by Coleridge, Thomas de Quincey, Stendhal, Tennyson, Edgar Allan Poe, Newman – are from readers of Galland's translation. Two hundred years and ten better translations have passed, but the man in Europe or the Americas who thinks of the Thousand and One Nights thinks, invariably, of this first translation. The Spanish adjective milyunanochesco [thousand-and-one-nights-esque] ...\n[…]\nhas nothing to do with the erudite obscenities of Burton or Mardrus and everything to do with Antoine Galland's bijoux and sorceries.\n[…]\nWorks by Antoine Galland at Project Gutenberg\n[…]\nWorks by or about Antoine Galland at the Internet Archive\n[…]\nWorks by Antoine Galland at LibriVox (public domain audiobooks)\n[…]\nAntoine Galland by Maxime de Sars (in French)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
        "situacao": "ok",
        "texto": "One Thousand and One Nights or The Thousand and One Nights (Persian: هزار و یک شب) is a collection of Middle Eastern folktales compiled in the Arabic language during the Iranian Golden Age. It is often known in English as The Arabian Nights, from the first English-language edition (c. 1706–1721), which rendered the title as The Arabian Nights' Entertainments.\n[…]\nSome of the stories commonly associated with the Arabian Nights—particularly \"Aladdin and the Wonderful Lamp\" and \"Ali Baba and the Forty Thieves\"—were not part of the collection in the original Arabic versions, but were instead added to the collection by French translator Antoine Galland after he heard them from Syrian writer Hanna Diyab during the latter's visit to Paris in 1709.\n[…]\nThe first European version (1704–1717) was translated into French by Antoine Galland from an Arabic text of the Syrian recension and other sources. This 12-volume work, Les Mille et une nuits, contes arabes traduits en français ('The Thousand and one nights, Arab stories translated into French'), included stories that were not in the original Arabic manuscript.\n[…]\nIt contains, in addition to the standard text of 1001 Nights, the so-called \"orphan stories\" of \"Aladdin\" and \"Ali Baba\" as well as an alternative ending to \"The seventh journey of Sindbad\" from Antoine Galland's original French. As the translator notes in his preface to the three volumes, \"[N]o attempt has been made to superimpose on the translation changes that would be needed to 'rectify' ... accretions, ...\n[…]\n1704: Antoine Galland's French translation is the first European version of Nights. Later volumes introduced tales not present in the Arabic manuscripts, but that Galland heard from the Syrian storyteller Hanna Diyab (like Aladdin and Ali Baba).\n[…]\nList of works influenced by One Thousand and One Nights\n[…]\n1001 Nights"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Antoine_Galland",
        "situacao": "ok",
        "texto": "Antoine Galland (Rollot, 1646 - Paris, 1715) foi um escritor e orientalista francês, especialista em manuscritos antigos, línguas orientais e moedas. Galland é mais conhecido por ser o primeiro tradutor europeu d'As Mil e Uma Noites, o clássico da literatura árabe, publicado em francês entre 1704 e 1717.\n[…]\nGalland nasceu na Picardia de uma família camponesa humilde. Bom estudante, entrou em 1661 no Colégio de Plessis, em Paris, onde aprendeu a língua árabe. Em 1670 tornou-se secretário do marquês de Nointel, embaixador do rei Luís XIV junto ao Império Otomano. Nessa condição visitou Constantinopla, Grécia, Síria e Palestina, colecionando manuscritos e outros objetos. Sua última viagem ao Oriente ocorreu no período entre 1678 e 1688.\n[…]\nO final do século XVII foi uma época de grande interesse do público francês e europeu pelas histórias de contos de fadas de escritores como Charles Perrault e Marie-Catherine d'Aulnoy. Neste contexto, Galland traduziu manuscritos árabes com histórias maravilhosas que havia trazido do Oriente. O primeiro foi o conto das viagens do marinheiro Simbad, publicado em 1701, originário de um manuscrito avulso.\n[…]\nGalland tomou várias liberdades artísticas na redação das Noites. Por exemplo, As Viagens de Simbad, originalmente um conto avulso, acabou sendo incluído nas Noites. O mesmo ocorreu com algumas histórias que escutou de Hanna Diab, um contista sírio, como Aladim e a Lâmpada Maravilhosa e Ali Babá e os Quarenta Ladrões: apesar de não existirem em nenhum manuscrito antigo das Noites, foram também incorporadas por Galland em sua obra.\n[…]\nLes Milles et une Nuits (como tradutor)\n[…]\nObras de Antoine Galland (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Antoine Galland no Internet Archive\n[…]\nAntoine Galland por Maxime de Sars (em Francês)",
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
