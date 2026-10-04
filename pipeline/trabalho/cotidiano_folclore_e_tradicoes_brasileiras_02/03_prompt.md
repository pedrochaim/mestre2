Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Folclore e Tradições Brasileiras** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Festival Folclórico de Parintins",
      "descricao": "Festa anual de bois-bumbás realizada em Parintins, no Amazonas, com a disputa entre os bois Garantido e Caprichoso."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A cidade de Parintins, palco da disputa entre Garantido e Caprichoso, fica numa ilha do rio Amazonas. Como se chama essa ilha?",
    "resposta": "Ilha Tupinambarana",
    "distratores": [
      "Ilha de Marajó",
      "Ilha do Bananal",
      "Ilha de Maracá"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parintins",
      "https://pt.wikipedia.org/wiki/Ilha_Tupinambarana"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parintins",
        "situacao": "ok",
        "texto": "Parintins é um município brasileiro do interior do estado do Amazonas, na Região Norte do país. É o quarto município mais populoso do estado, com 101 956 habitantes, conforme estimativa do Instituto Brasileiro de Geografia e Estatística (IBGE) em 2024. A sua sede é banhada pelo rio Amazonas.\n[…]\nLocalizada no extremo leste do estado, distante 372 quilômetros em linha reta da capital Manaus, a cidade é conhecida mundialmente por sediar o Festival Folclórico de Parintins, considerado Patrimônio Cultural do Brasil pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN). Sua área é de 5 956 km², representando 0,3789% do estado do Amazonas, 0,1545% da região Norte brasileira e  0,0701% do território brasileiro. Desse total, 12,4235 km² estão em perímetro urbano.\n[…]\nO município possui 13 cadeiras para a Câmara Legislativa, sendo os eleitos para o período 2025-2028: Marcus Cursino, Flávio Farias e Márcia Baranda, do União Brasil; Julvan Medeiros e Alex Garcia, do PSD; Naldo Lima e Fábio Cardoso, do Podemos; Cabo Linhares e Adson Principe, do PL; Telo Pinto (Avante), Fernando Menezes (Republicanos, Babá Tupinambá (Progressistas) e Azamor Pessoa (MDB).\n[…]\nNa música, os destaques de Parintins são: a Toada, (ritmo característico da região) além do samba, forró e outros ritmos nacionais. A cidade possui cantores de renome, como o Chico da Silva, que é autor de inúmeras canções famosas como Pandeiro é Meu Nome, Tempo Bom, É Preciso Muito Amor, Esquadrão do Samba, Cantiga de Parintins, entre outros.\n[…]\n2 VHF - Amazon Sat\n[…]\n7 VHF - Rede Amazônica Parintins (Globo)\n[…]\n43 UHF - Band Amazonas (Band)\n[…]\n7.1 (15 UHF) - Rede Amazônica Parintins (Globo)\n[…]\n12.1 (25 UHF) - TV A Crítica Parintins (TV A Crítica)\n[…]\n43.1 (36 UHF) - Band Amazonas (Band)\n[…]\n«Informações de Parintins»\n[…]\n«Parintins no WikiMapia»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_Tupinambarana",
        "situacao": "ok",
        "texto": "A chamada Ilha Tupinambarana é, na verdade, um conjunto de ilhas que, antes, era considerado como sendo uma única ilha. É rodeada pelo sistema fluvial do Amazonas (rios Amazonas, Madeira, Ramos e Abacaxis). Situa-se no leste do estado do Amazonas, no Brasil. Hoje, é considerada como formada por quatro ilhas completamente separadas por canais naturais denominados \"paranás\" ou \"furos\".\n[…]\nO conjunto de ilhas tem uma área total de 11 850 quilômetros quadrados e, assim, pode ser considerado o segundo maior conjunto fluvial de ilhas do mundo, depois da Ilha do Bananal, no estado do Tocantins, no Brasil.\n[…]\nHá uma pequena e baixa serra que percorre o centro da maior ilha. O grupo de ilhas é majoritariamente coberto por floresta equatorial e somente é acessível por barco ou avião.\n[…]\nSua área é dividida, de sudoeste a nordeste, entre os municípios de Nova Olinda do Norte, Itacoatiara, Urucurituba, Boa Vista do Ramos, Barreirinha e Parintins: este último, a mais populosa cidade do interior do Amazonas e onde se realiza, anualmente, no último fim de semana de junho, o Festival Folclórico de Parintins ou boi-bumbá.\n[…]\nO topônimo \"Tupinambarana\" é uma referência aos antigos habitantes do arquipélago, os índios tupinambaranas.\n[…]\nPesquisas arqueológicas realizadas na cidade de Parintins, situada na Ilha Tupinambarana, revelaram vestígios da Tradição Pocó-Açutuba, evidenciando a presença de antigos grupos indígenas na região. A análise de fragmentos cerâmicos encontrados em sítios urbanos indica uma ocupação humana milenar, com práticas culturais distintas e complexas. Esses achados contribuem para a valorização da história indígena local e para a compreensão da diversidade sociocultural amazônica.Machado, M. M. C. (2024).\n[…]\nOs Antigos Habitantes da Ilha de Tupinambarana: Apontamentos a partir das Cerâmicas Arqueológicas. Museu Paraense Emílio Goeldi. Disponível em: [1]==Referências=="
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Artesanato de capim dourado",
      "descricao": "Artesanato de bolsas, chapéus e bijuterias tecido com a haste brilhante do capim-dourado, típico do Tocantins."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Bolsas, chapéus e bijuterias de capim dourado, que brilham como ouro, são o artesanato típico de qual região do Tocantins?",
    "resposta": "Jalapão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capim-dourado",
      "https://pt.wikipedia.org/wiki/Jalap%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capim-dourado",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jalap%C3%A3o",
        "situacao": "ok",
        "texto": "O parque estadual do Jalapão é uma unidade de conservação brasileira de proteção integral à natureza localizada na região leste do estado do Tocantins. O território do parque, com uma área de 158 970,95 ha, está distribuído pelos municípios de Mateiros e\n[…]\nSão Félix do Tocantins. Criado em 12 de janeiro de 2001, Jalapão é o maior parque estadual do Tocantins. A vegetação no parque é predominantemente a de cerrado ralo e a de campo limpo com veredas.\n[…]\nSua posição estratégica possui continuidade com a área de proteção ambiental do Jalapão, a estação ecológica Serra Geral do Tocantins e o parque nacional das Nascentes do Rio Parnaíba.\n[…]\nO Jalapão é uma região árida pontilhada de oásis. Está situada a leste do estado do Tocantins. Possui temperatura média de 30 graus Celsius. Sua área total é de 34 mil quilômetros quadrados. É cortado por imensa teia de rios, riachos e ribeirões, todos de água límpida e transparente.\n[…]\nO Jalapão abrange os municípios de Ponte Alta do Tocantins, Mateiros, São Félix do Tocantins, Lizarda, Rio Sono, Novo Acordo, Santa Tereza do Tocantins, Lagoa do Tocantins e Rio da Conceição, ocupando uma área equivalente ao estado de Sergipe. Passou à condição de parque estadual em 2001.\n[…]\nÉ possível passar dias no Jalapão sem ver uma única pessoa. A densidade populacional é de 0,8 habitante por quilômetro quadrado.\n[…]\nSão nascentes de rios subterrâneos que não encontram local de vazão e brotam em poços. Os fervedouros são as maiores atrações do Jalapão já que que por causa da pressão da água, os banhistas não afundam. Há algumas regras para as visitações, como o número limitado de visitantes por vez, para evitar a degradação do ambiente.\n[…]\nCapim dourado\n[…]\nMedia relacionados com Parque Estadual do Jalapão no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Paneleiras de Goiabeiras",
      "descricao": "Artesãs capixabas que fazem à mão as panelas de barro pretas usadas na moqueca capixaba, ofício registrado como patrimônio imaterial."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "As panelas de barro pretas da moqueca capixaba são feitas pelas paneleiras do bairro de Goiabeiras. Esse bairro fica em qual capital?",
    "resposta": "Vitória",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Paneleiras_de_Goiabeiras",
      "https://pt.wikipedia.org/wiki/Moqueca_capixaba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Paneleiras_de_Goiabeiras",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moqueca_capixaba",
        "situacao": "ok",
        "texto": "A moqueca, muqueca ou poqueca (do quimbundo mu'keka: 'caldeirada de peixe' ou do tupi opokeka: 'fazer embrulho') é um cozido, geralmente de peixe, típico da culinária brasileira.\n[…]\nA moldura perfeita fica por conta da panela de barro, feita pelas paneleiras do bairro de Goiabeiras Velha, em Vitória. Essas artesãs moldam, queimam e tingem as panelas com cascas tiradas do manguezal. O costume de preparar e servir moqueca em panela de barro está presente em todo o Brasil.\n[…]\nEsse saber foi apropriado dos índios pelos afrodescendentes que vieram a ocupar a margem do manguezal, local historicamente identificado com a produção de panelas de barro. O naturalista Auguste de Saint-Hilaire visitou a região em 1815 e fez a primeira referência a essas panelas, descritas como \"caldeira de terracota, de orla muito baixa e fundo muito raso\", utilizadas para torrar farinha e fabricadas \"num lugar chamado Goiabeiras, próximo da capital do Espírito Santo\".\n[…]\nGoiabeiras é o lugar onde o ofício das paneleirasse se mantém por tradição. Ali  foram encontrados sítios arqueológicos cerâmicos, remanescentes da ocupação indígena, no alto da pequena elevação conhecida como Morro Boa Vista e nas proximidades do aeroporto de Goiabeiras.\n[…]\nAs moquecas e a torta capixaba (outra iguaria local característica da Semana Santa) são parte da identidade cultural do povo do Espírito Santo, e isso certamente explica a continuidade histórica da fabricação artesanal das panelas de barro. A cidade  de Vitória cresceu e alcançou Goiabeiras, que se transformou em um bairro da capital. Mas ali continuam sendo feitas, como sempre, as panelas pretas.\n[…]\nOrigem baiana da moqueca\n[…]\nReceita de moqueca de peixe baiana"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Bonecas de barro do Vale do Jequitinhonha",
      "descricao": "Esculturas de cerâmica, sobretudo bonecas de figuras femininas, feitas por artesãs do Vale do Jequitinhonha."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "As famosas bonecas de barro feitas pelas artesãs do Vale do Jequitinhonha são tradição de qual estado brasileiro?",
    "resposta": "Minas Gerais",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vale_do_Jequitinhonha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vale_do_Jequitinhonha",
        "situacao": "ok",
        "texto": "O Vale do Jequitinhonha é uma região do estado brasileiro de Minas Gerais, na Região Sudeste do país. Possui recursos naturais e origem de culturas portuguesa, negra e indígena.\n[…]\nMinas Novas também estava marcada pela decadência da extração aurífera.\n[…]\nA região é drenada pela bacia do rio Jequitinhonha. O Jequitinhonha nasce na Serra do Espinhaço, no município de Serro, percorre 1.090 km até chegar na sua foz no município de Belmonte, na Bahia. A bacia do rio Jequitinhonha compreende uma área de 70.315 km², sendo que 66.319 km² situam-se em Minas Gerais, enquanto 3.996 km² pertencem à Bahia representando 11,3% da área do estado mineiro e apenas 0,8% do baiano.\n[…]\nA segurança na região do Vale do Jequitinhonha é dada por diversos organismos. A Polícia Militar do Estado de Minas Gerais (PMMG), uma força estadual, é a principal responsável pela segurança na região. A atuação da PMMG no Vale do Jequitinhonha, assim como em todo o estado, é gerida pelas Regiões de Polícia Militar (RPMs); no caso do Vale do Jequitinhonha, a atuação é gerida pelas 15ª e 14ª RPMs, sediadas em Teófilo Otoni e Curvelo, respectivamente.\n[…]\nEm 2017, houve mais de 52 mil matrículas de alunos no ensino fundamental. Na região, há a Universidade Federal dos Vales do Jequitinhonha e Mucuri e o Instituto Federal do Norte de Minas Gerais.\n[…]\nSua religiosidade também é conhecida, como a Festa de Nossa Senhora do Rosário dos Homens Pretos, no município de Chapada do Norte, declarada Patrimônio Cultural Imaterial de Minas Gerais, e a Festa de Nossa Senhora da Lapa, em Vigem da Lapa, a maior festa religiosa do vale. A região é conhecida por ser lar de muitos benzedores que ainda exercem esta atividade."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Irmandade da Boa Morte",
      "descricao": "Confraria religiosa baiana formada por mulheres negras, que realiza todo mês de agosto a Festa da Boa Morte."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Todo mês de agosto, a Irmandade da Boa Morte, formada por mulheres negras, faz sua festa em qual cidade do Recôncavo Baiano?",
    "resposta": "Cachoeira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Irmandade_da_Boa_Morte"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Irmandade_da_Boa_Morte",
        "situacao": "ok",
        "texto": "A Irmandade da Boa Morte é uma confraria religiosa afro-católica brasileira que organiza a Festa da Boa Morte.\n[…]\nÉ admirável que, a propósito de celebrarem a morte, essas mulheres negras cachoeiranas tenham sobrevivido com tanta majestade e garbo.\n[…]\nO mais incrível é que o sistema de crenças tenha absorvido com tamanha funcionalidade e criatividade os valores da cultura dominante, realizando, em nome da vida, complexos processos de apropriação como o evidenciado na descida da própria Nossa Senhora à Irmandade, a cada ciclo de sete anos, para dirigir em pessoa os festejos, investida da figura de Procuradora-Geral, celebrando entre os vivos a relatividade da morte.\n[…]\nTais elementos podem ser constatados tanto na simbologia do vestuário, quanto nas comidas de preceito que evidenciam recorrentes ligações entre este (Aiê) e o outro mundo (Orum), para utilizar aqui duas expressões já incorporadas à linguagem popular da Bahia. Assim como as confrarias, a devoção a Boa Morte foi muito comum na Bahia Colonial e Imperial. Sempre foi uma devoção popular. Na Igreja de Nossa Senhora do Rosário na Barroquinha ela ganhou expressão e consistência.\n[…]\nA Irmandade da Boa Morte Memória, Intervenção e Turistização da Festa em Cachoeira, Bahia - por Armando Alexandre Costa de Castro. pdf\n[…]\nNarcisa Cândida da Conceição, a Mãe Filhinha morre aos 110 anos em Cachoeira\n[…]\nIrmãs da Boa Morte, Egun e bonecos de Orishás: religiosidade afro-brasileira Descubra os contextos e as roupas usadas em importantes manifestações religiosas com matriz africana"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Imagem de Nossa Senhora Aparecida",
      "descricao": "Pequena imagem de terracota de Nossa Senhora da Conceição encontrada por pescadores em 1717 e venerada como padroeira do Brasil."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1717, três pescadores encontraram nas redes a imagem que viria a ser Nossa Senhora Aparecida. Em que rio eles pescavam?",
    "resposta": "Rio Paraíba do Sul",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Nossa_Senhora_da_Concei%C3%A7%C3%A3o_Aparecida"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Nossa_Senhora_da_Concei%C3%A7%C3%A3o_Aparecida",
        "situacao": "ok",
        "texto": "Nossa Senhora da Conceição Aparecida, popularmente chamada Nossa Senhora Aparecida, é uma das mais famosas invocações da Virgem Maria, mãe de Jesus Cristo. É reconhecida oficialmente como a Padroeira do Brasil, título que simboliza a maternal proteção de Maria sobre o povo brasileiro, e celebrada em 12 de outubro.\n[…]\nA imagem de Nossa Senhora Aparecida é uma pequena escultura de terracota, de cor negra, representando a Virgem da Imaculada Conceição. Foi encontrada por três pescadores nas águas do Rio Paraíba do Sul, por volta de outubro de 1717, um acontecimento interpretado como um sinal da presença e da intercessão de Maria junto de seus filhos mais simples e necessitados.\n[…]\nNo dia 20 de abril de 1822, em viagem pelo Vale do Paraíba, o então Príncipe Regente do Brasil, Dom Pedro I e sua comitiva, visitaram a capela e conheceram a imagem de Nossa Senhora Aparecida. Dom Pedro tinha novo compromisso público: visitar a então capela de Nossa Senhora Aparecida, hoje no município de Aparecida.\n[…]\nNa ocasião das comemorações do tricentenário (1717-2017) do encontro da venerável imagem de Nossa Senhora da Conceição Aparecida, a Virgem Maria foi homenageada com diversos títulos eclesiásticos e civis concedidos em reconhecimento.\n[…]\nMuito se especula sobre a história da imagem de Nossa Senhora Aparecida antes de ser encontrada pelos pescadores, em especial os motivos pelos quais ela foi parar no leito do rio Paraíba do Sul.\n[…]\nA devoção nasceu em 1964, quando a professora e cafeicultora Ana Maria Negrini, de Espírito Santo do Pinhal, escreveu o artigo \"Minha Nossa Senhora de Café\", relacionando a cor da imagem de Nossa Senhora da Conceição Aparecida ao tom do café.\n[…]\nAparecida\n[…]\nSantuário Nacional de Nossa Senhora da Conceição Aparecida\n[…]\nNossa Senhora das Lágrimas\n[…]\nPortal do Santuário Nacional de Nossa Senhora Aparecida"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "J. Borges",
      "descricao": "José Francisco Borges, xilogravurista e cordelista pernambucano famoso pelas capas de folhetos de cordel."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O xilogravurista J. Borges, cujas gravuras ilustram capas de cordel, tinha seu ateliê em qual cidade do agreste pernambucano?",
    "resposta": "Bezerros",
    "fonte": [
      "https://pt.wikipedia.org/wiki/J._Borges"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/J._Borges",
        "situacao": "ok",
        "texto": "José Francisco Borges, conhecido artisticamente como J. Borges (Bezerros, 4 de agosto de 1935 – Bezerros, 26 de julho de 2024), foi um artista, cordelista e poeta brasileiro. Foi um dos mais famosos xilógrafos de Pernambuco. Começou o trabalho com xilogravura para ilustrar suas histórias em cordéis, e hoje elas são vendidas a colecionadores, artistas e intelectuais. Também já publicou vários álbun\n[…]\nJosé Francisco Borges nasceu em 4 de agosto de 1935, no município de Bezerros, Pernambuco, onde deu início a sua vida artística e onde residiu até sua morte, escrevendo, ilustrando e publicando os seus folhetos.\n[…]\nAos 8 anos, José Francisco Borges já trabalhava na terra com o pai. Aos dez, já fabricava e vendia colheres de pau na feira. Foi oleiro, confeccionou brinquedos artesanais e vendeu livros de cordel.\n[…]\nComo não tinha dinheiro para bancar um ilustrador, J. Borges resolveu fazer ele mesmo: começou a entalhar na madeira a fachada da igreja de Bezerros, que usou em O Verdadeiro Aviso de Frei Damião. Desde então, começou a fazer matrizes por encomenda e também para ilustrar os mais de 200 cordéis que lançou ao longo da vida.\n[…]\nDescoberto por colecionadores e marchands, viu seu trabalho ser levado aos meios acadêmicos do país. Na década de 1970, José Borges desenhou a capa de \"As Palavras Andantes\", de Eduardo Galeano. e gravuras suas foram usadas na abertura da Telenovela Roque Santeiro, da Rede Globo. Nessa época, começou a gravar matrizes dissociadas dos cordéis, de maior tamanho. Isso permitiu expor no exterior: em 1992, na Galeria Stähli, em Zurique, e no Museu de Arte Popular de Santa Fé, na cidade de Novo México.\n[…]\nSESC Santana apresenta as xilogravuras e as histórias de J.Borges[ligação inativa]\n[…]\nO profeta da xilogravura (entrevista) Memorial Pernambuco Vivo\n[…]\nTesoros Trading Company reprint of New York Times article about Jose Borges"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Tambor de crioula",
      "descricao": "Dança afro-brasileira de roda, com tambores e a umbigada chamada punga, registrada como patrimônio cultural do Brasil."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "De que estado brasileiro é o tambor de crioula, dança afro-brasileira de roda marcada pela punga, uma espécie de umbigada?",
    "resposta": "Maranhão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tambor_de_crioula"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tambor_de_crioula",
        "situacao": "ok",
        "texto": "Tambor de crioula ou punga é uma dança de origem africana praticada por descendentes de escravos africanos no estado brasileiro do Maranhão, em louvor a São Benedito, um dos santos mais populares entre os negros. É uma dança alegre, marcada por muito movimento dos brincantes e muita descontração.\n[…]\nNesse levantamento, o Tambor de Crioula foi identificado como referência significativa para o patrimônio e a identidade cultural da região, descrito a partir de seus elementos coreográficos, poéticos e musicais, bem como de sua dimensão religiosa e de sua estreita ligação com os grupos afro-maranhenses.\n[…]\nApesar disso, sua descrição detalhada confirma a preservação de elementos essenciais — como movimentos coreográficos, técnicas corporais, a parelha de instrumentos, a punga e os elementos cênicos — sem alterações significativas, demonstrando a continuidade histórica e o profundo enraizamento da prática no universo recreativo e religioso afro-maranhense.\n[…]\nCada tambor tem uma função específica na roda:\n[…]\nHá divergência de pontos de vista conceituais sobre a dimensão religiosa e o caráter ritualístico do Tambor de Crioula na bibliografia. Domingos Vieira Filho afirma que o Tambor de Crioula é uma \"simples dança para se divertir, sem a menor pertinência ou ligação com a religiosidade do negro maranhense e seus descendentes\". Para ele, o conceito de ritual está estritamente ligado a propriedades mágico-religiosas, e, como a dança não teria traços religiosos, não seria ritualística.\n[…]\nDesse modo, o Tambor de Crioula é uma \"forma ritual de reafirmação de valores dos negros do Maranhão\", expressando liberdade, força cultural, ritmo, alegria e a criação de um espaço próprio em meio a imposições.\n[…]\nBumba-meu-boi do Maranhão\n[…]\nCentro de Comercialização de Produtos Artesanais do Maranhão (Ceprama)"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Marabaixo",
      "descricao": "Dança e música afro-brasileira com saias rodadas e caixas de percussão, ligada a festas religiosas populares."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O marabaixo, dança afro-brasileira de saias rodadas e caixas de percussão, é uma tradição típica de qual estado do Norte?",
    "resposta": "Amapá",
    "distratores": [
      "Pará",
      "Acre",
      "Roraima"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Marabaixo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Marabaixo",
        "situacao": "ok",
        "texto": "O Marabaixo é uma manifestação cultural de origem africana típica de comunidades afrodescendentes do Amapá, que inclui dança de roda, canto e percussão ligados às festas do catolicismo popular em louvor aos santos padroeiros da comunidade. Símbolo da identidade negra local, hoje o Marabaixo se apresenta como identidade e patrimônio cultural da população amapaense.\n[…]\nEm 1898, o Jornal Pinsônia, o primeiro periódico impresso em terras que anos mais tarde seriam o Estado do Amapá, lançou pesadas críticas ao marabaixo ao afirmar que \"a dança diabola do Mar-Abaixo [...] é indecente, é o foco das misérias, o centro da libertinagem, a causa segura da prostituição [...] os paes de famílias, não devem consentir as suas filhas e esposas frequentarem tão inconveniente e assustador espetáculo dessa dansa, oriunda dos Cafres\".\n[…]\nSe o período territorial (1943-1988) foi de decadência e enfraquecimento do marabaixo, a partir dos anos 1980 a dança começou a passar por um projeto de resgate e valorização conduzido pelas próprias comunidades negras, movimentos sociais e poder público estadual (o Amapá tornou-se estado da federação em 08 de outubro de 1988).\n[…]\nNos anos 2000 e 2010, diversas leis estaduais tiveram como objeto a salvaguarda do marabaixo, entre elas a Lei Estadual n° 845/2004 (insere o Ciclo do Marabaixo no calendário cultural do Estado), Lei Estadual n° 1.263/2008 (considera o marabaixo bem histórico e cultural do Estado do Amapá, para fins de tombamento de natureza imaterial), Lei Estadual n° 1.521/2010 (define o dia 16 de junho como Dia Estadual do Marabaixo) e Lei Estadual n° 2.220/2017 (cria o Calendário de Eventos das Festas Tradicionais Afro-amapaenses, incluindo o marabaixo, batuque, zimba, sairé, capoeira e festividades afro-religiosas).\n[…]\n\"Percursos da Tradição - Dança do Marabaixo\" (SESC/SP, 2019)\n[…]\n\"Música Negra do Amapá\" (Eduardo Pereira)"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Boi de mamão",
      "descricao": "Folguedo popular do litoral do Sul do Brasil, com personagens como o boi, a bernúncia e a Maricota."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Com a bernúncia, que engole crianças, e a gigante Maricota, o folguedo do boi de mamão é tradição típica de qual estado?",
    "resposta": "Santa Catarina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Boi_de_mam%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Boi_de_mam%C3%A3o",
        "situacao": "ok",
        "texto": "O boi de mamão é uma expressiva manifestação folclórica típica do litoral do estado de Santa Catarina, Brasil. Ocorre também em algumas cidades do interior de Santa Catarina e litoral do Paraná, até onde se tem notícia, trazido até lá por imigrantes catarinenses. Trata-se de um auto em tom cômico, mas com um elemento central dramático: a morte e a ressurreição do boi, apresentando elementos comuns\n[…]\nPorém, muitos praticantes do boi-de-mamão em Santa Catarina acreditam que a tradição teve origem na cultura açoriana, supostamente trazida por imigrantes das Ilhas dos Açores que colonizaram Santa Catarina no século XVIII (a partir da década de 1740), apesar de não haver registros históricos que comprovem a existência de brincadeiras semelhantes ao \"boi-de-mamão\" nestas ilhas portuguesas.\n[…]\nPor outro lado, não há dúvidas que a cultura típica dos descendentes de açorianos em Santa Catarina influenciou no desenvolvimento do boi-de-mamão, como por exemplo na estética e musicalidade. Há ainda, como o pesquisador Nereu do Vale Pereira, quem afirme que a cultura do boi-de-mamão iniciou na Ilha de Santa Catarina através dos espanhóis em sua breve ocupação em 1777 da Ilha de Santa Catarina. .\n[…]\nFato é que brincadeiras populares, das quais o boi (vivo ou de fantasia) é o personagem principal são tradicionais em toda a Península Ibérica e datam muito antes da Idade Moderna, o que deve ter contribuído ou para criação do boi-de-mamão por imigrantes europeus em Santa Catarina a partir do século XVIII ou pelo menos na assimilação do \"bumba-meu-boi\" nordestino pelos imigrantes ibéricos e seus descendentes no Estado.\n[…]\nBoi-de-mamão: figura central do folguedo, morre e renasce.\n[…]\nCada grupo deveria ser único com sua criatividade e apetrechos (que não falta na ilha de Santa Catarina). (2022)\n[…]\nO Boi de Mamão\n[…]\n«Página sobre o boi-de-mamão (com fotos)»\n[…]\n«Cultura, Costumes e Tradições da Ilha de Santa Catarina»"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Dia do Saci",
      "descricao": "Data comemorativa brasileira dedicada ao saci e ao folclore nacional, criada em contraposição ao Halloween."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Criado para fazer frente ao Halloween e valorizar o folclore nacional, o Dia do Saci é comemorado em que data?",
    "resposta": "31 de outubro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_do_Saci"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_do_Saci",
        "situacao": "ok",
        "texto": "O Dia do Saci é uma data comemorativa brasileira realizada no dia 31 de outubro. Possui reconhecimento oficial no estado de São Paulo, porém não a nível nacional. A data coincide com a data comemorativa do Dia das Bruxas, para contrapô-la e valorizar as figuras do folclore brasileiro, em oposição à cultura celta do Dia das Bruxas.\n[…]\nNo Brasil, houve Projetos de Lei que tentaram instituir o Dia do Saci a nível nacional. Entretanto, esses projetos não foram aprovados. O primeiro projeto de lei a mencionar a data, PL 2479/2003, foi arquivado em 2008. Embora fontes jornalísticas citem-no como criador da data, esse projeto não foi aprovado.\n[…]\nA nível municipal, há cidades brasileiras que instituíram o Dia do Saci por meio de leis municipais. No estado de São Paulo, São Luiz do Paraitinga instituiu a data em 2004; São José do Rio Preto também em 2004; Guaratinguetá em 2006; e Embu das Artes em 2009. No estado do Espírito Santo, Vitória em 2005. No estado do Ceará, Fortaleza em 2007. No estado de Minas Gerais, Poços de Caldas em 2009.\n[…]\nEm Uberaba, a prefeitura instiuiu a data em 2008. Entretanto, a data foi revogada em 2017, em prol do Dia do Folclore Nacional comemorado em 22 de agosto. Em Independência , a data também foi revogada alguns anos após a sua instituição em 2010.\n[…]\nA cidade de São Luiz do Paraitinga realiza a \"festa do Saci\" desde 2003, podendo durar até dois finais de semana, incluindo diversas atrações culturais, culinárias e artísticas. Possui até o \"Saciclístico\", uma atividade de pedalada com uma perna só. A festividade é organizada pela SOSACI, Sociedade de Observadores de Saci de São Luiz do Paraitinga.\n[…]\nApesar das Iniciativas, a data acabou não sendo popularizado e é frequentemente preterida em relação ao Dia das Bruxas.==Referências==\n[…]\n«SOSACI - Sociedade dos Observadores de Saci»"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Círio de Nazaré",
      "descricao": "Grande procissão católica em honra de Nossa Senhora de Nazaré realizada em Belém do Pará em outubro."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em Belém do Pará, a grande procissão do Círio de Nazaré sai às ruas em qual domingo de outubro?",
    "resposta": "Segundo domingo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/C%C3%ADrio_de_Nazar%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%ADrio_de_Nazar%C3%A9",
        "situacao": "ok",
        "texto": "O Círio de Nazaré é uma manifestação religiosa católica, herdada dos colonizadores portugueses, marcada por procissões (romarias) em devoção a Nossa Senhora de Nazaré, que ocorre na cidade brasileira de Belém (estado do Pará). É celebrado anualmente desde 1793, no segundo domingo de outubro, reunindo atualmente cerca de dois milhões de pessoas.\n[…]\nO seu retorno ocorreu em outubro desse mesmo ano, tendo a imagem sido transportada do porto da cidade até o santuário por fiéis em romaria, acompanhada pelo governador, pelo bispo e pelas demais autoridades civis e eclesiásticas, sendo considerado este episódio o primeiro Círio. Desde então o Círio de Nazaré é realizado anualmente, no segundo domingo do mês de outubro.\n[…]\nInicialmente, o Círio ocorria entre os meses de setembro e novembro, sem data especifica. Apenas em 1901, o bispo Dom Francisco de Rego Maia oficializou o segundo domingo de outubro como data oficial da grande romaria.\n[…]\n1901 - É instaurado o segundo domingo de outubro como data oficial do Círio de Nazaré.\n[…]\n1918 - Devido à Pandemia da Gripe Espanhola, o Círio aconteceu no último domingo de outubro.\n[…]\n2018 - Neste ano, segundo dados de mapeamentos de satélite da Secretaria de Estado de Segurança e Defesa Social (Segup), a Trasladação pela primeira vez é a romaria com maior número de romeiros do Círio, alcançando 1,3 milhões de pessoas superando a grande procissão de domingo, que naquele ano contabilizou cerca de 1,1 milhões de fiéis.\n[…]\nA procissão do Círio acontece a cada segundo domingo de Outubro, sua data portanto é móvel. A seguir a numeração ordinal dos Círios de Nazaré, as suas datas, e a quantidade aproximada de pessoas que participaram. Informações a partir de 1902, envolvendo também temas da festividade que passaram a ser adotados em definitivo a partir do Círio 1995.\n[…]\n«Transmissão do Círio - Fundação Nazare»"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Lavagem do Bonfim",
      "descricao": "Festa popular de Salvador em que baianas lavam as escadarias da Igreja do Senhor do Bonfim com água perfumada."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em janeiro, as baianas lavam com água de cheiro as escadarias da Igreja do Bonfim, em Salvador. Em que dia da semana acontece essa lavagem?",
    "resposta": "Quinta-feira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lavagem_do_Bonfim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lavagem_do_Bonfim",
        "situacao": "ok",
        "texto": "A Lavagem do Bonfim é uma celebração inter-religiosa que tem lugar em Salvador da Bahia, Brasil. Acontece na quinta-feira que antecede o segundo domingo após o Dia de Reis, no mês de janeiro.\n[…]\nPosteriormente, para os adeptos do candomblé, a lavagem da igreja do Senhor do Bonfim passou a ser parte da cerimônia das Águas de Oxalá. A Arquidiocese de Salvador, então, proibiu a lavagem na parte interna do templo e transferiu o ritual para as escadarias e o adro.\n[…]\nDurante a tradicional lavagem, as portas da Igreja permanecem fechadas e as baianas despejam água de cheiro nos degraus e no adro, ao som de toques e cânticos de caráter afro-religioso (embora atualmente o ritual se revista  de um perfil  ecumênico), que ocorre na quinta-feira que antecede festa e conta com grande participação do povo, que chega em carroças enfeitadas, e das tradicionais baianas, com seus vasos com água de cheiro.\n[…]\nA lavagem festiva acontece com a saída, pela manhã da quinta-feira, do tradicional cortejo de baianas da Igreja de Nossa Senhora da Conceição da Praia, o qual segue a pé até o alto do Bonfim, para lavar com vassouras e água de cheiro as escadarias e o átrio da Igreja do Nosso Senhor do Bonfim.\n[…]\nTodos se vestem de branco, a cor do orixá, e percorrem 8 quilômetros em procissão, desde o largo da Conceição até o largo do Bonfim. O ponto alto da festa ocorre quando as escadarias da igreja são lavadas por cerca de 200 baianas vestidas a caráter que, de suas \"quartinhas\" — vasos, que trazem aos ombros — despejam água nas escadarias e no átrio da igreja, ao som de palmas, toque de atabaque e cânticos de origem africana.\n[…]\nFesta do Bonfim, no site da Fundação Gregório de Mattos"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Cosme e Damião",
      "descricao": "Santos gêmeos médicos do cristianismo, cuja festa popular no Brasil inclui a distribuição de doces às crianças."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que dia de setembro muitas famílias brasileiras distribuem saquinhos de doces às crianças em homenagem a Cosme e Damião?",
    "resposta": "27 de setembro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cosme_e_Dami%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cosme_e_Dami%C3%A3o",
        "situacao": "ok",
        "texto": "Os Santos Cosme e Damião, irmãos gêmeos, morreram por volta de 300 d.C. Crê-se que foram médicos, e sua santidade é atribuída pelo motivo de haverem exercido a medicina sem cobrar por isso, devotados à fé. Na Igreja Católica, sua festa é celebrada no dia 26 de setembro, de acordo com o atual Calendário Litúrgico Romano do Rito Ordinário, e no dia 27 de setembro, pelo Calendário Litúrgico Romano do\n[…]\nO culto aos gêmeos mártires foi trazido para o Brasil em 1530 por Duarte Coelho Pereira e tornaram-se padroeiros de Igarassu, em Pernambuco. No nordeste brasileiro passaram a ser invocados para afastar o contágios de epidemias.\n[…]\nEstas religiões os celebram no dia 27 de setembro, enfeitando seus templos com bandeirolas e alegres desenhos, tendo-se o costume, no Brasil, de dar doces e brinquedos às crianças que lotam as ruas em busca dos agrados. Na Bahia, as pessoas comemoram oferecendo caruru, vatapá, doces e pipoca para a vizinhança.\n[…]\nA Igreja Católica Apostólica Romana, desde tempos imemoráveis até o Calendário Romano de 1962, que vigorou até 1969, celebrava a festa de santos Cosme e Damião no dia 27 de setembro. Porém, em 1969, com a reforma litúrgica, o Calendário Romano passou a comemorá-los no dia 26, pois, considerada a importância de São Vicente de Paulo, também celebrado dia 27, preferiram não pôr as duas Memórias na mesma data.\n[…]\nSão Vicente ficou com o dia 27, já que era a data sabida de sua morte; já Santos Cosme e Damião, como não se sabe a data de morte deles, tiveram sua Memória movida para o dia 26 de setembro. Ainda assim, católicos tradicionalistas, devotos mais antigos e as religiões afro-brasileiras que também os cultuam, como o Candomblé e a Umbanda, continuam a comemorá-los no dia 27.\n[…]\nApesar da mudança na Igreja Católica, ao menos no Brasil, por conta da tradição, populares continuam fazendo comemorações no dia 27 de setembro."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Semana Farroupilha",
      "descricao": "Festa tradicionalista do Rio Grande do Sul, com desfiles e acampamentos gaúchos, que lembra a Revolução Farroupilha."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Semana Farroupilha, com desfiles de gaúchos pilchados, termina na data que marca o início da Revolução Farroupilha. Que data é essa?",
    "resposta": "20 de setembro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Semana_Farroupilha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Semana_Farroupilha",
        "situacao": "ok",
        "texto": "A Semana Farroupilha é um evento festivo da Cultura gaúcha, que se comemora de 13 a 20 de setembro com desfiles em homenagem a líderes da Revolução Farroupilha. O evento é dedicado ao marco da Revolução Farroupilha, liderada pelo gaúcho Bento Gonçalves no século XIX.\n[…]\nA Revolução Farroupilha foi mais longa revolução do Brasil, ocorreu entre os anos de 1835 a 1845 e tinha como ideais liberdade, igualdade e humanidade. Durante a semana farroupilha os gaúchos montam acampamentos e comemoram, tomando chimarrão e celebrando com desfiles e shows. Usam vestimentas a caráter: as prendas usam vestidos rodados e os homens bombacha, lenço, guaiaca e chapéu. Ocorre em todas as cidades gaúchas e algumas regiões de Santa Catarina.\n[…]\nSegundo a etimologia desta palavra, o termo farroupilha vem de “farrapo” ou “roupas velhas”. Na época, os revolucionários gaúchos eram chamados assim por causa das roupas que vestiam.\n[…]\nRevolução Farroupilha"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Lobisomem",
      "descricao": "Criatura lendária, homem que se transforma em lobo ou bicho peludo, presente no folclore brasileiro de origem europeia."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Segundo a crença popular brasileira, em que noite da semana o lobisomem se transforma e sai correndo pelas encruzilhadas?",
    "resposta": "Sexta-feira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lobisomem"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lobisomem",
        "situacao": "ok",
        "texto": "Lobisomem ou Licantropo (do grego λυκάνθρωπος: λύκος, lýkos, \"lobo\" e άνθρωπος, ánthrōpos, \"humano\"), é um ser lendário que é descrito como um homem capaz de se transformar em lobo ou em algo semelhante a um lobo.\n[…]\nEm algumas regiões, o Lobisomem se transforma à meia noite de sexta-feira, em uma encruzilhada. Como o nome diz, é metade lobo, metade homem. Depois de transformado, sai à noite procurando sangue, matando ferozmente tudo que se move. Antes do amanhecer, ele procura a mesma encruzilhada para voltar a ser homem.\n[…]\nA lenda do lobisomem é muito conhecida no folclore brasileiro, e assim como em todo o mundo, os lobisomens são temidos por quem acredita em sua lenda. Algumas pessoas dizem que além da prata o fogo também pode matar um lobisomem. Outras acreditam que eles se transformam totalmente em lobos e não metade lobo metade homem.\n[…]\nNo século XIX, Alexandre Herculano escreveu assim sobre o lobisomem da região da Beira-Baixa: \"Os lubis-homens são aqueles que têm o fado ou sina de se despirem de noite no meio de qualquer caminho, principalmente encruzilhada, darem cinco voltas, espojando-se no chão em lugar onde se espojasse algum animal, e em virtude disso transformarem-se na figura do animal pré-espojado.\n[…]\nNos seus estudos sobre mitologia popular, o escritor e etnógrafo português Alexandre Parafita reconhece que, embora a designação sugira tratar-se de um ser híbrido de homem e lobo, muitas das crenças sobre esta criatura identificam-na na figura tanto de lobo, como cavalo, burro ou bode, consistindo o seu fadário em ir despir-se à meia-noite numa encruzilhada, espojando-se no chão, onde um animal já antes fizera o mesmo, após o que se transforma nesse animal para ir “correr fado”."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Abayomi",
      "descricao": "Boneca de pano afro-brasileira feita sem costura e sem cola, criada por Lena Martins na década de 1980."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Muita gente acredita que a boneca abayomi surgiu nos navios negreiros, mas na verdade ela foi criada em que década?",
    "resposta": "Anos 1980",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Abayomi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Abayomi",
        "situacao": "ok",
        "texto": "As Abayomi são bonecas de pano, criação original de Lena Martins, artista e artesã natural de São Luís do Maranhão. A boneca foi criada na década de 1980, em oficinas que Lena fazia, então, com comunidades do Rio de Janeiro.\n[…]\nNo final dos anos 1990, e sobretudo a partir da década de 2000, as bonecas Abayomi de Lena Martins começaram sendo associadas a uma lenda falsa, fazendo remontar a sua origem à época da escravidão. Segundo a falsa lenda, estas bonecas seriam confeccionadas a bordo de navios negreiros, por mães escravizadas que as fariam para seus filhos com os retalhos de suas roupas, as quais rasgariam à unha na esperança de os acalentar naqueles momentos dolorosos que viviam.\n[…]\nNão obstante, não só a origem das bonecas é comprovadamente diferente, como não existe qualquer registo ou indício histórico que sustente o relato da falsa lenda.\n[…]\nLena Martins lamenta a apropriação da sua criação artesanal, uma boneca que nasceu livre, pelo relato falsificado da boneca escrava, que apaga a mulher negra brasileira que a criou, a substituindo por um coletivo difuso perdido no passado remoto, no mesmo que propaga uma versão fictícia e romantizada da escravatura e mais uma vez nega aos negros e afrodescendentes brasileiros o direito a ter uma boneca criada por eles e que os represente.\n[…]\nGomes, Edlaine de Campos; Bizarria, Júlio; Collet, Célia; Sales, Marcos Vinícius (16 de agosto de 2017). «A Boneca Abayomi: entre retalhos, saberes e memórias». ILUMINURAS (44). ISSN 1984-1191. doi:10.22456/1984-1191.75745\n[…]\nSouza, Letícia Lima de (2017). «Prática Pedagógica sobre a cultura afro-brasileira: oficina de bonecas Abayomi». Revista Três Pontos. 14 (2): 80-85"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Lampião",
      "descricao": "Virgulino Ferreira da Silva, o mais famoso líder do cangaço no sertão nordestino, morto em 1938."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Lampião, Maria Bonita e parte do bando foram mortos numa emboscada na Grota de Angico, em Sergipe. Em que ano?",
    "resposta": "1938",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lampi%C3%A3o_(cangaceiro)",
      "https://en.wikipedia.org/wiki/Lampi%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lampi%C3%A3o_(cangaceiro)",
        "situacao": "ok",
        "texto": "Virgulino Ferreira da Silva, mais conhecido como Lampião (Vila Bela, entre 1897 e 1900 – Porto da Folha, 28 de julho de 1938), foi um cangaceiro brasileiro atuante no Sertão nordestino entre as décadas de 1920 e 1930. Por ser considerado o líder do movimento de banditismo mais bem-sucedido da história do Brasil e do século XX, ganhou o apelido de \"Rei do Cangaço\".\n[…]\nFoi executado junto com outros 10 membros do seu bando, incluindo a sua companheira Maria Bonita, pela força policial volante do então tenente João Bezerra da Silva na Grota do Angico, no município sergipano de Porto da Folha, em 28 de julho de 1938; Lampião e seus companheiros tiveram seus corpos decapitados, e suas cabeças postas em exibição em diversos pontos do país. Os crânios do casal foram enterrados junto aos restos mortais somente em 1969.\n[…]\nNo dia 27 de julho de 1938, o bando se acampou na Fazenda Angicos, situada no sertão de Sergipe, esconderijo tido por Lampião como o de maior segurança. Era noite, chovia muito e todos dormiam em suas barracas. A volante chegou tão silenciosamente que nem os cães perceberam. Por volta das cinco horas da manhã do dia 28, os cangaceiros levantaram para rezar o ofício e se preparavam para tomar café; quando um cangaceiro deu o alarme, já era tarde demais.\n[…]\nJosé Alves Nogueira, tio de Zé Saturnino, é emboscado por Virgulino Lampião. João Flor, padrinho de Virgulino, vai até o local do embate, pensando que era Jacinto novamente atacando o povoado. Contudo, ele descobre que o ato fora cometido por seu próprio afilhado, iniciando um atrito entre ele e os Ferreira.\n[…]\nDe Lampião apenas Antônio Ferreira foi baleado.\n[…]\n13 de setembro de 1932 — Nasce Expedita Ferreira Nunes, filha de Lampião e Maria Bonita em Porto da Folha - SE.\n[…]\n27 de julho de 1938 — Bando de Lampião é atacado por volante, com morte de onze cangaceiros incluindo Lampião e Maria Bonita."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lampi%C3%A3o",
        "situacao": "ok",
        "texto": "\"Captain\" Virgulino Ferreira da Silva (Brazilian Portuguese: [feˈʁejɾɐ da ˈsiwvɐ]; 7 July 1897 – 28 July 1938), better known as Lampião (older spelling: Lampeão, Portuguese pronunciation: [lɐ̃piˈɐ̃w], meaning \"lantern\" or \"oil lamp\"), was probably the twentieth century's most successful traditional bandit leader. The banditry endemic to the Northeast of Brazil, called Cangaço, had origins in the l\n[…]\nIn 1935 Lampião and his band were filmed by Benjamin Abrahão Botto. Once reassured that the camera did not conceal a gun, Lampião co-operated enthusiastically with the filming. The film-stock was soon confiscated by the police, and Abrahão died in 1938. This cinematographic record was rediscovered in 1957, but had physically deteriorated to a great extent. However, several scenes survived, a unique example of moving images of Lampião, Maria Bonita and many other cangaceiros.\n[…]\nOn July 28, 1938, Lampião and his band were betrayed by one of his supporters, Joca Bernardes, and were ambushed in one of his hideouts, the Angicos farm, in the Poço Redondo area of  the state of Sergipe. Bernardes, after first meeting Lampião in 1928, had dreamed that he would play a part in causing the famous bandit's death. A police troop, led by João Bezerra and armed with machine guns, attacked the encamped bandits at daybreak.\n[…]\nEzequiel Ferreira – Lampião's youngest brother, he is generally believed to have died in April 1931 in a firefight with the police. His burial place is known and marked. However, a man claiming to be him appeared in Serra Talhada in the 1980s.\n[…]\nFor the 2023 edition of the Carnival parade of the Rio de Janeiro samba schools Imperatriz Leopoldinense dedicated their performance to Lampião’s memory, complete with themes and images from his life. Expedita Ferreira, Lampião and Maria Bonita's only child, participated in the parade being featured on the last float in the procession."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Lança-perfume",
      "descricao": "Spray de éter perfumado, em frascos de vidro ou metal, muito usado nos bailes e desfiles de carnaval até ser proibido no Brasil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O lança-perfume, que perfumava os bailes de carnaval desde o começo do século vinte, foi proibido por decreto presidencial em que década?",
    "resposta": "Anos 1960",
    "distratores": [
      "Anos 1930",
      "Anos 1980",
      "Anos 2000"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lan%C3%A7a-perfume"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lan%C3%A7a-perfume",
        "situacao": "ok",
        "texto": "Lança-perfume ou loló é um produto desodorizante em forma de um spray. O líquido é à base de cloreto de etila e condicionado sob pressão em ampolas de vidro. O uso do lança-perfume como droga recreativa é ilegal no Brasil, e sua fabricação, comércio e uso são proibidos pelo Decreto Nº 51.211, de 18 de agosto de 1961, sancionado pelo então presidente Jânio Quadros.\n[…]\nA marca Rodouro foi muito solicitada nos carnavais brasileiros, assim como outras marcas de lança-perfume. Inicialmente o produto era utilizado como uma brincadeira inocente até que os foliões passaram a utilizá-lo como bebida ou inalá-lo profundamente. A partir de então, seu uso foi proibido em salões e, mais adiante, a sua comercialização, em meados do século XX.\n[…]\nO lança-perfume apareceu no Carnaval em 1904, no Rio de Janeiro, sendo rapidamente incorporado aos festejos carnavalescos de todo o Brasil, principalmente nas batalhas de confete, corsos e, mais tarde, nos bailes. O produto tornou-se símbolo do Carnaval.\n[…]\nEm abril de 1957, o então deputado federal Carlos Albuquerque apresentou na Câmara dos Deputados um projeto de lei que proibia a fabricação, o comércio e uso do lança-perfume, argumentando que o consumo desenfreado do produto estava causando acidentes fatais e mortes por embriaguez, argumentos usados pelo jornalista Flávio Cavalcanti, seguida de um decreto de 1961 baixado pelo então Presidente Jânio Quadros, que proibiu o lança-perfume no Brasil, sob a afirmação que o produto contém clorofórmio e éter, substâncias potencialmente cancerígenas e nocivas à saúde."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Festa do Divino",
      "descricao": "Festa católica popular em honra do Espírito Santo, trazida de Portugal, com coroação de imperador e folias."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Trazida ao Brasil pelos portugueses, a Festa do Divino teria sido criada no século quatorze por iniciativa de qual rainha de Portugal?",
    "resposta": "Rainha Santa Isabel",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festa_do_Divino"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_do_Divino",
        "situacao": "ok",
        "texto": "Festa do Divino Espírito Santo é um culto ao Espírito Santo, em suas diversas manifestações, é uma das mais antigas e difundidas práticas do catolicismo popular.\n[…]\nAssunto muito abordado pelo professor Agostinho da Silva. Há referências históricas que indicam que foi inicialmente instituída, em 1321, pelo convento franciscano de Alenquer sob proteção da rainha Santa Isabel de Portugal e Aragão.\n[…]\nA celebração do Divino Espírito Santo no planeta teve origem na promessa da rainha, Isabel de Aragão, por volta de 1320. A rainha teria prometido ao Divino Espírito Santo peregrinar o mundo com uma cópia da coroa e uma pomba no alto da coroa, que é o símbolo do Divino Espírito Santo, arrecadando donativos em benefício da população pobre, caso o esposo, o rei Dinis, fizesse as pazes com seu filho legítimo, Afonso, herdeiro do trono.\n[…]\nDe acordo com os documentos, Isabel não se conformava com o confronto entre pai e filho legítimo em vista da herança pelo trono, pois era desejo do rei que a coroa portuguesa passasse, após sua morte, para seu filho bastardo, Afonso Sanches. Diante do conflito, a rainha Isabel passou a suplicar ao Divino Espírito Santo pela paz entre seu esposo e seu filho. A interferência da rainha teria evitado um conflito armado, denominado a Peleja de Alvalade.\n[…]\n19 de maio - Festa do Divino Espírito Santo\n[…]\nGimenez, José. C & Frighetto, Fátima R. F. A Rainha Isabel nas estratégias políticas da Península Ibérica: 1280-1336. Universidade Federal do Paraná, Setor de Ciências Humanas, Letras e Artes - Programa de Pós-Graduaçăo em História\n[…]\nRossatto, Noeli D. (Org.) O simbolismo das Festas do divino Espírito Santo. Santa Maria: FACOS, 2003."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Dicionário do Folclore Brasileiro",
      "descricao": "Obra de referência sobre lendas, festas e costumes populares do Brasil, publicada em 1954."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Publicado em 1954 e até hoje obra de referência, o Dicionário do Folclore Brasileiro foi escrito por qual pesquisador potiguar?",
    "resposta": "Luís da Câmara Cascudo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lu%C3%ADs_da_C%C3%A2mara_Cascudo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lu%C3%ADs_da_C%C3%A2mara_Cascudo",
        "situacao": "ok",
        "texto": "Luís da Câmara Cascudo (Natal, 30 de dezembro de 1898 – Natal, 30 de julho de 1986) foi um historiador, sociólogo, musicólogo, antropólogo, etnógrafo, folclorista, poeta, cronista, professor, advogado, jornalista e escritor brasileiro. Passou toda a sua vida em Natal e dedicou-se ao estudo do folclore e da cultura brasileira. Foi professor da Faculdade de Direito de Natal, hoje Curso de Direito da\n[…]\nNa década de 1950, ingressou nos quadros da Universidade Federal do Rio Grande do Norte (UFRN), onde foi professor de Direito internacional e diretor do Instituto de Antropologia, hoje o Museu Câmara Cascudo, aposentando-se em 1966. No ano de 1963, viajou para o continente africano, onde visitou uma série de países como  Angola, Guiné, Congo, São Tomé, Cabo Verde e Guiné-Bissau para fazer pesquisas para seus livros A Cozinha Africana no Brasil e História da Alimentação no Brasil.\n[…]\nEm 2003 Marcos Silva, professor de História da USP, organizou a publicação do importante Dicionário Crítico Câmara Cascudo com a colaboração de 91 autores e 25 instituições, sendo um guia crítico e introdutório sobre sua produção, fazendo análises breves sobre todos os seus títulos ao modo de verbetes ou pequenos ensaios.\n[…]\nA TV Brasil fez um programa chamado O Teco Teco, em que o personagem se chama Cascudo, em homenagem a Câmara Cascudo, que é amigo de Betinho, personagem em homenagem a Alberto Santos Dumont. Na Mostra de Cinema de Gostoso, em São Miguel do Gostoso, o Troféu Luís da Câmara Cascudo é concedido aos melhores filmes curta e longa-metragem da Mostra Competitiva. O prêmio homenageia a contribuição intelectual de Cascudo à cultura potiguar.\n[…]\nO Instituto Câmara Cascudo preserva seu acervo bibliográfico e documental e é um tributo ao seu legado.\n[…]\nMemorial Câmara Cascudo\n[…]\nInstituto Câmara Cascudo\n[…]\n«Memória Viva de Câmara Cascudo». www.memoriaviva.com.br\n[…]\nEspaço Cultural Câmara Cascudo"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Missão de Pesquisas Folclóricas",
      "descricao": "Expedição de 1938 do Departamento de Cultura de São Paulo que gravou e registrou músicas e danças populares do Norte e Nordeste."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1938, a Missão de Pesquisas Folclóricas gravou cantos e danças do Norte e do Nordeste por iniciativa de qual escritor modernista?",
    "resposta": "Mário de Andrade",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Miss%C3%A3o_de_Pesquisas_Folcl%C3%B3ricas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Miss%C3%A3o_de_Pesquisas_Folcl%C3%B3ricas",
        "situacao": "ok",
        "texto": "A Missão de Pesquisas Folclóricas foi uma expedição científica organizada pelo Departamento de Cultura de São Paulo e realizada entre fevereiro e julho de 1938. Foi em larga medida idealizada por Mário de Andrade, diretor-fundador do Departamento.\n[…]\nA expedição abrangeu seis estados brasileiros (Pernambuco, Paraíba, Ceará, Piauí, Maranhão e Pará), tendo coletado gravações de  música, registros em vídeo de danças e cerimônias, fotografias, bem como produzido textos descritivos de diversas formas de folclore.\n[…]\nForam integrantes da Missão o engenheiro e arquiteto Luiz Saia, o maestro Martin Braunwieser, o técnico Benedito Pacheco e o auxiliar geral e assistente técnico Antônio Ladeira.\n[…]\nCarlini, Álvaro (1993). Cachimbo e maracá: o catimbó da Missão (1938). São Paulo: CCSP"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Movimento Armorial",
      "descricao": "Movimento artístico lançado no Recife em 1970 que buscava criar uma arte erudita a partir da cultura popular nordestina."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1970, no Recife, qual escritor paraibano lançou o Movimento Armorial, que criava arte erudita a partir da cultura popular nordestina?",
    "resposta": "Ariano Suassuna",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Movimento_Armorial"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Movimento_Armorial",
        "situacao": "ok",
        "texto": "O Movimento Armorial foi uma iniciativa artística cujo objetivo seria criar uma arte erudita a partir de elementos da cultura popular do Nordeste brasileiro. Para tanto, buscava convergir e orientar todas as formas de expressões artísticas: música, dança, literatura, artes plásticas, teatro, cinema, arquitetura, etc. Um dos idealizadores e principal nome do movimento foi o escritor Ariano Suassuna\n[…]\nO escritor Raimundo Carrero, que participou da fundação do Movimento junto a Ariano, entende que o momento fundador do Movimento Armorial foi a publicação do Romance da Pedra do Reino, de Ariano Suassuna, em 1971. Houve uma grande repercussão no meio literário brasileiro com a publicação do romance, e isso teria servido para popularizar todo o restante do trabalho coordenado por Ariano.\n[…]\nO Movimento Armorial surgiu, portanto, sob a inspiração e direção de Ariano Suassuna, com a colaboração de diversos artistas e escritores da Região Nordeste do Brasil e o apoio do Departamento de Extensão Cultural da Pró-Reitoria para Assuntos Comunitários da Universidade Federal de Pernambuco.\n[…]\nO Instituto Brincante, espaço cultural criado pelo artista Antônio Nóbrega na capital paulista, era chamado por Ariano de \"consulado do Movimento Armorial\". O Brincante buscava difundir uma espécie de corpo popular brasileiro, forjado nas andanças de Nóbrega pelo Nordeste.\n[…]\nO Movimento Armorial tinha a pretensão de realizar uma arte nacional erudita baseada nas raízes populares da cultura nordestina e, assim sendo, convergir diversas artes para este fim. Segundo Suassuna, sendo \"armorial\" o conjunto de insígnias, brasões, estandartes e bandeiras de um povo, a heráldica é uma arte muito mais popular do que qualquer coisa. Desse modo o nome adotado significou o desejo de ligação com essas heráldicas raízes culturais brasileiras."
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Centro Esportivo de Capoeira Angola",
      "descricao": "Academia de capoeira angola fundada em Salvador, referência na preservação desse estilo tradicional."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em Salvador, que mestre fundou o Centro Esportivo de Capoeira Angola e se tornou o grande símbolo desse estilo tradicional?",
    "resposta": "Mestre Pastinha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mestre_Pastinha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mestre_Pastinha",
        "situacao": "ok",
        "texto": "Vicente Ferreira Pastinha, mais conhecido por Mestre Pastinha (Salvador, 5 de abril de 1889 – Salvador, 13 de novembro de 1981), foi um mestre brasileiro de capoeira.\n[…]\nMestre Pastinha nasceu em 1889, dizia não ter aprendido a Capoeira em escola, mas \"com a sorte\". Afinal, foi o destino o responsável pela iniciação do pequeno Pastinha no jogo, ainda garoto. Em depoimento prestado no ano de 1967, no 'Museu da Imagem e do Som', Mestre Pastinha relatou a história da sua vida: \"Quando eu tinha uns dez anos — eu fui franzininho — um outro menino mais forte do que eu tornou-se meu rival.\n[…]\nFoi na atividade do ensino da capoeira que Pastinha se distinguiu. Ao longo dos anos, a competência maior foi demonstrada no seu talento como pensador sobre o jogo da Capoeira e na capacidade de comunicar-se. Os conceitos do mestre Pastinha formaram seguidores em todo Brasil. A originalidade do método de ensino, a prática do jogo enquanto expressão artística formaram uma escola que privilegia o trabalho físico e mental para que o talento se expanda em criatividade.\n[…]\nFoi o maior propagador da Capoeira Angola, modalidade \"tradicional\" do esporte no Brasil.\n[…]\nEm 1966, integrou a comitiva brasileira ao primeiro Festival Mundial de Arte Negra no Senegal, e foi um dos destaques do evento. Contra a violência, o Mestre Pastinha transformou a capoeira em arte. Em 1964, publicou o livro Capoeira Angola, em que defendia a natureza desportista e não-violenta do jogo.\n[…]\nCertidão de nascimento de Mestre Pastinha\n[…]\nMestre Pastinha, com Fotos (em inglês)\n[…]\nMestre Pastinha - http://mestrepastinha.com"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Filhos de Gandhy",
      "descricao": "Afoxé do carnaval de Salvador, fundado em 1949, cujos integrantes desfilam de branco e azul com turbantes e colares."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1949, que grupo de trabalhadores de Salvador fundou o afoxé Filhos de Gandhy, que desfila de branco e azul no carnaval?",
    "resposta": "Estivadores",
    "distratores": [
      "Pescadores",
      "Ferroviários",
      "Pedreiros"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Filhos_de_Gandhy"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Filhos_de_Gandhy",
        "situacao": "ok",
        "texto": "Filhos de Gandhy é um afoxé brasileiro fundado por estivadores portuários de Salvador no dia 18 de fevereiro de 1949. Contando com aproximadamente 10 mil integrantes, tornou-se o maior afoxé do Carnaval de Salvador, município e capital do estado da Bahia. Constituído exclusivamente por homens e inspirado nos princípios de não-violência e paz do ativista indiano Mahatma Gandhi, o bloco traz a tradi\n[…]\nTradicionalmente a \"fantasia\" contém, além do turbante e das vestimentas, um perfume de alfazema e colares azul e branco. Os colares já são conhecidos tradicionalmente por \"colar dos filhos de Gandhy\", que são oferecidos para os admiradores como forma de desejar-lhes paz durante o carnaval e ao longo do ano. As cores dos colares são um referencial de paz e o afoxé enfoca Oxalá, que é o orixá maior.\n[…]\nEm 1949 os estivadores eram tidos como privilegiados, dadas as condições econômicas da época que lhes favorecia e ao fato de não terem patrões. O trabalho era fiscalizado pelo próprio sindicato dos estivadores, o que lhes conferia um certo status.\n[…]\nEm 1949 com a política de arrocho salarial, numa verdadeira economia de pós-guerra, o Governo Federal interveio nos sindicatos, inclusive no sindicato dos estivadores, o que fez decair a renda dos sindicalizados. O \"Comendo Coentro\" não pôde sair às ruas devido à crise financeira que se abateu sobre os estivadores e porque eles não queriam desfilar em condições inferiores às do ano anterior.\n[…]\nEm 1951 o bloco foi transformado em afoxé, por terem sido introduzidas músicas afros e o Camdomblé como orientação religiosa.\n[…]\nEm 1974 o Afoxé Filhos de Gandhy fechou por questões administrativo-financeiras, na presidência de Alberto Anastácio da Cruz. O bloco foi despejado de sua sede e todas as suas alegorias foram jogadas na rua. Durante dois anos o bloco não desfilou no carnaval de Salvador."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Ó Abre Alas",
      "descricao": "Marcha composta em 1899 para o cordão carnavalesco Rosa de Ouro, considerada a primeira marchinha de carnaval."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1899, quem compôs Ó Abre Alas, considerada a primeira marchinha de carnaval do Brasil?",
    "resposta": "Chiquinha Gonzaga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/%C3%93_Abre_Alas",
      "https://pt.wikipedia.org/wiki/Chiquinha_Gonzaga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93_Abre_Alas",
        "situacao": "ok",
        "texto": "\"Ó Abre Alas\" é uma marcha-rancho carnavalesca composta em 1899 pela musicista brasileira Chiquinha Gonzaga.\n[…]\nFoi a primeira marchinha de carnaval da história. Em 2011, a revista Veja elegeu As 10 melhores marchinhas de Carnaval de todos os tempos, onde Ó Abre Alas aparece na 4a posição.\n[…]\nÓ Abre Alas é a composição mais conhecida de Chiquinha, e aquela de maior sucesso. Tinha ela cinquenta e dois anos, já avó, e foi justo no ano dessa composição que inicia o romance com o jovem português João Batista Fernandes Lage, então com dezesseis anos.\n[…]\nA canção foi feita para o cordão carnavalesco Rosa de Ouro, citado na letra. O sucesso é considerado a primeira marcha carnavalesca da história.\n[…]\nNa época Chiquinha morava no Andaraí, era já compositora consagrada, quando integrantes do Cordão a procuram com o pedido de um \"hino\" para as folias momescas daquele ano, como registrou o historiador Geysa Boscoli, seu parente. Apesar de sua posição, não refutou o pleito que resultou na vitória do Cordão no carnaval. Era comum, naquele tempo, os cordões entoarem versos que anunciavam sua passagem, e a marcha de Chiquinha antecipou um gênero que só veio a se firmar duas décadas após.\n[…]\nEntre os anos 1901 e 1910 foi grande sucesso nos carnavais, tornando-se símbolo do carnaval carioca.\n[…]\nA dramaturga luso-brasileira Maria Adelaide Amaral adaptou um musical intitulado Chiquinha Gonzaga, Ó Abre Alas - ou simplesmente O Abre Alas na versão carioca - que estreou em São Paulo em 1983 e no Rio de Janeiro em 1996, como \"O Abre Alas\". Em 2000, publicou a obra Ò Abre Alas, pela editora Civilização Brasileira."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chiquinha_Gonzaga",
        "situacao": "ok",
        "texto": "Francisca Edviges Neves \"Chiquinha\" Gonzaga (Rio de Janeiro, 17 de outubro de 1847 – Rio de Janeiro, 28 de fevereiro de 1935), foi uma compositora, instrumentista, maestrina e abolicionista brasileira.\n[…]\nPioneira musicista, Chiquinha foi a primeira pianista chorona (musicista de choro), autora da primeira marcha carnavalesca (\"Ó Abre Alas\", 1899) e também a primeira mulher a reger uma orquestra popular no Brasil. Em uma época em que imperavam as valsas, polcas e tangos no cenário musical de elite no Brasil, Chiquinha incorporava em suas composições a diversidade encontrada na música das classes mais baixas. Foi também pioneira na defesa dos direitos autorais de músicos e autores teatrais.\n[…]\nNo começo de 1899, Chiquinha morava no Andaraí, onde o cordão Rosa de Ouro tinha a sua sede. Em uma tarde, enquanto o cordão ensaiava, Chiquinha se sentou ao piano e compôs uma música inspirada no cordão. A atitude pode parecer banal, mas na época não tinha ocorrido a nenhum outro compositor. Surgiu assim Ó Abre Alas, a primeira canção carnavalesca brasileira, que nascia como marcha-rancho.Ó abre alas!\n[…]\nChiquinha Gonzaga liderou a campanha pela defesa dos direitos autorais e tomou a iniciativa de criação da primeira entidade de classe. Assim que surgiram os meios mecânicos de reprodução musical, a questão envolvendo os direitos dos artistas começou a ser discutida. Assim, em 1917 foi fundada a Sociedade Brasileira de Autores Teatrais (Sbat), pioneira na defesa dos direitos autorais de teatrólogos e compositores musicais.\n[…]\nDINIZ, Edinha. Mestres da música no Brasil - Chiquinha Gonzaga (1ª ed.). São Paulo: Moderna, 2001.\n[…]\nChiquinha Gonzaga no IMDb\n[…]\nChiquinha Gonzaga no Almanaque da Folha de S. Paulo"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Lendas do Sul",
      "descricao": "Livro de 1913 que reúne lendas gaúchas como O Negrinho do Pastoreio, A Salamanca do Jarau e O Boitatá."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor gaúcho reuniu, no livro Lendas do Sul, de 1913, histórias como a do Negrinho do Pastoreio?",
    "resposta": "Simões Lopes Neto",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Sim%C3%B5es_Lopes_Neto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Sim%C3%B5es_Lopes_Neto",
        "situacao": "ok",
        "texto": "João Simões Lopes Neto (Pelotas, 9 de março de 1865 — Pelotas, 14 de junho de 1916), foi um escritor e empresário sul-rio-grandense e brasileiro. Segundo estudiosos e críticos de literatura, foi o maior autor regionalista do Rio Grande do Sul, pois procurou em sua produção literária valorizar a história do gaúcho e suas tradições.\n[…]\nSimões Lopes Neto só alcançou reconhecimento literário amplo de forma póstuma, especialmente após a publicação da edição crítica de Contos Gauchescos e Lendas do Sul, em 1949, organizada por Augusto Meyer para a Editora Globo, com o apoio de Henrique Bertaso e de Érico Veríssimo.\n[…]\nNo dia 5 de maio de 1892, em Pelotas, Simões Lopes Neto casou-se com Francisca de Paula Meireles Leite, filha de Francisco Meireles Leite e Francisca Josefa Dias. Ele tinha vinte e sete anos de idade e ela, dezenove anos. Não tiveram filhos.\n[…]\nEm 1893, quando eclodiu a Revolução Federalista no Rio Grande do Sul, Simões Lopes Neto alistou-se no 3o. Batalhão da Guarda Nacional.\n[…]\nConsidera-se que Simões Lopes Neto publicou apenas quatro livros em vida:\n[…]\nLendas do Sul (1913);\n[…]\nDos demais, nada ela encontrou, levando a crer que, ao se referir a inéditos, Simões Lopes Neto tinha em mente obras que ainda planejava escrever.\n[…]\nAssim, em 1955, a Editora Sulina de Porto Alegre publica, mesmo incompleto, um dos volumes da obra Terra Gaúcha, que levou o subtítulo de \"História Elementar do Rio Grande do Sul\".\n[…]\nEm 2003, a editora Sulina publicou um volume com a obra completa de João Simões Lopes Neto, organizada por Paulo Bentancur, com ilustrações de Enio Squeff.\n[…]\nEm 2016, quando do centenário da morte de Simões Lopes Neto, foi inaugurada uma estátua sua em tamanho real, sentado em um banco da Praça Coronel Pedro Osório, em Pelotas, obra do artista Leo Santana."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Lobisomem",
      "descricao": "Criatura lendária, homem que se transforma em lobo ou bicho peludo, presente no folclore brasileiro de origem europeia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo a crença popular brasileira, vira lobisomem o menino que nasce depois de quantas irmãs mulheres seguidas?",
    "resposta": "Seis",
    "distratores": [
      "Três",
      "Sete",
      "Doze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lobisomem"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lobisomem",
        "situacao": "ok",
        "texto": "Lobisomem ou Licantropo (do grego λυκάνθρωπος: λύκος, lýkos, \"lobo\" e άνθρωπος, ánthrōpos, \"humano\"), é um ser lendário que é descrito como um homem capaz de se transformar em lobo ou em algo semelhante a um lobo.\n[…]\nNo Brasil existem muitas versões dessa lenda, variando de acordo com a região. Uma versão diz que a sétima criança em uma sequência de filhos do mesmo sexo tornar-se-á um lobisomem. Outra versão diz o mesmo de um menino nascido após uma sucessão de sete mulheres. Outra, ainda, diz que o oitavo filho se tornará a fera. Outra já diz que é após a morte de um familiar que possuía a aberração e passou de pai para filho, avô para neto e assim por diante.\n[…]\nA lenda do lobisomem é muito conhecida no folclore brasileiro, e assim como em todo o mundo, os lobisomens são temidos por quem acredita em sua lenda. Algumas pessoas dizem que além da prata o fogo também pode matar um lobisomem. Outras acreditam que eles se transformam totalmente em lobos e não metade lobo metade homem.\n[…]\nWerewolf: The Forsaken é um RPG ambientado no Novo Mundo das Trevas criado pela White Wolf Editora traduzido no Brasil como \"Lobisomem: Os Destituídos\". É o sucessor comercial de Lobisomem: O Apocalipse, porém não é uma continuação do jogo anterior; o \"jogo de horror selvagem\" da linha de jogos do Mundo das Trevas original.\n[…]\nComo em Lobisomem: O Apocalipse, o jogo é construído com base nos mitos da cultura popular para criar uma visão única dos lobisomens, embora haja diferenças enormes entre Forsaken e seu antecessor. Por exemplo, o jogo apresenta um sistema de auspícios baseado nas cinco fases da lua, e cada o papel de cada jogador correspondendo aos auspícios continuam o mesmo com relação ao Apocalipse."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Pular ondas no Réveillon",
      "descricao": "Costume brasileiro de pular ondas no mar à meia-noite da virada do ano, fazendo pedidos, ligado a Iemanjá."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na virada do ano, muitos brasileiros vestidos de branco pulam ondas no mar fazendo pedidos. Quantas ondas manda a tradição?",
    "resposta": "Sete",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ano-Novo",
      "https://en.wikipedia.org/wiki/New_Year%27s_Eve"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ano-Novo",
        "situacao": "ok",
        "texto": "No calendário gregoriano, o Ano Novo (português europeu) ou ano-novo (português brasileiro), também chamado de Réveillon, é o primeiro dia do ano civil, 1º de janeiro. A maioria dos calendários solares, como o gregoriano e o juliano, inicia o ano regularmente no solstício de inverno do hemisfério norte ou próximo a ele. Em contraste, culturas e religiões que observam um calendário lunissolar ou lu\n[…]\nDe setembro a dezembro, do nono ao décimo segundo mês do calendário gregoriano, foram originalmente posicionados como o sétimo ao décimo mês. (Septem é latim para \"sete\"; octo, \"oito\"; novem, \"nove\"; e decem, \"dez\"). A mitologia romana geralmente atribui ao seu segundo rei, Numa, o estabelecimento dos dois novos meses de Ianuarius e Februarius. Estes foram inicialmente colocados no final do ano, mas em algum momento passaram a ser considerados os dois primeiros meses.\n[…]\nO primeiro de janeiro representa o recomeço de um novo ano após um período de retrospectiva do ano que passou, inclusive no rádio, na televisão e nos jornais, que começa no início de dezembro em diversos países. Publicações costumam publicar artigos de fim de ano que revisam as mudanças ocorridas durante o ano anterior. Este dia é tradicionalmente uma festa religiosa, mas desde a primeira década do século XX também se tornou uma ocasião para celebrar a noite de 31 de dezembro.\n[…]\nDezembro — Véspera de Ano-Novo — com festas, celebrações públicas (frequentemente envolvendo espetáculos de fogos de artifício) e outras tradições centradas na chegada iminente da meia-noite e do novo ano. Os serviços da vigília também ainda são observados por muitos."
      },
      {
        "url": "https://en.wikipedia.org/wiki/New_Year%27s_Eve",
        "situacao": "ok",
        "texto": "New Year's Eve in the Gregorian calendar refers to the evening—or commonly the entire day—of the last day of the year: 31 December. In many countries, New Year's Eve is celebrated with dancing, eating, drinking, and watching or lighting fireworks. Many Christians attend a watchnight service to mark the occasion. New Year's Eve celebrations generally continue into New Year's Day, 1 January, past mi\n[…]\nIn France, New Year's Eve (la Saint-Sylvestre) is usually celebrated with a feast, le Réveillon de la Saint-Sylvestre (Cap d'Any in Northern Catalonia). This feast customarily includes special dishes including foie gras, seafood such as oysters, and champagne. The celebration can be a simple, intimate dinner with friends and family or, une soirée dansante, a much fancier ball.\n[…]\nIn Brazil, Brazilians typically celebrate New Year's Eve (Portuguese: Ano Novo or Réveillon) at large parties hosted by restaurants and clubs; local traditions determine who opens a bottle of Champagne at midnight. People often wear colors with religious symbolism on New Year's Eve, such as white for good luck, yellow for good energies, happiness and money, red for love. Rituals such as the consumption of grapes, lychees and lentils also take place due to this mixture.\n[…]\nOn television, the most prominent New Year's Eve special is TV Globo's Show da Virada, which features pre-recorded concert performances (usually filmed from a different Brazilian city annually), and live coverage of New Year's celebrations across the country.\n[…]\nBrasília holds a public celebration on the Monumental Axis or Estádio Nacional Mané Garrincha. Celebrations in Manaus are centered upon a fireworks display on the Rio Negro Bridge, while Paulista Avenue hosts the main celebration in São Paulo, Brazil's largest city."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Viola caipira",
      "descricao": "Instrumento de cordas símbolo da música sertaneja de raiz."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Símbolo da música sertaneja de raiz, a viola caipira tradicional tem quantas cordas, arranjadas em pares?",
    "resposta": "Dez",
    "distratores": [
      "Seis",
      "Oito",
      "Catorze"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Viola_caipira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Viola_caipira",
        "situacao": "ok",
        "texto": "A viola caipira  é um instrumento musical de cordas dedilhadas e uma das variantes regionais da viola brasileira. É também conhecido como viola sertaneja ou viola cabocla mas, a depender da cultura local, ainda pode ter  várias outras denominações: viola de pinho, viola caipira, viola sertaneja, viola de arame, viola nordestina, viola cabocla, viola cantadeira, viola de dez cordas, viola chorosa, \n[…]\nA viola caipira tem características muito semelhantes ao violão. Tanto no formato quanto na disposição das cordas e acústica, porém é um pouco menor.\n[…]\nA disposição das cordas da viola varia razoavelmente, embora sempre haja cinco ordens, estes geralmente consistindo em dez cordas dispostas em cinco pares. De forma geral, os dois pares mais agudos são afinados em uníssono, enquanto os demais pares são afinados na mesma nota, mas com diferença de alturas de uma oitava. De qualquer forma, cada ordem é sempre tocada com todas as cordas simultâneas, como se fosse uma única corda.\n[…]\nA viola é o símbolo da música caipira, conhecida popularmente como moda de viola.\n[…]\nNo Brasil, é um instrumento tradicional. Músicas entoadas em suas cordas atravessaram gerações e até hoje estão presentes no  dia a dia da cultura brasileira da Paulistânia.\n[…]\nNa maior parte da antiga Capitania de São Paulo e Minas de Ouro, ou seja, os atuais estados de Minas Gerais, São Paulo, Goiás, Mato Grosso, Mato Grosso do Sul e em parte de Paraná e Tocantins, dentre outros, a viola tem destaque na música, onde a tradição da moda de viola é passada de geração em geração.\n[…]\nEm certas regiões, por tradição, as violas carregam pequenos chocalhos feitos de guizo de cascavel, pois segundo a lenda, tem poder de proteção para a viola e para o violeiro. Segundo contam os violeiros de antigamente, o poder do guizo chega a quebrar as cordas e até mesmo o instrumento do violeiro adversário.\n[…]\nBruna Viola\n[…]\nNestor da Viola\n[…]\nViola brasileira"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Caipora",
      "descricao": "Ser do folclore brasileiro protetor dos animais e das florestas, que castiga os caçadores."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da Caipora, protetora dos animais que castiga os maus caçadores, vem do tupi. O que ele significa?",
    "resposta": "Habitante do mato",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Caipora"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Caipora",
        "situacao": "ok",
        "texto": "Caipora ou caapora é uma entidade da mitologia tupi-guarani. A palavra “caipora” vem do tupi ka'a, mato, e pora, habitante, termos que em relação genitiva significam \"habitante do mato\". No folclore brasileiro, é representada como uma pequena indígena, ágil e nua. De acordo com a crença indígena, ela pode dar azar a quem a encontra ou vê. A exemplo do curupira, a caipora é protetora da floresta.\n[…]\nHabitante das florestas, reina sobre todos os animais e ela destrói os caçadores que não cumprem o acordo de caça feito com ela. Seu corpo é todo coberto por pelos. Ela vive montada numa espécie de peccarideo (queixada ou cateto) e ela carrega uma vara. Prima do Curupira, protege os animais da floresta. Os índios acreditavam que a Caipora temesse a claridade, por isso protegiam-se dele andando com tições acesos durante a noite.\n[…]\nNo imaginário popular em diferentes regiões do País, a figura da Caipora está intimamente associada à vida da floresta. Ele é o guardião da vida animal selvagem. Apronta toda sorte de ciladas para o caçador, sobretudo aquele que abate animais além de suas necessidades. Afugenta as presas, espanca os cães farejadores, e desorienta o caçador simulando os ruídos dos animais da mata. Assobia, estala os galhos e assim dá falsas pistas fazendo com que ele se perca no meio do mato.\n[…]\nMas, de acordo com a crença popular, é sobretudo nas sextas-feiras, nos domingos e dias santos, quando não se deve sair para a caça, que a sua atividade se intensifica. Mas há um meio de driblá-la. A Caipora aprecia o fumo. Assim, reza o costume que, antes de sair numa noite de quinta-feira para caçar no mato, deve-se deixar fumo de corda no tronco de uma árvore e dizer: \"Toma, Caipora, deixa eu ir embora\". A boa sorte de um caçador é atribuída também aos presentes que ele oferece.\n[…]\nA palavra caipora e seus derivados como \"caiporismo\" apareceram na literatura e teatro de revista."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Mamulengo",
      "descricao": "Teatro popular de bonecos de luva e vara do Nordeste, especialmente de Pernambuco."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do mamulengo, teatro popular de bonecos de Pernambuco, viria de qual expressão sobre o jeito de manipular os bonecos?",
    "resposta": "Mão molenga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mamulengo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mamulengo",
        "situacao": "ok",
        "texto": "Mamulengo é um tipo de fantoche típico do nordeste brasileiro, especialmente do estado de Pernambuco. A origem do nome é controversa, mas acredita-se que ela se originou de mão molenga - mão mole, ideal para dar movimentos vivos ao fantoche. Um ou mais manipuladores dão voz e movimento aos bonecos.\n[…]\nNa cidade  Olinda o Espaço Tiridá - Museu do Mamulengo procura preservar a tradição dos bonecos, contando em seu acervo com cerca de mil e quinhentas peças, além de realizar apresentações diárias.\n[…]\nO contramestre: serve como apoio de cena para o mestre o ajudando a manipular os bonecos de cana, fazendo cenas sozinho ou como ponto de apoio aos ajudantes;\n[…]\nOs ajudantes: o ajudante geralmente é um menino que aceita a função de auxiliar da tolda de boneco que pode atuar tanto dentro como fora. Dentro da tolda, ele é responsável por manipular os bonecos e, fora dela se apresenta em persona e serve como ponta para as piadas, solicitações ou outros pedidos dos personagens dentro do toldo;\n[…]\nA transmissão dos saberes do mamulengo ocorre, em grande parte, por meio de linhagens familiares que preservam modos de fazer, repertórios e técnicas ao longo de gerações. Em Pernambuco, um dos exemplos mais conhecidos é o legado de *Mestre Zé Lopes* (1950–2020), reconhecido como referência do Teatro de Bonecos Popular Nordestino e atuante por décadas em Glória do Goitá, município frequentemente associado à tradição do mamulengo.\n[…]\nCida Lopes integra e coordena o *Mamulengando Alegria, grupo fundado em 2008 inicialmente por mulheres da família Lopes, dedicado à preservação e recriação do mamulengo tradicional. O grupo desenvolve apresentações, oficinas e ações culturais e, desde 2024, é reconhecido como **Ponto de Cultura*, fortalecendo a transmissão intergeracional do teatro de bonecos popular."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Lenda da mandioca",
      "descricao": "Lenda indígena tupi sobre a menina Mani, de cujo túmulo teria brotado a mandioca."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo uma lenda tupi, a mandioca brotou no túmulo da indiazinha Mani, enterrada dentro da oca. O que o nome da planta significaria?",
    "resposta": "Casa de Mani",
    "distratores": [
      "Filha de Mani",
      "Raiz de Mani",
      "Corpo de Mani"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mandioca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mandioca",
        "situacao": "ok",
        "texto": "Manihot esculenta, conhecida como mandioca, macaxeira, aipim, castelinha, uaipi, mandioca-doce, mandioca-mansa, maniva, maniveira, pão-de-pobre, mandioca-brava e mandioca-amarga, é uma planta da família das Euphorbiaceae. Esta planta é nativa da América do Sul, no entanto está presente em muitas regiões do mundo.\n[…]\n\"Mandioca\" origina-se do termo tupi mani'oka, ou mandi'oka, que significa \"mani arrancado\", isto é, extraído da terra (do verbo 'ok, arrancar). Mani- é um elemento de composição, presente também em maniva, maniçoba, etc, mas cujo significado isolado não é determinado.\n[…]\nA lenda de Mani foi registrada em 1876, por Couto de Magalhães. Em domínio público, este foi o registro do folclorista:\n[…]\nA criança, que teve o nome de Mani e que andava e falava precocemente, morreu ao cabo de um ano, sem ter adoecido e sem dar mostras de dor. Foi ela enterrada dentro da própria casa, descobrindo-se e regando-se diariamente a sepultura, segundo o costume do povo. Ao cabo de algum tempo, brotou da cova uma planta que, por ser inteiramente desconhecida, deixaram de arrancar. Cresceu, floresceu e deu frutos.\n[…]\nOs pássaros que comeram os frutos se embriagaram, e este fenômeno, desconhecido dos índios, aumentou-lhes a superstição pela planta. A terra afinal fendeu-se, cavaram-na e julgaram reconhecer no fruto que encontraram o corpo de Mani. Comeram-no e assim aprenderam a usar da mandioca.\"\n[…]\nCâmara Cascudo acrescenta que o nome \"mandioca\" advém de Mani + oca, significando \"casa de Mani\". É, segundo este autor, um mito tupi, recontado em obras posteriores, como Lendas dos Índios do Brasil, de Herbert Baldus (1946), e Antologia de Lendas dos Índios Brasileiros, de Alberto da Costa e Silva (1956).\n[…]\nMani = o nome da menina,\n[…]\npuera (guera) = tem o significado de ruim (a parte ruim da mani), o que já foi, velho."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Capoeira",
      "descricao": "Arte marcial afro-brasileira que combina luta, dança, música e acrobacia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de batizar a luta afro-brasileira, a palavra capoeira, de origem tupi, designava que tipo de terreno?",
    "resposta": "Mato ralo, já cortado",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capoeira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capoeira",
        "situacao": "ok",
        "texto": "A capoeira ou capoeiragem é uma expressão cultural e esporte afro-brasileiro que mistura arte marcial, dança e música. Acredita-se que foi desenvolvida no Brasil através do Engolo, arte marcial angolana introduzida no Brasil por escravizados africanos.\n[…]\nEscravos bantos levados de Angola para o Brasil trouxeram com eles um tipo caraterístico de luta corporal, ainda nos tempos coloniais, com a qual se entretinham nos intervalos do trabalho nos mercados para onde transportavam as capoeiras, chamando a atenção dos assistentes, pela graça e beleza das exibições.\n[…]\nO nome \"Angola\" já começa a aparecer com os negros que vinham para o Brasil oriundos da África, embarcados no Porto de Luanda, que, independente de sua origem, eram designados na chegada ao Brasil de \"negros de Angola\".\n[…]\nA luta regional baiana tornou-se rapidamente popular, levando a capoeira ao grande público e finalmente mudando a imagem do capoeirista, tido no Brasil até então como um marginal. Das muitas apresentações que mestre Bimba fez com seu grupo, talvez a mais conhecida tenha sido a ocorrida em 1953 para o então presidente da república Getúlio Vargas, ocasião em que teria ouvido do presidente: \"A capoeira é o único esporte verdadeiramente nacional\".\n[…]\nDevido à sua vastidão e à sua origem, a capoeira nunca teve unidade ou consenso. O sistema de graduação segue o mesmo caminho, nunca tendo existido um sistema padrão que fosse aceito pela maioria dos grandes mestres. Dessa forma, o sistema de graduação varia muito de grupo para grupo. A própria origem do sistema é recente, tendo partido com a Luta Regional Baiana de Mestre Bimba, na década de 1930.\n[…]\nMúsica afro-brasileira\n[…]\nAssociação Brasileira de Capoeira Angola (ABCA)\n[…]\nConfederação Brasileira de Capoeira (CBC)"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Fogueira de São João",
      "descricao": "Grande fogueira acesa nas festas juninas brasileiras, sobretudo na véspera do dia de São João, 24 de junho."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição católica, por que se acendem fogueiras nas festas de São João?",
    "resposta": "Isabel avisou Maria do nascimento de João",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Festa_junina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Festa_junina",
        "situacao": "ok",
        "texto": "Festas juninas, festas dos santos populares ou celebração do meio do verão são uma celebração da estação do verão do hemisfério norte, geralmente realizada em uma data próxima ao solstício de verão. Tem raízes pagãs pré-cristãs na Europa.\n[…]\nO cristianismo designou 24 de junho como o dia da festa do nascimento de João Batista e a observância do Dia de São João começa na noite anterior, conhecida como Véspera de São João. Estes são comemorados por muitas denominações cristãs, como a Igreja Católica Romana, as Igrejas Luteranas e a Comunhão Anglicana, bem como pela Maçonaria.\n[…]\nCanta-se o fado e outras músicas tradicionais e dança-se até de madrugada. Outro momento grande é a procissão de Santo António, que sai da Igreja de Santo António de Lisboa, situada em Alfama, junto à Sé de Lisboa, no local do seu nascimento, cerca de 1193.;\n[…]\nFestas de São João são ainda celebradas em alguns países europeus católicos, protestantes e ortodoxos (França, Irlanda, os países nórdicos e do Leste europeu). As fogueiras de São João e a celebração de casamentos reais ou encenados (como o casamento fictício no baile da quadrilha nordestina e na tradição portuguesa) são costumes ainda hoje praticados em festas de São João europeias. É ainda costume a realização de fogueiras onde o combustível é o rosmaninho.[carece de fontes]?\n[…]\nRealizam-se entre 20 e 26 de junho, sendo a sexta-feira (Midsommarafton) o dia mais tradicional, com as suas características  danças em círculo ao redor do majstången (mastro de maio), um mastro colocado no centro da aldeia e decorado por flores e ramos com folhas. O dia seguinte – sábado (Midsommardag) – é um dia feriado dedicado pela igreja à memória do nascimento de João Batista.\n[…]\nVéspera de São João\n[…]\nFlor-de-são-joão"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Cabeça de Cuia",
      "descricao": "Lenda piauiense do pescador Crispim, amaldiçoado a vagar pelos rios de Teresina com a cabeça enorme."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que crime cometeu o pescador Crispim para ser amaldiçoado a vagar pelos rios com a cabeça enorme, como o Cabeça de Cuia?",
    "resposta": "Matou a própria mãe",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cabe%C3%A7a_de_Cuia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cabe%C3%A7a_de_Cuia",
        "situacao": "ok",
        "texto": "Cabeça de Cuia é uma lenda brasileira da região Nordeste, mais precisamente contada no estado do Piauí, ao longo da bacia do rio Parnaíba.[carece de fontes]?\n[…]\nHá várias versões de lendas que envolvem a figura do Cabeça de Cuia. Em uma das lendas mais difundidas trata-se da história de Crispim, um jovem pescador que morava às margens do rio Parnaíba.\n[…]\nA lenda do Cabeça de Cuia ganhou notoriedade no Piauí no final do século XIX.\n[…]\nEm 3 de outubro de 2023, a Assembleia Legislativa do Piauí (Alepi) aprovou um projeto de lei que reconhece a lenda do Cabeça de Cuia como Patrimônio Cultural Imaterial do Piauí. Em 23 de outubro de 2023, o projeto foi sancionado pelo governador do estado, Rafael Fonteles.\n[…]\nO Cabeça de Cuia é uma figura lendária do folclore brasileiro, especialmente do estado do Piauí. A lenda narra a trajetória de Crispim, um jovem magro, cabeludo e oriundo de uma família pobre, que vivia próximo às margens do rio Parnaíba, no município de Teresina, capital do Piauí. Certo dia, ao deparar-se com uma refeição escassa preparada por sua mãe, ele teria se enfurecido e atirado um osso de boi contra a cabeça dela, causando sua morte.\n[…]\nAntes de falecer, a mãe o amaldiçoou, condenando-o a vagar dia e noite pelos rios Parnaíba e Poti sob a forma de uma criatura com uma cabeça grande, semelhante a uma cuia, daí o nome \"Cabeça de Cuia\". A lenda ainda afirma que Crispim só poderia quebrar a maldição após devorar sete moças virgens chamadas Maria. Após ser amaldiçoado, ele teria corrido em direção ao rio Parnaíba e se lançado nas águas, afogando-se.\n[…]\nReinaldo Coutinho; Cabeça de Cuia: Monstro ou ET?, Edições do autor, 2002."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Iara",
      "descricao": "Sereia do folclore brasileiro que vive nos rios e encanta pescadores com seu canto."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Numa versão conhecida da lenda, a jovem guerreira Iara foi jogada no rio pelo próprio pai. O que ela tinha feito?",
    "resposta": "Matou os irmãos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Iara_(mitologia)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Iara_(mitologia)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Dia do Folclore",
      "descricao": "Data comemorativa brasileira dedicada às tradições populares, instituída por decreto em 1965."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Dia do Folclore cai em 22 de agosto por causa de algo que o inglês William Thoms fez nessa data, em 1846. O quê?",
    "resposta": "Criou o termo folklore",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_do_Folclore",
      "https://pt.wikipedia.org/wiki/Folclore"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_do_Folclore",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Folclore",
        "situacao": "ok",
        "texto": "Folclore (do inglês folk-lore) é um gênero da cultura de origem popular, que representa a identidade social de uma comunidade através de atividades culturais que nasceram, individualmente ou coletivamente, e se desenvolveram com o povo (costumes e tradições) transmitidos entre gerações.\n[…]\nO termo folclore é um aportuguesamento da expressão inglesa \"folk-lore\", formada pelos vocábulos folk (gente; povo) e lore (conhecimento; tradição) e passou a designar o conhecimento tradicional de um povo.\n[…]\nO primeiro registro do uso público de \"folk-lore\" ocorreu em agosto de 1845. Na ocasião, a revista londrina “The Atheneum” publicou uma carta recebida de Willian Thoms (sob o pseudônimo Ambrose Merton). Em comemoração, instituiu-se mundialmente o Dia do Folclore em 22 de agosto.\n[…]\nO termo folclore  passou a ser utilizado então para se referir às tradições, costumes e superstições das classes populares. Posteriormente, o termo passou a designar toda a cultura nascida principalmente nessas classes, dando ao folclore o status de história não escrita de um povo.\n[…]\nDepois de iniciar e frutificar na Europa, o estudo do folclore se estendeu ao Novo Mundo, chegando ao Brasil na segunda metade do século XIX através dos precursores Celso de Magalhães e Sílvio Romero, e aos Estados Unidos, onde em 1888, William Wells Newell, Mark Twain, Rutherford Hayes e um grupo de outros interessados fundaram a Sociedade Americana de Folclore (do inglês \"American Folklore Society\"), que publica um jornal em atividade até hoje, o Journal of American Folklore.\n[…]\nPode-se dividir as manifestações folclóricas em oito categorias:\n[…]\nFolclore brasileiro\n[…]\nCarta do Folclore Brasileiro\n[…]\nLendas do folclore brasileiro\n[…]\nFolclore inglês\n[…]\nCentro Nacional de Folclore e Cultura Popular\n[…]\nFolclore: cultura brasileira na sala de aula"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Cuíca",
      "descricao": "Instrumento de percussão brasileiro de som roncado, usado no samba, tocado pela fricção de uma haste presa ao couro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O ronco da cuíca, tão típico do samba, nasce da fricção com um pano úmido de qual peça presa por dentro ao centro do couro?",
    "resposta": "Uma vareta de bambu",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cu%C3%ADca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cu%C3%ADca",
        "situacao": "ok",
        "texto": "A cuíca ou puíta (em Angola pwita) é um instrumento musical, semelhante a um tambor, com uma haste de madeira presa no centro da membrana de couro, pelo lado interno. O som é obtido friccionando a haste com um pedaço de tecido molhado e pressionando a parte externa da cuíca com dedo, produzindo um som de ronco característico. Quanto mais perto do centro da cuíca o dedo do instrumentista estiver, m\n[…]\nO instrumento foi introduzido no Brasil por pessoas escravizadas da África, onde encontrou seu lugar na música samba. Ela pode ter sido trazida ao Brasil por escravos africanos bantos, mas ligações podem ser traçadas a outras partes do nordeste africano, assim como à península Ibérica, a exemplo da sarronca. A cuíca era também chamada de \"rugido de leão\" ou de \"tambor de fricção\".\n[…]\nExistem muitos tamanhos de cuíca, e embora seja geralmente considerada um instrumento de percussão ela não é percutida. Encaixada na parte de baixo da pele está uma haste de bambu. A extensão tonal da cuíca pode chegar a duas oitavas. Os tons produzidos tentam imitar a voz na forma de grunhidos, gemidos, soluços e guinchos, e podem estabelecer assim um ostinato rítmico.\n[…]\nA cuíca possui uma vareta de madeira fixada em uma das extremidades, no interior do tambor, no centro da pele. Essa vareta é resinada e friccionada com um pano. Alterar a pressão sobre a pele do tambor pelo lado de fora produz diferentes alturas e timbres.\n[…]\nO polegar, o indicador e o dedo médio seguram a haste no interior do instrumento com um pedaço de pano úmido, e os ritmos são articulados pelo deslizamento deste tecido ao longo do bambu. A outra mão segura a cuíca e com os dedos exerce uma pressão na pele. Quanto mais forte a haste for segurada e mais pressão for aplicada na pele mais altos serão os tons obtidos. Um toque mais leve e menos pressão irão produzir tons mais baixos.\n[…]\nJorge Ben usa a cuíca em muitas de suas canções."
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Maracatu nação",
      "descricao": "Cortejo carnavalesco afro-brasileiro de Pernambuco, também chamado maracatu de baque virado, com rei, rainha e batuque."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No cortejo do maracatu de baque virado, a dama do paço carrega uma boneca sagrada vestida a rigor. Como se chama essa boneca?",
    "resposta": "Calunga",
    "distratores": [
      "Abayomi",
      "Maricota",
      "Iabá"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maracatu"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maracatu",
        "situacao": "ok",
        "texto": "Maracatu é um ritmo musical, dança e ritual de sincretismo religioso com origem no estado brasileiro de Pernambuco.\n[…]\nExistem dois tipos, conforme o \"baque\" ou batida: Maracatu Nação (Baque Virado) e Maracatu Rural (Baque Solto). O primeiro, bastante comum na área metropolitana do Recife, é o mais antigo ritmo afro-brasileiro; e o segundo é característico da cidade de Nazaré da Mata (Zona da Mata Norte de Pernambuco).\n[…]\nO registro mais antigo que se tem sobre o Maracatu Nação data de 1711, mas o ano de sua origem é incerto. O que se sabe é que ele surgiu em Pernambuco e vem se transformando desde então.\n[…]\nUma das peculiaridades deste maracatu é o costume de conduzir três calungas (bonecas negras) ao invés de duas como é comum aos outros maracatus. São elas: Dona Leopoldina, Dom Luís e Dona Emília, que representam os orixás Iansã, Xangô e Oxum, respectivamente. Outra característica singular do Nação Elefante é o fato de ter sido o primeiro a ser conduzido por uma matriarca, pois até então os maracatus sempre tinham sido regidos por uma figura masculina.\n[…]\nO maracatu de baque virado é caracterizado pelo uso predominante de instrumentos de origem africana. Na percussão chamam atenção os grandes tambores, chamados alfaias, que são tocados com baquetas específicas. Estes dão o ritmo ou o baque da música e são acompanhados pelas caixas ou taróis, ganzás, abês e um gonguê ou agogô.\n[…]\nMaracatu Nação\n[…]\nMaracatu Rural\n[…]\nMaracatu Nação\n[…]\nMaracatu na RDB"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Folia de Reis",
      "descricao": "Cortejo religioso popular que percorre casas cantando a visita dos Reis Magos ao Menino Jesus."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na folia de reis, que personagens mascarados e brincalhões representam os soldados de Herodes que perseguiam o Menino Jesus?",
    "resposta": "Os palhaços",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Folia_de_Reis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Folia_de_Reis",
        "situacao": "ok",
        "texto": "Folia de Reis, Companhia de Reis, Reisado ou Festa de Santos Reis (em Portugal diz-se Reisada ou Reiseiros), é uma manifestação católica, cultural e festiva, classificada sobretudo no Brasil como manifestação folclórica, comemorativa da festa religiosa da Epifania do Senhor ou Teofonia, que se caracteriza por celebrar a Adoração dos Magos ao nascimento de Jesus Cristo.\n[…]\nTrês reis magos: participantes que personificam os reis que visitaram o Menino Jesus, quando ele nasceu: Baltasar, Melquior e Gaspar.\n[…]\nUsando um bastão vestem-se com máscaras, portam um apito com o qual marcam a chegada e a partida da bandeira, durante as exibições dos bastiões, os espectadores atiram moedas ao chão, em frente a eles para homenageá-los. Eles, então, alegram-se e brincam entre si, empurrando as moedas com o bastão para que o outro palhaço as colete, aproveitam para instigar o público a jogar mais dinheiro, que eles colocam em sacolas para coleta desses donativos.\n[…]\nÉ importante destacar que, nas folias, não existe a participação feminina conforme indica Porto: \"Os Três Reis Magos não trouxeram consigo suas esposas; se os foliões levassem mulher à folia, estariam deturpando o sentido da representação\"; também, dizem outros, nenhuma mulher visitou o presépio de Jesus; admitir mulher entre os foliões, como participante, seria desviar o sentido da dramatização.\n[…]\nNo Sul de Minas, um grupo de Folia de Reis é composta da bandeira ou estandarte que é decorado com figuras alusivas ao Menino Jesus, ou mesmo com palavras relativas à data. Outro componente importante é o bastião que se veste de modo característico, mascarado e sempre porta uma espada, este tem a função de folião propriamente dito, levando alegria por onde a folia passa, e como que abrindo caminho para a passagem da folia que de certa forma representa os próprios Reis Magos.\n[…]\nO meu palhaço que saber. (bis)"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "São Jorge no Rio de Janeiro",
      "descricao": "Devoção popular carioca ao santo guerreiro São Jorge, celebrado em 23 de abril e sincretizado com um orixá."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No Rio de Janeiro, o santo guerreiro São Jorge, montado em seu cavalo, é associado a qual orixá, senhor do ferro?",
    "resposta": "Ogum",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ogum"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ogum",
        "situacao": "ok",
        "texto": "Ogum (em iorubá: Ògún; em castelhano: Oggún; em francês: Ogoun; em fon,Gu) é um vodum loá e orixá do ferro, guerra, agricultura, caminhos, caça, tecnologia e protetor de artesãos e ferreiros.\n[…]\nPrincipalmente no Sudeste brasileiro, Ogum é sincretizado com São Jorge, formando um dos exemplos mais expressivos de sincretismo religioso na cultura brasileira. Diferentemente de outros casos em que o sincretismo apenas mascara o culto de um orixá sob a forma de um santo católico, substituindo sua imagética original, no caso de Jorge e Ogum observa-se uma via de mão dupla.\n[…]\nEssas festividades são frequentemente marcadas por elementos da cultura afro-brasileira, mesmo quando organizadas em contextos católicos, refletindo o processo histórico da influência simbólica de Ogum na religiosidade popular. Nesse sentido, a devoção contemporânea ao santo incorpora camadas culturais associadas ao orixá, ainda que sua matriz católica permaneça distinta em termos teológicos.\n[…]\nAlém de ser representado com o nome e a imagem de São Jorge, em algumas vertentes das religiões afro-brasileiras, Ogum passa a ser associado às cores vermelho e branco, ao invés do tradicional azul, e ao cavalo, ao invés da serpente, o que mostra que, embora sua influência na imagem de São Jorge, a figura de Ogum também é remoldada historicamente por elementos do santo.\n[…]\nConsiderado senhor do ferro, da guerra, da agricultura e da tecnologia, Ogum era o filho mais velho de Odudua. Este último era o rei fundador da cidade de Ifé, e Ogum assume o título de rei regente da cidade quando seu pai perde momentaneamente a visão.\n[…]\nAlém disso, Ogum é o dono dos montes junto com Oxóssi e dos caminhos, este último junto com Eleguá."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Cosme e Damião",
      "descricao": "Santos gêmeos médicos do cristianismo, cuja festa popular no Brasil inclui a distribuição de doces às crianças."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No sincretismo afro-brasileiro, os santos gêmeos Cosme e Damião correspondem a quais orixás?",
    "resposta": "Ibejis",
    "distratores": [
      "Exus",
      "Iabás",
      "Voduns"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ibeji",
      "https://pt.wikipedia.org/wiki/Cosme_e_Dami%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ibeji",
        "situacao": "ok",
        "texto": "Ibeji (também conhecido como Yori) é o orixá jeje-nagô dos gêmeos.\n[…]\nA palavra Ibeji quer dizer gêmeos. Forma-se a partir de duas entidades distintas que coexistem, respeitando o princípio básico da dualidade.\n[…]\nContam os Itãs (conjunto de lendas e histórias passados de geração a geração pelos povos africanos) que os Ibejis são filhos paridos por Iansã, mas abandonados por ela, que os jogou nas águas. Foram abraçados e criados por Oxum como se fossem seus próprios filhos. Doravante, os Ibejis passam a ser saudados em rituais específicos de Oxum e, nos grandes sacrifícios dedicados à deusa, também recebem oferendas.\n[…]\nOs gêmeos Ibeji entre os iorubas, hoho e fons são objeto de culto.\n[…]\nExiste uma confusão latente entre Ibeji e os Erês. É evidente que há uma relação, mas não se trata da mesma entidade, confundindo até mesmo como orixá. Ibeji são divindades gêmeas, sendo costumeiramente sincretizadas aos santos gêmeos católicos Cosme e Damião.\n[…]\nPor serem gêmeos, são associados ao princípio da dualidade; por serem crianças, são ligados a tudo que se inicia e brota: a nascente de um rio, o nascimento dos seres humanos, o germinar das plantas etc.\n[…]\nA grande cerimônia dedicada a Ibeji acontece a 27 de setembro, dia de Cosme e Damião, quando comidas como caruru, vatapá, bolinhos, doces, balas (associadas às crianças, portanto) são oferecidas tanto a eles como aos frequentadores dos terreiros."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cosme_e_Dami%C3%A3o",
        "situacao": "ok",
        "texto": "Os Santos Cosme e Damião, irmãos gêmeos, morreram por volta de 300 d.C. Crê-se que foram médicos, e sua santidade é atribuída pelo motivo de haverem exercido a medicina sem cobrar por isso, devotados à fé. Na Igreja Católica, sua festa é celebrada no dia 26 de setembro, de acordo com o atual Calendário Litúrgico Romano do Rito Ordinário, e no dia 27 de setembro, pelo Calendário Litúrgico Romano do\n[…]\nA Igreja Católica Apostólica Romana, desde tempos imemoráveis até o Calendário Romano de 1962, que vigorou até 1969, celebrava a festa de santos Cosme e Damião no dia 27 de setembro. Porém, em 1969, com a reforma litúrgica, o Calendário Romano passou a comemorá-los no dia 26, pois, considerada a importância de São Vicente de Paulo, também celebrado dia 27, preferiram não pôr as duas Memórias na mesma data.\n[…]\nSão Vicente ficou com o dia 27, já que era a data sabida de sua morte; já Santos Cosme e Damião, como não se sabe a data de morte deles, tiveram sua Memória movida para o dia 26 de setembro. Ainda assim, católicos tradicionalistas, devotos mais antigos e as religiões afro-brasileiras que também os cultuam, como o Candomblé e a Umbanda, continuam a comemorá-los no dia 27.\n[…]\nCosme e Damião também são celebrados pela Igreja Ortodoxa, mas há três pares de santos Cosme e Damião celebrados por essa Igreja. O mais comumente associado a santos Cosme e Damião médicos na Síria é celebrado em 1º de novembro, como Santos Cosme e Damião da Ásia Menor. Mas há uma celebração em 17 de outubro, de Santos Cosme e Damião da Cilícia, e outra em 1º de julho, de Santos Cosme e Damião de Roma.\n[…]\nSão considerados no Brasil os Santos padroeiros dos Farmacêuticos e Médicos. A história de São Cosme e São Damião — que por sua vez é marcada por visões diferentes, dependendo da crença de cada religião — demonstra a complementaridade e interdependência que as profissões irmãs, a medicina e a farmácia, possuem."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Boiuna",
      "descricao": "Monstro do folclore amazônico, serpente gigantesca e escura que vive nos rios, também chamada Cobra Grande."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que os nomes do Boitatá, guardião dos campos, e da Boiuna, monstro gigante dos rios amazônicos, têm em comum?",
    "resposta": "Vêm do tupi mboi, cobra",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Boiuna",
      "https://pt.wikipedia.org/wiki/Boitat%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Boiuna",
        "situacao": "ok",
        "texto": "A boiuna, Mboi-Una (cobra negra), cobra-grande, mãe-do-rio ou senhora-das-águas é um mito amazônico de origem ameríndia. É descrita como uma enorme cobra escura capaz de virar as embarcações. Também pode imitar as formas das embarcações, atraindo náufragos para o fundo do rio ou assumir a forma de uma mulher.\n[…]\n\"Boiuna\" deriva do tupi mbóiuna, que significa \"cobra preta\", através da junção de mbói (cobra) e una (preta).\n[…]\nPorém sua irmã Maria Canina cresceu uma garota má e amarga, afogando embarcações e fazendo muitas maldades, igual seu pai o Cobra Grande ou Boiúna\n[…]\nCom isso a Cobra Grande começou a aterrorizar e devorar as pessoas próximas do Rio. Essa versão conta a origem da Cobra Grande, de forma bem curiosa e controversa.\n[…]\nEssa versão da lenda é bastante conhecida no Pará. A lenda conta que uma Cobra Grande conhecida como Boiúna está adormecida debaixo da cidade de Belém, com sua cabeça na Catedral da Sé e seu corpo se estendendo até a Basílica de Nazaré. A lenda conta que se a corda acordar, a cidade de Belém será engolida por um grande rio.\n[…]\nE como a cobra poderia acordar?\n[…]\nExistem várias vertentes desse acontecimento. alguns acreditam que ela pode se irritar, outros afirmam que ela já se moveu algumas vezes, causando tremores de terra em Belém. Há também quem diga que a cobra só permanece adormecida graças à procissão do Círio, e que a corda usada na procissão é uma representação da própria Cobra Grande. Essas diferentes interpretações mostram a complexidade da lenda.\n[…]\nMuitas pessoas confundem a Boiúna com o Norato, mas na verdade, segundo a lenda, Norato (ou Honorato) é um dos filhos da Boiúna, sendo irmão de Maria Caninana. A Boiúna é uma cobra gigantesca que habita as profundezas dos rios ou lagos, com olhos luminosos que aterrorizam aqueles que a encontram."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boitat%C3%A1",
        "situacao": "ok",
        "texto": "Boitatá é um termo oriundo da língua tupi usado para designar, em todo o Brasil, o fenômeno do fogo-fátuo, e deste derivando algumas entidades míticas, das primeiras registradas no país.\n[…]\nNo folclore brasileiro, o Boitatá (Mboitatá) é uma gigantesca cobra-de-fogo, que assim como o Cobra-Grande é um terror que viva nas águas. É o guardião do campo servindo sob a Jaci (deusa geral dos vegetaes), u se transformar também numa tora em brasa, queimando aqueles que põem fogo nas campos, matas e florestas.\n[…]\nNa obra Lendas do Sul (1913), de João Simões Lopes Neto, há um conto com esse nome que descreve bem a lenda. Foi essa imagem que se consagrou na imaginação popular. Descreve-se o Boitatá \"ora como uma cobra preta, ora como uma cobra grande, de olhos luminosos como dois faróis\".\n[…]\nA tentativa de escapar da cobra apresenta riscos porque o ente pode imaginar fuga de alguém que ateou fogo nas matas. No Rio Grande do Sul, acredita-se que o \"boitatá\" é o protetor das matas e das campinas. A verdade é que a ideia de uma cobra luminosa, protetora de campinas e dos campos aparece freqüentemente na literatura, sobretudo nas narrativas do Rio Grande do Sul.\n[…]\nApesar do tamanho gigante, a serpente é tão discreta, que só conseguem vê-la aqueles que ela mesmo captura”. Também João Simões Lopes Neto, em obra supramencionada, refere-se ao ser no feminino, valendo citar o trecho: “Foi assim e foi por isso que os homens, quando pela primeira vez viram a boiguaçu tão demudada, não a conheceram mais. Não conheceram e julgando que era outra, muito outra, chamam-na desde então, de boitatá, cobra do fogo, boitatá, a boitatá!”.\n[…]\n«Galeria de mitos brasileiros - Mboi-tatá»"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Atabaque",
      "descricao": "Tambor alto e de madeira, de origem afro-brasileira, afinado por cordas e cunhas."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No candomblé, os três atabaques se chamam rum, rumpi e lé. Qual deles é o maior e de som mais grave?",
    "resposta": "Rum",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Atabaque"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Atabaque",
        "situacao": "ok",
        "texto": "Atabaque (do árabe \"al-Tabaq\": \"prato\") é um instrumento musical de percussão africano da família dos membranofones percutidos. É usualmente tocado em rituais religiosos afro-brasileiros como o candomblé e umbanda, empregado para convocar as divinidades (orixás, inquices e voduns).\n[…]\nOs atabaques nos ritos afro-brasileiros são objetos sagrados e renovam anualmente o Axé. São usados unicamente nas dependências do terreiro ritualísticos, não saem para a rua (como os que são usados nos blocos de afoxés), estes são preparados exclusivamente para esse fim.\n[…]\nNos terreiros afro-brasileiros, os atabaques são tocados em trio, e são chamados de \"rum\", \"rumpi\" e \"le\". O rum, o maior de todos, possui o registro grave; o rumpi, tem o registro médio; o lé, o menor, possui o registro agudo. O trio de atabaques executa, ao longo do xirê, uma série de toques que devem estar de acordo com os orixás que são evocados em cada momento da festa (é o condutor do Axé do Orixá).\n[…]\nNo candomblé só podem ser tocados pelo Alabê (povo Queto), Xicarangoma (povo Angola e Congo) e Runtó (povo Jeje), o responsável pelo rum (atabaque maior), e pelos ogãs (do iorubá \"-ga\": \"pessoa superior\" ou \"chefe\") nos atabaques menores sob o seu comando, é o Alabê que começa o toque e é através do seu desempenho no rum que o Orixá vai executar sua coreografia, de caça, de guerra, sempre acompanhando o floreio do Rum. O Rum é que comanda o rumpi e o le.\n[…]\nOs atabaques são chamados de Ilubatá ou Ilu na nação Queto, e ingomba na nação Angola, mas todas as nações adotaram também os nomes Rum, Rumpi e Le para os atabaques, apesar de serem uma denominação Jeje.\n[…]\nOutros instrumentos musicais associados ao atabaque são:"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Berimbau",
      "descricao": "Instrumento de corda de arco e cabaça que comanda o ritmo da roda de capoeira."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na roda de capoeira tocam três berimbaus: gunga, médio e viola. Qual deles, de cabaça maior, tem o som mais grave?",
    "resposta": "Gunga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Berimbau"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Berimbau",
        "situacao": "ok",
        "texto": "O berimbau(português brasileiro) ou hungo(português angolano) é um instrumento de corda com origem em Angola e tradicional da Bahia.\n[…]\nO gunga toca a linha grave, raramente com improvisações. O tocador de berra-boi no começo de uma roda de capoeira geralmente é seu líder, sendo seguido pelos outros instrumentos. O tocador principal do gunga geralmente também lidera a cantoria, além de convidar os jogadores ao \"pé do berimbau\" (para inciarem o jogo).\n[…]\nNão há muitas regras formais no toque do berimbau na capoeira, sendo que cada mestre de roda determina a interação entre seus músicos. Alguns preferem todos os instrumentos em uníssono, ao passo que outros dividem os tocadores entre iniciantes e avançados, requerendo dos últimos variações mais complexas.\n[…]\nA afinação na capoeira é escassamente definida. O berimbau é um instrumento microtonal, e pode ser afinado na mesma altura, variando apenas no timbre. A nota baixa do médio é afinada com a nota alta do gunga, o mesmo se procedendo em relação ao violinha para com o médio. Outros gostam de afinar o instrumento em quarteto (dó-fá-si) ou em tríade (dó-mi-sol). No geral, a afinação depende da aprovação do mestre de roda.\n[…]\nGunga ou berra-boi: tom mais grave.\n[…]\nmédio: tom médio.\n[…]\nO berimbau de som mais grave conhecido por gunga também é chamado de berra-boi. Sendo que os dois capoeiristas mais antigos da atualidade, Mestre Ananias e Mestre João Grande utilizam a denominação de Gunga.\n[…]\nSão Bento Pequeno (ou Angola Invertido): similar ao Angola, mas com os tons altos e baixos invertidos ; geralmente tocado com o berimbau médio, enquanto se toca o toque Angola no berimbau mais grave."
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Lenda do guaraná",
      "descricao": "Lenda do povo indígena Sateré-Mawé sobre a origem do guaraná a partir dos olhos de um menino."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Segundo uma lenda do povo Sateré-Mawé, que fruto amazônico nasceu dos olhos de um menino morto e enterrado, e por isso parece um olho?",
    "resposta": "Guaraná",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guaran%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guaran%C3%A1",
        "situacao": "ok",
        "texto": "O guaraná (nome científico: Paullinia cupana), comumente chamado guaranazeiro e uaraná, é um cipó originário da Amazônia. É encontrado no Brasil, Peru, Colômbia, Guiana e Venezuela, sendo cultivado principalmente no município de Maués, estado do Amazonas, e na Bahia. Pertence a família Sapindaceae.\n[…]\nO seu fruto é em forma de cápsula elipsoidal ou esférica, com um a três folhetos, sendo piriforme e indeiscente; possui grande quantidade de cafeína (chamada de guaraína quando encontrada no guaraná) e, devido a suas propriedades estimulantes, é usado na fabricação de xaropes, barras, pós e refrigerantes. Tem casca vermelha e, quando maduro, deixa aparecer a polpa branca e suas sementes, assemelhando-se com olhos.\n[…]\nDurante séculos, tribos amazônicas de etnia Saterê-Maué utilizam o guaraná para tratar diarreia crônica, hipertensão, nevralgia, disenteria e enxaqueca. Além disso, os indígenas também utilizam o material vegetal como antipirético, estimulante, analgésico, antídoto para venenos e para diversos outros fins terapêuticos. Suas sementes costumam ser mastigadas ou então adicionadas a alimentos e bebidas.\n[…]\nDevido à sua ampla gama de propriedades medicinais, o guaraná está atualmente listado na Farmacopeia Brasileira oficial e, dentre as espécies amazônicas, é considerado um dos medicamentos mais promissores da flora brasileira.\n[…]\nPodemos entender a palavra refrigerante como bebida para refrescar, como é apontando por João Alberto Masô no artigo \" O Guaraná\" de 1906 citado anteriormente: \"Emprega-se para ralar o guaraná uma lima grossa ou groza, no Amazonas, porém preferem o osso byvide de pirarucú (lingua do peixe pirarucú) que dá um pó finissimo, impalpavel. Uma colher de chá deste pó num copo de água assucarada, eis ahi um delicioso refrigerante."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Pedro Malasartes",
      "descricao": "Personagem malandro e espertalhão dos contos populares de origem portuguesa, muito difundido no Brasil."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que personagem malandro dos contos populares, vindo de Portugal, vive enganando fazendeiros ricos e poderosos com sua esperteza?",
    "resposta": "Pedro Malasartes",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pedro_Malasartes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pedro_Malasartes",
        "situacao": "ok",
        "texto": "Pedro Malasartes, Malazartes, das Malasartes ou ainda Malasarte e Malazarte é um personagem tradicional da cultura portuguesa e da cultura brasileira.\n[…]\nSegundo Câmara Cascudo, \"Pedro Malasartes é figura tradicional nos contos populares da Península Ibérica, como exemplo de burlão invencível, astucioso, cínico, inesgotável de expedientes e de enganos, sem escrúpulos e sem remorsos.\" A menção mais antiga do personagem é na cantiga 1132 do Cancioneiro da Vaticana, datado do século XIII e XIV:\n[…]\nO personagem também está presente na literatura de cordel, como em Encontro de Cancão de Fogo com Pedro Malasartes, de Minelvino Francisco Silva (1957)\n[…]\nO personagem chegou ao cinema em As Aventuras de Pedro Malasartes, de 1960, com Mazzaropi no papel principal.\n[…]\nPedro Malasartes também foi personagem da série infantojuvenil O Sítio do Pica-Pau Amarelo, interpretado pelo comediante Canarinho.\n[…]\nA Cia. Circunstância, grupo de circo-teatro de Belo Horizonte, lançou em 2013 o espetáculo \"De Mala às Artes — Um espetáculo sobre Pedro Malasartes\", onde interpretam algumas histórias de Pedro Malasartes, com direção de Rodrigo Robleño. Neste mesmo ano, este projeto foi contemplado com o Prêmio Funarte Myriam Muniz, onde puderam excursionar pelo norte do Brasil.\n[…]\nEm 2012, o cordelista Marco Haurélio publicou uma nova versão do conto de fadas A Roupa Nova do Rei de Hans Christian Andersen com Pedro Malasartes e outro personagem recorrente na literatura de cordel, João Grilo, atuando como alfaiates. O cordel teve desenhos do ilustrador e cordelista Klévisson Viana e foi publicado pela editora Tupynanquim de Viana."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Entrudo",
      "descricao": "Festa popular de origem portuguesa, antecessora do carnaval brasileiro, em que se atiravam água, farinha e limões de cheiro."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Antes do carnaval moderno, que folia trazida de Portugal tinha como graça atirar água, farinha e limões de cheiro nas pessoas?",
    "resposta": "Entrudo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Entrudo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Entrudo",
        "situacao": "ok",
        "texto": "Entrudo (do latim intoitum; historicamente designado entroydo e ontroydo (século XIII), entruido (século XIV) e emtrudo (século XV)), é atualmente um feriado opcional em Portugal, e à semelhança do Carnaval, era um antigo folguedo Galaico-Português realizado nos três dias que antecedem a entrada da Quaresma, na qual os foliões arremessavam baldes de água, limões de cheiro, ovos, tangerinas, pastel\n[…]\nNo Reino de Portugal, existiu até 1817, enquanto no Império do Brasil foi reprimido desde 1854, quando deu lugar ao moderno Carnaval.\n[…]\nEntrudo da Galiza e Bierzo\n[…]\n«Entrudo em Lazarim». www.progestur.net\n[…]\n«Carnaval de Podence». www.bragancanet.pt\n[…]\n«Entrudo, Carnaval do Rio de Janeiro no tempo de D. João VI». www.riodejaneiroaqui.com"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cuca",
      "descricao": "Bruxa do folclore brasileiro, de origem ibérica, que pega crianças desobedientes, popularizada pelo Sítio do Picapau Amarelo."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Nas histórias do Sítio do Picapau Amarelo, de Monteiro Lobato, a bruxa Cuca aparece com a forma de qual animal?",
    "resposta": "Jacaré",
    "distratores": [
      "Coruja",
      "Sapo",
      "Serpente"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cuca_(folclore)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cuca_(folclore)",
        "situacao": "inexistente",
        "texto": ""
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
