Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Literatura Brasileira** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Memórias Póstumas de Brás Cubas",
      "descricao": "Romance de Machado de Assis narrado por um defunto, lançado em livro em 1881."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Logo no início de Memórias Póstumas, Brás Cubas conta que morreu em 1869, rijo e próspero. Com quantos anos?",
    "resposta": "Sessenta e quatro anos",
    "distratores": [
      "Cinquenta e quatro anos",
      "Setenta e dois anos",
      "Quarenta e oito anos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Memórias_Póstumas_de_Brás_Cubas",
      "https://en.wikipedia.org/wiki/The_Posthumous_Memoirs_of_Brás_Cubas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Memórias_Póstumas_de_Brás_Cubas",
        "situacao": "ok",
        "texto": "Memórias Póstumas de Brás Cubas é um romance escrito por Machado de Assis, desenvolvido em princípio como folhetim, de março a dezembro de 1880, na Revista Brasileira, para, no ano seguinte, ser publicado como livro, pela então Tipografia Nacional como Memorias Posthumas de Braz Cubas.\n[…]\n— Memórias Póstumas de Brás Cubas, Capítulo CLX\n[…]\nDois outros gêneros significativos em Memórias Póstumas são as antecipações modernas da obra—a estrutura fragmentária não-linear, o gosto pelo elíptico e alusivo e a postura metalinguística de quem escreve e se vê escrevendo (Brás Cubas no início declara explicitamente basear-se em Laurence Sterne).\n[…]\nPorém, a \"sensação dupla e indefinível\", de Céu e Inferno, tão exposta por Pascal em Pensées, é logo citada explicitamente por Brás Cubas no Capítulo XCVIII, em francês original (\"l'ange et la bête\"), quando ele está diante de Nhã-loló. Pascal também escrevia que o homem está sempre diante do tudo e do nada, e nas Memórias Póstumas o tema da precariedade da condição humana é expresso pela miséria e pela temporalidade da vida.\n[…]\nEm se tratando ao próprio conjunto de obras do autor, Memórias Póstumas marcou para sempre a escrita de Machado de Assis e propiciou novos significados e estilos e uma temática amadurecida em diversos contos e mais outros quatro romances prestigiados, todos, como as Memórias, compostos em capítulos curtos, todos (a exceção de Quincas Borba) narrados em primeira pessoa e substancialmente ambíguos e ricos em relação a elementos básicos da história.\n[…]\nCapistrano de Abreu, em resenha de sua autoria, perguntava-se: \"As Memórias Póstumas de Brás Cubas serão um romance?\" E continua:\n[…]\nMemórias Póstumas, filme brasileiro de 2001 baseado na obra\n[…]\n«Memórias Póstumas de Brás Cubas». Consultado em 2 de junho de 2020"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Posthumous_Memoirs_of_Brás_Cubas",
        "situacao": "ok",
        "texto": "The Posthumous Memoirs of Brás Cubas (Portuguese: Memorias Posthumas de Braz Cubas, modern spelling Memórias Póstumas de Brás Cubas), also translated as Epitaph of a Small Winner, is a novel by the Brazilian writer Joaquim Maria Machado de Assis that is regarded as one of the greatest works of Brazilian literature. The book is presented as the memoirs of its protagonist, Brás Cubas, as told from b\n[…]\nBrás Cubas dedicates his book: \"To the worm who first gnawed on the cold flesh of my corpse, I dedicate with fond remembrance these Posthumous Memoirs\" (Portuguese: Ao verme que primeiro roeu as frias carnes do meu cadáver dedico com saudosa lembrança estas Memórias Póstumas), which indicates that not a single person he met through his life deserved the book.\n[…]\nHe introduced Cubas to his philosophical system, Humanitism.\n[…]\nAssis created a philosophical theory to criticize Positivism, which was common in Brazil's literature back then. The theory in question was Humanitism, created in the books by Quincas Borba, a friend of Brás Cubas who had gone mad before dying. By doing this, Assis sharply criticizes the current philosophical theories, implying that only someone crazy would believe in them.\n[…]\nThere have been multiple translations. It was first translated into English in 1952 as Epitaph of a Small Winner by William L. Grossman. In 1997, it was translated as The Posthumous Memoirs of Brás Cubas by Gregory Rabassa. In 2020, there were two new translations, by Flora Thomson-DeVeaux (Penguin Classics) and Margaret Jull Costa and Robin Patterson (Liveright). The New York Times named Jull Costa and Patterson's translation \"the superior translation\" (Parul Sehgal, The New York Times).\n[…]\nMemórias Póstumas de Bras Cubas (in Portuguese)\n[…]\nMemórias Póstumas de Brás Cubas public domain audiobook at LibriVox (in Portuguese)"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Senhora",
      "descricao": "Romance urbano de José de Alencar publicado em 1875, sobre Aurélia Camargo, que compra um marido."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No romance Senhora, de José de Alencar, a rica Aurélia compra Fernando Seixas como marido oferecendo um dote de quanto?",
    "resposta": "Cem contos de réis",
    "distratores": [
      "Dez contos de réis",
      "Mil contos de réis",
      "Cinquenta contos de réis"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Senhora_(livro)",
      "https://pt.wikipedia.org/wiki/José_de_Alencar"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Senhora_(livro)",
        "situacao": "ok",
        "texto": "Senhora é romance urbano do escritor brasileiro José de Alencar, publicado em 1874, na forma de folhetim.\n[…]\nO romance narra, basicamente, a trajetória de uma mulher, Aurélia Camargo, que, quando pobre, foi passada para trás pelo homem que ela amava, Fernando Seixas. Depois de enriquecer graças a uma herança inesperada, tornando-se “uma linda e rica jovem da sociedade carioca, bajulada por muitos pretendentes”, Aurélia procura se vingar de Fernando, que passava por um aperto financeiro, “comprando-o” por um dote vultoso de cem contos de réis.\n[…]\nDividida entre o amor e o orgulho ferido, ela encarrega seu tutor e tio, Lemos, de negociar seu casamento com Fernando por dote de cem contos de réis. O acordo realizado inclui, como uma de suas cláusulas, o desconhecimento da identidade da noiva por parte do contratado até as vésperas do casamento.\n[…]\nLemos — Era baixo, não muito gordo, mas rolho e bojudo como um vaso chinês. Era vivo, extremamente alegre e confiante. Lemos era ainda um velho otimista, principalmente nos negócios que costumava fazer, e sabia perfeitamente conduzir uma transação, mesmo que esta não se acomode em bons resultados de início, como foi o caso da sua conversa com Seixas pelo dote de cem contos de réis oferecidos por Aurélia.\n[…]\nAdelaide — Mulher rica, poderosa e sedutora. Pelo dote que seu pai oferece tira Fernando Seixas de Aurélia, mas mesmo Torquato Ribeiro sendo pobre ela o amava e conseguiu casar-se com ele graças a Aurélia.\n[…]\nA extinta Rede Tupi produziu e exibiu a segunda telenovela, também de nome Senhora, em 1962."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/José_de_Alencar",
        "situacao": "ok",
        "texto": "José Martiniano de Alencar (Fortaleza, 1.º de maio de 1829 — Rio de Janeiro, 12 de dezembro de 1877) foi um jornalista, advogado, político, ensaísta e escritor brasileiro. É considerado o principal e o mais importante escritor do romantismo no Brasil, sendo identificado com a primeira geração do movimento e popularmente alcunhado como \"pai da literatura brasileira\".\n[…]\nNeste colégio José de Alencar completou a educação primária. E a este colégio, com todas as suas experiências, dedica o segundo capítulo do opúsculo Como e porque sou Romancista, rendendo gratas palavras ao antigo professor e à instituição.\n[…]\nA crítica por ele feita ao poema denota o grau de seus estudos de teoria literária e suas concepções do que devia caracterizar a literatura brasileira. Ainda quando sua vida agitava-se entre o ofício de advogado e o ofício de jornalista, no final dos anos 50 do século XIX, José de Alencar publicou seus primeiros romances. Em 1857, através de folhetins no Diário do Rio, no qual era diretor, começou a publicação de O Guarani.\n[…]\nJosé de Alencar não restringiu essas discussões ao Parlamento. Extrapolou as reverberações de suas teses, e começou a publicar em 1865 a série de cartas Ao Imperador: Cartas de Erasmo.\n[…]\nNão, Senhores, o nobre Presidente do Conselho acaba de o dizer: ‘Raros serão os brasileiros’ – e eu acrescentarei: esses mesmos, cegos pelo interesse ou pelo erro –, raros serão os brasileiros que aceitem a instituição da escravidão como uma instituição legítima (Muitos apoiados).”Entretanto, não somente através de discursos José de Alencar construiu sua defesa à abolição gradual.\n[…]\nALENCAR, José Martiniano de, Perfis Parlamentares 01, Câmara dos Deputados, 1977.\n[…]\nALENCAR, José de, 1829-1877; Cinco minutos & A viuvinha / José de Alencar. - 29. ed. - São Paulo: Ática, 2010.; 136 p.\n[…]\nAcesse a literatura de José de Alencar no portal Domínio Público"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "A Moreninha",
      "descricao": "Romance romântico publicado em 1844, ambientado na ilha de Paquetá."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em A Moreninha, o estudante Augusto aposta com os amigos que nunca amará a mesma moça por mais de quantos dias?",
    "resposta": "Quinze dias",
    "distratores": [
      "Sete dias",
      "Trinta dias",
      "Três dias"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Moreninha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Moreninha",
        "situacao": "ok",
        "texto": "A Moreninha é um romance de autoria do escritor brasileiro Joaquim Manuel de Macedo (1820-1882), publicado em 1844. A obra marca o início da ficção do romantismo brasileiro e tem grande sucesso ainda nos dias de hoje. É considerado o primeiro romance tipicamente nacional, pois retrata hábitos da juventude burguesa carioca do século XIX, contemporânea à época de sua publicação.\n[…]\nFilipe, Leopoldo, Augusto e Fabrício, estudantes de medicina, passam o feriado na casa da avó de Filipe, na Ilha de Paquetá, no Rio de Janeiro.Um deles apostou que se ficasse apaixonado por uma mulher por mais de quinze dias, escreveria um romance contando a história desta paixão. A partir daí, Augusto conhece Carolina (a Moreninha) por quem se apaixona.\n[…]\nO enredo de A Moreninha inicia-se com a ida de um grupo de amigos estudantes – Augusto, Fabrício e Leopoldo – à convite de Filipe, à casa de sua avó – D. Ana – residente numa ilha próxima ao Rio de Janeiro, onde passarão o dia de Sant’Ana e o fim de semana. Filipe aposta que os amigos irão se interessar por suas primas – Joaninha, Quinquina e suas amigas, Gabriela e Clementina - ou por Carolina, sua irmã.\n[…]\nDe volta à cidade, não consegue esquecê-la. Passam a se encontrar todos os domingos. Ele chega até a confessar seu amor, mas ela se contém. Como vinha faltando às aulas da faculdade, o pai proibiu-lhe de ir à ilha. No entanto, ele cai doente por vários dias. O pai resolve então atender a vontade de Augusto e ambos combinam de irem juntos, no domingo próximo, à casa de D. Ana.\n[…]\nAssim, o final do romance é considerado perfeitamente de acordo com o ideal amoroso romântico e as normas sociais, em virtude de não ter havido adultério ou traição em relação à “primeira esposa”. Resta apenas a Augusto pagar a aposta: que, considerando-se paga, temos o romance “A Moreninha”.\n[…]\nA Moreninha, livro em domínio público."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Semana de Arte Moderna",
      "descricao": "Festival de arte modernista realizado no Theatro Municipal de São Paulo em fevereiro de 1922, marco do Modernismo brasileiro."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Apesar do nome, a Semana de Arte Moderna de 1922 teve seus espetáculos de palco, os chamados festivais, em quantos dias?",
    "resposta": "Três dias",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna",
        "situacao": "ok",
        "texto": "Semana de Arte Moderna, também chamada de Semana de 22, foi um evento cultural que ocorreu no Theatro Municipal de São Paulo de 13 a 17 de fevereiro de 1922. Contou com exposição de pinturas, esculturas e maquetes arquitetônicas, além de conferências e concertos nas noites dos dias 13, 15 e 17. Foi financiada principalmente por membros da elite paulista que haviam enriquecido com a produção cafeei\n[…]\nO Correio Paulistano e O Estado de São Paulo atribuiu a autoria da ideia da criação da Semana de Arte Moderna a Graça Aranha, porém é mais provável que a iniciativa tenha surgido de Emiliano Di Cavalcanti após ouvir Marinette Prado recordando-se do festival cultural que ocorrera em Deauville, a Semaine de Fêtes.\n[…]\nEm seguida, buscou-se René Thiollier, da direção do Jornal do Commercio, que se encarregou de entrar em contato com o administrador do Theatro Municipal para fazer a reserva nos dias de 11 a 17 de fevereiro. Dentre todos os nomes da elite cafeeira paulista que ajudaram a financiar o evento, Paulo Prado é o que se destaca, principalmente por ter influenciado outros investidores a contribuírem para a realização da Semana.\n[…]\nO festival ocorreu entre os dias 13 e 17 de fevereiro no saguão do Teatro Municipal de São Paulo com a exposição de cerca de 100 obras, que era aberta ao público. No período da noite, também ocorriam três sessões lítero-musicais noturnas. A programação musical foi apresentada pela pianista Guiomar Novaes (1894-1979) e por Ernani Braga (1888-1948), que interpretaram composições de Heitor Villa-Lobos (1887-1959) e do francês Debussy (1862-1918).\n[…]\nArte moderna\n[…]\nModernismo\n[…]\nModernismo no Brasil\n[…]\nAjzenberg, Elza (2012). «A Semana de Arte Moderna de 1922». Revista de Cultura e Extensão USP: 25–29. ISSN 2316-9060. doi:10.11606/issn.2316-9060.v7i0p25-29\n[…]\nBopp, Raul (2012). Movimentos modernistas no Brasil. 1922-1928. Rio de Janeiro: José Olympio"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Castro Alves",
      "descricao": "Poeta romântico baiano (1847–1871), autor de O Navio Negreiro."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O baiano Castro Alves, o Poeta dos Escravos, morreu de tuberculose em 1871. Quantos anos ele tinha?",
    "resposta": "Vinte e quatro anos",
    "distratores": [
      "Vinte anos",
      "Vinte e oito anos",
      "Trinta e um anos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Castro_Alves"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Castro_Alves",
        "situacao": "ok",
        "texto": "Antônio Frederico de Castro Alves (Vila de Nossa Senhora do Rosário do Porto da Cachoeira, 14 de março de 1847 – Salvador, 6 de julho de 1871) foi um poeta, dramaturgo e advogado brasileiro, considerado o principal representante da terceira geração do romantismo no Brasil. Ficou conhecido por seus poemas abolicionistas, que renderam-lhe a alcunha de \"poeta dos escravos\".\n[…]\nNasceu Antônio Frederico na Fazenda Cabaceiras, às dez horas da manhã, do domingo 14 de março de 1847. Era a família do poeta abastada e culta, formando um ambiente familiar de grande inclinação cultural. Seu avô materno era o Major Silva Castro, herói das lutas pela Independência da Bahia e figura importante na história do sertão baiano.\n[…]\nQuando a família se mudou para a capital do estado (1854), foram inicialmente residir num sobrado onde morou Júlia Fetal, vítima de crime passional, assassinada pelo noivo em 1848, aos vinte anos de idade. O menino Antônio Frederico ouvira, ali, histórias dos fantasmas que povoariam a residência. Ali nasceu Adelaide, que viria a ser a irmã predileta do poeta.\n[…]\n24 da rua Sodré, onde no dia 6 de julho de 1871, às 3 ½ horas da tarde, expirou Castro Alves, contando apenas 24 anos de idade\".\n[…]\nApós a consagração recebida na então capital imperial com somente vinte e um anos de idade, e as que se seguiram nos \"menos de oito anos, anos tontos, que os dentre a adolescência e a mocidade, 'Castro Alves deixara uma obra sem igual em nossas literaturas'\", segundo Afrânio Peixoto, que o comparou aos seus contemporâneos que mais tarde se destacariam como Rui Barbosa, Joaquim Nabuco, Rodrigues Alves ou Afonso Pena: tivessem estes morrido, como ele, aos vinte e quatro anos de idade, \"nem a memória dos nomes lhes teria ficado e durante esse tempo o outro granjeou a fama duradoura\".\n[…]\n«Castro Alves - o poeta e o poema». livro de Afrânio Peixoto (1922) na Open Library"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Vinicius de Moraes",
      "descricao": "Poeta, compositor e diplomata carioca, parceiro de Tom Jobim na bossa nova."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Vinicius de Moraes, autor do Soneto de Fidelidade, casou-se quantas vezes ao longo da vida?",
    "resposta": "Nove vezes",
    "distratores": [
      "Três vezes",
      "Cinco vezes",
      "Sete vezes"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vinicius_de_Moraes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vinicius_de_Moraes",
        "situacao": "ok",
        "texto": "Marcus Vinícius da Cruz de Mello Moraes (Rio de Janeiro, 19 de outubro de 1913 – Rio de Janeiro, 9 de julho de 1980), mais conhecido como Vinicius de Moraes, foi um poeta, dramaturgo, jornalista, diplomata, cantor e compositor brasileiro.\n[…]\nO Poetinha casou-se por nove vezes ao longo de sua vida e suas esposas foram, respectivamente: Beatriz Azevedo de Melo (mais conhecida como Tati de Moraes), Regina Pederneiras, Lila Bôscoli, Maria Lúcia Proença, Nelita de Abreu, Cristina Gurjão, Gessy Gesse, Marta Rodrigues Santamaria (a Martita) e Gilda de Queirós Mattoso.\n[…]\nNa década de 1940 suas obras literárias foram marcadas por versos em linguagem mais simples, sensual e excitante, por vezes, carregados de temas sociais. Vinicius de Moraes publicou os livros Cinco Elegias (1943), que marcou esta nova fase, e Poemas, Sonetos e Baladas (1946); obra ilustrada com 22 desenhos de Carlos Leão. Atuando como jornalista e crítico de cinema em diversos jornais, Vinicius lançou em 1947, com Alex Vianny, a revista Filme.\n[…]\nEm 1969, Vinicius de Moraes publicou o livro Obra Poética e se apresentou ao lado de Maria Creuza e Dorival Caymmi em Punta del Este. O poetinha também fez recital na Livraria Quadrante, em Lisboa, apresentando, entre outros, os poemas \"A Uma Mulher\", \"O Falso Mendigo\", \"Sob o Trópico de Câncer\" (no qual trabalhou durante nove anos) e \"Soneto da Intimidade\". O evento foi gravado ao vivo e lançado em LP pelo selo Festa.\n[…]\nAinda em 1993, Almir Chediak editou os três volumes do Songbook Vinicius de Moraes.\n[…]\nEm 2016, o mascote dos Jogos Olímpicos de Verão do Rio de Janeiro foi nomeado Vinícius em sua homenagem.\n[…]\n«TODA A POESIA DE VINICIUS DE MORAES - Brasiliana/USP»"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Clarice Lispector",
      "descricao": "Escritora brasileira nascida na Ucrânia (1920–1977), autora de A Hora da Estrela."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Clarice Lispector nasceu num dez de dezembro e morreu num nove de dezembro, em 1977. Que idade ela completaria no dia seguinte?",
    "resposta": "Cinquenta e sete anos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Clarice_Lispector",
      "https://en.wikipedia.org/wiki/Clarice_Lispector"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Clarice_Lispector",
        "situacao": "ok",
        "texto": "Clarice Lispector, nascida Chaya Pinkhasivna Lispector (Chechelnyk, 10 de dezembro de 1920 – Rio de Janeiro, 9 de dezembro de 1977), foi uma escritora e jornalista de origem ucraniana-judaica (asquenazita). Radicada no Brasil desde a primeira infância, naturalizou-se brasileira em 1943. Autora de romances, contos e ensaios, é considerada uma das escritoras brasileiras mais importantes do século XX\n[…]\nSuas principais obras marcam cada período de sua carreira. Perto do Coração Selvagem foi seu livro de estreia, publicado quando Clarice tinha 24 anos de idade; Laços de Família, A Paixão segundo G.H., A Hora da Estrela e Um Sopro de Vida são seus últimos livros publicados. Morreu em 1977, um dia antes de completar 57 anos, em decorrência de um câncer de ovário. Deixou dois filhos e uma vasta obra literária composta de romances, novelas, contos, crônicas, literatura infantil e entrevistas.\n[…]\nNo Brasil, Lispector enfrentou dificuldades financeiras e tentou encontrar uma editora para o romance que havia concluído em Washington, D.C. vários anos antes, bem como para seu livro de contos, Laços de família. A obra reunia os seis contos de Alguns contos e mais sete inéditos, alguns dos quais já haviam sido publicados na revista Senhor. Foi lançada em 1960.\n[…]\nSabe-se que Clarice Lispector dominava pelo menos sete idiomas: português, inglês, francês e espanhol, fluentemente; hebraico e iídiche, com alguma fluência; e alguma fluência em russo, vindo da infância. Como tradutora para o português, entretanto, utilizou somente o inglês, o francês e o espanhol.\n[…]\nElisa Lispector\n[…]\nCasa de Clarice Lispector\n[…]\n«JBlog Hoje na História: 9 de dezembro de 1977 – Morre Clarice Lispector. Chega A Hora da Estrela». www.jblog.com.br. Consultado em 9 de dezembro de 2010. Arquivado do original em 18 de dezembro de 2011\n[…]\n«A arte de Clarice Lispector»  (entrevista de Hélène Cixous a Betty Milan)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Clarice_Lispector",
        "situacao": "ok",
        "texto": "Clarice Lispector (Portuguese: [klaˈɾisi lisˈpɛktoʁ]; née  Chaya Pinkhasivna Lispector; December 10, 1920 – December 9, 1977) was a Ukrainian-born Brazilian novelist and short story writer. Her distinctive and innovative works, which explore diverse narrative forms and themes of intimacy and introspection, have earned her international acclaim. She is known for works such as Near to the Wild Heart\n[…]\nWhy This World: A Biography of Clarice Lispector\n[…]\nMoser, Benjamin (July 1, 2009). Why This World: A Biography of Clarice Lispector. Oxford University Press. p. 32. ISBN 978-0-19-974392-6.\n[…]\nBraga-Pinto, César, \"Clarice Lispector and the Latin American Bang,\" in Lucille Kerr and Alejandro Herrero-Olaizola (eds). New York: The Modern Language Association of America, 2015. pp. 147–161\n[…]\nEarl E. Fitz, Sexuality and Being in the Poststructuralist Universe of Clarice Lispector: The Différance of Desire, University of Texas Press (2001), ISBN 0-292-72529-9\n[…]\nGiffuni, C. \"Clarice Lispector: A Complete English Bibliography,\" Lyra, Vol. 1 No. 3 1988, pp. 26–31.\n[…]\nLevilson Reis, \"Clarice Lispector,\" in Cynthia M. Tompkins and David W. Foster (eds.), Notable Twentieth-Century Latin American Women (Westport, CT: Greenwood, 2001), pp. 165–69.\n[…]\nMusch, S. and B. Willem, \"Clarice Lispector on Jewishness after the Shoah. A Reading of Perdoando Deus,\" Partial Answers - A Journal of Literature and the History of Ideas, Vol. 16 No. 2 2018, pp. 225–238.[1]\n[…]\nHanna Sohns, Wildwuchs der Worte. Zum Schreiben von Clarice Lispector. Edition text + kritik, München 2025, ISBN 978-3689300487.\n[…]\nDavid Vernon, Never Never Yes Yes: The Novels, Stories & Crônicas of Clarice Lispector. Edinburgh: Endellion Press, 2026. ISBN 978-1739136154\n[…]\nClarice Lispector: An Influential and Original Brazilian Writer\n[…]\nInterview with TV Cultura, Sao Paulo, Feb 1977 Portuguese with English subtitles."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Os Sertões",
      "descricao": "Livro de Euclides da Cunha publicado em 1902 sobre a Guerra de Canudos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo Os Sertões, de Euclides da Cunha, quantas expedições militares foram enviadas contra Canudos até a destruição do arraial?",
    "resposta": "Quatro",
    "distratores": [
      "Duas",
      "Três",
      "Seis"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guerra_de_Canudos",
      "https://pt.wikipedia.org/wiki/Os_Sertões"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_de_Canudos",
        "situacao": "ok",
        "texto": "Guerra de Canudos ou Campanha de Canudos foi um conflito armado ocorrido no final do século XIX entre, por um lado, as tropas regulares do estado da Bahia primeiro, e da república do Brasil depois, e por outro lado, um grupo de cerca de 30 000 colonos estabelecidos em comunidade autônoma num povoado fundado por eles no nordeste da Bahia, perto da antiga fazenda de Canudos, e rebatizado de Belo Mon\n[…]\nEuclides da Cunha observa:\n[…]\nPara finalizar, Barbosa indica o ensinamento a tirar da guerra de Canudos. Esse ensinamento se decompõe em quatro pontos:\n[…]\nEuclides da Cunha, engenheiro militar de formação, republicano convicto, dirigiu-se a Canudos na qualidade de jornalista e redigiu para o jornal O Estado de S. Paulo uma série de artigos sobre o conflito em curso. Contudo, teve de, por motivo de doença, deixar Canudos quatro dias antes do fim da quarta e última expedição, e não assistiu, portanto, ao desfecho do dito conflito no início de outubro de janeiro.\n[…]\nNão obstante, teve a ocasião de reunir, além de suas notas pessoais tomadas no calor dos acontecimentos, todo o material necessário para elaborar sobre esses eventos, durante os três a quatro anos seguintes, uma obra que fará data na história das letras brasileiras, Os Sertões: campanha de Canudos, publicada em 1902.\n[…]\nEssa vasta obra (seiscentas páginas) se decompõe em três partes principais, a Terra, o Homem, e a Luta, nas quais o autor expõe, respectivamente: as características geológicas, botânicas, zoológicas, hidrográficas e climatológicas do sertão; a vida, os costumes, a cultura oral, os trabalhos e a espiritualidade religiosa dos sertanejos, em particular do vaqueiro, o guardião do sertão, que concretiza o casamento do homem com essa terra; e por fim, as peripécias, contadas com força detalhes e vislumbres militares, das quatro expedições enviadas pelas autoridades contra o povoado dirigido por Antônio Conselheiro."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Sertões",
        "situacao": "ok",
        "texto": "Os Sertões é um livro do escritor e jornalista brasileiro Euclides da Cunha, publicado em 1902. É considerado como o primeiro livro-reportagem brasileiro.\n[…]\nTrata da Guerra de Canudos (1896–1897), ocorrida em Canudos, município do interior da Bahia. Euclides da Cunha presenciou uma parte da guerra como correspondente do jornal O Estado de S. Paulo. Pertence, ao mesmo tempo, à prosa científica e à prosa artística. Pode ser entendido como uma obra de Sociologia, Geografia, História ou crítica humana, mas não é errado lê-lo como uma epopeia da vida sertaneja em sua luta diária contra a paisagem e a incompreensão da elite.\n[…]\nO determinismo julgava que o homem é produto do meio (geografia), da raça (hereditariedade) e do momento histórico (cultura). O autor faz uma análise da psicologia do sertanejo e de seus costumes; é uma descrição feita pelo sociólogo e antropólogo Euclides da Cunha, que mostra o habitante do lugar, sua relação com o meio, sua gênese etnológica, seu comportamento, crença e costume; mas depois se fixa na figura de Antônio Conselheiro, o líder de Canudos.\n[…]\nFala sobre o que foi a Guerra de Canudos e explica com riqueza de detalhes os fatos dessa guerra que dizimou a população de Canudos. Uma descrição feita por Euclides da Cunha, relatando as quatro expedições a Canudos, criando o retrato real só possível pela testemunha ocular da fome, da peste, da miséria, da violência e da insanidade da guerra.\n[…]\nTexto completo de Os sertões\n[…]\nArtigo Afinal, do que trata o livro Os Sertões?\n[…]\n«Juízos críticos: Os sertões : Campanha de Canudos». Biblioteca Brasiliana Guita e José Mindlin. Consultado em 8 de julho de 2023"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Narizinho",
      "descricao": "Personagem do Sítio do Picapau Amarelo, de Monteiro Lobato, neta de Dona Benta e dona da boneca Emília."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Narizinho, a neta de Dona Benta no Sítio do Picapau Amarelo, ganhou o apelido pelo nariz arrebitado. Qual é o nome verdadeiro dela?",
    "resposta": "Lúcia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sítio_do_Picapau_Amarelo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sítio_do_Picapau_Amarelo",
        "situacao": "ok",
        "texto": "Sítio do Picapau Amarelo é uma série de 23 volumes de literatura fantástica, escrita pelo autor brasileiro Monteiro Lobato (entre 1920 e 1947). A obra tem atravessado gerações e geralmente representa a literatura infantil do Brasil.\n[…]\nO conceito foi introduzido de um livro anterior de Lobato, A Menina do Narizinho Arrebitado (1920), a história sendo mais tarde republicada como o primeiro capítulo de Reinações de Narizinho (1931), que é o livro que serve de propulsor à série de  Sítio do Picapau Amarelo. Precedentemente, Lobato já havia publicado os volumes O Saci (1921), Fábulas (1922), As aventuras de Hans Staden (1927) e Peter Pan (1930).\n[…]\nO cenário principal é um sítio, batizado com o nome de Picapau Amarelo, de onde vem o título da série, onde mora Dona Benta, uma idosa de mais de sessenta anos que vive em companhia de sua neta Lúcia, ou Narizinho como todos dizem e a empregada, Tia Nastácia. Narizinho tem como amiga inseparável uma boneca de pano velho chamada Emília, feita por Tia Nastácia.\n[…]\nEste conto, deu origem ao livro A Menina do Narizinho Arrebitado, publicado no Natal de 1920. A Menina do Narizinho Arrebitado introduziu a personagem-título Lúcia \"Narizinho\" e sua boneca de pano Emília. O livro foi posteriormente reeditado, no ano de 1931, como o primeiro capítulo de Reinações de Narizinho, livro que serve de propulsor a Sítio do Picapau Amarelo.\n[…]\nNovas Reinações de Narizinho - 1932 (reunião dos seguintes livros anteriores em um só: \"O Marquês de Rabicó\", \"Fábulas\", \"A Caçada da Onça\", \"O Saci\", e inclusão da história inédita \"O Sítio do Picapau Amarelo\")\n[…]\nO Picapau Amarelo\n[…]\nSítio do Picapau Amarelo Vol. 2 (1979)\n[…]\nSítio do Picapau Amarelo (2001)\n[…]\nSítio do Picapau Amarelo (2005)\n[…]\nSítio do Picapau Amarelo (2006)"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Emília",
      "descricao": "Boneca de pano falante do Sítio do Picapau Amarelo, de Monteiro Lobato."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por falar sem parar e dizer tudo o que lhe vem à cabeça, a boneca Emília é chamada de torneirinha de quê?",
    "resposta": "De asneiras",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Emília_(Sítio_do_Picapau_Amarelo)",
      "https://pt.wikipedia.org/wiki/Sítio_do_Picapau_Amarelo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Emília_(Sítio_do_Picapau_Amarelo)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sítio_do_Picapau_Amarelo",
        "situacao": "ok",
        "texto": "Sítio do Picapau Amarelo é uma série de 23 volumes de literatura fantástica, escrita pelo autor brasileiro Monteiro Lobato (entre 1920 e 1947). A obra tem atravessado gerações e geralmente representa a literatura infantil do Brasil.\n[…]\nO cenário principal é um sítio, batizado com o nome de Picapau Amarelo, de onde vem o título da série, onde mora Dona Benta, uma idosa de mais de sessenta anos que vive em companhia de sua neta Lúcia, ou Narizinho como todos dizem e a empregada, Tia Nastácia. Narizinho tem como amiga inseparável uma boneca de pano velho chamada Emília, feita por Tia Nastácia.\n[…]\nNota-se, porém, a ausência dos livros \"A Casa de Emilia\" e \"O Conto Argentino\" da coleção, mesmo com evidências de pagamento a Lobato referente à tiragens de 10.000 exemplares cada. \"O Conto Argentino\", apesar de não integrar a série do Sitio, foi posteriormente compilado no livro \"Histórias diversas\". O mesmo não se pode dizer de \"A Casa de Emilia\".\n[…]\nEly chegou a redesenhar os personagens adaptando eles ao seu estilo de arte e eles foram propostos para uma série de produtos como jogos de CD-ROM, um jogo de plataforma produzido pela Tectoy pro Master System, boneca da Emília e revistas em quadrinhos promocionais como uma em parceria com a marca Batavo, porém o projeto pro longa-metragem não foi adiante e a parceria com Ely Barbosa com a família de Lobato foi rompida.\n[…]\nEm \"Histórias Diversas\" de 2002, Mickey Mouse foi substituído por \"Dom Ratão\". No episódio \"Reinações de Narizinho\" de 2001, o gato ladrão que se passava pelo Gato Félix, foi substituído por um gato chamado apenas de \"O Gato Contador de Histórias\". Na série animada o Gato também não diz o seu nome, mas usa botas e um chapéu, que lembram O Gato de Botas."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Urupês",
      "descricao": "Livro de contos de Monteiro Lobato publicado em 1918, voltado ao público adulto, que popularizou o caipira Jeca Tatu."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O título Urupês, livro de contos de Monteiro Lobato que apresenta o Jeca Tatu, é o nome popular de quê?",
    "resposta": "Um fungo, orelha-de-pau",
    "distratores": [
      "Um cupim de madeira",
      "Uma praga do café",
      "Um tipo de capim"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Urupês",
      "https://pt.wikipedia.org/wiki/Jeca_Tatu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Urupês",
        "situacao": "ok",
        "texto": "Urupês é um município brasileiro do estado de São Paulo. Tem população de 14.073 habitantes segundo o Censo IBGE/2025. O município é formado pela sede e pelo distrito de São João do Itaguaçu, fazendo parte da Região Metropolitana de São José do Rio Preto.\n[…]\nÉ possível que o nome tenha sido atribuído em homenagem ao livro homônimo de Monteiro Lobato\n[…]\nVicinal Rodovia Chafik Saab (Urupês - Catanduva)\n[…]\nVicinal Urupês - Novo Horizonte\n[…]\nVicinal Urupês - Marapoama\n[…]\nEm 2022, segundo dados do Censo do Instituto Brasileiro de Geografia e Estatística, a população do município era composta por 10.060 brancos (73,2%), 3.256 pardos (23,69%), 389 pretos (2,83%), 20 amarelos (0,15%) e 19 indígenas (0,14%).\n[…]\nA economia de Urupês é baseada no Jeans, Limão e na agricultura em geral. A cidade possui mais de 60 fábricas de jeans, produzindo cerca de um milhão de peças por mês, e é também a segunda maior produtora de limão do Brasil. Por conta disso, o mascote da cidade é chamado de Azejeans, uma referência ao limão e ao jeans.\n[…]\nEm março de 2018, o prefeito da cidade, através de um decreto, instituiu o \"Calendário Turístico do Município de Urupês\", que estalebeu datas para as festividades da cidade:\n[…]\n2.ª quinzena de setembro: Festa do Peão de Urupês\n[…]\nMês de novembro: Mostra Gastronômica de Urupês e Encontro de Automotivos, e em alguns casos, também os Jogos de Primavera\n[…]\nDe acordo com o Censo 2022 (IBGE), 92,99% da população do município é cristã, sendo 70,27% católicos e 22,72% evangélicos. Outras religiões representam 3,43% da população total.\n[…]\nLista de municípios de São Paulo por população (2022)\n[…]\n«Prefeitura Municipal de Urupês - Portal Oficial»\n[…]\n«Urupês no WikiMapia»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jeca_Tatu",
        "situacao": "ok",
        "texto": "Jeca Tatu é uma personagem criada por Monteiro Lobato em sua obra Urupês, que contém 14 histórias baseadas no trabalhador rural paulista. Simboliza a situação do caipira, abandonado pelos poderes públicos brasileiros, às doenças, particularmente ancilostomíase, ao atraso econômico, educacional e à indigência política.\n[…]\n\"O Jeca Tatu não é assim, ele está assim\". A frase de Monteiro Lobato, sobre um dos seus mais populares personagens, refere sua obra para além das histórias infantis e incomoda a elite intelectual da época, acostumada a uma visão romântica do homem do campo. Jeca Tatu, um caipira de barba rala e calcanhares rachados – porque não gostava de usar sapatos, era pobre, ignorante e avesso aos hábitos de higiene urbanos. Morava na região do Vale do Paraíba Paulista, distinta por seu atraso.\n[…]\nO personagem Jeca Tatu e a análise dele feita por Monteiro Lobato no conto Urupês e no artigo \"Velha Praga\" de Monteiro Lobato é assim explicado pelo folclorista Cornélio Pires, quando analisa o caipira caboclo:\n[…]\nEm 1912, os cientistas Belisário Pena e Artur Neiva investigam a fauna e a flora de regiões brasileiras e investigam, além da flora e da fauna, a condição sanitária da população rural do Brasil. As informações, publicadas em Relatório Médico-Científico (1916) pelo Instituto Oswaldo Cruz, promove campanhas em favor do saneamento, estimula a criação da Liga Pró-Saneamento do Brasil\" (1918). Monteiro Lobato aderiu à campanha com o seu personagem Jeca Tatu.\n[…]\n\"O 'Jeca Tatu' de Monteiro Lobato: Identidade do Brasileiro e Visão do Brasil\", por Roberto B. da Silva (In: DezenoveVinte - Arte brasileira do século XIX e início do XX)"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Diadorim",
      "descricao": "Personagem de Grande Sertão: Veredas, de Guimarães Rosa, o jagunço Reinaldo, companheiro e grande amor de Riobaldo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No romance de Guimarães Rosa, o jagunço Reinaldo revela a Riobaldo um nome secreto, pelo qual passa a ser chamado por ele. Qual?",
    "resposta": "Diadorim",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Grande_Sertão:_Veredas",
      "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Sertão:_Veredas",
        "situacao": "ok",
        "texto": "Grande Sertão: Veredas é um romance experimental modernista escrito pelo autor brasileiro João Guimarães Rosa e publicado pela Livraria José Olympio Editora, em 1956. Tanto a arte da capa como as ilustrações da primeira edição de Grande Sertão: Veredas são de autoria de Poty Lazzarotto.\n[…]\nNessas idas e vindas, reencontra uma personagem que conheceu na infância num episódio que é marco narrativo da obra: conhecido pelos jagunços como Reinaldo, apresenta-se a Riobaldo como Diadorim. O narrador reconhece que existe entre ele e Diadorim uma relação diferente da que se podia haver entre os jagunços. É ele que introduz Riobaldo ao bando de Joca Ramiro.\n[…]\nO momento cronologicamente posterior — e que, dentro da obra, marca o início da narrativa propriamente dita — é a segunda guerra jagunça: a busca da vingança pela morte de Joca Ramiro. O grupo de Riobaldo, capitaneado por Medeiro Vaz, fracassa ao tentar atravessar o Liso do Sussuarão e sucumbe antes de atingir o objetivo. Nesse ínterim, algumas revelações acontecem, como o fato de Diadorim ser filho de Joca Ramiro e o boato de Hermógenes ser pactário com o Diabo, e Medeiro Vaz morre.\n[…]\nGrande Sertão, filme de 1965 dirigido pelos irmãos Geraldo e Renato Santos Pereira, com Maurício do Valle (Riobaldo), Sônia Clara (Diadorim) e Jofre Soares (Zé Bebelo).\n[…]\nEm 2026, o romance ganhou uma adaptação acadêmica realizada pela Escola de Teatro e Dança da Universidade Federal do Pará, dirigida por Karine Jansen e Larissa Latif. A montagem contou com dois espaços de encenação, dividindo a narrativa entre o bando de Diadorim e o bando de Hermógenes. O elenco trouxe personagens divididos, com Gabriel Anjos e Lucas Bereco como Riobaldo, Ally e Luis Carlos como Diadorim, e Priscilla Rosa e Inngryday Cristiny no papel de Hermógenes."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands",
        "situacao": "ok",
        "texto": "The Devil to Pay in the Backlands (Portuguese: Grande Sertão: Veredas, \"Great Backlands: Paths\"; also translated as The Great Backlands and Their Paths) is a novel published in 1956 by the Brazilian writer João Guimarães Rosa.\n[…]\nRiobaldo is born into a middle-class family and, unlike most of his contemporaries, receives an education. This enables him to begin his career as a tutor to a prominent local rancher, Zé Bebelo, and he watches as Zé Bebelo raises an army of his own jagunços to stamp out several of the local bandit gangs. Instead, for reasons that are never fully clear—apparently a desire for adventure—he disappears from the ranch and defects to the side of the bandits under the leadership of Joca Ramiro.\n[…]\nDue to his excellent aim, Riobaldo becomes a valued member of the band and begins to rise in stature. In the course of the events Riobaldo gets acquainted with Diadorim, revealed later to be someone from his past who used the name, Reinaldo. Diadorim is a young, pleasant and ambivalent fellow jagunço. The two start a profound friendship, with Diadorim exerting an unusual attraction in Riobaldo. Later, Diadorim tells Riobaldo that he is the son of deceased Jagunço chief Joca Ramiro.\n[…]\nHe then moves against Hermogenes but is surprised; with difficulty and heavy casualties, his army defeats Hermogenes. The climax of the book is a knife fight between the two opposing armies. In the fight, Diadorim kills Hermogenes, but is in turn killed. Only after Diadorim's death is it revealed that Diadorim was in fact a woman. Riobaldo resigns command of the jagunços and settles down to a more conventional life."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Clarice Lispector",
      "descricao": "Escritora brasileira nascida na Ucrânia (1920–1977), autora de A Hora da Estrela."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Ao chegar ao Brasil, a família de Clarice Lispector adotou nomes brasileiros. Que nome judaico a escritora recebeu ao nascer?",
    "resposta": "Chaya",
    "distratores": [
      "Golda",
      "Raquel",
      "Sara"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Clarice_Lispector",
      "https://en.wikipedia.org/wiki/Clarice_Lispector"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Clarice_Lispector",
        "situacao": "ok",
        "texto": "Clarice Lispector, nascida Chaya Pinkhasivna Lispector (Chechelnyk, 10 de dezembro de 1920 – Rio de Janeiro, 9 de dezembro de 1977), foi uma escritora e jornalista de origem ucraniana-judaica (asquenazita). Radicada no Brasil desde a primeira infância, naturalizou-se brasileira em 1943. Autora de romances, contos e ensaios, é considerada uma das escritoras brasileiras mais importantes do século XX\n[…]\nRegistrada como Chaya Pinkhasivna Lispector (em ucraniano: Хая Пінкасiвна Ліспектор; romaniz.: Chaya Pinkhasivna Lispector) Clarice Lispector nasceu em 10 de dezembro de 1920 na aldeia de Chechelnyk, região da Podólia, então parte da República Popular da Ucrânia e hoje parte da moderna Ucrânia.\n[…]\nDo casamento nasceriam três filhas: Leah, em 1911; Tania, em 1915; e Chaya (ou Haia), em 1920.\n[…]\nNo Brasil, os nomes russos foram substituídos por nomes onomásticos da língua portuguesa, com exceção de Tania — Pinkhas passou a ser Pedro; Mania transformou-se em Marieta; Leah virou Elisa; Chaya virou Clarice.\n[…]\nO último romance de Lispector, A Hora da Estrela (1977), também foi escrito de forma fragmentária recompondo a história, com a ajuda de Olga Borelli, a partir de notas rabiscadas em pedaços soltos de papel. A Hora da Estrela conta a história de Macabéa, uma das personagens icônicas da literatura brasileira — uma datilógrafa faminta e pobre, vinda de Alagoas, o estado onde a família de Lispector chegou pela primeira vez, e que se perde na metrópole do Rio de Janeiro.\n[…]\nNo total, a obra de Clarice Lispector recebeu mais de 200 traduções para mais de 10 idiomas, sendo mais de 179 traduções integrais de livros e 25 de contos publicados em periódicos. Seus livros mais traduzidos são principalmente romances: A Hora da Estrela, com 22 traduções; A Paixão segundo G. H., também com 22; Perto do Coração Selvagem, com 18; Laços de Família, com 16; e Uma aprendizagem ou o livro dos prazeres, com 15."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Clarice_Lispector",
        "situacao": "ok",
        "texto": "Clarice Lispector (Portuguese: [klaˈɾisi lisˈpɛktoʁ]; née  Chaya Pinkhasivna Lispector; December 10, 1920 – December 9, 1977) was a Ukrainian-born Brazilian novelist and short story writer. Her distinctive and innovative works, which explore diverse narrative forms and themes of intimacy and introspection, have earned her international acclaim. She is known for works such as Near to the Wild Heart\n[…]\nClarice Lispector was born Chaya Lispector in Chechelnyk, Podolia, a rural shtetl in the Ukrainian SSR. She was the youngest of three daughters of Pinkhas Lispector and Mania Krimgold Lispector. Her family suffered significantly in the pogroms that followed the collapse of the Russian Empire, circumstances later dramatized in her older sister Elisa Lispector's autobiographical novel No exílio (In Exile, 1948).\n[…]\nThe Lispectors changed their names upon arrival. Pinkhas became Pedro; Mania became Marieta; Leah became Elisa, and Chaya became Clarice. Only the middle daughter, Tania (April 19, 1915 – November 15, 2007), kept her name. They first settled in the northeastern city of Maceió, Alagoas.\n[…]\nWhy This World: A Biography of Clarice Lispector\n[…]\nLevilson Reis, \"Clarice Lispector,\" in Cynthia M. Tompkins and David W. Foster (eds.), Notable Twentieth-Century Latin American Women (Westport, CT: Greenwood, 2001), pp. 165–69.\n[…]\nMusch, S. and B. Willem, \"Clarice Lispector on Jewishness after the Shoah. A Reading of Perdoando Deus,\" Partial Answers - A Journal of Literature and the History of Ideas, Vol. 16 No. 2 2018, pp. 225–238.[1]\n[…]\nHanna Sohns, Wildwuchs der Worte. Zum Schreiben von Clarice Lispector. Edition text + kritik, München 2025, ISBN 978-3689300487.\n[…]\nDavid Vernon, Never Never Yes Yes: The Novels, Stories & Crônicas of Clarice Lispector. Edinburgh: Endellion Press, 2026. ISBN 978-1739136154\n[…]\nClarice Lispector: An Influential and Original Brazilian Writer"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "I-Juca-Pirama",
      "descricao": "Poema indianista de Gonçalves Dias, publicado em 1851, sobre um guerreiro tupi prisioneiro dos timbiras."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O título do poema indianista I-Juca-Pirama, de Gonçalves Dias, vem do tupi e significa o quê?",
    "resposta": "Aquele que deve morrer",
    "distratores": [
      "Senhor da lança",
      "Guerreiro sem medo",
      "Filho da floresta"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/I-Juca-Pirama"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/I-Juca-Pirama",
        "situacao": "ok",
        "texto": "I-Juca-Pirama é um poema Indianista brasileiro escrito pelo poeta Gonçalves Dias. Publicado em 1851 nos Últimos Cantos, está escrito em versos pentassilábicos, decassilábicos e endecassilábicos, e dividido em dez cantos. É um dos mais famosos poemas Indianistas do Romantismo Brasileiro. Considerado por muitos a obra-prima do poeta maranhense, o poema possui 484 versos.\n[…]\nI-Juca-Pirama é um termo do tupi. Gonçalves Dias grafou Y-Juca-Pyrama.\n[…]\nBarbora e Navarro traduzem i-îuká-Pyr-ama, apenas por \"O que será morto\". Em termos gerais, pode também significar aquele que deve ser morto.\n[…]\nO poema relata a história de um guerreiro tupi sobrevivente e fugitivo da destruição na costa que cai aprisionado por uma tribo antropófaga dos Timbiras e que deve ser sacrificado conforme o rito. Antes dos sacrifícios o chefe Timbira propõe que aquele que vai ser morto deve cantar as suas façanhas para que os bravos Timbiras tenham maior gosto em sacrificá-lo; e assim inicia o seu canto:\n[…]\nEntretanto, ao chegarem na tribo Timbira o velho tupi descobre o engodo, que o filho em verdade havia chorado em presença da morte e então o pai amaldiçoa o filho:\n[…]\nO pai pragueja uma sequencia de desgraças para o filho, que manchara a honra e o nome na raça tupi. O filho, não podendo suportar o ódio do pai, se enche de valentia e num súbito ato, declara ataque a toda a tribo Timbira. O cego reconhece o brado do filho, e ouvindo os barulhos da que se formou entendeu que o filho lutava com bravura. A confusão acabou quando o chefe Timbira gritou:\n[…]\nOuvindo isso, o velho tupi caiu em choro copioso. Choro de alegria.\n[…]\nEm 1869, José Bernardino dos Santos publicou a peça Quadros da vida selvagem – Y-Juca Pirama, poesia de A. Gonçalves Dias."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Iracema",
      "descricao": "Romance indianista de José de Alencar publicado em 1865."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Iracema, de José de Alencar, o filho da índia com o português Martim recebe um nome que significa filho da dor. Qual?",
    "resposta": "Moacir",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Iracema"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Iracema",
        "situacao": "ok",
        "texto": "Iracema (originalmente, Iracema: Lenda do Ceará) é um romance brasileiro publicado em 1865 e escrito por José de Alencar que faz parte da trilogia indianista do autor. Os outros dois romances pertencentes à trilogia são O Guarani e Ubirajara.\n[…]\nA \"virgem dos lábios de mel\" tornou-se símbolo do Ceará, e seu filho, Moacir, nascido de seus amores com o colonizador português Martim, representa o primeiro cearense, fruto da união das duas raças. A história é uma representação do que aconteceu com a América na época de colonização europeia.\n[…]\nCaubi: indígena tabajara, irmão de Iracema. O nome provém do termo tupi ka'aoby, que significa \"mato verde\" (de ka'a, \"mato\" + oby, \"verde\").\n[…]\nMoacir: filho de Iracema e Martim, o primeiro brasileiro miscigenado. O nome provém do termo tupi moasy, que significa \"arrependimento\", \"inveja\". José de Alencar afirma que o nome significa \"filho do sofrimento\", o que, segundo o tupinólogo Eduardo Navarro, não procede.\n[…]\nHá uma falsa etimologia popular que atribui o nome \"Iracema\" como sendo um anagrama da palavra \"América\", mas o próprio autor, José de Alencar, desmentiu o boato e explicou a real inspiração por trás do nome. Em uma nota de rodapé na primeira edição do romance, o autor afirma que o nome tem origem na língua tupi e significa \"lábios de mel\", pois \"Iracema\" seria a junção das palavras \"ira\" (mel) e \"tembé\" (lábios).\n[…]\nEsta última palavra poderia se alternar em \"ceme\", e Alencar justifica essa mudança por meio da palavra \"ceme-iba\". Esta afirmação, contudo, é atualmente questionada por muitos linguistas brasileiros. De acordo com o tupinólogo Eduardo Navarro, \"iracema\" é, na verdade, um termo nheengatu que significa \"enxame\", pois \"cema\" significa \"saída\"."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "A Moreninha",
      "descricao": "Romance romântico publicado em 1844, ambientado na ilha de Paquetá."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A jovem apelidada de Moreninha, no romance de Joaquim Manuel de Macedo, é irmã do amigo de Augusto. Qual é o nome dela?",
    "resposta": "Carolina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Moreninha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Moreninha",
        "situacao": "ok",
        "texto": "A Moreninha é um romance de autoria do escritor brasileiro Joaquim Manuel de Macedo (1820-1882), publicado em 1844. A obra marca o início da ficção do romantismo brasileiro e tem grande sucesso ainda nos dias de hoje. É considerado o primeiro romance tipicamente nacional, pois retrata hábitos da juventude burguesa carioca do século XIX, contemporânea à época de sua publicação.\n[…]\nFilipe, Leopoldo, Augusto e Fabrício, estudantes de medicina, passam o feriado na casa da avó de Filipe, na Ilha de Paquetá, no Rio de Janeiro.Um deles apostou que se ficasse apaixonado por uma mulher por mais de quinze dias, escreveria um romance contando a história desta paixão. A partir daí, Augusto conhece Carolina (a Moreninha) por quem se apaixona.\n[…]\nO enredo de A Moreninha inicia-se com a ida de um grupo de amigos estudantes – Augusto, Fabrício e Leopoldo – à convite de Filipe, à casa de sua avó – D. Ana – residente numa ilha próxima ao Rio de Janeiro, onde passarão o dia de Sant’Ana e o fim de semana. Filipe aposta que os amigos irão se interessar por suas primas – Joaninha, Quinquina e suas amigas, Gabriela e Clementina - ou por Carolina, sua irmã.\n[…]\nEle confidencia-lhe que, há sete anos, quando adolescente conhecera uma jovem na praia: os dois haviam ajudado um pobre velho que, agradecido, profetizou o casamento dos dois no futuro. Num gesto simbólico, o idoso casara-os, fazendo com que trocassem presentes: ele deu-lha um camafeu e ela, uma esmeralda. Trocara juras de amor eterno e de um casamento verdadeiro no futuro. Carolina, porém, a tudo escutava escondida.\n[…]\nNeste contexto aparece Carolina, que repete o mesmo gesto, passando a contar as verdades íntimas de Augusto, que ela também havia escutado no passeio à noite, na véspera do dia de Sant’Ana. Mas vai embora antes mesmo de Augusto tivesse tempo de declarar que era ela a quem amava."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Quarto de Despejo",
      "descricao": "Diário de Carolina Maria de Jesus publicado em 1960, sobre a vida numa favela de São Paulo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Carolina Maria de Jesus via São Paulo como uma casa, em que o centro era a sala de visitas. E o que era o quarto de despejo?",
    "resposta": "A favela",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quarto_de_Despejo",
      "https://pt.wikipedia.org/wiki/Carolina_Maria_de_Jesus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quarto_de_Despejo",
        "situacao": "ok",
        "texto": "Quarto de Despejo: Diário de uma Favelada, mais conhecido como Quarto de Despejo, é um livro autobiográfico da escritora Carolina Maria de Jesus, publicado pela primeira vez em agosto de 1960, pela livraria e editora Francisco Alves.\n[…]\nA favela era designada por De Jesus como o \"quarto de despejo\" da cidade, um lugar onde se escondia a população pobre, miserável e sem condição de uma vida digna.\n[…]\nA primeira matéria jornalística de Dantas com excertos do livro, foi uma reportagem de página inteira do jornal Folha da Noite, em 9 de maio de 1958, intitulada \"O drama da favela escrito por uma favelada: Carolina Maria de Jesus faz um retrato sem retoque do mundo sórdido em que vive\", na qual se destaca a singularidade de Carolina enquanto escritora moradora da favela.\n[…]\nPosteriormente, o jornalista publicou uma matéria na revista O Cruzeiro, da qual era editor-chefe, com o título \"Retrato da favela no diário de Carolina: a fome fabrica uma escritora\". Os dois textos são anteriores à publicação do livro e contribuíram para tornar sua autora, uma figura conhecida do grande público.\n[…]\nO livro reproduz os diários da autora, onde narra o seu dia a dia numa comunidade pobre da cidade de São Paulo, a antiga Favela do Canindé.\n[…]\nNo diário, que descreve suas vivências no período de 1955 a 1960, e as angústias dos habitantes da favela, sobretudo a rotina da fome, repetida diariamente. De Jesus se sustentava recolhendo papel nas ruas. Quando não conseguia papel, ela e seus filhos não comiam.\n[…]\nEm 1961, De Jesus gravou o álbum \"Quarto de Despejo: Carolina Maria de Jesus Cantando Suas Composições\";\n[…]\nQuarto de Despejo, também foi um samba, composto por B. Lobo.\n[…]\nEu te Arrespondo Carolina, livro de autoria de Herculano Neves."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carolina_Maria_de_Jesus",
        "situacao": "ok",
        "texto": "Carolina Maria de Jesus (Sacramento, 14 de março de 1914 – São Paulo, 13 de fevereiro de 1977) foi uma escritora, cantora, compositora e poetisa brasileira. Uma das primeiras escritoras negras do Brasil, De Jesus é considerada uma das mais importantes escritoras do país, de tal modo que sua obra e vida permanecem objetos de diversos estudos, tanto no Brasil quanto no exterior.\n[…]\nAo mesmo tempo em que trabalhava como catadora, registrava o cotidiano da comunidade onde morava nos cadernos que encontrava no material que recolhia, que somavam mais de vinte. Um desses cadernos, um diário que havia começado em 1955, deu origem a seu livro mais famoso, Quarto de Despejo: Diário de uma Favelada, publicado em 1960.\n[…]\nDepois da publicação de Quarto de Despejo, De Jesus mudou-se para Santana, bairro de classe média na zona norte de São Paulo, após lidar com a raiva e inveja de seus antigos vizinhos, que a acusaram de ter colocado suas vidas no livro sem autorização. A autora relatou que muitos dos moradores da favela chegaram a jogar, nela e em seus três filhos, os conteúdos de seus penicos.\n[…]\nO sucesso da primeira publicação, no entanto, acabou por não se repetir nos títulos posteriores. Depois de Quarto de Despejo, a Editora Francisco Alves encomendou mais uma obra, a partir dos diários escritos por De Jesus quando já morava no bairro de Santana. Surgiu Casa de Alvenaria: Diário de uma Ex-Favelada (1962) que, segundo Audálio Dantas responsável pela edição do material publicado, vendeu apenas 10 mil exemplares.\n[…]\nQuarto de Despejo: Diário de uma Favelada. Audálio Dantas (Org.). Rio de Janeiro: Livraria Francisco Alves, 1960. (Memórias);\n[…]\nCasa de Alvenaria: Diário de uma Ex-Favelada. São Paulo: Livraria Francisco Alves: Editora Paulo de Azevedo Ltda., 1962. (Memórias);\n[…]\n\"Quarto de Despejo: Carolina Maria de Jesus Cantando Suas Composições\", 1961, São Paulo, RCA Victor."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Padre Antônio Vieira",
      "descricao": "Jesuíta, orador e escritor luso-brasileiro do século dezessete (1608–1697), autor de sermões célebres pregados no Brasil."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Fernando Pessoa chamou o padre Antônio Vieira, autor de famosos sermões do século dezessete, de imperador de quê?",
    "resposta": "Da língua portuguesa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Padre_António_Vieira",
      "https://en.wikipedia.org/wiki/António_Vieira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Padre_António_Vieira",
        "situacao": "ok",
        "texto": "António Vieira (Lisboa, Sé, 6 de fevereiro de 1608 – Salvador, 18 de julho de 1697), mais conhecido como Padre António Vieira, foi um filósofo, escritor e orador português da Companhia de Jesus.\n[…]\nNove dias mais tarde, quarenta e um portugueses, despojados de seus pertences pessoais, foram desembarcados na Graciosa, onde o padre António Vieira, com o auxílio dos religiosos da Companhia de Jesus, procurou providenciar-lhes roupas, calçado e dinheiro durante os dois meses que permaneceram na ilha.\n[…]\nEste projeto, sob a direção de José Eduardo Franco e Pedro Calafate, foi desenvolvido pelo CLEPUL em parceria com a Santa Casa da Misericórdia, e publicado pelo Círculo de Leitores, com o último volume a ser lançado em 2014. Embora esta seja uma edição portuguesa, uma seleção de textos será publicada em 12 línguas como parte do projeto.\n[…]\n«Lista de Sermões»\n[…]\nVieira, Revista Semear. Revista da Cátedra Padre António Vieira de Estudos Portugueses, n. 2, Instituto Camões e a Pontifícia Universidade Católica do Rio de Janeiro, 1998.\n[…]\nPadre António Vieira, o imperador da Língua Portuguesa, Nome de Rua - Rua Padre António Vieira, por Nunes Forte, Videofono para a RTP, 1991\n[…]\nEpisódios dramáticos da inquisição portuguesa, v. 1, o caso de Antonio Vieira, página 205 em diante, autor Antonio Baião\n[…]\nAs propostas de Padre António Vieira a D. João IV, para melhorar a situação económica do Reino de Portugal História Moderna Economia e Sociedade, por Cláudio Fonseca, Faculdade de Letras da Universidade de Lisboa, 8 de Junho de 2015\n[…]\nA legitimidade da restauração portuguesa a partir do discurso do Padre Antonio Vieira (1641-1661, por Leandro Henrique Magalhães, Universidade Federal do Paraná, Curitiba, 2000"
      },
      {
        "url": "https://en.wikipedia.org/wiki/António_Vieira",
        "situacao": "ok",
        "texto": "António Vieira  (6 February 1608 – 18 July 1697) was a Portuguese Jesuit priest, diplomat, orator, preacher, philosopher, writer, and member of the Royal Council to the King of Portugal.\n[…]\nAntónio Vieira is considered one of the literary greats of the Portuguese-speaking world. The Padre António Vieira Chair in Portuguese Studies, at the Pontifícia Universidade Católica-Rio de Janeiro was created on 7 October 1994, to train teachers and researchers in the social sciences. Promoting academic exchanges between Brazil and Portugal, the Chair's main aim has been to deepen the cultural dialog that already exists between the two countries within the university context.\n[…]\nIn 1997 Portugal issued a commemorative coin to mark the 300th anniversary of the death of Father Vieira.\n[…]\nPortugal issued a stamp in 2008, celebrating the 400th anniversary of Vieira's birth (1608). Brasil has issued already two Vieira stamps, in 1941 and 1997.\n[…]\nA statue of Father António Vieira by the sculptor Marco Fidalgo, was unveiled on the Largo Trindade Coelho near the church of São Roque in 2017, on the initiative of the Holy House of Mercy of Lisbon, Portugal.\n[…]\nMore than 20 thousand folios of manuscripts and printed pages attributed to Vieira were analyzed and compared, in dozens of libraries and archives in Portugal, Brazil, Spain, France, Italy, England, Holland, Mexico and in the United States of America. About one quarter of The Complete Works are made of previously undiscovered and unreleased texts.\n[…]\nWorks by António Vieira at LibriVox (public domain audiobooks)\n[…]\nDramatic episodes of the Portuguese Inquisition, v. 1, the case of Father Antonio Vieira, page 205 onwards, author Antonio Baião"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Mário de Andrade",
      "descricao": "Escritor e musicólogo paulista (1893–1945), líder do Modernismo e autor de Macunaíma."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Mário de Andrade e Oswald de Andrade lideraram juntos o Modernismo paulista. Que parentesco havia entre os dois?",
    "resposta": "Nenhum",
    "distratores": [
      "Eram irmãos",
      "Eram primos",
      "Tio e sobrinho"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mário_de_Andrade",
      "https://pt.wikipedia.org/wiki/Oswald_de_Andrade"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mário_de_Andrade",
        "situacao": "ok",
        "texto": "Mário Raul de Morais Andrade (São Paulo, 9 de outubro de 1893 – São Paulo, 25 de fevereiro de 1945) foi um poeta, contista, cronista, romancista, musicólogo, historiador de arte, crítico e fotógrafo brasileiro. Um dos fundadores do modernismo no país, ele praticamente criou a poesia brasileira moderna com a publicação de sua Pauliceia Desvairada em 1922. Ele teve uma influência enorme na literatur\n[…]\nVários deles foram posteriormente conhecidos como Grupo dos Cinco: o próprio Andrade, os poetas Oswald de Andrade (sem parentesco) e Menotti del Picchia, e as artistas Tarsila do Amaral e Anita Malfatti, sendo que a última esteve na Europa antes da Primeira Guerra Mundial e apresentou São Paulo ao expressionismo. Jack E. Tomlins, tradutor do segundo livro de Andrade, descreve em sua introdução um evento particularmente crucial no desenvolvimento da filosofia modernista de Andrade.\n[…]\nEle escreveu dois romances durante esse período usando essas técnicas: o primeiro, Amor, Verbo Intransitivo, foi em grande parte um experimento formal; o segundo, escrito pouco depois e publicado em 1928, foi Macunaíma, um romance sobre um homem (\"O herói sem nenhum caráter\" é o subtítulo do romance) de uma tribo indígena que vem a São Paulo, aprende seus idiomas. - ambos, o romance diz, português e brasileiro - e retorna.\n[…]\nA carta já havia sido publicada anteriormente em livro de 1966 das correspondências entre ambos os escritores, mas o trecho acima havia sido completamente retirado sem a devida informação. Só foi possível o acesso total por pedido do jornalista Marcelo Bortoloti, através da revista Época, por meio da Lei de Acesso à Informação, visto que, segundo a diretora da Casa de Rui Barbosa, Lia Calabre, a família e os herdeiros de Mário de Andrade sempre se opuseram a divulgá-la.\n[…]\nPoemas de Mário de Andrade\n[…]\n«Remate de males: a música de poemas amorosos de Mário de Andrade» (PDF)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oswald_de_Andrade",
        "situacao": "ok",
        "texto": "José Oswald de Sousa de Andrade, apelidado de Oswald de Andrade, (São Paulo, 11 de janeiro de 1890 – São Paulo, 22 de outubro de 1954) foi um poeta, escritor, advogado, ensaísta e dramaturgo brasileiro. Figura-chave do modernismo no Brasil, escreveu o Manifesto da Poesia Pau-Brasil e o Manifesto Antropófago.\n[…]\nEm 1925 viajou a passeio com sua então noiva Tarsila, a filha dela, e seu filho, pela Grécia, Turquia, Palestina e Egito. Foram morar juntos em 1926. Com a Crise de 1929 no mundo, Oswald rompeu sua parceria profissional com Mário de Andrade, devido a sua grande perda financeira. Isso agravou seu casamento, já em crise há um ano, devido às diferenças marcantes de temperamento ente o casal, e os ciúmes intensos de Tarsila e as constantes traições de Oswald.\n[…]\nApós levar uma vida boêmia, mantendo relacionamentos casuais com mulheres anônimas e famosas, em 1943 iniciou um namoro com Maria Antonieta D'Alkmin, uma jovem paulistana, de família rica e tradicional, de origem alemã. Foram viver juntos em 1944 e tiveram dois filhos: Antonieta Marília D'Alkmin de Andrade, nascida em 1945, e Paulo Marcos D'Alkmin de Andrade, nascido em 1948. Este foi o último casamento de Oswald, que permaneceu casado até seu falecimento, em 1954.\n[…]\nNa sua busca por um caráter nacional (ou falta dele, que Mário de Andrade mostra em Macunaíma), Oswald, porém, foi muito além do pensamento romântico, diferentemente de outros modernistas. Nos anos vinte, Oswald voltou-se contra as formas cultas e convencionais da arte. Fossem elas o romance de ideias, o teatro de tese, o naturalismo, o realismo, o racionalismo e o parnasianismo (por exemplo Olavo Bilac).\n[…]\n«Artigo sobre contribuição da poesia de Oswald de Andrade à mitologia bandeirante»\n[…]\n«Artigo discute a trajetória do escritor Oswald de Andrade»"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Guimarães Rosa",
      "descricao": "Escritor, médico e diplomata mineiro (1908–1967), autor de Grande Sertão: Veredas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Guimarães Rosa nasceu em 1908, o mesmo ano em que morreu que grande escritor brasileiro?",
    "resposta": "Machado de Assis",
    "distratores": [
      "Euclides da Cunha",
      "Aluísio Azevedo",
      "Olavo Bilac"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/João_Guimarães_Rosa",
      "https://pt.wikipedia.org/wiki/Machado_de_Assis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/João_Guimarães_Rosa",
        "situacao": "ok",
        "texto": "João Guimarães Rosa (Cordisburgo, 27 de junho de 1908 – Rio de Janeiro, 19 de novembro de 1967) foi um médico, diplomata, escritor e poeta brasileiro, identificado com a terceira geração do modernismo no Brasil e reconhecido por muitos como o maior escritor brasileiro do século XX. Seu estilo é marcado por neologismos, coloquialidade e fluxo de consciência e sua ficção ambienta-se no sertão mineir\n[…]\nGuimarães Rosa nasceu na cidade de Cordisburgo, no estado de Minas Gerais, e ao longo da vida exerceu as profissões de médico e diplomata. Enquanto servia como cônsul-adjunto em Hamburgo, entre 1938 e 1942, ele e sua segunda esposa Aracy de Carvalho ajudaram muitos judeus que fugiam do nazismo a entrarem ilegalmente no Brasil.\n[…]\nDepois de servir em Hamburgo, Guimarães Rosa atuou, ainda, como diplomata, nas Embaixadas do Brasil em Bogotá e em Paris.\n[…]\nRealismo mágico, regionalismo, liberdade de invenções linguísticas e neologismos são algumas das características fundamentais da literatura de Guimarães Rosa, mas não as suficientes para explicar seu sucesso. Guimarães Rosa prova o quão importante é ter a linguagem a serviço da temática e vice-versa, uma potencializando a outra. Nesse sentido, o escritor mineiro inaugura uma metamorfose no regionalismo brasileiro que o traria de novo ao centro da ficção brasileira.[carece de fontes]?\n[…]\nDiadorim-Mediador, a alma que se perde na consumação do pacto com a linguagem e a poesia. Riobaldo (Rosa-IO-bardo), o poeta-guerreiro que, em estado de transe, dá à luz obras-primas da literatura universal. Biografia e ficção fundem-se e confundem-se nas páginas enigmáticas de João Guimarães Rosa, morto prematuramente aos 59 anos de idade, no ápice de sua carreira literária e diplomática.\n[…]\n1956: Grande Sertão: Veredas\n[…]\nJoão Guimarães Rosa / Centro da Memória da Medicina em Minas Gerais\n[…]\n24 Cartas de João Guimarães Rosa a Antonio Azeredo da Silveira"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Machado_de_Assis",
        "situacao": "ok",
        "texto": "Joaquim Maria Machado de Assis (Rio de Janeiro, 21 de junho de 1839 – Rio de Janeiro, 29 de setembro de 1908) foi um escritor brasileiro, amplamente reconhecido por críticos, estudiosos, escritores e leitores como o maior expoente da literatura brasileira. Sua produção literária abrangeu praticamente todos os gêneros, incluindo poesia, romance, crônica, dramaturgia, conto, folhetim, jornalismo e c\n[…]\nNa ocasião do centenário de Machado de Assis em 1939, a Revista do Brasil, pertencente então aos Diários Associados, dedicou um número ao grande autor morto havia 31 anos, mostrando, conforme registrou o jornalista e escritor Otto Lara Resende em ensaio de 1989, que Machado era \"já inquestionavelmente um nome glorioso e consagrado\".\n[…]\nOswald de Andrade, outro nome de destaque do Modernismo, cujo estilo literário se insere, assim como o de Mário, na tradição experimental, metalinguística e citadina mais ou menos dialogável com a obra mais experimental de Machado de Assis, tinha Dom Casmurro como um de seus livros preferidos e encarava o escritor como um mestre do romance brasileiro, mas notou, nas suas memórias de 1954, quanto à suposta tentativa de Machado de se livrar da herança étnica: \"Como bom preto, o grande Machado o que queria era se lavar das mazelas atribuídas à sua ascendência escrava.\n[…]\nMachado de Assis estampa o principal prêmio literário brasileiro, o Prêmio Machado de Assis, oferecido a escritores pelo conjunto da obra. Com Memórias Póstumas de Brás Cubas, é o introdutor do Realismo no Brasil, da narrativa fantástica e também da primeira obra da literatura brasileira que ultrapassa os limites nacionais, sendo um grande autor universal.\n[…]\nVeríssimo, José. História da Literatura Brasileira: de Bento Teixeira (1601) a Machado de Assis (1908). 1º milheiro. Rio de Janeiro: Livraria Francisco Alves & Cia., 1916.\n[…]\n«Machado de Assis (Academia Brasileira de Letras)»"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Aluísio Azevedo",
      "descricao": "Romancista maranhense (1857–1913), introdutor do Naturalismo no Brasil e autor de O Cortiço."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O dramaturgo maranhense Artur Azevedo, autor da peça A Capital Federal, tinha que parentesco com o romancista de O Cortiço?",
    "resposta": "Era seu irmão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Artur_Azevedo",
      "https://pt.wikipedia.org/wiki/Aluísio_Azevedo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Artur_Azevedo",
        "situacao": "ok",
        "texto": "Artur Nabantino Gonçalves de Azevedo (São Luís, 7 de julho de 1855 — Rio de Janeiro, 22 de outubro de 1908), também conhecido como Artur Azevedo, foi um escritor, dramaturgo, poeta, contista, prosador, comediógrafo, crítico, cronista e jornalista brasileiro. Ao lado de seu irmão, o escritor Aluísio Azevedo, foi um dos fundadores da Academia Brasileira de Letras.\n[…]\nSuas peças mais conhecidas são A Joia, A Capital Federal, A Almanjarra, O Mambembe, entre outras. Três teatros no Brasil foram batizados com o seu nome: o Teatro Arthur Azevedo de São Luís, Maranhão, sua cidade natal, o Teatro Arthur Azevedo da cidade de São Paulo, e o Teatro Arthur Azevedo da cidade de Rio de Janeiro.\n[…]\nDevido a discordâncias com a administração provincial, Azevedo concorreu a um concurso aberto para vagas de amanuense da Fazenda. Sendo classificado, ele se transferiu para a capital federal, à época o Rio de Janeiro. Lá, ficou empregado no Ministério da Agricultura e no Colégio Pinheiro, onde lecionava português. Foi nesse período em que iniciou sua carreira jornalística, fundando diversos periódicos literários, como A Gazetinha, Vida Moderna e O Álbum.\n[…]\nFoi por insistência de Artur Azevedo, principalmente através de seus artigos na imprensa, que, em 1895, foi aprovada a lei que previa a construção de um teatro municipal no Rio de Janeiro.\n[…]\nTinha o teatrólogo a convicção de que somente a construção desse teatro poria fim à má fase em que se encontravam as artes cênicas na segunda metade do século XIX. A criação da lei traria resultado somente em 1904, quando foi aberto concurso para a construção do Theatro Municipal do Rio de Janeiro. Arthur Azevedo, que sustentou a campanha vitoriosa para construção do Teatro, não assistiria à sua inauguração em 14 de julho de 1909, pois faleceu nove meses antes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aluísio_Azevedo",
        "situacao": "ok",
        "texto": "Aluísio Tancredo Gonçalves de Azevedo (São Luís, 14 de abril de 1857 – Buenos Aires, 21 de janeiro de 1913) foi um escritor, diplomata e jornalista brasileiro. Célebre por seus romances O Mulato, Casa de pensão e O Cortiço, é considerado o introdutor e principal representante do naturalismo na literatura brasileira.\n[…]\nFilho do vice-cônsul português David Gonçalves de Azevedo, que, ainda jovem, se enviuvara em boda anterior, e de Emília Amália Pinto de Magalhães, separada de um rico comerciante português, Antônio Joaquim Branco, Aluísio assiste, ainda garoto, ao desabono da sociedade maranhense a essa união dos pais contraída sem segundas núpcias, algo que se configurava grande escândalo à época.\n[…]\nFoi Aluísio, irmão mais novo do dramaturgo e jornalista Artur Azevedo, com o qual, em parceria, esboçaria peças teatrais.\n[…]\nCom o falecimento do pai em 1878, volta ao Maranhão para sustentar a família. Ali, instigado por dificuldades financeiras, abandona momentaneamente os desenhos e dá início à atividade literária, publicando Uma Lágrima de Mulher no ano seguinte (1879). Em 1881, em período de crescente efervescência abolicionista no Brasil, publica o romance O Mulato, obra que deixa a sociedade escandalizada pelo modo cru com que desnuda a questão racial e inaugura o Naturalismo na literatura brasileira.\n[…]\nDiante da reação hostil da província, obtendo sucesso com a obra na Corte, onde era considerada exemplo da escola naturalista, volta à capital imperial e aí, incessantemente, produz romances, contos, crônicas e peças de teatro.\n[…]\nÉ autor de vários romances de estética naturalista: \"O mulato\" (1881), \"Casa de pensão\" (1884), \"O cortiço\" (1890) e outros.\n[…]\nSegundo Valentin (2013), O cortiço é um dos primeiros romances brasileiros no qual a homossexualidade foi representada."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Chico Buarque",
      "descricao": "Francisco Buarque de Hollanda, cantor, compositor e escritor carioca."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O autor dos romances Estorvo e Budapeste é filho de que historiador, autor do clássico Raízes do Brasil?",
    "resposta": "Sérgio Buarque de Holanda",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chico_Buarque",
      "https://pt.wikipedia.org/wiki/Sérgio_Buarque_de_Holanda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chico_Buarque",
        "situacao": "ok",
        "texto": "Francisco Buarque de Hollanda, mais conhecido como Chico Buarque (Rio de Janeiro, DF, 19 de junho de 1944), é um cantor, compositor, violonista, dramaturgo, escritor e ator brasileiro. É considerado por muitos críticos o maior artista vivo da música brasileira. Sua discografia conta com aproximadamente oitenta obras, entre elas discos-solo, em parceria com outros músicos e compactos.\n[…]\nFrancisco Buarque de Hollanda nasceu em 19 de junho de 1944 na cidade do Rio de Janeiro, filho de Sérgio Buarque de Holanda (1902–1982), um importante historiador e jornalista brasileiro, e de Maria Amélia Cesário Alvim (1910–2010), pintora e pianista. Foi casado por 33 anos (de 1966 a 1999) com a atriz Marieta Severo, com quem teve três filhas, a atriz Sílvia Buarque, Helena Buarque e Luísa Buarque.. O cantor tem, também, cinco netos.\n[…]\nEm 1953, Sérgio Buarque de Holanda, pai do cantor, foi convidado para lecionar na Universidade de Roma. A família Buarque de Hollanda, então, muda-se para a Itália. Chico aprende dois idiomas estrangeiros, na escola fala inglês, e nas ruas, italiano. Nessa época, compõe as suas primeiras marchinhas de Carnaval.\n[…]\nO pai de Chico, Sérgio Buarque de Holanda, é primo em primeiro grau da mãe de Aurélio Buarque de Hollanda Ferreira, Maria Buarque Cavalcanti Accioly Lins, sendo ambos netos de Manuel Buarque de Gusmão Lima. A avó materna de Aurélio Buarque de Hollanda Ferreira, Luísa Buarque de Hollanda Cavalcanti, é irmã do avô paterno de Francisco Buarque de Hollanda, Cristóvão Buarque de Hollanda. Uma genealogia parcial,\n[…]\nAurélio Buarque de Holanda Ferreira\n[…]\nCristóvão Buarque de Hollanda casou com Heloísa de Araújo\n[…]\nSérgio Buarque de Holanda\n[…]\nFrancisco Buarque de Holanda\n[…]\nChico Buarque: Histórias de Canções\n[…]\nChico Buarque no Instagram\n[…]\nChico Buarque no IMDb\n[…]\nChico Buarque no Facebook\n[…]\nChico Buarque no Twitter\n[…]\nChico Buarque no TikTok\n[…]\nChico Buarque no Spotify"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sérgio_Buarque_de_Holanda",
        "situacao": "ok",
        "texto": "Sérgio Buarque de Holanda (São Paulo, 11 de julho de 1902 – São Paulo, 24 de abril de 1982) foi um historiador, sociólogo, escritor, intelectual, crítico literário, jornalista e político brasileiro. Foi um dos mais importantes pensadores sociais do Brasil, notório por sua teoria do homem cordial, apresentada em 1936 no livro Raízes do Brasil e considerada uma ideia-chave na sociologia e antropolog\n[…]\nDesta forma, a gestão de Sérgio Buarque de Holanda no Museu Paulista não foi uma mera continuidade da administração anterior, mas uma reorientação fundamental. Ele transformou a instituição de um espaço de celebração de uma história oficial para um dinâmico centro de pesquisa acadêmica, preparando o terreno para a futura integração do museu com a universidade.\n[…]\nRaízes de Sérgio Buarque de Holanda (org. Francisco de Assis Barbosa). Rio de Janeiro, 1988 (coletânea).\n[…]\nASSIS, Arthur. A teoria da história como hermenêutica da historiografia. Uma interpretação de 'Do Império à República', de Sérgio Buarque de Holanda. Revista Brasileira de História, v. 30, n. 59, pp. 91–120, 2010.\n[…]\nCANDIDO, Antônio (org.). Sérgio Buarque e o Brasil. São Paulo, 1998.\n[…]\nIGLÉSIAS, Francisco. Sérgio Buarque de Hollanda, historiador. In: Vários autores. Sérgio Buarque de Holanda: 3º Colóquio UERJ. Rio de Janeiro, 1992, p. 9-53.\n[…]\nDOS SANTOS, Nelson Pereira (dir.). Raízes do Brasil – Uma cinebiografia de Sérgio Buarque de Holanda. 2 Partes. 2001.\n[…]\nSítio comemorativo ao centenário de nascimento de Sérgio Buarque de Holanda\n[…]\nTextos de Sérgio Buarque de Holanda arquivados no banco de dados da Folha de S. Paulo.\n[…]\nA vida e a obra de Sérgio Buarque de Holanda por Ana L.O.D. Ferreira.\n[…]\nHistória Cultural de Gilberto Freyre e Sérgio Buarque de Hollanda e os novos rumos da historiografia brasileira, Cavalcante Junior, I.G. Silva, M. do R. de F.V. da Costa, R. da S.\n[…]\nSérgio Buarque de Holanda: Visão do Paraíso, Luiz Costa Lima, USP."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Vidas Secas",
      "descricao": "Romance de Graciliano Ramos publicado em 1938, sobre uma família de retirantes no sertão nordestino."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1963, Vidas Secas, de Graciliano Ramos, virou um filme marcante do Cinema Novo. Quem o dirigiu?",
    "resposta": "Nelson Pereira dos Santos",
    "distratores": [
      "Glauber Rocha",
      "Cacá Diegues",
      "Ruy Guerra"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vidas_Secas_(filme)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vidas_Secas_(filme)",
        "situacao": "ok",
        "texto": "Vidas Secas (Na grafia da época, Vidas Sêcas) é um filme brasileiro de 1963, do gênero drama, dirigido e escrito por Nelson Pereira dos Santos para a Herbert Richers. O roteiro é baseado no livro homônimo de Graciliano Ramos, sendo o filme estrelado por Átila Iório, Maria Ribeiro, Genivaldo Lima, Gilvan Lima e Joffre Soares. As filmagens foram realizadas em Minador do Negrão e Palmeira dos Índios,\n[…]\nA ideia inicial de Nelson Pereira dos Santos era escrever um roteiro original sobre a seca do sertão nordestino, porém, apesar de diversas tentativas, o cineasta não conseguiu desenvolver um roteiro que o satisfizesse. Durante suas pesquisas, ele consultou o livro Vidas Secas, de Graciliano Ramos e concluiu que, ao invés de criar um roteiro, o melhor seria adaptar a obra de Graciliano.\n[…]\nA cadela vira-lata, que interpreta Baleia, foi encontrada por Nelson embaixo de uma barraca de uma feira de Palmeira dos Índios.\n[…]\nNa segunda tentativa de filmagem de Vidas Secas, em 1962, Nelson optou por Palmeira dos Índios (cidade da qual Graciliano Ramos foi prefeito), em Alagoas, conseguindo, por fim, rodar o filme. A equipe era formada por poucas pessoas, entre elas o produtor Herbert Richers e os fotógrafos Luiz Carlos Barreto e José Rosa. Foi gravado em preto e branco e custou 18 milhões de cruzeiros.\n[…]\nFoi considerado o melhor filme daquele ano.\n[…]\nNo ano de 2002, foi lançado o curta-metragem Como se Morre no Cinema, dirigido por Luelane Corrêa, que narra as participações e as mortes ficcionais do papagaio e da cadela Baleia no filme Vidas Secas.\n[…]\nVidas Secas é o único filme brasileiro indicado pelo British Film Institute como uma das 360 obras fundamentais em uma cinemateca. Foi listado por Jeanne O Santos, do Cinema em Cena, como \"clássicos nacionais\". Também foi Incluído no livro 1001 Filmes para Ver antes de Morrer, de Steven Jay Schneider. No livro Cien años sin soledad."
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Gabriela, Cravo e Canela",
      "descricao": "Romance de Jorge Amado publicado em 1958, sobre a retirante Gabriela e o árabe Nacib na região do cacau."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que atriz viveu Gabriela, a retirante de Jorge Amado, tanto na novela da Globo de 1975 quanto no filme de 1983?",
    "resposta": "Sônia Braga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sônia_Braga",
      "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sônia_Braga",
        "situacao": "ok",
        "texto": "Sônia Maria Campos Braga (Maringá, 8 de junho de 1950)  é uma atriz, cantora, apresentadora e produtora brasileira, naturalizada estadunidense. Após construir uma carreira bem-sucedida no Brasil, mudou-se para o exterior, onde se destacou no mercado internacional, tendo sido indicada aos prêmios Golden Globes, BAFTA, e Emmy.\n[…]\nNo entanto, foi a partir de 1975 que Braga ganhou destaque na mídia e foi alçada ao posto de sex symbol ao interpretar a protagonista Gabriela na telenovela homônima, de grande sucesso — papel que viria a interpretar novamente na versão cinematográfica da obra de Jorge Amado em 1983.\n[…]\nNa década de 1970, Sônia Braga foi casada com o ator Arduíno Colassanti. Os dois se conheceram durante as filmagens do filme  Mestiça, a Escrava Indomável (1973). Na época, moravam em um veleiro chamado \"Gaivota\", ancorado em Paraty. Após a separação, ela namorou o cantor Caetano Veloso no final dos anos 1970. Veloso, posteriormente, escreveu \"Trem das Cores\" para ela.\n[…]\nA carreira de Sônia Braga ganhou novas proporções em 1975, quando protagonizou a telenovela Gabriela. No papel-título, Braga \"tomou o Brasil, tornando-se um nome conhecido\", como observaram Sue Branford e David Treece no jornal britânico The Guardian. A telenovela, baseada na obra de um dos mais conhecidos escritores brasileiros, Jorge Amado, atingiu uma das maiores audiências de sua época, com uma média de 25 milhões de pessoas.\n[…]\nSônia Braga alcançou reconhecimento internacional por seu papel em O Beijo da Mulher Aranha (1985), filme do argentino naturalizado brasileiro Héctor Babenco, baseado no romance de Manuel Puig. O filme se tornou um dos lançamentos mais aclamados do ano, e a atriz coestreou ao lado de William Hurt, que venceu o Oscar de Melhor Ator.\n[…]\nSônia Braga no IMDb\n[…]\n«Sônia Braga em Memória Globo»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela",
        "situacao": "ok",
        "texto": "Gabriela, Cravo e Canela é um dos mais célebres romances do escritor brasileiro Jorge Amado, publicado em 1958.\n[…]\nGabriela personifica as transformações de uma sociedade patriarcal, arcaica e autoritária, afetada pelos sopros de renovação cultural, política e econômica. O enredo da obra Gabriela Cravo e Canela está  dividido em duas partes, e essas estão divididas em duas outras partes. A primeira é intitulada como “Um Brasileiro das Arábias” e a sua em primeira divisão chama-se “O langor de Ofenísia”.\n[…]\nTamanho foi o sucesso que em dezembro do mesmo ano, foi lançada a 6ª edição, que passou a integrar a coleção Obras Ilustradas de Jorge Amado como tomo décimo quarto, volume XIX em seguidas e sucessivas edições chegou até a 50ª edição em 1975.\n[…]\nGabriela, Cravo e Canela - telenovela produzida pela extinta TV Tupi em 1960, com adaptação de Zora Seljan, e Janete Vollu no papel principal, além de Paulo Autran como Mundinho Falcão.\n[…]\nGabriela - telenovela da Rede Globo de Televisão, 1975, com adaptação de Walter George Durst e com Sônia Braga no papel principal. Fez grande sucesso no Brasil e em Portugal.\n[…]\nGabriela - telenovela da Rede Globo de Televisão, 2012, com adaptação de Walcyr Carrasco e com Juliana Paes no papel principal.\n[…]\nGabriela, cravo e canela, filme dirigido por Bruno Barreto, de 1983, com Sônia Braga no papel principal.\n[…]\nA música \"Tema de Amor de Gabriela\" de Tom Jobim, originalmente composta para o filme \"Gabriela\" (1983), de Bruno Barreto, foi lançada no álbum Passarim, de 1987.\n[…]\nRevista Amiga, Rio de Janeiro, outubro de 1975 - Bloch Editores.\n[…]\nSite oficial de Jorge Amado\n[…]\nFundação Jorge Amado"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Auto da Compadecida",
      "descricao": "Peça teatral de Ariano Suassuna, de 1955, protagonizada por João Grilo e Chicó."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No filme O Auto da Compadecida, de 2000, dirigido por Guel Arraes, que ator interpretou o esperto João Grilo?",
    "resposta": "Matheus Nachtergaele",
    "distratores": [
      "Selton Mello",
      "Marco Nanini",
      "Lázaro Ramos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Auto_da_Compadecida_(filme)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Auto_da_Compadecida_(filme)",
        "situacao": "ok",
        "texto": "O Auto da Compadecida é um filme brasileiro de comédia dramática, lançado em 2000, dirigido por Guel Arraes, com roteiro de Adriana Falcão, João Falcão e do próprio Arraes, e baseado na peça teatral Auto da Compadecida de 1955 de Ariano Suassuna, com elementos de O Santo e a Porca, Torturas de um Coração e A Pena e a Lei, ambas do mesmo autor, além de influências de Decamerão, de Giovanni Boccacci\n[…]\nO filme é estrelado por Matheus Nachtergaele e Selton Mello, com Marco Nanini, Rogério Cardoso, Diogo Vilela, Denise Fraga, Luís Melo, Lima Duarte, Fernanda Montenegro, Maurício Gonçalves, Paulo Goulart e Virginia Cavendish nos demais papéis principais.\n[…]\nMatheus Nachtergaele como João Grilo: um sujeito \"amarelo\", malandro, mentiroso e tagarela, que sobrevive de golpes e armações, usando sua inteligência para facilmente embromar qualquer pessoa.\n[…]\nOs atores escolhidos pelo diretor agradaram Suassuna, que disse que Matheus Nachtergaele foi o melhor intérprete para João Grilo. Ele afirmou: \"Sua atuação é impecável, pois consegue passar toda a esperteza do personagem, que luta contra o patriarcado rural, a burguesia urbana, a polícia, o cangaceiro, e até contra o diabo\". Elogiando as demais atuações, Suassuna disse que a melhor atriz do filme foi Fernanda Montenegro, no papel de Nossa Senhora.\n[…]\nO filme foi indicado para cinco categorias do Grande Prêmio do Cinema Brasileiro, vencendo o troféu de melhor roteiro, melhor diretor (Guel Arraes), melhor ator (Nachtergaele), melhor lançamento; O Auto da Compadecida foi indicado também na categoria de \"melhor filme\", mas perdeu o prêmio para Eu, Tu, Eles.\n[…]\nO Auto da Compadecida (minissérie que deu origem ao filme)\n[…]\nO Auto da Compadecida 2 (filme de 2024)\n[…]\nOs Trapalhões no Auto da Compadecida, versão da mesma história com Os Trapalhões\n[…]\nA Compadecida, filme com Regina Duarte e Armando Bógus"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Semana de Arte Moderna",
      "descricao": "Festival de arte modernista realizado no Theatro Municipal de São Paulo em fevereiro de 1922, marco do Modernismo brasileiro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A Semana de Arte Moderna aconteceu em 1922, ano em que o Brasil comemorava o centenário de que acontecimento?",
    "resposta": "Da Independência do Brasil",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna",
      "https://en.wikipedia.org/wiki/Modern_Art_Week"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna",
        "situacao": "ok",
        "texto": "Semana de Arte Moderna, também chamada de Semana de 22, foi um evento cultural que ocorreu no Theatro Municipal de São Paulo de 13 a 17 de fevereiro de 1922. Contou com exposição de pinturas, esculturas e maquetes arquitetônicas, além de conferências e concertos nas noites dos dias 13, 15 e 17. Foi financiada principalmente por membros da elite paulista que haviam enriquecido com a produção cafeei\n[…]\nAlém disso, propunham criar uma arte afinada com a realidade brasileira.\n[…]\nParte dessa proposta tinha raízes na agitação nacional que ocorria no início da década de 1920 em razão da comemoração do Centenário da Independência em 1922. O sentimento nacionalista da época estava associado ao antilusitanismo derivado da presença portuguesa no comércio, indústria, imprensa e literatura. Por mais que não partilhassem das ideias antilusitanas, os fatores sociais e políticos também afetaram os modernistas na elaboração da crítica estética.\n[…]\nA escolha do ano de 1922 para a realização do evento foi uma tentativa de tornar a comemoração do Centenário da Independência do Brasil em manifesto de emancipação artística. Assim sendo, em 1921, O grupo estabeleceu contato com empresários com prestígio na sociedade para patrocinar o evento, tais como Antônio Prado Júnior, Armando Penteado, José Carlos de Macedo Soares, Olívia Guedes Penteado e Oscar Rodrigues Alves.\n[…]\nNas comemorações do centenário da Semana em 2022, vários eventos, mostras, publicações e seminários foram organizados, tentando formar uma visão mais exata sobre como se formou e o que representou o movimento no contexto histórico e identificar as distorções da historiografia tradicional. É um exemplo a exposição Raio-que-o-parta: ficções do moderno no Brasil, inaugurada no dia 16 de fevereiro no SESC 24 de Maio, em São Paulo.\n[…]\nModernismo no Brasil\n[…]\nBopp, Raul (2012). Movimentos modernistas no Brasil. 1922-1928. Rio de Janeiro: José Olympio"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Modern_Art_Week",
        "situacao": "ok",
        "texto": "The Modern Art Week (Portuguese: Semana de Arte Moderna) was an arts festival in São Paulo, Brazil, that ran from 10 February to 17 February 1922. Historically, the Week marked the start of Brazilian Modernism; though a number of individual Brazilian artists were doing modernist work before the week, it coalesced and defined the movement and introduced it to Brazilian society at large.\n[…]\nIt was organized chiefly by painter Emiliano Di Cavalcanti and poet Mário de Andrade, in an attempt to bring to a head a long-running conflict between the young modernists and the cultural establishment, headed by the Brazilian Academy of Letters, which adhered strictly to academicism. The event was controversial at best and divisive at worst, with one member of the Academy, Graça Aranha, ostracized for attending.\n[…]\nHe had opened the week with a conference titled \"The aesthetic emotion in modern art\". Due to the radicalism (for the times) of some of their poems and music, the artists were vigorously booed and pelted by the audience, and the press and art critics in general were strong in their condemnation (such as in a famous episode by editor, writer and art critic Monteiro Lobato).\n[…]\nBefore the events leading up to 1922, São Paulo was a prosperous but relatively culturally unimportant city. However, the Week established São Paulo as the seat of the new modernist movement, against the far more culturally conservative Rio de Janeiro.\n[…]\nSemana de Arte Moderna (in Portuguese)"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Triste Fim de Policarpo Quaresma",
      "descricao": "Romance de Lima Barreto publicado em livro em 1915, sobre um major ultranacionalista."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No romance de Lima Barreto, o major Policarpo Quaresma apoia com fervor que presidente na Revolta da Armada, e acaba preso pelo governo dele?",
    "resposta": "Floriano Peixoto",
    "distratores": [
      "Deodoro da Fonseca",
      "Prudente de Morais",
      "Campos Sales"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Triste_Fim_de_Policarpo_Quaresma"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Triste_Fim_de_Policarpo_Quaresma",
        "situacao": "ok",
        "texto": "Triste Fim de Policarpo Quaresma é um romance do pré-modernismo brasileiro e considerado por alguns o principal representante desse movimento. Escrito por Lima Barreto, foi levado a público pela primeira vez em folhetins, publicados, entre agosto e outubro de 1911, na edição da tarde do Jornal do Commercio do Rio de Janeiro. Em 1915, também no Rio de Janeiro, a obra foi pela primeira vez impressa \n[…]\nTem como temas centrais: Nacionalismo, burocracia, crítica social e política, utopia e fracasso. O contexto é no final do século XIX, início da República Velha no Brasil (governo de Floriano Peixoto). Lima Barreto faz uma crítica feroz à corrupção, ao militarismo e ao falso patriotismo da elite brasileira.\n[…]\nChegando ao Rio, Policarpo é bem recebido por Floriano Peixoto, que, no entanto, dá pouca atenção às suas propostas de reforma.\n[…]\nA revolta criava ao mesmo tempo tensão – devido a prisões e violências arbitrárias – e oportunidades de ascensão social e empregatícia a cupinchas e puxa-sacos. Policarpo, enquanto isto, percebe que suas propostas não eram levadas a sério – é chamado, de forma um tanto irônica, de visionário pelo indolente Marechal de Ferro Floriano Peixoto – e desilude ainda mais quando, tendo entrado em combate, acaba por matar um dos revoltosos.\n[…]\nSeu destino é selado quando, após presenciar a escolha arbitrária de prisioneiros a serem executados, ele escreve uma carta a Floriano Peixoto denunciando a situação: o maior patriota de todo o livro é injustamente preso, acusado de traição.\n[…]\nPolicarpo, devido às suas críticas, é preso e condenado ao fuzilamento, por ordem do presidente Floriano Peixoto sob a acusação de traição.\n[…]\nDona Adelaide: Irmã de Quaresma, companheira fiel e silenciosa.\n[…]\nPOLICARPO QUARESMA, ANTI-HERÓI QUIXOTESCO\n[…]\nUMA ANÁLISE LITERÁRIA DE POLICARPO QUARESMA EM O TRISTE FIM DE POLICARPO QUARESMA, DE LIMA BARRETO: NACIONALISTA OU LOUCO? DE TUDO UM POUCO! (PDF)"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Machado de Assis",
      "descricao": "Escritor brasileiro (1839–1908), fundador da Academia Brasileira de Letras, autor de Dom Casmurro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Machado de Assis nasceu em 1839, filho de um pintor de paredes, numa chácara de que morro do Rio de Janeiro?",
    "resposta": "Morro do Livramento",
    "distratores": [
      "Morro da Providência",
      "Morro do Castelo",
      "Morro de Santo Antônio"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Machado_de_Assis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Machado_de_Assis",
        "situacao": "ok",
        "texto": "Joaquim Maria Machado de Assis (Rio de Janeiro, 21 de junho de 1839 – Rio de Janeiro, 29 de setembro de 1908) foi um escritor brasileiro, amplamente reconhecido por críticos, estudiosos, escritores e leitores como o maior expoente da literatura brasileira. Sua produção literária abrangeu praticamente todos os gêneros, incluindo poesia, romance, crônica, dramaturgia, conto, folhetim, jornalismo e c\n[…]\nNascido no Morro do Livramento, Rio de Janeiro, de uma família pobre, mal estudou em escolas públicas e nunca frequentou universidade. Para o considerado crítico literário norte-americano Harold Bloom, Machado de Assis é o maior escritor negro de todos os tempos, embora outros estudiosos prefiram especificar que Machado era mestiço, filho de um descendente de negros alforriados e de uma portuguesa da ilha de São Miguel.\n[…]\nMachado de Assis nasceu em 21 de junho de 1839, no Morro do Livramento, no Rio de Janeiro, então capital do Império, em pleno Período Regencial. Seu pai foi Francisco José de Assis, homem mulato pintor de paredes, filho de Francisco de Assis e Inácia Maria Rosa, ambos pardos. A mãe foi a portuguesa Maria Leopoldina Machado da Câmara, branca, filha de Estêvão José Machado e Ana Rosa.\n[…]\nAs terras do Livramento eram ocupadas pela chácara da família de Dona Maria José e já em 1818 o terreno começou a ser loteado de tão imenso que era, dando origem à rua Nova do Livramento. Maria José tornou-se madrinha do bebê e Joaquim Alberto de Sousa da Silveira, seu cunhado, tornou-se o padrinho, de modo que os pais de Machado resolveram homenagear os dois nomeando-o com seus nomes. Nascera junto a ele uma irmã, que morreu jovem, aos 4 anos, em 1845.\n[…]\nAssis, Joaquim Maria Machado de. Crítica Literária. Organizado por Mário de Alencar. Rio de Janeiro: W. M. Jackson, 1959.\n[…]\n«Machado de Assis painel histórico»\n[…]\n«Mário de Alencar, filho de Machado de Assis?»\n[…]\n«Machado de Assis real»"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Carlos Drummond de Andrade",
      "descricao": "Poeta modernista mineiro (1902–1987), autor de A Rosa do Povo e Sentimento do Mundo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Desde 2002, uma estátua de bronze de Carlos Drummond de Andrade sentado num banco, de costas para o mar, fica em que praia carioca?",
    "resposta": "Copacabana",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carlos_Drummond_de_Andrade"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Drummond_de_Andrade",
        "situacao": "ok",
        "texto": "Carlos Drummond de Andrade (Itabira, 31 de outubro de 1902 – Rio de Janeiro, 17 de agosto de 1987) foi um poeta, contista e cronista brasileiro, considerado por muitos o mais influente poeta brasileiro do século XX.\n[…]\nNos anos 1940, Drummond ingressou nas fileiras do Partido Comunista Brasileiro (PCB) e chegou a dirigir um jornal do Partido no Rio de Janeiro, onde realizou uma entrevista com o dirigente do partido Luis Carlos Prestes ainda na cadeia. Existe colaboração de sua autoria no semanário Mundo Literário (1946–1948) e na revista luso-brasileira Atlântico.\n[…]\nDrummond, como os modernistas, segue a libertação proposta por Mário de Andrade e Oswald de Andrade; com a instituição do verso livre, mostrando que este não depende de um metro fixo. Se dividirmos o modernismo numa corrente mais lírica e subjetiva e outra mais objetiva e concreta, Drummond faria parte da segunda, ao lado do próprio Oswald de Andrade.\n[…]\nQuando se diz que Drummond foi o primeiro grande poeta a se afirmar depois das estreias modernistas, não se está querendo dizer que Drummond seja um modernista. De fato, herda a liberdade linguística, o verso livre, o metro livre, as temáticas cotidianas.\n[…]\nSobre a poesia política, algo incipiente até então, deve-se notar o contexto em que Drummond escreve. A civilização que se forma a partir da Guerra Fria está fortemente amarrada ao neocapitalismo, à tecnocracia, às ditaduras de toda sorte, e ressoou dura e secamente no eu artístico do último Drummond, que volta, com frequência, à aridez desenganada dos primeiros versos: A poesia é incomunicável / Fique quieto no seu canto. / Não ame."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Semana de Arte Moderna",
      "descricao": "Festival de arte modernista realizado no Theatro Municipal de São Paulo em fevereiro de 1922, marco do Modernismo brasileiro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em fevereiro de 1922, em que teatro paulistano aconteceu a Semana de Arte Moderna?",
    "resposta": "Theatro Municipal de São Paulo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna",
      "https://en.wikipedia.org/wiki/Modern_Art_Week"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna",
        "situacao": "ok",
        "texto": "Semana de Arte Moderna, também chamada de Semana de 22, foi um evento cultural que ocorreu no Theatro Municipal de São Paulo de 13 a 17 de fevereiro de 1922. Contou com exposição de pinturas, esculturas e maquetes arquitetônicas, além de conferências e concertos nas noites dos dias 13, 15 e 17. Foi financiada principalmente por membros da elite paulista que haviam enriquecido com a produção cafeei\n[…]\nJunto de Guilherme de Almeida, Menotti del Picchia e Rubens Borba de Moraes, o grupo cogitou realizar na livraria Jacinto Silva uma exposição de quadros de vanguarda com conferências didáticas, almejando abrir caminhos para novas experiências modernistas. Apenas dias depois, quando Oswald de Andrade, Menotti, Di Cavalcanti e Brecheret se reuniram com Paulo Prado num salão do Automóvel Clube, que começou-se a planejar a concretização do evento, tendo o Theatro Municipal como espaço mais adequado.\n[…]\nEm seguida, buscou-se René Thiollier, da direção do Jornal do Commercio, que se encarregou de entrar em contato com o administrador do Theatro Municipal para fazer a reserva nos dias de 11 a 17 de fevereiro. Dentre todos os nomes da elite cafeeira paulista que ajudaram a financiar o evento, Paulo Prado é o que se destaca, principalmente por ter influenciado outros investidores a contribuírem para a realização da Semana.\n[…]\nAbertura oficial do evento. Espalhadas pelo saguão do Teatro Municipal de São Paulo, várias pinturas e esculturas provocam reações de espanto e repúdio por parte do público. O espetáculo tem início com a confusa conferência de Graça Aranha, intitulada \"A emoção estética da Arte Moderna\".\n[…]\nArte moderna\n[…]\nModernismo\n[…]\nBrito, Mário da Silva (1969). Ângulo e Horizonte. de Oswald de Andrade à ficção científica. São Paulo: Martins\n[…]\nLafetá, João Luiz (2000). 1930. a crítica e o Modernismo. São Paulo: Duas Cidades\n[…]\n«Editorial de 15 de maio de 1978 da Folha de S.Paulo sobre a Semana»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Modern_Art_Week",
        "situacao": "ok",
        "texto": "The Modern Art Week (Portuguese: Semana de Arte Moderna) was an arts festival in São Paulo, Brazil, that ran from 10 February to 17 February 1922. Historically, the Week marked the start of Brazilian Modernism; though a number of individual Brazilian artists were doing modernist work before the week, it coalesced and defined the movement and introduced it to Brazilian society at large.\n[…]\nThe Week took place at the Municipal Theater in São Paulo, and included plastic arts exhibitions, lectures, concerts, and reading of poems. In its breadth it differed significantly from the Armory Show, with which it is often compared, but which featured only visual art.\n[…]\nIt was organized chiefly by painter Emiliano Di Cavalcanti and poet Mário de Andrade, in an attempt to bring to a head a long-running conflict between the young modernists and the cultural establishment, headed by the Brazilian Academy of Letters, which adhered strictly to academicism. The event was controversial at best and divisive at worst, with one member of the Academy, Graça Aranha, ostracized for attending.\n[…]\nHe had opened the week with a conference titled \"The aesthetic emotion in modern art\". Due to the radicalism (for the times) of some of their poems and music, the artists were vigorously booed and pelted by the audience, and the press and art critics in general were strong in their condemnation (such as in a famous episode by editor, writer and art critic Monteiro Lobato).\n[…]\nBefore the events leading up to 1922, São Paulo was a prosperous but relatively culturally unimportant city. However, the Week established São Paulo as the seat of the new modernist movement, against the far more culturally conservative Rio de Janeiro.\n[…]\nSemana de Arte Moderna (in Portuguese)"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Grande Sertão: Veredas",
      "descricao": "Romance de Guimarães Rosa publicado em 1956, narrado pelo jagunço Riobaldo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No grande romance de Guimarães Rosa, o jagunço Riobaldo vai à meia-noite a uma encruzilhada tentar um pacto com o diabo. Como se chama esse lugar?",
    "resposta": "Veredas-Mortas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Grande_Sertão:_Veredas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Sertão:_Veredas",
        "situacao": "ok",
        "texto": "Grande Sertão: Veredas é um romance experimental modernista escrito pelo autor brasileiro João Guimarães Rosa e publicado pela Livraria José Olympio Editora, em 1956. Tanto a arte da capa como as ilustrações da primeira edição de Grande Sertão: Veredas são de autoria de Poty Lazzarotto.\n[…]\nGrande Sertão: Veredas foi dedicado por Guimarães a \"Ara\", sua segunda esposa, Aracy de Carvalho Guimarães Rosa.\n[…]\nO monólogo O Diabo Na Rua, No Meio do Redemunho é um recorte do livro Grande Sertão: Veredas, de João Guimarães Rosa, com foco na dialética bem/mal. Aborda as ações passadas do ex-jagunço Riobaldo, hoje um próspero fazendeiro. As inquietações da juventude o levaram ao pacto Fáustico. Ao rememorar, ele reflete sobre Deus e o demônio. “O diabo existe?” é a principal questão desse homem angustiado, que constata: “viver é muito perigoso”. Direção: Amir Haddad. Adaptação e atuação: Gilson de Barros.\n[…]\nAtravés da narrativa de Riobaldo, o autor explora as complexidades da alma humana, mergulhando na dualidade entre o bem e o mal. Adaptação da aclamada obra-prima \"Grande Sertão: Veredas\", escrita por Guimarães Rosa. Com estreia em agosto de 2024, o filme “O diabo na rua no meio do redemunho” é o resultado da imersão de quase 20 anos de Bia Lessa na obra máxima de Guimarães Rosa (1908-1967).\n[…]\nApesar da grande quantidade de traduções para outros idiomas que Grande Sertão: Veredas possui, a obra é considerada de difícil tradução por vários autores, devido ao grande conhecimento da língua portuguesa que se faz necessário, graças à rica combinação existente no texto de Guimarães Rosa, que reúne poesia, fala arcaica, linguagem coloquial e regionalismos mineiros. Assim como James Joyce fez com o inglês, o romancista brasileiro transformou o português em sua própria língua literária."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "O Tempo e o Vento",
      "descricao": "Trilogia de romances de Erico Verissimo, publicada entre 1949 e 1962, sobre a formação do Rio Grande do Sul através da família Terra Cambará."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que cidade fictícia gaúcha se passa grande parte de O Tempo e o Vento, a saga da família Terra Cambará?",
    "resposta": "Santa Fé",
    "distratores": [
      "Antares",
      "Cruz Alta",
      "Bagé"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Tempo_e_o_Vento"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Tempo_e_o_Vento",
        "situacao": "ok",
        "texto": "O Tempo e o Vento é uma trilogia de romances históricos do escritor gaúcho Érico Veríssimo, publicada entre 1949 e 1962, e considerada por muitos a maior obra da literatura brasileira do século XX.\n[…]\nComposta por O Continente (1949), O Retrato (1951) e O Arquipélago (1961–1962), a trilogia narra dois séculos de história do Rio Grande do Sul, da fundação das Missões Jesuíticas e da chegada dos primeiros colonos ao \"Continente de São Pedro\" em 1745 até o fim do Estado Novo em 1945, por meio da saga de múltiplas gerações das famílias Terra, Cambará e Amaral na cidade fictícia de Santa Fé.\n[…]\nO resultado foi o que Bordini e Zilberman descrevem como o cumprimento de um projeto que os escritores brasileiros tentavam realizar há muito tempo: um romance histórico que mostrasse a composição da nação nos âmbitos social, étnico e econômico, e o papel de cada membro dentro dessa organização heterogênea do país. A cidade fictícia de Santa Fé, palco de toda a saga, foi modelada com base em Cruz Alta, cidade natal de Érico, e em outras pequenas cidades da Campanha gaúcha.\n[…]\nA semelhança estrutural entre as duas obras foi objeto de extenso estudo acadêmico. A tese Vento em tempo de solidão: a saga dos Buendía e dos Terra-Cambará, da PUC-SP, demonstra que as duas narrativas configuram-se como sagas com um tempo circular — comprovado pelas repetições de acontecimentos e tipos psicológicos nas gerações sucessivas das famílias — e com a criação de um espaço mítico representado pelos povoados de Santa Fé e Macondo.\n[…]\nAna Terra (1972)\n[…]\nUFRGS — Vento em tempo de solidão: análise comparada de O Tempo e o Vento e Cem Anos de Solidão\n[…]\nPUC-SP — Vento em tempo de solidão: a saga dos Buendía e dos Terra-Cambará"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "No Meio do Caminho",
      "descricao": "Poema de Carlos Drummond de Andrade publicado em 1928, que repete o verso tinha uma pedra no meio do caminho."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O poema de Drummond sobre uma pedra no meio do caminho causou escândalo ao ser publicado em 1928. Em que revista modernista ele saiu?",
    "resposta": "Revista de Antropofagia",
    "distratores": [
      "Klaxon",
      "Estética",
      "Terra Roxa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/No_Meio_do_Caminho",
      "https://pt.wikipedia.org/wiki/Revista_de_Antropofagia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/No_Meio_do_Caminho",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Revista_de_Antropofagia",
        "situacao": "ok",
        "texto": "O movimento antropofágico foi uma manifestação artística brasileira da década de 1920, fundada e teorizada pelo poeta Oswald de Andrade e pela pintora Tarsila do Amaral, ambos do estado de São Paulo. Foi enunciado no Manifesto Antropófago e divulgado através da Revista de Antropofagia.\n[…]\nO Manifesto Antropófago (ou Manifesto Antropofágico) foi um manifesto publicado em 1928 pelo poeta e polemista brasileiro Oswald de Andrade, figura-chave do movimento cultural do modernismo brasileiro e colaborador da publicação Revista de Antropofagia. Foi inspirado em \"Abaporu\", pintura de Tarsila do Amaral, artista modernista e esposa de Oswald de Andrade.\n[…]\nO manifesto fundamentou o movimento antropofágico. Lido em 1928 para seus amigos na casa de Mário de Andrade, foi publicado na Revista de Antropofagia, a qual Oswald ajudou a fundar com Raul Bopp e Antônio de Alcântara Machado, com a datação de \"ano 374 da deglutição do Bispo Sardinha\".\n[…]\nPor outro lado, alguns críticos argumentam que a Antropofagia como movimento era muito heterogênea para que argumentos abrangentes fossem extraídos dele e que muitas vezes tinha pouco a ver com uma política cultural pós-colonial.\n[…]\nA Revista de Antropofagia foi uma publicação parte do movimento antropofágico surgida como consequência do Manifesto Antropófago escrito por Oswald de Andrade.\n[…]\nA revista foi publicada entre maio 1928 e agosto de 1929 e teve duas fases, ou \"dentições\", como queriam os seus participantes. A publicação divulgava poesia, textos, anúncios de livros e críticas a alguns conteúdos dos grandes jornais.\n[…]\nComo se pode ver, os autores que escreveram nessa primeira fase da Revista de Antropofagia representam a \"nata\" do primeiro momento modernista.\n[…]\n«Revista de Antropofagia na Brasiliana»\n[…]\nArtigo sobre Antropofagia"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Dom Casmurro",
      "descricao": "Romance de Machado de Assis publicado em 1899, narrado por Bento Santiago."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Dom Casmurro, que amigo de seminário de Bentinho tem uma semelhança com o menino Ezequiel que alimenta o ciúme do narrador?",
    "resposta": "Escobar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dom_Casmurro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dom_Casmurro",
        "situacao": "ok",
        "texto": "Dom Casmurro é um romance escrito por Machado de Assis, publicado em 1899 pela Livraria Garnier. Escrito para publicação em livro, o que ocorreu em 1900 – embora com data do ano anterior, ao contrário de Memórias Póstumas de Brás Cubas (1881) e Quincas Borba (1891), escritos antes em folhetins –, é considerado pela crítica o terceiro romance da \"Trilogia Realista\" de Machado de Assis, ao lado dess\n[…]\nNo seminário, Bentinho conhece seu melhor amigo, Ezequiel de Sousa Escobar, filho de um advogado de Curitiba. Bento larga o seminário e estuda Direito em São Paulo, enquanto Escobar torna-se comerciante bem-sucedido e casa-se com Sancha, amiga de Capitu. Em 1865, Capitu e Bentinho casam; Sancha e Ezequiel têm uma filha que dão o nome de Capitolina, enquanto o protagonista e sua esposa concebem um filho que chamam de Ezequiel.\n[…]\nOutros ainda o veem como um romance policial, onde o leitor teria que investigar os pormenores das ações desconfiando das visões do narrador para chegar a uma conclusão sobre a veracidade do adultério, já que \"desde o início há incongruências, passos obscuros, ênfases desconcertantes, que formam um enigma.\" Entre essas pistas estariam: a metáfora dos \"olhos de ressaca\" e dos \"olhos de cigana oblíqua e dissimulada\", o paralelo com o drama shakespeariano de Otelo e Desdêmona, a aproximação com a ópera do tenor Marcolini (o duo, o trio e o quatuor), as \"semelhanças esquisitas\", as relações com Escobar no seminário, a lucidez de Capitu e o obscurantismo de Bentinho, a imaginação delirante e perversa do ex-seminarista, o preceito bíblico do Eclesiastes no final do livro.\n[…]\nA maioria das interpretações do romance são influenciadas pela sociologia, feminismo e psicanálise, e a maioria também se refere ao tema do ciúme do narrador, Dom Casmurro; algumas argumentando que não existiu adultério e outras que o autor deixou a questão em aberto para o leitor."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "A Hora da Estrela",
      "descricao": "Romance de Clarice Lispector publicado em 1977, sobre a datilógrafa nordestina Macabéa no Rio de Janeiro."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em A Hora da Estrela, a história da datilógrafa Macabéa é contada por um escritor fictício. Como ele se chama?",
    "resposta": "Rodrigo S.M.",
    "distratores": [
      "Olímpico de Jesus",
      "Paulo Honório",
      "Bento Santiago"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Hora_da_Estrela"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Hora_da_Estrela",
        "situacao": "ok",
        "texto": "A Hora da Estrela é um romance literário da escritora brasileira Clarice Lispector.\n[…]\nO romance narra a história da datilógrafa alagoana, Macabéa, que migra para o Rio de Janeiro, tendo sua rotina narrada por um escritor fictício chamado Rodrigo S.M.\n[…]\nA Hora da Estrela traz consigo a forte presença de um narrador que conta a história ao mesmo tempo que a escreve, característica peculiar da autora. Clarice Lispector cria Rodrigo S.M. para contar a história de Macabéa, pois essa história não poderia ser contada por uma mulher. Rodrigo assume, portanto, o papel de autor da história.\n[…]\nEssa narrativa se dá através do autor fictício e narrador da história, Rodrigo S.M., que não mede esforços em sua escritura para tentar achar argumentos plausíveis para contar tal relato, que segundo o próprio não merece ser contado. Com essa briga interior, a história é iniciada, porém demora grande parte da narrativa para que ela ganhe de fato esse tom.\n[…]\nToda a expressão do texto é para se explicar. Rodrigo S. M. acaba priorizando o relato dos recursos textuais a falar de Macabéa, que ironicamente só ganha papel de destaque perto da hora de sua morte. É nesse ponto que compreendemos o significado do título: A hora da estrela é a hora da morte de Macabéa, pois nesse momento ela deixa de ser invisível às pessoas, que percebem sua existência, porém apenas quando já não existe mais.\n[…]\nA hora da estrela é uma obra-prima da literatura brasileira, principalmente, pelas reflexões de Rodrigo S.M. sobre o ato de escrever, sua própria vida e a anti-heroína Macabéa."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Gabriela, Cravo e Canela",
      "descricao": "Romance de Jorge Amado publicado em 1958, sobre a retirante Gabriela e o árabe Nacib na região do cacau."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em Gabriela, Cravo e Canela, o árabe Nacib contrata a retirante como cozinheira do seu bar em Ilhéus. Como se chama o bar?",
    "resposta": "Vesúvio",
    "distratores": [
      "Bataclan",
      "Pinguim",
      "Café Paris"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gabriela,_Cravo_e_Canela",
        "situacao": "ok",
        "texto": "Gabriela, Cravo e Canela é um dos mais célebres romances do escritor brasileiro Jorge Amado, publicado em 1958.\n[…]\nGabriela personifica as transformações de uma sociedade patriarcal, arcaica e autoritária, afetada pelos sopros de renovação cultural, política e econômica. O enredo da obra Gabriela Cravo e Canela está  dividido em duas partes, e essas estão divididas em duas outras partes. A primeira é intitulada como “Um Brasileiro das Arábias” e a sua em primeira divisão chama-se “O langor de Ofenísia”.\n[…]\nNessas duas primeiras partes iniciais a narrativa tem como foco principal dois personagens: Mundinho Falcão e Nacib. Ao término da segunda parte a personagem protagonista Gabriela aparece, retirante que tem como objetivo morar em Ilhéus e trabalhar como cozinheira ou doméstica. Ainda na segunda, o autor narra a solidão de Glória.\n[…]\nAo amanhecer são encontrados dois corpos na praia, provas de um crime passional e ao entardecer com a preparação de um jantar acontece a contratação de Gabriela como cozinheira por Nacib.\n[…]\nNo capítulo chamado \" Canção de Gabriela\", a mulata Gabriela vai levar a marmita no Bar Vesúvio para Nacib. Na volta para casa, ela passa em frente a igreja e da praça, e vê crianças brincando de cantigas de roda, cantando O Cravo e a Rosa e Caranguejo não é peixe, ela se lembra quando era criança e cantava e brincava como aquelas crianças.\n[…]\nGabriela, cravo e canela, filme dirigido por Bruno Barreto, de 1983, com Sônia Braga no papel principal.\n[…]\nEm 1970, Manuel d'Almeida Filho publicou pela Editora Prelúdio, um romance em versos de cordel baseado em Gabriela."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "O Cortiço",
      "descricao": "Romance naturalista de Aluísio Azevedo publicado em 1890, sobre os moradores de uma habitação coletiva no Rio de Janeiro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em O Cortiço, quem é o português ambicioso que enriquece com a estalagem, explorando o trabalho da escrava Bertoleza?",
    "resposta": "João Romão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Cortiço"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Cortiço",
        "situacao": "ok",
        "texto": "O Cortiço é um romance do escritor brasileiro Aluísio Azevedo, publicado em 1890, considerado a principal obra do Naturalismo no Brasil. Ambientado no Rio de Janeiro do final do século XIX, o romance retrata a vida cotidiana em uma estalagem popular — o cortiço — e analisa as relações sociais ali estabelecidas, evidenciando mecanismos de exploração econômica, determinismo social e degradação moral\n[…]\nA obra descreve a ascensão social do comerciante português João Romão, dono de uma venda, uma pedreira e um cortiço, próximo ao sobrado de um patrício endinheirado, o comendador Miranda. A rivalidade entre os dois aumenta à medida que cresce o número de casinhas do cortiço, alugadas, na sua maioria, pelos empregados da pedreira, que também fazem compras na venda de João Romão, que, desse modo, passa a enriquecer rapidamente.\n[…]\nCom a intenção obsessiva de tornar-se rico, João Romão economiza cada moeda e explora quem quer que seja sempre que tem oportunidade, como o faz com a escrava fugida chamada Bertoleza, que o auxilia no trabalho duro e para quem ele forjou um documento de alforria.\n[…]\nO único inconveniente é a escrava Bertoleza, que não aceita ser descartada, para a qual João Romão arma um plano: denuncia Bertoleza como escrava fugida a seu verdadeiro dono, que vai com a polícia prendê-la. João Romão faz de conta que não sabe de nada e a entrega. Bertoleza percebe que Romão, sem coragem de mandá-la embora ou de matá-la, preparou essa armadilha para devolvê-la ao cativeiro; desesperada, ela se mata.\n[…]\nA narração desses fatos da vida de João Romão entrelaça-se com a narração de vários episódios dos moradores do cortiço, cuja luta pela sobrevivência é dura e cruel. O caso de Jerônimo é exemplar da visão naturalista de Azevedo; Jerônimo é um operário português contratado por João Romão para trabalhar na pedreira. É sério e honesto, casado com Piedade, também portuguesa."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Auto da Compadecida",
      "descricao": "Peça teatral de Ariano Suassuna, de 1955, protagonizada por João Grilo e Chicó."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No julgamento final da peça de Ariano Suassuna, quem é a Compadecida que intercede pelos mortos diante de Jesus?",
    "resposta": "Nossa Senhora",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Auto_da_Compadecida"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Auto_da_Compadecida",
        "situacao": "ok",
        "texto": "Auto da Compadecida é uma peça teatral em forma de auto, em três atos, escrita pelo autor brasileiro Ariano Suassuna em 1955. Sua primeira encenação aconteceu em 1956, no Recife, em Pernambuco. A peça também foi encenada em 1974, com direção de João Cândido. Em 2 de outubro de 1957 a peça foi publicada em forma de livro pela editora Agir no Rio de Janeiro.\n[…]\nO Auto da Compadecida projetou Suassuna em todo o país e foi considerada por Sábato Magaldi, em 1962, \"o texto mais popular do moderno teatro brasileiro\".\n[…]\nA peça foi adaptada para o cinema pela primeira vez em 1969, com o filme A Compadecida. A segunda adaptação veio em 1987, com o filme Os Trapalhões no Auto da Compadecida.\n[…]\nEm 1999, foi apresentada como uma minissérie pela Rede Globo de Televisão, que inclusive foi a responsável pela inclusão do artigo \"O\" antes do nome original. A adaptação de maior sucesso, foi editada em 2000 para exibição nos cinemas, contando com alguns personagens, como o Cabo Setenta, Rosinha e Vicentão, que não fazem parte da peça original. Esses personagens adicionais fazem parte da obra Torturas de um Coração, além de elementos de O Santo e a Porca, ambas de autoria de Ariano Suassuna.\n[…]\nAuto da Compadecida foi encenada pela primeira vez no dia 11 de setembro de 1956, no Teatro de Santa Isabel, pelo Teatro Adolescente do Recife, sob direção de Clênio Wanderley, figurino de Victor Moreira e cenários de Aloísio Magalhães, tendo como elenco os seguintes atores:\n[…]\nA Compadecida: Maria do Socorro Raposa Meira\n[…]\nA Compadecida: Córdula Reis\n[…]\nA Compadecida (filme de 1969)\n[…]\nOs Trapalhões no Auto da Compadecida (filme de 1987)\n[…]\nO Auto da Compadecida (minissérie de 1999)\n[…]\nO Auto da Compadecida (filme de 2000)\n[…]\nO Auto da Compadecida (teatro de 2017)\n[…]\nO Auto da Compadecida 2 (filme de 2024)\n[…]\nO Auto da Compadecida, montagem do Grupo Maria Cutia (2025)"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "O Alienista",
      "descricao": "Novela satírica de Machado de Assis publicada em 1882, sobre o médico Simão Bacamarte e seu hospício, a Casa Verde."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim de O Alienista, Simão Bacamarte solta todos os internos e se tranca sozinho na Casa Verde. Por quê?",
    "resposta": "Julgou-se o único equilibrado",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Alienista"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Alienista",
        "situacao": "ok",
        "texto": "O Alienista é uma obra literária humorística do escritor brasileiro Machado de Assis. Muitos consideram-no um conto, mas a maioria dos críticos e especialistas consideram-no uma novela por causa da sua estrutura narrativa.\n[…]\nPor fim, 75% da população da cidade encontra-se internada na Casa Verde. O alienista, percebendo que estava errado, resolve libertar todos os internos e refazer sua teoria: se a maioria apresentava desvios de personalidade e não seguia um padrão, então louco era quem mantinha regularidade nas ações e possuía firmeza de caráter. Com base em sua nova teoria, o Dr.\n[…]\nBacamarte recomeça a internar as pessoas da cidade e o primeiro deles é o vereador Galvão, o único contrário à lei proposta pelos vereadores de que eles não poderiam ser recolhidos à Casa Verde. Assim, as internações continuam. Outras pessoas, porém, são consideradas curadas ao apresentarem algum desvio de caráter.\n[…]\nApós algum tempo, ele dá alta a todos os presentes na Casa Verde, depois de tratar o equilíbrio mental. Com isso ele desenvolve uma nova teoria: como ninguém tinha uma personalidade perfeita, exceto ele próprio, o alienista conclui ser ele o único anormal e decide trancar-se sozinho na Casa Verde, vindo a falecer poucos meses depois.\n[…]\nDr. Simão Bacamarte - É médico psiquiatra e o protagonista da história. A ciência era o seu universo, vivia estudando. Representa bem a caricatura do tiranismo da ciência no século XIX, podendo ser um precursor de personagens como Spock. Construiu a Casa Verde para materializar suas ideias, mas acabou tornando-se vítima delas, recolhendo-se à Casa Verde por considerar-se o único cérebro bem organizado de Itaguaí.\n[…]\nO Alienista (em PDF, ePub e Mobi) no site Biblioteca Mundial"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Jeca Tatu",
      "descricao": "Personagem caipira da literatura brasileira, levado ao cinema por Amácio Mazzaropi."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Monteiro Lobato depois se retratou da preguiça do Jeca Tatu, dizendo que o Jeca não é assim, está assim. Por causa de quê?",
    "resposta": "Doenças como o amarelão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jeca_Tatu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jeca_Tatu",
        "situacao": "ok",
        "texto": "Jeca Tatu é uma personagem criada por Monteiro Lobato em sua obra Urupês, que contém 14 histórias baseadas no trabalhador rural paulista. Simboliza a situação do caipira, abandonado pelos poderes públicos brasileiros, às doenças, particularmente ancilostomíase, ao atraso econômico, educacional e à indigência política.\n[…]\n\"O Jeca Tatu não é assim, ele está assim\". A frase de Monteiro Lobato, sobre um dos seus mais populares personagens, refere sua obra para além das histórias infantis e incomoda a elite intelectual da época, acostumada a uma visão romântica do homem do campo. Jeca Tatu, um caipira de barba rala e calcanhares rachados – porque não gostava de usar sapatos, era pobre, ignorante e avesso aos hábitos de higiene urbanos. Morava na região do Vale do Paraíba Paulista, distinta por seu atraso.\n[…]\nO personagem Jeca Tatu e a análise dele feita por Monteiro Lobato no conto Urupês e no artigo \"Velha Praga\" de Monteiro Lobato é assim explicado pelo folclorista Cornélio Pires, quando analisa o caipira caboclo:\n[…]\nEm 1912, os cientistas Belisário Pena e Artur Neiva investigam a fauna e a flora de regiões brasileiras e investigam, além da flora e da fauna, a condição sanitária da população rural do Brasil. As informações, publicadas em Relatório Médico-Científico (1916) pelo Instituto Oswaldo Cruz, promove campanhas em favor do saneamento, estimula a criação da Liga Pró-Saneamento do Brasil\" (1918). Monteiro Lobato aderiu à campanha com o seu personagem Jeca Tatu.\n[…]\n\"O 'Jeca Tatu' de Monteiro Lobato: Identidade do Brasileiro e Visão do Brasil\", por Roberto B. da Silva (In: DezenoveVinte - Arte brasileira do século XIX e início do XX)"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Ariano Suassuna",
      "descricao": "Escritor e dramaturgo paraibano (1927–2014), autor de Auto da Compadecida e criador do Movimento Armorial."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ariano Suassuna nasceu em 1927 dentro do palácio do governo da Paraíba, na capital do estado. Por que ele nasceu ali?",
    "resposta": "O pai era governador",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ariano_Suassuna"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ariano_Suassuna",
        "situacao": "ok",
        "texto": "Ariano Vilar Suassuna (João Pessoa, 16 de junho de 1927 – Recife, 23 de julho de 2014) foi um intelectual, escritor, filósofo, dramaturgo, professor, romancista, artista plástico, ensaísta, poeta, político e advogado brasileiro.\n[…]\nAriano Vilar Suassuna nasceu em Paraíba do Norte, atual João Pessoa, no dia 16 de junho de 1927, filho de Rita de Cássia Dantas Villar e João Suassuna. Ariano foi casado com Zélia de Andrade Lima, com quem teve seis filhos.\n[…]\nSeu pai era então o presidente (seria hoje chamado de governador) do estado da Paraíba. Ariano nasceu nas dependências do Palácio da Redenção, sede do Executivo paraibano. No ano seguinte, o pai deixou o governo da Paraíba e a família passou a morar no sertão, na Fazenda Acauã, em Sousa.\n[…]\nO assassinato de João Suassuna ocorreu como desdobramento de uma briga de família no interior da oligarquia Pessoa, interrompendo a precária estabilidade política entre as famílias Dantas, Pessoa e Pessoa de Queiroz. Acarretou no assassinato de João Pessoa, governador da Paraíba e candidato a Vice-Presidente do Brasil na chapa de Getúlio Vargas por João Duarte Dantas, primo da mãe de Ariano.\n[…]\nAriano Suassuna atribuía à família Pessoa a encomenda do assassinato de seu pai, contratando o pistoleiro Miguel Laves de Souza, que atirou na vítima pelas costas, no Rio de Janeiro. Em razão disso, não concordava com a alteração do nome da cidade onde nasceu, de \"Cidade da Paraíba\" (na grafia arcaica 'Parahyba) para \"João Pessoa\", em homenagem ao governador assassinado. Toda a produção literária de Ariano, de formas variadas, retoma a morte ou homenageia o pai.\n[…]\nAriano Suassuna, In memoriam, por Victor Emanuel Vilela Barbuy, Deus Pátria e Família, São Paulo, 17 de agosto de 2014"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Morte e Vida Severina",
      "descricao": "Auto de Natal em versos de João Cabral de Melo Neto, sobre a jornada do retirante Severino."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim de Morte e Vida Severina, o retirante pensa em se atirar no Capibaribe, mas é interrompido pela notícia de quê?",
    "resposta": "Do nascimento de uma criança",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Morte_e_Vida_Severina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Morte_e_Vida_Severina",
        "situacao": "ok",
        "texto": "Morte e Vida Severina é um livro de poema regionalista e modernista do escritor brasileiro João Cabral de Melo Neto, escrito entre 1954 e 1955 e publicado em 1955.\n[…]\nMorte e Vida Severina em Desenho Animado é uma versão audiovisual da obra prima de João Cabral de Melo Neto, adaptada para os quadrinhos pelo cartunista Miguel Falcão. Preservando o texto original, a animação é 3D.\n[…]\nEm preto e branco, fiel à aspereza do texto e aos traços dos quadrinhos, a animação narra a dura caminhada de Severino, um retirante nordestino, que migra do sertão para o litoral pernambucano em busca de uma vida melhor.\n[…]\nA primeira representação de Morte e Vida Severina se deu com um grupo de teatro do Pará em 1957. A peça foi ensaiada e montada pela primeira vez em Belém pelo grupo Norte Teatro Escola, e depois foi levada para o I Festival Nacional de Teatro de Estudantes, em Recife (1957), sendo promovido por Paschoal Carlos Magno. A montagem foi premiada, tendo o ator Carlos Miranda, intérprete de Severino, obtido o primeiro prêmio como revelação de ator.\n[…]\nO espaço possui um movimento de deslocamento: o retirante faz a travessia da Caatinga, passando pelo Agreste, para a Zona da Mata, até chegar ao Recife, ou seja, sai da serra, mais especificamente da Serra da Costela, e vai para o litoral (mangue). Durante esse deslocamento em buscas da vida, depara-se com tantas mortes e miséria que pensa em se atirar no rio onde ele se encontrava e apressar a própria morte.\n[…]\nA história é narrada em primeira pessoa pelo personagem Severino, e é composta de monólogos e diálogos com outros personagens."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Macunaíma",
      "descricao": "Romance modernista de Mário de Andrade publicado em 1928, sobre o herói sem nenhum caráter."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que exclamação, repetida desde a infância pelo herói sem nenhum caráter, virou a marca registrada de Macunaíma?",
    "resposta": "Ai, que preguiça!",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Macunaíma_(livro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Macunaíma_(livro)",
        "situacao": "ok",
        "texto": "Macunaíma, o herói sem nenhum caráter é um livro publicado em 1928 pelo polímata brasileiro Mário de Andrade, considerado a sua obra-prima.\n[…]\n— Ai! que preguiça! ...\n[…]\n\"No geral meus atos e trabalhos são muito conscientes por demais para serem artísticos. Macunaíma não. Resolvi escrever porque fiquei desesperado de comoção lírica quando lendo o Koch-Grünberg percebi que Macunaíma era um herói sem nenhum caráter nem moral nem psicológico, achei isso enormemente comovente nem sei porquê, de certo modo pelo ineditismo do fato, ou por ele concordar um bocado com a nossa época, não sei...\"\n[…]\nCaracterísticas de Macunaíma como a preguiça, a libertinagem, a ganância, o egoísmo, o imediatismo, acabaram aglutinando-se em uma imagem negativa do brasileiro, como se estivessem presentes de maneira generalizada entre a população, de modo a constituir um verdadeiro caráter coletivo.\n[…]\n— Aqui é o Buraco de Maria Pereira. Macunaíma soltou uma grande gargalhada e escafedeu enquanto a mulher amoitava outra vez. O herói seguiu de carreira e enfim passou pra outra banda do rio Chuí. Foi lá que topou com o tuiuiú pescando.\n[…]\nA temática sexual é onipresente na narrativa. Desde a infância do herói, uma das suas principais atividades e interesses é o sexo, e já no terceiro parágrafo do texto isso já se declara: \"No mucambo si alguma cunhatã se aproximava dele pra fazer festinha, Macunaíma punha a mão nas graças dela, cunhatã se afastava. Nos machos guspia na cara\", e pouco depois ocorre sua efetiva iniciação, quando no meio da mata se transforma em \"príncipe lindo\" para se relacionar com Sofará, mulher de Jiguê.\n[…]\nMacunaíma, 1ª edição, em pdf."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Os Sertões",
      "descricao": "Livro de Euclides da Cunha publicado em 1902 sobre a Guerra de Canudos."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Numa de suas frases mais célebres, Euclides da Cunha escreveu em Os Sertões que o sertanejo é, antes de tudo, o quê?",
    "resposta": "Um forte",
    "distratores": [
      "Um sofredor",
      "Um crente",
      "Um esquecido"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Sertões"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Sertões",
        "situacao": "ok",
        "texto": "Os Sertões é um livro do escritor e jornalista brasileiro Euclides da Cunha, publicado em 1902. É considerado como o primeiro livro-reportagem brasileiro.\n[…]\nEuclides da Cunha deixou claro em Os Sertões seu ponto de vista no que se refere ao racismo. Como a maioria dos de sua época, acreditava numa \"raça superior\" e em sua íntima relação com os de pele clara. Acreditava no embranquecimento dos brasileiros, evitando a miscigenação com \"raças inferiores\" para que se pudesse manter uma certa \"estabilidade\" e, assim, ter uma definição sistematizada da \"raça brasileira\".\n[…]\nEscreve, por exemplo: \"Intentamos esboçar, palidamente embora, ante o olhar de futuros historiadores, os traços atuais mais expressivos das sub-raças sertanejas do Brasil. E fazemo-lo porque a sua instabilidade de complexos, aliada às vicissitudes históricas e deplorável situação mental em que jazem, as tornam talvez destinadas a próximo desaparecimento ante as exigências crescentes da civilização\".\n[…]\nO determinismo julgava que o homem é produto do meio (geografia), da raça (hereditariedade) e do momento histórico (cultura). O autor faz uma análise da psicologia do sertanejo e de seus costumes; é uma descrição feita pelo sociólogo e antropólogo Euclides da Cunha, que mostra o habitante do lugar, sua relação com o meio, sua gênese etnológica, seu comportamento, crença e costume; mas depois se fixa na figura de Antônio Conselheiro, o líder de Canudos.\n[…]\nTexto completo de Os sertões\n[…]\nArtigo Afinal, do que trata o livro Os Sertões?\n[…]\n«Juízos críticos: Os sertões : Campanha de Canudos». Biblioteca Brasiliana Guita e José Mindlin. Consultado em 8 de julho de 2023"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Quincas Borba",
      "descricao": "Romance de Machado de Assis publicado em livro em 1891, sobre o professor Rubião, herdeiro do filósofo Quincas Borba."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Que filosofia, resumida na frase ao vencedor, as batatas, é criada pelo personagem Quincas Borba, de Machado de Assis?",
    "resposta": "Humanitismo",
    "distratores": [
      "Positivismo",
      "Sebastianismo",
      "Darwinismo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quincas_Borba",
      "https://pt.wikipedia.org/wiki/Humanitismo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quincas_Borba",
        "situacao": "ok",
        "texto": "Quincas Borba é um romance escrito por Machado de Assis, desenvolvido em princípio como folhetim na revista A Estação, entre os anos de 1886 e 1891 para, em 1892, ser publicado definitivamente pela Livraria Garnier. No processo de adaptação de folhetim para livro o autor realizou algumas mudanças mínimas, mas significativas.\n[…]\nAo contrário do romance anterior, no entanto, Quincas Borba foi escrito em terceira pessoa, a fim de contar a história de Rubião, ingênuo rapaz que torna-se discípulo e herdeiro do filósofo Quincas Borba, personagem do romance anterior, e que, sendo enganado por seu amigo capitalista Cristiano e sua esposa Sofia, paixão de Rubião, vive na pele todo o fundamento teórico do Humanitismo, filosofia fictícia daquele filósofo.\n[…]\nQuincas Borba, um dos que mais interesse têm despertado em novas edições e traduções para outras línguas, está entre os principais livros da obra machadiana.\n[…]\nPedro Rubião de Alvarenga, ex-professor primário, torna-se, em Barbacena, enfermeiro e discípulo do filósofo Quincas Borba, que lhe apresenta o Humanitismo, em que a razão do homem é sempre buscar viver e que a sobrevivência depende muitas vezes de saber vencer os outros. Borba falece no Rio de Janeiro, em casa de Brás Cubas. Rubião é nomeado herdeiro universal do filósofo, sob condição de cuidar de seu cachorro, também chamado Quincas Borba.\n[…]\nEnlouquecido, pensa ser o imperador francês Napoleão III e morre agonizante, dizendo: Guardem a minha coroa […] Ao vencedor…, repetindo a frase \"ao vencedor, as batatas\" de Quincas Borba, que contou uma história em que duas tribos lutam por um campo de batatas mas cujos frutos só abastecem uma das tribos que não divide as batatas com a outra porque, caso o fizesse, segundo o filósofo, estariam sujeitas a desnutrição."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Humanitismo",
        "situacao": "ok",
        "texto": "Humanitismo é nome da filosofia fictícia criada por Joaquim Borba dos Santos, o Quincas Borba, um dos mais célebres personagens de Machado de Assis, que é exposta fundamentalmente no romance Quincas Borba e de forma secundária em Memórias Póstumas de Brás Cubas.\n[…]\n— Quincas Borba, Capítulo VI\n[…]\nO \"Humanitismo\" do filósofo Quincas Borba expõe as dúvidas e perguntas do discípulo e as respostas rápidas e prontas do mestre, em oposição à maiêutica socrática. Surge pela primeira vez na prosa machadiana no Capítulo 157 de Memórias Póstumas de Brás Cubas, recebendo um adendo no Capítulo 141, para comentar uma briga de cães (também é comentada bem antes, no Capítulo 109, numa conversa entre Quincas Borba e o próprio Brás Cubas).\n[…]\nA partir disso, as ideias humanitistas acompanham Brás Cubas até o final do livro. A exposição é retomada, para um novo interlocutor e de forma mais explícita, no Capítulo 6 de Quincas Borba. Rubião, este novo interlocutor, ao contrário de Cubas, que era adepto da filosofia e sempre procurava questioná-la, não compreendia suas concepções e considerava Borba um doido — passando a entender a fórmula \"ao vencedor, as batatas\" só ao retornar a sua cidade natal no fim de sua vida.\n[…]\nA filosofia de Quincas Borba afirma que a substância da qual emanam e para qual convergem todas as coisas é Humanitas, e que a inveja não passa do \"nobre sentimento\" de contemplação, nos outros, das qualidades de Humanitas. O \"Humanitismo\" enxerga a guerra como forma da seleção dos mais aptos. Humanitas se projeta por meio de quatro fases: a estática, anterior à criação; a expansiva, início das coisas; a dispersiva, surgimento do homem; e a contrativa, absorção do homem na substância original.\n[…]\nTemática de Machado de Assis"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Mário Quintana",
      "descricao": "Poeta gaúcho (1906–1994), conhecido pelos poemas curtos e pelo humor delicado."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No Poeminho do Contra, Mário Quintana diz que todos os que atravancam seu caminho passarão. E ele, o que é?",
    "resposta": "Passarinho",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mário_Quintana"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mário_Quintana",
        "situacao": "ok",
        "texto": "Mario de Miranda Quintana (Alegrete, 30 de julho de 1906 — Porto Alegre, 5 de maio de 1994) foi um poeta, tradutor e jornalista brasileiro, considerado um dos principais expoentes da segunda geração do modernismo brasileiro. Conhecido como \"o poeta das coisas simples\", sua obra poética é marcada pela linguagem simples e pela abordagem de temas cotidianos e contemplativos.\n[…]\nEm 1983, atendendo aos pedidos dos fãs gaúchos do poeta, o governo estadual do Rio Grande do Sul adquiriu o imóvel e transformou-o em centro cultural, batizado como Casa de Cultura Mario Quintana. O quarto do poeta foi reconstruído em uma de suas salas, sob orientação da sobrinha-neta Elena Quintana, que foi secretária dele de 1979 a 1994, quando ele faleceu. Segundo Mário, em entrevista dada a Edla Van Steen em 1979, seu nome foi registrado sem acento. Assim ele o usou por toda a vida.\n[…]\nEu Passarinho - São Paulo, Para gostar de ler 41 , Editora Ática, 2006 (Antologia póstuma)\n[…]\nOs Melhores Poemas de Mario Quintana (seleção e introdução de Fausto Cunha)- São Paulo, Editora Global, 1983\n[…]\nMario Quintana, Poesia Completa - Rio de Janeiro, Nova Aguilar, 2005.\n[…]\nOutros títulos traduzidos por Mário Quintana\n[…]\nSão, Quintana, quintanares.\n[…]\nCantares? Não! Quintanares!\n[…]\nO pajador Jayme Caetano Braun, dedicou ao poeta a Payada a Mario Quintana, segue abaixo um trecho da poesia:\n[…]\nE poeta é o Mario Quintana!\n[…]\nEm Pelotas, há uma escola que recebeu o nome do poeta. Em Porto Alegre, Mário Quintana é nome de um bairro da Zona Norte da cidade.\n[…]\nCasa de Cultura Mario Quintana\n[…]\n«Poemas de Mario Quintana»\n[…]\n«Antigo endereço eletrônico da Casa de Cultura Mario Quintana»\n[…]\n«Endereço eletrônico atual da Casa de Cultura Mario Quintana»\n[…]\n«Mário Quintana Tradutor - artigo de Gabriel Perissé» (PDF)\n[…]\n«Artigo intitulado \"Mario Quintana tocando a infância\"»\n[…]\n«Artigo intitulado \"Mario Quintana, um eclético sincrético na literatura brasileira\"»"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "A Paixão Segundo G.H.",
      "descricao": "Romance de Clarice Lispector publicado em 1964, monólogo de uma escultora em crise no quarto da empregada."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Num romance de Clarice Lispector, a narradora G.H. vive uma crise profunda depois de esmagar que bicho no quarto da empregada?",
    "resposta": "Uma barata",
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Paixão_Segundo_G.H.",
      "https://en.wikipedia.org/wiki/The_Passion_According_to_G.H."
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Paixão_Segundo_G.H.",
        "situacao": "ok",
        "texto": "A Paixão Segundo G.H. é um romance da escritora brasileira Clarice Lispector. O livro foi publicado em 1964.\n[…]\nO enredo trata de uma mulher identificada apenas pelas iniciais G.H., que depois de demitir a empregada e tentar limpar seu quarto, relata a perda da individualidade após ter esmagado uma barata na porta de um guarda-roupas.\n[…]\nAssim como em outras obras de Clarice, em A Paixão Segundo G.H. os fluxos de consciência permeiam o livro. Espécie de romance-enigma, fornece o lugar de sujeito à linguagem, que constrói ao redor de si um labirinto cuja saída está na essência do ser: trata-se de um longo monólogo em primeira pessoa, que se dá pelo \"jorro turbilhante e ininterrupto de linguagem\".\n[…]\nAssim, a literatura de Clarice assume uma estatura filosófica, aproximando-se, na visão de alguns, do existencialismo de Jean-Paul Sartre.\n[…]\nO momento de maior revelação se dá na cena mais famosa de romance. A barata, após perder sua casca, expele a secreção branca que aparece como sua última essência. G.H., então, a come. Estaria aí a renúncia que a personagem faz a seu próprio ser como linguagem, que, logo após o ato, entrega-se ao silêncio.\n[…]\nClarice Lispector faz o uso de metáforas durante todo o livro, conferindo arbitrariedade ao texto. Dessa forma, a obra pode ser interpretada de várias formas diferentes e depende do leitor para definição do seu significado. Segundo Olga de Sá, que estuda a obra clariceana, a escritura da autora \"deve ser entendida com o corpo, pois com ele escreve\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Passion_According_to_G.H.",
        "situacao": "ok",
        "texto": "The Passion According to G.H. (A paixão segundo G.H., Brazilian Portuguese: [a pajˈʃɐ̃w̃ seˈɡũdu ˌʒe.aˈɡa]) is a mystical novel by Brazilian writer Clarice Lispector, published in 1964. The work takes the form of a monologue by a woman, identified only as G.H., telling of the crisis that ensued the previous day after she crushed a cockroach in the door of a wardrobe.\n[…]\nThe novel was written in a quick burst at the end of 1963, following a period of difficulty in Lispector's life. \"It's strange,\" she remembered, \"because I was in the worst of situations, sentimentally as well as in my family, everything complicated, and I wrote The Passion, which has nothing to do with that.\" The novel was published in the following year by Editora do Author, which was run by Lispector's friends Rubem Braga and Fernando Sabino.\n[…]\nShortly before her death, Lispector told a reporter that of all her books G.H. was the one that \"best corresponded to her demands as a writer.\" Many critics have agreed, and few Brazilian authors have failed to comment on it, as the extensive bibliography in the UNESCO edition, edited by philosopher Benedito Nunes, indicates.\n[…]\nRonald W. Sousa, translator of the novel from Portuguese to English, re-examines the way most criticism addresses the key issue of the language dynamics of the novel. Rather than seeing the dynamics in a Romantic or avant-garde position, Sousa poses that Lispector does not seek to remake language but rather seeks to work within it. Throughout the novel,  \"G.H. explores before our eyes some of the key oppositions upon which language is built.\"\n[…]\nLevilson C. Reis. \"G. H., Janair, and the Mulata: Race and Gender in Lispector's The Passion According to G. H.\" Notes on Contemporary Literature 35.2 (2005): 7–9."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Academia Brasileira de Letras",
      "descricao": "Instituição fundada no Rio de Janeiro em 1897 para cultivar a língua e a literatura nacionais"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Tendo Machado de Assis como primeiro presidente, a Academia Brasileira de Letras foi fundada em que ano?",
    "resposta": "1897",
    "distratores": [
      "1889",
      "1902",
      "1922"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras",
        "situacao": "ok",
        "texto": "Academia Brasileira de Letras (ABL; ) GCSE • MHSE é uma instituição literária brasileira fundada na cidade do Rio de Janeiro em 20 de julho de 1897 pelos escritores Machado de Assis, Lúcio de Mendonça, Inglês de Sousa, Olavo Bilac, Afonso Celso, Graça Aranha, Medeiros e Albuquerque, Joaquim Nabuco, Teixeira de Melo, Visconde de Taunay e Ruy Barbosa. É composta por quarenta membros efetivos e perpé\n[…]\nJá na primeira reunião, Machado de Assis foi aclamado presidente.\n[…]\nEm 28 de janeiro de 1897, ocorreu a sétima e última sessão preparatória, oficializando a criação da Academia. Entre os presentes estavam grandes nomes da literatura brasileira, como Araripe Júnior, Artur Azevedo, Graça Aranha, Guimarães Passos, Inglês de Sousa, Joaquim Nabuco, José Veríssimo, Lúcio de Mendonça, Machado de Assis, Medeiros e Albuquerque, Olavo Bilac, Pedro Rabelo, Rodrigo Otávio, Silva Ramos, Raimundo Correia, Teixeira de Melo e o Visconde de Taunay.\n[…]\nOs estatutos foram assinados por Machado de Assis como presidente; Joaquim Nabuco, secretário-geral; Rodrigo Otávio, 1.º secretário; Silva Ramos, 2.º secretário; e Inglês de Sousa, tesoureiro. A sessão inaugural da Academia Brasileira de Letras ocorreu em 20 de julho de 1897, em uma sala do museu Pedagogium, na Rua do Passeio. Dezesseis acadêmicos estiveram presentes.\n[…]\nDentre os membros, é eleito aquele para presidir a academia por um período. O primeiro presidente da ABL foi Machado de Assis, eleito por aclamação e também seu \"presidente perpétuo\". Durante quase 34 anos consecutivos, Austregésilo de Athayde presidiu o Silogeu (1959-1993), imprimindo, na sua gestão, um caráter de vitaliciedade ao cargo que fugia aos princípios originais, e que foi abandonado por seus sucessores.\n[…]\nA primeira mulher eleita para a Academia Brasileira de Letras foi Rachel de Queiroz, em 1977. O regimento da instituição costumava proibir a eleição de mulheres."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Manifesto Antropófago",
      "descricao": "Manifesto de Oswald de Andrade publicado em 1928, base do Movimento Antropofágico."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em vez do calendário cristão, o Manifesto Antropófago de Oswald de Andrade é datado do ano 374 da deglutição de quem?",
    "resposta": "Do Bispo Sardinha",
    "distratores": [
      "Do Padre Anchieta",
      "De Manuel da Nóbrega",
      "De Pedro Álvares Cabral"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manifesto_Antropófago",
      "https://pt.wikipedia.org/wiki/Pero_Fernandes_Sardinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manifesto_Antropófago",
        "situacao": "ok",
        "texto": "O movimento antropofágico foi uma manifestação artística brasileira da década de 1920, fundada e teorizada pelo poeta Oswald de Andrade e pela pintora Tarsila do Amaral, ambos do estado de São Paulo. Foi enunciado no Manifesto Antropófago e divulgado através da Revista de Antropofagia.\n[…]\nO Manifesto Antropófago (ou Manifesto Antropofágico) foi um manifesto publicado em 1928 pelo poeta e polemista brasileiro Oswald de Andrade, figura-chave do movimento cultural do modernismo brasileiro e colaborador da publicação Revista de Antropofagia. Foi inspirado em \"Abaporu\", pintura de Tarsila do Amaral, artista modernista e esposa de Oswald de Andrade.\n[…]\nO manifesto fundamentou o movimento antropofágico. Lido em 1928 para seus amigos na casa de Mário de Andrade, foi publicado na Revista de Antropofagia, a qual Oswald ajudou a fundar com Raul Bopp e Antônio de Alcântara Machado, com a datação de \"ano 374 da deglutição do Bispo Sardinha\".\n[…]\nA Revista de Antropofagia foi uma publicação parte do movimento antropofágico surgida como consequência do Manifesto Antropófago escrito por Oswald de Andrade.\n[…]\nNa década de 1960, apresentados à obra de Oswald de Andrade pelo poeta concreto Augusto de Campos, o artista plástico Hélio Oiticica e o músico Caetano Veloso viram no Manifesto uma grande influência artística no movimento Tropicália. Veloso afirmou: \"a ideia de canibalismo cultural caiu como uma luva em nós, os tropicalistas.\n[…]\nEm 1990, o artista plástico brasileiro Antonio Peticov criou um mural em homenagem ao que teria sido o centenário de Andrade. A obra O Momento Antropofágico com Oswald de Andrade foi instalada na estação Republica do Metrô de São Paulo e foi inspirada em três obras de Andrade: O Perfeito Cozinheiro das Almas deste Mundo, Manifesto Antropofágico e O Homem do Povo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pero_Fernandes_Sardinha",
        "situacao": "ok",
        "texto": "Pedro Fernandes Sardinha, ou Pero Sardinha, (Setúbal, 1496 – Coruripe, 16 de junho de 1556) foi um sacerdote português, primeiro bispo do Brasil.\n[…]\n«Em uma enseada, junto a este rio, alguns anos depois, sucedeu o triste desastre do naufrágio do bispo D. Pedro Fernandes Sardinha, primeiro do Brasil, que dando nela à costa, foi cativo dos índios Caetens, cruéis e desumanos, que conforme o rito da sua gentilidade, sacrificaram à gula, e fizeram pasto de seus ventres, não só aquele santo varão, mas também a centena e tantas pessoas, gente de conta, a mais dela nobre, que lhe faziam companhia voltando ao reino de Portugal.»\n[…]\nPesquisas recentes colocam em dúvida se o bispo Sardinha teria mesmo sido devorado pelos indígenas, já que os relatos são todos marcados pela intenção de condenar os caetés e torná-los sujeitos à escravização. O principal narrador desse episódio foi o frei Vicente do Salvador; porém em outras narrativas que descrevem o incidente encontram-se controvérsias capazes de lançar dúvidas sobre a veracidade dos relatos de sua morte às mãos dos caetés.\n[…]\nO que se sabe é que a morte do bispo Sardinha serviu de pretexto aos portugueses para iniciarem uma guerra contra os caetés. Em cinco anos de conflito, os portugueses exterminaram os cerca de 80 mil caetés e passaram a colonizar a região onde eles habitavam.\n[…]\nDom Pedro Fernandes Sardinha foi sucedido na Sé Primacial do Brasil por Dom Pedro Leitão (1519-1573).\n[…]\nEm 1928, Oswald de Andrade utilizou-se do episódio para datar o Manifesto Antropofágico."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Os Sapos",
      "descricao": "Poema de Manuel Bandeira, do livro Carnaval, de 1919, que satiriza os poetas parnasianos."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Na Semana de Arte Moderna de 1922, a leitura de um poema de Manuel Bandeira que zombava dos parnasianos foi recebida com vaias. Que poema era?",
    "resposta": "Os Sapos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Sapos",
      "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Sapos",
        "situacao": "ok",
        "texto": "Os Sapos é um poema escrito por Manuel Bandeira, à moda da poesia de Jules Laforgue, lido entre vaias e gritos da plateia na Semana de Arte Moderna de 1922, tendo se convertido em um clássico da poesia moderna brasileira, citado em todos os livros didáticos sobre Literatura Brasileira do século XX.\n[…]\nConsiderado o momento mais sensacional da Semana de Arte Moderna de 1922, que se deu, na verdade, em três noites, a leitura  do poema \"Os Sapos\" ocorreu na segunda noite, quando Ronald de Carvalho leu o poema de Bandeira, que não comparecera ao teatro por motivos de saúde. O poema é uma ironia corrosiva aos parnasianos, que ainda dominavam o gosto do público brasileiro. A plateia reage através de vaias, gritos, patadas, interrompendo a sessão.\n[…]\nCom sua iconoclastia pesada, o poema, desenvolvido à moda da poesia de Jules Laforgue, incluindo além da voz de um narrador, ou eu-lírico, a voz de outros interlocutores (representando os poetas parnasianos através da voz \"dos sapos\"), delimita o fim de uma época cultural.\n[…]\nOs sapos, poema de Manuel Bandeira - transcrição completa do poema."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna",
        "situacao": "ok",
        "texto": "Semana de Arte Moderna, também chamada de Semana de 22, foi um evento cultural que ocorreu no Theatro Municipal de São Paulo de 13 a 17 de fevereiro de 1922. Contou com exposição de pinturas, esculturas e maquetes arquitetônicas, além de conferências e concertos nas noites dos dias 13, 15 e 17. Foi financiada principalmente por membros da elite paulista que haviam enriquecido com a produção cafeei\n[…]\nQuando Ronald de Carvalho lê o poema intitulado Os Sapos de Manuel Bandeira (poema criticando abertamente o parnasianismo e seus adeptos), o público faz coro atrapalhando a leitura do texto.\n[…]\nNa época, boa parte da mídia reagiu de forma conservadora ao Movimento da Semana de Arte de 1922 referindo-se aos vanguardistas como \"subversores da arte\", \"espíritos cretinos e débeis\" ou \"futuristas endiabrados\". A exceção foi o jornal Correio Paulistano, que, com o consentimento do governador de São Paulo Washington Luís, apoiou os lançamentos e críticas do movimento.\n[…]\nOs trabalhos expostos na Semana de Arte Moderna foram um esboço de reflexões que amadureceram no decorrer da década de 1920, como o combate ao Romantismo, ao Indianismo, ao Realismo, ao Parnasianismo, à métrica e o soneto, além de exaltar e propor uma recepção crítica dos postulados estéticos das vanguardas europeias, adaptando-os à realidade brasileira.\n[…]\nPara o pesquisador Tarcízio Macedo, \"gradativamente, as revisões da historiografia sobre os modernismos brasileiros mostram que a Semana de 1922 não ilustra nem o princípio muito menos o apogeu de uma renovação que cruzou décadas e até hoje suscita ecos. Cada lugar tem o seu quadro e o importante é observar justamente a riqueza e a diversidade dos modernismos no Brasil\".\n[…]\nArte moderna\n[…]\nModernismo\n[…]\nModernismo no Brasil\n[…]\nAjzenberg, Elza (2012). «A Semana de Arte Moderna de 1922». Revista de Cultura e Extensão USP: 25–29. ISSN 2316-9060. doi:10.11606/issn.2316-9060.v7i0p25-29"
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
