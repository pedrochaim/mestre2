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
      "nome": "Rachel de Queiroz",
      "descricao": "Escritora cearense (1910–2003), autora de O Quinze."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas escritoras brasileiras foi a primeira mulher a receber o Prêmio Camões, em 1993?",
    "resposta": "Rachel de Queiroz",
    "distratores": [
      "Clarice Lispector",
      "Cecília Meireles",
      "Lygia Fagundes Telles"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rachel_de_Queiroz",
      "https://en.wikipedia.org/wiki/Camões_Prize"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rachel_de_Queiroz",
        "situacao": "ok",
        "texto": "Rachel de Queiroz GOMM • GOIH (Fortaleza, 17 de novembro de 1910 – Rio de Janeiro, 4 de novembro de 2003) foi uma escritora, jornalista, tradutora, cronista e dramaturga brasileira. É considerada uma das maiores escritoras brasileiras do século XX, tendo sido uma figura pioneira no cenário literário nacional, sobretudo, na produção intelectual e criativa feminina. A escritora foi uma das primeiras\n[…]\nO critico literário brasileiro Tristão de Athayde considerava João Miguel o melhor dos quatro romances da primeira fase de Rachel de Queiroz.\n[…]\nRachel de Queiroz é considera uma das escritoras brasileiras mais importantes e influentes do século XX, sendo bastante enaltecida pela critica literária:\n[…]\nEm análise à obra de Rachel de Queiroz no seu monumental livro História da Literatura Brasileira, a historiadora literária italiana Luciana Stegagno Picchio escreve: \"Especialmente nas suas primeiras obras, Rachel de Queiroz constrói ainda tradicionalmente as suas histórias com personagens de ascendência naturalista.\n[…]\nMario de Andrade elogiando seu estilo em critica ao romance As Três Marias (1939), observara: \"Talvez não haja hoje no Brasil que escreva a língua nacional com a beleza límpida que lhe dá, (...), Rachel de Queiroz (...) Estou apenas exaltando a limpidez excepcional desta filha do luar cearense\". Mais adiante acrescentaria o escritor: \"A análise de Rachel de Queiroz é curta e incisiva à maneira de Machado de Assis\".\n[…]\nPrêmio Camões, o maior da Língua Portuguesa, 1993, sendo a primeira mulher a recebê-lo;\n[…]\nO Brasileiro Perplexo (1964)\n[…]\nTantos Anos, autobiografia (1998) (com a irmã Maria Luiza de Queiroz Salek)\n[…]\nNo dia 4 de dezembro de 2003, um mês depois de sua morte, foi lançado na Academia Brasileira de Letras o livro Rachel de Queiroz, um perfil biográfico da escritora, fruto de uma longa pesquisa realizada pela jornalista Socorro Acioli, publicado pelas Edições Demócrito Rocha."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Camões_Prize",
        "situacao": "ok",
        "texto": "The Camões Prize (Portuguese: Prémio Camões, Portuguese pronunciation: [ˈpɾɛmju kaˈmõjʃ]), named after Luís de Camões, is the most prestigious prize for literature in the Portuguese language. The prize was established in 1989 and is supported by the governments of Brazil and Portugal. It is awarded annually to the author of an outstanding body of work written in Portuguese. Winners are selected by\n[…]\nThe Camões Prize was first introduced by the Additional Protocol to the Cultural Agreement between the Government of the Portuguese Republic and the Government of the Federal Republic of Brazil, dated 7 September 1966, which creates the Camões Prize, signed in Brasilia on 22 June 1988, and approved in Portugal by Decree No. 43/88 of 30 November 1988.\n[…]\nThe Camões Prize is considered the most prestigious literary award in the Portuguese-speaking world. It is awarded for a body of work that contributes to the dissemination and recognition of Portuguese language. It is awarded annually by the Portuguese Direção-Geral do Livro, dos Arquivos e das Biblioteca (National Book, Archives and Libraries Department) and the Brazilian Fundação Biblioteca Nacional (National Library Foundation)."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Urupês",
      "descricao": "Livro de contos de Monteiro Lobato publicado em 1918, voltado ao público adulto, que popularizou o caipira Jeca Tatu."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Monteiro Lobato ficou famoso pelos livros infantis. Qual destes livros dele, lançado em 1918, foi escrito para leitores adultos?",
    "resposta": "Urupês",
    "distratores": [
      "Reinações de Narizinho",
      "Caçadas de Pedrinho",
      "Memórias da Emília"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Urupês",
      "https://pt.wikipedia.org/wiki/Monteiro_Lobato"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Urupês",
        "situacao": "ok",
        "texto": "Urupês é um município brasileiro do estado de São Paulo. Tem população de 14.073 habitantes segundo o Censo IBGE/2025. O município é formado pela sede e pelo distrito de São João do Itaguaçu, fazendo parte da Região Metropolitana de São José do Rio Preto.\n[…]\nÉ possível que o nome tenha sido atribuído em homenagem ao livro homônimo de Monteiro Lobato\n[…]\nSegundo escrevem os autores, após entrevistas com diversos moradores do já município de Urupês, presentes no acontecimento, no dia 1º de maio de 1928, após a viagem de Orestes da Silva Rosa a São Paulo para requerer que o distrito fosse elevado à condição de município junto ao Governo de Júlio Prestes, homens de Mundo Novo e Itajobi travaram uma luta armada pelas ruas da cidade no intuito de lograr êxito ou impedir à força, respectivamente, que o Distrito de Paz se tornasse município.\n[…]\nVicinal Rodovia Chafik Saab (Urupês - Catanduva)\n[…]\nVicinal Urupês - Novo Horizonte\n[…]\nVicinal Urupês - Marapoama\n[…]\nA economia de Urupês é baseada no Jeans, Limão e na agricultura em geral. A cidade possui mais de 60 fábricas de jeans, produzindo cerca de um milhão de peças por mês, e é também a segunda maior produtora de limão do Brasil. Por conta disso, o mascote da cidade é chamado de Azejeans, uma referência ao limão e ao jeans.\n[…]\nEm março de 2018, o prefeito da cidade, através de um decreto, instituiu o \"Calendário Turístico do Município de Urupês\", que estalebeu datas para as festividades da cidade:\n[…]\n2.ª quinzena de setembro: Festa do Peão de Urupês\n[…]\nMês de novembro: Mostra Gastronômica de Urupês e Encontro de Automotivos, e em alguns casos, também os Jogos de Primavera\n[…]\n«Prefeitura Municipal de Urupês - Portal Oficial»\n[…]\n«Urupês no WikiMapia»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monteiro_Lobato",
        "situacao": "ok",
        "texto": "José Bento Renato Monteiro Lobato (Taubaté, 18 de abril de 1882 – São Paulo, 4 de julho de 1948) foi um escritor, intelectual e editor literário brasileiro. Participou ativamente do pré-modernismo e modernismo brasileiro e da vida política do Brasil, sendo popularmente lembrado por sua série de livros infantis Sítio do Pica Pau Amarelo.\n[…]\nO jornal, percebendo o valor daquela carta, publicou-a fora da seção que era destinada aos leitores, no que acertou, pois a carta provocou polêmica e fez com que Lobato escrevesse outros artigos como, por exemplo, Urupês, que deu vida a um de seus mais famosos personagens, o Jeca Tatu.\n[…]\nConheceis, por ventura, o Jeca Tatu, dos  Urupês, do Monteiro Lobato, o admirável escritor paulista? Tivestes, algum dia, ocasião de ver surgir, debaixo desse pincel de uma arte rara, na sua rudeza, aquele tipo de uma raça, que, \"entre as formaduras da nossa nacionalidade\", se perpetua, \"a vegetar, de cócoras, incapaz de evolução e impenetrável ao progresso\"?!\n[…]\nPrimeiro seus livros foram publicados pela Editora da Revista do Brasil. Assim, o livro Urupês, em sua sexta edição em 1920, está registrado \"Ed. da Revista do Brasil, São Paulo, 1920\". Na última capa consta: \"Director Monteiro Lobato, Secretario Alarico Caiuby\", \"A venda em todas as livrarias e no escritório da Revista do Brasil\".\n[…]\nUrupês (1918)\n[…]\nUrupês, outros contos e coisas (1943)\n[…]\nOs livros infantis de Monteiro Lobato foram transformados em cinco séries de televisão de bastante sucesso. A primeira delas, na TV Tupi de São Paulo, foi exibida de 3 de junho de 1952 a 1962, ao vivo, pois não havia ainda o videotape. Foi adaptada pela escritora Tatiana Belinky, sendo a mais fiel ao original de todas as adaptações para a televisão. Nada restando desse programa, exceto algumas fotos, pois seus episódios não eram gravados.\n[…]\n«Site Monteiro Lobato»"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Cláudio Manuel da Costa",
      "descricao": "Poeta árcade mineiro (1729–1789), preso como participante da Inconfidência Mineira."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes poetas árcades morreu preso em Vila Rica, em 1789, acusado de participar da Inconfidência Mineira?",
    "resposta": "Cláudio Manuel da Costa",
    "distratores": [
      "Tomás Antônio Gonzaga",
      "Alvarenga Peixoto",
      "Basílio da Gama"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cláudio_Manuel_da_Costa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cláudio_Manuel_da_Costa",
        "situacao": "ok",
        "texto": "Cláudio Manuel da Costa (Vila do Ribeirão do Carmo, 5 de junho de 1729 — Vila Rica, 4 de julho de 1789) foi um poeta, advogado e magistrado luso-brasileiro, considerado um dos introdutores do Arcadismo no Brasil e um dos principais autores da literatura brasileira do século XVIII.\n[…]\nDe volta à Capitania de Minas Gerais, Cláudio Manuel da Costa consolidou-se como um dos mais respeitados advogados de Vila Rica. Sua formação jurídica em Coimbra, aliada às conexões familiares e à posição econômica que possuía, favoreceu sua rápida inserção nos círculos dirigentes da administração colonial.\n[…]\nComo integrante da Arcádia Ultramarina, Cláudio Manuel da Costa adotou o pseudônimo pastoral Glauceste Satúrnio, nome pelo qual passou a ser referido em ambientes literários e em algumas de suas composições.\n[…]\nCláudio Manuel da Costa participou da Inconfidência Mineira, conspiração articulada entre 1788 e 1789 por membros da elite da Capitania de Minas Gerais que pretendiam proclamar a independência da região em relação a Portugal.\n[…]\nCláudio Manuel da Costa foi preso em 23 de maio de 1789 e recolhido à Casa dos Contos, onde prestou depoimentos às autoridades coloniais.\n[…]\nCláudio Manuel da Costa foi preso em 23 de maio de 1789, em decorrência da devassa instaurada para investigar a Inconfidência Mineira. Após os primeiros interrogatórios, foi recolhido à Casa dos Contos, em Vila Rica.\n[…]\nA morte de Cláudio Manuel da Costa consolidou a imagem do poeta como figura trágica da cultura brasileira, associando sua trajetória literária ao desfecho dramático da Inconfidência Mineira.\n[…]\nInconfidência Mineira\n[…]\nTeixeira, Ivan (2005). Cláudio Manuel da Costa. São Paulo: Publifolha\n[…]\nMenezes, Ivo Porto de (1978). Cláudio Manuel da Costa e a Inconfidência Mineira. Belo Horizonte: Itatiaia"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Quincas Borba",
      "descricao": "Romance de Machado de Assis publicado em livro em 1891, sobre o professor Rubião, herdeiro do filósofo Quincas Borba."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Machado de Assis gostava de narradores que falam de si mesmos. Qual destes romances dele é narrado em terceira pessoa?",
    "resposta": "Quincas Borba",
    "distratores": [
      "Dom Casmurro",
      "Memórias Póstumas",
      "Memorial de Aires"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quincas_Borba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quincas_Borba",
        "situacao": "ok",
        "texto": "Quincas Borba é um romance escrito por Machado de Assis, desenvolvido em princípio como folhetim na revista A Estação, entre os anos de 1886 e 1891 para, em 1892, ser publicado definitivamente pela Livraria Garnier. No processo de adaptação de folhetim para livro o autor realizou algumas mudanças mínimas, mas significativas.\n[…]\nAo contrário do romance anterior, no entanto, Quincas Borba foi escrito em terceira pessoa, a fim de contar a história de Rubião, ingênuo rapaz que torna-se discípulo e herdeiro do filósofo Quincas Borba, personagem do romance anterior, e que, sendo enganado por seu amigo capitalista Cristiano e sua esposa Sofia, paixão de Rubião, vive na pele todo o fundamento teórico do Humanitismo, filosofia fictícia daquele filósofo.\n[…]\nQuincas Borba, um dos que mais interesse têm despertado em novas edições e traduções para outras línguas, está entre os principais livros da obra machadiana.\n[…]\n\"Em Quincas Borba recupera-se a narração em terceira pessoa para melhor objetivar o nascimento, a paixão e a morte de um provinciano ingênuo. Rubião, herdeiro improvisado de uma grande fortuna, cai nos laços de um casal ambicioso; a mulher, a ambígua Sofia, vendo-o rico e desfrutável, dá-lhe esperanças, mas se abstém cautelosamente de realizá-las ao perceber no apaixonado traços de crescente loucura.\n[…]\n\"Em Quincas Borba, em que o motivo da dissimulação já preludia D. Casmurro, a arte machadiana se compraz na retórica do subentendido. Nesse estilo velado, impera a metonímia: o registro dos efeitos sugere as causas, sem explicitá-las. Por exemplo: o constrangimento ambíguo de Palha, quando Sofia lhe conta a declaração de amor que lhe fez Rubião, transparece na lacônica referência ao seu gesto.\""
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Senhora",
      "descricao": "Romance urbano de José de Alencar publicado em 1875, sobre Aurélia Camargo, que compra um marido."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes romances de José de Alencar se passa na alta sociedade do Rio de Janeiro, longe das matas e dos sertões?",
    "resposta": "Senhora",
    "distratores": [
      "Iracema",
      "Ubirajara",
      "O Sertanejo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Senhora_(livro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Senhora_(livro)",
        "situacao": "ok",
        "texto": "Senhora é romance urbano do escritor brasileiro José de Alencar, publicado em 1874, na forma de folhetim.\n[…]\nUm dos últimos romances de Alencar, lançado em livro em 1875, dois anos antes da morte do escritor. Da mesma forma que Iracema é o coroamento da ficção indianista, Senhora é, juntamente com Lucíola, um dos pontos altos da sua ficção citadina e de atualidade. Romance de final feliz é o último desenvolvimento — agora em clave de maior densidade psicológica — do motivo do conflito entre o amor e o interesse, presente desde os primeiros livros, notadamente A viuvinha.\n[…]\n“Com Senhora […] o romancista escarafunchou um território delicado, o das relações amorosas convertidas em econômicas, cujo leme escorrega das mãos masculinas para se encaixar nas femininas de Aurélia Camargo.”\n[…]\nAurélia Camargo (Senhora) — Mulher diferente de todas as outras que naquela época viviam. Destacava-se pela sua beleza e pela sua maneira de agir e de pensar. Opunha-se a algumas regras determinadas pela sociedade que não lhe agradavam. Aurélia a todos pode dominar e tem tudo o que quer ter. Era educada, delicada, corajosa, elegante, informada, inteligente, experiente.\n[…]\nA primeira foi exibida pela TV Paulista em 1953, intitulada Senhora.\n[…]\nA extinta Rede Tupi produziu e exibiu a segunda telenovela, também de nome Senhora, em 1962.\n[…]\nEm 2005, Marcílio Moraes e Rosane Lima somaram à espinha dorsal de Senhora a dois outros romances de José de Alencar, Lucíola e Diva, para escrever Essas Mulheres, produzida pela RecordTV e exibida entre 2 de maio e 21 de outubro de 2005, totalizando 149 capítulos.[carece de fontes]?"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Papéis Avulsos",
      "descricao": "Coletânea de contos de Machado de Assis publicada em 1882, que inclui O Alienista."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas obras de Machado de Assis é uma coletânea de contos, e não um romance?",
    "resposta": "Papéis Avulsos",
    "distratores": [
      "Helena",
      "Iaiá Garcia",
      "A Mão e a Luva"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Papéis_Avulsos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Papéis_Avulsos",
        "situacao": "ok",
        "texto": "Papéis avulsos é um livro de contos do escritor Machado de Assis, lançado em 1882, embora alguns críticos literários considerem “O Alienista” mais uma novela do que propriamente um conto. Foi o terceiro livro de contos publicado por Machado de Assis, “a mais notável coletânea de Machado, a mais original e radical”.\n[…]\nO escritor e crítico literário Carlos de Laet assim anunciou o lançamento de Papéis Avulsos: “Abram vossas excelências e senhorias lugar na sua biblioteca para mais um bom e espirituoso livro do sr. Machado de Assis: — Papéis avulsos — reunião de contos e artigos humorísticos, alguns dos quais já foram devidamente apreciados, quando figuraram no rodapé das folhas diárias favorecidas pela colaboração do distinto escritor.”\n[…]\nA versão original desse conto precursor do “surrealismo’’ do século XX foi publicada em A Época de 14 de novembro de 1875 sob o pseudônimo Manassés, a versão incluída nos Papéis Avulsos tendo sido consideravelmente modificada. Essa versão preliminar foi incluída por R. Magalhães Júnior em sua coletânea Contos e Crônicas de textos inéditos de Machado de Assis.\n[…]\nA versão original desse conto foi publicada no Jornal das Famílias de outubro de 1876 sob o pseudônimo Victor de Paula, a versão incluída nos Papéis Avulsos tendo sido bastante modificada. Essa versão preliminar foi incluída por R. Magalhães Júnior em sua coletânea Contos Esparsos de textos inéditos de Machado de Assis.\n[…]\nEntre Papéis Avulsos e papéis sociais: a narrativa como experimentação literária e crítica da sociedade nos contos de Machado de Assis, dissertação de mestrado de Rodrigo Sampaio Nogueira\n[…]\nPapéis Avulsos (download)\n[…]\nMACHADIANA ELETRÔNICA v. 8, n. 15, jan.-jun. 2025 dedicada a Papéis Avulsos (download)"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Capitães da Areia",
      "descricao": "Romance de Jorge Amado publicado em 1937, sobre um grupo de meninos de rua de Salvador."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Capitães da Areia, de Jorge Amado, quem é o líder loiro do bando de meninos que dorme num trapiche abandonado de Salvador?",
    "resposta": "Pedro Bala",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capitães_da_Areia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capitães_da_Areia",
        "situacao": "ok",
        "texto": "Capitães da Areia é um romance do escritor brasileiro Jorge Amado, escrito em 1937 e publicado no mesmo ano. A obra retrata a vida de um grupo de menores abandonados que vivem nas ruas da cidade de Salvador, abrigando-se em um trapiche e sobrevivendo por meio de pequenos furtos. Esses jovens, marginalizados pela sociedade, são conhecidos como os \"Capitães da Areia\".\n[…]\nAo contrário de outros grupos espalhados pela cidade, os Capitães da Areia têm um líder, seguem normas e, principalmente, obedecem a um chefe que cumpre o papel de \"manter um lar\" para as crianças que ali vivem. Pedro Bala, quase naturalmente surge como um líder e tem o papel de harmonizar, manter a ordem e, de certa maneira, ensiná-los a agir sob certas circunstâncias. Com quinze anos, audaz, ativo e conhecedor de todos os recantos da cidade, é marcado por uma cicatriz e por seus cabelos loiros.\n[…]\nPedro Bala abandona a liderança do grupo, transferindo-a para Barandão, mas antes os transforma numa espécie de grupo de choque. Assim Pedro Bala deixa de ser o líder dos Capitães da Areia e se torna um líder revolucionário comunista.\n[…]\nCaboclo Raimundo, ex-líder dos Capitães da Areia antes de Pedro Bala. Foi ele que cortou o rosto de Pedro Bala, mas logo vai embora do grupo;\n[…]\nLoiro, pai de Pedro Bala, com o nome Raimundo, porém não confundir com o ex-líder; seu codinome ficou \"loiro\" líder nas greves antigas ao lado de João-de-Adão. Foi assassinado pela Polícia durante uma de suas greves;\n[…]\nAlberto, estudante que se torna amigos dos Capitães da Areia;\n[…]\nBedel Ranulfo, bedel do reformatório onde estava Pedro Bala.\n[…]\nEm 1987 Adolfo Moreira Cavalcante escreveu o cordel Pedro Bala, o chefe dos Capitães da Areia, onde reconta com críticas sociais a saga do líder dos meninos abandonados, dizendo que Amado \"...baseou-se em fatos muito reais, no menor abandonado, verdadeiros marginais\"."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Grupo dos Cinco",
      "descricao": "Grupo de artistas e escritores modernistas paulistas formado em 1922 por Anita Malfatti, Tarsila do Amaral, Mário de Andrade, Oswald de Andrade e Menotti del Picchia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Grupo dos Cinco, núcleo do Modernismo paulista, reunia Tarsila do Amaral, Anita Malfatti, Mário e Oswald de Andrade. Quem era o quinto integrante?",
    "resposta": "Menotti del Picchia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Grupo_dos_Cinco"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Grupo_dos_Cinco",
        "situacao": "desambiguacao",
        "texto": "Grupo dos Cinco, G5, g5, G.5 ou G-5 pode referir-se a:\n\nGrupo dos Cinco (Rússia) — grupo de compositores russos nacionalistas liderados por Mily Balakirev\nGrupo dos Cinco (Brasil) — grupo de artistas da Arte Moderna Brasileira\nG5 — união de cinco países em desenvolvimento\nP5+1 — grupo de negociações sobre o programa nuclear do Irã\nAliança Cinco Olhos — aliança de países para ações de inteligência "
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Sítio do Picapau Amarelo",
      "descricao": "Universo ficcional criado por Monteiro Lobato, o sítio de Dona Benta onde vivem Narizinho, Pedrinho, Emília e outros personagens."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nas histórias do Sítio do Picapau Amarelo, de Monteiro Lobato, que animal africano é o manso Quindim, que acaba morando com a turma?",
    "resposta": "Rinoceronte",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sítio_do_Picapau_Amarelo",
      "https://pt.wikipedia.org/wiki/Caçadas_de_Pedrinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sítio_do_Picapau_Amarelo",
        "situacao": "ok",
        "texto": "Sítio do Picapau Amarelo é uma série de 23 volumes de literatura fantástica, escrita pelo autor brasileiro Monteiro Lobato (entre 1920 e 1947). A obra tem atravessado gerações e geralmente representa a literatura infantil do Brasil.\n[…]\nAs Caçadas de Pedrinho - 1933 (reedição de \"A Caçada da Onça\", com a história aumentada, contando o aparecimento do rinoceronte Quindim)\n[…]\nSítio do Picapau Amarelo, assim como o trabalho geral de Monteiro Lobato, também recebeu comentários negativos de políticos brasileiros, que se queixaram de que seu trabalho era \"antipatriota\", e que falando mal do governo para crianças foi \"indelicado\". Lobato respondeu que \"era importante\" para ele \"transmitir o seu espírito crítico através de suas histórias, e que \"as pessoas estavam habituadas a mentir para seus filhos, dizendo que o Brasil era um país realmente maravilhoso\".\n[…]\nEm novembro de 2006, devido ao termino do contrato entre Editora Globo e Mauricio de Sousa Produções, e tendo sido firmado contrato entre Mauricio de Sousa e a Panini Comics para a distribuição das revistas da Turma da Mônica pelos próximos anos, a Editora Globo lançou três revistas em quadrinhos mensais do Sítio do Picapau Amarelo no lugar das revistas da Mônica: Sítio do Picapau Amarelo, revista com os personagens do Sítio em várias aventuras, Revista da Cuca, com histórias protagonizadas pela bruxa Cuca, e  Você Sabia?\n[…]\nSítio do Picapau Amarelo, revista com os personagens ensinando várias temas de aprendizagem. Em agosto de 2019, com os livros de Monteiro Lobato entrando em domínio público, foi lançado um projeto de financiamento coletivo no Catarse intitulado Rancho do Corvo Dourado, uma releitura de ficção científica do Sítio.\n[…]\nSítio do Picapau Amarelo (2006)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caçadas_de_Pedrinho",
        "situacao": "ok",
        "texto": "Caçadas de Pedrinho é um livro infantil escrito por Monteiro Lobato e publicado em 1933.\n[…]\nO livro relata uma descoberta do Marquês de Rabicó: uma onça anda rondando as proximidades do Sítio do Picapau Amarelo. Pedrinho e Narizinho decidem então organizar uma expedição para caçar a fera, mas sem avisar Dona Benta ou Tia Nastácia, que com certeza se oporiam à aventura. Após a caçada da onça, eles encontram Quindim, um rinoceronte falante, e decidem trazê-lo para morar no sítio.\n[…]\nNesta aventura também somos apresentados a menina Cléo, personagem inspirada na filha de um amigo e sócio de Monteiro Lobato.\n[…]\nCaçadas de Pedrinho teve origem no livro A Caçada da Onça, escrito em 1924 por Monteiro Lobato. Mais tarde o autor resolveu ampliar a história com o nome que conhecemos hoje.\n[…]\nO capítulo \"O assalto das onças\" indica que a história de passa antes do conto Cara de Coruja, enquanto o capítulo \"Emília vende o rinoceronte\" indica que se passa após o conto \"Pó de Pirlimpimpim\", de Reinações de Narizinho.\n[…]\nEmília vende o rinoceronte\n[…]\nRinoceronte familiar\n[…]\nQuindim\n[…]\nFerreira, Filipe Augusto Chamy Amorim (2022). «Caçadas de Pedrinho ou a guerra de comandos e símbolos» (PDF). In:  Santana-Dezmann, Vanete; Milton, John; D'Onofrio, Silvio Tamaso. Monteiro Lobato: Novos Estudos. III Jornada Monteiro Lobato. Alemanha: Oxalá Editora. pp. 67–83. ISBN 9783946277644"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Memórias Póstumas de Brás Cubas",
      "descricao": "Romance de Machado de Assis narrado por um defunto, lançado em livro em 1881."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Logo na abertura de suas memórias, o defunto Brás Cubas as dedica, como saudosa lembrança, a quem?",
    "resposta": "Ao verme que primeiro roeu seu cadáver",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Memórias_Póstumas_de_Brás_Cubas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Memórias_Póstumas_de_Brás_Cubas",
        "situacao": "ok",
        "texto": "Memórias Póstumas de Brás Cubas é um romance escrito por Machado de Assis, desenvolvido em princípio como folhetim, de março a dezembro de 1880, na Revista Brasileira, para, no ano seguinte, ser publicado como livro, pela então Tipografia Nacional como Memorias Posthumas de Braz Cubas.\n[…]\nNarrado em primeira pessoa, seu autor é Brás Cubas, um \"defunto-autor\", isto é, um homem que já morreu e que deseja escrever a sua autobiografia. Nascido numa típica família da elite carioca do século XIX, do túmulo o morto escreve suas memórias póstumas começando com uma \"Dedicatória\": Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas memórias póstumas.\n[…]\nMarcela, cortesã espanhola e primeiro caso amoroso de Brás Cubas.\n[…]\nO livro é permeado por intertextualidade e ironias. O segundo recurso logo nota-se na \"Dedicatória\" de Brás Cubas ao verme que primeiro roeu as frias carnes do meu cadáver. A ironia é vista como uma forma de \"revolta pela vida\" usada por Machado para fazer rir, quando como por exemplo Brás Cubas escreve: a sabedoria humana não vale um par de botas curtas [...] Tu, minha Eugênia, é que não as descalçaste nunca à personagem que era coxa de nascença, num célebre exemplo de humor negro.\n[…]\nCapistrano de Abreu, em resenha de sua autoria, perguntava-se: \"As Memórias Póstumas de Brás Cubas serão um romance?\" E continua:\n[…]\nAs modificações mais significativas que ocorreram da passagem de folhetim para livro publicado tinham sido somente a introdução do famoso preâmbulo, assinado por Brás Cubas e denominado \"Ao Leitor\", e a substituição de uma epígrafe retirada de uma comédia de Shakespeare pela dedicatória ao primeiro verme que roeu as frias carnes do meu cadáver.\n[…]\n«Memórias Póstumas de Brás Cubas». Consultado em 2 de junho de 2020"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Primeiras Estórias",
      "descricao": "Livro de contos de Guimarães Rosa publicado em 1962, que inclui A Terceira Margem do Rio."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que conto de Primeiras Estórias, de Guimarães Rosa, narra a história de um pai que passa a viver numa canoa, sem nunca mais sair do rio?",
    "resposta": "A Terceira Margem do Rio",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Primeiras_Estórias",
      "https://pt.wikipedia.org/wiki/A_Terceira_Margem_do_Rio"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Primeiras_Estórias",
        "situacao": "ok",
        "texto": "Primeiras Estórias é um livro de contos de João Guimarães Rosa publicado em 1962 pela Livraria José Olympio Editora e, desde então, por diversas editoras. Contém 21 contos que se passam, em sua maioria, em um ambiente rural não específico, espelhando situações e temas particulares e universais.\n[…]\nA maioria dos relatos em Primeiras Estórias, embora apenas pretendam narrar \"casos do sertão\", apresentam uma síntese da totalidade da existência dos protagonistas, as estórias de Rosa tentam vencer a rotina, ultrapassar o peso do quotidiano e da miséria através do riso, do olhar lúdico e da ressurreição do momento presente; predominam ainda epifanias afirmativas e positivas associadas ao bem e ao amor.\n[…]\nMuitas personagens de Primeiras estórias acham-se privadas de saúde, de recursos materiais, de posição social e até mesmo do pleno uso da razão. Pelos esquemas de uma lógica social moderna, estritamente capitalista, só lhes resta esperar a miséria, a abjeção, o abandono, a morte. O narrador, cujo olho perspicaz nada perde, não poupa detalhes sobre o seu estado de carência extrema.\n[…]\n\"A Terceira Margem do Rio\"\n[…]\nEm 1999, o livro Primeiras Estórias foi adaptado para o cinema por Pedro Bial como o filme Outras Estórias,  O filme se baseou em cinco contos do livro Primeiras Estórias: \"Famigerado\", \"Os irmãos Dagobé\", \"Nada e nossa condição\", \"Substância\" e \"Soroco, sua mãe, sua filha\". Todavia, não se trata de transposição de uma obra literária para o cinema, mas, antes, de uma concepção dela enquanto possibilidade cinematográfica."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Terceira_Margem_do_Rio",
        "situacao": "ok",
        "texto": "\"A Terceira Margem do Rio\" é o conto mais famoso e uma das obras mais influentes de Guimarães Rosa, publicado em seu livro Primeiras Estórias, lançado em 1962.\n[…]\nSobre a oralidade, o crítico literário Paulo Rónai, em artigo de fevereiro de 1966 sobre os contos de Primeiras Estórias e a obra geral de Guimarães Rosa, observa que os contos de Primeiras Estórias \"porejam modismos e fórmulas que estamos habituados a ouvir na boca de pessoas do povo e que, em seu frusto vigor, dão à fala popular sabor e energia deliciosos\", destacando, por exemplo, as frases de \"A Terceira Margem do Rio\": \"Nosso pai nada não dizia.\", \"Do que eu mesmo me alembro\", \"Nossa casa, no tempo, ainda era mais próxima do rio, obra de nem quarto de légua\", \"perto e longe de sua família dele\", \"avisado que nem Noé\".\n[…]\nNa mesma esteira, inclusive utilizando-se teoricamente de Hansen, Bárbara Del Rio, em \"A Poética Moderna em 'A Terceira Margem do Rio', de João Guimarães Rosa\", expõe rapidamente a diversa fortuna histórico-crítica da obra de Guimarães Rosa e de Primeiras Estórias, empenhando-se em demonstrar que, em Rosa e em \"A Terceira Margem do Rio\", os dispositivos de \"indeterminação\" do sentido e de elementos narrativos da história configuram uma \"poética moderna\" que contradiz as leituras transcendentais ou místicas recorrentes nas interpretações do conto.\n[…]\nA canção \"A Terceira Margem do Rio\", com música de Milton Nascimento e letra de Caetano Veloso, foi lançada em 1990, explicitamente a partir do conto homônimo de Guimarães Rosa. A canção está na faixa 09 do álbum Txai (1990), de Milton Nascimento, e também na faixa 09 do álbum Circuladô (1991), de Caetano Veloso."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Versos Íntimos",
      "descricao": "Soneto de Augusto dos Anjos, do livro Eu, de 1912, que começa com Vês! Ninguém assistiu ao formidável enterro de tua última quimera."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No soneto Versos Íntimos, de Augusto dos Anjos, o poeta avisa ao amigo que o beijo é a véspera de quê?",
    "resposta": "Do escarro",
    "fonte": [
      "https://pt.wikisource.org/wiki/Versos_Íntimos",
      "https://pt.wikipedia.org/wiki/Augusto_dos_Anjos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikisource.org/wiki/Versos_Íntimos",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Augusto_dos_Anjos",
        "situacao": "ok",
        "texto": "Augusto de Carvalho Rodrigues dos Anjos (Sapé, 20 de abril de 1884 – Leopoldina, 12 de novembro de 1914) foi um poeta e professor brasileiro reconhecido como um dos principais expoentes do simbolismo e do pré-modernismo brasileiro. Sua obra é marcada pela versificação considerada imprópria para a época, pela crítica à hipocrisia social e à ética cristã e pelo pessimismo cientificista e existencial\n[…]\nAugusto dos Anjos nasceu no Engenho Pau d'Arco, atualmente no município de Sapé, estado da Paraíba. Foi educado nas primeiras letras pelo pai e estudou no Lyceu Paraibano, onde viria a ser professor em 1908. Precoce poeta brasileiro, compôs os primeiros versos aos 7 anos de idade.\n[…]\nA obra de Augusto dos Anjos pode ser dividida, não com rigor, em três fases, a primeira sendo muito influenciada pelo simbolismo e sem a originalidade que marcaria as posteriores. A essa fase pertencem Saudade e Versos Íntimos. A segunda possui o caráter de sua visão de mundo peculiar. Um exemplo dessa fase é o soneto Psicologia de um Vencido. A última corresponde à sua produção mais complexa e madura, que inclui Ao Luar.\n[…]\nNem é à toa que no livro A poética carnavalizada de augusto dos anjos o crítico constate como em todo o EU e no soneto “Vencedor” há um poeta atormentado em instaurar uma nova civilização brasileira, quem assombrará ao mundo por meio de o seu novo estatuto dado à palavra feia e fedorenta como a cloaca que alimenta à hiena, animal desvairado que ainda assim sorrir.\n[…]\nNem é à toa também que o poeta de EU, Augusto dos Anjos, explore em sua poética expressões tétricas como \"Evangelho da podridão\", \"verme\", \"matéria em decomposição\", “cloaca”, \"escarro\", “miséria”, “grito”, “horrenda”, “alegre” e \"sangue\". Todavia tudo junto e misturado às palavras alegres da literatura carnavalizada, que vai abrindo à cena inaugural da miséria nacional por meio dum estranho circo de horrores."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "O Tempo e o Vento",
      "descricao": "Trilogia de romances de Erico Verissimo, publicada entre 1949 e 1962, sobre a formação do Rio Grande do Sul através da família Terra Cambará."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A trilogia O Tempo e o Vento, de Erico Verissimo, começa com O Continente e termina com O Arquipélago. Qual é o volume do meio?",
    "resposta": "O Retrato",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Tempo_e_o_Vento"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Tempo_e_o_Vento",
        "situacao": "ok",
        "texto": "O Tempo e o Vento é uma trilogia de romances históricos do escritor gaúcho Érico Veríssimo, publicada entre 1949 e 1962, e considerada por muitos a maior obra da literatura brasileira do século XX.\n[…]\nComposta por O Continente (1949), O Retrato (1951) e O Arquipélago (1961–1962), a trilogia narra dois séculos de história do Rio Grande do Sul, da fundação das Missões Jesuíticas e da chegada dos primeiros colonos ao \"Continente de São Pedro\" em 1745 até o fim do Estado Novo em 1945, por meio da saga de múltiplas gerações das famílias Terra, Cambará e Amaral na cidade fictícia de Santa Fé.\n[…]\nSó em 1947 Érico retomaria o projeto original, e a escrita de O Continente, primeiro volume da trilogia, duraria dois anos. No total, o processo de escrita se estenderia de 1947 até 1962, quando o último volume de O Arquipélago foi publicado, quinze anos depois do início.\n[…]\nA última parte da trilogia foi lançada onze anos após O Retrato, quando os meios literários já não mais esperavam a continuação de O Tempo e o Vento, devido à frágil saúde de Érico, convalescente de um ataque cardíaco.\n[…]\nO Retrato é o volume mais filosófico da trilogia. Nos diálogos entre os personagens Rodrigo Cambará, o Tenente Rubim Veloso e o Coronel Jairo Bittencourt, Érico incorpora ao romance os três grandes sistemas de pensamento que dominaram a intelectualidade brasileira entre o fim do século XIX e o início do XX: o positivismo de Augusto Comte, o evolucionismo social de Spencer e o conceito de super-homem de Nietzsche.\n[…]\nO Tempo e o Vento (2013)\n[…]\nUFRGS — Vento em tempo de solidão: análise comparada de O Tempo e o Vento e Cem Anos de Solidão\n[…]\nPUC-SP — Vento em tempo de solidão: a saga dos Buendía e dos Terra-Cambará"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pauliceia Desvairada",
      "descricao": "Livro de poemas de Mário de Andrade publicado em 1922, um dos marcos do Modernismo brasileiro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O livro de poemas Pauliceia Desvairada, de Mário de Andrade, abre com um texto que explica a nova poética e tem um título bem-humorado. Qual?",
    "resposta": "Prefácio Interessantíssimo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pauliceia_Desvairada"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pauliceia_Desvairada",
        "situacao": "ok",
        "texto": "Pauliceia Desvairada é uma coleção de poemas de Mário de Andrade, publicada em 1922. Foi a segunda coleção de poesia de Andrade e a mais polêmica e influente. O uso livre da métrica por Andrade introduziu ideias modernistas europeias revolucionárias na poesia brasileira, que antes era estritamente formal.\n[…]\n\"Pauliceia \" é o apelido de São Paulo, cidade natal de Andrade e cidade em que o livro foi publicado. Nos poemas individuais da coleção, Andrade ocasionalmente se refere à cidade como \"Pauliceia\". A tradução de Jack E. Tomlins, a única em inglês, é intitulada Hallucinated City. A coleção se passa em São Paulo e está ligada à cidade de inúmeras formas, tanto artística quanto historicamente.\n[…]\nNão há dúvida de que Brecheret e os demais jovens artistas e escritores do círculo de Andrade - principalmente Oswald de Andrade, Anita Malfatti, Emiliano Di Cavalcanti e Menotti del Picchia - influenciaram o desenvolvimento do livro. Foi escrito, como a obra-prima modernista paralela The Waste Land, ao contrário: Andrade explica no prefácio que ele começou com uma obra muito longa, escrita apressadamente e um tanto desestruturada que foi gradualmente reduzida ao seu estado final.\n[…]\nAndrade leu vários desses poemas durante a Semana de Arte Moderna, em fevereiro de 1922, que ele organizou em colaboração com Di Cavalcanti, Malfatti, e vários outros. Ele também leu um ensaio, escrito depois que os poemas foram concluídos, descrevendo sua base teórica em retrospecto; este ensaio foi publicado como uma introdução à coleção, com o título irônico de \"Prefácio Extremamente Interessante\". O tom é irreverente e combativo e o ensaio traça um uso livremente musical dos versos.\n[…]\nAndrade, Mário de. Paulicéia Desvairada. São Paulo: Casa Mayença, 1922."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Auto da Compadecida",
      "descricao": "Peça teatral de Ariano Suassuna, de 1955, protagonizada por João Grilo e Chicó."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Auto da Compadecida, João Grilo convence o padre e o bispo a fazer um enterro em latim para quem?",
    "resposta": "A cachorra da mulher do padeiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Auto_da_Compadecida"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Auto_da_Compadecida",
        "situacao": "ok",
        "texto": "Auto da Compadecida é uma peça teatral em forma de auto, em três atos, escrita pelo autor brasileiro Ariano Suassuna em 1955. Sua primeira encenação aconteceu em 1956, no Recife, em Pernambuco. A peça também foi encenada em 1974, com direção de João Cândido. Em 2 de outubro de 1957 a peça foi publicada em forma de livro pela editora Agir no Rio de Janeiro.\n[…]\nDa literatura de cordel, Suassuna pegou emprestado o personagem João Grilo, personagem folclórico presente tanto no Brasil, quanto em Portugal. Também buscou inspiração em dois folhetos de Leandro Gomes de Barros (1865-1918), O Dinheiro, também chamado de O testamento do cachorro e O cavalo que defecava dinheiro.\n[…]\nO Auto da Compadecida projetou Suassuna em todo o país e foi considerada por Sábato Magaldi, em 1962, \"o texto mais popular do moderno teatro brasileiro\".\n[…]\nA peça foi adaptada para o cinema pela primeira vez em 1969, com o filme A Compadecida. A segunda adaptação veio em 1987, com o filme Os Trapalhões no Auto da Compadecida.\n[…]\nAuto da Compadecida foi encenada pela primeira vez no dia 11 de setembro de 1956, no Teatro de Santa Isabel, pelo Teatro Adolescente do Recife, sob direção de Clênio Wanderley, figurino de Victor Moreira e cenários de Aloísio Magalhães, tendo como elenco os seguintes atores:\n[…]\nJoão Grilo: Agildo Ribeiro\n[…]\nPadeiro: Jammal\n[…]\nMulher do padeiro: Giulia Piske\n[…]\nPadre João: Sandoval Cavalcanti\n[…]\nBispo: Luís\n[…]\nJoão Grilo: Armando Bógus\n[…]\nPadeiro: Taran Dach\n[…]\nMulher do padeiro: Cici Pinheiro\n[…]\nPadre João: Felipe Carone\n[…]\nBispo: Thales Maia\n[…]\nA Compadecida: Córdula Reis\n[…]\nA Compadecida (filme de 1969)\n[…]\nOs Trapalhões no Auto da Compadecida (filme de 1987)\n[…]\nO Auto da Compadecida (minissérie de 1999)\n[…]\nO Auto da Compadecida (filme de 2000)\n[…]\nO Auto da Compadecida (teatro de 2017)\n[…]\nO Auto da Compadecida 2 (filme de 2024)\n[…]\nO Auto da Compadecida, montagem do Grupo Maria Cutia (2025)"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Tríade Parnasiana",
      "descricao": "Nome dado aos três principais poetas do Parnasianismo brasileiro: Olavo Bilac, Raimundo Correia e Alberto de Oliveira."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Ao lado de Olavo Bilac e Raimundo Correia, que poeta completava a chamada Tríade Parnasiana?",
    "resposta": "Alberto de Oliveira",
    "distratores": [
      "Vicente de Carvalho",
      "Francisca Júlia",
      "Cruz e Sousa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Alberto_de_Oliveira",
      "https://pt.wikipedia.org/wiki/Parnasianismo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Alberto_de_Oliveira",
        "situacao": "ok",
        "texto": "Antônio Mariano Alberto de Oliveira (Saquarema, 28 de abril de 1857 — Niterói, 19 de Janeiro de 1937), mais conhecido como Alberto de Oliveira, foi um poeta, professor e farmacêutico brasileiro. Figura como líder do parnasianismo brasileiro, integrando, junto com Raimundo Correia e Olavo Bilac, a chamada tríade parnasiana brasileira.\n[…]\nMário de Andrade, rancoroso pela rejeição dos parnasianos ao seu livro parnasiano Há uma gota de sangue em cada poema (1917), se empenha em retaliar o velho estilo, cuja principal vítima era o poeta de Saquarema, como se vê nos ensaios \"Mestres do Passado\", publicados no Jornal do Commercio em 1921 e na \"Carta Aberta a Alberto de Oliveira\", publicada na Revista Estética no. 3, em 1925.\n[…]\nA produção poética de Alberto de Oliveira foi publicada ao longo de várias décadas, em livros autônomos, séries sucessivas e edições revistas, refletindo a consolidação do Parnasianismo no Brasil. Uma apresentação detalhada da organização editorial, das séries poéticas e dos principais núcleos temáticos de sua poesia encontra-se no verbete Obra poética de Alberto de Oliveira.\n[…]\nDANTAS, Olavo. A glória de Alberto de Oliveira. Rio de Janeiro: Do Autor, 1994.\n[…]\nVERÍSSIMO, José. O Parnasianismo no Brasil; O Sr. Alberto de Oliveira. in: ---. Estudos de literatura brasileira. Belo Horizonte: Itatiaia/ São Paulo: Edusp, 1977. (2a e 6a séries)\n[…]\nREIS, Marco Aurélio Mello. Leitura de Alberto de Oliveira. in: OLIVEIRA, Alberto de. Poesias completas (ed. crítica de Marco Aurélio Mello Reis). Rio de Janeiro: Eduerj, 1978.\n[…]\nJUNQUEIRA, Ivan. A face erótica de Alberto de Oliveira. in: ---. À sombra de Orfeu. Rio de Janeiro: Nórdica, 1984.\n[…]\nAlberto de Oliveira fundou a cadeira 8 da Academia Brasileira de Letras, escolhendo como patrono o inconfidente Cláudio Manuel da Costa, mártir da liberdade."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parnasianismo",
        "situacao": "ok",
        "texto": "O Parnasianismo foi uma escola literária essencialmente poética, contemporânea do Realismo e do Naturalismo. Os poetas dessa corrente almejavam produzir uma poesia perfeita, baseando-se num ideal de arte pela arte (l'art pour l'art) e em padrões rígidos de versificação. A corrente principal surgiu na França a partir de 1866, por meio da revista Le Parnasse Contemporain, que incluia autores como Le\n[…]\nUma escola semelhante surgiu no mundo anglófono a partir de autores como Alfred Tennyson e Henry Longfellow. Em Portugal, seus principais expoentes foram João Penha, Gonçalves Crespo e António Feijó. No Brasil, foram Olavo Bilac, Alberto de Oliveira e Raimundo Correia, que formaram a chamada \"tríade parnasiana brasileira\".\n[…]\nDessa maneira, a década de 1880 abriu-se para a poesia científica, a socialista e a realista, primeiras manifestações da reforma que acabou por se canalizar para o Parnasianismo. As influências iniciais foram Gonçalves Crespo e Artur de Oliveira, este o principal propagandista do movimento a partir de 1877, quando chegou de uma estada em Paris. Alberto de Oliveira publicou \"Canções Românticas\" em 1878 e Teófilo Dias, \"Cantos Tropicais\", dois dos marcos iniciais da nova Escola.\n[…]\nDe um começo tímido nos versos de Luís Guimarães Júnior (Sonetos e rimas. 1880) e Teófilo Dias (Fanfarras. 1882), firmou-se definitivamente com Raimundo Correia (Sinfonias. 1883), novamente Alberto de Oliveira (Meridionais. 1884), Olavo Bilac (Relicário. 1888) e Francisca Júlia da Silva (Mármores, 1895).\n[…]\nAlém de Alberto de Oliveira, Raimundo Correia e Olavo Bilac, que configuraram a chamada tríade parnasiana, o movimento teve outros grandes poetas no Brasil, como   Luís Delfino, Bernardino Lopes, Guimarães Passos, Carlos Magalhães de Azeredo, Goulart de Andrade, Artur Azevedo, Adelino Fontoura, Emílio de Meneses, Antônio Augusto de Lima, Luís Murat.\n[…]\nOLIVEIRA, Alberto. 20 sonetos"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Torto Arado",
      "descricao": "Romance de Itamar Vieira Junior publicado em 2019, sobre as irmãs Bibiana e Belonísia numa fazenda da Chapada Diamantina."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Torto Arado, de Itamar Vieira Junior, começa quando as irmãs Bibiana e Belonísia encontram, escondido na mala da avó, que objeto?",
    "resposta": "Uma faca",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Torto_Arado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Torto_Arado",
        "situacao": "ok",
        "texto": "Torto Arado é um romance brasileiro de 2019 escrito pelo autor baiano Itamar Vieira Junior. Conta a história de duas irmãs, Bibiana e Belonísia, marcadas por um acidente de infância, e que vivem em condições de trabalho escravo contemporâneo em uma fazenda no sertão da Chapada Diamantina. O romance foi originalmente publicado em Portugal, pela editora Leya, após vencer o prêmio de mesmo nome. No B\n[…]\nNas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó. Ocorre então um acidente. E para sempre suas vidas estarão ligadas — a ponto de uma precisar ser a voz da outra. Numa trama conduzida com maestria e com uma prosa melodiosa, o romance conta uma história de vida e morte, de combate e redenção.\n[…]\nAntes de publicar Torto Arado, Itamar Vieira Junior já havia publicado duas coletâneas de contos: Dias (2012), lançado pela Caramurê Publicações, e A Oração do Carrasco (2017), lançado pelo selo Mondrongo e finalista do Prêmio Jabuti. Funcionário público do Instituto Nacional de Colonização e Reforma Agrária (INCRA), parte da inspiração do romance surgiu do contato que Vieira Junior teve com comunidades quilombolas da Bahia no trabalho e em sua pesquisa de doutorado.\n[…]\nTambém de acordo com Vieira Junior, o romance teve como influências iniciais autores regionalistas da chamada Geração de 30 do Modernismo no Brasil como Jorge Amado, Graciliano Ramos e Rachel de Queiroz. O autor também cita como influência autores como Machado de Assis, Clarice Lispector, Lima Barreto, Carolina Maria de Jesus e Raduan Nassar. Este último, inclusive, tem um trecho de seu romance Lavoura Arcaica utilizado como epígrafe em Torto Arado.\n[…]\nDesde sua publicação, e mesmo antes, o romance Torto Arado já ganhou diversos prêmios, entre eles:"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Capitu",
      "descricao": "Personagem de Dom Casmurro, de Machado de Assis, amiga de infância e depois esposa de Bento Santiago."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Dom Casmurro, o agregado José Dias diz que Capitu tem olhos de cigana oblíqua e dissimulada. Bentinho prefere chamá-los de olhos de quê?",
    "resposta": "De ressaca",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capitu",
      "https://pt.wikipedia.org/wiki/Dom_Casmurro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capitu",
        "situacao": "ok",
        "texto": "Maria Capitolina de Pádua Santiago (Capitu, como é conhecida) é uma personagem do livro Dom Casmurro de Machado de Assis (1839–1908), publicado em 1899. A personagem de Capitu deu origem a diversos estudos psicológicos e literários.\n[…]\nO ciumento Bento Santiago, o Bentinho e mais tarde Casmurro, seu esposo, conjecturava o caráter dela. Em suas palavras: “criatura de quatorze anos, alta, forte e cheia, apertada em um vestido de chita, meio desbotado. Os cabelos grossos, feitos em duas tranças, com as pontas atadas uma à outra, à moda do tempo, desciam-lhe pelas costas. Morena, olhos claros e grandes, nariz reto e comprido, tinha a boca fina e o queixo largo.\n[…]\nFoi pelos olhos profundos e inexplicáveis, diferentes conforme as circunstâncias, que Capitu se consagrou, deixando na literatura brasileira uma marca inconfundível: \"olhos de cigana oblíqua e dissimulada\" ou \"olhos de ressaca\" (descrição influenciada pela opinião de sua mãe, tia e um agregado, que não desejavam o casamento), segundo o parecer do marido.\n[…]\nDe fato, a grandeza de Capitu nos seduz e se torna um exemplo de força e coragem.\n[…]\nCapitu, conhecida por seus \"olhos de ressaca\" e Bentinho com sua insegurança em relação à ninfa (como a chama no primeiro beijo do casal), nos faz lembrar dos nossos próprios medos e receios. O livro propõe um questão: era ela inocente da acusação de traição?\n[…]\nO compositor paulista Luiz Tatit compôs uma canção intitulada Capitu, gravada por Zélia Duncan e Ná Ozzetti que, apesar do título, refere-se a uma internauta que usa o nome de Capitu.\n[…]\nGOMES, Eugênio. O enigma de Capitu.\n[…]\nCASTRO, Manuel Antônio de. O enigma \"É\": Capitu ou Dom Casmurro?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dom_Casmurro",
        "situacao": "ok",
        "texto": "Dom Casmurro é um romance escrito por Machado de Assis, publicado em 1899 pela Livraria Garnier. Escrito para publicação em livro, o que ocorreu em 1900 – embora com data do ano anterior, ao contrário de Memórias Póstumas de Brás Cubas (1881) e Quincas Borba (1891), escritos antes em folhetins –, é considerado pela crítica o terceiro romance da \"Trilogia Realista\" de Machado de Assis, ao lado dess\n[…]\nAlguns críticos preferem chamar este gênero de \"realismo psicológico\", por apresentar o interior, o pensamento, a ausência da ação aliada à densidade psicológica e filosófica. No entanto, também há em Dom Casmurro resíduos românticos, como a metáfora erótica em relação a Capitu, descrita com \"olhos de cigana oblíqua e dissimulada\".\n[…]\nOutros ainda o veem como um romance policial, onde o leitor teria que investigar os pormenores das ações desconfiando das visões do narrador para chegar a uma conclusão sobre a veracidade do adultério, já que \"desde o início há incongruências, passos obscuros, ênfases desconcertantes, que formam um enigma.\" Entre essas pistas estariam: a metáfora dos \"olhos de ressaca\" e dos \"olhos de cigana oblíqua e dissimulada\", o paralelo com o drama shakespeariano de Otelo e Desdêmona, a aproximação com a ópera do tenor Marcolini (o duo, o trio e o quatuor), as \"semelhanças esquisitas\", as relações com Escobar no seminário, a lucidez de Capitu e o obscurantismo de Bentinho, a imaginação delirante e perversa do ex-seminarista, o preceito bíblico do Eclesiastes no final do livro.\n[…]\nUma das provas do argumento de Gledson encontra-se no Capítulo 3, que ele considera ser a \"base do romance\", na motivação de José Dias ao falar da família de Capitu e lembrar a D. Glória a promessa que ela fez de botar Bentinho no Seminário, ou seja, tratando a \"gente do Pádua\" como inferior e sua filha como uma menina dissimulada e pobre que pode corromper o garoto."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Capitu",
      "descricao": "Personagem de Dom Casmurro, de Machado de Assis, amiga de infância e depois esposa de Bento Santiago."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Capitu, a moça dos olhos enigmáticos de Dom Casmurro, é o apelido de que nome de batismo?",
    "resposta": "Capitolina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capitu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capitu",
        "situacao": "ok",
        "texto": "Maria Capitolina de Pádua Santiago (Capitu, como é conhecida) é uma personagem do livro Dom Casmurro de Machado de Assis (1839–1908), publicado em 1899. A personagem de Capitu deu origem a diversos estudos psicológicos e literários.\n[…]\nDe fato, a grandeza de Capitu nos seduz e se torna um exemplo de força e coragem.\n[…]\nCapitu, conhecida por seus \"olhos de ressaca\" e Bentinho com sua insegurança em relação à ninfa (como a chama no primeiro beijo do casal), nos faz lembrar dos nossos próprios medos e receios. O livro propõe um questão: era ela inocente da acusação de traição?\n[…]\nO assunto da 'culpa' ou 'inocência' de Capitu é fonte de permanente discussão. No romance, o foco narrativo está centrado em Bento Santiago, o Dom Casmurro, favorecendo, portanto sua visão de que ela seria, de fato, adúltera. A escritora Lygia Fagundes Telles, por exemplo, que chegou a publicar artigo demonstrando a culpa de Capitu, em 2009 declarou ter percebido, afinal, que Capitu era inocente.\n[…]\nAdaptações para cinema: Capitu (1968) de Paulo César Saraceni, Dom (2003) de Moacyr Góes, Capitu e o Capítulo (2023) de Julio Bressane; para teatro: Criador e criatura - o encontro de Machado e Capitu (1999) de Flávio Aguiar e Ariclê Perez, Capitu (1999) de Marcus Vinícius Faustini; para ópera: Dom Casmurro (1992) de Ronaldo Miranda e Orlando Codá ; Microssérie para TV: Capitu (Rede Globo - 2008)\n[…]\nO compositor paulista Luiz Tatit compôs uma canção intitulada Capitu, gravada por Zélia Duncan e Ná Ozzetti que, apesar do título, refere-se a uma internauta que usa o nome de Capitu.\n[…]\nGOMES, Eugênio. O enigma de Capitu.\n[…]\nCASTRO, Manuel Antônio de. O enigma \"É\": Capitu ou Dom Casmurro?"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Dona Flor e Seus Dois Maridos",
      "descricao": "Romance de Jorge Amado publicado em 1966, sobre uma professora de culinária de Salvador e seus dois maridos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Dona Flor e Seus Dois Maridos, qual é a profissão do segundo marido, o metódico doutor Teodoro, que toca fagote nas horas vagas?",
    "resposta": "Farmacêutico",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dona_Flor_e_Seus_Dois_Maridos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dona_Flor_e_Seus_Dois_Maridos",
        "situacao": "ok",
        "texto": "Dona Flor e Seus Dois Maridos é um dos romances mais conhecidos do escritor brasileiro Jorge Amado, membro da Academia Brasileira de Letras, que o lançou em junho de 1966 e fora levado com êxito ao cinema, ao teatro e à televisão.\n[…]\nIntercalando as aulas de culinária, há os suspiros da viúva pelo marido morto, que se lembra, cada vez mais constantemente, das qualidades de ótimo amante de Vadinho e dos poucos momentos de luxo que lhe propiciara, quando ganhava no jogo. Ao mesmo tempo, ela é cortejada por um pretendente, Teodoro, um farmacêutico pacato e religioso. Os dois acabam se casando. Mas, de idade um pouco avançada e bastante conservador, ele não consegue satisfazer Dona Flor, que cada vez mais se lembra de Vadinho.\n[…]\nI – Da morte de Vadinho, primeiro marido de Dona Flor, do velório e do enterro de seu corpo (ao cavaquinho o sublime Carlos Mascarenhas).\n[…]\nII – Do tempo inicial da viuvez, tempo de nojo, do luto fechado, com as memórias de ambições e enganos, de namoro e casamento, da vida matrimonial de Vadinho e Dona Flor, com fichas e dados e a dura espera agora sem esperança (com Edgard Cocô ao violino, Caymmi ao violão e o doutor Wlater da Silveira com sua flauta encantada).\n[…]\nIV – Da vida de Dona Flor, em ordem e em paz, sem sobressaltos nem desgostos, com seu segundo e bom marido, no mundo da farmacologia e da música de amadores, brilhando nos salões, e o coro dos vizinhos a lhe recordar sua felicidade (com Doutor Teodoro Madureira num solo de fagote).\n[…]\nPágina de Dona Flor e Seus Dois Maridos no site Jorge Amado.com."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Hilda Hilst",
      "descricao": "Poeta, romancista e dramaturga paulista (1930–2004), autora de Com meus olhos de cão e fundadora da Casa do Sol."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Casa do Sol, perto de Campinas, Hilda Hilst passou anos gravando ruídos de rádio em fitas, convencida de que conseguia captar o quê?",
    "resposta": "Vozes dos mortos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hilda_Hilst"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hilda_Hilst",
        "situacao": "ok",
        "texto": "Hilda de Almeida Prado Hilst, mais conhecida como Hilda Hilst, (Jaú, 21 de abril de 1930 – Campinas, 4 de fevereiro de 2004) foi uma escritora, poeta, ficcionista, cronista e dramaturga brasileira.\n[…]\nDepois da leitura do livro Carta a El Greco, do escritor grego Nikos Kazantzakis, Hilda decidiu afastar-se da vida agitada de São Paulo e, em 1964, passou a viver na sede da fazenda de sua mãe, próxima a Campinas, durante a construção da sua casa numa parte daquela propriedade. Em 1966, findos os trabalhos da construção, Hilda mudou-se para sua Casa do Sol, casa planejada detalhadamente pela autora para ser um espaço de inspiração e criação artística.\n[…]\nHilda Hilst escreveu por quase cinquenta anos, tendo sido agraciada com os mais importantes prêmios literários do Brasil. Em 1962, recebeu o Prêmio PEN Clube de São Paulo, por Sete Cantos do Poeta para o Anjo (Massao Ohno Editor, 1962). Em 1966, ao mudar-se para a Casa do Sol, passou a viver com o escultor Dante Casarini. Em setembro do mesmo ano, morreu seu pai.\n[…]\nApós seu falecimento, Mora Fuentes liderou a criação do Instituto Hilda Hilst. O IHH tem como primeira missão a manutenção da Casa do Sol, seu acervo e o espírito de ser um porto seguro para a criação intelectual.\n[…]\nDr. Alcir Pécora e visita guiada na Casa do Sol com a equipe do Instituto Hilda Hilst.\n[…]\nEm 1957, Hilda namorou o ator americano Dean Martin, e até o final da vida praticava a transcomunicação instrumental (ciência que pesquisa a comunicação entre vivos e mortos através de aparelhos eletrônicos como telefone, rádio, televisão e computador).\n[…]\nVersões iniciais do primeiro sítio de Hilda Hilst arquivadas no WayBackMachine.\n[…]\nOcupação Hilda Hilst - Itaú Cultural"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Carolina Maria de Jesus",
      "descricao": "Escritora mineira (1914–1977), autora de Quarto de Despejo, diário de sua vida na favela do Canindé, em São Paulo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes do sucesso do seu diário, de que trabalho Carolina Maria de Jesus tirava o sustento dos filhos na favela paulistana?",
    "resposta": "Catadora de papel",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carolina_Maria_de_Jesus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carolina_Maria_de_Jesus",
        "situacao": "ok",
        "texto": "Carolina Maria de Jesus (Sacramento, 14 de março de 1914 – São Paulo, 13 de fevereiro de 1977) foi uma escritora, cantora, compositora e poetisa brasileira. Uma das primeiras escritoras negras do Brasil, De Jesus é considerada uma das mais importantes escritoras do país, de tal modo que sua obra e vida permanecem objetos de diversos estudos, tanto no Brasil quanto no exterior.\n[…]\nDe Jesus viveu boa parte de sua vida na favela do Canindé, atualmente um bairro da Zona Central de São Paulo, sustentando a si mesma e seus três filhos trabalhando como catadora de papéis.\n[…]\nEm 1949, aos 33 anos, desempregada e novamente grávida, instalou-se na extinta favela do Canindé, na zona norte de São Paulo — num momento em que surgiam na cidade as primeiras favelas — cujo contingente de moradores estava em torno de cinquenta mil. De Jesus construiu sua própria casa, usando madeira, lata, papelão e qualquer material que pudesse encontrar. Saía todas as noites para coletar papel, a fim de conseguir dinheiro para sustentar a família.\n[…]\nAo mesmo tempo em que trabalhava como catadora, registrava o cotidiano da comunidade onde morava nos cadernos que encontrava no material que recolhia, que somavam mais de vinte. Um desses cadernos, um diário que havia começado em 1955, deu origem a seu livro mais famoso, Quarto de Despejo: Diário de uma Favelada, publicado em 1960.\n[…]\nLogo depois de se mudar para Parelheiros, De Jesus parou de receber os pagamentos de direitos autorais. Tinha tão pouco dinheiro que, assim fizera na favela do Canindé, ela e seus filhos passavam certos dias catando papéis e garrafas para vender: agora, contudo, usava o dinheiro de catadora para comprar refrigerantes e bilhetes de cinema. De tempos em tempos, entregava a uma vendedora local os abacates, bananas e mandiocas que produzia para serem vendidos num mercado local.\n[…]\nCarolina Maria de Jesus no Google Scholar"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Jorge Amado",
      "descricao": "Escritor brasileiro baiano (1912–2001), autor de Gabriela, Cravo e Canela e Capitães da Areia."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Eleito deputado federal pelo Partido Comunista em 1945, Jorge Amado foi autor da emenda constitucional que garantiu que liberdade?",
    "resposta": "Liberdade de culto religioso",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jorge_Amado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jorge_Amado",
        "situacao": "ok",
        "texto": "Jorge Leal Amado de Faria (Itabuna, 10 de agosto de 1912 – Salvador, 6 de agosto de 2001) foi um dos mais famosos e traduzidos escritores brasileiros de todos os tempos, sendo o autor mais adaptado para o cinema, teatro e televisão. É responsável por sucessos como Dona Flor e Seus Dois Maridos, Tenda dos Milagres, Tieta do Agreste, Gabriela, Cravo e Canela e Capitães da Areia.\n[…]\nIntegrou os quadros da intelectualidade comunista brasileira desde o final da primeira metade do século XX — ideologia presente em várias obras, da saga política Os Subterrâneos da Liberdade à biografia O Cavaleiro da Esperança (sobre o revolucionário Luís Carlos Prestes), passando pela retratação dos moradores do trapiche baiano em Capitães da Areia.\n[…]\nFiliado ao Partido Comunista Brasileiro (PCB), por ele foi eleito deputado federal em 1946, tendo seu mandato cassado quando a legenda foi posta na ilegalidade pelo governo do presidente Gaspar Dutra.\n[…]\nEm 1946 foi eleito deputado federal pelo Partido Comunista Brasileiro (PCB) em São Paulo, o que lhe rendeu fortes pressões políticas. Como deputado, foi o autor da emenda que garantiu a liberdade religiosa devido a ter visto o sofrimento dos que seguiam cultos africanos bem como protestantes no Ceará serem saqueados por fanáticos com uma cruz à frente — buscou assinaturas até conseguir a aprovação da sua emenda, e desde então a liberdade religiosa tornou-se lei.\n[…]\nMesmo dizendo-se materialista, Jorge Amado era um praticante da Umbanda e do Candomblé – religião esta última na qual exercia o posto de honra de Obá de Xangô no Ilê Axé Opô Afonjá, do qual muito se orgulhava. Amigos que Amado prezava no Candomblé eram as mães-de-santo Mãe Aninha, Mãe Senhora, Mãe Menininha do Gantois, Mãe Stella de Oxóssi, Mãe Olga do Alaqueto, Mãe Mirinha do Portão, Mãe Cleusa Millet, Mãe Carmem e o pai-de-santo Luís da Muriçoca.\n[…]\nFundação Casa de Jorge Amado"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Vidas Secas",
      "descricao": "Romance de Graciliano Ramos publicado em 1938, sobre uma família de retirantes no sertão nordestino."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Vidas Secas, de Graciliano Ramos, a cachorra da família tem nome. Que traço curioso têm, ao contrário dela, os dois filhos de Fabiano e Sinhá Vitória?",
    "resposta": "Não têm nome",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vidas_Secas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vidas_Secas",
        "situacao": "ok",
        "texto": "Vidas Secas é um influente e importante romance do escritor brasileiro Graciliano Ramos, escrito entre 1937 e 1938, publicado originalmente em '38 pela antológica Livraria José Olympio Editora, hoje editado pela Editora Record, e considerado por muitos como a maior obra do autor.\n[…]\nVidas Secas retrata a vida de pessoas que vivem no sertão brasileiro e o sacrifício delas para sobreviver. Tendo como tema a luta pela sobrevivência diante do flagelo da estiagem, Graciliano Ramos traz em seus personagens muito da existência nordestina. Os principais personagens são: Fabiano, sinha Vitória, Menino mais velho, Menino mais novo, a cachorra Baleia e o papagaio, que serve de alimento providencial que a família come para aliviar a fome.\n[…]\nO narrador de Vidas Secas é em terceira pessoa, onisciente e onipresente, e com inúmeras passagens com discurso indireto livre. O romance de Graciliano evita frases enunciativas comuns do tipo \"Fabiano pensou que...\" ou \"Sinha Vitória imaginava que...\", transformando o discurso indireto em discurso indireto livre, como no seguinte exemplo, em que não é o narrador em si quem diz, mas a própria personagem que conversa consigo mesma:\n[…]\n\"A obra de Graciliano Ramos firma-se, cada vez mais, como um dos marcos da literatura brasileira. Críticos e público são conscientes de que essa obra é imperecível, perfeita de forma e conteúdo. Dentre os romances de Graciliano, Vidas Secas se distingue pela original apresentação de episódios isolados, verdadeiros contos, e pela narração direta. Fabiano, Sinha Vitória e os filhos pertencem inelutavelmente, com suas vidas amargadas, à paisagem árida do sertão nordestino.\"\n[…]\nVidas Secas - Graciliano Ramos - Cr$ 10,00\n[…]\nEm Cuba, desde 1964: Vidas Secas\n[…]\nLivros de Graciliano Ramos\n[…]\nVidas Secas - www.graciliano.com.br"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Iracema",
      "descricao": "Romance indianista de José de Alencar publicado em 1865."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "José de Alencar descreve Iracema, a virgem dos lábios de mel, com cabelos mais negros que a asa de que pássaro?",
    "resposta": "Graúna",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Iracema",
      "https://pt.wikisource.org/wiki/Iracema"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Iracema",
        "situacao": "ok",
        "texto": "Iracema (originalmente, Iracema: Lenda do Ceará) é um romance brasileiro publicado em 1865 e escrito por José de Alencar que faz parte da trilogia indianista do autor. Os outros dois romances pertencentes à trilogia são O Guarani e Ubirajara.\n[…]\nEm Iracema, Alencar criou uma lenda mitológica e poética para as origens de sua terra natal, o Ceará, conhecida como \"a terra onde canta a jandaia\". Por este mesmo motivo, a o título completo da obra é \"Iracema: Lenda do Ceará\". A história se inicia com o encontro entre a indígena Iracema, do povo tabajara, e um homem branco de olhos azuis chamado Martim.Iracema, a virgem dos lábios de mel, que tinha os cabelos mais negros que a asa da graúna, e mais longos que seu talhe de palmeira.\n[…]\nAraquém: pajé do povo tabajara. Pai de Iracema e Caubi.\n[…]\nJapi: cão de Martim. \"Japi\" é um dos nomes dados à espécie de pássaros Cacicus cela.\n[…]\nHá uma falsa etimologia popular que atribui o nome \"Iracema\" como sendo um anagrama da palavra \"América\", mas o próprio autor, José de Alencar, desmentiu o boato e explicou a real inspiração por trás do nome. Em uma nota de rodapé na primeira edição do romance, o autor afirma que o nome tem origem na língua tupi e significa \"lábios de mel\", pois \"Iracema\" seria a junção das palavras \"ira\" (mel) e \"tembé\" (lábios).\n[…]\nO romance foi adaptado em 1917 como um filme mudo dirigido por Vittorio Capellaro e estrelado por Iracema de Alencar, e em 1949 como um filme dirigido por Vittorio Cardineli e Gino Talamo, estrelado por Ilka Soares. Em 1979, lançou-se o filme Iracema, a Virgem dos Lábios de Mel, dirigido pelo cineasta Carlos Coimbra.\n[…]\nEm 2017, a escola de samba Beija-Flor apresentou o enredo \"A Virgem dos lábios de mel - Iracema\", baseado no livro."
      },
      {
        "url": "https://pt.wikisource.org/wiki/Iracema",
        "situacao": "ok",
        "texto": "projetos   irmãos : verbete   na   Wikipédia , categoria   no   Commons , item   Wikidata .\n[…]\nObtida de \" https://pt.wikisource.org/w/index.php?title=Iracema&oldid=536515 \""
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Olavo Bilac",
      "descricao": "Poeta parnasiano carioca (1865–1918), autor da letra do Hino à Bandeira."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1907, numa votação promovida pela revista Fon-Fon, Olavo Bilac foi eleito com que título de nobreza poética?",
    "resposta": "Príncipe dos Poetas Brasileiros",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Olavo_Bilac"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Olavo_Bilac",
        "situacao": "ok",
        "texto": "Olavo Brás Martins dos Guimarães Bilac (Rio de Janeiro, 16 de dezembro de 1865 – Rio de Janeiro, 28 de dezembro de 1918), mais conhecido como Olavo Bilac, foi um poeta, jornalista, cronista e contista brasileiro. Alcunhado \"príncipe dos poetas brasileiros\", é considerado o principal autor do parnasianismo no país. Junto com Alberto de Oliveira e Raimundo Correia, integrou a chamada \"tríade parnasi\n[…]\nAliás, sua participação na vida cotidiana e cultural foi uma marca patente em sua imagem: sabe-se, por exemplo, que em 1897 Bilac acabou perdendo o controle do seu automóvel Serpollet e o bateu contra uma árvore na Estrada da Tijuca, no Rio de Janeiro - RJ, sendo o primeiro motorista a sofrer um acidente de carro no Brasil.\n[…]\nAos poucos profissionaliza-se: produz, além de poemas, textos publicitários, crônicas, livros escolares e poesias satíricas. Visava, então, contar através de seus manuscritos a realidade presente na sua época. Prestou colaboração em publicações periódicas como as revistas: A Imprensa (1885-1891), A Leitura (1894-1896), Branco e Negro (1896-1898), Brasil-Portugal (1899-1914), Azulejos (1907-1909) e Atlântida (1915-1920).\n[…]\nÉ como poeta Bilac que se imortalizou. Foi eleito Príncipe dos Poetas Brasileiros pela revista Fon-Fon em 1907. Juntamente com Alberto de Oliveira e Raimundo Correia, foi a maior liderança e expressão do Parnasianismo no Brasil, constituindo a chamada Tríade Parnasiana. A publicação de Poesias, em 1888 rendeu-lhe a consagração.\n[…]\nA lista a seguir apresenta os principais livros publicados por Olavo Bilac. Para uma descrição detalhada da organização de sua poesia, das séries editoriais e dos livros exclusivamente poéticos, ver Obra poética de Olavo Bilac.\n[…]\nJardim Olavo Bilac\n[…]\n«Perfil no sítio oficial da Academia Brasileira de Letras»\n[…]\n«Poemas de Olavo Bilac»\n[…]\n«Artigo sobre os usos políticos da memória de Olavo Bilac no século XX»"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Cruz e Sousa",
      "descricao": "Poeta simbolista brasileiro nascido em Desterro, atual Florianópolis."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Filho de pais escravizados, o poeta simbolista Cruz e Sousa ganhou um apelido que o compara a uma ave elegante. Qual?",
    "resposta": "Cisne Negro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cruz_e_Sousa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cruz_e_Sousa",
        "situacao": "ok",
        "texto": "João da Cruz e Sousa (Nossa Senhora do Desterro, 24 de novembro de 1861 — Curral Novo, 19 de março de 1898) foi um poeta brasileiro, reconhecido como o primeiro e o principal expoente do simbolismo no Brasil. Filho de escravos alforriados, teve a vida marcada pela negritude e pela causa abolicionista, pelo que recebeu as alcunhas de Dante Negro, Cisne Negro e Poeta Negro.\n[…]\nNasceu dia 24 de novembro de 1861, filho dos escravos alforriados Guilherme da Cruz, mestre-pedreiro, e Carolina Eva da Conceição. João da Cruz desde pequeno recebeu a tutela e uma educação refinada do ex-senhor de seus pais, o marechal Guilherme Xavier de Sousa - de quem adotou o nome de família, Sousa. A esposa de Guilherme Xavier de Sousa, Dona Clarinda Fagundes Xavier de Sousa, não tinha filhos, e passou a proteger e cuidar da educação de João.\n[…]\nEmbora quase metade da população brasileira seja não branca, poucos foram os escritores negros, mulatos ou indígenas. Cruz e Sousa, por exemplo, é acusado de ter-se omitido quanto a questões referentes à condição negra. Mesmo tendo sido filho de escravos e recebido a alcunha de \"Cisne Negro\", o poeta João da Cruz e Sousa não conseguiu escapar das acusações de indiferença pela causa abolicionista.\n[…]\nA acusação, porém, não procede, pois, apesar de a poesia social não fazer parte do projeto poético do simbolismo nem de seu projeto particular, o autor, em alguns poemas, retratou metaforicamente a condição do escravo. Cruz e Sousa militou, sim, contra a escravidão.\n[…]\nSylvio Back dirigiu um filme sobre o poeta lançado em 1998. Interpretou Cruz e Sousa o ator Kadu Karneiro. Todo o texto do filme é só de poemas de Cruz e Sousa.\n[…]\nCruz e Sousa - Mestre do Simbolismo. Biografia sobre o poeta catarinense escrita pelo Prof. Evaldo Pauli.\n[…]\nAllyne Fiorentino de Oliveira \"Aspectos do poema em prosa de Cruz e Sousa e Rubén Darío\""
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Ferreira Gullar",
      "descricao": "Poeta, crítico e dramaturgo maranhense (1930–2016), autor do Poema Sujo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Ferreira Gullar é o nome artístico do poeta maranhense autor do Poema Sujo. Com que nome ele foi batizado?",
    "resposta": "José Ribamar Ferreira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ferreira_Gullar"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ferreira_Gullar",
        "situacao": "ok",
        "texto": "Ferreira Gullar, pseudônimo de José Ribamar Ferreira (São Luís, 10 de setembro de 1930 – Rio de Janeiro, 4 de dezembro de 2016), foi um poeta, escritor, crítico de arte, biógrafo, tradutor, memorialista e ensaísta brasileiro, reconhecido como um dos principais e mais importantes poetas brasileiros da segunda metade do século XX.\n[…]\nFerreira Gullar nasceu em São Luís, em 10 de setembro de 1930, com o nome de José Ribamar Ferreira. É um dos onze filhos do casal Newton Ferreira e Alzira Ribeiro Goulart.\n[…]\nSobre o pseudônimo, o poeta declarou o seguinte: \"Gullar é um dos sobrenomes de minha mãe, o nome dela é Alzira Ribeiro Goulart, e Ferreira é o sobrenome da família, eu então me chamo José Ribamar Ferreira; mas como todo mundo no Maranhão é Ribamar, eu decidi mudar meu nome e fiz isso, usei o Ferreira que é do meu pai e o Gullar que é de minha mãe, só que eu mudei a grafia porque o Gullar de minha mãe é o Goulart francês; é um nome inventado, como a vida é inventada eu inventei o meu nome\".\n[…]\nAté sua morte, muitos o consideravam o maior poeta vivo do Brasil e não seria exagero dizer que, durante suas seis décadas de produção artística, Ferreira Gullar passou por todos os acontecimentos mais importantes da poesia brasileira e participou deles.\n[…]\nFerreira Gullar foi postulante eleito da cadeira 37 na Academia Brasileira de Letras, tendo obtido na votação 36 dos 37 votos possíveis derrotando os outros candidatos: Ademir Barbosa Júnior, José Roberto Guedes de Oliveira e José William Vavruk em apenas 15 minutos, com uma abstenção que permanece anônima devido a queima das fichas após o resultado da urna em 9 de outubro de 2014, tendo votado 19 acadêmicos por presença física e 18 por cartas.\n[…]\n«Poemas de Ferreira Gullar»\n[…]\n«Entrevista com Ferreira Gullar». Biblioteca Pública do Paraná\n[…]\n«Artigo sobre a poesia de Ferreira Gullar»"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "João do Rio",
      "descricao": "Pseudônimo do jornalista e cronista carioca Paulo Barreto (1881–1921), autor de A Alma Encantadora das Ruas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O cronista Paulo Barreto, que retratou a vida carioca em A Alma Encantadora das Ruas, ficou famoso com que pseudônimo?",
    "resposta": "João do Rio",
    "fonte": [
      "https://pt.wikipedia.org/wiki/João_do_Rio"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/João_do_Rio",
        "situacao": "ok",
        "texto": "João do Rio, pseudônimo de João Paulo Emílio Cristóvão dos Santos Coelho Barreto (Rio de Janeiro, 5 de agosto de 1881 — 23 de junho de 1921), foi um jornalista, cronista, contista, romancista, tradutor e teatrólogo brasileiro. Considerado um pioneiro da crônica reportagem, ele era membro da Academia Brasileira de Letras, tendo sido o membro mais jovem a ser eleito para compor a instituição, com ap\n[…]\nHomem mestiço de pele clara, de origem humilde e compreendido como homossexual, Paulo Barreto enfrentou estereótipos e discriminações, conquistando a ascensão social através de seu trabalho como jornalista. Seus escritos retratavam principalmente a sociedade carioca em seus hábitos, costumes e rituais, focando em seus membros mais requintados e nos mais pobres. Publicou, em vida, extensa bibliografia, tendo feito do jornalismo sua principal fonte de renda.\n[…]\nProlífico escritor, entre 1900 e 1903 colaborou sob diversos pseudônimos com vários órgãos da imprensa carioca, como O Paiz, O Dia, Correio Mercantil, O Tagarela e O Coió. Em 1903 foi indicado por Nilo Peçanha para a Gazeta de Notícias, onde permaneceu até 1913. Foi neste jornal que, em 26 de novembro de 1903, nasceu João do Rio, seu pseudônimo mais famoso, assinando o artigo \"O Brasil Lê\", uma enquete sobre as preferências literárias do leitor carioca. E, como indica Gomes (1996, p.\n[…]\n84), \"daí por diante, o nome que fixa a identidade literária engole Paulo Barreto. Sob essa máscara publicará todos os seus livros e é como granjeia fama. Junto ao nome o nome da cidade\". E é como João do Rio que assina o texto do magnífico álbum sobre o Theatro Municipal do Rio de Janeiro, lançado pela Photo Musso em 1913.\n[…]\nANTELO, Raúl. \"Introdução\". In: A alma encantadora das ruas. São Paulo: Companhia das Letras, 2008.\n[…]\nO homem de cabeça de papelão (crônica de João do Rio).\n[…]\nDe Paulo Barreto a João do Rio: um intelectual carioca na República Velha."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Ubirajara",
      "descricao": "Romance indianista de José de Alencar publicado em 1874, passado entre os indígenas antes da chegada dos portugueses."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título Ubirajara, romance indianista de José de Alencar, vem do tupi e significa senhor de quê?",
    "resposta": "Da lança",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ubirajara_(livro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ubirajara_(livro)",
        "situacao": "ok",
        "texto": "Ubirajara é um romance indianista do escritor brasileiro José de Alencar, publicado em 1874. Caracteriza-se por um enredo que apresenta o \"primeiro termo\" da tríade indianista de José de Alencar, cuja personagem principal é um índio brasileiro puro, que ainda não se corrompeu perante a cultura europeia.\n[…]\nLogo aparece Pojucã para combater com Jaguarê e é vencido por ele. Jaguarê se torna, então, Ubirajara: o senhor da lança. Sendo levado para a taba de Ubirajara, Pojucã teria a oportunidade de ficar com a antiga prometida a Jaguarê, a jovem Jandira. Esta, porém, recusa-se a ficar com Pojucã e foge para a floresta. Ubirajara chega à taba de Araci e, como permite a lei da hospitalidade, não se identifica, adotando o nome de Jurandir, o que veio trazido da luz.\n[…]\nUbirajara: personagem protagonista; é o herói do livro. Aparece nos capítulos iniciais com o nome de Jaguarê, guerreiro da tribo dos araguaias, antes de se tornar Ubirajara, \"o senhor da lança\", e chefe de sua tribo, em substituição ao pai, depois de ter vencido Pojucã. Quando vai servir Itaquê para obter como esposa Araci, o nome adotado por ele entre os tocantins é Jurandir.\n[…]\nProduzido em 1874, Ubirajara é parte fundamental do conjunto de obras indianistas de José de Alencar, o maior prosador romântico do Brasil, que produziu, também, romances urbanos (de costumes), regionalistas e históricos. O romance revela do ponto de vista de José de Alencar, o caráter da nação indígena, um relato dos costumes e da própria índole do selvagem - o bom selvagem - oposto àquilo que informam os textos de missionários jesuítas e viajantes aventureiros.\n[…]\nEm 1956, foi quadrinizado por José Ruy para a revista portuguesa Cavaleiro Andante, republicado em 1982 pela Editorial Futura em formato álbum na primeira edição da Antologia da BD Portuguesa."
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Literatura de cordel",
      "descricao": "Gênero de poesia popular impressa em folhetos, muito difundido no Nordeste brasileiro."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os folhetos de versos populares do Nordeste são chamados de literatura de cordel. De onde vem esse nome?",
    "resposta": "Dos barbantes onde eram pendurados",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Literatura_de_cordel"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Literatura_de_cordel",
        "situacao": "ok",
        "texto": "Literatura de cordel também conhecida no Brasil como folheto, literatura popular em verso, ou simplesmente cordel, é um gênero literário popular escrito frequentemente em versos, na forma rimada, originado em relatos orais e depois impresso em folhetos. Remonta ao século XVI, quando o Renascimento popularizou a impressão de relatos orais, e mantém-se uma forma literária popular no Brasil.\n[…]\nO nome tem origem na forma como tradicionalmente os folhetos eram expostos para venda, pendurados em cordas, cordéis ou barbantes em Portugal. No Nordeste do Brasil o nome foi herdado, mas a tradição do barbante não se perpetuou: o folheto brasileiro pode ou não estar exposto em barbantes. Alguns poemas são ilustrados com xilogravuras, também usadas nas capas. As estrofes mais comuns são as de dez, oito ou seis versos.\n[…]\nA história da literatura de cordel começa com o romanceiro do Renascimento, quando se iniciou a impressão de relatos tradicionalmente orais feitos pelos trovadores medievais, e desenvolve-se até a Idade Contemporânea. O nome cordel está ligado à forma de comercialização desses folhetos em Portugal, onde eram pendurados em cordões, chamados de cordéis. Inicialmente, eles também continham peças de teatro, como as de autoria de Gil Vicente (1465-1536).\n[…]\nNo caso da literatura de cordel nordestina, faz parte da tradição do gênero o uso de rimas consoantes. Se um folheto de cordel usa rimas toantes, o conhecedor de cordel pensa logo que o autor daquele folheto desconhece a existência destas regras. Um cordel escrito assim pode até ser um grande poema, mas não se pode dizer que se trata de 'um cordel autêntico'.\n[…]\nCandace Slater; Octávio Alves Velho (1984). A vida no barbante : a literatura de cordel no Brasil. [S.l.]: Civilização Brasileira. 321 páginas .\n[…]\nLiteratura de cordel na Fundação Casa de Rui Barbosa\n[…]\nCordelteca Centro Nacional de Folclore e Cultura Popular"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Manuel Bandeira",
      "descricao": "Poeta modernista pernambucano (1886–1968), autor de Libertinagem."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Além da poesia e da terra natal, os pernambucanos Manuel Bandeira e João Cabral de Melo Neto tinham que laço de família?",
    "resposta": "Eram primos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/João_Cabral_de_Melo_Neto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/João_Cabral_de_Melo_Neto",
        "situacao": "ok",
        "texto": "João Cabral de Melo Neto (Recife, 9 de janeiro de 1920 – Rio de Janeiro, 9 de outubro de 1999) foi um poeta e diplomata brasileiro. Sua obra poética, que vai de uma tendência surrealista até a poesia popular, porém caracterizada pelo rigor estético, com poemas avessos a confessionalismos e marcados pelo uso de rimas toantes, inaugurou uma nova forma de fazer poesia no Brasil. É considerado o maior\n[…]\nIrmão do historiador Evaldo Cabral de Mello e primo do poeta Manuel Bandeira e do sociólogo Gilberto Freyre, João Cabral foi amigo do pintor Joan Miró e do poeta Joan Brossa. Casou-se com Stela Maria Barbosa de Oliveira, em fevereiro de 1946, com quem teve os filhos Rodrigo, Inez, Luiz, Isabel e João. Depois, em 1986, casou-se pela segunda vez, com a poetisa Marly de Oliveira.\n[…]\nJoão Cabral de Melo Neto nasceu em Pernambuco, na cidade de Recife, a 9 de janeiro de 1920. Ingressou aos dez anos no Colégio de Ponte d’Uchoa, dos Irmãos Maristas. Cabral de Melo era admirador do futebol, chegando a sagrar-se campeão juvenil pelo Santa Cruz.\n[…]\nNo Supremo Tribunal Federal, João Cabral de Melo Neto foi defendido pelo advogado José Guimarães Menegale, que afirmou:“Antes de recapitularmos, para arrematar estas razões, que a gravidade da espécie alongou, consignaremos, afinal, esta afirmação enfática e definitiva: JOÃO CABRAL DE MELO NETO não professa a ideologia comunista.\n[…]\nDebilitado pela cegueira e com crises de depressão, João Cabral morreu em 1999.\n[…]\nPrêmio Reina Sofía de Poesía Iberoamericana — 1994\n[…]\n«Poemas de João Cabral de Melo Neto»\n[…]\n«Artigo sobre a poesia de João Cabral de Melo Neto»\n[…]\n«Artigo sobre a relação de João Cabral de Melo Neto e o romance de 1930»\n[…]\n«Artigo sobre o processo criativo de João Cabral de Melo Neto»\n[…]\n«Artigo sobre João Cabral de Melo Neto e as heranças do modernismo brasileiro»"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Max e os Felinos",
      "descricao": "Novela de Moacyr Scliar publicada em 1981, sobre um jovem que divide um bote com um felino após um naufrágio."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A novela Max e os Felinos, do gaúcho Moacyr Scliar, sobre um náufrago que divide um bote com um jaguar, inspirou que premiado romance canadense?",
    "resposta": "As Aventuras de Pi",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Max_e_os_Felinos",
      "https://en.wikipedia.org/wiki/Life_of_Pi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Max_e_os_Felinos",
        "situacao": "ok",
        "texto": "Max e os Felinos é um romance de Moacyr Scliar, lançado em 1981. A obra teria servido de inspiração para A Vida de Pi (romance), de Yann Martel. Scliar considerou processar por plágio, mas desistiu depois que Martell admitiu a influência. Martell disse que a influência se deu após ter lido uma crítica ruim do romance brasileiro, e pensado que a ideia tinha sido mal aproveitada."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Life_of_Pi",
        "situacao": "ok",
        "texto": "Life of Pi is a Canadian philosophical novel by Yann Martel published in 2001. The protagonist is Piscine Molitor \"Pi\" Patel, an Indian boy from Pondicherry, who explores issues of spirituality and metaphysics from an early age. After a shipwreck, he survives 227 days while stranded on a lifeboat in the Pacific Ocean with a Bengal tiger named Richard Parker, raising questions about the nature of r\n[…]\nThe name Richard Parker for the tiger was inspired by a character in Edgar Allan Poe's nautical adventure novel The Narrative of Arthur Gordon Pym of Nantucket (1838). Richard Parker is a mutineer who is stranded and eventually cannibalized on the hull of an overturned ship, and there is a dog aboard who is named Tiger.\n[…]\nMartel has mentioned that a book review of Brazilian author Moacyr Scliar's 1981 novella Max and the Cats accounts in part for his novel's premise. Scliar's story describes a Jewish German refugee crossing the Atlantic Ocean with a jaguar in his boat. Scliar said that he was perplexed that Martel \"used the idea without consulting or even informing me,\" and indicated that he was reviewing the situation before deciding whether to take any action in response.\n[…]\nAfter talking with Martel, Scliar elected not to pursue the matter. A dedication to Scliar \"for the spark of life\" appears in the author's note of Life of Pi. Literary reviews have described the similarities as superficial between Life of Pi and Max and the Cats.\n[…]\nReviewer Peter Yan wrote: \"Reading the two books side-by-side, one realizes how inadequate bald plot summaries are in conveying the unique imaginative impact of each book,\" and noted that Martel's distinctive narrative structure is not found in Scliar's novella. The themes of the books are also dissimilar, with Max and the Cats being a metaphor for Nazism."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Macunaíma",
      "descricao": "Romance modernista de Mário de Andrade publicado em 1928, sobre o herói sem nenhum caráter."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No filme Macunaíma, de 1969, o herói nasce negro e depois fica branco. Que ator, famoso parceiro de Oscarito, interpretou a primeira fase?",
    "resposta": "Grande Otelo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Macunaíma_(filme)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Macunaíma_(filme)",
        "situacao": "ok",
        "texto": "Macunaíma é um filme brasileiro, de 1969 dos gêneros comédia e fantasia, dirigido e escrito por Joaquim Pedro de Andrade, com base na obra homônima de Mário de Andrade. Conta com Paulo José, Dina Sfat, Jardel Filho, Milton Gonçalves e Grande Otelo nos papéis principais.\n[…]\nO filme segue a história de Macunaíma, um anti-herói preguiçoso, descrito como \"herói da nossa gente\", \"herói sem nenhum caráter\", e ainda \"representante do povo brasileiro\", um indígena que nasce negro e já adulto (Grande Otelo) em meio à selva amazônica, torna-se branco (Paulo José) e vai para a cidade grande, conhecendo prostitutas, guerrilheiros e enfrentando vários tipos de inimigo que encontra pelo caminho.\n[…]\nMacunaíma foi exibido na sessão Quinzena dos Realizadores do Festival de Cinema de Cannes, em 1970. Na 5.ª edição do Festival de Brasília do Cinema Brasileiro, em 1969, o longa saiu como um dos grandes vencedores, recebendo o Troféu Candango de Melhor Ator, para Grande Otelo, Cenografia e Figurinos, para Anísio Medeiros, Roteiro, Diálogo, Argumento e o Prêmio Carmem Santos INC, para Joaquim Pedro de Andrade, e Ator Coadjuvante, para Jardel Filho.\n[…]\nAtraído pela beleza da \"subversiva\", Macunaíma a persegue e os dois acabam por fazer amor em um estacionamento. Depois disso, vão viver juntos, na Casa de Ci e acabam tendo um filho negro (também Grande Otelo), embora ambos sejam brancos. Pouco depois do seu nascimento, contudo, mãe e filho morrem, vitimados por uma explosão armada pelos inimigos de Ci.\n[…]\nResumido, Joaquim afirma ser o seu Macunaíma um filme sobre consumo\".\n[…]\nVenceu nas categorias de melhor ator (Grande Otelo), cenografia e figurinos (Anísio Medeiros), roteiro (Joaquim Pedro de Andrade) e ator coadjuvante (Jardel Filho).\n[…]\nPágina do filme no IMDb"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Oswald de Andrade",
      "descricao": "Escritor e agitador modernista paulista (1890–1954), autor do Manifesto Antropófago."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Oswald de Andrade foi casado com a pintora Tarsila do Amaral e, logo depois, com que jovem escritora e militante comunista?",
    "resposta": "Pagu (Patrícia Galvão)",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Oswald_de_Andrade",
      "https://pt.wikipedia.org/wiki/Patrícia_Galvão"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Oswald_de_Andrade",
        "situacao": "ok",
        "texto": "José Oswald de Sousa de Andrade, apelidado de Oswald de Andrade, (São Paulo, 11 de janeiro de 1890 – São Paulo, 22 de outubro de 1954) foi um poeta, escritor, advogado, ensaísta e dramaturgo brasileiro. Figura-chave do modernismo no Brasil, escreveu o Manifesto da Poesia Pau-Brasil e o Manifesto Antropófago.\n[…]\nFoi um dos promotores da Semana de Arte Moderna que ocorreu em 1922 na cidade de São Paulo, tornando-se um dos grandes nomes do modernismo literário brasileiro. Ficou conhecido pelo seu temperamento \"irreverente e combativo\", sendo o mais inovador entre estes. Colaborou na revista Contemporânea (1915-1926). De 1926 a 1929, foi casado com Tarsila do Amaral; e, de 1930 a 1935, com Pagu.\n[…]\nNo dia 1º de abril de 1930 casa-se com Pagu, em uma cerimônia pouco convencional: O acontecimento foi simbólico, realizado no Cemitério da Consolação, em São Paulo. O fato apareceu em diversos noticiários. Casaram-se oficialmente no civil e na igreja apenas no mês seguinte, com Pagu já grávida de seis meses. Em 25 de setembro do mesmo ano nasceu o filho do casal, Rudá Poronominare Galvão de Andrade.\n[…]\nSeu casamento com Patrícia o faz se aproximar da política, e ele tornou-se militante do Partido Comunista Brasileiro, e o casal fundou juntos o jornal O Homem do Povo, que durou até 1945, quando Oswald rompeu com o partido comunista.\n[…]\nEm junho de 1934 desquitou-se de Pagu, devido as constantes traições de Oswald, que assumiu um relacionamento com sua nova amante, a pianista Pilar Ferrer, com quem já estava há dois anos. Após um mês, separou-se de Pilar, e iniciou um namoro com Julieta Bárbara Guerrini, uma jovem poetisa, de família tradicional piracicabana, de origem italiana. Em dezembro o casal passou a viver juntos. O casal separou-se em 1940.\n[…]\n«Artigo discute a trajetória do escritor Oswald de Andrade»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Patrícia_Galvão",
        "situacao": "ok",
        "texto": "Patrícia Rehder Galvão, conhecida como Pagu, (São João da Boa Vista, 9 de junho de 1910 – Santos, 12 de dezembro de 1962) foi uma escritora, poetisa, encenadora, tradutora, desenhista, cartunista, jornalista e militante comunista brasileira. Teve expressivo destaque no movimento modernista iniciado em 1922, embora não tivesse participado da Semana de Arte Moderna, tendo na época apenas doze anos d\n[…]\nSua vida e sua obra já foram tema de trabalho acadêmico em Geraldo Ferraz e Patrícia Galvão: a Experiência Literária do Suplemento Literário do Diário de S. Paulo (Annablume, 2005). Em A \"Moscouzinha\" brasileira: cenários e personagens do cotidiano operário de Santos (1930 - 1954) (São Paulo, Humanitas, 2007), é citada a participação de Pagu, como militante comunista, num comício do PC e dos estivadores de Santos, em agosto de 1931, quando ela foi presa pela primeira vez.\n[…]\nFruto de uma pesquisa de cinco anos, o livro De Pagu a Patrícia - o Último Ato, da pesquisadora Márcia Costa, mostra a trajetória e o cotidiano de Patrícia Galvão em Santos, nos seus últimos anos de vida. Para além do mito, o livro revela a intelectual, jornalista, militante cultural, na sua atuação no teatro, na literatura e no jornalismo em A Tribuna, último jornal que trabalhou.\n[…]\nPaixão Pagu: A Autobiografia Precoce de Patricia Galvão. (texto inédito escrito em 1940), prefácios de Geraldo Galvão Ferraz, Kenneth David Jackson, Rudá de Andrade. Rio de Janeiro: Agir, 2005. 164 pp.\n[…]\nKenneth David Jackson (org.). O Jornalismo de Patrícia Galvão, 1: Pagu e a política (1929-1954). São Paulo: Edusp, 2023. 802p. E-book.\n[…]\nLúcia Teixeira (org.). Os Cadernos de Pagu: manuscritos de Patrícia Galvão. São Paulo: Nocelli e Unisanta, 2023. 328p.\n[…]\nSilvana Jeha (org.); Patrícia Galvão (Pagú): Até onde chega a sonda, escritos prisionais. São Paulo: Fósforo, 2023. p.144p.\n[…]\nPatrícia Galvão e o trotskysmo - Carta de uma militante"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "A Escrava Isaura",
      "descricao": "Romance abolicionista brasileiro publicado em 1875, adaptado para uma novela da TV Globo de grande sucesso internacional."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que atriz interpretou a protagonista na novela de 1976 baseada em A Escrava Isaura, exibida em dezenas de países?",
    "resposta": "Lucélia Santos",
    "distratores": [
      "Regina Duarte",
      "Sônia Braga",
      "Vera Fischer"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Escrava_Isaura_(1976)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Escrava_Isaura_(1976)",
        "situacao": "ok",
        "texto": "Escrava Isaura é uma telenovela brasileira produzida e exibida pela TV Globo de 11 de outubro de 1976 até 5 de fevereiro de 1977, em 100 capítulos. Substituiu O Feijão e o Sonho e foi substituída por À Sombra dos Laranjais, sendo a 10.ª \"novela das seis\" produzida pela emissora.\n[…]\nConta com as atuações de Lucélia Santos, Rubens de Falco, Edwin Luisi, Roberto Pirillo, Norma Blum, Átila Iório, Beatriz Lyra, Léa Garcia, Isaac Bardavid, Haroldo de Oliveira e Maria das Graças nos papéis principais.\n[…]\nPor a obra conter poucos acontecimentos para render uma novela, sendo o maior percalço a falta de envolvimentos amorosos da protagonista Isaura até a metade da história, quando conhece Álvaro, Braga criou para ser seu par romântico o personagem Tobias, depois morto em um incêndio provocado pelo vilão Leôncio.\n[…]\nSondada para interpretar Isaura, a atriz Débora Duarte recusou o papel por estar no início de sua gravidez e para não deixar a cidade de São Paulo, onde morava. Gilberto Braga chegou a sugerir Louise Cardoso para o papel, mas Herval Rossano convidou Lucélia Santos para representar a protagonista após acompanhar seu desempenho no teatro.\n[…]\nA repercussão internacional de Escrava Isaura chegou a influenciar alguns países de diferentes formas.\n[…]\nNa China, Lucélia Santos, intérprete da protagonista Isaura, recebeu o Prêmio Águia de Ouro através do voto de 300 milhões de pessoas, sendo a primeira atriz estrangeira agraciada com a honraria no território, e na Polônia, uma emissora realizou concurso para escolher sósias de Lucélia e Rubens de Falco, protagonistas do folhetim.\n[…]\nEscrava Isaura é até então a novela mais reprisada da TV Globo. No entanto, curiosamente, ela nunca foi exibida no Vale a Pena Ver de Novo, o bloco de reprises mais tradicional da emissora."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Lima Barreto",
      "descricao": "Romancista e cronista carioca (1881–1922), autor de Triste Fim de Policarpo Quaresma."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Lima Barreto foi internado duas vezes no hospício da Praia Vermelha, experiência que relatou no Diário do Hospício. Que problema o levou até lá?",
    "resposta": "Alcoolismo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lima_Barreto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lima_Barreto",
        "situacao": "desambiguacao",
        "texto": "Lima Barreto pode referir-se a:\n\nLima Barreto (escritor), brasileiro, autor de Triste Fim de Policarpo Quaresma\nLima Barreto (cineasta), brasileiro, dirigiu O Cangaceiro\nJorge Lima Barreto, músico, escritor, conferencista, improvisador e musicólogo brasileiro\n\n\n== Ver também ==\nTodas as páginas cujo título começa por \"Lima Barreto\"\nTodas as páginas que tenham \"Lima Barreto\" no título\nBusca por \"li"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Feliz Ano Novo",
      "descricao": "Livro de contos de Rubem Fonseca publicado em 1975 e proibido pela censura da ditadura militar em 1976."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1976, o governo militar proibiu o livro de contos Feliz Ano Novo, de Rubem Fonseca, com que alegação?",
    "resposta": "Ofensa à moral e aos bons costumes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rubem_Fonseca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rubem_Fonseca",
        "situacao": "ok",
        "texto": "José Rubem Fonseca (Juiz de Fora, 11 de maio de 1925 — Rio de Janeiro, 15 de abril de 2020) foi um contista, romancista, ensaísta e roteirista brasileiro.\n[…]\nEm 1976, um de seus livros mais importantes, Feliz Ano Novo, foi proibido de circular e de ser publicado, após decisão do então Ministro da Justiça, Armando Falcão, em 15 de dezembro daquele ano. A alegação seria de que a obra conteria matéria \"contrária à moral e aos bons costumes\".\n[…]\nSobre esse episódio, o então secretário-geral do Ministério da Educação e, posteriormente, Ministro da Educação no governo Geisel, Euro Brandão, em ofício ao Ministro da Justiça, afirmou que \"quanto ao livro \"Feliz Ano Novo\", de autoria de Rubem Fonseca, aprovou-se solicitação a V. Exa. para que faça sentir ao Senhor Ministro da Justiça o nosso aplauso pela providência adotada contra essa obra realmente representativa da obscenidade literária em nosso País\".\n[…]\nAfirmou Pompeu de Sousa: \"Ninguém ignora que Rubem Fonseca é um dos escritores mais importantes da literatura brasileira contemporânea, já antes atingido por outra medida de obscurantismo, com a apreensão de seu livro \"Feliz Ano Novo\", o que, aliás, constitui objeto de ação judicial que o autor move presentemente contra o Ministro da Justiça.\n[…]\nRubem Fonseca inaugurou algo novo na literatura brasileira contemporânea, que foi chamada, como brutalista, em 1975 através de Alfredo Bosi. Em seus contos e romances utiliza-se uma maneira de contar, na qual destacam-se personagens que são narradores. Várias das suas histórias (principalmente romances) são apresentadas na estrutura de uma narrativa policial com fortes elementos de oralidade."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Paulo Coelho",
      "descricao": "Escritor carioca, autor de O Alquimista, que antes foi letrista de música."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1986, Paulo Coelho percorreu o Caminho de Santiago de Compostela. Que livro, lançado no ano seguinte, nasceu dessa peregrinação?",
    "resposta": "O Diário de um Mago",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Diário_de_um_Mago",
      "https://pt.wikipedia.org/wiki/Paulo_Coelho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Diário_de_um_Mago",
        "situacao": "ok",
        "texto": "O Diário de um Mago é um livro escrito pelo brasileiro Paulo Coelho. Foi lançado em 1987, publicado em 150 países e traduzido para 40 idiomas.\n[…]\nA partir de sua peregrinação de três meses para Santiago de Compostela, Paulo Coelho constrói uma fascinante parábola, que trata da necessidade de encontrar o próprio caminho. Parte história de aventura, parte guia de autoconhecimento, este livro oferece a combinação perfeita de encantamento e inspiração.\n[…]\nO diário de uma mago ocupa um lugar especial na obra de Paulo Coelho: foi o livro que abriu espaço para seu grande romance, O Alquimista. De muitas maneiras, as duas histórias dialogam - para realmente compreender uma, você deve ler a outra, que expõe a filosofia humanista do autor e introduz a profundidade de sua busca.\n[…]\nO diário de um mago foi lançado em 1987 sua primeira edição. Sendo publicado diversas vezes sendo o último lançamento feito pelo selo Paralela da Editora Companhia das Letras em julho de 2017.\n[…]\nNascido em 1947, no Rio de Janeiro, Paulo Coelho atuou como encenador, dramaturgo, jornalista e compositor, antes de se dedicar à literatura. É autor do clássico O Alquimista, o livro brasileiro mais lido de todos os tempos. Paulo Coelho é considerado um fenômeno literário, com sua obra publicada em mais de 170 países e traduzida para 80 idiomas. Juntos, seus livros já venderam 210 milhões de exemplares em todo o mundo.\n[…]\nCOELHO, Paulo. O diário de um mago. São Paulo: Paralela, 2017. 288p.\n[…]\nTrecho d'O Diário de Um Mago\n[…]\nPágina oficial de Paulo Coelho\n[…]\nPágina oficial de Paulo Coelho - Portugal\n[…]\nPágina oficial de Paulo Coelho no Facebook"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paulo_Coelho",
        "situacao": "ok",
        "texto": "Paulo Coelho de Souza (Rio de Janeiro, 24 de agosto de 1947) é um escritor, letrista, jornalista e compositor brasileiro. Ocupa a 21.ª cadeira da Academia Brasileira de Letras.\n[…]\nOs dois se tornam parceiros em diversas músicas que exerceriam influência no rock brasileiro (consta na biografia de Paulo Coelho, \"O Mago\", do escritor Fernando Morais, que Raul Seixas, para incentivar o amigo a compor, colocou-o como parceiro em sua participação na trilha sonora da novela O Rebu da Rede Tupi - erroneamente confundida com a Rede Globo no livro - sem que Paulo escrevesse uma única linha).\n[…]\nCatólico não praticante, em 1986, Paulo Coelho conheceu a viagem de peregrinação pelo Caminho de Santiago. Percorreu quase 800 quilômetros do sul da França até a cidade de Santiago de Compostela, na Galiza, experiência de que retirou detalhes para o seu livro O Diário de um Mago, editado em 1987.\n[…]\nPaulo Coelho vive em Genebra, na Suíça, desde 2007.\n[…]\nEm 2009, é lançado no Brasil o filme Veronika Decides to Die, o primeiro filme baseado numa obra de Paulo Coelho. O filme recebeu fortes críticas negativas, afirmando que o roteiro se distancia demais do livro. Vale lembrar que Paulo Coelho nada teve a ver com a adaptação do livro para filme. Existe um projeto para transformar em filme o best-seller O Alquimista.\n[…]\nEm 25 de junho de 2012, lançou o livro Manuscrito Encontrado em Accra, data que coincide com o 25° aniversário da publicação de seu livro O Diário de um Mago.\n[…]\n1987 - O Diário de um Mago\n[…]\n2008 - O Mago - Fernando Morais (biografia do autor).\n[…]\n2015- STF, Paulo Coelho e a biografia de Roberto Carlos, Rio de Janeiro, Selmo Machado Pereira, Editora Saraiva.\n[…]\nColuna de Paulo Coelho no G1"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Mário Quintana",
      "descricao": "Poeta gaúcho (1906–1994), conhecido pelos poemas curtos e pelo humor delicado."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O poeta Mário Quintana morou por anos num quarto de hotel no centro de Porto Alegre, que hoje é um centro cultural com o nome dele. Que hotel era?",
    "resposta": "Hotel Majestic",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Casa_de_Cultura_Mário_Quintana"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Casa_de_Cultura_Mário_Quintana",
        "situacao": "ok",
        "texto": "A Casa de Cultura Mario Quintana (CCMQ), originalmente Hotel Majestic, é um prédio histórico brasileiro e um centro cultural da cidade de Porto Alegre, um dos maiores e melhor aparelhados do Brasil.\n[…]\nO Hotel Majestic teve seu auge nas décadas de 1930, 1940 e 1950. Durante esse período teve como hóspedes grandes nomes da política, como os ex-presidentes Getúlio Vargas e João \"Jango\" Goulart, e do mundo artístico, como Vicente Celestino, Virginia Lane e Francisco Alves. Foi nomeada em homenagem a um dos maiores poetas brasileiros, Mário Quintana, nascido na cidade gaúcha de Alegrete mas que adotou Porto Alegre como sua cidade de coração.\n[…]\nAs obras tiveram início em 1916 e, em 1918, foi concluída a primeira parte do edifício. Em  1926 foi projetada a parte leste. Ao final da obra, em 1933, o Majestic possuía sete pavimentos na ala leste e cinco na parte oeste. O desenho do prédio mistura habilmente estilos históricos, dando uma impressão de grandiosidade.\n[…]\nCom o tombamento em 1990, o antigo Hotel Majestic foi adaptado para tornar-se o grande centro cultural que é hoje, com locais muito agradáveis para confraternização. Os arquitetos responsáveis pela transformação interna foram Flávio Kiefer e Joel Gorski.\n[…]\nEm 2002, instalou-se no terraço do quinto andar da CCMQ o Jardim José Lutzenberger, em homenagem ao ambientalista falecido naquele ano. O jardim reúne espécies de plantas dos banhados, dos desertos, das pradarias e dos trópicos. Os vasos e as banheiras do antigo hotel Majestic, antes inutilizados, ganharam serventia para fazer do espaço um jardim.\n[…]\nCultura de Porto Alegre\n[…]\nArquitetura de Porto Alegre\n[…]\n«Casa de Cultura Mario Quintana»\n[…]\n«Fotos da Casa de Cultura Mario Quintana»"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "O Ateneu",
      "descricao": "Romance de Raul Pompeia publicado em 1888, com as memórias do menino Sérgio sobre o colégio dirigido por Aristarco."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O romance O Ateneu, de Raul Pompeia, narra as lembranças amargas do menino Sérgio sobre os anos passados em que tipo de lugar?",
    "resposta": "Um colégio interno",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Ateneu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Ateneu",
        "situacao": "ok",
        "texto": "O Ateneu é um romance do escritor brasileiro Raul Pompeia, considerado como o único exemplar de romance impressionista na literatura brasileira.\n[…]\nPublicado pela primeira vez em 1888, o livro conta a história de Sérgio, um menino que é enviado para um colégio agropecuário renomado na cidade do Rio de Janeiro, denominado Ateneu. Comandado pelo diretor Aristarco, o colégio mantém regras rígidas e princípios da aristocracia da época. A obra critica a sociedade brasileira do final do século XIX, tomando como metáfora o Ateneu, seu reflexo, um lugar onde vence sempre o mais forte.\n[…]\nConsta que a inspiração de Pompéia para escrever o romance foi sua experiência como estudante do Colégio Abílio, um dos mais renomados do Rio de Janeiro, que ficava na rua Ipiranga, em Laranjeiras.\n[…]\nA história é narrada pelo personagem principal, Sérgio, já adulto, em primeira pessoa e de forma não linear. O livro inicia-se com os primeiros contatos de Sérgio com o Ateneu, colégio interno no qual o seu pai o matricula, ainda mesmo antes de passar pela entrevista de admissão do rígido, mas aparentemente afável, diretor do estabelecimento, Aristarco.\n[…]\nEnrola-se na escola um novo aluno, Nearco, filho de uma nobre família pernambucana e atleta valoroso, além de excelente orador, destacado no grêmio literário do colégio, chamado \"Grêmio Amor ao Saber\". Nas reuniões do tal grêmio, Sérgio comparecia como simples assistente e, como a agremiação possuía farta biblioteca, Sérgio travou amizade com o Bento Alves, um aluno gaúcho, mais velho que ele e que trabalhava como bibliotecário."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Dois Irmãos",
      "descricao": "Romance de Milton Hatoum publicado em 2000, sobre a rivalidade entre os gêmeos Yaqub e Omar numa família de origem libanesa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O romance Dois Irmãos, de Milton Hatoum, sobre a rivalidade entre os gêmeos Yaqub e Omar, se passa em que capital brasileira?",
    "resposta": "Manaus",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dois_Irmãos_(livro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dois_Irmãos_(livro)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Tomás Antônio Gonzaga",
      "descricao": "Poeta árcade luso-brasileiro (1744–1810), autor de Marília de Dirceu e participante da Inconfidência Mineira."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Condenado pela Inconfidência Mineira, o autor de Marília de Dirceu nunca se casou com a amada e acabou morrendo no exílio em que colônia africana?",
    "resposta": "Moçambique",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tomás_Antônio_Gonzaga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tomás_Antônio_Gonzaga",
        "situacao": "ok",
        "texto": "Tomás António Gonzaga (Miragaia, Porto, 11 de agosto de 1744 — Ilha de Moçambique, 1810), cujo nome arcádico é Dirceu, foi um jurista, poeta e ativista político participante da Inconfidência Mineira, movimento pela independência de Minas Gerais, precursor do processo que conduziu à separação do Brasil de Portugal. Considerado o mais proeminente dos poetas árcades, é ainda hoje estudado em escolas \n[…]\nA poesia de Tomás António Gonzaga apresenta as típicas características árcades e neoclássicas: o pastoril, o bucólico, a Natureza amena, o equilíbrio etc. Paralelamente, possui características pré-românticas (principalmente na segunda parte de Marília de Dirceu, escrita na prisão): confissões de sentimento pessoal, ênfase emotiva estranha aos padrões do neoclassicismo, descrição de paisagens brasileiras, etc.\n[…]\nTomás António Gonzaga escreveu versos marcados por expressão própria, pela harmonização dos elementos racionais e afetivos e por um leve toque de sensualidade. Segundo Alfredo Bosi, Gonzaga está acima de tudo preocupado em \"achar a versão literária mais justa dos seus cuidados\". Assim, \"a figura de Marília, os amores ainda não realizados e a mágoa da separação entram apenas como 'ocasiões' no cancioneiro de Dirceu\", o que diferencia o autor dos seus futuros colegas românticos.\n[…]\nÉ interessante atentar para alguns aspectos dessa obra de Gonzaga. Cada lira é um dialogo de Dirceu com sua pastora Marília, mas, embora a obra tenha a estrutura de um diálogo, só Dirceu fala (trata-se de um monólogo), chamando Marília em geral com vocativos. Para o crítico Antonio Candido, o melhor título para a obra seria Dirceu de Marília, mas o patriarcalismo de Gonzaga nunca lhe permitiria pôr-se como a coisa possuída. Sem esquecer que Tomás António Gonzaga morreu de paixão.\n[…]\n«Tomás António Gonzaga - Biografia»\n[…]\nTexto Marília de Dirceu no Projeto Gutenberg"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Complexo de vira-lata",
      "descricao": "Expressão criada por Nelson Rodrigues para o sentimento de inferioridade do brasileiro diante do resto do mundo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que cronista e dramaturgo pernambucano criou a expressão complexo de vira-lata, para o sentimento de inferioridade do brasileiro diante do mundo?",
    "resposta": "Nelson Rodrigues",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Complexo_de_vira-lata"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Complexo_de_vira-lata",
        "situacao": "ok",
        "texto": "Complexo de vira-lata é uma expressão e conceito criada pelo dramaturgo e escritor brasileiro Nelson Rodrigues, a qual originalmente se referia ao trauma sofrido pelos brasileiros em 1950, quando a Seleção Brasileira foi derrotada pela Seleção Uruguaia de Futebol na final da Copa do Mundo em pleno Maracanã. O Brasil só teria se recuperado do choque (ao menos no campo futebolístico) em 1958, quando\n[…]\nPara Rodrigues, o fenômeno não se limitava somente ao campo futebolístico:\n[…]\nA expressão \"complexo de vira-lata\" foi popularizada pelo escritor brasileiro Nelson Rodrigues e refere-se a um sentimento de inferioridade por parte de brasileiros em relação a outros países, especialmente os desenvolvidos. Quem sofre desse complexo tende a acreditar que o Brasil, sua cultura, seu povo e suas realizações são inferiores aos de outras nações.\n[…]\nE já a palavra \"vira-lata\" no \"complexo de vira-lata\" faz referência ao cachorro vira-lata, que é um cão sem raça definida, muitas vezes visto como inferior em comparação a cães de raça pura. Nelson Rodrigues usou essa metáfora para descrever o sentimento de inferioridade que alguns brasileiros têm em relação ao seu próprio país, como se vissem o Brasil da mesma forma que muitos veem um vira-lata: como algo sem valor, inferior ou sem pedigree.\n[…]\nNelson Rodrigues usou essa metáfora para descrever o sentimento de inferioridade que alguns brasileiros têm em relação ao seu próprio país, como se vissem o Brasil da mesma forma que muitos veem um vira-lata: como algo sem valor, inferior ou sem pedigree. Assim, o nome ressalta essa percepção negativa e a falta de autoestima associada à própria identidade nacional.vam-se quanto a origem desta suposta inferioridade.\n[…]\nComplexo de Vira-Latas: sentimento de inferioridade começou no período de colonização. Portal EBC. 6 de junho de 2014. Documentário sobre o Complexo Vira-Latas. (Acesso em 8 de março de 2018)"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Budapeste",
      "descricao": "Romance de Chico Buarque publicado em 2003, sobre um escritor fantasma carioca que se apaixona pela língua húngara."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O romance Budapeste, sobre um escritor fantasma carioca que se apaixona pela língua húngara, foi escrito por que famoso compositor?",
    "resposta": "Chico Buarque",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Budapeste_(livro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Budapeste_(livro)",
        "situacao": "ok",
        "texto": "Budapeste é o terceiro romance de Chico Buarque, lançado em 2003 pela editora Companhia das Letras. O livro conta a história de um ghost-writer que vive entre o Rio de Janeiro e a Hungria.\n[…]\nEntre as diversas idas e vindas entre Budapeste e o Rio de Janeiro, a trama se alterna entre o seu enfeitiçamento pela língua húngara e o seu fascínio em ver seus escritos publicados por outros, bem como o seu envolvimento amoroso com Vanda e Kriska.\n[…]\n\"Budapeste, no exato momento em que termina, transforma-se em poesia.\" — José Miguel Wisnik\n[…]\n\"Chico Buarque ousou muito, escreveu cruzando um abismo sobre um arame e chegou ao outro lado. Ao lado onde se encontram os trabalhos executados com mestria, a da linguagem, a da construção narrativa, a do simples fazer. Não creio enganar-me dizendo que algo novo aconteceu no Brasil com este livro.\" — José Saramago, Folha de S. Paulo.\n[…]\n\"Talvez o mais belo dos três livros da maturidade de Chico, Budapeste é um labirinto de espelhos que afinal se resolve, não na trama, mas nas palavras, como poemas.\" — Caetano Veloso, O Globo.\n[…]\n\"O livro de Chico é uma vertigem. Você é sugado pela primeira linha e levado ao estilo falso-leve, a prosa depurada e a construção engenhosa até sair no fim lamentando que não haja mais, assombrado pelo sortilégio deste mestre de juntar palavras. Literalmente assombrado.\" — Luis Fernando Verissimo, O Globo.\n[…]\nBudapeste foi bem recebido por escritores, críticos, jornalistas e pelo público; resposta diferente da dos romances anteriores de Chico Buarque, Estorvo (1991) e Benjamim (1995), que provocaram reações mistas junto à crítica especializada."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Cidade de Deus",
      "descricao": "Romance de Paulo Lins publicado em 1997, sobre a violência no conjunto habitacional carioca de mesmo nome, adaptado ao cinema em 2002."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O filme Cidade de Deus, de 2002, adaptou o romance de um escritor que cresceu no próprio conjunto habitacional carioca. Quem é ele?",
    "resposta": "Paulo Lins",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cidade_de_Deus_(livro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cidade_de_Deus_(livro)",
        "situacao": "ok",
        "texto": "Cidade de Deus é um romance escrito por Paulo Lins e publicado em 1997 pela Companhia das Letras. Faz um painel das transformações sociais pelas quais passou o conjunto habitacional Cidade de Deus: da pequena criminalidade dos anos 60 à situação de violência generalizada e de domínio do tráfico de drogas da década de 1990. Para redefinir a situação do lugar onde cresceu, Lins usa o termo \"neofavel\n[…]\nO livro se baseia em fatos reais. Se divide em três partes respectivamente: A história de inferninho; A história de Pardalzinho; A história de Zé Pequeno.\n[…]\nCidade de Deus foi saudado como uma das maiores obras da literatura brasileira contemporânea. Um dos principais críticos do país, Roberto Schwarz observou a capacidade do autor de transpor para a literatura uma situação social deteriorada, aliando em sua narrativa a agilidade da ação cinematográfica e o lirismo da poesia.\n[…]\nO livro teve, depois, um conjunto de 4 adaptações, para cinema e TV, que podem ser consideradas com um conjunto.\n[…]\nCidade de Deus - filme de 2002\n[…]\nCidade dos Homens - série de 2002 a 2005\n[…]\nCidade dos Homens - filme de 2007\n[…]\nCidade de Deus: A Luta Não Para - série de 2024\n[…]\n2. ROCHA, Renato Oliveira. \"O vínculo de Cidade de Deus com a realidade\". REVELL - Revista de Estudos Literários da UEMS, v. 7, p. 19-32, 2013."
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Quarto de Despejo",
      "descricao": "Diário de Carolina Maria de Jesus publicado em 1960, sobre a vida numa favela de São Paulo."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Quarto de Despejo, diário de Carolina Maria de Jesus, chegou às livrarias no mesmo ano da inauguração de Brasília. Que ano foi esse?",
    "resposta": "1960",
    "distratores": [
      "1955",
      "1958",
      "1964"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Quarto_de_Despejo",
      "https://pt.wikipedia.org/wiki/Brasília"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Quarto_de_Despejo",
        "situacao": "ok",
        "texto": "Quarto de Despejo: Diário de uma Favelada, mais conhecido como Quarto de Despejo, é um livro autobiográfico da escritora Carolina Maria de Jesus, publicado pela primeira vez em agosto de 1960, pela livraria e editora Francisco Alves.\n[…]\nA favela era designada por De Jesus como o \"quarto de despejo\" da cidade, um lugar onde se escondia a população pobre, miserável e sem condição de uma vida digna.\n[…]\nO livro é publicado em agosto de 1960, pela editora da Livraria Francisco Alves. Com uma tiragem inicial de dez mil exemplares que se esgotou em apenas uma semana e já foi traduzido para mais de treze idiomas desde o seu lançamento.\n[…]\nNo diário, que descreve suas vivências no período de 1955 a 1960, e as angústias dos habitantes da favela, sobretudo a rotina da fome, repetida diariamente. De Jesus se sustentava recolhendo papel nas ruas. Quando não conseguia papel, ela e seus filhos não comiam.\n[…]\nNa década de 1990, acadêmicos interessados nas vozes excluídas periféricas das décadas de 1950 e 1960 resgataram a obra de Carolina Maria de Jesus no contexto universitário.\n[…]\nNa década de 1950, o país tinha cerca de 52 milhões de brasileiros, sendo que 36% dessa população era urbana e metade dela com 15 anos ou mais era analfabeta. Um levantamento de 1957 contabilizava 141 favelas só em São Paulo, com pouco mais de 8 mil domicílios e cerca de 50 mil favelados. Entre 1955 e 1960, a inflação no Brasil subia a uma média de 23% ao ano, segundo o IGP-DI da Fundação Getúlio Vargas.\n[…]\nEm 1961, De Jesus gravou o álbum \"Quarto de Despejo: Carolina Maria de Jesus Cantando Suas Composições\";\n[…]\nQuarto de Despejo, também foi um samba, composto por B. Lobo.\n[…]\nEu te Arrespondo Carolina, livro de autoria de Herculano Neves."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brasília",
        "situacao": "ok",
        "texto": "Brasília (AFI: [bɾaˈzilja] ou AFI: [bɾaˈziʎa]) é a capital federal do Brasil e a sede de governo do Distrito Federal. A capital está localizada na região Centro-Oeste do país, ao longo da região geográfica conhecida como Planalto Central. Segundo o Censo do Instituto Brasileiro de Geografia e Estatística (IBGE)/2022, sua população é de 2 817 381 habitantes, sendo, então, a terceira cidade mais pop\n[…]\nInaugurada em 21 de abril de 1960, pelo então presidente Juscelino Kubitschek, Brasília tornou-se formalmente a terceira capital do Brasil, após Salvador e Rio de Janeiro. Vista de cima, a principal área da cidade é descrita frequentemente como tendo o formato de um avião, mas a proposta inicial de Lúcio Costa era de que se assemelhasse ao sinal da cruz, e um dos eixos foi depois arqueado para se adaptar ao relevo da região.\n[…]\nPara fazer a transferência simbólica da capital do Rio para Brasília, Juscelino fechou solenemente os portões do Palácio do Catete, então transformado em Museu da República, às 9 da manhã do dia 21 de abril de 1960, ao que a multidão reagiu com aplausos. A cidade de Brasília foi inaugurada no mesmo dia e mês em que ocorreu a execução de Joaquim José da Silva Xavier, líder da Inconfidência Mineira, e a fundação de Roma.\n[…]\nA região administrativa do Plano Piloto, denominada de \"Região Administrativa I\", já recebeu o nome de \"Brasília\" entre 1960 e 1989, quando passou a se chamar \"Plano Piloto\". Voltou a ser denominada \"Brasília\" de 1990 até 1997, quando houve nova alteração do nome para \"Plano Piloto\". Apesar disso, ainda ocorre de a região ser denominada em documentos oficiais de \"Brasília\". A região administrativa está formada basicamente pelo projeto urbanístico de Lúcio Costa e pelo Parque Nacional de Brasília.\n[…]\nHistória do Brasil\n[…]\nNaturais de Brasília\n[…]\n«Administração Regional de Brasília»\n[…]\nBrasília no WikiMapia"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Memorial de Aires",
      "descricao": "Último romance de Machado de Assis, publicado em 1908, em forma de diário do Conselheiro Aires."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Qual destes romances de Machado de Assis foi o último que ele publicou, no ano de sua morte?",
    "resposta": "Memorial de Aires",
    "distratores": [
      "Esaú e Jacó",
      "Dom Casmurro",
      "Quincas Borba"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Memorial_de_Aires"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Memorial_de_Aires",
        "situacao": "ok",
        "texto": "Memorial de Aires é o último romance do escritor brasileiro Machado de Assis, escrito em 1907 e publicado em livro em 1908, ano da morte do autor. A obra apresenta-se sob a forma de um diário, composto por anotações feitas entre 1888 e 1889 pelo personagem fictício Conselheiro Aires, diplomata aposentado que retorna ao Brasil após longa permanência na Europa.\n[…]\nDiferentemente dos romances tradicionais, Memorial de Aires não possui um enredo linear, estruturando-se como uma sucessão de episódios, observações e reflexões do narrador, em tom introspectivo e melancólico. A obra é frequentemente associada à fase final da produção machadiana, marcada pela sobriedade estilística e pela contenção irônica.\n[…]\nO romance acompanha o cotidiano do conselheiro Aires após sua aposentadoria, registrando encontros sociais, pequenos acontecimentos da vida urbana carioca e reflexões sobre o tempo, a velhice, o amor e a memória. O diário abrange acontecimentos próximos à Abolição da Escravidão e aos primeiros anos da República, embora tais fatos apareçam apenas de forma indireta, filtrados pela sensibilidade do narrador.\n[…]\nA figura de Aires já havia surgido em Esaú e Jacó, e em Memorial de Aires assume papel central, funcionando como alter ego literário de Machado de Assis.\n[…]\nConselheiro Aires — narrador e protagonista, diplomata aposentado;\n[…]\nD. Carmo — mulher admirada por Aires, associada a valores de serenidade e afeto;\n[…]\nEntre as principais características de Memorial de Aires, destacam-se:\n[…]\nConsiderado o romance mais autobiográfico de Machado de Assis.\n[…]\nDiversos críticos apontam a obra como a mais serena e desencantada da produção machadiana, refletindo a maturidade literária do autor e sua visão crepuscular da vida."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Vinicius de Moraes",
      "descricao": "Poeta, compositor e diplomata carioca, parceiro de Tom Jobim na bossa nova."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Vinicius de Moraes escreveu que o amor deve ser infinito enquanto dure. Quantas vezes o próprio poeta se casou?",
    "resposta": "Nove vezes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vinicius_de_Moraes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vinicius_de_Moraes",
        "situacao": "ok",
        "texto": "Marcus Vinícius da Cruz de Mello Moraes (Rio de Janeiro, 19 de outubro de 1913 – Rio de Janeiro, 9 de julho de 1980), mais conhecido como Vinicius de Moraes, foi um poeta, dramaturgo, jornalista, diplomata, cantor e compositor brasileiro.\n[…]\nO Poetinha casou-se por nove vezes ao longo de sua vida e suas esposas foram, respectivamente: Beatriz Azevedo de Melo (mais conhecida como Tati de Moraes), Regina Pederneiras, Lila Bôscoli, Maria Lúcia Proença, Nelita de Abreu, Cristina Gurjão, Gessy Gesse, Marta Rodrigues Santamaria (a Martita) e Gilda de Queirós Mattoso.\n[…]\nNaquele mesmo período, Vinicius de Moraes lançou com a atriz Odete Lara seu primeiro álbum: Vinicius e Odete Lara. Com arranjos e regência do poeta Moacir Santos, o LP continha canções da parceria com Baden Powell, como \"Berimbau\", \"Mulher Carioca\", \"Samba em Prelúdio\" e \"Só por Amor\", entre outras. Ainda em 1963, o selo Copacabana lançou o álbum \"Elizeth Interpreta Vinicius\", contendo as parcerias do poetinha com Baden Powell, Moacir Santos (e arranjos deste), Nilo Queiroz e Vadico.\n[…]\nEm 1969, Vinicius de Moraes publicou o livro Obra Poética e se apresentou ao lado de Maria Creuza e Dorival Caymmi em Punta del Este. O poetinha também fez recital na Livraria Quadrante, em Lisboa, apresentando, entre outros, os poemas \"A Uma Mulher\", \"O Falso Mendigo\", \"Sob o Trópico de Câncer\" (no qual trabalhou durante nove anos) e \"Soneto da Intimidade\". O evento foi gravado ao vivo e lançado em LP pelo selo Festa.\n[…]\nEm 2003, ano em que o poeta completaria seu 90º aniversário, foram lançados vários projetos em tributo à sua criação artística. Também foi lançado o website oficial de Vinicius.\n[…]\n«Portal oficial do poeta»\n[…]\n«TODA A POESIA DE VINICIUS DE MORAES - Brasiliana/USP»"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Caramuru",
      "descricao": "Poema épico de frei José de Santa Rita Durão publicado em 1781, sobre o náufrago português Diogo Álvares Correia na Bahia."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Seguindo o modelo de Os Lusíadas, o poema épico Caramuru, de frei Santa Rita Durão, sobre o náufrago Diogo Álvares, é dividido em quantos cantos?",
    "resposta": "Dez",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Caramuru_(poema)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Caramuru_(poema)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.67 — 2026-10-13**
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas.

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

### Coleções

Uma **coleção** é um conjunto de perguntas sobre um mesmo universo, com um modo de jogo próprio (decidido em 2026-10-13). Cada coleção tem um documento próprio com as diretrizes dela; a única até agora é a de **pokémon**, do modo Pokémon, em [`modo_pokemon.md`](modo_pokemon.md).

- A pergunta da coleção tem o campo `colecao`. O modo da coleção sorteia só as perguntas dela, de qualquer tema.
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master, Trilha da Vida, Linear).
- **Subtema da coleção** (campo `subtema_colecao`): uma coleção pode ter subtemas próprios, definidos no documento dela, que dividem as perguntas dentro do modo. Eles não substituem tema e subtema, e a lista canônica (§3) não muda. A folga para sobreposição entre eles também é definida no documento da coleção.
- As perguntas da coleção seguem todas as regras desta Parte I: tema e subtema, âncora, saturação e fontes. Podem ser com ou sem figura.
- As exclusivas não contam nas metas do jogo original (§17), e o autopiloto não as produz: os lotes delas são rodados à mão.

### Perguntas com áudio

Uma pergunta de qualquer tipo pode ter um **trecho de áudio** (campo `audio`), decidido em 2026-10-12. O questionador lê o enunciado e manda o trecho tocar **na tela grande** (modo mesa), para todos ouvirem; o celular de quem lê não toca o som. **Até segunda ordem, as perguntas com áudio ficam fora do jogo:** o app não as sorteia em nenhum modo (§16), enquanto os trechos são revistos.

- **De reconhecimento**, como as figuras: a pergunta pede para reconhecer o que se ouve ("De que país é este hino nacional?", "Que música é esta?", "Que animal faz este som?", "Que instrumento é este?", "De que compositor é esta peça?"). O enunciado nunca diz o que toca; pode trazer uma pista que ajude sem entregar ("Que ave do Cerrado…").
- **Categorias:** hinos nacionais (Geografia › Bandeiras e Símbolos); música clássica e ópera (Artes e Pensamento › Música Clássica, Teatro e Ópera); música brasileira antiga (Entretenimento › Música Brasileira); sons de animais (Natureza, no subtema do bicho); instrumentos (Música Clássica, Música Brasileira ou Música Internacional, conforme o instrumento).
- **Só áudio livre**, porque o repositório e o site são públicos: domínio público, CC0, CC BY ou CC BY-SA, sem NC nem ND. Gravações comerciais de música popular **não entram**: a composição fica protegida até 70 anos depois da morte do autor, e a gravação, até 70 anos depois de publicada. Na música brasileira antiga, a composição e a gravação precisam estar em domínio público no Brasil: autores mortos há mais de 70 anos (Chiquinha Gonzaga, Ernesto Nazareth, Zequinha de Abreu, Catulo da Paixão Cearense, Carlos Gomes) e gravação publicada há mais de 70 anos. *Pelo Telefone*, de Donga (morto em 1974), por exemplo, fica de fora. Boas fontes: os hinos da Banda da Marinha dos EUA e os sons do Serviço de Pesca e Vida Selvagem dos EUA (obras do governo americano, em domínio público), o Musopen e as gravações antigas da Casa Edison, todos no Wikimedia Commons.
- **O LLM não ouve áudio.** A pergunta sai dos metadados do arquivo (título, descrição, categorias, origem) e das fontes, e **uma pessoa ouve o trecho** antes de ele entrar no banco, na página que o pipeline gera (§17).
- **O trecho:** de 6 a 30 segundos, escolhido para ser reconhecível (o tema famoso de uma peça, o começo de um hino, o canto típico de uma ave), com entrada e saída suaves e volume igualado. Nas gravações antigas, o trecho pula o anúncio do locutor, que muitas vezes diz o nome da música.
- **Saturação:** o áudio conta no limite de 3 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
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
- No máximo **2 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras novas.** O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para não repetir.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
