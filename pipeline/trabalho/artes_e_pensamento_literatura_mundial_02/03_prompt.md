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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "As Viagens de Gulliver",
      "descricao": "Romance satírico de Jonathan Swift, publicado em 1726, sobre as viagens do cirurgião Lemuel Gulliver a terras imaginárias."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1726, que clérigo irlandês, deão de uma catedral em Dublin, publicou As Viagens de Gulliver?",
    "resposta": "Jonathan Swift",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
      "https://en.wikipedia.org/wiki/Jonathan_Swift"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
        "situacao": "ok",
        "texto": "Gulliver's Travels, originally titled Travels into Several Remote Nations of the World. In Four Parts. By Lemuel Gulliver, First a Surgeon, and then a Captain of Several Ships, is a 1726 satirical prose novel by the Anglo-Irish writer and clergyman Jonathan Swift. It is one of the most famous classics of both English and world literature, and popularised the fictional island of Lilliput.\n[…]\nThe standard edition of Jonathan Swift's prose works as of 2005 is the Prose Writings in 16 volumes, edited by Herbert Davis et al.\n[…]\nSwift, Jonathan Gulliver's Travels (Harmondsworth: Penguin, 2008) ISBN 978-0141439495. Edited with an introduction and notes by Robert DeMaria Jr. The copytext is based on the 1726 edition with emendations and additions from later texts and manuscripts.\n[…]\nSwift, Jonathan Gulliver's Travels (Oxford: Oxford University Press, 2005) ISBN 978-0192805348. Edited with an introduction by Claude Rawson and notes by Ian Higgins. Essentially based on the same text as the Essential Writings listed below with expanded notes and an introduction, although it lacks the selection of criticism.\n[…]\nSwift, Jonathan The Essential Writings of Jonathan Swift (New York: W.W. Norton, 2009) ISBN 978-0393930658. Edited with an introduction by Claude Rawson and notes by Ian Higgins. This title contains the major works of Swift in full, including Gulliver's Travels, A Modest Proposal, A Tale of a Tub, Directions to Servants and many other poetic and prose works. Also included is a selection of contextual material, and criticism from Orwell to Rawson.\n[…]\nSwift, Jonathan Gulliver's Travels (New York: W.W. Norton, 2001) ISBN 0393957241. Edited by Albert J. Rivero. Based on the 1726 text, with some adopted emendations from later corrections and editions. Also includes a selection of contextual material, letters, and criticism.\n[…]\nGulliver's Travels public domain audiobook at LibriVox"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jonathan_Swift",
        "situacao": "ok",
        "texto": "Jonathan Swift (30 November 1667 – 19 October 1745) was an Irish writer, essayist, satirist, and Anglican cleric. He was the author of the satirical prose novel Gulliver's Travels (1726) and the creator of the fictional island of Lilliput. He is regarded by many as the greatest satirist of the Georgian era and one of the foremost prose authors in the history of English and world literature.\n[…]\nJonathan Swift was born on 30 November 1667 in Dublin in the Kingdom of Ireland. He was the second child and only son of Jonathan Swift and his wife Abigail Erick (or Herrick) of Frisby on the Wreake in Leicestershire. His father was a native of Goodrich, Herefordshire, but he accompanied his brothers to Ireland to seek their fortunes in law after their royalist father's estate was brought to ruin during the English Civil War.\n[…]\nDirections to Servants (1731): Full text: Jonathon Swift Archive\n[…]\nThe reviewer writes: \"Hester Grant's [book] is an account of the six months between March and August 1726 when [Jonathan] Swift travelled from Dublin to London to finish Gulliver's Travels, spending part of this period at Alexander Pope's villa in Twickenham (affectionately known as Twitnam) alongside the poet John Gay. This summer was, Grant claims, 'one of the most consequential in English literary history. ... [T]he [three] men ...\n[…]\nSwift, Jonathan (1667–1745) Dean of St Patrick's Dublin Satirist Archived 25 March 2023 at the Wayback Machine at the National Archives.\n[…]\nThe Arch C. Elias Collection, containing material by and about Jonathan Swift, at the Library of Trinity College Dublin.\n[…]\nWorks by Jonathan Swift in eBook form at Standard Ebooks\n[…]\nWorks by Jonathan Swift at Project Gutenberg\n[…]\nWorks by or about Jonathan Swift at the Internet Archive\n[…]\nWorks by Jonathan Swift at LibriVox (public domain audiobooks)\n[…]\nWorks by Jonathan Swift at Open Library\n[…]\nWorks by Jonathan Swift at The Online Books Page"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/As_Viagens_de_Gulliver",
        "situacao": "ok",
        "texto": "As Viagens de Gulliver (1726), originalmente Viagens a diversos países remotos do mundo, em quatro partes, por Lemuel Gulliver, a princípio cirurgião e mais tarde capitão de vários navios (renomeado em 1735), é um romance satírico do escritor irlandês Jonathan Swift. É o trabalho mais conhecido de Swift, e também um clássico da literatura inglesa.\n[…]\nLilliput é uma das ilhas fictícias do romance \"As Viagens de Gulliver\". Swift apresentou-a como parte de um arquipélago, juntamente com a ilha de Blefuscu, algures no Oceano Índico. O livro também relata que as duas ilhas são inimigas. Nessa ilha, a personagem principal deparou-se com a população de pessoas minúsculas (com menos de seis polegadas de altura, cerca de 15 centímetros), chamadas liliputeanos, que o tomaram por gigante.\n[…]\nÉ incerta a data exata em que Swift começou a escrever As Viagens de Gulliver (muito da história foi escrita na mansão Loughry em Cookstown, Condado de Tyrone enquanto Swift esteve lá) mas algumas fontes sugerem que foi mais cedo, em 1713, quando Swift, Gay, Pope, Arbuthnot e outros formaram o Scriblerus Club com o intuito de satirizar gêneros da literatura popular.\n[…]\nAproximadamente em agosto de 1725 o livro estava completo; e como As Viagens de Gulliver eram transparentemente anti Whigsatire, é provável que Swift tenha copiado o manuscrito para que sua caligrafia não pudesse ser usada como evidência caso surgisse alguma acusação, como aconteceu com alguns de seus panfletos irlandeses (o Drapier's Letters).\n[…]\nEm março de 1726 Swift viajou para Londres a fim de publicar seu trabalho; o manuscrito foi entregue secretamente ao editor Benjamin Motte, que usou cinco casas de impressão para acelerar a produção e evitar a pirataria.\n[…]\nGulliver's Travels (1977).\n[…]\nVersão comentada de Gulliver's Travels\n[…]\nArpudha Theevu (2007) Tamil Movie based upon Gulliver's Travels",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Robinson Crusoé",
      "descricao": "Romance inglês de 1719 sobre um náufrago que passa anos sozinho numa ilha."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Publicado em 1719, o romance Robinson Crusoé, sobre um náufrago que vive anos numa ilha, foi escrito por que inglês?",
    "resposta": "Daniel Defoe",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Robinson_Cruso%C3%A9",
      "https://en.wikipedia.org/wiki/Robinson_Crusoe"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Robinson_Cruso%C3%A9",
        "situacao": "ok",
        "texto": "Robinson Crusoe é um romance escrito por Daniel Defoe e publicado originalmente em 1719 no Reino Unido. Epistolar, confessional e didático em seu tom, a obra é a autobiografia fictícia do personagem-título, um náufrago que passou 28 anos em uma remota ilha tropical próxima a Trinidad, encontrando canibais, cativos e revoltosos antes de ser resgatado. O livro foi originalmente publicado na forma de\n[…]\nNo mesmo ano, foi lançada a segunda e menos conhecida parte do romance, intitulada The Farther Adventures of Robinson Crusoe, Being the Second and Last Part OF His Life, And of the Strange Surprising Accounts of his Travels Round three Parts of the Globe e cujo título então em português foi Vida e Aventuras admiráveis de Robinson Crusoé, que contém a sua tornada à sua ilha, as suas novas viagens, e as suas reflexões.\n[…]\nSupõe-se que o enredo básico tenha sido influenciado pela história de Alexander Selkirk, um náufrago escocês que viveu durante quatro anos em uma ilha do Pacífico chamada \"Más a Tierra\" (renomeada em 1966 para Ilha Robinson Crusoe). Os aspectos da ilha onde Crusoe viveu provavelmente foram baseados na ilha caribenha de Tobago.\n[…]\nÉ também provável que Defoe tenha sido influenciado pela tradução em latim ou inglês de O Filósofo Autodidata, de Ibn Tufail, romance do século XII na época recém-lançado pela primeira vez na Europa e que também gira em torno de um personagem isolado em uma ilha deserta.\n[…]\nRobinson Crusoé: O narrador do romance que naufraga em uma ilha deserta.\n[…]\nRobinson Crusoe no Project Gutenberg (em inglês)\n[…]\nRobinson Crusoe - Editions Marteau (texto anotado da primeira edição)\n[…]\nRobinson Crusoe in Words of One Syllable de Mary Godolphin (1723–1764), hospedado no Project Gutenberg\n[…]\n\"Robinson Crusoe & the Robinsonades\", uma coleção online gratuita de edições de Robinson Crusoé da Biblioteca Baldwin de Literatura Infantil Histórica"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Robinson_Crusoe",
        "situacao": "ok",
        "texto": "Robinson Crusoe (, KROO-soh, zoh) is an English adventure novel by Daniel Defoe, first published on 25 April 1719. It is often credited as marking the beginning of realistic fiction as a literary genre, and has been described as the first novel, or at least the first English novel – although these labels are disputed.\n[…]\nSelkirk was rescued in 1709 by Woodes Rogers during a British expedition that led to the publication of Selkirk's adventures in both A Voyage to the South Sea, and Round the World and A Cruising Voyage Around the World in 1712. According to Tim Severin, \"Daniel Defoe, a secretive man, neither confirmed nor denied that Selkirk was the model for the hero of his book. Apparently written in six months or less, Robinson Crusoe was a publishing phenomenon.\"\n[…]\nDaniel Defoe – Robinson Crusoe was adapted as a two-part play for BBC radio. Dramatised by Steve Chambers and directed by Marion Nancarrow, and starring Roy Marsden and Tom Bevan, it was first broadcast on BBC Radio 4 in May 1998. It was subsequently rebroadcast on BBC Radio 4 Extra in February 2023.\n[…]\nThe life and strange surprizing adventures of Robinson Crusoe: of York, mariner: who lived twenty eight years all alone in an un-inhabited island on the coast of America, near the mouth of the great river of Oroonoque; ... Written by himself., Early English Books Online, 1719. Defoe, Daniel (January 2007). \"1719 text\". Oxford Text Archive. hdl:20.500.14106/K061280.000.\n[…]\nDefoe, Daniel Robinson Crusoe, edited by Michael Shinagel (New York: Norton, 1994), ISBN 978-0393964523. Includes a selection of critical essays.\n[…]\nDefoe, Daniel. Robinson Crusoe. Dover Publications, 1998.\n[…]\nDefoe, Daniel. Robinson Crusoe. Signet Classic 1961 with afterword by Harvey Swados\n[…]\nRobinson Crusoe at Project Gutenberg\n[…]\nRobinson Crusoe public domain audiobook at LibriVox"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "O Pequeno Príncipe",
      "descricao": "Novela ilustrada de Antoine de Saint-Exupéry, publicada em 1943, sobre um principezinho vindo de um asteroide."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O Pequeno Príncipe, publicado em 1943, foi escrito e ilustrado por que escritor francês?",
    "resposta": "Antoine de Saint-Exupéry",
    "distratores": [
      "Albert Camus",
      "Jean Cocteau",
      "André Malraux"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Pequeno_Pr%C3%ADncipe",
      "https://en.wikipedia.org/wiki/The_Little_Prince"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Pequeno_Pr%C3%ADncipe",
        "situacao": "ok",
        "texto": "Le Petit Prince (pronúncia em francês: ​[lə.pə.tiˈpʁɛ̃s]) (prt: O Principezinho; bra: O Pequeno Príncipe) é uma novela do escritor, aviador aristocrata francês Antoine de Saint-Exupéry, originalmente publicada em inglês e francês em abril de 1943 nos Estados Unidos.\n[…]\nDurante a Segunda Guerra Mundial, Saint-Exupéry foi exilado para a América do Norte. Em meio a turbulências pessoais e sua saúde falhando, ele produziu quase metade das obras no qual ele seria lembrado, incluindo o conto de solidão, amizade, amor e perda, em forma de um jovem príncipe que caiu na Terra. Um livro de memórias feito pelo autor que contava suas experiências de aviação no deserto do Saara, e é pensado que ele usou estas experiências como base para a novela.\n[…]\nEm abril de 1943, Saint-Exupéry deixou os Estados Unidos para combater as tropas nazis e deu o manuscrito à sua companheira, a jornalista Sylvia Hamilton, que o vendeu à Morgan Library & Museum de Nova Iorque 25 anos depois.\n[…]\nEm 30 de Dezembro de 1935, às 02h45 AM, depois de 19 horas e 44 minutos no ar, Saint-Exupéry e seu copiloto André Prévot caíram no deserto do Saara.\n[…]\nO Morgan Library & Museum de Nova Iorque montou três exposições do manuscrito original de Antoine de Saint-Exupéry, sendo a primeira em 1994 no aniversário de 50 anos da publicação da história, sendo seguido pela celebração do centenário do nascimento do autor em 2000, e a última e maior exibição em 2014 honrando o 70.º aniversário do conto.\n[…]\nNo Brasil, em Florianópolis, a Avenida Pequeno Príncipe leva o nome da obra, numa homenagem a Saint-Exupéry, que passou pela cidade durante sua carreira de aviador e cuja presença se tornou parte da cultura local.\n[…]\nO PEQUENO PRÍNCIPE: UMA NOVELA FILOSÓFICA?\n[…]\nLivro \"O Pequeno Príncipe\" em PDF na Biblioteca Mundial"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Little_Prince",
        "situacao": "ok",
        "texto": "The Little Prince (French: Le Petit Prince, pronounced [lə p(ə)ti pʁãs]) is a novella written and illustrated by French writer and aviator Antoine de Saint-Exupéry. It was first published in English and French in the United States by Reynal & Hitchcock in April 1943 and was published posthumously in France following liberation; Saint-Exupéry's works had been banned by the Vichy Regime.\n[…]\nStacy Schiff, one of Saint-Exupéry's principal biographers, wrote of him and his most famous work, \"rarely have an author and a character been so intimately bound together as Antoine de Saint-Exupéry and his Little Prince\", and remarking of their dual fates, \"the two remain tangled together, twin innocents who fell from the sky\".\n[…]\nCommemorating the novella's 70th anniversary of publication, in conjunction with the 2014 Morgan Exhibition, Éditions Gallimard released a complete facsimile edition of Saint-Exupéry's original handwritten manuscript entitled Le Manuscrit du Petit Prince d'Antoine de Saint-Exupéry: Facsimilé et Transcription, edited by Alban Cerisier and Delphine Lacroix.\n[…]\nSince 2020, June 29 is International Little Prince Day. This date was chosen to commemorate the birth of Antoine de Saint-Exupéry, which occurred on June 29, 1900. The Antoine de Saint-Exupéry Foundation started the initiative striving to promote the humanist values carried by the book published in 1943. Mark Osborne was one of the first personalities to participate in the Little Prince Day 2020.\n[…]\nde Saint-Exupéry, Antoine (2006). The Little Prince: And Letter to a Hostage. Translated by Cuffe, T. V. F.. Penguin. ISBN 978-0-14-118562-0. OCLC 1023214985.\n[…]\nWebster, Paul (1993). Antoine de Saint-Exupéry: The Life and Death of The Little Prince. London: Pan Macmillan. ISBN 978-0-333-61702-1.\n[…]\nLe Petit Prince at Project Gutenberg Australia\n[…]\nBooks similar to The Little Prince by Antoine de Saint-Exupéry"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Alice no País das Maravilhas",
      "descricao": "Livro de Lewis Carroll, de 1865, sobre uma menina que cai numa toca de coelho e chega a um mundo fantástico."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor, na verdade um professor de matemática de Oxford usando pseudônimo, publicou Alice no País das Maravilhas em 1865?",
    "resposta": "Lewis Carroll",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lewis_Carroll",
      "https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lewis_Carroll",
        "situacao": "ok",
        "texto": "Charles Lutwidge Dodgson (27 January 1832 – 14 January 1898), better known by his pen name Lewis Carroll, was an English author, poet, mathematician, photographer, and Anglican deacon. His most notable works are Alice's Adventures in Wonderland (1865) and its sequel Through the Looking-Glass (1871), some of the most important examples of Victorian literature. He was noted for his facility with wor\n[…]\nAfter the possible alternative titles were rejected – Alice Among the Fairies and Alice's Golden Hour – an expanded and substantially reworked version of the work was finally published as Alice's Adventures in Wonderland in 1865 under the Lewis Carroll pen name, which Dodgson had first used some nine years earlier. The illustrations this time were by Sir John Tenniel; Dodgson evidently thought that a published book would need the skills of a professional artist.\n[…]\nAs Carroll was born in All Saints' Vicarage, he is commemorated at All Saints' Church, Daresbury by stained glass windows depicting characters from Alice's Adventures in Wonderland. The Lewis Carroll Centre, attached to the church, was opened in March 2012. A private collection of thousands of items connected with Lewis Carroll, including letters, photographs, illustrations and books, were donated to Christ Church, part of the University of Oxford in 2025.\n[…]\nBowman, Isa (1899). The Story of Lewis Carroll: Told for Young People by the Real Alice in Wonderland, Miss Isa Bowman. London: J.M. Dent & Co.\n[…]\nBrooker, Will (2004). Alice's adventures: Lewis Carroll in Popular Culture. New York: Continuum Books.\n[…]\nDouglas-Fairhurst, Robert (2016). The Story of Alice: Lewis Carroll and the Secret History of Wonderland. Harvard University Press. ISBN 978-0674970762\n[…]\nWorks by Lewis Carroll at LibriVox (public domain audiobooks)\n[…]\nAlice in Wonderland and Lewis Carroll (archived 2021) at the British Library\n[…]\nThe Lewis Carroll Society UK"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland",
        "situacao": "ok",
        "texto": "Alice's Adventures in Wonderland (also known as  Alice in Wonderland) is an 1865 English children's novel by Lewis Carroll. It tells the story of a little girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures. It is seen as an example of the literary nonsense genre. The artist John Tenniel provided 42 wood-engraved illustrations for the original edition\n[…]\nAlice's Adventures in Wonderland was conceived on 4 July 1862, when Lewis Carroll and the Reverend Robinson Duckworth rowed up the river Isis with the three young daughters of Carroll's friend Henry Liddell: Lorina Charlotte (aged 13; \"Prima\" in the book's prefatory verse); Alice Pleasance (aged 10; \"Secunda\" in the verse); and Edith Mary (aged 8; \"Tertia\" in the verse).\n[…]\n1907: Copyright on Alice's Adventures in Wonderland expires in the UK, entering the tale into the public domain, 42 years after its publication, some nine years after Carroll's death in January 1898.\n[…]\nNo story in English literature has intrigued me more than Lewis Carroll's Alice in Wonderland. It fascinated me the first time I read it as a schoolboy.\n[…]\nSince the first publication of Alice's Adventures in Wonderland 150 years ago, Lewis Carroll's work has spawned a whole industry, from films and theme park rides to products such as a \"cute and sassy\" Alice costume (\"petticoat and stockings not included\"). The blank-faced little girl made famous by John Tenniel's original illustrations has become a cultural inkblot we can interpret in any way we like.\n[…]\nAlice's Adventures Under Ground (1865), Carroll's manuscript later reworked into Alice's Adventures in Wonderland (1866) (with forty-two illustrations by John Tenniel)—full colour scan from University of Southern California Digital Library\n[…]\nCassady Lewis Carroll Collection from University of Southern California Digital Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lewis_Carroll",
        "situacao": "ok",
        "texto": "Charles Lutwidge Dodgson, mais conhecido pelo seu pseudônimo Lewis Carroll (Daresbury, 27 de janeiro de 1832 – Guildford, 14 de janeiro de 1898), foi um romancista, contista, fabulista, poeta, desenhista, fotógrafo, matemático e reverendo anglicano britânico. Lecionou matemática no Christ College, em Oxford.\n[…]\nEm março de 1856, Charles escreveu o seu primeiro texto com o pseudónimo que o tornaria famoso. Um poema romântico chamado \"Solitude\" surgiu na revista The Train, sendo atribuído a \"Lewis Carroll\". Este pseudónimo era um jogo de palavras com o seu nome verdadeiro: Lewis era a forma anglicizada de Ludovicus, e Carroll era um apelido irlandês parecido com o nome latino Carolus, do qual vem o nome Charles.\n[…]\nO sucesso comercial do primeiro livro de Alice mudou a vida de Charles Dodgson. A fama do seu pseudónimo, Lewis Carroll, espalhou-se por todo o mundo. Charles era inundado com cartas de fãs e com atenção que muitas vezes não desejava. Uma história popular diz que a própria rainha lhe terá pedido para lhe dedicar o seu próximo livro e Charles enviou-lhe uma cópia: um manual de matemática intitulado An Elementary Treatise on Determinants.\n[…]\nA obra recebeu críticas mistas dos contemporâneos de Lewis Carroll, mas foi bastante popular junto do público, tendo várias edições entre 1876 e 1908 e várias adaptações na forma de musicais, ópera, teatro e música. Ao que parece, o pintor Dante Gabriel Rossetti ficou convencido de que o poema era sobre ele.\n[…]\nEdições brasileiras das obras de Carroll são: Alice no país das maravilhas (1865) e Alice Através do espelho (1872), Algumas Aventuras de Silvia e Bruno, Rimas do país das maravilhas, A caça ao turpente e Obras escolhidas.\n[…]\nCarroll, Lewis (2024). As Aventuras de Alice no País das Maravilhas. [S.l.]: Compêndio Nerd. ISBN 978-65-00-29866-6",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "O Nome da Rosa",
      "descricao": "Romance policial de Umberto Eco, de 1980, ambientado num mosteiro medieval italiano."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que professor italiano, estudioso dos signos, estreou como romancista com O Nome da Rosa, um mistério num mosteiro medieval?",
    "resposta": "Umberto Eco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Nome_da_Rosa",
      "https://en.wikipedia.org/wiki/The_Name_of_the_Rose"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Nome_da_Rosa",
        "situacao": "ok",
        "texto": "O Nome da Rosa (em italiano: Il nome della rosa it) é o romance de estreia de 1980 do autor italiano Umberto Eco. É um mistério de assassinato histórico ambientado em um mosteiro italiano em 1327, e um mistério intelectual que combina semiótica na ficção, análise bíblica, estudos medievais e teoria literária. Foi traduzido para o inglês por William Weaver em 1983.\n[…]\nA descrição de Adso do portal do mosteiro é reconhecidamente a do portal da igreja em Moissac, na França. Dante Alighieri e sua Comédia são mencionados uma vez de passagem. Há também uma referência rápida a um famoso \"Umberto de Bolonha\" – o próprio Umberto Eco.\n[…]\nLa Abadía del Crimen Extensum (A Abadia do Crime Extensum), um remake gratuito de La Abadía del Crimen escrito em Java, foi lançado na Steam em 2016 com versões em inglês, francês, italiano e espanhol. Este remake melhora muito a jogabilidade do original, ao mesmo tempo que expande a história e o elenco de personagens, pegando emprestado elementos do filme e do livro. O jogo é dedicado a Umberto Eco, que morreu em 2016, e a Paco Menéndez, o programador do jogo original.\n[…]\nO jogo de 2022 Pentiment, que também envolve um mistério de assassinato ambientado em e ao redor de um mosteiro medieval, bebe fortemente no romance, conforme confirmado pelo diretor Josh Sawyer e citado nos créditos finais do jogo.\n[…]\nO compositor romeno Șerban Nichifor lançou o poema Il nome della rosa para violoncelo e piano a 4 mãos (1989). O poema é baseado no romance.\n[…]\nEco, Umberto (1983). The Name of the Rose. [S.l.]: Harcourt. ISBN 9780151446476\n[…]\nHaft, Adele (1999). The Key to The Name of the Rose. [S.l.]: University of Michigan Press. ISBN 978-0-472-08621-4\n[…]\nO Wikiquote possui citações de ou sobre: Umberto Eco\n[…]\nUmberto Eco discusses The Name of the Rose  no BBC World Book Club\n[…]\nThe Name of the Rose por Umberto Eco, resenhado por Ted Gioia (Postmodern Mystery)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Name_of_the_Rose",
        "situacao": "ok",
        "texto": "The Name of the Rose (Italian: Il nome della rosa [il ˈnoːme della ˈrɔːza]) is the 1980 debut novel by Italian author Umberto Eco. It is a historical murder mystery set in an Italian monastery in 1327, and an intellectual mystery combining semiotics in fiction, biblical analysis, medieval studies, and literary theory. It was translated into English by William Weaver in 1983.\n[…]\nThis text has also been translated as \"Yesterday's rose stands only in name, we hold only empty names.\" This line is a verse by the twelfth-century monk Bernard of Cluny (also known as Bernard of Morlaix). Medieval manuscripts of this line are not in agreement: Eco quotes one Medieval variant verbatim, but Eco was not aware at the time of the text more commonly printed in modern editions, in which the reference is to Rome (Roma), not to a rose (rosa).\n[…]\nAdso's description of the portal of the monastery is recognizably that of the portal of the church at Moissac, France. Dante Alighieri and his Comedy are mentioned once in passing. There is also a quick reference to a famous \"Umberto of Bologna\" – Umberto Eco himself.\n[…]\nLa Abadía del Crimen Extensum (The Abbey of Crime Extensum), a free remake of La Abadía del Crimen written in Java, was released on Steam in 2016 with English-, French-, Italian-, and Spanish-language versions. This remake greatly enhances the gameplay of the original, while also expanding the story and the cast of characters, borrowing elements from the movie and book. The game is dedicated to Umberto Eco, who died in 2016, and Paco Menéndez, the programmer of the original game.\n[…]\nEco, Umberto (1983). The Name of the Rose. Harcourt. ISBN 9780151446476.\n[…]\nQuotations related to Umberto Eco at Wikiquote\n[…]\nUmberto Eco discusses The Name of the Rose  on the BBC World Book Club\n[…]\nThe Name of the Rose by Umberto Eco, reviewed by Ted Gioia (Postmodern Mystery)"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Ensaio sobre a Cegueira",
      "descricao": "Romance de José Saramago, de 1995, em que uma epidemia de cegueira branca atinge uma cidade inteira."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor português criou Ensaio sobre a Cegueira, romance em que uma epidemia de cegueira branca atinge uma cidade inteira?",
    "resposta": "José Saramago",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ensaio_sobre_a_Cegueira",
      "https://en.wikipedia.org/wiki/Blindness_(novel)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ensaio_sobre_a_Cegueira",
        "situacao": "ok",
        "texto": "Ensaio sobre a Cegueira é um romance do escritor português José Saramago, publicado em 1995, e traduzido para diversas línguas. A obra narra a história da epidemia de cegueira branca que  se espalha por uma cidade, causando um grande colapso na vida das pessoas e abalando as estruturas sociais.\n[…]\nJosé Saramago não faz a distinção de personagens pelos seus nomes, mas sim pelas suas características e particularidades. Entre os personagens principais, temos o primeiro cego, a mulher do primeiro cego, o médico, a mulher do médico (que vê), a rapariga dos óculos escuros, o velho da venda preta e o rapazinho estrábico.\n[…]\nNesta obra, Saramago utiliza o tipo de escrita pelo qual ficou conhecido mundialmente. Este tipo de escrita pauta-se por uma descrição fluida, onde o discurso direto se mistura com o indireto, sendo normal a ausência de recursos típicos do discurso direto (parágrafo, travessão, aspas), apresentando o discurso direto entre vírgulas e começando por maiúsculas, para o leitor fazer a distinção entre este e o restante tipo de discurso.\n[…]\nEste tipo de escrita foi desenvolvido ao longo dos livros que Saramago escreveu e é uma das suas (senão a maior) características inconfundíveis.\n[…]\nAo longo de sua vida, Saramago resistira em ceder os direitos sobre seus livros para o cinema. Contudo, em 2008, uma adaptação de Ensaio sobre a Cegueira foi lançada, dirigida pelo brasileiro Fernando Meirelles. Mundialmente, o filme obteve críticas mistas e dividiu opiniões; no entanto, a Saramago a longa-metragem agradou-lhe imensamente. O escritor disse a Meirelles \"estar tão feliz de ter visto o filme como estava quando acabou de escrever o livro\".\n[…]\nEm outra declaração, Saramago disse que \"agora conhecia a cara de suas personagens\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Blindness_(novel)",
        "situacao": "ok",
        "texto": "Blindness (Portuguese: Ensaio sobre a cegueira, lit. 'Essay on Blindness') is a 1995 novel by Portuguese author José Saramago. It centers on an unexplained mass epidemic of blindness afflicting nearly everyone in a nonspecific city, and follows multiple unnamed characters as they navigate the social breakdown that swiftly follows. The novel was translated into English by Giovanni Pontiero in 1997.\n[…]\nIn 1998, Saramago received the Nobel Prize for Literature, and Blindness was one of his works noted by the committee when announcing the award.\n[…]\nLike most works by Saramago, Blindness contains many long passages in which commas take the place of periods, quotation marks, semicolons, and colons. The lack of quotation marks around dialogue means that the speakers' identities (or the fact that dialogue is occurring) may not be immediately apparent to the reader. The lack of proper character names in Blindness is typical of many of Saramago's novels (e.g. All the Names).\n[…]\nHowever, there are some signs that hint that the country is Saramago's homeland of Portugal: the main character is shown eating chouriço, a spicy sausage, and some dialogue in the original Portuguese employs the familiar \"tu\" second-person singular verb form (a distinction absent in most of Brazil). The church, with all its saintly images, is likely of the Catholic variety.\n[…]\nSaramago wrote a sequel to Blindness in 2004, titled Seeing (Ensaio sobre a lucidez, literal English translation Essay on lucidity), which has also been translated into English. The sequel novel takes place in the same country featured in Blindness and features several of the same nameless characters. The book \"Seeing\" is a much more realistic novel with positive possibilities suggested/asserted.\n[…]\nThe Day of the Triffids, a 1951 John Wyndham novel (and its many adaptations) about societal collapse following widespread blindness"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Os Maias",
      "descricao": "Romance de Eça de Queirós, publicado em 1888, sobre a decadência de uma família rica de Lisboa."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Os Maias, romance de 1888 sobre a decadência de uma família rica de Lisboa, foi escrito por quem?",
    "resposta": "Eça de Queirós",
    "distratores": [
      "Camilo Castelo Branco",
      "Almeida Garrett",
      "Alexandre Herculano"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Maias",
      "https://en.wikipedia.org/wiki/Os_Maias"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Maias",
        "situacao": "ok",
        "texto": "Os Maias é uma das obras mais conhecidas do escritor português Eça de Queiroz, publicado pela Livraria Lello & Irmão no Porto, em 1888. A obra ocupa-se da história de uma família (Maia) ao longo de três gerações, centrando-se depois na última com a história de amor entre Carlos da Maia e Maria Eduarda.\n[…]\nO retrato de cada um dos protagonistas destes três momentos é eximiamente traçado por Eça de Queirós.\n[…]\nLisboa\n[…]\nNão só os Maias mas também em outros livros de Eça de Queiroz, como o Primo Basílio e O Crime do Padre Amaro, as personagens femininas representam o pecado da luxúria, da perdição. Os historiadores tentam explicar este facto com base na rejeição materna que Eça sofreu.\n[…]\nEça nasceu filho de uma relação não-marital. Embora os seus pais tivessem casado e tido mais filhos posteriormente, Eça de Queiroz foi batizado como filho natural de José Maria d'Almeida de Teixeira de Queiroz e de Mãe incógnita. Eça foi criado com a avó, depois com uma ama e, mais tarde num colégio. Os historiadores tentam estabelecer um paralelo entre o que a mãe de Eça representou para ele e a caracterização das mulheres na obra de Eça.\n[…]\nObras de Eça de Queiroz traduzidas\n[…]\nSuely Fadul Flory,  \"O Ramalhete e o código mítico: uma leitura do espaço em Os Maias de Eça de Queirós\" in Elza Miné e , Ed. Caminho, 1984, pp. 69–114.\n[…]\nAntónio Coimbra Martins \"O incesto d'Os Maias\" in Ensaios queirosianos, Lisboa, Europa-América, 1967, pp. 269–287.\n[…]\nJoão Medina, \"O 'niilismo' de Eça de Queiroz n'Os Maias\"; \"Ascensão e queda de Carlos da Maia\" in \"Eça de Queiroz e a Geração de 70\", Lisboa, Moraes Editores, 1980, pp. 73–81 e 83-86, respectivamente.\n[…]\nCarlos Reis, (coord.) Leituras d'\"Os Maias\", Coimbra, Liv. Minerva, 1990.\n[…]\nAlfredo Campos Matos,\"Dicionário de Eça de Queiroz\", Caminho, 1988 dep. legal 24464/88."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Os_Maias",
        "situacao": "ok",
        "texto": "If you are looking for the 2014 Portuguese film see Os Maias (film)\n[…]\nOs Maias: Episódios da Vida Romântica (Portuguese pronunciation: [uʒ ˈmajɐʃ]; \"The Maias: Episodes of Romantic Life\") is a realist novel by Portuguese author Eça de Queiroz. Maia is the name of the fictional family  the novel is about.\n[…]\nAs early as 1878, while serving in the Portuguese consulate at Newcastle upon Tyne, Eça had at least given a name to this book and had begun working on it. It was mainly written during his residence in Bristol, and it was first published in 1888.\n[…]\nIn 2001 Rede Globo produced their acclaimed adaptation of Os Maias (including some elements from Eça's short novel The Relic) as a short soap-opera type serial in 40 chapters, which was shown from Tuesday to Friday during a ten-week period. It starred a very select group of Brazilian actors, most of them with long careers on TV, theatre and cinema. The screenplay was adapted by the renowned soap opera writer Maria Adelaide Amaral and directed by Luiz Fernando Carvalho."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Gitanjali",
      "descricao": "Coletânea de poemas do bengali Rabindranath Tagore, cuja versão inglesa lhe valeu o Nobel de Literatura de 1913."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1913, o Nobel de Literatura foi pela primeira vez para alguém de fora da Europa, o autor de Gitanjali. Quem era esse poeta bengali?",
    "resposta": "Rabindranath Tagore",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rabindranath_Tagore",
      "https://en.wikipedia.org/wiki/Gitanjali"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rabindranath_Tagore",
        "situacao": "ok",
        "texto": "Rabindranath Tagore  (Bengali: [ˈrobind̪ɾonat̪ʰ ˈʈʰakuɾ] ; 7 May 1861 – 7 August 1941) was a Bengali poet, author, playwright, musician, composer, philosopher, social reformer, painter, and one of the foremost figures of the Bengal Renaissance. In 1913, Tagore became the first Indian and non-European to win a Nobel Prize in any category, and also the first lyricist to win the Nobel Prize in Litera\n[…]\nIn November 1913, Tagore learned he had won that year's Nobel Prize in Literature: the Swedish Academy appreciated the idealistic—and for Westerners—accessible nature of a small body of his translated material focused on the 1912 Gitanjali: Song Offerings. He was awarded a knighthood by King George V in the 1915 Birthday Honours, but Tagore renounced it after the 1919 Jallianwala Bagh massacre.\n[…]\nInternationally, Gitanjali (Bengali: গীতাঞ্জলি) is Tagore's best-known collection of poetry, for which he was awarded the Nobel Prize in Literature in 1913. Tagore was the first non-European to receive a Nobel Prize in Literature and the second non-European to receive a Nobel Prize after Theodore Roosevelt.\n[…]\nTagore was a prolific composer, with around 2,230 songs to his credit. His songs are known as rabindrasangit (\"Tagore Song\"), which merges fluidly into his literature, most of which—poems or parts of novels, stories, or plays alike—were lyricised. Influenced by the thumri style of Hindustani music, they ran the entire gamut of human emotion, ranging from his early dirge-like Brahmo devotional hymns to quasi-erotic compositions. They emulated the tonal colour of classical ragas to varying extents.\n[…]\nRabindra Puraskar\n[…]\nRabindranath Tagore at IMDb\n[…]\nEzra Pound: \"Rabindranath Tagore\", The Fortnightly Review, March 1913\n[…]\nWorks by Rabindranath Tagore in eBook form at Standard Ebooks\n[…]\nWorks by Rabindranath Tagore at Project Gutenberg\n[…]\nWorks by or about Rabindranath Tagore at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gitanjali",
        "situacao": "ok",
        "texto": "Gitanjali (Bengali: গীতাঞ্জলি, lit. ''Song offering'') is a collection of poems by the Bengali poet Rabindranath Tagore. Tagore received the Nobel Prize for Literature in 1913, for its English translation, Song Offerings, making him the first non-European  and the first Asian and the only Indian to receive this honour.\n[…]\nThe collection by Tagore, originally written in Bengali, comprises 157 poems, many of which have been turned into songs or Rabindra Sangeet. The original Bengali collection was published on 4 August 1910. The translated version, Gitanjali: Song Offerings, was published in November 1912 by the India Society of London. It contained translations of 53 poems from the original Gitanjali, as well as 50 other poems extracted from Tagore's Achalayatan, Gitimalya, Naibedya, Kheya, and more.\n[…]\nOverall, Gitanjali: Song Offerings consists of 103 prose poems of Tagore's own English translations. The poems were based on medieval Indian lyrics of devotion with a common theme of love across most poems. Some poems also narrated a conflict between the desire for materialistic possessions and spiritual longing.\n[…]\nThe English version of Gitanjali or Song Offerings/Singing Angel is a collection of 103 English prose poems, which are Tagore's own English translations of his Bengali poems, first published in November 1912 by the India Society in London. It contained translations of 53 poems from the original Bengali Gitanjali, as well as 50 other poems from his other works.\n[…]\nStream of Life, the Gitanjali poem no. 69, reworked by composer Garry Schyman as lyrics for the song \"Praan\"\n[…]\nMedia related to Gitanjali at Wikimedia Commons\n[…]\nWorks related to Gitanjali at Wikisource\n[…]\nGitanjali (Song Offerings) at Project Gutenberg\n[…]\nGitanjali at Standard Ebooks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rabindranath_Tagore",
        "situacao": "ok",
        "texto": "Rabindranath Tagore (em bengali:  রবীন্দ্রনাথ ঠাকুর; Calcutá, 7 de maio de 1861 – 7 de agosto de 1941), alcunha Gurudev, foi um polímata bengali. Como poeta, romancista, músico e dramaturgo, reformulou a literatura e a música bengali no final do século XIX e início do século XX. Como autor de Gitânjali, que em português se chamou \"Oferenda Lírica\" e seus \"versos profundamente sensíveis, frescos e \n[…]\nEm 1913, torna-se o primeiro escritor asiático a ser agraciado com o Prêmio Nobel de Literatura. A Academia Sueca apreciou a natureza idealista — e para os ocidentais — acessível de um pequeno corpo de seu material traduzido focado no Gitanjali: Ofertas de Música de 1912. Ele foi premiado com o título de cavaleiro pelo Rei George V no 1915 Birthday Honours, mas Tagore renunciou-o em 1919 após o massacre de Jallianwala Bagh, como forma de protesto contra a política britânica em relação ao Punjab.\n[…]\nTagore foi um prolífico compositor com cerca de 2 230 músicas em seu crédito. Suas canções são conhecidas como rabindrasangit (\"Canção de Tagore\"), que se funde fluentemente em sua literatura, a maioria das quais — poemas ou partes de romances, histórias ou peças semelhantes — foram liricizadas. Influenciados pelo estilo thumri da música hindustani, eles percorreram toda a gama da emoção humana, variando de seus primeiros hinos devocionais de Brahmo a composições quase eróticas.\n[…]\nPara os bengalis, o apelo das músicas, derivado da combinação de força emotiva e beleza descrita como superando até a poesia de Tagore, foi tal que a revista Modern Review observou que \"não há em Bengala um lar culto onde as canções de Rabindranath não sejam cantadas ou pelo menos tentaram ser cantadas … Até os aldeãos analfabetos cantam suas canções \". Tagore influenciou o maestro de sitar Vilayat Khan e os sarodiyas Buddhadev Dasgupta e Amjad Ali Khan.\n[…]\nGardener (1913) [O Jardineiro]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Prêmio Nobel de Literatura",
      "descricao": "Prêmio anual concedido pela Academia Sueca desde 1901 a escritores de destaque."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1901, quem recebeu o primeiro Prêmio Nobel de Literatura da história?",
    "resposta": "Sully Prudhomme",
    "distratores": [
      "Liev Tolstói",
      "Émile Zola",
      "Henrik Ibsen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nobel_Prize_in_Literature",
      "https://en.wikipedia.org/wiki/Sully_Prudhomme"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nobel_Prize_in_Literature",
        "situacao": "ok",
        "texto": "The Nobel Prize in Literature, here meaning for Literature (Swedish: Nobelpriset i litteratur), is a Swedish literature prize that is awarded annually to an author from any country who has, in the words of Alfred Nobel, \"in the field of literature, produced the most outstanding work in an idealistic direction\". Though individual works are sometimes cited as being particularly noteworthy, the award\n[…]\nWith the annual revelation of nominated writers for the Nobel Prize in Literature, interesting facts are eventually uncovered between 1901 and 1975 such as the following:\n[…]\nThe literature medal features a portrait of Alfred Nobel in left profile on the obverse.\n[…]\nNominations are kept secret for at least 50 years before they are publicly available at The Nomination Database for the Nobel Prize in Literature. As of 2025, only nominations submitted between 1901 and 1973 are available for public viewing.\n[…]\nApart from the first laureate in 1901, Sully Prudhomme, these include Theodor Mommsen in 1902, Rudolf Eucken in 1908, Paul Heyse in 1910, Rabindranath Tagore in 1913, Sinclair Lewis in 1930, Luigi Pirandello in 1934, Pearl Buck in 1938, William Faulkner in 1950 (the prize for 1949) and Bertrand Russell in 1950.\n[…]\nFrom the start the Nobel Prize in Literature attracted much media attention. The first prize in 1901 was reported in hundreds of newspapers in different parts of the world. The prizes to Rudyard Kipling in 1907 and Rabindranath Tagore in 1913 helped to establish the prize as a central phenomenon in world literature.\n[…]\nThe Nobel Prize Medal for Literature – official webpage of the Nobel Foundation\n[…]\nGraphics: National Literature Nobel Prize shares 1901–2009 by citizenship at the time of the award and by country of birth. From J. Schmidhuber (2010), Evolution of National Nobel Prize Shares in the 20th Century at arXiv:1009.2634v1.\n[…]\nAlternative Nobel literature prize planned in Sweden"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sully_Prudhomme",
        "situacao": "ok",
        "texto": "René François Armand \"Sully\" Prudhomme (French: [syli pʁydɔm]; 16 March 1839 – 6 September 1907) was a French poet and essayist. He was the first winner of the Nobel Prize in Literature, in 1901.\n[…]\nPrudhomme's parents were M. Sully Prudhomme and Clotilde Caillat. They had been engaged for 10 years before they had felt financially able to marry. When Prudhomme was two, his father, a shopkeeper, died. His mother and he relocated to Prudhomme's uncle's house. Prudhomme joined his father's name \"Sully\" with his surname Prudhomme, becoming Sully-Prudhomme. He was interested in classic literature and mathematics in school. He also considered entering the Dominican order, but decided against it.\n[…]\nPrudhomme attended the Lycée Bonaparte, but eye trouble interrupted his studies. He worked for a while in the Creusot region for the Schneider steel foundry, and then began studying law in a notary's office. The favourable reception of his early poems by the Conférence La Bruyère (a student society) encouraged him to begin a literary career.\n[…]\n1883–1908: Œuvres de Sully Prudhomme (poetry and prose), 8 volumes, A. Lemerre\n[…]\n1901: Testament poétique (essays)\n[…]\nGosse, Edmund William (1911). \"Sully-Prudhomme, Rene François Armand Prudhomme\" . In Chisholm, Hugh (ed.). Encyclopædia Britannica. Vol. 26 (11th ed.). Cambridge University Press. p. 59.\n[…]\nPetri Liukkonen. \"Sully Prudhomme\". Books and Writers.\n[…]\nSully Prudhomme on Nobelprize.org\n[…]\nPoesies.net: Sully Prudhomme\n[…]\nWorks by Sully Prudhomme at Project Gutenberg\n[…]\nWorks by or about Sully Prudhomme at the Internet Archive\n[…]\nWorks by Sully Prudhomme at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pr%C3%AAmio_Nobel_de_Literatura",
        "situacao": "ok",
        "texto": "Prêmio (português brasileiro) ou Prémio (português europeu) Nobel de Literatura (em sueco: Nobelpriset i litteratur; ouça a pronúncia) é um prêmio literário sueco que é concedido anualmente, desde 1901, a um autor de qualquer país que, nas palavras da vontade do industrial sueco Alfred Nobel, produziu \"no campo da literatura o trabalho mais notável em uma direção ideal\" (em sueco: den som inom lit\n[…]\nNos primeiros cem anos de história do Prêmio Nobel, 61,2% dos laureados literários vieram de apenas dez países; os mesmos dez países receberam 82,2% de todos os prêmios Nobel. Os romancistas dominaram os prêmios (52), seguidos por significativamente menos poetas (28) e dramaturgos (11). Dois receberam prêmios literários por suas obras históricas: Theodor Mommsen (1902) e Winston Churchill (1953).\n[…]\nOs candidatos indicados são geralmente considerados pelo comitê do Nobel durante anos, mas já aconteceu em diversas ocasiões que um autor foi premiado instantaneamente após apenas uma indicação. Além do primeiro laureado em 1901, Sully Prudhomme, estes incluem Theodor Mommsen em 1902, Rudolf Eucken em 1908, Paul Heyse em 1910, Rabindranath Tagore em 1913, Sinclair Lewis em 1930, Luigi Pirandello em 1934, Pearl Buck em 1938, William Faulkner em 1950 (o prêmio de 1949) e Bertrand Russell em 1950.\n[…]\nO primeiro prêmio em 1901, concedido ao poeta francês Sully Prudhomme, foi fortemente criticado. Muitos acreditavam que o escritor russo Liev Tolstoy deveria ter recebido o primeiro prêmio Nobel de literatura.\n[…]\nNa história do Prêmio Nobel de Literatura, muitas conquistas literárias foram negligenciadas. O historiador literário Kjell Espmark admitiu que \"quanto aos primeiros prêmios, a censura de más escolhas e omissões flagrantes é frequentemente justificada. Tolstoi, Ibsen e Henry James deveriam ter sido recompensados ​​em vez de, por exemplo, Sully Prudhomme, Eucken e Heyse.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "O Morro dos Ventos Uivantes",
      "descricao": "Romance inglês de 1847, ambientado nas charnecas de Yorkshire, sobre o amor de Heathcliff e Catherine."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Publicado em 1847, O Morro dos Ventos Uivantes, o único romance de sua autora, foi escrito por quem?",
    "resposta": "Emily Brontë",
    "distratores": [
      "Charlotte Brontë",
      "Anne Brontë",
      "Jane Austen"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Morro_dos_Ventos_Uivantes",
      "https://en.wikipedia.org/wiki/Wuthering_Heights"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Morro_dos_Ventos_Uivantes",
        "situacao": "ok",
        "texto": "Wuthering Heights (traduzido para português como O Morro dos Ventos Uivantes, O Monte dos Vendavais ou ainda Colina dos Vendavais), lançado em 1847, foi o único romance da escritora britânica Emily Brontë. Hoje considerado um clássico da literatura inglesa, recebeu fortes críticas no século XIX.\n[…]\nEllen é a principal narradora da história e a testemunha de todos os acontecimentos. Geralmente chamada de “Nelly”, é a criada de Catherine e Hindley. Personagem inspirada na fiel serviçal de Emily Brontë, Tabhyta.\n[…]\nO romance foi publicado pela primeira vez juntamente com Agnes Grey, de Anne Brontë, em um formato de três volumes. Nele, O Morro dos Ventos Uivantes ocupa os dois primeiros volumes, enquanto Agnes Grey compõe o conteúdo do terceiro. O texto original, publicado por Thomas Cautley Newby em 1847, encontra-se hoje disponível online em duas partes.\n[…]\nEm 1850, o texto original foi editado por Charlotte Brontë para a segunda edição de O Morro dos Ventos Uivantes, onde a autora também escreveu um prefácio. Nesta edição, Charlotte não apenas corrigiu erros de pontuação e ortografia, como também atenuou o dialeto de Yorkshire de Joseph. Em uma carta ao seu editor, W. S. Williams, ela diz:\n[…]\nBRONTË, Emily (1971). O Morro dos Ventos Uivantes. 10. Traduzido por Oscar Mendes. São Paulo: Abril Cultural\n[…]\nBRONTË, Emily (1971). O Morro dos Ventos Uivantes. 44. Traduzido por Vera Pedroso. [S.l.]: Editora Bruguera\n[…]\nBRONTË, Emily (2010). O Morro dos Ventos Uivantes. 23. Traduzido por Rachel de Queiroz. [S.l.]: Editora Abril. ISBN 978-85-7971-024-7\n[…]\nBRONTË, Emily (1995), O Morro dos Ventos Uivantes, Editora Nova Cultural Ltda.\n[…]\nBrontë, Emily. O Morro dos Ventos Uivantes. Trad. Oscar Mendes. São Paulo: Abril Cultural, 1979.\n[…]\nMap of Locations associated with Wuthering Heights and Emily Brontë"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wuthering_Heights",
        "situacao": "ok",
        "texto": "Wuthering Heights is the only novel by the English author Emily Brontë, initially published in 1847 under her pen name Ellis Bell. It concerns two extensive upland estates and their landowning families on the West Yorkshire moors, the Earnshaws and the Lintons, and their turbulent relationships with the Earnshaws' foster son, Heathcliff. Driven by themes of love, possession, revenge, and reconcili\n[…]\nHowever, romances such as Wuthering Heights and Scott's own historical romances and Herman Melville's Moby Dick are often referred to as novels. Other European languages do not distinguish between romance and novel: \"a novel is le roman, der Roman, il romanzo, en roman\". This sort of romance is different from the genre fiction love romance or romance novel, with its \"emotionally satisfying and optimistic ending\". Emily Brontë's approach to the novel form was influenced by the gothic novel.\n[…]\nChildhood is a central theme of Wuthering Heights. Emily Brontë \"understands that 'The Child is 'Father of the Man' (Wordsworth, 'My heart leaps up', 1. 7)\". Wordsworth, following philosophers of education, such as Rousseau, explored ideas about the way childhood shaped personality. One outcome of this was the German bildungsroman, or \"novel of education\", such as Charlotte Brontë's Jane Eyre (1847), Eliot's The Mill on the Floss (1860), and Dickens's Great Expectations (1861).\n[…]\nShortly after Emily Brontë's death G.H. Lewes wrote in Leader Magazine:\n[…]\nBell, Ellis (1847). Wuthering Heights, A Novel (1 ed.). London: Thomas Cautley Newby – via Wikisource. Emily Brontë as 'Ellis Bell'.\n[…]\nBrontë, Emily (1976). Wuthering Heights. Oxford: Clarendon Press. ISBN 0-19-812511-9. Introduction and notes by Ian Jack, Hilda Marsden, and Inga-Stina Ewbank.\n[…]\nEmily Brontë at the Library of Congress, with 230 library catalogue records – including 110 records of editions of Wuthering Heights"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Macondo",
      "descricao": "Cidade fictícia criada por Gabriel García Márquez, cenário de Cem Anos de Solidão."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A cidade fictícia de Macondo, de Cem Anos de Solidão, foi inspirada na cidade colombiana onde García Márquez nasceu. Qual é ela?",
    "resposta": "Aracataca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Macondo",
      "https://en.wikipedia.org/wiki/Aracataca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Macondo",
        "situacao": "ok",
        "texto": "Macondo (Spanish pronunciation: [maˈkondo]) is a fictional town described in Gabriel García Márquez's novel One Hundred Years of Solitude (as well as several others of his works). It is the hometown of the Buendía family.\n[…]\nMacondo is often supposed to draw from García Márquez's childhood town, Aracataca, near the north (Caribbean) coast of Colombia, 80 km south of Santa Marta.\n[…]\nIn June 2006, there was a referendum to change the name of the town from Aracataca to Macondo, which ultimately failed due to low turnout.\n[…]\nIn the first chapter of his autobiography, Living to Tell the Tale, García Márquez states that he took the name Macondo from a sign at a banana plantation  near Aracataca. He also mentions the fact that Macondo is the local name of the tree Cavanillesia platanifolia, which grows in that area.\n[…]\nEarly in the 1974 film Chinatown, Jake Gittes spies on Hollis Mulwray at the fictional \"El Macondo Apartments\". Production director Richard Sylbert says this was indeed a reference to the fictional town created by García Márquez in One Hundred Years of Solitude.\n[…]\nMacondo is the name of a refugee settlement in Simmering, a municipality on the outskirts of Vienna, Austria, named after Garcia Márquez's fictitious town by Chilean refugees. It has been home to successive waves of refugees since Hungarians came en masse after the revolution of 1956, followed by Czechoslovak and Romanian waves in 1968, Vietnamese boat people and Chileans fleeing Pinochet in the early 1970s.\n[…]\nThe Marquéz Family in the indie video game Kentucky Route Zero owns a house on Macondo Lane.\n[…]\nIn Light Over Liskeard by Louis de Bernières, the main character's best friend Theodore Pitt stayed close to Macondo and Aracataca before."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Aracataca",
        "situacao": "ok",
        "texto": "Aracataca (colloquially sometimes referred to as \"Cataca\") is a town and municipality located in the Department of Magdalena, in Colombia's Caribbean Region. Aracataca is a river town founded in 1885. The town stands beside a small river of the same name, the Aracataca river, that flows from the nearby Sierra Nevada de Santa Marta mountain range into the Ciénaga Grande de Santa Marta, a lagoon of \n[…]\nAracataca is the inspiration for the fictional town of Macondo in Gabriel García Márquez's novel One Hundred Years of Solitude. On June 25, 2006, a referendum to rename the town \"Aracataca-Macondo\" failed due to a low turnout.\n[…]\nLeo Matiz (1917–1998) was a Colombian photographer, caricaturist, newspaper publisher, painter, and gallery owner. Born in the small village of Aracataca, Colombia, he shared his hometown with the author Gabriel García Márquez. Matiz traveled extensively, selling caricatures and illustrations to support himself. His gallery hosted the first exhibition of Colombian artist Fernando Botero in 1951.\n[…]\n3. García Márquez House Museum: The García Márquez House Museum, located in Aracataca, Colombia, is a significant cultural landmark dedicated to honoring the life and work of Gabriel García Márquez, one of Latin America's most celebrated authors. The museum is housed in the author's childhood home, where he spent his early years and was deeply influenced by the stories, people, and landscapes of the region.\n[…]\n4. Casa del Telegrafista: The Casa del Telegrafista, or Telegraph Operator's House, is a historic site located in Aracataca, Colombia. This house holds significance as it is where Gabriel García Márquez, the Nobel Prize-winning author, spent part of his childhood. García Márquez often referenced this house in his works, including his masterpiece \"One Hundred Years of Solitude,\" where it served as inspiration for the Buendía family home.\n[…]\nAracataca has 3 caseríos:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Macondo",
        "situacao": "ok",
        "texto": "Macondo é um povoamento humano do tipo vila, povoado ou aldeia fictícia onde se passa boa parte da história do livro Cem Anos de Solidão do autor Gabriel García Márquez.\n[…]\nIsso se deu no lugar em que José Arcadio Buendía sonhou com uma cidade onde as casas tinham paredes de espelho.\n[…]\nMacondo foi baseada na cidade da Aracataca, onde Gabriel G. Marquez viveu parte da sua infância. Macondo era o nome de um bananal que se localizava nas imediações da cidade. Na Língua Bantu, Macondo quer dizer Banana. Há quem diga que Macondo foi inspirada pela ficcional Yoknapatawpha County, de William Faulkner, embora outras pessoas defendam que o escritor não tenha lido nenhuma peça de Faulkner enquanto escrevia o romance.\n[…]\nA aldeia aparece pela primeira vez no livro 'A Revoada'. Pouco tempo depois, aparece em Cem anos de Solidão. Em \"A Má Hora\", outro romance de Garcia, Macondo é apenas citada, criando e demonstrando uma ligação entre os dois romances. Também aparece no conto \"Isabel vendo chover em Macondo\", o qual, como sugere o título, se passa em Macondo. Na narrativa de Cem Anos de Solidão, a aldeia cresce a partir de um pequeno assentamento com quase nenhum contato com o mundo exterior.\n[…]\nEmbora não tenha sido acatado, houve um movimento a fim de mudar o nome de Aracataca, cidade natal de Gabriel García Márquez, para Macondo.\n[…]\nSolo Literatura / García Márquez\n[…]\nGabriel García Márquez en el portal de literatura.us",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Cem Anos de Solidão",
      "descricao": "Romance de Gabriel García Márquez, publicado em 1967, ambientado na cidade fictícia de Macondo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "García Márquez escreveu Cem Anos de Solidão na Cidade do México, mas o livro saiu em 1967 por uma editora de que cidade?",
    "resposta": "Buenos Aires",
    "fonte": [
      "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude",
        "situacao": "ok",
        "texto": "One Hundred Years of Solitude (Spanish: Cien años de soledad, Latin American Spanish: [sjen ˈaɲos ðe soleˈðað]) is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the fictitious town of Macondo. The novel is often cited as one of the supreme achievements in world literature.\n[…]\nSince it was first published in May 1967 in Buenos Aires by Editorial Sudamericana, the book has been translated into 46 languages and sold more than 50 million copies. The novel, considered García Márquez's magnum opus, remains widely acclaimed and is recognized as one of the most significant works both in the Hispanic literary canon and in world literature.\n[…]\nIn 1965, Gabriel García Márquez was driving to Acapulco for a vacation with his family when he thought of the beginning for a new book; he then turned his car around, asked his wife to manage the family's finances for the coming months, and drove back home to Mexico City. For the next year and a half, García Márquez spent his time writing what would eventually become One Hundred Years of Solitude.\n[…]\nOn October 21, 2022, Netflix commemorated the fortieth anniversary of the announcement of García Márquez's Nobel Prize in Literature with an exclusive preview of One Hundred Years of Solitude.\n[…]\nOn the tenth anniversary of García Márquez's death, Netflix released the official teaser for One Hundred Years of Solitude and revealed that the series will run for sixteen episodes.\n[…]\nMagical Realism in \"One Hundred Years of Solitude\"\n[…]\n\"The Solitude of Latin America\", Nobel lecture by Gabriel García Márquez, 8 December 1982\n[…]\n\"On Marquez's One Hundred Years of Solitude\" – a lecture by Ian Johnston\n[…]\nGarcía Márquez, Gabriel (1967). \"Colombian writer Gabriel García Márquez reading the first chapter of One Hundred Years of Solitude\" (in Spanish)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cem_Anos_de_Solid%C3%A3o",
        "situacao": "ok",
        "texto": "Cem Anos de Solidão (em espanhol, Cien Años de Soledad) é um romance do escritor colombiano Gabriel García Márquez, Prêmio Nobel da Literatura em 1982. É considerada uma das obras mais importantes da literatura colombiana e sul-americana e umas das mais lidas e traduzidas de todo o mundo.\n[…]\nDurante o IV Congresso Internacional da Língua Espanhola, realizado em Cartagena, na Colômbia, em março de 2007, Cem Anos de Solidão foi considerada a segunda obra mais importante de toda a literatura hispanófona, ficando apenas atrás de Dom Quixote de la Mancha. Valendo-se do estilo conhecido como realismo mágico e do romance histórico, Cem Anos de Solidão cativou milhões de leitores e ainda atrai milhares de fãs à literatura constante de Gabriel García Márquez.\n[…]\nA primeira edição da obra foi publicada em Buenos Aires, Argentina, em maio de 1967, pela editora Editorial Sudamericana, com uma tiragem inicial de 10 mil exemplares. Nos dias de hoje, já foram vendidos mais de 50 milhões de exemplares nos 46 idiomas em que a obra foi traduzida.\n[…]\nSanta Sofía de la Piedad dá à luz Remédios, a Bela, e aos gêmeos José Arcadio Segundo e Aureliano Segundo. Personagem que segue a família Buendía, porém sem grandes feitos, sendo inclusive considerada como uma serviçal por sua nora Fernanda del Carpio. Vai embora para morrer em sua cidade após a morte de seus três filhos.\n[…]\nA música Banana Co, do Radiohead, é inspirada nesta obra de Gabriel Garcia Marquez. Usa imaginário da obra para descrever a devastação que as companhias de produção de bananas provocavam nos países subdesenvolvidos da América no século XX.\n[…]\nA banda \"Francisco, el hombre\" tem seu nome inspirado em um personagem do livro, Francisco, o Homem, que é um errante cantador.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Romeu e Julieta",
      "descricao": "Tragédia de William Shakespeare sobre dois jovens apaixonados de famílias inimigas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade do norte da Itália Shakespeare ambientou a história de Romeu e Julieta?",
    "resposta": "Verona",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Romeu_e_Julieta",
      "https://en.wikipedia.org/wiki/Romeo_and_Juliet"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Romeu_e_Julieta",
        "situacao": "ok",
        "texto": "Romeu e Julieta (no original em inglês: Romeo and Juliet) é uma tragédia escrita entre 1591 e 1595, nos primórdios da carreira literária de William Shakespeare, sobre dois adolescentes cuja morte acaba unindo suas famílias, outrora em pé de guerra. A peça ficou entre as mais populares na época de Shakespeare e, ao lado de Hamlet, é uma das suas obras mais levadas aos palcos do mundo inteiro. Hoje,\n[…]\nRomeu e Julieta pertence a uma tradição de romances trágicos que remonta à antiguidade. Seu enredo é baseado em um conto italiano, traduzido em versos como A Trágica História de Romeu e Julieta, por Arthur Brooke, em 1562. E refeito em prosa como Palácio do Prazer, por William Painter, em 1582. Shakespeare baseou-se em ambos, mas reforçou a atuação dos personagens secundários, especialmente Mercúcio e Páris, a fim de expandir o enredo.\n[…]\nRomeu, por exemplo, fica mais versado nos sonetos à medida que a trama se desenvolve.\n[…]\nEm mais de cinco séculos, Romeu e Julieta foi adaptada em inúmeras áreas, como teatro, cinema, música e literatura. William Davenant tentou revigorá-la durante a Restauração inglesa. David Garrick modificou cenas e removeu passagens consideradas indecentes no século XVIII. Charlotte Cushman, no século XIX, apresentou ao público uma versão que preservou o texto original de Shakespeare.\n[…]\nAlém de se mostrar influente no ultrarromantismo português e no naturalismo brasileiro, Romeu e Julieta mantém-se famosa nas produções cinematográficas atuais, notavelmente na versão de 1968 de Zeffirelli, indicado ao Oscar como melhor filme, e no mais recente Romeu + Julieta, de Luhrmann, que traz seu enredo para a atualidade.\n[…]\nRomeu e Julieta retrata a interação entre três proeminentes famílias em Verona:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Romeo_and_Juliet",
        "situacao": "ok",
        "texto": "The Tragedy of Romeo and Juliet, often shortened to Romeo and Juliet, is a tragedy written by William Shakespeare about the romance between two young Italians from feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed. The title characters are regarded as archetypal young lovers.\n[…]\nIt is unknown when exactly Shakespeare wrote Romeo and Juliet. Juliet's Nurse refers to an earthquake she says occurred 11 years ago. This may refer to the Dover Straits earthquake of 1580, which would date that particular line to 1591. Other earthquakes—both in England and in Verona—have been proposed in support of the different dates.\n[…]\nThomas Otway's The History and Fall of Caius Marius, one of the more extreme of the Restoration adaptations of Shakespeare, debuted in 1679. The scene is shifted from Renaissance Verona to ancient Rome with a balcony featuring; Romeo is Marius, Juliet is Lavinia, the feud is between patricians and plebeians; Juliet/Lavinia wakes from her potion before Romeo/Marius dies. Otway's version was a hit, and was acted for the next seventy years.\n[…]\nRecent performances often set the play in the contemporary world. For example, in 1986, the Royal Shakespeare Company set the play in modern Verona. Switchblades replaced swords, feasts and balls became drug-laden rock parties, and Romeo killed himself by hypodermic needle.\n[…]\nDavid Blixt's 2007 novel The Master of Verona imagines the origins of the famous Capulet-Montague feud, combining the characters from Shakespeare's Italian plays with the historical figures of Dante's time. Blixt's subsequent novels Voice of the Falconer (2010), Fortune's Fool (2012), and The Prince's Doom (2014) continue to explore the world, following the life of Mercutio as he comes of age.\n[…]\nRomeo and Juliet HTML Annotated Play"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Hamlet",
      "descricao": "Tragédia de William Shakespeare sobre o príncipe da Dinamarca que vinga a morte do pai."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O castelo de Kronborg, cenário de Hamlet, fica em que cidade dinamarquesa?",
    "resposta": "Helsingør",
    "distratores": [
      "Copenhague",
      "Odense",
      "Aarhus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kronborg",
      "https://en.wikipedia.org/wiki/Hamlet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kronborg",
        "situacao": "ok",
        "texto": "Kronborg (Danish pronunciation: [ˈkʰʁoːnˌpɒˀ]) is a castle and historical stronghold in the town of Helsingør, Denmark. Immortalised as Elsinore in William Shakespeare's play Hamlet, Kronborg is one of the most important Renaissance castles in Northern Europe. It was inscribed on the UNESCO World Heritage List in 2000.\n[…]\nOn the eastern shore the Helsingborg Castle had been operating since the Middle Ages. With the two castles and guard ship, Denmark could control all navigation through the Sound.\n[…]\nKronborg Castle is located on the extreme northeastern tip of the island of Zealand, to the northeast of the historic centre of the town of Helsingør. It is situated at an elevation of 12 metres, on a small foreland jutting out into the narrowest point of the Øresund, the sound between the Danish island of Zealand and the Swedish province of Scania, that was also Danish until 1658.\n[…]\nRendered as \"Elsinore,\" actually the anglicised name of the surrounding town of Helsingør, Kronborg serves as the setting of William Shakespeare's tragedy Hamlet, Prince of Denmark. The play has been performed at the castle several times.\n[…]\nKulturhavn Kronborg is an initiative of 2013 to offer a variety of culture experiences to residents and visitors to Helsingør. Kulturhavn Kronborg is a joint initiative by Kronborg Castle, Danish Maritime Museum, Kulturværftet and Helsingør harbour.\n[…]\nThe castle was the setting of the televised holiday series Jul på Kronborg (English: Christmas at Kronborg), which featured both Hamlet and Holger the Dane. 'Elsinore Beer' is named for the castle in the 1983 comedy Strange Brew, starring Rick Moranis and Dave Thomas.\n[…]\nKronborg Glacier\n[…]\nKronborg Tapestries\n[…]\nUNESCO's page on Kronborg Castle\n[…]\nKronborg Castle UNESCO Collection on Google Arts and Culture\n[…]\nKronborg Castle picture gallery at Remains.se"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hamlet",
        "situacao": "ok",
        "texto": "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (), is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play. Set in Denmark, the play depicts Prince Hamlet and his attempts to exact revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother.\n[…]\nHamlet\", was produced on Broadway for 131 performances in 1945/46.\n[…]\nIn 2025 Radiohead's Thom Yorke collaborated with directors Steven Hoggett and Christine Jones at the Royal Shakespeare Company to make a work fusing Hamlet with Radiohead's album Hail to the Thief. The work featured Samuel Blenkin as Hamlet.\n[…]\nHamlet Archived 25 February 2021 at the Wayback Machine at the British Library\n[…]\n​Hamlet​ at the Internet Broadway Database\n[…]\nHamlet at the Internet Off-Broadway Database (archived)\n[…]\nHamlet public domain audiobook at LibriVox\n[…]\nThe full text of Hamlet at Wikisource, in multiple editions\n[…]\nHamlet Archived 7 April 2018 at the Wayback Machine Complete text on one page with definitions of difficult words and explanations of difficult passages.\n[…]\nHamlet, Folger Shakespeare Library\n[…]\nHamlet at Standard Ebooks\n[…]\nHamlet at Project Gutenberg\n[…]\nHamlet at the Internet Shakespeare Editions – Transcripts and facsimiles of Q1, Q2 and F1.\n[…]\nHamlet at Open Source Shakespeare – A complete text of Hamlet based on Q2.\n[…]\nHamlet – Annotated text aligned to Common Core standards.\n[…]\nHamlet – Etext in Spanish available in many formats at Gutenberg.org.\n[…]\nHamlet on the Ramparts – The MIT's Shakespeare Electronic Archive.\n[…]\nHamletworks.org – Scholarly resource with multiple versions of Hamlet, commentaries, concordances, and more.\n[…]\nDepictions and commentary of Hamlet paintings Archived 23 November 2020 at the Wayback Machine\n[…]\nClear Shakespeare Hamlet – A word-by-word audio guide through the play."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Castelo_de_Kronborg",
        "situacao": "ok",
        "texto": "O castelo de Kronborg está situado perto da cidade de Helsingor na ponta extrema da Zelândia no ponto mais estreito de Öresund, o estreito entre a Dinamarca e a Suécia. Nesta parte, o estreito tem somente quatro quilômetros de largura, daí a importância estratégica de manter um forte nesta posição. O castelo tem, por séculos, sido um dos mais importantes do Renascimento no norte da Europa e foi ad\n[…]\nDe 1739 até meados do século XIX, Kronborg foi usado como uma prisão para escravos. Os internos eram guardados pelos soldados alojados no castelo. Os escravos eram condenados do sexo masculino que tinham sido sentenciados ao trabalho nas fortificações do castelo.\n[…]\nA importância de Kronborg enquanto castelo real diminuiu, as forças armadas vieram a ter um papel maior. De 1785 a 1922, o castelo estava completamente sob a administração militar. Durante este período, inúmeras renovações foram terminadas.\n[…]\nKronborg é também conhecido por muitos como Elsinor, o palco para muitas representações de Hamlet, famosa tragédia de William Shakespeare. Hamlet foi representado no castelo pela primeira vez para marcar o 200° aniversário da morte de Shakespeare, com o elenco consistindo de soldados da guarnição do castelo. O palco estava na torre de telégrafo no canto sudoeste do castelo. Desde então a peça foi executado diversas vezes no pátio e em vários locais da fortificação.\n[…]\nKronborg abriga uma estátua de Ogier o Dinamarquês (Holger Danske), que, de acordo com a lenda, descansa aí até o dia em que a Dinamarca estiver em grande perigo, tempo no qual ele ira levantar-se e salvar a nação.\n[…]\nO castelo foi cenário para o calendário de natal de TV, Jul på Kronborg, o qual apresentava tanto Hamlet como Ogier o Dinamarquês como Cristiano IV.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Miguel de Cervantes",
      "descricao": "Escritor espanhol (1547–1616), autor de Dom Quixote."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1575, voltando para a Espanha, Cervantes foi capturado por piratas e passou cinco anos cativo em que cidade do norte da África?",
    "resposta": "Argel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Miguel_de_Cervantes",
      "https://pt.wikipedia.org/wiki/Miguel_de_Cervantes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Miguel_de_Cervantes",
        "situacao": "ok",
        "texto": "Miguel de Cervantes Saavedra ( sur-VAN-teez, -⁠tiz; Spanish: [miˈɣel de θeɾˈβantes sa(.a)ˈβeðɾa]; 29 September 1547 (assumed) – 22 April 1616) was a Spanish writer widely regarded as the greatest writer in the Spanish language and one of the world's pre-eminent novelists. He is best known for his two-part novel Don Quixote, a work considered to be the first modern novel.\n[…]\nIn early September 1575, Cervantes and Rodrigo left Naples on the galley Sol; as they approached Barcelona on 26 September, their ship was captured by Ottoman corsairs, and the brothers taken to Algiers, to be sold as slaves, or – as was the case of Cervantes and his brother – held for ransom, if this would be more lucrative than their sale as slaves. Rodrigo was ransomed in 1577, but his family could not afford the fee for Cervantes, who was forced to remain.\n[…]\nCervantes claimed to have written more than 20 plays, such as El trato de Argel, based on his experiences in captivity. Such works were extremely short-lived, and even Lope de Vega, the best-known playwright of the day, could not live on their proceeds. In 1585, he published La Galatea, a conventional pastoral romance that received little contemporary notice; despite promising to write a sequel, he never did so.\n[…]\nTrato de Argel; based on his own experiences, deals with the life of Christian slaves in Algiers;\n[…]\nLos baños de Argel,\n[…]\nThese plays and short farces, except for Trato de Argel and La Numancia, made up Ocho Comedias y ocho entreméses nuevos, nunca representados (Eight Comedies and Eight New Interludes, Never Before Performed), which appeared in 1615. The dates and order of composition of Cervantes's short farces are unknown.\n[…]\nWorks by Miguel de Cervantes at Project Gutenberg\n[…]\nInformation about Miguel de Cervantes\n[…]\nMiguel de Cervantes Collection From the Rare Book and Special Collection Division at the Library of Congress"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Miguel_de_Cervantes",
        "situacao": "ok",
        "texto": "Miguel de Cervantes Saavedra ([sɜrˈvæntiːz,_ʔtɪz] sur-VAN-teez-,_--tiz; es; 29 de setembro de 1547 (presumido) – 22 de abril de 1616) foi um escritor espanhol amplamente considerado como o maior escritor da língua espanhola e um dos romancistas proeminentes do mundo. Ele é mais conhecido por seu romance em duas partes Dom Quixote, uma obra considerada o primeiro romance moderno.\n[…]\nEm 1569, Cervantes foi forçado a deixar a Espanha e mudar-se para Roma, onde trabalhou na casa de um cardeal. Em 1570, alistou-se em um regimento de infantaria da Marinha Espanhola, foi gravemente ferido na Batalha de Lepanto em outubro de 1571 e perdeu o uso do braço e da mão esquerda. Serviu como soldado até 1575, quando foi capturado por piratas berberes; após cinco anos em cativeiro, foi resgatado e retornou a Madrid.\n[…]\nNo início de setembro de 1575, Cervantes e Rodrigo deixaram Nápoles na galé Sol; ao se aproximarem de Barcelona em 26 de setembro, seu navio foi capturado por corsários otomanos, e os irmãos foram levados para Argel para serem vendidos como escravos ou — como foi o caso de Cervantes e seu irmão — mantidos para resgate, se isso fosse mais lucrativo. Rodrigo foi resgatado em 1577, mas sua família não pôde pagar a taxa de Cervantes, que foi forçado a permanecer.\n[…]\nCervantes afirmou ter escrito mais de 20 peças, como El trato de Argel, baseada em suas experiências no cativeiro. Tais obras tiveram vida extremamente curta, e até Lope de Vega, o dramaturgo mais conhecido da época, não conseguia viver de seus rendimentos. Em 1585, publicou A Galateia, um romance pastoril convencional que recebeu pouca atenção contemporânea; apesar de prometer escrever uma continuação, ele nunca o fez.\n[…]\nCervantes. Um município na província de Lugo, Galiza, Espanha, mas o nome da cidade não é baseado em Miguel de Cervantes (nem há evidências ligando ele ou sua família a esta cidade)."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "O Diário de Anne Frank",
      "descricao": "Diário escrito pela adolescente judia Anne Frank enquanto vivia escondida dos nazistas, entre 1942 e 1944."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Entre 1942 e 1944, Anne Frank escreveu seu diário escondida com a família num anexo secreto. Em que cidade?",
    "resposta": "Amsterdã",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Diary_of_a_Young_Girl",
      "https://pt.wikipedia.org/wiki/O_Di%C3%A1rio_de_Anne_Frank"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Diary_of_a_Young_Girl",
        "situacao": "ok",
        "texto": "The Diary of a Young Girl, commonly referred to as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands. The family was apprehended in 1944, and Anne Frank died of typhus in the Bergen-Belsen concentration camp in 1945. Anne's diaries were retrieved by \n[…]\nThe diary has since been published in more than 70 languages. It was first published under the title Het Achterhuis. Dagboekbrieven 14 Juni 1942 – 1 Augustus 1944 (Dutch: [ət ˈɑxtərˌɦœys]; The Annex: Diary Notes 14 June 1942 – 1 August 1944) by Contact Publishing in Amsterdam in 1947.\n[…]\nThis caught the interest of Contact Publishing in Amsterdam, who approached Otto Frank to submit a Dutch draft of the manuscript for their consideration. They offered to publish, but advised Otto Frank that Anne's candor about her emerging sexuality might offend certain conservative quarters, and suggested cuts. Further entries were also deleted. The diary – which was a combination of version A and version B – was published under the name Het Achterhuis.\n[…]\nThe first major adaptation to quote literal passages from the diary was 2014's Anne, authorised and initiated by the Anne Frank Foundation in Basel. After a two-year continuous run at the purpose-built Theater Amsterdam in the Netherlands, the play had productions in Germany and Israel.\n[…]\nIn 1986, the results were published: the handwriting attributed to Anne Frank was positively matched with contemporary samples of Anne Frank's handwriting, and the paper, ink, and glue found in the diaries and loose papers were consistent with materials available in Amsterdam during the period in which the diary was written.\n[…]\nThe Diary of a Young Girl: The Definitive Edition, Otto H. Frank and Mirjam Pressler (Editors); Susan Massotty (Translator). Doubleday, 1991."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Di%C3%A1rio_de_Anne_Frank",
        "situacao": "ok",
        "texto": "The Diary of Anne Frank (bra/prt: O Diário de Anne Frank) é um filme estadunidense de 1959, do gênero drama bélico biográfico, dirigido por George Stevens, com roteiro de Frances Goodrich e Albert Hackett baseado em sua peça teatral The Diary of Anne Frank, por sua vez inspirada no livro Diário de Anne Frank, de Anne Frank.\n[…]\nAnne Frank é uma jovem judia de 13 anos que vive escondida no sótão de um estabelecimento comercial juntamente com seus pais e sua irmã Margot. Além deles, vive no mesmo local uma outra família de origem judia.\n[…]\nA jovem documenta a sua vida num diário enquanto se esconde , Durante dois anos eles ficaram escondidos, vivendo sempre na apreensão de saberem que podiam ser traídos ou descobertos a qualquer momento e mandados para um campo de concentração. Apesar disto, eles sonham com dias melhores, ao mesmo tempo em que Peter e Anne se apaixonam."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "James Joyce",
      "descricao": "Escritor irlandês (1882–1941), autor de Ulisses e Dublinenses."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O irlandês James Joyce, autor de Ulisses, morreu em 1941 longe de Dublin. Em que cidade suíça ele está enterrado?",
    "resposta": "Zurique",
    "fonte": [
      "https://en.wikipedia.org/wiki/James_Joyce",
      "https://pt.wikipedia.org/wiki/James_Joyce"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/James_Joyce",
        "situacao": "ok",
        "texto": "James Augustine Aloysius Joyce (born James Augusta Joyce; 2 February 1882 – 13 January 1941) was an Irish novelist, poet, and literary critic. He contributed to the modernist movement and is regarded among the most influential and important writers of the 20th century. Joyce's novel Ulysses (1922) is a landmark in which the episodes of Homer's Odyssey are paralleled in a variety of literary styles\n[…]\nJoyce was born on 2 February 1882 at 41 Brighton Square, Rathgar, Dublin, Ireland, to John Stanislaus and Mary Jane \"May\" (née Murray) Joyce. He was the eldest of ten surviving siblings. He was baptised Catholic as James Augustine Joyce in the nearby St Joseph's Church in Terenure on 5 February 1882 by Father John O'Mulloy. His godparents were Philip and Ellen McCann. The Joyce family came from Fermoy in County Cork, where they owned a small salt and lime works.\n[…]\nJoyce's paternal grandfather, James Augustine, married Ellen O'Connell, daughter of John O'Connell, a Cork alderman who owned a drapery business and other properties in Cork City. Her family claimed kinship with the political leader Daniel O'Connell, who had helped secure Catholic emancipation for the Irish in 1829.\n[…]\nJoyce refused the lessons, but kept singing in Dublin concerts that year. His performance at a concert given on 27 August may have solidified Nora's devotion to him. Although Joyce did not pursue a singing career, he included thousands of musical allusions in his literary works.\n[…]\nDedicated centres in Dublin include the James Joyce Centre in North Great George's Street, the James Joyce Tower and Museum in Sandycove at the Martello tower where Joyce briefly lived and where he set the opening scene in Ulysses, and the Dublin Writers Museum.\n[…]\n\"Archival material relating to James Joyce\". UK National Archives.\n[…]\nJames Joyce from Dublin to Ithaca Exhibition from the collections of Cornell University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/James_Joyce",
        "situacao": "ok",
        "texto": "James Augustine Aloysius Joyce (Terenure, Irlanda, 2 de fevereiro de 1882 – Zurique, Suíça, 13 de janeiro de 1941) foi um romancista, contista e poeta da Irlanda que viveu boa parte de sua vida expatriado. É amplamente considerado um dos maiores escritores do século XX. Suas obras mais conhecidas são o volume de contos Dublinenses/Gente de Dublin (1914) e os romances Retrato do Artista Quando Jove\n[…]\nJames Augustine Aloysius Joyce nasceu em 2 de fevereiro de 1882, apenas uma semana depois de sua contemporânea Virginia Woolf, o mais velho dos dez filhos de John Stanislaus Joyce (1849–1931), na casa de seus avós paternos no número 44 da Brighton Square, situada na hoje extinta comensalidade de Terenure, então uma localidade predominantemente rural das proximidades da Dublin e desde 1958 incorporada ao subúrbio da capital irlandesa, à época de seu nascimento membro da diocese de Dublin e território do governo britânico no Domínio da Ilha da Irlanda, membro integrante do Reino Unido da Grã-Bretanha e Irlanda, hoje República da Irlanda.\n[…]\nEsta também foi iniciada na cidade italiana em 1914, e ainda levaria muitos anos para ser completada e publicada. Porém, começada a guerra, a permanência dos Joyce em território austro-húngaro se torna impossível, já que eram cidadãos britânicos e, portanto, inimigos. Assim, em 1915, Joyce e Nora se mudam para a neutra Suíça; após breves estadas em outras cidades, se estabelecem em Zurique.\n[…]\nCom a erupção da Segunda Guerra Mundial, Joyce teve de deixar Paris e por fim voltou a Zurique, quase cego, em 1940. No começo do ano seguinte, morre de úlcera duodenal perfurada e peritonite generalizada, durante uma operação para salvar sua vida. Está enterrado no Cemitério Fluntern, naquela cidade, junto com Nora.\n[…]\nBBC: Fans descend on Joyce's Dublin\n[…]\nJoyce, James. Música de Câmara XXXV. Tradução Adrian'dos Delima. Blog RIMA & VIA. 22/05/2010."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pablo Neruda",
      "descricao": "Poeta chileno (1904–1973), Nobel de Literatura em 1971, autor de Vinte Poemas de Amor e uma Canção Desesperada."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Pablo Neruda está sepultado ao lado da esposa, diante do mar, na sua casa de que localidade do litoral chileno?",
    "resposta": "Isla Negra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pablo_Neruda",
      "https://pt.wikipedia.org/wiki/Pablo_Neruda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pablo_Neruda",
        "situacao": "ok",
        "texto": "Pablo Neruda ( nə-ROO-də; Spanish: [ˈpaβlo neˈɾuða] ; born Ricardo Eliécer Neftalí Reyes Basoalto; 12 July 1904 – 23 September 1973) was a Chilean poet-diplomat and politician who won the 1971 Nobel Prize in Literature.\n[…]\nRicardo Eliécer Neftalí Reyes Basoalto was born on 12 July 1904, in Parral, Chile, a city in Linares Province, now part of the greater Maule Region, some 350 km south of Santiago. His father, José del Carmen Reyes Morales, was a railway employee, and his mother Rosa Neftalí Basoalto Opazo was a school teacher who died on 14 September two months after he was born. On 26 September, he was baptized in the parish of San Jose de Parral.\n[…]\nAs the coup d'état of 1973 unfolded, Neruda was diagnosed with prostate cancer. The military coup led by General Augusto Pinochet saw Neruda's hopes for Chile destroyed. Shortly thereafter, during a search of the house and grounds at Isla Negra by Chilean armed forces at which Neruda was reportedly present, the poet famously remarked: \"Look around – there's only one thing of danger for you here – poetry.\"\n[…]\nNeruda owned three houses in Chile; today, they are all open to the public as museums: La Chascona in Santiago, La Sebastiana in Valparaíso, and Casa de Isla Negra in Isla Negra, where he and Matilde Urrutia are buried. A bust of Neruda stands on the grounds of the Organization of American States building in Washington, D.C.\n[…]\nMemorial de Isla Negra. Buenos Aires, Losada, 1964. 5 volúmenes.\n[…]\nThe poetry of Pablo Neruda. Costa, René de., 1979\n[…]\n\"The ecstasist: Pablo Neruda and his passions\". The New Yorker. 8 September 2003\n[…]\nPoems of Pablo Neruda\n[…]\nPablo Neruda recorded at the Library of Congress for the Hispanic Division's audio literary archive on June 20, 1966"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pablo_Neruda",
        "situacao": "ok",
        "texto": "Pablo Neruda, nascido Ricardo Eliécer Neftalí Reyes Basoalto (Parral, 12 de julho de 1904 – Santiago, 23 de setembro de 1973), mais conhecido pelo seu pseudónimo e, mais tarde, nome legal, Pablo Neruda (Espanhol: [ˈpaβlo neˈɾuða]), foi um escritor, poeta, político e diplomata chileno que ganhou o Prêmio Nobel da Literatura em 1971.\n[…]\nEm 1953 constrói sua casa em Santiago, apelidada de \"La Chascona\", para se encontrar clandestinamente com sua amante Matilde, a quem havia dedicado Os Versos do Capitão. A casa foi uma de suas três casas no Chile — as outras duas sendo a \"Casa de Isla Negra\", na localidade de El Quisco, e \"La Sebastiana\", em Valparaíso. \"La Chascona\" foi transformado em museu aberto à visitação. No mesmo ano da construção da casa, Neruda recebeu o Prêmio Lênin da Paz.\n[…]\nEncontra-se sepultado no jardim da sua propriedade em Isla Negra, na localidade de El Quisco, próximo a Santiago, no Chile, ao lado da sua esposa Matilde Urrutia. Postumamente foram publicadas suas memórias em 1974, com o título Confesso que vivi.\n[…]\nEm 1994 um filme chamado Il Postino (também conhecido como O Carteiro e O Poeta ou O Carteiro de Pablo Neruda no Brasil e em Portugal) conta sua história na Isla Negra, no Chile, com sua terceira mulher Matilde. No filme, que é uma obra de ficção, a ação foi transposta para a Itália, onde Neruda teria se exilado. Lá, numa ilha, torna-se amigo de um carteiro que lhe pede para ensinar a escrever versos (para poder conquistar uma bonita moça do povoado).\n[…]\nEm 2004, por ocasião das comemorações do Centenário de seu nascimento, foi instituído o Prêmio Iberoamericano de Poesia Pablo Neruda.\n[…]\nNeruda (site desenvolvido pela Universidade do Chile - em espanhol)\n[…]\nFundación Pablo Neruda (espanhol/inglês)\n[…]\nPoemas de Amor - Poemas de Pablo Neruda\n[…]\nNeruda  - Poeta do Mar\n[…]\nFarol do Saber Pablo Neruda"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "O Velho e o Mar",
      "descricao": "Novela de Ernest Hemingway, de 1952, sobre um velho pescador que luta com um enorme marlim."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Velho e o Mar, de Hemingway, acompanha um velho pescador na luta com um enorme marlim. Em que país se passa a história?",
    "resposta": "Cuba",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
      "https://pt.wikipedia.org/wiki/O_Velho_e_o_Mar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
        "situacao": "ok",
        "texto": "The Old Man and the Sea is a 1952 novella by the American author Ernest Hemingway. Written between December 1950 and February 1951, it was the last major fictional work Hemingway published during his lifetime. It tells the story of Santiago, an aging fisherman, and his long struggle to catch a giant marlin.\n[…]\nHemingway began writing The Old Man and the Sea  in Cuba during a tumultuous period in his life. His previous novel Across the River and Into the Trees had met with negative reviews and, amid a breakdown in relations with his wife Mary, he had fallen in love with his muse Adriana Ivancich. Having completed one book in a planned \"sea trilogy\", Hemingway began to write as an addendum a story about an old man and a marlin that had originally been told to him fifteen years earlier.\n[…]\nAmid a breakdown in marital relations with his wife Mary, Hemingway fell deeper into love with his muse, the young Italian Adriana Ivancich, who spent the winter of 1950–1951 in the Hemingways' company in Cuba. Suddenly finding himself able to write in early December, he completed one book (published in 1970 as Islands in the Stream) of a planned \"sea trilogy\", and, as his passion for Ivancich cooled, set about writing another story.\n[…]\nHemingway's favorite review was from the art historian Bernard Berenson, who wrote that The Old Man and the Sea was superior to Herman Melville's Moby-Dick and equal in many ways to the Homeric epics.\n[…]\nBaker, Carlos (1972). Hemingway: The Writer as Artist (4th ed.). Princeton University Press. ISBN 0691013055.\n[…]\nBurhans Jr., Clinton S. (1962). \"The Old Man and the Sea: Hemingway's Tragic Vision of Man\". In Baker, Carlos (ed.). Ernest Hemingway: Critiques of Four Major Novels. New York: Charles Scribner's Sons. pp. 150–155. OCLC 564729505."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Velho_e_o_Mar",
        "situacao": "ok",
        "texto": "O Velho e o Mar (em inglês: The Old Man and the Sea) é uma novela escrita pelo autor norte-americano Ernest Hemingway e publicada em 1952. Considerada uma das obras mais importantes da literatura do século XX, a narrativa acompanha Santiago, um velho pescador cubano que enfrenta uma longa sequência de azar no mar e parte sozinho em busca de uma grande captura.\n[…]\nAmbientada no mar próximo à costa de Cuba, a história foi inspirada nas experiências de Hemingway com a pesca em alto-mar durante o período em que viveu no país. O estilo simples e direto da narrativa, associado à chamada “teoria do iceberg”, tornou-se uma das principais características da obra e da escrita do autor.\n[…]\nA história se passa em uma pequena vila de pescadores em Cuba e acompanha Santiago, um velho pescador que enfrenta uma longa sequência de azar, passando 84 dias sem conseguir pescar nenhum peixe. Apesar da má fase, Santiago mantém a esperança e decide partir sozinho para o mar em busca de uma grande captura.\n[…]\nNo 85º dia, o pescador consegue fisgar um enorme marlim, considerado o maior peixe que já havia encontrado. O peixe, entretanto, demonstra enorme força e arrasta o barco de Santiago por vários dias em alto-mar. Durante a luta, o velho pescador sofre com cansaço, fome e dores nas mãos, mas continua determinado a vencer o desafio.\n[…]\nSantiago — Protagonista da obra, é um velho pescador cubano experiente que enfrenta uma longa sequência de azar no mar.\n[…]\nA história foi inspirada nas experiências de Hemingway em Cuba, onde viveu durante vários anos e desenvolveu forte ligação com a pesca em alto-mar. O ambiente marítimo da obra reflete o conhecimento do autor sobre pescadores cubanos, além de sua convivência com o mar e a natureza. O romance se passa principalmente no mar próximo à costa de Cuba e utiliza o cenário como elemento simbólico da narrativa."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Dante Alighieri",
      "descricao": "Poeta florentino, autor da Divina Comédia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Exilado de Florença, Dante Alighieri morreu em 1321 e está sepultado em que cidade italiana?",
    "resposta": "Ravena",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dante_Alighieri",
      "https://pt.wikipedia.org/wiki/Dante_Alighieri"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dante_Alighieri",
        "situacao": "ok",
        "texto": "Dante Alighieri (Italian: [ˈdante aliˈɡjɛːri]; most likely baptized Durante di Alighiero degli Alighieri; c. May 1265 – September 14, 1321), widely known mononymously as Dante, was an Italian poet, writer, and philosopher. His Divine Comedy, originally called Comedìa (modern Italian: Commedia) and later christened Divina by Giovanni Boccaccio, is widely considered one of the most important poems o\n[…]\nDante claimed that his family descended from the ancient Romans (Inferno, XV, 76), but the earliest relative he could mention by name was his great-great-grandfather Cacciaguida degli Elisei (Paradiso, XV, 135), born no earlier than about 1100. Dante's father was Alighiero di Bellincione, a businessman and moneylender, and Dante's mother was Bella, probably a member of the Abati family, a noble Florentine family. She died when Dante was not yet ten years old.\n[…]\nDuring Dante's time, most Northern Italian city states were split into two political factions: the Guelphs, who supported the papacy, and the Ghibellines, who supported the Holy Roman Empire. Dante's family was loyal to the Guelphs. The Ghibellines took over Florence at the Battle of Montaperti in 1260, forcing out many of the Guelphs. Although Dante's family were Guelphs, they suffered no reprisals after the battle, probably because of Alighiero's low public standing.\n[…]\nIn 1310, Holy Roman Emperor Henry VII of Luxembourg marched into Italy at the head of 5,000 troops. Dante saw in him a new Charlemagne who would restore the office of the Holy Roman Emperor to its former glory and also retake Florence from the Black Guelphs. He wrote to Henry and several Italian princes, demanding that they destroy the Black Guelphs.\n[…]\nWorks by Dante Alighieri at One More Library (Works in English, Italian, Latin, Arabic, German, French and Spanish)\n[…]\nDante Online manuscripts of works, images and text transcripts by Società Dantesca Italiana"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dante_Alighieri",
        "situacao": "ok",
        "texto": "Dante Alighieri (Florença, entre 21 de maio e 20 de junho de 1265 – Ravena, 14 de setembro de 1321) foi um poeta, escritor e político florentino nascido na atual Itália. Alcunhado il sommo poeta, é considerado um dos maiores e mais influentes poetas de todos os tempos devido à sua epopeia A Divina Comédia, tida como uma das maiores obras do Renascimento.\n[…]\nAo serviço de Guido Novello desempenhou ocasionalmente missões diplomáticas, entre as quais a que o levou a Veneza. Na época, a cidade lagunar encontrava-se em conflito com Guido Novello devido aos frequentes ataques das galés de Ravena à navegação veneziana. Perante a ameaça de guerra, Guido Novello encarregou Dante de interceder junto do Senado de Veneza.\n[…]\nAs febres agravaram-se rapidamente e Dante morreu em Ravena, durante a noite de 13 para 14 de setembro de 1321, com cerca de cinquenta e seis anos.\n[…]\nOs restos mortais de Dante foram objeto de uma longa disputa entre Ravena e Florença poucas décadas após a sua morte, quando a figura do autor da Divina Comédia foi redescoberta pelos seus concidadãos graças à divulgação da biografia escrita por Giovanni Boccaccio.\n[…]\nEnquanto os florentinos reivindicavam os restos mortais por considerarem Dante um ilustre filho da cidade. Já em 1429 o município solicitara à família Da Polenta a restituição dos seus restos, os ravenates defendiam que o poeta deveria permanecer na cidade onde falecera.\n[…]\nQuem genuit parvi Florentia mater amoris.\n[…]\nAs Éclogas são duas composições de caráter bucólico, escritas em latim entre 1319 e 1321, em Ravena, que fazem parte de uma correspondência com Giovanni del Virgilio, intelectual bolonhês. As duas composições de Giovanni del Virgilio receberam os títulos de Egloga I e Egloga III, enquanto as de Dante são a Egloga II e a Egloga IV.\n[…]\nEscritores italianos\n[…]\n«Obras de Dante Alighieri» (em italiano). PDF, TXT, RTF"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Dom Quixote",
      "descricao": "Romance de Miguel de Cervantes, publicado em duas partes, em 1605 e 1615, sobre um fidalgo que se julga cavaleiro andante."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A primeira parte de Dom Quixote, de Cervantes, foi publicada em que século?",
    "resposta": "Século dezessete",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dom_Quixote",
      "https://en.wikipedia.org/wiki/Don_Quixote"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dom_Quixote",
        "situacao": "ok",
        "texto": "Don Quixote, cujo título completo é O Engenhoso Fidalgo Dom Quixote da Mancha, é um romance espanhol de Miguel de Cervantes. Publicado originalmente em duas partes, em 1605 e 1615, o romance é considerado uma obra fundadora da Literatura ocidental e o primeiro romance moderno. O romance foi classificado por muitos autores conhecidos como o \"melhor romance de todos os tempos\" e a \"obra melhor e mai\n[…]\nNão é certo quando Cervantes começou a escrever a Parte Dois de Dom Quixote, mas ele provavelmente não havia avançado muito além do Capítulo LIX no final de julho de 1614. Por volta de setembro, no entanto, uma Parte Dois espúria, intitulada Segundo Volume do Engenhoso Fidalgo Dom Quixote da Mancha: pelo Licenciado Alonso Fernández de Avellaneda, de Tordesillas, foi publicada em Tarragona por um aragonês não identificado que era admirador de Lope de Vega, rival de Cervantes.\n[…]\nEm julho de 1604, Cervantes vendeu os direitos de El ingenioso hidalgo don Quixote de la Mancha (conhecido como Dom Quixote, Parte I) ao editor e livreiro Francisco de Robles por uma quantia desconhecida. A licença para publicação foi concedida em setembro, a impressão terminou em dezembro e o livro saiu em 16 de janeiro de 1605.\n[…]\nEm 1613, Cervantes publicou as Novelas exemplares, dedicadas ao mecenas da época, o Conde de Lemos. Oito anos e meio depois da Parte Um ter aparecido, surgiu a primeira pista de uma futura Segunda Parte. \"Vereis em breve\", diz Cervantes, \"as novas façanhas de Dom Quixote e as graças de Sancho Pança.\" Dom Quixote, Parte Dois, publicada pela mesma editora que a sua antecessora, apareceu no final de 1615, e foi rapidamente reimpressa em Bruxelas e Valência (1616) e Lisboa (1617).\n[…]\nColeção Miguel de Cervantes tem raros primeiros volumes em várias línguas de Dom Quixote. Da Divisão de Livros Raros e Coleções Especiais da Biblioteca do Congresso.\n[…]\n«Don Quichote et Cervantes» (em espanhol)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Don_Quixote",
        "situacao": "ok",
        "texto": "Don Quixote is a novel by Miguel de Cervantes, written in Early Modern Spanish and published in two parts in 1605 and 1615. It is considered a founding work of Western literature and the first modern novel. It is also one of the most-translated books in the world and one of the best-selling books in history.\n[…]\nThe location of the village to which Cervantes alludes in the opening sentence of Don Quixote has been the subject of debate since its publication over four centuries ago. Indeed, Cervantes deliberately omits the name of the village, giving an explanation in the final chapter:\n[…]\nIn July 1604, Cervantes sold the rights of El ingenioso hidalgo don Quixote de la Mancha (known as Don Quixote, Part I) to the publisher-bookseller Francisco de Robles for an unknown sum. License to publish was granted in September, the printing was finished in December, and the book came out on 16 January 1605.\n[…]\nNo sooner was it in the hands of the public than preparations were made to issue derivative (pirated) editions. In 1614 a fake second part was published by a mysterious author under the pen name Avellaneda. This author was never satisfactorily identified. This rushed Cervantes into writing and publishing a genuine second part in 1615, which was a year before his own death. Don Quixote had been growing in favour, and its author's name was now known beyond the Pyrenees.\n[…]\nMan of La Mancha, a musical play based on the life of Cervantes, author of Don Quixote.\n[…]\nPérez, Rolando (2016). See on Academia.edu \"What is Don Quijote/Don Quixote And... And... And the Disjunctive Synthesis of Cervantes and Kathy Acker.\" Cervantes ilimitado: cuatrocientos años del Quijote. Ed. Nuria Morgado. ALDEEU.\n[…]\nDon Quixote public domain audiobook at LibriVox\n[…]\nCervantine Collection of the Biblioteca de Catalunya"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "José Saramago",
      "descricao": "Escritor português (1922–2010), autor de Ensaio sobre a Cegueira e Memorial do Convento."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano José Saramago se tornou o primeiro escritor de língua portuguesa a receber o Nobel de Literatura?",
    "resposta": "1998",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jos%C3%A9_Saramago",
      "https://pt.wikipedia.org/wiki/Jos%C3%A9_Saramago"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jos%C3%A9_Saramago",
        "situacao": "ok",
        "texto": "José de Sousa Saramago (European Portuguese: [ʒuˈzɛ ðɨ ˈso(w)zɐ sɐɾɐˈmaɣu]; 16 November 1922 – 18 June 2010) was a Portuguese writer. He was the recipient of the 1998 Nobel Prize in Literature for his \"parables sustained by imagination, compassion and irony [with which he] continually enables us once again to apprehend an elusory reality.\" His works, some of which can be seen as allegories, common\n[…]\nIn 1998 Saramago was awarded the Nobel Prize in Literature with the prize notation: \"who with parables sustained by imagination, compassion and irony continually enables us once again to apprehend an elusory reality.\"\n[…]\n1998: Nobel Prize in Literature\n[…]\nThe Swedish Academy selected Saramago as the 1998 recipient of the Nobel Prize for Literature. The announcement came when he was about to fly out of Germany after the Frankfurt Book Fair, and caught both him and his editor by surprise. The Nobel committee praised his \"parables sustained by imagination, compassion and irony\", and his \"modern skepticism\" about official truths.\n[…]\nAt the award ceremony in Stockholm on 10 December 1998, Kjell Espmark of the Swedish Academy described Saramago's writing as: literature characterised at one and the same time by sagacious reflection and by insight into the limitations of sagacity, by the fantastic and by precise realism, by cautious empathy and by critical acuity, by warmth and by irony. This is Saramago’s unique amalgam.\n[…]\nGrand Collar of the Military Order of Saint James of the Sword, Portugal (3 December 1998)\n[…]\nMaria da Conceição Madruga, A paixão segundo José Saramago: a paixão do verbo e o verbo da paixão, Campos das Letras, Porto, 1998\n[…]\nHorácio Costa, José Saramago: O Período Formativo, Ed. Caminho, 1998\n[…]\nCarlos Reis, Diálogos com José Saramago, Ed. Caminho, Lisboa, 1998\n[…]\nDonzelina Barroso (Winter 1998). \"Jose Saramago, The Art of Fiction No. 155\". The Paris Review. Winter 1998 (149)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jos%C3%A9_Saramago",
        "situacao": "ok",
        "texto": "José de Sousa Saramago ComSE • GColSE • GColCa (Azinhaga, 16 de novembro de 1922 – Tías, 18 de junho de 2010) foi um escritor português premiado com o Nobel de Literatura de 1998. Também ganhou, em 1995, o Prémio Camões, o mais importante prémio literário da língua portuguesa. Saramago foi considerado o responsável pelo efetivo reconhecimento internacional da prosa em língua portuguesa.\n[…]\nEntre as premiações destacam-se o Prémio Camões (1995), distinção máxima oferecida aos escritores de língua portuguesa, e o Nobel de Literatura (1998), o primeiro concedido a um escritor de língua portuguesa.\n[…]\nEm 1998, quando aterra em Lisboa regressado da cerimónia de atribuição do Prémio Nobel da Literatura, José Saramago desloca-se diretamente ao Centro de Trabalho Vitória do PCP na Avenida da Liberdade onde é recebido por uma homenagem e simbolicamente segue com a comitiva deste partido para a ação de protesto no Terreiro do Paço contra as medidas laborais anunciadas pelo Governo. Participante regular das jornadas de trabalho de construção da Festa do Avante!\n[…]\nEm outubro de 1997, a Feira Internacional do Livro de Frankfurt tem neste ano Portugal como país em destaque, estando José Saramago neste local, em 8 de outubro de 1998, quando recebe a informação de ter ganho o prémio, que, em 7 de dezembro de 1998, Saramago recebe em Estocolmo.\n[…]\nO poeta Manuel Alegre, sobre tais acontecimentos, declarou: \"Isto é uma história portuguesa cheia de preconceitos e fantasmas. Em primeiro lugar é preciso ler o livro de José Saramago. Ele é um grande escritor, mas parece que não se perdoa a Saramago, ser um grande escritor da língua portuguesa, ser um Prémio Nobel e não ser um homem religioso\". \"Ele escreveu um livro, mas não vejo ninguém discutir o livro. Só vejo discutir as opiniões que com todo o direito ele expressou sobre a Bíblia\".\n[…]\nPrémio Literário José Saramago\n[…]\nLiteratura portuguesa"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "1984 (romance)",
      "descricao": "Romance distópico de George Orwell sobre um Estado totalitário que vigia os cidadãos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O romance 1984 saiu poucos meses antes da morte de George Orwell. Em que ano ele foi publicado?",
    "resposta": "1949",
    "distratores": [
      "1945",
      "1948",
      "1952"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
      "https://en.wikipedia.org/wiki/George_Orwell"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
        "situacao": "ok",
        "texto": "Nineteen Eighty-Four (also published as 1984) is a dystopian and speculative fiction novel by the English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final completed book. Thematically, it centres on totalitarianism, mass surveillance and repressive regimentation of people and behaviours. Nineteen Eighty-Four has often been regarded as a classic \n[…]\nNineteen Eighty-Four was published on 8 June 1949 in Britain; Orwell predicted earnings of around £500. A first print of 25,575 copies was followed by a further 5,000 copies in March and August 1950. It had the most immediate impact in the United States, following its release there on 13 June 1949 by Harcourt Brace, & Co. An initial print of 20,000 copies was quickly followed by another 10,000 on 1 July, and again on 7 September.\n[…]\nIn his 1946 essay \"Why I Write\" Orwell explains that the serious works he wrote since the Spanish Civil War (1936–39) were \"written, directly or indirectly, against totalitarianism and for democratic socialism\". Nineteen Eighty-Four is a cautionary tale about revolution betrayed by totalitarian defenders previously proposed in Homage to Catalonia (1938) and Animal Farm (1945), while Coming Up for Air (1939) celebrates the personal and political freedoms lost in Nineteen Eighty-Four (1949).\n[…]\nNineteen Eighty-Four entered the public domain on 1 January 2021, 70 years after Orwell's death, in most of the world. It is still under copyright in the US until 95 years after publication, or 2044.\n[…]\nIn October 1949, after reading Nineteen Eighty-Four, Huxley sent a letter to Orwell in which he argued that it would be more efficient for rulers to stay in power by the softer touch by allowing citizens to seek pleasure in order to control them rather than by use of brute force. He wrote:\n[…]\nNineteen Eighty-Four (Canadian public domain Ebook – PDF)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/George_Orwell",
        "situacao": "ok",
        "texto": "Eric Arthur Blair (25 June 1903 – 21 January 1950) was an English novelist, poet, essayist, journalist, and critic who wrote under the pen name of George Orwell. His work is characterised by lucid prose, social criticism, opposition to all totalitarianism (both authoritarian communism and fascism), and support of democratic socialism.\n[…]\nOrwell is best known for his allegorical novella Animal Farm (1945) and the dystopian novel Nineteen Eighty-Four (1949), although his works also encompass literary criticism, poetry, fiction and polemical journalism.\n[…]\nBy the end of July 1948 Orwell was able to return to Jura and by December he had finished the manuscript of Nineteen Eighty-Four. In January 1949, in a very weak condition, he set off for a sanatorium at Cranham, Gloucestershire. However, streptomycin could not be continued, as he developed toxic epidermal necrolysis, a rare side effect.\n[…]\nIn June 1949, Nineteen Eighty-Four was published to critical acclaim.\n[…]\nOrwell's health continued to decline. In mid-1949, he courted Sonia Brownell, believed to be the model for Julia, the heroine of Nineteen Eighty-Four, and they announced their engagement in September. Shortly afterwards he was removed to University College Hospital in London. Brownell took charge of Orwell's affairs and attended him diligently in the hospital.\n[…]\nOrwell was very lonely after Eileen's death in 1945 and was desperate for a wife, both as companion for himself and as mother for Richard. He proposed marriage to four women, including Celia Kirwan, and eventually Sonia Brownell accepted. Orwell had met her when she was assistant to Cyril Connolly, at Horizon literary magazine. They were married on 13 October 1949, only three months before Orwell's death. Some maintain that Sonia was the model for Julia in Nineteen Eighty-Four.\n[…]\n1949 – Nineteen Eighty-Four"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/1984_%28livro%29",
        "situacao": "ok",
        "texto": "Mil novecentos e oitenta e quatro (em inglês:  Nineteen Eighty-Four; também publicado como 1984) é um romance distópico do escritor inglês George Orwell. Foi publicado em 8 de junho de 1949 pela Secker & Warburg como o nono e último livro de Orwell concluído em vida. Tematicamente, centra-se nas consequências do totalitarismo, da vigilância em massa e da lavagem cerebral na sociedade.\n[…]\n1984 foi publicado em 8 de junho de 1949 no Reino Unido; Orwell previu ganhos de cerca de 500 libras. Uma primeira impressão de 25.575 cópias foi seguida por mais 5 mil cópias em março e agosto de 1950. O romance teve o impacto mais imediato nos Estados Unidos, após seu lançamento em 13 de junho de 1949 pela Harcourt Brace, &amp; Co. Uma impressão inicial de 20 mil cópias foi rapidamente seguida por outras 10 mil em 1º de julho e outra de mesmo número em 7 de setembro.\n[…]\nEm 5 de novembro de 2019, a BBC classificou 1984 em sua lista \"100 romances mais influentes\". Mil novecentos e oitenta e quatro ficou em terceiro lugar na lista dos \"Top Check Outs Of All Time\" da Biblioteca Pública de Nova York. A obra entrou em domínio público em 1º de janeiro de 2021, 70 anos após a morte de Orwell, na maior parte do mundo. O livro, no entanto, ainda está protegido por direitos autorais nos Estados Unidos até 95 anos após a publicação, ou seja, até o ano de 2044.\n[…]\nEm 1974, David Bowie lançou o álbum Diamond Dogs, que se acredita ser vagamente baseado no romance Mil novecentos e oitenta e quatro. Inclui as faixas \"We Are The Dead\", \"1984\" e \"Big Brother\". Antes do álbum ser feito, o empresário de Bowie (MainMan) havia planejado que ele e Tony Ingrassia (consultor criativo do MainMan) co-escrevessem e dirigissem uma produção musical da obra de Orwell, mas a viúva do escritor se recusou a dar os direitos ao MainMan.\n[…]\nMil novecentos e oitenta e quatro na Open Library",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Guerra e Paz",
      "descricao": "Romance de Liev Tolstói, publicado na década de 1860, sobre famílias russas durante as guerras napoleônicas."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Guerra e Paz, de Tolstói, tem como grande acontecimento a invasão da Rússia por Napoleão. Em que ano ela ocorreu?",
    "resposta": "1812",
    "fonte": [
      "https://en.wikipedia.org/wiki/War_and_Peace",
      "https://pt.wikipedia.org/wiki/Guerra_e_Paz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/War_and_Peace",
        "situacao": "ok",
        "texto": "War and Peace (Russian: Война и мир, romanized: Voyna i mir; pre-reform Russian: Война и миръ; IPA: [vɐjˈna i ˈmʲir]) is an epic novel by the Russian author Leo Tolstoy. Set during the Napoleonic Wars, the work comprises both a fictional narrative and chapters in which Tolstoy discusses history and philosophy. An early version was published serially beginning in 1865, after which the entire book w\n[…]\nThe plot of the novel is set 55 years before Tolstoy wrote it, but he had spoken with people who lived through the 1812 French invasion of Russia. He read all the standard histories available in Russian and French about the Napoleonic Wars as well as letters, journals, autobiographies, and biographies of Napoleon and other key players of that era. There are approximately 160 real persons named or referred to in War and Peace.\n[…]\nTolstoy portrays Austerlitz as an early test for Russia, one which ended badly because the soldiers fought for irrelevant things like glory or renown rather than the higher virtues which would produce, according to Tolstoy, a victory at Borodino during the 1812 invasion.\n[…]\nVyazemsky among them) were accusing Tolstoy of consciously distorting 1812 history, desecrating the \"patriotic feelings of our fathers\" and ridiculing dvoryanstvo.\n[…]\nA musical adaptation by Drama Desk and Theatre World Award winner Dave Malloy, called Natasha, Pierre & The Great Comet of 1812 premiered at the Ars Nova theater in Manhattan on October 1, 2012, with Malloy starring as Pierre opposite Phillipa Soo as Natasha and Lucas Steele as Anatole. The show is described as an electropop opera, and is based on Book 8 of War and Peace, focusing on Natasha's affair with Anatole.\n[…]\nWar and Peace, from RevoltLib.com\n[…]\nHomage to War and Peace Searchable map, compiled by Nicholas Jenkins, of places named in Tolstoy's novel (2008).\n[…]\nRussian Text Online\n[…]\nFull text of War and Peace in modern Russian orthography"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_e_Paz",
        "situacao": "ok",
        "texto": "Guerra e Paz (em russo:  Война и мир) é um romance histórico escrito pelo autor russo Liev Tolstói e publicado entre 1865 e 1869 no Russkii Vestnik, um periódico da época. É uma das obras mais volumosas da história da literatura universal. O livro narra a história da Rússia à época de Napoleão Bonaparte (notadamente as guerras napoleônicas na Rússia).\n[…]\nGuerra e Paz fez um enorme sucesso à época de sua publicação, imprevisto até mesmo para o autor, Tolstói.\n[…]\nA novela conta a história de cinco famílias aristocráticas, particularmente os Bezukhovs, os Bolkonskys e os Rostovs, e o vínculo de suas vidas pessoais com a História de 1805–1813, principalmente com a invasão da Rússia por Napoleão em 1812. Como dito acima, Tolstói nega sistematicamente a seus personagens qualquer livre arbítrio significativo: o curso da história tanto pode determinar a felicidade quanto a tragédia.\n[…]\nA imensidão da obra torna-a difícil de resumir de forma clara e concisa. Além disso, o autor alinhava sua narrativa com muitas reflexões pessoais que tendem a quebrar o ritmo da leitura. A ação se instala entre 1805 e 1820, ainda que, em realidade, a essência da obra se concentre em determinados momentos-chave: a Guerra da Terceira Coalizão (1805), a Paz de Tilsit (1807) e enfim a Campanha da Rússia (1812).\n[…]\nA passagem do Grande Cometa de 1811-2 pelos céus coincide com um novo começo de vida para Pierre.\n[…]\nNapoleão\n[…]\nNo entanto, o caráter sociológico e com aspectos científicos de Tolstói ao tratar a história russa passou a ser apreciado, nos anos que se seguiram à publicação do livro, principalmente com uma nova geração de intelectuais que surgia nas universidades dos grandes centros urbanos. Poucos anos depois, \"Guerra e Paz\" se tornou uma das obras mais lidas e impressas no Império Russo, e em grande medida, se tornou a versão mais bem aceita da Guerra de 1812."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "O Grande Gatsby",
      "descricao": "Romance de F. Scott Fitzgerald, de 1925, sobre o milionário misterioso Jay Gatsby em Long Island."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Grande Gatsby, de Scott Fitzgerald, retrata as festas luxuosas de um milionário em Long Island. Em que década se passa a história?",
    "resposta": "Década de 1920",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Great_Gatsby",
      "https://pt.wikipedia.org/wiki/O_Grande_Gatsby"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Great_Gatsby",
        "situacao": "ok",
        "texto": "The Great Gatsby ( ) is a 1925 tragedy novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with Jay Gatsby, a mysterious millionaire obsessed with reuniting with his former lover, Daisy Buchanan.\n[…]\nAfter its publication by Scribner's in April 1925, The Great Gatsby received generally favorable reviews, though some literary critics believed it did not equal Fitzgerald's previous efforts. Compared to his earlier novels, This Side of Paradise (1920) and The Beautiful and Damned (1922), the novel was a commercial disappointment. It sold fewer than 20,000 copies by October, and Fitzgerald's hopes of a monetary windfall from the novel were unrealized.\n[…]\nSet on the prosperous Long Island of 1922, The Great Gatsby provides a critical social history of Prohibition-era America during the Jazz Age. F. Scott Fitzgerald's fictional narrative fully renders that period—known for its jazz music, economic prosperity, flapper culture, libertine mores, rebellious youth, and ubiquitous speakeasies.\n[…]\nAccording to Fitzgerald's wife Zelda, he partly based Gatsby on their enigmatic Long Island neighbor, Max Gerlach. A military veteran, Gerlach became a self-made millionaire due to his bootlegging endeavors and was fond of using the phrase \"old sport\" in his letters to Fitzgerald.\n[…]\nTo Fitzgerald's great disappointment, Gatsby was a commercial failure in comparison with his previous efforts, This Side of Paradise (1920) and The Beautiful and Damned (1922). By October, the book had sold fewer than 20,000 copies.\n[…]\nGatsby at 100 Archived September 19, 2025, at the Wayback Machine Minneapolis Institute of Art 2025 exhibition examining \"The Great Gatsby shaped—and was shaped by—the visual art of his time.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Grande_Gatsby",
        "situacao": "desambiguacao",
        "texto": "The Great Gatsby ou O Grande Gatsby pode se referir a:\n\nO Grande Gatsby (romance), a obra de F. Scott Fitzgerald (original:The Great Gatsby)\nThe Great Gatsby (1926), filme com Warner Baxter e Lois Wilson\nThe Great Gatsby, filme com Alan Ladd e Betty Field\nO Grande Gatsby (1974), filme com Robert Redford e Mia Farrow (original:The Great Gatsby)\nThe Great Gatsby (2000), telefilme com Mira Sorvino\nO "
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Os Contos da Cantuária",
      "descricao": "Coletânea de histórias em versos de Geoffrey Chaucer, contadas por peregrinos a caminho da catedral de Canterbury."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os Contos da Cantuária, de Geoffrey Chaucer, narrados por peregrinos a caminho de uma catedral inglesa, foram escritos em que século?",
    "resposta": "Século quatorze",
    "distratores": [
      "Século doze",
      "Século quinze",
      "Século dezesseis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Canterbury_Tales"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Canterbury_Tales",
        "situacao": "ok",
        "texto": "The Canterbury Tales (Middle English: Tales of Caunterbury) is an anthology of twenty-four short stories written in Middle English by Geoffrey Chaucer between 1387 and 1400. They are mostly in verse, and are presented as part of a fictional storytelling contest held by a group of pilgrims travelling from London to Canterbury in order to visit the shrine of Saint Thomas Becket at Canterbury Cathedr\n[…]\nA Canterbury Tale, a 1944 film, jointly written and directed by Michael Powell and Emeric Pressburger, is loosely based on the narrative frame of Chaucer's tales. The movie opens with a group of medieval pilgrims journeying through the Kentish countryside as a narrator speaks the opening lines of the General Prologue. The scene then makes a now-famous transition to the time of World War II.\n[…]\nBritish Psychedelic rock band Procol Harum's 1967 hit \"A Whiter Shade of Pale\" is often assumed to be referencing the Canterbury Tales through the line, \"as the miller told his tale.\" However, lyricist Keith Reid has denied this, saying he had never read Chaucer when he wrote the line.\n[…]\nCooper, Helen (1996). The Canterbury Tales. Oxford guides to Chaucer (2nd ed.). Oxford: Oxford University Press. ISBN 978-0-19-871155-1.\n[…]\nSobecki, Sebastian (2017). \"A Southwark Tale: Gower, the 1381 Poll Tax, and Chaucer's The Canterbury Tales\" (PDF). Speculum. 92 (3): 630–60. doi:10.1086/692620. S2CID 159994357.\n[…]\nThompson, N.S. (1996). Chaucer, Boccaccio, and the debate of love: a comparative study of the Decameron and the Canterbury tales. Oxford: Clarendon Press. ISBN 978-0-19-812378-1.\n[…]\nDogan, Sandeur (June 2013). \"The Three Estates Model: Represented and Satirised in Chaucer's General Prologue to The Canterbury Tales\". Journal of History Culture and Art Research. 2 (2): 49–56. doi:10.7596/taksad.v2i2.229. hdl:11511/51091.\n[…]\nCaxton's Chaucer: Scans of William Caxton's two editions of Chaucer's Canterbury Tales"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Contos_de_Cantu%C3%A1ria",
        "situacao": "ok",
        "texto": "The Canterbury Tales (Os Contos da Cantuária ou Os Contos de Canterbury) é uma coleção de histórias (duas delas em prosa, e outras vinte e duas em verso) escritas a partir de 1387 por Geoffrey Chaucer, considerado um dos consolidadores da língua inglesa. Na obra, cada conto é narrado por um peregrino de um grupo que realiza uma viagem desde Southwark (Londres) à Catedral de Cantuária para visitar \n[…]\nChaucer era um homem de letras culto e seus escritos demonstram grande conhecimento de obras como a Bíblia e o Romance da Rosa e autores como Ovídio, Dante, Petrarca e Boécio (deste último chegou a traduzir a Consolação da Filosofia ao inglês). Também era grande conhecedor de escritores ingleses contemporâneos, como seu amigo John Gower, e textos morais e religiosos diversos. Há referências a várias destas obras e autores nos Contos da Cantuária.\n[…]\nEm relação à forma narrativa geral, considera-se que a fonte mais importante de Chaucer na composição dos Contos foi o Decamerão, de Bocácio. Esta última obra também apresenta uma coleção de contos narrada por um grupo de pessoas, e vários dos contos do escritor inglês tem um paralelo na obra do italiano.\n[…]\nJá o anônimo Conto de Beryn (Tale of Beryn), também do século XV, narra a chegada dos peregrinos à Cantuária e as aventuras amorosas do vendedor de indulgências. Um contemporâneo de Chaucer, o escritor John Lydgate, escreveu o Cerco de Tebas (Siege of Thebes, 1420) como um conto adicional dos Contos da Cantuária, incluindo a si mesmo como um dos peregrinos.\n[…]\nOs Contos foram impressos várias vezes a partir de fins do século XV, garantindo assim a influência da obra nas seguintes gerações de escritores ingleses. Um exemplo dessa influência é a peça teatral Os Dois Nobres Parentes, de William Shakespeare e John Fletcher, uma adaptação do Conto do Cavaleiro de Chaucer datada do início do século XVII. A escritora inglesa J. K.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "O Senhor dos Anéis",
      "descricao": "Romance de fantasia de J. R. R. Tolkien sobre a jornada para destruir o Um Anel, publicado em três volumes."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Senhor dos Anéis, de Tolkien, saiu dividido em três volumes. Em que década eles foram publicados?",
    "resposta": "Década de 1950",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
      "https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
        "situacao": "ok",
        "texto": "The Lord of the Rings is an epic high fantasy novel written by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.\n[…]\nA dispute with his publisher, Allen & Unwin, led Tolkien to offer the work to William Collins in 1950. Tolkien intended The Silmarillion (itself largely unrevised at this point) to be published along with The Lord of the Rings, but Allen & Unwin was unwilling to do this. After Milton Waldman, his contact at Collins, expressed the belief that The Lord of the Rings itself \"urgently wanted cutting\", Tolkien eventually demanded that they publish the book in 1952.\n[…]\nFrom 1988 to 1992 Christopher Tolkien published the surviving drafts of The Lord of the Rings, chronicling and illuminating with commentary the stages of the text's development, in volumes 6–9 of his History of Middle-earth series. The four volumes carry the titles The Return of the Shadow, The Treason of Isengard, The War of the Ring, and Sauron Defeated.\n[…]\nThe Lord of the Rings has had a profound and wide-ranging impact on popular culture, beginning with its publication in the 1950s, but especially during the 1960s and 1970s, when young people embraced it as a countercultural saga. \"Frodo Lives!\" and \"Gandalf for President\" were two phrases popular among United States Tolkien fans during this time.\n[…]\nTolkien, J. R. R. (1954). The Two Towers. The Lord of the Rings. Boston: Houghton Mifflin. OCLC 1042159111.\n[…]\nTolkien, Christopher (ed.) (1988–1992). The History of The Lord of the Rings, 4 vols.\n[…]\nLord of the Rings at Goodreads\n[…]\nTolkien website of Harper Collins (the British publisher)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is",
        "situacao": "ok",
        "texto": "O Senhor dos Anéis (The Lord of the Rings, no original) é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit (1937).\n[…]\nTolkien pretendia que o Silmarillion (com a maior parte ainda não revisada até neste momento) fosse publicado junto com O Senhor dos Anéis, mas a Allen & Unwin se recusava a fazer isto, e ainda queriam que O Senhor dos Anéis fosse dividido em três partes (três volumes lançados separadamente) para baratear os custos (uma vez que, na Inglaterra pós-Segunda Guerra Mundial o papel era bem caro).\n[…]\nO Senhor dos Anéis: promoveu uma grande mudança na cultura popular, desde os anos 1950, quando foi publicado, mas principalmente nos anos 1960 e 70. Pode-se encontrar tal influência em exemplos como jogos de tabuleiro baseados no livro, tais como o brasileiro Inimigos da Terra-Média e em paródias como Bored of the Rings (no Brasil, O Fedor dos Anéis), o episódio de South Park, O Retorno do Senhor dos Anéis às Duas Torres, e o musical da Revista Mad nomeado O Anel e Eu.\n[…]\nOs primeiros jogos de interpretação de personagens (RPG) surgidos entre as décadas de 70 e 80 tiveram grande inspiração no ambiente medieval-fantástico de O Senhor dos Anéis, incorporando os elementos geográficos como suas montanhas fabulosas, florestas densas, grandes fortalezas e redes de túneis sobre a terra e também elementos étnicos, como as diferentes raças civilizadas que ambientam toda a obra, como os Elfos, Hobbits e Anões ( por estarmos falando de RPG, e não uma obra de Tolkien, o termo correto a ser usado é anões mesmo).\n[…]\nThe Lord of the Rings: The Return of the King (2003)\n[…]\nO Senhor dos Anéis (RPG)"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Efeito Werther",
      "descricao": "Nome dado ao aumento de suicídios por imitação depois de casos amplamente divulgados."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O efeito Werther, nome dado ao suicídio por imitação, vem do herói de um romance de 1774. Que escritor alemão o criou?",
    "resposta": "Johann Wolfgang von Goethe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Copycat_suicide",
      "https://en.wikipedia.org/wiki/The_Sorrows_of_Young_Werther"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Copycat_suicide",
        "situacao": "ok",
        "texto": "In suicidology, a copycat suicide is defined as an emulation of another suicide that the person attempting suicide knows about either from local knowledge or due to accounts or depictions of the original suicide on television and in other media. The publicized suicide serves as a trigger, in the absence of protective factors, for the next suicide by a susceptible or suggestible person. This is ref\n[…]\nA spike in emulation suicides after a widely publicized suicide is known as the Werther effect, after rumours of such a spike following the publication of Goethe's novel The Sorrows of Young Werther.\n[…]\nOne of the earliest known associations between the media and suicide arose from Goethe's novel Die Leiden des jungen Werthers (The Sorrows of Young Werther). Soon after its publication in 1774, young men began to mimic the main character by dressing in yellow pants and blue jackets.\n[…]\nThe Werther effect not only predicts an increase in suicide, but the majority of the suicides will take place in the same or a similar way as the one publicized. The more similar the person in the publicized suicide is to the people exposed to the information about it, the more likely the age group or demographic is to die by suicide. The increase generally happens only in areas where the suicide story was highly publicized.\n[…]\nFurthermore, there is evidence for an indirect Werther effect, i.e. the perception that suicidal media content influences others which, in turn, can concurrently or additionally influence one person's own future thoughts and behaviors. Similarly, the researcher Gerard Sullivan has critiqued research on copycat suicides, suggesting that data analyses have been selective and misleading and that the evidence for copycat suicides is much less consistent than suggested by some researchers.\n[…]\nEpidemiology of suicide\n[…]\nSuicide and the media New Zealand youth suicide prevention strategy"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Sorrows_of_Young_Werther",
        "situacao": "ok",
        "texto": "The Sorrows of Young Werther ([ˈveːɐ̯tɐ]; German: Die Leiden des jungen Werthers), or simply Werther, is a 1774 epistolary novel by Johann Wolfgang Goethe, which appeared as a revised edition in 1787. It was one of the main novels of the Sturm und Drang period in German literature, and influenced the later Romantic movement. Goethe, aged 24 at the time, finished Werther in five and a half weeks of\n[…]\nWerther was one of Goethe's few works akin in style and mood to the German proto-Romantic movement known as Sturm und Drang, a movement he renounced after he and Friedrich von Schiller moved into Weimar Classicism. The novel was published anonymously, and Goethe distanced himself from it in his later years, regretting the fame it had brought him and the consequent attention to his own youthful love of Charlotte Buff, then already engaged to Johann Christian Kestner.\n[…]\nHis secretary Johann Peter Eckermann later attributed these comments to Goethe:[Werther], said Goethe, \"is a creation which I, like the pelican, fed with the blood of my own heart. It contains so much from the innermost recesses of my breast—so much feeling and thought, that it might easily be spread into a novel of ten such volumes.\n[…]\nGoethe likened his own mood, after completing Werther, to one experienced \"after a general confession, joyous and free and entitled to a new life.\" For Goethe the Werther effect was a cathartic one, freeing him from the despair in his life. But, the work having been published anonymously, his authorship was not immediately known. Some at first assumed its author to be Christoph Martin Wieland.\n[…]\nGoethe's work was the basis for the 1892 opera Werther by Jules Massenet.\n[…]\nIn 2024, Young Werther, a film based on Goethe's work, was released, debuting at that year's Toronto International Film Festival, starring Alison Pill, Patrick Adams, Iris Apatow and Douglas Booth (in the title role)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Efeito_Werther",
        "situacao": "ok",
        "texto": "Um suicídio copiado é definido como a emulação de um outro suicídio do qual a pessoa que está tentando se suicidar tem ciência, seja devido a tradição e conhecimentos locais ou a representações do suicídio original em diferentes meios de comunicação, como televisão, livros e a internet.\n[…]\nEfeito Werther refere-se a um pico de emulações de suicídios depois de um suicídio amplamente divulgado. O nome se deve ao romance Os Sofrimentos do Jovem Werther do alemão Johann Wolfgang von Goethe.\n[…]\nUma das associações mais antigas conhecidas entre mídia e suicídio surgiu do romance alemão Die Leiden des jungen Werther (Os Sofrimentos do Jovem Werther em português) de Goethe. Logo após a sua publicação em 1774, jovens começaram a imitar o personagem principal vestindo calças amarelas e jaquetas azuis.\n[…]\nDaí o termo \"Efeito Werther\", usado na literatura técnica para designar uma onda de suicídios copiados. O termo foi cunhado pelo pesquisador David Phillips em 1974, dois séculos depois do romance de Goethe ser publicado. Relatórios em 1985 e 1989 de Phillips e seus colegas descobriram que suicídios e outros acidentes parecem crescer depois de um caso de suicídio bastante publicizado pelos meios de comunicação.\n[…]\nDevido a efeitos de identificação diferencial, as pessoas que tentam copiar um ato suicida tendem a ter a mesma idade e gênero que a pessoa do suicídio gatilho.\n[…]\nO efeito Papageno é o efeito que mídia de massa pode ter ao apresentar alternativas não suicidas a crises. Seu nome se deve ao personagem abandonado, Papageno, da ópera A Flauta Mágica, do austríaco Wolfgang Amadeus Mozart do século XVIII. Este personagem estava quase cometendo suicídio até outros personagens lhe mostrarem uma maneira diferente de resolver seus problemas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Lilipute",
      "descricao": "Reino imaginário de homenzinhos visitado por Gulliver no romance de Jonathan Swift."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que adjetivo, usado como sinônimo de minúsculo, vem do reino de homenzinhos visitado por Gulliver no livro de Swift?",
    "resposta": "Liliputiano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lilliput_and_Blefuscu",
      "https://pt.wikipedia.org/wiki/As_Viagens_de_Gulliver"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lilliput_and_Blefuscu",
        "situacao": "ok",
        "texto": "Lilliput and Blefuscu are two fictional island nations that appear in the first part of the 1726 satirical prose novel Gulliver's Travels by Jonathan Swift. The two islands are neighbours in the South Indian Ocean, separated by a channel 800 yards (730 m) wide. Both are inhabited by tiny people who are about one-twelfth the height of ordinary human beings. Both nations are empires and the capital \n[…]\nGulliver is, after further adventures, condemned as a traitor by the Council of Lilliput, and condemned to be blinded amidst other offenses he did like urinating on a burning building to put out a fire. He escapes his punishment with help from a sympathetic Liliputian in the Emperor's royal court by fleeing to Blefuscu.\n[…]\nLilliput is reputedly named after the townland of Lilliput on the shores of Lough Ennell near Dysart, just a few miles from Mullingar, in County Westmeath, Ireland. Swift was a regular visitor to the Rochfort family at Gaulstown House. It is said that it was when Dean Swift looked across the expanse of Lough Ennell one day and saw the tiny human figures on the opposite shore of the lake that he conceived the idea of the Lilliputians featured in Gulliver's Travels.\n[…]\nIn fact, the townland was known as Nure from ancient times and was renamed Lileput or Lilliput shortly after the publication of Gulliver's Travels in honour of Swift's association with the area. Lilliput House has stood in the locality since the 18th century.\n[…]\nSeveral craters on Mars's moon Phobos are named after Lilliputians. Perhaps inspired by Johannes Kepler (and quoting Kepler's third law), Swift's satire Gulliver's Travels refers to two moons in Part 3, Chapter 3 (the \"Voyage to Laputa\"), in which the astronomers of Laputa are described as having discovered two satellites of Mars orbiting at distances of 3 and 5 Martian diameters, and periods of 10 and 21.5 hours, respectively."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/As_Viagens_de_Gulliver",
        "situacao": "ok",
        "texto": "As Viagens de Gulliver (1726), originalmente Viagens a diversos países remotos do mundo, em quatro partes, por Lemuel Gulliver, a princípio cirurgião e mais tarde capitão de vários navios (renomeado em 1735), é um romance satírico do escritor irlandês Jonathan Swift. É o trabalho mais conhecido de Swift, e também um clássico da literatura inglesa.\n[…]\nLilliput é uma das ilhas fictícias do romance \"As Viagens de Gulliver\". Swift apresentou-a como parte de um arquipélago, juntamente com a ilha de Blefuscu, algures no Oceano Índico. O livro também relata que as duas ilhas são inimigas. Nessa ilha, a personagem principal deparou-se com a população de pessoas minúsculas (com menos de seis polegadas de altura, cerca de 15 centímetros), chamadas liliputeanos, que o tomaram por gigante.\n[…]\nO compositor alemão Georg Philipp Telemann fez uma suíte para violinos intitulada \"Suíte de Gulliver\". Os cinco primeiros movimentos são \"Entrada\", \"Chacona Lilliputiana\", \"Giga Brobdingnagiana\", \"Devaneio dos Laputanos e seus acompanhantes\", e \"Loure dos bem-educados Houyhnhnms e dança selvagem dos indomáveis Yahoos\". Telemann compôs essa suíte in 1728, apenas dois anos após a publicação do livro.\n[…]\nA banda britânica de roque progressivo The Yellow Moon Band intitulou seu álbum de estreia Travels into Several Remote Nations of the World (2009) em uma referência ao livro de Swift e ao ecletismo de sons e influências no álbum. A banda do guitarrista Rudhy Carroll também comentou que ele vivia em uma casa chamada \"Lilliput\", quando ele era criança.\n[…]\n\"Gulliver's Travels\" (1999): Drama de rádio das aventuras de Gulliver em Lilliput, produzida pela série Radio Tales para a National Public Radio.\n[…]\nGulliver's Travels (2010) Versão planejada para as aventuras de Gulliver em Lilliput, estrelando Jack Black, Billy Connolly, James Corden, Amanda Peet, Chris O'Dowd"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Shangri-La",
      "descricao": "Vale paradisíaco imaginário nas montanhas do Tibete, criado pelo escritor britânico James Hilton."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Shangri-La, nome que hoje batiza hotéis e lugares paradisíacos, é um vale escondido no Tibete criado em que romance de 1933?",
    "resposta": "Horizonte Perdido",
    "distratores": [
      "O Fio da Navalha",
      "Passagem para a Índia",
      "Admirável Mundo Novo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shangri-La",
      "https://en.wikipedia.org/wiki/Lost_Horizon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shangri-La",
        "situacao": "ok",
        "texto": "Shangri-La is a fictional place in Tibet's Kunlun Mountains, described in the 1933 novel Lost Horizon by the British author James Hilton. Hilton portrays Shangri-La as a mystical, harmonious valley, gently guided from a lamasery, enclosed in the western end of the Kunlun Mountains. In the novel, the people who live in Shangri-La are almost immortal, living hundreds of years beyond the normal lifes\n[…]\nShangri-La has become synonymous with any earthly paradise, particularly a mythical Himalayan utopia – an enduringly happy land, isolated from the world. Ancient Tibetan scriptures mention Nghe-Beyul Khembalung, one of seven utopian beyuls which Tibetan Buddhists believe were established in the 9th century AD by Padmasambhava as hidden, sacred places of refuge for Buddhists during times of strife.\n[…]\nWhen asked what real-life place he had visited was most similar to the paradise of Shangri-La, Hilton said that the town of Weaverville, California came closest.\n[…]\nThe Japanese web novel series Shangri-La Frontier takes its name from Hilton's Shangri-La. When looking for a suitable term to describe the paradise-like world of the game, the author ended up with two choices: \"Shangri-La\" and \"Eldorado\". He chose the former after looking at the Wikipedia article because in Hilton's novel it refers to a lamasery where wisdom is collected, which connected to the existence of a glorious scientific civilization in the world of Shangri-La Frontier.\n[…]\nBetween 2002 and 2004 a series of expeditions were led by the author and filmmaker Laurence Brahm in western China which determined that the Shangri-La mythical location in Hilton's book Lost Horizon was based on references to the southern Yunnan Province from articles published by National Geographic's first resident explorer, Joseph Rock.\n[…]\nwww.LostHorizon.org - information about the book, movie, and real life Shangri-Las (Archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lost_Horizon",
        "situacao": "ok",
        "texto": "Lost Horizon is a 1933 novel by the English writer James Hilton. The book was adapted into a film, also called Lost Horizon, in 1937 by director Frank Capra; and a musical film remake in 1973 by producer Ross Hunter with music by Burt Bacharach. It is the origin of Shangri-La, a fictional utopian lamasery located high in the mountains of Tibet.\n[…]\nShe was old, the doctor had told Rutherford, \"Most old of anyone I have ever seen,\" implying that it was Lo-Tsen, aged drastically by her departure from Shangri-La. The narrator wonders whether Conway can find his way back to his lost paradise.\n[…]\nThe book, published in 1933, caught the notice of the public only after Hilton's Goodbye, Mr. Chips was published in 1934. Lost Horizon became a huge popular success and in 1939 was published in paperback form, as Pocket Book #1, making it the first \"mass-market\" paperback.\n[…]\nBy the 1960s, Pocket Books alone, over the course of more than 40 printings, had sold several million copies of Lost Horizon, helping to make it one of the most popular novels of the 20th Century.\n[…]\nLost Horizon's concept of Shangri-La has gone on to influence other quasi-Asian mystical locations in fiction including Marvel Comics' K'un-L'un and DC Comics' Nanda Parbat.\n[…]\nLost Horizon (1937), directed by Frank Capra\n[…]\nLost Horizon (1973), directed by Charles Jarrott (musical version)\n[…]\nThe book served as the basis for the unsuccessful 1956 Broadway musical Shangri-La.\n[…]\nLost Horizon is currently available in paperback format and is now published by Summersdale Publishers Ltd [1], ISBN 978-1-84024-353-6 and Vintage [2], ISBN 978-0-099-59586-1 in the UK and by Harper Perennial, ISBN 978-0-06-059452-7 in the United States.\n[…]\nLost Horizon at Faded Page (Canada)\n[…]\nLost Horizon at Project Gutenberg Australia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shangri-La",
        "situacao": "ok",
        "texto": "Xangrilá (em inglês, Shangri-La), da criação literária do inglês James Hilton, Horizonte Perdido (em inglês Lost Horizon) de 1933, é descrito como um lugar paradisíaco situado nas montanhas do Himalaia, sede de panoramas maravilhosos e onde o tempo parece deter-se em ambiente de felicidade e saúde, com a convivência harmoniosa entre pessoas das mais diversas procedências. [carece de fontes]?\n[…]\nShangri-La será sentido pelos visitantes ou como a promessa de um mundo novo possível, no qual alguns escolhem morar, ou como um lugar assustador e opressivo, do qual outros resolvem fugir. O romance inspira duas versões cinematográficas nas décadas seguintes (em 1937 e 1973).[carece de fontes]?\n[…]\nNo mundo ocidental, Shangri-La é entendido como um paraíso terrestre oculto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Mocha Dick",
      "descricao": "Cachalote branco real do século dezenove, famoso por atacar baleeiros no Pacífico, apontado como inspiração para Moby Dick."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Um cachalote branco real, que teria inspirado Moby Dick, era apelidado com o nome de uma ilha chilena. Que ilha?",
    "resposta": "Ilha Mocha",
    "distratores": [
      "Chiloé",
      "Ilha de Páscoa",
      "Juan Fernández"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mocha_Dick",
      "https://en.wikipedia.org/wiki/Mocha_Island"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mocha_Dick",
        "situacao": "ok",
        "texto": "Mocha Dick (; died 1838) was an albino (or possibly leucistic) male sperm whale (Physeter macrocephalus) that lived in the southeastern Pacific Ocean in the early 19th century, usually encountered in the waters near Mocha Island, off the central coast of Chile. American explorer and author J. N. Reynolds published an account of the whale in Mocha Dick, or The White Whale of the Pacific: A Leaf fro\n[…]\nMocha Dick was part of the inspiration behind Herman Melville's novel, Moby-Dick (1851).\n[…]\nMocha Dick was not, apparently, the only white whale in the sea. A Swedish whaler claimed to have taken a very old white whale off the coast of Brazil in 1859. In 1902, the New Bedford whaling barque Platina, captained by Thomas McKenzie, harpooned and killed an albino sperm whale near the Azores in the Atlantic Ocean, using a harpoon tipped with an explosive device. Amos Smalley harpooned the white whale and recounted his experience to Reader's Digest.\n[…]\nIn 2010, Williams College Museum of Art presented a whale-sized work titled \"Mocha Dick\" — a 52 ft (16 m), ghostly white sperm whale sculptured from industrial felt, created by artist Tristin Lowe. The art show was sponsored by the Williams-Mystic Maritime Studies Program, an interdisciplinary ocean and coastal studies program created by Williams College and the Mystic Seaport maritime museum. In an interview with The Berkshire Eagle, Lowe said, \"This is the archetypical whale...\n[…]\nHeinz, Brian. Mocha Dick: The Legend and Fury. Creative Editions, Illustrated Edition, 2014.\n[…]\nShapiro, Irwin. How Old Stormalong Captured Mocha Dick. Julian Messier, 1942.\n[…]\nThe full text of Mocha Dick at Wikisource\n[…]\nRogers, Ben. \"From Mocha Dick to Moby Dick: Fishing for Clues to Moby's Name and Color\", Names: A Journal of Onamastics. Vol. 46, No. 4, Dec. 1988, pp. 263–276.\n[…]\nTierney, Erik. \"Moby Dick – Mocha Dick\", All About Stuff."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mocha_Island",
        "situacao": "ok",
        "texto": "Mocha Island (Spanish: Isla Mocha [ˈisla ˈmotʃa]) is a Chilean island located west of the coast of Arauco Province in the Pacific Ocean. The island is the location of numerous historic shipwrecks. In Mapuche mythology, the souls of dead people travel west to visit this island. The waters off the island are a popular place for recreational sea fishing.\n[…]\nThe waters off the island were inhabited by sperm whale, including Mocha Dick, who was depicted by American explorer and author Jeremiah N. Reynolds in his published account, \"Mocha Dick: Or The White Whale of the Pacific: A Leaf from a Manuscript Journal\" in May, 1839 in The Knickerbocker magazine in New York. Mocha Dick was one of the inspirations for the fictional whale Moby Dick in the 1851 novel Moby-Dick by Herman Melville.\n[…]\nIn December 2007 several human skulls with Polynesian features, such as a pentagonal shape when viewed from behind, were found lying on a shelf in a museum in Concepción. These skulls originated from Mocha Island.\n[…]\nMocha Island National Reserve covers approximately 45% of the island's surface. The Pacific degu (Octodon pacificus), also known as the Mocha Island degu, a species of rodent in the family Octodontidae, is endemic to Mocha Island. The island has been designated an Important Bird Area (IBA) by BirdLife International because it supports significant populations of pink-footed shearwaters, Peruvian pelicans, red-legged cormorants and elegant terns.\n[…]\nFrancisco Solano Asta-Buruaga y Cienfuegos, Diccionario geográfico  de la República de Chile, SEGUNDA EDICIÓN CORREGIDA Y AUMENTADA, NUEVA YORK, D. APPLETON Y COMPAÑÍA. 1899. pg. 449–450 Mocha (Isla de)\n[…]\nMedia related to Isla Mocha at Wikimedia Commons\n[…]\nMocha Island travel guide from Wikivoyage"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Dom Quixote",
      "descricao": "Romance de Miguel de Cervantes, publicado em duas partes, em 1605 e 1615, sobre um fidalgo que se julga cavaleiro andante."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No espanhol da época de Cervantes, a palavra quijote designava uma peça de armadura. Que parte do corpo ela protegia?",
    "resposta": "A coxa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Don_Quixote",
      "https://en.wikipedia.org/wiki/Cuisse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Don_Quixote",
        "situacao": "ok",
        "texto": "Don Quixote is a novel by Miguel de Cervantes, written in Early Modern Spanish and published in two parts in 1605 and 1615. It is considered a founding work of Western literature and the first modern novel. It is also one of the most-translated books in the world and one of the best-selling books in history.\n[…]\nThe cave of Medrano (also known as the casa de Medrano) in Argamasilla de Alba, which has been known since the beginning of the 17th century, and according to the tradition of Argamasilla de Alba, was the prison of Miguel de Cervantes and the place where he conceived and began to write his famous work \"Don Quixote de la Mancha.\"\n[…]\nThe second part of Cervantes' Don Quixote, finished as a direct result of the Avellaneda book, has come to be regarded by some literary critics as superior to the first part, because of its greater depth of characterization, its discussions, mostly between Quixote and Sancho, on diverse subjects, and its philosophical insights. In Cervantes's Segunda Parte, Don Quixote visits a printing-house in Barcelona and finds Avellaneda's Second Part being printed there, in an early example of metafiction.\n[…]\nIn July 1604, Cervantes sold the rights of El ingenioso hidalgo don Quixote de la Mancha (known as Don Quixote, Part I) to the publisher-bookseller Francisco de Robles for an unknown sum. License to publish was granted in September, the printing was finished in December, and the book came out on 16 January 1605.\n[…]\nMan of La Mancha, a musical play based on the life of Cervantes, author of Don Quixote.\n[…]\nPérez, Rolando (2016). See on Academia.edu \"What is Don Quijote/Don Quixote And... And... And the Disjunctive Synthesis of Cervantes and Kathy Acker.\" Cervantes ilimitado: cuatrocientos años del Quijote. Ed. Nuria Morgado. ALDEEU.\n[…]\nDon Quixote on In Our Time at the BBC"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cuisse",
        "situacao": "ok",
        "texto": "Cuisses (; ; French: [kɥis]) are a form of medieval armour worn to protect the thigh. The word is the plural of the French word cuisse meaning 'thigh'. While the skirt of a maille shirt or tassets of a cuirass could protect the upper legs from above, a thrust from below could avoid these defenses. Thus, cuisses were worn on the thighs to protect from such blows."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dom_Quixote",
        "situacao": "ok",
        "texto": "Don Quixote, cujo título completo é O Engenhoso Fidalgo Dom Quixote da Mancha, é um romance espanhol de Miguel de Cervantes. Publicado originalmente em duas partes, em 1605 e 1615, o romance é considerado uma obra fundadora da Literatura ocidental e o primeiro romance moderno. O romance foi classificado por muitos autores conhecidos como o \"melhor romance de todos os tempos\" e a \"obra melhor e mai\n[…]\nComo termo militar, a palavra quijote refere-se às coxotes, parte de uma armadura completa que protege as coxas. O sufixo espanhol -ote denota o aumentativo — por exemplo, grande significa grande, mas grandote significa extra grande, com conotações grotescas. Seguindo esse exemplo, Quixote sugeriria 'O Grande Quijano', um jogo de palavras oxímoro que faz muito sentido à luz dos delírios de grandeza do personagem.\n[…]\nEm julho de 1604, Cervantes vendeu os direitos de El ingenioso hidalgo don Quixote de la Mancha (conhecido como Dom Quixote, Parte I) ao editor e livreiro Francisco de Robles por uma quantia desconhecida. A licença para publicação foi concedida em setembro, a impressão terminou em dezembro e o livro saiu em 16 de janeiro de 1605.\n[…]\nEm 1613, Cervantes publicou as Novelas exemplares, dedicadas ao mecenas da época, o Conde de Lemos. Oito anos e meio depois da Parte Um ter aparecido, surgiu a primeira pista de uma futura Segunda Parte. \"Vereis em breve\", diz Cervantes, \"as novas façanhas de Dom Quixote e as graças de Sancho Pança.\" Dom Quixote, Parte Dois, publicada pela mesma editora que a sua antecessora, apareceu no final de 1615, e foi rapidamente reimpressa em Bruxelas e Valência (1616) e Lisboa (1617).\n[…]\nMan of La Mancha, uma peça musical baseada na vida de Cervantes, autor de Dom Quixote.\n[…]\n«Don Quichote et Cervantes» (em espanhol)\n[…]\nEl ingenioso hidalgo Don Quijote de la Mancha (ebook)\n[…]\nEl ingenioso hidalgo Don Quixote de la Mancha(1ª edição)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Capitão Nemo",
      "descricao": "Comandante do submarino Nautilus nos romances de Júlio Verne, como Vinte Mil Léguas Submarinas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O misterioso capitão do submarino Nautilus, de Júlio Verne, se chama Nemo. O que significa essa palavra em latim?",
    "resposta": "Ninguém",
    "fonte": [
      "https://en.wikipedia.org/wiki/Captain_Nemo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Captain_Nemo",
        "situacao": "ok",
        "texto": "Captain Nemo ( NAY-moh; also known as Prince Dakkar) is a character created by the French novelist Jules Verne (1828–1905). Nemo appears in two of Verne's science-fiction books, Twenty Thousand Leagues Under the Seas (1870) and The Mysterious Island (1875). He also makes a brief appearance in a play written by Verne with the collaboration of Adolphe d'Ennery, Journey Through the Impossible (1882).\n[…]\nOmar Sharif in La isla misteriosa y el capitán Nemo (1973)\n[…]\nShazad Latif in the TV series Nautilus (2024)\n[…]\nIn 1990, the group Dive released their debut single \"Captain Nemo\", based on Verne's character. This song was covered by Sarah Brightman on her 1993 album Dive.\n[…]\nThe Japanese otome visual novel Code: Realize- Guardian of Rebirth features a scientist named Nemo. Nemo creates an airship named the Nautilus within the game. He considers the engineer Impey Barbicane, a reference to another Jules Verne novel, his ultimate scientific rival.\n[…]\nThe Japanese mobile game Fate/Grand Order features a rider class servant named Captain Nemo. Nemo commands a magical submarine Nautilus through the Void Space.\n[…]\nThe animated series Space Strikers (known in French as 20,000 Lieues dans l'espace; translation: \"20,000 Leagues in Space\") stars a descendant of the original Captain Nemo, leading the crew of the spaceship Nautilus in a crusade to liberate Earth and other planets from the evil forces of Master Phantom.\n[…]\nIn the novel ... no one of Alberto Cavanna (original title ... nessuno, Mursia, Italy, 2020), Nemo is John Digby, an admiral of the Royal Navy, appointed captain of the Nautilus by the dying builder.\n[…]\nThe 2024 ten-part adventure drama television series Nautilus focuses on Nemo and the backstory of the eponymous submarine. A reimagining of the original Verne novel, the series presents an origin for Nemo as a prince-turned-crusading scientist.\n[…]\nThe origin of Captain Nemo: at Captainnemo's Home"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Nemo",
        "situacao": "ok",
        "texto": "Capitão Nemo (do latim: Capitão \"Ninguém\") — Também conhecido como Príncipe Dakkar — é um personagem fictício que aparece em duas obras escritas por Júlio Verne: Vinte Mil Léguas Submarinas (1870) e A Ilha Misteriosa(1874). Nemo era o capitão do submarino Náutilus.\n[…]\nNemo significa \"ninguém\" em latim (um nome apropriado, já que pouco se sabe a seu respeito), e o nome do seu submarino vem de um pequeno molusco. Sabe-se que ele é indiano e que provavelmente perdeu sua mulher e filhos, isso teria dado origem à sua frustração com a sociedade. Apesar de sua alegação, em Vinte Mil Léguas Submarinas, de que os problemas do mundo não lhe interessam, ele às vezes interfere nestes assuntos, sempre a favor dos oprimidos.\n[…]\nO mundo toma conhecimento de sua existência quando ele destrói alguns navios de guerra e o Náutilus é confundido com um monstro. Capitão Nemo tenta o tempo todo esconder suas ligações com a civilização, dizendo sempre que agora vive em um mundo à parte, embora às vezes deixe escapar\n[…]\nNo livro A Ilha Misteriosa, o Capitão Nemo aparece no último trecho, quando os náufragos da ilha descobrem que ele estava escondido lá o tempo todo e os ajudava em sua sobrevivência. O Capitão já está velho e conta sua história de vida para os náufragos. Mais tarde, o Capitão morre.\n[…]\nA história tornou-se, em 2003, um longa-metragem estrelado por Sean Connery com o ator indiano Naseeruddin Shah no papel do Capitão Nemo. Ao contrário da publicação de 1999 - indicada e vencedora de diversos prêmios da área - o filme foi um fracasso de público e crítica.\n[…]\nJúlio Verne (2012). 20 Mil Léguas Submarinas. Rio de Janeiro: Zahar. ISBN 978-85-378-1386-7\n[…]\nJúlio Verne (2015). A Ilha Misteriosa. Rio de Janeiro: Zahar. 552 páginas. ISBN 9788537814529\n[…]\nThe origin of Captain Nemo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Lord Byron",
      "descricao": "Poeta romântico inglês (1788–1824), autor de Don Juan e A Peregrinação de Childe Harold."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A matemática inglesa Ada Lovelace, pioneira da programação de computadores, era filha de que poeta romântico?",
    "resposta": "Lord Byron",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ada_Lovelace",
      "https://pt.wikipedia.org/wiki/Ada_Lovelace"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ada_Lovelace",
        "situacao": "ok",
        "texto": "Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852), also known as Ada Lovelace, was an English mathematician and writer chiefly known for work on Charles Babbage's proposed mechanical general-purpose computer, the analytical engine. She was the first to recognise the machine had applications beyond pure calculation. Lovelace is often considered the first comput\n[…]\nAlthough English law at the time granted full custody of children to the father in cases of separation, Lord Byron made no attempt to claim his parental rights, but did request that his sister keep him informed of Ada's welfare.\n[…]\nIn 1841, Lovelace and Medora Leigh (the daughter of Lord Byron's half-sister Augusta Leigh) were told by Ada's mother that Ada's father was also Medora's father. On 27 February 1841, Ada wrote to her mother: \"I am not in the least astonished.\n[…]\nLovelace is portrayed in Romulus Linney's 1977 play Childe Byron. In Tom Stoppard's 1993 play Arcadia, the precocious teenage genius Thomasina Coverly—a character \"apparently based\" on Ada Lovelace (the play also involves Lord Byron)—comes to understand chaos theory, and theorises the second law of thermodynamics, before either is officially recognised.\n[…]\nLovelace features in John Crowley's 2005 novel, Lord Byron's Novel: The Evening Land, as an unseen character whose personality is forcefully depicted in her annotations and anti-heroic efforts to archive her father's lost novel.\n[…]\nAda Lovelace Day\n[…]\nLovelace, Ada King. Ada, the Enchantress of Numbers: A Selection from the Letters of Lord Byron's Daughter and her Description of the First Computer. Mill Valley, CA: Strawberry Press, 1992. ISBN 978-0-912647-09-8.\n[…]\n\"Ada Byron, Lady Lovelace\". Biographies of Women Mathematicians. Agnes Scott College.\n[…]\n\"How Ada Lovelace, Lord Byron's Daughter, Became the World's First Computer Programmer\". Maria Popova (Brain). 10 December 2014."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ada_Lovelace",
        "situacao": "ok",
        "texto": "Augusta Ada Byron King, Condessa de Lovelace (nascida Byron, 10 de dezembro de 1815 — 27 de novembro de 1852), atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage.\n[…]\nLovelace nasceu em 10 de dezembro de 1815 e é a única filha legítima do poeta Lord Byron e sua esposa Anne Isabella \"Anabella\" Byron, Lady Wentworth. Todos os outros filhos de Lorde Byron nasceram fora do casamento. Byron foi escritor de uma das versões de Don Juan. Se separou da esposa um mês depois do nascimento de Ada e deixou a Inglaterra para sempre, quatro meses depois. Acabou morrendo doente durante a Guerra da Independência Grega, quando Ada tinha oito anos de idade.\n[…]\nAda Lovelace nasceu Augusta Ada Byron em 10 de dezembro de 1815, em Londres, na Inglaterra. Filha do poeta George Gordon Byron, 6º Barão Byron, e de Anne Isabella \"Annabella\" Milbanke, Baronesa Byron. George Byron esperava ser pai de um menino e ficou desapontado quando sua esposa deu à luz uma menina. Augusta recebeu esse nome por causa da meia-irmã de Byron, Augusta Leigh, e foi chamada de \"Ada\" pelo próprio George.\n[…]\nEm 1841, a mãe de Ada, Lady Byron, revelou à moça e à Medora (filha de Augusta Leight, que era meia-irmã de Lord Byron) que o pai de Ada e Medora eram a mesma pessoa. Em 27 de fevereiro daquele ano, Ada escreveu uma carta para sua mãe, dizendo “Não estou nem um pouco surpresa, na verdade a senhora apenas me confirmou uma dúvida que vem aterrorizando minha mente por anos, e que não tinha capacidade de lhe sugerir que suspeitava de tal fato”.\n[…]\nAda também é nome de uma linguagem de programação."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Ebenezer Scrooge",
      "descricao": "Velho avarento protagonista de Um Conto de Natal, de Charles Dickens, publicado em 1843."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em inglês, o Tio Patinhas se chama Scrooge, nome do velho avarento de que história de Charles Dickens?",
    "resposta": "Um Conto de Natal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Scrooge_McDuck",
      "https://en.wikipedia.org/wiki/Ebenezer_Scrooge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scrooge_McDuck",
        "situacao": "ok",
        "texto": "Scrooge McDuck (occasionally stylized as $crooge McDuck) is a cartoon character created in 1947 for The Walt Disney Company by Carl Barks. Appearing in Disney comics, Scrooge is a Scottish-born American anthropomorphic white duck. Like his nephew, Donald Duck, he has a yellow-orange bill, legs, and webbed feet. He typically wears a red or blue frock coat, a black top hat, pince-nez glasses, and sp\n[…]\nNamed after the character Ebenezer Scrooge from Charles Dickens' 1843 holiday novella A Christmas Carol, Scrooge is a business magnate and \"adventure-capitalist\" whose dominant character traits are his wealth, frugality, and tendency to seek money through adventure and treasure hunting. Scrooge founded McDuck Enterprises.\n[…]\nIn tribute to its famous native, Glasgow City Council added Scrooge to its list of \"Famous Glaswegians\" in 2007, alongside the likes of Billy Connolly and Charles Rennie Mackintosh.\n[…]\nIn addition to the many original and existing characters in stories about Scrooge McDuck, authors have frequently led historical figures to meet Scrooge over the course of his life. Most notably, Scrooge has met US president Theodore Roosevelt. Roosevelt and Scrooge would meet each other at least three times: in the Dakotas in 1883, in Duckburg in 1902, and in Panama in 1906. See Historical Figures in Scrooge McDuck stories.\n[…]\nIn 1974, Disneyland Records released an adaptation of the Charles Dickens' A Christmas Carol. Eight years later, Walt Disney Pictures produced a featurette of this same story, this time dubbed Mickey's Christmas Carol (1983). He also appeared as himself in the television special Sport Goofy in Soccermania (1987).\n[…]\nThe Life and Times of Scrooge McDuck, by Don Rosa\n[…]\nMusic Inspired by the Life and Times of Scrooge\n[…]\nScrooge McDuck and Money (1967) – Theatrical film\n[…]\nScrooge McDuck  at Inducks\n[…]\nMarkstein, Donald D. \"Scrooge McDuck\". Toonopedia."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ebenezer_Scrooge",
        "situacao": "ok",
        "texto": "Ebenezer Scrooge () is a fictional character and the protagonist of Charles Dickens's 1843 novella A Christmas Carol. Initially a cold-hearted miser who despises Christmas, his redemption by visits from the ghost of Jacob Marley and the Ghosts of Christmas Past, Present, and Yet to Come has become a defining tale of the Christmas holiday in the English-speaking world.\n[…]\nCharles Dickens describes Scrooge as \"a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint... secret, and self-contained, and solitary as an oyster.\" He does business from a Cornhill warehouse and is known among the merchants of the Royal Exchange as a man of good credit.\n[…]\nRobert Douglas-Fairhurst, a professor of English literature, considers that in the opening part of the book portraying young Scrooge's lonely and unhappy childhood, and his aspiration to rise from poverty to riches \"is something of a self-parody of Dickens's fears about himself\"; the post-transformation parts of the book are how Dickens optimistically sees himself.\n[…]\nThere are literary precursors for Scrooge in Dickens's own works. Peter Ackroyd, Dickens's biographer, sees similarities between Scrooge and the title character of Martin Chuzzlewit, although the latter is \"a more fantastic image\" than the former; Ackroyd observes that Chuzzlewit's transformation to a charitable man is parallel to that of Scrooge. Douglas-Fairhurst sees that the minor character Gabriel Grub from The Pickwick Papers was also an influence when creating Scrooge.\n[…]\nJack Palance in Ebenezer (1998)\n[…]\nThe character of Scrooge McDuck, created by Carl Barks, was at least partially based on Ebenezer Scrooge: \"I began to think of the great Dickens Christmas story about Scrooge… I was just thief enough to steal some of the idea and have a rich uncle for Donald.\"\n[…]\nUncle Scrooge"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tio_Patinhas",
        "situacao": "ok",
        "texto": "Patinhas (Patinhas McPato ou Patinhas McPatinhas no Brasil e Scrooge McDuck na versão original dos EUA), comumente chamado de Tio Patinhas por seu sobrinho Pato Donald e seus sobrinhos-netos Huguinho, Zezinho e Luisinho, é uma personagem americana de ficção criada pelo cartunista Carl Barks, um pato antropomórfico introduzido na banda desenhada Disney em dezembro de 1947.\n[…]\nO nome original de Patinhas em inglês, Scrooge, se baseia no avarento Ebenezer Scrooge, personagem principal do Conto de Natal, de Charles Dickens. Tal como muitos outros habitantes de Patópolis, Patinhas se tornou popular no mundo inteiro, mais ainda na Europa, e tem sido expandido mais e mais desde então.\n[…]\nTio Patinhas surgiu nos quadrinhos em dezembro de 1947 em \"Natal nas Montanhas\", história escrita e desenhada por Carl Barks. Patinhas era um velho barbudo, de óculos e razoavelmente rico, que andava curvado sobre sua bengala e vivia isolado numa \"grande mansão\". Na história, Patinhas convida seu sobrinho Pato Donald e sobrinhos-netos Huguinho, Zezinho e Luisinho para sua cabana nas montanhas, planejando armar um susto e divertir-se com a desgraça dos sobrinhos.\n[…]\nBarks mais tarde relatou: \"Natal nas Montanhas foi apenas minha primeira ideia para se criar um tio velho e rico. Eu o fiz muito velho e muito fraco. Descobri mais tarde que tinha que torná-lo mais ativo. Não poderia deixar um velho comum fazer as coisas que eu queria que ele fizesse\".\n[…]\nEm 1974, a Disneyland Records lançou uma adaptação do clássico de Charles Dickens, A Christmas Carol, para o qual Alan Young foi contratado para dublar o Tio Patinhas interpretando o personagem que inspirou seu nome, Ebenezer Scrooge. Oito anos depois, a Walt Disney Animation Studios decidiu fazer uma paródia animada desta mesma história, Um Natal de Mickey Mouse (1983), e mais uma vez contratou Young para a dublagem.\n[…]\nFergus Mac Patinhas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Nautilus (submarino de Júlio Verne)",
      "descricao": "Submarino fictício comandado pelo Capitão Nemo nos romances de Júlio Verne."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O primeiro submarino nuclear em operação, lançado pelos americanos em 1954, tinha o mesmo nome do submarino de que romance de Júlio Verne?",
    "resposta": "Vinte Mil Léguas Submarinas",
    "fonte": [
      "https://en.wikipedia.org/wiki/USS_Nautilus_(SSN-571)",
      "https://en.wikipedia.org/wiki/Nautilus_(Verne)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/USS_Nautilus_(SSN-571)",
        "situacao": "ok",
        "texto": "USS Nautilus (SSN-571) was the world's first nuclear-powered boat, nuclear-powered submarine, and the first submarine to complete a submerged transit of the North Pole on 3 August 1958. Her initial commanding officer was Eugene \"Dennis\" Wilkinson, a widely respected naval officer who set the stage for many of the protocols of today's Nuclear Navy in the US and who had a storied career during milit\n[…]\nNautilus shares the name of the fictional submarine in Jules Verne's classic 1870 science fiction novel Twenty Thousand Leagues Under the Seas and the USS Nautilus (SS-168) that served with distinction in World War II.\n[…]\nOn 4 February 1957, Nautilus logged her 60,000th nautical mile (110,000 km; 69,000 mi), matching the endurance of the fictional Nautilus described in Jules Verne's novel Twenty Thousand Leagues Under The Sea. In May, she departed for the Pacific Coast to participate in coastal exercises and the fleet exercise operation \"Home Run,\" which acquainted units of the Pacific Fleet with the capabilities of nuclear submarines.\n[…]\nToward the end of her service, the hull and sail of Nautilus vibrated such that sonar became ineffective at more than 4 kn (7.4 km/h; 4.6 mph) speed, making the vessel vulnerable to sonar detection. Lessons learned from this problem were applied to later nuclear submarines.\n[…]\nDuring the period 22 July 1958 to 5 August 1958, USS Nautilus, the world's first nuclear powered ship, added to her list of historic achievements by crossing the Arctic Ocean from the Bering Sea to the Greenland Sea, passing submerged beneath the geographic North Pole. This voyage opens the possibility of a new commercial seaway, a Northwest Passage, between the major oceans of the world. Nuclear-powered cargo submarines may, in the future, use this route to the advantage of world trade.\n[…]\nMerchant submarine\n[…]\nUS Navy Submarine Force Museum: Official home of USS Nautilus"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nautilus_(Verne)",
        "situacao": "ok",
        "texto": "Nautilus is the fictional submarine belonging to Captain Nemo featured in Jules Verne's novels Twenty Thousand Leagues Under the Seas (1870) and The Mysterious Island (1875).\n[…]\nVerne named the Nautilus after Robert Fulton's real-life submarine Nautilus (1800). For the design of the Nautilus, Verne was inspired by the French Navy submarine Plongeur, a model of which he had seen at the 1867 Exposition Universelle, three years before writing his novel.\n[…]\nIn Alan Moore and Kevin O'Neill's 1999 comic book series The League of Extraordinary Gentlemen, Nautilus features with a squid-like appearance in the comic and a more traditional – albeit extremely tall – submarine in the 2003 film adaptation. Toward the closing stages of the film, antagonist \"The Fantom\" has stolen Nemo's design and begun construction of multiple submarines dubbed \"Nautili\" by Skinner. In the film adaptation, the Nautilus is called the \"Sword of The Ocean\" by Nemo.\n[…]\nIn the 2002 Kevin J. Anderson's novel Captain Nemo: The Fantastic History of a Dark Genius, Nautilus appears as a real submarine, apparently cigar-shaped like the one from the novel, built by Nemo for the Ottoman Empire.\n[…]\nSubmarines feature in some other of Verne's works. In the 1896 novel Facing the Flag, the pirate Ker Karraje uses an unnamed submarine that acts both as a tug to his schooner Ebba and for ramming and destroying ships which are the targets of his piracy. The same book also features HMS Sword, a small Royal Navy experimental submarine which is sunk after a valiant but unequal struggle with the pirate submarine.\n[…]\nMedia related to Nautilus (Jules Verne) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/USS_Nautilus_%28SSN-571%29",
        "situacao": "ok",
        "texto": "USS Nautilus (SSN-571) foi a primeira embarcação de propulsão nuclear do mundo, submarino nuclear, e o primeiro submarino a completar uma travessia submersa do Polo Norte em 3 de agosto de 1958. Seu primeiro oficial comandante foi Eugene \"Dennis\" Wilkinson, um oficial naval amplamente respeitado que estabeleceu as bases para muitos dos protocolos da atual Marinha Nuclear dos EUA, e que teve uma ca\n[…]\nO Nautilus compartilha o nome do submarino fictício do clássico romance de ficção científica de Júlio Verne de 1870, Vinte Mil Léguas Submarinas e do USS Nautilus (SS-168) que serviu com distinção na Segunda Guerra Mundial.\n[…]\nO projeto conceitual do primeiro submarino nuclear começou em março de 1950 como projeto SCB 64. Em julho de 1951, o Congresso autorizou a construção de um submarino de propulsão nuclear para a Marinha dos EUA, que foi planejado e supervisionado pessoalmente pelo Capitão Hyman G. Rickover, conhecido como o \"Pai da Marinha Nuclear\". Em 12 de dezembro de 1951, o Departamento da Marinha anunciou que o submarino se chamaria Nautilus, o quarto navio da Marinha dos EUA a ostentar o nome.\n[…]\nEm 4 de fevereiro de 1957, o Nautilus registrou sua 60 000ª milha náutica (110 000 km; 69 000 mi), igualando a resistência do fictício Nautilus descrito no romance de Júlio Verne Vinte Mil Léguas Submarinas. Em maio, partiu para a Costa do Pacífico para participar de exercícios costeiros e da operação de exercício de frota \"Home Run\", que familiarizou as unidades da Frota do Pacífico com as capacidades dos submarinos nucleares.\n[…]\nNo final de seu serviço, o casco e a vela do Nautilus vibravam tanto que o sonar se tornava ineficaz a velocidades superiores a 4 kn (7,4 km/h; 4,6 mph), tornando a embarcação vulnerável à detecção por sonar. As lições aprendidas com esse problema foram aplicadas a submarinos nucleares posteriores.\n[…]\nUS Navy Submarine Force Museum: Casa oficial do USS Nautilus",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Sherlock Holmes",
      "descricao": "Detetive londrino criado pelo escritor escocês Arthur Conan Doyle em 1887."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O médico Gregory House, genial e ranzinza protagonista da série House, foi inspirado em que detetive da literatura?",
    "resposta": "Sherlock Holmes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gregory_House"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gregory_House",
        "situacao": "ok",
        "texto": "Gregory House is a fictional character and the titular protagonist of the American medical drama series House. Created by David Shore and portrayed by English actor Hugh Laurie, he leads a team of diagnosticians and is the Head of Diagnostic Medicine at the fictional Princeton-Plainsboro Teaching Hospital in Princeton, New Jersey. House's character has been described as a misanthrope, cynic, narci\n[…]\nIn the series, the character's unorthodox diagnostic approaches, radical therapeutic motives, and stalwart rationality have resulted in much conflict between him and his colleagues. House is also often portrayed as lacking sympathy for his patients, a practice that allows him time to solve ethical enigmas. The character is partly based on Sherlock Holmes.\n[…]\nSimilarities between House and the famous fictional detective Sherlock Holmes appear throughout the series; Shore explained that he was always a Sherlock Holmes fan, and found the character's indifference to his clients unique. The resemblance is evident in various elements of the series' plot, such as House's reliance on psychology to solve a case, his reluctance to accept cases he does not find interesting and House's home address, 221B Baker Street, which is the same as Holmes'.\n[…]\nIn the season two finale \"No Reason\", House is shot by a man named Jack Moriarty, a name that coincides with Sherlock Holmes' adversary, Professor James Moriarty; likewise, in the fifth season, Wilson uses Irene Adler as the name for an imaginary love interest of House (a teacher by the name of Rebecca Adler was also the first patient Dr. House encounters in the first episode of the series), the same name as a notable female adversary of Holmes.\n[…]\nHoltz, Andrew (2011). House M.D. vs. Reality: Fact and Fiction in the Hit Television Series. New York: Berkley Books. ISBN 978-0-425-23893-6.\n[…]\nGregory House at the TV IV\n[…]\nDr. House modelled after Sherlock Holmes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gregory_House",
        "situacao": "ok",
        "texto": "Gregory House é um personagem fictício, protagonista da série americana House, interpretado por Hugh Laurie.\n[…]\nÉ um gênio da medicina, formado na Johns Hopkins University School of Medicine que lidera um grupo de diagnosticistas no Princeton-Plainsboro Teaching Hospital. A cada episódio ele e sua equipa desvendam casos cada vez mais intrigantes que desafiam sua inteligência e raciocínio. House descrito como um misantropo, cínico, sarcástico, e ranzinza, esta última uma das palavras mais usadas para definir a personagem em 2006.\n[…]\nNa série, a cada novo episódio, ele e sua equipe enfrentam casos totalmente fora do comum, que desafiam a sua inteligência e raciocínio, obrigam House a utilizar muitas vezes práticas heterodoxas de diagnóstico, e motivações terapêuticas radicais.\n[…]\nBrilhante, Gregory valoriza mais a descoberta do quebra-cabeça, a ligação dos sintomas, para fazer o diagnóstico mais importante do que a vida do próprio paciente, e a racionalidade forte de House resultam em conflitos frequentes entre ele e a sua equipa. Além disso, por detrás dos casos médicos ainda são relatadas a vida das personagens e os seus problemas pessoais.[carece de fontes]?\n[…]\nTambém é mostrada com frequência a falta de empatia e simpatia de House por seus pacientes, uma prática que lhe proporciona mais tempo para resolver enigmas patológicos. A personagem é parcialmente inspirado em Sherlock Holmes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Fausto (Goethe)",
      "descricao": "Poema dramático de Johann Wolfgang von Goethe sobre um sábio que faz um pacto com o demônio."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Fausto, de Goethe, com que demônio o velho sábio insatisfeito faz um pacto?",
    "resposta": "Mefistófeles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Goethe%27s_Faust",
      "https://pt.wikipedia.org/wiki/Fausto_(Goethe)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goethe%27s_Faust",
        "situacao": "ok",
        "texto": "Faust ( FOWST, German: [faʊst] ) is a tragic play in two parts by Johann Wolfgang von Goethe, usually known in English as Faust, Part One and Faust, Part Two, based on the German folk legend Faust. Nearly all of Part One and the majority of Part Two are written in rhymed verse. Although rarely staged in its entirety, it is the play with the largest audience numbers on German-language stages. Faust\n[…]\nGretchen, Faust's love (short for Margarete; Goethe uses both forms)\n[…]\nIn 1828, at the age of twenty, Gérard de Nerval published a French translation of Goethe's Faust.\n[…]\nStuart Atkins: Faust I & II, Volume 2: Goethe's Collected Works (1984) for Princeton University Press.\n[…]\nLudwig van Beethoven's song \"Es war einmal ein König\": Aus Goethes Faust, Op. 75, No. 3 (1809)\n[…]\nIn 1814 Franz Schubert set a text from Faust Part I, scene 18 as \"Gretchen am Spinnrade\" (D 118; Op. 2). It was his first setting of a text by Goethe. Later Lieder by Schubert based on Faust: D 126, 367, 440 and 564.\n[…]\nAntoni Henryk Radziwiłł's opera Faust (1835) is based on the original version of Faust Part I. Composed between 1808 and 1832, it received its first complete performance in Berlin in 1835. Created in close contact with Goethe, Radziwiłł’s musical setting is considered to have influenced the author’s subsequent revisions of his drama.\n[…]\nRobert Schumann's secular oratorio Scenes from Goethe's Faust (1844–1853)\n[…]\nArrigo Boito's opera Mefistofele (1868; 1875)\n[…]\nF. W. Murnau's film Faust (1926) is based on older versions of the legend as well as Goethe's version.\n[…]\nRudolf Volz's Rock Opera Faust with original lyrics by Goethe (1997)\n[…]\nSwedish singer and rapper Bladee's song \"Faust\" is based on Goethe's work.\n[…]\nPhilipp Humm's modern art film The Last Faust (2019) is directly based on Goethe's Faust and is the first film made on Faust part I and part II.\n[…]\nFaust public domain audiobook at LibriVox (multiple languages, including English)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fausto_(Goethe)",
        "situacao": "ok",
        "texto": "Fausto (em alemão: Faust) é um poema trágico do escritor alemão Johann Wolfgang von Goethe, dividido em duas partes. Está redigido como uma peça de teatro com diálogos rimados, pensado mais para ser lido que para ser encenado. É considerado uma das grandes obras-primas da literatura alemã.\n[…]\nMefistófeles, um demônio;\n[…]\nA Parte I é uma história complexa que abarca múltiplos cenários. Não está dividida em atos, mas sim em cenas. Após um poema dedicatório e um prelúdio, a ação começa no Céu, onde Mefistófeles faz uma aposta com Deus: diz que poderá conquistar a alma de Fausto - um favorito de Deus -, um sábio que tenta aprender tudo que pode ser conhecido.\n[…]\nPara distraí-lo de Margarida, Mefistófeles leva Fausto à festa da Noite de Santa Valburga (Walpurgisnacht), onde celebram juntos bruxas e demônios. Uma jovem bruxa tenta seduzir Fausto em vão. Enquanto isso, Margarida afogou o filho recém-nascido num sinal de desespero e foi condenada à morte pela justiça. Fausto sente-se culpado por isso e acusa Mefistófeles, que replica que é Fausto quem tem toda a culpa.\n[…]\nO demônio consegue a chave da cela de Margarida e Fausto tenta fazer com que ela escape, mas ela resiste porque percebe que ele já não a ama. Ao ver Mefistófeles, Margarida grita \"Meu Deus, toda me entrego a teu juízo!\". Mefistófeles tira Fausto da cela e diz que \"Foi julgada!\". Em seguida, um coro celestial afirma \"Salvou-se!\", indicando que a pureza de Margarida salvou sua alma.\n[…]\nNo final Fausto consegue ir ao Paraíso, por haver perdido apenas metade da aposta com o demônio. Anjos, como mensageiros da vontade divina, anunciam no final do Ato V \"Cantemos em coro, Da vitória a palma, O ar está puro: Respire esta alma!\", e levam a parte imortal de Fausto ao Céu, derrotando Mefistófeles.\n[…]\nFausto"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "As Mil e Uma Noites",
      "descricao": "Coletânea de contos do mundo árabe e persa, reunidos ao longo de séculos, narrados numa moldura em que uma jovem conta histórias a um rei."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nas Mil e Uma Noites, que jovem conta histórias ao rei toda noite para adiar a própria execução?",
    "resposta": "Sherazade",
    "fonte": [
      "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
      "https://pt.wikipedia.org/wiki/As_Mil_e_Uma_Noites"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
        "situacao": "ok",
        "texto": "One Thousand and One Nights or The Thousand and One Nights (Arabic: أَلْفُ لَيْلَةٍ وَلَيْلَةٌ, Alf Laylah wa-Laylah) is a collection of Middle Eastern folktales compiled in the Arabic language during the Islamic Golden Age. It is often known in English as The Arabian Nights, from the first English-language edition (c. 1706–1721), which rendered the title as The Arabian Nights' Entertainments.\n[…]\nThe 1949 animated film The Singing Princess, another movie produced in Italy, is inspired by The Arabian Nights. The animated feature film, One Thousand and One Arabian Nights (1969), produced in Japan and directed by Osamu Tezuka and Eichii Yamamoto, featured psychedelic imagery and sounds, and erotic material intended for adults.\n[…]\nAlif Laila (The Arabian Nights), a 1993–1997 Indian TV series based on the stories from One Thousand and One Nights produced by Sagar Entertainment Ltd and aired on DD National, starts with Scheherazade telling her stories to Shahryār, and contains both the well-known and the lesser-known stories from One Thousand and One Nights. Another Indian television series, Alif Laila, based on various stories from the collection, aired on Dangal TV in 2020.\n[…]\nArabian Nights (2015, in Portuguese: As Mil e uma Noites), a three-part film directed by Miguel Gomes, is based on One Thousand and One Nights.\n[…]\nDwight Reynolds, \"A Thousand and One Nights: A History of the Text and Its Reception\" in The Cambridge History of Arabic Literature Vol 6. (CUP 2006).\n[…]\nNurse, Paul McMichael. Eastern Dreams: How the Arabian Nights Came to the World Viking Canada: 2010. General popular history of the 1001 Nights from its earliest days to the present.\n[…]\nThe Arabian Nights public domain audiobook at LibriVox\n[…]\nThe Thousand Nights and a Night in several classic translations, including the Sir Richard Francis Burton unexpurgated translation and John Payne translation, with additional material"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/As_Mil_e_Uma_Noites",
        "situacao": "ok",
        "texto": "As Mil e Uma Noites (em árabe: كتاب ألف ليلة وليلة; romaniz.: Quitâb 'alf laila ua-laila, \"O Livro das Mil e Uma Noites\"; em persa: هزار و یک شب; romaniz.: Hezār-o yek šab) ou ainda \"Mil noites e uma noite\", é coleção de histórias e contos populares originárias do Médio Oriente e do sul da Ásia e compiladas em língua árabe a partir do século IX.\n[…]\nAssim, uma versão árabe das Mil e uma noites, estruturada ao redor dos contos narrados por Xerazade para escapar da execução por Xariar, já existia no século IX e o núcleo de contos era derivado de uma tradução da obra persa Hazār afsāna realizada talvez no século VIII. A história da traição do rei Xariar pela primeira mulher, que explica o comportamento do rei, não é mencionada por ibne Anadim e provavelmente surgiu após o século X.\n[…]\nOutra fonte de Galland, segundo o próprio, foi um contador de histórias chamado Hanna Diab, um maronita de Alepo, que narrou-lhe contos como o de Aladim e a Lâmpada Maravilhosa e o de Ali Babá e os Quarenta Ladrões. Estes contos incorporados por Galland, e que aparentemente não formavam parte das Mil e uma noites original, tornaram-se extremamente populares e passaram a ser incluídos em manuscritos árabes e traduções europeias produzidas posteriormente.\n[…]\nA tradução deste último, chamada The Book of the Thousand Nights and a Night e publicada em 10 volumes, foi baseada em Calcutá II e tornou-se muito influente, além de escandalosa na Inglaterra vitoriana, uma vez que Burton, ao contrário de seu predecessor Paine, não censurou as cenas eróticas da obra e inclusive as enfatizou, enfrentando os costumes morais da época. Mais tarde, Burton publicou contos de outros manuscritos das Noites em um Suplemento publicado entre 1886 e 1888.\n[…]\nControvérsias na história do Livro das mil e uma noites\n[…]\nAs Mil e Uma Noites: Clássico dos Clássicos da Literatura Árabe"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Romeu e Julieta",
      "descricao": "Tragédia de William Shakespeare sobre dois jovens apaixonados de famílias inimigas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Romeu e Julieta, Romeu pertence à família dos Montéquios. De que família rival é Julieta?",
    "resposta": "Capuleto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Romeo_and_Juliet",
      "https://pt.wikipedia.org/wiki/Romeu_e_Julieta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Romeo_and_Juliet",
        "situacao": "ok",
        "texto": "The Tragedy of Romeo and Juliet, often shortened to Romeo and Juliet, is a tragedy written by William Shakespeare about the romance between two young Italians from feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed. The title characters are regarded as archetypal young lovers.\n[…]\nMontague argues that Romeo has justly executed Tybalt for the murder of Mercutio. The Prince, now having lost a kinsman in the warring families' feud, exiles Romeo from Verona under penalty of death if he ever returns. Romeo secretly spends the night in Juliet's chamber, where they consummate their marriage. Capulet, misinterpreting Juliet's grief, agrees to marry her to Count Paris and threatens to disown her when she refuses to become Paris's \"joyful bride\".\n[…]\nParis' love for Juliet also sets up a contrast between Juliet's feelings for him and her feelings for Romeo. The formal language she uses around Paris, as well as the way she talks about him to her Nurse, show that her feelings clearly lie with Romeo. Beyond this, the sub-plot of the Montague–Capulet feud overarches the whole play, providing an atmosphere of hate that is the main contributor to the play's tragic end.\n[…]\nRomeo sneaks into the Capulet barbecue to meet Juliet, and Juliet discovers Tybalt's death while in class at school.\n[…]\nThe play has been widely adapted for TV and film. In 1960, Peter Ustinov's cold-war stage parody, Romanoff and Juliet was filmed. The 1961 film West Side Story—set among New York gangs—featured the Jets as white youths, equivalent to Shakespeare's Montagues, while the Sharks, equivalent to the Capulets, are Puerto Rican. In 2006, Disney's High School Musical made use of Romeo and Juliet's plot, placing the two young lovers in different high-school cliques instead of feuding families."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Romeu_e_Julieta",
        "situacao": "ok",
        "texto": "Romeu e Julieta (no original em inglês: Romeo and Juliet) é uma tragédia escrita entre 1591 e 1595, nos primórdios da carreira literária de William Shakespeare, sobre dois adolescentes cuja morte acaba unindo suas famílias, outrora em pé de guerra. A peça ficou entre as mais populares na época de Shakespeare e, ao lado de Hamlet, é uma das suas obras mais levadas aos palcos do mundo inteiro. Hoje,\n[…]\nRomeu e Julieta pertence a uma tradição de romances trágicos que remonta à antiguidade. Seu enredo é baseado em um conto italiano, traduzido em versos como A Trágica História de Romeu e Julieta, por Arthur Brooke, em 1562. E refeito em prosa como Palácio do Prazer, por William Painter, em 1582. Shakespeare baseou-se em ambos, mas reforçou a atuação dos personagens secundários, especialmente Mercúcio e Páris, a fim de expandir o enredo.\n[…]\nRomeu, por exemplo, fica mais versado nos sonetos à medida que a trama se desenvolve.\n[…]\nA peça tornou-se memorável nos palcos brasileiros com a interpretação de Paulo Porto e Sônia Oiticica nos papéis principais. Serviu de inspiração para o romance Inocência, de Visconde de Taunay, e Amor de Perdição, de Camilo Castelo Branco, considerado o \"Romeu e Julieta lusitano\".\n[…]\nAlém de se mostrar influente no ultrarromantismo português e no naturalismo brasileiro, Romeu e Julieta mantém-se famosa nas produções cinematográficas atuais, notavelmente na versão de 1968 de Zeffirelli, indicado ao Oscar como melhor filme, e no mais recente Romeu + Julieta, de Luhrmann, que traz seu enredo para a atualidade.\n[…]\nRomeu e Julieta retrata a interação entre três proeminentes famílias em Verona:"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Alexandre Pushkin",
      "descricao": "Poeta e romancista russo do Romantismo, autor de Eugênio Onêguin."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1837, aos trinta e sete anos, o poeta Alexandre Pushkin morreu em São Petersburgo. O que provocou sua morte?",
    "resposta": "Um ferimento num duelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alexander_Pushkin",
      "https://pt.wikipedia.org/wiki/Alexandre_Pushkin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Pushkin",
        "situacao": "ok",
        "texto": "Alexander Sergeyevich Pushkin (6 June [O.S. 26 May] 1799 – 10 February [O.S. 29 January] 1837) was a Russian poet, playwright, and novelist of the Romantic era. He is considered by many to be the greatest Russian poet, as well as the founder of modern Russian literature.\n[…]\nThe Montenegrin poet and ruler Petar II Petrović-Njegoš included a poetic ode to Pushkin, titled Sjeni Aleksandra Puškina (To the Shadow of Alexander Pushkin), in his 1846 poetry collection Ogledalo srpsko (The Serbian Mirror).\n[…]\nAleksandra Ishimova\n[…]\nPushkin Prize\n[…]\nVasily Pushkin\n[…]\nGalgano Andrea (2014). The affective dynamics in the work and thought of Alexandr Pushkin, Conference Proceedings, 17th World Congress of the World Association for Dynamic Psychiatry. Multidisciplinary Approach to and Treatment of Mental Disorders: Myth or Reality?, St. Petersburg, 14–17 May 2014, In Dynamische Psychiatrie.\n[…]\nMorfill, William Richard (1911). \"Pushkin, Alexander\" . In Chisholm, Hugh (ed.). Encyclopædia Britannica. Vol. 22 (11th ed.). Cambridge University Press. pp. 668–669.\n[…]\nТелетова, Н. К. (Teletova, N. K.) (2007), Забытые родственные связи А.С. Пушкина (The forgotten family connections of A.S. Pushkin). Saint Petersburg: Dorn, OCLC 214284063\n[…]\nWorks by Alexander Pushkin in eBook form at Standard Ebooks\n[…]\nWorks by Aleksandr Pushkin at Project Gutenberg\n[…]\nWorks by or about Alexander Sergeyevich Pushkin at the Internet Archive\n[…]\nWorks by Alexander Pushkin at LibriVox (public domain audiobooks)\n[…]\nAlexander Pushkin. Mozart and Saliery in English\n[…]\nAlexander Pushkin. Boris Godunov in English\n[…]\nAlexander Pushkin. The Bronze Horseman in English\n[…]\nAlexander Pushkin poetry(rus)\n[…]\nNewspaper clippings about Alexander Pushkin in the 20th Century Press Archives of the ZBW\n[…]\n(in Russian) Alexander Pushkin Fairy Tales: Russian Text"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alexandre_Pushkin",
        "situacao": "ok",
        "texto": "Aleksandr Serguêievitch Púchkin (em russo: Алекса́ндр Серге́евич Пу́шкин; Moscou, 26 de maiojul./ 6 de junho de 1799greg. — São Petersburgo, 29 de janeirojul./ 10 de fevereiro de 1837greg.) foi um poeta, escritor e dramaturgo russo da Era Romântica.\n[…]\nAleksandr Serguêievitch Púchkin publicou seu primeiro poema com quinze anos de idade e foi largamente reconhecido nos meios literários antes mesmo de sua graduação no Imperial Lyceum, localizado no Tsarskoye Selo, a vila real de então.\n[…]\nPúchkin e sua esposa, Natalya Goncharova, com quem se casou em 1831, tornar-se-iam regulares frequentadores da corte. Em 1837, diante dos boatos, cada vez mais insistentes, de que sua esposa começara um escandaloso caso extraconjugal, Púchkin desafiou o dito amante, Georges d'Anthès, para um duelo. Mortalmente ferido pelo oponente, Púchkin faleceria dois dias depois. Encontra-se sepultado no Svyatogorsk monastery Cemetery, Pushkinskiye Gory, Pskovskaya Oblast' na Rússia.\n[…]\nAleksandr Púchkin (2003). Contos. Traduzido por Nina Guerra e Filipe Guerra. Lisboa: Relógio d'Água. 183 páginas . Inclui os seguintes contos:\n[…]\nObras de Pushkinno Projeto Gutenberg\n[…]\nA história da família de Aleksandr Pushkin\n[…]\nObras de Aleksandr Pushkin (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Alexander Sergeyevich Pushkin no Internet Archive\n[…]\nEnglish translations of Pushkin's poems. Retrieved 2013-04-26\n[…]\nAlexander Pushkin. Mozart and Saliery (em inglês)\n[…]\nAlexander Pushkin. Boris Godunov (em inglês)\n[…]\nAlexander Pushkin. The Bronze Horseman (em inglês)\n[…]\nAlexander Pushkin poetry (em russo)\n[…]\nPushkin's poetry translated to English by Margaret Wettlin Arquivado em 2020-07-25 no Wayback Machine\n[…]\nAlexander Pushkin Fairy Tales: Russian Text (em russo)"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Dia Internacional do Livro Infantil",
      "descricao": "Data comemorativa celebrada em 2 de abril, promovida pela organização internacional IBBY."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Dia Internacional do Livro Infantil, dois de abril, foi escolhido por ser o aniversário de que escritor dinamarquês?",
    "resposta": "Hans Christian Andersen",
    "fonte": [
      "https://en.wikipedia.org/wiki/International_Children%27s_Book_Day",
      "https://en.wikipedia.org/wiki/Hans_Christian_Andersen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/International_Children%27s_Book_Day",
        "situacao": "ok",
        "texto": "International Children's Book Day (ICBD) is a yearly event sponsored by the International Board on Books for Young People (IBBY), an international non-profit organization. Founded in 1967, the day is observed on or around Hans Christian Andersen's birthday, April 2. Activities include writing competitions, announcements of book awards and events with authors of children's literature.\n[…]\nEach year a different National Section of IBBY has the opportunity to be the international sponsor of ICBD. It decides upon a theme and invites a prominent author from the host country to write a message to the children of the world and a well-known illustrator to design a poster. These materials are used in different ways to promote books and reading. Many IBBY Sections promote ICBD through the media and organize activities in schools and public libraries.\n[…]\nOften ICBD is linked to celebrations around children's books and other special events that may include encounters with authors and illustrators, writing competitions or announcements of book awards.\n[…]\nWorld Book Day\n[…]\nInternational Children's Book Day"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hans_Christian_Andersen",
        "situacao": "ok",
        "texto": "Hans Christian Andersen ( AN-dər-sən; Danish: [ˈhænˀs ˈkʰʁestjæn ˈɑnɐsn̩, - ˈkʰʁæs-] ; 2 April 1805 – 4 August 1875) was a Danish writer. A prolific writer of plays, travelogues, novels, and poems, he is also best remembered for his literary fairy tales.\n[…]\nAndersen was born in Odense, Denmark, on 2 April 1805. He had a half sister named Karen. Andersen's father, also named Hans, considered himself related to nobility (his paternal grandmother had told his father that their family had belonged to a higher social class, but investigations have disproved these stories). Although it has been challenged, speculation suggests that Andersen was an illegitimate son of King Christian VIII. Danish historian Jens Jørgensen supported this idea in his book H.C.\n[…]\nHans Christian Andersen Awards, prizes awarded annually by the International Board on Books for Young People to an author and illustrator whose complete works have made lasting contributions to children's literature.\n[…]\nCEIP Hans Christian Andersen, a primary Education School in Malaga, Spain.\n[…]\nStirling, Monica (1965). The Wild Swan: The Life and Times of Hans Christian Andersen. New York: Harcourt, Brace & World, Inc.\n[…]\nWullschläger, Jackie (2000). Hans Christian Andersen: The Life of a Storyteller. London: Allen Lane. ISBN 0-713-99325-1.\n[…]\nZipes, Jack (2005). Hans Christian Andersen: The Misunderstood Storyteller. New York and London: Routledge. ISBN 0-415-97433-X.\n[…]\nHans Christian Andersen at Project Gutenberg\n[…]\nWorks by Hans Christian Andersen at Faded Page (Canada)\n[…]\nWorks by or about Hans Christian Andersen at the Internet Archive\n[…]\nWorks by Hans Christian Andersen at LibriVox (public domain audiobooks)\n[…]\nThe Story of My Life (1871) by Hans Christian Andersen in English\n[…]\nHans Christian Andersen at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_Internacional_do_Livro_Infantil",
        "situacao": "ok",
        "texto": "O Dia Internacional do Livro Infantil é um evento internacional comemorado no dia 2 de abril, em função da data em que nasceu o escritor dinamarquês Hans Christian Andersen, em 1805.\n[…]\nO autor Hans Christian Andersen foi o primeiro a adaptar fábulas existentes para a linguagem infantil, criando um produto específico para consumo das crianças. As versões mais famosas de clássicos como \"O Patinho Feio\", \"A pequena Sereia\" e a \"A Polergazinha\" são de sua autoria.\n[…]\nA data foi instituída pela  International Board on Books for Young People - IBBY em 1967. Neste mês, a organização sem fins lucrativos realiza uma série de eventos como o Prêmio Hans Christian Andersen, considerado o Nobel da Literatura Infantil.\n[…]\nCom ações independentes, muitas escolas e instituições promovem concursos, mostras e ações voltados para a difusão da leitura no mês de abril. Bibliotecas e salas de leitura fazem referências a Anderson, outras fazem a Monteiro Lobato. Peças de teatro sobre o dia do livro, poesias, contos e declamações marcam esse mês em muitos países.\n[…]\nNo Brasil, o Dia Nacional do Livro Infantil é celebrado a 18 de abril, data do nascimento de Monteiro Lobato (1882-1948), considerado um dos principais nomes da literatura infantojuvenil brasileira. A sua obra mais conhecida, o Sítio do Picapau Amarelo, deu origem a diversas adaptações televisivas de grande popularidade, nas quais elementos do folclore brasileiro convivem com personagens da literatura universal e narrativas contemporâneas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "O Diário de Anne Frank",
      "descricao": "Diário escrito pela adolescente judia Anne Frank enquanto vivia escondida dos nazistas, entre 1942 e 1944."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o diário de Anne Frank termina de repente, no começo de agosto de 1944?",
    "resposta": "O esconderijo foi descoberto",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Diary_of_a_Young_Girl",
      "https://en.wikipedia.org/wiki/Anne_Frank"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Diary_of_a_Young_Girl",
        "situacao": "ok",
        "texto": "The Diary of a Young Girl, commonly referred to as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands. The family was apprehended in 1944, and Anne Frank died of typhus in the Bergen-Belsen concentration camp in 1945. Anne's diaries were retrieved by \n[…]\nThe diary received widespread critical and popular attention on the appearance of its English language translation, Anne Frank: The Diary of a Young Girl by Doubleday & Company (United States) and Vallentine Mitchell (United Kingdom) in 1952. Its popularity inspired the 1955 play The Diary of Anne Frank by the screenwriters Frances Goodrich and Albert Hackett, which they adapted for the screen for the 1959 movie version. The book is included in several lists of the top books of the 20th century.\n[…]\nIn 2021, Ari Folman directed Where Is Anne Frank, an animated magical realism film based on Frank's life, with the animation styled after Polonsky's illustrations for Folman's 2018 graphic novel adaptation of The Diary of a Young Girl.\n[…]\nIn 2010, the Culpeper County, Virginia, school system banned the 50th Anniversary \"Definitive Edition\" of Anne Frank: The Diary of a Young Girl, due to \"complaints about its sexual content and homosexual themes.\" This version \"includes passages previously excluded from the widely read original edition....\n[…]\nAnne Frank: The Diary of a Young Girl, Anne Frank, Eleanor Roosevelt (Introduction) and B.M. Mooyaart (translation). Bantam, 1993. ISBN 0553296981 (paperback). (Original 1952 translation)\n[…]\nThe Diary of a Young Girl: The Definitive Edition, Otto H. Frank and Mirjam Pressler (Editors); Susan Massotty (Translator). Doubleday, 1991.\n[…]\nThe history of the diary of Anne Frank\n[…]\nAbout the Diary of Anne Frank\n[…]\nOnline exhibition of Anne Frank's manuscripts\n[…]\nAnne Frank Quotes"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Anne_Frank",
        "situacao": "ok",
        "texto": "Annelies Marie Frank (12 June 1929 – c. February or March 1945) was a German-born Jewish diarist and Holocaust victim. She gained worldwide notability posthumously for keeping a diary documenting her life in hiding during the German occupation of the Netherlands. In the diary, she regularly described her family's everyday life in their hiding place in a secret annex in Amsterdam from 1942 until th\n[…]\nOtto Frank, the only Holocaust survivor in the family, returned to Amsterdam after World War II to find that Anne's diary had been saved by his secretaries, Miep Gies and Bep Voskuijl. Moved by his daughter's repeated wishes to be an author, Otto Frank published her diary in 1947. It was translated from its original Dutch version and first published in English in 1952 as The Diary of a Young Girl (originally Het Achterhuis in Dutch, lit.\n[…]\nThe Frank sisters each hoped to return to school as soon as they were able and continued with their studies while in hiding. Margot took an 'Elementary Latin' course by correspondence in Bep Voskuijl's name and received high marks. Most of Anne's time was spent reading and studying, and she regularly wrote and edited (after March 1944) her diary entries.\n[…]\nThe diary was first published in Germany and France in 1950, and in the United Kingdom in 1952 after being rejected by several publishers. The first American edition, published in 1952 under the title Anne Frank: The Diary of a Young Girl, was positively reviewed. The book was also successful in France and Germany. In the United Kingdom, however, it failed to attract an audience and by 1953 was out of print.\n[…]\nIn 2009, UNESCO added the diary and other writings of Anne Frank in to its Memory of the World International Register, listing documentary heritage of global importance.\n[…]\nAnne Frank House\n[…]\nAnne Frank Trust UK\n[…]\nAnne Frank Fonds (Foundation)\n[…]\nOnline exhibition about the family history of Anne Frank"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Di%C3%A1rio_de_Anne_Frank",
        "situacao": "ok",
        "texto": "O Diário de Anne Frank é um livro escrito por Anne Frank entre 12 de junho de 1942 e 1.º de agosto de 1944 durante a Segunda Guerra Mundial. É conhecido por narrar momentos vivenciados pelo grupo de judeus confinados em um esconderijo durante a ocupação nazista dos Países Baixos. Publicado originalmente com o título de Het Achterhuis.\n[…]\nDagboekbrieven 14 Juni 1942 – 1 Augustus 1944 (O Anexo: Notas do Diário 14 de junho de 1942 - 1º de agosto de 1944) pela editora \"Contact Publishing\" em Amsterdã em 1947, o diário recebeu ampla atenção popular e da crítica após sua publicação inglês intitulada \"Anne Frank: The Diary of a Young Girl\" pela Doubleday & Company (Estados Unidos) e Vallentine Mitchell (Reino Unido) em 1952.\n[…]\nNa versão publicada, os nomes foram alterados: Os van Pelses são conhecidos como Van Daans e Fritz Pfeffer como Albert Dussel. Com a ajuda de um grupo de colegas de confiança de Otto Frank, eles permaneceram escondidos por dois anos e um mês.\n[…]\nEm agosto de 1944, eles foram descobertos e deportados para campos de concentração nazistas. Há muito tempo se pensava que haviam sido traídos, embora haja indícios de que sua descoberta pode ter sido acidental, de que a operação policial na verdade tinha como alvo uma \"fraude de racionamento\". Das oito pessoas, apenas Otto Frank sobreviveu à guerra. Anne tinha 15 anos quando morreu em Bergen-Belsen.\n[…]\nEm 4 de agosto de 1944, agentes da Gestapo detiveram todos os ocupantes que estavam escondidos em Amsterdã. Separaram Anne de seus pais e levaram-nos para os campos de concentração. O diário de Anne Frank foi entregue por Miep Gies a Otto H. Frank, seu pai, após a morte de Anne Frank ser confirmada. Anne Frank faleceu no campo de concentração Bergen-Belsen em março de 1945, quando tinha 15 anos.\n[…]\nCasa de Anne Frank",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Salman Rushdie",
      "descricao": "Escritor britânico de origem indiana, nascido em 1947, autor de Os Filhos da Meia-Noite."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1989, o aiatolá Khomeini, líder do Irã, decretou a morte do escritor Salman Rushdie. Por causa de que livro?",
    "resposta": "Os Versos Satânicos",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Satanic_Verses",
      "https://pt.wikipedia.org/wiki/Os_Versos_Sat%C3%A2nicos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Satanic_Verses",
        "situacao": "ok",
        "texto": "The Satanic Verses is the fourth novel by British–Indian writer Salman Rushdie. First published in September 1988, the book was inspired by the life of the Islamic prophet Muhammad. As with his previous books, Rushdie used magical realism and relied on contemporary events and people to create his characters. The title refers to the Satanic Verses, a group of Quranic verses about three pagan Meccan\n[…]\nThe part of the story that deals with the satanic verses was based on accounts from the historians al-Waqidi and al-Tabari.\n[…]\nThe Satanic Verses continued to exhibit Rushdie's penchant for organising his work in terms of parallel stories. Within the book \"there are major parallel stories, alternating dream and reality sequences, tied together by the recurring names of the characters in each; this provides intertexts within each novel which comment on the other stories.\" The Satanic Verses also exhibits Rushdie's common practice of using allusions to invoke connotative links.\n[…]\nThe novel has been accused of blasphemy for its reference to the \"Satanic Verses\". Pakistan banned the book in November 1988. On 12 February 1989, 10,000 protesters gathered against Rushdie and the book in Islamabad, Pakistan. Six protesters were killed in an attack on the American Cultural Center, and an American Express office was ransacked. As the violence spread, the importing of the book was banned in India and it was burned in demonstrations in the United Kingdom.\n[…]\nIn September 2012, Rushdie expressed doubt that The Satanic Verses would be published today because of a climate of \"fear and nervousness\".\n[…]\n\"Looking back at Salman Rushdie's The Satanic Verses\". The Guardian. 14 September 2012. Retrieved 15 August 2022.\n[…]\n\"Notes on Salman Rushdie The Satanic Verses (1988)\". Washington State University. Archived from the original on 2 February 2004. Retrieved 15 August 2022."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Versos_Sat%C3%A2nicos",
        "situacao": "ok",
        "texto": "The Satanic Verses (Brasil: Versos Satânicos / Portugal: Os Versículos Satânicos) é o quarto romance do escritor britânico de origem indiana Salman Rushdie. Publicado pela primeira vez em setembro de 1988, o livro foi inspirado na vida do profeta islâmico Maomé. Assim como em seus livros anteriores, Rushdie usou o realismo mágico e contou com eventos e pessoas contemporâneas para criar seus person\n[…]\nO título refere-se aos Versos Satânicos, um grupo de versículos do Alcorão que se referem a três deusas pagãs de Meca: Alate, Uza e Manate. A parte da história que trata dos \"versos satânicos\" foi baseada em relatos dos historiadores Aluaquidi e Atabari.\n[…]\nNo Reino Unido, The Satanic Verses recebeu críticas positivas, foi finalista do Booker Prize de 1988 (perdendo para Oscar e Lucinda de Peter Carey) e ganhou o Whitbread Award de 1988 de romance do ano. No entanto, uma grande controvérsia se seguiu quando os muçulmanos o acusaram de blasfêmia e zombar de sua fé. A indignação entre os muçulmanos fez com que o aiatolá Ruhollah Khomeini, então líder supremo do Irã, pedisse a morte de Rushdie em 14 de fevereiro de 1989.\n[…]\nTemendo agitação, o governo de Rajiv Gandhi na Índia impediu que o livro fosse importado.\n[…]\nNa Inglaterra, militantes muçulmanos queimaram o livro. Em vários países foi proibida a sua edição. A reação mais violenta veio do Irão. Pela crítica em relação ao Islamismo, o aiatolá Khomeini decretou em 1989 uma sentença de morte (fatwa) clamando pela morte \"do autor do livro Versos Satânicos, que é contra o Islã, o Profeta e o Alcorão, e todos aqueles envolvidos em sua publicação que estejam cientes de seu conteúdo\".\n[…]\nKhomeini, sem ser citado explicitamente, aparece em um dos sonhos de Gibreel. Líderes religiosos iranianos ofereceram 6 milhões de dólares como recompensa pelo assassinato de Rushdie."
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Agatha Christie",
      "descricao": "Escritora inglesa de romances policiais, criadora dos detetives Hercule Poirot e Miss Marple."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em 1926, Agatha Christie sumiu sem deixar rastro e acabou achada num hotel, hospedada com nome falso. Quantos dias durou o sumiço?",
    "resposta": "Onze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Agatha_Christie",
      "https://pt.wikipedia.org/wiki/Agatha_Christie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Agatha_Christie",
        "situacao": "ok",
        "texto": "Dame Agatha Mary Clarissa Mallowan, Lady Mallowan (née Miller, 15 September 1890 – 12 January 1976), usually known by her first married name, Agatha Christie, was an English author known for her 66 detective novels and 14 short-story collections, particularly those revolving around fictional detectives Hercule Poirot (with the novel debut being The Mysterious Affair at Styles in 1920), Tommy and T\n[…]\nOn 14 December 1926, she was located at the Swan Hydropathic Hotel in Harrogate, Yorkshire, 184 miles (296 km) north of her home in Sunningdale, registered as \"Mrs Tressa Neele\" (the surname of her husband's lover) from \"Capetown [sic] S.A.\" (South Africa). The next day, Christie left for her sister's residence at Abney Hall, Cheadle, where she was sequestered \"in guarded hall, gates locked, telephone cut off, and callers turned away\".\n[…]\nSome of Christie's fictional portrayals have explored and offered accounts of her disappearance in 1926. The film Agatha (1979), with Vanessa Redgrave, has Christie sneaking away to plan revenge against her husband; Christie's heirs sued unsuccessfully to prevent the film's distribution. The Doctor Who episode \"The Unicorn and the Wasp\" (17 May 2008) stars Fenella Woolgar as Christie, and explains her disappearance as being connected to aliens.\n[…]\nThe American television program Unsolved Mysteries devoted a segment to her famous disappearance, with Agatha portrayed by actress Tessa Pritchard. A young Agatha is depicted in the Spanish historical television series Gran Hotel (2011) in which she finds inspiration to write her new novel while aiding local detectives. In the alternative history television film Agatha and the Curse of Ishtar (2018), Christie becomes involved in a murder case at an archaeological dig in Iraq.\n[…]\nAgatha Christie (oral history) at the Imperial War Museum\n[…]\nAgatha Christie at IMDb\n[…]\nAgatha Christie at PBS.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Agatha_Christie",
        "situacao": "ok",
        "texto": "Agatha Mary Clarissa Christie DBE, nascida Agatha Mary Clarissa Miller; (Torquay, 15 de setembro de 1890 — Wallingford, 12 de janeiro de 1976), popularmente conhecida como Agatha Christie, foi uma escritora britânica que atuou como romancista, contista, dramaturga e poetisa. Destacou-se no subgênero romance policial, tendo ganhado popularmente, em vida, a alcunha de \"Rainha/Dama do Crime\" (\"Queen/\n[…]\nAgatha Christie estava desaparecida há 11 dias, desde que seu carro havia sido encontrado no lago Silent Pool, e estava sendo procurada por aviões (foi a primeira vez que se usou aviões para buscar alguém desaparecido na Inglaterra), quando a polícia soube que ela estava no Hydropathic Hotel (hoje Old Swan Hotel), em Harrogate. Agatha chegou lá de táxi no dia 4 de dezembro levando consigo apenas uma mala.\n[…]\nO Grand Hotel, na beira do mar, foi o palco da lua-de-mel da autora, e é onde começa a Trilha Agatha Christie, que visita muitos dos marcos da vida da autora na região. Em 1938 comprou a Greenway Estate perto de Brixham, para viver com o segundo marido Max Mallowan, onde ela levou uma vida ativa na comunidade, chegando a doar com os lucros de um de seus livros e um vitral para a Churston Church, administrada por Lord e Lady Churston.\n[…]\nEm 1926, após uma média de um livro por ano, Agatha Christie escreveu a sua obra-prima: The Murder of Roger Ackroyd (O Assassinato de Roger Ackroyd). Este foi o primeiro dos seus livros a ser publicado pela Editora Collins, e marcou o início de um relacionamento autor-editor que durou 50 anos e 70 livros. The Murder of Roger Ackroyd também foi o primeiro dos livros de Agatha Christie a ser dramatizado – sob o nome de Álibi – e a fazer sucesso no West End de Londres.\n[…]\n(1985/1992) Agatha Christie's Miss Marple (série de telefilmes)\n[…]\n(1989) Agatha Christie's Poirot\n[…]\n(2005) Agatha Christie no Meitantei Poirot to Marple (anime)"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Os Lusíadas",
      "descricao": "Poema épico de Luís de Camões, publicado em 1572, sobre a viagem de Vasco da Gama à Índia."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O poema épico Os Lusíadas, de Camões, está dividido em quantos cantos?",
    "resposta": "Dez",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Lus%C3%ADadas",
      "https://en.wikipedia.org/wiki/Os_Lus%C3%ADadas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Lus%C3%ADadas",
        "situacao": "ok",
        "texto": "Os Lusíadas é uma obra de poesia épica do escritor português Luís Vaz de Camões, a primeira epopeia portuguesa publicada em versão impressa. Provavelmente iniciada em 1556 e concluída em 1571, foi publicada em Lisboa a 12 de março de 1572, no período literário do Classicismo, ou Renascimento tardio, três anos após o regresso do autor do Oriente, via Moçambique.\n[…]\nO poema épico mais genuíno é o canto da construção duma nação com a ajuda de Deus ou dos deuses. Os Lusíadas, como já a Eneida, é uma epopeia moderna, em que o maravilhoso não passa dum artifício necessário, mas só literário. A fé única no Deus cristão é defendida por toda a obra.\n[…]\n“Aemulatio” é uma prática onde o autor da obra procura não somente imitar, como superar os modelos antigos. Em Eneida, é traçada a história heroica de Eneias e em Lusíadas, temos Vasco da Gama em suas grandes navegações. Além dos heróis viajantes, Camões também traz para sua epopeia temas virgilianos como a intervenção dos Deuses e a exaltação patriótica, tanto em Eneida com a exaltação de Roma e Augusto, quanto em Lusíadas e sua glorificação da nação portuguesa.\n[…]\nEm 2006 foi publicada outra BD (HQ) com o nome de Lusíadas 2500, uma nova leitura da obra de Camões, desta vez num ambiente futurístico de ficção científica, por Lailson de Holanda Cavalcanti (ISBN 85-04-01037-6)\n[…]\nAmbos Os Lusíadas de Camões e a banda desenhada de José Ruy foram traduzidos para o mirandês, língua minoritária do nordeste de Portugal, por Amadeu Ferreira e Fracisco Niebro, respetivamente.\n[…]\n\"Os Lusíadas\", de Luís de Camões, Grandes Livros, Companhia de Ideias, 2009\n[…]\nOs Lusíadas: um poema épico e crítico, por Paula Moura Pinheiro, Câmara Clara (Extrato de Programa Cultural), RTP, 2007\n[…]\nCamões e Os Lusíadas, Português - Camões e Os Lusíadas - 10.º ano- aula 1, Secretaria Regional de Educação da Madeira, 2020"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Os_Lus%C3%ADadas",
        "situacao": "ok",
        "texto": "Os Lusíadas (Portuguese pronunciation: [uʒ luˈzi.ɐðɐʃ]), usually translated as The Lusiads, is a Portuguese epic poem written by Luís Vaz de Camões (c. 1524/5 – 1580) and first published in 1572. It is widely regarded as the most important work of Portuguese-language literature and is frequently compared to Virgil's Aeneid (1st c. BC). The work celebrates the discovery of a sea route to India by t\n[…]\nWritten in Homeric fashion, the poem focuses mainly on a fantastic interpretation of the Portuguese voyages of discovery during the 15th and 16th centuries. Os Lusíadas is often regarded as Portugal's national epic, much as Virgil's Aeneid was for the Ancient Romans, or Homer's Iliad and Odyssey for the Ancient Greeks. It was written when Camões was an exile in Macau and was first printed in 1572, three years after the author returned from the Indies.\n[…]\nThe Lusiad, trans. Thomas Mitchell (1854)\n[…]\nThe Lusiads, trans. John James Aubertin (1878)\n[…]\nThe Lusiad, trans. Robert Ffrench Duff (1880)\n[…]\nThe Lusiads, trans. Richard Francis Burton (1880)\n[…]\nO Primeiro Canto dos Lusíadas em Inglez, trans. James Edwin Hewitt (1881)\n[…]\nThe Lusiads, trans. Leonard Bacon (The Hispanic Society of America, 1950)\n[…]\nThe Lusiads, trans. William C. Atkinson (Penguin, 1952)\n[…]\nThe Lusiads, trans. Landeg White (Oxford, 1997)\n[…]\nOs Lusíadas at Standard Ebooks\n[…]\nOs Lusíadas at Project Gutenberg\n[…]\nOs Lusíadas public domain audiobook at LibriVox (in multiple languages)\n[…]\nThe Lusiads translated by Richard Francis Burton (in English)\n[…]\nThe Lusiads of Camoens (in English), translated by John James Aubertin, first part.\n[…]\nThe Lusiads of Camoens (in English), translated by John James Aubertin, second part.\n[…]\nO Primeiro Canto dos Lusíadas em Inglez, trans. James Edwin Hewitt.\n[…]\nOs Lusíadas (in Portuguese), online edition stanza by stanza\n[…]\nOs Lusíadas (in Portuguese), full text provided by Project Gutenberg\n[…]\nOs Lusíadas From the Collections at the Library of Congress"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Charles Dickens",
      "descricao": "Romancista inglês da era vitoriana, autor de Oliver Twist e David Copperfield."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de virarem livro, romances de Charles Dickens como Oliver Twist chegavam ao público de que forma?",
    "resposta": "Em capítulos periódicos, como folhetim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Dickens",
      "https://en.wikipedia.org/wiki/Oliver_Twist"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Dickens",
        "situacao": "ok",
        "texto": "Charles John Huffam Dickens ( ; 7 February 1812 – 9 June 1870) was an English writer and journalist. He created some of literature's best-known fictional characters, and is regarded by many as the greatest novelist of the Victorian era. His works enjoyed unprecedented popularity during his lifetime and, by the 20th century, critics and scholars had recognised him as a literary genius. His novels a\n[…]\nHis journalism, in the form of sketches in periodicals, formed his first collection of pieces, published in 1836: Sketches by Boz—Boz being a family nickname he employed as a pseudonym for some years. Dickens apparently adopted it from the nickname 'Moses', which he had given to his youngest brother Augustus Dickens, after a character in Oliver Goldsmith's The Vicar of Wakefield. When pronounced by anyone with a head cold, \"Moses\" became \"Boses\"—later shortened to Boz.\n[…]\nIn the midst of all his activity during this period, there was discontent with his publishers and John Macrone was bought off, while Richard Bentley signed over all his rights in Oliver Twist. Other signs of a certain restlessness and discontent emerged; in Broadstairs he flirted with Eleanor Picken, the young fiancée of his solicitor's best friend and one night grabbed her and ran with her down to the sea. He declared they were both to drown there in the \"sad sea waves\".\n[…]\nDuring this period, whilst pondering a project to give public readings for his own profit, Dickens was approached through a charitable appeal by Great Ormond Street Hospital to help it survive its first major financial crisis. His \"Drooping Buds\" essay in Household Words earlier on 3 April 1852 was considered by the hospital's founders to have been the catalyst for the hospital's success.\n[…]\nWorks by Charles Dickens at LibriVox (public domain audiobooks)\n[…]\nCharles Dickens on the Archives Hub\n[…]\nCharles Dickens at IMDb\n[…]\nCharles Dickens at LibraryThing"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Oliver_Twist",
        "situacao": "ok",
        "texto": "Oliver Twist; or, The Parish Boy's Progress, is the second novel by English author Charles Dickens. It was originally published as a serial from 1837 to 1839 and as a three-volume book in 1838. The story follows orphan Oliver Twist, who, after being raised in a workhouse, escapes to London, where he meets a gang of juvenile pickpockets led by the elderly criminal Fagin, discovers the secrets of hi\n[…]\nDickens has been accused of portraying antisemitic stereotypes because of his portrayal of the Jewish character Fagin in Oliver Twist. Paul Vallely writes that Fagin is widely seen as one of the most grotesque Jews in English literature, and one of the most vivid of Dickens's 989 characters.\n[…]\nWhile Dickens first reacted defensively upon receiving Davis's letter, he then halted the printing of Oliver Twist, and changed the text for the parts of the book that had not been set, which explains why after the first 38 chapters Fagin is barely called \"the Jew\" at all in the next 179 references to him. A shift in his perspective is seen in his later novel Our Mutual Friend, as he redeems the image of Jews.\n[…]\nOliver Twist (1909), the first adaptation of Dickens's novel, a silent film starring Edith Storey and Elita Proctor Otis.\n[…]\nIn 1838 Charles Zachary Barnett's adaptation, the three-act burletta Oliver Twist; or, The Parish Boy's Progress opened at the Marylebone Theatre in London.\n[…]\nCharles Dickens bibliography\n[…]\nOliver Twist at Project Gutenberg\n[…]\nOliver Twist public domain audiobook at LibriVox\n[…]\nOliver Twist, or, The Parish Boy's Progress Typeset PDF version, including the illustrations of James Mahoney (1871 Household Edition by Chapman & Hall).\n[…]\nWhen Is a Book Not a Book? Oliver Twist in Context, a seminar by Robert Patten from the New York Public Library\n[…]\nBackground information and plot summary for Oliver Twist, with links to other resources\n[…]\nArticle in British Medical Journal on Oliver Twist's diet"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Dickens",
        "situacao": "ok",
        "texto": "Charles John Huffam Dickens (Portsmouth, 7 de fevereiro de 1812 – Higham, 9 de junho de 1870) foi o mais popular dos romancistas ingleses da era vitoriana. No início de sua atividade literária também adotou o apelido Boz. As suas obras gozaram de uma popularidade sem precedentes ainda durante a sua vida e, durante o século XX, críticos e académicos reconheceram-no como um génio literário. Os seus \n[…]\nEm 1838, em decorrência do sucesso de Pickwick, propõe a publicação de Oliver Twist onde, pela primeira vez, apontava para os males sociais da era vitoriana. O romance, divulgado em folhetins semanais, terá também o seu ilustrador: Cruikshank.\n[…]\nEm 1849 publicou aquele que viria a ser o mais popular dos seus romances, David Copperfield, onde se inspirava, em grande parte, na sua própria vida. As amizades literárias de Dickens incluíam, em 1854, Thomas Carlyle, a quem dedicará o seu romance \"Tempos Difíceis\".\n[…]\nA revista semanal Household Words, onde viria a publicar, em folhetins, alguns dos seus romances, foi fundada também por ele, em 1850, e chegou a vender 40 mil cópias por semana. A revista seria reformulada em 1859, mudando de nome para \"All the year round\".\n[…]\nA publicação dos seus textos em periódicos permitia-lhe auscultar as reações do público à sua escrita, de forma que podia mudar o rumo à narrativa, de acordo com o que o público esperava ou não. Um bom exemplo encontra-se em Martin Chuzzlewit, onde foram incluídos episódios passados na América, em resposta ao decréscimo nas vendas dos primeiros capítulos.\n[…]\nSe é assim, de facto, a verdade é que Dickens procurava, acima de tudo, o entretenimento e não o realismo. Pretendia, de certa forma, recuperar o espírito do romance gótico e das novelas picarescas que lia na sua juventude. Efetivamente, quando escrevia um romance mais realista, a recepção do público mostrava-se bastante mais fria e indiferente.\n[…]\nOliver Twist (1837)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Joseph Conrad",
      "descricao": "Escritor de origem polonesa (1857–1924), autor de Coração das Trevas e Lord Jim."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Joseph Conrad, nascido numa família polonesa e autor de Coração das Trevas, escreveu toda a obra em que língua, aprendida já adulto?",
    "resposta": "Inglês",
    "distratores": [
      "Polonês",
      "Francês",
      "Russo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Joseph_Conrad",
      "https://pt.wikipedia.org/wiki/Joseph_Conrad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joseph_Conrad",
        "situacao": "ok",
        "texto": "Joseph Conrad (born Józef Teodor Konrad Korzeniowski, Polish: [ˈjuzɛf tɛˈɔdɔr ˈkɔnrat kɔʐɛˈɲɔfskʲi] ; 3 December 1857 – 3 August 1924) was a Polish-British novelist and story writer. He is regarded as one of the greatest writers in the English language and – though he did not speak English fluently until his twenties (always with a strong foreign accent) – he became a master prose stylist who brou\n[…]\nHe was christened Józef Teodor Konrad Korzeniowski after his maternal grandfather Józef, his paternal grandfather Teodor, and the heroes (both named \"Konrad\") of two poems by Adam Mickiewicz, Dziady and Konrad Wallenrod. His family called him \"Konrad\", rather than \"Józef\".\n[…]\nPoland had been divided among Prussia, Austria and Russia in 1795. The Korzeniowski family had played a significant role in Polish attempts to regain independence. Conrad's paternal grandfather Teodor had served under Prince Józef Poniatowski during Napoleon's Russian campaign and had formed his own cavalry squadron during the November 1830 Uprising of Poland-Lithuania against the Russian Empire.\n[…]\nConrad's poet father, Apollo Korzeniowski, was a Polish nationalist and an opponent of serfdom... [The] boy [Konrad] grew up among exiled prison veterans, talk of serfdom, and the news of relatives killed in uprisings [and he] was ready to distrust imperial conquerors who claimed they had the right to rule other peoples.\n[…]\nA plaque commemorating \"Joseph Conrad–Korzeniowski\" has been installed near Singapore's Fullerton Hotel.\n[…]\nNajder, Zdzisław (1969). \"Korzeniowski, Józef Teodor Konrad\". Polski Słownik Biograficzny. Vol. XIV. Wrocław: Zakład Narodowy Imienia Ossolińskich. pp. 173–176.\n[…]\nBiography of Joseph Conrad, at The Literature Network\n[…]\n\"Archival material relating to Joseph Conrad\". UK National Archives.\n[…]\nJoseph Conrad at IMDb\n[…]\nNewspaper clippings about Joseph Conrad in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joseph_Conrad",
        "situacao": "ok",
        "texto": "Joseph Conrad, nascido Józef Teodor Nałęcz Korzeniowski (Berdyczew, 3 de dezembro de 1857 – Bishopbourne, 3 de agosto de 1924) foi um escritor britânico de origem polonesa. Muitas das obras de Conrad centram-se em marinheiros e no mar.\n[…]\nNascido Józef Teodor Konrad Korzeniowski em 3 de dezembro de 1857, em Berdychiv, na Ucrânia (então parte do Império Russo), foi filho único de Apollo Korzeniowski, um escritor, tradutor, ativista político e revolucionário aspirante, e Ewa Bobrowska. Ele foi batizado com os nomes Józef, em homenagem ao avô materno, Teodor, ao avô paterno, e Konrad, em referência aos heróis dos poemas \"Dziady\" e \"Konrad Wallenrod\" de Adam Mickiewicz. Sua família o chamava de \"Konrad\".\n[…]\nApolo fez o possível para educar Conrad em casa, apresentando-o à literatura polonesa, à poesia romântica e à literatura inglesa. Em 1866, Conrad foi enviado para um retiro de saúde em Kiev e, em dezembro de 1867, Apolo levou Conrad para a parte da Polônia controlada pela Áustria, onde desfrutaram de alguma liberdade. Eles se mudaram para Cracóvia em fevereiro de 1869, onde Apolo morreu poucos meses depois, deixando Conrad órfão aos onze anos.\n[…]\nEm 1894, aos 36 anos, Conrad abandonou a vida no mar devido a problemas de saúde e à falta de disponibilidade de navios. Ele decidiu seguir uma carreira literária e publicou seu primeiro romance, \"Almayer's Folly\", em 1895, usando o pseudônimo \"Joseph Conrad\". \"Konrad\" era um de seus nomes poloneses, e sua escolha do pseudônimo também pode ter sido uma homenagem ao poema patriótico \"Konrad Wallenrod\" de Adam Mickiewicz.\n[…]\nNo coração das trevas, trad. José Roberto O'Shea\n[…]\nConrad, le Voyageur de l'inquiétude, Olivier Weber, 2011, (Arthaud-Flammarion)."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Anna Kariênina",
      "descricao": "Romance de Liev Tolstói, publicado na década de 1870, sobre uma aristocrata russa que se envolve com um oficial."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que romance de Tolstói começa dizendo que todas as famílias felizes se parecem, e cada família infeliz é infeliz à sua maneira?",
    "resposta": "Anna Kariênina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Anna_Karenina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anna_Karenina",
        "situacao": "ok",
        "texto": "Anna Karenina (Russian: Анна Каренина, IPA: [ˈanːə kɐˈrʲenʲɪnə]) is a novel, first published in book form in 1878, by the Russian author Leo Tolstoy. Often considered to be among the greatest works of world literature, Tolstoy himself called it his first true novel. It was initially released in serial installments from 1875 to 1877, all but the last part appearing in the periodical The Russian Mes\n[…]\nReviewing the translations by Bartlett and Schwartz for The New York Times Book Review, Masha Gessen noted that each new translation of Anna Karenina ended up highlighting an aspect of Tolstoy's \"variable voice\" in the novel, and thus, \"The Tolstoy of Garnett... is a monocled British gentleman who is simply incapable of taking his characters as seriously as they take themselves. Pevear and Volokhonsky... created a reasonable, calm storyteller who communicated in conversational American English.\n[…]\nBrowning, Gary L. A \"labyrinth of linkages\" in Tolstoy's\" Anna Karenina (Academic Studies Press, 2010). excerpt\n[…]\nHolbrook, David. Tolstoy, woman, and death: a study of War and peace and Anna Karenina (Fairleigh Dickinson Univ Press, 1997) online.\n[…]\nKeles, Fadim Büşra, et al. \"A Psychological Perspective on Infidelity in the Context of a Literary Work: Anna Karenina-Lev Tolstoy.\" Research on Education and Psychology 6.2 (2022): 254–267. online\n[…]\nMandelker, Amy, Framing 'Anna Karenina': Tolstoy, the Woman Question, and the Victorian Novel (Ohio State University Press, 1993)\n[…]\nMorson, Gary. \"Marriage, love, and time in Tolstoy's Anna Karenina.\" Journal of Family Theory & Review 2.4 (2010): 353–369.\n[…]\nShpylova-Saeed, Nataliya. \"Understanding Self and Others: Marriage Scenarios in Ford Madox Ford's The Good Soldier and Leo Tolstoy’s Anna Karenina.\" Crossroads. A Journal of English Studies 2 (13) (2016): 54–64. online\n[…]\nAnna Karenina public domain audiobook at LibriVox\n[…]\nAnna Karenina at the Internet Book List"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anna_Karenina",
        "situacao": "ok",
        "texto": "Anna Karenina (Анна Каренина), ou Ana Karênina, em algumas traduções (Anna Karénina, na transliteração direta para o alfabeto latino), ou Anna Kariênina, conforme a edição mais recente em língua portuguesa (publicada no Brasil pela editora Cosac & Naify, em 2010), é um romance do escritor russo Liev Tolstói.\n[…]\nÉ uma das obras mais destacadas do realismo literário. Para Tolstói, foi o seu primeiro verdadeiro romance, e considera sua obra Guerra e Paz como mais que um romance. O escritor Fiódor Dostoiévski considera o Anna Karenina como \"impecável como obra de arte\", opinião compartilhada também por Vladimir Nabokov que a considera como \"a impecável mágica do estilo de Tolstói\" e por William Faulkner que considera o romance como \"o melhor já escrito\".\n[…]\nAnna começa a sentir ciúmes cada vez mais intensos de Vronsky, e não consegue sequer aguentar ficar longe dele por curtos momentos. Quando Vronsky viaja por alguns dias para as eleições provinciais, Anna se convence que ela deve se casar com ele pra impedir ele de abandoná-la. Depois de Anna escrever uma carta para Karenin, ela e Vronsky viajam pra Moscou.\n[…]\n\"Anna Karenina\" retrata comumente os temas de hipocrisia, inveja, fé, fidelidade, família, casamento, sociedade, progresso, desejo carnal, paixão, e o contraste da vida no campo e a vida na cidade. A tradutora Rosemary Edmonds diz que Tolstói não moraliza explicitamente no texto, mas o deixa fluir naturalmente desde \"o panorama russo de viver\" e também afirma que a mensagem chave do livro é \"ninguém pode construir sua felicidade sobre a dor de outro\".\n[…]\nAnna Karenina (1948), com Vivien Leigh e Ralph Richardson\n[…]\nAnna Karenina (1997), com Sophie Marceau e Sean Bean\n[…]\nAnna Karenina (2012), com Keira Knightley e Jude Law\n[…]\nAnna Karenina (2013) com Vittoria Puccini, Santiago Cabrera e Benjamin Sadler",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "O Conde de Monte Cristo",
      "descricao": "Romance de aventura de Alexandre Dumas, de 1844, sobre a vingança do marinheiro Edmond Dantès."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em que romance de Alexandre Dumas um marinheiro preso injustamente no Castelo de If foge e volta rico para se vingar?",
    "resposta": "O Conde de Monte Cristo",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Count_of_Monte_Cristo",
      "https://pt.wikipedia.org/wiki/O_Conde_de_Monte_Cristo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Count_of_Monte_Cristo",
        "situacao": "ok",
        "texto": "The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by the French writer Alexandre Dumas. It was serialised from 1844 to 1846, then published in book form in 1846. It is one of his most popular works, along with The Three Musketeers (1844) and Man in the Iron Mask (1850). Like many of his novels, it was expanded from plot outlines suggested by his collaborating ghost\n[…]\n1942: The Count of Monte Cristo (Spanish: El Conde de Montecristo), a Mexican film version, directed by Chano Urueta and starring Arturo de Córdova\n[…]\n1953: The Count of Monte Cristo (Spanish: El Conde de Montecristo), directed by León Klimovsky and starring Jorge Mistral\n[…]\n1884: Edmond Dantès: The Sequel to Alexander Dumas' Celebrated Novel The Count of Monte Cristo, Edmund Flagg (1815–1890). Published in English by T.B. Peterson and Brothers in 1886 (no translator credited).\n[…]\n1884: Monte-Cristo's Daughter: Sequel to Alexander Dumas' Great Novel, \"The Count of Monte-Cristo,\" and Conclusion of \"Edmond Dantès\", Edmund Flagg. Published in English by T.B. Peterson and Brothers in 1886 (no translator credited).\n[…]\nAlexandre Dumas and Auguste Maquet wrote a set of four plays that collectively told the story of The Count of Monte Cristo: Monte Cristo Part I (1848); Monte Cristo Part II (1848); Le Comte de Morcerf (1851) and Villefort (1851). The first two plays were first performed at Dumas' own Théâtre Historique in February 1848, with the performance spread over two nights, each with a long duration (the first evening ran from 6 pm until midnight).\n[…]\nSalien, Jean-Marie (2000). \"La subversion de l'orientalisme dans Le comte de Monte-Cristo d'Alexandre Dumas\" (PDF). Études françaises (in French). 36 (1): 179–190. doi:10.7202/036178ar.\n[…]\nThe Count of Monte Cristo on Shmoop.com\n[…]\nCaleb Foster's review of The Count of Monte Cristo by Alexandre Dumas\n[…]\nThe Count of Monte Cristo at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Conde_de_Monte_Cristo",
        "situacao": "ok",
        "texto": "O Conde de Monte Cristo (do francês: Le Comte de Monte-Cristo) é um romance de aventura francês escrito por Alexandre Dumas (pai), em colaboração com Auguste Maquet, concluído em 1844. Inicialmente publicado como folhetim de 1844 a 1846. Vagamente baseada na vida de Pierre Picaud, a obra conta a história do promissor marinheiro Edmond Dantès, preso injustamente por um crime que não cometeu.\n[…]\nNa prisão, ele faz amizade com um culto abade, que lhe indica o caminho para uma imensa e antiga fortuna, que Edmond utiliza para, disfarçado como o conde de Monte Cristo, se vingar daqueles que o traíram.\n[…]\nConde de Monte Cristo: evadido, ele descobre na ilha de Montecristo o tesouro do Abade Faria. Agora poderoso porque rico e instruído, ele dá a si próprio esse título para entrar na alta sociedade, o Conde de Monte Cristo é também evocado com o nome de Senhor Zaccone;\n[…]\nPierre Morrel: honesto e virtuoso armador de navios comerciais e empregador de Dantès no \"Faraó\", proprietário da sociedade Morrel & Filho. Ele é o único que ajudou Louis Dantès, pai de Edmond Dantès quando esse estava prisioneiro no Castelo de If. O Conde de Monte Cristo salvará o armador Morrel do suicídio em devolvendo-lhe (sob a aparência de Lorde Wilmore e com a \"ajuda\" de Simbad o Marujo) uma bolsa em couro que Morrel tinha dado com dinheiro ao pai Dantès para lhe evitar a miséria.\n[…]\n1918: O Conde de Monte Cristo dirigido por Henri Pouctal\n[…]\n1954: O Conde de Monte Cristo, dirigido por Robert Vernay, com Jean Marais, Lia Amanda, Roger Pigaut, Jacques Castelot, Paolo Stoppa, Jean-Pierre Mocky\n[…]\n2024ː O Conde de Monte Cristo, escrito e dirigido por Alexandre de La Patellière e Matthieu Delaporte, estrelado por Pierre Niney\n[…]\nFlor do Caribe - novela brasileira da TV Globo, possui traços da história de O Conde de Monte Cristo.\n[…]\nO Outro Lado do Paraíso - Novela das 9 da Rede Globo é inspirada em O Conde de Monte Cristo."
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
