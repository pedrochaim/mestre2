Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **História do Brasil** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Guerra do Paraguai",
      "descricao": "Guerra travada entre 1864 e 1870 entre o Paraguai e a Tríplice Aliança, formada por Brasil, Argentina e Uruguai."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Travada entre 1864 e 1870, qual é considerada a guerra entre países mais sangrenta da história da América Latina?",
    "resposta": "Guerra do Paraguai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paraguayan_War",
      "https://pt.wikipedia.org/wiki/Guerra_do_Paraguai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paraguayan_War",
        "situacao": "ok",
        "texto": "The Paraguayan War, also known as the War of the Triple Alliance, was a war in South America that lasted from 1864 to 1870. It was fought between Paraguay and the Triple Alliance of Argentina, Brazil and Uruguay. It was the deadliest inter-state war in Latin American history. Paraguay sustained immense casualties, but even the approximate numbers are disputed. Paraguay was forced to cede disputed \n[…]\nDoratioto, Francisco (2003). Maldita guerra: nova história da Guerra do Paraguai. Companhia das Letras. ISBN 978-85-359-0224-2. Retrieved 19 June 2015.\n[…]\nDoratioto, Francisco (2022). Maldita Guerra: Nova história da Guerra do Paraguai (in Portuguese) (3 ed.). São Paulo: Companhia das Letras. ISBN 978-65-5921-286-6.\n[…]\nPomer, León (2008). La Guerra del Paraguay: Estado, Política y Negocios (in Spanish). Buenos Aires: Editorial Colihue.\n[…]\nPotthast, Barbata (2001). \"Residentas, destinadas y otra heroinas: El nacionalismo paraguayo y el rol de las mujeres en la guerra de la Triple Alianza\". In Potthast, Barbara; Scarxanella, Eugenia (eds.). Mujeres y naciones en América Latina\" problemas de inclusión y exclusión (PDF). Frankfurt am Main: Vervuert. pp. 77–92. Retrieved 21 February 2022.\n[…]\nPrado, Mário L. F. (2022). O Processo de Recuperação Econômica do Paraguai após a Guerra da Tríplice Aliança (1870 - 1890) (PDF) (Thesis). Universidade de São Paulo.\n[…]\nRosa, José María (2008). La Guerra del Paraguay y las Montoneras Argentinas (in Spanish). Buenos Aires: Editorial Punto de Encuentro.\n[…]\nSalles, Ricardo (2003). Guerra do Paraguai: Memórias & Imagens (in Portuguese). Rio de Janeiro: Bibilioteca Nacional.\n[…]\nSchneider, Louis (2009). A Guerra da Tríplice Aliança Contra o Paraguai (in Portuguese). Porto Alegre: Pradense. ISBN 978-85-89072-13-7.\n[…]\nTasso Fragoso, Augusto (2009). História da Guerra entre a Tríplice Aliança e o Paraguai (in Portuguese). Vol. 1 (3 ed.). Rio de Janeiro: Biblioteca do Exército."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_do_Paraguai",
        "situacao": "ok",
        "texto": "Guerra do Paraguai foi o maior conflito armado internacional ocorrido na América Latina, travada entre o Paraguai e a Tríplice Aliança, composta pelo Império do Brasil, Argentina e Uruguai. Ela se estendeu de dezembro de 1864 a março de 1870. É também chamada Guerra da Tríplice Aliança, na Argentina e no Uruguai, e de Guerra Grande, Guerra Contra a Tríplice Aliança e Guerra-Guaçu no Paraguai.\n[…]\nA derrota marcou uma reviravolta decisiva na história do Paraguai, tornando-o um dos países mais atrasados da América do Sul, devido ao seu decréscimo populacional, ocupação militar por quase dez anos, pagamento de pesada indenização de guerra, no caso do Brasil até a Segunda Guerra Mundial, e uma perda de em torno de 40% do território em litígio para o Brasil e Argentina. No pós-guerra, o Paraguai manteve-se sob a hegemonia brasileira.\n[…]\nUm estudo de 1999 por Thomas Whigham da Universidade da Geórgia e Barbara Potthast (publicado na Latin American Research Review sob o título \"A Pedra de Roseta do Paraguai: Novas Evidências sobre a Demografia da Guerra do Paraguai, 1864–1870\", e posteriormente expandido no ensaio de 2002 intitulado \"Refinando os números: uma resposta a Reber e Kleinpenning\") tem uma metodologia para produzir números mais precisos.\n[…]\nA interpretação das causas da guerra e suas consequências têm sido um tema polêmico na história dos países participantes, especialmente no Paraguai. Lá, foi considerada uma luta destemida pelos direitos de uma nação menor contra a agressão de vizinhos mais poderosos ou uma tentativa tola de lutar em uma guerra invencível que quase destruiu a nação.\n[…]\nO povo ignorante e bárbaro do Paraguai acredita que está sob a proteção do mais ilustre dos governos (...) e somente com uma intervenção estrangeira, ou uma guerra, eles serão livrados de seu erro ...\n[…]\nO diário El Centinela, coleção de artigos de jornal dos paraguaios durante a guerra"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Revolução Farroupilha",
      "descricao": "Guerra separatista travada no Rio Grande do Sul contra o Império do Brasil entre 1835 e 1845."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Iniciada em 1835 e encerrada quase dez anos depois, qual foi a revolta mais longa do Brasil Império?",
    "resposta": "Revolução Farroupilha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Revolução_Farroupilha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Revolução_Farroupilha",
        "situacao": "ok",
        "texto": "Guerra dos Farrapos, também chamada de Revolução Farroupilha ou Revolta Farroupilha, foi como ficou conhecida a revolução, guerra ou revolta regional, de caráter republicano, contra o governo imperial do Brasil, na então província de São Pedro do Rio Grande do Sul, e que resultou na declaração de independência da província como estado republicano, dando origem à República Rio-Grandense. Estendeu-s\n[…]\nEmbora os indígenas tenham lutado em ambos lados, a sua presença nas tropas farroupilhas é mais documentada do que nas tropas imperiais.\n[…]\nApesar da imensa quantidade de bibliografia sobre a temática da Revolução Farroupilha, não existe uma ausência de trabalhos que relatam a presença dos indígenas no conflito. Estes permanecem até hoje obscurecidos na produção historiográfica da Guerra dos Farrapos mesmo que, nos documentos oficiais, a presença deles, tanto do lado imperial quanto do lado farrapo, nunca tenha sido ocultada.[carece de fontes]?\n[…]\nUma pesquisa ao acervo da Biblioteca Central da UFRGS localizou apenas oito livros que faziam menções à presença indígena na Guerra dos Farrapos entre mais de 50 obras. Dentre as oito obras, quatro falavam sobre o assassinato do líder farrapo João Manoel de Lima e Silva pelo capitão indígena Roque Faustino em 1837 (História da República Rio-Grandense: 1834-1845, de Dante de Laytano (1936); O Sentido e o Espírito da Revolução Farroupilha, de J. P.\n[…]\nA Revolução Liberal de 1842 entusiasmou os farroupilhas, a ponto de Bento Gonçalves ter feito um pronunciamento em Cacequi em 13 de julho 1842. Este entusiasmo foi de curta duração, pois as revoltas pouco duraram. O fim das rebeliões em outras províncias, como a Sabinada na Bahia e a Revolução Liberal de São Paulo, trouxeram novos reforços às tropas farrapas. Entre eles, vieram da Bahia:\n[…]\nA Revolução Farroupilha foi representada na literatura, no cinema e no teatro.\n[…]\nCronologia da Guerra dos Farrapos"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Dom Pedro II",
      "descricao": "Segundo e último imperador do Brasil, que reinou de 1831 a 1889."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Desde a Independência, quem ficou mais tempo como chefe de Estado do Brasil, num reinado de cinquenta e oito anos?",
    "resposta": "Dom Pedro II",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pedro_II_of_Brazil",
      "https://pt.wikipedia.org/wiki/Pedro_II_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pedro_II_of_Brazil",
        "situacao": "ok",
        "texto": "Dom Pedro II (Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga; 2 December 1825 – 5 December 1891), known as \"the Magnanimous\" (Portuguese: O Magnânimo), was the second and final emperor of the Empire of Brazil. He reigned from 1831 until his deposition in the military coup of 1889, presiding over the longest and most stable \n[…]\nOnce again, the Emperor traveled abroad, this time going to the United States for the Centennial Exposition of the Declaration of Independence. He was accompanied by his faithful servant Rafael, who had raised him from childhood. Pedro II arrived in New York City on 15 April 1876, and set out from there to travel throughout the country; going as far as San Francisco in the west, New Orleans in the south, Washington, D.C., and north to Toronto, Ontario, Canada.\n[…]\nIn Brazil, the news of the Emperor's death \"aroused a genuine sense of regret among those who, without sympathy for a restoration, acknowledged both the merits and the achievements of their deceased ruler.\" His remains, as well as those of his wife, were returned to Brazil in 1921 in time for the centenary of the Brazilian independence. The government granted Pedro II dignities befitting a head of state.\n[…]\nThe Emperor's full style and title were \"His Imperial Majesty Dom Pedro II, by the Grace of God, and Unanimous Acclamation of the People, Constitutional Emperor and Perpetual Defender of Brazil\" (Sua Majestade Imperial, Dom Pedro II, Pela Graça de Deus, e Unânime Aclamação dos Povos, Imperador Constitucional e Defensor Perpétuo do Brasil).\n[…]\nDom Pedro aquamarine, named after Pedro II and his father, is the world's largest cut aquamarine gem.\n[…]\nMedia related to Pedro II do Brasil (category) at Wikimedia Commons\n[…]\nQuotations related to Pedro II of Brazil at Wikiquote\n[…]\nWorks by or about Pedro II of Brazil at Wikisource"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedro_II_do_Brasil",
        "situacao": "ok",
        "texto": "Pedro II (nome completo: Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga; Rio de Janeiro, 2 de dezembro de 1825 – Paris, 5 de dezembro de 1891), cognominado \"o Magnânimo\", foi o segundo e último monarca do Império do Brasil, reinando por 58 anos (1831–1889). Filho mais novo do imperador Pedro I do Brasil e da imperatriz cons\n[…]\nAo deixar o país, o imperador Pedro I selecionou três pessoas para cuidarem de seu filho e das filhas remanescentes. A primeira foi José Bonifácio de Andrada, seu amigo e líder influente da independência brasileira, nomeado tutor. A segunda foi Mariana Carlota de Verna Magalhães Coutinho (depois Condessa de Belmonte), que detinha o cargo de aia desde o nascimento de Pedro II. Quando bebê, Pedro II a chamava de \"dadama\", pois não pronunciava corretamente a palavra \"dama\".\n[…]\nNa década de 1880, o Brasil continuou a prosperar e a diversidade social aumentou notavelmente, testemunhando inclusive o primeiro movimento pelos direitos da mulher. Por outro lado, as cartas que Pedro II escreveu neste período revelam um homem cansado do mundo, cada vez mais alienado e pessimista. Ele permanecia fiel às suas obrigações como Chefe de Estado e era meticuloso em seu cumprimento, apesar de frequentemente sem entusiasmo.\n[…]\nSeus restos mortais, assim como os de sua esposa, foram finalmente trazidos ao Brasil em 1921 a tempo do centenário da independência brasileira em 1922 e o governo desejava dar a Pedro II condizentes aos de Chefe de Estado. Um feriado nacional foi decretado e o retorno do imperador como herói nacional foi celebrado por todo o país. Milhares participaram da cerimônia principal no Rio de Janeiro. O historiador Pedro Calmon descreveu a cena: \"Os velhos choravam. Muitos ajoelhavam-se.\n[…]\nBrasileiras:\n[…]\nGrão-Mestre da Imperial Ordem de Pedro Primeiro."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Lei Áurea",
      "descricao": "Lei brasileira de 13 de maio de 1888 que extinguiu a escravidão no Brasil."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Com a Lei Áurea, em 1888, o Brasil foi o último país independente de qual continente a abolir a escravidão?",
    "resposta": "América",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lei_Áurea",
      "https://en.wikipedia.org/wiki/Lei_Áurea"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_Áurea",
        "situacao": "ok",
        "texto": "Lei Áurea, oficialmente Lei n.º 3 353 de 13 de maio de 1888, é a lei que extinguiu a escravidão no Brasil.\n[…]\nO processo de abolição da escravidão no país foi gradual, e a Lei Áurea foi precedida pela Lei Eusébio de Queirós (Lei n.º 581, de 4 de setembro de 1850), que proibiu a entrada de africanos escravizados no Brasil; pela Lei do Ventre Livre, Lei n.º 2 040, de 28 de setembro de 1871, que libertou todas as crianças nascidas de mães escravas a partir de então; e pela Lei dos Sexagenários, lei n.º 3 270, de 28 de setembro 1885, que regulava a \"extinção gradual do elemento servil\", e que tornou livre todos os escravos com sessenta anos de idade ou mais.\n[…]\nO Brasil foi o último país independente da América Latina e do Ocidente a abolir oficialmente a escravidão.\n[…]\nVale ressaltar que, apesar de a Lei Áurea ter posto fim à exploração da mão de obra escrava no Brasil, persistem, ainda hoje, no país, algumas formas contemporâneas de escravidão, mantidas de forma ilegal.\n[…]\nDe acordo com o historiador Américo Jacobina Lacombe, \"Uma placa de bronze, existente nas oficinas do Lloyd Brasileiro, contém, de fato, esta inscrição assaz lacônica: \"13 de maio de 1891\", aqui foram incendiados os últimos documentos da escravidão no Brasil\".\n[…]\nAlguns pesquisadores recentes da historiografia brasileira têm outro ponto de vista sobre a abolição da escravatura e sobre a Lei Áurea. Afirmam eles que a abolição teria sido fruto de um estado semi-insurrecional que ameaçava a ordem imperial e escravista. Tal interpretação acentua o caráter ativo, e não passivo, das populações escravizadas.\n[…]\nEscravidão moderna no Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lei_Áurea",
        "situacao": "ok",
        "texto": "The Lei Áurea (Portuguese pronunciation: [ˈlej ˈawɾiɐ]; English: Golden Law), officially Law No. 3,353 of 13 May 1888, is the law that abolished slavery in Brazil. It was signed by Isabel, Princess Imperial of Brazil (1846–1921), an opponent of slavery, who acted as regent to Emperor Pedro II, who was in Europe.\n[…]\nThe Lei Áurea was preceded by the Rio Branco Law of 28 September 1871 (\"the Law of Free Birth\"), which freed all children born to slave parents, and by the Saraiva-Cotegipe Law (also known as \"the Law of Sexagenarians\"), of 28 September 1885, that freed slaves when they reached the age of 60. Brazil was the last country in the Americas to abolish slavery.\n[…]\nDomestic and international pressure to abolish Brazilian slavery began rising decades before the passing of the Lei Áurea. In 1825, José Bonifácio de Andrada e Silva, a crucial figure in the Brazilian fight for independence, began advocating for gradual abolition. The continued import of African slaves into Brazil was made entirely illegal following the British-Brazilian Treaty of 1826.\n[…]\nBy the 1860's, slavery increasingly entered into the national political agenda. Emperor Pedro II came to the view that slavery could no longer be justified amidst increasing international isolation, and that its decline had to be gradual, so as to minimize economic shocks in a transition to free labor. Pedro II was also influenced by the American Civil War, writing in 1864 that the future of slavery in Brazil must be questioned in fear of internal conflict.\n[…]\nThe text of the Lei Áurea was brief:\n[…]\nArt. 1.º: É declarada extinta desde a data desta lei a escravidão no Brasil."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "São Vicente",
      "descricao": "Cidade do litoral paulista fundada por Martim Afonso de Sousa em 1532, a primeira vila portuguesa no Brasil."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Fundada em 1532 por Martim Afonso de Sousa, qual cidade do litoral paulista foi a primeira vila criada pelos portugueses no Brasil?",
    "resposta": "São Vicente",
    "fonte": [
      "https://pt.wikipedia.org/wiki/São_Vicente_(São_Paulo)",
      "https://en.wikipedia.org/wiki/São_Vicente,_São_Paulo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/São_Vicente_(São_Paulo)",
        "situacao": "ok",
        "texto": "São Vicente, oficialmente Estância Balneária de São Vicente, é um município brasileiro do estado de São Paulo e primeira cidade do Brasil. Pertencente à Região Metropolitana da Baixada Santista, sua população, no censo de 2022, era de 329 911 habitantes, sendo a terceira cidade mais populosa do litoral paulista, atrás apenas de Santos e Praia Grande. Sua área territorial é de 148,151 km², o que lh\n[…]\nSão Vicente marca o início efetivo da colonização no Brasil e torna-se o primeiro núcleo institucionalizado em todo o território brasileiro, estando entre as cidades mais antigas continuadamente habitadas do continente americano. Fundada em 1532 pelo militar e administrador colonial português Martim Afonso de Sousa, na Capitania de São Vicente, a criação da vila atendeu às ordens do Rei Dom João III de Portugal.\n[…]\nA ilha onde a cidade se estabeleceu havia sido descoberta anteriormente, em 1502, durante a expedição de Gaspar de Lemos e Américo Vespúcio, que a batizaram em homenagem a São Vicente Mártir, tornando-a a primeira vila da América Portuguesa. Em 22 de agosto de 1532, realizou-se ali a primeira eleição do continente americano, na qual foram escolhidos os primeiros oficiais da Câmara, função atualmente equivalente ao cargo de vereador.\n[…]\nEntre 1530 e 1532, a expedição liderada pelo fidalgo português Martim Afonso de Sousa explorou a costa brasileira. No dia 22 de janeiro de 1532, Martim Afonso e um grupo de colonos portugueses desembarcaram na Ilha de São Vicente e o fidalgo ordenou ali a construção de casas, igreja, pelourinho, fortim, estaleiro e edifícios de órgãos administrativos, assim fundando a vila de São Vicente, sob oposição dos indígenas locais.\n[…]\nEm 22 de agosto de 1532, ocorreram as primeiras eleições do continente americano, para escolher os membros da Câmara Municipal de São Vicente, motivo pelo qual a cidade é conhecida como o berço da democracia nas Américas."
      },
      {
        "url": "https://en.wikipedia.org/wiki/São_Vicente,_São_Paulo",
        "situacao": "ok",
        "texto": "São Vicente (after Saint Vincent of Saragossa, the patron Saint of Lisbon, Portugal) is a coastal municipality in southern São Paulo and the first city of Brazil. It is part of the Metropolitan Region of the Baixada Santista. The population is 329,911 (2022 census) in an area of 148.151 square kilometres (57.20 square miles).\n[…]\nFounded in 1532, by the Portuguese explorer and colonial administrator Martim Afonso de Sousa, it is the first permanent colonial settlement established in Brazil, and the first colonial election on the American continent also took place there. Because of this, it is considered the \"cradle of American democracy\".\n[…]\nIt was the first permanent Portuguese settlement in the Americas and the first capital of the Captaincy of São Vicente, roughly the present state of São Paulo. Established as a proper village in 1532 by Martim Afonso de Sousa on what was then the Porto dos Escravos (\"Port of the Slaves\"), operated by three Portuguese colonists who trafficked on slaves captured by allied tribes, São Vicente is titled Cellula Mater (Mother Cell) of Brazil for being the first organized town in the country.\n[…]\nThe municipality is crossed from east to west on the island and on the continental part by the lines of América Latina Logística – ALL (former network of Ferrovia Paulista – FEPASA), which, heading west, connects São Vicente with Praia Grande, Mongaguá, Itanhaém and Peruíbe; heading east with Santos and heading north, it reaches the Planalto Paulistano, to the south of Greater São Paulo, in Embu-Guaçu.\n[…]\nSão Vicente is twinned with:\n[…]\n\"Do Litoral ao Planalto\". História do Brasil: Área Vicentina.\n[…]\n(in Portuguese) São Vicente's official home page\n[…]\n(in Portuguese) Portal Nosso São Paulo\n[…]\n(in Portuguese) São Vicente São Paulo Brazil Archived 22 December 2018 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cabanagem",
      "descricao": "Revolta popular ocorrida na província do Grão-Pará entre 1835 e 1840, durante o Período Regencial."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual revolta do Período Regencial foi a mais mortal, matando entre trinta e quarenta por cento da população do Grão-Pará?",
    "resposta": "Cabanagem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cabanagem",
      "https://pt.wikipedia.org/wiki/Cabanagem"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cabanagem",
        "situacao": "ok",
        "texto": "The Cabanagem (Portuguese pronunciation: [kabaˈnaʒẽj]; 1835–1840) was a popular revolution and pro-separatist movement that occurred in the then province of Grão-Pará, Empire of Brazil.\n[…]\nThe name \"Cabanagem\" refers to the type of hut used by the poorest people living along the waterways of northern Brazil, principally caboclos, freed slaves, and indigenous people. Their goal was to be more involved in government decisions, ultimately seeking the economic development of Grão-Pará.\n[…]\nIt is thought that 30–40% of the population of Grão-Pará, estimated at 100,000 people, died. In 1833 the Province had 119,877 inhabitants, consisting of 32,751 Amerindians, 29,977 black slaves, 42,000 mixed-race people, and a White minority of 15,000, over half of them Portuguese.\n[…]\nIt is estimated that during the five years of fighting in the revolt, the population of Pará was reduced from about 100,000 to 60,000.\n[…]\nIn homage to the Cabano movement the Memorial da Cabanagem designed by Oscar Niemeyer was erected in the entrance to the city of Belém. It was inaugurated January 7, 1985 as part of a celebration of 150 years since the Cabanagem. The monument has held the remains of key Cabano leaders Eduardo Angelem and Canon Batista Campos. Also housed within are symbolic ashes representing three additional leaders including Felix Clemente Malcher.\n[…]\nJúlio José Chiavenato. Cabanagem, o povo no poder. São Paulo: Brasiliense, 1984.\n[…]\nCabanagem Revolt at Flags of the World"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cabanagem",
        "situacao": "ok",
        "texto": "A Cabanagem, também chamada Guerra dos Cabanos, foi uma revolta popular e social que ocorreu na então Província do Grão-Pará entre 1835 e 1840, durante a regência de Diogo Antônio Feijó no Império do Brasil, influenciada pela Revolução Francesa, tendo como líderes Félix Clemente Malcher, Antonio Vinagre, Francisco Pedro Vinagre, Eduardo Angelim e Vicente Ferreira de Paula.\n[…]\nO espaço foi projetado para ser um local de convivência e expressão artística popular durante todo o ano, não apenas no Carnaval e tem em seu nome o objetivo de manter e homenagear a memória da revolta da Cabanagem ocorrida entre 1835-1840. Além disso, também homenageia o grande símbolo do samba paraense David Miguel dos Santos devido a sua importância para a cultura popular.\n[…]\nNo dia 7 de janeiro de 1835, Clemente Malcher foi libertado. Na madrugada desse dia, os rebeldes (tapuios, cabanos e negros), liderados por Francisco Vinagre e Félix Clemente Malcher, conquistaram o quartel e a sede do governo de Belém. Nesse episódio, assassinaram Bernardo Lobo de Sousa, nomearam Francisco Pedro Vinagre como Comandante das Armas da Cabanagem, Félix Clemente Malcher como presidente do Grão-Pará e apoderaram-se de todo o material armamentista.\n[…]\nA Cabanagem, porém, não acabou com a prisão de Eduardo Angelim. Os cabanos que se encontravam na selva lutaram até 1840, até serem completamente exterminados. A rebelião foi grande, tinha avançado pelos rios da bacia amazônica e o mar Atlântico, chegando as fronteiras do Brasil Central e próximos do litoral norte e nordeste.\n[…]\nRODRIGUES, Denise Simões. Revolução cabana e construção da identidade amazônida. Belém: EDUEPA: 2009.\n[…]\nMOREIRA, Flávio Guy da Silva. Pródromos da Cabanagem - geografia e capítulos da história do Grão-Pará. Belém: Paka-tatu, 2012.\n[…]\n\"Cabanagem, rebelião tem fim sangrento no período regencial\" por UOL Educação\n[…]\nCabanagem por Eduardo Bueno"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Ciclo da cana-de-açúcar",
      "descricao": "Período da economia colonial brasileira, nos séculos dezesseis e dezessete, baseado na produção de açúcar nos engenhos do litoral nordestino."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre o fim do século dezesseis e meados do século dezessete, o Brasil foi o maior produtor mundial de qual produto?",
    "resposta": "Açúcar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ciclo_da_cana-de-açúcar",
      "https://en.wikipedia.org/wiki/Colonial_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ciclo_da_cana-de-açúcar",
        "situacao": "ok",
        "texto": "O ciclo do açúcar, também referido como ciclo da cana-de-açúcar, foi um período da história do Brasil colonial compreendido entre meados do século XVI e meados do século XVIII. O açúcar representou a primeira grande riqueza agrícola e industrial do Brasil e, durante muito tempo, foi a base da economia colonial.\n[…]\nA lavoura da cana-de-açúcar era próspera e, meio século depois, a distribuição dos engenhos perfazia um total de 256.\n[…]\nPernambuco, a mais rica das capitanias durante o ciclo da cana-de-açúcar, impressionara o padre Fernão Cardim, que surpreendeu-se com \"as fazendas maiores e mais ricas que as da Bahia, os banquetes de extraordinárias iguarias, os leitos de damasco carmesim, franjados de ouro e as ricas colchas da Índia\", e resumiu suas impressões em uma frase antológica:\n[…]\nO Brasil foi o maior produtor de açúcar do mundo nos séculos XVI e XVII. As principais regiões açucareiras eram, a princípio, Pernambuco, Bahia, São Paulo e Rio de Janeiro. Posteriormente, a Paraíba também adentrou nesse seleto grupo, e, na altura das Invasões Holandesas, teria quase duas dezenas de engenhos.\n[…]\n(...) A qualidade do solo, completada pela da atmosfera, condicionou, como talvez nenhum outro elemento, essa especialização regional da colonização da América pelos portugueses que foi a colonização baseada na cana-de-açúcar (...) A verdade é que foi no extremo Nordeste - por extremo Nordeste deve entender-se o trecho da região agrária do Norte que vai de Sergipe ao Ceará - e no Recôncavo Baiano - nas suas melhores terras de barro e húmus - que primeiro se fixaram e tomaram fisionomia brasileira os traços, os valores, as tradições portuguesas que junto com as africanas e as indígenas constituiriam aquele Brasil profundo, que hoje se sente ser o mais brasileiro.\n[…]\nCiclo do pau-brasil\n[…]\nHistória do Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Colonial_Brazil",
        "situacao": "ok",
        "texto": "Colonial Brazil (Portuguese: Brasil Colonial), sometimes referred to as Portuguese America, comprises the period from 1500, with the arrival of the Portuguese, until 1815, when Brazil was elevated to a kingdom in union with Portugal.\n[…]\nThe huge size of Brazil led to the colony being divided in two after 1621 when king Philip II created the states of Brasil, with Salvador as capital, and Maranhão, with its capital in São Luís. The state of Maranhão was still further divided in 1737 into the Maranhão e Piauí and Grão-Pará e Rio Negro, with its capital in Belém do Pará. Each state had its own Governor.\n[…]\nAfter 1640, the governors of Brazil coming from the high nobility started to use the title of Vice-rei (Viceroy). In 1763 the capital of the State of Brazil was transferred from Salvador to Rio de Janeiro. In 1775 all Brazilian States (Brasil, Maranhão and Grão-Pará) were unified into the Viceroyalty of Brazil, with Rio de Janeiro as capital, and the title of the king's representative was officially changed to that of Viceroy of Brazil.\n[…]\nIn 1621, an administrative reorganization took place, and the Governorate General of Brazil became known as the State of Brazil (Estado do Brasil), keeping Salvador as its capital city. With this administrative remodeling, the unity of the colony was once again interrupted, as a portion of territory in the northern part of modern Brazil became an autonomous colony, separate from the State of Brazil: the State of Maranhão, with its capital city in São Luiz.\n[…]\nPrado Junior, Caio. História econômica do Brasil.\n[…]\nFurtado, Celso. Formação econômica do Brasil."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "João Figueiredo",
      "descricao": "General João Baptista Figueiredo, último presidente do regime militar brasileiro, de 1979 a 1985."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dos generais que presidiram o Brasil entre 1964 e 1985, qual ficou mais tempo no cargo?",
    "resposta": "João Figueiredo",
    "distratores": [
      "Ernesto Geisel",
      "Emílio Garrastazu Médici",
      "Castelo Branco"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/João_Figueiredo",
      "https://en.wikipedia.org/wiki/João_Figueiredo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/João_Figueiredo",
        "situacao": "ok",
        "texto": "João Batista de Oliveira Figueiredo (Rio de Janeiro, 15 de janeiro de 1918 – Rio de Janeiro, 24 de dezembro de 1999) foi um militar e político brasileiro. Foi o 30.º Presidente do Brasil, de 1979 a 1985, e o quinto e último ditador do período da ditadura militar brasileira.\n[…]\nJoão Batista de Oliveira Figueiredo nasceu no Rio de Janeiro, então Distrito Federal, no dia 15 de janeiro de 1918, filho de Euclides de Oliveira Figueiredo e de Valentina Silva de Oliveira Figueiredo, sendo o terceiro dentre seis irmãos.\n[…]\nSeu avô e homônimo, João Batista de Oliveira Figueiredo, foi servidor do Tesouro Nacional e atuou na Guerra do Paraguai, quando ajudou a organizar o primeiro serviço de intendência do Exército Brasileiro.\n[…]\nOutros dois irmãos de João Figueiredo seguiram igualmente a carreira militar e também atingiram o posto de general de exército: Euclydes de Oliveira Figueiredo Filho, que comandou a 1.ª Divisão de Exército e Diogo de Oliveira Figueiredo, comandante da Escola de Comando e Estado-Maior do Exército. Outro notório irmão foi o escritor premiado Guilherme Figueiredo.\n[…]\nFoi casado com Dulce Maria de Guimarães Castro de 1942 até seu falecimento, com quem teve dois filhos: Paulo Renato de Oliveira Figueiredo e João Batista Figueiredo Filho.\n[…]\nFIGUEIREDO, João, Discursos - Presidente João Figueiredo, 4 volumes, Secretaria de Imprensa e Divulgação da Presidência da República, 1983.\n[…]\nSILVA, Hélio, João Figueiredo 26º Presidente do Brasil 79 / 82, Editora Três, 1983.\n[…]\nPosse de João Batista Figueiredo (1979) no You Tube\n[…]\nCPDOC-FGV. Dicionário histórico-biográfico brasileiro Biografia de João Batista Figueiredo\n[…]\nAlexandre Garcia entrevista Presidente Figueiredo no YouTube\n[…]\nBom Dia Brasil: Café da manhã com o Presidente João Batista Figueiredo 1983 no YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/João_Figueiredo",
        "situacao": "ok",
        "texto": "João Baptista de Oliveira Figueiredo (Portuguese: [ʒuˈɐ̃w baˈtʃistɐ dʒi oliˈvejɾɐ fiɡejˈɾedu, ˈʒwɐ̃w -]; 15 January 1918 – 24 December 1999) was a Brazilian military officer who served as the 30th president of Brazil from 1979 to 1985, and the last of the military regime that ruled the country following the 1964 Brazilian coup d'état. He was chief of the Secret Service (SNI) during the term of his\n[…]\nAccording to CIA documents, João Figueiredo supported the continuation of summary executions of political dissidents, in violation of legal and constitutional norms, as well as human rights principles.\n[…]\nJoão Baptista de Oliveira Figueiredo was born in Rio de Janeiro at 11:30 BRT on 15 January 1918. He was the son of General Euclides Figueiredo and Valentina Silva de Oliveira Figueiredo, the third of six siblings.\n[…]\nIn 1967–1969 he commanded a regiment in Rio de Janeiro and was promoted to general. When General Emílio Garrastazu Médici assumed the presidency, Figueiredo was appointed head of the president's military staff (30 October 1969 – 15 March 1974).\n[…]\nIn 1974 he assumed the leadership of the National Intelligence Service of Brazil (15 March 1974 – 14 June 1978), a Brazil's internal security agency. Picked by President Ernesto Geisel as his successor, Figueiredo campaigned vigorously, even though he could not possibly be defeated; the president was elected by a legislature dominated by the pro-military National Renewal Alliance Party. As expected, he won easily against the nominal opposition candidate, General Monteiro.\n[…]\nInstead, opposition candidate Tancredo Neves succeeded Figueiredo after Congress held an indirect election for the new president.\n[…]\nList of presidents of Brazil\n[…]\nMedia related to João Figueiredo at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Eleição presidencial no Brasil em 1989",
      "descricao": "Primeira eleição direta para presidente do Brasil desde 1960, realizada em dois turnos em novembro e dezembro de 1989."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem venceu a eleição presidencial de 1989, a primeira pelo voto direto no Brasil desde 1960?",
    "resposta": "Fernando Collor de Mello",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Eleição_presidencial_no_Brasil_em_1989",
      "https://en.wikipedia.org/wiki/1989_Brazilian_presidential_election"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Eleição_presidencial_no_Brasil_em_1989",
        "situacao": "ok",
        "texto": "A eleição presidencial de 1989 no Brasil foi realizada em dois turnos. O primeiro aconteceu em uma quarta-feira, 15 de novembro de 1989, e o segundo em um domingo, 17 de dezembro de 1989. Foi a primeira eleição presidencial do país após a promulgação da Constituição Federal de 1988. No total, 22 candidatos a Presidente e 22 a Vice-presidente do Brasil concorreram na eleição.\n[…]\nOs principais candidatos à presidência foram: o economista liberal Fernando Collor de Mello (PRN, atual Agir), o sindicalista social-democrata Luiz Inácio Lula da Silva (PT), o engenheiro trabalhista Leonel Brizola (PDT), o engenheiro social-democrata Mário Covas (PSDB), e o engenheiro conservador Paulo Maluf (PDS, atual  Progressistas).\n[…]\nFoi a primeira eleição direta brasileira em que presidente e vice-presidente da República foram eleitos juntos, norma mantida nos pleitos seguintes e que continua até hoje.\n[…]\nAssim sendo, chega-se ao ano das eleições presidenciais. As eleições de 1989 foram as primeiras desde 1960 em que os cidadãos brasileiros aptos a votar escolheram seu presidente da república. Por serem relativamente novos, os partidos políticos estavam pouco mobilizados e vinte e duas candidaturas à presidência foram lançadas.\n[…]\nForam para o segundo turno os candidatos Luiz Inácio Lula da Silva, da coligação encabeçada pelo Partido dos Trabalhadores, e Fernando Collor de Mello, da coligação encabeçada pelo PRN.\n[…]\nLula fora para o segundo turno e acabou derrotado pelo ex-governador alagoano Fernando Collor de Mello, do Movimento Brasil Novo (PRN/PSC/PTR/PST), obtendo 46,97% dos votos válidos.[carece de fontes]?\n[…]\nO número eleitoral do PRN é 36, mas  Fernando Collor usou o número eleitoral do PSC, 20.\n[…]\nGuilherme, Cássio Augusto Samogin Almeida (29 de julho de 2019). 1989: história da primeira eleição presidencial pós-ditadura. Jundiaí: Paco e Littera. OCLC 1111776203"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1989_Brazilian_presidential_election",
        "situacao": "ok",
        "texto": "Presidential elections were held in Brazil in 1989, with the first round on November 15 and a second round on December 17. They were the first direct presidential elections since 1960, the first to be held using a two-round system and the first to take place under the 1988 constitution, which followed two decades of authoritarian rule after the 1964 Brazilian coup d'état.\n[…]\nPopular Governor of Alagoas Fernando Collor de Mello resigned from his position to mount a bid for the presidency. Previously a member of the PMDB, Collor joined the small National Reconstruction Party (PRN) in the run-up to the presidential campaign. Collor, who presented himself as a political outsider and was noted for his charisma, polled at a mere 5% according to polling taken in early 1989.\n[…]\nThe first round took place on November 15, 1989, the 100th anniversary of the republican coup which deposed Pedro II of Brazil and proclaimed the First Brazilian Republic. Since no candidate managed to win a majority of votes, a second round was held on December 17, featuring the two top finishers: Fernando Collor de Mello of the economically liberal right-wing populist National Reconstruction Party and Luiz Inácio Lula da Silva of the social democratic left-wing populist Workers' Party.\n[…]\nFernando Collor received the most votes in most states, except for the Federal District, where Lula came first, and Rio de Janeiro, Santa Catarina and Rio Grande do Sul, won by Leonel Brizola. In the second round, Lula won in Rio Grande do Sul, Rio de Janeiro, the Federal District, and his home state of Pernambuco, whilst Collor carried every other state.\n[…]\n\"Electoral Geography 2.0 - Brazilian Presidential Election 1989\" (votes by state)\n[…]\n\"Brazil 1989 Presidential Election\" Archived 2009-01-09 at the Wayback Machine\n[…]\nA case study on 1989 Brazilian presidential elections, The University of Oxford"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Bandeira do Império do Brasil",
      "descricao": "Bandeira verde com losango amarelo e brasão imperial, usada pelo Brasil de 1822 a 1889, desenhada por Jean-Baptiste Debret."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na bandeira do Império do Brasil, o brasão era cercado por ramos de quais duas plantas cultivadas?",
    "resposta": "Café e tabaco",
    "distratores": [
      "Cana e algodão",
      "Café e cana-de-açúcar",
      "Algodão e tabaco"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bandeira_do_Império_do_Brasil",
      "https://en.wikipedia.org/wiki/Flag_of_the_Empire_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bandeira_do_Império_do_Brasil",
        "situacao": "ok",
        "texto": "A Bandeira do Império do Brasil foi a primeira bandeira oficial do Brasil independente de Portugal, sendo adotada como símbolo nacional de 18 de setembro de 1822, dia em que Dom Pedro I escreveu o decreto que a oficializou, até 15 de novembro de 1889, data da Proclamação da República. A bandeira consiste em um paralelogramo verde sobreposto por um losango dourado, ficando no centro deste o escudo \n[…]\nA bandeira, junto com o brasão de armas do Império do Brasil, foi adotada 11 dias depois da proclamação da independência às margens do Rio Ipiranga. A pedido de Dom Pedro, José Bonifácio referendou o decreto da criação da bandeira, fato esse que originou o mito popular de que a bandeira teria sido criada por ele.\n[…]\nDesse modo, em meados de 1820 o rei Dom João encomendou do artista Jean-Baptiste Debret um pavilhão, possivelmente para ser usado pelo príncipe do Reino Unido, que depois seria modificado por Dom Pedro para criar a bandeira do Império brasileiro. Sua bandeira compreendia um losango amarelo em fundo verde, tendo uma esfera armilar com a cruz da Ordem de Cristo sob dois ramos de tabaco e café, rodeados de dezenove estrelas, com a maior delas abaixo da coroa real.\n[…]\nEvidentemente, Debret se inspirou em bandeiras militares da Revolução Francesa e da Era Napoleônica para criar o estandarte, já que o elemento do losango teria se popularizado entre os franceses depois da queda da bastilha.\n[…]\nApós a proclamação da independência D. Pedro estabeleceu o verde e o amarelo dourado como as cores nacionais do Império, as cores que estão presentes na bandeira e no laço imperial, que junta os ramos de café e tabaco no brasão de armas imperial. São as cores que representam as casas imperiais brasileiras, assim como o verde representa a cor dos serpes nas armas da Dinastia de Bragança, e o amarelo representa a cor dourada nas armas da Casa de Habsburgo-Lorena."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_the_Empire_of_Brazil",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Inconfidência Mineira",
      "descricao": "Conspiração separatista descoberta em 1789 na capitania de Minas Gerais, da qual participou Tiradentes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que poeta, autor de Marília de Dirceu, foi condenado ao exílio na África por participar da Inconfidência Mineira?",
    "resposta": "Tomás Antônio Gonzaga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tomás_Antônio_Gonzaga",
      "https://pt.wikipedia.org/wiki/Inconfidência_Mineira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tomás_Antônio_Gonzaga",
        "situacao": "ok",
        "texto": "Tomás António Gonzaga (Miragaia, Porto, 11 de agosto de 1744 — Ilha de Moçambique, 1810), cujo nome arcádico é Dirceu, foi um jurista, poeta e ativista político participante da Inconfidência Mineira, movimento pela independência de Minas Gerais, precursor do processo que conduziu à separação do Brasil de Portugal. Considerado o mais proeminente dos poetas árcades, é ainda hoje estudado em escolas \n[…]\nTomás António Gonzaga escreveu versos marcados por expressão própria, pela harmonização dos elementos racionais e afetivos e por um leve toque de sensualidade. Segundo Alfredo Bosi, Gonzaga está acima de tudo preocupado em \"achar a versão literária mais justa dos seus cuidados\". Assim, \"a figura de Marília, os amores ainda não realizados e a mágoa da separação entram apenas como 'ocasiões' no cancioneiro de Dirceu\", o que diferencia o autor dos seus futuros colegas românticos.\n[…]\nMarília é ora morena, ora loira. O que comprova não ser a pastora, Maria Doroteia na vida real, mas uma figura simbólica que servia à poesia de Tomás António Gonzaga. É anacronismo destinar ao sentimento existente entre o poeta e Maria Doroteia a motivação para a confecção dos poemas, tendo em vista que esse pensamento só surgiu com o pensamento Romântico, no século XIX.\n[…]\nÉ interessante atentar para alguns aspectos dessa obra de Gonzaga. Cada lira é um dialogo de Dirceu com sua pastora Marília, mas, embora a obra tenha a estrutura de um diálogo, só Dirceu fala (trata-se de um monólogo), chamando Marília em geral com vocativos. Para o crítico Antonio Candido, o melhor título para a obra seria Dirceu de Marília, mas o patriarcalismo de Gonzaga nunca lhe permitiria pôr-se como a coisa possuída. Sem esquecer que Tomás António Gonzaga morreu de paixão.\n[…]\n«Tomás António Gonzaga - Biografia»\n[…]\nTexto Marília de Dirceu no Projeto Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Inconfidência_Mineira",
        "situacao": "ok",
        "texto": "Inconfidência Mineira, também denominada Conjuração Mineira, foi um movimento conspiratório de caráter independentista ocorrido na Capitania de Minas Gerais entre 1788 e 1789, no contexto da crise da mineração aurífera e do aprofundamento das políticas fiscais impostas pela Coroa portuguesa ao Estado do Brasil.\n[…]\nA sociabilidade entre os futuros conjurados desenvolveu-se em espaços privados e semiprivados, como residências, reuniões literárias, ambientes administrativos e círculos militares. Casas de figuras como Cláudio Manuel da Costa e Tomás Antônio Gonzaga tornaram-se locais de encontro e discussão, nos quais se debatiam questões econômicas, políticas e jurídicas, bem como projetos para uma eventual ruptura com Portugal .\n[…]\nEntre os nomes mais frequentemente associados ao movimento estão Cláudio Manuel da Costa, Tomás Antônio Gonzaga, Inácio José de Alvarenga Peixoto, José Álvares Maciel, Francisco de Paula Freire de Andrade e Joaquim José da Silva Xavier, o Tiradentes .\n[…]\nDesembargador Tomás Antônio Gonzaga\n[…]\nAntônio de Oliveira Lopes\n[…]\nApós a leitura das sentenças em abril de 1792, a maioria dos condenados pela devassa da Conjuração Mineira teve suas penas de morte comutadas para degredo em possessões portuguesas na África, sobretudo em Moçambique e Angola. Outros receberam penas de reclusão religiosa, perda de bens ou interdição de cargos públicos, conforme sua condição social e clerical .\n[…]\nEntre os símbolos associados à Inconfidência Mineira, destaca-se a bandeira concebida pelos conjurados, composta por fundo branco, triângulo vermelho e a divisa latina Libertas quæ sera tamen. Originalmente vinculada ao projeto conspiratório de 1789, a bandeira foi posteriormente adotada como símbolo oficial do Estado de Minas Gerais, consolidando a apropriação institucional da memória inconfidente ."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Missão Artística Francesa",
      "descricao": "Grupo de artistas franceses que chegou ao Rio de Janeiro em 1816 e deu origem à Academia Imperial de Belas Artes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que pintor francês da Missão Artística de 1816 ficou famoso por retratar o cotidiano e a escravidão no Rio de Janeiro?",
    "resposta": "Jean-Baptiste Debret",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Missão_Artística_Francesa",
      "https://pt.wikipedia.org/wiki/Jean-Baptiste_Debret"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Missão_Artística_Francesa",
        "situacao": "ok",
        "texto": "A Missão Artística Francesa foi um grupo de artistas e artífices franceses que, deslocando-se para o Brasil no início do século XIX, dinamizou o panorama das Belas Artes no país introduzindo o sistema de ensino superior acadêmico e fortalecendo o Neoclassicismo que ali estava iniciando seu aparecimento.\n[…]\nO grupo aportou no Rio de Janeiro a 26 de março de 1816, a bordo do navio Calpe, escoltado por navios ingleses, e era formado por Joachim Lebreton, o líder, e seu secretário Pierre Dillon; Jean-Baptiste Debret, pintor histórico; Nicolas-Antoine Taunay, pintor de paisagens e cenas históricas, seu filho Félix Taunay, aprendiz; Auguste-Henri-Victor Grandjean de Montigny, arquiteto, junto com seus discípulos e assistentes Charles de Lavasseur e Louis-Symphorien Meunié; Auguste Marie Taunay, escultor; François Bonrepos, auxiliar de escultura, Charles-Simon Pradier, gravador; François Ovide, engenheiro e mecânico; Jean Baptiste Leve, ferreiro; Nicolas Maglioti Enout, serralheiro; Pelite e Fabre, peleteiros; Louis-Joseph Roy e seu filho Hyppolite Roy, carpinteiros.\n[…]\nEm 1831, Debret também retornou à França.\n[…]\nJean-Baptiste Debret, cujo atelier se encontrava no bairro do Catumbi, foi o que teve maior êxito no registrar os usos e costumes do país. Além de converter-se em pintor oficial do Primeiro Reinado, Debret, sobrinho de David, deixa-se encantar pelas paisagens exuberantes e inéditas, os costumes barrocos, e nas horas em que não lecionava, registrou-os em uma série de desenhos e aquarelas, e que anos mais tarde, já de volta à França, ele publicou na Viagem Pitoresca e Histórica ao Brasil.\n[…]\nMissão Artística Austro-Alemã\n[…]\n«Missão Artística Francesa». . Enciclopédia Itaú Cultural\n[…]\n«Revista eletrônica 19&20». - Grande banco de artigos sobre a Missão Francesa e a arte brasileira do século XIX"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jean-Baptiste_Debret",
        "situacao": "ok",
        "texto": "Jean-Baptiste Debret ou De Bret (Paris, 18 de abril de 1768 – Paris, 28 de junho de 1848) foi um pintor, desenhista, cenógrafo e professor francês, que integrou a corte de Napoleão, em 1806 e, posteriormente, de D.João VI e de D. Pedro I.\n[…]\nA derrota de Napoleão, em 1815, foi um golpe duro aos artistas, que perderam o principal pilar que sustentava – financeira e ideologicamente — a arte neoclássica. Isto, somado com a perda do filho único, de apenas dezenove anos, abalara muito Debret. No mesmo período, ele e o arquiteto  Grandjean de Montigny foram convidados a participar de uma missão de artistas franceses que rumava para a Rússia a pedido do czar Alexandre I.\n[…]\nMas, paralelamente, se aprontava em Paris a missão ao Brasil, chefiada por Joachim Lebreton. Debret escolheu o Brasil. Embarcou em Le Havre a 22 de janeiro de 1816 no veleiro norte-americano Calpe, que trazia a missão, aportando em território brasileiro em 26 de março de 1816.\n[…]\nOs franceses foram recebidos oficialmente e pensionados pelo príncipe regente Dom João. O regente desejava modernizar o Brasil e formar artistas locais. Lebreton apresentou ao regente um projeto de criação de uma academia de artes e ofícios, que foi aprovada e criada oficialmente pelo decreto de 12 de agosto de 1816 com o nome de Escola Real de Ciências, Artes e Ofícios. Debret foi nomeado então professor de pintura histórica. Contudo, a escola não saiu do papel.\n[…]\nPor estas razões, a obra de Debret é considerada grande contribuição para o Brasil, e é frequentemente analisada por historiadores como uma representação (um tanto quanto realista, apesar de não ser perfeita) do cotidiano e sociedade do Brasil – em especial, da vida no Rio de Janeiro – de meados do século XIX."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Engenho de açúcar",
      "descricao": "Propriedade e instalação do Brasil colonial onde a cana era moída e transformada em açúcar, com casa-grande, senzala e moenda."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Nos engenhos coloniais, como se chamava o equipamento que esmagava a cana para extrair o caldo?",
    "resposta": "Moenda",
    "distratores": [
      "Alambique",
      "Fornalha",
      "Monjolo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Engenho_de_açúcar",
      "https://en.wikipedia.org/wiki/Engenho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Engenho_de_açúcar",
        "situacao": "ok",
        "texto": "Uma usina (do francês usine), engenho de açúcar ou simplesmente engenho (do latim ingeniu) é, stricto sensu, a moenda de cana-de-açúcar. Lato sensu, designa todo o estabelecimento agroindustrial especializado na transformação da cana-sacarina em açúcar, melaço, aguardente de cana e etanol.\n[…]\nOs primeiros engenhos foram criados no Brasil para atender à demanda europeia. Eram os locais destinados à fabricação de açúcar, propriamente a moenda, a casa das caldeiras e a casa de purgar. Todo o conjunto, chamado engenho banguê, passou com o tempo a ser assim denominado, incluindo as plantações, a casa de engenho ou moita (a fábrica), a casa-grande (casa do proprietário), a senzala (lugar onde ficavam os escravos) e tudo quanto pertencia à propriedade. De acordo com Fania Fridman e Carlos H.\n[…]\nA primeira etapa presente em todos os engenhos é a moagem da cana, quando é extraído o suco conhecido como caldo de cana ou garapa. Esse caldo é conduzido até um tanque, o parol, onde é armazenado.\n[…]\nJá no século XX, com o emprego destes subprodutos em outras áreas industriais, os donos de alambiques tiveram que plantar a cana-de-açúcar e, a partir do caldo de cana fermentado e depois destilado, produziam (e ainda produzem) a cachaça. Assim, a fabricação da bebida desvinculou-se dos antigos engenhos.\n[…]\nJá na produção de açúcar, o caldo de cana é levado a grandes tachos de cobre, e submetido a fogo brando até atingir o \"ponto\", ou seja, se transformar em mel-de-engenho. Esse mel-de-engenho é transferido para um tanque onde será submetido a agitação, para acelerar a cristalização do açúcar.\n[…]\nCiclo da cana-de-açúcar\n[…]\nEngenhoca\n[…]\nGOMES, G. Engenho & arquitetura: tipologia dos edifícios dos antigos engenhos de açúcar de Pernambuco. Recife: Fundação Gilberto Freyre, 1997. link."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Engenho",
        "situacao": "ok",
        "texto": "Engenho (Portuguese pronunciation: [ẽˈʒẽɲu]) is a colonial-era Portuguese term for a sugar cane mill and the associated facilities. In Spanish-speaking countries such as Cuba and Puerto Rico, they are called ingenios. Both words mean engine (from latin ingenium). The word engenho usually only referred to the mill, but it could also describe the area as a whole including land, a mill, the people wh\n[…]\nThey acquired the name because of all their components used to produce and develop the sugarcane into potential exports. Engenhos could be considered revolutionary at the time because of its industrial advancement, the work combined manufacturing, chemistry, and agriculture to mass produce sugar. This new industrialized plantation required many working parts to keep it running. An engenho needed a field, workshop, refinery, and office just to produce the sugar.\n[…]\nThe list did not take account for the needs to power the building or slave requirements and needs. To run the Engenho specialized slaves and servants were necessary. The overseer had to be a free white, while the slaves purchased needed to be strong field hands and some already familiar with the sugar production process.\n[…]\nProduction and slave labor could no longer be looked at as separate, they were dependent of one another when it came to the sugarcane cultivation and production. The making and exporting of this commodity was now dependent on the Atlantic slave trade. An aspect that made the engenho a different type of operation was its need of all the people involved from field slave all the way to chief overseer. Each division of labor had to perform and contribute to make the plantation a success.\n[…]\nEngenho Vitória"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Diretas Já",
      "descricao": "Campanha popular de 1983 e 1984 pela volta das eleições diretas para presidente do Brasil."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que locutor esportivo ficou conhecido como a voz das Diretas Já, por apresentar os grandes comícios da campanha?",
    "resposta": "Osmar Santos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Osmar_Santos",
      "https://pt.wikipedia.org/wiki/Diretas_Já"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Osmar_Santos",
        "situacao": "ok",
        "texto": "Osmar Aparecido dos Santos (Osvaldo Cruz, 28 de julho de 1949) é um ex-radialista e locutor esportivo brasileiro.\n[…]\nFilho de Romeu dos Santos e Clerice Chiavelli, pai de Victor Sá e Lívia Sá, avô de Clarice, formou-se em Educação Física, Administração Pública pela FGV-SP e Direito, Osmar Santos, também conhecido como \"O Pai da Matéria\", trabalhou como locutor esportivo nas rádios Jovem Pan (entre 1972 e 1976), Record (entre 1988 e 1991) e Globo (em dois períodos: entre 1977 e 1988 e entre 1991 e 1994). Trabalhou também na televisão, pelas redes Globo, Record e Rede Manchete.\n[…]\nJuarez Soares também participou da equipe, como apresentador de um programa que falava de futebol e variedades. Com base nessa experiência, Osmar Santos e sua equipe passaram a apresentar o programa de variedades Balancê (que tinha Lucimara Parisi na produção.\n[…]\nOsmar Santos teve uma participação importante como locutor dos comícios da campanha política de 1984 pelas Diretas Já. Bastante popular, recebeu proposta para candidatar-se a cargos políticos, mas não aceitou.\n[…]\nOsmar Santos vinha sendo preparado para trabalhar na Rede Globo, onde atuou como narrador de futebol e apresentador, mas quem acabou sendo contratado em 1989 para apresentar o programa dominical da Globo foi seu amigo Fausto Silva, com quem trabalhou como repórter de campo na Jovem Pan. Faustão havia se destacado no programa Perdidos na Noite, produzido pela Rede Record a partir de 1982, e Rede Bandeirantes, a partir de 1986.\n[…]\nEm 2015, Osmar Santos foi eleito o maior narrador esportivo da história do rádio brasileiro no livro Os Mestres do Espetáculo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diretas_Já",
        "situacao": "ok",
        "texto": "Diretas Já foi um movimento político de cunho popular que teve como objetivo a retomada das eleições diretas ao cargo de presidente da República no Brasil, durante a ditadura militar brasileira. A possibilidade de eleições diretas para a Presidência da República no Brasil durante o regime ditatorial, se concretizou com a votação da proposta de Emenda Constitucional Dante de Oliveira pelo Congresso\n[…]\nDentre personalidades em geral, destacaram-se Heráclito Fontoura Sobral Pinto, Sócrates (futebolista), Christiane Torloni, Mário Lago, Gianfrancesco Guarnieri, Fafá de Belém, Chico Buarque, Taiguara, Beth Carvalho, Martinho da Vila, Osmar Santos, Juca Kfouri, entre outros.\n[…]\nA cantora paraense Fafá de Belém participou ativamente de todos os 32 comícios realizados no movimento das Diretas Já. Fafá se apresentou gratuitamente em passeatas e comícios, cantando os temas Menestrel das Alagoas, em homenagem a Teotônio Vilela, e o Hino Nacional Brasileiro. Menestrel das Alagoas foi lançado em 1983 no seu álbum intitulado Fafá de Belém e o Hino Nacional Brasileiro lançado em 1985 no álbum Aprendizes da Esperança.\n[…]\nDurante a campanha pelas eleições diretas, no final de suas apresentações, Fafá soltava uma pomba branca, gesto que se tornou símbolo do movimento. Numa entrevista dada ao jornal Folha de S.Paulo em 2006, Fafá declarou que Montoro e outros políticos do PMDB não queriam sua participação no movimento e que ela só passou a se apresentar por insistência de Lula.\n[…]\nComício da Candelária\n[…]\nExplode um novo Brasil: Diário da campanha das Diretas, Ricardo Kotscho\n[…]\nDiretas Já!, Henfil\n[…]\nFolha de S.Paulo: Comício das Diretas-Já\n[…]\nO Estado de S. Paulo: Diretas Já\n[…]\nAbril Cultural: Diretas Já"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Governo-geral do Brasil",
      "descricao": "Sistema administrativo centralizado criado pela Coroa portuguesa em 1548, com sede em Salvador, para governar a colônia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1549, os primeiros jesuítas chegaram ao Brasil na comitiva do primeiro governador-geral, chefiados por qual padre?",
    "resposta": "Manuel da Nóbrega",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manuel_da_Nóbrega",
      "https://pt.wikipedia.org/wiki/Governo-geral"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manuel_da_Nóbrega",
        "situacao": "ok",
        "texto": "Manuel da Nóbrega, S.J. (Sanfins do Douro, Alijó, 18 de outubro de 1517 – Rio de Janeiro, 18 de outubro de 1570) foi um sacerdote jesuíta português, chefe da primeira missão jesuítica à América. As cartas enviadas a seus superiores são documentos históricos sobre o Brasil colonial e a ação jesuítica no século XVI. Teve um papel fundamental na fundação de três das maiores cidades do Brasil: Salvado\n[…]\nA pequena aldeia dos jesuítas tornar-se-ia a mais populosa cidade do continente Americano, do Hemisfério Sul e a quinta maior cidade do mundo.Segundo Henrique dos Santos em \"Aventura Feliz\", p. 126, Nóbrega visitou pela primeira vez o planalto de Piratininga em companhia do padre Manuel de Paiva, primo de João Ramalho, e do irmão Antonio Rodrigues. Na companhia de André Ramalho, filho de João Ramalho, percorreu os campos à procura do local onde viria a fundar a casa e escola dos Jesuítas.\n[…]\nOs escritos do Padre Manuel da Nóbrega foram obra literária produzida no Brasil. Nas cartas, encontra-se o início da história do povo brasileiro, do ponto de vista de um catequizador.\n[…]\nAinda que Nóbrega não tenha alto voo lírico, estima-se que seu \"Diálogo sobre a conversão do gentio\", primeiro texto em prosa escrito no Brasil, tenha grande valor literário. O Padre Serafim Leite chega a afirmar ser a principal obra em prosa no século XVI no Brasil.\n[…]\nFrei Odúlio Van der Vat, em sua obra Princípios da Igreja no Brasil, diz na página 239:\"Quando em 1549 desembarcaram em Porto Seguro os primeiros jesuítas, encontraram a terra toda revirada por muitas inimizades. Graças, porém, à sua intervenção, muitos se reconciliaram publicamente com a igreja. O Padre Nóbrega continuou ali por alguns meses, dedicando-se às obras do apostolado e da caridade.\n[…]\nInformação da Terra do Brasil (1549)\n[…]\n\"Brasiliana da Biblioteca Nacional\", Rio de Janeiro, 2001.\n[…]\nNovas cartas jesuíticas (de Nóbrega a Vieira)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Governo-geral",
        "situacao": "ok",
        "texto": "Esta é uma lista dos governadores-gerais e vice-reis do Estado do Brasil, durante época colonial. O título oficial do cargo era governador e capitão-general de mar e terra do Estado do Brasil.\n[…]\nO cargo de governador-geral foi criado pela primeira vez em 1548, pelo rei D. João III de Portugal, em favor de Tomé de Sousa, que o assumiu na recém-fundada cidade de Salvador. Mais tarde, a partir de 1640, alguns governadores-gerais passaram a ter o título de \"vice-rei\". O cargo era o mesmo, apenas o título era diferente para condizer mais com a dignidade dos escolhidos pelo Rei de Portugal. De 1720 em diante, todos os governadores-gerais passaram a ter o título \"vice-reis\".\n[…]\nA instituição de um governo-geral representou um esforço de centralização administrativa. O sistema de capitanias hereditárias, adotado anteriormente, não obtivera êxito na ocupação e proteção do território. Para isso, o rei de Portugal firmou o Regimento — documento considerado por muitos como a primeira Constituição do Brasil.\n[…]\nO Brasil teve governadores-gerais dos mais variados. Alguns tinham muito poder, enquanto outros eram mais fracos do que muitos governadores de capitanias. Cabe lembrar que as comunicações entre as diversas partes do território colonial era muito precária, o que limitava o raio de ação dos governadores. Os governadores-gerais, em sua maioria, ocuparam outros cargos, antes ou depois do governo-geral do Brasil.\n[…]\nFontan, Ivonilton Alves (2020). Da Descoberta ao Império - Os Governantes que o Brasil Esqueceu. Teresópolis, RJ: Clube de Autores. Cópia arquivada em 9 de junho de 2025\n[…]\nGovernador-geral do Estado do Brasil, MAPA, 10 de Novembro de 2016, última atualização em 4 de Agosto de 2021"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Aliança Liberal",
      "descricao": "Coligação política que lançou Getúlio Vargas à presidência na eleição de 1930."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em 1930, a Aliança Liberal, que lançou Getúlio Vargas, uniu Rio Grande do Sul e Minas Gerais a qual estado nordestino?",
    "resposta": "Paraíba",
    "distratores": [
      "Pernambuco",
      "Bahia",
      "Ceará"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Aliança_Liberal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Aliança_Liberal",
        "situacao": "ok",
        "texto": "A Aliança Liberal foi uma aliança política no Brasil efetuada no início de agosto de 1929 por iniciativa de líderes políticos de Minas Gerais e Rio Grande do Sul com intuito de apoiar as candidaturas de Getúlio Vargas e João Pessoa à presidência e vice-presidência nas eleições de 1 de março de 1930, em oposição a Júlio Prestes, o candidato paulista do também paulista e então presidente Washington \n[…]\nSe sentindo alijado, o candidato de Minas Gerais, Antônio Carlos Ribeiro de Andrada, buscou apoio do Rio Grande do Sul. Após intensas negociações entre o final de 1928 e julho de 1929, no dia 30 de julho a comissão executiva do Partido Republicano Mineiro lançou as candidaturas de Getúlio Vargas e João Pessoa Cavalcanti de Albuquerque à presidência e vice-presidência respectivamente.\n[…]\nPara além de Minas Gerais, Rio Grande do Sul e Paraíba, a Aliança Liberal recebeu apoio de todas as oposições estaduais, sobretudo do Partido Democrático em São Paulo e no Distrito Federal.\n[…]\nPouco seguro, Vargas estabeleceu um acordo político com Washington Luís em que ficou acertado que, em caso de derrota, o candidato oposicionista aceitaria o resultado e passaria a apoiar o governo. Em compensação, o governo federal se comprometia a não apoiar a oposição gaúcha e reconhecer a vitória dos candidatos vinculados à Aliança Liberal nas eleições à Câmara dos Deputados. Vargas restringiria sua participação pessoal na campanha ao Rio Grande do Sul.\n[…]\nCom a radicalização da campanha, o acordo foi rompido e a maioria governista na Câmara dos Deputados decidiu não dar quórum às sessões parlamentares, impedindo assim a manifestação dos deputados aliancistas. Em janeiro de 1930, Vargas viajou ao Rio de Janeiro, e na capital federal promoveu um grande comício na esplanada do Castelo. Estendeu sua viagem a São Paulo e Santos, onde foi recebido com demonstrações populares de apoio."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Semana de Arte Moderna",
      "descricao": "Festival de arte realizado em fevereiro de 1922 no Theatro Municipal de São Paulo, marco do modernismo brasileiro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que compositor carioca, depois famoso pelas Bachianas Brasileiras, apresentou suas músicas na Semana de Arte Moderna de 1922?",
    "resposta": "Heitor Villa-Lobos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna",
      "https://pt.wikipedia.org/wiki/Heitor_Villa-Lobos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Semana_de_Arte_Moderna",
        "situacao": "ok",
        "texto": "Semana de Arte Moderna, também chamada de Semana de 22, foi um evento cultural que ocorreu no Theatro Municipal de São Paulo de 13 a 17 de fevereiro de 1922. Contou com exposição de pinturas, esculturas e maquetes arquitetônicas, além de conferências e concertos nas noites dos dias 13, 15 e 17. Foi financiada principalmente por membros da elite paulista que haviam enriquecido com a produção cafeei\n[…]\nO festival ocorreu entre os dias 13 e 17 de fevereiro no saguão do Teatro Municipal de São Paulo com a exposição de cerca de 100 obras, que era aberta ao público. No período da noite, também ocorriam três sessões lítero-musicais noturnas. A programação musical foi apresentada pela pianista Guiomar Novaes (1894-1979) e por Ernani Braga (1888-1948), que interpretaram composições de Heitor Villa-Lobos (1887-1959) e do francês Debussy (1862-1918).\n[…]\nO dia mais tranquilo da semana, apresentações musicais de Heitor Villa-Lobos, com participação de vários músicos. O público em número reduzido, portava-se com mais respeito, até que Villa-Lobos entra de casaca, mas com um pé calçado com um sapato, e outro com chinelo; o público interpreta a atitude como futurista e desrespeitosa e vaia o artista impiedosamente. Mais tarde, o maestro explicaria que não se tratava de modismo e, sim, de um calo inflamado.\n[…]\nO eco da Semana de 22 frutificou na segunda metade do século XX, como o tropicalismo na música, a geração da Lira Paulista no teatro na década de 1970 (que introduziu Arrigo Barnabé e Itamar Assumpção, entre outros) e o cinema de Glauber Rocha. A Bossa Nova também deve muito aos modernistas, por sua particular interpretação do movimento antropofágico, traduzindo a influência da música popular estadunidense para a linguagem brasileira do samba ou do baião.\n[…]\nArte moderna\n[…]\nModernismo\n[…]\nModernismo no Brasil\n[…]\nBopp, Raul (2012). Movimentos modernistas no Brasil. 1922-1928. Rio de Janeiro: José Olympio"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Heitor_Villa-Lobos",
        "situacao": "ok",
        "texto": "Heitor Villa-Lobos (Rio de Janeiro, 5 de março de 1887 – Rio de Janeiro, 17 de novembro de 1959) foi um compositor, maestro, violoncelista, pianista e violonista brasileiro, descrito como \"a figura criativa mais significativa do Século XX na música clássica brasileira\", e se tornando o compositor sul-americano mais conhecido de todos os tempos. Compositor prolífico, escreveu numerosas obras orques\n[…]\nFilho de Noêmia Monteiro Villa-Lobos e Raul Villa-Lobos, que era filho de imigrantes espanhóis, Heitor foi desde cedo incentivado aos estudos, pois sua mãe queria vê-lo médico. No entanto, Raul Villa-Lobos, pai do compositor, funcionário da Biblioteca Nacional e músico amador, deu-lhe instrução musical e adaptou uma viola para que o pequeno Heitor iniciasse seus estudos de violoncelo.\n[…]\nEm 1922 Villa-Lobos participou da Semana da Arte Moderna, no Theatro Municipal de São Paulo. No ano seguinte embarcou para a Europa, regressando ao Brasil em 1924. Viajou novamente para a Europa em 1927, financiado pelo milionário carioca Carlos Guinle. Desta segunda viagem, retornou em 1930, quando realizou turnê por sessenta e seis cidades. Realizou também, nesse mesmo ano, a \"Cruzada do Canto Orfeônico\" no Rio de Janeiro. Seu casamento com Lucília terminou na década de 1930.\n[…]\nVilla-Lobos participou da Semana de Arte Moderna de 1922, apresentando-se em três dias, com três diferentes espetáculos:\n[…]\nEmbora tenha sido um dos mais importantes nomes da música a apresentar-se na Semana de Arte Moderna, Villa-Lobos não foi o único compositor a ser interpretado. Também foram interpretadas obras de Debussy, por Guiomar Novaes, de Eric Satie, por Ernani Braga — que também interpretou \"A Fiandeira\", de Villa-Lobos.\n[…]\n«VIDA & OBRA DE HEITOR VILLA-LOBOS». Biografia e obras completas comentadas no CD-ROM\n[…]\n«Museu Villa-Lobos»\n[…]\n«Sitio Villa-Lobos.pt»\n[…]\nObras de Heitor Villa-Lobos no International Music Score Library Project"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Frente Ampla",
      "descricao": "Movimento político de oposição ao regime militar brasileiro, criado em 1966 por Carlos Lacerda e proibido em 1968."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em 1966, Carlos Lacerda criou a Frente Ampla contra o regime militar ao lado de Juscelino Kubitschek e de qual outro ex-presidente?",
    "resposta": "João Goulart",
    "distratores": [
      "Jânio Quadros",
      "Café Filho",
      "Eurico Gaspar Dutra"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Frente_Ampla_(Brasil)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Frente_Ampla_(Brasil)",
        "situacao": "ok",
        "texto": "A Frente Ampla foi um grupo político criado a partir de 1966 reunindo o conservador Carlos Lacerda e seus antigos adversários de centro à esquerda Juscelino Kubitschek e João Goulart contra a ditadura militar brasileira.\n[…]\nOs militares da linha dura e dos conservadores ameaçaram retirar o apoio a Lacerda, caso ele continuasse os entendimentos com os dois inimigos do golpe. Ainda assim, em 28 de Outubro de 1966, a Frente Ampla foi lançada com um manifesto, assinado somente por Lacerda, publicado na Tribuna da Imprensa, seu ex-jornal. O manifesto pleiteava eleições diretas, reforma partidária, desenvolvimento econômico e adoção de política externa soberana. O manifesto teve boa aceitação no MDB.\n[…]\nNo dia 19 de novembro de 1966, Lacerda e Juscelino emitiram a Declaração de Lisboa, onde afirmavam a intenção de trabalhar juntos numa frente ampla de oposição. Comprometeram-se com a orientação política do manifesto de 28 de outubro e conclamaram o povo a participar da formação de um grande partido popular. Lacerda passou então a buscar entendimentos com Goulart, com os setores mais à esquerda do MDB, chamados \"corrente ideológica\" e com o PCB ilegal.\n[…]\nO PCB se dividiu em grupo favorável ao acordo, e outro grupo que acreditava que Lacerda seria o único beneficiado, já que Juscelino e Goulart estavam exilados.\n[…]\nNo dia 24 de setembro Lacerda viajou para o Uruguai e no dia 25 se encontrou e divulgou nota conjunta com Goulart defendendo a Frente Ampla. O encontro teve Renato Archer como representante de Juscelino. O acordo com Goulart irritou a \"linha dura\", que decidiu retirar o apoio a Lacerda. Também irritou Brizola, exilado no Uruguai, que emitiu nota condenando veementemente a atitude de João Goulart."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Expedição Científica Rondon-Roosevelt",
      "descricao": "Expedição de 1913 e 1914 pela Amazônia brasileira, liderada por Cândido Rondon e Theodore Roosevelt, que explorou o Rio da Dúvida."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Entre 1913 e 1914, o Marechal Rondon explorou um rio da Amazônia ao lado de qual ex-presidente dos Estados Unidos?",
    "resposta": "Theodore Roosevelt",
    "fonte": [
      "https://en.wikipedia.org/wiki/Roosevelt–Rondon_Scientific_Expedition",
      "https://en.wikipedia.org/wiki/Roosevelt_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roosevelt–Rondon_Scientific_Expedition",
        "situacao": "ok",
        "texto": "The Roosevelt–Rondon Scientific Expedition (Portuguese: Expedição Científica Rondon–Roosevelt) was a survey expedition in 1913–14 to follow the path of the Rio da Dúvida (\"River of Doubt\") in the Amazon basin. The expedition was jointly led by Theodore Roosevelt, the former president of the United States, and Colonel Cândido Rondon, a Brazilian explorer who had discovered its headwaters in 1909.\n[…]\nRoosevelt, seeking adventure and challenge after his recent electoral defeat, agreed. Kermit Roosevelt, Theodore's son, had recently become engaged and did not plan on joining the expedition but did on the insistence of his mother Edith Roosevelt, in order to protect his father. The expedition started in Cáceres, a small town on the Paraguay River, in December 1913. They traveled to Tapirapuã, where Rondon had previously discovered the headwaters of the River of Doubt.\n[…]\nThe expedition members were awarded the Theodore Roosevelt Association's Distinguished Service Medal for their achievement. A documentary of the expedition was subsequently produced and aired on PBS called the New Explorers: The River of Doubt narrated by Bill Kurtis and Wilford Brimley. Since this time, the expedition has inspired others to undergo its challenges such as Materials Scientist Professor Marc A. Meyers, Col Huram Reis, Col Ivan Angonese, and Jeffery Lehmann.\n[…]\nOn September 26, 2021, The American Guest, a four-episode Brazilian miniseries, was released on HBO Latin America and later on HBO Max. The series written by Matthew Chapman and directed by Bruno Barreto follows the expedition of former U.S. president Theodore Roosevelt, played by Aidan Quinn, alongside Brazilian army officer Cândido Rondon, portrayed by Chico Diaz.\n[…]\nRoosevelt, Theodore (1914). Through the Brazilian Wilderness. New York: C. Scribner's Sons. OCLC 485541.\n[…]\nWorks about the Roosevelt–Rondon Scientific Expedition at Open Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Roosevelt_River",
        "situacao": "ok",
        "texto": "The Roosevelt River (Rio Roosevelt, sometimes Rio Teodoro) is a Brazilian river, a tributary of the Aripuanã River about 760 km (470 mi) in length.\n[…]\nThe Roosevelt River begins in the state of Rondônia and flows north through tropical rainforest. It is fed by the Capitão Cardoso River, which meets it at the state boundary.\n[…]\nThe Aripuanã then flows into the Madeira River, thence into the Amazon.\n[…]\nFormerly called Rio da Dúvida (“River of Doubt”), the river is named after Theodore Roosevelt, who traveled into the central region of Brazil during the Roosevelt–Rondon Scientific Expedition of 1913–14. The expedition, led by Roosevelt and Cândido Rondon, Brazil's most famous explorer and the river's discoverer, sought to determine where and by which course the river flowed into the Amazon.\n[…]\nIn 1992 a third (modern) expedition was organized, funded, and led by Charles Haskell and Elizabeth McKnight of New Century Conservation Trust, a non-profit environmental education organization in Maine, and sponsored in part by the Theodore Roosevelt Association, the American Museum of Natural History, and the National Wildlife Federation.\n[…]\nThe expedition members were awarded the Theodore Roosevelt Association's Distinguished Service Medal for their achievement. A documentary of the expedition was subsequently produced and aired on PBS called the New Explorers: The River of Doubt narrated by Bill Kurtis and Wilford Brimley. Since this time, the expedition has inspired others to undergo its challenges such as Materials Science Professor Marc A. Meyers, Col. Huram Reis, Col. Ivan Angonese, and Jeffery Lehmann."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Expedi%C3%A7%C3%A3o_Cient%C3%ADfica_Rondon-Roosevelt",
        "situacao": "ok",
        "texto": "A Expedição Científica Rondon-Roosevelt (em inglês: Roosevelt–Rondon Scientific Expedition) ocorreu entre 1913 e 1914, visando seguir o curso do rio da Dúvida (após a expedição, foi denominado rio Roosevelt), a fim de determinar se ele era ou não afluente do Amazonas, e teve como líderes o Marechal Cândido Rondon e Theodore Roosevelt.\n[…]\nRondon encontraria o rio numa expedição anterior para a construção de uma linha telegráfica, porém a Expedição Científica Rondon-Roosevelt foi o primeiro grupo não-indígena conhecido a explorar o longo curso do rio, localizado em áreas remotas da Bacia Amazônica, na Amazônia, Brasil. Parte patrocinada pelo Museu Americano de História Natural, durante a expedição também foram coletadas várias espécies de animais e insetos.\n[…]\nKermit Roosevelt, filho de Theodore, havia ficado noivo recentemente e não planejava se juntar à expedição, mas o fez por insistência de sua mãe Edith Roosevelt, a fim de proteger seu pai. A expedição começou em Cáceres, uma pequena cidade às margens do rio Paraguai, em dezembro de 1913. Eles viajaram para Tapirapuã, onde Rondon já havia descoberto as cabeceiras do Rio da Dúvida.\n[…]\nOs membros da expedição foram premiados com a Medalha de Serviço Distinto da Associação Theodore Roosevelt por sua conquista.\n[…]\nEm 26 de setembro de 2021, The American Guest, uma minissérie brasileira de quatro episódios, foi lançada na HBO Latin America e, posteriormente, na HBO Max. A série, escrita por Matthew Chapman e dirigida por Bruno Barreto, acompanha a expedição do ex-presidente dos EUA Theodore Roosevelt, interpretado por Aidan Quinn, ao lado do oficial do exército brasileiro Cândido Rondon, interpretado por Chico Diaz.\n[…]\nVisitas presidenciais dos Estados Unidos à América do Sul\n[…]\nRoosevelt, Theodore (1914) Through the Brazilian Wilderness.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Pelourinho",
      "descricao": "Coluna de pedra erguida em praça pública nas vilas coloniais portuguesas, usada para castigos públicos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nas vilas do Brasil colonial, escravizados e condenados eram amarrados ao pelourinho, na praça, para quê?",
    "resposta": "Serem açoitados em público",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pelourinho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pelourinho",
        "situacao": "ok",
        "texto": "Um pelourinho é uma coluna de pedra, ou menos frequentemente de madeira, erigida em lugar público, junto à qual se expunham e castigavam os criminosos. Era o símbolo máximo da dignidade municipal e era costume estar na praça principal de uma cidade ou vila. Tinham direito a pelourinho os grandes donatários, os bispos, os cabidos e os mosteiros, enquanto proprietários dos senhorios e honras, como p\n[…]\nOs pelourinhos também eram designados popularmente por picota [carece de fontes]?.\n[…]\nAntes dessa altura, segundo Herculano, o pelourinho era uma derivação, de costumes muito antigos, da erecção nas cidades do ius italicum das estátuas de Marsias ou Sileno, símbolos das liberdades municipais. Mas outros historiadores remetem para a Columna ou Columna Moenia romana, poste erecto em praça pública no qual os sentenciados eram expostos ao escárnio do povo.\n[…]\nEm Portugal, os pelourinhos ou picotas (esta a designação mais antiga e popular) dos municípios localizavam-se sempre em frente ao edifício da câmara, desde o século XII. Muitos tinham, no topo, uma pequena casa em forma de guarita, feita de grades de ferro, onde os delinquentes eram expostos para a vergonha pública. Noutros locais, os presos eram amarrados às argolas e açoutados ou mutilados, consoante a gravidade do delito e os costumes da época.\n[…]\nNo Brasil, também houve pelourinhos na época colonial, trazidos por D. Maria I, e também antes, servindo como símbolos do poder público e lugar de castigo para criminosos, negros escravizados que lutavam por liberdade e homossexuais, inclusive se improvisavam nos navios os chamados Pelourinhos, para a Pena e/ou Pecado.\n[…]\nPelourinho de Óbidos, no Pará, localizado na praça central da cidade;\n[…]\nChaves, Luís. Os Pelourinhos Portugueses, Gaia, 1930.\n[…]\nCARVALHO, A. \"Pelourinhos da Beira Interior: uma página esquecida na história de Portugal.\" Açafa OnLine (2013): 251-271.\n[…]\nVídeos sobre o pelourinho"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Réis",
      "descricao": "Antiga moeda usada em Portugal e no Brasil, da Colônia até 1942, quando foi substituída pelo cruzeiro."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Durante a Colônia e o Império, qual era a moeda usada no Brasil?",
    "resposta": "Réis",
    "distratores": [
      "Cruzeiro",
      "Escudo",
      "Peso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_real_(old)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_real_(old)",
        "situacao": "ok",
        "texto": "The first official currency of Brazil was the real (pronounced [ʁeˈaw]; pl. réis), with the symbol Rs$. As the currency of the Portuguese empire, it was in use in Brazil from the earliest days of the colonial period, and remained in use until 1942, when it was replaced by the cruzeiro.\n[…]\nThe name \"real\" was resurrected in 1994 for the new currency unit (but with the new plural form \"reais\"). This currency is still in use. One modern real is equivalent to 2.75 × 1018 (2.75 quintillion) of the old réis.\n[…]\nIn 1833, the government issued copper exchange notes in denominations of 1, 2, 5, 10, 20, 50 and 100 mil réis. These were followed, in 1835, by Treasury notes in denominations of 1, 2, 5, 10, 20, 50, 100, 200 and 500 mil réis. 500 mil réis notes were added in 1874, with 1,000 mil réis introduced in 1921. Treasury notes continued to be produced throughout the remaining period the real circulated and the final issues were overstamped to produce the first cruzeiro notes.\n[…]\nBetween 1850 and 1893, a number of private banks issued paper money in denominations between 10 and 500 mil réis. They included a later Banco do Brazil (1853–1890), the Banco do Maranhão (1857–1885) and the Banco da República dos Estados Unidos do Brasil (1890–1892).\n[…]\nBetween 1906 and 1910, the Caixa de Conversão issued notes in denominations of 10, 20, 50, 100, 200, 500 and 1,000 mil réis (1 conto de réis). In 1905, another Banco do Brazil was founded, which issued paper money between 1923 and 1942 in denominations of 1, 2, 5, 10, 20, 50, 100, 200, 500 and 1,000 mil réis. From 1923, the name of the bank was altered to Banco do Brasil. In 1926, the Caixa de Estabilização issued gold notes in denominations of 10, 20, 50, 100, 200, 500 and 1,000 mil réis."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Real_%28antiga_moeda_brasileira%29",
        "situacao": "ok",
        "texto": "Real (plural réis) foi a unidade monetária utilizada no Brasil desde sua colonização até 5 de outubro de 1942, quando foi substituída pelo cruzeiro na razão de 1 cruzeiro por 1 mil-réis.\n[…]\nO real, cujo plural é \"réis\", foi a primeira moeda oficial do Brasil, utilizada desde o período colonial pelos portugueses, até 1 de novembro de 1942. No entanto, durante grande parte do período colonial, o Brasil utilizava uma mistura de moedas, incluindo a moeda espanhola (o peso), e até mesmo o ouro em pó, como meio de troca. A história do real está profundamente entrelaçada com a evolução econômica e política do país.\n[…]\nCom a independência do Brasil em 1822, o país continuou a utilizar o Real como sua unidade monetária oficial. Durante o século XIX, o governo brasileiro começou a cunhar suas próprias moedas em reais, consolidando a moeda como símbolo da soberania nacional. A moeda de mil-réis, que equivalia a 1 000 réis, tornou-se uma denominação comum e amplamente utilizada no comércio e nas transações diárias.\n[…]\nTostão - 80 réis (período Colonial e Imperial); 100 réis (em cuproníquel emitida entre 1917 a 1932). Equivalente a \"80 centavos\" ou \"1 real\" de hoje.\n[…]\nA cunhagem das moedas de bronze, iniciada no final do Império, recomeçou no período republicano. As peças inovavam com a apresentação de legendas e temas diferentes, de acordo com o valor. Deixaram de ser cunhadas em 1912. A moeda de 20 Réis trazia o lema \"Vintém Poupado, Vintém Ganho\". A moeda de 40 Réis tem como lema \"A Economia Faz a Prosperidade\". Como o real não era fracionável, pode ser comparado a \"20 centavos\" e a \"40 centavos\" de hoje.\n[…]\nEm 1854, a receita total do Império foi de 35.000 contos de réis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Ação Integralista Brasileira",
      "descricao": "Movimento político de inspiração fascista fundado por Plínio Salgado em 1932."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos anos trinta, os integralistas de Plínio Salgado desfilavam uniformizados com camisas de qual cor?",
    "resposta": "Verde",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ação_Integralista_Brasileira",
      "https://en.wikipedia.org/wiki/Brazilian_Integralism"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ação_Integralista_Brasileira",
        "situacao": "ok",
        "texto": "Ação Integralista Brasileira (AIB) foi um movimento político fascista brasileiro de cariz ultranacionalista, corporativista, conservador e tradicionalista católico de extrema-direita. Inspirado no fascismo italiano, no integralismo lusitano e baseado na Doutrina Social da Igreja Católica, foi fundado em 7 de outubro de 1932 pelo escritor e jornalista brasileiro Plínio Salgado.\n[…]\nOs integralistas também ficaram conhecidos como camisas-verdes ou, por seus detratores, em referência à cor dos uniformes que utilizavam, como galinhas-verdes.\n[…]\nOs principais idealizadores que deram corpo ao movimento integralista brasileiro foram Plínio Salgado, Gustavo Barroso e Miguel Reale. Plínio Salgado sistematizou a teoria do Estado Integral, e criou os uniformes, símbolos, costumes, hábitos e rituais dos participantes do movimento integralista, e criou a Ação Integralista Brasileira em 7 de outubro de 1932, com lançamento do Manifesto de Outubro de 1932.\n[…]\nA atitude dos integralistas brasileiros em público era marcada pela simbologia e iconografia adotada. Os integralistas se apresentavam, oficialmente, uniformizados. As camisas e capacetes eram em tons de verde mar, as gravatas eram pretas e as calças pretas ou brancas.\n[…]\nNo entanto, alguns pesquisadores apontam que algumas das lideranças integralistas apresentavam pensamentos considerados racistas em relação aos judeus. Há indícios de uma rixa entre Plínio Salgado e Gustavo Barroso, uma vez que Barroso era um dos principais proponentes do antissemitismo dentro do movimento integralista, ao passo que Salgado se oporia a estas ideias, dizendo que, no Brasil, \"o problema é ético, e não étnico\".\n[…]\nA Ascensão da Ação Integralista Brasileira (1932-1937)1, por Jefferson Rodrigues Barbosa, Revista de Iniciação Científica da FFC, v. 6 n. 0 (2006): N 1/2/3\n[…]\nMedia relacionados com Ação Integralista Brasileira no Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Integralism",
        "situacao": "ok",
        "texto": "Brazilian integralism (Portuguese: integralismo) was a political movement in Brazil, created in October 1932. Founded and led by Plínio Salgado, a literary figure somewhat famous for his participation in the 1922 Modern Art Week, the movement had adopted some characteristics of European mass movements of those times, specifically of Italian fascism, but distanced itself from Nazism because Salgado\n[…]\nThe name of the party created to support its doctrine was Brazilian Integralist Action (Portuguese: Ação Integralista Brasileira, AIB). The reference to Integralism mirrored a traditionalist movement in Portugal, the Lusitanian Integralism. For its symbol, the AIB used a flag with a white disk on a royal blue background, with an uppercase sigma (Σ) in its center.\n[…]\nThe AIB disintegrated after that 1938, and in 1945, when the Vargas dictatorship ended, Salgado founded the Party of Popular Representation (PRP), which maintained the ideology of Integralism, but without the uniforms, salutes, signals, and signs. The various political leaderships raised among Integralism dispersed into various ideological positions during subsequent political struggles. Some former members participated in the 1964 military coup that overthrew President João Goulart.\n[…]\nIntegralists and former Integralists took a range of positions inside the military right-wing dictatorship that followed the 1964 Brazilian coup d'état. Plínio Salgado joined the ARENA, the pro-military party. Augusto Rademaker and Márcio Melo, former Integralists, were two of the three-member junta that briefly ruled Brazil in 1969, in the transition from the second military government of Artur da Costa e Silva to the third (that of Emílio Médici).\n[…]\nSite of the integralist nucleus of the south of Brazil (in Portuguese)\n[…]\nAção Integralista Brasileira symbols at Flags of the World\n[…]\nVideo clip showing Integralist uniforms, parades and leaders"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Lei de Terras",
      "descricao": "Lei brasileira de 1850 que regulamentou a propriedade das terras no Império."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Aprovada em 1850, a Lei de Terras determinou que as terras públicas do Império só poderiam ser obtidas de que forma?",
    "resposta": "Por compra",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lei_de_Terras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_de_Terras",
        "situacao": "ok",
        "texto": "Lei de Terras, como ficou conhecida a lei nº 601 de 18 de setembro de 1850, foi a primeira iniciativa no sentido de organizar a propriedade privada no Brasil. Até então, não havia nenhum documento legal específico que regulamentasse a posse de terras e com as modificações sociais e econômicas pelas quais passava o país, o governo se viu pressionado a organizar esta questão.\n[…]\nTrata-se de uma legislação específica para a questão fundiária. Esta lei estabelecia a compra como a única forma de acesso à terra e abolia, em definitivo, o regime de sesmarias. Muito embora não tenha havido revogação formal, considera-se que a mesma foi derrogada quando da edição da Lei nº 4.504, de 30 de novembro de 1964 (o \"Estatuto da Terra\"), que trata do mesmo assunto.\n[…]\nO Regulamento imperial da lei, aprovado pelo Decreto nº 1318, de 30 de janeiro de 1854, conferiu relevo inédito à sisa: segundo o seu artigo 26, os «escriptos particulares de compra e venda, ou doação, … se consideram legítimos, se o pagamento do respectivo imposto tiver sido verificado antes da publicação deste Regulamento».\n[…]\nA partir de 1850, portanto, só poderia haver ocupação de terras por meio de compra e venda ou de autorização da coroa. Todos os que já estavam nela, receberam o título de proprietário, porém, tinha que residir e produzir na terra.\n[…]\nA criação desta Lei transforma a situação na época porque garantiu os interesses dos grandes proprietários do Nordeste e do Sudeste que estavam iniciando a promissora produção do café. Definiu que: as terras ainda não ocupadas passavam a ser propriedade do Estado e só poderiam ser adquiridas através da compra nos leilões mediante pagamento à vista, e não mais através de posse, e quanto às terras já ocupadas, estas podiam ser regularizadas como propriedade privada.\n[…]\n«Íntegra da Lei de Terras»"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Constituição brasileira de 1824",
      "descricao": "Primeira constituição do Brasil, outorgada por Dom Pedro Primeiro em 1824 e vigente durante todo o Império."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A Constituição do Império, de 1824, estabeleceu o voto censitário. O que se exigia de quem queria votar?",
    "resposta": "Uma renda mínima",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Constituição_brasileira_de_1824"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Constituição_brasileira_de_1824",
        "situacao": "ok",
        "texto": "Constituição Política do Império do Brasil, comumente referida como Constituição de 1824, foi a primeira constituição do Brasil, outorgada em 25 de março de 1824 e revogada em 24 de fevereiro de 1891.\n[…]\nVigente durante o período do Brasil Império, ela foi uma constituição do tipo outorgada, isso é, imposta unilateralmente pela vontade do imperador Pedro I, que a encomendara ao Conselho de Estado. D. Pedro havia dissolvido a Assembleia Constituinte em 1823 e, por meio da Constituição de 1824, impôs o seu próprio projeto político ao País. O mesmo D. Pedro viria a outorgar, em Portugal, a Carta Constitucional de 29 de abril de 1826, inspirada no modelo brasileiro.\n[…]\nNo dia três de maio de 1823, a assembleia geral constituinte e legislativa do império do Brasil deu início à legislatura com o intento de elaborar a primeira constituição política do país. Entre os deputados constituintes, 22 eram parte do clero. Uma parte dos constituintes tinha orientação liberal-democrata: queriam uma monarquia que delimitasse os poderes do imperador ao de uma figura decorativa.\n[…]\nUm deles, o deputado por Pernambuco Andrade de Lima, manifestou claramente seu descontentamento, alegando que a frase do monarca fora por demais ambígua. Os deputados que se encontravam na Constituinte eram em sua grande maioria liberais moderados, reunindo \"o que havia de melhor e de mais representativo no Brasil\". Foram eleitos de maneira indireta e por voto censitário e não pertenciam a partidos, que ainda não existiam no país.\n[…]\nEntre as principais definições da constituição de 1824, estão:\n[…]\nDia da Constituição (Brasil)\n[…]\nPolítica do Império do Brasil\n[…]\nConstituição Política do Império do Brazil\n[…]\nMuseu Imperial de Petrópolis"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Palácio do Catete",
      "descricao": "Palácio no bairro do Catete, no Rio de Janeiro, sede da Presidência da República de 1897 a 1960."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Sede da Presidência até a mudança da capital para Brasília, o Palácio do Catete, no Rio de Janeiro, abriga hoje qual instituição?",
    "resposta": "Museu da República",
    "distratores": [
      "Museu Imperial",
      "Museu Nacional",
      "Arquivo Nacional"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Palácio_do_Catete",
      "https://pt.wikipedia.org/wiki/Museu_da_República"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Palácio_do_Catete",
        "situacao": "ok",
        "texto": "O Palácio do Catete é um prédio histórico localizado na cidade do Rio de Janeiro, sendo um exemplar da arquitetura neoclássica brasileira do final do século XIX. O palácio foi palco de diversos episódios importantes da história do Brasil, tal como o suicídio de Getúlio Vargas, e abriga atualmente o Museu da República.\n[…]\nEm 1896, enquanto o presidente Prudente de Morais estava afastado do cargo por motivos de doença, o vice-presidente Manuel Vitorino requisitou o antigo Palácio Nova Friburgo para que nele fosse instalada a sede da Presidência da República, que até então havia sido o Palácio do Itamaraty, no Rio de Janeiro.\n[…]\nAtualmente serve de espaço expositivo ao vizinho Museu do Folclore Edison Carneiro.O antigo Palácio Nova Friburgo foi oficialmente inaugurado como sede da Presidência da República em 24 de fevereiro de 1897, no sexto aniversário da primeira Constituição republicana.\n[…]\nNa República, o salão foi usado como sala de música e para a realização de saraus. Um dos espelhos existentes nos tempos do Barão de Nova Friburgo foi substituído por um painel executado pelos pintores Antonio Parreiras e Décio Vilares.\n[…]\nFicava neste andar o quarto onde se suicidou Getúlio Vargas, em 24 de agosto de 1954. Logo após a morte do ex-presidente, a mobília foi transferida do Palácio do Catete para uma sala do Museu Histórico Nacional, na qual se buscou recriar o cenário onde ocorreu o episódio. Com a inauguração do Museu da República, o quarto foi novamente montado no Palácio do Catete. Nele são expostos o pijama usado por Getúlio naquela madrugada, bem como o revólver e a bala utilizados na ocasião.\n[…]\nVisita virtual imersiva ao Museu da República\n[…]\nAcervo do Arquivo Histórico e Institucional do Museu da República no Portal Brasiliana Fotográfica\n[…]\nPágina do Museu da República no portal Museus do Rio"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Museu_da_República",
        "situacao": "ok",
        "texto": "O Museu da República é um museu brasileiro localizado na cidade do Rio de Janeiro, mais precisamente no prédio histórico do Palácio do Catete. Sua função é preservar, investigar e comunicar os objetos e documentos que testemunham a memória e a história da forma de governo republicana no Brasil. Integra a estrutura do Instituto Brasileiro de Museus, autarquia federal vinculada à Secretaria Especial\n[…]\nA transformação do Palácio do Catete em Museu da República remonta ao período que antecedeu a mudança da capital federal para Brasília. Último presidente a ocupar o palácio, Juscelino Kubitschek foi convencido da necessidade de integrá-lo ao patrimônio histórico nacional, reconhecendo sua importância na vida política e social do país.\n[…]\nAssim, por meio do Decreto nº 47.883, de 8 de março de 1960, o Palácio do Catete se tornou sede da Divisão de História da República (DHR), novo órgão da estrutura do Museu Histórico Nacional, que seria responsável pela sua gestão.\n[…]\nDe acordo com o decreto, a DHR seria responsável por “receber, classificar, catalogar, pesquisar, expor e conservar objetos adquiridos, doados ou transferidos, ligados, direta ou indiretamente, à História da República Brasileira”. A adaptação do palácio para sua nova função coube à equipe do Museu Histórico Nacional, então dirigido pelo jornalista e escritor Josué Montello. A maior parte do acervo da nova instituição também veio transferida daquele museu.\n[…]\nA segunda coleção temática em volume é a Coleção Presidência da República (1.232 itens), que reúne objetos relacionados ao período em que o Palácio do Catete foi sede da Presidência da República e, em menor parte, ao período em que o palácio pertencia à família do Barão de Nova Friburgo. São objetos de uso interior, como cortinas, louças de porcelana, cristais, prataria, vasos decorativos, candelabros, castiçais, móveis diversos, pinturas e esculturas."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Plano Cruzado",
      "descricao": "Plano econômico lançado em fevereiro de 1986, no governo José Sarney, que criou a moeda cruzado."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Lançado em 1986, no governo Sarney, o Plano Cruzado tentou conter a inflação com qual medida sobre os preços?",
    "resposta": "Congelamento",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Plano_Cruzado",
      "https://en.wikipedia.org/wiki/Cruzado_Plan"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Plano_Cruzado",
        "situacao": "ok",
        "texto": "Plano Cruzado foi um conjunto de medidas econômicas, lançado pelo governo brasileiro em 28 de fevereiro de 1986, com base no decreto-lei nº 2.283, de 27 de fevereiro de 1986, sendo José Sarney o presidente da República e Dilson Funaro o ministro da Fazenda. O plano foi aprovado na Câmara dos Deputados com 344 votos a favor e 13 contra, enquanto no Senado Federal só 1 dos 49 parlamentares votou con\n[…]\nA principal marca foi o congelamento de preços. Alimentos, combustíveis, produtos de limpeza, serviços e até o real tiveram os preços tabelados pelo governo. Essas medidas do Plano Cruzado contrariaram a recomendação internacional do Fundo Monetário Internacional, a quem o governo culpava pela inflação por ser \"especuladores\".\n[…]\nSeis dias depois das eleições gerais no Brasil em 1986 o governo lançou o Plano Cruzado II. Em 2005, José Sarney admitiu que o plano cruzado foi um erro.\n[…]\nImediatamente a inflação foi contida e o poder de compra dos salários cresceu subitamente. No entanto, quatro meses depois, o plano já mostrava a sua fragilidade. A demanda aumentou mas as mercadorias, cujos preços haviam sido congelados, desapareceram. Os fornecedores passaram a cobrar um ágio.\n[…]\nO governo havia decidido sustentar formalmente o congelamento de preços até as eleições, em 15 de novembro daquele ano. De fato, graças à popularidade do Plano Cruzado, o pleito foi favorável ao partido do governo, o PMDB, que conseguiu os governadores dos principais Estados do Brasil e quase dois terços da Câmara dos deputados, do Senado e das Assembleias Legislativas estaduais. Seis dias depois, em 21 de novembro, o governo lançou o Plano Cruzado II.\n[…]\nO Cruzado II foi um pacote fiscal que acabou por fornecer uma válvula de escape para toda a inflação reprimida durante o congelamento de preços. O Plano pretendia controlar o déficit fiscal aumentando a receita tributária.\n[…]\nPlano Cruzado II\n[…]\nPlano Collor\n[…]\nPlano Real"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cruzado_Plan",
        "situacao": "ok",
        "texto": "The Cruzado Plan (Portuguese: Plano Cruzado) was a set of economic measures launched by the Brazilian government on February 28, 1986, based on Decree-Law No. 2883 of February 27, 1986, with José Sarney as president and Dilson Funaro as Minister of Finance. The plan was approved in the Chamber of Deputies with 344 votes in favor and 13 against, while in the Federal Senate only 1 of the 49 parliame\n[…]\nThe Cruzado Plan reduced inflation from 12.49% in February 1986 to 1.40% in October of the same year. As a result, the Sarney government became extremely popular, the PMDB elected 53% of the federal deputies and the PFL 24% - providing the administration with a 77% majority in Brazil's federal elections in 1986. The plan was praised by newspaper and politicians, such as José Serra, Maria da Conceição Tavares, Plínio de Arruda and Aloízio Mercadante.\n[…]\nDue to price controls on products and services, supplies became scarcer. Exports fell, imports increased and foreign exchange reserves were depleted. Six days after the federal elections in Brazil in 1986, the government launched the Cruzado Plan II. In 2005, José Sarney admitted that the Cruzado Plan was a mistake.\n[…]\nThe main measures of the Cruzado Plan were issued by Decree Laws No. 2883 and No. 2884, of February 28, 1986 and March 10, 1986, respectively.\n[…]\nAt the end of July, the Cruzado Plan II was decreed; car and fuel prices were increased by 30%, while the government continued to talk about \"zero inflation\".\n[…]\nFrom July to October 1986, the government remained silent about the increasing scarcity of products and the deterioration of external accounts. The \"Cruzadinho\" was a limited fiscal package that involved the creation of a system of compulsory loans on the purchase of gasoline and cars and non-refundable taxes on the purchase of foreign currency and international airline tickets. Expectations of a price thaw stimulated demand."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Fernão Dias Pais",
      "descricao": "Bandeirante paulista do século dezessete que liderou uma longa expedição pelo sertão de Minas Gerais em busca de pedras preciosas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O bandeirante Fernão Dias Pais, que explorou o sertão mineiro no século dezessete, ficou conhecido como o Caçador de quê?",
    "resposta": "Esmeraldas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fernão_Dias"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fernão_Dias",
        "situacao": "ok",
        "texto": "Fernão Dias Pais Leme (São Paulo, c. 1608 – sertão do Espírito Santo, provavelmente Quinta do Sumidouro, em 1681) foi um bandeirante paulista. Ficou conhecido como \"O Caçador de Esmeraldas\". É o bandeirante de mais largo renome, juntamente a Antônio Raposo Tavares.\n[…]\nEm 1671, Fernão Dias Pais Leme recebeu ordens do governador Afonso Furtado para penetrar no sertão em busca das esmeraldas da mítica serra do Sabarabuçu. Uma carta régia de 21 de setembro de 1664 tinha-lhe pedido para \"ajudar Agostinho Barbalho Bezerra\", de modo que a corte começava a tomar conhecimento das esperanças por ouro renascidas no Sabaraboçu.\n[…]\nFernão partiu em 21 de julho de 1674.\n[…]\nOs roteiros do sertão eram familiares, Fernão Dias de Sul a Norte cortou diretriz tão certa que seus arraiais se colocaram mais ou menos sob o mesmo meridiano da Garganta do Embaú; encontrava-se agora com a antiga orografia dos trilhos de Marcos de Azeredo Coutinho, embora viesse de rumo invertido de Sul a Norte: do Araçuaí, apontaram para a conhecida serra dilatada de onde nasce o rio das Ourinas, hoje rio Pardo, mais tarde explorado, e devassando as cercanias em busca da Lagoa Vapabuçu, encontraram \"horda de selvagens\", prenderam um que se ofereceu por guia – a lagoa ficava além da Itacambira (\"pedra pontuda\") e o índio conhecia os socavões das esmeraldas.\n[…]\nIsabel Pais, que se casou com Jorge Moreira;\n[…]\nNesse contexto, Fernão Dias Pais foi tema do poema O caçador de Esmeraldas, de Olavo Bilac, publicado em 1902, do romance histórico A Bandeira de Fernão Dias, publicado por Paulo Setúbal em 1928, e de O sonho das esmeraldas, lançado pelo mesmo autor em 1935. No teatro, Pais Leme é a personagem-título da peça O Governador das Esmeraldas, publicada em 1911 pelo dramaturgo Carlos Góes."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Navio negreiro",
      "descricao": "Navio usado no tráfico atlântico para transportar africanos escravizados até as Américas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os navios que traziam africanos escravizados ao Brasil eram chamados de tumbeiros. Por que receberam esse apelido?",
    "resposta": "Pelas muitas mortes a bordo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Navio_negreiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Navio_negreiro",
        "situacao": "ok",
        "texto": "Navio negreiro (também conhecido como \"navio tumbeiro\") era um tipo de navio de carga para o transporte de pessoas raptadas e escravizadas, responsável por levar mais de 11 milhões de pessoas Africanas escravizadas para América, até o século XIX.\n[…]\nAprisionados no interior da África subsaariana, por incursões dos mercadores escravagistas ou por outros Africanos que lucravam com o tráfico, os escravizados eram trazidos em marcha forçada até o litoral do continente, onde os sobreviventes eram despojados de suas roupas e eventuais pequenos pertences que ainda carregassem consigo, para serem vendidos aos comerciantes europeus, que os embarcavam nos navios negreiros.\n[…]\nNeles, os escravizados eram destinados aos porões da embarcação, onde ficavam presos em grupos às correntes. Cada navio, levava em média quatrocentos Africanos amontoados. O mau-cheiro imperava, e o espaço para movimentação era mínimo, porque embora navios deste tipo fossem geralmente grandes, se otimizava o espaço do mesmo para caber o maior número possível de escravizados.\n[…]\nSem a menor preocupação com a condição das pessoas, os responsáveis pelos navios negreiros amontoavam negros acorrentados como animais em seus porões que muitas vezes advinham de diferentes lugares do continente Africano, causando o encontro de várias etnias e que por vezes eram também inimigas. Seus corpos eram marcados pelas correntes que os limitavam nos movimentos, as fezes e a urina eram feitas no mesmo local onde permaneciam.\n[…]\nAs principais causas de mortes estavam relacionadas a problemas gastrointestinais, escorbuto e doenças infectocontagiosas.[carece de fontes]?\n[…]\nOutro fator que contribuía para o elevado número de mortes eram os castigos aplicados aos revoltosos.[carece de fontes]?"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Constituição brasileira de 1937",
      "descricao": "Constituição outorgada por Getúlio Vargas em 1937, que instituiu o Estado Novo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Constituição de 1937, outorgada por Getúlio Vargas, ganhou que apelido por se inspirar na constituição autoritária de um país do Leste Europeu?",
    "resposta": "Polaca",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Constituição_brasileira_de_1937"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Constituição_brasileira_de_1937",
        "situacao": "ok",
        "texto": "A Constituição Brasileira de 1937, outorgada pelo presidente Getúlio Vargas em 10 de novembro de 1937, mesmo dia em que implanta o período do Estado Novo, é a quarta Constituição do Brasil e a terceira da república, de conteúdo pretensamente democrático. Era, no entanto, uma carta política eminentemente outorgada, mantenedora das condições de poder do presidente Getúlio Vargas.\n[…]\nA Constituição de 1937, que recebeu o  apelido de “Polaca” por ter sido inspirada no modelo semifascista polonês, era extremamente centralizadora e concedia ao governo poderes praticamente ilimitados. Foi redigida pelo jurista Francisco Campos, ministro da Justiça do novo regime, e obteve a aprovação prévia de Vargas e do ministro da Guerra, general Eurico Gaspar Dutra.\n[…]\nO Governo Vargas caracterizou-se desde o início pela centralização do poder, mas ele foi ao extremo com a ditadura de 1937 e 1945, o Estado Novo — nome copiado da ditadura de António Salazar em Portugal. Com essa Constituição, Getúlio implantou um regime autoritário de inspiração fascista que durou até ao fim da Segunda Guerra Mundial e consolidou seu governo, que começara, \"provisoriamente\", em 1930.\n[…]\nSegundo Paulo Bonavides em sua obra Curso de Direito Constitucional, como Constituição outorgada, a Carta de 1937:“[...] representa na tela do constitucionalismo um largo esboço de limitação da autoridade do governante.\n[…]\nNo dia 10 de novembro de 1937, depois de fechar o Congresso e assinar uma nova Constituição, Vargas fez um pronunciamento, transmitido pelo rádio, em que procurava justificar a instauração do novo regime. Em sua \"Proclamação ao Povo Brasileiro\", defendia a revolução como a única alternativa possível diante do clima de desagregação e de afronta à autoridade em que mergulhara a nação. Referia-se, entre outras coisas, ao perigo do comunismo, lembrando a radicalização política que atingira o país."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "João Pessoa",
      "descricao": "Capital do estado da Paraíba, chamada Parahyba até 1930."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A capital da Paraíba ganhou seu nome atual em 1930, em homenagem a qual político assassinado naquele ano?",
    "resposta": "João Pessoa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/João_Pessoa",
      "https://pt.wikipedia.org/wiki/João_Pessoa_Cavalcanti_de_Albuquerque"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/João_Pessoa",
        "situacao": "ok",
        "texto": "João Pessoa é um município brasileiro, capital do estado da Paraíba. Com população de mais de 830 mil habitantes no censo de 2022, a capital paraibana é o município mais populoso de seu estado, o sétimo da Região Nordeste e o 20º do Brasil. A Região Metropolitana de João Pessoa, formada pela capital e mais onze municípios, tinha uma população de aproximadamente 1,4 milhão de pessoas.\n[…]\nSua denominação atual, \"João Pessoa\", é uma homenagem ao político paraibano João Pessoa Cavalcanti de Albuquerque, assassinado em 1930 na cidade do Recife, quando era presidente do estado (na época, denominação para o cargo de governador) e concorria, como candidato a vice-presidente da República, na chapa de Getúlio Vargas.\n[…]\nEm 26 de julho de 1930, João Pessoa fora assassinado na Confeitaria Glória na Rua Nova, em Recife, por João Duarte Dantas, seu adversário e desafeto político. O episódio gerou grande repercussão nacional e se tornou um dos estopins da Revolução de 1930, no qual a Paraíba liderou com Minas Gerais e Rio Grande do Sul. Seu corpo foi embalsamado ainda em Recife e transportado por via férrea para a capital paraibana, onde chegou no dia 27 e seguiu para a Catedral de Nossa Senhora das Neves.\n[…]\nEm 1953, é inaugurado o Busto de Tamandaré e o Aeroclube da Paraíba se muda para área desapropriada pelo governo do estado, no atual bairro do Aeroclube. Ainda naquela mesma década, a praia de Tambaú ganharia seu primeiro calçadão, junto com a abertura da Avenida Almirante Tamandaré. A partir de 1958, começa a ser erguido o Edifício Presidente João Pessoa que, com dezoito andares, tornou-se o primeiro arranha-céu da cidade, entregue no começo dos anos 1960.\n[…]\nA Fundação Cultural de João Pessoa (FUNJOPE), vinculada à SEEC, é o órgão da prefeitura de João Pessoa responsável por promover, incentivar e coordenar políticas públicas de cultura e artes na capital paraibana."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/João_Pessoa_Cavalcanti_de_Albuquerque",
        "situacao": "ok",
        "texto": "João Pessoa Cavalcanti de Albuquerque (Umbuzeiro, 24 de janeiro de 1878 — Recife, 26 de julho de 1930) foi um advogado e político brasileiro. Era sobrinho de Epitácio Pessoa, presidente da República (1919-1922). Foi Auditor-Geral da Marinha, ministro da Junta de Justiça Militar, ministro do Superior Tribunal Militar e presidente da Paraíba (1928-1930). Foi candidato em 1930 a vice-presidente na ch\n[…]\nFoi em sua homenagem que a partir do dia 4 de setembro de 1930, a capital do estado da Paraíba, antes denominada de \"Cidade da Parahyba\", passou a se chamar João Pessoa.\n[…]\nQuando ainda presidente do estado da Paraíba, já candidato a vice-presidente da República, foi assassinado no centro do Recife, na Rua Nova, precisamente na Confeitaria Glória, por João Duarte Dantas, seu adversário político, jornalista, cuja residência fora invadida por elementos da polícia, supostamente a mando de João Pessoa, que culminou com a publicação nos jornais da capital do estado de cartas íntimas trocadas com a professora Anaíde Beiriz.\n[…]\nNo ano de 1997 as cinzas do presidente João Pessoa e de sua esposa, Maria Luíza, foram transportadas para a capital paraibana e colocadas em um mausoléu construído entre o Palácio do Governo e a Faculdade de Direito da Universidade Federal da Paraíba.\n[…]\nA cidade de João Pessoa é assim denominada em sua memória. Antes chamada \"Parahyba\", a capital teve o seu nome alterado, logo após o assassinato do presidente, fato histórico que levou Getúlio Vargas ao poder. Naquele período, foram perseguidos e mortos muitos opositores ao grupo político de que Pessoa fazia parte. O momento de exceção em que se deu a homenagem, entre outras razões, justificaria, segundo alguns pessoenses, a discussão sobre uma nova alteração na denominação da cidade.\n[…]\n\"Paraíba, 29-julho-1929\n[…]\nJoão Pessoa, Presidente do Estado da Paraíba.\"\n[…]\nRevista O Cruzeiro de 2 de agosto de 1930"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Balaiada",
      "descricao": "Revolta popular ocorrida no Maranhão entre 1838 e 1841, durante o Período Regencial."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Balaiada, revolta maranhense do Período Regencial, deve o nome ao apelido de um de seus líderes. Que objeto ele fabricava?",
    "resposta": "Cestos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Balaiada",
      "https://en.wikipedia.org/wiki/Balaiada"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Balaiada",
        "situacao": "ok",
        "texto": "A Balaiada, chamada ainda Guerra dos Bem-te-vis, foi uma revolta popular e social ocorrida no estado brasileiro do Maranhão entre os anos de 1838 e 1841 (uma das mais longas e numerosas revoltas, com início em 13 de dezembro de 1838). Os primeiros indícios da revolta ecoaram da então vila da Manga do Iguará, também conhecida simplesmente Manga (atual cidade de Nina Rodrigues), na região do Maranhã\n[…]\nA Balaiada terminou oficialmente em 4 de março de 1841, quando o governo imperial conseguiu sufocar a revolta no Maranhão. O conflito foi pacificado após a nomeação do coronel Luís Alves de Lima e Silva (futuro Duque de Caxias) como comandante das forças imperiais. Ele conseguiu restaurar a ordem na região, combinando estratégias de repressão militar e negociações com os líderes revoltosos. Porém, a paz só foi alcançada quando o Imperador do Brasil concedeu anistia geral aos últimos rebeldes.\n[…]\nA palavra balaiada provém dos \"balaios\", nome dos cestos típicos manufaturados na região.\n[…]\nA revolta tomou o nome de Balaiada pois Balaio era o apelido de um de seus principais líderes, Manuel Francisco dos Anjos Ferreira. Ele era um fabricante de balaios, e fora vítima da violência policial, que decidiu fazer justiça com as próprias mãos após um soldado desonrar suas filhas.\n[…]\nA importância da revolta reside, por um lado, em seu pioneirismo, tamanho e grandeza, que envolvem seu impacto na formação do campesinato maranhense, se fixando como parte importante da história de resistência da população camponesa. Por outro lado, a Balaiada, como diversas outras revoltas da época da Regência, teve seu caráter multiclassista, contando com uma liderança popular desde o princípio, unindo fazendeiros, vaqueiros e escravos, compondo um exemplo atípico de aliança.\n[…]\nSANTOS, Maria Villela. A Balaiada e a insurreição de escravos no Maranhão. São Paulo: Ática, 1983. 145p.\n[…]\nA BALAIADA | EDUARDO BUENO"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Balaiada",
        "situacao": "ok",
        "texto": "The Balaiada was a social revolt between 1838 and 1841 in the interior of the Province of  Maranhão, Brazil.\n[…]\nDuring the imperial period, the Maranhão region, which exported cotton, suffered a severe economic crisis because of competition with the increasingly-productive United States. In addition, the cattle industry consumed a large part of the workforce in the region. Those factors explain the involvement of the slaves and the poorly-paid free workers in the movement.\n[…]\nThe event that began the revolt was the detention of the brother of rancher Raimundo Gomes from the ranch of his father, Inácio Mendes, a contingent of the National Guard, invaded the municipal jail and freed him, in December 1838.\n[…]\nAfterward, Gomes, with the support of Cosme Bento, an ex-slave with a force of 3,000 escaped Africans, and Manuel Francisco dos Anjos Ferreira, called the balaio (\"basket\") because he was a basketmaker, spread the revolt across the interior of Maranhão, conquering the province's second city in importance, Caxias, and going on to Piauí.\n[…]\nFor his work in the Province of Maranhão, Lima e Silva received the title of Baron de Caxias.\n[…]\nMaria de Lourdes Mônaco Janotti. A Balaiada. São Paulo: Brasiliense, 1987.\n[…]\nRodrigo Otávio. A Balaiada. Rio de Janeiro: Imprensa Nacional, 1942.\n[…]\nRodrigo Otávio. A Balaiada 1839: depoimento de um dos heróis do cerco de Caxias sobre a Revolução dos \"Balaios\". São Paulo: Siciliano, 2001. ISBN 85-267-0869-4\n[…]\nMaria Januária Villela Santos. A Balaiada e a insurreição de escravos no Maranhão. São Paulo: Ática, 1983."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Guerra dos Emboabas",
      "descricao": "Conflito de 1707 a 1709 em Minas Gerais entre bandeirantes paulistas e forasteiros portugueses e de outras capitanias pelo controle das minas de ouro."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Guerra dos Emboabas, os paulistas zombavam dos forasteiros com esse termo tupi, ligado a aves de pés emplumados. Que peça de roupa os forasteiros usavam?",
    "resposta": "Botas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guerra_dos_Emboabas",
      "https://en.wikipedia.org/wiki/War_of_the_Emboabas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_dos_Emboabas",
        "situacao": "ok",
        "texto": "A Guerra dos Emboabas foi um conflito ocorrido entre 1707 e 1709 pelo direito de exploração das recém-descobertas jazidas de ouro na região das minas da então capitania de São Vicente ou da capitania de Itanhaém, correspondente a parte do atual estado de Minas Gerais, no Brasil.\n[…]\nA hipótese mais difundida, proposta pelo viajante francês Auguste de Saint-Hilaire, sugere que a palavra derivaria da associação feita pelos paulistas entre “aves de pernas peludas” (mbôab) e as botas e polainas usadas pelos estrangeiros que chegavam às minas. Essa explicação, embora popular, carece de respaldo linguístico sólido e é considerada sobretudo uma dedução do naturalista, pouco familiarizado com as línguas indígenas.\n[…]\nA literatura historiográfica registra ainda outra interpretação, segundo a qual emboaba designaria “pessoa que usa botas”, em contraste com os paulistas, que tradicionalmente andavam descalços. Nessa leitura, o termo também possuía caráter pejorativo, aplicado aos forasteiros que afluíam às regiões mineradoras.\n[…]\nNessa perspectiva, a guerra é compreendida como o conflito entre os bandeirantes paulistas, considerados os legítimos descobridores das minas, e os chamados emboabas, identificados como forasteiros que afluíram à região aurífera após a descoberta do ouro.\n[…]\nNessa interpretação, o termo emboaba possuía sobretudo um significado político e social, sendo utilizado pelos paulistas para designar os grupos que disputavam o controle das minas e os benefícios decorrentes de sua exploração. A guerra aparecia, assim, como o embate entre os \"descobridores\" e os recém-chegados, culminando na derrota dos paulistas e na consolidação da autoridade régia sobre a região mineradora.\n[…]\nGuerra dos Mascates\n[…]\nGuerra dos Emboabas: balanço histórico (em português)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/War_of_the_Emboabas",
        "situacao": "ok",
        "texto": "The War of the Emboabas (Guerra dos Emboabas, lit. “war of the newcomers”) was an internal conflict in colonial Brazil fought between 1707 and 1709 over control of newly discovered gold fields in the interior of the Captaincy of São Vicente.\n[…]\nthe formal regulation of the distribution of mines between paulistas and emboabas;\n[…]\nSocially and demographically, the defeat of the paulistas led to the westward movement of many of their leaders and followers, who, over the following decades, were involved in opening new mining and frontier zones in the centre-west of the colony. At the same time, emboaba merchants, contractors and local office-holders consolidated their positions in the central mining districts, contributing to the rise of new regional elites often more closely tied to Lisbon and to coastal trading houses.\n[…]\nFor much of the 19th and early 20th centuries, the War of the Emboabas was narrated primarily through paulista-centred chronicles and regional histories, which portrayed the conflict as a struggle between heroic pioneers and greedy outsiders. Authors such as Afonso d'Escragnolle Taunay and Diogo de Vasconcelos contributed to the consolidation of this patriotic image.\n[…]\nThe War of the Emboabas has had a lasting presence in Brazilian cultural production. The best-known fictional treatment is the novel A Muralha (1954) by Diná Silveira de Queirós, which dramatizes the expansion of the bandeirantes and the violence of conflicts between paulistas and outsiders in the context of gold discoveries in the interior. The story was adapted for television in the telenovela A Muralha (1968) and in a 2000 miniseries, further popularising images associated with the war."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Teresina",
      "descricao": "Capital do Piauí, fundada em 1852 e batizada em homenagem à imperatriz Teresa Cristina."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que os nomes das cidades de Petrópolis, no Rio de Janeiro, e Teresina, no Piauí, têm em comum?",
    "resposta": "Homenageiam o casal imperial",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Teresina",
      "https://pt.wikipedia.org/wiki/Petrópolis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Teresina",
        "situacao": "ok",
        "texto": "Teresina é um município brasileiro e capital do estado do Piauí, sendo a única capital da Região Nordeste que não se localiza no litoral, distando 343 km do Oceano Atlântico. Sua população, segundo o Censo 2022, do IBGE, era de 866 300 habitantes, o que a faz a cidade mais populosa do Piauí.\n[…]\nO nome da cidade-sede da nova capital piauiense remonta a imperatriz consorte do Brasil, Dona Teresa Cristina de Bourbon-Duas Sicílias, mãe da Princesa Imperial do Brasil, Dona Isabel de Bragança.\n[…]\nA imperatriz teria intermediado, junto ao imperador Dom Pedro II do Brasil, a mudança da capital da província, e em sua homenagem os piauienses puseram o novo nome da cidade, sendo a contração de seus dois primeiros nomes próprios pelos quais ela era conhecida, ou seja, a junção dos nomes Teresa e Cristina, formando Teresina. Tornada nova capital, Teresina passou por um crescimento populacional bastante acentuado, aumentando de 49 para cerca de 8 mil habitantes em duas décadas.\n[…]\nA Central de Artesanato Mestre Dezinho, localizada na Praça Pedro II, consiste num complexo de 25 lojas que comercializam o melhor da produção artesanal e artística do Estado, além de abrigar a Escola de Música de Teresina e a Escola de Balé. A escolha do nome, Mestre Dezinho, é uma homenagem a um dos maiores artesões que o Piauí já teve, com um trabalho consistente e reconhecido nacionalmente.\n[…]\nConstruída em 1939, foi projetada pelo engenheiro alemão Germano Frank, tornando-se o símbolo máximo de Teresina, sendo o mais divulgado cartão postal da cidade. No dia 11 de setembro de 2008, o IPHAN declarou a ponte como Patrimônio Cultural Brasileiro.\n[…]\nA nomeação do museu como Dom Paulo Libório é uma homenagem ao primeiro bispo natural do Piauí que serviu em Teresina, sediado na sua última moradia.[carece de fontes]?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Petrópolis",
        "situacao": "ok",
        "texto": "Petrópolis é um município localizado na Região Metropolitana do Rio de Janeiro, no estado do Rio de Janeiro, no Brasil. Ocupa uma área de 795,798 km², e sua população é de 278.881 habitantes, de acordo com o censo do IBGE divulgado em 2023. Além de ser a maior e mais populosa cidade da Região Serrana Fluminense e da Região Geográfica Intermediária de Petrópolis, também detém o maior PIB e IDH da r\n[…]\nA partir de então, durante o verão, a cidade tornava-se a capital do Império do Brasil, com a mudança de toda a corte. Grande número de habitantes da cidade do Rio de Janeiro também se mudava durante o verão para Petrópolis para fugir dos surtos de febre amarela. Dom Pedro II governou por 49 anos e, em pelo menos quarenta verões, permaneceu em Petrópolis, eventualmente por até cinco meses. Em 29 de setembro de 1857, a localidade foi elevada à condição de cidade.\n[…]\nA cidade também possui redes de televisão locais com certa influência: Rede Petrópolis de Televisão, TV Vila Imperial e TV Cidade de Petrópolis, com sedes situadas no centro.\n[…]\nAs principais e mais escutadas estações de rádio com sede em Petrópolis são a Rádio Tribuna FM (88.5 MHz), Rádio UCP (106.3 MHz), Rádio Supernova FM (98.7 MHz) e Rádio Imperial (1 550 AM). Além destas também são muito escutadas rádios com sede na cidade do Rio de Janeiro, como a Rádio Mix FM Rio, na qual já existiu um domínio exclusivo da Rádio MIX em Petrópolis, que posteriormente foi comprado pela Rádio UCP.\n[…]\nA cultura de Petrópolis está diretamente ligada à imigração alemã. Desde 1989, é realizada anualmente a Bauernfest, uma festa típica em homenagem aos imigrantes alemães. O festival em 2012 durou 11 dias, teve a participação de 368 mil visitantes e arrecadou R$ 55 milhões. O festival recebe turistas estrangeiros e do Brasil inteiro, em especial da cidade do Rio de Janeiro.\n[…]\n«Sítio oficial do Museu Imperial de Petrópolis»\n[…]\n«Vistas de Petrópolis»"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Conjunto Moderno da Pampulha",
      "descricao": "Conjunto arquitetônico de Oscar Niemeyer em torno da lagoa da Pampulha, em Belo Horizonte, construído nos anos quarenta."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O conjunto da Pampulha, em Belo Horizonte, e a cidade de Brasília foram encomendados pelo mesmo político. Quem?",
    "resposta": "Juscelino Kubitschek",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Conjunto_Moderno_da_Pampulha",
      "https://en.wikipedia.org/wiki/Pampulha_Modern_Ensemble"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Conjunto_Moderno_da_Pampulha",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pampulha_Modern_Ensemble",
        "situacao": "ok",
        "texto": "The Pampulha Modern Ensemble (Portuguese: Conjunto Moderno da Pampulha) is an urban project in Belo Horizonte, Minas Gerais state of Brazil. It was designed around an artificial lake, Lake Pampulha, in the district of Pampulha and includes a casino (currently Pampulha Art Museum), a ballroom (Casa do Baile), the Golf Yacht Club (currently Iate Tênis Clube) and the Church of Saint Francis of Assisi\n[…]\nThe buildings were designed by the architect Oscar Niemeyer, in collaboration with the landscape architect Roberto Burle Marx, Brazilian Modernist artists, and structural engineer Joaquim Cardozo.\n[…]\nIn July 2016, the site was declared a UNESCO World Heritage Site because of its outstanding examples of modern architecture and its importance in the development of a Brazilian architectural identity.\n[…]\nExplore Pampulha Modern Ensemble in the UNESCO collection on Google Arts and Culture"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Domingos Fernandes Calabar",
      "descricao": "Senhor de engenho pernambucano que passou para o lado dos holandeses e foi executado pelos portugueses em 1635."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que Domingos Fernandes Calabar e Joaquim Silvério dos Reis têm em comum na memória histórica brasileira?",
    "resposta": "São lembrados como traidores",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Domingos_Fernandes_Calabar",
      "https://pt.wikipedia.org/wiki/Joaquim_Silvério_dos_Reis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Domingos_Fernandes_Calabar",
        "situacao": "ok",
        "texto": "Domingos Fernandes Calabar (Porto Calvo, 1609 — Porto Calvo, 1635) foi um senhor de engenho nascido na então Capitania de Pernambuco, em área que corresponde ao atual estado de Alagoas. Aliou-se aos holandeses que invadiram o que hoje conhecemos como Nordeste do Brasil.\n[…]\nA figura de Calabar inspirou muitos autores e artistas ao longo das décadas e se tornou durante algum tempo, o símbolo nacional brasileiro do \"traidor\". O termo foi usado diversas vezes até os dias de hoje.\n[…]\nO compositor Chico Buarque, junto a Ruy Guerra, fez em 1973 uma peça teatral intitulada Calabar: o Elogio da Traição, na qual pela primeira vez a condição de traidor de Calabar era revisitada. Mas esse posicionamento dava-se muito mais para denunciar a situação da época ditatorial do que uma visão historiográfica sobre os fatos do século XVII.\n[…]\nO autor, jornalista e historiador alagoano Romeu de Avelar (1893–1972) foi o primeiro a escrever um livro sobre o personagem (intitulado Calabar), em 1938, contestando a ideia de que Calabar teria sido, de fato, um traidor. Na época foi considerado subversivo e apreendido pelas autoridades. Nele, o autor corajosamente argumenta que Domingos Calabar, por ter sido brasileiro e não português, tinha todo o direito de escolher de que lado lutar.\n[…]\nAvelar nos mostra ainda um Calabar não apenas corajoso mas também um patriota. Segundo o autor, «Domingos Fernandes Calabar foi um insurreto e um clarividente que se antecipou à revolução histórica e liberal do Brasil» (Calabar, 1938)\n[…]\nCINTRA, Assis. Reabilitação História de Calabar. Estudo documentado, onde prova que Calabar não foi traidor.\" Ed. Civilização Brasileira. Rio de Janeiro. 1933\n[…]\n«Domingos Calabar, o primeiro \"traidor\" brasileiro?, Texto de Mateus Sacoman»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joaquim_Silvério_dos_Reis",
        "situacao": "ok",
        "texto": "Joaquim Silvério dos Reis Montenegro Leiria Grutes (Monte Real, Portugal, 1756 — São Luís, Maranhão, 1819) foi o delator dos inconfidentes mineiros. Esposo de Bernardina Quitéria de Oliveira Belo, prima de Francisco Antônio de Oliveira Lopes e tia do Duque de Caxias e do Conde de Tocantins.\n[…]\nJoaquim Silvério dos Reis foi um militar português que se estabeleceu no Brasil Colônia. Atuou como coronel comandante do Regimento de Cavalaria Auxiliar de Borda do Campo. Também exerceu as atividades de comerciante, fazendeiro, minerador e contratador de impostos. Sua notoriedade histórica decorre de sua participação na Inconfidência Mineira, movimento no qual atuou como denunciante da conspiração separatista à Coroa Portuguesa, em troca do perdão de suas dívidas fiscais.\n[…]\nNo âmbito de seu legado histórico-cultural, Silvério dos Reis é consolidado na memória brasileira como o arquétipo do traidor. Do ponto de vista técnico e jurídico, historiadores e pesquisadores apontam a sua conduta como a precursora institucional da \"delação premiada\" na história do Brasil.\n[…]\nA delação da Inconfidência Mineira foi o ato de traição formalizado por Joaquim Silvério dos Reis, que revelou as articulações de um movimento separatista republicano à Coroa Portuguesa no ano de 1789 (Fonte: \"Instituto Histórico e Geográfico de Tiradentes). O evento é um marco no período do Brasil Colônia, pois resultou na suspensão da revolta antes mesmo de sua eclosão, no encarceramento dos líderes conspiradores e, posteriormente, na execução de Joaquim José da Silva Xavier, o Tiradentes.\n[…]\nSilvério dos Reis sofreu atentados no Brasil porque sua fama de traidor correu rápida, com o que fugiu para Lisboa, voltando ao Brasil em 1808. Foi para o Maranhão, onde sua mulher tinha raízes e lá faleceu em fevereiro de 1819."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Conde d'Eu",
      "descricao": "Gastão de Orléans, príncipe francês, marido da Princesa Isabel e comandante brasileiro na fase final da Guerra do Paraguai."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Conde d'Eu, que comandou as tropas brasileiras no fim da Guerra do Paraguai, era casado com qual integrante da família imperial?",
    "resposta": "Princesa Isabel",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gastão_de_Orléans,_Conde_d'Eu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gastão_de_Orléans,_Conde_d'Eu",
        "situacao": "ok",
        "texto": "Gastão de Orléans, Conde d'Eu (em francês: Louis Philippe Marie Ferdinand Gaston d'Orléans; Neuilly-sur-Seine, 28 de abril de 1842 — Oceano Atlântico, 28 de agosto de 1922), foi um príncipe e militar francês, casado com a herdeira do trono brasileiro, a Princesa Isabel. Era o filho mais velho do príncipe Luís, Duque de Némours e da princesa Vitória de Saxe-Coburgo-Koháry e, portanto, membro da Cas\n[…]\nCasou-se, em 1864, com a herdeira do trono brasileiro, a Princesa Isabel, com quem teve quatro filhos: Luiza Vitória, Pedro de Alcântara, Luiz e Antônio. Foi promovido a comandante geral de artilharia e presidente da comissão de melhoramentos do Exército, quando iniciou a Guerra do Paraguai. Em 1869, foi nomeado substituto do Duque de Caxias, na condição de comandante-chefe dos Exércitos Aliados – Brasil, Argentina e Uruguai.\n[…]\nDe início, o conde estava prometido à princesa Leopoldina e seu primo, à princesa Isabel. Mas, depois de conhecê-los melhor — Gastão era mais velho, mais maduro e responsável — o imperador D. Pedro II resolveu inverter os pares. Gastão foi agraciado com a grã-cruz da Imperial Ordem do Cruzeiro pouco tempo após chegar ao Brasil e, dias depois, proposto como presidente honorário do Instituto Histórico e Geográfico Brasileiro.\n[…]\nO conde d'Eu e D. Isabel, princesa imperial do Brasil, estavam viajando pela Europa em lua-de-mel, quando forças paraguaias invadiram as províncias brasileiras de Mato Grosso e Rio Grande do Sul. D. Pedro II enviou uma carta ao casal, em 1865, exigindo a presença de Gastão no Brasil e que se deslocasse para a cidade de Uruguaiana, no sul do país, para lá se encontrar com ele, com o duque de Saxe e o exército brasileiro.\n[…]\nQuando a República foi proclamada, em 1889, a família imperial brasileira se retirou em exílio para Portugal. O conde d'Eu permaneceu com D. Isabel e seus filhos na Europa.\n[…]\nBrasileiras:\n[…]\nGrã-Cruz da Imperial Ordem da Rosa;"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Abertura dos portos às nações amigas",
      "descricao": "Decreto de Dom João, de janeiro de 1808, que abriu os portos do Brasil ao comércio com nações aliadas de Portugal."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1808, a abertura dos portos brasileiros às nações amigas beneficiou principalmente qual país, aliado de Portugal?",
    "resposta": "Inglaterra",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Abertura_dos_portos_às_nações_amigas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Abertura_dos_portos_às_nações_amigas",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Café no Brasil",
      "descricao": "Introdução e cultivo do café no Brasil, iniciado no Pará no século dezoito e base da economia do país no século dezenove."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois da crise de 1929, o governo Vargas comprou e queimou milhões de sacas de café. Com que objetivo?",
    "resposta": "Sustentar o preço do café",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ciclo_do_café",
      "https://en.wikipedia.org/wiki/Coffee_production_in_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ciclo_do_café",
        "situacao": "ok",
        "texto": "Ciclo do café foi um período da história econômica do Brasil, iniciado em meados do século XIX e findado em 1930, no qual o café foi o principal produto da economia brasileira. O ciclo do café sucedeu ao ciclo do ouro, que chegara ao fim após o esgotamento das minas algumas décadas antes, e pôs fim à crise econômica gerada por essa decadência.\n[…]\nO café costumava ser cultivado de forma não a mais apropriada:\n[…]\nDepois da Primeira Guerra Mundial, o governo mudou de estratégia: não compraria mais café, apenas regularia sua distribuição, e faria isso por meio do Instituto do Café. Essa instituição tinha permissão para reter o excedente de café. Ela evitava que a oferta de café brasileiro nos mercados internacionais ultrapassasse a procura, vendendo o café nas horas certas. Com isso, tinha controle sobre o preço do produto.\n[…]\nCom o fim do ciclo, teve fim também a última grande elite social do Brasil: depois dos senhores de engenhos e dos grandes mineradores, houve os chamados \"barões do café\". O baronato acabava por ser uma espécie de legitimação de poder local, fazendo-os intermediários entre o povo e o governo. Pedro II distribuiu o título de barão em proporção significativamente maior que os que o antecederam no trono. No último ano da monarquia, 1889, o Brasil possuía 316 barões.\n[…]\nEssas ferrovias foram financiadas, em parte, com capital britânico. O ciclo do café facilitou o acesso de a bens de capital da Inglaterra à economia brasileira por meio de pressões político-econômicas desse país sobre o Brasil.\n[…]\nEsse processo contribuiu com o estabelecimento de um balanço de pagamentos, cujo equilíbrio era sustentado principalmente pela exportação de produtos primários, especialmente o café, que deu continuidade ao ciclo do açúcar em termos de uma pauta exportadora predominantemente agrícola no país."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Coffee_production_in_Brazil",
        "situacao": "ok",
        "texto": "Brazil produces about a third of the world's coffee, making the country by far the world's largest producer. Coffee plantations, covering some 27,000 km2 (10,000 sq mi), are mainly located in the southeastern states of Minas Gerais, São Paulo and Espírito Santo where the environment and climate provide ideal growing conditions.\n[…]\nThe second boom ran from the 1880s to the 1930s, corresponding to a period in Brazilian politics called café com leite (\"coffee with milk\"). The name refers to the largest states' dominant industries: coffee in São Paulo and dairy in Minas Gerais.\n[…]\nIn the 1920s, Brazil had a near monopoly of the international coffee market, supplying 80% of the world's coffee. Since the 1950s, the country's market share has steadily declined due to increased global production. Despite a falling share and attempts by the government to decrease the export sector's dependency on a single crop, coffee still accounted for 60% of Brazil's total exports as late as 1960.\n[…]\nThis led the way for second slavery to exist, promoted by the Brazilian government and international European pressures to further expand the coffee economy. The politics and economics behind second slavery, have most certainly affected coffee production in Brazil.\n[…]\nNot being able to reach an agreement in a timely manner, the agreement broke down in 1989. As a result, the Brazilian Coffee Institute, previously controlling the price of coffee by regulating the amount grown and sold, was abolished to limit government interference in favor of free markets.\n[…]\nUp to this point the industry had simply neglected quality control management because government regulations favored scale economies, but now coffee processors began exploring higher quality segments in contrast to the traditionally lower quality."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Imigração italiana no Brasil",
      "descricao": "Grande fluxo de imigrantes italianos para o Brasil, sobretudo entre 1870 e 1920, em especial para as fazendas de café de São Paulo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim do século dezenove, os fazendeiros de café paulistas atraíram milhares de imigrantes italianos principalmente para quê?",
    "resposta": "Substituir a mão de obra escravizada",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Imigração_italiana_no_Brasil",
      "https://en.wikipedia.org/wiki/Italian_Brazilians"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Imigração_italiana_no_Brasil",
        "situacao": "ok",
        "texto": "A imigração italiana no Brasil teve como ápice o período entre 1874 e 1930, ganhando relevância estatística no final do século XIX.\n[…]\nOs italianos que foram para o Brasil podem ser classificados em três grupos principais: os que foram para colônias agrícolas, concentrados no Sul e em menor escala no Sudeste, incentivados pelo governo para criar uma classe de pequenos agricultores; os que foram trabalhar nas fazendas de café, o grupo mais numeroso, atraídos por uma imigração subvencionada para suprir a demanda por mão de obra após a abolição da escravatura, sobretudo em São Paulo, mas também em Minas Gerais, Espírito Santo e Rio de Janeiro; e os que se dirigiram aos centros urbanos, compostos por imigrantes espontâneos, sem depender de incentivos governamentais, de origem mais diversa, muitos com algum capital e qualificação profissional.\n[…]\nSão Paulo e Minas Gerais tiveram uma política imigratória muito semelhante: atrair italianos para substituírem os escravos como mão de obra nas fazendas de café. Os outros estados, por outro lado, atraíam imigrantes visando convertê-los em pequenos proprietários agrícolas. O estado do Rio de Janeiro e, sobretudo, a sua capital, também foi um destino relevante de imigrantes italianos.\n[…]\nOs imigrantes italianos eram verdadeiros substituitos de escravos e, ao perceberem que sua situação social estava \"perigosamente\" perto da dos negros, os italianos sentiam as reivindicações por respeito e igualdade no trato como ameaça à sua identidade e honra.\n[…]\nA população de imigrantes italianos no Brasil, a partir das primeiras décadas do século XX, entrou em franco declínio.\n[…]\nImigração no Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Italian_Brazilians",
        "situacao": "ok",
        "texto": "Italian Brazilians (Italian: italo-brasiliani, Portuguese: ítalo-brasileiros) are Brazilians of full or partial Italian descent, whose ancestors were Italians who emigrated to Brazil during the Italian diaspora, or more recent Italian-born people who've settled in Brazil. Italian Brazilians are the largest number of people with full or partial Italian ancestry outside Italy, with São Paulo being t\n[…]\nDuring the end of the 19th century, denouncement of bad conditions in Brazil aggravated by the crisis in coffee plantations in São Paulo, increased in the press. Reacting to the public clamor, the Italian emigration inspector Adolfo Rossi undertook an investigation into the conditions faced by Italian emigrants on the fazendas, travelling undercover, disguised as a peasant.\n[…]\nEven though Italians were considered to be \"superior\" to blacks by Brazilian landowners, the situation faced by Italians in Brazil was so similar to that of the slaves that farmers called them escravos brancos (white slaves in Portuguese).\n[…]\nThe Italian influence in Brazil affects also music with traditional Italian songs and the merging with other Brazilians music styles. One of the main results of the fusion is samba paulista, a samba with strong Italians influence.\n[…]\nSamba paulista was created by Adoniran Barbosa (born João Rubinato), the son of Italians immigrants. His songs translated the life of the Italian neighborhoods in São Paulo and merged São Paulo dialect with samba, which latter made him known as the \"people's poet.\"\n[…]\nItalian diaspora\n[…]\nItalian language in Brazil\n[…]\nCenni, Franco. Os italianos no Brasil. EDUSP. São Paulo, 2003 ISBN 85-314-0671-4\n[…]\nClemente, Elvo (et al.). Italianos no Brasil: contribuições na literatura e nas ciências, séculos XIX e XX EDIPUCRS. Porto Alegre, 1999 ISBN 85-7430-046-2\n[…]\noriundi.net, a site for descendants from Italians in Brazil\n[…]\nItalianisms in Brazilian Portuguese (In Italian)"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Guerra Guaranítica",
      "descricao": "Conflito de 1754 a 1756 entre os guaranis das missões jesuíticas e tropas portuguesas e espanholas, no sul do Brasil."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Guerra Guaranítica estourou depois que o Tratado de Madri, de 1750, trocou os Sete Povos das Missões por qual colônia portuguesa no Rio da Prata?",
    "resposta": "Colônia do Sacramento",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guerra_Guaranítica",
      "https://pt.wikipedia.org/wiki/Tratado_de_Madrid_(1750)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_Guaranítica",
        "situacao": "ok",
        "texto": "A Guerra Guaranítica (1753–1756) foi o conflito armado envolvendo as tribos Guarani das missões jesuíticas contra as tropas espanholas e portuguesas, como consequência do Tratado de Madrid (1750) que definiu uma linha de demarcação entre o território colonial espanhol e português na América do Sul.\n[…]\nQuando não estava em guerra ou ocupada, a Colônia do Sacramento encontrava-se bloqueada permanentemente pela esquadra naval e tropas de terra da Espanha. Este conflito gerou um impasse nas as missões jesuíticas da bacia do alto Uruguai. Quando as negociações vislumbraram a permuta da Colônia do Sacramento pelos Sete Povos, o marquês de la Ensenada e o jesuíta Francisco de Rávago manifestaram-se contra.\n[…]\nDesde o início das conversações, dois problemas de “usurpação” de territórios afloraram. A Espanha indicava a exagerada progressão lusitana sobre o sul, com a anexação do Rio Grande de São Pedro e parte da banda oriental do Uruguai, além da famigerada Colônia do Sacramento. Portugal, por sua vez, indicava a posse espanhola ilegítima das Filipinas.\n[…]\nEm especial, o ponto chave desse conflito foi a troca da Colônia do Sacramento e dos Sete Povos, entre Espanha e Portugal, respectivamente, configurou-se numa questão delicada que poderia trazer consequências graves para o Prata, marcando o fim da experiência dos povos jesuítico-guaranis, e para a Europa, com a expulsão dos jesuítas e a extinção da Companhia de Jesus.\n[…]\nEm 8 de junho, Andonaegui encerrou a guerra e supervisionou a evacuação dos índios para o oeste do rio Uruguai, o exército aliado permaneceu por dez meses nas Missões, os portugueses recuando para o Rio Pardo sem poder concordar com o limite na nascentes do rio Ibicuy e sem entregar a Colonia de Sacramento à Espanha em 12 de dezembro de 1757.\n[…]\nGuerra de 1801"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Madrid_(1750)",
        "situacao": "ok",
        "texto": "O Tratado de Madrid foi um tratado firmado na capital espanhola entre os reis João V de Portugal e Fernando VI de Espanha, em 13 de janeiro de 1750, para definir os limites entre as respectivas colônias sul-americanas, pondo fim assim às disputas. O objetivo do tratado era substituir o Tratado de Tordesilhas, que já não era mais respeitado na prática.\n[…]\nA definição geral dos limites ocorreria em 1750 com o tratado de Madrid. Os Sete Povos das Missões foram deixados em paz até 1750. Pelo tratado, a área dos Sete Povos das Missões passaria a pertencer a Portugal e em troca a Colônia do Sacramento (no sul do atual Uruguai) passaria ao domínio espanhol. Porém os portugueses exigiam a expulsão dos povos missioneiros.\n[…]\nAlexandre sabia que os espanhóis jamais deixariam em paz uma colônia (Colônia do Sacramento) que lhes prejudicava o tesouro. Além disso, descobrira-se ouro no Brasil, não sendo preciso entrar em conflitos por causa da prata peruana. Para a compensação, já tinha em vista as terras convenientes à coroa portuguesa: os campos dos Sete Povos das Missões, a oeste do Rio Grande do Sul, onde os luso-brasileiros poderiam conseguir grandes lucros criando gado.\n[…]\nO tratado foi admirável em vários aspectos. Determinou que sempre haveria paz entre as colônias americanas, mesmo quando as metrópoles estivessem em guerra. Abandonou as decisões tomadas arbitrariamente nas cortes europeias por uma visão mais racional das fronteiras, marcadas pelos acidentes naturais do terreno e a posse efetiva da terra.\n[…]\nO Tratado de Madrid trouxe como consequências imediatas: a revogação do Tratado de Tordesilhas; a consagração do princípio do uti possidetis (quem tem a posse tem o domínio); a mudança da Colônia do Sacramento pelo território dos Sete Povos das Missões; e a definição do rio Uruguai como fronteira oeste do Brasil com a Argentina."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Correio Braziliense",
      "descricao": "Jornal mensal fundado por Hipólito José da Costa em 1808, publicado até 1822, considerado o primeiro jornal brasileiro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Considerado o primeiro jornal brasileiro, o Correio Braziliense, fundado em 1808 por Hipólito José da Costa, era impresso em qual cidade?",
    "resposta": "Londres",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hipólito_José_da_Costa",
      "https://en.wikipedia.org/wiki/Hipólito_José_da_Costa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hipólito_José_da_Costa",
        "situacao": "ok",
        "texto": "Hipólito José da Costa Pereira Furtado de Mendonça (Colônia do Sacramento, 13 de agosto de 1774 — Londres, 11 de setembro de 1823) foi um jornalista, maçom e diplomata brasileiro, patrono da cadeira 17 da Academia Brasileira de Letras.\n[…]\nObteve a condição de estrangeiro neutralizado, um estrangeiro residente com alguns direitos políticos. De Londres passou a editar regularmente aquele que é considerado o primeiro jornal brasileiro: o Correio Braziliense ou Armazém Literário, que circulou de 1 de junho de 1808 a 1823 (29 volumes editados, no total).\n[…]\nSeu principal inimigo era Bernardo José de Abrantes e Castro, conde do Funchal, embaixador de Portugal em Londres, que chamou ao Correio: \"Esta terrível invenção de um jornal português na Inglaterra\", vindo a editar um periódico contra ele, que circularia até 1819 (O Investigador Portuguez em Inglaterra).\n[…]\nMorreu em 1823, sem chegar a saber que fora nomeado cônsul do Império do Brasil em Londres. No Brasil é considerado o patrono da imprensa. Em Porto Alegre foi homenageado emprestando seu nome ao Museu de Comunicação Social Hipólito José da Costa. Estava sepultado em St. Mary the Virgin, em Hurley, condado de Berkshire; mas em 2001 seus restos mortais foram trasladados para Brasília. Atualmente seus restos mortais estão nos Jardins do Museu da Imprensa Nacional.\n[…]\nO patronato da cadeira 17 da academia foi escolhido por seu fundador, Sílvio Romero, e coube à memória de Hipólito da Costa este posto. Honrava a academia a figura do iniciador da imprensa brasileira.\n[…]\n«Perfil no sítio oficial da Academia Brasileira de Letras»\n[…]\n«Processo de Hipólito José da Costa na Inquisição de Lisboa»\n[…]\nMuseu Da Comunicação Hipólito José da Costa (em Português) - https://cultura.rs.gov.br/musecom"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hipólito_José_da_Costa",
        "situacao": "ok",
        "texto": "Hipólito José da Costa Pereira Furtado de Mendonça (13 August 1774 – 11 September 1823) was a Brazilian journalist and diplomat considered to be the \"father of Brazilian press\".\n[…]\nCosta then founded in 1808 what would be the first Brazilian journal: the Correio Braziliense ou Armazém Literário (Brazilian Post or Literary Warehouse). The journal was not published on Brazilian soil, but it was released three months before the Gazeta do Rio de Janeiro, the official press of the Court. Through it, Costa would spread Liberal ideas.\n[…]\nCosta closed his journal in 1822, after the independence of Brazil, for considering his objectives were met.\n[…]\nHipólito assumed the paternity of Félix José da Costa. His mother, Mary Anne Lyons, was the daughter of his friend W. Lewis, owner of the first typography Correio Braziliense was printed. Hipólito adopted the boy after she died without a husband, making some speculate that he had a bastard child. Because of Hipólito's upcoming official marriage, Félix was sent to Brazil to be educated by his brother, José Saturnino.\n[…]\nAssis Chateaubriand considered Hipólito as an important Brazilian cultural reference and a cosmopolitan citizen. In 1942, he named an airplane in São Paulo as \"Hipólito da Costa\". On 21 April 1960, he named his journal \"Correio Braziliense\" as a homage to Hipólito da Costa. The journal was inaugurated together with Brasília, the new capital of Brazil built during the presidency of Juscelino Kubitschek.\n[…]\nHipólito supported the creation of a Brazilian capital on the countryside and coined the name \"Brasília\".\n[…]\nHipólito da Costa's biography at the official site of the Brazilian Academy of Letters (in Portuguese)"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Faculdade de Medicina da Bahia",
      "descricao": "Escola de medicina criada em Salvador em fevereiro de 1808, a primeira do Brasil, hoje parte da Universidade Federal da Bahia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1808, logo ao chegar ao Brasil, Dom João criou a primeira escola de medicina do país. Em qual cidade?",
    "resposta": "Salvador",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Faculdade_de_Medicina_da_Bahia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Faculdade_de_Medicina_da_Bahia",
        "situacao": "ok",
        "texto": "A Faculdade de Medicina da Bahia da Universidade Federal da Bahia (FMB-UFBA) é uma unidade acadêmica  de ensino, pesquisa e extensão universitária da Universidade Federal da Bahia (UFBA) no campo da Medicina. Trata-se de uma das instituições de ensino superior mais antigas da história do Brasil, instituída em 18 de fevereiro de 1808 por influência do médico pernambucano Correia Picanço, nove meses\n[…]\nA Faculdade de Medicina da Bahia é uma das mais tradicionais instituições de ensino superior do Brasil, fundada por decreto real de Dom João VI, na ocasião de sua visita à Bahia em 22 de janeiro de 1808 durante a transferência da coroa real ao Brasil. Nesse importante ínterim de sua presença em Salvador, o  Cirurgião da Real Câmara, Dr.\n[…]\nEm 18 de fevereiro de 1808, o Príncipe Regente assinou a carta régia que em decisão N.2 autorizou a fundação da “Escola de Cirurgia da Bahia” Nota-se que apesar dos traços genealógicos que ligam a atual FMB à Escola de Cirurgia da Bahia, a função desta última instituição é diferente do que se comumente associa a uma faculdade de medicina.\n[…]\nA sede-máter da Faculdade de Medicina da Bahia é sítio histórico de sua fundação e operação de 1808 a 1976 e atualmente abriga o colegiado de medicina da Universidade Federal da Bahia (UFBA). Situada no largo do terreiro de jesus, configura o local de uma das primeiras construções coloniais na história do Brasil.\n[…]\nO local teve sua primeira ocupação como o \"Colégio de Jesuítas\". Uma das construções mais antigas do Brasil, osprimeiros indícios do colégio, simples quartos de taipa e palha, nos levam a 1549, tecendo-se íntimamente à fundação da própria cidade de Salvador. As primeiras edificações permantentes, de pedra e cal, poderiam ser encontradas, ao mínimo, em 1561. Já em 1550 e 1551, em cartas ao rei, o padre Manoel da Nóbrega dos Jesuítas relata construção do colégio:\n[…]\nHistória da educação no Brasil"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Estrada de Ferro Mauá",
      "descricao": "Primeira ferrovia do Brasil, inaugurada em 1854 por Irineu Evangelista de Sousa no fundo da Baía de Guanabara."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Inaugurada em 1854 por Irineu Evangelista de Sousa, a primeira ferrovia do Brasil partia da Baía de Guanabara rumo a qual cidade serrana?",
    "resposta": "Petrópolis",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Estrada_de_Ferro_Mauá"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Estrada_de_Ferro_Mauá",
        "situacao": "ok",
        "texto": "A Estrada de Ferro Mauá, como é conhecida hoje em dia, e oficialmente denominada Imperial Companhia de Navegação a Vapor e Estrada de Ferro de Petropolis, foi a primeira ferrovia a ser estabelecida no Brasil, a terceira da América do Sul.\n[…]\nA ferrovia foi construída para conectar o Porto de Mauá, na Baía de Guanabara, ao sopé da Serra da Estrela, na região de Petrópolis, no estado do Rio de Janeiro. O objetivo principal era facilitar o transporte de cargas e passageiros do interior do estado para o Rio de Janeiro, especialmente para o transporte de café, um dos principais produtos de exportação do Brasil na época.\n[…]\nMais tarde foi prolongada, chegando a 15,19 km. Foi construída pelo empresário brasileiro Irineu Evangelista de Sousa, o Barão de Mauá.\n[…]\nO trecho ferroviário seguia da Estação Guia de Pacobaíba (antiga Estação Mauá, a estação recebeu esse nome após ser arrendada pela Estrada de Ferro Príncipe do Grão Pará), no atual município de Magé, até Fragoso, e posteriormente à localidade de Inhomirim, também conhecida como Raiz da Serra.\n[…]\nApesar do sucesso inicial e da importância histórica, a Estrada de Ferro Mauá enfrentou diversos desafios, incluindo dificuldades financeiras e concorrência com outras modalidades de transporte. Com o passar do tempo, a linha foi sendo ampliada e modernizada, integrando-se a outras ferrovias e continuando a desempenhar um papel vital na infraestrutura de transporte do Brasil.\n[…]\nEntretanto, ainda resta um pequeno trecho da primeira ferrovia do Brasil com tráfego de trens (Linha Vila Inhomirim, da SuperVia) entre as estações Piabetá e Vila Inhomirim.\n[…]\nIrineu Evangelista de Sousa\n[…]\n«Breve História da Estrada de Ferro Mauá»\n[…]\n«Estrada de Ferro Mauá e outras no site Estações Ferroviárias do Brasil»"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Salvador",
      "descricao": "Capital da Bahia, fundada em 1549 como sede do governo-geral e primeira capital do Brasil."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1549, quem fundou Salvador, a primeira capital do Brasil?",
    "resposta": "Tomé de Sousa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tomé_de_Sousa",
      "https://pt.wikipedia.org/wiki/Salvador"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tomé_de_Sousa",
        "situacao": "ok",
        "texto": "Tomé de Sousa (Rates, 1503 – 1579) foi um militar, nobre fidalgo e político português. Foi nomeado o primeiro governador-geral do Brasil, cargo que exerceu de 1549 a 1553, assim teve grande destaque na história colonial do Brasil.\n[…]\nA fim de consolidar o domínio português no litoral, a 7 de Janeiro de 1549 Tomé de Sousa foi nomeado como primeiro governador-geral do Brasil, recebendo Regimento para fundar, povoar e fortificar a cidade de Salvador, na capitania real da Bahia. Manteve-se no cargo até 1553, sucedido por Duarte da Costa. Após seu mandato como governador-geral, em 1553, retornou a Portugal onde ocupou outros importantes cargos públicos.\n[…]\nCriado o governo geral como forma de incrementar a presença estatal portuguesa no Brasil e apoiar os donatários de capitanias, Tomé de Sousa, nomeado governador-geral (1549-1553), trouxe com ele o Regimento de 17 de dezembro de 1548, com orientações precisas sobre a organização do poder público - fazenda, justiça, defesa, fundação de uma capital - e sobre temas relevantes como as relações com os indígenas e sua catequese e o estímulo às atividades agrícolas e comerciais.\n[…]\nPara instalar a sede do novo governo Tomé de Sousa fundou a cidade do Salvador, onde fez edificar a residência do governador, a Casa da Câmara, a Igreja Matriz, Colégio dos Jesuítas e, aos poucos, outros edifícios.\n[…]\nEm retrospecto, vê-se que Tomé de Sousa ajudou assim a fundar o primeiro bispado do Brasil, assistiu à fundação do primeiro colégio (o da Companhia de Jesus), deu grande incentivo à agricultura e a pecuária e organizou expedições que saíam pelas matas a procura de metais preciosos, as famosas entradas.\n[…]\nPalácio Tomé de Sousa\n[…]\n«Poveiros ilustres - Tomé de Sousa»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salvador",
        "situacao": "ok",
        "texto": "Salvador é um município brasileiro, capital do estado da Bahia. Fundada em 29 de março de 1549 por Tomé de Sousa, por conta da implantação do Governo-Geral do Brasil pelo Império Português, foi a primeira capital do Brasil Colonial e está entre as cidades mais antigas continuadamente habitadas do continente americano e uma das primeiras cidades do Brasil, sendo estabelecida como uma cidade planeja\n[…]\nEm 29 de março de 1549, chegam, pela Ponta do Padrão, na Barra, Tomé de Sousa e comitiva, em seis embarcações: três naus, duas caravelas e um bergantim, com ordens de D. João III de fundar uma cidade-fortaleza chamada do São Salvador. Nasce assim a cidade de Salvador: já cidade, já capital, sem nunca ter sido província. Todos os donatários das capitanias hereditárias eram submetidos à autoridade do primeiro governador-geral do Brasil, Tomé de Sousa.\n[…]\nAssim, núcleo urbano primitivo da primeira capital brasileira é construído no cume de um monte, e a organização da cidade se dá em dois níveis — Cidade Alta, sede do poder civil e religioso, e Cidade Baixa, onde se desenvolviam as atividades marítimas e comerciais. Nas instruções dadas em 1548 por D. João III a Tomé de Sousa, estão expressas as preocupações da Coroa com a regularidade do traçado da nova cidade.\n[…]\nComo a primeira capital da América portuguesa, Salvador cultivou o trabalho escravo e tinha seus pilares instalados em lugares abertos, como o Terreiro de Jesus e as praças que hoje conhecemos como Praça Tomé de Sousa (também conhecida como Praça Municipal) e a Praça Castro Alves. O \"Pelourinho\" era um símbolo de autoridade e de justiça para alguns e injustiça para outros.\n[…]\nLista de municípios do Brasil acima de cem mil habitantes\n[…]\nA fundação de Salvador, na Baía de Todos os Santos, Os Dias da História - A Conferência de Berlim Fundação da cidade de Salvador, no Brasil, por Paulo Sousa Pinto, Antena 2, Portugal, 2017"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Hino da Independência do Brasil",
      "descricao": "Hino patriótico brasileiro com música de Dom Pedro Primeiro, que começa com os versos Já podeis, da Pátria filhos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Dom Pedro Primeiro compôs a música do Hino da Independência do Brasil. Quem escreveu a letra?",
    "resposta": "Evaristo da Veiga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hino_da_Independência_do_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_da_Independência_do_Brasil",
        "situacao": "ok",
        "texto": "O Hino da Independência é uma canção patriótica oficial comemorando a declaração da Independência do Brasil. A letra do Hino da Independência, escrita pelo jornalista e político Evaristo da Veiga (1799–1837) em agosto de 1822, recebeu inicialmente o título de \"Hino Constitucional Brasiliense\", com música de Marcos Portugal. Foi transformado em Hino da Independência, musicado por D. Pedro I, em 182\n[…]\nSomente em 1922, quando do centenário da independência, ele voltaria a ser executado.\n[…]\nDe acordo com uma versão divulgada por Eugênio Egas em 1909, a música teria sido composta pelo Imperador na tarde do mesmo dia da Independência do Brasil, 7 de setembro de 1822 (quando já estava de volta a São Paulo vindo de Santos), tendo sido partiturado às pressas pelo mestre de capela da Catedral de São Paulo, André da Silva Gomes, para execução na noite desse dia, na Casa da Ópera (ao pátio do Palácio do Governo, antigo Colégio dos Jesuítas), por cantores e uma pequena orquestra.\n[…]\nA versão de Eugênio Egas, por outro lado, nunca foi referida nos jornais brasileiros de 1822 e nunca foi comprovada com documentação do período, tendo circulado somente a partir do início do século XX. A letra do Hino Constitucional Brasiliense foi publicada pela Typographia do Diário, em 1822, conforme documentação do Arquivo Nacional.\n[…]\nIndependência do Brasil\n[…]\nHino Nacional Brasileiro\n[…]\nHino da Carta\n[…]\nSímbolos do Brasil\n[…]\n«Símbolos Nacionais — Presidência da República Federativa do Brasil»\n[…]\n«Partitura do Hino»"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Independência ou Morte",
      "descricao": "Quadro de 1888 que retrata o grito do Ipiranga, exposto no Museu Paulista, em São Paulo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que pintor paraibano criou Independência ou Morte, o quadro mais famoso do grito do Ipiranga, exposto no Museu Paulista?",
    "resposta": "Pedro Américo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Independência_ou_Morte_(quadro)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Independência_ou_Morte_(quadro)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Ditadura militar brasileira",
      "descricao": "Regime autoritário governado por militares no Brasil, instaurado pelo golpe de 1964 e encerrado em 1985."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Instaurado em 1964 e encerrado com a posse de um presidente civil, o regime militar brasileiro durou quantos anos?",
    "resposta": "Vinte e um anos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ditadura_militar_brasileira",
      "https://en.wikipedia.org/wiki/Brazilian_military_dictatorship"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ditadura_militar_brasileira",
        "situacao": "ok",
        "texto": "Ditadura militar brasileira foi um regime autoritário e nacionalista instaurado em 1 de abril de 1964, que perdurou até 15 de março de 1985, sendo conduzido por sucessivos governos militares. Teve início com o golpe de Estado de 1964, que depôs o governo João Goulart, eleito democraticamente. A ditadura terminou formalmente em 1985, quando José Sarney assumiu a presidência, marcando o início da ch\n[…]\nA partir de 1 de abril, na prática uma junta militar governava o Brasil, porém formalmente foi declarado vago o cargo de presidente da república, pelo senador Auro de Moura Andrade, presidente do Senado Federal, que empossou o presidente da Câmara dos Deputados, Ranieri Mazzilli na presidência, e com a eleição de Humberto de Alencar Castelo Branco presidente da república pelo Congresso Nacional em 11 de abril, este toma posse na presidência em 15 de abril de 1964 para completar o mandato de Jânio Quadros, que iria de 31 de janeiro de 1961 até 31 de janeiro de 1966.\n[…]\nA partir de 1975, o regime civil-militar brasileiro aliou-se secretamente aos regimes semelhantes na Ditadura de Pinochet, Regime militar paraguaio, Regime militar uruguaio, e, a partir de 1976, Regime militar argentino, para a implementação da Operação Condor.\n[…]\nConforme levantamento da CNV, no primeiro ano do regime militar imposto pelo golpe de 1964, pelo menos 50 mil pessoas foram presas no Brasil e cerca de 30 formas diferentes de tortura foram usadas pelos militares contra civis durante a ditadura. Em 10 de dezembro de 2014 a Comissão Nacional da Verdade entregou seu relatório final a Rousseff.\n[…]\nA Presidenta Dilma Rousseff, apesar de ser vítima das torturas no regime militar (1964-1984), mantém simpatizantes do período autoritário em cargos comissionados relevantes da Administração Federal, a exemplo do referido diretor da Abin.\n[…]\nAcervo da Luta Contra a Ditadura\n[…]\nAos que defendem a volta da ditadura, El País Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_military_dictatorship",
        "situacao": "ok",
        "texto": "The military dictatorship in Brazil (Portuguese: ditadura militar [dʒitaˈduɾɐ miliˈtaʁ]), sometimes called the Fifth Brazilian Republic, was established on 1 April 1964, after a coup d'état by the Brazilian Armed Forces with support from the United States government against President João Goulart. It lasted 21 years, until 15 March 1985.\n[…]\nInstead of his vice president, all state power was assumed by military junta, which chose General Emílio Garrastazu Médici as the new president.\n[…]\nAccording to the Comissão de Direitos Humanos e Assistência Jurídica da Ordem dos Advogados do Brasil, the \"Brazilian death toll from government torture, assassination and 'disappearances' for 1964–81 was [...] 333, which included 67 killed in the Araguaia guerrilla front in 1972–74\". According to the Brazilian Army, 97 military and civilians were killed by terrorist and guerrilla actions made by leftist groups during the same period.\n[…]\nAs president, Figueiredo continued the gradual \"abertura\" process that had begun in 1974. The Amnesty Law, signed by Figueiredo on August 28, 1979, amnestied those convicted of \"political\" or \"related\" crimes between 1961 and 1978. In the early 1980s, the military regime could no longer effectively maintain the two-party system established in 1966. The Figueiredo administration dissolved the government-controlled ARENA and allowed new parties to form.\n[…]\nBrazilian Military Criminal Code\n[…]\nThe Politics of Military Rule in Brazil 1964-1985, by Thomas E. Skidmore (1988).\n[…]\nThe Political System of Brazil: Emergence of a \"Modernizing\" Authoritarian Regime, 1964–1970, by Ronald M. Schneider (1973).\n[…]\nMission in Mufti: Brazil's Military Regimes, 1964–1985, by Wilfred A. Bacchus (1990).\n[…]\nBrazil, 1964-1985: The Military Regimes of Latin America in the Cold War by Herbert S. Klein and Francisco Vidal Luna (2017)."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Jânio Quadros",
      "descricao": "Político brasileiro, presidente do Brasil em 1961, que renunciou após poucos meses."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Jânio Quadros tomou posse como presidente em janeiro de 1961 e renunciou em agosto. Por quanto tempo ele governou?",
    "resposta": "Cerca de sete meses",
    "distratores": [
      "Três meses",
      "Um ano e meio",
      "Dois anos"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jânio_Quadros"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jânio_Quadros",
        "situacao": "ok",
        "texto": "Jânio da Silva Quadros (Campo Grande, 25 de janeiro de 1917 – São Paulo, 16 de fevereiro de 1992), foi um advogado, professor, escritor e político brasileiro. Foi prefeito e governador do estado de São Paulo nos anos 1950. Em seguida, foi o 22.º presidente do Brasil, entre 31 de janeiro de 1961 e 25 de agosto de 1961, data em que renunciou ao seu mandato.\n[…]\nEmbora seu governo tivesse durado por apenas sete meses, pôde, nesse período, traçar novos rumos na política externa e orientar, singularmente, os negócios internos. A posição de Cuba nas Américas após a vitória de Fidel Castro, por exemplo, mereceu sua atenção. Comenta Hélio Silva em A Renúncia:\n[…]\nApesar de uma picada inicial ao Oiapoque ter sido ordenada pelo governador do Amapá (Moura Cavalcanti), a quem o presidente designou a missão, em audiência no dia 3 de agosto de 1961, não houve prosseguimento devido à renúncia de Quadros vinte e dois dias depois.\n[…]\nFui vencido pela reação e, assim, deixo o Governo. Nestes sete meses, cumpri meu dever. Tenho-o cumprido, dia e noite, trabalhando infatigavelmente, sem prevenções nem rancores. Mas, baldaram-se os meus esforços para conduzir esta Nação pelo caminho de sua verdadeira libertação política e econômica, o único que possibilitaria o progresso efetivo e a justiça social, a que tem direito o seu generoso povo.\n[…]\nJânio Quadros deixou o PTB sete meses depois de sua filiação e tentou ingressar no PMDB, tendo sua entrada indeferida pela executiva nacional do partido, voltando assim ao PTB, legenda pela qual foi candidato a governador de São Paulo em 1982, num pleito onde o vitorioso foi Franco Montoro, seu antigo correligionário no PDC. Jânio terminou a eleição na terceira posição, atrás ainda do malufista Reynaldo de Barros.\n[…]\nGoverno Jânio Quadros\n[…]\nO governo Jânio Quadros, Presidência da República do Brasil, consultado em 23 de março de 2008 ."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Diretas Já",
      "descricao": "Campanha popular de 1983 e 1984 pela volta das eleições diretas para presidente do Brasil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano os grandes comícios das Diretas Já reuniram multidões e a emenda das eleições diretas foi derrotada no Congresso?",
    "resposta": "1984",
    "distratores": [
      "1979",
      "1982",
      "1985"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Diretas_Já",
      "https://pt.wikipedia.org/wiki/Emenda_Dante_de_Oliveira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Diretas_Já",
        "situacao": "ok",
        "texto": "Diretas Já foi um movimento político de cunho popular que teve como objetivo a retomada das eleições diretas ao cargo de presidente da República no Brasil, durante a ditadura militar brasileira. A possibilidade de eleições diretas para a Presidência da República no Brasil durante o regime ditatorial, se concretizou com a votação da proposta de Emenda Constitucional Dante de Oliveira pelo Congresso\n[…]\nNa mesma entrevista, Fafá declarou ter sido muito próxima a políticos do PT, mas que sua relação com estes se definhou após ela ter declarado seu apoio a Tancredo Neves, a cuja candidatura o partido se opôs. Fafá foi de suma importância para o comício realizado em 10 de abril de 1984, pois foi ela quem conseguiu fazer com que Dante de Oliveira subisse ao palco do evento, alegando para os policiais presentes que ele era o percussionista de sua banda.\n[…]\nEm 25 de abril de 1984, sob grande expectativa dos brasileiros, a emenda das eleições diretas foi votada, obtendo 298 votos a favor, 65 contra e 3 abstenções. Devido a uma manobra de políticos aliados ao regime, não compareceram 112 deputados ao plenário da Câmara dos Deputados no dia da votação. A emenda foi rejeitada por não alcançar o número mínimo de votos para a sua aprovação.\n[…]\nPara reprimir as manifestações populares, durante o mês de abril de 1984, o então presidente João Figueiredo aumentou a censura sobre a imprensa e ordenou prisões, ocorrendo violência policial. Apesar da rejeição da Emenda Dante de Oliveira na Câmara dos Deputados (ver aqui quadro de votação), o movimento pelas \"Diretas Já\" teve grande importância na redemocratização do Brasil.\n[…]\nVotação da emenda constitucional Dante de Oliveira\n[…]\nComício da Candelária\n[…]\nExplode um novo Brasil: Diário da campanha das Diretas, Ricardo Kotscho\n[…]\nDiretas Já!, Henfil\n[…]\nFolha de S.Paulo: Comício das Diretas-Já\n[…]\nO Estado de S. Paulo: Diretas Já\n[…]\nAbril Cultural: Diretas Já"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emenda_Dante_de_Oliveira",
        "situacao": "ok",
        "texto": "A Proposta de Emenda Constitucional (PEC) nº 05/1983, mais conhecida como Emenda Dante de Oliveira, apresentada pelo então deputado federal Dante de Oliveira (PMDB-MT), tinha por objetivo reinstaurar as eleições diretas para presidente da República no Brasil, através da alteração dos artigos 74 e 148 da Constituição Federal de 1967 (Emenda Constitucional nº 1, de 1969), uma vez que a tradição demo\n[…]\nApesar do apoio popular, a Proposta de Emenda Constitucional foi rejeitada pela Câmara dos Deputados no dia 25 de abril de 1984. Por se tratar de uma emenda constitucional, eram necessários os votos favoráveis de dois terços da Casa (ou seja, um quórum mínimo de 320 deputados, dos 480 à época) para que a Proposta seguisse ao Senado. O resultado da votação foi: 298 deputados a favor; 65 contra; 3 abstenções e 113 ausências ao plenário.\n[…]\nApresentamos esta Emenda com o intuito de restabelecer a eleição direta do Presidente e Vice-Presidente da República.\n[…]\nDifere do que ocorre com outros candidatos, escolhidos em círculos fechados e inacessíveis à influência popular e às aspirações nacionais. Um presidente eleito pelo voto direto está vinculado ao povo e com ele compromissado. As eleições diretas para Presidente da República pressupõe um novo pacto social. Serão as forças vivas da Nação, do assalariado ao empresariado, que irão formar a nova base social do poder. Um presidente eleito por um colégio eleitoral, não tem compromisso com o povo.\n[…]\nAo submetermos esta Proposta ao exame do Congresso Nacional, estamos certos de que seremos porta-vozes do anseio da Nação, da imensa maioria do nosso povo, que, há muito, acalenta esta aspiração, mais forte agora, após ter ressuscitado politicamente, com a última eleição direta para governador.\n[…]\nA presente Proposta de Emenda à Constituição deve ser vista, também, como a única solução à crise econômica, política e social porque passa o País."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cristo Redentor",
      "descricao": "Estátua de Jesus Cristo de braços abertos no alto do morro do Corcovado, no Rio de Janeiro."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Cristo Redentor, no alto do Corcovado, foi inaugurado em que ano?",
    "resposta": "1931",
    "distratores": [
      "1922",
      "1926",
      "1938"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cristo_Redentor",
      "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cristo_Redentor",
        "situacao": "ok",
        "texto": "Cristo Redentor é uma estátua que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, dentro do Parque Nacional da Tijuca. Tem vista para parte considerável da cidade brasileira do Rio de Janeiro, sendo a frente da estátua voltada para a Baía de Guanabara e as costas para a Floresta da Tijuca.\n[…]\nSua inauguração ocorreu no dia 12 de outubro de 1931, dia de Nossa Senhora Aparecida.\n[…]\nO monumento foi inaugurado em 12 de outubro de 1931.\n[…]\nDurante a cerimônia de inauguração, a estátua foi iluminada por uma bateria de holofotes que acionada remotamente pelo pioneiro da rádio de ondas curtas, Guglielmo Marconi, que estava a 9 200 quilômetros de distância, em Roma, na Itália. A sua missa de inauguração aconteceu no Estádio de Laranjeiras, igualmente ocorrida no dia 12 de outubro de 1931.\n[…]\nO Trem do Corcovado é uma linha férrea que começa no bairro do Cosme Velho e segue até o cume do morro do Corcovado, a uma altitude de 710 m. A linha foi inaugurada pelo imperador Dom Pedro II em 9 de outubro de 1884. É, portanto, mais antigo que o monumento do Cristo Redentor, que foi aberto à visitação em 1931. De fato, as peças para a montagem da estátua do Cristo foram transportadas pelo próprio trem ao longo de quatro anos.\n[…]\nEm 2012, foi a vez da apresentadora Eliana escalar o Cristo Redentor, repetindo o gesto de agradecimento pelo sucesso de sua carreira televisiva. A apresentadora também saiu de dentro do monumento e desta vez se dirigiu ao lado direito da cabeça do Cristo para beijá-la. Na série de tevê Life After People, o episódio Wrath of God mostra o Cristo Redentor, após 250 anos sem pessoas para fazerem sua manutenção, desabando sobre o Corcovado.[carece de fontes]?\n[…]\nCristo Redentor no Instagram\n[…]\nCristo Redentor no Facebook\n[…]\nCristo Redentor no YouTube\n[…]\n«Trem do Corcovado»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
        "situacao": "ok",
        "texto": "Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ]) is an Art Deco statue of Jesus in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot and Romanian sculptor Gheorghe Leonida who sculpted the face.\n[…]\nConstructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal, and faces east. The arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone. Christ the Redeemer differs considerably from its original design, as the initial plan was a large Christ with a globe in one hand and a cross in the other.\n[…]\nThe outer layers are soapstone, chosen for its enduring qualities and ease of use. Construction took nine years, from 1922 to 1931, and cost the equivalent of US$250,000 (equivalent to $4,500,000 in 2025) and the monument opened on October 12, 1931.\n[…]\nCristo Redentor, Puerto Plata\n[…]\nCristo Redentore (Christ the Redeemer) of Maratea (21 m, 69 ft)\n[…]\nCristo Redentor in Barranca Province, Lima Region, Peru\n[…]\nCristo del Otero in Palencia, built in 1930 (21 m, 69 ft)\n[…]\nGiumbelli, Emerson (2008). \"A modernidade do Cristo Redentor\". Dados (in Portuguese). 51 (1): 75–105. doi:10.1590/S0011-52582008000100003. ISSN 0011-5258.\n[…]\nGiumbelli, Emerson & Bosisio, Izabella (2010). \"A Política de um Monumento: as Muitas Imagens do Cristo Redentor\". Debates do NER (in Portuguese). 2 (18): 173–192. doi:10.22456/1982-8136.17638. hdl:10183/187720. ISSN 1982-8136.\n[…]\nGiumbelli, Emerson (2013). \"O Cristo Pichado\". Ponto Urbe. Revista do Núcleo de Antropologia Urbana da USP (in Portuguese) (12). doi:10.4000/pontourbe.586. ISSN 1981-3341.\n[…]\nCorcovado Train\n[…]\nPoliakoff, Martyn. \"Soapstone @ Cristo Redentor\". The Periodic Table of Videos. University of Nottingham."
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.73 — 2026-10-19**
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
- no máximo **3 perguntas por âncora** no banco inteiro, somando texto e figura, e no máximo **2 com figura**. As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
