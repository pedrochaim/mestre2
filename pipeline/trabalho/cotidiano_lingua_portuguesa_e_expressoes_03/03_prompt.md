Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Língua Portuguesa e Expressões** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Angola",
      "descricao": "País da África Austral, antiga colônia portuguesa, com capital em Luanda"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Depois do Brasil, qual país de língua oficial portuguesa tem o maior território?",
    "resposta": "Angola",
    "distratores": [
      "Moçambique",
      "Guiné-Bissau",
      "Cabo Verde"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Angola",
      "https://pt.wikipedia.org/wiki/Moçambique"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Angola",
        "situacao": "ok",
        "texto": "Angola, oficialmente República de Angola, é um país da costa ocidental da África Austral, cujo território tem uma área total de 1 246 700 km², sendo o sétimo maior país de África e o vigésimo segundo do mundo, com uma população estimada em 36,6 milhões de pessoas em 2024. A capital e maior cidade é Luanda, centro económico e político do país.\n[…]\nO conflito armado levou à saída — com destino a Portugal, mas também à África do Sul e ao Brasil — da maior parte dos cerca de 350 000 portugueses que na altura estavam radicados em Angola. Em consequência da política colonial, estes constituíam a maior parte dos quadros do território, o que levou a que a administração pública, a indústria, a agricultura e o comércio caíssem em colapso.\n[…]\nO português é a língua oficial de Angola. Dentre as línguas africanas faladas no país, algumas têm o estatuto de língua nacional. Essas, assim como as outras línguas africanas, são faladas pelas respectivas etnias e têm dialectos correspondentes aos subgrupos étnicos. A língua étnica com mais falantes em Angola é o umbundo, falado pelos ovimbundos na região centro-sul de Angola e em muitos meios urbanos. É língua materna de cerca de um terço dos angolanos.\n[…]\nEmbora as línguas étnicas sejam as habitualmente faladas pela maioria da população, o português é a primeira língua de 40% da população angolana — proporção que se apresenta muito superior na capital do país —, enquanto cerca de 71% dos angolanos afirmam usá-la como primeira ou segunda língua. Seis línguas étnicas têm o estatuto oficial de \"língua nacional\": por ordem de importância numérica são o umbundo, o quimbundo, o quicongo, o chócue, o ganguela e o cuanhama.\n[…]\nÁfrica Ocidental Portuguesa\n[…]\nEleições Gerais em Angola 2012\n[…]\nReconquista de Angola\n[…]\n«Portal de República de Angola»\n[…]\n«Embaixada de Angola no Brasil»\n[…]\n«Embaixada de Angola em Portugal»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moçambique",
        "situacao": "ok",
        "texto": "Moçambique, oficialmente designado como República de Moçambique, é um país localizado no sudeste do continente africano, banhado pelo Oceano Índico a leste e que faz fronteira com a Tanzânia ao norte; Maláui e Zâmbia a noroeste; Zimbábue a oeste e Essuatíni e África do Sul a sudoeste. A capital e maior cidade do país é Maputo, anteriormente chamada de Lourenço Marques, durante o domínio português.\n[…]\nA religião com o maior número de adeptos em Moçambique é o cristianismo (a denominação católica é a que reúne maior número de adeptos), mas há uma presença significativa de seguidores do islamismo. O país é membro da União Africana, da Commonwealth Britânica, da Comunidade dos Países de Língua Portuguesa (CPLP), da União Latina, da Organização da Conferência Islâmica, da Comunidade para o Desenvolvimento da África Austral e da Organização Internacional da Francofonia.\n[…]\nA Frente de Libertação de Moçambique (FRELIMO) sob comando de Eduardo Mondlane deu início a uma campanha de guerrilha, contra o governo português, em setembro de 1964. Juntamente com os outros dois conflitos já iniciados em outras colónias portuguesas de África Ocidental Portuguesa (Angola) e da Guiné Portuguesa, este entrave político tornou-se parte da chamada Guerra Colonial Portuguesa (1961–1974).\n[…]\nO português é a língua oficial e a mais falada do país, usada por pouco mais da metade da população (50,4%). Cerca de 39,7%, principalmente a população africana nativa, usam o português como segunda língua e 12,78% falam-no como primeira língua. A maioria dos moçambicanos que vivem nas áreas urbanas usam o português como principal idioma.\n[…]\nNo mesmo ano, Moçambique tornou-se membro fundador e primeiro presidente da Comunidade de Países de Língua Portuguesa (CPLP) e mantém laços históricos, económicos, políticos e culturais estreitos com outros países lusófonos, como Portugal ou o Brasil.\n[…]\nPortuguês moçambicano"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "São Tomé e Príncipe",
      "descricao": "País insular do Golfo da Guiné, antiga colônia portuguesa"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre os países que têm o português como língua oficial, qual é o menor em área?",
    "resposta": "São Tomé e Príncipe",
    "distratores": [
      "Cabo Verde",
      "Timor-Leste",
      "Guiné-Bissau"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/São_Tomé_e_Príncipe",
      "https://pt.wikipedia.org/wiki/Cabo_Verde"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/São_Tomé_e_Príncipe",
        "situacao": "ok",
        "texto": "São Tomé e Príncipe, oficialmente República Democrática de São Tomé e Príncipe, é um país insular localizado no Golfo da Guiné, na costa equatorial ocidental da África Central. Consiste em duas ilhas principais, as ilhas de São Tomé e Príncipe, que distam cerca de 140 km uma da outra e cerca de 250 e 225 km da costa noroeste do Gabão, respectivamente.\n[…]\nCom uma população de 204 454 habitantes (estimativa de 2018), distribuídos em uma área total de 1 001 km², São Tomé e Príncipe é o segundo menos populoso Estado soberano africano, depois das Seicheles. Seu povo é predominantemente de ascendência africana e mestiça, com a maioria praticando o catolicismo romano. O legado do domínio português também é visível na cultura, nos costumes e na música do país, que fundem influências europeias e africanas.\n[…]\nO território do país faz parte da ecorregião de florestas húmidas de várzea de São Tomé, Príncipe e Annobón. São Tomé e Príncipe possui uma pontuação média no Índice de Integridade da Paisagem Florestal de 6,64, em um total de dez pontos, classificando-o em 68º lugar globalmente entre 172 países.\n[…]\nO português é a língua oficial e de facto nacional de São Tomé e Príncipe, sendo falada por cerca de 98,4% da população do país, uma parte significativa dela como sua língua materna. Variantes reestruturadas de português ou crioulos portugueses também são falados como o forro, o crioulo cabo-verdiano (8,5%), o angolar (6,6%) e o lunguié (1%). O francês (6,8%) e inglês (4,9%) são as línguas estrangeiras ensinadas nas escolas.\n[…]\nO maior parceiro em termos de importações de São Tomé e Príncipe é Portugal, 56% das importações provêm de Portugal. Outros parceiros em termos económicos, são a China, Nigéria, França e Estados Unidos.\n[…]\nImpério Português\n[…]\nPortuguês de São Tomé e Príncipe\n[…]\nPatrimônio Cultural Material e Imaterial de São Tomé e Príncipe"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cabo_Verde",
        "situacao": "ok",
        "texto": "Cabo Verde, oficialmente como República de Cabo Verde, é um país arquipelágico no Oceano Atlântico central, ao largo da costa da África Ocidental. É constituído por dez ilhas vulcânicas com uma área total de cerca de 4.033 quilómetros quadrados. Estas ilhas situam-se entre 600 e 850 quilómetros a oeste de Cabo Verde (ou seja, Dakar), o ponto mais ocidental de África continental, que lhes dá o nome\n[…]\nO povo cabo-verdiano traça sua ancestralidade principalmente a populações da África Ocidental, com contribuições adicionais dos primeiros colonizadores portugueses e de outros grupos que chegaram às ilhas. Existe uma diáspora considerável em todo o mundo, especialmente nos Estados Unidos e em Portugal, que supera em muito o número de habitantes das ilhas. É um Estado-membro da União Africana.\n[…]\nAs diferenças entre as variantes linguísticas nas ilhas têm sido um grande obstáculo à padronização da língua. Alguns defendem o desenvolvimento de dois padrões: um padrão do norte (Barlavento), centrado no crioulo de São Vicente, e um padrão do sul (Sotavento), centrado no crioulo de Santiago. Manuel Veiga, linguista e ministro da cultura de Cabo Verde, é o principal defensor da oficialização e padronização do crioulo.\n[…]\nDevido a séculos de laços coloniais, a segunda maior população de cabo-verdianos vive em Portugal (150 mil), com comunidades consideráveis nas antigas colônias portuguesas de Angola (45 mil) e São Tomé e Príncipe (25 mil). Grandes populações existem em países com semelhanças culturais e linguísticas, como Espanha (65.500), França (25 mil), Senegal (25 mil) e Itália (20.000).\n[…]\nOs principais aeroportos do país são o Aeroporto Internacional Amílcar Cabral, na Ilha do Sal; o Aeroporto Internacional Nelson Mandela, na Ilha de Santiago; o Aeroporto Internacional Aristides Pereira, na Ilha da Boa Vista; e o Aeroporto de São Pedro, na Ilha de São Vicente.\n[…]\nPortuguês de Cabo Verde"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Timor-Leste",
      "descricao": "País do Sudeste Asiático, antiga colônia portuguesa, independente desde 2002"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre todos os países que têm o português como língua oficial, qual fica mais a leste no globo?",
    "resposta": "Timor-Leste",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Timor-Leste"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Timor-Leste",
        "situacao": "ok",
        "texto": "Timor-Leste, oficialmente República Democrática de Timor-Leste (em tétum: Timor Lorosa'e, oficialmente Repúblika Demokrátika Timór-Leste), é um dos países mais jovens do mundo, e ocupa a parte oriental da ilha de Timor, no Sudeste Asiático, além do exclave de Oe-Cusse Ambeno, na costa norte da parte ocidental de Timor, da ilha de Ataúro, a norte, e do ilhéu de Jaco, ao largo da ponta leste da ilha\n[…]\nA língua mais falada em Timor-Leste era o indonésio no tempo da ocupação indonésia, sendo hoje o tétum (mais falado na capital). O tétum e o português formam as duas línguas oficiais do país, enquanto o indonésio e a língua inglesa são consideradas línguas de trabalho pela atual constituição de Timor-Leste.\n[…]\nEm 1999, após um ato de autodeterminação patrocinado pelas Nações Unidas, o governo indonésio deixou o controle do território e Timor-Leste tornou-se o primeiro novo Estado soberano do século XXI, em 20 de maio de 2002. Após a independência, o país tornou-se membro das Nações Unidas, da Comunidade dos Países de Língua Portuguesa e, mais recentemente, da Associação de Nações do Sudeste Asiático. É um dos dois únicos países predominantemente cristãos no sudeste da Ásia, sendo o outro as Filipinas.\n[…]\nDe acordo com a Constituição de Timor-Leste, o tétum e o português têm o estatuto de línguas oficiais. De acordo com parágrafo 3 do artigo 3 da Lei 1/2002, em caso de dúvida na interpretação das leis prevalece o português.\n[…]\nEntre os doadores bilaterais que continuam a contribuir, incluem-se Austrália, Portugal, Alemanha e Japão, e Timor-Leste tem a reputação de utilizar os fundos dos doadores de forma eficaz e transparente. As boas relações com a Austrália e com a Indonésia são um objetivo político do governo, apesar das tensões históricas e mais recentes. Estes países são importantes parceiros económicos e proporcionam a maior parte das ligações de transporte ao país.\n[…]\nIlha de Timor"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Universidade de Coimbra",
      "descricao": "Universidade portuguesa fundada em 1290 pelo rei Dom Dinis, instalada definitivamente em Coimbra"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Fundada em 1290 pelo rei Dom Dinis, em Lisboa, e depois transferida, qual é a universidade mais antiga de Portugal?",
    "resposta": "Universidade de Coimbra",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Universidade_de_Coimbra"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Universidade_de_Coimbra",
        "situacao": "ok",
        "texto": "A Universidade de Coimbra GCSE (UC) é uma universidade pública localizada na cidade de Coimbra, em Portugal. É uma das universidades mais antigas do mundo ainda em operação, sendo a mais antiga e uma das maiores do país. Composta por 3 polos, 8 faculdades e 18 museus, a instituição conta ainda com o Jardim Botânico e o Estádio Universitário de Coimbra em uma cidade com 30 308 alunos em 2025.\n[…]\nA Universidade de Coimbra possui aproximadamente 25 mil estudantes, abrangendo uma das maiores comunidades de estudantes internacionais em Portugal, sendo a sua universidade mais cosmopolita. Além disso, é o membro-criador do chamado Grupo Coimbra, uma rede de universidades europeias cujo objetivo é a colaboração académica entre os elementos do grupo. Em 22 de junho de 2013 foi declarada Património Mundial pela Organização das Nações Unidas para a Educação, a Ciência e a Cultura (UNESCO).\n[…]\nA universidade, inicialmente instalada na zona do atual Largo do Carmo, em Lisboa, foi transferida para Coimbra, para o Paço Real da Alcáçova, em 1308. Voltou em 1338 para Lisboa, onde permaneceu até 1354, ano em que regressou para Coimbra. Ficou nesta cidade até 1377 e voltou de novo para Lisboa neste ano.\n[…]\nPermaneceu em Lisboa até 1537, data em que foi transferida definitivamente para Coimbra, por ordem de D. João III. Sete anos mais tarde todas as suas Faculdades se instalam no histórico Paço Real da Alcáçova. Data de 1597 a aquisição (a Dom Filipe I), pela Universidade de Coimbra, do Paço da Alcáçova, que a partir daí passou a designar-se Paço das Escolas (o centro histórico da Universidade).\n[…]\nÉ igualmente passado um alvará, a 28 de agosto, extinguindo a Mesa da Fazenda da Universidade de Coimbra criando, em sua substituição uma Junta de Administração e Arrecadação com cofre, tesoureiro, contadoria e executória.\n[…]\n«Universidade de Coimbra»\n[…]\nUniversidade de Coimbra — Panorâmica de Alta Resolução"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Língua espanhola",
      "descricao": "Língua românica originada em Castela, oficial na Espanha e em boa parte da América Latina"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre as línguas que nasceram do latim, qual tem mais falantes nativos no mundo?",
    "resposta": "Espanhol",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Línguas_românicas",
      "https://pt.wikipedia.org/wiki/Língua_espanhola"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Línguas_românicas",
        "situacao": "ok",
        "texto": "As línguas românicas, também conhecidas como línguas neolatinas, latinas, ou colectivamente como romance ou romanço, são idiomas que integram o vasto conjunto das línguas indo-europeias que se originaram da evolução do latim, principalmente do latim vulgar, falado pelas classes mais populares do velho Império Romano.\n[…]\nAtualmente, essas línguas são representadas pelos seguintes idiomas mais conhecidos e mais falados no mundo: o português, o castelhano (também conhecido como espanhol), o italiano, o francês e o romeno. Há, também, uma grande quantidade de idiomas usados por grupos minoritários de falantes, como:\n[…]\nnas diferentes regiões da Espanha, onde são falados o catalão (que tem o valenciano como dialeto), o aragonês, o galego, o asturiano e o leonês;\n[…]\nOs impérios ultramarinos estabelecidos por Portugal, Espanha, França, Bélgica e Itália do século XV em diante espalharam as suas respectivas línguas por outros continentes, de tal forma que cerca de 70% de todos os falantes de línguas românicas vivem hoje fora da Europa.\n[…]\nHá 1,2 bilhões de pessoas que falam alguma língua românica no mundo, o que faz esse ramo ter o maior número de falantes da família indo-europeia, à frente do ramo germânico, que possui mais de 730 milhões de falantes.\n[…]\nCastelhano: 20%\n[…]\nO português e o francês possuem a fonética mais distante do latim. Uma das supostas razões pode ser um substrato céltico nestas línguas. O galego, do qual surgiu o português, teria sofrido influência do idioma lusitano, enquanto o francês teria sido influenciado pelo gaulês (além do forte substrato germânico).[carece de fontes]?\n[…]\nJudeu-espanhol:Kada benadam i benadam nase forro i igual en dinyidad i en derechos. Todos son baale razón i konsiensia i deven komportarsen los unos verso los otros kon fraternidad"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_espanhola",
        "situacao": "ok",
        "texto": "Língua espanhola (lengua española) ou castelhana (lengua castellana) é uma idioma românico da família das línguas indo-europeias que evoluiu do latim vulgar falado na Península Ibérica da Europa. Atualmente, é uma língua global com cerca de 500 milhões de falantes nativos, principalmente nas Américas e na Espanha, e cerca de 600 milhões quando se incluem falantes de segunda língua. É a língua ofic\n[…]\nO espanhol faz parte do grupo linguístico ibero-românico, no qual a língua também é conhecida como castelhano. O grupo evoluiu de vários dialetos do latim vulgar na Península Ibérica após o colapso do Império Romano do Ocidente no século V. Os textos latinos mais antigos com vestígios de espanhol vêm do centro-norte da Península Ibérica no século IX e o primeiro uso escrito sistemático da língua ocorreu em Toledo, uma cidade proeminente do Reino de Castela, no século XIII.\n[…]\nComo língua românica, o espanhol é descendente do latim. Cerca de 75% do vocabulário espanhol moderno é de origem latina, incluindo empréstimos latinos do grego antigo. Juntamente com o inglês e o francês, é também uma das línguas estrangeiras mais ensinadas em todo o mundo e está bem representado nas ciências humanas e sociais.\n[…]\nNo ano 2000, a previsão era de que, somente nos Estados Unidos, o número de falantes de espanhol chegasse a 35 milhões e, naquele ano, o espanhol ultrapassou o inglês como a língua com mais falantes nativos no mundo ocidental. Em 2001, os falantes de espanhol eram aproximadamente 400 milhões de pessoas.\n[…]\nAlém disso, na Austrália e na Nova Zelândia, há comunidades de nativos espanhóis, resultantes da emigração de países de língua espanhola (principalmente do Cone Sul), que somam 133 000 falantes. No Havaí, 2,1% da população são falantes nativos de espanhol. Em 2010, havia 120 842 hispânicos, segundo o Censo dos Estados Unidos.\n[…]\nJudeu-espanhol\n[…]\n«Língua espanhola» (em inglês). na BBC Online"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Cabisbaixo",
      "descricao": "Adjetivo do português para quem anda de cabeça baixa, abatido ou envergonhado"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A palavra cabisbaixo, para alguém abatido, junta o adjetivo baixo com qual parte do corpo?",
    "resposta": "Cabeça",
    "fonte": [
      "https://pt.wiktionary.org/wiki/cabisbaixo"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/cabisbaixo",
        "situacao": "ok",
        "texto": "Obtida de \" https://pt.wiktionary.org/w/index.php?title=cabisbaixo&oldid=2613132 \""
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Fidalgo",
      "descricao": "Título da pequena nobreza portuguesa, dado a quem era nobre de nascimento"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A palavra fidalgo, para um nobre de nascimento, surgiu da contração de qual expressão de três palavras?",
    "resposta": "Filho de algo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fidalgo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fidalgo",
        "situacao": "ok",
        "texto": "A palavra fidalgo, usada em Portugal (em Espanha \"hidalgo\"), surge da aglutinação de filho-de-algo. Significa isto que tinha alguma coisa em bens ou em condição nobre. Por sua vez, \"hidalgo\" vem de \"hijodalgo\" quer dizer \"hijo de algo\", ou seja, os seus ascendentes tinham-se distinguido por seus feitos ou pela sua posição, tinham tido “algo”. A palavra foi importada de Castela a partir do século X\n[…]\nA palavra fidalgo, etimologicamente, a aglutinação de filho-de-algo, passa então a designar a camada social não titulada que tinha o estatuto de nobre hereditário, juntamente com os titulares, os senhores de terras, com jurisdição, e os alcaides-mores. Segundo as Ordenações Afonsinas, este algo quer dizer homem de bem, \"segundo linguagem de Espanha\".\n[…]\nPorém é necessário compreender que este fidalgo genérico, não titulado, subentende \"de linhagem\" na coloquialidade. É então que a pouco e pouco a nova expressão fidalgo de linhagem substitui paulatinamente o antigo termo infanção, caído em desuso, categoria herdada por via paterna ou materna, ao contrário da categoria de fidalgo de solar conhecido, que exigia comprovação de nobreza de todos os quatro avós do chefe da linhagem assim reconhecida.\n[…]\nAfonso V, todos os reis criaram categorias formais de fidalgos, inscritos nos livros reais em três categorias diversas na sua importância, fidalgos esses que integravam indiscutivelmente a nobreza hereditária do reino.\n[…]\nA simples prova de ser filho legitimo de pai fidalgo era o bastante para adquirir essa categoria de nobreza. Por isso se chama filhamento ao acto pelo qual se concedia essa distinção a quem não era filho de pai fidalgo. Segundo o autor que a seguir se referencia, filhamento ou foro de fidalgo era a mesma coisa e foi inventado pela política de D. Afonso V para \"com uma folha de papel remunerar grandes serviços sem esgotar o Erário\".\n[…]\nFidalgo cavaleiro da Casa Imperial"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Embora",
      "descricao": "Advérbio e conjunção do português, usado em expressões como ir embora"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Quem diz vou-me embora usa uma palavra que é a contração de qual antiga expressão de votos de boa sorte?",
    "resposta": "Em boa hora",
    "fonte": [
      "https://pt.wiktionary.org/wiki/embora"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/embora",
        "situacao": "ok",
        "texto": "Espanhol : aunque (es) , con todo y eso (es)\n[…]\nTétum : biar (tet) , embora (tet) , maski (tet)\n[…]\nexpressa desejoso que alguém retire-se, deixe-o\n[…]\nPortuguês</span>\"}]]}'>embora , afortunadamente , em boa hora, no momento apropriado\n[…]\nPortuguês</span>\"}]]}'>embora , a pesar de, ainda que\n[…]\nPortuguês</span>\"}]]}'>embora , retire-se\n[…]\nGalego</span>\"}]]}' data-mw-i18n='{\"title\":{\"lang\":\"x-page\",\"key\":\"red-link-title\",\"params\":[\"em boa hora\"]}}'>em boa hora\n[…]\n( Morfologia ) Da contração de Galego</span>\"}]]}'>em Galego</span>\"}]]}'>boa Galego</span>\"}]]}'>hora . Confronte-se com Galego</span>\"}]]}'>noraboa e com o asturiano norabona .\n[…]\n(em galego) “embora” in: Estraviz , Isaac Alonso . Dicionário Electrónico Estraviz [em linha].\n[…]\nObtida de \" https://pt.wiktionary.org/w/index.php?title=embora&oldid=3260692 \""
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Alfabeto",
      "descricao": "Conjunto ordenado das letras usadas para escrever uma língua"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A palavra alfabeto junta os nomes das duas primeiras letras de qual alfabeto antigo?",
    "resposta": "Grego",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Alfabeto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto",
        "situacao": "ok",
        "texto": "Alfabeto ou Abecedário é uma forma de escrita de signos e significados classificada como \"segmental\", pois possui grafemas que representam fonemas (unidade básica de som) de uma língua, podendo ser classificada também como uma escrita fonética, pois procura representar os fonemas por um determinado signo.\n[…]\nA palavra é de origem grega (alphabetos), através do latim (alphabetum), constituída pelas duas primeiras letras do alfabeto grego (alfa e beta, correspondentes às nossas letras A e B, respectivamente), e significa um conjunto de letras mas não são usadas para escrever.\n[…]\nEm português, a etimologia da palavra \"alfabeto\" está muito clara, procedendo do grego \"alfa+beta\". Porém, o termo ab ou ib foi usado também pelos hebreus para denominar a divindade máxima da religião monoteísta, Deus. Segundo esta etimologia  ab são as duas primeiras letras do alfabeto hebraico e grego, respectivamente: a = aleph e alpha ou no hebraico pai; e b = bet e beta ou no hebraico útero ou casa do pão e é uma palavra feminina.\n[…]\nDe acordo com a tradição, o alfabeto fenício foi introduzido nas cidades-estado gregas por Cadmo, quando visitou a Grécia com sua frota de fenícios, e ensinou esta arte a um povo que ainda era bárbaro. Outras tradições atribuem o alfabeto grego a Cécrope de Atenas, Lino de Tebas, ou mesmo Palamedes de Argos, quando retornou da Guerra de Troia, que desenhou as formas de dezesseis letras. Simonides, mais tarde, teria introduzido as outras letras.\n[…]\nO alfabeto latino, adotado em boa parte da Europa, teve como origem o alfabeto etrusco que, por sua vez, teve sua origem no alfabeto grego. Os etruscos aprenderam o alfabeto grego de Demarato de Corinto e os arborígenes do árcade Evandro. Assim, as letras do alfabeto latino tem a mesma forma das letras do alfabeto grego mais antigo."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Tupinismos",
      "descricao": "Palavras do português herdadas da língua tupi, sobretudo no Brasil"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Qual destas palavras do português brasileiro vem do tupi?",
    "resposta": "Pipoca",
    "distratores": [
      "Moleque",
      "Alface",
      "Garçom"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pipoca",
      "https://pt.wikipedia.org/wiki/Língua_tupi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pipoca",
        "situacao": "ok",
        "texto": "Pipoca ou popoca (no Pará também chamada pororoca) é um prato feito a partir de uma variedade especial de milho, o milho-pipoca (Zea mays everta), que estoura quando aquecido. Ao se aquecer os grãos desse milho de maneira rápida, a sua humidade interna é convertida em vapor. Num determinado ponto, a pressão estoura a casca externa, transformando a parte interna numa massa pouco consistente de amid\n[…]\n\"Pipoca\" originou-se do termo tupi pipoka, \"pele estourada\", formado pela junção de pira (pele), pok (estourar) e a (sufixo substantivador).\n[…]\nSabe-se que, inicialmente os indígenas preparavam a pipoca com a espiga inteira sobre o fogo, depois passaram a colocar só os grãos sobre as brasas - até inventarem um método mais sofisticado: cozinhar o milho numa panela de barro com areia quente.\n[…]\nDurante a Grande Depressão, a pipoca era relativamente barata e tornou-se popular. Assim, o negócio da pipoca prosperou e tornou-se numa fonte de renda para alguns agricultores em dificuldades.\n[…]\nApós a Segunda Guerra Mundial, com a popularização da TV, houve uma pequena queda no consumo, porque os americanos abandonaram as salas de cinema para ficar em casa. Mas logo criou-se o hábito de comer pipoca em frente à televisão, o que voltou a aumentar a procura da pipoca significativamente.\n[…]\nEm 1981, a gigante americana General Mills, registou a primeira patente de pipocas de micro-ondas. O que foi responsável pelo crescimento assustador do seu consumo. Mesmo sendo considerado um alimento que pode apresentar certos riscos de saúde, o consumo de pipocas, após esta invenção, subiu consideravelmente no ano seguinte.\n[…]\nO Dia da Pipoca no Brasil é comemorado no dia 11 de março. Já no Estados Unidos, a data escolhida pelo Popcorn Board é o dia 19 de janeiro. A pipoca é considerada o principal lanche e alimento símbolo do estado americano do Ilinóis, desde o ano de 2003."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_tupi",
        "situacao": "ok",
        "texto": "Língua tupi, ou tupi antigo, foi a língua falada pelos povos tupis e por grande parte dos colonizadores que povoavam o litoral do Brasil nos séculos XVI e XVII. Considera-se a língua indígena \"clássica\" do Brasil e a que teve mais importância na \"construção espiritual e cultural\" do país.\n[…]\nEntre as línguas indígenas, o tupi foi a que mais legou termos ao português brasileiro, entre os quais, é possível citar: caatinga, caju, mingau, pereba e pipoca. Entre os topônimos, temos Indaiatuba, Itaquaquecetuba, Jacareí, Sergipe, Pindamonhangaba e muitos outros. Os tupinismos são particularmente numerosos em se tratando de animais e plantas, como pindoba, piranha, arara, maracujá, pitanga, jaguatirica, tamanduá.\n[…]\nGeralmente, os nomes em português brasileiro que tem origem no tupi são descrições das coisas a que se referem, envolvendo uma explicação inteira. Cada palavra pode ser uma verdadeira frase. Decifrar o significado das palavras requer, muitas vezes, uma visita ao local a que se refere o termo. Um exemplo disso é o topônimo Paranapiacaba = paranã + epîak + -(s)aba, \"mar\" + \"ver\" + \"lugar\" = \"lugar de onde se vê o mar\", que se refere a um ponto da serra do Mar onde se pode avistar o mar.\n[…]\nQuando a composição contém um adjetivo, ela será uma composição atributiva. Nelas, não ocorre a inversão dos termos: eles aparecem na ordem em que apareceriam em português, com a diferença de que em tupi eles vêm justapostos (são escritos juntos) e são considerados uma palavra só; isto é, obedecem às mesmas regras que qualquer substantivo. (Leia mais em: Topônimos de origem tupi no Brasil)[carece de fontes]?\n[…]\nCompêndio da doutrina cristã na língua portuguesa e brasílica, de João Filipe Bettendorff (1687)\n[…]\nTronco tupi\n[…]\nTopônimos de origem tupi no Brasil\n[…]\nLínguas da família tupi\n[…]\nVermelho Brasil"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "E comercial",
      "descricao": "Símbolo tipográfico que representa a conjunção e, muito usado em nomes de empresas"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O símbolo chamado e comercial, usado em nomes de empresas, surgiu da fusão de quais duas letras da palavra latina para e?",
    "resposta": "E e T",
    "fonte": [
      "https://pt.wikipedia.org/wiki/E_comercial",
      "https://en.wikipedia.org/wiki/Ampersand"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/E_comercial",
        "situacao": "ok",
        "texto": "&, denominado ampersand em inglês ou esperluette em francês, também conhecido como e comercial em português, é um logograma que representa a conjunção \"e\". Originou-se como uma ligadura das letras et — latim para \"e\".\n[…]\nAmpersand: o sinal & é uma corruptela de \"and per se = and\"'. O sinal deriva da ligadura usada pelos escribas para o latim et em certas versões itálicas, as letras 'e' e 't' são claramente distinguíveis.\n[…]\nO moderno e comercial do tipo itálico é uma espécie de ligadura \"et\" que remonta às escritas cursivas desenvolvidas durante o Renascimento. Após o advento da impressão na Europa em 1455, os impressores fizeram uso extensivo dos ampersands itálico e romano. Como as raízes do e comercial remontam aos tempos romanos, muitas línguas que usam uma variação do alfabeto latino fazem uso dele.\n[…]\nO e comercial muitas vezes aparecia como um caractere no final do alfabeto latino, como por exemplo na lista de letras de Birferdo de 1011. Da mesma forma, até o século XIX o logograma \"&\" era considerado como a 27.ª letra do alfabeto inglês, sendo ensinado às crianças em processo de alfabetização nos EUA e em outros países de língua inglesa.\n[…]\nO e comercial não deve ser confundido com o \"et\" tironiano ⁊, que tem o mesmo significado, mas que na aparência se assemelha ao numeral 7. Ambos os símbolos têm suas raízes na antiguidade clássica, e ambos os sinais foram usados ao longo da Idade Média como uma representação da palavra latina et (\"e\"). No entanto, enquanto o e comercial era na origem uma ligadura comum na escrita cotidiana, o tironiano et fazia parte de uma taquigrafia estenográfica altamente especializada.\n[…]\nFont of 52 ampersands, designed by Frederic Goudy"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ampersand",
        "situacao": "ok",
        "texto": "The ampersand, also known as the and sign, is the logogram &, representing the conjunction \"and\". It originated as a ligature of the word et (Latin for 'and').\n[…]\nU+1F675 🙵 SWASH AMPERSAND ORNAMENT\n[…]\nAmpersand is the name of a reactive programming language, which uses relation algebra to specify information systems.\n[…]\nSome Unix shells use the ampersand as a metacharacter:\n[…]\nSome Unix shells, like the POSIX standard sh shell, use an ampersand to execute a process in the background and to duplicate file descriptors.\n[…]\nIn Bash, the ampersand can separate words, control the command history, duplicate file descriptors, perform logical operations, control jobs, and participate in regular expressions.\n[…]\nThe generic URL (Uniform Resource Locator) syntax allows for a query string to be appended to a file name in a web address so that additional information can be passed to a script; the question mark, or query mark, ?, is used to indicate the start of a query string. A query string is usually made up of a number of different name–value pairs, each separated by the ampersand symbol, &. For example, http://www.example.org/list.php?id=1&order=ascending.\n[…]\nA \"real\" ampersand must be replaced by %26 to avoid interpretation as this syntax.\n[…]\nAmpersand curve – Type of quartic plane curve\n[…]\n\"The History of 'Ampersand'\". Merriam-Webster. Retrieved 27 July 2022.\n[…]\nThe Hot Word at Dictionary.com: How ampersand came from a misunderstanding. Archived 20 October 2013 at the Wayback Machine.\n[…]\n\"Ask the Editor: Ampersand\", video at Merriam-Webster.com (2:01). Retrieved 2013-10-18. Archived 19 October 2013 at the Wayback Machine.\n[…]\nFont of 52 ampersands, designed by Frederic Goudy"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Sobrenomes patronímicos portugueses",
      "descricao": "Sobrenomes formados a partir do nome do pai, como Fernandes, Rodrigues e Gonçalves"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em sobrenomes como Fernandes, Rodrigues e Gonçalves, o que a terminação es indicava originalmente?",
    "resposta": "Filho de",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Patronímico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Patronímico",
        "situacao": "ok",
        "texto": "O patronímico (do grego πατρωνυμικός, πατήρ \"pai\" e ὄνομα, \"nome\") é um nome ou apelido de família, ou seja é um sobrenome cuja origem encontra-se no nome do pai ou de um ascendente masculino.\n[…]\nDesta forma se explicam os inúmeros sobrenomes cuja origem imediata e evidente é um prenome, como \"Anes\" ou \"Eanes\" (filho de João), \"Fernandes\" (filho de Fernão/Fernando), \"Dias\" (filho de Diego/Diogo), \"Rodrigues\" (filho de Rui/Rodrigo), \"Gonçalves\" (filho de Gonçalo), etc.[carece de fontes]?\n[…]\nNo \"Bel Paese\", os sobrenomes patronímicos têm a facilidade de assumir várias formas, principalmente de acordo com a região da Itália em que este sobrenome é originado. Uma das mais comuns é o sufixo \"-i\". Como no caso de sobrenomes como: Lorenzi (filho de Lorenzo), Franceschi (filho de Francesco), Giuliani (filho de Giuliano) etc. Tomemos como exemplo o nome Sebastiano Paoli. Paoli é filho de Paolo. Ou então Guerino Stefani. Stefani é filho de Stefano. Outro exemplo pode ser este: Enrico Nicoli.\n[…]\nNicoli é filho de Nicola.\n[…]\nNa Letônia e Estônia (em alguns casos) mas, principalmente, na Lituânia é comum o uso do sobrenome terminado em \"-vičius\", variante do \"-wicz\" da vizinha Polônia. Tomemos por exemplo: Antanas Sleževičius. Sleževičius, filho de Sleže.\n[…]\nNa Croácia, Sérvia, Eslovênia e Bósnia e Herzegovina, o equivalente ao patronímico polaco -wicz grafa-se -vić (ou -вић no alfabeto cirílico). Milošević, por exemplo, significa \"filho de Miloš\". Também é usado o \"-ić\". Milanić, por exemplo, é \"filho de Milan\". Muitos sobrenomes italianos terminados em \"-ici\" ou \"-vici\" ou ainda \"-ovi\" vêm do fato de que a antiga Iugoslávia fez divisa com a república mediterrânea.\n[…]\nPortuguese Names 1350-1450"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Topônimos de origem tupi",
      "descricao": "Nomes de lugares do Brasil formados com palavras da língua tupi"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em nomes de origem tupi como Itaipu, Itaquera e Itatiaia, o que significa o pedaço ita?",
    "resposta": "Pedra",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Usina_Hidrelétrica_de_Itaipu",
      "https://pt.wikipedia.org/wiki/Itatiaia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Usina_Hidrelétrica_de_Itaipu",
        "situacao": "ok",
        "texto": "Usina Hidrelétrica de Itaipu (em castelhano:  Itaipú, em guarani:  Itaipu) é uma hidrelétrica binacional localizada no Rio Paraná, na fronteira entre o Brasil e o Paraguai. A barragem foi construída pelos dois países entre 1975 e 1982. O nome Itaipu foi tirado de uma ilha que existia perto do local de construção. Na língua tupi, o termo significa \"pedra na qual a água faz barulho\", através da junç\n[…]\nItaipu é uma palavra de origem tupi-guarani que significa \"pedra que canta\", através da junção de itá = pedra e ipo'ú = cantora, ou então \"pedra na qual a água faz barulho\", através da junção de itá (pedra), y (água, rio), e pu (barulho). Era o nome da pequena ilha que havia no atual local da usina, antes da obra.\n[…]\nAs primeiras pesquisas de campo para a elaboração do projeto foram feitas em pequenas balsas por técnicos brasileiros e paraguaios. O local escolhido para a construção foi um ponto do rio conhecido como Itaipu, que em tupi quer dizer \"a pedra que canta\". As dimensões do projeto também foram traçadas desde o início: a área da hidrelétrica vai de Foz do Iguaçu, no Brasil, e Ciudad del Este, no sul do Paraguai, até Guaíra e Salto del Guairá, no norte deste país.\n[…]\nApesar de gerar menos do que em anos de recorde, Itaipu atingiu em 2014 o melhor índice de eficiência operacional dos 32 anos, com 99,3%. Na prática, isso significa que a operação da usina, que tem o objetivo de maximizar a utilização da água (energia disponível), atendendo as demandas dos sistemas elétricos brasileiro e paraguaio, teve quase zero de perdas. Ou seja, da água que poderia ser turbinada, quase nada foi vertido em 2014.\n[…]\nO escoamento da energia de Itaipu para o Paraguai é feito nas tensões de 500 kV e 220 kV a partir da subestação da Margem Direita para as subestações de Acaray, Carayao e Villa Hayes.\n[…]\nTratado de Itaipu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Itatiaia",
        "situacao": "ok",
        "texto": "Itatiaia é um município brasileiro do estado do Rio de Janeiro. Integra a microrregião do Vale do Paraíba do Sul. Faz parte da região imediata de Resende, está localizado às margens da Rodovia Dutra e é cercado pela Serra da Mantiqueira.\n[…]\nAbriga a área de conservação do Parque Nacional do Itatiaia, considerado o primeiro parque nacional do Brasil, onde há o Pico das Agulhas Negras, ponto culminante do estado do Rio de Janeiro, com seus 2.791 metros de altitude.\n[…]\n\"Itatiaia\" é um termo tupi que significa \"pedra pontuda\", por meio da junção dos termos itá (\"pedra\") e atîaîa (\"pontudo\").\n[…]\nEm 1985 nevou no Parque Nacional de Itatiaia.\n[…]\nParque Nacional de Itatiaia"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Dias da semana em português",
      "descricao": "Os nomes dos dias da semana na língua portuguesa, numerados como feiras em vez de dedicados a deuses"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Além do domingo, qual dia da semana em português não leva a palavra feira no nome?",
    "resposta": "Sábado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week",
        "situacao": "ok",
        "texto": "In a vast number of languages, the names given to the seven days of the week are derived from the names of the seven classical planets which were in turn named after contemporary Hellenistic deities. This system was introduced by the Sumerians and later adopted by the Babylonians from whom the Roman Empire adopted the system during late antiquity. In some other languages, the days are named after \n[…]\nExcept for in Portuguese and Mirandese, the Romance languages preserved the Latin names, except for the names of Sunday, which was replaced by [dies] Dominicus (Dominica), that is, \"the Lord's Day\", and of Saturday, which was named for the Jewish Sabbath. Mirandese and Portuguese use numbered weekdays, but retain sábado and demingo/domingo for weekends. Meanwhile, Galician occasionally uses them alongside the traditional Latin-derived names, albeit to a lesser extent (see below).\n[…]\nSaint Martin of Dumio (c. 520–580), archbishop of Braga, decided not to call days by pagan gods and to use ecclesiastic terminology to designate them. While the custom of numbering the days of the week was mostly prevalent in the Eastern Church, Portuguese and Mirandese, due to Martin's influence, are the only Romance languages in which the names of the days come from numbers rather than planetary names."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Dias da semana em português",
      "descricao": "Os nomes dos dias da semana na língua portuguesa, numerados como feiras em vez de dedicados a deuses"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em vez de homenagear deuses pagãos, os dias da semana em português são numerados. Que bispo de Braga, do século seis, é associado a essa mudança?",
    "resposta": "São Martinho de Dume",
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week",
      "https://pt.wikipedia.org/wiki/Martinho_de_Dume"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week",
        "situacao": "ok",
        "texto": "In a vast number of languages, the names given to the seven days of the week are derived from the names of the seven classical planets which were in turn named after contemporary Hellenistic deities. This system was introduced by the Sumerians and later adopted by the Babylonians from whom the Roman Empire adopted the system during late antiquity. In some other languages, the days are named after \n[…]\nSaturday: named after the Roman god Saturn associated with the Titan Cronus, father of Zeus and many Olympians. Its original Anglo-Saxon rendering was Sæturnesdæg (pronounced [ˈsæturnezdæj]). In Latin, it was diēs Sāturnī, \"Day of Saturn\". The Nordic laugardagur, leygardagur, laurdag, etc. deviate significantly as they have no reference to either the Norse or the Roman pantheon; they derive from Old Nordic laugardagr, literally \"washing-day\".\n[…]\nIn Slavic languages, some of the names correspond to numerals after Sunday: compare Russian vtornik (вторник) \"Tuesday\" and vtoroj (второй) \"the second\", chetverg (четверг) \"Thursday\" and chetvjortyj (четвёртый) \"the fourth\", pyatnitsa (пятница) \"Friday\" and pyatyj (пятый) \"the fifth\"; see also the notes regarding irregularities.\n[…]\nSaint Martin of Dumio (c. 520–580), archbishop of Braga, decided not to call days by pagan gods and to use ecclesiastic terminology to designate them. While the custom of numbering the days of the week was mostly prevalent in the Eastern Church, Portuguese and Mirandese, due to Martin's influence, are the only Romance languages in which the names of the days come from numbers rather than planetary names."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Martinho_de_Dume",
        "situacao": "ok",
        "texto": "Martinho de Braga ou Martinho de Dume (Panónia, c. 510/5 – Braga, 579/80), foi um bispo de Braga e de Dume considerado santo pela Igreja Católica e pela Igreja Ortodoxa. É conhecido como o \"Apóstolo dos Suevos\", por ser considerado o maior responsável pela sua conversão do arianismo ao catolicismo. Também é conhecido por nominar os dias da semana em língua galego-portuguesa.\n[…]\nMartinho nasceu na Panónia (que em grande medida fica na actual Hungria), no século VI.\n[…]\nAo seu homónimo viria também a dedicar o poema Versus Martini Dumiensis Episcopi in Basilica.\n[…]\nMartinho de Dume é também uma figura de capital importância para a história da cultura e língua portuguesas; de facto, considerando indigno de bons cristãos que se continuasse a chamar os dias da semana pelos nomes latinos pagãos de Lunae dies, Martis dies, Mercurii dies, Jovis dies, Veneris dies, Saturni dies e Solis dies, foi o primeiro a usar a terminologia eclesiástica para os designar (Feria secunda, Feria tertia, Feria quarta, Feria quinta, Feria sexta, Sabbatum, Dominica Dies), de onde derivam os modernos dias em língua portuguesa e que perdura ainda em regiões galego-falantes (segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira, sábado e domingo).\n[…]\nMorreu no dia 20 de março de 579 e foi sepultado na catedral de Dúmio. Para si, compôs o seguinte epitáfio, com menção a S. Martinho de Tours:\n[…]\nCOSTA, Avelino de Jesus - S. Martinho de Dume, (XIV Centenário da sua chegada à Península). Braga, Ed. Cenáculo, 1950.\n[…]\nSILVA, Lúcio Craveiro da - Estudos de cultura portuguesa, Braga, Centro de Estudos Humanísticos da Universidade do Minho, 2002 (biografias São Martinho de Dume, D. Diogo de Sousa, Francisco Sanches, Cassiano Abranches, Bacelar e Oliveira e Júlio Fragata)\n[…]\nSOARES, Luís Ribeiro - A linhagem cultural de S. Martinho de Dume, Lisboa, Imprensa Nacional – Casa da Moeda, 1997."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Cidadão (palavra)",
      "descricao": "Substantivo do português terminado em ão, de plural frequentemente errado"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Pão vira pães e alemão vira alemães. E qual é o plural correto de cidadão?",
    "resposta": "Cidadãos",
    "fonte": [
      "https://pt.wiktionary.org/wiki/cidadão"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/cidadão",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Dialeto mineiro",
      "descricao": "Falar típico de Minas Gerais, conhecido popularmente como mineirês"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No falar de Minas Gerais, a palavra trem não se refere só ao transporte. O que ela costuma designar?",
    "resposta": "Qualquer coisa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dialeto_mineiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dialeto_mineiro",
        "situacao": "ok",
        "texto": "O mineiro ou montanhês é o dialeto do português brasileiro falado nas regiões central, leste e sudeste do estado de Minas Gerais.\n[…]\nO dialeto mineiro ocupa as regiões central, leste e sudeste do estado de Minas Gerais. Notavelmente inclui a fala da capital, Belo Horizonte, do Vale do Aço e das cidades históricas: Ouro Preto (capital de 1720 a 1897), Mariana (primeiro povoado significativo), Santa Bárbara, Sabará, Diamantina, Tiradentes, São João del-Rei, Caeté, Congonhas, Serro. É o dialeto com mais falantes no estado.\n[…]\nNo século XVIII, a região central de Minas Gerais foi afluenciada por lusitanos vindos do Minho e desenvolveu um falar exclusivo do estado. O dialeto mineiro apareceu no século XIX, após a decadência da mineração de ouro, que era transportado por um conjunto de estradas chamado Estrada Real.\n[…]\nO sul mineiro e a região do Triângulo Mineiro parecem falar uma mescla entre o dialeto paulista/caipira (com o \"R\" retroflexo) e o dialeto mineiro.\n[…]\nEsse falar parece estar em retração em zonas de contato com o falar mineiro.\n[…]\nO dialeto mineiro deve ser diferenciado de outros dois dialetos falados no estado mas surgidos em outras unidades da federação: o dialeto caipira, que cobre áreas do interior de São Paulo, interior do Paraná, sul, sudoeste e Triângulo de Minas Gerais, sul de Goiás, e leste de Mato Grosso do Sul; e o dialeto baiano, que cobre o norte de Minas Gerais e a maior parte do estado da Bahia.\n[…]\nAs regiões do triângulo e do sul do estado mineiro falam um dialeto que mescla os dialetos mineiro e caipira, utilizando \"R\" retroflexo e mantendo ritmo típico do montanhês."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Cabo Verde",
      "descricao": "País insular africano no Oceano Atlântico, antiga colônia portuguesa"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Cabo Verde o português é a língua oficial, mas qual é a língua materna da maioria da população?",
    "resposta": "Crioulo cabo-verdiano",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Crioulo_cabo-verdiano"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Crioulo_cabo-verdiano",
        "situacao": "ok",
        "texto": "O crioulo cabo-verdiano ou língua cabo-verdiana é uma língua originária do Arquipélago de Cabo Verde. É uma língua crioula, de base lexical portuguesa. É a língua materna de quase todos os cabo-verdianos, e é ainda usada como segunda língua por descendentes de cabo-verdianos em outras partes do mundo.\n[…]\nO crioulo cabo-verdiano reveste-se de particular importância para o estudo da crioulística pelo facto de se tratar de o crioulo (ainda falado) mais antigo, por ser o crioulo de base portuguesa com o maior número de falantes nativos, por ser o crioulo de base portuguesa mais estudado, e por ser um dos poucos crioulos em vias de se tornar uma língua oficial.\n[…]\nExistem presentemente três teorias acerca da formação do crioulo cabo-verdiano. A teoria eurogenética defende que o crioulo foi formado pelos colonizadores portugueses, numa simplificação da língua portuguesa de modo a torná-la acessível aos escravos africanos. É o ponto de vista de alguns autores como Prudent, Waldman, Chaudesenson, Lopes da Silva.\n[…]\nApesar do crioulo ser a língua materna de quase toda a população de Cabo Verde, o português ainda é a única língua oficial. Entretanto há atualmente um movimento para tornar a língua oficial no país. Como a língua portuguesa é utilizada na vida quotidiana (na escola, pela administração pública, em actos oficiais, etc.) o português e o crioulo vivem num estado de diglossia.\n[…]\nO vocabulário do crioulo cabo-verdiano vem em grande parte do português. Embora as diversas fontes não estejam de acordo, os números oscilam entre 90 a 95 % de palavras originárias do português. O restante provém de diversas línguas da África Ocidental (mandinga, uolofe, fula, balanta, manjaco, temne, etc.), e o vocabulário proveniente de outras línguas é diminuto (inglês, francês, latim, etc.).\n[…]\n«Língua Crioula»"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Til",
      "descricao": "Sinal gráfico ondulado usado sobre as vogais a e o no português"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em palavras como mãe, pão e limões, que característica do som da vogal o til indica?",
    "resposta": "Nasalização",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Til"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Til",
        "situacao": "ok",
        "texto": "O til ou tilde (~; plural tis, tiles ou tildes) é um sinal diacrítico que serve para nasalar/ nasalizar as vogais. Em português, utiliza-se sobre o a (ex: melão) e o o (ex: melões) e muito raramente no português arcaico (galego-português) sobre outras vogais também, por exemplo nas palavras mũito, ruĩ (ou seja ruim) e ẽarcar, ẽarcado e desẽalmado. Estas últimas ainda surgem em alguns dicionários p\n[…]\nHistoricamente, o til era uma abreviatura da letra n ou m em posição de travamento silábico, escrito por cima da linha. Em latim, por exemplo, \"Cũ ejusdẽ [...] diligẽtissime\" (cum eiusdem [...] diligentissime). Em português, essa indicação passou a designar um sinal de nasalização. A referência mais antiga à definição do til é do século XVI na Gramática de João de Barros.\n[…]\nEm português, o til põe-se sobre as letras a e o para indicar vogal nasal, só muito excepcionalmente ao u, como em Piūi e seu gentílico piũiense.\n[…]\nEm galego-português, o til era usado em hiatos de uma vogal nasal seguida de outra vogal.\n[…]\nE em abreviaturas de consoante que indica nasalização. Por exemplo: cõ, abreviatura de con (com).\n[…]\nVogal nasal"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Palíndromo",
      "descricao": "Palavra ou frase que se lê igual de trás para frente"
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Como se chama a frase que pode ser lida igualmente de trás para frente, como socorram-me, subi no ônibus em Marrocos?",
    "resposta": "Palíndromo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Palíndromo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Palíndromo",
        "situacao": "ok",
        "texto": "Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para diante. Por extensão, palíndromo é qualquer série de elementos com simetria linear, ou seja, que apresenta a mesma sequência de unidades nos dois sentidos.\n[…]\nA palavra \"palíndromo\" vem do grego palin (πάλιν, \"para trás, novamente\") + dromos (δρόμος, \"caminho, rua\") - que corre em sentido inverso. Mas o termo foi cunhado em inglês (palindrome), no século XVII, e os primeiros a utilizá-lo foram os escritores Henry Peacham e Ben Jonson.\n[…]\nMas a forma mais conhecida de palíndromo é a frase simétrica, considerando como unidade a letra, e desconsiderando acentos, diacríticos (til, cedilha), sinais de pontuação e espaços entre as palavras. Nesta acepção, o palíndromo se tornou um popular jogo de palavras, um quebra-cabeças e até uma forma de expressão.\n[…]\nExpliciti — trazem sempre uma mensagem direta, clara e inteligível, como \"Socorram-me, subi no ônibus em Marrocos” (palíndromo de autoria anônima, provavelmente o mais conhecido em língua portuguesa).\n[…]\nEscrever literatura em palíndromos é um exemplo de escrita constrangida.\n[…]\nUma data é considerada palíndroma quando sua sequência de dígitos é simétrica, desconsiderados os espaços e sinais separadores. Ainda assim, é preciso levar a conta o sistema de notação utilizado.\n[…]\nJá numa notação simplificada, que utilize apenas dois dígitos para o ano e um para os meses até setembro, a quantidade de datas palíndromas aumenta muito. Em 2021, por exemplo, os dias 12, de janeiro a setembro, seriam palíndromos: 12/1/21, 12/2/21, 12/3/21, etc.\n[…]\nEm genética molecular, existem estudos sobre sequências de DNA palindrômicas, inclusive sobre a possibilidade de elas aumentarem a tendência a determinadas doenças."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Cedilha",
      "descricao": "Sinal gráfico colocado sob a letra c, formando o ç"
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que letra do português nunca começa uma palavra e nunca aparece antes de e ou i?",
    "resposta": "Cê-cedilha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cedilha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cedilha",
        "situacao": "ok",
        "texto": "Cedilha (em castelhano:  cedilla, ou em francês:  cédille, pronunciada(o) [sedijə]) é um símbolo ( ¸ ) adicionado sob certas letras como um sinal diacrítico para modificar sua pronúncia. Em catalão, francês e português, é usado apenas sob o c (formando ç), e a letra inteira é chamada, respectivamente, c trencada (em português:  c quebrado), c cédille, e c cedilhado (ou cê-cedilha). É usado para ma\n[…]\nA cauda originou-se na Espanha como a metade inferior de um z cursivo em miniatura. A palavra \"cedilla\" é o diminutivo do nome espanhol antigo para esta letra, ceda (zeta). O espanhol moderno e o galego isolacionista não usam mais esse diacrítico (além do Barça, apelido do time de futebol do Barcelona), embora seja usado no galego reintegracionista, português, catalão, occitano e francês. Uma ortografia obsoleta de cedilla é cerilla.\n[…]\nO primeiro uso em inglês citado pelo Oxford English Dictionary é um dicionário e gramática de espanhol-inglês de 1599. A Cyclopædia de Chambers é citada para a variante de impressão comercial ceceril (cê-cedilha) em uso em 1738.\n[…]\nCom o advento do modernismo, a natureza caligráfica da cedilha foi considerada um pouco chocante em fontes sem serifa, e alguns designers substituíram por um design de vírgula, que poderia ser mais ousado e mais compatível com o estilo do texto. Isso reduz a distinção visual entre a cedilha e a vírgula diacrítica.\n[…]\n«ScriptSource—Posicionando a cedilha tradicional»"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Língua portuguesa",
      "descricao": "Língua românica originada no noroeste da Península Ibérica, oficial em países de quatro continentes"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Assim como o inglês é a língua de Shakespeare, o português é apelidado de língua de qual poeta do século dezesseis?",
    "resposta": "Luís de Camões",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Língua_portuguesa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_portuguesa",
        "situacao": "ok",
        "texto": "Língua portuguesa, também designada português, é uma língua indo-europeia românica flexiva ocidental originada no galego-português falado no Reino da Galiza e no norte de Portugal. Com a criação do Reino de Portugal em 1139 e a expansão para o sul na sequência da Reconquista, deu-se a difusão da língua pelas terras conquistadas e, mais tarde, com as descobertas portuguesas, para o Brasil, África e\n[…]\nO português também é conhecido como \"a língua de Camões\" (em homenagem a uma das mais conhecidas figuras literárias de Portugal, Luís Vaz de Camões, autor de Os Lusíadas) e \"a última flor do Lácio\" (expressão usada no soneto Língua Portuguesa, do escritor brasileiro Olavo Bilac). Miguel de Cervantes, o célebre autor espanhol, considerava o idioma \"doce e agradável\".\n[…]\nPoderá acrescentar-se a esse número a imensa diáspora de cidadãos de nações lusófonas espalhada pelo mundo, estimando-se que ascenda aos 10 milhões (4,5 milhões de portugueses, 3 milhões de brasileiros, meio milhão de cabo-verdianos, etc.) mas sobre a qual é difícil obter números reais oficiais, incluindo-se nisso a obtenção de dados porcentuais dessa diáspora que fala efetivamente a língua de Camões, uma vez que uma porção significativa será de cidadãos de países lusófonos nascidos fora de território lusófono descendentes de imigrantes, os quais não necessariamente falam o português.\n[…]\nPrevê-se que a população lusófona atinja 318 milhões de habitantes em 2050, sendo 83 milhões só em África, o que manterá a presença do português entre os cinco idiomas mais falados de forma nativa em todo o mundo. Já para o fim do século 21, de acordo o Instituto Camões, a previsão é para que haja mais de 500 milhões de lusófonos.\n[…]\nExcerto do épico nacional português Os Lusíadas, de Luís de Camões (I, 33)\n[…]\n«Instituto Camões»\n[…]\n«Museu Virtual sobre a Língua Portuguesa»\n[…]\n«As periodizações: Histórias da língua portuguesa»"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Guri",
      "descricao": "Palavra usada sobretudo no Rio Grande do Sul para criança do sexo masculino"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No falar gaúcho, quem é chamado de guri?",
    "resposta": "Menino",
    "fonte": [
      "https://pt.wiktionary.org/wiki/guri"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/guri",
        "situacao": "ok",
        "texto": "</span>boilerplate seealso\"}]],\"parts\":[{\"template\":{\"target\":{\"wt\":\"confundir\",\"href\":\"./Predefinição:confundir\"},\"params\":{\"1\":{\"wt\":\"Guri\"}},\"i\":0}}]}'>Não confundir com Guri .\n[…]\n( Sul do Brasil ) menino pequeno ; rapaz ; moço\n[…]\nDerivado do tupi-guarani ngiri ( menino ).\n[…]\nObtida de \" https://pt.wiktionary.org/w/index.php?title=guri&oldid=3148471 \""
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Nome do Brasil",
      "descricao": "Origem do nome do país, derivado da árvore pau-brasil"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do Brasil vem de uma árvore cuja madeira avermelhada lembrava o quê?",
    "resposta": "Brasa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pau-brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pau-brasil",
        "situacao": "ok",
        "texto": "O pau-brasil (atual Paubrasilia echinata (Lam.) Gagnon, H.C.Lima & G.P.Lewis, antiga Caesalpinia echinata Lam.), também chamado arabutã, ibirapiranga, ibirapitá, ibirapitanga, orabutã, pau-de-tinta, pau-pernambuco, pau-de-pernambuco e pau-rosado, é uma árvore leguminosa nativa da Mata Atlântica, no Brasil.\n[…]\nO nome vernáculo \"pau-brasil\", segundo alguns estudiosos, deriva do francês brésil, que deriva do toscano verzino, nome de pelo menos um tipo de madeira utilizada na tinturaria medieval na Itália, a madeira-de-sapão (Biancaea sappan). Verzino, por sua vez, deriva do árabe wars, que designa uma planta tintória do Iêmen. Outra versão aponta que a palavra se origina do português brasa, devido à tonalidade avermelhada ou abrasada da madeira.\n[…]\n\"Ibirapitanga\", bem como suas diversas variantes (arabutã, ibirapiranga, ibirapitá e orabutã), vêm do tupi antigo ybyrapytanga, composição de ybyrá (\"pau\") e pytanga (\"avermelhado\"). Era o nome que os povos tupis da costa davam à árvore que em português se chama pau-brasil.\n[…]\nAfirmam alguns historiadores que o corte do pau-brasil para a obtenção de sua madeira e sua resina (extraída para uso como tintura em manufaturas de tecidos de alto luxo) foi a primeira atividade econômica dos colonos portugueses na recém-descoberta Terra de Santa Cruz, no século XVI e que a abundância desta árvore no meio a imensidão das florestas inexploráveis teria conferido à colônia o nome de Brasil.\n[…]\nPela Lei 6.607, de 7 de dezembro de 1978, o pau-brasil foi declarado árvore nacional do Brasil.\n[…]\nLORENZI, Harri, Árvores brasileiras: manual de identificação e cultivo de plantas arbóreas do Brasil, vol. 1. Instituto Plantarum, Nova Odessa, SP, 2002, 4a. edição. ISBN 85-86174-16-X\n[…]\nSite oficial da Câmara dos Deputados do Brasil [1]\n[…]\nPaubrasilia equinata na Flora do Brasil"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Cerquilha",
      "descricao": "Símbolo formado por duas linhas horizontais cruzando duas verticais, usado nas hashtags"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Brasil, além de jogo da velha, que nome os dicionários dão ao símbolo usado nas hashtags?",
    "resposta": "Cerquilha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cerquilha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cerquilha",
        "situacao": "ok",
        "texto": "Cerquilha, cancela, antífen, cardinal ou octótropo (símbolo: #) é um sinal de pontuação utilizado para indicar diversas funções.\n[…]\nNo Brasil, o símbolo é popularmente chamado \"jogo da velha\", \"tralha\" e \"hashtag\" e, em Portugal, como \"cardinal\", quando se refere o símbolo isoladamente,[carece de fontes]? ou \"número\" quando o símbolo está inserido num texto imediatamente antes de um número.[http://web.archive.org/web/*/https://www.ultius.com/glossary/grammar/punctuation/number-signhashtag.html [ligação inativa]] Em programação, é muito chamado pelos programadores mais antigos de cancela.[carece de fontes]?\n[…]\nApesar do uso cada vez mais frequente do termo \"cerquilha\" em páginas hospedadas no Brasil, alguns dicionários brasileiros tradicionais registram apenas o termo \"antífen\" para o símbolo, citando particularmente seu uso em artes gráficas.\n[…]\nÉ visualmente semelhante considerado conceptualmente diferente do símbolo musical \"♯\", que representa o acidente musical denominado sustenido — tomando o símbolo também este nome.\n[…]\nÉ ainda comumente utilizado por computadores para indicar o xeque-mate na transcrição de lances de um jogo de xadrez.\n[…]\nTambém é utilizado para indicar uma hashtag nas redes sociais (funcionalidade originada no Twitter), sendo assim o sinal também referido por metonímia pelo termo \"hashtag\", popularizado pelo uso recorrente do recurso."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Ônibus",
      "descricao": "Veículo de transporte coletivo de passageiros, cujo nome vem do latim omnibus"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra ônibus vem do latim omnibus. O que ela significa?",
    "resposta": "Para todos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ônibus"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ônibus",
        "situacao": "ok",
        "texto": "Ônibus (português brasileiro) ou autocarro (português europeu), camioneta, machimbombo (no português moçambicano e português angolano), é um veículo motorizado terrestre designado para o transporte de pessoas. Ônibus podem ter a capacidade de carregar até 300 passageiros. O tipo mais comum de ônibus é o ônibus simples ou convencional, usado em grande parte dos centros urbanos para o transporte púb\n[…]\nA designação dos veículos de transporte de passageiros varia de país para país e até mesmo de região para região. Várias das designações têm origem da palavra \"Ónibus / Ômnibus\" (\"para todos\" em latim). Este termo foi usado, desde o século XIX, para designar um tipo de transporte coletivo de passageiros puxado a cavalo, usado nas grandes cidades do mundo, com caraterísticas e funções muito semelhantes aos transportes coletivos atuais.\n[…]\nNo Brasil, os transportes coletivos de passageiros são designados \"ônibus\", termo originado diretamente em \"omnibus\".\n[…]\nO termo ônibus parece vir do local onde os carros faziam o ponto final, diante de uma chapelaria, cujo dono, Omnes, em um jogo de palavras com seu próprio nome, denominou Omnes Omnibus, \"tudo para todos\". O nome pareceu bastante apropriado para o novo transporte coletivo e por associação foi adotado por este. Em outras versões da história, porém, ônibus simplesmente decorre de voiture omnibus (\"carro para todos\").\n[…]\nÉ o tipo mais popular e mais utilizado. Também chamado de ônibus simples, ônibus básico ou ônibus convencional, esse tipo de ônibus possui apenas um andar e uma unidade rígida (ao contrário dos articulados e biarticulados), de dois a quatro eixos. Podem apresentar uma ou mais portas para a entrada de passageiros, e a posição do motor pode variar de frontal, central e traseira. De todos os tipos, é o mais compacto, mais barato de se adquirir e manter.\n[…]\nMicro-ônibus\n[…]\nÔnibus de trânsito rápido\n[…]\nÔnibus articulado\n[…]\nParada de ônibus"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Sanduíche",
      "descricao": "Alimento feito com recheio entre duas fatias de pão, nome tirado de um título nobre inglês"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra sanduíche vem do título de um nobre inglês do século dezoito. Qual era esse título?",
    "resposta": "Conde de Sandwich",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sanduíche",
      "https://en.wikipedia.org/wiki/John_Montagu,_4th_Earl_of_Sandwich"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sanduíche",
        "situacao": "ok",
        "texto": "Um sanduíche (plural sanduíches; também chamado sandes em Portugal, chandula em Angola e, coloquialmente no Brasil, sanduba ou lanche) é um prato que consiste tipicamente em carne, queijo, molhos ou vegetais usados como recheio entre fatias de pão, ou colocados sobre uma fatia; ou, de forma mais geral, qualquer prato em que o pão serve como recipiente ou envoltório para outro alimento.\n[…]\nO sanduíche surgiu como alimento portátil e prático no mundo ocidental e tornou-se ubíquo globalmente, sendo hoje uma das refeições rápidas mais consumidas. É comum no almoço, lanches ou piqueniques, podendo ser servido quente ou frio, caseiro ou industrial.\n[…]\nO nome moderno surgiu em 1762 com John Montagu, 4.º Conde de Sandwich, aristocrata inglês que, para não interromper jogos de cartas, pedia rosbife entre duas fatias de pão torrado. A moda espalhou-se rapidamente pela aristocracia londrina e, no século XIX, com a Revolução Industrial, tornou-se essencial para trabalhadores urbanos.\n[…]\nJames Cook baptizou as atuais ilhas do Havaí como «Ilhas Sandwich» em homenagem ao conde. Existem ainda as Ilhas Sandwich do Sul no Atlântico Sul.\n[…]\nHá debate jurídico e cultural sobre o que constitui um sanduíche:\n[…]\nUSDA (EUA): sanduíche fechado ≥ 35 % carne cozida e ≤ 50 % pão; aberto ≥ 50 % carne cozida.\n[…]\nTribunal de Boston (2006): burrito, taco e quesadilla não são sanduíches.\n[…]\nTribunal de Indiana (2024): tacos e burritos são sanduíches de estilo mexicano.\n[…]\nBritish Sandwich Association: “qualquer forma de pão com recheio, geralmente montado frio” – inclui wraps e bagels, exclui hambúrgueres.\n[…]\nDesde a invenção do pão de forma (década de 1920), os sanduíches são vendidos em estações, cafés e pubs. Em 1979, a Marks & Spencer lançou os sanduíches triangulares refrigerados embalados, revolucionando o mercado britânico – em 2017 a indústria valia £8 mil milhões.\n[…]\nBritish Sandwich & Food to Go Association"
      },
      {
        "url": "https://en.wikipedia.org/wiki/John_Montagu,_4th_Earl_of_Sandwich",
        "situacao": "ok",
        "texto": "John Montagu, 4th Earl of Sandwich, PC, FRS (13 November 1718 – 30 April 1792) was a British statesman who succeeded his grandfather Edward Montagu, 3rd Earl of Sandwich, as the Earl of Sandwich in 1729, at the age of ten. He held various military and political offices during his life, including Postmaster General, First Lord of the Admiralty, and Secretary of State for the Northern Department. He\n[…]\n1729: Succeeds his grandfather, Edward Montagu, 3rd Earl of Sandwich, in the earldom\n[…]\nA plate of Sir Peter Lely's 1666 portrait of the 1st Earl appeared in Fisher's Drawing Room Scrap Book, 1837, together with a facsimile signature and a poetical illustration  The Earl of Sandwich. by Letitia Elizabeth Landon, which actually relates to the 4th Earl (the islands being so-called in his honour).\n[…]\nThe comedian Woody Allen wrote a short, satirical biography of the Earl, detailing his struggles to create the perfect sandwich, which was published as an article in The New Yorker on 8 October 1966.\n[…]\nActor Bill Nighy was cast as Lord Sandwich in the TV series, Longitude in 2000.\n[…]\nLevy, Martin (January 2005). Love & Madness: The Murder of Martha Ray, Mistress of the Fourth Earl of Sandwich Paperback. Harper Perennial. pp. 240 pages. ISBN 0-06-055975-6.\n[…]\nRodger, N. A. M (1993). The Insatiable Earl: A Life of John Montagu, Fourth Earl of Sandwich 1718-1792. London: HarperCollins. pp. 425 pages. ISBN 978-0-002-15784-1.\n[…]\nRodger, N. A. M. \"Montagu, John, fourth earl of Sandwich (1718–1792)\". Oxford Dictionary of National Biography (online ed.). Oxford University Press. doi:10.1093/ref:odnb/19026. (Subscription, Wikipedia Library access or UK public library membership required.)\n[…]\n\"Montagu, John, 4th Earl of Sandwich (MNTG735J)\". A Cambridge Alumni Database. University of Cambridge.\n[…]\nGuide to the papers of Lord Sandwich, 1718–1792 held and digitised by the National Library of Australia"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Bancarrota",
      "descricao": "Palavra do português para falência, vinda do italiano banca rotta"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra bancarrota, sinônimo de falência, vem do italiano. O que ela significava ao pé da letra?",
    "resposta": "Banco quebrado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bankruptcy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bankruptcy",
        "situacao": "ok",
        "texto": "Bankruptcy is a legal process through which people or other entities who cannot repay debts to creditors may seek relief from some or all of their debts. In most jurisdictions, bankruptcy is imposed by a court order, often initiated by the debtor.\n[…]\nCurrent law covers three legal proceedings. The first one is bankruptcy itself (\"Falência\"). Bankruptcy is a court-ordered liquidation procedure for an insolvent business. The final goal of bankruptcy is to liquidate company assets and pay its creditors.\n[…]\nIrish bankruptcy law has been the subject of significant comment, from both government sources and the media, as being in need of reform. Part 7 of the Civil Law (Miscellaneous Provisions) Act 2011 has started this process and the government has committed to further reform.\n[…]\nIt was expected that the UK Government's liberalisation of the bankruptcy regime would increase the number of bankruptcy cases; initially, cases increased, as the Insolvency Service statistics appear to bear out. Since 2009, the introduction of the Debt Relief Order has resulted in a dramatic fall in bankruptcies, the latest estimates for year 2014/15 being significantly less than 30,000 cases.\n[…]\nState law therefore plays a major role in many bankruptcy cases, such that there may be significant differences in the outcome of a bankruptcy case depending upon the state in which it is filed.\n[…]\nTo be eligible to file a consumer bankruptcy under Chapter 7, a debtor must qualify under a statutory means test. The means test was intended to make it more difficult for a significant number of financially distressed individual debtors whose debts are primarily consumer debts to qualify for relief under Chapter 7 of the Bankruptcy Code."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fal%C3%AAncia",
        "situacao": "ok",
        "texto": "Falência, lato sensu, representa uma situação em que uma pessoa, empresa ou um Estado se torna tecnicamente incapaz de pagar as suas dívidas.\n[…]\nA palavra falência tem origem no latim, fallere, que significa faltar. Outros sinónimos de falência são os termos quebra e bancarrota, este último proveniente do italiano bancarotta ('banca quebrada'): na Idade Média, os banqueiros expunham seu dinheiro sobre um banco de madeira (daí o nome 'banqueiro'), tal como os antigos romanos o faziam na mensa argentaria.\n[…]\nSe algum deles não honrava suas dívidas, seu banco era feito em pedaços, e ele próprio era impedido de continuar a exercer qualquer outro negócio.\n[…]\nO fracasso de uma nação em cumprir os pagamentos de títulos foi observado em muitas ocasiões. De maneira semelhante, Filipe II da Espanha teve que declarar quatro falências do Estado em 1557, 1560, 1575 e 1596. De acordo com Kenneth S. Rogoff, \"Embora o desenvolvimento dos mercados de capitais internacionais tenha sido bastante limitado antes de 1800, catalogamos, no entanto, os vários ocorridos dessa natureza na França, Portugal, Prússia, Espanha e as primeiras cidades-estado italianas.\n[…]\nAté à introdução da nova lei, o CIRE, os juristas \"misturavam\" o conceito económico de falência com o conceito económico de insolvência conduzindo a decisões anómalas e prejudiciais à economia. Nessa altura os economistas referiam-se à situação de falência económica  tal como falência técnica de modo a fazer a distinção relativamente ao conceito jurídico incorreto mas legalmente imposto, de falência.\n[…]\nInformação sobre insolvência e falência de empresas em Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Salário",
      "descricao": "Remuneração paga pelo trabalho, palavra derivada do latim salarium"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra salário vem do latim salarium, ligada a que produto valioso na Roma antiga?",
    "resposta": "Sal",
    "distratores": [
      "Trigo",
      "Azeite",
      "Pimenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Salary"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Salary",
        "situacao": "ok",
        "texto": "A salary is a form of periodic payment from an employer to an employee, which may be specified in an employment contract. It is contrasted with piece wages, where each job, hour or other unit is paid separately, rather than on a periodic basis. Salary can also be considered as the cost of hiring and keeping human resources for corporate operations, and is hence referred to as personnel expense or \n[…]\nIn the hyperinflation days salaries was the cheapest factor of production given that it was paid so irregularly though it went to twice monthly. As workers could not withdraw their money, remuneration was often in the following forms:\n[…]\nIn Pakistan, salaries are generally paid on a monthly basis, with most private and public sector organizations disbursing pay by the end of the month or within the first week of the following month. Minimum wage in Pakistan is governed by the Minimum Wages Ordinance, 1961, though following the 18th Constitutional Amendment, the responsibility for setting and notifying minimum wages was devolved to the provinces.\n[…]\nSalary structures in Pakistan typically include a basic salary along with allowances such as house rent allowance, medical allowance, and conveyance allowance. Public sector employees are remunerated under a structured pay scale system known as the Basic Pay Scale (BPS), while private sector salaries vary widely by industry, company size, and individual negotiation.\n[…]\nPerhaps the most important aspect of salary negotiation is the level of preparation put in by the prospective employee. Background research on comparable salaries will help the prospective employee understand the appropriate range for that position. Assessment of alternative offers that the prospective employee has already received can help in the negotiation process.\n[…]\nList of salaries of heads of state and government"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sal%C3%A1rio",
        "situacao": "ok",
        "texto": "O salário (do latim \"salariu:\": \"pagamento com sal\", originalmente refletindo a prática romana de remunerar soldados com este bem essencial) é a contraprestação económica, habitual e direta, devida por um empregador a um empregado em troca do trabalho por este realizado, sob subordinação e de acordo com os termos de um contrato de trabalho.\n[…]\nA palavra latina salarium ligava emprego, sal e soldados, embora a ligação exata não seja clara. Fontes modernas afirmam que, embora os soldados romanos fossem normalmente pagos em moedas, a palavra salarium deriva da palavra sal (sal), porque, em algum momento, o salário de um soldado pode ter sido um subsídio para a compra de sal ou o preço para que os soldados conquistassem os suprimentos de sal e guardassem as Estradas do Sal (Via Salaria) que levavam a Roma.\n[…]\nNo entanto, não há evidências antigas para nenhuma dessas hipóteses.\n[…]\nAdicionais: Valores que acrescem ao salário base para compensar condições laborais específicas. Exemplos universais comuns são:\n[…]\nPara além dos componentes diretos, a lógica de cálculo do salário pode seguir diferentes modelos:\n[…]\nRemuneração por Função: O salário é determinado primarily pela função exercida, independentemente das habilidades individuais do trabalhador. É o modelo mais tradicional.\n[…]\nRemuneração por Habilidade/Competência: O salário é vinculado ao conjunto de habilidades técnicas (habilidades) ou conhecimentos, habilidades e atitudes (competências) que o empregado domina e que são valorizados pela organização, incentivando o desenvolvimento contínuo.\n[…]\nSalário sobre Demanda (On-demand Pay): Modelo emergente que permite ao trabalhador antecipar o acesso a parte do salário já auferido, mas ainda não pago, conforme sua necessidade imediata, através de plataformas digitais.\n[…]\nSalário mínimo\n[…]\nDécimo terceiro salário\n[…]\nEscravidão do salário\n[…]\nProdutividade",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Candidato",
      "descricao": "Quem disputa um cargo ou vaga, palavra vinda do latim candidatus"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Roma antiga, quem disputava um cargo vestia uma toga de que cor, dando origem à palavra candidato?",
    "resposta": "Branca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toga",
        "situacao": "ok",
        "texto": "The toga (, Classical Latin: [ˈt̪ɔ.ɡa]), a distinctive garment of Ancient Rome, was a roughly semicircular cloth, between 12 and 20 feet (3.7 and 6.1 m) in length, draped over the shoulders and around the body. It was usually woven from white wool, and was worn over a tunic. In Roman historical tradition, it is said to have been the favored dress of Romulus, Rome's founder; it was also thought to \n[…]\nToga candida: \"Bright toga\"; a toga rubbed with chalk to a dazzling white, worn by candidates (from Latin candida, \"pure white\") for public office. Thus Persius speaks of a cretata ambitio, \"chalked ambition\". Toga candida is the etymological source of the word candidate.\n[…]\nHigh-status (consular or senatorial) images from the late 4th century show a further ornate variation, known as the \"Broad Eastern Toga\"; it hung to the mid-calf, was heavily embroidered, and was worn over two pallium-style undergarments, one of which had full length sleeves. Its sinus was draped over the left arm.\n[…]\nToga party\n[…]\nGeorge, Michele (2008). \"4 The 'Dark Side' of the Toga\". In Edmondson, Johnathan; Keith, Alison (eds.). Roman Dress and the Fabrics of Roman Culture. Vol. 46. Toronto: University of Toronto Press. pp. 94‒112. doi:10.3138/9781442689039. ISBN 9781442689039. JSTOR 10.3138/9781442689039.\n[…]\nRothe, Ursula (2020). The Toga and Roman Identity. London and New York: Bloomsbury Academic. ISBN 978-1-4725-7154-0.\n[…]\nStone, Shelley (2001). \"1 The Toga: From National to Ceremonial Costume\". In Sebesta, Judith Lynn; Bonfante, Larissa (eds.). The World of Roman Costume. Madison, WI: The University of Wisconsin Press. pp. 13–45.\n[…]\nVout, Caroline (1996). \"The Myth of the Toga: Understanding the History of Roman Dress\". Greece & Rome. 43 (2): 204–220. doi:10.1093/gr/43.2.204. JSTOR 643096.\n[…]\nDoctor Toga\n[…]\nToga (Nova Roma) – How to make a toga\n[…]\nWilliam Smith's A Dictionary of Greek and Roman Antiquities on the toga"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toga",
        "situacao": "ok",
        "texto": "A toga uma vestimenta distinta da Roma antiga, era um tecido aproximadamente semicircular, entre 12 e 20 pés (3,7 e 6,1 m) de comprimento, drapeado sobre ombros e ao redor do corpo. Geralmente era tecido de lã branca e era usado sobre uma túnica. Na tradição histórica romana, diz-se que foi o vestido preferido de Rômulo, o fundador de Roma; também foi pensado para ter sido originalmente usado por \n[…]\nComo as mulheres romanas gradualmente adotaram a estola, a toga foi reconhecida como roupa formal para os cidadãos romanos do sexo masculino. Mulheres consideradas culpadas de adultério e mulheres envolvidas em prostituição podem ter fornecido as principais exceções a esta regra.\n[…]\nO tipo de toga usada refletia a posição de um cidadão na hierarquia civil. Várias leis e costumes restringiam seu uso aos cidadãos, que eram obrigados a usá-lo em festas públicas e deveres cívicos.\n[…]\nDesde seu provável início como uma roupa de trabalho simples e prática, a toga tornou-se mais volumosa, complexa e cara, cada vez mais inadequada para qualquer coisa que não fosse o uso formal e cerimonial. Foi e é considerado o \"traje nacional\" da Roma antiga; como tal, tinha grande valor simbólico; no entanto, mesmo entre os romanos, era difícil de vestir, desconfortável e difícil de usar corretamente e nunca verdadeiramente popular.\n[…]\nEstola (Roma Antiga)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Fiasco",
      "descricao": "Palavra para um fracasso vexaminoso, vinda do italiano"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra fiasco, usada para um fracasso vergonhoso, vem do italiano. O que fiasco significa nessa língua?",
    "resposta": "Garrafa",
    "distratores": [
      "Fogueira",
      "Tropeço",
      "Mentira"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fiasco_(bottle)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fiasco_(bottle)",
        "situacao": "ok",
        "texto": "A fiasco (, Italian: [ˈfjasko]; pl.: fiaschi) is a traditional Italian style of bottle, usually with a round body and bottom, partially or completely covered with a close-fitting straw basket. The basket is typically made of sala, a swamp weed, sun-dried and blanched with sulfur. The basket provides protection during transportation and handling, and also a flat base for the container. Thus the gla\n[…]\nThroughout its history, the fiasco was found on the tables of peasants and popes alike. A decree from 1574 by the Grand Duke of Tuscany fixed the capacity of the mezzo quarto bottle, and established a public office that would certify the capacity of fiaschi by a lead seal applied to the straw covering. However, producers soon started re-using the baskets from discarded certified fiaschi to dress new sub-standard bottles.\n[…]\nAt the same time, the Bordeaux-style bottle (bordolese) was becoming more popular among wine producers, displacing the fiasco. However, a 1965 law reserved the fiasco for wines of legally controlled denomination (denominazione di origine controllata; DOC), restoring the prestige of that classical container.\n[…]\nThe fiasco is no longer commonly used in Italy for storing and selling wine, and its more common uses nowadays are as a souvenir for tourists or as a decorative item in restaurants and kitchens.\n[…]\nThe straw bands can be vertical or horizontal; the former was traditionally used for fiaschi destined to local markets, while the latter, with a reinforced base and more careful weaving, was chiefly used for export. The latter often used a basket of whitened straw, decorated with two stripes tinted in the Italian flag colors (red and green). The base is a torus made of scrap straw, tied with fine straw blades (salicchio).\n[…]\nHistory of the Fiasco at the Empoli city site (in Italian)"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Cafona",
      "descricao": "Adjetivo brasileiro para algo de mau gosto ou brega, vindo do italiano cafone"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra cafona, para algo de mau gosto, vem do italiano cafone. Quem era chamado assim na Itália?",
    "resposta": "Camponês",
    "distratores": [
      "Marinheiro",
      "Mendigo",
      "Palhaço"
    ],
    "fonte": [
      "https://pt.wiktionary.org/wiki/cafona"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/cafona",
        "situacao": "ok",
        "texto": "bocomoco , brega , caipira , desatualizado , grosseiro , matuto , mocorongo , simplório , tosco\n[…]\nDo italiano cafone ( it )   “ camponês ; indivíduo rude , estúpido ”.\n[…]\nObtida de \" https://pt.wiktionary.org/w/index.php?title=cafona&oldid=2720023 \""
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Quimbundo",
      "descricao": "Língua banta falada no norte de Angola, que deu muitas palavras ao português do Brasil"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Caçula, moleque e quitanda são palavras que o português do Brasil recebeu de qual língua angolana?",
    "resposta": "Quimbundo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Língua_quimbunda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_quimbunda",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Dígrafos lh e nh",
      "descricao": "Pares de letras usados no português para os sons de palha e banho"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Os dígrafos lh e nh, de palavras como palha e banho, foram copiados na Idade Média da escrita de qual língua?",
    "resposta": "Occitano (provençal)",
    "distratores": [
      "Catalão",
      "Italiano",
      "Castelhano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Portuguese_orthography"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Portuguese_orthography",
        "situacao": "ok",
        "texto": "Portuguese orthography is based on the Latin alphabet and makes use of the acute accent, the circumflex accent, the grave accent, the tilde, and the cedilla to denote stress, vowel height, nasalization, and other sound changes. The diaeresis was abolished by the last Orthography Agreement. Accented letters and digraphs are not counted as separate characters for collation purposes.\n[…]\nPronunciation divergences mean some of these words may be spelled differently (quatorze / catorze and quotidiano / cotidiano). The digraph ⟨ch⟩ is pronounced as an English ⟨sh⟩ by the overwhelming majority of speakers. The digraphs ⟨lh⟩ and ⟨nh⟩, of Occitan origin, denote palatal consonants that do not exist in English. The digraphs ⟨rr⟩ and ⟨ss⟩ are used only between vowels. The pronunciation of the digraph ⟨rr⟩ varies with dialect (see the note on the phoneme /ʁ/, above.nb 11)\n[…]\nWikipedia in Portuguese: Ortografia da língua portuguesa\n[…]\nEstrela, Edite A questão ortográfica — Reforma e acordos da língua portuguesa (1993) Editorial Notícias"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ortografia_da_l%C3%ADngua_portuguesa",
        "situacao": "ok",
        "texto": "A ortografia da língua portuguesa é o sistema de escrita padrão usado para representar a língua portuguesa. A ortografia do português usa o alfabeto latino de 26 letras complementado por sinais diacríticos.\n[…]\nH : letra sem valor fonético próprio em português. Aparece nos dígrafos ch, lh e nh, em algumas interjeições, e em começo de palavra para preservar a escrita de origem (em latim era escrito para representar o som /h/, como nas línguas germânicas atuais).\n[…]\nNo galego (considerado por muitos uma variante da língua galego-portuguesa, tal como o português, ainda na atualidade), c antes de e e i pode pronunciar-se como /θ/ (o fonema do dígrafo \"th\" em inglês). Na ortografia portuguesa, o Ç foi abolido em começo de palavra onde etimologicamente deveria figurar: sapato, em vez de çapato. O Ç é sempre preferido em lugar de SS na escrita de línguas ágrafas, como as indígenas brasileiras, ou na transliteração, como do árabe (Iguaçu, madraçal, Moçambique).\n[…]\nPara a nasal palatal [ɲ] e a lateral palatal [ʎ] só após 1250 começaram a se usar as grafias de origem provençal nh e lh; ex.: ganhar, velha.\n[…]\nA Reforma Ortográfica de 1911 — a primeira oficial em Portugal — foi profunda e modificou completamente o aspeto da língua escrita, aproximando-o muito do atual, fazendo desaparecer muitas consoantes dobradas, os grupos ph, th, rh, etc. Representa um retorno, parcial, à ortografia fonética da Idade Média, de que se diferencia, no entanto, pela uniformidade com que é aplicada.\n[…]\nNão se acentuam hiatos que precedem as letras l, r, z, m, n, e o dígrafo nh. Exemplo rainha.\n[…]\nLíngua portuguesa\n[…]\nPortal da Língua Portuguesa\n[…]\nOrtografia da lingua portugueza, Lisboa, 1671, na Biblioteca Nacional de Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Galicismos",
      "descricao": "Palavras e expressões do português tomadas do francês"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Abajur, garçom e chofer são adaptações de palavras de qual língua estrangeira?",
    "resposta": "Francês",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Galicismo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Galicismo",
        "situacao": "ok",
        "texto": "Galicismo ou francesismo é uma palavra ou expressão de origem francesa, ou afrancesada, tendo ou não mantida a sua grafia original.\n[…]\nAo se utilizar um galicismo inovador, sem termo vernáculo equivalente em língua portuguesa, caracteriza-se como um estrangeirismo, espécie de vício de linguagem. Exemplo: Ele comprou um pedaço de queijo comté.\n[…]\nUm galicismo que tenha sido incorporado ao vernáculo deixa de ser considerado estrangeirismo. Exemplo: Eu adoro ver as vitrines daquela loja ou O Governo cancelou vários laissez-passers.\n[…]\nTambém é considerado um galicismo usar palavra ou expressão proveniente do francês ou do occitano em vez de uma equivalente vernácula, ou o uso de palavra mal-pronunciada, caracterizando-se ambos os casos como barbarismo. Exemplo: Ela tomou muito champagne ontem (em vez de champanhe ou champanha), ou Vocês estão muito chics. (em vez de chiques).\n[…]\nPor fim, um galicismo pode constituir um idiotismo quando utilizada expressão própria da língua francesa de maneira literal noutra língua, em vez de ser feita tradução livre. Exemplo: Faites attention, que deve ser traduzida como Presta atenção a ou Tem cuidado com, e não como Faz atenção .\n[…]\nAs palavras assinaladas com um asterisco ainda possuem a sua forma original francesa em uso corrente em países lusófonos, como por exemplo Portugal ou o Brasil, ou seja ainda estão em processo de aportuguesamento.\n[…]\nFIGUEIREDO, Cândido de. Grande dicionário da língua portuguesa. Bertrand Editores, dois volumes.\n[…]\nVício de linguagem"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Língua guarani",
      "descricao": "Língua indígena da família tupi-guarani, oficial no Paraguai ao lado do espanhol"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O tupi, que deu tantas palavras ao português do Brasil, é parente próximo de qual língua oficial do Paraguai?",
    "resposta": "Guarani",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Língua_guarani"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_guarani",
        "situacao": "ok",
        "texto": "O guarani (em guarani: avañe'ẽ ou guaraniñe'ẽ) é um idioma originalmente indígena do sul da América do Sul pertence à família tupi-guarani das línguas tupi. Possui 6,54 milhões de falantes, sendo estes majoritariamente de povos da etnia tupi-guarani na Argentina, na Bolívia, no Brasil e no Paraguai, onde é a segunda língua oficial (juntamente com o espanhol). No Paraguai, é falado pela maioria de \n[…]\nO ensino do guarani é geralmente realizado no ambiente familiar, já que a maioria da população paraguaia fala guarani como primeiro idioma. Além disso, após a Constituição de 1992, o ensino do guarani passou a ser obrigatório nas escolas, devido ao caráter oficial adquirido pela língua.\n[…]\nA língua guarani apresenta diversos dialetos e variações regionais. O \"guarani paraguaio\", variante predominante, conta com mais de 6 milhões de falantes. O \"guarani ava\" ou \"apytare\", ameaçado de extinção, apresenta pouco mais de 6 mil falantes, esparsamente distribuídos no sudeste paraguaio e no sul brasileiro. Há ainda o dialeto \"ñandeva\", com mais de 2500 falantes.\n[…]\nEm 24 de maio de 2010, a cidade de Tacuru, no estado brasileiro do Mato Grosso do Sul, adotou o guarani como língua oficial, além do português. A lei sancionada na data determinou que ninguém poderá sofrer discriminação pela língua de que faça uso e destaca o respeito e a valorização devidos às variedades do guarani, como o caiouá, o nhandeva e o embiá. A lei determina, ainda, que a prefeitura de Tacuru deverá apoiar e incentivar o ensino da língua guarani nas escolas e nos meios de comunicação.\n[…]\nO guarani não apresenta tons, porém a duração e intensidade da pronúncia das palavras pode alterar a interpretação de uma sentença, assim como no português. Frases declarativas, por exemplo, apresentam uma queda de tom ao seu final.\n[…]\nLíngua geral paulista\n[…]\n«Léxico Guarani - Dialeto Mbyá: Guarani-Português (2006)» (PDF)\n[…]\n«Sobre a língua guarani»"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Latim vulgar",
      "descricao": "Latim falado pelo povo e pelos soldados do Império Romano, origem das línguas românicas"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O português não nasceu do latim literário de Cícero, mas de qual variedade do latim, falada pelo povo?",
    "resposta": "Latim vulgar",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Latim_vulgar"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Latim_vulgar",
        "situacao": "ok",
        "texto": "Latim vulgar, também conhecido como \"latim coloquial\", \"popular\", \"falado\" ou \"vernáculo\", é o conjunto de registros não formais do latim falado a partir do final da República Romana. O termo \"latim vulgar\" é tanto controverso quanto impreciso. O latim falado existiu por um longo período e em muitas regiões. Os estudiosos divergem quanto à extensão das diferenças entre as formas faladas e escritas\n[…]\nO consenso atual é que as línguas escrita e falada formavam uma continuidade, assim como acontece com as línguas modernas, com a fala tendendo a evoluir mais rapidamente que a escrita, enquanto a forma escrita e formalizada exercia pressão de volta sobre a fala. O termo \"latim vulgar\" é usado de maneiras diferentes por diferentes estudiosos, podendo significar o latim falado de tipos variados, de diferentes classes sociais ou de diferentes épocas.\n[…]\nMesmo assim, o interesse pelas mudanças nas formas faladas continua sendo muito importante para entender a transição do latim ou latim tardio para o proto-românico e as línguas românicas. Para tornar as coisas mais complexas, as evidências das formas faladas só podem ser encontradas por meio do exame do latim clássico escrito, latim tardio ou românico inicial, dependendo do período em questão.\n[…]\nAppendix Probi, lista de erros ortográficos comuns no latim vulgar do século IV d.C.\n[…]\nMAURER JR., Theodoro Henrique O Problema do Latim Vulgar. Rio de Janeiro, Livraria Acadêmica, 1962 (resenha). Por Nelly Novaes Coelho."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Português uruguaio",
      "descricao": "Conjunto de dialetos de base portuguesa falados no norte do Uruguai, junto à fronteira com o Brasil"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que país vizinho do Rio Grande do Sul se fala um dialeto de base portuguesa conhecido como portunhol riverense?",
    "resposta": "Uruguai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uruguayan_Portuguese"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uruguayan_Portuguese",
        "situacao": "ok",
        "texto": "Uruguayan Portuguese (português uruguaio, [poɾtuˈɣes uɾuˈɣwajo]), also known as fronteiriço ([fɾõteˈɾiso]) and riverense, and referred to by its speakers as portunhol (locally [poɾtuˈɲɔl]) (distinct from Portuñol), is a variety of Portuguese in South America with heavy influence from Rioplatense Spanish. It is spoken in north-eastern Uruguay, near the Brazilian border, mainly in the region of the \n[…]\nThe varieties of Uruguayan Portuguese share many similarities with the countryside dialects of the southern Brazilian state of Rio Grande do Sul, such as the denasalization of final unstressed nasal vowels, replacement of lateral palatal /ʎ/ with semivowel /j/, no raising of final unstressed /e/, alveolar trill /r/ instead of the guttural R, and lateral realization of coda /l/ instead of L-vocalization.\n[…]\nComparison of Portuguese and Spanish\n[…]\nDouglas, Kendra (2004). Uruguayan Portuguese in Artigas: Tri-dimensionality of transitional local varieties in contact with Spanish and Portuguese standards (Ph.D. dissertation). Madison, WI: University of Wisconsin.\n[…]\nBrian, Nicolás; Brovetto, Claudia; Geymonat, Javier (2007). Portugués del Uruguay y educación bilingüe (in Spanish).\n[…]\nCarvalho, Ana Maria (2004). \"I speak like the guys on TV: Palatalization and the urbanization of Uruguayan Portuguese\". Language Variation and Change. 16 (2): 127–151. doi:10.1017/S0954394504162030. S2CID 144351313.\n[…]\nBottaro, Silvia Etel Gutiérrez (2014). \"El portugués uruguayo y las marcas de la oralidad en la poesía del escritor uruguayo Agustín R. Bisio\" [Uruguayan Portuguese and oral marks in the poetry of Uruguayan writer Agustín R. Bisio] (PDF). Abehache (in Spanish). 4 (6). Archived (PDF) from the original on 12 August 2019. Retrieved 18 March 2018.\n[…]\nPage about Uruguayan Portunhol (in Portuguese) at Unicamp - University of Campinas, São Paulo (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Portugu%C3%AAs_uruguaio",
        "situacao": "ok",
        "texto": "O português uruguaio, algumas vezes  chamado fronteiriço ou misturado, é uma variedade dialetal do que hoje se conhece em meios acadêmicos como Dialetos Portugueses do Uruguai ou Dialectos portugueses del Uruguay (DPU) em espanhol. É falado por cerca de 30% da população uruguaia em geral e 15% como nativo, sendo usado na região fronteiriça entre o Uruguai e o Brasil em cidades como Artigas e Quara\n[…]\nComo toda língua, o português uruguaio é muito dinâmico e heterogêneo, existindo um contínuo de dialetos que vão desde o português brasileiro (brazilero, em portunhol) padrão até ao espanhol rioplatense (castilhano, em portunhol).\n[…]\nA maioria dos linguistas classificam o riverense como um dialeto da língua portuguesa (mais notoriamente Adolfo Elizaincín , que tecnicamente chama-o de DPU - dialeto português do Uruguai), ainda que não haja um consenso.\n[…]\nA origem do portunhol se remonta na época da colonização portuguesa na região norte do Uruguai, na qual não estava bem definido a quem pertenciam esses territórios, com a soberania passando de maneira sucessiva de uma coroa a outra. Não somente o português e o espanhol tiveram influência sobre o portunhol, mas também as línguas indígenas, em alguns casos. Como exemplos, podem-se citar: guri (menino), mamboretá (reza ou pedido), caracu (osso de vaca).\n[…]\nNo quadro seguinte, quando se referir ao português, está-se a referir ao português brasileiro e em particular ao português gaúcho (do estado do sul do Brasil o Rio Grande do Sul) ou aos da mídia brasileira, e quando se referir ao espanhol, na realidade está-se a referir à variante do espanhol tal como é falada no Uruguai.\n[…]\nPortunhol\n[…]\nDiferenças entre o espanhol e o português\n[…]\nPolíticas lingüísticas no Uruguai: Estândares vs. dialetos na região fronteiriça uruguaio-brasileira. (em português)\n[…]\nPágina sobre o Portunhol Uruguaio na Unicamp - Universidade de Campinas, em São Paulo (em português)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Acordo Ortográfico de 1990",
      "descricao": "Tratado que unificou a ortografia dos países de língua portuguesa, em vigor no Brasil desde 2009"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que capital foi assinado, em dezembro de 1990, o acordo ortográfico que unificou a escrita dos países de língua portuguesa?",
    "resposta": "Lisboa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Acordo_Ortográfico_de_1990"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Acordo_Ortográfico_de_1990",
        "situacao": "ok",
        "texto": "Acordo Ortográfico da Língua Portuguesa de 1990 (abreviado AO90), também denominado Ortografia Unificada da Língua Portuguesa, é um tratado internacional firmado em 1990 com o objetivo de criar uma ortografia unificada para o português, a ser usada por todos os países de língua oficial portuguesa (lusófonos); foi assinado por representantes oficiais de Angola, Brasil, Cabo Verde, Guiné-Bissau, Moç\n[…]\nA adoção da nova ortografia, de acordo com o Anexo II do Acordo (a Nota Explicativa do Acordo Ortográfico da Língua Portuguesa de 1990, que se baseia numa lista de 110 mil lemas da Academia das Ciências de Lisboa), acarreta alterações na grafia de cerca de 1,6% do total de palavras (lemas) na norma em vigor em Portugal, nos Países Africanos de Língua Oficial Portuguesa (PALOP), no Timor-Leste, e de aproximadamente 0,8% do total de palavras (lemas) na brasileira.\n[…]\nPara a elaboração do Acordo Ortográfico, reuniram-se na Academia das Ciências de Lisboa, no período de 6 a 12 de outubro de 1990, as seguintes delegações:\n[…]\nNo Acordo Ortográfico de 1990 está prevista a publicação de um Vocabulário Ortográfico Unificado da Língua Portuguesa, elaborado pela Academia das Ciências de Lisboa e pela Academia Brasileira de Letras, com a colaboração das competentes instituições dos países-parceiros do Acordo, o qual constituirá um instrumento de consulta e de resolução de dúvidas, que a aplicação de qualquer Acordo sempre levanta.\n[…]\nAcordo Ortográfico da Língua Portuguesa: é um tratado aprovado em 12 de outubro de 1990 pela Academia das Ciências de Lisboa, pela Academia Brasileira de Letras e por delegações de Angola, Cabo Verde, Guiné-Bissau, Moçambique e São Tomé e Príncipe, com a presença de delegação de observadores da Galiza, e assinado em Lisboa 16 de dezembro de 1990 por representantes de sete países lusófonos. Contém um preâmbulo e quatro artigos.\n[…]\nOrtografia da língua portuguesa"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Canja",
      "descricao": "Caldo de arroz com galinha, cujo nome chegou ao português vindo da Ásia"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A canja, o caldo de galinha com arroz, tem nome vindo de uma palavra que os portugueses aprenderam em qual país asiático?",
    "resposta": "Índia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Canja_de_galinha",
      "https://en.wikipedia.org/wiki/Congee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Canja_de_galinha",
        "situacao": "ok",
        "texto": "Canja de galinha (European Portuguese pronunciation: [kɐ̃ʒɐ ðɨ ɣɐˈlĩɲɐ], Brazilian Portuguese pronunciation: [kɐ̃ʒɐ dʒi gaˈlĩj̃ɐ], (literally \"chicken congee\"), or simply canja, is a popular chicken soup of Portuguese, Cape Verdean, and Brazilian cuisine. The Portuguese term galinha literally means \"hen\", but became the generic name for the species, much like chicken in English.\n[…]\nThe basic ingredients include chicken, and usually small pasta (like alphabet pasta or pevide pasta) or sometimes rice. Common flavoring ingredients are carrot, eggs, olive oil, mint, saffron, clove, white pepper, salt and pepper. It is usually accompanied by slices of Portuguese broa bread  (corn bread) on the side for dipping. This is only a variation of this recipe.\n[…]\nThe Brazilian recipe for canja de galinha uses whole pieces of chicken from the areas with more bones, fried in a very light refogado using a sole smashed garlic clove (fried in olive oil until golden but never toasted), has the rice and vegetables (generally solely potato and carrots, in very small cubes; rarely peeled tomato) boiled in broth much more cooked than the usual, and might call for parsley and green onions.\n[…]\nCanja de galinha is usually consumed by Brazilians, Portuguese and Cape Verdeans when they have a cold. In Portugal, Cape Verde and Brazil, canja de galinha is widely believed to help a person overcome colds, digestive problems, and other mild forms of sickness. In Cape Verde, canja is sometimes served after the funeral, at the home of the deceased, perhaps because it \"soothes\" the heart.\n[…]\nSince canja de galinha is very simple and light, it is often consumed before a main course meal as well as a late supper.\n[…]\nCaldo de pollo, canja's much \"heavier\" Hispanic American relative"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Congee",
        "situacao": "ok",
        "texto": "Congee ( KON-jee, derived from Tamil கஞ்சி [kaɲdʑi]) is a form of savoury porridge, primarily made by boiling rice in a large amount of water until the rice softens, and commonly flavored with salt or mild broth. Depending on the rice–water ratio, the thickness of congee varies from a Western oatmeal porridge to a gruel. Congee is typically served with side dishes, or it can be topped with meat, f\n[…]\nIn the Konkan region of Maharashtra in India, congee is known as pez, is a home remedy for treating a fever as it is easy to digest. The farming and manual labour community of the same region, on the other hand, consume it on a daily basis in the late morning as a source of energy.\n[…]\nIn Goa state and Udupi and Dakshina Kannada districts, people usually eat rice ganji in a variant manner made by Kannada-speaking, Tulu-speaking or Konkani people in and around Udupi and Mangalore (Karnataka, South India). There, parboiled rice (kocheel akki in Kannada, oorpel aari for black rice, bolenta aari for white rice in Tulu or ukde tandool in Konkani) is steamed with a large amount of water. Jain ganji matt are famous in these districts.\n[…]\nIn Portugal, a traditional soup made of rice and chicken meat is named canja or canja de galinha. The Portuguese had likely picked up the dish from their colonies in Western/Southern India or Sri Lanka; where the soup remains a staple (particularly for the ill). The rice is not cooked for as long as in Asian congee, so it is very soft, but not disintegrated. Traditionally, a boiling fowl containing small, immature eggs is used; the eggs are carefully boiled and served in the canja."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canja",
        "situacao": "ok",
        "texto": "Canja é um caldo feita à base de massa. A sua principal variação é a canja de galinha, que tem na cultura popular do país uma forte crença nas suas propriedades medicinais, em particular no combate à constipação. A canja é particularmente recomendada no tratamento da diarreia de modo a combater a desidratação, sobretudo se é feita de modo a ficar muito líquida e salgada.\n[…]\nEm certas regiões portuguesas, nomeadamente na região centro, existe uma tradição de dar apenas canja às mulheres depois do parto durante algumas semanas.\n[…]\nA canja é originária da China onde é chamada congee. O congee é consumido em quase todos os países asiáticos. É interessante que o congee chinês, ou asiático em geral, pode levar muitos ingredientes diferentes e inclusivamente é frequentemente tomado ao pequeno-almoço. No entanto, a variante mais tradicional é precisamente o congee de galinha, quase idêntico à canja portuguesa, e que além disso é também utilizado no período de convalescença de doenças, exactamente como em Portugal.\n[…]\nÉ muito provável que a canja tenha sido trazida da China por portugueses devido, precisamente, às suas propriedades reconfortantes e medicinais. Outra versão, de Garcia da Orta, aponta sua origem na Índia, na Costa de Malabar, porto de Calicute, onde Vasco da Gama aportou em 1492. Era chamada kenji (ou kenge) palavra malaiala que designava um caldo quente e salgado, ao qual os portugueses acrescentaram a galinha.\n[…]\nPor influência portuguesa, a canja é também consumida no Brasil e outros países e regiões de expressão portuguesa. Um exemplo desta disseminação é a chamada canja de Goa. Outro exemplo é a receita brasileira em que a galinha é primeiro refogada com cebola, alho, aipo e tomate, antes de ser cozida com cenoura, salsa, cebolinho e sal; depois de tudo cozido, acrescenta-se arroz e deixa-se cozer.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Talian",
      "descricao": "Língua de base vêneta falada por descendentes de imigrantes italianos no Sul do Brasil"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O talian, língua trazida por imigrantes do norte da Itália, é falado sobretudo na serra de qual estado brasileiro?",
    "resposta": "Rio Grande do Sul",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Talian"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Talian",
        "situacao": "ok",
        "texto": "O talian ou taliano (também conhecido como vêneto brasileiro e vêneto sul-rio-grandense) é uma variedade da língua vêneta falada no Brasil, sobretudo nos estados do Rio Grande do Sul e de Santa Catarina, e em pontos do Paraná, Mato Grosso e Espírito Santo.\n[…]\nEntre as décadas de 1930 e 1960 o talian experimentou um declínio constante e acentuado. Um movimento de resgate se articulou a partir da década de 1970, quando foi comemorado com grandes festividades o centenário da imigração italiana, coincidindo com o despertar do interesse acadêmico sobre a italianidade no Brasil. Desde então têm sido feitos vários esforços no sentido de recuperar a prática do talian, com significativo sucesso.\n[…]\nEm 2009 os Governos do Rio Grande do Sul e de Santa Catarina incluíram o talian no rol do Patrimônio Histórico e Cultural dos respectivos estados. O município de Serafina Corrêa foi o primeiro no Brasil a declarar o talian como idioma cooficial no município, ao lado do português, em 2010.\n[…]\nO vêneto falado no sul do Brasil e no Espírito Santo é arcaico quando comparado ao vêneto falado atualmente na Itália, pois é semelhante ao usado no século XIX. Ademais, com o advento da rádio e da televisão, começou uma forte interferência da língua portuguesa no vêneto falado pelos imigrantes no Brasil.\n[…]\nO talian absorveu, e continua a absorver, diversas influências da língua portuguesa. A maioria dos empréstimos do português vem da denominação de usos e costumes que não existiam na Itália, incluindo jargão técnico, profissional, comercial e administrativo, assim como nomes de objetos, alimentos, animais e plantas típicos do Brasil. Em função do contato com o português, o talian se distancia parcialmente do dialeto vêneto atualmente falado na Itália.\n[…]\nLíngua vêneta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Setembro",
      "descricao": "Nono mês do calendário gregoriano, cujo nome vem do latim septem"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Setembro vem do latim septem, que significa sete, mas é o nono mês do ano. Por que essa diferença?",
    "resposta": "O ano romano começava em março",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Setembro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Setembro",
        "situacao": "ok",
        "texto": "Setembro é o nono e pré-antepenúltimo mês do ano no calendário gregoriano, tendo a duração de 30 dias. Setembro deve o seu nome à palavra latina septem (sete), dado que era o sétimo mês do calendário romano, que originalmente começava em Março.\n[…]\nSetembro é um mês de início de outono no hemisfério norte e início de primavera no hemisfério sul. Portanto, setembro no hemisfério sul é o equivalente sazonal de março no hemisfério norte e vice-versa.\n[…]\n30 de setembro de 1957 – Xororó, cantor brasileiro.\n[…]\n26 de setembro de 2016 — Carmen Silva, cantora e compositora brasileira (n. 1945).\n[…]\n26 de setembro de 2024 — John Ashton, ator estadunidense (n. 1948).\n[…]\n27 de setembro de 2005 — Ronald Golias, comediante e ator brasileiro (n. 1929).\n[…]\n27 de setembro de 2010 — Mário Tupinambá, humorista brasileiro (n. 1932).\n[…]\n27 de setembro de 2012 — Ted Boy Marino, ator e lutador de luta-livre ítalo-brasileiro (n. 1939).\n[…]\n28 de setembro de 2018 — Leonardo Machado, ator e modelo brasileiro (n. 1976).\n[…]\n28 de setembro de 2022 — Coolio, cantor, ator e empresário americano (n. 1963).\n[…]\n28 de setembro de 2024 — Maggie Smith, atriz inglesa (n. 1934).\n[…]\n28 de setembro de 2025 — Berta Loran, comediante e atriz polonesa-brasileira (n. 1926).\n[…]\n29 de setembro de 2012 – Hebe Camargo, cantora, apresentadora de televisão e atriz brasileira (n. 1929).\n[…]\n29 de setembro de 2013 – Cláudio Cavalcanti, ator e político brasileiro (n. 1940).\n[…]\n29 de setembro de 2025 — Paulo Soares, jornalista, apresentador e locutor esportivo brasileiro (n. 1962).\n[…]\n30 de setembro de 2015 — Caio César, ator, dublador e policial militar brasileiro (n. 1988).\n[…]\n30 de setembro de 2019 — Newton Carlos, jornalista brasileiro de imprensa e televisão (n. 1927).\n[…]\n30 de setembro de 2020 — Quino, cartunista argentino (n. 1932)."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Sangue azul",
      "descricao": "Expressão para pessoas de origem nobre, surgida na Espanha"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A expressão sangue azul, para os nobres, surgiu na Espanha porque a pele clara da nobreza deixava ver o quê?",
    "resposta": "As veias",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blue_blood"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blue_blood",
        "situacao": "desambiguacao",
        "texto": "Blue Blood, bluebloods, blue blood, or, blue-blooded, may refer to:\n\n\n== Societal categories ==\nNobility, a social class\nPolice, sometimes referred to as bluebloods\n\n\n== Blood ==\nHemolymph, circulatory fluid colored blue by hemocyanin, a respiratory protein evident in most molluscs and some arthropods\nVenous blood, on blood circulation diagrams, using blue colored veins\nDeoxygenated blood, when he"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Pomo de Adão",
      "descricao": "Nome popular da saliência da cartilagem tireoide no pescoço"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição que deu nome ao pomo de Adão, o que teria ficado entalado na garganta de Adão?",
    "resposta": "O fruto proibido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Adam%27s_apple"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Adam%27s_apple",
        "situacao": "ok",
        "texto": "The Adam's apple is the protrusion in the neck formed by the angle of the thyroid cartilage surrounding the larynx, typically visible in men and less so in women. The prominence of the Adam's apple increases in most men as a secondary sex characteristic during puberty."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pomo_de_ad%C3%A3o",
        "situacao": "ok",
        "texto": "A proeminência laríngea, popularmente conhecida como pomo de adão, maçã de adão ou gogó, é uma saliência da cartilagem tireóide, existente abaixo do osso hioide, junto à laringe, no pescoço humano, um dos órgãos envolvidos no processo de fala. O seu crescimento é maior nos indivíduos do sexo masculino, pela maior presença de hormônios masculinos, principalmente a testosterona.\n[…]\nA origem do termo estaria na passagem bíblica do pecado original, onde Adão comeu o fruto proibido após Eva e, diz a lenda, que ele teria ficado com o caroço preso na garganta.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Testamento de Afonso II",
      "descricao": "Testamento do rei Afonso II de Portugal, um dos mais antigos documentos escritos em português"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O testamento do rei Afonso II, um dos documentos mais antigos escritos em português, é de qual século?",
    "resposta": "Século treze",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Afonso_II_de_Portugal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Afonso_II_de_Portugal",
        "situacao": "ok",
        "texto": "Afonso II (Coimbra, 23 de abril de 1185 – Coimbra, 25 de março de 1223), apelidado de o Gordo, foi o terceiro Rei de Portugal de 1211 até sua morte. Era filho do rei Sancho I e sua esposa Dulce de Aragão.\n[…]\nAfonso foi o primeiro filho  de Sancho I e de Dulce de Aragão. Teve três irmãs nascidas antes dele, sendo o quarto a nascer. Foi o terceiro rei de Portugal, nasceu no mesmo ano em que o avô Afonso Henriques morreu.\n[…]\nOs primeiros anos do seu reinado foram marcados por violentos conflitos internos (1211-1216) entre Afonso II e as suas irmãs Mafalda, Teresa e Santa Sancha de Portugal (a quem seu pai legara em testamento, sob o título de rainhas, a posse de alguns castelos no centro do país — Montemor-o-Velho, Seia e Alenquer —, com as respectivas vilas, termos, alcaidarias e rendimentos), numa tentativa de centralizar o poder régio. Este conflito foi resolvido com intervenção do papa Inocêncio III.\n[…]\n23 de Abril de 1185 – 26 de Março de 1211: O Infante Afonso de Portugal;\n[…]\nO estilo oficial de D. Afonso II enquanto Rei de Portugal:\n[…]\nPela Graça de Deus, Afonso II, Rei de Portugal.\n[…]\nAfonso III de Portugal (1210-1279);\n[…]\nÁrvore genealógica dos reis de Portugal\n[…]\nTestamento de Afonso II\n[…]\nPortugal na Reconquista\n[…]\n«Chronica do muito alto e muito esclarecido principe D. Afonso II, terceiro rey de Portugal, Rui de Pina (1440-1522), Lisboa Occidental, 1727, na Biblioteca Nacional Digital»\n[…]\nD. Afonso II, o rei leproso, A Alma e a Gente - Afonso II, o que foi gafo (Extrato de Documentário), por José Hermano Saraiva, Videofono para a RTP, 2003\n[…]\nO conflituoso reinado de D. Afonso II, A Alma e a Gente - Afonso II, o que foi gafo (Extrato de Documentário), por José Hermano Saraiva, Videofono para a RTP, 2003"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Hispânia",
      "descricao": "Nome romano da Península Ibérica, onde o latim chegou com a conquista romana"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Os romanos, que levaram o latim à Península Ibérica, desembarcaram ali durante a guerra contra Cartago. Em que século antes de Cristo?",
    "resposta": "Século terceiro antes de Cristo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hispânia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hispânia",
        "situacao": "ok",
        "texto": "Hispânia (em latim Hispania) foi o nome dado a toda a Península Ibérica (atuais Portugal, Espanha, Andorra, Gibraltar e uma pequena parte a sul da França) durante a Roma Antiga. A conquista romana da Península foi iniciada em 218 a.C. em Ampúrias e concluída quase 200 anos depois, com as guerras Cantábricas.\n[…]\nGrande parte do conflito das Guerras Púnicas entre Cartago (Fenícios, portanto) e Roma teve lugar na Península Ibérica, com o triunfo dos Romanos. Durante a subsequente invasão, os Romanos mantiveram o nome usado pelos Cartagineses, Ispânia, ao qual, mais tarde, adicionaram um H, tal como fizeram com \"Hibéria\". Da mesma forma como fizeram com a Gália (as Gálias), também se referiam à Península por \"Hispânias\" (Hispaniae).\n[…]\nEstrabão refere a Iberia no seu terceiro livro de Geografia:\n[…]\nNos primeiros tempos da romanização, a parte da Península Ibérica já ocupada pelos Romanos foi organizada administrativamente em duas partes que, no seu conjunto, eram referidas como \"as Hispânias\" (Hispaniae). À parte mais próxima de Roma foi dado o nome Citerior e, à mais remota, Ulterior. A fronteira entre as duas eram uma linha sinuosa desde Nova Cartago (actual Cartagena) e o mar Cantábrico:\n[…]\nAinda que tecnicamente toda a Península tenha sido dividida em duas metades, na prática o domínio romano centrava-se unicamente na costa mediterrânica, já que a maior parte da Península ainda era, nesta altura, controlada pelos povos autóctones (Celtiberos, Lusitanos, Ilergetes). Entre 218−205 a.C., altura em que os Cartagineses foram definitivamente expulsos do território ibérico, o poder político era exercido desde a capital Tarraco, fundada durante a Segunda Guerra Púnica.\n[…]\n«História da Hispânia» (em inglês)\n[…]\n«HISPANIA: A Map of the Iberian Peninsula in Roman times.» (em inglês)\n[…]\nAmphorae ex Hispania"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Gramática da Linguagem Portuguesa",
      "descricao": "Primeira gramática da língua portuguesa, publicada em 1536 por Fernão de Oliveira"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Publicada em 1536, a primeira gramática da língua portuguesa foi escrita por qual religioso e navegador?",
    "resposta": "Fernão de Oliveira",
    "distratores": [
      "João de Barros",
      "Duarte Nunes de Leão",
      "Pero de Magalhães Gândavo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fernão_de_Oliveira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fernão_de_Oliveira",
        "situacao": "ok",
        "texto": "Fernão de Oliveira, algumas vezes dito Fernando de Oliveira ou Fernando Oliveira (Gestosa, Couto do Mosteiro, Santa Comba Dão, 1507 – Aveiro, 1581), foi um frade, gramático e construtor bélico-naval renascentista. Foi um dos expoentes renascentistas portugueses.\n[…]\nNo final da sua vida, caiu de novo no desagrado do Tribunal da Inquisição. Com efeito, consta que, em 26 de outubro de 1555, entre tantas outras prisões, \"[…] Deu entrada nas masmorras da Inquisição, em Lisboa, o insigne aveirense Padre Fernão de Oliveira, clérigo dominicano e diplomata, escritor e filólogo, marinheiro e  soldado, aventureiro e perseguido, «o primeiro gramático da língua portuguesa e porventura o primeiro tratadista naval de todo o mundo» […]\".\n[…]\nGramática\n[…]\nActualidade do pensamento de Fernão de Oliveira: léxico e morfologia da língua portuguesa, Graça Rio-Torto, (Universidade de Coimbra, CELGA), in Fernando Oliveira: um Humanista genial., Universidade de Aveiro, Centro de Línguas e Culturas, 2009, p. 261-285.\n[…]\nFernão de Oliveira. Gramática da Linguagem Portuguesa, Fac-simile, introdução e edição actualizada e anotada por: José Eduardo Franco e João Paulo Silvestre, Lisboa: Fundação Calouste Gulbenkian. 2012. 247 pgs, por Sónia Duarte, Revista de Estudos Linguísticos da Univerdade do Porto - Vol. 8 - 2013 - 249 - 253\n[…]\nA gramática de Fernão de Oliveira: anotações críticas sobre a edição de uma obra do final da Idade Média portuguesa, por Jane Keli Almeida da Silva, André Luís de Alcântara Santos, Américo Venâncio Lopes Machado Filho, Atas do V 6º Simpósio Mundial de Estudos de Língua Portuguesa, Etimologia e linguística histórica da língua portuguesa, 157-181\n[…]\nO ABC das Línguas Castelhana e Portuguesa: Antonio de Nebrija e Fernão de Oliveira, por Sérsi Bardari"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Paralelepípedo (palavra)",
      "descricao": "Palavra do português que nomeia o sólido geométrico e a pedra de calçamento, famosa por ser longa"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas sílabas tem a palavra paralelepípedo?",
    "resposta": "Sete",
    "distratores": [
      "Seis",
      "Oito",
      "Nove"
    ],
    "fonte": [
      "https://pt.wiktionary.org/wiki/paralelepípedo"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/paralelepípedo",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Soneto",
      "descricao": "Forma poética fixa usada por Camões, Bocage e Bilac"
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O soneto, forma poética consagrada por Camões e Bilac, tem quantos versos?",
    "resposta": "Catorze",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Soneto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Soneto",
        "situacao": "ok",
        "texto": "O soneto (do italiano sonetto, pequena canção ou, literalmente, pequeno som) é uma forma fixa de poema, a mais cultivada da literatura ocidental. É composto por quatorze versos, geralmente decassílabos ou dodecassílabos rimados, que podem ser divididos em dois quartetos e dois tercetos, na variante italiana, ou em três quartetos e um dístico, na variante inglesa.\n[…]\nGraças a uma viagem que fez para a Itália entre 1521 e 1526, o poeta português Sá de Miranda regressou com uma nova estética poética para Portugal, introduzindo pela primeira vez o soneto, a canção, a sextina, as composições em tercetos e em oitavas, e os versos de dez sílabas, conhecidos como decassílabos. Luís Vaz de Camões adotou essa estética, compondo diversos sonetos com o amor como tema principal e imortalizando o soneto em língua portuguesa:\n[…]\nAlguns casos notáveis são: o poeta russo Aleksandr Pushkin compôs Eugene Onegin, um poema repleto de sonetos adotado por Tchaikovsky para compor uma de suas óperas; o francês Charles Baudelaire ajudou a divulgar os sonetos em versos alexandrinos e com novos esquemas de rimas, como abba cddc, efe fef (o chamado soneto parnasiano), em Les Fleurs du Mal. Vivaldi também usou sonetos e Liszt musicou sonetos de Petrarca.\n[…]\nFinalmente, após aderir ao humanismo e ao estilo barroco, o poema dos catorze versos acabou sendo desprezado pelos iluministas. No século XIX, ele voltou a ser cultivado, com mais fervor, por românticos, parnasianos e simbolistas, sobrevivendo ao verso livre do modernismo - que viria em seguida - até os dias atuais.\n[…]\nOlavo Bilac\n[…]\nTORRALVO, Izeti Fragata; MINCHILLO, Carlos Cortez. Sonetos de Camões. Cotia:Ateliê Editorial, 2001.\n[…]\nCAMÕES, Luís Vaz de; \"Soneto II\", Obras Completas de Luís de Camões, Correctas e emendadas pelo cuidado e diligencia de J. V. Barreto Feito e J. G. Monteiro, Tomo II. Lisboa, 1843; grafia modernizada."
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
