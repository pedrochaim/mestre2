Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Filosofia** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Sócrates",
      "descricao": "Filósofo grego de Atenas (c. 470–399 a.C.), mestre de Platão."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Sócrates, Platão e Aristóteles formam a trinca mais famosa da filosofia grega. Qual dos três só é conhecido pelo que outros escreveram sobre ele?",
    "resposta": "Sócrates",
    "fonte": [
      "https://pt.wikipedia.org/wiki/S%C3%B3crates",
      "https://en.wikipedia.org/wiki/Socratic_problem"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%B3crates",
        "situacao": "ok",
        "texto": "Sócrates (em grego:  Σωκράτης, AFI: [sɔːkrátɛːs], transl. Sōkrátēs; Alópece, c. 470 a.C. – Atenas, 399 a.C.) foi um filósofo ateniense do período clássico da Grécia Antiga. Creditado como um dos fundadores da filosofia ocidental, é até hoje uma figura enigmática, conhecida principalmente através dos relatos em obras de escritores que viveram mais tarde, especialmente dois de seus alunos, Platão e \n[…]\nFoi o Sócrates de Platão que fez contribuições importantes e duradouras aos campos da epistemologia e da lógica, e a influência de suas ideias e de seu método continuam a ser importantes alicerces para boa parte dos filósofos ocidentais que se seguiram a ele.\n[…]\nDetalhes sobre a vida de Sócrates derivam de três fontes contemporâneas: os diálogos de Platão, as peças de Aristófanes e os diálogos de Xenofonte. Não há evidência de que Sócrates tenha ele mesmo publicado alguma obra. Alguns autores defendem que ele não deixou nada escrito pois, além de na sua época a transmissão do saber ser feita, essencialmente, pela via oral, Sócrates assumia-se como alguém que sabe que nada sabe.\n[…]\nAs crenças de Sócrates, em comparação às de Platão, são difíceis de discernir. Há poucas diferenças entre as duas ideias filosóficas. Consequentemente, diferenciar as crenças filosóficas de Sócrates, Platão e Xenofonte é uma tarefa difícil e deve-se sempre lembrar que o que é atribuído a Sócrates pode refletir o pensamento dos outros autores.\n[…]\nDiz-se que Sócrates acreditava que as ideias pertenciam a um mundo que somente os sábios conseguiam entender, fazendo com que o filósofo se tornasse o perfeito governante para um Estado. Opunha-se à democracia aristocrática que era praticada em Atenas durante sua época; essa mesma ideia surge nas Leis de Platão, seu discípulo. Sócrates acreditava que, ao se relacionar com os membros de um parlamento, a própria pessoa estaria fazendo-se hipócrita.\n[…]\nDiálogo socrático"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Socratic_problem",
        "situacao": "ok",
        "texto": "In historical scholarship, the Socratic problem (also called Socratic question) concerns attempts at reconstructing a historical and philosophical image of Socrates based on the variable, and sometimes contradictory, nature of the existing sources on his life. Scholars rely upon extant sources, such as those of contemporaries like Aristophanes or disciples of Socrates like Plato and Xenophon, for \n[…]\nAristotle states that Socrates did not defend the idea of forms existing separately, which is a view attributed to Plato. For Socrates, the focus was on finding the correct definition of each concept and showing people their own ignorance.\n[…]\nAristotle's assessment presents Socrates as a bridging figure in the development of philosophical methodology. Socrates’ method aimed not at directly transmitting knowledge but at encouraging learning through questioning and discussion.\n[…]\nIn summary, Aristotle interprets Socrates through his definitions and dialogue method, distinguishing him from Plato and viewing him as an early representative of philosophical methodology. These views are not directly from Socrates himself but are based on information transmitted through Plato and other sources.\n[…]\nAristophanes (c. 450–386 BCE) was alive during the early years of Socrates. One source shows Plato and Xenophon were about 45 years younger than Socrates and states that when Aristophanes wrote Clouds in 423 BC, both Plato and Xenophon were infants. other sources show Plato as something in the range of 42–43 years younger, while  Xenophon is thought to be 40 years younger.\n[…]\nSocrates is the individual whose qualities exhibited in Plato's writings are corroborated by Aristophanes and Xenophon.\n[…]\nSocrates is the [individual named] Socrates who appears in Plato's earliest dialogues.\n[…]\nThe real Socrates is the one who turns from a pre-Socratic interest in nature to ethics, instead."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Henri Bergson",
      "descricao": "Filósofo francês (1859–1941), autor de A Evolução Criadora, Nobel de Literatura de 1927."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Estes quatro pensadores foram escolhidos para o Nobel de Literatura. Qual deles foi premiado primeiro?",
    "resposta": "Henri Bergson",
    "distratores": [
      "Bertrand Russell",
      "Albert Camus",
      "Jean-Paul Sartre"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Henri_Bergson",
      "https://en.wikipedia.org/wiki/List_of_Nobel_laureates_in_Literature"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Henri_Bergson",
        "situacao": "ok",
        "texto": "Henri-Louis Bergson (; French: [bɛʁksɔn]; 18 October 1859 – 4 January 1941) was a French philosopher who was influential in the traditions of analytic philosophy and continental philosophy, especially during the first half of the 20th century until the Second World War, but also after 1966 when Gilles Deleuze published Le Bergsonisme.\n[…]\nBergson settled again in Paris in 1888, and after teaching for some months at the municipal college, known as the College Rollin, he received an appointment at the Lycée Henri-Quatre, where he remained for eight years. There, he read Darwin and gave a course on his theories.\n[…]\nWilliam James hailed Bergson as an ally. In 1903, he wrote:\n[…]\nAlfaro Altamirano, Adriana (2021). The Belief in Intuition: Individuality and Authority in Henri Bergson and Max Scheler. Philadelphia: University of Pennsylvania Press. ISBN 9780812297911.\n[…]\nHerring, Emily (2024). Herald of a Restless World: How Henri Bergson Brought Philosophy to the People. John Murray Press. ISBN 978-1-5293-7194-9.\n[…]\nGuerlac, Suzanne (2006). Thinking in Time: An Introduction to Henri Bergson. Cornell University Press. ISBN 978-0-8014-7300-5.\n[…]\nHenri Bergson, The Internet Encyclopedia of Philosophy\n[…]\nHenri Bergson's theory of laughter. A brief summary.\n[…]\nGontarski, Stanley E.: Bergson, Henri, in: 1914-1918-online. International Encyclopedia of the First World War.\n[…]\nNewspaper clippings about Henri Bergson in the 20th Century Press Archives of the ZBW\n[…]\nHenri Bergson, Nobel Luminaries - Jewish Nobel Prize Winners, on the Beit Hatfutsot-The Museum of the Jewish People Website.\n[…]\nHenri Bergson on Nobelprize.org\n[…]\nWorks by Henri Bergson at Project Gutenberg\n[…]\nWorks by or about Henri Bergson at the Internet Archive\n[…]\nWorks by Henri Bergson at LibriVox (public domain audiobooks)\n[…]\nWorks by Henri Bergson at Open Library\n[…]\nWorks by Henri Bergson in French at \"La Philosophie\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Nobel_laureates_in_Literature",
        "situacao": "ok",
        "texto": "The Nobel Prize in Literature (Swedish: Nobelpriset i litteratur) is awarded annually by the Swedish Academy to authors for outstanding contributions in the field of literature. It is one of the five Nobel Prizes established by the 1895 will of Alfred Nobel, which are awarded for outstanding contributions in chemistry, physics, literature, peace, and physiology or medicine. As dictated by Nobel's \n[…]\nEach recipient receives a medal, a diploma and a monetary award prize that has varied throughout the years. In 1901, the first laureate Sully Prudhomme received 150,782 SEK, which is equivalent to 8,823,637.78 SEK in January 2018. The award is presented in Stockholm at an annual ceremony on December 10, the anniversary of Nobel's death.\n[…]\nAs of 2025, the Nobel Prize in Literature has been awarded to 122 individuals. 18 women have been awarded the Nobel Prize in Literature, the second highest number of any of the Nobel Prizes behind the Nobel Peace Prize. As of 2024, there have been 29 English-speaking laureates of the Nobel Prize in Literature, followed by French with 16 laureates and German with 14 laureates. France has the highest number of Nobel laureates.\n[…]\nThe 122 Nobel laureates in literature from 1901 to 2025 came from the following countries:\n[…]\nThe 122 Nobel laureates in literature from 1901 to 2025 wrote in the following languages:\n[…]\nThe 122 Nobel laureates in literature from 1901 to 2025 were from the following genders:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Henri_Bergson",
        "situacao": "ok",
        "texto": "Henri Bergson (Paris, 18 de outubro de 1859 — Paris, 4 de janeiro de 1941) foi um filósofo e diplomata francês, laureado com o Nobel de Literatura de 1927.\n[…]\nHenri Bergson nasceu de família judia, filho de mãe inglesa e pai polaco. Viveu com os seus pais alguns anos em Londres, mas aos nove anos regressou a Paris. Ali fez os seus estudos no Liceu Fontanes onde ganha em primeiro lugar o prêmio de matemática no Concours Général resolvendo um problema de Pascal. Licenciando-se em Advocacia, em 1860 tornou-se professor, dando aulas em várias localidades da França, destacam-se desse momento as aulas no liceu Blaise Pascal de Clermont-Ferrand.\n[…]\nA ocupação da cadeira de filosofia no Collège de France após morte de Bergson foi feita por Édouard Le Roy e depois por Louis Lavelle que fundou com René Le Senne a coleção Philosophie de l'esprit em 1934.\n[…]\nBergson foi, também, um dos primeiros a fazer referência ao inconsciente.\n[…]\nHenri Bergson (1931) de Vladimir Jankélévitch (1903-1985)\n[…]\nPresença e Campo Transcendental: Consciência e Negatividade da Filosofia de Henri Bergson (1965) de Bento Prado Júnior, publicado somente em 1988\n[…]\nBergson, Henri. Correspondências, obras e outros escristos, São Paulo, Abril Cultural, 1974\n[…]\nDeleuze, Gilles. Le Bergsonisme, Paris, Puf, 2004\n[…]\nJankélévitch, Vladimir. Henri Bergson, Paris, Puf, 2008\n[…]\nVieillard-Baron, Jean-Louis. Bergson et le bergsonisme, Paris, Armand Colin, 1999\n[…]\nSilva, Franklin Leopoldo. Bergson : Intuição e Discurso Filosófico, São Paulo, Edições Loyola, 1994\n[…]\n«Artigo: \"Ocultação, desocultação, e invenção em Bergson\", por Felipe Peres»\n[…]\n«Henri  Bergson\" por J. M. Bochenski»\n[…]\n«Site de la Société des amis de Bergson»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Bertrand Russell",
      "descricao": "Filósofo, lógico e matemático britânico (1872–1970), Nobel de Literatura de 1950."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes quatro filósofos, quem chegou à idade mais avançada?",
    "resposta": "Bertrand Russell",
    "distratores": [
      "Thomas Hobbes",
      "Voltaire",
      "Immanuel Kant"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bertrand_Russell",
      "https://en.wikipedia.org/wiki/Thomas_Hobbes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bertrand_Russell",
        "situacao": "ok",
        "texto": "Bertrand Arthur William Russell, 3rd Earl Russell (18 May 1872 – 2 February 1970), was an English mathematician and philosopher. A founder of analytic philosophy, he was a leading philosopher of the 20th century who produced pioneering work in logic, set theory, and philosophy of language. Russell popularised philosophy to the general public and was a controversial figure for his outspoken atheism\n[…]\nBertrand Arthur William Russell was born at Ravenscroft, a country house in Trellech, Monmouthshire, on 18 May 1872, into an influential and liberal family of the British aristocracy. His parents were Viscount and Viscountess Amberley. Both were early advocates of birth control at a time when this was considered scandalous. Lord Amberley consented to his wife's relationship with their children's tutor, the biologist Douglas Spalding.\n[…]\nPaul Arthur Schilpp, ed. The Philosophy of Bertrand Russell, Evanston and Chicago: Northwestern University, 1944.\n[…]\nPeter Stone et al. Bertrand Russell's Life and Legacy. Wilmington: Vernon Press, 2017.\n[…]\nKatharine Tait. My Father Bertrand Russell, New York: Thoemmes Press, 1975\n[…]\nAlan Wood, Bertrand Russell: The Passionate Sceptic, London: George Allen & Unwin, 1957.\n[…]\nWorks by Bertrand Russell in eBook form at Standard Ebooks\n[…]\nWorks by Bertrand Russell at Project Gutenberg\n[…]\nWorks by or about Bertrand Russell at the Internet Archive\n[…]\nWorks by Bertrand Russell at the Biodiversity Heritage Library\n[…]\nWorks by Bertrand Russell at LibriVox (public domain audiobooks)\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Bertrand Russell's Logic\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\nThe Bertrand Russell Society\n[…]\nBBC Face to Face interview with Bertrand Russell and John Freeman, broadcast 4 March 1959\n[…]\nBertrand Russell on Nobelprize.org  including the Nobel Lecture, 11 December 1950 \"What Desires Are Politically Important?\"\n[…]\nBertrand Russell at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Hobbes",
        "situacao": "ok",
        "texto": "Thomas Hobbes ( HOBZ; 5 April 1588 – 4 December 1679) was an English philosopher and political theorist, best known for his 1651 book Leviathan, in which he expounds an influential formulation of social contract theory. He is considered to be one of the founders of modern political philosophy.\n[…]\nIn 1629, Hobbes found work as a tutor to Gervase Clifton, the son of Sir Gervase Clifton, 1st Baronet, and continued in this role until November 1630. He spent most of this time in Paris. Thereafter, he again found work with the Cavendish family, tutoring William Cavendish, 3rd Earl of Devonshire, the eldest son of his previous pupil. Over the next seven years, as well as tutoring, he expanded his own knowledge of philosophy, awakening in him curiosity over key philosophical debates.\n[…]\nHobbes spent the last four or five years of his life with his patron, William Cavendish, 1st Duke of Devonshire, at the family's Chatsworth House estate. He had been a friend of the family since 1608 when he first tutored an earlier William Cavendish. After Hobbes's death, many of his manuscripts would be found at Chatsworth House.\n[…]\nWhen he returned to England in 1615, William Cavendish maintained correspondence with Micanzio and Sarpi, and Hobbes translated the latter's letters from Italian, which were circulated among the Duke's circle.\n[…]\n1650. Answer to Sir William Davenant's Preface before Gondibert.\n[…]\nEditions compiled by William Molesworth.\n[…]\nMontmorency, James E. G. de (1913). \"Thomas Hobbes\". In Macdonell, John; Manson, Edward William Donoghue (eds.). Great Jurists of the World. London: John Murray. pp. 195–219. Retrieved 12 March 2019 – via Internet Archive."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bertrand_Russell",
        "situacao": "ok",
        "texto": "Bertrand Arthur William Russell, 3.º Conde Russell OM FRS (Trelleck, País de Gales, 18 de maio de 1872 — Penrhyndeudraeth, País de Gales, 2 de fevereiro de 1970) foi um dos mais influentes matemáticos, filósofos, ensaístas, historiadores e lógicos do século XX. Em diversos momentos, considerou-se liberal, socialista e pacifista, embora tenha admitido que jamais pertenceu a essas correntes num sent\n[…]\nRussell teve um irmão, Francis (o seu sénior por mais de sete anos), e uma irmã, Rachel (quatro anos mais velha). Perdeu a mãe e a irmã em 1874, e o pai em 1876. Francis e Bertrand foram então colocados sob a custódia dos seus avós paternos vitorianos, que viviam em Pembroke Lodge, uma residência de função atribuída pela rainha Vitória e situada no Richmond Park.\n[…]\nBertrand Russell é um dos precursores do pensamento analítico. Ao lado de George Moore, participa na revolta britânica contra o idealismo britânico, filosofia desenvolvida nas suas linhas gerais por Georg Hegel e retomada pelo filósofo britânico Francis Bradley. Esta revolta assume outra forma 30 anos mais tarde em Viena, através do positivismo lógico e da \"revolta contra a metafísica\".\n[…]\nRonald William Clark (1978). The life of Bertrand Russell (em inglês). [S.l.]: Penguin Books. 979 páginas. ISBN 0-14-004475-2. OCLC 7545876\n[…]\nGeorg Kreisel (1973). «Bertrand Arthur William Russell, Earl Russell. 1872-1970». Biographical Memoirs of Fellows of the Royal Society (em inglês). 19. doi:10.1098/rsbm.1973.0021\n[…]\nRay Monk (setembro de 2004). «Russell, Bertrand Arthur William, third Earl Russell (1872–1970)». Oxford University Press. Oxford Dictionary of National Biography (em inglês). doi:10.1093/ref:odnb/35875\n[…]\nWilliam Demopoulos; Michael Friedman (1985). «Bertrand Russell's The Analysis of Matter: Its Historical Context and Contemporary Interest». Philosophy of Science (em inglês). 52 (4): 621–639. ISSN 0031-8248\n[…]\nBertrand Russell",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Blaise Pascal",
      "descricao": "Filósofo, matemático e físico francês (1623–1662), autor dos Pensamentos."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes pensadores franceses morreu mais jovem, antes de completar quarenta anos?",
    "resposta": "Blaise Pascal",
    "distratores": [
      "René Descartes",
      "Albert Camus",
      "Michel de Montaigne"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Blaise_Pascal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blaise_Pascal",
        "situacao": "ok",
        "texto": "Blaise Pascal (19 June 1623 – 19 August 1662) was a French mathematician, physicist, inventor, philosopher, and Catholic writer.\n[…]\nBlaise Pascal Chairs are given to outstanding international scientists to conduct their research in the Ile de France region.\n[…]\nOne of the Universities of Clermont-Ferrand, France—Université Blaise Pascal—is named after him. Établissement scolaire français Blaise-Pascal in Lubumbashi, Democratic Republic of the Congo, is named after Pascal.\n[…]\nIn 2023, Pope Francis released an apostolic letter, Sublimitas et miseria hominis, dedicated to Blaise Pascal, in commemoration of the fourth centenary of his birth.\n[…]\nPascal's simplex\n[…]\nWorks by Blaise Pascal at Project Gutenberg\n[…]\nWorks by or about Blaise Pascal at the Internet Archive\n[…]\nWorks by Blaise Pascal at LibriVox (public domain audiobooks)\n[…]\nThe Correspondence of Blaise Pascal in EMLO\n[…]\nSimpson, David. \"\"Blaise Pascal\"\". In Fieser, James; Dowden, Bradley (eds.). Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\nClarke, Desmond. \"Blaise Pascal\". In Zalta, Edward N. (ed.). Stanford Encyclopedia of Philosophy. ISSN 1095-5054. OCLC 429049174.\n[…]\nBlaise Pascal at the Mathematics Genealogy Project\n[…]\nPensées de Blaise Pascal. Renouard, Paris 1812 (2 vols.) (Digitized)\n[…]\nWorks by Blaise Pascal at Open Library\n[…]\nBlaise Pascal featured on the 500 French Franc banknote in 1977. Archived 16 April 2009 at the Wayback Machine\n[…]\nBlaise Pascal's works: text, concordances and frequency lists\n[…]\n\"Blaise Pascal\" . Catholic Encyclopedia. 1913.\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Blaise Pascal\", MacTutor History of Mathematics Archive, University of St Andrews"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Blaise_Pascal",
        "situacao": "ok",
        "texto": "Blaise Pascal (Clermont-Ferrand, 19 de junho de 1623 – Paris, 19 de agosto de 1662) foi um matemático, escritor, físico, inventor, filósofo e teólogo  francês. Prodígio, Pascal foi educado por seu pai. Os primeiros trabalhos de Pascal dizem respeito às ciências naturais e ciências aplicadas. Contribuiu significativamente para o estudo dos fluidos. Ele esclareceu os conceitos de pressão atmosférica\n[…]\nComo matemático, interessou-se pelo cálculo infinitesimal, pelas sequências, tendo enunciado o princípio da recorrência matemática. O cálculo diferencial e integral de Newton e Leibniz que seria a base da física clássica foi inspirado em um tratado publicado por Blaise Pascal sobre os senos num quadrante de um círculo onde buscou a integração da função seno, que também viria a ser a base da matemática moderna.\n[…]\nEm 1651 o seu pai morreu.\n[…]\nAs cadeiras Blaise Pascal são dadas a cientistas internacionais de destaque para conduzir suas pesquisas na região de Ile de France.\n[…]\nNa França, prestigiosos prêmios anuais, são dadas bolsas de investigação científica Blaise Pascal a proeminentes cientistas internacionais para realizar a sua investigação na região de Île de France. Uma das universidades de Clermont-Ferrand, França - Universidade Blaise Pascal - é nomeada em sua homenagem.\n[…]\nAposta de Pascal\n[…]\nPrincípio de Pascal\n[…]\n«Blaise Pascal: o homem e a ciência». . por Rogério Lacaz-Ruiz, Heloise Patrícia Quintino, Cíntia Kogeyama e Luiz Flávio Pansani.\n[…]\n«Blaise Pascal (1623 - 1662). Seminário temático da FCUL» 🔗\n[…]\n«Blaise Pascal: Mathematician, Physicist and Thinker about God» (em inglês). , por Donald Adamson (1995).\n[…]\n«\"Blaise Pascal\"» (em inglês). , por Desmond Clarke: The Stanford Encyclopedia of Philosophy (Fall 2012 Edition), Edward N. Zalta (ed.).\n[…]\nObras de Blaise Pascal na Open Library\n[…]\n«Divertimento pascaliano. Teoria pascaliana do divertimento. Ausência de si. Fuga psicológica.» (PDF)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "As Leis (Platão)",
      "descricao": "Último diálogo escrito por Platão, sobre legislação e a organização de uma cidade."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Escrito no fim da vida do autor, qual é o diálogo mais longo de Platão, maior até que A República?",
    "resposta": "As Leis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Laws_(dialogue)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Laws_(dialogue)",
        "situacao": "ok",
        "texto": "The Laws (Ancient Greek: Νόμοι) is Plato's last and longest dialogue. The conversation depicted in the work's twelve books begins with the question of who is given the credit for establishing a civilization's laws. Its musings on the ethics of government and law have frequently been compared to Plato's more widely read Republic. Some scholars see this as the work of Plato as an older man having fa\n[…]\nThe rest of the dialogue proceeds with the three old men, walking towards the cave and making laws for this new city which is called the city of Magnesia.\n[…]\nThe Laws, like the earlier Republic, concerns the making of a city in speech. Yet it is in opposition to the earlier dialogue, and the constitution of the hypothetical Magnesia described in the Laws differs from that of Kallipolis described in the Republic, on several key points.\n[…]\nAlso, whereas the Republic is a dialogue between Socrates and several young men, the Laws is a discussion among three old men contriving a device for reproductive law, with a view of hiding from virile youth their rhetorical strategy of piety, rituals and virtue.\n[…]\nThe city of the Laws is described as \"second best\" not because the city of the Republic is the best, but because it is the city of gods and their children.\n[…]\nGeorgios Gemistos, who called himself Plethon in his later life, wrote and named his Nómōn syngraphḗ (Νόμων συγγραφή) or Nómoi (Νόμοι, \"Book of Laws\") after the Laws dialogue.\n[…]\n— (1845). Lewis, Taylor (ed.). Against the atheists, or the tenth book of the dialogue on laws. New York: Harper & Brothers. (Greek text only)\n[…]\n— (1961). Hamilton, E.; Cairns, H.; Cooper, L. (eds.). The Collected Dialogues of Plato. Bollingen Series (General). Princeton University Press. pp. 1225ff. ISBN 978-1-4008-3586-7. {{cite book}}: ISBN / Date incompatibility (help)\n[…]\nLaws, in a collection of Plato's Dialogues at Standard Ebooks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Leis_%28di%C3%A1logo%29",
        "situacao": "ok",
        "texto": "Leis (grego: Νόμοι, Nómoi; latim: De Legibus) é um diálogo platônico que ocupa-se com uma vasta gama de assuntos. A discussão das Leis, a fim de compreender a conduta do cidadão e da promulgação de leis, perpassa por elementos da psicologia, gnosiologia, ética, política, ontologia e mesmo astronomia e matemática. É o último diálogo de Platão e também o mais extenso.\n[…]\nAs Leis é um diálogo inacabado e não conta com a presença de Sócrates como personagem. O contraste com o diálogo A República é destacado pelos comentadores. Enquanto em A República a base do Estado é a educação perfeita, sendo praticamente supérflua a legislação, nas Leis a legislação é a base.\n[…]\nEm A República o governante-filósofo, por suas próprias virtudes, infunde legitimidade à legislação, ao passo que nas Leis o legislador se coloca entre os deuses e os homens, necessitando do consentimento dos governados, da comunidade, do povo, para legitimar a legislação. N'A República ocupavam o lugar central a teoria das ideias e a ideia do bem, já nas Leis a ideia do bem somente é mencionada ao final, como conteúdo educacional para o governante.\n[…]\nNas Leis Platão destaca o papel do legislador, que deve ser \"um verdadeiro educador dos cidadãos\" e sua missão principal não consiste em castigar transgressões cometidas, mas em prevenir que se cometam tais transgressões. Platão reconhece, portanto, que tanto em Atenas, como na maioria das cidades-estado gregas, não havia uma regulação legislativa dos problemas da educação pública (Leis, 788c).\n[…]\nO personagem principal do diálogo não tem nome, chama-se \"O Ateniense\" e seus interlocutores são \"Clínias de Creta\" e \"Megilo de Lacedemônia (Esparta)\".\n[…]\nO diálogo se inicia com a seguinte pergunta de um dos personagens:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Epicteto",
      "descricao": "Filósofo estoico grego (c. 50–135), nascido escravo em Hierápolis, cujos ensinamentos foram reunidos no Manual."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Um destes filósofos estoicos começou a vida como escravo. Qual?",
    "resposta": "Epicteto",
    "distratores": [
      "Sêneca",
      "Marco Aurélio",
      "Zenão de Cítio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Epictetus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Epictetus",
        "situacao": "ok",
        "texto": "Epictetus ( EH-pick-TEE-təss; Ancient Greek: Ἐπίκτητος, Epíktētos; c. 50 – c. 135 AD) was a Greek Stoic philosopher. He was born into slavery at Hierapolis, Phrygia (present-day Pamukkale, in western Turkey) and lived in Rome until his banishment, after which he spent the rest of his life in Nicopolis in northwestern Greece.\n[…]\nTheodore Scaltsas, Andrew S. Mason (ed.), The Philosophy of Epictetus. Oxford: Oxford University Press, 2007 ISBN 978-0199585519.\n[…]\nKeith Seddon, Epictetus' Handbook and the Tablet of Cebes: Guides to Stoic Living, Routledge, 2005.\n[…]\nWerner Sohn, Epictetus: Ein erzkonservativer Bildungsroman mit liberalen Eselsohren (German version) Norderstedt: BoD, 2010 ISBN 978-3839152317.\n[…]\nWilliam O. Stephens, Stoic Ethics: Epictetus and Happiness as Freedom, London: Continuum, 2007 ISBN 0826496083.\n[…]\nWorks by Epictetus in eBook form at Standard Ebooks\n[…]\nWorks by Epictetus at Project Gutenberg\n[…]\nWorks by or about Epictetus at the Internet Archive\n[…]\nWorks by Epictetus at LibriVox (public domain audiobooks)\n[…]\nWorks by Epictetus at the Internet Classics Archive\n[…]\nWorks by Epictetus; Archived 2021-02-28 at the Wayback Machine at the Stoic Therapy eLibrary\n[…]\nWho Was Epictetus?\n[…]\nGraver, Margaret. \"Epictetus\". In Zalta, Edward N. (ed.). Stanford Encyclopedia of Philosophy. ISSN 1095-5054. OCLC 429049174.\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Epictetus\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\n\"Dialogue Between Hadrian and Epictetus\" – a fictitious 2nd or 3rd century composition, translated into English in The Knickerbocker magazine, August 1857\n[…]\nCommentary on the Enchiridion of Epictetus by Simplicius of Cilicia (6th century)\n[…]\nEpicteti dissertationes ab Arriano digestae, Heinrich Schenkl (ed.), Lipsiae, in aedibus B. G. Teubneri, 1916."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Epiteto",
        "situacao": "ok",
        "texto": "Epiteto ou Epicteto (em grego: Επίκτητος; romaniz.: Epíktetos; Hierápolis, 50 d.C. — Nicópolis, 138) foi um filósofo grego estoico que viveu a maior parte de sua vida em Roma, como escravo. Apesar de sua condição, conseguiu assistir às preleções do famoso estoico Caio Musônio Rufo.\n[…]\nEpicteto nasceu em 50 d.C. AD, em Hierápolis na Frígia; provavelmente filho de escravos, ele próprio era escravo e vendido em Roma a um funcionário de Nero: Epafrodito. Epafrodito autoriza Epicteto a assistir às conferências do estóico Musônio Rufo, grande figura do estoicismo. Pouco depois da morte de Nero em 68, Epicteto foi libertado sob condições que permanecem desconhecidas. Ele então se dedicou a praticar e ensinar filosofia estóica.\n[…]\nSegundo consta na Suda, ele viveu até o reinado de Marco Aurélio, mas de acordo com Aulo Gélio, Epicteto já estava morto quando Marco Aurélio chegou ao poder. Acredita-se que ele tenha ensinado Júnio Rústico, que mais tarde se tornou o professor de Marco Aurélio e o apresentou à filosofia estóica, notadamente por meio de Epicteto.\n[…]\nEpicteto faz parte da tradição estoica e seus desenvolvimentos durante o período imperial. Seu conhecido ensino privilegia a Ética e não traz nenhum traço de estudo da física, e coloca em segundo plano o estudo da lógica, tradicional na escola estoica. A ética se divide em ética teórica e ética prática, sendo a primeira subordinada à segunda; seu ensino se divide em três etapas: aprender as regras da vida, correspondentes à ética prática, é o primeiro e mais necessário passo.\n[…]\n«Dialogue between Hadrian and Epictetus» (em inglês). - Uma composição ficcional do século II ou século III. The Knickerbocker, agosto de 1857\n[…]\n«Commentário sobre o Enchirídion de Epicteto» (em inglês). por Simplício da Cilícia (século VI)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Heráclito",
      "descricao": "Filósofo pré-socrático de Éfeso (c. 535–475 a.C.), que via o fogo e a mudança constante como base do mundo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Cada pré-socrático apontava uma origem diferente para todas as coisas. Qual destes apostava no fogo?",
    "resposta": "Heráclito",
    "distratores": [
      "Tales de Mileto",
      "Anaxímenes",
      "Anaximandro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Heraclitus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Heraclitus",
        "situacao": "ok",
        "texto": "Heraclitus (; Ancient Greek: Ἡράκλειτος, romanized: Hērákleitos; fl. c. 500 BC) was a pre-Socratic Greek philosopher from the city of Ephesus, which was then part of the Persian Empire. He exerts a wide influence on Western philosophy, both ancient and modern, through the works of such authors as Plato, Aristotle, the Stoics, Georg Wilhelm Friedrich Hegel, Friedrich Nietzsche, and Martin Heidegger\n[…]\nHippolytus of Rome, one of the early Church Fathers of the Christian Church, identified Heraclitus along with the other pre-Socratics and Academics as a source of heresy, in Heraclitus's case namely the heresy of Noetus.\n[…]\nDiels published the first edition of the authoritative Die Fragmente der Vorsokratiker (The Fragments of the Pre-Socratics) in 1903, later revised and expanded three times, and finally revised in two subsequent editions by Walther Kranz. Diels–Kranz is used in academia to cite pre-Socratic philosophers. In Diels–Kranz, each ancient personality and each passage is assigned a number to uniquely identify it; Heraclitus is traditionally catalogued as pre-Socratic philosopher number 22.\n[…]\nThe continental existentialist and philologist Friedrich Nietzsche preferred Heraclitus above all the other pre-Socratics. Nietzsche saw the philosophers before Plato as \"pure types\" and Heraclitus as the proud, lonely truth-finder. The nationalist philosopher of history Oswald Spengler wrote his (failed) dissertation on Heraclitus.\n[…]\nThe Irish author and classicist Oscar Wilde was influenced by art critic Walter Pater, a friend of Bywater's whose \"pre-Socratic hero\" was Heraclitus. Harold Bloom noted that \"Pater praises Plato for Classic correctness, for a conservative centripetal impulse, against his [Pater's] own Heraclitean Romanticism.\"\n[…]\nWorks by or about Heraclitus at Wikisource\n[…]\nQuotations related to Heraclitus at Wikiquote\n[…]\nMedia related to Heraclitus at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Her%C3%A1clito",
        "situacao": "ok",
        "texto": "Heraclito (português europeu) ou Heráclito (português brasileiro) de Éfeso (Ἡράκλειτος ὁ Ἐφέσιος, Éfeso, aproximadamente 500 a.C. - 450 a.C.) foi um filósofo pré-socrático considerado o \"Pai da dialética\". Recebeu a alcunha de \"Obscuro\" principalmente em razão da obra a ele atribuída por Diógenes Laércio, Sobre a Natureza, em estilo obscuro, próximo ao das sentenças oraculares.\n[…]\nTudo é considerado como um grande fluxo perene no qual nada permanece a mesma coisa pois tudo se transforma e está em contínua mutação. Por isso, Heráclito identifica a forma do Ser no Devir pelo qual todas as coisas são sujeitas ao tempo e à sua relativa transformação.\n[…]\nA partir de seus pressupostos - panta rei e a guerra entre os contrários -, Heráclito definiu uma arché, um princípio que está em todas as coisas desde a sua origem: o fogo. Para ele, \"todas as coisas são uma troca do fogo, e o fogo, uma troca de todas as coisas, assim como o ouro é uma troca de todas as mercadorias e todas as mercadorias são uma troca do ouro\"; ou seja, todas as coisas transformam-se em fogo, e o fogo transforma-se em todas as coisas.\n[…]\nSegundo Heráclito, o fogo é, pois, o elemento primordial de todas as coisas. Tudo se origina por rarefação e tudo flui como um rio. O cosmos é um só e nasce do fogo e, de novo, é pelo fogo consumido, em períodos determinados, em ciclos que se repetem pela eternidade.\n[…]\nPara Heráclito,  o fogo, quando condensado, se umidifica e, com mais consistência, torna-se água; e esta, solidificando-se, transforma-se em terra; e, a partir daí, nascem todas as coisas do mundo. Este é o caminho que Heráclito define como sendo \"para baixo\".\n[…]\nNesse argumento, podemos ver que Heráclito considerava as diversas divindades da mitologia grega, que eram adoradas pelos homens de seu tempo, como sendo apenas fogo misturado a diferentes tipos de incensos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Crítica da Razão Pura",
      "descricao": "Obra de Immanuel Kant publicada em 1781, a primeira de suas três Críticas."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Kant escreveu três obras chamadas Críticas. Qual delas foi publicada primeiro?",
    "resposta": "Crítica da Razão Pura",
    "fonte": [
      "https://en.wikipedia.org/wiki/Critique_of_Pure_Reason",
      "https://en.wikipedia.org/wiki/Critique_of_Judgment"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Critique_of_Pure_Reason",
        "situacao": "ok",
        "texto": "Critique of Pure Reason (German: Kritik der reinen Vernunft; 1781; second edition 1787) is a book by the German philosopher Immanuel Kant, in which the author seeks to determine the limits and scope of metaphysics. Also referred to as Kant's \"First Critique\", it was followed by his Critique of Practical Reason (1788) and Critique of Judgment (1790).\n[…]\nKant reformulated his views because of it, redefining his transcendental idealism in the Prolegomena to Any Future Metaphysics (1783) and the second edition of the Critique of Pure Reason. The review was denounced by Kant, but defended by Kant's empiricist critics, and the resulting controversy drew attention to the Critique of Pure Reason.\n[…]\nFeder's campaign against Kant was unsuccessful and the Philosophische Bibliothek ceased publication after only a few issues. Other critics of Kant continued to argue against the Critique of Pure Reason, with Gottlob August Tittel, who was influenced by Locke, publishing several polemics against Kant, who, although worried by some of Tittel's criticisms, addressed him only in a footnote in the preface to the Critique of Practical Reason.\n[…]\nThe Wolffian critics argued that Kant's philosophy inevitably ends in skepticism and the impossibility of knowledge, defending the possibility of rational knowledge of the supersensible world as the only way of avoiding solipsism. They maintained that the criterion Kant proposed to distinguish between analytic and synthetic judgments had been known to Leibniz and was useless, since it was too vague to determine which judgments are analytic or synthetic in specific cases.\n[…]\nCritick of Pure Reason: Translated from the Original of Immanuel Kant. Translated by Francis Haywood. London: William Pickering. 1838. OCLC 457804778. First English translation.\n[…]\nArthur Schopenhauer's criticism of Immanuel Kant's schemata"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Critique_of_Judgment",
        "situacao": "ok",
        "texto": "The Critique of Judgment (German: Kritik der Urteilskraft), also translated as the Critique of the Power of Judgment, is a 1790 book by the German philosopher Immanuel Kant. Sometimes referred to as the \"third critique\", the Critique of Judgment follows the Critique of Pure Reason (1781) and the Critique of Practical Reason (1788).\n[…]\nImmanuel Kant's Critique of Judgment is the third critique in Kant's Critical project begun in the Critique of Pure Reason and the Critique of Practical Reason (the First and Second Critiques, respectively). The book is divided into two main sections: the Critique of Aesthetic Judgment and the Critique of Teleological Judgment, and also includes a large overview of the entirety of Kant's Critical system, arranged in its final form.\n[…]\nThe so-called First Introduction was not published during Kant's lifetime, for Kant wrote a replacement for publication.\n[…]\nThe Critical project, that of exploring the limits and conditions of knowledge, had already produced the Critique of Pure Reason, in which Kant argued for a Transcendental Aesthetic, an approach to the problems of perception in which space and time are argued not to be objects. The First Critique argues that space and time provide ways in which the observing subject's mind organizes and structures the sensory world.\n[…]\nImmanuel Kant, Critique of Judgment, Translated by J. H. Bernard, New York: Hafner Publishing, 1951. (Original publication date 1892)\n[…]\nImmanuel Kant, Critique of Judgement, Translated by James Creed Meredith, Oxford: Oxford University Press, 2007 (original publication date 1952), Oxford World's Classics. ISBN 978-0-19-280617-8. Among the reprints of this translation, in volume 42 of Great Books of the Western World\n[…]\nImmanuel Kant, Kritik der Urteilskraft, ed. by Heiner F. Klemme, Felix Meiner Verlag, 2006."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cr%C3%ADtica_da_Raz%C3%A3o_Pura",
        "situacao": "ok",
        "texto": "A Crítica da Razão Pura (em alemão, Kritik der reinen Vernunft) é a principal obra de teoria do conhecimento do filósofo Immanuel Kant, cuja primeira edição é de 1781, com alterações substanciais feitas pelo autor em determinadas seções para a segunda edição, publicada em 1787. A obra é considerada como um dos mais influentes trabalhos na história da filosofia, e dá início ao chamado idealismo ale\n[…]\nKant escreveu a CRP como a primeira de três \"Críticas\", seguida pela Crítica da Razão Prática (1788) e a Crítica do Juízo (1790).\n[…]\nNo prefácio à primeira edição Kant explicita o que ele quer dizer por crítica da razão pura: \"Eu entendo aqui, contudo, não uma crítica dos livros e sistemas, mas sim da faculdade da razão em geral, com vistas a todos os conhecimentos que ela pode tentar atingir independentemente de toda a experiência\" (A XII).\n[…]\nExistem, em língua portuguesa, as seguintes traduções de Crítica da Razão Pura:\n[…]\nKANT, Immanuel (1983). Crítica da razão pura. Col: Os pensadores. Tradução Valério Rohden e Udo Baldur Moosburger 2. ed. São Paulo: Abril Cultural. 421 páginas\n[…]\nKANT, Immanuel (2001). Crítica da razão pura (PDF). Col: Textos clássicos. Tradução de Manuela Pinto dos Santos e Alexandre Fradique Morujão 5. ed. Lisboa: Fundação Calouste Gulbenkian. 680 páginas. ISBN 978-972-31-0623-7. OCLC 817980161. OL 26376206M. Consultado em 19 de setembro de 2017. Arquivado do original (PDF) em 16 de maio de 2015\n[…]\nKANT, Immanuel (2013). Crítica da razão pura. Col: Pensamento humano. Tradução e notas de Fernando Costa Mattos 2. ed. Petrópolis: Vozes. 621 páginas. ISBN 978-85-326-4324-7. OCLC 889979846. OL 26379712M\n[…]\nGIL, Fernando (Coord.). Recepção da Crítica da Razão Pura: Antologia de escritos sobre Kant (1786-1844). Lisboa: Fundação *Calouste Gulbenkian, 1992.\n[…]\nPASCAL, Georges. O Pensamento de Kant. Vozes, 1977.\n[…]\nLivro em português para download - Domínio Publico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Claude Lévi-Strauss",
      "descricao": "Antropólogo e pensador francês (1908–2009), formado em filosofia, um dos criadores do estruturalismo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Nos anos 1930, um destes pensadores franceses deu aulas na recém-criada Universidade de São Paulo. Qual?",
    "resposta": "Claude Lévi-Strauss",
    "distratores": [
      "Jean-Paul Sartre",
      "Albert Camus",
      "Simone de Beauvoir"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Claude_L%C3%A9vi-Strauss"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Claude_L%C3%A9vi-Strauss",
        "situacao": "ok",
        "texto": "Claude Lévi-Strauss ( klawd LAY-vee STROWSS; French: [klod levi stʁos]; 28 November 1908 – 30 October 2009) was a Belgian-born French anthropologist and ethnologist whose work was key in the development of the theories of structuralism and structural anthropology. He held the chair of Social Anthropology at the Collège de France between 1959 and 1982, was elected a member of the Académie française\n[…]\nFrench President Nicolas Sarkozy described him as \"one of the greatest ethnologists of all time\". Bernard Kouchner, the French Foreign Minister, said Lévi-Strauss \"broke with an ethnocentric vision of history and humanity ... At a time when we are trying to give meaning to globalization, to build a fairer and more humane world, I would like Claude Lévi-Strauss's universal echo to resonate more strongly\".\n[…]\nDescola, Philippe. 2009. \"Claude Lévi-Strauss: a Career Spanning a Century.\" Pp. 36 in The Letter of the Collège de France 4.\n[…]\nHénaff, Marcel (1998), Claude Lévi-Strauss and the Making of Structural Anthropology, Originally published 1991 as Claude Lévi-Strauss, translated by Baker), Mary, Minneapolis, Minnesota: University of Minnesota Press, ISBN 0-8166-2760-6, retrieved 5 November 2010\n[…]\nPaz, Octavio (1970). Claude Levi-Strauss : an introduction. Translated by Bernstein, J.S.; Bernstein, Maxine. Ithaca: Cornell University Press. ISBN 0801405769.\n[…]\nShalvey, Thomas (1979). Claude Lévi-Strauss : social psychotherapy and the collective unconscious. Amherst: University of Massachusetts Press. ISBN 9780870232602.\n[…]\nClaude Lévi-Strauss: Tristes Tropiques, in English, translated by John Russell, 1961\n[…]\n\"Claude Lévi-Strauss, social constructivism and syllables across languages\"\n[…]\nClaude Lévi-Strauss and his Mythologiques — An interdisciplinary internet project by scholars of the University of Hildesheim (Germany): http://www.mythologica.eu Archived 22 September 2017 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Claude_L%C3%A9vi-Strauss",
        "situacao": "ok",
        "texto": "Claude Lévi-Strauss (Bruxelas, 28 de novembro de 1908 – Paris, 30 de outubro de 2009) foi um antropólogo, professor, filósofo e sociólogo francês, embora tenha nascido na Bélgica. Professor honorário do Collège de France, ali ocupou a cátedra de antropologia social de 1959 a 1982. Foi também membro da Academia Francesa - o primeiro a atingir os 100 anos de idade. É considerado o fundador da antrop\n[…]\nEntre 1935 a 1939, Lévi-Strauss lecionou sociologia na recém-criada Universidade de São Paulo, juntamente com os professores integrantes da missão francesa, entre eles: sua mulher Dinah Lévi-Strauss, Fernand Braudel, Jean Maugüé e Pierre Monbeig.\n[…]\nClaude Lévi-Strauss morreu em 30 de outubro de 2009, poucas semanas antes da data em que faria 101 anos. A morte só foi anunciada quatro dias depois.\n[…]\nO presidente da França Nicolas Sarkozy o definiu como \"um dos maiores etnólogos de todos os tempos\". Bernard Kouchner, o ministro de Assuntos Exteriores francês, afirmou que Lévi-Strauss \"quebrou com uma visão etnocêntrica da história e humanidade […] Em um tempo em que tentamos dar sentido a ideia de globalização, construir um mundo mais justo e humano, eu gostaria que o eco universal de Claude Lévi-Strauss ressonasse mais forte\".\n[…]\nLes Structures élémentaires de la parenté, Paris, Presses universitaires de France, 1949; nova edição revista, La Haye-Paris, Mouton, 1968.\n[…]\n1988. \"De près et de loin\", entrevistado por Didier Eribon (Conversas com Claude Lévi-Strauss, trad. Paula Wissing, 1991)\n[…]\n«Especial Estadão - 100 anos de Lévi-Strauss»\n[…]\nClaude Lévi-Strauss e as Mitológicas — Um projeto interdisciplinar na Internet (também em breve em português, francês e inglês): www.mitologicas.eu\n[…]\n«Artigo sobre a vida e a obra de Lévi Strauss, de Philippe Descola»\n[…]\n«Entrevista de Lévi Strauss»\n[…]\n«Antropologia e Filosofia, artigo sobre o debate Jean Paul Sartre e Claude Levi Strauss, de Tito Cardoso e Cunha» (PDF)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Assim Falou Zaratustra",
      "descricao": "Livro de Friedrich Nietzsche publicado entre 1883 e 1885."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Assim Falou Zaratustra, Nietzsche descreve três metamorfoses do espírito. Primeiro ele vira camelo, depois leão e, por fim, o quê?",
    "resposta": "Criança",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thus_Spoke_Zarathustra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thus_Spoke_Zarathustra",
        "situacao": "ok",
        "texto": "Thus Spoke Zarathustra: A Book for All and None (German: Also sprach Zarathustra: Ein Buch für Alle und Keinen), also translated as Thus Spake Zarathustra, is a work of philosophical fiction written by German philosopher Friedrich Nietzsche and published in four volumes between 1883 and 1885. The protagonist is nominally the historical Zarathustra, more commonly called Zoroaster in the West.\n[…]\nNietzsche considered Thus Spoke Zarathustra his magnum opus, writing:\n[…]\nAlso sprach Zarathustra, edited by Giorgio Colli and Mazzino Montinari. Munich: Deutscher Taschenbuch Verlag (study edition of the standard German Nietzsche edition).\n[…]\nAlso sprach Zarathustra (Richard Strauss' tone poem, inspired by Nietzsche's work)\n[…]\nNietzsche and Buddhism\n[…]\nNietzsche's 'Thus Spoke Zarathustra': Before Sunrise (essay collection), edited by James Luchte. London: Bloomsbury Publishing. 2008. ISBN 1-84706-221-0.\n[…]\nHiggins, Kathleen. [1987]. 2010. Nietzsche's Zarathustra (rev. ed.). Philadelphia: Temple University Press.\n[…]\nLampert, Laurence. 1989. Nietzsche's Teaching: An Interpretation of Thus Spoke Zarathustra. New Haven: Yale University Press.\n[…]\nRosen, Stanley. 1995. The Mask of Enlightenment: Nietzsche's Zarathustra. Cambridge: Cambridge University Press.\n[…]\nSeung, T. K. 2005. Nietzsche's Epic of the Soul: Thus Spoke Zarathustra. Lanham, Maryland: Lexington Books.\n[…]\nZittel, Claus. 2011. Das ästhetische Kalkül von Friedrich Nietzsches 'Also sprach Zarathustra'. Würzburg: Königshausen & Neumann. ISBN 978-3-8260-4649-0.\n[…]\nSchmidt, Rüdiger. \"Introduction\" (in German). In Nietzsche für Anfänger: Also sprach Zarathustra – Eine Lese-Einführung.\n[…]\nZittel, Claus: Wer also erzählt Nietzsches Zarathustra?, in: Deutsche Vierteljahrsschrift für Literaturwissenschaft und Geistesgeschichte 95, (2021), 327–351.\n[…]\nAlso sprach Zarathustra at Nietzsche Source\n[…]\nProject Gutenberg's etext of Also sprach Zarathustra (the German original)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Assim_Falou_Zaratustra",
        "situacao": "ok",
        "texto": "Assim falou Zaratustra: um livro para todos e para ninguém (em alemão:  Also sprach Zarathustra: Ein Buch für Alle und Keinen) é um livro escrito entre 1883 e 1885 pelo filósofo alemão Friedrich Nietzsche, que influenciou significativamente o mundo moderno. O livro foi escrito originalmente como três volumes separados em um período de vários anos. Depois, Nietzsche decidiu escrever outros três vol\n[…]\nApós a morte de Nietzsche, ele foi impresso em um único volume.\n[…]\nAs primeiras três partes — de totais quatro partes do volume — reúnem lições e sermões individuais fornecidos por Zarathustra. Majoritariamente, estas partes abrangem os temas mais genéricos da filosofia madura de Nietzsche, todavia de maneira simbólica e obscura. Ele valoriza empenho e sofrimento, pois o caminho para se tornar um super-homem é difícil e exige grandes sacrifícios.\n[…]\nNo livro \"Assim falou Zarathustra”, os três maiores ensinamentos e conceitos da filosofia de Nietzsche são: 1) Vontade de Potência 2) Recorrência Eterna e 3) o Übermensch.\n[…]\nNietzsche considerava religiões como o Cristianismo e o Budismo como inimigas para uma cultura saudável, e pelo fato de que “Assim Falou Zaratustra” se baseia em um ceticismo, o livro pode ser considerado como uma polêmica contra a influência destas religiões. Um exemplo é quando Zaratustra diz que \"a alma é apenas uma palavra para algo sobre o corpo\". Em contradição, Nietzsche descartou o Cristianismo e o Budismo como pessimistas e niilistas.\n[…]\nQuando o “Super-Homem” determinado por Nietzsche adquire esse poder, ocorrerá a transvaloração de todos os valores e poderá \"viver a vida como obra de arte\". A vontade de poder descrita por Nietzsche é a principal força nos seres humanos — realização, ambição e esforço para alcançar a posição mais alta possível na vida. Tal conceito de Nietzsche apareceu primeiramente no seu texto “Recorrência Eterna” ou “Eterno Retorno” (1881).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Quatro causas",
      "descricao": "Teoria de Aristóteles segundo a qual tudo se explica por quatro causas: material, formal, eficiente e final."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Para Aristóteles, tudo tem quatro causas: a material, a formal, a eficiente e qual outra, ligada à finalidade?",
    "resposta": "A final",
    "fonte": [
      "https://en.wikipedia.org/wiki/Four_causes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Four_causes",
        "situacao": "ok",
        "texto": "The four causes are, in Aristotelian thought, categories of questions that explain \"the why's\" of something that exists or changes in nature. The four causes are the: material cause, the formal cause, the efficient cause, and the final cause.\n[…]\nAristotle defines the end, purpose, or final \"cause\" (τέλος, télos) as that for the sake of which a thing is done. Like the form, this is a controversial type of explanation in science; some have argued for its survival in evolutionary biology, while Ernst Mayr denied that it continued to play a role.\n[…]\nHe argues that the end is that which brings it about, so for example \"if one defines the operation of sawing as being a certain kind of dividing, then this cannot come about unless the saw has teeth of a certain kind; and these cannot be unless it is of iron.\" According to Aristotle, once a final \"cause\" is in place, the material, efficient and formal \"causes\" follow by necessity.\n[…]\nAristotle saw that his biological investigations provided insights into the causes of things, especially into the final cause:\n[…]\nExplanations in terms of final causes remain common in evolutionary biology. Francisco J. Ayala has claimed that teleology is indispensable to biology since the concept of adaptation is inherently teleological.\n[…]\nMaterial cause describes territory and population. Formal cause brings together law, the constitution, legislation, and customs. Final cause has to do with the goals of the state: increasing the population, guaranteeing the national defense, modernizing agriculture, developing trade. And last, efficient cause gives account of the means available to the state: the administrative and political personnel, the judicial system, the general staff, and various elites."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quatro_causas",
        "situacao": "ok",
        "texto": "As quatro causas são a base teórica formulada por Aristóteles para o estudo das causas (etiologia) acerca de quaisquer fenômenos. No Livro I (ou Alpha Maior) da Metafísica, Aristóteles sintetiza nessa teoria as concepções de causas (αιτíα, em grego) dos principais filósofos gregos que o antecederam, como Tales de Mileto, Pitágoras, Parmênides e Platão.\n[…]\nDe modo geral, a doutrina de Aristóteles contempla os seguintes quatro tipos de causas: as materiais (relativas ao que algo é feito), as formais (relativas ao que algo é), as eficientes/motoras (relativas ao que ou quem o produziu), e as finais (relativas à finalidade, télos, ou para quê; ou seja, àquilo que algo visa ou \"tem por fim\").\n[…]\nAlém disso, as causas finais estão diretamente relacionadas aos mais variados problemas filosóficos que envolvem a teleologia. A teoria das quatro causas de Aristóteles consegue, assim, por esses diferentes tipos de causas, descrever as condições de existência tanto de entidades estáticas como em transformação.\n[…]\nPor exemplo, um determinado homem estaticamente reduz-se às causas materiais (carne, ossos e tendões) e formais (basicamente a \"alma\"; aquilo que consiste em certos princípios vitais que concedem direção e finalidade ao organismo), mas quando considerado dinamicamente a partir de perguntas como \"como nasceu\", \"quem o gerou\" ou \"por que se desenvolve e cresce\", entram os dois outros tipos de causas, como entraria o pai como causa eficiente/motora por seu nascimento e a causa final do homem para explicar o porquê continua a viver e se desenvolver.==Referências==\n[…]\nGiovanni, Reale; Aristóteles (2014). Metafísica: Ensaio introdutóio, texto grego com tradução e comentário de Giovanni Reale. Volume II: Texto grego com tradução ao lado. São Paulo: Loyola. ISBN 88-343-0541-8",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Empédocles",
      "descricao": "Filósofo pré-socrático de Agrigento, na Sicília (c. 494–434 a.C.), que propôs a teoria dos quatro elementos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Para Empédocles, os quatro elementos se unem e se separam pela ação de duas forças. Uma delas é o Amor. Qual é a outra?",
    "resposta": "O Ódio (Discórdia)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Empedocles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Empedocles",
        "situacao": "ok",
        "texto": "Empedocles (; Ancient Greek: Ἐμπεδοκλῆς; c. 494 – c. 434 BC, fl. 444–443 BC) was a pre-Socratic Greek philosopher and a native citizen of Akragas, a Greek city in Sicily. Empedocles' philosophy is known best for originating the cosmogonic theory of the four classical elements. He also proposed forces he called Love and Strife which would mix and separate the elements, respectively.\n[…]\nThe work of Empedocles, Lambridis suggests, must be seen in relation to the work of the Greeks as a whole that borrowed elements from Egypt, Babylon and other Eastern cultures to produce a totally different philosophy.\n[…]\nSince that time, Strife gained more sway and the bond which kept the pure elementary substances together in the sphere was dissolved. The elements became the world of phenomena we see today, full of contrasts and oppositions, operated on by both Love and Strife. Empedocles assumed a cyclical universe whereby the elements return and prepare the formation of the sphere for the next period of the universe.\n[…]\nEmpedocles attempted to explain the separation of elements, the formation of earth and sea, of Sun and Moon, of atmosphere. He also dealt with the first origin of plants and animals, and with the physiology of humans. As the elements entered into combinations, there appeared strange results—heads without necks, arms without shoulders. Then as these fragmentary structures met, there were seen horned heads on human bodies, bodies of oxen with human heads, and figures of double sex.\n[…]\nIn old editions of Empedocles, about 450 lines were ascribed to \"On Nature\" which outlined his philosophical system, and explains not only the nature and history of the universe, including his theory of the four classical elements, but also theories on causation, perception, and thought, as well as explanations of terrestrial phenomena and biological processes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emp%C3%A9docles",
        "situacao": "ok",
        "texto": "Empédocles  (em grego clássico: Ἐμπεδοκλῆς; Agrigento, 495 a.C. - 430 a.C.),  foi um filósofo e pensador pré-socrático grego e cidadão de Agrigento, na Sicília. É conhecido por ser o criador da teoria cosmogênica dos quatro elementos clássicos que influenciou o pensamento ocidental de uma forma ou de outra, até quase meados do século XVIII.\n[…]\nEle também propôs poderes chamados por ele de \"Amor\" e \"Ódio\" que atuariam como forças que tanto podem atrair os elementos quanto separá-los. Essas especulações físicas faziam parte de uma história do universo que também trata da origem e do desenvolvimento da vida.\n[…]\nOs quatro elementos são, contudo, simples, eternos e imutáveis, e como a mudança é a consequência da sua mistura e separação, foi também necessário supor a existência de poderes em movimento - para trazer a mistura e a separação. Os quatro elementos são colocados eternamente em união, e eternamente separados uns dos outros, por dois poderes divinos, amor e ódio.\n[…]\nO Amor (em grego:   φιλία) explica a atracção de diferentes formas de matéria, e o Ódio (em grego:   νεῖκος) é responsável pela sua separação. Se os elementos são o conteúdo do universo, então o Amor e o Ódio explicam a sua variação e harmonia. O Amor e o Ódio são forças atractivas e repulsivas que o olho comum pode em funcionamento entre o povo, mas que realmente permeiam o universo. Eles imperam alternadamente sobre as coisas, - sem contudo algum ser sempre muito ausente.\n[…]\nOs conceitos elaborados por Empédocles podem ser considerados como precursores de aspectos do atomismo, especialmente sua teoria física fundada sobre a existência de corpusculos elementares e a explicação da formação de corpos complexos através processo de composição e decomposição desses quatro elementos.\n[…]\nPseudo-Empédocles",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Manifesto Comunista",
      "descricao": "Panfleto político de Karl Marx e Friedrich Engels, publicado em Londres em 1848."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que chamado aos trabalhadores, repetido em bandeiras e cartazes, encerra o Manifesto Comunista de Marx e Engels?",
    "resposta": "Proletários de todos os países, uni-vos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Workers_of_the_world,_unite!"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Workers_of_the_world,_unite!",
        "situacao": "ok",
        "texto": "The political slogan \"Workers of the world, unite!\" is one of the rallying cries from The Communist Manifesto (1848) by Karl Marx and Friedrich Engels. The original phrase (German: Proletarier aller Länder, vereinigt Euch!) literally meant 'Proletarians of all countries, unite!', but was soon popularised in English as \"Workers of the world, unite!\" along with the rest of the phrase: \"You have noth\n[…]\nFive years before The Communist Manifesto, this phrase appeared in the 1843 book The Workers' Union by Flora Tristan.\n[…]\nThe Communist League, described by Engels as \"the first international movement of the working class\", was persuaded by Engels to change its motto from the League of the Just's \"All men are brothers\" to \"Working men of all countries, unite!\", reflecting Marx and Engels' view of proletarian internationalism.\n[…]\nThe slogan was the Soviet Union's state motto (Пролетарии всех стран, соединяйтесь!; Proletarii vsekh stran, soyedinyaytes'!) and it appeared in the State Emblem of the Soviet Union. It also appeared on 1919 Russian SFSR banknotes (in Arabic, Chinese, English, French, German, Italian and Russian), on Soviet ruble coins from 1921 to 1934 and was the slogan of Soviet newspaper Pravda.\n[…]\nThe guiding motto of the 2nd Comintern congress in 1920, under Lenin's directive, was \"Workers and oppressed peoples of all countries, unite!\". This denoted the anti-colonialist agenda of the Comintern, and was seen as an attempt to unite racially-subjugated black people and the global proletariat in anti-imperialist struggle.\n[…]\nManifesto of the Communist Party by Karl Marx and Friedrich Engels. Translated by  Samuel Moore in cooperation with Frederick Engels, 1888.\n[…]\nChapter 4 of The Communist Manifesto.\n[…]\nCollection of Quotes by Karl Marx Archived 2022-06-29 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prolet%C3%A1rios_de_todos_os_pa%C3%ADses%2C_uni-vos%21",
        "situacao": "ok",
        "texto": "O slogan político \"Proletários de todos os países, uni-vos!\" (no seu original alemão Proletarier aller Länder, vereinigt euch!), um dos mais famosos gritos de protesto do socialismo, vem do Manifesto Comunista (1848) de Karl Marx e Friedrich Engels. A versão popular do slogan é \"Trabalhadores do mundo, uni-vos!\", e, ainda, há \"Trabalhadores do mundo, uni-vos, vós não tendes nada a perder a não ser\n[…]\nUma variação desta frase (\"Trabalhadores de todas as terras, uni-vos\") está escrita no túmulo de Marx.\n[…]\nManifesto do Partido Comunistapor Karl Marx e Friedrich Engels.\n[…]\nCapítulo 4do Manifesto Comunista.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "O Banquete",
      "descricao": "Diálogo de Platão em que convidados de um jantar em Atenas fazem discursos sobre o amor."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em O Banquete, de Platão, que comediógrafo grego conta o mito dos seres humanos cortados ao meio por Zeus?",
    "resposta": "Aristófanes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Symposium_(Plato)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Symposium_(Plato)",
        "situacao": "ok",
        "texto": "The Symposium (Ancient Greek: Συμπόσιον, Symposion) is a Socratic dialogue by Plato, dated c. 385 – 370 BC. It depicts a friendly contest of extemporaneous speeches given by a group of notable Athenian men attending a banquet. The men include the philosopher Socrates, the general and statesman Alcibiades, and the comic playwright Aristophanes. The panegyrics are to be given in praise of Eros, the \n[…]\nAristophanes (speech begins 189c): the eminent comic playwright\n[…]\nApollodorus of Phalerum—a passionate follower of Socrates—recounts the story of the symposium to an unnamed friend, having narrated the events to Glaucon while en route home the previous day. The banquet had been hosted by the poet Agathon to celebrate his first victory in a dramatic competition at the Dionysia of 416 BC. Though Apollodorus was not present at the event, which occurred when he was a boy, he heard the story from Aristodemus and confirmed the events with Socrates.\n[…]\nThe Symposium is a response to The Frogs, and shows Socrates winning not only over Aristophanes, who was the author of both The Frogs, and The Clouds, but also over the tragic poet who was portrayed in that comedy as the victor.\n[…]\nIn his Politics, Aristotle quoted from the speech of Aristophanes in the Symposium.\n[…]\nIn 1959, Leo Strauss interpreted the Symposium as a presentation of an examination of the question of whether philosophy or poetry represented the way to wisdom. It is a competition in which Socrates overcome the poets Agathon and Aristophanes, thus showing the reader the superiority of philosophy. This is done in the field of eroticism, a traditional domain of the poets. Thus, the primacy of reason is established over irrational factors.\n[…]\nWorthen, Thomas D., \"Socrates and Aristodemos, the automaton agathoi of the Symposium: Gentlemen go to parties on their own say-so\", New England Classical Journal 26.5 (1999), 15–21."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Banquete",
        "situacao": "ok",
        "texto": "O Banquete, também conhecido como Simpósio (em grego antigo: Συμπόσιον, transl. Sympósion), é um diálogo platônico escrito por volta de 380 a.C. Constitui-se basicamente de uma série de discursos sobre a natureza e as qualidades do amor (eros). O Banquete é, juntamente com o Fedro, um dos dois diálogos de Platão em que o tema principal é o amor.\n[…]\nEntre outros, também ali estão Aristodemo de Cidateneu, amigo e discípulo de Sócrates; Fedro, o jovem retórico; Pausânias, amante de Agatão; o médico Erixímaco; Aristófanes, comediante que ridicularizava Sócrates, e o político Alcibíades.\n[…]\nAristófanes, comediógrafo, foi o próximo, e logo avisou que seu discurso seria diferente dos anteriores. Ele começou criticando a falta de reconhecimento dos homens diante do poder de Eros. Para explicar esse poder, contou um mito: no início, existiam três tipos de seres humanos, todos duplos de si mesmos (masculino-masculino, feminino-feminino e masculino-feminino, este último conhecido como andrógino) Os deuses, com medo do poder desses seres, os cortaram ao meio.\n[…]\nO amor para Aristófanes é, portanto, o desejo e a procura da metade perdida por causa da nossa injustiça contra os deuses. O último a elogiar o amor foi Agatão, o anfitrião do banquete. Ao contrário dos que o precederam, Agatão não se propõe enaltecer os benefícios que Eros faz ao homem, mas sim cantar o próprio deus e a sua essência, passando em seguida a descrever-lhe o dote.\n[…]\nSimpósio\n[…]\nSimpósio (Xenofonte)\n[…]\nThe Internet Classics Archive: Symposium ou Banquete de Platão, tradução inglesa de Benjamin Jowett\n[…]\nL'antiquité grecque et latine: Le Banquet ou o Banquete de Platão, tradução francesa de Victor Cousin, 1834\n[…]\nSymposion, Texto em grego antigo na edição de John Burnet, 1901\n[…]\nSymposion, Banquete de Platão, tradução alemã de Franz Susemihl, 1855",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Leviatã",
      "descricao": "Tratado de filosofia política de Thomas Hobbes, publicado em 1651, que defende um soberano absoluto."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na famosa gravura da capa de Leviatã, de Hobbes, o corpo do gigante coroado é formado por quê?",
    "resposta": "Por centenas de pessoas pequenas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leviathan_(Hobbes_book)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leviathan_(Hobbes_book)",
        "situacao": "ok",
        "texto": "Leviathan or The Matter, Forme and Power of a Commonwealth Ecclesiasticall and Civil, commonly referred to as Leviathan, is a work of social and political theory by the English empiricist philosopher and political theorist Thomas Hobbes (1588–1679), published in 1651 (revised Latin edition 1668). Its name derives from the chaotic Leviathan sea serpent of the Hebrew Bible and earlier mythologies.\n[…]\nIn Leviathan, Hobbes explicitly states that the sovereign has authority to assert power over matters of faith and doctrine and that if he does not do so, he invites discord. Hobbes presents his own religious theory but states that he would defer to the will of the sovereign (when that was re-established: again, Leviathan was written during the Civil War) as to whether his theory was acceptable.\n[…]\nLeviathan, Critical edition by Noel Malcolm in three volumes: 1. Editorial Introduction; 2 and 3. The English and Latin Texts, Oxford University Press, 2012 (Clarendon Edition of the Works of Thomas Hobbes).\n[…]\nBagby, Laurie M. Johnson. Hobbes's Leviathan: Reader's Guide, New York: Continuum, 2007.\n[…]\nBaumrin, Bernard Herbert (ed.) Hobbes's Leviathan: Interpretation and Criticism Belmont, CA: Wadsworth, 1969.\n[…]\nJohnston, David. The Rhetoric of Leviathan: Thomas Hobbes and the Politics of Cultural Transformation, Princeton, N.J.: Princeton University Press, 1986.\n[…]\nNewey, Glen. Routledge Philosophy Guidebook to Hobbes and Leviathan, New York: Routledge, 2008.\n[…]\nRogers, Graham Alan John. Leviathan: Contemporary Responses to the Political Theory of Thomas Hobbes Bristol: Thoemmes Press, 1995.\n[…]\nSchmitt, Carl. The Leviathan in the State Theory of Thomas Hobbes: Meaning and Failure of a Political Symbol, Chicago: The University of Chicago Press, 2008 (earlier: Greenwood Press, 1996).\n[…]\nSpringborg, Patricia. The Cambridge Companion to Hobbes's Leviathan, Cambridge: Cambridge University Press, 2007."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Leviat%C3%A3_%28livro%29",
        "situacao": "ok",
        "texto": "Leviatã ou Matéria, Palavra e Poder de um Governo Eclesiástico e Civil, comumente chamado de Leviatã, é um livro escrito por Thomas Hobbes e publicado em 1651. Ele é intitulado em referência ao Leviatã bíblico. O livro diz respeito à estrutura da sociedade e do governo legítimo, e é considerado como um dos exemplos mais antigos e mais influentes da teoria do contrato social. O editor foi Andrew Cr\n[…]\nNota-se que um soberano pode ser tanto uma pessoa quanto um grupo, eleito ou não. Porém, na perspectiva de Hobbes, a melhor forma de governo era a monarquia — sem a presença concomitante de um Parlamento, pois este dividiria o poder e, portanto, seria um estorvo ao Leviatã e levaria a sociedade ao caos (como na guerra civil inglesa).\n[…]\nNa busca pela glória, derruba-se os outros pelas costas, já que, para Hobbes, os homens são iguais nas capacidades e na expectativa de êxito, nenhuma pessoa ou nenhum grupo pode, com segurança, reter o poder. Assim sendo, o conflito é perpétuo, e \"cada homem é inimigo de outro homem\". Nesse estado de guerra nada de bom pode surgir. Enquanto cada um se concentra na autodefesa e na conquista, o trabalho produtivo é impossível.\n[…]\nHobbes abre uma pequena brecha para que o súdito rompa o contrato social:\n[…]\nHobbes trata de 4 assuntos principais:\n[…]\n*culto público (a Rep. realiza por uma pessoa) vs. culto privado (feito por um particular, secretamente livre mas se restringe diante de multidões)\n[…]\nR: O culto público consiste na uniformidade. A república é apenas uma pessoa, por isso, deve apresentar à Deus um único culto, chamado culto público. Tal honraria não pode ser diversa dentro de uma república pelo simples fato de que se houvesse diversas ações a serem realizadas ao mesmo tempo, não haveria culto público. Mas sim, vários privados.\n[…]\nLeviatã (em inglês).\n[…]\nThomas Hobbes - Leviatã (Sumário das ideias - págs. 72 a 93)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Escola de Frankfurt",
      "descricao": "Grupo de filósofos e cientistas sociais ligado ao Instituto de Pesquisa Social de Frankfurt, criador da teoria crítica."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Adorno e Horkheimer são nomes centrais da Escola de Frankfurt. Que outro integrante do grupo escreveu Eros e Civilização?",
    "resposta": "Herbert Marcuse",
    "fonte": [
      "https://en.wikipedia.org/wiki/Herbert_Marcuse",
      "https://en.wikipedia.org/wiki/Eros_and_Civilization"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Herbert_Marcuse",
        "situacao": "ok",
        "texto": "Herbert Marcuse ( mar-KOO-zə; German: [maʁˈkuːzə]; July 19, 1898 – July 29, 1979) was a German and American philosopher, social critic, and political theorist, associated with the Frankfurt School of critical theory. Born in Berlin, Marcuse studied at the Friedrich Wilhelm University of Berlin and then at the University of Freiburg, where he received his PhD under the supervision of Martin Heidegg\n[…]\nThe best-known works of Herbert Marcuse are Eros and Civilization (1955) and One-Dimensional Man (1964). His Marxist scholarship inspired many radical intellectuals and political activists in the 1960s and 1970s, and has from then on considerably influenced left-wing political thinking in the Western world. The name \"Marcuse\" itself, however, remains obscure outside of specialized contexts where critical theory is taught or referenced.\n[…]\nHerbert Marcuse was born July 19, 1898, in Berlin, to Carl Marcuse and Gertrud Kreslawsky. Marcuse's family was a German upper-middle-class Jewish family that was well integrated into German society. Marcuse moved from Berlin to the suburb of Charlottenburg, the center of West Berlin. Marcuse's formal education began at Mommsen Gymnasium and continued at the Kaiserin-Augusta Gymnasium in Charlottenburg from 1911 to 1916.\n[…]\nHerbert Marcuse appealed to students of the New Left through his emphasis on the power of critical thought and his vision of total human emancipation and a selectively repressive civilization. He supported students he felt were subject to the pressures of a commodifying system, and has been regarded as an inspirational intellectual leader.\n[…]\nEros effect\n[…]\nNeumann, Franz; Marcuse, Herbert; Kirchheimer, Otto (2013), Laudani, Raffaele (ed.), Secret Reports on Nazi Germany. The Frankfurt School Contribution to the War Effort, Princeton University Press.\n[…]\nInternational Herbert Marcuse Society website\n[…]\nDouglas Kellner, \"Herbert Marcuse\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eros_and_Civilization",
        "situacao": "ok",
        "texto": "Eros and Civilization: A Philosophical Inquiry into Freud (1955; second edition, 1966) is a book by the German philosopher and social critic Herbert Marcuse.\n[…]\nEros effect\n[…]\nEros (Freud)\n[…]\nTable of contents, with links to full texts of preface, 1966 preface, introduction, chapter 1, epilog, and index (at marcuse.org)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Herbert_Marcuse",
        "situacao": "ok",
        "texto": "Herbert Marcuse (Berlim, 19 de julho de 1898 – Starnberg, 29 de julho de 1979) foi um sociólogo e filósofo alemão naturalizado norte-americano, pertencente à Escola de Frankfurt. Está sepultado no Dorotheenstädtischer Friedhof em Berlim.\n[…]\nHerbert Marcuse nasceu em Berlim numa família de judeus assimilados.\n[…]\nEm 1933, por intermédio da intervenção de Leo Lowenthal e de Kurt Riezler, Herbert Marcuse foi admitido no Instituto de Pesquisas Sociais que seria mais tarde associado à Escola de Frankfurt, que neste momento estava exilado em Genebra. Ele tentara, sem sucesso, desde 1931 entrar em uma relação mais estreita com o Instituto. Em 1934, junto com Theodor Adorno e Max Horkheimer mantém suas atividades nos Estados Unidos.\n[…]\nEm 1950, os colaboradores do Instituto retornam à Alemanha, mas Marcuse decide permanecer nos Estados Unidos onde pensa, escreve e ensina até sua morte em 1979.\n[…]\nPodemos perceber, em “Eros e Civilização”, um diálogo constante que Marcuse terá com a obra freudiana. Uma grande influência de Freud será a busca da felicidade do indivíduo humano, que virá através da satisfação dos desejos individuais da pessoa. As pessoas hoje seriam infelizes porque a sociedade bloqueia a realização de seus desejos, e devemos tentar reverter essa situação.\n[…]\n(Wolfgang Leo Maar, Marcuse: em busca de uma ética materialista, IN Herbert Marcuse, Cultura e Sociedade, Vol. I, p.8-9)\n[…]\n(Isabel Loureiro, Apresentação a Herbert Marcuse, Grande Recusa Hoje, p. 7).\n[…]\nMARCUSE, Herbert. Cultura e Sociedade. vol. 1. Rio de Janeiro: Paz e Terra, 1997.\n[…]\n«VASCONCELOS, Vitor Vieira. A interpretação da teoria psicanalítica Freudiana por Herbert Marcuse – Um estudo do Eros e Civilização. UFMG, 2003.». pt.scribd.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Enciclopédia (Diderot)",
      "descricao": "Enciclopédia francesa publicada entre 1751 e 1772, obra-símbolo do Iluminismo."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A Enciclopédia, obra-símbolo do Iluminismo francês no século dezoito, foi dirigida por Denis Diderot e por quem?",
    "resposta": "D'Alembert",
    "distratores": [
      "Voltaire",
      "Rousseau",
      "Montesquieu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Encyclop%C3%A9die"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Encyclop%C3%A9die",
        "situacao": "ok",
        "texto": "The Encyclopédie, ou dictionnaire raisonné des sciences, des arts et des métiers (French for 'Encyclopedia, or a Systematic Dictionary of the Sciences, Arts and Crafts'), better known as the Encyclopédie (French: [ɑ̃siklɔpedi]), was a general encyclopedia published in France between 1751 and 1772, with later supplements, revised editions, an index, and translations. It had many contributors, known\n[…]\nSince the objective of the editors of the Encyclopédie was to gather knowledge from myriad specialties, Diderot and D'Alembert knew they would need various contributors to help them with their project. In the end, more than 140 people contributed at least one article. (For a detailed list, see Encyclopédistes.) Many of the philosophes (intellectuals of the French Enlightenment) contributed to the Encyclopédie, including Diderot himself, Voltaire, Rousseau, and Montesquieu.\n[…]\nMore seriously, new rubrics were invented that had nothing to do with the tree of knowledge, and neither co-editor did much to impose any standardization. As the volumes progressed, the tree of knowledge seems to have faded from the awareness of Diderot and the other contributors. Tellingly, when D'Alembert reprinted materials from the Encyclopédie in his Mélanges, he left out the tree of knowledge.\n[…]\nEncyclopédie, ou dictionnaire raisonné des sciences, des arts et des métiers. Ed. Denis Diderot and Jean Le Rond D'Alembert. 28 vols. [Paris]: [Briasson et al.], 1751–72.\n[…]\nD'Alembert, Jean Le Rond. Preliminary discourse to the Encyclopedia of Diderot, translated by Richard N. Schwab, 1995. ISBN 0-226-13476-8\n[…]\nLough, John. Essays on the Encyclopédie of Diderot and d'Alembert. Oxford UP, 1968.\n[…]\nEncyclopedia of Diderot and d'Alembert Collaborative Translation Project currently contains a growing collection of articles translated into English (approximately 3,900 articles and sets of plates as of August 2026)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Encyclop%C3%A9die",
        "situacao": "ok",
        "texto": "Encyclopédie, ou dictionnaire raisonné des sciences, des arts et des métiers (traduzido da língua francesa, Enciclopédia, ou dicionário racional das ciências, artes e profissões) foi uma das primeiras enciclopédias que alguma vez existiram, tendo sido publicada na França no século XVIII. Os últimos volumes foram publicados em 1772.\n[…]\nEsta grande obra, compreendendo 35 volumes, 71 818 artigos e 2 885 ilustrações, foi editada por Jean Le Rond d'Alembert e Denis Diderot. D'Alembert deixou o projeto antes do seu término, sendo os últimos volumes a obra de Diderot. Muitas das mais notáveis figuras do iluminismo francês contribuíram para a obra, incluindo Voltaire, Rousseau e Montesquieu.\n[…]\nDe acordo com Denis Diderot no artigo \"Encyclopédie\", o objectivo da obra era \"mudar a maneira como as pessoas pensam\". Ele e os outros contribuidores defendiam a secularização da aprendizagem, à distância dos jesuítas. Diderot queria incorporar todo o conhecimento do mundo para a obra, e esperava que o texto pudesse disseminar todas as informações para as gerações atuais e futuras.\n[…]\nd'Alembert de l'Académie royale des Sciences de Paris, de celle de Prusse et de la Société royale de Londres\" (\"Enciclopédia, ou dicionário racional das ciências, artes e profissões, por uma sociedade de pessoas de letras, ordenado pelo senhor Diderot da Academia de Ciências e Belas-letras da Prússia, e quanto à parte matemática pelo senhor d'Alembert da\n[…]\nO frontispício da obra está carregada de simbolismo:\n[…]\nJean Le Rond d'Alembert — editor; ciência (especialmente matemática), assuntos contemporâneos, filosofia, religião, entre outros;\n[…]\nEncyclopedia of Diderot and d'Alembert Collaborative Translation Project atualmente contém uma coleção crescente de artigos traduzidos para o inglês (3 053 artigos e conjuntos de placas em 30 de setembro de 2020).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Søren Kierkegaard",
      "descricao": "Filósofo e teólogo dinamarquês do século dezenove, considerado precursor do existencialismo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Kierkegaard descreveu três estágios da existência humana: o estético, o ético e qual outro?",
    "resposta": "O religioso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stages_on_Life%27s_Way"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stages_on_Life%27s_Way",
        "situacao": "ok",
        "texto": "Stages on Life's Way (Danish: Stadier på Livets Vej; historical orthography: Stadier paa Livets Vej) is a philosophical work by Søren Kierkegaard written in 1845. The book was written as a continuation of Kierkegaard's prior work Either/Or. While Either/Or is about the aesthetic and ethical realms, Stages considers the religious. Kierkegaard's \"concern was to present the various stages of existenc\n[…]\nHe considered Stages on Life's Way in relation to Either/Or and the works of Ibsen: I wonder whether Henrick Ibsen did not feel a little uncomfortable, when Letters from Hell, (by Valdemar Adolph Thisted), seized the opportunity, and sailed forth in the wake of Brand? They both stand in direct relation to the thinker, who, here in Scandinavia, has had the greatest share in the intellectual education of the younger generation, namely, Søren Kierkegaard.\n[…]\nLove's Comedy, although its tendency is in the opposite direction, finds its point of departure in what Kierkegaard, in Either-Or and Stages on the Path of Life, has said for and against marriage. And yet the connection in this case is very much slighter than in the case of Brand. Almost every cardinal idea in this poem is to be found in Kierkegaard, and its hero’s life has its prototype in his.\n[…]\nIbsen shares with Kierkegaard the conviction that in every human being there slumbers a mighty soul, an unconquerable power, but he differs from Kierkegaard in holding this essence of individuality to be human, while Kierkegaard looks upon it as something supernatural.\n[…]\nWalter Lowrie notes that Kierkegaard wrote a \"repetition of Either/Or\" because it stopped with the ethical.\n[…]\nIn 1988 Mary Elizabeth Moore discusses Kierkegaard's method of indirect communication in this book.\n[…]\nSoren Kierkegaard, A Study of the third section of his Stadia Upon Life's Way, by Reverend Alexander Grieve The Expository times. v.19 1907/1908 Oct-Sep"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1dios_no_Caminho_da_Vida",
        "situacao": "ok",
        "texto": "Estádios no Caminho da Vida (dinamarquês: Stadier På Livets Vej) é uma obra filosófica de Søren Kierkegaard escrita em 1845. O livro foi escrito como uma continuação da obra Ou isso, ou aquilo: um fragmento de vida. Enquanto que Ou isso, ou aquilo: um fragmento de vida fala sobre os estádios estéticos e éticos da vida, esta obra continua até à consideração dos estádios religiosos.\n[…]\nO livro está dividido em três secções, a primeira das quais detalha um banquete, em que os convidados podem ser vistos como representativos dos diversos tipos de estetas. Alguns dos convidados podem mesmo identificados com alguns dos pseudónimos anteriormente usados por Kierkegaard em obras anteriores.\n[…]\nNuma referência consciente à obra de Platão, O Banquete, é determinado que cada participante faça um discurso, e que o tópico seja o amor. Para o leitor, no entanto, cada discurso é em última análise, uma desilusão. O jovem homem inexperiente, por exemplo, considera o amor como um quebra-cabeças perturbante. Para o sedutor, é um jogo a ser ganho, e para o designer de moda, é apenas um estilo, sem qualquer real significado, que ele pode controlar como qualquer outro estilo.\n[…]\nSão descritas as razões para esta última lacuna, e explica como o casamento pode falhar por excesso de sentimentos românticos e eróticos assim com por falta deles. É assumida, aqui, uma caracterização do estádio ético da vida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Lei dos três estados",
      "descricao": "Teoria de Auguste Comte segundo a qual o pensamento humano passa pelos estados teológico, metafísico e positivo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Auguste Comte dizia que o pensamento humano passa por três estados: o teológico, o metafísico e qual, baseado na ciência?",
    "resposta": "O positivo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Law_of_three_stages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Law_of_three_stages",
        "situacao": "ok",
        "texto": "The law of three stages is an idea developed by Auguste Comte in his work The Course in Positive Philosophy. It states that society as a whole, and each particular science, develops through three mentally conceived stages: (1) the theological stage, (2) the metaphysical stage, and (3) the positive stage.\n[…]\nTo Comte, the law of three stages made the development of sociology inevitable and necessary. Comte saw the formation of his law as an active use of sociology, but this formation was dependent on other sciences reaching the positive stage; Comte’s three-stage law would not have evidence for a positive stage without the observed progression of other sciences through these three stages.\n[…]\nThus, sociology and its first law of three stages would be developed after other sciences were developed out of the metaphysical stage, with the observation of these developed sciences becoming the scientific evidence used in a positive stage of sociology. This special dependence on other sciences contributed to Comte’s view of sociology being the most complex. It also explains sociology being the last science to be developed.\n[…]\nOverall, Comte saw his law of three stages as the start of the scientific field of sociology as a positive science. He believed this development was the key to completing positive philosophy and would finally allow humans to study every observable aspect of the universe. For Comte, sociology’s human-centered studies would relate the fields of science to each other as progressions in human history and make positive philosophy one coherent body of knowledge.\n[…]\nComte presented the positive stage as the final state of all sciences, which would allow human knowledge to be perfected, leading to human progress.\n[…]\nSociological positivism"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_dos_tr%C3%AAs_estados",
        "situacao": "ok",
        "texto": "A Lei dos três estados é a base na qual está assentada o edifício filosófico, científico e político elaborado pelo pensador francês Auguste Comte (1798-1857), o fundador do positivismo.\n[…]\n\"Cada entendimento oferece uma unica a sucessão dos três estados, fictício, abstrato e positivo, em relação às nossas concepções quaisquer, mas com uma velocidade proporcional à generalidade dos fenômenos correspondentes\".\n[…]\nDe maneira complementar à Lei dos Três Estados, há a Lei do Classamento das Ciências. De acordo com essa lei complementar, as ciências são as seguintes: Matemática, Astronomia, Física, Química, Biologia, Sociologia, Moral (ou Psicologia Positiva).\n[…]\nToda concepção humana (abstrata) passa por três fases sucessivas: teológica, metafísica e positiva; a fase teológica, por sua vez, subdivide-se em fetichista, astrolátrica, politeísta  e monoteísta . Essas fases correspondem a formas de explicar os fenômenos tratados em cada concepção. Na fase teológica, os fenômenos são explicados a partir de vontades supra-humanas e sobrenaturais, que manipulam à vontade a realidade.\n[…]\nA Lei da Classificação das Ciências corresponde, portanto, à sucessão histórica e teórica dos tipos de fenômenos que passaram pelas três fases (teológica, metafísica e positiva). Esses tipos de fenômenos são agrupados nas sete ciências fundamentais, necessariamente de caráter abstrato, indicadas acima: Matemática, Astronomia, Física, Química, Biologia, Sociologia e Moral (ou Psicologia Positiva).\n[…]\nA Lei dos  Três Estados, conduzirá, na visão de Comte, ao advento da Era Normal onde a humanidade alcançará o estágio evolutivo final (estágio positivo) caracterizado pelo predomínio da  Religião da Humanidade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Diógenes de Sinope",
      "descricao": "Filósofo cínico grego do século quatro a.C., famoso por viver na pobreza em Atenas e Corinto."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Diógenes andava em plena luz do dia por Atenas segurando uma lamparina acesa. O que ele dizia estar procurando?",
    "resposta": "Um homem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Diogenes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diogenes",
        "situacao": "ok",
        "texto": "Diogenes the Cynic (, dy-OJ-in-eez; c. 413/403 – c. 324/321 BC), also known as Diogenes of Sinope, was an ancient Greek philosopher during the period of Classical Greece, and one of the founders of Cynicism.\n[…]\nDiogenes reportedly owned a Phrygian slave named Manes. Given Diogenes's poverty after fleeing Sinope, it is more likely that Manes was part of his early life rather than a slave bought in Athens. When the slave escaped, Diogenes dismissed his ill fortune by saying, \"If Manes can live without Diogenes, why not Diogenes without Manes?\".\n[…]\nA bronze statue of Diogenes was erected in Sinope after his death, with the following poem from Philiscus of Aegina at its base.\n[…]\nHis philosophical outlook was likely shaped by his early years in Sinope and his subsequent exile. Encounters with non-Greek peoples along the Black Sea probably contributed to his development of cultural relativism. Favorinus argued that cosmopolitanism served as both a response to and a consolation for the loss of one's homeland, and Diogenes's experience as a foreigner may have challenged the notion that political power naturally belongs to those born by accident in a particular city.\n[…]\nDorandi, Tiziano (1993). \"La Politeia de Diogène de Sinope et quelques remarques sur sa pensée politique\". In Goulet-Cazé, Marie-Odile; Goulet, Richard (eds.). Le Cynisme ancien et ses prolongements. Presses universitaires de France. pp. 57–68. ISBN 978-2-13-045840-1.\n[…]\nHusson, Suzanne (2011). La république de Diogène: une cité en quête de la nature. Vrin. ISBN 978-2-7116-2265-8.\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Diogenes of Sinope\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Di%C3%B3genes_de_Sinope",
        "situacao": "ok",
        "texto": "Diógenes de Sinope (em grego antigo: Διογένης ὁ Σινωπεύς; Sinope, 404 ou 412 a.C. – Corinto, c. 323 a.C.), também conhecido como Diógenes, o Cínico, foi um filósofo da Grécia Antiga, durante o período da Grécia Clássica, e um dos fundadores do Cinismo.\n[…]\nAbraçando uma vida de pobreza e autossuficiência, ele ficou famoso por seus comportamentos não convencionais e desavergonhados que desafiavam abertamente as normas sociais, como viver em um jarro ou vagar por espaços públicos com uma lanterna acesa à luz do dia, alegando estar \"à procura de um homem\", ou seja, \"um homem sábio\" (sophos).\n[…]\nSegundo a tradição, Diógenes vivia a perambular pelas ruas na mais completa miséria até que um dia foi aprisionado por piratas para, posteriormente, ser vendido como escravo. Um homem de boa formação chamado Xeníades o comprou e em breve pôde constatar a inteligência de seu novo escravo, tendo-lhe confiado tanto a gerência de seus bens quanto a educação de seus filhos.\n[…]\nÉ famosa, por exemplo, a história de que ele saía em plena luz do dia com uma lamparina acesa procurando por homens verdadeiros (ou seja, homens autossuficientes e virtuosos).\n[…]\nMuitas anedotas sobre Diógenes referem-se ao seu comportamento semelhante ao de um cão, e seu elogio às virtudes dos cães. Não é sabido se o filósofo se considerava insultado pelo epíteto \"canino\" e fez dele uma virtude, ou se ele assumiu sozinho a temática do cão para si. Os modernos termos \"cínico\" e \"cinismo\" derivam da palavra grega \"kynikos\", a forma adjetiva de \"kynon\", que significa \"cão\".\n[…]\nPor outro lado, Diógenes considerava o amor como sendo absurdo, que não se deve apegar-se a outra pessoa.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Immanuel Kant",
      "descricao": "Filósofo alemão (1724–1804), nascido em Königsberg, autor da Crítica da Razão Pura."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Dizia-se que os vizinhos de Kant, em Königsberg, acertavam o relógio por um hábito diário e pontualíssimo dele. Que hábito era esse?",
    "resposta": "O passeio da tarde",
    "fonte": [
      "https://en.wikipedia.org/wiki/Immanuel_Kant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Immanuel_Kant",
        "situacao": "ok",
        "texto": "Immanuel Kant (born Emanuel Kant; 22 April 1724 – 12 February 1804) was a German philosopher. Born in Königsberg in the Kingdom of Prussia, he is considered one of the central thinkers of the Enlightenment. His comprehensive and systematic works in epistemology, metaphysics, logic, ethics, aesthetics, political theory, and philosophy of religion have made him one of the most influential and highly\n[…]\nImmanuel Kant was born on 22 April 1724 into a Prussian German family of Lutheran faith in Königsberg in East Prussia (now Kaliningrad Oblast, Russia). His mother, Anna Regina Reuter, was born in Königsberg to a father from Nuremberg. Her surname is sometimes erroneously given as Porter. Kant's father, Johann Georg Kant, was a German harness-maker from Memel, at the time Prussia's most northeastern city (now Klaipėda, Lithuania).\n[…]\nShortly thereafter, Kant's friend Johann Friedrich Schultz (1739–1805), a professor of mathematics, published Explanations of Professor Kant's Critique of Pure Reason (Königsberg, 1784), which was a brief but very accurate commentary on Kant's Critique of Pure Reason.\n[…]\nAfter the expulsion of Königsberg's German population at the end of World War II, the University of Königsberg, where Kant taught, was replaced by the Russian-language Kaliningrad State University, which appropriated the campus and surviving buildings. In 2005, the university was renamed Immanuel Kant State University of Russia.\n[…]\nUnless otherwise noted, all citations are to The Cambridge Edition of the Works of Immanuel Kant in English Translation, 16 vols., ed. Guyer, Paul, and Wood, Allen W. Cambridge: Cambridge University Press, 1992. Citations in the article are to individual works per abbreviations in List of major works below.\n[…]\nWorks by Immanuel Kant at Project Gutenberg\n[…]\nWorks by or about Immanuel Kant at the Internet Archive\n[…]\nWorks by Immanuel Kant at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Immanuel_Kant",
        "situacao": "ok",
        "texto": "Immanuel Kant ([ɪˈmaːnu̯eːl kant] em alemão; nascido Emanuel Kant; Königsberg, 22 de abril de 1724 – 12 de fevereiro de 1804) foi um filósofo alemão do Iluminismo. Escreveu sobre epistemologia, metafísica, lógica, ética, estética, filosofia política e filosofia da religião.\n[…]\nNos últimos anos de vida, Kant mantinha uma rotina rigorosa. Dizia-se que os vizinhos acertavam os relógios pelas caminhadas que ele fazia todos os dias. Pensou em se casar em duas ocasiões, primeiro com uma viúva e depois com uma mulher da Vestfália, mas demorou tanto a se decidir que nenhuma das duas uniões aconteceu. Mesmo sem se casar, tinha uma vida social ativa. Era um professor querido e um autor que já alcançara algum sucesso antes de publicar suas principais obras filosóficas.\n[…]\nO mausoléu de Kant fica junto ao canto nordeste da Catedral de Königsberg, em Kaliningrado, na Rússia. Projetado por Friedrich Lahrs, ficou pronto em 1924 para o bicentenário de nascimento do filósofo. Kant fora sepultado dentro da catedral. Em 1880, seus restos foram levados a uma capela neogótica próxima, mais tarde demolida para dar lugar ao mausoléu no mesmo local.\n[…]\nA universidade criou uma sociedade de estudos kantianos e, em 2010, passou a chamar-se Universidade Federal Báltica Immanuel Kant.\n[…]\nMais tarde, Clement Greenberg recorreu à 'crítica imanente' no ensaio 'Modernist Painting' para justificar a pintura abstrata a partir das condições próprias do meio pictórico, sobretudo a superfície plana. Michel Foucault também dialogou intensamente com Kant ao repensar o Iluminismo como exercício do pensamento crítico e descreveu sua filosofia como uma 'história crítica da modernidade' enraizada em Kant.\n[…]\nAudiolivros de Kant no LibriVox (em inglês e outras línguas).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Discurso do Método",
      "descricao": "Obra de René Descartes publicada em 1637, onde aparece a frase penso, logo existo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Numa época em que os tratados de filosofia saíam em latim, em que língua Descartes escreveu o Discurso do Método?",
    "resposta": "Francês",
    "fonte": [
      "https://en.wikipedia.org/wiki/Discourse_on_the_Method"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Discourse_on_the_Method",
        "situacao": "ok",
        "texto": "Discourse on the Method of Rightly Conducting One's Reason and of Seeking Truth in the Sciences (French: Discours de la Méthode pour bien conduire sa raison, et chercher la vérité dans les sciences) is a philosophical and autobiographical treatise published by René Descartes in 1637. It is best known as the source of the famous quotation \"Je pense, donc je suis\" (\"I think, therefore I am\", or \"I a\n[…]\nDiscourse on the Method is one of the most influential works in the history of modern philosophy, and important to the development of natural sciences. In this work, Descartes tackles the problem of skepticism, which had previously been studied by other philosophers.\n[…]\nDescartes begins by allowing himself some wit:\n[…]\nFinally, Descartes states his resolute belief that there is no better use of his time than to cultivate his reason and to advance his knowledge of the truth according to his method.\n[…]\nThe discourse ends with some discussion of scientific experimentation: Descartes believes that experimentation is indispensable, time-consuming, and yet not easily delegated to others. He exhorts the reader to investigate the claims laid out in Dioptrique, Météores, and Géométrie and communicate their findings or criticisms to his publisher; he commits to publishing any such queries he receives along with his answers.\n[…]\nDescartes, René (1637). Discours de la méthode pour bien conduire sa raison et chercher la vérité dans les sciences, plus la dioptrique, les météores et la géométrie (in French), BnF Gallica{{cite book}}:  CS1 maint: postscript (link)\n[…]\nDiscourse on the Method at Project Gutenberg\n[…]\nDiscours de la Méthode at Project Gutenberg (édition Victor Cousin, Paris 1824)\n[…]\nDiscours de la méthode, par Adam et Tannery, Paris 1902. (academic standard edition of the original text, 1637), Pdf, 80 pages, 362 kB.\n[…]\nContains Discourse on the Method, slightly modified for easier reading"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Discurso_sobre_o_M%C3%A9todo",
        "situacao": "ok",
        "texto": "O Discurso sobre o método, por vezes traduzido como Discurso do método, ou ainda Discurso sobre o método para bem conduzir a razão na busca da verdade dentro da ciência (em francês, Discours de la méthode pour bien conduire sa raison, et chercher la vérité dans les sciences), é um tratado matemático e filosófico de René Descartes, publicado em Leiden, Holanda, em 1637. Inicialmente apareceu junto \n[…]\nDiscurso sobre o método foi escrito em vernáculo (os textos filosóficos costumavam ser escritos em latim), de maneira não-doutrinária, pois Descartes tentou popularizar ao máximo os conceitos ali expressos e de maneira não impositiva, porém compartilhada. Em toda a obra permeia a autoridade da razão, conceito banal para o homem moderno, mas um tanto novo para o homem medieval (muito mais acostumado à autoridade eclesiástica).\n[…]\nNa sexta parte, estão apontadas as razões que o levaram a escrever o tratado e aquilo que Descartes acredita ser essencial para o progresso do conhecimento. Esta última parte do Discurso trata de vários assuntos. Um aspecto importante na filosofia de Descartes é sua concepção de homem em dualidade corpo-espírito.\n[…]\nDada a primeira máxima, o filósofo francês estabelece a segunda, que consiste em ter firmeza e ser o mais decidido possível na realização de suas ações, seguindo as opiniões mais duvidosas somente após ele considerá-las muito seguras, isto é, uma vez que a opinião duvidosa fosse esclarecida e passasse a ser segura, ele a seguiria decididamente. Para esclarecer a segunda máxima, Descartes faz uso da metáfora dos viajantes perdidos na floresta:\n[…]\nDescartes diz que algumas razões/motivos o levaram a seguir seu método:\n[…]\nDESCARTES, René. Discurso do método; Meditações; Objeções e respostas; As paixões da alma; Cartas. 2. ed. Tradução: J. Guinsburg e Bento Prado Júnior. São Paulo: Abril Cultural, 1979.\n[…]\n«Discurso do método»\n[…]\n«Discourse on method» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Ética (Spinoza)",
      "descricao": "Obra principal de Baruch Spinoza, publicada em 1677, escrita em forma de definições, axiomas e proposições."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A Ética, de Spinoza, é organizada em definições, axiomas e demonstrações, imitando o método de que ramo da matemática?",
    "resposta": "Geometria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ethics_(Spinoza_book)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ethics_(Spinoza_book)",
        "situacao": "ok",
        "texto": "Ethics, Demonstrated in Geometrical Order (Latin: Ethica, ordine geometrico demonstrata) is a philosophical treatise written in Latin by Baruch Spinoza (Benedictus de Spinoza). It was written between 1661 and 1675 and was first published posthumously in 1677.\n[…]\nThe Ethics is perhaps the most ambitious attempt to apply Euclid's method in philosophy, which was referred to as “more geometrico” which in Latin meant “in a geometrical manner”.\n[…]\nThis encompasses knowledge of the features common to all things, and includes principles of physics and geometry. We can also have \"knowledge of the third kind\", or \"intuitive knowledge\". This is a sort of knowledge that, somehow, relates particular things to the nature of God.\n[…]\nHis frequent use of geometrical illustrations affords no evidence at all in support of a purely logico-mathematical interpretation of his philosophy; for Spinoza regarded geometrical figures, not in a Platonic or static manner, but as things traced out by moving particles or lines, etc., that is, dynamically.\n[…]\nCurley, Edwin M. Behind the Geometrical Method. A Reading of Spinoza's Ethics, Princeton: Princeton University Press, 1988.\n[…]\nKisner, Matthew J., ed. Spinoza: Ethics Demonstrated in Geometrical Order. trans. Michael Silverthorne and Matthew J. Kisner. Cambridge: Cambridge University Press 2018.\n[…]\nKrop, H. A., 2002, Spinoza Ethica, Amsterdam: Bert Bakker. Later editions, 2017, Amsterdam: Prometheus. In Dutch with Latin text by Spinoza.\n[…]\nEthicaDB Archived 2012-10-30 at the Wayback Machine hosts translations in several languages.\n[…]\n\"Mapping Spinoza's Ethics\": visual representations of the connections between propositions in the Ethics.\n[…]\nEthicaweb Hyperlinked Ethica's propositions, including defined and undefined philosophical terms."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%89tica_%28Espinoza%29",
        "situacao": "ok",
        "texto": "A Ética ou Ética demonstrada à maneira dos geômetras (em latim: Ethica, ordine geometrico demonstrata), geralmente referida apenas como Ética de Espinoza, é considerada a principal obra do filósofo holandês de origem portuguesa Baruch Espinoza. Foi publicada postumamente, em 1677, ano da morte do autor.\n[…]\nA Ética está organizada segundo um método axiomático-dedutivo inspirado na geometria euclidiana visando garantir a certeza dos resultados, embora à custa de uma leitura não especialmente fácil.\n[…]\nApós a publicação, em 1663, de Princípios da Filosofia Cartesiana (Renati Des Cartes Principiorum Philosophiae pars I et II), caracterizado pela exposição more geométrico (\"ao modo geométrico\") que seria também típica da obra-prima de Espinoza, o filósofo fez circular entre alguns amigos um novo projeto da Ética, ainda provisório, se bem que ele próprio considerasse a obra quase completa; nesta fase a obra era intitulada Philosophia.\n[…]\nA exposição do conteúdo de Ética, tal como especificado no título, é pois organizada segundo um método \"geométrico\" baseado no modelo axiomático-dedutivo da geometria euclidiana. Espinoza começa por enunciar axiomas e definições com base nos quais demonstra as proposições com os seus eventuais corolários.\n[…]\nEmanuela Scribano (2008). Guida alla lettura dell'\"Etica\" di Spinoza. Roma-Bari: Laterza. ISBN 978-88-420-8732-8\n[…]\nBaruch Spinoza (2013). Etica dimostrata secondo l'ordine geometrico. Milano: Bompiani. Trad.: Durante. Org.: G. Gentile, G. Radetti. ISBN 978-88-452-5898-5\n[…]\nBaruch Spinoza (2010). Etica dimostrata con metodo geometrico. Milano: PGreco. Org. Emilia Giancotti. ISBN 978-88-95563-20-6\n[…]\n«Spinoza's Ethics, reconstrução esquemática da Ética', em forma gráfica.» (em inglês)\n[…]\n«Dizionario di filosofia Etica (Ethica)» (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Timeu",
      "descricao": "Diálogo de Platão sobre a origem do universo, que associa os elementos a sólidos geométricos."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "No diálogo Timeu, Platão associa cada elemento a um sólido geométrico. Que sólido ele atribui à terra?",
    "resposta": "Cubo",
    "distratores": [
      "Tetraedro",
      "Octaedro",
      "Icosaedro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Platonic_solid",
      "https://en.wikipedia.org/wiki/Timaeus_(dialogue)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Platonic_solid",
        "situacao": "ok",
        "texto": "In geometry, a Platonic solid is a convex, regular polyhedron in three-dimensional Euclidean space. Being a regular polyhedron means that the faces are congruent (identical in shape and size) regular polygons (all angles congruent and all edges congruent), and the same number of faces meet at each vertex.\n[…]\nGeometers have studied the Platonic solids for thousands of years. They are named for the ancient Greek philosopher Plato, who hypothesized in one of his dialogues, the Timaeus, that the classical elements were made of these regular solids.\n[…]\nThe Platonic solids are prominent in the philosophy of Plato, their namesake. Plato wrote about them in the dialogue Timaeus c. 360 B.C. in which he associated each of the four classical elements (earth, air, water, and fire) with a regular solid. Earth was associated with the cube, air with the octahedron, water with the icosahedron, and fire with the tetrahedron. Of the fifth Platonic solid, the dodecahedron, Plato obscurely remarked, \"...\n[…]\nThe following geometric argument is very similar to the one given by Euclid in the Elements:\n[…]\nGeometry of space frames is often based on platonic solids. In the MERO system, Platonic solids are used for naming convention of various space frame configurations. For example, ⁠1/2⁠O+T refers to a configuration made of one half of octahedron and a tetrahedron.\n[…]\nAtiyah, Michael; Sutcliffe, Paul (2003). \"Polyhedra in Physics, Chemistry and Geometry\". Milan J. Math. 71: 33–58. arXiv:math-ph/0303071. Bibcode:2003math.ph...3071A. doi:10.1007/s00032-003-0014-1. S2CID 119725110.\n[…]\nEuclid (1980) [1st pub. 1956]. Heath, Thomas L. (ed.). The Thirteen Books of Euclid's Elements, Books 10–13 (2nd unabr. ed.). New York: Dover Publications. ISBN 0-486-60090-4.\n[…]\nBook XIII of Euclid's Elements."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Timaeus_(dialogue)",
        "situacao": "ok",
        "texto": "Timaeus (; Ancient Greek: Τίμαιος, romanized: Timaios, pronounced [tǐːmai̯os]), written c. 360 BC, is one of Plato's dialogues, mostly in the form of long speeches by Timaeus and Critias. It is perhaps most noteworthy for its argument for the existence of a \"craftsman\" (Demiurge, Gk. demiourgos) by Timaeus. The speech goes on to present cosmological speculations about a World Soul, the creation of\n[…]\nTimaeus claims that the minute particle of each element had a special geometric shape: tetrahedron (fire), octahedron (air), icosahedron (water), and cube (earth).\n[…]\nThe Timaeus was translated into Latin first by Marcus Tullius Cicero around 45 BC (sections 27d–47b), and later by Calcidius in the 4th century AD (up to section 53c). Cicero's fragmentary translation was highly influential in late antiquity, especially on Latin-speaking Church Fathers such as Saint Augustine who did not appear to have access to the original Greek dialogue.\n[…]\nCalcidius's more extensive translation of the Timaeus had a strong influence on medieval Neoplatonic cosmology and was commented on particularly by 12th-century Christian philosophers of the Chartres School, such as Thierry of Chartres and William of Conches, who, interpreting it in the light of the Christian faith, understood the dialogue to refer to a creatio ex nihilo.\n[…]\nCalcidius himself never explicitly linked the Platonic creation account in the Timaeus with the Old Testament's own in Genesis in his commentary on the dialogue.\n[…]\nIn his introduction to Plato's Dialogues, 19th-century translator Benjamin Jowett comments, \"Of all the writings of Plato, the Timaeus is the most obscure and repulsive to the modern reader.\"\n[…]\nMiller, Harold W. \"The Aetiology of Disease in Plato's Timaeus,\" Transactions and Proceedings of the American Philological Association\n[…]\nTimaeus, in a collection of Plato's Dialogues at Standard Ebooks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%B3lido_plat%C3%B3nico",
        "situacao": "ok",
        "texto": "Um sólido platônico ou poliedro regular, na geometria, é um poliedro convexo em que:\n[…]\nOs sólidos platônicos são destaque na filosofia de Platão. O filósofo escreveu sobre eles no diálogo Timeu, 360 a.C., no qual associou cada um dos quatro elementos clássicos (terra, ar, água e fogo) a um sólido regular. A terra foi associada com o cubo, o ar com o octaedro, a água com o icosaedro, e o fogo com o tetraedro. Havia uma justificativa intuitiva para estas associações. O calor do fogo parece afiado e agudo (como o pequeno tetraedro).\n[…]\nO ar é feito do octaedro, pois seus minúsculos componentes são tão suaves que mal podem ser sentidos. À água associou o icosaedro, pois flui da mão quando apanhada, como se fosse feita de pequenas bolinhas. Por outro lado, um sólido não esférico, o hexaedro (cubo) representa a \"terra\". Além disso, por ser o único sólido regular que representa o espaço euclidiano, acreditava-se que o cubo fosse o que possibilitava solidez à Terra.\n[…]\nEuclides realizou uma descrição matemática dos sólidos platônicos na obra Elementos, sendo seu último livro (Livro XIII) destinado às suas propriedades. As proposições 13-17 do Livro XIII descrevem a construção do tetraedro, octaedro, cubo, icosaedro e dodecaedro nesta mesma ordem. Para cada sólido, Euclides encontrou a relação entre o diâmetro da esfera circunscrita e o comprimento da aresta. Na Proposição 18 ele argumentou o fato de não haverem mais poliedros regulares convexos.\n[…]\nPor snubificação de sólidos platônicos são obtidos dois sólidos de Arquimedes: o cubo snub e o dodecaedro snub.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Arthur Schopenhauer",
      "descricao": "Filósofo alemão (1788–1860), autor de O Mundo como Vontade e Representação."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O pessimista Schopenhauer viveu seus últimos anos em Frankfurt sempre acompanhado de cães de que raça?",
    "resposta": "Poodle",
    "fonte": [
      "https://en.wikipedia.org/wiki/Arthur_Schopenhauer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arthur_Schopenhauer",
        "situacao": "ok",
        "texto": "Arthur Schopenhauer (22 February 1788 – 21 September 1860), also known as the “Philosopher of Pessimism”, was a German philosopher and writer. He is known for his 1818 work The World as Will and Representation (expanded in 1844), which characterizes the phenomenal world as the manifestation of a blind and irrational noumenal will.\n[…]\nIn July 1832, Schopenhauer left Frankfurt for Mannheim but returned in July 1833 to remain there for the rest of his life, except for a few short journeys. He lived alone except for a succession of pet poodles named Atman and Butz. In 1836, he published On the Will in Nature. In 1838, he sent his essay \"On the Freedom of the Will\" to the contest of the Royal Norwegian Society of Sciences in 1838 and won the prize in 1839.\n[…]\nSchopenhauer was very attached to his succession of pet poodles. He criticized Baruch Spinoza's belief that animals are a mere means for the satisfaction of humans. Tim Madigan wrote that despite all of his bombast, Schopenhauer was a sympathetic character who had concerns for the suffering of animals.\n[…]\nSchopenhauer, Arthur (September 1840) [Stated date: 1841.]. Die beiden Grundprobleme der Ethik, behandelt in zwei akademischen Preisschriften (in German). Frankfurt am Main: Johann Christian Hermannsche Buchandlung. Retrieved 15 April 2024. Freely available from Internet Archive. Contains Preisschrift über die Freiheit des Willens and Preisschrift über die Grundlage der Moral.\n[…]\nBather Woods, David (2025). Arthur Schopenhauer: The Life and Thought of Philosophy's Greatest Pessimist. Chicago, Illinois: University of Chicago Press. ISBN 9780226829760.\n[…]\nCopleston, Frederick, Arthur Schopenhauer, Philosopher of Pessimism (Burns, Oates & Washbourne, 1946)\n[…]\nWorks by Arthur Schopenhauer at Project Gutenberg\n[…]\nWorks by Arthur Schopenhauer at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arthur_Schopenhauer",
        "situacao": "ok",
        "texto": "Arthur Schopenhauer (Gdansk, 22 de fevereiro de 1788 – Frankfurt, 21 de setembro de 1860) foi um filósofo alemão. Ele é conhecido por sua obra O Mundo como Vontade e Representação, de 1818 (expandida em 1844), que caracteriza o mundo fenomenal como a manifestação de uma vontade numenal cega e irracional. Com base no idealismo transcendental de Immanuel Kant, Schopenhauer desenvolveu um sistema met\n[…]\nEm 1833, depois de muitas hesitações, o filósofo resolveu fixar-se em Frankfurt, onde permanecera até sua morte em 1860. Durante os vinte e sete anos que passou na cidade, levou uma vida solitária, acompanhado por seu cão. Sua predileção por animais era filosoficamente justificada; segundo Schopenhauer, entre os cães, contrariamente ao que ocorre entre os homens, a vontade não é dissimulada pela máscara do pensamento.\n[…]\nTodo prazer é ponto de partida de novas aspirações, sempre obstadas e sempre em luta por sua realização: \"Viver é sofrer\". Nesse sentido, verifica-se como seu pessimismo não é gratuito, dado que suportado por uma antropologia-metafísica-realista de fundo, apresentando-se, deste modo, como apanágio e característica natural desta. Como preconizou Schopenhauer em O Mundo como Vontade e Representação:\n[…]\n1860 - Schopenhauer morre em 21 de setembro\n[…]\nArthur Hübscher (Hrsg.): Der handschriftliche Nachlaß in fünf Bänden. Edição completa em seis volumes. DTV, Munique 1985; reimpressão inalterada da edição histórico-crítica, Frankfurt am Main.: Waldemar Kramer 1966–1975. [Especificamente: Manuscritos Antigos 1804–1811, disputas críticas 1809–1818, Manuscritos de Berlim 1818–1830 (contém o Eristische Dialektik), Os livros manuscritos dos anos 1830–1852, Últimos Manuscritos/Gracians Handorakel (incl.\n[…]\nLudger Lütkehaus (Hrsg.): Das Buch als Wille und Vorstellung. Arthur Schopenhauers Briefwechsel mit Friedrich Arnold Brockhaus. C.H. Beck, München 1996, ISBN 3-406-40956-3.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "O Mito de Sísifo",
      "descricao": "Ensaio filosófico de Albert Camus publicado em 1942, sobre o absurdo da existência."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Sísifo foi condenado a empurrar uma pedra morro acima para sempre. No fim de seu ensaio, Camus diz que é preciso imaginá-lo como?",
    "resposta": "Feliz",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Myth_of_Sisyphus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Myth_of_Sisyphus",
        "situacao": "ok",
        "texto": "The Myth of Sisyphus (French: Le mythe de Sisyphe, pronounced [lə mit də sizif]) is a 1942 philosophical work by Albert Camus. Influenced by philosophers such as Søren Kierkegaard, Arthur Schopenhauer, and Friedrich Nietzsche, Camus introduces his philosophy of the absurd. The absurd lies in the juxtaposition between the fundamental human need to attribute meaning to life and the \"unreasonable sil\n[…]\nThe essay concludes, \"The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy.\"\n[…]\nHe does not have hope, but \"there is no fate that cannot be surmounted by scorn.\" Acknowledging the truth will conquer it; Sisyphus, just like the absurd man, continues pushing. Camus claims that when Sisyphus acknowledges the futility of his task and the certainty of his fate, he is freed to realize the absurdity of his situation and to reach a state of contented acceptance.\n[…]\nWith a nod to the similarly cursed Greek hero Oedipus, Camus concludes that \"all is well,\" continuing \"one must imagine Sisyphus happy.\"\n[…]\n\"I leave Sisyphus at the foot of the mountain! One always finds one's burden again. But Sisyphus teaches the higher fidelity that negates the gods and raises rocks. He too concludes that all is well. This universe henceforth without a master seems to him neither sterile nor futile. Each atom of that stone, each mineral flake of that night filled mountain, in itself forms a world. The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy.\"\n[…]\nCamus, Albert (1955). The Myth of Sisyphus and Other Essays. New York: Alfred A. Knopf. ISBN 0-679-73373-6. {{cite book}}: ISBN / Date incompatibility (help)\n[…]\nChapter 4 of the essay The Myth of Sisyphus, by Albert Camus\n[…]\nSuicide and Atheism: Camus and The Myth of Sisyphus at the Wayback Machine (archived 12 October 2007) by Richard Barnett"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Mito_de_S%C3%ADsifo",
        "situacao": "ok",
        "texto": "O mito de Sísifo é um ensaio filosófico escrito por Albert Camus em 1942. Influenciado por filósofos como Søren Kierkegaard, Arthur Schopenhauer e Friedrich Nietzsche, Camus introduz sua filosofia do absurdo. O absurdo reside na justaposição entre a necessidade humana fundamental de atribuir sentido à vida e o \"silêncio irracional\" do universo em resposta.\n[…]\nNo capítulo final, Camus compara o absurdo da vida humana com a situação de Sísifo, figura da mitologia grega condenada a repetir eternamente a mesma tarefa sem sentido de empurrar uma pedra montanha acima, apenas para que ela role montanha abaixo assim que chegue ao topo.\n[…]\nCamus escreveu O Mito de Sísifo tendo como pano de fundo a filosofia europeia do início do século XX, particularmente o existencialismo e a fenomenologia. Embora frequentemente agrupado com pensadores existencialistas, Camus rejeitou consistentemente o rótulo de existencialista, insistindo que sua filosofia do absurdo era distinta tanto do salto de fé de Kierkegaard quanto da ontologia do Ser de Heidegger.\n[…]\nNo último capítulo, Camus esboça o mito de Sísifo, que desafiou os deuses: quando capturado sofreu uma punição: para toda eternidade, ele teria de empurrar uma pedra de uma montanha até o topo; a pedra então rolaria para baixo e ele novamente teria que começar tudo. Camus vê em Sísifo o ser que vive a vida ao máximo, odeia a morte e é condenado a uma tarefa sem sentido, como o herói absurdo. Não obstante reconheça a falta de sentido, Sísifo continua executando sua tarefa diária.\n[…]\nO ensaio contém um apêndice intitulado \"A esperança e o absurdo na obra de Franz Kafka\". Embora Camus reconheça que o trabalho de Kafka representa uma descrição requintada da condição absurda, ele sustenta que Kafka falha como escritor absurdo porque seu trabalho retém um vislumbre de esperança.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Hannah Arendt",
      "descricao": "Pensadora política alemã naturalizada americana (1906–1975), autora de Origens do Totalitarismo e Eichmann em Jerusalém."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Hannah Arendt recusava ser chamada de filósofa. Que campo ela dizia ser o seu?",
    "resposta": "Teoria política",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hannah_Arendt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hannah_Arendt",
        "situacao": "ok",
        "texto": "Hannah Arendt (born Johanna Arendt; 14 October 1906 – 4 December 1975) was a German and American historian and philosopher. She was one of the most influential political theorists of the twentieth century.\n[…]\nHannah's extended family contained many more women, who shared the loss of husbands and children. Hannah's parents were more educated and politically more to the left than her grandparents. The young couple were Social Democrats, rather than the German Democrats that most of their contemporaries supported. Paul Arendt was educated at the Albertina (University of Königsberg).\n[…]\nHer life and work is recognized by the institutions most closely associated with her teaching, by the creation of Hannah Arendt Centers at both Bard (Hannah Arendt Center for Politics and Humanities) and The New School, both in New York State. In Germany, her contributions to understanding authoritarianism is recognised by the Hannah-Arendt-Institut für Totalitarismusforschung (Hannah Arendt Institute for the Research on Totalitarianism) in Dresden.\n[…]\nThere are Hannah Arendt Associations (Hannah Arendt Verein) such as the Hannah Arendt Verein für politisches Denken in Bremen that awards the annual Hannah-Arendt-Preis für politisches Denken (Hannah Arendt Prize for Political Thinking) established in 1995.\n[…]\nIn Oldenburg, the Hannah Arendt Center at Carl von Ossietzky University was established in 1999, and holds a large collection of her work (Hannah Arendt Archiv), and administers the internet portal HannahArendt.net (A Journal for Political Thinking) as well as a monograph series, the Hannah Arendt-Studien. In Italy, the Hannah Arendt Center for Political Studies is situated at the University of Verona."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hannah_Arendt",
        "situacao": "ok",
        "texto": "Hannah Arendt (nascida Johanna Arendt; Linden, 14 de outubro de 1906 – Nova Iorque, Estados Unidos, 4 de dezembro de 1975) foi uma filósofa política alemã de origem judaica, uma das mais influentes do século XX. Notabilizou-se por suas reflexões sobre o totalitarismo e pela criação do conceito de banalidade do mal.\n[…]\nContudo, recusava ser classificada como \"filósofa\" e também se distanciava do termo \"filosofia política\"; preferia que suas publicações fossem classificadas dentro da \"teoria política\".\n[…]\nJustamente graças ao seu pensamento independente, a teoria do totalitarismo (Theorie der totalen Herrschaft), seus trabalhos sobre filosofia existencial e sua reivindicação da discussão política livre, Arendt tem um papel central nos debates contemporâneos.\n[…]\nHannah Arendt explica cada tipo de governo através da organização política interna e as técnicas de administração. O que ela chama de Tirania remete aos tipos de governo fundados nas ideias trazidas por Platão, em A República, onde existe a política de \"um contra todos\" feita por um líder, ou seja, \"os 'todos' que ele oprime são iguais, a saber, igualmente desprovidos de poder\". Este líder seria fonte da Lei e governaria de acordo com as suas próprias vontades.\n[…]\nO trabalho filosófico de Hannah Arendt abarca temas como a política, a autoridade, o totalitarismo, a educação, a condição laboral, a violência e a condição feminina.\n[…]\nHannah Arendt (filme)\n[…]\n1989: Lições sobre a filosofia política de Kant (Lectures on Kant´s political philosophy). Rio de Janeiro: Relume Dumará, 1993 (ISBN 9788585427948).\n[…]\nThe American Library of Congress: The Role of Experience in Hannah Arendt's Political Thought: Three Essays by Jerome Kohn, Director, Hannah Arendt Center, New School University.\n[…]\nHannah Arendt. Jewish Virtual Library.\n[…]\nHannah Arendt: Biography. FemBio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Estoicismo",
      "descricao": "Escola filosófica fundada por Zenão de Cítio em Atenas por volta de 300 a.C., que pregava a virtude e o domínio das paixões."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O estoicismo ganhou esse nome por causa do lugar onde Zenão de Cítio ensinava, em Atenas. Que tipo de construção era?",
    "resposta": "Um pórtico (a Stoa Pintada)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stoicism",
      "https://en.wikipedia.org/wiki/Stoa_Poikile"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stoicism",
        "situacao": "ok",
        "texto": "Stoicism is a philosophical movement and practical guide to living, emphasizing daily self-discipline and moral improvement, which originated in the Hellenistic period of ancient Greece and continued well into the Roman Imperial period. The ancient Stoics believed that the universe operated according to reason, or logos, providing a unified account of the world, constructed from ideals of rational\n[…]\nStoicism was founded in the ancient Agora of Athens by Zeno of Citium around 300 BCE, and flourished throughout the Greco-Roman world until the 3rd century CE. Stoicism emerged from the Cynic tradition and was popularized through public teaching at the Stoa Poikile, a painted colonnade. Among its adherents was Roman Emperor Marcus Aurelius.\n[…]\nThe name Stoicism derives from the Stoa Poikile (Ancient Greek: ἡ ποικίλη στοά), or \"painted porch\", a colonnade decorated with mythic and historical battle scenes on the north side of the Agora in Athens where Zeno of Citium and his followers gathered to discuss their ideas, near the end of the fourth century BCE. Unlike the Epicureans, Zeno chose to teach his philosophy in a public space. Stoicism was originally known as Zenonism.\n[…]\nScholars usually divide the history of Stoicism into three phases: the Early Stoa, from Zeno's founding to Antipater; the Middle Stoa, including Panaetius and Posidonius; and the Late Stoa, including Musonius Rufus, Seneca, Epictetus, and Marcus Aurelius. No complete works survived from the first two phases of Stoicism. Only Roman texts from the Late Stoa survived.\n[…]\nbut the logic that made it all possible was the interconnected logic of an interconnected universe, discovered by the ancient Chrysippus, who labored long ago under an old Athenian stoa.\n[…]\nBarnes, Johnathan (1997), Logic and the Imperial Stoa, Brill, ISBN 90-04-10828-9\n[…]\nModern Stoicism Organization\n[…]\nCentre for the Study and Application of Stoicism\n[…]\nStoa Nova"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stoa_Poikile",
        "situacao": "ok",
        "texto": "The Stoa Poikile (Ancient Greek: ἡ ποικίλη στοά, hē poikílē stoá) or Painted Portico was a Doric stoa (a covered walkway or portico) erected around 460 BC on the north side of the Ancient Agora of Athens. It was one of the most famous sites in ancient Athens, owing its fame to the paintings and war-booty displayed within it and to its association with ancient Greek philosophy, especially Stoicism.\n[…]\nFrom the fourth century BC onwards, philosophers often taught in the stoa. The homeless Cynic philosopher Crates spent his time there. His student, Zeno of Citium, was particularly closely associated with the stoa, where he taught from around 300 BC until his death c. 262 BC. The philosophical school that he founded was named Stoicism as a result. The late third-century BC comedian Theognetus refers to \"trifling arguments from the Poikile Stoa\" in a joke about philosophers.\n[…]\nThe structure was demolished before or during the construction of the Late Roman Stoa in the 5th century AD. The west pier was then  used as the base for a columnar monument; the Ionic base is still in situ on top of it.\n[…]\nTodini, Lellida (2008). \"Παλαιά τε καὶ καινά. Erodoto e il ciclo figurativo della Stoà Poikile\". Historia: Zeitschrift für Alte Geschichte. 57 (3): 255–262. doi:10.25162/historia-2008-0014. ISSN 0018-2311. JSTOR 25598434.\n[…]\nLuginbill, Robert D. (2014). \"The Battle of Oinoe, the Painting in the Stoa Poikile, and Thucydides' Silence\". Historia: Zeitschrift für Alte Geschichte. 63 (3): 278–292. doi:10.25162/historia-2014-0015. ISSN 0018-2311. JSTOR 24432809.\n[…]\nMedia related to Stoa Poikile at Wikimedia Commons\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Stoa Poikile\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\nStoa Poikile on the page of the Agora Excavations, American School of Classical Studies in Athens"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estoicismo",
        "situacao": "ok",
        "texto": "O estoicismo é uma filosofia helenística que floresceu na Grécia e Roma antigas. Os estóicos acreditavam que o universo operava de acordo com a razão, ou seja, por um Deus que está imerso na própria natureza. De todas as escolas de filosofia antiga, o estoicismo fez a maior afirmação de ser totalmente sistemático.\n[…]\nO estoicismo foi fundado na antiga Ágora de Atenas por Zenão de Cítio por volta de 300 a.C. e floresceu em todo o mundo greco-romano até o século III d.C. O estoicismo emergiu da tradição cínica e foi popularizado através do ensino público no Pórtico Pintado, uma colunata pintada. Entre seus adeptos estava o imperador romano Marco Aurélio.\n[…]\nO nome estoicismo deriva de Stoa Poikile (em grego clássico: ἡ ποικίλη στοά; romaniz.: pórtico pintado), uma colunata decorada com cenas de batalhas míticas e históricas no lado norte da Ágora de Atenas, onde Zenão de Cítio e seus seguidores se reuniam para discutir suas ideias, perto do final do século IV a.C. Ao contrário dos epicuristas, Zenão escolheu ensinar sua filosofia em um espaço público. O estoicismo era originalmente conhecido como zenonismo.\n[…]\nZenão favoreceu o amor sobre o desejo, esclarecendo que o objetivo final da sexualidade deveria ser a virtude e a amizade. Entre os estoicos posteriores, Epicteto manteve o sexo homossexual e heterossexual como equivalentes neste campo, e condenou apenas o tipo de desejo que levava alguém a agir contra o julgamento.\n[…]\nmas a lógica que tornou tudo isso possível foi a lógica interconectada de um universo interconectado, descoberta pelo antigo Crisipo, que trabalhou há muito tempo sob uma antiga stoa ateniense.\n[…]\n«O Antigo Estoicismo, por Émile Bréhier»\n[…]\n«De vita stoica». , site dedicado a aplicações contemporâneas da filosofia estoica\n[…]\nSite O Estoico www.estoico.com.br",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Cinismo (escola filosófica)",
      "descricao": "Escola filosófica grega de Antístenes e Diógenes, que pregava uma vida simples e contrária às convenções."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra cínico, nome da escola filosófica de Diógenes, vem do termo grego para que animal?",
    "resposta": "Cão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cynicism_(philosophy)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cynicism_(philosophy)",
        "situacao": "ok",
        "texto": "Cynicism (Ancient Greek: κυνισμός) is a school of thought in ancient Greek philosophy, originating in the Classical period and extending into the Hellenistic and Roman Imperial periods. According to Cynicism, people are reasoning animals, and the purpose of life and the way to gain happiness is to achieve virtue, in agreement with nature, following one's natural sense of reason by living simply an\n[…]\nLucian complained that Cynics could be found throughout the empire, standing on street corners, preaching about virtue, writing that \"every city is filled with such upstarts, particularly with those who enter the names of Diogenes, Antisthenes, and Crates as their patrons and enlist in the Army of the Dog\", and Aelius Aristides observed that \"they frequent the doorways, talking more to the doorkeepers than to the masters, making up for their lowly condition by using impudence.\" The most notable representative of Cynicism in the 1st century CE was Demetrius, whom Seneca praised as \"a man of consummate wisdom, though he himself denied it, constant to the principles which he professed, of an eloquence worthy to deal with the mightiest subjects.\" Cynicism in Rome was both the butt of the satirist and the ideal of the thinker.\n[…]\nDudley, R. (1937), A History of Cynicism from Diogenes to the 6th Century A.D., Cambridge University Press\n[…]\nEpictetus, Discourse 3.22, On Cynicism\n[…]\nIan Cutler, (2005), Cynicism from Diogenes to Dilbert. McFarland & Co. ISBN 0-7864-2093-6\n[…]\nLuis E. Navia, (1996), Classical Cynicism: A Critical Study. Greenwood Press. ISBN 0-313-30015-1\n[…]\nLousa Shea (2009), The Cynic Enlightenment: Diogenes in the Salon Johns Hopkins University Press.\n[…]\nCynicism on In Our Time at the BBC\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Cynicism (philosophy)\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658.\n[…]\n\"Cynicism\", in The Dictionary of the History of Ideas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cinismo",
        "situacao": "ok",
        "texto": "O cinismo (em grego clássico: κυνισμός kynismós, em latim cinicus) foi uma corrente filosófica fundada por Antístenes, discípulo de Sócrates e como tal praticada pelos cínicos (em grego clássico: Κυνικοί, latim: Cynici). Para os cínicos, o propósito da vida era viver na virtude, de acordo com a natureza.\n[…]\nO primeiro filósofo a definir o cinismo foi Antístenes, ex-aluno de Sócrates no final do século V a.C. Ele foi seguido por Diógenes de Sinope, que vivia dentro de um jarrão de cerâmica em Atenas, e que levou o cinismo aos seus extremos lógicos e passou a ser visto como o arquétipo do filósofo cínico, sua autarkeia (autossuficiência) e a apatheia perante as vicissitudes da vida eram os ideais do cinismo.\n[…]\nPor volta do século XIX, a ênfase sobre os aspectos negativos da filosofia cínica levou ao entendimento moderno de cinismo a significar uma disposição de descrença na sinceridade ou bondade das motivações e ações humanas e como caraterização de pessoas que desprezam as convenções sociais. Para encorajar as pessoas a renunciarem aos desejos criados pela civilização e convenções, os cínicos empreenderam uma cruzada de escárnio antissocial e assim mostrar as frivolidades da vida social.\n[…]\nOs cínicos clássicos seguiram esta filosofia a ponto de negligenciarem tudo que não promovesse a perfeição da virtude e alcance da felicidade, assim, o título cínicos, deriva da palavra em grego κύων (significando \"cão\") porque supostamente negligenciavam a sociedade, a higiene, a família, o dinheiro, etc, de uma forma que lembra os cães. Eles procuraram libertar-se de convenções; tornando-se autossuficientes — possuindo autarquia — e vivendo apenas de acordo com a natureza.\n[…]\nO Cinismo foi grande influenciador do estoicismo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Liceu (Aristóteles)",
      "descricao": "Escola fundada por Aristóteles em Atenas, em 335 a.C., num bosque nos arredores da cidade."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O Liceu, escola de Aristóteles em Atenas, tirou o nome de um santuário vizinho. Ele era dedicado a que deus?",
    "resposta": "Apolo",
    "distratores": [
      "Zeus",
      "Atena",
      "Hermes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lyceum_(classical)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lyceum_(classical)",
        "situacao": "ok",
        "texto": "The Lyceum (, Ancient Greek: Λύκειον, romanized: Lykeion /lý.keː.on/) was a temple in Athens dedicated to Apollo Lyceus ().\n[…]\nIn 322 BCE, Aristotle was forced to flee Athens with his family when the political leadership reacted against the Macedonians again and his previously published works supporting Macedonian rule left him a target. He passed on his Lyceum to Theophrastus and died later that year in Chalcis, near his hometown.\n[…]\nScholars and students at the Lyceum include Eudemus, a mathematical historian, Aristoxenus, who wrote works on music, and Dicaearchus, a prolific writer on topics including ethics, politics, psychology and geography. Additionally, medical historian Meno, and an eventual ruler of Athens, Demetrius of Phaleron, spent time at the school. Demetrius of Phaleron ruled Athens as a proxy leader for a dynasty from 307 BCE.\n[…]\nDuring a 1996 excavation to clear space for Athens' new Museum of Modern Art, the remains of Aristotle's Lyceum were uncovered. Descriptions from the works of ancient heirs hint at the location of the grounds, speculated to be somewhere just outside the eastern boundary of ancient Athens, near the rivers Ilissos and Eridanos, and close to Lycabettus Hill.\n[…]\nLyceum movement\n[…]\n\"Aristotle's Lyceum opens to the public\". Greece National Tourist Office. 2014. Retrieved 22 November 2016.\n[…]\n\"Lyceum of Aristotle in Athens to open to public as archaeological site\". Archived from the original on 2 March 2012. Retrieved 27 October 2011.\n[…]\nIsle, Mick (15 December 2005). Aristotle: Pioneering Philosopher and Founder of the Lyceum. The Rosen Publishing Group, Inc. ISBN 978-1-4042-0499-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liceu_%28cl%C3%A1ssico%29",
        "situacao": "ok",
        "texto": "O Liceu (em grego clássico: Λύκειον) era um templo em Atenas dedicado a Apolo Lício (“Apolo, o deus-lobo”).\n[…]\nO Liceu foi nomeado em homenagem ao deus grego Apolo Lício. Inicialmente, um santuário dedicado ao culto de Lício, mais tarde tornou-se uma área pública de exercício, com a construção posterior de um ginásio. Não se sabe quando esse culto foi introduzido em Atenas nem quando o Liceu se tornou o santuário.\n[…]\nO Liceu foi empregado como local para discussão filosófica antes da fundação da escola de Aristóteles. Sócrates, Protágoras e Pródico de Ceos foram até o Liceu no século V a.C. para ensinar, debater e apresentar suas descobertas. Isócrates também ensinou retórica no Liceu no século IV a.C. Aristóteles retornou a Atenas em 335 a.C.\n[…]\nEm 335 a.C., Atenas passou ao domínio da Macedônia, e Aristóteles, então com 50 anos, retornou da Ásia. Ao voltar, Aristóteles começou a lecionar no Liceu pela manhã e fundou ali oficialmente uma escola chamada “O Liceu”. Após as aulas matutinas, frequentemente Aristóteles discursava pelo local para o público em geral, e compilações de suas palestras circulavam posteriormente em formato de manuscrito.\n[…]\nHá quem acredite que o Liceu foi refundado no século I d.C. por Andrônico de Rodes e voltou a florescer como escola filosófica no século II, continuando até os ataques dos Hérulos e Godos a Atenas em 267.\n[…]\nA localização do Liceu é: 37° 58′ 26,67″ N, 23° 44′ 36,61″ L.\n[…]\nEscola de Aristóteles\n[…]\nMovimento do Liceu\n[…]\nIsle, Mick (15 December 2005). Aristotle: Pioneering Philosopher and Founder of the Lyceum. The Rosen Publishing Group, Inc. ISBN 978-1-4042-0499-7.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Tábula rasa",
      "descricao": "Expressão latina para a ideia de que a mente nasce vazia, como uma folha em branco, associada a John Locke."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A expressão tábula rasa compara a mente de quem nasce a uma tabuleta romana alisada para se escrever de novo. Ela era coberta de quê?",
    "resposta": "Cera",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tabula_rasa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tabula_rasa",
        "situacao": "ok",
        "texto": "Tabula rasa (; Latin for \"blank slate\") is the idea of individuals being born empty of any built-in mental content, so that all knowledge comes from later perceptions or sensory experiences.\n[…]\nAll that seems to me to explain itself very clearly if we compare children's imagination to a tabula rasa on which our ideas, which resemble portraits of each object taken from nature, should depict themselves.\n[…]\nThe modern idea of the theory is attributed mostly to John Locke's expression of the idea in Essay Concerning Human Understanding, particularly using the term \"white paper\" in Book II, Chap. I, 2. In Locke's philosophy, tabula rasa was the theory that at birth the (human) mind is a \"blank slate\" without rules for processing data, and that data is added and rules for processing are formed solely by one's sensory experiences.\n[…]\nLocke's idea of tabula rasa is frequently compared with Thomas Hobbes's viewpoint of human nature, in which humans are endowed with inherent mental content—particularly with selfishness.\n[…]\nIn artificial intelligence, tabula rasa refers to the development of autonomous agents with a mechanism to reason and plan toward their goal, but no \"built-in\" knowledge-base of their environment. Thus, they truly are a blank slate.\n[…]\nAlphaZero achieved superhuman performance in chess and shogi using self-play and tabula rasa reinforcement learning, meaning it had no access to human games or hard-coded human knowledge about either board game, only the rules of the games.\n[…]\nThe dictionary definition of tabula rasa at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/T%C3%A1bula_rasa",
        "situacao": "ok",
        "texto": "Tábula rasa é a tradução para a expressão em latim tabula rasa, que significa literalmente \"tábua raspada\", e tem o sentido de \"folha de papel em branco\".\n[…]\nA palavra tábula, neste caso, refere-se às tábuas cobertas com  fina camada de cera, usadas na antiga Roma para escrever, fazendo-se incisões sobre a cera com uma espécie de estilete. As incisões podiam ser eliminadas ao aquecer a cera, de modo que se pudesse escrever de novo sobre a tábula rasa, isto é, sobre a tábua raspada ou apagada — no caso, sobre a cera resfriada e novamente sólida.\n[…]\nComo metáfora, o conceito de tábula rasa foi utilizado por Aristóteles (em oposição a Platão) e difundido principalmente por Alexandre de Afrodísias, para indicar uma condição em que a consciência é desprovida de qualquer conhecimento inato — tal como uma folha em branco, a ser preenchida. Esta ideia continuou a ser desenvolvida pela filosofia da Grécia Antiga; a epistemologia da escola estoica enfatiza que a mente inicia vazia, mas adquire conhecimento à medida que o mundo exterior impressiona.\n[…]\na mente é, inicialmente, como uma \"folha em branco\"), e todo o processo do conhecer, do saber e do agir é aprendido através da experiência. A partir do século XVII, o argumento da tábula rasa  foi importante não apenas do ponto de vista da filosofia do conhecimento, ao contestar o inatismo de Descartes, mas também do ponto de vista da filosofia política, ao defender que, não havendo ideias inatas, todos os homens nascem iguais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Baruch Spinoza",
      "descricao": "Filósofo holandês (1632–1677), nascido em Amsterdã numa família judia de origem portuguesa, autor da Ética."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Spinoza era chamado de Baruch, em hebraico, e de Bento, em português. Os dois nomes significam o quê?",
    "resposta": "Abençoado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Baruch_Spinoza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baruch_Spinoza",
        "situacao": "ok",
        "texto": "Baruch (de) Spinoza (24 November 1632 – 21 February 1677), also known under his Latinized pen name Benedictus de Spinoza, was a philosopher of Portuguese-Jewish origin who was born and lived in the Dutch Republic. A forerunner of the Enlightenment, Spinoza significantly influenced modern biblical criticism, 17th-century rationalism, and Dutch intellectual culture, establishing himself as one of th\n[…]\nSpinoza's father died in 1654, making Baruch the head of the family, responsible for organizing and leading the Jewish mourning rituals, and in a business partnership with his brother in their inherited firm. As Spinoza's father had poor health for some years before his death, he was significantly involved in the business, putting his intellectual curiosity on hold.\n[…]\nHis expulsion from the Portuguese synagogue in 1656 has stirred debate over the years on whether he is the \"first modern Jew\". Spinoza influenced discussions of the so-called Jewish question, the examination of the idea of Judaism and the modern, secular Jew. Moses Mendelsohn, Lessing, Heine, and Kant, as well as subsequent thinkers, including Marx, Nietzsche, and Freud were influenced by Spinoza.\n[…]\nSome other novels of biographical nature have appeared more recently, such as The Spinoza Problem (2012; a parallel story between the philosopher's formative years, and the fascination that his work had on the Nazi leader Alfred Rosenberg) by psychiatrist Irvin D. Yalom, or O Segredo de Espinosa (lit. \"The Secret of Spinoza\", 2023) by Portuguese journalist José Rodrigues dos Santos. Spinoza also appears in the first novel of the Argentinian activist Andres Spokoiny, El impío (lit.\n[…]\nWorks by Benedictus de Spinoza at Project Gutenberg\n[…]\nWorks by Baruch Spinoza at LibriVox (public domain audiobooks)\n[…]\nWorks by Baruch Spinoza at Open Library\n[…]\nThe Ethics of Benedict de Spinoza, translated by George Eliot, transcribed by Thomas Deegan"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baruch_Espinoza",
        "situacao": "ok",
        "texto": "Baruch (de) Espinoza (nascido português Bento de Espinosa e hebraico: ברוך שפינוזה; Baruch Shpinoza, também referido como Baruch (de) Espinosa ou Baruch Spinoza; mais comumente referenciado na literatura em português como Bento (de) Espinosa e, após o chérem de 1656, como Benedictus de Spinoza Amsterdã, 24 de novembro de 1632 – Haia, 21 de fevereiro de 1677) foi um filósofo de origem judaico-portu\n[…]\nBaruch Espinoza é famoso pela identificação de Deus como Natureza; Deus na concepção spinozista é entendido como a totalidade da realidade, também chamado de \"substância única\", por ter infinitos atributos; \"Deus, sive Natura\" (em latim: Deus, sive Natura; lit. \"Deus, ou Natureza\").\n[…]\nO filósofo recebeu dos pais, que eram judeus portugueses refugiados em Amsterdão, o nome de Bento de Espinosa. Já Baruch é uma transliteração de ברוך, que era como seu nome aparecia nos textos em hebraico daquela época, tendo ele o mesmo significado do seu nome português, isto é, bento, benzido, bendito ou abençoado.\n[…]\nEm 27 de julho de 1656, a Sinagoga Portuguesa de Amsterdão puniu Espinoza com o chérem, o equivalente hebraico da excomunhão católica, em razão dos postulados a respeito de Deus contidos em sua Ética, na qual defende que Deus é o mecanismo imanente da natureza, e que a Bíblia é uma obra metafórico-alegórica, que não pede leitura racional e não exprime a verdade sobre Deus.\n[…]\nAlém dos dois gêneros citados anteriormente, Espinoza afirma ainda um terceiro, chamado beatitude. Esse conhecimento caracteriza-se por compreender, nas coisas singulares, o aspecto da eternidade (sub specie aeternitatis). Seria algo como ver as coisas singulares como inseparáveis dos modos da substância infinita e eterna (Deus), compreendendo que as coisas singulares são elas mesmas eternas, existindo fora do tempo. Esse é um dos conceitos de Espinoza mais controversos e discutidos.\n[…]\n«Spinoza» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Hannah Arendt",
      "descricao": "Pensadora política alemã naturalizada americana (1906–1975), autora de Origens do Totalitarismo e Eichmann em Jerusalém."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Ainda estudante na Alemanha, Hannah Arendt foi aluna e amante de que filósofo, autor de Ser e Tempo?",
    "resposta": "Martin Heidegger",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hannah_Arendt",
      "https://en.wikipedia.org/wiki/Martin_Heidegger"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hannah_Arendt",
        "situacao": "ok",
        "texto": "Hannah Arendt (born Johanna Arendt; 14 October 1906 – 4 December 1975) was a German and American historian and philosopher. She was one of the most influential political theorists of the twentieth century.\n[…]\nHannah Arendt was born to a Jewish family in Linden in 1906. Her father died when she was seven. Arendt was raised in a politically progressive, secular family, her mother being an ardent Social Democrat. After completing secondary education in Berlin, Arendt studied at the University of Marburg under Martin Heidegger, with whom she engaged in a romantic affair that began while she was his student. She obtained her doctorate in philosophy at the University of Heidelberg in 1929.\n[…]\nArendt and Stern begin by stating:\n[…]\nShe had started seeing Martin Heidegger again, and had what the American writer Adam Kirsch called a \"quasi-romance\", lasting for two years, with the man who had previously been her mentor, teacher, and lover. During this time, Arendt defended him against critics who noted his enthusiastic membership in the Nazi Party. She portrayed Heidegger as a naïve man swept up by forces beyond his control, and pointed out that Heidegger's philosophy had nothing to do with National Socialism.\n[…]\nSome further poems were found in her correspondence with Heidegger, Blücher and Broch.\n[…]\nSeveral authors have written biographies that focus on the relationship between Hannah Arendt and Martin Heidegger. In 1999, the French feminist philosopher Catherine Clément wrote a novel, Martin and Hannah, speculating on the triangular relationship between Heidegger and the two women in his life, Arendt and Heidegger's wife Elfriede Petri.\n[…]\nHannah Arendt: Facing Tyranny, PBS American Masters Video"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Martin_Heidegger",
        "situacao": "ok",
        "texto": "Martin Heidegger (26 September 1889 – 26 May 1976) was a German philosopher whose work was central to the development of phenomenology, hermeneutics, and existentialism. He has had significant impact within subsequent philosophy, social sciences and humanities, and theology.\n[…]\nHeidegger was born on 26 September 1889 in rural Meßkirch, Baden, the son of Johanna (née Kempf) and Friedrich Heidegger. His father was the sexton of the village church, and the young Martin was raised Catholic.\n[…]\nOriginal Heidegger manuscripts are kept at the Loyola University Chicago archives. See also \"The transcripts and photocopies of Martin Heidegger's writings were given to Barbara Fiand, SNDdeN, Ph.D., by Fritz Heidegger in 1978\".\n[…]\nMartin Heidegger Collection, ca. 1918–1976\n[…]\nGuide to the Student Notes from Lectures by Martin Heidegger. Special Collections and Archives, The UC Irvine Libraries, Irvine, California.\n[…]\nPublications by and about Martin Heidegger in the catalogue Helveticat of the Swiss National Library\n[…]\nMajority of Heidegger Archives. Online: Deutsches Literaturarchiv in the town of Marbach am Neckar, Germany. Also known as: DLA – German Literature Archive. Most of Martin Heidegger's manuscripts are in the DLA's collection. Search for Heidegger in their Manuscript collections is online here.\n[…]\nW.J. Korab-Karpowicz, Martin Heidegger (1889–1976) in Internet Encyclopedia of Philosophy\n[…]\nA. D. E. Næss, Martin Heidegger in Encyclopædia Britannica\n[…]\nMartin Heidegger, Der Spiegel Interview by Rudolf Augstein and Georg Wolff, 23 September 1966; published 31 May 1976\n[…]\nNewspaper clippings about Martin Heidegger in the 20th Century Press Archives of the ZBW\n[…]\nEnglish translations of Heidegger's works\n[…]\nWorks by or about Martin Heidegger at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hannah_Arendt",
        "situacao": "ok",
        "texto": "Hannah Arendt (nascida Johanna Arendt; Linden, 14 de outubro de 1906 – Nova Iorque, Estados Unidos, 4 de dezembro de 1975) foi uma filósofa política alemã de origem judaica, uma das mais influentes do século XX. Notabilizou-se por suas reflexões sobre o totalitarismo e pela criação do conceito de banalidade do mal.\n[…]\nEntretanto, ela continua sendo estudada como filósofa, em grande parte devido a suas discussões críticas de filósofos como Sócrates, Platão, Aristóteles, Immanuel Kant, Martin Heidegger e Karl Jaspers, além de representantes importantes da filosofia moderna como Maquiavel e Montesquieu.\n[…]\nEm 1924, começa seus estudos na Universidade de Marburg e durante um ano assiste às aulas de filosofia de Martin Heidegger e de Nicolai Hartmann, e as de teologia protestante de Rudolf Bultmann, além de estudar grego.\n[…]\nHeidegger, pai de família de 35 anos, e Arendt, estudante, dezessete anos mais jovem que ele, foram amantes, ainda que tivessem de manter em segredo a relação. No começo de 1926, por não suportar mais tal situação, decidiu trocar de universidade, indo para a Universidade Albert Ludwig de Freiburg, para estudar sob a orientação de Edmund Husserl.\n[…]\nDepois da guerra, Arendt ainda regressaria à Alemanha e reencontraria o seu antigo mentor Martin Heidegger, que estava afastado do ensino, dadas as suas simpatias pelo nazismo. Envolver-se-ia, pessoalmente, na reabilitação do filósofo alemão, o que lhe valeria severas críticas das associações judaicas americanas.\n[…]\nDo relacionamento de ambos, ao longo de décadas (inclusive durante o exílio nos Estados Unidos), seria publicado um livro marcante, Lettres et autres documents, 1925-1975, Hannah Arendt, Martin Heidegger, com edição alemã e tradução francesa da responsabilidade das éditions Gallimard.\n[…]\nFilosofia alemã\n[…]\nHannah Arendt: Biography. FemBio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Thomas Hobbes",
      "descricao": "Filósofo político inglês (1588–1679), autor de Leviatã."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Antes de ficar famoso, Thomas Hobbes trabalhou como secretário de que filósofo e estadista inglês, defensor do método experimental?",
    "resposta": "Francis Bacon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Hobbes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Hobbes",
        "situacao": "ok",
        "texto": "Thomas Hobbes ( HOBZ; 5 April 1588 – 4 December 1679) was an English philosopher and political theorist, best known for his 1651 book Leviathan, in which he expounds an influential formulation of social contract theory. He is considered to be one of the founders of modern political philosophy.\n[…]\nAs a result, the family was left in the care of Thomas Sr.'s older brother, Francis, a wealthy glove manufacturer with no family of his own.\n[…]\nAlthough he did associate with literary figures like Ben Jonson and briefly worked as Francis Bacon's amanuensis, translating several of his Essays into Latin, he did not extend his efforts into philosophy until after 1629. In June 1628, his employer Cavendish, then the Earl of Devonshire, died of the plague, and his widow, the countess Christian, dismissed Hobbes.\n[…]\nNatural and legal rights § Thomas Hobbes\n[…]\nHobbesian trap\n[…]\nMartinich, A. P. (1997). Thomas Hobbes, New York: St. Martin's Press.\n[…]\nRogow, Arnold A. (1986). Thomas Hobbes: Radical in the Service of Reaction, New York and London: W. W. Norton & Company. ISBN 0-393-02288-9.\n[…]\nStomp, Gabriella (ed.) (2008). Thomas Hobbes, Aldershot: Ashgate.\n[…]\nWorks by Thomas Hobbes at Project Gutenberg\n[…]\nWorks by or about Thomas Hobbes at the Internet Archive\n[…]\nWorks by Thomas Hobbes at LibriVox (public domain audiobooks)\n[…]\nClarendon Edition of the Works of Thomas Hobbes\n[…]\n\"Thomas Hobbes\". Retrieved 29 March 2019 – via Online Library of Liberty.\n[…]\nPortraits of Thomas Hobbes at the National Portrait Gallery, London\n[…]\nThomas Hobbes at the Stanford Encyclopedia of Philosophy\n[…]\nThomas Hobbes on In Our Time at the BBC\n[…]\nMontmorency, James E. G. de (1913). \"Thomas Hobbes\". In Macdonell, John; Manson, Edward William Donoghue (eds.). Great Jurists of the World. London: John Murray. pp. 195–219. Retrieved 12 March 2019 – via Internet Archive."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Hobbes",
        "situacao": "ok",
        "texto": "Thomas Hobbes ([hɒbz] HOBZ; 5 de abril de 1588 – 4 de dezembro de 1679) foi um filósofo inglês, mais conhecido por seu livro de 1651 Leviatã, no qual ele expõe uma formulação influente da teoria do contrato social. Ele é considerado um dos fundadores da filosofia política moderna.\n[…]\nComo resultado, a família ficou sob os cuidados do irmão mais velho de Thomas Sr., Francis, um rico fabricante de luvas que não tinha família.\n[…]\nHobbes tornou-se companheiro do jovem William Cavendish, e ambos participaram de um grande tour pela Europa entre 1610 e 1615. Hobbes foi exposto aos métodos científicos e críticos europeus durante a viagem, em contraste com a filosofia escolástica que aprendera em Oxford. Em Veneza, fez amizade com Fulgenzio Micanzio, associado de Paolo Sarpi, um estudioso e estadista veneziano.\n[…]\nEmbora tenha convivido com figuras literárias como Ben Jonson e trabalhado brevemente como Francis Bacon’s amanuense — traduzindo vários de seus Essays para o latim, — Hobbes só mergulhou na filosofia depois de 1629. Em junho de 1628, seu empregador Cavendish, então Conde de Devonshire, morreu de peste, e sua viúva, a condessa Christian, dispensou Hobbes.\n[…]\nNesse estado, cada pessoa teria o direito, ou licença, a tudo no mundo. Isso, argumenta Hobbes, levaria a uma “guerra de todos contra todos” (bellum omnium contra omnes). A descrição contém um dos trechos mais conhecidos da filosofia inglesa, que descreve o estado natural da humanidade, caso não houvesse comunidade política:\n[…]\nConatus § In Hobbes\n[…]\nObras de Thomas Hobbes (em inglês) no Projeto Gutenberg\n[…]\nObras de Thomas Hobbes (em inglês) no LibriVox (livros falados em domínio público)\n[…]\nPequena biografia de Thomas Hobbes, atheisme.free.fr\n[…]\nThomas Hobbes indicado por Steven Pinker no programa Great Lives da BBC Radio 4.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Tractatus Logico-Philosophicus",
      "descricao": "Único livro de filosofia publicado em vida por Ludwig Wittgenstein, lançado em 1921."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Tractatus de Wittgenstein saiu com uma introdução escrita pelo antigo professor do autor em Cambridge. Quem era ele?",
    "resposta": "Bertrand Russell",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tractatus_Logico-Philosophicus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tractatus_Logico-Philosophicus",
        "situacao": "ok",
        "texto": "The Tractatus Logico-Philosophicus (widely abbreviated and cited as TLP) is the only book-length philosophical work by the Austrian philosopher Ludwig Wittgenstein that was published during his lifetime. The project had a broad goal: to identify the relationship between language and reality, and to define the limits of science. Wittgenstein wrote the notes for the Tractatus while he was a soldier \n[…]\nThe book was first published in German in 1921 in the 14th issue of Wilhelm Ostwald's Annalen der Naturphilosophie. The English translation of the Tractatus was published with an introduction by Bertrand Russell, even though Wittgenstein considered Russell's introduction superficial and a misunderstanding of his work. The Tractatus is dedicated to the memory of Wittgenstein's close friend David Pinsent, who was killed in a flying accident in 1918.\n[…]\nAlthough Wittgenstein did not use the term himself, his metaphysical view throughout the Tractatus is commonly referred to as logical atomism. While his logical atomism resembles that of Bertrand Russell, the two views are not strictly the same.\n[…]\nWittgenstein responded to Schlick, commenting: \"I cannot imagine that Carnap should have so completely misunderstood the last sentences of the book and hence the fundamental conception of the entire book.\" Additionally, Bertrand Russell's article \"The Philosophy of Logical Atomism\" is presented as a working out of ideas that he had learned from Wittgenstein.\n[…]\nThe first two English translations of the Tractatus, as well as the first publication in German from 1921, include an introduction by Bertrand Russell. Wittgenstein revised the Ogden translation.\n[…]\nWhite, Roger M. Wittgenstein's Tractatus Logico-Philosophicus: A Reader's Guide. Continuum, 2006.\n[…]\nZalabardo, José L., ed. Wittgenstein's Tractatus Logico-Philosophicus: A Critical Guide Cambridge University Press, 2024.\n[…]\nPhilosurfical.open.ac.uk"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tractatus_Logico-Philosophicus",
        "situacao": "ok",
        "texto": "O Tractatus Logico-Philosophicus (latim para \"Tratado Lógico-Filosófico\") é o livro publicado pelo filósofo austríaco Ludwig Wittgenstein em sua vida. O projeto tinha um objetivo amplo - identificar a relação entre linguagem e realidade e para definir os limites da ciência [1] - e é reconhecido como uma obra filosófica importante do século XX. G.E. Moore originalmente sugeriu o título latino do tr\n[…]\nWittgenstein escreveu as notas para o Tractatus, enquanto ele era um soldado durante a Primeira Guerra Mundial e o completou quando estava como prisioneiro de guerra em Como e depois Cassino em agosto de 1918. [3] Foi publicado em alemão em 1921 como Logisch-Philosophische Abhandlung. O Tractatus foi influente, principalmente entre os positivistas lógicos do Círculo de Viena, tais como Rudolf Carnap e Friedrich Waismann.\n[…]\nO Tractatus emprega um estilo literário notoriamente austero e sucinto. O trabalho quase não contém argumentos como tal, mas, sim, consiste em sentenças declarativas que destinam-se a ser auto-evidentes. As declarações são hierarquicamente numeradas, com sete proposições básicas no nível primário (numeradas 1 a 7), com cada sub-nível sendo um comentário sobre ou elaboração da declaração no próximo nível mais elevado (por exemplo: 1, 1.1, 1.11, 1.12).\n[…]\nObras posteriores de Wittgenstein, destacando-se a obra Investigações Filosóficas, publicada postumamente, criticaram muitas das ideias do Tractatus.\n[…]\nNils-Eric Sahlin, The Philosophy of F. P. Ramsey (1990), p. 227.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Nicolau Maquiavel",
      "descricao": "Pensador político e diplomata florentino (1469–1527), autor de O Príncipe."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na guerra de Florença contra Pisa, Maquiavel e Leonardo da Vinci participaram de um plano para desviar que rio?",
    "resposta": "Arno",
    "fonte": [
      "https://en.wikipedia.org/wiki/Arno",
      "https://en.wikipedia.org/wiki/Niccol%C3%B2_Machiavelli",
      "https://en.wikipedia.org/wiki/Leonardo_da_Vinci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arno",
        "situacao": "ok",
        "texto": "The Arno is a river in the Tuscany region of Italy. It is the most important river of central Italy after the Tiber.\n[…]\nThe Sieve's basin, which flows into the Arno immediately before Florence.\n[…]\nThe lower Valdarno, with the valley of important tributaries such as the Pesa, Elsa, and Era and in which, after Pontedera, the Arno flows into the sea. The river has a very variable discharge, ranging from about 6 cubic metres per second (210 cu ft/s) to more than 2,000 cubic metres per second (71,000 cu ft/s). The mouth of the river was once near Pisa but is now several kilometres westwards.\n[…]\nBefore Pisa, the Arno is crossed by the Imperial Canal at La Botte. This water channel passes under the Arno through a tunnel, and serves to drain the former area of the Lago di Bientina, which was once the largest lake in Tuscany before its reclamation.\n[…]\nThe flow rate of the Arno is irregular. It is sometimes described as having a torrentlike behaviour, because it can easily go from almost dry to near flood in a few days. At the point where the Arno leaves the Apennines, flow measurements can vary between 0.56 and 4,100 cubic metres per second (20 and 144,790 cu ft/s). New dams built upstream of Florence have greatly alleviated the problem in recent years.\n[…]\nThe Arno river has been strongly affected by non-native species: over 90% of fish species and 70% of macroinvertebrate species in the area around Florence are alien species. These include the European catfish, channel catfish, Crucian carp, common bleak, topmouth gudgeon, New Zealand mud snail, and killer shrimp. The mud crab has been found in the river near Pisa."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Niccol%C3%B2_Machiavelli",
        "situacao": "ok",
        "texto": "Niccolò di Bernardo dei Machiavelli (3 May 1469 – 21 June 1527) was a Florentine diplomat, author, political philosopher, and historian who lived during the Italian Renaissance. He is best known for his political treatise The Prince (Il Principe), written around 1513 but not published until 1532, five years after his death. He has often been called the father of modern political philosophy and pol\n[…]\nMachiavelli's father, Bernardo, was born illegitimately and thus could not become a full citizen of Florence, nor could he participate in Florentine politics. This affected Niccolò as well, who himself could not obtain full citizenship rights.\n[…]\nMachiavelli's first diplomatic missions occurred in 1499, where he was sent to the respective courts of Iacopo di Appiano in Piombino, and Caterina Sforza in Forlì. His first major mission was to France in order to placate King Louis XII, and to provide reasons for the failed Florentine assault at Pisa. During the French mission he met and had discussions with Georges d'Amboise, who was the cardinal of Rouen, an experience he would later discuss in his political works.\n[…]\nIn 1520, Machiavelli won the favor of the Medici family, and Giulio Cardinal de Medici commissioned him to write a work of history of the city of Florence. Machiavelli saw this as an opportunity to get back into his political career, thus he began working on what would later be known as the Florentine Histories. During this period, Machiavelli also wrote the Dell'arte della guerra, which was the only work published during his lifetime.\n[…]\nNiccolò Machiavelli | Biography | Encyclopedia Britannica\n[…]\nMachiavelli, Niccolò – Internet Encyclopedia of Philosophy.\n[…]\nNiccolò Machiavelli- entry in the Stanford Encyclopedia of Philosophy\n[…]\nWorks by Niccolò Machiavelli: text, concordances and frequency list\n[…]\nNiccolò Machiavelli – Opera Omnia: Italian and English text"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he has also become known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, ast\n[…]\nBy 1472, at the age of 20, Leonardo qualified as a master in the Guild of Saint Luke, the guild of artists and doctors of medicine, but even after his father set him up in his own workshop, his attachment to Verrocchio was such that he continued to collaborate and live with him. Leonardo's earliest known dated work is a 1473 pen-and-ink drawing of the Arno valley (see below).\n[…]\nAccording to Vasari, the young Leonardo was the first to suggest making the Arno river a navigable channel between Florence and Pisa.\n[…]\nHis earliest dated drawing is a Landscape of the Arno Valley, 1473, which shows the river, the mountains, Montelupo Castle and the farmlands beyond it in great detail.\n[…]\nIn 1502, he created a scheme for diverting the flow of the Arno river, a project on which Niccolò Machiavelli also worked. He continued to contemplate the canalisation of Lombardy's plains while in Louis XII's company and of the Loire and its tributaries in the company of Francis I. Leonardo's journals include a vast number of inventions, both practical and impractical.\n[…]\nThe 19th century brought a particular admiration for Leonardo's genius, causing Henry Fuseli to write in 1801: \"Such was the dawn of modern art, when Leonardo da Vinci broke forth with a splendour that distanced former excellence: made up of all the elements that constitute the essence of genius...\" This is echoed by A. E. Rio who wrote in 1861: \"He towered above all other artists through the strength and the nobility of his talents.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Arno",
        "situacao": "ok",
        "texto": "O Arno é um curso de água da península Itálica que nasce nos Apeninos, no monte Falterona a 1 358 m acima do nível do mar, e atravessa a região da Toscana, percorre 241 km e passa por Florença e Pisa antes de desaguar no mar Tirreno.\n[…]\nO Arno é o mais extenso rio da Toscana, com o maior curso de água, e é fato determinante para a existência de várias civilizações que se desenvolveram na Toscana, antes mesmo dos romanos chegarem até o local. Serviu como uma importante via de transporte fluvial sendo servido por vários portos, ligando a cidade de Florença até o mar Tirreno. Suas águas são caudalosas e tranquilas.\n[…]\nAo se aproximar de Pisa, pouco antes de se encontrar com o mar, o rio adquire um aspecto mais volumoso, de águas mais profundas. Em diversos pontos deste rio, são disputadas diversas variedades de torneios de remo, sendo os mais importantes, os torneios florentinos.\n[…]\nVárias pontes atravessam o Arno. Durante a segunda guerra mundial, todavia, a maioria delas foi destruída e reconstruída mais tarde. As que persistiram possuem grande valor histórico e cultural. As mais belas destas pontes situam-se em Florença e em Pisa.\n[…]\nA enchente de 4 de novembro de 1966 desabou o aterro em Florença, matando pelo menos 40 pessoas e danificando ou destruindo milhões de obras de arte e livros raros. Novas técnicas de conservação foram inspiradas no desastre, mas mesmo décadas depois centenas de obras ainda aguardam restauração.\n[…]\nAutoridade da Bacia do Arno  (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Gottfried Leibniz",
      "descricao": "Filósofo e matemático alemão (1646–1716), defensor da ideia de que vivemos no melhor dos mundos possíveis."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O filósofo Leibniz criou o cálculo e travou uma longa briga pela prioridade da descoberta com que cientista inglês?",
    "resposta": "Isaac Newton",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leibniz%E2%80%93Newton_calculus_controversy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leibniz%E2%80%93Newton_calculus_controversy",
        "situacao": "ok",
        "texto": "In the history of calculus, the calculus controversy was a priority dispute (German: Prioritätsstreit) between mathematicians Isaac Newton and Gottfried Wilhelm Leibniz over who had first invented calculus. The question was a major intellectual controversy, beginning in 1699 and reaching its peak in 1712.\n[…]\nIt was certainly Isaac Newton who first devised a new infinitesimal calculus and elaborated it into a widely extensible algorithm, whose potentialities he fully understood; of equal certainty, differential and integral calculus, the fount of great developments flowing continuously from 1684 to the present day, was created independently by Gottfried Leibniz.\n[…]\nThe claim that Leibniz invented calculus independently of Newton rests on the basis that Leibniz:\n[…]\n(The work was published in 1704 as part of the De Quadratura Curvarum but had previously circulated among mathematicians, beginning when Newton gave a copy to Isaac Barrow in 1669, who then sent it to John Collins.)\n[…]\nIn any event, a bias favoring Newton tainted the whole affair from the outset. The Royal Society, of which Isaac Newton was president at the time, set up a committee to pronounce on the priority dispute in response to a letter it had received from Leibniz. That committee never asked Leibniz to give his version of events. The report of the committee, finding in favor of Newton, was written and published early in 1713 as the \"Commercium Epistolicum\" (mentioned above) by Newton himself.\n[…]\nIsaac Newton, \"Newton's Waste Book (Part 3) (Normalized Version)\": 16 May 1666 entry (The Newton Project)\n[…]\nIsaac Newton, \"De Analysi per Equationes Numero Terminorum Infinitas (Of the Quadrature of Curves and Analysis by Equations of an Infinite Number of Terms)\", in: Sir Isaac Newton's Two Treatises, James Bettenham, 1745."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Controversia_do_c%C3%A1lculo",
        "situacao": "ok",
        "texto": "A controvérsia do cálculo entre Newton e Leibniz (em inglês: Leibniz–Newton calculus controversy; em alemão: Prioritätsstreit) foi uma disputa de prioridade sobre a descoberta do cálculo diferencial e integral entre Isaac Newton (1642–1727) e Gottfried Wilhelm Leibniz (1646–1716). Newton criou a sua versão da teoria entre 1665 e 1666, contudo, não a publicou até 1704.\n[…]\nA maioria dos cientistas no continente não duvidava de que a análise tinha sido descoberta por Leibniz. Quando Newton decidiu publicar as suas obras sobre o tema, surgiu a questão da prioridade da descoberta. A disputa feroz não terminou com a morte de Leibniz e continuou através dos esforços dos apoiantes de ambos os lados, cessando apenas com a morte de Newton.\n[…]\nPontos de vista polarizados sobre a prioridade de Newton ou de Leibniz foram expressos por historiadores da matemática até ao início do século XX. Desde meados do século passado, o número de fontes conhecidas aumentou substancialmente, e os investigadores modernos chegaram à conclusão de que Newton e Leibniz fizeram as suas descobertas de forma independente.\n[…]\nQuanto à questão de qual contributo foi decisivo para o surgimento da análise matemática, os historiadores tendem a adotar uma visão de compromisso: ou consideram que tal resultou do trabalho de muitas gerações de matemáticos, ou reconhecem o papel decisivo do mentor de Newton, Isaac Barrow (1630–1677), cujas obras eram também conhecidas por Leibniz.\n[…]\nEle enviou este artigo ao seu mentor Isaac Barrow, que o mostrou em julho de 1669 ao matemático John Collins, que atuava como um \"empresário matemático\", mantendo a comunidade científica de Inglaterra e da Europa unida. Collins tirou uma cópia e devolveu o original a Newton. Esta abordagem correspondia aos costumes da época — os cientistas, por várias razões, não tinham pressa em divulgar as suas obras.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Auguste Comte",
      "descricao": "Filósofo francês (1798–1857), fundador do positivismo, cujas ideias influenciaram a República brasileira."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O lema ordem e progresso, escrito na bandeira do Brasil, foi inspirado nas ideias de que filósofo francês?",
    "resposta": "Auguste Comte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flag_of_Brazil",
      "https://en.wikipedia.org/wiki/Auguste_Comte"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_Brazil",
        "situacao": "ok",
        "texto": "The national flag of Brazil is a blue disc depicting a starry sky (which includes the Southern Cross) spanned by a curved band inscribed with the national motto Ordem e Progresso (Brazilian Portuguese pronunciation: [ˈɔʁdẽj i pɾoˈɡɾɛsu]) ('Order and Progress'), within a yellow rhombus on a green field. It was officially adopted on 19 November 1889, four days after the Proclamation of the Republic,\n[…]\nA blue circle with white five-pointed stars replaced the arms of the Empire of Brazil –its position in the flag reflects the sky over the city of Rio de Janeiro on 15 November 1889. The motto Ordem e Progresso is derived from Auguste Comte's motto of positivism: \"L'amour pour principe et l'ordre pour base; le progrès pour but\" (\"Love for principle and order for/as the basis; progress for/as the purpose\").\n[…]\nThe caption \"Ordem e Progresso\" is written in green letters. The letter P lies on the vertical diameter of the circle. The letters of the word \"Ordem\" and the word \"Progresso\" are a third of a module (0.33 m) tall. The width of these letters is three-tenths of a module (0.30 m). The conjunction E has a height of three-tenths of a module (0.30 m) and a width of a quarter of a module (0.25 m).\n[…]\nIn 2021, the movement \"Amor na Bandeira\" (in English, Love in the Flag) proposed to update the flag's motto from \"Ordem e Progresso\" to \"Amor, Ordem e Progresso\" (Love, Order and Progress), in allusion to the motto of positivism \"L'amour pour principe et l'ordre pour base; le progrès pour but\" (Love as a principle and order as the basis; progress as the goal), formulated by the French philosopher Auguste Comte, which inspired the original motto in the flag.\n[…]\nBandeira Nacional at the Brazilian Government\n[…]\nBandeira – Insígnia at the Brazilian Government"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Auguste_Comte",
        "situacao": "ok",
        "texto": "Isidore Auguste Marie François Xavier Comte (; French: [oɡyst(ə) kɔ̃t] ; 19 January 1798 – 5 September 1857) was a French philosopher and writer who formulated the doctrine of positivism. He is often regarded as the first philosopher of science in the modern sense of the term. Comte's ideas were fundamental to the development of sociology, as he coined the term and treated the discipline as the cr\n[…]\nAuguste Comte was born in Montpellier, Hérault, on 19 January 1798, at the time under the rule of the newly founded French First Republic. After attending the Lycée Joffre and then the University of Montpellier, Comte was admitted to École Polytechnique in Paris. The École Polytechnique was notable for its adherence to the French ideals of republicanism and progress. The École closed in 1816 for reorganization, and Comte continued his studies at the medical school at Montpellier.\n[…]\nJean-François Eugène Robinet, Notice sur l'oeuvre et sur la vie d'Auguste Comte, par le Dr Robinet, son médecin et l'un de ses treize exécuteurs testamentaires, Paris : au siège de la Société positiviste, 1891. 3e éd.\n[…]\nJean-François Eugène Robinet, La philosophie positive: Auguste Comte et M. Pierre Laffitte, Paris : G. Baillière, [ca 1881].\n[…]\nWorks by or about Auguste Comte at the Internet Archive\n[…]\nWorks by Auguste Comte at LibriVox (public domain audiobooks)\n[…]\nAuguste Comte: Stanford Encyclopaedia of Philosophy\n[…]\nReview materials for studying Auguste Comte\n[…]\nHenri Gouhier, \"Final Chapter – Life in the anticipation of the Grave\", from The Life of Auguste Comte (1931). In Comte's last years, practicing his own religion.\n[…]\nAuguste Comte quotes\n[…]\nThe positive philosophy, Auguste Comte / freely translated and selected by Harriet Martineau, Cornell University Library Historical Monographs Collection – downloadable version\n[…]\nAuguste Comte – High Priest of Positivism by Caspar Hewett\n[…]\nMaison d'Auguste Comte"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil",
        "situacao": "ok",
        "texto": "Bandeira do Brasil constitui a bandeira nacional da República Federativa do Brasil. É composta por uma base verde em forma de retângulo, sobreposta por um losango amarelo e um círculo azul, no meio do qual está atravessada uma faixa branca com o lema \"Ordem e Progresso\", em letras maiúsculas verdes. O Brasil adotou oficialmente este projeto para sua bandeira nacional em 19 de novembro de 1889, sub\n[…]\nO conceito foi criado por Raimundo Teixeira Mendes, com a colaboração de Miguel Lemos, Manuel Pereira Reis e Décio Villares. É um dos símbolos nacionais brasileiros, ao lado do Laço Nacional, do Selo Nacional, do Brasão de Armas e do Hino Nacional. O lema \"Ordem e Progresso\" é inspirado pelo lema do positivismo de Auguste Comte: O Amor por princípio e a Ordem por base; o Progresso por fim, versão traduzida do francês.\n[…]\nA inscrição \"Ordem e Progresso\" é uma forma abreviada do lema político positivista cujo autor é o francês Auguste Comte:\n[…]\nHasteia-se a bandeira:\n[…]\nO lema \"ordem e progresso\" foi objeto de protestos por se relacionar com o positivismo. Segundo José Feliciado, que o defendeu, o lema simboliza os elementos dominantes na ocasião da proclamação da República, isto é, os positivistas. No entanto, o lema acabou por desagradar a vários brasileiros, levando, até mesmo, ao uso de outras bandeiras que não a oficial, durante os primeiros anos da República.\n[…]\nEm 2021, o movimento \"Amor na Bandeira\", encabeçado pelo designer Hans Donner, propôs a inclusão da expressão Amor, Ordem e Progresso na bandeira nacional, em alusão ao lema do positivismo, formulado pelo filósofo francês Augusto Comte: \" O Amor por princípio e a Ordem por base; o Progresso por fim\". Segundo a justificativa do movimento \"o resgate do amor, na visão dos militantes da campanha, corrigiria um erro histórico e apontaria um novo rumo para o Brasil\".\n[…]\n«Brasil» (em inglês). no Flags of the World",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Leviatã",
      "descricao": "Tratado de filosofia política de Thomas Hobbes, publicado em 1651, que defende um soberano absoluto."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1651, Hobbes defendeu no Leviatã um soberano com poder absoluto, marcado pelo trauma de que conflito em seu país?",
    "resposta": "Guerra Civil Inglesa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leviathan_(Hobbes_book)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leviathan_(Hobbes_book)",
        "situacao": "ok",
        "texto": "Leviathan or The Matter, Forme and Power of a Commonwealth Ecclesiasticall and Civil, commonly referred to as Leviathan, is a work of social and political theory by the English empiricist philosopher and political theorist Thomas Hobbes (1588–1679), published in 1651 (revised Latin edition 1668). Its name derives from the chaotic Leviathan sea serpent of the Hebrew Bible and earlier mythologies.\n[…]\nWritten during the English Civil War (1642–1651), it argues for a social contract and rule by an absolute sovereign. Hobbes asserts that civil war and the \"nasty, brutish and short\" state of nature (\"the war of all against all\") could be avoided only by a strong, undivided government.\n[…]\nTo prescribe the rules of civil law and property.\n[…]\nIn Leviathan, Hobbes explicitly states that the sovereign has authority to assert power over matters of faith and doctrine and that if he does not do so, he invites discord. Hobbes presents his own religious theory but states that he would defer to the will of the sovereign (when that was re-established: again, Leviathan was written during the Civil War) as to whether his theory was acceptable.\n[…]\nThat cannot be, if they be true.\" However, Hobbes is quite happy for the truth to be suppressed if necessary: if \"they tend to disorder in government, as countenancing rebellion or sedition? Then let them be silenced, and the teachers punished\" – but only by the civil authority.\n[…]\nAnthony Gottlieb points out that Hobbes's political philosophy was affected by the prevalence of sectarian conflict in his time, both in the European wars of religion and in the English Civil Wars. These violent events moved him to consider peace and security the ultimate goals of government, to be achieved at all costs. The British historian Hugh Trevor-Roper summarises the book as follows: \"The axiom, fear; the method, logic; the conclusion, despotism.\"\n[…]\nScan of 1651 edition"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Leviat%C3%A3_%28livro%29",
        "situacao": "ok",
        "texto": "Leviatã ou Matéria, Palavra e Poder de um Governo Eclesiástico e Civil, comumente chamado de Leviatã, é um livro escrito por Thomas Hobbes e publicado em 1651. Ele é intitulado em referência ao Leviatã bíblico. O livro diz respeito à estrutura da sociedade e do governo legítimo, e é considerado como um dos exemplos mais antigos e mais influentes da teoria do contrato social. O editor foi Andrew Cr\n[…]\nNo livro, que foi escrito durante a Guerra Civil Inglesa, Thomas Hobbes defende um contrato social e o governo de um soberano absoluto. Hobbes escreveu que o caos ou a guerra civil - situações identificadas como um estado de natureza e pelo famoso lema Bellum omnium contra omnes (eterna luta de todos contra todos) - só poderia ser evitado por um governo central forte.\n[…]\nLeviatã é o livro mais famoso do filósofo inglês Thomas Hobbes, publicado em 1651. O seu título se deve ao monstro bíblico Leviatã. O livro, cujo título por extenso é Leviatã ou matéria, forma e poder de um Estado eclesiástico e civil, trata da estrutura da sociedade organizada.\n[…]\nNota-se que um soberano pode ser tanto uma pessoa quanto um grupo, eleito ou não. Porém, na perspectiva de Hobbes, a melhor forma de governo era a monarquia — sem a presença concomitante de um Parlamento, pois este dividiria o poder e, portanto, seria um estorvo ao Leviatã e levaria a sociedade ao caos (como na guerra civil inglesa).\n[…]\nNa busca pela glória, derruba-se os outros pelas costas, já que, para Hobbes, os homens são iguais nas capacidades e na expectativa de êxito, nenhuma pessoa ou nenhum grupo pode, com segurança, reter o poder. Assim sendo, o conflito é perpétuo, e \"cada homem é inimigo de outro homem\". Nesse estado de guerra nada de bom pode surgir. Enquanto cada um se concentra na autodefesa e na conquista, o trabalho produtivo é impossível.\n[…]\nLeviatã (em inglês).\n[…]\nThomas Hobbes - Leviatã (Sumário das ideias - págs. 72 a 93)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Cândido",
      "descricao": "Novela satírica de Voltaire publicada em 1759, que ridiculariza o otimismo filosófico."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que tragédia de 1755, numa capital europeia, abalou o otimismo filosófico da época e aparece na novela Cândido, de Voltaire?",
    "resposta": "O terremoto de Lisboa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Candide",
      "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Candide",
        "situacao": "ok",
        "texto": "Candide, ou l'Optimisme ( kon-DEED or  kahn-DEED, French: [kɑ̃did] ) is a French satire written by Voltaire, a philosopher of the Age of Enlightenment, first published in 1759. The novella has been widely translated, with English versions titled Candidus: or, All for the Best (1759); Candide: or, The Optimist (1762); and Candide: Optimism (1947). A young man, Candide, lives a sheltered life in an \n[…]\nImmediately after the earthquake, unreliable rumours circulated around Europe, sometimes overestimating the severity of the event. Ira Wade, a noted expert on Voltaire and Candide, has analyzed which sources Voltaire might have referenced, speculating that Voltaire's primary source was the 1755 work Relation historique du Tremblement de Terre survenu à Lisbonne by Ange Goudar.\n[…]\nThe fast-paced and improbable plot—in which characters narrowly escape death repeatedly, for instance—allows for compounding tragedies to befall the same characters over and over again. In the end, Candide is primarily, as described by Voltaire's biographer Ian Davidson, \"short, light, rapid and humorous\".\n[…]\nThe main method of Candide's satire is to contrast ironically great tragedy and comedy. The story does not invent or exaggerate evils of the world—it displays real ones starkly, allowing Voltaire to simplify subtle philosophies and cultural traditions, highlighting their flaws. Thus Candide derides optimism, for instance, with a deluge of horrible, historical (or at least plausible) events with no apparent redeeming qualities.\n[…]\nAnother element of the satire focuses on what William F. Bottiglia, author of many published works on Candide, calls the \"sentimental foibles of the age\" and Voltaire's attack on them. Flaws in European culture are highlighted as Candide parodies adventure and romance clichés, mimicking the style of a picaresque novel.\n[…]\nVoltaire's Candide, a public wiki dedicated to Candide"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake",
        "situacao": "ok",
        "texto": "The 1755 Lisbon earthquake, also known as the Great Lisbon earthquake, occurred in the Iberian Peninsula and Northwest Africa area on the morning of Saturday, 1 November, 1755 (on the Christian Feast of All Saints); it took place at approximately 09:40 local time. In combination with subsequent fires and a tsunami, the earthquake almost completely destroyed Lisbon and adjoining areas.\n[…]\nThe earthquake and its aftermath strongly influenced the intelligentsia of the European Age of Enlightenment. The noted writer-philosopher Voltaire used the earthquake in Candide and in his Poème sur le désastre de Lisbonne (\"Poem on the Lisbon disaster\"). Voltaire's Candide attacks the notion that all is for the best in this, \"the best of all possible worlds\", a world closely supervised by a benevolent deity. The Lisbon disaster provided a counterexample for Voltaire. Theodor W.\n[…]\nVoltaire's Candide includes a depiction of the main character during the devastation of the earthquake and its aftermath.\n[…]\n1755 Cape Ann earthquake\n[…]\nBraun, Theodore E. D., and John B. Radner, eds. The Lisbon Earthquake of 1755: Representations and Reactions (SVEC 2005:02). Oxford: Voltaire Foundation, 2005. ISBN 978-0-7294-0857-8. Recent scholarly essays on the earthquake and its representations in art, with a focus on Voltaire. (In English and French.)\n[…]\nFonseca, J. D. 1755, O Terramoto de Lisboa, The Lisbon Earthquake. Argumentum, Lisbon, 2004.\n[…]\nThe Lisbon earthquake of 1755: the catastrophe and its European repercussions (published in “The Economia Global e Gestão (Global Economics and Management Review), Lisbon, volume 10 (2004))\n[…]\nImages and historical depictions of the 1755 Lisbon earthquake from the University of California\n[…]\nTsunami Forecast Model Animation: Lisbon 1755 from the Pacific Tsunami Warning Center's official YouTube channel\n[…]\nThe Lisbon Earthquake (1755) from European History Online"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A2ndido%2C_ou_O_Otimismo",
        "situacao": "ok",
        "texto": "Candide, ou l'Optimisme é um conto filosófico em tom de sátira publicado pela primeira vez em 1759 por Voltaire, filósofo do Iluminismo. A novela já foi traduzida em centenas de línguas e, em português, seu título costuma ser Cândido ou O Otimismo ou simplesmente Cândido. Foi realizado, ao que parece, em três dias, em 1758, ainda sob a impressão do terremoto de Lisboa, com assinatura de um pseudôn\n[…]\nVoltaire conclui a obra-prima com Cândido — se não rejeitando o otimismo — ao menos substituindo o mantra leibniziano de Pangloss, \"tudo vai pelo melhor no melhor dos mundos possíveis\", por um preceito enigmático: \"devemos cultivar nosso jardim.\"\n[…]\nAinda assim, os eventos discutidos no livro são muitas vezes baseados em acontecimentos históricos, como a Guerra dos Sete Anos e o já citado terremoto de Lisboa de 1755. O problema do mal, tema comum aos filósofos da época, é exposto também neste conto, de forma mais direta e ironicamente: o autor ridiculariza a religião, os teólogos, os governos, o exército, as filosofias e os filósofos por meio de alegorias; de maneira mais conspícua, chega a roubar Leibniz e seu otimismo.\n[…]\nNos dias de hoje, Cândido é reconhecido como a magnum opus de Voltaire, e considerado parte do Cânone Ocidental.\n[…]\nCândido então descobre o mundo, e vai de decepção em decepção pelos caminhos de uma longa jornada de iniciação.\n[…]\nRecrutado à força pelas tropas búlgaras, testemunha o massacre da guerra. Foge e é recolhido pelo anabatista Jacques. Reencontra Pangloss, envelhecido e vitimado pela sífilis, que o informa da suposta morte de Cunegundes, estuprada por soldados búlgaros. Embarcam com Jacques para Lisboa. Após uma tempestade em que Jacques morre afogado, chegam a Lisboa no dia do terremoto e são vítimas de um auto de fé em que Pangloss é aparentemente enforcado.\n[…]\n— Tudo isso está muito bem dito — respondeu Cândido, — mas devemos cultivar nosso jardim.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Bertrand Russell",
      "descricao": "Filósofo, lógico e matemático britânico (1872–1970), Nobel de Literatura de 1950."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Já com 89 anos de idade, o filósofo Bertrand Russell passou uma semana preso por protestar contra quê?",
    "resposta": "As armas nucleares",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bertrand_Russell"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bertrand_Russell",
        "situacao": "ok",
        "texto": "Bertrand Arthur William Russell, 3rd Earl Russell (18 May 1872 – 2 February 1970), was an English mathematician and philosopher. A founder of analytic philosophy, he was a leading philosopher of the 20th century who produced pioneering work in logic, set theory, and philosophy of language. Russell popularised philosophy to the general public and was a controversial figure for his outspoken atheism\n[…]\nRussell consistently opposed the continued existence of nuclear weapons ever since their first use. However, on 20 November 1948, in a public speech at Westminster School, addressing a gathering arranged by the New Commonwealth, Russell shocked some observers with comments that seemed to suggest a preemptive nuclear strike on the Soviet Union might be justified.\n[…]\nWhichever interpretation is correct, Russell later relented, instead arguing for mutual disarmament by the nuclear powers, possibly linked to some form of world government.\n[…]\nIn 1955, Russell released the Russell-Einstein Manifesto, co-signed by Albert Einstein and nine other leading scientists and intellectuals, a document which led to the first of the Pugwash Conferences on Science and World Affairs in 1957. In 1957-58, Russell became the first president of the Campaign for Nuclear Disarmament, which advocated unilateral nuclear disarmament by Britain. He resigned two years later when the CND would not support civil disobedience, and formed the Committee of 100.\n[…]\nFor the sesquicentennial of his birth, in May 2022, McMaster University's Bertrand Russell Archive, the university's largest and most heavily used research collection, organised both a physical and virtual exhibition on Russell's anti-nuclear stance in the post-war era, Scientists for Peace: the Russell-Einstein Manifesto and the Pugwash Conference, which included the earliest version of the Russell–Einstein Manifesto.\n[…]\nBertrand Russell at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bertrand_Russell",
        "situacao": "ok",
        "texto": "Bertrand Arthur William Russell, 3.º Conde Russell OM FRS (Trelleck, País de Gales, 18 de maio de 1872 — Penrhyndeudraeth, País de Gales, 2 de fevereiro de 1970) foi um dos mais influentes matemáticos, filósofos, ensaístas, historiadores e lógicos do século XX. Em diversos momentos, considerou-se liberal, socialista e pacifista, embora tenha admitido que jamais pertenceu a essas correntes num sent\n[…]\nRussell foi um pacifista e defensor do anti-imperialismo. Inicialmente, chegou a defender a pressão nuclear preventiva como forma de evitar conflitos maiores. Foi preso pelo seu pacifismo durante a Primeira Guerra Mundial. Mais tarde, concluiu que a guerra contra Adolf Hitler era um \"mal necessário\" e criticou severamente o totalitarismo estalinista, além de condenar o envolvimento dos Estados Unidos na Guerra do Vietname.\n[…]\nLogo após as bombas atómicas terem explodido em Hiroshima e Nagasaki, Russell escreve cartas e publica artigos nos jornais de 1945 a 1948, declarando claramente que era moralmente justificado ir para a guerra contra a URSS utilizando bombas atómicas, porque os Estados Unidos as possuíam antes da URSS. Depois de a URSS ter efetuado os seus ensaios nucleares, Russell muda contudo de posição, defendendo a abolição total das armas atómicas.\n[…]\nDurante os anos 50, Russell opôs-se às armas nucleares assinando um manifesto, conhecido como o Manifesto Russell-Einstein, em 1955 com Albert Einstein, por iniciativa de Frédéric Joliot-Curie e com Joseph Rotblat, e promovendo conferências. Isto valeu-lhe a prisão em 1961, aos oitenta e nove anos. Em 1958, assina com mais de  uma petição apresentada por Linus Pauling às Nações Unidas apelando à interrupção dos testes nucleares. Declarou-se «cidadão do mundo».\n[…]\nRonald William Clark (1978). The life of Bertrand Russell (em inglês). [S.l.]: Penguin Books. 979 páginas. ISBN 0-14-004475-2. OCLC 7545876\n[…]\nBertrand Russell",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "O Mundo (Descartes)",
      "descricao": "Tratado de física de René Descartes, concluído por volta de 1633 e publicado só após sua morte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1633, Descartes desistiu de publicar seu tratado O Mundo ao saber que a Inquisição tinha condenado que cientista?",
    "resposta": "Galileu Galilei",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_World_(Descartes)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_World_(Descartes)",
        "situacao": "ok",
        "texto": "The World, also called Treatise on the Light (French title: Traité du monde et de la lumière), is a book by René Descartes (1596–1650). Written between 1629 and 1633, it contains a nearly complete version of his philosophy, from method, to metaphysics, to physics and biology.\n[…]\nThe World rests on the heliocentric view, first explicated in Western Europe by Copernicus. Descartes delayed the book's release upon news of the Roman Inquisition's conviction of Galileo for \"suspicion of heresy\" and sentencing to house arrest. Descartes discussed his work on the book, and his decision not to release it, in letters with another philosopher, Marin Mersenne.\n[…]\nSome material from The World was revised for publication as Principia philosophiae or Principles of Philosophy (1644), a Latin textbook at first intended by Descartes to replace the Aristotelian textbooks then used in universities. In the Principles the heliocentric tone was softened slightly with a relativist frame of reference. The last chapter of The World was published separately as De Homine (On Man) in 1662. The rest of The World was finally published in 1664, and the entire text in 1677.\n[…]\nDescartes, René, Le Monde, L'Homme, critical edition with an introduction and notes by Annie Bitbol-Hespériès, Paris: Seuil, 1996.\n[…]\nDescartes, René, Le Monde, ou Traité de la lumière. Translation and introduction by Michael Sean Mahoney. New York: Abaris Books, 1979. (French and English text on facing pages) Mahoney's English translation\n[…]\nDescartes, René. The World and Other Writings. Trans. Stephen Gaukroger. New York: Cambridge University Press, 1998.\n[…]\nDescartes, René. The World, edited and translated by Jarrett A. Carty. Macon, GA: Mercer University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Mundo_%28Descartes%29",
        "situacao": "ok",
        "texto": "O Mundo, também chamado Tratado da Luz (título em francês: Traité du monde et de la lumière), é um livro de René Descartes (1596–1650). Escrito entre 1629 e 1633, contém uma versão quase completa de sua filosofia, indo desde o método até a metafísica, passando pela física e biologia.\n[…]\nO Mundo baseia-se na visão heliocêntrica, inicialmente explicitada na Europa Ocidental por Copérnico. Descartes adiou o lançamento da obra ao saber que a Inquisição romana havia condenado Galileu por “suspeita de heresia”, sentenciando-o à prisão domiciliar. Descartes discorreu sobre seu trabalho no livro e sobre a decisão de não publicá-lo em cartas trocadas com o também filósofo Marin Mersenne.\n[…]\nParte do material de O Mundo foi revisada para publicação em Principia philosophiae ou Princípios da Filosofia (1644), um texto em latim que Descartes pretendia usar para substituir os manuais aristotélicos então utilizados nas universidades. Em Princípios, o tom heliocêntrico foi levemente suavizado por meio de um referencial relativista. O último capítulo de O Mundo foi publicado separadamente como De Homine (Sobre o Homem) em 1662. O restante surgiu em 1664, e o texto completo em 1677.\n[…]\nPara explicar por que corpos pesados na Terra caem, Descartes recorre à agitação das partículas na atmosfera. As partículas do éter são mais agitadas que as de ar, que, por sua vez, são mais agitadas que as de corpos terrestres (pedras, por exemplo). A agitação maior do éter impede que as partículas de ar escapem para o céu, assim como a agitação do ar força os corpos terrestres — cujas partículas têm agitação menor do que as de ar — a descer em direção ao mundo.\n[…]\nDescartes, René, Le Monde, L'Homme, edição crítica com introdução e notas de Annie Bitbol-Hespériès, Paris: Seuil, 1996.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "René Descartes",
      "descricao": "Filósofo e matemático francês (1596–1650), autor de Discurso do Método."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O crânio atribuído a René Descartes, separado do resto do corpo após a morte, fica guardado em que museu de Paris?",
    "resposta": "Museu do Homem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes",
        "situacao": "ok",
        "texto": "René Descartes ( day-KART, also  DAY-kart; French: [ʁəne dekaʁt] ; 31 March 1596 – 11 February 1650) was a French philosopher, mathematician, and scientist whose work was foundational to mathematics and modern philosophy. He connected the previously separate fields of geometry and algebra into analytic geometry and introduced a systematic method of inquiry that became influential in early modern p\n[…]\nKnown as Cartesian dualism (or mind–body dualism), his theory on the separation between the mind and the body went on to influence subsequent Western philosophies. In Meditations on First Philosophy, Descartes attempted to demonstrate the existence of God and the distinction between the human soul and the body. Humans are a union of mind and body; thus Descartes's dualism embraced the idea that mind and body are distinct but closely joined.\n[…]\nAlthough Descartes's views were not universally accepted, they became prominent in Europe and North America, allowing humans to treat animals with impunity. The view that animals were quite separate from humanity and merely machines allowed for the maltreatment of animals, and was sanctioned in law and societal norms until the middle of the 19th century. The publications of Charles Darwin would eventually erode the Cartesian view of animals.\n[…]\n1648. Responsiones Renati Des Cartes... (Conversation with Burman). Notes on a Q&A session between Descartes and Frans Burman on 16 April 1648. Rediscovered in 1895 and published for the first time in 1896. An annotated bilingual edition (Latin with French translation), edited by Jean-Marie Beyssade, was published in 1981 (Paris: PUF).\n[…]\nWorks by René Descartes at Project Gutenberg\n[…]\nRené Descartes (1596–1650) Published in Encyclopedia of Rhetoric and Composition (1996)\n[…]\nRené Descartes at the Mathematics Genealogy Project\n[…]\nFree scores by René Descartes at the International Music Score Library Project (IMSLP)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ren%C3%A9_Descartes",
        "situacao": "ok",
        "texto": "René Descartes em francês, [ʁəne dekaʁt] ; La Haye en Touraine, 31 de março de 1596 – Estocolmo, 11 de fevereiro de 1650) foi um filósofo, matemático e cientista francês. Reuniu a geometria e a álgebra no desenvolvimento da geometria analítica e propôs um método sistemático de investigação que teve ampla repercussão na filosofia moderna. Seus trabalhos também trataram de epistemologia, metafísica,\n[…]\nA autenticidade do crânio guardado no Museu do Homem, em Paris, é contestada. Em 2020, Andreas Manhag e Per Karsten questionaram sua identificação ao estudar documentos e inscrições e compará-los com um fragmento conservado no Museu Histórico de Lund. Fragmentos atribuídos ao crânio original podem ter circulado entre colecionadores e instituições suecas, incluindo a Universidade de Lund.\n[…]\nA cidade natal de Descartes, anteriormente chamada La Haye en Touraine e depois La Haye-Descartes, adotou o nome de Descartes em 1967, quando se uniu à vizinha Balesmes. Na praça da prefeitura encontra-se uma estátua do filósofo, erguida no século XIX. A casa onde nasceu foi transformada em museu dedicado à sua vida e obra, integrado ao espaço museológico da cidade.\n[…]\nDescartes integrou a série dos “Homens ilustres da França” produzida pela Manufatura de Sèvres. Uma estatueta de porcelana dessa série, datada de aproximadamente 1784 e baseada em um modelo do escultor Augustin Pajou, pertence ao acervo do Museu do Louvre.\n[…]\n1630–1633. Le Monde (O Mundo) e L'Homme (O homem). Primeira exposição sistemática de sua filosofia natural. L'Homme saiu postumamente em tradução latina em 1662 e Le Monde em 1664.\n[…]\nDescartes, René (2009). O mundo ou Tratado da luz e O homem. Traduzido por César Augusto Battisti e Marisa Carneiro de Oliveira Franco Donatelli. Campinas: Editora da Unicamp. ISBN 9788526808478  Edição bilíngue, em francês e português.\n[…]\nRené Descartes no Mathematics Genealogy Project (em inglês).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Simone de Beauvoir",
      "descricao": "Filósofa e escritora existencialista francesa (1908–1986), autora de O Segundo Sexo e companheira de Jean-Paul Sartre."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Simone de Beauvoir está enterrada no mesmo túmulo que Jean-Paul Sartre. Em que cemitério de Paris?",
    "resposta": "Cemitério de Montparnasse",
    "fonte": [
      "https://en.wikipedia.org/wiki/Simone_de_Beauvoir"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Simone_de_Beauvoir",
        "situacao": "ok",
        "texto": "Simone Lucie Ernestine Marie Bertrand de Beauvoir (9 January 1908 – 14 April 1986) was a French existentialist philosopher, writer, social theorist, and feminist activist. Though she did not consider herself a philosopher, nor was she considered one at the time of her death, she had a significant influence on both feminist existentialism and feminist theory.\n[…]\nShe lived with Claude Lanzmann from 1952 to 1959 in Montparnasse near her childhood home. In 1955 she published Les Temps Moderne in support of Algerian independence and three essays called Privileges which questioning how the privileged can question their situation, and stated the privileged number be not ignorant of hierarchies to address them. Beauvoir would later write a defense of Djamila Boupacha and helped set up a committee for her defense.\n[…]\nBeauvoir died of pneumonia on 14 April 1986 in Paris, aged 78. She is buried next to Sartre at the Montparnasse Cemetery in Paris. She was honoured as a figure at the forefront of the struggle for women's rights around the time of her death.\n[…]\nIn Paris, Place Jean-Paul-Sartre-et-Simone-de-Beauvoir is a square that honors Beauvoir and Sartre. It is one of the few squares in Paris to be officially named after a couple. The pair lived close to the square at 42 rue Bonaparte.\n[…]\nThe grave Beauvoir shares with Sartre in Montparnasse is a popular tourist spot, with visitors often leaving rocks, notes, and lipstick-stained kisses on the grave.\n[…]\nRowley, Hazel, 2005. Tête-a-Tête: Simone de Beauvoir and Jean-Paul Sartre. New York: HarperCollins.\n[…]\nAxel Madsen, Hearts and Minds: The Common Journey of Simone de Beauvoir and Jean-Paul Sartre, William Morrow & Co, 1977.\n[…]\nMadeleine Gobeil (Spring–Summer 1965). \"Simone de Beauvoir, The Art of Fiction No. 35\". Paris Review. Spring-Summer 1965 (34).\n[…]\n\"Simone de Beauvoir\", Great Lives, BBC Radio 4, 22 April 2011"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Simone_de_Beauvoir",
        "situacao": "ok",
        "texto": "Simone Lucie Ernestine Marie Bertrand de Beauvoir, mais conhecida como Simone de Beauvoir (francês: [simɔn də bovwaʁ]; Paris, 9 de janeiro de 1908 – Paris, 14 de abril de 1986), foi uma escritora, intelectual, filósofa existencialista, ativista política, feminista e teórica social francesa. Embora não se considerasse uma filósofa, De Beauvoir teve uma influência significativa tanto no existenciali\n[…]\nA autora revela certa inquietação diante do envelhecimento e da morte em livros como Uma morte suave, de 1964. Em A Cerimônia do Adeus, de 1981, ela narra o fim da existência de seu companheiro Sartre, que havia morrido em 15 de abril do ano anterior. Ela faleceu em 14 de abril de 1986, aos 78 anos de idade, em decorrência de um edema pulmonar. Seu corpo foi enterrado no Cemitério de Montparnasse, no mesmo túmulo de Sartre.\n[…]\nDepois de Sartre morrer em 1980, De Beauvoir publicou as cartas que ele a enviou, mas com edições, para poupar os sentimentos de pessoas em seu círculo social que ainda estavam vivas. Em 1986, a filósofa e escritora morreu em decorrência de um edema pulmonar em Paris, aos 78 anos de idade. Seu corpo encontra-se sepultado no mesmo túmulo de Jean-Paul Sartre no Cemitério de Montparnasse, na capital francesa.\n[…]\nEm Paris, a Place Jean-Paul-Sartre-et-Simone-de-Beauvoir recebeu o nome do casal, que morou perto dali, na rua Bonaparte. Uma estátua da escritora apresentada na cerimônia de abertura dos Jogos Olímpicos de Verão de 2024 foi instalada posteriormente na rua de la Chapelle, com as esculturas de outras mulheres francesas homenageadas naquela ocasião.\n[…]\nEm 2020, a revista Time dedicou a Beauvoir a capa referente a 1949 em sua série sobre mulheres de cada ano do século XX. Em Paris, placas em endereços onde escreveu e morou lembram sua passagem pela cidade. O túmulo que divide com Sartre no Cemitério do Montparnasse recebe bilhetes deixados por visitantes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Friedrich Engels",
      "descricao": "Filósofo e teórico político alemão (1820–1895), parceiro de Karl Marx no Manifesto Comunista."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Friedrich Engels ajudou a sustentar Karl Marx com o que ganhava na fábrica têxtil da família, em que cidade inglesa?",
    "resposta": "Manchester",
    "fonte": [
      "https://en.wikipedia.org/wiki/Friedrich_Engels"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Friedrich_Engels",
        "situacao": "ok",
        "texto": "Friedrich Engels ( ENG-(g)əlz; German: [ˈfʁiːdʁɪç ˈɛŋl̩s]; 28 November 1820 – 5 August 1895) was a German philosopher, social and political theorist, and revolutionary socialist. He is best known for his lifelong collaboration with Karl Marx, with whom he co-authored The Communist Manifesto (1848) and developed the political and philosophical system that came to be known as Marxism.\n[…]\nFrom 1850, he lived in Manchester and worked for the family firm of Ermen & Engels for two decades, leading a double life as a respectable cotton merchant while providing crucial financial support to the impoverished Marx family in London.\n[…]\nIn November 1850, reconciling with his family, he agreed to return to Manchester and resume his position at the Ermen & Engels office to provide financial support for Marx. \"Huckstering is too beastly,\" he later wrote to Marx, but he endured this \"purgatory\" for nearly twenty years. This period of his life was a \"nervous, sapping sacrifice\" in which he led a double life as a respectable, middle-class businessman and a clandestine communist revolutionary.\n[…]\nSchulte Beerbühl, Margrit (2023). \"The Revolutionizing of Labour: Friedrich Engels and the Changing Face of Work in Manchester and London\". In Illner, Eberhard; Frambach, Hans A.; Koubek, Norbert (eds.). The Life, Work and Legacy of Friedrich Engels: Emerging from Marx's Shadow. London: Bloomsbury Academic. pp. 137–164. ISBN 978-1-3502-7268-2.\n[…]\nKuroda, Kan'ichi (2000). Engels' Political Economy: On the Difference in Philosophy Between Karl Marx and Friedrich Engels. Tokyo: Akane Books. ISBN 4899890494.\n[…]\nRiazanov, David (1927). Karl Marx and Friedrich Engels: An Introduction to Their Lives and Work. New York: International Publishers.\n[…]\nArchive of Karl Marx / Friedrich Engels Papers at the International Institute of Social History\n[…]\nThe Legend of Marx, or \"Engels the Founder\" by Maximilien Rubel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Friedrich_Engels",
        "situacao": "ok",
        "texto": "Friedrich Engels (pronúncia em alemão: [ˈfʁiːdʁɪç ˈʔɛŋl̩s]; Barmen, 28 de novembro de 1820 — Londres, 5 de agosto de 1895) foi um empresário industrial e teórico revolucionário prussiano, nascido na atual Alemanha,  que junto com Karl Marx fundou o chamado socialismo científico ou marxismo.\n[…]\nFoi coautor de diversas obras com Marx, sendo que a mais conhecida é o Manifesto Comunista. Também ajudou a publicar, após a morte de Marx, os dois últimos volumes de O Capital, principal obra de seu amigo e colaborador.[carece de fontes]? Engels também organizou as notas de Marx em Teorias sobre a Mais-Valia, que depois foram publicadas como o \"quarto volume\" de O Capital, os 3 últimos sendo publicados após a morte de Karl Marx\n[…]\nEm 1842, Engels de 22 anos de idade foi enviado por seus pais para Manchester, Inglaterra, para trabalhar para o Ermen e Engels Victoria Mill em Weaste que fazia linhas de costura. Assume por alguns anos a direção de uma das fábricas e então, fica impressionado com a miséria em que vivem os trabalhadores das fábricas de sua família.\n[…]\nA Situação da Classe Trabalhadora na Inglaterra é uma descrição detalhada e uma análise das péssimas condições da classe trabalhadora na Grã-Bretanha durante a estada de Engels em Manchester e Salford. O trabalho também contém pensamentos importantes sobre a situação do socialismo e seu desenvolvimento. Foi considerado um clássico em sua época. O trabalho inicialmente causou pouco impacto na Inglaterra, pois não foi traduzido até o final do século XIX.\n[…]\nKarl Marx\n[…]\nEngels, Friedrich (1888). Ludwig Feuerbach and the End of Classical German Philosophy (em inglês). Londres: [s.n.] Cópia arquivada em 13 de setembro de 2026\n[…]\nMayer, Gustav (1936), Friedrich Engels: A Biography (1934; trans. 1936)\n[…]\n\"Friederich Engels\" por Lénine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Ética (Spinoza)",
      "descricao": "Obra principal de Baruch Spinoza, publicada em 1677, escrita em forma de definições, axiomas e proposições."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Ética, obra principal de Spinoza, só foi publicada em 1677. O que tinha acontecido com o autor naquele mesmo ano?",
    "resposta": "Ele tinha morrido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ethics_(Spinoza_book)",
      "https://en.wikipedia.org/wiki/Baruch_Spinoza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ethics_(Spinoza_book)",
        "situacao": "ok",
        "texto": "Ethics, Demonstrated in Geometrical Order (Latin: Ethica, ordine geometrico demonstrata) is a philosophical treatise written in Latin by Baruch Spinoza (Benedictus de Spinoza). It was written between 1661 and 1675 and was first published posthumously in 1677.\n[…]\nHis frequent use of geometrical illustrations affords no evidence at all in support of a purely logico-mathematical interpretation of his philosophy; for Spinoza regarded geometrical figures, not in a Platonic or static manner, but as things traced out by moving particles or lines, etc., that is, dynamically.\n[…]\nShortly after his death in 1677, Spinoza's works were placed on the Catholic Church's Index Librorum Prohibitorum. Condemnations soon appeared, such as Aubert de Versé's L'impie convaincu (1685). According to its subtitle, in this work \"the foundations of [Spinoza's] atheism are refuted\". In June 1678—just over a year after Spinoza's death—the States of Holland banned his entire works, since they \"contain very many profane, blasphemous and atheistic propositions\".\n[…]\n1982 by Samuel Shirley (Hacket Publications), with Spinoza's selected Letters. Added to his translation of the Complete Works, with introduction and notes by Michael L. Morgan (also Hacket Publications, 2002).\n[…]\nCurley, Edwin M. Behind the Geometrical Method. A Reading of Spinoza's Ethics, Princeton: Princeton University Press, 1988.\n[…]\nKisner, Matthew J., ed. Spinoza: Ethics Demonstrated in Geometrical Order. trans. Michael Silverthorne and Matthew J. Kisner. Cambridge: Cambridge University Press 2018.\n[…]\nKrop, H. A., 2002, Spinoza Ethica, Amsterdam: Bert Bakker. Later editions, 2017, Amsterdam: Prometheus. In Dutch with Latin text by Spinoza.\n[…]\nThe Ethics public domain audiobook at LibriVox"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Baruch_Spinoza",
        "situacao": "ok",
        "texto": "Baruch (de) Spinoza (24 November 1632 – 21 February 1677), also known under his Latinized pen name Benedictus de Spinoza, was a philosopher of Portuguese-Jewish origin who was born and lived in the Dutch Republic. A forerunner of the Enlightenment, Spinoza significantly influenced modern biblical criticism, 17th-century rationalism, and Dutch intellectual culture, establishing himself as one of th\n[…]\nThe Short Treatise, a long-forgotten text that only survived in Dutch translation, was first published by Johannes van Vloten in 1862. While lodging with Herman Homan in Rijnsburg, Spinoza produced lenses and instruments to support himself and out of scientific interest. He began working on his Ethics and Descartes' Principles of Philosophy, which he completed in two weeks, communicating and interpreting Descartes' arguments and testing the water for his metaphysical and ethical ideas.\n[…]\nThe Ethics, a \"superbly cryptic masterwork\", contains many unresolved obscurities and is written with a forbidding mathematical structure modeled on Euclid's geometry. The writings of René Descartes have been described as \"Spinoza's starting point\". Spinoza's first publication was his 1663 geometric exposition of proofs using Euclid's model with definitions and axioms of Descartes's Principles of Philosophy.\n[…]\nSpinoza's notion of blessedness figures centrally in his ethical philosophy.\n[…]\n1677. Ethica Ordine Geometrico Demonstrata (The Ethics, finished 1674, but published posthumously, title added posthumously).\n[…]\nSpruit, Leen and Pina Totaro, 2011. The Vatican Manuscript of Spinoza's Ethica, Leiden: Brill. This is the only known surviving manuscript of Spinoza's Ethics, discovered in the Vatican archive and published in a bilingual Latin-English edition.\n[…]\nWorks by Baruch Spinoza at LibriVox (public domain audiobooks)\n[…]\nEthica Ordine Geometrico Demonstrata et in quinque partes distincta, in quibus agetur"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%89tica_%28Espinoza%29",
        "situacao": "ok",
        "texto": "A Ética ou Ética demonstrada à maneira dos geômetras (em latim: Ethica, ordine geometrico demonstrata), geralmente referida apenas como Ética de Espinoza, é considerada a principal obra do filósofo holandês de origem portuguesa Baruch Espinoza. Foi publicada postumamente, em 1677, ano da morte do autor.\n[…]\nApós a publicação, em 1663, de Princípios da Filosofia Cartesiana (Renati Des Cartes Principiorum Philosophiae pars I et II), caracterizado pela exposição more geométrico (\"ao modo geométrico\") que seria também típica da obra-prima de Espinoza, o filósofo fez circular entre alguns amigos um novo projeto da Ética, ainda provisório, se bem que ele próprio considerasse a obra quase completa; nesta fase a obra era intitulada Philosophia.\n[…]\nNão obstante a Ética de Espinoza ser uma obra extremamente original e radical, o seu autor sofreu a influência de vários pensadores e o seu conhecimento profundo dos problemas filosóficos e do modo como tinham sido tratados no passado, mesmo recentemente, emerge do conteúdo da própria Ética.\n[…]\nUm leitura asperamente crítica da Ética foi a que expôs Pierre Bayle na entrada dedicada a Espinoza no seu Dicionário histórico-crítico (Dictionnaire historique et critique), publicado em 1697, onde argumentava entre outras coisas que Espinoza tinha arbitrariamente utilizado a palavra \"Deus\" para se referir a um ente que tinha privado de todas as características de um Deus legitimamente entendido, que tinha uma grande fortuna, e defendeu a qualificação de ateu atribuída sem hesitação a Espinoza por Voltaire no Dicionário filosófico (Dictionnaire philosophique).\n[…]\nBaruch Spinoza (2013). Etica dimostrata secondo l'ordine geometrico. Milano: Bompiani. Trad.: Durante. Org.: G. Gentile, G. Radetti. ISBN 978-88-452-5898-5",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Fedro",
      "descricao": "Diálogo de Platão sobre o amor e a retórica, onde aparece a alegoria da alma como uma carruagem."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No diálogo Fedro, Platão compara a alma a uma carruagem guiada por um cocheiro. Quantos cavalos alados a puxam?",
    "resposta": "Dois",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chariot_Allegory",
      "https://en.wikipedia.org/wiki/Phaedrus_(dialogue)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chariot_Allegory",
        "situacao": "ok",
        "texto": "The Phaedrus (; Ancient Greek: Φαῖδρος, romanized: Phaidros), written by Plato, is a dialogue between Socrates and Phaedrus, an interlocutor in several dialogues. The Phaedrus was presumably composed around 370 BC, about the same time as Plato's Republic and Symposium.\n[…]\nPhaedrus\n[…]\nIn the Phaedrus, Socrates makes the rather bold claim that some of life's greatest blessings flow from madness; and he clarifies this later by noting that he is referring specifically to madness inspired by the gods. Phaedrus is Plato's only dialogue that shows Socrates outside the city of Athens, out in the country. It was believed that spirits and nymphs inhabited the country, and Socrates specifically points this out after the long palinode with his comment about listening to the cicadas.\n[…]\nThe pederastic relationships common to ancient Greek life are also at the fore of this dialogue. In addition to theme of love discussed in the speeches, seeming double entendres and sexual innuendo are abundant; we see the flirtation between Phaedrus and Socrates.\n[…]\nSocrates, ostensibly the lover, exhorts Phaedrus to lead the way at various times, and the dialogue ends with Socrates and Phaedrus leaving as \"friends\": equals, rather than partaking in the lover/beloved relationship inherent in Greek pederasty. In the beginning, they sit themselves under a chaste tree, which is precisely what its name suggests—often known as \"monk's pepper\", it was used by monks to decrease sexual urges and is believed to be an antaphrodisiac.\n[…]\nPhaedrus, in a collection of Plato's Dialogues at Standard Ebooks\n[…]\nLauschke, Jens. \"A MADNESS CALLED LOVE: An Interpretation of Plato's Phaedrus.\" Taxila Publications. 2022. ISBN 978-3948459000. (Jowett translation and interpretation)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Phaedrus_(dialogue)",
        "situacao": "ok",
        "texto": "The Phaedrus (; Ancient Greek: Φαῖδρος, romanized: Phaidros), written by Plato, is a dialogue between Socrates and Phaedrus, an interlocutor in several dialogues. The Phaedrus was presumably composed around 370 BC, about the same time as Plato's Republic and Symposium.\n[…]\nPhaedrus\n[…]\nIn the Phaedrus, Socrates makes the rather bold claim that some of life's greatest blessings flow from madness; and he clarifies this later by noting that he is referring specifically to madness inspired by the gods. Phaedrus is Plato's only dialogue that shows Socrates outside the city of Athens, out in the country. It was believed that spirits and nymphs inhabited the country, and Socrates specifically points this out after the long palinode with his comment about listening to the cicadas.\n[…]\nThe pederastic relationships common to ancient Greek life are also at the fore of this dialogue. In addition to theme of love discussed in the speeches, seeming double entendres and sexual innuendo are abundant; we see the flirtation between Phaedrus and Socrates.\n[…]\nSocrates, ostensibly the lover, exhorts Phaedrus to lead the way at various times, and the dialogue ends with Socrates and Phaedrus leaving as \"friends\": equals, rather than partaking in the lover/beloved relationship inherent in Greek pederasty. In the beginning, they sit themselves under a chaste tree, which is precisely what its name suggests—often known as \"monk's pepper\", it was used by monks to decrease sexual urges and is believed to be an antaphrodisiac.\n[…]\nPhaedrus, in a collection of Plato's Dialogues at Standard Ebooks\n[…]\nLauschke, Jens. \"A MADNESS CALLED LOVE: An Interpretation of Plato's Phaedrus.\" Taxila Publications. 2022. ISBN 978-3948459000. (Jowett translation and interpretation)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fedro_%28di%C3%A1logo%29",
        "situacao": "ok",
        "texto": "Fedro (em grego:  Φαῖδρος), escrito por Platão, é um diálogo entre o protagonista principal de Platão, Sócrates, e Fedro, um interlocutor em diversos diálogos. Fedro foi possivelmente composto por volta de 370 a.C., mesmo período que A República de Platão e O Banquete.\n[…]\nFedro - ateniense jovem e rico, filho de Phythoclès, do demo de Myrrhinos.\n[…]\nA posição de Fedro no corpus de Platão é um ponto ainda em discussão. Discute-se se a obra pertence ao período da juventude ou da velhice do autor. Entretanto, Fedro parece ser posterior ao Banquete e à República\n[…]\nFedro versa sobre temas como o amor, a alma, a escrita e a retórica, utilizando-se, além da forma do diálogo, da enunciação de discursos, de mitos e orações. Partindo do eixo temático do Eros, dimensão filosófica essencial, Platão evoca as temáticas da alma da retórica - a primeira enquanto veículo do Eros e a segunda por sua finalidade de persuadir a alma dos homens.\n[…]\nPor meio do diálogo entre Sócrates e Fedro, Platão aponta a investigação filosófica como a busca por excelência do verdadeiro cultivo da alma, em contraposição ao fazer retórico.\n[…]\nSegundo Andrea Capra, nesse diálogo Platão teria feito recurso poético ao mito de Helena e referência à própria Academia quando põe Sócrates sentado sob um plátano.\n[…]\nA Academia, fundada por Platão em Atenas, foi estabelecida nos campos dedicados a Academo, herói grego que teve participação em um resgate de Helena. Os relatos indicam que abundavam plátanos no local. Devido a isso, Tímon de Flios realizou um trocadilho com o nome de Platão em seus versos, citando a ambientação do Fedro:\"Um peixe-plano liderava todos eles, mas este era um que falava,\n[…]\nIl Fedro di Platone, por Maria Chiara Pievatolo (em italiano).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Tao Te Ching",
      "descricao": "Texto clássico chinês atribuído a Lao-Tsé, fundamento do taoísmo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Tao Te Ching, livro atribuído a Lao-Tsé, é dividido em quantos capítulos curtos?",
    "resposta": "81",
    "distratores": [
      "64",
      "99",
      "108"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tao_Te_Ching"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tao_Te_Ching",
        "situacao": "ok",
        "texto": "The Tao Te Ching or Dào Dé Jīng, (traditional Chinese: 道德經; simplified Chinese: 道德经; lit. 'Classic of the Way and its Virtue') also known simply as the Laozi, is an ancient Chinese classic text traditionally credited to the sage Laozi, regarded as the foundational Taoist text. Central to both philosophical and religious Taoism, it has been \"profoundly influential\" more broadly in Chinese culture, \n[…]\nThe modern Tao te Ching is divided into two parts; part one, chapters 1–37, which came to be known as the Daojing (Classic of Dao),  often considered more \"metaphysical\"; and part two, the Dejing (Classic of Virtue), chapters 38–81, often considered more \"political\". Chapter one begins with \"Dao\", chapter thirty eight with \"de\". Although Dao and de are in both parts of the work, all but four of sixteen uses of the term de virtue appear in the second de \"virtue\" half of the work.\n[…]\nThe typical Tao te Ching has chapter numbers but no titles; alongside the recovered Huangdi Sijing, the late Warring States period texts Xunzi and Han Feizi were the first to give titles to chapters. Traditional sources report that early versions had 64, 68, or 72 chapters. The later Han dynasty Heshang Gong divided it into today's number of chapters (81) and gave it chapters titles, but it wasn't universally accepted until \"perhaps\" the Tang dynasty.\n[…]\nThe Tao Te Ching is a text of around 5,162 to 5,450 Chinese characters in 81 brief chapters or sections (章). There is some evidence that the chapter divisions were later additions—for commentary, or as aids to rote memorisation—and that the original text was more fluidly organised. It has two parts, the Tao Ching (道經; chapters 1–37) and the Te Ching (德經; chapters 38–81), which may have been edited together into the received text, possibly reversed from an original Te Tao Ching.\n[…]\nTao Te Ching public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tao_Te_Ching",
        "situacao": "ok",
        "texto": "Tao Te Ching, Dao de Jing ou Tao-te king (em chinês: , Dàodé jīng), comumente traduzido como O Livro do Caminho e da Virtude, é uma das mais conhecidas e importantes obras da literatura da China. Foi escrito entre 350 e 250 a.C.\n[…]\nTrata‑se de um texto filosófico relativamente curto, com pouco mais de 5000 caracteres, que era originariamente conhecido como Lao Tzi (老子, que significa \"Velho Mestre\") ou como O Texto de 5000 palavras (五千字文, wǔqiān zìwén). O seu nome atual vem das palavras que iniciam cada uma das duas secções principais em que é hoje normalmente dividido, chamadas Livro do Tao (道經, dào jīng) e Livro do Te (德經, dé jīng). A palavra Ching (經, jīng) designa um livro considerado como um clássico.\n[…]\nAs diversas correntes do pensamento religioso e filosófico através dos tempos atribuíram milhares de interpretações diferentes ao sentido do Tao Te Ching. Porém, o tema principal do livro é localizado no seu primeiro provérbio: \"O tao que pode ser dito não é o tao verdadeiro\".\n[…]\nRainald Simon: Daodejing. Das Buch vom Weg und seiner Wirkung. Neuübersetzung. Reclam, Stuttgart 2009, ISBN 978-3-15-010718-8Rijckenborgh, Jan van (2006). Gnosis Chinesa - Comentários sobre o Tao te King. [S.l.]: Rosacruz (atual Pentagrama Publicações). 978-85-62923-00-5  - Download completo gratuito\n[…]\nWu Jyh Cherng, Tao Te Ching - O Livro do Caminho e da Virtude de Lao Tse (tradução direta do chinês para o português). Editora Mauad* Julien, Stanislas, ed. (1842), Le Livre de la Voie et de la Vertu, Paris: Imprimerie Royale . (em francês)* Chalmers, John, ed. (1868), The Speculations on Metaphysics, Polity, and Morality of the \"Old Philosopher\" Lau-tsze, ISBN 9780524077887, London: Trübner & Co.\n[…]\nO Tao Te Ching de Sthephen Mitchel",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Atlântida",
      "descricao": "Ilha lendária que teria afundado no oceano, descrita nos diálogos Timeu e Crítias de Platão."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A lenda da Atlântida, uma ilha poderosa que teria afundado no mar, aparece pela primeira vez nos diálogos de que filósofo grego?",
    "resposta": "Platão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atlantis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atlantis",
        "situacao": "ok",
        "texto": "Atlantis (Ancient Greek: Ἀτλαντὶς νῆσος, romanized: Atlantìs nêsos, lit. 'island of Atlas') is a fictional island mentioned in Plato's works Timaeus and Critias as part of an allegory on the hubris of nations. By describing Atlantis as a naval empire from the west that had conquered most of Europe and Libya, Plato purposely created a literary contrast with the Achaemenid Empire, the great land-bas\n[…]\nThe four people appearing in those two dialogues are the politicians Critias and Hermocrates as well as the philosophers Socrates and Timaeus of Locri, although only Critias speaks of Atlantis. In his works Plato makes extensive use of the Socratic method in order to discuss contrary positions within the context of a supposition.\n[…]\nIn order to give his account of Atlantis verisimilitude, Plato mentions that the story was heard by Solon in Egypt, and transmitted orally over several generations through the family of Dropides, until it reached Critias, a dialogue speaker in Timaeus and Critias. Solon had supposedly tried to adapt the Atlantis oral tradition into a poem (that if published, was to be greater than the works of Hesiod and Homer). While it was never completed, Solon passed on the story to Dropides.\n[…]\nIn the new era, the third century AD Neoplatonist Zoticus wrote an epic poem based on Plato's account of Atlantis. Plato's work may already have inspired parodic imitation, however. Writing only a few decades after the Timaeus and Critias, the historian Theopompus of Chios wrote of a land beyond the ocean known as Meropis. This description was included in Book 8 of his Philippica, which contains a dialogue between Silenus and King Midas.\n[…]\nThere follows a survey of the lost civilisations of Hyperborea and Lemuria as well as Atlantis, accompanied by much spiritualist lore.\n[…]\nMedia related to Atlantis at Wikimedia Commons\n[…]\nThe dictionary definition of atlantis at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atl%C3%A2ntida",
        "situacao": "ok",
        "texto": "Atlântida (em grego clássico: Ἀτλαντὶς νῆσος – trad.: “ilha de Atlas”) é uma ilha fictícia mencionada nas obras Timeu e Crítias do filósofo grego Platão como parte de uma alegoria sobre a arrogância das nações. Na história, Atlântida é descrita como um império naval que governava todas as partes ocidentais do chamado mundo conhecido, tornando-a a contra-imagem literária do Império Aquemênida.\n[…]\nAs únicas fontes primárias sobre Atlântida são os diálogos Timeu e Crítias do filósofo grego Platão; todas as outras menções à ilha são baseadas nestas referências. Os diálogos afirmam citar Sólon, que teria visitado o Egito entre 590 e 580 a.C. onde teria traduzido registros egípcios sobre Atlântida. Platão introduziu Atlântida no Timeu, escrito em 360 a.C.:\n[…]\nAlguns escritores antigos viam Atlântida como um mito fictício ou metafórico; outros acreditavam que era real. Aristóteles acreditava que Platão, seu professor, havia inventado a ilha para ensinar filosofia.\n[…]\nO historiador espanhol Francisco López de Gomara foi o primeiro a afirmar que Platão se referia à América, assim como o filósofo inglês Francis Bacon e o estudioso alemão Alexander von Humboldt; Janus Joannes Bircherod disse em 1663 orbe novo non-novo (\"o Novo Mundo não é novo\"). Athanasius Kircher aceitou o relato de Platão como literalmente verdadeiro, descrevendo Atlântida como um pequeno continente localizado no Oceano Atlântico.\n[…]\nAcredita-se que o cartógrafo e geógrafo flamengo Abraham Ortelius tenha sido o primeiro a propor que os continentes estavam unidos antes de chegarem às suas posições atuais. Na edição de 1596 do sua obra Thesaurus Geographicus ele escreveu: \"A menos que seja uma fábula, a ilha de Gadir ou Gades [Cadiz] seria a parte restante da ilha de Atlântida ou da América, que não foi afundada (como relata Platão em Timeu) tanto quanto foi arrancada da Europa e da África por terremotos e inundações...\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "O Capital",
      "descricao": "Obra de crítica da economia política de Karl Marx, cujo primeiro volume saiu em 1867."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Marx só viu publicado o primeiro volume de O Capital. Quem preparou e lançou o segundo e o terceiro volumes, após a morte dele?",
    "resposta": "Friedrich Engels",
    "fonte": [
      "https://en.wikipedia.org/wiki/Das_Kapital"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Das_Kapital",
        "situacao": "ok",
        "texto": "Capital: A Critique of Political Economy (German: Das Kapital. Kritik der politischen Ökonomie), also known as Das Kapital (German: [das kapiˈtaːl]), is a foundational text in Marxist theory by Karl Marx. His magnum opus, the work is a critical analysis of political economy, meant to reveal the economic patterns underpinning the capitalist mode of production.\n[…]\nCapital is divided into three volumes, of which only the first was published during Marx's lifetime, in 1867; the others were completed from his manuscripts and published by his collaborator Friedrich Engels in 1885 and 1894.\n[…]\nMarx delivered the German manuscript for Volume I to his publisher Otto Meissner in Hamburg in April 1867, and it was published in September. Meissner expected the next two volumes before the end of that year, a timeline Marx was initially optimistic about, though his meticulous approach often led to delays that frustrated his associates, including his lifelong collaborator and friend Friedrich Engels, who had been urging him for decades to finish the work.\n[…]\nThe unfinished nature of the work, particularly Volumes II and III, and the editorial role of Engels, have also led to debates about the consistency and coherence of Marx's overall argument.\n[…]\nCapital, Volume II (1885); manuscript not completed by Marx before his death in 1883; subsequently edited and published, by friend and collaborator Friedrich Engels as the work of Marx:\n[…]\nCapital, Volume III (1894); manuscript not completed by Marx before his death in 1883; subsequently edited and published, by friend and collaborator Friedrich Engels as the work of Marx:\n[…]\nEngels, Friedrich (1867) \"Synopsis of Capital\".\n[…]\nFriedrich Engels (1975). On Marx's Capital. Progress Publishers. Includes Engels' Synopsis of Capital.\n[…]\nTeeple, Gary \"Notes for the study of Marx's Capital: Volume One\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Capital",
        "situacao": "ok",
        "texto": "O Capital: Crítica da economia política (em alemão: Das Kapital. Kritik der politischen Ökonomie), também conhecido como Das Kapital, é um texto fundamental da teoria marxista, escrito por Karl Marx. Considerada sua obra-prima, a obra é uma análise crítica da economia política, destinada a revelar os padrões econômicos subjacentes ao modo de produção capitalista.\n[…]\nO Capital divide-se em três livros, dos quais apenas o primeiro foi publicado durante a vida de Marx, em 1867; os demais foram concluídos a partir de seus manuscritos e publicados por seu colaborador Friedrich Engels em 1885 e 1894.\n[…]\nMarx entregou o manuscrito alemão do livro I ao editor Otto Meissner, em Hamburgo, em abril de 1867, e a obra foi publicada em setembro. Meissner esperava receber os dois livros seguintes antes do fim daquele ano, prazo que Marx inicialmente considerava possível, embora sua abordagem meticulosa frequentemente provocasse atrasos que frustravam seus associados, entre eles seu amigo e colaborador de toda a vida, Friedrich Engels, que durante décadas o pressionou a concluir a obra.\n[…]\nAssim, depois da morte de Marx, Engels baseou suas terceira — 1883 — e quarta — 1890 — edições alemãs principalmente na segunda edição alemã, incorporando apenas algumas modificações da versão francesa.\n[…]\nA primeira tradução inglesa do livro I, realizada por Samuel Moore e Edward Aveling — genro de Marx — e editada por Engels, foi publicada na Grã-Bretanha em 1887, quatro anos depois da morte de Marx. Baseou-se na terceira edição alemã de Engels, de 1883. A editora Macmillan & Co. recusara anteriormente publicar uma tradução inglesa durante a vida de Marx.\n[…]\nO caráter inacabado da obra, sobretudo dos livros II e III, e o papel editorial de Engels também provocaram debates sobre a consistência e a coerência do argumento geral de Marx.\n[…]\nSite do Pensamento Econômico sobre Marx",
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
