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
      "nome": "Carmina Burana (Orff)",
      "descricao": "Cantata cênica do compositor alemão Carl Orff, estreada em 1937, que abre e fecha com o coro O Fortuna."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O coro O Fortuna, usado em incontáveis filmes e comerciais, abre uma cantata estreada em 1937. Que compositor alemão a escreveu?",
    "resposta": "Carl Orff",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carmina_Burana_(Orff)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carmina_Burana_(Orff)",
        "situacao": "ok",
        "texto": "Carmina Burana is a cantata composed in 1935 and 1936 by Carl Orff, based on 24 poems from the medieval collection Carmina Burana. Its full Latin title is Carmina Burana: Cantiones profanae cantoribus et choris cantandae comitantibus instrumentis atque imaginibus magicis (\"Songs of Beuern: Secular songs for singers and choruses to be sung together with instruments and magical images\"). It was firs\n[…]\nKater, Michael H. (2000). \"Carl Orff: Man of Legend\". Composers of the Nazi Era: Eight Portraits. New York: Oxford University Press. ISBN 978-0-19-509924-9.\n[…]\nVarious authors (eds.): Carl Orff und sein Werk. Dokumentation, 8 vols., Schneider, Tutzing 1975–1983, ISBN 3-7952-0154-3, ISBN 3-7952-0162-4, ISBN 3-7952-0202-7, ISBN 3-7952-0257-4, ISBN 3-7952-0294-9, ISBN 3-7952-0308-2, ISBN 3-7952-0308-2, ISBN 3-7952-0373-2\n[…]\nBabcock, Jonathan. \"Carl Orff's Carmina Burana: A Fresh Approach to the Work's Performance Practice\". Choral Journal 45, no. 11 (May 2006): 26–40.\n[…]\nFassone, Alberto: \"Carl Orff\", in: The New Grove Dictionary of Music and Musicians, London: Macmillan 2001.\n[…]\nLo, Kii-Ming, \"Sehen, Hören und Begreifen: Jean-Pierre Ponnelles Verfilmung der Carmina Burana von Carl Orff\", in: Thomas Rösch (ed.), Text, Musik, Szene – Das Musiktheater von Carl Orff, Mainz etc. (Schott) 2015, pp. 147–173.\n[…]\nSteinberg, Michael. \"Carl Orff: Carmina Burana\". Choral Masterworks: A Listener's Guide. Oxford: Oxford University Press, 2005, 230–242.\n[…]\n\"The Lasting Appeal of Orff's Carmina Burana\", sound files and transcription at NPR\n[…]\n\"Carl Orff: Carmina Burana\" (complete performance, 1:11 hours), University Chorus and Alumni Chorus, UC Davis Symphony Orchestra and the Pacific Boychoir at the Mondavi Center (4 June 2006)\n[…]\nLeitner: Carmina Burana at Discogs\n[…]\n[1], Carl Orff's Carmina Burana with WDR Sinfonieorchester Köln in conducted by Cristian Măcelaru, in 75th anniversary concert in WDR Sinfonieorchester Köln,"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carmina_Burana_%28Orff%29",
        "situacao": "ok",
        "texto": "Carmina Burana é uma cantata cénica composta por Carl Orff em 1935-1936 e estreada em 8 de junho de 1937 na Alte Oper de Frankfurt, sob direção de  Bertil Wetzelsberger. O título completo, em latim, é \"Carmina Burana: Cantiones profanæ, cantoribus et choris cantandæ, comitantibus instrumentis atque imaginibus magicis\", que se pode traduzir como «Poemas cantados de Beuern: Cantos profanos, para can\n[…]\nCoro menor\n[…]\nCoro infantil\n[…]\nMarkus Bandur: Carl Orff: Carmina Burana. In: Albrecht Riethmüller (ed.): Geschichte der Musik im 20. Jahrhundert: 1925–1945 (= Handbuch der Musik im 20. Jahrhundert. vol. 2), Laaber, Laaber 2006, ISBN 3-89007-422-7 (texto completo; PDF; 1,9 MB).\n[…]\nMiguel Carvalho Abrantes (2018). A Carmina Burana de Carl Orff: Tradução do Latim para Português. [S.l.]: KDP\n[…]\nFrohmut Dangel-Hofmann (ed.): Carl Orff – Michel Hofmann: Briefe zur Entstehung der Carmina Burana. Schneider, Tutzing 1990, ISBN 3-7952-0639-1.\n[…]\nSusanne Gläß: Carl Orff – Carmina Burana (= Bärenreiter Werkeinführungen). Bärenreiter, Kassel 2008, ISBN 978-3-7618-1732-2.\n[…]\nKii-Ming Lo: Sehen, Hören und Begreifen: Jean-Pierre Ponnelles Verfilmung der „Carmina Burana“ von Carl Orff. In: Thomas Rösch (ed.): Text, Musik, Szene – Das Musiktheater von Carl Orff. Schott, Mainz 2015, pp. 147–173. ISBN 978-3-7957-0672-2, S. 147–173.\n[…]\nThomas Rösch (ed.): Text, Musik, Szene – Das Musiktheater von Carl Orff. Symposium Orff-Zentrum München 2007. Schott, Mainz 2015, ISBN 978-3-7957-0672-2.\n[…]\nWerner Thomas: Das Rad der Fortuna – Ausgewählte Aufsätze zu Werk und Wirkung Carl Orffs. Schott, Mainz 1990, ISBN 3-7957-0209-7.\n[…]\nFranz Willnauer (ed.): Carmina Burana von Carl Orff. Entstehung, Wirkung, Text. Schott, Mainz 2007, ISBN 978-3-254-08220-6.\n[…]\nUFSC. Departamento de Automação e Sistemas. As origens de Carmina Burana. (Artigo, seguido do libretto original e traduzido da cantata de Orff). Sem data. Disponível em: archive.org.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Carmina Burana (manuscrito)",
      "descricao": "Manuscrito medieval de poemas e canções em latim e alemão, encontrado na abadia de Benediktbeuern, na Baviera."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Os poemas de Carmina Burana, musicados por Orff, vêm de um manuscrito encontrado num mosteiro da Baviera. De que século é esse manuscrito?",
    "resposta": "Século treze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carmina_Burana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carmina_Burana",
        "situacao": "ok",
        "texto": "Carmina Burana (, Latin for \"Songs from Benediktbeuern\" [Buria in Latin]) is a manuscript of 254 poems and dramatic texts mostly from the 11th or 12th century, although some are from the 13th century. The pieces are mostly bawdy, irreverent, and satirical. They were written principally in Medieval Latin, a few in Middle High German and old Arpitan. Some are macaronic, a mixture of Latin and German\n[…]\nCarmina Burana (CB) is a manuscript written in 1230 by two different scribes in an early gothic minuscule on 119 sheets of parchment. A number of free pages, cut of a slightly different size, were attached at the end of the text in the 14th century. At some point in the Late Middle Ages, the handwritten pages were bound into a small folder called the Codex Buranus. However, in the process of binding, the text was placed partially out of order, and some pages were most likely lost as well.\n[…]\nAbout one-quarter of the poems in the Carmina Burana are accompanied in the manuscript by music using unheighted, staffless neumes, an archaic system of musical notation that by the time of the manuscript had largely been superseded by staffed neumes.\n[…]\n2005: German band Corvus Corax recorded Cantus Buranus, a full-length opera, set to the original Carmina Burana manuscript in 2005, and released Cantus Buranus II in 2008\n[…]\n1975 - Carmina Burana (Orff) - London Symphony Orchestra and Chorus, dir. Andre Previn; Sheila Armstrong, soprano; Gerald English, tenor; Thomas Allen, baritone; St. Clement Danes Grammar School Boy’s Choir (EMI Classics)\n[…]\n1992 – Satires, Desires and Excesses; Songs from Carmina Burana – New Orleans Musica da Camera, dir. Milton G. Scheuermann (Centaur)\n[…]\n2008 – Carmina Burana; Medieval Songs from the Codex Buranus – Clemencic Consort, dir. René Clemencic (Oehms)\n[…]\nLatin Wikisource has original text related to this article: Carmina Burana\n[…]\nQuotations related to Carmina Burana at Wikiquote"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carmina_Burana",
        "situacao": "ok",
        "texto": "Carmina Burana (do latim: \"Canções de Beuern\", sendo \"Beuern\" uma redução de Benediktbeuern, município situado na Baviera) é um manuscrito de 254 poemas e textos dramáticos, datados, em sua maioria, dos séculos XI e XII, sendo alguns do século XIII. As peças são, em geral, picantes, irreverentes e satíricas e escritas em latim medieval, embora algumas  tenham sido escritas em médio-alto-alemão, co\n[…]\nVinte e quatro poemas dos Carmina Burana foram musicalizados por Carl Orff em 1936; a composição de Orff rapidamente se tornou popular, o movimento de abertura e de fecho \"O Fortuna\", tem sido utilizada em filmes e eventos se tornando a peça clássica mais ouvida desde que foi gravada. Entre dezenas de gravações, uma das mais recentes é da London Symphony Orchestra, dirigida por Richard Hickox, com solos de Laura Claycomb e Barry Banks, e lançada pela Chandos em outubro de 2008.\n[…]\nO manuscrito foi encontrado em 1803 no mosteiro de Benediktbeuern e atualmente está guardado na Biblioteca Estadual da Baviera, em Munique.\n[…]\nAcredita-se que todos os poemas fossem destinados ao canto mas os copistas responsáveis pelo manuscrito, nele não indicaram a música de todos os carmes, de modo que só foi possível reconstruir o andamento melódico de 47 deles. O códex é subdividido em seis partes:\n[…]\nA obra musical mais conhecida que tem por base os textos dos Carmina Burana é incontestavelmente a que foi composta pelo compositor alemão Carl Orff. Orff musicou alguns dos Carmina Burana, compondo uma cantata com o mesmo título, estreada em 8 de junho de 1937, em Frankfurt. Com o subtítulo \"Cantiones profanae cantoribus et choris cantandae\", a obra, por suas características, pode ser definida também como uma \"cantata cênica\".\n[…]\nUFSC. Departamento de Automação e Sistemas. As origens de Carmina Burana. (Artigo, seguido do libretto original e traduzido da cantata de Orff). Sem data. Disponível em: archive.org.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Danúbio Azul",
      "descricao": "Valsa de Johann Strauss Filho, de 1867, cujo título original é An der schönen blauen Donau."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A valsa Danúbio Azul, de 1867, foi composta por qual austríaco, apelidado de Rei da Valsa?",
    "resposta": "Johann Strauss Filho",
    "distratores": [
      "Johann Strauss Pai",
      "Richard Strauss",
      "Franz Lehár"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Blue_Danube"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Blue_Danube",
        "situacao": "ok",
        "texto": "\"The Blue Danube\" (German: An der schönen blauen Donau, lit. 'By the Beautiful Blue Danube', Op. 314) is a waltz by the Austrian composer Johann Strauss II, composed in 1866. Originally performed on 15 February 1867 at a concert of the Wiener Männergesang-Verein (Vienna Men's Choral Association), it has been one of the most consistently popular pieces of music in the classical repertoire.\n[…]\nAfter the original music was written, the words were added by the Choral Association's poet, Joseph Weyl. Strauss later added more music, and Weyl needed to change some of the words. Strauss adapted it into a purely orchestral version for the 1867 Paris World's Fair, and it became a great success in this form. The instrumental version is by far the most commonly performed today. An alternate text was written by Franz von Gernerth, \"Donau so blau\" (Danube so blue).\n[…]\n\"The Blue Danube\" premiered in the United States in its instrumental version on 1 July 1867 in New York, and in the UK in its choral version on 21 September 1867 in London at the promenade concerts at Covent Garden.\n[…]\nWhen Strauss's stepdaughter, Alice von Meyszner-Strauss, asked the composer Johannes Brahms to sign her autograph-fan, he wrote down the first bars of \"The Blue Danube\", but added \"Leider nicht von Johannes Brahms\" (\"Unfortunately not by Johannes Brahms\").\n[…]\nThe \"Beautiful Blue Danube\" was first written as a song for a carnival choir (for bass and tenor), with rather satirical lyrics (Austria having just lost a war with Prussia). The original title was also referring to a poem about the Danube in the poet Karl Isidor Beck's hometown, Baja in Hungary, and not in Vienna. Later Franz von Gernerth wrote new, more \"official-sounding\" lyrics:\n[…]\nThe Blue Danube: Scores at the International Music Score Library Project\n[…]\nSheet music for \"On the Beautiful Blue Danube\", John Church Company, 1868; via Ball State University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dan%C3%BAbio_Azul",
        "situacao": "ok",
        "texto": "Johann Strauss II (Viena, 25 de outubro de 1825 — Viena, 3 de junho de 1899), também conhecido como Johann Strauss, Jr., o mais novo, o Filho (alemão: Sohn), Johann Baptist Strauss, foi um compositor austríaco de música leve, particularmente música de dança e operetas, bem como violinista. Compôs mais de 500 valsas, polcas, quadrilhas, e outros tipos de música de dança, além de várias operetas e u\n[…]\nEm sua vida, ele era conhecido como \"O Rei da Valsa\" e foi o grande responsável pela popularidade da valsa em Viena durante o século XIX. Algumas das obras mais famosas de Johann Strauss incluem \"O Danúbio Azul\", \"Kaiser-Walzer\" (Valsa do Imperador), \"Contos dos Bosques de Viena\", \"Frühlingsstimmen\" e o \"Tritsch-Tratsch-Polka\". Entre suas operetas, Die Fledermaus e Der Zigeunerbaron são as mais conhecidas.\n[…]\nStrauss era filho de Johann Strauss I e sua primeira esposa Maria Anna Streim. Dois irmãos mais novos, Josef e Eduard Strauss, também se tornaram compositores de música leve, embora nunca tenham sido tão conhecidos quanto o irmão.\n[…]\nViena foi sacudida pelas revoluções de 1848 no Império Austríaco e a intensa rivalidade entre pai e filho se tornou muito mais aparente. Johann Jr. decidiu ficar do lado dos revolucionários. Foi uma decisão profissionalmente desvantajosa, com a realeza austríaca negando-lhe duas vezes o muito cobiçado posto de Hofballmusikdirektor, que foi primeiramente e especialmente criado para Johann I, em reconhecimento por suas contribuições musicais.\n[…]\nPaulino, Higino da Costa. Johann Strauss. Biografia na Gazeta Musical, 2º ano, nº 5, Lisboa,1885.\n[…]\nJacob, H. E. Johann Strauss, Father and Son: A Century of Light Music. The Greystone Press, 1940.\n[…]\nPai Johann Strauss I\n[…]\nRichard Strauss (não pertence à família de Johann)  Compositor alemão\n[…]\nObras de Johann Strauss Jr. no International Music Score Library Project\n[…]\nJohann Strauss en Viena\n[…]\nJohann Strauss Gallery",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Para Elisa",
      "descricao": "Peça para piano de Ludwig van Beethoven, a Bagatela em lá menor, publicada postumamente em 1867."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A peça para piano Para Elisa só foi publicada em 1867, quarenta anos depois da morte de seu autor. Quem a compôs?",
    "resposta": "Ludwig van Beethoven",
    "fonte": [
      "https://en.wikipedia.org/wiki/F%C3%BCr_Elise"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/F%C3%BCr_Elise",
        "situacao": "ok",
        "texto": "Bagatelle No. 25 in A minor (WoO 59, Bia 515) for solo piano, commonly known as \"Für Elise\" (German: [fyːɐ̯ ʔeˈliːzə], transl. 'For Elise'), is one of Ludwig van Beethoven's most popular compositions. It was not published during his lifetime but discovered by Ludwig Nohl 40 years after his death, and may be termed either a Bagatelle or an Albumblatt. The identity of \"Elise\" is unknown; researchers\n[…]\nThe score was published in 1867, 40 years after Beethoven's death. The discoverer of the piece, Ludwig Nohl, affirmed that the original autograph manuscript, now lost, had the title: \"Für Elise am 27 April [1810] zur Erinnerung von L. v. Bthvn\" (\"For Elise on April 27 in memory by L. v. Bthvn\"). The music was published as part of Nohl's Neue Briefe Beethovens (New Letters by Beethoven) on pages 28 to 33, printed in Stuttgart by Johann Friedrich Cotta.\n[…]\nIn 2015, Kopitz published more material about Beethoven's relationship to Röckel and \"Für Elise\". It shows that she was also a close friend of Anna Milder-Hauptmann and lived with her and her brother Joseph August in the Theater an der Wien. In an 1830 letter to Röckel, Milder-Hauptmann called her \"Elise\".\n[…]\nIn 2014, the Canadian musicologist Rita Steblin suggested that Elise Barensfeld might be the dedicatee. Born in Regensburg and treated for a while as a child prodigy, she first took concert tours with Beethoven's friend Johann Nepomuk Mälzel, also from Regensburg, and then lived with him for some time in Vienna, where she received singing lessons from Antonio Salieri.\n[…]\nSteblin argues that Beethoven dedicated this work to the 13-year-old Barensfeld as a favor to Therese Malfatti, who lived opposite Mälzel's and Barensfeld's residence and might have given her piano lessons. Steblin says her hypothesis is uncertain.\n[…]\nFree sheet music of \"Für Elise\" from Cantorion.org\n[…]\nThe Music Professor: \"You've Never Heard This Version of Für Elise\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/F%C3%BCr_Elise",
        "situacao": "ok",
        "texto": "A bagatela para piano solo Para Elisa (do alemão Für Elise, Bagatelle N.º 25 em Lá menor, WoO 59 Bia 515), em lá menor, do compositor Ludwig van Beethoven, é entre as obras deste, uma das mais conhecidas mundialmente, a par de sua melodia Quinta Sinfonia, em dó menor (1807-1808, op. 67), e também da sua Nona Sinfonia, em ré menor (1823-1824, op. 125).\n[…]\nInclusive, à este médico, Beethoven compôs, em Junho de 1814, uma pequena cantata para piano e coro (de sopranos, contraltos, tenores e baixos) \"Un lieto brindisi\" (WoO 103), também chamada por \"Cantata Campestre\".\n[…]\nA partitura original (autografada) desta bagatela para piano foi presenteada, pelo compositor, a Therese em 24 de Abril de 1810 e esteve durante algum tempo em seu poder. Não se sabe ao certo se a data nesta partitura, teria sido Beethoven quem a escreveu ou se foram outras pessoas.\n[…]\nOu por erro do editor (de facto, a caligrafia caótica de Beethoven foi a causa principal de muitos erros nas primeiras edições das suas obras) ou para não se saber a quem esta peça foi dirigida e oferecida, o certo é que a cópia da partitura autógrafa ou, sua publicação póstuma (realizada pela primeira vez em 1867) tinha o nome ou, então, o pseudónimo alemão de \"Für Elise\" que, em português, é \"Para Elisa\". É evidente que não se trata de Elisa , mas, sim, de Therese, indicando um erro do editor.\n[…]\nEm 2010 o musicólogo alemão Klaus Martin Kopitz publicou um livro com a hipótese de Beethoven ter composto a peça para a sua amiga cantora Elisabeth Röckel, chamada «Elise» em Viena, e que casou em 1813 com o compositor Johann Nepomuk Hummel.\n[…]\nLudwig Nohl, Neue Briefe Beethovens, Stuttgart 1867\n[…]\nKlaus Martin Kopitz, Beethoven’s ‘Elise’ Elisabeth Röckel: a forgotten love story and a famous piano piece, in: The Musical Times, vol. 161, no. 1953 (Winter 2020), p. 9–26 (PDF)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Para Elisa",
      "descricao": "Peça para piano de Ludwig van Beethoven, a Bagatela em lá menor, publicada postumamente em 1867."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No Brasil, a melodia de Para Elisa, de Beethoven, ficou associada à venda de qual produto, anunciado por caminhões nas ruas?",
    "resposta": "Gás de cozinha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/F%C3%BCr_Elise"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/F%C3%BCr_Elise",
        "situacao": "ok",
        "texto": "A bagatela para piano solo Para Elisa (do alemão Für Elise, Bagatelle N.º 25 em Lá menor, WoO 59 Bia 515), em lá menor, do compositor Ludwig van Beethoven, é entre as obras deste, uma das mais conhecidas mundialmente, a par de sua melodia Quinta Sinfonia, em dó menor (1807-1808, op. 67), e também da sua Nona Sinfonia, em ré menor (1823-1824, op. 125).\n[…]\nOu por erro do editor (de facto, a caligrafia caótica de Beethoven foi a causa principal de muitos erros nas primeiras edições das suas obras) ou para não se saber a quem esta peça foi dirigida e oferecida, o certo é que a cópia da partitura autógrafa ou, sua publicação póstuma (realizada pela primeira vez em 1867) tinha o nome ou, então, o pseudónimo alemão de \"Für Elise\" que, em português, é \"Para Elisa\". É evidente que não se trata de Elisa , mas, sim, de Therese, indicando um erro do editor.\n[…]\nA partir dos anos 1990, a peça passou a ser usada no Brasil em caminhões de empresas que comercializam gás de cozinha (GLP), o que rendeu a ela a alcunha de \"música do gás\" ou \"musiquinha do gás\".\n[…]\nA canção foi adotada porque, até aquela época, as empresas usavam as buzinas dos caminhões ou gritos dos vendedores para chamar a atenção pelas ruas de manhã, o que incomodava as pessoas em suas casas, chegando a acordá-las. Com efeito, a prefeitura de São Paulo, por exemplo, promulgou a lei 11.016 em 1991, que proibia \"o uso da buzina, pelos caminhões de venda de gás engarrafado a domicílio, para anunciar a sua passagem pelas vias e logradouros\".\n[…]\nLudwig Nohl, Neue Briefe Beethovens, Stuttgart 1867\n[…]\nKlaus Martin Kopitz, Beethoven, Elisabeth Röckel und das Albumblatt „Für Elise“, Köln: Dohr, 2010, ISBN 978-3-936655-87-2\n[…]\nKlaus Martin Kopitz, Beethoven’s ‘Elise’ Elisabeth Röckel: a forgotten love story and a famous piano piece, in: The Musical Times, vol. 161, no. 1953 (Winter 2020), p. 9–26 (PDF)"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "A Cavalgada das Valquírias",
      "descricao": "Trecho orquestral do início do terceiro ato da ópera A Valquíria, de Richard Wagner."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No filme Apocalypse Now, helicópteros atacam ao som de A Cavalgada das Valquírias. Que compositor alemão escreveu essa música?",
    "resposta": "Richard Wagner",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ride_of_the_Valkyries"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ride_of_the_Valkyries",
        "situacao": "ok",
        "texto": "The Ride of the Valkyries (German: Walkürenritt or Ritt der Walküren) is the popular name of the prelude to the first scene of the third and last act of Die Walküre, the second of the four epic music dramas that constitute the operatic cycle Der Ring des Nibelungen (English: The Ring of the Nibelung), composed by Richard Wagner.\n[…]\nThe complete opera Die Walküre was first performed on 26 June 1870 in the National Theatre Munich against the composer's intent. By January of the next year, Wagner was receiving requests for the \"Ride\" to be performed separately, but wrote that such a performance should be considered \"an utter indiscretion\" and forbade \"any such thing\". However, the piece was still printed and sold in Leipzig, and Wagner wrote a complaint to the publisher Schott.\n[…]\nIn the period up to the first performance of the complete Ring cycle, Wagner continued to receive requests for separate performances, his second wife Cosima noting \"Unsavoury letters arrive for R. – requests for the Ride of the Valkyries and I don't know what else.\" Once the Ring had been performed in Bayreuth in 1876, Wagner lifted the embargo. He himself conducted it in London on 12 May 1877, repeating it as an encore.\n[…]\nThe 1941 Battle of Crete saw German airborne operations with paratroopers. Die Deutsche Wochenschau newsreel of 1941-06-04 used Walkürenritt as soundtrack to Junkers Ju 52 airplanes approaching the island at dawn in low flight over the Mediterranean Sea. In similar style, in Apocalypse Now (1979), helicopters attack a Vietnamese village with \"Ride of the Valkyries\" playing on loudspeakers.\n[…]\nWagner, Cosima (1978). Martin Gregor-Dellin; Dietrich Mack [in German] (eds.). Diaries: Volume I 1869–1877. Translated by Geoffrey Skelton. London: Collins.\n[…]\nRide of the Valkyries at Project Gutenberg (in MP3 format)"
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
    "indice": 7,
    "ancora": {
      "nome": "Réquiem de Mozart",
      "descricao": "Missa de réquiem em ré menor deixada inacabada por Wolfgang Amadeus Mozart ao morrer, em 1791."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Mozart morreu em 1791 sem terminar seu Réquiem. Que aluno dele completou a obra?",
    "resposta": "Franz Xaver Süssmayr",
    "distratores": [
      "Antonio Salieri",
      "Ludwig van Beethoven",
      "Joseph Haydn"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Requiem_(Mozart)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Requiem_(Mozart)",
        "situacao": "ok",
        "texto": "The Requiem in D minor, K. 626, is a Requiem Mass by Wolfgang Amadeus Mozart. Mozart composed part of the Requiem in Vienna in late 1791, but it was unfinished at his death on 5 December the same year. A completed version was delivered to Count Franz von Walsegg, who had commissioned the piece for a requiem service on 14 February 1792 to commemorate the first anniversary of the death of his wife A\n[…]\nFirst Joseph Eybler and then Franz Xaver Süssmayr filled in the rest, composed additional movements, and made a clean copy of the completed parts of the score for delivery to Walsegg, imitating Mozart's musical handwriting but clumsily dating it \"1792.\" It cannot be shown to what extent Süssmayr may have depended on now lost \"scraps of paper\" for the remainder; he later claimed the Sanctus and Benedictus and the Agnus Dei as his own.\n[…]\nSüssmayr's completion divides the Requiem into eight sections:\n[…]\nSüssmayr brings the choir to a reference of the Introit and ends on an Amen cadence. Discovery of a fragmentary Amen fugue in Mozart's hand has led to speculation that it may have been intended for the Requiem. Indeed, many modern completions (such as Levin's) complete Mozart's fragment. Some sections of this movement are quoted in the Requiem Mass of Franz von Suppé, who was a great admirer of Mozart.\n[…]\nThe task was then given to another composer, Franz Xaver Süssmayr. Süssmayr added his own orchestration to the movements from the Kyrie onward, completed the Lacrymosa, and added several new movements which a Requiem would normally comprise: Sanctus, Benedictus, and Agnus Dei.\n[…]\nAlso in 1798, Constanze is noted to have given another interview to Franz Xaver Niemetschek, another biographer looking to publish a compendium of Mozart's life. He published his biography in 1808, containing a number of claims about Mozart's receipt of the Requiem commission:\n[…]\nArticle on the Requiem at h2g2"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Requiem_%28Mozart%29",
        "situacao": "ok",
        "texto": "Réquiem em ré menor (K. 626) é uma missa fúnebre composta por Wolfgang Amadeus Mozart em 1791. A obra foi encomendada pelo conde Franz von Walsegg, mas não pôde ser concluída pelo compositor em razão de sua morte no mesmo ano. Posteriormente, foi completada por seus amigos e discípulos: Franz Xaver Süßmayr, Joseph Leopold Eybler e, possivelmente, Franz Jacob Freystädtler.\n[…]\nEm 14 de fevereiro de 1791, Anna Walsegg, esposa do conde Franz von Walsegg faleceu aos 20 anos. Em julho do mesmo ano, um mensageiro desconhecido (possivelmente Franz Anton Leitgeb ou Johann Nepomuk Sortschan) chegou à residência de Mozart, enviado por Walsegg. O conde desejava uma missa de réquiem em memória de sua esposa, com a intenção de apresentar a obra  como sendo de sua própria autoria, motivo pelo qual manteve o anonimato.\n[…]\nMozart prometeu que a completaria assim que voltasse de sua viagem, acrescentando que havia ficado se interessado ainda mais pela composição da missa.\n[…]\nCinco dias após sua morte, em 10 de dezembro de 1791, o Introitus foi executado em um serviço memorial em sua homenagem na Igreja de São Miguel, em Vienna. A orquestração foi quase totalmente completada por Franz Jacob Freystädtler, que acrescentou as partes de madeiras, cordas e trombones. Posteriormente, Franz Xaver Süßmayr adicionou tímpanos e trompetes. No entanto, a participação de Freystädtler não é consensual, sendo sendo objeto de discussões entre diversos historiadores e musicólogos.\n[…]\nDiante da dificuldade em encontrar um compositor disposto a finalizar a obra, Constanze recorreu a Franz Xaver Süßmayr. Utilizando os esboços deixados por Mozart, Süßmayr concluiu a orquestração e completou as seções inacabadas, como o Lacrimosa, além de compor integralmente o Sanctus, Benedictus e Agnus Dei. Para encerrar a obra, repetiu o Requiem Aethernam na Lux Aetherna e o Kyrie no Cum Sanctis Tuis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Ave Maria de Gounod",
      "descricao": "Ave Maria de Charles Gounod, de 1853, cuja melodia foi sobreposta ao primeiro prelúdio do Cravo Bem Temperado, de Bach."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na famosa Ave Maria de Gounod, a melodia foi sobreposta a um prelúdio para teclado escrito mais de um século antes. Por quem?",
    "resposta": "Johann Sebastian Bach",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ave_Maria_(Bach/Gounod)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ave_Maria_(Bach/Gounod)",
        "situacao": "ok",
        "texto": "\"Ave Maria\" is a setting of the Latin prayer Ave Maria, originally published in 1853 as \"Méditation sur le 1er prélude de piano de S. Bach\". The piece consists of a melody by the French Romantic composer Charles Gounod that he superimposed over an only very slightly changed version of Bach's Prelude No. 1 in C major, BWV 846, from Book I of his The Well-Tempered Clavier, 1722.\n[…]\nThe version of Bach's prelude used by Gounod includes the \"Schwencke measure\" (m.23), a measure allegedly added by Christian Friedrich Gottlieb Schwencke in an attempt to correct what he or someone else erroneously deemed a \"faulty\" progression, even though this sort of progression was standard in Bach's music.\n[…]\nAlongside Schubert's \"Ave Maria\", the Bach/Gounod \"Ave Maria\" has become a fixture at funerals, weddings, and quinceañeras. There are many different instrumental arrangements including for violin and guitar, string quartet, piano solo, cello, and trombone. Opera singers, such as Nellie Melba, Franco Corelli and Luciano Pavarotti, as well as choirs have recorded it hundreds of times during the twentieth century.\n[…]\nLater in his career, Gounod composed an unrelated setting of Ave Maria for a four-part SATB choir.\n[…]\nGounod based the work on Bach's prelude, which is a study in harmony in broken chords. He used the first four measure for a prelude, repeating them for the first entry of the voice. He used Bach's composition, in the version with an inserted measure after the original 22, the so-called Schwencke-measure which was common at the time. To this measure, the voice has a repeated expressive \"Maria!\". He added a tempo marking, Moderato, pedal markings for the pianist, and dynamic markings.\n[…]\nFree scores of the Ave Maria in the Choral Public Domain Library (ChoralWiki)\n[…]\nFree scores of the SATB setting of the Ave Maria in the Choral Public Domain Library (ChoralWiki)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ave_Maria_%28Bach/Gounod%29",
        "situacao": "ok",
        "texto": "A Ave Maria de Bach/Gounod é uma das composições mais famosas e gravadas sobre o texto em latim da prece Ave Maria.\n[…]\nA peça é composta por uma melodia do compositor romântico francês Charles Gounod especialmente projetada para se sobrepor ao Prelúdio No. 1 em C maior, BWV 846, do Livro I de J.S. Bach, O Cravo Bem Temperado, escrito cerca de 137 anos antes. Embora publicado em versões instrumentais e equipado para vários textos durante a vida de Gounod, a alegação de que ele nunca a escreveu realmente parece ser literalmente verdade.\n[…]\nA versão do prelúdio de Bach utilizado por Gounod tem a adição de um compasso (m.23), encontrada apenas no manuscrito de Christian Friedrich Gottlieb Schwencke e na edição impressa de Nikolaus Simrock que baseou-se  nela, mas não nos outros manuscritos de Bach ou a obra impressa do acadêmico Bischoff ou G. Henle Verlag Urtext.\n[…]\nAo lado da Ave Maria de Schubert e Offenbach, a Ave Maria de Bach/Gounod Ave Maria se tornou um ponto de encontro em funerais, missas de casamento e quinceañeras. Há muitos arranjos instrumentais diferentes, incluindo para violino e guitarra, quarteto de cordas, piano solo, violoncelo, e até trombones.\n[…]\nMuitos cantores de diferentes estilos ao longo de séculos têm cantado a Ave Maria de Gounod/Bach, como Alessandro Moreschi, o último castrato, a soprano Maria Callas, Luciano Pavarotti, José Carreras, Andrea Bocelli, Karen Carpenter (da dupla Carpenters) assim como coros, e gravaram-no centenas de vezes durante o século XX.\n[…]\nMais tarde na sua carreira, Gounod compôs um cenário não relacionado com a Ave Maria para um coro de quatro partes do SATB.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Cânone de Pachelbel",
      "descricao": "Cânone em ré maior do compositor barroco alemão Johann Pachelbel, muito tocado em casamentos."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O Cânone em ré maior, presença constante em casamentos, foi escrito por qual compositor barroco alemão?",
    "resposta": "Johann Pachelbel",
    "distratores": [
      "Georg Philipp Telemann",
      "Dietrich Buxtehude",
      "Johann Christoph Bach"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pachelbel%27s_Canon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pachelbel%27s_Canon",
        "situacao": "ok",
        "texto": "Pachelbel's Canon (also known as Canon in D, P 37) is an accompanied canon by German Baroque composer Johann Pachelbel (1653–1706). The canon was originally scored for three violins and basso continuo and paired with a gigue, known as Canon and Gigue for 3 violins and basso continuo. Both movements are in the key of D major. The piece is constructed as a true canon at the unison in three parts, wi\n[…]\nThe circumstances of the piece's composition are unknown. Hans-Joachim Schulze, writing in 1985, suggested that the piece may have been composed for Johann Christoph Bach's wedding, on 23 October 1694, which Pachelbel attended. Johann Ambrosius Bach, Pachelbel, and other friends and family provided music for the occasion. Johann Christoph Bach, the oldest brother of Johann Sebastian Bach, was a pupil of Pachelbel. Pachelbel scholar Kathryn Jane Welter considers this \"pure speculation\".\n[…]\nThe Paillard recording was released in June in France by Erato Records as part of an LP record that also included the Trumpet Concerto by Johann Friedrich Fasch and other works by Pachelbel and Fasch, all played by the Jean-François Paillard chamber orchestra. Paillard's interpretation of the canon was also included on a widely distributed album by the mail-order label Musical Heritage Society in 1968.\n[…]\nIn 1982, pianist George Winston included his \"Variations on the Kanon by Johann Pachelbel\" on his solo piano album December, which has sold over three million copies.\n[…]\nWelter, Kathryn Jane (1998). Johann Pachelbel: Organist, Teacher, Composer, A Critical Reexamination of His Life, Works, and Historical Significance (PHD). Cambridge: Harvard University. OCLC 42665284.\n[…]\nPachelbel's Canon: Scores at the International Music Score Library Project\n[…]\nOldest manuscript copy of Pachelbel's Canon and Gigue (Mus.ms 16481/8), ca. 1838–42, held in Berlin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A2none_em_R%C3%A9_Maior",
        "situacao": "ok",
        "texto": "Cânone em Ré Maior é um cânone do compositor alemão Johann Pachelbel. Seu nome original é Cânone e Giga para 3 violinos e baixo contínuo (em alemão Kanon und Gigue für 3 Violinen mit Generalbaß), às vezes também chamado de Cânone e Giga em ré ou Cânone de Pachelbel.\n[…]\nDurante sua vida, Johann Pachelbel era renomado por sua música para órgão e para instrumentos de teclado (especialmente o cravo). Hoje em dia ele também é conhecido pela música sacra e pela música de câmara.\n[…]\nAs circunstâncias de composição da peça são desconhecidas. Hans-Joachim Schulz escreveu em 1985 que a peça pode ter sido composta para o casamento do irmão de Johann Sebastian Bach, Johann Christoph Bach, em 23 de outubro de 1694. Johann Ambrosius Bach, Pachelbel e outros amigos e familiares compuseram e executaram música para a ocasião.\n[…]\nJohann Christoph Bach era o irmão mais velho de J. S. Bach e era pupilo de Pachelbel. Outro pesquisador, Charles E. Brewer, investigou uma variedade de possíveis conexões entre Pachebel e a música de câmara de Heinrich Biber. Sua pesquisa indicou que o cânone pode ter sido composto como resposta para uma chacona com elementos de cânone a qual Biber compôs como parte de Parte III de Harmonia artificioso-ariosa.\n[…]\nA gravação de Paillard foi lançado em junho na França pela Erato Records como parte de um LP no qual também estava incluído um concerto para trompete de Johann Friedrich Fasch e outros trabalhos de Pachelbel e de Fasch, todas executadas pela Orquestra de Câmara Jean-François Paillard. O Cânone também foi incluído em um álbum pela Sociedade de Patrimônio Musical em 1968.\n[…]\nA Orquestra Trans-Siberiana possui uma música baseada na melodia do Cânone, \"Christmas Canon\". \"Sunday Morning\" de Procol Harum é baseado no Cânone.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Cânone de Pachelbel",
      "descricao": "Cânone em ré maior do compositor barroco alemão Johann Pachelbel, muito tocado em casamentos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Cânone de Pachelbel foi escrito há mais de trezentos anos, mas ficou esquecido por muito tempo. Em que século se tornou famoso no mundo todo?",
    "resposta": "Século vinte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pachelbel%27s_Canon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pachelbel%27s_Canon",
        "situacao": "ok",
        "texto": "Pachelbel's Canon (also known as Canon in D, P 37) is an accompanied canon by German Baroque composer Johann Pachelbel (1653–1706). The canon was originally scored for three violins and basso continuo and paired with a gigue, known as Canon and Gigue for 3 violins and basso continuo. Both movements are in the key of D major. The piece is constructed as a true canon at the unison in three parts, wi\n[…]\nSeveral months after the Paillard recording was released, in 1968, two groups released successful singles with a backing track based on Pachelbel's Canon: Greek band Aphrodite's Child with \"Rain and Tears\" and Spanish group Pop-Tops with \"Oh Lord, Why Lord\".\n[…]\nThe Pet Shop Boys' 1993 cover of \"Go West\" played up that song's resemblance to both Pachelbel's Canon and the Soviet national anthem. Coolio's 1997 \"C U When U Get There\" is built around a sample of the piece.\n[…]\nOther songs that make use of the Pachelbel's Canon chord progression include \"Streets of London\" by Ralph McTell (1974), \"Gemilang\" by Krakatau (1986), \"Basket Case\" by Green Day (1994), and \"Don't Look Back in Anger\" by Oasis (1996) (though with a variation at the end), while Maroon 5 used the harmonic sequence of Pachelbel's Canon (and part of the melody) for their 2019 single \"Memories\".\n[…]\nThe Trans-Siberian Orchestra's 1998 song Christmas Canon is a take on Pachelbel's Canon. JerryC's version, titled \"Canon Rock\", was one of the earliest viral videos on YouTube when it was covered by Funtwo. \"Sunday Morning\" on Procol Harum's 2017 album Novum is based on the chords of the canon.\n[…]\nLevine, Alexandra S. (9 May 2019). \"How 'Canon in D Major' Became the Wedding Song\". The New York Times. Retrieved 29 November 2021.\n[…]\nPachelbel's Canon: Scores at the International Music Score Library Project\n[…]\nOldest manuscript copy of Pachelbel's Canon and Gigue (Mus.ms 16481/8), ca. 1838–42, held in Berlin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A2none_em_R%C3%A9_Maior",
        "situacao": "ok",
        "texto": "Cânone em Ré Maior é um cânone do compositor alemão Johann Pachelbel. Seu nome original é Cânone e Giga para 3 violinos e baixo contínuo (em alemão Kanon und Gigue für 3 Violinen mit Generalbaß), às vezes também chamado de Cânone e Giga em ré ou Cânone de Pachelbel.\n[…]\nEm 1974, London Records, ciente do interesse na música, editou um álbum do Concerto de Natal de Corelli, tocada pela Orquestra de Câmara Stuttgart, que continha a peça, agora com o nome de Pachelbel Kanon: the Record That Made it Famous and other Baroque Favorites (O Cânone de Pachelbel: A gravação que o tornou famoso e outras peças barrocas favoritas). O álbum foi o álbum de Música clássica mais vendido de 1976.\n[…]\nEm 1982, o pianista George Winston incluiu suas \"Variações sobre Cânone de Johan Pachelbel\" em seu ábulm solo December, o qual vendeu mais de três milhões de cópias. No mesmo ano, a revista The New Yorker publicou uma charge intitulada \"Prisioneiros de Pachelbel\", na qual um prisioneiro escutava um alto-falante: \"Para seu prazer de ouvir, mais uma vez apresentamos o cânone de Pachelbel\".\n[…]\nO Cânone de Pachelbel combina técnicas de um Cânone e Basso Ostinato. O Cânone é uma forma polifônica na qual cada voz repete exatamente a mesma melodia, em sequência. No Cânone em ré maior, existem 3 vozes que executam a melodia, mas existe também uma quarta voz, o Baixo contínuo, que toca uma melodia independente.\n[…]\nEm 2012, a Co-Operative Funelcare, do Reino Unido fez uma lista com as músicas clássicas mais populares nos funerais, e o Cânone ficou em segundo lugar, atrás de \"Nimrod\" de Edward Elgar.\n[…]\nA Orquestra Trans-Siberiana possui uma música baseada na melodia do Cânone, \"Christmas Canon\". \"Sunday Morning\" de Procol Harum é baseado no Cânone.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Adágio de Albinoni",
      "descricao": "Adágio em sol menor para cordas e órgão, atribuído a Tomaso Albinoni, mas composto e publicado em 1958 por Remo Giazotto."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O famoso Adágio atribuído ao barroco Tomaso Albinoni foi, na verdade, composto no século vinte. Por qual musicólogo italiano?",
    "resposta": "Remo Giazotto",
    "distratores": [
      "Ottorino Respighi",
      "Nino Rota",
      "Luciano Berio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Adagio_in_G_minor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adagio_in_G_minor",
        "situacao": "ok",
        "texto": "Adagio in Sol minore per archi e organo su due spunti tematici e su un basso numerato di Tomaso Albinoni (Mi 26) (Adagio in G minor for strings and organ, on two thematic ideas and a figured bass by Tomaso Albinoni), also known as \"Albinoni's Adagio\", is a 1958 neo-Baroque composition often misattributed to the 18th-century Venetian composer Tomaso Albinoni. In fact, the work was composed by a 20t\n[…]\nScholarly debate over the existence of the fragment persists, with some seeing the affair as a musical hoax perpetrated by Giazotto. There is no room for doubt when it comes to the source of everything in the Adagio other than the bassline, and Giazotto's authorship of these parts is not disputed.\n[…]\nThe composition is often referred to as \"Albinoni's Adagio\" or \"Adagio in G minor by Albinoni, arranged by Giazotto\". The ascription to Albinoni rests upon Giazotto's purported discovery of a manuscript fragment (consisting of a few opening measures of the melody line and basso continuo portion) from a slow second movement of an otherwise unknown Albinoni trio sonata.\n[…]\nGiazotto concluded that the manuscript fragment was a portion of a church sonata (sonata da chiesa, one of two standard forms of the trio sonata) in G minor composed by Albinoni, possibly as part of his Op. 4 set, around 1708.\n[…]\nIn his account, Giazotto then constructed the balance of the complete single-movement work based on this fragmentary theme. He copyrighted it and published it in 1958 under a title which, translated into English, reads \"Adagio in G minor for strings and organ, on two thematic ideas and on a figured bass by Tomaso Albinoni\". Giazotto never produced the manuscript fragment, and no official record has been found of its presence in the collection of the Saxon State Library.\n[…]\nA 1999 crossover song in English and Italian, \"Adagio\", by Lara Fabian\n[…]\nIn 2003 Rollerball – Albinoni - trance tracks"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Na Gruta do Rei da Montanha",
      "descricao": "Trecho da música incidental de Edvard Grieg para a peça Peer Gynt, de Henrik Ibsen."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que compositor norueguês escreveu Na Gruta do Rei da Montanha, para a peça Peer Gynt, de Ibsen?",
    "resposta": "Edvard Grieg",
    "distratores": [
      "Jean Sibelius",
      "Carl Nielsen",
      "Antonín Dvořák"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/In_the_Hall_of_the_Mountain_King"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/In_the_Hall_of_the_Mountain_King",
        "situacao": "ok",
        "texto": "\"In the Hall of the Mountain King\" (Norwegian: \"I Dovregubbens hall\", lit. 'In the Dovre man's hall') is a piece of orchestral music composed by Edvard Grieg in 1875 as incidental music for the sixth scene of act 2 in Henrik Ibsen's 1867 play Peer Gynt. It was originally part of Opus 23 but was later extracted as the final piece of Peer Gynt, Suite No. 1, Op. 46.\n[…]\nThe piece is played as the title character Peer Gynt, in a dream-like fantasy, enters \"Dovregubbens (the troll Mountain King's) hall\". The scene's introduction continues: \"There is a great crowd of troll courtiers, gnomes and goblins. Dovregubben sits on his throne, with crown and sceptre, surrounded by his children and relatives. Peer Gynt stands before him. There is a tremendous uproar in the hall.\" The lines sung are the first lines in the scene.\n[…]\nGrieg himself wrote, \"For the Hall of the Mountain King, I have written something that so reeks of cowpats, ultra-Norwegianism, and 'to-thyself-be-enough-ness' that I cannot bear to hear it, though I hope that the irony will make itself felt.\" The theme of \"to thyself be...\n[…]\nBritish rock band the Who recorded a performance of \"In the Hall of the Mountain King\" in 1967. This version went unreleased until 1995, when it appeared as a bonus track on a CD reissue of The Who Sell Out. Tucson Weekly called this cover a \"Who-freakout arrangement\". One reviewer called the Who's version the \"weirdest of these\" covers on the CD, and says it is \"a rendition of the corresponding extract from Grieg's Peer Gynt suite ... [yet] it hardly sounds like Grieg here, anyway...\".\n[…]\nBenestad, Finn; Schjelderup-Ebbe, Dag (1990). Edvard Grieg: Mennesket og kunstneren (in Norwegian) (2nd ed.). Oslo: Aschehoug. ISBN 82-03-16373-4.\n[…]\nIn the Hall of the Mountain King (interactive score) on Verovio Humdrum Viewer"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Na_Gruta_do_Rei_da_Montanha",
        "situacao": "ok",
        "texto": "Na Gruta do Rei da Montanha (em língua norueguesa I Dovregubbens hall; em alemão In der Halle des Bergkönigs; em inglês In the Hall of the Mountain King) é um fragmento de música incidental, opus 23, composto por Edvard Grieg para a obra de Henrik Ibsen Peer Gynt, que estreou em Oslo no dia 24 de fevereiro de 1876. Esta peça foi finalmente incluída como final da suíte Peer Gynt n.° 1, op. 46.\n[…]\nA história de fantasia escrita em verso, Peer Gynt, conta as aventuras do epônimo Peer. Na cena ilustrada pela música Na Gruta do Rei da Montanha, Peer tenta sair às escondidas do castelo do rei da montanha. O fragmento descreve a intenção de Peer de escapar do rei e de seus trolls, após ter insultado sua filha.\n[…]\nPeer Gynt (peça de Henrik Ibsen)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Marcha Fúnebre de Chopin",
      "descricao": "Terceiro movimento da Sonata para piano número dois, em si bemol menor, de Frédéric Chopin."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A Marcha Fúnebre tocada em tantos enterros é o terceiro movimento de uma sonata para piano de qual compositor romântico?",
    "resposta": "Frédéric Chopin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano_Sonata_No._2_(Chopin)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano_Sonata_No._2_(Chopin)",
        "situacao": "ok",
        "texto": "The Piano Sonata No. 2 in B♭ minor, Op. 35, is a piano sonata in four movements by Polish composer Frédéric Chopin. Chopin completed the work while living in George Sand's manor in Nohant, some 250 km (160 mi) south of Paris, a year before it was published in 1840. The first of the composer's three mature sonatas (the others being the Piano Sonata No. 3 in B minor, Op. 58 and the Sonata for Piano \n[…]\nThe third movement of the Piano Sonata No. 2 is Chopin's famous funeral march (French: Marche funèbre; Polish: Marsz żałobny) which was composed at least two years before the remainder of the work and has remained, by itself, one of Chopin's most popular compositions. The Piano Sonata No. 2 carries allusions and reminiscences of music by J. S. Bach and by Ludwig van Beethoven; Beethoven's Piano Sonata No. 12 also has a funeral march as its third movement.\n[…]\nThe compositional origins of the Piano Sonata No. 2, the first mature piano sonata Chopin wrote, are centred on its third movement (Marche funèbre), a funeral march which many scholars indicate was written in 1837. However, Jeffrey Kallberg believes that such indications are because of an autograph manuscript of eight bars of music in D♭ major marked Lento cantabile, apparently written as a gift to an unnamed recipient.\n[…]\nHaslinger's unauthorised dissemination of Chopin's early C minor sonata (he had gone as far as engraving the work and allowing it to circulate, against the composer's wishes) may have increased the pressure Chopin had to publish a piano sonata, which may explain why Chopin added the other movements to the Marche funèbre to produce a sonata. The work was finished in the summer of 1839 in Nohant (near Châteauroux), in France, and published in May 1840 in London, Leipzig, and Paris.\n[…]\nThe sonata comprises four movements:\n[…]\n1–2 minutes\n[…]\nPiano Sonata No. 2 (Chopin): Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sonata_n.%C2%BA_2_%28Chopin%29",
        "situacao": "ok",
        "texto": "Esta é uma lista das composições de Frédéric Chopin.\n[…]\nOs concertos para piano de Chopin (No.1 e No. 2) são dois exemplos dos repertórios de concertos românticos para piano mais executados.\n[…]\nA Maioria dos trabalhos de Chopin foi composta para Piano solo. De agora em diante, a menos que seja explicitamtente declarado, esta lista se refere ao gênero no contexto de piano solo.\n[…]\nOpus 9: Noturnos, Op. 9 (Chopin)\n[…]\nOpus 35: Piano Sonata em Si bemol menor; o terceiro movimento é a famosa \"Marcha fúnebre\"\n[…]\nEm todos os casos possíveis, número de Opus são dados. No entanto, devido a um número de trabalhos de Chopin não ser parte de sua Opus original, ou publicado como parte de um grupo póstumo, designações de catálogo alternativas são usadas.\n[…]\nOp. 21, Concerto para Piano e Orquestra No. 2 em Fa menor (1829-1830)\n[…]\nOp. 35, Sonata para Piano No. 2 em Si bemol menor - Marcha Fúnebre (1839)\n[…]\nOp. 58, Sonata para Piano No. 3 em Si menor (1844)\n[…]\nOp. 65, Sonata para Violoncelo e Piano em Sol menor (1845-1846)\n[…]\nNo. 2 Marcha fúnebre em Dó menor (1827)\n[…]\nS 2 No. 1, Grande Duo concertant para Violoncelo e Piano em Mi (1832)\n[…]\n«Resumo de ensaios de Chopin em Classical Music Pages» (em inglês)\n[…]\n«Biografia, trabalhos e fotos de manuscritos originais em Frederick Chopin Society» (em inglês)\n[…]\n«Biografia, galeria de imagens e citações de Chopin» (em inglês)\n[…]\n«Fryderyk Chopin: O poeta do piano» (em inglês)\n[…]\n«Life of Chopin, por Franz Liszt» (em inglês)\n[…]\n«Frederick Chopin as a Man and Musician, por Frederick Niecks» (em inglês)\n[…]\n«Chopin: The Man and his Music, por James Huneker» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Hino da Independência do Brasil",
      "descricao": "Hino patriótico brasileiro com letra de Evaristo da Veiga e música de Dom Pedro I."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A melodia do Hino da Independência do Brasil, com letra de Evaristo da Veiga, foi composta por qual imperador?",
    "resposta": "Dom Pedro I",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hino_da_Independ%C3%AAncia_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_da_Independ%C3%AAncia_do_Brasil",
        "situacao": "ok",
        "texto": "O Hino da Independência é uma canção patriótica oficial comemorando a declaração da Independência do Brasil. A letra do Hino da Independência, escrita pelo jornalista e político Evaristo da Veiga (1799–1837) em agosto de 1822, recebeu inicialmente o título de \"Hino Constitucional Brasiliense\", com música de Marcos Portugal. Foi transformado em Hino da Independência, musicado por D. Pedro I, em 182\n[…]\nSomente em 1922, quando do centenário da independência, ele voltaria a ser executado.\n[…]\nDe acordo com uma versão divulgada por Eugênio Egas em 1909, a música teria sido composta pelo Imperador na tarde do mesmo dia da Independência do Brasil, 7 de setembro de 1822 (quando já estava de volta a São Paulo vindo de Santos), tendo sido partiturado às pressas pelo mestre de capela da Catedral de São Paulo, André da Silva Gomes, para execução na noite desse dia, na Casa da Ópera (ao pátio do Palácio do Governo, antigo Colégio dos Jesuítas), por cantores e uma pequena orquestra.\n[…]\nA versão de Eugênio Egas, por outro lado, nunca foi referida nos jornais brasileiros de 1822 e nunca foi comprovada com documentação do período, tendo circulado somente a partir do início do século XX. A letra do Hino Constitucional Brasiliense foi publicada pela Typographia do Diário, em 1822, conforme documentação do Arquivo Nacional.\n[…]\nIndependência do Brasil\n[…]\nHino Nacional Brasileiro\n[…]\nHino da Carta\n[…]\nSímbolos do Brasil\n[…]\n«Símbolos Nacionais — Presidência da República Federativa do Brasil»\n[…]\n«Partitura do Hino»"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Rapsódia em Azul",
      "descricao": "Obra para piano e orquestra de George Gershwin, estreada em Nova York em 1924, que une música erudita e jazz."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que compositor americano estreou em 1924 a Rapsódia em Azul, que começa com um longo glissando de clarinete?",
    "resposta": "George Gershwin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rhapsody_in_Blue"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rhapsody_in_Blue",
        "situacao": "ok",
        "texto": "Rhapsody in Blue is a 1924 musical composition for solo piano and jazz band by George Gershwin. Commissioned by bandleader Paul Whiteman, the work combines elements of classical music with jazz-influenced effects and premiered in a concert titled \"An Experiment in Modern Music\" on February 12, 1924, in Aeolian Hall, New York City. Whiteman's band performed the rhapsody with Gershwin playing the pi\n[…]\nThe article falsely declared that George Gershwin had begun \"work on a jazz concerto\" for Whiteman's concert.\n[…]\nWith the debut of Rhapsody in Blue, Gershwin inaugurated a new era in America's musical history. He established his reputation as one of the eminent composers of the Jazz Age, and his composition eventually became one of the most popular of all concert works. In the American Heritage magazine, Frederic D. Schwarz posits that the famous opening clarinet glissando has become as instantly recognizable to concert audiences as the opening of Beethoven's Fifth Symphony.\n[…]\nAccording to critic Orrin Howard of the Los Angeles Philharmonic, Gershwin's rhapsody made an indelible mark \"on the fraternity of serious composers and performers—many of whom were present at the premiere—and on Gershwin himself, for its enthusiastic reception encouraged him to other and more serious projects.\" Howard posits that the work's legacy is best understood as embodying the cultural zeitgeist of the Jazz Age: Beginning with that incomparable, flamboyant clarinet solo, Rhapsody is irresistible still, with its syncopated rhythmic vibrancy, its abandoned, impudent flair that tells more about the Roaring Twenties than could a thousand words, and its genuine melodic beauty colored a deep, jazzy blue by the flatted sevenths and thirds that had their origins in the African-American slave songs.\n[…]\nGershwin's Original Manuscript for Rhapsody in Blue at the Library of Congress"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rhapsody_in_Blue",
        "situacao": "ok",
        "texto": "Rhapsody in Blue é uma composição criada por George Gershwin para piano solo e banda de jazz, composta em 1924, na que se combinam elementos de música clássica com efeitos de influência de Jazz. A obra estreou-se no dia 12 de fevereiro de 1924 no Aeolian Hall de Nova York, num concerto titulado \"Um experimento em música moderna\" (An Experiment in Modern Music), dirigido por Paul Whiteman e sua ban\n[…]\nO famoso diretor de jazz Paul Whiteman escutou a George Gershwin e convidou-o a compor uma peça sinfónica de jazz, para tocá-la junto com outras estréias de compositores modernos num concerto que daria proximamente com sua orquestra.\n[…]\nA George esqueceu por completo o encarrego, até que uma amanhã apareceu num anúncio do jornal a notícia de um concerto de jazz a cargo de Paul Whiteman e sua orquestra, destacando que a obra central do programa seria uma composição composta por George Gershwin, quem o soube quando leia essa amanhã as notícias.\n[…]\nNão podendo eludir o compromisso, George Gershwin criou em três semanas sua \"Rhapsody em Blue\" empurrado por esse grande maestro que sabia o que tinha entre mãos; ambos estavam a contribuir ao definitivo exaltação do jazz.\n[…]\nEsta Rapsódia, que foi orquestrada por Ferde Grofe, o arranjador de Whiteman, se estreou em 12 de fevereiro de 1924, assinalando um momento importante na história da música dos Estados Unidos, e do nascimento de sua própria música sinfónia, criada com elementos autóctonos, como os blues, os espirituais negros e o jazz, que George Gershwin traduziu em ritmos e notas que são eles mesmos, mas com outro ropaje, \"de etiqueta\", por assim o dizer.\n[…]\nEm 1955, Rhapsody in Blue serviu de inspiração para uma composição do destacado acordeonista/compositore John Serry Sr., que lançou posteriormente em 1957 (ver American Rhapsody).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Lo Schiavo",
      "descricao": "Ópera de Carlos Gomes sobre a escravidão no Brasil colonial, estreada em 1889 e dedicada à Princesa Isabel."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A ópera Lo Schiavo, de Carlos Gomes, sobre a escravidão, estreou em 1889 em qual cidade brasileira?",
    "resposta": "Rio de Janeiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lo_schiavo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lo_schiavo",
        "situacao": "ok",
        "texto": "Lo schiavo (O escravo in Portuguese, The Slave in English) is an opera in four acts by the Brazilian composer Antônio Carlos Gomes. The Italian libretto was by Rodolfo Paravicini (1828–1900), after a 1876 play, Les Danicheff, by Alexandre Dumas fils and the travel experiences of Alfredo Taunay. The opera deals with the subject of slavery, a major concern in Brazil at the time (the institution had \n[…]\nAs Gerard Béhague explains, \"Lo schiavo is considered in Brazil to be the best of Gomes's operas, as it reflects a national subject which required and was given new treatment.\"\n[…]\nIt was first performed at the Theatro Imperial Dom Pedro II, Rio de Janeiro on 27 September 1889. Also in 1889, in her first presentation as the first female conductor in Brazilian history, Chiquinha Gonzaga conducted Lo schiavo in the presence of Carlos Gomes, her close friend, who paid her homage. Upon his premiere, audiences were highly favorable but critics were less positive in their view, finding fault with the libretto primarily.\n[…]\nThe work was later performed eight times in Rio de Janeiro and then three times in São Paulo. The opera would make a reemergence in 1921 and then again in 2010 and 2019.\n[…]\nPlace: Rio de Janeiro and outskirts, Brazil\n[…]\nBeing fed up with his son's love interest, the Count sends Americo to Rio de Janeiro to fight against the native uprising and promises to ratify his marriage to Illara when he returns. But the Count instead marries Illara and Ibere and sells them on a slave market in Guanabara.\n[…]\nLo schiavo (Gomes): Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lo_schiavo",
        "situacao": "ok",
        "texto": "Lo schiavo (O Escravo) é uma ópera do compositor brasileiro, Antônio Carlos Gomes (1836 - 1896). O tema é baseado na obra original do escritor brasileiro Alfredo d'Escragnolle Taunay (1843 - 1889). Foi reproduzida no Brasil em 2004, em Campinas, com a orquestra sinfônica Municipal, com os corais PUC-Campinas e Zíper na Boca. A regência de Claudio Cruz e a preparação vocal de Ana Yara Campos.\n[…]\nFoi levada à cena, pela primeira vez, em 27 de setembro de 1889, no Rio de Janeiro - no Teatro Imperial D. Pedro II (Teatro Lírico) -, em homenagem à Princesa Isabel. Também foi encenada pelo Teatro Lirico de Cagliari, inaugurando sua temporada lírica 2019, com nove récitas entre os dias 22 de fevereiro e 3 de março, e no Teatro Municipal do Rio de Janeiro, em 2016, nos dias 21, 23, 25 e 27 de outubro.\n[…]\nAlém do interlúdio orquestral Alvorada, é famosa a ária Quando nascesti tu, que chegou a ser gravada pelo tenor Enrico Caruso, já em 19 de novembro de 1911; por Beniamino Gigli, em 1950, no Brasil e por Giacomo Lauri-Volpi, em 4 de dezembro de 1923, em Nova Iorque.\n[…]\nO interlúdio Alvorada é utilizado pelo Exército Brasileiro, quando da incorporação da bandeira à tropa.\n[…]\n«O Acervo Oficial de Antônio Carlos Gomes no \"Centro de Ciências, Letras e Artes\",Campinas» 🔗\n[…]\n«ES&DF, Die aufgeführten Komponisten, Antônio Carlos Gomes» (em alemão)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Canto orfeônico",
      "descricao": "Programa de canto coral nas escolas brasileiras liderado por Heitor Villa-Lobos nas décadas de 1930 e 1940."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1940, Villa-Lobos regeu um coral de cerca de quarenta mil estudantes em qual estádio do Rio de Janeiro?",
    "resposta": "São Januário",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Canto_orfe%C3%B4nico",
      "https://pt.wikipedia.org/wiki/Heitor_Villa-Lobos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Canto_orfe%C3%B4nico",
        "situacao": "ok",
        "texto": "Canto orfeônico é um tipo de prática de Canto coletivo amador, tendo esse nome em homenagem a Orfeu, personagem da mitologia grega, que encantava e amansava as feras com sua música.\n[…]\nA regulamentação do curso de canto orfeônico deu-se em 1946, com a finalidade de formar professores capacitados para o ensino de tal disciplina. O programa de ensino de canto orfeônico adotou um grande número de pontos originais, desenvolvidos pelo conservatório. Embora o canto orfeônico por Villa-Lobos na grade curricular da educação básica brasileira tenha sido substituído pela disciplina \"Educação musical\", por meio da Lei de Diretrizes e Bases da Educação Nacional (LDBEN) n.\n[…]\nAnalisando as atividades educativo-musicais de Villa-Lobos, torna-se evidente que o canto orfeônico foi concebido pelo maestro como a principal ferramenta para a musicalização, tendo ele atuado como regente e organizador de grandes massas de corais, como compositor, educador. Villa-Lobos expressa:\n[…]\nCom tais metas, Villa-Lobos desenvolveu seu projeto de canto orfeônico realizando três atividades complementares: 1) a organização da prática em escolas (incluindo a formação de docentes); 2) a formação e a apresentação de grandes formações orfeônicas; 3) a composição o arranjo e a organização de canções voltadas ao processo de ensino-aprendizagem dessa disciplina.\n[…]\nPara Villa-Lobos o canto orfeônico tinha como elemento educativo destinado a despertar o bom gosto musical, formando elites, concorrendo para o levantamento do nível intelectual do povo e desenvolvendo o interesse pelos feitos artístico-nacionais."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Heitor_Villa-Lobos",
        "situacao": "ok",
        "texto": "Heitor Villa-Lobos (Rio de Janeiro, 5 de março de 1887 – Rio de Janeiro, 17 de novembro de 1959) foi um compositor, maestro, violoncelista, pianista e violonista brasileiro, descrito como \"a figura criativa mais significativa do Século XX na música clássica brasileira\", e se tornando o compositor sul-americano mais conhecido de todos os tempos. Compositor prolífico, escreveu numerosas obras orques\n[…]\nEm 1913 Villa-Lobos casou-se com a pianista Lucília Guimarães, indo viver no Rio de Janeiro.\n[…]\nEm 1922 Villa-Lobos participou da Semana da Arte Moderna, no Theatro Municipal de São Paulo. No ano seguinte embarcou para a Europa, regressando ao Brasil em 1924. Viajou novamente para a Europa em 1927, financiado pelo milionário carioca Carlos Guinle. Desta segunda viagem, retornou em 1930, quando realizou turnê por sessenta e seis cidades. Realizou também, nesse mesmo ano, a \"Cruzada do Canto Orfeônico\" no Rio de Janeiro. Seu casamento com Lucília terminou na década de 1930.\n[…]\nAs publicações de Villa-Lobos na era Vargas incluíam propaganda pela nacionalidade brasileira (brasilidade), e teoria musical. O seu Guia Prático publicou 11 volumes, Solfejos (2 volumes, 1942 e 1946) contendo exercícios de canto, e Canto Orfeônico (1940 e 1950) contendo músicas patrióticas para escolas e eventos civis. A sua música para o filme O Descobrimento do Brasil de 1936, que inclui versões de composições antigas, foi também adaptada para suíte orquestral.\n[…]\nVilla-Lobos teve diversos discípulos e colaboradores, dentre compositores, regentes e instrumentistas que lhe assistiam nas diversas atividades de implantação do projeto de Canto Orfeônico nas escolas públicas brasileiras, na realização de grandes espetáculos, muitos deles para públicos de milhares de pessoas, e na revisão, cópia e organização de suas partituras.\n[…]\nEm 1960, o governo brasileiro criou o Museu Villa-Lobos, na cidade do Rio de Janeiro."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Don Giovanni",
      "descricao": "Ópera de Wolfgang Amadeus Mozart, com libreto de Lorenzo Da Ponte, estreada em 1787."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A ópera Don Giovanni, de Mozart, estreou em 1787 não em Viena, mas em qual cidade?",
    "resposta": "Praga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Don_Giovanni"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Don_Giovanni",
        "situacao": "ok",
        "texto": "Don Giovanni (Italian pronunciation: [ˈdɔn dʒoˈvanni]; K. 527; full title: Il dissoluto punito, ossia il Don Giovanni, literally 'The Rake Punished, or Don Giovanni') is an opera in two acts with music by Wolfgang Amadeus Mozart to an Italian libretto by Lorenzo Da Ponte. Its subject is a centuries-old Spanish legend about a libertine, Don Juan, as told by playwright Tirso de Molina in his 1630 pl\n[…]\nThe opera was commissioned after the success of Mozart's trip to Prague in January and February 1787. The subject may have been chosen because the sub-genre of Don Juan opera originated in that city. Lorenzo Da Ponte's libretto is based on Giovanni Bertati's for the opera Don Giovanni Tenorio, which premiered in Venice early in 1787.\n[…]\nDon Giovanni's chambers\n[…]\nPlaywright Peter Shaffer used Don Giovanni for a pivotal plot point in his play Amadeus, a fictional biography of its composer. In it, Antonio Salieri notices how Mozart composed the opera while tortured by the memory of his imposing, deceased father Leopold, and uses the information to psychologically torture Mozart even further.\n[…]\nRamón Carnicer's opera Don Giovanni Tenorio (1822) is a peculiar reworking of Mozart's opera to adapt it to Rossinian fashion. It comprises new music by Carnicer on a new text (e.g. the first half of act 1), new music on Da Ponte's text (e.g. Leporello's aria) or on a mixture of both (e.g. the new trio for the scene in the cemetery); the whole collated with extensive quotations or entire sections borrowed directly from Mozart (e.g.\n[…]\nGounod, Charles (1970). Mozart's Don Giovanni: A Commentary (from the third French edition of Le Don Juan de Mozart, London, R. Cocks, 1895). Translated by Windeyer Clark; J. P. Hutchinson. New York: Da Capo Press.\n[…]\nBaker, Even A. (1993): Alfred Roller's Production Of Mozart's Don Giovanni – A Break in the Scenic Traditions of the Vienna Court Opera. New York University."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Don_Giovanni",
        "situacao": "ok",
        "texto": "Don Giovanni (K. 527; título completo em italiano:  Il dissoluto punito, ossia il Don Giovanni, lit. O Libertino Punido, ou Don Giovanni) é uma ópera em dois atos com música do compositor austríaco Wolfgang Amadeus Mozart e libreto do autor italiano Lorenzo Da Ponte. Sua primeira apresentação foi realizada em Praga, no Teatro di Praga, especializado em ópera italiana (atualmente chamado de Teatro \n[…]\nO libreto de Da Ponte foi classificado, assim como muitos outros da época, como um dramma giocoso, termo que descrevia uma obra que continha um misto de ação cômica e séria. Mozart classificou a obra em seu catálogo como uma \"opera buffa\". Embora por vezes seja ainda hoje em dia classificada como cômica, ela apresenta características de comédia, melodrama e até mesmo elementos sobrenaturais.\n[…]\nAparece Elvira suplicando a Don Giovanni que mude de vida, mas este responde com arrogância: “Vivam as mulheres, viva o bom vinho, sustento da glória e da humanidade!”\n[…]\nE o mesmo sucede com Leporello quando sai a ver o que se passa: é a estátua do Comendador, disposta a cumprir o convite que lhe fez Don Giovanni.\n[…]\nO Comendador entra e diz a Don Giovanni que se arrependa, sem consegui-lo; então dá-lhe a mão e arrasta-o consigo até às chamas do inferno, enquanto se ouve um invisível coro de demónios.\n[…]\nTodos, com alegria, dizem ao público que aprendam a lição com o destino de Don Giovanni: “A morte dos pérfidos é sempre igual à sua vida.”\n[…]\n\"Là ci darem la mano…\" - Don Giovanni & Zerlina\n[…]\n\"Fin ch'han dal vino…\" - Don Giovanni\n[…]\n\"Deh, vieni alla finestra\" - Don Giovanni\n[…]\n\"Meta di voi qua vadano\" - Don Giovanni\n[…]\n\"Don Giovanni, a cenar teco\" - Don Giovanni, Leporello & Commendatore\n[…]\n«Áudio da ópera para ser baixado»\n[…]\nLibreto Bilíngue de Don Giovanni, na tradução de Irineu Franco Perpétuo\n[…]\nGravação da Opera exibida no Theatro São Pedro, em vídeo\n[…]\nAula de Alexandre Innecco: para gostar de Don Giovanni.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Festival de Bayreuth",
      "descricao": "Festival anual de ópera, criado por Richard Wagner em 1876, dedicado à apresentação de suas óperas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Desde 1876, em que cidade alemã acontece o festival dedicado exclusivamente às óperas de Richard Wagner?",
    "resposta": "Bayreuth",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bayreuth_Festival"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bayreuth_Festival",
        "situacao": "ok",
        "texto": "The Bayreuth Festival (German: Bayreuther Festspiele) is a music festival held annually in Bayreuth, Germany, at which performances of stage works by the 19th-century German composer Richard Wagner are presented. Wagner himself conceived and promoted the idea of a special festival to showcase his own works, in particular his monumental cycle Der Ring des Nibelungen and Parsifal.\n[…]\nFollowing Wagner's death, his widow Cosima continued running the festival at one or, more frequently, two-year intervals. She gradually introduced the early operas which complete the Bayreuth canon of Wagner's last ten mature works. Levi, the son of a rabbi, remained the festival's principal conductor for the next two decades. Felix Mottl, who was involved with the festival from 1876 to 1901, conducted Tristan und Isolde there in 1886.\n[…]\nWhen the Festival House was handed over to the city of Bayreuth in 1946, it was used for concerts of the Bayreuth Symphony Orchestra and the performances of such operas as Beethoven's Fidelio, d'Albert's Tiefland, Puccini's Madama Butterfly, and Verdi's La traviata and talks about reopening of the Wagnerian Festival started.\n[…]\nIn 1973, faced with overwhelming criticism and family infighting, the Bayreuth Festival and its assets were transferred to a newly created Richard Wagner Foundation. The board of directors included members of the Wagner family and others appointed by the state. As chairman, Wolfgang Wagner remained in charge of administration of the festival.\n[…]\nWagner, Richard (1912). The Story of Bayreuth as Told in the Bayreuth Letters of Richard Wagner. Translated by Kerr, Caroline V. Boston: Small, Maynard & Company. ASIN B000KWL6SI.\n[…]\nWagner in Bayreuth, Documentary film on the festival narrated by Wolfgang Wagner. In German with English subtitles. Polygram Video, 1992\n[…]\n\"How can I get tickets to the Bayreuth Festival?\", faqs.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Festival_de_Bayreuth",
        "situacao": "ok",
        "texto": "O Festival de Bayreuth (em alemão Bayreuther Festspiele) é um festival anual que acontece em Bayreuth, Alemanha, com performances de óperas e Dramas musicais do compositor Richard Wagner. O próprio Wagner concebeu o festival como forma de exibir e divulgar suas obras, sobretudo as óperas Der Ring des Nibelungen e Parsifal.\n[…]\nAtualmente, as apresentações ocorrem em um teatro construído exclusivamente para o evento, denominado Bayreuth Festspielhaus, cujo projeto arquitetônico foi supervisionado pelo próprio Wagner de modo que os aspectos deste edifício fossem adequados para a exibição de suas óperas.\n[…]\nNo entanto, escolheu Bayreuth, após o conselho de Hans Richter, destacando três vantagens desta cidade para os planos de Wagner:\n[…]\nNo entanto, ao visitarem Bayreuth em abril de 1870, Wagner e sua esposa Cosima, consideraram a Marhgräfliches Opernhaus inadequada, pois fora construída com a finalidade de receber as orquestras barrocas do século XVIII, não podendo acomodar as montagens completas e as grandes orquestras exigidas pelas óperas (e dramas musicais) de Wagner. Os Burgermeisters (governantes da cidade) se mostraram dispostos a construir um teatro totalmente novo, com planos para conclusão em 1873.\n[…]\nO festival sempre atraiu os mais renomados solistas e diretores, que muitas vezes ofereceram seus serviços gratuitamente. Dentre estes, Hans Richter, que conduziu o primeiro Ciclo do Anel em 1876; Hermann Levi, eleito por Wagner para dirigir Parsifal em 1882, se tornando o principal diretor do festival durante vinte anos; Mottle Felix, que participou em Bayreuth entre 1876 e 1901 e conduziu Tristan und Isolde, em 1886.\n[…]\nEntre as grandes produções no Festival de Bayreuth no século XXI, destacam-se:\n[…]\nLista de festivais de ópera\n[…]\n«Página oficial do Festival de Bayreuth»  (em alemão)(em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Ludwig van Beethoven",
      "descricao": "Compositor alemão (1770–1827), figura de transição entre o classicismo e o romantismo, que ficou surdo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Beethoven passou quase toda a vida adulta em Viena, mas nasceu em qual cidade alemã às margens do Reno?",
    "resposta": "Bonn",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven",
        "situacao": "ok",
        "texto": "Ludwig van Beethoven (baptised 17 December 1770 – 26 March 1827) was a German composer, conductor, and pianist. Regarded as one of the greatest composers in the history of Western music, he was mentored during the Classical period, and his musical style was a key driver of the transition to Romantic music, and the expansion of instrumental forms such as the symphony, the piano sonata and the strin\n[…]\nBeethoven was the grandson of Ludwig van Beethoven, a musician from the city of Mechelen in Austrian Netherlands (now Belgium), who moved to Bonn at the age of 21. Ludwig was employed as a bass singer at the court of Clemens August, Archbishop-Elector of Cologne, eventually rising to become, in 1761, Kapellmeister (music director) and hence a preeminent musician in Bonn.\n[…]\nThere is a museum, the Beethoven House, in the place of his birth in Bonn. Bonn has also hosted a musical festival, the Beethovenfest, since 1845. The festival was initially irregular but since 2007 has been organised annually.\n[…]\nThe Beethoven Monument in Bonn was unveiled in August 1845, in honour of the 75th anniversary of Beethoven's birth. Both Robert Schumann's Fantasie in C and Felix Mendelssohn's Variations sérieuses were originally conceived as contributions to the fundraising effort.\n[…]\nThe Beethoven Monument was the first statue of a composer created in Germany, and the music festival that accompanied the unveiling was the impetus for the swift construction of the original Beethovenhalle in Bonn (it was designed and built within less than a month, on the urging of Franz Liszt). Vienna honoured Beethoven with a statue in 1880.\n[…]\nBonn's principal orchestra is the Beethoven Orchester.\n[…]\nBeethoven In Our Time. BBC Radio 4\n[…]\nBeethoven-Haus Bonn\n[…]\nWorks by Ludwig van Beethoven at Project Gutenberg\n[…]\nWorks by or about Ludwig van Beethoven at the Internet Archive\n[…]\nWorks by Ludwig van Beethoven at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ludwig_van_Beethoven",
        "situacao": "ok",
        "texto": "Ludwig van Beethoven (Bona, batizado em 17 de dezembro de 1770 – Viena, 26 de março de 1827) foi um compositor e pianista alemão. Ele é uma das figuras mais reverenciadas na história da música ocidental; suas obras estão entre as mais executadas do repertório da música clássica e abrangem a transição do período clássico para a era romântica neste gênero musical. A carreira de Beethoven é convencio\n[…]\nLudwig van Beethoven (AFI: ) foi batizado em 17 de dezembro de 1770, mas nasceu presumivelmente no dia anterior, na cidade de Bonn, Reino da Prússia, atual Renânia do Norte (Alemanha). Sua família era de origem flamenga, cujo sobrenome significava horta de beterrabas e no qual a partícula van não indicava nobreza alguma.\n[…]\nSeu avô, Lodewijk van Beethoven — também chamado \"Luís\", na transliteração — de quem herdou o nome, nasceu na Mechelen, hoje parte da Bélgica, em 1712, e imigrou para Bonn, onde foi maestro de capela do príncipe. Descendia de artistas, pintores e escultores, era músico e foi nomeado regente da Capela Arquiepiscopal na corte da cidade de Colônia (atual Alemanha).\n[…]\nLudwig van Beethoven (1770–1827);\n[…]\nNicolaus Johann van Beethoven (1776–1848);\n[…]\nEm 1792, já com 21 anos de idade, mudou-se para Viena (apenas um ano após a morte, na cidade, de Mozart), onde, fora algumas viagens, permaneceu para o resto da vida. Foi imediatamente aceito como aluno por Joseph Haydn, o qual manteve o contato à primeira estadia de Ludwig na cidade. Procura então complementar mais os seus estudos, o que o leva a ter aulas com Antonio Salieri, com Foerster e Albrechtsberger, que era maestro de capela na Catedral de Santo Estêvão.\n[…]\nBeethoven-Hauss Bonn. Website oficial da entidade público-privada alemã que disponibiliza vasto acervo digital da obra de Ludwig van Beethoven. Visitado em 27 de dezembro de 2014.\n[…]\nPartituras gratuitas de Ludwig van Beethoven na CPDL, a Biblioteca Coral de Domínio Público",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Johann Sebastian Bach",
      "descricao": "Compositor e organista alemão do barroco (1685–1750)."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Bach passou seus últimos vinte e sete anos como cantor da Igreja de São Tomás, em qual cidade alemã?",
    "resposta": "Leipzig",
    "fonte": [
      "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach",
        "situacao": "ok",
        "texto": "Johann Sebastian Bach (31 March [O.S. 21 March] 1685 – 28 July 1750) was a German composer and musician of the late Baroque period.\n[…]\nBach's appointment as Court Composer was part of his long struggle to achieve greater bargaining power with the Leipzig council.\n[…]\nMusicologists often loosely link specific genres to different career stages: organ music during his positions as organist in Weimar, Arnstadt, and Mühlhausen; chamber and orchestral works during his tenure as Kapellmeister in Köthen; and choral music during his years as cantor in Leipzig. Although these emphases reflected professional duties, Bach's artistic ambitions typically far exceeded the practical requirements of his positions.\n[…]\nThis appreciation contrasted with the humiliations he faced, for instance, in Leipzig. Bach also had detractors in the contemporary press (Johann Adolf Scheibe suggested he write less complex music) and supporters, such as Johann Mattheson and Lorenz Christoph Mizler. After his death, Bach's reputation as a composer initially declined: his work was regarded as old-fashioned compared to the emerging galant style. He was remembered more as a virtuoso organ player and a teacher.\n[…]\nWhile Bach was in Leipzig, performances of his church music were limited to some of his motets and, under his student cantor Johann Friedrich Doles, some of his Passions. A new generation of Bach aficionados emerged who studiously collected and copied his music, including some of his large-scale works, such as the Mass in B minor, and performed them privately.\n[…]\nBach-Leipzig website of the Bach Archive.\n[…]\nJohann Sebastian Bach at the Musopen project."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Johann_Sebastian_Bach",
        "situacao": "ok",
        "texto": "Johann Sebastian Bach (Eisenach, 31 de março de 1685 – Leipzig, 28 de julho de 1750) foi um compositor, cravista, mestre de capela, regente, organista, professor, violinista e violista oriundo do Sacro Império Romano-Germânico, atual Alemanha.\n[…]\nA partir de 31 de maio de 1723 e até à sua morte, Bach foi o Kantor da igreja luterana de São Tomás em Leipzig, conjuntamente à função de diretor musical da cidade. A justificativa para a mudança para Leipzig gerou muita especulação, pois pareceu a alguns estudiosos ter sido um passo na direção errada.\n[…]\nMas neste caso específico, o cargo de Kantor de São Tomás, uma instituição veneranda e um baluarte do Protestantismo, em Leipzig, então a mais famosa cidade universitária alemã, era altamente cobiçado.\n[…]\nA responsabilidade de Bach em Leipzig foi principalmente a educação em canto dos alunos da Thomasschule (Escola de S. Tomás), e alguns dos mais capazes recebiam educação também em instrumentos. Mas porque esses meninos deviam cantar nas várias igrejas de Leipzig, Bach também se tornou responsável pela música de quatro igrejas: São Nicolau, São Tomás, São Mateus e São Pedro, e devia reger pessoalmente em São Tomás e São Nicolau. Cada uma delas exigia música de um tipo diferente.\n[…]\nDa última doença de Bach pouco se sabe, exceto que durou vários meses e o impediu de terminar A Arte da Fuga. Seus empregadores não esperaram sua morte para procurarem um sucessor. Faleceu em 28 de julho de 1750, em Leipzig e foi enterrado dois ou três dias depois no cemitério da Igreja de S. João. Seu filho Carl Philipp e seu antigo aluno Johann Friedrich Agricola escreveram em conjunto um obituário, importante como fonte de informações em primeira mão, ainda que incompleto e algo inexato.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Antonio Vivaldi",
      "descricao": "Compositor e violinista barroco italiano de Veneza (1678–1741), autor de As Quatro Estações."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Vivaldi era de Veneza, mas morreu pobre em 1741, longe de casa. Em que cidade?",
    "resposta": "Viena",
    "fonte": [
      "https://en.wikipedia.org/wiki/Antonio_Vivaldi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antonio_Vivaldi",
        "situacao": "ok",
        "texto": "Antonio Lucio Vivaldi (4 March 1678 – 28 July 1741) was an Italian composer, virtuoso violinist, and impresario of Baroque music. Regarded as one of the greatest Baroque composers, Vivaldi's influence during his lifetime was widespread across Europe, giving origin to many imitators and admirers. He pioneered many developments in orchestration, violin technique and programmatic music.\n[…]\nA composition by Vivaldi is identified by RV number, which refers to its place in the \"Ryom-Verzeichnis\" or \"Répertoire des oeuvres d'Antonio Vivaldi\", a catalog created in the 20th century by the musicologist Peter Ryom.\n[…]\nThis cataloging work was led by the Istituto Italiano Antonio Vivaldi, where Gian Francesco Malipiero was both the director and the editor of the published scores (Edizioni G. Ricordi). His work built on that of Antonio Fanna, a Venetian businessman and the institute's founder, and thus formed a bridge to the scholarly catalog dominant today.\n[…]\nCompositions by Vivaldi are identified today by RV number, the number assigned by Danish musicologist Peter Ryom in works published mostly in the 1970s, such as the \"Ryom-Verzeichnis\" or \"Répertoire des oeuvres d'Antonio Vivaldi\". Like the Complete Edition before it, the RV does not typically assign its single, consecutive numbers to \"adjacent\" works that occupy one of the composer's single opus numbers.\n[…]\nLane Poole, Reginald (1900). \"Vivaldi, Antonio\" . In Grove, George (ed.). A Dictionary of Music and Musicians. Vol. 4.5. London: Macmillan and Company. pp. 317–318.\n[…]\nRomijn, André. Hidden Harmonies: The Secret Life of Antonio Vivaldi, 2007 ISBN 978-0-9554100-1-7\n[…]\nFree scores by Antonio Vivaldi at the International Music Score Library Project (IMSLP)\n[…]\nFree scores by Antonio Vivaldi in the Choral Public Domain Library (ChoralWiki)\n[…]\nThe Mutopia Project has compositions by Antonio Vivaldi\n[…]\nAntonio Vivaldi at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Antonio_Vivaldi",
        "situacao": "ok",
        "texto": "Antonio Lucio Vivaldi (Veneza, 4 de março de 1678 – Viena, 28 de julho de 1741) foi um compositor e músico do estilo barroco tardio oriundo da República de Veneza, atual Itália. Tinha a alcunha de il Prete Rosso (\"o padre ruivo\") por ser um sacerdote católico de cabelos ruivos. Compôs 770 obras, entre as quais 477 concertos e 46 óperas. É conhecido do grande público principalmente por seus quatro \n[…]\nEm 1725, Il cimento dell'armonia e dell'inventione foi publicado em Amsterdam, com grande sucesso. Em 1738, Vivaldi estava naquela cidade para dirigir a abertura do concerto comemorativo dos 100 anos do Schouwburg de Van Campen, o primeiro teatro da cidade. De volta a Veneza, que à época estava sob severa crise econômica, o compositor exonera-se de suas funções no Ospedale em 1740, planejando mudar-se para Viena, sob o patrocínio de seu admirador Carlos VI.\n[…]\nVivaldi, tal como muitos outros compositores da época, terminou sua vida na pobreza. As suas composições já não eram particularmente apreciadas em Veneza. Com a mudança dos gostos musicais e a afirmação da ópera napolitana Vivaldi estava fora de moda, sendo obrigado a vender um considerável número de manuscritos, a preços irrisórios, para financiar sua transferência para Viena, a convite de Carlos VI. As razões da partida de Vivaldi não são inteiramente claras.\n[…]\nVivaldi morreria no ano seguinte, no dia 28 de julho de 1741, provavelmente em consequência da bronquite asmática que o acompanhara por toda a vida. Teve um enterro modesto. Anna Girò retornou a Veneza, onde morreria em 1750.\n[…]\nO corpo do compositor encontra-se sepultado na Universidade Tecnológica de Viena. Foi-lhe dada sepultura anônima de pobre (a missa de Requiem na qual o jovem Joseph Haydn [carece de fontes]? teria cantado no coro). Igualmente desafortunada, sua música viria a cair na obscuridade até os anos de 1900.\n[…]\nFestival em memória de Antonio Vivaldi",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Georg Friedrich Händel",
      "descricao": "Compositor barroco alemão naturalizado inglês (1685–1759), autor do Messias."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nascido na Alemanha, Handel está sepultado em qual famosa igreja de Londres?",
    "resposta": "Abadia de Westminster",
    "fonte": [
      "https://en.wikipedia.org/wiki/George_Frideric_Handel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/George_Frideric_Handel",
        "situacao": "ok",
        "texto": "George Frideric (or Frederick) Handel ( HAN-dəl; baptised Georg Fried[e]rich Händel, German: [ˈɡeːɔʁk ˈfʁiːdʁɪç ˈhɛndl̩] ; 5 March 1685 [O.S. 23 February 1684]  – 14 April 1759) was a German-British Baroque composer well-known for his operas, oratorios, anthems, concerti grossi, and organ concerti.\n[…]\nOne of his four coronation anthems, Zadok the Priest, has been performed at every British coronation since 1727. He died a respected and rich man in 1759, aged 74, and was given a state funeral at Westminster Abbey.\n[…]\nHandel was buried in Westminster Abbey. More than three thousand mourners attended his funeral, which was given full state honours.\n[…]\nIn the Lutheran Calendar of Saints Handel and Bach share the date 28 July with Heinrich Schütz, and Handel and Bach are commemorated in the calendar of saints prepared by the Order of Saint Luke for the use of the United Methodist Church. The Book of Common Worship of the Presbyterian Church (USA) (Westminster John Knox Press, 2018) commemorates him on 20 April.\n[…]\nLetters and writings of George Frideric Handel\n[…]\nWorks by George Frideric Handel at Project Gutenberg\n[…]\nWorks by or about George Frideric Handel at the Internet Archive\n[…]\nWorks by George Frideric Handel at LibriVox (public domain audiobooks)\n[…]\nThe Handel House Museum, Handel's home in London\n[…]\nPortraits of George Frideric Handel at the National Portrait Gallery, London\n[…]\nFree scores by George Frideric Handel at the International Music Score Library Project (IMSLP): includes Complete Works Edition (Ausgabe der Deutschen Händelgesellschaft)\n[…]\nFree scores by George Frideric Handel in the Choral Public Domain Library (ChoralWiki)\n[…]\n\"George Frideric Handel cylinder recordings\", Cylinder Audio Archive, University of California, Santa Barbara Library.\n[…]\nKunstDerFuge .mid files: George Frideric Handel – MIDI files"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Georg_Friedrich_H%C3%A4ndel",
        "situacao": "ok",
        "texto": "Georg Friedrich Händel ou Haendel (Halle an der Saale, 23 de fevereiro de 1685/ 5 de março de 1685 no calendário gregoriano — Londres, 14 de abril de 1759) foi um compositor alemão, naturalizado cidadão britânico em 1726.\n[…]\nEm seguida foi indicado mestre de capela do Eleitor de Hanôver, mas pouco trabalhou para ele, e esteve na maior parte do tempo ausente, em Londres. Seu patrão mais tarde tornou-se rei da Grã-Bretanha como Jorge I, para quem continuou compondo. Fixou-se definitivamente em Londres, e ali desenvolveu a parte mais importante de sua carreira, como empresário operístico e autor de óperas, oratórios e música instrumental. Quando adquiriu a cidadania britânica adotou o nome George Frideric Handel.\n[…]\nSua última aparição em público aconteceu em 6 de abril de 1759, numa apresentação de O Messias, mas desmaiou durante o concerto e foi levado para casa, onde permaneceu de cama, falecendo na noite de 13 para 14 de abril. Foi enterrado na Abadia de Westminster, um grande privilégio, em uma cerimônia assistida por milhares de pessoas.\n[…]\nEm seus anos finais sua fama foi novamente consolidada; quando morreu foi enterrado com honras na Abadia de Westminster, um privilégio reservado às grandes figuras da história inglesa, e lhe ergueram um monumento. Os obituários foram eloquentes: \"Foi-se, a Alma da Harmonia partiu!\"... \"O mais excelente músico que qualquer época jamais produziu\"... \"Enternecer a alma, cativar o ouvido, antecipar na Terra as alegrias do Céu, esta foi a tarefa de Händel\", e foram publicados vários outros desse teor.\n[…]\nObras de George Friedrich Händel no International Music Score Library Project\n[…]\nPartituras gratuitas de Georg Friedrich Händel na CPDL, a Biblioteca Coral de Domínio Público",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Madama Butterfly",
      "descricao": "Ópera de Giacomo Puccini, estreada em 1904, sobre uma jovem japonesa abandonada por um oficial americano."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que cidade japonesa se passa a ópera Madama Butterfly, de Puccini?",
    "resposta": "Nagasaki",
    "distratores": [
      "Tóquio",
      "Quioto",
      "Osaka"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Madama_Butterfly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Madama_Butterfly",
        "situacao": "ok",
        "texto": "Madama Butterfly (Italian pronunciation: [maˈdaːma ˈbatterflai]; Madame Butterfly) is an opera in three acts (originally two) by Giacomo Puccini, with an Italian libretto by Luigi Illica and Giuseppe Giacosa. The Schickling catalog number is SC 74.\n[…]\nBetween 1915 and 1920, Japan's best-known opera singer Tamaki Miura won international fame for her performances as Cio-Cio-San. A memorial to this singer, along with one to Puccini, can be found in the Glover Garden in the port city of Nagasaki, where the opera is set.\n[…]\nIn 1904, a U.S. naval officer named Pinkerton rents a house on a hill in Nagasaki, Japan, for himself and his soon-to-be wife, \"Butterfly\". Her real name is Cio-Cio-San (from the Japanese word for \"butterfly\" (蝶々, chōchō; pronounced [tɕoꜜːtɕoː]); -san is a plain honorific). She is a 15-year-old Japanese girl whom he is marrying for convenience, and he intends to leave her once he finds a proper American wife, since Japanese divorce laws are very lenient. The wedding is to take place at the house.\n[…]\nToday Madama Butterfly is the sixth most performed opera in the world and considered a masterpiece, with Puccini's orchestration praised as limpid, fluent and refined.\n[…]\n2011: Cho cho san is a Japanese novel, and TV drama series based on the novel, written by Shinichi Ichikawa. Based on the original opera, the story depicts the sorrowful love and turbulent life of a samurai's daughter who loses her parents at a young age and becomes the apprentice of a geisha, set in the early Meiji era in Nagasaki, Japan. It stars Japanese actress Aoi Miyazaki as Cho Ito (Cho cho san).\n[…]\n\"Madame Butterfly Turns 100; A Century Ago, Puccini's Tragic Heroine First Took the Stage\". NPR\n[…]\nJohn Luther Long, Madame Butterfly, the original book"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Madama_Butterfly",
        "situacao": "ok",
        "texto": "Madama Butterfly é uma ópera em três atos (originalmente em dois atos) de Giacomo Puccini, com libreto de Luigi Illica e Giuseppe Giacosa, baseada no drama de David Belasco, o qual por sua vez se baseia numa história escrita pelo advogado norte-americano John Luther Long. Estreou no Teatro alla Scala de Milão a 17 de fevereiro de 1904. É sobre um tenente da marinha que se apaixona por uma gueixa.\n[…]\nMadama Butterfly estreou no Teatro Nacional de São Carlos, ópera de Lisboa a 10 de Março de 1908.\n[…]\nA trama da ópera recebeu, mais tarde, uma citação na peça teatral (depois adaptada para o cinema) M. Butterfly, de David Henry Hwang (1988), inspirada no relacionamento entre um diplomata francês, Bernard Boursicot, e um cantor da ópera de Pequim, Shi Pei Pu. O nome Butterfly faz a ligação entre as duas histórias.\n[…]\nEsta ópera, mais atualmente, inspirou Rivers Cuomo para escrever o álbum Pinkerton da banda Weezer.\n[…]\nA história se passa em Nagasaki, Japão, por volta de 1900.\n[…]\nBenjamin Franklin Pinkerton, oficial da marinha dos Estados Unidos em Nagasaki, acaba de fazer um excelente negócio: comprou não somente uma casa na colina, com vista para o mar e o porto de Nagasaki, mas também leva de brinde uma jovem, Cio-Cio-San, de apenas quinze anos de idade, que irá morar com ele na casa. Goro, o agente imobiliário e matrimonial, mostra a Pinkerton sua nova casa, quando chegam Suzuki, sua nova serva, aia de Butterfly, e Sharpless, cônsul dos Estados Unidos em Nagasaki.\n[…]\nChega Butterfly com suas amigas, que cantam um hino à beleza da paisagem e à ternura das garotas do Japão, enquanto Cio-Cio-San canta seu amor por Pinkerton. Chegam convidados, os parentes todos de Butterfly, com exceção do tio, um monge budista que se opõe a esse casamento. Butterfly, porém, confessa que visitou a missão americana em Nagasaki e se converteu à religião de Pinkerton - prova da sinceridade dos seus sentimentos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Aida",
      "descricao": "Ópera de Giuseppe Verdi ambientada no Egito antigo, estreada em 1871."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1871, a ópera Aida, de Verdi, teve sua estreia fora da Europa. Em que cidade?",
    "resposta": "Cairo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aida"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aida",
        "situacao": "ok",
        "texto": "Aida (or Aïda, Italian: [aˈiːda]) is a tragic opera in four acts by Giuseppe Verdi to an Italian libretto by Antonio Ghislanzoni. Set in the Old Kingdom of Egypt, it was commissioned by Cairo's Khedivial Opera House and had its première there on 24 December 1871, in a performance conducted by Giovanni Bottesini. Today the work holds a central place in the operatic canon, receiving performances eve\n[…]\nBecause the scenery and costumes were stuck in the French capital during the Siege of Paris (1870–71) of the ongoing Franco-Prussian War,  the premiere was delayed and Verdi's Rigoletto was performed instead. The first opera performed at the Khedivial Opera House, Aida eventually premiered in Cairo on 24 December 1871.\n[…]\nAida met with great acclaim when it finally opened in Cairo on 24 December 1871. The costumes and accessories for the première were designed by Auguste Mariette, who also oversaw the design and construction of the sets, which were made in Paris by the Opéra's scene painters Auguste-Alfred Rubé and Philippe Chaperon (acts 1 and 4) and Édouard Desplechin and Jean-Baptiste Lavastre (acts 2 and 3), and shipped to Cairo.\n[…]\nVerdi had also written the role of Aida for the voice of Teresa Stolz, who sang it for the first time at the Milan première. Verdi had asked her fiancé, Angelo Mariani, to conduct the Cairo première, but he declined, so Giovanni Bottesini filled the gap. The Milan Amneris, Maria Waldmann, was his favourite in the role and she repeated it a number of times at his request.\n[…]\nBusch, Hans (1978). Verdi's Aida. The History of an Opera in Letters and Documents. Minneapolis: University of Minnesota Press. ISBN 978-0-8166-0798-3\n[…]\nPitt, Charles; Hassan, Tarek H. A. (1992). \"Cairo\". In Sadie, Stanley (ed.). The New Grove Dictionary of Opera. Vol. 1. London: Macmillan.\n[…]\nAïda : an opera in four acts, 1900 publication, English, digitised by BYU on archive.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aida",
        "situacao": "ok",
        "texto": "Aida é uma ópera em quatro atos, com música de Giuseppe Verdi e libreto de Antonio Ghislanzoni. Sua estreia mundial aconteceu na Casa da Ópera,  no Cairo, em 24 de dezembro de 1871. Aida foi composta por encomenda do governo egípcio para comemorar a inauguração do canal de Suez, fato que ocorreu em 17 de novembro de 1869. Sua estreia, no entanto, ocorreu com 2 anos de atraso por atrasos na composi\n[…]\nNa entrada da cidade egípcia de Tebas, junto ao templo do deus Amon, uma multidão espera a volta dos guerreiros egípcios. Aparece o faraó com o seu cortejo e os sacerdotes. Atrás deles, Amneris com Aida e as suas escravas. O faraó senta-se no seu trono tendo, à sua direita, a sua filha. Depois de um coro de louvor em honra aos deuses e do soberano, uma grande marcha abre a procissão na qual participam os soldados egípcios, seguidos por bailarinos, carros de guerra, estandartes e ídolos.\n[…]\nPur ti riveggo, mia dolce Aida, duetto di Radamès e Aida\n[…]\nLa fatal pietra sovra me si chiuse… O terra, addio, scena e duetto di Radamès e Aida\n[…]\nA música da ópera também é o tema de abertura do jogo de computador Victoria: An Empire Under the Sun, da Paradox Interactive.\n[…]\nDom Pedro II cita em seu diário de viagens a seguinte fala:\"Em 10bro(outubro) vão cantar a nova ópera de Verdi aída,assunto da época de Ramessés II e cujo cenário, vestuário e mais acessórios foram feitos em Paris sob a direção de Maritte.Procurei com empenho vê-los,sobretudo por causa de um cenário que representa edifícios de madeira desses tempos,os quais maritte disse-me serem de arquitetura graciosa e semelhante a arábica, mas tudo as achava ainda hermeticamente fechado e o diretor da ópera Dvanet bey,que outrora foi boticário e, segundo maritte manipula as belas artes como se fossem drogas,nada pôde fazer.\n[…]\n«Giuseppe Verdi - Aida em MP3 com licença Creative Commons»\n[…]\n«Giuseppe Verdi Official Site»\n[…]\n«Verdi em Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Heitor Villa-Lobos",
      "descricao": "Compositor brasileiro (1887–1959), autor das Bachianas Brasileiras e dos Choros."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "No Brasil, o Dia Nacional da Música Clássica é comemorado no aniversário de Villa-Lobos. Que dia é esse?",
    "resposta": "Cinco de março",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Heitor_Villa-Lobos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Heitor_Villa-Lobos",
        "situacao": "ok",
        "texto": "Heitor Villa-Lobos (Rio de Janeiro, 5 de março de 1887 – Rio de Janeiro, 17 de novembro de 1959) foi um compositor, maestro, violoncelista, pianista e violonista brasileiro, descrito como \"a figura criativa mais significativa do Século XX na música clássica brasileira\", e se tornando o compositor sul-americano mais conhecido de todos os tempos. Compositor prolífico, escreveu numerosas obras orques\n[…]\nAs publicações de Villa-Lobos na era Vargas incluíam propaganda pela nacionalidade brasileira (brasilidade), e teoria musical. O seu Guia Prático publicou 11 volumes, Solfejos (2 volumes, 1942 e 1946) contendo exercícios de canto, e Canto Orfeônico (1940 e 1950) contendo músicas patrióticas para escolas e eventos civis. A sua música para o filme O Descobrimento do Brasil de 1936, que inclui versões de composições antigas, foi também adaptada para suíte orquestral.\n[…]\nVilla-Lobos publicou A Música Nacionalista no Governo Getúlio Vargas c.1941, no qual ele considerava a nação como uma entidade sagrada, e os seus símbolos (entre eles, a bandeira com o lema nacional e o próprio hino nacional) como invioláveis. Villa-Lobos foi também o diretor de um comitê que tinha como tarefa estabelecer uma versão definitiva para o hino nacional brasileiro.\n[…]\nNão obstante as severas críticas, Villa-Lobos alcançou grande reconhecimento em nível nacional e internacional. Entre os títulos mais importantes que recebeu, está o de Doutor Honoris Causa pela Universidade de Nova Iorque e o de fundador e primeiro presidente da Academia Brasileira de Música.\n[…]\nA musicologia brasileira o destacou através de livros, como \"Villa-Lobos, uma interpretação\", do crítico Andrade Muricy e \"Villa-Lobos, o homem e a obra\", do musicólogo Vasco Mariz. Na musicologia internacional, destaca-se o livro \"Heitor Villa-Lobos: The Life and Works, 1887–1959\", do musicólogo finlandês Eero Tarasti.\n[…]\nViolão no Brasil\n[…]\n«Sitio Villa-Lobos.pt»"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Johann Sebastian Bach",
      "descricao": "Compositor e organista alemão do barroco (1685–1750)."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O ano da morte de Bach, 1750, costuma ser usado para marcar o fim de qual período da história da música?",
    "resposta": "Barroco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Baroque_music"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baroque_music",
        "situacao": "ok",
        "texto": "Baroque music (UK:  or US: ) refers to the period or dominant style of Western classical music composed from about 1600 to 1750. The Baroque style followed the Renaissance period, and was followed in turn by the Classical period after a short transition (the galant style). Baroque music forms a major portion of the \"classical music\" canon, and continues to be widely studied, performed, and listene\n[…]\nThe French word baroque is derived from the Portuguese barroco, meaning an irregularly-shaped pearl. Although it was long thought that the word as a critical term was first applied to architecture, in fact it appears earlier in reference to music, in an anonymous, satirical review of the première in October 1733 of Rameau's Hippolyte et Aricie, printed in the Mercure de France in May 1734.\n[…]\nThroughout the Baroque era, new developments in music originated in Italy, after which it took up to 20 years before they were broadly adopted in rest of the Western classical music practice. For instance, Italian composers switched to the galant style around 1730, while German composers such as Johann Sebastian Bach largely continued to write in the baroque style up to 1750.\n[…]\nThis idiomatic lute figuration was later transferred to the harpsichord, for example in the keyboard music of Louis Couperin and Jean-Henri D'Anglebert, and continued to be an important influence on keyboard music throughout the 18th and early 19th centuries (in, for example, the music of Johann Sebastian Bach and Frédéric Chopin).\n[…]\nThe harpsichord had become the pre-eminent keyboard instrument for domestic music-making by the late Baroque. The changes in musical style in the mid-18th century, including a need for control over dynamics, led to its gradual obsolescence. The harpsichord was replaced by the fortepiano, which was perfected by Bartolomeo Cristofori around 1700 and widely used after 1750."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%BAsica_barroca",
        "situacao": "ok",
        "texto": "Música barroca é toda música ocidental correlacionada com a época cultural homónima na Europa, que vai desde o surgimento da ópera por Claudio Monteverdi, no século XVII, até à morte de Johann Sebastian Bach, em 1750.\n[…]\nA música instrumental emancipou-se da música vocal no período barroco, e isso também deu origem à orquestra no seu sentido moderno.\n[…]\nDomenico Scarlatti, compositor espanhol de sonatas para teclado, tornou-se também um precursor do Classicismo ao romper com a continuidade barroca. Ao mesmo tempo, a densidade estrutural de Johann Sebastian Bach, que também serviu de modelo aos compositores clássicos, serve de contraponto. A morte de Bach, em 1750, é frequentemente citada como o fim da era.\n[…]\nPela primeira vez na história, música e instrumento estão em perfeita igualdade. Nesse período a instrumentação atinge sua primeira maturidade e grande florescimento. Pela primeira vez surgem gêneros musicais puramente instrumentais, como a suíte e o concerto. Nesta época surge também o virtuosismo, que explorar instrumento musical... Johann Sebastian Bach e Dietrich Buxtehude foram os maiores virtuoses do órgão.\n[…]\nMissa (música)\n[…]\nDiz-se que Johann Sebastian Bach foi o maior compositor do barroco alemão (e um dos mais importantes da história da música), por ter esgotado todas as possibilidades da música barroca. Sua morte é considerada como o ponto final do Período Barroco.\n[…]\nOutros compositores do barroco italiano foram Arcangelo Corelli e Domenico Scarlatti – este último, o maior expoente da música para cravo desse período.\n[…]\nEsta é uma linha do tempo com os principais e mais influentes compositores barrocos, separados por período e estética musical.\n[…]\nBarroco, o período;\n[…]\nLiteratura barroca;\n[…]\nPintura barroca.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Antonio Vivaldi",
      "descricao": "Compositor e violinista barroco italiano de Veneza (1678–1741), autor de As Quatro Estações."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Pela data de nascimento, qual destes compositores é o mais antigo?",
    "resposta": "Antonio Vivaldi",
    "distratores": [
      "Johann Sebastian Bach",
      "Georg Friedrich Händel",
      "Joseph Haydn"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Antonio_Vivaldi",
      "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antonio_Vivaldi",
        "situacao": "ok",
        "texto": "Antonio Lucio Vivaldi (4 March 1678 – 28 July 1741) was an Italian composer, virtuoso violinist, and impresario of Baroque music. Regarded as one of the greatest Baroque composers, Vivaldi's influence during his lifetime was widespread across Europe, giving origin to many imitators and admirers. He pioneered many developments in orchestration, violin technique and programmatic music.\n[…]\nA composition by Vivaldi is identified by RV number, which refers to its place in the \"Ryom-Verzeichnis\" or \"Répertoire des oeuvres d'Antonio Vivaldi\", a catalog created in the 20th century by the musicologist Peter Ryom.\n[…]\nBecause the simply consecutive Complete Edition (CE) numbers did not reflect the individual works (Opus numbers) into which compositions were grouped, numbers assigned by Antonio Fanna were often used in conjunction with CE numbers. Combined Complete Edition (CE)/Fanna numbering was especially common in the work of Italian groups driving the mid-20th-century revival of Vivaldi, such as Gli Accademici di Milano under Piero Santi.\n[…]\nCompositions by Vivaldi are identified today by RV number, the number assigned by Danish musicologist Peter Ryom in works published mostly in the 1970s, such as the \"Ryom-Verzeichnis\" or \"Répertoire des oeuvres d'Antonio Vivaldi\". Like the Complete Edition before it, the RV does not typically assign its single, consecutive numbers to \"adjacent\" works that occupy one of the composer's single opus numbers.\n[…]\nVivaldi was also influenced by the Composer Arcangelo Corelli.\n[…]\nRomijn, André. Hidden Harmonies: The Secret Life of Antonio Vivaldi, 2007 ISBN 978-0-9554100-1-7\n[…]\nFree scores by Antonio Vivaldi at the International Music Score Library Project (IMSLP)\n[…]\nFree scores by Antonio Vivaldi in the Choral Public Domain Library (ChoralWiki)\n[…]\nThe Mutopia Project has compositions by Antonio Vivaldi\n[…]\n\"Discovering Vivaldi\". BBC Radio 3.\n[…]\nAntonio Vivaldi at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach",
        "situacao": "ok",
        "texto": "Johann Sebastian Bach (31 March [O.S. 21 March] 1685 – 28 July 1750) was a German composer and musician of the late Baroque period.\n[…]\n1712 onwards, Antonio Vivaldi's music was Bach's most important influence, having—according to Forkel—\"taught him to think musically\".\n[…]\nBach's creative range and musical style encompassed four-part harmony, modulation, ornamentation, use of continuo instruments solos, virtuoso instrumentation, counterpoint, and a refined attention to structure and lyrics. Like his contemporaries Handel, Telemann, and Vivaldi, Bach composed concertos, suites, recitatives, da capo arias, and four-part choral music, and employed basso continuo. Most of the prints of Bach's music that appeared during his lifetime were commissioned by the composer.\n[…]\nIn his early youth, Bach copied pieces by other composers to learn from them. Later, he copied and arranged music for performance or as study material for his pupils. Some of these pieces, like \"Bist du bei mir\" (copied not by Bach but by Anna Magdalena), became famous before being associated with Bach. Bach copied and arranged Italian masters such as Vivaldi (e.g. BWV 1065), Pergolesi (BWV 1083) and Palestrina (Missa Sine nomine), French masters such as François Couperin (BWV Anh.\n[…]\nIn the 21st century Bach's compositions have become available online, for instance at the International Music Score Library Project. High-resolution facsimiles of Bach's autographs became available at the Bach Digital website. 21st-century biographers include Christoph Wolff, Peter Williams, and John Eliot Gardiner."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Antonio_Vivaldi",
        "situacao": "ok",
        "texto": "Antonio Lucio Vivaldi (Veneza, 4 de março de 1678 – Viena, 28 de julho de 1741) foi um compositor e músico do estilo barroco tardio oriundo da República de Veneza, atual Itália. Tinha a alcunha de il Prete Rosso (\"o padre ruivo\") por ser um sacerdote católico de cabelos ruivos. Compôs 770 obras, entre as quais 477 concertos e 46 óperas. É conhecido do grande público principalmente por seus quatro \n[…]\nFilho de Giovanni Battista Vivaldi e Camilla Calicchio, Antonio Vivaldi era o mais velho de sete irmãos. Seu pai, um barbeiro, mas também um talentoso violinista (alguns chegam a considerá-lo como um virtuoso), depois de iniciá-lo na música, matriculou-o, ainda pequeno, na Capela Ducal de São Marcos, para aperfeiçoar seus conhecimentos musicais, e foi também responsável pela sua admissão na orquestra da Basílica de São Marcos, onde Antonio Vivaldi despontou como o maior violinista do seu tempo.\n[…]\nNa carta, o compositor alegava motivos de saúde para não mais oficiar a missa e proclamava a natureza perfeitamente correta das suas relações com as senhoras que o acompanhavam, todas de exemplar, e comprovável, devoção e honestidade. Nada disso adiantou, e Antonio Vivaldi teve mesmo que amargar um grande prejuízo econômico, afronta que o teria convencido a deixar definitivamente a Itália.\n[…]\nEm 1947 o empresário veneziano Antonio Fanna fundou o Istituto Italiano Antonio Vivaldi, cujo primeiro diretor artístico foi o compositor Gian Francesco Malipiero, com o propósito de promover a música de Vivaldi e publicar novas edições de seus trabalhos.\n[…]\nLista de obras de Antonio Vivaldi\n[…]\nFestival em memória de Antonio Vivaldi\n[…]\nObras de Vivaldi no International Music Score Library Project\n[…]\nPartituras gratuitas de Antonio Vivaldi na CPDL, a Biblioteca Coral de Domínio Público\n[…]\nObras de Antonio Vivaldi no International Music Score Library Project\n[…]\nInstituto Vivaldi (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Hildegarda de Bingen",
      "descricao": "Abadessa, mística e compositora alemã (1098–1179), autora de cantos sacros medievais."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A abadessa alemã Hildegarda de Bingen, mística e compositora de cantos sacros, viveu em que século?",
    "resposta": "Século doze",
    "distratores": [
      "Século nove",
      "Século quinze",
      "Século dezessete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hildegard_of_Bingen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hildegard_of_Bingen",
        "situacao": "ok",
        "texto": "Hildegard of Bingen (German: Hildegard von Bingen, pronounced [ˈhɪldəɡaʁt fɔn ˈbɪŋən]; Latin: Hildegardis Bingensis; c. 1098 – 17 September 1179), also known as the \"Sibyl of the Rhine\", was a German Benedictine abbess and polymath, active during the High Middle Ages as a writer, composer, philosopher, mystic, visionary, and as a medical writer. She is one of the best-known composers of sacred mon\n[…]\nIn her second volume of visionary theology, Liber Vitae Meritorum, composed between 1158 and 1163, after she had moved her community of nuns into independence at the Rupertsberg in Bingen, Hildegard tackled the moral life in the form of dramatic confrontations between the virtues and the vices. She had already explored this area in her musical morality play, Ordo Virtutum, and the \"Book of the Rewards of Life\" takes up the play's characteristic themes.\n[…]\nLudger Stühlmeyer: O splendidissima gemma. 2012. For alto solo and organ, text: Hildegard of Bingen. Commissioned composition for the declaration of Hildegard of Bingen as Doctor of the Church.\n[…]\nKristin Hayter, known professionally as \"Lingua Ignota\", was inspired by Hildegard of Bingen.\n[…]\nDiscography of Hildegard of Bingen\n[…]\n\"Hildegard of Bingen\". Repertorium \"Historical Sources of the German Middle Ages\" (Geschichtsquellen des deutschen Mittelalters).\n[…]\nLiterature by and about Hildegard of Bingen in the German National Library catalogue\n[…]\nThere is literature about Hildegard of Bingen in the Hessian Bibliography\n[…]\nWorks by and about Hildegard of Bingen in the Deutsche Digitale Bibliothek (German Digital Library)\n[…]\nInternational Society of Hildegard von Bingen Studies (ISHBS)\n[…]\nFree scores by Hildegard of Bingen at the International Music Score Library Project (IMSLP)\n[…]\nFree scores by Hildegard of Bingen in the Choral Public Domain Library (ChoralWiki)\n[…]\nMcGuire, K. Christian. Symphonia Caritatis: The Cistercian Chants of Hildegard von Bingen (2007)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hildegarda_de_Bingen",
        "situacao": "ok",
        "texto": "Hildegarda de Bingen, O.S.B (em alemão: Hildegard von Bingen; Bermersheim vor der Höhe, verão de 1098 — Mosteiro de Rupertsberg, 17 de setembro de 1179), apelidada Sibila do Reno, foi uma monja beneditina, mística, escritora, teóloga, naturalista, poeta, dramaturga, hagiógrafa, linguista, epistológrafa, pregadora, compositora e médica informal alemã. Foi mestra do Mosteiro de Rupertsberg em Bingen\n[…]\nAs reiteradas menções ao prazer do canto e ao corpo, particularmente ao corpo feminino, quando Hildegarda teorizou sobre música, a temática do feminino tão presente nos poemas que musicou, e o estilo muitas vezes ricamente ornamental de suas melodias, desviando-se radicalmente da moderação e economia prescritas pela maioria dos teóricos da música sacra do século XII, têm dado margem a uma série de especulações contemporâneas sobre as possíveis ligações de sua concepção musical com as problemáticas do homoerotismo e da sublimação do desejo no contexto do ambiente monástico, aspectos que têm sido trazidos à evidência por numerosos pesquisadores também quando analisam outros compositores sacros de sua época, como sumarizou Holsinger.\n[…]\nSuas composições tem ganhado destaque nos programas de música erudita; já há uma discografia significativa e em 1994 o álbum Vision: The Music of Hildegard von Bingen, harmonizando suas melodias vocais com recursos eletrônicos, vendeu 450 mil exemplares e permaneceu por dezesseis semanas no topo da lista Billboard na categoria de música clássica crossover.\n[…]\nTeológicas e místicas\n[…]\nCausae et curae (Liber compositae medicinae).\n[…]\n«Internationale Gesellschaft Hildegard von Bingen - Página oficial, com vários links»\n[…]\n«International Society of Hildegard von Bingen Studies - Página oficial, com vários links»\n[…]\n«Carta Apostólica que proclama Santa Hildegarda de Bingen como Doutora da Igreja Universal»\n[…]\n900 anos do nascimento de Hildegarda de Bingen",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "O Quebra-Nozes",
      "descricao": "Balé de Piotr Ilitch Tchaikovsky, de 1892, que inclui a Dança da Fada Açucarada."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O balé O Quebra-Nozes, de Tchaikovsky, começa com uma festa em família. Em que data do ano?",
    "resposta": "Véspera de Natal",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Nutcracker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Nutcracker",
        "situacao": "ok",
        "texto": "The Nutcracker (Russian: Щелкунчик, romanized: Shchelkunchik, pronounced [ɕːɪlˈkunʲtɕɪk] ), Op. 71, is an 1892 two-act classical ballet (conceived as a ballet-féerie; Russian: балет-феерия, romanized: balet-feyeriya) by Pyotr Ilyich Tchaikovsky, set on Christmas Eve at the foot of a Christmas tree in a child's imagination featuring a Nutcracker doll. The plot is an adaptation of Alexandre Dumas's \n[…]\nIn 2010, The Nutcracker in 3D with Elle Fanning abandoned the ballet and most of the story, retaining much of Tchaikovsky's music with lyrics by Tim Rice. The $90 million film became the year's biggest box office bomb.\n[…]\nThere have been several recorded children's adaptations of the E. T. A. Hoffmann story (the basis for the ballet) using Tchaikovsky's music, some quite faithful, some not. One that was not was a version titled The Nutcracker Suite for Children, narrated by Metropolitan Opera announcer Milton Cross, which used a two-piano arrangement of the music. It was released as a 78-RPM album set in the 1940s.\n[…]\nA later version, titled The Nutcracker Suite, starred Denise Bryer and a full cast, was released in the 1960s on LP and made use of Tchaikovsky's music in the original orchestral arrangements. It was quite faithful to Hoffmann's story The Nutcracker and the Mouse King, on which the ballet is based, even to the point of including the section in which Clara cuts her arm on the glass toy cabinet, and also mentioning that she married the Prince at the end.\n[…]\nSpike Jones produced a 78 rpm record set \"Spike Jones presents for the kiddies The Nutcracker Suite (with Apologies to Tchaikovsky)\" in 1944. It includes the tracks \"The Little Girl's Dream\", \"Land of the Sugar Plum Fairy\", \"The Fairy Ball\", \"The Mysterious Room\", \"Back to the Fairy Ball\" and \"End of the Little Girl's Dream\". It includes additional choruses and some swing music.\n[…]\nTchaikovsky Research\n[…]\nThe Nutcracker ballet"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Quebra-Nozes",
        "situacao": "ok",
        "texto": "Quebra-Nozes, balé fádico (em russo: Щелкунчик, Балет-феерия; romaniz.: Shchelkuntchik, Balet-feeria; em francês: Casse-Noisette, ballet-féerie), popularmente conhecido como O Quebra-Nozes, é um dos três ballets compostos pelo compositor russo Piotr Ilitch Tchaikovski. Foi estreado em 18 de dezembro de 1892 no Teatro Mariinski, em São Petersburgo, a capital do Império Russo. Baseia-se na versão de\n[…]\nO balé se passa na casa de Clara numa noite de Natal.\n[…]\nA protagonista Clara, gostava tanto da sua aparência que o pediu como presente de Natal ao seu padrinho. Assim, o padrinho, Herr Drosslmeyer, fabricante de relógios, disse: \"Era precisamente para ti\". Logo em seguida, Clara experimenta-o e vê que ele quebra as nozes sempre sem perder o seu sorriso e também com grande eficácia. Seu irmão Fritz, que tinha visto o funcionamento do quebra-nozes, também quis usá-lo, mas escolhe as nozes maiores que havia no cesto.\n[…]\nEntão, o quebra-nozes, sendo usado grosseiramente pelo irmão dela, acaba tendo um de seus braços quebrados.\n[…]\nComeça uma batalha entre as ratazanas e o pelotão do Quebra-Nozes. Jogando enormes sapatos às ratazanas, os soldados vencem a batalha, e com isso o rei das ratazanas e seu exército fogem rapidamente.\n[…]\nO bosque se transforma numa linda estufa de inverno e o Quebra-Nozes transforma-se num lindo príncipe, que leva Clara até o Reino das Neves, onde a apresenta ao rei e à rainha. Fim do 1º Ato.\n[…]\nClara e o príncipe Quebra-Nozes despedem-se e seguem para o Reino dos Doces, onde conhecem a fada Açucarada que apresenta o reino a eles. Nisso acontecem apresentações representando várias partes do mundo: chocolate da Espanha, café da Arábia, chá da China, bengala doce da Rússia, Mãe gigone e os palhaços, dança da flautas e valsa das flores (algumas versões apresentam a gota de orvalho). Por último, acontece o \"pas de deux\" da fada Açucarada e a dança dos flocos de neve.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Teremim",
      "descricao": "Instrumento eletrônico tocado sem contato físico, pelo movimento das mãos perto de duas antenas, criado por Léon Theremin."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O teremim, instrumento eletrônico tocado sem que as mãos encostem nele, foi inventado na Rússia em que década?",
    "resposta": "Década de 1920",
    "distratores": [
      "Década de 1880",
      "Década de 1950",
      "Década de 1970"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Theremin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Theremin",
        "situacao": "ok",
        "texto": "The theremin (; originally known as the ætherphone, etherphone, thereminophone or termenvox/thereminvox) is an electronic musical instrument controlled without physical contact by the performer (who is known as a thereminist). It is named after its inventor, Leon Theremin, who patented the device in 1928.\n[…]\nThe theremin was the product of Soviet government-sponsored research into proximity sensors. The instrument was invented in October 1920 by the Russian physicist Lev Sergeyevich Termen, known in the West as Leon Theremin. After a lengthy tour of Europe, during which time he demonstrated his invention to packed houses, Theremin moved to the United States, where he patented his invention in 1928. Subsequently, Theremin granted commercial production rights to RCA.\n[…]\nThe Beach Boys' 1966 single \"Good Vibrations\"—though it does not contain a theremin—is the most frequently cited example of the instrument in pop music. The song features a similar-sounding instrument invented by Paul Tanner called an Electro-Theremin. Upon release, the single prompted an unexpected revival in theremins and increased the awareness of analog synthesizers.\n[…]\nThe terpsitone, also invented by Theremin, consisted of a platform fitted with space-controlling antennas, through and around which a dancer would control the musical performance. By most accounts, the instrument was nearly impossible to control. Of the three instruments built, only the last one, made in 1978 for Lydia Kavina, survives today.\n[…]\nList of Russian inventions\n[…]\nTheremin, Leon S.; Petrishev, Oleg (1996). \"The Design of a Musical Instrument Based on Cathode Relays\". Leonardo Music Journal. 6 (1): 49–50. doi:10.2307/1513305. ISSN 1531-4812. JSTOR 1513305 – via Project Muse.\n[…]\nThereminVox.com\n[…]\nThereminworld.com\n[…]\ntheremin Theremin Family\n[…]\nTheremin Argentina"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teremim",
        "situacao": "ok",
        "texto": "O teremim ou theremin é um dos primeiros instrumentos musicais completamente eletrônicos, controlado sem qualquer contato físico pelo músico.\n[…]\nSeu nome vem da versão ocidental do nome do seu inventor, o russo Léon Theremin, que patenteou seu dispositivo em 1928. O instrumento é controlado através de duas antenas de metal, que percebem a posição das mãos do músico e controlam osciladores de frequência com uma das mãos, e com a outra a amplitude (volume), de forma que não seja preciso tocar no instrumento. Os sinais elétricos do teremim são amplificados e enviados para um altifalante.\n[…]\nO teremim original foi produto de pesquisas em torno de sensores de proximidade, financiadas pelo governo russo. O instrumento foi inventado por um jovem físico russo chamado Lev Sergeevich Termen (conhecido no ocidente como Léon Theremin), em outubro de 1920, depois do início da Guerra Civil Russa. Depois de um longo tour pela Europa, no qual ele demonstrou sua invenção, Theremin conseguiu ir para os Estados Unidos, onde patenteou sua invenção em 1928 (US1661058).\n[…]\nEm seguida, Moog publicou vários artigos sobre a construção dos teremins, e vendeu kits para a construção do instrumento.\n[…]\nO teremim é raro entre os instrumentos musicais tocados sem contato físico. O músico se posiciona de frente ao instrumento e move suas mãos perto das antenas de metal. A distância entre uma das antenas determina a frequência (pitch), e entre a outra controla a amplitude (volume). Na maioria das vezes, a mão direita controla a frequência e a esquerda controla o volume, embora esta disposição seja invertida por alguns artistas.\n[…]\nTheremin Hispano\n[…]\nBlog \"Mi Theremin\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Opus",
      "descricao": "Palavra latina usada para numerar as obras de um compositor, geralmente na ordem de publicação."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na numeração de peças clássicas, como a Sinfonia opus sessenta e sete, o que significa a palavra latina opus?",
    "resposta": "Obra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Opus_number"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Opus_number",
        "situacao": "ok",
        "texto": "In music, the opus number is the \"work number\" that is assigned to a musical composition, or to a set of compositions, to indicate the chronological order of the composer's publication of that work. Opus numbers are used to distinguish among compositions with similar titles; the word is abbreviated as \"Op.\" for a single work, or \"Opp.\" when referring to more than one work. Opus numbers do not nece\n[…]\nGiven composers' inconsistent or non-existent assignment of opus numbers, especially during the Baroque (1600–1750) and the Classical (1750–1820) eras, musicologists have developed other catalogue-number systems; among them the Bach-Werke-Verzeichnis (BWV-number) and the Köchel-Verzeichnis (K- and KV-numbers), which enumerate the works of Johann Sebastian Bach and Wolfgang Amadeus Mozart, respectively.\n[…]\nIn the classical period—the Latin word opus (\"work\", \"labour\"), plural opera—was used to identify, list, and catalogue a work of art.\n[…]\nConsequently, opus numbers were not usually in chronological order, unpublished compositions usually had no opus number, and numeration gaps and sequential duplications occurred when publishers issued contemporaneous editions of a composer's works, as in the sets of string quartets by Joseph Haydn and Ludwig van Beethoven; Haydn's Op. 76, the Erdödy quartets (1796–97), comprises six discrete quartets consecutively numbered Op. 76 No. 1 – Op. 76 No. 6; whilst Beethoven's Op.\n[…]\nTo manage inconsistent opus-number usages – especially by composers of the Baroque (1600–1750) and of the Classical (1720–1830) music eras – musicologists have developed comprehensive and unambiguous catalogue number-systems for the works of composers such as:\n[…]\nJoseph Haydn – identified with a Hob.-number, per the 1957 catalogue by Anthony van Hoboken. Although he assigned Hoboken-numbers to the string quartets, those compositions usually are known by opus numbers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Opus_%28m%C3%BAsica%29",
        "situacao": "ok",
        "texto": "O termo opus (abreviadamente op.; no plural,opp. ) é uma palavra latina que significa 'obra'. Em música, esse termo, seguido de um  número, indica uma composição de determinado autor, segundo uma catalogação oficial. O plural de opus, opera, também pode se referir a ópera, no sentido de obra dramática musicada.\n[…]\nAs peças musicais indexadas (como é o caso das obras de  Bach, Haydn, Mozart, Schubert e outros) são identificadas por um  número de opus, que geralmente é atribuído em ordem cronológica - considerando a data da composição ou da publicação da obra.\n[…]\nWoO refere-se a Werk ohne Opuszahl, ou \"obra sem número de opus\" (especialmente na obra de Beethoven).\n[…]\nOp. posth. significa opus posthumous ou 'obra publicada postumamente'. É importante notar, no entanto,  que as peças publicadas após a morte do compositor nem sempre são  categorizadas como Op. posth.. Algumas obras de Beethoven, por exemplo, continuaram a receber números de opus, após a morte do compositor, de acordo com a ordem em que foram publicadas - como é o caso de A raiva pelo tostão perdido, publicada como Op.\n[…]\nAs obras de Johann Christian Bach  são mais comumente citadas pelos números de opus atribuídos por seus editores originais, o que pode provocar dificuldades de identificação, pois editores diferentes utilizaram o mesmo número de opus para obras  diferentes. Por exemplo, o Op. 18 tem sido utilizado para três diferentes conjuntos de obras de J. C. Bach: Seis Grandes  Aberturas, seis sinfonias ou  Quatro sonatas e dois duetos. Por isso, alguns utilizam a obra de C. S.\n[…]\nA obra de Franz Schubert é identificada por seus números D (ou Deutsch), conforme o catálogo de Otto Erich Deutsch.\n[…]\nAs obras de Richard Wagner são classificadas de acordo com seus números WWV ou Wagner-Werke-Verzeichnis que também incluem sua obra não musical.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Sonata ao Luar",
      "descricao": "Sonata para piano número quatorze, em dó sustenido menor, de Ludwig van Beethoven, de 1801."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Sonata ao Luar, de Beethoven, ganhou o apelido de um crítico que comparou a música ao luar sobre qual lago suíço?",
    "resposta": "Lago de Lucerna",
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano_Sonata_No._14_(Beethoven)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano_Sonata_No._14_(Beethoven)",
        "situacao": "ok",
        "texto": "The Piano Sonata No. 14 in C♯ minor, marked Quasi una fantasia, Op. 27, No. 2, is a piano sonata by Ludwig van Beethoven, completed in 1801 and dedicated in 1802 to his pupil Countess Julie \"Giulietta\" Guicciardi. Although known throughout the world as the Moonlight Sonata (German: Mondscheinsonate), it was not Beethoven who named it so. The title \"Moonlight Sonata'\" arose via imagery later propos\n[…]\nMany sources say that the nickname Moonlight Sonata arose after the German music critic and poet Ludwig Rellstab likened the effect of the first movement to that of moonlight shining upon Lake Lucerne. This comes from the musicologist Wilhelm von Lenz, who wrote in 1852: \"Rellstab compares this work to a boat, visiting, by moonlight, the remote parts of Lake Lucerne in Switzerland.\n[…]\nIn fact, as musicologist Sarah Waltz determined in a 2007 analysis of the title, Rellstab made his comment about the sonata's first movement in a story called Theodor that he published in 1824: \"The lake reposes in twilit moon-shimmer [Mondenschimmer], muffled waves strike the dark shore; gloomy wooded mountains rise and close off the holy place from the world; ghostly swans glide with whispering rustles on the tide, and an Aeolian harp sends down mysterious tones of lovelorn yearning from the ruins.\" Rellstab made no mention of Lake Lucerne, which seems to have been Lenz's own addition.\n[…]\nAlthough no direct testimony exists as to the specific reasons why Beethoven decided to title both the Op. 27 works as Sonata quasi una fantasia, it may be significant that the layout of the present work does not follow the traditional movement arrangement in the Classical period of fast–slow–[fast]–fast. Instead, the sonata possesses an end-weighted trajectory, with the rapid music held off until the third movement.\n[…]\nLecture by András Schiff on Beethoven's Piano Sonata Op. 27, No. 2 – via The Guardian"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sonata_para_piano_n.%C2%BA_14_%28Beethoven%29",
        "situacao": "ok",
        "texto": "A Sonata para piano n.º 14, Op. 27 n.º 2 é uma sonata de Beethoven. Essa sonata foi muito tocada na época de Beethoven, que chegou a dizer que tinha feito músicas melhores. A \"Sonata ao Luar\", que serviu de tema para inúmeros filmes e romances, só recebeu seu apelido em 1832, cinco anos depois da morte de Beethoven. Foi o crítico Rellstab que comparou a música a um luar ao lago Lucerna. Tal compar\n[…]\nAssim como na sonata anterior, o primeiro movimento vem com a indicação \"quasi una fantasia\". Uma melodia melancólica é apresentada acompanhada por um ostinato que dura o movimento inteiro. Beethoven coloca no início da partitura uma indicação de \"senza surdina\". Os desavisados pensam que a \"surdina\" se refere ao pedal esquerdo do piano, o \"una corda\", mas na verdade a \"surdina\" a que Beethoven se refere é o pedal direito.\n[…]\nComo os pianos modernos não permitem isso - o nível de projeção é muito maior do que o piano da época de Beethoven, criando dissonâncias indesejadas - essa indicação serve como parâmetro para interpretação e não deve ser levada à risca (a não ser que o pianista toque num piano de época). O movimento tem uma forma-sonata um pouco escondida, onde há uma exposição, desenvolvimento e recapitulação, mas a forma fica bem diluída no contexto geral.\n[…]\nAssim como na sonata anterior, Beethoven coloca um \"attacca subito\" no final do movimento para dar continuidade à música.\n[…]\nO terceiro movimento é o mais extenso e \"dramático\". De uma dificuldade técnica muito grande, esse movimento vem na forma sonata. O tema principal é heróico e turbulento - uma série de acordes arpejados ascendentes e bastante rápidos. Ao longo do movimento, o baixo Alberti se faz presente, mantendo a ansiedade mesmo quando a melodia tem um ar mais calmo. O segundo tema é mais lírico e melódico.\n[…]\nPiano Sonata No. 14: partituras livres no International Music Score Library Project.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Música barroca",
      "descricao": "Período da música europeia entre cerca de 1600 e 1750, de compositores como Bach, Vivaldi e Händel."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo a explicação mais aceita, o nome barroco, dado ao período de Bach e Vivaldi, vem de uma palavra portuguesa para qual objeto de formato irregular?",
    "resposta": "Pérola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Baroque_music",
      "https://en.wikipedia.org/wiki/Baroque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baroque_music",
        "situacao": "ok",
        "texto": "Baroque music (UK:  or US: ) refers to the period or dominant style of Western classical music composed from about 1600 to 1750. The Baroque style followed the Renaissance period, and was followed in turn by the Classical period after a short transition (the galant style). Baroque music forms a major portion of the \"classical music\" canon, and continues to be widely studied, performed, and listene\n[…]\nThe French word baroque is derived from the Portuguese barroco, meaning an irregularly-shaped pearl. Although it was long thought that the word as a critical term was first applied to architecture, in fact it appears earlier in reference to music, in an anonymous, satirical review of the première in October 1733 of Rameau's Hippolyte et Aricie, printed in the Mercure de France in May 1734.\n[…]\nAn interest in harmony had also existed among certain composers in the Renaissance, notably Carlo Gesualdo; However, the use of harmony directed towards tonality (a focus on a musical key that becomes the \"home note\" of a piece), rather than modality, marks the shift from the Renaissance into the Baroque period.\n[…]\nThis Venetian style was taken handily to Germany by Heinrich Schütz, whose diverse style also evolved into the subsequent period.\n[…]\nMusical forms became regularised in the late Baroque, both within movements and on a larger scale for pieces with multiple movements. The concurrent move away from modality and towards diatonic tonality led to the concept of modulation as a fundamental part of a piece's structure. From the late 17th century, the key was often included in an instrumental piece's title, highlighting its importance to composers of the period.\n[…]\nDramatic musical forms like opera, dramma per musica\n[…]\nRépertoire International des Sources Musicales (RISM), a free, searchable database of worldwide locations for music manuscripts up to c. 1800."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Baroque",
        "situacao": "ok",
        "texto": "The Baroque (UK:  bə-ROK, US:  bə-ROHK, French: [baʁɔk]) is a Western style of architecture, music, dance, painting, sculpture, poetry, and other arts that flourished from the early 1600s until the 1750s. It followed Renaissance art and Mannerism and preceded the Rococo (in the past often referred to as \"late Baroque\") and Neoclassical styles.\n[…]\nThe word baroque was also associated with irregular pearls before the 18th century. The French baroque and Portuguese barroco were terms often associated with jewelry. An example from 1531 uses the term to describe pearls in an inventory of Charles V of France's treasures.\n[…]\nLater, the word appears in a 1694 edition of Le Dictionnaire de l'Académie Française, which describes baroque as \"only used for pearls that are imperfectly round.\" A 1728 Portuguese dictionary similarly describes barroco as relating to a \"coarse and uneven pearl\".\n[…]\nBaroque architecture in Portugal lasted about two centuries (the late seventeenth century and eighteenth century). The reigns of John V and Joseph I had increased imports of gold and diamonds, in a period called Royal Absolutism, which allowed the Portuguese Baroque to flourish.\n[…]\nThe baroque was a period of musical experimentation and innovation which explains the amount of ornaments and improvisation performed by the musicians. New forms were invented, including the concerto and sinfonia. Opera was born in Italy at the end of the 16th century (with Jacopo Peri's mostly lost Dafne, produced in Florence in 1598) and soon spread through the rest of Europe: Louis XIV created the first Royal Academy of Music.\n[…]\nAntonio Vivaldi (1678–1741), The Four Seasons (1725)\n[…]\nThe Baroque period was a golden age for theatre in France and Spain; playwrights included Corneille, Racine and Molière in France; and Lope de Vega and Pedro Calderón de la Barca in Spain."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%BAsica_barroca",
        "situacao": "ok",
        "texto": "Música barroca é toda música ocidental correlacionada com a época cultural homónima na Europa, que vai desde o surgimento da ópera por Claudio Monteverdi, no século XVII, até à morte de Johann Sebastian Bach, em 1750.\n[…]\nDurante a música barroca, os compositores e intérpretes usaram ornamentação musical mais elaboradas e ao máximo, nunca usada tanto antes ou mais tarde noutros períodos, para elaborar suas ideias; fizeram mudanças indispensáveis na notação musical, e desenvolveram técnicas novas instrumentais, assim como novos instrumentos. A música, no Barroco, expandiu em tamanho, variedade e complexidade de performance instrumental da época, além de também estabelecer inúmeras formas musicais novas.\n[…]\nDiz-se que Johann Sebastian Bach foi o maior compositor do barroco alemão (e um dos mais importantes da história da música), por ter esgotado todas as possibilidades da música barroca. Sua morte é considerada como o ponto final do Período Barroco.\n[…]\nOutros compositores do barroco italiano foram Arcangelo Corelli e Domenico Scarlatti – este último, o maior expoente da música para cravo desse período.\n[…]\nA tradição musical do barroco francês deu-se principalmente com Juvens St Louis, que introduziu a ópera francesa, e Jean-Philippe Rameau, que desenvolveu obras para cravo. Outro compositor importante do período foi François Couperin, autor de peças musicais sacras. Também se destaca Jean-Baptiste Lully, responsável por consolidar o estilo da tragédie lyrique na corte de Luís XIV.\n[…]\nEsta é uma linha do tempo com os principais e mais influentes compositores barrocos, separados por período e estética musical.\n[…]\nBarroco, o período;\n[…]\nEscultura barroca;\n[…]\nLiteratura barroca;\n[…]\nPintura barroca.\n[…]\nRevivalismo da música antiga",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Réquiem",
      "descricao": "Missa católica pelos mortos, cujo texto latino começa com as palavras Requiem aeternam, musicada por muitos compositores."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A missa pelos mortos chamada réquiem tem esse nome por causa da primeira palavra do texto em latim. O que essa palavra significa?",
    "resposta": "Descanso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Requiem"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Requiem",
        "situacao": "ok",
        "texto": "A Requiem (Latin for 'rest') or Requiem Mass, also known as Mass for the dead (Latin: Missa pro defunctis) or Mass of the dead (Latin: Missa defunctorum), is a Mass of the Catholic Church offered for the repose of the souls of the deceased, using a particular form of the Roman Missal. It is usually celebrated in the context of a funeral (where in some countries it is often called a Funeral Mass).\n[…]\nThere is no Gloria in excelsis Deo and no recitation of the Creed; the Alleluia chant before the Gospel is replaced by a Tract, as in Lent; and the Agnus Dei is altered. Ite missa est is replaced with Requiescant in pace (May they rest in peace); the Deo gratias response is replaced with Amen; and the final blessing for the congregation is omitted.\n[…]\nJohn Rutter combines in his Requiem (1985) some of the parts of the Latin Requiem with two complete psalms, Psalm 130 \"Out of the deep\" and his earlier composition The Lord is my Shepherd, and juxtaposes more biblical verses within the Latin movements.\n[…]\nSome composers have written purely instrumental works bearing the title of Requiem, as famously exemplified by Britten's Sinfonia da Requiem. Hans Werner Henze's Das Floß der Medusa, written in 1968 as a requiem for Che Guevara, is properly speaking an oratorio; Henze's Requiem is instrumental but retains the traditional Latin titles for the movements. Igor Stravinsky's Requiem Canticles mixes instrumental movements with segments of the \"Introit\", \"Dies irae\", \"Pie Jesu\" and \"Libera me\".\n[…]\nAlphabetical Requiems Survey\n[…]\nOnline Guide to Requiem\n[…]\nWriting – The Requiem Mass : A Literal Translation\n[…]\nHerbermann, Charles, ed. (1913). \"Masses of Requiem\" . Catholic Encyclopedia. New York: Robert Appleton Company.\n[…]\nBritish Pathé News clips of the Catholic Police Guild Annual Solemn Requiem\n[…]\nFauré's \"Requiem\"—Spanish Radio and Television Symphony Orchestra and Chorus. Petri Sakari, conductor. Live concert."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/R%C3%A9quiem",
        "situacao": "ok",
        "texto": "Um Réquiem (em latim: requiem, acusativo de requies, \"descanso\") ou Missa de Réquiem, também conhecida como \"Missa para os fiéis defuntos\" (do latim: Missa pro defunctis) ou \"Missa dos fiéis defuntos\" (do latim: Missa defunctorum), é uma missa da Igreja Católica oferecida para o repouso da alma ou alma de uma ou mais pessoas falecidas, usando uma forma particular do Missal Romano. É frequentemente\n[…]\n«Música e Adoração». - tradução do réquiem\n[…]\nJogo eletrônico Resident Evil Requiem (2026)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Sinfonia Inacabada",
      "descricao": "Sinfonia número oito, em si menor, de Franz Schubert, escrita em 1822."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Sinfonia número oito de Schubert é conhecida pelo apelido de Inacabada. Por quê?",
    "resposta": "Tem só dois movimentos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Symphony_No._8_(Schubert)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Symphony_No._8_(Schubert)",
        "situacao": "ok",
        "texto": "Franz Schubert's Symphony in B minor, D. 759 (often numbered as Symphony No. 8, or 7 in accordance with the revised Deutsch catalogue and the Neue Schubert-Ausgabe), commonly known as the Unfinished Symphony (German: Unvollendete), is a musical composition that Schubert started in 1822 but left with only two movements—though he lived for another six years. A scherzo, nearly completed in piano scor\n[…]\nThe Unfinished Symphony has been called No. 7 (recently, for example, in the New Schubert Edition) instead of No. 8 as it usually is in the traditional English system, since the other work, in E major, completed by Felix Weingartner, sometimes referred to as Schubert's 7th was also left incomplete but in a different way, with at least fragments of all four of its movements in Schubert's hand.\n[…]\nMore recently, British musicologists Gerald Abraham and Brian Newbould have also offered completions of the symphony (scherzo and finale) using Schubert's scherzo sketch and the extended B minor first entr'acte from his incidental music to the play Rosamunde Schubert wrote a few months later, long suspected by some musicologists as originally intended as the Unfinished's finale.\n[…]\nThe composer and pianist Leopold Godowsky composed a Passacaglia with 44 Variations, cadenza and fugue on the opening theme of Schubert's Unfinished Symphony, for solo piano. Godowsky added a quarter-note F♯ to the beginning of Schubert's theme, as an anacrusis.\n[…]\nThe composer Gilad Hochman composed a contemporary homage to Schubert's Symphony titled Shedun Fini (metathesis of the word 'Unfinished') for a clarinet–cello–piano trio in form of Prelude and Allegro, using different quotations and stylistic influences.\n[…]\nSymphony No. 8: Scores at the International Music Score Library Project\n[…]\nAbout the Composition: Symphony No. 8 in B minor, D. 759 (\"Unfinished\"), Kennedy Center, Washington, D.C."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sinfonia_n.%C2%BA_8_%28Schubert%29",
        "situacao": "ok",
        "texto": "A Sinfonia em si menor, D. 759, de Franz Schubert (ou \"Sinfonia Inacabada\" ou ainda \"Sinfonia n.º 8\") foi composta em 1822 mas só foi descoberta vários anos depois da morte do compositor. É-lhe atribuída normalmente a posição 8 entre as sinfonias de Schubert, mas segundo as renumerações recentes deveria ser a n.º 7. O nome de Inacabada ou Inconclusa deve-se a ter apenas dois andamentos, embora nad\n[…]\nAlguns musicólogos afirmam que esta sinfonia antecipa a música de Anton Bruckner.\n[…]\nHá diversas teorias sobre o motivo pelo qual a sinfonia está incompleta, e por que motivos Schubert não chegou a terminar a obra. Há quem considere que, ao inteirar-se apenas um mês depois de começá-la, que padecia de sífilis, teria abandonado a obra e a teria dado ao seu amigo Josef Hüttenbrenner. Este, por sua vez, deu-a ao seu irmão Anselm, que finalmente a entregou a Johann Herbeck, o maestro que a estrearia em Viena.\n[…]\nA sinfonia é uma das mais tocadas no mundo, e os seus dois andamentos estão marcados como:\n[…]\nA sinfonia surgiu após em 1823, a Sociedade Musical de Graz ter agraciado Schubert com um diploma honorário. O compositor sentiu-se obrigado a agradecer dedicando uma sinfonia à instituição, e deu ao seu amigo Anselm Hüttenbrenner, representante da Sociedade, uma partitura que escrevera em 1822. Estes factos são conhecidos, mas não se sabe nada sobre quanto da sinfonia foi escrito, e se existe ou existiu mais do que foi entregue a Hüttenbrenner.\n[…]\nOs dois primeiros andamentos são conhecidos, tal como duas páginas de um scherzo, e a parte restante do scherzo para piano, mas nada de um hipotético andamento adicional.\n[…]\nComo banda sonora cinematográfica, a sinfonia surge muitas vezes:\n[…]\nYoshiki Hayashi, do grupo X Japan, inspirou-se nesta sinfonia para Art of Life.\n[…]\no primeiro movimento foi usado por Agnès Varda no início do seu filme Les plages d'Agnès.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Abertura 1812",
      "descricao": "Abertura orquestral de Piotr Ilitch Tchaikovsky, de 1880, famosa pelos tiros de canhão e pelos sinos no final."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Abertura 1812, de Tchaikovsky, que usa tiros de canhão, celebra a derrota de qual invasor da Rússia?",
    "resposta": "Napoleão Bonaparte",
    "fonte": [
      "https://en.wikipedia.org/wiki/1812_Overture"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1812_Overture",
        "situacao": "ok",
        "texto": "The Year 1812, Solemn Overture, Op. 49, popularly known as the 1812 Overture, is a concert overture in E♭ major written in 1880 by Russian composer Pyotr Ilyich Tchaikovsky. The piece commemorates Russia's successful defence against the French invasion of the nation in 1812.\n[…]\nIn 1869, the full edition of War and Peace by Leo Tolstoy was published. The novel reported a very accurate description of the Napoleonic invasion of 1812, reviving memories of the Russian resistance. This led to the commissioning of new monuments, paintings and also of new musical compositions, including Tchaikovsky's.\n[…]\nAs a rousing patriotic hymn, the Overture has subsequently been adapted into and associated with other contexts than that of the Russian resistance to Napoleon's invasion. The 1812 Overture is popularly known in the United States as a symbol of the United States Independence Day, a tradition that dates back to a 1974 choice made by Arthur Fiedler for a performance at the Boston Pops July 4 concert. An earlier outdoors July presentation in the U.S.\n[…]\nAlthough La Marseillaise was chosen as the French national anthem in 1795, it was revoked by Napoleon in 1805 and forbidden from being played in his presence, and would not have been played during the Russian campaign. It was only reinstated as the French anthem in 1879 – the year before the commission of the overture – which can explain its use by Tchaikovsky in the overture.\n[…]\n\"Chant du départ\", nicknamed \"the brother of the Marseillaise\" by French Republican soldiers, served as the official anthem of Napoleon's regime. However, it had been largely forgotten by 1882, while educated Russians of the time were likely to be familiar with the tune of \"La Marseillaise\" and recognize its significance.\n[…]\nTchaikovsky Research"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abertura_1812",
        "situacao": "ok",
        "texto": "A Abertura Solene Para o Ano de 1812 é uma obra orquestral de Piotr Ilitch Tchaikovski comemorando o fracasso da invasão francesa à Rússia em 1812 e a subsequente devastação da \"Grande Armée\" de Napoleão. A obra é também conhecida pela sua sequência de tiros de canhão que é, em alguns concertos ao ar livre, executada com canhões verdadeiros.\n[…]\nA abertura da exposição coincidiu com a consagração de uma nova catedral, erigida para comemorar o fracasso da invasão de Napoleão Bonaparte à Rússia, em 1812.\n[…]\nNapoleão era um general temido e o exército francês era considerado imbatível. Em 1812, a França invadiu a Rússia na tentativa de forçar o Czar Alexandre I da Rússia a entrar no delicado sistema de alianças de Napoleão e, mais especificamente, aderir ao Bloqueio Continental. Todavia, a Campanha da Rússia terminou na retirada do exército francês.\n[…]\nEmbora não gostasse desse tipo de encomenda, Tchaikovski a aceitou e começou a trabalhar em uma obra que celebrasse simultaneamente os 70 anos da vitória russa sobre Napoleão e o primeiro aniversário da coroação do tsar Alexandre III.\n[…]\nEntre outras peças do autor, como a Marcha Eslava, esta é uma obra de caráter fortemente nacionalista, composta no ano de 1880, para a comemoração da vitória russa sobre as tropas Napoleônicas.\n[…]\nA obra contrapõe o hino da Rússia e o hino da França, com fragmentos do folclore russo e temas religiosos. A Abertura 1812 começa com um coro inspirado no hino ‘Deus ajude vosso povo’, da Igreja Ortodoxa Russa.\n[…]\nA Abertura 1812 é fonte de inspiração para releituras, como no caso de Igor Buketoff, que na segunda metade da década de 1960 (1965-70) fez diversas modificações, tanto no coro inicial, quanto outras alterações instrumentais. Ela é tributada na canção \"2112 da Rússia\".\n[…]\nA Abertura 1812 foi escrita para ser interpretada por uma orquestra composta por:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Concerto para a Mão Esquerda",
      "descricao": "Concerto para piano em ré maior de Maurice Ravel, de 1930, escrito para ser tocado só com a mão esquerda."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ravel compôs um concerto só para a mão esquerda. O pianista que o encomendou tinha perdido o braço direito em qual guerra?",
    "resposta": "Primeira Guerra Mundial",
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano_Concerto_for_the_Left_Hand_(Ravel)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano_Concerto_for_the_Left_Hand_(Ravel)",
        "situacao": "ok",
        "texto": "The Piano Concerto for the Left Hand in D major was composed by Maurice Ravel between 1929 and 1930, concurrently with his Piano Concerto in G major. The piece was commissioned by Paul Wittgenstein, a concert pianist who had lost his right arm in the First World War.\n[…]\nIn preparing for composition, Ravel studied several pieces written for one-handed piano, including Camille Saint-Saëns's Six Études pour la main gauche (Six Études for the Left Hand) (Op. 135), Leopold Godowsky's transcription for the left hand of Frédéric Chopin's Etudes (Opp. 10 and 25), Carl Czerny's Ecole de la main gauche (School of the Left Hand) (Op. 399), 24 études pour la main gauche (Op. 718), Charles-Valentin Alkan's Fantaisie in A♭ major (Op. 76 No.\n[…]\nThe composer was beside himself with indignation and disbelief.' Later Wittgenstein agreed to perform the concerto as written, and the two men made up their differences, 'but the whole episode left a bitter taste in both their mouths'.\n[…]\nIn May 1930 Ravel had had a major disagreement with Arturo Toscanini over the correct tempo for Boléro (he conducted it too fast for Ravel's liking, who said he should play it at the slower speed he had in mind, or not at all). In September, Ravel patched up the relationship and invited Toscanini to conduct the world premiere of the Piano Concerto for the Left Hand, but the conductor declined.\n[…]\nFrench classical pianist Roger Muraro performed the concerto during the 1986 International Tchaikovsky Competition. He placed fourth place in the competition.\n[…]\nLewis, Cary (August 1965). The Piano Concertos of Ravel (M.Mus.). North Texas State University. OCLC 42709867. Retrieved 24 April 2017.\n[…]\nPiano Concerto for the Left Hand: Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Concerto_para_piano_para_a_m%C3%A3o_esquerda_%28Ravel%29",
        "situacao": "ok",
        "texto": "O Concerto para piano para a mão esquerda em Ré Maior foi composto por Maurice Ravel entre 1929 e 1930.\n[…]\nFoi executado pela primeira vez em Viena em 5 de janeiro de 1932, por Paul Wittgenstein, e foi ainda este perseverante pianista quem o apresentou pela primeira vez em Paris, a 17 de janeiro de 1933, sob a regência de Ravel.\n[…]\nFoi composto, quase como um desafio, para o eminente pianista austríaco Paul Wittgenstein, que tinha perdido o braço direito num combate durante a Primeira Guerra Mundial e cuja carreira parecia terminada. Contudo, Wittgenstein, com admirável coragem, recusou conformar-se com o fato, e escreveu a vários compositores, pedindo-lhes que escrevessem músicas que ele pudesse tocar em tais circunstâncias.\n[…]\nPor essa ocasião, Maurice Ravel achava-se ocupado com a composição de um concerto para piano (para duas mãos): o em sol maior.\n[…]\nContudo, movido, pelo apelo, e cedendo ao seu amor inato pela experimentação e pelo incomum, Ravel ficou enormemente fascinado por esta prova técnica. Sem suspender a composição do outro concerto, pôs-se sem tardança a trabalhar a fim de escrever algo que pudesse atender às necessidades do pianista tão gravemente sacrificado.\n[…]\nÉ a orquestra, só, que faz, no começo do concerto, toda a exposição temática daquilo que irá sobrevir, tendo as primeiras páginas abri caminho por intermédio do contrafagote e demais sopros, seguidos pelos metais e violinos. A entrada do piano toma a forma de uma cadenza aprimorada e brilhante, seguida de passagens onde o instrumento solista alterna com a orquestra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Robert Schumann",
      "descricao": "Compositor e crítico musical alemão do Romantismo (1810–1856), marido da pianista Clara Schumann."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O alemão Robert Schumann sonhava ser um grande pianista, mas acabou se dedicando à composição. O que o impediu de seguir no piano?",
    "resposta": "Uma lesão na mão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Robert_Schumann"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Robert_Schumann",
        "situacao": "ok",
        "texto": "Robert Schumann (; German: [ˈʁoːbɐ̯t ˈʃuːman]; 8 June 1810 – 29 July 1856) was a German composer, pianist, and music critic of the early Romantic era. He composed in all the main musical genres of the time, writing for solo piano, voice and piano, chamber groups, orchestra, choir and the opera. His works typify the spirit of the Romantic era in German music.\n[…]\nMusically, Schumann got to know the works of Haydn, Mozart, Beethoven, and of living composers Carl Maria von Weber, with whom August Schumann tried unsuccessfully to arrange for Robert to study. August was not particularly musical but he encouraged his son's interest in music, buying him a Streicher grand piano and organising trips to Leipzig for a performance of Die Zauberflöte (The Magic Flute) and Carlsbad to hear the celebrated pianist Ignaz Moscheles.\n[…]\nShe inspired Schumann in his composing career, encouraging him to extend his range as a composer beyond solo piano works.\n[…]\nSchumann composed a substantial quantity of chamber pieces, of which the best-known and most performed are the Piano Quintet in E♭ major, Op. 44, the Piano Quartet in the same key (both 1842) and three piano trios, the first and second from 1847 and the third from 1851. The Quintet was written for and dedicated to Clara Schumann.\n[…]\nSchumann's birthplace in Zwickau is preserved as a museum in his honour. It hosts chamber concerts and is the focus of an annual festival commemorating him. The International Robert Schumann Competition for Piano and Voice was launched in Berlin in 1956, and later moved to Zwickau. Among the winners have been the pianists Dezső Ránki, Yves Henry and Éric Le Sage and the singers Siegfried Lorenz, Edith Wiens and Mauro Peter.\n[…]\nWorks by or about Robert Schumann at the Internet Archive (audio and video)\n[…]\nWorks by Robert Schumann at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Robert_Schumann",
        "situacao": "ok",
        "texto": "Robert Alexander Schumann (Zwickau, 8 de junho de 1810 — Endenich, 29 de julho de 1856) foi um pianista, compositor e crítico musical alemão. Era casado com a pianista e compositora Clara Schumann.\n[…]\nRobert Schumann é considerado um dos maiores compositores da era romântica. Schumann deixou os estudos de direito para seguir a carreira musical, como pianista virtuoso. Foi aluno do notável professor de piano Friedrich Wieck, o qual garantiu a Schumann que este poderia tornar-se o maior pianista da Europa. Mas o sonho foi interrompido por uma lesão nas mãos de Schumann, que passou a dedicar-se à carreira de compositor e crítico musical.\n[…]\nEm outras partes da Europa, Elgar chamou Schumann de \"meu ideal\", e o Concerto para Piano de Grieg é fortemente influenciado pelo de Schumann. Grieg escreveu que as canções de Schumann mereciam ser reconhecidas como \"grandes contribuições para a literatura mundial\", e Schumann foi uma grande influência na escola russa de compositores, incluindo Anton Rubinstein e Tchaikovsky.\n[…]\nO local de nascimento de Schumann em Zwickau é preservado como um museu em sua homenagem. Acolhe concertos de câmara e é o foco de um festival anual em sua homenagem. O Concurso Internacional Robert Schumann para Piano e Voz foi lançado em Berlim em 1956, e mais tarde mudou-se para Zwickau. Entre os vencedores estão os pianistas Dezső Ránki, Yves Henry e Éric Le Sage e os cantores Siegfried Lorenz, Edith Wiens e Mauro Peter.\n[…]\nAlexander Melnikov. Robert Schumann. Piano Concerto. Fortepian Erard da década de 1837, Streicher 1847\n[…]\nObras de Robert Schumann no International Music Score Library Project\n[…]\nObras de ou sobre Robert Schumann no Internet Archive (áudio e vídeo)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Sinfonia Leningrado",
      "descricao": "Sétima Sinfonia de Dmitri Shostakovich, de 1941, dedicada à cidade de Leningrado."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Sétima Sinfonia de Shostakovich, dedicada à cidade de Leningrado, nasceu em meio a qual episódio da Segunda Guerra?",
    "resposta": "O cerco nazista à cidade",
    "fonte": [
      "https://en.wikipedia.org/wiki/Symphony_No._7_(Shostakovich)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Symphony_No._7_(Shostakovich)",
        "situacao": "ok",
        "texto": "Dmitri Shostakovich's Symphony No. 7 in C major, Op. 60, nicknamed the Leningrad Symphony, was begun in Leningrad, completed in the city of Samara (then known as Kuybyshev) in December 1941, and premiered in that city on March 5, 1942. At first dedicated to Lenin, it was eventually submitted in honor of the besieged city of Leningrad, where it was first played under dire circumstances on August 9,\n[…]\nIn the Ken Russell film Billion Dollar Brain (1967), music from the Leningrad Symphony accompanies the failed military invasion of the Latvian Soviet Socialist Republic by Texas millionaire Midwinter (a pivotal scene reflecting the Battle of the Neva from Aleksandr Nevsky). Earlier on, Michael Caine as Harry Palmer attends the end of a concert of what is claimed to be the Leningrad Symphony, whereas in fact the finale from Shostakovich's Eleventh Symphony is heard.\n[…]\nIn 2015, M. T. Anderson wrote a book titled Symphony for the City of the Dead, a biography of both Shostakovich and Symphony No. 7. The book won several awards, including the Wall Street Journal's Best Book of the Year.\n[…]\nOn 31 January 2005, a film version of the Symphony premiered in St. Petersburg, with the St. Petersburg Academic Symphony Orchestra, conducted by Shostakovich's son Maxim Shostakovich, accompanying a film directed by Georgy Paradzhanov, constructed from documentary materials, including film of the siege of Leningrad. Many survivors of the siege were guests at the performance.\n[…]\nBlokker, Roy; Dearling, Robert (1979). The Music of Dmitri Shostakovich: The Symphonies. London: The Tantivy Press. ISBN 0-8386-1948-7.\n[…]\nGeiger, Friedrich, notes for Teldec 21467: Shostakovich: Symphony No. 7 \"Lenningrad\"; New York Philharmonic Orchestra conducted by Kurt Masur.\n[…]\nProgramme, Shostakovich 7th Symphony/Cinemaphonia, Albert Hall, London May 9, 2005.\n[…]\nShostakovich playing an excerpt from his Seventh Symphony on the piano"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sinfonia_n.%C2%BA_7_%28Shostakovich%29",
        "situacao": "ok",
        "texto": "A Sinfonia n.º 7 em dó maior (Opus 60), também conhecida como Leninegrado, foi uma sinfonia composta por Dmitri Shostakovich. A sinfonia foi dedicada à cidade de Leningrado, a 27 de Dezembro de 1941. Estreou mundialmente em 9 de Julho de 1942, nos Estados Unidos da América, numa interpretação da  Orquestra Sinfónica da NBC, dirigida por Arturo Toscanini.\n[…]\nNo seu tempo, a sinfonia era extremamente popular na Rússia e no Ocidente, como um símbolo da resistência ao totalitarismo e militarismo nazi. Como uma condenação da invasão alemã à União Soviética, a peça é particularmente representativa das responsabilidades políticas que Shostakovich sentia ter pelo estado, apesar dos conflitos e críticas que sofreu ao longo da sua carreira a partir dos censores soviéticos e Stalin.\n[…]\nDepois da guerra, a reputação da sinfonia decresceu substancialmente, devido à percepção do público como sendo propaganda de guerra, assim como devido à ideia de que se tratava de uma das obras menos conseguida de Shostakovich. Em anos mais recentes, estudiosos têm sugerido que a obra é melhor interpretada como uma descrição do totalitarismo e fascismo no geral. Esta interpretação é complicada visto não se saber ao certo quando a composição começou a ser elaborada.\n[…]\nÉ a maior sinfonia de Shostakovich e umas das maiores obras do seu repertório, com actuações que variam entre uma hora e uma hora e um quarto. A escala e escopo da obra é consistente com outras sinfonias do autor, assim como com as obras de compositores que mais lhe influenciaram, incluindo Bruckner, Mahler e Stravinsky.\n[…]\nA sinfonia está escrita nos quatro movimentos tradicionais:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Nessun Dorma",
      "descricao": "Ária para tenor do último ato da ópera Turandot, de Giacomo Puccini."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A ária Nessun Dorma, da ópera Turandot, ganhou fama popular como tema da cobertura da BBC em qual Copa do Mundo?",
    "resposta": "Copa de 1990, na Itália",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nessun_dorma"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nessun_dorma",
        "situacao": "ok",
        "texto": "\"Nessun dorma\" (Italian: [nesˌsun ˈdɔrma]; lit. 'Let no one sleep') is an aria from the final act of Italian composer Giacomo Puccini's opera Turandot (text by Giuseppe Adami and Renato Simoni) and one of the best-known tenor arias in all opera. It is sung by Calaf, il principe ignoto (the unknown prince), who falls in love at first sight with the beautiful but cold Princess Turandot. Any man who \n[…]\nAlthough \"Nessun dorma\" had long been a staple of operatic recitals, Luciano Pavarotti popularised the piece beyond the opera world in the 1990s following his performance of it for the 1990 FIFA World Cup. Both Pavarotti and Plácido Domingo released singles of the aria; Pavarotti's reached number 2 in the UK, and it appeared on the best-selling classical album of all time, The Three Tenors in Concert.\n[…]\nAlthough Pavarotti sang the role of Calaf on stage only twice (first in 1977 at the San Francisco Opera under Riccardo Chailly with Montserrat Caballe as Turandot, and then twenty years later at the Met under James Levine opposite Jane Eaglen as Turandot,) \"Nessun dorma\" became his signature aria and a sporting anthem in its own right, especially for football. Pavarotti notably sang the aria during the first Three Tenors concert on the eve of the 1990 FIFA World Cup Final in Rome.\n[…]\nPavarotti gave a rendition of \"Nessun dorma\" at his final performance, the finale of the 2006 Winter Olympics opening ceremony, although it was later revealed that he had lip-synched the specially pre-recorded performance as it was too cold for him to sing live. His Decca recording of the aria was played at his funeral during the flypast by the Italian Air Force. In 2013, the track was certified gold by the Federation of the Italian Music Industry.\n[…]\nIn 2007, Chris Botti recorded a trumpet version of the aria for his album Italia."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nessun_dorma",
        "situacao": "ok",
        "texto": "\"Nessun dorma\" (em italiano: [nesˌsun ˈdɔrma]; lit. Que ninguém durma) é uma ária do ato final da ópera Turandot, do compositor italiano Giacomo Puccini (texto de Giuseppe Adami e Renato Simoni), e uma das árias para tenor mais conhecidas de toda a ópera. É cantada por Calaf, il principe ignoto (o príncipe desconhecido), que se apaixona à primeira vista pela bela, porém fria, princesa Turandot.\n[…]\nEmbora \"Nessun dorma\" já fosse um clássico dos recitais de ópera, Luciano Pavarotti popularizou a peça para além do mundo da ópera na década de 1990, após sua apresentação na Copa do Mundo FIFA de 1990, que cativou o público global. Tanto Pavarotti quanto Plácido Domingo lançaram singles da ária; o de Pavarotti alcançou o segundo lugar no Reino Unido, e ela apareceu no álbum clássico mais vendido de todos os tempos, The Three Tenors in Concert.\n[…]\n\"Nessun dorma\" alcançou o status de música pop depois que a gravação de Luciano Pavarotti em 1972 foi usada como tema da cobertura da BBC da Copa do Mundo FIFA de 1990 na Itália. Posteriormente, alcançou o 2º lugar na parada de singles do Reino Unido.\n[…]\nPavarotti cantou a ária notavelmente durante o primeiro concerto dos Três Tenores na véspera da final da Copa do Mundo FIFA de 1990 em Roma. Para um bis, ele apresentou a ária novamente, revezando-se com José Carreras e Plácido Domingo. A imagem de três tenores em trajes formais cantando em um concerto da Copa do Mundo cativou o público global.\n[…]\nPavarotti apresentou uma versão de \"Nessun dorma\" em sua última apresentação, o encerramento da cerimônia de abertura dos Jogos Olímpicos de Inverno de 2006, embora tenha sido revelado posteriormente que ele havia dublado a apresentação especialmente pré-gravada, pois estava muito frio para ele cantar ao vivo. Sua gravação da ária pela Decca foi tocada em seu funeral durante a passagem da Força Aérea Italiana.\n[…]\n«Mario del Monaco cantando Nessun Dorma»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "O Aprendiz de Feiticeiro",
      "descricao": "Poema sinfônico do compositor francês Paul Dukas, de 1897, baseado num poema de Goethe."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No filme Fantasia, de 1940, que personagem da Disney protagoniza o trecho embalado por O Aprendiz de Feiticeiro, de Paul Dukas?",
    "resposta": "Mickey Mouse",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Sorcerer%27s_Apprentice_(Dukas)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Sorcerer%27s_Apprentice_(Dukas)",
        "situacao": "ok",
        "texto": "The Sorcerer's Apprentice (French: L'Apprenti sorcier) is a symphonic poem by the French composer Paul Dukas, completed in 1897. Subtitled \"Scherzo after a ballad by Goethe\", the piece is based on Johann Wolfgang von Goethe's 1797 poem named \"Der Zauberlehrling\". By far the most performed and recorded of Dukas' works, its notable appearance in the Walt Disney 1940 animated film Fantasia has led to\n[…]\nAlthough The Sorcerer's Apprentice was already a popular concert piece, it was brought to a much larger audience through its inclusion, as one of eight animated shorts based on classical music, in the 1940 Walt Disney animated concert film Fantasia. In the film segment, also called “The Sorcerer’s Apprentice,” Mickey Mouse plays the role of the apprentice.\n[…]\nDisney had acquired the music rights in 1937 when he planned to release a separate Mickey Mouse film which, at the suggestion of Leopold Stokowski, was eventually expanded into Fantasia.\n[…]\nIt was reproduced in Fantasia 2000 as the only segment from the original film to be used in the movie as it uses seven new segments conducted by Stokowski's successor James Levine.\n[…]\nIn 1930, a decade prior to Fantasia, Sidney Levee directed, Hugo Riesenfeld and William Cameron Menzies produced, and Joseph M. Schenck presented a series of four short films of classical music. One of the four, based on the Dukas music, was titled The Wizard's Apprentice; this short film has been released on DVD and shown on Classic Arts Showcase. In 1931, the Dukas piece was used in Study No. 8 by Oskar Fischinger.\n[…]\nThe Sorcerer's Apprentice: Scores at the International Music Score Library Project"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Pompa e Circunstância",
      "descricao": "Série de marchas para orquestra do compositor inglês Edward Elgar, iniciada em 1901."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos Estados Unidos, a marcha Pompa e Circunstância, do inglês Edward Elgar, é tradicionalmente tocada em que tipo de cerimônia?",
    "resposta": "Formaturas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pomp_and_Circumstance_Marches"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pomp_and_Circumstance_Marches",
        "situacao": "ok",
        "texto": "The Pomp and Circumstance Marches are a series of five marches for orchestra composed by Edward Elgar between 1901 and 1930, together with a sixth march created in 2006 by Anthony Payne from Elgar's sketches. The five original marches were dedicated to the composer's  friends the conductor Alfred E. Rodewald,  the composer Granville Bantock and the organists Ivor Atkins, G. R. Sinclair and Percy H\n[…]\nElgar took the phrase \"Pomp and Circumstance\" from Act 3, Scene 3 of Shakespeare's Othello:\n[…]\nThe Pomp and Circumstance marches are\n[…]\nElgar left sketches for a sixth Pomp and Circumstance march, to be the final work in the set.\n[…]\nIn 2006, the score and sketches were turned into a performing version. Payne observed in his programme notes that \"Nowhere else in the Pomp and Circumstance marches does Elgar combine compound and duple metres in this way\". Payne concluded the piece with a brief allusion to the first Pomp and Circumstance March. The world premiere of Payne's version was on 2 August 2006 with Sir Andrew Davis conducting the BBC Symphony Orchestra at the BBC Proms in the Royal Albert Hall.\n[…]\nThe historian Bernard Porter takes a different position, rejecting any depiction of the Elgar of the marches as \"a jingoistic tub-thumper, a manifestation of the worst aspects of late Victorian and Edwardian bombast\". The Elgar scholar Daniel M. Grimley has commented that it is \"especially difficult to listen to the Pomp and Circumstance marches with neutral ears given this highly polarized reception history\".\n[…]\nElgar, Edward (1930). Pomp and Circumstance March No 5. London: Boosey and Hawkes. OCLC 1123998670.\n[…]\nElgar, Edward (1992). Enigma Variations and Pomp and Circumstance Marches. New York: Dover. ISBN 0-48-627342-3.\n[…]\nPomp and Circumstance Marches: Scores at the International Music Score Library Project\n[…]\nElgar conducting the Trio section of Pomp and Circumstance No.1 in 1931 on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marchas_de_Pompa_e_Circunst%C3%A2ncia",
        "situacao": "ok",
        "texto": "As Marchas de Pompa e Circunstância (em inglês Pomp and Circumstance Military Marches), Opus 39, são seis marchas compostas para orquestra por Edward Elgar cujo título é inspirado num trecho do terceiro ato de Otelo de Shakespeare. A primeira marcha foi apresentada pela primeira vez em Liverpool em 1901.\n[…]\nMais outras três foram apresentadas até 1907, quando Elgar estava na casa dos quarenta; a quinta foi publicada em 1930, alguns anos antes de sua morte; e a sexta, compilada postumamente a partir de esboços, foi publicada em 2005-2006.\n[…]\nEm Portugal, esta marcha foi usada no primeiro congresso do CDS em 1975 no Palácio de Cristal, no Porto. Congresso esse, invadido por manifestantes da extrema-esquerda. Isto após um ano de uma das mais importantes revoluções do país.\n[…]\nAs 6 marchas são:\n[…]\nMarcha No. 1 em Ré maior (1901)\n[…]\nMarcha No. 2 em Lá menor (1901)\n[…]\nMarcha No. 3 em Dó menor (1904)\n[…]\nMarcha No. 4 em Sol maior (1907)\n[…]\nMarcha No. 5 em Dó maior (1930)\n[…]\nMarcha No. 6 em Sol menor (escrita como esboço, elaborado por Anthony Payne em 2005-06)\n[…]\nAs cinco primeiras foram todos publicados pela Boosey & Co. como Elgar's Op. 39, e cada uma das marchas é dedicada a um amigo musical particular de Elgar.\n[…]\nCada marcha tem cerca de cinco minutos de duração.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "As Quatro Estações",
      "descricao": "Conjunto de quatro concertos para violino de Antonio Vivaldi, publicado em 1725."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Qual estação do ano abre o ciclo de concertos As Quatro Estações, de Vivaldi?",
    "resposta": "Primavera",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Four_Seasons_(Vivaldi)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Four_Seasons_(Vivaldi)",
        "situacao": "ok",
        "texto": "The Four Seasons (Italian: Le quattro stagioni) is a group of four violin concerti by Italian composer Antonio Vivaldi, each of which gives musical expression to a season of the year. These were composed around 1718–1723, when Vivaldi was the court chapel master in Mantua. They were published in 1725 in Amsterdam in what was at the time the Dutch Republic, together with eight additional concerti, \n[…]\nThe Four Seasons is the best known of Vivaldi's works. The inspiration for the concertos is not the countryside around Mantua, as initially supposed, where Vivaldi was living at the time, since according to Karl Heller they could have been written as early as 1716–1717, while Vivaldi was engaged with the court of Mantua only in 1718.\n[…]\nVivaldi's arrangement is as follows:\n[…]\nConcerto No. 1 in E major, Op. 8, RV 269, \"Spring\" (La primavera)\n[…]\nThe Four Seasons is used in the eponymous 1981 film, along with other Vivaldi concertos for flute.\n[…]\nRCA Records released Vivaldi's Greatest Hit: The Ultimate Four Seasons, a 23-track album containing all four violin concerti and eleven different musicians' cover versions of selected movements. The album cover was illustrated by MUTTS creator Patrick McDonnell.\n[…]\nVivaldi and Italian Baroque specialists, La Serenissima (UK), \"Winter\" from the Manchester version of The Four Seasons was sampled in a Beats by Dre advertisement.\n[…]\nIn December 2025 Opera Philadelphia staged an opera adaptation, The Seasons, at the Kimmel Center which expanded the work around the theme of climate change; crafting a pastiche by combing opera arias by Vivaldi with the complete music from The Four Seasons. It was conceptualized by the work's librettist, the playwright Sarah Ruhl, and Opera Philadelphia director, Anthony Roth Costanzo.\n[…]\nMedia related to The Four Seasons (Vivaldi) at Wikimedia Commons\n[…]\nThe Four Seasons: Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/As_Quatro_Esta%C3%A7%C3%B5es",
        "situacao": "ok",
        "texto": "Le quattro stagioni, conhecidos em português como As Quatro Estações, são quatro concertos para violino e orquestra do compositor italiano Antonio Vivaldi, compostos em 1723 e parte de uma série de doze publicados em Amsterdão em 1725, intitulada Il cimento dell'armonia e dell'inventione.\n[…]\nAo contrário da maioria dos concertos de Vivaldi, esses quatro têm um programa claro: vinham acompanhados por um soneto ilustrativo impresso na parte do primeiro violino, cada um sobre o tema da respectiva estação. Não se sabe a origem ou autoria desses poemas, mas especula-se que o próprio Vivaldi os tenha escrito.\n[…]\nAs Quatro Estações é a obra mais conhecida do compositor, e está entre as peças mais populares da música barroca.\n[…]\nO arranjo de Vivaldi é o seguinte:\n[…]\nConcerto No. 1 em Mi maior, op. 8, RV 269, \"La primavera\" (Primavera)\n[…]\nConcerto No. 2 em Sol menor, op. 8, RV 315, \"L'estate\" (Verão)\n[…]\nConcerto No. 3 em Fá Maior, op. 8, RV 293, \"L'autunno\" (Outono)\n[…]\nConcerto No. 4 em Fá menor, op. 8, RV 297, \"L'inverno\" (Inverno)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Sinfonia Pastoral",
      "descricao": "Sexta Sinfonia de Ludwig van Beethoven, de 1808, inspirada na vida no campo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Sexta Sinfonia de Beethoven, a Pastoral, que fenômeno da natureza interrompe a festa dos camponeses?",
    "resposta": "Uma tempestade",
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
        "texto": "A sinfonia nº 6 em Fá Maior, opus 68 de Ludwig van Beethoven, também chamada Sinfonia Pastoral, é uma obra musical precursora da música programática. Esta sinfonia foi completada em 1808 e teve a sua primeira apresentação no \"Theater an der Wien\" em 22 de dezembro de 18081.\n[…]\nDividida em cinco movimentos, tem por propósito descrever a sensação experimentada nos ambientes rurais. Beethoven insistia que essas obras não deveriam ser interpretadas como um \"quadro sonoro\", mas como uma expressão de sentimentos. É uma das mais conhecidas obras da fase romântica de Beethoven.\n[…]\nAllegro - \"A tempestade\"\n[…]\nAllegretto - \"Hino de ação de graças dos pastores, após a tempestade\"\n[…]\nAnálise da relação música/imagem em fantasia A sinfonia pastoral de Beethoven (em português)\n[…]\nJones, David W. (1996). Beethoven: Symphony No. 9 (Cambridge Music Handbooks). Cambridge University Press. p. 1. ISBN 978-0-521-45684-5.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Quarteto de cordas",
      "descricao": "Formação de música de câmara com quatro instrumentos de cordas, consagrada por Haydn no período clássico."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Um quarteto de cordas clássico tem dois violinos, um violoncelo e qual outro instrumento?",
    "resposta": "Viola",
    "fonte": [
      "https://en.wikipedia.org/wiki/String_quartet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/String_quartet",
        "situacao": "ok",
        "texto": "The term string quartet is a type of musical composition or a group of four people who play the quartets. Many composers from the mid-18th century onwards wrote string quartets. The associated musical ensemble consists of two violinists, a violist, and a cellist.\n[…]\nBy the early 18th century, composers were often adding a third soloist; and moreover it became common to omit the keyboard part, letting the cello support the bass line alone. Thus when Alessandro Scarlatti wrote a set of six works entitled Sonata à Quattro per due Violini, Violetta [viola], e Violoncello senza Cembalo (Sonata for four instruments: two violins, viola, and cello without harpsichord), this was a natural evolution from the existing tradition.\n[…]\nAfter these early efforts, Haydn did not return to the string quartet for several years, but when he did so, it was to make a significant step in the genre's development. The intervening years saw Haydn begin his employment as Kapellmeister to the Esterházy princes, for whom he was required to compose numerous symphonies and dozens of trios for violin, viola, and the bass instrument called the baryton (played by Prince Nikolaus Esterházy himself).\n[…]\nThe string quintet is a string quartet augmented by a fifth string instrument. Mozart employed two violas in his string quintets, while Schubert's string quintet utilized two cellos. Boccherini wrote a few quintets with a double bass as the fifth instrument. Most of Boccherini's string quintets are for two violins, viola, and two cellos. Another composer who wrote a string quintet with two cellos is Ethel Smyth.\n[…]\nThe string trio has one violin, a viola, and a cello.\n[…]\nAnton Arensky's Second String Quartet in A minor, unusually scored for violin, viola and two cellos (1894)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quarteto_de_cordas",
        "situacao": "ok",
        "texto": "Quarteto de cordas é um grupo musical de quatro instrumentos de corda - quase sempre dois violinos, uma viola e um violoncelo - ou uma peça escrita para ser executada por tal grupo. O quarteto de cordas é um dos grupos de câmara de mais destaque na música clássica.\n[…]\nEmbora qualquer combinação de quatro instrumentos de corda possa ser chamada literalmente de \"quarteto de cordas\", na prática o termo se refere ao grupo que consiste de dois violinos (o \"primeiro\", que normalmente toca a linha melódica no registro de notas mais alto, e o \"segundo\" violino, que toca as notas mais graves da harmonia), uma viola e um violoncelo.\n[…]\nCaso o compositor crie música para quatro outros instrumentos de corda, como três violinos e um contrabaixo, ou violino, viola, violoncelo e violão, a instrumentação é geralmente indicada. O quarteto de cordas em sua formação padrão é considerado como uma das formas mais importantes de música de câmara, e a maioria dos compositores desde o fim do século XVII compuseram neste formato, como Haydn.\n[…]\nDiversos outros grupos de câmara podem ser vistos como modificações do quarteto de cordas, como o quinteto para piano, que nada mais é que um quarteto de cordas com o acréscimo de um piano; o quinteto de cordas, que é um quarteto de cordas com a adição duma viola, violoncelo ou contrabaixo; o trio de cordas, que contém um violino, uma viola e um violoncelo; e o quarteto para piano, um quarteto de cordas com a substituição dum dos violinos por um piano.\n[…]\n«Greg Sandow - Introdução aos quartetos de cordas» (em inglês)\n[…]\n«Quartetos de corda de Beethoven» (em inglês)\n[…]\n«Amostras de quartetos de cordas de compositores menos conhecidos»  - E.G. Onslow, Viotti, Rheinberger, Gretchaninov, A.Taneyev, Kiel, Busoni, entre outros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Heitor Villa-Lobos",
      "descricao": "Compositor brasileiro (1887–1959), autor das Bachianas Brasileiras e dos Choros."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na infância, usando uma viola adaptada, Villa-Lobos aprendeu com o pai a tocar qual instrumento de orquestra?",
    "resposta": "Violoncelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Heitor_Villa-Lobos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Heitor_Villa-Lobos",
        "situacao": "ok",
        "texto": "Heitor Villa-Lobos (March 5, 1887 – November 17, 1959) was a Brazilian composer, conductor, cellist, and classical guitarist described as \"the single most significant creative figure in 20th-century Brazilian art music\". Villa-Lobos has globally become one of the most recognizable South American composers in music history. A prolific composer, he wrote many orchestral, chamber, instrumental and vo\n[…]\nBéhague, Gerard. 2001. \"Villa-Lobos, Heitor\". The New Grove Dictionary of Music and Musicians, edited by Stanley Sadie and John Tyrrell. London: Macmillan.\n[…]\nHeitor Villa-Lobos website..\n[…]\nLopes, Luiz Fernando (July 25, 2022), \"Villa-Lobos, Heitor\", Oxford Music Online, Oxford University Press, ISBN 978-1-56159-263-0, retrieved May 1, 2025\n[…]\nTarasti, Eero. 1995. Heitor Villa-Lobos: The Life and Works Jefferson, North Carolina: McFarland. ISBN 0-7864-0013-7.\n[…]\nVilla-Lobos, Heitor. [1941?]. A música nacionalista no govêrno Getulio Vargas. Rio de Janeiro: D.I.P.\n[…]\nYang, Shu-Ting. 2007. \"Salute to Bach: Modern Treatments of Bach-Inspired Elements in Luigi Dallapiccola's Quaderno Musicale di Annalibera and Heitor Villa-Lobos' Bachianas Brasileiras No. 4\". DMA diss. Cincinnati: University of Cincinnati. Retrieved November 25, 2017.\n[…]\nHeitor Villa-Lobos at IMDb\n[…]\nPeermusic Classical: Heitor Villa-Lobos Composer's Publisher and Bio\n[…]\nFree scores by Heitor Villa-Lobos at the International Music Score Library Project (IMSLP)\n[…]\n\"O acorde de Tristão em Villa-Lobos\" by Paulo de Tarso Salles. Violão Intercâmbio 12, no. 8 (archive from March 7, 2008, accessed November 19, 2015).\n[…]\nHeitor Villa-Lobos e o ambiente artístico parisiense: convertendo-se em um músico brasileiro by Paulo Renato Guérios (in Portuguese)\n[…]\nHeitor Villa-Lobos and the Parisian art scene: how to become a Brazilian musician by Paulo Renato Guérios (in English)\n[…]\nThe Villa-Lobos Magazine: News about Heitor Villa-Lobos on the web and in the Real World."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Heitor_Villa-Lobos",
        "situacao": "ok",
        "texto": "Heitor Villa-Lobos (Rio de Janeiro, 5 de março de 1887 – Rio de Janeiro, 17 de novembro de 1959) foi um compositor, maestro, violoncelista, pianista e violonista brasileiro, descrito como \"a figura criativa mais significativa do Século XX na música clássica brasileira\", e se tornando o compositor sul-americano mais conhecido de todos os tempos. Compositor prolífico, escreveu numerosas obras orques\n[…]\nFilho de Noêmia Monteiro Villa-Lobos e Raul Villa-Lobos, que era filho de imigrantes espanhóis, Heitor foi desde cedo incentivado aos estudos, pois sua mãe queria vê-lo médico. No entanto, Raul Villa-Lobos, pai do compositor, funcionário da Biblioteca Nacional e músico amador, deu-lhe instrução musical e adaptou uma viola para que o pequeno Heitor iniciasse seus estudos de violoncelo.\n[…]\nAos 13 anos, órfão de pai, Villa-Lobos passou a tocar violoncelo em teatros, cafés e bailes; paralelamente, interessou-se pela intensa musicalidade dos \"chorões\", representantes da melhor música popular do Rio de Janeiro, e, neste contexto, desenvolveu-se também no violão. De temperamento inquieto, empreendeu desde cedo escapadas pelo interior do Brasil, primeiras etapas de um processo de absorção de todo o universo musical brasileiro.\n[…]\nAs publicações de Villa-Lobos na era Vargas incluíam propaganda pela nacionalidade brasileira (brasilidade), e teoria musical. O seu Guia Prático publicou 11 volumes, Solfejos (2 volumes, 1942 e 1946) contendo exercícios de canto, e Canto Orfeônico (1940 e 1950) contendo músicas patrióticas para escolas e eventos civis. A sua música para o filme O Descobrimento do Brasil de 1936, que inclui versões de composições antigas, foi também adaptada para suíte orquestral.\n[…]\n«VIDA & OBRA DE HEITOR VILLA-LOBOS». Biografia e obras completas comentadas no CD-ROM\n[…]\n«Museu Villa-Lobos»\n[…]\n«Sitio Villa-Lobos.pt»\n[…]\nObras de Heitor Villa-Lobos no International Music Score Library Project",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Saxofone",
      "descricao": "Instrumento de sopro de metal com palheta simples, inventado pelo belga Adolphe Sax na década de 1840."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Embora seja feito de metal, o saxofone pertence a qual família de instrumentos?",
    "resposta": "Madeiras",
    "distratores": [
      "Metais",
      "Percussão",
      "Teclados"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Saxophone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saxophone",
        "situacao": "ok",
        "texto": "The saxophone (often referred to colloquially as the sax) is a type of single-reed woodwind instrument with a conical body, usually made of brass. As with all single-reed instruments, sound is produced when a reed on a mouthpiece vibrates to produce a sound wave inside the instrument's body. The pitch is controlled by opening and closing holes in the body to change the effective length of the tube\n[…]\nInexpensive keyless folk versions of the saxophone made of bamboo (recalling a chalumeau) were developed in the 20th century by instrument makers in Hawaii, Jamaica, Thailand, Indonesia, Ethiopia, and Argentina. The Hawaiian instrument, called a xaphoon, was invented during the 1970s and is also marketed as a \"bamboo sax\", although its cylindrical bore more closely resembles that of a clarinet and its lack of any keywork makes it more akin to a recorder.\n[…]\nJamaica's best known exponent of a similar type of homemade bamboo \"saxophone\" was the mento musician and instrument maker Sugar Belly (William Walker). In the Minahasa region of the Indonesian island of Sulawesi, there exist entire bands made up of bamboo \"saxophones\" and \"brass\" instruments of various sizes. These instruments are imitations of European instruments, made using local materials. Similar instruments are produced in Thailand.\n[…]\nIn Argentina, Ángel Sampedro del Río and Mariana García have produced bamboo saxophones of various sizes since 1985. Many synthesizer wind controllers are played and fingered like a saxophone, such as the Electronic Wind Instrument (EWI). A double reed instrument known as the rothphone and a brass instrument known as the jazzophone are both shaped similarly to an alto or tenor saxophone.\n[…]\n\"Instruments In Depth: The Saxophone\" – an online feature with video demonstrations from Bloomingdale School of Music (June 2009)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saxofone",
        "situacao": "ok",
        "texto": "Saxofone, também conhecido popularmente como sax, é um instrumento de sopro patenteado em 1846 pelo belga Adolphe Sax, um respeitado fabricante de instrumentos, que viveu na França no século XIX. Os saxofones são instrumentos transpositores, ou seja, a nota escrita não é a mesma nota que ouvimos (som real ou nota de efeito). A maior parte dos saxofones são em Si♭ (como o saxofone tenor) ou em Mi♭ \n[…]\nA família do saxofone é extensa. Todos os membros compartilham a mesma digitação e a escrita é sempre em clave de sol, variando a transposição de acordo com o registro do instrumento. Dentre os sete instrumentos originalmente produzidos (família de Banda militar dos saxofones), há:\n[…]\nRecentemente, foi criado o Saxofone Octa Contrabaixo, com o objetivo de se tornar o membro mais grave de toda a família. O som deste saxofone soa uma oitava abaixo do Saxofone Contrabaixo, tendo extensão até o A Grave (que soa C). Este modelo é afinado em E♭. Ainda não há registros deste instrumento em bandas ou outras organizações musicais.\n[…]\nSaxofone Mezzo-soprano, também conhecido como Alto em fá. Faz parte da família orquestral\n[…]\nA boquilha é a peça que se encaixa na extremidade mais fina do saxofone e na qual é fixada a palheta. Seu funcionamento é semelhante ao de um apito, que gera as vibrações que irão percorrer o corpo do instrumento. As boquilhas podem ser fabricadas em diversos materiais: massa plástica, metais, acrílico, madeira, vidro e até mesmo osso, contudo as de massa plástica e de metais são as mais utilizadas.\n[…]\nAs palhetas são fabricadas com madeira, geralmente cana ou bambu, porém existe palhetas sintéticas, como a Fibracell, feita de um material de fibra e a Légere e Bari, confeccionada em acrílico. Existem numerações para determinar o nível de dureza e de resistência à envergadura de uma palheta, mas esta numeração não é padronizada, varia de fabricante para fabricante.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Va, pensiero",
      "descricao": "Coro dos escravos hebreus do terceiro ato da ópera Nabucco, de Giuseppe Verdi, de 1842."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em 1901, nas homenagens fúnebres a Verdi, milhares de pessoas cantaram qual coro de Nabucco, sobre os hebreus exilados?",
    "resposta": "Va, pensiero",
    "fonte": [
      "https://en.wikipedia.org/wiki/Va,_pensiero"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Va,_pensiero",
        "situacao": "ok",
        "texto": "\"Va, pensiero\" (Italian: [ˈva penˈsjɛːro]), also known as the \"Chorus of the Hebrew Slaves\", is a chorus from the opera Nabucco (1842) by Giuseppe Verdi. It recollects the period of Babylonian captivity after the destruction of Solomon's Temple in Jerusalem in 586 BC.\n[…]\nVerdi composed Nabucco at a difficult moment in his life. His wife and children had all just died of various illnesses. Despite a purported vow to abstain from opera-writing, he had contracted with La Scala to write another opera and the director, Bartolomeo Merelli, forced the libretto into his hands. Returning home, Verdi happened to open the libretto at \"Va, pensiero\" and seeing the phrase, he heard the words singing.\n[…]\nWhen Verdi died, onlookers in Milan's streets spontaneously began singing \"Va, pensiero\" as his funeral procession passed by. A month later, when he was reinterred alongside his wife at the Casa di Riposo, young Arturo Toscanini conducted a choir of 820 singing the hymn.\n[…]\nOther recent research has discussed several of Verdi's works from the 1840s (including Giovanna d'Arco and Attila) emphasising their ostensible political meaning. Work by Philip Gossett on choruses of the 1840s also suggests that recent revisionist approaches to Verdi and the Risorgimento may have gone too far in their thorough dismissal of the political significance of \"Va, pensiero\".\n[…]\nIn 2011, after conducting \"Va, pensiero\" during a performance of Nabucco at the Teatro dell'Opera in Rome, Riccardo Muti made a short speech protesting cuts in Italy's arts budget, then asked the audience to sing along in support of culture and patriotism.\n[…]\nBudden, Julian. The Operas of Verdi, Vol. 1. London: Cassell Ltd, 1973. pp. 89–112. ISBN 0-304-31058-1\n[…]\nMedia related to \"Va, pensiero\" at Wikimedia Commons"
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
    "indice": 50,
    "ancora": {
      "nome": "Piano",
      "descricao": "Instrumento de teclado em que martelos percutem cordas, inventado na Itália por volta de 1700."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Somando as brancas e as pretas, quantas teclas tem um piano moderno padrão?",
    "resposta": "Oitenta e oito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano",
        "situacao": "ok",
        "texto": "A piano is a keyboard instrument that produces sound when its keys are pressed, activating an action mechanism where hammers strike strings. Modern pianos have a row of 88 black and white keys—with the exception of the Bosendörfer and Stuart & Sons pianos—and tuned to a chromatic scale in equal temperament. A musician who specializes in piano is called a pianist.\n[…]\nOnly about 60 Emánuel Moór Pianofortes were made, mostly by Bösendorfer. Other piano manufacturers, such as Bechstein, Chickering, and Steinway & Sons, also manufactured a few.\n[…]\nStarting in Beethoven's later career, the fortepiano evolved into an instrument more like the modern piano. Modern pianos were in wide use by the late 19th century. They featured an octave range larger than the earlier fortepiano instrument, adding around 30 more keys to the instrument, which extended the deep bass range and the high treble range. Factory mass production of upright pianos made them more affordable for a larger number of middle-class people.\n[…]\nDuring the 19th century, American musicians playing for working-class audiences in small pubs and bars, particularly African-American composers, developed new musical genres based on the modern piano. Ragtime music, popularized by composers such as Scott Joplin, reached a broader audience by 1900. The popularity of ragtime music was quickly succeeded by jazz piano. New techniques and rhythms were invented for the piano, including ostinato for boogie-woogie, and Shearing voicing.\n[…]\nAt a 2023 auction in Sotheby's in London, Mercury's Yamaha baby grand piano, which he used to compose \"Bohemian Rhapsody\" among other Queen songs, sold for £1.7 million ($2.1 million), which Sotheby's state is a record for a composer's piano. Modernist styles of music have also appealed to composers writing for the modern grand piano, including John Cage and Philip Glass."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Piano",
        "situacao": "ok",
        "texto": "Piano, apócope derivado do italiano pianoforte, é um instrumento musical de cordas percussivas, segundo o sistema de classificação de Hornbostel-Sachs.\n[…]\nOs pianos modernos, embora não se diferenciem dos mais antigos no que se refere aos tons, trazem novos formatos estéticos e de materiais que compõem o instrumento. Um piano comum tem, geralmente, oito lás, oito sis bemóis, oito sis, oito dós, sete dós sustenidos, sete rés, sete mis bemóis, sete mis, sete fás, sete fás sustenidos, sete sóis e sete sóis sustenidos, formando um total de 88 notas musicais.\n[…]\nSe for um de 97 notas musicais, do tipo Bösendorfer 290, ele terá nove dós, oito dós sustenidos, oito rés, oito mis bemóis, oito mis, oito fás, oito fás sustenidos, oito sóis, oito sóis sustenidos, oito lás, oito sis bemóis e oito sis.\n[…]\nPraticamente todos os pianos modernos têm 88 teclas (sete oitavas mais uma terça menor, desde o Lá-2 (ou A0 científico) (27,5 Hz) ao Dó 7 (ou C8 científico) (4 186 Hz)). Muitos pianos mais antigos têm 84 teclas (exatamente sete oitavas, desde o Lá-2 (A0 científico) (27,5 Hz) ao Lá 6 (A7 científico) (3 520 Hz). Também existem pianos com oito oitavas, da marca austríaca Bösendorfer ou de marca francesa Stephen Paulello.\n[…]\nTradicionalmente, as teclas das notas naturais (dó, ré, mi, fá, sol, lá e si) são brancas, e as teclas dos acidentes (dó ♯, ré ♯, fá ♯, sol ♯ e lá ♯ na ordem dos sustenidos e as correspondentes ré ♭, mi ♭, sol ♭, lá ♭ e si ♭ na ordem dos bemóis) são da cor preta, feitas de madeira, sendo as pretas revestidas geralmente por ébano e as brancas de marfim (já em desuso e proibido no mundo) ou de material plástico.\n[…]\nHistória do Piano",
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
