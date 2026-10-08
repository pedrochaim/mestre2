Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Cinema** (tema **Entretenimento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "O Pagador de Promessas",
      "descricao": "Filme brasileiro de 1962 dirigido por Anselmo Duarte, vencedor da Palma de Ouro em Cannes."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes filmes foi o primeiro brasileiro indicado ao Oscar de filme em língua estrangeira?",
    "resposta": "O Pagador de Promessas",
    "distratores": [
      "Central do Brasil",
      "O Quatrilho",
      "Vidas Secas"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Pagador_de_Promessas_(filme)",
      "https://en.wikipedia.org/wiki/List_of_Brazilian_submissions_for_the_Academy_Award_for_Best_International_Feature_Film"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Pagador_de_Promessas_(filme)",
        "situacao": "ok",
        "texto": "O Pagador de Promessas é um filme brasileiro de 1962 do gênero drama, dirigido e escrito por Anselmo Duarte, baseado na peça teatral homônima do dramaturgo Dias Gomes. Em seu elenco principal, estão Leonardo Villar, Glória Menezes, Norma Bengell, Dionísio Azevedo e Geraldo Del Rey. A trama segue Zé do Burro que, após ter seu burro atingido por um raio, faz uma promessa em um terreiro de Candomblé.\n[…]\nNa 35ª cerimônia do Oscar, competiu na categoria de Melhor Filme Internacional, onde se tornou o primeiro filme brasileiro e sul-americano a ser indicado ao prêmio.\n[…]\nEm 1999, em uma pesquisa do jornal Folha de S.Paulo realizada com 24 críticos e estudiosos do cinema brasileiro, indicou O Pagador de Promessas como um dos melhores filmes brasileiros de todos os tempos, ficando na décima posição na lista. Em novembro de 2015, ficou em nono lugar na lista dos cem melhores filmes brasileiros de todos os tempos, da Associação Brasileira de Críticos de Cinema (Abraccine).\n[…]\nO Pagador de Promessas foi rodado em Salvador, capital do estado da Bahia, entre agosto e setembro de 1961. Anselmo Duarte convidou Leonardo Villar para o papel principal, que protagonizou a encenação da peça de Dias Gomes em 1960. A direção de fotografia foi feita pelo inglês Chick Fowle, que trabalhou anteriormente na Companhia Cinematográfica Vera Cruz.\n[…]\nEm sua estreia mundial no Festival de Cinema de Cannes, recebeu o prêmio máximo do Festival, a Palma de Ouro, prêmio até então inédito para o Brasil. No mesmo ano, ainda recebeu o Prêmio Especial do Júri no Festival Internacional de Cinema de Cartagena, na Colombia, e o Prêmio Golden Gate de Melhor Filme e Trilha Sonora, para Gabriel Migliori, no San Francisco International Film Festival, nos Estados Unidos. Foi o primeiro filme brasileiro indicado ao Oscar de Melhor Filme Internacional, em 1963.\n[…]\nBrasil no Festival de Cannes\n[…]\nO Pagador de Promessas no AdoroCinema"
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Brazilian_submissions_for_the_Academy_Award_for_Best_International_Feature_Film",
        "situacao": "ok",
        "texto": "Brazil has submitted films for the Academy Award for Best International Feature Film since 1960. The award is handed out annually by the United States–based Academy of Motion Picture Arts and Sciences to a feature length motion picture produced outside the U.S. that contains primarily non-English language dialogue. It was not created until the 1956 Academy Awards, in which a competitive Academy Aw\n[…]\nO Pagador de Promessas or (Keeper of Promises, 1962), directed by Anselmo Duarte, was the first Brazilian submission nominated for Best Foreign Language Film, at the 35th Academy Awards.\n[…]\nThe Brazilian nominee is selected by a committee of the Academia Brasileira de Cinema since 2017.\n[…]\n^ a: Also known as The Given Word and The Promise in the English-speaking market.\n[…]\n^ b: Central do Brasil was also nominated for the Academy Award for Best Actress. The film's lead actress, Fernanda Montenegro, held the title as the only Brazilian nominated in an acting category until her daughter, Fernanda Torres, was nominated in 2025."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Parasita",
      "descricao": "Filme sul-coreano de 2019 dirigido por Bong Joon-ho, sobre uma família pobre que se infiltra numa família rica."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na história do Oscar, qual foi o primeiro filme falado numa língua que não o inglês a levar a estatueta de melhor filme?",
    "resposta": "Parasita",
    "fonte": [
      "https://en.wikipedia.org/wiki/Parasite_(2019_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Parasite_(2019_film)",
        "situacao": "ok",
        "texto": "Parasite (Korean: 기생충) is a 2019 South Korean black comedy thriller film directed by Bong Joon Ho, who co-wrote the screenplay with Han Jin-won. It stars Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, Jang Hye-jin, Park Myung-hoon, and Lee Jung-eun. The film follows a poor family who infiltrate the home and life of a wealthy family.\n[…]\nParasite was submitted as the South Korean entry for Best International Feature Film for the 92nd Academy Awards, making the December shortlist. It went on to win four awards—Best Picture, Best Director, Best Original Screenplay, and Best International Feature Film. Parasite became the first non-English language film in Academy Awards history to win Best Picture.\n[…]\nThe AP noted that the film's victory, as an Oscar-winning foreign film in a regular Academy category, opened the door for Hollywood to undergo a radical change and a different kind of advancement, as a skeptic worried that if \"Parasite won the Oscar for best international film, it probably wouldn't win any other major awards\". \"The Academy gave Best Picture to the actual best picture\", wrote Justin Chang of the Los Angeles Times, adding that the film awards body was \"startled ...\n[…]\nOn 28 March 2023, Cannes Film Festival president Thierry Frémaux revealed that after Everything Everywhere All at Once, a 2022 science fiction comedy-drama also featuring a predominantly Asian cast, won the Best Picture Oscar at the 95th Academy Awards, he began to question whether the Best Picture win for Parasite was worthy enough, saying: \"How can a non-American film win the Oscar for best film since it's a ceremony in honor of American cinema?\n[…]\nParasite at HanCinema\n[…]\nParasite at IMDb\n[…]\nParasite at the Korean Movie Database (in Korean)  (in English)\n[…]\nParasite: Notes from the Underground an essay by Inkoo Kang at the Criterion Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gisaengchung",
        "situacao": "ok",
        "texto": "GisaengchungRR (bra: Parasita; prt: Parasitas) é um filme de suspense e comédia negra sul-coreano de 2019, dirigido por Bong Joon-ho, que co-escreveu o roteiro com Han Jin-won e co-produziu.\n[…]\nEntre seus numerosos prêmios, Gisaengchung ganhou as quatro principais categorias da Academia na 92ª edição do Oscar: Melhor Filme, Melhor Diretor, Melhor Roteiro Original e Melhor Filme Internacional, tornando-se o primeiro filme não falado em inglês a ganhar o Óscar de Melhor Filme.\n[…]\nTornou-se o segundo filme de idioma não inglês a ser indicado ao Prémio Screen Actors Guild para melhor elenco em cinema desde o italiano A Vida É Bela (1997) e, por fim, venceu a categoria, tornando-se o primeiro filme internacional a ganhar o prêmio. Gisaengchung também foi indicado a quatro prêmios para a cerimônia do BAFTA em 2020: Melhor Filme, Melhor Diretor, Melhor Roteiro Original e Melhor Filme em língua não-inglesa, ganhando os dois últimos.\n[…]\nO filme foi a inscrição sul-coreana para o prêmio de Melhor filme internacional do Óscar, entrando para a lista final em dezembro. Ganhou quatro prêmios: Melhor Filme, Melhor Diretor, Melhor Roteiro Original e Melhor Filme internacional. Gisaengchung se tornou o primeiro filme em língua não inglesa na história do Óscar a ganhar o prêmio de Melhor Filme.\n[…]\nA Associated Press também observou que a vitória do filme, por ser um estrangeiro vencedor do Oscar em uma categoria regular da Academia, abre a porta para Hollywood passar por uma mudança radical e um tipo diferente de avanço, como um cético preocupado que se “Parasite ganhou o Oscar de Melhor filme internacional, provavelmente não ganharia nenhum outro prêmio importante”.\n[…]\nCrítica de Parasita",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "O Poderoso Chefão Parte II",
      "descricao": "Filme de máfia de 1974 dirigido por Francis Ford Coppola, continuação de O Poderoso Chefão, com Al Pacino e Robert De Niro."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Até 1975, nenhuma continuação tinha vencido o Oscar de melhor filme. Que sequência quebrou essa barreira naquele ano?",
    "resposta": "O Poderoso Chefão Parte Dois",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Godfather_Part_II"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Godfather_Part_II",
        "situacao": "ok",
        "texto": "The Godfather Part II is a 1974 American epic gangster film produced and directed by Francis Ford Coppola, loosely based on the 1969 novel The Godfather by Mario Puzo, who co-wrote the screenplay with Coppola.\n[…]\nCoppola created The Godfather Saga expressly for American television in a 1975 release that combined The Godfather and The Godfather Part II with unused footage from those two films in a chronological order that toned down the violent, sexual, and profane material for its NBC debut on November 18, 1977.\n[…]\nThe Godfather Part II was featured on Sight & Sound's Director's list of the ten greatest films of all time in 1992 (ranked at No. 9) and 2002 (where it was ranked at No. 2. The critics ranked it at No. 4) On the 2012 list by the same magazine the film was ranked at No. 31 by critics and at No. 30 by directors. In 2006, Writers Guild of America ranked the film's screenplay (Written by Mario Puzo and Francis Ford Coppola) the 10th greatest ever. It ranked No.\n[…]\nMany believe Pacino's performance in The Godfather Part II is his finest acting work. It is now regarded as one of the greatest performances in film history. In 2006, Premiere issued its list of \"The 100 Greatest Performances of all Time\", putting Pacino's performance at #20. Later in 2009, Total Film issued \"The 150 Greatest Performances of All Time\", ranking Pacino's performance fourth place.\n[…]\nThe Godfather Part II at IMDb\n[…]\nThe Godfather Part II at the AFI Catalog of Feature Films\n[…]\nThe Godfather Part II at Box Office Mojo\n[…]\nThe Godfather Part II at Rotten Tomatoes\n[…]\nThe Godfather Part II at Metacritic\n[…]\nThe Godfather and The Godfather Part II essay by Michael Sragow on the National Film Registry website. Retrieved November 17, 2022."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Godfather_Part_II",
        "situacao": "ok",
        "texto": "The Godfather Part II (bra: O Poderoso Chefão Parte 2; prt: O Padrinho - Parte II:) é um filme estado-unidense de 1974, dirigido por Francis Ford Coppola.\n[…]\nThe Godfather Part II recebeu onze indicações ao Oscar, ganhou em seis categorias, incluindo Melhor Filme, Melhor Diretor (Coppola), Melhor Ator Coadjuvante (De Niro) e Melhor Roteiro Adaptado (Coppola e Puzo), tornando-se a primeira sequência a ganhar na categoria de Melhor Filme. O filme foi considerado \"culturalmente, historicamente ou esteticamente significante\" e selecionado pela Biblioteca do Congresso dos Estados Unidos para ser preservado no National Film Registry.\n[…]\nTrês anos após os acontecimentos da primeira parte da saga da família Corleone, que terminou em 1955, são contadas duas histórias paralelas. A primeira é a continuação de The Godfather. Agora, Michael está mais maduro e ousado no controle da família, e os Corleones tentam expandir seu império atuando na costa oeste dos Estados Unidos. Paralelamente, o filme apresenta toda a infância e a mocidade de Vito Andolini, que mais tarde seria conhecido como Don Vito Corleone.\n[…]\nApós a máfia local matar sua família, o jovem Vito (Robert De Niro) foge da sua cidade na Sicília e vai para a América. Já adulto, em Little Italy, Vito luta para ganhar a vida (legal ou ilegalmente) para manter sua esposa e filhos. Ele mata Don Fanucci (Gastone Moschin), que exigia dos comerciantes uma parte dos seus ganhos. Com a morte de Fanucci, o poderio de Vito cresce muito, mas sua família (passado e presente) é o que mais importa para ele.\n[…]\nThe Godfather (1972)\n[…]\nThe Godfather: Part III (1990)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "O Senhor dos Anéis: O Retorno do Rei",
      "descricao": "Filme de fantasia de 2003 dirigido por Peter Jackson, terceiro e último da trilogia baseada na obra de Tolkien."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Ben-Hur e Titanic ganharam onze Oscars cada um. Que filme de fantasia, lançado em 2003, igualou essa marca?",
    "resposta": "O Senhor dos Anéis: O Retorno do Rei",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Return_of_the_King"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Return_of_the_King",
        "situacao": "ok",
        "texto": "The Lord of the Rings: The Return of the King is a 2003 epic fantasy film directed by Peter Jackson from a screenplay he wrote with Fran Walsh and Philippa Boyens. It is based on 1955's The Return of the King, the third volume of the novel The Lord of the Rings by J. R. R. Tolkien. The sequel to 2002's  The Lord of the Rings: The Two Towers, the film is the final instalment in the Lord of the Ring\n[…]\nMarton Csokas as Celeborn the Wise: The Lord of Lothlórien.\n[…]\nIn his review for The Times, James Christopher praised The Return of the King as \"everything a Ring fan could possibly wish for, and much more\", and described The Lord of the Rings as \"the greatest film trilogy ever mounted, with some of the most amazing action sequences committed to celluloid\". Nev Pierce for the BBC gave the film five stars out of five, judging it to be the best chapter of the trilogy, since it combined \"the 'ooh' factor of Fellowship with the zippy action of Towers\".\n[…]\nPierce described The Return of the King as \"Majestic, moving, and immense\", and \"an astonishing piece of storytelling\".\n[…]\nThe most common criticism of The Lord of the Rings: The Return of the King was its running time, particularly the epilogue; even rave reviews for the film commented on its length. Joel Siegel of Good Morning America said in his review for the film (which he gave an 'A'): \"If it didn't take forty-five minutes to end, it'd be my best picture of the year. As it is, it's just one of the great achievements in film history.\"\n[…]\nThe Lord of the Rings (1978 film)\n[…]\nThe Return of the King (1980 film)\n[…]\nThe Lord of the Rings: The Return of the King at IMDb\n[…]\nThe Lord of the Rings: The Return of the King at the TCM Movie Database\n[…]\nThe Lord of the Rings: The Return of the King at Box Office Mojo\n[…]\nThe Lord of the Rings: The Return of the King at Metacritic\n[…]\nThe Lord of the Rings: The Return of the King at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Lord_of_the_Rings%3A_The_Return_of_the_King",
        "situacao": "ok",
        "texto": "The Lord of the Rings: The Return of the King (Brasil: O Senhor dos Anéis: O Retorno do Rei / Portugal: O Senhor dos Anéis: O Regresso do Rei) é um aclamado filme baseado nos livros da série O Senhor dos Anéis, escrito por J. R. R. Tolkien. Conclui a trilogia junto com os filmes The Fellowship of the Ring (2001) e The Two Towers (2002). Uma das maiores bilheteiras da história, foi vencedor de 11 O\n[…]\nArrecadando US$ 377,845,905 milhões de dólares na bilheteria nos EUA e Canadá, e US$ 768,185,007 milhões nos outros países, e mundialmente US$1,146,030,912 bilhão de dólares, O Retorno do Rei saiu de cartaz sendo o filme de maior bilheteria de 2003,além de ter sido, durante 8 anos o filme de maior bilheteria baseado em um livro, até o lançamento de Harry Potter e as Relíquias da Morte - Parte 2 em 2011, que arrecadou mais de 1,3 bilhão.\n[…]\nTornou-se a segunda maior bilheteria da história na época, atrás apenas de Titanic (2,195 bilhões de dólares). Foi o único filme da trilogia a atingir a marca do 1 bilhão de dólares, e o segundo a atingir essa marca na história do cinema.\n[…]\nO Retorno do Rei detém uma classificação de 93% no Rotten Tomatoes, com base em 261 avaliações, com uma pontuação média de 8,7. O principal consenso do site diz \"Visualmente deslumbrante e emocionalmente poderoso, O Senhor dos Anéis: O Retorno do Rei é uma conclusão emocionante e satisfatória para uma grande trilogia\". O filme possui uma pontuação de 94 em 100 no Metacritic, com base em 41 comentários, indicando \"aclamação universal\".\n[…]\nPrêmio de Melhor Filme, Melhor Diretor e Melhor Trilha Sonora pelo Círculo de Críticos de Chicago\n[…]\nPrêmio de Melhor Filme pelo Círculo de Críticos de Nova York\n[…]\nO Senhor dos Anéis: A Sociedade do Anel (filme)\n[…]\nO Senhor dos Anéis: As Duas Torres (filme)\n[…]\n«Cartaz do filme The Lord of the Rings: The Return of the King». (em formato JPG)\n[…]\nO Senhor dos Anéis - O Retorno do Rei no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Kathryn Bigelow",
      "descricao": "Cineasta americana, diretora de Guerra ao Terror e A Hora Mais Escura."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Com o filme de guerra Guerra ao Terror, quem se tornou, em 2010, a primeira mulher a ganhar o Oscar de melhor direção?",
    "resposta": "Kathryn Bigelow",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kathryn_Bigelow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kathryn_Bigelow",
        "situacao": "ok",
        "texto": "Kathryn Ann Bigelow (; born November 27, 1951) is an American filmmaker. Her accolades include two Academy Awards, two BAFTA Awards, and a Primetime Emmy Award.\n[…]\nKathryn Ann Bigelow was born on November 27, 1951, in San Carlos, California, the only child of Gertrude Kathryn (née Larson), a librarian, and Ronald Elliot Bigelow, a paint factory manager. Her mother was of Norwegian descent. She attended Sunny Hills High School in Fullerton, California.\n[…]\nBigelow next directed The Hurt Locker, which was first shown at the Venice Film Festival in September 2008, was the Closing Night selection for Maryland Film Festival in May 2009, and theatrically released in the US in June 2009. It qualified for the 2010 Oscars, as it did not premiere in an Oscar-qualifying run in Los Angeles until mid-2009.\n[…]\nFor the opening of Strange Days she controlled a crane that dropped a camera man off the edge of a tall building. For The Hurt Locker, Bigelow filmed in Jordan in up to 130 °F (54 °C) heat.\n[…]\nTime magazine named her one of the 100 most influential people in the world in 2010.\n[…]\nBigelow was married to director James Cameron from 1989 to 1991, and they have remained friends since the divorce.\n[…]\nKathryn Bigelow at IMDb\n[…]\nQ&A with Kathryn Bigelow in Men's Journal\n[…]\nLiterature on Kathryn Bigelow\n[…]\nG. Roger Denson, \"Women Looking at Men Loving: Eve Sussman, Kathryn Bigelow and the Women Writers of Mad Men\", The Huffington Post, March 8, 2013.\n[…]\nThe films of Kathryn Bigelow, Hell Is for Hyphenates, December 31, 2013\n[…]\nJérôme d'Estais, Kathryn Bigelow : passage de frontières, Editions Rouge profond, 2020, ISBN 9791097309312"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kathryn_Bigelow",
        "situacao": "ok",
        "texto": "Kathryn Ann Bigelow (San Carlos, 27 de novembro de 1951) é uma cineasta norte-americana que se tornou a primeira mulher a ganhar um Óscar de melhor direção por The Hurt Locker (br: Guerra ao Terror; pt: Estado de Guerra). O prêmio também era disputado por Avatar de James Cameron, ex-marido de Kathryn.\n[…]\nEm entrevista ao jornalista Jason Solomons do jornal britânico The Guardian, em que falava sobre seus principais filmes (Point Break, Strange Days, K-19: The Widowmaker e The Hurt Locker), Bigelow falou sobre os dois temas-chave de sua carreira: os homens e os militares, dizendo-se \"atraída por personagens provocantes.\".\n[…]\nEm abril de 2010, Bigelow foi nomeada uma das pessoas mais influentes do ano pela Time 100.\n[…]\nKathryn Bigelow no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Sean Connery",
      "descricao": "Ator escocês, o primeiro intérprete de James Bond nos filmes da série oficial, a partir de 1962."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes intérpretes do agente James Bond no cinema, qual nasceu na Escócia?",
    "resposta": "Sean Connery",
    "distratores": [
      "Roger Moore",
      "Pierce Brosnan",
      "Daniel Craig"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sean_Connery"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sean_Connery",
        "situacao": "ok",
        "texto": "Sir Thomas Sean Connery (25 August 1930 – 31 October 2020) was a Scottish actor and film producer. Connery was the first actor to portray the fictional British secret agent James Bond in motion pictures, starring in seven Bond films between 1962 and 1983. He originated the role in Dr. No (1962) and continued starring as Bond in the Eon Productions films From Russia with Love (1963), Goldfinger (19\n[…]\nThomas Sean Connery was born at the Royal Maternity Hospital in Edinburgh, Scotland, on 25 August 1930; he was named after his paternal grandfather. Connery was of half-Irish and half-Scottish descent. He was brought up at No. 176 Fountainbridge, a block which has since been demolished. His mother, Euphemia McBain \"Effie\" McLean, was a cleaning woman.\n[…]\nConnery's portrayal of Bond owes much to stylistic tutelage from the director Terence Young, who helped polish him while using his physical grace and presence for the action. Lois Maxwell, who played Miss Moneypenny, related that \"Terence took Sean under his wing. He took him to dinner, showed him how to walk, how to talk, even how to eat\". The tutoring was successful; Connery received thousands of fan letters a week after the opening of Dr. No, and he became a major sex symbol in film.\n[…]\nConnery said he was happy the producers, Electronic Arts, had approached him to voice Bond.\n[…]\nBray, Christopher (2010). Sean Connery: The Measure of a Man. Faber & Faber.\n[…]\nSellers, Robert (1999). Sean Connery: A Celebration. Robert Hale. ISBN 978-0-7090-6125-0. Retrieved 14 July 2011.\n[…]\nYule, Andrew (1992). Sean Connery: Neither Shaken Nor Stirred. Little, Brown Book Group. ISBN 978-0-7515-4097-0.\n[…]\nSean Connery at IMDb\n[…]\nSean Connery at the British Film Institute\n[…]\nSean Connery at the BFI's Screenonline\n[…]\nSean Connery at the Internet Broadway Database\n[…]\nSean Connery at the TCM Movie Database (archived)\n[…]\nSean Connery at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sean_Connery",
        "situacao": "ok",
        "texto": "Thomas Sean Connery Kt. (Edimburgo, 25 de agosto de 1930 — Nassau, 31 de outubro de 2020) foi um ator escocês. Ficou mundialmente conhecido como o primeiro e mais célebre ator a interpretar James Bond, agente secreto do MI6 britânico, no cinema, protagonizando 6 filmes entre 1962 e 1971. Tornou-se numa estrela de cinema na década de 1960, algo que lhe valeu uma carreira de mais de 50 anos.\n[…]\nApós trabalhos menores no cinema e na televisão inglesa, entre o fim dos anos 50 e começo dos 60, Connery chegou à fama internacional na pele do agente James Bond no filme 007 Contra o Satânico Dr. No em 1962, que inauguraria a mais bem sucedida e longeva série cinematográfica, que em 2012 completou 50 anos, e da qual Connery fez seis filmes oficiais, marcando o personagem de maneira definitiva.\n[…]\nNos últimos anos, após o fracasso comercial e de crítica de seu último filme, The League of Extraordinary Gentlemen (A Liga Extraordinária) Connery manteve-se afastado do cinema, em parte por sua decepção com o sistema de Hollywood, bem como por sua alegada declaração de que se concentra em escrever um livro sobre sua vida.\n[…]\nConnery era membro do Partido Nacional Escocês (SNP), um partido político de centro-esquerda que fazia campanha pela independência da Escócia do Reino Unido e apoiava o partido financeiramente e por meio de aparições pessoais. Seu financiamento do SNP cessou em 2001, quando o Parlamento do Reino Unido aprovou uma legislação que proibia o financiamento externo de atividades políticas no Reino Unido.\n[…]\nNa corrida para o referendo da independência escocesa de 2014, o irmão de Connery, Neil, disse que Connery não viria à Escócia para reunir partidários da independência, já que seu status de exílio fiscal limitava muito o número de dias que ele poderia passar no país.\n[…]\n«Sean Connery Online»\n[…]\nSean Connery no IMDb\n[…]\n«Sean Connery». no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "A Bela e a Fera (filme de 1991)",
      "descricao": "Animação da Disney de 1991 sobre Bela, uma jovem que vive no castelo de uma fera enfeitiçada."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas animações foi a primeira a ser indicada ao Oscar de melhor filme?",
    "resposta": "A Bela e a Fera",
    "distratores": [
      "Branca de Neve",
      "O Rei Leão",
      "Aladdin"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)",
        "situacao": "ok",
        "texto": "Beauty and the Beast is a 1991 American animated musical romantic fantasy film directed by Gary Trousdale and Kirk Wise, written by Linda Woolverton, and based on the French fairy tale \"Beauty and the Beast\". Produced by Walt Disney Feature Animation, the film stars Paige O'Hara, Robby Benson, Richard White, Jerry Orbach, David Ogden Stiers, Angela Lansbury, Bradley Michael Pierce, Rex Everhart, J\n[…]\nGene Siskel declared it \"one of the year's most entertaining films\" and also believed Beauty and the Beast would revive the movie musical, a genre he said had been in decline for the previous 20 years. On their Siskel and Ebert show, both he and Ebert declared the film a \"legitimate contender for Oscar consideration as Best Picture of the Year\". Meanwhile, John Hartl of The Seattle Times praised the animators and voice actors for making audiences care about their characters.\n[…]\nJournalist and filmmaker Bilge Ebiri identifies Beauty and the Beast, particularly its unfinished screening at the 1991 New York Film Festival, as a turning point in shifting the public stigma that had dismissed animated films as mere children's entertainment for decades. This event, he argues, helped critics and audiences recognize the complexity, artistry, and decision-making involved in animation, paving the way for the medium's acceptance as legitimate cinema.\n[…]\nAccording to an article in the Houston Chronicle, \"The catalyst for Disney's braving the stage was an article by The New York Times theater critic Frank Rich that praised Beauty and the Beast as 1991's best musical. Theatre Under The Stars (TUTS) executive director Frank Young had been trying to get Disney interested in a stage version of Beauty about the same time Eisner and Katzenberg were mulling over Rich's column.\n[…]\nBeauty and the Beast at the AFI Catalog of Feature Films\n[…]\nBeauty and the Beast at the TCM Movie Database (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Beauty_and_the_Beast_%28filme_de_1991%29",
        "situacao": "ok",
        "texto": "Beauty and the Beast (bra: A Bela e a Fera; prt: A Bela e o Monstro) é um filme de animação estadunidense de 1991 dos gêneros musical e fantasia romântica, produzido pela Walt Disney Feature Animation, sendo o 30º clássico da Disney, e distribuído pela Walt Disney Pictures. É baseado no conto de fadas de mesmo nome de Jeanne-Marie Le Prince de Beaumont e ideias do filme francês de 1946 de Jean Coc\n[…]\nBeauty and the Beast foi aclamado pela crítica especializada, ganhando o Globo de Ouro de Melhor Filme - Musical ou Comédia além de se tornar o primeiro filme de animação da história a ser indicado para o Oscar de Melhor Filme; ganhou o Óscar de Melhor Trilha Sonora e Melhor Canção Original por sua canção-título.\n[…]\nAlém disso, o CAPS permitiu uma combinação mais fácil de arte desenhada à mão com imagens geradas por computador, que antes tinham que ser plotadas em papel de animação e depois xerocadas e pintadas tradicionalmente. Essa técnica foi usada de forma significativa durante a sequência da valsa \"Beauty and the Beast\", na qual Bela e a Fera dançam em um salão de baile gerado por computador enquanto a câmera gira ao redor deles em um espaço 3D simulado.\n[…]\nOutras canções incluíam \"Be Our Guest\", cantada (em sua versão original) para Maurice pelos objetos quando ele se torna o primeiro visitante a comer no castelo em uma década, \"Gaston\", um solo para o vilão arrogante e seu ajudante desajeitado, \"Human Again\", uma canção que descreve o amor crescente de Bela e Fera a partir da perspectiva dos objetos, a balada de amor \"Beauty and the Beast (Tale as Old as Time)\" e o clímax \"The Mob Song\".\n[…]\nEnquanto A Pequena Sereia foi a primeira animação da história a ser indicada para o Globo de Ouro de Melhor Filme - Musical ou Comédia, Beauty and the Beast foi a primeira a vencê-lo. Este feito foi repetido mais tarde por O Rei Leão e Toy Story 2.\n[…]\nBela – indicada (na lista de Heróis)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Ainda Estou Aqui",
      "descricao": "Filme brasileiro de 2024 dirigido por Walter Salles, sobre a família Paiva durante a ditadura militar."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Orfeu Negro, rodado no Rio, levou o Oscar de filme estrangeiro representando a França. Qual foi o primeiro filme do Brasil a vencer essa categoria?",
    "resposta": "Ainda Estou Aqui",
    "fonte": [
      "https://en.wikipedia.org/wiki/I%27m_Still_Here_(2024_film)",
      "https://en.wikipedia.org/wiki/Black_Orpheus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/I%27m_Still_Here_(2024_film)",
        "situacao": "ok",
        "texto": "I'm Still Here (Portuguese: Ainda Estou Aqui ; Brazilian Portuguese: [aˈĩdɐ isˈtow aˈki]) is a 2024 political biographical drama film directed by Walter Salles from a screenplay by Murilo Hauser and Heitor Lorega, based on Marcelo Rubens Paiva's 2015 memoir of the same name.\n[…]\nThe screenplay is by Murilo Hauser and Heitor Lorega. It is adapted from the memoir Ainda Estou Aqui by Marcelo Rubens Paiva, Eunice's son. Hauser also co-wrote the screenplay for Karim Aïnouz's The Invisible Life of Eurídice Gusmão (2019), based on Martha Batalha's novel of the same name.\n[…]\nTo qualify for the Best International Feature Film category at the 97th Academy Awards, the film was given a limited theatrical run in the Brazilian city of Salvador from 19 to 25 September 2024, followed by a nationwide release on 7 November 2024 by Sony Pictures Releasing. I'm Still Here was released in France on 15 January 2025 by StudioCanal.\n[…]\nIt is a performance that should catapult her into the awards race, 25 years after her mother Fernanda Montenegro was Oscar-nominated for Salles' breakthrough feature, Central Station\". David Rooney in The Hollywood Reporter highlighted the relationship between Montenegro and Torres, writing, \"What makes the connection even more poignant is that she appears as the elderly, infirm version of the protagonist\". He called I'm Still Here \"a gripping, profoundly touching film with a deep well of pathos.\n[…]\nEmilia Pérez was considered a front-runner, but controversies around Karla Sofía Gascón and an attempt to smear I'm Still Here's campaign led most pundits to agree it ceased France's chances to win the category after more than thirty years.\n[…]\nAinda Estou Aqui\n[…]\nI'm Still Here at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Black_Orpheus",
        "situacao": "ok",
        "texto": "Black Orpheus (Portuguese: Orfeu Negro [ɔhˈfew ˈnegɾu]) is a 1959 romantic tragedy film directed by French filmmaker Marcel Camus and starring Marpessa Dawn and Breno Mello. It is based on the play Orfeu da Conceição by Vinicius de Moraes, which set the Greek legend of Orpheus and Eurydice in a contemporary favela in Rio de Janeiro during Carnaval. The film was an international co-production among\n[…]\nWhen Serafina's sailor boyfriend Chico shows up, Orfeu offers to let Eurydice sleep in his home, while he takes the hammock outside. Eurydice invites him to her bed, and they have sex.\n[…]\nOrfeu wanders in mourning. He retrieves Eurydice's body from the city morgue and carries her in his arms across town and up the hill toward his home, where his shack is burning. A vengeful Mira flings a stone that hits him in the head and knocks him over a cliff to his death, with Eurydice still in his arms.\n[…]\nTwo children, Benedito and Zeca – who have followed Orfeu throughout the film – believe Orfeu's tale that his guitar playing causes the sun to rise every morning. After Orfeu's death, Benedito insists that Zeca pick up the guitar and play so that the sun will rise. Zeca plays, and the sun comes up. A little girl appears, gives Zeca a single flower, and the three children dance.\n[…]\nBreno Mello as Orfeu\n[…]\nBreno Mello was a soccer player with no acting experience at the time he was cast as Orfeu. Mello was walking on the street in Rio de Janeiro when director Marcel Camus stopped him and asked if he would like to be in a film.\n[…]\nHowever, the film has been criticized, especially in Brazil. Vinicius de Moraes, author of the 1956 play Orfeu da Conceição upon which the film was based, was outraged and left the theater in the middle of the screening.\n[…]\nOrfeu, a 1999 film adapted from the same source material"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ainda_Estou_Aqui_%28filme_de_2024%29",
        "situacao": "ok",
        "texto": "Ainda Estou Aqui é um filme brasileiro de 2024, do gênero drama biográfico, dirigido por Walter Salles e estrelado por Fernanda Torres e Fernanda Montenegro como Eunice Paiva em diferentes fases da vida, além de Selton Mello no papel de Rubens Paiva. O roteiro de Murilo Hauser e Heitor Lorega foi baseado na autobiografia homônima de 2015, escrita por Marcelo Rubens Paiva. O filme foi distribuído n\n[…]\nAo Oscar 2025, Ainda Estou Aqui recebeu três indicações: Melhor Atriz para Torres, Melhor Filme, sendo o primeiro filme brasileiro da história a concorrer nesta categoria, e venceu Melhor Filme Internacional, tornando-se o primeiro filme brasileiro a ganhar um Oscar. Em maio de 2026, foi incluído na lista da Associação Brasileira de Críticos de Cinema (Abraccine) dos 100 filmes brasileiros mais importantes de todos os tempos.\n[…]\nO Cinema Trindade registrou 12 sessões com ingressos esgotados do primeiro fim de semana de Ainda Estou Aqui, algo inédito na história daquele cinema. Ou seja, o filme superou todas as expectativas e estabeleceu novos recordes. O proprietário do tradicional cinema disse à imprensa que nunca havia testemunhado nada parecido naquele espaço.\n[…]\nEm seu primeiro fim de semana nas bilheterias do Reino Unido e da Irlanda, Ainda Estou Aqui arrecadou mais de US$600.000, tornando-se na ocasião, a maior estreia de um filme de língua estrangeira do ano e a maior estreia latino-americana de todos os tempos, ultrapassando Diários de Motocicleta (2004), também dirigido por Salles.\n[…]\ne é uma atuação que deve catapultá-la para a corrida pelos prêmios, 25 anos depois de sua mãe, Fernanda Montenegro, ter sido indicada ao Oscar pelo filme de sucesso de Salles Central do Brasil\". Donald Clarke, do The Irish Times, destacou que \"o que faz Ainda Estou Aqui ganhar vida é a performance impecável de Torres como a força estabilizadora na volta de uma família à normalidade comprometida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "De Volta para o Futuro Parte III",
      "descricao": "Filme de 1990 dirigido por Robert Zemeckis, terceiro da trilogia De Volta para o Futuro."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na trilogia De Volta para o Futuro, qual dos filmes leva Marty e o Doutor Brown ao Velho Oeste americano?",
    "resposta": "A Parte Três, de 1990",
    "fonte": [
      "https://en.wikipedia.org/wiki/Back_to_the_Future_Part_III"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Back_to_the_Future_Part_III",
        "situacao": "ok",
        "texto": "Back to the Future Part III is a 1990 American science fiction Western film directed by Robert Zemeckis and starring Michael J. Fox, Christopher Lloyd, Mary Steenburgen, Thomas F. Wilson, and Lea Thompson. It is the sequel to Back to the Future Part II (1989) and the third installment of the Back to the Future trilogy.\n[…]\nBack to the Future Part III was released in the United States on May 25, 1990, six months after the previous installment, and grossed $245 million worldwide during its initial run, making it the sixth-highest-grossing film of 1990. The film received a positive response from critics, who noted it as an improvement over Part II.\n[…]\nThe shooting of the Back to the Future sequels, which were shot back-to-back throughout 1989, reunited much of the crew of the original. The films were shot over the course of eleven months, save for a three-week hiatus between filming of Parts II and III, and concluded in January 1990. The most grueling part was editing Part II while filming Part III, and Zemeckis bore the brunt of the process over a three-week period.\n[…]\nAlan Silvestri returned to compose the score for Back to the Future Part III, continuing his longtime collaboration with Zemeckis. Rather than dictate how the music should sound, Zemeckis directed Silvestri as he would an actor, seeking to evoke emotion and treating every piece of music like a character. The musicians of the Old West-style band in the film were played by American rock band ZZ Top.\n[…]\nOn November 8, 1990, MCA/Universal Home Video released Back to the Future Part III on VHS and on December 17, 2002, on DVD. It debuted on Blu-ray in 2010 for the film's 20th anniversary, followed by a second Blu-ray remaster in 2015 for the film's 25th anniversary and a 4K Blu-ray remaster in 2020 for the film's 30th anniversary."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Back_to_the_Future_Part_III",
        "situacao": "ok",
        "texto": "Back to the Future Part III (no Brasil, De Volta para o Futuro 3; em Portugal e nos PALOP, Regresso ao Futuro III) é um filme estadunidense de ficção científica lançado em 1990, sendo a terceira e última parte da trilogia de filmes Back to the Future. Dirigido por Robert Zemeckis, o filme contou com Michael J. Fox, Christopher Lloyd, Mary Steenburgen, Thomas F. Wilson e Lea Thompson em seu elenco \n[…]\nAs origens do tema ocidental de Back to the Future Part III remontam a produção do primeiro filme da trilogia. Durante as filmagens da primeira parte, o diretor Robert Zemeckis perguntou a Michael J. Fox qual período de tempo ele gostaria de ver; Fox respondeu que queria visitar o Velho Oeste e conhecer caubóis. Zemeckis e o escritor-produtor Bob Gale ficaram entusiasmados com a ideia, mas a seguraram até a produção da Part III.\n[…]\nAs filmagens de Back to the Future Part II, que foram gravadas ao longo de 1989, reuniram grande parte do elenco original. Os filmes foram rodados ao longo de onze meses, exceto por um hiato de três semanas entre as filmagens das partes II e III.\n[…]\nA parte mais exaustiva foi editar a Part II enquanto se filmava a Part III e Zemeckis suportou o peso deste processo durante um período de três semanas; enquanto Zemeckis estava filmando a maioria das sequências do trem, Gale estava em Los Angeles supervisionando o final das rodagens da Part II.\n[…]\nEm 17 de dezembro de 2002, a Universal lançou Back to the Future Part III em VHS como parte de um box que conteve os três filmes da trilogia.\n[…]\nEm 1990, o filme ganhou um Prêmio Saturno de Melhor Música pelo trabalho de Alan Silvestri e um prêmio de Melhor Ator Coadjuvante pela atuação de Thomas F. Wilson. Em 2003, o filme recebeu um prêmio AOL Movies DVD Premiere de Melhor Edição Especial do Ano, um prêmio baseado em uma votação on-line de consumidores.\n[…]\nDe Volta Para o Futuro 3 no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Espantalho (O Mágico de Oz)",
      "descricao": "Espantalho de palha que acompanha Dorothy na estrada de tijolos amarelos em O Mágico de Oz."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre os companheiros de Dorothy em O Mágico de Oz, qual deles quer pedir ao mágico um cérebro?",
    "resposta": "Espantalho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Scarecrow_(Oz)",
      "https://en.wikipedia.org/wiki/The_Wizard_of_Oz_(1939_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scarecrow_(Oz)",
        "situacao": "ok",
        "texto": "The Scarecrow is a character in the Land of Oz created by American author L. Frank Baum and illustrator W. W. Denslow. In his first appearance, the Scarecrow reveals that he lacks a brain and desires above all else to have one. In reality, he is only two days old and merely naïve. Throughout the course of the novel, he proves to have the brains he seeks and is later recognized as \"the wisest man i\n[…]\nScarecrow appears in Lost In Oz, voiced by Stephen Stanton.\n[…]\nThe Scarecrow appeared in the animated film Legends of Oz: Dorothy's Return (which is based on Dorothy of Oz), voiced by Dan Aykroyd.\n[…]\nA character inspired by the Scarecrow appears in Alan Moore's Lost Girls. In the work, a young farm boy becomes Dorothy Gale's first sex partner. However, she soon grows bored of him because of his lack of intelligence and imagination, comparing it to having sex with something you use to scare the crows. The \"scarecrow\" tries to prove to Dorothy that he does have a brain and writes her a poem.\n[…]\nIn the 2014 Dorothy Must Die series by Danielle Paige that details a darker depiction of the Land of Oz, the Scarecrow and Dorothy's other companions have been corrupted by their gifts and Dorothy's use of magic. The Scarecrow has become a twisted 'mad scientist', performing various experiments on the animals to turn them into spies or warriors for Dorothy's army, as well as extracting their brains to increase his own.\n[…]\nIn the pages of Shazam!, Scarecrow is a resident of the location of the Magic land called Wozenderlands. He and the Munchkins find some of the Shazam Family in their part of Wozenderlands. When Billy Batson, Mary Bromfield, and C.C. Batson are teleported to Wozenderlands, they are taken by Scarecrow and the Munchkins to meet with Dorothy Gale. Scarecrow stated that Dorothy Gale and Alice united the Land of Oz and Wonderland to save them from the threats that came from the Monsterlands."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Wizard_of_Oz_(1939_film)",
        "situacao": "ok",
        "texto": "The Wizard of Oz is a 1939 American musical fantasy film produced by Metro-Goldwyn-Mayer. Based on the 1900 novel The Wonderful Wizard of Oz by L. Frank Baum, it was primarily directed by Victor Fleming, who left production to take over the troubled Gone with the Wind. The screenplay is credited to Noel Langley, Florence Ryerson, and Edgar Allan Woolf, but includes contributions from other writers\n[…]\nAnother scene, which was removed before final script approval and never filmed, was an epilogue scene in Kansas after Dorothy's return. Hunk (the Kansan counterpart to the Scarecrow) is leaving for an agricultural college and extracts a promise from Dorothy to write to him. The scene implies that romance will eventually develop between the two, which also may have been intended as an explanation for Dorothy's partiality for the Scarecrow over her other two companions.\n[…]\nAccording to Nugent, \"Judy Garland's Dorothy is a pert and fresh-faced miss with the wonder-lit eyes of a believer in fairy tales, but the Baum fantasy is at its best when the Scarecrow, the Tin Man, and the Lion are on the move.\"\n[…]\n\"There's no place like home.\" (Dorothy) – No. 23\n[…]\nIn 2014, independent film company Clarius Entertainment released a big-budget animated musical film, Legends of Oz: Dorothy's Return, which follows Dorothy's second trip to Oz. The film fared poorly at the box office and was received negatively by critics, largely for its plot and unmemorable musical numbers.\n[…]\nThe 2024 marketing campaign for season 22 of American Idol is directly themed after this film, complete with a commercial featuring Ryan Seacrest and the judges Katy Perry, Lionel Richie and Luke Bryan dressed as Tin Man, Dorothy, Cowardly Lion and Scarecrow following the \"Golden Ticket Road\" to Hollywood. This was to reflect the show's plans to visit the judges' hometowns throughout the season.\n[…]\nFriend of Dorothy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Espantalho_%28Oz%29",
        "situacao": "ok",
        "texto": "O Espantalho é um personagem fictício na Terra de Oz criado pelo escritor americano L. Frank Baum, e ilustrador William Wallace Denslow. Em sua primeira aparição, o Espantalho revela que ele não tem um cérebro e deseja acima de tudo ter um. Na realidade, ele tem apenas dois dias de vida e apenas é ignorante.\n[…]\nDurante todo o curso do romance, ele demonstra que ele já tem o cérebro que ele procura e depois é reconhecido como \"o homem mais sábio de todos Oz\", embora ele continua a creditar o Mágico como o mais sábio. Ele é, no entanto, sábio o suficiente para conhecer seus próprios limites e muito feliz em entregar o governo de Oz, passado a ele a Princesa Ozma, para se tornar um de seus assessores de confiança, embora ele normalmente gasta mais tempo jogando jogos de aconselhamento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Sociedade do Anel",
      "descricao": "Grupo de nove companheiros formado para destruir o Um Anel em O Senhor dos Anéis, liderado por Frodo."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Sociedade do Anel, o grupo que acompanha Frodo nos filmes de Peter Jackson, quem é o anão?",
    "resposta": "Gimli",
    "distratores": [
      "Legolas",
      "Boromir",
      "Aragorn"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gimli_(Middle-earth)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gimli_(Middle-earth)",
        "situacao": "ok",
        "texto": "Gimli is a fictional character in J. R. R. Tolkien's Middle-earth, appearing in The Lord of the Rings. A dwarf warrior, he is the son of Glóin, a member of Thorin's company in Tolkien's earlier book The Hobbit. He represents the race of Dwarves as a member of the Fellowship of the Ring. As such, he is one of the primary characters in the story.\n[…]\nGimli was voiced by David Buck in Ralph Bakshi's 1978 animated version of The Lord of the Rings. Gimli does not appear in Rankin/Bass's 1980 animated version of The Return of the King. In Peter Jackson's film trilogy, Gimli is played by the Welsh actor John Rhys-Davies, using a Scottish accent.\n[…]\nGimli refuses to be blindfolded, risking a conflict, so Aragorn has the entire Fellowship blindfolded.\n[…]\nIn Peter Jackson's film trilogy, Gimli is played by the Welsh actor John Rhys-Davies. Brian Sibley has asserted that Rhys-Davies used \"his distinctive Welsh-derived accent\" for the character. Several other sources state, however, that Rhys-Davies uses a Scottish accent; the Scottish The Press and Journal praises him for the \"convincing\" Scottish accent, calling his performance \"raspy, croaky, bearded and brilliant\".\n[…]\nRhys-Davies himself states on The Fellowship of the Ring extended version DVD that the accent was by intention Scottish, and that it had been his decision to use it. The New Zealand Herald quotes Rhys-Davies as saying of Gimli that \"There is a gritty sort of fierce belligerence, and in the end I thought an almost Glasgow Scottish accent would serve the character.\"\n[…]\nIn Peter Jackson's films, Gimli's prosaic and blunt style, contrasting with the refined Aragorn and Legolas, provides defusing comic relief, with much of the humour based on his height, along with his competitive, if friendly, feud with Legolas, where Gimli consistently finds himself out-achieved."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gimli_%28personagem%29",
        "situacao": "ok",
        "texto": "Gimli é um dos mais importantes personagens criados por J.R.R.Tolkien para a trilogia O Senhor dos Anéis.\n[…]\nEra um anão do povo de Durin que se habilitou para acompanhar Frodo Bolseiro na Sociedade do Anel, que tinha por intuito destruir o Um Anel. Representa também uma contradição entre as raças dos anões e dos elfos. Esses dois povos geralmente não se davam bem, mas Gimli foi o melhor amigo do elfo Legolas e criou um amor muito grande pela Rainha élfica Galadriel, e isso contribuiu para a restauração da amizade entre ambos os povos.\n[…]\nGimli aparece primeiramente em A Sociedade do Anel (A Irmandade do Anel em Portugal), no Conselho de Elrond em Valfenda, onde foi com seu pai para levar notícias de Erebor, sua morada. Lá ele descobre que o sobrinho de Bilbo, Frodo, possui o Um Anel, um Anel do Poder forjado pelo Senhor do Escuro Sauron. No Conselho é decidido que o Anel deverá ser destruído onde foi forjado: na Montanha da Perdição.\n[…]\nFrodo se habilitou para a tarefa e oito companheiros foram junto com ele, incluindo Gimli com o machado como a principal arma.\n[…]\nGimli ficou extremamente tocado pela beleza e compreensão de Galadriel, o que mudou muito sua opinião sobre os elfos. Numa das partes mais famosas do livro, que só aparece na versão estendida do primeiro filme de Peter Jackson, Galadriel entrega os presentes aos membros da Sociedade, mas fica indecisa quanto ao que dar a um Anão. Ao invés de tesouros, Gimli pediu um único fio de cabelo de Galadriel.\n[…]\nNa adaptação de Peter Jackson, o papel de Gimli coube a John Rhys-Davies.\n[…]\nGimli em Tolkien Gateway\n[…]\nGimli em The Thain's Book",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Trilogia das Cores",
      "descricao": "Trilogia de filmes de Krzysztof Kieślowski, de 1993 e 1994, inspirada nas cores da bandeira francesa: Azul, Branco e Vermelho."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Cada filme da Trilogia das Cores, de Kieślowski, liga uma cor da bandeira francesa a um ideal da Revolução. Qual ideal cabe ao vermelho?",
    "resposta": "Fraternidade",
    "distratores": [
      "Liberdade",
      "Igualdade",
      "Solidariedade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Three_Colours_trilogy",
      "https://en.wikipedia.org/wiki/Three_Colours:_Red"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Three_Colours_trilogy",
        "situacao": "ok",
        "texto": "The Three Colours trilogy (French: Trois couleurs, Polish: Trzy kolory) is the collective title of three psychological drama films directed by Krzysztof Kieślowski, co-written by Kieślowski and Krzysztof Piesiewicz (with story consultants Agnieszka Holland and Sławomir Idziak), produced by Marin Karmitz and composed by Zbigniew Preisner. The trilogy consists of Three Colours: Blue (1993), Three Co\n[…]\nBlue, white, and red are the colours of the French flag in hoist-to-fly order, and the story of each film is loosely based on one of the three political ideals in the motto of the French Republic: liberty, equality, fraternity. As with the treatment of the Ten Commandments in Dekalog, the illustration of these principles is often ambiguous and ironic.\n[…]\nAs Kieślowski noted in an interview with an Oxford University student newspaper: \"The words [liberté, egalité, fraternité] are French because the money [to fund the films] is French. If the money had been of a different nationality, we would have titled the films differently, or they might have had a different cultural connotation. But the films would probably have been the same\".\n[…]\nAnother recurring image related to the spirit of the film is that of elderly people recycling bottles: In Blue, an old woman in Paris is recycling bottles and Julie does not notice her (in the spirit of liberty); in White, an old man also in Paris is trying to recycle a bottle but cannot reach the container and Karol looks at him with a sinister grin on his face (in the spirit of equality); and in Red, an old woman cannot reach the hole of the container and Valentine helps her (in the spirit of fraternity).\n[…]\nThree Colours: Red\n[…]\nMusic for all three parts of the trilogy was composed by Zbigniew Preisner and performed by Silesian Philharmonic choir along with Sinfonia Varsovia.\n[…]\nThree Colours: Blue at IMDb\n[…]\nThree Colours: White at IMDb\n[…]\nThree Colours: Red at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Three_Colours:_Red",
        "situacao": "ok",
        "texto": "Three Colours: Red (French: Trois couleurs: Rouge, Polish: Trzy kolory: Czerwony) is a 1994 romantic psychological drama mystery art film co-written, produced and directed by Polish filmmaker Krzysztof Kieślowski. It is the final installment of the Three Colours trilogy, which examines the French Revolutionary ideals; it is preceded by Blue and then by White.\n[…]\nKieślowski had announced that this would be his final film, planning to retire claiming to be through with filmmaking; he would die suddenly less than two years later. Red is about fraternity, which it examines by showing characters whose lives gradually become closely interconnected, with bonds forming between two characters who appear to have little in common.\n[…]\nThe recycling bin: A recurring scene of an elderly person trying to put a bottle in a recycling bin appears in all three films, but with different outcomes. In Blue, Julie does not see her. In White, Karol ignores her. In Red, Valentine finally pushes the bottle into the bin. This action has been described as 'act of kindness that is the climax of the entire trilogy and the gesture that saves the world.\n[…]\n2nd - Roger Ebert, Chicago Sun-Times Ebert included the entire Three Colors Trilogy in his list; later, when he wrote about it a separate essay for \"Great Movies\" section, he noted that Red is \"the best film among equals\".\n[…]\nBest Director – Krzysztof Kieślowski\n[…]\nBest Original Screenplay or Adaptation – Krzysztof Kieślowski and Krzysztof Piesiewicz\n[…]\nThree Colours: Red at IMDb\n[…]\nThree Colours: Red at Box Office Mojo\n[…]\nThree Colours: Red at the TCM Movie Database (archived)\n[…]\nThree Colors: A Hymn to European Cinema – an essay by Colin MacCabe at The Criterion Collection\n[…]\nRed: A Fraternity of Strangers – an essay by Georgina Evans at The Criterion Collection\n[…]\nOnline Exhibition: On Location - Revisiting Trois Couleurs: Rouge at Roman's Lab"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trilogia_das_Cores",
        "situacao": "ok",
        "texto": "Trilogia das Cores é uma trilogia de filmes do cineasta polonês Krzysztof Kieślowski:\n[…]\nTrois couleurs: Bleu (no Brasil: A liberdade é azul, em Portugal: Três Cores: Azul) de 1993\n[…]\nTrois couleurs: Blanc (no Brasil: A igualdade é branca, em Portugal: Três Cores: Branco) de 1994\n[…]\nTrois couleurs: Rouge (no Brasil A fraternidade é vermelha, em Portugal: Três Cores: Vermelho) de 1994\n[…]\nA trilogia como um todo encabeçou a lista dos melhores filmes de 1994 do The San Diego Union-Tribune, ficou em terceiro lugar na lista de fim de ano do crítico Glenn Lovell, do San Jose Mercury News, em décimo na lista de Michael Mills, do The Palm Beach Post, e também integrou as listas não ordenadas de Dennis King, do Tulsa World, e dos críticos Eleanor Ringel e Steve Murray, do The Atlanta Journal-Constitution.\n[…]\nRoger Ebert classificou a trilogia como um todo em 5.º lugar em sua lista dos \"Melhores filmes dos anos 1990\" e a incluiu em sua lista \"Great Movies\". A revista Empire a classificou nas posições 11 e 14 em suas listas \"As 33 Maiores Trilogias do Cinema\" e \"Os 100 Melhores Filmes do Cinema Mundial\", respectivamente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Trilogia dos Dólares",
      "descricao": "Trilogia de faroestes de Sergio Leone com Clint Eastwood, lançada entre 1964 e 1966."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A trilogia de Sergio Leone com Clint Eastwood começa com Por um Punhado de Dólares. Que filme a encerra?",
    "resposta": "Três Homens em Conflito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dollars_Trilogy",
      "https://en.wikipedia.org/wiki/The_Good,_the_Bad_and_the_Ugly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dollars_Trilogy",
        "situacao": "ok",
        "texto": "The Dollars Trilogy (Italian: Trilogia del dollaro), also known as the Man with No Name Trilogy (Italian: Trilogia dell'Uomo senza nome), is an Italian film series consisting of three spaghetti Western films directed by Sergio Leone. The films are titled A Fistful of Dollars (1964), For a Few Dollars More (1965) and The Good, the Bad and the Ugly (1966). Their English versions were distributed by \n[…]\nThe three films came to be considered a trilogy following the exploits of the same so-called \"Man with No Name\", portrayed by Clint Eastwood. The \"Man with No Name\" concept was invented by the American distributor United Artists, looking for a strong angle to sell the films as a trilogy. As such, the three films are connected thematically rather than through a continuous narrative and there is little continuity between the three films.\n[…]\nThe actors who appear in all three films are Eastwood, Mario Brega, Aldo Sambrell, Benito Stefanelli and Lorenzo Robledo. Four actors appear twice in the trilogy, playing different characters: Lee Van Cleef, Gian Maria Volonté, Luigi Pistilli, and Joseph Egger.\n[…]\nThe Dollars Trilogy spawned a series of spin-off books focused on the Man with No Name, dubbed the Dollars series due to the common theme in their titles:\n[…]\nA Dollar to Die For (1967) by Brian Fox\n[…]\nA Coffin Full of Dollars (1971) by Joe Millard\n[…]\nThe Devil's Dollar Sign (1972) by Joe Millard\n[…]\nBlood For a Dirty Dollar (1973) by Joe Millard\n[…]\nThe Million-Dollar Bloodhunt (1973) by Joe Millard\n[…]\nThe films had various VHS releases in Italy and in other countries, including some editions boxed together with Leone's other spaghetti western films (Once Upon a Time in the West and Duck, You Sucker!).\n[…]\nThe 1999 DVD, plus the 2010 and 2014 Blu-ray box set releases by MGM (distributed by 20th Century Fox Home Entertainment), make specific reference to the set of films as \"The Man with No Name Trilogy\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Good,_the_Bad_and_the_Ugly",
        "situacao": "ok",
        "texto": "The Good, the Bad and the Ugly (Italian: Il buono, il brutto, il cattivo, lit. 'The good, the ugly, the bad') is a 1966 Italian epic spaghetti Western film directed by Sergio Leone and starring Clint Eastwood as \"the Good\", Lee Van Cleef as \"the Bad\", and Eli Wallach as \"the Ugly\". Its screenplay was written by Age & Scarpelli, Luciano Vincenzoni, and Leone, based on a story by Vincenzoni and Leon\n[…]\nSet against the backdrop of the American Civil War, the story follows three gunslingers who form shifting alliances and betrayals in their search for a buried cache of Confederate gold amid the chaos of the conflict. The film marked Leone's third collaboration with Eastwood and his second with Van Cleef.\n[…]\nAfter Leone offered Clint Eastwood a role in his next movie, traveling to California to persuade him, Eastwood agreed to make the film, playing Blondie, upon being paid $250,000 and receiving 10 percent of the profits from the North American markets—a deal with which Leone was not happy.\n[…]\nFor the role of Angel Eyes, Leone originally wanted Enrico Maria Salerno (who had dubbed Eastwood's voice for the Italian versions of the Dollars Trilogy films) or Charles Bronson, but the latter was already committed to playing in The Dirty Dozen (1967). Leone eventually wished to work with Lee Van Cleef again, saying, \"I said to myself that Van Cleef had first played a romantic character in For a Few Dollars More.\n[…]\nBut it was Leone who defined the look and attitude of the genre with his first western and the two that soon were to follow: For a Few Dollars More and The Good, the Bad and the Ugly. Together these films are called the Dollars Trilogy. Leone's portrayal of the west, in the latter, was not concerned with ideas of the frontier or good vs. evil but rather interested in how the world is unmistakably more complicated than that, and how the western world is one of kill or be killed."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trilogia_dos_d%C3%B3lares",
        "situacao": "ok",
        "texto": "A Trilogia dos Dólares (em italiano:  Trilogia del dollaro), também conhecido como Trilogia do Homem Sem Nome, é uma série de filmes composta por três filmes western spaghetti dirigidos por Sergio Leone. Os filmes são intitulados Por um Punhado de Dólares (1964), Por uns Dólares a Mais (1965) e Três Homens em Conflito (1966). Eles foram distribuídos pela United Artists.\n[…]\nEmbora não fosse a intenção de Leone, os três filmes passaram a ser considerados uma trilogia, seguindo as façanhas do mesmo chamado \"Homem Sem Nome\" (retratado por Clint Eastwood, vestindo as mesmas roupas e agindo com os mesmos maneirismos). O conceito \"Homem Sem Nome\" foi inventado pela distribuidora americana United Artists, procurando um forte ângulo para vender filmes como uma trilogia.\n[…]\nO personagem de Eastwood realmente tem um nome (embora um apelido) e um diferente em cada filme: \"Joe\", \"Manco\" e \"Lourinho\", respectivamente.\n[…]\nPor um Punhado de Dólares é um remake não oficial do filme de Akira Kurosawa de 1961, Yojimbo, estrelado por Toshiro Mifune, que resultou em uma ação bem-sucedida da Toho.\n[…]\nTrês Homens em Conflito é considerado uma prequela, uma vez que retrata o personagem de Eastwood adquirindo gradualmente a roupa que ele usa durante os dois primeiros filmes e porque ocorre durante a Guerra Civil Americana (1861-1865), enquanto os outros dois filmes apresentam armas de fogo comparativamente mais modernas e outros adereços.\n[…]\nOs únicos atores que aparecem nos três filmes além de Eastwood são Mario Brega, Aldo Sambrell, Benito Stefanelli e Lorenzo Robledo. Quatro outros atores aparecem duas vezes na trilogia, interpretando personagens diferentes: Lee Van Cleef, Gian Maria Volontè, Luigi Pistilli e Joseph Egger.\n[…]\nO compositor Ennio Morricone forneceu a partitura musical original para os três filmes, embora em Por um Punhado de Dólares tenha sido creditado como \"Dan Savio\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Os Incríveis",
      "descricao": "Animação da Pixar de 2004 sobre uma família de super-heróis obrigada a viver no anonimato."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na família de super-heróis da animação Os Incríveis, da Pixar, qual dos filhos corre em supervelocidade?",
    "resposta": "Flecha",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Incredibles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Incredibles",
        "situacao": "ok",
        "texto": "The Incredibles is a 2004 American animated superhero film written and directed by Brad Bird. Produced by Pixar Animation Studios for Walt Disney Pictures, it stars the voices of Craig T. Nelson, Holly Hunter, Sarah Vowell, Spencer Fox, Jason Lee, Samuel L. Jackson, and Elizabeth Peña. Set in a retro-futuristic version of the 1960s, the film follows Bob (Nelson) and Helen Parr (Hunter), a superher\n[…]\nJason Lee as Buddy Pine / IncrediBoy / Syndrome, Mr. Incredible's obsessed fan turned supervillain who uses his scientific prowess to give himself enhanced abilities.\n[…]\nThe Incredibles has received several game adaptations: The Incredibles (2004), The Incredibles: When Danger Calls (2004), and The Incredibles: Rise of the Underminer (2005). Kinect Rush: A Disney–Pixar Adventure (2012) features characters and worlds from five Pixar films, including The Incredibles. Disney Infinity (2013) includes The Incredibles playset featuring the film's playable characters. Lego The Incredibles was released in June 2018.\n[…]\nIn January 2026, The Incredibles was announced as one of the 25 films selected for preservation in the National Film Registry by the United States Library of Congress among the 2025 inductees for being considered, \"culturally, historically, or aesthetically significant\". It was the third feature film from Pixar to be inducted (after WALL-E in 2021 and Toy Story in 2005).\n[…]\nIn July 2024, during Disney's biennial D23 Expo, Pixar CCO Pete Docter announced that a third film, titled Incredibles 3, was in development and that Bird would return, although the extent of his involvement was not disclosed at the time. In June 2025, it was announced that Peter Sohn would take over as director, citing Bird's commitments to Skydance Animation's Ray Gunn (2026), a long-gestating passion project. Bird, however, remains attached to the project as a writer and producer.\n[…]\nThe Incredibles at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Incredibles",
        "situacao": "ok",
        "texto": "The Incredibles (bra: Os Incríveis; prt: The Incredibles: Os Super-Heróis) é um filme estadunidense de 2004 produzido pela Pixar Animation Studios e distribuído pela Walt Disney Pictures, sendo o sexto longa animado da Pixar. Escrito e dirigido por Brad Bird, o filme conta com Craig T. Nelson, Holly Hunter, Sarah Vowell, Spencer Fox, Jason Lee, Samuel L. Jackson e Elizabeth Peña no elenco de voz.\n[…]\nAmbientado numa década de 60 retrofuturista, o filme segue Bob e Helen Parr, um casal de super-heróis, conhecidos como Sr. Incrível e Mulher Elástica, respectivamente, que escondem seus poderes de acordo com uma determinação do governo e tentam viver uma vida suburbana tranquila com seus três filhos; no entanto, o desejo de Bob de ajudar as pessoas leva toda a família a um confronto com um fã vingativo que se tornou inimigo.\n[…]\nO filme ganhou uma sequência, intitulada Incredibles 2, lançada em 2018.\n[…]\n\"Supers\" — seres humanos dotados de superpoderes — uma vez foram vistos como heróis, mas os danos colaterais de suas várias boas ações levaram o governo a criar um \"programa de realocação de Supers\", forçando os Supers a se encaixarem entre os civis, não usando mais seus superpoderes. Beto e Helena Pêra, que são Supers, se casaram e agora têm três filhos: Violeta, Flecha e o bebê Zezé, na cidade de Metroville.\n[…]\nMas então ela descobre que Violeta e Flecha estão juntos dentro do jato, deixando o bebê Zézé em casa com uma babá.\n[…]\nNo fim, a família se acerta, e é reconhecida pelo heroísmo em ter protegido as possíveis vítimas do grande robô. Flecha ganha a permissão de competir com seus colegas de escola, e com cuidado e atenção dos pais, fica em segundo lugar - para não dar bandeira. Na cena final, um inimigo aparece, e quando a tela volta para nossa família, todos os integrantes estão com suas máscaras colocadas, indicando que sempre que houver problemas, eles nos protegerão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Filme de nitrato",
      "descricao": "Película cinematográfica de base de nitrato de celulose, usada até os anos 1950 e altamente inflamável."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Até os anos cinquenta, a película de cinema era feita de um material tão inflamável que causou incêndios em salas e acervos. Qual era?",
    "resposta": "Nitrato de celulose",
    "distratores": [
      "Acetato de celulose",
      "Poliéster",
      "Celofane"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nitrate_film"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nitrate_film",
        "situacao": "ok",
        "texto": "Nitrocellulose (also known as cellulose nitrate, flash paper, flash cotton, guncotton, pyroxylin and flash string, depending on form) is a highly flammable compound formed by nitrating cellulose through exposure to a mixture of nitric acid and sulfuric acid.\n[…]\nIn 1914—the same year that Goodwin Film was awarded $5,000,000 from Kodak for patent infringement—nitrate film fires incinerated a significant portion of the United States' early cinematic history. In that year alone, five very destructive fires occurred at four major studios and a film-processing plant. Millions of feet of film burned on March 19 at the Eclair Moving Picture Company in Fort Lee, New Jersey.\n[…]\nThe use of volatile nitrocellulose film for motion pictures led many cinemas to fireproof their projection rooms with wall coverings made of asbestos. Those additions intended to prevent or at least delay the migration of flames beyond the projection areas. A training film for projectionists included footage of a controlled ignition of a reel of nitrate film, which continued to burn even when fully submerged in water. Once burning, it is extremely difficult to extinguish.\n[…]\nCinema fires caused by the ignition of nitrocellulose film stock commonly occurred as well. In Ireland in 1926, it was blamed for the Dromcolliher cinema tragedy in County Limerick in which 48 people died. Then in 1929 at the Glen Cinema in Paisley, Scotland, a film-related fire killed 69 children. Today, nitrate film projection is rare and normally highly regulated and requires extensive precautions, including extra health-and-safety training for projectionists.\n[…]\nThe BFI Southbank in London is the only cinema in the United Kingdom licensed to show Nitrate Film."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trinitrocelulose",
        "situacao": "ok",
        "texto": "Trinitrocelulose,  nitrocelulose, nitrato de celulose, ou algodão-pólvora é um composto obtido basicamente da trinitração da celulose (normalmente utiliza-se o algodão comum). É muito usado na fabricação de detonadores elétricos e seu aspecto assemelha-se muito ao algodão ou a um líquido gelatinoso ligeiramente amarelo ou incolor com odor a éter.\n[…]\nO termo trinitrocelulose é adequadamente empregado quando a nitração chega a atingir três grupos nitro para cada monômero de glicose da celulose, alcançando um conteúdo de nitrogênio de 9,13%.\n[…]\nTambém é utilizada como matéria prima na elaboração de pinturas, lacas, vernizes, tintas, seladores e outros produtos similares.\n[…]\nO nitrato de celulose foi utilizado como película cinematográfica até aos anos 50 do século XX. Por se tratar de um material altamente inflamável, provocou dezenas de incêndios em estúdios, armazéns e salas de cinema, o que levou a indústria cinematográfica a substituí-lo pelo acetato de celulose. Mais tarde, o acetato de celulose foi substituído pelo poliéster.\n[…]\nHenri Braconnot descobriu em 1832, que ácido nítrico, quando combinado com fibras de amido ou de madeira poderia produzir um material leve e explosivo, o qual chamou de xyloïdine. Poucos anos depois em 1838 um outro químico francês Théophile-Jules Pelouze usando papel e papelão do mesmo modo, obtendo um material parecido, chamado nitramidine. As duas substâncias eram altamente instáveis, não servindo como explosivos práticos.\n[…]\nObtém-se adicionando algodão oriundo a uma mistura de 3 para 1 de ácido sulfúrico concentrado mais ácido nítrico concentrado (esta mistura é chamada de \"mistura sulfonítrica\"), respectivamente, lavando-se com água destilada logo em seguida. O resultado é um algodão de mesmo aspecto, porém com uma consistência mais áspera, que possui uma inflamabilidade muito elevada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Wallace e Gromit",
      "descricao": "Dupla britânica de animação do estúdio Aardman, formada por um inventor distraído e seu cão."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O inventor Wallace e seu cão Gromit, do estúdio britânico Aardman, ganham vida em animação quadro a quadro com bonecos de que material?",
    "resposta": "Massa de modelar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wallace_%26_Gromit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wallace_%26_Gromit",
        "situacao": "ok",
        "texto": "Wallace & Gromit is a British claymation comedy franchise created by Nick Park and produced by Aardman Animations. The series centres on Wallace, a good-natured, eccentric, and cheese-loving bachelor inventor, and Gromit, his loyal and intelligent anthropomorphic dog. It consists of four short films, two feature-length films, and numerous spin-offs and TV adaptations. The first short film, A Grand\n[…]\nIn 2003, Aardman produced a cinematic commercial for the Renault Kangoo starring Wallace and Gromit. The commercial, entitled \"The Kangoo-matic\", played in front of several summer blockbusters in top British cinemas. Later Wallace & Gromit commercials were made for Jacob's Cream Crackers, energy supplier Npower and beverage PG Tips.\n[…]\nThe duo were used to promote a Harvey Nichols store that opened in Bristol (where Aardman is based) in 2008. The pictures show them, and Lady Tottington from Wallace & Gromit: The Curse of the Were-Rabbit, wearing designer clothes and items. They were used to prevent a Wensleydale cheese factory from shutting down because of financial difficulties after a member of staff came up with the idea of using Wallace and Gromit as mascots, as Wensleydale is one of Wallace's favourite cheeses.\n[…]\nOn 28 March 2009, The Science Museum in London opened an exhibition called \"Wallace & Gromit present a World of Cracking Ideas\". The family-orientated show, open until 1 November 2009, hoped to inspire children to be inventive. Wallace and Gromit were featured in many exhibition-exclusive videos, as well as one announcing the opening of the exhibition.\n[…]\nWallace and Gromit appeared in a one-minute special for the Diamond Jubilee of Elizabeth II called Jubilee Bunt-a-thon. In 2012, Wallace and Gromit featured on an advert saying \"Inventing For Britain\" which was part of a poster campaign to promote British trade and business abroad in the year they hosted the Olympics."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wallace_e_Gromit",
        "situacao": "ok",
        "texto": "Wallace e Gromit são dois personagens fictícios criados por Nick Park e os protagonistas de uma franquia britânica composta por quatro curta-metragens e um longa-metragem de animação produzidos pela Aardman Animations. Wallace, um atrapalhado inventor, é um fanático por queijo e seu companheiro, Gromit, é um cachorro antropomórfico inteligente. Wallace foi dublado pelo ator veterano Peter Sallis a\n[…]\nGromit é um personagem mudo, comunicando-se apenas por meio de expressões faciais e linguagem corporal. Os personagens são feitos de massinha modelada sobre armações de metal, e filmados com técnicas de stop motion e claymation.\n[…]\nDevido à sua popularidade, os personagens são considerados ícones internacionais da cultura britânica moderna e do próprio povo britânico. A BBC News os aponta como \"umas das estrelas mais conhecidas e amadas a sairem do Reino Unido\". O website inglês Icons afirmou que eles têm feito \"mais para melhorar a imagem dos ingleses mundo afora do que qualquer oficialmente nomeado embaixador\".\n[…]\nOs curtas As Calças Erradas (1993) e Tosa Completa (1994) ganharam o Oscar de Melhor Curta de Animação e o longa A Batalha dos Vegetais (2005) ganhou o Oscar de Melhor Filme de Animação.\n[…]\nEm outubro de 2005, um incêndio destruiu o galpão da Aardman Animations e quase todos os tesouros valiosos de animação de Wallace e Gromit, entre eles: os modelos e os cenários dos curtas. Os modelos e cenários originais (assim como as cópias) e os seus dois Oscar foram salvos do incêndio por estarem na oficina da Aardman Animations. Os modelos e cenários de A Batalha dos Vegetais também foram salvos por estarem em exposições fora do galpão da Aardman.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Divertida Mente",
      "descricao": "Animação da Pixar de 2015 sobre as emoções que comandam a mente da menina Riley."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Divertida Mente, da Pixar, Alegria, Tristeza, Raiva e Medo dividem a cabeça da menina Riley com qual quinta emoção?",
    "resposta": "Nojinho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Inside_Out_(2015_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inside_Out_(2015_film)",
        "situacao": "ok",
        "texto": "Inside Out is a 2015 American animated coming-of-age film directed by Pete Docter who co-wrote it with Meg LeFauve and Josh Cooley. Produced by Pixar Animation Studios for Walt Disney Pictures, the film stars the voices of Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader, Lewis Black, Mindy Kaling, Kaitlyn Dias, Diane Lane, and Kyle MacLachlan.\n[…]\nDirector of photography Patrick Lin focused on emphasizing Inside Out's cinematography. It created a visual language with unique camera styles to depict the mind world and the real world, allowing a connection between the story and Riley's character. Lin said these worlds can polarize themselves. The mind world's layout and cinematography were influenced by Casablanca (1942). Pixar researched films from Hollywood's golden age for set constructions.\n[…]\nInside Out's certain aspects were supported by \"scale progressions\" (the worldbuilding size based on the main characters' perspective) for characterizations, as well as Riley and Joy's arcs, staging for the story, and framing for the theme. The cameras were created by the crew have attached sensors; these cameras were \"rough\" and \"physical\" but were improved in Inside Out after being used in Pixar's short film The Blue Umbrella (2013).\n[…]\nThe weekend-total figure made Inside Out the first Pixar film not to debut at number one, the biggest number-two debut of all time (surpassing The Day After Tomorrow), and the largest opening weekend for any original film (surpassing Avatar), and was Pixar's second-biggest opening after Toy Story 3.\n[…]\nInside Out inspired several Internet memes. A meme implying a similarity between Joy and Disgust and the Philippine supercouple nicknamed AlDub was posted on social media in 2015. Riley's mother and maternal characters from other Pixar films were shown in a buttocks-themed \"Dump-Truck\" meme."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Inside_Out_%28filme_de_2015%29",
        "situacao": "ok",
        "texto": "Inside Out (bra: Divertida Mente; prt: Divertida-Mente) é um filme de animação dos gêneros comédia dramática e infantil estadunidense de 2015 produzido pela Pixar Animation Studios e lançado pela Walt Disney Pictures.\n[…]\nDirigido e co-escrito por Pete Docter, o filme se passa na mente de uma menina, Riley Andersen (Kaitlyn Dias), onde cinco emoções — Alegria (Amy Poehler), Tristeza (Phyllis Smith), Medo (Bill Hader), Raiva (Lewis Black) e Nojinho (Mindy Kaling) — tentam conduzir sua vida quando ela se muda com seus pais (Diane Lane e Kyle MacLachlan) para uma nova cidade.\n[…]\nO filme gira ao redor de Riley, nascida em Minnesota, e as emoções que estão dentro da sua cabeça (e da cabeça de todas as pessoas), e eles são: Alegria, Tristeza, Nojo (aversão), Medo e Raiva. As emoções vivem na Sede, como é chamada a mente consciente de Riley, onde eles influenciam nas ações e nas memórias de Riley através de um painel de controle. Suas novas memórias são alojadas em esferas coloridas, que são enviadas para as memórias de longo prazo no final de cada dia.\n[…]\nRaiva, Nojinho e Medo, tentam controlar o estado emocional de Riley na ausência de Alegria, mas, inadvertidamente, eles fazem com que ela se distancie de seus pais, amigos e hobbies. Consequentemente, suas ilhas de personalidade destroem e caem uma por uma para o lixo de memórias, um abismo entre a Sede e o resto da mente de Riley onde as memórias desbotadas são descartadas e esquecidas.\n[…]\nUma série de televisão baseada em Divertida Mente foi desenvolvida pela Pixar. O co-roteirista de Soul, Mike Jones, foi responsável pelo desenvolvimento da série. Intitulada Dream Productions, a série estreou no Disney+ em 11 de dezembro de 2024.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Os Caça-Fantasmas",
      "descricao": "Comédia americana de 1984 dirigida por Ivan Reitman, sobre cientistas que caçam fantasmas em Nova York."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No clímax de Os Caça-Fantasmas, de 1984, um gigante branco e sorridente feito de qual doce invade as ruas de Nova York?",
    "resposta": "Marshmallow",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ghostbusters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ghostbusters",
        "situacao": "ok",
        "texto": "Ghostbusters is a 1984 American supernatural comedy film directed by Ivan Reitman and written by Dan Aykroyd and Harold Ramis. It stars Bill Murray, Aykroyd, and Ramis as Peter Venkman, Ray Stantz, and Egon Spengler, three eccentric parapsychologists who start a ghost-catching business in New York City. It also stars Sigourney Weaver and Rick Moranis, and features Annie Potts, Ernie Hudson, and Wi\n[…]\nRay inadvertently recalls a beloved corporate mascot from his childhood, and Gozer reappears as a gigantic Stay Puft Marshmallow Man that begins destroying the city. Against his earlier advice, Egon instructs the team to cross their proton energy streams at the dimensional gate. The resulting explosion destroys Gozer's avatar, banishing it back to its dimension, and closes the gateway. The Ghostbusters then rescue Dana and Louis from the wreckage and are welcomed on the street as heroes.\n[…]\nGhostbusters was screened for test audiences on February 3, 1984, with unfinished effects shots to determine if the comedy worked. Reitman was still concerned audiences would not react well to the Marshmallow Man because of its deviation from the realism of the rest of the film. Reitman recalled that approximately 200 people were recruited off the streets to view the film in a theater on the Burbank lot. It was during the opening library scene Reitman knew the film worked.\n[…]\nEntertainment industry observers credit Ghostbusters and Saturday Night Live with reversing the negative perception of New York City in the early 1980s. Weaver said: \"I think it was a love letter to New York and New Yorkers ... the doorman saying, 'Someone brought a cougar to a party'—that's so New York. When we come down covered with marshmallow, and there are these crowds of New Yorkers of all types and descriptions cheering for us ... it was one of the most moving things I can remember\".\n[…]\nGhostbusters at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Ca%C3%A7a-Fantasmas",
        "situacao": "ok",
        "texto": "Os Caça-Fantasmas (em inglês:  Ghostbusters) é um filme estadunidense de 1984 dos gêneros fantasia, aventura, ficção científica e comédia, dirigido por Ivan Reitman e escrito por Harold Ramis e Dan Aykroyd. É estrelado por Bill Murray, Aykroyd e Ramis como Peter Venkman, Ray Stantz e Egon Spengler, três parapsicólogos excêntricos que iniciam um negócio de \"captura de fantasmas\" na cidade de Nova Y\n[…]\nReitman se encontrou com Aykroyd nas adequações da Art's Delicatessen em Studio City, Los Angeles, e explicou que seu conceito inicial seria praticamente impossível de ser feito. Ele sugeriu que ambientar o filme inteiramente na Terra tornaria os elementos fantasmagóricos mais engraçados e que focar no realismo desde o início tornaria o \"homem de marshmallow\" mais verossímil no filme final.\n[…]\nO projeto do edifício, embora comum em Nova York, era uma raridade em Los Angeles. Uma fotografia de arquivo de uma equipe no Fire House 23 de 1915 ainda em atividade foi pendurada no fundo do escritório dos Caça-Fantasmas.\n[…]\nOs Caça-Fantasmas foi exibido para públicos de teste em 3 de fevereiro de 1984, com cenas de efeitos inacabadas para determinar se a comédia funcionava. Reitman ainda estava preocupado que o público não reagisse bem ao homem de marshmallow por causa de seu desvio do realismo do resto do filme. Reitman lembrou que aproximadamente duzentas pessoas foram recrutadas nas ruas para ver o filme em um cinema em Burbank.\n[…]\nQuando descemos cobertos com marshmallow, e há uma multidão de nova-iorquinos de todos os tipos e descrições torcendo por nós, [...] foi uma das coisas mais comoventes que me lembro\". O filme também é igualmente creditado por ajudar a diminuir a divisão entre atores de televisão e cinema. O agente de talentos Michael Ovitz disse que antes de Os Caça-Fantasmas, os atores de televisão eram considerados apenas para papéis menores no cinema.\n[…]\nGhostbusters no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Jurassic Park",
      "descricao": "Filme de 1993 dirigido por Steven Spielberg sobre um parque temático de dinossauros recriados em laboratório."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Jurassic Park, os cientistas preenchem as falhas no material genético dos dinossauros com o DNA de qual animal?",
    "resposta": "Sapo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jurassic_Park_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jurassic_Park_(film)",
        "situacao": "ok",
        "texto": "Jurassic Park is a 1993 American science fiction film directed by Steven Spielberg and written by Michael Crichton and David Koepp, based on Crichton's 1990 novel. Starring Sam Neill, Laura Dern, Jeff Goldblum, and Richard Attenborough, the film is set on the fictional island of Isla Nublar where industrialist John Hammond (Attenborough) and a team of genetic scientists have created a wildlife par\n[…]\nMuren pushed to shoot the climax as though it was a real animal fight, with a wide-angle lens and slightly delayed camera movements to emphasize the dinosaurs' spontaneity. Jurassic Park was completed on May 28, 1993, after ILM concluded its CGI work.\n[…]\nFollowing the film's release, the Dinosaur Society and the American Museum of Natural History held a \"The Dinosaurs of Jurassic Park\" exhibit featuring various props, dinosaur models, and other behind-the-scenes material from the film. The film began its international release on June 25, in Brazil before further openings in South America and then rolling out around most of the rest of the world from July 16 until October.\n[…]\nTwo years later, for the 20th anniversary of Jurassic Park, a 3D version of the film was released in cinemas. Spielberg declared that he had produced the film with a sort of \"subconscious 3D\", as scenes feature animals walking toward the cameras and some effects of foreground and background overlay. In 2011, he stated that Jurassic Park was the only one of his works he had considered for a conversion.\n[…]\nJurassic Park was praised for its modern portrayal of dinosaurs. Many of the findings of the dinosaur renaissance, such as dinosaurs being warm-blooded, active, intelligent, and genetically related to birds, were reflected in the film, which updated the general public's previous perception of dinosaurs as being sluggish, stupid, and entirely extinct.\n[…]\nJurassic Park at the AFI Catalog of Feature Films"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jurassic_Park",
        "situacao": "ok",
        "texto": "Jurassic Park (bra: Jurassic Park - O Parque dos Dinossauros ou Jurassic Park - Parque dos Dinossauros; prt: Parque Jurássico) é um filme de aventura e ficção científica estadunidense de 1993, dirigido por Steven Spielberg, e baseado no livro homônimo escrito por Michael Crichton. Produzido pela Amblin Entertainment e distribuído pela Universal Pictures, é estrelado por Sam Neill, Laura Dern, Jeff\n[…]\nJohn Hammond (Richard Attenborough) criou recentemente o Jurassic Park, um parque temático habitado por dinossauros clonados a partir do DNA extraído de insetos preservados em âmbar pré-histórico. O parque está localizado na Ilha Nublar, próxima à Costa Rica.\n[…]\nLogo depois, um grupo de cientistas, incluindo o paleontólogo Alan Grant e o matemático Ian Malcolm, são convidados para a pré-visualização do Jurassic Park; um parque de diversões criado pelo empresário milionário John Hammond, fundador da InGen, na Ilha Nublar perto da Costa Rica. Hammond quer ouvir as opiniões de cientistas e, finalmente, obter a aprovação do parque, Malcolm expressa suas dúvidas desde o início.\n[…]\nO Velociraptor também tem um papel importante e é retratado como antagonista secundário do filme, depois do Tiranossauro. A descrição do animal não foi baseada no gênero de dinossauro em questão (que em si era significativamente menor), e sim no Deinonico,  que já foi chamado de Velociraptor antirrhopus por alguns cientistas.\n[…]\nO Braquiossauro é o primeiro dinossauro visto pelos visitantes do parque. É erroneamente descrito como um animal que mastiga seu alimento e se apoia nas patas traseiras para alcançar os galhos mais altos das árvores. Apesar das evidências científicas de terem capacidades vocais limitadas, o designer de som Gary Rydstrom decidiu misturar o som causado pelo canto das baleias com o de um asno para trazer, em suas próprias palavras, uma sensação melódica de admiração.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "O Exorcista",
      "descricao": "Filme de terror americano de 1973 dirigido por William Friedkin, sobre uma menina possuída por um demônio."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na famosa cena do vômito verde de O Exorcista, de 1973, o que a equipe usou para imitar o líquido?",
    "resposta": "Sopa de ervilha",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Exorcist_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Exorcist_(film)",
        "situacao": "ok",
        "texto": "The Exorcist is a 1973 American supernatural horror film directed by William Friedkin and produced by William Peter Blatty, who adapted his own 1971 novel. The film stars Ellen Burstyn, Max von Sydow, Jason Miller, and Linda Blair, and follows the demonic possession of a young girl and the attempt to rescue her through an exorcism by two Catholic priests.\n[…]\nThe Exorcist earned $66.3 million ($327 million in 2024) in distributors' rentals during its theatrical release in 1974 in the United States and Canada, becoming the second most popular film of that year (behind The Sting's $68.5 million) and Warner Bros.' highest-grossing film of all time although it eventually became the highest-grossing 1973 release. Warner Bros.\n[…]\nDeMille\". Film Quarterly's Michael Dempsey called The Exorcist \"the trash bombshell of 1973, the aesthetic equivalent of being run over by a truck ... a gloating, ugly exploitation picture\". The San Francisco Bay Guardian's reviewer called it \"quite simply the dumbest, most insultingly anti-intellectual movie I have ever come across\".\n[…]\nChicago Tribune film critic Gene Siskel named it one of the top five films of 1973. The English film critic Mark Kermode believes The Exorcist to be the best film ever made.\n[…]\nLawsuits among the creators of The Exorcist began before the film was released, and continued into the 21st century. In November 1973, Blatty sued the studio and Friedkin. He demanded equal billing with Friedkin, who he further claimed had barred him from the set. Friedkin said he had only barred him from post-production; Blatty settled for the \"William Peter Blatty's The Exorcist\" line. In February 1974, Dietz claimed Friedkin had made her sign a nondisclosure agreement.\n[…]\nThe Exorcist at the AFI Catalog of Feature Films\n[…]\nThe Exorcist at Box Office Mojo\n[…]\nThe Exorcist at Rotten Tomatoes\n[…]\nThe Exorcist at filmsite.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Exorcista",
        "situacao": "ok",
        "texto": "The Exorcist (prt/bra: O Exorcista) é um filme norte-americano de 1973 do gênero terror sobrenatural dirigido por William Friedkin e escrito por William Peter Blatty, baseado no livro homônimo de sua autoria. O filme aborda a possessão demoníaca de uma garota de 12 anos. O livro de Blatty teve inspiração no exorcismo de um garoto de 14 anos de idade, documentado em 1949.\n[…]\nO filme tornou-se um dos mais lucrativos filmes de terror de todos os tempos, arrecadando o equivalente a U$ 441.306.145,00 em todo o mundo, sendo lançado pela Warner Bros. Pictures no dia 26 de dezembro de 1973 nos Estados Unidos.\n[…]\nEm uma entrevista da mesma edição, Friedkin explicou, \"eu vi cortes subliminares em uma série de filmes antes de eu colocá-los em The Exorcist, e eu pensei que era um dispositivo de contar histórias muito eficaz ... A edição subliminar em The Exorcist foi feita para criar o efeito dramático, alcançar e sustentar uma espécie de estado de sonho\". No entanto, estes flashes assustadores rápidos foram rotulados com \"[não] realmente subliminares\" e \"quase\" ou \"semissubliminare\".\n[…]\nUma imagem subliminar verdadeira deve ser, por definição, abaixo do limiar de consciência. Em uma entrevista em um livro de 1999 sobre o filme, o autor de The Exorcist Blatty abordou a controvérsia, explicando que, \"Não há imagens subliminares. Se você pode vê-las, não é subliminar.\"\n[…]\nExorcista II - O Herege de 1977, protagonizada por Linda Blair.\n[…]\nO Exorcista III, de 1990, com George C. Scott.\n[…]\nO Exorcista - O Início, de 2004, com Stellan Skarsgård e Izabella Scorupco. Este se passa cronologicamente em uma época anterior ao primeiro filme.\n[…]\nDomínio: Prequela de O Exorcista, de 2005, com Stellan Skarsgård. Uma nova versão de O Exorcista - O Início, que na verdade é o remake do primeiro filme.\n[…]\nThe Exorcist, série de 2016-2017, protagonizada por Alfonso Herrera, Ben Daniels e Geena Davis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Timão",
      "descricao": "Personagem tagarela de O Rei Leão, da Disney, inseparável amigo do javali Pumba."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em O Rei Leão, Timão, o amigo tagarela do javali Pumba, é que tipo de animal?",
    "resposta": "Suricato",
    "distratores": [
      "Mangusto",
      "Lêmure",
      "Esquilo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Timon_and_Pumbaa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Timon_and_Pumbaa",
        "situacao": "ok",
        "texto": "Timon and Pumbaa are an animated meerkat and warthog duo who appear in Disney's The Lion King franchise, introduced in the 1994 animated feature film.\n[…]\nPumbaa makes a cameo appearance in the \"Good Neighbor Cruella\" episode of 101 Dalmatians: The Series. Both characters make a cameo appearance in the Lilo & Stitch: The Series finale film, Leroy & Stitch, hidden among Stitch's experiment \"cousins\" in the climax. In The Jungle Book 2, two animals resembling Timon and Pumbaa can briefly be seen dancing during the song \"W-I-L-D\" until Baloo knocks them off the wall with his backside.\n[…]\nTimon and Pumbaa are playable characters to unlock for a limited time in Disney Magic Kingdoms.\n[…]\nTimon appears at Walt Disney Parks and Resorts as a meetable character in Adventureland and at Disney’s Animal Kingdom, while Pumbaa occasionally appears on show or parade floats. At Walt Disney World, the two appear in signage explaining the park's safety policies to visitors. They were similarly featured on the Disney Safety website which was created in conjunction with Animax Entertainment until its closure.\n[…]\nTimon and Pumbaa both feature in Festival of the Lion King at Animal Kingdom, voiced by Kevin Schon and Ernie Sabella.\n[…]\nDisney Educational Productions and Underwriters Laboratories co-produced an educational film series called Wild About Safety: Safety Smart with Timon and Pumbaa, where Pumbaa educated Timon on how to stay safe. Ernie Sabella reprised his role as Pumbaa, while Timon was voiced by Bruce Lanoil. The series ran from 2008 to 2013. Each installment is approximately 12 minutes long."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Timon_and_Pumbaa",
        "situacao": "ok",
        "texto": "The Lion King (bra/prt: O Rei Leão) é o 32.º longa-metragem animado produzido pela Walt Disney Feature Animation e pela Walt Disney Pictures e distribuído pela Buena Vista Pictures. Foi dirigido por Roger Allers e Rob Minkoff, com roteiro creditado a Linda Woolverton, Irene Mecchi e Jonathan Roberts, e música de Elton John com letras de Tim Rice.\n[…]\nO sucesso levou a uma adaptação teatral na Broadway que está em cartaz desde 1997, duas sequências diretamente em vídeo, O Rei Leão 2 e O Rei Leão 3, duas séries televisivas, Timão e Pumba e A Guarda do Leão, uma refilmagem em 2019 e uma prequela em 2024.\n[…]\nDepois de andar sem rumo por bastante tempo, Simba cai de exaustão em um deserto, chegando a quase morrer. Timão e Pumba, um suricate e um javali, encontram-no e cuidam dele até ele recuperar sua saúde. Simba cresce com eles na selva, vivendo uma vida despreocupada com seus amigos sob o lema \"Hakuna Matata\" (\"sem preocupações\"). Quando Simba se torna um jovem adulto, ele resgata Timão e Pumba de uma leoa faminta, que acaba por ser Nala. Ela e Simba se reconciliam e se apaixonam.\n[…]\nNathan Lane e Ernie Sabella como Timão e Pumba, uma dupla de amigos que Simba conhece após sua fuga, e que decidem criá-lo, lhe apresentando o estilo de vida despreocupado, Hakuna Matata. Timão é um suricate bípede egocêntrico, preguiçoso e exagerado; Pumba (do suaíli que significa \"atordoado\", \"desorientado\") é javali gentil e de grande coração, mas que tem problemas de flatulência. Ambos são insetívoros. No Brasil, Pedro de Saint Germain e Mauro Ramos.\n[…]\nO filme e sua sequência O Reino de Simba mais tarde inspiraram um outro jogo original da Torus Games, The Lion King: Simba's Mighty Adventure (2000) para Game Boy Color e PlayStation. Timão e Pumba também apareceram em Timon & Pumbaa's Jungle Games, para Super NES e computador lançado em 1995.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Forrest Gump",
      "descricao": "Filme americano dirigido por Robert Zemeckis, com Tom Hanks como um homem simples que atravessa décadas da história dos Estados Unidos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Segundo a frase que a mãe de Forrest Gump repetia, a vida é como uma caixa de quê?",
    "resposta": "Chocolates",
    "fonte": [
      "https://en.wikipedia.org/wiki/Forrest_Gump",
      "https://en.wikipedia.org/wiki/AFI%27s_100_Years...100_Movie_Quotes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Forrest_Gump",
        "situacao": "ok",
        "texto": "Forrest Gump is a 1994 American comedy-drama film directed by Robert Zemeckis. An adaptation of the 1986 novel of the same name by Winston Groom, the film's screenplay was written by Eric Roth. It stars Tom Hanks in the title role, alongside Robin Wright, Gary Sinise, Mykelti Williamson, and Sally Field in lead roles. The film follows the life of an Alabama man named Forrest Gump (Hanks) and his e\n[…]\nIn addition to the film's multiple awards and nominations, it has also been recognized by the American Film Institute on several of its lists. The film ranks 37th on 100 Years...100 Cheers, 71st on 100 Years...100 Movies, and 76th on 100 Years...100 Movies (10th Anniversary Edition). In addition, the quote \"Mama always said life was like a box of chocolates. You never know what you're gonna get,\" was ranked 40th on 100 Years...100 Movie Quotes.\n[…]\nIn December 2011, Forrest Gump was selected for preservation in the Library of Congress' National Film Registry.\n[…]\n\"Mama always said life was like a box of chocolates. You never know what you're gonna get.\" – #40\n[…]\nJames Burton, professor at Salisbury University said that conservatives claimed Forrest Gump as their own due less to the content of the film and more to the historical and cultural context of 1994. Burton said that the film's content and advertising campaign were affected by the cultural climate of the 1990s, which emphasized family values and American values, epitomized in the book Hollywood vs. America.\n[…]\nSome commentators see the conservative readings of Forrest Gump as indicating the death of irony in American culture. Vivian Sobchack said that the film's humor and irony rely on the assumption of the audience's historical knowledge.\n[…]\nForrest Gump (song)\n[…]\nForrest Gump at IMDb\n[…]\nForrest Gump at the TCM Movie Database (archived)\n[…]\nForrest Gump at Box Office Mojo\n[…]\nForrest Gump at Rotten Tomatoes\n[…]\nParamount Movies – Forrest Gump"
      },
      {
        "url": "https://en.wikipedia.org/wiki/AFI%27s_100_Years...100_Movie_Quotes",
        "situacao": "ok",
        "texto": "Part of the American Film Institute's 100 Years... series, AFI's 100 Years... 100 Movie Quotes is a list of the top 100 quotations in American cinema. The American Film Institute revealed the list on June 21, 2005, in a three-hour television program on CBS. The program was hosted by Pierce Brosnan and had commentary from many Hollywood actors and filmmakers.\n[…]\nA jury consisting of 1,500 film artists, critics, and historians selected \"Frankly, my dear, I don't give a damn\", spoken by Clark Gable as Rhett Butler in the 1939 American Civil War epic Gone with the Wind, as the most memorable American movie quotation of all time.\n[…]\nLegacy: Movie quotations that viewers use to evoke the memory of a treasured film, thus ensuring and enlivening its historical legacy.\n[…]\n#40: \"Life is like a box of chocolates.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Forrest_Gump",
        "situacao": "ok",
        "texto": "Forrest Gump (bra: Forrest Gump: O Contador de Histórias; prt: Forrest Gump) é um filme norte-americano de 1994, dirigido por Robert Zemeckis, com roteiro de Eric Roth,  baseado no romance homônimo de Winston Groom. O filme traz Tom Hanks no papel-título, além de Robin Wright e Gary Sinise.\n[…]\nA casa da família Gump foi construída ao longo do Rio Combahee perto de Yemassee, Carolina do Sul, e as terras próximas foram usadas para filmar a casa de Jenny, bem como algumas das cenas do Vietnã. As cenas de Forrest Gump contando sua história de vida no ponto de ônibus foram rodadas na Chippewa Square, uma praça localizada no extremo norte de Savannah, Geórgia, onde foi utilizado um ponto de ônibus real.\n[…]\nAlém dos vários prêmios e indicações, Forrest Gump também foi incluído pelo American Film Institute em várias de suas listas: o filme ocupa o 37º lugar na lista de filmes mais inspiradores, 71º na primeira lista de melhores filmes estadunidenses de todos os tempos e 76º na segunda; além disso, a fala \"Mamãe sempre me disse que a vida é como uma caixa de bombons: você nunca sabe o que vai encontrar\", ficou em 40º lugar no ranking das cem maiores frases ditas em filmes.\n[…]\nNa cena de abertura do episódio \"Gump Roast\" da série Os Simpsons, Homer Simpson é mostrado em um banco de parque, como Forrest Gump; Homer é picado em ambos os olhos pela ponta aguda da pena que cai suavemente.\n[…]\nNa primeira página do livro sequencial, Forrest Gump diz aos leitores: \"Nunca deixe ninguém fazer um filme sobre a história de sua vida\" e \"Se eles entendem certo ou errado, não importa\". O primeiro capítulo do livro sugere que os eventos da vida real em torno do filme foram incorporados ao enredo de Forrest e que Forrest recebeu muita atenção da mídia como resultado do filme.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "O Mágico de Oz",
      "descricao": "Filme musical americano de 1939, estrelado por Judy Garland, baseado no livro de L. Frank Baum."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em O Mágico de Oz, de 1939, as cenas da fazenda no Kansas não aparecem coloridas. Em que tonalidade elas foram exibidas?",
    "resposta": "Sépia",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Wizard_of_Oz_(1939_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Wizard_of_Oz_(1939_film)",
        "situacao": "ok",
        "texto": "The Wizard of Oz is a 1939 American musical fantasy film produced by Metro-Goldwyn-Mayer. Based on the 1900 novel The Wonderful Wizard of Oz by L. Frank Baum, it was primarily directed by Victor Fleming, who left production to take over the troubled Gone with the Wind. The screenplay is credited to Noel Langley, Florence Ryerson, and Edgar Allan Woolf, but includes contributions from other writers\n[…]\nAll the Oz sequences were filmed in three-strip Technicolor, requiring the use of large, hot lights, while the opening and closing credits, and the Kansas sequences, were filmed in black and white and colored in a sepia-tone process. Sepia-tone film was also used in the scene where Aunt Em appears in the Wicked Witch's crystal ball.\n[…]\nA significant innovation planned for the film was the use of stencil printing for the transition to Technicolor. Each frame was to be hand-tinted to maintain the sepia tone.\n[…]\nHowever, it was abandoned because it was too expensive and labor-intensive, and MGM used a simpler, less expensive technique: During the May reshoots, the inside of the farmhouse was painted sepia, and when Dorothy opens the door, it is not Garland, but her stand-in, Bobbie Koshay, wearing a sepia gingham dress, who then backs out of frame.\n[…]\nOnce the camera moves through the door, Garland steps back into frame in her bright blue gingham dress (as noted in DVD extras), and the sepia-painted door briefly tints her with the same color before she emerges from the house's shadow, into the bright glare of the Technicolor lighting. This also meant that the reshoots provided the first proper shot of Munchkinland.\n[…]\nAlthough the 1949 re-issue used sepia tone, the 1955 re-issue showed the Kansas sequences in black and white instead, a practice that continued on television broadcasts and home releases until the 50th anniversary VHS release in 1989.\n[…]\nThe Wizard of Oz at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Wizard_of_Oz_%281939%29",
        "situacao": "ok",
        "texto": "The Wizard of Oz (em Portugal, O Feiticeiro de Oz; no Brasil, O Mágico de Oz) é um filme americano do gênero fantasia e musical familiar, lançado em 1939 pela Metro-Goldwyn-Mayer, baseado no livro The Wonderful Wizard of Oz de L. Frank Baum. O filme foi parcialmente dirigido por Victor Fleming (que deixou a produção para dirigir Gone with the Wind), com a produção de Mervyn LeRoy e o roteiro escri\n[…]\nPosteriormente, LeRoy contratou o roteirista Herman J. Mankiewicz, que entregou um rascunho de 17 páginas das cenas do Kansas e, algumas semanas depois, mais 56 páginas. Ele também convidou Noel Langley e o poeta Ogden Nash para escrever outras versões da história. Nenhum dos três sabia sobre os outros. Nash apresentou um esboço de quatro páginas, enquanto Langley apresentou um de 43 páginas.\n[…]\nDurante as filmagens, Victor Fleming e John Lee Mahin revisaram ainda mais o roteiro, adicionando e cortando algumas cenas. Além disso, Jack Haley e Bert Lahr são conhecidos por terem escrito alguns de seus diálogos para cenas no Kansas.\n[…]\nFrank Morgan como O Mágico de Oz / Professor Marvel\n[…]\nO filme estreou no Orpheum Theatre em Green Bay, Wisconsin, em 10 de agosto de 1939. A primeira prévia foi realizada em  San Bernardino. O filme foi exibido em três mercados de teste: em Kenosha, Wisconsin, e Dennis, Massachusetts, em 11 de agosto de 1939, e no Strand Theatre em Oconomowoc, Wisconsin, em 12 de agosto.\n[…]\nGarland estendeu sua participação por mais duas semanas, fazendo parceria com Rooney na segunda semana e com os coestrelas de O Mágico de Oz, Ray Bolger e Bert Lahr, na terceira e última semana. O filme estreou em todo o país em 25 de agosto de 1939.\n[…]\nO DVD também incluiu um documentário dos bastidores produzido em 1990 e apresentado por Angela Lansbury, que foi originalmente exibido na televisão imediatamente após a transmissão do filme.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Herbie",
      "descricao": "Carro com vontade própria, protagonista de uma série de filmes da Disney iniciada em 1968."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Herbie, o carrinho com vontade própria de uma série de filmes da Disney, é de qual modelo da Volkswagen?",
    "resposta": "Fusca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Herbie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Herbie",
        "situacao": "ok",
        "texto": "Herbie, the Love Bug is a fictional sentient 1963 Volkswagen Beetle racing car that was featured in several Walt Disney motion pictures starting with The Love Bug in 1968. He has a mind of his own, being capable of driving himself and often becoming a serious contender in auto racing.\n[…]\nTo create the effect of Herbie driving himself, Disney concocted a detailed system of sprockets and pulleys connected to a second steering column under the front seat for a rear seat driver. There was also a second set of pedal assemblies, clutch cables and a shifter extension. In The Love Bug, the rear seat driver sat low enough to see over the windshield but still out of the view of the camera.\n[…]\nFor Herbie Rides Again and Herbie Goes to Monte Carlo, Disney installed a hood-mounted Carello fog light that concealed a small camera which allowed the rear seat driver to view the street and sit lower.\n[…]\nAdditionally, Herbie was running on standard wheels yet again. Volkswagen also promoted the film by having a Type 1 Beetle, complete with Herbie livery, in every showroom. There are various model errors in this film, such as the later \"big window\" (post-1964) Beetles being used. Also of note is the \"cut-n-shut\" engine cover after the warehouse break-in. The Beetle used was a late model, having a more bulbous flat-bottomed lid with an earlier rounded bottom edge welded on.\n[…]\nAfter the success of The Love Bug, it was heavily endorsed by Volkswagen, which was in financial trouble at the time, when Beetle sales in North America were considerably lower than in previous decades. As such, the company insisted that the VW logos appear on Herbie. Both the hub cap VW logo and hood-mounted VW logo were reinstated at the company's request."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Herbie",
        "situacao": "ok",
        "texto": "Herbie é um personagem fictício que apareceu em seis filmes produzidos pelos estúdios Disney: Se Meu Fusca Falasse, (The Love Bug) de 1968; As Novas Aventuras do Fusca, (Herbie Rides Again) de 1974; Um Fusca em Monte Carlo, (Herbie Goes to Monte Carlo) de 1977 (também conhecido como Herbie - O Fusca Enamorado); A Última Cruzada do Fusca, (Herbie Goes Bananas) de 1980, Se o Meu Fusca Falasse (Remak\n[…]\nHerbie é um Volkswagen Fusca 1963, de cor branco pérola (código VW L87), dotado de vida própria, com uma incrível inteligência, carisma e personalidade. É um Fusca desprezado que vai parar nas mãos de Jim Douglas, um piloto de corridas fracassado que, graças a Herbie, ganha confiança e começa vencer várias corridas.\n[…]\nO tamanho original da listras do Herbie são de 12 cm de largura. Temos 3 cm para a cor vermelha, 3 cm para a cor branca e 6 cm para a cor da listra azul. Em cima do teto solar, as 3 cores das listras não são feitas de um decalque de vinil, mas sim pintado. A marca da fonte \"53\" usada desde os primeiros filmes é uma fonte especial desenhada por um homem da equipe de arte da Disney aos filmes, mas foi perdida ao longo do tempo.\n[…]\nPor essa razão não usaram a mesma fonte (tipo de letra) no (53) dos últimos 2 filmes. A largura da elipse com o (53) do capô tem cerca de 50 cm de largura. Na parte traseira do carro, a elipse (53) é um pouco maior e ainda possui uma ligeira inclinação.\n[…]\nHerbie Rides Again (1974) — dirigido por Robert Stevenson\n[…]\nHerbie Goes to Monte Carlo (1977) — dirigido por Vincent McEveety\n[…]\nHerbie Goes Bananas (1980) — dirigido por Vincent McEveety\n[…]\nHerbie: Fully Loaded (2005) — dirigido por Angela Robinson\n[…]\n«Herbie» (em inglês)\n[…]\nHerbie no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Wilson (Náufrago)",
      "descricao": "Companheiro inanimado do personagem de Tom Hanks na ilha deserta do filme Náufrago, de 2000."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Náufrago, de 2000, o personagem de Tom Hanks conversa na ilha deserta com Wilson. O que é Wilson?",
    "resposta": "Uma bola de vôlei",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cast_Away"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cast_Away",
        "situacao": "ok",
        "texto": "Cast Away is a 2000 American survival drama film directed and co-produced by Robert Zemeckis, written by William Broyles Jr. and starring Tom Hanks, Helen Hunt, and Nick Searcy. Hanks plays a FedEx troubleshooter who is stranded on a deserted island after his plane crashes in the South Pacific, and the plot focuses on his desperate attempts to survive and return home. Filming took place from Janua\n[…]\nIn the film, Wilson the volleyball serves as Chuck Noland's personified friend and only companion during the four years that Noland spends alone on a deserted island. Named after the volleyball's manufacturer, Wilson Sporting Goods, the character was created by screenwriter William Broyles Jr.\n[…]\nWhen the idea was presented to Tom Hanks, he happily agreed on the volleyball as a memento to his wife, Rita Wilson, knowing he would be away from home for a long period for filming. From a screenwriting point of view, Wilson also serves to realistically allow dialogue to take place in a solitary scenario.\n[…]\nAn original Wilson the volleyball prop sold via Heritage Auctions on December 7, 2024, for $162,500.\n[…]\nThe second episode of the seventh season of It's Always Sunny in Philadelphia, \"The Gang Goes to the Jersey Shore\", refers to a Cast Away scene. When Frank loses his \"rum ham\" while floating on a raft in the Atlantic Ocean, his anguish resembles that of Tom Hanks' character losing Wilson the volleyball.\n[…]\nOn December 31, 2002, at Madison Square Garden, Phish played a clip from the film on the jumbotron to introduce their song \"Wilson\" during their concert. They later introduced \"Tom Hanks\" during the song onstage, but it was later revealed to be keyboardist Page McConnell's brother Steve.\n[…]\nOn April 15, 2022, at Progressive Field, Tom Hanks threw the ceremonial first pitch at the Cleveland Guardians home opener, accompanied by a replica of Wilson from the movie."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cast_Away",
        "situacao": "ok",
        "texto": "Cast Away (bra: Náufrago; prt: Cast Away – O Náufrago ou O Náufrago) é um filme dramático de sobrevivência americano de 2000 dirigido e produzido por Robert Zemeckis e estrelado por Tom Hanks, Helen Hunt e Nick Searcy. Narra a história de um empregado da FedEx que sofre um acidente aéreo e vai parar numa ilha deserta no Pacífico Sul. A trama se concentra em suas tentativas desesperadas de sobreviv\n[…]\nWilson é o amigo imaginário criado pelo personagem Chuck Noland no filme. Wilson é uma bola de vôlei na qual Chuck, em um acesso de raiva, a pega com sua mão sangrando e a joga para longe, fazendo assim com que permanecesse na mesma uma mancha similar a um rosto humano. Chuck a tratava como um amigo nos momentos de solidão. O nome se deve ao fato da marca da bola ser Wilson.\n[…]\nWilson como Bola de Vôlei Wilson Cataway\n[…]\nNo filme, a bola de vôlei Wilson serve como amigo personificado de Chuck Noland e é seu único companheiro durante os quatro anos que Noland passa sozinho na ilha deserta. Nomeado em homenagem ao fabricante do voleibol, Wilson Sporting Goods, o personagem foi criado pelo roteirista William Broyles, Jr..\n[…]\nHá rumores inverídicos que um dos adereços de voleibol originais foi vendido em leilão por US$ 18 500 para o ex-CEO da FedEx Office, Ken May. Na época do lançamento do filme, Wilson lançou sua própria promoção conjunta centrada no fato de que um de seus produtos era \"co-estrelado\" com Tom Hanks. Wilson fabricou uma bola de vôlei com uma reprodução da marca da mão ensanguentada em um dos lados.\n[…]\nO segundo episódio da sétima temporada de It's Always Sunny in Philadelphia, \"The Gang Goes to the Jersey Shore\" faz referência a uma das cenas mais famosas de Cast Away. Quando Frank, flutuando em uma jangada no Oceano Atlântico, perde seu “presunto de rum”; sua angústia lembra a do personagem de Tom Hanks perdendo uma bola de vôlei que ele chamou de \"Wilson\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "O Terceiro Homem",
      "descricao": "Filme britânico de 1949 dirigido por Carol Reed, ambientado na Viena do pós-guerra, com Orson Welles."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O famoso tema musical de O Terceiro Homem, filme de 1949 ambientado em Viena, é tocado em qual instrumento de cordas?",
    "resposta": "Cítara",
    "distratores": [
      "Bandolim",
      "Harpa",
      "Balalaica"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Third_Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Third_Man",
        "situacao": "ok",
        "texto": "The Third Man is a 1949 film noir directed by Carol Reed, written by Graham Greene, and starring Joseph Cotten, Alida Valli, Orson Welles and Trevor Howard. Set in post-World War II Allied-occupied Vienna, the film centres on American writer Holly Martins (Cotten), who arrives in the city to accept a job with his friend Harry Lime (Welles), only to learn that he has died. Martins stays in Vienna t\n[…]\nGreene wrote a novella as a treatment for the screenplay. Composer Anton Karas' title composition \"The Third Man Theme\" aka \"Harry Lime Theme\", topped the international music charts in 1950, bringing international fame to the previously unknown performer. The Third Man is considered one of the greatest films of all time, celebrated for its acting, musical score, and atmospheric cinematography.\n[…]\nAdditional music for the film was written by the Australian-born composer Hubert Clifford under the pseudonym of Michael Sarsfield. From 1944 until 1950 Clifford was Musical Director for Korda at London Film Productions, where he chose the composers and conducted the scores for films, as well as composing many original scores of his own. An extract from his Third Man music, The Casanova Melody, was orchestrated by Rodney Newton in 2000.\n[…]\nThe Third Man was the most popular film at the British box office in 1949.\n[…]\n\"The Third Man Theme\" was released as a single in 1949/1950 (Decca in the UK, London Records in the US). It became a best-seller. By November 1949, 300,000 records had been sold in Britain, and the teen-aged Princess Margaret was reportedly a fan. Following its release in the US in 1950, \"The Third Man Theme\" spent 11 weeks at number one on Billboard's Best Sellers in Stores chart, from 29 April to 8 July.\n[…]\nThe Third Man at Rotten Tomatoes\n[…]\nThe Third Man at Metacritic\n[…]\nThe Third Man at IMDb\n[…]\nThe Third Man Museum, Vienna, Austria\n[…]\nThe Third Man tour - Vienna Walks & Talks, Timmermann & Co OG"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Terceiro_Homem",
        "situacao": "ok",
        "texto": "The Third Man (bra/prt: O Terceiro Homem) é um filme noir britânico-americano de 1949, do gênero suspense, dirigido por Carol Reed, com roteiro de Graham Greene baseado em sua obra homônima. O longa-metragem conta a história do escritor estadunidense Holy Martins (Joseph Cotten) que viaja a Viena para aceitar um emprego com seu amigo Harry Lime (Orson Welles), apenas para descobrir que ele \"morreu\n[…]\nIrmão Theodore como Homem (figurante) na rua\n[…]\nO tocador de cítara Anton Karas compôs e executou a trilha sonora do filme. Antes da produção chegar a Viena, Karas era um artista desconhecido no Heurigers local. De acordo com a Time: \"O filme exigia música apropriada para a Viena pós-Segunda Guerra Mundial, mas o diretor Reed decidiu evitar valsas piegas e fortemente orquestradas. Em Viena, uma noite, Reed ouviu um musicista tocador de cítara chamado Anton Karas, [e] ficou fascinado pela melancolia estridente de sua música\".\n[…]\nO Terceiro Homem foi a maior bilheteria de 1949 no Reino Unido. De acordo com o Kinematograph Weekly, o \"maior vencedor\" de bilheteria na Grã-Bretanha em 1949 foi The Third Man, com os \"vice-campeões\" sendo Johnny Belinda, The Secret Life of Walter Mitty, The Paleface, Scott of the Antarctic, The Blue Lagoon, Maytime in Mayfair, Easter Parade, Red River e I Was a Male War Bride.\n[…]\nInicialmente, na Áustria, o filme recebeu análises mistas dos críticos locais. e o filme durou apenas algumas semanas. O jornal vienense Arbeiter-Zeitung, embora crítico de seu \"enredo pouco lógico\", elogiou a representação \"magistral\" do filme de um \"tempo fora do comum\" e a atmosfera da cidade de \"insegurança, pobreza e imoralidade pós-guerra\". William Cook, após sua visita em 2006 ao Museu do Terceiro Homem de Viena, escreveu: \"Na Grã-Bretanha, é um thriller sobre amizade e traição.\n[…]\nOscar 1949 (EUA)\n[…]\nMelhor Filme Britânico (Vencedor)\n[…]\nMelhor Filme",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Central do Brasil",
      "descricao": "Filme brasileiro de 1998 dirigido por Walter Salles, com Fernanda Montenegro e Vinícius de Oliveira."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Central do Brasil, como Dora, a personagem de Fernanda Montenegro, ganha a vida na estação de trem?",
    "resposta": "Escrevendo cartas para analfabetos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Central_Station_(film)",
      "https://pt.wikipedia.org/wiki/Central_do_Brasil_(filme)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Central_Station_(film)",
        "situacao": "ok",
        "texto": "Central Station (Portuguese: Central do Brasil) is a 1998 road drama film directed by Walter Salles from a screenplay by João Emanuel Carneiro and Marcos Bernstein, based on an original idea by Salles. It stars Fernanda Montenegro, Marília Pêra and Vinícius de Oliveira. The film tells the story of a young boy's friendship with a jaded middle-aged woman.\n[…]\nDora is a retired schoolteacher who works at Rio de Janeiro's Central Station, writing letters for illiterate customers to earn a living. Embittered by life, she often demonstrates a lack of patience and sometimes does not mail the letters, stashing them in a drawer or even tearing them up instead. Ana, one of her customers, expresses her desire to reunite with her husband Jesus and have their 9-year-old son Josué finally meet him.\n[…]\nWhen she is killed in an accident just outside the station, Dora feels compelled to take Josué in. She trafficks him to a corrupt couple but later steals him back out of guilt.\n[…]\nFernanda Montenegro as Isadora \"Dora\" Teixeira\n[…]\nCentral Station had its world premiere at a regional film festival in Switzerland on 16 January 1998. It was then screened at the Sundance Film Festival on 19 January 1998 and at the 48th Berlin International Film Festival on 14 February 1998.\n[…]\nHis imagery, like his storytelling, is clear, often unaffectedly lovely, and quietly, powerfully haunting. Entertainment Weekly gave the film a grade of A–, concluding \"In outline, Central Station recalls many of the bogusly sticky adult–kid bonding tales that have been the bane of foreign cinema for too long, but Salles, like De Sica and Renoir, displays a pure and unpatronizing feel for the poetry of broken lives. His movie is really about that most everyday of miracles: the rebirth of hope.\"\n[…]\nCentral Station at IMDb\n[…]\nCentral Station at Box Office Mojo\n[…]\nCentral Station at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Central_do_Brasil_(filme)",
        "situacao": "ok",
        "texto": "Central do Brasil é um filme brasileiro de 1998 dirigido por Walter Salles, produzido pela VideoFilmes, escrito por João Emanuel Carneiro e Marcos Bernstein, e estrelado por Fernanda Montenegro e Vinícius de Oliveira.\n[…]\nAmbientado no Brasil, o enredo gira em torno de Dora, uma professora aposentada que trabalha como escritora de cartas para pessoas analfabetas na Estação Central do Brasil, no Rio de Janeiro, e que ajuda Josué, um garoto cuja mãe morreu atropelada por um ônibus, na busca pelo seu pai no Nordeste.\n[…]\nDora (Fernanda Montenegro) é uma professora aposentada que trabalha como escritora de cartas para analfabetos na Estação Central do Brasil, no Rio de Janeiro. Ela frequentemente perde a paciência com seus clientes e muitas vezes não envia as cartas que escreve, colocando-as em uma gaveta ou até mesmo rasgando-as. Josué (Vinícius de Oliveira) é um pobre garoto com nove anos que nunca conheceu seu pai, Jesus, mas espera fazer isso.\n[…]\nAlguns momentos do filme foram totalmente improvisados, como o da passagem em que Dora está a escrever as cartas no início do filme. No primeiro dia em que instalou-se a pequena mesa na estação Central, as pessoas apresentavam-se ao local e recitavam suas cartas de verdade, e esqueciam-se das câmeras, \"eram inocentes e pediam para escrevermos cartas verdadeiras\", disse Salles.\n[…]\nNo momento em que as personagens penetram rumo ao interior, marca-se o segundo ato. Após vários acontecimentos, como a paixão de Dora e a inserção em um ritual religioso, observa-se as mudanças no ser da senhora. A mulher nervosa e aborrecida que escrevia as cartas ditadas na estação mostra-se mais atenciosa diante do povo de Bom Jesus do Norte.\n[…]\nCentral do Brasil no Rotten Tomatoes"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "HAL 9000",
      "descricao": "Computador de bordo dotado de inteligência artificial no filme 2001: Uma Odisseia no Espaço."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Cada letra de HAL, o computador de 2001: Uma Odisseia no Espaço, vem logo antes no alfabeto das letras de qual sigla de empresa?",
    "resposta": "IBM",
    "fonte": [
      "https://en.wikipedia.org/wiki/HAL_9000"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/HAL_9000",
        "situacao": "ok",
        "texto": "HAL 9000 (or simply HAL or Hal) is a fictional artificial-intelligence character in the Space Odyssey series. First appearing in the 1968 film 2001: A Space Odyssey, HAL (Heuristically Programmed Algorithmic Computer) is a sentient general-intelligence computer that controls the systems of the Discovery One spacecraft and interacts with the ship's astronaut crew.\n[…]\nHAL's name, according to Clarke, is derived from Heuristically programmed ALgorithmic computer. After the film was released, fans noticed HAL was a one-letter shift from the name IBM and there has been much speculation since then that this was a dig at the large computer company, something that both Clarke and Kubrick denied. Clarke addressed the issue in The Lost Worlds of 2001:\n[…]\nIBM was consulted during the making of the film and its logo can be seen on props in the film, including the Pan Am Clipper's cockpit instrument panel and on the lower arm keypad on Poole's space suit. During production it was brought to IBM's attention that the film's plot included a homicidal computer, but the company approved association with the film if it was clear any \"equipment failure\" was not related to IBM products.\n[…]\nHAL's capabilities, like all the technology in 2001, were based on the speculation of respected scientists. Marvin Minsky, director of the MIT Computer Science and Artificial Intelligence Laboratory (CSAIL) and one of the most influential researchers in the field, was an adviser on the film set. In the mid-1960s, many computer scientists in the field of artificial intelligence were optimistic that machines with HAL's capabilities would exist within a few decades.\n[…]\nClarke, Arthur C. (1972). The Lost Worlds of 2001. Signet.\n[…]\nText excerpts from HAL 9000 in 2001: A Space Odyssey\n[…]\n2001 fills the theater at HAL 9000's \"birthday\" in 1997 at the University of Illinois at Urbana–Champaign"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/HAL_9000",
        "situacao": "ok",
        "texto": "HAL 9000 (Heuristically programmed ALgorithmic computer, ou Computador Algorítmico Heuristicamente Programado em tradução livre) é um personagem ficcional da série Odisséia Espacial, de Arthur C. Clarke, e foi imortalizado pela adaptação cinematográfica feita por Stanley Kubrick do primeiro volume da mesma, 2001: A Space Odyssey, de (1968).\n[…]\nAlgumas fontes afirmam que o nome HAL deriva de IBM. De fato, cada letra de HAL é exatamente uma anterior, alfabeticamente, às letras de IBM. Entretanto o autor sempre negou essa informação. \"Teríamos mudado o nome se tivéssemos percebido a coincidência\", escreveu Clarke em seu livro The Lost Worlds of 2001, citando ainda o apoio que a empresa deu durante as filmagens.\n[…]\nO HAL 9000 foi um dos principais personagens da série, aparecendo em todos os livros. Considerado o marco inicial da inteligência artificial, demonstrou não apenas qualidade de processamento mas uma espécie de sentimento próprio, o qual demonstra ao se sacrificar em prol da vida de outros personagens em[carece de fontes]? 2010: Odyssey Two e se desculpar a David Bowman (Odisseia no Espaço) pelos seus atos em 2001.\n[…]\nFoi considerado o principal vilão de 2001: A Space Odyssey porem após sua reprogramação pelo doutor Dr. Chandra este revelou que a culpa pelos incidentes foram os programadores que não contaram a missão para Hal, fazendo com que o computador desenvolvesse um a certa paranoia sobre o objetivo de sua missão. Após seu sacrifício HAL foi englobado pelo monólito, voltando a ser companheiro de David Bowman, trabalhando em conjunto com o monólito para desenvolverem inteligência nos seres de Europa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Faroeste espaguete",
      "descricao": "Subgênero de filmes de faroeste produzidos e dirigidos por italianos, popular nos anos 1960."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os filmes de caubói produzidos por italianos nos anos sessenta, como os de Sergio Leone, ganharam qual apelido tirado da culinária do país?",
    "resposta": "Faroeste espaguete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Spaghetti_Western"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spaghetti_Western",
        "situacao": "ok",
        "texto": "The spaghetti Western is a broad subgenre of Western films produced in Europe. It emerged in the mid-1960s in the wake of Sergio Leone's filmmaking style and international box-office success. The term was used by foreign critics because most of these Westerns were produced and directed by Italians.\n[…]\nIn the 1960s, critics recognized that the American genres were rapidly changing. The genre most identifiably American, the Western, seemed to be evolving into a new, rougher form. For many critics, Sergio Leone's films were part of the problem. Leone's Dollars Trilogy (1964–1966) was not the beginning of the \"spaghetti Western\" cycle in Italy, but for some Americans, Leone's films represented the true beginning of the Italian invasion of an American genre.\n[…]\nThe Back to the Future trilogy pays homage to spaghetti Westerns (especially Sergio Leone's Dollars Trilogy) on a variety of occasions, most notably in the third film. The American animated film Rango incorporates elements of spaghetti Westerns, including a character (the mystical \"Spirit of the West\", regarded as a sort of deity among the characters) appearing to the protagonist as an elderly Man with No Name. The 1985 Japanese film Tampopo was promoted as a \"ramen Western\".\n[…]\nFisher, Austin (2011). Radical Frontiers in the Spaghetti Western: Politics, Violence and Popular Italian Cinema. New York: I.B. Tauris & Co Ltd. ISBN 978-1-84885-578-6.\n[…]\nFrayling, Christopher (2006). Spaghetti westerns: cowboys and Europeans from Karl May to Sergio Leone (Revised paperback ed.). London, New York:I.B. Tauris & Co Ltd. ISBN 978-1-84511-207-3. Retrieved 27 April 2011.\n[…]\nGale, Richard (Winter 2003). \"Spaghetti Westerns: Cowboys and Europeans from Karl May to Sergio Leone\". Journal of Popular Film & Television. 30 (4): 231. ProQuest 199355725."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Spaghetti_western",
        "situacao": "ok",
        "texto": "Spaghetti western, faroeste espaguete, faroeste macarrônico, ou Bang-bang à italiana é um subgênero western de produção italiana das décadas de 1960 e 1970, muitas vezes com a participação de atores famosos, mesmo em início de sua carreira que mais tarde viriam a tornar-se estrelas internacionais. Essas produções foram geralmente filmadas na Itália ou na Espanha.\n[…]\nGraças a este gênero prolífico, por cerca de oito anos (aproximadamente entre 1964 a 1973) o western experimentou uma renovada popularidade na Itália, após o declínio do faroeste americano (popular nos anos 50). O gênero também foi bem-sucedido fora da Itália, influenciando os temas e convenções do gênero western em outros países.\n[…]\nInicialmente o termo Spaghetti western, originário dos Estados Unidos, indicava somente os longa-metragens rodados em italiano, pobres de meios, segundo as convenções dos primeiros westerns, em parte intencionalmente, como consequência da limitação financeira. Embora o público tenha apreciado o gênero, a crítica reconheceu unicamente o valor dos filmes dirigidos por Sergio Leone, os quais alcançaram um sucesso notório também nos cinemas norte-americanos.\n[…]\nSegundo o veterano ator Aldo Sambrell, a expressã spaghetti western foi cunhada pelo jornalista espanhol Alfonso Sánchez.\n[…]\nEntre os filmes mais conhecidos, e provavelmente os arquétipos do gênero, estão aqueles da considerada Trilogia dos dólares, dirigidos por Sergio Leone, com Clint Eastwood, que deu vida ao papel do pistoleiro sem nome, e as famosas trilhas sonoras de Ennio Morricone: Per un pugno di dollari (1964), Per qualche dollaro in più (1965) e Il buono, il brutto, il cattivo (1966). Também dirigidos por Leone, C'era una volta il West (1968) e Giù la testa (1971).\n[…]\nApós a explosão nos anos 1960, o gênero declinou a partir de 1973, sendo produzidos pouquíssimos filmes nas décadas seguintes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Bacurau",
      "descricao": "Filme brasileiro de 2019 dirigido por Kleber Mendonça Filho e Juliano Dornelles, premiado em Cannes."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Além de batizar o filme de Kleber Mendonça Filho e Juliano Dornelles, bacurau é o nome popular de que tipo de animal?",
    "resposta": "Uma ave noturna",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bacurau",
      "https://en.wikipedia.org/wiki/Bacurau_(film)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bacurau",
        "situacao": "ok",
        "texto": "Os bacuraus e noitibós são aves noturnas pertencentes à família Caprimulgidae e ordem Caprimulgiformes, caracterizadas por asas longas, pernas curtas e bicos muito curtos. São distribuídos por todo o globo, com exceção da Antártida. O nome latim caprimulgus significa chupa-cabras, devido ao antigo conto popular de que eles chupavam o leite de cabras. Essas aves são principalmente insetívoras.\n[…]\nAs espécies nativas dos Neotrópicos são chamadas de bacuraus e curiangos, enquanto as espécies nativas do Velho Mundo e norte-americanas são chamadas de noitibós.\n[…]\nOs caprimulgídeos são distribuídos por quase todo o mundo, tendem a ser encontrados em uma variedade de habitats, mais comumente em campos abertos com alguma vegetação e próximos a pastos. Costumam nidificar no chão. Possuem hábitos noturnos e crepusculares, e de dia usam de suas plumagens crípticas para se camuflarem com galhos e folhas secas.\n[…]\nSão aves pouco conhecidas, sobretudo devido aos seus hábitos noturnos. Também são conhecidos como \"engole-ventos\" por causa de seus hábitos de alimentação, no qual voam baixo com o bico aberto tentando apanhar insetos.\n[…]\nO bacurau foi homenageado no filme franco-brasileiro de 2019 \"Bacurau\", produzido por Emilie Lesclaux e dirigido por Kleber Mendonça Filho e Juliano Dornelles. O filme se passa na cidade fictícia de \"Bacurau\", baseada nos municípios de Parelhas e Acari, na região Seridó do Rio Grande do Norte.\n[…]\nO termo bacurau é usado para referir-se aos ônibus da madrugada no Brasil, referente aos hábitos noturnos da ave de mesmo  nome.\n[…]\nUma lenda indígena diz que a pena do bacurau cura a dor de dente. A tradição indígena diz que a criança, ao perder o dente, deve jogá-lo no telhado da oca e pedir ao bacurau para trazê-la um dente bonito e forte no lugar do mesmo.\n[…]\nEm algumas áreas do Nordeste do Brasil, o termo bacurau pode referir-se a partidos políticos que usam a cor verde."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bacurau_(film)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Studio Ghibli",
      "descricao": "Estúdio japonês de animação fundado por Hayao Miyazaki, Isao Takahata e Toshio Suzuki em 1985."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do estúdio japonês Ghibli vem da palavra italiana para um vento quente que sopra de qual deserto africano?",
    "resposta": "Saara",
    "fonte": [
      "https://en.wikipedia.org/wiki/Studio_Ghibli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Studio_Ghibli",
        "situacao": "ok",
        "texto": "Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation studio based in Koganei, Tokyo. It was founded on June 15, 1985, by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki, after acquiring Topcraft's assets. It has a strong presence in the animation industry and has expanded its portfolio to include various media such as sh\n[…]\nThe name \"Ghibli\" was chosen by Miyazaki from the Italian noun ghibli (also used in English), the nickname of Italy's Saharan scouting plane Caproni Ca.309, in turn derived from the Italianization of the Libyan Arabic name for a hot desert wind (قبلي qibliyy). The name was chosen by Miyazaki out of his passion for aircraft and for the idea that the studio would \"blow a new wind through the anime industry\".\n[…]\nThe studio was founded after the success of the 1984 film Nausicaä of the Valley of the Wind. Miyazaki chose the name himself, referencing both the Arabic term for a warm wind from the Sahara, as well as the Caproni Ca.309 Ghibli, an aircraft used by the Italian military during the Second World War. The intent behind the creation of the studio was to \"blow a whirlwind\" into a stagnating Japanese animation industry by creating original, high-quality feature films.\n[…]\nMuch of Studio Ghibli's music is composed by Joe Hisaishi, who has worked with Miyazaki on creating the music for his films for over 30 years. He uses storyboard images, provided by Miyazaki, to create an image album, which is then used to build out the final soundtrack for the movie. The music has elements from Baroque counterpoint, jazz, and modal music to create the unique sound that many associate with both Hisaishi and Studio Ghibli.\n[…]\nGhibli Park in Nagakute, Aichi\n[…]\nStudio Kajino, a subsidiary of Studio Ghibli\n[…]\nStudio Ponoc, founded by former members of Studio Ghibli\n[…]\nStudio Ghibli  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Studio_Ghibli",
        "situacao": "ok",
        "texto": "Studio Ghibli, Inc. (株式会社スタジオジブリ, Kabushiki gaisha Sutajio Jiburi) é um estúdio de animação japonês sediado em Koganei, Tóquio. Tem forte presença na indústria de animação e ampliou seu portfólio para incluir diversos formatos de mídia, como curtas-metragens, comerciais de televisão e dois filmes para televisão. Seu trabalho foi bem recebido pelo público e reconhecido com inúmeros prêmios.\n[…]\nO nome \"Ghibli\" foi escolhido por Miyazaki do substantivo italiano ghibli (também usado em inglês), uma italianização do nome árabe líbio para um vento quente do deserto (جبلي; ghiblī) e apelido da aeronave italiana Caproni Ca.309. O nome foi escolhido por Miyazaki devido à sua paixão pela aviação e também pela ideia de que o estúdio iria “soprar novos ventos na indústria de anime”.\n[…]\nEmbora a palavra italiana fosse transliterada com mais precisão como \"Giburi\" (ギブリ), com um som g forte, o nome do estúdio é escrito em japonês como Jiburi (ジブリ; [d͡ʑiꜜbɯ̟ᵝɾʲi] ()).\n[…]\nFundado em 15 de junho de 1985 após a compra do estúdio Topcraft, o Studio Ghibli era dirigido pelos diretores Hayao Miyazaki e Isao Takahata e pelo produtor Toshio Suzuki . Miyazaki e Takahata já tinham longas carreiras no cinema japonês e na animação televisiva e trabalharam juntos em Taiyō no Ōji Horusu no Daibōken em 1968 e os filmes Panda Kopanda em 1972 e 1973. Suzuki foi editor da revista de mangá Animage, de Tokuma Shoten.\n[…]\nPara o autor do cartaz japonês, há menos espíritos, uma vez que a religião xintoísta japonesa normaliza a existência de espíritos, pelo que é necessária menos ênfase para transmitir a importância dos espíritos não-humanos. Além disso, a Disney ampliou os rótulos “Studio Ghibli” e “Hayao Miyazaki” no pôster, ajudando a trazer maior conhecimento ao estúdio através do sucesso de Spirited Away.\n[…]\nStudio Kajino, uma subsidiária do Estúdio Ghibli\n[…]\nStudio Ponoc, fundado por ex-membros do Studio Ghibli",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "James Bond",
      "descricao": "Agente secreto britânico de código 007, criado pelo escritor Ian Fleming e levado ao cinema a partir de 1962."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No código zero zero sete do agente James Bond, o que indicam os dois zeros iniciais?",
    "resposta": "Licença para matar",
    "fonte": [
      "https://en.wikipedia.org/wiki/James_Bond"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/James_Bond",
        "situacao": "ok",
        "texto": "The James Bond franchise focuses on the character of James Bond, a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. Since Fleming's death in 1964, nine other authors have written authorised Bond novels or novelisations: Kingsley Amis, Christopher Wood, John Gardner, Raymond Benson, Sebastian Faulks, Jef\n[…]\nIn 1981, the thriller writer John Gardner picked up the series with Licence Renewed. Gardner went on to write sixteen Bond books in total; two of the books he wrote were novelisations of Eon Productions films of the same name: Licence to Kill and GoldenEye. Gardner moved the Bond series into the 1980s, although he retained the ages of the characters as they were when Fleming had left them. In 1996, Gardner retired from writing James Bond books due to ill health.\n[…]\nIn 1999, Electronic Arts acquired the licence and released Tomorrow Never Dies on 16 December 1999. In October 2000, they released The World Is Not Enough for the Nintendo 64 followed by 007 Racing for the PlayStation on 21 November 2000. In 2003, the company released James Bond 007: Everything or Nothing, which included the likenesses and voices of Pierce Brosnan, Willem Dafoe, Heidi Klum, Judi Dench and John Cleese, amongst others.\n[…]\nA new version of GoldenEye 007 featuring Daniel Craig was released for the Wii and a handheld version for the Nintendo DS in November 2010. A year later, a new version was released for Xbox 360 and PlayStation 3 under the title GoldenEye 007: Reloaded. In October 2012, 007 Legends was released, which featured one mission from each of the Bond actors of the Eon Productions' series. 007 Legends was a critical and commercial failure, resulting in Activision having its licence revoked.\n[…]\n9007 James Bond, asteroid named after the character\n[…]\nJames Bond on IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/James_Bond_%28franquia%29",
        "situacao": "ok",
        "texto": "James Bond é uma franquia de mídia que aborda o personagem James Bond, um agente secreto britânico.\n[…]\nAlém disso, filmes com enredos originais receberam novelizações. 007 - O Espião Que Me Amava e 007 Contra o Foguete Da Morte foram escritos pelo roteirista Christopher Wood. Os \"escritores oficiais\" assinaram as seguintes obras: John Gardner - Permissão Para Matar e 007 Contra Goldeneye, e Raymond Benson - 007 - O Amanhã Nunca Morre, 007 - O Mundo Não é o Bastante e 007 - Um Novo Dia Para Morrer.\n[…]\nApós três FPS's e um terceira pessoa, dois inspirados em filmes (Tomorrow Never Dies, de 1999 e The World Is Not Enough, de 2000), e duas tramas originais (James Bond 007: Agent Under Fire e James Bond 007: Nightfire, estrelado por Pierce Brosnan), a EA mudou o estilo em 2004 para tiro em terceira pessoa, com James Bond 007: Everything or Nothing, que tinha a participação de atores como Willem Dafoe, Heidi Klum, Judi Dench e o próprio Pierce Brosnan, e usava um roteiro considerado para o cinema.\n[…]\nEm 2012, a Activision lançou o jogo 007 Legends para Playstation 3, PC, Xbox 360 E Nintendo Wii U, em comemoração aos 50 anos do agente secreto, baseado em missões dos filmes 007 - Um Novo Dia para Morrer (2002), 007 - Permissão para Matar (1989), 007 contra o Foguete da Morte (1979), 007 A Serviço Secreto de Sua Majestade (1969) e 007 contra Goldfinger (1964) e mais uma missão baseada em 007 - Operação Skyfall (2012).\n[…]\nJames Bond no seu contexto é o tema de um curso da Universidade de Cardiff (País de Gales) anunciado para a iniciar em janeiro de 2008.\n[…]\nJames Bond Brasil\n[…]\nUniverso Bond",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "A Fortaleza Escondida",
      "descricao": "Filme japonês de aventura de 1958 dirigido por Akira Kurosawa, sobre dois camponeses que escoltam uma princesa."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "George Lucas reconheceu que A Fortaleza Escondida, aventura de Akira Kurosawa de 1958, influenciou um de seus filmes mais famosos. Qual?",
    "resposta": "Star Wars",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Hidden_Fortress"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Hidden_Fortress",
        "situacao": "ok",
        "texto": "The Hidden Fortress (Japanese: 隠し砦の三悪人, Hepburn: Kakushi Toride no San Akunin; lit. 'The Three Villains of the Hidden Fortress') is a 1958 Japanese epic jidaigeki adventure film directed by Akira Kurosawa, with special effects by Eiji Tsuburaya. It tells the story of two peasants who agree to escort a man and a woman across enemy lines in return for gold, without knowing that he is a general and s\n[…]\nThe Hidden Fortress was the fourth highest-grossing film of the year in Japan, and Kurosawa's most successful film up to that point. It influenced the 1977 American film Star Wars.\n[…]\nOn review aggregator Rotten Tomatoes, the film holds an approval rating of 96% based on 51 critic reviews, with the consensus, \"A feudal adventure told from an eccentric perspective, The Hidden Fortress is among Akira Kurosawa's most purely enjoyable epics.\"\n[…]\nAmerican director George Lucas has acknowledged the heavy influence of The Hidden Fortress on his 1977 film Star Wars, particularly in the technique of telling the story from the perspective of the film's lowliest characters, C-3PO  and R2-D2. Some of the major characters from Star Wars have clear analogues in The Hidden Fortress, including C-3PO and R2-D2 being based on Tahei and Matashichi, and Princess Leia on Princess Yuki.\n[…]\nLucas's original plot outline for Star Wars bore an even greater resemblance to the plot of The Hidden Fortress; this draft would subsequently be reused as the basis for The Phantom Menace. The movie is referenced in Lego Star Wars: The Skywalker Saga, where during a cutscene for the first level of Return of the Jedi, there is a flag written in Aurebesh, which translates to \"Hidden Fortress\".\n[…]\nThe Hidden Fortress at Rotten Tomatoes\n[…]\nThe Hidden Fortress (in Japanese) at the Japanese Movie Database\n[…]\nThe Hidden Fortress: Three Good Men and a Princess an essay by Catherine Russell at the Criterion Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kakushi_toride_no_san_akunin",
        "situacao": "ok",
        "texto": "Kakushi toride no san akunin (bra: A Fortaleza Escondida) é um filme japonês de 1958, do gênero ação, dirigido por Akira Kurosawa e estrelado por Toshirō Mifune e Misa Uehara.\n[…]\nEste é o primeiro filme de Kurosawa filmado em Widescreen, com a tecnologia Tohoscope. Kurosawa usou a tecnologia durante uma década em seus filmes.\n[…]\nGeorge Lucas admitiu que Kakushi toride no san akunin o influenciou na criação de Guerra nas Estrelas, principalmente pela técnica de contar o filme pela visão de dois personagens coadjuvantes (no caso, C-3PO e R2-D2). O esboço original de Lucas de Guerra nas Estrelas também tinha uma forte semelhança com A Fortaleza Escondida, a qual seria reutilizada em  A Ameaça Fantasma.\n[…]\nThe Hidden Fortress no IMDb\n[…]\nThe Hidden Fortress no AllMovie (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Gata em Teto de Zinco Quente (filme)",
      "descricao": "Filme americano de 1958 com Elizabeth Taylor e Paul Newman, adaptado de uma peça teatral."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os filmes Uma Rua Chamada Pecado, com Marlon Brando, e Gata em Teto de Zinco Quente, com Elizabeth Taylor, adaptam peças de qual dramaturgo americano?",
    "resposta": "Tennessee Williams",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cat_on_a_Hot_Tin_Roof_(1958_film)",
      "https://en.wikipedia.org/wiki/A_Streetcar_Named_Desire_(1951_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cat_on_a_Hot_Tin_Roof_(1958_film)",
        "situacao": "ok",
        "texto": "Cat on a Hot Tin Roof is a 1958 American drama film directed by Richard Brooks (who co-wrote the screenplay with James Poe) based on the 1955 Pulitzer Prize-winning play of the same name by Tennessee Williams. The film stars Elizabeth Taylor, Paul Newman, Burl Ives, Jack Carson and Judith Anderson.\n[…]\nTennessee Williams was reportedly unhappy with the screenplay, which removed almost all homosexual themes and revised the third act section to include a lengthy scene of reconciliation between Brick and Big Daddy Pollitt. Paul Newman also stated his disappointment with the adaptation. The Hays Code limited Brick's portrayal of sexual desire from Skipper and diminished the play's critique of homophobia.\n[…]\nDespite this, the film was highly acclaimed by critics. Bosley Crowther of The New York Times wrote that although \"Mr. Williams' original stage play has been altered considerably, especially in offering explanation of why the son is as he is\", he still found the film \"a ferocious and fascinating show\", and deemed Newman's performance \"an ingratiating picture of a tortured and tested young man\" and Taylor \"terrific\".\n[…]\nNo wonder the baffled father, in trying to find out what gives, roars with indignation: 'Something's missing here!' \" Leonard Maltin gave the film three and a half of four stars: \"Tennessee Williams' classic study of \"mendacity\" comes to the screen somewhat laundered but still packing a wallop; entire cast is sensational.\"\n[…]\nOn the review aggregator website Rotten Tomatoes, 97% of 37 critics' reviews are positive. The website's consensus reads: \"Paul Newman and Elizabeth Taylor are at the height of their glamor and performing prowess in this feverish adaptation of Tennessee Williams' play, with a subtext of sexual repression providing an electric undercurrent.\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/A_Streetcar_Named_Desire_(1951_film)",
        "situacao": "ok",
        "texto": "A Streetcar Named Desire is a 1951 American Southern Gothic drama film adapted from Tennessee Williams's Pulitzer Prize-winning play of the same name. Directed by Elia Kazan,   it stars Vivien Leigh, Marlon Brando, Kim Hunter, and Karl Malden. The film tells the story of a Mississippi Southern belle, Blanche DuBois (Leigh), who, after encountering a series of personal losses, seeks refuge with her\n[…]\nTennessee Williams collaborated with Oscar Saul and Elia Kazan on the screenplay. Kazan, who directed the Broadway stage production, also directed the black-and-white film. Brando, Hunter, and Malden all reprised their original Broadway roles. Although Jessica Tandy originated the role of Blanche DuBois on Broadway, Vivien Leigh, who had appeared in the London theatre production, was cast in the film adaptation for her star power.\n[…]\nIn Brando's autobiography, he praised Tandy but felt that Leigh \"was Blanche.\"\n[…]\nThe website summarizes the critical consensus as, \"A feverish rendition of a heart-rending story, A Streetcar Named Desire gives Tennessee Williams's stage play explosive power on the screen thanks to Elia Kazan's searing direction and a sterling ensemble at the peak of their craft.\" At Metacritic, which assigns a normalized rating to reviews, the film received a score of 97 out of 100, based on 20 reviews, indicating \"universal acclaim\".\n[…]\nVivien Leigh is incomparable, more real and vivid than real people I know. And Marlon Brando was a living poem. He was an actor who came on the scene and changed the history of acting. The magic, the setting, New Orleans, the French Quarter, the rainy humid afternoons, the poker night. Artistic genius, no holds barred.\n[…]\nFilmink argued that the censor-driven changes did not fundamentally change the meaning of Williams' play, in contrast to other adaptations of his work.\n[…]\nAmerican Film Institute recognition"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cat_on_a_Hot_Tin_Roof_%28filme%29",
        "situacao": "ok",
        "texto": "Cat on a Hot Tin Roof (br:  Gata em Teto de Zinco Quente  / pt:  Gata em Telhado de Zinco Quente) é um filme estadunidense de 1958, do gênero drama, dirigido por Richard Brooks. O filme foi baseado na peça homônima, escrita por Tennessee Williams e ganhadora do Prêmio Pulitzer, e adaptado por Richard Brooks e James Poe. A produção é estrelada por Elizabeth Taylor, Paul Newman, Burl Ives, Judith An\n[…]\nBem recebido pela crítica e pelo público, Cat on a Hot Tin Roof foi o lançamento de maior sucesso da MGM em 1958, e tornou-se o terceiro filme de maior bilheteria daquele ano.\n[…]\nBrick (Paul Newman), um ex-famoso jogador de futebol americano, agora alcoólico pela vergonha, nega sua bela esposa (Elizabeth Taylor), a quem culpa, por causa de um incidente com seu amigo de campo Skipper, de ter abandonado sua carreira profissional.\n[…]\nElizabeth Taylor.... Maggie Pollitt (a Gata)\n[…]\nVaughn Taylor.... Deacon Davis\n[…]\nCat on a Hot Tin Roof no IMDb\n[…]\n«Sinopse e ficha técnica do filme «Gata em Telhado de Zinco Quente»»\n[…]\n«Ficha técnica e comentários sobre o filme»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Sônia Braga",
      "descricao": "Atriz brasileira de Dona Flor e Seus Dois Maridos e O Beijo da Mulher Aranha."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que atriz brasileira viveu no cinema duas heroínas de Jorge Amado, Dona Flor e Gabriela?",
    "resposta": "Sônia Braga",
    "fonte": [
      "https://en.wikipedia.org/wiki/S%C3%B4nia_Braga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/S%C3%B4nia_Braga",
        "situacao": "ok",
        "texto": "Sônia Maria Campos Braga (Brazilian Portuguese: [ˈsonjɐ maˈɾi.ɐ ˈkɐ̃puz ˈbɾaɡɐ]; born 8 June 1950) is a Brazilian actress. She is known in the English-speaking world for her Golden Globe Award–nominated performances in Kiss of the Spider Woman (1985) and Moon over Parador (1988). She also received a BAFTA Award nomination in 1981 for Dona Flor and Her Two Husbands (first released in 1976).\n[…]\nSônia Braga was born on June 8, 1950, She is daughter of Hélio Fernando Ferraz Braga and Maria Braga Jaci Campos, a costume designer from Maringá. Sônia's siblings are Júlio, Ana, Hélio, and Maria. Sônia is the aunt of Alice Braga, an actress. Her parents and her four siblings moved to Curitiba and then to Campinas, São Paulo. When Braga was 8 years old, her father died, and she attended a convent school in São Paulo.\n[…]\nIn 1975, Braga starred in the telenovela Gabriela, an adaptation of Jorge Amado's novel Gabriela, Clove and Cinnamon. Directed by Walter Avancini, the soap opera was a great national and international success, establishing her as a sex symbol. Braga returned to embody another Jorge Amado character, starring in the 1976 film Dona Flor and Her Two Husbands directed by Bruno Barreto, alongside José Wilker and Mauro Mendonça.\n[…]\nDuring the 1980s, Braga also had a relationship with actor Robert Redford, She then had a relationship with Pat Metheny, and with singer Caetano Veloso, who wrote \"Trem das Cores\" based on her.\n[…]\nIn August 2016, Braga revealed in an interview with the Brazilian Elle that she never intended to have children due to professional ambitions. She underwent four abortions, the first after her first sexual relationship at the age of 17; which led to a severe hemorrhage followed by a uterine infection that nearly killed her.\n[…]\nSônia Braga at IMDb\n[…]\nSonia Braga at Yahoo! Movies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%B4nia_Braga",
        "situacao": "ok",
        "texto": "Sônia Maria Campos Braga (Maringá, 8 de junho de 1950)  é uma atriz, cantora, apresentadora e produtora brasileira, naturalizada estadunidense. Após construir uma carreira bem-sucedida no Brasil, mudou-se para o exterior, onde se destacou no mercado internacional, tendo sido indicada aos prêmios Golden Globes, BAFTA, e Emmy.\n[…]\nNo entanto, foi a partir de 1975 que Braga ganhou destaque na mídia e foi alçada ao posto de sex symbol ao interpretar a protagonista Gabriela na telenovela homônima, de grande sucesso — papel que viria a interpretar novamente na versão cinematográfica da obra de Jorge Amado em 1983.\n[…]\nAos 14 anos, Sônia Braga foi convidada pelo diretor Vicente Sesso para fazer teleteatros e programas infantojuvenis no programa Jardim Encantado. Depois disso, ela se integrou a um grupo teatral que se apresentava na região do ABC Paulista. Aos 17 anos, estreou na peça O Marido Confundido – George Dandin, em Santo André. Em 1968, aos 18 anos, participou da montagem brasileira de Hair, onde causou escândalo ao aparecer nua em cena.\n[…]\nA carreira de Sônia Braga ganhou novas proporções em 1975, quando protagonizou a telenovela Gabriela. No papel-título, Braga \"tomou o Brasil, tornando-se um nome conhecido\", como observaram Sue Branford e David Treece no jornal britânico The Guardian. A telenovela, baseada na obra de um dos mais conhecidos escritores brasileiros, Jorge Amado, atingiu uma das maiores audiências de sua época, com uma média de 25 milhões de pessoas.\n[…]\nSônia Braga alcançou reconhecimento internacional por seu papel em O Beijo da Mulher Aranha (1985), filme do argentino naturalizado brasileiro Héctor Babenco, baseado no romance de Manuel Puig. O filme se tornou um dos lançamentos mais aclamados do ano, e a atriz coestreou ao lado de William Hurt, que venceu o Oscar de Melhor Ator.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Wagner Moura",
      "descricao": "Ator e cineasta brasileiro, protagonista de Tropa de Elite."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que ator baiano viveu o Capitão Nascimento no cinema e o traficante colombiano Pablo Escobar na série Narcos?",
    "resposta": "Wagner Moura",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wagner_Moura"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wagner_Moura",
        "situacao": "ok",
        "texto": "Wagner Maniçoba de Moura ( VAHG-nər MOR-ə, MOHR-ə; Portuguese pronunciation: [ˈvaɡneʁ mɐ̃niˈsɔbɐ dʒi ˈmowɾɐ]; born June 27, 1976) is a Brazilian actor and filmmaker. His accolades include a Golden Globe, a Cannes Film Festival Award, and five Brazilian Academy Film Awards, in addition to nominations for an Academy Award, an Annie Award, and two Critics' Choice Award. Time magazine named him one of\n[…]\nWagner Moura was born in Salvador and raised in Rodelas, 540 kilometres (340 mi) from the capital. His father was in the military so the family, including his mother and his younger sister Lediane (who now works as a pediatrician), became used to moving around. His relationship with acting started thanks to a schoolmate who had a passion for the arts.\n[…]\nThe film Elysium (2013) marked his Hollywood debut, portraying Spider. Moura got the role after his agents showed his work in Elite Squad 2 to the producers.\n[…]\nIn 2015, Moura starred as Colombian drug lord Pablo Escobar in Narcos. Moura learned to speak Spanish while preparing for his role. He also had to gain over 18 kilograms (40 pounds). After the second season, he decided to lose the weight through an all-vegan diet. His performance was praised by critics. For the role, Moura was nominated for the Golden Globe Award for Best Actor – Television Series Drama.\n[…]\nIn 2019, he starred as Juan Pablo Roque in Wasp Network, directed by Olivier Assayas.\n[…]\nMoura's native language is Portuguese, but he also speaks English and Spanish fluently. He did not speak Spanish prior to his casting as Pablo Escobar in Narcos, and spent several weeks in Medellín, Colombia learning the language to prepare for the role. He practices Transcendental Meditation, Muay Thai and Brazilian Jiu-Jitsu. In December 2023, Moura was promoted to brown belt in Brazilian Jiu-Jitsu by Rigan Machado.\n[…]\nWagner Moura at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wagner_Moura",
        "situacao": "ok",
        "texto": "Wagner Maniçoba de Moura (Salvador, 27 de junho de 1976) é um ator, diretor, roteirista, produtor e músico brasileiro. Reconhecido por suas atuações em filmes e séries nacionais e internacionais, é um dos atores brasileiros mais aclamados fora do país.\n[…]\nWagner Moura tem um perfil político marcadamente de esquerda, defendendo publicamente ativismo e movimentos sociais tais como o Movimento dos Trabalhadores Rurais sem Terra (MST). Em entrevista ao Roda Viva, relata que seus trabalhos cinematográficos, em particular os de direção, são diretamente influenciados por seu posicionamento político. Por conta disso, relata sofrer ataques de militantes opostos no espectro, tais como bolsonaristas.\n[…]\nEm 2012, foi o vocalista convidado para o \"MTV ao vivo Tributo à Legião Urbana\" realizado no Espaço das Américas (SP) e transmitido ao vivo pela própria MTV. Wagner Moura não escondia a satisfação, pois o mesmo afirmou em várias entrevistas ser grande fã da banda.\n[…]\nEm agosto do mesmo ano, Narcos estreou na Netflix, com Wagner interpretando o traficante de drogas colombiano Pablo Escobar. A atuação foi elogiada pela crítica americana, e lhe rendeu uma indicação ao Globo de Ouro 2016. No geral, a série foi muito bem aceita por público e especialistas, apesar de críticas ao sotaque espanhol do ator como o ponto negativo.\n[…]\nEm 2025, o ator Wagner Moura protagonizou o filme O Agente Secreto, dirigido por Kleber Mendonça Filho. Ambientado no Recife durante a década de 1970, o longa conta a história de Marcelo, um especialista em tecnologia que retorna à sua cidade natal em busca de paz, mas acaba confrontado por segredos do passado e pela repressão do regime militar.\n[…]\nEntrevista de Wagner Moura à Revista TPM",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "O Rei Leão (filme de 1994)",
      "descricao": "Animação da Disney de 1994 sobre o leão Simba, herdeiro do trono das Terras do Reino."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A trama de O Rei Leão, em que um tio mata o rei para tomar o trono do sobrinho, é comparada a qual tragédia de Shakespeare?",
    "resposta": "Hamlet",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Lion_King"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Lion_King",
        "situacao": "ok",
        "texto": "The Lion King is a 1994 American animated musical drama film directed by Roger Allers and Rob Minkoff and written by Irene Mecchi, Jonathan Roberts, and Linda Woolverton. Produced by Walt Disney Feature Animation, it features an ensemble voice cast consisting of Matthew Broderick, James Earl Jones, Jeremy Irons, Jonathan Taylor Thomas, Moira Kelly, Niketa Calame, Madge Sinclair, Nathan Lane, Ernie\n[…]\nThe Lion King's plot draws inspiration from several sources, notably William Shakespeare's play Hamlet, as well as the Bible. Woolverton, screenwriter for Disney's Beauty and the Beast (1991), drafted early versions of The Lion King's script, which Mecchi and Roberts were hired to revise once Woolverton left to prioritize other projects.\n[…]\nHowever, they felt it was too forced, and looked to other heroic archetypes such as the stories of Joseph and Moses from the Bible. Aside from Disney's prior anthology films and The Rescuers Down Under (1990) (a sequel to The Rescuers (1977)), The Lion King was Disney's second animated feature film to feature an original story conception after The Aristocats (1970), although the final product was heavily modelled on Hamlet, Joseph and Moses.\n[…]\nRoger Ebert of the Chicago Sun-Times gave the film three and a half stars out of a possible four and called it \"a superbly drawn animated feature\". He further wrote in his print review, \"The saga of Simba, which in its deeply buried origins owes something to Greek tragedy and certainly to Hamlet, is a learning experience as well as an entertainment.\" On the television program Siskel & Ebert, the film was praised but received a mixed reaction when compared to previous Disney films.\n[…]\nThe Lion King at the AFI Catalog of Feature Films\n[…]\nThe Lion King at IMDb\n[…]\nThe Lion King at the TCM Movie Database (archived)\n[…]\nThe Lion King at Disney A to Z"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Rei_Le%C3%A3o",
        "situacao": "ok",
        "texto": "The Lion King (bra/prt: O Rei Leão) é o 32.º longa-metragem animado produzido pela Walt Disney Feature Animation e pela Walt Disney Pictures e distribuído pela Buena Vista Pictures. Foi dirigido por Roger Allers e Rob Minkoff, com roteiro creditado a Linda Woolverton, Irene Mecchi e Jonathan Roberts, e música de Elton John com letras de Tim Rice.\n[…]\nRoger Ebert deu-lhe 3.5 de 4 estrelas e o chamou de \"um filme de animação soberbamente desenhado\" e, em sua crítica, escreveu: \"A saga de Simba, que em suas origens profundamente enterradas deve algo a tragédia grega e certamente a Hamlet, é uma experiência de aprendizagem, bem como um entretenimento.\" No programa de televisão Siskel & Ebert, o filme foi elogiado, mas recebeu uma recepção mista em relação aos filmes anteriores da Disney.\n[…]\nBeyoncé, dubladora de Nala nessa versão, gravou um álbum conceitual baseado no filme, The Lion King: The Gift, que por sua vez rendeu um filme entitulado Black Is King (2020). Em 2024, a refilmagem ganhou uma prequela dirigida por Barry Jenkins, Mufasa: O Rei Leão.\n[…]\nO Rei Leão inspirou duas atrações que recontam a história do filme nos Walt Disney Parks and Resorts. O primeiro, \"The Legend of the Lion King\", contou com uma recriação do filme através de marionetes de tamanho real de seus personagens, e ficou entre 1994-2002 no Magic Kingdom, em Walt Disney World.\n[…]\nJunto com o lançamento do filme, três jogos diferentes com base em O Rei Leão foram liberados pela Virgin Interactive em dezembro de 1994. O jogo principal, The Lion King foi desenvolvido pela Westwood Studios, e publicado para computadores e os consoles Super NES e Mega Drive pela Virgin Entertainment. Darks Technologies criou a versão de Game Boy, enquanto a Syrox Developments fez a versão do Master System e Game Gear.[carece de fontes]?\n[…]\nHamlet\n[…]\nThe Lion King\n[…]\nSite Brasileiro do Rei Leão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Dalton Trumbo",
      "descricao": "Roteirista americano incluído na lista negra de Hollywood, autor dos roteiros de A Princesa e o Plebeu e Spartacus."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos cinquenta, o roteirista Dalton Trumbo ganhou dois Oscars sem poder assinar com o próprio nome. Por que ele precisava se esconder?",
    "resposta": "Estava na lista negra de Hollywood",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dalton_Trumbo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dalton_Trumbo",
        "situacao": "ok",
        "texto": "James Dalton Trumbo (December 9, 1905 – September 10, 1976) was an American screenwriter who scripted many award-winning films, including Thirty Seconds Over Tokyo (1944), Roman Holiday (1953), Spartacus (1960), and Exodus (1960). One of the Hollywood Ten, he refused to testify before the House Un-American Activities Committee (HUAC) in 1947 during the committee's investigation of Communist influe\n[…]\nWilliam R. Wilkerson, publisher and founder of The Hollywood Reporter, published a July 29, 1946, \"TradeView\" column entitled \"A Vote For Joe Stalin\". It named Trumbo and several others as Communist sympathizers, the first persons identified on what became known as \"Billy's Blacklist\".\n[…]\nTrumbo served eleven months in the federal penitentiary in Ashland, Kentucky, in 1950. In the 1976 documentary Hollywood On Trial, Trumbo said: \"As far as I was concerned, it was a completely just verdict. I had contempt for that Congress and have had contempt for it ever since. And on the basis of guilt or innocence, I could never really complain very much. That this was a crime or misdemeanor was the complaint, my complaint.\"\n[…]\nIn 1938, Trumbo married Cleo Fincher, who was born in Fresno, California, on July 17, 1916, and had moved with her divorced mother and her brother and sister to Los Angeles. The Trumbos had three children: Nikola Trumbo (1939–2018), who became a psychotherapist; Christopher Trumbo (1940–2011), a filmmaker and screenwriter who became an expert on the Hollywood blacklist; and Melissa Trumbo (1945), known as Mitzi, a photographer.\n[…]\nHanson, Peter (2007). Dalton Trumbo, Hollywood Rebel: A Critical Survey and Filmography. McFarland. ISBN 978-0-7864-3246-2.\n[…]\nCeplair, Larry (2015). Dalton Trumbo, Blacklisted Hollywood Radical. University Press of Kentucky. ISBN 978-0-8131-4680-5.\n[…]\nDalton Trumbo at IMDb\n[…]\n\"Life and Career of Dalton Trumbo\", C-SPAN, July 9, 2015"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dalton_Trumbo",
        "situacao": "ok",
        "texto": "James Dalton Trumbo (Montrose, Colorado, 9 de dezembro de 1905 – Los Angeles, Califórnia, 10 de setembro de 1976) foi um roteirista e romancista estadunidense, e membro do Hollywood Ten, um grupo de profissionais da indústria cinematográfica que se recusou a testemunhar perante uma comissão parlamentar de inquérito montada em 1947 pela Câmara dos Representantes dos Estados Unidos para averiguar a \n[…]\nTrumbo foi membro do Partido Comunista dos Estados Unidos de 1943 até 1948. Ele declarou no jornal oficial do partido, o The Daily Worker, que dentre as produções que os comunistas conseguiram cancelar em Hollywood estavam adaptações de dois romances antistalinista de Arthur Koestler (O Zero e o Infinito e The Yogi and the Commissar).\n[…]\nApós ser condenado por desobediência civil ao Congresso dos Estados Unidos, ele passou a integrar a primeira lista negra de Hollywood e passou onze meses em uma prisão federal em Ashland, Kentucky.\n[…]\nApós Trumbo ter entrado na lista negra, alguns atores e diretores de Hollywood, como Elia Kazan e Clifford Odets, concordaram em depor e fornecer ao Congresso os nomes dos companheiros de partido. Muitos que testemunharam contra os companheiros de profissão logo caíram no ostracismo e passaram a ser evitados pelos ex-colegas.\n[…]\nCom o apoio do diretor Otto Preminger, Trumbo recebeu crédito pelo filme de 1960 Exodus. Logo em seguida, Kirk Douglas tornou público que Trumbo escreveu o roteiro de Spartacus. Isto marcava o início do fim da lista negra para o roteirista. Trumbo foi reintegrado ao Writers Guild of America - West, o sindicato dos roteiristas de Hollywood, e passou a ser creditado em todos os roteiros seguintes que escreveu, tais como Lonely Are the Brave (1962), The Sandpiper (1965) e Hawaii (1966).\n[…]\n1970: Additional Dialogue: Letters of Dalton Trumbo, 1942–62 (organizado por H. Manfull)\n[…]\nDalton Trumbo no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Náufrago",
      "descricao": "Filme de 2000 dirigido por Robert Zemeckis, com Tom Hanks como um funcionário de entregas isolado numa ilha deserta."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As filmagens de Náufrago, com Tom Hanks, foram interrompidas por cerca de um ano no meio da produção. Qual era o motivo?",
    "resposta": "Tom Hanks precisava emagrecer",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cast_Away"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cast_Away",
        "situacao": "ok",
        "texto": "Cast Away is a 2000 American survival drama film directed and co-produced by Robert Zemeckis, written by William Broyles Jr. and starring Tom Hanks, Helen Hunt, and Nick Searcy. Hanks plays a FedEx troubleshooter who is stranded on a deserted island after his plane crashes in the South Pacific, and the plot focuses on his desperate attempts to survive and return home. Filming took place from Janua\n[…]\nIn a 2017 Actor Roundtable with The Hollywood Reporter, Tom Hanks stated\n[…]\nAnother four-month production halt preceded the filming of the return scenes. During the year-long hiatus, Zemeckis used the same film crew to make another film, What Lies Beneath. While the film was in production, Hanks nearly died when he suffered an infected cut on his leg. He was rushed to a local hospital to undergo surgery and stayed there for three days. Filming of Cast Away was suspended for three weeks to allow Hanks to recover from the injury. Filming lasted for sixteen months.\n[…]\nOn Rotten Tomatoes, Cast Away holds an approval rating of 88% based on 156 reviews, with an average rating of 7.6/10. The site's critical consensus reads, \"Flawed but fascinating, Cast Away offers an intelligent script, some of Robert Zemeckis' most mature directing, and a showcase performance from Tom Hanks.\" On Metacritic, the film has a weighted average score of 74 out of 100 based on reviews from 32 critics, indicating \"generally favorable\" reviews.\n[…]\nThe second episode of the seventh season of It's Always Sunny in Philadelphia, \"The Gang Goes to the Jersey Shore\", refers to a Cast Away scene. When Frank loses his \"rum ham\" while floating on a raft in the Atlantic Ocean, his anguish resembles that of Tom Hanks' character losing Wilson the volleyball.\n[…]\nOn April 15, 2022, at Progressive Field, Tom Hanks threw the ceremonial first pitch at the Cleveland Guardians home opener, accompanied by a replica of Wilson from the movie."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cast_Away",
        "situacao": "ok",
        "texto": "Cast Away (bra: Náufrago; prt: Cast Away – O Náufrago ou O Náufrago) é um filme dramático de sobrevivência americano de 2000 dirigido e produzido por Robert Zemeckis e estrelado por Tom Hanks, Helen Hunt e Nick Searcy. Narra a história de um empregado da FedEx que sofre um acidente aéreo e vai parar numa ilha deserta no Pacífico Sul. A trama se concentra em suas tentativas desesperadas de sobreviv\n[…]\nEm uma mesa redonda de atores de 2017 com o The Hollywood Reporter, Tom Hanks declarou:\n[…]\nNo Rotten Tomatoes, Cast Away detém um índice de aprovação de 89% com base em 157 avaliações, com uma classificação média de 7,40/10. O consenso crítico do site diz: \"Falha, mas fascinante, Cast Away oferece um roteiro inteligente, parte da direção mais madura de Robert Zemeckis e uma apresentação de demonstração de Tom Hanks.\" No Metacritic, o filme tem uma pontuação média ponderada de 73 de 100 com base em análises de 32 críticos, indicando \"análises geralmente favoráveis\".\n[…]\nEm sua revisão, ele elogiou Hanks por fazer \"um trabalho excelente de afastar Cast Away sozinho por cerca de dois terços de seu tempo de execução\" por \"nunca se esforçar para ter efeito, sempre persuasivo mesmo nesta situação improvável, ganhando nossa simpatia com seu olhos e sua linguagem corporal quando não há mais ninguém na tela.\" No entanto, ele também mencionou como sentiu que o filme é \"uma história forte e simples, cercada por complicações desnecessárias e falha por um último ato que nos decepciona e termina com uma nota de capricho forçado.\"\n[…]\nO segundo episódio da sétima temporada de It's Always Sunny in Philadelphia, \"The Gang Goes to the Jersey Shore\" faz referência a uma das cenas mais famosas de Cast Away. Quando Frank, flutuando em uma jangada no Oceano Atlântico, perde seu “presunto de rum”; sua angústia lembra a do personagem de Tom Hanks perdendo uma bola de vôlei que ele chamou de \"Wilson\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Rio, 40 Graus",
      "descricao": "Filme brasileiro de 1955 dirigido por Nelson Pereira dos Santos, precursor do Cinema Novo, sobre um domingo no Rio de Janeiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1955, o filme Rio, Quarenta Graus foi proibido pelo chefe de polícia da cidade. Que justificativa curiosa ele deu?",
    "resposta": "O Rio nunca chegava a quarenta graus",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio,_40_Graus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio,_40_Graus",
        "situacao": "ok",
        "texto": "Rio, 40 graus é um filme brasileiro de 1955, com roteiro e direção de Nelson Pereira dos Santos. Em novembro de 2015 o filme entrou na lista feita pela Associação Brasileira de Críticos de Cinema (Abraccine) dos 100 melhores filmes brasileiros de todos os tempos. Foi listado por Jeanne O Santos, do Cinema em Cena, como \"clássicos nacionais\".\n[…]\nÉ considerada a obra inspiradora do cinema novo, movimento estético e cultural que pretendia mostrar a realidade brasileira. O filme foi censurado pelos militares, que o consideraram uma grande mentira. Segundo o censor e chefe de polícia da época, \"a média da temperatura do Rio nunca passou dos 39,6 °C\".[carece de fontes]? O tema do filme é o samba A Voz do Morro, de Zé Keti, que também atuou como ator no filme, interpretando o personagem Neguinho.\n[…]\nO filme é um semidocumentário sobre pessoas do Rio de Janeiro e acompanha um dia na vida de cinco garotos de uma favela que, num domingo tipicamente carioca e de sol escaldante, vendem amendoim em Copacabana, no Pão de Açúcar e no Maracanã."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Psicose",
      "descricao": "Filme de suspense de 1960 dirigido por Alfred Hitchcock, famoso pela cena do assassinato no chuveiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Antes de filmar Psicose, Hitchcock mandou comprar o maior número possível de exemplares do romance original. Para quê?",
    "resposta": "Para manter o final em segredo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Psycho_(1960_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Psycho_(1960_film)",
        "situacao": "ok",
        "texto": "Psycho is a 1960 American horror thriller film produced and directed by Alfred Hitchcock. The screenplay, written by Joseph Stefano, is based on the 1959 novel by Robert Bloch. The film stars Anthony Perkins, Janet Leigh, Vera Miles, John Gavin, and Martin Balsam. The plot centers on an encounter between on-the-run embezzler Marion Crane (Leigh), shy motel proprietor Norman Bates (Perkins), and hi\n[…]\nThrough the strength of his reputation, Hitchcock cast Leigh for a quarter of her usual fee, paying only $25,000 (in the 1967 book Hitchcock/Truffaut, Hitchcock said that Leigh owed Paramount one final film on her seven-year contract which she had signed in 1953). His first choice, Leigh agreed having only read the novel and making no inquiry into her salary. Her co-star Anthony Perkins agreed to $40,000. Both stars were experienced and proven box-office draws.\n[…]\nHitchcock was uncharacteristically forced to do retakes for some scenes. The final shot in the shower scene, which starts with an extreme close-up on Marion's eye and zooms in and out, proved difficult for Leigh because the water splashing in her eyes made her want to blink, and the cameraman had trouble as well because he had to manually focus while moving the camera. Retakes were required for the opening scene because Hitchcock felt that Leigh and Gavin were not passionate enough.\n[…]\nThree sequels were produced after Hitchcock died: Psycho II (1983), Psycho III (1986), and Psycho IV: The Beginning (1990), the last being a part-prequel television movie written by the original screenplay author, Joseph Stefano. Anthony Perkins returned to his role of Norman Bates in all three sequels, and directed the third film. The voice of Norman Bates' mother was maintained by noted radio actress Virginia Gregg with the exception of Psycho IV, where the role was played by Olivia Hussey.\n[…]\nPsycho and Bernard Herrmann film score"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Psycho",
        "situacao": "ok",
        "texto": "Psycho (bra: Psicose; prt: Psico) é um filme de suspense e terror psicológico estadunidense de 1960 produzido e dirigido por Alfred Hitchcock. Seu roteiro, escrito por Joseph Stefano, foi baseado no romance homônimo de 1959 de Robert Bloch. O filme é estrelado por Anthony Perkins, Janet Leigh, Vera Miles, John Gavin e Martin Balsam.\n[…]\nEm seguida teria ordenado Robertson a comprar todas as cópias impressas do mesmo disponíveis no mercado para preservar surpresas do romance, principalmente seu final.\n[…]\nPela força de sua reputação, Hitchcock escalou Leigh por um quarto de seu cachê normal, pagando apenas US$ 25 000 (no livro Hitchcock/Truffaut de 1967, Hitchcock disse que Leigh devia à Paramount um filme final em seu contrato de sete anos que ela havia assinado em 1953); sendo sua primeira escolha, Leigh concordou em apenas ler o romance e não fazer nenhuma pergunta sobre seu salário. Sua co-estrela, Anthony Perkins, concordou em receber US$ 40 000.\n[…]\nNo final de tudo, eles concordaram em aprovar o filme depois que o diretor removeu uma cena que mostrava as nádegas de Marion. Os censores também ficaram descontentes com a cena de abertura mostrando Marion e Sam namorando, então Hitchcock disse que se o deixassem ficar com a cena do chuveiro ele filmaria novamente a abertura com os censores no set; como os membros do conselho Hays não compareceram para a refilmagem, a abertura permaneceu.\n[…]\nEscrevendo para o The Buffalo News, a crítica Jeanette Eichel observou que \"Alfred Hitchcock, mestre do mistério, funde medo e suspense em seu show de arrepios e choques chamado Psycho. Seu orgulho é que ele não decepciona o público enganando-o. Suas pistas são honestas e poucas pessoas adivinham o resultado. Ele pediu especialmente em um epílogo que os espectadores não contassem o final\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Cinecittà",
      "descricao": "Grande complexo de estúdios de cinema da Itália, inaugurado em 1937, onde Federico Fellini rodou muitos de seus filmes."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade fica a Cinecittà, o enorme complexo de estúdios onde Federico Fellini rodou boa parte de seus filmes?",
    "resposta": "Roma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cinecitt%C3%A0"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cinecitt%C3%A0",
        "situacao": "ok",
        "texto": "Cinecittà (pronounced [ˌtʃinetʃitˈta]; Italian for 'Cinema City') is a large film studio in Rome, Italy. With an area of 400,000 square metres (99 acres), it is the largest film studio in Europe, and is considered the hub of Italian cinema. The studios were constructed during the Fascist era as part of a plan to revive the Italian film industry and to compete with Hollywood.\n[…]\nFilmmakers such as Federico Fellini, Roberto Rossellini, Luchino Visconti, Sergio Leone, Bernardo Bertolucci, Francis Ford Coppola, Martin Scorsese, Mel Gibson and Luca Guadagnino have worked at Cinecittà. More than 3,000 movies have been filmed there, of which 90 received an Academy Award nomination and 47 of these won it. In the 1950s, the number of international productions being made there led to Rome being dubbed \"Hollywood on the Tiber\".\n[…]\nBarker also featured in Federico Fellini's La Dolce Vita (1960) and the studios were for many years closely associated with Fellini.\n[…]\nCinecittà also hosts TV productions, such as Grande Fratello, the Italian version of Big Brother, where the Big Brother house is built on Cinecittà's premises. The complex also hosted the Eurovision Song Contest 1991.\n[…]\nThe new strategic and ambitious plan sets an unprecedented benchmark for Cinecittà's production capacity. Due to Investments from the PNRR, the construction of five new sound stages and the complete renovation of four technologically advanced stages will be completed by June 2026. This expansion will increase the total number of stages from 20 to 25, boosting production capacity by 25%.\n[…]\nCinecittà metro station\n[…]\nHistory of Cinecittà Archived 2009-05-01 at the Wayback Machine\n[…]\nRAI International:Cinecittà\n[…]\nDocuments Cinecitta'  Archived 2020-07-28 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cinecitt%C3%A0",
        "situacao": "ok",
        "texto": "Cinecittà [tʃinetʃitˈta] é um complexo de teatros e estúdios situados na periferia oriental de Roma (cerca de 9 km de distância) responsável pela maior parte da produção cinematográfica italiana: aí vários filmes são rodados e espetáculos televisivos são gravados.\n[…]\nOs estúdios foram uma ideia e realização do regime fascista. As obras começaram em 26 de janeiro de 1936 e somente quinze meses depois, em 28 de abril de 1937, ocorreu a inauguração. Entre 1937 e 1943 foram rodados cerca de trezentos filmes, mostrando a vitalidade da produção cinematográfica italiana da época. Em 1940, com a permissão do ditador espanhol Francisco Franco e do italiano Benito Mussolini, foi rodado o filme Sin novedad en el Alcázar!, recebendo o Prêmio Mussolini.\n[…]\nDepois da Segunda Guerra Mundial a produção retomou lentamente seu ritmo, mas foi nos anos 1950 que Cinecittà estabeleceu-se com um dos estúdios cinematográficos mais importantes do mundo, com as películas estadunidenses Quo Vadis de Mervyn LeRoy (1951) e Ben-Hur de William Wyler (1959). Este boom teve origem na competitividade econômica dos estúdios romanos, que receberam o título informal de \"Hollywood no Tibre\".\n[…]\n«www.cinecitta.com». (filmografia essencial das produções realizadas nos estúdios da Cinecittà)\n[…]\n«Cinecittà Studios»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Mamma Mia! (filme)",
      "descricao": "Filme musical de 2008 com Meryl Streep, baseado no musical de teatro com canções do grupo ABBA."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O musical Mamma Mia!, de 2008, embalado pelas canções do ABBA, teve cenas externas filmadas em ilhas de qual país?",
    "resposta": "Grécia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mamma_Mia!_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mamma_Mia!_(film)",
        "situacao": "ok",
        "texto": "Mamma Mia! (promoted as Mamma Mia! The Movie) is a 2008 jukebox musical romantic comedy film directed by Phyllida Lloyd and written by Catherine Johnson, based on her book from the 1999 musical. The film features an ensemble cast, including Meryl Streep, Pierce Brosnan, Colin Firth, Stellan Skarsgård, Julie Walters, Dominic Cooper, Amanda Seyfried, and Christine Baranski.\n[…]\nPrincipal photography primarily took place on the Greek island of Skopelos from August to September 2007, with ABBA members Benny Andersson and Björn Ulvaeus composing the film's score. Mamma Mia! premiered at the Leicester Square in London on June 30, 2008, before being released in the United Kingdom on July 10, and in the United States on July 18, by Universal Pictures.\n[…]\nIn the United States, the DVD made over $30 million on its first day of release. Mamma Mia! was released on DVD and Blu-ray on December 16, 2008. By December 31, 2008, Mamma Mia! became the bestselling DVD of all time in Sweden with 545,000 copies sold.\n[…]\nIts records have since been surpassed by Bill Condon's Beauty and the Beast, Patty Jenkins' Wonder Woman (both 2017), and Jon M. Chu's Wicked (2024), respectively. Mamma Mia! was additionally the third highest-grossing film of 2008 internationally, with a cume of $458.4 million, and the thirteenth-highest-grossing film of 2008 in North America, with $144.1 million.\n[…]\nThe film made $9.6 million on its opening day in the United States and Canada, as well as $27.6 million on its opening weekend, ranking #2 at the box office, behind The Dark Knight. At the time, it made Mamma Mia! the record-holder for the highest grossing opening weekend for a movie based on a Broadway musical, surpassing Hairspray's box office record in 2007 and later surpassed by Into the Woods. In the United Kingdom, Mamma Mia!\n[…]\nMamma Mia! at Rotten Tomatoes\n[…]\nMamma Mia! at the British Film Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mamma_Mia%21_%28filme%29",
        "situacao": "ok",
        "texto": "Este artigo é sobre o filme musical. Para a peça musical, veja Mamma Mia!. Para outros significados, veja Mamma Mia (desambiguação).\n[…]\nMamma Mia! é um filme musical de 2008, uma adaptação ao cinema da peça musical homónima, realizado por Phyllida Lloyyd e escrito por Benny Andersson e Björn Ulvaeus. A peça foi criada uma década antes por Catherine Johnson. Tanto o filme como o musical foram baseados nas canções do grupo pop sueco ABBA que fez e faz sucesso no mundo todo.\n[…]\nO filme, cujo título deriva da famosa canção de 1975 \"Mamma Mia\", foi produzido pelos Universal Studios em conjunto com a empresa de Tom Hanks Playtone e a Littlestar. Foi lançado em 3 de Julho na Grécia e em 18 de Julho nos Estados Unidos. Em Portugal estreou em 4 de Setembro e no Brasil a 12 do mesmo mês.\n[…]\nA maioria das cenas externas foi filmada em locações nas pequenas ilhas gregas de Skopelos e Skiathos, na Tessália (entre 29 de agosto e setembro de 2007), e no vilarejo costeiro de Damouchari, na região de Pelion, na Grécia. Em Skopelos, a praia de Kastani, na costa sudoeste, foi o principal local de filmagem do longa. Os produtores construíram um bar de praia e um píer ao longo da praia, mas removeram ambas as peças do cenário após o encerramento da produção.\n[…]\nHarry Bright (Colin Firth): Banqueiro britânico, outro dos possíveis pais de Sophie, se revela gay no final do filme.\n[…]\nNational Movie Awards 2008\n[…]\nVenceu na categoria de \"Melhor Filme Musical\"\n[…]\nIndicado na categoria de \"melhor filme - comédia/musical\"\n[…]\nIndicado na categoria de \"melhor atriz - comédia/musical\" - Meryl Streep\n[…]\nMamma Mia! no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Nollywood",
      "descricao": "Apelido da indústria cinematográfica da Nigéria, uma das mais produtivas do mundo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Assim como Bollywood é o cinema indiano, o apelido Nollywood designa a indústria de cinema de qual país africano?",
    "resposta": "Nigéria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nollywood"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nollywood",
        "situacao": "ok",
        "texto": "Nollywood, a portmanteau of Nigeria and Hollywood, is a sobriquet that originally referred to the Nigerian film industry. The origin of the term goes back to the early 2000s, traced to an article in The New York Times. Due to the history of evolving meanings and contexts, there is no clear or agreed-upon definition for the term, which has made it a subject of several controversies.\n[…]\nOver the years, the term Nollywood has also been used to refer to other affiliated film industries, such as the Ghanaian English-language cinema, whose films are usually co-produced with Nigeria and/or distributed by Nigerian companies. The term has also been used for Nigerian/African diaspora films considered to be affiliated with Nigeria or made specifically to capture the Nigerian audience. There is no clear definition on how \"Nigerian\"  film has to be in order to be referred to as Nollywood.\n[…]\nThe 1990s saw a dramatic change in the Northern Nigerian cinema, which was eager to draw the Hausa population who found Bollywood movies more attractive; a cinematic synthesis of Indian and Hausa culture evolved and became extremely popular. Turmin Danya (\"The Draw\"), 1990, is usually cited as the first commercially successful Kannywood film. It was quickly followed by others like Gimbiya Fatima and Kiyarda Da Ni.\n[…]\nOver the years the term Nollywood has also been used to refer to other affiliate film industries, such as the Ghanaian English-language cinema. Around the year 2006 through 2007, Nigerian filmmaker Frank Rajah Arase signed a contract with a Ghanaian production company, Venus Films, which involved helping to introduce Ghanaian actors into mainstream Nollywood.\n[…]\nMedia in Nigeria\n[…]\nCinema of Africa\n[…]\nNollywood : Nigeria's Prolific Film Industry : The Hollywood of Africa\n[…]\nThe Tragic Rise of Nollywood Documentary"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Sapatinhos de rubi",
      "descricao": "Sapatos mágicos vermelhos usados por Dorothy, personagem de Judy Garland, no filme O Mágico de Oz, de 1939."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Para voltar para casa, no Kansas, quantas vezes Dorothy bate os calcanhares dos sapatinhos de rubi?",
    "resposta": "Três",
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
      "nome": "Rebeldia Indomável",
      "descricao": "Filme americano de 1967 com Paul Newman como Luke, um prisioneiro rebelde num campo de trabalhos forçados."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Rebeldia Indomável, de 1967, o presidiário vivido por Paul Newman aposta que consegue comer quantos ovos cozidos em uma hora?",
    "resposta": "Cinquenta",
    "distratores": [
      "Vinte",
      "Trinta",
      "Cem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cool_Hand_Luke"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cool_Hand_Luke",
        "situacao": "ok",
        "texto": "Cool Hand Luke is a 1967 American prison drama film directed by Stuart Rosenberg, written by Donn Pearce and Frank Pierson, and starring Paul Newman in the title role. The cast also features George Kennedy, J. D. Cannon, Strother Martin and Jo Van Fleet. Based on Pearce's semi-autobiographical 1965 novel, the film is about a nonconformist convict in an early 1950s Florida prison camp who refuses t\n[…]\nCool Hand Luke opened on November 1, 1967, at Loew's State Theatre in New York City. The proceeds of the premiere went to charities. The film was a box-office success, grossing $16,217,773 in domestic screenings.\n[…]\nOn the review aggregator website Rotten Tomatoes, 100% of 56 critics' reviews are positive, with an average rating of 8.8/10. The website's consensus reads: \"Though hampered by Stuart Rosenberg's direction, Cool Hand Luke is held aloft by a stellar script and one of Paul Newman's most indelible performances.\" Metacritic, which uses a weighted average, assigned the film a score of 92 out of 100, based on 16 critics, indicating \"universal acclaim\".\n[…]\nChamplin, Charles (October 30, 1967). \"'Cool Hand Luke', Simple Tale With Truths to Tell\". Los Angeles Times. Vol. 86. Archived from the original on June 3, 2021. Retrieved April 28, 2021 – via Newspapers.com.\n[…]\nClifford, Terry (November 27, 1967). \"Newman Holds Winning Cards Again in 'Cool Hand Luke'\". Chicago Tribune. Vol. 121, no. 331. Archived from the original on June 3, 2021. Retrieved April 28, 2021 – via Newspapers.com.\n[…]\nFilm Daily staff (1967). \"Cool Hand Luke to Open with Benefit November 1\". The Film Daily. Vol. 131. Wid's Films and Film Folk Incorporated.\n[…]\nGuarino, Ann (November 2, 1967). \"Newman Stars in 'Cool Hand Luke'\". New York Daily News. Vol. 49, no. 112. Archived from the original on June 3, 2021. Retrieved April 28, 2021 – via Newspapers.com.\n[…]\nCool Hand Luke at IMDb\n[…]\nCool Hand Luke at the AFI Catalog of Feature Films"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cool_Hand_Luke",
        "situacao": "ok",
        "texto": "Cool Hand Luke (bra: Rebeldia Indomável; prt: O Presidiário) é um drama estadunidense de 1967 dirigido por Stuart Rosenberg. O roteiro de Donn Pearce e Frank Pierson adapta a novela homônima de autoria de Pearce. A trilha sonora do filme é de Lalo Schifrin.\n[…]\nPierson havia incluído simbolismo religioso explícito no rascunho inicial do filme, que contém diversos temas cristãos, incluindo o conceito de São Lucas (Luke, no inglês), que conquista a simpatia das massas e é ultimamente sacrificado. O personagem de Newman é representado como uma figura semelhante a Jesus, no que tange sua redenção. Após ganhar a aposta dos 50 ovos, Luke se deita na mesa, exausto, na mesma posição em que Jesus fora crucificado.\n[…]\nSinais de trânsito são usados ao longo do filme, complementando as ações dos personagens durante as cenas. No início, quando Luke corta a cabeça dos parquímetros, a palavra \"Violation\" (violação, do inglês) aparece em uma placa. Placas de pare também podem ser vistas na cena. Outras instâncias incluem a cena da pavimentação de uma rua e a última cena do filme, em que a as estradas se encontram em uma interseção.\n[…]\nSinaleiras mudam do verde para o vermelho, ao fundo, quando Luke é preso, bem como quando ele é fatalmente machucado, na cena final.\n[…]\nCool Hand Luke venceu o Oscar de melhor ator coadjuvante (George Kennedy). Indicado para melhor ator (Paul Newman), melhor canção original e melhor roteiro adaptado.\n[…]\nEm 2003, o AFI elegeu Luke Jackson como o trigésimo maior herói dos filmes americanos. Em 2007, o filme ficou em 71º na lista dos cem filmes mais inspiradores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "O Iluminado (filme)",
      "descricao": "Filme de terror de 1980 dirigido por Stanley Kubrick, com Jack Nicholson como zelador de um hotel isolado."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No livro O Iluminado, o quarto assombrado do hotel é o duzentos e dezessete. No filme de Kubrick, que número ele ganhou?",
    "resposta": "237",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Shining_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Shining_(film)",
        "situacao": "ok",
        "texto": "The Shining is a 1980 psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson. It is based on Stephen King's 1977 novel and stars Jack Nicholson, Shelley Duvall, Danny Lloyd and Scatman Crothers. The film presents the descent into insanity of a recovering alcoholic and aspiring novelist who takes a job as winter caretaker for a mountain resort \n[…]\nThe room number 217 has been changed to 237. Timberline Lodge, located on Mount Hood in Oregon, was used for the aerial exterior shots of the fictional Overlook Hotel. The Lodge requested that Kubrick not depict Room 217 (featured in the book) in The Shining, because future guests at the Lodge might be afraid to stay there, and a nonexistent room, 237, was substituted in the film. Contrary to the hotel's expectations, Room 217 is requested more often than any other room at Timberline.\n[…]\nFrom Thomas Allen Nelson's Kubrick: Inside a Film Artist's Maze: \"When Jack moves through the reception area on his way to a 'shining' over the model maze, he throws a yellow tennis ball past a stuffed bear and Danny's Big Wheel, which rests on the very spot (a Navajo circle design) where Hallorann will be murdered.\" Jack's tennis ball mysteriously rolls into Danny's circle of toy cars just before the boy walks through the open door of Room 237.\n[…]\nSteven Spielberg, a close friend of Kubrick, included a sequence dedicated to The Shining in the 2018 film Ready Player One when they could not get rights to use Blade Runner for a similar sequence. The Overlook Hotel is recreated, including the Grady sisters, the elevator, room 237, the lady in the bath tub, the ballroom, and the 1921 photo, in addition to using the score the reference. Spielberg considered this inclusion a tribute to Kubrick.\n[…]\nRoom 237, a 2012 documentary about interpretations of The Shining\n[…]\nThe Shining at IMDb\n[…]\nThe Shining at TV Guide"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Shining",
        "situacao": "ok",
        "texto": "The Shining (bra: O Iluminado; prt: Shining) é um filme de terror psicológico de 1980 produzido e dirigido por Stanley Kubrick e co-escrito com a romancista Diane Johnson. O filme é baseado no romance homônimo de Stephen King, de 1977, e estrelado por Jack Nicholson, Shelley Duvall, Scatman Crothers e Danny Lloyd.\n[…]\nO personagem central de The Shining é Jack Torrance (Nicholson), um aspirante a escritor e alcoólatra em recuperação, que aceita uma posição como cuidador de entressafra do isolado histórico Overlook Hotel nas Montanhas Rochosas do Colorado. No inverno, Jack está com sua esposa, Wendy Torrance (Duvall) e o jovem filho Danny Torrance (Lloyd). Danny possui habilidades psíquicas que lhe permitem ver o passado horrível do hotel.\n[…]\nA produção ocorreu quase que exclusivamente nos estúdios da EMI Elstree, com cenários baseados em locais reais. Kubrick costumava trabalhar com uma equipe pequena, o que lhe permitia fazer muitas tomadas, às vezes para o esgotamento dos atores e da equipe. A então nova montagem Steadicam foi usada para filmar várias cenas, dando ao filme uma aparência inovadora e envolvente.\n[…]\nHouve muita especulação sobre os significados e ações do filme por causa de inconsistências, ambiguidades, simbolismo e diferenças em relação ao livro.\n[…]\nA avaliação se tornou mais favorável nas décadas seguintes e agora a obra é amplamente considerada como um dos maiores e mais influentes filmes de terror já feitos. The Shining é amplamente aclamado pelos críticos de hoje e se tornou um ícone da cultura pop. Em 2018, o filme foi selecionado para preservação no National Film Registry pela Biblioteca do Congresso como sendo \"significativo culturalmente, historicamente ou esteticamente\".\n[…]\nThe Shining no IMDb\n[…]\n«The Shining» (em inglês)  no Rotten Tomatoes\n[…]\n«The Shining» (em inglês). no Metacritic",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Casablanca (filme)",
      "descricao": "Filme americano de 1942 dirigido por Michael Curtiz, com Humphrey Bogart e Ingrid Bergman, passado no Marrocos durante a Segunda Guerra."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano se passa a história de Casablanca, o clássico com Humphrey Bogart e Ingrid Bergman?",
    "resposta": "1941",
    "distratores": [
      "1939",
      "1943",
      "1945"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Casablanca_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Casablanca_(film)",
        "situacao": "ok",
        "texto": "Casablanca is a 1942 American romantic drama film directed by Michael Curtiz and starring Humphrey Bogart, Ingrid Bergman, and Paul Henreid. Filmed and set during World War II, it focuses on an American expatriate (Bogart) who must choose between his love for a woman (Bergman) and helping her husband (Henreid), a Czechoslovak resistance leader, escape from the Vichy-controlled city of Casablanca t\n[…]\nIn December 1941, American expatriate Rick Blaine owns a nightclub and gambling den in Casablanca, then in French Morocco. \"Rick's Café Américain\" attracts a varied clientele, including Vichy French and German officials, refugees desperate to reach the still-neutral United States, and those who prey on them. Although Rick professes to be neutral in all matters, he ran guns to Ethiopia in 1935 and fought on the Republican side in the Spanish Civil War.\n[…]\nHumphrey Bogart as Rick Blaine\n[…]\nIngrid Bergman as Ilsa Lund. Bergman's official website calls Ilsa her \"most famous and enduring role\". The Swedish actress's Hollywood debut in Intermezzo had been well received, but her subsequent films were not major successes until Casablanca. Film critic Roger Ebert called her \"luminous\", and commented on her chemistry with Bogart: \"she paints his face with her eyes\". Other actresses considered for the role of Ilsa included Ann Sheridan, Hedy Lamarr, Luise Rainer, and Michèle Morgan.\n[…]\nOn the review aggregator website Rotten Tomatoes, 99% of 136 critics' reviews are positive, with an average rating of 9.5/10. The website's consensus reads, \"An undisputed masterpiece and perhaps Hollywood's quintessential statement on love and romance, Casablanca has only improved with age, boasting career-defining performances from Humphrey Bogart and Ingrid Bergman.\"\n[…]\nHarmetz, Aljean (1992). Round Up the Usual Suspects: The Making of Casablanca – Bogart, Bergman, and World War II. Hyperion. ISBN 978-1-56282-761-8."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Casablanca_%28filme%29",
        "situacao": "ok",
        "texto": "Casablanca (bra/prt: Casablanca) é um filme de drama romântico estadunidense de 1942 dirigido por Michael Curtiz e estrelado por Humphrey Bogart, Ingrid Bergman e Paul Henreid.\n[…]\nEm dezembro de 1941, o expatriado americano Rick Blaine (Humphrey Bogart) era dono de uma boate e casa de jogos de azar em Casablanca. O \"Rick's Café Américain\" atrai uma clientela variada, incluindo oficiais franceses de Vichy e alemães nazistas, refugiados desesperados para chegar aos Estados Unidos, ainda neutros, e aqueles que os atacavam. Embora Rick professa ser neutro em todos os assuntos, ele contrabandeou armas para a Etiópia em 1935 e lutou ao lado republicano na Guerra Civil Espanhola.\n[…]\nHumphrey Bogart como Rick Blaine\n[…]\nCasablanca tem a direção de fotografia feita por Arthur Edeson conhecido anteriormente por sua colaboração em Relíquia Macabra (1941) e Frankenstein (1931). Ele deu uma atenção especial à fotografia durante as cenas de Ingrid Bergman, a qual foi filmada principalmente de seu lado esquerdo preferido, muitas vezes com um filtro de gaze suavizante e com Catch light para fazer seus olhos brilharem; todo o efeito foi projetado para fazer seu rosto parecer \"inefavelmente triste, terno e nostálgico\".\n[…]\nNo website agregador de críticas Rotten Tomatoes, 99% das 136 avaliações dos críticos são positivas, com uma classificação média de 9,5/10. O consenso do site diz: \"Uma obra-prima indiscutível e talvez a declaração quintessencial de Hollywood sobre amor e romance, Casablanca só melhorou com a idade, ostentando performances que definiram a carreira de Humphrey Bogart e Ingrid Bergman\".\n[…]\nEpstein, Julius J. (1994). Casablanca. [S.l.]: Imprenta Glorias. OCLC 31873886",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Grace Kelly",
      "descricao": "Atriz americana de Janela Indiscreta e Ladrão de Casaca que se tornou princesa de Mônaco."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que estrela de filmes de Hitchcock, vencedora do Oscar, abandonou o cinema em 1956 para se casar com o príncipe Rainier, de Mônaco?",
    "resposta": "Grace Kelly",
    "fonte": [
      "https://en.wikipedia.org/wiki/Grace_Kelly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grace_Kelly",
        "situacao": "ok",
        "texto": "Grace Patricia Kelly (November 12, 1929 – September 14, 1982) was an American actress and Princess of Monaco as the wife of Prince Rainier III from their marriage on April 18, 1956, until her death in 1982. Prior to her marriage, she achieved stardom in several significant Hollywood films in the early to mid-1950s. She received an Academy Award and three Golden Globe Awards, and was ranked 13th on\n[…]\nKelly retired from acting at age 26 to marry Rainier and began her duties as Princess of Monaco. Grace and Rainier had three children: Princess Caroline, Prince Albert, and Princess Stéphanie. Princess Grace's charity work focused on children and the arts. In 1964, she established the Princess Grace Foundation to support local artisans. Her organization for children's rights, AMADE Mondiale, gained consultive status within UNICEF and UNESCO.\n[…]\nA rose garden in Monaco's Fontvieille district is dedicated to the memory of Kelly. It was opened in 1984 by Rainier. A hybrid tea rose, named Rosa 'Princesse de Monaco', was named after her. She is commemorated in a statue by Kees Verkade in the garden, which features 4,000 roses. Prince Rainier also established the Princess Grace Irish Library in her memory, containing her personal collection of over 9,000 books and sheet music.\n[…]\nCheryl Ladd portrayed Kelly in the made-for-TV film Grace Kelly in 1983. The film received mixed reviews. Nicole Kidman portrayed Kelly in Grace of Monaco (2014), directed by Olivier Dahan. Reaction to the film was largely negative; many people, including the princely family of Monaco, felt it was overly dramatic, had historical errors, and lacked depth.\n[…]\nIn 2012, the monument to Grace Kelly and Prince  of Monaco Rainier III was erected in Yoshkar-Ola, Russia..\n[…]\nGrace Kelly Footage Archived March 14, 2012, at the Wayback Machine\n[…]\n\"High Society – The Life of Grace Kelly\". The Washington Post. November 15, 2009."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grace_Kelly",
        "situacao": "ok",
        "texto": "Grace Patricia Grimaldi (nascida Grace Patricia Kelly; Filadélfia, 12 de novembro de 1929 — Mônaco, 14 de setembro de 1982) foi uma atriz de cinema norte americana que, após estrelar vários filmes importantes no início da década de 1950, tornou-se Princesa de Mônaco ao se casar com o Príncipe Rainier III, em abril de 1956.\n[…]\nGrace é considerada a décima terceira lenda do cinema mundial pelo Instituto americano do cinema. Sua morte se deu em virtude de um acidente automobilístico em 14 de setembro de 1982. Kelly é também considerada, além de um ícone da moda, a \"princesa mais bonita da história\". Como atriz, estrelou onze filmes, entre eles \"Amar é sofrer\", pelo qual ganhou o Oscar de Melhor Atriz e o Globo de Ouro de melhor atriz em filme dramático.\n[…]\nO tio de Grace Kelly, George Kelly, dramaturgo vencedor do Prêmio Pulitzer, aconselhou e orientou Kelly durante sua carreira no cinema de Hollywood. Sua carreira no cinema durou de setembro de 1951 a março de 1956.\n[…]\nEste fato, mantido em segredo pela produtora do filme, foi descrito como o \"acontecimento que quase levou o fim de suas carreiras\".Segundo o escritor Paul Westran, em sua obra When Stars Collide, Grace Kelly teve vários relacionamentos amorosos antes de se casar com o príncipe reinante Rainier III, Príncipe de Mônaco, em 1956.\n[…]\nGrace e Rainier tiveram três filhos:\n[…]\nEm 1983, um filme televisivo americano foi produzido para mostrar o início da vida da princesa. O filme, intitulado Grace Kelly, foi estrelado por Cheryl Ladd. Além de filmes, a atriz inspirou diversos livros, músicas e perfumes. Foi citada em várias composições musicais, desde a sua morte em 1982. Na canção Vogue de Madonna e em Grace Kelly de Mika, por exemplo. Em 2012, foi eleita pela revista TIME um dos ícones mais influentes da moda de todos os tempos.\n[…]\nGrace Kelly no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Embrafilme",
      "descricao": "Empresa estatal brasileira de produção e distribuição de filmes, criada em 1969 e extinta em 1990."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1990, o fim da estatal Embrafilme quase paralisou a produção de cinema no Brasil. Que presidente extinguiu a empresa?",
    "resposta": "Fernando Collor",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Embrafilme",
      "https://en.wikipedia.org/wiki/Embrafilme"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Embrafilme",
        "situacao": "ok",
        "texto": "A Embrafilme ou Empresa Brasileira de Filmes S.A. foi uma empresa de economia mista estatal brasileira produtora e distribuidora de filmes cinematográficos.\n[…]\nEnquanto viveu, a Embrafilme funcionou com um orçamento médio anual de cerca de US$ 12 milhões, desse total, entre US$ 8 milhões e US$ 9 milhões (70%) eram investidos na produção de filmes. Nos anos 70 e 80, os filmes custavam entre US$ 500 mil e US$ 600 mil. A empresa lançava anualmente, em média, 25 filmes. A estatal ajudou a colocar no mercado mais de 200 filmes brasileiros entre 1969 e 1990.\n[…]\nFoi extinta em 16 de março de 1990, sem a abertura de qualquer processo administrativo ou discussão pública que pudesse reorientar sua missão e a estratégia, pelo Programa Nacional de Desestatização (PND), do governo de Fernando Collor de Mello. Quando o decreto de extinção saiu publicado, a Embrafilme estava às vésperas de lançar com muita divulgação o filme Dias Melhores Virão, dirigido por Cacá Diegues.\n[…]\nÉ a partir dessas mudanças que o Estado passa a intervir mais efetivamente no cinema brasileiro, já que a Embrafilme assume todo o processo de produção cinematográfica de suas produções, investindo completamente em propostas fílmicas.\n[…]\nA partir de 1990, Fernando Collor de Mello extingue a Embrafilme. Com uma política neoliberal, a abertura do mercado à estatal e a outros órgãos ligados à cultura chegaram ao fim. Até mesmo o Ministério da Cultura foi extinto, transformando-se em Secretaria da Cultura. Essa política de livre mercado, ligado à globalização, fez com que o cinema nacional perdesse cada vez mais espaço, que foi tomado pelo cinema norte-americano.\n[…]\nAnchieta, José do Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Embrafilme",
        "situacao": "ok",
        "texto": "Embrafilme (in full: Empresa Brasileira de Filmes S.A.) was a Brazilian state-owned company established in 1969, operating under the Ministry of Education and Culture with the primary mission of fostering the production and distribution of national films. With a substantial budget, it financed the making of hundreds of films, releasing an average of 25 titles annually and helping usher in a golden\n[…]\nIn the late 1980s, the company began to face strong opposition, being accused of clientelism and poor management, within a broader context of economic crisis and market transformations, such as the popularization of the VCR. These pressures, combined with a campaign for the sector's privatization, culminated in its extinction in March 1990, through the National Privatization Program of the Collor government, without public debate about its future.\n[…]\nThe 1980s, Brazil's \"lost decade\" of economic crisis, triggered Embrafilme's decline. It faced mounting accusations of corruption, clientelism, and favoritism from the press and independent producers. The end of the military dictatorship further tarnished its image, as it was associated with censorship and the regime's nationalist propaganda. Internal administrative difficulties and leadership changes exacerbated the crisis.\n[…]\nWith the neoliberal policies of President Fernando Collor de Mello, the state's role in culture was dismantled. Embrafilme was abruptly extinguished in March 1990 without public debate, along with the Ministry of Culture (downgraded to a secretariat). The immediate result was a drastic collapse in national film production and theater attendance, as the market was opened to foreign (especially American) cinema.\n[…]\nThis list includes films that Embrafilme produced, co-produced, or distributed.\n[…]\nPra Frente, Brasil\n[…]\nCinema of Brazil\n[…]\nEmbrafilme at  IMDb\n[…]\nEmbrafilme creation Law\n[…]\nCinemabrasileiro.net, web about Brazilian cinema"
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
