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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Wolfgang Amadeus Mozart",
      "descricao": "Compositor austríaco do período clássico, nascido em Salzburgo em 1756."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Mozart foi uma criança prodígio. Segundo os relatos da família, com que idade ele já compunha suas primeiras peças para teclado?",
    "resposta": "Cinco anos",
    "distratores": [
      "Oito anos",
      "Dez anos",
      "Doze anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
        "situacao": "ok",
        "texto": "Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791) was a Classical composer and musician. He completed more than 800 works in his life—including outstanding examples of most of the genres of his time: symphonies, concertos, chamber music, opera and choral music. He is regarded as one of the greatest composers in the history of Western music.\n[…]\nWolfgang Amadeus Mozart was born on 27 January 1756 to Leopold Mozart and Anna Maria (née Pertl) at Getreidegasse 9 in Salzburg. Salzburg was the capital of the Archbishopric of Salzburg, an ecclesiastical principality within the Holy Roman Empire, located in what is now Austria. He was the youngest of seven children, five of whom died in infancy. His elder sister was Maria Anna Mozart, nicknamed \"Nannerl\". Mozart was baptised the day after his birth, at St. Rupert's Cathedral in Salzburg.\n[…]\nThe baptismal record gives his name in Latinised form, as Joannes Chrysostomus Wolfgangus Theophilus Mozart. He generally called himself \"Wolfgang Amadè Mozart\" as an adult, but his name had many variants.\n[…]\nFranz Xaver Wolfgang Mozart (26 July 1791 – 29 July 1844)\n[…]\nWolfgang Amadeus Mozart at IMDb\n[…]\nWolfgang Amadeus Mozart: Treasures from the Mozarteum Foundation of Salzburg 2026 exhibition at the Morgan Library & Museum\n[…]\nWorks by Wolfgang Amadeus Mozart at Project Gutenberg\n[…]\nWorks by or about Wolfgang Amadeus Mozart at the Internet Archive\n[…]\nWorks by Wolfgang Amadeus Mozart at LibriVox (public domain audiobooks)\n[…]\nLetters of Leopold Mozart und Wolfgang Amadeus Mozart (in German) (Baden State Library)\n[…]\nFree scores by Wolfgang Amadeus Mozart at the International Music Score Library Project (IMSLP)\n[…]\nFree scores by Wolfgang Amadeus Mozart in the Choral Public Domain Library (ChoralWiki)\n[…]\nThe Mutopia Project has compositions by Wolfgang Amadeus Mozart\n[…]\nWolfgang Amadeus Mozart at the Musopen project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
        "situacao": "ok",
        "texto": "Wolfgang Amadeus Mozart (AFI: ), batizado Johannes Chrysostomus Wolfgangus Theophilus Mozart, (Salzburgo, 27 de janeiro de 1756 – Viena, 5 de dezembro de 1791) foi um compositor, músico, professor de música e maestro austríaco do período clássico.\n[…]\nLeopold era um professor de primeira linha e a educação musical que proveu para seu filho foi em todos os aspectos completa, e a presença da música na vida familiar era constante, tanto pela prática doméstica como pelas inúmeras atividades sociais em que a família se engajava, frequentemente envolvendo a música. O pequeno Mozart aprendeu desde os quatro anos teclado, com cinco iniciou no violino e órgão, e já passou à composição.\n[…]\nNo grupo de peças de formação mista, que transitam entre as dimensões camerísticas e sinfônicas, se destacam seus cinco divertimentos para cordas e trompas, obras leves que foram escritas em geral para celebrar alguma data especial. Salvo um todos têm seis movimentos, e as trompas calam nos movimentos lentos. O primeiro violino tem um papel maior, com uma escrita virtuosística. Quatro deles são precedidos e seguidos de uma marcha a ser tocada enquanto os instrumentistas entram e saem do local.\n[…]\nNos Estados Unidos o estado da Geórgia passou a entregar para os pais de cada bebê recém-nascido — cerca de cem mil ao ano — um CD de música clássica. Na Flórida uma lei obrigou que todos os programas educacionais e de cuidado da criança patrocinados por fundos públicos tocassem música clássica por trinta minutos todos os dias para crianças abaixo de cinco anos. A polêmica prossegue, pois alguns novos estudos dizem confirmar o Efeito Mozart, e outros continuam a levantar dúvidas.\n[…]\nAmadeus\n[…]\nMelograni, Piero. Wolfgang Amadeus Mozart. University of Chicago Press, 2007.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Wolfgang Amadeus Mozart",
      "descricao": "Compositor austríaco do período clássico, nascido em Salzburgo em 1756."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O filme Amadeus, vencedor do Oscar de melhor filme, imagina Mozart perseguido pela inveja de qual compositor italiano da corte de Viena?",
    "resposta": "Antonio Salieri",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amadeus_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amadeus_(film)",
        "situacao": "ok",
        "texto": "Amadeus is a 1984 American epic drama film directed by Miloš Forman. Peter Shaffer adapted it from his 1979 stage play, inspired by Alexander Pushkin's 1830 play Mozart and Salieri. Shaffer described it as a \"fantasia on [a real-life] theme\", as it imagines an orchestral rivalry between two 18th-century Vienna composers, Wolfgang Amadeus Mozart (Tom Hulce) and Antonio Salieri (F. Murray Abraham).\n[…]\nIn 1823, aged composer Antonio Salieri attempts suicide and is committed to a psychiatric hospital. He claims that he murdered Wolfgang Amadeus Mozart. Father Vogler, a young Catholic priest, encourages Salieri to confess his sins before God. After Vogler fails to recognize him, Salieri plays three old melodies to jog his memory. Vogler cannot recognize the first two (which Salieri wrote) but is relieved to recognize the third (Eine kleine Nachtmusik) at once.\n[…]\nForman collaborated with American choreographer Twyla Tharp for scenes that featured recreations of Mozart and Salieri operas.\n[…]\nHowever, the film's narrative was indirectly inspired by real-life rumors about Salieri killing Mozart. These rumors were prevalent enough that Rossini joked about them to Salieri's face when meeting the man in 1822.\n[…]\nSeveral members of the Mozart family thought that Salieri used his political clout to minimize his professional rival, including Leopold Mozart (who wrote that \"Salieri and all his supporters\" would \"move heaven and earth to ruin [The Marriage of Figaro]\"), Constanze Mozart (who claimed that her husband sometimes doubted Salieri's intentions towards him), and possibly even Mozart himself (he privately complained to his father about the Italians' excessive influence on the Austrian music industry).\n[…]\nAntonio Salieri: Axur, re d'Ormus, Finale\n[…]\nA Study Guide for Wolfgang Amadeus Mozart and Antonio Salieri's \"Amadeus\" (lit-to-film). Gale, Cengage Learning. 2018. ISBN 978-1-4103-9260-2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Amadeus",
        "situacao": "ok",
        "texto": "Amadeus é um filme épico americano de 1984, do gênero drama biográfico e musical, dirigido por Milos Forman com roteiro de Peter Shaffer baseado em sua peça homônima, livremente inspirada na vida dos compositores Wolfgang Amadeus Mozart e Antonio Salieri.\n[…]\nOs esforços de Salieri com Deus são intercalados com as cenas que mostram os próprios episódios de Mozart em sua vida em Viena; o orgulho da recepção inicial de sua música, a ira e a incredulidade diante do seu tratamento subsequente pelos italianos na corte do imperador; a felicidade com sua esposa, Constanze, e seu filho, Wolfgang, e o luto pela morte de seu pai, Leopold.\n[…]\nO Requiem está incompleto, e Salieri só pode assistir ao corpo de Mozart sendo levado para fora de Viena, onde é enterrado numa vala comum.\n[…]\nF. Murray Abraham.... Antonio Salieri\n[…]\nMartin Cavani.... jovem Salieri\n[…]\nPeter DiGesu.... Francesco Salieri\n[…]\nAmadeus é também o título de uma peça teatral escrita em 1979 por Peter Shaffer, baseada na vida de Wolfgang Amadeus Mozart e Antonio Salieri. Shaffer se inspirou numa peça chamada Mozart & Salieri de Aleksandr Puchkin, adaptada para uma ópera por Rimsky-Korsakov. A peça, na qual o filme se baseou, foi apresentada pela primeira vez no National Theatre, em Londres, em 2 de novembro de 1979.\n[…]\nEm 1985 o filme foi indicado para onze Prêmios da Academia (Oscar), incluindo uma rara indicação dupla para melhor ator - Hulce e Abraham foram indicados por suas performances de Mozart e Salieri. O filme acabou vencendo oito Oscars, incluindo o de melhor filme (Saul Zaentz), melhor ator (Abraham), melhor diretor (Forman), melhor figurino (Theodor Pištěk), melhor roteiro adaptado (Shaffer), melhor direção de arte (Patrizia von Brandenstein), melhor maquiagem e de melhor som.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Sinfonia Júpiter",
      "descricao": "Sinfonia número quarenta e um, em dó maior, a última sinfonia de Wolfgang Amadeus Mozart, de 1788."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Sinfonia número quarenta e um, a última de Mozart, ficou conhecida pelo nome de qual deus romano?",
    "resposta": "Júpiter",
    "fonte": [
      "https://en.wikipedia.org/wiki/Symphony_No._41_(Mozart)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Symphony_No._41_(Mozart)",
        "situacao": "ok",
        "texto": "Wolfgang Amadeus Mozart completed his Symphony No. 41 in C major, K. 551, on 10 August 1788. The longest and last symphony that he composed, it is regarded by many critics as among the greatest symphonies in classical music. The work is nicknamed the Jupiter Symphony, probably coined by the impresario Johann Peter Salomon.\n[…]\nAccording to the composer's younger son Franz Xaver Wolfgang Mozart, the symphony was given the name Jupiter by Johann Peter Salomon, who had settled in London in around 1781. The name has also been attributed to Johann Baptist Cramer, an English music publisher. Reportedly, from the first chords, Mozart's Symphony No. 41 reminded Cramer of Jupiter and his thunderbolts.\n[…]\nThe Bath Journal of Monday, 19 April 1813, carried an advertisement for a concert to be given in the Bath Assembly Rooms on Easter Wednesday, 21 April, to include \"Grand Sinfonia (Jupiter). Mozart\". A symphony by Mozart of this name also appeared in the 22 April 1813 issue of The Morning Chronicle in a report on the third concert of the Royal Philharmonic Society on 19 April.\n[…]\nIn her book Mozart: The 'Jupiter' Symphony, musicologist Elaine Sisman noted that the majority of responses ranged \"from admiring to adulatory, a gamut from A to A\".\n[…]\nGrove, George (January 1906). \"Mozart's Symphony in C (The Jupiter)\". The Musical Times. 47 (755): 27–31. doi:10.2307/904183. JSTOR 904183.\n[…]\nSisman, Elaine R. (1993). Mozart: The 'Jupiter' Symphony. Cambridge University Press. ISBN 0-521-40924-1 – via Internet Archive.\n[…]\nKonrad, Ulrich (2005). \"Commentary\". In Ulrich Konrad (ed.). Wolfgang Amadeus Mozart: Sinfonie in C, KV 551 Jupiter. Autograph Score. Facsimile. Commentary. Kassel: Bärenreiter. pp. 9–25. ISBN 3-7618-1824-6.\n[…]\nSinfonie in C (Jupiter-Sinfonie) KV 551: Score and critical report (in German) in the Neue Mozart-Ausgabe"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Niccolò Paganini",
      "descricao": "Violinista virtuose e compositor italiano (1782–1840), autor dos 24 Caprichos para violino solo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O violino favorito de Paganini, feito por Guarneri e hoje guardado em Gênova, ganhou um apelido pela potência do som. Qual?",
    "resposta": "O Canhão",
    "distratores": [
      "O Trovão",
      "O Leão",
      "O Diabo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Il_Cannone_Guarnerius"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Il_Cannone_Guarnerius",
        "situacao": "ok",
        "texto": "Il Cannone Guarnerius of 1743 is a violin created by the Italian luthier Giuseppe Bartolomeo Guarneri of Cremona (1698–1744).\n[…]\nIl Cannone is also known by the variants Il Cannone del Gesù, and the Cannon, often appended with Guarneri del Gesù, the Guarneri trademark. The violin received its name from a former owner, the Italian violin virtuoso Niccolò Paganini (1782–1840), because of its power and resonance. Since Paganini is closely associated with Il Cannone, it is common for the violin to be referenced as Il Cannone, ex Paganini.\n[…]\nPaganini lost a valuable Antonio Amati violin as a result of his penchant for voracious gambling. He was given a neglected Guarneri violin, a gift from an amateur violinist and businessman. Paganini played on this instrument for the rest of his life, fondly calling it “my cannon violin”, referring to the explosive sound that he could make it produce. He bequeathed it to the city of Genoa, Italy upon his death, and it is now considered a national treasure.\n[…]\nThe violin has been played several times by jazz violinist Regina Carter, who recorded an entire album with it, Paganini: After a Dream. In February 2006, Il Cannone was taken to London's Royal Academy of Music, where it was displayed and used at a festival devoted to Paganini.\n[…]\nItalian violinist Francesca Dego recorded an album of Paganini-themed music with Cannone in 2019.\n[…]\nIl Cannone Guarnerius in the Cozio Archive at tarisio.com\n[…]\nIl Cannone (Comune di Genova)"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Frédéric Chopin",
      "descricao": "Compositor e pianista polonês do romantismo (1810–1849), que viveu e morreu em Paris."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Chopin passou a vida adulta com a saúde frágil e morreu em Paris, em 1849. Com quantos anos?",
    "resposta": "Trinta e nove anos",
    "distratores": [
      "Vinte e nove anos",
      "Quarenta e seis anos",
      "Cinquenta e dois anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin",
        "situacao": "ok",
        "texto": "Frédéric François Chopin (born Fryderyk Franciszek Chopin; 1 March 1810 – 17 October 1849) was a Polish composer and virtuoso pianist of the early Romantic period who wrote primarily for solo piano. He has maintained worldwide renown as a leading composer of his era whose \"poetic genius was based on a professional technique that was without equal in his generation\".\n[…]\nIn poor health most of his life, Chopin died in Paris in 1849 at age 39.\n[…]\nFrédéric François Chopin was born in Żelazowa Wola, 46 kilometres (29 miles) west of Warsaw, in what was then the Duchy of Warsaw, a Polish state established by Napoleon. The parish baptismal record, which is dated 23 April 1810, gives his birthday as 22 February 1810, and cites his given names in the Latin form Fridericus Franciscus (in Polish, he was Fryderyk Franciszek). The composer and his family used the birthdate 1 March, which is now generally accepted as the correct date.\n[…]\nAt the end of November Chopin returned to Paris. He passed the winter in unremitting illness, but gave occasional lessons and was visited by friends, including Delacroix and Franchomme. Occasionally he played, or accompanied the singing of Delfina Potocka, for his friends. During the summer of 1849, his friends found him an apartment in Chaillot, out of the centre of the city, for which the rent was secretly subsidised by an admirer, Princess Yekaterina Dmitrievna Soutzos-Obreskova.\n[…]\nWith his health further deteriorating, Chopin desired to have a family member with him. In June 1849 his sister Ludwika came to Paris with her husband and daughter, and in September, he took an apartment at the Hôtel Baudard de Saint-James on the Place Vendôme, with rent possibly supported by Jane Stirling. After 15 October, when his condition took a marked turn for the worse, only a handful of his closest friends remained with him."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin",
        "situacao": "ok",
        "texto": "Frédéric François Chopin, também chamado Fryderyk Franciszek Chopin (Żelazowa Wola, 22 de fevereiro ou 1 de março de 1810, batizado em 23 de abril de 1810 – Paris, 17 de outubro de 1849), foi um pianista polonês radicado na França e compositor para piano da era romântica. É amplamente conhecido como um dos maiores compositores para piano e um dos pianistas mais importantes da história.\n[…]\nAclamado em sua terra natal como uma criança prodígio, aos vinte anos Chopin deixou a Polónia para sempre. Em Paris, fez carreira como intérprete, professor e compositor, e adotou a versão francesa dada a seus nomes, Frédéric-François.[carece de fontes]? De 1837 a 1847 teve uma relação turbulenta com a escritora francesa George Sand (pseudónimo de Amandine Aurore Lucile Dupin). Sempre com a saúde frágil, morreu em Paris aos 39 anos, vítima de tuberculose.\n[…]\nDurante seus anos em Paris, Chopin participou de vários concertos.\n[…]\nEm 1845, com uma maior deterioração da saúde de Chopin, um grave problema surgiu em sua relação com George Sand, a qual azedou em 1846 por problemas envolvendo a filha de Sand, Solange, e o jovem escultor Jean Baptiste Auguste Clesinger. Este foi o ano em que Sand publicou Lucrezia Floriani, cujos principais personagens (uma rica atriz e um príncipe de saúde frágil) podem ser interpretados como sendo Sand e Chopin.\n[…]\nA série de sete polonesas publicadas durante sua vida (além de nove publicadas postumamente), começando com a Op. 26 par, estabeleceu um novo padrão para a música na forma e foram criadas na vontade de Chopin de escrever algo para celebrar a cultura polonesa depois de o país ter se submetido ao controle russo. A polonesa em lá maior Op. 40 Nº1, \"Militar\", e a polonesa em lá bemol maior Op. 53, \"Heróica\", estão entre as obras mais amadas de Chopin e as mais executadas.\n[…]\nObras de Frédéric Chopin no International Music Score Library Project (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Frédéric Chopin",
      "descricao": "Compositor e pianista polonês do romantismo (1810–1849), que viveu e morreu em Paris."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Por cerca de nove anos, Chopin viveu um romance com qual escritora francesa, que assinava seus livros com um pseudônimo masculino?",
    "resposta": "George Sand",
    "fonte": [
      "https://en.wikipedia.org/wiki/George_Sand",
      "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/George_Sand",
        "situacao": "ok",
        "texto": "Amantine Lucile Aurore Dupin de Francueil (French: [amɑ̃tin lysil oʁɔʁ dypɛ̃]; 1 July 1804 – 8 June 1876), best known by her pen name George Sand (French: [ʒɔʁʒ(ə) sɑ̃d]), was a French novelist, memoirist and journalist. Being more renowned than either Victor Hugo or Honoré de Balzac in Britain in the 1830s and 1840s, Sand is recognised as one of the most notable writers of the European Romantic e\n[…]\nLike her step great-grandmother, Louise Dupin, whom she admired, George Sand advocated for women's rights and passion, criticized the institution of marriage, and fought against the prejudices of a conservative society. She was considered scandalous because of her turbulent love life, her adoption of masculine clothing, and her masculine pseudonym.\n[…]\nSand's friends and peers likewise alternate between using masculine or female adjectives and pronouns depending on the situation. For instance, in reviewing the collected letters of Sand's lover Chopin, one finds her consistently addressed as either \"Mme Sand\" or more familiarly as \"George\". Either way, she is referred to with feminine pronouns, and positioned as the \"Lady of the House\"  when referring to their domestic life together.\n[…]\nBriefly, a Delicious Life, a 2022 novel by Nell Stevens, features Chopin and George Sand as protagonists, and is a fictional account of their 1838–39 holiday in Mallorca.\n[…]\nSource: \"George Sand (1804–1876) – Auteur du texte\". data.bnf.fr. Bibliothèque nationale de France. Retrieved 12 June 2019.\n[…]\nGeorge Sand: The Story of Her Life, France 5, 2004, archived from the original (DVD) on 21 August 2011, retrieved 13 October 2009. Paintault, Micheline (Director); Cerf, Claudine (Author).\n[…]\nWorks by George Sand at LibriVox (public domain audiobooks)\n[…]\nExhibition catalogue, The Watercolors of George Sand (she/her/hers), Jill Newhouse Gallery, November 2023 (including essay by Cora Michael)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin",
        "situacao": "ok",
        "texto": "Frédéric François Chopin (born Fryderyk Franciszek Chopin; 1 March 1810 – 17 October 1849) was a Polish composer and virtuoso pianist of the early Romantic period who wrote primarily for solo piano. He has maintained worldwide renown as a leading composer of his era whose \"poetic genius was based on a professional technique that was without equal in his generation\".\n[…]\nChopin formed a friendship with Franz Liszt and was admired by many musical contemporaries, including Robert Schumann. After a failed engagement to Maria Wodzińska in 1836–1837, he maintained an often troubled relationship with the French writer George Sand. A brief and unhappy visit to Mallorca with Sand in 1838–1839 proved one of his most productive periods of composition. In his final years he was supported financially by his admirer Jane Stirling.\n[…]\nWhile in Marseille, Chopin made a rare appearance at the organ during a requiem mass for the tenor Adolphe Nourrit on 24 April 1839, playing a transcription of Franz Schubert's Lied Die Sterne (D. 939). George Sand gives a description of Chopin's playing in a letter of 28 April 1839:\n[…]\nGrzymała, who had followed their romance from the beginning, commented, \"If [Chopin] had not had the misfortune of meeting G. S. [George Sand], who poisoned his whole being, he would have lived to be Cherubini's age.\" Chopin would die two years later at thirty-nine; the composer Luigi Cherubini had died in Paris in 1842 at the age of 81.\n[…]\nChopin's life has been fictionalised in numerous films. As early as 1919, Chopin's relationships with three women – his youth sweetheart Mariolka, then Polish singer Sonja Radkowska, and later George Sand – were portrayed in the German silent film Nocturno der Liebe (1919). The 1945 biographical film A Song to Remember earned Cornel Wilde an Academy Award nomination as Best Actor for his portrayal of the composer."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/George_Sand",
        "situacao": "ok",
        "texto": "George Sand, pseudônimo de Amandine Aurore Lucile Dupin, baronesa de Dudevant (Paris, 1 de julho de 1804 — Nohant, 8 de junho de 1876), foi uma romancista e memorialista francesa, considerada a maior escritora francesa.\n[…]\nGeorge começou a escrever para o jornal Le Figaro, com a colaboração de Jules Sandeau. Usavam, então, o pseudônimo de Jules Sand – inspirado no nome de Sandeau. Em 1831, lançaram o livro Rose et Blanche. Passou a usar o pseudônimo de George Sand em 1832, quando escreveu, sozinha (obrigada a usar um pseudônimo masculino, para ser aceita no meio literário), o romance Indiana, seu primeiro livro, seu primeiro sucesso.\n[…]\nGeorge Sand teve uma vida amorosa agitada, com paixões que a influenciaram consideravelmente, como o escritor Jules Sandeau, que lhe deu o pseudônimo literário, o poeta Alfred de Musset, o advogado Michel de Bourges (entre 1835 e 1837), que a converteu aos ideais republicanos e socialistas, o músico Frédéric Chopin,  a quem esteve ligada entre 1838 e 1847 e seu último amante Alexandre Manceau, gravador e dramaturgo.\n[…]\nConsiderada a maior escritora francesa e a primeira mulher a viver de direitos literários, sua propriedade em Nohant foi doada ao governo francês, por sua neta Auror está aberta a visitação publica - Maison de George Sand. Seus restos mortais e de quase toda a sua família está no pequeno cemitério ao lado de sua casa em Nohant.\n[…]\nAssociation des Amis de George Sand : Marie-Thérèse Baumgartner, secrétaire générale de l’association, Villa George Sand, 12 rue George Sand, BP 83, 91123 Palaiseau Cédex (répondeur et fax : 01 60 14 89 91) ou Anne Chevereau, présidente, 70 rue Velpeau, 92160 Antony (tel. et fax : 01 46 66 91 49) ou Les Amis de George Sand.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "O Cravo Bem Temperado",
      "descricao": "Coleção de prelúdios e fugas para teclado de Johann Sebastian Bach, em dois livros, com uma peça em cada tonalidade."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O Cravo Bem Temperado, de Bach, tem dois livros, cada um com um prelúdio e uma fuga para cada tonalidade. Quantos pares são ao todo?",
    "resposta": "Quarenta e oito",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Well-Tempered_Clavier"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Well-Tempered_Clavier",
        "situacao": "ok",
        "texto": "The Well-Tempered Clavier, BWV 846–893, consists of two sets of preludes and fugues in all 24 major and minor keys for keyboard by Johann Sebastian Bach. In the composer's time clavier referred to a variety of keyboard instruments, namely the harpsichord, the clavichord and the organ (which operates using air instead of strings), but not excluding the regal and the then newly-invented fortepiano.\n[…]\nBach recycled some of the preludes and fugues from earlier sources: the 1720 Klavierbüchlein für Wilhelm Friedemann Bach, for instance, contains versions of eleven of the preludes of the first book of the Well-Tempered Clavier.\n[…]\nIt was long believed that Bach had taken the title The Well-Tempered Clavier from a similarly named set of 24 Preludes and Fugues in all the keys, for which a manuscript dated 1689 was found in the library of the Brussels Conservatoire. It was later shown that this was the work of a composer who was not even born in 1689: Bernhard Christian Weber (1 December 1712 – 5 February 1758). In fact, it was written in 1745–1750 in imitation of Bach's earlier example.\n[…]\nThe first book of the Well-Tempered Clavier was composed in the early 1720s, with Bach's autograph dated 1722. Apart from the early versions of several preludes included in W. F. Bach's Klavierbüchlein (1720) there is an almost complete collection of \"Prelude and Fughetta\" versions predating the 1722 autograph, known from a later copy by an unidentified scribe.\n[…]\nBach's example inspired numerous composers of the 19th century; for instance, in 1835 Chopin started composing his 24 Preludes, Op. 28, inspired by the Well-Tempered Clavier. In the 20th century Dmitri Shostakovich wrote his 24 Preludes and Fugues, an even closer reference to Bach's model.\n[…]\nBach Temperament\n[…]\nLedbetter, David. Bach's Well-Tempered Clavier: The 48 Preludes and Fugues (New Haven: Yale University Press, 2002). ISBN 0-300-09707-7."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Cravo_Bem_Temperado",
        "situacao": "ok",
        "texto": "O Cravo Bem Temperado (no original alemão: Das wohltemperierte Klavier) é uma coleção de música para cravo solo, composta por Johann Sebastian Bach. Ele inicialmente escreveu prelúdios e fugas tendo por base os 24 tons (12 maiores mais 12 menores), surgidos em 1722 \"para o proveito e uso dos jovens músicos desejosos de aprender e, especialmente, para o entretenimento daqueles já experientes com es\n[…]\nCada livro tem vinte e quatro pares de prelúdios e fugas. O primeiro par é em Dó maior, o segundo em Dó menor, o terceiro em Dó sustenido maior, o quarto em Dó sustenido menor e assim por diante. O padrão cromático ascendente continua até que todas as tonalidades tenham sido representadas, concluindo com uma fuga em Si menor.\n[…]\nEmbora a obra de Bach não fosse a primeira composição pan-tonal (utilizando todas as tonalidades), de longe foi a mais influente. Beethoven (que fazia das modulações remotas o núcleo da sua música) foi fortemente influenciado por O Cravo Bem Temperado, desde a sua juventude -- quando a interpretação em concertos públicos de peças dos dois Livros de Bach, contribuiu para a sua fama e reputação.\n[…]\nAlém do uso de todas as tonalidades, O Cravo Bem Temperado também é único quanto à grande variedade de técnicas e modos de expressão utilizados por Bach nas fugas. Nenhum outro compositor produziu obras tão poderosas e características na forma de fuga que frequentemente foram consideradas exercícios teóricos. Muitos compositores posteriores estudaram a obra de Bach para melhorar sua própria escrita da forma fuga. Até mesmo Verdi achou-a útil para seu último trabalho, a ópera \"Falstaff\".\n[…]\nLedbetter, David. Bach's Well-Tempered Clavier: The 48 Preludes and Fugues (New Haven: Yale University Press, 2002). ISBN 0-300-09707-7.\n[…]\nMúsica do Temperamento Sagrado\n[…]\nO Cravo Bem Temperado prelúdios e fugas, fugas - Korevaar (Piano), Goeth (Órgão), Parmentier (Cravo)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Concertos de Brandemburgo",
      "descricao": "Conjunto de seis concertos instrumentais de Johann Sebastian Bach, apresentados em 1721 ao margrave Cristiano Luís de Brandemburgo-Schwedt."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os famosos Concertos de Brandemburgo, de Bach, não descrevem nenhuma paisagem nem cidade. De onde vem o nome deles?",
    "resposta": "Dedicatória ao margrave Cristiano Luís",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brandenburg_Concertos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brandenburg_Concertos",
        "situacao": "ok",
        "texto": "The Brandenburg Concertos (BWV 1046–1051) by Johann Sebastian Bach are a collection of six instrumental works presented by Bach to Christian Ludwig, Margrave of Brandenburg-Schwedt, in 1721 (though probably composed earlier). The original French title is Six Concerts avec plusieurs instruments, meaning \"Six Concertos for several instruments\". Some of the pieces feature several solo instruments in \n[…]\nIn 1721, Bach compiled the six concertos, writing them almost entirely in his own hand instead of leaving the work to a copyist. He presented the collection to Christian Ludwig, Margrave of Brandenburg-Schwedt, under the title Six Concerts avec plusieurs instruments (Six Concertos for several instruments) with a dedication dated 24 March. Translated from the original French, the first sentence of Bach's dedication reads:\n[…]\nHeinrich Besseler has noted that the overall forces required (leaving aside the first concerto, which was rewritten for a special occasion) tallies exactly with the 17 players Bach had at his disposal in Köthen, although Wolff contradicts this: \"contrary to conventional wisdom, the collection does not reflect specific structure of ensembles available either to the margrave of Brandenburg or to the prince of Anhalt-Cöthen.\"\n[…]\nIt is often asserted that Christian Ludwig lacked the musicians in his Berlin ensemble to perform the concertos, and that the score was left unused in the Margrave's library until his death in 1734, but Boyd argues that the evidence does not necessarily support these assertions, and that \"it seems unlikely that Bach would have sent him six concertos totally unsuitable for his musicians to play.\" Nevertheless, the concertos were not included by name in the library inventory after Christian Ludwig's death, and it is uncertain who they went to.\n[…]\nConcertino: harpsichord, flute, violin\n[…]\ngood-music-guide.com: Brandenburg Concertos – Introductory survey"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Concertos_de_Brandenburgo",
        "situacao": "ok",
        "texto": "Os Concertos de Brandenburgo (BWV 1046-1051, título original: \"Six Concerts avec plusieurs instruments\", em alemão:  Brandenburgische Konzerte) são uma coleção de seis peças musicais composta por Johann Sebastian Bach entre 1718 - 1721, dedicados e apresentados a Cristóvão Ludovico de Brandemburgo-Schwedt em 1721. São amplamente considerados como expoentes da música do período barroco, além de est\n[…]\nOs concertos de Brandenburgo foram solicitados por Cristóvão, que era um colecionador de música, após este ouvir Bach (então mestre de capela) tocando na propriedade de um príncipe rival.\n[…]\nA página dedicatória que Bach escreveu para a coleção indica que eles são \"Concerts avec plusieurs instruments\" (Concertos para vários instrumentos). Bach usou o \"espectro mais amplo de instrumentos orquestrais... em combinações ousadas,\" como citado por Christoph Wolff. Heinrich Besseler notou que o número de músicos requeridos (exceto o primeiro concerto, que foi reescrito para uma ocasião especial) coincide exatamente com os 17 músicos que Bach tinha à sua disposição em Köthen.\n[…]\nGrabbe, Paul (1940). «Brandenburg Concertos». The Story of One Hundred Symphonic Favorites (em inglês). Nova Iorque: Grosset & Dunlap. pp. 4–11. ISBN 9781299204102\n[…]\nConcerto\n[…]\nJohann Sebastian Bach\n[…]\nclassicalnotes.net: Brandenburg Concertos – Discussão abrangente por Peter Gutmann, incluindo avaliação de gravações\n[…]\nInkpot: The Brandenburg Concertos – Uma introdução de Benjamin Chee\n[…]\ngood-music-guide.com: Brandenburg Concertos\n[…]\nBrandenburg Concerto No. 2, Brandenburg Concerto No. 3, Brandenburg Concerto No. 4, Brandenburg Concerto No. 5 e Brandenburg Concerto No. 6: apresentações da Sociedade Neerlandesa de Bach (vídeo e informações de fundo)\n[…]\nVídeo em alta definição dos Concertos de Brandemburgo 3 & 4 executados em instrumentos originais pelo conjunto Voices of Music, livre de direitos autorais para uso em salas de aula",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Harpa de pedais",
      "descricao": "Harpa de concerto usada nas orquestras, cujos pedais alteram a afinação das cordas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A grande harpa de concerto, usada nas orquestras sinfônicas, tem quantas cordas?",
    "resposta": "Quarenta e sete",
    "distratores": [
      "Trinta e seis",
      "Cinquenta e dois",
      "Sessenta e uma"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pedal_harp"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pedal_harp",
        "situacao": "ok",
        "texto": "The pedal harp (also known as the concert harp) is a large and technologically modern harp, designed primarily for use in art music. It may be played solo, as part of a chamber ensemble, or in an orchestra. It typically has 47 strings with seven strings per octave, giving a range of six and a half octaves.\n[…]\nOther scales, diatonic and synthetic, can be obtained by combining the pedals. It is also possible to play many chords in traditional harmony by adjusting pedals so that some notes are enharmonic, a central part of pedal harp technique.\n[…]\nThe harp is also used as a central instrument by many alternative popular musicians. A pedal harpist, Ricky Rasura, is a member of the \"symphonic pop\" band, The Polyphonic Spree. Also, Björk sometimes features acoustic and electric harp in her work, often played by Zeena Parkins. Philadelphia based Indie Pop Band Br'er uses a pedal harp as the foundation for their cinematic live sets.\n[…]\nArt in America was the first known rock band featuring a pedal harp to appear on a major record label, released in 1983. The pedal harp was also present in the Michael Kamen and Metallica concert and album, S&M, as part of the San Francisco Symphony orchestra. R&B singer Maxwell featured harpist Gloria Agostini in 1997 on his cover of Kate Bush's \"This Woman's Work\".\n[…]\nLyon and Healy, Camac Harps, Salvi Harps, and other manufacturers also make electroacoustic pedal harps. The electroacoustic pedal harp is a modified concert harp, with piezoelectric pickups at the base of each string and an amplifier. Electroacoustic harps are a blend of electric and acoustic, with the option of using an amplifier or playing the harp just like a normal pedal harp.\n[…]\narched harp (historical)\n[…]\nclaviharp – a harp combined with a keyboard\n[…]\nfolk harp\n[…]\nharp (general)\n[…]\nlist of compositions for harp"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Johannes Brahms",
      "descricao": "Compositor, pianista e regente alemão do Romantismo (1833–1897)."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O final da Primeira Sinfonia de Brahms tem um tema parecido com a Ode à Alegria. Por isso, o maestro Hans von Bülow a apelidou de quê?",
    "resposta": "A Décima de Beethoven",
    "fonte": [
      "https://en.wikipedia.org/wiki/Symphony_No._1_(Brahms)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Symphony_No._1_(Brahms)",
        "situacao": "ok",
        "texto": "The Symphony No. 1 in C minor, Op. 68, is a symphony written by Johannes Brahms. Brahms spent at least fourteen years completing this work, whose sketches date from 1854. Brahms himself declared that the symphony, from sketches to finishing touches, took 21 years, from 1855 to 1876. The premiere of this symphony, conducted by the composer's friend Felix Otto Dessoff, occurred on 4 November 1876, i\n[…]\nThe value and importance of Brahms's achievements were recognized by Vienna's most powerful critic, the staunchly conservative Eduard Hanslick. The conductor Hans von Bülow was moved in 1877 to call the symphony \"Beethoven's Tenth\", due to perceived similarities between the work and various compositions of Beethoven.\n[…]\nBrahms himself said, when comment was made on the similarity with Beethoven's Ninth, \"any ass can see that\". Nevertheless, this work is still sometimes referred to as \"Beethoven's Tenth\".\n[…]\nThe fourth movement begins with a slow introduction, where a new melody competes with \"gloomy dramatic rhetoric\". In the Più andante section, the horns and timpani introduce a tune that Brahms heard from an Alpine shepherd with the words, \"High on the hill, deep in the dale, I send you a thousand greetings!\" This movement contains melodies reminiscent of Beethoven's Ninth Symphony.\n[…]\nSymphony No. 3 (Beethoven)\n[…]\nHuscher, Phillip (2021). \"Program Notes of the Chicago Symphony Orchestra: Symphony No. 1 in C Minor, Op. 68\" (PDF). Chicago Symphony Orchestra. Retrieved March 21, 2021. With the finale we come again to Beethoven...partly because Brahms's big allegro melody suggests...Beethoven's 'Ode to Joy\". When the likeness was pointed out, Brahms simply said, 'Any ass can see that.'\n[…]\nBrahms - Symphony No. 1 – A Beginner's Guide – Overview, analysis and the best recordings – The Classic Review"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Johannes Brahms",
      "descricao": "Compositor, pianista e regente alemão do Romantismo (1833–1897)."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Brahms levou cerca de vinte anos para concluir sua primeira sinfonia. Quantas sinfonias ele completou ao longo da vida?",
    "resposta": "Quatro",
    "distratores": [
      "Duas",
      "Seis",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Johannes_Brahms",
      "https://en.wikipedia.org/wiki/Symphony_No._1_(Brahms)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Johannes_Brahms",
        "situacao": "ok",
        "texto": "Johannes Brahms (; German: [joˈhanəs ˈbʁaːms] ; 7 May 1833 – 3 April 1897) was a German composer, pianist, and conductor of the mid-Romantic period. His music features expressive counterpoint, freer dissonance, rhythmic vitality, and traditional forms. His works include four symphonies, four concertos, a Requiem, much chamber music, and hundreds of folk-song arrangements and Lieder (German art son\n[…]\nBrahms and Johann Strauss II were acquainted in the 1870s, but their close friendship belongs to the years 1889 and after. Brahms admired much of Strauss's music and encouraged the composer to sign with his publisher Simrock. In autographing a fan for Strauss's wife Adele, Brahms wrote the opening notes of The Blue Danube waltz, adding the words \"unfortunately not by Johannes Brahms\".\n[…]\nBrahms also compared Mozart with Beethoven to the latter's disadvantage, in a letter to Richard Heuberger in 1896: \"Dissonance, true dissonance as Mozart used it, is not to be found in Beethoven. Look at Idomeneo. Not only is it a marvel, but as Mozart was still quite young and brash when he wrote it, it was a completely new thing.\n[…]\nBrahms looked to older music, with its counterpoint, for inspiration. He studied the music of pre-classical composers, including Giovanni Pierluigi da Palestrina, Giovanni Gabrieli, Johann Adolph Hasse, Heinrich Schütz, Domenico Scarlatti, George Frideric Handel, and Johann Sebastian Bach.\n[…]\nFeatures of the \"Brahms style\" were absorbed in a more complex synthesis with other contemporary (chiefly Wagnerian) trends by Hans Rott, Wilhelm Berger, Max Reger and Franz Schmidt, whereas the British composers Hubert Parry and Edward Elgar and the Swede Wilhelm Stenhammar all testified to learning much from Brahms.\n[…]\nFree scores by Johannes Brahms in the Choral Public Domain Library (ChoralWiki)\n[…]\nJohannes Brahms at the Musopen project\n[…]\nJohannes Brahms WebSource"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Symphony_No._1_(Brahms)",
        "situacao": "ok",
        "texto": "The Symphony No. 1 in C minor, Op. 68, is a symphony written by Johannes Brahms. Brahms spent at least fourteen years completing this work, whose sketches date from 1854. Brahms himself declared that the symphony, from sketches to finishing touches, took 21 years, from 1855 to 1876. The premiere of this symphony, conducted by the composer's friend Felix Otto Dessoff, occurred on 4 November 1876, i\n[…]\nBrahms, Johannes. With an introduction by Margit L. McCorkle. Symphony no. 1 in C minor, op. 68 : the autograph score. New York : Pierpont Morgan Library in association with Dover Publications, c. 1986. ISBN 0-486-24976-X.\n[…]\nGrove, George (May 1, 1905). \"The First Symphony of Brahms (In C Minor, Op. 68.)\" The Musical Times, vol. 46, no. 747, pp. 318–320.\n[…]\nGrove, George (June 1, 1905). The First Symphony of Brahms. (In C Minor, Op. 68.) (Concluded).\" The Musical Times, vol. 46, no. 748, pp. 397–399.\n[…]\nHuscher, Phillip (2021). \"Program Notes of the Chicago Symphony Orchestra: Symphony No. 1 in C Minor, Op. 68\" (PDF). Chicago Symphony Orchestra. Retrieved March 21, 2021. With the finale we come again to Beethoven...partly because Brahms's big allegro melody suggests...Beethoven's 'Ode to Joy\". When the likeness was pointed out, Brahms simply said, 'Any ass can see that.'\n[…]\nMusgrave, Michael (July 1983). \"Brahms's First Symphony: Thematic Coherence and Its Secret Origin.\" Music Analysis, vol. 2, no. 2, pp. 117–133.\n[…]\nPascall, Robert (October 1981). \"Brahms's First Symphony Slow Movement: The Initial Performing Version.\" The Musical Times, vol. 122, no. 1664, pp. 664–665, 667.\n[…]\nSamarotto, Frank (2008). \"Fluidities of Phrase and Form in the 'Intermezzo' of Brahms's First Symphony.\" Intégral, vol. 22, pp. 117–143.\n[…]\nBrahms - Symphony No. 1 – A Beginner's Guide – Overview, analysis and the best recordings – The Classic Review"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Johannes_Brahms",
        "situacao": "ok",
        "texto": "Johannes Brahms (pronúncia em alemão: [joˈhanəs ˈbʁaːms]; Hamburgo, 7 de maio de 1833 – Viena, 3 de abril de 1897) foi um compositor, pianista e maestro alemão do período médio-romântico. Nascido no seio de uma família luterana, passou grande parte de sua vida profissional em Viena.\n[…]\nNo dia 7 de maio de 1833, em Hamburgo, nasceu Johannes Brahms. Seu pai, Johann Jacob, era contrabaixista e ganhava a vida tocando em bares e tavernas da cidade portuária. Logo ele percebeu os dotes pouco comuns do filho e, quando este completou sete anos, contratou o excelente professor Otto Cossel para dar-lhe aulas de piano. Aos 10 anos, o menino fez seu primeiro concerto público, interpretando Mozart e Beethoven.\n[…]\nSua última obra publicada foi o ciclo Quatro Canções Sérias, onde praticamente despede-se da vida. Ele dedica a coletânea a si mesmo, como presente no aniversário, em 1896. Nesse mesmo ano, morre Clara Schumann. Johannes Brahms viria a falecer um ano depois, em 3 de abril de 1897.\n[…]\nOs estudiosos dividem em quatro fases a obra brahmsiniana.\n[…]\nEste foi o gênero brahmsiniano por excelência, tendo exemplares em todas suas quatro fases. Entre as primeiras, destacam-se o ardente Trio op. 8, que seria revisado 35 anos mais tarde, o impressionante Sexteto de Cordas no. 1 e o exuberante Quarteto para Piano op. 25 — o último seria orquestrado por Schoenberg, que queria demonstrar as potencialidades sinfônicas da obra.\n[…]\nNo campo do concerto, a primeira obra da maturidade é o Concerto para Violino, de difícil execução mas de grande expressividade. É uma de suas peças mais populares. O segundo Concerto para Piano remete ao primeiro, composto 23 anos antes, em seu caráter sinfônico, com seus grandiosos quatro movimentos.\n[…]\nCuriosidades de Brahms\n[…]\n«Classic Cat - Brahms mp3s»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Ludwig van Beethoven",
      "descricao": "Compositor alemão (1770–1827), figura de transição entre o classicismo e o romantismo, que ficou surdo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O último concerto para piano de Beethoven ganhou o apelido de Imperador. Quantos concertos numerados para piano e orquestra ele deixou?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Sete",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano_Concerto_No._5_(Beethoven)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano_Concerto_No._5_(Beethoven)",
        "situacao": "ok",
        "texto": "The Piano Concerto No. 5 in E♭ major, Op. 73, known as the Emperor Concerto in English-speaking countries, is a piano concerto composed by Ludwig van Beethoven. Beethoven composed the concerto in 1809 under salary in Vienna, and he dedicated it to Archduke Rudolf, who was his patron, friend, and pupil. Its public premiere was on 28 November 1811 in Leipzig, with Friedrich Schneider as the soloist \n[…]\nEisen, Cliff (n.d.). \"Ludwig van Beethoven – The five piano concertos\". beethoven.org.pl.\n[…]\nShen, Yan (May 2015). \"Narrative Analysis of Beethoven's Piano Concerto No. 5\" (PDF). uh-ir.tdl.org.\n[…]\nArrau, Claudio (2011). Beethoven: Piano Concertos Nos. 1-5 (Recording). Urania Records – via Presto Music.\n[…]\nBrendel, Alfred (1992). Alfred Brendel • Beethoven – Piano Concerto No.5 - Emperor (Recording). Philips Insignia.\n[…]\nGould, Glenn (2012). Glenn Gould plays Beethoven: The 5 Piano Concertos (Recording). Sony Music – via Presto Music.\n[…]\nGrimaud, Hélène (2007). Beethoven: Piano Concerto No. 5 & Piano Sonata No. 28 in A, Op. 101 (Recording). Deutsche Grammophon – via Presto Music.\n[…]\nGulda, Friedrich (1973). Beethoven - Friedrich Gulda • Horst Stein • Vienna Philharmonic Orchestra – The Five Piano Concertos (Recording). London Records.\n[…]\nLarrocha, Alicia de (1984). Beethoven: Piano Concertos Nos. 1-5 & Choral Fantasia (Recording). Decca Records – via Presto Music.\n[…]\nLupu, Radu (1980). Beethoven: The Piano Concertos · Israel Philharmonic Orchestra · Zubin Mehta (Recording). Decca Records.\n[…]\nPerahia, Murray (1986). Beethoven - Murray Perahia · Royal Concertgebouw Orchestra · Bernard Haitink – The Five Piano Concertos (Recording). Sony Music.\n[…]\nZimerman, Krystian (2021). Beethoven: Complete Piano Concertos · London Symphony Orchestra · Sir Simon Rattle (Recording). Deutsche Grammophon.\n[…]\nGutmann, Peter (2017). \"Beethoven: Piano Concerto # 5 in E-flat major, Op. 73 ('Emperor')\". Classical Notes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Concerto_para_piano_n.%C2%BA_5_%28Beethoven%29",
        "situacao": "ok",
        "texto": "O Concerto para piano n.º 5 em Mi bemol maior, Op. 73 de Ludwig van Beethoven, popularmente conhecido como Concerto do Imperador, foi o ultimo concerto para piano de Beethoven. Foi escrito entre 1809 e 1811 em Viena, e foi dedicado ao Arquiduque Rudolf, patrono de Beethoven. A primeira apresentação aconteceu em novembro de 1811 em Leipzig tendo como solista Friendrich Schneider. O concerto tem dur\n[…]\no concerto foi orquestrado para um piano solo, duas flautas, dois oboés, duas clarinetes em Si bemol, dois Fagotes, duas trompas, dois trompetes, tímpanos em mi bemol e si bemol, e cordas.\n[…]\nO Concerto está estruturado em três movimentos, marcados como:\n[…]\nAssim como outros concertos de Beethoven compostos nesse período, o primeiro movimento deste concerto é relativamente longo, com a duração de aproximadamente 20 minutos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Ludwig van Beethoven",
      "descricao": "Compositor alemão (1770–1827), figura de transição entre o classicismo e o romantismo, que ficou surdo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Diferente do von alemão, o van no nome de Beethoven não indicava nobreza. Ele revela a origem do avô em qual região europeia?",
    "resposta": "Flandres, na atual Bélgica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven",
        "situacao": "ok",
        "texto": "Ludwig van Beethoven (baptised 17 December 1770 – 26 March 1827) was a German composer and pianist. A seminal figure in the history of music, his personal style was a key driver of the transition from Classical to Romantic music. He expanded instrumental forms such as the symphony, the piano sonata, and the string quartet. Beethoven is widely revered as one of the greatest composers of all time, a\n[…]\nOf the seven children born to Johann van Beethoven, only Ludwig, the second-born, and two younger brothers survived infancy. Kaspar Anton Karl (generally known as Karl) was born on 8 April 1774, and Nikolaus Johann, who was generally known as Johann, the youngest, was born on 2 October 1776.\n[…]\nBeethoven at last presented the manuscript of the completed Missa solemnis to Rudolph on 19 March (more than a year after the archduke's enthronement as archbishop). But he was in no hurry to get it published or performed as he had formed a notion that he could profitably sell manuscripts of the work to various courts in Germany and Europe at 50 ducats each. One of the few who took up this offer was Louis XVIII of France, who also sent Beethoven a heavy gold medallion.\n[…]\nJohn Taylor, the hero of the acclaimed and popular BBC series Ludwig is obsessed with Beethoven, to the point of using the composer's first name as his pseudonym. The show's score consists largely of loose arrangements of Beethoven's music.\n[…]\nBeethoven In Our Time. BBC Radio 4\n[…]\nBeethoven-Haus Bonn\n[…]\n\"Discovering Beethoven\". BBC Radio 3.\n[…]\nFree scores by Ludwig van Beethoven at the International Music Score Library Project (IMSLP)\n[…]\nFree scores by Ludwig van Beethoven in the Choral Public Domain Library (ChoralWiki)\n[…]\nLudwig van Beethoven at the Musopen project\n[…]\nWorks by Ludwig van Beethoven at Project Gutenberg\n[…]\nWorks by or about Ludwig van Beethoven at the Internet Archive\n[…]\nWorks by Ludwig van Beethoven at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ludwig_van_Beethoven",
        "situacao": "ok",
        "texto": "Ludwig van Beethoven (Bona, batizado em 17 de dezembro de 1770 – Viena, 26 de março de 1827) foi um compositor e pianista alemão. Ele é uma das figuras mais reverenciadas na história da música ocidental; suas obras estão entre as mais executadas do repertório da música clássica e abrangem a transição do período clássico para a era romântica neste gênero musical. A carreira de Beethoven é convencio\n[…]\nLudwig van Beethoven (AFI: ) foi batizado em 17 de dezembro de 1770, mas nasceu presumivelmente no dia anterior, na cidade de Bonn, Reino da Prússia, atual Renânia do Norte (Alemanha). Sua família era de origem flamenga, cujo sobrenome significava horta de beterrabas e no qual a partícula van não indicava nobreza alguma.\n[…]\nSeu avô, Lodewijk van Beethoven — também chamado \"Luís\", na transliteração — de quem herdou o nome, nasceu na Mechelen, hoje parte da Bélgica, em 1712, e imigrou para Bonn, onde foi maestro de capela do príncipe. Descendia de artistas, pintores e escultores, era músico e foi nomeado regente da Capela Arquiepiscopal na corte da cidade de Colônia (atual Alemanha).\n[…]\nLudwig van Beethoven (1770–1827);\n[…]\nNicolaus Johann van Beethoven (1776–1848);\n[…]\nAs suas desvantagens incluem o fato de geralmente omitir um quarto período, isto é, os primeiros anos em Bona, cujas obras são menos frequentemente consideradas; e que ignora o desenvolvimento diferencial dos estilos de composição de Beethoven ao longo dos anos para diferentes categorias de trabalho.\n[…]\nAmada Imortal, a mulher desconhecida a quem Beethoven endereçou uma famosa carta de amor\n[…]\nBeethoven-Hauss Bonn. Website oficial da entidade público-privada alemã que disponibiliza vasto acervo digital da obra de Ludwig van Beethoven. Visitado em 27 de dezembro de 2014.\n[…]\nObras de Beethoven no International Music Score Library Project\n[…]\nPartituras gratuitas de Ludwig van Beethoven na CPDL, a Biblioteca Coral de Domínio Público",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Ludwig van Beethoven",
      "descricao": "Compositor alemão (1770–1827), figura de transição entre o classicismo e o romantismo, que ficou surdo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em 1822, quando o Brasil proclamou a independência, qual destes grandes compositores ainda estava vivo?",
    "resposta": "Ludwig van Beethoven",
    "distratores": [
      "Wolfgang Amadeus Mozart",
      "Joseph Haydn",
      "Johann Sebastian Bach"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven",
      "https://en.wikipedia.org/wiki/Joseph_Haydn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven",
        "situacao": "ok",
        "texto": "Ludwig van Beethoven (baptised 17 December 1770 – 26 March 1827) was a German composer and pianist. A seminal figure in the history of music, his personal style was a key driver of the transition from Classical to Romantic music. He expanded instrumental forms such as the symphony, the piano sonata, and the string quartet. Beethoven is widely revered as one of the greatest composers of all time, a\n[…]\nOf the seven children born to Johann van Beethoven, only Ludwig, the second-born, and two younger brothers survived infancy. Kaspar Anton Karl (generally known as Karl) was born on 8 April 1774, and Nikolaus Johann, who was generally known as Johann, the youngest, was born on 2 October 1776.\n[…]\nWith the involvement of Pfeiffer, who was an insomniac, there were irregular late-night sessions with the young Beethoven dragged from his bed to the keyboard. Beethoven's musical talent became obvious at a young age. Aware of Leopold Mozart's successes in this area with his son Wolfgang and daughter Nannerl, Johann attempted to promote his son as a child prodigy, claiming that Ludwig was six (he was seven) on the posters for his first public performance in March 1778.\n[…]\nThe Beethoven Conservatory in St. Louis, Missouri, was named for the composer.\n[…]\nJohn Taylor, the hero of the acclaimed and popular BBC series Ludwig is obsessed with Beethoven, to the point of using the composer's first name as his pseudonym. The show's score consists largely of loose arrangements of Beethoven's music.\n[…]\nFree scores by Ludwig van Beethoven at the International Music Score Library Project (IMSLP)\n[…]\nFree scores by Ludwig van Beethoven in the Choral Public Domain Library (ChoralWiki)\n[…]\nLudwig van Beethoven at the Musopen project\n[…]\nWorks by Ludwig van Beethoven at Project Gutenberg\n[…]\nWorks by or about Ludwig van Beethoven at the Internet Archive\n[…]\nWorks by Ludwig van Beethoven at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Joseph_Haydn",
        "situacao": "ok",
        "texto": "Franz Joseph Haydn ( HY-dən; German: [ˈfʁants ˈjoːzɛf ˈhaɪdn̩] ; 31 March 1732 – 31 May 1809) was an Austrian composer of the Classical period. He was pivotal in the evolution of chamber music forms such as the string quartet and piano trio. His contributions to musical form have led him to be called \"Father of the Symphony\", \"Father of the String quartet\" and \"Father of Sonata Form\".\n[…]\nWhile travelling to London in 1790, Haydn met the young Ludwig van Beethoven in his native city of Bonn. On Haydn's return, Beethoven came to Vienna and was Haydn's pupil up until the second London journey. Haydn took Beethoven with him to Eisenstadt for the summer, where Haydn had little to do, and taught Beethoven some counterpoint. While in Vienna, Haydn purchased a house for himself and his wife in the suburbs and started remodelling it.\n[…]\nThe very frail composer was brought into the hall on an armchair to the sound of trumpets and drums and was greeted by Beethoven, Salieri (who led the performance) and by other musicians and members of the aristocracy. Haydn was both moved and exhausted by the experience and had to depart at intermission.\n[…]\nHaydn's work was central to the development of what came to be called sonata form. His practice, however, differed in some ways from that of Mozart and Beethoven, his younger contemporaries who likewise excelled in this form of composition. Haydn was particularly fond of the so-called monothematic exposition, in which the music that establishes the dominant key is similar or identical to the opening theme.\n[…]\nThe change in Haydn's approach was important in the history of classical music, as other composers soon followed his lead. When Beethoven left Bonn for Vienna in 1792, his patron, Count Ferdinand Ernst Gabriel von Waldstein, wrote \"You will receive the spirit of Mozart from the hands of Haydn.\" In 1814 E. T. A."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ludwig_van_Beethoven",
        "situacao": "ok",
        "texto": "Ludwig van Beethoven (Bona, batizado em 17 de dezembro de 1770 – Viena, 26 de março de 1827) foi um compositor e pianista alemão. Ele é uma das figuras mais reverenciadas na história da música ocidental; suas obras estão entre as mais executadas do repertório da música clássica e abrangem a transição do período clássico para a era romântica neste gênero musical. A carreira de Beethoven é convencio\n[…]\nFoi do pai, Johann, que Beethoven recebeu suas primeiras lições de música: o objetivo era afirmá-lo como \"menino-prodígio\" ao piano, dada sua habilidade musical demonstrada desde ainda muito cedo. Por essa razão, a partir dos cinco anos de idade seu pai passou a obrigá-lo a estudar música diariamente, durante muitas horas. No entanto, seu pai terminou consumido pelo álcool, pelo que a infância de Ludwig foi infeliz.\n[…]\nLudwig van Beethoven (1770–1827);\n[…]\nPortanto, Ludwig van Beethoven foi o terceiro filho mais velho por parte de mãe e o segundo por parte de pai. Teve um total de sete irmãos, dos quais cinco morreram ainda na infância. Entre os irmãos vivos, Beethoven foi o penúltimo a morrer: 12 anos após Kaspar e 21 anos antes de Nicolaus.\n[…]\nA culminância destes anos foi a Sinfonia n.º 9 em Ré Menor, Op.125 (1822–1824), para muitos a sua obra-prima. Pela primeira vez é inserido um coral num movimento de uma sinfonia. O texto é uma adaptação do poema de Friedrich Schiller, \"Ode à Alegria\", feita pelo próprio Ludwig van Beethoven.\n[…]\nOs anos finais de Ludwig foram dedicados quase exclusivamente à composição de Quartetos para Cordas.\n[…]\nO Segredo de Beethoven, filme de 2007 sobre da vida do compositor, estrelado por Ed Harris\n[…]\nBeethoven-Hauss Bonn. Website oficial da entidade público-privada alemã que disponibiliza vasto acervo digital da obra de Ludwig van Beethoven. Visitado em 27 de dezembro de 2014.\n[…]\nPartituras gratuitas de Ludwig van Beethoven na CPDL, a Biblioteca Coral de Domínio Público",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Sonata ao Luar",
      "descricao": "Sonata para piano número catorze, em dó sustenido menor, de Ludwig van Beethoven, de 1801."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A Sonata ao Luar só ganhou esse apelido após a morte de Beethoven, quando um crítico a comparou ao luar sobre qual lago?",
    "resposta": "Lago de Lucerna",
    "distratores": [
      "Lago de Genebra",
      "Lago de Constança",
      "Lago de Como"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano_Sonata_No._14_(Beethoven)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano_Sonata_No._14_(Beethoven)",
        "situacao": "ok",
        "texto": "The Piano Sonata No. 14 in C♯ minor, marked Quasi una fantasia, Op. 27, No. 2, is a piano sonata by Ludwig van Beethoven, completed in 1801 and dedicated in 1802 to his pupil Countess Julie \"Giulietta\" Guicciardi. Although known throughout the world as the Moonlight Sonata (German: Mondscheinsonate), it was not Beethoven who named it so. The title \"Moonlight Sonata'\" arose via imagery later propos\n[…]\nMany sources say that the nickname Moonlight Sonata arose after the German music critic and poet Ludwig Rellstab likened the effect of the first movement to that of moonlight shining upon Lake Lucerne. This comes from the musicologist Wilhelm von Lenz, who wrote in 1852: \"Rellstab compares this work to a boat, visiting, by moonlight, the remote parts of Lake Lucerne in Switzerland.\n[…]\nIn fact, as musicologist Sarah Waltz determined in a 2007 analysis of the title, Rellstab made his comment about the sonata's first movement in a story called Theodor that he published in 1824: \"The lake reposes in twilit moon-shimmer [Mondenschimmer], muffled waves strike the dark shore; gloomy wooded mountains rise and close off the holy place from the world; ghostly swans glide with whispering rustles on the tide, and an Aeolian harp sends down mysterious tones of lovelorn yearning from the ruins.\" Rellstab made no mention of Lake Lucerne, which seems to have been Lenz's own addition.\n[…]\nIn his book Beethoven's pianoforte sonatas,\n[…]\nDistler, Jed. \"Beethoven’s ‘Moonlight’ Sonata: a deep dive into the best recordings.\" Gramophone, January 2, 2024\n[…]\nHarding, Henry Alfred (1901). \"Sonata No. 14\". Analysis of Form in Beethoven's Sonatas. Borough Green Sevenoaks, Kent: Novello. pp. 28–29 – via Internet Archive.\n[…]\nAnalysis and recordings review of Beethoven's Moonlight Sonata, Roni's Journal, September 2007, Classical Music Blog\n[…]\nPiano Sonata No. 14: Scores at the International Music Score Library Project"
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
    "indice": 16,
    "ancora": {
      "nome": "Piotr Ilitch Tchaikovsky",
      "descricao": "Compositor russo do Romantismo, autor de O Lago dos Cisnes e O Quebra-Nozes."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1891, Tchaikovsky viajou aos Estados Unidos para reger nos concertos de inauguração de qual sala de Nova York?",
    "resposta": "Carnegie Hall",
    "fonte": [
      "https://en.wikipedia.org/wiki/Carnegie_Hall",
      "https://en.wikipedia.org/wiki/Pyotr_Ilyich_Tchaikovsky"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carnegie_Hall",
        "situacao": "ok",
        "texto": "Carnegie Hall ( KAR-nig-ee) is a concert venue at 881 Seventh Avenue, between 56th and 57th Streets, in Midtown Manhattan, New York City. Designed by architect William Burnet Tuthill and built by its namesake, industrialist and philanthropist Andrew Carnegie, the venue is one of the most prestigious in the world for both classical music and popular music. Carnegie Hall has its own artistic program\n[…]\nThe Recital Hall opened in March 1891 for recitals of the New York Oratorio Society. It was around this time that tickets for the official opening of the Music Hall were being sold. The oratorio hall in the basement opened on April 1, 1891, with a performance by Franz Rummel. The Music Hall officially opened on May 5, 1891, with a rendition of the Old 100th hymn, a speech by Episcopal bishop Henry C. Potter, and a concert conducted by Walter Damrosch and Russian composer Pyotr Ilyich Tchaikovsky.\n[…]\nThe city leased the hall to the Carnegie Hall Corporation, a nonprofit organization formed to run the venue. For 15 years, the Carnegie Hall Corporation paid the New York City government $183,600 in cash. Afterward, the corporation started paying the city through benefit concerts and outreach programs. Carnegie Hall was designated a National Historic Landmark in 1962. The landmark status was certified in 1964, and a National Historic Landmark plaque was placed on the building.\n[…]\nIn its early years, Carnegie Hall hosted the New York Philharmonic and Symphony, as well as the Boston Symphony Orchestra, the Philadelphia Symphonic Orchestra, and other visiting orchestra companies. In particular, the Boston Symphony Orchestra regularly performed at Carnegie Hall after its first concert in 1893, and Leopold Stokowski of the Philadelphia Symphonic Orchestra regularly performed at the hall for six decades.\n[…]\nHonors Performance Series, Carnegie Hall performance opportunity for elite student musicians"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pyotr_Ilyich_Tchaikovsky",
        "situacao": "ok",
        "texto": "Pyotr Ilyich Tchaikovsky (  chy-KOF-skee; 7 May 1840 – 6 November 1893) was a Russian composer of the Romantic period. He was the first Russian composer whose music made a lasting impression internationally.\n[…]\nConducting brought him to the United States in 1891, where he led the New York Music Society's orchestra in his Festival Coronation March at the inaugural concert of Carnegie Hall.\n[…]\nBiographers have generally agreed that Tchaikovsky was homosexual. He sought the company of other men in his circle for extended periods, \"associating openly and establishing professional connections with them.\" His first love was reportedly Sergey Kireyev, a younger fellow student at the Imperial School of Jurisprudence. According to Modest Tchaikovsky, this was Pyotr Ilyich's \"strongest, longest and purest love\".\n[…]\nTchaikovsky was capable of turning out music—entertaining and widely beloved though it is—that seems superficial, manipulative and trivial when regarded in the context of the whole literature. The First Piano Concerto is a case in point. It makes a joyful noise, it swims in pretty tunes and its dramatic rhetoric allows (or even requires) a soloist to make a grand, swashbuckling impression. But it is entirely hollow\".\n[…]\n\"We have acquired a different view of Romantic 'excess,'\" Horowitz says. \"Tchaikovsky is today more admired than deplored for his emotional frankness; if his music seems harried and insecure, so are we all\".\n[…]\nFree scores by Pyotr Ilyich Tchaikovsky at the International Music Score Library Project (IMSLP)\n[…]\nTchaikovsky Research\n[…]\n\"Discovering Tchaikovsky\". BBC Radio 3.\n[…]\nWorks by Pyotr Ilyich Tchaikovsky at Project Gutenberg\n[…]\nWorks by or about Pyotr Ilyich Tchaikovsky at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carnegie_Hall",
        "situacao": "ok",
        "texto": "O Carnegie Hall é uma sala de espectáculos em Midtown Manhattan, na cidade de Nova Iorque, localizada no 881 da Sétima Avenida.\n[…]\nConstruída a mando do filantropo Andrew Carnegie em 1890, é uma das mais famosas salas de espectáculos dos Estados Unidos para concertos de música clássica e popular, reconhecido pela sua beleza, história e acústica. O Carnegie Hall tem o seu próprio programa, desenvolvimento e departamentos de marketing e apresenta mais de 100 performances a cada estação. É igualmente alugado por grupos de artistas. Não tem companhia residente, todavia, a Filarmónica de Nova Iorque foi residente até 1962.\n[…]\nEm 1962, Antônio Carlos Jobim e João Gilberto se apresentaram durante o festival de Bossa Nova.\n[…]\nOutro brasileiro a se apresentar, por quatro vezes, no Carnegie Hall foi Nelson Ned[carece de fontes]?. A sambista Beth Carvalho também já se apresentou no local. Gal Costa apresentou-se várias vezes no Carnegie.[carece de fontes]?\n[…]\nUma das apresentações mais memoráveis no palco do Carnegie Hall foi da atriz/cantora Judy Garland que resultou no épico disco Judy At Carnegie Hall, aclamado pela crítica especializada e vencedor de 4 prêmios Grammy.\n[…]\nEm 2006 a cantora, compositora e violonista Rosa Passos se apresentou no Carnegie Hall em uma turnê com o seu álbum \"Rosa\" onde se apresentou com voz e violão. Em três semanas todos os ingressos já haviam sido vendidos.[carece de fontes]?\n[…]\nMarcos históricos nacionais em Nova Iorque\n[…]\nHistória do Carnegie Hall, do site oficial\n[…]\nNew York NHL Carnegie Hall (em inglês) no National Archives Catalog\n[…]\nCarnegie Hall (em inglês) no NPGallery Asset Detail",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "O Lago dos Cisnes",
      "descricao": "Balé de Piotr Ilitch Tchaikovsky, estreado em Moscou em 1877."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Lago dos Cisnes, de Tchaikovsky, estreou em 1877, com recepção morna. Em qual teatro de Moscou?",
    "resposta": "Teatro Bolshoi",
    "distratores": [
      "Teatro Mariinsky",
      "Teatro Maly",
      "Teatro Mikhailovsky"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Swan_Lake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swan_Lake",
        "situacao": "ok",
        "texto": "Swan Lake (Russian: Лебединое озеро) is a ballet composed by Russian composer Pyotr Ilyich Tchaikovsky in 1875–76. Despite its initial failure, it is now one of the most popular ballets of all time.\n[…]\nThe ballet was premiered by the Bolshoi Ballet on 4 March [O.S. 20 February] 1877 at the Bolshoi Theatre in Moscow. The choreographer of this original production was Julius Reisinger (Václav Reisinger).\n[…]\nPlace: Bolshoi Theatre, Moscow\n[…]\n1880 and 1882, Moscow, Bolshoi Theatre, staged by Joseph Hansen after Reisinger, conductor and designers as in première\n[…]\nIn 1950, Konstantin Sergeyev staged a new Swan Lake for the Mariinsky Ballet (then the Kirov) after Petipa and Ivanov, but included some bits of Vaganova and Gorsky. Under the Soviet regime, the tragic ending was replaced with a happy one, so in the Mariinsky and Bolshoi versions, Odette and Siegfried lived happily ever after.\n[…]\nAlthough the 1969 Bolshoi Ballet production by Yury Grigorovich contained a happy ending similar to the Mariinsky Ballet version, the 2001 revision changed the ending to a tragic one. Siegfried is defeated in a confrontation with the Evil Genius, who seizes Odette and takes her away to parts unknown before the lovers can unite, and Siegfried is left by himself at the lake.\n[…]\nWiley, Roland John (1991). Tchaikovsky's Ballets: Swan Lake, Sleeping Beauty, Nutcracker. Oxford: Clarendon Press. ISBN 0-19-315314-9.\n[…]\nNuzzo, Nancy B. \"Swan Lake: a chronology; The sleeping beauty: a chronology; other Tchaikovsky ballets.\" Dance Magazine, 55 (June 1981), 57–58.\n[…]\nThe Ballet Soloist (aka Russian Ballerina) – 1947 Soviet musical film with scenes from Tchaikovsky's Swan Lake and The Sleeping Beauty. With subtitles in Esperanto."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Lago_dos_Cisnes",
        "situacao": "ok",
        "texto": "O Lago dos Cisnes (em russo: Лебединое Озеро, Lebedinoye Ozero) é um balé dramático em quatro atos de 1876 do compositor russo Piotr Ilitch Tchaikovski e, libreto de Vladimir Begitchev e Vasily Geltzer, com estreia em 1877 no Teatro Bolshoi (Moscou).\n[…]\nO balé foi encomendado pelo Teatro Bolshoi em 1876 ao compositor russo, que começou logo a escrever.\n[…]\nA estreia de O Lago dos Cisnes ocorreu no dia 20 de fevereiro de 1877 no teatro que encomendou a peça, na cidade russa de Moscovo, sendo um fracasso pela má interpretação da orquestra e dos bailarinos, assim como a coreografia de Vladimir Begitchev e Vasily Geltzer.\n[…]\nData:20 de fevereiro de 1877\n[…]\nLugar: Teatro Bolshoi, Moscou\n[…]\nLugar: Teatro Mariinsky, São Petersburgo\n[…]\n1976, Algis Zhuraitis (regente), Ballet Bolshoi, Alexander Bogatirev (Siegfried), Maya Plisetskaya (Odette / Odile)\n[…]\n1984, Algis Zhuraitis (regente), Ballet Bolshoi, Alexander Bogatirev (Siegfried), Natalia Bessmertnova (Odette / Odile)\n[…]\n1989, Algis Zhuraitis (regente), Ballet Bolshoi, Yuri Vasyuchenko (Siegfried), Alla Mikhalchenko (Odette / Odile)\n[…]\n2004, James Tuggle (regente), Corpo de Baile do Teatro alla Scala, Roberto Bolle (Siegfried), Svetlana Zakharova (Odette / Odile)\n[…]\nFaz parte da trama central do filme \"Cisne Negro\", com Natalie Portman e Vincent Cassel. Representado em Barbie em O Lago dos Cisnes e em Barbie e as Sapatilhas Mágicas, numa adaptação feita para a animação em 2003 e 2013, respectivamente. E inspirou a animação A Princesa Encantada de 1994.\n[…]\nNa série animada de TV \"Princess Tutu\" o enredo tem várias referências ao Lago dos Cisnes, além de techos do Ballet e de outras obras de Tchaikovski.\n[…]\nNo desenho animado Barbie em O Lago dos Cisnes, a Barbie é caracterizada como princesa Odette.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Antonio Vivaldi",
      "descricao": "Compositor e violinista barroco italiano de Veneza (1678–1741), autor de As Quatro Estações."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Pouco depois de ser ordenado padre, Vivaldi deixou de celebrar missas. Que problema de saúde ele alegava?",
    "resposta": "Aperto no peito, provavelmente asma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Antonio_Vivaldi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antonio_Vivaldi",
        "situacao": "ok",
        "texto": "Antonio Lucio Vivaldi (4 March 1678 – 28 July 1741) was an Italian composer, virtuoso violinist, and impresario of Baroque music. Regarded as one of the greatest Baroque composers, Vivaldi was influential across Europe during his lifetime, giving origin to many imitators and admirers. He pioneered many developments in orchestration, violin technique and programmatic music. He consolidated the emer\n[…]\nA composition by Vivaldi is identified by RV number, which refers to its place in the \"Ryom-Verzeichnis\" or \"Répertoire des oeuvres d'Antonio Vivaldi\", a catalog created in the 20th century by the musicologist Peter Ryom.\n[…]\nThis cataloging work was led by the Istituto Italiano Antonio Vivaldi, where Gian Francesco Malipiero was both the director and the editor of the published scores (Edizioni G. Ricordi). His work built on that of Antonio Fanna, a Venetian businessman and the institute's founder, and thus formed a bridge to the scholarly catalog dominant today.\n[…]\nCompositions by Vivaldi are identified today by RV number, the number assigned by Danish musicologist Peter Ryom in works published mostly in the 1970s, such as the \"Ryom-Verzeichnis\" or \"Répertoire des oeuvres d'Antonio Vivaldi\". Like the Complete Edition before it, the RV does not typically assign its single, consecutive numbers to \"adjacent\" works that occupy one of the composer's single opus numbers.\n[…]\nLane Poole, Reginald (1900). \"Vivaldi, Antonio\" . In Grove, George (ed.). A Dictionary of Music and Musicians. Vol. 4.5. London: Macmillan and Company. pp. 317–318.\n[…]\nRomijn, André. Hidden Harmonies: The Secret Life of Antonio Vivaldi, 2007 ISBN 978-0-9554100-1-7\n[…]\nFree scores by Antonio Vivaldi at the International Music Score Library Project (IMSLP)\n[…]\nFree scores by Antonio Vivaldi in the Choral Public Domain Library (ChoralWiki)\n[…]\nThe Mutopia Project has compositions by Antonio Vivaldi\n[…]\nAntonio Vivaldi at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Antonio_Vivaldi",
        "situacao": "ok",
        "texto": "Antonio Lucio Vivaldi (Veneza, 4 de março de 1678 – Viena, 28 de julho de 1741) foi um compositor e músico do estilo barroco tardio oriundo da República de Veneza, atual Itália. Tinha a alcunha de il Prete Rosso (\"o padre ruivo\") por ser um sacerdote católico de cabelos ruivos. Compôs 770 obras, entre as quais 477 concertos e 46 óperas. É conhecido do grande público principalmente por seus quatro \n[…]\nEm 1703, Vivaldi foi ordenado padre. Em 1704, foi-lhe dada dispensa da celebração da Eucaristia devido à sua saúde fragilizada (aparentemente sofria de asma), e ele se voltou para o ensino de violino num orfanato de moças — o Ospedale della Pietà, em Veneza. Pouco tempo após assumir suas novas funções, as meninas ganharam seu apreço e sua estima. Vivaldi compôs para elas a maioria dos seus concertos, cantatas e músicas sagradas.\n[…]\nNa carta, o compositor alegava motivos de saúde para não mais oficiar a missa e proclamava a natureza perfeitamente correta das suas relações com as senhoras que o acompanhavam, todas de exemplar, e comprovável, devoção e honestidade. Nada disso adiantou, e Antonio Vivaldi teve mesmo que amargar um grande prejuízo econômico, afronta que o teria convencido a deixar definitivamente a Itália.\n[…]\nVivaldi morreria no ano seguinte, no dia 28 de julho de 1741, provavelmente em consequência da bronquite asmática que o acompanhara por toda a vida. Teve um enterro modesto. Anna Girò retornou a Veneza, onde morreria em 1750.\n[…]\nLista de obras de Antonio Vivaldi\n[…]\nFestival em memória de Antonio Vivaldi\n[…]\nPágina de Vivaldi na Classical Net (em inglês)\n[…]\nCatálogo de obras musicais de Vivaldi (em francês)\n[…]\nObras de Vivaldi no International Music Score Library Project\n[…]\nPartituras gratuitas de Antonio Vivaldi na CPDL, a Biblioteca Coral de Domínio Público\n[…]\nObras de Antonio Vivaldi no International Music Score Library Project\n[…]\nInstituto Vivaldi (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "As Quatro Estações",
      "descricao": "Conjunto de quatro concertos para violino de Antonio Vivaldi, publicado em 1725."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Cada concerto de As Quatro Estações, de Vivaldi, foi publicado junto com um poema que descreve as cenas da música. Que tipo de poema?",
    "resposta": "Soneto",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Four_Seasons_(Vivaldi)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Four_Seasons_(Vivaldi)",
        "situacao": "ok",
        "texto": "The Four Seasons (Italian: Le quattro stagioni) is a group of four violin concerti by Italian composer Antonio Vivaldi, each of which gives musical expression to a season of the year. These were composed around 1718–1723, when Vivaldi was the court chapel master in Mantua. They were published in 1725 in Amsterdam in what was at the time the Dutch Republic, together with eight additional concerti, \n[…]\nThe Four Seasons is the best known of Vivaldi's works. The inspiration for the concertos is not the countryside around Mantua, as initially supposed, where Vivaldi was living at the time, since according to Karl Heller they could have been written as early as 1716–1717, while Vivaldi was engaged with the court of Mantua only in 1718.\n[…]\nRegardless of the sonnets' authorship, The Four Seasons can be classified as program music, instrumental music intended to evoke something extra-musical, and an art form which Vivaldi was determined to prove sophisticated enough to be taken seriously.\n[…]\nThe Four Seasons is used in the eponymous 1981 film, along with other Vivaldi concertos for flute.\n[…]\nRCA Records released Vivaldi's Greatest Hit: The Ultimate Four Seasons, a 23-track album containing all four violin concerti and eleven different musicians' cover versions of selected movements. The album cover was illustrated by MUTTS creator Patrick McDonnell.\n[…]\nIn December 2025, Opera Philadelphia staged an opera adaptation, The Seasons, at the Kimmel Center which expanded the work around the theme of climate change; crafting a pastiche by combing opera arias by Vivaldi with the complete music from The Four Seasons. It was conceptualized by the work's librettist, the playwright Sarah Ruhl, and Opera Philadelphia director, Anthony Roth Costanzo.\n[…]\nMedia related to The Four Seasons (Vivaldi) at Wikimedia Commons\n[…]\nThe Four Seasons: Scores at the International Music Score Library Project"
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
    "indice": 20,
    "ancora": {
      "nome": "Messias",
      "descricao": "Oratório em inglês de Georg Friedrich Händel, de 1741, famoso pelo coro Aleluia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em 1741, Händel escreveu toda a partitura do oratório Messias num prazo curtíssimo. Quanto tempo ele levou?",
    "resposta": "Vinte e quatro dias",
    "distratores": [
      "Três dias",
      "Seis meses",
      "Dois anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Messiah_(Handel)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Messiah_(Handel)",
        "situacao": "ok",
        "texto": "Messiah (HWV 56) is an English-language oratorio composed in 1741 by George Frideric Handel. The text was compiled from the King James Bible and the Coverdale Psalter by Charles Jennens. It was first performed in Dublin on 13 April 1742 and received its London premiere a year later. After an initially modest public reception, the oratorio gained in popularity, eventually becoming one of the best-k\n[…]\nIn July 1741 Jennens sent him a new libretto for an oratorio; in a letter dated 10 July to his friend Edward Holdsworth, Jennens wrote: \"I hope [Handel] will lay out his whole Genius & Skill upon it, that the Composition may excell all his former Compositions, as the Subject excells every other subject. The Subject is Messiah\".\n[…]\nMessiah was presented in New York in 1853 with a chorus of 300 and in Boston in 1865 with more than 600. In Britain a \"Great Handel Festival\" was held at the Crystal Palace in 1857, performing Messiah and other Handel oratorios, with a chorus of 2,000 singers and an orchestra of 500.\n[…]\nAlthough Messiah is not in any particular key, Handel's tonal scheme has been summarised by the musicologist Anthony Hicks as \"an aspiration towards D major\", the key musically associated with light and glory. As the oratorio moves forward with various shifts in key to reflect changes in mood, D major emerges at significant points, primarily the \"trumpet\" movements with their uplifting messages. It is the key in which the work reaches its triumphant ending.\n[…]\nThe opening Sinfony is composed in E minor for strings, and is Handel's first use in oratorio of the French overture form. Jennens commented that the Sinfony contains \"passages far unworthy of Handel, but much more unworthy of the Messiah\"; Handel's early biographer Charles Burney merely found it \"dry and uninteresting\".\n[…]\nHandel's Messiah at Stanford University's Center for Computer Research in Music and Acoustics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Messias_%28H%C3%A4ndel%29",
        "situacao": "ok",
        "texto": "O Messias (Messiah) (HWV 56, 1741) é um oratório de Georg Friedrich Händel com 51 movimentos divididos em 3 partes, durando entre cerca 2h 15min e 2h 30min. Deve notar-se, desde já, que o tempo varia em função das diferentes interpretações (como qualquer outra composição musical que se mede por compassos e não por minutos).\n[…]\nO nome do oratório foi tirado do conceito judaico e cristão de messias. Para os cristãos, o Messias é Jesus. O próprio Händel era um cristão (como, aliás, a esmagadora maioria da população da Europa Ocidental no séc. XVIII, embora as diferenças entre catolicismo e protestantismo fossem motivo de enormes cisões, guerras e orientações estéticas diferentes) devoto e a obra é uma apresentação da vida de Jesus e de seu significado de acordo com a doutrina cristã.\n[…]\nÀ parte destas questões, o \"Messias\" é, acima de tudo, uma obra imersa em espiritualidade. Para os crentes e fiéis é uma prova da mais fervorosa devoção e reforço na fé. Para os não-crentes, para além do desafio intelectual, o \"Messias\" condensa várias emoções espirituais, consideradas mais na esfera da humanidade que na da divindade. Para uns e outros, Händel almejou com a seu oratório um objecto imaterial de profundo e enorme prazer estético.\n[…]\nApesar de Händel ter intitulado o seu oratório simplesmente de Messias (sem o \"O\"), a obra é amplamente conhecida erroneamente por O Messias. Este título popular é tão comum que alguns leigos consideram errada a versão correta.\n[…]\nO tempo total da obra é de aproximadamente duas horas e vinte e cinco minutos (2h25m14s), mas pode variar de acordo com a versão e os intérpretes.\n[…]\nBurrows, Donald (1991). Handel: Messiah. Cambridge, England: Cambridge University Press. ISBN 0-521-37620-3.\n[…]\nLuckett, Richard (1992). Handel's Messiah: A Celebration. London: Victor Gollancz. ISBN 0-575-05286-4.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Georg Friedrich Händel",
      "descricao": "Compositor barroco alemão naturalizado inglês (1685–1759), autor do Messias."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Bach e Händel nunca se conheceram, mas foram operados dos olhos pelo mesmo cirurgião inglês, sem sucesso. Que doença eles tinham em comum?",
    "resposta": "Catarata",
    "fonte": [
      "https://en.wikipedia.org/wiki/John_Taylor_(oculist)",
      "https://en.wikipedia.org/wiki/George_Frideric_Handel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/John_Taylor_(oculist)",
        "situacao": "ok",
        "texto": "John Taylor (c. 1703 – 1770 or 1772) was an early British eye surgeon, self-promoter and medical charlatan of 18th-century Europe. He was responsible for the surgical mistreatment of George Frideric Handel, Johann Sebastian Bach, and perhaps hundreds of others. Both Handel and Bach died shortly after the botched surgery performed by Taylor.\n[…]\nTaylor later claimed that during his visit to Marseille in 1734 he stimulated Jacques Daviel (the initiator of cataract extraction as opposed to couching) to pursue ophthalmic practice, which seems to be supported by contemporaneous evidence. Taylor dubbed himself \"Chevalier\", though the source of his title (equivalent to \"knight\" in English) is questionable, and his claims to be from an aristocratic family were false. Taylor was not ennobled until 1755, by Pope Benedict XIV.\n[…]\nTaylor toured Europe in a coach painted with images of eyes, performing the ancient technique of couching cataracts and other techniques in something like an eye surgery travelling medicine show, with claims, treatments, and payments coordinated for an easy exit out of town. In his expansive 1761 autobiography in two volumes, The Life and Extraordinary History of the Chevalier John Taylor,  Taylor styled himself \"Ophthalmiater (sic) Pontifical, Imperial, Royal.\"\n[…]\nTaylor's career was destructive. His general approach included bloodletting, laxatives, and eyedrops of blood from slaughtered pigeons, pulverized sugar, or baked salt. In late March 1750, during one of his European tours, Taylor operated on Bach's cataracts twice in Leipzig and reportedly blinded him. Bach fell ill with a fever and died less than four months later."
      },
      {
        "url": "https://en.wikipedia.org/wiki/George_Frideric_Handel",
        "situacao": "ok",
        "texto": "George Frideric (or Frederick) Handel ( HAN-dəl; baptised Georg Fried[e]rich Händel, German: [ˈɡeːɔʁk ˈfʁiːdʁɪç ˈhɛndl̩] ; 5 March 1685 [O.S. 23 February 1684]  – 14 April 1759) was a German-British Baroque composer well-known for his operas, oratorios, anthems, concerti grossi, and organ concerti.\n[…]\nIn 1727 Handel was commissioned to write four anthems for the Coronation ceremony of King George II. One of these, Zadok the Priest, has been played at every British coronation ceremony since. The words to Zadok the Priest are taken from the King James Bible.\n[…]\nIn August 1750, on a journey back from Germany to London, Handel was seriously injured in a carriage accident between The Hague and Haarlem in the Netherlands. In 1751 one of his eyes started to fail; the cause was a cataract which was operated on by the medical charlatan John Taylor. This did not improve his eyesight and possibly made it worse. He was completely blind by 1752. He died in 1759 at home in Brook Street, at the age of 74. The last performance he attended was of Messiah.\n[…]\nLetters and writings of George Frideric Handel\n[…]\nWorks by George Frideric Handel at Project Gutenberg\n[…]\nWorks by or about George Frideric Handel at the Internet Archive\n[…]\nWorks by George Frideric Handel at LibriVox (public domain audiobooks)\n[…]\nPortraits of George Frideric Handel at the National Portrait Gallery, London\n[…]\nFree scores by George Frideric Handel at the International Music Score Library Project (IMSLP): includes Complete Works Edition (Ausgabe der Deutschen Händelgesellschaft)\n[…]\nFree scores by George Frideric Handel in the Choral Public Domain Library (ChoralWiki)\n[…]\n\"George Frideric Handel cylinder recordings\", Cylinder Audio Archive, University of California, Santa Barbara Library.\n[…]\nKunstDerFuge .mid files: George Frideric Handel – MIDI files"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Johann Sebastian Bach",
      "descricao": "Compositor e organista alemão do barroco (1685–1750)."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1717, o duque de Weimar mandou prender Johann Sebastian Bach por quase um mês. Qual foi o motivo?",
    "resposta": "Bach insistia em deixar o emprego",
    "fonte": [
      "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach",
        "situacao": "ok",
        "texto": "Johann Sebastian Bach (31 March [O.S. 21 March] 1685 – 28 July 1750) was a German composer and musician of the late Baroque period.\n[…]\nBach's insistence on the tonal system and contribution to shaping it did not imply he was less at ease with the older modal system and the genres associated with it: more than his contemporaries (who had \"moved on\" to the tonal system without much exception), he often returned to the then-antiquated modes and genres.\n[…]\nIn 1802 Johann Nikolaus Forkel published Johann Sebastian Bach: His Life, Art, and Work, the first Bach biography, dedicated to van Swieten.\n[…]\nBach festivals were held on several continents, and competitions and prizes such as the International Johann Sebastian Bach Competition, Johann Sebastian Bach International Piano Competition (Washington, D.C.), and the Royal Academy of Music Bach Prize were named after him. While by the end of the 19th century, Bach had been inscribed in nationalism and religious revival, the late 20th century saw Bach as the subject of a secularised art-as-religion (Kunstreligion).\n[…]\nPortraits of Johann Sebastian Bach\n[…]\nBach Cantatas Website, a comprehensive companion to Bach's cantatas.\n[…]\nWorks by or about Johann Sebastian Bach at the Internet Archive.\n[…]\nFree scores by Johann Sebastian Bach at the International Music Score Library Project (IMSLP).\n[…]\nJohann Sebastian Bach at the Musopen project.\n[…]\nMusic manuscripts and early prints at Bach Digital website.\n[…]\nJohann Sebastian Bach recordings at the Discography of American Historical Recordings.\n[…]\nJohann Sebastian Bach (1685–1750) at Muziekweb website.\n[…]\nAll of Bach website of the Netherlands Bach Society."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Johann_Sebastian_Bach",
        "situacao": "ok",
        "texto": "Johann Sebastian Bach (Eisenach, 31 de março de 1685 – Leipzig, 28 de julho de 1750) foi um compositor, cravista, mestre de capela, regente, organista, professor, violinista e violista oriundo do Sacro Império Romano-Germânico, atual Alemanha.\n[…]\nEm Weimar Bach recebeu desde logo um excelente salário de 229 florins, e desempenhou as funções de organista e violinista da corte do novo duque reinante, Wilhelm Ernst, cujos interesses musicais eram semelhantes aos seus. Incentivado pelo patrão, que era um luterano ferrenhamente ortodoxo e valorizava muito a música sacra, durante os primeiros anos Bach concentrou-se na obra para órgão, mais uma vez induzindo seu empregador a reformar o instrumento.\n[…]\nDa última doença de Bach pouco se sabe, exceto que durou vários meses e o impediu de terminar A Arte da Fuga. Seus empregadores não esperaram sua morte para procurarem um sucessor. Faleceu em 28 de julho de 1750, em Leipzig e foi enterrado dois ou três dias depois no cemitério da Igreja de S. João. Seu filho Carl Philipp e seu antigo aluno Johann Friedrich Agricola escreveram em conjunto um obituário, importante como fonte de informações em primeira mão, ainda que incompleto e algo inexato.\n[…]\nTrês filhas chegaram até a idade adulta: Elisabeth Juliane Friederica (1726–1781) que se casou com o aluno de Bach Johann Christoph Altnikol, Johanna Carolina (1737–1781) e Regina Susanna (1742–1809).\n[…]\nNeste sentido, Bach é uma figura de transição entre duas eras, sintetizando ambas as tendências, mas sua insistência nas formas polifônicas densas e complexas foi parte do motivo pelo qual sua música madura encontrou uma receptividade relativamente fraca e foi vista por alguns de seus contemporâneos como antiquada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Joseph Haydn",
      "descricao": "Compositor austríaco do período clássico (1732–1809), chamado de pai da sinfonia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Uma melodia que Haydn compôs em 1797 em homenagem ao imperador austríaco é hoje a música do hino nacional de qual país?",
    "resposta": "Alemanha",
    "distratores": [
      "Áustria",
      "Hungria",
      "Suíça"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gott_erhalte_Franz_den_Kaiser",
      "https://en.wikipedia.org/wiki/Deutschlandlied"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gott_erhalte_Franz_den_Kaiser",
        "situacao": "ok",
        "texto": "\"Gott erhalte Franz den Kaiser\" also called the \"Kaiserhymne\", is an anthem composed in 1797 by Joseph Haydn. In its original version it was paired with lyrics by Lorenz Leopold Haschka and served as a patriotic song, expressing devotion to Francis II, Emperor of the Holy Roman Empire.\n[…]\n\"Gott erhalte Franz den Kaiser\" was first performed on the Emperor's birthday, 12 February 1797. It proved popular, and came to serve unofficially as Austria's first national anthem.\n[…]\nDuring 1797, Haydn was working on a commission for six string quartets from Count Joseph Erdödy. He conceived the idea of composing a slow movement for one of the quartets consisting of the Emperor's hymn as theme, followed by four variations, each involving the melody played by one member of the quartet. The finished quartet, now often called the \"Emperor\" quartet, was published as the third of the Opus 76 quartets, dedicated to Count Erdödy. It is perhaps Haydn's most famous work in this genre.\n[…]\nJoseph Haydn seems to have been particularly fond of his creation. During his frail and sickly old age (1802–1809), the composer often would struggle to the piano to play his song, often with great feeling, as a form of consolation; and as his servant Johann Elssler narrated, it was the last music Haydn ever played:\n[…]\nLater composers in the Western classical canon have repeatedly quoted or otherwise employed Haydn's tune, as is demonstrated by the following chronological list. As the tune was widely known, the uses by other composers were heard as quotations and served as an emblem of Austria, of Austrian patriotism, or of the Austrian monarchy.\n[…]\nBedřich Smetana used the tune in his Festive Symphony (1853), which the composer intended to dedicate to the Emperor Franz Joseph I of Austria."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Deutschlandlied",
        "situacao": "ok",
        "texto": "The \"Deutschlandlied\", officially titled \"Das Lied der Deutschen\", is a German poem written by August Heinrich Hoffmann von Fallersleben. A popular song which was made for the cause of creating a unified German state, it was adopted in its entirety in 1922 by the Weimar Republic, replacing the de facto anthem \"Heil dir im Siegerkranz\". The first stanza of the \"Deutschlandlied\" was used alongside t\n[…]\nThe music is derived from that of \"Gott erhalte Franz den Kaiser\", composed in 1797 by the Austrian composer Joseph Haydn as an anthem for the birthday of Francis II, Emperor of the Holy Roman Empire and later of Austria.\n[…]\nThe melody of the \"Deutschlandlied\" was written by Joseph Haydn in 1797 to provide music to the poem \"Gott erhalte Franz den Kaiser\" (\"God save Francis the Emperor\") by Lorenz Leopold Haschka. In its original form, the song was an anthem honouring Francis II, emperor of the Austrian Empire. It was intended as an impetus to Austrian patriotism, modelled on Great Britain's \"God Save the King\".\n[…]\nThe melody of the \"Deutschlandlied\" was originally written by Joseph Haydn in 1797 to provide music to the poem \"Gott erhalte Franz den Kaiser\" ('God save Franz the Emperor') by Lorenz Leopold Haschka. The song was a birthday anthem to Francis II of the House of Habsburg, and was intended to rival in merit the British \"God Save the King\".\n[…]\nThe German composer Max Reger quotes the \"Deutschlandlied\" in the final section of his collection of organ pieces Sieben Stücke, Op. 145, composed in 1915–16 when it was a patriotic song but not yet the national anthem.\n[…]\nThe Kaiserquartett is the third of the six String Quartets, Op. 76, which Haydn composed in 1797, containing four variations on the musical theme used for the Deutchslandlied.\n[…]\n\"Das Kaiserlied\" (Haydn): Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gott_erhalte_Franz_den_Kaiser",
        "situacao": "ok",
        "texto": "Gott erhalte Franz den Kaiser (\"Deus salve o imperador Francisco\") foi um hino a Francisco I, Imperador da Áustria. Lorenz Leopold Haschka (1749-1827) escreveu a poesia e Joseph Haydn compôs a melodia. É também conhecido por \"Kaiserhymne\" (Hino do Imperador).\n[…]\nA melodia, com diversas variações, é também o 2.° movimento de um dos mais famosos quartetos de corda de Haydn, apelidado de \"Quarteto do Imperador\". A melodia mais tarde foi utilizada em Das Lied der Deutschen, que até hoje é o Hino Nacional da Alemanha.\n[…]\nHaydn na Inglaterra conheceu o favorito hino nacional \"God Save the King\" que poderia ser usado em ocasiões festivas e como sinal de amor e reverência ao governante. Com essa inspiração ao retornar de viagem, Haydn apresentou ao seu amigo Freiherr van Swieten, aristocrata holandês a serviço do império Austríaco, a ideia de que seu país também tivesse um hino nacional. Ainda a canção poderia ser utilizada para inflamar o coração dos austríacos e incentivá-los à luta que estava ocorrendo.\n[…]\nFreiherr van Swieten logo tomou conselho com o então presidente da Áustria baixa Franz Count von Saurau. O poeta Lorenz Haschka formulou a letra que Haydn adaptou à música.\n[…]\nUnsern guten Kaiser Franz!\n[…]\nGott erhalte Franz, den Kaiser,\n[…]\nUnsern guten Kaiser Franz!\n[…]\nComo em toda música de Haydn, há suspeitas de que ele teve parte do material da composição a partir de canções folclóricas que conhecia. Essa hipótese nunca teve aceitação unânime, a alternativa é que a melodia original de Haydn teria sido adaptada em diversas versões de canções folclóricas pelo povo.\n[…]\nUma possibilidade seria \"Stal se jesem\", uma melodia cantada no norte da Croácia. Independente da fonte o próprio Haydn executou vários rascunhos até chegar na composição final.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Claude Debussy",
      "descricao": "Compositor francês, nascido em 1862, associado ao impressionismo musical."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A capa da primeira edição de O Mar, obra orquestral de Debussy, reproduzia a famosa grande onda pintada por qual artista japonês?",
    "resposta": "Katsushika Hokusai",
    "fonte": [
      "https://en.wikipedia.org/wiki/La_mer_(Debussy)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_mer_(Debussy)",
        "situacao": "ok",
        "texto": "La mer, trois esquisses symphoniques pour orchestre (French for The sea, three symphonic sketches for orchestra), or simply La mer (The Sea), L. 109, CD. 111, is an orchestral composition by the French composer Claude Debussy.\n[…]\nAlthough some of Debussy's contemporaries drew analogies between La mer and French Impressionist paintings, much to the composer's irritation, others have detected the influence of his admiration for the English painter J. M. W. Turner and Debussy's choice of Hokusai's c. 1831 woodblock print The Great Wave off Kanagawa for the cover of the printed score indicates the influence of Japanese art on him.\n[…]\nBarraqué, Jean (June 1988). \"La Mer de Debussy, ou la naissance des formes ouverts\". Analyse Musicale (in French) (12): 15–62.\n[…]\nDeVoto, Mark (2007). \"The Debussy Sound: colour, texture, gesture\". The Cambridge Companion to Debussy. Simon Trezise (ed). Cambridge: Cambridge University Press. ISBN 978-0-521-65243-8.\n[…]\nHowat, Roy (1986). Debussy in Proportion: A Musical Analysis. Cambridge: Cambridge University Press. ISBN 978-0-521-31145-8.\n[…]\nJensen, Eric Frederick (2014). Debussy. Oxford and New York: Oxford University Press. ISBN 978-0-19-973005-6.\n[…]\nPotter, Caroline (2007). \"Debussy and Nature\". The Cambridge Companion to Debussy. Simon Trezise (ed). Cambridge: Cambridge University Press. ISBN 978-0-521-65243-8.\n[…]\nSimeone, Nigel (2007). \"Debussy and Expression\". The Cambridge Companion to Debussy. Simon Trezise (ed). Cambridge: Cambridge University Press. ISBN 978-0-521-65243-8.\n[…]\nTrezise, Simon (1994). Debussy: La mer. Cambridge: Cambridge University Press. ISBN 978-0-521-44656-3."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/La_mer",
        "situacao": "ok",
        "texto": "La Mer é uma peça sinfônica composta por Claude Debussy, compositor Romântico francês, em 1905, e considerada uma obra-prima da orquestração. É classificada com uma obra da corrente musical Impressionista.\n[…]\n\"La Mer, três esboços sinfônicos\" ou como é mais conhecida - \"La Mer\", é uma peça para orquestra composta por Claude Debussy. É considerada a obra-prima do autor, que com ela revolucionou a maneira de compor e dispor dos elementos da orquestra em uma peça. No plano da harmonia, ela também foi revolucionária, já que ao fugir da tonalidade tradicional o autor criou um novo universo harmônico, empregando modos e escalas antigas e não europeias.\n[…]\nClaude Debussy começou a compor a obra em setembro de 1903, na Borgonha, continuou a trabalhar nela em Paris, e a concluiu em Eastbourne, Inglaterra, a beira do Canal da Mancha, no dia 5 de março de 1905. A sua estréia se deu nos Concertos Lamoureux sob a regência de Camille Chevillard, no dia 15 de outubro de 1905. Foi pouco compreendida pos seus conterrâneos em sua estréia.\n[…]\nA crítica mais famosa da época foi escrita por Pierre Lalo, famoso crítico francês, que escreveu: \"Não ouço, não vejo e não sinto o mar\". Na realidade, a obra não é uma composição sobre o mar, mas sim sobre lembranças e sentimentos que evocam o mar, segundo o seu autor.\n[…]\nA banda Nine Inch Nails fez uma homenagem de mesmo nome a obra criando uma faixa ao piano, que foi lançado no disco The Fragile. Criado quando Trent Reznor estava no auge de uma depressão profunda, a faixa instrumental utiliza-se de ritmos e características hipnóticas.\n[…]\n«As obras catalogadas de Claude Debussy, (em francês)»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "A Sagração da Primavera",
      "descricao": "Balé de Igor Stravinsky estreado em Paris em 1913."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No filme Fantasia, da Disney, de 1940, A Sagração da Primavera acompanha a história da Terra até o desaparecimento de quais animais?",
    "resposta": "Dinossauros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fantasia_(1940_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fantasia_(1940_film)",
        "situacao": "ok",
        "texto": "Fantasia is a 1940 American animated anthology film produced by Walt Disney Productions. The third Disney animated feature film, it consists of eight animated segments set to pieces of classical music conducted by Leopold Stokowski, seven of which are performed by the Philadelphia Orchestra. Music critic and composer Deems Taylor acts as the film's Master of Ceremonies who introduces each segment \n[…]\nThe group was considering The Firebird by Igor Stravinsky (which was used later in the sequel Fantasia 2000), but Taylor noted that his \"Le Sacre du printemps would be something on that order\", to which Disney replied upon hearing a recording, \"This is marvelous! It would be perfect for prehistoric animals. There would be something terrific in dinosaurs, flying lizards, and prehistoric monsters. There could be beauty in the settings.\"\n[…]\nOther composers and music critics leveled criticism at the premise of the film itself, arguing that presenting classical music with visual images would rob the musical pieces of their integrity. Composer and music critic Virgil Thomson praised Fantasound which he thought offered \"good transmission of music\", but disliked the \"musical taste\" of Stokowski, with exception to The Sorcerer's Apprentice and The Rite of Spring.\n[…]\nFantasia was ranked fifth at the 1940 National Board of Review Awards in the Top Ten Films category. Disney and Stokowski won a Special Award for the film at the 1940 New York Film Critics Circle Awards. Fantasia was the subject of two Academy Honorary Awards on February 26, 1942—one for Disney, William Garity, John N. A.\n[…]\nBritish music publisher Boosey & Hawkes filed a further lawsuit in 1993, contending that Disney did not have the rights to distribute The Rite of Spring in the 1991 video releases because the permission granted to Disney by Stravinsky in 1940 was only in the context of a film to be shown in theaters."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fantasia_%28filme%29",
        "situacao": "ok",
        "texto": "Fantasia (bra/prt: Fantasia) é um filme norte-americano, do gênero animação, lançado pela Walt Disney Productions em 1940. É o terceiro filme de animação dos estúdios Disney e consiste de oito segmentos animados acompanhados cada um de músicas clássicas conduzidas por Leopold Stokowski, sete deles foram apresentados pela Orquestra de Filadélfia. O compositor musical e crítico americano Deems Taylo\n[…]\nApós uma série de tentativas não finalizadas de realizar uma continuação para obra, dentre as quais se destaca Musicana, o sobrinho de Disney, Roy E. Disney, coproduziu a única sequência lançada oficialmente de Fantasia, Fantasia 2000.\n[…]\nDe Igor Stravinsky; é como uma explicação científica da evolução da vida na Terra, desde os primeiros seres microscópicos aos gigantescos dinossauros.\n[…]\nDe Beethoven; tem como cenário o Monte Olimpo e o elenco de personagens é composto de figuras fantasiosas como cavalos alados que cortam o céu, sátiros que saltam pelos campos, cupidos, centauros e suas namoradas. Este segmento do filme causou muita polêmica ao mostrar centauros e cupidos nus e mostrou uma centaura negra.\n[…]\nA trilha sonora de Fantasia foi gravada utilizando múltiplos canais de áudio e reproduzidos no sistema Fantasound, uma maneira pioneira de reprodução de som que fez do longa o primeiro filme comercial lançado com som estéreo.\n[…]\nA trilha sonora foi disponibilizada para download digital na iTunes Store. A versão digital contém a faixa \"Rite of Spring\", faixa que não está presente na edição física.\n[…]\nSegundo o site Box Office Mojo, Fantasia arrecadou US$ 76,4 milhões nos Estados Unidos e é a 22.ª maior bilheteria de um filme nesse país quando ajustada a inflação.\n[…]\nO filme estreou no Brasil em 23 de agosto de 1941. A sessão de estreia do longa realizada no Cine Pathé, Rio de Janeiro, teve a presença de Walt Disney, do então presidente da República Getúlio Vargas e sua esposa Darcy Vargas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Carlos Gomes",
      "descricao": "Compositor brasileiro de óperas (1836–1896), nascido em Campinas, autor de O Guarani e Lo Schiavo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1864, o jovem Carlos Gomes foi estudar música em Milão graças a uma bolsa concedida por qual governante brasileiro?",
    "resposta": "Dom Pedro II",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carlos_Gomes",
      "https://en.wikipedia.org/wiki/Ant%C3%B4nio_Carlos_Gomes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Gomes",
        "situacao": "ok",
        "texto": "Antônio Carlos Gomes (pronúncia em português brasileiro: [ɐ̃ˈtoni.u ˈkaʁluz ˈɡomis]; 11 de julho de 1836 – 16 de setembro de 1896) foi um compositor brasileiro, lembrado sobretudo por suas óperas. Figura central do romantismo musical brasileiro, foi o primeiro compositor das Américas a alcançar grande sucesso no mundo operístico europeu.\n[…]\nSeu irmão José Pedro de Sant'Ana Gomes tornou-se um de seus companheiros musicais e apoiadores mais próximos.\n[…]\nOs papéis musicais preservados de Gomes estão dispersos em coleções no Brasil e na Itália. Em 2017, a UNESCO inscreveu Antonio Carlos Gomes: Composer of two worlds no Registro Memória do Mundo, reunindo manuscritos autógrafos, partituras, cartas e material relacionado preservado por oito instituições brasileiras e pelo museu e arquivo do La Scala, em Milão. Boa parte do material chegou a coleções públicas por meio dos descendentes de Gomes, especialmente sua filha Ítala Gomes Vaz de Carvalho.\n[…]\nO Museu Carlos Gomes surgiu de um esforço iniciado no começo do século XX, em Campinas, para reunir cartas, fotografias, documentos, objetos e partituras ligados ao compositor. Seu arquivo musical inclui a Coleção Carlos Gomes, formada por manuscritos do compositor, e a Coleção Manuel José Gomes, que preserva material ligado a seu pai, Manuel José Gomes, e a seu irmão José Pedro de Sant'Ana Gomes.\n[…]\nA memória pública de Gomes no Brasil esteve estreitamente ligada ao mundo cultural do Império do Brasil. Seu primeiro sucesso no Rio de Janeiro veio por meio das instituições e do patrocínio da corte imperial, e sua carreira europeia se tornou possível com o apoio de Pedro II. Quando Il Guarany voltou ao Rio de Janeiro depois da estreia em Milão, o público brasileiro a recebeu como mais do que uma ópera italiana bem-sucedida escrita por um compositor brasileiro.\n[…]\nMúsica"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ant%C3%B4nio_Carlos_Gomes",
        "situacao": "ok",
        "texto": "Antônio Carlos Gomes (Brazilian Portuguese: [ɐ̃ˈtoni.u ˈkaʁluz ˈɡomis, ɐ̃ˈtonju -]; 11 July 1836 in Campinas – 16 September 1896 in Belém) was a Brazilian composer notable for being the first New World composer whose work was accepted by Europe. He was the only non-European who was successful as an opera composer in Italy, during the \"golden age of opera\" contemporary to Verdi and Puccini, and the\n[…]\nHis childhood's musical tendencies were soon stimulated by his father and by his older brother, José Pedro de Sant'Ana Gomes, also a conductor. José Pedro was the most dedicated guide and adviser in his brother's artistic career. He convinced Antônio to visit the Court where he became a protégé of Emperor Dom Pedro II, who, being notoriously interested in the careers of Brazilian artists and intellectuals, made it possible for Antônio Carlos to study at the Musical Conservatory of Rio de Janeiro.\n[…]\nIn 1876, at the request of Emperor Dom Pedro II, Carlos Gomes composed the Hymn for the First Centennial of the American Independence (also known as Saluto del Brasile), written especially for the celebrations of the centennial of the United States’ independence. The work was performed during the Centennial Exposition on July 4 of that year, and again in New York on July 9. The emperor, who attended the ceremony and presented U.S. President Ulysses S.\n[…]\nInvited by the governor of the Brazilian province of Pará to direct the Musical Conservatory, the maestro traveled to the capital Belém, willing to take the position. However, shortly after arriving, Carlos Gomes, by then an elderly man in poor health, died at 22:20 BRT on 16 September 1896. Besides his eight operas, he composed songs (3 books), choruses, and piano pieces.\n[…]\nFree scores by Antonio Carlos Gomes at the International Music Score Library Project (IMSLP)\n[…]\nFree scores by Antonio Carlos Gomes at Musica Brasilis website"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Chiquinha Gonzaga",
      "descricao": "Compositora, pianista e maestrina brasileira, autora da marcha carnavalesca Ó Abre Alas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1914, o maxixe Corta-Jaca, de Chiquinha Gonzaga, escandalizou a elite ao ser tocado no palácio presidencial pela esposa de qual presidente?",
    "resposta": "Hermes da Fonseca",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Nair_de_Teff%C3%A9",
      "https://pt.wikipedia.org/wiki/Chiquinha_Gonzaga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Nair_de_Teff%C3%A9",
        "situacao": "ok",
        "texto": "Nair de Teffé von Hoonholtz (Petrópolis, 10 de junho de 1886 – Niterói, 10 de junho de 1981), conhecida profissionalmente pelo pseudônimo Rian e, depois do casamento, também como Nair de Teffé Hermes da Fonseca, foi uma caricaturista, pintora, atriz, pianista, escritora e promotora cultural brasileira. É reconhecida como a primeira mulher a publicar regularmente caricaturas na imprensa brasileira,\n[…]\nEm 8 de dezembro de 1913, casou-se com o então presidente Hermes da Fonseca e tornou-se primeira-dama do Brasil durante o último ano do mandato presidencial. No Palácio do Catete, promoveu reuniões artísticas e musicais que procuravam aproximar formas de cultura popular dos espaços oficiais. A mais conhecida ocorreu em 26 de outubro de 1914, quando executou ao violão o tango brasileiro Gaúcho, popularmente chamado de Corta-Jaca, de Chiquinha Gonzaga.\n[…]\nEm 26 de outubro de 1914, nas semanas finais do governo Hermes da Fonseca, o Palácio do Catete recebeu uma reunião de despedida oferecida ao corpo diplomático e a integrantes da sociedade carioca. O programa era composto sobretudo por música de concerto europeia, mas incluía Gaúcho, tango brasileiro composto por Chiquinha Gonzaga e popularmente conhecido como Corta-Jaca.\n[…]\nA polêmica ganhou maior dimensão quando Rui Barbosa, adversário político de Hermes da Fonseca, criticou o episódio no Senado em 7 de novembro de 1914. Em seu discurso, classificou o Corta-Jaca por meio de expressões depreciativas e afirmou que uma dança popular não deveria receber as mesmas honras reservadas à música de concerto.\n[…]\nDurante boa parte do século XX, Nair foi lembrada principalmente como esposa de Hermes da Fonseca e protagonista do episódio do Corta-Jaca. A retomada de sua obra por Herman Lima e a incorporação de desenhos a acervos públicos ajudaram a deslocar o interesse para sua atividade como caricaturista.\n[…]\nPalácio do Catete"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chiquinha_Gonzaga",
        "situacao": "ok",
        "texto": "Francisca Edviges Neves \"Chiquinha\" Gonzaga (Rio de Janeiro, 17 de outubro de 1847 – Rio de Janeiro, 28 de fevereiro de 1935), foi uma compositora, instrumentista, maestrina e abolicionista brasileira.\n[…]\nA relação entre a música popular e os espaços de prestígio social, tema recorrente na trajetória de Chiquinha Gonzaga, voltou a despertar polêmica alguns anos depois. Em 1895, ela compôs a canção Corta Jaca, integrante da opereta burlesca Zizinha Maxixe. Anos mais tarde, em 1914, a obra esteve no centro de uma controvérsia política quando a primeira-dama do Brasil, Nair de Teffé, a executou ao violão em um sarau no Palácio do Catete, então sede da Presidência da República.\n[…]\nChiquinha foi convidada pela amiga Nair de Tefé para alguns saraus no Palácio do Catete, a então morada presidencial, mesmo sob a contrariedade imposta pela família da primeira-dama. Em 1914, no palácio presidencial, o recital de lançamento do Corta Jaca, maxixe composto por Chiquinha, escandalizou a imprensa e a burguesia, pois a própria primeira-dama do país acompanhou a maestrina no violão.\n[…]\nForam feitas críticas ao governo e retumbantes comentários sobre os \"escândalos\" no palácio, pela promoção e divulgação de músicas com origens em danças vulgares. O ato de levar para o Palácio do Governo a música popular brasileira foi considerado, na época, uma quebra de protocolo. Após o término do mandato presidencial, Hermes da Fonseca e Nair de Tefé mudaram-se para a França, onde permaneceram por um bom tempo, perdendo contato com Chiquinha.\n[…]\nObras de Chiquinha Gonzaga no International Music Score Library Project\n[…]\nChiquinha Gonzaga no IMDb\n[…]\nChiquinha Gonzaga no Almanaque da Folha de S. Paulo"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Sergei Rachmaninoff",
      "descricao": "Compositor, pianista e regente russo do final do Romantismo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A balada All by Myself, sucesso de Eric Carmen e depois de Celine Dion, usa a melodia de qual obra de Rachmaninoff?",
    "resposta": "Segundo Concerto para Piano",
    "distratores": [
      "Terceiro Concerto para Piano",
      "Rapsódia sobre Paganini",
      "Vocalise"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Piano_Concerto_No._2_(Rachmaninoff)",
      "https://en.wikipedia.org/wiki/All_by_Myself"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piano_Concerto_No._2_(Rachmaninoff)",
        "situacao": "ok",
        "texto": "The Piano Concerto No. 2 in C minor, Op. 18, is a concerto for piano and orchestra composed by Sergei Rachmaninoff between June 1900 and April 1901. The piece established his fame as a concerto composer and is one of his most enduringly popular pieces.\n[…]\nIn June 1900, after receiving an invitation to perform Mefistofele in La Scala, Feodor Chaliapin invited Rachmaninoff to live with him in Italy, where he sought his advice while studying the opera. During his stay, Rachmaninoff composed the love duet of his opera Francesca da Rimini and also began working on the second and third movements of his Second Piano Concerto.\n[…]\nBefore continuing composition, Rachmaninoff received financial aid from Siloti to tide him over for the next three years, securing his ability to compose without worrying about rent. By April 1901, while staying with Goldenweiser, he finished the first movement of the concerto and subsequently premiered the full work at a Moscow Philharmonic Society concert on 9 November [O.S. 27 October], again with him at the piano and Siloti conducting.\n[…]\nA 1927 Liverpool Post article called the concerto a \"somewhat catchpenny work though it had plenty of rather cheap glitter\". Rachmaninoff's last performance of the Piano Concerto No. 2 was on 18 June 1942 with Vladimir Bakaleinikov leading the Los Angeles Philharmonic at the Hollywood Bowl. Reviewing the performance in Los Angeles Evening Citizen News, Richard D.\n[…]\nThe concerto is scored for piano and orchestra:\n[…]\nThen the B section is heard. It builds up to a short climax centered on the piano, which leads to a cadenza for the piano.\n[…]\nPiano Concerto No. 2: Scores at the International Music Score Library Project\n[…]\nFree sheet music of Rachmaninoff's Piano Concerto No. 2 from Cantorion.org"
      },
      {
        "url": "https://en.wikipedia.org/wiki/All_by_Myself",
        "situacao": "ok",
        "texto": "\"All by Myself\" is a song by American singer-songwriter Eric Carmen, released by Arista Records in December 1975 as the first single from Carmen's eponymous debut album. The verse is based on the second movement (Adagio sostenuto) of Russian composer Sergei Rachmaninoff's 1900–01 Piano Concerto No. 2 in C minor, Opus 18. The chorus draws from the song \"Let's Pretend\", which Carmen had written and \n[…]\nAccording to Eric Carmen, he first wrote the solo section of the song, working in four-bar segments and completing the interlude after two months. He then needed to place it within a full composition. After listening to Sergei Rachmaninoff's second piano concerto, a piece widely associated with the 1945 British film Brief Encounter, he adapted the melody of its second movement to create the verse.\n[…]\nRecord World commented that Carmen \"croons over a backdrop of cascading strings on this self-penned delight from his recent album\".\n[…]\nDion's version received positive reviews from most music critics. Bill Lamb from About.com placed it at number nine on his list of \"Top 10 Celine Dion Songs\". Entertainment Weekly editor Chuck Eddy wrote that \"only in her desolate cover of Eric Carmen's 'All by Myself' does she truly crash through the glass ceiling of passion\".\n[…]\nA music video was produced to promote the single, directed by British filmmaker Nigel Dick. It includes footage from Dion's photo session for the Falling into You album cover and scenes from her Live à Paris concert. These are intercut with sepia-toned shots of Dion appearing lonely and contemplative. The video was uploaded to Dion's official YouTube channel in 2012 and had accumulated more than 85 million views as of April 2026. A video for the Spanish version was added in 2021.\n[…]\n\"All by Myself – Eric Carmen\" at Discogs (list of releases)\n[…]\n\"All by Myself – Celine Dion\" at Discogs (list of releases)"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Franz Liszt",
      "descricao": "Compositor e pianista virtuose húngaro do Romantismo (1811–1886)."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Cosima, filha do pianista Franz Liszt, deixou o primeiro marido para se casar com qual compositor alemão de óperas?",
    "resposta": "Richard Wagner",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cosima_Wagner"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cosima_Wagner",
        "situacao": "ok",
        "texto": "Francesca Gaetana Cosima Wagner (née Liszt; 24 December 1837 – 1 April 1930) was a German businesswoman who was the daughter of the Hungarian composer and pianist Franz Liszt and Franco-German romantic author Marie d'Agoult. She became the second wife of the German composer Richard Wagner, and with him founded the Bayreuth Festival as a showcase for his stage works. After his death she devoted the\n[…]\nOn 10 October 1853 Liszt arrived at the Patersi apartment, his first visit to his daughters since 1845. With him were two fellow-composers: Hector Berlioz and Richard Wagner. Carolyne's daughter Marie, who was present, described Cosima's appearance as \"in the worst phase of adolescence, tall and angular, sallow ... the image of her father. Only her long golden hair, of unusual sheen, was beautiful\".\n[…]\nAt Wagner's instigation, von Bülow accepted a post as Ludwig's \"royal pianist\"; he and Cosima moved to Munich, and took a house conveniently close to Wagner's, ostensibly so that Cosima could work as the composer's secretary. From 29 June 1864 Cosima spent more than a week alone with Wagner at Lake Starnberg, before von Bülow joined them on 7 July. According to Wagner's housekeeper, Anna Mrazek, \"it was easy to tell that something was going on between Frau Cosima and Richard Wagner\".\n[…]\nIn the immediate aftermath of Cosima's death, some writers heaped copious praise on her. Ernest Newman, Wagner's biographer, called her \"the greatest figure that ever came within [Wagner's] circle\"; Richard Du Moulin-Eckart, Cosima's first biographer, introduced her as \"the greatest woman of the century\". In time judgements became more measured, and divided.\n[…]\nDu Moulin Eckart, Richard (1930). Cosima Wagner. New York: A. A. Knopf. OCLC 410838.\n[…]\nWagner, Richard (1983). My Life. Translated by Gray, Andrew. Cambridge UK: Cambridge University Press. ISBN 978-0-521-22929-6."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cosima_Wagner",
        "situacao": "ok",
        "texto": "Cosima Francesca Gaetana Wagner (Bellagio, 24 de dezembro de 1837 — Bayreuth, 1 de abril de 1930) foi a segunda esposa do compositor alemão Richard Wagner, filha do pianista húngaro Franz Liszt com a Condessa Marie d'Agoult, (Marie de Flavigny).\n[…]\nFoi esposa do pianista e maestro Hans von Bülow, de quem se separou em 1867 para viver com Wagner, de quem mais tarde tornou-se a sua segunda esposa. Com ele teve duas filhas e um filho. Após a morte do marido, em 1883, tornou-se dirigente do Festival de Bayreuth até 1914. Morreu com a idade de 92 anos, em 1930.\n[…]\nCosima deixou dois grossos volumes de diários, 1869-1877, e 1878-1883, nos quais relata com detalhes sua vida íntima com Richard Wagner. Os diários param no dia 12 de fevereiro de 1883, véspera da morte de Wagner.\n[…]\nRichard Wagner (família)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Canto orfeônico",
      "descricao": "Programa de canto coral nas escolas brasileiras liderado por Heitor Villa-Lobos nas décadas de 1930 e 1940."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O canto orfeônico, programa de corais escolares liderado por Villa-Lobos, ganhou força durante o governo de qual presidente brasileiro?",
    "resposta": "Getúlio Vargas",
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
        "texto": "Heitor Villa-Lobos (Rio de Janeiro, 5 de março de 1887 – Rio de Janeiro, 17 de novembro de 1959) foi um compositor, maestro, violoncelista, pianista e violonista brasileiro, descrito como \"a figura criativa mais significativa do Século XX na música clássica brasileira\", e se tornando o compositor sul-americano mais conhecido de todos os tempos. Compositor prolífico, escreveu numerosas obras orques\n[…]\nAs publicações de Villa-Lobos na era Vargas incluíam propaganda pela nacionalidade brasileira (brasilidade), e teoria musical. O seu Guia Prático publicou 11 volumes, Solfejos (2 volumes, 1942 e 1946) contendo exercícios de canto, e Canto Orfeônico (1940 e 1950) contendo músicas patrióticas para escolas e eventos civis. A sua música para o filme O Descobrimento do Brasil de 1936, que inclui versões de composições antigas, foi também adaptada para suíte orquestral.\n[…]\nVilla-Lobos publicou A Música Nacionalista no Governo Getúlio Vargas c.1941, no qual ele considerava a nação como uma entidade sagrada, e os seus símbolos (entre eles, a bandeira com o lema nacional e o próprio hino nacional) como invioláveis. Villa-Lobos foi também o diretor de um comitê que tinha como tarefa estabelecer uma versão definitiva para o hino nacional brasileiro.\n[…]\nDepois de 1937, durante o Estado Novo, período em qual Vargas tomou poder por decreto, Villa-Lobos continuou com a produção de obras patrióticas visando a grande massa brasileira. O \"Dia da Independência\", celebrado no dia 7 de setembro de 1939 contou com um coral de 30 000 crianças cantando o hino nacional e outras peças trabalhadas por Villa-Lobos.\n[…]\nEm 1960, o governo brasileiro criou o Museu Villa-Lobos, na cidade do Rio de Janeiro.\n[…]\nViolão no Brasil\n[…]\n«VIDA & OBRA DE HEITOR VILLA-LOBOS». Biografia e obras completas comentadas no CD-ROM\n[…]\n«Museu Villa-Lobos»\n[…]\n«Sitio Villa-Lobos.pt»\n[…]\nObras de Heitor Villa-Lobos no International Music Score Library Project"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Heitor Villa-Lobos",
      "descricao": "Compositor brasileiro (1887–1959), autor das Bachianas Brasileiras e dos Choros."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na infância, no Rio de Janeiro, Heitor Villa-Lobos era chamado pela família por qual apelido?",
    "resposta": "Tuhu",
    "distratores": [
      "Tonico",
      "Juca",
      "Nhonhô"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Heitor_Villa-Lobos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Heitor_Villa-Lobos",
        "situacao": "ok",
        "texto": "Heitor Villa-Lobos (Rio de Janeiro, 5 de março de 1887 – Rio de Janeiro, 17 de novembro de 1959) foi um compositor, maestro, violoncelista, pianista e violonista brasileiro, descrito como \"a figura criativa mais significativa do Século XX na música clássica brasileira\", e se tornando o compositor sul-americano mais conhecido de todos os tempos. Compositor prolífico, escreveu numerosas obras orques\n[…]\nHeitor Villa-Lobos faleceu, vítima de um câncer, em 17 de Novembro de 1959. Seu corpo bem como o de sua segunda esposa Arminda encontram-se sepultados no Cemitério São João Batista, túmulo 17942 quadra 18, no Rio de Janeiro.\n[…]\nEm 1986, Heitor Villa-Lobos teve sua efígie impressa nas notas de quinhentos cruzados, além de ser homenageado até os dias atuais em diversas cidades brasileiras, dando nome a ruas, praças e parques —  como no caso do Parque Villa-Lobos em São Paulo.\n[…]\nA musicologia brasileira o destacou através de livros, como \"Villa-Lobos, uma interpretação\", do crítico Andrade Muricy e \"Villa-Lobos, o homem e a obra\", do musicólogo Vasco Mariz. Na musicologia internacional, destaca-se o livro \"Heitor Villa-Lobos: The Life and Works, 1887–1959\", do musicólogo finlandês Eero Tarasti.\n[…]\nEm 1960, o governo brasileiro criou o Museu Villa-Lobos, na cidade do Rio de Janeiro.\n[…]\n«VIDA & OBRA DE HEITOR VILLA-LOBOS». Biografia e obras completas comentadas no CD-ROM\n[…]\nCornelia Napp, \"Personal representatives“ in musikverlegerischen Kulturbeziehungen. Die Vertretung von Heitor Villa-Lobos in den USA. Mit Zeittafel „Villa-Lobos in den USA 1947–1961“. Max Brockhaus Musikverlag, Remagen, 2010 ISBN 978-3-9221-7304-5\n[…]\nFernando Gabriel Swiech:Heitor Villa-Lobos Images im englisch- und französischsprachigen Raum bis zu seinem Tod. Tese de Doutorado, Hochschule für Musik und Theater Hamburg 2022.\n[…]\n«Sitio Villa-Lobos.pt»\n[…]\nObras de Heitor Villa-Lobos no International Music Score Library Project"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Fagote",
      "descricao": "Instrumento de sopro de palheta dupla da família das madeiras, de registro grave, com tubo dobrado sobre si mesmo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do fagote vem da palavra italiana fagotto. Segundo a explicação mais comum, o que ela significa?",
    "resposta": "Feixe de gravetos",
    "distratores": [
      "Cano de chaminé",
      "Tronco oco",
      "Bengala torta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bassoon",
      "https://pt.wikipedia.org/wiki/Fagote"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bassoon",
        "situacao": "ok",
        "texto": "The bassoon is a musical instrument in the woodwind family, which plays in the tenor and bass ranges. It is composed of six pieces, and is usually made of wood. It is known for its distinctive tone color, wide range, versatility,  and virtuosity. It is a non-transposing instrument and typically its music is written in the bass and tenor clefs, and sometimes in the treble.\n[…]\nThe word bassoon comes from French basson and from Italian bassone (basso with the augmentative suffix -one), both terms that refer to the version of any instrument in a bass register. The term for bassoon used in classical music scores and parts is often its Italian name fagotto (plural fagotti), which referred initially to the dulcian. This word, adopted in many other European languages as fagot, fagote, or in German, Fagott, comes from an Old French word meaning a bundle of sticks.\n[…]\nOwing to the ubiquity of the Heckel system in English-speaking countries, references in English to the contemporary bassoon always mean the Heckel system, with the Buffet system being explicitly qualified where it appears.\n[…]\nMany passages in his later operas require the low A as well as the B-flat immediately above it; this is possible on a normal bassoon using an extension which also flattens low B to B♭, but all extensions to the bell have significant effects on intonation and sound quality in the bottom register of the instrument, and passages such as this are more often realised with comparative ease by the contrabassoon.\n[…]\nBassoon repertoire\n[…]\nSadie, Stanley, ed. (2001). \"Bassoon\". The New Grove Dictionary of Musical Instruments.\n[…]\nSpencer, William G.; Mueller, Frederick A. (1969) [1958]. The art of Bassoon playing (Rev. ed.). Evanston, IL: Summy-Birchard Comp. ISBN 978-0-87487-073-2.\n[…]\nDocumentary: The Production of a Bassoon by Francois de Rudder\n[…]\nBassoon Fingering Charts\n[…]\nA Guide to Bassoon Keywork"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fagote",
        "situacao": "ok",
        "texto": "O fagote é  um  instrumento musical da família das madeiras de sopros. A palavra “fagote” deriva do italiano fagotto. É constituído por um longo tubo cónico de madeira de cerca de 2,5 metros, dobrado sobre si mesmo. A palheta dupla é fixada em um tudel de cobre.\n[…]\nNo entanto, o uso do fagote nos concertos de orquestra foi muito esporádico até o final do século XVII. O uso crescente do fagote como instrumento basso continuo (baixo contínuo) significou sua inclusão nos corpos orquestrais, primeiramente na França, e mais tarde na Itália, Alemanha e Inglaterra. Enquanto isso, compositores como Boismortier, Corrette, Galliard, Zelenka, Fasch e Telemann escreveram para o instrumento músicas de conjunto e solos.\n[…]\nO quarteto de fagotes têm conquistado mais visibilidade nos últimos tempos, com o Neo Bubonic Bassoon Quartet sendo um dos mais notáveis grupos do gênero. O \"Último tango em Beirute\" de Peter Schickele (baseado no tema de Tristan und Isolde) é um trabalho bastante popular; O alter ego ficcional de Schickele, \"P. D. Q. Bach\", explora as faces mais humorísticas no instrumento com seu quarteto \"Lip My Reeds\", que em certo momento convoca todos os seus músicos a tocarem apenas com as palhetas.\n[…]\nA nota grave lá no fundo da escala apareceu pela primeira vez em Tristão e Isolda de Wagner, e somente é possível com uma extensão especial acoplada ao instrumento. Esta extensão pode ter a forma de uma campana mais comprida, ou de um tubo de papel, acoplado à campana de Bb do fagote. A nota A baixa, tão frequentemente usada por Wagner em suas óperas, incentivou Heckel a construir instrumentos capazes de atingir essa nota, e a campana de A ainda existe como uma opção."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Oboé",
      "descricao": "Instrumento de sopro de palheta dupla da família das madeiras."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome oboé deriva da palavra francesa hautbois. Traduzida literalmente, o que essa palavra quer dizer?",
    "resposta": "Madeira alta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Oboe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oboe",
        "situacao": "ok",
        "texto": "The oboe ( OH-boh) is a type of double-reed woodwind instrument. Oboes are usually made of wood, but may also be made of synthetic materials, such as plastic, resin, or hybrid composites.\n[…]\nThe regular oboe first appeared in the mid-17th century, when it was called a hautbois. This name was also used for its predecessor, the shawm, from which the basic form of the hautbois was derived. Major differences between the two instruments include the division of the hautbois into three sections, or joints (which allowed for more precise manufacture), and the elimination of the pirouette, the wooden ledge below the reed which allowed players to rest their lips.\n[…]\nFolk versions of the oboe, sometimes equipped with extensive keywork, are found throughout Europe. These include the musette (France) and the piston oboe and bombarde (Brittany), the piffero and ciaramella (Italy), and the xirimia (also spelled chirimia) (Spain). Many of these are played in tandem with local forms of bagpipe, particularly with the Italian müsa and zampogna or Breton biniou.\n[…]\nHaynes, Bruce: 2001, The Eloquent Oboe: A History of the Hautboy 1640–1760. Oxford Early Music Series. Oxford and New York: Oxford University Press. ISBN 0-19-816646-X.\n[…]\nPeter Wuttke: The Haynes-Catalog Archived 2022-07-05 at the Wayback Machine bibliography of literature for oboe written between 1650 and 1800.\n[…]\nChisholm, Hugh, ed. (1911). \"Oboe\" . Encyclopædia Britannica (11th ed.). Cambridge University Press.\n[…]\nOboe sound gallery Archived 2018-03-03 at the Wayback Machine of clips of dozens of prominent oboists in the United States, Europe, and Australia\n[…]\nPictures of oboe reeds made by famous oboists"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Obo%C3%A9",
        "situacao": "ok",
        "texto": "O oboé é um instrumento musical de sopro, classificado como um aerofone, membro da família das madeiras. Este instrumento contém uma  palheta dupla. A família das madeiras inclui também as flautas, clarinetes, fagotes, saxofones, entre outros, sendo que oboés e fagotes possuem palhetas duplas. O corpo do oboé, em formato cônico, é normalmente em madeira (ébano, jacarandá e outras), mas pode ser ta\n[…]\nOboé vem do nome francês hautbois, que significa madeira alta, devido ao seu registro agudo. Embora a pronúncia atual de hautbois se assemelhe a oboá, até o século XVII a pronúncia era oboé. Como o instrumento já havia se espalhado pelo mundo quando esta mudança ocorreu, o nome permaneceu assim em português e em algumas outras línguas. Pela mesma razão, em algumas línguas o instrumento é chamado de oboa.\n[…]\nDesde 1690 e durante o século XVIII, assiste-se ao período do oboé de três e de duas chaves. Os modelos da primeira metade do século possuíam duas chaves e ainda conservavam a chamada “cauda de peixe”, que permitia o uso ambidestro. Após 1750, o oboé de duas chaves já exigia a posição das mãos como a atual: a mão esquerda acima da direita. Eram fabricados em madeira de buxo, bordo, ameixeira, cedro, pereira, e mais tarde em ébano.\n[…]\nEsse tambor era ajustado com precisão a uma forte barra de metal duro presa por suportes fixos a uma placa metálica montada na madeira.\n[…]\nNo oboé, os sons harmônicos são obtidos por meio das chaves de oitava e empregando as digitações das notas situadas uma décima segunda abaixo. Ao contrário do clarinete ou da flauta, que têm furo cilíndrico, os harmônicos no oboé soam levemente velados devido ao alargamento cônico do tubo, o que é uma vantagem, pois permite obter efeitos de extrema suavidade. Ao contrário de outros instrumentos de madeira, o oboé possui um som claro e penetrante.\n[…]\nPosições dos dedos no oboé\n[…]\n«Association Française du Hautbois» (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Orquestra sinfônica",
      "descricao": "Grande conjunto instrumental de música erudita, organizado em famílias de cordas, madeiras, metais e percussão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Brasil, o primeiro violino de uma orquestra, que lidera os músicos e cumprimenta o maestro, é chamado de spalla. O que significa essa palavra italiana?",
    "resposta": "Ombro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Concertmaster",
      "https://pt.wikipedia.org/wiki/Spalla"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Concertmaster",
        "situacao": "ok",
        "texto": "The concertmaster (from the German Konzertmeister), first chair (US) or leader (UK) is the principal first violin player in an orchestra, or the principal clarinetist or oboist in a concert band. After the conductor, the concertmaster is the most significant leader in an orchestra, concert band or other musical ensemble.\n[…]\nIn an orchestra, the concertmaster is customarily the leader of the first violin section. There is another violin section, the second violins, led by the principal second violin. Any violin solo in an orchestral work is played by the concertmaster (except in the case of a violin concerto, in which case a guest soloist usually plays).\n[…]\nThe concertmaster sits to the conductor's left, closest to the audience, in what is called the \"first chair,\" \"first [music] stand\" or outside of the US \"first desk.\" The concertmaster makes decisions regarding bowing and other technical details of violin playing for the violins, and sometimes all of the string players. The concertmaster leads the orchestra in tuning before concerts and rehearsals, and other technical aspects of orchestra management.\n[…]\nOne of the principal tasks of the concertmaster is to provide bowings for the first violins prior to rehearsal. This entails a great knowledge of historical playing styles in addition to complete idiomatic understanding of the mechanics of string playing.\n[…]\nThe concertmaster assumes responsibility for the tone and execution of the entire section of first violins, in addition to performing any solo passages that occur in a given piece."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Spalla",
        "situacao": "ok",
        "texto": "O Spalla (em italiano, em português \"ombro\") ou concertino (termo utilizado em Portugal) é o nome dado ao primeiro-violino de uma orquestra. Em italiano diz-se violino di spalla. Na orquestra, fica na primeira estante, à esquerda do maestro. Antes da entrada do maestro, é o último instrumentista a entrar no palco, sendo o responsável pela afinação da orquestra. É também o responsável pela execução\n[…]\nNuma orquestra, os violoncelos têm também um violoncelista considerado spalla.\n[…]\nO termo provém da gíria teatral italiana, em que attore di spalla é aquele que apóia o comediante principal, sobretudo nas cenas mais cômicas. Por analogia, na orquestra, spalla é o violino que dá apoio ao regente.\n[…]\nAté meados do século XIX, muitas vezes as apresentações eram regidas pelo Spalla, que utilizava o arco para marcar o tempo da música."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Ut queant laxis",
      "descricao": "Hino medieval latino a São João Batista, cujas sílabas deram nome às notas musicais."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A nota si foi a última a ganhar nome, também tirada do hino medieval a São João. De onde vêm as duas letras dela?",
    "resposta": "Das iniciais de Sancte Iohannes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ut_queant_laxis",
      "https://en.wikipedia.org/wiki/Solf%C3%A8ge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ut_queant_laxis",
        "situacao": "ok",
        "texto": "\"Ut queant laxis\" or \"Hymnus in Ioannem\" (English: \"So that they may, with loosened [voices]\" or \"Hymn to John\") is a Latin hymn in honor of John the Baptist, written in Horatian Sapphics with text traditionally attributed to Paulus Diaconus, the eighth-century Lombard historian. It is famous for its part in the history of musical notation, in particular solmization. The hymn belongs to the tradit\n[…]\nGuido, who was active in the eleventh century, is regarded as the father of modern musical notation. He made use of clefs (C & F clefs) and invented the ut-re-mi-fa-sol-la notation. The hymn does not help with the seventh tone as the last line, Sancte Iohannes, breaks the ascending pattern. The syllable si, for the seventh tone, was added in the 18th century.\n[…]\nUt is now mostly replaced by Do in solfège due to the latter's open sound, in deference to Italian theorist Giovanni Battista Doni. The word \"Ut\" is still in use to name the C-clef. The seventh note was not part of the medieval hexachord and does not occur in this melody, and it was originally called \"si\" from \"Sancte Ioannes\" (Johannes). In the nineteenth century, Sarah Glover, an English music teacher, renamed \"si\" to \"ti\" so that every syllable might be notated by its initial letter.\n[…]\nIn the Roman Rite, the hymn is sung in the Divine Office on June 24, the Feast of the Nativity of John the Baptist. The full hymn is divided into three parts, with \"Ut queant laxis\" sung at Vespers, \"Antra deserti\" sung at Matins, \"O nimis felix\" sung at Lauds, and doxologies added after the first two parts."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Solf%C3%A8ge",
        "situacao": "ok",
        "texto": "In music, solfège (UK:  or US: ; French: [sɔlfɛʒ]) or solfeggio (; Italian: [solˈfeddʒo]), also called sol-fa, solfa, solfeo, among many names, is a mnemonic used in teaching aural skills, pitch and sight-reading of Western European music.\n[…]\nIn eleventh-century Italy, the music theorist Guido of Arezzo invented a notational system that named the six notes of the hexachord after the first syllable of each line of the Latin hymn \"Ut queant laxis\", the \"Hymn to St. John the Baptist\", resulting in ut, re, mi, fa, sol, la. Each successive line of this hymn begins on the next scale degree, so each note's name was the syllable sung at that pitch in this hymn."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ut_queant_laxis",
        "situacao": "ok",
        "texto": "Ut queant laxis, ou Hymnus in Ioannem, é a frase inicial do hino cantochão a São João Batista, com o qual os fiéis da Igreja Católica Romana rezam o Ofício Divino, ou Breviário, celebrando a festa da Natividade deste Santo (24 de Junho).\n[…]\nDeste hino, composto por Paulo Diácono, um historiador lombardo do Século VIII, teria se servido Guido D'Arezzo no Século XI, por volta de 1025, para nomear os sons da escala diatônica de Dó.\n[…]\nUT queant laxis\n[…]\nSancte Iohannes\n[…]\nTradução: Para que os servos possam, com suas vozes soltas, ressoar as maravilhas de vossos atos, limpa a culpa do lábio manchado, ó São João!\n[…]\nA palavra UT foi posteriormente substituída por DÓ, para facilitar o canto com a terminação em uma vogal; e o SI, que não consta da melodia solfejada, foi acrescentado tomando-se as iniciais da palavra Sancte e seu nome: Ioannes, ambas no caso vocativo. No latim clássico não há letra \"j\", a qual é substituída pela letra \"i\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Jean-Baptiste Lully",
      "descricao": "Compositor franco-italiano do Barroco (1632–1687), músico da corte do rei Luís XIV da França."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1687, o compositor Jean-Baptiste Lully feriu o próprio pé durante um concerto e morreu de gangrena. Com o que ele se feriu?",
    "resposta": "Com o bastão de regência",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jean-Baptiste_Lully"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jean-Baptiste_Lully",
        "situacao": "ok",
        "texto": "Jean-Baptiste Lully (born Giovanni Battista Lulli; 28 or 29 November [O.S. 18 or 19 November] 1632 – 22 March 1687) was an Italian-French composer, dancer and instrumentalist, who is considered a master of the French Baroque music style. Best known for his operas, he spent most of his life working in the court of Louis XIV and became a French subject in 1661.\n[…]\nWhen Louis XIV took over the reins of government in 1661, he named Lully superintendent of the royal music and music master of the royal family. In December 1661, the Florentine was granted letters of naturalization. Thus, when he married Madeleine Lambert (1643–1720), the daughter of the renowned singer and composer Michel Lambert in 1662, Giovanni Battista Lulli declared himself to be \"Jean-Baptiste Lully, escuyer [squire], son of Laurent de Lully, gentilhomme Florentin [Florentine gentleman]\".\n[…]\nHenry Prunières's 1929 novel La Vie illustre et libertine de Jean-Baptiste Lully (Paris: Plon) was the first 20th-century novel about Lully that raised supposed questions about the composer's \"moral character.\"\n[…]\nCouvreur, Manuel. Jean-Baptiste Lully, Musique et dramaturgie au service du prince (Brussels: Marc Voker, 1992).\n[…]\nGreen, Robert A. (2002). \"Lully, Jean-Baptiste\". glbtq Encyclopaedia. glbtq.com. Retrieved 16 August 2007.\n[…]\nSadie, Stanley; Rosow, Lois (1992). \"Lully, Jean-Baptiste\". The New Grove Dictionary of Opera. London: Macmillan. ISBN 0-333-73432-7.\n[…]\nScott, R. H. F. (1973). Jean-Baptiste Lully. London: Peter Owen Limited. ISBN 0-7206-0432-X.\n[…]\nFree scores by Jean-Baptiste Lully in the Choral Public Domain Library (ChoralWiki)\n[…]\nFree scores by Jean-Baptiste Lully at the International Music Score Library Project (IMSLP)\n[…]\nThe Mutopia Project has compositions by Jean-Baptiste Lully\n[…]\nJean-Baptiste Lully Collection at the University of North Texas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jean-Baptiste_Lully",
        "situacao": "ok",
        "texto": "Jean-Baptiste de Lully, nascido Giovanni Battista Lulli (Florença, 28 de novembro de 1632 – Paris, 22 de março de 1687), foi um compositor franco-toscano. Passou a maior parte da vida trabalhando na corte de Luís XIV . Compositor prolixo, seu estilo foi largamente imitado na Europa. Casou-se com Madeleine Lambert, filha do compositor Michel Lambert. Considerado mestre do barroco francês, tornou-se\n[…]\nEntretanto, o interesse de Luís XIV pelo balé foi diminuíndo com o passar dos anos, e suas habilidades para a dança declinaram (sua última performance foi em 1670) e então Lully dedicou-se inteiramente à ópera. Ele comprou o privilégio para a ópera de Pierre Perrin e com o apoio de Jean-Baptiste Colbert e do próprio Rei, criou um novo privilégio, que dada exclusivamente a Lully o controle completo de toda música apresentada na França, até sua morte,quando morreu de gangrena em 1687.\n[…]\nEra conhecido por ser um libertino. Em 1661, em cartas de naturalização e em seu contrato de casamento com Madeleine Lambert, filha do seu amigo e companheiro Michel Lambert, Giovanni Battista Lulli declarou-se como \"Jean-Baptiste de Lully\" filho de \"Laurent de Lully, cavalheiro florentino\".\n[…]\nEm 8 de janeiro de 1687, Lully estava conduzindo um Te Deum em honra de Luís XIV, recém recuperado de uma doença. O compositor marcava o tempo, batendo com um grande bastão (o precursor da Batuta) no chão, como era usual nesse período, quando  atingiu o próprio pé, provocando uma infecção. Essa ferida evoluiu para uma  gangrena, mas Lully recusou-se a amputar o pé. Em consequência, acabou morrendo, em 22 de março de 1687. Ele deixou sua última ópera, Achille et Polyxène inacabada.\n[…]\nObras de Jean-Baptiste Lully no International Music Score Library Project\n[…]\nPartituras gratuitas de Jean-Baptiste Lully na CPDL, a Biblioteca Coral de Domínio Público",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Gustav Mahler",
      "descricao": "Compositor e regente austro-boêmio do Romantismo tardio, autor de nove sinfonias completas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Mahler evitou chamar de sinfonia A Canção da Terra, que compôs depois da Oitava. Que medo supersticioso o levou a isso?",
    "resposta": "Morrer após compor a nona sinfonia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Curse_of_the_ninth",
      "https://en.wikipedia.org/wiki/Das_Lied_von_der_Erde"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Curse_of_the_ninth",
        "situacao": "ok",
        "texto": "The curse of the ninth is a superstition in classical music that the ninth symphony is destined to be a composer's last, and that the composer is fated to die before completing a tenth. It is associated with composers including Beethoven, Schubert, Bruckner, Dvorak and Mahler.\n[…]\nThe curse of the ninth superstition originated in the late-Romantic period of classical music. According to Arnold Schoenberg, the superstition began with Gustav Mahler, who, after writing his Eighth Symphony, wrote Das Lied von der Erde, which, while structurally a symphony, was able to be disguised as a song cycle, each movement being a setting of a poem for soloist and orchestra. Then he wrote his Ninth Symphony and thought he had beaten the curse, but died with his Tenth Symphony incomplete.\n[…]\nThis superstition, however, was only hatched by Mahler. Before him, Beethoven and Schubert had died before or while writing their tenth symphonies. Upon realizing this, Mahler created the curse of the ninth and led this superstition into popularity by seemingly proving it true. This superstition has, however, lost popularity, and while it is spoken about, any possible \"proof\" of it has not happened recently as it did in the era of Beethoven and Mahler.\n[…]\nAs Maddy Shaw Roberts writes, \"The Curse of the Nine is a great story, and it probably fueled a lot of the angst behind Mahler's heart-wrenching symphonies. But perhaps it's best to treat it as a superstition.\"\n[…]\nAfter Beethoven, Schubert, and Mahler, some composers cited as examples of the curse include:\n[…]\nCooke, Deryck. Gustav Mahler: An Introduction to His Music. Cambridge: Cambridge University Press, 1995.\n[…]\nMahler-Werfel, Alma. The Diaries, translated by Antony Beaumont. Ithaca, NY: Cornell University Press, 2000."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Das_Lied_von_der_Erde",
        "situacao": "ok",
        "texto": "Das Lied von der Erde (The song of the Earth) is an orchestral work for two voices and orchestra written by Gustav Mahler between 1908 and 1909. Described as a symphony when published, it comprises six movements for a large orchestra and two singers as the soloist alternating in the movements. Mahler specified that the two singers should be a tenor and an alto, or else a tenor and a baritone if an\n[…]\nMahler was aware of the so-called \"curse of the ninth\", a superstition arising from the fact that no major composer since Beethoven had successfully completed more than nine symphonies: he had already written eight symphonies before composing Das Lied von der Erde. Fearing his subsequent demise, he decided to subtitle the work A Symphony for Tenor, Alto (or Baritone) Voice and Orchestra, rather than numbering it as a symphony.\n[…]\nMichael Gielen, with Cornelia Kalisch and Siegfried Jerusalem, SWR Sinfonieorchester Baden-Baden und Freiburg (SWR Music 93.269)\n[…]\nHans Rosbaud, with Grace Hoffman and Helmut Melchert, SWR Sinfonieorchester Baden-Baden (Vox Turnabout LP, TV 34220S)\n[…]\nHermine Haselböck (mezzo-soprano), Bernhard Berchtold (tenor), Markus Vorzellner (piano). Recorded 2008 at the occasion of the 100th anniversary in the Kulturzentrum Toblach, in cooperation with the Gustav-Mahler-Musikweks Toblach 2008 (C-AVI MUSIC 4260085531257)\n[…]\nOsmo Vänskä, with Monica Groop and Jorma Silvasti, Sinfonia Lahti Chamber Ensemble (BIS CD-681).\n[…]\nJohnson, Julian (2005). \"Mahler and the idea of Nature\". In Jeremy Barham (ed.). Perspectives on Gustav Mahler. Aldershot: Ashgate. ISBN 978-0-7546-0709-0.\n[…]\nHenry-Louis de La Grange, Gustav Mahler III: Le Génie Foudroyé (1907–1911) (Paris 1984).\n[…]\nDonald Mitchell, Gustav Mahler: Songs and Symphonies of Life and Death (Berkeley and Los Angeles, 1985).\n[…]\nGustav Mahler: Das Lied von der Erde, Peter Gutmann, classicalnotes.net"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Nona Sinfonia de Beethoven",
      "descricao": "Última sinfonia de Ludwig van Beethoven, de 1824, que termina com a Ode à Alegria cantada por coro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo uma história famosa, a duração da Nona Sinfonia de Beethoven ajudou a definir quanto cabia em qual mídia de som, lançada nos anos oitenta?",
    "resposta": "CD, o disco compacto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Compact_disc"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Compact_disc",
        "situacao": "ok",
        "texto": "The compact disc (CD) is a digital optical disc data storage format co-developed by Philips and Sony to store and play digital audio recordings. It employs the Compact Disc Digital Audio (CD-DA) standard and is capable of holding uncompressed stereo audio. First released in Japan in October 1982, the CD was the second optical disc format to reach the market, following the larger LaserDisc (LD).\n[…]\nWhen 8-track cartridges, compact cassettes, and CDs were introduced, each was marketed at a higher price than the format they succeeded, even though the cost to produce the media was reduced. This was done because the perceived value increased. This continued from phonograph records to CDs, but was broken when Apple marketed MP3s for $0.99, and albums for $9.99. The incremental cost, though, to produce an MP3 is negligible.\n[…]\nExtended Resolution Compact Disc\n[…]\nCompact disc bronzing – Type of compact disc corrosion\n[…]\nSPARS code – Classification system for commercial compact disc releases\n[…]\nPohlmann, Kenneth C. (1992). The Compact Disc Handbook. Middleton, Wisconsin: A-R Editions. ISBN 0-89579-300-8.\n[…]\nPeek, Hans et al. (2009) Origins and Successors of the Compact Disc. Springer Science+Business Media B.V. ISBN 978-1-4020-9552-8.\n[…]\nPeek, Hans B., The emergence of the compact disc, IEEE Communications Magazine, Jan. 2010, pp. 10–17.\n[…]\nNakajima, Heitaro; Ogawa, Hiroshi (1992) Compact Disc Technology, Tokyo, Ohmsha Ltd. ISBN 4-274-03347-3.\n[…]\nBarry, Robert (2020). Compact Disc (Object Lessons). New York: Bloomsbury. ISBN 978-1-5013-4851-8.\n[…]\nVideo How Compact Discs are Manufactured\n[…]\nPopularized History on Soundfountain\n[…]\nA Media History of the Compact Disc (1-hour podcast interview)\n[…]\nSorin, Stan (2009), \"Compact Disc Standards and Formats\", Origins and Successors of the Compact Disc, Philips Research, vol. 11, Philips Research, pp. 137–176, doi:10.1007/978-1-4020-9553-5_4, ISBN 978-1-4020-9552-8"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Compact_disc",
        "situacao": "ok",
        "texto": "O compact disc (CD ou \"Disco Compacto\") é um disco óptico digital de armazenamento de dados. O formato foi originalmente desenvolvido com o propósito de armazenar e tocar apenas músicas, mas posteriormente foi adaptado para o armazenamento de dados, o CD-ROM.\n[…]\nA idealização do CD teve seu início em 1975 onde, Sony, com a Philips vindo logo atrás em 1977, começaram a estudar com protótipos uma possibilidade de um novo disco óptico digital de áudio.\n[…]\nA Philips anunciou publicamente um protótipo de CD-ROM de áudio em uma conferência de imprensa, intitulada \"Philips Introduce Compact Disc\", em 8 de março de 1979, em Eindhoven, Países Baixos.\n[…]\nSendo assim, com receio, ao invés de optar por ficar adiando permanentemente o lançamento do novo sistema sem concretizá-lo, optaram por lançar aos poucos em cada país. Com isso a popularidade dos Compact Discs aumentaria, assim fornecendo maior capacidade e durabilidade, fazendo os discos de vinil serem considerados obsoletos.\n[…]\nUm CD é um disco de acrílico, sobre o qual é impressa uma longa espiral (22,188 voltas, totalizando 5,6 km de extensão). As informações são gravadas em furos nessa espiral, o que cria dois tipos de irregularidades físicas: pontos brilhantes e pontos escuros. Estes pontos são chamados de bits, e compõem as informações carregadas pelo CD.\n[…]\nA superfície da espiral é varrida por um laser, que utiliza luz no comprimento infravermelho. Essa luz é refletida pela superfície do disco e captada por um detector. Esse detector envia ao controlador do aparelho a sequência de pontos claros e escuros, que são convertidos em \"uns ou zeros\", os bits (dados binários). Para proteger a superfície do CD de sujeira, é colocada sobre ela uma camada de policarbonato.\n[…]\nDisco blu-ray",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Aida",
      "descricao": "Ópera de Giuseppe Verdi, ambientada no Egito antigo, estreada em 1871."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A ópera Aida, de Verdi, foi encomendada pelo governante do Egito e estreou em 1871 em qual cidade?",
    "resposta": "Cairo",
    "distratores": [
      "Milão",
      "Alexandria",
      "Paris"
    ],
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
        "texto": "Aida é uma ópera em quatro atos, com música de Giuseppe Verdi e libreto de Antonio Ghislanzoni. Sua estreia mundial aconteceu na Casa da Ópera,  no Cairo, em 24 de dezembro de 1871. Aida foi composta por encomenda do governo egípcio para comemorar a inauguração do canal de Suez, fato que ocorreu em 17 de novembro de 1869. Sua estreia, no entanto, ocorreu com 2 anos de atraso por atrasos na composi\n[…]\nNa entrada da cidade egípcia de Tebas, junto ao templo do deus Amon, uma multidão espera a volta dos guerreiros egípcios. Aparece o faraó com o seu cortejo e os sacerdotes. Atrás deles, Amneris com Aida e as suas escravas. O faraó senta-se no seu trono tendo, à sua direita, a sua filha. Depois de um coro de louvor em honra aos deuses e do soberano, uma grande marcha abre a procissão na qual participam os soldados egípcios, seguidos por bailarinos, carros de guerra, estandartes e ídolos.\n[…]\nLa fatal pietra sovra me si chiuse… O terra, addio, scena e duetto di Radamès e Aida\n[…]\nA música da ópera também é o tema de abertura do jogo de computador Victoria: An Empire Under the Sun, da Paradox Interactive.\n[…]\nDom Pedro II cita em seu diário de viagens a seguinte fala:\"Em 10bro(outubro) vão cantar a nova ópera de Verdi aída,assunto da época de Ramessés II e cujo cenário, vestuário e mais acessórios foram feitos em Paris sob a direção de Maritte.Procurei com empenho vê-los,sobretudo por causa de um cenário que representa edifícios de madeira desses tempos,os quais maritte disse-me serem de arquitetura graciosa e semelhante a arábica, mas tudo as achava ainda hermeticamente fechado e o diretor da ópera Dvanet bey,que outrora foi boticário e, segundo maritte manipula as belas artes como se fossem drogas,nada pôde fazer.\n[…]\n{os diários de dom Pedro II no Egito,Júlio gralha}\n[…]\n«Giuseppe Verdi - Aida em MP3 com licença Creative Commons»\n[…]\n«Giuseppe Verdi Official Site»\n[…]\n«Verdi em Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Carlos Gomes",
      "descricao": "Compositor brasileiro de óperas (1836–1896), nascido em Campinas, autor de O Guarani e Lo Schiavo."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Autor da ópera O Guarani, o compositor Carlos Gomes nasceu em 1836 em qual cidade paulista?",
    "resposta": "Campinas",
    "distratores": [
      "Itu",
      "Santos",
      "Sorocaba"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carlos_Gomes",
      "https://en.wikipedia.org/wiki/Ant%C3%B4nio_Carlos_Gomes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Gomes",
        "situacao": "ok",
        "texto": "Antônio Carlos Gomes (pronúncia em português brasileiro: [ɐ̃ˈtoni.u ˈkaʁluz ˈɡomis]; 11 de julho de 1836 – 16 de setembro de 1896) foi um compositor brasileiro, lembrado sobretudo por suas óperas. Figura central do romantismo musical brasileiro, foi o primeiro compositor das Américas a alcançar grande sucesso no mundo operístico europeu.\n[…]\nCarlos Gomes nasceu em 11 de julho de 1836 na Vila de São Carlos, atual Campinas, na Província de São Paulo. Na família era chamado de Tonico e, em Campinas, ficou conhecido como Nhô Tonico, apelido que mais tarde usou em dedicatórias. Seu pai, Manuel José Gomes, conhecido como Maneco Músico, era músico e mestre de capela na vila; sua mãe era Fabiana Maria Jaguary Cardoso.\n[…]\nA Praça Carlos Gomes, no centro de Campinas, recebeu o nome do compositor em 1880. A praça tornou-se uma das áreas tradicionais de lazer da cidade e passou por ajardinamento e construção de coreto no início do século XX.\n[…]\nSeu legado é lembrado por lojas maçônicas regulares no estado de São Paulo que levam seu nome como patrono, incluindo lojas em Campinas, Jaguariúna, Tupã e na cidade de São Paulo. A loja da capital paulista, A∴R∴L∴S∴ Carlos Gomes nº 1.598 – Grande Benfeitora da Ordem, foi fundada em 30 de setembro de 1950 e permanece filiada ao Grande Oriente do Brasil e ao Grande Oriente Paulista.\n[…]\nA abertura do hino oficial do Guarani FC usa uma melodia inspirada nos primeiros acordes de O Guarani. O hino foi composto em 1976 pelo jornalista e compositor Oswaldo Guilherme e Augusto Duarte Ribeiro. O próprio clube foi fundado em 2 de abril de 1911, em uma reunião na Praça Carlos Gomes, em Campinas, por jovens descendentes de imigrantes italianos e alemães. Seu nome homenageia a ópera de Gomes e reflete o orgulho local pela reputação internacional do compositor.\n[…]\n«Museu Carlos Gomes, em Campinas»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ant%C3%B4nio_Carlos_Gomes",
        "situacao": "ok",
        "texto": "Antônio Carlos Gomes (Brazilian Portuguese: [ɐ̃ˈtoni.u ˈkaʁluz ˈɡomis, ɐ̃ˈtonju -]; 11 July 1836 in Campinas – 16 September 1896 in Belém) was a Brazilian composer notable for being the first New World composer whose work was accepted by Europe. He was the only non-European who was successful as an opera composer in Italy, during the \"golden age of opera\" contemporary to Verdi and Puccini, and the\n[…]\nHe was born on 11 July 1836 in Campinas, São Paulo Province, son of Maestro Manuel José Gomes and Fabiana Maria Jaguari Cardoso.\n[…]\nInterested in composing an opera which dealt with a truly Brazilian subject, Carlos Gomes chose as the theme of his next work the novel O Guarani, by Brazilian writer José de Alencar. The opera premiered in May 1870 at the La Scala Theater in Milan as Il Guarany.\n[…]\nWhen the Brazilian republic was proclaimed in 1889, Carlos Gomes, who at this time was in Campinas, sailed once more to Italy. Faithful to the Brazilian monarchy and Dom Pedro II, Gomes refused the opportunity given to him by president Deodoro da Fonseca to compose the new Brazilian National Anthem. In the following years, he composed the opera Condor and the cantata Colombo, for the Columbus Festival (12 October 1892), in celebration of the fourth centenary of the discovery of America.\n[…]\nThe debate relates Gomes’s case to figures like Machado de Assis and Castro Alves and to broader discussions of scientific racism and memory politics in Brazil. Recent perspectives emphasize that recognizing his racial background enriches the understanding of his artistic path and inspires new interpretations, such as educational projects in Campinas and the upcoming biopic Bravo! Carlos Gomes do Brasil, starring tenor Jean William.\n[…]\nVetro, Gaspare Nello: Antônio Carlos Gomes Il Guarany, Parma, 1996\n[…]\nFree scores by Antonio Carlos Gomes at Musica Brasilis website\n[…]\nMedia related to Carlos Gomes at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Arturo Toscanini",
      "descricao": "Maestro italiano, diretor do La Scala e da Orquestra Sinfônica da NBC."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1886, aos dezenove anos, o violoncelista Arturo Toscanini assumiu de improviso a regência de Aida durante uma turnê. Em que cidade?",
    "resposta": "Rio de Janeiro",
    "distratores": [
      "Buenos Aires",
      "São Paulo",
      "Montevidéu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Arturo_Toscanini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arturo_Toscanini",
        "situacao": "ok",
        "texto": "Arturo Toscanini (; Italian: [arˈtuːro toskaˈniːni]; March 25, 1867 – January 16, 1957) was an Italian conductor. One of the most acclaimed and influential musicians of the late 19th and early 20th century, Toscanini was renowned for his intensity, his perfectionism, his ear for orchestral detail and sonority, and his eidetic memory. He was at various times the music director of La Scala in Milan \n[…]\nAfter performing in São Paulo, the locally hired conductor, Leopoldo Miguez relinquished the post a few hours before the performance of Aida in Rio de Janeiro on June 25, telling the newspapers that his decision had been caused by the behavior of the orchestra, who apparently thought that Miguez was inadequate to conduct opera (reviews of his performance in São Paulo reflected the orchestra's sentiment).\n[…]\nArturo Toscanini was one of the first conductors to make extended appearances on live television. Between 1948 and 1952, he conducted ten concerts telecast on NBC, including a two-part concert performance of Verdi's complete opera Aida starring Herva Nelli and Richard Tucker, and the first complete telecast of Beethoven's Ninth Symphony. All of these were simulcast on radio. These concerts were all shown only once during that four-year span, but they were preserved on kinescopes.\n[…]\nToscanini is the subject of the highly fictionalized screen biography Il giovane Toscanini (Young Toscanini) (1988), starring C. Thomas Howell and Elizabeth Taylor, and directed by Franco Zeffirelli. The film received poor reviews and was never officially released in the United States. The film is a fictional recounting of the events that led up to Toscanini making his conducting debut in Rio de Janeiro in 1886.\n[…]\nNewspaper clippings about Arturo Toscanini in the 20th Century Press Archives of the ZBW\n[…]\nArturo Toscanini recordings at the Discography of American Historical Recordings."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arturo_Toscanini",
        "situacao": "ok",
        "texto": "Arturo Toscanini (Parma, 25 de Março de 1867 – Manhattan, 16 de Janeiro de 1957) foi um maestro italiano. Um dos mais aclamados músicos do século XIX e XX, ele foi renomado pela sua brilhante intensidade, seu inquieto perfeccionismo, seu fenomenal ouvido para detalhes e sonoridade da orquestra e sua memória fotográfica. Ele é especialmente considerado um competente intérprete das obras de Giuseppe\n[…]\nEnquanto apresentava Aida, na sua turnê pelo Rio de Janeiro em 1886, Leopoldo Miguez, o condutor local, atingiu o ápice de uma escalada de conflito com os músicos, devido ao seu trabalho bastante pobre, a tal ponto que os cantores entraram em greve, forçando o empresário da companhia a procurar um maestro substituto. O maestro Aristide Venturi foi chamado, mas não foi aceito pelo público. Então, de última hora, os músicos sugeriram que Toscanini regesse a orquestra.\n[…]\nToscanini morreu com 89 anos de idade, devido a um acidente vascular cerebral em sua casa, em Riverdale na Cidade de Nova Iorque no dia 16 de Janeiro de 1957. Seu corpo retornou a Itália e foi enterrado no Cemitério Monumental em Milão. Em seu testamento, ele deixou sua batuta para a sua protegida, a soprano Herva Nelli. Toscanini foi postumamente premiado com o Grammy Lifetime Achievement Award em 1987.\n[…]\nToscanini casou com Carla de Martini em 21 de Junho de 1897, quando ela ainda não tinha completado vinte anos de idade. O seu primeiro filho, Walter, nasceu dia 19 de Março de 1898. Uma filha, Wally, nasceu dia 6 de Janeiro de 1900. Carla também deu à luz um menino, Giorgio, em Setembro de 1901, mas ele acabou morrendo de difteria dia 10 de Junho de 1906. Então, naquele mesmo ano, Carla deu à luz sua segunda filha, Wanda.\n[…]\nOceana (Antonio Smareglia) - Milão, 22 de janeiro, 1903\n[…]\nMadame Sans-Gène (Umberto Giordano - Nova Iorque, 25 de janeiro, 1915\n[…]\nIl Re (Giordano) - Milão, 12 de janeiro, 1929",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Nessun Dorma",
      "descricao": "Ária para tenor do último ato da ópera Turandot, de Giacomo Puccini."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A ária Nessun Dorma, de Puccini, termina com uma palavra italiana repetida, cantada em notas longas e agudas. O que ela significa?",
    "resposta": "Vencerei",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nessun_dorma"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nessun_dorma",
        "situacao": "ok",
        "texto": "\"Nessun dorma\" (Italian: [nesˌsun ˈdɔrma]; lit. 'Let no one sleep') is an aria from the final act of Italian composer Giacomo Puccini's opera Turandot (text by Giuseppe Adami and Renato Simoni) and one of the best-known tenor arias in all opera. It is sung by Calaf, il principe ignoto (the unknown prince), who falls in love at first sight with the beautiful but cold Princess Turandot. Any man who \n[…]\nAlthough Pavarotti sang the role of Calaf on stage only twice (first in 1977 at the San Francisco Opera under Riccardo Chailly with Montserrat Caballe as Turandot, and then twenty years later at the Met under James Levine opposite Jane Eaglen as Turandot,) \"Nessun dorma\" became his signature aria and a sporting anthem in its own right, especially for football. Pavarotti notably sang the aria during the first Three Tenors concert on the eve of the 1990 FIFA World Cup Final in Rome.\n[…]\nPavarotti gave a rendition of \"Nessun dorma\" at his final performance, the finale of the 2006 Winter Olympics opening ceremony, although it was later revealed that he had lip-synched the specially pre-recorded performance as it was too cold for him to sing live. His Decca recording of the aria was played at his funeral during the flypast by the Italian Air Force. In 2013, the track was certified gold by the Federation of the Italian Music Industry.\n[…]\n\"Nessun dorma\" is featured prominently in various films, including Yes, Giorgio (1982), The Killing Fields (1984), Aria (1987), New York Stories (1989), The Mirror Has Two Faces (1996), Bend It Like Beckham (2002), The Sum of All Fears (also 2002), Chasing Liberty (2004), The Sea Inside (also 2004), No Reservations (2007), Goon (2011), Mission: Impossible – Rogue Nation (2015), Sing (2016), The Upside (2017),  Solo Mio and Daffy Season (both 2026).\n[…]\nIn 2019, JR East used \"Nessun dorma\" as a departure melody at Ueno station for a month."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nessun_dorma",
        "situacao": "ok",
        "texto": "\"Nessun dorma\" (em italiano: [nesˌsun ˈdɔrma]; lit. Que ninguém durma) é uma ária do ato final da ópera Turandot, do compositor italiano Giacomo Puccini (texto de Giuseppe Adami e Renato Simoni), e uma das árias para tenor mais conhecidas de toda a ópera. É cantada por Calaf, il principe ignoto (o príncipe desconhecido), que se apaixona à primeira vista pela bela, porém fria, princesa Turandot.\n[…]\nNo ato anterior a esta ária, Calaf respondeu corretamente aos três enigmas propostos a todos os pretendentes da Princesa Turandot. Mesmo assim, ela se recusa a casar com ele. Calaf oferece-lhe outra chance, desafiando-a a adivinhar seu nome até o amanhecer. Enquanto ele se ajoelha diante dela, o tema de \"Nessun dorma\" surge pela primeira vez, ao som de suas palavras: \"Il mio nome non sai!\" (Meu nome você não sabe!).\n[…]\n\"Nessun dorma\", cantada por alguns dos mais famosos intérpretes de Calaf, aparece nas seguintes gravações de compilação (para gravações completas da ópera, consulte a discografia de Turandot):\n[…]\nEmbora Pavarotti tenha cantado o papel de Calaf no palco apenas duas vezes (primeiro em 1977 na Ópera de São Francisco sob a regência de Riccardo Chailly com Montserrat Caballé como Turandot, e depois vinte anos mais tarde no Met sob a regência de James Levine contracenando com Jane Eaglen como Turandot), \"Nessun dorma\" tornou-se sua ária de assinatura e um hino esportivo por direito próprio, especialmente para o futebol.\n[…]\nPavarotti apresentou uma versão de \"Nessun dorma\" em sua última apresentação, o encerramento da cerimônia de abertura dos Jogos Olímpicos de Inverno de 2006, embora tenha sido revelado posteriormente que ele havia dublado a apresentação especialmente pré-gravada, pois estava muito frio para ele cantar ao vivo. Sua gravação da ária pela Decca foi tocada em seu funeral durante a passagem da Força Aérea Italiana.\n[…]\n«Mario del Monaco cantando Nessun Dorma»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "O Guarani",
      "descricao": "Ópera de Carlos Gomes baseada no romance de José de Alencar, estreada em 1870."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na ópera O Guarani, de Carlos Gomes, como se chama o herói indígena apaixonado pela jovem Ceci?",
    "resposta": "Peri",
    "fonte": [
      "https://en.wikipedia.org/wiki/Il_Guarany"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Il_Guarany",
        "situacao": "ok",
        "texto": "Il Guarany (The Guarany) is an opera ballo composed by Antônio Carlos Gomes, based on the novel O Guarani by José de Alencar. Its libretto, in Italian rather than Gomes' native Portuguese, was written by Antonio Scalvini and Carlo D'Ormeville. The work is notable as the first Brazilian opera to gain acclaim outside Brazil. Maria Alice Volpe has analysed the historical subtext of the indianism move\n[…]\nIn the Overture to the opera, Gomes creates a Romantic Indianist atmosphere over an Italian orchestral backdrop as he introduces intimate lyrical passages in the winds and strings contrasted by tempestuous dramatic moments that utilize the full dynamic range of the orchestra.\n[…]\nThe world premiere took place at La Scala, Milan, on 19 March 1870 and was a tremendous success, which resulted in immediate international fame for Gomes and numerous performances of the work in opera theaters throughout Europe. Among the productions, it was performed at the Zagreb theater in 1883 and 1886. The first Brazilian performance was in Rio de Janeiro on 2 December 1870, at the Theatro Lyrico Fluminense.\n[…]\nMore recently, in 1996, Il Guarany was mounted by the Washington National Opera with Plácido Domingo in the role of Pery.\n[…]\nPhillips-Matz, Mary Jane. Washington National Opera 1956–2006. Washington, D.C.: Washington National Opera, 2006. ISBN 0-9777037-0-3.\n[…]\nBéhague, Gerard, \"Il Guarany\", The New Grove Dictionary of Opera, (ed.) Stanley Sadie. London, 1992 ISBN 0-333-73432-7\n[…]\nMedia related to Il Guarany at Wikimedia Commons\n[…]\nIl Guarany (Gomes): Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Il_Guarany",
        "situacao": "ok",
        "texto": "Il Guarany (em português, O Guarani) é uma ópera ballo em quatro atos composta pelo maestro paulista Carlos Gomes, baseada no romance de José de Alencar, O Guarani. Seu libreto, em italiano em vez do português nativo de Carlos Gomes, foi escrito por Antonio Scalvini e Carlo D'Ormeville. A obra se destaca como a primeira ópera brasileira a ser aclamada fora do Brasil.\n[…]\nA história se passa no Brasil do século XVII e narra o amor impossível entre Peri, um indígena guarani, e Ceci, uma jovem branca. O enredo se desenvolve em meio a conflitos entre indígenas e colonizadores portugueses, destacando temas como honra, coragem e o choque entre diferentes culturas.\n[…]\nNo primeiro ato, somos introduzidos aos personagens principais e ao cenário da floresta brasileira, onde Peri salva Ceci de um ataque de uma onça. O segundo ato se desenrola na casa do pai de Ceci, Dom Antônio, onde Peri é recebido como herói. A relação entre Peri e Ceci se aprofunda, apesar das diferenças culturais e das objeções de outras personagens.\n[…]\nNo terceiro ato, ocorrem traições e conflitos entre os personagens, culminando em um ataque à casa de Dom Antônio pelos Aimorés, uma tribo inimiga. No último ato, Peri e Ceci enfrentam uma série de desafios e perigos, incluindo a erupção de um vulcão. Na conclusão dramática, Peri salva Ceci de novo, e eles se refugiam em uma canoa, simbolizando sua união e o triunfo do amor sobre as adversidades.\n[…]\nEm 1980 O Guarani foi encenada no Theatro Municipal do Rio de Janeiro dirigida por Sérgio Britto e regência de Mário Tavares, com a Orquestra Sinfônica, Coro e Corpo de Ballet do Theatro Municipal, além dos intérpretes dos papéis principais e de atores interpretando os indígenas aimorés. Mais recentemente, em 1996, Il Guarany foi remontada pela Ópera Nacional de Washington, com Plácido Domingo no papel de Peri.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Claudio Monteverdi",
      "descricao": "Compositor italiano, figura de transição entre Renascença e Barroco e pioneiro da ópera."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "L'Orfeo, de Claudio Monteverdi, uma das primeiras óperas ainda encenadas hoje, estreou na cidade italiana de Mântua em que século?",
    "resposta": "Século dezessete",
    "distratores": [
      "Século quinze",
      "Século dezesseis",
      "Século dezoito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/L%27Orfeo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/L%27Orfeo",
        "situacao": "ok",
        "texto": "L'Orfeo (SV 318) (Italian pronunciation: [lorˈfɛːo]), or La favola d'Orfeo [la ˈfaːvola dorˈfɛːo], is a late Renaissance/early Baroque favola in musica, or opera, by Claudio Monteverdi, with a libretto by Alessandro Striggio. It is based on the Greek legend of Orpheus, and tells the story of his descent to Hades and his fruitless attempt to bring his dead bride Eurydice back to the living world. I\n[…]\nBy the early 17th century the traditional intermedio—a musical sequence between the acts of a straight play—was evolving into the form of a complete musical drama or \"opera\". Monteverdi's L'Orfeo moved this process out of its experimental era and provided the first fully developed example of the new genre. After its initial performance the work was staged again in Mantua, and possibly in other Italian centres in the next few years. Its score was published by Monteverdi in 1609 and again in 1615.\n[…]\nFenlon, Ian (1986a). \"The Mantuan Orfeo\" in Whenham, John (ed.): Claudio Monteverdi: Orfeo. Cambridge, England: Cambridge University Press. ISBN 0-521-24148-0.\n[…]\nFenlon, Ian (1986b). \"Correspondence relating to the early Mantuan performances\" in Whenham, John (ed.): Claudio Monteverdi: Orfeo. Cambridge, England: Cambridge University Press. ISBN 0-521-24148-0.\n[…]\nRolland, Romain (1986). \"A review of Vincent d'Indy's performance (Paris 1904)\" in Whenham, John (ed.): Claudio Monteverdi: Orfeo. Perkins, Wendy (tr.). Cambridge, England: Cambridge University Press. ISBN 0-521-24148-0.\n[…]\nSternfeld, F. W. (1986). \"The Orpheus myth and the libretto of Orfeo\". In Whenham, John (ed.). Claudio Monteverdi: Orfeo. Cambridge, England: Cambridge University Press. ISBN 0-521-24148-0.\n[…]\nWhenham, John (1986). \"Five acts, one action\" in Claudio Monteverdi: Orfeo. London: Cambridge University Press. ISBN 0-521-24148-0.\n[…]\nL'Orfeo libretto in Italian with English translation\n[…]\nL'Orfeo libretto in German translation"
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
    "indice": 45,
    "ancora": {
      "nome": "Don Giovanni",
      "descricao": "Ópera de Mozart, de 1787, sobre o sedutor Don Juan e seu criado Leporello."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Entre estas óperas famosas, qual foi a primeira a estrear?",
    "resposta": "Don Giovanni",
    "distratores": [
      "O Barbeiro de Sevilha",
      "Aida",
      "Carmen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Don_Giovanni",
      "https://en.wikipedia.org/wiki/The_Barber_of_Seville",
      "https://en.wikipedia.org/wiki/Carmen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Don_Giovanni",
        "situacao": "ok",
        "texto": "Don Giovanni (Italian pronunciation: [ˈdɔn dʒoˈvanni]; K. 527; full title: Il dissoluto punito, ossia il Don Giovanni, literally 'The Rake Punished, or Don Giovanni') is an opera in two acts with music by Wolfgang Amadeus Mozart to an Italian libretto by Lorenzo Da Ponte. Its subject is a centuries-old Spanish legend about a libertine, Don Juan, as told by playwright Tirso de Molina in his 1630 pl\n[…]\nDon Giovanni's chambers\n[…]\nThe minuet from the finale of act 1 (\"Signor, guardate un poco\"), transcribed by Moritz Moszkowski, also makes an incongruous appearance in the manuscript of Liszt's Fantasy on Themes from Mozart's Figaro and Don Giovanni, and Sigismond Thalberg uses the same minuet, along with \"Deh, vieni alla finestra\", in his Grand Fantaisie sur la serenade et le Minuet de Don Juan, Op. 42. Thalberg also included a piano arrangement of \"Il mio tesoro\" in his L'art du chant appliqué au piano\", Op. 70.\n[…]\nIn addition to instrumental works, allusions to Don Giovanni also appear in a number of operas: Nicklausse of Offenbach's The Tales of Hoffmann sings a snatch of Leporello's \"Notte e giorno\", and Rossini quotes from the same aria in the duettino between Selim and Fiorilla following the former's cavatina in act 1 of Il turco in Italia.\n[…]\nGounod, Charles (1970). Mozart's Don Giovanni: A Commentary (from the third French edition of Le Don Juan de Mozart, London, R. Cocks, 1895). Translated by Windeyer Clark; J. P. Hutchinson. New York: Da Capo Press.\n[…]\nNoske, F[rits] R[udolf] [in Dutch] (1970). \"Don Giovanni: Musical Affinities and Dramatic Structure\". Studia Musicologica Academiae Scientiarum Hungaricae. 12 (1/4). Akadémiai Kiadó: 167–203. doi:10.2307/901357. JSTOR 901357.; reprinted in Theatre Research viii (1973), 60–74 and in Noske, Frits (1977). The Signifier and the Signified: Studies in the Operas of Mozart and Verdi. Springer. pp. 39–75. ISBN 978-9024719952."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Barber_of_Seville",
        "situacao": "ok",
        "texto": "The Barber of Seville, or The Useless Precaution (Italian: Il barbiere di Siviglia, ossia L'inutile precauzione [il barˈbjɛːre di siˈviʎʎa osˈsiːa liˈnuːtile prekautˈtsjoːne]) is an opera buffa (comic opera) in two acts composed by Gioachino Rossini with an Italian libretto by Cesare Sterbini. The libretto was based on Pierre Beaumarchais's French comedy The Barber of Seville (1775).\n[…]\nOther operas based on the first play were composed by Giovanni Paisiello (in 1782), by Nicolas Isouard in 1796, and then by Francesco Morlacchi in 1816. Though the work of Paisiello triumphed for a time, only Rossini's version has stood the test of time and continues to be a mainstay of operatic repertoire.\n[…]\nRossini was well known for being remarkably productive, completing an average of two operas per year for 19 years, and in some years writing as many as four. Musicologists believe that, true to form, the music for Il barbiere di Siviglia was composed in just under three weeks, although the famous overture was actually recycled from two earlier Rossini operas, Aureliano in Palmira and Elizabeth, Queen of England and thus contains none of the thematic material in Il barbiere di Siviglia itself.\n[…]\nFurthermore, many of the audience were supporters of one of Rossini's rivals, the veteran Giovanni Paisiello, who played on mob mentality to provoke the rest of the audience to dislike the opera. Paisiello had already composed The Barber of Seville and took Rossini's new version to be an affront to his version.\n[…]\nOsborne, Charles (1994). The Bel Canto Operas of Rossini, Donizetti, and Bellini. Portland, Oregon: Amadeus Press. ISBN 0-931340-71-3."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carmen",
        "situacao": "ok",
        "texto": "Carmen (French: [kaʁmɛn] ) is an opera in four acts by the French composer Georges Bizet. The libretto was written by Henri Meilhac and Ludovic Halévy, based on the novella of the same title by Prosper Mérimée. The opera was first performed by the Opéra-Comique in Paris on 3 March 1875, where its breaking of conventions shocked and scandalised its first audiences.\n[…]\nBizet's professional relationship with Léon Carvalho, manager of the independent Théâtre Lyrique company, enabled him to bring to the stage two full-scale operas, Les pêcheurs de perles (1863) and La jolie fille de Perth (1867), but neither enjoyed much public success.\n[…]\nCurtiss suggests that Carmen's character, spiritually and musically, may be a realisation of the composer's own unconscious longing for a freedom denied to him by his stifling marriage. Harold C. Schonberg likens Carmen to \"a female Don Giovanni. She would rather die than be false to herself.\" The dramatic personality of the character, and the range of moods she is required to express, call for exceptional acting and singing talents.\n[…]\nThe search for a singer-actress to play Carmen began in mid-1873. Press speculation favoured Zulma Bouffar, who was perhaps the librettists' preferred choice. She had sung leading roles in many of Offenbach's operas, but she was unacceptable to Bizet and was turned down by du Locle as unsuitable. In September an approach was made to Marie Roze, well known for previous triumphs at the Opéra-Comique, the Opéra and in London.\n[…]\nAzaola, Juan Ramon, ed. (2003). A Season of Opera on DVD:, Part 4: Carmen. Madrid: Del Prado. ISBN 84-9798-071-9.\n[…]\nNewman, Ernest (1958). Great Operas. Vol. 1. New York: Vintage Books. OCLC 592622247."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Don_Giovanni",
        "situacao": "ok",
        "texto": "Don Giovanni (K. 527; título completo em italiano:  Il dissoluto punito, ossia il Don Giovanni, lit. O Libertino Punido, ou Don Giovanni) é uma ópera em dois atos com música do compositor austríaco Wolfgang Amadeus Mozart e libreto do autor italiano Lorenzo Da Ponte. Sua primeira apresentação foi realizada em Praga, no Teatro di Praga, especializado em ópera italiana (atualmente chamado de Teatro \n[…]\nOuve-se de repente uma voz “do outro mundo”, a da estátua, que recrimina a conduta de Don Giovanni e promete vingança.\n[…]\nLeporello fica aterrorizado; mas Don Giovanni, impávido e audaz, convida a estátua a jantar com ele nessa noite. E o convite é aceito. Dona Ana roga ao seu prometido Otávio, que compreenda sua dor pela morte do pai e concorde em adiar a boda. Está Don Giovanni jantando alegremente em sua casa, enquanto uns músicos e algumas mulheres amenizam o ambiente.\n[…]\nAparece Elvira suplicando a Don Giovanni que mude de vida, mas este responde com arrogância: “Vivam as mulheres, viva o bom vinho, sustento da glória e da humanidade!”\n[…]\nE o mesmo sucede com Leporello quando sai a ver o que se passa: é a estátua do Comendador, disposta a cumprir o convite que lhe fez Don Giovanni.\n[…]\nO Comendador entra e diz a Don Giovanni que se arrependa, sem consegui-lo; então dá-lhe a mão e arrasta-o consigo até às chamas do inferno, enquanto se ouve um invisível coro de demónios.\n[…]\nTodos, com alegria, dizem ao público que aprendam a lição com o destino de Don Giovanni: “A morte dos pérfidos é sempre igual à sua vida.”\n[…]\n\"Là ci darem la mano…\" - Don Giovanni & Zerlina\n[…]\n\"Fin ch'han dal vino…\" - Don Giovanni\n[…]\n\"Deh, vieni alla finestra\" - Don Giovanni\n[…]\n\"Meta di voi qua vadano\" - Don Giovanni\n[…]\n\"Don Giovanni, a cenar teco\" - Don Giovanni, Leporello & Commendatore\n[…]\nLibreto Bilíngue de Don Giovanni, na tradução de Irineu Franco Perpétuo\n[…]\nAula de Alexandre Innecco: para gostar de Don Giovanni.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Jean Sibelius",
      "descricao": "Compositor finlandês do final do Romantismo, autor de sete sinfonias e de Finlândia."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes compositores viveu mais anos?",
    "resposta": "Jean Sibelius",
    "distratores": [
      "Giuseppe Verdi",
      "Joseph Haydn",
      "Georg Friedrich Händel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jean_Sibelius",
      "https://en.wikipedia.org/wiki/Giuseppe_Verdi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jean_Sibelius",
        "situacao": "ok",
        "texto": "Jean Sibelius (; Finland Swedish: [ˈʃɑːn siˈbeːliʉs] ; born Johan Christian Julius Sibelius; 8 December 1865 – 20 September 1957) was a Finnish composer of the late Romantic and early modern periods. He is widely regarded as his country's greatest composer, and his music is often credited with having helped Finland develop a stronger national identity when the country was struggling from several a\n[…]\nThe quinquennial International Jean Sibelius Violin Competition, instituted in 1965, the Sibelius Monument, unveiled in 1967 in Helsinki's Sibelius Park, the Sibelius Museum, opened in Turku in 1968, and the Sibelius Hall concert hall in Lahti, opened in 2000, were all named in his honour, as was the asteroid 1405 Sibelius.\n[…]\nGoss, Glenda (1998). Jean Sibelius: Guide to Research. New York: Garland Press. ISBN 0-8153-1171-0.\n[…]\nGrimley, Daniel M. (2021). Jean Sibelius: Life, Music, Silence. Reaktion Books. ISBN 978-1789144659.\n[…]\nJohnson, Harold E. (1959). Jean Sibelius. New York: Knopf. OCLC 603128.\n[…]\nRickards, Guy (1997). Jean Sibelius. London and New York: Phaidon Press. ISBN 0-7148-3581-1.\n[…]\nVernon, David (2024). Sun Forest Lake: The Symphonies & Tone Poems of Jean Sibelius. Edinburgh: Candle Row Press. ISBN 978-1739659943.\n[…]\nFree scores by Jean Sibelius at the International Music Score Library Project (IMSLP)\n[…]\nJean Sibelius – the website Archived 30 November 2022 at the Wayback Machine (English)\n[…]\nThe Sibelius Society of Finland Archived 6 January 2009 at the Wayback Machine\n[…]\nJean Sibelius Museum\n[…]\nFinlandia by Jean Sibelius, thisisFINLAND\n[…]\n\"Discovering Sibelius\". BBC Radio 3.\n[…]\nJean Sibelius link collection\n[…]\nNewspaper clippings about Jean Sibelius in the 20th Century Press Archives of the ZBW\n[…]\n\"Jean Sibelius\". Biografiskt lexikon för Finland (in Swedish). Helsingfors: Svenska litteratursällskapet i Finland. urn:NBN:fi:sls-4820-1416928957426.\n[…]\nPortraits of Jean Sibelius at the National Portrait Gallery, London"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Giuseppe_Verdi",
        "situacao": "ok",
        "texto": "Giuseppe Fortunino Francesco Verdi ( VAIR-dee; Italian: [dʒuˈzɛppe ˈverdi]; 9 or 10 October 1813 – 27 January 1901) was an Italian composer best known for his operas. He was born near Busseto, a small town in the modern province of Parma, to a family of moderate means, receiving a musical education with the help of a local patron named Antonio Barezzi.\n[…]\nVerdi has been the subject of several film and stage works. These include the 1938 film directed by Carmine Gallone, Giuseppe Verdi, starring Fosco Giachetti; the 1982 miniseries, The Life of Verdi, directed by Renato Castellani, where Verdi was played by Ronald Pickup, with narration by Burt Lancaster in the English version; and the 1985 play After Aida, by Julian Mitchell (1985). He is a character in the 2011 opera Risorgimento! by Italian composer Lorenzo Ferrero.\n[…]\nVerdi's operas are frequently staged around the world. All of his operas are available in recordings, and on DVD – Naxos Records offers a complete boxed set. Modern productions may differ substantially from those originally envisaged by the composer. Jonathan Miller's 1982 version of Rigoletto for English National Opera, set in the world of modern American mafiosi, received critical plaudits.\n[…]\nIn 2011, Anthony Tommasini ranked Verdi eighth on his list of the ten greatest composers of classical music: \"That a new production of a Verdi opera, like Willy Decker’s spare, boldly reimagined staging of La Traviata at the Metropolitan Opera, can provoke such heated passions among audiences is testimony to the enduring richness of Verdi’s works...Though Verdi had an ornery side, he was a decent man, an Italian patriot and the founder of a retirement home for musicians still in operation in Milan.\"\n[…]\nAnthony Tommasini, The Greatest Composers Part Five: Verdi and Wagner The New York Times"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jean_Sibelius",
        "situacao": "ok",
        "texto": "Johan Julius Christian Sibelius, conhecido como Jean Sibelius (Hämeenlinna, 8 de dezembro de 1865 — Järvenpää, 20 de setembro de 1957), foi um compositor finlandês de música erudita, e um dos mais populares compositores do fim do século XIX e início do XX. Sua música também teve importante papel na formação da identidade nacional finlandesa.\n[…]\nSibelius nasceu numa família sueco-finlandesa cuja língua materna era o sueco e residia na cidade de Hämeenlinna, no Grão-Ducado da Finlândia, então pertencente ao Império Russo. Seu nome de batismo é Johan Julius Christian Sibelius, conhecido pelo hipocorístico Janne por sua família, mas ainda seus anos de estudo ele teve a ideia de usar a forma francesa de seu nome, Jean. A ideia veio após ter visto uma pilha de cartões postais de seu tio Johan, o irmão mais velho de seu pai, o Dr.\n[…]\nChristian Gustaf Sibelius, que era médico na guarnição militar de Hämeenlinna. O nome Johan lhe fora dado em homenagem a esse tio, que era capitão de navio e tinha morrido em Havana, em 1863. O prenome Jean era usado por Johan quando estava no exterior.\n[…]\nJean Sibelius casou-se com Aino Järnefelt (1871-1969) na cidade de Maxmo em 10 de junho de 1892. A casa de Jean e Aino, a Ainola, foi concluída no Lago Tuusula, na cidade de Järvenpää, Finlândia, em 1903, onde eles viveram durante o resto de suas longas vidas. Eles tiveram seis filhas: Eva, Ruth, Kirsti (que morreu muito jovem), Katarine, Margaret e Heidi.\n[…]\nSibelius também escreveu vários poemas sinfônicos baseados na poesia finlandesa, sendo En Saga o primeiro e Tapiola o último, sua última grande composição.\n[…]\n«Jean Sibelius – o website»\n[…]\n«Museu Jean Sibelius»\n[…]\n«Finlândia Virtual – Sibelius»\n[…]\n«Ainola – O lar de Aino e Jean Sibelius»\n[…]\n«Coleção de links de Jean Sibelius»\n[…]\nObras de Jean Sibelius no International Music Score Library Project\n[…]\n«Sibelius Donato Tenório»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Contralto",
      "descricao": "Tipo de voz feminina de registro mais grave na classificação vocal da música erudita."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na classificação das vozes femininas usada na ópera e nos corais, qual é a voz mais grave?",
    "resposta": "Contralto",
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
    "indice": 48,
    "ancora": {
      "nome": "Marcha Radetzky",
      "descricao": "Marcha de Johann Strauss pai, de 1848, que encerra tradicionalmente o Concerto de Ano Novo da Filarmônica de Viena."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A Marcha Radetzky, que encerra o Concerto de Ano Novo de Viena com as palmas ritmadas do público, foi composta por quem?",
    "resposta": "Johann Strauss Pai",
    "distratores": [
      "Johann Strauss Filho",
      "Josef Strauss",
      "Franz Lehár"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Radetzky_March"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Radetzky_March",
        "situacao": "ok",
        "texto": "The \"Radetzky March\", Op. 228, (German: Radetzkymarsch; pronounced [ʁaˈdɛtskiˌmaʁʃ] ) is a march composed by Johann Strauss Sr. which was first performed on 31 August 1848 in Vienna to celebrate the victory of the Austrian Empire under Field Marshal Joseph Radetzky von Radetz (the piece's namesake) over the Italian forces at the Battle of Custoza, during the First Italian War of Independence.\n[…]\nStrauss had already used the theme in his Jubel-Quadrille, Op. 130.\n[…]\nFor the trio, Strauss used an older folk melody called Alter Tanz aus Wien or Tinerl-Lied which was originally in 3/4 time. When Radetzky came back to Vienna after winning the Battle of Custoza (1848), his soldiers were singing the then-popular song. Allegedly Strauss heard this singing and incorporated the melody, converted to 2/4 time, into the \"Radetzky March\".\n[…]\nAlong with \"The Blue Danube\" waltz by Johann Strauss Jr., the piece became an unofficial Austrian national anthem.\n[…]\nThe \"Radetzky March\" consists of several main parts:\n[…]\nLa Marche de Radetzky [fr] (1994): This historical drama taken from the eponymous novel by Joseph Roth (1894–1939), depicts the disintegration of the Austro-Hungarian Empire in the decade preceding 1914 through the dismay of the young lieutenant von Trotta. This description is punctuated by cheerful notes and mocking the musical leitmotif: the Radetzky March.\n[…]\nSvatojánský věneček [cz] (2015): In this Czech fairytale, one of the princess' suitors invents a special cartridge that serves as a musical instrument and can play the Radetzky march.\n[…]\nThe Power of the Dog (2021): The piano piece that Rose practices and fails to perform is a version of the Radetzky March.\n[…]\nJeroen H.C. Tempelman, \"On the Radetzky March\", Vienna Music, no. 99 (Summer 2000), pp. 12–13\n[…]\n\"Radetzky March\" Complete orchestral score: Scores at the International Music Score Library Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marcha_de_Radetzky",
        "situacao": "ok",
        "texto": "A Marcha de Radetzky, Op. 228 (título original em alemão: Radetzky-Marsch) é uma marcha composta por Johann Strauss (pai), que foi estreada em Viena em 31 de agosto de 1848 para celebrar a vitória do Império Austríaco, sob o comando do marechal de campo austríaco Josef Radetzky von Radetz, sobre o Reino da Sardenha na Batalha de Custoza, travada pouco mais de um mês antes no âmbito da Primeira Gue\n[…]\nAlém dessa vitória, a marcha era uma homenagem ao marechal pelo seu protagonismo na repressão das revoluções de 1848.\n[…]\nApesar do seu estilo ser mais de celebração do que marcial, a marcha tornou-se rapidamente popular como marcha militar. Desde 1896 que é a marcha oficial da Escola Militar do Libertador Bernardo O'Higgins do Exército do Chile e da Academia Militar Marechal Francisco Solano López do Exército Paraguaio. É também a marcha do regimento 1st The Queen's Dragoon Guards do Reino Unido.\n[…]\nJuntamente com a valsa O Danúbio Azul, a marcha tornou-se uma espécie de hino não oficial austríaco. Atualmente é usada em numerosos jingles publicitários e em eventos desportivo importantes, nomeadamente no jogos da Seleção Austríaca de Futebol.\n[…]\nDesde que foi incluída no programa do Concerto de Ano Novo de Viena pelo maestro da Filarmónica de Viena Josef Krips, em 1946, que é tocada como um encore jubiloso.\n[…]\nRadetzkymarsch",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Lá 440",
      "descricao": "Padrão internacional de afinação que fixa a nota lá acima do dó central em quatrocentas e quarenta vibrações por segundo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No padrão internacional de afinação, a nota lá acima do dó central vibra quantas vezes por segundo?",
    "resposta": "Quatrocentas e quarenta",
    "distratores": [
      "Quatrocentas e quinze",
      "Quatrocentas e trinta e duas",
      "Quatrocentas e sessenta e seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/A440_(pitch_standard)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/A440_(pitch_standard)",
        "situacao": "ok",
        "texto": "A440 (also known as Stuttgart pitch) is the musical pitch corresponding to an audio frequency of 440 Hz, which serves as a tuning standard for the musical note of A above middle C, or A4 in scientific pitch notation. It is standardized by the International Organization for Standardization as ISO 16. Other frequencies have been, and sometimes still are, used to tune to this note, but A440 is the re\n[…]\nThe other European delegates concurred with Swinburne's position and agreed to a standard of A440.\n[…]\nThe A440 standard is not universally adhered to. Early-music ensembles continue to use older, lower pitch levels. Leonard Bernstein often tuned the New York Philharmonic to A442, leading to complaints from the piano tuners' union, although he claimed both the New York and Boston orchestras had used this higher pitch for years.\n[…]\nA440 is widely used as concert pitch in the United Kingdom and the United States. In continental Europe the frequency of A4 commonly varies between 440 Hz and 444 Hz.\n[…]\nIn the period instrument movement, a consensus has arisen around a modern 'baroque pitch' of 415 Hz (with 440 Hz corresponding to A♯) corresponding to Kammerton, another 'baroque' pitch known as Chorton pitch for some organs (in particular, some German church music, e.g. the pre-Leipzig period cantatas of Bach)  at 466 Hz (with 440 Hz corresponding to A♭), and a 'classical pitch' at 427–430 Hz.\n[…]\nA440 is often used as a tuning reference in just intonation regardless of the fundamental note or key.\n[…]\nThe US time and frequency station WWV broadcasts a 440 Hz signal at two minutes past every hour, with WWVH broadcasting the same tone at the first minute past every hour. This was added in 1936 to aid orchestras in tuning their instruments.\n[…]\nGribenski, Fanny (2023). Tuning the World: The Rise of 440 Hertz in Music, Science, and Politics, 1859–1955. University of Chicago Press. ISBN 978-0-226-82327-0."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A1_440",
        "situacao": "ok",
        "texto": "Lá 440 (ISO 16:1955 pitch standard) é o nome que se dá coloquialmente ao som que produz uma vibração a 440 Hz e, também é a frequência sonora padrão de afinação da altura musical dos instrumentos musicais adotado pela Organização Internacional para Padronização em 1955 como a norma ISO 16.\n[…]\nO Lá 440 é a nota musical que se encontra acima do dó central do piano.\n[…]\nEm 1936, uma conferência internacional recomendou que o lá que se encontra à direita do dó central do piano se afinasse a 440 Hz.\n[…]\nA estação de rádio dos EUA WWV transmite um sinal de 440 Hz a dois minutos de cada hora, com WWVH transmitindo o mesmo tom no primeiro minuto após cada hora. Isso foi adicionado em 1936 para ajudar as orquestras a afinar seus instrumentos, e foi bastante útil para músicos na época em que não existiam afinadores elétricos.\n[…]\nJohann Schaikler recomendou que o Lá 440 fosse o padrão em 1834 após o desenvolvimento de um tonômetro para medir a altura sonora e foi aprovado pela Sociedade Alemã de História Natural no mesmo ano.\n[…]\nEm 1926, a indústria musical americana estabeleceu o Lá 440 como um padrão não oficial e foi usado na fabricação de instrumentos musicais.\n[…]\nEm 1936, uma conferência internacional recomendou que à direita do C central do piano fosse ajustada a 440 Hz. Esse padrão foi tomado pela Organização Internacional para a Padronização (ISO) em 1955 (e reafirmado por eles em 1975) como ISO 16, que afirma que a frequência do painel de controle é de 440 Hz e que a sintonia dos instrumentos musicais deve ter uma precisão de ±0,5 Hz.\n[…]\nMas nem sempre foi assim. O diapasão foi inventado em 1711, e há um que está associado com Handel (1685-1759), de 1740, sintonizado a 422,5 Hz. Outra diapasão, de 1780, é ajustada a 409 Hz.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Canto gregoriano",
      "descricao": "Canto litúrgico monofônico da Igreja Católica, desenvolvido na Idade Média."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Diferente da pauta de cinco linhas usada hoje, o canto gregoriano costuma ser escrito numa pauta de quantas linhas?",
    "resposta": "Quatro",
    "distratores": [
      "Duas",
      "Três",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gregorian_chant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gregorian_chant",
        "situacao": "ok",
        "texto": "Gregorian chant is the central tradition of Western plainchant, a form of monophonic, unaccompanied sacred song in Latin (and occasionally Greek) of the Roman Catholic Church. Gregorian chant developed mainly in western and central Europe during the 9th and 10th centuries, with later additions and redactions.\n[…]\nIn 885, Pope Stephen V banned the Slavonic liturgy, leading to the ascendancy of Gregorian chant in Eastern Catholic lands including Poland, Moravia and Slovakia.\n[…]\nOften, a Gregorian chant (sometimes in modified form) would be used as a cantus firmus, so that the consecutive notes of the chant determined the harmonic progression. The Marian antiphons, especially Alma Redemptoris Mater, were frequently arranged by Renaissance composers. The use of chant as a cantus firmus was the predominant practice until the Baroque period, when the stronger harmonic progressions made possible by an independent bass line became standard.\n[…]\nThe Catholic Church later allowed polyphonic arrangements to replace the Gregorian chant of the Ordinary of the Mass. This is why the Mass as a compositional form, as set by composers like Palestrina or Mozart, features a Kyrie but not an Introit. The Propers may also be replaced by choral settings on certain solemn occasions. Among the composers who most frequently wrote polyphonic settings of the Propers were William Byrd and Tomás Luis de Victoria.\n[…]\nAnglican chant\n[…]\nProportionalism (Gregorian chant)\n[…]\nSemiology (Gregorian chant)\n[…]\n\"\"The living textbook\" on the choral notation of the Gregorian chant\".\n[…]\n\"Spanish Chant Manuscript\". – A collection of Gregorian chants, hymns and psalms (Spain, 1575–1625) from the University of British Columbia Library Digital Collections\n[…]\n\"Singing Gregorian Chant: Pitch and Mode\" (PDF). Archived from the original (PDF) on 5 March 2016."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canto_gregoriano",
        "situacao": "ok",
        "texto": "Canto gregoriano é a tradição central do cantochão ocidental, uma forma de canto sacro monofônico, sem acompanhamento, em latim (e ocasionalmente em grego) da Igreja Católica. O canto gregoriano desenvolveu-se principalmente na Europa Ocidental e Central durante os séculos IX e X, com adições e redações posteriores.\n[…]\nOs cantos gregorianos foram inicialmente organizados em quatro, depois oito e, finalmente, doze modos.\n[…]\nOs padrões de escala são organizados contra um padrão de fundo formado por tetracordes conjuntos e disjuntos, produzindo um sistema de altura maior chamado gamut. Os cantos podem ser cantados usando padrões de seis notas chamados hexacordes. As melodias gregorianas são tradicionalmente escritas usando neumas, uma forma antiga de notação musical a partir da qual se desenvolveram as pautas modernas de quatro e cinco linhas.\n[…]\nO canto gregoriano é grafado em um sistema de quatro linhas - o Tetragrama - através de uma notação quadrada denominada Neuma. Os neumas passaram a ser utilizados a partir do Século XIII. O desenvolvimento da escrita pneumática se deve ao medo dos monges de perder a preciosidade melódica do canto gregoriano, que teve sua escrita inventada a partir de moldes musicais bizantinos.\n[…]\nSão quatro as escalas modais utilizadas nas composições gregorianas e levam os nomes medievais de Protus, Deuterus, Tritus e Tetrardus. Cada uma dessas quatro escalas possuem os modos \"Autêntico\" e \"Plagal\", chegando assim a oito modos diferentes, consistindo a forma ocidental do octoeco.\n[…]\nO canto gregoriano é reconhecido pelo Concílio Vaticano II como a música própria dos ritos da Igreja Católica.\n[…]\n«Acervo de Canto Gregoriano». (Áudio e Partituras) [ligação inativa]\n[…]\n«Partituras de Canto Gregoriano» (em inglês)\n[…]\nCurso de Gregoriano em Brasília\n[…]\nGregorian Chant Music - ClassicalRadio.com",
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
