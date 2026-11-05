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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "101 Dálmatas (filme de 1961)",
      "descricao": "Animação da Disney de 1961 sobre os dálmatas Pongo e Perdita, cujos filhotes são raptados a mando de Cruella de Vil."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na animação 101 Dálmatas, da Disney, de 1961, quantos filhotes nascem na ninhada de Pongo e Perdita?",
    "resposta": "Quinze",
    "distratores": [
      "Nove",
      "Doze",
      "Dezessete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/One_Hundred_and_One_Dalmatians"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/One_Hundred_and_One_Dalmatians",
        "situacao": "ok",
        "texto": "One Hundred and One Dalmatians (also known as 101 Dalmatians) is a 1961 American animated adventure comedy film produced by Walt Disney Productions with distribution by Buena Vista Distribution. Adapted from Dodie Smith's 1956 novel The Hundred and One Dalmatians, the film was directed by Hamilton Luske, Clyde Geronimi, and Wolfgang Reitherman in his feature-length directorial debut, from a script\n[…]\nOne Hundred and One Dalmatians was first released on VHS on April 10, 1992, as part of the Walt Disney Classics video series; 11.1 million copies had been sold by June of that year. At the time of its release, it was the sixth best-selling video of all time. The film was re-released on VHS and LaserDisc on March 9, 1999, as part of the Walt Disney Masterpiece Collection for a limited 101-day time period. The VHS version was THX-certified and featured a 90-second animated short.\n[…]\nSince the original release of One Hundred and One Dalmatians in 1961, Disney has taken the property in various directions.\n[…]\n101 Dalmatian Street is the second TV series with a plot in the 21st century, with a new art style and a concept loosely based on the source material. Set 60 years after the original film, the show mostly focuses on a completely new family of Dalmatians, (who are descendants of Pongo and Perdita) who all live without a human in Camden Town.\n[…]\nA live-action remake of the 1961 film, 101 Dalmatians, was released in 1996; unlike the animated film, none of the animals had speaking voices in this version. It was followed by a sequel, 102 Dalmatians, in 2000. A live-action version of Cruella De Vil is featured as one of the main antagonists in the fourth season of the fantasy television series, Once Upon a Time (produced by Disney-owned ABC Studios).\n[…]\nOne Hundred and One Dalmatians at the AFI Catalog of Feature Films\n[…]\nOne Hundred and One Dalmatians at the TCM Movie Database (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/One_Hundred_and_One_Dalmatians",
        "situacao": "ok",
        "texto": "One Hundred and One Dalmatians (bra: A Guerra dos Dálmatas ou 101 Dálmatas; prt: Os 101 Dálmatas) é um filme estadunidense de 1961, dos gêneros animação, aventura, comédia e fantasia, dirigido por Clyde Geronimi, Hamilton Luske e Wolfgang Reitherman para a Disney, baseado no livro The Hundred and One Dalmatians, de Dodie Smith.\n[…]\nLançado nos cinemas em 25 de janeiro de 1961, é o 17.º longa-metragem de animação dos estúdios Disney.\n[…]\nCruella de Vil é uma mulher rica, fascinada em peles, e que tem como grande sonho confeccionar um casaco feito de pele de cachorro, mais especificamente de pele de dálmata. Anita, amiga de infância de Cruela, e seu marido Roger possuem um casal de dálmatas chamados Prenda e Pongo. Quando Prenda da a luz a 15 filhotes Cruela aparece querendo comprá-los, mas Roger nega isso a ela.\n[…]\nOne Hundred and One Dalmatians foi um dos últimos desenhos animados realizados sob a supervisão de Walt Disney. Foi o primeiro filme animado da Disney a usar a tecnologia da fotocopiagem (xerografia), o que proporcionou uma maior complexidade visual a produção. Mas Walt Disney não se agradou com o estilo de desenho que a nova tecnologia trouxe.\n[…]\nDiferente de outros filmes da Disney, One Hundred and One Dalmatians possui apenas três músicas, com apenas uma, \"Cruella De Vil\", sendo tocada em uma grande parte da produção. As outras duas canções são \"Kanine Krunchies Jingle\" (por Lucille Bliss) e \"Dalmatian Plantation\" em que apenas dois versos são cantados por Roger no final do filme.[carece de fontes]?\n[…]\nGanhador na categoria de Melhor Filme Animado[carece de fontes]?\n[…]\nSegundo o site Box Office Mojo, One Hundred and One Dalmatians foi a décima maior bilheteria do ano de 1961 arrecadando $6,400,000. No seu lançamento de 1991 foi a vigésima maior bilheteria do ano na América do Norte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Star Wars: Uma Nova Esperança",
      "descricao": "Primeiro filme lançado da saga Star Wars, escrito e dirigido por George Lucas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na numeração da saga, o primeiro filme de Star Wars a chegar aos cinemas, Uma Nova Esperança, corresponde a qual episódio?",
    "resposta": "Episódio quatro",
    "distratores": [
      "Episódio um",
      "Episódio três",
      "Episódio seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Star_Wars_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Star_Wars_(film)",
        "situacao": "ok",
        "texto": "Star Wars (later retitled as Star Wars: Episode IV – A New Hope) is a 1977 American epic space opera film written and directed by George Lucas. Produced by Lucasfilm Ltd. and distributed by Twentieth Century-Fox, it is the first film in the Star Wars franchise and the fourth chronological chapter of the \"Skywalker Saga\".\n[…]\nKurtz said they considered calling the first film Episode III, IV, or V, to capture the experience of encountering a Flash Gordon serial halfway through its run. However, Michael Kaminski and Chris Taylor point out that multiple early screenplay drafts of Star Wars were subtitled \"Episode One\" and that early drafts of Empire were called \"Episode II\".\n[…]\nSome critics have complained that Star Wars, as well as Jaws, \"ruined\" Hollywood by shifting its focus from \"sophisticated\" films such as The Godfather, Taxi Driver, and Annie Hall to films about spectacle and juvenile fantasy. On a 1977 episode of Sneak Previews, Gene Siskel said he hoped Hollywood would continue to cater to audiences who enjoy \"serious pictures\".\n[…]\nGrimes, Caleb; Winship, George (2006). \"Episode IV: A New Hope\". Star Wars Jesus: A Spiritual Commentary on the Reality of the Force. WinePress Publishing. ISBN 1-57921-884-9.\n[…]\nTitelman, Carol, ed. (1994). The Art of Star Wars Episode IV: A New Hope (Paperback) (1st ed.). London: Titan Books. ISBN 9781852865832.\n[…]\nSaporito, Jeff (November 11, 2015). \"Why was \"Star Wars Episode IV: A New Hope\" originally released under another title?\". Screen Prism. Archived from the original on November 18, 2018.\n[…]\nCombs, Richard (November 1, 1977), Star Wars: Episode IV – A New Hope archive review: a monumentally empty blockbuster, British Film Institute, archived from the original on February 23, 2026\n[…]\nStar Wars, Episode IV: A New Hope (1977) at Filmsite.org\n[…]\nStar Wars at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Star_Wars%3A_Epis%C3%B3dio_IV_%E2%80%93_Uma_Nova_Esperan%C3%A7a",
        "situacao": "ok",
        "texto": "Star Wars (mac/palop/prt: A Guerra das Estrelas; bra: Guerra nas Estrelas), mais tarde relançado como Star Wars: A New Hope ou Star Wars: Episode IV – A New Hope (bra/mac/palop/prt/tls: Star Wars: Episódio IV – Uma Nova Esperança; Portugal também já usou o título Star Wars: Episódio IV – A Guerra das Estrelas) é um filme épico de ação-aventura e ficção científica norte-americano, escrito e dirigid\n[…]\nFoi o primeiro filme da saga homônima a ser lançado e corresponde ao quarto episódio na ordem cronológica da narrativa. Estreado em 25 de maio de 1977, acompanha a história do jovem fazendeiro Luke Skywalker (Mark Hamill), que se envolve em uma guerra civil entre o tirânico Império Galáctico e a Aliança Rebelde, ao lado do contrabandista Han Solo (Harrison Ford).\n[…]\n19 anos após os eventos de Star Wars - Episódio III: A Vingança dos Sith, o alto oficial do Império Galáctico e Lorde Sith, Darth Vader, sequestra a senadora e princesa Leia Organa sob duas acusações: fazer parte da resistência ao Império, a Aliança Rebelde, e interceptar os planos do projeto da arma secreta imperial, a Estrela da Morte.\n[…]\nDesde o início de seu processo de escrita em janeiro de 1973, Lucas havia refeito a história várias vezes. Ele iria escrever quatro roteiros diferentes para Star Wars. Em maio de 1974, ele havia se expandido o roteiro, adicionando elementos como os siths, a Estrela da Morte, e um general veterano chamado Annikin Starkiller. Ele mudou Starkiller para um adolescente, e ele mudou o general em um papel de apoio como um membro de uma família de anões.\n[…]\ne solicitar os direitos de sequencias do filme. Para Lucas, este negócio garantiu os direitos de Star Wars e a maioria dos lucros de merchandising.\n[…]\nGeorge Lucas, criador de Star Wars, era um dos diretores da nova geração do cinema americano nos anos 70, juntamente com Francis Ford Coppola, Steven Spielberg, Martin Scorsese e Brian de Palma.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Cidade de Deus",
      "descricao": "Filme brasileiro de 2002 dirigido por Fernando Meirelles, sobre jovens numa favela do Rio de Janeiro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Cidade de Deus, de Fernando Meirelles, concorreu ao Oscar em categorias como direção e roteiro adaptado. Quantas indicações o filme recebeu ao todo?",
    "resposta": "Quatro",
    "distratores": [
      "Duas",
      "Três",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/City_of_God_(2002_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/City_of_God_(2002_film)",
        "situacao": "ok",
        "texto": "City of God (Portuguese: Cidade de Deus) is a 2002 Brazilian epic crime film directed by Fernando Meirelles and co-directed by Kátia Lund. The screenplay, written by Bráulio Mantovani, is adapted from the 1997 novel of the same name by Paulo Lins, though the plot is also loosely based on real events.\n[…]\nFollowing the success of City of God, Meirelles and Lund created the City of Men TV series and its 2007 film adaptation. Both projects share some actors (notably leads Silva and Darlan Cunha) and the same setting as City of God.\n[…]\nCity of God was filmed on 16mm film stock.\n[…]\nLund and Meirelles filmed the short film Golden Gate as a test run while casting for City of God was in the initial stages.\n[…]\nFilm critic Roger Ebert awarded the film 4 stars out of 4, writing in his review, \"City of God churns with furious energy as it plunges into the story of the slum gangs of Rio de Janeiro. Breathtaking and terrifying, urgently involved with its characters, it announces a new director of great gifts and passions: Fernando Meirelles. Remember the name.\"\n[…]\nFilmmaker Robert Altman stated, \"I don't know how Fernando Meirelles made City of God. It's so courageous, so truthful. I think it's the best picture I've ever seen\". Meirelles himself cited Altman's work as an influence on his own career.\n[…]\nBrazilian rapper MV Bill, a resident of Cidade de Deus, said the film had \"brought no good to the favela, no social, moral, or human benefit.\" He said, \"The world will know that they exploited the image of the children who live here in Cidade de Deus. What is obvious is that they are going to carry a bigger stigma throughout their lives; it has only become greater because of the film.\"\n[…]\nCity of God at IMDb\n[…]\nCity of God at Box Office Mojo\n[…]\nCity of God at Rotten Tomatoes\n[…]\nCity of God at Metacritic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cidade_de_Deus_%28filme%29",
        "situacao": "ok",
        "texto": "Cidade de Deus é um filme de ação brasileiro de 2002 produzido pela O2 Filmes, VideoFilmes e distribuído pela Lumière Brasil. É uma adaptação roteirizada por Bráulio Mantovani a partir do livro de mesmo nome escrito por Paulo Lins. Foi dirigido por Fernando Meirelles, codirigido por Kátia Lund e estrelado por Alexandre Rodrigues, Leandro Firmino e Alice Braga.\n[…]\nMudou o paradigma do cinema brasileiro ao ser o primeiro a receber quatro indicações ao Oscar, nas categorias de melhor diretor, melhor roteiro adaptado, melhor edição e melhor fotografia, número igualado apenas na premiação de 2026, por O Agente Secreto.\n[…]\nO roteirista reiterou que suas ambições para o filme foram modestas, sempre procurando recuperar o ponto de vista exposto por Paulo Lins, que escreveu o livro morando na própria Cidade de Deus, Rio de Janeiro.\n[…]\nQuando Cidade de Deus recebeu quatro indicações no Oscar 2004, a reação negativa voltou-se para o Oscar de melhor filme estrangeiro. Em 2005 a academia encomendou um estudo para evitar tais injustiças, o que levou a criação da short list (pré-lista), para diversificar a seleção. Posteriormente, devido a uma nova polêmica no perfil do comitê nos anos 2010, foram adicionados mais membros.\n[…]\nBorges recebeu grandes críticas negativas sobre a falta de participação de membros da produção do longa Cidade de Deus, sobretudo, a ausência de maiores esclarecimentos de Fernando Meirelles e Kátia Lund sobre  o valor pago aos atores — assunto que foi colocado no documentário em perspectiva com a estreia em Cannes, as quatro indicações ao Oscar e a repercussão em torno da obra.\n[…]\nPara ele, se houvesse a indicação naquele momento, o filme superaria a marca de quatro milhões de espectadores. Em janeiro de 2004, o longa foi indicado a quatro categorias na Academia — melhor direção, melhor roteiro adaptado, melhor edição e melhor fotografia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Ainda Estou Aqui",
      "descricao": "Filme brasileiro de 2024 dirigido por Walter Salles, sobre a família Paiva durante a ditadura militar."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Ainda Estou Aqui, depois que o marido é levado pelos militares, Eunice Paiva fica sozinha com quantos filhos?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Quatro",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/I%27m_Still_Here_(2024_film)",
      "https://en.wikipedia.org/wiki/Eunice_Paiva"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/I%27m_Still_Here_(2024_film)",
        "situacao": "ok",
        "texto": "I'm Still Here (Portuguese: Ainda Estou Aqui ; Brazilian Portuguese: [aˈĩdɐ isˈtow aˈki]) is a 2024 political biographical drama film directed by Walter Salles from a screenplay by Murilo Hauser and Heitor Lorega, based on Marcelo Rubens Paiva's 2015 memoir of the same name.\n[…]\nIt stars Fernanda Torres and Fernanda Montenegro as Eunice Paiva, a mother and activist coping with the forced disappearance of her husband, the dissident politician Rubens Paiva (Selton Mello), during the military dictatorship in Brazil.\n[…]\nTwenty five years later, in 1996, surrounded by journalists while receiving Rubens Paiva's official death certificate from the Brazilian state, now once again a democracy, Eunice calls for reparations for victims' families and accountability for the military dictatorship's crimes.\n[…]\nThe screenplay is by Murilo Hauser and Heitor Lorega. It is adapted from the memoir Ainda Estou Aqui by Marcelo Rubens Paiva, Eunice's son.\n[…]\nEmilia Pérez was considered a front-runner, but controversies around Karla Sofía Gascón and an attempt to smear I'm Still Here's campaign led most pundits to agree it ceased France's chances to win the category after more than thirty years.\n[…]\nBrazilians widely embraced I'm Still Here, as its release coincided with the celebrations marking 40 years since the restoration of democracy in Brazil, and because country still pays reparations for the regime's victims families, following an amnesty approved during the Military dictatorship that prevented accountability for crimes committed by the regime officials.\n[…]\nAinda Estou Aqui\n[…]\nI'm Still Here at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eunice_Paiva",
        "situacao": "ok",
        "texto": "Maria Lucrécia Eunice Facciolla Paiva (Brazilian Portuguese: [ewˈnisi ˈpajvɐ]; née Facciolla; November 7, 1929 – December 13, 2018) was a Brazilian lawyer and activist who challenged the Brazilian military dictatorship.\n[…]\nIn her law career, Eunice Paiva advocated for the rights of indigenous people in Brazil, documenting and bringing actions to end the violence and illegal land expropriation committed against indigenous people. In October 1983, she and Manuela Carneiro da Cunha wrote \"Defend the Pataxós,\" an influential opinion piece published in prominent São Paulo newspaper Folha de S.\n[…]\nReleased in 1978, the documentary Eunice, Clarice, Thereza, directed by Joatan Berbel, tells the story of three widows of political prisoners: Clarice Herzog (widow of journalist Vladimir Herzog); Thereza Fiel (widow of worker Manoel Fiel Filho); and Eunice Paiva. These three women were united against the military dictatorship and its repression.\n[…]\nPublished in 2015, the autobiographical novel Ainda Estou Aqui, also written by Marcelo Rubens Paiva, deals with the life of Eunice Paiva and draws parallels between her story and the period of dictatorship in Brazil. The book won third place in the Jabuti Prize in the reader nomination category and was nominated for the Oceanos awards, as well as being included in the list of the best books of 2015 by O Globo newspaper.\n[…]\nThe book Ainda Estou Aqui has been adapted for the cinema. Directed by Walter Salles and starring Fernanda Torres as Eunice in her adulthood, Fernanda Montenegro as an elderly Eunice in her last years of life and Selton Mello as Rubens Paiva, I'm Still Here was released in Brazil on November 7, 2024.\n[…]\nEunice Paiva at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ainda_Estou_Aqui_%28filme_de_2024%29",
        "situacao": "ok",
        "texto": "Ainda Estou Aqui é um filme brasileiro de 2024, do gênero drama biográfico, dirigido por Walter Salles e estrelado por Fernanda Torres e Fernanda Montenegro como Eunice Paiva em diferentes fases da vida, além de Selton Mello no papel de Rubens Paiva. O roteiro de Murilo Hauser e Heitor Lorega foi baseado na autobiografia homônima de 2015, escrita por Marcelo Rubens Paiva. O filme foi distribuído n\n[…]\nEunice permanece presa por cinco dias até ser liberada, sem notícias de seu marido. Ela retorna para casa, se reencontra com Eliana e os demais filhos: Marcelo (Guilherme Silveira), Ana Lúcia (Bárbara Luz) e Beatriz (Cora Mora). Manchetes falsas são publicadas dizendo que Rubens fugiu, mas tanto Eunice quanto seus amigos não acreditam nos jornais. Eunice com a ajuda do advogado Lino Machado (Thelmo Fernandes), recorrem a um habeas corpus a fim de garantir a liberdade e os direitos de seu marido.\n[…]\nNos créditos finais, informa-se que Rubens Paiva foi morto entre 21 e 22 de janeiro de 1971, em um dos quartéis da 1ª Divisão do Exército no RJ e que cinco homens foram denunciados por sua tortura e assassinato, mas continuam impunes até hoje. Além disso, informa-se que Eunice falecera em 2018 aos 89 anos, em São Paulo, após conviver com a doença de Alzheimer por quinze anos.\n[…]\nAinda Estou Aqui fez sua estreia em um circuito limitado nos Estados Unidos no final de janeiro de 2025. Exibido em apenas cinco salas em Los Angeles e Nova Iorque, o longa alcançou a 26ª posição no ranking semanal de bilheterias, arrecadando 125 mil dólares. Apesar da distribuição restrita, o filme destacou-se ao liderar com ampla vantagem a média de faturamento por sala, evidenciando um desempenho superior ao dos demais títulos em cartaz.\n[…]\nAinda Estou Aqui no IMDb\n[…]\nAinda Estou Aqui no Rotten Tomatoes  (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Toy Story",
      "descricao": "Primeiro longa de animação da Pixar, de 1995, sobre os brinquedos Woody e Buzz Lightyear."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Toy Story, os alienígenas verdes de brinquedo que veneram a garra da máquina do Pizza Planet têm quantos olhos?",
    "resposta": "Três",
    "distratores": [
      "Um",
      "Dois",
      "Quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_Toy_Story_characters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Toy_Story_characters",
        "situacao": "ok",
        "texto": "This is a list of characters from Disney and Pixar's Toy Story franchise, which includes the animated feature films Toy Story, Toy Story 2, Toy Story 3, Toy Story 4, Toy Story 5, and Lightyear, as well as the Toy Story Toons series and television specials Toy Story of Terror! and Toy Story That Time Forgot.\n[…]\nIn Toy Story, Buzz and Woody encounter the Aliens inside a claw machine at Pizza Planet. The Aliens repeatedly state that \"the Claw\" determined who would be chosen, referring to the arcade machine's mechanism.\n[…]\nThe Magic 8 Ball makes brief appearances in the first three films. In the first film, Woody asks the ball whether Andy would pick him instead of Buzz Lightyear to take along to Pizza Planet, but the ball replies, \"Don't Count On It\", upsetting Woody. Woody shoves the ball aside, and it falls behind a desk. In Toy Story 3, a disinterested Molly tosses the ball into a donation box along with several other toys heading to Sunnyside daycare.\n[…]\nLegs also appears in Toy Story Treats.\n[…]\nCaptain Suds (voiced by Corey Burton) is a boat toy with a sailor face and a headlamp who serves as the leader of the bath toys. He speaks like a pirate. Captain Suds also appears in Toy Story 5.\n[…]\nOld Timer (voiced by Christian Roman) is an elderly toy alarm clock with a moustache and a beard. He helps track the time for the toys' escape plan. Old Timer would later reappear in Toy Story 4 (voiced by Alan Oppenheimer).\n[…]\nNear the end of Toy Story That Time Forgot, it is implied that he has a crush on Trixie. Reptillus has a cameo in Toy Story 4 as his picture is seen on a lunchbox in Bonnie's kindergarten class.\n[…]\nRib Tickles (voiced by Aloma Wright) is a toy dog Pet Patrol officer who Forky meets. A male version of the character was originally set to appear in Toy Story 4, although it was ultimately deleted."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Toy_Story",
        "situacao": "ok",
        "texto": "Esta é uma lista contendo todos os personagens dos filmes Toy Story, Toy Story 2, Toy Story 3, Toy Story 4 e Toy Story 5.\n[…]\nApós o passeio selvagem no Caminhão do Pizza Planet, onde ele salvou três brinquedos alienígenas de voarem pela janela, ele e sua esposa aparentemente acabam por adotá-los como seus filhos. No terceiro filme, usa uma tortilla e um pepino como corpos alternativos nas cenas em Sunnyside. Apenas depois que os aliens Pizza Planet os salvam de serem queimados é que finalmente ele os aceita como filhos. Sr. Cabeça de Batata é um personagem jogável no jogo Toy Story Racer.\n[…]\nEm especiais dos discos de Toy Story e Toy Story 2, Tubarão é tratado com um brinquedo de \"terror\".\n[…]\nSão uma turma de alienígenas de três olhos. Estes brinquedos eram prêmios idênticos em um jogo de habilidade do restaurante Pizza Planet, onde uma grande garra se entende e escolhe um desses alienígenas e, o escolhido “vai para um lugar melhor\". Essa garra é o líder para os alienígenas (na verdade, é mais um Deus para eles). Três destes brinquedos são resgatados por Sr. Cabeça de Batata em Toy Story 2 e tornam-se “anexo” a ele. Sra. Cabeça de Batata adota-os.\n[…]\nEles parecem ser brinquedos promocionais para o Pizza Planet, porque eles usam uniformes com o logotipo do restaurante. Eles são chamados de \"Little Green Men\" (Pequenos Homens Verdes). No terceiro filme, eles também vão para a Sunnyside e são responsáveis por resgatar os brinquedos segundos antes deles caírem em um poço de incineração de lixo, utilizando a garra. Um integrante dessa turma é personagem jogável no jogo Toy Story Racer.\n[…]\nToy Story\n[…]\nToy Story 3: The Game",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "A Bela e a Fera (filme de 1991)",
      "descricao": "Animação da Disney de 1991 sobre Bela, uma jovem que vive no castelo de uma fera enfeitiçada."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na animação A Bela e a Fera, de 1991, a rosa encantada marca o prazo do feitiço, que termina quando a Fera completa quantos anos?",
    "resposta": "Vinte e um",
    "distratores": [
      "Dezoito",
      "Vinte e cinco",
      "Trinta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)",
        "situacao": "ok",
        "texto": "Beauty and the Beast is a 1991 American animated musical romantic fantasy film directed by Gary Trousdale and Kirk Wise, written by Linda Woolverton, and based on the French fairy tale \"Beauty and the Beast\". Produced by Walt Disney Feature Animation, the film stars Paige O'Hara, Robby Benson, Richard White, Jerry Orbach, David Ogden Stiers, Angela Lansbury, Bradley Michael Pierce, Rex Everhart, J\n[…]\nAt the end of the Disney screening, Beauty and the Beast received enthusiastic reviews and a ten-minute-long standing ovation from the film festival audience. The completed film was also screened out of competition at the 1992 Cannes Film Festival. The finished film premiered at the El Capitan Theatre in Hollywood on November 13, 1991, beginning a limited release before expanding wide on November 22, along with the openings of The Addams Family and An American Tail: Fievel Goes West.\n[…]\nFor its original theatrical run, Beauty and the Beast earned $9.6 million in its opening weekend, ranking in third place behind The Addams Family and Cape Fear. During its initial release in 1991, the film grossed $145.9 million in revenues in North America and $331.9 million worldwide. It ranked as the third-most successful film of 1991 in North America, surpassed only by the summer blockbusters Terminator 2: Judgment Day and Robin Hood: Prince of Thieves.\n[…]\nJournalist and filmmaker Bilge Ebiri identifies Beauty and the Beast, particularly its unfinished screening at the 1991 New York Film Festival, as a turning point in shifting the public stigma that had dismissed animated films as mere children's entertainment for decades. This event, he argues, helped critics and audiences recognize the complexity, artistry, and decision-making involved in animation, paving the way for the medium's acceptance as legitimate cinema.\n[…]\nBeauty and the Beast at the TCM Movie Database (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Beauty_and_the_Beast_%28filme_de_1991%29",
        "situacao": "ok",
        "texto": "Beauty and the Beast (bra: A Bela e a Fera; prt: A Bela e o Monstro) é um filme de animação estadunidense de 1991 dos gêneros musical e fantasia romântica, produzido pela Walt Disney Feature Animation, sendo o 30º clássico da Disney, e distribuído pela Walt Disney Pictures. É baseado no conto de fadas de mesmo nome de Jeanne-Marie Le Prince de Beaumont e ideias do filme francês de 1946 de Jean Coc\n[…]\nBela agradece e vai embora.\n[…]\nEm uma realização inédita para a The Walt Disney Company, uma versão inacabada de Beauty and the Beast foi exibida no Festival de Cinema de Nova Iorque em 29 de setembro de 1991. O filme foi considerado um \"trabalho em andamento\" porque aproximadamente apenas 70% da animação havia sido concluída até aquela altura; storyboards e desenhos à lápis foram utilizados em substituição aos 30% restantes.\n[…]\nFoi o terceiro filme de maior sucesso comercial de 1991 na América do Norte, superado apenas pelos sucessos de bilheteria de verão Terminator 2: Judgment Day e Robin Hood - O Príncipe dos Ladrões. Na época, Beauty and the Beast foi o filme de animação da Disney de maior sucesso e o primeiro filme de animação da história a bater a marca de US$ 100 milhões nos Estados Unidos e Canadá em sua exibição inicial.\n[…]\nO site agregador de resenhas Rotten Tomatoes dá ao filme um índice de aprovação de 93% com base nas resenhas de 121 críticos, obtendo uma classificação média de 8,5/10; o consenso crítico do site diz: \"Encantador, extremamente romântico e apresentando muitos números musicais maravilhosos, Beauty and the Beast é um dos trabalhos de animação mais elegantes da Disney\". O possui uma pontuação de 95/100 no Metacritic, o que indica as críticas como \"aclamação universal\".\n[…]\n\"Beauty and the Beast\" - #62\n[…]\nO filme foi lançado em 17 de março de 2017 e se tornou um sucesso comercial e de crítica, embora alguns críticos consideraram-no inferior à animação original de 1991.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "C-3PO",
      "descricao": "Robô humanoide dourado de protocolo da saga Star Wars, parceiro de R2-D2."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O robô dourado C-3PO, de Star Wars, se apresenta como fluente em mais de quantas formas de comunicação?",
    "resposta": "Seis milhões",
    "distratores": [
      "Seis mil",
      "Cem mil",
      "Um milhão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/C-3PO"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/C-3PO",
        "situacao": "ok",
        "texto": "C-3PO () or See-Threepio is a humanoid robot character in the Star Wars franchise. He is a protocol droid designed to assist in etiquette and translation, and is fluent in over six million forms of communication. He first appeared in the 1976 novelization of the original Star Wars film (1977), and he appears in all nine films of the Skywalker Saga, which includes the original trilogy, the prequel \n[…]\nSimon Pegg voices the character in a Star Wars-themed episode of the animated television series Phineas and Ferb.\n[…]\nThe character also appears in a 2014 Star Wars-themed episode of the animated television series Phineas and Ferb.\n[…]\nBeecroft, Simon (2021). Star Wars Character Encyclopedia: Updated and Expanded Edition (Hardback ed.). London: DK. ISBN 9780241531624.\n[…]\nBrooks, Dan (2024). Star Wars Encyclopedia: The Comprehensive Guide to the Star Wars Galaxy (Hardback ed.). DK. ISBN 9780241661628.\n[…]\nFentiman, David, ed. (2016). Star Wars Character Encyclopedia: Updated and Expanded. New York: DK Publishing. ISBN 9785001014522.\n[…]\nHidalgo, Pablo; Sansweet, Stephen (2008). The Complete Star Wars Encyclopedia. Vol. I (First ed.). New York: Del Rey. ISBN 9780345477637.\n[…]\nRinzler, J.W (2005). The Making of Star Wars: Revenge of the Sith. Ebury Press. ISBN 9780091897376.\n[…]\nRinzler, J.W. (2007). The Making of Star Wars: The Definitive Story Behind the Original Film (eBook v3.1 ed.). New York: Del Rey. ISBN 978-0-345-54286-1.\n[…]\nMurphy, R. R. (2018). Astromech Robots in Star Wars. Sci. Robot. 3:eaat1599. doi: 10.1126/scirobotics.aat1599.\n[…]\nSalmon, Paul. \"What the Robots of Star Wars Tell Us About the Future of Human Work\". Smithsonian Magazine. Retrieved November 16, 2025.\n[…]\nReid, Eamon (January 1, 2019). \"Wretched Hives of Scum and Villainy: The Representation of Class within the Star Wars Universe\". Edge Hill University Master of Research Dissertation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C-3PO",
        "situacao": "ok",
        "texto": "C-3PO ou See-Threepio é um androide do mundo fictício de Star Wars (Guerra nas Estrelas). É um \"droide de protocolo\" (intérprete e relações-sociais) fluente em 6 milhões de meios de comunicação. Foi inspirado na robô Maschinenmensch de Metrópolis.\n[…]\nC-3PO, junto com seu companheiro R2-D2, são os personagens mais queridos de Star Wars, devido à comicidade e personalidades que ambos, mesmo robôs, possuem. \"3PO\", como é apelidado, é um droide medroso, pessimista e atrapalhado, sempre criticando ou ironizando seu companheiro R2-D2. Apesar de reclamar constantemente e exclamar \"Ó céus!\" e \"Estamos perdidos!\", C-3PO é leal e prestativo em suas funções, e suas habilidades linguísticas ajudaram seus companheiros mais de uma vez.\n[…]\nEm Star Wars Episódio II: O Ataque dos Clones, cerca de 10 anos depois, Shmi é sequestrada pelo Povo da Areia. Sentindo que sua mãe está em perigo, Anakin viaja com Padmé para Tatooine, onde eles se reencontram com C-3PO, agora com um corpo revestido. Ele reconhece Anakin e Padmé instantaneamente e apresenta-os a Owen e Cliegg Lars, respectivamente meio-irmão e padrasto de Anakin, além de Beru Whitseun, namorada de Owen. Quando Anakin retorna com o corpo de sua mãe, C-3PO atende seu funeral.\n[…]\nEm Star Wars Episódio III: A Vingança dos Sith, C-3PO está ciente da gravidez de Padmé e as reuniões realizadas com Bail Organa e Mon Mothma. Depois de Anakin e R2-D2 retornarem do massacre dos Jedi, C-3PO e R2-D2 concluem que o que ocorreu foi o resultado da pressão emocional sobre Anakin.\n[…]\nMais tarde, ele, juntamente com Léia e uma equipe da Resistência, encontram Han, o stormtrooper Finn,BB-8, e Chewbacca no planeta Takodana.\n[…]\nC3PO (em inglês) no Star Wars.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "O Senhor dos Anéis (trilogia de filmes)",
      "descricao": "Trilogia de filmes de fantasia dirigida por Peter Jackson, lançada entre 2001 e 2003, baseada na obra de J. R. R. Tolkien."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Somando os três filmes, quantos Oscars a trilogia O Senhor dos Anéis, de Peter Jackson, conquistou?",
    "resposta": "Dezessete",
    "distratores": [
      "Onze",
      "Quatorze",
      "Vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)",
        "situacao": "ok",
        "texto": "The Lord of the Rings is a trilogy of epic fantasy films directed by Peter Jackson. The films are based on the novel by J. R. R. Tolkien, drawing their titles and most of their plots from its three volumes: The Fellowship of the Ring (2001), The Two Towers (2002), and The Return of the King (2003). Produced and distributed by New Line Cinema with the co-production of Jackson's WingNut Films, the f\n[…]\nPeter Jackson's trilogy — or, as we like to call it, our preciousssss — exerted its irresistible pull, on advanced Elvish speakers and neophytes alike.\" Paste named it one of the 50 Best Movies of the Decade (2000–2009), ranking it at No. 4.\n[…]\nThe series drew acclaim from within the industry, including from the film directors Steven Spielberg, James Cameron, and George Lucas. John Boorman, who once wrote a script for a Lord of the Rings film, said he was happy his own version was unmade as Jackson's film trilogy was \"of such scope and magnitude that it can only be compared to the building of the great Gothic cathedrals.\" Forrest J.\n[…]\nFrom 2012 to 2014 Peter Jackson and his studio Wingnut Films made The Hobbit trilogy consisting of the films The Hobbit: An Unexpected Journey, The Hobbit: The Desolation of Smaug and The Hobbit: The Battle of the Five Armies. The trilogy works as a prequel to The Lord of the Rings films. Though critics generally considered the trilogy to be inferior to the original films, it was still a financial success.\n[…]\nThe Lord of the Rings left a legacy of court cases over profits from the trilogy. Sixteen cast members (Noel Appleby, Jed Brophy, Mark Ferguson, Ray Henwood, Bruce Hopkins, William Johnson, Nathaniel Lees, Sarah McLeod, Ian Mune, Paul Norell, Craig Parker, Robert Pollock, Martyn Sanderson, Peter Tait, and Stephen Ure) sued over the lack of revenue from merchandise bearing their appearance. The case was resolved out of court in 2008."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is_%28s%C3%A9rie_de_filmes%29",
        "situacao": "ok",
        "texto": "The Lord of the Rings é uma trilogia de filmes épicos de alta fantasia e aventura dirigida por Peter Jackson. Os filmes são baseados no romance The Lord of the Rings de J. R. R. Tolkien e têm os mesmos títulos dos três volumes do romance: The Fellowship of the Ring (2001), The Two Towers (2002) e The Return of the King (2003). Produzida e distribuída pela New Line Cinema com a coprodução da WingNu\n[…]\nA trilogia The Lord of the Rings recebeu aclamação generalizada e é classificada entre as maiores trilogias cinematográficas já feitas.\n[…]\nAté 2017, os filmes de The Lord of the Rings tiveram uma receita de mídia doméstica de mais de US$ 2,4 bilhões.\n[…]\nDe 2012 a 2014, Peter Jackson e seu estúdio Wingnut Films realizaram a trilogia The Hobbit composta pelos filmes The Hobbit: An Unexpected Journey, The Hobbit: The Desolation of Smaug e The Hobbit: The Battle of the Five Armies. A trilogia funciona como um prelúdio aos filmes de The Lord of the Rings. Embora os críticos geralmente considerassem a trilogia inferior aos filmes originais, ela ainda foi um sucesso financeiro.\n[…]\nO filme foi um sucesso crítico e de bilheteria, embora não tão bem-sucedido quanto a série The Lord of the Rings. Jackson foi chamado de \"filho favorito\" da Nova Zelândia. Em 2004, Howard Shore excursionou com The Lord of the Rings Symphony, tocando duas horas da trilha sonora. Junto com a série Harry Potter, a trilogia renovou o interesse pelo gênero de fantasia cinematográfica.\n[…]\nThe Lord of the Rings deixou um legado de processos judiciais sobre lucros da trilogia. Dezesseis membros do elenco (Noel Appleby, Jed Brophy, Mark Ferguson, Ray Henwood, Bruce Hopkins, William Johnson, Nathaniel Lees, Sarah McLeod, Ian Mune, Paul Norell, Craig Parker, Robert Pollock, Martyn Sanderson, Peter Tait e Stephen Ure) processaram por falta de receita de mercadorias com sua aparência. O caso foi resolvido fora dos tribunais em 2008.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "A Noviça Rebelde",
      "descricao": "Filme musical americano de 1965 sobre a família Von Trapp, na Áustria."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em A Noviça Rebelde, a jovem Maria vira governanta de quantos filhos do viúvo capitão Von Trapp?",
    "resposta": "Sete",
    "distratores": [
      "Cinco",
      "Seis",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Sound_of_Music_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Sound_of_Music_(film)",
        "situacao": "ok",
        "texto": "The Sound of Music  is a 1965 American musical drama film produced and directed by Robert Wise from a screenplay written by Ernest Lehman. It is based on the 1959 stage musical composed by Richard Rodgers, with lyrics by Oscar Hammerstein II and a book by Lindsay and Crouse, itself based on the 1949 memoir The Story of the Trapp Family Singers by Maria von Trapp. The film stars Julie Andrews and C\n[…]\nThe Sound of Music story is based on Maria von Trapp's memoir The Story of the Trapp Family Singers, published in 1949 to help promote her family's singing group following the death of her husband Georg in 1947. Hollywood producers expressed interest in purchasing the title only, but Maria refused, wanting her entire story to be told.\n[…]\nThe Sound of Music film adaptation, like the stage musical, presents a fictionalized story inspired by the history of the von Trapp family. The musical was based on the West German film The Trapp Family (1956) rather than Maria von Trapp's 1949 memoirs, as director Vincent J. Donehue had seen the film and decided that it would make a good vehicle for Mary Martin.\n[…]\nThe musical followed The Trapp Family film's plot so closely that the New York Times review of the West German film noticed that it \"strongly suggests 'The Sound of Music,' often scene by scene\". The West German screenwriters made several significant changes to the family's story that were kept in the musical. Maria had been hired to teach just one child, but the 1956 film made her governess to all seven children.\n[…]\nIn 2026, a The Sound of Music museum opened in an old gatehouse at Hellbrunn Palace, near the mansion that is the Trapp's in the film. It displays a collection of items related to the film and documents its development.\n[…]\nThe Sound of Music at Rotten Tomatoes\n[…]\nThe Sound of Music at the AFI Catalog of Feature Films\n[…]\nThe Sound of Music at the TCM Movie Database (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Sound_of_Music",
        "situacao": "ok",
        "texto": "The Sound of Music (bra: A Noviça Rebelde; prt: Música no Coração) é um filme norte-americano de 1965, dos gêneros drama, musical, romance e comédia, dirigido e produzido por Robert Wise, com roteiro de Ernest Lehman baseado no livro de memórias The Story of the Trapp Family Singers, de Maria von Trapp.\n[…]\nProtagonizado por Julie Andrews e Christopher Plummer — que interpretam respetivamente Maria e Capitão von Trapp —, o filme narra as aventuras de uma jovem mulher austríaca que estuda para se tornar uma freira em Salzburgo no ano de 1938 e acaba sendo enviada para a casa de campo de um oficial da marinha viúvo e aposentado, para ser a governanta de seus sete filhos.\n[…]\nMaria, que não consegue seguir as rígidas normas de conduta das religiosas, é enviada para trabalhar como governanta dos 7 filhos do 'Capitão Georg von Trapp'; este é viúvo, e desde a morte de sua esposa educa as crianças com rigor militar.\n[…]\nA história de The Sound of Music é baseada no livro de memórias escrito por Maria von Trapp The Story of the Trapp Family Singers, publicado em 1949 para ajudar a promover o grupo de canto de sua família após a morte de seu marido Georg dois anos antes. Produtores de Hollywood expressaram interesse em comprar apenas o título, porém Maria recusou-se, querendo que sua história completa fosse retratada.\n[…]\nO arranjador musical Irwin Kostal pré-gravou as canções com uma grande orquestra e alguns cantores em um palco, antes mesmo de as filmagens começarem. Ele usou sete crianças e cinco adultos para gravar as vozes infantis; a única cena onde os atores infantis estão cantando de verdade é quando eles cantam \"The Sound of Music\" sozinhos depois que Maria sai. As vozes de alguns dos atores adultos também foram dubladas, como as de Peggy Wood e Christopher Plummer.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "2001: Uma Odisseia no Espaço",
      "descricao": "Filme de ficção científica de 1968 dirigido por Stanley Kubrick, com o computador HAL 9000."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Cada letra do nome do computador HAL, de 2001: Uma Odisseia no Espaço, vem logo antes, no alfabeto, das letras de qual sigla de empresa?",
    "resposta": "IBM",
    "distratores": [
      "NASA",
      "RCA",
      "CBS"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/HAL_9000"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/HAL_9000",
        "situacao": "ok",
        "texto": "HAL 9000 (or simply HAL or Hal) is a fictional artificial-intelligence character in the Space Odyssey series. First appearing in the 1968 film 2001: A Space Odyssey, HAL (Heuristically Programmed Algorithmic Computer) is a sentient general-intelligence computer that controls the systems of the Discovery One spacecraft and interacts with the ship's astronaut crew.\n[…]\nIn 2001: A Space Odyssey (1968), HAL is initially considered a dependable member of the crew, maintaining ship functions and engaging genially with his human crew-mates on an equal footing. As a recreational activity, Frank Poole plays chess against HAL. In the film, the artificial intelligence is shown to triumph easily. However, as time progresses, HAL begins to malfunction in subtle ways and, as a result, the decision is made to shut down HAL in order to prevent more serious malfunctions.\n[…]\nThe details in the novel and the 1984 film 2010: The Year We Make Contact are nominally the same, with a few exceptions. First, in contradiction to the book (and events described in both book and film versions of 2001: A Space Odyssey), Heywood Floyd is absolved of responsibility for HAL's condition; it is asserted that the decision to program HAL with information concerning TMA-1 came directly from the White House.\n[…]\nIBM was consulted during the making of the film and its logo can be seen on props in the film, including the Pan Am Clipper's cockpit instrument panel and on the lower arm keypad on Poole's space suit. During production it was brought to IBM's attention that the film's plot included a homicidal computer, but the company approved association with the film if it was clear any \"equipment failure\" was not related to IBM products.\n[…]\nList of fictional computers\n[…]\nClarke, Arthur C. (1972). The Lost Worlds of 2001. Signet.\n[…]\nText excerpts from HAL 9000 in 2001: A Space Odyssey"
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
    "indice": 11,
    "ancora": {
      "nome": "Hollywood",
      "descricao": "Bairro de Los Angeles, na Califórnia, sede histórica dos grandes estúdios e sinônimo da indústria do cinema americano."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Hollywood, bairro de Los Angeles que virou sinônimo de cinema, junta a palavra inglesa para bosque com o nome de qual planta?",
    "resposta": "Azevinho",
    "distratores": [
      "Carvalho",
      "Pinheiro",
      "Hera"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hollywood,_Los_Angeles",
      "https://en.wiktionary.org/wiki/holly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hollywood,_Los_Angeles",
        "situacao": "ok",
        "texto": "Hollywood, sometimes informally called Tinseltown, is a neighborhood in Central Los Angeles, California. Its name has become synonymous with the American film industry and the people associated with it. Many notable film studios such as Universal Pictures, Skydance Motion Picture Group, Walt Disney Studios and Sony Pictures are located in or near Hollywood.\n[…]\nAs a neighborhood within the Los Angeles city limits, Hollywood does not have its own municipal government. A person was appointed by the Hollywood Chamber of Commerce to serve as an honorary \"Mayor of Hollywood\" for ceremonial purposes. Johnny Grant held this position from 1980 until his death on January 9, 2008.\n[…]\nThe Los Angeles Police Department is responsible for police services. The Hollywood police station is at 1358 N. Wilcox Avenue.\n[…]\nThe Los Angeles County Department of Health Services operates the Hollywood-Wilshire Health Center in Hollywood.\n[…]\nThe Will and Ariel Durant Branch, John C. Fremont Branch, and the Frances Howard Goldwyn – Hollywood Regional Branch of the Los Angeles Public Library are in Hollywood.\n[…]\nLos Angeles Film School, 6363 Sunset Boulevard\n[…]\nLos Angeles Recording School, 6690 Sunset Boulevard\n[…]\nThe Academy Awards, which honor the preceding year in film, have been held every year in late February/early March since 2004; prior to 2004, they were held in late March/early April. Since 2002, the Oscars have been held at the Dolby Theatre (formerly Kodak Theatre) at Hollywood Boulevard and Highland Avenue, with the exception of 2020, when due to the COVID-19 pandemic they were held in Los Angeles Union Station.\n[…]\nThe annual Hollywood Christmas Parade goes down Hollywood Boulevard and is broadcast in the Los Angeles area on KTLA and around the United States on Tribune-owned stations and the WGN superstation. The 75th edition of the parade was held in 2006."
      },
      {
        "url": "https://en.wiktionary.org/wiki/holly",
        "situacao": "ok",
        "texto": "English Wikipedia has an article on: holly"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hollywood",
        "situacao": "ok",
        "texto": "Hollywood é um distrito da região central de Los Angeles, Califórnia, situado a noroeste do centro financeiro da cidade. Seu nome se tornou uma referência abreviada para a indústria cinematográfica dos Estados Unidos e as pessoas a ela associadas. O distrito possui grande importância na constituição da identidade cultural estadunidense e se tornou famoso mundialmente pela concentração de empresas \n[…]\nCom o passar das décadas, Hollywood se tornou símbolo do cinema estadunidense, sediando premiações e abrigando homenagens públicas para os mais destacados artistas de cinema e musicais do mundo. Devido à sua fama e identidade cultural como o centro histórico de estúdios e astros de cinema, a palavra \"Hollywood\" é frequentemente usada como uma metonímia do cinema americano, e é muitas vezes usada alternadamente para se referir à Grande Los Angeles em geral.\n[…]\nO diretor D. W. Griffith foi o primeiro a fazer um filme em Hollywood. Seu curta de 17 minutos In Old California (1910) foi filmado para a Biograph Company. Embora Hollywood proibisse cinemas—dos quais não tinha nenhum—antes da anexação naquele ano, Los Angeles não tinha essa restrição. O primeiro filme de um estúdio de Hollywood, Nestor Motion Picture Company, foi filmado em 26 de outubro de 1911. A casa de H. J.\n[…]\nO censo de 2000 dos EUA contava 77 818 residentes no bairro de Hollywood de 3,51 milhas quadradas (9,1 km²) — uma média de 22 193 pessoas por quilômetro quadrado (8 569 por km²), o sétimo bairro mais denso de todo o condado de Los Angeles. Em 2008, a cidade estimou que a população aumentou para 85 489. A idade mediana dos moradores foi de 31 anos, sobre a média da cidade.\n[…]\nCinemas NOS Lusomundo e Canal Hollywood\n[…]\nHistória do cinema\n[…]\nHollywood Pictures\n[…]\nSinal de Hollywood\n[…]\nMovies | Reviews | Movie Times | Hollywood News | Hollywood.com (em inglês)\n[…]\nA Short History of Hollywood by Historic Resources Group (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Faroeste espaguete",
      "descricao": "Subgênero de faroestes produzidos e dirigidos por italianos, em especial nos anos 1960, como os filmes de Sergio Leone."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os filmes de bangue-bangue rodados por italianos nos anos sessenta, como os de Sergio Leone, ganharam qual apelido culinário?",
    "resposta": "Faroeste espaguete",
    "distratores": [
      "Faroeste lasanha",
      "Faroeste polenta",
      "Faroeste risoto"
    ],
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
        "texto": "Spaghetti western, faroeste espaguete, faroeste macarrônico, ou Bang-bang à italiana é um subgênero western de produção italiana das décadas de 1960 e 1970, muitas vezes com a participação de atores famosos, mesmo em início de sua carreira que mais tarde viriam a tornar-se estrelas internacionais. Essas produções foram geralmente filmadas na Itália ou na Espanha.\n[…]\nGraças a este gênero prolífico, por cerca de oito anos (aproximadamente entre 1964 a 1973) o western experimentou uma renovada popularidade na Itália, após o declínio do faroeste americano (popular nos anos 50). O gênero também foi bem-sucedido fora da Itália, influenciando os temas e convenções do gênero western em outros países.\n[…]\nInicialmente o termo Spaghetti western, originário dos Estados Unidos, indicava somente os longa-metragens rodados em italiano, pobres de meios, segundo as convenções dos primeiros westerns, em parte intencionalmente, como consequência da limitação financeira. Embora o público tenha apreciado o gênero, a crítica reconheceu unicamente o valor dos filmes dirigidos por Sergio Leone, os quais alcançaram um sucesso notório também nos cinemas norte-americanos.\n[…]\nEntre os filmes mais conhecidos, e provavelmente os arquétipos do gênero, estão aqueles da considerada Trilogia dos dólares, dirigidos por Sergio Leone, com Clint Eastwood, que deu vida ao papel do pistoleiro sem nome, e as famosas trilhas sonoras de Ennio Morricone: Per un pugno di dollari (1964), Per qualche dollaro in più (1965) e Il buono, il brutto, il cattivo (1966). Também dirigidos por Leone, C'era una volta il West (1968) e Giù la testa (1971).\n[…]\nAlém de Leone, outros diretores se notabilizaram, entre os quais, Tonino Valerii, Florestano Vancini, Duccio Tessari, Sergio Corbucci, Lucio Fulci e Sergio Sollima.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Rocky, um Lutador",
      "descricao": "Filme de boxe de 1976 sobre o pugilista Rocky Balboa, da Filadélfia."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No ringue, o pugilista Rocky Balboa, vivido por Sylvester Stallone, era conhecido por qual apelido?",
    "resposta": "Garanhão Italiano",
    "distratores": [
      "Touro Indomável",
      "Martelo Italiano",
      "Tigre da Filadélfia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rocky_Balboa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rocky_Balboa",
        "situacao": "ok",
        "texto": "Robert \"Rocky\" Balboa (also known by his ring name the Italian Stallion) is a fictional character and the titular protagonist of the Rocky franchise. The character was created by Sylvester Stallone, who has also portrayed him in eight of the nine films in the franchise. He is depicted as a working class or poor Italian-American from the slums of Philadelphia who started out as a club fighter and \"\n[…]\nRobert \"Rocky\" Balboa was born in Philadelphia, Pennsylvania in 1945. He was the only child in a Roman Catholic Italian or Italian immigrant family. Rocky appears to be fully or semi-fluent in the Italian language; when Rocky is spoken to in Italian by his priest, Father Carmine, it is apparent that Rocky understands the language very well or fluently, including in a scene in which he translates Italian into English for Tommy Gunn.\n[…]\nUnable to live on the low pay of club fights, and being unable to find work anywhere else, Rocky got a job as a collector for Tony Gazzo, the local loan shark, to make ends meet. Rocky was proud that he never had his nose broken in any of his amateur fighting career. His nickname is the Italian Stallion, from his Italian-American heritage.\n[…]\nBalboa was also inspired by other fighting legends: Joe Frazier, for his Philadelphia origin, training methods, and victory against Muhammad Ali (the inspiration for Apollo Creed), and Jake LaMotta, for his Italian-American urban roots, ability to absorb many blows, and his rivalry with Sugar Ray Robinson, which heavily resembled Rocky and Apollo's. However, it was Chuck Wepner who inspired the movie and Balboa's underdog personality.\n[…]\nIn 2007, a Rocky statue was erected in the Serbian village of Žitiste.\n[…]\nIn 2011, Sylvester Stallone was inducted into the International Boxing Hall of Fame for his work on the Rocky Balboa character, having \"entertained and inspired boxing fans from around the world\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rocky_Balboa",
        "situacao": "ok",
        "texto": "Robert \"Rocky\" Balboa (Filadélfia, 6 de Julho de 1946) é um personagem fictício, que segue carreira profissional como boxeador. Seu personagem foi vivido e criado pelo ator Sylvester Stallone.\n[…]\nO Rocky Balboa era um humilde lutador de bairro, que vivia de suas discretas lutas, no início de sua carreira segundo seu treinador Mickey, Rocky era um jovem promissor mas nunca se interessou realmente em evoluir, preferiu trabalhar para um agiota italiano chamado Tony Gazzo, com quem manteve uma certa amizade, Gazzo gostava de Rocky por ele ser descendente de italiano, ajudou Rocky dando US$ 500,00 para o seu treinamento, na primeira luta que fez com Apollo Creed.\n[…]\nFicou mundialmente conhecido após lutar com o enorme Apollo Creed, que apesar da vitória, permitiu ao mundo conhecer a técnica e a força do lutador italiano.\n[…]\nAté que em meio a tudo isso, a ESPN transmite um programa intitulado \"Then vs Now\", que faz a simulação de antigos pugilistas com os atuais. Até que em uma dessas simulações, um jovem Rocky Balboa luta com o atual campeão Mason Dixon. O computador diz que Rocky venceria no 13º round. Pouco demorou para que um imenso burburinho aliado a uma grande empolgação começasse ser gerado na imprensa.\n[…]\nRocky enfrentou os seguintes adversários:\n[…]\nA Patada do Sul mais conhecido pela canhota forte, muitos adversários não gostavam de lutar contra os canhotos \"Pata do Sul\", Duke deixa isso claro quando ele diz a Apollo, \"Não se meta com canhoto\", Apollo o ignora, pois acho o apelido \"Garanhão Italiano\" perfeito para o que planejava. Seu Cartel foi de 81 lutas sendo 57 vitórias (54 por nocaute), 1 empate e 23 derrotas.\n[…]\nA história de Rocky teve até agora apenas quatro games lançados:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Rafiki",
      "descricao": "Mandril sábio e xamã do filme de animação O Rei Leão, da Disney, de 1994."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em O Rei Leão, o nome do sábio mandril Rafiki, que apresenta o filhote ao reino, significa o quê em suaíli?",
    "resposta": "Amigo",
    "distratores": [
      "Sábio",
      "Feiticeiro",
      "Ancião"
    ],
    "fonte": [
      "https://en.wiktionary.org/wiki/rafiki",
      "https://en.wikipedia.org/wiki/The_Lion_King"
    ],
    "trechos": [
      {
        "url": "https://en.wiktionary.org/wiki/rafiki",
        "situacao": "ok",
        "texto": "Swahili Wikipedia has an article on: rafiki\n[…]\nrafiki   class I/IX ( plural rafiki   class II/X or marafiki   class II/X )\n[…]\nRetrieved from \" https://en.wiktionary.org/w/index.php?title=rafiki&oldid=93172521 \""
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Lion_King",
        "situacao": "ok",
        "texto": "The Lion King is a 1994 American animated musical drama film directed by Roger Allers and Rob Minkoff and written by Irene Mecchi, Jonathan Roberts, and Linda Woolverton. Produced by Walt Disney Feature Animation, it features an ensemble voice cast consisting of Matthew Broderick, James Earl Jones, Jeremy Irons, Jonathan Taylor Thomas, Moira Kelly, Niketa Calame, Madge Sinclair, Nathan Lane, Ernie\n[…]\nIn the Pride Lands of Eastern Africa, a pride of lions rules over the kingdom from Pride Rock. King Mufasa and Queen Sarabi's newborn son, Simba, is presented to the gathered animals by Rafiki, the mandrill who is the kingdom's shaman and advisor. Mufasa's younger brother, Scar, covets the throne and plots to eliminate Mufasa and Simba so that he may become king.\n[…]\nAfter Rafiki advises him to learn from the past instead of running from it, Simba decides to return to the Pride Lands.\n[…]\nRobert Guillaume as Rafiki, an old mandrill who serves as the shaman of the Pride Lands and ceremonially presents the newborn cubs of the King and Queen to the gathered animals.\n[…]\nIn 2016, the film was selected for preservation in the United States National Film Registry by the Library of Congress as being \"culturally, historically, or aesthetically significant\".\n[…]\nIn April 2017, Billy Eichner and Seth Rogen joined the film as Timon and Pumbaa, respectively. Two months later, John Oliver was cast as Zazu. At the end of July 2017, Beyoncé had reportedly entered final negotiations to play Nala and contribute a new soundtrack. The following month, Chiwetel Ejiofor entered talks to play Scar. Later on, Alfre Woodard and John Kani joined the film as Sarabi and Rafiki, respectively.\n[…]\nSeth Rogen, Billy Eichner, and John Kani will reprise their roles as Pumbaa, Timon, and Rafiki, respectively. The film was released on December 20, 2024."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Rei_Le%C3%A3o",
        "situacao": "ok",
        "texto": "The Lion King (bra/prt: O Rei Leão) é o 32.º longa-metragem animado produzido pela Walt Disney Feature Animation e pela Walt Disney Pictures e distribuído pela Buena Vista Pictures. Foi dirigido por Roger Allers e Rob Minkoff, com roteiro creditado a Linda Woolverton, Irene Mecchi e Jonathan Roberts, e música de Elton John com letras de Tim Rice.\n[…]\nNala tenta convencer Simba a voltar para casa, dizendo-lhe que as Terras do Reino tornaram-se um terreno baldio sem comida e água. Sentindo-se culpado pela morte de seu pai, Simba se recusa e fica zangado com Nala, deixando-a desapontada e irritada. Quando Simba entra na selva, ele encontra Rafiki, um mandril, amigo e conselheiro de Mufasa. Rafiki diz à Simba que Mufasa está \"vivo\" e leva-o a uma lagoa.\n[…]\nMatthew Broderick como Simba (do suaíli que significa \"leão\"), filho de Mufasa e Sarabi. Um jovem príncipe leão, que, na infância, foi acusado de ser o responsável pela morte do pai após um plano sórdido de seu tio Scar, que lhe convenceu a se auto-exilar para longe, lhe deixando muitos traumas. É o herdeiro legitimo das Terras do Reino. No Brasil, Garcia Júnior.\n[…]\nMoira Kelly como Nala (do suaíli que significa \"sorte\"), a melhor amiga de Simba quando os dois são filhotes. Ela reencontra Simba anos depois, os dois acabam se apaixonando e ela tenta convencê-lo a voltar e enfrentar Scar. No Brasil, Carla Pompílio.\n[…]\nRobert Guillaume como Rafiki (do suaíli que significa \"amigo\"), um velho mandril, amigo de Mufasa, que atua como xamã das Terras do Reino e é responsável pelos batizados dos filhotes recém-nascidos, entre eles o de Simba. Anos mais tarde, também é o responsável por abrir os olhos de Simba em relação a enfrentar o seu passado. No Brasil, Pietro Mário.\n[…]\nSite Brasileiro do Rei Leão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Mickey Mouse",
      "descricao": "Camundongo criado por Walt Disney e Ub Iwerks em 1928, mascote da Disney."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes de ganhar o nome Mickey, por sugestão da esposa de Walt Disney, o famoso camundongo quase se chamou como?",
    "resposta": "Mortimer",
    "distratores": [
      "Oswald",
      "Milton",
      "Marvin"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mickey_Mouse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mickey_Mouse",
        "situacao": "ok",
        "texto": "Mickey Mouse is a cartoon character co-created in 1928 by Walt Disney and Ub Iwerks. The longtime corporate icon and mascot of the Walt Disney Company and a figurehead of American animation, Mickey is an anthropomorphic mouse who typically wears red shorts, large shoes, and white gloves. He is often depicted with a cast of characters including his girlfriend Minnie Mouse, his pet dog Pluto, his be\n[…]\nMickey was created as a replacement for a prior character created by Disney, Oswald the Lucky Rabbit. The character was originally to be named \"Mortimer Mouse\", until Disney's wife, Lillian, suggested \"Mickey\". Mickey first appeared in two 1928 shorts Plane Crazy and The Gallopin' Gaucho (which were not picked up for distribution) before his public debut in Steamboat Willie (1928). The character went on to appear in over 130 films, mostly short films.\n[…]\n\"Mortimer Mouse\" had been Disney's original name for the character before his wife, Lillian, convinced him to change it. It has been speculated that Disney saw the name on a similarly named Performo toy. Additionally, actor Mickey Rooney claimed that during his time performing as the title character of the Mickey McGuire film series (1927–1934), he met Walt Disney at the Warner Bros.\n[…]\nThe character is frequently pitted against larger-than-life villains to accentuate this idea; namely the hulking cat Pegleg Pete, and numerous one-shot antagonists such as the giants of Giantland (1933) and Brave Little Tailor (1938), the king of cards in Thru the Mirror (1936) and Mortimer Mouse in Mickey's Rival (1936). These adversaries were decidedly portrayed as overbearing figures of authority, thusly painting Mickey as a rebellious hero.\n[…]\nAdditionally, in 1932 Walt Disney received an honorary Academy Award in recognition of Mickey's creation.\n[…]\nDisney's Mickey Mouse character page\n[…]\nMickey Mouse's Campaign Website (as archived on August 3, 2008)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mickey_Mouse",
        "situacao": "ok",
        "texto": "Mickey Mouse (também conhecido como Rato Mickey ou apenas Mickey) é um personagem de desenho animado. Foi criado em 1928 por Walt Disney e o desenhista Ub Iwerks. Ícone e mascote de longa data da The Walt Disney Company, Mickey é um rato antropomórfico que normalmente usa shorts vermelhos, grandes sapatos amarelos e luvas brancas.\n[…]\nCriado como um substituto para um personagem anterior da Disney, Oswald, o Coelho Sortudo, Mickey apareceu pela primeira vez no curta Plane Crazy, de 1928, que não foi originalmente escolhido para distribuição; sua estreia pública foi em Steamboat Willie do mesmo ano. O personagem deveria se chamar originalmente \"Mortimer Mouse\", até que Lillian Disney sugeriu \"Mickey\" durante uma viagem de trem.\n[…]\nInicialmente batizado de Mortimer, o personagem teve seu nome alterado para Mickey Mouse por sugestão de Lillian Bounds, esposa de Walt Disney, que considerava o primeiro nome formal demais para o personagem. Inicialmente, Mickey bebia e fumava, mas a popularidade que ganhou em pouco tempo foi tão grande que Walt Disney resolveu torná-lo politicamente correto já em 1930.\n[…]\nDisney considerava o camundongo um amuleto, já que seu sucesso quase imediato em 1928 fez com que saísse da miséria, portanto rechaçou diversas tentativas de seus sócios e subordinados de \"matar\" o personagem ainda nos anos 30. Ele dizia (e sua esposa concordava): \"Nunca liguei para garotas e continuo não ligando. Amo Mickey Mouse mais do que qualquer mulher que já conheci.\"\n[…]\nRanulfo — em inglês, Mortimer. É o equivalente de Gastão para o Pato Donald, um chato que tenta roubar sua namorada.\n[…]\nPaíses Baixos - Mickey Mouse\n[…]\nTchecoslováquia - Mickey Mouse\n[…]\n«Website da Walt Disney sobre o personagem» (em inglês)\n[…]\nSite oficial da Walt Disney no Brasil\n[…]\nMickey Mouse (em inglês) no IMDb\n[…]\nMickey Mouse no Facebook\n[…]\nMickey Mouse no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Studio Ghibli",
      "descricao": "Estúdio japonês de animação fundado por Hayao Miyazaki, Isao Takahata e Toshio Suzuki em 1985."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do Studio Ghibli, de Hayao Miyazaki, vem de uma palavra italiana que designa o quê?",
    "resposta": "Um vento quente do deserto",
    "distratores": [
      "Um pássaro migratório",
      "Um espírito da floresta",
      "Uma estrela cadente"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Studio_Ghibli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Studio_Ghibli",
        "situacao": "ok",
        "texto": "Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation studio based in Koganei, Tokyo. It was founded on June 15, 1985, by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki, after acquiring Topcraft's assets. It has a strong presence in the animation industry and has expanded its portfolio to include various media such as sh\n[…]\nThe name \"Ghibli\" was chosen by Miyazaki from the Italian noun ghibli (also used in English), the nickname of Italy's Saharan scouting plane Caproni Ca.309, in turn derived from the Italianization of the Libyan Arabic name for a hot desert wind (قبلي qibliyy). The name was chosen by Miyazaki out of his passion for aircraft and for the idea that the studio would \"blow a new wind through the anime industry\".\n[…]\nIn February 2017, Toshio Suzuki announced that Hayao Miyazaki had come out of retirement to direct a new feature film with Studio Ghibli.\n[…]\nOn April 4, 2023, Koji Hoshino announced that he had stepped down as chairman, and would serve as a representative director before planning to exit Studio Ghibli completely during the company's annual general shareholder's meeting in June, one month prior to the release of director Hayao Miyazaki's latest movie The Boy and the Heron on July 14.\n[…]\nIn October 2023, the studio became a subsidiary of Nippon Television Holdings, Inc. Studio Ghibli's leadership transitioned to Hiroyuki Fukuda, a senior executive at NTV. Toshio Suzuki became chairman and Hayao Miyazaki became Honorary Chairman. Nippon TV acquired a 42.3% stake in Studio Ghibli. The decision was driven by the advanced ages of Miyazaki and Suzuki, aged 82 and 75, respectively.\n[…]\nAlso, Disney enlarged the \"Studio Ghibli\" and \"Hayao Miyazaki\" labels on the poster, helping to bring greater awareness to the studio through the success of Spirited Away.\n[…]\nList of Japanese animation studios"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Studio_Ghibli",
        "situacao": "ok",
        "texto": "Studio Ghibli, Inc. (株式会社スタジオジブリ, Kabushiki gaisha Sutajio Jiburi) é um estúdio de animação japonês sediado em Koganei, Tóquio. Tem forte presença na indústria de animação e ampliou seu portfólio para incluir diversos formatos de mídia, como curtas-metragens, comerciais de televisão e dois filmes para televisão. Seu trabalho foi bem recebido pelo público e reconhecido com inúmeros prêmios.\n[…]\nO nome \"Ghibli\" foi escolhido por Miyazaki do substantivo italiano ghibli (também usado em inglês), uma italianização do nome árabe líbio para um vento quente do deserto (جبلي; ghiblī) e apelido da aeronave italiana Caproni Ca.309. O nome foi escolhido por Miyazaki devido à sua paixão pela aviação e também pela ideia de que o estúdio iria “soprar novos ventos na indústria de anime”.\n[…]\nEm outubro de 2023, o estúdio tornou-se uma subsidiária da Nippon Television Holdings, Inc. A liderança do Studio Ghibli passou para Hiroyuki Fukuda, executivo sênior da Nippon TV. Toshio Suzuki tornou-se presidente e Hayao Miyazaki tornou-se presidente honorário. A Nippon TV adquiriu uma participação de 42,3% no Studio Ghibli. A decisão foi motivada pela idade avançada de Miyazaki e Suzuki, de 82 e 75 anos, respectivamente.\n[…]\nPara o autor do cartaz japonês, há menos espíritos, uma vez que a religião xintoísta japonesa normaliza a existência de espíritos, pelo que é necessária menos ênfase para transmitir a importância dos espíritos não-humanos. Além disso, a Disney ampliou os rótulos “Studio Ghibli” e “Hayao Miyazaki” no pôster, ajudando a trazer maior conhecimento ao estúdio através do sucesso de Spirited Away.\n[…]\nParque Ghibli\n[…]\nStudio Kajino, uma subsidiária do Estúdio Ghibli\n[…]\nOdell, Colin, and Michelle Le Blanc. Studio Ghibli: The Films of Hayao Miyazaki and Isao Takahata. Harpenden, Hertfordshire, England: Kamera, 2009. ISBN 978-1-84243-279-2ISBN 978-1-84243-279-2. OCLC 299246656OCLC 299246656.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Matrix",
      "descricao": "Filme de ficção científica de 1999, das irmãs Wachowski, sobre um programador que descobre viver numa realidade simulada."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em Matrix, o nome do herói Neo é um anagrama de qual palavra inglesa, ligada à profecia sobre ele?",
    "resposta": "One",
    "distratores": [
      "Hope",
      "Zion",
      "Free"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Neo_(The_Matrix)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neo_(The_Matrix)",
        "situacao": "ok",
        "texto": "Neo (born as Thomas A. Anderson, also known as The One) is a fictional character and the protagonist of The Matrix franchise, created by the Wachowskis. He was portrayed as a cybercriminal and computer programmer by Keanu Reeves in the films, as well as having a cameo in The Animatrix short film Kid's Story. Andrew Bowen provided Neo's voice in The Matrix: Path of Neo. In 2021, Reeves reprised his\n[…]\nIt reaches from here all the way back to where it came from.\" Apparently because of his status as The One, he has a direct connection to the Source in the real world, and can therefore affect everything connected to it, including Sentinels, although the first use of this ability overwhelms him and he falls into a coma as his mind somehow plugs into the Matrix without a physical connection.\n[…]\nIn The Matrix Resurrections, the resurrected Neo at first doesn't have access to his powers, although he slowly regains them over time, particularly during his fight with Smith. Neo is now able to create powerful telekinetic shockwaves, particularly when touching Trinity, and while he can still stop bullets, it appears to take him more effort. At one point, he telekinetically deflects a missile into a helicopter and shields himself from Smith smashing a porcelain sink down on his head.\n[…]\nNeo uses a variety of martial arts styles across the four Matrix movies. In the first film, Neo's skill in martial arts was shown being downloaded into his brain, which granted combat abilities equivalent to a martial artist with decades of experience. As part of the preparation for the movie, Yuen Woo-ping had Keanu Reeves undertake four months of martial arts training in a variety of different styles.\n[…]\nThe Matrix Trilogy: A Man-Machine Interface Perspective: a study of the trilogy from a strictly technological as opposed to philosophical viewpoint"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Neo_%28Matrix%29",
        "situacao": "ok",
        "texto": "Thomas A. Anderson, mais conhecido pelo pseudônimo Neo, é um personagem fictício e o protagonista da franquia de ficção científica Matrix, interpretado pelo ator canadense Keanu Reeves nos filmes: The Matrix, The Matrix Reloaded, The Matrix Revolutions, The Matrix Resurrections e na animação Animatrix.\n[…]\nExiste uma profecia, na qual  creem enquanto outros duvidam, que prevê o surgimento de um humano capaz de manipular o código da Matrix, quebrando suas regras físicas e realizando feitos sobre-humanos dentro da simulação. Essa pessoa é chamada de \"O Escolhido\" (em inglês, The One). Encontrá-lo é a missão de vida de Morpheus, capitão de uma nave da frota de Zion, auxiliado por sua imediata, Trinity. A lenda diz que \"O Escolhido\" porá fim à guerra perpétua\n[…]\nO nome \"Neo\" é um anagrama da palavra inglesa \"One\" (\"Um\", em referência a \"O Escolhido\"), o que funciona como uma pista sobre sua verdadeira identidade\n[…]\nAssim como a paz, Neo também tinha negociado que qualquer mentes humanas que se tornam conscientes da natureza da Matrix terá permitida a liberdade sem interferências.\n[…]\nNo mundo real, Neo tem um certo grau de conectividade sem fio com o sistema da Matrix: ele pode sentir a presença das máquinas, e até mesmo interferir na sua função. Aparentemente, devido ao seu estatuto como escolhido (The One), que tem uma ligação direta à fonte, e, portanto, pode também afetar as máquinas ligadas a ele.\n[…]\nHouve também um jornal encontrado em uma das missões do jogo detalhado, que uma mulher que de repente e inesperadamente acordada deixa o hospital sem uma palavra. O nome da mulher era Sarah Edmontons, que é um anagrama de Thomas Anderson. Isto foi recentemente confirmado como não sendo um fio solto como MxO escritor Paul Chadwick \"tinha esquecido [SIC] no jornal\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Marilyn Monroe",
      "descricao": "Atriz, modelo e cantora americana, símbolo sexual de Hollywood nos anos 1950, estrela de Quanto Mais Quente Melhor."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes de adotar o nome artístico que a tornou um mito de Hollywood, Marilyn Monroe foi registrada com qual nome?",
    "resposta": "Norma Jeane Mortenson",
    "distratores": [
      "Frances Ethel Gumm",
      "Betty Joan Perske",
      "Lucille LeSueur"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Marilyn_Monroe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marilyn_Monroe",
        "situacao": "ok",
        "texto": "Marilyn Monroe ( MAIR-ə-lin mən-ROH; born Norma Jeane Mortenson; June 1, 1926 –  August 4, 1962) was an American actress and model. Known for playing comic \"Blonde bombshell\" characters, she became one of the most popular sex symbols of the 1950s and early 1960s, as well as an emblem of the era's sexual revolution. She was a top-billed actress for a decade, and her films grossed $200 million (equi\n[…]\nMonroe was born Norma Jeane Mortenson on June 1, 1926, at Los Angeles General Hospital. Her mother, Gladys Pearl Baker (née  Monroe), was born in Piedras Negras, Coahuila, Mexico, into a poor American family originally from the Midwest who migrated to California at the turn of the century. At age fourteen, Gladys had married John Newton Baker, an abusive man nine years her senior. They had two children together, Robert and Berniece.\n[…]\nFollowing the divorce, Gladys worked as a film negative cutter at Consolidated Film Industries. In 1924, she married Martin Edward Mortensen, but the union lasted only a few months, although they did not legally divorce until four years later. Gladys named Mortensen (misspelled \"Mortenson\") as Monroe's father in the birth certificate, but most of Monroe's biographers agree that this was unlikely as their separation had taken place well before she became pregnant.\n[…]\nHundreds of books have been written about Monroe. She has been the subject of numerous films, plays, operas, and songs, and has influenced artists and entertainers such as Andy Warhol and Madonna. Documentaries have been made about her life, e.g. The Legend of Marilyn Monroe (1966, narrated by John Huston), Marilyn (1963, hosted by Rock Hudson).\n[…]\nMarilyn Monroe: Hollywood Icon 2026 exhibition at the Academy Museum of Motion Pictures\n[…]\nMarilyn Monroe at the American Film Institute Catalog\n[…]\nMarilyn Monroe at IMDb\n[…]\nMarilyn Monroe discography at Discogs"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Marilyn_Monroe",
        "situacao": "ok",
        "texto": "Marilyn Monroe ([ˈmærəlɪn mənˈroʊ] MARR-ə-lin-mən-ROH; nascida Norma Jeane Mortenson; Los Angeles, 1 de junho de 1926 – Los Angeles, 4 de agosto de 1962) foi uma atriz e modelo norte-americana. Conhecida por interpretar personagens cômicas do tipo \"loira bombástica\", tornou-se um dos símbolos sexuais mais populares da década de 1950 e do início da década de 1960, bem como um emblema da revolução s\n[…]\nNorma Jeane Mortenson nasceu no dia 1 de junho de 1926, sendo a terceira filha de Gladys Pearl Monroe (1902–1984). Os irmãos mais velhos de Monroe eram Robert (1917–1933) e Berniece (1919-2014). Ela não sabia que tinha uma irmã até completar doze anos de idade, conhecendo-a apenas depois de adulta. A identidade do pai biológico de Marilyn é desconhecida. Durante sua infância, Mortensen e Baker foram usados como seus sobrenomes em registros públicos.\n[…]\nMarilyn estreou em três filmes lançados em 1953, além de revitalizar a sua carreira,  tornou-a num importante símbolo sexual e um dos artistas mais rentáveis de Hollywood. O primeiro foi o filme noir gravado em Technicolor Torrentes de Paixão, no qual interpretou uma intrigante mulher fatal que planejava assassinar o seu marido, interpretado por Joseph Cotten.\n[…]\nCentenas de livros foram escritos sobre Monroe; além de ter sido o tema principal de filmes, peças de teatro, óperas e canções, ela também é creditada como a maior influência de diversos artistas, incluindo Andy Warhol e Madonna. Marilyn também continua sendo uma marca valiosa; a sua imagem e nome foram licenciados para centenas de produtos, e tem sido destaque em publicidades para corporações multinacionais, como a Max Factor, Chanel, Mercedes-Benz e Absolut Vodka.\n[…]\nDa mesma forma, Banner descreve Marilyn como um \"metamorfo eterno\" que é \"recriado por cada geração e cada indivíduo baseado em suas próprias especificações\".\n[…]\nMarilyn Monroe no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Oscar",
      "descricao": "Prêmio anual da Academia de Artes e Ciências Cinematográficas dos Estados Unidos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a versão mais contada, a estatueta da Academia ganhou seu famoso apelido porque uma funcionária a achou parecida com quem?",
    "resposta": "Um tio dela",
    "distratores": [
      "O pai dela",
      "O avô dela",
      "O chefe dela"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Academy_Awards"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Academy_Awards",
        "situacao": "ok",
        "texto": "The Academy Awards, more commonly known as the Oscars, are awards based on artistic and technical merit in film. They are presented annually by the Academy of Motion Picture Arts and Sciences (AMPAS) in the United States in recognition of excellence in cinematic achievements around the world, as assessed by the Academy's voting membership. The Oscars are widely considered to be the most prestigiou\n[…]\nThe Academy Student Academy Awards (annual).\n[…]\nAt the 1st Academy Awards for the 1927/28 eligibility period, an Oscar was awarded for Best Engineering Effects, which can be understood as a forebear of the Best Visual Effects award.\n[…]\nDue to the positive exposure and prestige of the Academy Awards, many studios spend around 25 million dollars and hire publicists specifically to promote their films during what is typically called the \"Oscar season\". This has generated accusations of the Academy Awards being influenced more by marketing and lobbying than by quality.\n[…]\nTypical criticism of the Academy Awards for Best Picture is that among the winners and nominees there is an over-representation of romantic historical epics, biographical dramas, romantic dramedies and family melodramas, most of which are released in the U.S. in the last three months of the calendar year. The term \"Oscar bait\" was coined to describe films in such genres.\n[…]\nFischer, Erika J. (1988). The Inauguration of \"Oscar\": Sketches and Documents from the Early Years of the Hollywood Academy of Motion Picture Arts and Sciences and the Academy Awards, 1927–1930. Munich: K. G. Saur Verlag. ISBN 978-3-598-10753-5. OCLC 925086635.\n[…]\nKinn, Gail; Piazza, Jim (2002). The Academy Awards: The Complete History of Oscar. Black Dog & Leventhal Publishers. ISBN 978-1-57912-240-9.\n[…]\nLevy, Emanuel (2003). All About Oscar: The History and Politics of the Academy Awards. Burns & Oates. ISBN 978-0-8264-1452-6.\n[…]\nAcademy Awards at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93scar",
        "situacao": "ok",
        "texto": "O Óscar ou Oscar (do inglês: The Oscars), anteriormente chamado de Prêmios da Academia (português brasileiro) ou Prémios da Academia (português europeu) (do inglês: The Academy Awards), é uma cerimônia de premiação anual da Academia de Artes e Ciências Cinematográficas, fundado em Los Angeles em 1927, que presenteia anualmente os profissionais da indústria cinematográfica.\n[…]\nSegundo a Enciclopédia Novo Mundo, estima-se que mais de um bilhão de pessoas assistem ao Oscar ao vivo ou gravadas a cada ano, equiparando a cerimônia a audiências de eventos televisivos mundiais importantes como a Copa do Mundo FIFA e os Jogos Olímpicos. A cerimônia de 1998 mantém o recorde da maior audiência da história dos Prêmios da Academia, onde foi registrado que 57,25 milhões de pessoas assistiram à transmissão somente nos Estados Unidos.\n[…]\nA versão mais popular e conhecida para o nome dado ao careca dourado é a que concede sua autoria à secretária-executiva da Academia, Margareth Herrick, que ao vê-lo comentou que a pequena estátua parecia muito com seu tio Oscar, comparação ouvida por um jornalista presente no momento, que a publicou em seu jornal. Outra versão dá conta que a atriz Bette Davis o teria apelidado assim, dado a semelhança da estatueta com seu primeiro marido, Harmon Oscar Nelson.\n[…]\nAs categorias que compõem os Prêmios da Academia:\n[…]\nAlguns vencedores criticaram o Oscar, boicotaram as cerimônias e se recusaram a aceitar seus Oscars. O primeiro a fazê-lo foi Dudley Nichols (melhor roteiro em 1935 por The Informer). Nichols boicotou o oitava cerimônia por causa de conflitos entre a Academia e o Writers Guild of America Award. George C. Scott tornou-se a segunda pessoa a recusar o prêmio (melhor ator em 1970 por Patton) na 43ª cerimônia.\n[…]\nPEREIRA FILHO, Francisco Alves. Oscar Awards: A História Completa do Maior Prêmio do Cinema Mundial. BLUHM. 2002",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Shrek",
      "descricao": "Ogro verde protagonista da série de filmes de animação Shrek, da DreamWorks."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do ogro Shrek, herói da DreamWorks, vem de uma palavra alemã e iídiche que significa o quê?",
    "resposta": "Medo",
    "distratores": [
      "Gigante",
      "Lama",
      "Solidão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shrek_(character)",
      "https://en.wikipedia.org/wiki/Shrek!"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shrek_(character)",
        "situacao": "ok",
        "texto": "Shrek is a fictional ogre character created by American author and cartoonist William Steig. Shrek is the protagonist of the book of the same name and a series of films by DreamWorks Animation, as well as a musical. The name \"Shrek\" is a romanization of the Yiddish word שרעק (shrek), or שרעקלעך (shreklekh), related to the German Schreck and meaning \"fear\" or \"fright\". In the films, Shrek was voice\n[…]\nWhen Steven Spielberg purchased the book rights in 1991, he had planned for Bill Murray to play Shrek. Nicolas Cage was offered the role of Shrek at one point, but turned it down. In 1996, DreamWorks hired Chris Farley to do the voice. Farley had recorded 80 to 90% of the dialogue for the character, but died in December 1997, before completing the project. This would result in development of the film being scrapped, such as storyboards and recording sessions, which cost $34 million alone.\n[…]\nIn August 1998, DreamWorks then re-cast the role with Mike Myers, who insisted on a complete script rewrite, to leave no traces of Farley's version of Shrek. Myers stated that the reason he was interested in voicing the character was remembrances of his mother acting out fairy tales:My mother used to take me to the library in Toronto to check out the fairy tales. And she was an actress, so she used to act out for me the different characters in all these fairy tales.\n[…]\nArt director Douglas Rogers visited a magnolia plantation in Charleston, South Carolina, for inspiration for Shrek's swamp.\n[…]\nIn video games, Shrek appeared as an unlockable player in Tony Hawk's Underground 2, and as a playable character in both Madagascar Kartz and DreamWorks Super Star Kartz. Myers reprised his role as Shrek for a cameo in his Netflix mini-series, The Pentaverate. A parody of Shrek appears in 2025's Borderlands 4. A swamp can be found with a green enemy named Wreck and a donkey named Burro."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Shrek!",
        "situacao": "ok",
        "texto": "Shrek! is a children's picture book published in 1990. Written and illustrated by American writer and cartoonist William Steig, it is about a repugnant monster who leaves home to see the world and ends up marrying an ugly princess. The book was generally well-received upon publication, with critics praising the illustrations, originality, and writing. Critics have also described Shrek as an antihe\n[…]\nThe book served as the basis for the 2001 DreamWorks Animation film Shrek, which subsequently became a multimedia franchise.\n[…]\nThe name \"Shrek\" is a romanization of the Yiddish word שרעק (shrek), or שרעקלעך (shreklekh), related to the German Schreck and meaning \"fear\" or \"fright\". Shrek! was published by Farrar, Straus and Giroux.\n[…]\nSteven Spielberg purchased the rights for the book in 1991, planning to produce a traditionally animated film based on the book (which would have been in 2D animation, and was going to star Bill Murray as Shrek and Steve Martin as Donkey). However, DreamWorks ended up purchasing the rights for the book for approximately $500,000 and putting it in active development in November 1995.\n[…]\nShrek was released on May 18, 2001, in CGI, starring the voices of Mike Myers, Eddie Murphy, Cameron Diaz, and John Lithgow. The film was a critical and commercial success and won the first ever Academy Award for Best Animated Feature. It was followed by several other films, including: Shrek 2 (2004), Shrek the Third (2007),  Shrek Forever After (2010), and the upcoming Shrek 5 (2027). The first film was adapted into a Broadway musical in 2008.\n[…]\nSeveral critics highlighted differences between the Shrek film and Steig's original version, including the addition of characters and changing the plot and morals. However, Steig said that he liked the movie and it dramatically increased sales of his book. Steig said of the film: \"It's vulgar, it's disgusting—and I love it!\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shrek_%28personagem%29",
        "situacao": "ok",
        "texto": "Shrek é uma franquia de filmes de animação computadorizada direcionados principalmente ao público infantojuvenil e os diversos outros itens que estes filmes inspiraram. Foi criada em 2001 pela DreamWorks Animation com o longa-metragem animado Shrek, vagamente baseado no livro infantil Shrek! de William Steig, publicado em 1990.\n[…]\nShrek (nome oriundo da palavra germânica Schreck, que significa \"medo\" ou \"terror\") é como chama do protagonista da série: um ogro verde, grande e sem modos que vive sozinho e satisfeito em seu pântano e exerce hábitos peculiares como tomar banho de lama e comer olhos, ratos e insetos, espantando qualquer um que se aproxime de seus domínios.\n[…]\nShrek\n[…]\nNicolas Cage foi convidado para fazer a voz de Shrek, mas desistiu do papel por não querer parecer \"um ogro feio\". Chris Farley incorporou então o papel e dublou quase todo o diálogo. No entanto, como ele morreu antes da produção ser finalizada, sua versão teve que ser descartada e substituída pela dublagem de Mike Myers. Myers insistiu que todo o roteiro fosse re-escrito, pois não queria nenhum traço da dublagem de Farley.\n[…]\n\"What I Like About You\" - The Romantics; cantado por Shrek (Michael Gough) e Fiona (Renee Sands)\n[…]\nO maior parque temático da Austrália, o Dreamworld, possui uma atração chamada Shrek's Faire Faire Away dentro da área DreamWorks Experience. Aberta em 2012, consiste em quatro atrações giratórias: Dronkey Flyers, Gingy's Glider, Puss in Boots Sword Swing e Shrek's Ogre-Go-Round.\n[…]\nO London County Hall também tem uma atração temática de Shrek, chamada DreamWork's Tours Shrek's Adventure! London, aberta em 2015. Planejada durante nove anos em colaboração com a Merlin Entertainments, a atração consiste numa caminhada de 1900 m² rodeada de personagens e ambientes de Shrek e outras séries da DreamWorks.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Chewbacca",
      "descricao": "Guerreiro wookiee, copiloto de Han Solo na saga Star Wars."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Indiana, o cachorro de George Lucas, emprestou o nome ao arqueólogo Indiana Jones e também inspirou qual personagem de Star Wars?",
    "resposta": "Chewbacca",
    "distratores": [
      "R2-D2",
      "Yoda",
      "Jar Jar Binks"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chewbacca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chewbacca",
        "situacao": "ok",
        "texto": "Chewbacca, nicknamed \"Chewie\", is a fictional character in the Star Wars franchise. He is a Wookiee—a tall, hairy, highly intelligent species originating from the planet Kashyyyk. He is 7.5 feet (2.3 m) tall, and typically wears only a bandolier and a tool pouch. He carries a bowcaster, a traditional Wookiee weapon, and he speaks the Wookiee language Shyriiwook. He first appeared in the original S\n[…]\nGeorge Lucas invented many fictional characters while writing the original 1977 Star Wars film. Chewbacca was inspired by his dog, an Alaskan Malamute named Indiana. She would sit in the passenger seat of his car while he was driving, and he referred to her as his \"co-pilot\". Chewbacca's name was derived from the Russian word sobaka (собака), which means \"dog\".\n[…]\nWhen creating concept art for Chewbacca, the Star Wars illustrator Ralph McQuarrie drew inspiration from John Schoenherr's 1975 illustrations for the science fiction magazine Analog.\n[…]\nIn the Czech version of the original Star Wars films, Chewbacca's name was changed to Žvejkal, a name derived from the Czech word žvýkat, meaning “to chew.” The name was used in older Czech translations before later versions returned to the original Chewbacca.\n[…]\nThe 1978 television program Star Wars Holiday Special introduces Chewbacca's family, including his wife Mallatobuck, his son Lumpawarrump, and his father Attichitcuk, who is the chief of the Kaapauku Tribe. The program features a story in which Chewbacca and Han travel to Kashyyyk to celebrate Life Day, while trying to prevent Darth Vader from spoiling the holiday.\n[…]\nVector Prime was followed by the comic series Star Wars: Chewbacca, in which C-3PO and R2-D2 travel the galaxy collecting stories of beings who knew or met the Wookiee.\n[…]\nChewbacca Mask Lady\n[…]\nBrown, Angie (February 17, 2024). \"I made my Star Wars Chewbacca suit from 45 bags of hair extensions\". BBC. Retrieved August 31, 2024."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chewbacca",
        "situacao": "ok",
        "texto": "Na série Star Wars (Guerra nas Estrelas), Chewbacca — apelido: Chewie — é o copiloto da nave Millennium Falcon e  o melhor amigo de Han Solo, e um alienígena da raça Wookiee, oriundo do planeta Kashyyyk. Tendo participado de sete dos nove filmes da franquia (A Vingança dos Sith, Uma Nova Esperança, O Império Contra-Ataca, O Retorno do Jedi, O Despertar da Força, Os Últimos Jedi e A Ascensão Skywal\n[…]\nGrande mecânico, esse wookie usa tal habilidade para resolver diversos problemas da nave Millennium Falcon, e em O Império Contra-Ataca, Chewbacca remonta C-3PO e quando ele é destruído pelos soldados imperiais na Cidade das Nuvens, em Bespin. Seu instinto animal também o colocou numa encrenca na lua florestal de Endor em O Retorno de Jedi, quando fareja uma presa (que na verdade era uma armadilha feita por Ewoks).\n[…]\nAlém de sua força natural e de suas garras retráteis, ele usa como arma principal sua besta a laser. Chewbacca é um jogador de xadrez dejarik holográfico muito temperamental, e seus adversários correm o risco de ter os braços arrancados durante a partida, se Chewie estiver perdendo.\n[…]\nDepois da fuga, Chewbacca e Han Solo se unem à Aliança Rebelde, na luta contra o Império Galáctico.\n[…]\nDepois, com a ajuda de um velho amigo de Chewie, Shoran, eles resgatam os Wookies aprisionados na estação Avatar, incluindo Attchitchuk, pai de Chewbacca. Assim eles matam Moff Darcc e Pekt, o escravizador salvando Kashyyyk por um tempo. Anos depois outro escravizador prende Wookies de Kashyyyk e os deixa sem ar num asteroide (Pekt preferiu montar uma base em Kashyyyk, assim facilitando para Han e Chewie resgatarem os Wookies), mas Han, Chewie, Luke e Leia reestabelecem o ar nas prisões.\n[…]\nChewbacca era casado com a Wookiee Mallatobuck e era filho de Attchitchuk. Seu sobrinho, Lowbacca, foi um dos poucos Wookiees a entrar na Academia Jedi.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Procurando Nemo",
      "descricao": "Animação da Pixar de 2003 sobre o peixe-palhaço Marlin que busca seu filho Nemo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O peixinho Nemo, da Pixar, tem o mesmo nome do capitão do submarino Náutilus, criado por qual escritor?",
    "resposta": "Júlio Verne",
    "distratores": [
      "H. G. Wells",
      "Herman Melville",
      "Robert Louis Stevenson"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Captain_Nemo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Captain_Nemo",
        "situacao": "ok",
        "texto": "Captain Nemo ( NAY-moh; also known as Prince Dakkar) is a character created by the French novelist Jules Verne (1828–1905). Nemo appears in two of Verne's science-fiction books, Twenty Thousand Leagues Under the Seas (1870) and The Mysterious Island (1875). He also makes a brief appearance in a play written by Verne with the collaboration of Adolphe d'Ennery, Journey Through the Impossible (1882).\n[…]\nThe captain is consumed by a hunger for vengeance and hatred of imperialism; Verne included references to anti-imperialist uprisings, including the Kościuszko Uprising and Indian Rebellion of 1857, in the various backstories of Nemo.\n[…]\nIn early drafts of Twenty Thousand Leagues Under the Seas, Nemo appears as a Polish noble, a member of the szlachta bent on avenging the murder of his family during Russia's violent suppression of the January Uprising. Verne's editor Pierre-Jules Hetzel feared that the book would offend the Russian Empire, a major French ally, and cause the book to be banned from that country's bookstores.\n[…]\nAccordingly, Hetzel insisted that Verne revise the novel to conceal Nemo's background and political motivations.\n[…]\nIn 1990, the group Dive released their debut single \"Captain Nemo\", based on Verne's character. This song was covered by Sarah Brightman on her 1993 album Dive.\n[…]\nThe Japanese otome visual novel Code: Realize- Guardian of Rebirth features a scientist named Nemo. Nemo creates an airship named the Nautilus within the game. He considers the engineer Impey Barbicane, a reference to another Jules Verne novel, his ultimate scientific rival.\n[…]\nThe 2024 ten-part adventure drama television series Nautilus focuses on Nemo and the backstory of the eponymous submarine. A reimagining of the original Verne novel, the series presents an origin for Nemo as a prince-turned-crusading scientist.\n[…]\nLiterary analysis of the novels of Jules Verne (In French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Nemo",
        "situacao": "ok",
        "texto": "Capitão Nemo (do latim: Capitão \"Ninguém\") — Também conhecido como Príncipe Dakkar — é um personagem fictício que aparece em duas obras escritas por Júlio Verne: Vinte Mil Léguas Submarinas (1870) e A Ilha Misteriosa(1874). Nemo era o capitão do submarino Náutilus.\n[…]\nO mundo toma conhecimento de sua existência quando ele destrói alguns navios de guerra e o Náutilus é confundido com um monstro. Capitão Nemo tenta o tempo todo esconder suas ligações com a civilização, dizendo sempre que agora vive em um mundo à parte, embora às vezes deixe escapar\n[…]\nNo livro A Ilha Misteriosa, o Capitão Nemo aparece no último trecho, quando os náufragos da ilha descobrem que ele estava escondido lá o tempo todo e os ajudava em sua sobrevivência. O Capitão já está velho e conta sua história de vida para os náufragos. Mais tarde, o Capitão morre.\n[…]\nThe League of Extraordinary Gentlemen, história em quadrinhos escrita por Alan Moore e desenhada por Kevin O'Neill, publicada originalmente em 1999, traz o Capitão como um dos heróis reunidos em uma equipe de elite reunida por M, misterioso homem a serviço da Coroa Britânica, que posteriormente revelou ser o vilão Professor Moriarty, maior inimigo do detetive Sherlock Holmes e que, após sua derrocada, foi substituído por Campion Bond (avô de James Bond).\n[…]\nA história tornou-se, em 2003, um longa-metragem estrelado por Sean Connery com o ator indiano Naseeruddin Shah no papel do Capitão Nemo. Ao contrário da publicação de 1999 - indicada e vencedora de diversos prêmios da área - o filme foi um fracasso de público e crítica.\n[…]\nJúlio Verne (2012). 20 Mil Léguas Submarinas. Rio de Janeiro: Zahar. ISBN 978-85-378-1386-7\n[…]\nJúlio Verne (2015). A Ilha Misteriosa. Rio de Janeiro: Zahar. 552 páginas. ISBN 9788537814529",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Forrest Gump",
      "descricao": "Filme americano dirigido por Robert Zemeckis, com Tom Hanks como um homem simples que atravessa décadas da história dos Estados Unidos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Tom Hanks ganhou o Oscar de melhor ator por Forrest Gump um ano depois de levar o mesmo prêmio por qual filme?",
    "resposta": "Filadélfia",
    "distratores": [
      "Quero Ser Grande",
      "Splash",
      "Sintonia de Amor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tom_Hanks"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tom_Hanks",
        "situacao": "ok",
        "texto": "Thomas Jeffrey Hanks (born July 9, 1956) is an  American actor and filmmaker. Known for both his comedic and dramatic roles, he is one of the most popular and recognizable film stars worldwide, and is regarded as an American cultural icon. In 2020, Hanks was ranked as the fourth-highest-grossing American film actor of all time. His numerous awards include two Academy Awards, seven Emmy Awards, and\n[…]\nHanks followed Philadelphia with Robert Zemeckis's Forrest Gump (1994), playing the title character, a man with an IQ of 75 who happens to find himself involved with some of the major events in recent American history. It grossed a worldwide total of $678 million. Hanks remarked, \"When I read the script for Gump, I saw it as one of those kind of grand, hopeful movies that the audience can go to and feel ... some hope for their lot and their position in life ...\n[…]\nHanks reprised the role of Woody in Toy Story 2 (1999).\n[…]\nProduction originally progressed under the working title The Mighty Eighth, but it was eventually announced the series would keep the original title and stream on Apple TV+ where it premiered on January 26, 2024. Hanks starred in the film Here (2024), an adaptation of Richard McGuire's graphic novel that reunited Hanks with Forrest Gump co-star Robin Wright and director Robert Zemeckis.\n[…]\nIn Hanks's career as an actor and producer, he has received many award nominations. Hanks has received six Academy Award nominations including two consecutive wins for Best Actor for Philadelphia and Forrest Gump in 1993 and 1994 respectively. Hanks also received a Tony Award nomination for Best Actor in a Play for his performance in Nora Ephron's play Lucky Guy in 2013.\n[…]\nTom Hanks at IMDb\n[…]\nTom Hanks at Rotten Tomatoes\n[…]\nTom Hanks at the TCM Movie Database (archived)\n[…]\nTom Hanks at the Internet Broadway Database\n[…]\nArchive of five interviews of Hanks by Terry Gross on Fresh Air"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tom_Hanks",
        "situacao": "ok",
        "texto": "Thomas Jeffrey \"Tom\" Hanks (Concord, 9 de julho de 1956) é um ator e cineasta norte-americano. Conhecido por seus papéis cômicos e dramáticos, é uma das estrelas de cinema mais populares e reconhecidas em todo o mundo, sendo considerado um ícone cultural americano. Os filmes de Hanks arrecadaram mais de 4,9 bilhões na América do Norte, tornando-o o quinto ator de maior bilheteria na América do Nor\n[…]\nHanks já foi indicado e venceu diversos prêmios ao longo de sua carreira, incluindo suas duas vitórias consecutivas ao Oscar de Melhor Ator por sua interpretação em Philadelphia (1993) e Forrest Gump (1994). Também recebeu do BAFTA o Prêmio Stanley Kubrick Britannia por Excelência no Cinema em 2004, o Kennedy Center Honor em 2014, a Medalha Presidencial da Liberdade em 2016 e o Golden Globe Cecil B. DeMille Award em 2020.\n[…]\nEm 1994, Tom estrelou outro sucesso aclamado, Forrest Gump, que contava o crescimento de um jovem portador de debilidade mental de forma única, mesclando comédia e drama, e que mostrava uma visão do desenvolvimento da sociedade dos Estados Unidos nas últimas décadas, sendo totalmente influenciado por Forrest. A atuação lhe rendeu seu segundo, e consecutivo, Oscar de Melhor Ator. Além disso, ganhou mais cinco Oscars, incluído Melhor Filme e Melhor Diretor para Robert Zemeckis.\n[…]\nA atuação de Hanks, foi aclamada pela critica e pelo público e ele ganhou o Globo de Ouro de Melhor Ator em Filme de Drama e foi novamente indicado ao Oscar de Melhor Ator. Arrecadou US$ 429,6 milhões em todo o mundo, tornando-se o terceiro filme de maior bilheteria de 2000. No mesmo ano, mais uma vez como produtor e diretor, Hanks voltou a falar sobre a guerra na minissérie da HBO, Band of Brothers.\n[…]\nSeu outro lançamento foi o filme News of the World, de Paul Greengrass. Em 2021, Hanks estrelou o drama de ficção científica Finch, lançado pela Apple TV+.\n[…]\nColin Hanks\n[…]\nTom Hanks no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Era Uma Vez no Oeste",
      "descricao": "Faroeste italiano de 1968 dirigido por Sergio Leone."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que compositor italiano criou a trilha de Era Uma Vez no Oeste, de Sergio Leone, e também a de Cinema Paradiso?",
    "resposta": "Ennio Morricone",
    "distratores": [
      "Nino Rota",
      "Riz Ortolani",
      "Luis Bacalov"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ennio_Morricone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ennio_Morricone",
        "situacao": "ok",
        "texto": "Ennio Morricone (10 November 1928 – 6 July 2020) was an Italian composer, orchestrator, conductor, trumpeter, and pianist who wrote music in a wide range of styles. With more than 400 scores for cinema and television, as well as more than 100 classical works, Morricone is widely considered one of the greatest and most prolific  film composers of all time.\n[…]\nAfter playing the trumpet in jazz bands in the 1940s, Morricone became a studio arranger for RCA Victor and in 1955 started ghost writing for film and theatre. Throughout his career, he composed music for artists such as Paul Anka, Mina, Milva, Zucchero, and Andrea Bocelli. From 1960 to 1975, he gained international fame for composing music for Westerns and—with an estimated 10 million copies sold—Once Upon a Time in the West is one of the best-selling scores worldwide.\n[…]\nSubsequent to the success of the Dollars trilogy, Morricone also composed the scores for Once Upon a Time in the West (1968) and Leone's last credited western film A Fistful of Dynamite (1971), as well as the score for My Name Is Nobody (1973). Morricone's score for Once Upon a Time in the West is one of the best-selling original instrumental scores in the world today, with as many as 10 million copies sold, including one million copies in France, and more than 800,000 copies in the Netherlands.\n[…]\nThe collaboration with Leone is considered one of the exemplary collaborations between a director and a composer. Morricone's last score for Leone was for his last film, the gangster drama Once Upon a Time in America (1984). Leone died on 30 April 1989 of a heart attack at the age of 60. Before his death in 1989, Leone was part-way through planning a film on the Siege of Leningrad, set during World War II.\n[…]\nStreaming audio of Morricone's \"The Man with the Harmonica\", from his soundtrack to Once upon a Time in the West"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ennio_Morricone",
        "situacao": "ok",
        "texto": "Ennio Morricone OMRI (Roma, 10 de novembro de 1928 – Roma, 6 de julho de 2020) foi um compositor, arranjador e maestro italiano que escreveu músicas em diversos estilos. Morricone compôs mais de 400 partituras para cinema e televisão, além de mais de 100 obras clássicas. Sua trilha sonora para The Good, the Bad and the Ugly (1966) é considerada uma das trilhas sonoras mais influentes da história e\n[…]\nSua aclamada trilha sonora de The Mission (1986) foi certificada em ouro nos Estados Unidos. O álbum Yo-Yo Ma Plays Ennio Morricone ficou 105 semanas nos álbuns clássicos da Billboard.\n[…]\nMorricone e Alex North são os únicos compositores a receber o prêmio honorário da Academia desde sua introdução em 1928. Ele recebeu o prêmio em fevereiro de 2007, \"por suas magníficas e multifacetadas contribuições para a arte da música cinematográfica\".\n[…]\nEm 2005, quatro trilhas sonoras de Ennio Morricone foram nomeadas pelo American Film Institute para um lugar de honra no Top 25 das Melhores Partituras de Filmes Americanos de Todos os Tempos da AFI. Sua partitura para The Mission foi classificada em 23º na lista dos 25 melhores.\n[…]\nMorricone foi indicado sete vezes ao Grammy Award. Em 2009, a Recording Academy introduziu sua trilha sonora para The Good, the Bad and the Ugly (1966) no Grammy Hall of Fame.\n[…]\nLhassa, Anne, and Jean Lhassa: Ennio Morricone: biographie. Les Planches. Lausanne: Favre; [Paris]: [diff. Inter-forum], 1989. ISBN 978-2-8289-0418-0.\n[…]\nSorbo, Lorenzo: 'The Dramatic Functions of Italian Spaghetti Western Soundtracks: A Comparison between Ennio Morricone and Francesco De Masi' In: Stoppe, Sebastian (2014). Film in Concert. Film Scores and their Relation to Classical Concert Music. Glücksstadt, Germany: VWH Verlag. pp. 161–174. ISBN 978-3-86488-060-5\n[…]\nWenguang Han: Ennio Morricone Fans Handbook, 2013 (China). ISBN 978-988-16794-2-0\n[…]\nEnnio Morricone no IMDb\n[…]\nEnnio Morricone no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Gladiador (filme de 2000)",
      "descricao": "Filme épico de Ridley Scott, com Russell Crowe como o general romano Máximo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A trilha sonora de Gladiador, com Russell Crowe, e a da animação O Rei Leão, de 1994, saíram das mãos de qual compositor?",
    "resposta": "Hans Zimmer",
    "distratores": [
      "John Williams",
      "James Horner",
      "Howard Shore"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hans_Zimmer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hans_Zimmer",
        "situacao": "ok",
        "texto": "Hans Florian Zimmer (born 12 September 1957) is a German film composer and music producer. He has received numerous accolades including two Academy Awards, a BAFTA Award, three Golden Globe Awards, and five Grammy Awards, as well as nominations for seven Primetime Emmy Awards. Zimmer was also named one of the Top 100 Living Geniuses by The Daily Telegraph in 2007.\n[…]\nHis works integrate electronic music sounds with traditional orchestral arrangements. Since the 1980s, Zimmer has composed music for over 150 films. He has won the Academy Award for Best Original Score twice, for The Lion King (1994) and for Dune (2021). His works include Rain Man (1988), Titanic (1997), The Prince of Egypt (1998), Gladiator (2000), How the Grinch Stole Christmas!\n[…]\nZimmer also composed the score for Ron Howard's film adaptation of How the Grinch Stole Christmas! starring Jim Carrey released in November 2000.\n[…]\nOriginally I had this idea that it should be possible to create some kind of community around this kind of work, and I think by muddying the titles – not having \"you are the composer, you are the arranger, you are the orchestrator\" – it just sort of helped us to work more collaboratively. It wasn't that important to me that I had \"score by Hans Zimmer\" and took sole credit on these things.\n[…]\nHe next composed the score for Christopher Nolan's 2017 film Dunkirk, basing part of the score on a recording of a ticking watch that he had been given by Nolan. Zimmer also worked on the score for Denis Villeneuve's Blade Runner 2049. Hans Zimmer and co-composer Danny Elfman took over scoring duties after Jóhann Jóhannsson left the project.\n[…]\nIn 2019, Zimmer was inducted as a Disney Legend.\n[…]\nHans Zimmer at IMDb\n[…]\nInterview with Hans Zimmer in 1998 from Film Score Monthly\n[…]\nInterviews with Hans Zimmer in 2008 from Film Music Site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hans_Zimmer",
        "situacao": "ok",
        "texto": "Hans Florian Zimmer (Frankfurt, 12 de setembro de 1957), mais conhecido como Hans Zimmer, é um compositor e produtor musical alemão. É conhecido por seus trabalhos com trilha sonoras de vários filmes. Hans possui mais de 110 prêmios de 178 indicações na carreira, sendo o segundo compositor de trilha sonoras para filmes mais premiado da história, ficando atrás apenas de John Williams que possui 112\n[…]\nCompôs a trilha sonora de The Dark Knight junto com James Newton Howard. Também contribuiu nos arranjos do álbum de Tarja Turunen, My Winter Storm. Em 2008 ele compôs para o filme de animação Kung Fu Panda, da DreamWorks, junto com John Powell. Ainda em 2008, Hans compôs para mais um filme de animação da DreamWorks Animation, Madagascar: Escape 2 Africa, junto com will.i.am.\n[…]\nEm 2014, Zimmer compôs toda a trilha sonora do aclamado filme Interestelar, uma vez mais dirigido por seu parceiro e amigo Nolan. A trilha sonora ficou tão surpreendente que é considerado pela crítica mundial como a melhor obra prima de Zimmer, onde suas músicas neste filme são as mais visualizadas em todas as mídias como YouTube. Também em 2014, Zimmer compôs a música tema da Tomorrowland, em comemoração aos 10 anos do festival\n[…]\nJá em 2018, Zimmer foi o responsável pela composição da música tema de abertura da Copa do Mundo FIFA de 2018, para a TV.[carece de fontes]?\n[…]\nHans Zimmer possuí 2 Oscars: em 1995 foi premiado com o Oscar de Melhor Trilha Sonora pelo filme The Lion King, que transporta o ouvinte para o mundo africano. Em 2022 ganhou o Oscar de Trilha Sonora pelo filme Duna. Zimmer foi indicado ao Oscar pelas trilhas sonoras de Rain Man, The Preacher's Wife, As Good as It Gets, The Prince of Egypt, The Thin Red Line, Gladiator, Sherlock Holmes, Inception e Interstellar.\n[…]\nNa disputa pelo Globo de Ouro foi indicado 13 vezes e ganhou o prêmio 2 vezes por The Lion King e Gladiator.\n[…]\nHans Zimmer no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Vito Corleone",
      "descricao": "Patriarca mafioso da família Corleone em O Poderoso Chefão, vivido por Marlon Brando e Robert De Niro."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Robert De Niro ganhou um Oscar vivendo o jovem Vito Corleone. Que ator já tinha ganhado a estatueta pelo mesmo personagem, já idoso?",
    "resposta": "Marlon Brando",
    "distratores": [
      "Al Pacino",
      "James Caan",
      "Robert Duvall"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Vito_Corleone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vito_Corleone",
        "situacao": "ok",
        "texto": "Vito Corleone (né Andolini) is a fictional character and a major character in Mario Puzo's 1969 novel The Godfather and the first two films of Francis Ford Coppola's film trilogy. The titular \"Godfather\", Vito is portrayed by Marlon Brando in the 1972 film The Godfather, with Oreste Baldini portraying him as a child and Robert De Niro portraying him as a young man in The Godfather Part II (1974).\n[…]\nIn The Godfather, Don Vito Corleone was portrayed by Marlon Brando. He was portrayed as a boy by Oreste Baldini and as a younger man in The Godfather Part II by Robert De Niro. Brando and De Niro's performances won Academy Awards — Best Actor for Brando, Best Supporting Actor for De Niro. Brando declined his Oscar. He sent Sacheen Littlefeather to accept the award on his behalf, who said Brando declined it because of \"the treatment of American Indians today by the film industry ...\n[…]\nMarlon Brando envisaged the character to have bulldog-like jowls (hanging cheeks). In his auditions, he stuffed Kleenex tissues between his lower lips and teeth to create this appearance, which were replaced by a custom-made \"plumper\" oral prosthetic during filming.\n[…]\nFor 47 years, Vito Corleone was the only role in history to have two Academy Awards won for playing it. This record was finally matched by Joaquin Phoenix winning the 2019 Best Actor Award for the role of The Joker in the film Joker, following Heath Ledger's win for Best Supporting Actor of 2008 for The Dark Knight.\n[…]\nPremiere Magazine listed Vito Corleone as the greatest film character in history. He was also selected as the 53rd greatest film character by Empire.\n[…]\nStar Wars character Marlo was inspired by Marlon Brando's portrayal of Vito Corleone, appearing among the Hutt Council in Star Wars: The Clone Wars.\n[…]\nMarlon Brando himself parodied Vito Corleone as Carmine Sabatini in the 1990 film The Freshman."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vito_Corleone",
        "situacao": "ok",
        "texto": "Vito Corleone (nascido Vito Andolini) é um personagem fictícia do romance The Godfather, de Mario Puzo, de 1969, e dos dois primeiros filmes da trilogia de Francis Ford Coppola. Vito é originalmente interpretado por Marlon Brando no filme The Godfather de 1972, e mais tarde por Oreste Baldini quando menino e por Robert De Niro quando jovem em The Godfather Part II (1974). Ele é um imigrante sicili\n[…]\nAo mesmo tempo, Michael e Vito planejam secretamente eliminar os outros dons de Nova York, enquanto permitem que eles reduzam os interesses da família Corleone para induzi-los à inação.\n[…]\nEm O Poderoso Chefão, Don Vito Corleone foi interpretado por Marlon Brando. Ele foi retratado como um menino por Oreste Baldini e como um homem mais jovem em O Poderoso Chefão Parte II de Robert De Niro. As atuações de Brando e De Niro ganharam o Oscar de Melhor Ator por Brando e Melhor Ator Coadjuvante por De Niro. Brando recusou seu Oscar.\n[…]\nMarlon Brando imaginou que o personagem teria papada de buldogue (bochechas caídas). Em suas audições, ele enfiou lenços de papel Kleenex entre os lábios inferiores e os dentes para criar essa aparência, que foram substituídos por uma prótese oral \"mais gorda\" feita sob medida durante as filmagens.\n[…]\nPor 48 anos, Vito Corleone foi o único papel na história a ter dois Oscars ganhos por interpretá-lo. Este recorde foi finalmente igualado por Joaquin Phoenix ganhando o Prêmio de Melhor Ator de 2019 pelo papel de O Coringa no filme Coringa, após a vitória de Heath Ledger de Melhor Ator Coadjuvante de 2008 por O Cavaleiro das Trevas.\n[…]\nA revista Premiere listou Vito Corleone como o maior personagem do cinema da história. Ele também foi selecionado como o 53º maior personagem do cinema pela Empire.\n[…]\nO personagem de Star Wars, Marlo the Hutt, foi inspirado na interpretação de Marlon Brando como Vito Corleone, aparecendo entre o Conselho Hutt em Star Wars: The Clone Wars.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Um Sonho de Liberdade",
      "descricao": "Filme americano de 1994 dirigido por Frank Darabont, sobre a amizade de dois presos na penitenciária de Shawshank."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Um Sonho de Liberdade e À Espera de um Milagre, dois dramas de prisão dirigidos por Frank Darabont, adaptam obras de qual escritor?",
    "resposta": "Stephen King",
    "distratores": [
      "John Grisham",
      "Dennis Lehane",
      "Michael Crichton"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Shawshank_Redemption",
      "https://en.wikipedia.org/wiki/The_Green_Mile_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Shawshank_Redemption",
        "situacao": "ok",
        "texto": "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. The film tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence.\n[…]\nFrank Darabont first collaborated with author Stephen King in 1983 on the short film adaptation of King's 1978 collection Night Shift story \"The Woman in the Room\", buying the rights from him for $1—a Dollar Deal that King used to help new directors build a résumé by adapting his short stories.\n[…]\nThe film was nominated for seven Academy Awards in 1995, the most for a Stephen King film adaptation: Best Picture (Marvin), Best Actor (Freeman), Best Adapted Screenplay (Darabont), Best Cinematography (Deakins), Best Film Editing (Richard Francis-Bruce), Best Sound (Robert J. Litt, Elliot Tyson, Michael Herbick, and Willie D. Burton), and Best Original Score (Newman, his first Academy Award nomination). It did not win in any category.\n[…]\nDarabont later adapted and directed two other King stories, The Green Mile (1999) and The Mist (2007). In a 2016 interview, King said that The Shawshank Redemption was his favorite adaptation of his work, alongside Stand by Me.\n[…]\nIn a separate interview, Stephen King said, \"If that isn't the best [adaptation of my works], it's one of the two or three best, and certainly, in moviegoers' minds, it's probably the best because it generally rates at the top of these surveys they have of movies. ...\n[…]\nFrank Darabont (director, writer), Niki Marvin (producer) (September 23, 1994). The Shawshank Redemption (DVD). Warner Home Video.\n[…]\nThe Shawshank Redemption at the AFI Catalog of Feature Films\n[…]\nThe Shawshank Redemption at the TCM Movie Database (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Green_Mile_(film)",
        "situacao": "ok",
        "texto": "The Green Mile is a 1999 American epic fantasy drama film written and directed by Frank Darabont and based on the 1996 novel by Stephen King. It stars Tom Hanks as a death row correctional officer during the Great Depression who witnesses supernatural events following the arrival of an enigmatic convict (Michael Clarke Duncan) at his facility.\n[…]\nFrank Darabont adapted Stephen King's novel, The Green Mile, into a screenplay in under eight weeks.\n[…]\nTom Hanks and Darabont met at an Academy Award luncheon in 1994. Stephen King stated he envisioned Hanks in the role and was happy when Darabont mentioned his name. Hanks was originally supposed to play elderly Paul Edgecomb as well, but the makeup tests did not make him look credible enough to be an elderly man. Because of this, Dabbs Greer was hired to play the older Edgecomb in his final film role.\n[…]\n\"Darabont's style of picture making is well matched to King-size yarn spinning. The director isn't afraid to let big emotions and grand gestures linger\", she said.\n[…]\nWriting for the BBC, Clark Collis criticized the film's length and pacing. David Ansen of Newsweek thought The Green Mile was weaker than Darabont's previous film, The Shawshank Redemption (1994). He stated, The Green Mile is a \"lumbering, self-important three-hour melodrama that defies credibility at every turn\".\n[…]\nStephen King praised the film adaptation, though he felt it was a little \"soft\" in some ways. He added, \"I like to joke with Frank that his movie was really the first R-rated Hallmark Hall of Fame production. For a story that is set on death row, it has a really feel-good, praise-the-human condition sentiment to it. I certainly don't have a problem with that because I am a sentimentalist at heart.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Shawshank_Redemption",
        "situacao": "ok",
        "texto": "The Shawshank Redemption (bra: Um Sonho de Liberdade; prt: Os Condenados de Shawshank) é um filme norte-americano de drama lançado em 1994, escrito e dirigido por Frank Darabont, baseado na novela Rita Hayworth and Shawshank Redemption, de Stephen King. O longa é estrelado por Tim Robbins e Morgan Freeman, com Bob Gunton, William Sadler, Clancy Brown, Gil Bellows e James Whitmore em papéis coadjuv\n[…]\nO brutal capitão dos guardas da prisão.\n[…]\nO diretor e roteirista Frank Darabont colaborou com o autor Stephen King pela primeira vez em 1983 no curta-metragem adaptação do conto \"The Woman in the Room\", comprando os direitos do autor pelo valor de apenas um dólar – um acordo em que King ajudava aspirantes a diretores a construírem seus portfólios ao adaptarem algum de seus contos.\n[…]\nFoi decidido omitir o máximo possível o nome de Stephen King de qualquer material de divulgação, já que o estúdio queria atrair um \"público mais prestigiado\" que poderia rejeitar o longa se soubesse que era uma adaptação de um autor mais conhecido por suas obras pulp como The Shining e Cujo.\n[…]\nThe Shawshank Redemption foi indicado a sete Oscars na cerimônia do Oscar 1995, um recorde para uma adaptação de Stephen King: Melhor Filme para Marvin, Melhor Roteiro Adaptado para Darabont, Melhor Ator para Freeman, Melhor Fotografia para Deakins, Melhor Edição para Richard Francis-Bruce, Melhor Trilha Sonora Original para Newman e Melhor Som para Robert J. Litt, Elliot Tyson, Michael Herbick e Willie D. Burton. Entretanto, não venceu em nenhuma categoria.\n[…]\nDarabont posteriormente adaptou para o cinema outras duas história de King: The Green Mile em 1999 e The Mist em 2001. King afirmou em 2016 que The Shawshank Redemption e Stand By Me eram suas adaptações favoritas de alguma obra sua.\n[…]\nKermode, Mark (2003). The Shawshank Redemption. Col: BFI Modern Classics. Londres: British Film Institute. ISBN 0-85170-968-0",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Selton Mello",
      "descricao": "Ator e cineasta brasileiro, diretor de O Palhaço e intérprete de Rubens Paiva em Ainda Estou Aqui."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na animação A Nova Onda do Imperador, da Disney, qual personagem foi dublado no Brasil pelo ator Selton Mello?",
    "resposta": "Kuzco",
    "distratores": [
      "Pacha",
      "Kronk",
      "Yzma"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Selton_Mello",
      "https://pt.wikipedia.org/wiki/A_Nova_Onda_do_Imperador"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Selton_Mello",
        "situacao": "ok",
        "texto": "Selton Figueiredo Melo (Passos, 30 de dezembro de 1972) é um ator, dublador, diretor e produtor brasileiro. Reconhecido pela crítica e pelo público por sua versatilidade e competência, é considerado um dos grandes nomes do Brasil no campo das artes cênicas e do audiovisual.\n[…]\nEm seguida, ficou afastado da TV por seis anos, para se dedicar ao cinema e a sua carreira como dublador. Personagens como John Bender, de Clube dos Cinco, Charlie Brown, de Charlie Brown e seus amigos (Peanuts), e o jovem Indiana de Indiana Jones e a Última Cruzada, foram dublados por ele em suas versões brasileiras. Diversos outros filmes como Loucademia de Polícia, Os Goonies e os Karatê Kid Parte II e Parte III tiveram suas dublagens feitas por ele.\n[…]\nA Nova Onda do Imperador, Irmão Urso e as animações brasileiras Uma História de Amor e Fúria e Lino - O Filme são outros que ele participou já como ator convidado, não mais como dublador.\n[…]\nEm 2024, Selton Mello protagonizou o filme Ainda Estou Aqui interpretando Rubens Paiva, ex-deputado que desapareceu durante a ditadura militar brasileira. No mesmo ano, o ator também protagonizou O Auto da Compadecida 2, novamente ao lado de Matheus Nachtergaele, lançado nos cinemas nacionais dia 25 de dezembro.\n[…]\nEm outubro de 2025, Mello protagonizou o terror Enterre Seus Mortos. O filme teve sua première nacional no Festival do Rio. No mesmo ano, Selton integrou o elenco da quinta sequência de Anaconda e viajou à Austrália para as gravações do filme.\n[…]\nEm outubro de 2026, o ator foi escalado para a série Ascent, do Paramount+, que tem a premiada atriz Viola Davis como protagonista. É a expansão da carreira internacional de Mello.\n[…]\nSelton Mello no Facebook\n[…]\nSelton Mello no Instagram\n[…]\nSelton Mello no IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Nova_Onda_do_Imperador",
        "situacao": "ok",
        "texto": "The Emperor's New Groove (bra: A Nova Onda do Imperador; prt: Pacha e o Imperador) é um filme de animação estadunidense, o 50º animado dos Clássicos Disney, produzido pela Walt Disney Feature Animation. Foi dirigido por Mark Dindal, produzido por Randy Fullmer e escrito por David Reynolds.\n[…]\nDavid Spade como Kuzco, o sarcástico e mimado imperador do Império Inca. No Brasil, é dublado por Selton Mello.\n[…]\nJoe Whyte como o Escrivão Real, um oficial encarregado de encontrar uma esposa para Kuzco.\n[…]\nDurante a viagem de pesquisa ao Peru em 1996, Ranieri reconheceu que \"eu estava pesquisando um personagem que parecia uma rocha, então fiquei preso desenhando rochas durante toda a viagem. Daí, quando voltamos, eles enfiaram essa história sobre os antigos Incas.\" Mark Pudleiner seria o supervisor de animação da prometida de Kuzco, Nina.[carece de fontes]? No início de 1997, David Pruiksma se juntou á produção para animar a lhama Snowball.\n[…]\nEla chegava em cada sessão quase série e bastante professional e, de repente, ela ficava louca e começava a rir.\" Mais tarde, foi pedido a Ranieri que fosse o supervisor de animação de Kuzco (tanto humano como lhama), embora ele fosse admitir que, a princípio, descobriu que Kuzco \"tinha um lado diferente, havia muito potencial para comédia e, como personagem, ele passava por um arco.\" Pudleiner também foi redistribuído para trabalhar como animador na versão humana de Kuzco.\n[…]\nAlém de se inspirar em David Spade durante as sessões de gravação, o time de animação de Kuzco estudou lhamas no zoológico, visitou uma fazenda de lhamas, observou documentários sobre natureza e até mesmo observou animais de perto quando ele vieram para uma visita ao estúdio. Para a versão reescrita de Pacha, o animador Bruce W."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Os Sete Samurais",
      "descricao": "Filme japonês de 1954 dirigido por Akira Kurosawa, sobre samurais contratados para defender uma aldeia de bandidos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que faroeste americano de 1960, com Yul Brynner e Steve McQueen, levou para o Velho Oeste a história de Os Sete Samurais, de Kurosawa?",
    "resposta": "Sete Homens e um Destino",
    "distratores": [
      "Rastros de Ódio",
      "Matar ou Morrer",
      "Onde Começa o Inferno"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Seven_Samurai",
      "https://en.wikipedia.org/wiki/The_Magnificent_Seven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Seven_Samurai",
        "situacao": "ok",
        "texto": "Seven Samurai (Japanese: 七人の侍, Hepburn: Shichinin no Samurai) is a 1954 Japanese epic jidaigeki film directed by Akira Kurosawa from a screenplay co-written with Shinobu Hashimoto and Hideo Oguni. Starring Toshirō Mifune, Takashi Shimura, Keiko Tsushima and Yukiko Shimazaki, it tells the story of a village of peasants who hire seven samurai to help defend their village from bandits who will return\n[…]\nJoan Mellen writes that Seven Samurai is a great work of art within both cinema and the history of civilization. In Helen DeWitt's first novel, The Last Samurai, the film takes on a thematic role in the story. The Japanese anime Samurai 7 was conceived as a futuristic remake of the film.\n[…]\nSeven Samurai was remade in America as The Magnificent Seven (1960). Toho sold the rights to remake the film to American producer Lou Morheim. Morheim offered the rights to Anthony Quinn and Yul Brynner who wanted to remake Samurai as a Western. Magnificent Seven's success inspired an international movement to emulate samurai films that produced the spaghetti Western. However, in an interview with R. B.\n[…]\nGadi, Kurosawa expressed his belief that, \"the American copy is a disappointment, although entertaining. It is not a version of Seven Samurai\". Following subsequent re-releases of Seven Samurai and the three sequels to the American Magnificent Seven, Kurosawa, Oguni, and Hashimoto sued Toho to reclaim compensation and rights to the film.\n[…]\nBattle Beyond the Stars (1980), an American science fiction film produced by Roger Corman, was conceived as a \"Magnificent Seven in outer space\"; Corman himself respected the samurai films of Kurosawa. Galbraith identifies Battle Beyond the Stars along with the war film The Dirty Dozen (1967) and the Pixar film A Bug's Life as examples of unofficial copies of Seven Samurai.\n[…]\nSeven Samurai at Metacritic\n[…]\nSeven Samurai at Box Office Mojo\n[…]\nSeven Samurai at Rotten Tomatoes"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Magnificent_Seven",
        "situacao": "ok",
        "texto": "The Magnificent Seven is a 1960 American action Western film directed by John Sturges. The screenplay, credited to William Roberts, is a remake – in an Old West-style – of Akira Kurosawa's 1954 Japanese film Seven Samurai (itself initially released in the United States as The Magnificent Seven).\n[…]\nThe ensemble cast includes Yul Brynner, Steve McQueen, Horst Buchholz, Charles Bronson, Robert Vaughn, Brad Dexter and James Coburn as a group of seven gunfighters hired to protect a small village in Mexico from a group of marauding bandits led by the ruthless chief Calvera (Eli Wallach).\n[…]\nDuring filming there was considerable tension between Brynner and McQueen, who was displeased at his character having only seven lines of dialogue in the original shooting script. (Sturges had told McQueen that he would \"give him the camera\".) To compensate, McQueen took numerous opportunities to upstage Brynner and draw attention to himself, including shielding his eyes with his hat, flipping a coin during one of Brynner's speeches, and rattling his shotgun shells.\n[…]\nAkira Kurosawa was reportedly so impressed by the film that he presented John Sturges with a sword, but said: \"The American copy is a disappointment. Although entertaining, it is not a version of Seven Samurai.\"\n[…]\nThe 1980 science fiction film Battle Beyond the Stars was a remake of The Magnificent Seven set in space. A group of mercenaries, including ones played by George Peppard (as a character known only as \"Space Cowboy\") and Robert Vaughn (playing essentially the same character as in The Magnificent Seven) defend farmers from space raiders on the planet Akir, home of the Akira (named after Seven Samurai director Akira Kurosawa).\n[…]\nList of American films of 1960\n[…]\nThe Magnificent Seven at IMDb\n[…]\nThe Magnificent Seven at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Sete_Samurais",
        "situacao": "ok",
        "texto": "Os Sete Samurais (em japonês:  七人の侍, Shichinin no Samurai) é um filme épico chanbara japonês de 1954, dirigido por Akira Kurosawa a partir de um roteiro coescrito com Shinobu Hashimoto e Hideo Oguni. Ambientado em 1586, no período Sengoku, o longa-metragem conta a história de uma aldeia de fazendeiros desesperados que buscam contratar samurais para combater bandidos que retornam após a colheita pa\n[…]\nSua influência pode ser mais fortemente sentida no faroeste The Magnificent Seven (1960), um filme especificamente adaptado de Os Sete Samurais. O diretor John Sturges pegou o enredo e o adaptou para o Velho Oeste, com os samurais sendo substituídos por pistoleiros. Muitas das cenas de The Magnificent Seven espelham as de Os Sete Samurais. O próprio título do longa-metragem vem do título original do lançamento nos EUA a qual chamava-se de \"The Magnificent Seven\" em 1955.\n[…]\nNo entanto, em uma entrevista com RB Gadi, Kurosawa expressou como \"a cópia americana é uma decepção, embora divertida não é uma versão de Os Sete Samurais\". Stephen Prince argumenta que, considerando os filmes de samurai e os faroestes correspondem a diferentes culturas e contextos, o que o diretor japonês achou útil não foi o seu conteúdo, mas sim o que se inspirou nos seus níveis de movimento sintático, enquadramento, forma e cinematografia.\n[…]\nOs Sete Samurais são amplamente apontados como o longa-metragem que tornou o tropo de \"homens montar a equipe e vencer inimigo(os)\" popular em filmes e outras mídias. Desde então, isso se tornou um tropo comum em muitas obras de ação e de assalto. Kurosawa com o enredo do longa-metragem gerou seu próprio subgênero de filmes de \"homens em uma missão\", também conhecido como a \"fórmula dos Sete Samurais\", onde \"uma equipe de personagens distintos é agrupada para realizar uma missão específica\".\n[…]\nElementos de Os Sete Samurais podem ser visto em várias obras audiovisuais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Gollum",
      "descricao": "Criatura obcecada pelo Um Anel, antes um hobbit chamado Sméagol, em O Senhor dos Anéis."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O ator que deu corpo e expressões a Gollum, por captura de movimento, também viveu qual chimpanzé líder na nova série Planeta dos Macacos?",
    "resposta": "César",
    "distratores": [
      "Koba",
      "Maurice",
      "Cornelius"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Andy_Serkis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andy_Serkis",
        "situacao": "ok",
        "texto": "Andrew Clement Serkis (born 20 April 1964) is an English actor and director.\n[…]\nSerkis first came to wide public notice for his performance as Sméagol / Gollum, in The Lord of the Rings film trilogy (2001–2003), for which he provided motion-capture movements and voice for the CGI character. His work on The Lord of the Rings started a debate on the legitimacy of CGI-assisted acting. Producer Barrie M. Osborne campaigned for Serkis to have been nominated for the Academy Award for Best Supporting Actor, as his voice, body language and facial expressions were used.\n[…]\nSerkis has performed motion-capture work in several other films, including the title character in the 2005 version of King Kong (in which he also played the ship's cook in live-action) and as Caesar in Rise of the Planet of the Apes (2011), Dawn of the Planet of the Apes (2014), and War for the Planet of the Apes (2017). He also worked with game developers Ninja Theory on the 2007 release Heavenly Sword, providing the motion capture and voice for King Bohan (the game's main villain).\n[…]\nSerkis made an appearance in the music video for Neneh Cherry's \"Woman\", portraying an abusive boyfriend, in 1996. After portraying Gollum in The Lord of the Rings series, he published a memoir about his experiences, titled Gollum: How We Made Movie Magic, published in late 2004. In 2015, Serkis collaborated with rock band Coldplay in the making of the music video for \"Adventure of a Lifetime\". The group performed as chimpanzees with Serkis acting as a motion-capture consultant.\n[…]\nMotion-capture acting"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andy_Serkis",
        "situacao": "ok",
        "texto": "Andrew Clement \"Andy\" Serkis (Londres, 20 de abril de 1964) é um ator e cineasta britânico. Conhecido por interpretar personagens em computação gráfica, onde seu corpo e movimentação servem de molde para o personagem, seus principais papéis são Gollum na franquia The Lord of the Rings, King Kong (e no mesmo filme interpretou Lumpy, o cozinheiro do navio), César na série reboot da franquia Planet o",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Trilogia dos Dólares",
      "descricao": "Trilogia de faroestes de Sergio Leone com Clint Eastwood, lançada entre 1964 e 1966."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Akira Kurosawa processou os produtores de Por um Punhado de Dólares, de Sergio Leone, e ganhou uma indenização. Qual era a acusação?",
    "resposta": "Copiar o filme Yojimbo",
    "distratores": [
      "Copiar Os Sete Samurais",
      "Copiar Rashomon",
      "Usar sua trilha sonora"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/A_Fistful_of_Dollars"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/A_Fistful_of_Dollars",
        "situacao": "ok",
        "texto": "A Fistful of Dollars (Italian: Per un pugno di dollari, \"For a Fistful of Dollars\") is a 1964 spaghetti Western film directed by Sergio Leone and starring Clint Eastwood in his first leading role, alongside Gian Maria Volonté, Marianne Koch, Wolfgang Lukschy, Sieghardt Rupp, José Calvo, Antonio Prieto and Joseph Egger. The film, an international co-production between Italy, West Germany and Spain,\n[…]\nA Fistful of Dollars has achieved a 98% approval rating from 55 critical reviews on Rotten Tomatoes, with an average rating of 8.3/10. The website's critical consensus reads: \"With Akira Kurosawa's Yojimbo as his template, Sergio Leone's A Fistful of Dollars helped define a new era for the Western and usher in its most iconic star, Clint Eastwood.\" It has also placed at number 8 on the site's \"Top 100 Westerns\".\n[…]\nThe film was effectively an unofficial and unlicensed remake of Akira Kurosawa's 1961 film Yojimbo (written by Kurosawa and Ryūzō Kikushima); Kurosawa insisted that Leone had made \"a fine movie, but it was my movie\". This led to a lawsuit from Toho, Yojimbo's production company. Leone ignored the resulting lawsuit, but eventually settled out of court, reportedly for 15% of the worldwide receipts of A Fistful of Dollars and over $100,000.\n[…]\nThe critic Christopher Frayling identifies three principal sources for A Fistful of Dollars: \"Partly derived from Kurosawa's samurai film Yojimbo, partly from Dashiell Hammett's novel Red Harvest (1929), but most of all from Carlo Goldoni's eighteenth-century play Servant of Two Masters [sic].\" Leone cited those alternative sources in his defense.\n[…]\nLeone believed that Red Harvest had influenced Yojimbo: \"Kurosawa's Yojimbo was inspired by an American novel of the series-noire so I was really taking the story back home again.\"\n[…]\nA Fistful of Dollars at Box Office Mojo\n[…]\nA Comparison of Yojimbo, A Fistful of Dollars and Last Man Standing"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Por_um_Punhado_de_D%C3%B3lares",
        "situacao": "ok",
        "texto": "Por um Punhado de Dólares (em italiano:  Per un pugno di dollari; em alemão:  Für eine Handvoll Dollar; em castelhano:  Por un puñado de dólares) é um filme teuto-hispano-italiano de 1964, dos gêneros ação, faroeste e suspense, dirigido por Sergio Leone e estrelado por Clint Eastwood em seu primeiro papel principal, ao lado de Gian Maria Volontè, Marianne Koch, Wolfgang Lukschy, Sieghardt Rupp, Jo\n[…]\nO filme foi identificado como um remake não oficial do filme de Akira Kurosawa, Yojimbo (1961), que resultou em uma ação bem sucedida da Toho, produtora de Yojimbo. Nos Estados Unidos, a campanha de publicidade da United Artists referiu-se ao personagem de Eastwood nos três filmes como \"Homem sem Nome\". Como poucos Westerns Spaghetti já haviam sido lançados nos Estados Unidos, muitos dos elenco e tripulação europeus assumiram outros nomes.\n[…]\nA Fistful of Dollars tornou-se o primeiro filme a exibir o famoso estilo distintivo da direção visual de Leone. Isso foi influenciado pelo paisagismo cinematográfico de John Ford e pelo método japonês de direção aperfeiçoado por Akira Kurosawa. Leone queria uma sensação de ópera para o seu oeste, e por isso há muitos exemplos de close-ups extremos nos rostos de diferentes personagens, funcionando como arias em uma ópera tradicional.\n[…]\nIginio Lardani criou o design do título do filme.\n[…]\nO filme foi inspirado em Yojimbo, comédia satírica de Akira Kurosawa (escrito por Kurosawa e Ryuzo Kikushima). Acredita-se que este, por sua vez, seria baseado no romance Red Harvest, de Dashiell Hammett, apesar de não ter sido creditado.\n[…]\nKurosawa insistiu em receber compensações, escrevendo a Leone: \"é um ótimo filme, mas é o meu filme\". Após certo tempo, os produtores de Kurosawa conseguiram obter uma compensação de cem mil dólares, mais 15% da fatura mundial do filme.\n[…]\nA Comparison of Yojimbo, A Fistful of Dollars and Last Man Standing (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Os Caçadores da Arca Perdida",
      "descricao": "Filme de aventura de 1981 dirigido por Steven Spielberg, com Indiana Jones em busca da Arca da Aliança."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Na cena em que Indiana Jones encara um espadachim e simplesmente atira nele, a luta planejada foi abandonada porque Harrison Ford estava com quê?",
    "resposta": "Disenteria",
    "distratores": [
      "Braço quebrado",
      "Insolação",
      "Gripe forte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Raiders_of_the_Lost_Ark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Raiders_of_the_Lost_Ark",
        "situacao": "ok",
        "texto": "Raiders of the Lost Ark is a 1981 American action-adventure film directed by Steven Spielberg and written by Lawrence Kasdan, based on a story by George Lucas and Philip Kaufman. Set in 1936, the film stars Harrison Ford as Indiana Jones, a globetrotting archaeologist vying with Nazi German forces to recover the long-lost Ark of the Covenant which is said to make an army invincible.\n[…]\nHarrison Ford as Indiana Jones: An archaeology professor and adventurer\n[…]\nThe Indiana Jones Epic Stunt Spectacular! is a live amusement show at Walt Disney World Resort, Florida, that has been in operation since 1989. It features several live stunts based on set pieces from the film. Raiders of the Lost Ark was also one of several films that made up the Great Movie Ride (1989–2017).\n[…]\nSeveral scholars have interpreted Raiders of the Lost Ark through the lens of colonialism. Drawing on earlier work by Ella Shohat, Nigel Morris, and others, Tatiana Prorokova argues that Indiana Jones occupies the role of a white Western colonizer whose archaeological expeditions involve removing culturally significant artifacts from non-Western societies for preservation in Western institutions.\n[…]\nThe success of Raiders of the Lost Ark has spawned four other films. Indiana Jones and the Temple of Doom was in development by 1982, while the original was still in theaters. A narrative prequel to Raiders, Temple of Doom follows Jones's quest to recover sacred stones and liberate the slaves of a Thuggee cult leader.\n[…]\nProrokova, Tatiana (2020). \"Translocations, Cultural Geography and Anthropological Imperialism in Raiders of the Lost Ark\". In Randy Laist (ed.). Excavating Indiana Jones: Essays on the Films and Franchise. Jefferson, North Carolina: McFarland & Company. pp. 51–63. ISBN 9781476639727.\n[…]\nRaiders of the Lost Ark at IMDb\n[…]\nRaiders of the Lost Ark at the AFI Catalog of Feature Films"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Raiders_of_the_Lost_Ark",
        "situacao": "ok",
        "texto": "Raiders of the Lost Ark (no Brasil, Indiana Jones e Os Caçadores da Arca Perdida; em Portugal, nos PALOP e em Macau, Os Salteadores da Arca Perdida) é um filme de aventura americano, dirigido por Steven Spielberg, que estreou em 1981. Foi produzido por Frank Marshall e Howard Kazanjian, com produção executiva de George Lucas, roteiro de Lawrence Kasdan, baseado em um tratamento de George Lucas e P\n[…]\nAs cenas do enfrentamento entre entre Jones e os seguidores de Hitler foram gravadas em Kairouan. Nesses momentos, Ford estava com disenteria, portanto, no segmento em que enfrenta com o chicote um adversário que usava uma espada, decidiu usar un revólver para disparar. Instantes antes, ele disse ao diretor \"Por que não simplesmente atiro nele?\", o que Spielberg aceitou.\n[…]\nO compositor John Williams foi quem se encarregou de criar a trilha sonora do filme, cujo conteúdo apresentava, pela primeira vez, a conhecida The Raiders March (Marcha dos caçadores em português), que tem simbolizado Indiana Jones no âmbito popular. Originalmente, Williams havia escrito duas versões diferentes para o tema central de Raiders of the Lost Ark. De modo que Spielberg gostou de ambas, tendo que colocá-los em conjunto para criar a versão final.\n[…]\nA crítica da Revista Mexicana de Comunicación se refere a várias cenas que poderiam relacionar-se com estereótipos hispânicos de inclinação negativa, ao notar que \"em Raiders of the Lost Ark, Indiana Jones é ameaçado por todo tipo de delinquentes; abandonado (um carregador indiano deixa a expedição gritando histericamente), traído (um dos guias nativos que permanecerão é baleado nas costas, o outro deixa você pensar que está morto em uma passagem subterrânea) e ameaçado (uma tribo de índios latino americanos o persegue e tenta matá-lo)\".\n[…]\nSite oficial de Indiana Jones (em inglês)\n[…]\nRaiders of the Lost Ark na página LucasFilm.com (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Mad Max: Estrada da Fúria",
      "descricao": "Filme de ação pós-apocalíptico de George Miller, lançado em 2015, com Max e Furiosa."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Mad Max: Estrada da Fúria acabou filmado no deserto da Namíbia, e não no interior da Austrália, como planejado. Por quê?",
    "resposta": "Chuvas fizeram o deserto florir",
    "distratores": [
      "Incêndios florestais",
      "Proibição do governo",
      "Custo mais baixo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mad_Max:_Fury_Road"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mad_Max:_Fury_Road",
        "situacao": "ok",
        "texto": "Mad Max: Fury Road is a 2015 Australian post-apocalyptic action film co-written, co-produced and directed by George Miller, who collaborated with Brendan McCarthy and Nico Lathouris on the screenplay. The fourth instalment in the Mad Max franchise, it was produced by Village Roadshow Pictures and Kennedy Miller Mitchell, and distributed by Roadshow Entertainment in Australia and by Warner Bros. Pi\n[…]\nThe film stars Tom Hardy and Charlize Theron, with Nicholas Hoult, Hugh Keays-Byrne (in his final film role), Josh Helman, Nathan Jones, Rosie Huntington-Whiteley, Riley Keough, Zoë Kravitz, Abbey Lee, and Courtney Eaton. Set in a post-apocalyptic desert wasteland where petrol and water are scarce commodities, it follows Max Rockatansky (Hardy), who joins forces with Imperator Furiosa (Theron) against warlord Immortan Joe (Keays-Byrne) and his army, leading to a lengthy road battle.\n[…]\nAfter unexpected heavy rains caused wildflowers to grow in the desert around Broken Hill, filming was moved from Broken Hill back to Namibia in November 2011. Other potential locations scouted included the Atacama Desert in Chile, Chott el Djerid in Tunisia, and Azerbaijan.\n[…]\nA draft report from the Namibian Coast Conservation and Management Project that accused the producers of damaging parts of the Namib desert, endangering a number of plant and animal species, was leaked in February 2013. The Namibia Film Commission said it had \"no reservations\" after visiting the set during production and disputed claims reported in the media, calling the accusations \"unjust rhetoric\".\n[…]\nMiller had originally planned to shoot the film in native 3D, but this idea was eventually scrapped, due to both budgetary concerns and doubts that the 3D cameras could withstand the tough desert filming conditions and extensive stunt work, and it was converted to 3D in post-production instead.\n[…]\nMad Max: Fury Road at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mad_Max%3A_Estrada_da_F%C3%BAria",
        "situacao": "ok",
        "texto": "Mad Max: Fury Road (bra/prt: Mad Max: Estrada da Fúria) é um filme australo-estadunidense de 2015, de ação e ficção científica, dirigido por George Miller, e escrito por Miller, Brendan McCarthy, e Nico Lathouris. É o quarto título da franquia Mad Max, se passando em um vasto deserto de um futuro pós-apocalíptico onde gasolina e água são bens valiosos.\n[…]\nEm julho de 2010, Miller anunciou que tinha planos para filmar dois filmes da franquia. Em novembro de 2011, as filmagens foram transferidas de Broken Hill a Namíbia, após as fortes chuvas inesperadas que transformou o deserto lá em uma paisagem exuberante de flores silvestres, inadequadas para o visual do filme.\n[…]\nRobbie Collin do The Daily Telegraph deu ao filme um total de cinco estrelas e elogiou o filme por sua atuação, roteiro, coreografia, acrobacias, humor e sentido de chamar o filme de uma \"sequência espiritual\" e uma \"erupção de loucura.\" Escrevendo para o The Guardian dando ao filme quatro de cinco estrelas, Peter Bradshaw diz que o filme é \"Grand Theft Auto renovado por Hieronymus Bosch\" e comentou: \"Exuberantemente enlouquecido, rasgo voador cacofônico, e inteiramente por cima, George Miller reavivou sua franquia Mad Max punk-western como um bizarro comboio de perseguição de suspense de ação no deserto pós-apocalíptico.\" Scott Mendelson da Forbes deu ao filme 10/10 e opinou, \"Mad Max: Fury Road é um filme notável e glorioso, e não apenas um dos grandes filmes de ação de nosso tempo, mas também um grande e oportuno filme, ponto.\" Scott Collura do IGN deu ao filme 9.2/10, equivalente à classificação 'Surpreendente', e diz \"Acrobacias acima da média, design e personagens excêntricos é tudo importante para Fury Road...",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Star Wars: Uma Nova Esperança",
      "descricao": "Primeiro filme lançado da saga Star Wars, escrito e dirigido por George Lucas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "George Lucas criou Star Wars depois de fracassar ao tentar comprar os direitos para filmar as aventuras de qual herói espacial?",
    "resposta": "Flash Gordon",
    "distratores": [
      "Buck Rogers",
      "Dan Dare",
      "Capitão Futuro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Star_Wars_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Star_Wars_(film)",
        "situacao": "ok",
        "texto": "Star Wars (later retitled as Star Wars: Episode IV – A New Hope) is a 1977 American epic space opera film written and directed by George Lucas. Produced by Lucasfilm Ltd. and distributed by Twentieth Century-Fox, it is the first film in the Star Wars franchise and the fourth chronological chapter of the \"Skywalker Saga\".\n[…]\nGeorge Lucas had been fascinated by the Flash Gordon serials (1936–40) since he was young, and prior to directing his first feature film, THX 1138 (1971), he considered developing a science fiction film with a similar escapist adventure tone. A conversation between Lucas and producer Gary Kurtz, during which both men discussed their dissatisfaction with the current trend toward dystopian and horror-focused science fiction films, set Lucas' project in motion.\n[…]\nKurtz said they considered calling the first film Episode III, IV, or V, to capture the experience of encountering a Flash Gordon serial halfway through its run. However, Michael Kaminski and Chris Taylor point out that multiple early screenplay drafts of Star Wars were subtitled \"Episode One\" and that early drafts of Empire were called \"Episode II\".\n[…]\nBefore creating Star Wars, Lucas had hoped to make a Flash Gordon film, but was unable to obtain the rights. Star Wars features many elements ostensibly derived from Flash Gordon, such as the conflict between rebels and imperial forces; the wipe transitions between scenes; and the text crawl at the beginning of the film. Lucas also reportedly drew from Joseph Campbell's book The Hero with a Thousand Faces and Akira Kurosawa's 1958 film The Hidden Fortress.\n[…]\nLucas, George (Foster, Alan Dean); Glut, Donald F.; Kahn, James (2017). Star Wars: Original Trilogy (novelizations). Arrow. ISBN 978-1784759384\n[…]\nStar Wars at IMDb\n[…]\nStar Wars at the AFI Catalog of Feature Films"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Star_Wars%3A_Epis%C3%B3dio_IV_%E2%80%93_Uma_Nova_Esperan%C3%A7a",
        "situacao": "ok",
        "texto": "Star Wars (mac/palop/prt: A Guerra das Estrelas; bra: Guerra nas Estrelas), mais tarde relançado como Star Wars: A New Hope ou Star Wars: Episode IV – A New Hope (bra/mac/palop/prt/tls: Star Wars: Episódio IV – Uma Nova Esperança; Portugal também já usou o título Star Wars: Episódio IV – A Guerra das Estrelas) é um filme épico de ação-aventura e ficção científica norte-americano, escrito e dirigid\n[…]\nLucas começou a desenvolver a história em 1971, após não conseguir os direitos para uma adaptação de Flash Gordon. O conceito original foi rejeitado por diversos estúdios antes da 20th Century Fox decidir financiar o projeto. Filmado principalmente nos Elstree Studios, no Reino Unido, além de locações na Tunísia e na Guatemala, o processo de produção foi marcado por dificuldades.\n[…]\ne solicitar os direitos de sequencias do filme. Para Lucas, este negócio garantiu os direitos de Star Wars e a maioria dos lucros de merchandising.\n[…]\nGeorge Lucas, criador de Star Wars, era um dos diretores da nova geração do cinema americano nos anos 70, juntamente com Francis Ford Coppola, Steven Spielberg, Martin Scorsese e Brian de Palma.\n[…]\nApós o sucesso de Loucuras de Verão, Lucas planejou uma adaptação do herói das tiras de jornal, Flash Gordon, mas logo descobriu que os direitos já haviam sido vendidos pela King Features Syndicate ao produtor italiano Dino De Laurentiis, Lucas descobriu que o criador de Flash Gordon havia se inspirado em John Carter de Marte, herói da série literária Barsoom de Edgar Rice Burroughs (também conhecido por ter criado Tarzan) e que este por sua vez havia se inspirado no Tenente Gullivar Jones de Edwin Lester Arnold e decidiu então criar o seu próprio épico espacial, The Star Wars.\n[…]\nA narrativa de Star Wars também foi explorada de forma acadêmica, sendo objeto de livros sobre filosofia e ciências.\n[…]\nGuerra nas Estrelas no AdoroCinema",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Oscar",
      "descricao": "Prêmio anual da Academia de Artes e Ciências Cinematográficas dos Estados Unidos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Durante a Segunda Guerra Mundial, por causa da falta de metal, as estatuetas do Oscar foram entregues feitas de qual material?",
    "resposta": "Gesso pintado",
    "distratores": [
      "Madeira pintada",
      "Vidro",
      "Barro cozido"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Academy_Awards"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Academy_Awards",
        "situacao": "ok",
        "texto": "The Academy Awards, more commonly known as the Oscars, are awards based on artistic and technical merit in film. They are presented annually by the Academy of Motion Picture Arts and Sciences (AMPAS) in the United States in recognition of excellence in cinematic achievements around the world, as assessed by the Academy's voting membership. The Oscars are widely considered to be the most prestigiou\n[…]\nThe Oscar statuette, officially the Academy Award of Merit, is given to winners of each year's awards. Made of gold-plated bronze on a black metal base, it is 13.5 in (34.3 cm) tall, weighs 8.5 lb (3.9 kg) and depicts a knight rendered in Art Deco style holding a sword standing on a reel of film with five spokes. The five spokes represent the original branches of the Academy: Actors, Writers, Directors, Producers, and Technicians.\n[…]\nTypical criticism of the Academy Awards for Best Picture is that among the winners and nominees there is an over-representation of romantic historical epics, biographical dramas, romantic dramedies and family melodramas, most of which are released in the U.S. in the last three months of the calendar year. The term \"Oscar bait\" was coined to describe films in such genres.\n[…]\nElton John AIDS Foundation Academy Award Party airs the awards live at the nearby Pacific Design Center\n[…]\nList of film awards\n[…]\n\"Fanfare for Oscar\"\n[…]\nFischer, Erika J. (1988). The Inauguration of \"Oscar\": Sketches and Documents from the Early Years of the Hollywood Academy of Motion Picture Arts and Sciences and the Academy Awards, 1927–1930. Munich: K. G. Saur Verlag. ISBN 978-3-598-10753-5. OCLC 925086635.\n[…]\nKinn, Gail; Piazza, Jim (2002). The Academy Awards: The Complete History of Oscar. Black Dog & Leventhal Publishers. ISBN 978-1-57912-240-9.\n[…]\nLevy, Emanuel (2003). All About Oscar: The History and Politics of the Academy Awards. Burns & Oates. ISBN 978-0-8264-1452-6.\n[…]\nAcademy Awards at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93scar",
        "situacao": "ok",
        "texto": "O Óscar ou Oscar (do inglês: The Oscars), anteriormente chamado de Prêmios da Academia (português brasileiro) ou Prémios da Academia (português europeu) (do inglês: The Academy Awards), é uma cerimônia de premiação anual da Academia de Artes e Ciências Cinematográficas, fundado em Los Angeles em 1927, que presenteia anualmente os profissionais da indústria cinematográfica.\n[…]\nConcebida em 1929 pelo diretor de arte Cedric Gibbons e pelo escultor George Stanley, não sofreu mudanças significativas até hoje, nos mais de 90 anos em que já foi entregue. Apenas durante a Segunda Guerra Mundial foi confeccionada em gesso pintado com tinta dourada, devido ao esforço de guerra americano na época, que procurava racionar todos os tipos de metal. Após o conflito, os agraciados com estes Oscars tiveram seus prêmios trocados pela estatueta original.\n[…]\nEm 2021, o pesquisador brasileiro Dr. Waldemar Dalenogare encontrou a provável primeira menção pública ao nome \"Oscar\", na coluna \"Cinematters\" do jornalista Relman Morin no \"Los Angeles Evening Post-Record\" em 5 de dezembro de 1933. Como o prêmio não aconteceu naquele ano, ele disse: \"O que aconteceu com o banquete anual da Academia? Como regra, o banquete e a entrega do \"Oscar\", a estatueta de bronze dada às melhores performances, acabou muito antes de esta\".\n[…]\nAlguns vencedores criticaram o Oscar, boicotaram as cerimônias e se recusaram a aceitar seus Oscars. O primeiro a fazê-lo foi Dudley Nichols (melhor roteiro em 1935 por The Informer). Nichols boicotou o oitava cerimônia por causa de conflitos entre a Academia e o Writers Guild of America Award. George C. Scott tornou-se a segunda pessoa a recusar o prêmio (melhor ator em 1970 por Patton) na 43ª cerimônia.\n[…]\nPEREIRA FILHO, Francisco Alves. Oscar Awards: A História Completa do Maior Prêmio do Cinema Mundial. BLUHM. 2002\n[…]\n«Base de dados oficial dos prêmios» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "O Poderoso Chefão (filme)",
      "descricao": "Filme de máfia de 1972 dirigido por Francis Ford Coppola, sobre a família Corleone."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na famosa cena do batizado em O Poderoso Chefão, o bebê no colo é a filha recém-nascida do diretor, que depois virou cineasta. Quem é ela?",
    "resposta": "Sofia Coppola",
    "distratores": [
      "Talia Shire",
      "Gia Coppola",
      "Bridget Fonda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sofia_Coppola"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sofia_Coppola",
        "situacao": "ok",
        "texto": "Sofia Carmina Coppola ( KOH-pə-lə; born May 14, 1971) is an American filmmaker and former actress. She has received various accolades, including an Academy Award, two Golden Globe Awards, a Golden Lion, and a Cannes Film Festival Award as well as nominations for three BAFTA Awards and a Primetime Emmy Award.\n[…]\nCoppola returned to her father's Godfather trilogy in both the second and third Godfather films, playing an immigrant child in The Godfather Part II and playing Michael Corleone's daughter, Mary, in The Godfather Part III after the originally cast actress, Winona Ryder, dropped out of the film at the last minute due to nervous exhaustion. It has been suggested that Coppola's performance in The Godfather Part III damaged Francis Ford Coppola's career and ruined Sofia's before it had even begun.\n[…]\nOn September 2, 2025, Coppola's documentary about Marc Jacobs, Marc by Sofia, premiered at the 2025 Venice Film Festival.\n[…]\nCoppola, Sofia (2023). Sofia Coppola Archive: 1999–2023. London: Mack. ISBN 978-1-915743-13-8. OCLC 1396453281.\n[…]\nBarrie + Sofia Coppola capsule collection for Barrie featuring Margaret Qualley (2023)\n[…]\nCoppola family tree\n[…]\n\"Sofia Coppola Wins Prize for Best Director at Cannes for Beguiled\". Huffington Post. 2017.\n[…]\n\"So fine, Sofia\". Wine Review. April 21, 2005. Archived from the original on March 3, 2016. Retrieved June 19, 2007.\n[…]\n\"Sofia Coppola\". KCRW's The Treatment.\n[…]\n\"Off with Hollywood's Head: Sofia Coppola as Feminine Auteur\". Film Criticism, 2010.\n[…]\nSofia Coppola at IMDb\n[…]\nMilk fed.—Coppola's Japanese fashion label\n[…]\nSofia Mini—Coppola's Canned Wine\n[…]\n\"Sofia Coppola Marie Antoinette Interview\". Clubplanet. September 22, 2022.\n[…]\n\"Sofia Coppola's Parisian Inspired Style\". FashionHippo.com. December 21, 2011. Archived from the original on February 25, 2021. Retrieved December 30, 2011."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sofia_Coppola",
        "situacao": "ok",
        "texto": "Sofia Carmina Coppola (Nova Iorque, 14 de maio de 1971) é uma cineasta, roteirista, produtora e atriz  ítalo-americana. Em 2003, recebeu o Oscar de Melhor Roteiro Original pelo filme Lost in Translation, e se tornou a terceira mulher a ser indicada para um Oscar de Melhor Diretor. Em 2010, com o drama Somewhere, ela se tornou a quarta cineasta dos Estados Unidos (dentre eles a primeira mulher) a g\n[…]\nÉ filha do também cineasta, produtor e roteirista Francis Ford Coppola.\n[…]\nSofia Coppola nasceu na  Cidade de Nova Iorque, Nova Iorque, a filha mais nova (e única menina) da cenografista/artista Eleanor Coppola (nome de solteira Neil) e do cineasta Francis Ford Coppola. Descende de italianos por parte de seu pai. Aos quinze anos, estagiou na Chanel. Sofia se graduou em 1989 no St. Helena High School, e então ingressou no Mills College e no California Institute of the Arts.\n[…]\nAs suas performances como atriz não obtiveram destaque, e Sofia Coppola eventualmente abandonou a atuação para se dedicar exclusivamente à realização.\n[…]\nO primeiro Curta-metragem de Sofia Coppola foi Lick the Star (1998). O curta foi veiculado diversas vezes no Independent Film Channel. Ela estreou seu primeiro Longa-metragem com As Virgens Suicidas (1999). O filme recebeu aclamação da crítica em sua premiere na América do Norte, no Sundance Film Festival de 2000 e foi lançado nos cinemas mais tarde no mesmo ano.\n[…]\nO sétimo filme de Coppola, a comédia On the Rocks, marca sua segunda colaboração com o ator Bill Murray e foi lançado em outubro de 2020. O elenco do filme conta também com Rashida Jones e Marlon Wayans. Em 2022, foi anunciado que Sofia iria dirigir uma adaptação do livro bibliográfico Elvis and Me. O filme intitulado de Priscilla, contará a história de amor de Elvis Presley e sua ex-esposa Priscilla Presley, estrelado por Jacob Elordi e Cailee Spaeny.\n[…]\nSofia Coppola no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Pulp Fiction",
      "descricao": "Filme de 1994 dirigido por Quentin Tarantino, sobre assassinos de aluguel e gângsteres em Los Angeles."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Pulp Fiction, de Tarantino, Uma Thurman dança twist num concurso ao lado de qual ator, antigo astro dos filmes de discoteca?",
    "resposta": "John Travolta",
    "distratores": [
      "Samuel L. Jackson",
      "Bruce Willis",
      "Tim Roth"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pulp_Fiction"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pulp_Fiction",
        "situacao": "ok",
        "texto": "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino from a story he conceived with Roger Avary. It tells four intertwining tales of crime and violence in Los Angeles. The film stars John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-twentie\n[…]\nJohn Travolta as Vincent Vega: Jules's partner-in-crime, working for Marsellus Wallace. Tarantino cast Travolta in Pulp Fiction because Michael Madsen, who had played Vic Vega in Reservoir Dogs (1992), chose to appear in Kevin Costner's Wyatt Earp instead. Madsen expressed regret over his decision. Harvey Weinstein pushed for Daniel Day-Lewis in the part. Travolta accepted a reduced rate; sources say either US$100,000 or US$140,000.\n[…]\nThe role of Butch was written with Matt Dillon in mind, however Dillon was hesitant to sign on and preferred the Vincent role, which Tarantino wanted Travolta for.\n[…]\nThe image depicted a scene from Quentin Tarantino's Pulp Fiction, with Samuel L. Jackson and John Travolta clutching bananas instead of guns\". Certain lines were adopted popularly as catchphrases, in particular Marsellus's threat, \"I'm 'a get medieval on your ass\". Jules's \"Ezekiel\" recitation was voted the fourth greatest movie speech of all time in a 2004 poll.\n[…]\nIn celebration of Pulp Fiction's 30th anniversary, Paramount Home Entertainment released a 4K Ultra HD Collector's Edition on December 3, 2024, as an Amazon-exclusive set (also available via Zavvi in Australia). This edition retained the 2022 version's 2160p transfer with HDR-10 and Dolby Vision, and also retaining the special features from previous releases. It included a new slipcover featuring pop-up artwork of the Jack Rabbit Slim's dance scene between John Travolta and Uma Thurman.\n[…]\nPulp Friction\n[…]\nPulp Fiction at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pulp_Fiction",
        "situacao": "ok",
        "texto": "Pulp Fiction (bra: Pulp Fiction: Tempo de Violência; prt: Pulp Fiction) é um filme estadunidense de 1994 do gênero drama policial, escrito e dirigido por Quentin Tarantino, com roteiro dele e Roger Avary.\n[…]\nTambém venceu a Palma de Ouro no Festival de Cannes de 1994. Um sucesso comercial e de críticas, Pulp Fiction revitalizou a carreira de seu protagonista, John Travolta (o qual recebeu uma indicação ao Oscar de melhor ator), assim como as das coestrelas Samuel L. Jackson (indicado ao Oscar de melhor ator coadjuvante) e Uma Thurman (indicada ao Oscar de melhor atriz coadjuvante).\n[…]\nPaula Rabinowitz expressa a opinião geral da indústria cinematográfica: a de que Pulp Fiction \"simultaneamente ressucitou John Travolta e o noir\". Na descrição de Peter Biskind, o filme criou um \"frenesi de 'caras' com armas\". A influência do estilo de Pulp Fiction logo tornou-se aparente.\n[…]\nEm 2007, a BBC News reportou que \"trabalhadores dos transportes de Londres pintaram por cima de um icônico mural do artista de rua Banksy… A imagem mostrava uma cena de Pulp Fiction de Quentin Tarantino, com Samuel L. Jackson e John Travolta segurando bananas ao invés de armas.\" Algumas linhas de diálogo do filme foram adotadas popularmente como jargões, especialmente o xingamento de Marsellus, \"Eu vou machucar o seu traseiro ao estilo medieval\".\n[…]\nA Associação de Críticos de Cinema de Los Angeles também premiou Pulp Fiction, com os prêmios de melhor filme, melhor roteiro, melhor diretor e melhor ator (John Travolta). A Comissão Nacional de Resenha deu ao filme o NBR Award de melhor diretor e de melhor filme — empatado com Forrest Gump. Pulp Fiction também ganhou dois NYFCC Awards, para melhor diretor e melhor roteiro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Os Infiltrados",
      "descricao": "Filme policial americano de 2006 dirigido por Martin Scorsese, com Leonardo DiCaprio e Matt Damon, vencedor do Oscar de melhor filme."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os Infiltrados, que deu a Martin Scorsese o Oscar de melhor direção, é a refilmagem de um filme policial produzido onde?",
    "resposta": "Hong Kong",
    "distratores": [
      "Japão",
      "Coreia do Sul",
      "Taiwan"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Departed",
      "https://en.wikipedia.org/wiki/Infernal_Affairs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Departed",
        "situacao": "ok",
        "texto": "The Departed is a 2006 neo-noir crime thriller film, directed by Martin Scorsese and written by William Monahan. A remake of the 2002 Hong Kong film Infernal Affairs, it is also loosely based on real-life people, including the Winter Hill Gang, corrupt FBI agent John Connolly and Irish-American crime boss Whitey Bulger.\n[…]\nIn January 2003, Warner Bros. Pictures, and producers Brad Grey and Brad Pitt bought the rights to remake the Hong Kong film Infernal Affairs (2002) from Media Asia Entertainment Group for $1.75 million. William Monahan was secured as a screenwriter, and Martin Scorsese, who admired Monahan's script, was signed as director.\n[…]\nWarner Bros. Pictures acquired worldwide distribution rights to the film, excluding the U.K., Ireland, France, Belgium, Italy, the CIS, Hong Kong and Taiwan. IEG sold the film to Entertainment Film Distributors in the United Kingdom and Ireland, TFM Distribution in France, Medusa Distribuzione in Italy, Belga Films in Belgium, Central Partnership in Russia and Ukraine, Media Asia Distribution in Hong Kong and Long Shong in Taiwan.\n[…]\nAndrew Lau, co-director of Infernal Affairs, in an interview with Hong Kong newspaper Apple Daily, said, \"Of course I think the version I made is better, but the Hollywood version is pretty good too. [Scorsese] made the Hollywood version more attuned to American culture.\"\n[…]\nBalfour, Brad (2006). \"Martin Scorsese, Leonardo Dicaprio, Matt Damon, Vera Farmiga and William Monahan: Meeting with Martin and the Departed\". PopEntertainment.com. Retrieved September 10, 2007. Transcripts of two 40-minute press conference sessions.\n[…]\nThe Departed at IMDb\n[…]\nThe Departed at Metacritic\n[…]\nThe Departed at Box Office Mojo\n[…]\nThe Departed at Rotten Tomatoes\n[…]\nThe Departed at the TCM Movie Database (archived)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Infernal_Affairs",
        "situacao": "ok",
        "texto": "Infernal Affairs (traditional Chinese: 無間道; simplified Chinese: 无间道; lit. 'Unceasing Path') is a 2002 Hong Kong crime drama film directed by Andrew Lau and Alan Mak from a screenplay written by Mak and Felix Chong. The film stars Andy Lau, Tony Leung, Anthony Wong, and Eric Tsang. The film follows an undercover Hong Kong Police Force officer who infiltrates a triad and another police officer who i\n[…]\nHe ultimately rated The Departed 8/10 and said that the Hollywood remake is worth a view, though according to Lau's spokeswoman Alice Tam, he felt that the combination of the two female characters into one in The Departed was not as good as the original storyline. Scholars have identified Infernal Affairs as a significant Hong Kong crime film of the early twenty-first century.\n[…]\nIts exploration of divided identities, moral ambiguity, and undercover operations contributed to its international appeal and facilitated adaptations across different cultural contexts, most notably Martin Scorsese’s The Departed (Choy, 2007, pp. 52; Li, 2018, pp. 325–326; Marchetti, 2007, pp. 3–4). Academic studies have also linked the film’s success to a broader revival of Hong Kong commercial cinema and the post-handover cultural identity (Law, 2006, pp. 398; Marchetti, 2007, pp. 168).\n[…]\nThe hi-fi shop scene was later recreated with additions of excerpts of the film to encourage businesses to join the Quality Tourism Services Scheme in Hong Kong.\n[…]\nThe success of the film inspired many genres, including an open-world video game from United Front Games titled Sleeping Dogs (or True Crime: Hong Kong before being canceled by Activision Blizzard in 2011), with the protagonist of the story infiltrating the criminal underworld as an undercover cop.\n[…]\nCinema of Hong Kong\n[…]\nList of Hong Kong films\n[…]\nList of films set in Hong Kong"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Departed",
        "situacao": "ok",
        "texto": "The Departed (bra: Os Infiltrados; prt: The Departed – Entre Inimigos) é um filme americano de 2006 dirigido por Martin Scorsese. É uma refilmagem de Mou Gaan Dou (Conflitos Internos), filme produzido em Hong Kong em 2002, cujo roteiro, escrito por Felix Chong e Siu Fai Mak, foi adaptado por William Monahan.\n[…]\nO filme é estrelado por Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg, Martin Sheen e Vera Farmiga. A história se passa em Boston, Massachusetts, onde o chefe da máfia irlandesa, Francis \"Frank\" Costello, planta Colin Sullivan como um informante dentro da Polícia Estadual de Massachussetts. Simultaneamente, a polícia infiltra William \"Billy\" Costigan na equipe de Costello.\n[…]\nThe Departed foi indicado a cinco Oscars em 2007, vencendo quatro (Melhor Filme, Melhor Diretor para Martin Scorsese, Melhor Roteiro Adaptado e Melhor Edição), além de uma indicação à Melhor Ator Coadjuvante para Mark Wahlberg.\n[…]\nNo site agregador de críticas Rotten Tomatoes, 91% das 277 avaliações dos críticos são positivas. O consenso diz: \"Com um excelente trabalho de um excelente elenco que inclui Jack Nicholson, Leonardo DiCaprio e Matt Damon, The Departed é um drama gangster completamente envolvente com a autenticidade corajosa e moralidade pastosa que infundiu triunfos passados do diretor Martin Scorsese\".\n[…]\nÓscar 2007 (EUA)\n[…]\nIndicado nas categorias de melhor filme (Graham King, Brad Pitt e Brad Grey), melhor diretor (Martin Scorsese), melhor ator (Leonardo DiCaprio), melhor ator coadjuvante (Jack Nicholson), melhor roteiro adaptado (William Monahan) e melhor edição (Thelma Schoonmaker)\n[…]\nIndicado na categoria de melhor filme americano\n[…]\nVenceu na categoria de melhor diretor (Martin Scorsese)\n[…]\nIndicado nas categorias de melhor ator coadjuvante (Jack Nicholson) e melhor diretor (Martin Scorsese)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Titanic",
      "descricao": "Filme de 1997 dirigido por James Cameron, sobre um romance a bordo do transatlântico que naufragou em 1912."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Para filmar Titanic, James Cameron mandou construir uma réplica quase em tamanho real do navio num estúdio à beira-mar em qual país?",
    "resposta": "México",
    "distratores": [
      "Canadá",
      "Irlanda do Norte",
      "Bahamas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Titanic_(1997_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Titanic_(1997_film)",
        "situacao": "ok",
        "texto": "Titanic is a 1997 American historical romance film written and directed by James Cameron. Incorporating both historical and fictional aspects, it is based on accounts of the sinking of RMS Titanic in 1912. Leonardo DiCaprio and Kate Winslet star as members of different social classes who fall in love during the ship's ill-fated maiden voyage. The ensemble cast includes Billy Zane, Kathy Bates, Fra\n[…]\nCraftsmen from Mexico and Britain sculpted the ornate paneling and plasterwork based on Titanic's original designs. The carpeting, upholstery, pieces of furniture, light fixtures, chairs, cutlery and crockery with the White Star Line crest on each piece were among the objects recreated according to original designs. For the ship's interiors, production designer Peter Lamont's team looked for artifacts from the era. The newness of the ship meant every prop had to be made from scratch.\n[…]\nPrincipal photography began on July 31, 1996, at Dartmouth, Nova Scotia. The modern-day expedition scenes were shot aboard the Akademik Mstislav Keldysh. In September, the production moved to the newly built Fox Baja Studios in Rosarito, Mexico, where a full-scale Titanic replica had been constructed. The poop deck was built on a hinge that could rise from zero to 90 degrees in a few seconds, just as the ship's stern rose during the sinking.\n[…]\nEven with all of the jokes the Internet loves to throw its way, Titanic demonstrates that Cameron is truly capable of everything he can imagine.\"\n[…]\nIn 1998, an official tie-in computer game was released, titled James Cameron's Titanic Explorer. The educational game covered the history of the vessel's construction, maiden voyage and sinking, as well as the discovery and exploration of the wreck. The game included deleted footage from the film and extensive 360-degree video footage of the film's sets.\n[…]\nYouTube video detailing model construction on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Titanic_%28filme_de_1997%29",
        "situacao": "ok",
        "texto": "Titanic é um filme épico de romance e drama norte-americano de 1997, escrito, dirigido, co-produzido e co-editado por James Cameron. É uma história de ficção do naufrágio real do RMS Titanic, estrelando Leonardo DiCaprio como Jack Dawson, e Kate Winslet como Rose DeWitt Bukater, membros de diferentes classes sociais que se apaixonam durante a fatídica viagem inaugural do navio, saindo de Southampt\n[…]\nA produção começou em 1996, quando Cameron filmou os verdadeiros destroços do RMS Titanic. As cenas modernas foram filmadas no Akademik Mstslav Keldysh, navio de pesquisas russo que Cameron usou como base para filmar os destroços. Uma réplica do Titanic foi construída em Playas de Rosarito, no México; com miniaturas e computação gráfica sendo usadas para recriar o naufrágio. O filme foi financiado pela Paramount Pictures e pela 20th Century Fox.\n[…]\nHarland and Wolff, os construtores do RMS Titanic, abriram seus arquivos privados aos cineastas, mostrando plantas que acreditavam-se estar perdidas. Para os interiores do navio, a equipe do diretor de arte Peter Lamont procurou por artefatos originais da época. Entretanto, como o navio era novo, cada objeto de cena tinha de ser feito do zero. A Fox comprou 40 acres de praia em Playas de Rosarito, México, começando a construir um novo estúdio em 31 de março de 1996.\n[…]\nCameron escolheu construir seu RMS Titanic no lado estibordo já que estudos climáticos mostraram que o vento soprava de norte para sul, o que fazia a fumaça das chaminés seguir para a popa. Isso criou um problema para filmar as cenas da saída de Southampton, já que o verdadeiro navio ficou atracado pelo lado bombordo. Quaisquer escritura e objeto de cena tiveram de ser revertidos, e se alguém andasse para a direita no roteiro, ela deveria andar para a esquerda nas filmagens.\n[…]\nMarsh, Ed W. (1998). James Cameron's Titanic. Londres: Boxtree. ISBN 0067575161",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Star Wars: O Império Contra-Ataca",
      "descricao": "Segundo filme lançado da saga Star Wars, de 1980, dirigido por Irvin Kershner."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "As cenas no planeta gelado Hoth, que abrem O Império Contra-Ataca, foram filmadas perto de uma geleira de qual país?",
    "resposta": "Noruega",
    "distratores": [
      "Islândia",
      "Canadá",
      "Suíça"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Empire_Strikes_Back"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Empire_Strikes_Back",
        "situacao": "ok",
        "texto": "The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) is a 1980 American epic space opera film directed by Irvin Kershner from a screenplay by Leigh Brackett and Lawrence Kasdan, based on a story by George Lucas. The sequel to Star Wars (1977), it is the second film in the Star Wars film series and the fifth chronological chapter of the \"Skywalker Saga\".\n[…]\nThe film was the first in the series to be adapted for video games, beginning with Star Wars: The Empire Strikes Back (1982) developed by Parker Brothers for the Atari 2600. This was followed in 1985 by the Star Wars: The Empire Strikes Back arcade game. Star Wars Trilogy Arcade (1998) features the Hoth battle as a level.\n[…]\nThe Empire Strikes Back remains an enduringly popular piece of cinema. It is considered groundbreaking for its cliffhanger ending, influence on mainstream films, and special effects. Brian Lowry of CNN wrote that without the \"groundwork laid by one of the best sequels ever, [the Star Wars franchise] wouldn't be the force that it is now\".\n[…]\nRinzler, J. W. (2010). The Making of Star Wars: The Empire Strikes Back (Hardback ed.). London: Aurum Press. ISBN 978-1-84513-555-3. OCLC 657407687.\n[…]\nWilkins, Jonathan, ed. (2021). Star Wars: The Empire Strikes Back The 40th Anniversary Special Edition (Hardback ed.). London: Titan Publishing Group. ISBN 9781787734234.\n[…]\nClarke, Gerald (May 19, 1980). \"The Empire Strikes Back! And so does George Lucas in the second of his Star Wars epics\". Time. Vol. 115, no. 20. New York City. p. 66. Retrieved September 1, 2021.\n[…]\nDenby, David (May 26, 1980). \"Star Wars Strikes Back\". The New Yorker. Retrieved August 30, 2021.\n[…]\n\"Empire Strikes Tops Star Wars Opening Sales\". The New York Times. New York. May 24, 1980. p. 13. Retrieved March 17, 2021.\n[…]\nStar Wars, Episode V: The Empire Strikes Back at Filmsite.org\n[…]\nThe Empire Strikes Back at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Star_Wars%3A_Epis%C3%B3dio_V_%E2%80%93_O_Imp%C3%A9rio_Contra-Ataca",
        "situacao": "ok",
        "texto": "The Empire Strikes Back (bra/palop/prt/tls: O Império Contra–Ataca), posteriormente lançado como Star Wars: Episode V – The Empire Strikes Back (bra/palop/prt/tls: Star Wars: Episódio V – O Império Contra-Ataca), é um filme épico de ação–aventura e ficção científica norte-americano de 1980 dirigido por Irvin Kershner e escrito por Leigh Brackett e Lawrence Kasdan, com base na história de George Lu\n[…]\nThe Empire Strikes Back foi lançado em 21 de maio de 1980 e inicialmente recebeu críticas mistas, mas desde então tem crescido em grande estima, tornando-se o filme mais aclamado pela crítica da saga Star Wars; hoje é amplamente considerado como um dos melhores filmes de todos os tempos. O filme arrecadou mais de 500 milhões de dólares nos cinemas mundiais, e contêm cenas e música (The Imperial March) facilmente reconhecidos na cultura popular.\n[…]\nApós se recuperar em um tanque de Bacta, Luke se une aos outros pilotos na Batalha de Hoth contra o Império. Os pilotos enfrentaram os gigantescos tanques terrestres do Império, os andadores AT-AT, com suas novas naves planetárias, os Speeders. Após todos os rebeldes evacuarem com sucesso a base Echo, sobram apenas Han, Leia, Chewbacca \"Chewie\" e C-3PO, que partem na Millenium Falcon.\n[…]\nCom esta nova história de fundo no lugar, Lucas decidiu que a série seria uma trilogia, com The Empire Strikes Back sendo chamado de Episódio V. Lawrence Kasdan, que tinha acabado de escrever Raiders of the Lost Ark, foi então contratado para escrever os próximos rascunhos, e foi dada uma contribuição adicional, com a entrada do diretor Irvin Kershner.\n[…]\nO Império Contra-Ataca foi lançado nos cinemas portugueses pela Filmes Castello Lopes a 19 de dezembro de 1980. A edição especial foi lançada nos cinemas pela mesma distribuidora a 11 de abril de 1997, tendo contado com uma antestreia no dia anterior.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "O Pagador de Promessas",
      "descricao": "Filme brasileiro de 1962 dirigido por Anselmo Duarte, vencedor da Palma de Ouro em Cannes."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em O Pagador de Promessas, Zé do Burro carrega uma cruz pesada até a porta de uma igreja em qual capital brasileira?",
    "resposta": "Salvador",
    "distratores": [
      "Recife",
      "Aracaju",
      "São Luís"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/O_Pagador_de_Promessas",
      "https://pt.wikipedia.org/wiki/O_Pagador_de_Promessas_(filme)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/O_Pagador_de_Promessas",
        "situacao": "ok",
        "texto": "O Pagador de Promessas (Brazilian Portuguese pronunciation: [u paɡaˈdoʁ dʒi pɾoˈmɛsɐs]; Keeper of Promises) is a 1962 Brazilian drama film written and directed by Anselmo Duarte, based on the stage play of the same name by Dias Gomes. Shot in Salvador, Bahia, it stars Leonardo Villar and Glória Menezes.\n[…]\nIn 2015, the Brazilian Film Critics Association aka Abraccine voted Keeper of Promises the 9th greatest Brazilian film of all time, in its list of the 100 best Brazilian films.\n[…]\nZé do Burro (Leonardo Villar) is a landowner from Nordeste. His best friend is a donkey. When his donkey falls terminally ill, Zé promises to a Candomblé orisha, Iansan, that if his donkey recovers, he will give away his land to the poor and carry a cross all the way from his farm to the Saint Bárbara Church in Salvador, Bahia, where he will offer the cross to the local priest. Upon the recovery of his donkey, Zé leaves on his journey, covering a distance of 7 léguas (46 km; 29 miles).\n[…]\nThe sensationalist newspapers transform his promise to give away his land into a \"communist\" call for land reform (which remains a highly controversial issue in Brazil). When Zé is shot by the police to prevent his entry into the church, the Candomblé worshippers place his dead body on the cross and force their way into the church.\n[…]\nLeonardo Villar as Zé do Burro (Donkey Jack)\n[…]\nO Pagador de Promessas at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Pagador_de_Promessas_(filme)",
        "situacao": "ok",
        "texto": "O Pagador de Promessas é um filme brasileiro de 1962 do gênero drama, dirigido e escrito por Anselmo Duarte, baseado na peça teatral homônima do dramaturgo Dias Gomes. Em seu elenco principal, estão Leonardo Villar, Glória Menezes, Norma Bengell, Dionísio Azevedo e Geraldo Del Rey. A trama segue Zé do Burro que, após ter seu burro atingido por um raio, faz uma promessa em um terreiro de Candomblé.\n[…]\nA promessa era que, caso o animal melhorasse, ele dividiria sua terra igualmente entre os mais pobres e carregaria uma cruz, desde sua propriedade até a Igreja de Santa Bárbara, em Salvador, onde a oferecerá ao padre local. Acaba por enfrentar a intransigência da Igreja ao tentar cumprir a promessa.\n[…]\nEle é dono de um pequeno pedaço de terra no interior da Bahia. Seu melhor amigo é um burro chamado Nicolau. Quando este adoece, ele não consegue fazer nada para que o animal melhore, então faz uma promessa a uma Mãe de Santo de Candomblé: caso o burro se recupere, promete que dividirá sua terra igualmente entre os mais pobres e carregará uma cruz, desde sua propriedade até a Igreja de Santa Bárbara, em Salvador, onde a oferecerá ao padre local.\n[…]\nSeguido fielmente pela esposa Rosa, Zé chega ao templo de madrugada. O padre local, que representa a autoridade da religião oficial, se recusa receber a cruz de Zé após ouvir dele a razão pela qual a carregou e as circunstâncias \"pagãs\" em que a promessa foi feita, impossibilitando seu cumprimento. Todos em Salvador tentam se aproveitar do inocente e ingênuo Zé.\n[…]\nO Pagador de Promessas foi rodado em Salvador, capital do estado da Bahia, entre agosto e setembro de 1961. Anselmo Duarte convidou Leonardo Villar para o papel principal, que protagonizou a encenação da peça de Dias Gomes em 1960. A direção de fotografia foi feita pelo inglês Chick Fowle, que trabalhou anteriormente na Companhia Cinematográfica Vera Cruz.\n[…]\nBrasil no Festival de Cannes"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "De Volta para o Futuro Parte II",
      "descricao": "Filme de ficção científica de 1989 dirigido por Robert Zemeckis, continuação das viagens no tempo de Marty McFly e Doc Brown."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em De Volta para o Futuro Parte Dois, Marty McFly e Doc Brown visitam um futuro de carros voadores e skates flutuantes. Para que ano viajam?",
    "resposta": "2015",
    "distratores": [
      "2000",
      "2010",
      "2020"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Back_to_the_Future_Part_II"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Back_to_the_Future_Part_II",
        "situacao": "ok",
        "texto": "Back to the Future Part II is a 1989 American science fiction film directed by Robert Zemeckis from a screenplay by Bob Gale; both conceived the story. It is a sequel to the 1985 film Back to the Future and the second installment in the Back to the Future franchise. The film stars Michael J. Fox, Christopher Lloyd, Lea Thompson and Thomas F. Wilson, with Elisabeth Shue (replacing Claudia Wells) an\n[…]\nOn October 26, 1985, Dr. Emmett \"Doc\" Brown arrives unexpectedly in the DeLorean time machine, persuading Marty McFly and his girlfriend, Jennifer Parker, to travel to the future with him and help their future children. Once they arrive in 2015, Doc incapacitates Jennifer, leaving her asleep in an alley to avoid letting her learn about her own future. Doc explains that their son Marty Jr.\n[…]\nThe producers created a futuristic flying car to depict a typical taxi cab in the future world of 2015. This taxi was based on the Citroën DS.\n[…]\nIn the actual 2015 season, the Cubs qualified for the postseason, their first postseason appearance since 2008, but lost the National League Championship Series (not the World Series) to the New York Mets on October 21, which coincidentally was the same day as \"Back to the Future Day\", the day Marty McFly arrived in 2015 in the film.\n[…]\nUniversal re-released the trilogy alongside new features on DVD and Blu-ray on October 20, 2015, coinciding with Back to the Future Day the following day. The new set included a featurette called \"Doc Brown Saves the World\", where Lloyd, reprising his role as Doc Brown, explains the reasons for the differences between the future of 2015 as depicted in Back to the Future Part II and in real life.\n[…]\nOn October 12, 2015, Intrada Records released the complete score of Back to the Future Part II in a 2-disc set including early scoring sessions and alternative takes.\n[…]\nBack to the Future Part II at Metacritic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Back_to_the_Future_Part_II",
        "situacao": "ok",
        "texto": "Back to the Future Part II (no Brasil, De Volta para o Futuro 2; em Portugal e nos PALOP, Regresso ao Futuro II) é um filme estadunidense de ficção científica e aventura de 1989 dirigido por Robert Zemeckis e escrito por Bob Gale, sendo a sequência direta de Back to the Future (1985) e a segunda parte da trilogia homônima. O filme é estrelado por Michael J. Fox, Christopher Lloyd, Thomas F. Wilson\n[…]\nEmmett \"Doutor\" Brown (Lloyd), que viajam de 1985 a 2015 para evitar que o filho de Marty estrague o futuro da família McFly; seu arqui-inimigo Biff Tannen (Wilson) rouba a máquina do tempo DeLorean de Doc e usa-a para alterar a história em seu benefício, forçando a dupla a retornar a 1955 para restaurar a linha do tempo.\n[…]\nMarty McFly\n[…]\nNa temporada de 2015, os Cubs se classificaram para a pós-temporada, marcando sua primeira aparição na temporada desde 2008, mas os Cubs perderam a National League Championship Series (não a World Series) para o New York Mets em 21 de outubro de 2015, coincidentemente no mesmo dia que Marty, Brown e Jennifer chegaram no futuro em 2015 (dia que ficou conhecido como \"Back to the Future Day\").\n[…]\nNa verdadeira World Series de 2015, o Kansas City Royals derrotou o Mets para ganhar seu primeiro campeonato da World Series desde 1985, mesmo ano em que Marty e Doc partiram para irem pro futuro.\n[…]\nA Universal relançou a trilogia junto com os novos recursos em DVD e Blu-ray em 21 de outubro de 2015, coincidindo com o \"Back to the Future Day\". O novo conjunto incluiu um recurso chamado \"Doc Brown Salva o Mundo\", onde Lloyd, reprisando seu papel como Doc Brown, explica as razões para as diferenças entre o futuro de 2015 retratado em Back to the Future Part II e na vida real.\n[…]\nEm 12 de outubro de 2015, a Intrada Records lançou a partitura completa de Back to the Future Part II em um conjunto de dois discos, incluindo sessões de pontuação inicial e takes alternativos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Blade Runner",
      "descricao": "Filme de ficção científica de 1982 dirigido por Ridley Scott, sobre caçadores de androides numa Los Angeles futurista."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Lançado em 1982, Blade Runner imagina uma Los Angeles chuvosa e futurista, cheia de androides fugitivos. Em que ano se passa a história?",
    "resposta": "2019",
    "distratores": [
      "2001",
      "2020",
      "2049"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Blade_Runner"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blade_Runner",
        "situacao": "ok",
        "texto": "Blade Runner is a 1982 science fiction film directed by Ridley Scott from a screenplay by Hampton Fancher and David Peoples. Starring Harrison Ford, Rutger Hauer, Sean Young, and Edward James Olmos, it is an adaptation of the 1968 novel Do Androids Dream of Electric Sheep? by Philip K. Dick. The film is set in a dystopian future Los Angeles of 2019, in which synthetic humans known as replicants ar\n[…]\nIn 2019 Los Angeles, former police officer Rick Deckard is detained by Officer Gaff, who likes to make origami figures, and is brought to his former supervisor, Bryant. Deckard, whose job as a \"blade runner\" was to track down bioengineered humanoids known as replicants and terminally \"retire\" them, is informed that four replicants are on Earth illegally. Deckard begins to leave, but Bryant makes veiled threats and Deckard stays.\n[…]\nPrincipal photography of Blade Runner began on March 9, 1981, and ended four months later. The Bradbury Building in downtown Los Angeles served as a filming location, and a Warner Bros. backlot housed the 2019 Los Angeles street sets. Other locations included the Ennis-Brown House and the 2nd Street Tunnel. Test screenings resulted in several changes, including adding a voice-over, a happy ending, and the removal of a Holden hospital scene.\n[…]\nThe design of Tesla's Cybertruck was inspired by the film. Prior to its release Elon Musk promised that it would \"look like something out of Blade Runner\". Besides referring to the truck as the \"Blade Runner Truck\", Musk chose to debut the truck in order to coincide with the film's setting of November 2019. The film's art designer Syd Mead praised the truck and said he was \"flattered\" by the homage to Blade Runner.\n[…]\nBlade Runner: Convention Reel (1982, 13 minutes)\n[…]\nBlade Runner at Metacritic\n[…]\nBlade Runner at Rotten Tomatoes\n[…]\nBlade Runner at the TCM Movie Database (archived)\n[…]\nBlade Runner at the AFI Catalog of Feature Films"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Blade_Runner",
        "situacao": "ok",
        "texto": "Blade Runner (bra: Blade Runner - O Caçador de Androides ou Blade Runner, o Caçador de Androides; prt: Blade Runner - Perigo Iminente) é um filme de ficção científica neo-noir honcongo-estadunidense de 1982 dirigido por Ridley Scott e estrelado por Harrison Ford, Rutger Hauer, Sean Young e Edward James Olmos. O roteiro, escrito por Hampton Fancher e David Peoples, é vagamente baseado no romance Do\n[…]\nO filme se passa em novembro de 2019 numa decadente e futurista cidade de Los Angeles decaída com a poluição, o consumismo exacerbado e a consequente busca de novas formas de colonização em outros planetas, para a qual as pessoas são convidadas a aventurarem-se em face do colapso da civilização humana, tanto material quanto moralmente.\n[…]\nA sequência, intitulada Blade Runner 2049, foi lançada em 6 de outubro de 2017.\n[…]\nEm novembro de 2019 na cidade de Los Angeles, o ex-policial Rick Deckard (Harrison Ford) é detido pelo oficial Gaff (Edward James Olmos) que o leva até seu antigo supervisor, Bryant (M. Emmet Walsh). Deckard, cujo trabalho como \"Blade Runner\" foi de rastrear seres de bioengenharia, conhecidos como replicantes e \"aposentá-los\" (um eufemismo para matá-los). É informado que quatro replicantes vieram à Terra ilegalmente.\n[…]\nArchie Goodwin adaptou o script do filme para uma série de revistas em quadrinhos, intitulada A Marvel Super Special: Blade Runner, publicada em setembro de 1982.[carece de fontes]?\n[…]\nEm junho de 2009, o The New York Times anunciou que Scott e seu irmão Tony Scott estavam trabalhando em uma prequela de Blade Runner, ambientada em 2019. A prequela, Purefold, foi planejada como uma série de curtas com 5 a 10 minutos de duração, que seriam lançados primeiramente na internet, e se possível, na televisão. Devido a questões de direitos, a série proposta não deveria ser muito ligada aos personagens ou eventos do filme de 1982.\n[…]\nBlade Runner (franquia)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Ben-Hur (filme de 1959)",
      "descricao": "Épico americano dirigido por William Wyler, com Charlton Heston e a famosa corrida de bigas."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O épico Ben-Hur, de 1959, cruza a história de um nobre judeu com a vida de Jesus. Em que século se passa a trama?",
    "resposta": "Século um",
    "distratores": [
      "Século dois",
      "Século quatro",
      "Século dez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ben-Hur_(1959_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ben-Hur_(1959_film)",
        "situacao": "ok",
        "texto": "Ben-Hur () is a 1959 American religious epic film directed by William Wyler, produced by Sam Zimbalist, and starring Charlton Heston as the title character. A remake of the 1925 silent film with a similar title, it was adapted from Lew Wallace's 1880 novel Ben-Hur: A Tale of the Christ. The screenplay is credited to Karl Tunberg, but includes contributions from Maxwell Anderson, S. N. Behrman, Gor\n[…]\nFollowing a $14.7 million marketing effort, Ben-Hur premiered at Loew's State Theatre in New York City on November 18, 1959. It was the fastest-grossing as well as the highest-grossing film of 1959, becoming the second highest-grossing film in history at the time, after Gone with the Wind.\n[…]\nPrincipal photography ended on January 7, 1959, with filming of the crucifixion scene, which took four days to shoot.\n[…]\nIn December 1959, in her review for the London Sunday Times, the veteran British film critic Dilys Powell expressed many serious reservations but still lavished praise on the film:\n[…]\nIn 2025, The Hollywood Reporter listed Ben-Hur as having the best stunts of 1959.\n[…]\nBen-Hur appeared at #72 on the 100 Movies, #49 on the 100 Thrills, #21 on the Film Scores, #56 on the 100 Cheers and #2 on the AFI's 10 Top 10 Epic film lists. In 2004, the National Film Preservation Board selected Ben-Hur for preservation by the National Film Registry for being a \"culturally, historically, or aesthetically significant\" motion picture. It was listed as number 491 on Empire's 500 Greatest films of all time.\n[…]\nComic book • Dell Four Color #1052 (November 1959) • 32 pages in full color, plus covers • Published by Dell Publishing Co., Inc. • Designed and produced by Western Printing and Lithographing Co. • Copyright © 1959 by Loew's Incorporated • (cover painting by Sam Savitt • drawn by Russ Manning) [authorized film tie-in]\n[…]\nList of American films of 1959\n[…]\nList of historical drama films"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ben-Hur_%281959%29",
        "situacao": "ok",
        "texto": "Ben-Hur é um filme épico norte-americano de 1959 dirigido por William Wyler, produzido por Sam Zimbalist para Metro-Goldwyn-Mayer e estrelado por Charlton Heston, Jack Hawkins, Haya Harareet, Stephen Boyd e Hugh Griffith. O filme é uma refilmagem do longa homônimo de 1925 e também uma adaptação do romance Ben-Hur: A Tale of the Christ escrito por Lew Wallace. O roteiro é creditado a Karl Tunberg, \n[…]\nO filme teve o maior orçamento e os maiores cenários construídos na história do cinema até então. A figurinista Elizabeth Haffenden supervisionou uma equipe de mais de cem fabricantes de roupas, com mais de duzentos artistas e operários trabalhando nas centenas de frisos criados para a produção. As filmagens começaram em 18 de maio de 1958 e foram finalizadas em 7 de janeiro de 1959, sendo realizadas seis dias por semana durante períodos de doze a catorze horas diárias.\n[…]\nKarl Tunberg foi um dos últimos escritores a trabalhar na história, com ele cortando tudo do livro que se passava depois da crucificação de Jesus, omitindo o subenredo de Ben-Hur fingindo sua morte e reunindo um exército judeu para lutar contra os romanos, e alterando o modo de como as mulheres com lepra são curadas. Zimbalist ficou insatisfeito com o roteiro de Tunberg, considerando-o \"pedestriano\" e \"infilmável\".\n[…]\nSeu salário era o maior na época já pago para um diretor por um único filme. Motivos de competição profissional também tiveram um papel na decisão de Wyler para dirigir, com ele posteriormente admitindo que queria superar Cecil B. DeMille (diretor de The Ten Commandments) e realizar um épico bíblico do \"pensamento do homem\". Anos depois Wyler brincaria que precisou de um judeu para fazer um bom filme sobre Cristo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Que Horas Ela Volta?",
      "descricao": "Filme brasileiro de 2015 dirigido por Anna Muylaert, com Regina Casé como a babá Val."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O filme Que Horas Ela Volta, em que Regina Casé vive a empregada doméstica Val, foi escrito e dirigido por qual cineasta?",
    "resposta": "Anna Muylaert",
    "distratores": [
      "Laís Bodanzky",
      "Carla Camurati",
      "Petra Costa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Second_Mother_(2015_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Second_Mother_(2015_film)",
        "situacao": "ok",
        "texto": "The Second Mother (Portuguese: Que Horas Ela Volta?, lit. 'When Is She Coming Back?') is a 2015 Brazilian drama film written and directed by Anna Muylaert. The film stars Regina Casé as Val, the housemaid of a wealthy family in São Paulo, and portrays the tensions that arise after her daughter Jéssica moves into the family's house in order to apply for an admission exam at the University of São Pa\n[…]\nMuylaert originally envisioned it before the release of her first feature film, Durval Discos (2002), but she felt she was not capable of directing it at the time. Originally titled A Porta da Cozinha (The Kitchen Door), it was based on Muylaert's own experience with a nanny, who took care of Muylaert's son after leaving her own daughter. The screenplay was rewritten four times by her and Casé since its original conception because Muylaert felt it was \"immature\".\n[…]\nCasé had an important role as she knew closely the reality of several Northeastern women who went to São Paulo to find a job, and Muylaert was cautious not to create a caricature of the central character. She said she wrote the story because taking care of other people's children is \"sacred work that is very underrated.\" The film took nine months to make.\n[…]\nThe Second Mother premiered at the 2015 Sundance Film Festival, in which Casé and Camila Márdila shared the World Cinema Dramatic Special Jury Award for Acting. Its European premiere took place in the Panorama section of the 65th Berlin International Film Festival, where it won the Panorama Audience Award. On 15 December 2014 The Match Factory acquired international rights to the film.\n[…]\nThe Second Mother received critical acclaim. On the review aggregator website Rotten Tomatoes, the film holds an approval rating of 97% based on 93 reviews, with an average rating of 8/10.\n[…]\nThe Second Mother at IMDb\n[…]\nThe Second Mother at Box Office Mojo\n[…]\nThe Second Mother at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Que_Horas_Ela_Volta%3F",
        "situacao": "ok",
        "texto": "Que Horas Ela Volta? é um filme brasileiro de 2015, do gênero drama, escrito e dirigido por Anna Muylaert. O filme é protagonizado por Regina Casé e trata dos conflitos que acontecem entre Val, uma empregada doméstica, e seus patrões de classe média alta, criticando as desigualdades da sociedade brasileira.\n[…]\nVal (Regina Casé), uma mulher nordestina de origem humilde, vai para São Paulo em busca de um emprego, deixando para trás sua filha Jéssica (Camila Márdila) com o avô. Na capital paulista, Val consegue o cargo de babá e depois de empregada doméstica na casa de Bárbara (Karine Teles) e José Carlos (Lourenço Mutarelli), uma família de classe média alta onde ela cuida do filho dos patrões, Fabinho (Michel Joelsas).\n[…]\nRegina Casé como Valdirene Ferreira (Val)\n[…]\nMuylaert inicialmente imaginou fazer o filme pouco antes do lançamento de seu primeiro longa-metragem, Durval Discos (2002), mas ela sentiu que não era capaz de dirigi-lo no momento. Originalmente intitulado A Porta da Cozinha, foi baseado na própria experiência de Muylaert com uma babá, que cuidou de seu filho depois de ter deixado sua própria filha. O roteiro foi reescrito quatro vezes por ela e Casé desde a sua primeira concepção, quando Muylaert considerava que ainda estava \" imaturo\".\n[…]\nCasé tem um papel importante já que ela conhece muito bem a realidade de diversas mulheres nordestinas que foram para São Paulo em busca de um emprego, e Muylaert não procurava criar uma caricatura do que seria um personagem real. Ao contrário, ela escreveu a história, porque em sua opinião, cuidar de crianças de outras pessoas é \"trabalho sagrado que é muito subestimado.\"\n[…]\nJá em Junho de 2015, a diretora e roteirista Anna Muylaert venceu o prêmio de melhor Direção no Valletta Film Festival, na Ilha de Malta.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Cidade de Deus",
      "descricao": "Filme brasileiro de 2002 dirigido por Fernando Meirelles, sobre jovens numa favela do Rio de Janeiro."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O filme Cidade de Deus foi adaptado do romance de um escritor que cresceu na própria comunidade carioca. Quem é ele?",
    "resposta": "Paulo Lins",
    "distratores": [
      "Ferréz",
      "Marcelo Rubens Paiva",
      "Rubem Fonseca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/City_of_God_(2002_film)",
      "https://pt.wikipedia.org/wiki/Paulo_Lins"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/City_of_God_(2002_film)",
        "situacao": "ok",
        "texto": "City of God (Portuguese: Cidade de Deus) is a 2002 Brazilian epic crime film directed by Fernando Meirelles and co-directed by Kátia Lund. The screenplay, written by Bráulio Mantovani, is adapted from the 1997 novel of the same name by Paulo Lins, though the plot is also loosely based on real events.\n[…]\nFollowing the success of City of God, Meirelles and Lund created the City of Men TV series and its 2007 film adaptation. Both projects share some actors (notably leads Silva and Darlan Cunha) and the same setting as City of God.\n[…]\nCity of God was filmed on 16mm film stock.\n[…]\nMeirelles went into the film with the intention of staying true to the \"casual nature\" of the violence in the novel by Lins. Critic Jean Oppenheimer wrote on the production of the film saying that: \"A second guiding principle was to avoid glamorising the violence\" and that \"many of the killings are either shown indistinctly or kept out of frame.\"\n[…]\nBecause the real Cidade de Deus favela was in the middle of a conflict, a large majority of the film was shot in Cidade Alta, a different favela within Rio. During the production, slumlords did not allow for the production company to have their own security, so local security guards were hired for the safety of the set.\n[…]\n\"O Caminho Do Bem\" (Sérgio / Beto / Paulo) – Tim Maia\n[…]\nBrazilian rapper MV Bill, a resident of Cidade de Deus, said the film had \"brought no good to the favela, no social, moral, or human benefit.\" He said, \"The world will know that they exploited the image of the children who live here in Cidade de Deus. What is obvious is that they are going to carry a bigger stigma throughout their lives; it has only become greater because of the film.\"\n[…]\nCity of God at IMDb\n[…]\nCity of God at Box Office Mojo\n[…]\nCity of God at Rotten Tomatoes\n[…]\nCity of God at Metacritic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paulo_Lins",
        "situacao": "ok",
        "texto": "Paulo Lins (Rio de Janeiro, 11 de junho de 1958) é um escritor brasileiro que ganhou fama internacional com a publicação, em 1997, do livro Cidade de Deus, sobre a vida nas favelas do Rio de Janeiro.\n[…]\nFilho de pais baianos, foi morador da favela carioca Cidade de Deus. Começou como poeta nos anos 1980 como integrante do grupo Cooperativa de Poetas, por onde publicou seu primeiro livro de poesia: Sobre o sol (UFRJ, 1986). Graduado no curso de Letras, foi contemplado – em 1995 – com a Bolsa Vitae de Literatura.\n[…]\nParticipou como assistente de um estudo sociológico/antropológico e nesse período escreveu Cidade de Deus. Inicialmente foi pensado como um relato sobre a vida de Paulo Lins na comunidade, um trabalho de antropologia sobre a criminalidade.\n[…]\nEm 2002, o diretor Fernando Meirelles produziu o filme Cidade de Deus, com base no livro, que recebeu quatro indicações ao Oscar 2004 (melhor diretor, melhor fotografia, melhor montagem e melhor roteiro adaptado) e foi indicado para o Globo de Ouro de melhor filme estrangeiro. O roteiro é de Bráulio Mantovani.\n[…]\nEm 2008, Paulo Lins trabalhou com René Sampaio, no roteiro de mais um longa-metragem, adaptação cinematográfica da letra da canção de Renato Russo, Faroeste Caboclo.\n[…]\nApós quatorze anos de trabalho intermitente, em 2012 Paulo Lins lançou a sua segunda obra-prima, Desde que o Samba é Samba, que recria meio ficcionalmente e meio historicamente a invenção do samba moderno por músicos do bairro carioca da Estácio na década de 1920.\n[…]\nCidade de Deus (1997)\n[…]\nEpisódios da série Cidade dos Homens (TV Globo)\n[…]\nFaroeste Caboclo (filme) (2013) de René Sampaio"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Branca de Neve e os Sete Anões (filme)",
      "descricao": "Primeiro longa-metragem de animação dos estúdios Disney, lançado em 1937."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A animação Branca de Neve e os Sete Anões, da Disney, adapta um conto popular alemão registrado por quem?",
    "resposta": "Irmãos Grimm",
    "distratores": [
      "Hans Christian Andersen",
      "Charles Perrault",
      "Wilhelm Hauff"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)",
        "situacao": "ok",
        "texto": "Snow White and the Seven Dwarfs is a 1937 American animated musical fantasy film produced by Walt Disney and released by RKO Radio Pictures, based on the 1812 German fairy tale \"Snow White\" by the Brothers Grimm. The film was supervised by David Hand and a team of five sequence directors: Perce Pearce, William Cottrell, Larry Morey, Wilfred Jackson, and Ben Sharpsteen. It is the first animated fea\n[…]\nDisney settled on the Brothers Grimm's 1812 fairy tale \"Snow White\" in the spring of 1934. He had been familiar with the story since he was a teenager, having seen the 1916 silent film version, which he later cited as the primary reason for choosing \"Snow White\" for his first feature production. Disney had originally planned to produce Snow White as a Silly Symphony short, but reconsidered, believing that the story had enough potential for a feature film adaptation.\n[…]\nTwo extensive companion books, The Fairest One of All: The Making of Walt Disney's Snow White and the Seven Dwarfs and Snow White and the Seven Dwarfs: The Art and Creation of Walt Disney's Classic Animated Film were written by J.B. Kaufman and published by Weldon Owen on October 16, 2012.\n[…]\nList of Disney animated features\n[…]\nKaufman, J. B. (2012a). Snow White and the Seven Dwarfs: The Art and Creation of Walt Disney's Classic Animated Film. Weldon Owen. ISBN 978-1-6162-8437-4.\n[…]\nKrause, Martin; Witowski, Linda (1994). Walt Disney's Snow White and the Seven Dwarfs: An Art in Its Making. Disney Editions. ISBN 978-0-7868-6144-6.\n[…]\nWalt's Masterworks: Snow White and the Seven Dwarfs at Disney.com (archived)\n[…]\nEgan, Daniel (2010). \"Snow White and the Seven Dwarfs\". America's Film Legacy: The Authoritative Guide to the Landmark Movies in the National Film Registry. A&C Black. p. 268. ISBN 978-0-8264-2977-3.\n[…]\nKaufman, J. B. \"Snow White and the Seven Dwarfs\" (PDF). National Film Registry.\n[…]\nSnow White and the Seven Dwarfs at Box Office Mojo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Branca_de_Neve_e_os_Sete_An%C3%B5es_%28filme%29",
        "situacao": "ok",
        "texto": "Snow White and the Seven Dwarfs (bra/prt: Branca de Neve e os Sete Anões) é um filme estadunidense de animação, dos gêneros musical, romance e aventura lançado em 1937. É o primeiro longa-metragem de animação da Disney e é baseado no conto de fadas \"Branca de Neve\", dos Irmãos Grimm. A história foi adaptada por Dorothy Ann Blank, Richard Creedon, Merrill De Maris, Otto Englander, Earl Hurd, Dick R\n[…]\nBranca de Neve e os Sete Anões iria ser o primeiro filme de animação da história do cinema, e como tal, Walt Disney teve que lutar para conseguir que o filme fosse produzido. Roy Disney, seu irmão e parceiro de negócios e sua esposa Lillian tentaram persuadi-lo a desistir, enquanto a indústria de Hollywood se referia ao filme ironicamente como \"Disney's Folly\" (\"Loucura do Disney\" em tradução literal) enquanto estava em produção.\n[…]\nJunto com um foco nas caracterizações e possibilidades cômicas dos anões, Creedon escreveu um esboço de dezoito páginas da história a partir das reuniões de outubro, que contou com um fluxo contínuo de cenas de comédia, bem como uma tentativa da Rainha de matar Branca de Neve com um pente envenenado, um elemento retirado da história original dos irmãos Grimm.\n[…]\nEm 2013, foi lançado o jogo móvel Snow White: Queen's Return (também conhecido como Seven Dwarfs: The Queen's Return), uma continuação do filme, onde a Rainha sobreviveu à queda no clímax e, em seguida, revertida para sua forma jovem para lançar uma maldição sobre Branca de Neve, os anões e toda sua floresta.\n[…]\nA atriz até então desconhecida, Mary Jo Salerno, interpretou Branca de Neve na produção musical da Disney, Snow White and the Seven Dwarfs, (também conhecido como Snow White Live!) no Radio City Music Hall. Jay Blackton e Joe Cook colaboraram na criação de quatro canções exclusivas para o musical, como Welcome to the Kingdom of Once Upon a Time e Will I Ever See Her Again?.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Matrix",
      "descricao": "Filme de ficção científica de 1999, das irmãs Wachowski, sobre um programador que descobre viver numa realidade simulada."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Matrix, Morpheus oferece duas pílulas a Neo. De que cor é a que o leva a descobrir a verdade sobre o mundo?",
    "resposta": "Vermelha",
    "distratores": [
      "Azul",
      "Verde",
      "Amarela"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Red_pill_and_blue_pill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Red_pill_and_blue_pill",
        "situacao": "ok",
        "texto": "Red pill and blue pill are metaphorical terms representing a choice between learning an unsettling or life-changing truth by taking the red pill or remaining in the unquestioned and persistent illusion appearing as ordinary reality with the blue pill. The pills were used as props in the 1999 film The Matrix.\n[…]\nIn a 2012 interview, Matrix director Lana Wachowski said:\n[…]\nBoth Neo and another character, Cypher (Joe Pantoliano), take the red pill over the blue pill, though later in the first Matrix film, Cypher demonstrates regret for having made that choice, saying that if Morpheus had fully informed him of the situation, Cypher would have told him to \"shove the red pill right up [his] ass.\" When Cypher subsequently makes a deal with the machines to return to the Matrix and forget everything he had learned, he says, \"Ignorance is bliss.\" Blackford argues that the Matrix films set things up so that even if Neo fails, the taking of the red pill is worthwhile because he lives and dies authentically.\n[…]\nMatrix Warrior: Being the One author Jake Horsley compared the red pill to LSD, citing a scene where Neo forms his own world outside of the Matrix. When he asks Morpheus if he could return, Morpheus responds by asking him if he would want to. Horsley also describes the blue pill as addictive, calling The Matrix series a continuous series of choices between taking the blue pill and not taking it.\n[…]\nThe Matrix, and its sequels, contain numerous references to Lewis Carroll's 1865 novel Alice's Adventures in Wonderland and its 1872 sequel Through the Looking-Glass. The Alice in Wonderland metaphor is made explicit in Morpheus's speech to Neo, with the phrases \"white rabbit\" and \"down the rabbit hole\", as well as the description of Neo's path of discovery as \"Wonderland\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%ADlula_vermelha_e_p%C3%ADlula_azul",
        "situacao": "ok",
        "texto": "A pílula vermelha e seu oposto, a pílula azul (em inglês:  red pill and blue pill, são símbolos da cultura popular que representam a escolha entre abraçar a verdade às vezes dolorosa (vermelha) e a ignorância abençoada (azul).\n[…]\nUm ensaio escrito por Russell Blackford trata do assunto das pílulas vermelhas e azuis. Ele questiona se uma pessoa plenamente informados que tomam a pílula vermelha e opt para o mundo real, uma vez que ele não acredita que ele é um caso claro de escolher uma realidade física para um digital. Tanto quanto Neo e outro personagem, Cypher (Joe Pantoliano), quando a verdade foi revelada, eles se arrependeram da escolha.\n[…]\nCypher afirmou que, se Morpheus o tivesse informado totalmente da situação, ele teria dito para \"enfiar a pílula vermelha em seu traseiro\". Da mesma forma, ao trair os humanos Cypher com a promessa das máquinas de retornar à Matriz e esquecer tudo o que aconteceu, ele afirma que “a ignorância é uma bênção”. Blackford argumenta que a trilogia Matrix é estruturada de forma que, mesmo se Neo falhasse, valeria a pena tomar a pílula vermelha porque ele realmente viveria e morreria.\n[…]\nO autor de Matrix Warrior: Being the One , Jake Horsley , compara a pílula vermelha ao LSD em relação a uma cena em que Neo cria seu próprio mundo fora da Matrix. Quando ele pergunta a Morfeu se ele pode voltar, ele pergunta se ele quer. Horsley também descreve a pílula azul como viciante, chamando The Matrix uma série contínua de escolhas entre ingerir a pílula azul ou não. Ele acrescenta que os hábitos e rotinas dentro da Matriz são apenas o consumo permanente da pílula azul.\n[…]\nEmbora a pílula azul seja uma coisa comum, a pílula vermelha é única, algo que nem se pode encontrar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Cinema Novo",
      "descricao": "Movimento do cinema brasileiro dos anos 1950 e 1960, de Glauber Rocha e Nelson Pereira dos Santos, voltado à realidade social do país."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "O lema do Cinema Novo, atribuído a Glauber Rocha, pedia só duas coisas para fazer um filme: uma câmera na mão e o quê?",
    "resposta": "Uma ideia na cabeça",
    "distratores": [
      "Um povo na tela",
      "Um sonho no peito",
      "Uma luz no sertão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cinema_Novo",
      "https://pt.wikipedia.org/wiki/Cinema_Novo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cinema_Novo",
        "situacao": "ok",
        "texto": "Cinema Novo (Portuguese pronunciation: [siˈnemɐ ˈnovu]; 'New Cinema'), is a genre and movement of film noted for its emphasis on social equality and intellectualism that rose to prominence in Brazil during the 1960s and 1970s. Cinema Novo formed in response to class and racial unrest both in Brazil and the United States.\n[…]\nMost film historians agree that Glauber Rocha, \"one of the most well-known and prolific filmmakers to emerge in the late 1950s in Brazil\", was the most powerful advocate for Cinema Novo in its first phase. Dixon and Foster contend that Rocha helped initiate the movement because he wanted to make films that educated the public about social equality, art and intellectualism, which Brazilian cinema at the time did not do.\n[…]\nBut Rocha also warned filmmakers and consumers that being too complacent in the achievements of Cinema Novo would return Brazil to its pre-Cinema Novo state:\n[…]\nAccording to Aristides Gazetas, Cinema Novo is the first example of an influential genre called Third Cinema. Like Cinema Novo, Third Cinema draws on Italian neorealism and French New Wave. Gazetas claims that Cinema Novo can be characterized as early Third Cinema because Glauber Rocha \"adopted Third Cinema techniques to bring awareness of the social and political realities in his country through cinema\".\n[…]\nIn 1965, Glauber Rocha claimed that \"Cinema Novo is a phenomenon of new peoples everywhere and not a privilege of Brazil.\" Appropriately, Third Cinema has affected film culture throughout the world. In Italy, Gillo Pontecorvo directed the Oscar-nominated The Battle of Algiers (1965), which depicted native African Muslims as brave militants fighting French colonists in Algeria.\n[…]\nGlauber Rocha\n[…]\nHollyman, Burnes Saint Patrick (1983), Glauber Rocha and The Cinema Novo, New York & London: Garland."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cinema_Novo",
        "situacao": "ok",
        "texto": "Cinema Novo foi um movimento cinematográfico brasileiro, destacado pela sua crítica à desigualdade social que se tornou proeminente no Brasil durante os anos 1960 e 1970.\n[…]\nA maioria dos historiadores do cinema concorda que Glauber Rocha, \"um dos cineastas mais conhecidos e prolíficos que surgiram no final da década de 1950 no Brasil\" foi o mais poderoso defensor do Cinema Novo em sua primeira fase. Dixon e Foster afirmam que Rocha ajudou a iniciar o movimento porque queria fazer filmes que educassem o público críticos à desigualdade social o que o cinema brasileiro na época não fazia.\n[…]\nCom Rocha no leme durante sua primeira fase, o Cinema Novo foi elogiado por críticos em todo o mundo.\n[…]\nSegundo Aristides Gazetas, Cinema Novo é o primeiro exemplo de um gênero influente chamado Terceiro Cinema. Como o Cinema Novo, o Terceiro Cinema se baseia no neorrealismo italiano e na Nouvelle Vague francesa. Gazetas alega que o Cinema Novo pode ser caracterizado como um precursor do Terceiro Cinema, porque Glauber Rocha \"adotou as técnicas do Terceiro Cinema para conscientizar as realidades sociais e políticas em seu país através do cinema\".\n[…]\nEm 1965, Glauber Rocha afirmou que \"o Cinema Novo é um fenômeno de novos povos em todos os lugares e não um privilégio do Brasil\". Adequadamente, o Terceiro Cinema afetou a cultura do cinema em todo o mundo. Na Itália, Gillo Pontecorvo dirigiu Battaglia di Algeri (\"A Batalha de Argel\", 1966), que retratava muçulmanos africanos nativos como valentes guerrilheiros combatendo colonialistas franceses na Argélia.\n[…]\nHollyman, Burnes Saint Patrick (1983), Glauber Rocha and The Cinema Novo, New York & London: Garland.\n[…]\n«Cinema Brasileiro»"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "E o Vento Levou",
      "descricao": "Épico americano ambientado na Guerra Civil, baseado no romance de Margaret Mitchell, estrelado por Vivien Leigh e Clark Gable."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em 1940, Hattie McDaniel se tornou a primeira pessoa negra a ganhar um Oscar, como a criada Mammy. Em que filme?",
    "resposta": "E o Vento Levou",
    "distratores": [
      "O Mágico de Oz",
      "Imitação da Vida",
      "Jezebel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hattie_McDaniel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hattie_McDaniel",
        "situacao": "ok",
        "texto": "Hattie McDaniel (June 10, 1893 – October 26, 1952) was an American actress, singer-songwriter, and comedian. For her role as Mammy in Gone with the Wind (1939), she won the Academy Award for Best Supporting Actress, becoming the first African American to win an Oscar. She has two stars on the Hollywood Walk of Fame, was inducted into the Black Filmmakers Hall of Fame in 1975, and in 2006, became t\n[…]\nThe competition to win the part of Mammy in Gone with the Wind was almost as fierce as that for Scarlett O'Hara. First Lady Eleanor Roosevelt wrote to film producer David O. Selznick to ask that her own maid, Elizabeth McDuffie, be given the part. McDaniel did not think she would be chosen, because she had earned her reputation as a comic actress.\n[…]\nGone with the Wind (1936) author Margaret Mitchell telegrammed her after the screening: “The Mayor of Atlanta called for a hand for our Hattie McDaniel and I wish you could have heard the cheers.” The two developed a friendship thereafter, though they never met.\n[…]\nThe 12th Academy Awards took place at Coconut Grove Restaurant of the Ambassador Hotel in Los Angeles. It was preceded by a banquet in the same room. Louella Parsons, an American gossip columnist, reported about Oscar night, writing on February 29, 1940: \"Hattie McDaniel earned that gold Oscar by her fine performance of 'Mammy' in ''Gone with the Wind''.\n[…]\nThe discrimination continued after the award ceremony as well; her white co-stars went to a \"no-blacks\" club, where McDaniel was also denied entry. No other black woman won an Oscar again for 50 years until Whoopi Goldberg won Best Supporting Actress for her role in Ghost. Weeks prior to McDaniel winning her Oscar, there was even more controversy. David Selznick, the producer of Gone With the Wind, omitted the faces of all the black actors on the posters advertising the movie in the South.\n[…]\nHattie McDaniel at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hattie_McDaniel",
        "situacao": "ok",
        "texto": "Hattie McDaniel (Wichita, 10 de junho de 1893 — Los Angeles, 26 de outubro de 1952) foi uma atriz e cantora norte-americana.\n[…]\nEm 1940 se tornou a primeira artista afro-descendente a receber um Óscar - o de  melhor atriz coadjuvante, pelo filme Gone with the Wind. Também foi a primeira negra a ir à premiação como convidada e não como servente - os organizadores do Oscar tiveram que pedir uma autorização especial para que McDaniel pudesse comparecer ao evento, pois o edifício onde a cerimônia ocorreu não permitia a entrada de pessoas negras.\n[…]\nFoi pelo papel de Mammy em … E o Vento Levou (1939), que ela recebeu o Oscar de melhor atriz coadjuvante, em 29 de fevereiro de 1940, tornando-se na primeira negra a receber tal prêmio. Também foi a primeira negra a ir à cerimônia de entrega dos prêmios Oscar como convidada.\n[…]\nQuando foi se aproximando a data de estreia de …E o Vento Levou em Atlanta, ela avisou ao diretor do filme, Victor Fleming, que estava  doente e não poderia ir; na verdade, ela não foi pois estava com medo do que poderia acontecer devido a recente ascensão da Ku Klux Klan no Sul. Quando Clark Gable descobriu que McDaniel não iria por causa de questões raciais, ele ameaçou boicotar a estreia do filme; ele mais tarde rendeu-se a ir após McDaniel convencê-lo.\n[…]\nMcDaniel também conseguiu os papéis principais nos filmes Saratoga e The Mad Miss Manton antes do lançamento de …E o Vento Levou. Sua performance em In This Our Life de 1942, também é muito lembrada por sua interpretação dramática de uma dona de casa negra cujo filho é acusado injustamente por um atropelamento.\n[…]\nHattie McDaniel no IMDb",
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
