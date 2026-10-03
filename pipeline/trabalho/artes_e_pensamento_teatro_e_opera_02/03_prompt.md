Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Teatro e Ópera** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "A Dama das Camélias",
      "descricao": "Romance de 1848 de Alexandre Dumas Filho, adaptado por ele para o teatro em 1852, sobre a cortesã Marguerite Gautier."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que escritor francês criou A Dama das Camélias, história de uma cortesã que Verdi transformou na ópera La Traviata?",
    "resposta": "Alexandre Dumas Filho",
    "distratores": [
      "Alexandre Dumas pai",
      "Victor Hugo",
      "Honoré de Balzac"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Dame_aux_Camélias",
      "https://en.wikipedia.org/wiki/La_traviata"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Dame_aux_Camélias",
        "situacao": "ok",
        "texto": "The Lady of the Camellias (French: La Dame aux Camélias) is a novel by Alexandre Dumas fils. First published in 1848 and subsequently adapted by Dumas for the stage, the play premiered at the Théâtre du Vaudeville in Paris, France, on February 2, 1852. It was an instant success. Shortly thereafter, Italian composer Giuseppe Verdi set about putting the story to music in the 1853 opera La traviata, \n[…]\nWritten by Alexandre Dumas fils (1824–1895) when he was 23 years old, and first published in 1848, La Dame aux Camélias is a semi-autobiographical novel based on the author's brief love affair with a courtesan, Marie Duplessis. Set in mid-19th-century France, the novel tells the tragic love story between fictional characters Marguerite Gautier, a demimondaine or courtesan suffering from consumption, and Armand Duval, a young bourgeois.\n[…]\nIn 1875, Dumas fils's play was adapted by English playwright James Mortimer into the drama Heartsease. This was the first time that La Dame aux Camélias had been granted a public performance in England in any form. The play premiered at the Princess's Theatre in London. The setting was changed to England, and Marguerite Gautier was renamed Constance Hawthorne, now an actress instead of a courtesan.\n[…]\nOf all Dumas fils's theatrical works, La Dame aux Camélias is the most popular around the world. In 1878, Scribner's Monthly reported that \"not one other play by Dumas fils has been received with favor out of France\".\n[…]\nLa Signora delle Camelie, a 1915 Italian-language silent film. It was directed by Gustavo Serena. It stars Francesca Bertini and Serena.\n[…]\nLa Dame aux Camélias, a 1953 French-language film adapted by Jacques Natanson and directed by Raymond Bernard, starring Gino Cervi, Micheline Presle and Roland Alexandre.\n[…]\nLa Dame aux Camélias public domain audiobook at LibriVox (in French), Camille (in English), and La Dama de las Camilias (in Spanish)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/La_traviata",
        "situacao": "ok",
        "texto": "La traviata (Italian: [la traviˈaːta, -aˈvjaː-]; The Wayward Woman) is an opera in three acts by Giuseppe Verdi set to an Italian libretto by Francesco Maria Piave. It is based on La Dame aux camélias (1852), a play by Alexandre Dumas fils, which he adapted from his own 1848 novel. The opera was originally titled Violetta, after the main character. It was first performed on 6 March 1853 at La Feni\n[…]\nPiave and Verdi wanted to follow Dumas in giving the opera a contemporary setting, but the authorities at La Fenice insisted that it be set in the past, \"c. 1700\". It was not until the 1880s that the composer's and librettist's original wishes were carried out and \"realistic\" productions were staged. La traviata has become immensely popular and is among the most frequently performed of all operas.\n[…]\nVerdi and Giuseppina Strepponi visited Paris from late 1851 and into March 1852. In February the couple attended a performance of Alexander Dumas fils'  The Lady of the Camellias. As a result of this, Verdi's biographer Mary Jane Phillips-Matz reports, the composer immediately began to compose music for what would later become La traviata.\n[…]\nHowever, Julian Budden notes that Verdi had probably read the Dumas novel some time before, and, after seeing the play and returning to Italy, \"he was already setting up an ideal operatic cast for it in his mind\", shown by his dealings with La Fenice.\n[…]\nOne subject was chosen, Piave set to work, and then Verdi threw in another idea, which may have been La traviata. Within a short time, a synopsis was dispatched to Venice under the title of Amore e morte (Love and Death). However, Verdi wrote to his friend De Sanctis telling him that \"for Venice I'm doing La Dame aux camélias which will probably be called La traviata.\n[…]\nPiave, Francesco Maria (1865). Violetta, la Traviata, opéra en 4 actes, musique de G. Verdi.\n[…]\n\"La traviata films\", AllMovie"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Dama_das_Cam%C3%A9lias",
        "situacao": "ok",
        "texto": "A Dama das Camélias (título original em francês: La dame aux camélias), é um romance do escritor francês Alexandre Dumas, filho, publicado pela primeira vez em 1848.\n[…]\nA Dama das Camélias tem cunho autobiográfico. Dumas Filho inspirou-se em suas próprias relações com a cortesã Marie Duplessis, e ainda no fato de ser ele próprio filho ilegítimo de Alexandre Dumas. Experimentando a rejeição, encontrou ao lado da amante a estabilidade que necessitava, e que veio a ser-lhe o mote para o romance.\n[…]\nA obra é ambientada na revolução de 1848, em França. Retrata o romance entre Margarita Gautier, a mais cobiçada cortesã parisiense, e Armando Duval, um jovem estudante de direito.\n[…]\nO jovem Armando pertence a uma família aristocrática de Paris do século XIX. Ele apaixona-se pela cortesã Marguerite. Mesmo diante da intolerância de sua família e do preconceito social, eles tentarão viver sua história de amor.\n[…]\nAdaptado para palco pelo próprio escritor, A Dama das Camélias teve sua primeira apresentação no Theatre de Vaudeville, em Paris, a 2 de fevereiro de 1852, obtendo imediato sucesso, o que levou o compositor Giuseppe Verdi a compor a música sobre a peça, estreando em o ano seguinte (1853) a ópera La traviata, mudando o nome da protagonista de \"Marguerite Gautier\" para \"Violetta Valéry\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "O Rei da Vela",
      "descricao": "Peça de Oswald de Andrade escrita em 1933 e encenada pelo Teatro Oficina em 1967."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor modernista escreveu O Rei da Vela, peça de 1933 que virou símbolo do tropicalismo na montagem do Teatro Oficina, em 1967?",
    "resposta": "Oswald de Andrade",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Rei_da_Vela"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Rei_da_Vela",
        "situacao": "ok",
        "texto": "O Rei da Vela é uma peça de teatro escrita em 1933 por Oswald de Andrade, um dos principais nomes do Modernismo brasileiro, e publicada em 1937. Contudo, só foi encenada pela primeira vez trinta anos após sua publicação e refletiu, por meio da visão do autor, a sociedade brasileira de sua época.\n[…]\nEscrita no embalo da crise financeira de 1929, a obra aborda a valorização da indústria na década de 30 e a “modernização” do país que se estabeleceu com o Governo Vargas, tratando da junção - ou submissão - da aristocracia decadente com a burguesia em ascensão para servir ao capital estrangeiro. A peça se divide em três atos e segue a estrutura do teatro tradicional.\n[…]\nNessa obra, Oswald de Andrade estabelece claro diálogo intertextual com a história de Abelardo e Heloísa, casal histórico que vive um romance trágico no final da Idade Média (A história das minhas calamidades), e a peça O Rei da Vela faz uma paródia dessa história, retirando esses personagens do contexto medieval e inserindo-os no contexto brasileiro das décadas de 20 e 30.\n[…]\nCom os personagens Heloísa de Lesbos, Abelardo I e Mr. Jones, Oswald de Andrade representa as três forças que regem o país: a aristocracia rural que se une à burguesia nacional, para melhor servir ao capital estrangeiro. Assim, temos clara uma crítica à submissão do Brasil aos outros países.\n[…]\nUm caminho para entendermos o teatro de Oswald de Andrade é perceber a revelação da falsidade de um discurso liberal, as relações marcadas pelo interesse capital e material, a competição pelo lucro, as falsas relações amorosas, a distância entre a modernidade e o atraso, a metáfora de um país hipotecado ao imperialismo, o ócio brasileiro e a manutenção do poder, o espaço da casa.\n[…]\nA peça só foi realizada em palco em 1967."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Morte e Vida Severina",
      "descricao": "Poema dramático de João Cabral de Melo Neto, de 1955, sobre a jornada do retirante Severino."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1965, o grupo de teatro da PUC paulista encenou Morte e Vida Severina, de João Cabral de Melo Neto. Quem compôs as músicas da montagem?",
    "resposta": "Chico Buarque",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Morte_e_Vida_Severina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Morte_e_Vida_Severina",
        "situacao": "ok",
        "texto": "Morte e Vida Severina é um livro de poema regionalista e modernista do escritor brasileiro João Cabral de Melo Neto, escrito entre 1954 e 1955 e publicado em 1955.\n[…]\nA obra narra o sofrimento enfrentado por Severino apresentando um poema dramático que relata a dura trajetória de um migrante sertanejo (retirante) em busca de uma vida mais fácil e favorável na capital pernambucana.\n[…]\nEm 1965, Roberto Freire, diretor do teatro TUCA da PUC de São Paulo, pediu ao então muito jovem Chico Buarque que musicasse a obra, encenada no palco com trinta estudantes e centenas de outros na retaguarda.\n[…]\nMorte e Vida Severina em Desenho Animado é uma versão audiovisual da obra prima de João Cabral de Melo Neto, adaptada para os quadrinhos pelo cartunista Miguel Falcão. Preservando o texto original, a animação é 3D.\n[…]\nEm preto e branco, fiel à aspereza do texto e aos traços dos quadrinhos, a animação narra a dura caminhada de Severino, um retirante nordestino, que migra do sertão para o litoral pernambucano em busca de uma vida melhor.\n[…]\nA primeira representação de Morte e Vida Severina se deu com um grupo de teatro do Pará em 1957. A peça foi ensaiada e montada pela primeira vez em Belém pelo grupo Norte Teatro Escola, e depois foi levada para o I Festival Nacional de Teatro de Estudantes, em Recife (1957), sendo promovido por Paschoal Carlos Magno. A montagem foi premiada, tendo o ator Carlos Miranda, intérprete de Severino, obtido o primeiro prêmio como revelação de ator.\n[…]\nA história é narrada em primeira pessoa pelo personagem Severino, e é composta de monólogos e diálogos com outros personagens."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "O Fantasma da Ópera (romance)",
      "descricao": "Romance francês de Gaston Leroux, publicado em 1909 e 1910, sobre um gênio mascarado que vive sob a Ópera de Paris."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Antes de virar musical de sucesso, O Fantasma da Ópera foi um romance francês do início do século vinte. Quem o escreveu?",
    "resposta": "Gaston Leroux",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Phantom_of_the_Opera",
      "https://en.wikipedia.org/wiki/Gaston_Leroux"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Phantom_of_the_Opera",
        "situacao": "desambiguacao",
        "texto": "The Phantom of the Opera may refer to:\n\n\n== Novel ==\nThe Phantom of the Opera (novel), 1910, by Gaston Leroux\n\n\n== Characters ==\nErik (The Phantom of the Opera), the title character of the novel and its adaptations\n\n\n== Theatre ==\nPhantom of the Opera (1976 musical), adapted by Ken Hill\nThe Phantom of the Opera (1986 musical), adapted by Andrew Lloyd Webber\nThe Phantom of the Opera (original Londo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gaston_Leroux",
        "situacao": "ok",
        "texto": "Gaston Louis Alfred Leroux (French: [ɡastɔ̃ lwi alfʁɛd ləʁu]; 6 May 1868 – 15 April 1927) was a French journalist and author of detective fiction.\n[…]\nLeroux published his most famous work, The Phantom of the Opera, as a serial in 1909 and 1910, and as a book in 1910 (with an English translation appearing in 1911). Balaoo followed in 1911, which was made into a film several times (in 1913, 1927 and 1942).\n[…]\nLeroux was made a Chevalier de la Legion d'honneur in 1909. He died at age 58 in Nice, France, in 1927.\n[…]\n1897 – Le-Turc-au-Mans (under the name Gaston Larive, co-author: Joseph Leroux)\n[…]\nFilms based on The Phantom of the Opera\n[…]\nThe Gaston Leroux Bedside Companion, an anthology published in 1980 and edited by Peter Haining, as well as the Haining-edited The Real Opera Ghost and Other Tales By Gaston Leroux (Sutton, 1994), include a story attributed to Leroux entitled The Waxwork Museum. A foreword alleges that the translation by Alexander Peters first appeared in Fantasy Book in 1969 (but no original French publication date is given).\n[…]\nWorks by Gaston Leroux in eBook form at Standard Ebooks\n[…]\nWorks by Gaston Leroux at Project Gutenberg\n[…]\nWorks by or about Gaston Leroux at the Internet Archive\n[…]\nWorks by Gaston Leroux at LibriVox (public domain audiobooks)\n[…]\nAbout Gaston Leroux, gaston-leroux.net\n[…]\nBooks and Biography of Leroux, Gaston Archived 2016-03-04 at the Wayback Machine, readprint.com\n[…]\nEverything about Phantom legend and his creator, Gaston Leroux Archived 2006-07-18 at the Wayback Machine, ladyghost.com\n[…]\n(in French) Gaston Leroux, his work in audio version Archived 2009-06-01 at the Wayback Machine, litteratureaudio.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Phantom_of_the_Opera",
        "situacao": "desambiguacao",
        "texto": "O Fantasma da Ópera pode referir-se a:\n\nO Fantasma da Ópera (musical) — cujo título original é The Phantom of the Opera\nThe Phantom of the Opera (canção) — canção-título do musical de Andrew Llyod Webber\nThe Phantom of the Opera (1925) — filme com Lon Chaney\nThe Phantom of the Opera (1943) — filme dirigido por Arthur Lubin\nO Fantasma da Ópera (1962) — filme com Herbert Lom cujo título original é T",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Cats (musical)",
      "descricao": "Musical de Andrew Lloyd Webber, estreado em Londres em 1981, sobre uma tribo de gatos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O musical Cats, de Andrew Lloyd Webber, transformou em canções um livro de poemas sobre gatos. Quem é o poeta?",
    "resposta": "T. S. Eliot",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cats_(musical)",
      "https://en.wikipedia.org/wiki/Old_Possum%27s_Book_of_Practical_Cats"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cats_(musical)",
        "situacao": "ok",
        "texto": "Cats is a sung-through musical with music by Andrew Lloyd Webber. It is based on the 1939 poetry collection Old Possum's Book of Practical Cats by T. S. Eliot. The musical tells the story of a tribe of cats called the Jellicles and the night they make the \"Jellicle choice\" by deciding which cat will ascend to the Heaviside Layer and come back to a new life. As of 2024, Cats remains the fifth-longe\n[…]\nCats is based on T. S. Eliot's 1939 poetry book Old Possum's Book of Practical Cats, and the songs in the musical consist of Eliot's verse set to music by Andrew Lloyd Webber. The musical is unusual in its construction; along with Eliot's poems, music and dance are the main focus of the show at the expense of a traditional narrative structure. Musicologists William Everett and Paul Laird described Cats as \"combining elements of the revue and concept musical\".\n[…]\nPractical Cats, as the show was then called, was first presented as a song cycle at the 1980 summer Sydmonton Festival. The concert was performed by Gemma Craven, Gary Bond and Paul Nicholas. Eliot's widow and literary executor, Valerie, was in attendance and brought along various unpublished cat-themed poems by Eliot. One of these was \"Grizabella the Glamour Cat\" which, although rejected from Eliot's book for being \"too sad for children\", gave Lloyd Webber the idea for a full-blown musical.\n[…]\nNunn initially envisioned Practical Cats as a chamber piece for five actors and two pianos, which he felt would reflect \"Eliot's charming, slightly offbeat, mildly satiric view of late-1930s London\". However, he yielded to Lloyd Webber's more ambitious vision for the musical. Nunn was also convinced that for the musical to have the wide commercial appeal that the producers desired, it could not remain as a series of isolated numbers but instead had to have a narrative through line.\n[…]\n​Cats​ at the Internet Broadway Database"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Old_Possum%27s_Book_of_Practical_Cats",
        "situacao": "ok",
        "texto": "Old Possum's Book of Practical Cats (1939) is a collection of whimsical light poems by T. S. Eliot about feline psychology and sociology, published by Faber and Faber. It serves as the basis for Andrew Lloyd Webber's 1981 musical Cats.\n[…]\nEliot wrote the poems in the 1930s and included them, under his assumed name \"Old Possum\", in letters to his godchildren. Eliot tried to persuade the poet Ralph Hodgson to illustrate the poems but failed.\n[…]\n\"The Naming of Cats\"\n[…]\n\"The Ad-dressing  of Cats\"\n[…]\nThe best-known musical adaptation of the poems is Andrew Lloyd Webber's musical Cats, which was premiered in the West End of London in 1981 and on Broadway in 1982. It became the longest-running Broadway show in history until it was overtaken by another musical by Lloyd Webber, The Phantom of the Opera. As well as the characters found in the book, Cats introduces several additional characters from Eliot's unpublished drafts, most notably Grizabella.\n[…]\nThe musical was adapted into a direct-to-video film in 1998. A feature film adaptation of Cats was released on 20 December 2019. As of December, 2019, the feature film's production cost was $100 million but only grossed $38.3 million globally, yielding an approximate $70 million loss.\n[…]\nOn 5 June 2009, The Times revealed that in 1937 Eliot had composed a 34-line poem entitled \"Cows\" for the children of Frank Morley, a friend who, like Eliot, was a director of the publishing company Faber and Faber. Morley's daughter, Susanna Smithson, uncovered the poem as part of the BBC Two programme Arena: T.S. Eliot, broadcast that night as part of the BBC Poetry Season.\n[…]\nT.S. Eliot Old Possum's Book of Practical Cats\n[…]\nOld Possum's Book of Practical Cats at the British Library\n[…]\nCats at AndrewLloydWebber.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cats_%28musical%29",
        "situacao": "ok",
        "texto": "Cats é um musical composto por Andrew Lloyd Webber que teve sua estreia em Londres em 1981, mas que se consagrou por dezoito anos em cartaz na Broadway. Para realizar esse espetáculo, Lloyd musicou uma série de poemas de T. S. Eliot sobre gatos, onde Memory foi a música de maior sucesso.\n[…]\nCats é o quarto show de maior duração na história da Broadway e West End, e era o mais antigo espetáculo da Broadway entre 1997-2006, superado pelo O Fantasma da Ópera, também de Lloyd Webber. Foi realizado em todo o mundo muitas vezes e foi traduzido para mais de 20 idiomas.\n[…]\nComposta por Andrew Lloyd Webber, a produção de Cats é baseada nos poemas de T. S. Eliot de 1939, que o compositor recordou como tendo sido seu favorito na infância. As canções do musical compreendem versos dos poemas musicados pelo compositor, sendo a principal exceção a mais famosa canção do musical, \"Memory\", que teve as letras escritas por Trevor Nunn após um poema de Eliot intitulado \"Rhapsody on a Windy Night \".\n[…]\nThe Naming of Cats\n[…]\nThe Ad-dressing of Cats\n[…]\nComposta por Andrew Lloyd Webber, a produção de Cats é baseada nos poemas de T. S. Eliot de 1939, que o compositor recordou como tendo sido seu favorito na infância. As canções do musical compreendem versos dos poemas musicados pelo compositor, sendo a principal exceção a mais famosa canção do musical, \"Memory\", que teve as letras escritas por Trevor Nunn após um poema de Eliot intitulado \"Rhapsody on a Windy Night \".\n[…]\nAlém disso, uma breve canção intitulada \"The Moments of Happiness\" foi feita a partir de uma passagem de Eliot chamada Quatro Quartetos. Andrew Lloyd Webber começou a compor as músicas no final de 1977 e estreou as composições no Festival Sydmonton em 1980. Os ensaios para o musical começou no início de 1981, no New London Theatre.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Lisístrata",
      "descricao": "Comédia grega de Aristófanes, de 411 antes de Cristo, em que as mulheres fazem greve de sexo para acabar com a guerra."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que comediógrafo grego escreveu Lisístrata, peça em que as mulheres fazem greve de sexo para acabar com a guerra?",
    "resposta": "Aristófanes",
    "distratores": [
      "Menandro",
      "Sófocles",
      "Eurípides"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lysistrata"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lysistrata",
        "situacao": "ok",
        "texto": "Lysistrata ( or ; Attic Greek: Λυσιστράτη, Lysistrátē, lit. 'army disbander') is an ancient Greek comedy by Aristophanes, first staged in early 411 BCE at Lenaea festival in classical Athens. The play is a comic account of a woman's – Lysistrata's – mission to end the Peloponnesian War between Greek city states by denying sex to all the men of the warring parties and occupying the Acropolis of Ath\n[…]\nAristogeiton: A famous tyrannicide, he is mentioned briefly here with approval by the Old Men.\n[…]\nPeisander: An Athenian aristocrat and oligarch, he is mentioned here by Lysistrata as typical of a corrupt politician exploiting the war for personal gain. He was previously mentioned in Peace and The Birds\n[…]\nLysistrata belongs to the middle period of Aristophanes's career when he was beginning to diverge significantly from the conventions of Old Comedy. Such variations from convention include:\n[…]\nAgon: The plays of Aristophanes contain formal disputes or agons that are constructed for rhetorical effect. Lysistrata's debate with the proboulos (magistrate) is an unusual agon in that one character (Lysistrata) does a majority of the talking, while the antagonist's dialogue (the magistrate) is reserved for questions or expressions of emotion. The informality of the agon draws attention to the absurdity of a classical woman engaging in public debate.\n[…]\n2016: Animator Richard Williams's Oscar-nominated short film, Prologue, is \"the first part of a feature film loosely based on Aristophanes's anti-war play Lysistrata.\"\n[…]\nAristophanes (1973). The Acharnians: And The Clouds and Lysistrata. Translated by Sommerstein, Alan H. Penguin. ISBN 978-0-14-044287-8.\n[…]\n\"Lysistrata\". Oxford Reference.\n[…]\nLysistrata audiobook – Listen to streaming audio online and download in MP3 format\n[…]\nNegro Repertory Company: Lysistrata, on the controversial 1937 production of the play by the Seattle Branch of the Federal Theater Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lis%C3%ADstrata",
        "situacao": "ok",
        "texto": "Lisístrata (em grego ático: Λυσιστράτη \"que dissolve o exército\") é uma comédia famosa de Aristófanes. Escrita e encenada na Atenas clássica em 411 a.C., provavelmente nas Lenéias, um dos festivais anuais atenienses sagrados em homenagem ao deus Dioníso. Nessas festas, além dos rituais de homenagem a Dioníso, havia também dias reservados para as competições de tragédias e comédias. As obras teatra\n[…]\nA peça Lisístrata é um relato cômico sobre as mulheres gregas, lideradas por Lisístrata, uma personagem feminina de caráter forte. Essas mulheres fartas da guerra entre Atenas e Esparta trancam-se num templo e decidem por votação deflagrar uma greve sexual para forçar uma negociação de paz, uma estratégia ousada para acabar com a Guerra do Peloponeso, mas que, no entanto, provoca uma batalha entre os sexos. Segundo Aristófanes, em sua obra, Lisístrata.\n[…]\nNo século XX, Lisístrata consolida-se como um símbolo feminista. Porém, esse nunca foi o objetivo de Aristófanes ao escrever a peça em 411 a.C. As mulheres não possuíam influência na política, limitadas ao ambiente familiar, seu único dever cívico era gerar cidadãos atenienses. O texto é afinal, uma comédia, feita para entreter homens atenienses.\n[…]\nLisístrata é a comédia mais famosa de Aristófanes, e, portanto recebeu diversas adaptações para o cinema, como: The Second great sex, de George Marshall (EUA, 1955) o filme é um musical que se passa em um cenário western, onde os homens de duas cidades estão sempre brigando, até que um dia, um deles abandona sua esposa na cama depois de seu casamento para ir a outro ataque, a esposa indignada promove uma greve de sexo para alcançar a paz; Escuela de seductoras, de León Klimvosky (Espanha, 1962) baseado na peça, amigas matriculam-se em uma escola para aprender técnicas de sedução; conta também com diversos filmes mudos, que são peças gregas que foram filmadas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "A Ratoeira",
      "descricao": "Peça de mistério de Agatha Christie que estreou em Londres em 1952 e ficou décadas em cartaz."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que rainha do romance policial escreveu A Ratoeira, peça de mistério que estreou em Londres em 1952 e passou décadas em cartaz?",
    "resposta": "Agatha Christie",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Mousetrap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Mousetrap",
        "situacao": "ok",
        "texto": "The Mousetrap is a murder mystery play by Agatha Christie. The longest-running West End show, it also has by far the longest run of any play in the world, reaching its 30,000th performance on 19 March 2025. The play opened in London's West End in 1952 and ran continuously until 16 March 2020, when the stage performances had to be temporarily discontinued during the COVID-19 pandemic. It then re-op\n[…]\nThe play began life as a short radio play written by Agatha Christie as a birthday present for Queen Mary, the consort of King George V. It was broadcast on 30 May 1947 under the name Three Blind Mice. The story drew from the real-life case of Dennis O'Neill, who died after he and his brother Terence suffered extreme abuse while in the foster care of a Shropshire farmer and his wife in 1945.\n[…]\nIn May 2001, during the London production's 49th year, and to mark the 25th anniversary of Christie's death, the cast gave a semi-staged Sunday performance at the Palace Theatre, Westcliff-on-Sea as a guest contribution to the Agatha Christie Theatre Festival 2001, a 12-week cycle of all of Christie's plays presented by Roy Marsden's New Palace Theatre Company.\n[…]\nChristie was always upset by the plots of her works being revealed in reviews. In 2010, her grandson Mathew Prichard, who receives the royalties from the play, said he was \"dismayed\" to learn from The Independent that the ending to The Mousetrap had been described in the play's Wikipedia article.\n[…]\nThe play is set in the Great Hall of Monkswell Manor, Berkshire, in what Christie described as \"the present\".\n[…]\nB. Vogelsinger (2005). \"New Voices: Blind Mice and a Motive – Studying Agatha Christie's The Mousetrap\". English Journal. 95 (1): 113–5. doi:10.2307/30047411. JSTOR 30047411.\n[…]\nMorrow, Martha (1976). Page and stage: a structural investigation of Agatha Christie's Three Blind Mice and The Mousetrap (MA). Eastern Illinois University."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Mousetrap",
        "situacao": "ok",
        "texto": "A Ratoeira (inglês: The Mousetrap) é uma peça de mistério e assassinato de Agatha Christie, famosa por ser a peça há mais tempo encenada na história do teatro, com mais de 25 mil apresentações desde sua estréia, em Londres, em 1952. The Mousetrap St.Martin's Theatre Ela também é notória por seu final inesperado, que os espectadores ao fim de cada sessão são convidados a não revelar quando saírem d\n[…]\nA Ratoeira começou sua carreira como uma peça curta de rádio, transmitida em 30 de maio de 1947 pela BBC, com o nome de Three Blind Mice (Três Ratos Cegos) e é baseada num caso real, a morte de um menino de doze anos por maus tratos de seus tutores, numa fazenda da Inglaterra, em 1945. Christie escreveu um conto baseado na pequena peça radiofônica, que se transformou no embrião da peça teatral.\n[…]\nA peça teve sua estréia mundial no Theatre Royal, em Nottingham, em 6 de outubro de 1952, dirigida por Peter Cotes, e dali fez uma turnê por Liverpool, Manchester, Birmingham e Newcastle, até começar a ser encenada em Londres no dia 25 de novembro do mesmo ano, no New Ambassadors Theatre, onde ficou em cartaz por quase 22 anos, até 23 de março de 1974. Transferida na apresentação seguinte para o St.\n[…]\nEm 26 de novembro de 2002, a peça fez uma apresentação de gala, com a presença de Sua Majestade a Rainha Elizabeth II e do Duque de Edimburgo.\n[…]\nQuando uma das hóspedes, a Srta. Boyle, aparece morta, todos se conscientizam que o assassino está entre eles. A suspeita cai, em princípio, sobre Christopher Wren, um jovem nômade que tem uma aparência semelhante à descrição feita do criminoso pelo detetive. Porém, logo fica claro que o assassino pode ser qualquer um deles, inclusive os donos dos hotel.\n[…]\nMaureen Lyon (não aparece na peça)\n[…]\nChristopher Wren\n[…]\nRatoeira 2004 na The Stage(em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Ópera de Sydney",
      "descricao": "Casa de espetáculos de Sydney, na Austrália, inaugurada em 1973, com cobertura em forma de velas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que arquiteto dinamarquês projetou a Ópera de Sydney, com sua cobertura em forma de velas de barco?",
    "resposta": "Jørn Utzon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sydney_Opera_House",
      "https://en.wikipedia.org/wiki/J%C3%B8rn_Utzon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sydney_Opera_House",
        "situacao": "ok",
        "texto": "The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings, and a masterpiece of 20th-century architecture.\n[…]\nIn the late 1990s, the Sydney Opera House Trust resumed communication with Utzon in an attempt to effect a reconciliation and to secure his involvement in future changes to the building. In 1999, he was appointed by the trust as a design consultant for future work.\n[…]\nAfter the resignation of Utzon, the Minister for Public Works, Davis Hughes, and the Government Architect, Ted Farmer, organised a team to bring the Sydney Opera House to completion. The architectural work was divided between three appointees who became the Hall, Todd, Littlemore partnership. David Littlemore would manage construction supervision, Lionel Todd contract documentation, while the crucial role of design became the responsibility of Peter Hall.\n[…]\nHall agreed to accept the role on the condition there was no possibility of Utzon returning. Even so, his appointment did not go down well with many of his fellow architects who considered that no one but Utzon should complete the Sydney Opera House. Upon Utzon's dismissal, a rally of protest had marched to Bennelong Point. A petition was also circulated, including in the Government Architects office.\n[…]\nRAIA Commemorative Award, Jørn Utzon – Sydney Opera House, 1992\n[…]\nCompetition drawings submitted by Jørn Utzon to the Opera House Committee\n[…]\n\"Sydney Opera House\". Dictionary of Sydney. Retrieved 8 October 2015. [CC-By-SA]. Includes 'Sydney Opera House' by Laila Ellmoos, 2008 and 'Utzon's Opera House' by Eoghan Lewis, 2014.\n[…]\nSydney Opera House at Google Cultural Institute"
      },
      {
        "url": "https://en.wikipedia.org/wiki/J%C3%B8rn_Utzon",
        "situacao": "ok",
        "texto": "Jørn Oberg Utzon (Danish: [ˈjɶɐ̯ˀn ˈut.sʌn]; 9 April 1918 – 29 November 2008) was a Danish architect. In 1957, he won an international design competition for his design of the Sydney Opera House in Australia. Utzon's revised design, which he completed in 1961, was the basis for the landmark, although it was not completed until 1973.\n[…]\nJørn Utzon and others, A survey of Utzon's work, some descriptions by Utzon, and the Sydney Opera House as finally contemplated, Zodiac 5, Milan 1959\n[…]\nJørn Utzon and others, Utzon's descriptions of the Sydney Opera House, the Silkeborg Museum and the Zurich Theatre. Also Giedion's Jørn Utzon and the Third Generation, Zodiac 14, Milan 1965\n[…]\nUtzon was bestowed an Honorary Fellowship of the American Institute of Architects (Hon. FAIA) in 1970 for his distinguished achievements as a foreign architect. On 17 May 1985, he was made an Honorary Companion of the Order of Australia (AC). He was given the Keys to the City of Sydney in 1998. He was involved in redesigning the Opera House, and in particular, the Reception Hall, beginning in 1999. In 2003, he received in his absence an honorary Doctor of Science degree in architecture (Hon.\n[…]\nFollowing Utzon's death in 2008, on 25 March 2009, a state memorial and reconciliation concert was held in the Concert Hall at Sydney Opera House.\n[…]\nDaryl Dellora: Jørn Utzon and the Sydney Opera House. Penguin, Melbourne 2013. ISBN 9780143570806\n[…]\nFrançoise Fromonot: Jørn Utzon, The Sydney Opera House. Corte Madera, California: Gingko Press, 1998. ISBN 3-927258-72-5\n[…]\nKatarina Stübe and Jan Utzon, Sydney Opera House: A Tribute to Jørn Utzon. Reveal Books, 2009. ISBN 978-0-9806123-0-1\n[…]\nUtzon Center\n[…]\nProfile at the Sydney Opera House\n[…]\nEoghan Lewis (2014). \"Utzon's Opera House\". Dictionary of Sydney. Dictionary of Sydney Trust. Retrieved 9 October 2015. [CC-By-SA]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93pera_de_Sydney",
        "situacao": "ok",
        "texto": "A casa da Ópera de Sydney (em inglês Sydney Opera House), também conhecida como Teatro de Sydney, é um dos edifícios de espetáculo mais marcantes em nível mundial, e um dos símbolos da Austrália, localizada na cidade de Sydney.\n[…]\nA construção, projetada por Jørn Utzon, começou em 1959 e está localizada sobre a Baía de Sydney. Apesar de o arquiteto ter abandonado o projeto em 1966, o edifício foi inaugurado em 20 de outubro de 1973.\n[…]\nUtzon ganhou o concurso internacional de arquitetura para a Ópera de Sydney em 1957, aos 38 anos. Havia 232 candidatos e terá sido o arquitecto finlandês Eero Saarinen, que fazia parte do júri, a apoiar o seu projeto. Fez a obra com o engenheiro anglo-dinamarquês Ove Arup e o edifício demorou anos a ser construído (de 1956 a 1973). A polemica instalou-se e, em 1966, quando Jorn Utzon abandonou a direção da obra e a Austrália, para onde se tinha mudado com a sua família.\n[…]\nAlguns pormenores da obra, nomeadamente no seu interior, não foram acabados segundo os seus planos. Utzon nunca chegou a visitar o edifício, mesmo depois de se ter reconciliado com a Fundação da Ópera de Sydney nos anos 1990 e mais tarde o seu filho Jan, também arquitecto, ter feito a renovação do interior do edifício, aproximando-o mais daquilo que o pai tinha projetado.\n[…]\nDuek-Cohen, Elias, Utzon and the Sydney Opera House, Morgan Publications, Sydney, 1967-1998.\n[…]\n\"Opera House an architectural 'tragedy\"', ABC News online, 28-4-2005.\n[…]\nWatson, Anne (editor): \"Building a Masterpiece: The Sydney Opera House\", 2006, Lund Humphries, ISBN 0-85331-941-3, ISBN 978-0-85331-941-2\n[…]\nThe Sydney Opera House mapygon\n[…]\nSitio web de arquitetura em Sydney\n[…]\nWebcamda Ópera de Sydney",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Teatro do Oprimido",
      "descricao": "Conjunto de técnicas teatrais criado no Brasil que transforma o espectador em participante da cena."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que diretor brasileiro criou o Teatro do Oprimido, método em que a plateia deixa de só assistir e entra em cena?",
    "resposta": "Augusto Boal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Theatre_of_the_Oppressed",
      "https://en.wikipedia.org/wiki/Augusto_Boal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Theatre_of_the_Oppressed",
        "situacao": "ok",
        "texto": "The Theatre of the Oppressed (TO) describes theatrical forms that the Brazilian theatre practitioner Augusto Boal first elaborated in the 1970s, initially in Brazil and later in Europe. Boal was influenced by the work of the educator and theorist Paulo Freire and his book Pedagogy of the Oppressed. Boal's techniques use theatre as means of promoting social and political change in alignment origina\n[…]\nTONYC was founded in 2011 by Katy Rubin, (who trained with Augusto Boal), after returning to New York City, and discovering a lack of \"popular theatre\" – created and performed by the actual communities facing oppression. Since 2011, TONYC has grown to train communities to facilitate Theatre of the Oppressed independently, and produce more than 60 public performances and workshops a year.\n[…]\nWhile there are a number of groups in Canada that work with Forum Theatre techniques (e.g., Mixed Company Theatre, Branch Out Theatre, Theatre for Living) Stage Left Productions, based in Canmore, Alberta, has been recognized by Augusto Boal as on official Centre for Theatre of the Oppressed since 2005.\n[…]\nKuringa is a theatre space and organization dedicated to Theatre of the Oppressed (TO) based in the Wedding neighborhood in Berlin, Germany. The space was founded in 2011 by Bárbara Santos, artistic director, alongside Till Baumann and Christoph Leucht. Bárbara, an artist and activist originally from Brazil, previously served as Coordinator of Center for Theatre of the Oppressed in Rio de Janeiro, working alongside TO creator Augusto Boal since 1986.\n[…]\nAugusto, Boal (1993). Theater of the Oppressed. New York: Theatre Communications Group. ISBN 0-930452-49-6.\n[…]\nBirgit, Fritz (2012). InExActArt. The Autopoietic Theatre of Augusto Boal. A Handbook of Theatre of the Oppressed Practice. Stuttgart: Ibidem Verlag.\n[…]\nInternational Theatre of the Oppressed Organisation\n[…]\nPreview of Theatre of the Oppressed"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Augusto_Boal",
        "situacao": "ok",
        "texto": "Augusto Boal (Brazilian Portuguese: [awˈgustu boˈaw]; 16 March 1931 – 2 May 2009) was a Brazilian theatre practitioner, drama theorist, and political activist. He was the founder of Theatre of the Oppressed and Forum theatre, a theatrical form originally used in popular education movements. Boal served one term as a Vereador (the Brazilian equivalent of a city councillor) in Rio de Janeiro from 19\n[…]\nArguably Augusto Boal's most academically influential work is the Theatre of the Oppressed, in which the reader follows Boal's detailed analysis of the Poetics of Aristotle and the early history of Western theatre. Boal contends that the Aristotelian ethic means oppressing the masses, the people, the workers and the spectators in favour of stability and the continued dominance of a privileged few.\n[…]\nThis is probably Augusto Boal's most practically influential book, in which he sets down a brief explanation of his theories, mostly through stories and examples of his work in Europe, and then explains every drama exercise that he has found useful in his practice. In contrast to Theatre of the Oppressed, it contains little academic theory and many practical examples for drama practitioners to use even if not practising theatre that is related to Boal's academic or political ideas.\n[…]\nIn 1994, Boal won the UNESCO Pablo Picasso Medal, and in August 1997, he was awarded the \"Career Achievement Award\" by the Association of Theatre in Higher Education at their national conference in Chicago, Illinois. Boal is also seen as the inspiration behind 21st-century forms of performance-activism, such as the \"Optative Theatrical Laboratories\".\n[…]\nForum Theatre\n[…]\nInternational Theatre Institute – Author of the World Theatre Day Message 2009 Augusto Boal\n[…]\nAugusto Boal Interview on Democracy Now! in 2005\n[…]\nAugusto Boal, Founder of the Theatre of the Oppressed, Dies at 78 Interview on Democracy Now! in 2007"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_do_oprimido",
        "situacao": "ok",
        "texto": "Teatro do Oprimido (TO) É um método  teatral que reúne exercícios, jogos e técnicas teatrais elaboradas pelo teatrólogo brasileiro Augusto Boal. Os seus principais objetivos são a democratização dos meios de produção teatral, o acesso das camadas sociais menos favorecidas e a transformação da realidade através do diálogo (tal como Paulo Freire pensou a educação) e do teatro. Ao mesmo tempo, traz t\n[…]\nAugusto Boal estudou em Nova York na década de 1950 fazendo sua pós-graduação em química industrial quando teve contato com o trabalho ali desenvolvido baseado nas ideias de Stanislavski, realizando estudos no teatro, sua verdadeira vocação.\n[…]\nA Lei nº 13.560, de 21 de dezembro de 2017, instituiu o dia 16 de março, como \"Dia Nacional do Teatro do Oprimido\", em homenagem à data de nascimento de seu criador, o teatrólogo Augusto Boal.\n[…]\nConhecido como Método Boal de Teatro e Terapia, é um conjunto de técnicas terapêuticas e teatrais utilizadas no estudo de casos onde os opressores foram internalizados, habitando a cabeça de quem vive oprimido pela repercussão dessas ideias e atitudes.\n[…]\nBOAL, Augusto - Teatro do oprimido e outras poéticas políticas. Rio de Janeiro. Civilização Brasileira. 2005. Edição revista; (ISBN 85-200-0265-X)\n[…]\nBOAL, Augusto - \"Técnicas Latino-Americanas de teatro popular: uma revolução copernicana ao contrário\". São Paulo: Hucitec, 1975.\n[…]\nBOAL, Augusto - \"Stop: ces’t magique\". Rio de Janeiro: Civilização Brasileira, 1980.\n[…]\nBOAL, Augusto - \"O arco-íris do desejo: método Boal de teatro e terapia\". Rio de Janeiro: Civilização Brasileira, 1990.\n[…]\nBOAL, Augusto - \"Teatro legislativo\", Rio de Janeiro: Civilização Brasileira, 1996.\n[…]\nBOAL, Augusto - \"Jogos para atores e não-atores\". Rio de Janeiro: Civilização Brasileira, 1998.\n[…]\nBOAL, Augusto - \"O teatro como arte marcial\". Rio de Janeiro: Garamond, 2003.\n[…]\nBOAL, Augusto - \"A Estética do Oprimido\". Rio de Janeiro: Garamond, 2009.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Um Bonde Chamado Desejo",
      "descricao": "Peça americana de 1947 com os personagens Blanche DuBois e Stanley Kowalski, ambientada em Nova Orleans."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que dramaturgo americano escreveu Um Bonde Chamado Desejo, peça de 1947 com a frágil Blanche e o bruto Stanley Kowalski?",
    "resposta": "Tennessee Williams",
    "distratores": [
      "Arthur Miller",
      "Eugene O'Neill",
      "Edward Albee"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/A_Streetcar_Named_Desire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/A_Streetcar_Named_Desire",
        "situacao": "ok",
        "texto": "A Streetcar Named Desire is a play written by Tennessee Williams which was first performed on Broadway on December 3, 1947. The play dramatizes the experiences of Blanche DuBois, a former Southern belle who, after encountering a series of personal losses, leaves her once-prosperous situation to move into a shabby apartment in the French Quarter of New Orleans rented by her younger sister Stella Ko\n[…]\nA Streetcar Named Desire is one of Williams' most influential plays. It still ranks among his most performed and has inspired many adaptations in other forms, most notably a 1951 film adaptation directed by Elia Kazan.\n[…]\nBlanche arrives at Stella's apartment by riding in a streetcar on the Desire streetcar line. Tennessee Williams was living in an apartment on Toulouse Street in the French Quarter of New Orleans when he wrote A Streetcar Named Desire. The Desire streetcar line ran only a half-block away.\n[…]\nIn 1972, American composer Frances Ziffer set A Streetcar Named Desire to music.\n[…]\nIn 2018, it headlined the third annual Tennessee Williams Festival St. Louis at the Grandel Theatre. Carrie Houk, the Festival's Executive Artistic Director, and Tim Ocel, the director of the play, chose to cast the play with actors whose ages were close to Tennessee Williams' original intentions. (The birthday party is for Blanche's 30th birthday.)  Sophia Brown starred as Blanche, with Nick Narcisi as Stanley, Lana Dvorak as Stella, and Spencer Sickmann as Mitch.\n[…]\n\"A Streetcar Named Success\" is an essay by Tennessee Williams about art and the artist's role in society. It often is included in paper editions of A Streetcar Named Desire. A version of this essay first appeared in The New York Times on November 30, 1947, four days before the opening of A Streetcar Named Desire. Another version of this essay, titled \"The Catastrophe of Success\", is sometimes used as an introduction to The Glass Menagerie."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Streetcar_Named_Desire_%28teatro%29",
        "situacao": "ok",
        "texto": "A Streetcar Named Desire (conhecida no Brasil como Um Bonde Chamado Desejo e, em Portugal, como Um Eléctrico Chamado Desejo) é uma peça teatral de 1947, escrita pelo dramaturgo norte-americano Tennessee Williams, pela qual ele recebeu o Prêmio Pulitzer em 1947.\n[…]\nNos contos de fada, a princesa aflita ou a donzela em apuros é, frequentemente, resgatada pelo príncipe heroico e forte. A Streetcar Named Desire é caracterizado pela ausência do homem másculo com qualidades heroicas. Na verdade, o opositor ao cavalheiresco herói pode ser representado pela principal figura masculina da peça, Stanley Kowalski.\n[…]\nHá a possibilidade de a personagem de Blanche ter se baseado na história da irmã de Tennessee, Rose Williams, que tinha problemas mentais e foi submetida a uma lobotomia.\n[…]\nEm janeiro de 2009, a primeira produção Afro-Americana de A Streetcar Named Desire foi apresentada no Pace University, dirigida por Steven McCasland. A produção apresentava Lisa Lamothe como Blanche, Stephon O'Neal Pettway como Stanley, e Jasmine Clayton como Stella, e apresentava Sully Lennon como Allan Gray, o fantasma do marido morto de Blanche. Benvolio Tomaiuolo foi o diretor assistente e gerenciou a produção.\n[…]\n\"A Streetcar Named Success\" é um ensaio de Tennessee Williams sobre arte, e o papel do artista na sociedade, e foi muitas vezes incluído nas edições de \"A Streetcar Named Desire\". Uma versão desse ensaio apareceu no New York Times, em 30 de novembro de 1947, 4 dias antes da abertura de A Streetcar Named Desire. Outra versão, intitulada \"The Catastrophe of Success\", é algumas vezes usada na introdução de  The Glass Menagerie (peça).\n[…]\nWILLIAMS, Tennessee (1985). Um Bonde Chamado Desejo. [S.l.]: São Paulo: Círculo do Livro S. A. Trad. Brutus Pedreira",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Hamlet",
      "descricao": "Tragédia de William Shakespeare sobre um príncipe que busca vingar a morte do pai."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Hamlet, o príncipe de Shakespeare que se pergunta se deve ser ou não ser, vive no castelo de Elsinore. Em que país?",
    "resposta": "Dinamarca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hamlet",
      "https://en.wikipedia.org/wiki/Kronborg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hamlet",
        "situacao": "ok",
        "texto": "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (), is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play. Set in Denmark, the play depicts Prince Hamlet and his attempts to exact revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother.\n[…]\nMost scholars reject the idea that Hamlet is in any way connected with Shakespeare's only son, Hamnet Shakespeare, who died in 1596 at age eleven. Conventional wisdom holds that Hamlet is strongly connected to legend, and the name Hamnet was quite popular at the time. However, Stephen Greenblatt has argued that the coincidence of the names and Shakespeare's grief for the loss of his son may lie at the heart of the tragedy.\n[…]\nFirst Folio (F1): In 1623 Edward Blount and William and Isaac Jaggard published The Tragedie of Hamlet, Prince of Denmarke in the First Folio, the first edition of Shakespeare's Complete Works.\n[…]\nEnglish poet John Milton was an early admirer of Shakespeare and took evident inspiration from his work. As John Kerrigan discusses, Milton originally considered writing his epic poem Paradise Lost (1667) as a tragedy. While Milton did not ultimately go that route, the poem still shows distinct echoes of Shakespearean revenge tragedy, and of Hamlet in particular. As scholar Christopher N.\n[…]\nShakespeare almost certainly wrote the role of Hamlet for Richard Burbage. He was the chief tragedian of the Lord Chamberlain's Men, with a capacious memory for lines and a wide emotional range. Judging by the number of reprints, Hamlet appears to have been Shakespeare's fourth most popular play during his lifetime—only Henry IV Part 1, Richard III and Pericles eclipsed it.\n[…]\nHamlet, Folger Shakespeare Library\n[…]\nClear Shakespeare Hamlet – A word-by-word audio guide through the play."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kronborg",
        "situacao": "ok",
        "texto": "Kronborg (Danish pronunciation: [ˈkʰʁoːnˌpɒˀ]) is a castle and historical stronghold in the town of Helsingør, Denmark. Immortalised as Elsinore in William Shakespeare's play Hamlet, Kronborg is one of the most important Renaissance castles in Northern Europe. It was inscribed on the UNESCO World Heritage List in 2000.\n[…]\nRendered as \"Elsinore,\" actually the anglicised name of the surrounding town of Helsingør, Kronborg serves as the setting of William Shakespeare's tragedy Hamlet, Prince of Denmark. The play has been performed at the castle several times.\n[…]\nHamlet was first staged at Kronborg in 1816, in commemoration of the 200th anniversary of Shakespeare's death; it was performed by soldiers from the castle garrison, and staged in the telegraph tower in the castle's southwest corner. The play has since been performed several times in the courtyard and at various locations on the fortifications.\n[…]\nLater performers to play Hamlet at the castle include Laurence Olivier, John Gielgud, Christopher Plummer, Derek Jacobi, David Tennant, and in 2009 Jude Law. In 2017, Hamletscenen presented a production of Hamlet at Kronborg, directed by Lars Romann Engel; the role of Hamlet was played by Cyron Melville and music for the production was composed by Mike Sheridan.\n[…]\nThe castle was the setting of the televised holiday series Jul på Kronborg (English: Christmas at Kronborg), which featured both Hamlet and Holger the Dane. 'Elsinore Beer' is named for the castle in the 1983 comedy Strange Brew, starring Rick Moranis and Dave Thomas.\n[…]\nMikkelsen, Birger (1997). Kronborg. Elsinore: Nordisk Forlag for Videnskab og Teknik. ISBN 978-87-980466-2-2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hamlet",
        "situacao": "ok",
        "texto": "A tragédia de Hamlet, príncipe da Dinamarca (The Tragedie of Hamlet, Prince of Denmarke na primeira edição em inglês), geralmente abreviada apenas como Hamlet, é uma tragédia de William Shakespeare, escrita entre 1599 e 1601. A peça, passada na Dinamarca, reconta a história de como o Príncipe Hamlet tenta vingar a morte de seu pai, Hamlet, o rei, executado por Cláudio, seu irmão, que o envenenou e\n[…]\nA peça abre numa noite fria no Castelo de Elsinore, o Castelo Real Dinamarquês. Os sentinelas tentam convencer Horácio, amigo do Príncipe Hamlet, que eles têm visto o fantasma do rei morto, quando ele aparece novamente. Depois do encontro de Horácio com o Fantasma, Hamlet resolve vê-lo com seus próprios olhos. À noite, o Fantasma aparece para Hamlet. O espectro diz a Hamlet que é o espírito de seu pai morto, e revela que Cláudio o matou com um frasco de veneno, despejando o líquido em seu ouvido.\n[…]\nGrande parte do Protestantismo de Hamlet resulta provavelmente em sua localização na Dinamarca – que era desde o tempo de Shakespeare predominantemente um país protestante, embora não esteja claro se a localização ficcional da peça nesse país esteja realmente destinada a esse fato. A obra faz menção a Wittenberg, onde Hamlet, Horácio e Rosencrantz e Guildenstern frequentaram universidades, e em que Martinho Lutero pregou pela primeira vez suas 95 teses.\n[…]\nAntes da edição de Luís I, porém, a Fundação Biblioteca Nacional data uma versão em português de 1871, sob o título de Hamleto, principe da Dinamarca, tragedia em cinco actos, embora não informe o tradutor, deixando apenas o conhecimento de que foi impressa e lançada no Rio de Janeiro.\n[…]\nA Tragédia de Hamlet, Príncipe da Dinamarca/ Shakespeare; trad. e pref. José Blanc de Portugal, [Lisboa : Editorial Presença, 1967] ( Porto : -- Tip. Nunes)\n[…]\nTradução de F. C. Cunha Medeiros e Oscar Mendes: Hamlet, príncipe da Dinamarca, prosa:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Theatro da Paz",
      "descricao": "Teatro histórico de Belém, no Pará, inaugurado em 1878 durante o ciclo da borracha."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Inaugurado em 1878, com a riqueza da borracha, o Theatro da Paz é um dos orgulhos de que capital do Norte?",
    "resposta": "Belém",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Theatro_da_Paz"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Theatro_da_Paz",
        "situacao": "ok",
        "texto": "Theatro da Paz (inicialmente chamado Nossa Senhora da Paz) localiza-se na Praça da República, em Belém, Pará. Foi projetado pelo engenheiro pernambucano José Tibúrcio Pereira Magalhães no estilo neoclássico e inaugurado em 1878 no contexto da então província do Grão-Pará (1821–1889) e do período áureo da exploração da borracha na Amazônia (1871–1914).\n[…]\nA construção deste espaço durante a Belle Époque brasileira (1871–1914) formou o polígono da cultura e local de reunião da elite de Belém (Palacete Bolonha, Grande Hotel, Cine Olympia e Theatro da Paz). O teatro foi premiado pelo site Trip Savvy na categoria \"Melhor local para amantes da cultura\" do concurso \"Escolha do Editor 2021\" (do inglês \"Editor’s Choice Award 2021\"), destacado como um dos melhores lugares para se visitar a nível global.\n[…]\nO teatro foi inaugurado com público formado pela aristocracia de Belém, ao som do drama do francês Adolphe d'Ennery As duas órfãs e da orquestra sinfônica do maestro Francisco Libânio Collas, espetáculo da companhia de Vicente Pontes de Oliveira, que teve um contrato que durou cinco anos, tornando-o encarregado pela iluminação, decoração, coreografia no teatro, além de organizador da agenda de eventos.[carece de fontes]?\n[…]\nA presença do teatro na Praça Dom Pedro II impactou a região, valorizando-a e consolidando-a como polo cultural da cidade de Belém; criava-se assim o Polígono da Cultura, formado pelo Palace Bolonha, Grande Hotel, Cine Olympia e pelo Theatro da Paz, local onde ocorriam muitas visitas ilustres e local comum de reunião da aristocracia de Belém que, elegantemente trajada à moda parisiense, desfilava joias e vaidades.\n[…]\nLista de teatros do Brasil\n[…]\nTheatro Municipal Victória\n[…]\nTeatro Estadual Palácio das Artes Rondônia\n[…]\n«Festival de ópera do Theatro (FOTP)»"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Theatro José de Alencar",
      "descricao": "Teatro histórico de Fortaleza, inaugurado em 1910, com estrutura metálica importada da Escócia."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Theatro José de Alencar, inaugurado em 1910 com estrutura de ferro trazida da Escócia, fica em que capital?",
    "resposta": "Fortaleza",
    "distratores": [
      "Recife",
      "São Luís",
      "Natal"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Theatro_José_de_Alencar"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Theatro_José_de_Alencar",
        "situacao": "ok",
        "texto": "O Theatro José de Alencar é um teatro brasileiro, localizado na cidade de Fortaleza, no Ceará. É referência artística, turística e arquitetônica no país, além de ser tombado pelo Instituto do Patrimônio Histórico e Artístico Nacional. Enquanto teatro-monumento, conta com seleta programação cênica e diversificada pauta de atividades sócio-culturais e artísticas.\n[…]\nFoi inaugurado oficialmente em 17 de junho de 1910. Apresenta arquitetura eclética e sala de espetáculo em estilo art nouveau de três andares que comporta 800 lugares.\n[…]\nA peça fundamental do Theatro foi lançada em 1896, no centro da praça Marquês do Herval, hoje Praça José de Alencar, mas o projeto original não foi concretizado. Em 1904, na administração de Nogueira Acioli, foi oficialmente autorizada a construção do Theatro José de Alencar, através da lei n° 768, de 20 de agosto. Em 6 de junho de 1908, as obras oficialmente tiveram início, durando dois anos.\n[…]\nO Theatro tem sua estrutura arquitetônica constituída de peças de ferro fundido importadas de Glasgow, na Escócia.\n[…]\nNo início do século, ao fazer o projeto arquitetônico do Theatro, o capitão Bernardo José de Mello imaginou um teatro-jardim, no qual o pátio central seria uma área verde.\n[…]\nÀ época, esta parte do projeto não foi implementada. A parte verde e estatuária só foi construída décadas depois da festa de inauguração, na reforma de 1975. Ao invés do pátio central, o jardim ocupa o terreno vizinho ao original do Theatro, na ala leste, em área que já sediou o Quartel de Cavalaria de Fortaleza. O jardim foi projetado por um ícone do paisagismo brasileiro, Burle Marx. Na sua primeira versão, o jardim contava com espelhos d'água e espécies de todo o mundo.\n[…]\nTeatros do Brasil\n[…]\nPágina oficial do Theatro José de Alencar"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Teatro Colón",
      "descricao": "Casa de ópera de Buenos Aires, inaugurada em 1908 e famosa pela acústica."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que capital sul-americana fica o Teatro Colón, casa de ópera inaugurada em 1908 e famosa pela acústica?",
    "resposta": "Buenos Aires",
    "fonte": [
      "https://en.wikipedia.org/wiki/Teatro_Colón"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Teatro_Colón",
        "situacao": "ok",
        "texto": "The Teatro Colón (English: Colón Theatre) is a historic opera house in Buenos Aires, Argentina. It is considered one of the ten best opera houses in the world by National Geographic. According to a survey carried out by the acoustics expert Leo Beranek among leading international opera and orchestra directors, the Teatro Colón has the room with the best acoustics for opera and the second best for \n[…]\nThe theatre was declared a National Historic Monument in 1989. It is home to the Teatro Colón's Resident Orchestra, Resident Choir, and Resident Ballet, as well as the Buenos Aires Philharmonic Orchestra. The venue also hosts the Teatro Colón’s Center for Experimentation, the Higher Institute of Art with its Orchestral Academy, the Children’s Choir, and the Colón Contemporary music program.\n[…]\nThe Colón theater operated in two buildings, the first located in the Plaza de Mayo until 1888 and the second located in front of the Plaza Lavalle [es], which took 20 years to be built until its inauguration in 1908. This land formerly housed the Park Station, the first railway station of the Argentine Republic as head of the Western Railway of Buenos Aires.\n[…]\nSome of the last performances immediately before closure of the theatre's building were Swan Lake on 30 September with the Ballet Estable del Teatro Colón and the Buenos Aires Philharmonic (Orquesta Filarmónica de Buenos Aires). and, on 28 October, the opera Boris Godunov was given featuring Orquesta Estable del Teatro Colón and the house chorus.\n[…]\nCaamaño, Roberto. Historia del Teatro Colón, Vol I-III, Cinetea, Buenos Aires, 1969.\n[…]\nFerro, Valenti. Las voces del Teatro Colón, Buenos Aires, 1982\n[…]\nMatera, J. H., Teatro Colón Años de gloria 1908–1958, Buenos Aires, 1958. ML1717.8.B9 T4\n[…]\n\"On with the Show! A Celebration of the 100th Anniversary and Restoration of the Teatro Colón in Buenos Aires, Argentina"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_Col%C3%B3n",
        "situacao": "ok",
        "texto": "O Teatro Colón é a principal casa de ópera de Buenos Aires, na Argentina. Acusticamente, é considerado um dos cinco melhores teatros do mundo. O atual Colón substituiu o teatro original, inaugurado em 1857. O atual teatro foi inaugurado em 25 de março de 1908 com a ópera Aida, de Giuseppe Verdi, após 20 anos de obras.\n[…]\nO Teatro Colón foi visitado pelos maiores cantores e companhias de ópera do mundo. É uma das principais atrações turísticas de Buenos Aires, sendo possível fazer um tour guiado do teatro atualmente.\n[…]\nAntes da construção do atual Teatro Colón, performances operísticas eram apresentadas em diversos teatros, como no primeiro Colón e no Teatro Opera. A principal companhia que apresentava-se no Teatro Ópera mudou-se para o Colón em 1908. Entretanto, importantes companhias também apresentavam-se no Teatro Politeama e no Teatro Coliseo: este, inaugurado em 1907.\n[…]\nCom a abertura, o Colón tornou-se um grande rival do Teatro alla Scala em Milão e do Metropolitan Opera House de Nova Iorque, atraindo os maiores cantores e maestros da época. Estrelas do balé apresentaram-se na casa ao lado de dançarinos argentinos e instrumentalistas clássicos. A trágica morte de dois dos mais conhecidos deles, em 1971 (Norma Fontenla e José Neglia), foi homenageada no Lavalle Square.\n[…]\nAlgumas das últimas performances no teatro antes de ele ser fechado para a reforma incluíram o balé O Lago dos Cisnes no dia 30 de setembro com o Balé do Teatro Colón e a Orquestra Filarmônica de Buenos Aires e, no dia 28 de outubro, a ópera Boris Godunov. A última performance antes do fechamento do teatro foi um concerto no dia 1 de novembro com a cantora Mercedes Sosa com a Orquestra Sinfônica Nacional Argentina, conduzida por Pedro Ignacio Calderón.\n[…]\nPágina oficial do Teatro Colón (em castelhano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "West End",
      "descricao": "Distrito teatral de Londres, conhecido pelos grandes musicais e peças em cartaz por longos períodos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Famoso por musicais que ficam anos a fio em cartaz, o distrito teatral conhecido como West End fica em que cidade?",
    "resposta": "Londres",
    "fonte": [
      "https://en.wikipedia.org/wiki/West_End_theatre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/West_End_theatre",
        "situacao": "ok",
        "texto": "West End theatre is mainstream professional theatre staged in the large theatres in and near the West End of London. West End theatre represents the highest level of commercial theatre in the United Kingdom and, along with New York City's Broadway theatre, the highest level of commercial theatre in the English-speaking world. Seeing a West End show is a common tourist activity in London. Prominent\n[…]\nThe West End theatre district became established with the opening of many small theatres and halls, including the Adelphi in The Strand on 17 November 1806. South of the River Thames, the Old Vic, Waterloo Road, opened on 11 May 1818. The expansion of the West End theatre district gained pace with the Theatres Act 1843, which relaxed the conditions for the performance of plays, and The Strand gained another venue when the Vaudeville opened on 16 April 1870.\n[…]\n\"Theatreland\", London's main theatre district, contains approximately 40 venues and is located in and near the heart of the West End of London. It is traditionally defined by the Strand to the south, Oxford Street to the north, Regent Street to the west, and Kingsway to the east. However, a few other nearby theatres are also considered \"West End\" despite being outside the area proper; an example is the Apollo Victoria Theatre, in Westminster.\n[…]\nLondon theatres outside the West End also played an important role in the early history of drama schools. In 1833, actress Frances Maria Kelly managed the Royal Strand Theatre in Westminster where she funded and operated a dramatic school, the earliest record of a drama school in England. In 1840, she financed the Royalty Theatre in Soho which opened as Miss Kelly's Theatre and Dramatic School.\n[…]\nGreat West End Theatres\n[…]\nLondon International Festival of Theatre\n[…]\nTheatre of the United Kingdom\n[…]\nLondon's West End Theatres Information and archive material on London's historic West End Theatres."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Carmen (ópera)",
      "descricao": "Ópera de Georges Bizet, estreada em Paris em 1875, sobre uma cigana sedutora."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A ópera Carmen, de Bizet, sobre uma cigana que trabalha numa fábrica de cigarros, se passa em que cidade espanhola?",
    "resposta": "Sevilha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carmen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carmen",
        "situacao": "ok",
        "texto": "Carmen (French: [kaʁmɛn] ) is an opera in four acts by the French composer Georges Bizet. The libretto was written by Henri Meilhac and Ludovic Halévy, based on the novella of the same title by Prosper Mérimée. The opera was first performed by the Opéra-Comique in Paris on 3 March 1875, where its breaking of conventions shocked and scandalised its first audiences.\n[…]\nIn the novella, Carmen and José are presented much less sympathetically than they are in the opera; Bizet's biographer Mina Curtiss comments that Mérimée's Carmen, on stage, would have seemed \"an unmitigated and unconvincing monster, had her character not been simplified and deepened\".\n[…]\nLesley Wright, a contemporary Bizet scholar, remarks that, unlike his compatriots Rameau and Debussy, Bizet has not been accorded a critical edition of his principal works; should this transpire, she says, \"we might expect yet another scholar to attempt to refine the details of this vibrant score which has so fascinated the public and performers for more than a century.\" Meanwhile, Carmen's popularity endures; according to Macdonald: \"The memorability of Bizet's tunes will keep the music of Carmen alive in perpetuity,\" and its status as a popular classic is unchallenged by any other French opera.\n[…]\nIn 1983 the stage director Peter Brook produced an adaptation of Bizet's opera known as La Tragedie de Carmen in collaboration with the writer Jean-Claude Carrière and the composer Marius Constant. This 90-minute version focused on four main characters, eliminating choruses and the major arias were reworked for chamber orchestra. Brook first produced it in Paris, and it has since been performed in many cities.\n[…]\nBizet, Georges (1958). Carmen: Opera in Four Acts. New York: G. Schirmer. OCLC 475327. (Vocal score, with words provided in English and French, based on the 1875 arrangement of Ernest Guiraud)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carmen_%28%C3%B3pera%29",
        "situacao": "ok",
        "texto": "Carmen é uma ópera em quatro atos do compositor francês Georges Bizet, com libreto de Henri Meilhac e Ludovic Halévy, baseado na romance homônimo de Prosper Mérimée. Estreou em 1875, no Opéra-Comique de Paris.\n[…]\nZúniga, um tenente recém-chegado à cidade, interroga, em seguida, Don José sobre a beleza e a duvidosa reputação das cigarreiras da fábrica da praça, mas o cabo manifesta o seu único interesse por Micaela, por quem está apaixonado. O sino da fábrica soa e anuncia o intervalo das cigarreiras, que entram em cena a fumar e a conversar animadamente com um grupo de homens que as espera. A última a aparecer é Carmen, uma bela cigana que seduz todos os homens que encontra à sua passagem.\n[…]\nDepois de se relembrarem juntos das paisagens da sua infância, Micaela abandona a cena e Don José começa a ler a carta. Ocorre então um tumulto no interior da fábrica; um grupo de trabalhadoras comenta entre gritos que está a haver uma rixa entre as mulheres em que Carmen interveio, tendo ferido outra cigarreira no rosto, com uma navalha. Zuniga ordena a Don José e aos seus homens que prendam a agressora. O cabo sai da fábrica com Carmen e recebe a ordem do tenente de a levar para a prisão.\n[…]\nEm Sevilha, frente à praça de touros, uma multidão espera a chegada dos toureiros. Os vendedores aproveitam a ocasião para oferecer os seus produtos ao público. Aparece então a quadrilha e atrás dela, Escamillo e Carmen. À entrada do toureiro na praça de touros, Mercedes e Frasquita avisam a cigana da presença de Don José, mas ela mostra não ter medo de se encontrar com o seu antigo amante. A seguir, Don José retém Carmen quando tenta entrar na praça, suplicando-lhe que volte com ele.\n[…]\nGeorges Bizet\n[…]\nÓpera",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Paixão de Cristo de Nova Jerusalém",
      "descricao": "Espetáculo da Paixão de Cristo encenado anualmente na Semana Santa numa cidade-teatro ao ar livre em Brejo da Madre de Deus."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Encenada todos os anos na Semana Santa, numa cidade-teatro ao ar livre, a Paixão de Cristo de Nova Jerusalém acontece em que estado?",
    "resposta": "Pernambuco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Paixão_de_Cristo_de_Nova_Jerusalém",
      "https://pt.wikipedia.org/wiki/Brejo_da_Madre_de_Deus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Paixão_de_Cristo_de_Nova_Jerusalém",
        "situacao": "ok",
        "texto": "Paixão de Cristo de Nova Jerusalém é uma peça teatral brasileira criada por Epaminondas Mendonça no ano de 1951, com base na Paixão, que é celebrada todos os anos durante a Semana Santa em Brejo da Madre de Deus, no estado brasileiro de Pernambuco. A peça é encenada tradicionalmente ao ar livre reproduzindo os últimos passos de Jesus na Terra, e já reuniu mais de 4 milhões de pessoas. A cidade-tea\n[…]\nO teatro, o maior do mundo, possui uma área de 100.000 m² (cem mil metros quadrados).\n[…]\nO espetáculo da Paixão de Cristo de Nova Jerusalém teve sua origem nas encenações do Drama do Calvário, realizadas nas ruas da vila de Fazenda Nova, Pernambuco, no período de 1951 a 1962, graças à iniciativa do patriarca da família Mendonça, o comerciante e líder político local Epaminondas Mendonça.\n[…]\nCom o passar dos anos, as encenações começaram a atrair atores e técnicos de teatro do Recife e a Paixão começou a ganhar fama e notoriedade em todo o estado. Fazenda Nova, vila do município de Brejo da Madre de Deus, onde aconteceram essas primeiras encenações, fica bem próxima ao local onde hoje se situa a cidade teatro de Nova Jerusalém.\n[…]\nA ideia de construir um teatro que fosse como que uma pequena réplica da cidade de Jerusalém para que nela ocorressem as encenações da Paixão foi de Plínio Pacheco que chegou a Fazenda Nova em 1956. Mas o plano só veio a se concretizar em 1968, quando foi realizado o primeiro espetáculo na cidade teatro de Nova Jerusalém. Desde então, até 2019, foram 53 anos de apresentações ininterruptas dentro das muralhas, atraindo espectadores de todo o Brasil e do mundo.\n[…]\nNo primeiro evento pós-pandemia, o evento de 2022 contou com Gabriel Braga Nunes atuando como Jesus. A encenação contou com mais de 450 atores, além dos figurantes majoritariamente pernambucanos, e a equipe técnica.\n[…]\nNova Jerusalém"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brejo_da_Madre_de_Deus",
        "situacao": "ok",
        "texto": "Brejo da Madre de Deus é um município brasileiro do estado de Pernambuco.\n[…]\nO município tem como seus principais distritos, A Sede, São Domingos e Fazenda Nova. Na Sede se encontra o Palácio Municipal Pedro Aleixo de Sousa onde funciona a Prefeitura. No Distrito de Fazenda Nova está localizado o icônico Teatro de Nova Jerusalém, onde se realiza anualmente a popular encenação \"Paixão de Cristo de Nova Jerusalém\" desde 1967.\n[…]\nConsiderado o maior teatro ao ar livre do mundo, Nova Jerusalém atrai mais de 3,5 milhões de turistas à cidade. No teatro é encenada \"A paixão de Cristo\". O teatro é cercado por enormes muralhas e com nove cenários, que com sua grandiosidade se torna o maior espetáculo ao ar livre do mundo. O espetáculo teve origem nas ruas do distrito de fazenda Nova, em 1951, por Epaminondas Mendonça, e os figurantes do espetáculo eram os próprios moradores do distrito.\n[…]\nSeus cenários buscam representar uma reconstrução da cidade de Jerusalém nos tempos em que viveu Jesus. Seu projeto foi idealizado e construído por Plínio Pacheco em 1956, concluído somente em 1968. Todos os anos, durante a Semana Santa, realiza-se o popular espetáculo \"Paixão de Cristo de Nova Jerusalém\". Participam dessa encenação cerca de 500 pessoas, entre atores de expressão nacional, atores regionais e figurantes.\n[…]\nNo alto da Serra do Ponto, encontra-se uma pirâmide de pedra, construída pelo Arquiteto francês Louis Léger Vauthier, com o intuito de elaborar o mapa do estado de Pernambuco e está centralizada com os pontos cardeais."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Ópera de Arame",
      "descricao": "Teatro de estrutura tubular de aço e cobertura transparente, inaugurado em 1992 numa antiga pedreira de Curitiba."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Que capital do Sul abriga a Ópera de Arame, teatro de tubos de aço e cobertura transparente erguido numa antiga pedreira?",
    "resposta": "Curitiba",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ópera_de_Arame"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ópera_de_Arame",
        "situacao": "ok",
        "texto": "Ópera de Arame é um teatro brasileiro, localizado na cidade de Curitiba, capital do estado do Paraná. Seu nome deriva do estilo construtivo, feito de tubos de aço e estruturas metálicas, coberto com placas transparentes de policarbonato, lembrando a fragilidade de uma construção em arame.\n[…]\nAs estruturas metálicas tubulares, totalizando 360 toneladas de aço, e os 2.400 bancos de tela de arame foram fornecidas pela Brafer Construções Metálicas, empresa de Araucária, na Região Metropolitana de Curitiba.\n[…]\nNa década de 1990, o teatro do Ópera de Arame serviu de palco para o show musical Noite de Gala, da Rede CNT, apresentado por Clodovil Hernandes.\n[…]\nSua influência estética e programática também se disseminou no imaginário sobre a cidade de Curitiba e, de maneira mais ampla, do Brasil. A obra ajudou a legitimar a utilização de estruturas metálicas leves, sistemas aparentes e elementos transparentes. Em projetos posteriores de praças, arenas e fachadas experimentais na cidade e na região, é possível reconhecer ecos dessa estética de exposição estrutural e integração com jardins e espelhos d’água.\n[…]\nA peça inaugural foi Sonho de uma Noite de Verão, na abertura do primeiro Festival de Teatro de Curitiba. Dirigida por Cacá Rosset, com o Teatro do Ornitorrinco, tendo no elenco: Christiane Tricerri, Cacá Rosset, Tácito Rocha, Ary França, Rubens Caribé, José Rubens Chachá, Gerson Steves, Mário César Camargo e outros.\n[…]\nFoi palco, em 4 de abril de 1993, da festa dos 300 anos de Curitiba.\n[…]\nEm 2006 ocorreu o Festival de Dança de Curitiba 2006, no qual quatro mil crianças dançaram o tema Diversidade em Movimento.\n[…]\nEm Outubro de 2011 ocorreu a gravação do DVD Acústico na Ópera de Arame, da dupla sertaneja Fernando e Sorocaba.\n[…]\nLista de teatros do Brasil"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Carlos Gomes",
      "descricao": "Compositor brasileiro de óperas (1836–1896), autor de O Guarani."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Carlos Gomes, autor da ópera O Guarani, nasceu em 1836 em que cidade paulista?",
    "resposta": "Campinas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carlos_Gomes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Gomes",
        "situacao": "ok",
        "texto": "Antônio Carlos Gomes (pronúncia em português brasileiro: [ɐ̃ˈtoni.u ˈkaʁluz ˈɡomis]; 11 de julho de 1836 – 16 de setembro de 1896) foi um compositor brasileiro, lembrado sobretudo por suas óperas. Figura central do romantismo musical brasileiro, foi o primeiro compositor das Américas a alcançar grande sucesso no mundo operístico europeu.\n[…]\nCarlos Gomes nasceu em 11 de julho de 1836 na Vila de São Carlos, atual Campinas, na Província de São Paulo. Na família era chamado de Tonico e, em Campinas, ficou conhecido como Nhô Tonico, apelido que mais tarde usou em dedicatórias. Seu pai, Manuel José Gomes, conhecido como Maneco Músico, era músico e mestre de capela na vila; sua mãe era Fabiana Maria Jaguary Cardoso.\n[…]\nA Praça Carlos Gomes, no centro de Campinas, recebeu o nome do compositor em 1880. A praça tornou-se uma das áreas tradicionais de lazer da cidade e passou por ajardinamento e construção de coreto no início do século XX.\n[…]\nSeu legado é lembrado por lojas maçônicas regulares no estado de São Paulo que levam seu nome como patrono, incluindo lojas em Campinas, Jaguariúna, Tupã e na cidade de São Paulo. A loja da capital paulista, A∴R∴L∴S∴ Carlos Gomes nº 1.598 – Grande Benfeitora da Ordem, foi fundada em 30 de setembro de 1950 e permanece filiada ao Grande Oriente do Brasil e ao Grande Oriente Paulista.\n[…]\nA abertura do hino oficial do Guarani FC usa uma melodia inspirada nos primeiros acordes de O Guarani. O hino foi composto em 1976 pelo jornalista e compositor Oswaldo Guilherme e Augusto Duarte Ribeiro. O próprio clube foi fundado em 2 de abril de 1911, em uma reunião na Praça Carlos Gomes, em Campinas, por jovens descendentes de imigrantes italianos e alemães. Seu nome homenageia a ópera de Gomes e reflete o orgulho local pela reputação internacional do compositor.\n[…]\nMuseu Carlos Gomes, em Campinas"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Theatro Municipal de São Paulo",
      "descricao": "Teatro de ópera e concertos no centro de São Paulo, projetado pelo escritório de Ramos de Azevedo e inaugurado em 1911."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Projetado pelo escritório de Ramos de Azevedo, o Theatro Municipal de São Paulo foi inaugurado em que ano?",
    "resposta": "1911",
    "distratores": [
      "1922",
      "1898",
      "1937"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Theatro_Municipal_de_São_Paulo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Theatro_Municipal_de_São_Paulo",
        "situacao": "ok",
        "texto": "Theatro Municipal de São Paulo é um teatro brasileiro localizado na cidade de São Paulo, projetado pelos arquitetos Ramos de Azevedo, Claudio Rossi e Domiziano Rossi no estilo arquitetônico eclético, inspirado na Ópera de Paris e inaugurado em 1911. É um dos cartões postais da cidade, localizado na Praça Ramos de Azevedo, também considerado um dos mais importantes teatros do país.\n[…]\nO local escolhido para a construção foi o Morro do Chá, que já abrigava o Teatro São José. Com o projeto de Cláudio Rossi, desenhos de Domiziano Rossi e construção pelo Escritório Técnico de Ramos de Azevedo, as obras foram iniciadas em 26 de junho de 1903 e finalizadas em 1911. O estilo arquitetônico da obra é o eclético, em voga na Europa desde a segunda metade do século XIX. São combinados os estilos Renascentista, Barroco do setecentos e Art Nouveau, sendo o último o estilo da época.\n[…]\nA estrutura física do teatro tem capacidade para atender 1523 pessoas, porém nem todos os seus assentos possuem visão completa para o palco. Em 28 de setembro de 2014 foi publicado pela Folha de S.Paulo o resultado de uma avaliação feita pela equipe do jornal ao visitar os sessenta maiores teatros da cidade de São Paulo. O Theatro Municipal foi premiado com três estrelas, uma nota \"regular\", com o consenso: \"Pontos positivos: compra on-line, serviços e instalações.\n[…]\nAté o início do século XX, as óperas que eram encenadas no Theatro Municipal eram produções completamente estrangeiras, pois, até então, o teatro não contava com instrumentistas e coros completos para uma montagem própria. Também na época não existiam muitas instituições de formação artística além do Conservatório Dramático e Musical de São Paulo.\n[…]\nRamos de Azevedo\n[…]\nTheatro Municipal de São Paulo no YouTube\n[…]\nTheatro Municipal de São Paulo no Instagram\n[…]\nOriginal da Monographia distribuida no dia da inauguração, em 11 de setembro de 1911"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Teatro alla Scala",
      "descricao": "Casa de ópera de Milão, na Itália, inaugurada em 1778."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Teatro alla Scala, de Milão, recebeu seu primeiro público em que século?",
    "resposta": "Século dezoito",
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Scala"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Scala",
        "situacao": "ok",
        "texto": "La Scala (UK: , US: , Italian: [la ˈskaːla]; officially Teatro alla Scala [teˈaːtro alla ˈskaːla], lit. 'Theatre at the Scala') is a historic opera house in Milan, Italy. The theatre was inaugurated on 3 August 1778 and was originally known as il Nuovo Regio Ducale Teatro alla Scala (lit. 'the New Royal Ducal Theatre at the Scala', which previously was a church). The premiere performance was Anton\n[…]\nThe theatre also has an associate school, known as the La Scala Theatre Academy (Italian: Accademia Teatro alla Scala), which offers professional training in music, dance, stagecraft, and stage management.\n[…]\nThe Museo Teatrale alla Scala (La Scala Theatre Museum), accessible from the theatre's foyer and a part of the house, contains a collection of paintings, drafts, statues, costumes, and other documents regarding the history of La Scala and of opera in general. La Scala also hosts the Accademia d'Arti e Mestieri dello Spettacolo (Academy for the Performing Arts).\n[…]\nIts goal is to train a new generation of young musicians, technical staff, and dancers (at the Scuola di Ballo del Teatro alla Scala, one of the academy's divisions).\n[…]\nStéphane Lissner left La Scala for the Paris Opera. His successor Alexander Pereira, formerly director of the Salzburg Festival, began his tenure on 1 October 2014. In June 2019 it was announced that Pereira would leave in 2020 and would be replaced by Dominique Meyer. La Scala was originally selected to host the opening ceremony of the 134th IOC Session in 2019, but the event was moved to Lausanne, Switzerland after Milan submitted a joint bid with Cortina d'Ampezzo for the 2026 Winter Olympics.\n[…]\nSee: Category:Opera world premieres at La Scala\n[…]\nMedia related to Teatro alla Scala at Wikimedia Commons\n[…]\nAccademia Teatro alla Scala official website\n[…]\nDavid Willey, \"La Scala faces uncertain future\", BBC News online, 12 November 2005\n[…]\nToscanini's reforms at La Scala"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_alla_Scala",
        "situacao": "ok",
        "texto": "O Teatro alla Scala (ou La Scala), em Milão, Itália, é uma das mais famosas casas de ópera do mundo.\n[…]\nO Teatro alla Scala foi construído por determinação da imperatriz Maria Teresa da Áustria, para substituir o Teatro Regio Ducale, destruído por um incêndio em 1776, devendo seu nome à igreja de Santa Maria alla Scala que antes se erguia no local.\n[…]\nEm 1839 a ópera Oberto, conte di San Bonifacio inaugura o ciclo de óperas de Giuseppe Verdi (1813-1901). Depois do fracasso de Un giorno di regno, em 1842 foi apresentado Nabucco, seu primeiro triunfo, seguido de I Lombardi alla prima crociata e Giovanna d'Arco, quando o compositor rompe com o teatro, só retornando em 1869, com La Forza del destino. Em 1872 Verdi estreia Aida, em 1874 «rege o seu Requiem, em 1881 compõe Simon Boccanegra.\n[…]\nAntonio Bernocchi foi o financista máximo para a reconstrução do Teatro alla Scala em Milão, atingido pelo bombardeio da guerra e reaberto \"como era e onde estava\" em 11 de maio de 1946.\n[…]\nBernocchi foi o principal financiador da reconstrução do Teatro La Scala, em Milão, embora ele irá nomear seus delegados Borletti e Baldan para representá-lo na administração. Em 1943 o Scala sofre grandes danos em virtude de um bombardeio. Reaberto em 11 de Maio de 1946 sob a regência de Toscanini, o teatro retoma a sua glória. Entre os regentes mais famosos destacam-se Wilhelm Furtwängler, Herbert von Karajan, Dimitri Mitropoulos, Bruno Walter.\n[…]\nSite oficial da Accademia Teatro alla Scala\n[…]\nDavid Willey, \"La Scala faces uncertain future\", BBC News online, 12 de novembro de 2005\n[…]\nTAs reformas de Toscanini no La Scala",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Teatro Globe",
      "descricao": "Teatro elisabetano de Londres, construído em 1599, onde a companhia de Shakespeare se apresentava."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Uma reconstrução do Teatro Globe de Shakespeare foi erguida em Londres, perto do local original. Em que década do século vinte ela abriu as portas?",
    "resposta": "Anos 1990",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shakespeare%27s_Globe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shakespeare%27s_Globe",
        "situacao": "ok",
        "texto": "Shakespeare's Globe is a reconstruction of the Globe Theatre, an Elizabethan playhouse first built in 1599 for which William Shakespeare wrote his plays. Like the original, it is located on the south bank of the River Thames, in Southwark, London. The reconstruction was completed in 1997 and the theatre's official opening was attended by Queen Elizabeth II.\n[…]\nThe modern Shakespeare's Globe was founded by the actor and director Sam Wanamaker, and built about 230 metres (750 ft) from the site of the original theatre in the historic open-air style. It opened to the public in 1997, with a production of Henry V.\n[…]\nThe reconstruction was carefully researched so that the new building would be as faithful a replica of the original as possible. This was aided by the discovery of the remains of the original Rose Theatre, a nearby neighbour to the Globe, as final plans were being made for the site and structure.\n[…]\nCarson, Christie and Karim Cooper Shakespeare's Globe: A theatrical Experiment Cambridge University Press, 2008, ISBN 978-0521701662\n[…]\nRylance, Mark: Play: A Recollection in Pictures and Words of the First Five Years of Play at Shakespeares's Globe Theatre. Photogr.: Sheila Burnett, Donald Cooper, Richard Kolina, John Tramper. Shakespeare's Globe Publ., London, 2003. ISBN 0-9536480-4-4.\n[…]\nNatan Skop, Shakespeare’s Globe : Reconstructed and Contemporary, Mythic and Innovative, Tel Aviv University\n[…]\nShakespeare's Globe pre-theatre drinks and bar restaurant\n[…]\nPlays performed at the reconstructed Globe (by season) (Shakespeare's Globe)\n[…]\nShakespeare's Globe at the Shakespeare Resource Center\n[…]\nShakespeare's Globe 2008 'Totus Mundus' season\n[…]\nTokyo Globe Theatre (Japanese only) Archived 6 August 2020 at the Wayback Machine\n[…]\nTeatro Shakespeare Buenos Aires Archived 26 February 2020 at the Wayback Machine (Mobile construction that evokes an Elizabethan Theatre)"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Romeu e Julieta",
      "descricao": "Tragédia de William Shakespeare sobre dois jovens amantes de famílias rivais de Verona."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A história dos jovens amantes de Verona, Romeu e Julieta, foi escrita por Shakespeare em que século?",
    "resposta": "Século dezesseis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Romeo_and_Juliet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Romeo_and_Juliet",
        "situacao": "ok",
        "texto": "The Tragedy of Romeo and Juliet, often shortened to Romeo and Juliet, is a tragedy written by William Shakespeare about the romance between two young Italians from feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed. The title characters are regarded as archetypal young lovers.\n[…]\nThomas Otway's The History and Fall of Caius Marius, one of the more extreme of the Restoration adaptations of Shakespeare, debuted in 1679. The scene is shifted from Renaissance Verona to ancient Rome with a balcony featuring; Romeo is Marius, Juliet is Lavinia, the feud is between patricians and plebeians; Juliet/Lavinia wakes from her potion before Romeo/Marius dies. Otway's version was a hit, and was acted for the next seventy years.\n[…]\nSome reports said it was one of the most elaborate productions of Romeo and Juliet ever seen in America; it was certainly the most popular, running for over six weeks and earning over $60,000 (equivalent to $1,000,000 in 2025). The programme noted that: \"The tragedy will be produced in strict accordance with historical propriety, in every respect, following closely the text of Shakespeare.\"\n[…]\nIn 2009, Shakespeare's Globe ran a production of Romeo and Juliet which was directed by Dominic Dromgoole, and starred Adetomiwa Edun as Romeo and Ellie Kendrick as Juliet.\n[…]\nMore tales from Blixt's Star-Cross'd series appear in Varnished Faces: Star-Cross'd Short Stories (2015) and the plague anthology, We All Fall Down (2020). Blixt also authored Shakespeare's Secrets: Romeo & Juliet (2018), a collection of essays on the history of Shakespeare's play in performance, in which Blixt asserts the play is structurally not a Tragedy, but a Comedy-Gone-Wrong. In 2014 Blixt and his wife, stage director Janice L.\n[…]\nRomeo and Juliet public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Romeu_e_Julieta",
        "situacao": "ok",
        "texto": "Romeu e Julieta (no original em inglês: Romeo and Juliet) é uma tragédia escrita entre 1591 e 1595, nos primórdios da carreira literária de William Shakespeare, sobre dois adolescentes cuja morte acaba unindo suas famílias, outrora em pé de guerra. A peça ficou entre as mais populares na época de Shakespeare e, ao lado de Hamlet, é uma das suas obras mais levadas aos palcos do mundo inteiro. Hoje,\n[…]\nRomeu e Julieta pertence a uma tradição de romances trágicos que remonta à antiguidade. Seu enredo é baseado em um conto italiano, traduzido em versos como A Trágica História de Romeu e Julieta, por Arthur Brooke, em 1562. E refeito em prosa como Palácio do Prazer, por William Painter, em 1582. Shakespeare baseou-se em ambos, mas reforçou a atuação dos personagens secundários, especialmente Mercúcio e Páris, a fim de expandir o enredo.\n[…]\nRomeu, por exemplo, fica mais versado nos sonetos à medida que a trama se desenvolve.\n[…]\nEm mais de cinco séculos, Romeu e Julieta foi adaptada em inúmeras áreas, como teatro, cinema, música e literatura. William Davenant tentou revigorá-la durante a Restauração inglesa. David Garrick modificou cenas e removeu passagens consideradas indecentes no século XVIII. Charlotte Cushman, no século XIX, apresentou ao público uma versão que preservou o texto original de Shakespeare.\n[…]\nAlém de se mostrar influente no ultrarromantismo português e no naturalismo brasileiro, Romeu e Julieta mantém-se famosa nas produções cinematográficas atuais, notavelmente na versão de 1968 de Zeffirelli, indicado ao Oscar como melhor filme, e no mais recente Romeu + Julieta, de Luhrmann, que traz seu enredo para a atualidade.\n[…]\nRomeu e Julieta retrata a interação entre três proeminentes famílias em Verona:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Sófocles",
      "descricao": "Dramaturgo trágico de Atenas, autor de Édipo Rei e Antígona."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Sófocles, autor de Édipo Rei e Antígona, viveu e escreveu em Atenas em que século antes de Cristo?",
    "resposta": "Século quinto antes de Cristo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sophocles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sophocles",
        "situacao": "ok",
        "texto": "Sophocles (; Ancient Greek: Σοφοκλῆς, pronounced [so.pʰo.klɛ̂ːs], Sophoklễs; c. 497/496 – winter 406/405 BC) was an ancient Greek tragedian, one of three from whom at least two plays have survived in full. His first plays were written later than, or contemporary with, those of Aeschylus and earlier than, or contemporary with, those of Euripides.\n[…]\nSophocles died at the age of 90 or 91 in the winter of 406/5 BC, having seen, within his lifetime, both the Greek triumph in the Persian Wars and the bloodletting of the Peloponnesian War. As with many famous men in classical antiquity, his death inspired a number of apocryphal stories. One claimed that he died from the strain of trying to recite a long sentence from his Antigone without pausing to take a breath.\n[…]\nThe Theban plays comprise three plays: Oedipus Rex (also called Oedipus Tyrannus or Oedipus the King), Oedipus at Colonus, and Antigone. All three concern the fate of Thebes during and after the reign of King Oedipus. They have often been published under a single cover; but Sophocles wrote them for separate festival competitions, many years apart. The Theban plays are not a proper trilogy (i.e.\n[…]\nThe plays were written across 36 years of Sophocles's career and were not composed in chronological order, but instead were written in the order Antigone, Oedipus Rex, and Oedipus at Colonus. Nor were they composed as a trilogy – a group of plays to be performed together, but are the remaining parts of three different groups of plays.\n[…]\nLloyd-Jones, Hugh (ed.) (1994b). Sophocles: Antigone. The Women of Trachis. Philoctetes. Oedipus at Colonus. Edited and translated by Hugh Lloyd-Jones, Loeb Classical Library No. 21.\n[…]\nSophocles. Sophocles I: Oedipus the King, Oedipus at Colonus, Antigone. 2nd ed. Grene, David, and Lattimore, Richard, eds. Chicago: University of Chicago, 1991."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%B3focles",
        "situacao": "ok",
        "texto": "Sófocles (em grego: Σοφοκλῆς, Sophoklês; 497 ou 496 a.C.- inverno de 406 ou 405 a.C ) foi um dramaturgo grego, um dos mais importantes escritores de tragédia ao lado de Ésquilo e Eurípedes, dentre aqueles cujo trabalho sobreviveu. Suas peças retratam personagens nobres e da realeza. Filho de um rico mercador, nasceu em Colono, perto de Atenas, na época do governo de Péricles, o apogeu da cultura h\n[…]\nSuas primeiras peças foram escritas depois que as de Ésquilo e antes que as de Eurípedes. De acordo com a Suda, uma enciclopédia do século X, Sófocles escreveu 123 peças durante sua vida, mas apenas sete sobreviveram em uma forma completa. Por quase 50 anos, Sófocles foi o mais celebrado dos dramaturgos nos concursos dramáticos da cidade-estado de Atenas, que aconteciam durante as festas religiosas Leneana e Dionísia.\n[…]\nTalvez a mais famosa é a sugestão de que ele morreu devido ao esforço excessivo ao tentar recitar uma longa passagem de sua Antígona sem pausa para respirar. Outra versão sugere que ele se engasgou ao comer uvas no festival Antesteria em Atenas. Uma terceira história afirma que ele morreu de felicidade depois de obter a vitória final na Cidade Dionísia.\n[…]\nPoucos meses depois, o poeta cômico escreveu este elogio em sua peça intitulada As Musas: \"Bendito seja Sófocles, que teve uma vida longa, era um homem feliz e talentoso e o escritor de muitas boas tragédias, e terminou sua vida assim, sem sofrer qualquer desgraça.\" Isto é um tanto irônico, pois de acordo com alguns relatos seus próprios filhos tentaram declará-lo incapaz perto do fim da sua vida.\n[…]\nDiz-se que teria refutado seu cargo na corte através da leitura de sua ainda não produzida Édipo em Colono. Tanto Iofon, um de seus filhos e um neto também chamado de Sófocles, seguiram seus passos e tornaram-se dramaturgos.\n[…]\nÉdipo em Colono\n[…]\nFragmentary Tragedies of Sophocles Project\n[…]\nFilmes baseados em peças de Sófocles - IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Teatro nô",
      "descricao": "Forma clássica de teatro musical japonês, com atores mascarados e movimentos lentos, desenvolvida por Kan'ami e Zeami."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O teatro nô, do Japão, com atores mascarados e movimentos lentos, ganhou sua forma clássica em que século?",
    "resposta": "Século quatorze",
    "distratores": [
      "Século dez",
      "Século dezessete",
      "Século dezenove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Noh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Noh",
        "situacao": "ok",
        "texto": "Noh (能, Nō; Japanese pronunciation: [no(ꜜ)ː], Sino-Japanese for \"ability\") is a major form of classical Japanese dance-drama that has been performed since the 14th century. It is Japan's oldest major theater art that is still regularly performed today. Noh is often based on tales from traditional literature featuring a supernatural being transformed into a human hero who narrates the story.\n[…]\nThe kanji for Noh (能) means \"skill\", \"craft\", or \"talent\", particularly in the field of performing arts in this context. The word Noh may be used alone or with gaku (楽; entertainment, music) to form the word nōgaku. Noh is a classical tradition that is highly valued by many today. When used alone, Noh refers to the historical genre of theatre that originated from sarugaku in the mid 14th century and continues to be performed today.\n[…]\nThere are 240 in the current repertoire performed by the five existing Noh schools. However, roughly 2,000 plays created for Noh are known today. The current repertoire is heavily influenced by the taste of aristocratic class in Tokugawa period and does not necessarily reflect popularity among the commoners. There are several ways to classify Noh plays.\n[…]\nAll Noh plays can be classified into three broad categories.\n[…]\nAll Noh plays are divided by their themes into the following five categories. This classification is considered the most practical, and is still used in formal programming choices today. Traditionally, a formal 5-play program is composed of a selection from each of the groups."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Noh",
        "situacao": "ok",
        "texto": "Nō, nô, nou ou noh (能; habilidade, talento) ou ainda nōgaku (能楽; talento que vem com facilidade) é uma forma clássica de teatro profissional japonês que combina canto, pantomima, música e poesia. Executado desde o século XIV, é uma das formas mais importantes do drama musical clássico japonês.\n[…]\nEvoluiu de outras formas teatrais, aristocráticas e populares, incluindo o Dengaku, Shirabyoshi e Gagaku. O termo nō deriva da palavra japonesa que quer dizer talento ou habilidade. Muitas de suas personagens usam máscaras, os shites (protagonista) e seu acompanhante, mas não todas. Suas raízes podem ser encontradas no nuóxì (儺戲), uma forma de teatro da China. Deu origem a outras formas dramáticas, como o Kabuki.\n[…]\nO nō é a fusão de poesia, teatro, bailado, música vocal e instrumental e máscaras. Os diversos elementos musicais são estreitamente entrelaçados numa simbiose entre o canto e a pantomima. No nō, a descrição de cada cena repousa unicamente no texto do canto, nos gestos e nos movimentos do ator. A combinação desses elementos obedece a regras corporais e musicais, a teorias sofisticadas, resultando numa estética extremamente refinada, o que gera dificuldade geral em compreendê-lo e apreciá-lo.\n[…]\nPor tradição os atores de nō não ensaiam juntos; cada ator pratica seus movimentos, canções sozinho ou com a orientação de um membro mais antigo. Entretanto, o ritmo de cada apresentação é determinado pela interação de todos os atores, músicos e pelo coro. Desta forma o nō exemplifica um dos princípios estéticos de tempo e duração, chamado pelo mestre de chá Sen no Rikyu \"ichi-go, ichi-e\" (一期一会; uma vez, um encontro).\n[…]\nSuzuki, Eiko. Nô Teatro Clássico Japonês. São Paulo: Editora do Escritor.\n[…]\nTeatro Nō, Embaixada do Japão no Chile\n[…]\nMáscaras e intrumentos profissionais (versão inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Casa de Bonecas",
      "descricao": "Peça de Henrik Ibsen, estreada em Copenhague em 1879, sobre Nora Helmer e seu casamento."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Casa de Bonecas, de Ibsen, escandalizou o público com Nora deixando marido e filhos. Em que década do século dezenove a peça estreou?",
    "resposta": "Anos 1870",
    "fonte": [
      "https://en.wikipedia.org/wiki/A_Doll%27s_House"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/A_Doll%27s_House",
        "situacao": "ok",
        "texto": "A Doll's House (Danish and Bokmål: Et dukkehjem; also translated as A Doll House) is a three-act play written by Norwegian playwright Henrik Ibsen. It premiered at the Royal Danish Theatre in Copenhagen, Denmark, on 20 December 1879, having been published earlier that month. The play is set in a Norwegian town c. 1879.\n[…]\nNora Helmer\n[…]\nA Doll's House received its world premiere on 21 December 1879 at the Royal Danish Theatre in Copenhagen, with Betty Hennings as Nora,  Emil Poulsen as Torvald, and Peter Jerndorff as Dr. Rank. Writing for the Norwegian newspaper Folkets Avis, the critic Erik Bøgh admired Ibsen's originality and technical mastery: \"Not a single declamatory phrase, no high dramatics, no drop of blood, not even a tear.\" Every performance of its run was sold out.\n[…]\nMencken writes that it was A Doll's House \"denaturized and dephlogisticated. [...] Toward the middle of the action Ibsen was thrown to the fishes, and Nora was saved from suicide, rebellion, flight and immorality by making a faithful old clerk steal her fateful promissory note from Krogstad's desk. [...] The curtain fell upon a happy home.\"\n[…]\nDariush Mehrjui's 1992 film Sara is based on A Doll's House, with the plot transferred to Iran. Sara, played by Niki Karimi, is the Nora of Ibsen's play.\n[…]\nIn 1973, Norwegian TV produced an adaptation of A Doll's House titled Et dukkehjem, directed by Arild Brinchmann and starring Lise Fjeldstad as Nora Helmer.\n[…]\nIn 1974, Danish Television produced an adaptation of A Doll's House titled Et dukkehjem, reworked by Leif Panduro, directed by Palle Kjærulff-Schmidt and starring Ghita Nørby as Nora and Preben Neergaard as Thorvald. Also featuring Henning Moritzen, Hanne Borchsenius, Ove Sprogøe, and Lily Broberg.\n[…]\nA Doll's House at Project Gutenberg\n[…]\nA Doll's House public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uma_Casa_de_Bonecas",
        "situacao": "ok",
        "texto": "Uma Casa de Bonecas (no original em norueguês: Et Dukkehjem) é uma peça teatral do dramaturgo norueguês Henrik Ibsen, escrita em 1879. Começou a ser elaborada em 1878 e foi concluída em 1879, sendo representada pela primeira vez no “Det Kongelige Teater”, em Copenhage. No período de dois meses, a peça foi encenada nos principais teatros escandinavos, provocando muitas polêmicas acerca de seu teor,\n[…]\nCom essa peça, Ibsen passa a ter destaque dentro e fora da Escandinávia.\n[…]\nCom essa peça, os críticos acreditam que Ibsen abriu caminho para a tragédia, pois foi a primeira solução trágica do autor: Nora abandona marido e filhos em busca da liberdade pessoal.\n[…]\nIbsen iniciou com o seu trabalho em “Casa de Bonecas” em 1878, e conhecia o que se chamou “caso Laura Kieler”, e isso influenciou a sua peça. Laura Smith Petersen — cujo nome de casada posteriormente seria Kieler — teve um romance publicado em 1869, cujo título era “Brand`s Daughters: a Picture of Life”, e que era uma espécie de seqüência de Brand, de Ibsen.\n[…]\nO caso terminou em tragédia quando a falsificação foi descoberta, o marido pediu o divórcio, seus filhos foram tirados dela, e a pressão exercida sobre ela a levou a ser internada em um hospital mental por um tempo. Ibsen sabia de tudo isso quando estava trabalhando em “Casa de Bonecas”.\n[…]\nJosé Almino de Alencar e Silva Neto. Digitada, por volta de 2002, acervo da SBAT, baseada nas traduções estadunidense de McGuiness, “Doll’s house”, de Londres, publicado pela Faber and Faber, 1996, e de Marc Auchet, “Une Maison de poupée”, Paris: Librairie Générale Française, 1990. Foi utilizada no espetáculo “Casa de boneca”, sob direção de Bia Lessa, no Rio de Janeiro, em 2002.\n[…]\nIBSEN, Henrik (2003). Casa de Bonecas. São Paulo: Editora Nova Cultural. [S.l.: s.n.] Trad. Cecil Thiré\n[…]\nUma Casa de Bonecas no Projeto Gutenberg\n[…]\nA Doll's House na Broadway\n[…]\nIbsen.net: Et dukkehjem (em norueguês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "A Flauta Mágica",
      "descricao": "Ópera de Mozart, com libreto de Emanuel Schikaneder, estreada em Viena em 1791."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Flauta Mágica estreou em Viena cerca de dois meses antes da morte de seu compositor. Em que ano?",
    "resposta": "1791",
    "distratores": [
      "1756",
      "1786",
      "1801"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Magic_Flute"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Magic_Flute",
        "situacao": "ok",
        "texto": "The Magic Flute (German: Die Zauberflöte, pronounced [diː ˈtsaʊbɐˌfløːtə] ), K. 620, is an opera in two acts by Wolfgang Amadeus Mozart to a German libretto by Emanuel Schikaneder. It is a Singspiel, a popular form that included both singing and spoken dialogue. The work premiered on 30 September 1791 at Schikaneder's theatre, the Freihaus-Theater auf der Wieden in Vienna, just two months before M\n[…]\nThe opera premiered in Vienna on 30 September 1791 at the suburban Freihaus-Theater auf der Wieden. Mozart conducted the orchestra and Schikaneder himself played Papageno, while the role of the Queen of the Night was sung by Mozart's sister-in-law Josepha Hofer.\n[…]\nThe opera celebrated its 100th performance in November 1792, though Mozart did not have the pleasure of witnessing this milestone, as he had died on 5 December 1791. The opera was first performed outside Vienna (21 September 1792) in Lemberg, then in Prague. It then made \"triumphal progress through Germany's opera houses great and small\", and with the early 19th century spread to essentially all the countries of Europe—and eventually, everywhere in the world—where opera is cultivated.\n[…]\nThe Magic Flute is among the most frequently performed of all operas.\n[…]\nOn 28 December 1791, three and a half weeks after Mozart's death, his widow Constanze offered to send a manuscript score of The Magic Flute to the electoral court in Bonn. Nikolaus Simrock published this text in the first full-score edition (Bonn, 1814), claiming that it was \"in accordance with Mozart's own wishes\" (Allgemeine musikalische Zeitung, 13 September 1815).\n[…]\nWorks inspired by The Magic Flute\n[…]\nSan Diego OperaTalk! with Nick Reveles: Mozart's The Magic Flute, UC-TV and San Diego Opera\n[…]\nAnimated score, full performance (2hrs 35 mins) on YouTube, Arnold Östman conducting the Drottningholm Court Theatre Orchestra, 1992; see The Magic Flute discography."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Flauta_M%C3%A1gica",
        "situacao": "ok",
        "texto": "A Flauta Mágica (original em alemão Die Zauberflöte  ) KV 620  é uma ópera (singspiel) em dois atos de Wolfgang Amadeus Mozart, com libreto alemão de Emanuel Schikaneder. Estreou no Theater auf der Wieden em Viena, no dia 30 de setembro de 1791.\n[…]\n625/592a), e acabou levando à composição da Flauta Mágica em 1791. Enquanto Schikaneder se propôs a escrever o libreto da peça, Mozart ficou responsável por sua melodia.\n[…]\nA ópera estreou em Viena no dia 30 de setembro de 1791 no teatro Freihaus-Theater auf der Wieden. Mozart foi o condutor da orquestra e Schikaneder, responsável pelo texto da ópera, também atuou no papel de Papageno. Tamino ficou a cargo do compositor Benedikt Schak, e a cunhada de Mozart, Josepha Hofer, assumiu o papel da Rainha da Noite.\n[…]\nDias depois, o compositor Antonio Salieri e a cantora Catarina Cavalieri foram recebidos por Mozart, que os levou para apreciar sua mais nova obra, que os deixou bastante impressionados, como explica na carta escrita à esposa no dia 14 de outubro de 1791:\n[…]\nDe fato o desejo de Salieri e Cavalieri se concretizou, pois cerca de um ano após sua estreia, a ópera celebrou sua 100º apresentação em novembro de 1792, mas Mozart não teve o prazer de presenciar esse marco, morrendo no dia 5 de dezembro de 1791. Até hoje a ópera é uma das mais apreciadas pelo público alemão, como comenta o compositor Richard Wagner:\n[…]\n2 flautas\n[…]\nA Flauta Mágica também ganhou espaço no oriente, com a publicação de Mateki: The Magic Flute, uma adaptação literária da ópera escrita e ilustrada por Yoshitaka Amano, que conta com elementos clássicos da cultura japonesa.\n[…]\n«Capa do libreto publicado na primeira performance de 1791»  - internetloge.org\n[…]\n«Discografia: versões gravadas de A Flauta Mágica»  - mozarteum.at",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Ópera Garnier",
      "descricao": "Teatro de ópera de Paris, projetado por Charles Garnier e inaugurado em 1875."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Ópera Garnier, de Paris, que serviu de cenário ao romance O Fantasma da Ópera, foi inaugurada em que século?",
    "resposta": "Século dezenove",
    "fonte": [
      "https://en.wikipedia.org/wiki/Palais_Garnier"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Palais_Garnier",
        "situacao": "ok",
        "texto": "The Palais Garnier (French: [palɛ ɡaʁnje] , \"Garnier Palace\"), also known as Opéra Garnier (French: [ɔpeʁa ɡaʁnje] , \"Garnier Opera\"), is a historic 1,979-seat opera house at the Place de l'Opéra in the 9th arrondissement of Paris, France. It was built for the Paris Opera from 1861 to 1875 at the behest of Emperor Napoleon III.\n[…]\nInitially referred to as le nouvel Opéra de Paris (the new Paris Opera), it soon became known as the Palais Garnier, \"in acknowledgment of its extraordinary opulence\" and the architect Charles Garnier's plans and designs, which are representative of the Napoleon III style. It was the primary theatre of the Paris Opera and its associated Paris Opera Ballet until 1989, when a new opera house, the Opéra Bastille, opened at the Place de la Bastille.\n[…]\nThe Palais Garnier has been called \"probably the most famous opera house in the world, a symbol of Paris like Notre Dame Cathedral, the Louvre, or the Sacré Coeur Basilica\". This is at least partly due to its use as the setting for Gaston Leroux's 1910 novel The Phantom of the Opera and, especially, the novel's subsequent adaptations in films and the popular 1986 musical.\n[…]\nThe Palais Garnier also houses the Bibliothèque-Musée de l'Opéra de Paris (Paris Opera Library-Museum), which is managed by the Bibliothèque Nationale de France and is included in unaccompanied tours of the Palais Garnier.\n[…]\nThe Hanoi Opera House in Vietnam was built 1901–1911 during French Indochina colonial period based upon Palais Garnier. It is considered a representative French colonial architectural monument in Indochina.\n[…]\n360° Panoramas of the Paris Opera Archived 6 October 2017 at the Wayback Machine by the Media Center for Art History at Columbia University\n[…]\nSelected images and video of the Palais Garnier Archived 16 October 2021 at the Wayback Machine by Art Days"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93pera_Garnier",
        "situacao": "ok",
        "texto": "A Ópera Garnier ou Palais Garnier é uma casa de ópera localizada no IX arrondissement de Paris, França. O edifício é considerado uma das obras-primas da arquitetura de seu tempo. Construído em estilo neobarroco, é o 13º teatro a hospedar a Ópera de Paris, desde sua fundação por Luís XIV, em 1669. Sua capacidade é de 1979 espectadores sentados.\n[…]\nO palácio era comumente chamado apenas de Ópera de Paris, mas, após a inauguração da Ópera da Bastilha, em 1989, passou a ser chamado Ópera Garnier.\n[…]\nA pedra angular da Ópera Garnier foi colocada em 1861 e a construção teve início no mesmo ano. Entretanto a obra foi interrompida por numerosos incidentes, incluindo a Guerra Franco-Prussiana, a queda do Império francês e a Comuna de Paris. Outro problema foi o próprio terreno, extremamente pantanoso, o que implicou contínuos bombeamentos de água durante oito meses, antes que as fundações pudessem ser lançadas.\n[…]\nDizia-se que existia um lago subterrâneo alimentado pelo rio Grange-Batelière - hipótese  sabiamente explorada pelo célebre romance de  Gaston Leroux, O Fantasma da Ópera. Na realidade, o rio corre um pouco mais longe.\n[…]\nDepois de inúmeros contratempos, os trabalhos foram completados em 1874, e o Palácio Garnier foi formalmente inaugurado em 15 de janeiro de 1875, com a representação da ópera A Judia, de  Halévy, e trechos de Os Huguenotes, de Giacomo Meyerbeer.\n[…]\nO Palácio Garnier é um dos dois teatros que abrigam a Ópera Nacional de Paris, sendo o outro a Ópera da Bastilha.\n[…]\nO palácio é servido pela estação de metrô Opéra.\n[…]\nÓpera Nacional de Paris\n[…]\nBalé da Ópera de Paris\n[…]\nBeauvert, Thierry, Opera Houses of the World, The Vendome Press, New York, 1995. [ISBN 0-86565-978-8]\n[…]\nPágina oficial da Ópera Garnier (em francês)\n[…]\nLocalização da Ópera Garnier em Paris (em francês)\n[…]\nPara mais informações sobre a ópera",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "La Fenice",
      "descricao": "Teatro de ópera de Veneza, inaugurado em 1792 e reconstruído após incêndios, o último em 1996."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Destruído por incêndios e reconstruído mais de uma vez, o teatro de ópera La Fenice, de Veneza, tem um nome bem adequado. O que ele significa?",
    "resposta": "Fênix",
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Fenice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Fenice",
        "situacao": "ok",
        "texto": "Teatro La Fenice (pronounced [teˈaːtro la feˈniːtʃe]; \"The Phoenix Theatre\") is a historic opera house in Venice, Italy. It is one of \"the most famous and renowned landmarks in the history of Italian theatre\" and in the history of opera as a whole. Especially in the 19th century, La Fenice became the site of many famous operatic premieres at which several works by the four major bel canto era comp\n[…]\nReconstruction of the decorations in the house, in a Rococo style, was based mainly on consultation of the considerable photographic archive on the opera house held in the theatre's historic archive.\n[…]\nReconstruction of the masonry and wooden framing of the building was carried out in the opera house itself by hundreds of workers employed 24 hours a day, seven days a week, while the decorative components were constructed at the same time in various external workshops so that these would be ready for application once the structural work was complete.\n[…]\n\"As it was, where it was\", the motto for reconstruction of La Fenice, called for the opera house to be rebuilt as it was before the 1996 fire.\n[…]\nDonna Leon's debut novel, Death at La Fenice (1992), the first in her Commissario (Detective) Guido Brunetti detective series, centers on a mystery surrounding the sensational death by cyanide poisoning of a famous orchestra conductor, in the midst of a production of La traviata at La Fenice. In several scenes the opera house is described in meticulous detail, as it was at the time of writing, prior to the third fire.\n[…]\nOpera houses and theatres of Venice\n[…]\nRomanelli, Giandomenico et al (1997), Gran Teatro La Fenice, Cologne: Evergreen. ISBN 3-8228-7062-5\n[…]\nLa Fenice website, teatrolafenice.it\n[…]\n\"Two jailed for La Fenice arson\" (BBC News)\n[…]\n\"Arsonist of La Fenice released after 16 months\", Corriere della Sera\n[…]\n\"Teatro la Fenice di Venezia: the long (and shamy) story of a reconstruction\", veniceword.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_La_Fenice",
        "situacao": "ok",
        "texto": "O Teatro La Fenice (em português \"A fênix\") é o principal teatro de ópera de Veneza, nordeste da Itália. Destruído várias vezes e reedificado, é sede de uma importante temporada operística e do festival internacional de música contemporânea.\n[…]\nConstruído rapidamente em pouco mais de um ano, foi inaugurado em 16 de maio de 1792 com a ópera de Giovanni Paisiello I giochi di Agrigento.\n[…]\nFoi destruído em 13 de dezembro de 1836 por um incêndio, mas foi reconstruído logo em seguida, repetido o projeto original. Cem anos se passaram e em 1937 foi restaurado por Eugenio Miozzi.\n[…]\nA outra grande tragédia ocorreu em 29 de janeiro de 1996, quando o teatro foi completamente destruído por um incêndio provocado: as chamas foram induzidas por um eletricista, Enrico Carella, na tentativa de evitar punições contratuais por um atraso no serviço que lhe havia sido encomendado.\n[…]\nDepois de oito anos de obras, o teatro foi reinaugurado em 14 de dezembro de 2003 com um concerto dirigido por Riccardo Muti.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Teatro alla Scala",
      "descricao": "Casa de ópera de Milão, na Itália, inaugurada em 1778."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O famoso teatro de ópera de Milão herdou seu nome de uma construção demolida para lhe dar lugar. Que tipo de construção era?",
    "resposta": "Uma igreja",
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Scala"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Scala",
        "situacao": "ok",
        "texto": "La Scala (UK: , US: , Italian: [la ˈskaːla]; officially Teatro alla Scala [teˈaːtro alla ˈskaːla], lit. 'Theatre at the Scala') is a historic opera house in Milan, Italy. The theatre was inaugurated on 3 August 1778 and was originally known as il Nuovo Regio Ducale Teatro alla Scala (lit. 'the New Royal Ducal Theatre at the Scala', which previously was a church). The premiere performance was Anton\n[…]\nThe theatre also has an associate school, known as the La Scala Theatre Academy (Italian: Accademia Teatro alla Scala), which offers professional training in music, dance, stagecraft, and stage management.\n[…]\nThe Museo Teatrale alla Scala (La Scala Theatre Museum), accessible from the theatre's foyer and a part of the house, contains a collection of paintings, drafts, statues, costumes, and other documents regarding the history of La Scala and of opera in general. La Scala also hosts the Accademia d'Arti e Mestieri dello Spettacolo (Academy for the Performing Arts).\n[…]\nIts goal is to train a new generation of young musicians, technical staff, and dancers (at the Scuola di Ballo del Teatro alla Scala, one of the academy's divisions).\n[…]\nStéphane Lissner left La Scala for the Paris Opera. His successor Alexander Pereira, formerly director of the Salzburg Festival, began his tenure on 1 October 2014. In June 2019 it was announced that Pereira would leave in 2020 and would be replaced by Dominique Meyer. La Scala was originally selected to host the opening ceremony of the 134th IOC Session in 2019, but the event was moved to Lausanne, Switzerland after Milan submitted a joint bid with Cortina d'Ampezzo for the 2026 Winter Olympics.\n[…]\nSee: Category:Opera world premieres at La Scala\n[…]\nMedia related to Teatro alla Scala at Wikimedia Commons\n[…]\nAccademia Teatro alla Scala official website\n[…]\nDavid Willey, \"La Scala faces uncertain future\", BBC News online, 12 November 2005\n[…]\nToscanini's reforms at La Scala"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_alla_Scala",
        "situacao": "ok",
        "texto": "O Teatro alla Scala (ou La Scala), em Milão, Itália, é uma das mais famosas casas de ópera do mundo.\n[…]\nO Teatro alla Scala foi construído por determinação da imperatriz Maria Teresa da Áustria, para substituir o Teatro Regio Ducale, destruído por um incêndio em 1776, devendo seu nome à igreja de Santa Maria alla Scala que antes se erguia no local.\n[…]\nEm 1839 a ópera Oberto, conte di San Bonifacio inaugura o ciclo de óperas de Giuseppe Verdi (1813-1901). Depois do fracasso de Un giorno di regno, em 1842 foi apresentado Nabucco, seu primeiro triunfo, seguido de I Lombardi alla prima crociata e Giovanna d'Arco, quando o compositor rompe com o teatro, só retornando em 1869, com La Forza del destino. Em 1872 Verdi estreia Aida, em 1874 «rege o seu Requiem, em 1881 compõe Simon Boccanegra.\n[…]\nAntonio Bernocchi foi o financista máximo para a reconstrução do Teatro alla Scala em Milão, atingido pelo bombardeio da guerra e reaberto \"como era e onde estava\" em 11 de maio de 1946.\n[…]\nBernocchi foi o principal financiador da reconstrução do Teatro La Scala, em Milão, embora ele irá nomear seus delegados Borletti e Baldan para representá-lo na administração. Em 1943 o Scala sofre grandes danos em virtude de um bombardeio. Reaberto em 11 de Maio de 1946 sob a regência de Toscanini, o teatro retoma a sua glória. Entre os regentes mais famosos destacam-se Wilhelm Furtwängler, Herbert von Karajan, Dimitri Mitropoulos, Bruno Walter.\n[…]\nSite oficial da Accademia Teatro alla Scala\n[…]\nDavid Willey, \"La Scala faces uncertain future\", BBC News online, 12 de novembro de 2005\n[…]\nTAs reformas de Toscanini no La Scala",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Libreto",
      "descricao": "Texto de uma ópera ou outra obra musical dramática, com falas e versos cantados."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O texto cantado de uma ópera se chama libreto. Em italiano, o que essa palavra quer dizer?",
    "resposta": "Livrinho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Libretto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Libretto",
        "situacao": "ok",
        "texto": "A libretto (from the Italian word libretto, lit. 'booklet') is the text used in, or intended for, an extended musical work such as an opera, operetta, masque, oratorio, cantata or musical. The term libretto is also sometimes used to refer to the story line of a ballet or the texts of major liturgical works, such as the Mass, requiem, or sacred cantata.\n[…]\nAnother exception was Alberto Franchetti's 1906 opera La figlia di Iorio which was a close rendering of a highly successful play by its librettist, Gabriele D'Annunzio, a celebrated Italian poet, novelist and dramatist of the day. In some cases, the operatic adaptation has become more famous than the literary text on which it was based, as with Claude Debussy's Pelléas et Mélisande after a play by Maurice Maeterlinck.\n[…]\nList of opera librettists\n[…]\nMacNutt, Richard (1992), \"Libretto\" in The New Grove Dictionary of Opera, ed. Stanley Sadie (London) ISBN 0-333-73432-7\n[…]\nNeville, Don (1990). Frontier Research in Opera and Multimedia Preservation: a Project Involving the Documentation and Full Text Retrieval of the Libretti of Pietro Metastasio. London: Faculty of Music, University of Western Ontario. Without ISBN\n[…]\nSmith, Patrick J. The Tenth Muse: a Historical Study of the Opera Libretto. First ed. New York: A.A. Knopf, 1970. xxii, 417, xvi p. + [16] p. of b&w ill. Without ISBN or SBN\n[…]\nWarrack, John and West, Ewan (1992), The Oxford Dictionary of Opera, 782 pages, ISBN 0-19-869164-5\n[…]\nPublic Domain opera libretti and other vocal texts\n[…]\nOperaGlass Opera Index Selected operas with corresponding libretti\n[…]\nOperaFolio.com Index of over 1000 opera libretti\n[…]\nopera-guide.ch, opera libretti in German translation and their original languages\n[…]\nSelected opera libretti at Naxos\n[…]\nLibretti in Biblioteca Estense, Modena, Italy Archived 19 July 2013 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Libreto",
        "situacao": "ok",
        "texto": "Um libreto (italiano para \"livreto\") é o texto usado ou destinado a uma obra musical extensa, como uma ópera, opereta, oratório, cantata ou musical. O termo libreto também é algumas vezes usado para se referir ao texto das principais obras litúrgicas, como a missa, o réquiem e a cantata sagrada, ou o enredo de um balé.\n[…]\nLibretto do italiano, é o diminutivo da palavra libro (\"livro\"). Às vezes, equivalentes em outro idioma são usados ​​para libretos nesse idioma, livret para obras francesas e Textbuch para alemão. Um libreto é distinto de uma sinopse ou cenário da trama, pois o libreto contém todas as palavras e direções do palco, enquanto uma sinopse resume a trama.\n[…]\nAlguns historiadores do balé também usam a palavra libreto para se referir aos livros de 15 a 40 páginas que estavam à venda para o público de balé do século XIX em Paris e continham uma descrição muito detalhada da história do balé, cena por cena.\n[…]\nO libreto é muitas vezes referido como o livro da obra, embora esse uso exclua normalmente as letras cantadas.\n[…]\nNeville, Don (1990). Frontier Research in Opera and Multimedia Preservation: a Project Involving the Documentation and Full Text Retrieval of the Libretti of Pietro Metastasio. London: Faculty of Music, University of Western Ontario. Without ISBN.\n[…]\nMacNutt, Richard (1992), \"Libretto\" in The New Grove Dictionary of Opera, ed. Stanley Sadie (London) ISBN 0-333-73432-7.\n[…]\nSmith, Marian Elizabeth (2000). Ballet and Opera in the Age of Giselle. Princeton University Press. ISBN 9780691049946..\n[…]\nWarrack, John and West, Ewan (1992), The Oxford Dictionary of Opera, 782 pages, ISBN 0-19-869164-5\n[…]\nKareol: libretos traduzidos para espanhol",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Ópera",
      "descricao": "Gênero de teatro inteiramente cantado, com orquestra, surgido na Itália."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra ópera chegou até nós pelo italiano, que a herdou do latim. Qual é o significado original dela?",
    "resposta": "Obra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Opera"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Opera",
        "situacao": "ok",
        "texto": "Opera is a form of Western theatre in which music is a fundamental component and dramatic roles are taken by singers. Such a \"work\" (the literal translation of the Italian word \"opera\") is typically a collaboration between a composer and a librettist and incorporates a number of the performing arts, such as acting, scenery, costume, and sometimes dance or ballet.\n[…]\nHowever, the honour of being the first opera still to be regularly performed goes to Claudio Monteverdi's L'Orfeo, composed for the court of Mantua in 1607. The Mantua court of the Gonzagas, employers of Monteverdi, played a significant role in the origin of opera employing not only court singers of the concerto delle donne (till 1598), but also one of the first actual \"opera singers\", Madama Europa.\n[…]\nSimultaneously some domestic musicians of Ukrainian origin like Maxim Berezovsky and Dmitry Bortniansky were sent abroad to learn to write operas. The first opera written in Russian was Tsefal i Prokris by the Italian composer Francesco Araja (1755). The development of Russian-language opera was supported by the Russian composers Vasily Pashkevich, Yevstigney Fomin and Alexey Verstovsky.\n[…]\nUntil the mid-1950s, it was acceptable to produce operas in translations even if these had not been authorised by the composer or the original librettists. For example, opera houses in Italy routinely staged Wagner in Italian. After World War II, opera scholarship improved, artists refocused on the original versions, and translations fell out of favour. Knowledge of European languages, especially Italian, French, and German, is today an important part of the training for professional singers.\n[…]\nMacMurray, Jessica M. and Allison Brewster Franzetti: The Book of 101 Opera Librettos: Complete Original Language Texts with English Translations, Black Dog & Leventhal Publishers, 1996. ISBN 978-1-884822-79-7"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93pera",
        "situacao": "ok",
        "texto": "Ópera (em italiano:  significa obra, em latim, plural de \"opus\", obra) é um gênero artístico teatral que consiste em um drama encenado acompanhada de música, ou seja, composição dramática em que se combinam música instrumental e canto, com presença ou não de diálogo falado. Os cantores são acompanhados por um grupo musical, que em algumas óperas pode ser uma orquestra sinfônica completa.\n[…]\nEm Nápoles surgiram: Giovanni Battista Pergolesi (1710-1736), que escreveu uma obra notável, La serva padrona; Niccolò Jommelli (1714-1774) e Tommaso Traetta (1727-1779), chamados os \"Gluck italianos\"; Baldassare Galuppi (1706-1785), considerado o pai da ópera bufa; e o maior expoente na ópera séria, Giovanni Bononcini (1670-1747); Giovanni Paisiello (1740-1816) e Domenico Cimarosa (1749-1801), últimos grandes compositores de ópera bufa.\n[…]\nA ópera francesa foi influenciada pelo bel canto de Rossini e outros compositores italianos.\n[…]\nApenas alguns anos após a estreia de Dafne, foi composta a primeira ópera de língua alemã que chegou até nós: Seelewig ou Das geistliche Waldgedicht oder Freudenspiel, genannt Seelewig (O poema espiritual da floresta ou peça alegre, intitulado Seelewig), de Sigmund Theophil Staden, a partir de um libreto de Georg Philipp Harsdürffer. Seelewig é uma obra alegórico-didática, inspirada na dramaturgia escolástica (Schuldrama) da Renascença alemã.\n[…]\nMozart alternou diversas óperas em língua italiana com óperas em língua alemã. A opera seria Idomeneo (1781), sua primeira obra-prima, foi escrita em italiano para o teatro de ópera de Munique. Após os Singspiele Bastien und Bastienne, Zaide e O Rapto do Serralho (Die Entführung aus dem Serail), Mozart estabeleceu com As Bodas de Fígaro (1786) e, sobretudo, com Don Giovanni (1787), seu estilo peculiar, que aproximava elementos da opera seria e da opera buffa.\n[…]\nTeatro de ópera",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Arma de Tchekhov",
      "descricao": "Princípio dramático segundo o qual todo elemento apresentado numa história deve ter função, como uma arma que precisa disparar."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que dramaturgo russo dá nome ao princípio de que, se uma arma aparece no primeiro ato, ela precisa disparar até o fim?",
    "resposta": "Anton Tchekhov",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chekhov%27s_gun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chekhov%27s_gun",
        "situacao": "ok",
        "texto": "Chekhov's gun (or Chekhov's rifle; Russian: Чеховское ружьё, romanized: Chekhovskoye ruzhyo) is a narrative principle emphasizing that every element in a story should be necessary, while irrelevant elements should be removed. For example, if a gun is included in a story, there must be a reason for it, such as being fired at some later point.\n[…]\nThe principle that all elements must eventually come into play over the course of the story is recorded, with some variation, in several letters by Anton Chekhov, as advice for young playwrights.\n[…]\nThe principle is carried out in many of the James Bond films, in which the spy is presented with new gadgets at the beginning of a mission — such as a concealed, wrist-activated dart gun in Moonraker — and typically each device serves a vital role in the story. The principle dictates that only the devices utilized later in the story may be presented.\n[…]\nErnest J. Simmons writes that Chekhov repeated the same point, which may account for there being several variations.\n[…]\nWriting in 1999, Donald Rayfield noted that in Chekhov's play The Cherry Orchard, contrary to Chekhov's own advice, there are two loaded firearms that are not fired. The unfired rifles tie into the play's theme of lacking or incomplete action.\n[…]\nErnest Hemingway mocked the principle in his essay \"The art of the short story\", giving the example of two characters who are introduced and then never mentioned again in his short story \"Fifty Grand\". Hemingway valued inconsequential details, but conceded that readers will inevitably seek symbolism and significance in them. Writer Andrea Phillips argued that assigning a single role for every detail makes a story predictable and leaves it \"colorless\".\n[…]\nConcision – the principle of brevity in writing"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arma_de_Chekhov",
        "situacao": "ok",
        "texto": "A arma de Tchekhov (em russo:  Чеховское ружьё) é um princípio dramático descrito por Anton Tchekhov, segundo o qual todos os elementos presentes em uma história devem ser necessários e elementos irrelevantes devem ser removidos. Os elementos não devem produzir \"falsas promessas\", sem afetar o enredo depois de apresentados.\n[…]\nForeshadowing  –  um dispositivo dramático em que eventos futuros são sugeridos, para despertar interesse ou para se proteger contra decepções;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Deus ex machina",
      "descricao": "Recurso narrativo em que um problema é resolvido de forma súbita por uma intervenção externa, nome vindo do teatro grego."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A expressão deus ex machina vem do teatro grego, em que deuses surgiam no alto para resolver a trama. A que máquina ela se refere?",
    "resposta": "Um guindaste de cena",
    "fonte": [
      "https://en.wikipedia.org/wiki/Deus_ex_machina",
      "https://en.wikipedia.org/wiki/Mechane"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Deus_ex_machina",
        "situacao": "ok",
        "texto": "Deus ex machina ( DAY-əs ex-MA(H)K-in-ə; Latin: [ˈdɛ.ʊs ɛks ˈmaːkʰɪnaː]; plural: dei ex machina; 'God from the machine') is a plot device, a type of denouement  in which a seemingly unsolvable problem in a story is suddenly or abruptly resolved by an unexpected and unlikely occurrence. Its function is generally to resolve an otherwise irresolvable plot situation, to surprise the audience, to bring\n[…]\nAristotle (in the Poetics 15 1454b1) was the first to use a Greek term equivalent to the Latin phrase deus ex machina to describe the technique as a device to resolve the plot of tragedies. It is generally considered to be undesirable in writing and often implies a lack of creativity on the part of the author. The reasons for this are that it damages the story's internal logic and is often so unlikely that it challenges the reader's suspension of disbelief.\n[…]\nSuch a device was referred to by Horace in his Ars Poetica (lines 191–2), where he instructs poets that they should never resort to a \"god from the machine\" to resolve their plots \"unless a difficulty worthy of a god's unraveling should happen\" [nec deus intersit, nisi dignus uindice nodus inciderit; nec quarta loqui persona laboret].\n[…]\nFollowing Aristotle, Renaissance critics continued to view the deus ex machina as an inept plot device, although it continued to be employed by Renaissance dramatists.\n[…]\nThe conflict throughout Euripides's plays would be caused by the meddling of the gods, so it would make sense both to the playwright and to the audience of the time that the gods would resolve all conflict that they began. Half of Euripides's eighteen extant plays end with the use of deus ex machina; therefore, it was not simply a device to relieve the playwright of the embarrassment of a confusing plot-ending.\n[…]\nThe dictionary definition of deus ex machina at Wiktionary\n[…]\n\"Deus ex Machina\" . New International Encyclopedia. 1905."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mechane",
        "situacao": "ok",
        "texto": "A mechane (; Ancient Greek: μηχανή, romanized: mēkhanḗ) or machine was a crane used in Greek theatre, especially in the 5th and 4th centuries BC. Made of wooden beams and pulley systems, the device was used to lift an actor into the air, usually representing flight. This stage machine was particularly used to bring gods onto the stage from above, hence the Latin term deus ex machina (\"god from the\n[…]\nEuripides' use of the mechane in Medea (431 BCE) is a notable use of the machine for a non-divine character. It was also often used by Aeschylus.\n[…]\nStage machines were also used in ancient Rome, e.g. during the sometimes highly dramatic performances at funerals. For Julius Caesar's funeral service, Appian reports a mechane that was used to present a blood-stained wax effigy of the deceased dictator to the funeral crowd. The mechane was used to turn the body in all directions. Geoffrey Sumi proposes that the use of the mechane \"hinted at Caesar's divinity\".\n[…]\nThis is highly unlikely because Appian doesn't describe the mechane as a genuine deus-ex-machina device. Furthermore Caesar's apotheosis wasn't legally conducted until 42 BCE and Caesar had only been worshipped unofficially as divus during his lifetime. First and foremost, Marcus Antonius attempted to arouse the masses as a means to strengthen Caesar's esteem as well as his own political power."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deus_ex_machina",
        "situacao": "ok",
        "texto": "Deus ex machina (do grego ἀπὸ μηχανῆς θεός: apò mēkhanḗs theós), expressão em latim que significa literalmente \"deus surgiu da máquina\", utilizada para indicar uma solução inesperada/mirabolante (magicamente providenciada por uma divindade) para terminar uma obra ficcional. Um termo que surgiu no teatro greco.\n[…]\nO termo Deus ex machina (\"deus surgiu da máquina\" ou \"deus que desce em uma máquina\") surgiu no teatro na Grécia Antiga, quando muitas peças terminavam com uma divindade/força sobrenatural personificada surgindo (metaforicamente) no palco para resolver impasses da trama encenada. O método teatral então adotado era: descer o ator (que fazia o papel de Deus) no meio da cena, utilizando um guindaste (a máquina). Daí o \"Deus surgiu da máquina\".\n[…]\nNo entanto, outros estudiosos analisaram o uso de deus ex machina por Eurípides e descreveram seu uso como parte integrante da trama projetada para um propósito específico. Muitas vezes, as peças de Eurípides começavam com deuses, por isso argumenta-se que seria natural que os deuses terminassem a ação.\n[…]\nO conflito ao longo das peças de Eurípides seria causado pela intromissão dos deuses, então faria sentido tanto para o dramaturgo quanto para o público da época que os deuses resolveriam todos os conflitos que eles começaram. Metade das dezoito peças existentes de Eurípides termina com o uso de deus ex machina, portanto, não teria sido simplesmente um dispositivo para aliviar o dramaturgo do constrangimento de um final de enredo confuso.\n[…]\nÀs vezes, a improbabilidade do dispositivo de enredo deus ex machina é empregada deliberadamente. Por exemplo, o efeito cômico é criado em uma cena em A Vida de Brian, do Monty Python, quando Brian, que vive na Judéia na época de Cristo, é salvo de uma queda por uma nave alienígena que passava.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Theatro Municipal do Rio de Janeiro",
      "descricao": "Teatro de ópera, balé e concertos na Cinelândia, no Rio de Janeiro, inaugurado em 1909."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Inaugurado em 1909, o Theatro Municipal do Rio de Janeiro teve a arquitetura inspirada em que teatro de Paris?",
    "resposta": "Ópera Garnier",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Theatro_Municipal_do_Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Theatro_Municipal_do_Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "O Theatro Municipal do Rio de Janeiro é um dos mais importantes teatros brasileiros. Localiza-se no bairro da Cinelândia, centro do Rio de Janeiro.\n[…]\nNesse contexto, realizou-se um concurso para a construção de um novo teatro, do qual saiu vitorioso o projeto de Francisco de Oliveira Passos (filho do então prefeito Pereira Passos), que contou com a colaboração do francês Albert Guilbert, com um desenho inspirado na Ópera de Paris, de Charles Garnier.\n[…]\nFinalmente, quatro anos e meio mais tarde — um tempo recorde para a obra, que teve o revezamento de 280 operários em dois turnos de trabalho —, no dia 14 de julho de 1909, foi inaugurado pelo então presidente da República, Nilo Peçanha, o Theatro Municipal do Rio de Janeiro. Francisco de Sousa Aguiar era o então prefeito da cidade.\n[…]\nEm seus primórdios, apresentavam-se no teatro apenas companhias e orquestras estrangeiras — especialmente as italianas e francesas —, até que, em 1931, foi criada a Orquestra Sinfônica do Theatro Municipal do Rio de Janeiro.\n[…]\nEm comemoração aos cem anos do Theatro Municipal do Rio de Janeiro, foram iniciadas extensas obras no teatro que, foi totalmente restaurado ao estilo original.\n[…]\nPara resgatar a beleza original ao teatro, construído no início do século anterior, foram investidos 70 milhões de reais nos trabalhos de restauro, que duraram mais de novecentos dias. Já para resgatar o dourado nos ornamentos do teatro, foram utilizadas milhares de folhas de ouro de 23 quilates compradas na Alemanha e que adornam os detalhes da fachada e da cúpula, como detalhou a Secretaria de Cultura do Rio de Janeiro, da qual depende a Fundação Theatro Municipal."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Rent (musical)",
      "descricao": "Musical da Broadway de Jonathan Larson, de 1996, sobre jovens artistas em Nova York na época da epidemia de aids."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O musical Rent, sobre jovens artistas pobres de Nova York na época da aids, atualiza o enredo de que ópera de Puccini?",
    "resposta": "La Bohème",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rent_(musical)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rent_(musical)",
        "situacao": "ok",
        "texto": "Rent (stylized in all caps) is a rock musical with music, lyrics, and book by Jonathan Larson. Loosely based on the 1896 opera La bohème by Giacomo Puccini, Luigi Illica, and Giuseppe Giacosa, it tells the story of a group of impoverished young artists struggling to survive and create a life in Lower Manhattan's East Village, in the thriving days of the bohemian culture of Alphabet City, under the\n[…]\nIn 1988, playwright Billy Aronson wanted to create \"a musical based on Puccini's La Bohème, in which the luscious splendor of Puccini's world would be replaced with the coarseness and noise of modern New York.\" In 1989, Jonathan Larson, a 29-year-old composer, began collaborating with Aronson on this project, and the two composed together \"Santa Fe\", \"Rent\", and \"I Should Tell You\".\n[…]\nLarson's inspiration for Rent's content came from several different sources. Many of the characters and plot elements are drawn directly from Giacomo Puccini's opera La Bohème, the world premiere of which was in 1896, a century before Rent's premiere. La Bohème was also about the lives of poor young artists. Tuberculosis, the plague of Puccini's opera, is replaced by HIV/AIDS in Rent; 1800s Paris is replaced by New York's East Village in the late 1980s or early 1990s.\n[…]\nThe Man: The local drug dealer whom Mimi buys from and Roger used to buy from. Based on the character Parpignol from La Bohème.\n[…]\nThe production received generally unfavorable reviews. The Guardian gave it only one out of five stars, writing, \"They call this 'Rent Remixed'. I'd dub it 'Rent Reduced', in that the late Jonathan Larson's reworking of La Bohème, while never a great musical, has been turned into a grisly, synthetic, pseudo pop concert with no particular roots or identity.\"  The production closed on February 2, 2008.\n[…]\n​Rent​ at the Internet Off-Broadway Database (archived)\n[…]\n​Rent​ at the Internet Broadway Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rent_%28musical%29",
        "situacao": "ok",
        "texto": "Rent é uma obra de teatro musical, composta por Jonathan Larson. Conta a história de um grupo de amigos que vivem em New York nos anos 80. Aborda alguns temas que marcaram aquela época, como o desemprego, o uso de drogas, a homossexualidade, a liberação sexual e a AIDS. Venceu o Tony Award de melhor musical.\n[…]\nVencedor do Prêmio Pulitzer de Teatro com Rent, Jonathan Larson não pode nem comemorar do sucesso de sua principal obra, pois faleceu às vésperas da estréia do show, vítima de uma doença rara, a síndrome de Marfan.\n[…]\nRent está em cartaz desde 1996 no Nederlander Theatre em New York. Uma particularidade é que em todas as apresentações acontece um sorteio. Os melhores lugares (primeira e segunda filas) são sorteados para os que colocarem o seu nome na urna. Assim até mesmo os menos favorecidos têm uma chance de assistir Rent da primeira fila.\n[…]\nNo Brasil, foram feitas duas grandes versões do musical. A primeira, em 1999, foi como a inauguração do gênero no Brasil, sendo uma superprodução com  cenários e figurinos vindos diretamente Broadway. A peça contou com nomes como Alessandra Maestrini que interpretava Maureen Johnson, Daniel Ribeiro como Mark Cohen,  André Dias como a drag queen Angel, Andrea Marquee como Mimi Márquez, Robson Moura como Roger Davis, Neusa Romano como Joanne Jefferson e Maurício Xavier como Tom Collins.\n[…]\nA peça ficou em cartaz no teatro Ópera em São Paulo, possuindo direção geral de Billy Bond e direção musical de Oswaldo Sperandio.\n[…]\nUm especial de televisão foi transmitido pela FOX em 27 de janeiro de 2019. Sendo uma produção parcialmente ao vivo do musical, estrelada por Vanessa Hudgens, Jordan Fisher, Tinashe, Brandon Victor Dixon, Mario, Valentina, Kiersey Clemons e Brennin Hunt.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Pigmalião (peça)",
      "descricao": "Peça de George Bernard Shaw, de 1913, sobre um professor de fonética que transforma a fala de uma florista."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O musical My Fair Lady, sobre uma florista que aprende a falar como uma dama, adapta que peça de Bernard Shaw?",
    "resposta": "Pigmalião",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pygmalion_(play)",
      "https://en.wikipedia.org/wiki/My_Fair_Lady"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pygmalion_(play)",
        "situacao": "ok",
        "texto": "Pygmalion is a play written by George Bernard Shaw in 1912, named after the Greek mythological figure. It was first presented onstage in German translation, premiering at the Hofburg Theatre in Vienna on 16 October 1913. Its English-language premiere took place at His Majesty's Theatre in the West End of London in April 1914 and starred Herbert Beerbohm Tree as a phonetics professor, Henry Higgins\n[…]\nPygmalion became Shaw's most popular play, enduring in popular culture as the heavily adapted and romanticized My Fair Lady (1956 musical and 1964 film).\n[…]\nPygmalion remains Shaw's most popular play. The play's widest audiences know it as the inspiration for the highly romanticized 1956 musical and 1964 film My Fair Lady.\n[…]\nMy Fair Lady (1956), the Broadway musical by Lerner and Loewe (based on the 1938 film), starring Rex Harrison as Higgins and Julie Andrews as Eliza.\n[…]\nPygmalion (1935), a German film adaptation by Shaw and others, starring Gustaf Gründgens as Higgins and Jenny Jugo as Eliza. Directed by Erich Engel.\n[…]\nPygmalion (1938), a British film adaptation by Shaw and others, starring Leslie Howard as Higgins and Wendy Hiller as Eliza.\n[…]\nMy Fair Lady (1964), a film version of the musical starring Audrey Hepburn as Eliza and Rex Harrison as Higgins.\n[…]\nPigmalião 70, a 1970 Brazilian telenovela, starring Sérgio Cardoso and Tônia Carrero.\n[…]\nPigmalió, an adaptation by Joan Oliver into Catalan. Set in 1950s Barcelona, it was first staged in Sabadell in 1957 and has had other stagings since.\n[…]\nسيدتي الجميلة (Sayydati El-Gameela, My Fair Lady), a 1969 Egyptian stage adaptation of My Fair Lady starring the comedy duo and then married couple, Fouad el-Mohandes and Shwikar. It was performed and filmed for television at the Alexandria Opera House.\n[…]\nPygmalion at Project Gutenberg\n[…]\nPygmalion public domain audiobook at LibriVox\n[…]\nShaw's Pygmalion was in a different class 2014 Irish Examiner article by Dr. R. Hume"
      },
      {
        "url": "https://en.wikipedia.org/wiki/My_Fair_Lady",
        "situacao": "ok",
        "texto": "My Fair Lady is a musical with a book and lyrics by Alan Jay Lerner and music by Frederick Loewe. The story, based on George Bernard Shaw's 1913 play Pygmalion and on the 1938 film adaptation of the play, concerns Eliza Doolittle, a Cockney flower girl who takes speech lessons from professor Henry Higgins, a phonetician, so that she may pass as a lady. Despite his cynical nature and difficulty und\n[…]\nIn the mid-1930s, film producer Gabriel Pascal acquired the rights to produce film versions of several of George Bernard Shaw's plays, Pygmalion among them. However, Shaw, having had a bad experience with The Chocolate Soldier, a Viennese operetta based on his play Arms and the Man, refused permission for Pygmalion to be adapted into a musical. After Shaw died in 1950, Pascal asked lyricist Alan Jay Lerner to write the musical adaptation.\n[…]\nVarious titles were suggested for the musical. Dominic McHugh wrote: \"During the autumn of 1955, the show [was] typically referred to as My Lady Liza, and most of the contracts refer to this as the title.\" Lerner preferred My Fair Lady, relating both to one of Shaw's provisional titles for Pygmalion and to the final line of every verse of the nursery rhyme \"London Bridge Is Falling Down\".\n[…]\n\"My Fair Lady is wise, witty, and winning. In short, a miraculous musical.\" Walter Kerr, New York Herald Tribune.\n[…]\nThe reception from Shavians was more mixed, however. Eric Bentley, for instance, called it \"a terrible treatment of Mr. Shaw's play, [undermining] the basic idea [of the play]\", even though he acknowledged it as \"a delightful show\". My Fair Lady was later called \"the perfect musical\".\n[…]\nMcHugh, Dominic. Loverly: The Life and Times of \"My Fair Lady\"  (Oxford University Press; 2012) 265 pages; uses unpublished documents to study the five-year process of the original production.\n[…]\n​My Fair Lady​ at the Internet Broadway Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pigmali%C3%A3o_%28pe%C3%A7a_de_teatro%29",
        "situacao": "ok",
        "texto": "Pigmalião, é uma peça teatral escrita em 1913 por George Bernard Shaw, que conta a história de uma mulher do povo transformada em mulher da alta sociedade.\n[…]\nA peça conta a história de Eliza Doolittle, uma mendiga que vende flores pelas ruas escuras de Londres em busca de uns trocados. Em uma dessas rotineiras noites, Eliza conhece um culto professor de fonética Henry Higgins e sua incrível capacidade de descobrir muito sobre as pessoas apenas através de seus sotaques.\n[…]\nQuando ouve o horrível sotaque de Eliza, aposta com o amigo Hugh Pickering que é capaz de transformar uma simples vendedora de flores numa dama da alta sociedade num espaço de seis meses.\n[…]\nA obra foi adaptada para o cinema com o nome My Fair Lady (br: Minha Bela Dama ou Minha Querida Dama/ pt: Minha Linda Senhora), um filme estadunidense de 1964, do gênero comédia musical e dirigido por George Cukor. Além do filme, a peça foi adaptada duas vezes para a televisão brasileira com as novelas : Pigmalião 70 e Totalmente Demais.\n[…]\nA obra se baseia no mito do Pigmalião. Segundo Ovídio, poeta romano contemporâneo de Augusto, Pigmaleão era um escultor e rei de Chipre que se apaixonou por uma estátua que esculpira ao tentar reproduzir a mulher ideal.\n[…]\nA deusa Afrodite, apiedando-se dele e atendendo a um seu pedido, não encontrando na ilha uma mulher que, em beleza e pudor, chegasse aos pés da que Pigmaleão esculpira, transformou a estátua numa mulher de carne e osso, com quem Pigmaleão casou-se e, nove meses depois, teve uma filha chamada Paphos, que deu nome a uma cidade na ilha.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "A Megera Domada",
      "descricao": "Comédia de William Shakespeare sobre a geniosa Catarina e seu pretendente Petrúquio."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O filme adolescente 10 Coisas que Eu Odeio em Você, de 1999, leva para um colégio americano que comédia de Shakespeare?",
    "resposta": "A Megera Domada",
    "fonte": [
      "https://en.wikipedia.org/wiki/10_Things_I_Hate_About_You"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/10_Things_I_Hate_About_You",
        "situacao": "ok",
        "texto": "10 Things I Hate About You is a 1999 American teen romantic comedy directed by Gil Junger (in his directorial debut) from a screenplay by Karen McCullah Lutz and Kirsten Smith. Loosely inspired by and based on William Shakespeare's comedy The Taming of the Shrew, it stars Julia Stiles, Heath Ledger, Joseph Gordon-Levitt, Larisa Oleynik, Larry Miller, Andrew Keegan, David Krumholtz, Susan May Pratt\n[…]\n10 Things I Hate About You gained praise in later years for its themes and characters, becoming considered a cult classic and as one of the best teen romantic comedies of all time.\n[…]\nWriting duo Karen McCullah Lutz and Kirsten Smith were inspired to write 10 Things I Hate About You after watching Clueless (1995). Being a fan of teen films, the pair set out to find a classic play or myth to turn it into a contemporary high-school movie, eventually settling on The Taming of the Shrew, a comedy by William Shakespeare. They wanted to write a strong-willed, feminist character. Patrick Verona was inspired by Judd Nelson's character in The Breakfast Club (1985).\n[…]\nThe film's casting directors Marcia Ross and Donna Morong were nominated for Best Casting for Feature Film, Comedy at the Casting Society of America's Artios Awards in 1999. In 2000, Stiles won the Chicago Film Critics Association Award for Most Promising Actress (tied with Émilie Dequenne in Rosetta) at the 1999 CFCA Awards and an MTV Movie Award for Breakthrough Female Performance at the 2000 MTV Movie Awards.\n[…]\nIn May 2025, a sequel was in development with the title 10 Things I Hate About Dating. Gil Junger will once again serve as director, with the filmmaker co-writing the script with Naya Elle James. Junger stated that similar to the previous movie being a William Shakespeare contemporary retelling, the new project will be based on Jean-Baptiste \"Molière\" Poquelin's The Misanthrope, or the Cantankerous Lover."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/10_Things_I_Hate_About_You",
        "situacao": "ok",
        "texto": "10 Things I Hate About You (bra: 10 Coisas Que Eu Odeio em Você; prt: 10 Coisas Que Odeio em Ti) é um filme norte-americano do gênero comédia romântica de 1999, escrita por Karen McCullah Lutz e Kirsten Smith e estrelado por Heath Ledger, Julia Stiles, Joseph Gordon-Levitt, Larisa Oleynik, David Krumholtz, e Larry Miller. O filme é baseado em The Taming of the Shrew do autor William Shakespeare.\n[…]\nO filme foi lançado em Março de 1999 e se tornou um sucesso inesperado para os atores Julia Stiles e Heath Ledger. Este filme marca a estreia do diretor Gil Junger nos cinemas, antes ele havia dirigido apenas produções para televisão.\n[…]\nHeath Ledger é Patrick Verona. Ele tem um sotaque australiano, pois morou na Austrália até os 10. É baseado na personagem Petrucchio, um dos principais de A Megera Domada e seu último nome, é uma referência a cidade do personagem na obra.\n[…]\nSusan May Pratt é Mandella Johsonn  , única amiga de Kat e fanática por Shakespeare.\n[…]\nNa premiação MTV Movie + TV Awards do ano 2000, a atriz Julia Stiles, que interpreta a protagonista Kat Stratford, ganhou o prêmio de revelação feminina (Breakthrough Female Performance) pelo filme \"10 Coisas Que Eu Odeio Em Você\".\n[…]\nNessa mesma premiação o filme também foi indicado na categoria Melhor Performance Musical (Best Musical Performance), com a música \"Can't Take My Eyes Off You\", performada por Heath Ledger, como o personagem Patrick Verona, que acabou perdendo para o filme South Park: Bigger, Longer & Uncut, com a música \"Uncle Fucka\".\n[…]\nEm 8 de Outubro de 2008, o canal ABC Family deu sinal verde para o início da produção de uma série de televisão de meia hora de duração baseada no filme. O ator Larry Miller é o único ator do filme que participou da série televisiva.\n[…]\nO programa teve sua estreia em 7 de Julho de 2009, e o diretor do filme Gil Junger dirigiu o episódio piloto da série.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Os Saltimbancos",
      "descricao": "Musical infantil adaptado por Chico Buarque em 1977, sobre quatro animais que fogem dos donos para formar uma banda."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O musical infantil Os Saltimbancos, com versões de Chico Buarque, reconta que conto dos irmãos Grimm?",
    "resposta": "Os Músicos de Bremen",
    "distratores": [
      "João e Maria",
      "Chapeuzinho Vermelho",
      "Branca de Neve"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Saltimbancos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Saltimbancos",
        "situacao": "ok",
        "texto": "Os Saltimbancos (I Musicanti, no original italiano) é uma peça de teatro musical infantil, inspirada no conto Os Músicos de Bremen, dos irmãos Grimm. Na peça original, em italiano, as canções têm letra de Sergio Bardotti e música de Luis Enríquez Bacalov. A versão em português foi traduzida e adaptada por Chico Buarque.\n[…]\nUma das mais expressivas obras de teatro musical dedicada ao público infantil Os Saltimbancos narra as aventuras de quatro bichos que, sentindo-se explorados por seus donos, resolvem fugir para a cidade e tentar a sorte como músicos.\n[…]\nA fábula musical foi traduzida e adaptada para o português por Chico Buarque de Hollanda no final de 1976, a partir da peça teatral de Sergio Bardotti e Luis Enríquez Bacalov, que por sua vez, é uma adaptação do conto Os Músicos de Bremen, dos Irmãos Grimm, como uma alegoria política, na qual o Jumento representa os trabalhadores do campo; a Galinha, a classe operária; o Cachorro, os militares; e a Gata, os artistas.\n[…]\nO musical ganhou o Troféu Mambembe na Categoria Especial para Chico Buarque pela adaptação da obra e o Troféu APCA da Associação Paulista de Críticos de Arte de Melhor Espetáculo.\n[…]\nEm 2014, Renato Aragão e Dedé Santana estrelaram Os Saltimbancos Trapalhões - O Musical, montada por Charles Möeller e Claudio Botelho.\n[…]\nEm 1981 o grupo humorístico Os Trapalhões lançaram o filme Os Saltimbancos Trapalhões, adaptado da peça de Chico Buarque e dirigido por J. B. Tanko. O filme foi considerado o melhor do grupo e também um dos 100 melhores filmes brasileiros de todos os tempos pela Associação Brasileira de Críticos de Cinema.\n[…]\nOs Saltimbancos no site oficial de Chico Buarque\n[…]\nOs Saltimbancos (álbum) no CliqueMusic\n[…]\nArtigo \"Chico Buarque e o teatro\", de Adriano de Paula Rabelo (Arquivado em 07 de novembro de 2006)"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Cacilda Becker",
      "descricao": "Atriz brasileira de teatro (1921–1969), uma das maiores da cena paulistana do século vinte."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1969, a atriz Cacilda Becker sofreu um derrame no intervalo de uma peça de Samuel Beckett, ainda com o figurino. Que peça era?",
    "resposta": "Esperando Godot",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cacilda_Becker"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cacilda_Becker",
        "situacao": "ok",
        "texto": "Cacilda Becker Iaconis (Pirassununga, 6 de abril de 1921 – São Paulo, 14 de junho de 1969) foi uma atriz brasileira. Foi uma das maiores e mais premiadas atrizes do teatro nacional, sendo grande incentivadora das obras tipicamente brasileiras. Avessa à televisão, fez apenas uma novela, Ciúme (1966), na TV Tupi.\n[…]\nEm 1968, Cacilda suspendeu as atividades da sua companhia teatral para presidir a Comissão Estadual de Teatro, em São Paulo; cargo no qual buscou ser a mediadora entre classe teatral e o Governo, o que lhe valeu muitos conflitos com a ditadura militar então vigente no país. Um ano depois, em 1969, retorna ao teatro, ao aceitar o desafio de representar, sob a direção de Flavio Rangel, o vagabundo Estragon de Esperando Godot.\n[…]\nSua presença no palco, ao lado de Walmor Chagas e de seu filho Luís Carlos Martins, que estreava no teatro, era citada como um dos acontecimentos importantes da temporada teatral daquele ano. Foi Cacilda quem inaugurou o Teatro Municipal de São Carlos com a peça \"Esperando Godot\", no começo de 1969.\n[…]\nCacilda provocava paixões avassaladoras e teve três maridos, sendo o último Walmor Chagas, com quem adotou sua única filha, Maria Clara Becker Chagas, nascida em 1964. Durante a apresentação do espetáculo \"Esperando Godot\", que encenava com o Walmor, na capital paulista, em 6 de maio de 1969, Cacilda sofreu um derrame cerebral e, não retornando para o segundo ato, foi levada para o hospital, ainda com as roupas de sua personagem.\n[…]\nCacilda morreu no dia 14 de junho de 1969 às 10 horas, no Hospital São Luís onde esteve internada por 38 dias, vítima de um derrame cerebral. Seu corpo foi velado na Capela de Dominicanos, e foi sepultado no Cemitério do Araçá.\n[…]\nEsperando Godot, de Samuel Beckett (1969) — Estragon\n[…]\n«A morte de Cacilda Becker», UOL, Almanaque Folha"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Turandot",
      "descricao": "Última ópera de Giacomo Puccini, sobre uma princesa chinesa, estreada no Scala de Milão em 1926."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na estreia de Turandot, em 1926, o maestro Toscanini parou a ópera no meio do último ato e se virou para a plateia. Por quê?",
    "resposta": "Ali Puccini morreu sem terminá-la",
    "fonte": [
      "https://en.wikipedia.org/wiki/Turandot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Turandot",
        "situacao": "ok",
        "texto": "Turandot (Italian pronunciation: [turanˈdo] or, prescribed, [turanˈdɔt] ; see below) is an opera in three acts by Giacomo Puccini to a libretto in Italian by Giuseppe Adami and Renato Simoni. Puccini died in 1924, and his opera was left unfinished. The music was completed by Franco Alfano  and premiered on 25 April 1926, almost a year and a half after Puccini's death.\n[…]\nPuccini seems to have had some inkling of the seriousness of his condition: before leaving for Brussels for treatment, he visited Arturo Toscanini and begged him, \"Don't let my Turandot die.\" He died of a heart attack on 29 November 1924.\n[…]\nToscanini recommended that Riccardo Zandonai be engaged to finish the opera. Puccini's son Tonio objected, and eventually Franco Alfano was chosen to flesh out the sketches after Vincenzo Tommasini (who had completed Boito's Nerone after the composer's death) and Pietro Mascagni were rejected. Puccini's publisher Tito Ricordi II decided on Alfano because his opera La leggenda di Sakùntala resembled Turandot in its setting and heavy orchestration.\n[…]\nTurandot premiered at the La Scala opera house in Milan, Italy, on 25 April 1926, a year and five months after Puccini's death. Rosa Raisa played Turandot. Tenors Miguel Fleta and Franco Lo Giudice alternated in the role of Prince Calaf, with Fleta singing the role on opening night. It was conducted by Arturo Toscanini. In the middle of act 3, the orchestra stopped playing. Toscanini turned to the audience and announced, \"Qui finisce l'opera, perché a questo punto il maestro è morto\" (transl.\n[…]\nOthers have reported that Toscanini said, \"Here, the Maestro laid down his pen.\" A newspaper report from 1926 states that Puccini asked Toscanini to stop the opera performance in the middle of act 3. The second and subsequent performances of the 1926 La Scala season included Alfano's ending."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Turandot",
        "situacao": "ok",
        "texto": "Turandot, última ópera de Giacomo Puccini, composta em três atos, com libreto de Giuseppe Adami e Renato Simoni,  baseado numa peça (1762) de Carlo Gozzi com a adaptação de Friedrich von Schiller. Estreou no Teatro alla Scala em Milão em 25 de abril de 1926, sob a regência de Arturo Toscanini. Esta ópera ficou inacabada por causa da morte do autor, a 29 de novembro de 1924, sendo completada por Fr\n[…]\nArturo Toscanini não gostou do final que Franco Alfano deu à ópera de Puccini; por isso, na cena de morte de Liù, virou-se para a plateia e disse: \"Senhoras e Senhores, aqui parou Giacomo Puccini\".\n[…]\nAllan Atlas, Newly discovered sketches for Puccini's  «Turandot» at the Pierpont Morgan Library, in: Cambridge Opera Journal, 3/1991, pp. 173–193.\n[…]\nPeter Revers, Analytische Betrachtungen zu Puccinis Turandot, in: Österreichische Musikzeitschrift 34/1979, pp. 342–351.\n[…]\nMichael Saffle, 'Exotic' Harmony in La Fanciulla del West and Turandot, in: Jürgen Maehder (ed.), Esotismo e colore locale nell'opera di Puccini, Pisa (Giardini), 1985, pp. 119–130.\n[…]\nArman Schwarz, Mechanism and Tradition in Puccini's Turandot, in: The Opera Quarterly 25/2009, pp. 28–50.\n[…]\nLynn Snook, « In Search of the Riddle Princess Turandot », in: Jürgen Maehder (ed.), Esotismo e colore locale nell'opera di Puccini, Pisa (Giardini), 1985, pp. 131–142.\n[…]\nIvanka Stoïanova, Remarques sur l'actualité de »Turandot«, in: Jürgen Maehder (ed.), Esotismo e colore locale nell'opera di Puccini, Pisa (Giardini), 1985, pp. 199–210.\n[…]\nMarco Uvietta, »È l'ora della prova': un finale Puccini-Berio per Turandot, in: Studi musicali 31/2002, pp. 395–479 ; English translation: »È l'ora della prova«: Berio's finale for Puccini's »Turandot«, in: Cambridge Opera Journal 16/2004, pp. 187–238.\n[…]\nWolfgang Volpers, Giacomo Puccinis Turandot;  Publikationen der Hochschule für Musik und Theater Hannover, vol. 5, Laaber (Laaber), 1994.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Antígona (Sófocles)",
      "descricao": "Tragédia de Sófocles sobre a filha de Édipo que desafia o rei Creonte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na tragédia de Sófocles, Antígona é condenada à morte pelo rei Creonte por desobedecer a uma ordem dele. O que ela fez?",
    "resposta": "Enterrou o irmão Polinices",
    "fonte": [
      "https://en.wikipedia.org/wiki/Antigone_(Sophocles_play)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antigone_(Sophocles_play)",
        "situacao": "ok",
        "texto": "Antigone ( ann-TIG-ə-nee; Ancient Greek: Ἀντιγόνη) is an Athenian tragedy written by Sophocles in either 442 or 440 BC and first performed at the Festival of Dionysus of the same year. It is thought to be the second-oldest surviving play of Sophocles, preceded by Ajax, which was written around the same period. The play is one of a triad of tragedies known as the three Theban plays, following Oedip\n[…]\nThe gods are portrayed as chthonic, as near the beginning there is a reference to \"Justice who dwells with the gods beneath the earth.\" Sophocles references Olympus twice in Antigone. This contrasts with the other Athenian tragedians, who reference Olympus often.\n[…]\nFrench playwright Jean Anouilh's tragedy Antigone was inspired by both Sophocles' play and the myth itself. Anouilh's play premièred in Paris at the Théâtre de l'Atelier in February 1944, during the Nazi occupation of France.\n[…]\n2013 – George Porter, verse (\"Black Antigone: Sophocles' tragedy meets the heartbeat of Africa\", ISBN 978-1909183230)\n[…]\n2019 – Sophie Deraspe, Antigone\n[…]\nMiller, Peter (2014). \"Helios, vol. 41 no. 2, 2014 © Texas Tech University Press 163 Destabilizing Haemon: Radically Reading Gender and Authority in Sophocles' Antigone\". Helios. 41 (2): 163–185. doi:10.1353/hel.2014.0007. hdl:10680/1273. S2CID 54829520.\n[…]\nSegal, Charles (1999). Tragedy and Civilization: An Interpretation of Sophocles. Norman: University of Oklahoma Press. p. 266. ISBN 978-0806131368.\n[…]\nSteiner, George (1996). Antigones: How the Antigone Legend Has Endured in Western Literature, Art, and Thought. New Haven: Yale University Press. ISBN 0300069154.\n[…]\nThe full text of Antigone at Wikisource  (multiple English translations)\n[…]\nAntigone at Standard Ebooks\n[…]\nAntigone – study guide, themes, quotes, and teacher resources\n[…]\nSophocles' Antigone – Open Access (CC-BY) verse translation by Robin Bond\n[…]\nAntigone public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ant%C3%ADgona_%28S%C3%B3focles%29",
        "situacao": "ok",
        "texto": "Antígona (em grego Ἀντιγόνη) é uma tragédia grega de Sófocles, composta por volta de 442 AC. É cronologicamente a terceira peça de uma sequência de três tratando do ciclo tebano, embora tenha sido a primeira a ser escrita. A personagem do título é Antígona, filha de Édipo, e irmã de Etéocles e Polinice.\n[…]\nA história tem início com a morte dos dois filhos de Édipo, Etéocles e Polinices, que se mataram mutuamente na luta pelo trono de Tebas. Com isso sobe ao poder Creonte, parente próximo da linhagem de Jocasta. Seu primeiro édito dizia respeito ao sepultamento dos irmãos Labdácidas. Ficou estipulado que o corpo de Etéocles receberia todo cerimonial devido aos mortos e aos deuses.\n[…]\nAinda no primeiro episódio, Creonte é informado por um guarda de que o corpo de Polinices havia recebido uma camada de pó e com isso seu édito havia sido desrespeitado, colocando sua autoridade à prova. Ele se enfurece ainda mais quando o coro interroga-se, questionando se não teria sido obra dos próprios deuses.\n[…]\nQuinto episódio: entra Tirésias, adivinho conhecido e respeitado por todos. Ele adverte Creonte do mal que irá se abater em sua vida devido à sua teimosia, e que os deuses estão enfurecidos. Ele mantém-se irredutível, mas após a partida do adivinho é convencido pelo coro a libertar Antígona e sepultar Polinices.\n[…]\nO desfecho trágico apresentado no êxodo é típico sofocliano, com diversas mortes. Mesmo tendo sepultado ele mesmo o sobrinho há muito morto, Creonte terá que viver com o peso da morte de Antígona, que havia se matado quando ele fora buscá-la, com o suicídio de seu filho Hêmon, ao saber da morte da amada, e com o suicídio da própria esposa, Eurídice, ao receber a notícia da morte do filho querido.\n[…]\nSÓFOCLES. Antígona. Trad., pref. e notas de Marta Várzeas. Vila Nova de Famalicão: Húmus, 2011",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Teatro Amazonas",
      "descricao": "Teatro de ópera de Manaus, inaugurado em 1896, com cúpula de telhas coloridas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que produto da floresta enriqueceu Manaus e bancou a construção do Teatro Amazonas, inaugurado em 1896?",
    "resposta": "A borracha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Teatro_Amazonas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_Amazonas",
        "situacao": "ok",
        "texto": "Teatro Amazonas é uma casa de ópera localizada em Manaus, no estado do Amazonas, sendo o principal cartão-postal da cidade. Situado no Largo de São Sebastião, no Centro Histórico, foi inaugurado em 1896 para atender ao desejo da elite amazonense da época, que idealizava a cidade à altura dos grandes centros culturais. É amplamente considerado como um dos mais belos teatros do mundo.\n[…]\nPor ser uma obra singular no Brasil e representar o apogeu de Manaus durante o ciclo da borracha, foi reconhecido como Patrimônio Mundial pela UNESCO em 2026.\n[…]\nA construção de um teatro na cidade de Manaus foi uma exigência daquela região que passou a conhecer um progresso econômico e cultural sem precedentes a partir do interesse mundial na seiva das seringueiras da floresta amazônica. Era um teatro de elite para aquela sociedade enriquecida.\n[…]\nManaus estava no auge do ciclo da borracha e era embalada pela riqueza provida da extração do látex amazônico, altamente valorizado pelas indústrias europeias e americanas. O projeto arquitetônico foi escolhido pelo Gabinete Português de Engenharia e Arquitetura de Lisboa em 1883. No entanto, devido as discussões sobre o terreno para a construção e os custos do trabalho, foi iniciado em 1884 com a pedra fundamental.\n[…]\nA decoração interna esteve ao encargo do decorador pernambucano, Crispim do Amaral, com exceção do corredor a área mais luxuosa do edifício entregue ao artista italiano Domenico de Angelis. Coordenadas pelo arquiteto italiano Celestial Sacardim, as obras começaram em 1884, tomaram impulso nos anos de 1890–1891, foram interrompidas, retomadas em 1893 e, finalmente, o Teatro Amazonas foi inaugurado no dia 31 de dezembro de 1896.\n[…]\nNa minissérie da teledramaturgia brasileira “Amazônia, de Galvez a Chico Mendes” de 2007, o teatro serviu como plano de fundo na primeira parte da minissérie para o cenário de Manaus do século XIX."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Carmen (ópera)",
      "descricao": "Ópera de Georges Bizet, estreada em Paris em 1875, sobre uma cigana sedutora."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na ópera Carmen, a ária em que a cigana canta que o amor é um pássaro rebelde leva o nome de que ritmo cubano?",
    "resposta": "Habanera",
    "fonte": [
      "https://en.wikipedia.org/wiki/Habanera_(aria)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Habanera_(aria)",
        "situacao": "ok",
        "texto": "Habanera (\"music or dance of Havana\") is the popular name for \"L'amour est un oiseau rebelle\" (French pronunciation: [lamuʁ ɛt‿œ̃n‿wazo ʁəbɛl]; \"Love is a rebellious bird\"), an aria from Georges Bizet's 1875 opéra comique Carmen. It is the entrance aria of the title character, a mezzo-soprano role, in scene 5 of the first act.\n[…]\nThe score of the aria was adapted from the habanera \"El Arreglito ou la Promesse de mariage\", by the Spanish musician Sebastián Iradier, first published in 1863, which Bizet believed to be a folk song. When others told him he had used something written by a composer who had died ten years earlier, he added a note about its derivation in the first edition of the vocal score which he himself prepared.\n[…]\nAlthough the French libretto of the complete opéra comique was written by Henri Meilhac and Ludovic Halévy, the words of the habanera originated from Bizet. The Habanera was first performed by Célestine Galli-Marié at the Opéra-Comique on 3 March 1875. Bizet, having removed during rehearsals his first version of Carmen's entrance song, in 34 with a refrain in 68, rewrote the Habanera several times before he (and Galli-Marié) were satisfied with it.\n[…]\nDespite the change in mode there is no actual modulation in the aria, and the implied pedal point D is maintained throughout. The vocal range covers D4 to F♯5 with a tessitura from D4 to D5. Although Bizet borrowed the melody from the song by Iradier, he developed it \"with his inimitable harmonic style and haunting habanera rhythm\".\n[…]\nJosé is the only person on stage who pays no attention to Carmen while she sings the Habanera, and after she finishes she approaches him.\n[…]\nFree sheet music of \"Habanera\" for voice and piano from Cantorion.org\n[…]\n\"L'amour est un oiseau rebelle (Habanera)\", text, translation, opera-arias.com"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "A Flauta Mágica",
      "descricao": "Ópera de Mozart, com libreto de Emanuel Schikaneder, estreada em Viena em 1791."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em A Flauta Mágica, de Mozart, que personagem canta uma ária de vingança famosa por suas notas agudíssimas?",
    "resposta": "A Rainha da Noite",
    "fonte": [
      "https://en.wikipedia.org/wiki/Der_H%C3%B6lle_Rache_kocht_in_meinem_Herzen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Der_H%C3%B6lle_Rache_kocht_in_meinem_Herzen",
        "situacao": "ok",
        "texto": "\"Der Hölle Rache kocht in meinem Herzen\" (\"Hell's vengeance boils in my heart\"), commonly abbreviated \"Der Hölle Rache\", is an aria sung by the Queen of the Night, a coloratura soprano part, in the second act of Mozart's opera The Magic Flute (Die Zauberflöte). It depicts a fit of vengeful rage in which the Queen of the Night places a knife into the hand of her daughter Pamina and exhorts her to a\n[…]\nThe German libretto of The Magic Flute was written by Emanuel Schikaneder, who also led the theatre troupe that premiered the work and created the role of Papageno.\n[…]\nThe aria is renowned as a demanding piece to perform well. The vocal range covers two octaves, from F4 to F6 and requires a very high tessitura, A4 to C6.\n[…]\nThe first singer to perform the aria onstage was Mozart's sister-in-law Josepha Hofer, who at the time was 32. By all accounts, Hofer had an extraordinary upper register and an agile voice and apparently Mozart, being familiar with Hofer's vocal ability, wrote the two blockbuster arias to showcase it.\n[…]\nIn modern times a number of notable sopranos have performed or recorded the aria. June Anderson sings it in the film Amadeus. The aria was also a favourite of the famously-incompetent soprano Florence Foster Jenkins.\n[…]\nA recording of the aria by Edda Moser, accompanied by the Bavarian State Opera under the baton of Wolfgang Sawallisch, is included in a collection of music from Earth on the Voyager 1 and Voyager 2 spacecraft.\n[…]\nDeutsch, Otto Erich (1965). Mozart: A Documentary Biography. Stanford University Press].\n[…]\n\"Der Hölle Rache kocht in meinem Herzen\": Score  in the Neue Mozart-Ausgabe\n[…]\n\"KV 620/14: work details, sound example\", Köchel-Verzeichnis, International Mozarteum Foundation\n[…]\n\"Der Hölle Rache kocht in meinem Herzen\": from Die Zauberflöte, Mozart's autograph manuscript in the Berlin State Library\n[…]\nSeveral recordings at Neue Mozart-Ausgabe"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Der_H%C3%B6lle_Rache_kocht_in_meinem_Herzen",
        "situacao": "ok",
        "texto": "Der Hölle Rache kocht in meinem Herzen (A vingança do inferno ferve no meu coração, em alemão), comumente chamada apenas de  \"Der Hölle Rache\",  também referida como Ária da Rainha da Noite, é uma ária integrante da ópera Die Zauberflöte (A Flauta Mágica) de Wolfgang Amadeus Mozart.\n[…]\nConsiderada uma das mais famosas árias de ópera, faz parte do segundo ato da ópera e representa um acesso de fúria vingativa, em que a Rainha da Noite coloca um punhal na mão da sua filha, Pamina, e a exorta a assassinar Sarastro, rival da Rainha.\n[…]\nA ária é famosa pela dificuldade:  com sua  extensão de  duas oitavas, do fá4 ao fá6, o que  requer um  soprano coloratura com  tessitura extremamente ampla - do lá4 ao  dó6. Ademais, as exigências dramáticas do contexto - uma demanda de  assassinato por vingança -  acrescentam dificuldade à interpretação, tornando o papel acessível somente a vozes extrememente qualificadas.\n[…]\nA primeira a cantar a ária em um  palco foi a cunhada de Mozart,  Josepha Hofer, que na época tinha 33 anos. Segundo consta, Hofer tinha um registro extraordinariamente agudo e uma voz ágil. Aparentemente, Mozart estava familiarizado com a habilidade vocal de  Hofer e escreveu as duas árias da Rainha da Noite para mostrar isso.\n[…]\nUma história dos tempos de Mozart sugere que o compositor era muito impressionado pelo desempenho vocal de sua cunhada. A história remonta a uma carta de 1840 do compositor Ignaz von Seyfried, e descreve um evento da última noite da vida de Mozart - 4 de dezembro de 1791 - cinco semanas depois da muito bem sucedida estréia de A Flauta Mágica. Segundo Seyfried, Mozart sussurrou o seguinte para sua esposa Constanze: “ Calma, calma…  Hofer irá levá-la ao Fá agudo.\n[…]\nDer Hölle Rache kocht in meinem Herzen - Partitura no NMA (Neue Mozart-Ausgabe)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Nabucco",
      "descricao": "Ópera de Giuseppe Verdi, estreada em Milão em 1842, sobre o rei babilônico Nabucodonosor e o exílio dos hebreus."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que coro da ópera Nabucco, de Verdi, cantado pelos escravos hebreus no exílio, virou uma espécie de hino informal da Itália?",
    "resposta": "Va, pensiero",
    "fonte": [
      "https://en.wikipedia.org/wiki/Va,_pensiero"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Va,_pensiero",
        "situacao": "ok",
        "texto": "\"Va, pensiero\" (Italian: [ˈva penˈsjɛːro]), also known as the \"Chorus of the Hebrew Slaves\", is a chorus from the opera Nabucco (1842) by Giuseppe Verdi. It recollects the period of Babylonian captivity after the destruction of Solomon's Temple in Jerusalem in 586 BC.\n[…]\nThe libretto is by Temistocle Solera, inspired by Psalm 137. The opera with its powerful chorus established Verdi as a major composer in 19th-century Italy. The full incipit is \"Va, pensiero, sull'ali dorate\", meaning \"Go, thought, on wings of gold\".\n[…]\nVerdi composed Nabucco at a difficult moment in his life. His wife and children had all just died of various illnesses. Despite a purported vow to abstain from opera-writing, he had contracted with La Scala to write another opera and the director, Bartolomeo Merelli, forced the libretto into his hands. Returning home, Verdi happened to open the libretto at \"Va, pensiero\" and seeing the phrase, he heard the words singing.\n[…]\nOther recent research has discussed several of Verdi's works from the 1840s (including Giovanna d'Arco and Attila) emphasising their ostensible political meaning. Work by Philip Gossett on choruses of the 1840s also suggests that recent revisionist approaches to Verdi and the Risorgimento may have gone too far in their thorough dismissal of the political significance of \"Va, pensiero\".\n[…]\nIn 2011, after conducting \"Va, pensiero\" during a performance of Nabucco at the Teatro dell'Opera in Rome, Riccardo Muti made a short speech protesting cuts in Italy's arts budget, then asked the audience to sing along in support of culture and patriotism.\n[…]\nBudden, Julian. The Operas of Verdi, Vol. 1. London: Cassell Ltd, 1973. pp. 89–112. ISBN 0-304-31058-1\n[…]\nMedia related to \"Va, pensiero\" at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Va%2C_pensiero",
        "situacao": "ok",
        "texto": "\"Va, pensiero\", também conhecido como o \"Coro dos Escravos Hebreus\", é um coro do terceiro ato da ópera Nabucco (1842) de Giuseppe Verdi, com libreto de Temistocle Solera, inspirado no Salmo 137. Conhecido como a obra de arte \"judia\" de Verdi, o coro relembra a história dos exilados judeus na Babilônia, após a perda do Primeiro Templo em Jerusalém. A ópera, com seu poderoso refrão, notabilizou Ver\n[…]\nO incipit completo diz \"Va, pensiero, sull'ali dorate\", que significa \"Vá, pensamento, sobre as asas douradas\".\n[…]\nAlguns estudiosos afirmavam inicialmente que o coro pretendia ser um hino para os patriotas italianos, que buscavam unificar seu país e libertá-lo do controle estrangeiro nos anos anteriores a 1861. Entretanto, estudiosos modernos refutaram a ideia de conexões entre as obras de Verdi nas décadas de 1840 e 1850 e o nacionalismo italiano, com exceção de alguns das opiniões expressas na ópera I Lombardi, de 1843.\n[…]\nOutras pesquisas recentes têm discutido várias obras de Verdi a partir da década de 1840 (incluindo Giovanna d'Arco e Attila), enfatizando seu significado político ostensivo. O trabalho do musicólogo e historiador americano Philip Gossett em coros da década de 1840, também sugere que as abordagens revisionistas recentes sobre Verdi e o Risorgimento podem ter superestimado a relevância política de \"Va, pensiero\".\n[…]\nEm 2009, o senador Umberto Bossi propôs a substituição do hino nacional da Itália por \"Va, pensiero\".\n[…]\nEm 2011, após reger \"Va, pensiero\" em uma seção de Nabucco, no Teatro da Ópera de Roma, o maestro Riccardo Muti fez um breve discurso, protestando contra os cortes no orçamento italiano para as artes e convidando a platéia a cantar o coro em prol da cultura e do patriotismo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "O Anel do Nibelungo",
      "descricao": "Ciclo de dramas musicais de Richard Wagner que vai de O Ouro do Reno a O Crepúsculo dos Deuses."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas óperas formam O Anel do Nibelungo, ciclo de Wagner que começa com O Ouro do Reno?",
    "resposta": "Quatro",
    "distratores": [
      "Três",
      "Cinco",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Der_Ring_des_Nibelungen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Der_Ring_des_Nibelungen",
        "situacao": "ok",
        "texto": "Der Ring des Nibelungen (The Ring of the Nibelung), WWV 86, is a cycle of four German-language epic music dramas composed by Richard Wagner. The works are based loosely on characters from Germanic heroic legend, namely Norse legendary sagas and the Nibelungenlied. The composer termed the cycle a \"Bühnenfestspiel\" (stage festival play), structured in three days preceded by a Vorabend (\"preliminary \n[…]\nFinally Wagner announces:\n[…]\nIn summer 1848 Wagner wrote The Nibelung Myth as Sketch for a Drama, combining the medieval sources previously mentioned into a single narrative, very similar to the plot of the eventual Ring cycle, but nevertheless with substantial differences. Later that year he began writing a libretto entitled Siegfrieds Tod (\"Siegfried's Death\").\n[…]\nProduced by the Ridiculous Theatrical Company, Charles Ludlam's 1977 play Der Ring Gott Farblonjet was a spoof of Wagner's operas. The show received a well-reviewed 1990 revival in New York at the Lucille Lortel Theatre.\n[…]\nThe German two-part television movie Dark Kingdom: The Dragon King (2004, also known as Ring of the Nibelungs, Die Nibelungen, Curse of the Ring and Sword of Xanten), is based in some of the same material Richard Wagner used for his music dramas Siegfried and Götterdämmerung.\n[…]\nMillington, Barry (2008). \"Der Ring des Nibelungen: conception and interpretation\". In Grey, Thomas S. (ed.). The Cambridge Companion to Wagner. Cambridge Companions to Music. Cambridge University Press. pp. 74–84. ISBN 978-0-521-64439-6.\n[…]\nBesack, Michael, The Esoteric Wagner: An Introduction to Der Ring des Nibelungen, Berkeley: Regent Press, 2004 ISBN 978-1-58790-074-7.\n[…]\nSabor, Rudolph, (1997) Richard Wagner: Der Ring des Nibelungen: a companion volume. Phaidon Press, ISBN 0-7148-3650-8.\n[…]\nScruton, Sir Roger, (2016) The Ring of Truth: The Wisdom of Wagner's Ring of the Nibelung. Penguin UK. ISBN 1-4683-1549-8."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Der_Ring_des_Nibelungen",
        "situacao": "ok",
        "texto": "Der Ring des Nibelungen (O Anel do Nibelungo) é um ciclo de quatro óperas épicas do compositor alemão Richard Wagner. Elas são adaptações dos personagens mitológicos das sagas nórdicas e do Nibelungenlied.\n[…]\nWagner escreveu o libreto e a música por cerca de vinte e seis anos, de 1848 a 1874. Entretanto, ele não se dedicou exclusivamente a isso durante esse período. Os dramas musicais que compõem o ciclo do anel são, em ordem cronológica do enredo: Das Rheingold (O Ouro do Reno), Die Walküre (A Valquíria), Siegfried e Götterdämmerung (O Crepúsculo dos Deuses). Apesar delas serem apresentadas como obras individuais, a intenção de Wagner era apresentá-las em série.\n[…]\nRichard Wagner compôs para a tetralogia O Anel de Nibelungo uma orquestra excepcionalmente grande, mas era muito específico sobre quantos instrumentos deveria fazer cada papel.\n[…]\nDonzelas do Reno\n[…]\nNibelungos\n[…]\nA obra é um enorme comprometimento para qualquer companhia de ópera, a apresentação das quatro óperas interligadas requer grande esforço tanto do ponto artístico quanto do financeiro. Na maioria das casas de ópera, a produção ocorre por diversos anos, de forma que uma ou duas óperas são adicionadas ao repertório a cada ano; Bayreuth é uma exceção nesse aspecto. As primeiras produções tentavam manter a visão original de Wagner.\n[…]\nA comediante Anna Russell apresentava seu texto O Anel do Nibelungo (Uma Análise), que discuta diversos aspectos dos leitmotivs em tom humorístico. Ele chamava a atenção para elementos sutis que muitos não notavam na ópera. Já Anthony Burgess escreveu uma versão do ciclo do Anel sob forma de romance, The Worm and the Ring (1961), transpondo a ação para uma escola de Oxfordshire.\n[…]\nRichard Wagner",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Grandes Dionísias",
      "descricao": "Festival religioso de Atenas em honra a Dionísio, com concursos de tragédia e comédia."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Nas Grandes Dionísias de Atenas, cada autor trágico competia com quantas tragédias, seguidas de um drama satírico?",
    "resposta": "Três",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dionysia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dionysia",
        "situacao": "ok",
        "texto": "The Dionysia (; Greek: Διονύσια) was a large festival in ancient Athens in honor of the god Dionysus, the central events of which were processions and sacrifices in honor of Dionysus, the theatrical performances of dramatic tragedies and, from 487 BC, comedies. It was the second-most important festival after the Panathenaia. The Dionysia actually consisted of two related festivals, the Rural Diony\n[…]\nDuring the fifth century BC, five days of the festival were set aside for performance, though scholars disagree exactly what was presented each day. At least three full days were devoted to tragic plays, and each of three playwrights presented his set of three tragedies and one satyr play on the successive days. Most of the extant Greek tragedies, including those of Aeschylus, Euripides, and Sophocles, were performed at the Theatre of Dionysus.\n[…]\nImpressive tragic output continued without pause through the first three quarters of the fourth century BC, and some scholars consider this time a continuation of the classical period. Though much of the work of this period is either lost or forgotten, it is considered to owe a great debt to the playwright Euripides. His plays, along with other fifth-century BC writers, were often re-staged during this period. At least one revival was presented each year at City Dionysia.\n[…]\nSimon Goldhill, \"The Great Dionysia and Civic Ideology\", in Nothing to Do with Dionysos? Athenian Drama in Its Social Context, eds. John J. Winkler and Froma I. Zeitlin. Princeton: Princeton University Press, 1990. ISBN 0-691-06814-3\n[…]\nBelknap, George N. \"The Date of Dicaeopolis' Rural Dionysia.\" The Journal of Hellenic Studies, vol. 54, 1934, pp. 77–78. JSTOR, https://doi.org/10.2307/626492.\n[…]\nBEDNAREK, BARTŁOMIEJ. \"The (Alleged) Sacrifice and Procession at Rural Dionysia in Aristophanes' 'Acharnians.'\" Hermes, vol. 147, no. 2, 2019, pp. 143–52. JSTOR"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Festas_dionis%C3%ADacas",
        "situacao": "ok",
        "texto": "As Festas Dionisíacas eram celebrações de caráter cívico-religioso, ou seja, conciliavam aspetos da política e da identidade de Atenas, servindo como fator de agregação da sociedade ateniense. Dentro de algumas dessas festas eram realizados concursos teatrais que, envolvendo competitividade e sociabilização, serviam para suavizar conflitos internos dentro da pólis.\n[…]\nDas festas dionisíacas surgem três gêneros literários: a comédia, a tragédia e o drama satírico. Ambos os gêneros comédia e tragédia tinham espaços nos festivais das Leneias e Dionisíacas Urbanas, entretanto a visibilidade e o crédito eram diferentes. As comédias tinham maior espaço nas Leneias, por volta de 442 a.C. foram oficialmente admitidas neste festival, já as tragédias iniciaram-se nas Grandes Dionisíacas, durante a tirania de Pisístrato, mais ou menos por volta de 533 a.C..\n[…]\nO drama satírico deve ter tido sua origem no fim do século VI a.C., numa peça de Prátinas em que este reúne os Sátiros de Dioniso para formar o coro, criando um novo gênero. O drama satírico completava a tetralogia, o conjunto de quatro peças, que cada poeta trágico deveria apresentar nos concursos das Dionisíacas Urbanas. Cada concorrente apresentava uma trilogia (três tragédias) e um drama satírico. Em sua origem, as quatro peças costumavam estar relacionadas a um mesmo assunto.\n[…]\nAs Dionísias Urbanas duravam seis dias: no primeiro ocorria o próagon e a pompê, no segundo e no terceiro dia o concurso de ditirambo, na passagem do terceiro dia para o quarto ocorria o komos, no quarto dia havia o concurso de comédias, no quinto e no sexto dia acontecia o concurso de tragédias onde cada competidor apresentava sua trilogia e um drama satírico.\n[…]\nMALHADAS, Daisi. As Dionisíacas urbanas e as representações teatrais em Atenas. Ensaios de Literatura e Filologia, v. 4, 1983. ISBN 9788512370804",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Hamlet",
      "descricao": "Tragédia de William Shakespeare sobre um príncipe que busca vingar a morte do pai."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual é a peça mais longa de William Shakespeare?",
    "resposta": "Hamlet",
    "distratores": [
      "Ricardo Terceiro",
      "Rei Lear",
      "Otelo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hamlet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hamlet",
        "situacao": "ok",
        "texto": "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (), is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play. Set in Denmark, the play depicts Prince Hamlet and his attempts to exact revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother.\n[…]\nFirst Folio (F1): In 1623 Edward Blount and William and Isaac Jaggard published The Tragedie of Hamlet, Prince of Denmarke in the First Folio, the first edition of Shakespeare's Complete Works.\n[…]\nShakespeare almost certainly wrote the role of Hamlet for Richard Burbage. He was the chief tragedian of the Lord Chamberlain's Men, with a capacious memory for lines and a wide emotional range. Judging by the number of reprints, Hamlet appears to have been Shakespeare's fourth most popular play during his lifetime—only Henry IV Part 1, Richard III and Pericles eclipsed it.\n[…]\nThe play was revived early in the Restoration. When the existing stock of pre-civil war plays was divided between the two newly created patent theatre companies, Hamlet was the only Shakespearean favourite that Sir William Davenant's Duke's Company secured. It became the first of Shakespeare's plays to be presented with movable flats painted with generic scenery behind the proscenium arch of Lincoln's Inn Fields Theatre.\n[…]\nFrom around 1810 to 1840, the best-known Shakespearean performances in the United States were tours by leading London actors—including George Frederick Cooke, Junius Brutus Booth, Edmund Kean, William Charles Macready, and Charles Kemble. Of these, Booth remained to make his career in the States, fathering the nation's most notorious actor, John Wilkes Booth (who later assassinated Abraham Lincoln), and its most famous Hamlet, Edwin Booth.\n[…]\nHamlet, Folger Shakespeare Library\n[…]\nHamlet at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hamlet",
        "situacao": "ok",
        "texto": "A tragédia de Hamlet, príncipe da Dinamarca (The Tragedie of Hamlet, Prince of Denmarke na primeira edição em inglês), geralmente abreviada apenas como Hamlet, é uma tragédia de William Shakespeare, escrita entre 1599 e 1601. A peça, passada na Dinamarca, reconta a história de como o Príncipe Hamlet tenta vingar a morte de seu pai, Hamlet, o rei, executado por Cláudio, seu irmão, que o envenenou e\n[…]\nHamlet é a peça mais longa de Shakespeare, e provavelmente a que mais trabalho lhe deu, mas encontrou nos tempos um espaço que a consagrou como uma das mais poderosas e influentes tragédias em língua inglesa: durante o tempo de vida de Shakespeare, a peça estava entre uma das mais populares da Inglaterra e ainda figura entre os textos mais realizados do mundo, no topo, inclusive, da lista da Royal Shakespeare Company desde 1879.\n[…]\nEm um período onde muitas peças eram apresentadas com duas horas de duração ou menos, o texto integral de Hamlet possui 4.042 linhas, totalizando 29.551 palavras engendradas em cinco atos (é a peça mais longa de Shakespeare) — ou seja, leva-se mais de quatro horas para encená-la fielmente. Hamlet também contém um dos dispositivos mais favoritos de Shakespeare: o teatro no teatro, recurso também usado em Trabalhos de Amores Perdidos e em Sonhos de Uma Noite de Verão.\n[…]\nComo Richard Burbage era o ator das tragédias da companhia teatral Lord Chamberlain's Men, com uma capacidade de memória muito grande e uma veia trágica, acredita-se que Shakespeare escreveu o papel de Hamlet para ele. A julgar pelo número de reimpressões, Hamlet aparece como a quarta peça mais popular de Shakespeare durante seu tempo de vida – somente Henrique VI Parte 1, Ricardo III e Péricles o passaram.\n[…]\nA Tragédia de Hamlet, Príncipe da Dinamarca/ Shakespeare; trad. e pref. José Blanc de Portugal, [Lisboa : Editorial Presença, 1967] ( Porto : -- Tip. Nunes)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "O Bem-Amado",
      "descricao": "Obra de Dias Gomes sobre o prefeito Odorico Paraguaçu, na cidade fictícia de Sucupira, levada ao teatro e à televisão."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em O Bem-Amado, de Dias Gomes, o prefeito Odorico Paraguaçu vive obcecado por inaugurar que obra na cidade de Sucupira?",
    "resposta": "O cemitério",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Bem-Amado",
      "https://pt.wikipedia.org/wiki/Odorico_Paraguaçu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Bem-Amado",
        "situacao": "desambiguacao",
        "texto": "O Bem Amado ou O Bem-Amado pode referir-se a:\n\nCome Blow Your Horn, filme (1963) com Frank Sinatra e Lee J. Cobb, traduzido como \"O Bem-Amado\" no Brasil\nO Bem-Amado (telenovela) - telenovela brasileira de 1973, escrita por Dias Gomes e dirigida por Régis Cardoso, com Paulo Gracindo no papel-título\nO Bem-Amado (série) - série de televisão de 1980, escrita por Dias Gomes e dirigida por Régis Cardoso"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Odorico_Paraguaçu",
        "situacao": "ok",
        "texto": "Odorico Paraguaçu (Odorico Cienfuegos na adaptação mexicana pela Televisa) é uma personagem ficcional criada pelo dramaturgo brasileiro Dias Gomes e principal da sua peça teatral Odorico, o Bem Amado (com subtítulo \"Uma Obra do Governo\"), escrita em 1961 e que, representando de modo caricatural e estereotipado a figura do político da época - malicioso, sem escrúpulos e com traços do coronelismo, f\n[…]\nAnalisando a vida e a obra de Dias Gomes, o crítico José Dias escreveu: \"O Bem Amado representa um momento importante pelo fato de ter sofrido inúmeras adaptações para linguagens diferentes, da cena teatral ao seriado da televisão, num longo período de mais de trinta anos, e por ter consagrado Odorico Paraguaçu como a mais perfeita caricatura de tudo o que Dias Gomes rejeitava\".\n[…]\n(...) O protagonista que ele [Dias Gomes] inventou para O Bem-amado, Odorico Paraguaçu (interpretado pelo ator Paulo Gracindo), comandava com firmeza, sem nenhum constrangimento de ordem moral, a prefeitura da fictícia Sucupira. Odorico era um canalha corrupto e truculento que, sob o gênio de Dias Gomes, ganhava ares despudoradamente cômicos\".\n[…]\nDono de uma fazenda produtora de azeite de dendê, era neto de Firmino Paraguaçu e filho do coronel Eleutério Paraguaçu. Candidato a prefeito da cidade fictícia de Sucupira, elegeu-se com a promessa de construir o cemitério da cidade. Apesar de corrupto demagogo, era adorado pelos eleitores e exercia fascínio sobre as mulheres. Era pai de Telma (Sandra Bréa) e Cecéu (João Paulo Adour).\n[…]\nO problema de Odorico é que, após a inauguração do cemitério, ninguém mais morreu. Desesperado com a situação, tomou iniciativas macabras para concretizar sua promessa, provocando situações cômicas. No final, Odorico Paraguaçu foi assassinado por Zeca Diabo (Lima Duarte/José Wilker) e inaugurou, finalmente, o cemitério, sendo que, de vilão, passou a mártir.\n[…]\nO Bem-Amado (telenovela)"
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
